!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wix-perf-measure",[],t):"object"==typeof exports?exports["wix-perf-measure"]=t():e["wix-perf-measure"]=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://static.parastorage.com/services/wix-perf-measure/1.451.0/",n(n.s=5)}([function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"m",(function(){return o})),n.d(t,"n",(function(){return c})),n.d(t,"o",(function(){return u})),n.d(t,"q",(function(){return a})),n.d(t,"l",(function(){return s})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"r",(function(){return d})),n.d(t,"f",(function(){return v})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"i",(function(){return m})),n.d(t,"e",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return w}));var r=n(1);function i(){}var o=function(e){return""+r.d+e},c=Math.max,u=Math.min;function a(e){return function(){return Promise.reject(e)}}function f(e){return function(t){return typeof t===e}}var s=f("undefined"),l=f("number"),p=f("boolean");f("string");function d(e){return Object.entries(e).filter((function(e){return"number"==typeof e[1]})).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=Math.round(r),e}),e)}function v(e){return e&&e.replace(/\?.*$/,"")}function b(e,t){var n;return null==e.getEntriesByType||null==(n=e.getEntriesByType(t))?void 0:n[0]}function y(e,t){return e.then((function(e){return e[t]}))}function m(e,t,n){return function(){var r=e.indexOf(t);r>-1&&(e.splice(r,1),0===e.length&&n())}}function O(e){return function(){return e.disconnect()}}function h(e,t){var n;return t||(null==e||null==(n=e.closest("*[id]"))?void 0:n.id)}function g(e,t,n){s(n)||(e[t]=/^is/.test(t)?!!n:n)}function j(e){return Promise.allSettled(e).then((function(e){return e.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value}))}))}function w(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((function(t){j(n).then((function(n){var r=n.reduce((function(e,t){return Object.assign(e,t)}),{});r.entryType=e,t(r)}))}))}},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var c=1e4,u=10,a=1e4,f="\u23f1",s={capture:!0,passive:!0},l=i(i({},s),{},{once:!0})},function(e,t,n){"use strict";function r(e){var t;return e.wixBiSession||(null==(t=e.bi)?void 0:t.wixBiSession)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r;function i(t,n,i,o){Object.defineProperty(o,"info",{value:function(){function c(e){e?e.default(o):u()}function u(){console.info("Failed to load info")}void 0===e&&(t.process={env:{}}),r||(r=new Promise((function(e,t){if(!i)return t();var r=n.createElement("script");r.src=i.replace("measure.","measure-info."),r.onload=e,r.onerror=t,n.head.appendChild(r)}))),r.then((function(){"function"==typeof requirejs?requirejs(["wix-perf-measure-info"],c,u):c(t["wix-perf-measure-info"])})).catch(u)}})}}).call(this,n(4))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var a,f=[],s=!1,l=-1;function p(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&d())}function d(){if(!s){var e=u(p);s=!0;for(var t=f.length;t;){for(a=f,f=[];++l<t;)a&&a[l].run();l=-1,t=f.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function b(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||s||u(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(1);function i(e,t,n,i){void 0===i&&(i=!0),e.addEventListener(t,n,i?r.c:r.b)}function o(e,t,n,i){void 0===i&&(i=!0),e.removeEventListener(t,n,i?r.c:r.b)}var c=f((function(e){return"loading"!==e}),"DOMContentLoaded"),u=f((function(e){return"complete"===e}),"load"),a=f((function(){return!1}),"pagehide",!1);function f(e,t,n){var r;return void 0===n&&(n=!0),function(o){return r||(r=function(e,t,n,r){return new Promise((function(o){if(t(e.document.readyState))o({startTime:0});else{var c=function(e){return o({startTime:e.timeStamp})};i(e,n,r?function(e){return setTimeout((function(){return c(e)}),0)}:c)}}))}(o,e,t,n)),r}}function s(e,t,n,r){void 0===r&&(r=e),r.dispatchEvent(new e.CustomEvent(t,{detail:n}))}var l="visibilitychange";function p(e){var t=e[0];return new Promise((function(e){if(d(t))return n(l,0);function n(t,n){e({entryType:"visibility",type:t,startTime:n})}i(t,l,(function e(r){var i=r.timeStamp;d(t)&&(o(document,l,e,!1),n(l,i))}),!1),a(t).then((function(e){return n("pagehide",e.startTime)}))}))}function d(e){var t=e.document,n=t.visibilityState;return void 0===n?t.hidden:"hidden"===n}var v=n(0),b=n(2),y={__proto__:{load:function(e,t){var n=t.dataset,r=t.src;if(Object.entries(y).map((function(e){var t=e[0],r=e[1];return[n[t],t,r]})).filter((function(e){var t=e[0];return!Object(v.l)(t)})).forEach((function(e){var t=e[0],n=e[1],r=e[2];if(Object(v.j)(r))t=!0;else if(Object(v.k)(r)){var i=Number(t);t=Number.isNaN(i)?r:i}y[n]=t})),r){y.src=r;var i=/\d+\.\d+\.\d+/.exec(r);i&&(y.version=i[0])}!y.clientType&&Object(b.a)(e)&&(y.clientType="ugc")}},resourceDebounce:2e3,taskDelta:300,lcpMin:500,downloadToRenderDelta:1e3,longTask:60,eventDelta:500,ttiDurationInc:2e3,ignoreResources:"cdn_detect,-analytics,perf-measure",label:m("Performance"),clientType:"",fcpPolyfill:"wixFirstPaint",fcpPolyfillId:"wix-first-paint",pageEvent:m("Page"),clsEvent:m("Cls"),storagePrefix:"wix-perf-measure",noMeasure:!1,log:!1};function m(e){return"wix"+e+"Measurements"}var O=y;var h={analytics:!0,entryType:!0,clientType:!0,url:!0,dns:!0,tcp:!0,ssl:!0,ttfb:!0,response:!0,navigationType:!0,pageCaching:!0,_brandId:!0,viewerName:!0,v:!0,dc:!0,microPop:!0,cdn:!0,msid:!0,pageId:!0,fp:!0,fcp:!0,tti:!0,tbt:!0,lcp:!0,lcpSize:!0,closestId:!0,lcpTag:!0,cls:!0,countCls:!0,clsId:!0,clsTag:!0,ttlb:!0,dcl:!0,isSsr:!0,ssrDuration:!0,ssrTimestamp:!0,startTime:!0,duration:!0,delay:!0,action:!0,type:!0,pn:!0,count:!0,simLH6:!0,isMobile:!0,maybeBot:!0,btype:!0};function g(e,t){var n=/^https?:\/\/(?:www\.)?(.*)/.exec(e),r=n?n[1]:e;return j(t)?r:Object(v.f)(r)}function j(e){var t,n,r=e.consentPolicyManager;return!(null==r||null==(t=r.getCurrentConsentPolicy())||null==(n=t.policy)||!n.analytics)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=10,E=100;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=e[1];return u(window).then((function(){var e=t.timing,n=e.navigationStart,r=e.responseEnd,i=e.domContentLoadedEventEnd,o=e.loadEventEnd,c=Object(v.h)(t,"navigation"),u=function(e){if(e){var t=e.requestStart,n=e.responseStart,r=e.responseEnd,i=e.transferSize,o=e.encodedBodySize;if(Object(v.k)(i)){if(0===i)return"browser";if(i<o)return"eTag"}else{if(n-t<13)return"browser";if(r-n<13)return"maybe eTag"}if(r-n<333)return"maybe CDN"}}(c);return x(x({entryType:"navigation-finish",duration:o-n,ttlb:r-n,dcl:i-n},c&&{transferSize:c.transferSize,decodedBodySize:c.decodedBodySize}),u&&{pageCaching:u})}))}var I={get:function(e,t){return R(e,t,(function(e,t){return e.getItem(t)}))},set:function(e,t,n){R(e,t,(function(e,t){return e.setItem(t,n)}))}};function R(e,t,n){t=O.storagePrefix+"-"+t;try{var r=e.localStorage;if(j(e))return n(r,t);r.removeItem(t)}catch(e){}}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=["microPop","is_rollout","is_platform_loaded","maybeBot","isjp"],B={is_rollout:"isRollout",is_platform_loaded:"isPlatformLoaded",isjp:"maybeBot"};function q(e,t){var n=e[0],r=n.fetchDynamicModel||Promise.resolve({});return Object(v.b)([A(n),r,t,c(n)]).then((function(e){var t,r=e[0],c=e[1].visitorId,u=Object(b.a)(n);if(!u)throw"wix-finish";var a=!n.clientSideRender,f=u.btype,s=function(e,t){var n=new RegExp("\\b"+t+"\\s*=\\s*([0-9a-f\\-\\|]+)").exec(e.document.cookie);return n&&n[1]}(n,"bSession"),l=_(_(_(_({entryType:"wix-finish",isSsr:a,isWelcome:!!n.requestCloseWelcomeScreen},r&&{cdn:r}),c&&{visitorId:c}),f&&{btype:f}),s&&{bsi:s});if(Object(v.a)(l,"pageId",(null==(t=n.rendererModel)?void 0:t.landingPageId)||n.firstPageId),a){var p=n.ssrInfo,d=void 0===p?{}:p;Object(v.a)(l,"ssrDuration",d.renderBodyTime||d.timeSpentInSSR),Object(v.a)(l,"ssrTimestamp",d.renderTimeStamp)}return N.forEach((function(e){return Object(v.a)(l,B[e]||e,u[e])})),function(e){var t=I.get(n,"timestamp"),r=o()-t;r>0&&(e.sessionDelta=r);i(n.document,"consentPolicyChanged",o,!1)}(l),l}));function o(){var e=Date.now();return I.set(n,"timestamp",e),e}}function A(e){var t=e.URL;if(!t)return Promise.resolve();var n=new t(O.src).origin;return fetch(n+"/cdn_detect",{method:"GET",mode:"cors",cache:"no-cache"}).then((function(e){return e.headers.get("CDN-seen")})).catch(v.p)}function z(e,t,n,r){if(void 0===n&&(n=v.p),void 0===r&&(r=!0),e){var i=e.supportedEntryTypes;if(i&&i.includes(t)){var o=new e((function(e,t){return n(e.getEntries(),t)}));try{o.observe({type:t,buffered:r})}catch(e){o.observe({entryTypes:[t]})}return o}}}var H,F=function(e){var t=e.initiatorType,n=e.name;return"script"===t||"link"===t&&/\.js$/.test(n)},W=function(e){var t=e.initiatorType,n=e.name;return"img"===t||"image"===t||"css"===t&&/\.(?:jpe?g|png|webp|gif)/i.test(n)},U=function(e){var t=e.initiatorType,n=e.name;return"css"===t&&n.includes("font")||/\.(?:woff2?|ttf|eot)/i.test(n)},$=[];function V(e,t,n){if(1===$.push(t)){var r=O.ignoreResources.split(",");H=z(e,"resource",(function(e){(e=e.filter((function(e){var t=e.name;return!r.some((function(e){return t.includes(e)}))}))).length&&$.forEach((function(t){return t(e)}))}),n)}return{observer:H,finish:Object(v.i)($,t,Object(v.e)(H))}}function G(e,t,n){var r=e[2],i=e[3],o=e[4],c=void 0===n?{}:n,u=c.filter,a=c.tag,f=void 0===a||a,s=c.debounce,l=void 0===s?O.resourceDebounce:s,p=new Promise((function(e,t){var n=[],c=i(p,l),a=V(r,(function(e){u&&(e=e.filter(u)),e.length&&(n.push.apply(n,e),o(c),c=i(p,l))}),!0),f=a.observer,s=a.finish;function p(){if(!f)return t();var r=null==f.takeRecords?void 0:f.takeRecords();r&&n.push.apply(n,r),s(),e(n)}})).then((function(e){var n=e,r=n.length;if(!r)throw t;var i=n.reduce((function(e,t){var n=t.transferSize,r=t.responseStart,i=t.responseEnd;return{tbd:e.tbd+n,firstResponse:r>0&&r<e.firstResponse?r:e.firstResponse,lastResponse:Object(v.n)(e.lastResponse,i)}}),{tbd:0,firstResponse:1e6,lastResponse:0}),o=i.tbd,c=i.firstResponse,u=i.lastResponse,a=n.filter((function(e){var t=e.requestStart;return Object(v.k)(t)})).map((function(e){var t=e.requestStart;return e.responseStart-t})).sort(),f=a.length,s=f>>1,l=Object(v.o)(c,u),p={count:r,startTime:l,duration:u-l,mttfb:f%2?a[s]:(a[s-1]+a[s])/2,attfb:a.reduce((function(e,t){return e+t}),0)/f};return Number.isNaN(o)||(p.tbd=o),p})).catch((function(){return{count:0}}));return f?p.then((function(e){var n=(r=t,r[0].toUpperCase()+r.slice(1));var r;return Object.entries(e).reduce((function(e,t){var r=t[0],i=t[1];return e[r+n]=i,e}),{})})):p}function Q(e,t,n,r){var i,o=new Promise((function(o,c){(i=z(e,t,(function(e){return n(e,(function(e){i.disconnect(),o(e)}))}),r))||c(t)}));return o.takeRecords=function(){var e;return null==(e=i)||null==e.takeRecords?void 0:e.takeRecords()},o}var J={"first-paint":"fp","first-contentful-paint":"fcp"};function K(e){var t=e[0],n=e[2],r={entryType:"initial-paint"};return Q(n,"paint",(function(e,t){e.reduce((function(e,t){var n=t.name,i=t.startTime;return r[n=J[n]||n]=i,e||"fcp"===n}),!1)&&t(r)})).catch((function(){return function(e,t){return new Promise((function(n,r){var o=O.fcpPolyfill,u=O.fcpPolyfillId;function a(){var r=e[o];n({entryType:t,fp:r,fcp:r})}o in e?a():(i(e,o,a),c(e).then((function(){e.document.getElementById(u)||r(t)})))}))}(t,r.entryType)}))}function X(e,t,n){var r=e[0],i=e[2],o=e[3],u=e[4],a=O.resourceDebounce,f=O.taskDelta,s=O.ttiDurationInc;return t.then((function(t){return new Promise((function(s){var l=t,p=!0,d=0,b=[],y=function(e,t){var n=e[0],r=n.requestAnimationFrame,i=n.cancelAnimationFrame,o=e[1],c=z(e[2],"longtask",t,!1);if(c)return Object(v.e)(c);var u=o.now(),a=O.longTask,f=r((function e(n){var i=n-u;i>=a&&t([{startTime:u,duration:i}]);u=n,f=r(e)}));return function(){return i(f)}}(e,(function(e){b.push.apply(b,e),p=!1,u(d),d=o((function(){p=!0,P()}),f)})),m=c(r),h=!1,g=o(w,a),j=V(i,(function(e){(e=e.filter((function(e){return"fetch"===(t=e.initiatorType)||"xmlhttprequest"===t||F(e);var t}))).length&&(h=!1,l=e.reduce((function(e,t){var n=t.startTime,r=t.duration;return Object(v.n)(e,n+r)}),l),m.then((function(e){var t=e.startTime;l=Object(v.n)(t,l),u(g),g=o(w,a)})))}),!1).finish;function w(){h=!0,P()}function P(){p&&h&&T(1e6)}function T(e){y(),j(),s([b,t,l,e])}null==n||n.then((function(e){return T(e.startTime+e.delay)}),v.p)}))})).then((function(e){var t=e[0],n=function(e,t,n,r){t===n&&(n+=s);var i=e.findIndex((function(e){var t=e.startTime,r=e.duration;if(t>n+f)return!0;n=Object(v.n)(n,t+r)}));-1===i&&(i=e.length);var o=i>0?(c=e[i-1],c.startTime+c.duration):0;var c;return Object(v.n)(Object(v.o)(o,r),t)}(t,e[1],e[2],e[3]),i=r.document,o=r.innerHeight,c={tti:n,tbt:function(e,t){for(var n=0,r=0;r<e.length;++r){var i=e[r],o=i.startTime,c=i.duration;if(o>t)break;n+=c-50}return n}(t,n),iframes:i.querySelectorAll("iframe").length},u=Object(v.n)(i.body.offsetHeight,o);return u>0&&(c.screens=i.body.scrollHeight/u),c})).catch(Object(v.q)("interactive"))}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e){var t;if(e){var n=e.startTime,r=e.size,i=e.url,o=e.element,c=e.id,u=Object(v.d)(o,c),a=(o||{}).tagName,f=/\.(jpe?g|png|gif|svg|webp)/i.exec(i),s=(null==f||null==(t=f[1])?void 0:t.toLowerCase().replace("jpeg","jpg"))||"other";return Z(Z(Z({lcp:n,lcpSize:r},u&&{closestId:u}),a&&{lcpTag:a}),i&&{lcpResourceType:s})}}function ne(e,t){var n=z(e,t);if(n){var r=null==n.takeRecords?void 0:n.takeRecords();return n.disconnect(),r}}function re(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t){var n=ne(e[2],"layout-shift");if(n){for(var i,o=n.filter((function(e){return!e.hadRecentInput})).map((function(e){var t=e.sources,n=e.value;return[t.reduce((function(e,t){var n=t.node,r=t.currentRect,i=r.width*r.height;return i<e.area?e:{area:i,node:n}}),{area:-1,node:null}).node,n]})).reduce((function(e,t){var n=e[0],r=e[1],i=e[2],o=t[0],c=t[1];return o&&i.set(o,c+(i.get(o)||0)),[n+c,++r,i]}),[0,0,new Map]),c=o[0],u=o[1],a=[],f=re(o[2].entries());!(i=f()).done;){var s=i.value;a.push(s)}a.sort((function(e,t){return t[1]-e[1]}));var l={cls:c*r.a,countCls:u};if(a.length){var p,d=a[0][0];(null==(p=d)?void 0:p.nodeType)!==Node.ELEMENT_NODE&&(d=d.parentElement),t&&d&&(l.element=d);var b=Object(v.d)(d);b&&(l.clsId=b);var y=d.tagName;y&&(l.clsTag=y)}return l}}var ce=["pointerdown","click","mousedown","keydown","touchstart"],ue=[],ae=0;function fe(e,t){var n=e[0],r=e[1];return 1===ue.push(t)&&ce.forEach((function(e){return i(n,e,c,!1)})),Object(v.i)(ue,t,(function(){return ce.forEach((function(e){return o(n,e,c,!1)}))}));function c(e){var t=e.type,c=e.timeStamp;if(e.cancelable){var a=r.now(),f=c>1e12?Date.now():a,s=Object(v.n)(f-c,0),l=a-s;t===ce[0]?function(e,t,r){function c(){u(e,t,r),a()}function a(){o(n,"pointerup",c,!1),o(n,"pointercancel",a,!1)}i(n,"pointerup",c,!1),i(n,"pointercancel",a,!1)}(t,l,s):u(t,l,s)}}function u(e,t,n){var r=t+n;r-ae<O.eventDelta||(ae=r,ue.forEach((function(r){return r(e,t,n)})))}}function se(e){return Q(e[2],"first-input",(function(e,t){var n=e[0],r=n.name,i=n.startTime,o=n.processingStart,c=n.duration,u=n.target,a={entryType:"first-input",action:r,startTime:i,delay:o-i,duration:c},f=Object(v.d)(u);f&&(a.closestId=f),t(a)})).catch((function(){return function(e,t){return new Promise((function(n){var r=fe(e,(function(e,i,o){r(),n({entryType:t,action:e,startTime:i,delay:o})}))}))}(e,"first-input")}))}function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e,t,n){var r,i,o=[],c=[],u=function(){return o.push(new Promise((function(e){return i=e})))};return u(),{report:function(t){t=be(e,t),c.push(t),i({value:t}),u(),n&&s(e,n,t)},result:Promise.resolve(pe((r={entryType:t},r[Symbol.iterator]=function(){var e=0;return{next:function(){return{value:c[e++],done:e>c.length}}}},r[Symbol.asyncIterator]=function(){var e=0;return{next:function(){return o[e++]}}},r),n&&{eventName:n}))}}function be(e,t){return Object.freeze(Object(v.r)(function(e,t){return Symbol.iterator in t?t:(t.analytics=j(e),t.analytics?t:Object.entries(t).filter((function(e){var t=e[0];return h[t]})).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{}))}(e,pe(pe({},t),{},{clientType:O.clientType}))))}function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Oe=0;function he(e){var t=e[0],n=s(),r=O.clientType,o=O.pageEvent,c=ve(t,"page-transitions",o),u=c.report,a=c.result;return i(t,"popstate",(function(e){return f(e.type,e.timeStamp,0)}),!1),fe(e,f),a;function f(t,i,o){X(e,Promise.resolve(i+o)).then((function(e){var c=s();if(function(e,t){return Object(v.f)(e)!==Object(v.f)(t)}(n,c)){var a=e.tti-i,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({entryType:"page-transition",clientType:r,origin:n,destination:c,action:t,startTime:i,delay:o,duration:a,pn:++Oe},e);n=c,u(f)}}))}function s(){return g(t.location.href,t)}}function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){we(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pe;function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){Ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e,t){return t.then((function(t){var n=t.cls,r=0,o=e[0],c=ve(o,"crux-cls-s",O.clsEvent),u=c.report,a=c.result;return i(o,"visibilitychange",(function(){d(o)||p(e).then((function(t){var i=t.startTime,o=oe(e);o&&o.cls!==n&&(n=o.cls,u(Se(Se({},o),{},{entryType:"crux-cls",startTime:i,count:++r})))}))}),!1),a}))}var xe=n(3),ke=Object(v.m)("tti"),Me=Object(v.m)("lcp");function Ie(e){console.log(r.d,e)}var Re=[.2,.33,.15,.25,.07],Ce=[[1600,799.4643],[2400,883.7075],[4500,2000.0009],[350,90.5512],[.25,.05435]],_e=[[4e3,2000.2137],[4e3,2251.6873],[7300,2900.1506],[600,200.631],[.25,.05435]],Le=Math.round,Ne=Math.log,Be=Math.exp,qe=Math.sqrt,Ae=Math.abs,ze=Math.SQRT2;function He(e,t,n){var i,o,c=e[0],u=n.tti,a=n.tbt,f=n.lcp,s=n.cls,l=c,p=(null==(i=l.viewerModel)?void 0:i.deviceInfo.deviceClass)||(null==(o=l.publicModel)?void 0:o.deviceInfo.deviceType),d=p?"Smartphone"===p:function(e){var t=e.navigator.userAgent;if(/android/i.test(t))return!/tablet|smart_?tv/i.test(t);return/iphone/i.test(t)}(c),v={isMobile:d};if(t+u+a+f+s>=0){var b=function(e,t){return function(e){var t=e.reduce((function(e,t){var n=t[0],r=t[1];return[e[0]+n,e[1]+r*n]}),[0,0]),n=t[0];return t[1]/n||0}(Re.map((function(n,r){return[n,Le(100*(u=e[r],a=t[r],f=u[0],s=u[1],l=Ne(f),p=Ne(s/f),d=qe(1-3*p-qe((p-3)*(p-3)-8))/2,v=(Ne(a)-l)/(ze*d),(1-(i=v,.254829592,-.284496736,1.421413741,-1.453152027,1.061405429,.3275911,o=1/(1+.3275911*Ae(i)),c=o*(.254829592+o*(o*(1.421413741+o*(1.061405429*o-1.453152027))-.284496736)),Fe(i)*(1-c*Be(-i*i))))/2))/100];var i,o,c,u,a,f,s,l,p,d,v})))}(d?_e:Ce,[t,f,u,a,s/r.a]);v.simLH6=100*b}return v}function Fe(e){return e<0?-1:1}!function(e){if("function"!=typeof Promise||!Promise.allSettled)return;var t=e.document,n=e.performance,i=t.currentScript||t.getElementById("wix-perf-measure");i&&O.load(e,i);var o=O.noMeasure,c=O.log,u=O.label,a=function(e){var t=Object(v.c)("environment",function(e){var t=e[0],n=t.screen,i={screenRes:n.width+"x"+n.height,availScreenRes:n.availWidth+"x"+n.availHeight,windowInner:t.innerWidth+"x"+t.innerHeight,windowOuter:t.outerWidth+"x"+t.outerHeight,devicePixelRatio:t.devicePixelRatio*r.f,colorDepth:n.colorDepth};O.version&&(i.version=O.version);var o=n.orientation;null!=o&&o.type&&(i.orientation=o.type);var c=t.navigator,u=c.connection,a=c.deviceMemory,f=c.hardwareConcurrency;if(f&&(i.cores=f),a&&(i.memory=Math.floor(a)),u){var s=u.type,l=u.effectiveType,p=u.rtt,d=u.downlink,b=u.saveData;s&&(i.networkType=s),l&&(i.effectiveType=l),Object(v.k)(p)&&p&&(i.rtt=p),d&&(i.download=Object(v.o)(d,r.e)),Object(v.j)(b)&&(i.saveData=b)}if(t.matchMedia){var y=t.matchMedia("(prefers-reduced-motion:reduce)");i.reducedMotion=y.matches}return c.getBattery?c.getBattery().then((function(e){var t=e.charging,n=e.level;return i.lowBattery=!1===t&&n<.1,i})).catch((function(){return i})):Promise.resolve(i)}(e),function(e){var t=e[0],n=e[1];return new Promise((function(e,r){var i=0;!function o(){var c=n.timing,u=c.navigationStart,a=c.fetchStart,f=c.domainLookupStart,s=c.domainLookupEnd,l=c.redirectStart,p=c.redirectEnd,d=c.connectStart,b=c.connectEnd,y=c.secureConnectionStart,m=c.requestStart,O=c.responseStart,h=O-u;if(!(h>=0))return void(++i>S?r("navigation-start"):setTimeout(o,E));var j=t.document.referrer,w=t.location.href,T=Object(v.h)(n,"navigation");e(P(P(P(P(P({entryType:"navigation-start",url:g(w,t),referrer:g(j,t)},T&&{navigationType:T.type,protocol:T.nextHopProtocol}),{},{dns:s-f},Object(v.k)(a)&&{fetchStart:a-u}),p&&{redirect:p-l}),y?{tcp:y-d,ssl:b-y}:{tcp:b-d}),{},{ttfb:h,response:O-m}))}()}))}(e),function(e){var t=e[0],n=Object(b.a)(t);if(!n)return Promise.reject("wix-start");var r={},i=t.thunderboltVersion,o=t.viewerModel,c=t.boltVersion,u=t.rendererModel;Object(v.a)(r,"msid",(null==u?void 0:u.metaSiteId)||n.msId);var a=t.commonConfig||(null==o?void 0:o.siteFeaturesConfigs.commonConfig);return Object(v.a)(r,"_brandId",null==a?void 0:a.brand),i?f(null!=o&&o.site.isResponsive?"thunderboltResponsive":"thunderbolt",i):f(n.renderType,c),Object(v.a)(r,"dc",n.dc||(null==o?void 0:o.site.dc)),Promise.resolve(r);function f(e,t){Object(v.a)(r,"viewerName",e),Object(v.a)(r,"v",t)}}(e)),n=p(e),i=K(e),o=se(e),c=X(e,Object(v.g)(i,"fcp"),o),u=function(e,t,n,r){var i=e[1],o=e[2],c=e[3],u=e[4];return t.then((function(e){var t,a=e.tti,f=O.resourceDebounce,s=new Promise((function(e){var n=Object(v.n)(f-(i.now()-a),0);t=c(e,n)})),l=Q(o,"largest-contentful-paint",(function(e,n){u(t),t=c((function(){return n(e[e.length-1])}),f)}));return Promise.race([l,s,n.then(v.p),r.then(v.p)]).then((function(e){var t=l.takeRecords();return null!=t&&t.length&&(e=t[t.length-1]),te(e)})).catch(Object(v.q)("largest-contentful-paint"))}))}(e,c,n,o),a=function(e){return G(e,"scripts",{filter:F})}(e),f=function(e){return G(e,"images",{filter:W})}(e),s=function(e){return G(e,"fonts",{filter:U})}(e),l=Object(v.c)("loaded",c,u,a,f,s,M(e),q(e,c)).then((function(t){return Object.assign(t,oe(e)),i.then((function(n){var r=n.fcp;return Object.assign(t,He(e,r,t))})).catch((function(){return t}))})),d=function(e,t){var n=e[2];return Pe={cls:function(){return oe(e,!0)},lcp:function(){var e=ne(n,"largest-contentful-paint");return null==e?void 0:e.pop()}},t.then((function(t){var n=t.startTime,r=oe(e),i=te(Pe.lcp());return je(je(je({},r),i),{},{entryType:"crux",startTime:n,pn:Oe})}))}(e,n);return function(e){var t={};return n("lcp"),n("cls"),Object.defineProperties(e,t);function n(e){t[e]={value:function(){var t,n;return null==(t=Pe)||null==(n=t[e]())?void 0:n.element}}}}([t,i,l,o,n,he(e),d,De(e,d)].map((function(t){return t.then((function(t){return be(e[0],t)}))})))}([e,n,e.PerformanceObserver,e.setTimeout,e.clearTimeout]);Object(xe.a)(e,t,O.src,a),Object.freeze(a);var f=a.slice(0,3),l=a.slice(3,5);o||function(e,t){function n(e,t){return e.find((function(e){return e.entryType===t}))||{}}function r(t,n,r){if(n)return e.mark(t,{startTime:n,detail:r})}function i(t,n){n.end>n.start&&e.measure(t,n)}Object(v.b)(t).then((function(t){var o=n(t,"loaded"),c=o.tti,u=o.tbt,a=o.lcp;if(r(ke,c,u)){r(Me,a);var f=n(t,"initial-paint").fcp,s={end:a},l={end:c,detail:u},p=a<c?[f,a]:[c,f];s.start=p[0],l.start=p[1],i(Me,s),i(ke,l)}else e.clearMarks(ke)}),v.p)}(n,f);c&&function(e,t){Object(v.b)(e).then((function(e){return e.forEach(Ie)}),v.p),t.forEach((function(e){return e.then(Ie,v.p)}))}(f,l);e[u]=a,s(e,u,a)}(window)}])}));
//# sourceMappingURL=wix-perf-measure.bundle.min.js.map