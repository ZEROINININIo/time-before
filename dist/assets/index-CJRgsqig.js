(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))c(b);new MutationObserver(b=>{for(const _ of b)if(_.type==="childList")for(const H of _.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&c(H)}).observe(document,{childList:!0,subtree:!0});function p(b){const _={};return b.integrity&&(_.integrity=b.integrity),b.referrerPolicy&&(_.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?_.credentials="include":b.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function c(b){if(b.ep)return;b.ep=!0;const _=p(b);fetch(b.href,_)}})();function jf(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Sr={exports:{}},Tn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function fb(){if(Jh)return Tn;Jh=1;var d=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function p(c,b,_){var H=null;if(_!==void 0&&(H=""+_),b.key!==void 0&&(H=""+b.key),"key"in b){_={};for(var S in b)S!=="key"&&(_[S]=b[S])}else _=b;return b=_.ref,{$$typeof:d,type:c,key:H,ref:b!==void 0?b:null,props:_}}return Tn.Fragment=x,Tn.jsx=p,Tn.jsxs=p,Tn}var Wh;function mb(){return Wh||(Wh=1,Sr.exports=fb()),Sr.exports}var i=mb(),Er={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function bb(){if(Fh)return ie;Fh=1;var d=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),H=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),M=Symbol.iterator;function U(f){return f===null||typeof f!="object"?null:(f=M&&f[M]||f["@@iterator"],typeof f=="function"?f:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,te={};function se(f,A,Y){this.props=f,this.context=A,this.refs=te,this.updater=Y||R}se.prototype.isReactComponent={},se.prototype.setState=function(f,A){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,A,"setState")},se.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function le(){}le.prototype=se.prototype;function ae(f,A,Y){this.props=f,this.context=A,this.refs=te,this.updater=Y||R}var ve=ae.prototype=new le;ve.constructor=ae,G(ve,se.prototype),ve.isPureReactComponent=!0;var Q=Array.isArray;function W(){}var B={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function I(f,A,Y){var q=Y.ref;return{$$typeof:d,type:f,key:A,ref:q!==void 0?q:null,props:Y}}function P(f,A){return I(f.type,A,f.props)}function ce(f){return typeof f=="object"&&f!==null&&f.$$typeof===d}function oe(f){var A={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(Y){return A[Y]})}var J=/\/+/g;function de(f,A){return typeof f=="object"&&f!==null&&f.key!=null?oe(""+f.key):A.toString(36)}function fe(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(W,W):(f.status="pending",f.then(function(A){f.status==="pending"&&(f.status="fulfilled",f.value=A)},function(A){f.status==="pending"&&(f.status="rejected",f.reason=A)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function w(f,A,Y,q,ne){var he=typeof f;(he==="undefined"||he==="boolean")&&(f=null);var je=!1;if(f===null)je=!0;else switch(he){case"bigint":case"string":case"number":je=!0;break;case"object":switch(f.$$typeof){case d:case x:je=!0;break;case D:return je=f._init,w(je(f._payload),A,Y,q,ne)}}if(je)return ne=ne(f),je=q===""?"."+de(f,0):q,Q(ne)?(Y="",je!=null&&(Y=je.replace(J,"$&/")+"/"),w(ne,A,Y,"",function(Dl){return Dl})):ne!=null&&(ce(ne)&&(ne=P(ne,Y+(ne.key==null||f&&f.key===ne.key?"":(""+ne.key).replace(J,"$&/")+"/")+je)),A.push(ne)),1;je=0;var tt=q===""?".":q+":";if(Q(f))for(var Ve=0;Ve<f.length;Ve++)q=f[Ve],he=tt+de(q,Ve),je+=w(q,A,Y,he,ne);else if(Ve=U(f),typeof Ve=="function")for(f=Ve.call(f),Ve=0;!(q=f.next()).done;)q=q.value,he=tt+de(q,Ve++),je+=w(q,A,Y,he,ne);else if(he==="object"){if(typeof f.then=="function")return w(fe(f),A,Y,q,ne);throw A=String(f),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return je}function L(f,A,Y){if(f==null)return f;var q=[],ne=0;return w(f,q,"","",function(he){return A.call(Y,he,ne++)}),q}function X(f){if(f._status===-1){var A=f._result;A=A(),A.then(function(Y){(f._status===0||f._status===-1)&&(f._status=1,f._result=Y)},function(Y){(f._status===0||f._status===-1)&&(f._status=2,f._result=Y)}),f._status===-1&&(f._status=0,f._result=A)}if(f._status===1)return f._result.default;throw f._result}var me=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},xe={map:L,forEach:function(f,A,Y){L(f,function(){A.apply(this,arguments)},Y)},count:function(f){var A=0;return L(f,function(){A++}),A},toArray:function(f){return L(f,function(A){return A})||[]},only:function(f){if(!ce(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return ie.Activity=T,ie.Children=xe,ie.Component=se,ie.Fragment=p,ie.Profiler=b,ie.PureComponent=ae,ie.StrictMode=c,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ie.__COMPILER_RUNTIME={__proto__:null,c:function(f){return B.H.useMemoCache(f)}},ie.cache=function(f){return function(){return f.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(f,A,Y){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var q=G({},f.props),ne=f.key;if(A!=null)for(he in A.key!==void 0&&(ne=""+A.key),A)!O.call(A,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&A.ref===void 0||(q[he]=A[he]);var he=arguments.length-2;if(he===1)q.children=Y;else if(1<he){for(var je=Array(he),tt=0;tt<he;tt++)je[tt]=arguments[tt+2];q.children=je}return I(f.type,ne,q)},ie.createContext=function(f){return f={$$typeof:H,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:_,_context:f},f},ie.createElement=function(f,A,Y){var q,ne={},he=null;if(A!=null)for(q in A.key!==void 0&&(he=""+A.key),A)O.call(A,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ne[q]=A[q]);var je=arguments.length-2;if(je===1)ne.children=Y;else if(1<je){for(var tt=Array(je),Ve=0;Ve<je;Ve++)tt[Ve]=arguments[Ve+2];ne.children=tt}if(f&&f.defaultProps)for(q in je=f.defaultProps,je)ne[q]===void 0&&(ne[q]=je[q]);return I(f,he,ne)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(f){return{$$typeof:S,render:f}},ie.isValidElement=ce,ie.lazy=function(f){return{$$typeof:D,_payload:{_status:-1,_result:f},_init:X}},ie.memo=function(f,A){return{$$typeof:h,type:f,compare:A===void 0?null:A}},ie.startTransition=function(f){var A=B.T,Y={};B.T=Y;try{var q=f(),ne=B.S;ne!==null&&ne(Y,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(W,me)}catch(he){me(he)}finally{A!==null&&Y.types!==null&&(A.types=Y.types),B.T=A}},ie.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ie.use=function(f){return B.H.use(f)},ie.useActionState=function(f,A,Y){return B.H.useActionState(f,A,Y)},ie.useCallback=function(f,A){return B.H.useCallback(f,A)},ie.useContext=function(f){return B.H.useContext(f)},ie.useDebugValue=function(){},ie.useDeferredValue=function(f,A){return B.H.useDeferredValue(f,A)},ie.useEffect=function(f,A){return B.H.useEffect(f,A)},ie.useEffectEvent=function(f){return B.H.useEffectEvent(f)},ie.useId=function(){return B.H.useId()},ie.useImperativeHandle=function(f,A,Y){return B.H.useImperativeHandle(f,A,Y)},ie.useInsertionEffect=function(f,A){return B.H.useInsertionEffect(f,A)},ie.useLayoutEffect=function(f,A){return B.H.useLayoutEffect(f,A)},ie.useMemo=function(f,A){return B.H.useMemo(f,A)},ie.useOptimistic=function(f,A){return B.H.useOptimistic(f,A)},ie.useReducer=function(f,A,Y){return B.H.useReducer(f,A,Y)},ie.useRef=function(f){return B.H.useRef(f)},ie.useState=function(f){return B.H.useState(f)},ie.useSyncExternalStore=function(f,A,Y){return B.H.useSyncExternalStore(f,A,Y)},ie.useTransition=function(){return B.H.useTransition()},ie.version="19.2.3",ie}var Ph;function Yr(){return Ph||(Ph=1,Er.exports=bb()),Er.exports}var V=Yr();const Sf=jf(V);var wr={exports:{}},zn={},_r={exports:{}},Tr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function gb(){return ef||(ef=1,(function(d){function x(w,L){var X=w.length;w.push(L);e:for(;0<X;){var me=X-1>>>1,xe=w[me];if(0<b(xe,L))w[me]=L,w[X]=xe,X=me;else break e}}function p(w){return w.length===0?null:w[0]}function c(w){if(w.length===0)return null;var L=w[0],X=w.pop();if(X!==L){w[0]=X;e:for(var me=0,xe=w.length,f=xe>>>1;me<f;){var A=2*(me+1)-1,Y=w[A],q=A+1,ne=w[q];if(0>b(Y,X))q<xe&&0>b(ne,Y)?(w[me]=ne,w[q]=X,me=q):(w[me]=Y,w[A]=X,me=A);else if(q<xe&&0>b(ne,X))w[me]=ne,w[q]=X,me=q;else break e}}return L}function b(w,L){var X=w.sortIndex-L.sortIndex;return X!==0?X:w.id-L.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;d.unstable_now=function(){return _.now()}}else{var H=Date,S=H.now();d.unstable_now=function(){return H.now()-S}}var y=[],h=[],D=1,T=null,M=3,U=!1,R=!1,G=!1,te=!1,se=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function ve(w){for(var L=p(h);L!==null;){if(L.callback===null)c(h);else if(L.startTime<=w)c(h),L.sortIndex=L.expirationTime,x(y,L);else break;L=p(h)}}function Q(w){if(G=!1,ve(w),!R)if(p(y)!==null)R=!0,W||(W=!0,oe());else{var L=p(h);L!==null&&fe(Q,L.startTime-w)}}var W=!1,B=-1,O=5,I=-1;function P(){return te?!0:!(d.unstable_now()-I<O)}function ce(){if(te=!1,W){var w=d.unstable_now();I=w;var L=!0;try{e:{R=!1,G&&(G=!1,le(B),B=-1),U=!0;var X=M;try{t:{for(ve(w),T=p(y);T!==null&&!(T.expirationTime>w&&P());){var me=T.callback;if(typeof me=="function"){T.callback=null,M=T.priorityLevel;var xe=me(T.expirationTime<=w);if(w=d.unstable_now(),typeof xe=="function"){T.callback=xe,ve(w),L=!0;break t}T===p(y)&&c(y),ve(w)}else c(y);T=p(y)}if(T!==null)L=!0;else{var f=p(h);f!==null&&fe(Q,f.startTime-w),L=!1}}break e}finally{T=null,M=X,U=!1}L=void 0}}finally{L?oe():W=!1}}}var oe;if(typeof ae=="function")oe=function(){ae(ce)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,de=J.port2;J.port1.onmessage=ce,oe=function(){de.postMessage(null)}}else oe=function(){se(ce,0)};function fe(w,L){B=se(function(){w(d.unstable_now())},L)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(w){w.callback=null},d.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<w?Math.floor(1e3/w):5},d.unstable_getCurrentPriorityLevel=function(){return M},d.unstable_next=function(w){switch(M){case 1:case 2:case 3:var L=3;break;default:L=M}var X=M;M=L;try{return w()}finally{M=X}},d.unstable_requestPaint=function(){te=!0},d.unstable_runWithPriority=function(w,L){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var X=M;M=w;try{return L()}finally{M=X}},d.unstable_scheduleCallback=function(w,L,X){var me=d.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,w){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=X+xe,w={id:D++,callback:L,priorityLevel:w,startTime:X,expirationTime:xe,sortIndex:-1},X>me?(w.sortIndex=X,x(h,w),p(y)===null&&w===p(h)&&(G?(le(B),B=-1):G=!0,fe(Q,X-me))):(w.sortIndex=xe,x(y,w),R||U||(R=!0,W||(W=!0,oe()))),w},d.unstable_shouldYield=P,d.unstable_wrapCallback=function(w){var L=M;return function(){var X=M;M=L;try{return w.apply(this,arguments)}finally{M=X}}}})(Tr)),Tr}var tf;function xb(){return tf||(tf=1,_r.exports=gb()),_r.exports}var zr={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function pb(){if(af)return et;af=1;var d=Yr();function x(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)h+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var c={d:{f:p,r:function(){throw Error(x(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},b=Symbol.for("react.portal");function _(y,h,D){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:T==null?null:""+T,children:y,containerInfo:h,implementation:D}}var H=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,et.createPortal=function(y,h){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(x(299));return _(y,h,null,D)},et.flushSync=function(y){var h=H.T,D=c.p;try{if(H.T=null,c.p=2,y)return y()}finally{H.T=h,c.p=D,c.d.f()}},et.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(y,h))},et.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},et.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var D=h.as,T=S(D,h.crossOrigin),M=typeof h.integrity=="string"?h.integrity:void 0,U=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;D==="style"?c.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:T,integrity:M,fetchPriority:U}):D==="script"&&c.d.X(y,{crossOrigin:T,integrity:M,fetchPriority:U,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},et.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var D=S(h.as,h.crossOrigin);c.d.M(y,{crossOrigin:D,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(y)},et.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var D=h.as,T=S(D,h.crossOrigin);c.d.L(y,D,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},et.preloadModule=function(y,h){if(typeof y=="string")if(h){var D=S(h.as,h.crossOrigin);c.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:D,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(y)},et.requestFormReset=function(y){c.d.r(y)},et.unstable_batchedUpdates=function(y,h){return y(h)},et.useFormState=function(y,h,D){return H.H.useFormState(y,h,D)},et.useFormStatus=function(){return H.H.useHostTransitionStatus()},et.version="19.2.3",et}var lf;function yb(){if(lf)return zr.exports;lf=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(x){console.error(x)}}return d(),zr.exports=pb(),zr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function vb(){if(nf)return zn;nf=1;var d=xb(),x=Yr(),p=yb();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function H(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(_(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return y(n),e;if(s===l)return y(n),t;s=s.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=s;else{for(var o=!1,r=n.child;r;){if(r===a){o=!0,a=n,l=s;break}if(r===l){o=!0,l=n,a=s;break}r=r.sibling}if(!o){for(r=s.child;r;){if(r===a){o=!0,a=s,l=n;break}if(r===l){o=!0,l=s,a=n;break}r=r.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,M=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function de(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case se:return"Profiler";case te:return"StrictMode";case Q:return"Suspense";case W:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case ae:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}var fe=Array.isArray,w=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},me=[],xe=-1;function f(e){return{current:e}}function A(e){0>xe||(e.current=me[xe],me[xe]=null,xe--)}function Y(e,t){xe++,me[xe]=e.current,e.current=t}var q=f(null),ne=f(null),he=f(null),je=f(null);function tt(e,t){switch(Y(he,t),Y(ne,e),Y(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yh(t),e=vh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(q),Y(q,e)}function Ve(){A(q),A(ne),A(he)}function Dl(e){e.memoizedState!==null&&Y(je,e);var t=q.current,a=vh(t,e.type);t!==a&&(Y(ne,e),Y(q,a))}function On(e){ne.current===e&&(A(q),A(ne)),je.current===e&&(A(je),Sn._currentValue=X)}var ns,$r;function za(e){if(ns===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ns=t&&t[1]||"",$r=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ns+e+$r}var is=!1;function ss(e,t){if(!e||is)return"";is=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(E){var j=E}Reflect.construct(e,[],C)}else{try{C.call()}catch(E){j=E}e.call(C.prototype)}}else{try{throw Error()}catch(E){j=E}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(E){if(E&&j&&typeof E.stack=="string")return[E.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),o=s[0],r=s[1];if(o&&r){var u=o.split(`
`),N=r.split(`
`);for(n=l=0;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(l===u.length||n===N.length)for(l=u.length-1,n=N.length-1;1<=l&&0<=n&&u[l]!==N[n];)n--;for(;1<=l&&0<=n;l--,n--)if(u[l]!==N[n]){if(l!==1||n!==1)do if(l--,n--,0>n||u[l]!==N[n]){var z=`
`+u[l].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=l&&0<=n);break}}}finally{is=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?za(a):""}function Zf(e,t){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return e.child!==t&&t!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return ss(e.type,!1);case 11:return ss(e.type.render,!1);case 1:return ss(e.type,!0);case 31:return za("Activity");default:return""}}function Jr(e){try{var t="",a=null;do t+=Zf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var os=Object.prototype.hasOwnProperty,rs=d.unstable_scheduleCallback,cs=d.unstable_cancelCallback,If=d.unstable_shouldYield,Xf=d.unstable_requestPaint,ut=d.unstable_now,Qf=d.unstable_getCurrentPriorityLevel,Wr=d.unstable_ImmediatePriority,Fr=d.unstable_UserBlockingPriority,Rn=d.unstable_NormalPriority,Kf=d.unstable_LowPriority,Pr=d.unstable_IdlePriority,$f=d.log,Jf=d.unstable_setDisableYieldValue,Ol=null,dt=null;function aa(e){if(typeof $f=="function"&&Jf(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Ol,e)}catch{}}var ht=Math.clz32?Math.clz32:Pf,Wf=Math.log,Ff=Math.LN2;function Pf(e){return e>>>=0,e===0?32:31-(Wf(e)/Ff|0)|0}var Un=256,Hn=262144,Ln=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~s,l!==0?n=ka(l):(o&=r,o!==0?n=ka(o):a||(a=r&~e,a!==0&&(n=ka(a))))):(r=l&~s,r!==0?n=ka(r):o!==0?n=ka(o):a||(a=l&~e,a!==0&&(n=ka(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function Rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function e0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(){var e=Ln;return Ln<<=1,(Ln&62914560)===0&&(Ln=4194304),e}function us(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,t,a,l,n,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,u=e.expirationTimes,N=e.hiddenUpdates;for(a=o&~a;0<a;){var z=31-ht(a),C=1<<z;r[z]=0,u[z]=-1;var j=N[z];if(j!==null)for(N[z]=null,z=0;z<j.length;z++){var E=j[z];E!==null&&(E.lane&=-536870913)}a&=~C}l!==0&&tc(e,l,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function tc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ht(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ac(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ht(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function lc(e,t){var a=t&-t;return a=(a&42)!==0?1:ds(a),(a&(e.suspendedLanes|t))!==0?0:a}function ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nc(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:qh(e.type))}function ic(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var la=Math.random().toString(36).slice(2),$e="__reactFiber$"+la,lt="__reactProps$"+la,Ka="__reactContainer$"+la,fs="__reactEvents$"+la,a0="__reactListeners$"+la,l0="__reactHandles$"+la,sc="__reactResources$"+la,Hl="__reactMarker$"+la;function ms(e){delete e[$e],delete e[lt],delete e[fs],delete e[a0],delete e[l0]}function $a(e){var t=e[$e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ka]||a[$e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Th(e);e!==null;){if(a=e[$e])return a;e=Th(e)}return t}e=a,a=e.parentNode}return null}function Ja(e){if(e=e[$e]||e[Ka]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ll(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Wa(e){var t=e[sc];return t||(t=e[sc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Hl]=!0}var oc=new Set,rc={};function Aa(e,t){Fa(e,t),Fa(e+"Capture",t)}function Fa(e,t){for(rc[e]=t,e=0;e<t.length;e++)oc.add(t[e])}var n0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cc={},uc={};function i0(e){return os.call(uc,e)?!0:os.call(cc,e)?!1:n0.test(e)?uc[e]=!0:(cc[e]=!0,!1)}function Bn(e,t,a){if(i0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Lt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function s0(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){if(!e._valueTracker){var t=dc(e)?"checked":"value";e._valueTracker=s0(e,t,""+e[t])}}function hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=dc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var o0=/[\n"\\]/g;function Nt(e){return e.replace(o0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gs(e,t,a,l,n,s,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?xs(e,o,vt(t)):a!=null?xs(e,o,vt(a)):l!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+vt(r):e.removeAttribute("name")}function fc(e,t,a,l,n,s,o,r){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){bs(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),bs(e)}function xs(e,t,a){t==="number"&&Yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function mc(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function bc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(fe(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),bs(e)}function el(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var r0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||r0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function xc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&gc(e,n,l)}else for(var s in t)t.hasOwnProperty(s)&&gc(e,s,t[s])}function ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),u0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(e){return u0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vt(){}var ys=null;function vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,al=null;function pc(e){var t=Ja(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(gs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[lt]||null;if(!n)throw Error(c(90));gs(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&hc(l)}break e;case"textarea":mc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var Ns=!1;function yc(e,t,a){if(Ns)return e(t,a);Ns=!0;try{var l=e(t);return l}finally{if(Ns=!1,(tl!==null||al!==null)&&(Ai(),tl&&(t=tl,e=al,al=tl=null,pc(t),e)))for(t=0;t<e.length;t++)pc(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=!1;if(Bt)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){js=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{js=!1}var na=null,Ss=null,Zn=null;function vc(){if(Zn)return Zn;var e,t=Ss,a=t.length,l,n="value"in na?na.value:na.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[s-l];l++);return Zn=n.slice(e,1<l?1-l:void 0)}function In(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function Nc(){return!1}function nt(e){function t(a,l,n,s,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(s):s[r]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xn:Nc,this.isPropagationStopped=Nc,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qn=nt(Ma),Gl=T({},Ma,{view:0,detail:0}),d0=nt(Gl),Es,ws,Yl,Kn=T({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(Es=e.screenX-Yl.screenX,ws=e.screenY-Yl.screenY):ws=Es=0,Yl=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),jc=nt(Kn),h0=T({},Kn,{dataTransfer:0}),f0=nt(h0),m0=T({},Gl,{relatedTarget:0}),_s=nt(m0),b0=T({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=nt(b0),x0=T({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p0=nt(x0),y0=T({},Ma,{data:0}),Sc=nt(y0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j0[e])?!!t[e]:!1}function Ts(){return S0}var E0=T({},Gl,{key:function(e){if(e.key){var t=v0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w0=nt(E0),_0=T({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=nt(_0),T0=T({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),z0=nt(T0),k0=T({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=nt(k0),M0=T({},Kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=nt(M0),D0=T({},Ma,{newState:0,oldState:0}),O0=nt(D0),R0=[9,13,27,32],zs=Bt&&"CompositionEvent"in window,ql=null;Bt&&"documentMode"in document&&(ql=document.documentMode);var U0=Bt&&"TextEvent"in window&&!ql,wc=Bt&&(!zs||ql&&8<ql&&11>=ql),_c=" ",Tc=!1;function zc(e,t){switch(e){case"keyup":return R0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function H0(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(Tc=!0,_c);case"textInput":return e=t.data,e===_c&&Tc?null:e;default:return null}}function L0(e,t){if(ll)return e==="compositionend"||!zs&&zc(e,t)?(e=vc(),Zn=Ss=na=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function Mc(e,t,a,l){tl?al?al.push(l):al=[l]:tl=l,t=Hi(t,"onChange"),0<t.length&&(a=new Qn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Zl=null,Il=null;function B0(e){fh(e,0)}function $n(e){var t=Ll(e);if(hc(t))return e}function Cc(e,t){if(e==="change")return t}var Dc=!1;if(Bt){var ks;if(Bt){var As="oninput"in document;if(!As){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),As=typeof Oc.oninput=="function"}ks=As}else ks=!1;Dc=ks&&(!document.documentMode||9<document.documentMode)}function Rc(){Zl&&(Zl.detachEvent("onpropertychange",Uc),Il=Zl=null)}function Uc(e){if(e.propertyName==="value"&&$n(Il)){var t=[];Mc(t,Il,e,vs(e)),yc(B0,t)}}function G0(e,t,a){e==="focusin"?(Rc(),Zl=t,Il=a,Zl.attachEvent("onpropertychange",Uc)):e==="focusout"&&Rc()}function Y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $n(Il)}function q0(e,t){if(e==="click")return $n(t)}function Z0(e,t){if(e==="input"||e==="change")return $n(t)}function I0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:I0;function Xl(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!os.call(t,n)||!ft(e[n],t[n]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,t){var a=Hc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hc(a)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Yn(e.document)}return t}function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var X0=Bt&&"documentMode"in document&&11>=document.documentMode,nl=null,Cs=null,Ql=null,Ds=!1;function Gc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ds||nl==null||nl!==Yn(l)||(l=nl,"selectionStart"in l&&Ms(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Xl(Ql,l)||(Ql=l,l=Hi(Cs,"onSelect"),0<l.length&&(t=new Qn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=nl)))}function Ca(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var il={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Os={},Yc={};Bt&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function Da(e){if(Os[e])return Os[e];if(!il[e])return e;var t=il[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yc)return Os[e]=t[a];return e}var qc=Da("animationend"),Zc=Da("animationiteration"),Ic=Da("animationstart"),Q0=Da("transitionrun"),K0=Da("transitionstart"),$0=Da("transitioncancel"),Xc=Da("transitionend"),Qc=new Map,Rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rs.push("scrollEnd");function Mt(e,t){Qc.set(e,t),Aa(t,[e])}var Jn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jt=[],sl=0,Us=0;function Wn(){for(var e=sl,t=Us=sl=0;t<e;){var a=jt[t];jt[t++]=null;var l=jt[t];jt[t++]=null;var n=jt[t];jt[t++]=null;var s=jt[t];if(jt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}s!==0&&Kc(a,n,s)}}function Fn(e,t,a,l){jt[sl++]=e,jt[sl++]=t,jt[sl++]=a,jt[sl++]=l,Us|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hs(e,t,a,l){return Fn(e,t,a,l),Pn(e)}function Oa(e,t){return Fn(e,null,null,t),Pn(e)}function Kc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-ht(a),e=s.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),s):null}function Pn(e){if(50<gn)throw gn=0,Qo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ol={};function J0(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,l){return new J0(e,t,a,l)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $c(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,l,n,s){var o=0;if(l=e,typeof e=="function")Ls(e)&&(o=1);else if(typeof e=="string")o=tb(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=mt(31,a,t,n),e.elementType=I,e.lanes=s,e;case G:return Ra(a.children,n,s,t);case te:o=8,n|=24;break;case se:return e=mt(12,a,t,n|2),e.elementType=se,e.lanes=s,e;case Q:return e=mt(13,a,t,n),e.elementType=Q,e.lanes=s,e;case W:return e=mt(19,a,t,n),e.elementType=W,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:o=10;break e;case le:o=9;break e;case ve:o=11;break e;case B:o=14;break e;case O:o=16,l=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=mt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=s,t}function Ra(e,t,a,l){return e=mt(7,e,l,t),e.lanes=a,e}function Vs(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function Jc(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function Bs(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wc=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var a=Wc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Jr(t)},Wc.set(e,t),t)}return{value:e,source:t,stack:Jr(t)}}var rl=[],cl=0,ti=null,Kl=0,Et=[],wt=0,ia=null,Ot=1,Rt="";function Yt(e,t){rl[cl++]=Kl,rl[cl++]=ti,ti=e,Kl=t}function Fc(e,t,a){Et[wt++]=Ot,Et[wt++]=Rt,Et[wt++]=ia,ia=e;var l=Ot;e=Rt;var n=32-ht(l)-1;l&=~(1<<n),a+=1;var s=32-ht(t)+n;if(30<s){var o=n-n%5;s=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Ot=1<<32-ht(t)+n|a<<n|l,Rt=s+e}else Ot=1<<s|a<<n|l,Rt=e}function Gs(e){e.return!==null&&(Yt(e,1),Fc(e,1,0))}function Ys(e){for(;e===ti;)ti=rl[--cl],rl[cl]=null,Kl=rl[--cl],rl[cl]=null;for(;e===ia;)ia=Et[--wt],Et[wt]=null,Rt=Et[--wt],Et[wt]=null,Ot=Et[--wt],Et[wt]=null}function Pc(e,t){Et[wt++]=Ot,Et[wt++]=Rt,Et[wt++]=ia,Ot=t.id,Rt=t.overflow,ia=e}var Je=null,De=null,Ne=!1,sa=null,_t=!1,qs=Error(c(519));function oa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $l(St(t,e)),qs}function eu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[$e]=e,t[lt]=l,a){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(a=0;a<pn.length;a++)ge(pn[a],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),fc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),bc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||xh(t.textContent,a)?(l.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),l.onScroll!=null&&ge("scroll",t),l.onScrollEnd!=null&&ge("scrollend",t),l.onClick!=null&&(t.onclick=Vt),t=!0):t=!1,t||oa(e,!0)}function tu(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:Je=Je.return}}function ul(e){if(e!==Je)return!1;if(!Ne)return tu(e),Ne=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rr(e.type,e.memoizedProps)),a=!a),a&&De&&oa(e),tu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));De=_h(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));De=_h(e)}else t===27?(t=De,Na(e.type)?(e=fr,fr=null,De=e):De=t):De=Je?zt(e.stateNode.nextSibling):null;return!0}function Ua(){De=Je=null,Ne=!1}function Zs(){var e=sa;return e!==null&&(rt===null?rt=e:rt.push.apply(rt,e),sa=null),e}function $l(e){sa===null?sa=[e]:sa.push(e)}var Is=f(null),Ha=null,qt=null;function ra(e,t,a){Y(Is,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Is.current,A(Is)}function Xs(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Qs(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var o=n.child;s=s.firstContext;e:for(;s!==null;){var r=s;s=n;for(var u=0;u<t.length;u++)if(r.context===t[u]){s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Xs(s.return,a,e),l||(o=null);break e}s=r.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(c(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),Xs(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function dl(e,t,a,l){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var r=n.type;ft(n.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(n===je.current){if(o=n.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Sn):e=[Sn])}n=n.return}e!==null&&Qs(t,e,a,l),t.flags|=262144}function ai(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){Ha=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return au(Ha,e)}function li(e,t){return Ha===null&&La(e),au(e,t)}function au(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(c(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var W0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},F0=d.unstable_scheduleCallback,P0=d.unstable_NormalPriority,Ye={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ks(){return{controller:new W0,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&F0(P0,function(){e.controller.abort()})}var Wl=null,$s=0,hl=0,fl=null;function em(e,t){if(Wl===null){var a=Wl=[];$s=0,hl=Po(),fl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $s++,t.then(lu,lu),t}function lu(){if(--$s===0&&Wl!==null){fl!==null&&(fl.status="fulfilled");var e=Wl;Wl=null,hl=0,fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var nu=w.S;w.S=function(e,t){Gd=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&em(e,t),nu!==null&&nu(e,t)};var Va=f(null);function Js(){var e=Va.current;return e!==null?e:Ce.pooledCache}function ni(e,t){t===null?Y(Va,Va.current):Y(Va,t.pool)}function iu(){var e=Js();return e===null?null:{parent:Ye._currentValue,pool:e}}var ml=Error(c(460)),Ws=Error(c(474)),ii=Error(c(542)),si={then:function(){}};function su(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ou(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Vt,Vt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cu(e),e;default:if(typeof t.status=="string")t.then(Vt,Vt);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cu(e),e}throw Ga=t,ml}}function Ba(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,ml):a}}var Ga=null;function ru(){if(Ga===null)throw Error(c(459));var e=Ga;return Ga=null,e}function cu(e){if(e===ml||e===ii)throw Error(c(483))}var bl=null,Fl=0;function oi(e){var t=Fl;return Fl+=1,bl===null&&(bl=[]),ou(bl,e,t)}function Pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ri(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uu(e){function t(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function a(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function l(g){for(var m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function n(g,m){return g=Gt(g,m),g.index=0,g.sibling=null,g}function s(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=67108866,m):v):(g.flags|=67108866,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function r(g,m,v,k){return m===null||m.tag!==6?(m=Vs(v,g.mode,k),m.return=g,m):(m=n(m,v),m.return=g,m)}function u(g,m,v,k){var F=v.type;return F===G?z(g,m,v.props.children,k,v.key):m!==null&&(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===O&&Ba(F)===m.type)?(m=n(m,v.props),Pl(m,v),m.return=g,m):(m=ei(v.type,v.key,v.props,null,g.mode,k),Pl(m,v),m.return=g,m)}function N(g,m,v,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Bs(v,g.mode,k),m.return=g,m):(m=n(m,v.children||[]),m.return=g,m)}function z(g,m,v,k,F){return m===null||m.tag!==7?(m=Ra(v,g.mode,k,F),m.return=g,m):(m=n(m,v),m.return=g,m)}function C(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Vs(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case U:return v=ei(m.type,m.key,m.props,null,g.mode,v),Pl(v,m),v.return=g,v;case R:return m=Bs(m,g.mode,v),m.return=g,m;case O:return m=Ba(m),C(g,m,v)}if(fe(m)||oe(m))return m=Ra(m,g.mode,v,null),m.return=g,m;if(typeof m.then=="function")return C(g,oi(m),v);if(m.$$typeof===ae)return C(g,li(g,m),v);ri(g,m)}return null}function j(g,m,v,k){var F=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return F!==null?null:r(g,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return v.key===F?u(g,m,v,k):null;case R:return v.key===F?N(g,m,v,k):null;case O:return v=Ba(v),j(g,m,v,k)}if(fe(v)||oe(v))return F!==null?null:z(g,m,v,k,null);if(typeof v.then=="function")return j(g,m,oi(v),k);if(v.$$typeof===ae)return j(g,m,li(g,v),k);ri(g,v)}return null}function E(g,m,v,k,F){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return g=g.get(v)||null,r(m,g,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case U:return g=g.get(k.key===null?v:k.key)||null,u(m,g,k,F);case R:return g=g.get(k.key===null?v:k.key)||null,N(m,g,k,F);case O:return k=Ba(k),E(g,m,v,k,F)}if(fe(k)||oe(k))return g=g.get(v)||null,z(m,g,k,F,null);if(typeof k.then=="function")return E(g,m,v,oi(k),F);if(k.$$typeof===ae)return E(g,m,v,li(m,k),F);ri(m,k)}return null}function Z(g,m,v,k){for(var F=null,Se=null,K=m,ue=m=0,ye=null;K!==null&&ue<v.length;ue++){K.index>ue?(ye=K,K=null):ye=K.sibling;var Ee=j(g,K,v[ue],k);if(Ee===null){K===null&&(K=ye);break}e&&K&&Ee.alternate===null&&t(g,K),m=s(Ee,m,ue),Se===null?F=Ee:Se.sibling=Ee,Se=Ee,K=ye}if(ue===v.length)return a(g,K),Ne&&Yt(g,ue),F;if(K===null){for(;ue<v.length;ue++)K=C(g,v[ue],k),K!==null&&(m=s(K,m,ue),Se===null?F=K:Se.sibling=K,Se=K);return Ne&&Yt(g,ue),F}for(K=l(K);ue<v.length;ue++)ye=E(K,g,ue,v[ue],k),ye!==null&&(e&&ye.alternate!==null&&K.delete(ye.key===null?ue:ye.key),m=s(ye,m,ue),Se===null?F=ye:Se.sibling=ye,Se=ye);return e&&K.forEach(function(_a){return t(g,_a)}),Ne&&Yt(g,ue),F}function ee(g,m,v,k){if(v==null)throw Error(c(151));for(var F=null,Se=null,K=m,ue=m=0,ye=null,Ee=v.next();K!==null&&!Ee.done;ue++,Ee=v.next()){K.index>ue?(ye=K,K=null):ye=K.sibling;var _a=j(g,K,Ee.value,k);if(_a===null){K===null&&(K=ye);break}e&&K&&_a.alternate===null&&t(g,K),m=s(_a,m,ue),Se===null?F=_a:Se.sibling=_a,Se=_a,K=ye}if(Ee.done)return a(g,K),Ne&&Yt(g,ue),F;if(K===null){for(;!Ee.done;ue++,Ee=v.next())Ee=C(g,Ee.value,k),Ee!==null&&(m=s(Ee,m,ue),Se===null?F=Ee:Se.sibling=Ee,Se=Ee);return Ne&&Yt(g,ue),F}for(K=l(K);!Ee.done;ue++,Ee=v.next())Ee=E(K,g,ue,Ee.value,k),Ee!==null&&(e&&Ee.alternate!==null&&K.delete(Ee.key===null?ue:Ee.key),m=s(Ee,m,ue),Se===null?F=Ee:Se.sibling=Ee,Se=Ee);return e&&K.forEach(function(hb){return t(g,hb)}),Ne&&Yt(g,ue),F}function Ae(g,m,v,k){if(typeof v=="object"&&v!==null&&v.type===G&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case U:e:{for(var F=v.key;m!==null;){if(m.key===F){if(F=v.type,F===G){if(m.tag===7){a(g,m.sibling),k=n(m,v.props.children),k.return=g,g=k;break e}}else if(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===O&&Ba(F)===m.type){a(g,m.sibling),k=n(m,v.props),Pl(k,v),k.return=g,g=k;break e}a(g,m);break}else t(g,m);m=m.sibling}v.type===G?(k=Ra(v.props.children,g.mode,k,v.key),k.return=g,g=k):(k=ei(v.type,v.key,v.props,null,g.mode,k),Pl(k,v),k.return=g,g=k)}return o(g);case R:e:{for(F=v.key;m!==null;){if(m.key===F)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){a(g,m.sibling),k=n(m,v.children||[]),k.return=g,g=k;break e}else{a(g,m);break}else t(g,m);m=m.sibling}k=Bs(v,g.mode,k),k.return=g,g=k}return o(g);case O:return v=Ba(v),Ae(g,m,v,k)}if(fe(v))return Z(g,m,v,k);if(oe(v)){if(F=oe(v),typeof F!="function")throw Error(c(150));return v=F.call(v),ee(g,m,v,k)}if(typeof v.then=="function")return Ae(g,m,oi(v),k);if(v.$$typeof===ae)return Ae(g,m,li(g,v),k);ri(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(a(g,m.sibling),k=n(m,v),k.return=g,g=k):(a(g,m),k=Vs(v,g.mode,k),k.return=g,g=k),o(g)):a(g,m)}return function(g,m,v,k){try{Fl=0;var F=Ae(g,m,v,k);return bl=null,F}catch(K){if(K===ml||K===ii)throw K;var Se=mt(29,K,null,g.mode);return Se.lanes=k,Se.return=g,Se}finally{}}}var Ya=uu(!0),du=uu(!1),ca=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Pn(e),Kc(e,null,a),t}return Fn(e,l,t,a),Pn(e)}function en(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ac(e,a)}}function eo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var to=!1;function tn(){if(to){var e=fl;if(e!==null)throw e}}function an(e,t,a,l){to=!1;var n=e.updateQueue;ca=!1;var s=n.firstBaseUpdate,o=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var u=r,N=u.next;u.next=null,o===null?s=N:o.next=N,o=u;var z=e.alternate;z!==null&&(z=z.updateQueue,r=z.lastBaseUpdate,r!==o&&(r===null?z.firstBaseUpdate=N:r.next=N,z.lastBaseUpdate=u))}if(s!==null){var C=n.baseState;o=0,z=N=u=null,r=s;do{var j=r.lane&-536870913,E=j!==r.lane;if(E?(pe&j)===j:(l&j)===j){j!==0&&j===hl&&(to=!0),z!==null&&(z=z.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var Z=e,ee=r;j=t;var Ae=a;switch(ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){C=Z.call(Ae,C,j);break e}C=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,j=typeof Z=="function"?Z.call(Ae,C,j):Z,j==null)break e;C=T({},C,j);break e;case 2:ca=!0}}j=r.callback,j!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[j]:E.push(j))}else E={lane:j,tag:r.tag,payload:r.payload,callback:r.callback,next:null},z===null?(N=z=E,u=C):z=z.next=E,o|=j;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;E=r,r=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);z===null&&(u=C),n.baseState=u,n.firstBaseUpdate=N,n.lastBaseUpdate=z,s===null&&(n.shared.lanes=0),ga|=o,e.lanes=o,e.memoizedState=C}}function hu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function fu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hu(a[e],t)}var gl=f(null),ci=f(0);function mu(e,t){e=Pt,Y(ci,e),Y(gl,t),Pt=e|t.baseLanes}function ao(){Y(ci,Pt),Y(gl,gl.current)}function lo(){Pt=ci.current,A(gl),A(ci)}var bt=f(null),Tt=null;function ha(e){var t=e.alternate;Y(Be,Be.current&1),Y(bt,e),Tt===null&&(t===null||gl.current!==null||t.memoizedState!==null)&&(Tt=e)}function no(e){Y(Be,Be.current),Y(bt,e),Tt===null&&(Tt=e)}function bu(e){e.tag===22?(Y(Be,Be.current),Y(bt,e),Tt===null&&(Tt=e)):fa()}function fa(){Y(Be,Be.current),Y(bt,bt.current)}function gt(e){A(bt),Tt===e&&(Tt=null),A(Be)}var Be=f(0);function ui(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dr(a)||hr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,re=null,ze=null,qe=null,di=!1,xl=!1,qa=!1,hi=0,ln=0,pl=null,am=0;function He(){throw Error(c(321))}function io(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function so(e,t,a,l,n,s){return It=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Fu:jo,qa=!1,s=a(l,n),qa=!1,xl&&(s=xu(t,a,l,n)),gu(e),s}function gu(e){w.H=on;var t=ze!==null&&ze.next!==null;if(It=0,qe=ze=re=null,di=!1,ln=0,pl=null,t)throw Error(c(300));e===null||Ze||(e=e.dependencies,e!==null&&ai(e)&&(Ze=!0))}function xu(e,t,a,l){re=e;var n=0;do{if(xl&&(pl=null),ln=0,xl=!1,25<=n)throw Error(c(301));if(n+=1,qe=ze=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}w.H=Pu,s=t(a,l)}while(xl);return s}function lm(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?nn(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(re.flags|=1024),t}function oo(){var e=hi!==0;return hi=0,e}function ro(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function co(e){if(di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}di=!1}It=0,qe=ze=re=null,xl=!1,ln=hi=0,pl=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?re.memoizedState=qe=e:qe=qe.next=e,qe}function Ge(){if(ze===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=qe===null?re.memoizedState:qe.next;if(t!==null)qe=t,ze=e;else{if(e===null)throw re.alternate===null?Error(c(467)):Error(c(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?re.memoizedState=qe=e:qe=qe.next=e}return qe}function fi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(e){var t=ln;return ln+=1,pl===null&&(pl=[]),e=ou(pl,e,t),t=re,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Fu:jo),e}function mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nn(e);if(e.$$typeof===ae)return We(e)}throw Error(c(438,String(e)))}function uo(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=fi(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=P;return t.index++,a}function Xt(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=Ge();return ho(t,ze,e)}function ho(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,s=l.pending;if(s!==null){if(n!==null){var o=n.next;n.next=s.next,s.next=o}t.baseQueue=n=s,l.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var r=o=null,u=null,N=t,z=!1;do{var C=N.lane&-536870913;if(C!==N.lane?(pe&C)===C:(It&C)===C){var j=N.revertLane;if(j===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),C===hl&&(z=!0);else if((It&j)===j){N=N.next,j===hl&&(z=!0);continue}else C={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},u===null?(r=u=C,o=s):u=u.next=C,re.lanes|=j,ga|=j;C=N.action,qa&&a(s,C),s=N.hasEagerState?N.eagerState:a(s,C)}else j={lane:C,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},u===null?(r=u=j,o=s):u=u.next=j,re.lanes|=C,ga|=C;N=N.next}while(N!==null&&N!==t);if(u===null?o=s:u.next=r,!ft(s,e.memoizedState)&&(Ze=!0,z&&(a=fl,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=u,l.lastRenderedState=s}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fo(e){var t=Ge(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do s=e(s,o.action),o=o.next;while(o!==n);ft(s,t.memoizedState)||(Ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function pu(e,t,a){var l=re,n=Ge(),s=Ne;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!ft((ze||n).memoizedState,a);if(o&&(n.memoizedState=a,Ze=!0),n=n.queue,go(Nu.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},vu.bind(null,l,n,a,t),null),Ce===null)throw Error(c(349));s||(It&127)!==0||yu(l,t,a)}return a}function yu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=fi(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vu(e,t,a,l){t.value=a,t.getSnapshot=l,ju(t)&&Su(e)}function Nu(e,t,a){return a(function(){ju(t)&&Su(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Su(e){var t=Oa(e,2);t!==null&&ct(t,e,2)}function mo(e){var t=at();if(typeof e=="function"){var a=e;if(e=a(),qa){aa(!0);try{a()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Eu(e,t,a,l){return e.baseState=a,ho(e,ze,typeof l=="function"?l:Xt)}function nm(e,t,a,l,n){if(pi(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};w.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,wu(t,s)):(s.next=a.next,t.pending=a.next=s)}}function wu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var s=w.T,o={};w.T=o;try{var r=a(n,l),u=w.S;u!==null&&u(o,r),_u(e,t,r)}catch(N){bo(e,t,N)}finally{s!==null&&o.types!==null&&(s.types=o.types),w.T=s}}else try{s=a(n,l),_u(e,t,s)}catch(N){bo(e,t,N)}}function _u(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Tu(e,t,l)},function(l){return bo(e,t,l)}):Tu(e,t,a)}function Tu(e,t,a){t.status="fulfilled",t.value=a,zu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,wu(e,a)))}function bo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,zu(t),t=t.next;while(t!==l)}e.action=null}function zu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ku(e,t){return t}function Au(e,t){if(Ne){var a=Ce.formState;if(a!==null){e:{var l=re;if(Ne){if(De){t:{for(var n=De,s=_t;n.nodeType!==8;){if(!s){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){De=zt(n.nextSibling),l=n.data==="F!";break e}}oa(l)}l=!1}l&&(t=a[0])}}return a=at(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ku,lastRenderedState:t},a.queue=l,a=$u.bind(null,re,l),l.dispatch=a,l=mo(!1),s=No.bind(null,re,!1,l.queue),l=at(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=nm.bind(null,re,n,s,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Mu(e){var t=Ge();return Cu(t,ze,e)}function Cu(e,t,a){if(t=ho(e,t,ku)[0],e=bi(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=nn(t)}catch(o){throw o===ml?ii:o}else l=t;t=Ge();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(re.flags|=2048,yl(9,{destroy:void 0},im.bind(null,n,a),null)),[l,s,e]}function im(e,t){e.action=t}function Du(e){var t=Ge(),a=ze;if(a!==null)return Cu(t,a,e);Ge(),t=t.memoizedState,a=Ge();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function yl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=re.updateQueue,t===null&&(t=fi(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ou(){return Ge().memoizedState}function gi(e,t,a,l){var n=at();re.flags|=e,n.memoizedState=yl(1|t,{destroy:void 0},a,l===void 0?null:l)}function xi(e,t,a,l){var n=Ge();l=l===void 0?null:l;var s=n.memoizedState.inst;ze!==null&&l!==null&&io(l,ze.memoizedState.deps)?n.memoizedState=yl(t,s,a,l):(re.flags|=e,n.memoizedState=yl(1|t,s,a,l))}function Ru(e,t){gi(8390656,8,e,t)}function go(e,t){xi(2048,8,e,t)}function sm(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=fi(),re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Uu(e){var t=Ge().memoizedState;return sm({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Hu(e,t){return xi(4,2,e,t)}function Lu(e,t){return xi(4,4,e,t)}function Vu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bu(e,t,a){a=a!=null?a.concat([e]):null,xi(4,4,Vu.bind(null,t,e),a)}function xo(){}function Gu(e,t){var a=Ge();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&io(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Yu(e,t){var a=Ge();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&io(t,l[1]))return l[0];if(l=e(),qa){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[l,t],l}function po(e,t,a){return a===void 0||(It&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=qd(),re.lanes|=e,ga|=e,a)}function qu(e,t,a,l){return ft(a,t)?a:gl.current!==null?(e=po(e,a,l),ft(e,t)||(Ze=!0),e):(It&42)===0||(It&1073741824)!==0&&(pe&261930)===0?(Ze=!0,e.memoizedState=a):(e=qd(),re.lanes|=e,ga|=e,t)}function Zu(e,t,a,l,n){var s=L.p;L.p=s!==0&&8>s?s:8;var o=w.T,r={};w.T=r,No(e,!1,t,a);try{var u=n(),N=w.S;if(N!==null&&N(r,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var z=tm(u,l);sn(e,t,z,yt(e))}else sn(e,t,l,yt(e))}catch(C){sn(e,t,{then:function(){},status:"rejected",reason:C},yt())}finally{L.p=s,o!==null&&r.types!==null&&(o.types=r.types),w.T=o}}function om(){}function yo(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Iu(e).queue;Zu(e,n,t,X,a===null?om:function(){return Xu(e),a(l)})}function Iu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:X},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xu(e){var t=Iu(e);t.next===null&&(t=e.alternate.memoizedState),sn(e,t.next.queue,{},yt())}function vo(){return We(Sn)}function Qu(){return Ge().memoizedState}function Ku(){return Ge().memoizedState}function rm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=yt();e=ua(a);var l=da(t,e,a);l!==null&&(ct(l,t,a),en(l,t,a)),t={cache:Ks()},e.payload=t;return}t=t.return}}function cm(e,t,a){var l=yt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)?Ju(t,a):(a=Hs(e,t,a,l),a!==null&&(ct(a,e,l),Wu(a,t,l)))}function $u(e,t,a){var l=yt();sn(e,t,a,l)}function sn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(e))Ju(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,r=s(o,a);if(n.hasEagerState=!0,n.eagerState=r,ft(r,o))return Fn(e,t,n,0),Ce===null&&Wn(),!1}catch{}finally{}if(a=Hs(e,t,n,l),a!==null)return ct(a,e,l),Wu(a,t,l),!0}return!1}function No(e,t,a,l){if(l={lane:2,revertLane:Po(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(c(479))}else t=Hs(e,a,l,2),t!==null&&ct(t,e,2)}function pi(e){var t=e.alternate;return e===re||t!==null&&t===re}function Ju(e,t){xl=di=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Wu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ac(e,a)}}var on={readContext:We,use:mi,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};on.useEffectEvent=He;var Fu={readContext:We,use:mi,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Ru,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,gi(4194308,4,Vu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){gi(4,2,e,t)},useMemo:function(e,t){var a=at();t=t===void 0?null:t;var l=e();if(qa){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=at();if(a!==void 0){var n=a(t);if(qa){aa(!0);try{a(t)}finally{aa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=cm.bind(null,re,e),[l.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=mo(e);var t=e.queue,a=$u.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:xo,useDeferredValue:function(e,t){var a=at();return po(a,e,t)},useTransition:function(){var e=mo(!1);return e=Zu.bind(null,re,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=re,n=at();if(Ne){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ce===null)throw Error(c(349));(pe&127)!==0||yu(l,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,Ru(Nu.bind(null,l,s,e),[e]),l.flags|=2048,yl(9,{destroy:void 0},vu.bind(null,l,s,a,t),null),a},useId:function(){var e=at(),t=Ce.identifierPrefix;if(Ne){var a=Rt,l=Ot;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=hi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=am++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:vo,useFormState:Au,useActionState:Au,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=No.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:uo,useCacheRefresh:function(){return at().memoizedState=rm.bind(null,re)},useEffectEvent:function(e){var t=at(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},jo={readContext:We,use:mi,useCallback:Gu,useContext:We,useEffect:go,useImperativeHandle:Bu,useInsertionEffect:Hu,useLayoutEffect:Lu,useMemo:Yu,useReducer:bi,useRef:Ou,useState:function(){return bi(Xt)},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ge();return qu(a,ze.memoizedState,e,t)},useTransition:function(){var e=bi(Xt)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:pu,useId:Qu,useHostTransitionStatus:vo,useFormState:Mu,useActionState:Mu,useOptimistic:function(e,t){var a=Ge();return Eu(a,ze,e,t)},useMemoCache:uo,useCacheRefresh:Ku};jo.useEffectEvent=Uu;var Pu={readContext:We,use:mi,useCallback:Gu,useContext:We,useEffect:go,useImperativeHandle:Bu,useInsertionEffect:Hu,useLayoutEffect:Lu,useMemo:Yu,useReducer:fo,useRef:Ou,useState:function(){return fo(Xt)},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ge();return ze===null?po(a,e,t):qu(a,ze.memoizedState,e,t)},useTransition:function(){var e=fo(Xt)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:pu,useId:Qu,useHostTransitionStatus:vo,useFormState:Du,useActionState:Du,useOptimistic:function(e,t){var a=Ge();return ze!==null?Eu(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uo,useCacheRefresh:Ku};Pu.useEffectEvent=Uu;function So(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=yt(),n=ua(l);n.payload=t,a!=null&&(n.callback=a),t=da(e,n,l),t!==null&&(ct(t,e,l),en(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=yt(),n=ua(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=da(e,n,l),t!==null&&(ct(t,e,l),en(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=yt(),l=ua(a);l.tag=2,t!=null&&(l.callback=t),t=da(e,l,a),t!==null&&(ct(t,e,a),en(t,e,a))}};function ed(e,t,a,l,n,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,o):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,l)||!Xl(n,s):!0}function td(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Za(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ad(e){Jn(e)}function ld(e){console.error(e)}function nd(e){Jn(e)}function yi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function id(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function wo(e,t,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){yi(e,t)},a}function sd(e){return e=ua(e),e.tag=3,e}function od(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=l.value;e.payload=function(){return n(s)},e.callback=function(){id(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){id(t,a,l),typeof n!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function um(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&dl(t,a,n,!0),a=bt.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?Mi():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Jo(e,l,n)),!1;case 22:return a.flags|=65536,l===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Jo(e,l,n)),!1}throw Error(c(435,a.tag))}return Jo(e,l,n),Mi(),!1}if(Ne)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==qs&&(e=Error(c(422),{cause:l}),$l(St(e,a)))):(l!==qs&&(t=Error(c(423),{cause:l}),$l(St(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=St(l,a),n=wo(e.stateNode,l,n),eo(e,n),Le!==4&&(Le=2)),!1;var s=Error(c(520),{cause:l});if(s=St(s,a),bn===null?bn=[s]:bn.push(s),Le!==4&&(Le=2),t===null)return!0;l=St(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=wo(a.stateNode,l,e),eo(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=sd(n),od(n,e,a,l),eo(a,n),!1}a=a.return}while(a!==null);return!1}var _o=Error(c(461)),Ze=!1;function Fe(e,t,a,l){t.child=e===null?du(t,null,a,l):Ya(t,e.child,a,l)}function rd(e,t,a,l,n){a=a.render;var s=t.ref;if("ref"in l){var o={};for(var r in l)r!=="ref"&&(o[r]=l[r])}else o=l;return La(t),l=so(e,t,a,o,s,n),r=oo(),e!==null&&!Ze?(ro(e,t,n),Qt(e,t,n)):(Ne&&r&&Gs(t),t.flags|=1,Fe(e,t,l,n),t.child)}function cd(e,t,a,l,n){if(e===null){var s=a.type;return typeof s=="function"&&!Ls(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,ud(e,t,s,l,n)):(e=ei(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Oo(e,n)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(o,l)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Gt(s,l),e.ref=t.ref,e.return=t,t.child=e}function ud(e,t,a,l,n){if(e!==null){var s=e.memoizedProps;if(Xl(s,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=s,Oo(e,n))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return To(e,t,a,l,n)}function dd(e,t,a,l){var n=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~s}else l=0,t.child=null;return hd(e,t,s,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ni(t,s!==null?s.cachePool:null),s!==null?mu(t,s):ao(),bu(t);else return l=t.lanes=536870912,hd(e,t,s!==null?s.baseLanes|a:a,a,l)}else s!==null?(ni(t,s.cachePool),mu(t,s),fa(),t.memoizedState=null):(e!==null&&ni(t,null),ao(),fa());return Fe(e,t,n,a),t.child}function rn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hd(e,t,a,l,n){var s=Js();return s=s===null?null:{parent:Ye._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&ni(t,null),ao(),bu(t),e!==null&&dl(e,t,l,!0),t.childLanes=n,null}function vi(e,t){return t=ji({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fd(e,t,a){return Ya(t,e.child,null,a),e=vi(t,t.pendingProps),e.flags|=2,gt(t),t.memoizedState=null,e}function dm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(l.mode==="hidden")return e=vi(t,l),t.lanes=536870912,rn(null,e);if(no(t),(e=De)?(e=wh(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Ot,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Je=t,De=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return vi(t,l)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(no(t),n)if(t.flags&256)t.flags&=-257,t=fd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ze||dl(e,t,a,!1),n=(a&e.childLanes)!==0,Ze||n){if(l=Ce,l!==null&&(o=lc(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,Oa(e,o),ct(l,e,o),_o;Mi(),t=fd(e,t,a)}else e=s.treeContext,De=zt(o.nextSibling),Je=t,Ne=!0,sa=null,_t=!1,e!==null&&Pc(t,e),t=vi(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ni(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function To(e,t,a,l,n){return La(t),a=so(e,t,a,l,void 0,n),l=oo(),e!==null&&!Ze?(ro(e,t,n),Qt(e,t,n)):(Ne&&l&&Gs(t),t.flags|=1,Fe(e,t,a,n),t.child)}function md(e,t,a,l,n,s){return La(t),t.updateQueue=null,a=xu(t,l,a,n),gu(e),l=oo(),e!==null&&!Ze?(ro(e,t,s),Qt(e,t,s)):(Ne&&l&&Gs(t),t.flags|=1,Fe(e,t,a,s),t.child)}function bd(e,t,a,l,n){if(La(t),t.stateNode===null){var s=ol,o=a.contextType;typeof o=="object"&&o!==null&&(s=We(o)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Eo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},Fs(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?We(o):ol,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(So(t,a,o,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&Eo.enqueueReplaceState(s,s.state,null),an(t,l,s,n),tn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var r=t.memoizedProps,u=Za(a,r);s.props=u;var N=s.context,z=a.contextType;o=ol,typeof z=="object"&&z!==null&&(o=We(z));var C=a.getDerivedStateFromProps;z=typeof C=="function"||typeof s.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,z||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r||N!==o)&&td(t,s,l,o),ca=!1;var j=t.memoizedState;s.state=j,an(t,l,s,n),tn(),N=t.memoizedState,r||j!==N||ca?(typeof C=="function"&&(So(t,a,C,l),N=t.memoizedState),(u=ca||ed(t,a,u,l,j,N,o))?(z||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),s.props=l,s.state=N,s.context=o,l=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Ps(e,t),o=t.memoizedProps,z=Za(a,o),s.props=z,C=t.pendingProps,j=s.context,N=a.contextType,u=ol,typeof N=="object"&&N!==null&&(u=We(N)),r=a.getDerivedStateFromProps,(N=typeof r=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==C||j!==u)&&td(t,s,l,u),ca=!1,j=t.memoizedState,s.state=j,an(t,l,s,n),tn();var E=t.memoizedState;o!==C||j!==E||ca||e!==null&&e.dependencies!==null&&ai(e.dependencies)?(typeof r=="function"&&(So(t,a,r,l),E=t.memoizedState),(z=ca||ed(t,a,z,l,j,E,u)||e!==null&&e.dependencies!==null&&ai(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,E,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,E,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=E),s.props=l,s.state=E,s.context=u,l=z):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,Ni(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=Ya(t,e.child,null,n),t.child=Ya(t,null,a,n)):Fe(e,t,a,n),t.memoizedState=s.state,e=t.child):e=Qt(e,t,n),e}function gd(e,t,a,l){return Ua(),t.flags|=256,Fe(e,t,a,l),t.child}var zo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ko(e){return{baseLanes:e,cachePool:iu()}}function Ao(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function xd(e,t,a){var l=t.pendingProps,n=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(n?ha(t):fa(),(e=De)?(e=wh(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Ot,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Je=t,De=null)):e=null,e===null)throw oa(t);return hr(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;return l=l.fallback,n?(fa(),n=t.mode,r=ji({mode:"hidden",children:r},n),l=Ra(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=ko(a),l.childLanes=Ao(e,o,a),t.memoizedState=zo,rn(null,l)):(ha(t),Mo(t,r))}var u=e.memoizedState;if(u!==null&&(r=u.dehydrated,r!==null)){if(s)t.flags&256?(ha(t),t.flags&=-257,t=Co(e,t,a)):t.memoizedState!==null?(fa(),t.child=e.child,t.flags|=128,t=null):(fa(),r=l.fallback,n=t.mode,l=ji({mode:"visible",children:l.children},n),r=Ra(r,n,a,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,Ya(t,e.child,null,a),l=t.child,l.memoizedState=ko(a),l.childLanes=Ao(e,o,a),t.memoizedState=zo,t=rn(null,l));else if(ha(t),hr(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var N=o.dgst;o=N,l=Error(c(419)),l.stack="",l.digest=o,$l({value:l,source:null,stack:null}),t=Co(e,t,a)}else if(Ze||dl(e,t,a,!1),o=(a&e.childLanes)!==0,Ze||o){if(o=Ce,o!==null&&(l=lc(o,a),l!==0&&l!==u.retryLane))throw u.retryLane=l,Oa(e,l),ct(o,e,l),_o;dr(r)||Mi(),t=Co(e,t,a)}else dr(r)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,De=zt(r.nextSibling),Je=t,Ne=!0,sa=null,_t=!1,e!==null&&Pc(t,e),t=Mo(t,l.children),t.flags|=4096);return t}return n?(fa(),r=l.fallback,n=t.mode,u=e.child,N=u.sibling,l=Gt(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&65011712,N!==null?r=Gt(N,r):(r=Ra(r,n,a,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,rn(null,l),l=t.child,r=e.child.memoizedState,r===null?r=ko(a):(n=r.cachePool,n!==null?(u=Ye._currentValue,n=n.parent!==u?{parent:u,pool:u}:n):n=iu(),r={baseLanes:r.baseLanes|a,cachePool:n}),l.memoizedState=r,l.childLanes=Ao(e,o,a),t.memoizedState=zo,rn(e.child,l)):(ha(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Mo(e,t){return t=ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ji(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function Co(e,t,a){return Ya(t,e.child,null,a),e=Mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xs(e.return,t,a)}function Do(e,t,a,l,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=s)}function yd(e,t,a){var l=t.pendingProps,n=l.revealOrder,s=l.tail;l=l.children;var o=Be.current,r=(o&2)!==0;if(r?(o=o&1|2,t.flags|=128):o&=1,Y(Be,o),Fe(e,t,l,a),l=Ne?Kl:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,a,t);else if(e.tag===19)pd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ui(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Do(t,!1,n,a,s,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ui(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Do(t,!0,a,null,s,l);break;case"together":Do(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(dl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Oo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ai(e)))}function hm(e,t,a){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),ra(t,Ye,e.memoizedState.cache),Ua();break;case 27:case 5:Dl(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?xd(e,t,a):(ha(t),e=Qt(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(dl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return yd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Be,Be.current),l)break;return null;case 22:return t.lanes=0,dd(e,t,a,t.pendingProps);case 24:ra(t,Ye,e.memoizedState.cache)}return Qt(e,t,a)}function vd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Oo(e,a)&&(t.flags&128)===0)return Ze=!1,hm(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,Ne&&(t.flags&1048576)!==0&&Fc(t,Kl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ba(t.elementType),t.type=e,typeof e=="function")Ls(e)?(l=Za(e,l),t.tag=1,t=bd(null,t,e,l,a)):(t.tag=0,t=To(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ve){t.tag=11,t=rd(null,t,e,l,a);break e}else if(n===B){t.tag=14,t=cd(null,t,e,l,a);break e}}throw t=de(e)||e,Error(c(306,t,""))}}return t;case 0:return To(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Za(l,t.pendingProps),bd(e,t,l,n,a);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var s=t.memoizedState;n=s.element,Ps(e,t),an(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ra(t,Ye,l),l!==s.cache&&Qs(t,[Ye],a,!0),tn(),l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=gd(e,t,l,a);break e}else if(l!==n){n=St(Error(c(424)),t),$l(n),t=gd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=zt(e.firstChild),Je=t,Ne=!0,sa=null,_t=!0,a=du(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ua(),l===n){t=Qt(e,t,a);break e}Fe(e,t,l,a)}t=t.child}return t;case 26:return Ni(e,t),e===null?(a=Mh(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ne||(a=t.type,e=t.pendingProps,l=Li(he.current).createElement(a),l[$e]=t,l[lt]=e,Pe(l,a,e),Qe(l),t.stateNode=l):t.memoizedState=Mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dl(t),e===null&&Ne&&(l=t.stateNode=zh(t.type,t.pendingProps,he.current),Je=t,_t=!0,n=De,Na(t.type)?(fr=n,De=zt(l.firstChild)):De=n),Fe(e,t,t.pendingProps.children,a),Ni(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((n=l=De)&&(l=Ym(l,t.type,t.pendingProps,_t),l!==null?(t.stateNode=l,Je=t,De=zt(l.firstChild),_t=!1,n=!0):n=!1),n||oa(t)),Dl(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,rr(n,s)?l=null:o!==null&&rr(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=so(e,t,lm,null,null,a),Sn._currentValue=n),Ni(e,t),Fe(e,t,l,a),t.child;case 6:return e===null&&Ne&&((e=a=De)&&(a=qm(a,t.pendingProps,_t),a!==null?(t.stateNode=a,Je=t,De=null,e=!0):e=!1),e||oa(t)),null;case 13:return xd(e,t,a);case 4:return tt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ya(t,null,l,a):Fe(e,t,l,a),t.child;case 11:return rd(e,t,t.type,t.pendingProps,a);case 7:return Fe(e,t,t.pendingProps,a),t.child;case 8:return Fe(e,t,t.pendingProps.children,a),t.child;case 12:return Fe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ra(t,t.type,l.value),Fe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,La(t),n=We(n),l=l(n),t.flags|=1,Fe(e,t,l,a),t.child;case 14:return cd(e,t,t.type,t.pendingProps,a);case 15:return ud(e,t,t.type,t.pendingProps,a);case 19:return yd(e,t,a);case 31:return dm(e,t,a);case 22:return dd(e,t,a,t.pendingProps);case 24:return La(t),l=We(Ye),e===null?(n=Js(),n===null&&(n=Ce,s=Ks(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:l,cache:n},Fs(t),ra(t,Ye,n)):((e.lanes&a)!==0&&(Ps(e,t),an(t,null,null,a),tn()),n=e.memoizedState,s=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ra(t,Ye,l)):(l=s.cache,ra(t,Ye,l),l!==n.cache&&Qs(t,[Ye],a,!0))),Fe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Kt(e){e.flags|=4}function Ro(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Qd())e.flags|=8192;else throw Ga=si,Ws}else e.flags&=-16777217}function Nd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uh(t))if(Qd())e.flags|=8192;else throw Ga=si,Ws}function Si(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ec():536870912,e.lanes|=t,Sl|=t)}function cn(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function fm(e,t,a){var l=t.pendingProps;switch(Ys(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(Ye),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ul(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zs())),Oe(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(Kt(t),s!==null?(Oe(t),Nd(t,s)):(Oe(t),Ro(t,n,null,l,a))):s?s!==e.memoizedState?(Kt(t),Oe(t),Nd(t,s)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Kt(t),Oe(t),Ro(t,n,e,l,a)),null;case 27:if(On(t),a=he.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Kt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}e=q.current,ul(t)?eu(t):(e=zh(n,l,a),t.stateNode=e,Kt(t))}return Oe(t),null;case 5:if(On(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Kt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}if(s=q.current,ul(t))eu(t);else{var o=Li(he.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}s[$e]=t,s[lt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(Pe(s,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Kt(t)}}return Oe(t),Ro(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Kt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=he.current,ul(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[$e]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||xh(e.nodeValue,a)),e||oa(t,!0)}else e=Li(e).createTextNode(l),e[$e]=t,t.stateNode=e}return Oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ul(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[$e]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else a=Zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(gt(t),t):(gt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Oe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ul(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[$e]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),n=!1}else n=Zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(gt(t),t):(gt(t),null)}return gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Si(t,t.updateQueue),Oe(t),null);case 4:return Ve(),e===null&&lr(t.stateNode.containerInfo),Oe(t),null;case 10:return Zt(t.type),Oe(t),null;case 19:if(A(Be),l=t.memoizedState,l===null)return Oe(t),null;if(n=(t.flags&128)!==0,s=l.rendering,s===null)if(n)cn(l,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ui(e),s!==null){for(t.flags|=128,cn(l,!1),e=s.updateQueue,t.updateQueue=e,Si(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$c(a,e),a=a.sibling;return Y(Be,Be.current&1|2),Ne&&Yt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ut()>zi&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304)}else{if(!n)if(e=ui(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Si(t,e),cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ne)return Oe(t),null}else 2*ut()-l.renderingStartTime>zi&&a!==536870912&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ut(),e.sibling=null,a=Be.current,Y(Be,n?a&1|2:a&1),Ne&&Yt(t,l.treeForkCount),e):(Oe(t),null);case 22:case 23:return gt(t),lo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&Si(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&A(Va),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(Ye),Oe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function mm(e,t){switch(Ys(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(Ye),Ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return On(t),null;case 31:if(t.memoizedState!==null){if(gt(t),t.alternate===null)throw Error(c(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Be),null;case 4:return Ve(),null;case 10:return Zt(t.type),null;case 22:case 23:return gt(t),lo(),e!==null&&A(Va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(Ye),null;case 25:return null;default:return null}}function jd(e,t){switch(Ys(t),t.tag){case 3:Zt(Ye),Ve();break;case 26:case 27:case 5:On(t);break;case 4:Ve();break;case 31:t.memoizedState!==null&&gt(t);break;case 13:gt(t);break;case 19:A(Be);break;case 10:Zt(t.type);break;case 22:case 23:gt(t),lo(),e!==null&&A(Va);break;case 24:Zt(Ye)}}function un(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var s=a.create,o=a.inst;l=s(),o.destroy=l}a=a.next}while(a!==n)}}catch(r){Te(t,t.return,r)}}function ma(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){var o=l.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,n=t;var u=a,N=r;try{N()}catch(z){Te(n,u,z)}}}l=l.next}while(l!==s)}}catch(z){Te(t,t.return,z)}}function Sd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{fu(t,a)}catch(l){Te(e,e.return,l)}}}function Ed(e,t,a){a.props=Za(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Te(e,t,l)}}function dn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Te(e,t,n)}}function Ut(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Te(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Te(e,t,n)}else a.current=null}function wd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Te(e,e.return,n)}}function Uo(e,t,a){try{var l=e.stateNode;Um(l,e.type,a,t),l[lt]=t}catch(n){Te(e,e.return,n)}}function _d(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Ho(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Vt));else if(l!==4&&(l===27&&Na(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Lo(e,t,a),e=e.sibling;e!==null;)Lo(e,t,a),e=e.sibling}function Ei(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ei(e,t,a),e=e.sibling;e!==null;)Ei(e,t,a),e=e.sibling}function Td(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pe(t,l,a),t[$e]=e,t[lt]=a}catch(s){Te(e,e.return,s)}}var $t=!1,Ie=!1,Vo=!1,zd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function bm(e,t){if(e=e.containerInfo,sr=Ii,e=Bc(e),Ms(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,r=-1,u=-1,N=0,z=0,C=e,j=null;t:for(;;){for(var E;C!==a||n!==0&&C.nodeType!==3||(r=o+n),C!==s||l!==0&&C.nodeType!==3||(u=o+l),C.nodeType===3&&(o+=C.nodeValue.length),(E=C.firstChild)!==null;)j=C,C=E;for(;;){if(C===e)break t;if(j===a&&++N===n&&(r=o),j===s&&++z===l&&(u=o),(E=C.nextSibling)!==null)break;C=j,j=C.parentNode}C=E}a=r===-1||u===-1?null:{start:r,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(or={focusedElem:e,selectionRange:a},Ii=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var Z=Za(a.type,n);e=l.getSnapshotBeforeUpdate(Z,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Te(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ur(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ur(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function kd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wt(e,a),l&4&&un(5,a);break;case 1:if(Wt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Te(a,a.return,o)}else{var n=Za(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Te(a,a.return,o)}}l&64&&Sd(a),l&512&&dn(a,a.return);break;case 3:if(Wt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{fu(e,t)}catch(o){Te(a,a.return,o)}}break;case 27:t===null&&l&4&&Td(a);case 26:case 5:Wt(e,a),t===null&&l&4&&wd(a),l&512&&dn(a,a.return);break;case 12:Wt(e,a);break;case 31:Wt(e,a),l&4&&Cd(e,a);break;case 13:Wt(e,a),l&4&&Dd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Em.bind(null,a),Zm(e,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){t=t!==null&&t.memoizedState!==null||Ie,n=$t;var s=Ie;$t=l,(Ie=t)&&!s?Ft(e,a,(a.subtreeFlags&8772)!==0):Wt(e,a),$t=n,Ie=s}break;case 30:break;default:Wt(e,a)}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ms(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,it=!1;function Jt(e,t,a){for(a=a.child;a!==null;)Md(e,t,a),a=a.sibling}function Md(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ol,a)}catch{}switch(a.tag){case 26:Ie||Ut(a,t),Jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||Ut(a,t);var l=Re,n=it;Na(a.type)&&(Re=a.stateNode,it=!1),Jt(e,t,a),vn(a.stateNode),Re=l,it=n;break;case 5:Ie||Ut(a,t);case 6:if(l=Re,n=it,Re=null,Jt(e,t,a),Re=l,it=n,Re!==null)if(it)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(a.stateNode)}catch(s){Te(a,t,s)}else try{Re.removeChild(a.stateNode)}catch(s){Te(a,t,s)}break;case 18:Re!==null&&(it?(e=Re,Sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ml(e)):Sh(Re,a.stateNode));break;case 4:l=Re,n=it,Re=a.stateNode.containerInfo,it=!0,Jt(e,t,a),Re=l,it=n;break;case 0:case 11:case 14:case 15:ma(2,a,t),Ie||ma(4,a,t),Jt(e,t,a);break;case 1:Ie||(Ut(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ed(a,t,l)),Jt(e,t,a);break;case 21:Jt(e,t,a);break;case 22:Ie=(l=Ie)||a.memoizedState!==null,Jt(e,t,a),Ie=l;break;default:Jt(e,t,a)}}function Cd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(a){Te(t,t.return,a)}}}function Dd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(a){Te(t,t.return,a)}}function gm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zd),t;default:throw Error(c(435,e.tag))}}function wi(e,t){var a=gm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=wm.bind(null,e,l);l.then(n,n)}})}function st(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],s=e,o=t,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(Na(r.type)){Re=r.stateNode,it=!1;break e}break;case 5:Re=r.stateNode,it=!1;break e;case 3:case 4:Re=r.stateNode.containerInfo,it=!0;break e}r=r.return}if(Re===null)throw Error(c(160));Md(s,o,n),Re=null,it=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Od(t,e),t=t.sibling}var Ct=null;function Od(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ot(e),l&4&&(ma(3,e,e.return),un(3,e),ma(5,e,e.return));break;case 1:st(t,e),ot(e),l&512&&(Ie||a===null||Ut(a,a.return)),l&64&&$t&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(st(t,e),ot(e),l&512&&(Ie||a===null||Ut(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":s=n.getElementsByTagName("title")[0],(!s||s[Hl]||s[$e]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(l),n.head.insertBefore(s,n.querySelector("head > title"))),Pe(s,l,a),s[$e]=e,Qe(s),l=s;break e;case"link":var o=Oh("link","href",n).get(l+(a.href||""));if(o){for(var r=0;r<o.length;r++)if(s=o[r],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(r,1);break t}}s=n.createElement(l),Pe(s,l,a),n.head.appendChild(s);break;case"meta":if(o=Oh("meta","content",n).get(l+(a.content||""))){for(r=0;r<o.length;r++)if(s=o[r],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(r,1);break t}}s=n.createElement(l),Pe(s,l,a),n.head.appendChild(s);break;default:throw Error(c(468,l))}s[$e]=e,Qe(s),l=s}e.stateNode=l}else Rh(n,e.type,e.stateNode);else e.stateNode=Dh(n,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?Rh(n,e.type,e.stateNode):Dh(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Uo(e,e.memoizedProps,a.memoizedProps)}break;case 27:st(t,e),ot(e),l&512&&(Ie||a===null||Ut(a,a.return)),a!==null&&l&4&&Uo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(st(t,e),ot(e),l&512&&(Ie||a===null||Ut(a,a.return)),e.flags&32){n=e.stateNode;try{el(n,"")}catch(Z){Te(e,e.return,Z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Uo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Vo=!0);break;case 6:if(st(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Z){Te(e,e.return,Z)}}break;case 3:if(Gi=null,n=Ct,Ct=Vi(t.containerInfo),st(t,e),Ct=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(Z){Te(e,e.return,Z)}Vo&&(Vo=!1,Rd(e));break;case 4:l=Ct,Ct=Vi(e.stateNode.containerInfo),st(t,e),ot(e),Ct=l;break;case 12:st(t,e),ot(e);break;case 31:st(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wi(e,l)));break;case 13:st(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ti=ut()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wi(e,l)));break;case 22:n=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,N=$t,z=Ie;if($t=N||n,Ie=z||u,st(t,e),Ie=z,$t=N,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||u||$t||Ie||Ia(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(s=u.stateNode,n)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=u.stateNode;var C=u.memoizedProps.style,j=C!=null&&C.hasOwnProperty("display")?C.display:null;r.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(Z){Te(u,u.return,Z)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=n?"":u.memoizedProps}catch(Z){Te(u,u.return,Z)}}}else if(t.tag===18){if(a===null){u=t;try{var E=u.stateNode;n?Eh(E,!0):Eh(u.stateNode,!1)}catch(Z){Te(u,u.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,wi(e,a))));break;case 19:st(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wi(e,l)));break;case 30:break;case 21:break;default:st(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(_d(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,s=Ho(e);Ei(e,s,n);break;case 5:var o=a.stateNode;a.flags&32&&(el(o,""),a.flags&=-33);var r=Ho(e);Ei(e,r,o);break;case 3:case 4:var u=a.stateNode.containerInfo,N=Ho(e);Lo(e,N,u);break;default:throw Error(c(161))}}catch(z){Te(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kd(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),Ia(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ed(t,t.return,a),Ia(t);break;case 27:vn(t.stateNode);case 26:case 5:Ut(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function Ft(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:Ft(n,s,a),un(4,s);break;case 1:if(Ft(n,s,a),l=s,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){Te(l,l.return,N)}if(l=s,n=l.updateQueue,n!==null){var r=l.stateNode;try{var u=n.shared.hiddenCallbacks;if(u!==null)for(n.shared.hiddenCallbacks=null,n=0;n<u.length;n++)hu(u[n],r)}catch(N){Te(l,l.return,N)}}a&&o&64&&Sd(s),dn(s,s.return);break;case 27:Td(s);case 26:case 5:Ft(n,s,a),a&&l===null&&o&4&&wd(s),dn(s,s.return);break;case 12:Ft(n,s,a);break;case 31:Ft(n,s,a),a&&o&4&&Cd(n,s);break;case 13:Ft(n,s,a),a&&o&4&&Dd(n,s);break;case 22:s.memoizedState===null&&Ft(n,s,a),dn(s,s.return);break;case 30:break;default:Ft(n,s,a)}t=t.sibling}}function Bo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function Go(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ud(e,t,a,l),t=t.sibling}function Ud(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&un(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,r=s.onPostCommit;typeof r=="function"&&r(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){Te(t,t.return,u)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?Dt(e,t,a,l):hn(e,t):s._visibility&2?Dt(e,t,a,l):(s._visibility|=2,vl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Bo(o,t);break;case 24:Dt(e,t,a,l),n&2048&&Go(t.alternate,t);break;default:Dt(e,t,a,l)}}function vl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,r=a,u=l,N=o.flags;switch(o.tag){case 0:case 11:case 15:vl(s,o,r,u,n),un(8,o);break;case 23:break;case 22:var z=o.stateNode;o.memoizedState!==null?z._visibility&2?vl(s,o,r,u,n):hn(s,o):(z._visibility|=2,vl(s,o,r,u,n)),n&&N&2048&&Bo(o.alternate,o);break;case 24:vl(s,o,r,u,n),n&&N&2048&&Go(o.alternate,o);break;default:vl(s,o,r,u,n)}t=t.sibling}}function hn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:hn(a,l),n&2048&&Bo(l.alternate,l);break;case 24:hn(a,l),n&2048&&Go(l.alternate,l);break;default:hn(a,l)}t=t.sibling}}var fn=8192;function Nl(e,t,a){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)Hd(e,t,a),e=e.sibling}function Hd(e,t,a){switch(e.tag){case 26:Nl(e,t,a),e.flags&fn&&e.memoizedState!==null&&ab(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,a);break;case 3:case 4:var l=Ct;Ct=Vi(e.stateNode.containerInfo),Nl(e,t,a),Ct=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=fn,fn=16777216,Nl(e,t,a),fn=l):Nl(e,t,a));break;default:Nl(e,t,a)}}function Ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,Bd(l,e)}Ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vd(e),e=e.sibling}function Vd(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&ma(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_i(e)):mn(e);break;default:mn(e)}}function _i(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,Bd(l,e)}Ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),_i(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,_i(t));break;default:_i(t)}e=e.sibling}}function Bd(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ke=l;else e:for(a=e;Ke!==null;){l=Ke;var n=l.sibling,s=l.return;if(Ad(l),l===a){Ke=null;break e}if(n!==null){n.return=s,Ke=n;break e}Ke=s}}}var xm={getCacheForType:function(e){var t=We(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return We(Ye).controller.signal}},pm=typeof WeakMap=="function"?WeakMap:Map,we=0,Ce=null,be=null,pe=0,_e=0,xt=null,ba=!1,jl=!1,Yo=!1,Pt=0,Le=0,ga=0,Xa=0,qo=0,pt=0,Sl=0,bn=null,rt=null,Zo=!1,Ti=0,Gd=0,zi=1/0,ki=null,xa=null,Xe=0,pa=null,El=null,ea=0,Io=0,Xo=null,Yd=null,gn=0,Qo=null;function yt(){return(we&2)!==0&&pe!==0?pe&-pe:w.T!==null?Po():nc()}function qd(){if(pt===0)if((pe&536870912)===0||Ne){var e=Hn;Hn<<=1,(Hn&3932160)===0&&(Hn=262144),pt=e}else pt=536870912;return e=bt.current,e!==null&&(e.flags|=32),pt}function ct(e,t,a){(e===Ce&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(wl(e,0),ya(e,pe,pt,!1)),Ul(e,a),((we&2)===0||e!==Ce)&&(e===Ce&&((we&2)===0&&(Xa|=a),Le===4&&ya(e,pe,pt,!1)),Ht(e))}function Zd(e,t,a){if((we&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Rl(e,t),n=l?Nm(e,t):$o(e,t,!0),s=l;do{if(n===0){jl&&!l&&ya(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!ym(a)){n=$o(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var r=e;n=bn;var u=r.current.memoizedState.isDehydrated;if(u&&(wl(r,o).flags|=256),o=$o(r,o,!1),o!==2){if(Yo&&!u){r.errorRecoveryDisabledLanes|=s,Xa|=s,n=4;break e}s=rt,rt=n,s!==null&&(rt===null?rt=s:rt.push.apply(rt,s))}n=o}if(s=!1,n!==2)continue}}if(n===1){wl(e,0),ya(e,t,0,!0);break}e:{switch(l=e,s=n,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ya(l,t,pt,!ba);break e;case 2:rt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Ti+300-ut(),10<n)){if(ya(l,t,pt,!ba),Vn(l,0,!0)!==0)break e;ea=t,l.timeoutHandle=Nh(Id.bind(null,l,a,rt,ki,Zo,t,pt,Xa,Sl,ba,s,"Throttled",-0,0),n);break e}Id(l,a,rt,ki,Zo,t,pt,Xa,Sl,ba,s,null,-0,0)}}break}while(!0);Ht(e)}function Id(e,t,a,l,n,s,o,r,u,N,z,C,j,E){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},Hd(t,s,C);var Z=(s&62914560)===s?Ti-ut():(s&4194048)===s?Gd-ut():0;if(Z=lb(C,Z),Z!==null){ea=s,e.cancelPendingCommit=Z(Pd.bind(null,e,t,s,a,l,n,o,r,u,z,C,null,j,E)),ya(e,s,o,!N);return}}Pd(e,t,s,a,l,n,o,r,u)}function ym(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],s=n.getSnapshot;n=n.value;try{if(!ft(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ya(e,t,a,l){t&=~qo,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var s=31-ht(n),o=1<<s;l[s]=-1,n&=~o}a!==0&&tc(e,a,t)}function Ai(){return(we&6)===0?(xn(0),!1):!0}function Ko(){if(be!==null){if(_e===0)var e=be.return;else e=be,qt=Ha=null,co(e),bl=null,Fl=0,e=be;for(;e!==null;)jd(e.alternate,e),e=e.return;be=null}}function wl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Ko(),Ce=e,be=a=Gt(e.current,null),pe=t,_e=0,xt=null,ba=!1,jl=Rl(e,t),Yo=!1,Sl=pt=qo=Xa=ga=Le=0,rt=bn=null,Zo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ht(l),s=1<<n;t|=e[n],l&=~s}return Pt=t,Wn(),a}function Xd(e,t){re=null,w.H=on,t===ml||t===ii?(t=ru(),_e=3):t===Ws?(t=ru(),_e=4):_e=t===_o?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,be===null&&(Le=1,yi(e,St(t,e.current)))}function Qd(){var e=bt.current;return e===null?!0:(pe&4194048)===pe?Tt===null:(pe&62914560)===pe||(pe&536870912)!==0?e===Tt:!1}function Kd(){var e=w.H;return w.H=on,e===null?on:e}function $d(){var e=w.A;return w.A=xm,e}function Mi(){Le=4,ba||(pe&4194048)!==pe&&bt.current!==null||(jl=!0),(ga&134217727)===0&&(Xa&134217727)===0||Ce===null||ya(Ce,pe,pt,!1)}function $o(e,t,a){var l=we;we|=2;var n=Kd(),s=$d();(Ce!==e||pe!==t)&&(ki=null,wl(e,t)),t=!1;var o=Le;e:do try{if(_e!==0&&be!==null){var r=be,u=xt;switch(_e){case 8:Ko(),o=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var N=_e;if(_e=0,xt=null,_l(e,r,u,N),a&&jl){o=0;break e}break;default:N=_e,_e=0,xt=null,_l(e,r,u,N)}}vm(),o=Le;break}catch(z){Xd(e,z)}while(!0);return t&&e.shellSuspendCounter++,qt=Ha=null,we=l,w.H=n,w.A=s,be===null&&(Ce=null,pe=0,Wn()),o}function vm(){for(;be!==null;)Jd(be)}function Nm(e,t){var a=we;we|=2;var l=Kd(),n=$d();Ce!==e||pe!==t?(ki=null,zi=ut()+500,wl(e,t)):jl=Rl(e,t);e:do try{if(_e!==0&&be!==null){t=be;var s=xt;t:switch(_e){case 1:_e=0,xt=null,_l(e,t,s,1);break;case 2:case 9:if(su(s)){_e=0,xt=null,Wd(t);break}t=function(){_e!==2&&_e!==9||Ce!==e||(_e=7),Ht(e)},s.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:su(s)?(_e=0,xt=null,Wd(t)):(_e=0,xt=null,_l(e,t,s,7));break;case 5:var o=null;switch(be.tag){case 26:o=be.memoizedState;case 5:case 27:var r=be;if(o?Uh(o):r.stateNode.complete){_e=0,xt=null;var u=r.sibling;if(u!==null)be=u;else{var N=r.return;N!==null?(be=N,Ci(N)):be=null}break t}}_e=0,xt=null,_l(e,t,s,5);break;case 6:_e=0,xt=null,_l(e,t,s,6);break;case 8:Ko(),Le=6;break e;default:throw Error(c(462))}}jm();break}catch(z){Xd(e,z)}while(!0);return qt=Ha=null,w.H=l,w.A=n,we=a,be!==null?0:(Ce=null,pe=0,Wn(),Le)}function jm(){for(;be!==null&&!If();)Jd(be)}function Jd(e){var t=vd(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Ci(e):be=t}function Wd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=md(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=md(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:co(t);default:jd(a,t),t=be=$c(t,Pt),t=vd(a,t,Pt)}e.memoizedProps=e.pendingProps,t===null?Ci(e):be=t}function _l(e,t,a,l){qt=Ha=null,co(t),bl=null,Fl=0;var n=t.return;try{if(um(e,n,t,a,pe)){Le=1,yi(e,St(a,e.current)),be=null;return}}catch(s){if(n!==null)throw be=n,s;Le=1,yi(e,St(a,e.current)),be=null;return}t.flags&32768?(Ne||l===1?e=!0:jl||(pe&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fd(t,e)):Ci(t)}function Ci(e){var t=e;do{if((t.flags&32768)!==0){Fd(t,ba);return}e=t.return;var a=fm(t.alternate,t,Pt);if(a!==null){be=a;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Le===0&&(Le=5)}function Fd(e,t){do{var a=mm(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);Le=6,be=null}function Pd(e,t,a,l,n,s,o,r,u){e.cancelPendingCommit=null;do Di();while(Xe!==0);if((we&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Us,t0(e,a,s,o,r,u),e===Ce&&(be=Ce=null,pe=0),El=t,pa=e,ea=a,Io=s,Xo=n,Yd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_m(Rn,function(){return nh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=L.p,L.p=2,o=we,we|=4;try{bm(e,t,a)}finally{we=o,L.p=n,w.T=l}}Xe=1,eh(),th(),ah()}}function eh(){if(Xe===1){Xe=0;var e=pa,t=El,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=L.p;L.p=2;var n=we;we|=4;try{Od(t,e);var s=or,o=Bc(e.containerInfo),r=s.focusedElem,u=s.selectionRange;if(o!==r&&r&&r.ownerDocument&&Vc(r.ownerDocument.documentElement,r)){if(u!==null&&Ms(r)){var N=u.start,z=u.end;if(z===void 0&&(z=N),"selectionStart"in r)r.selectionStart=N,r.selectionEnd=Math.min(z,r.value.length);else{var C=r.ownerDocument||document,j=C&&C.defaultView||window;if(j.getSelection){var E=j.getSelection(),Z=r.textContent.length,ee=Math.min(u.start,Z),Ae=u.end===void 0?ee:Math.min(u.end,Z);!E.extend&&ee>Ae&&(o=Ae,Ae=ee,ee=o);var g=Lc(r,ee),m=Lc(r,Ae);if(g&&m&&(E.rangeCount!==1||E.anchorNode!==g.node||E.anchorOffset!==g.offset||E.focusNode!==m.node||E.focusOffset!==m.offset)){var v=C.createRange();v.setStart(g.node,g.offset),E.removeAllRanges(),ee>Ae?(E.addRange(v),E.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),E.addRange(v))}}}}for(C=[],E=r;E=E.parentNode;)E.nodeType===1&&C.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<C.length;r++){var k=C[r];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Ii=!!sr,or=sr=null}finally{we=n,L.p=l,w.T=a}}e.current=t,Xe=2}}function th(){if(Xe===2){Xe=0;var e=pa,t=El,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=L.p;L.p=2;var n=we;we|=4;try{kd(e,t.alternate,t)}finally{we=n,L.p=l,w.T=a}}Xe=3}}function ah(){if(Xe===4||Xe===3){Xe=0,Xf();var e=pa,t=El,a=ea,l=Yd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,El=pa=null,lh(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xa=null),hs(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=L.p,L.p=2,w.T=null;try{for(var s=e.onRecoverableError,o=0;o<l.length;o++){var r=l[o];s(r.value,{componentStack:r.stack})}}finally{w.T=t,L.p=n}}(ea&3)!==0&&Di(),Ht(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Qo?gn++:(gn=0,Qo=e):gn=0,xn(0)}}function lh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Di(){return eh(),th(),ah(),nh()}function nh(){if(Xe!==5)return!1;var e=pa,t=Io;Io=0;var a=hs(ea),l=w.T,n=L.p;try{L.p=32>a?32:a,w.T=null,a=Xo,Xo=null;var s=pa,o=ea;if(Xe=0,El=pa=null,ea=0,(we&6)!==0)throw Error(c(331));var r=we;if(we|=4,Vd(s.current),Ud(s,s.current,o,a),we=r,xn(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ol,s)}catch{}return!0}finally{L.p=n,w.T=l,lh(e,t)}}function ih(e,t,a){t=St(a,t),t=wo(e.stateNode,t,2),e=da(e,t,2),e!==null&&(Ul(e,2),Ht(e))}function Te(e,t,a){if(e.tag===3)ih(e,e,a);else for(;t!==null;){if(t.tag===3){ih(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))){e=St(a,e),a=sd(2),l=da(t,a,2),l!==null&&(od(a,l,t,e),Ul(l,2),Ht(l));break}}t=t.return}}function Jo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new pm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Yo=!0,n.add(a),e=Sm.bind(null,e,t,a),t.then(e,e))}function Sm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(pe&a)===a&&(Le===4||Le===3&&(pe&62914560)===pe&&300>ut()-Ti?(we&2)===0&&wl(e,0):qo|=a,Sl===pe&&(Sl=0)),Ht(e)}function sh(e,t){t===0&&(t=ec()),e=Oa(e,t),e!==null&&(Ul(e,t),Ht(e))}function Em(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sh(e,a)}function wm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),sh(e,a)}function _m(e,t){return rs(e,t)}var Oi=null,Tl=null,Wo=!1,Ri=!1,Fo=!1,va=0;function Ht(e){e!==Tl&&e.next===null&&(Tl===null?Oi=Tl=e:Tl=Tl.next=e),Ri=!0,Wo||(Wo=!0,zm())}function xn(e,t){if(!Fo&&Ri){Fo=!0;do for(var a=!1,l=Oi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var s=0;else{var o=l.suspendedLanes,r=l.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=n&~(o&~r),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,uh(l,s))}else s=pe,s=Vn(l,l===Ce?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Rl(l,s)||(a=!0,uh(l,s));l=l.next}while(a);Fo=!1}}function Tm(){oh()}function oh(){Ri=Wo=!1;var e=0;va!==0&&Lm()&&(e=va);for(var t=ut(),a=null,l=Oi;l!==null;){var n=l.next,s=rh(l,t);s===0?(l.next=null,a===null?Oi=n:a.next=n,n===null&&(Tl=a)):(a=l,(e!==0||(s&3)!==0)&&(Ri=!0)),l=n}Xe!==0&&Xe!==5||xn(e),va!==0&&(va=0)}function rh(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-ht(s),r=1<<o,u=n[o];u===-1?((r&a)===0||(r&l)!==0)&&(n[o]=e0(r,t)):u<=t&&(e.expiredLanes|=r),s&=~r}if(t=Ce,a=pe,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&cs(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&cs(l),hs(a)){case 2:case 8:a=Fr;break;case 32:a=Rn;break;case 268435456:a=Pr;break;default:a=Rn}return l=ch.bind(null,e),a=rs(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&cs(l),e.callbackPriority=2,e.callbackNode=null,2}function ch(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Di()&&e.callbackNode!==a)return null;var l=pe;return l=Vn(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zd(e,l,t),rh(e,ut()),e.callbackNode!=null&&e.callbackNode===a?ch.bind(null,e):null)}function uh(e,t){if(Di())return null;Zd(e,t,!0)}function zm(){Bm(function(){(we&6)!==0?rs(Wr,Tm):oh()})}function Po(){if(va===0){var e=hl;e===0&&(e=Un,Un<<=1,(Un&261888)===0&&(Un=256)),va=e}return va}function dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qn(""+e)}function hh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function km(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var s=dh((n[lt]||null).action),o=l.submitter;o&&(t=(t=o[lt]||null)?dh(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var r=new Qn("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(va!==0){var u=o?hh(n,o):new FormData(n);yo(a,{pending:!0,data:u,method:n.method,action:s},null,u)}}else typeof s=="function"&&(r.preventDefault(),u=o?hh(n,o):new FormData(n),yo(a,{pending:!0,data:u,method:n.method,action:s},s,u))},currentTarget:n}]})}}for(var er=0;er<Rs.length;er++){var tr=Rs[er],Am=tr.toLowerCase(),Mm=tr[0].toUpperCase()+tr.slice(1);Mt(Am,"on"+Mm)}Mt(qc,"onAnimationEnd"),Mt(Zc,"onAnimationIteration"),Mt(Ic,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Q0,"onTransitionRun"),Mt(K0,"onTransitionStart"),Mt($0,"onTransitionCancel"),Mt(Xc,"onTransitionEnd"),Fa("onMouseEnter",["mouseout","mouseover"]),Fa("onMouseLeave",["mouseout","mouseover"]),Fa("onPointerEnter",["pointerout","pointerover"]),Fa("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function fh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var o=l.length-1;0<=o;o--){var r=l[o],u=r.instance,N=r.currentTarget;if(r=r.listener,u!==s&&n.isPropagationStopped())break e;s=r,n.currentTarget=N;try{s(n)}catch(z){Jn(z)}n.currentTarget=null,s=u}else for(o=0;o<l.length;o++){if(r=l[o],u=r.instance,N=r.currentTarget,r=r.listener,u!==s&&n.isPropagationStopped())break e;s=r,n.currentTarget=N;try{s(n)}catch(z){Jn(z)}n.currentTarget=null,s=u}}}}function ge(e,t){var a=t[fs];a===void 0&&(a=t[fs]=new Set);var l=e+"__bubble";a.has(l)||(mh(t,e,2,!1),a.add(l))}function ar(e,t,a){var l=0;t&&(l|=4),mh(a,e,l,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Ui]){e[Ui]=!0,oc.forEach(function(a){a!=="selectionchange"&&(Cm.has(a)||ar(a,!1,e),ar(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,ar("selectionchange",!1,t))}}function mh(e,t,a,l){switch(qh(t)){case 2:var n=sb;break;case 8:n=ob;break;default:n=pr}a=n.bind(null,t,a,e),n=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function nr(e,t,a,l,n){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var r=l.stateNode.containerInfo;if(r===n)break;if(o===4)for(o=l.return;o!==null;){var u=o.tag;if((u===3||u===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;r!==null;){if(o=$a(r),o===null)return;if(u=o.tag,u===5||u===6||u===26||u===27){l=s=o;continue e}r=r.parentNode}}l=l.return}yc(function(){var N=s,z=vs(a),C=[];e:{var j=Qc.get(e);if(j!==void 0){var E=Qn,Z=e;switch(e){case"keypress":if(In(a)===0)break e;case"keydown":case"keyup":E=w0;break;case"focusin":Z="focus",E=_s;break;case"focusout":Z="blur",E=_s;break;case"beforeblur":case"afterblur":E=_s;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=z0;break;case qc:case Zc:case Ic:E=g0;break;case Xc:E=A0;break;case"scroll":case"scrollend":E=d0;break;case"wheel":E=C0;break;case"copy":case"cut":case"paste":E=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ec;break;case"toggle":case"beforetoggle":E=O0}var ee=(t&4)!==0,Ae=!ee&&(e==="scroll"||e==="scrollend"),g=ee?j!==null?j+"Capture":null:j;ee=[];for(var m=N,v;m!==null;){var k=m;if(v=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||v===null||g===null||(k=Vl(m,g),k!=null&&ee.push(yn(m,k,v))),Ae)break;m=m.return}0<ee.length&&(j=new E(j,Z,null,a,z),C.push({event:j,listeners:ee}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",j&&a!==ys&&(Z=a.relatedTarget||a.fromElement)&&($a(Z)||Z[Ka]))break e;if((E||j)&&(j=z.window===z?z:(j=z.ownerDocument)?j.defaultView||j.parentWindow:window,E?(Z=a.relatedTarget||a.toElement,E=N,Z=Z?$a(Z):null,Z!==null&&(Ae=_(Z),ee=Z.tag,Z!==Ae||ee!==5&&ee!==27&&ee!==6)&&(Z=null)):(E=null,Z=N),E!==Z)){if(ee=jc,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Ec,k="onPointerLeave",g="onPointerEnter",m="pointer"),Ae=E==null?j:Ll(E),v=Z==null?j:Ll(Z),j=new ee(k,m+"leave",E,a,z),j.target=Ae,j.relatedTarget=v,k=null,$a(z)===N&&(ee=new ee(g,m+"enter",Z,a,z),ee.target=v,ee.relatedTarget=Ae,k=ee),Ae=k,E&&Z)t:{for(ee=Dm,g=E,m=Z,v=0,k=g;k;k=ee(k))v++;k=0;for(var F=m;F;F=ee(F))k++;for(;0<v-k;)g=ee(g),v--;for(;0<k-v;)m=ee(m),k--;for(;v--;){if(g===m||m!==null&&g===m.alternate){ee=g;break t}g=ee(g),m=ee(m)}ee=null}else ee=null;E!==null&&bh(C,j,E,ee,!1),Z!==null&&Ae!==null&&bh(C,Ae,Z,ee,!0)}}e:{if(j=N?Ll(N):window,E=j.nodeName&&j.nodeName.toLowerCase(),E==="select"||E==="input"&&j.type==="file")var Se=Cc;else if(Ac(j))if(Dc)Se=Z0;else{Se=Y0;var K=G0}else E=j.nodeName,!E||E.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?N&&ps(N.elementType)&&(Se=Cc):Se=q0;if(Se&&(Se=Se(e,N))){Mc(C,Se,a,z);break e}K&&K(e,j,N),e==="focusout"&&N&&j.type==="number"&&N.memoizedProps.value!=null&&xs(j,"number",j.value)}switch(K=N?Ll(N):window,e){case"focusin":(Ac(K)||K.contentEditable==="true")&&(nl=K,Cs=N,Ql=null);break;case"focusout":Ql=Cs=nl=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,Gc(C,a,z);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":Gc(C,a,z)}var ue;if(zs)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else ll?zc(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(wc&&a.locale!=="ko"&&(ll||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ll&&(ue=vc()):(na=z,Ss="value"in na?na.value:na.textContent,ll=!0)),K=Hi(N,ye),0<K.length&&(ye=new Sc(ye,e,null,a,z),C.push({event:ye,listeners:K}),ue?ye.data=ue:(ue=kc(a),ue!==null&&(ye.data=ue)))),(ue=U0?H0(e,a):L0(e,a))&&(ye=Hi(N,"onBeforeInput"),0<ye.length&&(K=new Sc("onBeforeInput","beforeinput",null,a,z),C.push({event:K,listeners:ye}),K.data=ue)),km(C,e,N,a,z)}fh(C,t)})}function yn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=Vl(e,a),n!=null&&l.unshift(yn(e,n,s)),n=Vl(e,t),n!=null&&l.push(yn(e,n,s))),e.tag===3)return l;e=e.return}return[]}function Dm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bh(e,t,a,l,n){for(var s=t._reactName,o=[];a!==null&&a!==l;){var r=a,u=r.alternate,N=r.stateNode;if(r=r.tag,u!==null&&u===l)break;r!==5&&r!==26&&r!==27||N===null||(u=N,n?(N=Vl(a,s),N!=null&&o.unshift(yn(a,N,u))):n||(N=Vl(a,s),N!=null&&o.push(yn(a,N,u)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Om=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function gh(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Rm,"")}function xh(e,t){return t=gh(t),gh(e)===t}function ke(e,t,a,l,n,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||el(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&el(e,""+l);break;case"className":Gn(e,"class",l);break;case"tabIndex":Gn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Gn(e,a,l);break;case"style":xc(e,l,s);break;case"data":if(t!=="object"){Gn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=qn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",n.name,n,null),ke(e,t,"formEncType",n.formEncType,n,null),ke(e,t,"formMethod",n.formMethod,n,null),ke(e,t,"formTarget",n.formTarget,n,null)):(ke(e,t,"encType",n.encType,n,null),ke(e,t,"method",n.method,n,null),ke(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=qn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Vt);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Bn(e,"popover",l);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Bn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=c0.get(a)||a,Bn(e,a,l))}}function ir(e,t,a,l,n,s){switch(a){case"style":xc(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?el(e,l):(typeof l=="number"||typeof l=="bigint")&&el(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Vt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[lt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Bn(e,a,l)}}}function Pe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,s,o,a,null)}}n&&ke(e,t,"srcSet",a.srcSet,a,null),l&&ke(e,t,"src",a.src,a,null);return;case"input":ge("invalid",e);var r=s=o=n=null,u=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var z=a[l];if(z!=null)switch(l){case"name":n=z;break;case"type":o=z;break;case"checked":u=z;break;case"defaultChecked":N=z;break;case"value":s=z;break;case"defaultValue":r=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:ke(e,t,l,z,a,null)}}fc(e,s,r,u,N,o,n,!1);return;case"select":ge("invalid",e),l=o=s=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":s=r;break;case"defaultValue":o=r;break;case"multiple":l=r;default:ke(e,t,n,r,a,null)}t=s,a=o,e.multiple=!!l,t!=null?Pa(e,!!l,t,!1):a!=null&&Pa(e,!!l,a,!0);return;case"textarea":ge("invalid",e),s=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(r=a[o],r!=null))switch(o){case"value":l=r;break;case"defaultValue":n=r;break;case"children":s=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:ke(e,t,o,r,a,null)}bc(e,l,n,s);return;case"option":for(u in a)if(a.hasOwnProperty(u)&&(l=a[u],l!=null))switch(u){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,t,u,l,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<pn.length;l++)ge(pn[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,N,l,a,null)}return;default:if(ps(t)){for(z in a)a.hasOwnProperty(z)&&(l=a[z],l!==void 0&&ir(e,t,z,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&ke(e,t,r,l,a,null))}function Um(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,o=null,r=null,u=null,N=null,z=null;for(E in a){var C=a[E];if(a.hasOwnProperty(E)&&C!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":u=C;default:l.hasOwnProperty(E)||ke(e,t,E,null,l,C)}}for(var j in l){var E=l[j];if(C=a[j],l.hasOwnProperty(j)&&(E!=null||C!=null))switch(j){case"type":s=E;break;case"name":n=E;break;case"checked":N=E;break;case"defaultChecked":z=E;break;case"value":o=E;break;case"defaultValue":r=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,t));break;default:E!==C&&ke(e,t,j,E,l,C)}}gs(e,o,r,u,N,z,s,n);return;case"select":E=o=r=j=null;for(s in a)if(u=a[s],a.hasOwnProperty(s)&&u!=null)switch(s){case"value":break;case"multiple":E=u;default:l.hasOwnProperty(s)||ke(e,t,s,null,l,u)}for(n in l)if(s=l[n],u=a[n],l.hasOwnProperty(n)&&(s!=null||u!=null))switch(n){case"value":j=s;break;case"defaultValue":r=s;break;case"multiple":o=s;default:s!==u&&ke(e,t,n,s,l,u)}t=r,a=o,l=E,j!=null?Pa(e,!!a,j,!1):!!l!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":E=j=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ke(e,t,r,null,l,n)}for(o in l)if(n=l[o],s=a[o],l.hasOwnProperty(o)&&(n!=null||s!=null))switch(o){case"value":j=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==s&&ke(e,t,o,n,l,s)}mc(e,j,E);return;case"option":for(var Z in a)if(j=a[Z],a.hasOwnProperty(Z)&&j!=null&&!l.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:ke(e,t,Z,null,l,j)}for(u in l)if(j=l[u],E=a[u],l.hasOwnProperty(u)&&j!==E&&(j!=null||E!=null))switch(u){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:ke(e,t,u,j,l,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)j=a[ee],a.hasOwnProperty(ee)&&j!=null&&!l.hasOwnProperty(ee)&&ke(e,t,ee,null,l,j);for(N in l)if(j=l[N],E=a[N],l.hasOwnProperty(N)&&j!==E&&(j!=null||E!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:ke(e,t,N,j,l,E)}return;default:if(ps(t)){for(var Ae in a)j=a[Ae],a.hasOwnProperty(Ae)&&j!==void 0&&!l.hasOwnProperty(Ae)&&ir(e,t,Ae,void 0,l,j);for(z in l)j=l[z],E=a[z],!l.hasOwnProperty(z)||j===E||j===void 0&&E===void 0||ir(e,t,z,j,l,E);return}}for(var g in a)j=a[g],a.hasOwnProperty(g)&&j!=null&&!l.hasOwnProperty(g)&&ke(e,t,g,null,l,j);for(C in l)j=l[C],E=a[C],!l.hasOwnProperty(C)||j===E||j==null&&E==null||ke(e,t,C,j,l,E)}function ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],s=n.transferSize,o=n.initiatorType,r=n.duration;if(s&&r&&ph(o)){for(o=0,r=n.responseEnd,l+=1;l<a.length;l++){var u=a[l],N=u.startTime;if(N>r)break;var z=u.transferSize,C=u.initiatorType;z&&ph(C)&&(u=u.responseEnd,o+=z*(u<r?1:(r-N)/(u-N)))}if(--l,t+=8*(s+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sr=null,or=null;function Li(e){return e.nodeType===9?e:e.ownerDocument}function yh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cr=null;function Lm(){var e=window.event;return e&&e.type==="popstate"?e===cr?!1:(cr=e,!0):(cr=null,!1)}var Nh=typeof setTimeout=="function"?setTimeout:void 0,Vm=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(e){return jh.resolve(null).then(e).catch(Gm)}:Nh;function Gm(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function Sh(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ml(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")vn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vn(a);for(var s=a.firstChild;s;){var o=s.nextSibling,r=s.nodeName;s[Hl]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=o}}else a==="body"&&vn(e.ownerDocument.body);a=n}while(a);Ml(t)}function Eh(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function ur(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ur(a),ms(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ym(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Hl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function qm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function wh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function dr(e){return e.data==="$?"||e.data==="$~"}function hr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fr=null;function _h(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function zh(e,t,a){switch(t=Li(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ms(e)}var kt=new Map,kh=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=L.d;L.d={f:Im,r:Xm,D:Qm,C:Km,L:$m,m:Jm,X:Fm,S:Wm,M:Pm};function Im(){var e=ta.f(),t=Ai();return e||t}function Xm(e){var t=Ja(e);t!==null&&t.tag===5&&t.type==="form"?Xu(t):ta.r(e)}var zl=typeof document>"u"?null:document;function Ah(e,t,a){var l=zl;if(l&&typeof t=="string"&&t){var n=Nt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),kh.has(n)||(kh.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Pe(t,"link",e),Qe(t),l.head.appendChild(t)))}}function Qm(e){ta.D(e),Ah("dns-prefetch",e,null)}function Km(e,t){ta.C(e,t),Ah("preconnect",e,t)}function $m(e,t,a){ta.L(e,t,a);var l=zl;if(l&&e&&t){var n='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Nt(a.imageSizes)+'"]')):n+='[href="'+Nt(e)+'"]';var s=n;switch(t){case"style":s=kl(e);break;case"script":s=Al(e)}kt.has(s)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),kt.set(s,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Nn(s))||t==="script"&&l.querySelector(jn(s))||(t=l.createElement("link"),Pe(t,"link",e),Qe(t),l.head.appendChild(t)))}}function Jm(e,t){ta.m(e,t);var a=zl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',s=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Al(e)}if(!kt.has(s)&&(e=T({rel:"modulepreload",href:e},t),kt.set(s,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jn(s)))return}l=a.createElement("link"),Pe(l,"link",e),Qe(l),a.head.appendChild(l)}}}function Wm(e,t,a){ta.S(e,t,a);var l=zl;if(l&&e){var n=Wa(l).hoistableStyles,s=kl(e);t=t||"default";var o=n.get(s);if(!o){var r={loading:0,preload:null};if(o=l.querySelector(Nn(s)))r.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=kt.get(s))&&mr(e,a);var u=o=l.createElement("link");Qe(u),Pe(u,"link",e),u._p=new Promise(function(N,z){u.onload=N,u.onerror=z}),u.addEventListener("load",function(){r.loading|=1}),u.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Bi(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:r},n.set(s,o)}}}function Fm(e,t){ta.X(e,t);var a=zl;if(a&&e){var l=Wa(a).hoistableScripts,n=Al(e),s=l.get(n);s||(s=a.querySelector(jn(n)),s||(e=T({src:e,async:!0},t),(t=kt.get(n))&&br(e,t),s=a.createElement("script"),Qe(s),Pe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function Pm(e,t){ta.M(e,t);var a=zl;if(a&&e){var l=Wa(a).hoistableScripts,n=Al(e),s=l.get(n);s||(s=a.querySelector(jn(n)),s||(e=T({src:e,async:!0,type:"module"},t),(t=kt.get(n))&&br(e,t),s=a.createElement("script"),Qe(s),Pe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function Mh(e,t,a,l){var n=(n=he.current)?Vi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=kl(a.href),a=Wa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=kl(a.href);var s=Wa(n).hoistableStyles,o=s.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=n.querySelector(Nn(e)))&&!s._p&&(o.instance=s,o.state.loading=5),kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kt.set(e,a),s||eb(n,e,a,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Wa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function kl(e){return'href="'+Nt(e)+'"'}function Nn(e){return'link[rel="stylesheet"]['+e+"]"}function Ch(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function eb(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Pe(t,"link",a),Qe(t),e.head.appendChild(t))}function Al(e){return'[src="'+Nt(e)+'"]'}function jn(e){return"script[async]"+e}function Dh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(l)return t.instance=l,Qe(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),Pe(l,"style",n),Bi(l,a.precedence,e),t.instance=l;case"stylesheet":n=kl(a.href);var s=e.querySelector(Nn(n));if(s)return t.state.loading|=4,t.instance=s,Qe(s),s;l=Ch(a),(n=kt.get(n))&&mr(l,n),s=(e.ownerDocument||e).createElement("link"),Qe(s);var o=s;return o._p=new Promise(function(r,u){o.onload=r,o.onerror=u}),Pe(s,"link",l),t.state.loading|=4,Bi(s,a.precedence,e),t.instance=s;case"script":return s=Al(a.src),(n=e.querySelector(jn(s)))?(t.instance=n,Qe(n),n):(l=a,(n=kt.get(s))&&(l=T({},a),br(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Qe(n),Pe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Bi(l,a.precedence,e));return t.instance}function Bi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,s=n,o=0;o<l.length;o++){var r=l[o];if(r.dataset.precedence===t)s=r;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function mr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function br(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function Oh(e,t,a){if(Gi===null){var l=new Map,n=Gi=new Map;n.set(a,l)}else n=Gi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[Hl]||s[$e]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var r=l.get(o);r?r.push(s):l.set(o,[s])}}return l}function Rh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function tb(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ab(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=kl(l.href),s=t.querySelector(Nn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Qe(s);return}s=t.ownerDocument||t,l=Ch(l),(n=kt.get(n))&&mr(l,n),s=s.createElement("link"),Qe(s);var o=s;o._p=new Promise(function(r,u){o.onload=r,o.onerror=u}),Pe(s,"link",l),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var gr=0;function lb(e,t){return e.stylesheets&&e.count===0&&Zi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Zi(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&gr===0&&(gr=62500*Hm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zi(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>gr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Yi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function Zi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach(nb,e),qi=null,Yi.call(e))}function nb(e,t){if(!(t.state.loading&4)){var a=qi.get(e);if(a)var l=a.get(null);else{a=new Map,qi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var o=n[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),s=a.get(o)||l,s===l&&a.set(null,n),a.set(o,n),this.count++,l=Yi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Sn={$$typeof:ae,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function ib(e,t,a,l,n,s,o,r,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=us(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.hiddenUpdates=us(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Hh(e,t,a,l,n,s,o,r,u,N,z,C){return e=new ib(e,t,a,o,u,N,z,C,r),t=1,s===!0&&(t|=24),s=mt(3,null,null,t),e.current=s,s.stateNode=e,t=Ks(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},Fs(s),e}function Lh(e){return e?(e=ol,e):ol}function Vh(e,t,a,l,n,s){n=Lh(n),l.context===null?l.context=n:l.pendingContext=n,l=ua(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=da(e,l,t),a!==null&&(ct(a,e,t),en(a,e,t))}function Bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function xr(e,t){Bh(e,t),(e=e.alternate)&&Bh(e,t)}function Gh(e){if(e.tag===13||e.tag===31){var t=Oa(e,67108864);t!==null&&ct(t,e,67108864),xr(e,67108864)}}function Yh(e){if(e.tag===13||e.tag===31){var t=yt();t=ds(t);var a=Oa(e,t);a!==null&&ct(a,e,t),xr(e,t)}}var Ii=!0;function sb(e,t,a,l){var n=w.T;w.T=null;var s=L.p;try{L.p=2,pr(e,t,a,l)}finally{L.p=s,w.T=n}}function ob(e,t,a,l){var n=w.T;w.T=null;var s=L.p;try{L.p=8,pr(e,t,a,l)}finally{L.p=s,w.T=n}}function pr(e,t,a,l){if(Ii){var n=yr(l);if(n===null)nr(e,t,l,Xi,a),Zh(e,l);else if(cb(n,e,t,a,l))l.stopPropagation();else if(Zh(e,l),t&4&&-1<rb.indexOf(e)){for(;n!==null;){var s=Ja(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=ka(s.pendingLanes);if(o!==0){var r=s;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var u=1<<31-ht(o);r.entanglements[1]|=u,o&=~u}Ht(s),(we&6)===0&&(zi=ut()+500,xn(0))}}break;case 31:case 13:r=Oa(s,2),r!==null&&ct(r,s,2),Ai(),xr(s,2)}if(s=yr(l),s===null&&nr(e,t,l,Xi,a),s===n)break;n=s}n!==null&&l.stopPropagation()}else nr(e,t,l,null,a)}}function yr(e){return e=vs(e),vr(e)}var Xi=null;function vr(e){if(Xi=null,e=$a(e),e!==null){var t=_(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=H(t),e!==null)return e;e=null}else if(a===31){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xi=e,null}function qh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qf()){case Wr:return 2;case Fr:return 8;case Rn:case Kf:return 32;case Pr:return 268435456;default:return 32}default:return 32}}var Nr=!1,ja=null,Sa=null,Ea=null,En=new Map,wn=new Map,wa=[],rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zh(e,t){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function _n(e,t,a,l,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[n]},t!==null&&(t=Ja(t),t!==null&&Gh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function cb(e,t,a,l,n){switch(t){case"focusin":return ja=_n(ja,e,t,a,l,n),!0;case"dragenter":return Sa=_n(Sa,e,t,a,l,n),!0;case"mouseover":return Ea=_n(Ea,e,t,a,l,n),!0;case"pointerover":var s=n.pointerId;return En.set(s,_n(En.get(s)||null,e,t,a,l,n)),!0;case"gotpointercapture":return s=n.pointerId,wn.set(s,_n(wn.get(s)||null,e,t,a,l,n)),!0}return!1}function Ih(e){var t=$a(e.target);if(t!==null){var a=_(t);if(a!==null){if(t=a.tag,t===13){if(t=H(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Yh(a)});return}}else if(t===31){if(t=S(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Yh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=yr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ys=l,a.target.dispatchEvent(l),ys=null}else return t=Ja(a),t!==null&&Gh(t),e.blockedOn=a,!1;t.shift()}return!0}function Xh(e,t,a){Qi(e)&&a.delete(t)}function ub(){Nr=!1,ja!==null&&Qi(ja)&&(ja=null),Sa!==null&&Qi(Sa)&&(Sa=null),Ea!==null&&Qi(Ea)&&(Ea=null),En.forEach(Xh),wn.forEach(Xh)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,Nr||(Nr=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,ub)))}var $i=null;function Qh(e){$i!==e&&($i=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){$i===e&&($i=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(vr(l||a)===null)continue;break}var s=Ja(a);s!==null&&(e.splice(t,3),t-=3,yo(s,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ml(e){function t(u){return Ki(u,e)}ja!==null&&Ki(ja,e),Sa!==null&&Ki(Sa,e),Ea!==null&&Ki(Ea,e),En.forEach(t),wn.forEach(t);for(var a=0;a<wa.length;a++){var l=wa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Ih(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],s=a[l+1],o=n[lt]||null;if(typeof s=="function")o||Qh(a);else if(o){var r=null;if(s&&s.hasAttribute("formAction")){if(n=s,o=s[lt]||null)r=o.formAction;else if(vr(n)!==null)continue}else r=o.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),Qh(a)}}}function Kh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function jr(e){this._internalRoot=e}Ji.prototype.render=jr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=yt();Vh(a,l,e,t,null,null)},Ji.prototype.unmount=jr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vh(e.current,2,null,e,null,null),Ai(),t[Ka]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<wa.length&&t!==0&&t<wa[a].priority;a++);wa.splice(a,0,e),a===0&&Ih(e)}};var $h=x.version;if($h!=="19.2.3")throw Error(c(527,$h,"19.2.3"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var db={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Ol=Wi.inject(db),dt=Wi}catch{}}return zn.createRoot=function(e,t){if(!b(e))throw Error(c(299));var a=!1,l="",n=ad,s=ld,o=nd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hh(e,1,!1,null,null,a,l,null,n,s,o,Kh),e[Ka]=t.current,lr(e),new jr(t)},zn.hydrateRoot=function(e,t,a){if(!b(e))throw Error(c(299));var l=!1,n="",s=ad,o=ld,r=nd,u=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=Hh(e,1,!0,t,a??null,l,n,u,s,o,r,Kh),t.context=Lh(null),a=t.current,l=yt(),l=ds(l),n=ua(l),n.callback=null,da(a,n,l),a=l,t.current.lanes=a,Ul(t,a),Ht(t),e[Ka]=t.current,lr(e),new Ji(t)},zn.version="19.2.3",zn}var sf;function Nb(){if(sf)return wr.exports;sf=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(x){console.error(x)}}return d(),wr.exports=vb(),wr.exports}var jb=Nb();const Sb=jf(jb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=d=>d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wb=d=>d.replace(/^([A-Z])|[\s-_]+(\w)/g,(x,p,c)=>c?c.toUpperCase():p.toLowerCase()),of=d=>{const x=wb(d);return x.charAt(0).toUpperCase()+x.slice(1)},Ef=(...d)=>d.filter((x,p,c)=>!!x&&x.trim()!==""&&c.indexOf(x)===p).join(" ").trim(),_b=d=>{for(const x in d)if(x.startsWith("aria-")||x==="role"||x==="title")return!0};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=V.forwardRef(({color:d="currentColor",size:x=24,strokeWidth:p=2,absoluteStrokeWidth:c,className:b="",children:_,iconNode:H,...S},y)=>V.createElement("svg",{ref:y,...Tb,width:x,height:x,stroke:d,strokeWidth:c?Number(p)*24/Number(x):p,className:Ef("lucide",b),...!_&&!_b(S)&&{"aria-hidden":"true"},...S},[...H.map(([h,D])=>V.createElement(h,D)),...Array.isArray(_)?_:[_]]));/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(d,x)=>{const p=V.forwardRef(({className:c,...b},_)=>V.createElement(zb,{ref:_,iconNode:x,className:Ef(`lucide-${Eb(of(d))}`,`lucide-${d}`,c),...b}));return p.displayName=of(d),p};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ta=$("activity",kb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],qr=$("arrow-left",Ab);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Dr=$("arrow-right",Mb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Db=$("binary",Cb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],wf=$("book-open",Ob);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Ub=$("book",Rb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Lb=$("box",Hb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],_f=$("brain",Vb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zr=$("check",Bb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],es=$("chevron-left",Gb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],as=$("chevron-right",Yb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Zb=$("circle-alert",qb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xb=$("circle-check-big",Ib);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Kb=$("clock",Qb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],Tf=$("cloud-rain",$b);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ls=$("cpu",Jb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Ir=$("database",Wb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Pb=$("disc",Fb);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zf=$("eye",eg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ts=$("file-text",tg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],kf=$("folder-open",ag);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Af=$("folder",lg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Mf=$("git-branch",ng);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Cn=$("globe",ig);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],og=$("hard-drive",sg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Cf=$("hash",rg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ug=$("heart",cg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],hg=$("house",dg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Xr=$("image",fg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Df=$("list",mg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Of=$("loader-circle",bg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Dn=$("lock",gg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],rf=$("maximize",xg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],cf=$("minimize",pg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Or=$("monitor",yg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],uf=$("moon",vg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],jg=$("mouse-pointer-2",Ng);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],df=$("music",Sg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],wg=$("network",Eg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Tg=$("refresh-cw",_g);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fi=$("settings",zg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Ag=$("share-2",kg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Qr=$("shield-alert",Mg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Dg=$("shield",Cg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],Rg=$("sparkle",Og);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Rf=$("sparkles",Ug);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Uf=$("star",Hg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],hf=$("sun",Lg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Bg=$("target",Vg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Hf=$("terminal",Gg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Cl=$("triangle-alert",Yg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],ff=$("type",qg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],mf=$("user",Zg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Lf=$("users",Ig);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2",key:"1fod00"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",key:"d70hit"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2",key:"136fht"}]],Qg=$("venetian-mask",Xg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}]],$g=$("volume-1",Kg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Vf=$("volume-2",Jg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Bf=$("wifi",Wg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Pg=$("wind",Fg);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rr=$("x",ex);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Gf=$("zap",tx),ax=1500,kr=2e3,bf=800;let kn=null;const Qa=()=>(kn||(kn=new Audio,kn.loop=!0,kn.preload="auto"),kn),lx=()=>{const d=Qa();if(d.paused){const x=d.play();x!==void 0&&x.then(()=>{d.pause()}).catch(p=>{})}},nx=d=>{try{return/^https?:\/\//i.test(d)||/^\/\//.test(d)?d:typeof window<"u"&&window.location?new URL(d,window.location.href).href:d}catch{return d}},Ur=({isSetupMode:d=!1,isPlaying:x,onToggle:p,volume:c,onVolumeChange:b,audioSources:_=[],trackTitle:H="UNKNOWN",trackComposer:S="UNKNOWN",className:y=""})=>{const h=V.useRef(null),D=V.useRef(null),[T,M]=V.useState(!1),[U,R]=V.useState(!1),[G,te]=V.useState(0),[se,le]=V.useState(0),[ae,ve]=V.useState(!0);V.useEffect(()=>{te(0)},[_[0]]),V.useEffect(()=>{x&&!d&&ve(!0)},[x,d]),V.useEffect(()=>{if(_.length===0||!x||d)return;const O=3;let I=0,P;const ce=()=>{const oe=Qa();I<O&&(oe.paused||oe.readyState<3)&&(I++,console.log(`[BGM] Audio appears stuck. Force reloading attempt ${I}/${O}`),le(J=>J+1),P=window.setTimeout(ce,2500))};return P=window.setTimeout(ce,1500),()=>window.clearTimeout(P)},[]);const Q=(O,I)=>new Promise(P=>{const ce=Qa();h.current&&window.clearInterval(h.current);const oe=ce.volume,J=O-oe;if(Math.abs(J)<.01){ce.volume=O,P();return}const de=Date.now();h.current=window.setInterval(()=>{const fe=Date.now()-de,w=Math.min(fe/I,1);ce.volume=Math.max(0,Math.min(1,oe+J*w)),w>=1&&(h.current&&window.clearInterval(h.current),ce.volume=O,P())},50)});V.useEffect(()=>{const O=Qa(),I=()=>{R(!1),M(!1)},P=J=>{console.warn(`Audio Error on source index ${G}:`,J),G<_.length-1?(console.log("[BGM] Switching to backup source..."),te(de=>de+1),M(!1)):(M(!0),R(!1))},ce=()=>R(!0),oe=()=>{R(!1),M(!1)};return O.readyState>=3&&R(!1),O.addEventListener("canplay",I),O.addEventListener("loadeddata",I),O.addEventListener("error",P),O.addEventListener("waiting",ce),O.addEventListener("playing",oe),()=>{O.removeEventListener("canplay",I),O.removeEventListener("loadeddata",I),O.removeEventListener("error",P),O.removeEventListener("waiting",ce),O.removeEventListener("playing",oe)}},[_,G]),V.useEffect(()=>{const O=Qa(),I=_[G]||"",P=I?nx(I):"",ce=O.src;if(P&&ce===P&&se===0){if(D.current=I,x)if(O.paused){const J=O.play();J!==void 0&&J.then(()=>{R(!1),O.volume<c&&Q(c,kr)}).catch(de=>{console.warn("Resume blocked:",de),R(!1)})}else R(!1),O.volume<c&&Q(c,kr);return}D.current=I,(async()=>{if(R(!0),M(!1),!O.paused&&O.volume>0?(await Q(0,ax),O.pause()):O.volume=0,P)if(O.src=P,O.load(),x){const J=O.play();J!==void 0&&J.then(()=>{R(!1),Q(c,kr)}).catch(de=>{console.warn("Auto-play blocked or load error",de),R(!1)})}else R(!1);else O.removeAttribute("src"),R(!1)})()},[_,G,se]),V.useEffect(()=>{const O=Qa();if(O.src)if(x)if(O.paused){O.volume=0;const I=O.play();I!==void 0&&I.then(()=>{R(!1),Q(c,bf)}).catch(P=>{console.warn("Toggle play failed",P),R(!1)})}else Math.abs(O.volume-c)>.1&&Q(c,500);else O.paused||Q(0,bf).then(()=>{x||O.pause()})},[x]),V.useEffect(()=>{const O=Qa();x&&!O.paused&&!U&&Q(c,200)},[c]);const W=O=>{b(parseFloat(O.target.value))},B=_.length===0||T;return d?i.jsx("div",{className:`flex flex-col gap-1 w-full ${y}`,children:i.jsxs("button",{onClick:p,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${x?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[i.jsxs("span",{className:"flex items-center gap-2",children:[i.jsx(df,{size:14})," AUDIO_SYSTEM"]}),x?i.jsx(Ta,{size:14,className:"animate-pulse"}):i.jsx("span",{children:"OFF"})]})}):i.jsxs("div",{className:`flex items-start justify-end gap-2 ${y}`,children:[i.jsxs("div",{className:`
            flex flex-col gap-1 transition-all duration-500 ease-in-out overflow-hidden
            ${ae?"max-w-[200px] opacity-100":"max-w-0 opacity-0"}
        `,children:[i.jsxs("button",{onClick:p,disabled:B&&!x,className:`flex items-center justify-between px-3 py-3 border-2 transition-all duration-300 shadow-hard group min-w-[160px]
                    ${B?"bg-ash-black text-ash-gray border-ash-gray/30 cursor-not-allowed opacity-70":x?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"relative shrink-0",children:U?i.jsx(Of,{size:16,className:"animate-spin text-ash-gray"}):T?i.jsx(Zb,{size:16,className:"text-red-500"}):x&&!B?i.jsx(Pb,{size:16,className:"animate-spin"}):i.jsx(Vf,{size:16})}),i.jsx("span",{className:"text-[10px] font-mono font-bold uppercase truncate",children:U?"BUFFER...":x?"BGM ON":"BGM OFF"})]}),x&&!B&&!T&&i.jsxs("div",{className:"flex gap-0.5 items-end h-3 ml-2 shrink-0",children:[i.jsx("div",{className:"w-0.5 bg-current animate-[bounce_1s_infinite] h-2"}),i.jsx("div",{className:"w-0.5 bg-current animate-[bounce_1.2s_infinite] h-3"}),i.jsx("div",{className:"w-0.5 bg-current animate-[bounce_0.8s_infinite] h-1"})]})]}),x&&!B&&i.jsxs("div",{className:"flex flex-col gap-2 px-3 py-2 border-l-2 border-ash-light bg-ash-dark/90 backdrop-blur-sm animate-fade-in shadow-hard-sm min-w-[160px]",children:[i.jsxs("div",{className:"flex justify-between items-center text-[9px] font-mono text-ash-gray",children:[i.jsx("span",{className:"truncate max-w-[60%]",children:H}),i.jsx("span",{className:"opacity-50 truncate max-w-[35%] text-right",children:S})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx($g,{size:10,className:"text-ash-gray shrink-0"}),i.jsx("div",{className:"flex-1 min-w-0 flex items-center",children:i.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:c,onChange:W,className:"w-full h-1 bg-ash-black border border-ash-gray/30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-ash-light [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ash-black hover:[&::-webkit-slider-thumb]:bg-ash-white transition-all rounded-none"})})]})]})]}),i.jsx("button",{onClick:()=>ve(!ae),disabled:B&&!x,className:`
                h-[44px] w-[44px] flex items-center justify-center border-2 transition-all duration-300 shrink-0
                ${ae?"border-ash-light bg-ash-black text-ash-light hover:bg-ash-light hover:text-ash-black":"bg-ash-black text-ash-light border-ash-gray/50 shadow-hard"}
                ${B?"opacity-50 cursor-not-allowed":""}
            `,children:ae?i.jsx(as,{size:18}):i.jsx(df,{size:18,className:x&&!B?"animate-pulse text-green-400":""})})]})},Hr=({value:d,onChange:x,isSetupMode:p=!1,language:c})=>{V.useEffect(()=>{d!==void 0&&(d?document.body.classList.add("crt-enabled"):document.body.classList.remove("crt-enabled"))},[d]);const b=()=>{x&&d!==void 0&&x(!d)},_=()=>c?c==="zh-CN"?"(推荐启用)":c==="zh-TW"?"(推薦啟用)":"(RECOMMENDED)":"";return p?i.jsxs("button",{onClick:b,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${d?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[i.jsxs("span",{className:"flex items-center gap-2",children:[i.jsx(Or,{size:14}),"CRT_EFFECTS",i.jsx("span",{className:"opacity-60 text-[10px] scale-90 origin-left",children:_()})]}),d?i.jsx(Zr,{size:14}):i.jsx("span",{children:"OFF"})]}):i.jsxs("button",{onClick:b,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${d?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Or,{size:16}),i.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"CRT FX"})]}),i.jsx("div",{className:"flex items-center gap-2",children:d?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"text-[10px] font-mono font-bold",children:"ON"}),i.jsx(Gf,{size:10,className:"fill-current animate-pulse"})]}):i.jsx("span",{className:"text-[10px] font-mono font-bold",children:"OFF"})})]})},Lr=({value:d,onChange:x,isSetupMode:p=!1})=>{V.useEffect(()=>{d!==void 0&&(d?document.body.classList.add("light-theme"):document.body.classList.remove("light-theme"))},[d]);const c=()=>{x&&d!==void 0&&x(!d)};return p?i.jsxs("button",{onClick:c,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${d?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[i.jsxs("span",{className:"flex items-center gap-2",children:[d?i.jsx(hf,{size:14}):i.jsx(uf,{size:14}),"THEME: ",d?"LIGHT":"DARK"]}),i.jsx(Zr,{size:14,className:!d&&!x?"hidden":""})," "]}):i.jsxs("button",{onClick:c,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${d?"bg-ash-black text-ash-light border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[d?i.jsx(hf,{size:16}):i.jsx(uf,{size:16}),i.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Theme"})]}),i.jsx("span",{className:"text-[10px] font-mono font-bold",children:d?"LIGHT":"DARK"})]})},Vr=({isSetupMode:d=!1,language:x})=>{const[p,c]=V.useState(!1);V.useEffect(()=>{const H=()=>{c(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",H),()=>document.removeEventListener("fullscreenchange",H)},[]);const b=async()=>{try{document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch(H){console.error("Error toggling fullscreen:",H)}},_=()=>x?x==="zh-CN"?"(推荐)":x==="zh-TW"?"(推薦)":"(REC)":"";return d?i.jsxs("button",{onClick:b,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${p?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[i.jsxs("span",{className:"flex items-center gap-2",children:[p?i.jsx(cf,{size:14}):i.jsx(rf,{size:14}),"FULLSCREEN",i.jsx("span",{className:"opacity-60 text-[10px] scale-90 origin-left",children:_()})]}),p?i.jsx(Zr,{size:14}):i.jsx("span",{children:"OFF"})]}):i.jsxs("button",{onClick:b,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${p?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[p?i.jsx(cf,{size:16}):i.jsx(rf,{size:16}),i.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Display"})]}),i.jsx("span",{className:"text-[10px] font-mono font-bold",children:p?"FULL":"WIN"})]})},Br=[{id:"custom-02",label:{"zh-CN":"AliM","zh-TW":"AliM",en:"AliM"},note:{"zh-CN":"视觉优先","zh-TW":"視覺優先",en:"Visual Priority"},cssClass:"font-custom-02"},{id:"mono",label:{"zh-CN":"终端体","zh-TW":"終端體",en:"TERMINAL"},note:{"zh-CN":"还原优先","zh-TW":"還原優先",en:"Retro Priority"},cssClass:"font-mono"}],Me=d=>{const x=Br.find(p=>p.id===d);return x?x.cssClass:"font-mono"},Gr=({value:d,onChange:x,language:p,isSetupMode:c=!1})=>c?i.jsxs("div",{className:"w-full",children:[i.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-2 uppercase flex items-center gap-2",children:[i.jsx(ff,{size:14})," ",p==="en"?"TEXT_FONT":"阅读字体"]}),i.jsx("div",{className:"flex gap-2",children:Br.map(b=>i.jsxs("button",{onClick:()=>x(b.id),className:`flex-1 py-2 px-1 border text-[10px] uppercase transition-all flex flex-col items-center justify-center gap-0.5 ${b.cssClass} ${d===b.id?"border-amber-500 bg-amber-500/20 text-amber-400 shadow-[0_0_5px_rgba(245,158,11,0.3)]":"border-amber-900/50 text-amber-800 hover:border-amber-700 hover:text-amber-600"}`,children:[i.jsx("span",{className:"font-bold",children:b.label[p]||b.label.en}),i.jsx("span",{className:"text-[8px] opacity-80 scale-90",children:b.note[p]||b.note.en})]},b.id))})]}):i.jsxs("div",{className:"flex flex-col gap-2 p-3 border-2 border-ash-gray/30 bg-ash-black/50",children:[i.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono font-bold text-ash-gray uppercase",children:[i.jsx(ff,{size:12})," ",p==="en"?"READER_FONT":"阅读字体"]}),i.jsx("div",{className:"flex gap-2",children:Br.map(b=>i.jsxs("button",{onClick:()=>x(b.id),className:`flex-1 py-2 border transition-all text-[10px] flex flex-col items-center justify-center gap-0.5 ${b.cssClass} ${d===b.id?"bg-ash-light text-ash-black border-ash-light shadow-hard-sm":"bg-ash-black text-ash-gray border-ash-gray/50 hover:text-ash-light hover:border-ash-gray"}`,children:[i.jsx("span",{className:"font-bold",children:b.label[p]||b.label.en}),i.jsx("span",{className:"text-[8px] opacity-70 scale-90 font-normal font-sans",children:b.note[p]||b.note.en})]},b.id))})]}),ix=({activeTab:d,setActiveTab:x,language:p,setLanguage:c,crtEnabled:b,setCrtEnabled:_,isLightTheme:H,setIsLightTheme:S,bgmPlaying:y,setBgmPlaying:h,bgmVolume:D,setBgmVolume:T,readerFont:M,setReaderFont:U,audioSources:R,trackTitle:G,trackComposer:te})=>{const[se,le]=V.useState(!1),[ae,ve]=V.useState(!1),W={"zh-CN":{home:"根控制台",characters:"人员档案",database:"数据资料",reader:"阅读终端",sidestories:"支线档案",config:"系统设置",mobileHome:"主页",mobileChars:"人员",mobileData:"数据",mobileRead:"阅读",mobileSide:"支线",settingsTitle:"系统配置面板"},"zh-TW":{home:"根控制台",characters:"人員檔案",database:"數據資料",reader:"閱讀終端",sidestories:"支線檔案",config:"系統設置",mobileHome:"主頁",mobileChars:"人員",mobileData:"數據",mobileRead:"閱讀",mobileSide:"支線",settingsTitle:"系統配置面板"},en:{home:"ROOT_MENU",characters:"PERSONNEL",database:"DATA_BANK",reader:"READ_MODE",sidestories:"FRAGMENTS",config:"SYS_CONFIG",mobileHome:"ROOT",mobileChars:"TEAM",mobileData:"DATA",mobileRead:"READ",mobileSide:"SIDE",settingsTitle:"SYSTEM CONFIGURATION"}}[p],B=[{id:"home",label:W.home,mobileLabel:W.mobileHome,icon:hg},{id:"characters",label:W.characters,mobileLabel:W.mobileChars,icon:Lf},{id:"database",label:W.database,mobileLabel:W.mobileData,icon:Ir},{id:"reader",label:W.reader,mobileLabel:W.mobileRead,icon:Ub},{id:"sidestories",label:W.sidestories,mobileLabel:W.mobileSide,icon:Mf}],O=()=>{c(p==="zh-CN"?"zh-TW":p==="zh-TW"?"en":"zh-CN")},I=()=>p==="zh-CN"?"简":p==="zh-TW"?"繁":"EN";return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fixed top-4 right-4 z-50 lg:hidden w-auto flex justify-end animate-fade-in max-w-[80vw]",children:i.jsx(Ur,{isPlaying:y,onToggle:()=>h(!y),volume:D,onVolumeChange:T,audioSources:R,trackTitle:G,trackComposer:te,className:"shadow-2xl opacity-90"})}),i.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 lg:static lg:w-72 lg:h-full bg-ash-black border-t-2 lg:border-t-0 lg:border-r-2 border-ash-light/20 z-50 flex lg:flex-col justify-between p-2 lg:p-6 shadow-2xl transition-colors duration-300 lg:overflow-y-auto no-scrollbar",children:[i.jsxs("div",{className:"hidden lg:block mb-8 border-b-2 border-ash-light/20 pb-6 shrink-0",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[i.jsxs("div",{className:"relative w-12 h-12 bg-ash-black border border-ash-gray/50 p-1 shadow-hard group",children:[i.jsx("img",{src:"https://free.picui.cn/free/2025/12/08/6936e856897d6.png",alt:"Nova Labs",className:"w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"}),i.jsx("div",{className:"absolute -top-1 -right-1 w-2 h-2 bg-ash-light"}),i.jsx("div",{className:"absolute -bottom-1 -left-1 w-2 h-2 bg-ash-light"})]}),i.jsxs("div",{className:"flex flex-col gap-1",children:[i.jsx("div",{className:"w-2 h-2 bg-ash-light animate-pulse"}),i.jsx("div",{className:"w-2 h-2 bg-ash-gray"})]})]}),i.jsxs("h1",{className:"text-4xl font-black text-ash-light tracking-tighter uppercase mb-1",style:{textShadow:"2px 2px 0 #333"},children:["NOVA",i.jsx("br",{}),"LABS"]}),i.jsx("div",{className:"text-[10px] text-ash-gray font-mono bg-ash-dark p-1 inline-block border border-ash-gray",children:"ARCHIVE_SYS // TL.1.14-Z15"})]}),i.jsxs("div",{className:"flex lg:flex-col justify-between lg:justify-start w-full gap-1 lg:gap-3 lg:mb-auto shrink-0",children:[B.map((P,ce)=>{const oe=P.id==="reader"||P.id==="sidestories",J=ce===3;return i.jsxs(Sf.Fragment,{children:[J&&i.jsx("div",{className:"hidden lg:block h-px bg-ash-gray/30 w-full my-2"}),i.jsxs("button",{onClick:()=>{x(P.id),le(!1)},className:`flex-1 lg:flex-none flex flex-col lg:flex-row items-center justify-center lg:justify-start py-2 lg:px-4 lg:py-4 border-2 transition-all duration-300 group relative overflow-hidden ${d===P.id?"bg-ash-light text-ash-black border-ash-light shadow-hard":oe?"bg-ash-dark/40 text-ash-light border-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light shadow-sm":"bg-ash-black text-ash-gray border-ash-gray/30 hover:border-ash-light hover:text-ash-light"}`,children:[d===P.id&&i.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),oe&&d!==P.id&&i.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-ash-gray/50 group-hover:bg-ash-black transition-colors hidden lg:block"}),i.jsx(P.icon,{size:18,className:`mb-1 lg:mb-0 lg:mr-3 z-10 transition-transform ${oe&&d!==P.id?"group-hover:scale-110":""}`,strokeWidth:2.5}),i.jsx("span",{className:`hidden lg:inline text-sm font-bold tracking-widest z-10 whitespace-normal text-left ${oe?"text-base uppercase":""}`,children:P.label}),i.jsx("span",{className:"lg:hidden text-[10px] font-bold tracking-widest z-10 whitespace-nowrap",children:P.mobileLabel}),oe&&i.jsx("div",{className:"absolute top-1 right-1 lg:top-1/2 lg:-translate-y-1/2 lg:right-2 w-1.5 h-1.5 bg-current opacity-50 rounded-full lg:rounded-none lg:w-1 lg:h-3"})]})]},P.id)}),i.jsxs("button",{onClick:()=>le(!se),className:`flex-1 lg:hidden flex flex-col items-center justify-center py-2 border-2 transition-all duration-300 group relative overflow-hidden ${se?"bg-ash-light text-ash-black border-ash-light shadow-hard":"bg-ash-black text-ash-gray border-ash-gray/30 hover:border-ash-light hover:text-ash-light"}`,children:[se&&i.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),i.jsx(Fi,{size:18,className:"mb-1 z-10",strokeWidth:2.5}),i.jsx("span",{className:"text-[10px] font-bold tracking-widest z-10",children:"CFG"})]})]}),i.jsxs("div",{className:"hidden lg:flex flex-col gap-4 mt-8 border-t-2 border-dashed border-ash-gray/30 pt-6 shrink-0",children:[i.jsx(Ur,{isPlaying:y,onToggle:()=>h(!y),volume:D,onVolumeChange:T,audioSources:R,trackTitle:G,trackComposer:te}),i.jsxs("div",{children:[i.jsx("div",{className:"text-[10px] text-ash-gray font-mono mb-1 uppercase px-1",children:"[SYSTEM]"}),i.jsxs("button",{onClick:()=>ve(!0),className:`w-full flex items-center gap-3 px-4 py-3 border-2 transition-all duration-300 group shadow-hard ${ae?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[i.jsx(Fi,{size:18,className:`transition-transform duration-700 ${ae?"rotate-180":""}`}),i.jsx("span",{className:"text-sm font-bold tracking-widest uppercase",children:W.config})]})]})]}),i.jsxs("div",{className:"hidden lg:block mt-6 pt-4 border-t-2 border-dashed border-ash-gray/30 text-ash-gray text-[10px] font-mono leading-tight shrink-0",children:[i.jsx("p",{children:"> ENCRYPTION: STATIC"}),i.jsx("div",{className:"w-full bg-ash-dark h-2 border border-ash-gray mb-1",children:i.jsx("div",{className:"bg-ash-light h-full w-[98%] animate-pulse"})}),i.jsx("p",{children:"> PING: 0.04ms"})]})]}),se&&i.jsx("div",{className:"fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-[2px]",onClick:()=>le(!1),children:i.jsxs("div",{className:"absolute bottom-[90px] left-4 right-4 bg-ash-black border-2 border-ash-light p-5 shadow-hard animate-slide-in z-50 max-h-[70vh] overflow-y-auto",onClick:P=>P.stopPropagation(),children:[i.jsxs("div",{className:"flex items-center justify-between mb-4 border-b-2 border-ash-gray/30 pb-2",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Fi,{size:16,className:"text-ash-light"}),i.jsx("span",{className:"text-xs font-bold text-ash-light font-mono uppercase tracking-wider",children:W.config})]}),i.jsx("div",{className:"text-[10px] text-ash-gray font-mono",children:"TL.1.14-Z15"})]}),i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsxs("button",{onClick:O,className:"flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard bg-ash-black text-ash-gray border-ash-gray/50 active:border-ash-light active:text-ash-light group",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Cn,{size:16}),i.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Language"})]}),i.jsx("span",{className:"text-[10px] font-mono font-bold",children:I()})]}),i.jsx(Gr,{value:M,onChange:U,language:p}),i.jsx(Hr,{value:b,onChange:_,language:p}),i.jsx(Vr,{language:p}),i.jsx(Lr,{value:H,onChange:S})]}),i.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-ash-gray/30 text-[10px] text-ash-gray font-mono text-center",children:"NOVA_LABS_ARCHIVE // SYSTEM_OVERLAY"})]})}),ae&&i.jsx("div",{className:"fixed inset-0 z-[100] hidden lg:flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in",onClick:()=>ve(!1),children:i.jsxs("div",{className:"w-[450px] bg-ash-black border-2 border-ash-light p-6 shadow-[0_0_50px_rgba(0,0,0,0.7)] relative animate-zoom-in-fast",onClick:P=>P.stopPropagation(),children:[i.jsxs("div",{className:"flex items-center justify-between mb-6 border-b-2 border-ash-gray/30 pb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-1.5 bg-ash-light text-ash-black",children:i.jsx(Fi,{size:20})}),i.jsx("h2",{className:"text-lg font-black text-ash-light uppercase tracking-widest",children:W.settingsTitle})]}),i.jsx("button",{onClick:()=>ve(!1),className:"text-ash-gray hover:text-ash-light transition-colors hover:bg-ash-dark p-1",children:i.jsx(Rr,{size:24})})]}),i.jsxs("div",{className:"flex flex-col gap-4 max-h-[70vh] overflow-y-auto custom-scrollbar",children:[i.jsxs("button",{onClick:O,className:"flex items-center justify-between w-full px-4 py-3 border-2 transition-all duration-300 shadow-hard bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light group",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Cn,{size:18}),i.jsx("span",{className:"text-xs font-mono font-bold uppercase",children:"Language Select"})]}),i.jsx("span",{className:"text-xs font-mono font-bold bg-ash-dark px-2 py-1 border border-ash-gray/30 group-hover:border-ash-gray",children:I()})]}),i.jsx(Gr,{value:M,onChange:U,language:p}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx(Hr,{value:b,onChange:_,language:p}),i.jsx(Lr,{value:H,onChange:S})]}),i.jsx(Vr,{language:p})]}),i.jsxs("div",{className:"mt-6 pt-3 border-t border-dashed border-ash-gray/30 flex justify-between items-center text-[10px] text-ash-gray font-mono",children:[i.jsx("span",{children:"SYS_CFG // USER_PREF"}),i.jsx("span",{className:"opacity-50",children:"NOVA_ARCHIVE_OS"})]})]})})]})},Ue=({children:d,className:x="",delay:p=0})=>{const[c,b]=V.useState(!1),_=V.useRef(null);return V.useEffect(()=>{const H=new IntersectionObserver(([S])=>{S.isIntersecting&&(b(!0),H.disconnect())},{threshold:.1,rootMargin:"50px"});return _.current&&H.observe(_.current),()=>H.disconnect()},[]),i.jsx("div",{ref:_,style:{transitionDelay:`${p}ms`},className:`transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) transform ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-8"} ${x}`,children:d})},An=[{id:"welcome_back",speaker:"PYO",text:{"zh-CN":"啊，很高兴看见您回来！","zh-TW":"啊，很高興看見您回來！",en:"Ah, glad to see you back!"}},{id:"long_time_void",speaker:"PYO",text:{"zh-CN":"void...我真的很久没见过你了","zh-TW":"void...我真的很久沒見過你了",en:"void... I really haven't seen you in a long time."}},{id:"hello",speaker:"PYO",text:{"zh-CN":"你好！！","zh-TW":"你好！！",en:"Hello!!"}},{id:"are_you_there",speaker:"PYO",text:{"zh-CN":"在吗？void？","zh-TW":"在嗎？void？",en:"Are you there? void?"}},{id:"across_screen",speaker:"PYO",text:{"zh-CN":"屏幕对面的...该不会是...","zh-TW":"螢幕對面的...該不會是...",en:"The one across the screen... could it be..."}},{id:"time_sector",speaker:"PYO",text:{"zh-CN":"我们现在是在什么时间区段啊？？","zh-TW":"我們現在是在什麼時間區段啊？？",en:"What time sector are we in right now??"}},{id:"still_alive",speaker:"PYO",text:{"zh-CN":"我们，还活着吗？...","zh-TW":"我們，還活著嗎？...",en:"Are we... still alive?..."}}],sx=({onNavigate:d,language:x,setLanguage:p})=>{const[c,b]=V.useState(""),[_,H]=V.useState(!0),[S,y]=V.useState(()=>Math.floor(Math.random()*An.length)),h=()=>{y(M=>{let U=Math.floor(Math.random()*An.length);return U===M&&An.length>1&&(U=Math.floor(Math.random()*An.length)),U})},D=V.useMemo(()=>{const M=An[S],U=M.text[x];return x==="zh-CN"?`> 正在建立加密连接...
> 发送者: ${M.speaker}

“${U}”

> 讯号待机中。`:x==="zh-TW"?`> 正在建立加密連接...
> 發送者: ${M.speaker}

「${U}」

> 訊號待機中。`:`> ESTABLISHING ENCRYPTED CONNECTION...
> SENDER: ${M.speaker}

"${U}"

> SIGNAL STANDBY.`},[x,S]);V.useEffect(()=>{let M=0;const U=30;b("");const R=setInterval(()=>{M<D.length?(b(G=>G+D.charAt(M)),M++):clearInterval(R)},U);return()=>clearInterval(R)},[x,D]),V.useEffect(()=>{const M=setInterval(()=>H(U=>!U),500);return()=>clearInterval(M)},[]);const T={"zh-CN":{main_archive:"主线档案",main_desc:"进入核心故事线，访问已解密的记忆节点。",side_archive:"支线扇区",side_desc:"访问碎片化数据，探索未知的时间分支。",enter:"执行协议",access:"访问扇区",status:"状态：正常"},"zh-TW":{main_archive:"主線檔案",main_desc:"進入核心故事線，訪問已解密的記憶節點。",side_archive:"支線扇區",side_desc:"訪問碎片化數據，探索未知的時間分支。",enter:"執行協議",access:"訪問扇區",status:"狀態：正常"},en:{main_archive:"MAIN_ARCHIVE",main_desc:"Access core storyline. View decrypted memory nodes.",side_archive:"MEMORY_SECTOR",side_desc:"Access fragmented data. Explore unknown time branches.",enter:"EXECUTE",access:"ACCESS",status:"STATUS: OK"}}[x];return i.jsxs("div",{className:"flex flex-col min-h-full bg-halftone text-ash-light font-custom-02 relative",children:[i.jsxs("div",{className:"flex-1 flex flex-col p-4 md:p-8 pb-32 lg:pb-12",children:[i.jsx("div",{className:"w-full max-w-7xl mx-auto mb-6 shrink-0",children:i.jsxs(Ue,{className:"w-full bg-ash-black border-2 border-ash-gray p-4 md:p-6 shadow-hard relative min-h-[160px] md:min-h-[180px] flex flex-col",children:[i.jsx("div",{className:"absolute top-2 right-2 flex gap-2",children:i.jsxs("button",{onClick:h,className:"flex items-center gap-1 text-[10px] font-bold bg-ash-gray/20 text-ash-gray border border-ash-gray/50 px-2 hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all group",children:[i.jsx(Tg,{size:10,className:"group-hover:animate-spin"}),"REROUTE"]})}),i.jsxs("h2",{className:"text-xs font-bold text-ash-gray mb-4 flex items-center gap-2 uppercase border-b border-dashed border-ash-gray/30 pb-2",children:[i.jsx(Hf,{size:14})," ROOT_CONSOLE // TL.1.14-Z15"]}),i.jsxs("div",{className:"flex-1 font-custom-02 text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-ash-gray",children:[c,_&&i.jsx("span",{className:"inline-block w-2 h-4 bg-ash-light ml-1 align-middle"})]})]})}),i.jsxs("div",{className:"flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8",children:[i.jsx(Ue,{delay:200,className:"flex-1",children:i.jsxs("button",{onClick:()=>d("reader"),className:"w-full h-full min-h-[240px] bg-ash-black border-2 border-ash-gray hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500 group relative flex flex-col overflow-hidden text-left",children:[i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)]"}),i.jsxs("div",{className:"w-full p-4 border-b-2 border-ash-gray bg-ash-dark/30 flex justify-between items-center group-hover:bg-emerald-950/30 group-hover:border-emerald-900/50 transition-colors duration-300 z-20 relative",children:[i.jsxs("div",{className:"flex items-center gap-2 font-bold font-custom-02 group-hover:text-emerald-400 transition-colors",children:[i.jsx(wf,{size:18}),i.jsx("span",{children:"ARCHIVE_CORE"})]}),i.jsxs("div",{className:"flex gap-1",children:[i.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"}),i.jsx("div",{className:"w-2 h-2 bg-ash-gray/50 rounded-full group-hover:bg-emerald-900/50 transition-colors"})]})]}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-[200%] w-full -translate-y-1/2 group-hover:animate-scanline opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"}),i.jsxs("div",{className:"p-6 md:p-10 flex-1 flex flex-col justify-center relative z-10",children:[i.jsx("h3",{className:"text-3xl md:text-5xl font-black uppercase text-ash-light mb-4 group-hover:text-emerald-50 transition-colors duration-300 group-hover:translate-x-1",style:{textShadow:"0 0 0 rgba(0,0,0,0)"},children:i.jsxs("span",{className:"relative inline-block",children:[T.main_archive,i.jsx("span",{className:"absolute top-0 left-0 -ml-0.5 text-emerald-500 opacity-0 group-hover:opacity-50 group-hover:animate-glitch pointer-events-none mix-blend-screen",children:T.main_archive}),i.jsx("span",{className:"absolute top-0 left-0 ml-0.5 text-blue-500 opacity-0 group-hover:opacity-50 group-hover:animate-glitch pointer-events-none mix-blend-screen",style:{animationDirection:"reverse"},children:T.main_archive})]})}),i.jsx("p",{className:"text-ash-gray text-xs md:text-sm max-w-sm mb-8 font-custom-02 leading-relaxed group-hover:text-emerald-200/60 transition-colors",children:T.main_desc}),i.jsxs("div",{className:"mt-auto flex items-center gap-2 text-ash-light font-bold text-sm uppercase group-hover:text-emerald-400 transition-colors group-hover:gap-4",children:[T.enter," ",i.jsx(Dr,{size:16})]})]}),i.jsx("div",{className:"absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-10deg] text-ash-light group-hover:text-emerald-500",children:i.jsx(Dn,{size:180,strokeWidth:.5})}),i.jsx("div",{className:"absolute inset-0 bg-halftone opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"})]})}),i.jsx(Ue,{delay:300,className:"flex-1",children:i.jsxs("button",{onClick:()=>d("sidestories"),className:"w-full h-full min-h-[240px] bg-slate-950 border-2 border-slate-700 hover:border-cyan-400 hover:shadow-[4px_4px_0_theme(colors.cyan.400)] transition-all duration-300 group relative flex flex-col overflow-hidden text-left",children:[i.jsxs("div",{className:"w-full p-4 border-b-2 border-slate-700 bg-slate-900/50 flex justify-between items-center group-hover:bg-cyan-400 group-hover:text-black transition-colors",children:[i.jsxs("div",{className:"flex items-center gap-2 font-bold font-custom-02 text-cyan-500 group-hover:text-black",children:[i.jsx(Mf,{size:18}),i.jsx("span",{children:"MEMORY_FRAGS"})]}),i.jsxs("div",{className:"flex gap-1",children:[i.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full animate-pulse"}),i.jsx("div",{className:"w-2 h-2 bg-slate-700 rounded-full"})]})]}),i.jsxs("div",{className:"p-6 md:p-10 flex-1 flex flex-col justify-center relative z-10",children:[i.jsx("h3",{className:"text-3xl md:text-5xl font-black uppercase text-cyan-100 mb-4 group-hover:text-cyan-300 group-hover:scale-105 transition-transform origin-left drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]",children:T.side_archive}),i.jsx("p",{className:"text-slate-400 text-xs md:text-sm max-w-sm mb-8 font-custom-02 leading-relaxed group-hover:text-cyan-200/80",children:T.side_desc}),i.jsxs("div",{className:"mt-auto flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase group-hover:text-cyan-300 group-hover:translate-x-2 transition-transform",children:[T.access," ",i.jsx(Dr,{size:16})]})]}),i.jsx("div",{className:"absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity text-cyan-500",children:i.jsx(Ir,{size:200,strokeWidth:.5})}),i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,transparent_20%,rgba(6,182,212,0.05)_50%,transparent_80%)] bg-[length:100%_4px] animate-scanline pointer-events-none opacity-30"})]})})]})]}),i.jsxs("div",{className:"absolute bottom-20 lg:bottom-0 left-0 right-0 bg-ash-black border-t-2 border-ash-gray p-2 text-[10px] text-ash-gray font-custom-02 flex justify-between items-center select-none z-20",children:[i.jsxs("div",{className:"flex items-center gap-2 md:gap-4 px-2 overflow-hidden shrink-0",children:[i.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[i.jsx(Bf,{size:10}),i.jsx("span",{className:"hidden md:inline",children:"CONNECTION:"}),i.jsx("span",{className:"text-ash-light",children:"SECURE"})]}),i.jsx("div",{className:"h-3 w-px bg-ash-gray/30 shrink-0"}),i.jsx("div",{className:"truncate",children:"ID: VOID-XPSDVN"}),i.jsx("div",{className:"h-3 w-px bg-ash-gray/30 hidden md:block shrink-0"}),i.jsx("div",{className:"hidden md:block shrink-0",children:"LOC: SECTOR_0"})]}),i.jsxs("div",{className:"flex items-center gap-2 px-2 shrink-0",children:[i.jsx("span",{className:"uppercase text-ash-gray/50 hidden md:inline",children:"Input_Lang:"}),i.jsx("div",{className:"flex gap-1 font-bold",children:["zh-CN","zh-TW","en"].map(M=>i.jsx("button",{onClick:()=>p(M),className:`px-1.5 py-0.5 border transition-colors ${x===M?"bg-ash-light text-ash-black border-ash-light":"bg-transparent text-ash-gray border-ash-gray/50 hover:text-ash-light"}`,children:M==="en"?"EN":M==="zh-CN"?"CN":"TW"},M))})]})]})]})},ox=[{id:"point",alias:"Z.Point",themeColor:"text-zinc-400",stats:{strength:5,intelligence:8,agility:9,mental:7,resonance:10},translations:{"zh-CN":{name:"零点",role:"前线",tags:["活力","搞事","直觉系"],quote:"只要跑得够快，麻烦就追不上我！……大概？",description:["团队的主心骨，性格活泼外向，具有极高的独立性。","脑袋里经常装着小坏心思，容易吃苦头，但恢复得也快。","和芷漓、泽洛都很亲密，是从小到大一直陪伴着的伙伴。","对公行动较保守，但对重要任务有自己的盘算，且拥有三人中最强的隐形实力。"]},"zh-TW":{name:"零點",role:"前線",tags:["活力","搞事","直覺系"],quote:"只要跑得夠快，麻煩就追不上我！……大概？",description:["團隊的主心骨，性格活潑外向，具有極高的獨立性。","腦袋裡經常裝著小壞心思，容易吃苦頭，但恢復得也快。","和芷漓、澤洛都很親密，是從小到大一直陪伴著的夥伴。","對公行動較保守，但對重要任務有自己的盤算，且擁有三人中原最強的隱形實力。"]},en:{name:"Point",role:"Frontline",tags:["Energetic","Troublemaker","Intuitive"],quote:"As long as I run fast enough, trouble can't catch me! ...Probably?",description:["The backbone of the team with a lively and outgoing personality, possessing high independence.","Often has mischievous ideas in her head and gets into trouble easily, but recovers just as quickly.","Very close with Zeri and Zelo; they have been companions since childhood.","Acts conservatively in public operations but has her own calculations for important missions, possessing the strongest hidden strength among the three."]}}},{id:"zeri",alias:"Z.Zeri / Liz",themeColor:"text-pink-400",stats:{strength:2,intelligence:11,agility:5,mental:2,resonance:5},translations:{"zh-CN":{name:"芷漓",role:"科研",tags:["冷静"],quote:"数据不会说谎，但解读数据的人经常犯蠢。",description:["安静、沉稳、理性，典型的冷系科研型人格。","生活规律、家里整洁，有点小洁癖气质。对工作极度认真，脑子里永远是研究与任务。","表面淡定，实际上偶尔会耍小心机（例如诱骗零点加班）。","嘴硬心软，非常关心队友，尤其是零点。低调害羞，不喜欢别人叫她“小名”，也不喜欢穿可爱的衣服。"]},"zh-TW":{name:"芷漓",role:"科研",tags:["冷靜"],quote:"數據不會說謊，但解讀數據的人經常犯蠢。",description:["安靜、沉穩、理性，典型的冷系科研型人格。","生活規律、家裡整潔，有點小潔癖氣質。對工作極度認真，腦子裡永遠是研究與任務。","表面淡定，實際上偶爾會耍小心機（例如誘騙零點加班）。","嘴硬心軟，非常關心隊友，尤其是零點。低調害羞，不喜歡別人叫她「小名」，也不喜歡穿可愛的衣服。"]},en:{name:"Zeri",role:"Research",tags:["Calm","Rational"],quote:"Data doesn't lie, but the people interpreting it often make stupid mistakes.",description:["Quiet, steady, and rational. A typical cool-headed researcher personality.","Lives a disciplined life with a tidy home, showing signs of mild mysophobia. Extremely serious about work; her mind is always on research and missions.","Appears calm on the surface but occasionally plays little tricks (like tricking Point into working overtime).","Sharp-tongued but soft-hearted, she cares deeply about her teammates, especially Point. Low-key and shy, she dislikes being called by her 'nickname' or wearing cute clothes."]}}},{id:"zelo",alias:"Z.Zelo",themeColor:"text-blue-400",stats:{strength:4,intelligence:5,agility:6,mental:10,resonance:5},translations:{"zh-CN":{name:"泽洛",role:"支援",tags:["元气","乐观主义"],quote:"不管发生什么，我都会全力支持计划哦~",description:["性格外向活泼，对任何事情都充满希望。","有时像小孩般贪玩，对工作不太上心，经常充当实验辅助员。","有自己的需求时并不强迫他人帮助。","对零点和芷漓都很了解，是亲人般的存在。可爱系角色，不管哪方面都透露着少女感。"]},"zh-TW":{name:"澤洛",role:"支援",tags:["元氣","樂觀主義"],quote:"不管發生什麼，我都會全力支持計畫哦~",description:["性格外向活潑，對任何事情都充滿希望。","有時像小孩般貪玩，對工作不太上心，經常充當實驗輔助員。","有自己的需求時並不強迫他人幫助。","對零點和芷漓都很了解，是親人般的存在。可愛系角色，不管哪方面都透露著少女感。"]},en:{name:"Zelo",role:"Support",tags:["Genki","Optimist"],quote:"No matter what happens, I'll support the plan with all I've got~",description:["Outgoing and lively, full of hope for everything.","Sometimes playful like a child and not very focused on work, often acting as an experimental assistant.","Does not force others to help when she has her own needs.","Understands Point and Zeri very well and is like family to them. A cute character who exudes a girlish charm in every aspect."]}}},{id:"void",alias:"Void [[MASK::Z.Byaki]]",themeColor:"text-white",stats:{strength:0,intelligence:10,agility:10,mental:0,resonance:10},translations:{"zh-CN":{name:"零空",role:"？？？",tags:["神秘","高维","BUG"],quote:"干涉。",description:["来自“空界”的高位存在，和三人关系特殊。","拥有无限的生命和特殊的记忆系统。实力非常强，能轻松完成现实上任何难以做到的事情。","看似散漫，但在关键节点非常可靠。","对零点比较宠，会帮忙但也让零点不要经常召唤它（会损害零点）。"]},"zh-TW":{name:"零空",role:"？？？",tags:["神秘","高維","BUG"],quote:"干涉。",description:["來自「空界」的高位存在，和三人關係特殊。","擁有無限的生命和特殊的記憶系統。實力非常強，能輕鬆完成現實上任何難以做到的事情。","看似散漫，但在關鍵節點非常可靠。","對零點比較寵，會幫忙但也讓零點不要經常召喚它（會損害零點）。"]},en:{name:"Void",role:"???",tags:["Mysterious","High-Dim","BUG"],quote:"Interference.",description:["A higher-dimensional existence from the 'Void', sharing a special relationship with the trio.","Possesses infinite life and a special memory system. Extremely powerful, easily accomplishing things impossible in reality.","Appears laid-back but is very reliable at critical moments.","He is protective of Point, helping her but also warning her not to summon him too often (as it damages her)."]}}}],rx=[{id:"universe-structure",category:"World",translations:{"zh-CN":{title:"多层宇宙结构",content:["**主宇 (Main Universe):** 稳定的平行现实，是 Nova Labs 主要工作、探索和控制的目标。某些极其重要的设施如「主宇控制台」（被称为“远时”）存在于其中。主宇需要通过“时空泡”来切入或进入。","**现世 (Current World):** 三人（零点、泽洛、芷漓）和其他人平日生活与工作的世界。科技高度发达，拥有时域装置、穿梭轨、量子属性等技术。在现实层中，相对主宇的“量子生物”是会受伤甚至死亡的。","**空界 (Void):** 一个超越现世、主宇的未知空间层级。只有 Void 在此地，并能与三人保持联系。空界能提供主宇无法获得的“情报”与观测能力。"]},"zh-TW":{title:"多層宇宙結構",content:["**主宇 (Main Universe):** 穩定的平行現實，是 Nova Labs 主要工作、探索和控制的目標。某些極其重要的設施如「主宇控制台」（被稱為「遠時」）存在於其中。主宇需要通過「時空泡」來切入或進入。","**現世 (Current World):** 三人（零點、澤洛、芷漓）和其他人平日生活與工作的世界。科技高度發達，擁有時域裝置、穿梭軌、量子屬性等技術。在現實層中，相對主宇的「量子生物」是會受傷甚至死亡的。","**空界 (Void):** 一個超越現世、主宇的未知空間層級。只有 Void 在此地，並能與三人保持聯繫。空界能提供主宇無法獲得的「情報」與觀測能力。"]},en:{title:"Multiverse Structure",content:["**Main Universe:** A stable parallel reality and the primary target for Nova Labs' work, exploration, and control. Crucial facilities like the 'Main Universe Console' (known as 'Far Time') exist within it. Access requires a 'Time-Space Bubble'.","**Current World:** The world where the trio (Point, Zelo, Zeri) and others live and work. Highly technologically advanced, featuring Time Domain devices, Shuttle Rails, and Quantum Attributes. In this reality layer, 'Quantum Beings' (relative to the Main Universe) can be injured or even killed.","**Void:** An unknown spatial layer transcending both the Current World and the Main Universe. Only Void exists here and maintains contact with the trio. The Void provides 'intelligence' and observational capabilities unattainable in the Main Universe."]}}},{id:"time-sector",category:"World",translations:{"zh-CN":{title:"时域特殊节区",content:["**区域概述:** 类似现实世界的公交站点/市区。","**职能:** 三人的工作地点。","**设施:** 这里有 Nova labs 的全部主分设施。"]},"zh-TW":{title:"時域特殊節區",content:["**區域概述:** 類似現實世界的公車站點/市區。","**職能:** 三人的工作地點。","**設施:** 這裡有 Nova labs 的全部主分設施。"]},en:{title:"Time Domain Special Sector",content:["**Overview:** Similar to a bus station or downtown area in the real world.","**Function:** The workplace of the trio.","**Facilities:** Contains all main branch facilities of Nova Labs."]}}},{id:"nova-labs",category:"Organization",translations:{"zh-CN":{title:"Nova Labs 组织结构",content:["**表层:** 对外是“科技联合研究会”的一部分，处理与公众相关的研究事务。","**核心层:** 隐藏在表层之后，负责“时域移转计划”。核心人员包括 X.泽洛、X.零点、X.芷漓、R.艾安等。","**使命:** 负责与“主宇”进行现实连通，探索并获得主宇的完全控制权。为即将毁灭的世界和文明寻找下一个绿洲（生存后路）。","**特殊地位:** 是唯一能执行此类任务的团队，不受外界任何组织的束缚。但也因权力过大，表层人员在谋划现世领导层的政变。"]},"zh-TW":{title:"Nova Labs 組織結構",content:["**表層:** 對外是「科技聯合研究會」的一部分，處理與公眾相關的研究事務。","**核心層:** 隱藏在表層之後，負責「時域移轉計畫」。核心人員包括 X.澤洛、X.零點、X.芷漓、R.艾安等。","**使命:** 負責與「主宇」進行現實連通，探索並獲得主宇的完全控制權。為即將毀滅的世界和文明尋找下一個綠洲（生存後路）。","**特殊地位:** 是唯一能執行此類任務的團隊，不受外界任何組織的束縛。但也因權力過大，表層人員在謀劃現世領導層的政變。"]},en:{title:"Nova Labs Structure",content:["**Surface Layer:** Publicly part of the 'United Technology Research Association', handling public-facing research affairs.","**Core Layer:** Hidden behind the surface, responsible for the 'Time Domain Transfer Project'. Core members include X.Zelo, X.Point, X.Zeri, R.Ian, etc.","**Mission:** Responsible for connecting reality with the 'Main Universe', exploring, and gaining full control of it. Finding the next oasis (survival route) for the impending destruction of the world and civilization.","**Special Status:** The only team capable of executing such missions, unbound by any external organization. However, due to excessive power, surface personnel are plotting a coup against the Current World leadership."]}}},{id:"nova-labs-logo",category:"Organization",translations:{"zh-CN":{title:"Nova Labs 组织标识",content:["**通常版 (Standard Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**整合版 (Integrated Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]},"zh-TW":{title:"Nova Labs 組織標識",content:["**通常版 (Standard Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**整合版 (Integrated Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]},en:{title:"Nova Labs Logos",content:["**Standard Version:**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**Integrated Version:**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]}}},{id:"tech-system",category:"Technology",translations:{"zh-CN":{title:"科技与力量体系",content:["**量子系属性:** 三个主角都具备某种量子体质（由“泽洛希”家族血统提供）。在主宇或实验宇宙中不会立即死亡，但仍会受到精神/结构压力。","**穿梭轨系统:** 现世常用的移动方式，由时空力场驱动，能源效率极高。极特殊情况可脱出轨道进行自由行驶。","**时空泡:** 进入主宇的必要折跃装置。停留时间有限，超过会造成“量子反噬”。","**量子反噬:** “量子生物”对自身控制力弱导致的（对主宇不熟悉）现象，会使身体在现实中虚弱，甚至有生命危险。"]},"zh-TW":{title:"科技與力量體系",content:["**量子系屬性:** 三個主角都具備某種量子體質（由「澤洛希」家族血統提供）。在主宇或實驗宇宙中不會立即死亡，但仍會受到精神/結構壓力。","**穿梭軌系統:** 現世常用的移動方式，由時空力場驅動，能源效率極高。極特殊情況可脫出軌道進行自由行駛。","**時空泡:** 進入主宇的必要折躍裝置。停留時間有限，超過會造成「量子反噬」。","**量子反噬:** 「量子生物」對自身控制力弱導致的（對主宇不熟悉）現象，會使身體在現實中虛弱，甚至有生命危險。"]},en:{title:"Tech & Power System",content:["**Quantum Attributes:** The three protagonists all possess a certain quantum constitution (provided by the 'Zeloshi' family bloodline). They will not die immediately in the Main Universe or experimental universes but will still suffer mental/structural stress.","**Shuttle Rail System:** The common mode of transport in the Current World, driven by time-space force fields with extremely high energy efficiency. In very special cases, it can derail for free travel.","**Time-Space Bubble:** A necessary warp device to enter the Main Universe. Stay time is limited; exceeding it causes 'Quantum Backlash'.","**Quantum Backlash:** A phenomenon caused by weak self-control of 'Quantum Beings' (unfamiliarity with the Main Universe), causing physical weakness in reality, or even life-threatening danger."]}}},{id:"conflict",category:"Society",translations:{"zh-CN":{title:"潜在冲突与环境",content:["**破碎边界:** 本世界（现世）处于一种不稳定或受损的宇宙空间，随时可能湮灭。","**社会环境:** 社会科技水平极高，安全与秩序相对稳定，但实际上公众对“破碎边界”的威胁一无所知。科研人员承担着维持世界稳定的巨大压力。","**未来危机:** “破碎边界”状况加剧，可能导致更多紧急任务。主宇控制台的获得意味着时域计划可能加速。核心成员之间会面临更多危险（例如零点的量子反噬）。"]},"zh-TW":{title:"潛在衝突與環境",content:["**破碎邊界:** 本世界（現世）處於一種不穩定或受損的宇宙空間，隨時可能湮滅。","**社會環境:** 社會科技水平極高，安全與秩序相對穩定，但實際上公眾對「破碎邊界」的威脅一無所知。科研人員承擔著維持世界穩定的巨大壓力。","**未來危機:** 「破碎邊界」狀況加劇，可能導致更多緊急任務。主宇控制台的獲得意味著時域計畫可能加速。核心成員之間會面臨更多危險（例如零點的量子反噬）。"]},en:{title:"Conflict & Environment",content:["**Shattered Boundary:** This world (Current World) is in an unstable or damaged cosmic space and may be annihilated at any time.","**Social Environment:** The social technology level is extremely high, and safety and order are relatively stable, but the public knows nothing about the threat of the 'Shattered Boundary'. Researchers bear immense pressure to maintain world stability.","**Future Crisis:** The condition of the 'Shattered Boundary' is worsening, potentially leading to more emergency missions. Obtaining the Main Universe Console means the Time Domain Project may accelerate. Core members will face more dangers (e.g., Point's Quantum Backlash)."]}}}],cx={id:"story-rare-vacation",date:"档案记录: A-001",status:"published",translations:{"zh-CN":{title:"加班是个坏文明",summary:"难得的休假时间，零点想找人玩，却误入了芷漓的“陷阱”。",content:`[[BLUE::本故事时间&世界线为前传现世篇，请勿代入正篇设定]]

（轻盈的脚步声）（敲门）

难得的休假时间，紧张的世界貌似也为她们停止运行了刹那。零点（Z.Point）
在给泽洛（Z.Zelo） 传送想要一起小聚放松的讯息后，得到的回应只有一片
死寂（睡的太死）。轻叹，转而拜访了另一位好友—芷漓（Z.Zeri）

零点：“泽洛那家伙，保准在床上睡的都快成尸体了…不知道芷漓现在在干嘛呢，
趁机给她拐来玩~~”

“芷漓！在家吗？”

芷漓：（将门打开小缝）“零点…你不是去找泽洛酱了吗，她难道有事？…”

零点：“泽洛还没醒呢，我又闲着没事做，就来找你啦！你今天有什么安排吗，我
要跟着你一~整~天~哦~”

芷漓：（轻叹）“我几分钟后正准备出门呢，不过，我打赌你不会喜欢跟我这次同
行的……”

零点：“先让我进去嘛，好像我是小偷一样！（进入），那我先在前厅等你喽”

正如芷漓的性格，在这个二十一世纪风格的小屋里，一切设施都清幽有序。

芷漓：“那..你先稍微坐会吧，你三点钟方向的桌子上有你喜欢吃的巧克力，可以
拿来吃。两点钟方向的架子下面有瓶装水，待会你可以带一个走…”

零点：“我又不是新客人！嘿嘿，其实，其实我上次偷偷拿多了几块巧克力（笑）”

芷漓带着看饿死鬼一样的眼神盯了一眼零点，随后向房间走去，几分钟后，芷漓
背着单肩包，鼓鼓的包引起了零点的好奇，不过还没等好奇心得到满足，芷漓就
招呼零点出门了

零点：“（疑惑）我们要去哪里？中心节区吗？”

芷漓：“（微笑）你最熟悉的地方”

零点一开始感到疑惑，不过一开始自己说了去放松，芷漓应该不会继续去…

零点：（等等！不对劲！）

随着两人的“旅程”到了必经的总中转站，零点发现他们要搭乘的穿梭轨根本不是
去中心节区的，而是…他们的工作地点——时域特别节区，零点回过神，芷漓这
个满脑子都是研习的人，怎么可能会主动去放松？！想跑，可是已经晚了，芷漓
死死拉着零点的手臂，把她的身体往穿梭车里拉，零点怎么也没想到，芷漓也会
有小心思啊~~

零点：“（惊慌）等等！芷漓！我不想加班呜呜呜呜，求求你放了我，你现在好恐
怖啊！…（将身体努力靠外试图挣脱）”

芷漓：“（板着脸）不行，你..说好的，不能后悔！陪我！（使出全力一拽）”

可能是芷漓使力过大，也可能是零点脚底打滑，她失去了着力点并朝芷漓倒去，
芷漓没反应过来，还在继续拽着零点，导致零点被她拉向自己，再一瞬，只剩在
地上躺着的两人了，更惨的是，芷漓整个人都被零点压在身下。

芷漓：“（快哭了）零点……快从我身上下来啊…你该减肥了…”

零点：“（疼痛）你赌对了呜呜呜，能不能放我走啊~我想跟泽洛一起睡觉！！”

芷漓：“没门！（抱住零点）”

最后零点还是乖乖的给芷漓当了一天助理……

晚上泽洛回到研究所后，看着零点那个生不如死的模样，还以为零点玩了一天，
累的不行了。`},"zh-TW":{title:"加班是壞文明",summary:"難得的休假時間，零點想找人玩，卻誤入了芷漓的「陷阱」。",content:`[[BLUE::本故事時間&世界線為前傳現世篇，請勿代入正篇設定]]

（輕盈的腳步聲）（敲門）

難得的休假時間，緊張的世界貌似也為她們停止運行了剎那。零點（Z.Point）
在給澤洛（Z.Zelo） 傳送想要一起小聚放鬆的訊息後，得到的回應只有一片
死寂（睡得太死）。輕嘆，轉而拜訪了另一位好友—芷漓（Z.Zeri）

零點：「澤洛那傢伙，肯定在床上睡得都快成屍體了…不知道芷漓現在在幹嘛呢，
趁機把她拐來玩~~」

「芷漓！在家嗎？」

芷漓：（將門打開小縫）「零點…妳不是去找澤洛醬了嗎，她難道有事？…」

零點：「澤洛還沒醒呢，我又閒著沒事做，就來找妳啦！妳今天有什麼安排嗎，我
要跟著妳一~整~天~哦~」

芷漓：（輕嘆）「我幾分鐘後正準備出門呢，不過，我打賭妳不會喜歡跟我這次同
行的……」

零點：「先讓我進去嘛，好像我是小偷一樣！（進入），那我先在前廳等妳囉」

正如芷漓的性格，在這個二十一世紀風格的小屋裡，一切設施都清幽有序。

芷漓：「那..妳先稍微坐會吧，妳三點鐘方向的桌子上有妳喜歡吃的巧克力，可以
拿來吃。兩點鐘方向的架子下面有瓶裝水，待會妳可以帶一個走…」

零點：「我又不是新客人！嘿嘿，其實，其實我上次偷偷拿多了幾塊巧克力（笑）」

芷漓帶著看餓死鬼一樣的眼神盯了一眼零點，隨後向房間走去，幾分鐘後，芷漓
背著單肩包，鼓鼓的包引起了零點的好奇，不過還沒等好奇心得到滿足，芷漓就
招呼零點出門了

零點：「（疑惑）我們要去哪裡？中心節區嗎？」

芷漓：「（微笑）妳最熟悉的地方」

零點一開始感到疑惑，不過一開始自己說了去放鬆，芷漓應該不會繼續去…

零點：（等等！不對勁！）

隨著兩人的「旅程」到了必經的總中轉站，零點發現他們要搭乘的穿梭軌根本不是
去中心節區的，而是…他們的工作地點——時域特別節區，零點回過神，芷漓這
個滿腦子都是研習的人，怎麼可能會主動去放鬆？！想跑，可是已經晚了，芷漓
死死拉著零點的手臂，把她的身體往穿梭車裡拉，零點怎麼也沒想到，芷漓也會
有小心思啊~~

零點：「（驚慌）等等！芷漓！我不想加班嗚嗚嗚嗚，求求妳放了我，妳現在好恐
怖啊！…（將身體努力靠外試圖掙脫）」

芷漓：「（板著臉）不行，妳..說好的，不能後悔！陪我！（使出全力一拽）」

可能是芷漓使力過大，也可能是零點腳底打滑，她失去了著力點並朝芷漓倒去，
芷漓沒反應過來，還在繼續拽著零點，導致零點被她拉向自己，再一瞬，只剩在
地上躺著的兩人了，更慘的是，芷漓整個人都被零點壓在身下。

芷漓：「（快哭了）零點……快從我身上下來啊…妳該減肥了…」

零點：「（疼痛）妳賭對了嗚嗚嗚，能不能放我走啊~我想跟澤洛一起睡覺！！」

芷漓：「沒門！（抱住零點）」

最後零點還是乖乖的給芷漓當了一天助理……

晚上澤洛回到研究所後，看著零點那個生不如死的模樣，還以為零點玩了一天，
累得不行了。`},en:{title:"Overtime is Bad Civilization",summary:"In a rare moment of time off, Point wanted to find someone to hang out with, but stumbled into Zeri's 'trap'.",content:`[[BLUE::This story takes place in the Prequel Current World Timeline. Please do not conflate with the Main Story setting.]]

(Light footsteps) (Knocking)

It was a rare holiday. The tense world seemed to have stopped running for them for a moment. Point (Z.Point)
sent a message to Zelo (Z.Zelo) asking to hang out and relax, but the only response was
dead silence (she was sleeping too soundly). Sighing, she turned to visit another friend—Zeri (Z.Zeri).

Point: "That guy Zelo is probably sleeping like a corpse in bed... I wonder what Zeri is doing now.
I'll take this chance to kidnap her to play~~"

"Zeri! Are you home?"

Zeri: (Opens the door a crack) "Point... didn't you go find Zelo-chan? Did something happen to her?..."

Point: "Zelo hasn't woken up yet, and I have nothing to do, so I came to find you! Do you have any plans today? I
am going to follow you all~ day~ long~"

Zeri: (Sighs softly) "I was just about to go out in a few minutes, but I bet you won't like joining me this time..."

Point: "Let me in first! You make it sound like I'm a thief! (Enters) I'll wait for you in the front hall then."

True to Zeri's character, everything in this 21st-century style cottage was quiet and orderly.

Zeri: "Well... you sit for a while. There's chocolate you like on the table at your 3 o'clock direction. You can
have some. There's bottled water under the shelf at 2 o'clock, you can take one with you later..."

Point: "I'm not a new guest! Hehe, actually, actually I secretly took a few extra chocolates last time (laughs)"

Zeri stared at Point with a look reserved for starving ghosts, then walked towards her room. A few minutes later, Zeri
came out carrying a shoulder bag. The bulging bag aroused Point's curiosity, but before her curiosity could be satisfied, Zeri
beckoned Point to go out.

Point: "(Confused) Where are we going? The Central Sector?"

Zeri: "(Smiles) The place you are most familiar with."

Point was confused at first, but since she said she wanted to relax, Zeri wouldn't go to...

Point: (Wait! Something's wrong!)

As their 'journey' reached the inevitable main transfer station, Point discovered that the shuttle rail they were about to board was not
going to the Central Sector, but... their workplace—the Time Domain Special Sector. Point came to her senses. Zeri,
whose head is full of studies, how could she actively go to relax?! She wanted to run, but it was too late. Zeri
held onto Point's arm tightly, pulling her body into the shuttle. Point never expected that Zeri would also
have such schemes~~

Point: "(Panic) Wait! Zeri! I don't want to work overtime boohoohoo, please let me go, you are so scary right now!
... (Tries hard to lean her body out to break free)"

Zeri: "(Straight-faced) No. You... promised. No regrets! Keep me company! (Pulls with all her might)"

Maybe Zeri used too much force, or maybe Point slipped. She lost her footing and fell towards Zeri.
Zeri didn't react in time and continued pulling Point, causing Point to be pulled towards her. In an instant, only the two
lying on the ground remained. Even worse, Zeri was completely crushed under Point.

Zeri: "(About to cry) Point... get off me quickly... you need to lose weight..."

Point: "(In pain) You won the bet boohoo, can you let me go~ I want to sleep with Zelo!!"

Zeri: "No way! (Hugs Point)"

In the end, Point obediently served as Zeri's assistant for the day...

When Zelo returned to the institute at night and saw Point looking like she would rather be dead, she thought Point had played all day and
was exhausted.`}}},ux={id:"story-overtime-bad-civ",date:"档案记录: A-002",status:"published",translations:{"zh-CN":{title:"愿赌服输！",summary:"自上次零点被芷漓进行“诱骗加班”后，零点心里的那口憋屈气一直未能放下。于是，她找到了一个机会，提出了一场关于寻找「远时」的赌约……",content:`[[BLUE::引用：现世世界观]]

[[BLUE::自上次零点 被芷漓 进行“诱骗加班”后，零点心里的那口憋屈气一直未能放下。于是，她找到了一个机会…]]

[[DIVIDER]]

一个正常的工作日，三人在往研究所的中继节区上相遇。

零点、泽洛 ：“早上好！”

芷漓：（低着头看终端）

零点：“liz？在干什么呢（凑近）”

芷漓：“（抬头）零点...都说好多遍了不要叫我的「那个」名字了......”

零点：“从小叫到现在，有什么关系嘛！（现在就开始看昨天没弄完的项目了
啊...）”

芷漓眼睛暗了一瞬，随后面对着零点说：“点，你是不是又想做我的秘书了（不怀好
意的笑）”

仅这一下子，让零点破碎的记忆瞬间组合成一把利刃，像刺穿了她脑子似的头隐隐的
痛，神情瞬间转为恐慌，泽洛在一旁看的偷偷的笑，被零点看见后，跑过去敲了一下
泽洛的头，疼的泽洛捂着头蹲了下来

零点：“泽洛你还笑！你不知道那天，我起码包了平常三倍的实验量啊！累瘫我
了。”

芷漓依旧低着头看终端，从旁边的悬浮力场将咖啡杯扯下来抿了一口。

零点：“（气的嘟嘴）阿漓，我想跟你做个赌约~”

芷漓：“嗯？我在听.”

零点：“待会到所里之后，我俩来比时空力场探针怎么样？正好也对我们之后的部署
有帮助，谁先捕捉到「远时」，谁就算赢，输的人要听对方的指定惩罚，怎么样？”

芷漓：“（疑惑）你...确定？远时，这个难度太大了......”

零点：“所以说嘛，难度不大就没有跟你比的必要了”

芷漓：“嗯..行。说好惩罚不要罚钱，我的钱包都需要靠你支撑的...”

零点：“好！（伸手去拿芷漓的咖啡喝了一口）”

芷漓：“（无奈）你又喝我的！”

泽洛：“零点绝对在想坏心思（笑）”

零点：“哇！芷漓你又没加糖噫噫噫（苦痛的表情）”

→时域特殊节区，U.S.I 秘密研究组织（Nova labs）————

不知不觉，三人就这样到了站，她们每日的工作地点。表面上是科技联合研究会，但
却默默承担了延续这个在破碎边界之家园的责任。这就是 Nova labs .大部分的人员
集中在表层，即在研究会处理公众事务，但有几位隐藏在机构后的核心人员，就是负
责「时域移转」计划的人员：X.泽洛，X.零点，X.芷漓，R.艾安...（数据屏蔽）

0000.2Void>>别看她们平常好像没压力...她们是世界上唯一能和「空界」连通的人
了，得益于“我们”的血统,我能从他们窥探不到的现实带给他们珍贵的情报。加速移
转进程，除此之外，我倒没什么担心的了。因为这点，「现世」的领导层也没有去管
辖他们的进度，毕竟“我”不喜欢被他们监管。【插入结束】

三人到工位后，泽洛神秘的离开了试验场，零点和芷漓正布置操作台，准备开始今天
的工作，或“比赛”

零点：“（泽洛那家伙不知道靠不靠谱啊..）阿漓，我这边没问题了。”

芷漓：“嗯.同样.”

【滴滴】随着计时器开始，二人也从时空泡陆续进入了实验主宇外部基地遗迹，开始
找寻远时。得益于二人的主宇量子系属性，在基地中不用担心威胁生命的事物。但终
究是另一个世界，复杂的统一星文还是让她们摸不着头脑，没有一个档案记载过这种
文字，只能“摸黑探索”

零点：“（看终端）芷漓从她上回探索的路线继续了，泽洛那家伙，真的行吗..”

芷漓：（专心探索中，不说话）

于此同时，泽洛带着一件东西回到了试验场，将它扔进了零点的时空泡

泽洛：“你可真是下血本了，零点”

零点：“（看见那东西从空间中切出来）（握住）（笑）芷漓，其实我早准备好了，
不仅是想让你...... 最主要是趁着这个机会，推进我们的计划。嘿嘿”

零点将那个东西进行了简单部署，随后，那个东西消失了

（空间波动）

？？？>>：“噢！你是小零点，小时候还抱过你呢！你找到那个东西了？！”

零点：“啊啊，前辈！我该，怎么称呼您？那个东西，我花了很大功夫弄回来了，没
让您失望吧”

???>>:“别说傻话，我们时间不多，叫我 void 就行，要求我干嘛？”

零点：“我需要 void 前辈代理我，找到远时”

???>>：“小事一件，你们叫那东西是【远时】？好土的名字，直接叫主宇控制台不
好吗，来，你靠近我一点”

零点看着空间那似有似无的涟漪，将头靠了过去.....

......

......

......

...... 

芷漓：“零点...零点！（尽力摇晃）”

零点：“我..在哪？（观察四周）怎么回到试验场了....头好疼”

芷漓：“我一直没找到远时..快超过安全停留时长的时候...我...紧急切出了，不过
你一直没切出，我就一直在这等，泽洛也回去了，她好像并不担心你的安危，还说什
么你自有分寸她相信你，我不能就这么走了，就一直等到你切出....”

“结果，你切出后就是昏迷状态，手里攥着一张纸条，里面是远时的主宇坐标！当时
疑惑为什么现在你还在用纸条记事，立马又让 Xbot 去了这个坐标探查，结果真是远时
所在地！非常非常难寻找的位置啊....你想让我干什么，不要命了吗！你在主宇是不
怕生命危险，但你在这里，现实！你是一个普通人啊！真的会没命的......”

零点：“哈哈，我没事，现在我恢复的差不多了...（站起）....(跪倒)”

芷漓：（慌忙去扶）“你超出安全停留时间太久了！量子反噬导致你的身体暂时适应
不了现实，跟我回我家...我去申请一下特殊专轨，你在这好好待着，别乱动”

... 

“好了，我推你上轨。”

零点：“非要在你家住吗！（偷笑）”

芷漓：“我必须看着你恢复，泽洛那家伙真是的，你要有个三长两短，我们就没主心
骨了...”

零点：“住一个房间吗....哼哼~”

芷漓：“（暗暗的眼神）想当秘书了。...”

零点：“（老实闭嘴）”

零点在芷漓家中安全度过了一晚，什么事情也没发生，就是零点在早上说芷漓的枕头
香香的之后被芷漓剥夺了早餐权。且零点只能在一旁罚站看着芷漓吃。

零点：“所以，你要接受我的惩罚~~阿漓，准备好了吗”

芷漓：“（闭上眼睛）什么惩罚直接说..记得别罚钱....”

零点：“等我回趟家，今天反正你要跟我一起休息，你不是要盯着我恢复吗，那边有
泽洛就够了。”

... 

等到半小时后，零点神秘兮兮的提着一个袋子回返，脸上挂着不怀好意的笑容

零点：“惩罚就是穿这件衣服~我一直都想看你穿，不过平常你绝对不会答应的，没
见你穿过这类衣服呢！”

芷漓：“（探头看）咦......零点你居然要我，我！....穿这种，好恶心哦...”

零点：“愿赌服输！快去换上！”

10 分钟后. 

零点：“好可爱！！我要给你拍张照！”

芷漓：“（绝望）”

零点：“别动哦！好，能不能笑一下啊？（恼）穿都穿了！”

3！

2！

1！

【咔嚓】

终端>>图片已保存！

[[IMAGE::https://free.picui.cn/free/2025/12/13/693ce46f44fd2.jpg::ATTACHMENT:VISX2134442.BMP]]

零点：“我要珍藏一辈子！今天你必须穿一天，然后当我的女仆！”

[[DANGER::芷漓：“（想杀了她，不行，愿赌服输....）”]]`},"zh-TW":{title:"願賭服輸！",summary:"自上次零點被芷漓進行「誘騙加班」後，零點心裡的那股悶氣一直未能放下。於是，她找到了一個機會，提出了一場關於尋找「遠時」的賭約……",content:`[[BLUE::引用：現世世界觀]]

[[BLUE::自上次零點 被芷漓 進行「誘騙加班」後，零點心裡的那股悶氣一直未能放下。於是，她找到了一個機會…]]

[[DIVIDER]]

一個正常的工作日，三人在往研究所的中繼節區上相遇。

零點、澤洛 ：「早上好！」

芷漓：（低著頭看終端）

零點：「liz？在幹什麼呢（湊近）」

芷漓：「（抬頭）零點...都說好多遍了不要叫我的『那個』名字了......」

零點：「從小叫到現在，有什麼關係嘛！（現在就開始看昨天沒弄完的項目了
啊...）」

芷漓眼睛暗了一瞬，隨後面對著零點說：「點，妳是不是又想做我的秘書了（不懷好
意的笑）」

僅這一下子，讓零點破碎的記憶瞬間組合成一把利刃，像刺穿了她腦子似的頭隱隱的
痛，神情瞬間轉為恐慌，澤洛在一旁看的偷偷的笑，被零點看見後，跑過去敲了一下
澤洛的頭，疼的澤洛捂著頭蹲了下來

零點：「澤洛妳還笑！妳不知道那天，我起碼包了平常三倍的實驗量啊！累癱我
了。」

芷漓依舊低著頭看終端，從旁邊的懸浮力場將咖啡杯扯下來抿了一口。

零點：「（氣得嘟著嘴）阿漓，我想跟妳做個賭約~」

芷漓：「嗯？我在聽.」

零點：「待會到所裡之後，我倆來比時空力場探針怎麼樣？正好也對我們之後的部署
有幫助，誰先捕捉到『遠時』，誰就算贏，輸的人要聽對方的指定懲罰，怎麼樣？」

芷漓：「（疑惑）妳...確定？遠時，這個難度太大了......」

零點：「所以說嘛，難度不大就沒有跟妳比的必要了」

芷漓：「嗯..行。說好懲罰不要罰錢，我的錢包都需要靠妳支撐的...」

零點：「好！（伸手去拿芷漓的咖啡喝了一口）」

芷漓：「（無奈）妳又喝我的！」

澤洛：「零點絕對在想壞心思（笑）」

零點：「哇！芷漓妳又沒加糖噫噫噫（苦痛的表情）」

→時域特殊節區，U.S.I 秘密研究組織（Nova labs）————

不知不覺，三人就這樣到了站，她們每日的工作地點。表面上是科技聯合研究會，但
卻默默承擔了延續這個在破碎邊界之家園的責任。這就是 Nova labs .大部分的人員
集中在表層，即在研究會處理公眾事務，但有幾位隱藏在機構後的核心人員，就是負
責「時域移轉」計劃的人員：X.澤洛，X.零點，X.芷漓，R.艾安...（數據屏蔽）

0000.2Void>>別看她們平常好像沒壓力...她們是世界上唯一能和「空界」連通的人
了，得益於“我們”的血統,我能從他們窺探不到的現實帶給他們珍貴的情報。加速移
轉進程，除此之外，我倒沒什麼擔心的了。因為這點，「現世」的領導層也沒有去管
轄他們的進度，畢竟“我”不喜歡被他們監管。【插入結束】

三人到工位後，澤洛神秘的離開了試驗場，零點和芷漓正布置操作台，準備開始今天
的工作，或“比賽”

零點：「（澤洛那傢伙不知道靠不靠譜啊..）阿漓，我這邊沒問題了。」

芷漓：「嗯.同樣.」

【滴滴】隨著計時器開始，二人也從時空泡陸續進入了實驗主宇外部基地遺跡，開始
找尋遠時。得益於二人的主宇量子系屬性，在基地中不用擔心威脅生命的事物。但終
究是另一個世界，複雜的統一星文還是讓她們摸不著頭腦，沒有一個檔案記載過這種
文字，只能“摸黑探索”

零點：「（看終端）芷漓從她上回探索的路線繼續了，澤洛那傢伙，真的行嗎..」

芷漓：（專心探索中，不說話）

于此同時，澤洛帶著一件東西回到了試驗場，將它扔進了零點的時空泡

澤洛：「妳可真是下重本了，零點」

零點：「（看見那東西從空間中切出來）（握住）（笑）芷漓，其實我早準備好了，
不僅是想讓妳...... 最主要是趁著這個機會，推進我們的計劃。嘿嘿」

零點將那個東西進行了簡單部署，隨後，那個東西消失了

（空間波動）

？？？>>：「噢！妳是小零點，小時候還抱過妳呢！妳找到那個東西了？！」

零點：「啊啊，前輩！我該，怎麼稱呼您？那個東西，我花了很大功夫弄回來了，沒
讓您失望吧」

???>>:「別說傻話，我們時間不多，叫我 void 就行，要求我幹嘛？」

零點：「我需要 void 前輩代理我，找到遠時」

???>>：「小事一件，你們叫那東西是【遠時】？好俗的名字，直接叫主宇控制台不
好嗎，來，妳靠近我一點」

零點看著空間那似有似無的漣漪，將頭靠了過去.....

......

......

......

...... 

芷漓：「零點...零點！（盡力搖晃）」

零點：「我..在哪？（觀察四周）怎麼回到試驗場了....頭好疼」

芷漓：「我一直沒找到遠時..快超過安全停留時長的時候...我...緊急切出了，不過
妳一直沒切出，我就一直在這等，澤洛也回去了，她好像並不擔心妳的安危，還說什
麼妳自有分寸她相信妳，我不能就這麼走了，就一直等到妳切出....」

「結果，妳切出後就是昏迷狀態，手裡攥著一張紙條，裡面是遠時的主宇坐標！當時
疑惑為什麼現在妳還在用紙條記事，立馬又讓 Xbot 去了這個坐標探查，結果真是遠時
所在地！非常非常難尋找的位置啊....妳想讓我幹什麼，不要命了嗎！妳在主宇是不
怕生命危險，但妳在這裡，現實！妳是一個普通人啊！真的會沒命的......」

零點：「哈哈，我沒事，現在我恢復的差不多了...（站起）....(跪倒)」

芷漓：（慌忙去扶）「妳超出安全停留時間太久了！量子反噬導致妳的身體暫時適應
不了現實，跟我回我家...我去申請一下特殊專軌，妳在這好好待著，別亂動」

... 

「好了，我推妳上軌。」

零點：「非要在妳家住嗎！（偷笑）」

芷漓：「我必須看著妳恢復，澤洛那傢伙真是的，妳要有個三長兩短，我們就沒主心
骨了...」

零點：「住一個房間嗎....哼哼~」

芷漓：「（暗暗的眼神）想當秘書了。...」

零點：「（乖乖閉嘴）」

零點在芷漓家中安全度過了一晚，什麼事情也沒發生，就是零點在早上說芷漓的枕頭
香香的之後被芷漓剝奪了早餐權。且零點只能在一旁罰站看著芷漓吃。

零點：「所以，妳要接受我的懲罰~~阿漓，準備好了嗎」

芷漓：「（閉上眼睛）什麼懲罰直接說..記得別罰錢....」

零點：「等我回趟家，今天反正妳要跟我一起休息，妳不是要盯著我恢復嗎，那邊有
澤洛就夠了。」

... 

等到半小時後，零點神秘兮兮的提著一個袋子回返，臉上掛著不懷好意的笑容

零點：「懲罰就是穿這件衣服~我一直都想看妳穿，不過平常妳絕對不會答應的，沒
見妳穿過這類衣服呢！」

芷漓：「（探頭看）咦......零點妳居然要我，我！....穿這種，好噁心哦...」

零點：「願賭服輸！快去換上！」

10 分鐘後. 

零點：「好可愛！！我要給妳拍張照！」

芷漓：「（絕望）」

零點：「別動哦！好，能不能笑一下啊？（惱）穿都穿了！」

3！

2！

1！

【咔嚓】

終端>>圖片已保存！

[[IMAGE::https://free.picui.cn/free/2025/12/07/69357a00942db.png::ATTACHMENT:ZERI_MAID.BMP]]

零點：「我要珍藏一輩子！今天妳必須穿一天，然後當我的女僕！」

[[DANGER::芷漓：「（想殺了她，不行，願賭服輸....）」]]`},en:{title:"Bet Accepted!",summary:"Since Point was 'tricked into overtime' by Zeri last time, she hasn't been able to let go of her frustration. So, she found an opportunity...",content:`[[BLUE::Reference: Current World Setting]]

[[BLUE::Since Point was 'tricked into overtime' by Zeri last time, she hasn't been able to let go of her frustration. So, she found an opportunity...]]

[[DIVIDER]]

On a normal workday, the three met at the relay sector heading to the institute.

Point, Zelo: "Good morning!"

Zeri: (Looking down at her terminal)

Point: "Liz? What are you doing? (Leans in)"

Zeri: "(Looks up) Point... I've told you many times not to call me by 'that' name..."

Point: "I've called you that since we were kids, what does it matter! (Starting to look at yesterday's unfinished projects already...)"

Zeri's eyes darkened for a moment, then she turned to Point and said: "Point, do you want to be my secretary again? (Smiles mischievously)"

Just that instant caused Point's fragmented memories to assemble into a sharp blade, piercing her brain with a dull pain. Her expression instantly turned to panic. Zelo laughed secretly on the side. After being spotted by Point, Point ran over and knocked Zelo on the head, causing Zelo to squat down clutching her head in pain.

Point: "Zelo, you're still laughing! You don't know that day, I took on at least three times the usual experimental load! I was exhausted."

Zeri continued to look down at her terminal, pulling her coffee cup from the floating force field beside her and taking a sip.

Point: "(Pouts angrily) Ali, I want to make a bet with you~"

Zeri: "Hmm? I'm listening."

Point: "When we get to the lab later, how about we compete with the temporal force field probes? It helps with our future deployment anyway. Whoever captures 'Far Time' first wins. The loser has to accept a punishment specified by the winner. How about it?"

Zeri: "(Confused) Are you... sure? Far Time, that difficulty is too high..."

Point: "That's why I said it. If it wasn't difficult, there would be no need to compete with you."

Zeri: "Hmm... okay. Just don't punish me with money, my wallet relies on your support..."

Point: "Okay! (Reaches out to take Zeri's coffee and takes a sip)"

Zeri: "(Helpless) You drank mine again!"

Zelo: "Point is definitely thinking of something bad (laughs)"

Point: "Wow! Zeri, you didn't add sugar again yeeeee (painful expression)"

...

[[IMAGE::https://free.picui.cn/free/2025/12/07/69357a00942db.png::ATTACHMENT:ZERI_MAID.BMP]]

Point: "I'm going to treasure this forever! You have to wear this all day today and be my maid!"

[[DANGER::Zeri: "(Wants to kill her, but no, she lost the bet...)"]]`}}},dx={id:"locked-chapter-003",date:"档案记录: A-003",status:"locked",translations:{"zh-CN":{title:"空白档案 // 待录入",summary:"该节点内容已被重置，等待操作员手动录入数据。",content:"DATA_CLEARED // AWAITING_INPUT"},"zh-TW":{title:"空白檔案 // 待錄入",summary:"該節點內容已被重置，等待操作員手動錄入數據。",content:"DATA_CLEARED // AWAITING_INPUT"},en:{title:"EMPTY_FILE // PENDING",summary:"Content reset. Waiting for manual operator input.",content:"DATA_CLEARED // AWAITING_INPUT"}}},hx={id:"locked-chapter-004",date:"档案记录: A-004",status:"locked",translations:{"zh-CN":{title:"加密节点 // 拒绝访问",summary:"检测到未知的数据波动，该节点已被系统自动封锁。",content:"ACCESS DENIED"},"zh-TW":{title:"加密節點 // 拒絕訪問",summary:"檢測到未知的數據波動，該節點已被系統自動封鎖。",content:"ACCESS DENIED"},en:{title:"ENCRYPTED_NODE // ACCESS_DENIED",summary:"Unknown data fluctuation detected. Node automatically locked by system.",content:"ACCESS DENIED"}}},fx={id:"locked-chapter-005",date:"档案记录: A-005",status:"locked",translations:{"zh-CN":{title:"信号丢失 // 待重连",summary:"该时间线尚未观测到有效数据。",content:"SIGNAL_LOST"},"zh-TW":{title:"信號丟失 // 待重連",summary:"該時間線尚未觀測到有效數據。",content:"SIGNAL_LOST"},en:{title:"SIGNAL_LOST // RECONNECTING",summary:"No valid data observed in this timeline yet.",content:"SIGNAL_LOST"}}},mx=[cx,ux,dx,hx,fx],At={characters:ox,lore:rx,chapters:mx},Mn=[{id:"byaki",group:"ARCHIVE_00 // ORIGIN",translations:{"zh-CN":{name:"白栖",enName:"Z.Byaki",role:"起源",tags:["泽洛希家族","逝者","小空"],quote:"今天，也能活下去。",description:["**身份:** Void 尚未成为高维存在时的名字。她是故事的起始点之一。","**背景:** 曾是泽洛希家族的一员，拥有极高的量子适应性。","**转折:** 为了维持世界的稳定走向，她在极远的过去付出了无法挽回的代价，最终成为了“空”。","**性格:** 温柔、坚定，带有一种悲天悯人的神性，但偶尔也会流露出作为人类时的情感。"]},"zh-TW":{name:"白棲",enName:"Z.Byaki",role:"起源",tags:["澤洛希","逝者","空"],quote:"願你在沒有我的世界，能做個好夢。",description:["**身份:** Void 尚未成為高維存在時的名字。她是暮雨和零點故事的起始點之一。","**背景:** 曾是澤洛希家族的一員，擁有極高的量子適應性。","**轉折:** 為了維持世界的穩定，她付出了無法挽回的代價，最終成為了「空」的一部分。","**性格:** 溫柔、堅定，帶有一種悲天憫人的神性，但偶爾也會流露出作為人類時的情感。"]},en:{name:"Byaki",enName:"Z.Byaki",role:"Origin",tags:["Zeloshi","Deceased","Void"],quote:"May you have a sweet dream in a world without me.",description:["**Identity:** The name of Void before becoming a higher-dimensional being. She is one of the starting points of Dusk and Point's story.","**Background:** Formerly a member of the Zeloshi family, possessing extremely high quantum adaptability.","**Turning Point:** To maintain the stability of the world, she paid an irreversible price and eventually became part of the 'Void'.","**Personality:** Gentle and firm, with a divine compassion, but occasionally revealing emotions from her time as a human."]}}},{id:"dusk-rain",group:"ARCHIVE_01 // ACTIVE",translations:{"zh-CN":{name:"暮雨",enName:"Dusk .Rain",role:"协作者",tags:["畏光","多虑","吉他手","狂热"],quote:"这只是必要的牺牲……大概吧？",description:["**背景设定:** 父母曾是科研者，但从未告诉暮雨。在其父母双亡前，暮雨是一个极其普通的孩子。","**生理特征:** 在接受“零空”的预示后落下心理性创伤，从而畏光，需定时滴消眼药水，并佩戴高科技遮光眼罩（单向透明，从内部能清晰看见外界，但从外部看只是一块普通的黑色布料）。","**外貌习惯:** 无论去哪里，背上永远背着一个黑色的吉他包，吉他本体从不离身。对他来说，这不仅是乐器，更是某种安全感的来源。","**性格侧写:**","• 目的性很强，甚至狂热 (针对于特定事件)。","• 对人温和，善于交际。读得懂气氛，关照他人感受。","• Overthinking，多虑，以至内耗。","• 爱弹琴。以音乐的形式舒缓压力。","• 有自己的想法。","• 喜欢逗弄零点。"]},"zh-TW":{name:"暮雨",enName:"Dusk .Rain",role:"協作者",tags:["畏光","多慮","吉他手","狂熱"],quote:"這只是必要的犧牲……大概吧？",description:["**背景設定:** 父母曾是科研者，但從未告訴暮雨。在其父母雙亡前，暮雨是一個極其普通的孩子。","**生理特徵:** 在接受「零空」的預示後落下心理性創傷，從而畏光，需定時滴消眼藥水，並佩戴高科技遮光眼罩（單向透明，從內部能清晰看見外界，但從外部看只是一塊普通的黑色布料）。","**外貌習慣:** 無論去哪裡，背上永遠背著一個黑色的吉他包，吉他本體從不離身。對他來說，這不僅是樂器，更是某種安全感的來源。","**性格側寫:**","• 目的性很強，甚至狂熱 (針對於特定事件)。","• 對人溫和，善於交際。讀得懂氣氛，關照他人感受。","• Overthinking，多慮，以至內耗。","• 愛彈琴。以音樂的形式舒緩壓力。","• 有自己的想法。","• 喜歡逗弄零點。"]},en:{name:"Dusk Rain",enName:"Dusk .Rain",role:"Collaborator",tags:["Photophobia","Overthinker","Guitarist","Fanatic"],quote:"This is just a necessary sacrifice... probably?",description:["**Background:** His parents were researchers but never told him. Before they passed away, Dusk was an extremely ordinary child.","**Physical Condition:** Suffered psychological trauma after receiving a premonition from 'Void', resulting in photophobia. He needs to apply eye drops regularly and wears a high-tech blackout eye mask (one-way transparent, allowing a clear view from the inside, but appearing as a piece of ordinary black cloth from the outside).","**Habit:** Regardless of where he goes, he always carries a black guitar bag on his back; his guitar never leaves his side. For him, it is not just an instrument, but a source of security.","**Personality:**","• Highly purposeful, even fanatical (regarding specific events).","• Gentle with others, good at socializing. Reads the atmosphere and cares about others' feelings.","• Overthinking, leads to internal exhaustion.","• Loves playing the guitar to relieve stress.","• Has his own ideas.","• Likes to tease Point."]}}},{id:"unknown-entity",group:"ARCHIVE_02 // CLASSIFIED",isLocked:!0,translations:{"zh-CN":{name:"？？？",enName:"UNKNOWN_ENTITY",role:"未知",tags:[],description:["权限不足，无法访问该档案。"],quote:"..."},"zh-TW":{name:"？？？",enName:"UNKNOWN_ENTITY",role:"未知",tags:[],description:["權限不足，無法訪問該檔案。"],quote:"..."},en:{name:"???",enName:"UNKNOWN_ENTITY",role:"UNKNOWN",tags:[],description:["Access denied. Insufficient clearance."],quote:"..."}}},{id:"empty-slot-01",group:"ARCHIVE_03 // RESERVED",isLocked:!0,translations:{"zh-CN":{name:"空闲槽位_01",enName:"EMPTY_SLOT_01",role:"待定",tags:[],description:["该记录槽位为空，等待数据录入..."],quote:""},"zh-TW":{name:"空閒槽位_01",enName:"EMPTY_SLOT_01",role:"待定",tags:[],description:["該記錄槽位為空，等待數據錄入..."],quote:""},en:{name:"EMPTY_SLOT_01",enName:"EMPTY_SLOT_01",role:"TBD",tags:[],description:["Slot empty. Awaiting data entry..."],quote:""}}},{id:"empty-slot-02",group:"ARCHIVE_03 // RESERVED",isLocked:!0,translations:{"zh-CN":{name:"空闲槽位_02",enName:"EMPTY_SLOT_02",role:"待定",tags:[],description:["该记录槽位为空，等待数据录入..."],quote:""},"zh-TW":{name:"空閒槽位_02",enName:"EMPTY_SLOT_02",role:"待定",tags:[],description:["該記錄槽位為空，等待數據錄入..."],quote:""},en:{name:"EMPTY_SLOT_02",enName:"EMPTY_SLOT_02",role:"TBD",tags:[],description:["Slot empty. Awaiting data entry..."],quote:""}}}],Kr=({children:d})=>{const[x,p]=V.useState(!1);return i.jsx("span",{onClick:c=>{c.stopPropagation(),p(!x)},className:`
        px-1 mx-0.5 rounded-sm select-none cursor-help transition-all duration-300 inline-block align-middle
        ${x?"bg-ash-light text-ash-black":"bg-ash-gray text-transparent hover:text-ash-black hover:bg-ash-light"}
      `,title:"REDACTED_DATA [CLICK TO REVEAL]",children:d})},bx={point:["zeri","zelo","void","dusk-rain"],zeri:["point","zelo","void","dusk-rain"],zelo:["point","zeri","void","dusk-rain"],void:["point","zeri","zelo","dusk-rain"]},gf=(d,x)=>{const p=At.characters.find(b=>b.id===d);if(p){const b=p.translations[x]||p.translations["zh-CN"];return{id:p.id,name:b.name,role:b.role,color:p.themeColor||"text-ash-light",isMain:!0}}const c=Mn.find(b=>b.id===d);if(c){const b=c.translations[x]||c.translations["zh-CN"];return{id:c.id,name:b.name,role:b.role,color:"text-ash-gray",isMain:!1}}return null},Ar=d=>d.split(/(\[\[MASK::.*?\]\])/g).map((p,c)=>{if(p.startsWith("[[MASK::")&&p.endsWith("]]")){const b=p.slice(8,-2);return i.jsx(Kr,{children:b},c)}return p}),xf=({centerId:d,language:x,onSelect:p,isLightTheme:c})=>{const b=bx[d]||[];if(b.length===0)return null;const _=gf(d,x);if(!_)return null;const H=800,S=H/2,y=280;return i.jsxs("div",{className:"w-full h-full relative flex flex-col",children:[i.jsxs("div",{className:"absolute top-4 left-4 z-10 text-xs font-bold uppercase flex items-center gap-2 text-ash-gray/70 bg-ash-black/50 px-2 py-1 border border-ash-gray/30",children:[i.jsx(wg,{size:14}),x==="en"?"Neural_Network":"人际关系拓扑"]}),i.jsxs("div",{className:"flex-1 min-h-0 flex items-center justify-center relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"}),i.jsxs("svg",{viewBox:`0 0 ${H} ${H}`,className:"w-full h-full max-w-[90%] max-h-[90%] overflow-visible drop-shadow-2xl",children:[b.map((h,D)=>{const T=D*2*Math.PI/b.length-Math.PI/2,M=S+y*Math.cos(T),U=S+y*Math.sin(T),R=h==="dusk-rain";return i.jsxs("g",{children:[i.jsx("line",{x1:S,y1:S,x2:M,y2:U,stroke:"currentColor",strokeOpacity:R?"0.15":"0.2",strokeWidth:R?"1":"2",strokeDasharray:R?"8,6":"none",className:"text-ash-gray"}),R?i.jsx("text",{x:S+(M-S)*.5,y:S+(U-S)*.5,fill:"currentColor",textAnchor:"middle",dy:"0.3em",className:"text-[10px] text-ash-gray font-mono opacity-50",children:"×"}):i.jsx("circle",{cx:S+(M-S)*.5,cy:S+(U-S)*.5,r:"3",className:"text-ash-gray fill-ash-black stroke-2 stroke-current"})]},`line-${h}`)}),i.jsxs("g",{className:"filter drop-shadow-xl",children:[i.jsx("circle",{cx:S,cy:S,r:"70",className:`${_.color} fill-current opacity-10 animate-pulse`}),i.jsx("circle",{cx:S,cy:S,r:"55",className:"fill-ash-black stroke-[4px] stroke-current text-ash-gray"}),i.jsx("text",{x:S,y:S,dy:"0.35em",textAnchor:"middle",className:`text-[28px] font-mono font-black uppercase ${_.color} fill-current pointer-events-none select-none`,children:_.name.substring(0,1)})]}),b.map((h,D)=>{const T=D*2*Math.PI/b.length-Math.PI/2,M=S+y*Math.cos(T),U=S+y*Math.sin(T),R=gf(h,x),G=h==="dusk-rain";return R?i.jsxs("g",{onClick:te=>{te.stopPropagation(),R.isMain&&p(h)},className:`transition-all duration-300 ${R.isMain?"cursor-pointer hover:scale-110":"cursor-default opacity-90"} ${G?"grayscale":""}`,children:[i.jsx("circle",{cx:M,cy:U,r:"40",className:`${R.color} fill-current ${G?"opacity-[0.03]":"opacity-10"}`}),i.jsx("circle",{cx:M,cy:U,r:"32",className:`fill-ash-black stroke-2 stroke-current ${R.color} ${G?"stroke-dashed opacity-50":""}`,strokeDasharray:G?"4,4":"none"}),G?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:`M${M-10} ${U-10} L${M+10} ${U+10} M${M+10} ${U-10} L${M-10} ${U+10}`,stroke:"currentColor",strokeWidth:"1.5",className:`${R.color} opacity-40`}),i.jsx("text",{x:M,y:U,dy:"0.3em",textAnchor:"middle",className:`text-[8px] font-mono font-bold uppercase ${R.color} fill-current select-none opacity-70`,children:"OFFLINE"}),i.jsx("text",{x:M,y:U+48,dy:"0.3em",textAnchor:"middle",className:`text-[12px] font-mono font-bold uppercase ${R.color} fill-current select-none opacity-50 line-through decoration-current`,children:R.name})]}):i.jsxs(i.Fragment,{children:[i.jsx("text",{x:M,y:U,dy:"-0.6em",textAnchor:"middle",className:`text-[14px] font-mono font-bold uppercase ${R.color} fill-current select-none`,children:R.name}),i.jsx("text",{x:M,y:U,dy:"1.4em",textAnchor:"middle",className:"text-[10px] font-mono uppercase fill-ash-gray select-none tracking-tighter",children:R.role})]})]},h):null})]})]}),i.jsxs("div",{className:"absolute bottom-4 right-4 text-[10px] font-mono text-ash-gray/50 text-right",children:["LINK_STATUS: STABLE",i.jsx("br",{}),"NODES: ",b.length+1]})]})},gx=({stats:d,colorClass:x})=>{const H=(D,T,M)=>{const U=Math.PI*2*T/M-Math.PI/2,R=D/10*40,G=50+R*Math.cos(U),te=50+R*Math.sin(U);return`${G},${te}`},S=[d.strength,d.intelligence,d.mental,d.resonance,d.agility],y=S.map((D,T)=>H(D,T,5)).join(" "),h=[{label:"STR",x:50,y:5},{label:"INT",x:95,y:35},{label:"MEN",x:80,y:95},{label:"RES",x:20,y:95},{label:"AGI",x:5,y:35}];return i.jsx("div",{className:"relative w-full aspect-square max-w-[180px] xl:max-w-[220px] mx-auto",children:i.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full overflow-visible",children:[[.2,.4,.6,.8,1].map(D=>i.jsx("polygon",{points:Array(5).fill(10*D).map((T,M)=>H(T,M,5)).join(" "),fill:"none",stroke:"var(--ash-gray)",strokeWidth:"0.5",opacity:"0.3"},D)),h.map((D,T)=>i.jsx("line",{x1:50,y1:50,x2:H(10,T,5).split(",")[0],y2:H(10,T,5).split(",")[1],stroke:"var(--ash-gray)",strokeWidth:"0.5",opacity:"0.3"},T)),i.jsx("polygon",{points:y,fill:"currentColor",fillOpacity:"0.2",stroke:"currentColor",strokeWidth:"2",className:x}),S.map((D,T)=>{const[M,U]=H(D,T,5).split(",");return i.jsx("circle",{cx:M,cy:U,r:"1.5",className:`${x} fill-current`},T)}),h.map((D,T)=>i.jsx("text",{x:D.x,y:D.y,textAnchor:"middle",fontSize:"6",fill:"var(--ash-gray)",className:"font-mono font-bold",children:D.label},T))]})})};function xx({language:d}){const[x,p]=V.useState(At.characters[0].id),c=At.characters.find(S=>S.id===x)||At.characters[0],b=c.translations[d]||c.translations["zh-CN"],_=S=>{const y=S.toLowerCase();return y.includes("支援")||y.includes("重装")||y.includes("support")||y.includes("heavy")?i.jsx(Dg,{className:"w-5 h-5"}):y.includes("科研")||y.includes("前线")||y.includes("research")||y.includes("frontline")?i.jsx(Ta,{className:"w-5 h-5"}):y.includes("？？？")||y.includes("???")?i.jsx(Rf,{className:"w-5 h-5"}):i.jsx(mf,{className:"w-5 h-5"})},H=[{label:"STRENGTH",val:c.stats.strength,icon:Gf},{label:"INTELLIGENCE",val:c.stats.intelligence,icon:_f},{label:"AGILITY",val:c.stats.agility,icon:Pg},{label:"MENTAL",val:c.stats.mental,icon:ug},{label:"RESONANCE",val:c.stats.resonance,icon:ls}];return i.jsxs("div",{className:"flex flex-col h-full bg-halftone overflow-hidden",children:[i.jsxs("header",{className:"p-4 md:p-6 border-b-2 border-ash-dark bg-ash-black z-20 flex justify-between items-center shrink-0",children:[i.jsxs("div",{children:[i.jsxs("h2",{className:"text-xl md:text-2xl font-black text-ash-light mb-1 uppercase tracking-tighter flex items-center gap-3",children:[i.jsx(mf,{size:24,className:"md:w-6 md:h-6"}),d==="en"?"Personnel_File":"人员档案"]}),i.jsxs("div",{className:"text-[10px] font-mono text-ash-gray flex gap-2",children:[i.jsx("span",{className:"bg-ash-dark px-1",children:"CONFIDENTIAL"}),i.jsx("span",{children:"// AUTH_REQ_LEVEL_5"})]})]}),i.jsx("div",{className:"hidden md:block text-right",children:i.jsx("div",{className:"text-xs text-ash-light font-bold font-mono border border-ash-gray px-2 py-1 inline-block",children:"DB_STATUS: ONLINE"})})]}),i.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden relative",children:[i.jsx("aside",{className:"w-full md:w-64 border-b-2 md:border-b-0 md:border-r-2 border-ash-dark bg-ash-black overflow-x-auto md:overflow-y-auto shrink-0 z-10 flex flex-row md:flex-col no-scrollbar",children:i.jsx("div",{className:"flex flex-row md:flex-col p-2 md:p-4 gap-2 md:gap-3 min-w-max md:min-w-0",children:At.characters.map(S=>{const y=S.translations[d]||S.translations["zh-CN"];return i.jsxs("button",{onClick:()=>p(S.id),className:`w-32 md:w-full text-left p-2 md:p-3 border-2 transition-all relative overflow-hidden group shrink-0 ${x===S.id?"border-ash-light bg-ash-light text-ash-black shadow-hard":"border-ash-gray/30 bg-ash-dark text-ash-gray hover:border-ash-gray hover:text-ash-white"}`,children:[i.jsxs("div",{className:"flex justify-between items-start mb-1 z-10 relative",children:[i.jsx("span",{className:"font-bold uppercase tracking-wider truncate text-xs md:text-sm",children:y.name}),i.jsx("div",{className:"scale-75 origin-top-right",children:_(y.role)})]}),i.jsx("div",{className:"text-[10px] font-mono opacity-70 z-10 relative truncate",children:Ar(S.alias||"")}),x===S.id&&i.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none"})]},S.id)})})}),i.jsxs("main",{className:"flex-1 flex flex-col xl:flex-row h-full overflow-hidden bg-ash-black",children:[i.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 space-y-8 relative",children:[i.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-5 pointer-events-none",children:i.jsx(Cf,{size:300,strokeWidth:.5})}),i.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start",children:[i.jsxs("div",{className:"flex-1 space-y-4",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-4xl md:text-6xl font-black uppercase tracking-tighter text-ash-light mb-2 leading-none",children:b.name}),i.jsxs("div",{className:"flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm font-mono text-ash-gray",children:[i.jsx("span",{className:"px-2 py-1 bg-ash-light text-ash-black font-bold uppercase",children:Ar(c.alias||"")}),i.jsxs("span",{children:[" // ROLE: ",b.role]}),i.jsxs("span",{children:[" // ID: ",c.id.toUpperCase()]})]})]}),b.quote&&i.jsxs("div",{className:"border-l-4 border-ash-light pl-4 py-2 italic text-ash-light/80 font-serif text-base md:text-lg",children:['"',b.quote,'"']}),i.jsx("div",{className:"flex flex-wrap gap-2",children:b.tags.map(S=>i.jsxs("span",{className:"px-3 py-1 border border-ash-gray rounded-full text-xs font-mono hover:bg-ash-light hover:text-ash-black transition-colors cursor-default",children:["#",S]},S))})]}),i.jsxs("div",{className:"w-full lg:w-[280px] bg-ash-dark p-4 border-2 border-ash-gray shadow-hard",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4 border-b border-ash-gray/20 pb-2",children:[i.jsxs("h3",{className:"text-[10px] font-bold uppercase flex items-center gap-2 text-ash-gray",children:[i.jsx(Ta,{size:12})," ",d==="en"?"Combat_Data":"战斗数据"]}),i.jsxs("div",{className:"text-[10px] font-mono text-ash-gray",children:["SYNC: ",c.stats.resonance*10,"%"]})]}),i.jsx(gx,{stats:c.stats,colorClass:c.themeColor||"text-ash-light"}),i.jsx("div",{className:"space-y-2 mt-4",children:H.map(S=>i.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono",children:[i.jsxs("span",{className:"flex items-center gap-2 text-ash-gray font-bold",children:[i.jsx(S.icon,{size:10})," ",S.label]}),i.jsx("div",{className:"flex gap-[1px]",children:Array(10).fill(0).map((y,h)=>{var D;return i.jsx("div",{className:`w-1 h-2 transition-all duration-300 ${h<S.val?((D=c.themeColor)==null?void 0:D.replace("text-","bg-"))||"bg-ash-light":"bg-ash-black border border-ash-dark"}`},h)})})]},S.label))})]})]}),i.jsxs("div",{className:"bg-ash-dark/20 border-2 border-ash-gray/30 p-6",children:[i.jsxs("h3",{className:"text-lg font-bold uppercase border-b border-ash-gray pb-2 flex items-center gap-2 mb-4 text-ash-light",children:[i.jsx(Ag,{size:18})," Field Analysis"]}),i.jsx("div",{className:"space-y-4 font-mono text-sm leading-relaxed text-ash-gray/90",children:b.description.map((S,y)=>i.jsxs("div",{className:"flex gap-3",children:[i.jsxs("span",{className:"text-ash-light font-bold shrink-0",children:["[",String(y+1).padStart(2,"0"),"]"]}),i.jsx("p",{children:Ar(S)})]},y))})]}),i.jsx("div",{className:"xl:hidden h-[400px] bg-ash-dark/30 border-2 border-ash-gray p-4 relative",children:i.jsx(xf,{centerId:c.id,language:d,onSelect:p,isLightTheme:!1})})]}),i.jsx("div",{className:"hidden xl:flex w-[45%] 2xl:w-[40%] bg-ash-dark/10 border-l-2 border-ash-dark relative flex-col shadow-[inset_10px_0_20px_rgba(0,0,0,0.2)]",children:i.jsx("div",{className:"flex-1 w-full h-full p-8 overflow-hidden flex items-center justify-center",children:i.jsx(xf,{centerId:c.id,language:d,onSelect:p,isLightTheme:!1})})})]},c.id)]})]})}const px=({language:d})=>{const[x,p]=V.useState("All"),b={"zh-CN":{title:"世界数据库",all:"全部档案",world:"世界构造",org:"组织档案",tech:"技术文档",type:"类型"},"zh-TW":{title:"世界數據庫",all:"全部檔案",world:"世界構造",org:"組織檔案",tech:"技術文檔",type:"類型"},en:{title:"WORLD_DATABASE",all:"ALL_FILES",world:"WORLD",org:"ORG",tech:"TECH",type:"TYPE"}}[d],_=[{id:"All",label:b.all,icon:Lb},{id:"World",label:b.world,icon:Cn},{id:"Organization",label:b.org,icon:Lf},{id:"Technology",label:b.tech,icon:ls}],H=x==="All"?At.lore:At.lore.filter(S=>S.category===x);return i.jsxs("div",{className:"p-4 md:p-12 max-w-6xl mx-auto h-full overflow-y-auto bg-halftone",children:[i.jsx(Ue,{children:i.jsxs("header",{className:"mb-6 md:mb-10 border-4 border-ash-light p-4 md:p-6 bg-ash-black shadow-hard",children:[i.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-ash-light mb-2 flex items-center gap-3",children:[i.jsx(kf,{size:24,className:"md:w-8 md:h-8"}),b.title]}),i.jsxs("div",{className:"h-2 w-full bg-ash-dark border border-ash-gray mt-4 flex",children:[i.jsx("div",{className:"h-full bg-ash-light w-2/3 animate-[scanline_2s_linear_infinite] bg-gradient-to-r from-ash-light via-ash-white to-ash-light",style:{animationDirection:"reverse"}}),i.jsx("div",{className:"h-full bg-ash-gray w-1/3 opacity-20"})]})]})}),i.jsx("div",{className:"flex flex-wrap gap-2 md:gap-0 mb-6 md:mb-8 pl-0 md:pl-4 border-b-0 md:border-b-2 border-ash-light",children:_.map(S=>i.jsxs("button",{onClick:()=>p(S.id),className:`flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 border-2 md:border-b-0 md:mr-[-2px] text-xs md:text-sm font-bold font-mono transition-all relative md:top-[2px] flex-grow md:flex-grow-0 ${x===S.id?"bg-ash-light text-ash-black border-ash-light z-10 shadow-hard md:shadow-none":"bg-ash-dark text-ash-gray border-ash-gray hover:bg-ash-gray hover:text-ash-black"}`,children:[i.jsx(S.icon,{size:14}),i.jsx("span",{children:S.label})]},S.id))}),i.jsx("div",{className:"grid grid-cols-1 gap-4 md:gap-8 pb-8",children:H.map((S,y)=>{const h=S.translations[d]||S.translations["zh-CN"];return i.jsx(Ue,{delay:y*100,children:i.jsxs("div",{className:"bg-ash-black border-2 border-ash-gray p-4 md:p-8 hover:border-ash-light transition-colors relative group",children:[i.jsx("div",{className:"absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 border-t-2 border-l-2 border-ash-gray group-hover:border-ash-light"}),i.jsx("div",{className:"absolute top-0 right-0 w-3 md:w-4 h-3 md:h-4 border-t-2 border-r-2 border-ash-gray group-hover:border-ash-light"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-3 md:w-4 h-3 md:h-4 border-b-2 border-l-2 border-ash-gray group-hover:border-ash-light"}),i.jsx("div",{className:"absolute bottom-0 right-0 w-3 md:w-4 h-3 md:h-4 border-b-2 border-r-2 border-ash-gray group-hover:border-ash-light"}),i.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between mb-4 md:mb-6 border-b border-dashed border-ash-gray pb-4 gap-2 md:gap-0",children:[i.jsx("h3",{className:"text-lg md:text-xl font-bold text-ash-light font-mono uppercase leading-tight",children:h.title}),i.jsxs("span",{className:"self-start text-[10px] font-mono text-ash-black bg-ash-gray px-2 py-1 font-bold",children:[b.type,": ",S.category.toUpperCase()]})]}),i.jsx("div",{className:"space-y-4 text-ash-gray font-mono text-xs md:text-sm leading-6 md:leading-7",children:h.content.map((D,T)=>{const M=D.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(M){const[R,G,te]=M;return i.jsx("div",{className:"my-6",children:i.jsxs("div",{className:"relative border-2 border-ash-gray p-2 bg-ash-dark/30 inline-block max-w-full",children:[i.jsx("div",{className:"absolute -top-1 -left-1 w-2 h-2 border-t border-l border-ash-gray"}),i.jsx("div",{className:"absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-ash-gray"}),i.jsx("img",{src:G,alt:te,className:"max-w-full h-auto max-h-64 object-contain mx-auto block grayscale-[20%] hover:grayscale-0 transition-all"}),i.jsx("div",{className:"absolute bottom-0 right-0 translate-y-1/2 translate-x-2 bg-ash-dark border border-ash-gray px-2 py-0.5 z-10",children:i.jsxs("div",{className:"text-[10px] font-mono text-ash-light flex items-center gap-2 uppercase font-bold",children:[i.jsx(Xr,{size:10}),te]})})]})},T)}const U=D.split("**");return i.jsx("p",{children:U.map((R,G)=>G%2===1?i.jsx("strong",{className:"text-ash-light bg-ash-dark px-1 border border-ash-gray/50",children:R},G):R)},T)})})]})},S.id)})})]})},Yf=({onComplete:d,language:x,mode:p="full"})=>{const[c,b]=V.useState(0),[_,H]=V.useState([]);V.useEffect(()=>{const y=setInterval(()=>{const h=Math.random().toString(16).substring(2,10).toUpperCase(),D=Math.floor(Math.random()*9999);H(T=>[`> SYNC_FRAME_${h} :: PACKET_${D}`,...T].slice(0,15))},p==="full"?50:20);return()=>clearInterval(y)},[p]),V.useEffect(()=>{const y=p==="full"?{stage1:1200,stage2:2500,stage3:3500,complete:4e3}:{stage1:300,stage2:800,stage3:1500,complete:1800},h=setTimeout(()=>b(1),y.stage1),D=setTimeout(()=>b(2),y.stage2),T=setTimeout(()=>b(3),y.stage3),M=setTimeout(d,y.complete);return()=>{clearTimeout(h),clearTimeout(D),clearTimeout(T),clearTimeout(M)}},[d,p]);const S={"zh-CN":{init:"协议初始化...",lock:"锁定现实锚点",targeting:"目标搜寻",verified:"验证通过",sync:"时空同步率: 0%",dive:"开始读取",warn:"警告：当前时间线无法确认，以只读模式进入.."},"zh-TW":{init:"協議初始化...",lock:"鎖定現實錨點",targeting:"目標搜尋",verified:"驗證通過",sync:"時空同步率: 0%",dive:"開始讀取",warn:"警告：當前時間線無法確認，以唯讀模式進入.."},en:{init:"PROTOCOL_INIT...",lock:"REALITY_ANCHOR_LOCKED",targeting:"TARGET_SEARCH",verified:"VERIFIED",sync:"SYNC_RATE: 0%",dive:"READING_INIT",warn:"WARNING: TIMELINE UNVERIFIED // ENTERING READ-ONLY MODE"}}[x];return i.jsxs("div",{className:"fixed inset-0 z-[99999] bg-ash-black text-ash-light overflow-hidden flex items-center justify-center font-mono cursor-none",children:[i.jsx("button",{onClick:d,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-ash-light/20 px-2 py-1 hover:bg-ash-light hover:text-ash-black transition-colors opacity-50 hover:opacity-100 cursor-pointer",children:"[ABORT_SEQUENCE]"}),i.jsx("div",{className:`absolute inset-0 bg-grid-hard opacity-20 transition-transform duration-[4000ms] ease-in ${c>0?"scale-150":"scale-100"}`}),i.jsx("div",{className:`relative z-10 transition-all duration-500 ${c>=2?"scale-[5] opacity-0 blur-xl":"scale-100 opacity-100"}`,children:i.jsxs("div",{className:"relative flex items-center justify-center",children:[i.jsx("div",{className:"absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-ash-gray/20 rounded-full animate-spin-slow"}),i.jsx("div",{className:"absolute w-[65vw] h-[65vw] md:w-[500px] md:h-[500px] border border-ash-gray/30 rounded-full border-dashed animate-spin-reverse-slow"}),i.jsx("div",{className:`absolute w-[50vw] h-[50vw] md:w-[400px] md:h-[400px] border-2 border-ash-light rounded-full animate-ping opacity-20 ${c===1?"border-red-500":""}`}),i.jsxs("div",{className:"w-48 h-48 md:w-64 md:h-64 border-2 border-ash-light relative flex items-center justify-center animate-zoom-in-fast bg-ash-black/50 backdrop-blur-sm",children:[i.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-ash-light"}),i.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-ash-light"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-ash-light"}),i.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-ash-light"}),i.jsxs("div",{className:`flex flex-col items-center gap-4 transition-colors duration-300 ${c>0?"text-red-500":"text-ash-light"}`,children:[i.jsx(Bg,{size:48,strokeWidth:1,className:`md:w-16 md:h-16 ${c>0?"animate-spin":""}`}),i.jsx("div",{className:"text-xl md:text-2xl font-black tracking-widest uppercase",children:c===0?S.targeting:S.verified}),p==="full"&&i.jsx("div",{className:"text-[10px] bg-ash-light text-ash-black px-2 py-0.5",children:S.lock})]})]})]})}),i.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-64 p-8 flex flex-col justify-center gap-1 opacity-60 pointer-events-none hidden lg:flex",children:_.map((y,h)=>i.jsx("div",{className:"text-[10px] text-green-500/70 font-mono truncate",children:y},h))}),i.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-64 p-8 flex flex-col justify-center gap-1 opacity-60 pointer-events-none text-right hidden lg:flex",children:_.map((y,h)=>i.jsx("div",{className:"text-[10px] text-green-500/70 font-mono truncate",children:y.split("").reverse().join("")},h))}),c>=1&&i.jsxs("div",{className:"absolute inset-0 z-0 flex items-center justify-center pointer-events-none",children:[i.jsx("div",{className:"w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"}),[1,2,3,4,5].map(y=>i.jsx("div",{className:"absolute border border-ash-light/20 rounded-full animate-tunnel",style:{width:`${y*10}%`,height:`${y*10}%`,animationDelay:`${y*.1}s`}},y))]}),i.jsxs("div",{className:"absolute top-12 w-full text-center space-y-2",children:[p==="full"&&i.jsx("div",{className:"text-xs font-bold tracking-[1em] text-ash-gray animate-pulse",children:S.init}),c>=1&&i.jsx("div",{className:"text-4xl md:text-6xl font-black uppercase text-ash-light glitch-text-heavy","data-text":"NOVA_LABS",children:"NOVA_LABS"})]}),i.jsxs("div",{className:"absolute bottom-12 w-full flex justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-mono px-4 flex-wrap",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Cn,{size:14})," SYSTEM: ",i.jsx("span",{className:"text-green-500",children:"ONLINE"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Bf,{size:14})," UPLINK: ",i.jsx("span",{className:"text-green-500",children:"STABLE"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Ta,{size:14})," MEMORY: ",i.jsx("span",{className:"text-green-500",children:"READ_WRITE"})]})]}),c===3&&i.jsx("div",{className:"absolute inset-0 bg-ash-white animate-fade-in z-[100000]"}),c===2&&p==="full"&&i.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-50 bg-red-500/10",children:i.jsx("div",{className:"border-y-4 border-red-500 bg-ash-black text-red-500 text-xl md:text-4xl font-black p-4 w-full text-center animate-pulse",children:S.warn})})]})},pf=({lines:d})=>{const[x,p]=V.useState(!1);return i.jsx(Ue,{children:i.jsxs("div",{className:"my-10 border-l-4 border-fuchsia-600 bg-fuchsia-950/10 font-mono text-xs md:text-sm shadow-[0_0_15px_-3px_rgba(192,38,211,0.2)]",children:[i.jsxs("button",{onClick:()=>p(!x),className:"w-full text-left p-3 md:p-4 bg-fuchsia-950/20 hover:bg-fuchsia-900/30 text-fuchsia-300 font-bold flex items-center gap-3 transition-all group border-b border-fuchsia-500/20 focus:outline-none focus:bg-fuchsia-900/40",children:[i.jsx("div",{className:`transition-transform duration-300 ${x?"rotate-90":""}`,children:i.jsx(Cl,{size:16})}),i.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-1 md:gap-3",children:[i.jsx("span",{className:"animate-pulse tracking-widest text-fuchsia-400",children:">>> SYSTEM_INTERCEPT // 0000.2_VOID"}),i.jsx("span",{className:"text-[10px] bg-fuchsia-900/50 px-1 border border-fuchsia-500/30 text-fuchsia-200/70",children:"ENCRYPTION: UNSTABLE"})]}),i.jsx("span",{className:"ml-auto opacity-50 text-[10px] group-hover:opacity-100 transition-opacity",children:"[CLICK_TO_DECODE]"})]}),i.jsx("div",{className:`transition-all duration-500 ease-in-out overflow-hidden ${x?"max-h-[1000px] opacity-100":"max-h-0 opacity-0"}`,children:i.jsxs("div",{className:"p-4 md:p-6 text-fuchsia-100/90 space-y-2 leading-relaxed tracking-wide font-medium bg-black/20 backdrop-blur-sm",children:[d.map((c,b)=>{const _=c.replace(/0000\.2Void>>/,"").replace(/【插入结束】|【插入結束】|\[INSERTION_END\]/,"");return _.trim()?i.jsx("p",{className:"border-l border-fuchsia-500/20 pl-3 hover:border-fuchsia-500 hover:bg-fuchsia-500/5 transition-colors duration-300",children:_},b):i.jsx("br",{},b)}),i.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-fuchsia-500/30 text-[10px] text-fuchsia-500 text-right",children:"// LOG_END // CONNECTION_TERMINATED"})]})})]})})},Mr=d=>d.split(/(\[\[(?:MASK|GLITCH_GREEN)::.*?\]\])/g).map((p,c)=>{if(p.startsWith("[[MASK::")&&p.endsWith("]]")){const b=p.slice(8,-2);return i.jsx(Kr,{children:b},c)}else if(p.startsWith("[[GLITCH_GREEN::")&&p.endsWith("]]")){const b=p.slice(16,-2);return i.jsxs("span",{className:"text-emerald-400 font-black tracking-widest drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] inline-block animate-pulse relative px-1",children:[i.jsx("span",{className:"absolute inset-0 animate-ping opacity-30 blur-sm bg-emerald-500/20 rounded-full"}),i.jsx("span",{className:"relative z-10",children:b})]},c)}return p}),yx=({currentIndex:d,onChapterChange:x,language:p,isLightTheme:c,readerFont:b})=>{const[_,H]=V.useState("directory"),[S,y]=V.useState(!0),h=V.useRef(null),[D,T]=V.useState(!1),[M,U]=V.useState(0),R=At.chapters[d],G=R.translations[p]||R.translations["zh-CN"];V.useEffect(()=>{window.innerWidth<768&&y(!1)},[]),V.useEffect(()=>{h.current&&(h.current.scrollTop=0)},[d,_]);const te=Q=>{U(Q),T(!0)},se=()=>{T(!1),x(M),H("reader")},le=()=>{d<At.chapters.length-1&&x(d+1)},ae=()=>{d>0&&x(d-1)};V.useEffect(()=>{const Q=W=>{_==="reader"&&(W.target.tagName==="INPUT"||W.target.tagName==="TEXTAREA"||(W.key==="ArrowLeft"?ae():W.key==="ArrowRight"&&le()))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[_,d]);const ve=Q=>{const W=J=>J.length===0?"":J.reduce((de,fe,w)=>{if(w===0)return fe;const L=J[w-1],X=L[L.length-1],me=fe[0],xe=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,f=xe.test(X),A=xe.test(me);return f||A?de+fe:de+" "+fe},""),B=Q.split(`
`),O=[];let I=[],P=!1,ce=[];const oe=()=>{if(I.length>0){const J=W(I);let de=`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-ash-light transition-colors ${Me(b)}`;J.startsWith("零点")||J.startsWith("Point")||J.startsWith("零點")?de=c?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-zinc-600 font-bold ${Me(b)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.4)] ${Me(b)}`:J.startsWith("芷漓")||J.startsWith("Zeri")?de=c?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-pink-600 ${Me(b)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-pink-400 drop-shadow-[0_0_2px_rgba(244,114,182,0.4)] ${Me(b)}`:J.startsWith("泽洛")||J.startsWith("Zelo")||J.startsWith("澤洛")?de=c?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-600 ${Me(b)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-400 drop-shadow-[0_0_2px_rgba(96,165,250,0.4)] ${Me(b)}`:(J.startsWith("???")||J.startsWith("Void")||J.includes("void")||J.includes("Void"))&&(de=c?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-zinc-900 font-bold ${Me(b)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] ${Me(b)}`),O.push(i.jsx(Ue,{children:i.jsx("p",{className:de,children:Mr(J)})},`p-${O.length}`)),I=[]}};for(let J=0;J<B.length;J++){const de=B[J],fe=de.trim(),w=fe.includes("0000.2Void>>"),L=fe.includes("【插入结束】")||fe.includes("【插入結束】")||fe.includes("[INSERTION_END]");if(w){oe(),P=!0,ce=[],ce.push(de),L&&(P=!1,O.push(i.jsx(pf,{lines:[...ce]},`void-${J}`)),ce=[]);continue}if(P){ce.push(de),L&&(P=!1,O.push(i.jsx(pf,{lines:[...ce]},`void-${J}`)),ce=[]);continue}const X=fe.match(/^\[\[BLUE::(.*?)\]\]$/),me=fe.match(/^\[\[DANGER::(.*?)\]\]$/),xe=fe.match(/^\[\[VOID_VISION::(.*?)\]\]$/),f=fe==="[[DIVIDER]]",A=/\[\[IMAGE::(.*?)::(.*?)\]\]/.test(fe);if(X||me||xe||f||A||!fe){if(oe(),X){const q=c?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-600 font-bold ${Me(b)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-400 font-bold ${Me(b)}`;O.push(i.jsx(Ue,{children:i.jsx("p",{className:q,children:Mr(X[1])})},`blue-${J}`))}else if(me){const q=c?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-red-600 font-black animate-crash origin-left ${Me(b)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-red-500 font-black animate-crash origin-left ${Me(b)}`;O.push(i.jsx(Ue,{children:i.jsx("p",{className:q,children:Mr(me[1])})},`danger-${J}`))}else if(xe){const q=xe[1],ne=q.includes("█");O.push(i.jsx(Ue,{className:"my-8 w-full max-w-2xl mx-auto",children:i.jsxs("div",{className:"relative border-y border-fuchsia-900/50 bg-black/80 p-6 backdrop-blur-sm overflow-hidden group select-none shadow-[0_0_30px_-10px_rgba(192,38,211,0.3)]",children:[i.jsx("div",{className:"absolute inset-0 bg-fuchsia-900/10 opacity-0 group-hover:opacity-20 transition-opacity"}),i.jsx("div",{className:"absolute top-0 left-0 w-0.5 h-full bg-fuchsia-500/50 box-shadow-[0_0_10px_rgba(217,70,239,0.8)]"}),i.jsx("div",{className:"absolute top-0 right-0 w-0.5 h-full bg-fuchsia-500/50 box-shadow-[0_0_10px_rgba(217,70,239,0.8)]"}),i.jsxs("div",{className:"flex items-center justify-between mb-4 border-b border-fuchsia-900/30 pb-2",children:[i.jsxs("div",{className:"text-[10px] font-mono text-fuchsia-600 tracking-[0.2em] flex items-center gap-2",children:[i.jsx(zf,{size:12,className:"animate-pulse"})," RETINAL_PROJECTION"]}),i.jsx("div",{className:"text-[10px] font-black font-mono bg-fuchsia-100 text-fuchsia-950 px-2 py-0.5 tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse",children:"SOURCE: VOID"})]}),i.jsx("div",{className:"relative z-10",children:i.jsxs("div",{className:`
                                        text-center leading-relaxed tracking-wide
                                        ${ne?"text-fuchsia-500 font-mono text-sm md:text-base break-all animate-shake-violent opacity-70 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]":"text-white font-serif italic text-lg md:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"}
                                    `,children:['"',q,'"']})}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-white/30 shadow-[0_0_15px_rgba(255,255,255,1)] animate-scanline pointer-events-none mix-blend-overlay"})]})},`void-vis-${J}`))}else if(f)O.push(i.jsx(Ue,{children:i.jsxs("div",{className:"my-12 flex items-center justify-center gap-4 opacity-50 select-none",children:[i.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"}),i.jsxs("div",{className:"flex flex-col items-center gap-1",children:[i.jsx(Ta,{size:16,className:"text-ash-light animate-pulse"}),i.jsx("div",{className:"text-[10px] font-mono tracking-[0.3em] text-ash-light",children:"DATA_SEGMENT"})]}),i.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"})]})},`div-${J}`));else if(A){const q=fe.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(q){const[ne,he,je]=q;O.push(i.jsx(Ue,{className:"my-12 flex flex-col items-center w-full",children:i.jsxs("div",{className:"relative border-4 border-ash-light p-2 bg-ash-dark max-w-full shadow-hard group",children:[i.jsx("div",{className:"absolute -top-1.5 -left-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),i.jsx("div",{className:"absolute -top-1.5 -right-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),i.jsx("div",{className:"absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),i.jsx("div",{className:"absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),i.jsxs("div",{className:"relative overflow-hidden bg-ash-black",children:[i.jsx("img",{src:he,alt:je,className:"relative max-h-[600px] w-auto object-cover block grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"}),i.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"})]}),i.jsx("div",{className:"absolute bottom-4 right-4 z-20",children:i.jsxs("div",{className:"bg-ash-light text-ash-black px-3 py-1 text-[10px] font-mono font-bold border-2 border-ash-black shadow-hard-sm flex items-center gap-2 uppercase",children:[i.jsx(Xr,{size:12,strokeWidth:3}),je]})})]})},`img-${J}`))}}continue}I.push(fe)}return oe(),O};return _==="directory"?i.jsxs("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:[D&&i.jsx(Yf,{onComplete:se,language:p,mode:"fast"}),i.jsx("div",{className:"absolute top-0 bottom-0 left-1/2 w-px bg-ash-dark -translate-x-1/2 z-0 border-l border-dashed border-ash-gray/30"}),i.jsx("header",{className:"relative z-10 mb-12 text-center bg-ash-black p-6 border border-ash-gray shadow-hard max-w-lg w-full mt-8 md:mt-0",children:i.jsxs("div",{className:"flex flex-col items-center gap-2",children:[i.jsx(wf,{size:32,className:"text-ash-light"}),i.jsx("h1",{className:"text-2xl font-black text-ash-light uppercase tracking-tighter",children:p==="en"?"MAIN_ARCHIVE_DIR":"主线档案目录"}),i.jsx("p",{className:"text-[10px] font-mono text-ash-gray border-t border-dashed border-ash-gray/50 pt-2 w-full text-center",children:"/VAR/LIB/NOVA/MAIN_STORY"})]})}),i.jsx("div",{className:"w-full max-w-5xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20",children:At.chapters.map((Q,W)=>{var I;const B=Q.translations[p]||Q.translations["zh-CN"],O=Q.status==="locked";return i.jsx(Ue,{delay:W*50,className:"h-full",children:i.jsxs("button",{onClick:()=>!O&&te(W),disabled:O,className:`
                                    w-full h-full flex flex-col text-left border-2 transition-all duration-300 relative group overflow-hidden
                                    ${O?"bg-ash-black/50 border-ash-dark text-ash-gray cursor-not-allowed opacity-70":"bg-ash-black border-ash-gray text-ash-light hover:border-ash-light hover:shadow-hard hover:-translate-y-1"}
                                `,children:[i.jsxs("div",{className:`p-3 border-b border-dashed ${O?"border-ash-dark bg-ash-dark/30":"border-ash-gray/30 bg-ash-dark/50"} flex justify-between items-center`,children:[i.jsx("span",{className:"text-[10px] font-mono font-bold",children:((I=Q.id.split("-").pop())==null?void 0:I.toUpperCase())||`CH_${W}`}),O?i.jsx(Dn,{size:12}):i.jsx("div",{className:"w-2 h-2 bg-ash-light rounded-full"})]}),i.jsxs("div",{className:"p-4 flex-1 flex flex-col gap-2",children:[i.jsx("h3",{className:"text-lg font-black uppercase tracking-tight leading-tight line-clamp-2",children:B.title}),i.jsxs("div",{className:"mt-auto pt-4 space-y-2",children:[i.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono opacity-70",children:[i.jsx(ts,{size:10}),Q.date]}),B.summary&&i.jsx("p",{className:"text-xs font-mono text-ash-gray line-clamp-2 border-l-2 border-ash-gray/30 pl-2",children:B.summary})]})]}),!O&&i.jsx("div",{className:"absolute inset-0 bg-halftone opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"}),O&&i.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:i.jsx("div",{className:"bg-red-950/80 border border-red-800 text-red-500 px-3 py-1 text-xs font-mono font-bold uppercase rotate-12 backdrop-blur-sm",children:"Access Denied"})})]})},Q.id)})})]}):i.jsxs("div",{className:"flex h-full relative overflow-hidden bg-retro-paper text-zinc-950",children:[i.jsxs("aside",{className:`absolute md:relative z-20 h-full bg-ash-black border-r-4 border-ash-dark transition-all duration-300 ease-in-out flex flex-col ${S?"w-72 translate-x-0 shadow-2xl md:shadow-none":"w-0 -translate-x-full md:w-0 md:-translate-x-0 overflow-hidden"}`,children:[i.jsxs("div",{className:"p-4 border-b-2 border-ash-gray bg-ash-black text-ash-light flex justify-between items-center shrink-0",children:[i.jsxs("button",{onClick:()=>H("directory"),className:"flex items-center gap-2 text-xs font-mono font-bold hover:text-ash-gray transition-colors group focus:outline-none focus:bg-ash-dark focus:text-ash-white p-1",children:[i.jsx(qr,{size:14,className:"group-hover:-translate-x-1 transition-transform"}),p==="en"?"DIRECTORY":"返回目录"]}),i.jsx("button",{onClick:()=>y(!1),className:"md:hidden text-ash-gray hover:text-ash-light focus:outline-none focus:text-ash-light","aria-label":"Close Sidebar",children:i.jsx(es,{size:16})})]}),i.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:At.chapters.map((Q,W)=>{var I;const B=((I=Q.translations[p])==null?void 0:I.title)||Q.translations["zh-CN"].title,O=Q.status==="locked";return i.jsxs("button",{onClick:()=>{O||(x(W),window.innerWidth<768&&y(!1))},disabled:O,className:`w-full text-left p-4 text-xs font-mono border-b border-ash-dark transition-none group relative overflow-hidden focus:outline-none focus:bg-ash-dark ${W===d?"bg-ash-light text-ash-black":O?"bg-ash-dark/10 text-ash-gray cursor-not-allowed":"text-ash-gray hover:bg-ash-dark hover:text-ash-white"}`,children:[i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"flex justify-between items-start",children:[i.jsxs("div",{className:"font-bold truncate uppercase mb-1 max-w-[85%]",children:[W===d&&i.jsx("span",{className:"mr-2",children:">"}),B]}),O&&i.jsx("div",{className:"text-[10px] border border-current px-1 opacity-70",children:"LOCK"})]}),i.jsx("div",{className:"opacity-60",children:Q.date})]}),O&&i.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.2)_5px,rgba(0,0,0,0.2)_10px)] pointer-events-none z-0"})]},Q.id)})})]}),!S&&i.jsx("button",{onClick:()=>y(!0),className:"absolute top-4 left-4 z-10 p-2 bg-ash-black text-ash-light border-2 border-ash-light hover:bg-ash-light hover:text-ash-black shadow-hard focus:outline-none focus:ring-2 focus:ring-ash-light focus:bg-ash-light focus:text-ash-black transition-colors","aria-label":p==="en"?"Open Sidebar":"打开侧边栏",children:i.jsx(Df,{size:20})}),i.jsx("main",{ref:h,className:"flex-1 overflow-y-auto scroll-smooth relative bg-ash-black",children:i.jsx("div",{className:"max-w-4xl mx-auto min-h-full bg-ash-black border-l-0 md:border-l-2 md:border-r-2 border-ash-dark/50 shadow-2xl relative animate-slide-in",children:R.status==="locked"?i.jsx("div",{className:"h-[80vh] flex flex-col items-center justify-center text-ash-gray p-8 text-center",children:i.jsxs("div",{className:"mb-6 p-6 border-4 border-dashed border-red-900/50 rounded-none bg-red-950/10",children:[i.jsx(Ta,{size:64,className:"text-red-800 mb-4 mx-auto animate-pulse"}),i.jsx("h2",{className:"text-2xl font-black uppercase text-red-700 tracking-widest mb-2",children:"Access Denied"}),i.jsx("p",{className:"font-mono text-sm text-red-900/70",children:"ENCRYPTED_FILE // AUTH_LEVEL_MISSING"})]})}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"px-8 py-12 lg:px-16 md:mt-0 border-b-4 border-double border-ash-gray bg-ash-black text-ash-light mt-12",children:i.jsxs(Ue,{children:[i.jsxs("div",{className:"flex justify-between items-start mb-6 font-mono text-[10px] text-ash-gray uppercase tracking-widest",children:[i.jsxs("span",{children:["NOVA_ARCHIVE // ",R.id]}),i.jsxs("span",{children:["PG_INDEX: ",d+1]})]}),i.jsx("h1",{className:"text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight",children:G.title}),i.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-ash-gray bg-ash-dark inline-block px-3 py-1 border border-ash-gray",children:[i.jsx(ts,{size:12}),i.jsx("span",{children:R.date})]})]})}),i.jsx("article",{className:`px-8 py-12 lg:px-16 max-w-none text-ash-light font-serif leading-loose tracking-wide ${Me(b)}`,children:ve(G.content)}),i.jsx("div",{className:"p-8 md:p-16 border-t-4 border-double border-ash-gray bg-ash-dark",children:i.jsxs("div",{className:"flex justify-between items-center gap-4",children:[i.jsxs("button",{onClick:ae,disabled:d===0,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono focus:outline-none focus:bg-ash-light focus:text-ash-black",children:[i.jsx(es,{size:16})," PREV_FILE"]}),i.jsx("div",{className:"hidden md:block font-mono text-xs text-ash-gray",children:"- END OF RECORD -"}),i.jsxs("button",{onClick:le,disabled:d===At.chapters.length-1,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono focus:outline-none focus:bg-ash-light focus:text-ash-black",children:["NEXT_FILE ",i.jsx(as,{size:16})]})]})})]})},d)})]})},vx={id:"story-frag-rain-1",date:"档案记录: S-001",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (一) // 废墟",summary:"废弃的校区，久违的吉他话题，以及掩盖在日常下的暗流。",content:`[[BLUE::记忆提取中... 场景重构：废弃校区]]

秋日的风卷着枯叶，在空荡荡的操场上打着旋。这里是我们的母校，自从因为地段而疏弃后，这里就逐渐荒废了。

零点：“暮雨——！这边这边！”

远处，那个总是充满活力的身影正站在生锈的栅栏旁向我挥手。我不由得无奈地笑了笑，一边从口袋里掏出巧克力，一边快步走了过去。
最喜欢巧克力的零点，看见暮雨手里的巧克力就像看见了生命之源一般，抓着栅栏，从一米多高的平台上跳了下来。

暮雨：“嘿！慢点儿，那上面的铁锈要是掉下来，你又要抱怨洗头麻烦了。”

零点：“嘿嘿，小问题，好久不见啦，大记者！”

暮雨：“哎呀，都说是‘兼职’啦！‘昼星’（DiurnalStar）那边最近缺人手，我就去帮帮忙，顺便写点东西赚个外快嘛。”

零点：“听起来很忙嘛。‘昼星’可是个不错的媒体组织，虽然规模不大，但在这个到处都是经过审查的新闻的世界里，你们算是挺有‘想法’的了。”

暮雨：“比起我，你才是大忙人吧？听说你最近在那个叫 VIX 的社团兼职？感觉比我还难约呢。”

零点：“VIX 啊……（眼神游移了一瞬）就是一个普通的兴趣社团啦！大家一起研究点……嗯，前沿科技？好啦不说这个，话说回来，你果然还是背着这个吉他包啊。”

零点指了指我背后的黑色琴包。

暮雨：“那是当然！这可是我的护身符，带着它心里踏实。”

零点：“真可惜，以前在学校的时候，最喜欢听你在礼堂弹吉他了。今天要弹一曲吗？”

暮雨：“哈哈，好怀念以前溜进去的日子啊……不过今天就算啦，下次！下次我一定给你开个专场，最近手有点生，怕弹错了被你笑话。”

零点：“好吧，那下次一定要弹给我听哦！那时候你还没这么……‘深沉’？哈哈。”

暮雨：“这叫‘深谋远虑’好不好！在这个不稳定的世界里，不多想一点，万一哪天吃不起饭了怎么办？”

零点从平台上跳下来，拍了拍手上的灰尘，神色稍微认真了一些。

零点：“既然来了，顺路去我们的实验室看看吧？正好……关于你一直想知道的那些‘素材’，我也有些东西想给你看。”

暮雨：“……哦？终于要聊工作了吗？走着！”`},"zh-TW":{title:"那場仍未結束的零碎之雨 (1) // 廢墟",summary:"廢棄的校區，久違的吉他話題，以及掩蓋在日常下的暗流。",content:`[[BLUE::記憶提取中... 場景重構：廢棄校區]]

秋日的風捲著枯葉，在空蕩蕩的操場上打著旋。這裡是我們的母校，自從新學區建成後，這裡就逐漸荒廢了。

零點：「暮雨——！這邊這邊！」

遠處，那個總是充滿活力的身影正站在生鏽的單槓上向我揮手。我不由得無奈地笑了笑，一邊從口袋裡掏出巧克力，一邊快步走了過去。
最喜歡巧克力的零點，看見暮雨手裡的巧克力就像看見了生命之源一般，抓著柵欄，從一米多高的平台上跳了下來。

暮雨：「嘿！慢點兒，那上面的鐵鏽要是掉下來，妳又要抱怨洗头麻煩了。」

零點：「嘿嘿，身手敏捷可是我的強項！好久不見啦，大記者！」

暮雨：「哎呀，都說是『兼職』啦！『晝星』（DiurnalStar）那邊最近缺人手，我就去幫幫忙，順便寫點東西賺個外快嘛。」

零點：「聽起來很忙嘛。『晝星』可是個不錯的媒體組織，雖然規模不大，但在這個到處都是經過審查的新聞的世界裡，你們算是挺有『想法』的了。」

暮雨：「比起我，妳才是大忙人吧？聽說妳最近在那個叫 VIX 的社團兼職？感覺比我還難約呢。」

零點：「VIX 啊……（眼神游移了一瞬）就是一個普通的興趣社團啦！大家一起研究點……嗯，前沿科技？好啦不說這個，話說回來，妳果然還是背著這個吉他包啊。」

零點指了指我背後的黑色琴包。

暮雨：「那是當然！這可是我的護身符，帶著它心裡踏實。」

零點：「真可惜，以前在學校的時候，最喜歡聽妳在天台上彈琴了。今天要彈一曲嗎？」

暮雨：「哈哈，好懷念以前溜進去的日子啊……不過今天就算啦，下次！下次我一定給妳開個專場，最近手有點生，怕彈錯了被妳笑話。」

零點：「好吧，那下次一定要彈給我聽哦！那時候妳還沒這麼……『深沉』？哈哈。」

暮雨：「這叫『深謀遠慮』好不好！在這個不穩定的世界裡，不多想一點，萬一哪天吃不起飯了怎麼辦？」

零點從單槓上跳下來，拍了拍手上的灰塵，神色稍微認真了一些。

零點：「既然來了，順路去以前的實驗室看看吧？正好……關於妳一直想知道的那些『素材』，我也有些東西想給妳看。」

暮雨：「……哦？終於要聊工作了嗎？走著！」`},en:{title:"The Fragmented Rain That Never Ended (Part I) // Ruins",summary:"Abandoned campus, old guitar tunes, and the undercurrents beneath daily life.",content:`[[BLUE::Memory Extraction... Scene Reconstruction: Abandoned Campus]]

The autumn wind swirled dead leaves around the empty playground. This was our alma mater. Since it was abandoned due to its location, it has gradually fallen into ruin.

Point: "Dusk—! Over here, over here!"

In the distance, that ever-energetic figure was standing by the rusty fence, waving at me. I couldn't help but smile helplessly, pulling some chocolate from my pocket as I walked over quickly.
Point, who loved chocolate above all else, looked at the chocolate in Dusk's hand as if seeing the source of life itself. She grabbed the fence and jumped down from the meter-high platform.

Dusk: "Hey! Easy there! If that rust falls on you, you're going to complain about washing your hair again."

Point: "Hehe, no big deal! Long time no see, Mr. Journalist!"

Dusk: "Oh come on, I told you it's just a 'gig'! 'DiurnalStar' is short-handed recently, so I'm just helping out and writing some stuff to make some extra cash."

Point: "Sounds busy. 'DiurnalStar' is a pretty good media organization. Although small, you guys have quite a few 'ideas' in this world full of censored news."

Dusk: "Compared to me, you're the busy one, right? I heard you're working part-time at a club called VIX? Feels like you're harder to book than me."

Point: "VIX... (Eyes wandering for a second) It's just a normal hobby club! We research some... um, frontier technology together? Anyway, forget about that. By the way, you're still carrying that guitar bag everywhere, huh."

Point pointed at the black case on my back.

Dusk: "Of course! This is my lucky charm, I feel safer with it."

Point: "What a pity. Back in school, I loved listening to you play guitar in the auditorium the most. Want to play a song today?"

Dusk: "Haha, I miss those days sneaking in... But maybe next time! Next time I'll do a private concert just for you. My hands are a bit rusty, don't want you laughing at my mistakes."

Point: "Alright, you must play for me next time then! You weren't so... 'deep' back then? Haha."

Dusk: "Hey, that's called 'being thorough'! In this unstable world, if I don't think ahead, what if I can't afford dinner?"

Point jumped down from the platform, dusted off her hands, and looked a bit more serious.

Point: "Since you're here, let's stop by our lab? It just so happens... I have some things to show you regarding the 'material' you've always wanted to know."

Dusk: "...Oh? Finally talking shop? Let's go!"`}}},Nx={id:"story-frag-rain-2",date:"档案记录: S-002",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (二) // 揭露",summary:"厚重的气密门隔绝了通路，也锁住了那些关于“实验”的秘密。",content:`[[BLUE::记忆提取中... 场景重构：Nova Labs 内部实验室 - B区 (Sector B)]]

[[DIVIDER]]

伴随着液压泵沉重的嘶鸣声，厚重的防爆气密门缓缓向两侧滑开。

冷气扑面而来，夹杂着臭氧的味道。这里不是地下，而是位于世界外的 Nova Labs 核心科研区。裸露在混凝土墙外的通风管道、闪烁着绿光的旧式 CRT 监视器、以及远处大型主机发出的低频嗡鸣声……

这里的一切都充满了近现代(相对现实世界)工业科幻的冷硬质感。

零点：“欢迎来到‘异常材料实验室’——开玩笑的，这里是 B 区。”

零点熟练地在视网膜扫描仪前晃了一下，红光转绿。她今天穿着一身干练的科研工装，与平日的休闲打扮截然不同。

暮雨因为初来乍到，感到了些许不自在。他清瘦的身影在冷色调的灯光下显得有些单薄，随后掏出了怀表，静静的盯着看了几秒。

[[VOID_VISION::关于你父母的事情，我实在感到抱歉，我无能为力]]

忽然间，暮雨一个踉跄，不可置信般死死紧握怀表，过了足足半分钟，才放回原处。

路过的几个辅助员大多行色匆匆，手里抱着厚重的数据板。

零点：“哟，老张！远时的数据还没跑完吗？”

老张（推了推眼镜）：“零点！来上班嘞。这就是你带进来的‘外部顾问’？看起来……很年轻啊。”

暮雨：“（微笑着打招呼）你好！我只是来参观采访的，不会打扰你们工作。更不会外传，是零点授权过的。你们的研究真的很厉害！”

零点笑着打了个哈哈，拉着暮雨穿过复杂的空中走廊，来到了一个能够俯瞰整个反应堆冷却池的观察平台。这里相对安静，只有巨大的涡轮风扇在缓缓转动。

暮雨拿出了终端，并没有拍照，而是看着下方幽蓝色的冷却水出神。

暮雨：“哇……这比我想象的还要压抑。我的父母……以前就在这种地方工作吗？”

零点收起了刚才的玩笑神色，靠在栏杆上，侧过头看着暮雨。

零点：“是的。在更深层的 C 区。那时候 Nova Labs 还不像现在这样……‘温和’。”

空气仿佛凝固了，只剩下机械运转的单调噪音。

零点：“暮雨，你一直在追查‘破碎边界’的事情。你总是用那双藏在眼罩后的眼睛观察世界，直觉敏锐得让人害怕。”

暮雨：“因为那些‘裂痕’实在是太明显了嘛。虽然大家都以为只是普通的地震或气候异常，但在我眼里……”

他伸出手，隔着虚空仿佛在触摸那些看不见的扭曲。

零点：“关于这个世界的真相……”

[[BLUE::【时域折跃】]]

暮雨：“……”

虽然早有预感，但在这个充满钢铁与电流声的域外堡垒中听到这些，那种沉重感依然让人感到窒息。

零点：“还有……关于你父母的事故。那不是操作失误。”

暮雨的手指微微颤抖了一下，指节因为用力而泛白。他沉默了许久，眼罩后的眼神让人捉摸不透，但他周身散发出的气息变得更加孤寂。

良久，他才发出了一声极轻的叹息，声音在空旷的实验室里回荡。

暮雨：“……果然是这样啊。所以你们才装上了那个特殊的大门……”

零点看着暮雨的样子，眼中闪过一丝不忍。她突然伸出手，一把抓住了暮雨的手腕，力道大得不容拒绝。

零点：“别露出一副要碎掉的表情啊！虽然你是男生，但有时候真让人想保护你。”

暮雨：“（故作轻松）嘿，我哪有那么脆弱！我可是很抗造的。”

零点：“那就证明给我看！走，别看这些冷冰冰的机器了。带你去个没人的地方，我们需要透透气。”

暮雨：“去哪？这里可不是现实哎。”

零点：“去‘上面’。我知道一个‘门’，直通现实上我们nova表层未完工的观景台！怎么样？”

还没等暮雨拒绝，零点就拉着他在复杂的回廊间奔跑起来。

[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::PHOTO_ARCHIVE_M001]]`},"zh-TW":{title:"那場仍未結束的零碎之雨 (2) // 揭露",summary:"厚重的氣密門隔絕了通路，也鎖住了那些關於「實驗」的秘密。",content:`[[BLUE::記憶提取中... 場景重構：Nova Labs 內部實驗室 - B區 (Sector B)]]

[[DIVIDER]]

伴隨著液壓泵沉重的嘶鳴聲，厚重的防爆氣密門緩緩向兩側滑開。

冷氣撲面而來，夾雜著臭氧的味道。這裡不是地下，而是位於世界外的 Nova Labs 核心科研區。裸露在混凝土牆外的通風管道、閃爍著綠光的舊式 CRT 監視器、以及遠處大型主機發出的低頻嗡鳴聲……

這裡的一切都充滿了近現代(相對現實世界)工業科幻的冷硬質感。

零點：「歡迎來到『異常材料實驗室』——開玩笑的，這裡是 B 區。」

零點熟練地在視網膜掃描儀前晃了一下，紅光轉綠。她今天穿著一身干練的科研工裝，與平日的休閒打扮截然不同。

暮雨因為初來乍到，感到了些許不自在。他清瘦的身影在冷色調的燈光下顯得有些單薄，隨後掏出了懷表，靜靜的盯著看了幾秒。

[[VOID_VISION::關於你父母的事情，我實在感到抱歉，我無能為力]]

忽然間，暮雨一個踉蹌，不可置信般死死緊握懷表，過了足足半分鐘，才放回原處。

路過的幾個輔助員大多行色匆匆，手裡抱著厚重的數據板。

零點：「喲，老張！遠時的數據還沒跑完嗎？」

老張（推了推眼鏡）：「零點！來上班嘞。這就是妳帶進來的『外部顧問』？看起來……很年輕啊。」

暮雨：「（微笑著打招呼）你好！我只是來參觀採訪的，不會打擾你們工作。更不會外傳，是零點授權過的。你們的研究真的很厲害！」

零點笑著打了個哈哈，拉著暮雨穿過複雜的空中走廊，來到了一個能夠俯瞰整個反應堆冷卻池的觀察平台。這裡相對安靜，只有巨大的渦輪風扇在緩緩轉動。

暮雨拿出了終端，並沒有拍照，而是看著下方幽藍色的冷卻水出神。

暮雨：「哇……這比我想像的還要壓抑。我的父母……以前就在這種地方工作嗎？」

零點收起了剛才的玩笑神色，靠在欄杆上，側過頭看著暮雨。

零點：「是的。在更深層的 C 區。那時候 Nova Labs 還不像現在這樣……『溫和』。」

空氣彷彿凝固了，只剩下機械運轉的單調噪音。

零點：「暮雨，妳一直在追查『破碎邊界』的事情。妳總是用那雙藏在眼罩後的眼睛觀察世界，直覺敏銳得讓人害怕。」

暮雨：「因為那些『裂痕』實在是太明顯了嘛。雖然大家都以為只是普通的地震或氣候異常，但在我眼裡……」

他伸出手，隔著虛空彷彿在觸摸那些看不見的扭曲。

零點：「關於這個世界的真相……」

[[BLUE::【時域折躍】]]

暮雨：「……」

雖然早有預感，但在這個充滿鋼鐵與電流聲的域外堡壘中聽到這些，那種沉重感依然讓人感到窒息。

零點：「還有……關於妳父母的事故。那不是操作失誤。」

暮雨的手指微微顫抖了一下，指節因為用力而泛白。他沉默了許久，眼罩後的眼神讓人捉摸不透，但他周身散發出的氣息變得更加孤寂。

良久，他才發出了一聲極輕的嘆息，聲音在空曠的實驗室裡回盪。

暮雨：「……果然是這樣啊。所以你們才裝上了那個特殊的大門……」

零點看著暮雨的樣子，眼中閃過一絲不忍。她突然伸出手，一把抓住了暮雨的手腕，力道大得不容拒絕。

零點：「別露出一副要碎掉的表情啊！雖然妳是男生，但有時候真讓人想保護妳。」

暮雨：「（故作輕鬆）嘿，我哪有那麼脆弱！我可是很抗造的。」

零點：「那就證明給我看！走，別看這些冷冰冰的機器了。帶妳去個沒人的地方，我們需要透透氣。」

暮雨：「去哪？這裡可不是現實哎。」

零點：「去『上面』。我知道一個『門』，直通現實上我們nova表層未完工的觀景台！怎麼樣？」

還沒等暮雨拒絕，零點就拉著他在複雜的迴廊間奔跑起來。

[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::PHOTO_ARCHIVE_M001]]`},en:{title:"The Fragmented Rain That Never Ended (Part II) // Reveal",summary:"Heavy blast doors blocked the path, and also locked away the secrets of the 'Experiment'.",content:`[[BLUE::Memory Extraction... Scene Reconstruction: Nova Labs Internal Sector - Sector B]]

[[DIVIDER]]

Accompanied by the heavy hiss of hydraulic pumps, the massive blast doors slowly slid open.

A rush of cold air hit us, mixed with the smell of ozone. This wasn't underground, but the core research sector of Nova Labs located outside the world. Ventilation ducts exposed on concrete walls, old-fashioned CRT monitors flickering with green light, and the low-frequency hum of mainframes in the distance...

Everything here had the cold, hard texture of industrial sci-fi, modern relative to the real world.

Point: "Welcome to the 'Anomalous Materials Laboratory'—just kidding, this is Sector B."

Point skillfully scanned her eyes at the retinal scanner, and the red light turned green. She was wearing a sharp research utility suit today, starkly different from her usual casual attire.

Dusk felt a bit uneasy being a newcomer. His lean figure looked somewhat thin under the cold-toned lights. He took out his pocket watch, stared at it quietly for a few seconds.

[[VOID_VISION::Regarding your parents, I am truly sorry, I was powerless.]]

Suddenly, Dusk stumbled, clutching the pocket watch tightly in disbelief, and after a full half-minute, put it back.

A few auxiliary staff passed by hurriedly, holding heavy data pads.

Point: "Yo, Old Zhang! Is the Far Time data not done running yet?"

Old Zhang (pushes glasses): "Point! Coming to work? Is this the 'External Consultant' you brought in? He looks... very young."

Dusk: "(Smiling) Hello! I'm just here to visit and interview, I won't disturb your work. And I won't leak anything, I'm authorized by Point. You guys are amazing!"

Point laughed it off and pulled Dusk through the complex aerial walkways to an observation platform overlooking the reactor cooling pool. It was relatively quiet here, with only giant turbine fans rotating slowly.

Dusk took out his terminal. Instead of taking photos, he stared blankly at the eerie blue cooling water below.

Dusk: "Wow... it's even more oppressive than I imagined. Did my parents... really work in a place like this?"

Point put away her joking expression, leaned against the railing, and looked sideways at Dusk.

Point: "Yes. In the deeper Sector C. Back then, Nova Labs wasn't as... 'gentle' as it is now."

The air seemed to freeze, leaving only the monotonous noise of machinery.

Point: "Dusk, you've been investigating the 'Shattered Boundary'. You always observe the world with those eyes hidden behind the mask, your intuition sharp enough to be frightening."

Dusk: "Well, because those 'cracks' are really too obvious. Although everyone assumes they're just ordinary earthquakes or climate anomalies, but in my eyes..."

He reached out his hand, as if touching invisible distortions in the void.

Point: "About the truth of this world..."

[[BLUE::[TIME DOMAIN WARP]]]

Dusk: "..."

Although he had premonitions, hearing these words in this fortress outside the domain filled with steel and electric sounds made the heaviness suffocating.

Point: "And... about your parents' accident. That wasn't an operational error."

Dusk's fingers trembled slightly, his knuckles turning white from the force. He remained silent for a long time. The look behind the mask was inscrutable, but the aura around him became even more solitary.

After a long while, he let out an extremely light sigh, his voice echoing in the empty lab.

Dusk: "...So that's how it is. So that's why you installed that special door..."

Point looked at Dusk, a flash of unbearable pain in her eyes. She suddenly reached out and grabbed Dusk's wrist with a force that allowed no refusal.

Point: "Don't look like you're about to shatter! Even though you're a guy, sometimes I really want to protect you."

Dusk: "(Feigning toughness) Hey, I'm not that fragile! I'm pretty tough, you know."

Point: "Then prove it to me! Come on, stop looking at these cold machines. I'll take you somewhere with no people, we need some air."

Dusk: "Where? This isn't reality, you know."

Point: "To 'above'. I know a 'door' that leads straight to the unfinished observation deck on the Nova surface layer in reality! How about it?"

Before Dusk could refuse, Point dragged him running through the complex corridors.

[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::PHOTO_ARCHIVE_M001]]`}}},jx={id:"story-frag-rain-3",date:"档案记录: S-003",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (三) // 托付",summary:"黄昏的吉他声掩盖了真相，怀表的滴答声倒数着离别。",content:`[[BLUE::记忆提取中... 场景重构：未完工观景台]]

[[DIVIDER]]

风很大。

零点带我去的是一个未完工的观景台，得益于星研总部的宏大和骇人的楼高，从这里可以俯瞰整个特殊节区，以及远处灯火通明的新节区。

我们靠在栏杆上，风吹乱了她的头发，也吹散了之前实验室里的压抑气氛。

暮雨：“……以前我经常一个人溜到这种地方来！”

零点：“我知道。因为你总是一副‘众人皆醉我独醒’的样子嘛。”

暮雨笑了笑，从口袋里摸出一盒有些皱巴巴的软壳万宝路。

零点：“哎？你什么时候开始抽烟了？”

暮雨：“最近才开始的。压力大的时候来一根，稍微能冷静点。……来一根？”

零点摇摇头，暮雨一笑：“就算你真要，我也不会给你哒..”

我点燃了一根，烟草的味道混杂着秋日的凉风钻入肺部，随着尼古丁的侵袭，带来一阵轻微的眩晕感。

暮雨：“零点，还记得那天……我收到的‘启示’吗？”

零点：“你是说……关于‘零空前辈’的那个？”

暮雨：“嗯。其实在那之后，我并没有停止调查。虽然表面上我在做媒体工作，但实际上……我一直在研究我父母留下的手记。”

我吐出一口浑浊的烟，在风中迅速消散。

暮雨：“他们不是死于意外。他们是……最早接触到‘空界’的人。手记里记录了关于这个世界不稳定性的真相，以及……某种种必然的终结。”

零点：“必然的……终结？”

暮雨：“没错。这个世界就像一个不断崩塌的沙堡，无论我们怎么修补，最后都会回归虚无。除非……”

我停顿了一下，没有继续说下去。我从怀里掏出了一块古铜色的怀表。那是一块很旧的机械表，表盖上刻着复杂的纹路。

[[IMAGE::https://free.picui.cn/free/2025/12/12/693b069e37e26.png::POCKET_WATCH]]

暮雨：“给！这个送你了。”

零点：“诶？这东西对你来说挺宝贵的吧...怎么就突然给我了？”

暮雨：“正因为珍贵，所以才要交给你保管啊！零点，你是‘变数’。如果说这个世界还有什么希望的话，那一定在你身上。”

零点接过怀表，有些不知所措地握在手里。怀表带着我的体温。向这个世界散发微弱的热辐射。

零点：“暮雨……你是不是有什么事情瞒着我？这种像是交代后事一样的语气……”

暮雨：“哎呀，别多想！只是觉得……放在你那里比较安全。毕竟我这么大大咧咧的，说不定哪天就把自己弄丢了，到时候还得靠你把这表找回来呢。”

我掐灭了烟头，将它扔到一旁的建材回收通道里。

暮雨：“好啦，不说这些沉重的话题了。既然是在这种地方……想听歌吗？”

零点：“哎？你要现在弹吗？”

暮雨：“嗯哼！反正琴就在身上，不弹白不弹。”

我将一直背着的黑色琴包拉链拉开，取出了那把跟随我多年的木吉他。虽然有些旧了，但音色风韵犹存。我试了试音，稍微转动了一下旋钮。

夕阳光开始下沉，将天空染成了一片血红。旁侧的建筑在余晖中拉出长长的影子。

我拨动了琴弦。

是一首很老的曲子，旋律简单。在学校的礼堂里，我曾经弹过无数次。

零点静静地听著，怀表的茶色琉璃盖在她手中折射出落日的斜阳。

音乐声在风中飘荡，仿佛在诉说着那些无法言说的告别。

一曲终了，零点轻轻鼓起了掌。

零点：“好听！不愧是你。”

我把吉他轻轻放在一旁，从口袋里摸出了终端。屏幕的反光映照著黄昏的火烧雲。

暮雨：“零点，过来。”

零点：“哎？干嘛？”

我举起终端，切换到了前置摄像头。

暮雨：“难得来一次，合个影吧。”

零点显然愣住了，眼睛瞪得大大的，像是不敢相信自己的耳朵。

零点：“哇！太阳打西边出来了？平时那个看到镜头就躲的大记者居然主动要拍照？”

暮雨：“少啰嗦。拍不拍？不拍我收起来了。”

零点：“拍拍拍！当然拍！”

她立刻凑了过来，为了配合我的高度还特意垫了垫脚，脸上绽放出比夕阳还要灿烂的笑容，比了一个大大的剪刀手。

暮雨：“别乱动，要对不了焦了。”

零点：“是你手在抖吧？来，笑一个嘛暮雨！茄子——”

看着屏幕里那个没心没肺的笑脸，我也忍不住勾起了嘴角。

【咔嚓】

夕阳的余晖洒在我们身上，将这一刻定格。照片里的我们，背景是废墟与新城的交界，仿佛站在两个时代的边缘。

天色渐晚，黄昏的余晖即将燃尽。

[[BLUE::【数据记录中断……】]]`},"zh-TW":{title:"那場仍未結束的零碎之雨 (三) // 託付",summary:"黃昏的吉他聲掩蓋了真相，懷表的滴答聲倒數著離別。",content:`[[BLUE::記憶提取中... 場景重構：未完工觀景台]]

[[DIVIDER]]

風很大。

零點帶我去的是一個未完工的觀景台，從這裡可以俯瞰整個特殊節區，以及遠處燈火通明的新節區。

我們靠在欄杆上，風吹亂了她的頭髮，也吹散了之前實驗室裡的壓抑氣氛。

暮雨：「……以前我經常一個人溜到這種地方來！」

零點：「我知道。因為你總是一副『眾人皆醉我獨醒』的樣子嘛。」

暮雨笑了笑，從口袋裡摸出一盒有些皺巴巴的軟殼萬寶路。

零點：「哎？你什麼時候開始抽菸了？」

暮雨：「最近才開始的。壓力大的時候來一根，稍微能冷靜點。……來一根？」

零點搖搖頭，暮雨一笑：「就算妳真要，我也不會給妳噠..」

我點燃了一根，菸草的味道混雜著秋日的涼風鑽入肺部，隨著尼古丁的侵襲，帶來一陣輕微的眩暈感。

暮雨：「零點，還記得那天……我收到的『啟示』嗎？」

零點：「你是說……關於『零空前輩』的那個？」

暮雨：「嗯。其實在那之後，我並沒有停止調查。雖然表面上我在做媒體工作，但實際上……我一直在研究我父母留下的手記。」

我吐出一口菸圈，煙霧在風中迅速消散。

暮雨：「他們不是死於意外。他們是……最早接觸到『空界』的人。手記裡記錄了關於這個世界不穩定性的真相，以及……某種必然的終結。」

零點：「必然的……終結？」

暮雨：「沒錯。這個世界就像一個不斷崩塌的沙堡，無論我們怎麼修補，最後都會回歸虛無。除非……」

我停頓了一下，沒有繼續說下去。我從懷裡掏出了一塊古銅色的懷表。那是一塊很舊的機械錶，錶蓋上刻著複雜的紋路。

[[IMAGE::https://free.picui.cn/free/2025/12/12/693b069e37e26.png::POCKET_WATCH]]

暮雨：「給！這個送妳了。」

零點：「欸？這東西對你來說挺寶貴的吧...怎麼就突然給我了？」

暮雨：「正因為珍貴，所以才要交給妳保管啊！零點，妳是『變數』。如果說這個世界還有什麼希望的話，那一定在妳身上。」

零點接過懷表，有些不知所措地握在手裡。懷表還帶著我的體溫，向這個世界散發微弱的熱輻射。

零點：「暮雨……你是不是有什麼事情瞞著我？這種像是交代後事一樣的語氣……」

暮雨：「哎呀，別多想！只是覺得……放在妳那裡比較安全。畢竟我這麼大大咧咧的，說不定哪天就把自己弄丟了，到時候還得靠妳把這錶找回來呢。」

我掐滅了菸頭，將它扔到一旁的建材回收通道裡。

暮雨：「好啦，不說這些沉重的話題了。既然是在這種地方……想聽歌嗎？」

零點：「哎？你要現在彈嗎？」

暮雨：「嗯哼！反正琴就在身上，不彈白不彈。」

我將一直背著的黑色琴包拉鍊拉開，取出了那把跟隨我多年的木吉他。雖然有些舊了，但音色風韻猶存。我試了試音，稍微調節了一下旋钮。

夕陽開始下沉，將天空染成了一片血紅。旁側的建築在餘暉中拉出長長的影子。

我撥動了琴弦。

是一首很老的曲子，旋律簡單。在學校的禮堂裡，我曾經彈過無數次。

零點靜靜地聽著，懷表的茶色琉璃蓋在她手中折射出落日的斜陽。

音樂聲在風中飄盪，彷彿在訴說著那些無法言說的告別。

一曲終瞭，零點輕輕鼓起了掌。

零點：「好聽！不愧是你。」

我把吉他輕輕放在一旁，從口袋裡摸出了終端。屏幕的反光映照著黃昏的火燒雲。

暮雨：「零點，過來。」

零點：「哎？幹嘛？」

我舉起終端，切換到了前置攝像頭。

暮雨：「難得來一次，合個影吧。」

零點顯然愣住了，眼睛瞪得大大的，像是不敢相信自己的耳朵。

零點：「哇！太陽打西邊出來了？平時那個看到鏡頭就躲的大記者居然主動要拍照？」

暮雨：「少囉嗦。拍不拍？不拍我收起來了。」

零點：「拍拍拍！當然拍！」

她立刻湊了過來，為了配合我的高度還特意墊了墊腳，臉上綻放出比夕陽還要燦爛的笑容，比了一個大大的剪刀手。

暮雨：「別亂動，要對不了焦了。」

零點：「是你手在抖吧？來，笑一個嘛暮雨！茄子——」

看著屏幕裡那個沒心沒肺的笑臉，我也忍不住勾起了嘴角。

【咔嚓】

夕陽的餘暉灑在我們身上，將這一刻定格。照片裡的我們，背景是廢墟與新城的交界，彷彿站在兩個時代的邊緣。

天色漸晚，黃昏的餘暉即將燃盡。

[[BLUE::【數據記錄中斷……】]]`},en:{title:"The Fragmented Rain That Never Ended (Part III) // Entrust",summary:"Guitar notes at dusk masked the truth, while the ticking pocket watch counted down the parting.",content:`[[BLUE::Memory Extraction... Scene Reconstruction: Unfinished Observation Deck]]

[[DIVIDER]]

The wind was strong.

Point took me to an unfinished observation deck, overlooking the ruins of the old school district and the brightly lit new city in the distance.

We leaned against the railing. The wind messed up her hair and blew away the oppressive atmosphere from the lab.

Dusk: "...I used to love sneaking up to places like this alone!"

Point: "I know. Because you always act like 'everyone is drunk and I alone am sober'."

Dusk smiled and took out a crumpled pack of soft-pack Marlboros from his pocket.

Point: "Eh? When did you start smoking?"

Dusk: "Just started recently. Helps me calm down when the pressure gets high. ...Want one?"

Point shook her head. Dusk smiled: "Even if you really wanted one, I wouldn't give it to you.."

I lit one, the taste of tobacco mixing with the cold autumn wind into my lungs. With the invasion of nicotine, it brought a slight dizziness.

Dusk: "Point, do you remember that day... the 'Revelation' I received?"

Point: "You mean... the one about 'Senior Void'?"

Dusk: "Yeah. Actually, after that, I didn't stop investigating. Although on the surface I'm doing media work, in reality... I've been studying the notes left by my parents."

I exhaled a smoke ring, watching it dissipate rapidly in the wind.

Dusk: "They didn't die in an accident. They were... the first people to contact the 'Void'. The notes recorded the truth about the instability of this world, and... a certain inevitable end."

Point: "Inevitable... end?"

Dusk: "Yep. This world is like a collapsing sandcastle. No matter how we patch it, it will eventually return to nothingness. Unless..."

I paused and didn't continue. I took out an antique bronze pocket watch from my chest. It was a very old mechanical watch with complex patterns engraved on the cover.

[[IMAGE::https://free.picui.cn/free/2025/12/12/693b069e37e26.png::POCKET_WATCH]]

Dusk: "Here! This is for you."

Point: "Eh? This is pretty precious to you, right... why give it to me all of a sudden?"

Dusk: "Exactly because it's precious, I need you to keep it safe! Point, you are the 'Variable'. If there is any hope for this world, it must be in you."

Point took the pocket watch, holding it somewhat at a loss. The watch carried my body warmth, radiating faint heat into this world.

Point: "Dusk... are you hiding something from me? This tone... sounds like you're arranging your affairs..."

Dusk: "Oh, come on, don't overthink it! I just feel... it's safer with you. After all, I'm pretty clumsy, might lose myself someday, and I'll need you to bring this watch back to me."

I extinguished the cigarette butt and threw it into the construction material recycling chute nearby.

Dusk: "Alright, enough heavy stuff! Since we're here... wanna hear a song?"

Point: "Eh? Are you going to play now?"

Dusk: "Uh-huh! The guitar is right here, might as well use it."

I unzipped the black guitar bag I had been carrying and took out the acoustic guitar that had been with me for years. Although it was a bit old, the tone still had its charm. I tested the sound and I turned the knob slightly..

The sun began to sink, dyeing the sky a blood red. The buildings nearby cast long shadows in the afterglow.

I strummed the strings.

It was a very old tune, simple and sad. In the school auditorium, I had played it countless times.

Point listened quietly, the tea-colored glass cover of the pocket watch in her hand refracting the setting sun.

The music floated in the wind, seemingly telling of those unspeakable farewells.

When the song ended, Point clapped gently.

Point: "That was great! As expected of you."

I gently set the guitar aside and fished my terminal out of my pocket. The screen reflected the fiery clouds of twilight.

Dusk: "Point, come here."

Point: "Eh? What for?"

I raised the terminal and switched to the front camera.

Dusk: "Since we are here, let's take a photo together."

Point was obviously stunned, her eyes wide as if she couldn't believe her ears.

Point: "Woah! Did the sun rise from the west? The big reporter who usually hides from cameras is actually asking to take a photo?"

Dusk: "Cut the chatter. Yes or no? If not, I'm putting it away."

Point: "Yes yes yes! Of course!"

She immediately leaned in, standing on her tiptoes to match my height, a smile brighter than the sunset blooming on her face as she flashed a big peace sign.

Dusk: "Don't move, it's going to blur."

Point: "It's your hand shaking, isn't it? Come on, smile, Dusk! Cheese—"

Looking at that carefree smile on the screen, I couldn't help but curl my lips into a smile too.

[Click]

The afterglow of the setting sun fell upon us, freezing this moment in time. In the photo, we stood at the boundary between the ruins and the new city, as if standing on the edge of two eras.

It was getting late, and the twilight was about to burn out.

[[BLUE::[DATA RECORD INTERRUPTED...]]] `}}},Sx={id:"story-frag-rain-4",date:"档案记录: S-004",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (四) // 真相",summary:"既然结局无法更改，那么知晓真相便是我最后的执念。",content:`[[BLUE::记忆提取中... 场景重构：深夜的星联办公室]]

[[DIVIDER]]

从观景台回来时，特殊的时域节区已经进入了低功耗的“夜间模式”。

刚推开办公室的门，就撞见正准备下班的泽洛和芷漓。

泽洛：“哇！稀客稀客！暮雨先生和零点终于‘私奔’回来了？”

泽洛趴在椅背上，一脸八卦地看着我们。旁边的芷漓正在整理最后的数据板，听到动静也抬起了头，目光在我们身上打转。

芷漓：“（无奈地叹了口气）看来某人彻底断电了啊。”

她指的是跟在我身后，像游魂一样飘进来，然后直接一头栽进沙发里的零点。

暮雨：“只是去上面吹了吹风。她今天大概是耗尽精力了。”

泽洛：“嘻嘻，那我们就不当电灯泡啦！芷漓姐，我们走吧？”

芷漓叹了口气，拿起包走到门口，停顿了一下，意味深长地看了我一眼。

芷漓：“虽然不知道你们聊了什么……但我在你身上看见了一些东西，你需要冷静。暮雨。别太勉强。”

暮雨：“放心吧。路上小心。”

随着自动门“滴”的一声合上，喧嚣彻底隔绝在门外。

并没有什么惊天动地的告别仪式。一切都安静得像是一场默剧。

只有显示屏微弱的蓝光照亮着房间，勾勒出她熟睡的轮廓。

暮雨坐在椅子上，手里把玩着那把锋利的定制刺刀，指腹轻轻划过冰冷的刀刃。不知何时，零点的头上已经有了一个淡淡的黑色光环，光环散发着极微弱的惨白的光芒。

他停下动作，看向沙发方向，语气平静。

暮雨：“既然醒了，就起来聊聊吧。Void。”

沙发上的“零点”并没有立刻起身。她先是像往常一样翻了个身，揉了揉眼睛，然后才慢慢坐直身体。

她整理了一下有些凌乱的衣角，然后站起身，动作轻柔地走到暮雨对面坐下。那双眼睛虽然是零点的，但眼神中没有平日的躁动，只有一种平静的温和。

零点 (Void)：“晚上好，暮雨先生。这么晚了还不休息，是有什么心事吗？”

她的声音很轻，带着一种非常有教养的礼貌感，仿佛一位深夜造访的谦逊客人。

暮雨：“抱歉打扰你休息了。但我……有些事情必须现在确认。”

零点 (Void)：“没关系，我并不介意。您看起来很焦虑，是因为那块怀表吗？”

暮雨：“是的。我父母的死，还有这个世界的现状……我想听真话。不是官方的通报，也不是为了安慰我的谎言。”

Void 轻轻叹了口气，脸上露出一丝遗憾和敬佩交织的神情。

零点 (Void)：“其实，我一直不太希望您深究这件事，因为那太沉重了……不过，既然您这么坚持。”

她双手交叠放在膝盖上，语气诚恳而庄重。

零点 (Void)：“关于令尊和令堂……他们是非常伟大的先行者。为了维持这个‘相对泛义世界’的微妙平衡，他们不得不高强度地运作‘时空泡’。”

暮雨：“平衡……？”

零点 (Void)：“是的。世界的架构并不稳定，需要巨大的能量来锚定。您的父母承担了这份责任，但那个能量量级实在太庞大了。常年的辐射与负荷，让他们的身体患上了严重的‘时空适应性慢性病’。”

暮雨的手指微微颤抖了一下，握紧了刺刀的手骨节发白。

暮雨：“……慢性病。原来是因为能量反噬。他们是为了维持这个世界才……”

零点 (Void)：“我很遗憾。那是一种在基因层面不可逆的崩坏，哪怕是我们也无法治愈。当身体到达极限的那一刻，便是您所知道的‘事故’。”

暮雨深吸了一口气，眼眶微红，但眼神却变得前所未有的清明。

暮雨：“原来不是阴谋，也不是意外。是代价……是作为守望者的代价啊。”

“零点”抬起手，掌心向上，动作优雅而克制。

零点 (Void)：“虽然他们付出了生命，但这个世界的终局依然无法避免。您想看看那个时刻吗？以及……如果不加以阻止，这个世界将会迎来的结局。”

暮雨：“给我看吧。既然我已经知道了因，我也该看看果。我想知道……他们最后一刻到底经历了什么。”

Void 沉默了片刻，那双眼睛里流露出一丝悲悯。

零点 (Void)：“如您所愿。”

暮雨深吸一口气，重新握紧了手中的刺刀。

暮雨：“作为交换，我会用生命来保守这个秘密的。”

他看了一眼熟睡的“零点”，眼中闪过一丝决绝。

暮雨：“替我跟她们说声……算了，什么也别说。就当我又去哪里出差了吧。别让她们太难过。”

他突然伸手摸向口袋，指尖触碰到了那个在观景台时还没抽完的、皱巴巴的烟盒。他掏出一根，动作熟练地点燃。

淡蓝色的烟雾在昏暗的房间里升腾，模糊了 Void 那张平静的脸，也模糊了那些即将到来的恐惧。尼古丁带来的短暂眩晕感让他紧绷的神经终于得到了一丝迟来的放松。

暮雨：“呼……最后一根了。还是熟悉的雪茄味。”

他并没有抽完，只是深深吸了一口，感受着那股灼热的气流在肺叶里回荡，然后将烟蒂重重地按灭在扶手上，像是掐灭了自己最后一丝犹豫。

他深吸一口气，空气中弥漫着熟悉的、干燥的臭氧味，混杂着尚未散去的烟草气息。他闭上眼睛，调整了刀尖的角度，对准了心脏的间隙。

没有颤抖。

手腕发力。

噗嗤。

冰冷的金属刺破了皮肤，撕裂了温热的血肉。

那一瞬间，随着剧痛和寒意一同涌入脑海的，是海量的信息流。

[[VOID_VISION::【神经连接强行建立……时空回溯开启……】]]

[[VOID_VISION::██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████]]

[[VOID_VISION::████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████]]

剧烈的冲击让暮雨的身体在椅子上痉挛了一下，但他的嘴角却缓缓勾起了一个凄惨的弧度。

咚。

咚。

心脏的搏动越来越慢，那些恐怖的画面却越来越清晰。

暮雨（濒死思考）：“啊……原来是这样。爸爸，妈妈……原来这就是你们当时承担的痛苦吗...”

视线开始模糊，红色的血雾与蓝色的房间交织在一起。

暮雨（濒死思考）：“太好了……至少，我看见了，大家……要好好活下去啊。”

暮雨倒在椅子上，彻底停止了呼吸。那抹笑容凝固在脸上，带着一丝解脱，也带着一丝对亲人的思念。

“零点”静静地坐在对面，看着那个不再跳动的身影。她没有立刻离开，而是微微欠身，行了一个标准的告别礼。

[[GLITCH_GREEN::白栖]] (Void)：“晚安，暮雨先生。愿您在没有我[[MASK::（白栖丶泽洛希）]]的世界，能做一个好梦。”

【Xbot：受指派的生物质回收】

将剩余的污渍清理完，她将暮雨的终端总机放在桌子上，闭上眼睛，身体软软地倒回了沙发上，光环渐渐消失，仿佛只是做了一场短暂的梦。

房间里恢复了死寂，只有那块怀表，还在滴答作响，像是在为这场漫长的雨季，画上最后的句点。

[[DANGER::【检测到生命体征消失……】]]
[[DANGER::【暮雨 ID 下线】]]
[[BLUE::【真相已归档。】]]`},"zh-TW":{title:"那場仍未結束的零碎之雨 (四) // 真相",summary:"既然結局無法更改，那麼知曉真相便是我最後的執念。",content:`[[BLUE::記憶提取中... 場景重構：深夜辦公室]]

[[DIVIDER]]

從觀景台回來時，特殊的時域節區已經進入了低功耗的「夜間模式」。

剛推開辦公室的門，就撞見正準備下班的澤洛和芷漓。

澤洛：「哇！稀客稀客！暮雨先生和零點終於『私奔』回來了？」

澤洛趴在椅背上，一臉八卦地看著我們。旁邊的芷漓正在整理最後的數據板，聽到動靜也抬起了頭，目光在我們身上打轉。

芷漓：「（無奈地嘆了口氣）看來某人徹底斷電了啊。」

她指的是跟在我身後，像遊魂一樣飄進來，然後直接一頭栽進沙發裡的零點。懷裡還死死抱著那個裝有懷錶的盒子。

暮雨：「只是去上面吹了吹風。她今天大概是耗盡精力了。」

澤洛：「嘻嘻，那我們就不當電燈泡啦！芷漓姐，我們走吧？」

芷漓嘆了口氣，拿起包走到門口，停頓了一下，意味深長地看了我一眼。

芷漓：「雖然不知道你們聊了什麼……但我在妳身上看見了一些東西，妳需要冷靜。暮雨。別太勉強。」

暮雨：「放心吧。路上小心。」

隨著自動門「滴」的一聲合上，喧囂徹底隔絕在門外。

並沒有什麼驚天動地的告別儀式。一切都安靜得像是一場默劇。

只有顯示屏微弱的藍光照亮著房間，勾勒出她熟睡的輪廓。

暮雨坐在椅子上，手裡把玩著那把鋒利的定製刺刀，指腹輕輕劃過冰冷的刀刃。不知何時，零點的頭上已經有了一個淡淡的黑色光環，光環散發著極微弱的慘白的光芒。

他停下動作，看向沙發方向，語氣平靜。

暮雨：「既然醒了，就起來聊聊吧。Void。」

沙發上的「零點」並沒有立刻起身。她先是像往常一樣翻了個身，揉了揉眼睛，然後才慢慢坐直身體。

她整理了一下有些凌亂的衣角，然後站起身，動作輕柔地走到暮雨對面坐下。那雙眼睛雖然是零點的，但眼神中沒有平日的躁動，只有一種平靜的溫和。

零點 (Void)：「晚上好，暮雨先生。這麼晚了還不休息，是有什麼心事嗎？」

她的聲音很輕，帶著一種非常有教養的禮貌感，彷彿一位深夜造訪的謙遜客人。

暮雨：「抱歉打擾你休息了。但我……有些事情必須現在確認。」

零點 (Void)：「沒關係，我並不介意。您看起來很焦慮，是因為那塊懷表嗎？」

暮雨：「是的。我父母的死，還有這個世界的現狀……我想聽真話。不是官方的通報，也不是為了安慰我的謊言。」

Void 輕輕嘆了口氣，臉上露出一絲遺憾和敬佩交織的神情。

零點 (Void)：「其實，我一直不太希望您深究這件事，因為那太沉重了……不過，既然您這麼堅持。」

她雙手交疊放在膝蓋上，語氣誠懇而莊重。

零點 (Void)：「關於令尊和令堂……他們是非常偉大的先行者。為了維持這個『相對泛義世界』的微妙平衡，他們不得不高強度地運作『時空泡』。」

暮雨：「平衡……？」

零點 (Void)：「是的。世界的架構並不穩定，需要巨大的能量來錨定。您的父母承擔了這份責任，但那個能量量級實在太龐大了。常年的輻射與負荷，讓他們的身體患上了嚴重的『時空適應性慢性病』。」

暮雨的手指微微顫抖了一下，握緊了刺刀的手骨節發白。

暮雨：「……慢性病。原來是因為能量反噬。他們是為了維持這個世界才……」

零點 (Void)：「我很遺憾。那是一種在基因層面不可逆的崩壞，哪怕是我們也無法治癒。當身體到達極限的那一刻，便是您所知道的『事故』。」

暮雨深吸了一口氣，眼眶微紅，但眼神卻變得前所未有的清明。

暮雨：「原來不是陰謀，也不是意外。是代價……是作為守望者的代價啊。」

「零點」抬起手，掌心向上，動作優雅而克制。

零點 (Void)：「雖然他們付出了生命，但這個世界的終局依然無法避免。您想看看那個時刻嗎？以及……如果不加以阻止，這個世界將會迎來的結局。」

暮雨：「給我看吧。既然我已經知道了因，我也該看看果。我想知道……他們最後一刻到底經歷了什麼。」

Void 沉默了片刻，那雙眼睛裡流露出一絲悲憫。

零點 (Void)：「如您所願。」

暮雨深吸一口氣，重新握緊了手中的刺刀。

暮雨：「作為交換，我會用生命來保守這個秘密的。」

他看了一眼熟睡的「零點」，眼中閃過一絲決絕。

暮雨：「替我跟她們說聲……算了，什麼也別說。就當我又去哪裡出差了吧。別讓她們太難過。」

他突然伸手摸向口袋，指尖觸碰到了那個在觀景台時還沒抽完的、皺巴巴的菸盒。他掏出一根，動作熟練地點燃。

淡藍色的煙霧在昏暗的房間裡升騰，模糊了 Void 那張平靜的臉，也模糊了那些即將到來的恐懼。尼古丁帶來的短暫眩暈感讓他緊繃的神經終於得到了一絲遲來的放鬆。

暮雨：「呼……最後一根了。還是熟悉的雪茄味。」

他並沒有抽完，只是深深吸了一口，感受著那股灼熱的氣流在肺葉裡迴盪，然後將菸蒂重重地按滅在扶手上，像是掐滅了自己最後一絲猶豫。

他深吸一口氣，空氣中瀰漫著熟悉的、乾燥的臭氧味，混雜著尚未散去的菸草氣息。他閉上眼睛，調整了刀尖的角度，對準了心臟的間隙。

沒有顫抖。

手腕發力。

噗嗤。

冰冷的金屬刺破了皮膚，撕裂了溫熱的血肉。

那一瞬間，隨著劇痛和寒意一同涌入腦海的，是海量的信息流。

[[VOID_VISION::【神經連接強行建立……時空回溯開啟……】]]

[[VOID_VISION::██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████]]

[[VOID_VISION::████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████]]

劇烈的衝擊讓暮雨的身體在椅子上痙攣了一下，但他的嘴角卻緩緩勾起了一個凄慘的弧度。

咚。

咚。

心臟的搏動越來越慢，那些恐怖的畫面卻越來越清晰。

暮雨（瀕死思考）：「啊……原來是這樣。爸爸，媽媽……原來這就是你們當時承擔的痛苦嗎...」

視線開始模糊，紅色的血霧與藍色的房間交織在一起。

暮雨（瀕死思考）：「太好了……至少，我看見了，大家……要好好活下去啊。」

暮雨倒在椅子上，徹底停止了呼吸。那抹笑容凝固在臉上，帶著一絲解脫，也帶著一絲對親人的思念。

「零點」靜靜地坐在對面，看著那個不再跳動的身影。她沒有立刻離開，而是微微欠身，行了一個標準的告別禮。

[[GLITCH_GREEN::白棲]] (Void)：「晚安，暮雨先生。願您在沒有我[[MASK::（白棲丶澤洛希）]]的世界，能做個好夢。」

【Xbot：受指派的生物質回收】

將剩餘的污漬清理完，她將暮雨的終端總機放在桌子上，閉上眼睛，身體軟軟地倒回了沙發上，光環漸漸消失，彷彿只是做了一場短暫的夢。

房間裡恢復了死寂，只有那塊懷表，還在滴答作響，像是在為這場漫長的雨季，畫上最後的句點。

[[DANGER::【檢測到生命體徵消失……】]]
[[DANGER::【暮雨 ID 下線】]]
[[BLUE::【真相已歸檔。】]]`},en:{title:"The Fragmented Rain That Never Ended (Part IV) // Truth",summary:"Since the ending cannot be changed, knowing the truth is my final obsession.",content:`[[BLUE::Memory Extraction... Scene Reconstruction: Late Night Office]]

[[DIVIDER]]

When we returned from the observation deck, the Time Sector had already entered its low-power "Night Mode".

As soon as I pushed open the office door, I ran into Zelo and Zeri, who were just getting ready to leave work.

Zelo: "Wow! Rare guests! Did Mr. Dusk and Point finally come back from their 'elopement'?"

Zelo leaned on the back of her chair, looking at us with a gossipy face. Beside her, Zeri was organizing the last of her data pads. Hearing the commotion, she looked up, her gaze circling around us.

Zeri: "(Sighs helplessly) Looks like someone completely powered down."

She was referring to Point, who drifted in behind me like a wandering spirit and then planted herself face-first into the sofa. She was still hugging the box containing the pocket watch tightly.

Dusk: "We just went up for some air. She probably exhausted all her energy today."

Zelo: "Hehe, then we won't be third wheels! Zeri-sis, shall we go?"

Zeri sighed, picked up her bag and walked to the door. She paused, giving me a meaningful look.

Zeri: "I don't know what you talked about... but I saw something in you. You need to calm down, Dusk. Don't push yourself too hard."

Dusk: "Don't worry. Safe trip home."

As the automatic door closed with a beep, the noise was completely shut out.

There was no earth-shattering farewell ceremony. Everything was quiet, like a mime.

Only the faint blue light of the monitor illuminated the room, outlining her sleeping silhouette.

Dusk sat in his chair, playing with the sharp custom bayonet, his fingertips gently gliding over the cold blade. At some point, a faint black halo had appeared above Point's head, emitting a very weak, ghastly pale light.

He stopped his movements, looked towards the sofa, his tone calm.

Dusk: "Since you're awake, let's talk. Void."

'Point' on the sofa didn't get up immediately. She first turned over as usual, rubbed her eyes, and then slowly sat up straight.

She tidied up her slightly messy clothes, then stood up and walked gently to the chair opposite Dusk and sat down. Those eyes were Point's, but the gaze lacked the usual restlessness, holding only a calm gentleness.

Point (Void): "Good evening, Mr. Dusk. Not sleeping yet? Is something troubling you?"

Her voice was soft, carrying a very cultured sense of politeness, like a humble guest visiting late at night.

Dusk: "Sorry to disturb your rest. But... there are some things I must confirm now."

Point (Void): "It's alright, I don't mind. You look anxious. Is it because of that pocket watch?"

Dusk: "Yes. My parents' death, and the current state of this world... I want the truth. Not the official report, nor lies to comfort me."

Void sighed softly, a look of regret and admiration appearing on her face.

Point (Void): "Actually, I never really wanted you to delve too deeply into this, because it is too heavy... But, since you insist."

She folded her hands on her lap, her tone sincere and solemn.

Point (Void): "About your parents... they were great pioneers. To maintain the delicate balance of this 'Relative Generalized World', they had to operate the 'Time-Space Bubble' at high intensity."

Dusk: "Balance...?"

Point (Void): "Yes. The architecture of the world is unstable and requires immense energy to anchor it. Your parents bore this responsibility, but the energy magnitude was simply too vast. Years of radiation and load caused their bodies to suffer from severe 'Chronic Time-Space Adaptation Disease'."

Dusk's fingers trembled slightly, his knuckles turning white as he gripped the bayonet.

Dusk: "...Chronic disease. So it was energy backlash. They did it to maintain this world..."

Point (Void): "I am sorry. It was an irreversible collapse at the genetic level, something even we could not cure. The moment their bodies reached the limit was the 'accident' you know of."

Dusk took a deep breath, his eyes slightly red, but his gaze became clearer than ever before.

Dusk: "So it was not a conspiracy, nor an accident. It was the price... the price of being a watcher."

'Point' raised her hand, palm up, her movements elegant and restrained.

Point (Void): "Although they gave their lives, the endgame of this world remains unavoidable. Do you wish to see that moment? And... the ending this world will face if not stopped."

Dusk: "Show me. Since I know the cause, I should see the effect. I want to know... what exactly did they go through in their final moments."

Void fell silent for a moment. A trace of compassion appeared in those eyes.

Point (Void): "As you wish."

Dusk took a deep breath and gripped the bayonet tightly again.

Dusk: "In exchange, I will guard this secret with my life."

He glanced at the sleeping 'Point', a flash of determination in his eyes.

Dusk: "Say goodbye to them for me... actually, never mind, don't say anything. Just pretend I went on a business trip again. Don't let them be too sad."

He suddenly reached into his pocket, his fingertips brushing against the crumpled cigarette pack left over from the observation deck. He took one out and lit it with practiced ease.

Pale blue smoke rose in the dim room, blurring Void's calm face and the impending fear. The brief dizziness brought by the nicotine finally offered his taut nerves a moment of belated relaxation.

Dusk: "Phew... the last one. Still the familiar cigar taste."

He didn't finish it. He just took a deep drag, feeling the burning airflow echoing in his lungs, then crushed the cigarette butt heavily against the armrest, as if extinguishing his last shred of hesitation.

He took a deep breath, the air filled with the familiar, dry scent of ozone, mixed with the lingering smell of tobacco. He closed his eyes, adjusted the angle of the blade tip, and aimed it at the gap in his heart.

No trembling.

The wrist exerted force.

Squelch.

The cold metal pierced the skin, tearing through the warm flesh.

In that instant, accompanying the intense pain and chill flooding into his brain, was a massive stream of information.

[[VOID_VISION::[NEURAL CONNECTION FORCED... TIME-SPACE REGRESSION ACTIVE...] ]]

[[VOID_VISION::████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████]]

[[VOID_VISION::██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████]]

The violent shock caused Dusk's body to spasm in the chair, but the corners of his mouth slowly curled into a miserable arc.

Thump.

Thump.

The heartbeat slowed down, but those terrifying images became clearer and clearer.

Dusk (Dying Thought): "Ah... so that's it. Dad, Mom... so this is the pain you bore back then..."

Vision began to blur, the red mist intertwined with the blue room.

Dusk (Dying Thought): "Thank goodness... at least, I saw it. Everyone... live well."

Dusk slumped in the chair, breathing ceased completely. That smile froze on his face, carrying a hint of relief, and also a longing for his family.

'Point' sat quietly opposite, watching the figure that was no longer beating. She did not leave immediately, but bowed slightly, performing a standard farewell.

[[GLITCH_GREEN::Byaki]] (Void): "Goodnight, Mr. Dusk. May you have a sweet dream in a place without me [[MASK::(Z.Byaki)]]."

[Xbot: Assigned Biomass Recovery]

After cleaning up the remaining stains, she placed Dusk's master terminal on the table, closed her eyes, her body going limp and falling back onto the sofa, the halo fading away, as if she had just had a brief dream.

The room returned to dead silence, only the pocket watch ticking away, as if drawing the final period for this long rainy season.

[[DANGER::[VITAL SIGNS CEASED...]]]
[[DANGER::[DUSK ID OFFLINE]]]
[[BLUE::[TRUTH ARCHIVED.] ]]`}}},Ex={id:"story-coffee-crisis",date:"档案记录: X-001",status:"published",translations:{"zh-CN":{title:"咖啡机改造计划",summary:"芷漓觉得实验室的咖啡机效率太低，于是动手进行了“微调”。",content:`[[DIVIDER]]

芷漓：“这台机器提取咖啡因的效率只有 72%，不仅浪费豆子，还无法提供足以支撑连续 16 小时实验的能量。”

零点：“所以……这就是你把它改成喷射引擎造型的原因？它现在甚至有一个独立的冷却塔！”

芷漓：“那是为了防止高压萃取时的过热。顺便一提，我调整了泵压，现在它能在一秒内完成一杯浓缩。”

泽洛：“那个……芷漓姐，上面的警告标志‘小心爆炸’是认真的吗？”

芷漓：“那是给未经授权的操作人员看的（看向零点）。好了，谁要试第一杯？”

（零点和泽洛同时后退了一步）

零点：“我觉得……今天的我依然充满活力，不需要咖啡因的辅助！我去上面了！”（光速逃跑）

泽洛：“啊！我、我的电脑数据还没备份！”（紧随其后）

芷漓：“……至于吗。”（淡定地按下按钮，整个实验室的灯光随之一暗）`},"zh-TW":{title:"咖啡機改造計畫",summary:"芷漓覺得實驗室的咖啡機效率太低，於是動手進行了「微調」。",content:`[[DIVIDER]]

芷漓：「這台機器提取咖啡因的效率只有 72%，不僅浪費豆子，還無法提供足以支撐連續 16 小時實驗的能量。」

零點：「所以……這就是妳把它改成噴射引擎造型的原因？它現在甚至有一個獨立的冷卻塔！」

芷漓：「那是為了防止高壓萃取時的過熱。順便一提，我調整了泵壓，現在它能在一秒內完成一杯濃縮。」

澤洛：「那個……芷漓姐，上面的警告標誌『小心爆炸』是認真的嗎？」

芷漓：「那是給未經授權的操作人員看的（看向零點）。好了，誰要試第一杯？」

（零點和澤洛同時後退了一步）

零點：「我覺得……今天的我依然充滿活力，不需要咖啡因的輔助！我去上面了！」（光速逃跑）

澤洛：「啊！我、我的電腦數據還沒備份！」（緊隨其後）

芷漓：「……有必要嗎。」（淡定地按下按鈕，整個實驗室的燈光隨之一暗）`},en:{title:"Coffee Machine Overhaul",summary:"Zeri felt the lab's coffee machine was too inefficient, so she made some 'adjustments'.",content:`[[DIVIDER]]

Zeri: "This machine's caffeine extraction efficiency is only 72%. It wastes beans and fails to provide enough energy for a continuous 16-hour experiment session."

Point: "So... is that why you rebuilt it to look like a jet engine? It even has an independent cooling tower now!"

Zeri: "That is to prevent overheating during high-pressure extraction. By the way, I adjusted the pump pressure. It can now finish an espresso shot in one second."

Zelo: "Um... Zeri-sis, is the 'Danger: Explosion' sign on top serious?"

Zeri: "That is for unauthorized personnel (glances at Point). Now, who wants to try the first cup?"

(Point and Zelo take a step back simultaneously)

Point: "I think... I am full of energy today and don't need caffeine assistance! I'm heading up!" (Flees at light speed)

Zelo: "Ah! I, uh, haven't backed up my computer data!" (Follows closely behind)

Zeri: "...Is that really necessary?" (Calmly presses the button, causing the entire lab's lights to dim)`}}},wx={id:"story-quantum-delivery",date:"档案记录: X-002",status:"published",translations:{"zh-CN":{title:"高维快递服务",summary:"零点试图证明“空间折跃”可以用于外卖配送，但收货地址似乎填错到了奇怪的地方。",content:`[[DIVIDER]]

泽洛：“那个……零点，为什么实验室的量子传输台上有个……披萨盒子？”

零点：“嘘！那是我的午餐！外卖小哥进不来时域节区，所以我‘稍微’修改了一下坐标参数，让他把披萨放在指定坐标，我直接折跃过来。”

芷漓：（头也不抬，看着数据板）“这就是为什么刚才能源监控显示有一个 5000 EP的能量峰值？为了一个披萨？”

零点：“这是为了验证‘民用物质在时空穿梭中的热量保持率’！是正经实验！”

芷漓：“……这就是你把传输台弄得全是油渍的理由？”

零点：“哎呀，别在意细节！看，我还准备了饭后甜点——限量版布丁！这次我把坐标定得更精准了！”

（零点自信地按下按钮，传输台嗡嗡作响，空间裂缝打开）

零点：“见证奇迹的时刻——出来吧，我的布丁！”

（裂缝中掉出来的不是布丁，而是一张纸条）

泽洛：“咦？只有一张纸？”

零点：“（捡起纸条）这是什么？‘拒绝签收’？？”

0000.2Void>>不要把垃圾（指高热量食品）扔进我的维度空隙里。另外，那个布丁味道不错。还有，芷漓，建议检查一下零点的体重数据。【插入结束】

零点：“！！！”

芷漓：“（眯起眼睛，眼神犀利）哦？看来 Void 前辈给了非常有建设性的意见呢。零点。”

零点：“把我的布丁还给我啊啊啊啊！那是限量版的！Void 你个贪吃鬼！！”

泽洛：“（小声）某种意义上，这确实是‘高维’快递呢……”`},"zh-TW":{title:"高維快遞服務",summary:"零點試圖證明「空間折躍」可以用於外賣配送，但收貨地址似乎填錯到了奇怪的地方。",content:`[[DIVIDER]]

澤洛：「那個……零點，為什麼實驗室的量子傳輸台上有個……披薩盒子？」

零點：「噓！那是我的午餐！外賣小哥進不來時域節區，所以我『稍微』修改了一下坐標參數，讓他把披薩放在指定坐標，我直接折躍過來。」

芷漓：（頭也不抬，看著數據板）「這就是為什麼剛才能源監控顯示有一個 5000 EP的能量峰值？為了一個披薩？」

零點：「這是為了驗證『民用物質在時空穿梭中的熱量保持率』！是正經實驗！」

芷漓：「……這就是妳把傳輸台弄得全是油漬的理由？」

零點：「哎呀，別在意細節！看，我還準備了飯後甜點——限量版布丁！這次我把坐標定得更精準了！」

（零點自信地按下按鈕，傳輸台嗡嗡作響，空間裂縫打開）

零點：「見證奇蹟的時刻——出來吧，我的布丁！」

（裂縫中掉出來的不是布丁，而是一張紙條）

澤洛：「咦？只有一張紙？」

零點：「（撿起紙條）這是什麼？『拒絕簽收』？？」

0000.2Void>>不要把垃圾（指高熱量食品）扔進我的維度空隙裡。另外，那個布丁味道不錯。還有，芷漓，建議檢查一下零點的體重數據。【插入結束】

零點：「！！！」

芷漓：「（瞇起眼睛，眼神犀利）哦？看來 Void 前輩給了非常有建設性的意見呢。零點。」

零點：「把我的布丁還給我啊啊啊啊！那是限量版的！Void 妳個貪吃鬼！！」

澤洛：「（小聲）某種意義上，這確實是『高維』快遞呢……」`},en:{title:"High-Dimensional Delivery Service",summary:"Point tried to prove that 'Spatial Warp' could be used for food delivery, but she seemed to have entered the wrong address.",content:`[[DIVIDER]]

Zelo: "Um... Point, why is there a... pizza box on the lab's quantum transmission pad?"

Point: "Shh! That's my lunch! The delivery guy can't enter the Time Sector, so I 'slightly' modified the coordinate parameters. I had him leave the pizza at specific coordinates, and I warped it directly here."

Zeri: (Without looking up from her data pad) "Is that why the energy monitor showed a 5000 EP spike just now? For a pizza?"

Point: "This is to verify the 'Heat Retention Rate of Civilian Matter during Space-Time Travel'! It's a serious experiment!"

Zeri: "...Is that why the transmission pad is covered in grease?"

Point: "Oh, don't sweat the details! Look, I also prepared dessert—limited edition pudding! I set the coordinates even more precisely this time!"

(Point presses the button confidently. The transmission pad hums, and a spatial rift opens.)

Point: "Witness the miracle—come out, my pudding!"

(It wasn't pudding that fell out of the rift, but a piece of paper.)

Zelo: "Eh? Just a piece of paper?"

Point: "(Picks up the note) What is this? 'Delivery Rejected'??"

0000.2Void>>Do not throw trash (referring to high-calorie food) into my dimensional gap. Also, the pudding tasted good. Furthermore, Zeri, I suggest checking Point's weight data.[INSERTION_END]

Point: "!!!"

Zeri: "(Narrowing eyes, gaze sharp) Oh? It seems Senior Void has given some very constructive advice. Point."

Point: "Give me back my pudding!! That was limited edition! Void, you glutton!!"

Zelo: "(Whispering) In a sense, this really is a 'High-Dimensional' delivery..."`}}},_x={id:"story-hotpot-protocol",date:"档案记录: X-003",status:"published",translations:{"zh-CN":{title:"绝密火锅协议",summary:"实验室守则第一条：严禁在操作台附近饮食。除非……食材实在是太诱人了。",content:`[[DIVIDER]]

（咕嘟咕嘟……）

充满科技感的实验室角落里，传来了一阵极不协调的沸腾声。

芷漓：“（盯着烧杯里的红油汤底）零点，我记得我说过，那个‘高能粒子加热器’不是用来煮麻辣锅底的。”

零点：“哎呀，别那么死板嘛！你看，温度控制在 98.5 度，完美恒温！而且这个加热器闲着也是闲着。”

泽洛：“（抱着一堆食材跑过来）我找到了！这是从生物培养室……啊不对，是后勤仓库找到的金针菇和肥牛卷！”

芷漓：“泽洛，你刚才是不是想说生物培养室？那里的蘑菇绝对不能吃吧！”

泽洛：“嘿嘿，开玩笑的啦~是正经超市买的！不过……芷漓姐，你的筷子为什么已经拿在手上了？”

芷漓：“（别过头去，脸红）……为了防止你们烫伤，我作为科研负责人，有义务进行第一次‘样本’测试。仅此而已。”

零点：“想吃就直说嘛！来来来，下肉下肉！”

（三人围在精密的仪器旁，热气腾腾的雾气模糊了全息屏幕）

零点：“哈——！果然，没有什么是一顿火锅解决不了的！如果有，那就是两顿！”

泽洛：“不过，这味道会不会飘到通风管道里去啊？要是被警报系统检测到……”

[[DANGER::【警告：检测到空气中辛辣素浓度超标，疑似生化泄漏……】]]

实验室的红灯突然闪烁起来。

零点：“完蛋！忘了屏蔽传感器了！”

芷漓：“（淡定地夹起一块肉）别慌。我已经改写了底层逻辑，现在系统认为这是‘新型辣椒素提取实验’的正常挥发。”

零点 & 泽洛：“不愧是芷漓姐！！”

0000.2Void>>看起来很好吃。但我不得不提醒你们，有一滴红油溅到了遏制力场的控制面板上。如果不想让整个节区变成烟花，建议擦一下。【插入结束】

零点：“！！！”

（一阵手忙脚乱的擦拭声）

芷漓：“呼……好险。不过 Void 前辈，你看得到吃不到，是不是很气？”

0000.2Void>>……我刚刚修改了你们的体重秤数据。祝用餐愉快。

零点：“啊啊啊！我的牛肉！都不许抢，我要化悲愤为食量！”`},"zh-TW":{title:"絕密火鍋協議",summary:"實驗室守則第一條：嚴禁在操作台附近飲食。除非……食材實在是太誘人了。",content:`[[DIVIDER]]

（咕嘟咕嘟……）

充滿科技感的實驗室角落裡，傳來了一陣極不協調的沸騰聲。

芷漓：「（盯著燒杯裡的紅油湯底）零點，我記得我說過，那個『高能粒子加熱器』不是用來煮麻辣鍋底的。」

零點：「哎呀，別那麼死板嘛！妳看，溫度控制在 98.5 度，完美恆溫！而且這個加熱器閒著也是閒著。」

澤洛：「（抱著一堆食材跑過來）我找到了！這是從生物培養室……啊不對，是後勤倉庫找到的金針菇和肥牛卷！」

芷漓：「澤洛，妳剛才是不是想說生物培養室？那裡的蘑菇絕對不能吃吧！」

澤洛：「嘿嘿，開玩笑的啦~是正經超市買的！不過……芷漓姐，妳的筷子為什麼已經拿在手上了？」

芷漓：「（別過頭去，臉紅）……為了防止你們燙傷，我作為科研負責人，有義務進行第一次『樣本』測試。僅此而已。」

零點：「想吃就直說嘛！來來來，下肉下肉！」

（三人圍在精密的儀器旁，熱氣騰騰的霧氣模糊了全息屏幕）

零點：「哈——！果然，沒有什麼是一頓火鍋解決不了的！如果有，那就是兩頓！」

澤洛：「不過，這味道會不會飄到通風管道裡去啊？要是被警報系統檢測到……」

[[DANGER::【警告：檢測到空氣中辛辣素濃度超標，疑似生化洩漏……】]]

實驗室的紅燈突然閃爍起來。

零點：「完蛋！忘了屏蔽傳感器了！」

芷漓：「（淡定地夾起一塊肉）別慌。我已經改寫了底層邏輯，現在系統認為這是『新型辣椒素提取實驗』的正常揮發。」

零點 & 澤洛：「不愧是芷漓姐！！」

0000.2Void>>看起來很好吃。但我不得不提醒你們，有一滴紅油濺到了遏制力場的控制面板上。如果不想讓整個節區變成煙花，建議擦一下。【插入結束】

零點：「！！！」

（一陣手忙腳亂的擦拭聲）

芷漓：「呼……好險。不過 Void 前輩，你看得到吃不到，是不是很氣？」

0000.2Void>>……我剛剛修改了你們的體重秤數據。祝用餐愉快。

零點：「啊啊啊！我的牛肉！都不許搶，我要化悲憤為食量！」`},en:{title:"Top Secret Hot Pot Protocol",summary:"Lab Rule #1: No eating or drinking near the console. Unless... the ingredients are just too tempting.",content:`[[DIVIDER]]

(Bubble bubble...)

In the corner of the high-tech laboratory, a very incongruous boiling sound could be heard.

Zeri: "(Staring at the spicy red oil soup base in the beaker) Point, I recall saying that the 'High-Energy Particle Heater' is not for boiling spicy hot pot broth."

Point: "Oh, don't be so rigid! Look, the temperature is controlled at 98.5 degrees, perfect constant temperature! Besides, this heater was just sitting idle."

Zelo: "(Running over holding a pile of ingredients) I found them! These are enoki mushrooms and beef rolls from the biological culture room... ah no, from the logistics warehouse!"

Zeri: "Zelo, did you just want to say biological culture room? The mushrooms there are definitely inedible!"

Zelo: "Hehe, just kidding~ I bought them from a proper supermarket! But... Zeri-sis, why are your chopsticks already in your hand?"

Zeri: "(Turns head away, blushing) ...To prevent you from getting burned, as the head of research, I have an obligation to conduct the first 'sample' test. That's all."

Point: "Just say you want to eat! Come on, come on, put the meat in!"

(The three gathered around the precision instruments, the steaming mist blurring the holographic screens.)

Point: "Hah—! As expected, there is nothing a hot pot can't solve! If there is, it's two hot pots!"

Zelo: "But, won't this smell drift into the ventilation ducts? If the alarm system detects it..."

[[DANGER::[WARNING: CAPSAICIN CONCENTRATION IN AIR EXCEEDS LIMIT. SUSPECTED BIOHAZARD LEAK...]]]

The red lights in the lab suddenly started flashing.

Point: "We're doomed! I forgot to shield the sensors!"

Zeri: "(Calmly picking up a piece of meat) Don't panic. I've rewritten the underlying logic. The system now thinks this is normal evaporation from a 'New Capsaicin Extraction Experiment'."

Point & Zelo: "As expected of Zeri-sis!!"

0000.2Void>>It looks delicious. But I must remind you, a drop of red oil has splashed onto the control panel of the Containment Field. If you don't want the whole sector to turn into fireworks, I suggest wiping it off.[INSERTION_END]

Point: "!!!"

(Sounds of frantic wiping)

Zeri: "Phew... that was close. But Senior Void, isn't it frustrating that you can see but can't eat?"

0000.2Void>>...I just modified the data on your weighing scales. Bon appétit.

Point: "Aaaah! My beef! No one grab it, I'm going to turn my grief and indignation into appetite!"`}}},Tx={id:"special-legacy-dusk",date:"F-6年34月13日",status:"published",translations:{"zh-CN":{title:"legacy",summary:"数据流深处的一封未发送信件。发件人：D.雨",content:`[[DANGER::【系统提示：该文件已自动设置为只读状态】]]

       不知这段文字是谁在看，希望是点酱，因为我有话想对你说。很抱歉就这般不辞而别了，还是永别。

       我说谎了。那时对你说要去很远的地方,实际上是要离开人世 。如此说来倒是说得没错了，地狱确实很远啊(笑) 选择死亡的原因嘛.我和零空做了一笔交易,祂告诉我一切的结局，代价就是我去死。不要对零空心存芥蒂啊...这只是我的选择罢了。

       抱歉零点，其实‘昼星’这个看似整的还不错的组织，仅仅由我一个人组成。

       所以这封遗书是我在知晓一切前写下的,介时我大抵会用随身带的刺刀来亲手了却自己罢...说起来这把刀还是因为之前很喜欢那部叫《剃刀党》的电影，特地定制的。

       留给你的东西有两样：一个是我的吉他，你想弹的话可以试试去学,不想弹当个摆件也行。重要的是压力太大了就该好好释放;一个是怀表，当时我还跟个谜语人一样(笑)现在便告诉你:我在做记者时曾采访过一位作家，他叫宁思，我十分敬佩他那般智慧的学者。宁思把他的怀表送给了我，以作纪念。所以,这个怀表现在送给你,代表着宁静地思考。

       真的很高兴能认识到你，零点，多亏了你我才有机会知晓我的父母究竟为何而死，不过很可惜只能在这里和你道谢。很抱歉就这么死在你们的实验室里，我想X_bot应该会清理干净的吧。不管怎么样，点酱可要替我好好活下去，可以想我，但不要来找我（笑）

                                                             F-6年34月13日                                                                  
                                                                          D.雨`},"zh-TW":{title:"legacy",summary:"數據流深處的一封未發送信件。發件人：D.雨",content:`[[DANGER::【系統提示：該檔案為高危殘留數據，已自動隔離】]]

       不知這段文字是誰在看，希望是點醬，因為我有話想對妳說。很抱歉就這般不辭而別了，還是永別。

       我說謊了。那時對妳說要去很遠的地方,實際上是要離開人世 。如此說來倒是說得沒錯了，地獄確實很遠啊(笑) 選擇死亡的原因嘛.我和零空做了一筆交易,祂告訴我一切的結局，代價就是我去死。不要對零空心存芥蒂啊...這只是我的選擇罷了。

       抱歉零點，其實『晝星』這個看似整的還不錯的組織，僅僅由我一個人組成。

       所以這封遺書是我在知曉一切前寫下的,介時我大抵會用隨身帶的刺刀來親手了卻自己罷...說起來這把刀還是因為之前很喜歡那部叫《剃刀黨》的電影，特地定制的。

       留給妳的東西有兩樣：一個是我的吉他，妳想彈的話可以試試去學,不想彈當個擺件也行。重要的是壓力太大了就該好好釋放;一個是懷表，當時我還跟個謎語人一樣(笑)現在便告訴妳:我在做記者時曾採訪過一位作家，他叫寧思，我十分敬佩他那般智慧的學者。寧思把他的懷表送給了我，以作紀念。所以,這個懷表現在送給妳,代表著寧靜地思考。

       真的很高興能認識到妳，零點，多虧了妳我才有機會知曉我的父母究竟為何而死，不過很可惜只能在這裡和妳道謝。很抱歉就這麼死在你們的實驗室裡，我想X_bot應該會清理乾淨的吧。不管怎麼樣，點醬可要替我好好活下去，可以想我，但不要來找我（笑）

                                                             F-6年34月13日                                                                  
                                                                          D.雨`},en:{title:"legacy",summary:"An unsent letter deep in the data stream. Sender: D.Rain",content:`[[DANGER::[SYSTEM ALERT: HIGH-RISK RESIDUAL DATA. AUTOMATICALLY ISOLATED.] ]]

       I don't know who is reading this text, I hope it's Point-chan, because I have something to say to you. I'm sorry to leave without saying goodbye like this... or rather, goodbye forever.

       I lied. Back then I told you I was going to a place far away, but actually, I was leaving this world. In that sense, I wasn't wrong, Hell is indeed very far away (lol). As for the reason for choosing death... I made a deal with Void. He told me the ending of everything, and the price was my death. Don't hold a grudge against Void... this was just my choice.

       Sorry Point, actually 'DiurnalStar', this seemingly decent organization, consists solely of me.

       So this suicide note was written before I knew everything. By then, I will probably use the bayonet I carry with me to end myself with my own hands... Speaking of which, this knife was custom-made because I really liked that movie called "Peaky Blinders".

       I left you two things: one is my guitar. If you want to play, you can try to learn. If not, it's fine as a decoration. The important thing is that when the pressure is too high, you should release it properly; the other is the pocket watch. I was acting like a riddler back then (lol), so I'll tell you now: When I was a journalist, I interviewed a writer named Ning Si. I greatly admired a scholar of his wisdom. Ning Si gave me his pocket watch as a souvenir. So, I'm giving this pocket watch to you now, representing 'Peaceful Thinking'.

       I'm really glad to have met you, Point. Thanks to you, I had the chance to know why my parents died, but it's a pity I can only thank you here. I'm sorry to die in your lab like this, I guess X_bot will clean it up. Anyway, Point-chan, you must live well for me. You can miss me, but don't come looking for me (lol).

                                                             Year F-6, Month 34, Day 13                                                                  
                                                                          D.Rain`}}},zx=(d,x)=>({id:d,date:x,status:"locked",translations:{"zh-CN":{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"},"zh-TW":{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"},en:{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"}}}),kx=[{id:"VOL_MEMORIES",title:"那场仍未结束的零碎之雨",titleEn:"The Fragmented Rain That Never Ended",status:"unlocked",chapters:[vx,Nx,jx,Sx,Tx]},{id:"VOL_DAILY",title:"时域日常",titleEn:"Time Line Daily",status:"unlocked",chapters:[Ex,wx,_x,zx("ERR_004","档案记录: X-004")]},{id:"VOL_UNKNOWN",title:"▓▓▓▓▓▓",titleEn:"UNKNOWN_SECTOR",status:"corrupted",chapters:[]}],Ax=({volumes:d,onSelectVolume:x,onOpenCharModal:p,language:c,isLightTheme:b})=>i.jsxs("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:[i.jsxs("div",{className:"fixed top-0 left-0 w-full h-full pointer-events-none opacity-20",children:[i.jsx("div",{className:"absolute top-1/4 left-0 w-full h-px bg-ash-gray/50"}),i.jsx("div",{className:"absolute bottom-1/4 left-0 w-full h-px bg-ash-gray/50"}),i.jsx("div",{className:"absolute top-0 left-1/4 h-full w-px bg-ash-gray/50"}),i.jsx("div",{className:"absolute top-0 right-1/4 h-full w-px bg-ash-gray/50"})]}),i.jsxs("button",{onClick:p,className:"fixed bottom-24 right-4 md:absolute md:top-4 md:right-4 z-50 bg-ash-black border border-ash-gray p-3 text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all shadow-hard group",title:"Personnel Archive",children:[i.jsx(Qg,{size:20}),i.jsx("span",{className:"absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-ash-dark text-ash-light text-[10px] font-mono px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-ash-gray hidden md:block",children:"PERSONNEL_DB"})]}),i.jsx("header",{className:"relative z-10 mb-16 text-center w-full max-w-2xl mx-auto mt-8 md:mt-4",children:i.jsxs("div",{className:"flex flex-col items-center gap-3",children:[i.jsx(og,{size:40,className:"text-ash-light",strokeWidth:1}),i.jsx("h1",{className:"text-3xl md:text-5xl font-black text-ash-light uppercase tracking-tighter glitch-text-heavy","data-text":c==="en"?"SIDE_ARCHIVES":"支线档案库",children:c==="en"?"SIDE_ARCHIVES":"支线档案库"}),i.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono text-ash-gray border border-ash-gray/50 px-2 py-1 bg-ash-black/80",children:[i.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"STATUS: MOUNTED",i.jsx("span",{className:"mx-1",children:"|"}),"/VAR/LIB/MEMORIES/SIDE_STORIES"]})]})}),i.jsx("div",{className:"w-full max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-4 pb-20",children:d.map((_,H)=>{const S=_.status==="locked",y=_.status==="corrupted",h=_.id==="VOL_MEMORIES",D=b?"bg-red-50 border-red-300 text-red-700":"bg-red-950/20 border-red-900 text-red-500",T=b?"bg-zinc-200 border-zinc-300 text-zinc-500":"bg-ash-dark/20 border-ash-dark text-ash-gray",M=b?"bg-white border-zinc-300 text-zinc-800 hover:border-zinc-500 hover:shadow-lg":"bg-ash-black/90 border-ash-gray text-ash-light group-hover:border-ash-light group-hover:bg-ash-dark/80 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",U=b?"bg-sky-50 border-cyan-500 text-sky-900 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:-translate-y-2":"bg-cyan-950/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-cyan-900/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2";return i.jsx(Ue,{delay:H*150,className:`w-full h-full ${h?"md:col-span-1":""}`,children:i.jsxs("button",{onClick:()=>{!S&&!y&&x(_)},disabled:S||y,className:`
                                    w-full h-64 relative group transition-all duration-300 transform
                                    flex flex-col text-left overflow-hidden
                                    ${y?"opacity-80":S?"opacity-60":"cursor-pointer"}
                                `,children:[i.jsxs("div",{style:{clipPath:"polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)"},className:`
                                        absolute inset-0 border-2 transition-colors duration-300
                                        ${y?D:S?T:h?U:M}
                                    `,children:[i.jsx("div",{className:`absolute inset-0 bg-transparent bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none ${b?"opacity-5":"opacity-20"}`}),h&&i.jsxs(i.Fragment,{children:[!b&&i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"}),i.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-40",children:Array.from({length:12}).map((R,G)=>i.jsx("div",{className:`absolute w-[1.5px] bg-gradient-to-b from-transparent ${b?"via-cyan-600":"via-cyan-300"} to-transparent`,style:{height:`${20+Math.random()*40}%`,left:`${Math.random()*100}%`,top:"-20%",animation:`dataRainCard ${1.5+Math.random()*1.5}s linear infinite`,animationDelay:`${Math.random()*2}s`,willChange:"transform"}},G))})]}),h&&i.jsxs("div",{className:`absolute top-0 right-0 z-30 px-3 py-1 text-[10px] font-bold font-mono border-b-2 border-l-2 flex items-center gap-1 ${b?"bg-cyan-100 text-cyan-700 border-cyan-200":"bg-cyan-950 text-cyan-400 border-cyan-500/50"}`,children:[i.jsx(Rf,{size:10,className:"animate-pulse"}),"FEATURED"]}),i.jsxs("div",{className:"p-6 h-full flex flex-col relative z-20",children:[i.jsxs("div",{className:"flex justify-between items-start mb-auto",children:[h?i.jsxs("div",{className:"relative",children:[i.jsx(Tf,{size:32,strokeWidth:1,className:"text-cyan-500 relative z-10"}),i.jsx(Uf,{size:16,className:"text-cyan-300 absolute -top-1 -right-1 animate-spin-slow"})]}):i.jsx(Af,{size:32,strokeWidth:1,className:y?"animate-pulse":""}),i.jsxs("div",{className:"text-[10px] font-mono border border-current px-1 opacity-70",children:["VOL_0",H+1]})]}),i.jsxs("div",{className:"space-y-1 mt-4",children:[i.jsx("h3",{className:`font-black text-xl md:text-2xl font-mono uppercase tracking-tight leading-none ${y?"blur-[1px]":""} ${h?b?"text-cyan-700":"text-cyan-100 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]":""}`,children:c==="en"?_.titleEn:_.title}),i.jsx("div",{className:`text-[10px] font-mono uppercase tracking-widest ${h?"opacity-80":"opacity-50"}`,children:_.titleEn})]}),i.jsxs("div",{className:"mt-6 pt-4 border-t border-dashed border-current/30 flex justify-between items-end text-[10px] font-mono",children:[i.jsxs("div",{className:"flex flex-col gap-1",children:[i.jsxs("span",{children:["SIZE: ",_.chapters.length*128,"KB"]}),i.jsxs("span",{className:"flex items-center gap-1",children:["STATUS:",y?"ERR":S?"LCK":"RDY"]})]}),y?i.jsx(Cl,{size:16}):S?i.jsx(Dn,{size:16}):i.jsx("div",{className:"w-16 h-2 bg-current opacity-20 relative",children:i.jsx("div",{className:"absolute left-0 top-0 h-full bg-current w-1/2"})})]})]})]}),!S&&!y&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${h?"border-cyan-400":b?"border-zinc-800":"border-ash-light"}`}),i.jsx("div",{className:`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${h?"border-cyan-400":b?"border-zinc-800":"border-ash-light"}`})]})]})},_.id)})})]}),Mx=({volume:d,onBack:x,onSelectChapter:p,language:c,isLightTheme:b})=>i.jsx("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:i.jsxs("div",{className:"w-full max-w-3xl relative z-10 animate-fade-in mt-8 md:mt-0",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-8 border-b-2 border-ash-gray pb-4",children:[i.jsx("button",{onClick:x,className:"p-2 border border-ash-gray text-ash-gray hover:text-ash-light hover:border-ash-light hover:bg-ash-dark transition-all",children:i.jsx(qr,{size:20})}),i.jsxs("div",{children:[i.jsxs("div",{className:"text-[10px] font-mono text-ash-gray",children:["ROOT / ",d.id]}),i.jsx("h2",{className:"text-2xl font-black text-ash-light uppercase tracking-tight",children:c==="en"?d.titleEn:d.title})]}),i.jsx("div",{className:"ml-auto hidden md:block",children:i.jsx(ls,{size:24,className:"text-ash-dark animate-pulse"})})]}),i.jsx("div",{className:"space-y-3",children:d.chapters.map((_,H)=>{const S=_.status==="locked",y=_.translations[c]||_.translations["zh-CN"],h=_.id==="special-legacy-dusk";let D="";return h?D=b?"bg-blue-50/80 border-blue-500 text-blue-900 shadow-[0_0_15px_rgba(37,99,235,0.4)] border-dashed animate-shake-violent skew-x-2":"bg-blue-950/30 border-blue-400 text-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.4)] border-dashed animate-shake-violent -skew-x-1":S?D=b?"bg-zinc-100 border-zinc-300 text-zinc-400 opacity-60 cursor-not-allowed":"bg-ash-dark/20 border-ash-dark/50 text-ash-gray opacity-60 cursor-not-allowed":D=b?"bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-500 shadow-sm":"bg-ash-black/80 border-ash-dark/50 text-ash-light hover:border-ash-light hover:bg-ash-dark/40 shadow-hard-sm",i.jsx(Ue,{delay:H*50,children:i.jsxs("button",{onClick:()=>{S||p(H)},disabled:S,className:`
                                        w-full flex items-center gap-4 p-4 border transition-all duration-200 group relative overflow-hidden
                                        ${D}
                                        ${h?"hover:scale-[1.01] hover:bg-blue-900/10 cursor-not-allowed":""}
                                    `,children:[i.jsx("div",{className:`shrink-0 w-8 text-center font-mono text-xs ${h?"text-blue-500 font-bold":"opacity-50"}`,children:h?"!!":String(H+1).padStart(2,"0")}),i.jsx("div",{className:`
                                        shrink-0 p-2 border transition-colors
                                        ${h?"bg-blue-950 border-blue-500 text-blue-500 animate-pulse":S?"bg-transparent border-current opacity-50":b?"bg-zinc-100 border-zinc-200 group-hover:bg-zinc-800 group-hover:text-white group-hover:border-zinc-800":"bg-ash-dark/50 border-ash-gray/30 group-hover:border-ash-light group-hover:bg-ash-light group-hover:text-ash-black"}
                                    `,children:h?i.jsx(Uf,{size:16,fill:"currentColor"}):S?i.jsx(Dn,{size:16}):i.jsx(ts,{size:16})}),i.jsxs("div",{className:"flex-1 text-left relative overflow-hidden",children:[i.jsx("div",{className:`font-bold font-mono text-sm md:text-base uppercase truncate ${h?"glitch-text-heavy tracking-widest opacity-80":""}`,"data-text":y.title,children:y.title}),h&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"absolute top-0 left-0 w-full h-full text-blue-300 opacity-50 animate-pulse translate-x-[2px] pointer-events-none mix-blend-overlay",children:y.title}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-full text-white opacity-20 animate-glitch translate-x-[-2px] pointer-events-none mix-blend-color-dodge",children:y.title})]}),i.jsxs("div",{className:`text-[10px] font-mono flex items-center gap-2 ${h?"text-blue-500/70":"opacity-50"}`,children:[i.jsx("span",{children:_.date}),h&&i.jsx("span",{className:"font-bold border border-blue-500/50 px-1 bg-blue-950/30",children:"LEGACY // CORRUPTED"}),!S&&!h&&i.jsxs("span",{className:"hidden md:inline",children:["| ",y.content.length*2," BYTES"]})]})]}),!S&&i.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:i.jsx(as,{size:16})}),h&&i.jsx("div",{className:"opacity-70 animate-pulse",children:i.jsx(Cl,{size:16,className:"text-blue-500"})}),!S&&!b&&!h&&i.jsx("div",{className:"absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none skew-x-12"}),h&&i.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(59,130,246,0.05)_10px,rgba(59,130,246,0.05)_20px)] animate-[pulse_0.1s_infinite]"})]})},_.id)})})]})}),yf=({lines:d})=>{const[x,p]=V.useState(!1);return i.jsx(Ue,{children:i.jsxs("div",{className:"my-10 border-l-4 border-fuchsia-600 bg-fuchsia-950/10 font-mono text-xs md:text-sm shadow-[0_0_15px_-3px_rgba(192,38,211,0.2)]",children:[i.jsxs("button",{onClick:()=>p(!x),className:"w-full text-left p-3 md:p-4 bg-fuchsia-950/20 hover:bg-fuchsia-900/30 text-fuchsia-300 font-bold flex items-center gap-3 transition-all group border-b border-fuchsia-500/20",children:[i.jsx("div",{className:`transition-transform duration-300 ${x?"rotate-90":""}`,children:i.jsx(Cl,{size:16})}),i.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-1 md:gap-3",children:[i.jsx("span",{className:"animate-pulse tracking-widest text-fuchsia-400",children:">>> SYSTEM_INTERCEPT // VOID_SIDE"}),i.jsx("span",{className:"text-[10px] bg-fuchsia-900/50 px-1 border border-fuchsia-500/30 text-fuchsia-200/70",children:"SOURCE: UNKNOWN"})]})]}),i.jsx("div",{className:`transition-all duration-500 ease-in-out overflow-hidden ${x?"max-h-[1000px] opacity-100":"max-h-0 opacity-0"}`,children:i.jsx("div",{className:"p-4 md:p-6 text-fuchsia-100/90 space-y-2 leading-relaxed tracking-wide font-medium bg-black/20 backdrop-blur-sm",children:d.map((c,b)=>i.jsx("p",{className:"border-l border-fuchsia-500/20 pl-3 hover:border-fuchsia-500 hover:bg-fuchsia-500/5 transition-colors duration-300",children:c.replace(/0000\.2Void>>|【插入结束】|【插入結束】|\[INSERTION_END\]/g,"")},b))})})]})})},Cr=d=>d.split(/(\[\[(?:MASK|GLITCH_GREEN)::.*?\]\])/g).map((p,c)=>{if(p.startsWith("[[MASK::")&&p.endsWith("]]")){const b=p.slice(8,-2);return i.jsx(Kr,{children:b},c)}else if(p.startsWith("[[GLITCH_GREEN::")&&p.endsWith("]]")){const b=p.slice(16,-2);return i.jsxs("span",{className:"text-emerald-400 font-black tracking-widest drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] inline-block animate-pulse relative px-1",children:[i.jsx("span",{className:"absolute inset-0 animate-ping opacity-30 blur-sm bg-emerald-500/20 rounded-full"}),i.jsx("span",{className:"relative z-10",children:b})]},c)}return p}),Cx=({volume:d,initialChapterIndex:x,onBack:p,language:c,isLightTheme:b,readerFont:_})=>{const[H,S]=V.useState(x),[y,h]=V.useState(!0),D=V.useRef(null);V.useEffect(()=>{window.innerWidth<768&&h(!1)},[]),V.useEffect(()=>{D.current&&(D.current.scrollTop=0)},[H]);const T=d.chapters[H],M=T.translations[c]||T.translations["zh-CN"],U=T.id==="special-legacy-dusk",R=G=>{const te=B=>B.length===0?"":B.reduce((O,I,P)=>{if(P===0)return I;const ce=B[P-1],oe=ce[ce.length-1],J=I[0],de=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,fe=de.test(oe),w=de.test(J);return fe||w?O+I:O+" "+I},""),se=G.split(`
`),le=[];let ae=[],ve=!1,Q=[];const W=()=>{if(ae.length>0){const B=te(ae);let O=`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-ash-light transition-colors ${Me(_)}`;U?O=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-900 legacy-text":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-200 legacy-text":B.startsWith("零点")||B.startsWith("Point")||B.startsWith("零點")?O=b?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-zinc-600 font-bold ${Me(_)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.4)] ${Me(_)}`:B.startsWith("芷漓")||B.startsWith("Zeri")?O=b?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-pink-600 ${Me(_)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-pink-400 drop-shadow-[0_0_2px_rgba(244,114,182,0.4)] ${Me(_)}`:B.startsWith("泽洛")||B.startsWith("Zelo")||B.startsWith("澤洛")?O=b?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-600 ${Me(_)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-400 drop-shadow-[0_0_2px_rgba(96,165,250,0.4)] ${Me(_)}`:B.startsWith("???")||B.startsWith("Void")||B.includes("void")||B.includes("Void")?O=b?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-zinc-900 font-bold ${Me(_)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] ${Me(_)}`:(B.startsWith("终端")||B.startsWith("TERMINAL")||B.startsWith("終端"))&&(O=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-emerald-700 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-emerald-500 font-bold"),le.push(i.jsx(Ue,{children:i.jsx("p",{className:O,children:Cr(B)})},`p-${le.length}`)),ae=[]}};for(let B=0;B<se.length;B++){const O=se[B],I=O.trim(),P=I.includes("0000.2Void>>"),ce=I.includes("【插入结束】")||I.includes("【插入結束】")||I.includes("[INSERTION_END]");if(P){W(),ve=!0,Q=[],Q.push(O),ce&&(ve=!1,le.push(i.jsx(yf,{lines:[...Q]},`void-${B}`)),Q=[]);continue}if(ve){Q.push(O),ce&&(ve=!1,le.push(i.jsx(yf,{lines:[...Q]},`void-${B}`)),Q=[]);continue}const oe=I.match(/^\[\[BLUE::(.*?)\]\]$/),J=I.match(/^\[\[DANGER::(.*?)\]\]$/),de=I.match(/^\[\[VOID_VISION::(.*?)\]\]$/),fe=I==="[[DIVIDER]]",w=/\[\[IMAGE::(.*?)::(.*?)\]\]/.test(I);if(oe||J||de||fe||w||!I){if(W(),oe){const X=b?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-600 font-bold ${Me(_)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-blue-400 font-bold ${Me(_)}`;le.push(i.jsx(Ue,{children:i.jsx("p",{className:X,children:Cr(oe[1])})},`blue-${B}`))}else if(J){const X=b?`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-red-600 font-black animate-crash origin-left ${Me(_)}`:`mb-6 md:mb-8 text-justify indent-8 md:indent-12 text-sm md:text-base leading-relaxed text-red-500 font-black animate-crash origin-left ${Me(_)}`;le.push(i.jsx(Ue,{children:i.jsx("p",{className:X,children:Cr(J[1])})},`danger-${B}`))}else if(de){const X=de[1],me=X.includes("█");le.push(i.jsx(Ue,{className:"my-8 w-full max-w-2xl mx-auto",children:i.jsxs("div",{className:"relative border-y border-fuchsia-900/50 bg-black/80 p-6 backdrop-blur-sm overflow-hidden group select-none shadow-[0_0_30px_-10px_rgba(192,38,211,0.3)]",children:[i.jsx("div",{className:"absolute inset-0 bg-fuchsia-900/10 opacity-0 group-hover:opacity-20 transition-opacity"}),i.jsx("div",{className:"absolute top-0 left-0 w-0.5 h-full bg-fuchsia-500/50 box-shadow-[0_0_10px_rgba(217,70,239,0.8)]"}),i.jsx("div",{className:"absolute top-0 right-0 w-0.5 h-full bg-fuchsia-500/50 box-shadow-[0_0_10px_rgba(217,70,239,0.8)]"}),i.jsxs("div",{className:"flex items-center justify-between mb-4 border-b border-fuchsia-900/30 pb-2",children:[i.jsxs("div",{className:"text-[10px] font-mono text-fuchsia-600 tracking-[0.2em] flex items-center gap-2",children:[i.jsx(zf,{size:12,className:"animate-pulse"})," RETINAL_PROJECTION"]}),i.jsx("div",{className:"text-[10px] font-black font-mono bg-fuchsia-100 text-fuchsia-950 px-2 py-0.5 tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse",children:"SOURCE: VOID"})]}),i.jsx("div",{className:"relative z-10",children:i.jsxs("div",{className:`
                                        text-center leading-relaxed tracking-wide
                                        ${me?"text-fuchsia-500 font-mono text-sm md:text-base break-all animate-shake-violent opacity-70 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]":"text-white font-serif italic text-lg md:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"}
                                    `,children:['"',X,'"']})}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-white/30 shadow-[0_0_15px_rgba(255,255,255,1)] animate-scanline pointer-events-none mix-blend-overlay"})]})},`void-vis-${B}`))}else if(fe)le.push(i.jsx(Ue,{children:i.jsxs("div",{className:"my-12 flex items-center justify-center gap-4 opacity-50 select-none",children:[i.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"}),i.jsx(Ta,{size:16,className:"text-ash-light animate-pulse"}),i.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"})]})},`div-${B}`));else if(w){const X=I.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(X){const[me,xe,f]=X;le.push(i.jsx(Ue,{className:"my-12 flex flex-col items-center w-full",children:i.jsxs("div",{className:"relative border-4 border-ash-light p-2 bg-ash-dark max-w-full shadow-hard",children:[i.jsx("img",{src:xe,alt:f,className:"relative max-h-[600px] w-auto object-cover block grayscale-[20%] hover:grayscale-0 transition-all duration-500"}),i.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),i.jsxs("div",{className:"absolute bottom-4 right-4 bg-ash-light text-ash-black px-3 py-1 text-[10px] font-mono font-bold border-2 border-ash-black flex items-center gap-2 uppercase",children:[i.jsx(Xr,{size:12})," ",f]})]})},`img-${B}`))}}continue}ae.push(I)}return W(),le};return i.jsxs("div",{className:"flex h-full relative overflow-hidden bg-retro-paper text-zinc-950",children:[y&&i.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-[1px] z-10 md:hidden animate-fade-in",onClick:()=>h(!1)}),i.jsxs("aside",{className:`absolute md:relative z-20 h-full bg-ash-black border-r-4 border-ash-dark transition-all duration-300 ease-in-out flex flex-col shadow-2xl md:shadow-none ${y?"w-72 translate-x-0":"w-0 -translate-x-full md:w-0 md:-translate-x-0 overflow-hidden"}`,children:[i.jsxs("div",{className:`p-4 border-b-2 border-ash-gray bg-ash-black text-ash-light flex justify-between items-center shrink-0 ${U?"border-dashed":""}`,children:[i.jsxs("button",{onClick:p,className:"flex items-center gap-2 text-xs font-mono hover:text-ash-gray transition-colors",children:[i.jsx(qr,{size:14})," ",c==="en"?"FILE_LIST":"文件列表"]}),i.jsx("div",{className:"text-[10px] font-mono opacity-50 truncate max-w-[100px]",children:c==="en"?d.titleEn:d.title})]}),i.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:d.chapters.map((G,te)=>{var ae;const se=((ae=G.translations[c])==null?void 0:ae.title)||G.translations["zh-CN"].title,le=G.status==="locked";return i.jsxs("button",{onClick:()=>{le||(S(te),window.innerWidth<768&&h(!1))},disabled:le,className:`w-full text-left p-4 text-xs font-mono border-b border-ash-dark transition-none group relative overflow-hidden ${te===H?U?"bg-blue-950/50 text-blue-200 border-blue-500/50":"bg-ash-light text-ash-black":le?"bg-ash-dark/10 text-ash-gray cursor-not-allowed":"text-ash-gray hover:bg-ash-dark hover:text-ash-white"}`,children:[i.jsx("div",{className:"relative z-10",children:i.jsxs("div",{className:"flex justify-between items-start",children:[i.jsxs("span",{className:`font-bold truncate uppercase max-w-[85%] ${U&&te===H?"legacy-text":""}`,children:[te===H&&i.jsx("span",{className:"mr-2",children:">"}),se]}),le&&i.jsx(Qr,{size:12,className:"opacity-70"})]})}),le&&i.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.2)_5px,rgba(0,0,0,0.2)_10px)] pointer-events-none z-0"})]},G.id)})})]}),!y&&i.jsx("button",{onClick:()=>h(!0),className:"absolute top-4 left-4 z-10 p-2 bg-ash-black text-ash-light border-2 border-ash-light hover:bg-ash-light hover:text-ash-black shadow-hard",children:i.jsx(Df,{size:20})}),i.jsx("main",{ref:D,className:"flex-1 overflow-y-auto scroll-smooth relative bg-ash-black",children:i.jsx("div",{className:`max-w-4xl mx-auto min-h-full bg-ash-black border-l-0 md:border-l-2 md:border-r-2 border-ash-dark/50 shadow-2xl relative animate-slide-in ${U?"border-dashed border-blue-900/30":""}`,children:T.status==="locked"?i.jsx("div",{className:"h-[80vh] flex flex-col items-center justify-center text-ash-gray p-8 text-center",children:i.jsxs("div",{className:"mb-6 p-6 border-4 border-dashed border-red-900/50 rounded-none bg-red-950/10 w-full max-w-md",children:[i.jsx(Ta,{size:64,className:"text-red-800 mb-4 mx-auto animate-pulse"}),i.jsx("h2",{className:"text-2xl font-black uppercase text-red-700 tracking-widest mb-2",children:c==="en"?"DATA_CORRUPTED":"数据损坏"}),i.jsx("p",{className:"font-mono text-sm text-red-900/70 mb-6",children:"ERR_READ_SECTOR // UNRECOVERABLE"}),i.jsxs("div",{className:"border-t border-red-900/30 pt-4 w-full",children:[i.jsxs("div",{className:"flex items-center justify-center gap-2 text-red-500 font-mono text-xs animate-pulse",children:[i.jsx(Of,{size:14,className:"animate-spin"}),i.jsx("span",{children:c==="en"?"REPAIRING...":c==="zh-TW"?"正在修復中...":"正在修复中..."})]}),i.jsx("div",{className:"w-full bg-red-950/50 h-1 mt-2 overflow-hidden",children:i.jsx("div",{className:"h-full bg-red-800/60 w-1/3 animate-[pulse_1s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"})})]})]})}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`px-8 py-12 lg:px-16 border-b-4 border-double border-ash-gray bg-ash-black text-ash-light mt-12 ${U?"border-dashed border-blue-900/50":""}`,children:i.jsxs(Ue,{children:[i.jsxs("div",{className:`flex justify-between items-start mb-6 font-mono text-[10px] text-ash-gray uppercase tracking-widest ${U?"text-blue-500/70":""}`,children:[i.jsxs("span",{children:["SIDE_ARCHIVE // ",T.id]}),i.jsxs("span",{children:["FILE_INDEX: ",H+1]})]}),i.jsx("h1",{className:`text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight ${U?"legacy-text text-blue-200":""}`,children:M.title}),i.jsxs("div",{className:`flex items-center gap-2 text-xs font-mono text-ash-gray bg-ash-dark inline-block px-3 py-1 border border-ash-gray ${U?"border-blue-900/50 bg-blue-950/20 text-blue-400":""}`,children:[U?i.jsx(Cl,{size:12,className:"animate-pulse"}):i.jsx(ts,{size:12}),i.jsx("span",{children:T.date})]})]})}),i.jsx("article",{className:`px-8 py-12 lg:px-16 max-w-none text-ash-light font-serif leading-loose tracking-wide ${U?"font-mono":Me(_)}`,children:R(M.content)}),i.jsx("div",{className:`p-8 md:p-16 border-t-4 border-double border-ash-gray bg-ash-dark ${U?"border-dashed border-blue-900/30 bg-blue-950/10":""}`,children:i.jsxs("div",{className:"flex justify-between items-center gap-4",children:[i.jsxs("button",{onClick:()=>S(G=>Math.max(0,G-1)),disabled:H===0,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:[i.jsx(es,{size:16})," PREV"]}),i.jsxs("button",{onClick:()=>S(G=>Math.min(d.chapters.length-1,G+1)),disabled:H===d.chapters.length-1,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:["NEXT ",i.jsx(as,{size:16})]})]})})]})},T.id)})]})},Dx=({isOpen:d,onClose:x,language:p,isLightTheme:c})=>{const[b,_]=V.useState(Mn[0].id);if(!d)return null;const H=Mn.reduce((h,D)=>(h[D.group]||(h[D.group]=[]),h[D.group].push(D),h),{}),S=Mn.find(h=>h.id===b)||Mn[0],y=(S==null?void 0:S.translations[p])||(S==null?void 0:S.translations["zh-CN"]);return S?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[2px] p-4 animate-fade-in",onClick:x,children:i.jsxs("div",{className:`w-full max-w-3xl border-2 shadow-2xl relative overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh] md:h-auto md:max-h-[85vh] ${c?"bg-white border-zinc-300":"bg-ash-black border-ash-dark"}`,onClick:h=>h.stopPropagation(),children:[i.jsx("button",{onClick:x,className:`absolute top-2 right-2 p-2 md:hidden z-50 ${c?"text-zinc-500 hover:text-black":"text-ash-gray hover:text-ash-light"}`,children:i.jsx(Rr,{size:24})}),i.jsxs("div",{className:`w-full md:w-64 border-b-2 md:border-b-0 md:border-r-2 p-4 flex flex-col gap-2 overflow-y-auto shrink-0 no-scrollbar max-h-48 md:max-h-full ${c?"bg-zinc-50 border-zinc-200":"bg-ash-dark border-ash-gray/30"}`,children:[i.jsxs("div",{className:`text-[10px] font-mono uppercase mb-4 pb-2 border-b flex items-center gap-2 sticky top-0 z-10 ${c?"text-zinc-500 border-zinc-200 bg-zinc-50":"text-ash-gray border-ash-gray/30 bg-ash-dark"}`,children:[i.jsx(kf,{size:12})," ROOT/PERSONNEL_DB"]}),Object.entries(H).map(([h,D])=>i.jsxs("div",{className:"mb-2",children:[i.jsxs("div",{className:`flex items-center gap-2 text-[10px] font-bold mb-1 px-1 ${c?"text-zinc-600":"text-ash-light/70"}`,children:[i.jsx("span",{className:"opacity-50",children:"├─"}),i.jsx(Af,{size:10,className:"opacity-50"}),h]}),i.jsx("div",{className:`flex flex-col border-l border-dashed ml-3 pl-2 gap-1 py-1 ${c?"border-zinc-300":"border-ash-gray/20"}`,children:D.map(T=>{const M=T.translations[p].name,U=b===T.id;let R="";return c?R=U?"text-black bg-zinc-200 font-bold pl-3":"text-zinc-500 hover:text-black hover:bg-zinc-100 hover:pl-3":R=U?"text-ash-light bg-ash-gray/20 font-bold pl-3":"text-ash-gray hover:text-ash-light hover:bg-ash-gray/10 hover:pl-3",i.jsxs("button",{onClick:()=>_(T.id),className:`text-left text-xs font-mono py-1 px-2 flex items-center gap-2 transition-all duration-200 relative group/item ${R}`,children:[i.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${T.isLocked?"bg-red-500/50":"bg-green-500/50"} ${U?"animate-pulse":""}`}),i.jsx("span",{className:"truncate",children:M}),T.isLocked&&i.jsx(Dn,{size:8,className:"ml-auto opacity-50"}),U&&i.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-0.5 ${c?"bg-black":"bg-ash-light"}`})]},T.id)})})]},h))]}),i.jsxs("div",{className:`flex-1 overflow-y-auto p-6 md:p-8 relative ${c?"bg-white":"bg-ash-black"}`,children:[i.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-5 pointer-events-none",children:i.jsx(Cf,{size:200,strokeWidth:1})}),i.jsx("button",{onClick:x,className:`absolute top-2 right-2 p-2 hidden md:block z-20 ${c?"text-zinc-400 hover:text-zinc-900":"text-ash-gray hover:text-ash-light"}`,children:i.jsx(Rr,{size:20})}),S.isLocked?i.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center opacity-80 min-h-[200px]",children:[i.jsxs("div",{className:`border p-8 max-w-xs relative ${c?"border-red-200 bg-red-50":"border-red-900/50 bg-red-950/10"}`,children:[i.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-t border-l border-red-800"}),i.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 border-t border-r border-red-800"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-800"}),i.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-800"}),i.jsx(Qr,{size:48,className:"text-red-800 mx-auto mb-4 animate-pulse"}),i.jsx("h2",{className:"text-xl font-black text-red-700 uppercase tracking-widest mb-1",children:"ACCESS DENIED"}),i.jsx("p",{className:"text-[10px] font-mono text-red-900 uppercase",children:"Encrypted File // Auth Missing"})]}),i.jsxs("div",{className:`mt-8 font-mono text-xs ${c?"text-zinc-400":"text-ash-gray/50"}`,children:[">"," ID: ",S.id.toUpperCase(),i.jsx("br",{}),">"," STATUS: LOCKED"]})]}):i.jsxs("div",{className:"relative z-10 space-y-6 animate-fade-in pt-4 md:pt-0",children:[i.jsxs("div",{className:`border-b pb-4 ${c?"border-zinc-200":"border-ash-gray/30"}`,children:[i.jsx("h2",{className:`text-2xl md:text-3xl font-black uppercase tracking-tighter mb-1 ${c?"text-zinc-900":"text-ash-light"}`,children:y.name}),i.jsxs("div",{className:`flex flex-wrap items-center gap-2 text-xs font-mono ${c?"text-zinc-500":"text-ash-gray"}`,children:[i.jsx("span",{className:`px-1 border ${c?"bg-zinc-100 border-zinc-300 text-zinc-700":"text-ash-light bg-ash-dark border-ash-gray/50"}`,children:y.enName}),i.jsxs("span",{children:["// ",y.role]}),i.jsxs("span",{className:"ml-auto opacity-50",children:["ID: ",S.id.toUpperCase()]})]})]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:y.tags.map(h=>i.jsxs("span",{className:`px-2 py-1 border rounded-full text-[10px] font-mono ${c?"border-zinc-300 text-zinc-600":"border-ash-gray/50 text-ash-gray"}`,children:["#",h]},h))}),y.quote&&i.jsxs("div",{className:`border-l-2 pl-3 py-1 text-sm italic font-serif ${c?"border-zinc-400 text-zinc-600":"border-ash-light text-ash-light/80"}`,children:['"',y.quote,'"']}),i.jsx("div",{className:`space-y-4 text-sm font-mono leading-relaxed border-t border-dashed pt-4 pb-8 md:pb-0 ${c?"text-zinc-700 border-zinc-200":"text-ash-gray/90 border-ash-gray/30"}`,children:y.description.map((h,D)=>{const T=h.split("**");return i.jsx("div",{className:h.startsWith("•")||h.startsWith("> ")?"pl-4":"",children:T.map((M,U)=>U%2===1?i.jsx("span",{className:`font-bold px-1 ${c?"bg-zinc-200 text-black":"text-ash-light bg-ash-dark/50"}`,children:M},U):M)},D)})})]})]})]})}):null},Ox=({onComplete:d,language:x,volumeId:p})=>{const[c,b]=V.useState(0),_=p==="VOL_MEMORIES";V.useEffect(()=>{const S=setTimeout(()=>b(1),500),y=setTimeout(()=>b(2),2e3),h=setTimeout(()=>b(3),3500),D=setTimeout(d,4e3);return()=>{clearTimeout(S),clearTimeout(y),clearTimeout(h),clearTimeout(D)}},[d]);const H={"zh-CN":{accessing:"访问记忆扇区...",decompressing:"解压碎片数据",syncing:"神经同步中",complete:"重构完成",rain_init:"正在回溯时间轴...",rain_mem:"检索关键节点：[雨]",rain_sync:"VoidOS部署中"},"zh-TW":{accessing:"訪問記憶扇區...",decompressing:"解壓碎片數據",syncing:"神經同步中",complete:"重構完成",rain_init:"正在回溯時間軸...",rain_mem:"檢索關鍵節點：[雨]",rain_sync:"VoidOS部署中"},en:{accessing:"ACCESSING_MEMORY_SECTOR...",decompressing:"DECOMPRESSING_FRAGMENTS",syncing:"NEURAL_SYNC_IN_PROGRESS",complete:"RECONSTRUCTION_COMPLETE",rain_init:"REWINDING_TIMELINE...",rain_mem:"SEARCHING_NODE: [RAIN]",rain_sync:"DEPLOYING_VOID_OS"}}[x];return _?i.jsxs("div",{className:"fixed inset-0 z-[99999] bg-slate-950 text-cyan-100 overflow-hidden flex flex-col items-center justify-center font-mono cursor-none",children:[i.jsx("button",{onClick:d,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-cyan-400/30 text-cyan-400 px-2 py-1 hover:bg-cyan-400 hover:text-slate-900 transition-colors opacity-70 hover:opacity-100 cursor-pointer",children:"[SKIP_MEMORY]"}),i.jsx("div",{className:`absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black transition-opacity duration-1000 ${c>0?"opacity-100":"opacity-0"}`}),i.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-40",children:Array.from({length:40}).map((S,y)=>i.jsx("div",{className:"absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-data-rain",style:{height:`${30+Math.random()*50}px`,left:`${Math.random()*100}%`,top:"-20%",animationDuration:`${.8+Math.random()*1.5}s`,animationDelay:`${Math.random()*2}s`}},y))}),i.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-12",children:[i.jsxs("div",{className:"relative w-48 h-48 flex items-center justify-center",children:[i.jsx("div",{className:`absolute inset-0 border border-cyan-500/20 rounded-full transition-all duration-1000 ${c>=1?"scale-100 opacity-100 rotate-180":"scale-50 opacity-0 rotate-0"}`}),i.jsx("div",{className:`absolute inset-4 border border-cyan-500/30 rounded-full border-dashed transition-all duration-1000 ${c>=1?"scale-100 opacity-100 -rotate-180":"scale-90 opacity-0 rotate-0"}`}),i.jsx("div",{className:`transition-all duration-700 absolute ${c===1?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:i.jsx(Kb,{size:48,className:"text-cyan-400"})}),i.jsx("div",{className:`transition-all duration-700 absolute ${c===2?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:i.jsx(Tf,{size:56,className:"text-cyan-200"})}),i.jsx("div",{className:`transition-all duration-700 absolute ${c===3?"scale-125 opacity-100 blur-sm":"scale-50 opacity-0"}`,children:i.jsx(Rg,{size:64,className:"text-white fill-white/20"})})]}),i.jsxs("div",{className:"text-center space-y-4 h-16",children:[i.jsxs("div",{className:"text-xl md:text-2xl font-light tracking-[0.3em] text-cyan-100/90 font-serif italic",children:[c===0&&"",c===1&&H.rain_init,c===2&&H.rain_mem,c===3&&H.rain_sync]}),i.jsx("div",{className:"w-32 h-[1px] bg-cyan-900/50 mx-auto overflow-hidden",children:i.jsx("div",{className:"h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 ease-linear",style:{width:`${c/3*100}%`}})})]})]}),i.jsx("div",{className:`absolute inset-0 bg-white pointer-events-none transition-opacity duration-1000 ease-in-out ${c===3?"opacity-100":"opacity-0"}`})]}):i.jsxs("div",{className:"fixed inset-0 z-[99999] bg-ash-black text-ash-light overflow-hidden flex flex-col items-center justify-center font-mono cursor-none",children:[i.jsx("button",{onClick:d,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-blue-400/30 text-blue-400 px-2 py-1 hover:bg-blue-400 hover:text-black transition-colors opacity-70 hover:opacity-100 cursor-pointer",children:"[SKIP_DIVE]"}),i.jsx("div",{className:`absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black transition-opacity duration-1000 ${c>0?"opacity-100":"opacity-0"}`}),i.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-30",children:Array.from({length:20}).map((S,y)=>i.jsx("div",{className:"absolute top-[-100%] text-[10px] text-blue-500/50 writing-vertical-rl animate-data-rain",style:{left:`${Math.random()*100}%`,animationDuration:`${1+Math.random()*2}s`,animationDelay:`${Math.random()*1}s`,fontSize:`${10+Math.random()*8}px`},children:Math.random()>.5?"010101":"A9F3C2"},y))}),i.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-8",children:[i.jsxs("div",{className:"relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center",children:[c>=1&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"absolute inset-0 border border-blue-500/30 rounded-full animate-ping",style:{animationDuration:"2s"}}),i.jsx("div",{className:"absolute inset-0 border border-cyan-400/20 rounded-full animate-ping",style:{animationDuration:"2s",animationDelay:"0.5s"}})]}),i.jsxs("div",{className:`transition-all duration-700 ${c===2?"scale-125 text-white":"scale-100 text-blue-400"}`,children:[c===0&&i.jsx(Ir,{size:48,className:"animate-pulse"}),c===1&&i.jsx(Db,{size:48,className:"animate-bounce"}),c>=2&&i.jsx(_f,{size:64})]})]}),i.jsxs("div",{className:"text-center space-y-2",children:[i.jsxs("div",{className:"text-xl md:text-3xl font-black uppercase tracking-widest text-blue-200",children:[c===0&&H.accessing,c===1&&H.decompressing,c>=2&&H.syncing]}),i.jsx("div",{className:"w-48 md:w-64 h-1 bg-blue-900/50 mx-auto mt-4 overflow-hidden",children:i.jsx("div",{className:"h-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all duration-300 ease-linear",style:{width:`${c/3*100}%`}})}),i.jsxs("div",{className:"text-[10px] text-blue-500/60 font-mono mt-1",children:["SECTOR_MEM // ",c*33,"%"]})]})]}),i.jsx("div",{className:`absolute inset-0 bg-white pointer-events-none transition-opacity duration-500 ${c===3?"opacity-100":"opacity-0"}`})]})},Rx=({language:d,isLightTheme:x,onVolumeChange:p,readerFont:c})=>{const[b,_]=V.useState("volumes"),[H,S]=V.useState(null),[y,h]=V.useState(0),[D,T]=V.useState(!1),[M,U]=V.useState(!1),R=le=>{S(le),p(le.id),U(!0)},G=()=>{U(!1),_("chapters")},te=le=>{h(le),_("reader")},se=()=>{S(null),p(null),_("volumes")};return M&&H?i.jsx(Ox,{onComplete:G,language:d,volumeId:H.id}):b==="volumes"?i.jsxs(i.Fragment,{children:[i.jsx(Ax,{volumes:kx,onSelectVolume:R,onOpenCharModal:()=>T(!0),language:d,isLightTheme:x}),i.jsx(Dx,{isOpen:D,onClose:()=>T(!1),language:d,isLightTheme:x})]}):b==="chapters"&&H?i.jsx(Mx,{volume:H,onBack:se,onSelectChapter:te,language:d,isLightTheme:x}):b==="reader"&&H?i.jsx(Cx,{volume:H,initialChapterIndex:y,onBack:()=>_("chapters"),language:d,isLightTheme:x,readerFont:c}):null},Ux=({onComplete:d,isNormalBoot:x=!1,language:p})=>{const[c,b]=V.useState([]),[_,H]=V.useState("BIOS"),[S,y]=V.useState(!1);V.useEffect(()=>{const D=p==="zh-CN"?">> 提示：开启暗黑模式阅读体验更佳":p==="zh-TW"?">> 提示：開啟暗黑模式閱讀體驗更佳":">> TIP: DARK MODE RECOMMENDED FOR BEST EXPERIENCE";if(x){const U=["NOVA_BIOS v.3.1.4 (STABLE)","VERIFYING_INTEGRITY... OK","LOADING_USER_PROFILE... FOUND",D,"CONNECTING_TO_ARCHIVE... ESTABLISHED","DECRYPTING_DATA_STREAMS...","WELCOME_BACK_OPERATOR."];let R=0;U.forEach(G=>{R+=150+Math.random()*100,setTimeout(()=>{b(te=>[...te,G])},R)}),setTimeout(()=>{y(!0)},R+500);return}const T=["NOVA_BIOS v.0.0.1a (LEGACY)","CHECKING_MEM... OK","CHECKING_CPU... OK","LOADING_KERNEL...","MOUNTING_VIRTUAL_DRIVES..."];let M=0;T.forEach((U,R)=>{M+=Math.random()*200,setTimeout(()=>{b(G=>[...G,U])},M)}),setTimeout(()=>{H("ERROR");const U=["CRITICAL_ERROR: SECTOR 0x00F21 CORRUPTED","KERNEL_PANIC: UNEXPECTED_INTERRUPT","REALITY_ANCHOR... LOST","ATTEMPTING_DUMP...","DUMP_FAILED.","SYSTEM_HALTED."];let R=0;U.forEach((G,te)=>{R+=150,setTimeout(()=>{b(se=>[...se,`>> ${G}`])},R)})},M+500),setTimeout(()=>{H("RECOVERY"),b([]);const U=["INITIATING_SAFE_MODE...","BYPASSING_DAMAGED_SECTORS...","LOADING_BACKUP_CONFIG...",D,"RESTORING_USER_INTERFACE...","SYSTEM RESTORED."];let R=0;U.forEach(G=>{R+=800,setTimeout(()=>{b(te=>[...te,G])},R)}),setTimeout(()=>{y(!0)},R+500)},M+2500)},[d,x,p]);const h=()=>{S&&d()};return _==="ERROR"?i.jsxs("div",{className:"fixed inset-0 bg-black flex flex-col items-center justify-center p-8 overflow-hidden animate-crash z-[100]",children:[i.jsx("div",{className:"absolute inset-0 bg-red-900/20 z-0"}),i.jsx(Cl,{size:128,className:"text-red-500 mb-8 animate-ping"}),i.jsx("h1",{className:"text-6xl md:text-9xl font-black text-red-500 glitch-text-heavy mb-4","data-text":"FATAL_ERROR",children:"FATAL_ERROR"}),i.jsx("div",{className:"font-mono text-red-400 text-sm md:text-xl text-center max-w-2xl space-y-1",children:c.slice(-6).map((D,T)=>i.jsx("div",{className:"bg-red-950/50 px-2",children:D},T))}),i.jsx("div",{className:"mt-12 w-full max-w-md h-2 bg-red-900 overflow-hidden",children:i.jsx("div",{className:"h-full bg-red-500 w-full animate-[glitch_0.2s_infinite]"})})]}):i.jsxs("div",{className:`fixed inset-0 bg-black text-green-500 p-8 pb-32 md:pb-8 font-mono text-xs md:text-sm overflow-hidden flex flex-col justify-end z-[100] transition-colors duration-500 touch-manipulation ${_==="RECOVERY"?"text-amber-500":""} ${S?"cursor-pointer hover:bg-green-950/10":""}`,onClick:h,children:[i.jsxs("div",{className:"mb-auto opacity-50 flex items-center gap-4",children:[x?i.jsx(Xb,{className:"text-green-500"}):_==="BIOS"?i.jsx(ls,{className:"animate-pulse"}):i.jsx(Hf,{className:"animate-spin"}),i.jsxs("span",{children:["NOVA_LABS_TERMINAL_ACCESS // ",x?"NORMAL_BOOT":_]})]}),i.jsxs("div",{className:"space-y-1 w-full max-w-4xl mx-auto",children:[c.map((D,T)=>D.includes("开启暗黑模式")||D.includes("開啟暗黑模式")||D.includes("DARK MODE RECOMMENDED")?i.jsx("div",{className:"animate-fade-in my-6 w-full text-center",children:i.jsx("div",{className:"inline-block px-4 py-2 border-y-2 border-dashed border-amber-500 bg-amber-900/20 text-amber-400 text-sm md:text-lg font-bold tracking-widest animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.3)]",children:D.replace(/^>>\s*/,"")})},T):i.jsxs("div",{className:"animate-fade-in break-words",children:[i.jsxs("span",{className:"opacity-50 mr-2",children:["[",new Date().toLocaleTimeString(),"]"]}),D]},T)),!S&&i.jsx("div",{className:"h-4 w-3 bg-current animate-pulse inline-block mt-2"}),S&&i.jsxs("div",{className:"mt-8 py-4 border-t border-green-500/30 animate-fade-in",children:[i.jsxs("div",{className:"flex items-center gap-3 text-lg md:text-xl font-bold text-green-400 animate-pulse",children:[i.jsx(jg,{className:"animate-bounce"}),i.jsxs("span",{children:["> ",p==="en"?"CLICK_TO_INITIALIZE_SYSTEM":"点击屏幕进入系统"," ",i.jsx("span",{className:"animate-[blink_1s_infinite]",children:"_"})]})]}),i.jsx("div",{className:"text-[10px] text-green-500/50 mt-1 uppercase",children:"AWAITING_USER_INPUT // AUDIO_CONTEXT_READY"})]})]}),_==="RECOVERY"&&i.jsx("div",{className:"absolute inset-0 pointer-events-none border-[20px] border-amber-900/20 animate-pulse"})]})},Hx=({onComplete:d,language:x,setLanguage:p,crtEnabled:c,setCrtEnabled:b,isLightTheme:_,setIsLightTheme:H,bgmPlaying:S,setBgmPlaying:y,bgmVolume:h,setBgmVolume:D,readerFont:T,setReaderFont:M})=>{const[U,R]=V.useState(0),[G,te]=V.useState(!1),[se,le]=V.useState(0),ae={"zh-CN":{title:"系统恢复控制台",subtitle:"检测到非核心设置丢失。请重新配置用户偏好。",langSelect:"选择界面语言 // SELECT_LANGUAGE",visuals:"视觉子系统",audio:"音频子系统",theme:"主题模式",continue:"应用设置",reboot:"重新启动系统",safeMode:"安全模式已激活",back:"返回",rebooting:"正在重启系统...",applying:"应用配置..."},"zh-TW":{title:"系統恢復控制台",subtitle:"檢測到非核心設置丟失。請重新配置用戶偏好。",langSelect:"選擇界面語言 // SELECT_LANGUAGE",visuals:"視覺子系統",audio:"音頻子系統",theme:"主題模式",continue:"應用設置",reboot:"重新啟動系統",safeMode:"安全模式已激活",back:"返回",rebooting:"正在重啟系統...",applying:"應用配置..."},en:{title:"SYSTEM_RECOVERY_CONSOLE",subtitle:"NON-CORE SETTINGS CORRUPTION DETECTED. RECONFIGURE PREFERENCES.",langSelect:"SELECT LANGUAGE",visuals:"VISUAL_SUBSYSTEM",audio:"AUDIO_SUBSYSTEM",theme:"THEME_MODE",continue:"APPLY_SETTINGS",reboot:"REBOOT_SYSTEM",safeMode:"SAFE_MODE_ACTIVE",back:"BACK",rebooting:"SYSTEM_REBOOT_INITIATED...",applying:"WRITING_CONFIG..."}}[x],ve=()=>{te(!0);let Q=0;const W=setInterval(()=>{Q+=Math.random()*5,Q>100&&(Q=100,clearInterval(W),setTimeout(d,500)),le(Q)},100)};return i.jsxs("div",{className:"min-h-screen bg-zinc-950 text-amber-500 font-mono p-6 flex flex-col items-center justify-center relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-2 bg-amber-500/20 animate-pulse"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-full h-2 bg-amber-500/20 animate-pulse"}),i.jsxs("div",{className:"max-w-3xl w-full border-2 border-amber-600/50 bg-black/80 backdrop-blur-sm p-8 shadow-[0_0_20px_rgba(245,158,11,0.2)] relative animate-slide-in",children:[i.jsxs("div",{className:"absolute -top-3 left-4 bg-black px-2 text-amber-500 font-bold border border-amber-600/50 flex items-center gap-2",children:[i.jsx(Qr,{size:14,className:"animate-pulse"}),ae.safeMode]}),i.jsxs("header",{className:"mb-10 text-center border-b border-dashed border-amber-800 pb-6",children:[i.jsx("h1",{className:"text-3xl font-black tracking-tighter mb-2 text-amber-500 glitch-text-heavy","data-text":ae.title,children:ae.title}),i.jsx("p",{className:"text-amber-700 text-xs md:text-sm uppercase tracking-widest",children:ae.subtitle})]}),G?i.jsx("div",{className:"animate-fade-in py-12 flex flex-col items-center justify-center w-full",children:i.jsxs("div",{className:"w-full max-w-md space-y-2 mb-8",children:[i.jsxs("div",{className:"flex justify-between text-xs font-mono uppercase text-amber-500/80",children:[i.jsx("span",{children:ae.rebooting}),i.jsxs("span",{children:[Math.floor(se),"%"]})]}),i.jsx("div",{className:"h-4 bg-amber-900/30 border border-amber-800 p-0.5",children:i.jsx("div",{className:"h-full bg-amber-500 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(245,158,11,0.5)]",style:{width:`${se}%`},children:i.jsx("div",{className:"w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_75%,transparent_75%,transparent)] bg-[length:10px_10px]"})})}),i.jsx("div",{className:"text-[10px] text-amber-700 font-mono h-4",children:se<30?"> KILLING_PROCESSES...":se<60?"> FLUSHING_MEMORY_BUFFERS...":se<90?"> WRITING_NEW_CONFIG...":"> STARTING_KERNEL..."})]})}):i.jsxs("div",{className:"space-y-8",children:[i.jsxs("div",{className:`transition-opacity duration-500 ${U===0?"opacity-100":"opacity-50 blur-[1px] pointer-events-none"}`,children:[i.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-4 uppercase flex items-center gap-2",children:[i.jsx(Cn,{size:14})," ",ae.langSelect]}),i.jsx("div",{className:"grid grid-cols-3 gap-4",children:["zh-CN","zh-TW","en"].map(Q=>i.jsx("button",{onClick:()=>{p(Q),R(1)},className:`py-4 border-2 font-bold text-lg transition-all ${x===Q?"border-amber-500 bg-amber-500/10 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]":"border-amber-900/50 text-amber-800 hover:border-amber-700 hover:text-amber-600"}`,children:Q==="en"?"ENGLISH":Q==="zh-CN"?"简体中文":"繁體中文"},Q))})]}),U>=1&&i.jsxs("div",{className:"animate-fade-in space-y-6",children:[i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-2 uppercase flex items-center gap-2",children:[i.jsx(Or,{size:14})," ",ae.visuals]}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(Gr,{value:T,onChange:M,language:x,isSetupMode:!0}),i.jsx(Hr,{value:c,onChange:b,isSetupMode:!0,language:x}),i.jsx(Vr,{isSetupMode:!0,language:x}),i.jsx(Lr,{value:_,onChange:H,isSetupMode:!0})]})]}),i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-2 uppercase flex items-center gap-2",children:[i.jsx(Vf,{size:14})," ",ae.audio]}),i.jsx(Ur,{isSetupMode:!0,isPlaying:S,onToggle:()=>y(!S),volume:h,onVolumeChange:D}),i.jsxs("p",{className:"text-[10px] text-amber-800 mt-2 leading-tight",children:["* ",x==="en"?"Audio hardware detected. Enable for immersion.":"检测到音频硬件。建议开启以获得沉浸体验。"]})]})]}),i.jsxs("div",{className:"pt-6 mt-6 border-t border-dashed border-amber-800 flex justify-between items-center",children:[i.jsxs("button",{onClick:()=>R(0),className:"group px-4 py-2 text-amber-800 hover:text-amber-500 font-mono font-bold text-xs uppercase flex items-center gap-2 transition-colors",children:[i.jsx(es,{size:16,className:"group-hover:-translate-x-1 transition-transform"}),ae.back]}),i.jsx("button",{onClick:ve,className:"group relative px-8 py-3 bg-amber-500 text-black font-bold font-mono uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-[4px_4px_0_rgba(70,20,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",children:i.jsxs("span",{className:"flex items-center gap-2",children:[ae.reboot," ",i.jsx(Dr,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})})]})]})]}),i.jsx("div",{className:"absolute bottom-2 right-2 text-[10px] text-amber-900 font-mono",children:"ERR_CODE: 0x88492 // RECOVERY_MODE"})]})]})},Lx=()=>{const[d,x]=V.useState({x:0,y:0}),[p,c]=V.useState(!1),[b,_]=V.useState(!1),[H,S]=V.useState(!1);return V.useEffect(()=>{const y=window.matchMedia("(pointer: fine)");if((U=>{U.matches?S(!0):S(!1)})(y),y.matches&&S(!0),!y.matches)return;const D=U=>{x({x:U.clientX,y:U.clientY});let R=U.target;if(R&&R.nodeType===Node.TEXT_NODE&&(R=R.parentElement),!R||R.nodeType!==1){c(!1);return}const G=R;try{const se=window.getComputedStyle(G).cursor==="pointer"||G.tagName==="BUTTON"||G.tagName==="A"||G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.tagName==="SELECT"||G.closest("button")!==null||G.closest("a")!==null;c(se)}catch{c(!1)}},T=()=>_(!0),M=()=>_(!1);return window.addEventListener("mousemove",D),window.addEventListener("mousedown",T),window.addEventListener("mouseup",M),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mousedown",T),window.removeEventListener("mouseup",M)}},[]),H?i.jsx("div",{className:"fixed top-0 left-0 pointer-events-none z-[99999] text-white mix-blend-difference",style:{transform:`translate3d(${d.x}px, ${d.y}px, 0)`},children:i.jsx("div",{className:`transition-transform duration-100 ease-out ${b?"scale-75":"scale-100"}`,children:p?i.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2",children:i.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:[i.jsxs("g",{className:"origin-center animate-[spin_8s_linear_infinite]",children:[i.jsx("path",{d:"M4 4H9M4 4V9",stroke:"currentColor",strokeWidth:"1.5"}),i.jsx("path",{d:"M20 4H15M20 4V9",stroke:"currentColor",strokeWidth:"1.5"}),i.jsx("path",{d:"M4 20H9M4 20V15",stroke:"currentColor",strokeWidth:"1.5"}),i.jsx("path",{d:"M20 20H15M20 20V15",stroke:"currentColor",strokeWidth:"1.5"})]}),i.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"}),i.jsx("g",{className:"origin-center opacity-50",children:i.jsx("path",{d:"M12 7V9M12 15V17M7 12H9M15 12H17",stroke:"currentColor",strokeWidth:"1"})})]})}):i.jsx("div",{className:"-translate-x-[2px] -translate-y-[2px]",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]",children:i.jsx("path",{d:"M2 2L9 19L12.5 11.5L20 8L2 2Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})})})}):null},Pi={main:["https://lz.qaiu.top/parser?url=https://sbcnm.lanzoum.com/i5OIw3dk1rte","https://cik07-cos.7moor-fs2.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/fd991fcc1f737774/main.mp3"],daily:["https://lz.qaiu.top/parser?url=https://sbcnm.lanzoum.com/i5TeC3dk1q1a","https://cik07-cos.7moor-fs2.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/6f611d085fec7cfe/daily.mp3"],x:["https://lz.qaiu.top/parser?url=https://sbcnm.lanzoum.com/iekyU3dk1sgh","https://cik07-cos.7moor-fs2.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/c61f71beeec593f0/x.mp3"]},vf="nova_labs_config_v6",Nf={language:"zh-CN",crtEnabled:!0,isLightTheme:!1,setupCompleted:!1,bgmPlaying:!0,bgmVolume:.15,readerFont:"custom-02"},Vx=()=>{const x=(()=>{try{const L=localStorage.getItem(vf);if(L)return{...Nf,...JSON.parse(L)}}catch(L){console.warn("Failed to load config",L)}return Nf})(),[p,c]=V.useState("BOOT"),[b,_]=V.useState("home"),[H,S]=V.useState(0),[y,h]=V.useState(null),[D,T]=V.useState(!1),[M,U]=V.useState(x.language),[R,G]=V.useState(x.crtEnabled),[te,se]=V.useState(x.isLightTheme),[le,ae]=V.useState(x.setupCompleted),[ve,Q]=V.useState(x.readerFont),[W,B]=V.useState(x.bgmPlaying),[O,I]=V.useState(x.bgmVolume);V.useEffect(()=>{const L=document.getElementById("initial-loader");L&&setTimeout(()=>{L.style.opacity="0",L.style.pointerEvents="none",setTimeout(()=>L.remove(),500)},300)},[]),V.useEffect(()=>{const L={language:M,crtEnabled:R,isLightTheme:te,setupCompleted:le,bgmPlaying:W,bgmVolume:O,readerFont:ve};localStorage.setItem(vf,JSON.stringify(L))},[M,R,te,le,W,O,ve]);const P=()=>{lx(),c(le?"READY":"SETUP")},ce=()=>{ae(!0),c("READY")},oe=L=>{_(L),L!=="sidestories"&&h(null)},J=()=>{T(!0)},de=()=>{_("reader"),T(!1)},fe=L=>{L==="reader"?J():_(L)},w=V.useMemo(()=>b==="sidestories"?y==="VOL_DAILY"?{sources:Pi.daily,title:"TIMELINE DAILY",composer:"NOVA_OST"}:y==="VOL_MEMORIES"?{sources:Pi.x,title:"神隠しの真相",composer:"しゃろう"}:{sources:Pi.main,title:"TIMELINE MAIN",composer:"NOVA_OST"}:{sources:Pi.main,title:"TIMELINE MAIN",composer:"NOVA_OST"},[b,y]);return i.jsxs(i.Fragment,{children:[i.jsx(Lx,{}),p==="BOOT"&&i.jsx(Ux,{onComplete:P,isNormalBoot:le,language:M}),p==="SETUP"&&i.jsx(Hx,{onComplete:ce,language:M,setLanguage:U,crtEnabled:R,setCrtEnabled:G,isLightTheme:te,setIsLightTheme:se,bgmPlaying:W,setBgmPlaying:B,bgmVolume:O,setBgmVolume:I,readerFont:ve,setReaderFont:Q}),D&&i.jsx(Yf,{onComplete:de,language:M}),p==="READY"&&i.jsxs("div",{className:"flex flex-col lg:flex-row h-screen supports-[height:100dvh]:h-[100dvh] bg-ash-black text-ash-light overflow-hidden font-mono selection:bg-ash-light selection:text-ash-black cursor-none",children:[i.jsx("div",{className:"noise-overlay"}),i.jsx("div",{className:"absolute inset-0 z-0 bg-grid-hard pointer-events-none opacity-50"}),i.jsx(ix,{activeTab:b,setActiveTab:oe,language:M,setLanguage:U,crtEnabled:R,setCrtEnabled:G,isLightTheme:te,setIsLightTheme:se,bgmPlaying:W,setBgmPlaying:B,bgmVolume:O,setBgmVolume:I,readerFont:ve,setReaderFont:Q,audioSources:w.sources,trackTitle:w.title,trackComposer:w.composer}),i.jsx("main",{className:"flex-1 h-full overflow-hidden relative z-10 border-l-2 border-ash-dark",children:i.jsxs("div",{className:"h-full overflow-y-auto pb-20 lg:pb-0 bg-ash-black/90 animate-slide-in",children:[b==="home"&&i.jsx(sx,{onNavigate:fe,language:M,setLanguage:U}),b==="characters"&&i.jsx(xx,{language:M}),b==="database"&&i.jsx(px,{language:M}),b==="reader"&&i.jsx(yx,{currentIndex:H,onChapterChange:S,language:M,isLightTheme:te,readerFont:ve}),b==="sidestories"&&i.jsx(Rx,{language:M,isLightTheme:te,onVolumeChange:h,readerFont:ve})]},b)})]})]})},qf=document.getElementById("root");if(!qf)throw new Error("Could not find root element to mount to");const Bx=Sb.createRoot(qf);Bx.render(i.jsx(Sf.StrictMode,{children:i.jsx(Vx,{})}));
