<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>留言历史</span>
      <span style="float:right;padding:3px">在线:{{visitors.online}} , 访问量:{{visitors.count}}</span>
    </div>
    <div class="box-list">
      <div v-for="(o,i) in list" :key="i" class="text item">
        <span class="name">{{o.msg.name}}</span>
        :
        <span class="txt">{{o.msg.msg}}</span>
        <span class="time">{{o.time | time}}</span>

      </div>
    </div>
  </el-card>
  
</template>
<script>
export default {
  name: 'history',
  props:['historylist','visitor'],
  data(){
    return{
      list:[],
      visitors:{}
    }
  },
  watch: {
    historylist(val){
      this.list = val;
    },
    visitor(val){
      this.visitors = val;
    }
  },
  filters:{
    time(o){
      return  new Date(parseInt(o)).toLocaleString().replace(/:\d{1,2}$/,' ');
    }
  }
}
</script>
<style scoped>
  .item{
    margin: 3px 0;
  }
  .time{
    font-size: 12px;
    color: #999;
    margin: 0;
    padding:0;
  }
  .name{
    font-size: 14px;
    color: #0ba1c7;
  }
  .txt{
    font-size: 14px;
    color:#333;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 90%;
    margin: 0 auto;
  }
  .box-list{
    height: 200px;
    overflow-y: auto;
  }
</style>