!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};r(o,c);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],u=n.base?c[0]+n.base:c[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var f=a(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:v(d,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var c=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(c,i[n]):e.appendChild(c)}}function p(e,n,t){var r=t.css,o=t.media,c=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,n){var t,r,o;if(n.singleton){var c=m++;t=h||(h=s(n)),r=d.bind(null,t,c,!1),o=d.bind(null,t,c,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=u(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,".try{color:#ff0}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),c=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(c).concat([o]).join("\n")}var i,a,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";function r(e,n){const t=document.createElement(e);return t.className=n,t}function o(e,n,t){const r=document.createElement(e);return r.className=n,r.innerHTML=t,r}function c(e,n,t){const r=new Image;return r.src=e,r.alt=n,r.className=t,r}function i(){const e=document.createElement("header"),n=document.createElement("h1");return n.innerHTML="Welcome To The Michelin's Place",n.className="display-4",e.appendChild(n),e.appendChild(function(){const e=r("navbar","try d-flex justify-content-center");return[o("div","button px-2","Main"),o("div","button px-2","Contact"),o("div","button px-2","Menu")].forEach(n=>{e.appendChild(n)}),e}()),e.className="bg-danger py-3 text-center text-white",e}t.r(n);var a=t.p+"69c089055bf732edfae8317f6a43f78d.png",u=t.p+"b102c2d17006c7c96d2e58fec56afa99.png";function s(){const e=[],n=r("main","bg-danger text-center"),t=c(a,"single michelin star","w-25 rounded");e.push(t);const i=r("section","text-white lead");e.push(i);[o("p","","In our wonderful restaurant, you will find unique fusion tastes from different cultures."),o("p",""," Once you eat here, you will never forget this experience."),o("p",""," To order your meal, you can scan the qr code in your table, and follow the instructions.")].forEach(e=>{i.appendChild(e)});const s=c(u,"fusion dish","w-50");return e.push(s),e.forEach(e=>{n.appendChild(e)}),n}function l(){const e=document.createElement("footer"),n=document.createElement("p");return n.innerHTML="fusion-cuisine@eathere.com",e.appendChild(n),e.className="bg-danger p-2 pt-3 text-center text-white m-0",e}t(0);function f(e=0,n=!0){const t=document.getElementById("content");let r;!function(e){const n=e.childNodes;n&&[...n].forEach((e,n)=>{0!==n&&e.remove()})}(t),r=!0===n?[i,s,l]:[s,l],r.forEach(e=>{t.appendChild(e())})}f();[...document.getElementsByClassName("button")].forEach((e,n)=>{e.addEventListener("click",f.bind(void 0,n,!1))})}]);