webpackJsonp([1],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper lightgreen"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Employee Manager\n            ")]),this._v(" "),t("ul",{staticClass:"right"},[t("li",[t("router-link",{attrs:{to:"/"}},[this._v("Dashboard")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:"/login"}},[this._v("Login")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:"/register"}},[this._v("Register")])],1)])],1)])])},staticRenderFns:[]};var n={name:"App",components:{Navbar:i("VU/8")(null,s,!1,function(e){i("jhlN")},"data-v-62e3ad22",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var l=i("VU/8")(n,o,!1,function(e){i("S2FO")},null,null).exports,r=i("/ocq"),c=i("kxiW"),d=i.n(c),p=(i("881v"),d.a.initializeApp({apiKey:"AIzaSyCB-LUP2ggZL1SmdAmrVHBMX622tD0LjQ4",authDomain:"vuefs-prod-b1f4c.firebaseapp.com",databaseURL:"https://vuefs-prod-b1f4c.firebaseio.com",projectId:"vuefs-prod-b1f4c",storageBucket:"vuefs-prod-b1f4c.appspot.com",messagingSenderId:"837887642062"}).firestore()),m={name:"dashboard",data:function(){return{employees:[],loaded:!1}},created:function(){var e=this;p.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var i={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(i)}),e.loaded=!0})}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e.loaded?i("div",e._l(e.employees,function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n              "+e._s(t.employee_id)+": "+e._s(t.name)+" \n              \n              "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)}),0):i("div",[e._m(1)])]),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating\n           btn-large orange",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preloader-wrapper big active"},[t("div",{staticClass:"spinner-layer spinner-blue-only"},[t("div",{staticClass:"circle-clipper left"},[t("div",{staticClass:"circle"})]),t("div",{staticClass:"gap-patch"},[t("div",{staticClass:"circle"})]),t("div",{staticClass:"circle-clipper right"},[t("div",{staticClass:"circle"})])])])}]};var v=i("VU/8")(m,u,!1,function(e){i("X0LA")},"data-v-34353784",null).exports,f={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;p.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(err)})}}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("New Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee ID")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),i("label",[e._v("Department")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),i("label",[e._v("Position")])])]),e._v(" "),i("router-link",{staticClass:"btn red",attrs:{to:"/"}},[i("i",{staticClass:"fa fa-chevron-circle-left"})]),e._v(" "),e._m(0)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"submit"},[t("button",{staticClass:"btn",attrs:{type:"submit"}},[this._v("Submit")])])}]};var h=i("VU/8")(f,_,!1,function(e){i("Tl61")},"data-v-627f2f4a",null).exports,y={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){p.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"view-employee"}},[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[e._v(e._s(e.name))])]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Employee ID: "+e._s(e.employee_id))]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),i("router-link",{staticClass:"btn orange",attrs:{to:"/"}},[i("i",{staticClass:"fa fa-chevron-circle-left"})]),e._v(" "),i("div",{staticClass:"del"},[i("button",{staticClass:"btn  red",on:{click:e.deleteEmployee}},[i("i",{staticClass:"fa fa-trash"})])]),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating\n         btn-large orange",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]};var g=i("VU/8")(y,C,!1,function(e){i("p4Mx")},"data-v-68897bf7",null).exports,w={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){p.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"edit-employee"}},[i("h3",[e._v("Edit Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),i("router-link",{staticClass:"btn red",attrs:{to:"/"}},[i("i",{staticClass:"fa fa-chevron-circle-left"})]),e._v(" "),e._m(0)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"submit"},[t("button",{staticClass:"btn",attrs:{type:"submit"}},[this._v("Submit")])])}]};var x=i("VU/8")(w,b,!1,function(e){i("izYA")},"data-v-2ab27cea",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12 m8 offset-m2"},[i("div",{staticClass:"login card-panel  white-text center"},[i("h3",{},[e._v("Login")]),e._v(" "),i("form",[i("div",{staticClass:"input-field"},[i("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),i("input",{staticClass:"white-text",attrs:{type:"text",id:"email"}}),e._v(" "),i("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),i("div",{staticClass:"input-field"},[i("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),i("input",{staticClass:"white-text",attrs:{type:"text",id:"password"}}),e._v(" "),i("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),i("button",{staticClass:"btn btn-large grey lighten-4 black-text"},[e._v("Login")])])])])])])])}]};var $=i("VU/8")({name:"login",data:function(){return{}}},E,!1,function(e){i("mweV")},"data-v-0238b8f5",null).exports,k={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;d.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){console.log(e.email),console.log(e.password),alert("Account created for "+e.email),t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12 m8 offset-m2"},[i("div",{staticClass:"login card-panel  grey lighten-4 black-text  center"},[i("h3",{},[e._v("Register")]),e._v(" "),i("form",[i("div",{staticClass:"input-field"},[i("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"black-text",attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),i("label",{attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),i("div",{staticClass:"input-field"},[i("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"black-text",attrs:{type:"text",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),i("label",{attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),i("button",{staticClass:"btn btn-large grey lighten-4 blue-text",on:{click:e.register}},[e._v("Submit")])])])])])])])},staticRenderFns:[]};var P=i("VU/8")(k,N,!1,function(e){i("chNn")},"data-v-de2daec8",null).exports;a.a.use(r.a);var D=new r.a({routes:[{path:"/",name:"Dashboard",component:v},{path:"/login",name:"login",component:$},{path:"/register",name:"register",component:P},{path:"/new",name:"new-employee",component:h},{path:"/edit/:employee_id",name:"edit-employee",component:x},{path:"/:employee_id",name:"view-employee",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:D,components:{App:l},template:"<App/>"})},S2FO:function(e,t){},Tl61:function(e,t){},X0LA:function(e,t){},chNn:function(e,t){},izYA:function(e,t){},jhlN:function(e,t){},mweV:function(e,t){},p4Mx:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.52036c69949ac32d7a87.js.map