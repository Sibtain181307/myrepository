(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[134],{1692:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t(9),r=t(15),c=t(16),o=t(0),m=t.n(o),i=t(535),s=t(527),u=t(548),d=t(531),p=t(1599),E=t(164),D=t(536),h=t(519),y=t(6),b=t.n(y),v=t(579),O=t(578),T=t(566),f=t(875),g=t(562),C=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).userDataDTO={driverEmpDto:{compensation:null,compensationTenure:"",compensationType:"",contractCode:"",currency:"",dateOfJoining:"",empType:"",validityDate:"",contractAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},resource:{firstName:"",middleName:"",lastName:"",gender:"",dateOfBirth:"",nic:"",nicAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},address:{_long:null,cityId:null,streetAddress:"",lang:null,geoLink:""},contact:{countryCode:"",networkCode:null,number:null,numberType:""}},user:{userName:"",password:"",roleId:null},wallet:{title:"",balance:null,walletType:""},driver:{codWallet:{title:"",balance:null,walletType:""},licenceAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},lisenceExpiry:"",lisenceIssueDate:"",lisenceNumber:""}}},e.handleClick=function(a){console.log(e.userDataDTO),b.a.post("http://15.235.141.168:70/user/add",e.userDataDTO,{headers:{SessionKey:"123",Event:"Create-Driver-Employ"}}).then((function(e){if(console.log(e),200===e.status)return e.data.data;throw new Error(e.this.userDataDTO)})).catch((function(e){throw e}))},e.GetResource=function(a){console.log(a),e.userDataDTO.driverEmpDto.resource=a,console.log(e.userDataDTO.driverEmpDto.resource)},e.GetUser=function(a){e.userDataDTO.driverEmpDto.user=a,console.log(e.userDataDTO.driverEmpDto.user)},e.GetWallet=function(a){console.log(a),e.userDataDTO.driverEmpDto.wallet=a},e.GetDriver=function(a){console.log(a),e.userDataDTO.driverEmpDto.driver=a},e.GetContractAttachment=function(a){e.userDataDTO.driverEmpDto.contractAttachment=a},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(s.a,null,m.a.createElement("h2",null,Object(h.a)("Employ Driver")," / ",Object(h.a)("Add Employ Driver")," ")),m.a.createElement(i.a,null,m.a.createElement(i.a,null,m.a.createElement(v.a,{Data:this.GetResource}),m.a.createElement(O.a,{Data:this.GetUser}),m.a.createElement(i.a,null,m.a.createElement(T.a,{Data:this.GetWallet})),m.a.createElement(i.a,null,m.a.createElement(i.a,null,m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Compensation")," ")),m.a.createElement(d.a,{placeholder:Object(h.a)("Compensation"),"aria-label":"Enddate",name:"compensation","aria-describedby":"basic-addon1",onChange:function(a){e.userDataDTO.driverEmpDto.compensation=parseInt(a.target.value,10)}})),m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Compensation Type")," ")),m.a.createElement(d.a,{placeholder:Object(h.a)("Compensation Type"),"aria-label":"Enddate",name:"compensationType","aria-describedby":"basic-addon1",onChange:function(a){e.userDataDTO.driverEmpDto.compensationType=a.target.value}})),m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Compensation Tenure")," ")),m.a.createElement(d.a,{placeholder:Object(h.a)("Compensation Tenure"),"aria-label":"Enddate",name:"compensationTenure","aria-describedby":"basic-addon1",onChange:function(a){e.userDataDTO.driverEmpDto.compensationTenure=a.target.value}})),m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Date of Joining")," ")),m.a.createElement("input",{placeholder:"yyyy-mm-dd",id:"startDate",class:"form-control",type:"text",onChange:function(a){e.userDataDTO.driverEmpDto.dateOfJoining=a.target.value,console.log(a.target.value)}})),m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Validity Date")," ")),m.a.createElement("input",{placeholder:"yyyy-mm-dd",id:"validityDate",class:"form-control",type:"text",onChange:function(a){e.userDataDTO.driverEmpDto.validityDate=a.target.value}})),m.a.createElement(g.a,{Headline:"Contract Attachment",Data:this.GetContractAttachment}),m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Currency")," ")),m.a.createElement("input",{name:"currency",id:"currency",class:"form-control",type:"text",onChange:function(a){e.userDataDTO.driverEmpDto.currency=a.target.value},placeholder:Object(h.a)("Currency")})),m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Contract Code")," ")),m.a.createElement("input",{name:"contractCode",id:"contractCode",class:"form-control",type:"text",onChange:function(a){e.userDataDTO.driverEmpDto.contractCode=a.target.value},placeholder:Object(h.a)("Contract Code")})),m.a.createElement(s.a,{md:6,className:"mt-2"},m.a.createElement(u.a.Label,null,m.a.createElement("h5",null,Object(h.a)("Employ Type")," ")),m.a.createElement(p.a,null,m.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(a){e.userDataDTO.driverEmpDto.empType=a.target.value},name:"empType"},m.a.createElement("option",{selected:!0},Object(h.a)("Employ Type")),m.a.createElement("option",{value:"Director"},Object(h.a)("Director")),m.a.createElement("option",{value:"Manager"},Object(h.a)("Manager")),m.a.createElement("option",{value:"Assistant Manager"},Object(h.a)("Assistant Manager")),m.a.createElement("option",{value:"Driver"},Object(h.a)("Driver")),m.a.createElement("option",{value:"Supervisor"},Object(h.a)("Supervisor"))))))),m.a.createElement(f.a,{Data:this.GetDriver})))),m.a.createElement(i.a,{className:"mt-1"},m.a.createElement(u.a,null,m.a.createElement(E.a,null,m.a.createElement(E.a.Body,null,m.a.createElement(i.a,{className:"mt-2"},m.a.createElement(s.a,{className:"d-flex justify-content-end align-items-center"},m.a.createElement(D.a,{className:"mx-2",variant:"success",onClick:this.handleClick},Object(h.a)("Save All Data")))))))))}}]),t}(o.Component);a.default=C}}]);
//# sourceMappingURL=134.d3b80459.chunk.js.map