/*! For license information please see functions.js.LICENSE.txt */
!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:L(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var h={};function y(){}function v(){}function d(){}var g={};l(g,u,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(j([])));b&&b!==n&&o.call(b,u)&&(g=b);var w=d.prototype=y.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,r){function n(a,i,u,c){var s=p(e[a],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=F(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function F(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,F(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=d,a(w,"constructor",{value:d,configurable:!0}),a(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new E(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),l(w,s,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function u(t){r(i,o,a,u,c,"next",t)}function c(t){r(i,o,a,u,c,"throw",t)}u(void 0)}))}}function o(t,e){return a.apply(this,arguments)}function a(){return(a=n(e().mark((function t(r,n){var o,a,i,u,c,s,l,f;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=localStorage.getItem("token"),console.log(o),t.prev=3,u="https://formulabot.com/api/1.1/wf/"+r,c={method:"POST",headers:{Authorization:"Bearer ".concat(o),"Content-Type":"application/json"},body:JSON.stringify(n)},console.log("CALL API OPTIONS",u,c),t.next=9,fetch(u,c);case 9:return s=t.sent,console.log(s),t.next=13,s.json();case 13:return l=t.sent,console.log("CALL API RESP",l),f=null!==(a=null==l||null===(i=l.response)||void 0===i?void 0:i.output)&&void 0!==a?a:"Too many requests at once. Please try again soon. ",t.abrupt("return",f);case 19:return t.prev=19,t.t0=t.catch(3),t.abrupt("return","Too many requests at once. Please try again soon.");case 22:case"end":return t.stop()}}),t,null,[[3,19]])})))).apply(this,arguments)}function i(){return(i=n(e().mark((function t(r,n,a,i){var u,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.getItem("token")){t.next=3;break}return t.abrupt("return","Please log in.");case 3:return u={inputType:r,input:n,groupingType:a,groupings:i.flat(1/0).join(","),platform:"Excel Add-in",outputType:"Classify - FF"},console.log("payload",u),t.next=7,o("classify",u);case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=n(e().mark((function t(r,n){var a,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.getItem("token")){t.next=3;break}return t.abrupt("return","Please log in.");case 3:return a={input:r,extract:n,platform:"Excel Add-in",outputType:"Extract - FF"},t.prev=4,t.next=7,o("extract",a);case 7:return i=t.sent,t.abrupt("return",i);case 11:return t.prev=11,t.t0=t.catch(4),t.abrupt("return","abrupt("return","Too many requests at once. Please try again soon.");case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}function c(){return(c=n(e().mark((function t(r,n){var a,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.getItem("token")){t.next=3;break}return t.abrupt("return","Please log in.");case 3:return a={input:r,sentiment:n.flat(1/0).join(","),platform:"Excel Add-in",outputType:"Sentiment - FF"},t.prev=4,t.next=7,o("sentiment",a);case 7:return i=t.sent,t.abrupt("return",i);case 11:return t.prev=11,t.t0=t.catch(4),t.abrupt("return","No result found");case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}function s(){return(s=n(e().mark((function t(r,n){var a,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.getItem("token")){t.next=3;break}return t.abrupt("return","Please log in.");case 3:return a={input:r,info:n.flat(1/0).join(" "),platform:"Excel Add-in",outputType:"Get Info - FF"},t.prev=4,t.next=7,o("info",a);case 7:return i=t.sent,t.abrupt("return",i);case 11:return t.prev=11,t.t0=t.catch(4),t.abrupt("return","No result found");case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}function l(){return(l=n(e().mark((function t(r){var n,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.getItem("token")){t.next=3;break}return t.abrupt("return","Please log in.");case 3:return n={input:r.flat(1/0).join(" "),platform:"Excel Add-in",outputType:"Freeform - FF"},t.prev=4,t.next=7,o("freeform",n);case 7:return a=t.sent,t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(4),t.abrupt("return","No result found");case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}function f(){return(f=n(e().mark((function t(r,n,a){var i,u,c,s,l,f;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.getItem("token")){t.next=3;break}return t.abrupt("return","Please log in.");case 3:if(r.length==n.length){t.next=5;break}return t.abrupt("return","input_examples and output_examples are different lengths");case 5:for(u in i=[],r)c=r[u],s=n[u],i.push(c+": "+s);return i=i.join("\\n"),l={input:a,"reference-list":i,platform:"Excel Add-in",outputType:"Infer - FF"},t.prev=9,t.next=12,o("infer",l);case 12:return f=t.sent,t.abrupt("return",f);case 16:return t.prev=16,t.t0=t.catch(9),t.abrupt("return","No result found");case 19:case"end":return t.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}CustomFunctions.associate("CLASSIFY",(function(t,e,r,n){return i.apply(this,arguments)})),CustomFunctions.associate("EXTRACT",(function(t,e){return u.apply(this,arguments)})),CustomFunctions.associate("SENTIMENT",(function(t,e){return c.apply(this,arguments)})),CustomFunctions.associate("INFO",(function(t,e){return s.apply(this,arguments)})),CustomFunctions.associate("FREEFORM",(function(t){return l.apply(this,arguments)})),CustomFunctions.associate("INFER",(function(t,e,r){return f.apply(this,arguments)}))}();
//# sourceMappingURL=functions.js.map
