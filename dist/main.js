!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],d=n[u]||0,s="".concat(u," ").concat(d);n[u]=d+1;var l=a(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(f)):c.push({identifier:s,updater:v(f,t),references:1}),o.push(s)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function v(e,t){var n,o,r;if(t.singleton){var i=m++;n=h||(h=d(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=d(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=u(e,t),d=0;d<n.length;d++){var s=a(n[d]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".try{color:#ff0}.button{cursor:pointer}body{min-height:100vh;background-color:#dc3545}body .menu img{width:40vw}@media(max-width: 768px){body .menu img{width:80vw}}@media(min-width: 1250px){body .menu img{width:30vw}}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";function o(e,t){const n=document.createElement(e);return n.className=t,n}function r(e,t,n){const o=document.createElement(e);return o.className=t,o.innerHTML=n,o}function i(e,t,n){const o=new Image;return o.src=e,o.alt=t,o.className=n,o}n.r(t);function c(){const e=document.createElement("header"),t=document.createElement("h1");return t.innerHTML="Welcome To The Michelin's Place",t.className="display-4",e.appendChild(t),e.appendChild(function(){const e=o("div","try d-flex justify-content-center");return[r("div","button px-2","Main"),r("div","button px-2","Menu"),r("div","button px-2","Contact")].forEach(t=>{e.appendChild(t)}),e}()),e.className="py-3 text-center text-white",e}var a=n.p+"69c089055bf732edfae8317f6a43f78d.png",u=n.p+"b102c2d17006c7c96d2e58fec56afa99.png";function d(){const e=[],t=o("main","text-center"),n=i(a,"single michelin star","w-25 rounded");e.push(n);const c=o("section","text-white lead");e.push(c);[r("p","","In our wonderful restaurant, you will find unique fusion tastes from different cultures."),r("p",""," Once you eat here, you will never forget this experience."),r("p",""," To order your meal, you can scan the qr code in your table, and follow the instructions.")].forEach(e=>{c.appendChild(e)});const d=i(u,"fusion dish","w-50");return e.push(d),e.forEach(e=>{t.appendChild(e)}),t}function s(){const e=document.createElement("footer"),t=document.createElement("p");return t.innerHTML="fusion-cuisine@eathere.com",e.appendChild(t),e.className="p-2 pt-3 text-center text-white m-0",e}var l=n.p+"45bbda6afb430cb57d48274535d8d939.png",f=n.p+"fdced79281544a3e938e5fe14d410101.png",p=n.p+"18360c59dca36ea19857721748b9ccf6.png",h=n.p+"f9887902122154f841ddb25ad2082019.png";function m(){const e=o("div","container-fluid menu");let t;return[l,f,p,h].forEach((n,c)=>{c%2==0&&(t=o("div","row mb-4 px-5 mx-3"));const a=o("div","col-md-6 text-center"),u=i(n,"dish "+c,""),d=r("div","text-white lead pb-3",`Option ${c+1}: Marinated with sauce.`);a.appendChild(d),a.appendChild(u),t.appendChild(a),c%2==1&&e.appendChild(t)}),e}const v={"Manager:":"Degustator Definitive","E-mail:":"fusion-cuisine@eathere.com","Address:":"Neighborhood","Telephone:":"0-555-55-666-321"};function b(){const e=o("div","table-wrapper w-50 mx-auto my-5"),t=o("table","table text-white"),n=o("tbody","");return Object.keys(v).forEach(e=>{const t=o("tr",""),i=r("th","",e);i.scope="row";const c=r("td","",v[e]);t.appendChild(i),t.appendChild(c),n.appendChild(t)}),t.appendChild(n),e.appendChild(t),e}n(0);document.getElementById("content").appendChild(c());function y(e=2){!function(){const e=document.getElementById("content").childNodes;e&&[...e].forEach((e,t)=>{0!==t&&e.remove()})}();const t=function(e){let t;switch(e){case 1:t=[m];break;case 2:t=[b];break;default:t=[d]}return t.push(s),t}(e),n=document.getElementById("content");t.forEach(e=>{n.appendChild(e())}),function(e){[0,1,2].forEach(t=>{let n;t===e?(n=document.getElementsByClassName("button")[t],n.className="button px-2 text-white"):(n=document.getElementsByClassName("button")[t],n.className="button px-2")})}(e)}y();[...document.getElementsByClassName("button")].forEach((e,t)=>{e.addEventListener("click",y.bind(void 0,t))})}]);