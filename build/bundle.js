!function(t){function o(l){if(e[l])return e[l].exports;var r=e[l]={i:l,l:!1,exports:{}};return t[l].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var e={};o.m=t,o.c=e,o.i=function(t){return t},o.d=function(t,e,l){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:l})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=3)}([function(t,o,e){"use strict";e(2).polyfill();var l=document.querySelector(".landing"),r=document.getElementById("main-content"),n=document.querySelector(".title__chevron-down"),c=document.getElementById("top");n.addEventListener("click",function(){r.scrollIntoView({behavior:"smooth",block:"end"})}),c.addEventListener("click",function(){l.scrollIntoView({behavior:"smooth",block:"start"})})},function(t,o){},function(t,o,e){"use strict";var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,r,n){function c(){function t(t,o){this.scrollLeft=t,this.scrollTop=o}function o(t){return.5*(1-Math.cos(Math.PI*t))}function c(t){if("object"!==(void 0===t?"undefined":l(t))||null===t||t.behavior===n||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===(void 0===t?"undefined":l(t))&&"smooth"===t.behavior)return!1;throw new TypeError("behavior not valid")}function i(t){var o,l,n;do{t=t.parentNode,o=t===r.body,l=t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth,n="visible"===e.getComputedStyle(t,null).overflow}while(!o&&(!l||n));return o=l=n=null,t}function s(t){t.frame=e.requestAnimationFrame(s.bind(e,t));var l,r,n,c=p(),i=(c-t.startTime)/u;if(i=i>1?1:i,l=o(i),r=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,r,n),r===t.x&&n===t.y)return void e.cancelAnimationFrame(t.frame)}function f(o,l,n){var c,i,f,a,u=p();o===r.body?(c=e,i=e.scrollX||e.pageXOffset,f=e.scrollY||e.pageYOffset,a=d.scroll):(c=o,i=o.scrollLeft,f=o.scrollTop,a=t),s({scrollable:c,method:a,startTime:u,startX:i,startY:f,x:l,y:n,frame:void 0})}if(!("scrollBehavior"in r.documentElement.style)){var a=e.HTMLElement||e.Element,u=468,d={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,scrollIntoView:a.prototype.scrollIntoView},p=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now;e.scroll=e.scrollTo=function(){if(c(arguments[0]))return void d.scroll.call(e,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);f.call(e,r.body,~~arguments[0].left,~~arguments[0].top)},e.scrollBy=function(){if(c(arguments[0]))return void d.scrollBy.call(e,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);f.call(e,r.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset))},a.prototype.scrollIntoView=function(){if(c(arguments[0]))return void d.scrollIntoView.call(this,arguments[0]||!0);var t=i(this),o=t.getBoundingClientRect(),l=this.getBoundingClientRect();t!==r.body?(f.call(this,t,t.scrollLeft+l.left-o.left,t.scrollTop+l.top-o.top),e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}}}"object"===l(o)?t.exports={polyfill:c}:c()}(window,document)},function(t,o,e){"use strict";e(1),e(0)}]);