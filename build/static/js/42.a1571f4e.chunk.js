(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[42],{1678:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),s=t(535),r=t(527),n=t(548),i=t(164),o=t(537),d=t(519);a.default=function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(r.a,null,l.a.createElement("h2",null,Object(d.a)("utilityPayments")))),l.a.createElement(s.a,null,l.a.createElement(n.a,null,l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(r.a,{md:6},l.a.createElement(i.a.Body,null,l.a.createElement(n.a.Label,null,Object(d.a)("selectTenure")),l.a.createElement(s.a,null,l.a.createElement(r.a,{md:6},l.a.createElement(n.a.Label,null,Object(d.a)("from")),l.a.createElement(n.a.Control,{type:"date"})),l.a.createElement(r.a,{md:6},l.a.createElement(n.a.Label,null,Object(d.a)("to")),l.a.createElement(n.a.Control,{type:"date"}))))))))),l.a.createElement(s.a,null,l.a.createElement(i.a,{elevation:6,className:"w-100 overflow-auto mt-4"},l.a.createElement(o.a,{style:{minWidth:750}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"pl-sm-24"},Object(d.a)("title")),l.a.createElement("th",{className:"pl-sm-24"},Object(d.a)("description")),l.a.createElement("th",{className:"px-0"},Object(d.a)("amount")," "),l.a.createElement("th",{className:"px-0"},Object(d.a)("dueDate")," "),l.a.createElement("th",{className:"px-0"},Object(d.a)("tax")," "),l.a.createElement("th",{className:"px-0"},Object(d.a)("amountAfterDueDate")," "))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null)))))))}},521:function(e,a,t){"use strict";var c=t(0),l=c.createContext({});a.a=l},525:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(0),r=t(521),n=t(5),i=["controlId","as"],o=s.forwardRef((function(e,a){var t=e.controlId,o=e.as,d=void 0===o?"div":o,b=Object(l.a)(e,i),m=Object(s.useMemo)((function(){return{controlId:t}}),[t]);return Object(n.jsx)(r.a.Provider,{value:m,children:Object(n.jsx)(d,Object(c.a)(Object(c.a)({},b),{},{ref:a}))})}));o.displayName="FormGroup",a.a=o},526:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),r=t.n(s),n=t(0),i=t(14),o=t.n(i),d=t(5),b=["as","className","type","tooltip"],m={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},f=n.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,n=e.className,i=e.type,o=void 0===i?"valid":i,m=e.tooltip,f=void 0!==m&&m,j=Object(l.a)(e,b);return Object(d.jsx)(s,Object(c.a)(Object(c.a)({},j),{},{ref:a,className:r()(n,"".concat(o,"-").concat(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=m,a.a=f},527:function(e,a,t){"use strict";var c=t(12),l=t(1),s=t(10),r=t(11),n=t.n(r),i=t(0),o=t(18),d=t(5),b=["as","bsPrefix","className"],m=["className"],f=["xxl","xl","lg","md","sm","xs"];var j=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,r=Object(s.a)(e,b);t=Object(o.a)(t,"col");var i=[],d=[];return f.forEach((function(e){var a,c,l,s=r[e];if(delete r[e],"object"===typeof s&&null!=s){var n=s.span;a=void 0===n||n,c=s.offset,l=s.order}else a=s;var o="xs"!==e?"-".concat(e):"";a&&i.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=l&&d.push("order".concat(o,"-").concat(l)),null!=c&&d.push("offset".concat(o,"-").concat(c))})),[Object(l.a)(Object(l.a)({},r),{},{className:n.a.apply(void 0,[c].concat(d,i))}),{as:a,bsPrefix:t,spans:i}]}(e),r=Object(c.a)(t,2),i=r[0],j=i.className,u=Object(s.a)(i,m),v=r[1],O=v.as,p=void 0===O?"div":O,x=v.bsPrefix,N=v.spans;return Object(d.jsx)(p,Object(l.a)(Object(l.a)({},u),{},{ref:a,className:n()(j,!N.length&&x)}))}));j.displayName="Col",a.a=j},530:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),r=t.n(s),n=t(0),i=t(521),o=t(18),d=t(5),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],m=n.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,m=e.className,f=e.type,j=void 0===f?"checkbox":f,u=e.isValid,v=void 0!==u&&u,O=e.isInvalid,p=void 0!==O&&O,x=e.as,N=void 0===x?"input":x,h=Object(l.a)(e,b),y=Object(n.useContext)(i.a).controlId;return s=Object(o.a)(s,"form-check-input"),Object(d.jsx)(N,Object(c.a)(Object(c.a)({},h),{},{ref:a,type:j,id:t||y,className:r()(m,s,v&&"is-valid",p&&"is-invalid")}))}));m.displayName="FormCheckInput",a.a=m},531:function(e,a,t){"use strict";var c=t(1),l=t(47),s=t(10),r=t(11),n=t.n(r),i=t(0),o=(t(75),t(526)),d=t(521),b=t(18),m=t(5),f=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],j=i.forwardRef((function(e,a){var t,r,o=e.bsPrefix,j=e.type,u=e.size,v=e.htmlSize,O=e.id,p=e.className,x=e.isValid,N=void 0!==x&&x,h=e.isInvalid,y=void 0!==h&&h,E=e.plaintext,P=e.readOnly,w=e.as,I=void 0===w?"input":w,F=Object(s.a)(e,f),g=Object(i.useContext)(d.a).controlId;(o=Object(b.a)(o,"form-control"),E)?t=Object(l.a)({},"".concat(o,"-plaintext"),!0):(r={},Object(l.a)(r,o,!0),Object(l.a)(r,"".concat(o,"-").concat(u),u),t=r);return Object(m.jsx)(I,Object(c.a)(Object(c.a)({},F),{},{type:j,size:v,ref:a,readOnly:P,id:O||g,className:n()(p,t,N&&"is-valid",y&&"is-invalid","color"===j&&"".concat(o,"-color"))}))}));j.displayName="FormControl",a.a=Object.assign(j,{Feedback:o.a})},532:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),r=t.n(s),n=t(0),i=(t(75),t(527)),o=t(521),d=t(18),b=t(5),m=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],f=n.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,f=e.bsPrefix,j=e.column,u=e.visuallyHidden,v=e.className,O=e.htmlFor,p=Object(l.a)(e,m),x=Object(n.useContext)(o.a).controlId;f=Object(d.a)(f,"form-label");var N="col-form-label";"string"===typeof j&&(N="".concat(N," ").concat(N,"-").concat(j));var h=r()(v,f,u&&"visually-hidden",j&&N);return O=O||x,j?Object(b.jsx)(i.a,Object(c.a)({ref:a,as:"label",className:h,htmlFor:O},p)):Object(b.jsx)(s,Object(c.a)({ref:a,className:h,htmlFor:O},p))}));f.displayName="FormLabel",f.defaultProps={column:!1,visuallyHidden:!1},a.a=f},535:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),r=t.n(s),n=t(0),i=t(18),o=t(5),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],m=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,m=void 0===n?"div":n,f=Object(l.a)(e,d),j=Object(i.a)(t,"row"),u="".concat(j,"-cols"),v=[];return b.forEach((function(e){var a,t=f[e];delete f[e],a=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==e?"-".concat(e):"";null!=a&&v.push("".concat(u).concat(c,"-").concat(a))})),Object(o.jsx)(m,Object(c.a)(Object(c.a)({ref:a},f),{},{className:r.a.apply(void 0,[s,j].concat(v))}))}));m.displayName="Row",a.a=m},537:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),r=t.n(s),n=t(0),i=t(18),o=t(5),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],b=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.striped,b=e.bordered,m=e.borderless,f=e.hover,j=e.size,u=e.variant,v=e.responsive,O=Object(l.a)(e,d),p=Object(i.a)(t,"table"),x=r()(s,p,u&&"".concat(p,"-").concat(u),j&&"".concat(p,"-").concat(j),n&&"".concat(p,"-striped"),b&&"".concat(p,"-bordered"),m&&"".concat(p,"-borderless"),f&&"".concat(p,"-hover")),N=Object(o.jsx)("table",Object(c.a)(Object(c.a)({},O),{},{className:x,ref:a}));if(v){var h="".concat(p,"-responsive");return"string"===typeof v&&(h="".concat(h,"-").concat(v)),Object(o.jsx)("div",{className:h,children:N})}return N}));a.a=b},548:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),r=t.n(s),n=t(14),i=t.n(n),o=t(0),d=t(526),b=t(530),m=t(521),f=t(18),j=t(5),u=["bsPrefix","className","htmlFor"],v=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.htmlFor,i=Object(l.a)(e,u),d=Object(o.useContext)(m.a).controlId;return t=Object(f.a)(t,"form-check-label"),Object(j.jsx)("label",Object(c.a)(Object(c.a)({},i),{},{ref:a,htmlFor:n||d,className:r()(s,t)}))}));v.displayName="FormCheckLabel";var O=v,p=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],x=o.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsSwitchPrefix,i=e.inline,u=void 0!==i&&i,v=e.disabled,x=void 0!==v&&v,N=e.isValid,h=void 0!==N&&N,y=e.isInvalid,E=void 0!==y&&y,P=e.feedbackTooltip,w=void 0!==P&&P,I=e.feedback,F=e.className,g=e.style,k=e.title,R=void 0===k?"":k,C=e.type,z=void 0===C?"checkbox":C,L=e.label,S=e.children,T=e.as,V=void 0===T?"input":T,D=Object(l.a)(e,p);s=Object(f.a)(s,"form-check"),n=Object(f.a)(n,"form-switch");var H=Object(o.useContext)(m.a).controlId,G=Object(o.useMemo)((function(){return{controlId:t||H}}),[H,t]),J=null!=L&&!1!==L&&!S,M=Object(j.jsx)(b.a,Object(c.a)(Object(c.a)({},D),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:h,isInvalid:E,disabled:x,as:V}));return Object(j.jsx)(m.a.Provider,{value:G,children:Object(j.jsx)("div",{style:g,className:r()(F,L&&s,u&&"".concat(s,"-inline"),"switch"===z&&n),children:S||Object(j.jsxs)(j.Fragment,{children:[M,J&&Object(j.jsx)(O,{title:R,children:L}),(h||E)&&Object(j.jsx)(d.a,{type:h?"valid":"invalid",tooltip:w,children:I})]})})})}));x.displayName="FormCheck";var N=Object.assign(x,{Input:b.a,Label:O}),h=t(531),y=t(24),E=Object(y.a)("form-floating"),P=t(525),w=t(532),I=["bsPrefix","className","id"],F=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.id,i=Object(l.a)(e,I),d=Object(o.useContext)(m.a).controlId;return t=Object(f.a)(t,"form-range"),Object(j.jsx)("input",Object(c.a)(Object(c.a)({},i),{},{type:"range",ref:a,className:r()(s,t),id:n||d}))}));F.displayName="FormRange";var g=F,k=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],R=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,n=e.htmlSize,i=e.className,d=e.isValid,b=void 0!==d&&d,u=e.isInvalid,v=void 0!==u&&u,O=e.id,p=Object(l.a)(e,k),x=Object(o.useContext)(m.a).controlId;return t=Object(f.a)(t,"form-select"),Object(j.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:n,ref:a,className:r()(i,t,s&&"".concat(t,"-").concat(s),b&&"is-valid",v&&"is-invalid"),id:O||x}))}));R.displayName="FormSelect";var C=R,z=["bsPrefix","className","as","muted"],L=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,i=void 0===n?"small":n,o=e.muted,d=Object(l.a)(e,z);return t=Object(f.a)(t,"form-text"),Object(j.jsx)(i,Object(c.a)(Object(c.a)({},d),{},{ref:a,className:r()(s,t,o&&"text-muted")}))}));L.displayName="FormText";var S=L,T=o.forwardRef((function(e,a){return Object(j.jsx)(N,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));T.displayName="Switch";var V=Object.assign(T,{Input:N.Input,Label:N.Label}),D=["bsPrefix","className","children","controlId","label"],H=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.children,i=e.controlId,o=e.label,d=Object(l.a)(e,D);return t=Object(f.a)(t,"form-floating"),Object(j.jsxs)(P.a,Object(c.a)(Object(c.a)({ref:a,className:r()(s,t),controlId:i},d),{},{children:[n,Object(j.jsx)("label",{htmlFor:i,children:o})]}))}));H.displayName="FloatingLabel";var G=H,J=["className","validated","as"],M={_ref:i.a.any,validated:i.a.bool,as:i.a.elementType},A=o.forwardRef((function(e,a){var t=e.className,s=e.validated,n=e.as,i=void 0===n?"form":n,o=Object(l.a)(e,J);return Object(j.jsx)(i,Object(c.a)(Object(c.a)({},o),{},{ref:a,className:r()(t,s&&"was-validated")}))}));A.displayName="Form",A.propTypes=M;a.a=Object.assign(A,{Group:P.a,Control:h.a,Floating:E,Check:N,Switch:V,Label:w.a,Text:S,Range:g,Select:C,FloatingLabel:G})}}]);
//# sourceMappingURL=42.a1571f4e.chunk.js.map