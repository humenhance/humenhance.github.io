(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[82],{204:function(e,n,t){"use strict";t.r(n),t.d(n,"page",(function(){return f})),t.d(n,"editorPage",(function(){return b})),t.d(n,"PlatformPubsubSymbol",(function(){return i.a})),t.d(n,"name",(function(){return i.b})),t.d(n,"TPA_PUB_SUB_PREFIX",(function(){return r.b})),t.d(n,"stripPubSubPrefix",(function(){return r.c}));var r=t(413),i=t(191),s=t(356),u=t(367),a=t(30),c=Object(a.h)([i.a],(function(e){return{getSdkHandlers:function(){return{publish:function(n,t,r,i){e.publish(n,"worker",{eventKey:t,isPersistent:i,eventData:r})},subscribe:function(n,t,r,i){e.subscribe(n,"worker",{eventKey:t,isPersistent:i},r)},unsubscribe:function(n,t){e.unsubscribe(n,"worker",t)}}}}})),o=Object(a.h)([i.a],(function(e){return{pageWillUnmount:function(){e.clearListenersBesideStubs()}}})),f=function(e){e(i.a).to(r.a),e(s.r).to(c),e(u.a.PageWillUnmountHandler).to(o)},b=f},413:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return f}));var r=t(0),i=t(30),s=t(356),u=t(363),a={},c="TPA_PUB_SUB_";function o(e){var n=new RegExp("^"+c);return e.replace(n,"")}var f=Object(i.h)([s.c,u.d],(function(e,n){function t(e,n){var t,r={persistentData:[],listeners:{}};return a[e]?a[e][n]||(a[e][n]=r):a[e]=((t={})[n]=r,t),a[e][n]}function i(e){Object.keys(a).forEach((function(n){Object.keys(a[n]).forEach((function(i){var s=t(n,i);Object.entries(s.listeners).forEach((function(n){var t=Object(r.e)(n,2),i=t[0],u=t[1];Object.keys(u).forEach((function(n){e(n,i)&&delete s.listeners[i][n]}))}))}))}))}return{publish:function(e,n,i){var s=o(i.eventKey),u=i.isPersistent,a=t(e,s),c=a.listeners;if(Object.entries(c).forEach((function(e){var t=Object(r.e)(e,2),u=t[0],a=t[1];return Object.keys(a).forEach((function(e){c[u][e].forEach((function(e){return e({data:i.eventData,name:s,origin:n})}))}))})),u){var f=i.eventData;a.persistentData.push({name:s,data:f})}},subscribe:function(e,r,i,s){var u=o(i.eventKey),a=t(e,u);a.listeners[n]||(a.listeners[n]={}),a.listeners[n][r]?"worker"===r&&a.listeners[n][r].push(s):a.listeners[n][r]=[s],i.isPersistent&&a.persistentData.length&&s({data:a.persistentData[0].data,name:u,origin:r},!0)},unsubscribe:function(e,n,r){var i=t(e,o(r));Object.keys(i.listeners).forEach((function(e){delete i.listeners[e][n]}))},handleIframeSubscribe:function(n,t,r){var i=r.eventKey,s=r.isPersistent,u=r.callId;this.subscribe(n,t,{eventKey:i,isPersistent:s},(function(n,r){void 0===r&&(r=!1),function(e,n,t){var r=t.document.getElementById(e);if(r){var i=r.getElementsByTagName("iframe")[0];i&&i.contentWindow&&i.contentWindow.postMessage(JSON.stringify(n),"*")}}(t,r?{intent:"TPA_RESPONSE",callId:u,type:"registerEventListener",res:{drain:!0,data:[n]},status:!0,compId:t}:{eventType:i,intent:"addEventListener",params:n},e)}))},clearListenersBesideStubs:function(){i((function(e,t){return!e.includes("tpapopup")&&!e.includes("tpaWorker")&&t===n&&"masterPage"!==t}))},clearListenersByCompId:function(e){i((function(n){return n===e}))}}}))}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/platformPubsub.1204c58e.chunk.min.js.map