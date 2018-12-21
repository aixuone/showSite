<template>
<div>
  <el-form :model="user" ref="message" :rules="rules" label-width="100px">
    <el-form-item prop="name" label="您是？">
      <el-input v-model="user.name" placeholder="请请输入名称"></el-input>      
    </el-form-item>
    <el-form-item prop="tel" label="联系方式">
      <el-input v-model="user.tel" placeholder="请输入联系方式"></el-input>
    </el-form-item>
    <el-form-item prop="msg" label="留言">
      <el-input type="textarea" rows="4" v-model="user.msg"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="ruleForm()">留言给我</el-button>
    </el-form-item>
  </el-form>
  <Historylist :historylist="msgHistory" :visitor="visitor"></Historylist>
</div>
</template>
<script>
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import Historylist from './msghistory.vue';
var isocket = new VueSocketIO({
  debug: false,
  // connection: 'http://localhost',
  connection: '/'
});
Vue.use(isocket);

export default {
  components:{
    Historylist
  },
  data(){
    return{
      // socket
      io:{},
      //历史消息
      msgHistory:[],
      //在线人数
      visitor:{},
      //用户
      user:{
        userid:'',
        name:'',
        tel:'',
        msg:''
      },
      //rules start
      rules:{
        name:[
          {required: true, message:"请告诉我您是哪个单位哦~",trigger:'blur'},
          {min:3,message:"好好输入哟~名字很重要~",trigger:'change'}
        ],
        tel:[
          {required: true, message:"留下您的联系方式，稍后跟您联系~",trigger:'blur'},
          {min:8,message:"检查下您的联系方式，有点问题~",trigger:'change'}
        ],
        msg:[
          {required: true, message:"欢迎您留下点想法，我乐意倾听~",trigger:'change'},
        ]
      }
      //rules end
    }
  },
  created () {
  },
  mounted () {
    this.io = isocket;
    this.$socket.emit('getState');
    this.user.userid = this.createRandomId();
  },
  methods: {
    //验证
    ruleForm(){
      this.$refs['message'].validate((valid)=>{
        if(valid){
          this.onSubmit();
        }else{
            console.log('表单验证未通过，(╯‵□′)╯︵┻━┻');
            this.$notify({
              title: '(╯‵□′)╯︵┻━┻',
              message: '表单验证未通过',
              type: 'warning'
            });
        }
      });
    },
    //提交留言
    onSubmit(){
      if(this.io?!this.io.io.connected:true){
        this.$socket.connect();
      }
      this.$socket.emit('login',this.user);
      this.$socket.emit('sendMsg',this.user);
    },
    //创建随机id
    createRandomId(){
      var id = (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
      return id;
    },

    //socket 
    // #关闭
    close(){
      // 关闭socket
      this.$socket.disconnect();
    }
  },
  sockets:{
    connect:function(){
      console.log('连接socket成功');
    },
    loginin:function(res){
      console.log("在线人:",res);
    },
    loginout:function(res){
      console.log("在线人:",res);
    },
    history:function(res){
      console.log(res);
      this.msgHistory = res;
    },
    errorMsg:function(err){
      console.error(err);
    },
    visitor:function(res){
      this.visitor = res;
      console.log(res,"visitor");
    }
  }
}
</script>
<style scoped>

</style>
