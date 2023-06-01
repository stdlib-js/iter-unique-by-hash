// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterUniqueByHash=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[g],e=m(t,g);try{t[g]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[g]=r:delete t[g],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var h=s();function w(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function S(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",w);var x="object"==typeof self?self:null,O="object"==typeof window?window:null,T="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(x)return x;if(O)return O;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=A.document&&A.document.childNodes,P=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;a(C,"REGEXP",k);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function G(t){return null!==t&&"object"==typeof t}function L(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var U="function"==typeof y||"object"==typeof P||"function"==typeof B?function(t){return L(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?L(t).toLowerCase():e};function F(t){return"function"===U(t)}var I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function M(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function R(t,e){var r,n;for(r=t.length,n=0;n<r;n++)if(t[n]===e)return!0;return!1}return function t(e,r,n){var o,u,i,f,l;if(l=typeof(f=e),null===f||"object"!==l&&"function"!==l||!F(f.next))throw new TypeError(M("0Cx4J",e));if(!F(r))throw new TypeError(M("0Cx2S",r));return u=[],a(o={},"next",(function(){var t,o;if(i)return{done:!0};for(;;){if((o=e.next()).done)return i=!0,o;if(t=r.call(n,o.value),!1===R(u,t)){u.push(t);break}}return{value:o.value,done:!1}})),a(o,"return",(function(t){if(i=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),I&&F(e[I])&&a(o,I,(function(){return t(e[I](),r,n)})),o}}));
//# sourceMappingURL=index.js.map