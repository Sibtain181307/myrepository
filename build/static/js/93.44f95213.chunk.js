(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[93],{1629:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),c=t(15),l=t(16),m=t(0),s=t.n(m),u=t(535),i=t(527),o=t(548),b=t(164),E=t(536),p=t(32),d=t(519),h=(t(6),t(522)),D=t(552),N=t(553),O=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).locationDataDTO={hubDto:{accuringDate:"",amountPurchased:null,currency:"",hubLocation:{address:{_long:null,cityId:null,geoLink:"",lang:null,streetAddress:""},contact:{countryCode:"",networkCode:null,number:null,numberType:""},statusId:null,title:"",type:""},isSold:0,soldAmount:null,isPurchased:1,rent:null,validityDate:""}},e.ViewData=function(a){console.log(a),e.locationDataDTO.hubDto.accuringDate=a.accuringDate,e.locationDataDTO.hubDto.amountPurchased=a.amountPurchased,e.locationDataDTO.hubDto.currency=a.currency,e.locationDataDTO.hubDto.rent=a.rent,e.locationDataDTO.hubDto.hubLocation=a.hubLocation,e.forceUpdate()},e.Getid=function(){return e.props.location.id},e}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,console.log(),s.a.createElement(h.a,{Data:this.ViewData,url:"http://15.235.141.168:70/location/get-location",event:"View-Hub",idsetter:this.Getid()}),s.a.createElement(u.a,null,s.a.createElement(i.a,null,s.a.createElement("h2",null,Object(d.a)("Hub ")," / ",Object(d.a)("Edit Hub")," "))),s.a.createElement(u.a,{className:"mt-1"},s.a.createElement(o.a,null,s.a.createElement(b.a,null,s.a.createElement(b.a.Body,null,s.a.createElement(u.a,null,s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"}),Object(d.a)("Accuring Date")),s.a.createElement("span",null,this.locationDataDTO.hubDto.accuringDate))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"}),Object(d.a)("Amount Purchased")),s.a.createElement("span",null,this.locationDataDTO.hubDto.amountPurchased))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"}),Object(d.a)("Currency")),s.a.createElement("span",null,this.locationDataDTO.hubDto.currency))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"}),Object(d.a)("Rent")),s.a.createElement("span",null,this.locationDataDTO.hubDto.rent)))),s.a.createElement(N.a,{Data:this.locationDataDTO.hubDto.hubLocation.address}),s.a.createElement(D.a,{Data:this.locationDataDTO.hubDto.hubLocation.contact}),s.a.createElement(i.a,{className:"d-flex justify-content-end align-items-center"},s.a.createElement(p.a,{to:{pathname:"/EditFormHub",resource:this.locationDataDTO}},s.a.createElement(E.a,{className:"mx-2 mb-2 ",variant:"success"},Object(d.a)("Edit Data")))))))))}}]),t}(m.Component);a.default=O},522:function(e,a,t){"use strict";var n=t(38),r=t.n(n),c=t(54),l=t(0),m=t(6),s=t.n(m);a.a=function(e){return Object(l.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(a){if(e.Data(a.data.data),200===a.status)return a;throw new Error(a)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),null}},552:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),r=t(9),c=t(15),l=t(16),m=t(0),s=t.n(m),u=t(535),i=t(527),o=t(519),b=(t(6),function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"})," ",Object(o.a)("Country Code")),s.a.createElement("span",null,this.props.Data.countryCode))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"})," ",Object(o.a)("Network Code")),s.a.createElement("span",null,this.props.Data.networkCode))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"}),Object(o.a)("Number")),s.a.createElement("span",null,this.props.Data.number))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"}),Object(o.a)("Number Type")),s.a.createElement("span",null,this.props.Data.numberType))))}}]),t}(m.Component))},553:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),r=t(9),c=t(15),l=t(16),m=t(0),s=t.n(m),u=t(535),i=t(527),o=t(519),b=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"})," ",Object(o.a)("Latitude")),s.a.createElement("span",null,this.props.Data.lang))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"})," ",Object(o.a)("Longitude")),s.a.createElement("span",null,this.props.Data._long))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"})," ",Object(o.a)("Street Address")),s.a.createElement("span",null,this.props.Data.streetAddress))),s.a.createElement(i.a,{md:4},s.a.createElement("div",{className:"mb-4"},s.a.createElement("p",{className:"text-primary mb-1"},s.a.createElement("i",{className:" mr-1"}),Object(o.a)("Geo Link")),s.a.createElement("span",null,this.props.Data.geoLink))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=93.44f95213.chunk.js.map