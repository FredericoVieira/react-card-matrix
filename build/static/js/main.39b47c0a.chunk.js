(this["webpackJsonpreact-card-matrix"]=this["webpackJsonpreact-card-matrix"]||[]).push([[0],{18:function(e,i,t){e.exports=t(41)},38:function(e,i,t){},39:function(e,i,t){},40:function(e,i,t){},41:function(e,i,t){"use strict";t.r(i);var a=t(0),n=t.n(a),r=t(6),c=t.n(r),l=t(3),d=t(2),p=t(12),s=[{id:1,isFlipped:!0},{id:2,isFlipped:!0},{id:3,isFlipped:!0},{id:4,isFlipped:!0},{id:5,isFlipped:!0},{id:6,isFlipped:!0},{id:7,isFlipped:!0},{id:8,isFlipped:!0},{id:9,isFlipped:!0},{id:10,isFlipped:!0},{id:11,isFlipped:!0},{id:12,isFlipped:!0}];var u=Object(d.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case"FLIP_CARD":var t=e.map((function(e){return e.id===i.id?Object(p.a)({},e,{isFlipped:!e.isFlipped}):Object(p.a)({},e,{isFlipped:!0})}));return t;default:return e}}});var o=t(7),m=(t(38),t(17)),F=t.n(m);t(39);var f,v=Object(l.b)(null,(function(e){return{flipCardClicked:function(i){return e(function(e){return{type:"FLIP_CARD",id:e}}(i))}}}))((function(e){var i=e.id,t=e.isFlipped,a=e.flipCardClicked,r=function(e){e.preventDefault(),a(i)};return n.a.createElement(F.a,{isFlipped:t,className:"card-wrapper"},n.a.createElement("div",{className:"card card-front",onClick:r},"FRONT"),n.a.createElement("div",{className:"card card-back",onClick:r},"BACK"))})),E=Object(l.b)((function(e){return{cards:e.cards}}),null)((function(e){var i=e.cards;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"title"},"React Card Matrix"),n.a.createElement(o.Container,null,n.a.createElement(o.Row,{className:"row"},i.map((function(e){return n.a.createElement(o.Col,{key:e.id,sm:3,className:"col"},n.a.createElement(v,{id:e.id,isFlipped:e.isFlipped}))})))))})),b=Object(d.c)(u,f),C=function(){return n.a.createElement(l.a,{store:b},n.a.createElement(E,null))};t(40);c.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.39b47c0a.chunk.js.map