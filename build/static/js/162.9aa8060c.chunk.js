(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[162],{1602:function(e,a,t){"use strict";t.r(a);var n=t(47),l=t(8),s=t(9),r=t(15),o=t(16),c=t(0),i=t.n(c),m=t(765),d=(t(731),t(51)),u=t(14),b=t.n(u),g=t(27),h=t(32),p=t(536),E=(t(6),t(29),t(519)),v=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={email:"watson@example.com",password:"12345678"},e.handleChange=function(a){a.persist(),e.setState(Object(n.a)({},a.target.name,a.target.value)),console.log("Handle change called"),console.log(e.state)},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a),console.log("handle Submit called")},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:"url(/assets/images/logistics.png)"}},i.a.createElement("div",{className:"auth-content"},i.a.createElement("div",{className:"card bg-white text-white o-hidden"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"p-4"},i.a.createElement("div",{className:"text-center mb-4"},i.a.createElement("img",{src:"/assets/images/ziyad-logo.png",alt:"logo"})),i.a.createElement("h1",{className:"mb-3 text-18 text-white"},Object(E.a)("signin")),i.a.createElement(m.b,{initialValues:this.state,onSubmit:this.handleSubmit},(function(a){var t=a.values,n=a.errors,l=(a.touched,a.handleChange),s=a.handleBlur,r=a.handleSubmit;a.isSubmitting;return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"email"},Object(E.a)("email")),i.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:l,onBlur:s,value:t.email}),n.email&&i.a.createElement("div",{className:"text-danger mt-1 ml-2"},n.email)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"password"},Object(E.a)("password")),i.a.createElement("input",{className:"form-control form-control-rounded",type:"password",name:"password",onChange:l,onBlur:s,value:t.password}),n.password&&i.a.createElement("div",{className:"text-danger mt-1 ml-2"},n.password)),i.a.createElement(h.a,{to:"/dashboard/v1"},i.a.createElement("button",{className:"btn btn-rounded btn-success text-white w-100 my-1 mt-2",type:"submit",onClick:r},Object(E.a)("signin"))))})),i.a.createElement("div",{className:"mt-3 text-center"},i.a.createElement(h.a,{to:"/session/forgot-password",className:"text-muted"},i.a.createElement("u",null,Object(E.a)("forgotPassword")))))),i.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/assets/images/dark-log.jpg)"}},i.a.createElement("div",{className:"pe-3 auth-right"},i.a.createElement(h.a,{to:"/session/signup",className:"btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"},i.a.createElement("i",{className:"i-Mail-with-At-Sign"})," ",Object(E.a)("signUpWithEmail")),i.a.createElement(p.a,{className:"btn btn-rounded btn-outline-google w-100 my-1 btn-icon-text"},i.a.createElement("i",{className:"i-Google-Plus"}),Object(E.a)("signUpWithGoogle")),i.a.createElement(p.a,{className:"btn btn-rounded w-100 my-1 btn-icon-text btn-outline-facebook"},i.a.createElement("i",{className:"i-Facebook-2"})," ",Object(E.a)("signUpWithFacebook"))))))))}}]),t}(c.Component);a.default=Object(g.b)((function(e){return{loginWithEmailAndPassword:b.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:d.e})(v)}}]);
//# sourceMappingURL=162.9aa8060c.chunk.js.map