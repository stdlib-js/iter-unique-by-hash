"use strict";var y=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=y(function(k,m){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=require('@stdlib/assert-is-function/dist'),b=require('@stdlib/assert-is-iterator-like/dist'),i=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e){var n,t;for(n=r.length,t=0;t<n;t++)if(r[t]===e)return!0;return!1}function c(r,e,n){var t,o,l;if(!b(r))throw new TypeError(s('0Q546',r));if(!f(e))throw new TypeError(s('0Q52H',e));return o=[],t={},v(t,"next",p),v(t,"return",q),i&&f(r[i])&&v(t,i,g),t;function p(){var u,a;if(l)return{done:!0};for(;;){if(a=r.next(),a.done)return l=!0,a;if(u=e.call(n,a.value),w(o,u)===!1){o.push(u);break}}return{value:a.value,done:!1}}function q(u){return l=!0,arguments.length?{value:u,done:!0}:{done:!0}}function g(){return c(r[i](),e,n)}}m.exports=c
});var x=d();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
