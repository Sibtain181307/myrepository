(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[161],{1603:function(e,a,t){"use strict";t.r(a);var n=t(47),l=t(8),i=t(9),r=t(15),s=t(16),m=t(0),c=t.n(m),o=t(765),u=t(731),d=t(51),b=t(14),g=t.n(b),h=t(27),E=t(32),p=t(536),v=u.object().shape({email:u.string().email("Invalid email").required("email is required")}),N=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"watson@example.com"},e.handleChange=function(a){a.persist(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a)},e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:"url(/assets/images/photo-wide-4.jpg)"}},c.a.createElement("div",{className:"auth-content"},c.a.createElement("div",{className:"card o-hidden"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"p-4"},c.a.createElement("div",{className:"auth-logo text-center mb-4"},c.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),c.a.createElement("h1",{className:"mb-3 text-18"},"Forgot Password"),c.a.createElement(o.b,{initialValues:this.state,validationSchema:v,onSubmit:this.handleSubmit},(function(e){var a=e.values,t=e.errors,n=(e.touched,e.handleChange),l=e.handleBlur,i=e.handleSubmit;e.isSubmitting;return c.a.createElement("form",{onSubmit:i},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email address"),c.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:n,onBlur:l,value:a.email}),t.email&&c.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.email)),c.a.createElement("button",{className:"btn btn-rounded btn-primary w-100 mt-2",type:"submit"},"Reset Password"))})),c.a.createElement("div",{className:"mt-3 text-center"},c.a.createElement(E.a,{to:"/session/signin",className:"text-muted"},c.a.createElement("u",null,"Signin"))))),c.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/assets/images/photo-long-3.jpg)"}},c.a.createElement("div",{className:"pe-3 auth-right"},c.a.createElement(p.a,{className:"btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"},c.a.createElement("i",{className:"i-Mail-with-At-Sign"})," Sign up with Email"),c.a.createElement(p.a,{className:"btn btn-rounded btn-outline-google w-100 my-1 btn-icon-text"},c.a.createElement("i",{className:"i-Google-Plus"})," Sign up with Google"),c.a.createElement(p.a,{className:"btn btn-rounded w-100 my-1 btn-icon-text btn-outline-facebook"},c.a.createElement("i",{className:"i-Facebook-2"})," Sign up with Facebook")))))))}}]),t}(m.Component);a.default=Object(h.b)((function(e){return{loginWithEmailAndPassword:g.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:d.e})(N)}}]);
//# sourceMappingURL=161.c68a37cb.chunk.js.map