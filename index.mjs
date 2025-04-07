// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(r,e){var t,n;for(t=r.length,n=0;n<t;n++)if(r[n]===e)return!0;return!1}function o(d,l,m){var u,f,a;if(!t(d))throw new TypeError(s("0Q546",d));if(!e(l))throw new TypeError(s("0Q52H",l));return f=[],r(u={},"next",(function(){var r,e;if(a)return{done:!0};for(;;){if((e=d.next()).done)return a=!0,e;if(r=l.call(m,e.value),!1===i(f,r)){f.push(r);break}}return{value:e.value,done:!1}})),r(u,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),n&&e(d[n])&&r(u,n,(function(){return o(d[n](),l,m)})),u}export{o as default};
//# sourceMappingURL=index.mjs.map
