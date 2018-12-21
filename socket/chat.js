// 在线用户
var onlineUsers = {
  person: {}, //在线人
  count: 0    // 总数
};
var usocket = {};
function socket(io){
  io.on('connection',(socket)=>{
    console.log("a user connected");

    //监听 新用户登陆
    socket.on('login',obj => {
      console.log("登录用户",obj);
      // 将 唯一标识userid 当做socket名称,退出时用到
      socket.name = obj.userid;
      console.log("收到了登录请求");
      //检查是否已在在线用户表中，没有则添加
      if(!onlineUsers.person.hasOwnProperty(obj.userid)){
        onlineUsers.person[obj.userid] = obj.name;
        //保存socket引用
        usocket[obj.userid] = socket;
        //在线人数加1
        ++onlineUsers.count;
        
        //向所有用户广播 新上线用户
        io.emit('loginin',{person:onlineUsers.person,count:onlineUsers.count,user:obj});
        console.log("新上线用户=>",obj.name);
      }
    });

    //监听新用户退出
    socket.on('disconnect',()=>{
      console.log('用户下线',socket.name);
      // 将退出的用户从在线用户表中删除
      if(onlineUsers.person.hasOwnProperty(socket.name)){
        delete onlineUsers.person[socket.name];
        //在线人数减一
        onlineUsers.count--;
        //通知下各位 有人下线了
        io.emit('logout',{person:onlineUsers.person,count:onlineUsers.person,userid:socket.name});
        console.log("下线了个兄弟=》"+socket.name);
      }
    });

    //监听 用户发布消息
    socket.on('sendmsg',obj =>{
      console.log(obj.from+"发送了信息给"+obj.to+" ,内容是:"+obj.msg);
      usocket[obj.to].emit('to',obj);
      usocket[obj.from].emit('from',obj);
    });
  });

}

module.exports = socket;