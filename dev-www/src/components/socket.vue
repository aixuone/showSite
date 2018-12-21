<template>
<el-container>
  <el-header style="text-align:center">
    <!-- Header content -->
    <h1>随便看看吧</h1>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <!-- Aside content -->
      <el-collapse v-model="activeUser">
        <el-collapse-item title="在线" name="1">
          <p v-for="(item,index) in userlist" :key="index">{{item}}</p>
        </el-collapse-item>
        <el-collapse-item title="离线" name="2">
          
        </el-collapse-item>
      </el-collapse>
      
    </el-aside>
    <el-main height="">
      <!-- Main content -->
      <el-form label-width="100px">
        
        <el-form-item label="用户名">
          <el-input type="text" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="用户id">
          <el-input type="text" v-model="userid"></el-input>
        </el-form-item>
        <el-form-item >
            <el-button @click="login()">登录</el-button>
            <el-button type="text" @click="close()">关闭</el-button>
            
        </el-form-item>
        <el-form-item label="info">
          <el-input v-model="info" type="textarea" placeholder="未接收消息" readonly></el-input>
        </el-form-item>
        <el-form-item label="发送给">
          <el-input v-model="to" placeholder="输入接受消息用户id"></el-input>
        </el-form-item>
        
        <el-form-item label="留言">
          <el-input type="textarea" rows="5" v-model="msg" placeholder="请输入留言..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-message" circle @click="sendmsg()"></el-button>
        </el-form-item>
        
        <el-form-item label="接收消息">
          <el-input v-model="rmsg" type="textarea" placeholder="未接收消息" readonly></el-input>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
  {{userlist}}
</el-container>

</template>
<script>
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
// var io = new VueSocketIO({
//   debug: false,
//   connection: 'http://localhost'
// })
// Vue.use(io);
export default {
  name: "socket",
  data(){
    return{
      io:{},//socket
      activeUser:0,
      info:'ixu',
      username:"",
      userid:"",
      msg:"",
      rmsg:"",
      to:'',
      userlist:{}
    }
  },
  sockets:{
    disconnet:function(data){
      console.log("失连了",data);
    },
    connect:function(data){
      console.log("恭喜，连接上了");
      console.log("connect",data);
    },
    loginin:function(data){
      console.log('login',data);
      this.userlist = data.person;
      this.info = data.user.name + "登录了";
    },
    logout:function(data){
      console.log('loginout',data);
      this.userlist = data.person;
      this.info = data.userid +"下线了";
    },
    to:function(data){
      console.log("收到信息",data);
    },
    from:function(data){
      console.log("发送了信息",data);
    }

  },
  created() {
    io = this.connect();
  },
  methods:{
    login(){
      console.log("登录一下");
      this.$socket.connect();
      this.$socket.emit('login',{
        name: this.username,
        userid: this.userid
      });
    },
    loginout(){
      console.log('下线');
    },
    sendmsg(){
      console.log("发送了信息");
      this.$socket.emit('sendmsg',{msg:this.msg,from:this.userid,to:this.to});
    },
    close(){
      // 关闭socket
      console.log(this);
      this.$socket.close();
    },
    connect(){
      //连接 socket
      var isocket = new VueSocketIO({
        debug: false,
        connection: 'http://localhost',
        socket: this.$socket
      })
      Vue.use(isocket);
      return isocket;
    }
  }
}
</script>
<style lang="css">
  div{font-size: 20px;}
</style>