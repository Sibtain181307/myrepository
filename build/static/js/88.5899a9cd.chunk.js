(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[88],{1637:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(8),c=a(9),r=a(15),l=a(16),o=a(32),i=a(535),s=a(527),u=a(536),m=a(548),d=a(164),f=a(537),E=a(519),h=a(6),p=a.n(h),v=a(0),b=a.n(v),w=a(702),j=a(522),O=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).ViewCustLocation=[],e.ValueGetter=function(t){e.ViewCustLocation=[],console.log(t),p.a.get("http://15.235.141.168:70/location/view",{headers:{SessionKey:"123",Event:"View-Cust-Location"}}).then((function(a){if(a.data.data.map((function(a,n){console.log(a),t==a.cityId?(e.ViewCustLocation.push(a),e.forceUpdate(),console.log(e.ViewCustLocation)):console.log("this is not working")})),200===a.status)return a;throw new Error(a)})).catch((function(e){throw e}))},e.GetViewData=function(t){e.ViewCustLocation=t,e.forceUpdate()},e}return Object(c.a)(a,[{key:"render",value:function(){return b.a.createElement("div",null,b.a.createElement(j.a,{Data:this.GetViewData,url:"http://15.235.141.168:70/location/view",event:"View-Cust-Location"}),b.a.createElement(i.a,null,b.a.createElement(s.a,null,b.a.createElement("h2",null,Object(E.a)("View LastMile Location"))),b.a.createElement(s.a,{className:"d-flex flex-row-reverse mx-5"},b.a.createElement(o.a,{to:"/lastMileLocation/add"},b.a.createElement(u.a,{size:"lg"},b.a.createElement("i",{className:"i-Add"})," ",Object(E.a)("Add LastMile Location"))))),b.a.createElement(i.a,{className:"mt-1"},b.a.createElement(m.a,null,b.a.createElement(d.a,null,b.a.createElement(d.a.Body,null,b.a.createElement(i.a,null,b.a.createElement(w.a,{Data:this.ValueGetter})))))),b.a.createElement(d.a,{elevation:6,className:"w-100 overflow-auto mt-4"},b.a.createElement(f.a,{style:{minWidth:750}},b.a.createElement("thead",null,b.a.createElement("tr",null,b.a.createElement("th",{className:"pl-0"},Object(E.a)("Id")),b.a.createElement("th",{className:"px-0"},Object(E.a)("warehouse")),b.a.createElement("th",{className:"px-0"},Object(E.a)("Address")),b.a.createElement("th",{className:"px-0"},Object(E.a)("Location")),b.a.createElement("th",{className:"px-0"},Object(E.a)("Contact")),b.a.createElement("th",{className:"px-0"},Object(E.a)("Contact Type")))),this.ViewCustLocation.map((function(e){return b.a.createElement("tbody",null,b.a.createElement("td",null,e.id),b.a.createElement("td",null,e.warhouse),b.a.createElement("td",null,e.address),b.a.createElement("td",null,e.location),b.a.createElement("td",null,e.contact),b.a.createElement("td",null,e.contactType),b.a.createElement("td",null,b.a.createElement(o.a,{to:{pathname:"/lastMileLocation/edit",id:e.id}},b.a.createElement(u.a,{variant:"success"},b.a.createElement("i",{className:"i-Pen-2"}))," "),b.a.createElement(u.a,{variant:"danger"},b.a.createElement("i",{className:"i-Remove"}))))})))))}}]),a}(v.Component)},522:function(e,t,a){"use strict";var n=a(38),c=a.n(n),r=a(54),l=a(0),o=a(6),i=a.n(o);t.a=function(e){return Object(l.useEffect)((function(){(function(){var t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(t){if(e.Data(t.data.data),200===t.status)return t;throw new Error(t)})).catch((function(e){throw e}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),null}},537:function(e,t,a){"use strict";var n=a(1),c=a(10),r=a(11),l=a.n(r),o=a(0),i=a(18),s=a(5),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],m=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.striped,m=e.bordered,d=e.borderless,f=e.hover,E=e.size,h=e.variant,p=e.responsive,v=Object(c.a)(e,u),b=Object(i.a)(a,"table"),w=l()(r,b,h&&"".concat(b,"-").concat(h),E&&"".concat(b,"-").concat(E),o&&"".concat(b,"-striped"),m&&"".concat(b,"-bordered"),d&&"".concat(b,"-borderless"),f&&"".concat(b,"-hover")),j=Object(s.jsx)("table",Object(n.a)(Object(n.a)({},v),{},{className:w,ref:t}));if(p){var O="".concat(b,"-responsive");return"string"===typeof p&&(O="".concat(O,"-").concat(p)),Object(s.jsx)("div",{className:O,children:j})}return j}));t.a=m},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(8),c=a(9),r=a(15),l=a(16),o=a(0),i=a.n(o),s=a(522),u=a(527),m=a(548),d=a(1599),f=a(519),E=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).City=[],e.CitiesGetter=function(t){console.log(t),e.City=t,e.forceUpdate()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(s.a,{Data:this.CitiesGetter,url:"http://15.235.141.168:70/util/get-city"}),i.a.createElement(m.a.Label,null,i.a.createElement("h5",null,Object(f.a)("City")," ")),i.a.createElement(d.a,null,i.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(t){var a=t.target.value;e.props.Data(a),console.log(e.City)},required:!0},i.a.createElement("option",{selected:!0},Object(f.a)("City")),this.City.map((function(e){return i.a.createElement("option",{value:e.id},e.name)})))))}}]),a}(o.Component)}}]);
//# sourceMappingURL=88.5899a9cd.chunk.js.map