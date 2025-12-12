(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))f(g);new MutationObserver(g=>{for(const N of g)if(N.type==="childList")for(const P of N.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&f(P)}).observe(document,{childList:!0,subtree:!0});function u(g){const N={};return g.integrity&&(N.integrity=g.integrity),g.referrerPolicy&&(N.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?N.credentials="include":g.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function f(g){if(g.ep)return;g.ep=!0;const N=u(g);fetch(g.href,N)}})();function Nc(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var Oi={exports:{}},kr={},Mi={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function Lh(){if(Ju)return le;Ju=1;var h=Symbol.for("react.element"),w=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),P=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function k(m){return m===null||typeof m!="object"?null:(m=E&&m[E]||m["@@iterator"],typeof m=="function"?m:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,O={};function L(m,S,ne){this.props=m,this.context=S,this.refs=O,this.updater=ne||C}L.prototype.isReactComponent={},L.prototype.setState=function(m,S){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,S,"setState")},L.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function te(){}te.prototype=L.prototype;function re(m,S,ne){this.props=m,this.context=S,this.refs=O,this.updater=ne||C}var ie=re.prototype=new te;ie.constructor=re,A(ie,L.prototype),ie.isPureReactComponent=!0;var Q=Array.isArray,U=Object.prototype.hasOwnProperty,K={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function oe(m,S,ne){var ae,ue={},he=null,ye=null;if(S!=null)for(ae in S.ref!==void 0&&(ye=S.ref),S.key!==void 0&&(he=""+S.key),S)U.call(S,ae)&&!$.hasOwnProperty(ae)&&(ue[ae]=S[ae]);var ge=arguments.length-2;if(ge===1)ue.children=ne;else if(1<ge){for(var Ne=Array(ge),et=0;et<ge;et++)Ne[et]=arguments[et+2];ue.children=Ne}if(m&&m.defaultProps)for(ae in ge=m.defaultProps,ge)ue[ae]===void 0&&(ue[ae]=ge[ae]);return{$$typeof:h,type:m,key:he,ref:ye,props:ue,_owner:K.current}}function Ee(m,S){return{$$typeof:h,type:m.type,key:S,ref:m.ref,props:m.props,_owner:m._owner}}function be(m){return typeof m=="object"&&m!==null&&m.$$typeof===h}function De(m){var S={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(ne){return S[ne]})}var J=/\/+/g;function ce(m,S){return typeof m=="object"&&m!==null&&m.key!=null?De(""+m.key):S.toString(36)}function se(m,S,ne,ae,ue){var he=typeof m;(he==="undefined"||he==="boolean")&&(m=null);var ye=!1;if(m===null)ye=!0;else switch(he){case"string":case"number":ye=!0;break;case"object":switch(m.$$typeof){case h:case w:ye=!0}}if(ye)return ye=m,ue=ue(ye),m=ae===""?"."+ce(ye,0):ae,Q(ue)?(ne="",m!=null&&(ne=m.replace(J,"$&/")+"/"),se(ue,S,ne,"",function(et){return et})):ue!=null&&(be(ue)&&(ue=Ee(ue,ne+(!ue.key||ye&&ye.key===ue.key?"":(""+ue.key).replace(J,"$&/")+"/")+m)),S.push(ue)),1;if(ye=0,ae=ae===""?".":ae+":",Q(m))for(var ge=0;ge<m.length;ge++){he=m[ge];var Ne=ae+ce(he,ge);ye+=se(he,S,ne,Ne,ue)}else if(Ne=k(m),typeof Ne=="function")for(m=Ne.call(m),ge=0;!(he=m.next()).done;)he=he.value,Ne=ae+ce(he,ge++),ye+=se(he,S,ne,Ne,ue);else if(he==="object")throw S=String(m),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return ye}function Oe(m,S,ne){if(m==null)return m;var ae=[],ue=0;return se(m,ae,"","",function(he){return S.call(ne,he,ue++)}),ae}function pe(m){if(m._status===-1){var S=m._result;S=S(),S.then(function(ne){(m._status===0||m._status===-1)&&(m._status=1,m._result=ne)},function(ne){(m._status===0||m._status===-1)&&(m._status=2,m._result=ne)}),m._status===-1&&(m._status=0,m._result=S)}if(m._status===1)return m._result.default;throw m._result}var me={current:null},R={transition:null},Z={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:R,ReactCurrentOwner:K};function V(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:Oe,forEach:function(m,S,ne){Oe(m,function(){S.apply(this,arguments)},ne)},count:function(m){var S=0;return Oe(m,function(){S++}),S},toArray:function(m){return Oe(m,function(S){return S})||[]},only:function(m){if(!be(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},le.Component=L,le.Fragment=u,le.Profiler=g,le.PureComponent=re,le.StrictMode=f,le.Suspense=b,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,le.act=V,le.cloneElement=function(m,S,ne){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var ae=A({},m.props),ue=m.key,he=m.ref,ye=m._owner;if(S!=null){if(S.ref!==void 0&&(he=S.ref,ye=K.current),S.key!==void 0&&(ue=""+S.key),m.type&&m.type.defaultProps)var ge=m.type.defaultProps;for(Ne in S)U.call(S,Ne)&&!$.hasOwnProperty(Ne)&&(ae[Ne]=S[Ne]===void 0&&ge!==void 0?ge[Ne]:S[Ne])}var Ne=arguments.length-2;if(Ne===1)ae.children=ne;else if(1<Ne){ge=Array(Ne);for(var et=0;et<Ne;et++)ge[et]=arguments[et+2];ae.children=ge}return{$$typeof:h,type:m.type,key:ue,ref:he,props:ae,_owner:ye}},le.createContext=function(m){return m={$$typeof:P,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:N,_context:m},m.Consumer=m},le.createElement=oe,le.createFactory=function(m){var S=oe.bind(null,m);return S.type=m,S},le.createRef=function(){return{current:null}},le.forwardRef=function(m){return{$$typeof:x,render:m}},le.isValidElement=be,le.lazy=function(m){return{$$typeof:_,_payload:{_status:-1,_result:m},_init:pe}},le.memo=function(m,S){return{$$typeof:j,type:m,compare:S===void 0?null:S}},le.startTransition=function(m){var S=R.transition;R.transition={};try{m()}finally{R.transition=S}},le.unstable_act=V,le.useCallback=function(m,S){return me.current.useCallback(m,S)},le.useContext=function(m){return me.current.useContext(m)},le.useDebugValue=function(){},le.useDeferredValue=function(m){return me.current.useDeferredValue(m)},le.useEffect=function(m,S){return me.current.useEffect(m,S)},le.useId=function(){return me.current.useId()},le.useImperativeHandle=function(m,S,ne){return me.current.useImperativeHandle(m,S,ne)},le.useInsertionEffect=function(m,S){return me.current.useInsertionEffect(m,S)},le.useLayoutEffect=function(m,S){return me.current.useLayoutEffect(m,S)},le.useMemo=function(m,S){return me.current.useMemo(m,S)},le.useReducer=function(m,S,ne){return me.current.useReducer(m,S,ne)},le.useRef=function(m){return me.current.useRef(m)},le.useState=function(m){return me.current.useState(m)},le.useSyncExternalStore=function(m,S,ne){return me.current.useSyncExternalStore(m,S,ne)},le.useTransition=function(){return me.current.useTransition()},le.version="18.3.1",le}var ec;function Qi(){return ec||(ec=1,Mi.exports=Lh()),Mi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function Vh(){if(tc)return kr;tc=1;var h=Qi(),w=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function P(x,b,j){var _,E={},k=null,C=null;j!==void 0&&(k=""+j),b.key!==void 0&&(k=""+b.key),b.ref!==void 0&&(C=b.ref);for(_ in b)f.call(b,_)&&!N.hasOwnProperty(_)&&(E[_]=b[_]);if(x&&x.defaultProps)for(_ in b=x.defaultProps,b)E[_]===void 0&&(E[_]=b[_]);return{$$typeof:w,type:x,key:k,ref:C,props:E,_owner:g.current}}return kr.Fragment=u,kr.jsx=P,kr.jsxs=P,kr}var nc;function Fh(){return nc||(nc=1,Oi.exports=Vh()),Oi.exports}var s=Fh(),M=Qi();const jc=Nc(M);var Vs={},Li={exports:{}},Je={},Vi={exports:{}},Fi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function Uh(){return rc||(rc=1,(function(h){function w(R,Z){var V=R.length;R.push(Z);e:for(;0<V;){var m=V-1>>>1,S=R[m];if(0<g(S,Z))R[m]=Z,R[V]=S,V=m;else break e}}function u(R){return R.length===0?null:R[0]}function f(R){if(R.length===0)return null;var Z=R[0],V=R.pop();if(V!==Z){R[0]=V;e:for(var m=0,S=R.length,ne=S>>>1;m<ne;){var ae=2*(m+1)-1,ue=R[ae],he=ae+1,ye=R[he];if(0>g(ue,V))he<S&&0>g(ye,ue)?(R[m]=ye,R[he]=V,m=he):(R[m]=ue,R[ae]=V,m=ae);else if(he<S&&0>g(ye,V))R[m]=ye,R[he]=V,m=he;else break e}}return Z}function g(R,Z){var V=R.sortIndex-Z.sortIndex;return V!==0?V:R.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var N=performance;h.unstable_now=function(){return N.now()}}else{var P=Date,x=P.now();h.unstable_now=function(){return P.now()-x}}var b=[],j=[],_=1,E=null,k=3,C=!1,A=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(R){for(var Z=u(j);Z!==null;){if(Z.callback===null)f(j);else if(Z.startTime<=R)f(j),Z.sortIndex=Z.expirationTime,w(b,Z);else break;Z=u(j)}}function Q(R){if(O=!1,ie(R),!A)if(u(b)!==null)A=!0,pe(U);else{var Z=u(j);Z!==null&&me(Q,Z.startTime-R)}}function U(R,Z){A=!1,O&&(O=!1,te(oe),oe=-1),C=!0;var V=k;try{for(ie(Z),E=u(b);E!==null&&(!(E.expirationTime>Z)||R&&!De());){var m=E.callback;if(typeof m=="function"){E.callback=null,k=E.priorityLevel;var S=m(E.expirationTime<=Z);Z=h.unstable_now(),typeof S=="function"?E.callback=S:E===u(b)&&f(b),ie(Z)}else f(b);E=u(b)}if(E!==null)var ne=!0;else{var ae=u(j);ae!==null&&me(Q,ae.startTime-Z),ne=!1}return ne}finally{E=null,k=V,C=!1}}var K=!1,$=null,oe=-1,Ee=5,be=-1;function De(){return!(h.unstable_now()-be<Ee)}function J(){if($!==null){var R=h.unstable_now();be=R;var Z=!0;try{Z=$(!0,R)}finally{Z?ce():(K=!1,$=null)}}else K=!1}var ce;if(typeof re=="function")ce=function(){re(J)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Oe=se.port2;se.port1.onmessage=J,ce=function(){Oe.postMessage(null)}}else ce=function(){L(J,0)};function pe(R){$=R,K||(K=!0,ce())}function me(R,Z){oe=L(function(){R(h.unstable_now())},Z)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(R){R.callback=null},h.unstable_continueExecution=function(){A||C||(A=!0,pe(U))},h.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<R?Math.floor(1e3/R):5},h.unstable_getCurrentPriorityLevel=function(){return k},h.unstable_getFirstCallbackNode=function(){return u(b)},h.unstable_next=function(R){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var V=k;k=Z;try{return R()}finally{k=V}},h.unstable_pauseExecution=function(){},h.unstable_requestPaint=function(){},h.unstable_runWithPriority=function(R,Z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=k;k=R;try{return Z()}finally{k=V}},h.unstable_scheduleCallback=function(R,Z,V){var m=h.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?m+V:m):V=m,R){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=V+S,R={id:_++,callback:Z,priorityLevel:R,startTime:V,expirationTime:S,sortIndex:-1},V>m?(R.sortIndex=V,w(j,R),u(b)===null&&R===u(j)&&(O?(te(oe),oe=-1):O=!0,me(Q,V-m))):(R.sortIndex=S,w(b,R),A||C||(A=!0,pe(U))),R},h.unstable_shouldYield=De,h.unstable_wrapCallback=function(R){var Z=k;return function(){var V=k;k=Z;try{return R.apply(this,arguments)}finally{k=V}}}})(Fi)),Fi}var sc;function Wh(){return sc||(sc=1,Vi.exports=Uh()),Vi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Bh(){if(ac)return Je;ac=1;var h=Qi(),w=Wh();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,g={};function N(e,t){P(e,t),P(e+"Capture",t)}function P(e,t){for(g[e]=t,e=0;e<t.length;e++)f.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function k(e){return b.call(E,e)?!0:b.call(_,e)?!1:j.test(e)?E[e]=!0:(_[e]=!0,!1)}function C(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,t,n,r){if(t===null||typeof t>"u"||C(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];L[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function re(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(te,re);L[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(te,re);L[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,re);L[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,t,n,r){var a=L.hasOwnProperty(t)?L[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A(t,n,a,r)&&(n=null),r||a===null?k(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Q=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),K=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),De=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),R=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,m;function S(e){if(m===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var ne=!1;function ae(e,t){if(!e||ne)return"";ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?S(e):""}function ue(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case K:return"Portal";case Ee:return"Profiler";case oe:return"StrictMode";case ce:return"Suspense";case se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case De:return(e.displayName||"Context")+".Consumer";case be:return(e._context.displayName||"Context")+".Provider";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(t);case 8:return t===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=Ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=et(e))}function sl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ne(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function al(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ge(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function il(e,t){t=t.checked,t!=null&&ie(e,"checked",t,!1)}function Hs(e,t){il(e,t);var n=ge(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$s(e,t.type,n):t.hasOwnProperty("defaultValue")&&$s(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ll(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $s(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ge(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Gs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ol(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Mn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ge(n)}}function ul(e,t){var n=ge(t.value),r=ge(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,hl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ln(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function fl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function ml(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=fl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Bc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(e,t){if(t){if(Bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,fn=null,mn=null;function pl(e){if(e=lr(e)){if(typeof qs!="function")throw Error(u(280));var t=e.stateNode;t&&(t=es(t),qs(e.stateNode,e.type,t))}}function gl(e){fn?mn?mn.push(e):mn=[e]:fn=e}function xl(){if(fn){var e=fn,t=mn;if(mn=fn=null,pl(e),t)for(e=0;e<t.length;e++)pl(t[e])}}function yl(e,t){return e(t)}function vl(){}var Js=!1;function bl(e,t,n){if(Js)return e(t,n);Js=!0;try{return yl(e,t,n)}finally{Js=!1,(fn!==null||mn!==null)&&(vl(),xl())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var ea=!1;if(x)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{ea=!1}function Hc(e,t,n,r,a,i,l,o,c){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(T){this.onError(T)}}var Wn=!1,Rr=null,Dr=!1,ta=null,$c={onError:function(e){Wn=!0,Rr=e}};function Gc(e,t,n,r,a,i,l,o,c){Wn=!1,Rr=null,Hc.apply($c,arguments)}function Zc(e,t,n,r,a,i,l,o,c){if(Gc.apply(this,arguments),Wn){if(Wn){var v=Rr;Wn=!1,Rr=null}else throw Error(u(198));Dr||(Dr=!0,ta=v)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kl(e){if(qt(e)!==e)throw Error(u(188))}function Yc(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return kl(a),e;if(i===r)return kl(a),t;i=i.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,o=a.child;o;){if(o===n){l=!0,n=a,r=i;break}if(o===r){l=!0,r=a,n=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===n){l=!0,n=i,r=a;break}if(o===r){l=!0,r=i,n=a;break}o=o.sibling}if(!l)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Nl(e){return e=Yc(e),e!==null?jl(e):null}function jl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jl(e);if(t!==null)return t;e=e.sibling}return null}var El=w.unstable_scheduleCallback,Sl=w.unstable_cancelCallback,Kc=w.unstable_shouldYield,Qc=w.unstable_requestPaint,Te=w.unstable_now,Xc=w.unstable_getCurrentPriorityLevel,na=w.unstable_ImmediatePriority,Il=w.unstable_UserBlockingPriority,Pr=w.unstable_NormalPriority,qc=w.unstable_LowPriority,Cl=w.unstable_IdlePriority,Ar=null,vt=null;function Jc(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ar,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:nd,ed=Math.log,td=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(ed(e)/td|0)|0}var Or=64,Mr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~a;o!==0?r=Bn(o):(i&=l,i!==0&&(r=Bn(i)))}else l=n&~a,l!==0?r=Bn(l):i!==0&&(r=Bn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),a=1<<n,r|=e[n],t&=~a;return r}function rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ht(i),o=1<<l,c=a[l];c===-1?((o&n)===0||(o&r)!==0)&&(a[l]=rd(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _l(){var e=Or;return Or<<=1,(Or&4194240)===0&&(Or=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function ad(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ht(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var xe=0;function Tl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zl,ia,Rl,Dl,Pl,la=!1,Vr=[],Rt=null,Dt=null,Pt=null,$n=new Map,Gn=new Map,At=[],id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Zn(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=lr(t),t!==null&&ia(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ld(e,t,n,r,a){switch(t){case"focusin":return Rt=Zn(Rt,e,t,n,r,a),!0;case"dragenter":return Dt=Zn(Dt,e,t,n,r,a),!0;case"mouseover":return Pt=Zn(Pt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return $n.set(i,Zn($n.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Gn.set(i,Zn(Gn.get(i)||null,e,t,n,r,a)),!0}return!1}function Ol(e){var t=Jt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=wl(n),t!==null){e.blockedOn=t,Pl(e.priority,function(){Rl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ua(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=lr(n),t!==null&&ia(t),e.blockedOn=n,!1;t.shift()}return!0}function Ml(e,t,n){Fr(e)&&n.delete(t)}function od(){la=!1,Rt!==null&&Fr(Rt)&&(Rt=null),Dt!==null&&Fr(Dt)&&(Dt=null),Pt!==null&&Fr(Pt)&&(Pt=null),$n.forEach(Ml),Gn.forEach(Ml)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,od)))}function Kn(e){function t(a){return Yn(a,e)}if(0<Vr.length){Yn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Yn(Rt,e),Dt!==null&&Yn(Dt,e),Pt!==null&&Yn(Pt,e),$n.forEach(t),Gn.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Ol(n),n.blockedOn===null&&At.shift()}var pn=Q.ReactCurrentBatchConfig,Ur=!0;function ud(e,t,n,r){var a=xe,i=pn.transition;pn.transition=null;try{xe=1,oa(e,t,n,r)}finally{xe=a,pn.transition=i}}function cd(e,t,n,r){var a=xe,i=pn.transition;pn.transition=null;try{xe=4,oa(e,t,n,r)}finally{xe=a,pn.transition=i}}function oa(e,t,n,r){if(Ur){var a=ua(e,t,n,r);if(a===null)Sa(e,t,r,Wr,n),Al(e,r);else if(ld(a,e,t,n,r))r.stopPropagation();else if(Al(e,r),t&4&&-1<id.indexOf(e)){for(;a!==null;){var i=lr(a);if(i!==null&&zl(i),i=ua(e,t,n,r),i===null&&Sa(e,t,r,Wr,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Sa(e,t,r,null,n)}}var Wr=null;function ua(e,t,n,r){if(Wr=null,e=Xs(r),e=Jt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function Ll(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case na:return 1;case Il:return 4;case Pr:case qc:return 16;case Cl:return 536870912;default:return 16}default:return 16}}var Ot=null,ca=null,Br=null;function Vl(){if(Br)return Br;var e,t=ca,n=t.length,r,a="value"in Ot?Ot.value:Ot.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Br=a.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function Fl(){return!1}function tt(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$r:Fl,this.isPropagationStopped=Fl,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=tt(gn),Qn=V({},gn,{view:0,detail:0}),dd=tt(Qn),ha,fa,Xn,Gr=V({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ha=e.screenX-Xn.screenX,fa=e.screenY-Xn.screenY):fa=ha=0,Xn=e),ha)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Ul=tt(Gr),hd=V({},Gr,{dataTransfer:0}),fd=tt(hd),md=V({},Qn,{relatedTarget:0}),ma=tt(md),pd=V({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=tt(pd),xd=V({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yd=tt(xd),vd=V({},gn,{data:0}),Wl=tt(vd),bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kd[e])?!!t[e]:!1}function pa(){return Nd}var jd=V({},Qn,{key:function(e){if(e.key){var t=bd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=tt(jd),Sd=V({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bl=tt(Sd),Id=V({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),Cd=tt(Id),_d=V({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=tt(_d),zd=V({},Gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=tt(zd),Dd=[9,13,27,32],ga=x&&"CompositionEvent"in window,qn=null;x&&"documentMode"in document&&(qn=document.documentMode);var Pd=x&&"TextEvent"in window&&!qn,Hl=x&&(!ga||qn&&8<qn&&11>=qn),$l=" ",Gl=!1;function Zl(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Ad(e,t){switch(e){case"compositionend":return Yl(t);case"keypress":return t.which!==32?null:(Gl=!0,$l);case"textInput":return e=t.data,e===$l&&Gl?null:e;default:return null}}function Od(e,t){if(xn)return e==="compositionend"||!ga&&Zl(e,t)?(e=Vl(),Br=ca=Ot=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hl&&t.locale!=="ko"?null:t.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Md[e.type]:t==="textarea"}function Ql(e,t,n,r){gl(r),t=Xr(t,"onChange"),0<t.length&&(n=new da("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,er=null;function Ld(e){po(e,0)}function Zr(e){var t=kn(e);if(sl(t))return e}function Vd(e,t){if(e==="change")return t}var Xl=!1;if(x){var xa;if(x){var ya="oninput"in document;if(!ya){var ql=document.createElement("div");ql.setAttribute("oninput","return;"),ya=typeof ql.oninput=="function"}xa=ya}else xa=!1;Xl=xa&&(!document.documentMode||9<document.documentMode)}function Jl(){Jn&&(Jn.detachEvent("onpropertychange",eo),er=Jn=null)}function eo(e){if(e.propertyName==="value"&&Zr(er)){var t=[];Ql(t,er,e,Xs(e)),bl(Ld,t)}}function Fd(e,t,n){e==="focusin"?(Jl(),Jn=t,er=n,Jn.attachEvent("onpropertychange",eo)):e==="focusout"&&Jl()}function Ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(er)}function Wd(e,t){if(e==="click")return Zr(t)}function Bd(e,t){if(e==="input"||e==="change")return Zr(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Hd;function tr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!b.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function to(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function no(e,t){var n=to(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=to(n)}}function ro(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ro(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function so(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $d(e){var t=so(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ro(n.ownerDocument.documentElement,n)){if(r!==null&&va(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=no(n,i);var l=no(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=x&&"documentMode"in document&&11>=document.documentMode,yn=null,ba=null,nr=null,wa=!1;function ao(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||yn==null||yn!==Tr(r)||(r=yn,"selectionStart"in r&&va(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&tr(nr,r)||(nr=r,r=Xr(ba,"onSelect"),0<r.length&&(t=new da("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},ka={},io={};x&&(io=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Kr(e){if(ka[e])return ka[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in io)return ka[e]=t[n];return e}var lo=Kr("animationend"),oo=Kr("animationiteration"),uo=Kr("animationstart"),co=Kr("transitionend"),ho=new Map,fo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){ho.set(e,t),N(t,[e])}for(var Na=0;Na<fo.length;Na++){var ja=fo[Na],Zd=ja.toLowerCase(),Yd=ja[0].toUpperCase()+ja.slice(1);Mt(Zd,"on"+Yd)}Mt(lo,"onAnimationEnd"),Mt(oo,"onAnimationIteration"),Mt(uo,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(co,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function mo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zc(r,t,void 0,e),e.currentTarget=null}function po(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],c=o.instance,v=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;mo(a,o,v),i=c}else for(l=0;l<r.length;l++){if(o=r[l],c=o.instance,v=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;mo(a,o,v),i=c}}}if(Dr)throw e=ta,Dr=!1,ta=null,e}function we(e,t){var n=t[Ra];n===void 0&&(n=t[Ra]=new Set);var r=e+"__bubble";n.has(r)||(go(t,e,2,!1),n.add(r))}function Ea(e,t,n){var r=0;t&&(r|=4),go(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Qr]){e[Qr]=!0,f.forEach(function(n){n!=="selectionchange"&&(Kd.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,Ea("selectionchange",!1,t))}}function go(e,t,n,r){switch(Ll(t)){case 1:var a=ud;break;case 4:a=cd;break;default:a=oa}n=a.bind(null,t,n,e),a=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Sa(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;o!==null;){if(l=Jt(o),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}o=o.parentNode}}r=r.return}bl(function(){var v=i,T=Xs(n),z=[];e:{var I=ho.get(e);if(I!==void 0){var F=da,B=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":F=Ed;break;case"focusin":B="focus",F=ma;break;case"focusout":B="blur",F=ma;break;case"beforeblur":case"afterblur":F=ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Cd;break;case lo:case oo:case uo:F=gd;break;case co:F=Td;break;case"scroll":F=dd;break;case"wheel":F=Rd;break;case"copy":case"cut":case"paste":F=yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Bl}var H=(t&4)!==0,ze=!H&&e==="scroll",p=H?I!==null?I+"Capture":null:I;H=[];for(var d=v,y;d!==null;){y=d;var D=y.stateNode;if(y.tag===5&&D!==null&&(y=D,p!==null&&(D=Fn(d,p),D!=null&&H.push(ar(d,D,y)))),ze)break;d=d.return}0<H.length&&(I=new F(I,B,null,n,T),z.push({event:I,listeners:H}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",I&&n!==Qs&&(B=n.relatedTarget||n.fromElement)&&(Jt(B)||B[jt]))break e;if((F||I)&&(I=T.window===T?T:(I=T.ownerDocument)?I.defaultView||I.parentWindow:window,F?(B=n.relatedTarget||n.toElement,F=v,B=B?Jt(B):null,B!==null&&(ze=qt(B),B!==ze||B.tag!==5&&B.tag!==6)&&(B=null)):(F=null,B=v),F!==B)){if(H=Ul,D="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(H=Bl,D="onPointerLeave",p="onPointerEnter",d="pointer"),ze=F==null?I:kn(F),y=B==null?I:kn(B),I=new H(D,d+"leave",F,n,T),I.target=ze,I.relatedTarget=y,D=null,Jt(T)===v&&(H=new H(p,d+"enter",B,n,T),H.target=y,H.relatedTarget=ze,D=H),ze=D,F&&B)t:{for(H=F,p=B,d=0,y=H;y;y=bn(y))d++;for(y=0,D=p;D;D=bn(D))y++;for(;0<d-y;)H=bn(H),d--;for(;0<y-d;)p=bn(p),y--;for(;d--;){if(H===p||p!==null&&H===p.alternate)break t;H=bn(H),p=bn(p)}H=null}else H=null;F!==null&&xo(z,I,F,H,!1),B!==null&&ze!==null&&xo(z,ze,B,H,!0)}}e:{if(I=v?kn(v):window,F=I.nodeName&&I.nodeName.toLowerCase(),F==="select"||F==="input"&&I.type==="file")var G=Vd;else if(Kl(I))if(Xl)G=Bd;else{G=Ud;var X=Fd}else(F=I.nodeName)&&F.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(G=Wd);if(G&&(G=G(e,v))){Ql(z,G,n,T);break e}X&&X(e,I,v),e==="focusout"&&(X=I._wrapperState)&&X.controlled&&I.type==="number"&&$s(I,"number",I.value)}switch(X=v?kn(v):window,e){case"focusin":(Kl(X)||X.contentEditable==="true")&&(yn=X,ba=v,nr=null);break;case"focusout":nr=ba=yn=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,ao(z,n,T);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":ao(z,n,T)}var q;if(ga)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else xn?Zl(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(Hl&&n.locale!=="ko"&&(xn||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&xn&&(q=Vl()):(Ot=T,ca="value"in Ot?Ot.value:Ot.textContent,xn=!0)),X=Xr(v,ee),0<X.length&&(ee=new Wl(ee,e,null,n,T),z.push({event:ee,listeners:X}),q?ee.data=q:(q=Yl(n),q!==null&&(ee.data=q)))),(q=Pd?Ad(e,n):Od(e,n))&&(v=Xr(v,"onBeforeInput"),0<v.length&&(T=new Wl("onBeforeInput","beforeinput",null,n,T),z.push({event:T,listeners:v}),T.data=q))}po(z,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Fn(e,n),i!=null&&r.unshift(ar(e,i,a)),i=Fn(e,t),i!=null&&r.push(ar(e,i,a))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xo(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var o=n,c=o.alternate,v=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&v!==null&&(o=v,a?(c=Fn(n,i),c!=null&&l.unshift(ar(n,c,o))):a||(c=Fn(n,i),c!=null&&l.push(ar(n,c,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Qd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function yo(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Xd,"")}function qr(e,t,n){if(t=yo(t),yo(e)!==t&&n)throw Error(u(425))}function Jr(){}var Ia=null,Ca=null;function _a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,vo=typeof Promise=="function"?Promise:void 0,Jd=typeof queueMicrotask=="function"?queueMicrotask:typeof vo<"u"?function(e){return vo.resolve(null).then(e).catch(eh)}:Ta;function eh(e){setTimeout(function(){throw e})}function za(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Kn(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),bt="__reactFiber$"+wn,ir="__reactProps$"+wn,jt="__reactContainer$"+wn,Ra="__reactEvents$"+wn,th="__reactListeners$"+wn,nh="__reactHandles$"+wn;function Jt(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bo(e);e!==null;){if(n=e[bt])return n;e=bo(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[bt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function es(e){return e[ir]||null}var Da=[],Nn=-1;function Vt(e){return{current:e}}function ke(e){0>Nn||(e.current=Da[Nn],Da[Nn]=null,Nn--)}function ve(e,t){Nn++,Da[Nn]=e.current,e.current=t}var Ft={},We=Vt(Ft),Ye=Vt(!1),en=Ft;function jn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ke(e){return e=e.childContextTypes,e!=null}function ts(){ke(Ye),ke(We)}function wo(e,t,n){if(We.current!==Ft)throw Error(u(168));ve(We,t),ve(Ye,n)}function ko(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(u(108,ye(e)||"Unknown",a));return V({},n,r)}function ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,en=We.current,ve(We,e),ve(Ye,Ye.current),!0}function No(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=ko(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,ke(Ye),ke(We),ve(We,e)):ke(Ye),ve(Ye,n)}var Et=null,rs=!1,Pa=!1;function jo(e){Et===null?Et=[e]:Et.push(e)}function rh(e){rs=!0,jo(e)}function Ut(){if(!Pa&&Et!==null){Pa=!0;var e=0,t=xe;try{var n=Et;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,rs=!1}catch(a){throw Et!==null&&(Et=Et.slice(e+1)),El(na,Ut),a}finally{xe=t,Pa=!1}}return null}var En=[],Sn=0,ss=null,as=0,at=[],it=0,tn=null,St=1,It="";function nn(e,t){En[Sn++]=as,En[Sn++]=ss,ss=e,as=t}function Eo(e,t,n){at[it++]=St,at[it++]=It,at[it++]=tn,tn=e;var r=St;e=It;var a=32-ht(r)-1;r&=~(1<<a),n+=1;var i=32-ht(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,St=1<<32-ht(t)+a|n<<a|r,It=i+e}else St=1<<i|n<<a|r,It=e}function Aa(e){e.return!==null&&(nn(e,1),Eo(e,1,0))}function Oa(e){for(;e===ss;)ss=En[--Sn],En[Sn]=null,as=En[--Sn],En[Sn]=null;for(;e===tn;)tn=at[--it],at[it]=null,It=at[--it],at[it]=null,St=at[--it],at[it]=null}var nt=null,rt=null,je=!1,mt=null;function So(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Io(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,rt=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:St,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,rt=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function La(e){if(je){var t=rt;if(t){var n=t;if(!Io(e,t)){if(Ma(e))throw Error(u(418));t=Lt(n.nextSibling);var r=nt;t&&Io(e,t)?So(r,n):(e.flags=e.flags&-4097|2,je=!1,nt=e)}}else{if(Ma(e))throw Error(u(418));e.flags=e.flags&-4097|2,je=!1,nt=e}}}function Co(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function is(e){if(e!==nt)return!1;if(!je)return Co(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_a(e.type,e.memoizedProps)),t&&(t=rt)){if(Ma(e))throw _o(),Error(u(418));for(;t;)So(e,t),t=Lt(t.nextSibling)}if(Co(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=nt?Lt(e.stateNode.nextSibling):null;return!0}function _o(){for(var e=rt;e;)e=Lt(e.nextSibling)}function In(){rt=nt=null,je=!1}function Va(e){mt===null?mt=[e]:mt.push(e)}var sh=Q.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ls(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function To(e){var t=e._init;return t(e._payload)}function zo(e){function t(p,d){if(e){var y=p.deletions;y===null?(p.deletions=[d],p.flags|=16):y.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=Kt(p,d),p.index=0,p.sibling=null,p}function i(p,d,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<d?(p.flags|=2,d):y):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,d,y,D){return d===null||d.tag!==6?(d=Ti(y,p.mode,D),d.return=p,d):(d=a(d,y),d.return=p,d)}function c(p,d,y,D){var G=y.type;return G===$?T(p,d,y.props.children,D,y.key):d!==null&&(d.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pe&&To(G)===d.type)?(D=a(d,y.props),D.ref=or(p,d,y),D.return=p,D):(D=zs(y.type,y.key,y.props,null,p.mode,D),D.ref=or(p,d,y),D.return=p,D)}function v(p,d,y,D){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=zi(y,p.mode,D),d.return=p,d):(d=a(d,y.children||[]),d.return=p,d)}function T(p,d,y,D,G){return d===null||d.tag!==7?(d=dn(y,p.mode,D,G),d.return=p,d):(d=a(d,y),d.return=p,d)}function z(p,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ti(""+d,p.mode,y),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case U:return y=zs(d.type,d.key,d.props,null,p.mode,y),y.ref=or(p,null,d),y.return=p,y;case K:return d=zi(d,p.mode,y),d.return=p,d;case pe:var D=d._init;return z(p,D(d._payload),y)}if(Mn(d)||Z(d))return d=dn(d,p.mode,y,null),d.return=p,d;ls(p,d)}return null}function I(p,d,y,D){var G=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return G!==null?null:o(p,d,""+y,D);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case U:return y.key===G?c(p,d,y,D):null;case K:return y.key===G?v(p,d,y,D):null;case pe:return G=y._init,I(p,d,G(y._payload),D)}if(Mn(y)||Z(y))return G!==null?null:T(p,d,y,D,null);ls(p,y)}return null}function F(p,d,y,D,G){if(typeof D=="string"&&D!==""||typeof D=="number")return p=p.get(y)||null,o(d,p,""+D,G);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case U:return p=p.get(D.key===null?y:D.key)||null,c(d,p,D,G);case K:return p=p.get(D.key===null?y:D.key)||null,v(d,p,D,G);case pe:var X=D._init;return F(p,d,y,X(D._payload),G)}if(Mn(D)||Z(D))return p=p.get(y)||null,T(d,p,D,G,null);ls(d,D)}return null}function B(p,d,y,D){for(var G=null,X=null,q=d,ee=d=0,Ve=null;q!==null&&ee<y.length;ee++){q.index>ee?(Ve=q,q=null):Ve=q.sibling;var fe=I(p,q,y[ee],D);if(fe===null){q===null&&(q=Ve);break}e&&q&&fe.alternate===null&&t(p,q),d=i(fe,d,ee),X===null?G=fe:X.sibling=fe,X=fe,q=Ve}if(ee===y.length)return n(p,q),je&&nn(p,ee),G;if(q===null){for(;ee<y.length;ee++)q=z(p,y[ee],D),q!==null&&(d=i(q,d,ee),X===null?G=q:X.sibling=q,X=q);return je&&nn(p,ee),G}for(q=r(p,q);ee<y.length;ee++)Ve=F(q,p,ee,y[ee],D),Ve!==null&&(e&&Ve.alternate!==null&&q.delete(Ve.key===null?ee:Ve.key),d=i(Ve,d,ee),X===null?G=Ve:X.sibling=Ve,X=Ve);return e&&q.forEach(function(Qt){return t(p,Qt)}),je&&nn(p,ee),G}function H(p,d,y,D){var G=Z(y);if(typeof G!="function")throw Error(u(150));if(y=G.call(y),y==null)throw Error(u(151));for(var X=G=null,q=d,ee=d=0,Ve=null,fe=y.next();q!==null&&!fe.done;ee++,fe=y.next()){q.index>ee?(Ve=q,q=null):Ve=q.sibling;var Qt=I(p,q,fe.value,D);if(Qt===null){q===null&&(q=Ve);break}e&&q&&Qt.alternate===null&&t(p,q),d=i(Qt,d,ee),X===null?G=Qt:X.sibling=Qt,X=Qt,q=Ve}if(fe.done)return n(p,q),je&&nn(p,ee),G;if(q===null){for(;!fe.done;ee++,fe=y.next())fe=z(p,fe.value,D),fe!==null&&(d=i(fe,d,ee),X===null?G=fe:X.sibling=fe,X=fe);return je&&nn(p,ee),G}for(q=r(p,q);!fe.done;ee++,fe=y.next())fe=F(q,p,ee,fe.value,D),fe!==null&&(e&&fe.alternate!==null&&q.delete(fe.key===null?ee:fe.key),d=i(fe,d,ee),X===null?G=fe:X.sibling=fe,X=fe);return e&&q.forEach(function(Mh){return t(p,Mh)}),je&&nn(p,ee),G}function ze(p,d,y,D){if(typeof y=="object"&&y!==null&&y.type===$&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case U:e:{for(var G=y.key,X=d;X!==null;){if(X.key===G){if(G=y.type,G===$){if(X.tag===7){n(p,X.sibling),d=a(X,y.props.children),d.return=p,p=d;break e}}else if(X.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===pe&&To(G)===X.type){n(p,X.sibling),d=a(X,y.props),d.ref=or(p,X,y),d.return=p,p=d;break e}n(p,X);break}else t(p,X);X=X.sibling}y.type===$?(d=dn(y.props.children,p.mode,D,y.key),d.return=p,p=d):(D=zs(y.type,y.key,y.props,null,p.mode,D),D.ref=or(p,d,y),D.return=p,p=D)}return l(p);case K:e:{for(X=y.key;d!==null;){if(d.key===X)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(p,d.sibling),d=a(d,y.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=zi(y,p.mode,D),d.return=p,p=d}return l(p);case pe:return X=y._init,ze(p,d,X(y._payload),D)}if(Mn(y))return B(p,d,y,D);if(Z(y))return H(p,d,y,D);ls(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(p,d.sibling),d=a(d,y),d.return=p,p=d):(n(p,d),d=Ti(y,p.mode,D),d.return=p,p=d),l(p)):n(p,d)}return ze}var Cn=zo(!0),Ro=zo(!1),os=Vt(null),us=null,_n=null,Fa=null;function Ua(){Fa=_n=us=null}function Wa(e){var t=os.current;ke(os),e._currentValue=t}function Ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){us=e,Fa=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qe=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(us===null)throw Error(u(308));_n=e,us.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var rn=null;function Ha(e){rn===null?rn=[e]:rn.push(e)}function Do(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Ha(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Po(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ct(e,n)}return a=r.interleaved,a===null?(t.next=t,Ha(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ct(e,n)}function cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,aa(e,n)}}function Ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ds(e,t,n,r){var a=e.updateQueue;Wt=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,v=c.next;c.next=null,l===null?i=v:l.next=v,l=c;var T=e.alternate;T!==null&&(T=T.updateQueue,o=T.lastBaseUpdate,o!==l&&(o===null?T.firstBaseUpdate=v:o.next=v,T.lastBaseUpdate=c))}if(i!==null){var z=a.baseState;l=0,T=v=c=null,o=i;do{var I=o.lane,F=o.eventTime;if((r&I)===I){T!==null&&(T=T.next={eventTime:F,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var B=e,H=o;switch(I=t,F=n,H.tag){case 1:if(B=H.payload,typeof B=="function"){z=B.call(F,z,I);break e}z=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=H.payload,I=typeof B=="function"?B.call(F,z,I):B,I==null)break e;z=V({},z,I);break e;case 2:Wt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,I=a.effects,I===null?a.effects=[o]:I.push(o))}else F={eventTime:F,lane:I,tag:o.tag,payload:o.payload,callback:o.callback,next:null},T===null?(v=T=F,c=z):T=T.next=F,l|=I;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;I=o,o=I.next,I.next=null,a.lastBaseUpdate=I,a.shared.pending=null}}while(!0);if(T===null&&(c=z),a.baseState=c,a.firstBaseUpdate=v,a.lastBaseUpdate=T,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);ln|=l,e.lanes=l,e.memoizedState=z}}function Oo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(u(191,a));a.call(r)}}}var ur={},wt=Vt(ur),cr=Vt(ur),dr=Vt(ur);function sn(e){if(e===ur)throw Error(u(174));return e}function Ga(e,t){switch(ve(dr,t),ve(cr,e),ve(wt,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zs(t,e)}ke(wt),ve(wt,t)}function zn(){ke(wt),ke(cr),ke(dr)}function Mo(e){sn(dr.current);var t=sn(wt.current),n=Zs(t,e.type);t!==n&&(ve(cr,e),ve(wt,n))}function Za(e){cr.current===e&&(ke(wt),ke(cr))}var Se=Vt(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=[];function Ka(){for(var e=0;e<Ya.length;e++)Ya[e]._workInProgressVersionPrimary=null;Ya.length=0}var fs=Q.ReactCurrentDispatcher,Qa=Q.ReactCurrentBatchConfig,an=0,Ie=null,Pe=null,Me=null,ms=!1,hr=!1,fr=0,ah=0;function Be(){throw Error(u(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function qa(e,t,n,r,a,i){if(an=i,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?uh:ch,e=n(r,a),hr){i=0;do{if(hr=!1,fr=0,25<=i)throw Error(u(301));i+=1,Me=Pe=null,t.updateQueue=null,fs.current=dh,e=n(r,a)}while(hr)}if(fs.current=xs,t=Pe!==null&&Pe.next!==null,an=0,Me=Pe=Ie=null,ms=!1,t)throw Error(u(300));return e}function Ja(){var e=fr!==0;return fr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ie.memoizedState=Me=e:Me=Me.next=e,Me}function ot(){if(Pe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Me===null?Ie.memoizedState:Me.next;if(t!==null)Me=t,Pe=e;else{if(e===null)throw Error(u(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Me===null?Ie.memoizedState=Me=e:Me=Me.next=e}return Me}function mr(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=ot(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Pe,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var o=l=null,c=null,v=i;do{var T=v.lane;if((an&T)===T)c!==null&&(c=c.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var z={lane:T,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};c===null?(o=c=z,l=r):c=c.next=z,Ie.lanes|=T,ln|=T}v=v.next}while(v!==null&&v!==i);c===null?l=r:c.next=o,ft(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Ie.lanes|=i,ln|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=ot(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);ft(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lo(){}function Vo(e,t){var n=Ie,r=ot(),a=t(),i=!ft(r.memoizedState,a);if(i&&(r.memoizedState=a,Qe=!0),r=r.queue,ni(Wo.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,pr(9,Uo.bind(null,n,r,a,t),void 0,null),Le===null)throw Error(u(349));(an&30)!==0||Fo(n,t,a)}return a}function Fo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Bo(t)&&Ho(e)}function Wo(e,t,n){return n(function(){Bo(t)&&Ho(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Ho(e){var t=Ct(e,1);t!==null&&yt(t,e,1,-1)}function $o(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=oh.bind(null,Ie,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Go(){return ot().memoizedState}function ps(e,t,n,r){var a=kt();Ie.flags|=e,a.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function gs(e,t,n,r){var a=ot();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var l=Pe.memoizedState;if(i=l.destroy,r!==null&&Xa(r,l.deps)){a.memoizedState=pr(t,n,i,r);return}}Ie.flags|=e,a.memoizedState=pr(1|t,n,i,r)}function Zo(e,t){return ps(8390656,8,e,t)}function ni(e,t){return gs(2048,8,e,t)}function Yo(e,t){return gs(4,2,e,t)}function Ko(e,t){return gs(4,4,e,t)}function Qo(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xo(e,t,n){return n=n!=null?n.concat([e]):null,gs(4,4,Qo.bind(null,t,e),n)}function ri(){}function qo(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jo(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return(an&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(ft(n,t)||(n=_l(),Ie.lanes|=n,ln|=n,e.baseState=!0),t)}function ih(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Qa.transition;Qa.transition={};try{e(!1),t()}finally{xe=n,Qa.transition=r}}function tu(){return ot().memoizedState}function lh(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nu(e))ru(t,n);else if(n=Do(e,t,n,r),n!==null){var a=Ze();yt(n,e,r,a),su(n,t,r)}}function oh(e,t,n){var r=Zt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nu(e))ru(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,n);if(a.hasEagerState=!0,a.eagerState=o,ft(o,l)){var c=t.interleaved;c===null?(a.next=a,Ha(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Do(e,t,a,r),n!==null&&(a=Ze(),yt(n,e,r,a),su(n,t,r))}}function nu(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function ru(e,t){hr=ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function su(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,aa(e,n)}}var xs={readContext:lt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},uh={readContext:lt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Zo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ps(4194308,4,Qo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return ps(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lh.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:$o,useDebugValue:ri,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=$o(!1),t=e[0];return e=ih.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,a=kt();if(je){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(an&30)!==0||Fo(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Zo(Wo.bind(null,r,i,e),[e]),r.flags|=2048,pr(9,Uo.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=Le.identifierPrefix;if(je){var n=It,r=St;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ah++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:lt,useCallback:qo,useContext:lt,useEffect:ni,useImperativeHandle:Xo,useInsertionEffect:Yo,useLayoutEffect:Ko,useMemo:Jo,useReducer:ei,useRef:Go,useState:function(){return ei(mr)},useDebugValue:ri,useDeferredValue:function(e){var t=ot();return eu(t,Pe.memoizedState,e)},useTransition:function(){var e=ei(mr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Lo,useSyncExternalStore:Vo,useId:tu,unstable_isNewReconciler:!1},dh={readContext:lt,useCallback:qo,useContext:lt,useEffect:ni,useImperativeHandle:Xo,useInsertionEffect:Yo,useLayoutEffect:Ko,useMemo:Jo,useReducer:ti,useRef:Go,useState:function(){return ti(mr)},useDebugValue:ri,useDeferredValue:function(e){var t=ot();return Pe===null?t.memoizedState=e:eu(t,Pe.memoizedState,e)},useTransition:function(){var e=ti(mr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Lo,useSyncExternalStore:Vo,useId:tu,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),a=Zt(e),i=_t(r,a);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,a),t!==null&&(yt(t,e,a,r),cs(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),a=Zt(e),i=_t(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,a),t!==null&&(yt(t,e,a,r),cs(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=Zt(e),a=_t(n,r);a.tag=2,t!=null&&(a.callback=t),t=Bt(e,a,r),t!==null&&(yt(t,e,r,n),cs(t,e,r))}};function au(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(a,i):!0}function iu(e,t,n){var r=!1,a=Ft,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(a=Ke(t)?en:We.current,r=t.contextTypes,i=(r=r!=null)?jn(e,a):Ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function ai(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},$a(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=lt(i):(i=Ke(t)?en:We.current,a.context=jn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(si(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ys.enqueueReplaceState(a,a.state,null),ds(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=ue(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ii(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hh=typeof WeakMap=="function"?WeakMap:Map;function ou(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Es||(Es=!0,ki=r),li(e,t)},n}function uu(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){li(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hh;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Sh.bind(null,e,t,n),t.then(e,e))}function du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hu(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var fh=Q.ReactCurrentOwner,Qe=!1;function Ge(e,t,n,r){t.child=e===null?Ro(t,null,n,r):Cn(t,e.child,n,r)}function fu(e,t,n,r,a){n=n.render;var i=t.ref;return Tn(t,a),r=qa(e,t,n,r,i,a),n=Ja(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Tt(e,t,a)):(je&&n&&Aa(t),t.flags|=1,Ge(e,t,r,a),t.child)}function mu(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!_i(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,pu(e,t,i,r,a)):(e=zs(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(l,r)&&e.ref===t.ref)return Tt(e,t,a)}return t.flags|=1,e=Kt(i,r),e.ref=t.ref,e.return=t,t.child=e}function pu(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(tr(i,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Tt(e,t,a)}return oi(e,t,n,r,a)}function gu(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Pn,st),st|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Pn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ve(Pn,st),st|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ve(Pn,st),st|=r;return Ge(e,t,a,n),t.child}function xu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oi(e,t,n,r,a){var i=Ke(n)?en:We.current;return i=jn(t,i),Tn(t,a),n=qa(e,t,n,r,i,a),r=Ja(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Tt(e,t,a)):(je&&r&&Aa(t),t.flags|=1,Ge(e,t,n,a),t.child)}function yu(e,t,n,r,a){if(Ke(n)){var i=!0;ns(t)}else i=!1;if(Tn(t,a),t.stateNode===null)bs(e,t),iu(t,n,r),ai(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,v=n.contextType;typeof v=="object"&&v!==null?v=lt(v):(v=Ke(n)?en:We.current,v=jn(t,v));var T=n.getDerivedStateFromProps,z=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function";z||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||c!==v)&&lu(t,l,r,v),Wt=!1;var I=t.memoizedState;l.state=I,ds(t,r,l,a),c=t.memoizedState,o!==r||I!==c||Ye.current||Wt?(typeof T=="function"&&(si(t,n,T,r),c=t.memoizedState),(o=Wt||au(t,n,o,r,I,c,v))?(z||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=v,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Po(e,t),o=t.memoizedProps,v=t.type===t.elementType?o:pt(t.type,o),l.props=v,z=t.pendingProps,I=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=lt(c):(c=Ke(n)?en:We.current,c=jn(t,c));var F=n.getDerivedStateFromProps;(T=typeof F=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==z||I!==c)&&lu(t,l,r,c),Wt=!1,I=t.memoizedState,l.state=I,ds(t,r,l,a);var B=t.memoizedState;o!==z||I!==B||Ye.current||Wt?(typeof F=="function"&&(si(t,n,F,r),B=t.memoizedState),(v=Wt||au(t,n,v,r,I,B,c)||!1)?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,B,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,B,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),l.props=r,l.state=B,l.context=c,r=v):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),r=!1)}return ui(e,t,n,r,i,a)}function ui(e,t,n,r,a,i){xu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&No(t,n,!1),Tt(e,t,i);r=t.stateNode,fh.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,o,i)):Ge(e,t,o,i),t.memoizedState=r.state,a&&No(t,n,!0),t.child}function vu(e){var t=e.stateNode;t.pendingContext?wo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wo(e,t.context,!1),Ga(e,t.containerInfo)}function bu(e,t,n,r,a){return In(),Va(a),t.flags|=256,Ge(e,t,n,r),t.child}var ci={dehydrated:null,treeContext:null,retryLane:0};function di(e){return{baseLanes:e,cachePool:null,transitions:null}}function wu(e,t,n){var r=t.pendingProps,a=Se.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ve(Se,a&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Rs(l,r,0,null),e=dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=di(n),t.memoizedState=ci,e):hi(t,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return mh(e,t,l,r,o,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Kt(a,c),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=Kt(o,i):(i=dn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?di(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ci,r}return i=e.child,e=i.sibling,r=Kt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hi(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vs(e,t,n,r){return r!==null&&Va(r),Cn(t,e.child,null,n),e=hi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ii(Error(u(422))),vs(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Rs({mode:"visible",children:r.children},a,0,null),i=dn(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,l),t.child.memoizedState=di(l),t.memoizedState=ci,i);if((t.mode&1)===0)return vs(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(u(419)),r=ii(i,r,void 0),vs(e,t,l,r)}if(o=(l&e.childLanes)!==0,Qe||o){if(r=Le,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ct(e,a),yt(r,e,a,-1))}return Ci(),r=ii(Error(u(421))),vs(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ih.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,rt=Lt(a.nextSibling),nt=t,je=!0,mt=null,e!==null&&(at[it++]=St,at[it++]=It,at[it++]=tn,St=e.id,It=e.overflow,tn=t),t=hi(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ba(e.return,t,n)}function fi(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Nu(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=Se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Se,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&hs(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),fi(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&hs(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}fi(t,!0,n,null,i);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ph(e,t,n){switch(t.tag){case 3:vu(t),In();break;case 5:Mo(t);break;case 1:Ke(t.type)&&ns(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ve(os,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Se,Se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?wu(e,t,n):(ve(Se,Se.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);ve(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Nu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ve(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,gu(e,t,n)}return Tt(e,t,n)}var ju,mi,Eu,Su;ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},mi=function(){},Eu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,sn(wt.current);var i=null;switch(n){case"input":a=Bs(e,a),r=Bs(e,r),i=[];break;case"select":a=V({},a,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":a=Gs(e,a),r=Gs(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Ys(n,r);var l;n=null;for(v in a)if(!r.hasOwnProperty(v)&&a.hasOwnProperty(v)&&a[v]!=null)if(v==="style"){var o=a[v];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(g.hasOwnProperty(v)?i||(i=[]):(i=i||[]).push(v,null));for(v in r){var c=r[v];if(o=a!=null?a[v]:void 0,r.hasOwnProperty(v)&&c!==o&&(c!=null||o!=null))if(v==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(v,n)),n=c;else v==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(v,c)):v==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(v,""+c):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(g.hasOwnProperty(v)?(c!=null&&v==="onScroll"&&we("scroll",e),i||o===c||(i=[])):(i=i||[]).push(v,c))}n&&(i=i||[]).push("style",n);var v=i;(t.updateQueue=v)&&(t.flags|=4)}},Su=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gh(e,t,n){var r=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ke(t.type)&&ts(),He(t),null;case 3:return r=t.stateNode,zn(),ke(Ye),ke(We),Ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(is(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(Ei(mt),mt=null))),mi(e,t),He(t),null;case 5:Za(t);var a=sn(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Eu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(e=sn(wt.current),is(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[bt]=t,r[ir]=i,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(a=0;a<rr.length;a++)we(rr[a],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":al(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":ol(r,i),we("invalid",r)}Ys(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&qr(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&qr(r.textContent,o,e),a=["children",""+o]):g.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&we("scroll",r)}switch(n){case"input":_r(r),ll(r,i,!0);break;case"textarea":_r(r),cl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Jr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[bt]=t,e[ir]=r,ju(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ks(n,r),n){case"dialog":we("cancel",e),we("close",e),a=r;break;case"iframe":case"object":case"embed":we("load",e),a=r;break;case"video":case"audio":for(a=0;a<rr.length;a++)we(rr[a],e);a=r;break;case"source":we("error",e),a=r;break;case"img":case"image":case"link":we("error",e),we("load",e),a=r;break;case"details":we("toggle",e),a=r;break;case"input":al(e,r),a=Bs(e,r),we("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=V({},r,{value:void 0}),we("invalid",e);break;case"textarea":ol(e,r),a=Gs(e,r),we("invalid",e);break;default:a=r}Ys(n,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?ml(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&hl(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ln(e,c):typeof c=="number"&&Ln(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(g.hasOwnProperty(i)?c!=null&&i==="onScroll"&&we("scroll",e):c!=null&&ie(e,i,c,l))}switch(n){case"input":_r(e),ll(e,r,!1);break;case"textarea":_r(e),cl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ge(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?hn(e,!!r.multiple,i,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Su(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=sn(dr.current),sn(wt.current),is(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(i=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return He(t),null;case 13:if(ke(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&rt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_o(),In(),t.flags|=98560,i=!1;else if(i=is(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[bt]=t}else In(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),i=!1}else mt!==null&&(Ei(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Se.current&1)!==0?Ae===0&&(Ae=3):Ci())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return zn(),mi(e,t),e===null&&sr(t.stateNode.containerInfo),He(t),null;case 10:return Wa(t.type._context),He(t),null;case 17:return Ke(t.type)&&ts(),He(t),null;case 19:if(ke(Se),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)gr(i,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=hs(e),l!==null){for(t.flags|=128,gr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Se,Se.current&1|2),t.child}e=e.sibling}i.tail!==null&&Te()>An&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304)}else{if(!r)if(e=hs(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!je)return He(t),null}else 2*Te()-i.renderingStartTime>An&&n!==1073741824&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Te(),t.sibling=null,n=Se.current,ve(Se,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Ii(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function xh(e,t){switch(Oa(t),t.tag){case 1:return Ke(t.type)&&ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),ke(Ye),ke(We),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(ke(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Se),null;case 4:return zn(),null;case 10:return Wa(t.type._context),null;case 22:case 23:return Ii(),null;case 24:return null;default:return null}}var ws=!1,$e=!1,yh=typeof WeakSet=="function"?WeakSet:Set,W=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function pi(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Iu=!1;function vh(e,t){if(Ia=Ur,e=so(),va(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,o=-1,c=-1,v=0,T=0,z=e,I=null;t:for(;;){for(var F;z!==n||a!==0&&z.nodeType!==3||(o=l+a),z!==i||r!==0&&z.nodeType!==3||(c=l+r),z.nodeType===3&&(l+=z.nodeValue.length),(F=z.firstChild)!==null;)I=z,z=F;for(;;){if(z===e)break t;if(I===n&&++v===a&&(o=l),I===i&&++T===r&&(c=l),(F=z.nextSibling)!==null)break;z=I,I=z.parentNode}z=F}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ca={focusedElem:e,selectionRange:n},Ur=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var H=B.memoizedProps,ze=B.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?H:pt(t.type,H),ze);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(D){_e(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return B=Iu,Iu=!1,B}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&pi(t,n,i)}a=a.next}while(a!==r)}}function ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cu(e){var t=e.alternate;t!==null&&(e.alternate=null,Cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[ir],delete t[Ra],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(xi(e,t,n),e=e.sibling;e!==null;)xi(e,t,n),e=e.sibling}function yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,t,n),e=e.sibling;e!==null;)yi(e,t,n),e=e.sibling}var Fe=null,gt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)zu(e,t,n),n=n.sibling}function zu(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ar,n)}catch{}switch(n.tag){case 5:$e||Dn(n,t);case 6:var r=Fe,a=gt;Fe=null,Ht(e,t,n),Fe=r,gt=a,Fe!==null&&(gt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(gt?(e=Fe,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),Kn(e)):za(Fe,n.stateNode));break;case 4:r=Fe,a=gt,Fe=n.stateNode.containerInfo,gt=!0,Ht(e,t,n),Fe=r,gt=a;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&pi(n,t,l),a=a.next}while(a!==r)}Ht(e,t,n);break;case 1:if(!$e&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){_e(n,t,o)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Ht(e,t,n),$e=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yh),t.forEach(function(r){var a=Ch.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Fe=o.stateNode,gt=!1;break e;case 3:Fe=o.stateNode.containerInfo,gt=!0;break e;case 4:Fe=o.stateNode.containerInfo,gt=!0;break e}o=o.return}if(Fe===null)throw Error(u(160));zu(i,l,a),Fe=null,gt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(v){_e(a,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Du(t,e),t=t.sibling}function Du(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Nt(e),r&4){try{xr(3,e,e.return),ks(3,e)}catch(H){_e(e,e.return,H)}try{xr(5,e,e.return)}catch(H){_e(e,e.return,H)}}break;case 1:xt(t,e),Nt(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(xt(t,e),Nt(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var a=e.stateNode;try{Ln(a,"")}catch(H){_e(e,e.return,H)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&il(a,i),Ks(o,l);var v=Ks(o,i);for(l=0;l<c.length;l+=2){var T=c[l],z=c[l+1];T==="style"?ml(a,z):T==="dangerouslySetInnerHTML"?hl(a,z):T==="children"?Ln(a,z):ie(a,T,z,v)}switch(o){case"input":Hs(a,i);break;case"textarea":ul(a,i);break;case"select":var I=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var F=i.value;F!=null?hn(a,!!i.multiple,F,!1):I!==!!i.multiple&&(i.defaultValue!=null?hn(a,!!i.multiple,i.defaultValue,!0):hn(a,!!i.multiple,i.multiple?[]:"",!1))}a[ir]=i}catch(H){_e(e,e.return,H)}}break;case 6:if(xt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(H){_e(e,e.return,H)}}break;case 3:if(xt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(H){_e(e,e.return,H)}break;case 4:xt(t,e),Nt(e);break;case 13:xt(t,e),Nt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(wi=Te())),r&4&&Ru(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?($e=(v=$e)||T,xt(t,e),$e=v):xt(t,e),Nt(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!T&&(e.mode&1)!==0)for(W=e,T=e.child;T!==null;){for(z=W=T;W!==null;){switch(I=W,F=I.child,I.tag){case 0:case 11:case 14:case 15:xr(4,I,I.return);break;case 1:Dn(I,I.return);var B=I.stateNode;if(typeof B.componentWillUnmount=="function"){r=I,n=I.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(H){_e(r,n,H)}}break;case 5:Dn(I,I.return);break;case 22:if(I.memoizedState!==null){Ou(z);continue}}F!==null?(F.return=I,W=F):Ou(z)}T=T.sibling}e:for(T=null,z=e;;){if(z.tag===5){if(T===null){T=z;try{a=z.stateNode,v?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=z.stateNode,c=z.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=fl("display",l))}catch(H){_e(e,e.return,H)}}}else if(z.tag===6){if(T===null)try{z.stateNode.nodeValue=v?"":z.memoizedProps}catch(H){_e(e,e.return,H)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;T===z&&(T=null),z=z.return}T===z&&(T=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:xt(t,e),Nt(e),r&4&&Ru(e);break;case 21:break;default:xt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_u(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ln(a,""),r.flags&=-33);var i=Tu(e);yi(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,o=Tu(e);xi(e,o,l);break;default:throw Error(u(161))}}catch(c){_e(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bh(e,t,n){W=e,Pu(e)}function Pu(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var a=W,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||ws;if(!l){var o=a.alternate,c=o!==null&&o.memoizedState!==null||$e;o=ws;var v=$e;if(ws=l,($e=c)&&!v)for(W=a;W!==null;)l=W,c=l.child,l.tag===22&&l.memoizedState!==null?Mu(a):c!==null?(c.return=l,W=c):Mu(a);for(;i!==null;)W=i,Pu(i),i=i.sibling;W=a,ws=o,$e=v}Au(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,W=i):Au(e)}}function Au(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:$e||ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Oo(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oo(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var T=v.memoizedState;if(T!==null){var z=T.dehydrated;z!==null&&Kn(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}$e||t.flags&512&&gi(t)}catch(I){_e(t,t.return,I)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Ou(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Mu(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ks(4,t)}catch(c){_e(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){_e(t,a,c)}}var i=t.return;try{gi(t)}catch(c){_e(t,i,c)}break;case 5:var l=t.return;try{gi(t)}catch(c){_e(t,l,c)}}}catch(c){_e(t,t.return,c)}if(t===e){W=null;break}var o=t.sibling;if(o!==null){o.return=t.return,W=o;break}W=t.return}}var wh=Math.ceil,Ns=Q.ReactCurrentDispatcher,vi=Q.ReactCurrentOwner,ut=Q.ReactCurrentBatchConfig,de=0,Le=null,Re=null,Ue=0,st=0,Pn=Vt(0),Ae=0,yr=null,ln=0,js=0,bi=0,vr=null,Xe=null,wi=0,An=1/0,zt=null,Es=!1,ki=null,$t=null,Ss=!1,Gt=null,Is=0,br=0,Ni=null,Cs=-1,_s=0;function Ze(){return(de&6)!==0?Te():Cs!==-1?Cs:Cs=Te()}function Zt(e){return(e.mode&1)===0?1:(de&2)!==0&&Ue!==0?Ue&-Ue:sh.transition!==null?(_s===0&&(_s=_l()),_s):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Ll(e.type)),e)}function yt(e,t,n,r){if(50<br)throw br=0,Ni=null,Error(u(185));Hn(e,n,r),((de&2)===0||e!==Le)&&(e===Le&&((de&2)===0&&(js|=n),Ae===4&&Yt(e,Ue)),qe(e,r),n===1&&de===0&&(t.mode&1)===0&&(An=Te()+500,rs&&Ut()))}function qe(e,t){var n=e.callbackNode;sd(e,t);var r=Lr(e,e===Le?Ue:0);if(r===0)n!==null&&Sl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sl(n),t===1)e.tag===0?rh(Vu.bind(null,e)):jo(Vu.bind(null,e)),Jd(function(){(de&6)===0&&Ut()}),n=null;else{switch(Tl(r)){case 1:n=na;break;case 4:n=Il;break;case 16:n=Pr;break;case 536870912:n=Cl;break;default:n=Pr}n=Zu(n,Lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lu(e,t){if(Cs=-1,_s=0,(de&6)!==0)throw Error(u(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Lr(e,e===Le?Ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ts(e,r);else{t=r;var a=de;de|=2;var i=Uu();(Le!==e||Ue!==t)&&(zt=null,An=Te()+500,un(e,t));do try{jh();break}catch(o){Fu(e,o)}while(!0);Ua(),Ns.current=i,de=a,Re!==null?t=0:(Le=null,Ue=0,t=Ae)}if(t!==0){if(t===2&&(a=ra(e),a!==0&&(r=a,t=ji(e,a))),t===1)throw n=yr,un(e,0),Yt(e,r),qe(e,Te()),n;if(t===6)Yt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!kh(a)&&(t=Ts(e,r),t===2&&(i=ra(e),i!==0&&(r=i,t=ji(e,i))),t===1))throw n=yr,un(e,0),Yt(e,r),qe(e,Te()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:cn(e,Xe,zt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=wi+500-Te(),10<t)){if(Lr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ta(cn.bind(null,e,Xe,zt),t);break}cn(e,Xe,zt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ht(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wh(r/1960))-r,10<r){e.timeoutHandle=Ta(cn.bind(null,e,Xe,zt),r);break}cn(e,Xe,zt);break;case 5:cn(e,Xe,zt);break;default:throw Error(u(329))}}}return qe(e,Te()),e.callbackNode===n?Lu.bind(null,e):null}function ji(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Ei(t)),e}function Ei(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function kh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!ft(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~bi,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Vu(e){if((de&6)!==0)throw Error(u(327));On();var t=Lr(e,0);if((t&1)===0)return qe(e,Te()),null;var n=Ts(e,t);if(e.tag!==0&&n===2){var r=ra(e);r!==0&&(t=r,n=ji(e,r))}if(n===1)throw n=yr,un(e,0),Yt(e,t),qe(e,Te()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Xe,zt),qe(e,Te()),null}function Si(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(An=Te()+500,rs&&Ut())}}function on(e){Gt!==null&&Gt.tag===0&&(de&6)===0&&On();var t=de;de|=1;var n=ut.transition,r=xe;try{if(ut.transition=null,xe=1,e)return e()}finally{xe=r,ut.transition=n,de=t,(de&6)===0&&Ut()}}function Ii(){st=Pn.current,ke(Pn)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ts();break;case 3:zn(),ke(Ye),ke(We),Ka();break;case 5:Za(r);break;case 4:zn();break;case 13:ke(Se);break;case 19:ke(Se);break;case 10:Wa(r.type._context);break;case 22:case 23:Ii()}n=n.return}if(Le=e,Re=e=Kt(e.current,null),Ue=st=t,Ae=0,yr=null,bi=js=ln=0,Xe=vr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}rn=null}return e}function Fu(e,t){do{var n=Re;try{if(Ua(),fs.current=xs,ms){for(var r=Ie.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ms=!1}if(an=0,Me=Pe=Ie=null,hr=!1,fr=0,vi.current=null,n===null||n.return===null){Ae=1,yr=t,Re=null;break}e:{var i=e,l=n.return,o=n,c=t;if(t=Ue,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=c,T=o,z=T.tag;if((T.mode&1)===0&&(z===0||z===11||z===15)){var I=T.alternate;I?(T.updateQueue=I.updateQueue,T.memoizedState=I.memoizedState,T.lanes=I.lanes):(T.updateQueue=null,T.memoizedState=null)}var F=du(l);if(F!==null){F.flags&=-257,hu(F,l,o,i,t),F.mode&1&&cu(i,v,t),t=F,c=v;var B=t.updateQueue;if(B===null){var H=new Set;H.add(c),t.updateQueue=H}else B.add(c);break e}else{if((t&1)===0){cu(i,v,t),Ci();break e}c=Error(u(426))}}else if(je&&o.mode&1){var ze=du(l);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),hu(ze,l,o,i,t),Va(Rn(c,o));break e}}i=c=Rn(c,o),Ae!==4&&(Ae=2),vr===null?vr=[i]:vr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=ou(i,c,t);Ao(i,p);break e;case 1:o=c;var d=i.type,y=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($t===null||!$t.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var D=uu(i,o,t);Ao(i,D);break e}}i=i.return}while(i!==null)}Bu(n)}catch(G){t=G,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Uu(){var e=Ns.current;return Ns.current=xs,e===null?xs:e}function Ci(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Le===null||(ln&268435455)===0&&(js&268435455)===0||Yt(Le,Ue)}function Ts(e,t){var n=de;de|=2;var r=Uu();(Le!==e||Ue!==t)&&(zt=null,un(e,t));do try{Nh();break}catch(a){Fu(e,a)}while(!0);if(Ua(),de=n,Ns.current=r,Re!==null)throw Error(u(261));return Le=null,Ue=0,Ae}function Nh(){for(;Re!==null;)Wu(Re)}function jh(){for(;Re!==null&&!Kc();)Wu(Re)}function Wu(e){var t=Gu(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Bu(e):Re=t,vi.current=null}function Bu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=gh(n,t,st),n!==null){Re=n;return}}else{if(n=xh(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ae===0&&(Ae=5)}function cn(e,t,n){var r=xe,a=ut.transition;try{ut.transition=null,xe=1,Eh(e,t,n,r)}finally{ut.transition=a,xe=r}return null}function Eh(e,t,n,r){do On();while(Gt!==null);if((de&6)!==0)throw Error(u(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ad(e,i),e===Le&&(Re=Le=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ss||(Ss=!0,Zu(Pr,function(){return On(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ut.transition,ut.transition=null;var l=xe;xe=1;var o=de;de|=4,vi.current=null,vh(e,n),Du(n,e),$d(Ca),Ur=!!Ia,Ca=Ia=null,e.current=n,bh(n),Qc(),de=o,xe=l,ut.transition=i}else e.current=n;if(Ss&&(Ss=!1,Gt=e,Is=a),i=e.pendingLanes,i===0&&($t=null),Jc(n.stateNode),qe(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Es)throw Es=!1,e=ki,ki=null,e;return(Is&1)!==0&&e.tag!==0&&On(),i=e.pendingLanes,(i&1)!==0?e===Ni?br++:(br=0,Ni=e):br=0,Ut(),null}function On(){if(Gt!==null){var e=Tl(Is),t=ut.transition,n=xe;try{if(ut.transition=null,xe=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Is=0,(de&6)!==0)throw Error(u(331));var a=de;for(de|=4,W=e.current;W!==null;){var i=W,l=i.child;if((W.flags&16)!==0){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var v=o[c];for(W=v;W!==null;){var T=W;switch(T.tag){case 0:case 11:case 15:xr(8,T,i)}var z=T.child;if(z!==null)z.return=T,W=z;else for(;W!==null;){T=W;var I=T.sibling,F=T.return;if(Cu(T),T===v){W=null;break}if(I!==null){I.return=F,W=I;break}W=F}}}var B=i.alternate;if(B!==null){var H=B.child;if(H!==null){B.child=null;do{var ze=H.sibling;H.sibling=null,H=ze}while(H!==null)}}W=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,W=l;else e:for(;W!==null;){if(i=W,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:xr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,W=p;break e}W=i.return}}var d=e.current;for(W=d;W!==null;){l=W;var y=l.child;if((l.subtreeFlags&2064)!==0&&y!==null)y.return=l,W=y;else e:for(l=d;W!==null;){if(o=W,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:ks(9,o)}}catch(G){_e(o,o.return,G)}if(o===l){W=null;break e}var D=o.sibling;if(D!==null){D.return=o.return,W=D;break e}W=o.return}}if(de=a,Ut(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ar,e)}catch{}r=!0}return r}finally{xe=n,ut.transition=t}}return!1}function Hu(e,t,n){t=Rn(n,t),t=ou(e,t,1),e=Bt(e,t,1),t=Ze(),e!==null&&(Hn(e,1,t),qe(e,t))}function _e(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Rn(n,e),e=uu(t,e,1),t=Bt(t,e,1),e=Ze(),t!==null&&(Hn(t,1,e),qe(t,e));break}}t=t.return}}function Sh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ue&n)===n&&(Ae===4||Ae===3&&(Ue&130023424)===Ue&&500>Te()-wi?un(e,0):bi|=n),qe(e,t)}function $u(e,t){t===0&&((e.mode&1)===0?t=1:(t=Mr,Mr<<=1,(Mr&130023424)===0&&(Mr=4194304)));var n=Ze();e=Ct(e,t),e!==null&&(Hn(e,t,n),qe(e,n))}function Ih(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$u(e,n)}function Ch(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),$u(e,n)}var Gu;Gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qe=!1,ph(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,je&&(t.flags&1048576)!==0&&Eo(t,as,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bs(e,t),e=t.pendingProps;var a=jn(t,We.current);Tn(t,n),a=qa(null,t,r,e,a,n);var i=Ja();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(i=!0,ns(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,$a(t),a.updater=ys,t.stateNode=a,a._reactInternals=t,ai(t,r,e,n),t=ui(null,t,r,!0,i,n)):(t.tag=0,je&&i&&Aa(t),Ge(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Th(r),e=pt(r,e),a){case 0:t=oi(null,t,r,e,n);break e;case 1:t=yu(null,t,r,e,n);break e;case 11:t=fu(null,t,r,e,n);break e;case 14:t=mu(null,t,r,pt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),oi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),yu(e,t,r,a,n);case 3:e:{if(vu(t),e===null)throw Error(u(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Po(e,t),ds(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Rn(Error(u(423)),t),t=bu(e,t,r,n,a);break e}else if(r!==a){a=Rn(Error(u(424)),t),t=bu(e,t,r,n,a);break e}else for(rt=Lt(t.stateNode.containerInfo.firstChild),nt=t,je=!0,mt=null,n=Ro(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===a){t=Tt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Mo(t),e===null&&La(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,_a(r,a)?l=null:i!==null&&_a(r,i)&&(t.flags|=32),xu(e,t),Ge(e,t,l,n),t.child;case 6:return e===null&&La(t),null;case 13:return wu(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),fu(e,t,r,a,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,ve(os,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===a.children&&!Ye.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=_t(-1,n&-n),c.tag=2;var v=i.updateQueue;if(v!==null){v=v.shared;var T=v.pending;T===null?c.next=c:(c.next=T.next,T.next=c),v.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ba(i.return,n,t),o.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(u(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ba(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ge(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Tn(t,n),a=lt(a),r=r(a),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,a=pt(r,t.pendingProps),a=pt(r.type,a),mu(e,t,r,a,n);case 15:return pu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),bs(e,t),t.tag=1,Ke(r)?(e=!0,ns(t)):e=!1,Tn(t,n),iu(t,r,a),ai(t,r,a,n),ui(null,t,r,!0,e,n);case 19:return Nu(e,t,n);case 22:return gu(e,t,n)}throw Error(u(156,t.tag))};function Zu(e,t){return El(e,t)}function _h(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new _h(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Th(e){if(typeof e=="function")return _i(e)?1:0;if(e!=null){if(e=e.$$typeof,e===J)return 11;if(e===Oe)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zs(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")_i(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $:return dn(n.children,a,i,t);case oe:l=8,a|=8;break;case Ee:return e=ct(12,n,t,a|2),e.elementType=Ee,e.lanes=i,e;case ce:return e=ct(13,n,t,a),e.elementType=ce,e.lanes=i,e;case se:return e=ct(19,n,t,a),e.elementType=se,e.lanes=i,e;case me:return Rs(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case be:l=10;break e;case De:l=9;break e;case J:l=11;break e;case Oe:l=14;break e;case pe:l=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=ct(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function dn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Rs(e,t,n,r){return e=ct(22,e,r,t),e.elementType=me,e.lanes=n,e.stateNode={isHidden:!1},e}function Ti(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function zi(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ri(e,t,n,r,a,i,l,o,c){return e=new zh(e,t,n,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(i),e}function Rh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yu(e){if(!e)return Ft;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Ke(n))return ko(e,n,t)}return t}function Ku(e,t,n,r,a,i,l,o,c){return e=Ri(n,r,!0,e,a,i,l,o,c),e.context=Yu(null),n=e.current,r=Ze(),a=Zt(n),i=_t(r,a),i.callback=t??null,Bt(n,i,a),e.current.lanes=a,Hn(e,a,r),qe(e,r),e}function Ds(e,t,n,r){var a=t.current,i=Ze(),l=Zt(a);return n=Yu(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(a,t,l),e!==null&&(yt(e,a,l,i),cs(e,a,l)),l}function Ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Di(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}function Dh(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pi(e){this._internalRoot=e}As.prototype.render=Pi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ds(e,t,null,null)},As.prototype.unmount=Pi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Ds(null,e,null,null)}),t[jt]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Ol(e)}};function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qu(){}function Ph(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var v=Ps(l);i.call(v)}}var l=Ku(t,r,e,0,null,!1,!1,"",qu);return e._reactRootContainer=l,e[jt]=l.current,sr(e.nodeType===8?e.parentNode:e),on(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var v=Ps(c);o.call(v)}}var c=Ri(e,0,!1,null,null,!1,!1,"",qu);return e._reactRootContainer=c,e[jt]=c.current,sr(e.nodeType===8?e.parentNode:e),on(function(){Ds(t,c,n,r)}),c}function Ms(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var c=Ps(l);o.call(c)}}Ds(t,l,e,a)}else l=Ph(n,t,e,a,r);return Ps(l)}zl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(aa(t,n|1),qe(t,Te()),(de&6)===0&&(An=Te()+500,Ut()))}break;case 13:on(function(){var r=Ct(e,1);if(r!==null){var a=Ze();yt(r,e,1,a)}}),Di(e,1)}},ia=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Ze();yt(t,e,134217728,n)}Di(e,134217728)}},Rl=function(e){if(e.tag===13){var t=Zt(e),n=Ct(e,t);if(n!==null){var r=Ze();yt(n,e,t,r)}Di(e,t)}},Dl=function(){return xe},Pl=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},qs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=es(r);if(!a)throw Error(u(90));sl(r),Hs(r,a)}}}break;case"textarea":ul(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}},yl=Si,vl=on;var Ah={usingClientEntryPoint:!1,Events:[lr,kn,es,gl,xl,Si]},wr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oh={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nl(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Dh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Ar=Ls.inject(Oh),vt=Ls}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ai(t))throw Error(u(200));return Rh(e,t,null,n)},Je.createRoot=function(e,t){if(!Ai(e))throw Error(u(299));var n=!1,r="",a=Xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ri(e,1,!1,null,null,n,!1,r,a),e[jt]=t.current,sr(e.nodeType===8?e.parentNode:e),new Pi(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Nl(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return on(e)},Je.hydrate=function(e,t,n){if(!Os(t))throw Error(u(200));return Ms(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Ai(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=Xu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ku(t,null,e,1,n??null,a,!1,i,l),e[jt]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new As(t)},Je.render=function(e,t,n){if(!Os(t))throw Error(u(200));return Ms(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!Os(e))throw Error(u(40));return e._reactRootContainer?(on(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1},Je.unstable_batchedUpdates=Si,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Os(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Ms(e,t,n,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var ic;function Hh(){if(ic)return Li.exports;ic=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(w){console.error(w)}}return h(),Li.exports=Bh(),Li.exports}var lc;function $h(){if(lc)return Vs;lc=1;var h=Hh();return Vs.createRoot=h.createRoot,Vs.hydrateRoot=h.hydrateRoot,Vs}var Gh=$h();const Zh=Nc(Gh);var Yh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Kh=h=>h.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y=(h,w)=>{const u=M.forwardRef(({color:f="currentColor",size:g=24,strokeWidth:N=2,absoluteStrokeWidth:P,children:x,...b},j)=>M.createElement("svg",{ref:j,...Yh,width:g,height:g,stroke:f,strokeWidth:P?Number(N)*24/Number(g):N,className:`lucide lucide-${Kh(h)}`,...b},[...w.map(([_,E])=>M.createElement(_,E)),...(Array.isArray(x)?x:[x])||[]]));return u.displayName=`${h}`,u},Xt=Y("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),Ir=Y("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Xi=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Hi=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Qh=Y("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]),Ec=Y("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Xh=Y("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]),qh=Y("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),Sc=Y("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),Jh=Y("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),qi=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Fs=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Ji=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),ef=Y("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Ic=Y("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]),Ws=Y("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),el=Y("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),tf=Y("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),nf=Y("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Us=Y("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Cc=Y("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),_c=Y("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),Tc=Y("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),Sr=Y("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),rf=Y("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]),zc=Y("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]),sf=Y("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),af=Y("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),tl=Y("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),Rc=Y("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),lf=Y("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),Cr=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),oc=Y("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]),uc=Y("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]),$i=Y("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),cc=Y("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),of=Y("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),uf=Y("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]),cf=Y("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),dc=Y("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),df=Y("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),nl=Y("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),hf=Y("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),ff=Y("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]),Dc=Y("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Pc=Y("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),hc=Y("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),mf=Y("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Ac=Y("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),fc=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Oc=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),pf=Y("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]),gf=Y("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]),Mc=Y("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),Lc=Y("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]),xf=Y("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]),mc=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Vc=Y("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),pc=2e3,yf=1500;let Nr=null;const gc=()=>(Nr||(Nr=new Audio,Nr.loop=!0,Nr.volume=0),Nr),Gi=({isSetupMode:h=!1,isPlaying:w,onToggle:u,volume:f,onVolumeChange:g,audioSrc:N=null,trackTitle:P="UNKNOWN",trackComposer:x="UNKNOWN"})=>{const b=M.useRef(null),j=(k,C,A,O)=>{b.current&&window.clearInterval(b.current);const L=k.volume,te=C-L;if(Math.abs(te)<.01){k.volume=C,O&&O();return}const re=Date.now();b.current=window.setInterval(()=>{const ie=Date.now()-re,Q=Math.min(ie/A,1);k.volume=L+te*Q,Q>=1&&(b.current&&window.clearInterval(b.current),k.volume=C,O&&O())},50)};M.useEffect(()=>{const k=gc();if(N&&k.src!==N&&(k.src=N),w&&N)if(k.paused){k.volume=0;const C=k.play();C!==void 0&&C.then(()=>{j(k,f,pc)}).catch(A=>console.error("Playback failed",A))}else j(k,f,pc);else k.paused||j(k,0,yf,()=>{k.pause()});return()=>{b.current&&window.clearInterval(b.current)}},[w,N]),M.useEffect(()=>{const k=gc();w&&!k.paused&&(b.current&&window.clearInterval(b.current),k.volume=f)},[f]);const _=k=>{g(parseFloat(k.target.value))},E=!N;return h?s.jsx("div",{className:"flex flex-col gap-1 w-full",children:s.jsxs("button",{onClick:u,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${w?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(of,{size:14})," AUDIO_SYSTEM"]}),w?s.jsx(Xt,{size:14,className:"animate-pulse"}):s.jsx("span",{children:"OFF"})]})}):s.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[s.jsxs("button",{onClick:u,disabled:E,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
            ${E?"bg-ash-black text-ash-gray border-ash-gray/30 opacity-50 cursor-not-allowed":w?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"relative",children:w&&!E?s.jsx(tf,{size:16,className:"animate-spin"}):s.jsx(Mc,{size:16})}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"BGM"})]}),s.jsx("div",{className:"flex items-center gap-2",children:w&&!E?s.jsxs("div",{className:"flex gap-0.5 items-end h-3",children:[s.jsx("div",{className:"w-0.5 bg-current animate-[bounce_1s_infinite] h-2"}),s.jsx("div",{className:"w-0.5 bg-current animate-[bounce_1.2s_infinite] h-3"}),s.jsx("div",{className:"w-0.5 bg-current animate-[bounce_0.8s_infinite] h-1"})]}):s.jsx("span",{className:"text-[10px] font-mono font-bold",children:E?"NO_SIGNAL":"OFF"})})]}),w&&!E&&s.jsxs("div",{className:"flex flex-col gap-2 px-3 py-2 border-l-2 border-ash-light bg-ash-dark/30 animate-fade-in",children:[s.jsxs("div",{className:"flex justify-between items-center text-[9px] font-mono text-ash-gray",children:[s.jsx("span",{className:"truncate max-w-[60%]",children:P}),s.jsx("span",{className:"opacity-50 truncate max-w-[35%] text-right",children:x})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(gf,{size:10,className:"text-ash-gray"}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:f,onChange:_,className:"flex-1 h-1 bg-ash-black border border-ash-gray/30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-ash-light [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ash-black hover:[&::-webkit-slider-thumb]:bg-ash-white transition-all"}),s.jsxs("span",{className:"text-[9px] font-mono text-ash-gray w-6 text-right",children:[Math.round(f*100),"%"]})]})]})]})},Zi=({value:h,onChange:w,isSetupMode:u=!1,language:f})=>{M.useEffect(()=>{h!==void 0&&(h?document.body.classList.add("crt-enabled"):document.body.classList.remove("crt-enabled"))},[h]);const g=()=>{w&&h!==void 0&&w(!h)},N=()=>f?f==="zh-CN"?"(推荐启用)":f==="zh-TW"?"(推薦啟用)":"(RECOMMENDED)":"";return u?s.jsxs("button",{onClick:g,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${h?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx($i,{size:14}),"CRT_EFFECTS",s.jsx("span",{className:"opacity-60 text-[10px] scale-90 origin-left",children:N()})]}),h?s.jsx(qi,{size:14}):s.jsx("span",{children:"OFF"})]}):s.jsxs("button",{onClick:g,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${h?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx($i,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"CRT FX"})]}),s.jsx("div",{className:"flex items-center gap-2",children:h?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-[10px] font-mono font-bold",children:"ON"}),s.jsx(Vc,{size:10,className:"fill-current animate-pulse"})]}):s.jsx("span",{className:"text-[10px] font-mono font-bold",children:"OFF"})})]})},Yi=({value:h,onChange:w,isSetupMode:u=!1})=>{M.useEffect(()=>{h!==void 0&&(h?document.body.classList.add("light-theme"):document.body.classList.remove("light-theme"))},[h]);const f=()=>{w&&h!==void 0&&w(!h)};return u?s.jsxs("button",{onClick:f,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${h?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[h?s.jsx(hc,{size:14}):s.jsx(cc,{size:14}),"THEME: ",h?"LIGHT":"DARK"]}),s.jsx(qi,{size:14,className:!h&&!w?"hidden":""})," "]}):s.jsxs("button",{onClick:f,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${h?"bg-ash-black text-ash-light border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[h?s.jsx(hc,{size:16}):s.jsx(cc,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Theme"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:h?"LIGHT":"DARK"})]})},Ki=({isSetupMode:h=!1,language:w})=>{const[u,f]=M.useState(!1);M.useEffect(()=>{const P=()=>{f(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",P),()=>document.removeEventListener("fullscreenchange",P)},[]);const g=async()=>{try{document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch(P){console.error("Error toggling fullscreen:",P)}},N=()=>w?w==="zh-CN"?"(推荐)":w==="zh-TW"?"(推薦)":"(REC)":"";return h?s.jsxs("button",{onClick:g,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${u?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[u?s.jsx(uc,{size:14}):s.jsx(oc,{size:14}),"FULLSCREEN",s.jsx("span",{className:"opacity-60 text-[10px] scale-90 origin-left",children:N()})]}),u?s.jsx(qi,{size:14}):s.jsx("span",{children:"OFF"})]}):s.jsxs("button",{onClick:g,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${u?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[u?s.jsx(uc,{size:16}):s.jsx(oc,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Display"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:u?"FULL":"WIN"})]})},vf=({activeTab:h,setActiveTab:w,language:u,setLanguage:f,crtEnabled:g,setCrtEnabled:N,isLightTheme:P,setIsLightTheme:x,bgmPlaying:b,setBgmPlaying:j,bgmVolume:_,setBgmVolume:E,audioSrc:k,trackTitle:C,trackComposer:A})=>{const[O,L]=M.useState(!1),re={"zh-CN":{home:"根控制台",characters:"人员档案",database:"数据资料",reader:"阅读终端",sidestories:"支线档案",config:"系统设置",mobileHome:"主页",mobileChars:"人员",mobileData:"数据",mobileRead:"阅读",mobileSide:"支线"},"zh-TW":{home:"根控制台",characters:"人員檔案",database:"數據資料",reader:"閱讀終端",sidestories:"支線檔案",config:"系統設置",mobileHome:"主頁",mobileChars:"人員",mobileData:"數據",mobileRead:"閱讀",mobileSide:"支線"},en:{home:"ROOT_MENU",characters:"PERSONNEL",database:"DATA_BANK",reader:"READ_MODE",sidestories:"FRAGMENTS",config:"SYS_CONFIG",mobileHome:"ROOT",mobileChars:"TEAM",mobileData:"DATA",mobileRead:"READ",mobileSide:"SIDE"}}[u],ie=[{id:"home",label:re.home,mobileLabel:re.mobileHome,icon:af},{id:"characters",label:re.characters,mobileLabel:re.mobileChars,icon:Oc},{id:"database",label:re.database,mobileLabel:re.mobileData,icon:el},{id:"reader",label:re.reader,mobileLabel:re.mobileRead,icon:Xh},{id:"sidestories",label:re.sidestories,mobileLabel:re.mobileSide,icon:Tc}],Q=()=>{f(u==="zh-CN"?"zh-TW":u==="zh-TW"?"en":"zh-CN")},U=()=>u==="zh-CN"?"简":u==="zh-TW"?"繁":"EN";return s.jsxs(s.Fragment,{children:[s.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 lg:static lg:w-72 lg:h-full bg-ash-black border-t-2 lg:border-t-0 lg:border-r-2 border-ash-light/20 z-50 flex lg:flex-col justify-between p-2 lg:p-6 shadow-2xl transition-colors duration-300 lg:overflow-y-auto no-scrollbar",children:[s.jsxs("div",{className:"hidden lg:block mb-8 border-b-2 border-ash-light/20 pb-6 shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsxs("div",{className:"relative w-12 h-12 bg-ash-black border border-ash-gray/50 p-1 shadow-hard group",children:[s.jsx("img",{src:"https://free.picui.cn/free/2025/12/08/6936e856897d6.png",alt:"Nova Labs",className:"w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"}),s.jsx("div",{className:"absolute -top-1 -right-1 w-2 h-2 bg-ash-light"}),s.jsx("div",{className:"absolute -bottom-1 -left-1 w-2 h-2 bg-ash-light"})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-ash-light animate-pulse"}),s.jsx("div",{className:"w-2 h-2 bg-ash-gray"})]})]}),s.jsxs("h1",{className:"text-4xl font-black text-ash-light tracking-tighter uppercase mb-1",style:{textShadow:"2px 2px 0 #333"},children:["NOVA",s.jsx("br",{}),"LABS"]}),s.jsx("div",{className:"text-[10px] text-ash-gray font-mono bg-ash-dark p-1 inline-block border border-ash-gray",children:"ARCHIVE_SYS // TL.1.12-T"})]}),s.jsxs("div",{className:"flex lg:flex-col justify-between lg:justify-start w-full gap-1 lg:gap-3 lg:mb-auto shrink-0",children:[ie.map((K,$)=>{const oe=K.id==="reader"||K.id==="sidestories",Ee=$===3;return s.jsxs(jc.Fragment,{children:[Ee&&s.jsx("div",{className:"hidden lg:block h-px bg-ash-gray/30 w-full my-2"}),s.jsxs("button",{onClick:()=>{w(K.id),L(!1)},className:`flex-1 lg:flex-none flex flex-col lg:flex-row items-center justify-center lg:justify-start py-2 lg:px-4 lg:py-4 border-2 transition-all duration-300 group relative overflow-hidden ${h===K.id?"bg-ash-light text-ash-black border-ash-light shadow-hard":oe?"bg-ash-dark/40 text-ash-light border-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light shadow-sm":"bg-ash-black text-ash-gray border-ash-gray/30 hover:border-ash-light hover:text-ash-light"}`,children:[h===K.id&&s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),oe&&h!==K.id&&s.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-ash-gray/50 group-hover:bg-ash-black transition-colors hidden lg:block"}),s.jsx(K.icon,{size:18,className:`mb-1 lg:mb-0 lg:mr-3 z-10 transition-transform ${oe&&h!==K.id?"group-hover:scale-110":""}`,strokeWidth:2.5}),s.jsx("span",{className:`hidden lg:inline text-sm font-bold tracking-widest z-10 whitespace-normal text-left ${oe?"text-base uppercase":""}`,children:K.label}),s.jsx("span",{className:"lg:hidden text-[10px] font-bold tracking-widest z-10 whitespace-nowrap",children:K.mobileLabel}),oe&&s.jsx("div",{className:"absolute top-1 right-1 lg:top-1/2 lg:-translate-y-1/2 lg:right-2 w-1.5 h-1.5 bg-current opacity-50 rounded-full lg:rounded-none lg:w-1 lg:h-3"})]})]},K.id)}),s.jsxs("button",{onClick:()=>L(!O),className:`flex-1 lg:hidden flex flex-col items-center justify-center py-2 border-2 transition-all duration-300 group relative overflow-hidden ${O?"bg-ash-light text-ash-black border-ash-light shadow-hard":"bg-ash-black text-ash-gray border-ash-gray/30 hover:border-ash-light hover:text-ash-light"}`,children:[O&&s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),s.jsx(dc,{size:18,className:"mb-1 z-10",strokeWidth:2.5}),s.jsx("span",{className:"text-[10px] font-bold tracking-widest z-10",children:"CFG"})]})]}),s.jsxs("div",{className:"hidden lg:flex flex-col gap-2 mt-8 border-t-2 border-dashed border-ash-gray/30 pt-6 shrink-0",children:[s.jsx("div",{className:"text-[10px] text-ash-gray font-mono mb-1 uppercase px-1",children:"[SYSTEM_CONFIG]"}),s.jsxs("button",{onClick:Q,className:"flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light group",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(Sr,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Language"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:U()})]}),s.jsx(Gi,{isPlaying:b,onToggle:()=>j(!b),volume:_,onVolumeChange:E,audioSrc:k,trackTitle:C,trackComposer:A}),s.jsx(Zi,{value:g,onChange:N,language:u}),s.jsx(Ki,{language:u}),s.jsx(Yi,{value:P,onChange:x})]}),s.jsxs("div",{className:"hidden lg:block mt-6 pt-4 border-t-2 border-dashed border-ash-gray/30 text-ash-gray text-[10px] font-mono leading-tight shrink-0",children:[s.jsx("p",{children:"> ENCRYPTION: STATIC"}),s.jsx("div",{className:"w-full bg-ash-dark h-2 border border-ash-gray mb-1",children:s.jsx("div",{className:"bg-ash-light h-full w-[98%] animate-pulse"})}),s.jsx("p",{children:"> PING: 0.04ms"})]})]}),O&&s.jsx("div",{className:"fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-[2px]",onClick:()=>L(!1),children:s.jsxs("div",{className:"absolute bottom-[90px] left-4 right-4 bg-ash-black border-2 border-ash-light p-5 shadow-hard animate-slide-in z-50 max-h-[70vh] overflow-y-auto",onClick:K=>K.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4 border-b-2 border-ash-gray/30 pb-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(dc,{size:16,className:"text-ash-light"}),s.jsx("span",{className:"text-xs font-bold text-ash-light font-mono uppercase tracking-wider",children:re.config})]}),s.jsx("div",{className:"text-[10px] text-ash-gray font-mono",children:"V.3.1"})]}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsxs("button",{onClick:Q,className:"flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard bg-ash-black text-ash-gray border-ash-gray/50 active:border-ash-light active:text-ash-light group",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(Sr,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Language"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:U()})]}),s.jsx(Gi,{isPlaying:b,onToggle:()=>j(!b),volume:_,onVolumeChange:E,audioSrc:k,trackTitle:C,trackComposer:A}),s.jsx(Zi,{value:g,onChange:N,language:u}),s.jsx(Ki,{language:u}),s.jsx(Yi,{value:P,onChange:x})]}),s.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-ash-gray/30 text-[10px] text-ash-gray font-mono text-center",children:"NOVA_LABS_ARCHIVE // SYSTEM_OVERLAY"})]})})]})},Ce=({children:h,className:w="",delay:u=0})=>{const[f,g]=M.useState(!1),N=M.useRef(null);return M.useEffect(()=>{const P=new IntersectionObserver(([x])=>{x.isIntersecting&&(g(!0),P.disconnect())},{threshold:.1,rootMargin:"50px"});return N.current&&P.observe(N.current),()=>P.disconnect()},[]),s.jsx("div",{ref:N,style:{transitionDelay:`${u}ms`},className:`transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) transform ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"} ${w}`,children:h})},jr=[{id:"welcome_back",speaker:"PYO",text:{"zh-CN":"啊，很高兴看见您回来！","zh-TW":"啊，很高興看見您回來！",en:"Ah, glad to see you back!"}},{id:"long_time_void",speaker:"PYO",text:{"zh-CN":"void...我真的很久没见过你了","zh-TW":"void...我真的很久沒見過你了",en:"void... I really haven't seen you in a long time."}},{id:"hello",speaker:"PYO",text:{"zh-CN":"你好！！","zh-TW":"你好！！",en:"Hello!!"}},{id:"are_you_there",speaker:"PYO",text:{"zh-CN":"在吗？void？","zh-TW":"在嗎？void？",en:"Are you there? void?"}},{id:"across_screen",speaker:"PYO",text:{"zh-CN":"屏幕对面的...该不会是...","zh-TW":"螢幕對面的...該不會是...",en:"The one across the screen... could it be..."}},{id:"time_sector",speaker:"PYO",text:{"zh-CN":"我们现在是在什么时间区段啊？？","zh-TW":"我們現在是在什麼時間區段啊？？",en:"What time sector are we in right now??"}},{id:"still_alive",speaker:"PYO",text:{"zh-CN":"我们，还活着吗？...","zh-TW":"我們，還活著嗎？...",en:"Are we... still alive?..."}}],bf=({onNavigate:h,language:w,setLanguage:u})=>{const[f,g]=M.useState(""),[N,P]=M.useState(!0),[x,b]=M.useState(()=>Math.floor(Math.random()*jr.length)),j=()=>{b(k=>{let C=Math.floor(Math.random()*jr.length);return C===k&&jr.length>1&&(C=Math.floor(Math.random()*jr.length)),C})},_=M.useMemo(()=>{const k=jr[x],C=k.text[w];return w==="zh-CN"?`> 正在建立加密连接...
> 发送者: ${k.speaker}

“${C}”

> 讯号待机中。`:w==="zh-TW"?`> 正在建立加密連接...
> 發送者: ${k.speaker}

「${C}」

> 訊號待機中。`:`> ESTABLISHING ENCRYPTED CONNECTION...
> SENDER: ${k.speaker}

"${C}"

> SIGNAL STANDBY.`},[w,x]);M.useEffect(()=>{let k=0;const C=30;g("");const A=setInterval(()=>{k<_.length?(g(O=>O+_.charAt(k)),k++):clearInterval(A)},C);return()=>clearInterval(A)},[w,_]),M.useEffect(()=>{const k=setInterval(()=>P(C=>!C),500);return()=>clearInterval(k)},[]);const E={"zh-CN":{main_archive:"主线档案",main_desc:"进入核心故事线，访问已解密的记忆节点。",side_archive:"支线扇区",side_desc:"访问碎片化数据，探索未知的时间分支。",enter:"执行协议",access:"访问扇区",status:"状态：正常"},"zh-TW":{main_archive:"主線檔案",main_desc:"進入核心故事線，訪問已解密的記憶節點。",side_archive:"支線扇區",side_desc:"訪問碎片化數據，探索未知的時間分支。",enter:"執行協議",access:"訪問扇區",status:"狀態：正常"},en:{main_archive:"MAIN_ARCHIVE",main_desc:"Access core storyline. View decrypted memory nodes.",side_archive:"MEMORY_SECTOR",side_desc:"Access fragmented data. Explore unknown time branches.",enter:"EXECUTE",access:"ACCESS",status:"STATUS: OK"}}[w];return s.jsxs("div",{className:"flex flex-col min-h-full bg-halftone text-ash-light font-mono relative",children:[s.jsxs("div",{className:"flex-1 flex flex-col p-4 md:p-8 pb-32 lg:pb-12",children:[s.jsx("div",{className:"w-full max-w-7xl mx-auto mb-6 shrink-0",children:s.jsxs(Ce,{className:"w-full bg-ash-black border-2 border-ash-gray p-4 md:p-6 shadow-hard relative min-h-[160px] md:min-h-[180px] flex flex-col",children:[s.jsx("div",{className:"absolute top-2 right-2 flex gap-2",children:s.jsxs("button",{onClick:j,className:"flex items-center gap-1 text-[10px] font-bold bg-ash-gray/20 text-ash-gray border border-ash-gray/50 px-2 hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all group",children:[s.jsx(cf,{size:10,className:"group-hover:animate-spin"}),"REROUTE"]})}),s.jsxs("h2",{className:"text-xs font-bold text-ash-gray mb-4 flex items-center gap-2 uppercase border-b border-dashed border-ash-gray/30 pb-2",children:[s.jsx(Ac,{size:14})," ROOT_CONSOLE // V.3.2.1"]}),s.jsxs("div",{className:"flex-1 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-ash-gray",children:[f,N&&s.jsx("span",{className:"inline-block w-2 h-4 bg-ash-light ml-1 align-middle"})]})]})}),s.jsxs("div",{className:"flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8",children:[s.jsx(Ce,{delay:200,className:"flex-1",children:s.jsxs("button",{onClick:()=>h("reader"),className:"w-full h-full min-h-[240px] bg-ash-black border-2 border-ash-gray hover:border-ash-light hover:shadow-hard transition-all duration-300 group relative flex flex-col overflow-hidden text-left",children:[s.jsxs("div",{className:"w-full p-4 border-b-2 border-ash-gray bg-ash-dark/30 flex justify-between items-center group-hover:bg-ash-light group-hover:text-ash-black transition-colors",children:[s.jsxs("div",{className:"flex items-center gap-2 font-bold font-mono",children:[s.jsx(Ec,{size:18}),s.jsx("span",{children:"ARCHIVE_CORE"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full animate-pulse"}),s.jsx("div",{className:"w-2 h-2 bg-ash-gray/50 rounded-full"})]})]}),s.jsxs("div",{className:"p-6 md:p-10 flex-1 flex flex-col justify-center relative z-10",children:[s.jsx("h3",{className:"text-3xl md:text-5xl font-black uppercase text-ash-light mb-4 group-hover:scale-105 transition-transform origin-left",children:E.main_archive}),s.jsx("p",{className:"text-ash-gray text-xs md:text-sm max-w-sm mb-8 font-mono leading-relaxed",children:E.main_desc}),s.jsxs("div",{className:"mt-auto flex items-center gap-2 text-ash-light font-bold text-sm uppercase group-hover:translate-x-2 transition-transform",children:[E.enter," ",s.jsx(Hi,{size:16})]})]}),s.jsx("div",{className:"absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity",children:s.jsx(Cr,{size:180,strokeWidth:.5})}),s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-10 pointer-events-none"})]})}),s.jsx(Ce,{delay:300,className:"flex-1",children:s.jsxs("button",{onClick:()=>h("sidestories"),className:"w-full h-full min-h-[240px] bg-slate-950 border-2 border-slate-700 hover:border-cyan-400 hover:shadow-[4px_4px_0_theme(colors.cyan.400)] transition-all duration-300 group relative flex flex-col overflow-hidden text-left",children:[s.jsxs("div",{className:"w-full p-4 border-b-2 border-slate-700 bg-slate-900/50 flex justify-between items-center group-hover:bg-cyan-400 group-hover:text-black transition-colors",children:[s.jsxs("div",{className:"flex items-center gap-2 font-bold font-mono text-cyan-500 group-hover:text-black",children:[s.jsx(Tc,{size:18}),s.jsx("span",{children:"MEMORY_FRAGS"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full animate-pulse"}),s.jsx("div",{className:"w-2 h-2 bg-slate-700 rounded-full"})]})]}),s.jsxs("div",{className:"p-6 md:p-10 flex-1 flex flex-col justify-center relative z-10",children:[s.jsx("h3",{className:"text-3xl md:text-5xl font-black uppercase text-cyan-100 mb-4 group-hover:text-cyan-300 group-hover:scale-105 transition-transform origin-left drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]",children:E.side_archive}),s.jsx("p",{className:"text-slate-400 text-xs md:text-sm max-w-sm mb-8 font-mono leading-relaxed group-hover:text-cyan-200/80",children:E.side_desc}),s.jsxs("div",{className:"mt-auto flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase group-hover:text-cyan-300 group-hover:translate-x-2 transition-transform",children:[E.access," ",s.jsx(Hi,{size:16})]})]}),s.jsx("div",{className:"absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity text-cyan-500",children:s.jsx(el,{size:200,strokeWidth:.5})}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,transparent_20%,rgba(6,182,212,0.05)_50%,transparent_80%)] bg-[length:100%_4px] animate-scanline pointer-events-none opacity-30"})]})})]})]}),s.jsxs("div",{className:"absolute bottom-20 lg:bottom-0 left-0 right-0 bg-ash-black border-t-2 border-ash-gray p-2 text-[10px] text-ash-gray font-mono flex justify-between items-center select-none z-20",children:[s.jsxs("div",{className:"flex items-center gap-2 md:gap-4 px-2 overflow-hidden shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[s.jsx(Lc,{size:10}),s.jsx("span",{className:"hidden md:inline",children:"CONNECTION:"}),s.jsx("span",{className:"text-ash-light",children:"SECURE"})]}),s.jsx("div",{className:"h-3 w-px bg-ash-gray/30 shrink-0"}),s.jsx("div",{className:"truncate",children:"ID: VOID-XPSDVN"}),s.jsx("div",{className:"h-3 w-px bg-ash-gray/30 hidden md:block shrink-0"}),s.jsx("div",{className:"hidden md:block shrink-0",children:"LOC: SECTOR_0"})]}),s.jsxs("div",{className:"flex items-center gap-2 px-2 shrink-0",children:[s.jsx("span",{className:"uppercase text-ash-gray/50 hidden md:inline",children:"Input_Lang:"}),s.jsx("div",{className:"flex gap-1 font-bold",children:["zh-CN","zh-TW","en"].map(k=>s.jsx("button",{onClick:()=>u(k),className:`px-1.5 py-0.5 border transition-colors ${w===k?"bg-ash-light text-ash-black border-ash-light":"bg-transparent text-ash-gray border-ash-gray/50 hover:text-ash-light"}`,children:k==="en"?"EN":k==="zh-CN"?"CN":"TW"},k))})]})]})]})},wf=[{id:"point",alias:"Z.Point",themeColor:"text-zinc-400",stats:{strength:5,intelligence:8,agility:9,mental:7,resonance:10},translations:{"zh-CN":{name:"零点",role:"前线",tags:["活力","搞事","直觉系"],quote:"只要跑得够快，麻烦就追不上我！……大概？",description:["团队的主心骨，性格活泼外向，具有极高的独立性。","脑袋里经常装着小坏心思，容易吃苦头，但恢复得也快。","和芷漓、泽洛都很亲密，是从小到大一直陪伴着的伙伴。","对公行动较保守，但对重要任务有自己的盘算，且拥有三人中最强的隐形实力。"]},"zh-TW":{name:"零點",role:"前線",tags:["活力","搞事","直覺系"],quote:"只要跑得夠快，麻煩就追不上我！……大概？",description:["團隊的主心骨，性格活潑外向，具有極高的獨立性。","腦袋裡經常裝著小壞心思，容易吃苦頭，但恢復得也快。","和芷漓、澤洛都很親密，是從小到大一直陪伴著的夥伴。","對公行動較保守，但對重要任務有自己的盤算，且擁有三人中原最強的隱形實力。"]},en:{name:"Point",role:"Frontline",tags:["Energetic","Troublemaker","Intuitive"],quote:"As long as I run fast enough, trouble can't catch me! ...Probably?",description:["The backbone of the team with a lively and outgoing personality, possessing high independence.","Often has mischievous ideas in her head and gets into trouble easily, but recovers just as quickly.","Very close with Zeri and Zelo; they have been companions since childhood.","Acts conservatively in public operations but has her own calculations for important missions, possessing the strongest hidden strength among the three."]}}},{id:"zeri",alias:"Z.Zeri / Liz",themeColor:"text-pink-400",stats:{strength:2,intelligence:11,agility:5,mental:2,resonance:5},translations:{"zh-CN":{name:"芷漓",role:"科研",tags:["冷静"],quote:"数据不会说谎，但解读数据的人经常犯蠢。",description:["安静、沉稳、理性，典型的冷系科研型人格。","生活规律、家里整洁，有点小洁癖气质。对工作极度认真，脑子里永远是研究与任务。","表面淡定，实际上偶尔会耍小心机（例如诱骗零点加班）。","嘴硬心软，非常关心队友，尤其是零点。低调害羞，不喜欢别人叫她“小名”，也不喜欢穿可爱的衣服。"]},"zh-TW":{name:"芷漓",role:"科研",tags:["冷靜"],quote:"數據不會說謊，但解讀數據的人經常犯蠢。",description:["安靜、沉穩、理性，典型的冷系科研型人格。","生活規律、家裡整潔，有點小潔癖氣質。對工作極度認真，腦子裡永遠是研究與任務。","表面淡定，實際上偶爾會耍小心機（例如誘騙零點加班）。","嘴硬心軟，非常關心隊友，尤其是零點。低調害羞，不喜歡別人叫她「小名」，也不喜歡穿可愛的衣服。"]},en:{name:"Zeri",role:"Research",tags:["Calm","Rational"],quote:"Data doesn't lie, but the people interpreting it often make stupid mistakes.",description:["Quiet, steady, and rational. A typical cool-headed researcher personality.","Lives a disciplined life with a tidy home, showing signs of mild mysophobia. Extremely serious about work; her mind is always on research and missions.","Appears calm on the surface but occasionally plays little tricks (like tricking Point into working overtime).","Sharp-tongued but soft-hearted, she cares deeply about her teammates, especially Point. Low-key and shy, she dislikes being called by her 'nickname' or wearing cute clothes."]}}},{id:"zelo",alias:"Z.Zelo",themeColor:"text-blue-400",stats:{strength:4,intelligence:5,agility:6,mental:10,resonance:5},translations:{"zh-CN":{name:"泽洛",role:"支援",tags:["元气","乐观主义"],quote:"不管发生什么，我都会全力支持计划哦~",description:["性格外向活泼，对任何事情都充满希望。","有时像小孩般贪玩，对工作不太上心，经常充当实验辅助员。","有自己的需求时并不强迫他人帮助。","对零点和芷漓都很了解，是亲人般的存在。可爱系角色，不管哪方面都透露着少女感。"]},"zh-TW":{name:"澤洛",role:"支援",tags:["元氣","樂觀主義"],quote:"不管發生什麼，我都會全力支持計畫哦~",description:["性格外向活潑，對任何事情都充滿希望。","有時像小孩般貪玩，對工作不太上心，經常充當實驗輔助員。","有自己的需求時並不強迫他人幫助。","對零點和芷漓都很了解，是親人般的存在。可愛系角色，不管哪方面都透露著少女感。"]},en:{name:"Zelo",role:"Support",tags:["Genki","Optimist"],quote:"No matter what happens, I'll support the plan with all I've got~",description:["Outgoing and lively, full of hope for everything.","Sometimes playful like a child and not very focused on work, often acting as an experimental assistant.","Does not force others to help when she has her own needs.","Understands Point and Zeri very well and is like family to them. A cute character who exudes a girlish charm in every aspect."]}}},{id:"void",alias:"Void [[MASK::Z.Byaki]]",themeColor:"text-white",stats:{strength:0,intelligence:10,agility:10,mental:0,resonance:10},translations:{"zh-CN":{name:"零空",role:"？？？",tags:["神秘","高维","BUG"],quote:"干涉。",description:["来自“空界”的高位存在，和三人关系特殊。","拥有无限的生命和特殊的记忆系统。实力非常强，能轻松完成现实上任何难以做到的事情。","看似散漫，但在关键节点非常可靠。","对零点比较宠，会帮忙但也让零点不要经常召唤它（会损害零点）。"]},"zh-TW":{name:"零空",role:"？？？",tags:["神秘","高維","BUG"],quote:"干涉。",description:["來自「空界」的高位存在，和三人關係特殊。","擁有無限的生命和特殊的記憶系統。實力非常強，能輕鬆完成現實上任何難以做到的事情。","看似散漫，但在關鍵節點非常可靠。","對零點比較寵，會幫忙但也讓零點不要經常召喚它（會損害零點）。"]},en:{name:"Void",role:"???",tags:["Mysterious","High-Dim","BUG"],quote:"Interference.",description:["A higher-dimensional existence from the 'Void', sharing a special relationship with the trio.","Possesses infinite life and a special memory system. Extremely powerful, easily accomplishing things impossible in reality.","Appears laid-back but is very reliable at critical moments.","He is protective of Point, helping her but also warning her not to summon him too often (as it damages her)."]}}}],kf=[{id:"universe-structure",category:"World",translations:{"zh-CN":{title:"多层宇宙结构",content:["**主宇 (Main Universe):** 稳定的平行现实，是 Nova Labs 主要工作、探索和控制的目标。某些极其重要的设施如「主宇控制台」（被称为“远时”）存在于其中。主宇需要通过“时空泡”来切入或进入。","**现世 (Current World):** 三人（零点、泽洛、芷漓）和其他人平日生活与工作的世界。科技高度发达，拥有时域装置、穿梭轨、量子属性等技术。在现实层中，相对主宇的“量子生物”是会受伤甚至死亡的。","**空界 (Void):** 一个超越现世、主宇的未知空间层级。只有 Void 在此地，并能与三人保持联系。空界能提供主宇无法获得的“情报”与观测能力。"]},"zh-TW":{title:"多層宇宙結構",content:["**主宇 (Main Universe):** 穩定的平行現實，是 Nova Labs 主要工作、探索和控制的目標。某些極其重要的設施如「主宇控制台」（被稱為「遠時」）存在於其中。主宇需要通過「時空泡」來切入或進入。","**現世 (Current World):** 三人（零點、澤洛、芷漓）和其他人平日生活與工作的世界。科技高度發達，擁有時域裝置、穿梭軌、量子屬性等技術。在現實層中，相對主宇的「量子生物」是會受傷甚至死亡的。","**空界 (Void):** 一個超越現世、主宇的未知空間層級。只有 Void 在此地，並能與三人保持聯繫。空界能提供主宇無法獲得的「情報」與觀測能力。"]},en:{title:"Multiverse Structure",content:["**Main Universe:** A stable parallel reality and the primary target for Nova Labs' work, exploration, and control. Crucial facilities like the 'Main Universe Console' (known as 'Far Time') exist within it. Access requires a 'Time-Space Bubble'.","**Current World:** The world where the trio (Point, Zelo, Zeri) and others live and work. Highly technologically advanced, featuring Time Domain devices, Shuttle Rails, and Quantum Attributes. In this reality layer, 'Quantum Beings' (relative to the Main Universe) can be injured or even killed.","**Void:** An unknown spatial layer transcending both the Current World and the Main Universe. Only Void exists here and maintains contact with the trio. The Void provides 'intelligence' and observational capabilities unattainable in the Main Universe."]}}},{id:"time-sector",category:"World",translations:{"zh-CN":{title:"时域特殊节区",content:["**区域概述:** 类似现实世界的公交站点/市区。","**职能:** 三人的工作地点。","**设施:** 这里有 Nova labs 的全部主分设施。"]},"zh-TW":{title:"時域特殊節區",content:["**區域概述:** 類似現實世界的公車站點/市區。","**職能:** 三人的工作地點。","**設施:** 這裡有 Nova labs 的全部主分設施。"]},en:{title:"Time Domain Special Sector",content:["**Overview:** Similar to a bus station or downtown area in the real world.","**Function:** The workplace of the trio.","**Facilities:** Contains all main branch facilities of Nova Labs."]}}},{id:"nova-labs",category:"Organization",translations:{"zh-CN":{title:"Nova Labs 组织结构",content:["**表层:** 对外是“科技联合研究会”的一部分，处理与公众相关的研究事务。","**核心层:** 隐藏在表层之后，负责“时域移转计划”。核心人员包括 X.泽洛、X.零点、X.芷漓、R.艾安等。","**使命:** 负责与“主宇”进行现实连通，探索并获得主宇的完全控制权。为即将毁灭的世界和文明寻找下一个绿洲（生存后路）。","**特殊地位:** 是唯一能执行此类任务的团队，不受外界任何组织的束缚。但也因权力过大，表层人员在谋划现世领导层的政变。"]},"zh-TW":{title:"Nova Labs 組織結構",content:["**表層:** 對外是「科技聯合研究會」的一部分，處理與公眾相關的研究事務。","**核心層:** 隱藏在表層之後，負責「時域移轉計畫」。核心人員包括 X.澤洛、X.零點、X.芷漓、R.艾安等。","**使命:** 負責與「主宇」進行現實連通，探索並獲得主宇的完全控制權。為即將毀滅的世界和文明尋找下一個綠洲（生存後路）。","**特殊地位:** 是唯一能執行此類任務的團隊，不受外界任何組織的束縛。但也因權力過大，表層人員在謀劃現世領導層的政變。"]},en:{title:"Nova Labs Structure",content:["**Surface Layer:** Publicly part of the 'United Technology Research Association', handling public-facing research affairs.","**Core Layer:** Hidden behind the surface, responsible for the 'Time Domain Transfer Project'. Core members include X.Zelo, X.Point, X.Zeri, R.Ian, etc.","**Mission:** Responsible for connecting reality with the 'Main Universe', exploring, and gaining full control of it. Finding the next oasis (survival route) for the impending destruction of the world and civilization.","**Special Status:** The only team capable of executing such missions, unbound by any external organization. However, due to excessive power, surface personnel are plotting a coup against the Current World leadership."]}}},{id:"nova-labs-logo",category:"Organization",translations:{"zh-CN":{title:"Nova Labs 组织标识",content:["**通常版 (Standard Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**整合版 (Integrated Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]},"zh-TW":{title:"Nova Labs 組織標識",content:["**通常版 (Standard Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**整合版 (Integrated Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]},en:{title:"Nova Labs Logos",content:["**Standard Version:**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**Integrated Version:**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]}}},{id:"tech-system",category:"Technology",translations:{"zh-CN":{title:"科技与力量体系",content:["**量子系属性:** 三个主角都具备某种量子体质（由“泽洛希”家族血统提供）。在主宇或实验宇宙中不会立即死亡，但仍会受到精神/结构压力。","**穿梭轨系统:** 现世常用的移动方式，由时空力场驱动，能源效率极高。极特殊情况可脱出轨道进行自由行驶。","**时空泡:** 进入主宇的必要折跃装置。停留时间有限，超过会造成“量子反噬”。","**量子反噬:** “量子生物”对自身控制力弱导致的（对主宇不熟悉）现象，会使身体在现实中虚弱，甚至有生命危险。"]},"zh-TW":{title:"科技與力量體系",content:["**量子系屬性:** 三個主角都具備某種量子體質（由「澤洛希」家族血統提供）。在主宇或實驗宇宙中不會立即死亡，但仍會受到精神/結構壓力。","**穿梭軌系統:** 現世常用的移動方式，由時空力場驅動，能源效率極高。極特殊情況可脫出軌道進行自由行駛。","**時空泡:** 進入主宇的必要折躍裝置。停留時間有限，超過會造成「量子反噬」。","**量子反噬:** 「量子生物」對自身控制力弱導致的（對主宇不熟悉）現象，會使身體在現實中虛弱，甚至有生命危險。"]},en:{title:"Tech & Power System",content:["**Quantum Attributes:** The three protagonists all possess a certain quantum constitution (provided by the 'Zeloshi' family bloodline). They will not die immediately in the Main Universe or experimental universes but will still suffer mental/structural stress.","**Shuttle Rail System:** The common mode of transport in the Current World, driven by time-space force fields with extremely high energy efficiency. In very special cases, it can derail for free travel.","**Time-Space Bubble:** A necessary warp device to enter the Main Universe. Stay time is limited; exceeding it causes 'Quantum Backlash'.","**Quantum Backlash:** A phenomenon caused by weak self-control of 'Quantum Beings' (unfamiliarity with the Main Universe), causing physical weakness in reality, or even life-threatening danger."]}}},{id:"conflict",category:"Society",translations:{"zh-CN":{title:"潜在冲突与环境",content:["**破碎边界:** 本世界（现世）处于一种不稳定或受损的宇宙空间，随时可能湮灭。","**社会环境:** 社会科技水平极高，安全与秩序相对稳定，但实际上公众对“破碎边界”的威胁一无所知。科研人员承担着维持世界稳定的巨大压力。","**未来危机:** “破碎边界”状况加剧，可能导致更多紧急任务。主宇控制台的获得意味着时域计划可能加速。核心成员之间会面临更多危险（例如零点的量子反噬）。"]},"zh-TW":{title:"潛在衝突與環境",content:["**破碎邊界:** 本世界（現世）處於一種不穩定或受損的宇宙空間，隨時可能湮滅。","**社會環境:** 社會科技水平極高，安全與秩序相對穩定，但實際上公眾對「破碎邊界」的威脅一無所知。科研人員承擔著維持世界穩定的巨大壓力。","**未來危機:** 「破碎邊界」狀況加劇，可能導致更多緊急任務。主宇控制台的獲得意味著時域計畫可能加速。核心成員之間會面臨更多危險（例如零點的量子反噬）。"]},en:{title:"Conflict & Environment",content:["**Shattered Boundary:** This world (Current World) is in an unstable or damaged cosmic space and may be annihilated at any time.","**Social Environment:** The social technology level is extremely high, and safety and order are relatively stable, but the public knows nothing about the threat of the 'Shattered Boundary'. Researchers bear immense pressure to maintain world stability.","**Future Crisis:** The condition of the 'Shattered Boundary' is worsening, potentially leading to more emergency missions. Obtaining the Main Universe Console means the Time Domain Project may accelerate. Core members will face more dangers (e.g., Point's Quantum Backlash)."]}}}],Nf={id:"story-rare-vacation",date:"档案记录: A-001",status:"published",translations:{"zh-CN":{title:"加班是个坏文明",summary:"难得的休假时间，零点想找人玩，却误入了芷漓的“陷阱”。",content:`[[BLUE::本故事时间&世界线为前传现世篇，请勿代入正篇设定]]

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
was exhausted.`}}},jf={id:"story-overtime-bad-civ",date:"档案记录: A-002",status:"published",translations:{"zh-CN":{title:"愿赌服输！",summary:"自上次零点被芷漓进行“诱骗加班”后，零点心里的那口憋屈气一直未能放下。于是，她找到了一个机会，提出了一场关于寻找「远时」的赌约……",content:`[[BLUE::引用：现世世界观]]

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

[[IMAGE::https://free.picui.cn/free/2025/12/07/69357a00942db.png::ATTACHMENT:ZERI_MAID.BMP]]

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

[[DANGER::Zeri: "(Wants to kill her, but no, she lost the bet...)"]]`}}},Ef={id:"locked-chapter-003",date:"档案记录: A-003",status:"locked",translations:{"zh-CN":{title:"空白档案 // 待录入",summary:"该节点内容已被重置，等待操作员手动录入数据。",content:"DATA_CLEARED // AWAITING_INPUT"},"zh-TW":{title:"空白檔案 // 待錄入",summary:"該節點內容已被重置，等待操作員手動錄入數據。",content:"DATA_CLEARED // AWAITING_INPUT"},en:{title:"EMPTY_FILE // PENDING",summary:"Content reset. Waiting for manual operator input.",content:"DATA_CLEARED // AWAITING_INPUT"}}},Sf={id:"locked-chapter-004",date:"档案记录: A-004",status:"locked",translations:{"zh-CN":{title:"加密节点 // 拒绝访问",summary:"检测到未知的数据波动，该节点已被系统自动封锁。",content:"ACCESS DENIED"},"zh-TW":{title:"加密節點 // 拒絕訪問",summary:"檢測到未知的數據波動，該節點已被系統自動封鎖。",content:"ACCESS DENIED"},en:{title:"ENCRYPTED_NODE // ACCESS_DENIED",summary:"Unknown data fluctuation detected. Node automatically locked by system.",content:"ACCESS DENIED"}}},If={id:"locked-chapter-005",date:"档案记录: A-005",status:"locked",translations:{"zh-CN":{title:"信号丢失 // 待重连",summary:"该时间线尚未观测到有效数据。",content:"SIGNAL_LOST"},"zh-TW":{title:"信號丟失 // 待重連",summary:"該時間線尚未觀測到有效數據。",content:"SIGNAL_LOST"},en:{title:"SIGNAL_LOST // RECONNECTING",summary:"No valid data observed in this timeline yet.",content:"SIGNAL_LOST"}}},Cf=[Nf,jf,Ef,Sf,If],dt={characters:wf,lore:kf,chapters:Cf},Er=[{id:"byaki",group:"ARCHIVE_00 // ORIGIN",translations:{"zh-CN":{name:"白栖",enName:"Z.Byaki",role:"起源",tags:["泽洛希家族","逝者","小空"],quote:"今天，也能活下去。",description:["**身份:** Void 尚未成为高维存在时的名字。她是故事的起始点之一。","**背景:** 曾是泽洛希家族的一员，拥有极高的量子适应性。","**转折:** 为了维持世界的稳定走向，她在极远的过去付出了无法挽回的代价，最终成为了“空”。","**性格:** 温柔、坚定，带有一种悲天悯人的神性，但偶尔也会流露出作为人类时的情感。"]},"zh-TW":{name:"白棲",enName:"Z.Byaki",role:"起源",tags:["澤洛希","逝者","空"],quote:"願你在沒有我的世界，能做個好夢。",description:["**身份:** Void 尚未成為高維存在時的名字。她是暮雨和零點故事的起始點之一。","**背景:** 曾是澤洛希家族的一員，擁有極高的量子適應性。","**轉折:** 為了維持世界的穩定，她付出了無法挽回的代價，最終成為了「空」的一部分。","**性格:** 溫柔、堅定，帶有一種悲天憫人的神性，但偶爾也會流露出作為人類時的情感。"]},en:{name:"Byaki",enName:"Z.Byaki",role:"Origin",tags:["Zeloshi","Deceased","Void"],quote:"May you have a sweet dream in a world without me.",description:["**Identity:** The name of Void before becoming a higher-dimensional being. She is one of the starting points of Dusk and Point's story.","**Background:** Formerly a member of the Zeloshi family, possessing extremely high quantum adaptability.","**Turning Point:** To maintain the stability of the world, she paid an irreversible price and eventually became part of the 'Void'.","**Personality:** Gentle and firm, with a divine compassion, but occasionally revealing emotions from her time as a human."]}}},{id:"dusk-rain",group:"ARCHIVE_01 // ACTIVE",translations:{"zh-CN":{name:"暮雨",enName:"Dusk .Rain",role:"协作者",tags:["畏光","多虑","吉他手","狂热"],quote:"这只是必要的牺牲……大概吧？",description:["**背景设定:** 父母曾是科研者，但从未告诉暮雨。在其父母双亡前，暮雨是一个极其普通的孩子。","**生理特征:** 在接受“零空”的预示后落下心理性创伤，从而畏光，需定时滴消眼药水，并佩戴高科技遮光眼罩（单向透明，从内部能清晰看见外界，但从外部看只是一块普通的黑色布料）。","**外貌习惯:** 无论去哪里，背上永远背着一个黑色的吉他包，吉他本体从不离身。对他来说，这不仅是乐器，更是某种安全感的来源。","**性格侧写:**","• 目的性很强，甚至狂热 (针对于特定事件)。","• 对人温和，善于交际。读得懂气氛，关照他人感受。","• Overthinking，多虑，以至内耗。","• 爱弹琴。以音乐的形式舒缓压力。","• 有自己的想法。","• 喜欢逗弄零点。"]},"zh-TW":{name:"暮雨",enName:"Dusk .Rain",role:"協作者",tags:["畏光","多慮","吉他手","狂熱"],quote:"這只是必要的犧牲……大概吧？",description:["**背景設定:** 父母曾是科研者，但從未告訴暮雨。在其父母雙亡前，暮雨是一個極其普通的孩子。","**生理特徵:** 在接受「零空」的預示後落下心理性創傷，從而畏光，需定時滴消眼藥水，並佩戴高科技遮光眼罩（單向透明，從內部能清晰看見外界，但從外部看只是一塊普通的黑色布料）。","**外貌習慣:** 無論去哪裡，背上永遠背著一個黑色的吉他包，吉他本體從不離身。對他來說，這不僅是樂器，更是某種安全感的來源。","**性格側寫:**","• 目的性很強，甚至狂熱 (針對於特定事件)。","• 對人溫和，善於交際。讀得懂氣氛，關照他人感受。","• Overthinking，多慮，以至內耗。","• 愛彈琴。以音樂的形式舒緩壓力。","• 有自己的想法。","• 喜歡逗弄零點。"]},en:{name:"Dusk Rain",enName:"Dusk .Rain",role:"Collaborator",tags:["Photophobia","Overthinker","Guitarist","Fanatic"],quote:"This is just a necessary sacrifice... probably?",description:["**Background:** His parents were researchers but never told him. Before they passed away, Dusk was an extremely ordinary child.","**Physical Condition:** Suffered psychological trauma after receiving a premonition from 'Void', resulting in photophobia. He needs to apply eye drops regularly and wears a high-tech blackout eye mask (one-way transparent, allowing a clear view from the inside, but appearing as a piece of ordinary black cloth from the outside).","**Habit:** Regardless of where he goes, he always carries a black guitar bag on his back; his guitar never leaves his side. For him, it is not just an instrument, but a source of security.","**Personality:**","• Highly purposeful, even fanatical (regarding specific events).","• Gentle with others, good at socializing. Reads the atmosphere and cares about others' feelings.","• Overthinking, leads to internal exhaustion.","• Loves playing the guitar to relieve stress.","• Has his own ideas.","• Likes to tease Point."]}}},{id:"unknown-entity",group:"ARCHIVE_02 // CLASSIFIED",isLocked:!0,translations:{"zh-CN":{name:"？？？",enName:"UNKNOWN_ENTITY",role:"未知",tags:[],description:["权限不足，无法访问该档案。"],quote:"..."},"zh-TW":{name:"？？？",enName:"UNKNOWN_ENTITY",role:"未知",tags:[],description:["權限不足，無法訪問該檔案。"],quote:"..."},en:{name:"???",enName:"UNKNOWN_ENTITY",role:"UNKNOWN",tags:[],description:["Access denied. Insufficient clearance."],quote:"..."}}},{id:"empty-slot-01",group:"ARCHIVE_03 // RESERVED",isLocked:!0,translations:{"zh-CN":{name:"空闲槽位_01",enName:"EMPTY_SLOT_01",role:"待定",tags:[],description:["该记录槽位为空，等待数据录入..."],quote:""},"zh-TW":{name:"空閒槽位_01",enName:"EMPTY_SLOT_01",role:"待定",tags:[],description:["該記錄槽位為空，等待數據錄入..."],quote:""},en:{name:"EMPTY_SLOT_01",enName:"EMPTY_SLOT_01",role:"TBD",tags:[],description:["Slot empty. Awaiting data entry..."],quote:""}}},{id:"empty-slot-02",group:"ARCHIVE_03 // RESERVED",isLocked:!0,translations:{"zh-CN":{name:"空闲槽位_02",enName:"EMPTY_SLOT_02",role:"待定",tags:[],description:["该记录槽位为空，等待数据录入..."],quote:""},"zh-TW":{name:"空閒槽位_02",enName:"EMPTY_SLOT_02",role:"待定",tags:[],description:["該記錄槽位為空，等待數據錄入..."],quote:""},en:{name:"EMPTY_SLOT_02",enName:"EMPTY_SLOT_02",role:"TBD",tags:[],description:["Slot empty. Awaiting data entry..."],quote:""}}}],rl=({children:h})=>{const[w,u]=M.useState(!1);return s.jsx("span",{onClick:f=>{f.stopPropagation(),u(!w)},className:`
        px-1 mx-0.5 rounded-sm select-none cursor-help transition-all duration-300 inline-block align-middle
        ${w?"bg-ash-light text-ash-black":"bg-ash-gray text-transparent hover:text-ash-black hover:bg-ash-light"}
      `,title:"REDACTED_DATA [CLICK TO REVEAL]",children:h})},_f={point:["zeri","zelo","void","dusk-rain"],zeri:["point","zelo"],zelo:["point","zeri"],void:["point"]},xc=(h,w)=>{const u=dt.characters.find(g=>g.id===h);if(u){const g=u.translations[w]||u.translations["zh-CN"];return{id:u.id,name:g.name,role:g.role,color:u.themeColor||"text-ash-light",isMain:!0}}const f=Er.find(g=>g.id===h);if(f){const g=f.translations[w]||f.translations["zh-CN"];return{id:f.id,name:g.name,role:g.role,color:"text-ash-gray",isMain:!1}}return null},Ui=h=>h.split(/(\[\[MASK::.*?\]\])/g).map((u,f)=>{if(u.startsWith("[[MASK::")&&u.endsWith("]]")){const g=u.slice(8,-2);return s.jsx(rl,{children:g},f)}return u}),yc=({centerId:h,language:w,onSelect:u,isLightTheme:f})=>{const g=_f[h]||[];if(g.length===0)return null;const N=xc(h,w);if(!N)return null;const P=800,x=P/2,b=280;return s.jsxs("div",{className:"w-full h-full relative flex flex-col",children:[s.jsxs("div",{className:"absolute top-4 left-4 z-10 text-xs font-bold uppercase flex items-center gap-2 text-ash-gray/70 bg-ash-black/50 px-2 py-1 border border-ash-gray/30",children:[s.jsx(uf,{size:14}),w==="en"?"Neural_Network":"人际关系拓扑"]}),s.jsxs("div",{className:"flex-1 min-h-0 flex items-center justify-center relative overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"}),s.jsxs("svg",{viewBox:`0 0 ${P} ${P}`,className:"w-full h-full max-w-[90%] max-h-[90%] overflow-visible drop-shadow-2xl",children:[g.map((j,_)=>{const E=_*2*Math.PI/g.length-Math.PI/2,k=x+b*Math.cos(E),C=x+b*Math.sin(E),A=j==="dusk-rain";return s.jsxs("g",{children:[s.jsx("line",{x1:x,y1:x,x2:k,y2:C,stroke:"currentColor",strokeOpacity:A?"0.15":"0.2",strokeWidth:A?"1":"2",strokeDasharray:A?"8,6":"none",className:"text-ash-gray"}),A?s.jsx("text",{x:x+(k-x)*.5,y:x+(C-x)*.5,fill:"currentColor",textAnchor:"middle",dy:"0.3em",className:"text-[10px] text-ash-gray font-mono opacity-50",children:"×"}):s.jsx("circle",{cx:x+(k-x)*.5,cy:x+(C-x)*.5,r:"3",className:"text-ash-gray fill-ash-black stroke-2 stroke-current"})]},`line-${j}`)}),s.jsxs("g",{className:"filter drop-shadow-xl",children:[s.jsx("circle",{cx:x,cy:x,r:"70",className:`${N.color} fill-current opacity-10 animate-pulse`}),s.jsx("circle",{cx:x,cy:x,r:"55",className:"fill-ash-black stroke-[4px] stroke-current text-ash-gray"}),s.jsx("text",{x,y:x,dy:"0.35em",textAnchor:"middle",className:`text-[28px] font-mono font-black uppercase ${N.color} fill-current pointer-events-none select-none`,children:N.name.substring(0,1)})]}),g.map((j,_)=>{const E=_*2*Math.PI/g.length-Math.PI/2,k=x+b*Math.cos(E),C=x+b*Math.sin(E),A=xc(j,w),O=j==="dusk-rain";return A?s.jsxs("g",{onClick:L=>{L.stopPropagation(),A.isMain&&u(j)},className:`transition-all duration-300 ${A.isMain?"cursor-pointer hover:scale-110":"cursor-default opacity-90"} ${O?"grayscale":""}`,children:[s.jsx("circle",{cx:k,cy:C,r:"40",className:`${A.color} fill-current ${O?"opacity-[0.03]":"opacity-10"}`}),s.jsx("circle",{cx:k,cy:C,r:"32",className:`fill-ash-black stroke-2 stroke-current ${A.color} ${O?"stroke-dashed opacity-50":""}`,strokeDasharray:O?"4,4":"none"}),O?s.jsxs(s.Fragment,{children:[s.jsx("path",{d:`M${k-10} ${C-10} L${k+10} ${C+10} M${k+10} ${C-10} L${k-10} ${C+10}`,stroke:"currentColor",strokeWidth:"1.5",className:`${A.color} opacity-40`}),s.jsx("text",{x:k,y:C,dy:"0.3em",textAnchor:"middle",className:`text-[8px] font-mono font-bold uppercase ${A.color} fill-current select-none opacity-70`,children:"OFFLINE"}),s.jsx("text",{x:k,y:C+48,dy:"0.3em",textAnchor:"middle",className:`text-[12px] font-mono font-bold uppercase ${A.color} fill-current select-none opacity-50 line-through decoration-current`,children:A.name})]}):s.jsxs(s.Fragment,{children:[s.jsx("text",{x:k,y:C,dy:"-0.6em",textAnchor:"middle",className:`text-[14px] font-mono font-bold uppercase ${A.color} fill-current select-none`,children:A.name}),s.jsx("text",{x:k,y:C,dy:"1.4em",textAnchor:"middle",className:"text-[10px] font-mono uppercase fill-ash-gray select-none tracking-tighter",children:A.role})]})]},j):null})]})]}),s.jsxs("div",{className:"absolute bottom-4 right-4 text-[10px] font-mono text-ash-gray/50 text-right",children:["LINK_STATUS: STABLE",s.jsx("br",{}),"NODES: ",g.length+1]})]})},Tf=({stats:h,colorClass:w})=>{const P=(_,E,k)=>{const C=Math.PI*2*E/k-Math.PI/2,A=_/10*40,O=50+A*Math.cos(C),L=50+A*Math.sin(C);return`${O},${L}`},x=[h.strength,h.intelligence,h.mental,h.resonance,h.agility],b=x.map((_,E)=>P(_,E,5)).join(" "),j=[{label:"STR",x:50,y:5},{label:"INT",x:95,y:35},{label:"MEN",x:80,y:95},{label:"RES",x:20,y:95},{label:"AGI",x:5,y:35}];return s.jsx("div",{className:"relative w-full aspect-square max-w-[180px] xl:max-w-[220px] mx-auto",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full overflow-visible",children:[[.2,.4,.6,.8,1].map(_=>s.jsx("polygon",{points:Array(5).fill(10*_).map((E,k)=>P(E,k,5)).join(" "),fill:"none",stroke:"var(--ash-gray)",strokeWidth:"0.5",opacity:"0.3"},_)),j.map((_,E)=>s.jsx("line",{x1:50,y1:50,x2:P(10,E,5).split(",")[0],y2:P(10,E,5).split(",")[1],stroke:"var(--ash-gray)",strokeWidth:"0.5",opacity:"0.3"},E)),s.jsx("polygon",{points:b,fill:"currentColor",fillOpacity:"0.2",stroke:"currentColor",strokeWidth:"2",className:w}),x.map((_,E)=>{const[k,C]=P(_,E,5).split(",");return s.jsx("circle",{cx:k,cy:C,r:"1.5",className:`${w} fill-current`},E)}),j.map((_,E)=>s.jsx("text",{x:_.x,y:_.y,textAnchor:"middle",fontSize:"6",fill:"var(--ash-gray)",className:"font-mono font-bold",children:_.label},E))]})})};function zf({language:h}){const[w,u]=M.useState(dt.characters[0].id),f=dt.characters.find(x=>x.id===w)||dt.characters[0],g=f.translations[h]||f.translations["zh-CN"],N=x=>{const b=x.toLowerCase();return b.includes("支援")||b.includes("重装")||b.includes("support")||b.includes("heavy")?s.jsx(hf,{className:"w-5 h-5"}):b.includes("科研")||b.includes("前线")||b.includes("research")||b.includes("frontline")?s.jsx(Xt,{className:"w-5 h-5"}):b.includes("？？？")||b.includes("???")?s.jsx(Dc,{className:"w-5 h-5"}):s.jsx(fc,{className:"w-5 h-5"})},P=[{label:"STRENGTH",val:f.stats.strength,icon:Vc},{label:"INTELLIGENCE",val:f.stats.intelligence,icon:Sc},{label:"AGILITY",val:f.stats.agility,icon:xf},{label:"MENTAL",val:f.stats.mental,icon:sf},{label:"RESONANCE",val:f.stats.resonance,icon:Ws}];return s.jsxs("div",{className:"flex flex-col h-full bg-halftone overflow-hidden",children:[s.jsxs("header",{className:"p-4 md:p-6 border-b-2 border-ash-dark bg-ash-black z-20 flex justify-between items-center shrink-0",children:[s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl md:text-2xl font-black text-ash-light mb-1 uppercase tracking-tighter flex items-center gap-3",children:[s.jsx(fc,{size:24,className:"md:w-6 md:h-6"}),h==="en"?"Personnel_File":"人员档案"]}),s.jsxs("div",{className:"text-[10px] font-mono text-ash-gray flex gap-2",children:[s.jsx("span",{className:"bg-ash-dark px-1",children:"CONFIDENTIAL"}),s.jsx("span",{children:"// AUTH_REQ_LEVEL_5"})]})]}),s.jsx("div",{className:"hidden md:block text-right",children:s.jsx("div",{className:"text-xs text-ash-light font-bold font-mono border border-ash-gray px-2 py-1 inline-block",children:"DB_STATUS: ONLINE"})})]}),s.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden relative",children:[s.jsx("aside",{className:"w-full md:w-64 border-b-2 md:border-b-0 md:border-r-2 border-ash-dark bg-ash-black overflow-x-auto md:overflow-y-auto shrink-0 z-10 flex flex-row md:flex-col no-scrollbar",children:s.jsx("div",{className:"flex flex-row md:flex-col p-2 md:p-4 gap-2 md:gap-3 min-w-max md:min-w-0",children:dt.characters.map(x=>{const b=x.translations[h]||x.translations["zh-CN"];return s.jsxs("button",{onClick:()=>u(x.id),className:`w-32 md:w-full text-left p-2 md:p-3 border-2 transition-all relative overflow-hidden group shrink-0 ${w===x.id?"border-ash-light bg-ash-light text-ash-black shadow-hard":"border-ash-gray/30 bg-ash-dark text-ash-gray hover:border-ash-gray hover:text-ash-white"}`,children:[s.jsxs("div",{className:"flex justify-between items-start mb-1 z-10 relative",children:[s.jsx("span",{className:"font-bold uppercase tracking-wider truncate text-xs md:text-sm",children:b.name}),s.jsx("div",{className:"scale-75 origin-top-right",children:N(b.role)})]}),s.jsx("div",{className:"text-[10px] font-mono opacity-70 z-10 relative truncate",children:Ui(x.alias||"")}),w===x.id&&s.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none"})]},x.id)})})}),s.jsxs("main",{className:"flex-1 flex flex-col xl:flex-row h-full overflow-hidden bg-ash-black",children:[s.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 space-y-8 relative",children:[s.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-5 pointer-events-none",children:s.jsx(zc,{size:300,strokeWidth:.5})}),s.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start",children:[s.jsxs("div",{className:"flex-1 space-y-4",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-4xl md:text-6xl font-black uppercase tracking-tighter text-ash-light mb-2 leading-none",children:g.name}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm font-mono text-ash-gray",children:[s.jsx("span",{className:"px-2 py-1 bg-ash-light text-ash-black font-bold uppercase",children:Ui(f.alias||"")}),s.jsxs("span",{children:[" // ROLE: ",g.role]}),s.jsxs("span",{children:[" // ID: ",f.id.toUpperCase()]})]})]}),g.quote&&s.jsxs("div",{className:"border-l-4 border-ash-light pl-4 py-2 italic text-ash-light/80 font-serif text-base md:text-lg",children:['"',g.quote,'"']}),s.jsx("div",{className:"flex flex-wrap gap-2",children:g.tags.map(x=>s.jsxs("span",{className:"px-3 py-1 border border-ash-gray rounded-full text-xs font-mono hover:bg-ash-light hover:text-ash-black transition-colors cursor-default",children:["#",x]},x))})]}),s.jsxs("div",{className:"w-full lg:w-[280px] bg-ash-dark p-4 border-2 border-ash-gray shadow-hard",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4 border-b border-ash-gray/20 pb-2",children:[s.jsxs("h3",{className:"text-[10px] font-bold uppercase flex items-center gap-2 text-ash-gray",children:[s.jsx(Xt,{size:12})," ",h==="en"?"Combat_Data":"战斗数据"]}),s.jsxs("div",{className:"text-[10px] font-mono text-ash-gray",children:["SYNC: ",f.stats.resonance*10,"%"]})]}),s.jsx(Tf,{stats:f.stats,colorClass:f.themeColor||"text-ash-light"}),s.jsx("div",{className:"space-y-2 mt-4",children:P.map(x=>s.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono",children:[s.jsxs("span",{className:"flex items-center gap-2 text-ash-gray font-bold",children:[s.jsx(x.icon,{size:10})," ",x.label]}),s.jsx("div",{className:"flex gap-[1px]",children:Array(10).fill(0).map((b,j)=>{var _;return s.jsx("div",{className:`w-1 h-2 transition-all duration-300 ${j<x.val?((_=f.themeColor)==null?void 0:_.replace("text-","bg-"))||"bg-ash-light":"bg-ash-black border border-ash-dark"}`},j)})})]},x.label))})]})]}),s.jsxs("div",{className:"bg-ash-dark/20 border-2 border-ash-gray/30 p-6",children:[s.jsxs("h3",{className:"text-lg font-bold uppercase border-b border-ash-gray pb-2 flex items-center gap-2 mb-4 text-ash-light",children:[s.jsx(df,{size:18})," Field Analysis"]}),s.jsx("div",{className:"space-y-4 font-mono text-sm leading-relaxed text-ash-gray/90",children:g.description.map((x,b)=>s.jsxs("div",{className:"flex gap-3",children:[s.jsxs("span",{className:"text-ash-light font-bold shrink-0",children:["[",String(b+1).padStart(2,"0"),"]"]}),s.jsx("p",{children:Ui(x)})]},b))})]}),s.jsx("div",{className:"xl:hidden h-[400px] bg-ash-dark/30 border-2 border-ash-gray p-4 relative",children:s.jsx(yc,{centerId:f.id,language:h,onSelect:u,isLightTheme:!1})})]}),s.jsx("div",{className:"hidden xl:flex w-[45%] 2xl:w-[40%] bg-ash-dark/10 border-l-2 border-ash-dark relative flex-col shadow-[inset_10px_0_20px_rgba(0,0,0,0.2)]",children:s.jsx("div",{className:"flex-1 w-full h-full p-8 overflow-hidden flex items-center justify-center",children:s.jsx(yc,{centerId:f.id,language:h,onSelect:u,isLightTheme:!1})})})]},f.id)]})]})}const Rf=({language:h})=>{const[w,u]=M.useState("All"),g={"zh-CN":{title:"世界数据库",all:"全部档案",world:"世界构造",org:"组织档案",tech:"技术文档",type:"类型"},"zh-TW":{title:"世界數據庫",all:"全部檔案",world:"世界構造",org:"組織檔案",tech:"技術文檔",type:"類型"},en:{title:"WORLD_DATABASE",all:"ALL_FILES",world:"WORLD",org:"ORG",tech:"TECH",type:"TYPE"}}[h],N=[{id:"All",label:g.all,icon:qh},{id:"World",label:g.world,icon:Sr},{id:"Organization",label:g.org,icon:Oc},{id:"Technology",label:g.tech,icon:Ws}],P=w==="All"?dt.lore:dt.lore.filter(x=>x.category===w);return s.jsxs("div",{className:"p-4 md:p-12 max-w-6xl mx-auto h-full overflow-y-auto bg-halftone",children:[s.jsx(Ce,{children:s.jsxs("header",{className:"mb-6 md:mb-10 border-4 border-ash-light p-4 md:p-6 bg-ash-black shadow-hard",children:[s.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-ash-light mb-2 flex items-center gap-3",children:[s.jsx(Cc,{size:24,className:"md:w-8 md:h-8"}),g.title]}),s.jsxs("div",{className:"h-2 w-full bg-ash-dark border border-ash-gray mt-4 flex",children:[s.jsx("div",{className:"h-full bg-ash-light w-2/3 animate-[scanline_2s_linear_infinite] bg-gradient-to-r from-ash-light via-ash-white to-ash-light",style:{animationDirection:"reverse"}}),s.jsx("div",{className:"h-full bg-ash-gray w-1/3 opacity-20"})]})]})}),s.jsx("div",{className:"flex flex-wrap gap-2 md:gap-0 mb-6 md:mb-8 pl-0 md:pl-4 border-b-0 md:border-b-2 border-ash-light",children:N.map(x=>s.jsxs("button",{onClick:()=>u(x.id),className:`flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 border-2 md:border-b-0 md:mr-[-2px] text-xs md:text-sm font-bold font-mono transition-all relative md:top-[2px] flex-grow md:flex-grow-0 ${w===x.id?"bg-ash-light text-ash-black border-ash-light z-10 shadow-hard md:shadow-none":"bg-ash-dark text-ash-gray border-ash-gray hover:bg-ash-gray hover:text-ash-black"}`,children:[s.jsx(x.icon,{size:14}),s.jsx("span",{children:x.label})]},x.id))}),s.jsx("div",{className:"grid grid-cols-1 gap-4 md:gap-8 pb-8",children:P.map((x,b)=>{const j=x.translations[h]||x.translations["zh-CN"];return s.jsx(Ce,{delay:b*100,children:s.jsxs("div",{className:"bg-ash-black border-2 border-ash-gray p-4 md:p-8 hover:border-ash-light transition-colors relative group",children:[s.jsx("div",{className:"absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 border-t-2 border-l-2 border-ash-gray group-hover:border-ash-light"}),s.jsx("div",{className:"absolute top-0 right-0 w-3 md:w-4 h-3 md:h-4 border-t-2 border-r-2 border-ash-gray group-hover:border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-3 md:w-4 h-3 md:h-4 border-b-2 border-l-2 border-ash-gray group-hover:border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-3 md:w-4 h-3 md:h-4 border-b-2 border-r-2 border-ash-gray group-hover:border-ash-light"}),s.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between mb-4 md:mb-6 border-b border-dashed border-ash-gray pb-4 gap-2 md:gap-0",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-ash-light font-mono uppercase leading-tight",children:j.title}),s.jsxs("span",{className:"self-start text-[10px] font-mono text-ash-black bg-ash-gray px-2 py-1 font-bold",children:[g.type,": ",x.category.toUpperCase()]})]}),s.jsx("div",{className:"space-y-4 text-ash-gray font-mono text-xs md:text-sm leading-6 md:leading-7",children:j.content.map((_,E)=>{const k=_.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(k){const[A,O,L]=k;return s.jsx("div",{className:"my-6",children:s.jsxs("div",{className:"relative border-2 border-ash-gray p-2 bg-ash-dark/30 inline-block max-w-full",children:[s.jsx("div",{className:"absolute -top-1 -left-1 w-2 h-2 border-t border-l border-ash-gray"}),s.jsx("div",{className:"absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-ash-gray"}),s.jsx("img",{src:O,alt:L,className:"max-w-full h-auto max-h-64 object-contain mx-auto block grayscale-[20%] hover:grayscale-0 transition-all"}),s.jsx("div",{className:"absolute bottom-0 right-0 translate-y-1/2 translate-x-2 bg-ash-dark border border-ash-gray px-2 py-0.5 z-10",children:s.jsxs("div",{className:"text-[10px] font-mono text-ash-light flex items-center gap-2 uppercase font-bold",children:[s.jsx(tl,{size:10}),L]})})]})},E)}const C=_.split("**");return s.jsx("p",{children:C.map((A,O)=>O%2===1?s.jsx("strong",{className:"text-ash-light bg-ash-dark px-1 border border-ash-gray/50",children:A},O):A)},E)})})]})},x.id)})})]})},Fc=({onComplete:h,language:w,mode:u="full"})=>{const[f,g]=M.useState(0),[N,P]=M.useState([]);M.useEffect(()=>{const b=setInterval(()=>{const j=Math.random().toString(16).substring(2,10).toUpperCase(),_=Math.floor(Math.random()*9999);P(E=>[`> SYNC_FRAME_${j} :: PACKET_${_}`,...E].slice(0,15))},u==="full"?50:20);return()=>clearInterval(b)},[u]),M.useEffect(()=>{const b=u==="full"?{stage1:1200,stage2:2500,stage3:3500,complete:4e3}:{stage1:300,stage2:800,stage3:1500,complete:1800},j=setTimeout(()=>g(1),b.stage1),_=setTimeout(()=>g(2),b.stage2),E=setTimeout(()=>g(3),b.stage3),k=setTimeout(h,b.complete);return()=>{clearTimeout(j),clearTimeout(_),clearTimeout(E),clearTimeout(k)}},[h,u]);const x={"zh-CN":{init:"协议初始化...",lock:"锁定现实锚点",targeting:"目标搜寻",verified:"验证通过",sync:"时空同步率: 0%",dive:"开始读取",warn:"警告：当前时间线无法确认，以只读模式进入.."},"zh-TW":{init:"協議初始化...",lock:"鎖定現實錨點",targeting:"目標搜尋",verified:"驗證通過",sync:"時空同步率: 0%",dive:"開始讀取",warn:"警告：當前時間線無法確認，以唯讀模式進入.."},en:{init:"PROTOCOL_INIT...",lock:"REALITY_ANCHOR_LOCKED",targeting:"TARGET_SEARCH",verified:"VERIFIED",sync:"SYNC_RATE: 0%",dive:"READING_INIT",warn:"WARNING: TIMELINE UNVERIFIED // ENTERING READ-ONLY MODE"}}[w];return s.jsxs("div",{className:"fixed inset-0 z-[99999] bg-ash-black text-ash-light overflow-hidden flex items-center justify-center font-mono cursor-none",children:[s.jsx("button",{onClick:h,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-ash-light/20 px-2 py-1 hover:bg-ash-light hover:text-ash-black transition-colors opacity-50 hover:opacity-100 cursor-pointer",children:"[ABORT_SEQUENCE]"}),s.jsx("div",{className:`absolute inset-0 bg-grid-hard opacity-20 transition-transform duration-[4000ms] ease-in ${f>0?"scale-150":"scale-100"}`}),s.jsx("div",{className:`relative z-10 transition-all duration-500 ${f>=2?"scale-[5] opacity-0 blur-xl":"scale-100 opacity-100"}`,children:s.jsxs("div",{className:"relative flex items-center justify-center",children:[s.jsx("div",{className:"absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-ash-gray/20 rounded-full animate-spin-slow"}),s.jsx("div",{className:"absolute w-[65vw] h-[65vw] md:w-[500px] md:h-[500px] border border-ash-gray/30 rounded-full border-dashed animate-spin-reverse-slow"}),s.jsx("div",{className:`absolute w-[50vw] h-[50vw] md:w-[400px] md:h-[400px] border-2 border-ash-light rounded-full animate-ping opacity-20 ${f===1?"border-red-500":""}`}),s.jsxs("div",{className:"w-48 h-48 md:w-64 md:h-64 border-2 border-ash-light relative flex items-center justify-center animate-zoom-in-fast bg-ash-black/50 backdrop-blur-sm",children:[s.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-ash-light"}),s.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-ash-light"}),s.jsxs("div",{className:`flex flex-col items-center gap-4 transition-colors duration-300 ${f>0?"text-red-500":"text-ash-light"}`,children:[s.jsx(mf,{size:48,strokeWidth:1,className:`md:w-16 md:h-16 ${f>0?"animate-spin":""}`}),s.jsx("div",{className:"text-xl md:text-2xl font-black tracking-widest uppercase",children:f===0?x.targeting:x.verified}),u==="full"&&s.jsx("div",{className:"text-[10px] bg-ash-light text-ash-black px-2 py-0.5",children:x.lock})]})]})]})}),s.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-64 p-8 flex flex-col justify-center gap-1 opacity-60 pointer-events-none hidden lg:flex",children:N.map((b,j)=>s.jsx("div",{className:"text-[10px] text-green-500/70 font-mono truncate",children:b},j))}),s.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-64 p-8 flex flex-col justify-center gap-1 opacity-60 pointer-events-none text-right hidden lg:flex",children:N.map((b,j)=>s.jsx("div",{className:"text-[10px] text-green-500/70 font-mono truncate",children:b.split("").reverse().join("")},j))}),f>=1&&s.jsxs("div",{className:"absolute inset-0 z-0 flex items-center justify-center pointer-events-none",children:[s.jsx("div",{className:"w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"}),[1,2,3,4,5].map(b=>s.jsx("div",{className:"absolute border border-ash-light/20 rounded-full animate-tunnel",style:{width:`${b*10}%`,height:`${b*10}%`,animationDelay:`${b*.1}s`}},b))]}),s.jsxs("div",{className:"absolute top-12 w-full text-center space-y-2",children:[u==="full"&&s.jsx("div",{className:"text-xs font-bold tracking-[1em] text-ash-gray animate-pulse",children:x.init}),f>=1&&s.jsx("div",{className:"text-4xl md:text-6xl font-black uppercase text-ash-light glitch-text-heavy","data-text":"NOVA_LABS",children:"NOVA_LABS"})]}),s.jsxs("div",{className:"absolute bottom-12 w-full flex justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-mono px-4 flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Sr,{size:14})," SYSTEM: ",s.jsx("span",{className:"text-green-500",children:"ONLINE"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Lc,{size:14})," UPLINK: ",s.jsx("span",{className:"text-green-500",children:"STABLE"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Xt,{size:14})," MEMORY: ",s.jsx("span",{className:"text-green-500",children:"READ_WRITE"})]})]}),f===3&&s.jsx("div",{className:"absolute inset-0 bg-ash-white animate-fade-in z-[100000]"}),f===2&&u==="full"&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-50 bg-red-500/10",children:s.jsx("div",{className:"border-y-4 border-red-500 bg-ash-black text-red-500 text-xl md:text-4xl font-black p-4 w-full text-center animate-pulse",children:x.warn})})]})},vc=({lines:h})=>{const[w,u]=M.useState(!1);return s.jsx(Ce,{children:s.jsxs("div",{className:"my-10 border-l-4 border-fuchsia-600 bg-fuchsia-950/10 font-mono text-xs md:text-sm shadow-[0_0_15px_-3px_rgba(192,38,211,0.2)]",children:[s.jsxs("button",{onClick:()=>u(!w),className:"w-full text-left p-3 md:p-4 bg-fuchsia-950/20 hover:bg-fuchsia-900/30 text-fuchsia-300 font-bold flex items-center gap-3 transition-all group border-b border-fuchsia-500/20 focus:outline-none focus:bg-fuchsia-900/40",children:[s.jsx("div",{className:`transition-transform duration-300 ${w?"rotate-90":""}`,children:s.jsx(Ir,{size:16})}),s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-1 md:gap-3",children:[s.jsx("span",{className:"animate-pulse tracking-widest text-fuchsia-400",children:">>> SYSTEM_INTERCEPT // 0000.2_VOID"}),s.jsx("span",{className:"text-[10px] bg-fuchsia-900/50 px-1 border border-fuchsia-500/30 text-fuchsia-200/70",children:"ENCRYPTION: UNSTABLE"})]}),s.jsx("span",{className:"ml-auto opacity-50 text-[10px] group-hover:opacity-100 transition-opacity",children:"[CLICK_TO_DECODE]"})]}),s.jsx("div",{className:`transition-all duration-500 ease-in-out overflow-hidden ${w?"max-h-[1000px] opacity-100":"max-h-0 opacity-0"}`,children:s.jsxs("div",{className:"p-4 md:p-6 text-fuchsia-100/90 space-y-2 leading-relaxed tracking-wide font-medium bg-black/20 backdrop-blur-sm",children:[h.map((f,g)=>{const N=f.replace(/0000\.2Void>>/,"").replace(/【插入结束】|【插入結束】|\[INSERTION_END\]/,"");return N.trim()?s.jsx("p",{className:"border-l border-fuchsia-500/20 pl-3 hover:border-fuchsia-500 hover:bg-fuchsia-500/5 transition-colors duration-300",children:N},g):s.jsx("br",{},g)}),s.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-fuchsia-500/30 text-[10px] text-fuchsia-500 text-right",children:"// LOG_END // CONNECTION_TERMINATED"})]})})]})})},Wi=h=>h.split(/(\[\[(?:MASK|GLITCH_GREEN)::.*?\]\])/g).map((u,f)=>{if(u.startsWith("[[MASK::")&&u.endsWith("]]")){const g=u.slice(8,-2);return s.jsx(rl,{children:g},f)}else if(u.startsWith("[[GLITCH_GREEN::")&&u.endsWith("]]")){const g=u.slice(16,-2);return s.jsxs("span",{className:"text-emerald-400 font-black tracking-widest drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] inline-block animate-pulse relative px-1",children:[s.jsx("span",{className:"absolute inset-0 animate-ping opacity-30 blur-sm bg-emerald-500/20 rounded-full"}),s.jsx("span",{className:"relative z-10",children:g})]},f)}return u}),Df=({currentIndex:h,onChapterChange:w,language:u,isLightTheme:f})=>{const[g,N]=M.useState("directory"),[P,x]=M.useState(!0),b=M.useRef(null),[j,_]=M.useState(!1),[E,k]=M.useState(0),C=dt.chapters[h],A=C.translations[u]||C.translations["zh-CN"];M.useEffect(()=>{window.innerWidth<768&&x(!1)},[]),M.useEffect(()=>{b.current&&(b.current.scrollTop=0)},[h,g]);const O=Q=>{k(Q),_(!0)},L=()=>{_(!1),w(E),N("reader")},te=()=>{h<dt.chapters.length-1&&w(h+1)},re=()=>{h>0&&w(h-1)};M.useEffect(()=>{const Q=U=>{g==="reader"&&(U.target.tagName==="INPUT"||U.target.tagName==="TEXTAREA"||(U.key==="ArrowLeft"?re():U.key==="ArrowRight"&&te()))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[g,h]);const ie=Q=>{const U=J=>J.length===0?"":J.reduce((ce,se,Oe)=>{if(Oe===0)return se;const pe=J[Oe-1],me=pe[pe.length-1],R=se[0],Z=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,V=Z.test(me),m=Z.test(R);return V||m?ce+se:ce+" "+se},""),K=Q.split(`
`),$=[];let oe=[],Ee=!1,be=[];const De=()=>{if(oe.length>0){const J=U(oe);let ce="mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-ash-light transition-colors";J.startsWith("零点")||J.startsWith("Point")||J.startsWith("零點")?ce=f?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]":J.startsWith("芷漓")||J.startsWith("Zeri")?ce=f?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-400 drop-shadow-[0_0_2px_rgba(244,114,182,0.4)]":J.startsWith("泽洛")||J.startsWith("Zelo")||J.startsWith("澤洛")?ce=f?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 drop-shadow-[0_0_2px_rgba(96,165,250,0.4)]":(J.startsWith("???")||J.startsWith("Void")||J.includes("void")||J.includes("Void"))&&(ce=f?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-900 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"),$.push(s.jsx(Ce,{children:s.jsx("p",{className:ce,children:Wi(J)})},`p-${$.length}`)),oe=[]}};for(let J=0;J<K.length;J++){const ce=K[J],se=ce.trim(),Oe=se.includes("0000.2Void>>"),pe=se.includes("【插入结束】")||se.includes("【插入結束】")||se.includes("[INSERTION_END]");if(Oe){De(),Ee=!0,be=[],be.push(ce),pe&&(Ee=!1,$.push(s.jsx(vc,{lines:[...be]},`void-${J}`)),be=[]);continue}if(Ee){be.push(ce),pe&&(Ee=!1,$.push(s.jsx(vc,{lines:[...be]},`void-${J}`)),be=[]);continue}const me=se.match(/^\[\[BLUE::(.*?)\]\]$/),R=se.match(/^\[\[DANGER::(.*?)\]\]$/),Z=se==="[[DIVIDER]]",V=/\[\[IMAGE::(.*?)::(.*?)\]\]/.test(se);if(me||R||Z||V||!se){if(De(),me){const S=f?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 font-bold";$.push(s.jsx(Ce,{children:s.jsx("p",{className:S,children:Wi(me[1])})},`blue-${J}`))}else if(R){const S=f?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-600 font-black animate-crash origin-left":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-500 font-black animate-crash origin-left";$.push(s.jsx(Ce,{children:s.jsx("p",{className:S,children:Wi(R[1])})},`danger-${J}`))}else if(Z)$.push(s.jsx(Ce,{children:s.jsxs("div",{className:"my-12 flex items-center justify-center gap-4 opacity-50 select-none",children:[s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(Xt,{size:16,className:"text-ash-light animate-pulse"}),s.jsx("div",{className:"text-[10px] font-mono tracking-[0.3em] text-ash-light",children:"DATA_SEGMENT"})]}),s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"})]})},`div-${J}`));else if(V){const S=se.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(S){const[ne,ae,ue]=S;$.push(s.jsx(Ce,{className:"my-12 flex flex-col items-center w-full",children:s.jsxs("div",{className:"relative border-4 border-ash-light p-2 bg-ash-dark max-w-full shadow-hard group",children:[s.jsx("div",{className:"absolute -top-1.5 -left-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsx("div",{className:"absolute -top-1.5 -right-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsx("div",{className:"absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsx("div",{className:"absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsxs("div",{className:"relative overflow-hidden bg-ash-black",children:[s.jsx("img",{src:ae,alt:ue,className:"relative max-h-[600px] w-auto object-cover block grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"}),s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"})]}),s.jsx("div",{className:"absolute bottom-4 right-4 z-20",children:s.jsxs("div",{className:"bg-ash-light text-ash-black px-3 py-1 text-[10px] font-mono font-bold border-2 border-ash-black shadow-hard-sm flex items-center gap-2 uppercase",children:[s.jsx(tl,{size:12,strokeWidth:3}),ue]})})]})},`img-${J}`))}}continue}oe.push(se)}return De(),$};return g==="directory"?s.jsxs("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:[j&&s.jsx(Fc,{onComplete:L,language:u,mode:"fast"}),s.jsx("div",{className:"absolute top-0 bottom-0 left-1/2 w-px bg-ash-dark -translate-x-1/2 z-0 border-l border-dashed border-ash-gray/30"}),s.jsx("header",{className:"relative z-10 mb-12 text-center bg-ash-black p-6 border border-ash-gray shadow-hard max-w-lg w-full mt-8 md:mt-0",children:s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(Ec,{size:32,className:"text-ash-light"}),s.jsx("h1",{className:"text-2xl font-black text-ash-light uppercase tracking-tighter",children:u==="en"?"MAIN_ARCHIVE_DIR":"主线档案目录"}),s.jsx("p",{className:"text-[10px] font-mono text-ash-gray border-t border-dashed border-ash-gray/50 pt-2 w-full text-center",children:"/VAR/LIB/NOVA/MAIN_STORY"})]})}),s.jsx("div",{className:"w-full max-w-5xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20",children:dt.chapters.map((Q,U)=>{var oe;const K=Q.translations[u]||Q.translations["zh-CN"],$=Q.status==="locked";return s.jsx(Ce,{delay:U*50,className:"h-full",children:s.jsxs("button",{onClick:()=>!$&&O(U),disabled:$,className:`
                                    w-full h-full flex flex-col text-left border-2 transition-all duration-300 relative group overflow-hidden
                                    ${$?"bg-ash-black/50 border-ash-dark text-ash-gray cursor-not-allowed opacity-70":"bg-ash-black border-ash-gray text-ash-light hover:border-ash-light hover:shadow-hard hover:-translate-y-1"}
                                `,children:[s.jsxs("div",{className:`p-3 border-b border-dashed ${$?"border-ash-dark bg-ash-dark/30":"border-ash-gray/30 bg-ash-dark/50"} flex justify-between items-center`,children:[s.jsx("span",{className:"text-[10px] font-mono font-bold",children:((oe=Q.id.split("-").pop())==null?void 0:oe.toUpperCase())||`CH_${U}`}),$?s.jsx(Cr,{size:12}):s.jsx("div",{className:"w-2 h-2 bg-ash-light rounded-full"})]}),s.jsxs("div",{className:"p-4 flex-1 flex flex-col gap-2",children:[s.jsx("h3",{className:"text-lg font-black uppercase tracking-tight leading-tight line-clamp-2",children:K.title}),s.jsxs("div",{className:"mt-auto pt-4 space-y-2",children:[s.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono opacity-70",children:[s.jsx(Us,{size:10}),Q.date]}),K.summary&&s.jsx("p",{className:"text-xs font-mono text-ash-gray line-clamp-2 border-l-2 border-ash-gray/30 pl-2",children:K.summary})]})]}),!$&&s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"}),$&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:s.jsx("div",{className:"bg-red-950/80 border border-red-800 text-red-500 px-3 py-1 text-xs font-mono font-bold uppercase rotate-12 backdrop-blur-sm",children:"Access Denied"})})]})},Q.id)})})]}):s.jsxs("div",{className:"flex h-full relative overflow-hidden bg-retro-paper text-zinc-950",children:[s.jsxs("aside",{className:`absolute md:relative z-20 h-full bg-ash-black border-r-4 border-ash-dark transition-all duration-300 ease-in-out flex flex-col ${P?"w-72 translate-x-0 shadow-2xl md:shadow-none":"w-0 -translate-x-full md:w-0 md:-translate-x-0 overflow-hidden"}`,children:[s.jsxs("div",{className:"p-4 border-b-2 border-ash-gray bg-ash-black text-ash-light flex justify-between items-center shrink-0",children:[s.jsxs("button",{onClick:()=>N("directory"),className:"flex items-center gap-2 text-xs font-mono font-bold hover:text-ash-gray transition-colors group focus:outline-none focus:bg-ash-dark focus:text-ash-white p-1",children:[s.jsx(Xi,{size:14,className:"group-hover:-translate-x-1 transition-transform"}),u==="en"?"DIRECTORY":"返回目录"]}),s.jsx("button",{onClick:()=>x(!1),className:"md:hidden text-ash-gray hover:text-ash-light focus:outline-none focus:text-ash-light","aria-label":"Close Sidebar",children:s.jsx(Fs,{size:16})})]}),s.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:dt.chapters.map((Q,U)=>{var oe;const K=((oe=Q.translations[u])==null?void 0:oe.title)||Q.translations["zh-CN"].title,$=Q.status==="locked";return s.jsxs("button",{onClick:()=>{$||(w(U),window.innerWidth<768&&x(!1))},disabled:$,className:`w-full text-left p-4 text-xs font-mono border-b border-ash-dark transition-none group relative overflow-hidden focus:outline-none focus:bg-ash-dark ${U===h?"bg-ash-light text-ash-black":$?"bg-ash-dark/10 text-ash-gray cursor-not-allowed":"text-ash-gray hover:bg-ash-dark hover:text-ash-white"}`,children:[s.jsxs("div",{className:"relative z-10",children:[s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("div",{className:"font-bold truncate uppercase mb-1 max-w-[85%]",children:[U===h&&s.jsx("span",{className:"mr-2",children:">"}),K]}),$&&s.jsx("div",{className:"text-[10px] border border-current px-1 opacity-70",children:"LOCK"})]}),s.jsx("div",{className:"opacity-60",children:Q.date})]}),$&&s.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.2)_5px,rgba(0,0,0,0.2)_10px)] pointer-events-none z-0"})]},Q.id)})})]}),!P&&s.jsx("button",{onClick:()=>x(!0),className:"absolute top-4 left-4 z-10 p-2 bg-ash-black text-ash-light border-2 border-ash-light hover:bg-ash-light hover:text-ash-black shadow-hard focus:outline-none focus:ring-2 focus:ring-ash-light focus:bg-ash-light focus:text-ash-black transition-colors","aria-label":u==="en"?"Open Sidebar":"打开侧边栏",children:s.jsx(Rc,{size:20})}),s.jsx("main",{ref:b,className:"flex-1 overflow-y-auto scroll-smooth relative bg-ash-black",children:s.jsx("div",{className:"max-w-4xl mx-auto min-h-full bg-ash-black border-l-0 md:border-l-2 md:border-r-2 border-ash-dark/50 shadow-2xl relative animate-slide-in",children:C.status==="locked"?s.jsx("div",{className:"h-[80vh] flex flex-col items-center justify-center text-ash-gray p-8 text-center",children:s.jsxs("div",{className:"mb-6 p-6 border-4 border-dashed border-red-900/50 rounded-none bg-red-950/10",children:[s.jsx(Xt,{size:64,className:"text-red-800 mb-4 mx-auto animate-pulse"}),s.jsx("h2",{className:"text-2xl font-black uppercase text-red-700 tracking-widest mb-2",children:"Access Denied"}),s.jsx("p",{className:"font-mono text-sm text-red-900/70",children:"ENCRYPTED_FILE // AUTH_LEVEL_MISSING"})]})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"px-8 py-12 lg:px-16 md:mt-0 border-b-4 border-double border-ash-gray bg-ash-black text-ash-light mt-12",children:s.jsxs(Ce,{children:[s.jsxs("div",{className:"flex justify-between items-start mb-6 font-mono text-[10px] text-ash-gray uppercase tracking-widest",children:[s.jsxs("span",{children:["NOVA_ARCHIVE // ",C.id]}),s.jsxs("span",{children:["PG_INDEX: ",h+1]})]}),s.jsx("h1",{className:"text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight",children:A.title}),s.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-ash-gray bg-ash-dark inline-block px-3 py-1 border border-ash-gray",children:[s.jsx(Us,{size:12}),s.jsx("span",{children:C.date})]})]})}),s.jsx("article",{className:"px-8 py-12 lg:px-16 max-w-none text-ash-light font-serif leading-loose tracking-wide",children:ie(A.content)}),s.jsx("div",{className:"p-8 md:p-16 border-t-4 border-double border-ash-gray bg-ash-dark",children:s.jsxs("div",{className:"flex justify-between items-center gap-4",children:[s.jsxs("button",{onClick:re,disabled:h===0,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono focus:outline-none focus:bg-ash-light focus:text-ash-black",children:[s.jsx(Fs,{size:16})," PREV_FILE"]}),s.jsx("div",{className:"hidden md:block font-mono text-xs text-ash-gray",children:"- END OF RECORD -"}),s.jsxs("button",{onClick:te,disabled:h===dt.chapters.length-1,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono focus:outline-none focus:bg-ash-light focus:text-ash-black",children:["NEXT_FILE ",s.jsx(Ji,{size:16})]})]})})]})},h)})]})},Pf={id:"story-frag-rain-1",date:"档案记录: S-001",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (一) // 废墟",summary:"废弃的校区，久违的吉他话题，以及掩盖在日常下的暗流。",content:`[[BLUE::记忆提取中... 场景重构：废弃校区]]

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

Dusk: "...Oh? Finally talking shop? Let's go!"`}}},Af={id:"story-frag-rain-2",date:"档案记录: S-002",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (二) // 揭露",summary:"厚重的气密门隔绝了通路，也锁住了那些关于“实验”的秘密。",content:`[[BLUE::记忆提取中... 场景重构：Nova Labs 内部实验室 - B区 (Sector B)]]

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

[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::PHOTO_ARCHIVE_M001]]`}}},Of={id:"story-frag-rain-3",date:"档案记录: S-003",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (三) // 托付",summary:"黄昏的吉他声掩盖了真相，怀表的滴答声倒数着离别。",content:`[[BLUE::记忆提取中... 场景重构：未完工观景台]]

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

暮雨：“他们不是死于意外。他们是……最早接触到‘空界’的人。手记里记录了关于这个世界不稳定性的真相，以及……某种必然的终结。”

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

我将一直背着的黑色琴包拉链拉开，取出了那把跟随我多年的木吉他。虽然有些旧了，但音色风韵犹存。我试了试音，稍微调准了一下弦轴。

夕阳开始下沉，将天空染成了一片血红。旁侧的建筑在余晖中拉出长长的影子。

我拨动了琴弦。

是一首很老的曲子，旋律简单。在学校的礼堂里，我曾经弹过无数次。

零点静静地听着，怀表的茶色琉璃盖在她手中折射出落日的斜阳。

音乐声在风中飘荡，仿佛在诉说着那些无法言说的告别。

一曲终了，零点轻轻鼓起了掌。

零点：“好听！不愧是你。”

我把吉他轻轻放在一旁，从口袋里摸出了终端。屏幕的反光映照着黄昏的火烧云。

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

零點帶我去的是一個未完工的觀景台，從這裡可以俯瞰整個舊學區的廢墟，以及遠處燈火通明的新城區。

我們靠在欄杆上，風吹亂了她的頭髮，也吹散了之前實驗室裡的壓抑氣氛。

暮雨：「……以前我經常一個人溜到這種地方來！」

零點：「我知道。因為妳總是一副『眾人皆醉我獨醒』的樣子嘛。」

暮雨笑了笑，從口袋裡摸出一盒有些皺巴巴的軟殼萬寶路。

零點：「哎？妳什麼時候開始抽菸了？」

暮雨：「最近才開始的。壓力大的時候來一根，稍微能冷靜點。……來一根？」

零點搖搖頭。我點燃了一根，菸草的味道混雜著秋日的涼風鑽入肺部，帶來一陣輕微的眩暈感。

暮雨：「零點，還記得那天……我收到的『啟示』嗎？」

零點：「妳是說……關於『空界』的那個？」

暮雨：「嗯。其實在那之後，我並沒有停止調查。雖然表面上我在做媒體工作，但實際上……我一直在研究我父母留下的手記。」

我吐出一口菸圈，煙霧在風中迅速消散。

暮雨：「他們不是死於意外。他們是……最早接觸到『空界』的人。手記裡記錄了關於這個世界不穩定性的真相，以及……某種必然的終結。」

零點：「必然的……終結？」

暮雨：「沒錯。這個世界就像一個不斷崩塌的沙堡，無論我們怎麼修補，最後都會回歸虛無。除非……」

我停頓了一下，沒有繼續說下去。我從懷裡掏出了一塊金色的懷表。那是一塊很舊的機械錶，錶蓋上刻著複雜的紋路。

[[IMAGE::https://free.picui.cn/free/2025/12/12/693b069e37e26.png::POCKET_WATCH]]

暮雨：「給！這個送妳了。」

零點：「欸？這東西對妳來說挺寶貴的吧...怎麼就突然給我了？」

暮雨：「正因為珍貴，所以才要交給妳保管啊！零點，妳是『變數』。如果說這個世界還有什麼希望的話，那一定在妳身上。」

零點接過懷表，有些不知所措地握在手裡。懷表還帶著我的體溫，向這個世界散發微弱的熱輻射。

零點：「暮雨……妳是不是有什麼事情瞞著我？這種像是交代後事一樣的語氣……」

暮雨：「哎呀，別多想！只是覺得……放在妳那裡比較安全。畢竟我這麼大大咧咧的，說不定哪天就把自己弄丟了，到時候還得靠妳把這錶找回來呢。」

我掐滅了菸頭，將它扔到一旁的建材回收通道裡。

暮雨：「好啦，不說這些沉重的話題了。既然是在這種地方……想聽歌嗎？」

零點：「哎？妳要現在彈嗎？」

暮雨：「嗯哼！反正琴就在身上，不彈白不彈。」

我將一直背著的黑色琴包拉鍊拉開，取出了那把跟隨我多年的木吉他。雖然有些舊了，但音色依然清脆。我試了試音，稍微調準了一下弦軸。

夕陽開始下沉，將天空染成了一片血紅。廢墟在餘暉中拉出長長的影子。

我撥動了琴弦。

是一首很老的曲子，旋律簡單而哀傷。在學校的天台上，我曾經彈過無數次。

零點靜靜地聽著，懷表的茶色琉璃蓋在她手中折射出落日的斜陽。

音樂聲在風中飄盪，彷彿在訴說著那些無法言說的告別。

一曲終瞭，零點輕輕鼓起了掌，眼角似乎有些濕潤，但很快就被她標誌性的笑容掩蓋了。

零點：「好聽！不愧是我的專屬吉他手。」

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

暮雨：「別亂動，要虛了。」

零點：「是妳手在抖吧？來，笑一個嘛暮雨！茄子——」

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

Point shook her head. I lit one, the taste of tobacco mixing with the cold autumn wind into my lungs, bringing a slight dizziness.

Dusk: "Point, do you remember that day... the 'Revelation' I received?"

Point: "You mean... the one about the 'Void'?"

Dusk: "Yeah. Actually, after that, I didn't stop investigating. Although on the surface I'm doing media work, in reality... I've been studying the notes left by my parents."

I exhaled a smoke ring, watching it dissipate rapidly in the wind.

Dusk: "They didn't die in an accident. They were... the first people to contact the 'Void'. The notes recorded the truth about the instability of this world, and... a certain inevitable end."

Point: "Inevitable... end?"

Dusk: "Yep. This world is like a collapsing sandcastle. No matter how we patch it, it will eventually return to nothingness. Unless..."

I paused and didn't continue. I took out a gold pocket watch from my chest. It was a very old mechanical watch with complex patterns engraved on the cover, the only legacy left by my parents.

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

I unzipped the black guitar bag I had been carrying and took out the acoustic guitar that had been with me for years. Although it was a bit old, the tone was still crisp. I tested the sound and adjusted the tuning pegs slightly.

The sun began to sink, dyeing the sky a blood red. The ruins cast long shadows in the afterglow.

I strummed the strings.

It was a very old tune, simple and sad. I had played it countless times on the school rooftop.

Point listened quietly, the tea-colored glass cover of the pocket watch in her hand refracting the setting sun.

The music floated in the wind, seemingly telling of those unspeakable farewells.

When the song ended, Point clapped gently. The corners of her eyes seemed a bit moist, but she quickly covered it with her signature smile.

Point: "That was great! As expected of my personal guitarist."

I gently set the guitar aside and fished my terminal out of my pocket. The screen reflected the fiery clouds of twilight.

Dusk: "Point, come here."

Point: "Eh? What for?"

I raised the terminal and switched to the front camera.

Dusk: "We rarely come here. Let's take a photo together."

Point was obviously stunned, her eyes wide as if she couldn't believe her ears.

Point: "Woah! Did the sun rise from the west? The big reporter who usually hides from cameras is actually asking to take a photo?"

Dusk: "Cut the chatter. Are we doing this or not? If not, I'm putting it away."

Point: "Yes yes yes! Of course!"

She immediately leaned in, standing on her tiptoes to match my height, a smile brighter than the sunset blooming on her face as she flashed a big peace sign.

Dusk: "Don't move, it's going to blur."

Point: "It's your hand shaking, isn't it? Come on, smile, Dusk! Cheese—"

Looking at that carefree smile on the screen, I couldn't help but curl my lips into a smile too.

[Click]

The afterglow of the setting sun fell upon us, freezing this moment in time. In the photo, we stood at the boundary between the ruins and the new city, as if standing on the edge of two eras.

It was getting late, and the twilight was about to burn out.

[[BLUE::[DATA RECORD INTERRUPTED...]]] `}}},Mf={id:"story-frag-rain-4",date:"档案记录: S-004",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (四) // 真相",summary:"既然结局无法更改，那么知晓真相便是我最后的执念。",content:`[[BLUE::记忆提取中... 场景重构：深夜的星联办公室]]

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

暮雨：“呼……最后一根了。味道还是这么呛啊。”

他并没有抽完，只是深深吸了一口，感受着那股灼热的气流在肺叶里回荡，然后将烟蒂重重地按灭在扶手上，像是掐灭了自己最后一丝犹豫。

他深吸一口气，空气中弥漫着熟悉的、干燥的臭氧味，混杂着尚未散去的烟草气息。他闭上眼睛，调整了刀尖的角度，对准了心脏的间隙。

没有颤抖。

手腕发力。

噗嗤。

冰冷的金属刺破了皮肤，撕裂了温热的血肉。

那一瞬间，随着剧痛和寒意一同涌入脑海的，是海量的信息流。

[[VOID_VISION::【神经连接强行建立……时空回溯开启……】]]

[[VOID_VISION::【场景一：C区反应堆（过去）。并没有爆炸，只有刺耳的警报。你的父亲试图拉下最后的闸门，但他已经来不及，所有人都收到了来自泛义宇宙的“馈赠”】]]

[[VOID_VISION::【场景二：世界线变动-β（未来）。天空裂开了巨大的口子。重力常数失效。你所熟悉的街道、高楼大厦连同里面尖叫的人群被吸入天际的空洞。他们在半空中被引力潮汐撕扯成红色的血雾。没有幸存者，没有救援，没有希望。只有无尽的、绝望的红色。】]]

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

暮雨坐在椅子上，手裡把玩著那把鋒利的刺刀，指腹輕輕劃過冰冷的刀刃。片刻後，他停下動作，看向沙發方向，語氣平靜。

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

暮雨：「呼……最後一根了。味道還是這麼嗆啊。」

他並沒有抽完，只是深深吸了一口，感受著那股灼熱的氣流在肺葉裡迴盪，然後將菸蒂重重地按滅在扶手上，像是掐滅了自己最後一絲猶豫。

他深吸一口氣，空氣中瀰漫著熟悉的、乾燥的臭氧味，混雜著尚未散去的菸草氣息。他閉上眼睛，調整了刀尖的角度，對準了心臟的間隙。

沒有顫抖。

手腕發力。

噗嗤。

冰冷的金屬刺破了皮膚，撕裂了溫熱的血肉。

那一瞬間，隨著劇痛和寒意一同湧入腦海的，是海量的信息流。

[[VOID_VISION::【神經連接強行建立……時空回溯開啟……】]]

[[VOID_VISION::【場景一：C區反應堆（過去）。並沒有爆炸，只有刺耳的警報。你的父親試圖拉下最後的閘門，但他已經來不及，所有人都收到了來自泛義宇宙的「餽贈」】]]

[[VOID_VISION::【場景二：世界線變動-β（未來）。天空裂開了巨大的口子。重力常數失效。你所熟悉的街道、高樓大廈連同裡面尖叫的人群被吸入天際的空洞。他們在半空中被引力潮汐撕扯成紅色的血霧。沒有倖存者，沒有救援，沒有希望。只有無盡的、絕望的紅色。】]]

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

Dusk sat in his chair, playing with the sharp bayonet, his fingertips gently gliding over the cold blade. A moment later, he stopped and looked towards the sofa, his tone calm.

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

Dusk: "So it wasn't a conspiracy, nor an accident. It was the price... the price of being a watcher."

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

Dusk: "Phew... the last one. The taste is still so harsh."

He didn't finish it. He just took a deep drag, feeling the burning airflow echoing in his lungs, then crushed the cigarette butt heavily against the armrest, as if extinguishing his last shred of hesitation.

He took a deep breath, the air filled with the familiar, dry scent of ozone, mixed with the lingering smell of tobacco. He closed his eyes, adjusted the angle of the blade tip, and aimed it at the gap in his heart.

No trembling.

The wrist exerted force.

Squelch.

The cold metal pierced the skin, tearing through the warm flesh.

In that instant, accompanying the intense pain and chill flooding into his brain, was a massive stream of information.

[[VOID_VISION::[NEURAL CONNECTION FORCED... TIME-SPACE REGRESSION ACTIVE...] ]]

[[VOID_VISION::[SCENE 1: SECTOR C REACTOR (PAST). NO EXPLOSION, ONLY PIERCING ALARMS. YOUR FATHER TRIED TO PULL THE FINAL LEVER, BUT HE WAS TOO LATE. EVERYONE RECEIVED A "GIFT" FROM THE GENERALIZED UNIVERSE.] ]]

[[VOID_VISION::[SCENE 2: WORLDLINE SHIFT-BETA (FUTURE). THE SKY TORE OPEN A MASSIVE GAP. GRAVITY CONSTANTS FAILED. THE STREETS YOU KNOW, THE SKYSCRAPERS, AND THE SCREAMING CROWDS INSIDE WERE SUCKED INTO THE VOID IN THE SKY. THEY WERE TORN INTO A RED MIST OF BLOOD BY TIDAL FORCES IN MID-AIR. NO SURVIVORS, NO RESCUE, NO HOPE. ONLY ENDLESS, DESPERATE RED.] ]]

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
[[BLUE::[TRUTH ARCHIVED.] ]]`}}},Lf={id:"story-coffee-crisis",date:"档案记录: X-001",status:"published",translations:{"zh-CN":{title:"咖啡机改造计划",summary:"芷漓觉得实验室的咖啡机效率太低，于是动手进行了“微调”。",content:`[[DIVIDER]]

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

Zeri: "...Is that really necessary?" (Calmly presses the button, causing the entire lab's lights to dim)`}}},Vf={id:"story-quantum-delivery",date:"档案记录: X-002",status:"published",translations:{"zh-CN":{title:"高维快递服务",summary:"零点试图证明“空间折跃”可以用于外卖配送，但收货地址似乎填错到了奇怪的地方。",content:`[[DIVIDER]]

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

Zelo: "(Whispering) In a sense, this really is a 'High-Dimensional' delivery..."`}}},Ff={id:"story-hotpot-protocol",date:"档案记录: X-003",status:"published",translations:{"zh-CN":{title:"绝密火锅协议",summary:"实验室守则第一条：严禁在操作台附近饮食。除非……食材实在是太诱人了。",content:`[[DIVIDER]]

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

Point: "Aaaah! My beef! No one grab it, I'm going to turn my grief and indignation into appetite!"`}}},Uf={id:"special-legacy-dusk",date:"F-6年34月13日",status:"published",translations:{"zh-CN":{title:"legacy",summary:"数据流深处的一封未发送信件。发件人：D.雨",content:`[[DANGER::【系统提示：该文件已自动设置为只读状态】]]

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
                                                                          D.Rain`}}},Wf=(h,w)=>({id:h,date:w,status:"locked",translations:{"zh-CN":{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"},"zh-TW":{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"},en:{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"}}}),Bf=[{id:"VOL_MEMORIES",title:"那场仍未结束的零碎之雨",titleEn:"The Fragmented Rain That Never Ended",status:"unlocked",chapters:[Pf,Af,Of,Mf,Uf]},{id:"VOL_DAILY",title:"时域日常",titleEn:"Time Line Daily",status:"unlocked",chapters:[Lf,Vf,Ff,Wf("ERR_004","档案记录: X-004")]},{id:"VOL_UNKNOWN",title:"▓▓▓▓▓▓",titleEn:"UNKNOWN_SECTOR",status:"corrupted",chapters:[]}],Hf=({volumes:h,onSelectVolume:w,onOpenCharModal:u,language:f,isLightTheme:g})=>s.jsxs("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:[s.jsxs("div",{className:"fixed top-0 left-0 w-full h-full pointer-events-none opacity-20",children:[s.jsx("div",{className:"absolute top-1/4 left-0 w-full h-px bg-ash-gray/50"}),s.jsx("div",{className:"absolute bottom-1/4 left-0 w-full h-px bg-ash-gray/50"}),s.jsx("div",{className:"absolute top-0 left-1/4 h-full w-px bg-ash-gray/50"}),s.jsx("div",{className:"absolute top-0 right-1/4 h-full w-px bg-ash-gray/50"})]}),s.jsxs("button",{onClick:u,className:"fixed bottom-24 right-4 md:absolute md:top-4 md:right-4 z-50 bg-ash-black border border-ash-gray p-3 text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all shadow-hard group",title:"Personnel Archive",children:[s.jsx(pf,{size:20}),s.jsx("span",{className:"absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-ash-dark text-ash-light text-[10px] font-mono px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-ash-gray hidden md:block",children:"PERSONNEL_DB"})]}),s.jsx("header",{className:"relative z-10 mb-16 text-center w-full max-w-2xl mx-auto mt-8 md:mt-4",children:s.jsxs("div",{className:"flex flex-col items-center gap-3",children:[s.jsx(rf,{size:40,className:"text-ash-light",strokeWidth:1}),s.jsx("h1",{className:"text-3xl md:text-5xl font-black text-ash-light uppercase tracking-tighter glitch-text-heavy","data-text":f==="en"?"SIDE_ARCHIVES":"支线档案库",children:f==="en"?"SIDE_ARCHIVES":"支线档案库"}),s.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono text-ash-gray border border-ash-gray/50 px-2 py-1 bg-ash-black/80",children:[s.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"STATUS: MOUNTED",s.jsx("span",{className:"mx-1",children:"|"}),"/VAR/LIB/MEMORIES/SIDE_STORIES"]})]})}),s.jsx("div",{className:"w-full max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-4 pb-20",children:h.map((N,P)=>{const x=N.status==="locked",b=N.status==="corrupted",j=N.id==="VOL_MEMORIES",_=g?"bg-red-50 border-red-300 text-red-700":"bg-red-950/20 border-red-900 text-red-500",E=g?"bg-zinc-200 border-zinc-300 text-zinc-500":"bg-ash-dark/20 border-ash-dark text-ash-gray",k=g?"bg-white border-zinc-300 text-zinc-800 hover:border-zinc-500 hover:shadow-lg":"bg-ash-black/90 border-ash-gray text-ash-light group-hover:border-ash-light group-hover:bg-ash-dark/80 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",C=g?"bg-sky-50 border-cyan-500 text-sky-900 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:-translate-y-2":"bg-cyan-950/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-cyan-900/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2";return s.jsx(Ce,{delay:P*150,className:`w-full h-full ${j?"md:col-span-1":""}`,children:s.jsxs("button",{onClick:()=>{!x&&!b&&w(N)},disabled:x||b,className:`
                                    w-full h-64 relative group transition-all duration-300 transform
                                    flex flex-col text-left overflow-hidden
                                    ${b?"opacity-80":x?"opacity-60":"cursor-pointer"}
                                `,children:[s.jsxs("div",{style:{clipPath:"polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)"},className:`
                                        absolute inset-0 border-2 transition-colors duration-300
                                        ${b?_:x?E:j?C:k}
                                    `,children:[s.jsx("div",{className:`absolute inset-0 bg-transparent bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none ${g?"opacity-5":"opacity-20"}`}),j&&s.jsxs(s.Fragment,{children:[!g&&s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-40",children:Array.from({length:12}).map((A,O)=>s.jsx("div",{className:`absolute w-px bg-gradient-to-b from-transparent ${g?"via-cyan-600":"via-cyan-300"} to-transparent`,style:{height:`${20+Math.random()*40}%`,left:`${Math.random()*100}%`,top:"-50%",animation:`dataRain ${1.5+Math.random()*1.5}s linear infinite`,animationDelay:`${Math.random()*2}s`}},O))})]}),j&&s.jsxs("div",{className:`absolute top-0 right-0 z-30 px-3 py-1 text-[10px] font-bold font-mono border-b-2 border-l-2 flex items-center gap-1 ${g?"bg-cyan-100 text-cyan-700 border-cyan-200":"bg-cyan-950 text-cyan-400 border-cyan-500/50"}`,children:[s.jsx(Dc,{size:10,className:"animate-pulse"}),"FEATURED"]}),s.jsxs("div",{className:"p-6 h-full flex flex-col relative z-20",children:[s.jsxs("div",{className:"flex justify-between items-start mb-auto",children:[j?s.jsxs("div",{className:"relative",children:[s.jsx(Ic,{size:32,strokeWidth:1,className:"text-cyan-500 relative z-10"}),s.jsx(Pc,{size:16,className:"text-cyan-300 absolute -top-1 -right-1 animate-spin-slow"})]}):s.jsx(_c,{size:32,strokeWidth:1,className:b?"animate-pulse":""}),s.jsxs("div",{className:"text-[10px] font-mono border border-current px-1 opacity-70",children:["VOL_0",P+1]})]}),s.jsxs("div",{className:"space-y-1 mt-4",children:[s.jsx("h3",{className:`font-black text-xl md:text-2xl font-mono uppercase tracking-tight leading-none ${b?"blur-[1px]":""} ${j?g?"text-cyan-700":"text-cyan-100 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]":""}`,children:f==="en"?N.titleEn:N.title}),s.jsx("div",{className:`text-[10px] font-mono uppercase tracking-widest ${j?"opacity-80":"opacity-50"}`,children:N.titleEn})]}),s.jsxs("div",{className:"mt-6 pt-4 border-t border-dashed border-current/30 flex justify-between items-end text-[10px] font-mono",children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("span",{children:["SIZE: ",N.chapters.length*128,"KB"]}),s.jsxs("span",{className:"flex items-center gap-1",children:["STATUS:",b?"ERR":x?"LCK":"RDY"]})]}),b?s.jsx(Ir,{size:16}):x?s.jsx(Cr,{size:16}):s.jsx("div",{className:"w-16 h-2 bg-current opacity-20 relative",children:s.jsx("div",{className:"absolute left-0 top-0 h-full bg-current w-1/2"})})]})]})]}),!x&&!b&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${j?"border-cyan-400":g?"border-zinc-800":"border-ash-light"}`}),s.jsx("div",{className:`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${j?"border-cyan-400":g?"border-zinc-800":"border-ash-light"}`})]})]})},N.id)})})]}),$f=({volume:h,onBack:w,onSelectChapter:u,language:f,isLightTheme:g})=>s.jsx("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:s.jsxs("div",{className:"w-full max-w-3xl relative z-10 animate-fade-in mt-8 md:mt-0",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-8 border-b-2 border-ash-gray pb-4",children:[s.jsx("button",{onClick:w,className:"p-2 border border-ash-gray text-ash-gray hover:text-ash-light hover:border-ash-light hover:bg-ash-dark transition-all",children:s.jsx(Xi,{size:20})}),s.jsxs("div",{children:[s.jsxs("div",{className:"text-[10px] font-mono text-ash-gray",children:["ROOT / ",h.id]}),s.jsx("h2",{className:"text-2xl font-black text-ash-light uppercase tracking-tight",children:f==="en"?h.titleEn:h.title})]}),s.jsx("div",{className:"ml-auto hidden md:block",children:s.jsx(Ws,{size:24,className:"text-ash-dark animate-pulse"})})]}),s.jsx("div",{className:"space-y-3",children:h.chapters.map((N,P)=>{const x=N.status==="locked",b=N.translations[f]||N.translations["zh-CN"],j=N.id==="special-legacy-dusk";let _="";return j?_=g?"bg-red-50 border-red-500 text-red-900 shadow-[0_0_10px_rgba(220,38,38,0.3)]":"bg-red-950/20 border-red-700/50 text-red-500 shadow-[0_0_15px_rgba(185,28,28,0.2)]":x?_=g?"bg-zinc-100 border-zinc-300 text-zinc-400 opacity-60 cursor-not-allowed":"bg-ash-dark/20 border-ash-dark/50 text-ash-gray opacity-60 cursor-not-allowed":_=g?"bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-500 shadow-sm":"bg-ash-black/80 border-ash-dark/50 text-ash-light hover:border-ash-light hover:bg-ash-dark/40 shadow-hard-sm",s.jsx(Ce,{delay:P*50,children:s.jsxs("button",{onClick:()=>{x||u(P)},disabled:x,className:`
                                        w-full flex items-center gap-4 p-4 border transition-all duration-200 group relative overflow-hidden
                                        ${_}
                                        ${j?"hover:scale-[1.01] hover:bg-red-900/10 cursor-not-allowed":""}
                                    `,children:[s.jsx("div",{className:`shrink-0 w-8 text-center font-mono text-xs ${j?"text-red-500 font-bold":"opacity-50"}`,children:j?"!!":String(P+1).padStart(2,"0")}),s.jsx("div",{className:`
                                        shrink-0 p-2 border transition-colors
                                        ${j?"bg-red-950 border-red-500 text-red-500 animate-pulse":x?"bg-transparent border-current opacity-50":g?"bg-zinc-100 border-zinc-200 group-hover:bg-zinc-800 group-hover:text-white group-hover:border-zinc-800":"bg-ash-dark/50 border-ash-gray/30 group-hover:border-ash-light group-hover:bg-ash-light group-hover:text-ash-black"}
                                    `,children:j?s.jsx(Pc,{size:16,fill:"currentColor"}):x?s.jsx(Cr,{size:16}):s.jsx(Us,{size:16})}),s.jsxs("div",{className:"flex-1 text-left relative",children:[s.jsx("div",{className:`font-bold font-mono text-sm md:text-base uppercase truncate ${j?"glitch-text-heavy tracking-widest":""}`,"data-text":b.title,children:b.title}),s.jsxs("div",{className:`text-[10px] font-mono flex items-center gap-2 ${j?"text-red-500/70":"opacity-50"}`,children:[s.jsx("span",{children:N.date}),j&&s.jsx("span",{className:"font-bold border border-red-500/50 px-1 bg-red-950/30",children:"LEGACY // RESTRICTED"}),!x&&!j&&s.jsxs("span",{className:"hidden md:inline",children:["| ",b.content.length*2," BYTES"]})]})]}),!x&&s.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:s.jsx(Ji,{size:16})}),j&&s.jsx("div",{className:"opacity-70",children:s.jsx(Ir,{size:16,className:"text-red-500"})}),!x&&!g&&!j&&s.jsx("div",{className:"absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none skew-x-12"}),j&&s.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(220,38,38,0.05)_10px,rgba(220,38,38,0.05)_20px)]"})]})},N.id)})})]})}),bc=({lines:h})=>{const[w,u]=M.useState(!1);return s.jsx(Ce,{children:s.jsxs("div",{className:"my-10 border-l-4 border-fuchsia-600 bg-fuchsia-950/10 font-mono text-xs md:text-sm shadow-[0_0_15px_-3px_rgba(192,38,211,0.2)]",children:[s.jsxs("button",{onClick:()=>u(!w),className:"w-full text-left p-3 md:p-4 bg-fuchsia-950/20 hover:bg-fuchsia-900/30 text-fuchsia-300 font-bold flex items-center gap-3 transition-all group border-b border-fuchsia-500/20",children:[s.jsx("div",{className:`transition-transform duration-300 ${w?"rotate-90":""}`,children:s.jsx(Ir,{size:16})}),s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-1 md:gap-3",children:[s.jsx("span",{className:"animate-pulse tracking-widest text-fuchsia-400",children:">>> SYSTEM_INTERCEPT // VOID_SIDE"}),s.jsx("span",{className:"text-[10px] bg-fuchsia-900/50 px-1 border border-fuchsia-500/30 text-fuchsia-200/70",children:"SOURCE: UNKNOWN"})]})]}),s.jsx("div",{className:`transition-all duration-500 ease-in-out overflow-hidden ${w?"max-h-[1000px] opacity-100":"max-h-0 opacity-0"}`,children:s.jsx("div",{className:"p-4 md:p-6 text-fuchsia-100/90 space-y-2 leading-relaxed tracking-wide font-medium bg-black/20 backdrop-blur-sm",children:h.map((f,g)=>s.jsx("p",{className:"border-l border-fuchsia-500/20 pl-3 hover:border-fuchsia-500 hover:bg-fuchsia-500/5 transition-colors duration-300",children:f.replace(/0000\.2Void>>|【插入结束】|【插入結束】|\[INSERTION_END\]/g,"")},g))})})]})})},Bi=h=>h.split(/(\[\[(?:MASK|GLITCH_GREEN)::.*?\]\])/g).map((u,f)=>{if(u.startsWith("[[MASK::")&&u.endsWith("]]")){const g=u.slice(8,-2);return s.jsx(rl,{children:g},f)}else if(u.startsWith("[[GLITCH_GREEN::")&&u.endsWith("]]")){const g=u.slice(16,-2);return s.jsxs("span",{className:"text-emerald-400 font-black tracking-widest drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] inline-block animate-pulse relative px-1",children:[s.jsx("span",{className:"absolute inset-0 animate-ping opacity-30 blur-sm bg-emerald-500/20 rounded-full"}),s.jsx("span",{className:"relative z-10",children:g})]},f)}return u}),Gf=({volume:h,initialChapterIndex:w,onBack:u,language:f,isLightTheme:g})=>{const[N,P]=M.useState(w),[x,b]=M.useState(!0),j=M.useRef(null);M.useEffect(()=>{window.innerWidth<768&&b(!1)},[]),M.useEffect(()=>{j.current&&(j.current.scrollTop=0)},[N]);const _=h.chapters[N],E=_.translations[f]||_.translations["zh-CN"],k=C=>{const A=U=>U.length===0?"":U.reduce((K,$,oe)=>{if(oe===0)return $;const Ee=U[oe-1],be=Ee[Ee.length-1],De=$[0],J=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ce=J.test(be),se=J.test(De);return ce||se?K+$:K+" "+$},""),O=C.split(`
`),L=[];let te=[],re=!1,ie=[];const Q=()=>{if(te.length>0){const U=A(te);let K="mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-ash-light transition-colors";U.startsWith("零点")||U.startsWith("Point")||U.startsWith("零點")?K=g?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]":U.startsWith("芷漓")||U.startsWith("Zeri")?K=g?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-400 drop-shadow-[0_0_2px_rgba(244,114,182,0.4)]":U.startsWith("泽洛")||U.startsWith("Zelo")||U.startsWith("澤洛")?K=g?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 drop-shadow-[0_0_2px_rgba(96,165,250,0.4)]":U.startsWith("???")||U.startsWith("Void")||U.includes("void")||U.includes("Void")?K=g?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-900 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]":(U.startsWith("终端")||U.startsWith("TERMINAL")||U.startsWith("終端"))&&(K=g?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-emerald-700 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-emerald-500 font-bold"),L.push(s.jsx(Ce,{children:s.jsx("p",{className:K,children:Bi(U)})},`p-${L.length}`)),te=[]}};for(let U=0;U<O.length;U++){const K=O[U],$=K.trim(),oe=$.includes("0000.2Void>>"),Ee=$.includes("【插入结束】")||$.includes("【插入結束】")||$.includes("[INSERTION_END]");if(oe){Q(),re=!0,ie=[],ie.push(K),Ee&&(re=!1,L.push(s.jsx(bc,{lines:[...ie]},`void-${U}`)),ie=[]);continue}if(re){ie.push(K),Ee&&(re=!1,L.push(s.jsx(bc,{lines:[...ie]},`void-${U}`)),ie=[]);continue}const be=$.match(/^\[\[BLUE::(.*?)\]\]$/),De=$.match(/^\[\[DANGER::(.*?)\]\]$/),J=$.match(/^\[\[VOID_VISION::(.*?)\]\]$/),ce=$==="[[DIVIDER]]",se=/\[\[IMAGE::(.*?)::(.*?)\]\]/.test($);if(be||De||J||ce||se||!$){if(Q(),be){const pe=g?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 font-bold";L.push(s.jsx(Ce,{children:s.jsx("p",{className:pe,children:Bi(be[1])})},`blue-${U}`))}else if(De){const pe=g?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-600 font-black animate-crash origin-left":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-500 font-black animate-crash origin-left";L.push(s.jsx(Ce,{children:s.jsx("p",{className:pe,children:Bi(De[1])})},`danger-${U}`))}else if(J)L.push(s.jsx(Ce,{className:"my-8 w-full max-w-2xl mx-auto",children:s.jsxs("div",{className:"relative border-y border-fuchsia-900/50 bg-black/80 p-6 backdrop-blur-sm overflow-hidden group select-none shadow-[0_0_30px_-10px_rgba(192,38,211,0.3)]",children:[s.jsx("div",{className:"absolute inset-0 bg-fuchsia-900/10 opacity-0 group-hover:opacity-20 transition-opacity"}),s.jsx("div",{className:"absolute top-0 left-0 w-0.5 h-full bg-fuchsia-500/50 box-shadow-[0_0_10px_rgba(217,70,239,0.8)]"}),s.jsx("div",{className:"absolute top-0 right-0 w-0.5 h-full bg-fuchsia-500/50 box-shadow-[0_0_10px_rgba(217,70,239,0.8)]"}),s.jsxs("div",{className:"flex items-center justify-between mb-4 border-b border-fuchsia-900/30 pb-2",children:[s.jsxs("div",{className:"text-[10px] font-mono text-fuchsia-600 tracking-[0.2em] flex items-center gap-2",children:[s.jsx(nf,{size:12,className:"animate-pulse"})," RETINAL_PROJECTION"]}),s.jsx("div",{className:"text-[10px] font-black font-mono bg-fuchsia-100 text-fuchsia-950 px-2 py-0.5 tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse",children:"SOURCE: VOID"})]}),s.jsx("div",{className:"relative z-10",children:s.jsxs("div",{className:"text-white font-serif italic text-lg md:text-xl text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] leading-relaxed tracking-wide",children:['"',J[1],'"']})}),s.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-white/30 shadow-[0_0_15px_rgba(255,255,255,1)] animate-scanline pointer-events-none mix-blend-overlay"})]})},`void-vis-${U}`));else if(ce)L.push(s.jsx(Ce,{children:s.jsxs("div",{className:"my-12 flex items-center justify-center gap-4 opacity-50 select-none",children:[s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"}),s.jsx(Xt,{size:16,className:"text-ash-light animate-pulse"}),s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"})]})},`div-${U}`));else if(se){const pe=$.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(pe){const[me,R,Z]=pe;L.push(s.jsx(Ce,{className:"my-12 flex flex-col items-center w-full",children:s.jsxs("div",{className:"relative border-4 border-ash-light p-2 bg-ash-dark max-w-full shadow-hard",children:[s.jsx("img",{src:R,alt:Z,className:"relative max-h-[600px] w-auto object-cover block grayscale-[20%] hover:grayscale-0 transition-all duration-500"}),s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),s.jsxs("div",{className:"absolute bottom-4 right-4 bg-ash-light text-ash-black px-3 py-1 text-[10px] font-mono font-bold border-2 border-ash-black flex items-center gap-2 uppercase",children:[s.jsx(tl,{size:12})," ",Z]})]})},`img-${U}`))}}continue}te.push($)}return Q(),L};return s.jsxs("div",{className:"flex h-full relative overflow-hidden bg-retro-paper text-zinc-950",children:[x&&s.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-[1px] z-10 md:hidden animate-fade-in",onClick:()=>b(!1)}),s.jsxs("aside",{className:`absolute md:relative z-20 h-full bg-ash-black border-r-4 border-ash-dark transition-all duration-300 ease-in-out flex flex-col shadow-2xl md:shadow-none ${x?"w-72 translate-x-0":"w-0 -translate-x-full md:w-0 md:-translate-x-0 overflow-hidden"}`,children:[s.jsxs("div",{className:"p-4 border-b-2 border-ash-gray bg-ash-black text-ash-light flex justify-between items-center shrink-0",children:[s.jsxs("button",{onClick:u,className:"flex items-center gap-2 text-xs font-mono hover:text-ash-gray transition-colors",children:[s.jsx(Xi,{size:14})," ",f==="en"?"FILE_LIST":"文件列表"]}),s.jsx("div",{className:"text-[10px] font-mono opacity-50 truncate max-w-[100px]",children:f==="en"?h.titleEn:h.title})]}),s.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:h.chapters.map((C,A)=>{var te;const O=((te=C.translations[f])==null?void 0:te.title)||C.translations["zh-CN"].title,L=C.status==="locked";return s.jsxs("button",{onClick:()=>{L||(P(A),window.innerWidth<768&&b(!1))},disabled:L,className:`w-full text-left p-4 text-xs font-mono border-b border-ash-dark transition-none group relative overflow-hidden ${A===N?"bg-ash-light text-ash-black":L?"bg-ash-dark/10 text-ash-gray cursor-not-allowed":"text-ash-gray hover:bg-ash-dark hover:text-ash-white"}`,children:[s.jsx("div",{className:"relative z-10",children:s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("span",{className:"font-bold truncate uppercase max-w-[85%]",children:[A===N&&s.jsx("span",{className:"mr-2",children:">"}),O]}),L&&s.jsx(nl,{size:12,className:"opacity-70"})]})}),L&&s.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.2)_5px,rgba(0,0,0,0.2)_10px)] pointer-events-none z-0"})]},C.id)})})]}),!x&&s.jsx("button",{onClick:()=>b(!0),className:"absolute top-4 left-4 z-10 p-2 bg-ash-black text-ash-light border-2 border-ash-light hover:bg-ash-light hover:text-ash-black shadow-hard",children:s.jsx(Rc,{size:20})}),s.jsx("main",{ref:j,className:"flex-1 overflow-y-auto scroll-smooth relative bg-ash-black",children:s.jsx("div",{className:"max-w-4xl mx-auto min-h-full bg-ash-black border-l-0 md:border-l-2 md:border-r-2 border-ash-dark/50 shadow-2xl relative animate-slide-in",children:_.status==="locked"?s.jsx("div",{className:"h-[80vh] flex flex-col items-center justify-center text-ash-gray p-8 text-center",children:s.jsxs("div",{className:"mb-6 p-6 border-4 border-dashed border-red-900/50 rounded-none bg-red-950/10 w-full max-w-md",children:[s.jsx(Xt,{size:64,className:"text-red-800 mb-4 mx-auto animate-pulse"}),s.jsx("h2",{className:"text-2xl font-black uppercase text-red-700 tracking-widest mb-2",children:f==="en"?"DATA_CORRUPTED":"数据损坏"}),s.jsx("p",{className:"font-mono text-sm text-red-900/70 mb-6",children:"ERR_READ_SECTOR // UNRECOVERABLE"}),s.jsxs("div",{className:"border-t border-red-900/30 pt-4 w-full",children:[s.jsxs("div",{className:"flex items-center justify-center gap-2 text-red-500 font-mono text-xs animate-pulse",children:[s.jsx(lf,{size:14,className:"animate-spin"}),s.jsx("span",{children:f==="en"?"REPAIRING...":f==="zh-TW"?"正在修復中...":"正在修复中..."})]}),s.jsx("div",{className:"w-full bg-red-950/50 h-1 mt-2 overflow-hidden",children:s.jsx("div",{className:"h-full bg-red-800/60 w-1/3 animate-[pulse_1s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"px-8 py-12 lg:px-16 border-b-4 border-double border-ash-gray bg-ash-black text-ash-light mt-12",children:s.jsxs(Ce,{children:[s.jsxs("div",{className:"flex justify-between items-start mb-6 font-mono text-[10px] text-ash-gray uppercase tracking-widest",children:[s.jsxs("span",{children:["SIDE_ARCHIVE // ",_.id]}),s.jsxs("span",{children:["FILE_INDEX: ",N+1]})]}),s.jsx("h1",{className:"text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight",children:E.title}),s.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-ash-gray bg-ash-dark inline-block px-3 py-1 border border-ash-gray",children:[s.jsx(Us,{size:12}),s.jsx("span",{children:_.date})]})]})}),s.jsx("article",{className:"px-8 py-12 lg:px-16 max-w-none text-ash-light font-serif leading-loose tracking-wide",children:k(E.content)}),s.jsx("div",{className:"p-8 md:p-16 border-t-4 border-double border-ash-gray bg-ash-dark",children:s.jsxs("div",{className:"flex justify-between items-center gap-4",children:[s.jsxs("button",{onClick:()=>P(C=>Math.max(0,C-1)),disabled:N===0,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:[s.jsx(Fs,{size:16})," PREV"]}),s.jsxs("button",{onClick:()=>P(C=>Math.min(h.chapters.length-1,C+1)),disabled:N===h.chapters.length-1,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:["NEXT ",s.jsx(Ji,{size:16})]})]})})]})},_.id)})]})},Zf=({isOpen:h,onClose:w,language:u,isLightTheme:f})=>{const[g,N]=M.useState(Er[0].id);if(!h)return null;const P=Er.reduce((j,_)=>(j[_.group]||(j[_.group]=[]),j[_.group].push(_),j),{}),x=Er.find(j=>j.id===g)||Er[0],b=(x==null?void 0:x.translations[u])||(x==null?void 0:x.translations["zh-CN"]);return x?s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[2px] p-4 animate-fade-in",onClick:w,children:s.jsxs("div",{className:`w-full max-w-3xl border-2 shadow-2xl relative overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh] md:h-auto md:max-h-[85vh] ${f?"bg-white border-zinc-300":"bg-ash-black border-ash-dark"}`,onClick:j=>j.stopPropagation(),children:[s.jsx("button",{onClick:w,className:`absolute top-2 right-2 p-2 md:hidden z-50 ${f?"text-zinc-500 hover:text-black":"text-ash-gray hover:text-ash-light"}`,children:s.jsx(mc,{size:24})}),s.jsxs("div",{className:`w-full md:w-64 border-b-2 md:border-b-0 md:border-r-2 p-4 flex flex-col gap-2 overflow-y-auto shrink-0 no-scrollbar max-h-48 md:max-h-full ${f?"bg-zinc-50 border-zinc-200":"bg-ash-dark border-ash-gray/30"}`,children:[s.jsxs("div",{className:`text-[10px] font-mono uppercase mb-4 pb-2 border-b flex items-center gap-2 sticky top-0 z-10 ${f?"text-zinc-500 border-zinc-200 bg-zinc-50":"text-ash-gray border-ash-gray/30 bg-ash-dark"}`,children:[s.jsx(Cc,{size:12})," ROOT/PERSONNEL_DB"]}),Object.entries(P).map(([j,_])=>s.jsxs("div",{className:"mb-2",children:[s.jsxs("div",{className:`flex items-center gap-2 text-[10px] font-bold mb-1 px-1 ${f?"text-zinc-600":"text-ash-light/70"}`,children:[s.jsx("span",{className:"opacity-50",children:"├─"}),s.jsx(_c,{size:10,className:"opacity-50"}),j]}),s.jsx("div",{className:`flex flex-col border-l border-dashed ml-3 pl-2 gap-1 py-1 ${f?"border-zinc-300":"border-ash-gray/20"}`,children:_.map(E=>{const k=E.translations[u].name,C=g===E.id;let A="";return f?A=C?"text-black bg-zinc-200 font-bold pl-3":"text-zinc-500 hover:text-black hover:bg-zinc-100 hover:pl-3":A=C?"text-ash-light bg-ash-gray/20 font-bold pl-3":"text-ash-gray hover:text-ash-light hover:bg-ash-gray/10 hover:pl-3",s.jsxs("button",{onClick:()=>N(E.id),className:`text-left text-xs font-mono py-1 px-2 flex items-center gap-2 transition-all duration-200 relative group/item ${A}`,children:[s.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${E.isLocked?"bg-red-500/50":"bg-green-500/50"} ${C?"animate-pulse":""}`}),s.jsx("span",{className:"truncate",children:k}),E.isLocked&&s.jsx(Cr,{size:8,className:"ml-auto opacity-50"}),C&&s.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-0.5 ${f?"bg-black":"bg-ash-light"}`})]},E.id)})})]},j))]}),s.jsxs("div",{className:`flex-1 overflow-y-auto p-6 md:p-8 relative ${f?"bg-white":"bg-ash-black"}`,children:[s.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-5 pointer-events-none",children:s.jsx(zc,{size:200,strokeWidth:1})}),s.jsx("button",{onClick:w,className:`absolute top-2 right-2 p-2 hidden md:block z-20 ${f?"text-zinc-400 hover:text-zinc-900":"text-ash-gray hover:text-ash-light"}`,children:s.jsx(mc,{size:20})}),x.isLocked?s.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center opacity-80 min-h-[200px]",children:[s.jsxs("div",{className:`border p-8 max-w-xs relative ${f?"border-red-200 bg-red-50":"border-red-900/50 bg-red-950/10"}`,children:[s.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-t border-l border-red-800"}),s.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 border-t border-r border-red-800"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-800"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-800"}),s.jsx(nl,{size:48,className:"text-red-800 mx-auto mb-4 animate-pulse"}),s.jsx("h2",{className:"text-xl font-black text-red-700 uppercase tracking-widest mb-1",children:"ACCESS DENIED"}),s.jsx("p",{className:"text-[10px] font-mono text-red-900 uppercase",children:"Encrypted File // Auth Missing"})]}),s.jsxs("div",{className:`mt-8 font-mono text-xs ${f?"text-zinc-400":"text-ash-gray/50"}`,children:[">"," ID: ",x.id.toUpperCase(),s.jsx("br",{}),">"," STATUS: LOCKED"]})]}):s.jsxs("div",{className:"relative z-10 space-y-6 animate-fade-in pt-4 md:pt-0",children:[s.jsxs("div",{className:`border-b pb-4 ${f?"border-zinc-200":"border-ash-gray/30"}`,children:[s.jsx("h2",{className:`text-2xl md:text-3xl font-black uppercase tracking-tighter mb-1 ${f?"text-zinc-900":"text-ash-light"}`,children:b.name}),s.jsxs("div",{className:`flex flex-wrap items-center gap-2 text-xs font-mono ${f?"text-zinc-500":"text-ash-gray"}`,children:[s.jsx("span",{className:`px-1 border ${f?"bg-zinc-100 border-zinc-300 text-zinc-700":"text-ash-light bg-ash-dark border-ash-gray/50"}`,children:b.enName}),s.jsxs("span",{children:["// ",b.role]}),s.jsxs("span",{className:"ml-auto opacity-50",children:["ID: ",x.id.toUpperCase()]})]})]}),s.jsx("div",{className:"flex flex-wrap gap-2",children:b.tags.map(j=>s.jsxs("span",{className:`px-2 py-1 border rounded-full text-[10px] font-mono ${f?"border-zinc-300 text-zinc-600":"border-ash-gray/50 text-ash-gray"}`,children:["#",j]},j))}),b.quote&&s.jsxs("div",{className:`border-l-2 pl-3 py-1 text-sm italic font-serif ${f?"border-zinc-400 text-zinc-600":"border-ash-light text-ash-light/80"}`,children:['"',b.quote,'"']}),s.jsx("div",{className:`space-y-4 text-sm font-mono leading-relaxed border-t border-dashed pt-4 pb-8 md:pb-0 ${f?"text-zinc-700 border-zinc-200":"text-ash-gray/90 border-ash-gray/30"}`,children:b.description.map((j,_)=>{const E=j.split("**");return s.jsx("div",{className:j.startsWith("•")||j.startsWith("> ")?"pl-4":"",children:E.map((k,C)=>C%2===1?s.jsx("span",{className:`font-bold px-1 ${f?"bg-zinc-200 text-black":"text-ash-light bg-ash-dark/50"}`,children:k},C):k)},_)})})]})]})]})}):null},Yf=({onComplete:h,language:w,volumeId:u})=>{const[f,g]=M.useState(0),N=u==="VOL_MEMORIES";M.useEffect(()=>{const x=setTimeout(()=>g(1),500),b=setTimeout(()=>g(2),2e3),j=setTimeout(()=>g(3),3500),_=setTimeout(h,4e3);return()=>{clearTimeout(x),clearTimeout(b),clearTimeout(j),clearTimeout(_)}},[h]);const P={"zh-CN":{accessing:"访问记忆扇区...",decompressing:"解压碎片数据",syncing:"神经同步中",complete:"重构完成",rain_init:"正在回溯时间轴...",rain_mem:"检索关键节点：[雨]",rain_sync:"VoidOS部署中"},"zh-TW":{accessing:"訪問記憶扇區...",decompressing:"解壓碎片數據",syncing:"神經同步中",complete:"重構完成",rain_init:"正在回溯時間軸...",rain_mem:"檢索關鍵節點：[雨]",rain_sync:"VoidOS部署中"},en:{accessing:"ACCESSING_MEMORY_SECTOR...",decompressing:"DECOMPRESSING_FRAGMENTS",syncing:"NEURAL_SYNC_IN_PROGRESS",complete:"RECONSTRUCTION_COMPLETE",rain_init:"REWINDING_TIMELINE...",rain_mem:"SEARCHING_NODE: [RAIN]",rain_sync:"DEPLOYING_VOID_OS"}}[w];return N?s.jsxs("div",{className:"fixed inset-0 z-[99999] bg-slate-950 text-cyan-100 overflow-hidden flex flex-col items-center justify-center font-mono cursor-none",children:[s.jsx("button",{onClick:h,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-cyan-400/30 text-cyan-400 px-2 py-1 hover:bg-cyan-400 hover:text-slate-900 transition-colors opacity-70 hover:opacity-100 cursor-pointer",children:"[SKIP_MEMORY]"}),s.jsx("div",{className:`absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black transition-opacity duration-1000 ${f>0?"opacity-100":"opacity-0"}`}),s.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-40",children:Array.from({length:40}).map((x,b)=>s.jsx("div",{className:"absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-data-rain",style:{height:`${30+Math.random()*50}px`,left:`${Math.random()*100}%`,top:"-20%",animationDuration:`${.8+Math.random()*1.5}s`,animationDelay:`${Math.random()*2}s`}},b))}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-12",children:[s.jsxs("div",{className:"relative w-48 h-48 flex items-center justify-center",children:[s.jsx("div",{className:`absolute inset-0 border border-cyan-500/20 rounded-full transition-all duration-1000 ${f>=1?"scale-100 opacity-100 rotate-180":"scale-50 opacity-0 rotate-0"}`}),s.jsx("div",{className:`absolute inset-4 border border-cyan-500/30 rounded-full border-dashed transition-all duration-1000 ${f>=1?"scale-100 opacity-100 -rotate-180":"scale-90 opacity-0 rotate-0"}`}),s.jsx("div",{className:`transition-all duration-700 absolute ${f===1?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:s.jsx(ef,{size:48,className:"text-cyan-400"})}),s.jsx("div",{className:`transition-all duration-700 absolute ${f===2?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:s.jsx(Ic,{size:56,className:"text-cyan-200"})}),s.jsx("div",{className:`transition-all duration-700 absolute ${f===3?"scale-125 opacity-100 blur-sm":"scale-50 opacity-0"}`,children:s.jsx(ff,{size:64,className:"text-white fill-white/20"})})]}),s.jsxs("div",{className:"text-center space-y-4 h-16",children:[s.jsxs("div",{className:"text-xl md:text-2xl font-light tracking-[0.3em] text-cyan-100/90 font-serif italic",children:[f===0&&"",f===1&&P.rain_init,f===2&&P.rain_mem,f===3&&P.rain_sync]}),s.jsx("div",{className:"w-32 h-[1px] bg-cyan-900/50 mx-auto overflow-hidden",children:s.jsx("div",{className:"h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 ease-linear",style:{width:`${f/3*100}%`}})})]})]}),s.jsx("div",{className:`absolute inset-0 bg-white pointer-events-none transition-opacity duration-1000 ease-in-out ${f===3?"opacity-100":"opacity-0"}`})]}):s.jsxs("div",{className:"fixed inset-0 z-[99999] bg-ash-black text-ash-light overflow-hidden flex flex-col items-center justify-center font-mono cursor-none",children:[s.jsx("button",{onClick:h,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-blue-400/30 text-blue-400 px-2 py-1 hover:bg-blue-400 hover:text-black transition-colors opacity-70 hover:opacity-100 cursor-pointer",children:"[SKIP_DIVE]"}),s.jsx("div",{className:`absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black transition-opacity duration-1000 ${f>0?"opacity-100":"opacity-0"}`}),s.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-30",children:Array.from({length:20}).map((x,b)=>s.jsx("div",{className:"absolute top-[-100%] text-[10px] text-blue-500/50 writing-vertical-rl animate-data-rain",style:{left:`${Math.random()*100}%`,animationDuration:`${1+Math.random()*2}s`,animationDelay:`${Math.random()*1}s`,fontSize:`${10+Math.random()*8}px`},children:Math.random()>.5?"010101":"A9F3C2"},b))}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-8",children:[s.jsxs("div",{className:"relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center",children:[f>=1&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"absolute inset-0 border border-blue-500/30 rounded-full animate-ping",style:{animationDuration:"2s"}}),s.jsx("div",{className:"absolute inset-0 border border-cyan-400/20 rounded-full animate-ping",style:{animationDuration:"2s",animationDelay:"0.5s"}})]}),s.jsxs("div",{className:`transition-all duration-700 ${f===2?"scale-125 text-white":"scale-100 text-blue-400"}`,children:[f===0&&s.jsx(el,{size:48,className:"animate-pulse"}),f===1&&s.jsx(Qh,{size:48,className:"animate-bounce"}),f>=2&&s.jsx(Sc,{size:64})]})]}),s.jsxs("div",{className:"text-center space-y-2",children:[s.jsxs("div",{className:"text-xl md:text-3xl font-black uppercase tracking-widest text-blue-200",children:[f===0&&P.accessing,f===1&&P.decompressing,f>=2&&P.syncing]}),s.jsx("div",{className:"w-48 md:w-64 h-1 bg-blue-900/50 mx-auto mt-4 overflow-hidden",children:s.jsx("div",{className:"h-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all duration-300 ease-linear",style:{width:`${f/3*100}%`}})}),s.jsxs("div",{className:"text-[10px] text-blue-500/60 font-mono mt-1",children:["SECTOR_MEM // ",f*33,"%"]})]})]}),s.jsx("div",{className:`absolute inset-0 bg-white pointer-events-none transition-opacity duration-500 ${f===3?"opacity-100":"opacity-0"}`})]})},Kf=({language:h,isLightTheme:w,onVolumeChange:u})=>{const[f,g]=M.useState("volumes"),[N,P]=M.useState(null),[x,b]=M.useState(0),[j,_]=M.useState(!1),[E,k]=M.useState(!1),C=te=>{P(te),u(te.id),k(!0)},A=()=>{k(!1),g("chapters")},O=te=>{b(te),g("reader")},L=()=>{P(null),u(null),g("volumes")};return E&&N?s.jsx(Yf,{onComplete:A,language:h,volumeId:N.id}):f==="volumes"?s.jsxs(s.Fragment,{children:[s.jsx(Hf,{volumes:Bf,onSelectVolume:C,onOpenCharModal:()=>_(!0),language:h,isLightTheme:w}),s.jsx(Zf,{isOpen:j,onClose:()=>_(!1),language:h,isLightTheme:w})]}):f==="chapters"&&N?s.jsx($f,{volume:N,onBack:L,onSelectChapter:O,language:h,isLightTheme:w}):f==="reader"&&N?s.jsx(Gf,{volume:N,initialChapterIndex:x,onBack:()=>g("chapters"),language:h,isLightTheme:w}):null},Qf=({onComplete:h,isNormalBoot:w=!1,language:u})=>{const[f,g]=M.useState([]),[N,P]=M.useState("BIOS");return M.useEffect(()=>{const x=u==="zh-CN"?">> 提示：开启暗黑模式阅读体验更佳":u==="zh-TW"?">> 提示：開啟暗黑模式閱讀體驗更佳":">> TIP: DARK MODE RECOMMENDED FOR BEST EXPERIENCE";if(w){const _=["NOVA_BIOS v.3.1.4 (STABLE)","VERIFYING_INTEGRITY... OK","LOADING_USER_PROFILE... FOUND",x,"CONNECTING_TO_ARCHIVE... ESTABLISHED","DECRYPTING_DATA_STREAMS...","WELCOME_BACK_OPERATOR."];let E=0;_.forEach(k=>{E+=150+Math.random()*100,setTimeout(()=>{g(C=>[...C,k])},E)}),setTimeout(h,E+800);return}const b=["NOVA_BIOS v.0.0.1a (LEGACY)","CHECKING_MEM... OK","CHECKING_CPU... OK","LOADING_KERNEL...","MOUNTING_VIRTUAL_DRIVES..."];let j=0;b.forEach((_,E)=>{j+=Math.random()*200,setTimeout(()=>{g(k=>[...k,_])},j)}),setTimeout(()=>{P("ERROR");const _=["CRITICAL_ERROR: SECTOR 0x00F21 CORRUPTED","KERNEL_PANIC: UNEXPECTED_INTERRUPT","REALITY_ANCHOR... LOST","ATTEMPTING_DUMP...","DUMP_FAILED.","SYSTEM_HALTED."];let E=0;_.forEach((k,C)=>{E+=150,setTimeout(()=>{g(A=>[...A,`>> ${k}`])},E)})},j+500),setTimeout(()=>{P("RECOVERY"),g([]);const _=["INITIATING_SAFE_MODE...","BYPASSING_DAMAGED_SECTORS...","LOADING_BACKUP_CONFIG...",x,"RESTORING_USER_INTERFACE...","PLEASE_CONFIGURE_SYSTEM_PARAMETERS."];let E=0;_.forEach(k=>{E+=800,setTimeout(()=>{g(C=>[...C,k])},E)}),setTimeout(h,E+1e3)},j+2500)},[h,w,u]),N==="ERROR"?s.jsxs("div",{className:"h-screen w-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden animate-crash relative z-50",children:[s.jsx("div",{className:"absolute inset-0 bg-red-900/20 z-0"}),s.jsx(Ir,{size:128,className:"text-red-500 mb-8 animate-ping"}),s.jsx("h1",{className:"text-6xl md:text-9xl font-black text-red-500 glitch-text-heavy mb-4","data-text":"FATAL_ERROR",children:"FATAL_ERROR"}),s.jsx("div",{className:"font-mono text-red-400 text-sm md:text-xl text-center max-w-2xl space-y-1",children:f.slice(-6).map((x,b)=>s.jsx("div",{className:"bg-red-950/50 px-2",children:x},b))}),s.jsx("div",{className:"mt-12 w-full max-w-md h-2 bg-red-900 overflow-hidden",children:s.jsx("div",{className:"h-full bg-red-500 w-full animate-[glitch_0.2s_infinite]"})})]}):s.jsxs("div",{className:`h-screen w-screen bg-black text-green-500 p-8 font-mono text-xs md:text-sm overflow-hidden flex flex-col justify-end z-50 ${N==="RECOVERY"?"text-amber-500":""}`,children:[s.jsxs("div",{className:"mb-auto opacity-50 flex items-center gap-4",children:[w?s.jsx(Jh,{className:"text-green-500"}):N==="BIOS"?s.jsx(Ws,{className:"animate-pulse"}):s.jsx(Ac,{className:"animate-spin"}),s.jsxs("span",{children:["NOVA_LABS_TERMINAL_ACCESS // ",w?"NORMAL_BOOT":N]})]}),s.jsxs("div",{className:"space-y-1 w-full max-w-4xl mx-auto",children:[f.map((x,b)=>x.includes("开启暗黑模式")||x.includes("開啟暗黑模式")||x.includes("DARK MODE RECOMMENDED")?s.jsx("div",{className:"animate-fade-in my-6 w-full text-center",children:s.jsx("div",{className:"inline-block px-4 py-2 border-y-2 border-dashed border-amber-500 bg-amber-900/20 text-amber-400 text-sm md:text-lg font-bold tracking-widest animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.3)]",children:x.replace(/^>>\s*/,"")})},b):s.jsxs("div",{className:"animate-fade-in break-words",children:[s.jsxs("span",{className:"opacity-50 mr-2",children:["[",new Date().toLocaleTimeString(),"]"]}),x]},b)),s.jsx("div",{className:"h-4 w-3 bg-current animate-pulse inline-block mt-2"})]}),N==="RECOVERY"&&s.jsx("div",{className:"absolute inset-0 pointer-events-none border-[20px] border-amber-900/20 animate-pulse"})]})},Xf=({onComplete:h,language:w,setLanguage:u,crtEnabled:f,setCrtEnabled:g,isLightTheme:N,setIsLightTheme:P,bgmPlaying:x,setBgmPlaying:b,bgmVolume:j,setBgmVolume:_})=>{const[E,k]=M.useState(0),[C,A]=M.useState(!1),[O,L]=M.useState(0),te={"zh-CN":{title:"系统恢复控制台",subtitle:"检测到非核心设置丢失。请重新配置用户偏好。",langSelect:"选择界面语言 // SELECT_LANGUAGE",visuals:"视觉子系统",audio:"音频子系统",theme:"主题模式",continue:"应用设置",reboot:"重新启动系统",safeMode:"安全模式已激活",back:"返回",rebooting:"正在重启系统...",applying:"应用配置..."},"zh-TW":{title:"系統恢復控制台",subtitle:"檢測到非核心設置丟失。請重新配置用戶偏好。",langSelect:"選擇界面語言 // SELECT_LANGUAGE",visuals:"視覺子系統",audio:"音頻子系統",theme:"主題模式",continue:"應用設置",reboot:"重新啟動系統",safeMode:"安全模式已激活",back:"返回",rebooting:"正在重啟系統...",applying:"應用配置..."},en:{title:"SYSTEM_RECOVERY_CONSOLE",subtitle:"NON-CORE SETTINGS CORRUPTION DETECTED. RECONFIGURE PREFERENCES.",langSelect:"SELECT LANGUAGE",visuals:"VISUAL_SUBSYSTEM",audio:"AUDIO_SUBSYSTEM",theme:"THEME_MODE",continue:"APPLY_SETTINGS",reboot:"REBOOT_SYSTEM",safeMode:"SAFE_MODE_ACTIVE",back:"BACK",rebooting:"SYSTEM_REBOOT_INITIATED...",applying:"WRITING_CONFIG..."}}[w],re=()=>{A(!0);let ie=0;const Q=setInterval(()=>{ie+=Math.random()*5,ie>100&&(ie=100,clearInterval(Q),setTimeout(h,500)),L(ie)},100)};return s.jsxs("div",{className:"min-h-screen bg-zinc-950 text-amber-500 font-mono p-6 flex flex-col items-center justify-center relative overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"}),s.jsx("div",{className:"absolute top-0 left-0 w-full h-2 bg-amber-500/20 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-full h-2 bg-amber-500/20 animate-pulse"}),s.jsxs("div",{className:"max-w-2xl w-full border-2 border-amber-600/50 bg-black/80 backdrop-blur-sm p-8 shadow-[0_0_20px_rgba(245,158,11,0.2)] relative animate-slide-in",children:[s.jsxs("div",{className:"absolute -top-3 left-4 bg-black px-2 text-amber-500 font-bold border border-amber-600/50 flex items-center gap-2",children:[s.jsx(nl,{size:14,className:"animate-pulse"}),te.safeMode]}),s.jsxs("header",{className:"mb-10 text-center border-b border-dashed border-amber-800 pb-6",children:[s.jsx("h1",{className:"text-3xl font-black tracking-tighter mb-2 text-amber-500 glitch-text-heavy","data-text":te.title,children:te.title}),s.jsx("p",{className:"text-amber-700 text-xs md:text-sm uppercase tracking-widest",children:te.subtitle})]}),C?s.jsx("div",{className:"animate-fade-in py-12 flex flex-col items-center justify-center w-full",children:s.jsxs("div",{className:"w-full max-w-md space-y-2 mb-8",children:[s.jsxs("div",{className:"flex justify-between text-xs font-mono uppercase text-amber-500/80",children:[s.jsx("span",{children:te.rebooting}),s.jsxs("span",{children:[Math.floor(O),"%"]})]}),s.jsx("div",{className:"h-4 bg-amber-900/30 border border-amber-800 p-0.5",children:s.jsx("div",{className:"h-full bg-amber-500 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(245,158,11,0.5)]",style:{width:`${O}%`},children:s.jsx("div",{className:"w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_75%,transparent_75%,transparent)] bg-[length:10px_10px]"})})}),s.jsx("div",{className:"text-[10px] text-amber-700 font-mono h-4",children:O<30?"> KILLING_PROCESSES...":O<60?"> FLUSHING_MEMORY_BUFFERS...":O<90?"> WRITING_NEW_CONFIG...":"> STARTING_KERNEL..."})]})}):s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:`transition-opacity duration-500 ${E===0?"opacity-100":"opacity-50 blur-[1px] pointer-events-none"}`,children:[s.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-4 uppercase flex items-center gap-2",children:[s.jsx(Sr,{size:14})," ",te.langSelect]}),s.jsx("div",{className:"grid grid-cols-3 gap-4",children:["zh-CN","zh-TW","en"].map(ie=>s.jsx("button",{onClick:()=>{u(ie),k(1)},className:`py-4 border-2 font-bold text-lg transition-all ${w===ie?"border-amber-500 bg-amber-500/10 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]":"border-amber-900/50 text-amber-800 hover:border-amber-700 hover:text-amber-600"}`,children:ie==="en"?"ENGLISH":ie==="zh-CN"?"简体中文":"繁體中文"},ie))})]}),E>=1&&s.jsxs("div",{className:"animate-fade-in space-y-6",children:[s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-2 uppercase flex items-center gap-2",children:[s.jsx($i,{size:14})," ",te.visuals]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(Zi,{value:f,onChange:g,isSetupMode:!0,language:w}),s.jsx(Ki,{isSetupMode:!0,language:w}),s.jsx(Yi,{value:N,onChange:P,isSetupMode:!0})]})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-2 uppercase flex items-center gap-2",children:[s.jsx(Mc,{size:14})," ",te.audio]}),s.jsx(Gi,{isSetupMode:!0,isPlaying:x,onToggle:()=>b(!x),volume:j,onVolumeChange:_}),s.jsxs("p",{className:"text-[10px] text-amber-800 mt-2 leading-tight",children:["* ",w==="en"?"Audio hardware detected. Enable for immersion.":"检测到音频硬件。建议开启以获得沉浸体验。"]})]})]}),s.jsxs("div",{className:"pt-6 mt-6 border-t border-dashed border-amber-800 flex justify-between items-center",children:[s.jsxs("button",{onClick:()=>k(0),className:"group px-4 py-2 text-amber-800 hover:text-amber-500 font-mono font-bold text-xs uppercase flex items-center gap-2 transition-colors",children:[s.jsx(Fs,{size:16,className:"group-hover:-translate-x-1 transition-transform"}),te.back]}),s.jsx("button",{onClick:re,className:"group relative px-8 py-3 bg-amber-500 text-black font-bold font-mono uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-[4px_4px_0_rgba(70,20,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",children:s.jsxs("span",{className:"flex items-center gap-2",children:[te.reboot," ",s.jsx(Hi,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})})]})]})]}),s.jsx("div",{className:"absolute bottom-2 right-2 text-[10px] text-amber-900 font-mono",children:"ERR_CODE: 0x88492 // RECOVERY_MODE"})]})]})},qf=()=>{const[h,w]=M.useState({x:0,y:0}),[u,f]=M.useState(!1),[g,N]=M.useState(!1),[P,x]=M.useState(!1);return M.useEffect(()=>{const b=window.matchMedia("(pointer: fine)");if((C=>{C.matches?x(!0):x(!1)})(b),b.matches&&x(!0),!b.matches)return;const _=C=>{w({x:C.clientX,y:C.clientY});let A=C.target;if(A&&A.nodeType===Node.TEXT_NODE&&(A=A.parentElement),!A||A.nodeType!==1){f(!1);return}const O=A;try{const te=window.getComputedStyle(O).cursor==="pointer"||O.tagName==="BUTTON"||O.tagName==="A"||O.tagName==="INPUT"||O.tagName==="TEXTAREA"||O.tagName==="SELECT"||O.closest("button")!==null||O.closest("a")!==null;f(te)}catch{f(!1)}},E=()=>N(!0),k=()=>N(!1);return window.addEventListener("mousemove",_),window.addEventListener("mousedown",E),window.addEventListener("mouseup",k),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("mousedown",E),window.removeEventListener("mouseup",k)}},[]),P?s.jsx("div",{className:"fixed top-0 left-0 pointer-events-none z-[99999] text-white mix-blend-difference",style:{transform:`translate3d(${h.x}px, ${h.y}px, 0)`},children:s.jsx("div",{className:`transition-transform duration-100 ease-out ${g?"scale-75":"scale-100"}`,children:u?s.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2",children:s.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:"origin-center animate-[spin_8s_linear_infinite]",children:[s.jsx("path",{d:"M4 4H9M4 4V9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M20 4H15M20 4V9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M4 20H9M4 20V15",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M20 20H15M20 20V15",stroke:"currentColor",strokeWidth:"1.5"})]}),s.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"}),s.jsx("g",{className:"origin-center opacity-50",children:s.jsx("path",{d:"M12 7V9M12 15V17M7 12H9M15 12H17",stroke:"currentColor",strokeWidth:"1"})})]})}):s.jsx("div",{className:"-translate-x-[2px] -translate-y-[2px]",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]",children:s.jsx("path",{d:"M2 2L9 19L12.5 11.5L20 8L2 2Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})})})}):null},Jf="https://music.163.com/song/media/outer/url?id=1831400969.mp3",wc="nova_labs_config_v5",kc={language:"zh-CN",crtEnabled:!0,isLightTheme:!1,setupCompleted:!1,bgmPlaying:!0,bgmVolume:.15},em=()=>{const w=(()=>{try{const R=localStorage.getItem(wc);if(R)return{...kc,...JSON.parse(R)}}catch(R){console.warn("Failed to load config",R)}return kc})(),[u,f]=M.useState("BOOT"),[g,N]=M.useState("home"),[P,x]=M.useState(0),[b,j]=M.useState(null),[_,E]=M.useState(!1),[k,C]=M.useState(w.language),[A,O]=M.useState(w.crtEnabled),[L,te]=M.useState(w.isLightTheme),[re,ie]=M.useState(w.setupCompleted),[Q,U]=M.useState(w.bgmPlaying),[K,$]=M.useState(w.bgmVolume);M.useEffect(()=>{const R={language:k,crtEnabled:A,isLightTheme:L,setupCompleted:re,bgmPlaying:Q,bgmVolume:K};localStorage.setItem(wc,JSON.stringify(R))},[k,A,L,re,Q,K]);const oe=()=>{f(re?"READY":"SETUP")},Ee=()=>{ie(!0),f("READY")},be=R=>{N(R),R!=="sidestories"&&j(null)},De=()=>{E(!0)},J=()=>{N("reader"),E(!1)},ce=R=>{R==="reader"?De():N(R)},se=g==="sidestories"&&b==="VOL_MEMORIES";M.useEffect(()=>{U(!!se)},[se]);const Oe=se?Jf:null,pe=se?"神隠しの真相":"NO_SIGNAL",me=se?"しゃろう":"";return s.jsxs(s.Fragment,{children:[s.jsx(qf,{}),u==="BOOT"&&s.jsx(Qf,{onComplete:oe,isNormalBoot:re,language:k}),u==="SETUP"&&s.jsx(Xf,{onComplete:Ee,language:k,setLanguage:C,crtEnabled:A,setCrtEnabled:O,isLightTheme:L,setIsLightTheme:te,bgmPlaying:Q,setBgmPlaying:U,bgmVolume:K,setBgmVolume:$}),_&&s.jsx(Fc,{onComplete:J,language:k}),u==="READY"&&s.jsxs("div",{className:"flex flex-col lg:flex-row h-screen supports-[height:100dvh]:h-[100dvh] bg-ash-black text-ash-light overflow-hidden font-mono selection:bg-ash-light selection:text-ash-black cursor-none",children:[s.jsx("div",{className:"noise-overlay"}),s.jsx("div",{className:"absolute inset-0 z-0 bg-grid-hard pointer-events-none opacity-50"}),s.jsx(vf,{activeTab:g,setActiveTab:be,language:k,setLanguage:C,crtEnabled:A,setCrtEnabled:O,isLightTheme:L,setIsLightTheme:te,bgmPlaying:Q,setBgmPlaying:U,bgmVolume:K,setBgmVolume:$,audioSrc:Oe,trackTitle:pe,trackComposer:me}),s.jsx("main",{className:"flex-1 h-full overflow-hidden relative z-10 border-l-2 border-ash-dark",children:s.jsxs("div",{className:"h-full overflow-y-auto pb-20 lg:pb-0 bg-ash-black/90 animate-slide-in",children:[g==="home"&&s.jsx(bf,{onNavigate:ce,language:k,setLanguage:C}),g==="characters"&&s.jsx(zf,{language:k}),g==="database"&&s.jsx(Rf,{language:k}),g==="reader"&&s.jsx(Df,{currentIndex:P,onChapterChange:x,language:k,isLightTheme:L}),g==="sidestories"&&s.jsx(Kf,{language:k,isLightTheme:L,onVolumeChange:j})]},g)})]})]})},Uc=document.getElementById("root");if(!Uc)throw new Error("Could not find root element to mount to");const tm=Zh.createRoot(Uc);tm.render(s.jsx(jc.StrictMode,{children:s.jsx(em,{})}));
