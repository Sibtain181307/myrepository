(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[66],{1684:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(8),c=t(9),r=t(15),s=t(16),l=t(32),o=t(535),i=t(527),u=t(536),d=t(164),m=t(537),b=t(519),f=t(522),v=t(0),p=t.n(v),j=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).ViewEmpData=[],e.GetViewData=function(a){e.ViewEmpData=a,e.forceUpdate()},e}return Object(c.a)(t,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(f.a,{Data:this.GetViewData,url:"http://15.235.141.168:70/user/get-users",event:"Get-Employs"}),p.a.createElement(o.a,null,p.a.createElement(i.a,null,p.a.createElement("h2",null,Object(b.a)("Employ User"))),p.a.createElement(i.a,{className:"d-flex flex-row-reverse mx-5"},p.a.createElement(l.a,{to:"/EmpUser/add"},p.a.createElement(u.a,{size:"lg"},p.a.createElement("i",{className:"i-Add"})," ",Object(b.a)("Add Employ User"))))),p.a.createElement(d.a,{elevation:6,className:"w-100 overflow-auto mt-4"},p.a.createElement(m.a,{style:{minWidth:750}},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",{className:"pl-sm-24"},Object(b.a)("ID")),p.a.createElement("th",{className:"pl-sm-24"},Object(b.a)("name")),p.a.createElement("th",{className:"px-0"},Object(b.a)("Number")),p.a.createElement("th",{className:"px-0"},Object(b.a)("address")),p.a.createElement("th",{className:"px-0"},Object(b.a)("Employ Type")),p.a.createElement("th",{className:"px-0"},Object(b.a)("action")))),this.ViewEmpData.map((function(e){return p.a.createElement("tbody",null,p.a.createElement("td",null,e.id),p.a.createElement("td",null,e.name),p.a.createElement("td",null,e.number),p.a.createElement("td",null,e.address),p.a.createElement("td",null,e.empType),p.a.createElement("td",null,p.a.createElement(l.a,{to:{pathname:"/EmpUser/edit",id:e.id,path:"/EmpUser/view"}},p.a.createElement(u.a,{variant:"success"},p.a.createElement("i",{className:"i-Pen-2"}))," "),p.a.createElement(u.a,{variant:"danger"},p.a.createElement("i",{className:"i-Remove"}))))})))))}}]),t}(v.Component)},522:function(e,a,t){"use strict";var n=t(38),c=t.n(n),r=t(54),s=t(0),l=t(6),o=t.n(l);a.a=function(e){return Object(s.useEffect)((function(){(function(){var a=Object(r.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(a){if(e.Data(a.data.data),200===a.status)return a;throw new Error(a)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),null}},524:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var n=t(12),c=t(0),r=t(5),s=["as","disabled"];function l(e){var a=e.tagName,t=e.disabled,n=e.href,c=e.target,r=e.rel,s=e.onClick,l=e.tabIndex,o=void 0===l?0:l,i=e.type;a||(a=null!=n||null!=c||null!=r?"a":"button");var u={tagName:a};if("button"===a)return[{type:i||"button",disabled:t},u];var d=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),t?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:o,href:"a"===a&&t?void 0:n,target:"a"===a?c:void 0,"aria-disabled":t||void 0,rel:"a"===a?r:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var o=c.forwardRef((function(e,a){var t=e.as,c=e.disabled,o=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,s),i=l(Object.assign({tagName:t,disabled:c},o)),u=Object(n.a)(i,2),d=u[0],m=u[1].tagName;return Object(r.jsx)(m,Object.assign({},o,d,{ref:a}))}));o.displayName="Button",a.a=o},527:function(e,a,t){"use strict";var n=t(12),c=t(1),r=t(10),s=t(11),l=t.n(s),o=t(0),i=t(18),u=t(5),d=["as","bsPrefix","className"],m=["className"],b=["xxl","xl","lg","md","sm","xs"];var f=o.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,n=e.className,s=Object(r.a)(e,d);t=Object(i.a)(t,"col");var o=[],u=[];return b.forEach((function(e){var a,n,c,r=s[e];if(delete s[e],"object"===typeof r&&null!=r){var l=r.span;a=void 0===l||l,n=r.offset,c=r.order}else a=r;var i="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(a)),null!=c&&u.push("order".concat(i,"-").concat(c)),null!=n&&u.push("offset".concat(i,"-").concat(n))})),[Object(c.a)(Object(c.a)({},s),{},{className:l.a.apply(void 0,[n].concat(u,o))}),{as:a,bsPrefix:t,spans:o}]}(e),s=Object(n.a)(t,2),o=s[0],f=o.className,v=Object(r.a)(o,m),p=s[1],j=p.as,O=void 0===j?"div":j,E=p.bsPrefix,h=p.spans;return Object(u.jsx)(O,Object(c.a)(Object(c.a)({},v),{},{ref:a,className:l()(f,!h.length&&E)}))}));f.displayName="Col",a.a=f},535:function(e,a,t){"use strict";var n=t(1),c=t(10),r=t(11),s=t.n(r),l=t(0),o=t(18),i=t(5),u=["bsPrefix","className","as"],d=["xxl","xl","lg","md","sm","xs"],m=l.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,m=void 0===l?"div":l,b=Object(c.a)(e,u),f=Object(o.a)(t,"row"),v="".concat(f,"-cols"),p=[];return d.forEach((function(e){var a,t=b[e];delete b[e],a=null!=t&&"object"===typeof t?t.cols:t;var n="xs"!==e?"-".concat(e):"";null!=a&&p.push("".concat(v).concat(n,"-").concat(a))})),Object(i.jsx)(m,Object(n.a)(Object(n.a)({ref:a},b),{},{className:s.a.apply(void 0,[r,f].concat(p))}))}));m.displayName="Row",a.a=m},536:function(e,a,t){"use strict";var n=t(1),c=t(12),r=t(10),s=t(11),l=t.n(s),o=t(0),i=t(524),u=t(18),d=t(5),m=["as","bsPrefix","variant","size","active","className"],b=o.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,o=e.variant,b=e.size,f=e.active,v=e.className,p=Object(r.a)(e,m),j=Object(u.a)(s,"btn"),O=Object(i.b)(Object(n.a)({tagName:t},p)),E=Object(c.a)(O,2),h=E[0],x=E[1].tagName;return Object(d.jsx)(x,Object(n.a)(Object(n.a)(Object(n.a)({},p),h),{},{ref:a,className:l()(v,j,f&&"active",o&&"".concat(j,"-").concat(o),b&&"".concat(j,"-").concat(b),p.href&&p.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=b},537:function(e,a,t){"use strict";var n=t(1),c=t(10),r=t(11),s=t.n(r),l=t(0),o=t(18),i=t(5),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=l.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.striped,d=e.bordered,m=e.borderless,b=e.hover,f=e.size,v=e.variant,p=e.responsive,j=Object(c.a)(e,u),O=Object(o.a)(t,"table"),E=s()(r,O,v&&"".concat(O,"-").concat(v),f&&"".concat(O,"-").concat(f),l&&"".concat(O,"-striped"),d&&"".concat(O,"-bordered"),m&&"".concat(O,"-borderless"),b&&"".concat(O,"-hover")),h=Object(i.jsx)("table",Object(n.a)(Object(n.a)({},j),{},{className:E,ref:a}));if(p){var x="".concat(O,"-responsive");return"string"===typeof p&&(x="".concat(x,"-").concat(p)),Object(i.jsx)("div",{className:x,children:h})}return h}));a.a=d}}]);
//# sourceMappingURL=66.80ee5f28.chunk.js.map