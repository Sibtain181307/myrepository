(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[94],{1709:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(8),r=a(9),c=a(15),o=a(16),l=a(519),i=a(164),s=a(535),u=a(527),m=a(536),h=a(0),p=a.n(h),d=a(705),f=a(704),E=a(6),D=a.n(E),b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).locationscheck=!1,e.orderBaseDto={b2BOdrDto:{bizCustId:0,deliveryLocationId:0,pickupLoactionId:0},shipmentContentDtoList:[],type:4},e.GetDeliverylocationID=function(t){e.orderBaseDto.b2BOdrDto.deliveryLocationId=parseInt(t,10)},e.GetPickuplocationID=function(t){e.orderBaseDto.b2BOdrDto.pickupLoactionId=parseInt(t,10)},e.GetShipmentDetails=function(t){e.orderBaseDto.shipmentContentDtoList.push(t),console.log(e.orderBaseDto.shipmentContentDtoList);var a=JSON.parse(localStorage.user);e.orderBaseDto.b2BOdrDto.bizCustId=a.id,e.forceUpdate(),e.handleCreateShipment()},e.handleCreateShipment=function(){D.a.post("http://15.235.141.168:70/order/create",e.orderBaseDto,{headers:{SessionKey:"123",Event:"Create-Cargo-Shipment"}}).then((function(e){if(console.log(e),200===e.status)return e.data.data;throw new Error(e.this.orderBaseDto)})).catch((function(e){throw e}))},e.handlesubmit=function(){e.locationscheck=!0,e.forceUpdate()},e}return Object(r.a)(a,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(i.a,null,p.a.createElement(i.a.Body,null,p.a.createElement(s.a,null,p.a.createElement(d.a,{title:Object(l.a)("Receiver Locations"),Data:this.GetDeliverylocationID}),p.a.createElement(d.a,{title:Object(l.a)("Sender Locations"),Data:this.GetPickuplocationID}),p.a.createElement(s.a,{className:"mt-2"},p.a.createElement(u.a,{className:"d-flex justify-content-end align-items-center"},p.a.createElement(m.a,{className:"mx-2 mb-2 ",variant:"success",onClick:this.handlesubmit},Object(l.a)("Create"))))))),p.a.createElement(s.a,null,!0===this.locationscheck?p.a.createElement(f.a,{Data:this.GetShipmentDetails}):null))}}]),a}(h.Component)},522:function(e,t,a){"use strict";var n=a(38),r=a.n(n),c=a(54),o=a(0),l=a(6),i=a.n(l);t.a=function(e){return Object(o.useEffect)((function(){(function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(t){if(e.Data(t.data.data),200===t.status)return t;throw new Error(t)})).catch((function(e){throw e}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),null}},704:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(8),r=a(9),c=a(15),o=a(16),l=a(0),i=a.n(l),s=a(164),u=a(535),m=a(527),h=a(548),p=a(536),d=a(519),f=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).shipmentContentDtoList={cargoType:"",cargoValue:0,codAmount:0,description:"",isCod:0,isDelicate:0,shipmentId:0,title:"",weight:0},e.handleClick=function(){e.props.Data(e.shipmentContentDtoList),console.log(e.shipmentContentDtoList)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(s.a,null,i.a.createElement(s.a.Body,null,i.a.createElement("h4",{className:"mt-2"},Object(d.a)("Enter the Details for the Shipments")),i.a.createElement(u.a,null,i.a.createElement(m.a,{md:6,className:"mt-2"},i.a.createElement(h.a.Label,null,i.a.createElement("h5",null,Object(d.a)("Cargo Type")," ")),i.a.createElement("input",{placeholder:Object(d.a)("Cargo Type"),id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(t){e.shipmentContentDtoList.cargoType=t.target.value}})),i.a.createElement(m.a,{md:6,className:"mt-2"},i.a.createElement(h.a.Label,null,i.a.createElement("h5",null,Object(d.a)("Cargo Value")," ")),i.a.createElement("input",{placeholder:Object(d.a)("Cargo Value"),id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(t){e.shipmentContentDtoList.cargoValue=parseInt(t.target.value,10)}})),i.a.createElement(m.a,{md:6,className:"mt-2"},i.a.createElement(h.a.Label,null,i.a.createElement("h5",null,Object(d.a)("Cod Amount")," ")),i.a.createElement("input",{placeholder:Object(d.a)("Cod Amount"),id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(t){e.shipmentContentDtoList.codAmount=parseInt(t.target.value,10)}})),i.a.createElement(m.a,{md:6,className:"mt-2"},i.a.createElement(h.a.Label,null,i.a.createElement("h5",null,Object(d.a)("Description")," ")),i.a.createElement("input",{placeholder:Object(d.a)("Description"),id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(t){e.shipmentContentDtoList.description=t.target.value}})),i.a.createElement(m.a,{md:6,className:"mt-2"},i.a.createElement(h.a.Label,null,i.a.createElement("h5",null,Object(d.a)("Shipment Id")," ")),i.a.createElement("input",{placeholder:Object(d.a)("Shipment ID"),id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(t){e.shipmentContentDtoList.shipmentId=parseInt(t.target.value,10)}})),i.a.createElement(m.a,{md:6,className:"mt-2"},i.a.createElement(h.a.Label,null,i.a.createElement("h5",null,Object(d.a)("Title ")," ")),i.a.createElement("input",{placeholder:Object(d.a)("Title"),id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(t){e.shipmentContentDtoList.title=t.target.value}})),i.a.createElement(m.a,{md:6,className:"mt-2"},i.a.createElement(h.a.Label,null,i.a.createElement("h5",null,Object(d.a)("Weight")," ")),i.a.createElement("input",{placeholder:Object(d.a)("Weight"),id:"startDate",class:"form-control",required:!0,type:"text",onChange:function(t){e.shipmentContentDtoList.weight=parseInt(t.target.value,10)}})),i.a.createElement(m.a,{md:12,className:"mt-2"},i.a.createElement(h.a.Check,{name:"checkbox1",onChange:function(t){t.target.checked&&(e.shipmentContentDtoList.isDelicate=!0,console.log(e.shipmentContentDtoList))},label:"Is the Package Delicate?"})),i.a.createElement(m.a,{md:12,className:"mt-2"},i.a.createElement(h.a.Check,{onChange:function(t){t.target.checked&&(e.shipmentContentDtoList.isCod=!0,console.log(e.shipmentContentDtoList))},label:"Is the payment type COD?"})),i.a.createElement(u.a,{className:"mt-2"},i.a.createElement(m.a,{className:"d-flex justify-content-end align-items-center"},i.a.createElement(p.a,{className:"mx-2 mb-2 ",variant:"success",onClick:this.handleClick},Object(d.a)("Create")))))))}}]),a}(l.Component)},705:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(8),r=a(9),c=a(15),o=a(16),l=a(0),i=a.n(l),s=a(522),u=a(527),m=a(548),h=a(1599),p=a(519),d=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).Locations=[],e.LocationsGetter=function(t){console.log(t),e.Locations=t,e.forceUpdate(),console.log(e.Locations)},e.Setid=function(){var e=JSON.parse(localStorage.user).typeId;return console.log(e),e},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{md:6,className:"mt-2"},i.a.createElement(s.a,{Data:this.LocationsGetter,url:"http://15.235.141.168:70/location/get-location-by-cust",event:"Get-LastMile",idsetter:this.Setid()}),console.log(this.id),i.a.createElement(m.a.Label,null,i.a.createElement("h5",null,this.props.title," ")),i.a.createElement(h.a,null,i.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(t){var a=parseInt(t.target.value,10);e.props.Data(a),console.log(e.Locations)},required:!0},i.a.createElement("option",{selected:!0},Object(p.a)("Locations")),this.Locations.map((function(e){return i.a.createElement("option",{value:e.id},e.title)})))))}}]),a}(l.Component)}}]);
//# sourceMappingURL=94.25ef4165.chunk.js.map