(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[122],{1597:function(e,t,a){"use strict";a.r(t);var s=a(8),i=a(9),l=a(15),o=a(16),r=a(0),c=a.n(r),n=a(663),m=a(108),d=a(27),u=a(519),h=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={topSellingProduct:[{title:"Wireless Headphone E23",description:"Lorem ipsum dolor sit amet consectetur.",prevPrice:500,currentPrice:450,imgUrl:"/assets/images/products/headphone-4.jpg"},{title:"Wireless Headphone Y902",description:"Lorem ipsum dolor sit amet consectetur.",prevPrice:500,currentPrice:200,imgUrl:"/assets/images/products/headphone-3.jpg"},{title:"Wireless Headphone E09",description:"Lorem ipsum dolor sit amet consectetur.",prevPrice:500,currentPrice:600,imgUrl:"/assets/images/products/headphone-2.jpg"},{title:"Wireless Headphone X89",description:"Lorem ipsum dolor sit amet consectetur.",prevPrice:500,currentPrice:350,imgUrl:"/assets/images/products/headphone-4.jpg"}],newUserList:[{name:"Smith Doe",email:"Smith@gmail.com",status:"active",photoUrl:"/assets/images/faces/1.jpg"},{name:"Jhon Doe",email:"Jhon@gmail.com",status:"pending",photoUrl:"/assets/images/faces/2.jpg"},{name:"Alex",email:"Otttio@gmail.com",status:"inactive",photoUrl:"/assets/images/faces/3.jpg"},{name:"Mathew Doe",email:"matheo@gmail.com",status:"active",photoUrl:"/assets/images/faces/4.jpg"}],userActivity:[{activitylist:[{title:"Pages / Visit",count:2065},{title:"New user",count:465},{title:"Last week",count:23456}]},{activitylist:[{title:"Pages / Visit",count:435},{title:"New user",count:5435643},{title:"Last week",count:45435}]},{activitylist:[{title:"Pages / Visit",count:545},{title:"New user",count:54353},{title:"Last week",count:4643}]}]},e.getUserStatusClass=function(e){switch(e){case"active":return"badge-success";case"inactive":return"badge-warning";case"pending":return"badge-primary"}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=[{icon:"i-Add-User",title:Object(u.a)("totalOrders"),subtitle:"7561"},{icon:"i-Financial",title:Object(u.a)("lastMonthOrders"),subtitle:"45300"},{icon:"i-Checkout-Basket",title:Object(u.a)("openOrders"),subtitle:"50"},{icon:"i-Money-2",title:Object(u.a)("newOrders"),subtitle:"3"}],t=[{icon:"i-Add-User",title:Object(u.a)("totalRevenue"),subtitle:"7561"},{icon:"i-Financial",title:Object(u.a)("lastMonthRevenue"),subtitle:"453"},{icon:"i-Checkout-Basket",title:Object(u.a)("collectedBalance"),subtitle:"50"},{icon:"i-Money-2",title:Object(u.a)("pending"),subtitle:"3"}];return c.a.createElement("div",null,c.a.createElement("h2",{className:"fw-bold"},Object(u.a)("dashboard")),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},e.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-lg-3 col-md-6 col-sm-6"},c.a.createElement("div",{className:"card card-icon-bg card-icon-bg-primary o-hidden mb-4"},c.a.createElement("div",{className:"card-body text-center fw-bold"},c.a.createElement("h5",{className:"fw-bold"},e.title),c.a.createElement("div",{className:"content"},c.a.createElement("p",{className:"text-muted mt-2 mb-0 text-capitalize"},e.subtitle),c.a.createElement("p",{className:"lead text-primary text-24 mb-2 text-capitalize"})))))}))),c.a.createElement("div",{className:"row"},t.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-lg-3 col-md-6 col-sm-6"},c.a.createElement("div",{className:"card card-icon-bg card-icon-bg-primary o-hidden mb-4"},c.a.createElement("div",{className:"card-body text-center fw-bold"},c.a.createElement("h5",{className:"fw-bold"},e.title),c.a.createElement("div",{className:"content"},c.a.createElement("p",{className:"text-muted mt-2 mb-0 text-capitalize"},e.subtitle),c.a.createElement("p",{className:"lead text-primary text-24 mb-2 text-capitalize"})))))}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(m.a,{title:Object(u.a)("shipmentThresholds"),className:"mb-4"},c.a.createElement(n.a,{height:"260px"})))))}}]),a}(r.Component);t.default=Object(d.b)((function(e){return{language:e}}),{})(h)},663:function(e,t,a){"use strict";var s=a(0),i=a.n(s),l=a(709),o=a.n(l);t.a=function(e){var t=e.height;e.color;return i.a.createElement(o.a,{style:{height:t},option:{legend:{borderRadius:0,orient:"horizontal",x:"right",data:["Online","Offline"]},grid:{left:"8px",right:"8px",bottom:"0",containLabel:!0},tooltip:{show:!0,backgroundColor:"rgba(0, 0, 0, .8)"},xAxis:[{type:"category",data:["Jaddah","Riyadh","Dammam","Tabuk"],axisTick:{alignWithLabel:!0},splitLine:{show:!1},axisLine:{show:!0}}],yAxis:[{type:"value",axisLabel:{formatter:"{value}"},min:0,max:30,interval:10,axisLine:{show:!1},splitLine:{show:!0,interval:"auto"}}],series:[{name:"1",data:[5,10,20,30],label:{show:!1,color:"#0168c1"},type:"bar",barGap:0,color:"#00629e",smooth:!0,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowOffsetY:-2,shadowColor:"rgba(0, 0, 0, 0.3)"}}},{name:"2",data:[4,8,12,6],label:{show:!1,color:"#639"},type:"bar",color:"#dc5726",smooth:!0,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowOffsetY:-2,shadowColor:"rgba(0, 0, 0, 0.3)"}}},{name:"3",data:[8,3,19,15],label:{show:!1,color:"#639"},type:"bar",color:"#3f51b5",smooth:!0,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowOffsetY:-2,shadowColor:"rgba(0, 0, 0, 0.3)"}}},{name:"3",data:[8,3,19,15],label:{show:!1,color:"#639"},type:"bar",color:"#2d2d2d",smooth:!0,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowOffsetY:-2,shadowColor:"rgba(0, 0, 0, 0.3)"}}}]}})}}}]);
//# sourceMappingURL=122.fddd6b01.chunk.js.map