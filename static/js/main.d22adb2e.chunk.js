(this.webpackJsonpnelp=this.webpackJsonpnelp||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),i=n.n(a),s=(n(25),n(20)),j=n(10),o=(n(26),n(2)),u=n(0);var b=function(e){var t=e.review,n=Object(o.g)();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[t.content.slice(0,50),"..."]}),Object(u.jsx)("button",{onClick:function(){n.push("/reviews/".concat(t.id))},children:"Go to this review"})]})};var h=function(e){var t=e.reviews.map((function(e){return Object(u.jsx)(b,{review:e},e.id)}));return Object(u.jsx)("div",{id:"",children:t})};var d=function(e){var t=e.reviews,n=Object(o.h)(),c=Object(o.g)(),r=t.find((function(e){return e.id===parseInt(n.id)}));return r?Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:r.restaurant}),Object(u.jsxs)("p",{children:[r.rating," stars"]}),Object(u.jsx)("p",{children:r.content}),Object(u.jsx)("button",{onClick:function(){return c.push("/reviews/".concat(r.id,"/edit"))},children:"Edit"})]}):t.length?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsx)("h2",{children:"Loading Reviews..."})},O=n(4);var l=function(e){var t=e.addReview,n=Object(c.useState)({restaurant:"",content:"",rating:0}),r=Object(j.a)(n,2),a=r[0],i=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return i(Object(O.a)(Object(O.a)({},a),{},{restaurant:e.target.value}))},value:a.restaurant,placeholder:"Restaurant Name"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{onChange:function(e){return i(Object(O.a)(Object(O.a)({},a),{},{content:e.target.value}))},value:a.content,placeholder:"Write your review here!"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",onChange:function(e){return i(Object(O.a)(Object(O.a)({},a),{},{rating:e.target.value}))},value:a.rating,placeholder:"Rating",max:"5",min:"0",step:"0.5"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Add A New Review"})]})};var p=function(e){var t=e.reviews,n=e.editReview,r=Object(o.h)();console.log(r);var a=t.find((function(e){return e.id===parseInt(r.id)})),i=Object(c.useState)({restaurant:a.restaurant,content:a.content,rating:a.rating}),s=Object(j.a)(i,2),b=s[0],h=s[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(Object(O.a)(Object(O.a)({},b),{},{id:a.id}))},children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return h(Object(O.a)(Object(O.a)({},b),{},{restaurant:e.target.value}))},value:b.restaurant,placeholder:"Restaurant Name"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{onChange:function(e){return h(Object(O.a)(Object(O.a)({},b),{},{content:e.target.value}))},value:b.content,placeholder:"Write your review here!"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",onChange:function(e){return h(Object(O.a)(Object(O.a)({},b),{},{rating:e.target.value}))},value:b.rating,placeholder:"Rating",max:"5",min:"0",step:"0.5"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Edit This Review!"})]})},v=n(8);var x=function(e){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(v.b,{to:"/",children:"All Reviews"}),Object(u.jsx)("br",{}),Object(u.jsx)(v.b,{to:"/reviews/new",children:"Create A New Review"})]})},f={"Content-Type":"application/json",Accepts:"application/json"};var w=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(o.g)();return Object(c.useEffect)((function(){fetch("".concat("https://phase-2-project-backend.herokuapp.com/reviews")).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Nelp"}),Object(u.jsx)("h3",{children:"We keep the mystery alive?"}),Object(u.jsx)(x,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",children:Object(u.jsx)(h,{reviews:n})}),Object(u.jsx)(o.b,{exact:!0,path:"/reviews/new",children:Object(u.jsx)(l,{addReview:function(e){fetch("".concat("https://phase-2-project-backend.herokuapp.com/reviews"),{method:"POST",headers:f,body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){r([].concat(Object(s.a)(n),[e])),a.push("/")}))}})}),Object(u.jsx)(o.b,{exact:!0,path:"/reviews/:id",children:Object(u.jsx)(d,{reviews:n})}),Object(u.jsx)(o.b,{exact:!0,path:"/reviews/:id/edit",children:Object(u.jsx)(p,{reviews:n,editReview:function(e){console.log(e),fetch("".concat("https://phase-2-project-backend.herokuapp.com/reviews","/").concat(e.id),{method:"PATCH",headers:f,body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e),r(n.map((function(t){return e.id===t.id?e:t}))),a.push("/")}))}})})]})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v.a,{children:Object(u.jsx)(w,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d22adb2e.chunk.js.map