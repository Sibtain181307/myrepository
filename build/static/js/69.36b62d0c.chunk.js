(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[69],{1700:function(e,a,t){"use strict";t.r(a);var r=t(47),n=t(8),c=t(9),m=t(15),s=t(16),l=t(0),i=t.n(l),u=t(535),p=t(527),o=t(548),E=t(164),d=t(536),b=t(519),N=t(32),h=t(522),O=t(575),f=t(576),v=(t(569),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var c=arguments.length,m=new Array(c),s=0;s<c;s++)m[s]=arguments[s];return(e=a.call.apply(a,[this].concat(m))).userDataDTO={vendorUserDto:{validityDate:"2022-03-04",venderId:1,joiningDate:"2020-03-04",resource:{firstName:"abc",middleName:"abc",lastName:"abc",gender:"abc",dateOfBirth:"1990-03-04",nic:"abc",nicAttachment:{attachmentType:"abc",description:"abc",filePath:"abc",fileType:"abc"},address:Object(r.a)({_long:22,cityId:1,streetAddress:"23234",lang:222,geoLink:"abc"},"streetAddress","abc"),contact:{countryCode:"abc",networkCode:232,number:314,numberType:"abc"}},user:{userName:"abc",password:"abc",roleId:1}}},e.ViewData=function(a){console.log(a),e.userDataDTO.vendorUserDto.resource=a.resource,e.userDataDTO.vendorUserDto.user=a.user,e.forceUpdate()},e.Getid=function(){return e.props.location.id},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,console.log(),i.a.createElement(h.a,{Data:this.ViewData,url:"http://15.235.141.168:70/user/get-user",event:"Get-Vendor-User",idsetter:this.Getid()}),i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement("h2",null,Object(b.a)("Customer User")," / ",Object(b.a)("Edit Customer User")," "))),i.a.createElement(u.a,{className:"mt-1"},i.a.createElement(o.a,null,i.a.createElement(E.a,null,i.a.createElement(E.a.Body,null,i.a.createElement(O.a,{Data:this.userDataDTO.vendorUserDto.resource}),i.a.createElement(f.a,{Data:this.userDataDTO.vendorUserDto.user}),i.a.createElement(p.a,{className:"d-flex justify-content-end align-items-center"},i.a.createElement(N.a,{to:{pathname:"/editform",resource:this.userDataDTO.vendorUserDto.resource,path:this.props.location.path}},i.a.createElement(d.a,{className:"mx-2 mb-2 ",variant:"success"},Object(b.a)("Edit Data")))))))))}}]),t}(l.Component));a.default=v},522:function(e,a,t){"use strict";var r=t(38),n=t.n(r),c=t(54),m=t(0),s=t(6),l=t.n(s);a.a=function(e){return Object(m.useEffect)((function(){(function(){var a=Object(c.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(a){if(e.Data(a.data.data),200===a.status)return a;throw new Error(a)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),null}},552:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(8),n=t(9),c=t(15),m=t(16),s=t(0),l=t.n(s),i=t(535),u=t(527),p=t(519),o=(t(6),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,null,l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Country Code")),l.a.createElement("span",null,this.props.Data.countryCode))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Network Code")),l.a.createElement("span",null,this.props.Data.networkCode))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"}),Object(p.a)("Number")),l.a.createElement("span",null,this.props.Data.number))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"}),Object(p.a)("Number Type")),l.a.createElement("span",null,this.props.Data.numberType))))}}]),t}(s.Component))},553:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(8),n=t(9),c=t(15),m=t(16),s=t(0),l=t.n(s),i=t(535),u=t(527),p=t(519),o=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,null,l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Latitude")),l.a.createElement("span",null,this.props.Data.lang))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Longitude")),l.a.createElement("span",null,this.props.Data._long))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Street Address")),l.a.createElement("span",null,this.props.Data.streetAddress))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"}),Object(p.a)("Geo Link")),l.a.createElement("span",null,this.props.Data.geoLink))))}}]),t}(s.Component)},569:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(8),n=t(9),c=t(15),m=t(16),s=t(0),l=t.n(s),i=t(535),u=t(527),p=t(519),o=(t(6),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,null,l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"}),Object(p.a)("Wallet Title")),l.a.createElement("span",null,this.props.Data.title))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Wallet Type")),l.a.createElement("span",null,this.props.Data.walletType))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Balance")),l.a.createElement("span",null,this.props.Data.balance))))}}]),t}(s.Component))},575:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t(8),n=t(9),c=t(15),m=t(16),s=t(0),l=t.n(s),i=t(535),u=t(527),p=t(519),o=t(553),E=t(552),d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,null,l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("First Name")),l.a.createElement("span",null,this.props.Data.firstName))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Middle Name")),l.a.createElement("span",null,this.props.Data.middleName))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Last Name")),l.a.createElement("span",null,this.props.Data.lastName))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Gender")),l.a.createElement("span",null,this.props.Data.gender))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("NIC Number")),l.a.createElement("span",null,this.props.Data.nic))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("NIC Attachment")),l.a.createElement("span",null,this.props.Data.nicAttachment.description))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Date of Birth")),l.a.createElement("span",null,this.props.Data.dateOfBirth))),l.a.createElement(E.a,{Data:this.props.Data.contact}),l.a.createElement(o.a,{Data:this.props.Data.address}))}}]),t}(s.Component)},576:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(8),n=t(9),c=t(15),m=t(16),s=t(0),l=t.n(s),i=t(535),u=t(527),p=t(519),o=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,null,l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Username")),l.a.createElement("span",null,this.props.Data.userName))),l.a.createElement(u.a,{md:4},l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-primary mb-1"},l.a.createElement("i",{className:" mr-1"})," ",Object(p.a)("Password")),l.a.createElement("span",null,this.props.Data.password))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=69.36b62d0c.chunk.js.map