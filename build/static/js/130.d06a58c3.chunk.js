(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[130],{1731:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return L}));var n=t(8),l=t(9),c=t(15),r=t(16),i=t(0),o=t.n(i),m=t(535),d=t(527),s=t(548),u=t(164),b=t(531),h=t(536),E=t(519),y=t(6),D=t.n(y),v=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).inventoryDataDto={assetDto:{accuringDate:"2202-02-04",amount:10,currency:123,net:12,title:"string",vat:10}},e.handleClick=function(a){console.log(e.inventoryDataDto),D.a.post("http://15.235.141.168:70/inventory/add",e.inventoryDataDto,{headers:{SessionKey:"123",Event:"Create-Inventory-Item"}}).then((function(e){if(console.log(e),200===e.status)return e.data.data;throw new Error(e.this.inventoryDataDto)})).catch((function(e){throw e}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Add Accuring Date")," ")),o.a.createElement(b.a,{placeholder:"yyyy-mm-dd","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.assetDto.accuringDate}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Amount")," ")),o.a.createElement(b.a,{placeholder:"Amount","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.assetDto.amount}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Currency")," ")),o.a.createElement(b.a,{placeholder:"Currency","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.assetDto.currency}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Net")," ")),o.a.createElement(b.a,{placeholder:"Net","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.assetDto.net}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Title")," ")),o.a.createElement(b.a,{placeholder:"Title","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.assetDto.title}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Vat")," ")),o.a.createElement(b.a,{placeholder:"Vat","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.assetDto.vat}})),o.a.createElement(m.a,{className:"mt-2"},o.a.createElement(d.a,{className:"d-flex justify-content-end align-items-center"},o.a.createElement(h.a,{className:"mx-2",variant:"danger"},Object(E.a)("discard")),o.a.createElement(h.a,{className:"mx-2",variant:"success",onClick:this.handleClick},Object(E.a)("create")))))}}]),t}(i.Component),p=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).vehicle={cargoCapacity:4,chassyNumber:"abc",make:"abc",makeYear:"abc",model:"abc",plateNumber:"abc",registrationNumber:"abc",isVehicleCreate:!0},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement(d.a,{md:12},o.a.createElement("h4",null,o.a.createElement("u",null,Object(E.a)("Add Vehicle")))),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Cargo Capacity"))),o.a.createElement(b.a,{placeholder:"Cargo Capacity","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.cargoCapacity}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Chassy Number")," ")),o.a.createElement(b.a,{placeholder:"Chassy Number","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.chassyNumber}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Make")," ")),o.a.createElement(b.a,{placeholder:"Make","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.make}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Make Year")," ")),o.a.createElement(b.a,{placeholder:"Make Year","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.makeYear}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Model")," ")),o.a.createElement(b.a,{placeholder:"Model","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.model}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Plate Number")," ")),o.a.createElement(b.a,{placeholder:"Plate Number","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.plateNumber}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Registration Number")," ")),o.a.createElement(b.a,{placeholder:"Registration Number","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.registrationNumber}})),o.a.createElement(m.a,{className:"mt-2"},o.a.createElement(d.a,{className:"d-flex justify-content-end align-items-center"},o.a.createElement(h.a,{className:"mx-2",variant:"success",onClick:this.props.SetVehicle(this.vehicle)},Object(E.a)("create Vehicle")))))}}]),t}(i.Component),f=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).inventoryDataDto={hubVehicleDto:{accuringDate:"2202-04-04",accuringType:"abc",currency:1,hubId:1,purchasePrice:1,rent:1,vat:10,vehicle:{cargoCapacity:4,chassyNumber:"abc",make:"abc",makeYear:"abc",model:"abc",plateNumber:"abc",registrationNumber:"abc"}}},e.handleClick=function(a){console.log(e.inventoryDataDto),D.a.post("http://15.235.141.168:70/location/add",e.inventoryDataDto,{headers:{SessionKey:"123",Event:"Create-Biz-Cust-Warehouse"}}).then((function(e){if(console.log(e),200===e.status)return e.data.data;throw new Error(e.this.inventoryDataDto)})).catch((function(e){throw e}))},e.Get_Vehicle=function(a){console.log(a),e.inventoryDataDto.hubVehicleDto.vehicle.cargoCapacity=a.cargoCapacity,e.inventoryDataDto.hubVehicleDto.vehicle.chassyNumber=a.chassyNumber,e.inventoryDataDto.hubVehicleDto.vehicle.make=a.make,e.inventoryDataDto.hubVehicleDto.vehicle.model=a.model,e.inventoryDataDto.hubVehicleDto.vehicle.makeYear=a.makeYear,e.inventoryDataDto.hubVehicleDto.vehicle.plateNumber=a.plateNumber,e.inventoryDataDto.hubVehicleDto.vehicle.registrationNumber=a.registrationNumber},e.handleClick=function(a){console.log(e.inventoryDataDto),D.a.post("http://15.235.141.168:70/inventory/add",e.inventoryDataDto,{headers:{SessionKey:"123",Event:"Create-Hub-Vehicle"}}).then((function(e){if(console.log(e),200===e.status)return e.data.data;throw new Error(e.this.inventoryDataDto)})).catch((function(e){throw e}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement(m.a,null,o.a.createElement(p,{SetVehicle:this.Get_Vehicle}),o.a.createElement(m.a,null,o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Add Accuring Date")," ")),o.a.createElement(b.a,{placeholder:"yyyy-mm-dd","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.hubVehicleDto.accuringDate}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Add Accuring Type")," ")),o.a.createElement(b.a,{placeholder:"Add Accuring Type","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.hubVehicleDto.accuringDate}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Currency")," ")),o.a.createElement(b.a,{placeholder:"Currency","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.hubVehicleDto.currency}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Vat")," ")),o.a.createElement(b.a,{placeholder:"Vat","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.hubVehicleDto.vat}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Hub ID")," ")),o.a.createElement(b.a,{placeholder:"Hub ID","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.hubVehicleDto.hubId}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Purchase Price")," ")),o.a.createElement(b.a,{placeholder:"Purchase Price","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.hubVehicleDto.purchasePrice}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Rent")," ")),o.a.createElement(b.a,{placeholder:"Rent","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.hubVehicleDto.rent}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Cargo Capacity")," ")),o.a.createElement(b.a,{placeholder:"Cargo Capacity","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.vehicle.cargoCapacity}})))),o.a.createElement(m.a,null,o.a.createElement(m.a,{className:"mt-2"},o.a.createElement(d.a,{className:"d-flex justify-content-end align-items-center"},o.a.createElement(h.a,{className:"mx-2",variant:"danger"},Object(E.a)("discard")),o.a.createElement(h.a,{className:"mx-2",variant:"success",onClick:this.handleClick},Object(E.a)("create Hub Vehicle"))))))}}]),t}(i.Component),g=t(38),N=t.n(g),C=t(54),j=t(12),O=t(1599),V=function(e){var a=Object(i.useState)([]),t=Object(j.a)(a,2),n=t[0],l=t[1],c=Object(i.useState)([]),r=Object(j.a)(c,2),m=r[0],d=r[1];return Object(i.useEffect)((function(){(function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D.a.get("http://15.235.141.168:70/util/get-city").then((function(e){if(setTimeout((function(){l([{name:e.data.data.name}]),d([{id:e.data.data.id}])}),1e3),200===e.status)return e;throw new Error(e)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(a){var t=a.target.value;e.Data(t)}},o.a.createElement("option",{selected:!0},"-- City --"),n.map((function(e){return m.map((function(a){return o.a.createElement("option",{value:a.id},e.name)}))})))},k=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).inventoryDataDto={vendorVehicleDto:{accuringDate:"2022-07-25T06:39:14.770Z",cityId:1,lastUpdate:"2022-07-25T06:39:14.770Z",rent:1,vatPercentage:1,vehicle:{cargoCapacity:4,chassyNumber:"abc",make:"abc",makeYear:"abc",model:"abc",plateNumber:"abc",registrationNumber:"abc"},vendorId:0}},e.Get_Vehicle=function(a){console.log(a),e.inventoryDataDto.vendorVehicleDto.vehicle.cargoCapacity=a.cargoCapacity,e.inventoryDataDto.vendorVehicleDto.vehicle.chassyNumber=a.chassyNumber,e.inventoryDataDto.vendorVehicleDto.vehicle.make=a.make,e.inventoryDataDto.vendorVehicleDto.vehicle.model=a.model,e.inventoryDataDto.vendorVehicleDto.vehicle.makeYear=a.makeYear,e.inventoryDataDto.vendorVehicleDto.vehicle.plateNumber=a.plateNumber,e.inventoryDataDto.vendorVehicleDto.vehicle.registrationNumber=a.registrationNumber},e.Get_city_id=function(a){e.inventoryDataDto.vendorVehicleDto.cityId=a},e.handleClick=function(a){console.log(e.inventoryDataDto),D.a.post("http://15.235.141.168:70/inventory/add",e.inventoryDataDto,{headers:{SessionKey:"123",Event:"Create-Vendor-Vehicle"}}).then((function(e){if(console.log(e),200===e.status)return e.data.data;throw new Error(e.this.inventoryDataDto)})).catch((function(e){throw e}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement(p,{SetVehicle:this.Get_Vehicle}),o.a.createElement(m.a,null,o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Add Accuring Date")," ")),o.a.createElement(b.a,{placeholder:"yyyy-mm-dd","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.vendorVehicleDto.accuringDate}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Last Update")," ")),o.a.createElement(b.a,{placeholder:"yyyy-mm-dd","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.vendorVehicleDto.lastUpdate}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Vat")," ")),o.a.createElement(b.a,{placeholder:"Vat","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.vendorVehicleDto.vatPercentage}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Rent")," ")),o.a.createElement(b.a,{placeholder:"Rent","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.vendorVehicleDto.rent}})),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("city")," ")),o.a.createElement(O.a,null,o.a.createElement(V,{Data:this.Get_city_id}))),o.a.createElement(d.a,{md:6,className:"mt-2"},o.a.createElement(s.a.Label,null,o.a.createElement("h5",null,Object(E.a)("Vendor ID")," ")),o.a.createElement(b.a,{placeholder:"Vendor ID","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.inventoryDataDto.vendorVehicleDto.vendorId}})),o.a.createElement(m.a,{className:"mt-2"},o.a.createElement(d.a,{className:"d-flex justify-content-end align-items-center"},o.a.createElement(h.a,{className:"mx-2",variant:"danger"},Object(E.a)("discard")),o.a.createElement(h.a,{className:"mx-2",variant:"success",onClick:this.handleClick},Object(E.a)("create Hub Vehicle"))))))}}]),t}(i.Component),L=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement("h2",null,Object(E.a)("AddAssets")," / ",Object(E.a)("AddAssetManagement")," "))),o.a.createElement(m.a,{className:"mt-1"},o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(u.a.Body,null,o.a.createElement(m.a,null,o.a.createElement(v,null)))),o.a.createElement(u.a,null,o.a.createElement(u.a.Body,null,o.a.createElement(d.a,{md:12},o.a.createElement("h2",null,Object(E.a)("Add Vendor Vehicle"))),o.a.createElement(m.a,null,o.a.createElement(f,null)))),o.a.createElement(u.a,null,o.a.createElement(u.a.Body,null,o.a.createElement(m.a,null,o.a.createElement(d.a,{md:12},o.a.createElement("h2",null,Object(E.a)("Add Vendor Vehicle"))),o.a.createElement(k,null)))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=130.d06a58c3.chunk.js.map