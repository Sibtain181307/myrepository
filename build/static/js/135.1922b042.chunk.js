(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[135],{1743:function(e,a,t){"use strict";t.r(a);var l=t(8),n=t(9),r=t(15),c=t(16),o=t(0),i=t.n(o),m=t(535),s=t(527),u=t(548),d=t(531),h=t(164),b=t(536),E=t(519),p=t(6),D=t.n(p),v=t(579),y=t(578),g=t(566),O=t(875),f=t(562),C=(t(522),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).vehicle={cargoCapacity:null,chassyNumber:"",make:"",makeYear:"",model:"",plateNumber:"",registrationNumber:""},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(m.a,null,i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Cargo Capacity"))),i.a.createElement(d.a,{placeholder:Object(E.a)("Cargo Capacity"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.cargoCapacity=parseInt(a.target.value,10),e.props.Data(e.vehicle)}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Chassy Number")," ")),i.a.createElement(d.a,{placeholder:Object(E.a)("Chassy Number"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.chassyNumber=a.target.value,e.props.Data(e.vehicle)}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Make")," ")),i.a.createElement(d.a,{placeholder:Object(E.a)("Make"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.make=a.target.value,e.props.Data(e.vehicle)}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Make Year")," ")),i.a.createElement(d.a,{placeholder:Object(E.a)("Make Year"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.makeYear=a.target.value,e.props.Data(e.vehicle)}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Model")," ")),i.a.createElement(d.a,{placeholder:Object(E.a)("Model"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.model=a.target.value,e.props.Data(e.vehicle)}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Plate Number")," ")),i.a.createElement(d.a,{placeholder:Object(E.a)("Plate Number"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.plateNumber=a.target.value,e.props.Data(e.vehicle)}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Registration Number")," ")),i.a.createElement(d.a,{placeholder:"Registration Number","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.registrationNumber=a.target.value,e.props.Data(e.vehicle)}})))}}]),t}(o.Component)),N=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).userDataDTO={driverFreelanceDto:{compensation:null,compensationType:"",contractCode:"",currency:"",validityDate:"",contractAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},vehicle:{cargoCapacity:null,chassyNumber:"",make:"",makeYear:"",model:"",plateNumber:"",registrationNumber:""},resource:{firstName:"",middleName:"",lastName:"",gender:"",dateOfBirth:"",nic:"",nicAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},address:{_long:null,cityId:null,streetAddress:"",lang:null,geoLink:""},contact:{countryCode:"",networkCode:null,number:null,numberType:""}},user:{userName:"",password:"",roleId:null},driver:{codWallet:{title:"",balance:null,walletType:""},licenceAttachment:{attachmentType:"",description:"",filePath:"",fileType:""},lisenceExpiry:"",lisenceIssueDate:"",lisenceNumber:""}}},e.handleClick=function(a){console.log(e.userDataDTO),D.a.post("http://15.235.141.168:70/user/add",e.userDataDTO,{headers:{SessionKey:"123",Event:"Create-Freelance-Driver"}}).then((function(e){if(console.log(e),200===e.status)return e.data.data;throw new Error(e.this.userDataDTO)})).catch((function(e){throw e}))},e.GetResource=function(a){console.log(a),e.userDataDTO.driverFreelanceDto.resource=a,console.log(e.userDataDTO.driverFreelanceDto.resource)},e.GetUser=function(a){console.log(e.userDataDTO.driverFreelanceDto.user),e.userDataDTO.driverFreelanceDto.user=a},e.GetWallet=function(a){console.log(a),e.userDataDTO.driverFreelanceDto.wallet=a},e.GetDriver=function(a){console.log(a),e.userDataDTO.driverFreelanceDto.driver=a},e.GetContractAttachment=function(a){e.userDataDTO.driverFreelanceDto.contractAttachment=a},e.GetVehicle=function(a){e.userDataDTO.driverFreelanceDto.vehicle=a},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(s.a,null,i.a.createElement("h2",null,Object(E.a)("Employ Driver")," / ",Object(E.a)("Add Employ Driver")," ")),i.a.createElement(m.a,null,i.a.createElement(m.a,null,i.a.createElement(v.a,{Data:this.GetResource}),i.a.createElement(m.a,null,i.a.createElement(m.a,null,i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Compensation")," ")),i.a.createElement(d.a,{placeholder:"Compensation","aria-label":"Enddate",name:"compensation","aria-describedby":"basic-addon1",onChange:function(a){e.userDataDTO.driverEmpDto.compensation=parseInt(a.target.value,10)}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Compensation Type")," ")),i.a.createElement(d.a,{placeholder:"Compensation Type","aria-label":"Enddate",name:"compensationType","aria-describedby":"basic-addon1",onChange:function(a){e.userDataDTO.driverEmpDto.compensationType=a.target.value}})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Validity Date")," ")),i.a.createElement("input",{placeholder:"yyyy-mm-dd",id:"validityDate",class:"form-control",type:"text",onChange:function(a){e.userDataDTO.driverEmpDto.validityDate=a.target.value}})),i.a.createElement(f.a,{Headline:"Contract Attachment",Data:this.GetContractAttachment}),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("currency")," ")),i.a.createElement("input",{name:"currency",id:"currency",class:"form-control",type:"text",onChange:function(a){e.userDataDTO.driverEmpDto.currency=a.target.value},placeholder:"Currency"})),i.a.createElement(s.a,{md:6,className:"mt-2"},i.a.createElement(u.a.Label,null,i.a.createElement("h5",null,Object(E.a)("Contract Code")," ")),i.a.createElement("input",{name:"contractCode",id:"contractCode",class:"form-control",type:"text",onChange:function(a){e.userDataDTO.driverEmpDto.contractCode=a.target.value},placeholder:"Currency"})))),i.a.createElement(m.a,null,i.a.createElement(C,{Data:this.GetVehicle})),i.a.createElement(y.a,{Data:this.GetUser}),i.a.createElement(m.a,null,i.a.createElement(g.a,{Data:this.GetWallet})),i.a.createElement(O.a,{Data:this.GetDriver})))),i.a.createElement(m.a,{className:"mt-1"},i.a.createElement(u.a,null,i.a.createElement(h.a,null,i.a.createElement(h.a.Body,null,i.a.createElement(m.a,{className:"mt-2"},i.a.createElement(s.a,{className:"d-flex justify-content-end align-items-center"},i.a.createElement(b.a,{className:"mx-2",variant:"success",onClick:this.handleClick},Object(E.a)("Save All Data")))))))))}}]),t}(o.Component);a.default=N}}]);
//# sourceMappingURL=135.1922b042.chunk.js.map