"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[246],{4265:function(e,s,t){t.d(s,{Z:function(){return l}});var i="MealItem_card__sVSFq",n="MealItem_image__p0mvp",c="MealItem_title__hqI25",a=t(1087),r=t(184),l=function(e){return(0,r.jsx)(a.rU,{to:"/meal-item/".concat(e.id),children:(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("div",{className:n,children:(0,r.jsx)("img",{src:e.image})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)("p",{children:e.title})})]})})}},9246:function(e,s,t){t.r(s),t.d(s,{default:function(){return N}});var i=t(1087),n="ItemName_boxTitle__XZBg+",c="ItemName_title__S1rE+",a="ItemName_active__J5RUN",r=t(184),l=function(){return(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{className:function(e){return e.isActive?a:""},to:"/meal-items/main course",children:"Main Course"})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{className:function(e){return e.isActive?a:""},to:"/meal-items/side dish",children:"Side Dish"})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{to:"/meal-items/appetizer",className:function(e){return e.isActive?a:""},children:"Appetizer"})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{to:"/meal-items/salad",className:function(e){return e.isActive?a:""},children:"Salad"})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{to:"/meal-items/soup",className:function(e){return e.isActive?a:""},children:"Soup"})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{to:"/meal-items/sauce",className:function(e){return e.isActive?a:""},children:"Sauce"})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{to:"/meal-items/drink",className:function(e){return e.isActive?a:""},children:"Drink"})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)(i.OL,{to:"/meal-items/dessert",className:function(e){return e.isActive?a:""},children:"Dessert"})})]})},m=t(4165),u=t(5861),d=t(885),o=t(2791),x=t(7689),h=t(4265),p="FoodItem_box__bCN0N",f=function(e){var s=(0,o.useState)([]),t=(0,d.Z)(s,2),i=t[0],n=t[1],c=(0,x.UO)(),a=function(){var s=(0,u.Z)((0,m.Z)().mark((function s(){var t,i;return(0,m.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=21cc279360ce44d78b690e9c21a48844&type=".concat(c.type?c.type:"main course","&number=20"));case 2:return t=s.sent,s.next=5,t.json();case 5:i=s.sent,localStorage.setItem(e.type,JSON.stringify(i.results)),n(i.results);case 8:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return(0,o.useEffect)((function(){a()}),[c.type]),(0,r.jsx)("div",{className:p,children:i.map((function(e){return(0,r.jsx)(h.Z,{id:e.id,image:e.image,title:e.title},e.id)}))})},j=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(l,{}),(0,r.jsx)(x.Z5,{children:(0,r.jsx)(x.AW,{path:":type",element:(0,r.jsx)(f,{})})})]})},v=t(5245),N=function(){return(0,r.jsx)(v.E.div,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.7},children:(0,r.jsx)(j,{})})}}}]);
//# sourceMappingURL=246.0178a1df.chunk.js.map