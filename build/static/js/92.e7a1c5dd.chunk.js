(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[92],{1644:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t(8),c=t(9),l=t(15),r=t(16),o=t(0),u=t.n(o),s=t(535),i=t(527),d=t(548),m=t(164),b=t(531),h=t(536),p=t(1599),E=t(519),f=t(6),y=t.n(f),g=t(29),C=(t(522),t(546)),D=t(544),v=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).hubUpdateDto={accuringDate:"",amountPurchased:0,currency:"",id:0,isPurchased:0,isSold:0,rent:0,soldAmount:0,validityDate:""},e.contactUpdateDto={countryCode:"",id:null,networkCode:null,number:null,numberType:""},e.addressUpdateDto={_long:null,geoLink:"",id:null,lang:null,streetAddress:""},e.handleClickAddress=function(a){console.log(e.addressUpdateDto),y.a.put("http://15.235.141.168:70/address/update",e.addressUpdateDto,{headers:{SessionKey:"123"}}).then((function(e){console.log(e)})).catch((function(e){throw e}))},e.handleClickContact=function(a){console.log(e.contactUpdateDto),y.a.put("http://15.235.141.168:70/contact/update",e.contactUpdateDto,{headers:{SessionKey:"123"}}).then((function(e){console.log(e)})).catch((function(e){throw e}))},e.Getid=function(){return e.props.location.id},e.handleClick=function(a){console.log(e.EditData),y.a.put("http://15.235.141.168:70/hub/update",e.EditData,{headers:{SessionKey:"123"}}).then((function(e){if(console.log(e),211===e.status)return e.data.data;throw new Error(e.this.locationDataDTO)})).catch((function(e){throw e}))},e.Get_city_id=function(a){e.addressUpdateDto.cityId=a},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),console.log(this.hubUpdateDto),this.hubUpdateDto.accuringDate=this.props.location.resource.hubDto.hubLocation.accuringDate,this.hubUpdateDto.validityDate=this.props.location.resource.hubDto.hubLocation.validityDate,this.hubUpdateDto.currency=this.props.location.resource.hubDto.hubLocation.currency,this.hubUpdateDto.soldAmount=this.props.location.resource.hubDto.hubLocation.soldAmount,this.addressUpdateDto=this.props.location.resource.hubDto.hubLocation.address,this.contactUpdateDto=this.props.location.resource.hubDto.hubLocation.contact,this.hubUpdateDto.rent=this.props.location.resource.hubDto.hubLocation.rent,this.forceUpdate()}},{key:"componentWillUnmount",value:function(){g.a.push({pathname:"/hub/viewhubs"})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(s.a,null,u.a.createElement(i.a,null,u.a.createElement("h2",null,Object(E.a)("Edit Hub")," / ",Object(E.a)("Edit")," "))),u.a.createElement(s.a,{className:"mt-1"},u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement(m.a.Body,null,u.a.createElement(s.a,null,u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Country Code")," ")),u.a.createElement(b.a,{name:"countryCode",placeholder:Object(E.a)("Country Code"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contactUpdateDto.countryCode=a.target.value}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Network Code")," ")),u.a.createElement(b.a,{name:"networkCode",placeholder:Object(E.a)("Network Code"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contactUpdateDto.networkCode=parseInt(a.target.value,10)}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Number")," ")),u.a.createElement(b.a,{name:"number",placeholder:Object(E.a)("Number"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contactUpdateDto.number=parseInt(a.target.value,10)}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Number Type")," ")),u.a.createElement(b.a,{name:"numberType",placeholder:Object(E.a)("Number Type"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.contactUpdateDto.numberType=a.target.value}})),u.a.createElement(s.a,{className:"mt-2"},u.a.createElement(i.a,{className:"d-flex justify-content-end align-items-center"},u.a.createElement(h.a,{className:"mx-2",variant:"success",onClick:this.handleClickContact},Object(E.a)("Update")))),u.a.createElement(C.a,null),u.a.createElement(D.a,{Data:this.Get_city_id}),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Street Address")," ")),u.a.createElement(b.a,{name:"streetAdress",placeholder:Object(E.a)("Street Address"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.addressUpdateDto.streetAddress=a.target.value}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("addLocation")," ")),u.a.createElement(p.a,null,u.a.createElement(b.a,{placeholder:Object(E.a)("Add Location"),"aria-label":"Enddate","aria-describedby":"basic-addon1",name:"AddLocation"}),u.a.createElement(h.a,{onClick:function(a){navigator.geolocation.getCurrentPosition((function(a){console.log("Latitude : ",a.coords.latitude),console.log("Longitude : ",a.coords.longitude),e.addressUpdateDto.lang=a.coords.latitude,e.addressUpdateDto._long=a.coords.longitude}))}},Object(E.a)("addLocation")," "))),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Geo Link")," ")),u.a.createElement(b.a,{placeholder:Object(E.a)("Geo Link"),"aria-label":"Enddate",name:"GeoLink","aria-describedby":"basic-addon1",onChange:function(a){e.addressUpdateDto.geoLink=a.target.value}})),u.a.createElement(s.a,{className:"mt-2"},u.a.createElement(i.a,{className:"d-flex justify-content-end align-items-center"},u.a.createElement(h.a,{className:"mx-2",variant:"success",onClick:this.handleClickAddress},Object(E.a)("Update")))),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Validity Date")," ")),u.a.createElement(b.a,{placeholder:"yyyy-mm-dd","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.hubUpdateDto.validityDate=a.target.value}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Amount Purchased")," ")),u.a.createElement(b.a,{placeholder:Object(E.a)("Amount Purchased"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.hubUpdateDto.amountPurchased=parseInt(a.target.value,10)}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Currency")," ")),u.a.createElement(b.a,{placeholder:Object(E.a)("Currency"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.hubUpdateDto.currency=a.target.value}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Is Purchased?")," ")),u.a.createElement(b.a,{placeholder:"yes/no","aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){!0===a.target.value?e.hubUpdateDto.isPurchased=1:e.hubUpdateDto.isPurchased=0}})),u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(E.a)("Rent")," ")),u.a.createElement(b.a,{placeholder:Object(E.a)("Rent"),"aria-label":"Enddate","aria-describedby":"basic-addon1",onChange:function(a){e.hubUpdateDto.rent=parseInt(a.target.value,10)}})),u.a.createElement(s.a,{className:"mt-2"},u.a.createElement(i.a,{className:"d-flex justify-content-end align-items-center"},u.a.createElement(h.a,{className:"mx-2",variant:"success",onClick:this.handleClick},Object(E.a)("Edit"))))))))))}}]),t}(o.Component)},522:function(e,a,t){"use strict";var n=t(38),c=t.n(n),l=t(54),r=t(0),o=t(6),u=t.n(o);a.a=function(e){return Object(r.useEffect)((function(){(function(){var a=Object(l.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.get(e.url,{headers:{SessionKey:"123",Event:e.event,id:e.idsetter}}).then((function(a){if(e.Data(a.data.data),200===a.status)return a;throw new Error(a)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),null}},544:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t(8),c=t(9),l=t(15),r=t(16),o=t(0),u=t.n(o),s=t(522),i=t(527),d=t(548),m=t(1599),b=t(519),h=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).City=[],e.CitiesGetter=function(a){console.log(a),e.City=a,e.forceUpdate()},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(s.a,{Data:this.CitiesGetter,url:"http://15.235.141.168:70/util/get-city"}),u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(b.a)("City")," ")),u.a.createElement(m.a,null,u.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(a){var t=a.target.value;e.props.Data(t),console.log(e.City)},required:!0},u.a.createElement("option",{selected:!0},Object(b.a)("City")),this.City.map((function(e){return u.a.createElement("option",{value:e.id},e.name)})))))}}]),t}(o.Component)},546:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t(8),c=t(9),l=t(15),r=t(16),o=t(0),u=t.n(o),s=t(522),i=t(527),d=t(548),m=t(1599),b=t(519),h=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).Country=[],e.CountriesGetter=function(a){console.log(a),e.Country=a,e.forceUpdate()},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(i.a,{md:6,className:"mt-2"},u.a.createElement(s.a,{Data:this.CountriesGetter,url:"http://15.235.141.168:70/util/get-country"}),u.a.createElement(d.a.Label,null,u.a.createElement("h5",null,Object(b.a)("Country")," ")),u.a.createElement(m.a,null,u.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(a){var t=a.target.value;e.props.Data(t),console.log(e.Country)},required:!0},u.a.createElement("option",{selected:!0},Object(b.a)("Country")),this.Country.map((function(e){return u.a.createElement("option",{value:e.id},e.country)})))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=92.e7a1c5dd.chunk.js.map