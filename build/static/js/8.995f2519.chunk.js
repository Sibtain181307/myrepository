(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[8],{522:function(e,a,t){"use strict";var n=t(38),r=t.n(n),l=t(54),c=t(0),o=t(6),i=t.n(o);a.a=function(e){return Object(c.useEffect)((function(){(function(){var a=Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(a){if(e.Data(a.data.data),200===a.status)return a;throw new Error(a)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),null}},544:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(522),u=t(527),d=t(548),m=t(1599),p=t(519),b=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).City=[],e.CitiesGetter=function(a){console.log(a),e.City=a,e.forceUpdate()},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(s.a,{Data:this.CitiesGetter,url:"http://15.235.141.168:70/util/get-city"}),i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("City")," ")),i.a.createElement(m.a,null,i.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(a){var t=a.target.value;e.props.Data(t),console.log(e.City)},required:!0},i.a.createElement("option",{selected:!0},Object(p.a)("City")),this.City.map((function(e){return i.a.createElement("option",{value:e.id},e.name)})))))}}]),t}(o.Component)},546:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(522),u=t(527),d=t(548),m=t(1599),p=t(519),b=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).Country=[],e.CountriesGetter=function(a){console.log(a),e.Country=a,e.forceUpdate()},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(s.a,{Data:this.CountriesGetter,url:"http://15.235.141.168:70/util/get-country"}),i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Country")," ")),i.a.createElement(m.a,null,i.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(a){var t=a.target.value;e.props.Data(t),console.log(e.Country)},required:!0},i.a.createElement("option",{selected:!0},Object(p.a)("Country")),this.Country.map((function(e){return i.a.createElement("option",{value:e.id},e.country)})))))}}]),t}(o.Component)},551:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(535),u=t(527),d=t(548),m=t(531),p=t(1599),b=t(536),h=t(519),f=(t(6),t(546)),E=t(544),y=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).address={_long:0,cityId:0,streetAddress:"",lang:0,geoLink:""},e.Get_city_id=function(a){e.address.cityId=parseInt(a,10),e.props.Data(e.address)},e.GetCountry=function(e){},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,null,i.a.createElement(f.a,{Data:this.GetCountry}),i.a.createElement(E.a,{Data:this.Get_city_id}),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(h.a)("Street Address")," ")),i.a.createElement(m.a,{name:"streetAdress",placeholder:Object(h.a)("Street Address"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.address.streetAddress=a.target.value,e.props.Data(e.address)},required:!0})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(h.a)("addLocation")," ")),i.a.createElement(p.a,null,i.a.createElement(m.a,{placeholder:Object(h.a)("Location"),"aria-label":"Enddate","aria-describedby":"basic-addon1",name:"AddLocation"}),i.a.createElement(b.a,{onClick:function(a){navigator.geolocation.getCurrentPosition((function(a){console.log("Latitude : ",a.coords.latitude),console.log("Longitude : ",a.coords.longitude),e.address.lang=a.coords.latitude,e.address._long=a.coords.longitude,e.props.Data(e.address)}))}},Object(h.a)("addLocation")," "))),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(h.a)("Geo Link")," ")),i.a.createElement(m.a,{placeholder:Object(h.a)("Geo Link"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.address.geoLink=a.target.value,e.props.Data(e.address)},required:!0})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(h.a)("Postal Code")," ")),i.a.createElement(m.a,{placeholder:Object(h.a)("Postal Code"),"aria-label":"Enddate",required:!0,name:"PostalCode","aria-describedby":"basic-addon1"})))}}]),t}(o.Component)},556:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(535),u=t(527),d=t(548),m=t(531),p=t(519),b=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).contact={countryCode:"",networkCode:0,number:0,numberType:""},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,null,i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Country Code")," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("Country Code"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contact.countryCode=a.target.value,e.props.Data(e.contact)},required:!0})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Network Code")," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("Network Code"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contact.networkCode=parseInt(a.target.value,10),e.props.Data(e.contact)},required:!0})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Number")," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("Number"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contact.number=parseInt(a.target.value,10),e.props.Data(e.contact)},required:!0})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Number Type")," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("Number Type"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contact.numberType=a.target.value,e.props.Data(e.contact)},required:!0})))}}]),t}(o.Component)},562:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(527),u=t(548),d=t(519),m=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).Attachment={attachmentType:"",description:"",filePath:"",fileType:""},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,{class:"form-label",for:"customFile"},i.a.createElement("h5",null,Object(d.a)(this.props.Headline)," ")),i.a.createElement("input",{type:"file",class:"form-control",id:"customFile",required:!0,onChange:function(a){e.Attachment.filePath="Path",e.Attachment.description=a.target.files[0].name,e.Attachment.fileType=e.Attachment.description.split(".").pop(),e.Attachment.attachmentType=e.props.title,console.log(e.Attachment.fileType,e.Attachment.description),e.props.Data(e.Attachment)}}))}}]),t}(o.Component)},566:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(535),u=t(527),d=t(548),m=t(531),p=t(519),b=(t(6),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).wallet={title:"",balance:0,walletType:""},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,null,i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Wallet Title")," ",Object(p.a)(this.props.title)," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("Wallet Title"),"aria-label":"Enddate",name:"title","aria-describedby":"basic-addon1",onChange:function(a){e.wallet.title=a.target.value,e.props.Data(e.wallet)}})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Balance")," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("Balance"),"aria-label":"Enddate",name:"balance","aria-describedby":"basic-addon1",onChange:function(a){e.wallet.balance=parseInt(a.target.value,10),e.props.Data(e.wallet)}})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("Wallet Type")," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("Wallet Type"),"aria-label":"Enddate",name:"walletType","aria-describedby":"basic-addon1",onChange:function(a){e.wallet.walletType=a.target.value,e.props.Data(e.wallet)}})))}}]),t}(o.Component))},578:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(535),u=t(527),d=t(548),m=t(531),p=t(1599),b=t(519),h=t(522),f=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).data=[],e.RolesGetter=function(a){console.log(a),e.data=a,console.log(e.data),e.forceUpdate()},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(h.a,{Data:this.RolesGetter,url:"http://15.235.141.168:70/role/get-roles"}),i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(b.a)("Roles")," ")),i.a.createElement(p.a,null,i.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(a){var t=a.target.value;e.props.Data(t),console.log(e.data)},required:!0},i.a.createElement("option",{selected:!0},Object(b.a)("Roles")),this.data.map((function(e){return i.a.createElement("option",{value:e.id},e.role)})))))}}]),t}(o.Component),E=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).user={userName:"",password:"",roleId:null},e.RolesGetter=function(a){e.user.roleId=parseInt(a,10),e.props.Data(e.user)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,null,i.a.createElement(s.a,null,i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(b.a)("Username")," ")),i.a.createElement(m.a,{placeholder:Object(b.a)("Username"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.user.userName=a.target.value,e.props.Data(e.user)}})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(b.a)("Password")," ")),i.a.createElement(p.a,null,i.a.createElement(m.a,{placeholder:Object(b.a)("Password"),type:"password",onChange:function(a){e.user.password=a.target.value,e.props.Data(e.user)}}))),i.a.createElement(f,{Data:this.RolesGetter})))}}]),t}(o.Component)},579:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(535),u=t(519),d=t(556),m=t(551),p=t(527),b=t(548),h=t(531),f=t(562),E=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={firstName:"",middleName:"",lastName:"",gender:"",dateOfBirth:"",nic:"",nicAttachment:{attachmentType:"",description:"",filePath:"",fileType:""}},e.GetNicAttachment=function(a){console.log(a),e.state.nicAttachment.attachmentType=a.attachmentType,e.state.nicAttachment.description=a.description,e.state.nicAttachment.filePath=a.filePath,e.state.nicAttachment.fileType=a.fileType},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,null," ",i.a.createElement(p.a,{md:4,className:"mt-2"},i.a.createElement(b.a.Label,null,i.a.createElement("h5",null,Object(u.a)("First Name")," ")),i.a.createElement(h.a,{placeholder:Object(u.a)("First Name"),"aria-label":"Enddate",name:"firstname","aria-describedby":"basic-addon1",required:!0,onChange:function(a){e.state.firstName=a.target.value,e.props.Data(e.state)}})),i.a.createElement(p.a,{md:4,className:"mt-2"},i.a.createElement(b.a.Label,null,i.a.createElement("h5",null,Object(u.a)("Middle Name")," ")),i.a.createElement(h.a,{placeholder:Object(u.a)("Middle Name"),"aria-label":"Enddate","aria-describedby":"basic-addon1",required:!0,onChange:function(a){e.state.middleName=a.target.value,e.props.Data(e.state)}})),i.a.createElement(p.a,{md:4,className:"mt-2"},i.a.createElement(b.a.Label,null,i.a.createElement("h5",null,Object(u.a)("Last Name")," ")),i.a.createElement(h.a,{placeholder:Object(u.a)("Last Name"),"aria-label":"Enddate","aria-describedby":"basic-addon1",required:!0,onChange:function(a){e.state.lastName=a.target.value,e.props.Data(e.state)}})),i.a.createElement(p.a,{md:6,className:"mt-2"},i.a.createElement(b.a.Label,null,i.a.createElement("h5",null,Object(u.a)("Gender")," ")),i.a.createElement("select",{className:"form-select","aria-label":"Default select example",required:!0,onChange:function(a){e.state.gender=a.target.value,e.props.Data(e.state)}},i.a.createElement("option",{selected:!0},Object(u.a)("Gender")),i.a.createElement("option",{value:"Male"},"Male"),i.a.createElement("option",{value:"Female"},"Female"),i.a.createElement("option",{value:"Other"},"Other"))),i.a.createElement(p.a,{md:6,className:"mt-2"},i.a.createElement(b.a.Label,null,i.a.createElement("h5",null,Object(u.a)("Date of Birth")," ")),i.a.createElement("input",{placeholder:"yyyy-mm-dd",id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(a){e.state.dateOfBirth=a.target.value,e.props.Data(e.state)}})),i.a.createElement(p.a,{md:6,className:"mt-2"},i.a.createElement(b.a.Label,null,i.a.createElement("h5",null,Object(u.a)("NIC Number")," ")),i.a.createElement(h.a,{placeholder:"xxxxx-xxxxxxx-x","aria-label":"Enddate",name:"nic","aria-describedby":"basic-addon1",required:!0,onChange:function(a){e.state.nic=a.target.value,e.props.Data(e.state)}})),i.a.createElement(f.a,{Data:this.GetNicAttachment,Headline:"NIC Attachment"}))}}]),t}(o.Component),y=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).resource={firstName:"",middleName:"",lastName:"",gender:"",dateOfBirth:"",nic:"",nicAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},address:{_long:null,cityId:null,streetAddress:"",lang:null,geoLink:""},contact:{countryCode:"",networkCode:"",number:null,numberType:""}},e.GetContact=function(a){console.log(a),e.resource.contact=a,e.props.Data(e.resource)},e.GetAddress=function(a){console.log(a),e.resource.address=a,console.log(e.resource.address),e.props.Data(e.resource)},e.GetPersonalData=function(a){e.resource.firstName=a.firstName,e.resource.middleName=a.middleName,e.resource.lastName=a.lastName,e.resource.gender=a.gender,e.resource.dateOfBirth=a.dateOfBirth,e.resource.nic=a.nic,e.resource.nicAttachment=a.nicAttachment,e.props.Data(e.resource)},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(s.a,null,i.a.createElement(E,{Data:this.GetPersonalData}),i.a.createElement(m.a,{Data:this.GetAddress}),i.a.createElement(d.a,{Data:this.GetContact}))}}]),t}(o.Component)},875:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(8),r=t(9),l=t(15),c=t(16),o=t(0),i=t.n(o),s=t(535),u=t(527),d=t(548),m=t(531),p=t(519),b=(t(6),t(566)),h=t(562),f=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).driver={codWallet:{title:"",balance:null,walletType:""},licenceAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},lisenceExpiry:"",lisenceIssueDate:"",lisenceNumber:""},e.Get_Cod_Wallet=function(a){e.driver.codWallet.title=a.title,e.driver.codWallet.balance=a.balance,e.driver.codWallet.walletType=a.walletType,e.props.Data(e.driver)},e.Get_Licence_Attachment=function(a){e.licenceAttachment.attachmentType=a.attachmentType,e.licenceAttachment.description=a.description,e.licenceAttachment.filePath=a.filePath,e.licenceAttachment.fileType=a.fileType,e.props.Data(e.driver)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,null,i.a.createElement(s.a,null,i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("License Expiry")," ")),i.a.createElement("input",{placeholder:"yyyy-mm-dd",class:"form-control",type:"text",onChange:function(a){e.driver.lisenceExpiry=a.target.value,e.props.Data(e.driver)}})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("License Issue Date")," ")),i.a.createElement("input",{placeholder:"yyyy-mm-dd",class:"form-control",type:"text",onChange:function(a){e.driver.lisenceIssueDate=a.target.value}})),i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(d.a.Label,null,i.a.createElement("h5",null,Object(p.a)("License Number")," ")),i.a.createElement(m.a,{placeholder:Object(p.a)("License Number"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.driver.lisenceNumber=a.target.value,e.props.Data(e.driver)}})),i.a.createElement(h.a,{Getter:this.Get_Licence_Attachment,Headline:"License Attachment"})),i.a.createElement(b.a,{Data:this.Get_Cod_Wallet,Headline:"COD Wallet"}))}}]),t}(o.Component)}}]);
//# sourceMappingURL=8.995f2519.chunk.js.map