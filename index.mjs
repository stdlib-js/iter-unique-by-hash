// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=e,o=r,u=t,a=n,d=i;function l(e,r){var t,n;for(t=e.length,n=0;n<t;n++)if(e[n]===r)return!0;return!1}var m=function e(r,t,n){var i,m,f;if(!u(r))throw new TypeError(d("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!o(t))throw new TypeError(d("invalid argument. Second argument must be a function. Value: `%s`.",t));return m=[],s(i={},"next",(function(){var e,i;if(f)return{done:!0};for(;;){if((i=r.next()).done)return f=!0,i;if(e=t.call(n,i.value),!1===l(m,e)){m.push(e);break}}return{value:i.value,done:!1}})),s(i,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),a&&o(r[a])&&s(i,a,(function(){return e(r[a](),t,n)})),i},f=m;export{f as default};
//# sourceMappingURL=index.mjs.map
