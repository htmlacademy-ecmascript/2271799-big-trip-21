(()=>{"use strict";var e={10:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);i&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),s&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=s):p[4]="".concat(s)),t.push(p))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],p=r[c]||0,d="".concat(c," ").concat(p);r[c]=p+1;var u=n(d),v={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(v);else{var f=s(v,i);i.byIndex=o,t.splice(o,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var p=n(r[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),s=n.n(i),r=n(569),a=n.n(r),o=n(565),l=n.n(o),c=n(216),p=n.n(c),d=n(589),u=n.n(d),v=n(10),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p(),t()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const m="shake";class _{#e=null;constructor(){if(new.target===_)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),e?.()}),600)}}function h(e,t,n="beforeend"){if(!(e instanceof _))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function y(e,t){if(!(e instanceof _&&t instanceof _))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}const b=e=>e[Math.floor(Math.random()*e.length)],g=(e=100,t=1)=>Math.floor(Math.random()*(e-t+1))+t,A=["New York","Tokyo","Paris","London","Sydney","Moscow","Istanbul","Mumbai","Cairo","Beijing","Rome","Geneva"],k="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",E=[{name:"Taxi",img:"img/icons/taxi.png"},{name:"Bus",img:"img/icons/bus.png"},{name:"Train",img:"img/icons/train.png"},{name:"Ship",img:"img/icons/ship.png"},{name:"Drive",img:"img/icons/drive.png"}],w=["Order Uber","Add luggage","Switch to comfort","Rent a car","Add breakfast","Book tickets","Lunch in city","Upgrade to a business class"],x=[{id:1,name:b(A),description:k,pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${b(A)} description`}]},{id:2,name:b(A),description:k,pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${b(A)} description`}]},{id:3,name:b(A),description:k,pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${b(A)} description`}]},{id:4,name:b(A),description:k,pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${b(A)} description`}]},{id:5,name:b(A),description:k,pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${b(A)} description`}]},{id:6,name:b(A),description:k,pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${b(A)} description`}]}],C=[{id:1,title:b(w),price:"57"},{id:2,title:b(w),price:"200"},{id:3,title:b(w),price:"188"}],$=[{id:1,price:g(),dateFrom:"2023-05-23",dateTo:"2023-12-19",destination:x[g(1,6)],isFavorite:!0,type:b(E),offers:Array.from({length:g(1,5)},(()=>b(C)))},{id:2,price:g(),dateFrom:"2023-05-23",dateTo:"2023-12-19",destination:x[g(0,2)],isFavorite:!1,type:b(E),offers:Array.from({length:g(1,5)},(()=>b(C)))},{id:3,price:g(),dateFrom:"2023-05-23",dateTo:"2023-12-19",destination:x[g(0,2)],isFavorite:!0,type:b(E),offers:Array.from({length:g(1,5)},(()=>b(C)))}];class L extends _{#t=null;#n=null;constructor({data:e,onCloseEdit:t}){super(),this.#t=e,this.#n=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#i)}get template(){return function({type:e,destination:t,offers:n,price:i}){return` <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="${e.img}" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n              <div class="event__type-item">\n                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.name}">\n                <label class="event__type-label  event__type-label--taxi" for="event-type-tax i-1">${e.name}</label>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n<div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            Flight\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.name}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            <option value="Amsterdam"></option>\n            <option value="Geneva"></option>\n            <option value="Chamonix"></option>\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n          ${n.map((e=>`<div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n              <label class="event__offer-label" for="event-offer-luggage-1">\n                <span class="event__offer-title">${e.title}</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">${e.price}</span>\n              </label>\n            </div>`)).join("")}\n          </div>\n        </section>\n    </form>\n  </li>`}(this.#t)}#i=e=>{e.preventDefault(),this.#n()}}class T extends _{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}class M extends _{get template(){return"<ul class='trip-events__list'>\n    </ul>"}}class B extends _{#t=null;#n=null;constructor({data:e,onEditClick:t}){super(),this.#t=e,this.#n=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#i)}get template(){return function({type:e,destination:t,offers:n,price:i}){return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="2019-03-18">MAR 18</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="${e.img}" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${t.name}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="2019-03-18T14:30">14:30</time>\n          &mdash;\n          <time class="event__end-time" datetime="2019-03-18T16:05">16:05</time>\n        </p>\n        <p class="event__duration">01H 35M</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${i}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n      ${n.map((e=>`<li class="event__offer">\n          <span class="event__offer-title">${e.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </li>`)).join("")}\n      </ul>\n      <button class="event__favorite-btn  event__favorite-btn--active" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`}(this.#t)}#i=e=>{e.preventDefault(),this.#n()}}const I=document.querySelector(".trip-main"),U=document.querySelector(".trip-events"),S=new class{points=Array.from({length:5},(()=>b($)));getPoints(){return this.points}},P=new class{pointList=new M;constructor({container:e,points:t}){this.container=e,this.points=t}init(){h(new T,this.container),this.data=[...this.points.points],this.#s()}#r(e){const t=e=>{"Escape"===e.key&&(e.preventDefault(),s(),document.removeEventListener("keydown",t))},n=new B({data:e,onEditClick:()=>{y(i,n),document.addEventListener("keydown",t)}}),i=new L({data:e,onCloseEdit:()=>{s(),document.addEventListener("keydown",t)}});function s(){y(n,i)}h(n,this.pointList.element)}#s(){h(this.pointList,this.container),this.data.map((e=>{this.#r(e)}))}}({container:U,points:S});h(new class extends _{get template(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n    <p class="trip-info__cost">\n    <span class="trip-info__cost-value">1230</span>\n    </p>\n    </section>'}},I),h(new class extends _{get template(){return'<div class="trip-main__trip-controls  trip-controls">\n    <div class="trip-controls__filters">\n      <h2 class="visually-hidden">Filter events</h2>\n      <form class="trip-filters" action="#" method="get">\n        <div class="trip-filters__filter">\n          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n          <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n          <label class="trip-filters__filter-label" for="filter-future">Future</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n          <label class="trip-filters__filter-label" for="filter-present">Present</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n          <label class="trip-filters__filter-label" for="filter-past">Past</label>\n        </div>\n\n        <button class="visually-hidden" type="submit">Accept filter</button>\n      </form>\n    </div>\n  </div>'}},I),h(new class extends _{get template(){return"<button class='trip-main__event-add-btn  btn  btn--big  btn--yellow' type='button'>\n    New event</button>"}},I),P.init()})()})();
//# sourceMappingURL=bundle.1455cb324e2ba747f2b9.js.map