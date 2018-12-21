var onlineMsgUsers = {
  users:{},//在线用户
  online: 0,//在线用户数
  count: 0 ,//用户总量
};
// 游客数量
var visitor = {
  online: 0, //在线游客数
  count: 0  //总访问量
};
// 当前建立的socket连接
var isocket = {}; 
//留言历史
historyMsg = [];
function socketMsg(io){
  /**
 *
 * @Description 邮件发送 
 * 调用方法:sendMail('amor_zhang@qq.com','这是测试邮件', 'Hi Amor,这是一封测试邮件');
 *
 */
var sendMail = require('../email/mail');
  io.on('connection',(socket)=>{
    /**
     * 游客计算 广播
     */
    visitor.online++;
    visitor.count++;
    console.log("a visitor connected,now "+visitor.online +" vistors in line");
    //广播下游客人数
    console.log('visitor',visitor);
    io.emit('visitor',visitor);
    io.emit('history',historyMsg);
    console.log('history',historyMsg);
    /**
     * 用户 计算 广播
     */
    // 用户上线
    socket.on('login',obj=>{
      console.log("登录用户申请,",obj);
      socket.name = obj.userid;
      try{
      // 检查是否为已知用户
        if (!onlineMsgUsers.users.hasOwnProperty(obj.userid)) {
          onlineMsgUsers.users[obj.userid] = obj.name;
          //保存当前socket引用
          isocket[obj.usrid] = socket;
          // 在线用户加一
          onlineMsgUsers.online++;
          onlineMsgUsers.count++;
          io.emit('loginin',{all:onlineMsgUsers,user:obj});
          console.log("用户"+obj.name+"上线。");
        }
      }catch(err){
        console.log(err);
        io.emit("errorMsg",{id:"登录"})
        sendMail('zhangxunan@tycmc.net','daifanba,com宕机了','错误在 msg.js:37');
      }finally{
      }
    });
    // 用户下线
    socket.on('disconnect',()=>{
      console.log('用户下线',socket.name);
      visitor.online--;
      io.emit('visitor',visitor);
      try{
        // 将退出的用户从在线用户表中删除
        if(onlineMsgUsers.users.hasOwnProperty(socket.name)){
          //通知下各位 有人下线了
          io.emit('logout',{all:onlineMsgUsers,user:onlineMsgUsers.users[socket.name]});
          delete onlineMsgUsers.users[socket.name];
          //在线人数减一
          onlineMsgUsers.online--;
          console.log("下线了个兄弟=》"+socket.name);
        }
      }catch(err){
        console.log(err);
        sendMail('zhangxunan@tycmc.net','daifanba.com宕机了','错误在 msg.js:59');
      }finally{
        socket.emit('errorMsg',{id:"下线"});
      };
    });
    //接收留言
    socket.on('sendMsg',obj=>{
      try{
        console.log("留言：",obj.name+"|"+obj.userid+" : "+obj.msg);
        historyMsg.push({msg:obj,time:(new Date()).getTime()});
        io.emit('history',historyMsg);
        var _msg = obj.name+"|"+obj.tel+" : "+obj.msg+">>>";
        sendMail('zhangxunan@tycmc.net','daifanba.com收到了留言',_msg);
      }catch(err){
        console.log(err);
        io.emit("errorMsg",{id:"接收留言"})
        sendMail('zhangxunan@tycmc.net','daifanba.com宕机了','错误在 msg.js:80');
      }finally{
      }
    });

    //接收留言和在线状态
    socket.on('getState',()=>{
      try{
        socket.emit('visitor',visitor);
        socket.emit('history',historyMsg);
      }catch(err){console.log(err)}
    });

  });
}
module.exports = socketMsg;