(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>v});var i=e(81),t=e.n(i),a=e(645),s=e.n(a),o=e(667),c=e.n(o),d=new URL(e(302),e.b),l=new URL(e(828),e.b),u=s()(t());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap);"]);var p=c()(d),m=c()(l);u.push([n.id,"body,html {\r\n  margin: 0;\r\n  height: 100%;  \r\n}\r\n /* 00 1994 */\r\nbody{\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\n.header {\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 3fr ;\r\n  row-gap: 10px; \r\n  background-color: #000000a8;\r\n\r\n  color: white;\r\n  \r\n  height: 18vh;\r\n}\r\n\r\n.cont {\r\n  display: flex;\r\n flex-direction: column;\r\n  text-align: center;\r\n  margin: auto;\r\nwidth: 500px;\r\n \r\n}\r\n\r\n.name {\r\n  font-size: 60px;\r\nfont-family: 'Courier New', Courier, monospace;\r\n}\r\n.slogan {\r\n  font-family: monospace;\r\n  font-size: large;\r\n  text-align: right;\r\n  position: relative;\r\n  bottom: 10px;\r\n  \r\n}\r\n\r\n/* navbar */ \r\n\r\n.nav{\r\n  grid-row: 2/3;\r\n  justify-self: center;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 500px;\r\n    height: 22px;\r\n   border-radius: 10px 10px 0px 0px; \r\n   \r\n   \r\n\r\n}\r\n.nav div{\r\n\r\n  border-radius: 10px 10px 0px 0px; \r\n  \r\n  border:1px solid white;\r\n  border-bottom: none;\r\n  width: 100px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  cursor: pointer;\r\n text-align: center;\r\n}\r\n.current{\r\n  background-color: rgb(225, 221, 221);\r\n  color: black;\r\n\r\n}\r\n\r\n\r\n\r\n/* main */\r\n\r\n.main{\r\n  \r\n  flex: 1 1 0;\r\n height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-image: url("+p+");\r\n  background-size: auto;\r\n  \r\n}\r\n\r\n .main .content{\r\n  font-family: serif;\r\n  display: flex;\r\n  flex-direction: column;\r\nwidth: 65%;\r\nheight: 500px;\r\n\r\nborder:10px ridge rgb(148, 148, 148);\r\nbackground-color: rgba(255, 255, 255, 0.694);\r\npadding: 0px 10px;\r\noverflow: hidden;\r\n\r\n}\r\n\r\n.main .content.home{\r\n  display: initial;\r\n  \r\n}\r\n\r\n\r\n.content h1{\r\n\r\n  font-family: 'Barlow', sans-serif;\r\n  text-align: center;\r\n  margin: 1%;\r\n}\r\n\r\n\r\n\r\n.content div{\r\n  text-align: center;\r\n font-size: large;\r\n font-family: 'Times New Roman', Times, serif;\r\n margin-bottom: 10px;\r\n margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n/* Menu */\r\n.dishes{\r\n  background-color: rgb(144, 140, 140);\r\nheight: 100%;\r\n  overflow: hidden auto;\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(auto-fit , minmax(200px,1fr));\r\n  grid-auto-rows: 200px;\r\n   gap:10px;\r\n}\r\n.dishes .card{\r\n  margin: 0;\r\n  background-color: red;\r\nheight: 100%;\r\nwidth: 100%;\r\nbackground-image: url("+m+");\r\nbackground-size: 100% 100%;\r\nbackground-repeat: no-repeat;\r\ndisplay: flex;\r\njustify-content: space-between;\r\nflex-direction: column;\r\nfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.card .dish-name{\r\n  background-color: rgba(255, 225, 0, 0.852);\r\n  margin: 0;\r\n  \r\n\r\n}\r\n\r\n.card .price{\r\n  background-color: rgba(144, 238, 144, 0.792);\r\n  margin: 0;\r\n}\r\n\r\n.card .price,.card .dish-name{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 15%;\r\n} \r\n\r\n.content img{\r\n  width: 50%;\r\n  height: 80%;\r\n  float: left;\r\n  margin-right: 20px;\r\n  border-radius: 10px;\r\n}\r\n.content .email {\r\n  margin:0;\r\n}\r\n.content .call{\r\n  margin:2px;\r\n}\r\n.content img.contact-img{\r\n  float: none;\r\n width: 40px;\r\n height: 40px;\r\n margin: 0;\r\n\r\n margin-top: 4px;\r\n}\r\nspan.text{\r\n  font-family: 'Times New Roman', Times, serif;\r\n  word-spacing: 5px;\r\n  line-height: 3vh;\r\n  \r\n}\r\nspan.text .first{\r\n  font-size: 33px;\r\n} \r\n\r\n.pic{\r\n  height: 70%;\r\n}\r\n\r\n.pic img{\r\n  width: 100%;\r\n  height: 100%;\r\n \r\n  margin: auto;\r\n}\r\n\r\n.desc{\r\n  font-family: 'Courier New', Courier, monospace;\r\n  margin:5px 10px 10px;\r\n  \r\n}\r\n\r\n\r\n\r\n/*footer */ \r\n\r\n.footer{\r\n\r\n    background-color: #000000a8;\r\n    height: 7vh;\r\n    color: white;\r\n    font-family: monospace;\r\n    font-size: 18px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\ngap:8px;\r\n    align-items: center;\r\n}\r\n.footer .img{\r\n  width: 30px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.footer img.github:hover{\r\n  border: 1px dotted black; \r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n \r\n}",""]);const v=u},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",i=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),i&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),i&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,i,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,i=0;i<r.length;i++)if(r[i].identifier===n){e=i;break}return e}function i(n,i){for(var a={},s=[],o=0;o<n.length;o++){var c=n[o],d=i.base?c[0]+i.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var v=t(m,i);i.byIndex=o,r.splice(o,0,{identifier:u,updater:v,references:1})}s.push(u)}return s}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=i(n=n||[],t=t||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var o=e(a[s]);r[o].references--}for(var c=i(n,t),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var i=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,t&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(i,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},302:(n,r,e)=>{n.exports=e.p+"6ef6db913df93a631506.jpg"},828:(n,r,e)=>{n.exports=e.p+"92f50fb84035557326ac.jpg"}},r={};function e(i){var t=r[i];if(void 0!==t)return t.exports;var a=r[i]={id:i,exports:{}};return n[i](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var i in r)e.o(r,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:r[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var i=r.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),i=e(795),t=e.n(i),a=e(569),s=e.n(a),o=e(565),c=e.n(o),d=e(216),l=e.n(d),u=e(589),p=e.n(u),m=e(426),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=t(),v.insertStyleElement=l(),r()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const f=e.p+"eb02e0d6cf788022f49e.jpeg",h=e.p+"561526ca01e71eb65faa.png",g=e.p+"1258549eef71295a8d59.png",b=e.p+"8975b6dcf4a5b22f531e.png";document.body.innerHTML=`<div class="header">\n        <div class="cont">\n            <div class="name">Eaty</div>\n            <div class="slogan">~ Share The taste </div>\n        </div>\n\n        <div class="nav">\n            <div class="home current"> Home</div>\n            <div class="menu">Menu</div>\n            <div class="contact">Contact</div>\n        </div>\n\n    </div>\n    <div class="main">\n \n    </div>\n    <div class="footer">\n        <div class="cite">Crafted by Tjsm</div>\n        <div class="img"> <a href="https://github.com/Tribhuwan-Joshi"></a> <img src=${h} alt="github"\n                class="github" title="Github"></div>\n    </div>`,document.querySelector("link[rel=icon]").setAttribute("href",g);const x=document.querySelectorAll(".nav div"),y=document.querySelector(".main");y.innerHTML=`<div class="content home">\n<h1> 🔥 The Taste of Heaven 🔥</h1>\n<img src=${f} alt="img">\n<span class="text"> <span class="first">E</span>aty is a imaginary restaurant created to learn webpacks in CSS.\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quod omnis doloribus maiores voluptatibus\n    repudiandae. Placeat doloribus ex quod, corporis eius quis accusantium vitae excepturi laboriosam, natus facere\n    aspernatur in.\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum cupiditate accusantium facere, iusto illo quam\n        pariatur nostrum numquam aspernatur! Sint excepturi in quis numquam ut culpa impedit ipsam nam necessitatibus.\n    </p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem explicabo eos atque, nihil dolorum ipsa laborum\n        est dignissimos ad porro enim sint voluptates nisi sunt velit? Amet, neque id.</p>\n</span>\n\n<div class="lets">Lets Join Eaty Culture ! 🌶️🌶️🌶️</div>\n</div>`,x.forEach((n=>{n.addEventListener("click",(n=>function(n){let r=n.target;y.textContent="",x.forEach((n=>n.classList.remove("current"))),"Contact"==r.textContent?(r.classList.add("current"),document.querySelector(".main").innerHTML=`\n<div class="content">\n\n<div style="display:flex;justify-content:center;align-items: center;margin-top: 0;">\n    <h1>Connect with us </h1><img src=${b} class="contact-img" alt="caller">\n</div>\n<div class="email"> Email - EatyDeez@gmail.com</div>\n<div class="call">Phone - 11-12134343</div>\n<iframe\n    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26401.196074761923!2d-118.52812612555374!3d34.19365620897365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c299ef3b8308c3%3A0xe4bece2917a2e711!2sMillie&#39;s%20Restaurant%20%26%20Bakery!5e0!3m2!1sen!2sin!4v1659003558607!5m2!1sen!2sin"\n    width="600" height="450" style="border:3px solid black; width: 100%;" allowfullscreen="" loading="lazy"\n    referrerpolicy="no-referrer-when-downgrade"></iframe>\n    </div>`):"Menu"==r.textContent?(r.classList.add("current"),document.querySelector(".main").innerHTML='<div class="content">\n<h1>🍕 Our Dishes 🍜</h1>\n<div class="dishes">\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n    <div class="card">\n        <div class="dish-name">Italian Pizza</div>\n        <div class="price">350 $</div>\n\n    </div>\n\n</div>'):(r.classList.add("current"),document.querySelector("div.main").innerHTML=`<div class="content home">\n<h1> 🔥 The Taste of Heaven 🔥</h1>\n<img src=${f} alt="area">\n<span class="text"> <span class="first">E</span>aty is a imaginary restaurant created to learn webpacks in CSS.\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quod omnis doloribus maiores voluptatibus\n    repudiandae. Placeat doloribus ex quod, corporis eius quis accusantium vitae excepturi laboriosam, natus facere\n    aspernatur in.\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum cupiditate accusantium facere, iusto illo quam\n        pariatur nostrum numquam aspernatur! Sint excepturi in quis numquam ut culpa impedit ipsam nam necessitatibus.\n    </p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem explicabo eos atque, nihil dolorum ipsa laborum\n        est dignissimos ad porro enim sint voluptates nisi sunt velit? Amet, neque id.</p>\n</span>\n\n<div class="lets">Lets Join Eaty Culture ! 🌶️🌶️🌶️</div>\n</div>`)}(n)))}))})()})();