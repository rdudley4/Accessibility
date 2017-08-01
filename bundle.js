!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){/*!
 * verge 1.10.2+201705300050
 * http://npm.im/verge
 * MIT Ryan Van Etten
 */
!function(t,n,o){void 0!==e&&e.exports?e.exports=o():t.verge=o()}(this,0,function(){function e(){return{width:u(),height:m()}}function t(e,t){var n={};return t=+t||0,n.width=(n.right=e.right+t)-(n.left=e.left-t),n.height=(n.bottom=e.bottom+t)-(n.top=e.top-t),n}function n(e,n){return!(!(e=e&&!e.nodeType?e[0]:e)||1!==e.nodeType)&&t(e.getBoundingClientRect(),n)}function o(t){t=null==t?e():1===t.nodeType?n(t):t;var o=t.height,r=t.width;return o="function"==typeof o?o.call(t):o,(r="function"==typeof r?r.call(t):r)/o}var r={},i="undefined"!=typeof window&&window,l="undefined"!=typeof document&&document,a=l&&l.documentElement,s=i.matchMedia||i.msMatchMedia,c=s?function(e){return!!s.call(i,e).matches}:function(){return!1},u=r.viewportW=function(){var e=a.clientWidth,t=i.innerWidth;return e<t?t:e},m=r.viewportH=function(){var e=a.clientHeight,t=i.innerHeight;return e<t?t:e};return r.mq=c,r.matchMedia=s?function(){return s.apply(i,arguments)}:function(){return{}},r.viewport=e,r.scrollX=function(){return i.pageXOffset||a.scrollLeft},r.scrollY=function(){return i.pageYOffset||a.scrollTop},r.rectangle=n,r.aspect=o,r.inX=function(e,t){var o=n(e,t);return!!o&&o.right>=0&&o.left<=u()},r.inY=function(e,t){var o=n(e,t);return!!o&&o.bottom>=0&&o.top<=m()},r.inViewport=function(e,t){var o=n(e,t);return!!o&&o.bottom>=0&&o.right>=0&&o.top<=m()&&o.left<=u()},r})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var o=n(7),r=n(3),i=n(5),l=n(8);n(13).polyfill();var a=n(0),s=t.UI={elms:{landing:document.querySelector(".landing")||document.querySelector(".landing--static"),landingVideo:document.querySelector(".landing__video"),mainContent:document.getElementById("main-content"),chevronDown:document.querySelector(".title__chevron-down"),toTop:document.getElementById("top"),table:document.querySelector(".table"),liveShow:document.getElementById("text__live-show"),tourText:document.getElementById("text__tour"),members:[document.querySelector(".drums"),document.querySelector(".bass"),document.querySelector(".guitar"),document.querySelector(".vocals")],infoBox:{base:document.querySelector(".info-box"),name:document.getElementById("member-name"),icon:document.getElementById("info-box__icon"),age:document.getElementById("stat1"),dob:document.getElementById("stat2"),town:document.getElementById("stat3"),instrument:document.getElementById("stat4")},navBar:document.querySelector(".navbar"),navLinks:document.querySelectorAll(".nav__item"),sectionFormats:document.querySelector(".album__formats"),sectionAbout:document.querySelector(".about")}};i.loremGenerator.genData(i.loremGenerator.genOptions.createString(),[s.elms.liveShow,s.elms.tourText]),l.Tools.createMembers({amount:4,eventElms:s.elms.members,infoBox:s.elms.infoBox}),window.addEventListener("scroll",function(){o.Nav.transition({navBar:s.elms.navBar,navLinks:s.elms.navLinks,relativeTo:s.elms.landing}),a.inY(s.elms.sectionFormats)&&r.Anim.play({animation:"slide--3",section:s.elms.sectionFormats,childSelector:".content-box--animated"}),a.inY(s.elms.sectionAbout)&&r.Anim.play({animation:"slide--3",section:s.elms.sectionAbout,childSelector:".content-box--animated"})}),s.elms.chevronDown&&s.elms.chevronDown.addEventListener("click",function(){s.elms.mainContent.scrollIntoView({behavior:"smooth",block:"start"})}),s.elms.toTop&&s.elms.toTop.addEventListener("click",function(){s.elms.landing.scrollIntoView({behavior:"smooth",block:"start"})})},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.Anim={notTriggered:function(e,t){return!e.classList.contains(t)},play:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.animation,n=e.section,r=e.childSelector,i=n.querySelectorAll(r);if(o.notTriggered(i[0],t)){var l=!0,a=!1,s=void 0;try{for(var c,u=i[Symbol.iterator]();!(l=(c=u.next()).done);l=!0){c.value.classList.add(t)}}catch(e){a=!0,s=e}finally{try{!l&&u.return&&u.return()}finally{if(a)throw s}}}}}},function(e,t,n){"use strict";n(2),n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.loremGenerator={genData:function(e,t){fetch(e).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){var n=!0,o=!1,r=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){i.value.innerHTML=e.text_out+"<p>Lorem Generated @ "+e.time}}catch(e){o=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw r}}})},genOptions:{paragrahs:5,minWords:5,maxWords:20,createString:function(){return"https://www.randomtext.me/api/lorem/p-"+this.paragrahs+"/"+this.minWords+"-"+this.maxWords}}}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,n,r,i,l,a,s){o(this,e),this.name=t,this.id=n,this.icon=r,this.age=i,this.dob=l,this.town=a,this.instrument=s};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.Nav={swapLinkStyles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.elm,n=e.testClass,o=e.newClass;t.className===n&&(t.className=o)},transition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.navBar,n=e.navLinks,r=e.relativeTo,i=Math.abs(r.getBoundingClientRect().top)>r.clientHeight-50,l=!0,a=!1,s=void 0;try{for(var c,u=n[Symbol.iterator]();!(l=(c=u.next()).done);l=!0){var m=c.value;i?(o.swapLinkStyles({elm:m,testClass:"nav__item",newClass:"nav__item--alt"}),t.style.backgroundColor="#fff",t.style.borderColor="#f5f5f5"):(o.swapLinkStyles({elm:m,testClass:"nav__item--alt",newClass:"nav__item"}),t.removeAttribute("style"))}}catch(e){a=!0,s=e}finally{try{!l&&u.return&&u.return()}finally{if(a)throw s}}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Tools=void 0;var r=n(6),i=o(r),l=n(9),a=o(l),s=n(10),c=o(s),u=n(11),m=o(u),d=n(12),f=o(d),v=n(0),h=["Bob","Bill","David","Joel","Steven","Carl","Alfredo","Jay","Kevin","John","Michael","William","Blake","Israel","Daniel","Joe","Morris","Connie","Kyle","Nancy","Peggy","Alice"],p=["Wilson","Lopes","Peeples","Potter","Franklin","Roland","Byler","Young","Robbins","Morton","Miller","Dawson","Meserve","Garcia","Castillo","Kellogg","Davis","Mathewson","Clark"],y=["Petunia Way","Farland Street","Grant Street","Badger Pond Lane","Grove Avenue","Fleming Street","Linden Avenue","Abia Martin Drive","Augusta Park","Archwood Avenue","Daylene Drive","Traders Alley","Oakdale Avenue","Masonic Hill Road","Henery Street","Walnut Avenue","Rogers Street","Renwick Drive"];t.Tools={registerMemberEvents:function(e,t,n){e.innerHTML=t.name+' <span class="list__tag">'+t.instrument+"</span>",e.addEventListener("mouseover",function(){v.mq("(min-width: 840px)")&&(n.base.style.opacity=1),n.icon.src=t.icon,n.name.innerHTML=t.name,n.age.innerHTML=t.age+" Years Old",n.dob.innerHTML=t.dob,n.town.innerHTML=t.town,n.instrument.innerHTML=t.instrument}),e.addEventListener("mouseleave",function(){n.base.removeAttribute("style")})},randomNumber:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},generateMember:function(e){for(var t=[],n=0;n<e;n++){var o=this.randomNumber(1,1e3),r=h[this.randomNumber(0,h.length-1)],l=p[this.randomNumber(0,p.length-1)],s=this.randomNumber(20,50),u=(new Date).getFullYear()-s,d=this.randomNumber(1,9999)+" "+y[this.randomNumber(0,y.length-1)],v=["Drums","Guitar","Bass","Vocals"],g=void 0;switch(v[n]){case"Drums":g=a.default;break;case"Guitar":g=c.default;break;case"Bass":g=m.default;break;case"Vocals":g=f.default}var b=new i.default(r+" "+l,o,g,s,u,d,v[n]);t.push(b)}return t},createMembers:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.amount,n=e.eventElms,o=e.infoBox,r=this.generateMember(t),i=0;i<r.length;i++)this.registerMemberEvents(n[i],r[i],o),console.log(n[i],r[i])}}},function(e,t,n){e.exports=n.p+"img/icons/img-1MZ-sB6.svg"},function(e,t,n){e.exports=n.p+"img/icons/img-1mRyyzD.svg"},function(e,t,n){e.exports=n.p+"img/icons/img-scL5PbJ.svg"},function(e,t,n){e.exports=n.p+"img/icons/img-2IfSJeg.svg"},function(e,t,n){!function(t,n,o){"use strict";function r(){function e(e,t){this.scrollLeft=e,this.scrollTop=t}function r(e){return.5*(1-Math.cos(Math.PI*e))}function i(e){if("object"!=typeof e||null===e||e.behavior===o||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior not valid")}function l(e){var o,r,i;do{e=e.parentNode,o=e===n.body,r=e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth,i="visible"===t.getComputedStyle(e,null).overflow}while(!o&&(!r||i));return o=r=i=null,e}function a(e){var n,o,i,l=d(),s=(l-e.startTime)/u;s=s>1?1:s,n=r(s),o=e.startX+(e.x-e.startX)*n,i=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,o,i),o===e.x&&i===e.y||t.requestAnimationFrame(a.bind(t,e))}function s(o,r,i){var l,s,c,u,f=d();o===n.body?(l=t,s=t.scrollX||t.pageXOffset,c=t.scrollY||t.pageYOffset,u=m.scroll):(l=o,s=o.scrollLeft,c=o.scrollTop,u=e),a({scrollable:l,method:u,startTime:f,startX:s,startY:c,x:r,y:i})}if(!("scrollBehavior"in n.documentElement.style)){var c=t.HTMLElement||t.Element,u=468,m={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elScroll:c.prototype.scroll||e,scrollIntoView:c.prototype.scrollIntoView},d=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;t.scroll=t.scrollTo=function(){if(i(arguments[0]))return void m.scroll.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);s.call(t,n.body,~~arguments[0].left,~~arguments[0].top)},t.scrollBy=function(){if(i(arguments[0]))return void m.scrollBy.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);s.call(t,n.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))},c.prototype.scroll=c.prototype.scrollTo=function(){if(i(arguments[0]))return void m.elScroll.call(this,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);s.call(this,this,arguments[0].left,arguments[0].top)},c.prototype.scrollBy=function(){var e=arguments[0];"object"==typeof e?this.scroll({left:e.left+this.scrollLeft,top:e.top+this.scrollTop,behavior:e.behavior}):this.scroll(this.scrollLeft+e,this.scrollTop+arguments[1])},c.prototype.scrollIntoView=function(){if(i(arguments[0]))return void m.scrollIntoView.call(this,arguments[0]||!0);var e=l(this),o=e.getBoundingClientRect(),r=this.getBoundingClientRect();e!==n.body?(s.call(this,e,e.scrollLeft+r.left-o.left,e.scrollTop+r.top-o.top),t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}}}e.exports={polyfill:r}}(window,document)}]);