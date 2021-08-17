(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[93],{288:function(t,n,e){"use strict";e.r(n),e.d(n,"editor",(function(){return I})),e.d(n,"page",(function(){return S}));var i=e(0),o=e(359),a=e(362),r=e(30),s=e(193),c=function(t){return t+"-screenIn"},u=function(){function t(t){this.animator=t,this.definitions={},this.sessionState={played:new Map,running:new Map}}return t.prototype._shouldSkipPlayedAnimation=function(t){var n=this.sessionState.played.has(t),e=this.sessionState.played.get(t)||{},i=e.playOnce,o=e.persistOnNav;return n&&(i||o)},t.prototype._hideComponent=function(t){var n=document.querySelector("#"+t);n&&(n.style.opacity=0)},t.prototype.unhideComponent=function(t){var n=document.querySelector("#"+t);n&&(n.style.opacity="",n.style.visibility="inherit")},t.prototype._addAnimatingClass=function(t){var n=document.getElementById(t);n&&n.classList.add("animating-screenIn")},t.prototype._addExitAnimatingClass=function(t){var n=document.getElementById(t);n&&(n.classList.remove("animating-screenIn"),n.classList.add("animating-screenIn-exit"))},t.prototype.updateDefinitions=function(t){this.definitions=Object(i.a)(Object(i.a)({},this.definitions),t)},t.prototype._hideCompBeforeAnimation=function(t){var n=c(t);this._shouldSkipPlayedAnimation(n)?this.unhideComponent(t):this._hideComponent(t)},t.prototype.hideBeforeAnimation=function(t){var n=this;this.getCompsToHide(t).forEach((function(t){var e=t.compId;n._hideCompBeforeAnimation(e)}))},t.prototype.handleRotation=function(t,n){t.setAttribute("data-angle",String(n)),t.setAttribute("data-angle-style-location","style")},t.prototype.trigger=function(t){var n=this;void 0===t&&(t=[]),t.reduce((function(t,e){var i=e.compId,o=n.definitions[i]||[];return t.concat(o)}),[]).forEach((function(t){var e=t.action,o=Object(i.f)(t,["action"]);return n.executeAnimation(e,o)}))},t.prototype.init=function(t){this.updateDefinitions(t),this.stopAnimations(),this.hideBeforeAnimation(t)},t.prototype.addDefinition=function(t,n,e){this.handleRotation(n,e),this.updateDefinitions(t)},t.prototype.executeAnimation=function(t,n){var e=this,i=n.name,o=n.targetId,a=n.duration,r=void 0===a?0:a,s=n.delay,u=void 0===s?0:s,d=n.playOnce,p=void 0!==d&&d,f=n.persistOnNav,l=void 0!==f&&f,m=n.params,h=void 0===m?{}:m,g=c(o);if(this._shouldSkipPlayedAnimation(g))this.unhideComponent(o);else{var v={name:i,targetId:o,duration:r,delay:u,params:h},b={name:"BaseClear",targetId:o,duration:0,delay:0,params:{props:"clip,clipPath,webkitClipPath,willChange,opacity,transform,transformOrigin",immediateRender:!1}};this.animator.runSequence([{type:"Animation",data:v},{type:"Animation",data:b}],{callbacks:{onStart:function(n){e._addAnimatingClass(o),e.sessionState.running.set(n,{targetId:o,action:t})},onComplete:function(t){e._addExitAnimatingClass(o),e.sessionState.running.delete(t)},onInterrupt:function(t){e._addExitAnimatingClass(o),e.sessionState.running.delete(t)}}}),this.sessionState.played.set(g,{playOnce:p,persistOnNav:l})}},t.prototype.stopAnimations=function(t){var n=this,e=(void 0===t?{}:t).skipPersistent,i=void 0===e||e;this.sessionState.running.forEach((function(t,e){var o=t.targetId,a=c(o);i&&n.sessionState.played.get(a).persistOnNav||n.animator.kill(e,1)}))},t.prototype.getAnimationProperties=function(t){return this.animator.getAnimationProperties(t)},t.prototype.getCompsToHide=function(t){var n=this;return Object.entries(t).reduce((function(t,e){var o=Object(i.e)(e,2),a=o[0];return o[1].some((function(t){var e=t.name,i=n.animator.getAnimationProperties(e);return i&&i.hideOnStart}))&&t.push({compId:a}),t}),[])},t.prototype.clearState=function(){this.sessionState.played.clear(),this.sessionState.running.clear()},t}(),d=e(194);function p(t){var n=t.manager,e={};function i(t){var e=t.filter((function(t){return t.visible})).map((function(t){return{compId:t.id,action:"screenIn"}}));n.trigger(e)}function o(t,n){var o=e[n]||function(t,n){var e={root:null,rootMargin:"0px",threshold:[n]};return new window.IntersectionObserver((function(n,e){var i=n.map((function(t){return{visible:t.isIntersecting,ratio:t.intersectionRatio,rect:t.intersectionRect,id:t.target.id}}));n.forEach((function(t){return t.isIntersecting&&e.unobserve(t.target)})),t(i)}),e)}(i,n);o.observe(t),e[n]||(e[n]=o)}return{start:function(t,e,i){var a=window.innerHeight;e&&o(e,e.offsetHeight>a?.01:function(t,n){return t.getAnimationProperties(n).viewportThreshold}(n,i))},stop:function(){Object.values(e).forEach((function(t){return t.disconnect()}))}}}var f=Object(r.h)([Object(r.f)(o.d,d.c),Object(r.f)(o.b,d.c),a.a,Object(r.g)(s.a)],(function(t,n,e,o){return function(){var a=t.compIdToActions,r=t.compIdToRotations;if(o){var s=o.getInstance().then((function(t){var e,o,r=null!==(o=null===(e=n.get())||void 0===e?void 0:e.screenInManager)&&void 0!==o?o:new u(t);r.init(a);var s=p({manager:r});return n.update((function(t){return Object(i.a)(Object(i.a)({},t),{screenInManager:r,viewport:s})})),{animations:s,screenInManager:r}}));return function(t,n,o){return Object(i.b)(void 0,void 0,void 0,(function(){var c,u,d,p,f,l;return Object(i.d)(this,(function(i){switch(i.label){case 0:return o?[4,s]:[2];case 1:return c=i.sent(),u=c.animations,d=c.screenInManager,e?(d.unhideComponent(t),[2]):(p=a[t],n!==t&&((f=JSON.parse(JSON.stringify(p)))[0].targetId=n,p=f),d.addDefinition(((l={})[n]=p,l),o,r[t]),u.start(n,o,p[0].name),[2])}}))}))}}}})),l=e(373),m=Object(r.h)([Object(r.f)(o.d,d.c),d.b,l.a],(function(t,n,e){return{pageWillMount:function(){var i=n();if(i){var o=Object.keys(t.compIdToActions||{});e.registerToCompLifeCycle(o,d.a,i)}}}})),h=Object(r.h)([Object(r.f)(o.d,d.c),Object(r.f)(o.b,d.c),l.a,a.a],(function(t,n,e,i){return{pageWillUnmount:function(){var o;if(!i){var a=Object.keys(t.compIdToActions||{});e.unregisterToCompLifeCycle(a,d.a),null===(o=n.get())||void 0===o||o.viewport.stop()}}}})),g=e(367),v=e(383),b=Symbol("DSViewModeAPISymbol"),y=Object(r.h)([Object(r.f)(o.d,d.c),Object(r.f)(o.b,d.c),d.b,l.a,v.a,b],(function(t,n,e,o,a,r){var s=new Set,c=!1,u="desktop",p={};function f(t){p={},s.size&&(o.unregisterToCompLifeCycle(Object(i.h)([],Object(i.e)(s)),"ScreenInDSCallback"),s.clear());var e=n.get();e&&(e.viewport.stop(),t&&e.screenInManager.clearState())}function l(n){var d=n.shouldEnableScreenIn,l=n.viewMode;if(u=l,c=d){var m=Object.keys(t.compIdToActions||{}),h=r.isDuringViewModeSwitch();m.forEach((function(t){return s.add(t)})),o.registerToCompLifeCycle(m,"ScreenInDSCallback",(function(t,n,e){p[t]=[n,e]})),a.registerToRenderDone((function(){h&&f(!0);var t=e();t&&m.forEach((function(n){var e=Object(i.e)(p[n],2),o=e[0],a=e[1];t(n,o,a)}))}),{once:!0})}else f(!c)}return{featureName:d.c,appWillLoadPage:function(){f(!c),l({shouldEnableScreenIn:c,viewMode:u})},handlers:{toggleScreenIn:l}}})),O=e(382),I=function(t){t(d.b).to(f),t(O.a,g.a.AppWillLoadPageHandler).to(y)},S=function(t){t(d.b).to(f),t(g.a.PageWillMountHandler).to(m),t(g.a.PageWillUnmountHandler).to(h)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/screenIn.bd1a0925.chunk.min.js.map