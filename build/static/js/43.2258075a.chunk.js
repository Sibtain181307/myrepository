(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[43],{1646:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),s=t(548),n=t(164),r=t(535),i=t(527),o=t(537),d=t(519);a.default=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,Object(d.a)("createTrip")),l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(n.a,null,l.a.createElement(n.a.Body,null,l.a.createElement(r.a,null,l.a.createElement(i.a,{md:6},l.a.createElement(s.a.Label,null,l.a.createElement("h5",null,Object(d.a)("warehouse"))),l.a.createElement(s.a.Select,null,l.a.createElement("option",{selected:"true",disabled:"disabled"},"--",Object(d.a)("selectWarehouse"),"--"),l.a.createElement("option",null,"Item")))),l.a.createElement(r.a,null,l.a.createElement(i.a,{md:6,className:"mt-3"},l.a.createElement(s.a.Label,null,l.a.createElement("h5",null,Object(d.a)("driver"))),l.a.createElement(s.a.Select,null,l.a.createElement("option",{selected:"true",disabled:"disabled"},"--",Object(d.a)("selectDriver"),"--"),l.a.createElement("option",null,"Item"),l.a.createElement("option",null,"Item"))),l.a.createElement(i.a,{md:6,className:"mt-3"},l.a.createElement(s.a.Label,null,l.a.createElement("h5",null,Object(d.a)("vehicle"))),l.a.createElement(s.a.Select,null,l.a.createElement("option",{selected:"true",disabled:"disabled"},"--",Object(d.a)("selectVehicle"),"--"),l.a.createElement("option",null,"Item "),l.a.createElement("option",null,"Item "),l.a.createElement("option",null,"Item ")))))))),l.a.createElement(r.a,{className:"mt-4"},l.a.createElement("h2",null," ",Object(d.a)("pickupShipments")),l.a.createElement(n.a,{elevation:6,className:"w-100 overflow-auto"},l.a.createElement(o.a,{style:{minWidth:750}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"pl-sm-24"},"#"),l.a.createElement("th",{className:"pl-sm-24"},Object(d.a)("awb")),l.a.createElement("th",{className:"pl-sm-24"},Object(d.a)("pickupType")),l.a.createElement("th",{className:"px-0"},Object(d.a)("shipper")),l.a.createElement("th",{className:"px-0"},Object(d.a)("shipmentType")),l.a.createElement("th",{className:"px-0"},Object(d.a)("location")))),l.a.createElement("tbody",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))))),l.a.createElement(r.a,{className:"mt-4"},l.a.createElement("h2",null,Object(d.a)("deliveryShipment")),l.a.createElement(n.a,{elevation:6,className:"w-100 overflow-auto"},l.a.createElement(o.a,{style:{minWidth:750}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"pl-sm-24"},"#"),l.a.createElement("th",{className:"pl-sm-24"},Object(d.a)("awb")),l.a.createElement("th",{className:"pl-sm-24"},Object(d.a)("deliveryType")),l.a.createElement("th",{className:"px-0"},Object(d.a)("shipper")),l.a.createElement("th",{className:"px-0"},Object(d.a)("shipmentType")),l.a.createElement("th",{className:"px-0"},Object(d.a)("location")),l.a.createElement("th",{className:"px-0"},Object(d.a)("attempts")))),l.a.createElement("tbody",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))))))}},521:function(e,a,t){"use strict";var c=t(0),l=c.createContext({});a.a=l},525:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(0),n=t(521),r=t(5),i=["controlId","as"],o=s.forwardRef((function(e,a){var t=e.controlId,o=e.as,d=void 0===o?"div":o,m=Object(l.a)(e,i),b=Object(s.useMemo)((function(){return{controlId:t}}),[t]);return Object(r.jsx)(n.a.Provider,{value:b,children:Object(r.jsx)(d,Object(c.a)(Object(c.a)({},m),{},{ref:a}))})}));o.displayName="FormGroup",a.a=o},526:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),n=t.n(s),r=t(0),i=t(14),o=t.n(i),d=t(5),m=["as","className","type","tooltip"],b={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},u=r.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,r=e.className,i=e.type,o=void 0===i?"valid":i,b=e.tooltip,u=void 0!==b&&b,j=Object(l.a)(e,m);return Object(d.jsx)(s,Object(c.a)(Object(c.a)({},j),{},{ref:a,className:n()(r,"".concat(o,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=b,a.a=u},527:function(e,a,t){"use strict";var c=t(12),l=t(1),s=t(10),n=t(11),r=t.n(n),i=t(0),o=t(18),d=t(5),m=["as","bsPrefix","className"],b=["className"],u=["xxl","xl","lg","md","sm","xs"];var j=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,n=Object(s.a)(e,m);t=Object(o.a)(t,"col");var i=[],d=[];return u.forEach((function(e){var a,c,l,s=n[e];if(delete n[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,c=s.offset,l=s.order}else a=s;var o="xs"!==e?"-".concat(e):"";a&&i.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=l&&d.push("order".concat(o,"-").concat(l)),null!=c&&d.push("offset".concat(o,"-").concat(c))})),[Object(l.a)(Object(l.a)({},n),{},{className:r.a.apply(void 0,[c].concat(d,i))}),{as:a,bsPrefix:t,spans:i}]}(e),n=Object(c.a)(t,2),i=n[0],j=i.className,f=Object(s.a)(i,b),v=n[1],O=v.as,p=void 0===O?"div":O,h=v.bsPrefix,x=v.spans;return Object(d.jsx)(p,Object(l.a)(Object(l.a)({},f),{},{ref:a,className:r()(j,!x.length&&h)}))}));j.displayName="Col",a.a=j},530:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),n=t.n(s),r=t(0),i=t(521),o=t(18),d=t(5),m=["id","bsPrefix","className","type","isValid","isInvalid","as"],b=r.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,b=e.className,u=e.type,j=void 0===u?"checkbox":u,f=e.isValid,v=void 0!==f&&f,O=e.isInvalid,p=void 0!==O&&O,h=e.as,x=void 0===h?"input":h,N=Object(l.a)(e,m),E=Object(r.useContext)(i.a).controlId;return s=Object(o.a)(s,"form-check-input"),Object(d.jsx)(x,Object(c.a)(Object(c.a)({},N),{},{ref:a,type:j,id:t||E,className:n()(b,s,v&&"is-valid",p&&"is-invalid")}))}));b.displayName="FormCheckInput",a.a=b},531:function(e,a,t){"use strict";var c=t(1),l=t(47),s=t(10),n=t(11),r=t.n(n),i=t(0),o=(t(75),t(526)),d=t(521),m=t(18),b=t(5),u=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],j=i.forwardRef((function(e,a){var t,n,o=e.bsPrefix,j=e.type,f=e.size,v=e.htmlSize,O=e.id,p=e.className,h=e.isValid,x=void 0!==h&&h,N=e.isInvalid,E=void 0!==N&&N,y=e.plaintext,w=e.readOnly,I=e.as,P=void 0===I?"input":I,F=Object(s.a)(e,u),g=Object(i.useContext)(d.a).controlId;(o=Object(m.a)(o,"form-control"),y)?t=Object(l.a)({},"".concat(o,"-plaintext"),!0):(n={},Object(l.a)(n,o,!0),Object(l.a)(n,"".concat(o,"-").concat(f),f),t=n);return Object(b.jsx)(P,Object(c.a)(Object(c.a)({},F),{},{type:j,size:v,ref:a,readOnly:w,id:O||g,className:r()(p,t,x&&"is-valid",E&&"is-invalid","color"===j&&"".concat(o,"-color"))}))}));j.displayName="FormControl",a.a=Object.assign(j,{Feedback:o.a})},532:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),n=t.n(s),r=t(0),i=(t(75),t(527)),o=t(521),d=t(18),m=t(5),b=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],u=r.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,u=e.bsPrefix,j=e.column,f=e.visuallyHidden,v=e.className,O=e.htmlFor,p=Object(l.a)(e,b),h=Object(r.useContext)(o.a).controlId;u=Object(d.a)(u,"form-label");var x="col-form-label";"string"===typeof j&&(x="".concat(x," ").concat(x,"-").concat(j));var N=n()(v,u,f&&"visually-hidden",j&&x);return O=O||h,j?Object(m.jsx)(i.a,Object(c.a)({ref:a,as:"label",className:N,htmlFor:O},p)):Object(m.jsx)(s,Object(c.a)({ref:a,className:N,htmlFor:O},p))}));u.displayName="FormLabel",u.defaultProps={column:!1,visuallyHidden:!1},a.a=u},535:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),n=t.n(s),r=t(0),i=t(18),o=t(5),d=["bsPrefix","className","as"],m=["xxl","xl","lg","md","sm","xs"],b=r.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.as,b=void 0===r?"div":r,u=Object(l.a)(e,d),j=Object(i.a)(t,"row"),f="".concat(j,"-cols"),v=[];return m.forEach((function(e){var a,t=u[e];delete u[e],a=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==e?"-".concat(e):"";null!=a&&v.push("".concat(f).concat(c,"-").concat(a))})),Object(o.jsx)(b,Object(c.a)(Object(c.a)({ref:a},u),{},{className:n.a.apply(void 0,[s,j].concat(v))}))}));b.displayName="Row",a.a=b},537:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),n=t.n(s),r=t(0),i=t(18),o=t(5),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],m=r.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.striped,m=e.bordered,b=e.borderless,u=e.hover,j=e.size,f=e.variant,v=e.responsive,O=Object(l.a)(e,d),p=Object(i.a)(t,"table"),h=n()(s,p,f&&"".concat(p,"-").concat(f),j&&"".concat(p,"-").concat(j),r&&"".concat(p,"-striped"),m&&"".concat(p,"-bordered"),b&&"".concat(p,"-borderless"),u&&"".concat(p,"-hover")),x=Object(o.jsx)("table",Object(c.a)(Object(c.a)({},O),{},{className:h,ref:a}));if(v){var N="".concat(p,"-responsive");return"string"===typeof v&&(N="".concat(N,"-").concat(v)),Object(o.jsx)("div",{className:N,children:x})}return x}));a.a=m},548:function(e,a,t){"use strict";var c=t(1),l=t(10),s=t(11),n=t.n(s),r=t(14),i=t.n(r),o=t(0),d=t(526),m=t(530),b=t(521),u=t(18),j=t(5),f=["bsPrefix","className","htmlFor"],v=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.htmlFor,i=Object(l.a)(e,f),d=Object(o.useContext)(b.a).controlId;return t=Object(u.a)(t,"form-check-label"),Object(j.jsx)("label",Object(c.a)(Object(c.a)({},i),{},{ref:a,htmlFor:r||d,className:n()(s,t)}))}));v.displayName="FormCheckLabel";var O=v,p=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],h=o.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,r=e.bsSwitchPrefix,i=e.inline,f=void 0!==i&&i,v=e.disabled,h=void 0!==v&&v,x=e.isValid,N=void 0!==x&&x,E=e.isInvalid,y=void 0!==E&&E,w=e.feedbackTooltip,I=void 0!==w&&w,P=e.feedback,F=e.className,g=e.style,k=e.title,R=void 0===k?"":k,C=e.type,S=void 0===C?"checkbox":C,T=e.label,z=e.children,L=e.as,V=void 0===L?"input":L,H=Object(l.a)(e,p);s=Object(u.a)(s,"form-check"),r=Object(u.a)(r,"form-switch");var W=Object(o.useContext)(b.a).controlId,G=Object(o.useMemo)((function(){return{controlId:t||W}}),[W,t]),J=null!=T&&!1!==T&&!z,M=Object(j.jsx)(m.a,Object(c.a)(Object(c.a)({},H),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:N,isInvalid:y,disabled:h,as:V}));return Object(j.jsx)(b.a.Provider,{value:G,children:Object(j.jsx)("div",{style:g,className:n()(F,T&&s,f&&"".concat(s,"-inline"),"switch"===S&&r),children:z||Object(j.jsxs)(j.Fragment,{children:[M,J&&Object(j.jsx)(O,{title:R,children:T}),(N||y)&&Object(j.jsx)(d.a,{type:N?"valid":"invalid",tooltip:I,children:P})]})})})}));h.displayName="FormCheck";var x=Object.assign(h,{Input:m.a,Label:O}),N=t(531),E=t(24),y=Object(E.a)("form-floating"),w=t(525),I=t(532),P=["bsPrefix","className","id"],F=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.id,i=Object(l.a)(e,P),d=Object(o.useContext)(b.a).controlId;return t=Object(u.a)(t,"form-range"),Object(j.jsx)("input",Object(c.a)(Object(c.a)({},i),{},{type:"range",ref:a,className:n()(s,t),id:r||d}))}));F.displayName="FormRange";var g=F,k=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],R=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,r=e.htmlSize,i=e.className,d=e.isValid,m=void 0!==d&&d,f=e.isInvalid,v=void 0!==f&&f,O=e.id,p=Object(l.a)(e,k),h=Object(o.useContext)(b.a).controlId;return t=Object(u.a)(t,"form-select"),Object(j.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:r,ref:a,className:n()(i,t,s&&"".concat(t,"-").concat(s),m&&"is-valid",v&&"is-invalid"),id:O||h}))}));R.displayName="FormSelect";var C=R,S=["bsPrefix","className","as","muted"],T=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.as,i=void 0===r?"small":r,o=e.muted,d=Object(l.a)(e,S);return t=Object(u.a)(t,"form-text"),Object(j.jsx)(i,Object(c.a)(Object(c.a)({},d),{},{ref:a,className:n()(s,t,o&&"text-muted")}))}));T.displayName="FormText";var z=T,L=o.forwardRef((function(e,a){return Object(j.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));L.displayName="Switch";var V=Object.assign(L,{Input:x.Input,Label:x.Label}),H=["bsPrefix","className","children","controlId","label"],W=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.children,i=e.controlId,o=e.label,d=Object(l.a)(e,H);return t=Object(u.a)(t,"form-floating"),Object(j.jsxs)(w.a,Object(c.a)(Object(c.a)({ref:a,className:n()(s,t),controlId:i},d),{},{children:[r,Object(j.jsx)("label",{htmlFor:i,children:o})]}))}));W.displayName="FloatingLabel";var G=W,J=["className","validated","as"],M={_ref:i.a.any,validated:i.a.bool,as:i.a.elementType},B=o.forwardRef((function(e,a){var t=e.className,s=e.validated,r=e.as,i=void 0===r?"form":r,o=Object(l.a)(e,J);return Object(j.jsx)(i,Object(c.a)(Object(c.a)({},o),{},{ref:a,className:n()(t,s&&"was-validated")}))}));B.displayName="Form",B.propTypes=M;a.a=Object.assign(B,{Group:w.a,Control:N.a,Floating:y,Check:x,Switch:V,Label:I.a,Text:z,Range:g,Select:C,FloatingLabel:G})}}]);
//# sourceMappingURL=43.2258075a.chunk.js.map