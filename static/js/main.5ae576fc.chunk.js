(this["webpackJsonprecipe-finder"]=this["webpackJsonprecipe-finder"]||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),s=c(14),i=c.n(s),u=(c(22),c(5)),j=c.n(u),o=c(15),b=c(3),d=c(16),l=c.n(d),p=function(e){return e.ingredients.map((function(e,t){return Object(n.jsx)("span",{className:"ingredient-list",children:Object(n.jsx)("i",{className:"ingredient-text",children:e.text})},t)}))},f=function(e){var t,c=e.recipe,r=Object(a.useState)(!1),s=Object(b.a)(r,2),i=s[0],u=s[1],j=c.recipe,o=j.label,d=j.image,l=j.calories,f=j.ingredients;return Object(n.jsxs)("div",{className:"recipe",children:[Object(n.jsx)("img",{src:d,alt:o}),Object(n.jsx)("h3",{children:o}),Object(n.jsxs)("p",{children:["Calories: ",(t=l,Number(t.toFixed(2)).toLocaleString()+"")," kcal"]}),Object(n.jsx)("button",{onClick:function(){return u(!i)},children:"Ingredients"}),i&&Object(n.jsx)(p,{ingredients:f})]})},O=(c(42),function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),i=Object(b.a)(s,2),u=i[0],d=i[1],p=Object(a.useState)("beef"),O=Object(b.a)(p,2),h=O[0],m=O[1];Object(a.useEffect)((function(){x()}),[h]);var x=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("623376c1","&app_key=").concat("b4bfdade63ae8a553f8939ec4663eb52"));case 2:t=e.sent,r(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),m(u),d("")},children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:u,onChange:function(e){d(e.target.value)}}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"recipes",children:c.map((function(e,t){return Object(n.jsx)(f,{recipe:e},t)}))})]})});i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.5ae576fc.chunk.js.map