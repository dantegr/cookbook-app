(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={recipe:"recipe_recipe__2Levf",image:"recipe_image__2CNF3"}},function(e,t,a){e.exports={header:"header_header__mCktf",header__title:"header_header__title__1ACaU",header__subtitle:"header_header__subtitle__14QBH"}},,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=(a(14),a(4)),o=a.n(l),s=a(7),u=a(3),m=a(1),p=a.n(m),d=function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients,i=Math.round(a);return r.a.createElement("div",{className:p.a.recipe},r.a.createElement("h1",null,t),r.a.createElement("img",{className:p.a.image,src:n,alt:""}),r.a.createElement("div",{className:p.a.content},r.a.createElement("ol",null,c.map(function(e){return r.a.createElement("li",null,e.text)})),r.a.createElement("p",null,"Calories:",i)))},h=a(2),f=a.n(h),_=function(e){return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:f.a.header__title},e.title),e.subtitle&&r.a.createElement("h2",{className:f.a.header__subtitle},e.subtitle)))};_.defaultProps={title:"Cook Book App"};var b=_,v=(a(16),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),m=l[0],p=l[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),_=f[0],v=f[1];Object(n.useEffect)(function(){E()},[_]);var E=function(){var e=Object(s.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(_,"&app_id=").concat("4223c089","&app_key=").concat("be0ba7cbcc7558fef43714bc302e8230"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(b,{subtitle:"Type an ingredient to find a recipe with it."}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(m),p("")},className:"search-form"},r.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value),console.log(m)}}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search")),r.a.createElement("div",{className:"recipes"},a.map(function(e){return r.a.createElement(d,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.41efbe4a.chunk.js.map