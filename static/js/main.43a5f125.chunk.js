(this.webpackJsonpreactdataclient=this.webpackJsonpreactdataclient||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(31),o=a.n(l),i=a(25),c=a(7),m=(a(64),a(85),a(34)),s=a(35),u=a(45),d=a(44),g=(a(49),a(29)),E=(a(89),a(91),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var a=e.data(),n=a.idClient,r=a.numberPlate,l=a.email,o=a.name,i=a.dateFormatString,c=a.dateFormatDate;t.push({key:e.id,doc:e,idClient:n,numberPlate:r,name:o,email:l,dateFormatString:i,dateFormatDate:c})})),n.setState({clients:t})},n.ref=g.firestore().collection("clients").orderBy("idClient","desc"),n.unsubscribe=null,n.state={clients:[],date:new Date},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate),this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"activeDate",value:function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#fff"},r.a.createElement("td",null,e.numberPlate),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email)))}},{key:"noActiveDate",value:function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#fff"},r.a.createElement("td",null,e.numberPlate),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email)))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"DATOS DE LOS CLIENTES")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("div",{class:"row"},r.a.createElement("h4",null,r.a.createElement(i.b,{to:"/create",class:"btn btn-primary"},"Agregar Un Cliente"))),r.a.createElement("div",null,r.a.createElement("strong",null,"Fecha y hora actual ")),r.a.createElement("div",null,r.a.createElement("label",null,this.state.date.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:"false"}))),r.a.createElement("table",{class:"table table-stripe"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Placa del Vehiculo"),r.a.createElement("th",null,"Nombre del Cliente"),r.a.createElement("th",null,"Correo Electronico"))),this.state.clients.map((function(t){if(t.dateFormatDate.toDate().getFullYear("en-EN")>e.state.date.getFullYear("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getFullYear("en-EN")<e.state.date.getFullYear("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getFullYear("en-EN")==e.state.date.getFullYear("en-EN")){if(t.dateFormatDate.toDate().getMonth("en-EN")>e.state.date.getMonth("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getMonth("en-EN")<e.state.date.getMonth("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getMonth("en-EN")==e.state.date.getMonth("en-EN")){if(t.dateFormatDate.toDate().getDate("en-EN")>e.state.date.getDate("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getDate("en-EN")<e.state.date.getDate("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getDate("en-EN")==e.state.date.getDate("en-EN")){if(t.dateFormatDate.toDate().getHours("en-EN")>e.state.date.getHours("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getHours("en-EN")<e.state.date.getHours("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getHours("en-EN")==e.state.date.getHours("en-EN")){if(t.dateFormatDate.toDate().getMinutes("en-EN")>e.state.date.getMinutes("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getMinutes("en-EN")<e.state.date.getMinutes("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getMinutes("en-EN")==e.state.date.getMinutes("en-EN"))return t.dateFormatDate.toDate().getSeconds("en-EN")>=e.state.date.getSeconds("en-EN")?e.activeDate(t):e.noActiveDate(t)}}}}}))))))}}]),a}(n.Component)),h=a(36),f=a(76);g.initializeApp({apiKey:"AIzaSyDz0DxYNAc_Z6Uw7fzN2l1WGQiLg_xb_2Y",authDomain:"reactdataclient.firebaseapp.com",databaseURL:"https://reactdataclient.firebaseio.com",projectId:"reactdataclient",storageBucket:"reactdataclient.appspot.com",messagingSenderId:"322112369161",appId:"1:322112369161:web:ba33dc6a36564115a1fed8",measurementId:"G-R96QWX2L4J"}),g.firestore().settings({});var p=g,D=(a(99),a(79));Object(f.registerLocale)("es",D.a);var v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(m.a)(this,a);return(n=t.call(this,e)).onCollectionUpdate=function(e){var t=[],a=[];e.forEach((function(e){var n=e.data(),r=n.idClient,l=n.numberPlate,o=n.name,i=n.email;t.push({key:e.id,doc:e,idClient:r,numberPlate:l,name:o,email:i}),a.push({idClient:r})})),n.setState({clients:t,idClient:Math.max.apply(Math,a.map((function(e){return e.idClient})))+1})},n.onChangeOnlyLetters=function(e){var t=n.state;t[e.target.name]=e.target.value,t[e.target.name]=t[e.target.name].replace(/[^A-Za-z\xc0-\xff]/gi," "),n.setState(t)},n.onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onChangeUpperCase=function(e){var t=n.state;t[e.target.name]=e.target.value.toUpperCase(),n.setState(t)},n.onChangeLowerCase=function(e){var t=n.state;t[e.target.name]=e.target.value.toLowerCase(),n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.idClient,r=t.numberPlate,l=t.name,o=t.email,i=t.dateFormatString,c=t.dateFormatDate;n.ref.add({idClient:a,numberPlate:r,name:l,email:o,dateFormatString:i,dateFormatDate:c}).then((function(e){n.setState({idClient:"",numberPlate:"",name:"",email:"",dateFormatString:"",dateFormatDate:""}),window.location.reload(!0)})).catch((function(e){console.error("Error adding document: ",e)})),alert("Correo Registrado Exitosamente!!")},n.ref=p.firestore().collection("clients"),n.state={idClient:"",numberPlate:"",dateFormatString:(new Date).toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),name:"",email:"",dateFormatDate:new Date,startDate:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.unsubscribe=null,n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"handleChange",value:function(e){this.setState({startDate:e,dateFormatString:e.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),dateFormatDate:e})}},{key:"render",value:function(){var e=this.state,t=e.numberPlate,a=e.name,n=e.email;return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"AGREGAR NUEVO CORREO ELECTRONICO")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"select-service"},"Placa del Vehiculo"),r.a.createElement("input",{type:"text",class:"form-control",name:"numberPlate",value:t,onChange:this.onChangeUpperCase,placeholder:"Placa del Vehiculo",minlength:"6",maxlength:"6","data-toggle":"tooltip",title:"Ingresa la Placa de Tu Vehiculo",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"dateFormatString"},"Nombre del Cliente"),r.a.createElement("input",{type:"text",class:"form-control",name:"name",value:a,onChange:this.onChangeOnlyLetters,placeholder:"Nombre del Cliente",minlength:"7",maxlength:"50","data-toggle":"tooltip",title:"Ingresa tu Nombre",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"client"},"Correo Electronico"),r.a.createElement("input",{type:"text",class:"form-control",name:"email",value:n,onChange:this.onChangeLowerCase,placeholder:"Correo Electronico",minlength:"13",maxlength:"50","data-toggle":"tooltip",title:"Ingresa Tu Correo Electronico",required:!0})),r.a.createElement("button",{type:"submit",class:"btn btn-success"},"Aceptar")))))}}]),a}(n.Component);o.a.render(r.a.createElement(i.a,{basename:"/reactdataclient"},r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/",component:E}),r.a.createElement(c.a,{path:"/create",component:v}))),document.getElementById("root"))},49:function(e,t,a){},80:function(e,t,a){e.exports=a(161)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.43a5f125.chunk.js.map