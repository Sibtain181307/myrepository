(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[84],{1642:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(8),c=a(9),r=a(15),l=a(16),o=a(0),s=a.n(o),d=a(535),i=a(527),u=a(548),m=a(164),p=a(531),b=a(536),h=a(1599),E=a(519),f=a(6),y=a.n(f),C=a(546),g=a(29),v=a(544),j=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).contactUpdateDto={countryCode:"92",id:1,networkCode:22,number:2220,numberType:"zon"},e.addressUpdateDto={_long:10,geoLink:"def",id:1,lang:111,streetAddress:"def"},e.handleClickAddress=function(t){console.log(e.addressUpdateDto),y.a.put("http://15.235.141.168:70/address/update",e.addressUpdateDto,{headers:{SessionKey:"123"}}).then((function(e){console.log(e)})).catch((function(e){throw e}))},e.handleClickContact=function(t){console.log(e.contactUpdateDto),y.a.put("http://15.235.141.168:70/contact/update",e.contactUpdateDto,{headers:{SessionKey:"123"}}).then((function(e){console.log(e)})).catch((function(e){throw e}))},e.Getid=function(){return e.props.location.id},e.Get_city_id=function(t){e.addressUpdateDto.cityId=parseInt(t,10)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.location),this.addressUpdateDto=this.props.location.resource.custWarehouseDto.warehouse.address,this.contactUpdateDto=this.props.location.resource.custWarehouseDto.warehouse.contact,console.log(this.addressUpdateDto,this.contactUpdateDto),this.forceUpdate()}},{key:"componentWillUnmount",value:function(){g.a.pushState({pathname:"/ViewCustomerWarehouse"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement(i.a,null,s.a.createElement("h2",null,Object(E.a)("Edit Customer Warehouse")," / ",Object(E.a)("Edit")," "))),s.a.createElement(d.a,{className:"mt-1"},s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(m.a.Body,null,s.a.createElement(d.a,null,s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(E.a)("Country Code")," ")),s.a.createElement(p.a,{name:"countryCode",placeholder:Object(E.a)("Country Code"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(t){e.contactUpdateDto.countryCode=t.target.value}})),s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(E.a)("Network Code")," ")),s.a.createElement(p.a,{name:"networkCode",placeholder:Object(E.a)("Network Code"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(t){e.contactUpdateDto.networkCode=parseInt(t.target.value,10)}})),s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(E.a)("Number")," ")),s.a.createElement(p.a,{name:"number",placeholder:Object(E.a)("Number"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(t){e.contactUpdateDto.number=parseInt(t.target.value,10)}})),s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(E.a)("Number Type")," ")),s.a.createElement(p.a,{name:"numberType",placeholder:Object(E.a)("Number Type"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(t){e.contactUpdateDto.numberType=t.target.value}})),s.a.createElement(d.a,{className:"mt-2"},s.a.createElement(i.a,{className:"d-flex justify-content-end align-items-center"},s.a.createElement(b.a,{className:"mx-2",variant:"success",onClick:this.handleClickContact},Object(E.a)("Update")))),s.a.createElement(C.a,null),s.a.createElement(v.a,{Data:this.Get_city_id}),s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(E.a)("Street Address")," ")),s.a.createElement(p.a,{name:"streetAdress",placeholder:Object(E.a)("Street Address"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(t){e.addressUpdateDto.streetAddress=t.target.value}})),s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(E.a)("addLocation")," ")),s.a.createElement(h.a,null,s.a.createElement(p.a,{placeholder:Object(E.a)("Add Location"),"aria-label":"Enddate","aria-describedby":"basic-addon1",name:"AddLocation"}),s.a.createElement(b.a,{onClick:function(t){navigator.geolocation.getCurrentPosition((function(t){console.log("Latitude : ",t.coords.latitude),console.log("Longitude : ",t.coords.longitude),e.addressUpdateDto.lang=t.coords.latitude,e.addressUpdateDto._long=t.coords.longitude}))}},Object(E.a)("addLocation")," "))),s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(E.a)("Geo Link")," ")),s.a.createElement(p.a,{placeholder:Object(E.a)("Geo Link"),"aria-label":"Enddate",name:"GeoLink","aria-describedby":"basic-addon1",onChange:function(t){e.addressUpdateDto.geoLink=t.target.value}})),s.a.createElement(d.a,{className:"mt-2"},s.a.createElement(i.a,{className:"d-flex justify-content-end align-items-center"},s.a.createElement(b.a,{className:"mx-2",variant:"success",onClick:this.handleClickAddress},Object(E.a)("Update"))))))))))}}]),a}(o.Component)},522:function(e,t,a){"use strict";var n=a(38),c=a.n(n),r=a(54),l=a(0),o=a(6),s=a.n(o);t.a=function(e){return Object(l.useEffect)((function(){(function(){var t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(t){if(e.Data(t.data.data),200===t.status)return t;throw new Error(t)})).catch((function(e){throw e}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),null}},544:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(8),c=a(9),r=a(15),l=a(16),o=a(0),s=a.n(o),d=a(522),i=a(527),u=a(548),m=a(1599),p=a(519),b=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).City=[],e.CitiesGetter=function(t){console.log(t),e.City=t,e.forceUpdate()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(d.a,{Data:this.CitiesGetter,url:"http://15.235.141.168:70/util/get-city"}),s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(p.a)("City")," ")),s.a.createElement(m.a,null,s.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(t){var a=t.target.value;e.props.Data(a),console.log(e.City)},required:!0},s.a.createElement("option",{selected:!0},Object(p.a)("City")),this.City.map((function(e){return s.a.createElement("option",{value:e.id},e.name)})))))}}]),a}(o.Component)},546:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(8),c=a(9),r=a(15),l=a(16),o=a(0),s=a.n(o),d=a(522),i=a(527),u=a(548),m=a(1599),p=a(519),b=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).Country=[],e.CountriesGetter=function(t){console.log(t),e.Country=t,e.forceUpdate()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(i.a,{md:6,className:"mt-2"},s.a.createElement(d.a,{Data:this.CountriesGetter,url:"http://15.235.141.168:70/util/get-country"}),s.a.createElement(u.a.Label,null,s.a.createElement("h5",null,Object(p.a)("Country")," ")),s.a.createElement(m.a,null,s.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(t){var a=t.target.value;e.props.Data(a),console.log(e.Country)},required:!0},s.a.createElement("option",{selected:!0},Object(p.a)("Country")),this.Country.map((function(e){return s.a.createElement("option",{value:e.id},e.country)})))))}}]),a}(o.Component)}}]);
//# sourceMappingURL=84.5daddc2b.chunk.js.map