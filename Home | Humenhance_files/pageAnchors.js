(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[77],{296:function(e,n,t){"use strict";t.r(n),t.d(n,"page",(function(){return g}));var r=t(0),o=t(30),c=t(359),a=t(356),i=t(368),u=t(363),d=t(263),l=t(41),s=t.n(l),f=t(7),h={compId:"PAGE_TOP_ANCHOR",dataId:"SCROLL_TO_TOP"},p=function(e){return{compId:e.compId,dataId:e.dataId}},v=function(e,n,t,o,c,a,i,u){void 0===u&&(u=!1);var d,l=t.anchors,v=o.siteOffset,b=function(){var e=c.document.getElementById("WIX_ADS");e&&(v+=e.offsetHeight),d=l.reduce((function(e,n){var t=c.document.getElementById(n.compId);return t&&e.push(Object(r.a)(Object(r.a)({},n),{element:t,top:void 0!==n.top?n.top:t.getBoundingClientRect().top||0})),e}),[]),g()},O=function(t){var r=function(e,n,t){if(t.innerHeight+t.scrollY>=t.document.body.scrollHeight)return e[e.length-1];var r=e.findIndex((function(e){return Math.floor(e.top-n)>0}));return-1===r&&e[e.length-1]?p(e[e.length-1]):0!==r&&e[r-1]?p(e[r-1]):h}(d,v,c);r&&a.update(function(e,n,t,r,o,c){var a={};if(n.length&&n.forEach((function(e){a[e.id]={activeAnchor:t}})),e.length){var i=r?r.map((function(e){return{compId:e.compId,dataId:e.dataId,name:e.name}})):[];e.forEach((function(e){if(a[e.id]={activeAnchor:t},c){var n=e.compData,r=n.pageTopLabel,u=n.hiddenAnchorIds,d=u&&u.hasOwnProperty(o)?u[o]:[],l={compId:"PAGE_TOP_ANCHOR",dataId:"SCROLL_TO_TOP",name:r||""},s=[l].concat(i).filter((function(e){return!d.includes(e.compId)}));a[e.id].anchors=s.length?s:[l]}}))}return a}(e,n,r,d,i,t))},g=function(){return d.sort((function(e,n){return e.top-n.top}))},m=function(e){u&&(!d||l.length>d.length)&&b(),d=d.map((function(e){return Object(r.a)(Object(r.a)({},e),{top:e.element.getBoundingClientRect().top||0})})),e&&g()},I=function(e){s.a.measure((function(){m(e),O(u)}))},j=Object(f.debounce)(I.bind(null,u),100),A=Object(f.debounce)(I.bind(null,!0),100);return function(){return s.a.measure((function(){b(),O(!0)})),c.addEventListener("scroll",j),c.addEventListener("resize",A),function(){c.removeEventListener("scroll",j),c.removeEventListener("resize",A)}}},b=Object(o.h)([Object(o.f)(c.d,d.a),Object(o.f)(c.c,d.a),a.c,i.b,u.e],(function(e,n,t,r,o){var c,a=e.pageAnchorsObservers.concat(n.pageAnchorsObservers),i=e.activeAnchorObservers.concat(n.activeAnchorObservers),u=v(a,i,e,n,t,r,o);return{pageDidMount:function(){(a.length||i.length)&&(c=u())},pageWillUnmount:function(){c&&c()}}})),O=(Object(o.h)([a.c,i.b],(function(e,n){var t;return{featureName:d.a,handlers:{onAnchorUpdate:function(o){var c=o.pageConfig,a=o.siteConfig,i=o.pageId;if(i){var u=Object(r.h)(Object(r.h)([],Object(r.e)((null==c?void 0:c.pageAnchorsObservers)||[])),Object(r.e)((null==a?void 0:a.pageAnchorsObservers)||[])),d=Object(r.h)(Object(r.h)([],Object(r.e)((null==c?void 0:c.activeAnchorObservers)||[])),Object(r.e)((null==a?void 0:a.activeAnchorObservers)||[])),l=u.length||d.length;if(t&&t(),l){var s=v(u,d,c,a,e,n,i,!0);t=s()}}}}}})),t(367)),g=function(e){e(O.a.PageDidMountHandler,O.a.PageWillUnmountHandler).to(b)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/pageAnchors.05e86b30.chunk.min.js.map