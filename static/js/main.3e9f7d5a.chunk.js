(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var r=e(5),c=e.n(r),o=e(2),a=e(6),s=e(1),u=e.n(s),i=e(3);e(12),e(13);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){var t=Object(o.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=e(0),b=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},j=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],c=function(){var t=Object(o.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(o.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"has-text-centered",children:[Object(d.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button",className:"button is-responsive",onClick:function(){return c()},children:"All Goods"}),Object(d.jsx)("button",{type:"button",className:"button is-responsive",onClick:function(){return s()},children:"First 5 Goods"}),Object(d.jsx)("button",{type:"button",className:"button is-danger is-outlined",onClick:function(){return j()},children:"Red Coloured Goods"}),Object(d.jsx)("div",{children:Object(d.jsx)(b,{goods:e})})]})};c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3e9f7d5a.chunk.js.map