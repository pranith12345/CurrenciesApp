(this.webpackJsonppostsapp=this.webpackJsonppostsapp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),s=n.n(c),o=(n(23),n(4)),l=n(5),i=n(7),u=n(6),m=n(8),p=(n(24),n(25),n(2)),d={INC_COUNTER:"increment",DEC_COUNTER:"decrement",ADD_USERS:"AddUsers",SELECTED_USER:"SelectedUser"},E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){var e=this;return console.log(this.props.users),a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Users"),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"card"},a.a.createElement("ul",{className:"list-group"},this.props.users.map((function(t,n){return a.a.createElement("a",{onClick:function(){return e.props.SetSelectedItemID(t.id)},key:n,className:"list-group-item list-group-item-action",value:t.id},t.name)}))))))}}]),t}(r.Component),f=Object(p.b)((function(e){return{users:e.users}}),(function(e){return{SetSelectedItemID:function(t){0!==t&&fetch("https://jsonplaceholder.typicode.com/users/"+t).then((function(e){return e.json()})).then((function(t){e({type:d.SELECTED_USER,SelectedUser:t})}))},getUsers:function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:d.ADD_USERS,users:t})}))}}}))(E),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"form"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{for:"name"},"Name"),a.a.createElement("input",{type:"text",disabled:!0,id:"name",className:"form-control",value:this.props.SelectedUser.Name}))),a.a.createElement("div",{className:"col-sm-6"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{for:"email"},"Email"),a.a.createElement("input",{type:"email",id:"email",className:"form-control",value:this.props.SelectedUser.Email})))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-6"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{for:"Address"},"Address"),a.a.createElement("input",{type:"text",id:"Address",className:"form-control",value:this.props.SelectedUser.Address}))),a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{for:"City"},"City"),a.a.createElement("input",{type:"text",id:"City",className:"form-control",value:this.props.SelectedUser.City}))))))}}]),t}(r.Component),v=Object(p.b)((function(e){return{SelectedUser:e.SelectedUser}}),(function(e){return{GetUser:function(e){}}}))(b),h=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-3"},a.a.createElement(f,null)),a.a.createElement("div",{className:"col-6"},a.a.createElement(v,null))))}}]),t}(r.Component),O=Object(p.b)((function(e){return{Counter:e.Counter}}),(function(e){return{onIncrement:function(){return e({type:d.INC_COUNTER})},onDecrement:function(){return e({type:d.DEC_COUNTER})}}}))(h);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(14),N=n(17);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e,t){switch(t.type){case d.INC_COUNTER:return(n=C({},e)).Counter=n.Counter+1,n;case d.DEC_COUNTER:return(n=C({},e)).Counter=n.Counter-1,n;case d.ADD_USERS:var n;return n=C({},e,{users:[].concat(Object(y.a)(e.users),Object(y.a)(t.users))});case d.SELECTED_USER:return n=C({},e,{SelectedUser:t.SelectedUser});default:return e}},U=n(10),g=Object(U.b)(S,{Counter:1,users:[],SelectedUser:{Name:"",Email:"",Address:"",City:""}});s.a.render(a.a.createElement(p.a,{store:g},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6f517ef7.chunk.js.map