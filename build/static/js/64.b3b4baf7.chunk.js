(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[64],{1694:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(8),r=t(9),c=t(15),s=t(16),l=t(32),i=t(535),o=t(527),u=t(536),d=t(164),m=t(537),b=t(519),f=t(522),v=t(0),p=t.n(v),j=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).ViewEmpDriverData=[],e.GetViewData=function(a){e.ViewEmpDriverData=a,e.forceUpdate()},e}return Object(r.a)(t,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(f.a,{Data:this.GetViewData,url:"http://15.235.141.168:70/user/get-users",event:"Get-Driver-Employs"}),p.a.createElement(i.a,null,p.a.createElement(o.a,null,p.a.createElement("h2",null,Object(b.a)("Employ Driver"))),p.a.createElement(o.a,{className:"d-flex flex-row-reverse mx-5"},p.a.createElement(l.a,{to:"/EmpDriver/add"},p.a.createElement(u.a,{size:"lg"},p.a.createElement("i",{className:"i-Add"})," ",Object(b.a)("Add Employ Driver"))))),p.a.createElement(d.a,{elevation:6,className:"w-100 overflow-auto mt-4"},p.a.createElement(m.a,{style:{minWidth:750}},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",{className:"px-0"},Object(b.a)("ID")),p.a.createElement("th",{className:"px-0"},Object(b.a)("Employ Type")),p.a.createElement("th",{className:"pl-sm-24"},Object(b.a)("name")),p.a.createElement("th",{className:"px-0"},Object(b.a)("Number")),p.a.createElement("th",{className:"px-0"},Object(b.a)("address")),p.a.createElement("th",{className:"px-0"},Object(b.a)("action")))),this.ViewEmpDriverData.map((function(e){return p.a.createElement("tbody",null,p.a.createElement("td",null,e.id),p.a.createElement("td",null,e.name),p.a.createElement("td",null,e.empType),p.a.createElement("td",null,e.number),p.a.createElement("td",null,e.address),p.a.createElement("td",null,p.a.createElement(l.a,{to:{pathname:"/EmpDriver/edit",id:e.id,path:"/EmpDrvier/view"}},p.a.createElement(u.a,{variant:"success"},p.a.createElement("i",{className:"i-Pen-2"}))," "),p.a.createElement(u.a,{variant:"danger"},p.a.createElement("i",{className:"i-Remove"}))))})))))}}]),t}(v.Component)},522:function(e,a,t){"use strict";var n=t(38),r=t.n(n),c=t(54),s=t(0),l=t(6),i=t.n(l);a.a=function(e){return Object(s.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(a){if(e.Data(a.data.data),200===a.status)return a;throw new Error(a)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),null}},524:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var n=t(12),r=t(0),c=t(5),s=["as","disabled"];function l(e){var a=e.tagName,t=e.disabled,n=e.href,r=e.target,c=e.rel,s=e.onClick,l=e.tabIndex,i=void 0===l?0:l,o=e.type;a||(a=null!=n||null!=r||null!=c?"a":"button");var u={tagName:a};if("button"===a)return[{type:o||"button",disabled:t},u];var d=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),t?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:i,href:"a"===a&&t?void 0:n,target:"a"===a?r:void 0,"aria-disabled":t||void 0,rel:"a"===a?c:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var i=r.forwardRef((function(e,a){var t=e.as,r=e.disabled,i=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s),o=l(Object.assign({tagName:t,disabled:r},i)),u=Object(n.a)(o,2),d=u[0],m=u[1].tagName;return Object(c.jsx)(m,Object.assign({},i,d,{ref:a}))}));i.displayName="Button",a.a=i},527:function(e,a,t){"use strict";var n=t(12),r=t(1),c=t(10),s=t(11),l=t.n(s),i=t(0),o=t(18),u=t(5),d=["as","bsPrefix","className"],m=["className"],b=["xxl","xl","lg","md","sm","xs"];var f=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,n=e.className,s=Object(c.a)(e,d);t=Object(o.a)(t,"col");var i=[],u=[];return b.forEach((function(e){var a,n,r,c=s[e];if(delete s[e],"object"===typeof c&&null!=c){var l=c.span;a=void 0===l||l,n=c.offset,r=c.order}else a=c;var o="xs"!==e?"-".concat(e):"";a&&i.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&u.push("order".concat(o,"-").concat(r)),null!=n&&u.push("offset".concat(o,"-").concat(n))})),[Object(r.a)(Object(r.a)({},s),{},{className:l.a.apply(void 0,[n].concat(u,i))}),{as:a,bsPrefix:t,spans:i}]}(e),s=Object(n.a)(t,2),i=s[0],f=i.className,v=Object(c.a)(i,m),p=s[1],j=p.as,O=void 0===j?"div":j,E=p.bsPrefix,h=p.spans;return Object(u.jsx)(O,Object(r.a)(Object(r.a)({},v),{},{ref:a,className:l()(f,!h.length&&E)}))}));f.displayName="Col",a.a=f},535:function(e,a,t){"use strict";var n=t(1),r=t(10),c=t(11),s=t.n(c),l=t(0),i=t(18),o=t(5),u=["bsPrefix","className","as"],d=["xxl","xl","lg","md","sm","xs"],m=l.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,m=void 0===l?"div":l,b=Object(r.a)(e,u),f=Object(i.a)(t,"row"),v="".concat(f,"-cols"),p=[];return d.forEach((function(e){var a,t=b[e];delete b[e],a=null!=t&&"object"===typeof t?t.cols:t;var n="xs"!==e?"-".concat(e):"";null!=a&&p.push("".concat(v).concat(n,"-").concat(a))})),Object(o.jsx)(m,Object(n.a)(Object(n.a)({ref:a},b),{},{className:s.a.apply(void 0,[c,f].concat(p))}))}));m.displayName="Row",a.a=m},536:function(e,a,t){"use strict";var n=t(1),r=t(12),c=t(10),s=t(11),l=t.n(s),i=t(0),o=t(524),u=t(18),d=t(5),m=["as","bsPrefix","variant","size","active","className"],b=i.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,i=e.variant,b=e.size,f=e.active,v=e.className,p=Object(c.a)(e,m),j=Object(u.a)(s,"btn"),O=Object(o.b)(Object(n.a)({tagName:t},p)),E=Object(r.a)(O,2),h=E[0],x=E[1].tagName;return Object(d.jsx)(x,Object(n.a)(Object(n.a)(Object(n.a)({},p),h),{},{ref:a,className:l()(v,j,f&&"active",i&&"".concat(j,"-").concat(i),b&&"".concat(j,"-").concat(b),p.href&&p.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=b},537:function(e,a,t){"use strict";var n=t(1),r=t(10),c=t(11),s=t.n(c),l=t(0),i=t(18),o=t(5),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=l.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.striped,d=e.bordered,m=e.borderless,b=e.hover,f=e.size,v=e.variant,p=e.responsive,j=Object(r.a)(e,u),O=Object(i.a)(t,"table"),E=s()(c,O,v&&"".concat(O,"-").concat(v),f&&"".concat(O,"-").concat(f),l&&"".concat(O,"-striped"),d&&"".concat(O,"-bordered"),m&&"".concat(O,"-borderless"),b&&"".concat(O,"-hover")),h=Object(o.jsx)("table",Object(n.a)(Object(n.a)({},j),{},{className:E,ref:a}));if(p){var x="".concat(O,"-responsive");return"string"===typeof p&&(x="".concat(x,"-").concat(p)),Object(o.jsx)("div",{className:x,children:h})}return h}));a.a=d}}]);
//# sourceMappingURL=64.b3b4baf7.chunk.js.map