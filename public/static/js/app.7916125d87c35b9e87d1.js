webpackJsonp([0],{"0Vpp":function(t,s){},DYwq:function(t,s){},NGiu:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("lRwf"),n=e.n(i),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},a,!1,function(t){e("o8nZ")},null,null).exports,r=e("/ocq"),l=e("HI0L"),c=e.n(l),v={name:"history",props:["historylist","visitor"],data:function(){return{list:[],visitors:{}}},watch:{historylist:function(t){this.list=t},visitor:function(t){this.visitors=t}},filters:{time:function(t){return new Date(parseInt(t)).toLocaleString().replace(/:\d{1,2}$/," ")}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("留言历史")]),t._v(" "),e("span",{staticStyle:{float:"right",padding:"3px"}},[t._v("在线:"+t._s(t.visitors.online)+" , 访问量:"+t._s(t.visitors.count))])]),t._v(" "),e("div",{staticClass:"box-list"},t._l(t.list,function(s,i){return e("div",{key:i,staticClass:"text item"},[e("span",{staticClass:"name"},[t._v(t._s(s.msg.name))]),t._v("\n      :\n      "),e("span",{staticClass:"txt"},[t._v(t._s(s.msg.msg))]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t._f("time")(s.time)))])])}))])},staticRenderFns:[]};var m=e("VU/8")(v,u,!1,function(t){e("c6tA")},"data-v-f321c34c",null).exports,_=new c.a({debug:!1,connection:"/"});n.a.use(_);var d={components:{Historylist:m},data:function(){return{io:{},msgHistory:[],visitor:{},user:{userid:"",name:"",tel:"",msg:""},rules:{name:[{required:!0,message:"请告诉我您是哪个单位哦~",trigger:"blur"},{min:3,message:"好好输入哟~名字很重要~",trigger:"change"}],tel:[{required:!0,message:"留下您的联系方式，稍后跟您联系~",trigger:"blur"},{min:8,message:"检查下您的联系方式，有点问题~",trigger:"change"}],msg:[{required:!0,message:"欢迎您留下点想法，我乐意倾听~",trigger:"change"}]}}},created:function(){},mounted:function(){this.io=_,this.$socket.emit("getState"),this.user.userid=this.createRandomId()},methods:{ruleForm:function(){var t=this;this.$refs.message.validate(function(s){s?t.onSubmit():(console.log("表单验证未通过，(╯‵□′)╯︵┻━┻"),t.$notify({title:"(╯‵□′)╯︵┻━┻",message:"表单验证未通过",type:"warning"}))})},onSubmit:function(){this.io&&this.io.io.connected||this.$socket.connect(),this.$socket.emit("login",this.user),this.$socket.emit("sendMsg",this.user)},createRandomId:function(){return(1e7*Math.random()).toString(16).substr(0,4)+"-"+(new Date).getTime()+"-"+Math.random().toString().substr(2,5)},close:function(){this.$socket.disconnect()}},sockets:{connect:function(){console.log("连接socket成功")},loginin:function(t){console.log("在线人:",t)},loginout:function(t){console.log("在线人:",t)},history:function(t){console.log(t),this.msgHistory=t},errorMsg:function(t){console.error(t)},visitor:function(t){this.visitor=t,console.log(t,"visitor")}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("el-form",{ref:"message",attrs:{model:t.user,rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{prop:"name",label:"您是？"}},[e("el-input",{attrs:{placeholder:"请请输入名称"},model:{value:t.user.name,callback:function(s){t.$set(t.user,"name",s)},expression:"user.name"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"tel",label:"联系方式"}},[e("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:t.user.tel,callback:function(s){t.$set(t.user,"tel",s)},expression:"user.tel"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"msg",label:"留言"}},[e("el-input",{attrs:{type:"textarea",rows:"4"},model:{value:t.user.msg,callback:function(s){t.$set(t.user,"msg",s)},expression:"user.msg"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(s){t.ruleForm()}}},[t._v("留言给我")])],1)],1),t._v(" "),e("Historylist",{attrs:{historylist:t.msgHistory,visitor:t.visitor}})],1)},staticRenderFns:[]};var p=e("VU/8")(d,f,!1,function(t){e("b18H")},"data-v-5fe80edc",null).exports,h={name:"jianli",components:{Msg:p},data:function(){return{msg:!1}},created:function(){e("DYwq")}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"download"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.msg=!0}}},[t._v("留言板")]),t._v(" "),e("a",{attrs:{href:"/static/张旭简历.docx",download:"张旭-web前端-简历"}},[t._v("下载电子版简历")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"sec social"},[e("h3",{staticClass:"sec-title"},[t._v("社交主页")]),t._v(" "),e("ul",{staticClass:"sec-content"},[e("li",{staticClass:"site"},[e("svg",{staticClass:"site-logo",attrs:{viewBox:"0 0 16 16",version:"1.1",width:"30","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),t._v(" "),e("a",{staticClass:"site-link",attrs:{href:"http://github.com/aixuone",target:"_blank"}},[t._v("http://github.com/aixuone")])])]),t._v(" "),e("h3",{staticClass:"sec-title"},[t._v("个人域名网站：")]),t._v(" "),t._m(5)]),t._v(" "),e("el-dialog",{attrs:{title:"您好，欢迎",visible:t.msg,width:"96%",top:"5px"},on:{"update:visible":function(s){t.msg=s}}},[e("Msg")],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"basis"},[e("img",{staticClass:"basis-img",attrs:{src:"https://img2.bosszhipin.com/boss/avatar/avatar_16.png"}}),t._v(" "),e("dl",{staticClass:"basis-text"},[e("dt",{staticClass:"name"},[t._v("张旭")]),t._v(" "),e("dd",[t._v("\n        25岁"),e("span",{staticClass:"devide first"},[t._v("|")]),t._v("\n\n        男\n\n        "),e("span",{staticClass:"devide"},[t._v("|")]),t._v("\n        本科"),e("span",{staticClass:"devide"},[t._v("|")]),t._v("\n        3年经验\n      ")]),t._v(" "),e("dd",[t._v("15533976690"),e("span",{staticClass:"devide"},[t._v("|")]),t._v("aixuone@foxmail.com")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sec"},[s("h3",{staticClass:"sec-title"},[this._v("个人优势")]),this._v(" "),s("p",{staticClass:"sec-content"},[this._v("web前端3年。HTML5, CSS3,es5,es6,vue。"),s("br"),this._v("做过webAPP,微信小程序，多个企业用管理系统(非外包)，涉及电商，企业管理，企业服务等多个方面。"),s("br"),this._v("接触的面也算比较广，对程序设计，前后分离，后台微服务也有一些个人的理解，与后台人员沟通无障碍。"),s("br"),this._v("学习能力好，对待工作一丝不苟，易融入团队。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sec expect-pos"},[s("h3",{staticClass:"sec-title"},[this._v("期望职位")]),this._v(" "),s("div",{staticClass:"sec-content"},[s("ul",{staticClass:"option-wrapper"},[s("li",{attrs:{ka:"target_position_40d61a393b8c14a21Xd-3d61Eg~~","data-id":"40d61a393b8c14a21Xd-3d61Eg~~"}},[this._v("web前端     石家庄     7k-8k     不限")]),this._v(" "),s("li",{attrs:{ka:"target_position_a3c3fd9507afb06b1nJ82di_GFI~","data-id":"a3c3fd9507afb06b1nJ82di_GFI~"}},[this._v("web前端     北京     15k-16k     不限")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sec"},[e("h3",{staticClass:"sec-title"},[t._v("工作经历")]),t._v(" "),e("div",{staticClass:"sec-content"},[e("div",{staticClass:"from"},[t._v("\n        天远科技集团有限公司\n\n      ")]),t._v(" "),e("div",{staticClass:"major"},[e("span",{staticClass:"time"},[t._v("2018.06-至今")]),t._v("\n        web前端\n      ")]),t._v(" "),e("p",[e("b",[t._v("内容：")]),t._v("智能硬件与软件结合。"),e("br"),t._v("企业管理方向项目。"),e("br"),t._v("企业服务平台方向项目。")])]),t._v(" "),e("div",{staticClass:"sec-content"},[e("div",{staticClass:"from"},[t._v("\n        石家庄码客教育\n\n      ")]),t._v(" "),e("div",{staticClass:"major"},[e("span",{staticClass:"time"},[t._v("2017.07-2018.05")]),t._v("\n        web前端讲师"),e("span",{staticClass:"devide"},[t._v("|")]),t._v("教学部\n      ")]),t._v(" "),e("p",[e("b",[t._v("内容：")]),t._v("web前端方向授课。")])]),t._v(" "),e("div",{staticClass:"sec-content"},[e("div",{staticClass:"from"},[t._v("\n        素文科技有限公司（城北网）\n\n      ")]),t._v(" "),e("div",{staticClass:"major"},[e("span",{staticClass:"time"},[t._v("2017.02-2017.06")]),t._v("\n        Web前端"),e("span",{staticClass:"devide"},[t._v("|")]),t._v("技术部\n      ")]),t._v(" "),e("p",[e("b",[t._v("内容：")]),t._v("php +前端(政府外包+企业外包)")])]),t._v(" "),e("div",{staticClass:"sec-content"},[e("div",{staticClass:"from"},[t._v("\n        找大师app\n\n      ")]),t._v(" "),e("div",{staticClass:"major"},[e("span",{staticClass:"time"},[t._v("2016.08-2016.12")]),t._v("\n        web前端\n      ")]),t._v(" "),e("p",[e("b",[t._v("内容：")]),t._v("● webapp"),e("br"),t._v("● 微信小程序"),e("br"),t._v("● 商城"),e("br"),t._v("● 定期活动")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sec"},[e("h3",{staticClass:"sec-title"},[t._v("教育经历")]),t._v(" "),e("div",{staticClass:"sec-content"},[e("div",{staticClass:"from"},[t._v("石家庄铁道大学四方学院")]),t._v(" "),e("div",{staticClass:"major"},[e("span",{staticClass:"time"},[t._v("2012-2016")]),t._v("\n        计算机科学与技术"),e("span",{staticClass:"devide"},[t._v("|")]),t._v("本科\n      ")]),t._v(" "),e("p",[t._v("四年团支书。曾获2012-2013学年度国家励志奖学金。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"sec-content"},[s("li",{staticClass:"site"},[s("a",{staticClass:"site-link",attrs:{href:"http://daifanba.com",target:"_blank"}},[this._v("daifanba.com")]),this._v("\n            \n        "),s("a",{staticClass:"site-link",attrs:{href:"http://aixu.fun",target:"_blank"}},[this._v("aixu.fun(施工中...)")])])])}]};var b=e("VU/8")(h,g,!1,function(t){e("0Vpp")},"data-v-4996e305",null).exports,C={name:"socket",data:function(){return{io:{},activeUser:0,info:"ixu",username:"",userid:"",msg:"",rmsg:"",to:"",userlist:{}}},sockets:{disconnet:function(t){console.log("失连了",t)},connect:function(t){console.log("恭喜，连接上了"),console.log("connect",t)},loginin:function(t){console.log("login",t),this.userlist=t.person,this.info=t.user.name+"登录了"},logout:function(t){console.log("loginout",t),this.userlist=t.person,this.info=t.userid+"下线了"},to:function(t){console.log("收到信息",t)},from:function(t){console.log("发送了信息",t)}},created:function(){io=this.connect()},methods:{login:function(){console.log("登录一下"),this.$socket.connect(),this.$socket.emit("login",{name:this.username,userid:this.userid})},loginout:function(){console.log("下线")},sendmsg:function(){console.log("发送了信息"),this.$socket.emit("sendmsg",{msg:this.msg,from:this.userid,to:this.to})},close:function(){console.log(this),this.$socket.close()},connect:function(){var t=new c.a({debug:!1,connection:"http://localhost",socket:this.$socket});return n.a.use(t),t}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-container",[e("el-header",{staticStyle:{"text-align":"center"}},[e("h1",[t._v("随便看看吧")])]),t._v(" "),e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("el-collapse",{model:{value:t.activeUser,callback:function(s){t.activeUser=s},expression:"activeUser"}},[e("el-collapse-item",{attrs:{title:"在线",name:"1"}},t._l(t.userlist,function(s,i){return e("p",{key:i},[t._v(t._s(s))])})),t._v(" "),e("el-collapse-item",{attrs:{title:"离线",name:"2"}})],1)],1),t._v(" "),e("el-main",{attrs:{height:""}},[e("el-form",{attrs:{"label-width":"100px"}},[e("el-form-item",{attrs:{label:"用户名"}},[e("el-input",{attrs:{type:"text"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"用户id"}},[e("el-input",{attrs:{type:"text"},model:{value:t.userid,callback:function(s){t.userid=s},expression:"userid"}})],1),t._v(" "),e("el-form-item",[e("el-button",{on:{click:function(s){t.login()}}},[t._v("登录")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(s){t.close()}}},[t._v("关闭")])],1),t._v(" "),e("el-form-item",{attrs:{label:"info"}},[e("el-input",{attrs:{type:"textarea",placeholder:"未接收消息",readonly:""},model:{value:t.info,callback:function(s){t.info=s},expression:"info"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"发送给"}},[e("el-input",{attrs:{placeholder:"输入接受消息用户id"},model:{value:t.to,callback:function(s){t.to=s},expression:"to"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"留言"}},[e("el-input",{attrs:{type:"textarea",rows:"5",placeholder:"请输入留言..."},model:{value:t.msg,callback:function(s){t.msg=s},expression:"msg"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary",icon:"el-icon-message",circle:""},on:{click:function(s){t.sendmsg()}}})],1),t._v(" "),e("el-form-item",{attrs:{label:"接收消息"}},[e("el-input",{attrs:{type:"textarea",placeholder:"未接收消息",readonly:""},model:{value:t.rmsg,callback:function(s){t.rmsg=s},expression:"rmsg"}})],1)],1)],1)],1),t._v("\r\n  "+t._s(t.userlist)+"\r\n")],1)},staticRenderFns:[]};var k=e("VU/8")(C,x,!1,function(t){e("NGiu")},null,null).exports;n.a.use(r.a);var w=new r.a({mode:"history",routes:[{path:"/msg",name:"msg",component:p},{path:"/",name:"jianli",component:b},{path:"/chat",name:"chat",component:k}]}),y=(e("tvR6"),e("l6IN")),$=e.n(y);n.a.config.productionTip=!1,n.a.use($.a),new n.a({el:"#app",router:w,components:{App:o},template:"<App/>"})},b18H:function(t,s){},c6tA:function(t,s){},l6IN:function(t,s){t.exports=ELEMENT},lRwf:function(t,s){t.exports=Vue},o8nZ:function(t,s){},tvR6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.7916125d87c35b9e87d1.js.map