// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,a,o,l,p,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function I(e){var r,t,i;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return T.apply(null,t)}var C,R=Object.prototype,O=R.toString,Z=R.__defineGetter__,L=R.__defineSetter__,P=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};var G=C;function U(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function N(e){return"boolean"==typeof e}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function z(){return M&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var q,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";q=z()?function(e){var r,t,i,n,a;if(null==e)return Q.call(e);t=e[J],a=J,r=null!=(n=e)&&H.call(n,a);try{e[J]=void 0}catch(r){return Q.call(e)}return i=Q.call(e),r?e[J]=t:delete e[J],i}:function(e){return Q.call(e)};var K=q,Y=Boolean,ee=Boolean.prototype.toString;var re=z();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ie(e){return N(e)||te(e)}function ne(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function oe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(n):ae(n)+e,i&&(e="-"+e)),e}U(ie,"isPrimitive",N),U(ie,"isObject",te);var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function le(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ne(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=oe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=oe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):ce.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pe(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ve=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ue(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=de.call(t,Ee,"$1e"),t=de.call(t,me,"e"),t=de.call(t,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=de.call(t,he,"e+0$1"),t=de.call(t,we,"e-0$1"),e.alternate&&(t=de.call(t,be,"$1."),t=de.call(t,ve,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ge.call(e.specifier)?ge.call(t):fe.call(t)}function ke(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Se(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ke(i):ke(i)+e}var Ve=String.fromCharCode,je=isNaN,Te=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _e(e){var r,t,i,n,a,o,c,s,l;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=$e(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,je(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,je(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=le(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!je(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=je(a)?String(i.arg):Ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=xe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=oe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Se(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ie(e){var r,t,i,n;for(t=[],n=0,i=Ae.exec(e);i;)(r=e.slice(n,Ae.lastIndex-i[0].length)).length&&t.push(r),t.push(Fe(i)),n=Ae.lastIndex,i=Ae.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ce(e){return"string"==typeof e}function Re(e){var r,t,i;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ie(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return _e.apply(null,t)}function Oe(){return new Function("return this;")()}var Ze="object"==typeof self?self:null,Le="object"==typeof window?window:null,Pe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},We="object"==typeof Pe?Pe:null,Ge="object"==typeof globalThis?globalThis:null;var Ue=function(e){if(arguments.length){if(!N(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Oe()}if(Ge)return Ge;if(Ze)return Ze;if(Le)return Le;if(We)return We;throw new Error("unexpected error. Unable to resolve global object.")}(),Be=Ue.document&&Ue.document.childNodes,Ne=Int8Array;var Xe=X();var Me=Object.prototype.toString;var ze=Object.prototype.hasOwnProperty;var Qe,He="function"==typeof D?D.toStringTag:"";Qe=Xe&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return Me.call(e);t=e[He],a=He,r=null!=(n=e)&&ze.call(n,a);try{e[He]=void 0}catch(r){return Me.call(e)}return i=Me.call(e),r?e[He]=t:delete e[He],i}:function(e){return Me.call(e)};var qe=Qe;function De(){return/^\s*function\s*([^(]*)/i}var Je,Ke=/^\s*function\s*([^(]*)/i;U(De,"REGEXP",Ke),Je=Array.isArray?Array.isArray:function(e){return"[object Array]"===qe(e)};var Ye=Je;function er(e){return"number"==typeof e}function rr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function tr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+rr(n):rr(n)+e,i&&(e="-"+e)),e}var ir=String.prototype.toLowerCase,nr=String.prototype.toUpperCase;function ar(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!er(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=tr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=tr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===nr.call(e.specifier)?nr.call(t):ir.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function or(e){return"string"==typeof e}var cr=Math.abs,sr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase,pr=String.prototype.replace,ur=/e\+(\d)$/,fr=/e-(\d)$/,gr=/^(\d+)$/,dr=/^(\d+)e/,hr=/\.0$/,wr=/\.0*e/,br=/(\..*[^0])0*e/;function vr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!er(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":cr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=pr.call(t,br,"$1e"),t=pr.call(t,wr,"e"),t=pr.call(t,hr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=pr.call(t,ur,"e+0$1"),t=pr.call(t,fr,"e-0$1"),e.alternate&&(t=pr.call(t,gr,"$1."),t=pr.call(t,dr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===lr.call(e.specifier)?lr.call(t):sr.call(t)}function yr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function mr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+yr(i):yr(i)+e}var Er=String.fromCharCode,xr=isNaN,kr=Array.isArray;function Sr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vr(e){var r,t,i,n,a,o,c,s,l;if(!kr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(or(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Sr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,xr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,xr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ar(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!xr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=xr(a)?String(i.arg):Er(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=vr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=tr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=mr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var jr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $r(e){var r,t,i,n;for(t=[],n=0,i=jr.exec(e);i;)(r=e.slice(n,jr.lastIndex-i[0].length)).length&&t.push(r),t.push(Tr(i)),n=jr.lastIndex,i=jr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function _r(e){return"string"==typeof e}function Ar(e){var r,t,i;if(!_r(e))throw new TypeError(Ar("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$r(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Vr.apply(null,t)}function Fr(e){return null!==e&&"object"==typeof e}var Ir=function(e){if("function"!=typeof e)throw new TypeError(Ar("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Ye(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Fr);function Cr(e){var r,t,i,n;if(("Object"===(t=qe(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Ke.exec(i.toString()))return r[1]}return Fr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(Fr,"isObjectLikeArray",Ir);var Rr="function"==typeof B||"object"==typeof Ne||"function"==typeof Be?function(e){return Cr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Cr(e).toLowerCase():r};function Or(e){return"function"===Rr(e)}var Zr=Object.prototype.hasOwnProperty;var Lr,Pr,Wr="function"==typeof D&&"symbol"==typeof D("foo")&&(Pr="iterator",null!=(Lr=D)&&Zr.call(Lr,Pr))&&"symbol"==typeof D.iterator?Symbol.iterator:null;function Gr(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}function Ur(e,r){var t,i;for(t=e.length,i=0;i<t;i++)if(e[i]===r)return!0;return!1}function Br(e,r,t){var i,n,a;if(!function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Or(e.next)}(e))throw new TypeError(Gr("0Q546,G5",e));if(!Or(r))throw new TypeError(Gr("0Q52H,G6",r));return n=[],U(i={},"next",(function(){var i,o;if(a)return{done:!0};for(;;){if((o=e.next()).done)return a=!0,o;if(i=r.call(t,o.value),!1===Ur(n,i)){n.push(i);break}}return{value:o.value,done:!1}})),U(i,"return",(function(e){if(a=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Wr&&Or(e[Wr])&&U(i,Wr,(function(){return Br(e[Wr](),r,t)})),i}export{Br as default};
//# sourceMappingURL=mod.js.map
