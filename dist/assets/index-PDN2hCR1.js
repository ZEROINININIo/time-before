(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))y(b);new MutationObserver(b=>{for(const N of b)if(N.type==="childList")for(const P of N.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&y(P)}).observe(document,{childList:!0,subtree:!0});function u(b){const N={};return b.integrity&&(N.integrity=b.integrity),b.referrerPolicy&&(N.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?N.credentials="include":b.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function y(b){if(b.ep)return;b.ep=!0;const N=u(b);fetch(b.href,N)}})();function kc(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Oa={exports:{}},kr={},Va={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function Mh(){if(qu)return se;qu=1;var f=Symbol.for("react.element"),w=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),P=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),j=Symbol.iterator;function S(h){return h===null||typeof h!="object"?null:(h=j&&h[j]||h["@@iterator"],typeof h=="function"?h:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,L={};function W(h,C,ne){this.props=h,this.context=C,this.refs=L,this.updater=ne||T}W.prototype.isReactComponent={},W.prototype.setState=function(h,C){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,C,"setState")},W.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function le(){}le.prototype=W.prototype;function ge(h,C,ne){this.props=h,this.context=C,this.refs=L,this.updater=ne||T}var X=ge.prototype=new le;X.constructor=ge,A(X,W.prototype),X.isPureReactComponent=!0;var ee=Array.isArray,B=Object.prototype.hasOwnProperty,te={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function he(h,C,ne){var re,ae={},ie=null,xe=null;if(C!=null)for(re in C.ref!==void 0&&(xe=C.ref),C.key!==void 0&&(ie=""+C.key),C)B.call(C,re)&&!G.hasOwnProperty(re)&&(ae[re]=C[re]);var pe=arguments.length-2;if(pe===1)ae.children=ne;else if(1<pe){for(var ke=Array(pe),et=0;et<pe;et++)ke[et]=arguments[et+2];ae.children=ke}if(h&&h.defaultProps)for(re in pe=h.defaultProps,pe)ae[re]===void 0&&(ae[re]=pe[re]);return{$$typeof:f,type:h,key:ie,ref:xe,props:ae,_owner:te.current}}function Ie(h,C){return{$$typeof:f,type:h.type,key:C,ref:h.ref,props:h.props,_owner:h._owner}}function ve(h){return typeof h=="object"&&h!==null&&h.$$typeof===f}function Me(h){var C={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(ne){return C[ne]})}var Y=/\/+/g;function ce(h,C){return typeof h=="object"&&h!==null&&h.key!=null?Me(""+h.key):C.toString(36)}function de(h,C,ne,re,ae){var ie=typeof h;(ie==="undefined"||ie==="boolean")&&(h=null);var xe=!1;if(h===null)xe=!0;else switch(ie){case"string":case"number":xe=!0;break;case"object":switch(h.$$typeof){case f:case w:xe=!0}}if(xe)return xe=h,ae=ae(xe),h=re===""?"."+ce(xe,0):re,ee(ae)?(ne="",h!=null&&(ne=h.replace(Y,"$&/")+"/"),de(ae,C,ne,"",function(et){return et})):ae!=null&&(ve(ae)&&(ae=Ie(ae,ne+(!ae.key||xe&&xe.key===ae.key?"":(""+ae.key).replace(Y,"$&/")+"/")+h)),C.push(ae)),1;if(xe=0,re=re===""?".":re+":",ee(h))for(var pe=0;pe<h.length;pe++){ie=h[pe];var ke=re+ce(ie,pe);xe+=de(ie,C,ne,ke,ae)}else if(ke=S(h),typeof ke=="function")for(h=ke.call(h),pe=0;!(ie=h.next()).done;)ie=ie.value,ke=re+ce(ie,pe++),xe+=de(ie,C,ne,ke,ae);else if(ie==="object")throw C=String(h),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return xe}function Se(h,C,ne){if(h==null)return h;var re=[],ae=0;return de(h,re,"","",function(ie){return C.call(ne,ie,ae++)}),re}function Te(h){if(h._status===-1){var C=h._result;C=C(),C.then(function(ne){(h._status===0||h._status===-1)&&(h._status=1,h._result=ne)},function(ne){(h._status===0||h._status===-1)&&(h._status=2,h._result=ne)}),h._status===-1&&(h._status=0,h._result=C)}if(h._status===1)return h._result.default;throw h._result}var fe={current:null},M={transition:null},Z={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:M,ReactCurrentOwner:te};function O(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:Se,forEach:function(h,C,ne){Se(h,function(){C.apply(this,arguments)},ne)},count:function(h){var C=0;return Se(h,function(){C++}),C},toArray:function(h){return Se(h,function(C){return C})||[]},only:function(h){if(!ve(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},se.Component=W,se.Fragment=u,se.Profiler=b,se.PureComponent=ge,se.StrictMode=y,se.Suspense=x,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,se.act=O,se.cloneElement=function(h,C,ne){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var re=A({},h.props),ae=h.key,ie=h.ref,xe=h._owner;if(C!=null){if(C.ref!==void 0&&(ie=C.ref,xe=te.current),C.key!==void 0&&(ae=""+C.key),h.type&&h.type.defaultProps)var pe=h.type.defaultProps;for(ke in C)B.call(C,ke)&&!G.hasOwnProperty(ke)&&(re[ke]=C[ke]===void 0&&pe!==void 0?pe[ke]:C[ke])}var ke=arguments.length-2;if(ke===1)re.children=ne;else if(1<ke){pe=Array(ke);for(var et=0;et<ke;et++)pe[et]=arguments[et+2];re.children=pe}return{$$typeof:f,type:h.type,key:ae,ref:ie,props:re,_owner:xe}},se.createContext=function(h){return h={$$typeof:P,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:N,_context:h},h.Consumer=h},se.createElement=he,se.createFactory=function(h){var C=he.bind(null,h);return C.type=h,C},se.createRef=function(){return{current:null}},se.forwardRef=function(h){return{$$typeof:m,render:h}},se.isValidElement=ve,se.lazy=function(h){return{$$typeof:k,_payload:{_status:-1,_result:h},_init:Te}},se.memo=function(h,C){return{$$typeof:E,type:h,compare:C===void 0?null:C}},se.startTransition=function(h){var C=M.transition;M.transition={};try{h()}finally{M.transition=C}},se.unstable_act=O,se.useCallback=function(h,C){return fe.current.useCallback(h,C)},se.useContext=function(h){return fe.current.useContext(h)},se.useDebugValue=function(){},se.useDeferredValue=function(h){return fe.current.useDeferredValue(h)},se.useEffect=function(h,C){return fe.current.useEffect(h,C)},se.useId=function(){return fe.current.useId()},se.useImperativeHandle=function(h,C,ne){return fe.current.useImperativeHandle(h,C,ne)},se.useInsertionEffect=function(h,C){return fe.current.useInsertionEffect(h,C)},se.useLayoutEffect=function(h,C){return fe.current.useLayoutEffect(h,C)},se.useMemo=function(h,C){return fe.current.useMemo(h,C)},se.useReducer=function(h,C,ne){return fe.current.useReducer(h,C,ne)},se.useRef=function(h){return fe.current.useRef(h)},se.useState=function(h){return fe.current.useState(h)},se.useSyncExternalStore=function(h,C,ne){return fe.current.useSyncExternalStore(h,C,ne)},se.useTransition=function(){return fe.current.useTransition()},se.version="18.3.1",se}var Xu;function Qa(){return Xu||(Xu=1,Va.exports=Mh()),Va.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function Lh(){if(Ju)return kr;Ju=1;var f=Qa(),w=Symbol.for("react.element"),u=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,b=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function P(m,x,E){var k,j={},S=null,T=null;E!==void 0&&(S=""+E),x.key!==void 0&&(S=""+x.key),x.ref!==void 0&&(T=x.ref);for(k in x)y.call(x,k)&&!N.hasOwnProperty(k)&&(j[k]=x[k]);if(m&&m.defaultProps)for(k in x=m.defaultProps,x)j[k]===void 0&&(j[k]=x[k]);return{$$typeof:w,type:m,key:S,ref:T,props:j,_owner:b.current}}return kr.Fragment=u,kr.jsx=P,kr.jsxs=P,kr}var ec;function Ah(){return ec||(ec=1,Oa.exports=Lh()),Oa.exports}var s=Ah(),D=Qa();const Nc=kc(D);var Vs={},Fa={exports:{}},Je={},Ua={exports:{}},Wa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function Dh(){return tc||(tc=1,(function(f){function w(M,Z){var O=M.length;M.push(Z);e:for(;0<O;){var h=O-1>>>1,C=M[h];if(0<b(C,Z))M[h]=Z,M[O]=C,O=h;else break e}}function u(M){return M.length===0?null:M[0]}function y(M){if(M.length===0)return null;var Z=M[0],O=M.pop();if(O!==Z){M[0]=O;e:for(var h=0,C=M.length,ne=C>>>1;h<ne;){var re=2*(h+1)-1,ae=M[re],ie=re+1,xe=M[ie];if(0>b(ae,O))ie<C&&0>b(xe,ae)?(M[h]=xe,M[ie]=O,h=ie):(M[h]=ae,M[re]=O,h=re);else if(ie<C&&0>b(xe,O))M[h]=xe,M[ie]=O,h=ie;else break e}}return Z}function b(M,Z){var O=M.sortIndex-Z.sortIndex;return O!==0?O:M.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var N=performance;f.unstable_now=function(){return N.now()}}else{var P=Date,m=P.now();f.unstable_now=function(){return P.now()-m}}var x=[],E=[],k=1,j=null,S=3,T=!1,A=!1,L=!1,W=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(M){for(var Z=u(E);Z!==null;){if(Z.callback===null)y(E);else if(Z.startTime<=M)y(E),Z.sortIndex=Z.expirationTime,w(x,Z);else break;Z=u(E)}}function ee(M){if(L=!1,X(M),!A)if(u(x)!==null)A=!0,Te(B);else{var Z=u(E);Z!==null&&fe(ee,Z.startTime-M)}}function B(M,Z){A=!1,L&&(L=!1,le(he),he=-1),T=!0;var O=S;try{for(X(Z),j=u(x);j!==null&&(!(j.expirationTime>Z)||M&&!Me());){var h=j.callback;if(typeof h=="function"){j.callback=null,S=j.priorityLevel;var C=h(j.expirationTime<=Z);Z=f.unstable_now(),typeof C=="function"?j.callback=C:j===u(x)&&y(x),X(Z)}else y(x);j=u(x)}if(j!==null)var ne=!0;else{var re=u(E);re!==null&&fe(ee,re.startTime-Z),ne=!1}return ne}finally{j=null,S=O,T=!1}}var te=!1,G=null,he=-1,Ie=5,ve=-1;function Me(){return!(f.unstable_now()-ve<Ie)}function Y(){if(G!==null){var M=f.unstable_now();ve=M;var Z=!0;try{Z=G(!0,M)}finally{Z?ce():(te=!1,G=null)}}else te=!1}var ce;if(typeof ge=="function")ce=function(){ge(Y)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Se=de.port2;de.port1.onmessage=Y,ce=function(){Se.postMessage(null)}}else ce=function(){W(Y,0)};function Te(M){G=M,te||(te=!0,ce())}function fe(M,Z){he=W(function(){M(f.unstable_now())},Z)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(M){M.callback=null},f.unstable_continueExecution=function(){A||T||(A=!0,Te(B))},f.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<M?Math.floor(1e3/M):5},f.unstable_getCurrentPriorityLevel=function(){return S},f.unstable_getFirstCallbackNode=function(){return u(x)},f.unstable_next=function(M){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var O=S;S=Z;try{return M()}finally{S=O}},f.unstable_pauseExecution=function(){},f.unstable_requestPaint=function(){},f.unstable_runWithPriority=function(M,Z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var O=S;S=M;try{return Z()}finally{S=O}},f.unstable_scheduleCallback=function(M,Z,O){var h=f.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?h+O:h):O=h,M){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=O+C,M={id:k++,callback:Z,priorityLevel:M,startTime:O,expirationTime:C,sortIndex:-1},O>h?(M.sortIndex=O,w(E,M),u(x)===null&&M===u(E)&&(L?(le(he),he=-1):L=!0,fe(ee,O-h))):(M.sortIndex=C,w(x,M),A||T||(A=!0,Te(B))),M},f.unstable_shouldYield=Me,f.unstable_wrapCallback=function(M){var Z=S;return function(){var O=S;S=Z;try{return M.apply(this,arguments)}finally{S=O}}}})(Wa)),Wa}var nc;function Oh(){return nc||(nc=1,Ua.exports=Dh()),Ua.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function Vh(){if(rc)return Je;rc=1;var f=Qa(),w=Oh();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,b={};function N(e,t){P(e,t),P(e+"Capture",t)}function P(e,t){for(b[e]=t,e=0;e<t.length;e++)y.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},j={};function S(e){return x.call(j,e)?!0:x.call(k,e)?!1:E.test(e)?j[e]=!0:(k[e]=!0,!1)}function T(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,t,n,r){if(t===null||typeof t>"u"||T(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){W[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];W[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){W[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){W[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){W[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){W[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){W[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){W[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){W[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function ge(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(le,ge);W[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(le,ge);W[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(le,ge);W[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){W[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),W.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){W[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var l=W.hasOwnProperty(t)?W[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A(t,n,l,r)&&(n=null),r||l===null?S(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ee=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),te=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),Me=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),M=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,h;function C(e){if(h===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var ne=!1;function re(e,t){if(!e||ne)return"";ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var l=v.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,i=a.length-1;1<=o&&0<=i&&l[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(l[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||l[o]!==a[i]){var c=`
`+l[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=i);break}}}finally{ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?C(e):""}function ae(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case te:return"Portal";case Ie:return"Profiler";case he:return"StrictMode";case ce:return"Suspense";case de:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Me:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Se:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=ke(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=et(e))}function no(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ke(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $s(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ro(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function so(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function Gs(e,t){so(e,t);var n=pe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ys(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ys(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ys(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Zs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ao(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Dn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pe(n)}}function oo(e,t){var n=pe(t.value),r=pe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function io(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,co=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function ho(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function fo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ho(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vc=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if(Vc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xs=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,fn=null,pn=null;function po(e){if(e=or(e)){if(typeof el!="function")throw Error(u(280));var t=e.stateNode;t&&(t=es(t),el(e.stateNode,e.type,t))}}function mo(e){fn?pn?pn.push(e):pn=[e]:fn=e}function go(){if(fn){var e=fn,t=pn;if(pn=fn=null,po(e),t)for(e=0;e<t.length;e++)po(t[e])}}function xo(e,t){return e(t)}function yo(){}var tl=!1;function vo(e,t,n){if(tl)return e(t,n);tl=!0;try{return xo(e,t,n)}finally{tl=!1,(fn!==null||pn!==null)&&(yo(),go())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var nl=!1;if(m)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){nl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{nl=!1}function Fc(e,t,n,r,l,a,o,i,c){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(I){this.onError(I)}}var Wn=!1,Rr=null,Pr=!1,rl=null,Uc={onError:function(e){Wn=!0,Rr=e}};function Wc(e,t,n,r,l,a,o,i,c){Wn=!1,Rr=null,Fc.apply(Uc,arguments)}function Bc(e,t,n,r,l,a,o,i,c){if(Wc.apply(this,arguments),Wn){if(Wn){var v=Rr;Wn=!1,Rr=null}else throw Error(u(198));Pr||(Pr=!0,rl=v)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wo(e){if(Xt(e)!==e)throw Error(u(188))}function Hc(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return wo(l),e;if(a===r)return wo(l),t;a=a.sibling}throw Error(u(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,i=l.child;i;){if(i===n){o=!0,n=l,r=a;break}if(i===r){o=!0,r=l,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,r=l;break}if(i===r){o=!0,r=a,n=l;break}i=i.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ko(e){return e=Hc(e),e!==null?No(e):null}function No(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=No(e);if(t!==null)return t;e=e.sibling}return null}var jo=w.unstable_scheduleCallback,Eo=w.unstable_cancelCallback,$c=w.unstable_shouldYield,Gc=w.unstable_requestPaint,ze=w.unstable_now,Yc=w.unstable_getCurrentPriorityLevel,sl=w.unstable_ImmediatePriority,So=w.unstable_UserBlockingPriority,Mr=w.unstable_NormalPriority,Zc=w.unstable_LowPriority,Co=w.unstable_IdlePriority,Lr=null,vt=null;function Qc(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Xc,Kc=Math.log,qc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Kc(e)/qc|0)|0}var Ar=64,Dr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~l;i!==0?r=Bn(i):(a&=o,a!==0&&(r=Bn(a)))}else o=n&~l,o!==0?r=Bn(o):a!==0&&(r=Bn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),l=1<<n,r|=e[n],t&=~l;return r}function Jc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ht(a),i=1<<o,c=l[o];c===-1?((i&n)===0||(i&r)!==0)&&(l[o]=Jc(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _o(){var e=Ar;return Ar<<=1,(Ar&4194240)===0&&(Ar=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ht(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function ol(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var me=0;function Io(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var To,il,zo,Ro,Po,ul=!1,Vr=[],Rt=null,Pt=null,Mt=null,$n=new Map,Gn=new Map,Lt=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mo(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Yn(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=or(t),t!==null&&il(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rd(e,t,n,r,l){switch(t){case"focusin":return Rt=Yn(Rt,e,t,n,r,l),!0;case"dragenter":return Pt=Yn(Pt,e,t,n,r,l),!0;case"mouseover":return Mt=Yn(Mt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return $n.set(a,Yn($n.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Gn.set(a,Yn(Gn.get(a)||null,e,t,n,r,l)),!0}return!1}function Lo(e){var t=Jt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=bo(n),t!==null){e.blockedOn=t,Po(e.priority,function(){zo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xs=r,n.target.dispatchEvent(r),Xs=null}else return t=or(n),t!==null&&il(t),e.blockedOn=n,!1;t.shift()}return!0}function Ao(e,t,n){Fr(e)&&n.delete(t)}function sd(){ul=!1,Rt!==null&&Fr(Rt)&&(Rt=null),Pt!==null&&Fr(Pt)&&(Pt=null),Mt!==null&&Fr(Mt)&&(Mt=null),$n.forEach(Ao),Gn.forEach(Ao)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,sd)))}function Qn(e){function t(l){return Zn(l,e)}if(0<Vr.length){Zn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Zn(Rt,e),Pt!==null&&Zn(Pt,e),Mt!==null&&Zn(Mt,e),$n.forEach(t),Gn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Lo(n),n.blockedOn===null&&Lt.shift()}var mn=ee.ReactCurrentBatchConfig,Ur=!0;function ld(e,t,n,r){var l=me,a=mn.transition;mn.transition=null;try{me=1,cl(e,t,n,r)}finally{me=l,mn.transition=a}}function ad(e,t,n,r){var l=me,a=mn.transition;mn.transition=null;try{me=4,cl(e,t,n,r)}finally{me=l,mn.transition=a}}function cl(e,t,n,r){if(Ur){var l=dl(e,t,n,r);if(l===null)_l(e,t,r,Wr,n),Mo(e,r);else if(rd(l,e,t,n,r))r.stopPropagation();else if(Mo(e,r),t&4&&-1<nd.indexOf(e)){for(;l!==null;){var a=or(l);if(a!==null&&To(a),a=dl(e,t,n,r),a===null&&_l(e,t,r,Wr,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else _l(e,t,r,null,n)}}var Wr=null;function dl(e,t,n,r){if(Wr=null,e=Js(r),e=Jt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function Do(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case sl:return 1;case So:return 4;case Mr:case Zc:return 16;case Co:return 536870912;default:return 16}default:return 16}}var At=null,hl=null,Br=null;function Oo(){if(Br)return Br;var e,t=hl,n=t.length,r,l="value"in At?At.value:At.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return Br=l.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function Vo(){return!1}function tt(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$r:Vo,this.isPropagationStopped=Vo,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=tt(gn),Kn=O({},gn,{view:0,detail:0}),od=tt(Kn),pl,ml,qn,Gr=O({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(pl=e.screenX-qn.screenX,ml=e.screenY-qn.screenY):ml=pl=0,qn=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),Fo=tt(Gr),id=O({},Gr,{dataTransfer:0}),ud=tt(id),cd=O({},Kn,{relatedTarget:0}),gl=tt(cd),dd=O({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=tt(dd),fd=O({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=tt(fd),md=O({},gn,{data:0}),Uo=tt(md),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function xl(){return vd}var bd=O({},Kn,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wd=tt(bd),kd=O({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=tt(kd),Nd=O({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),jd=tt(Nd),Ed=O({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=tt(Ed),Cd=O({},Gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=tt(Cd),Id=[9,13,27,32],yl=m&&"CompositionEvent"in window,Xn=null;m&&"documentMode"in document&&(Xn=document.documentMode);var Td=m&&"TextEvent"in window&&!Xn,Bo=m&&(!yl||Xn&&8<Xn&&11>=Xn),Ho=" ",$o=!1;function Go(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function zd(e,t){switch(e){case"compositionend":return Yo(t);case"keypress":return t.which!==32?null:($o=!0,Ho);case"textInput":return e=t.data,e===Ho&&$o?null:e;default:return null}}function Rd(e,t){if(xn)return e==="compositionend"||!yl&&Go(e,t)?(e=Oo(),Br=hl=At=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bo&&t.locale!=="ko"?null:t.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pd[e.type]:t==="textarea"}function Qo(e,t,n,r){mo(r),t=qr(t,"onChange"),0<t.length&&(n=new fl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,er=null;function Md(e){fi(e,0)}function Yr(e){var t=kn(e);if(no(t))return e}function Ld(e,t){if(e==="change")return t}var Ko=!1;if(m){var vl;if(m){var bl="oninput"in document;if(!bl){var qo=document.createElement("div");qo.setAttribute("oninput","return;"),bl=typeof qo.oninput=="function"}vl=bl}else vl=!1;Ko=vl&&(!document.documentMode||9<document.documentMode)}function Xo(){Jn&&(Jn.detachEvent("onpropertychange",Jo),er=Jn=null)}function Jo(e){if(e.propertyName==="value"&&Yr(er)){var t=[];Qo(t,er,e,Js(e)),vo(Md,t)}}function Ad(e,t,n){e==="focusin"?(Xo(),Jn=t,er=n,Jn.attachEvent("onpropertychange",Jo)):e==="focusout"&&Xo()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yr(er)}function Od(e,t){if(e==="click")return Yr(t)}function Vd(e,t){if(e==="input"||e==="change")return Yr(t)}function Fd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Fd;function tr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!x.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function ei(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ti(e,t){var n=ei(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ei(n)}}function ni(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ni(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ri(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ud(e){var t=ri(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ni(n.ownerDocument.documentElement,n)){if(r!==null&&wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=ti(n,a);var o=ti(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wd=m&&"documentMode"in document&&11>=document.documentMode,yn=null,kl=null,nr=null,Nl=!1;function si(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||yn==null||yn!==Tr(r)||(r=yn,"selectionStart"in r&&wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&tr(nr,r)||(nr=r,r=qr(kl,"onSelect"),0<r.length&&(t=new fl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},jl={},li={};m&&(li=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Qr(e){if(jl[e])return jl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in li)return jl[e]=t[n];return e}var ai=Qr("animationend"),oi=Qr("animationiteration"),ii=Qr("animationstart"),ui=Qr("transitionend"),ci=new Map,di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){ci.set(e,t),N(t,[e])}for(var El=0;El<di.length;El++){var Sl=di[El],Bd=Sl.toLowerCase(),Hd=Sl[0].toUpperCase()+Sl.slice(1);Dt(Bd,"on"+Hd)}Dt(ai,"onAnimationEnd"),Dt(oi,"onAnimationIteration"),Dt(ii,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(ui,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function hi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function fi(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],c=i.instance,v=i.currentTarget;if(i=i.listener,c!==a&&l.isPropagationStopped())break e;hi(l,i,v),a=c}else for(o=0;o<r.length;o++){if(i=r[o],c=i.instance,v=i.currentTarget,i=i.listener,c!==a&&l.isPropagationStopped())break e;hi(l,i,v),a=c}}}if(Pr)throw e=rl,Pr=!1,rl=null,e}function be(e,t){var n=t[Ml];n===void 0&&(n=t[Ml]=new Set);var r=e+"__bubble";n.has(r)||(pi(t,e,2,!1),n.add(r))}function Cl(e,t,n){var r=0;t&&(r|=4),pi(n,e,r,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Kr]){e[Kr]=!0,y.forEach(function(n){n!=="selectionchange"&&($d.has(n)||Cl(n,!1,e),Cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,Cl("selectionchange",!1,t))}}function pi(e,t,n,r){switch(Do(t)){case 1:var l=ld;break;case 4:l=ad;break;default:l=cl}n=l.bind(null,t,n,e),l=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function _l(e,t,n,r,l){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;i!==null;){if(o=Jt(i),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}i=i.parentNode}}r=r.return}vo(function(){var v=a,I=Js(n),z=[];e:{var _=ci.get(e);if(_!==void 0){var V=fl,U=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":V=wd;break;case"focusin":U="focus",V=gl;break;case"focusout":U="blur",V=gl;break;case"beforeblur":case"afterblur":V=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=jd;break;case ai:case oi:case ii:V=hd;break;case ui:V=Sd;break;case"scroll":V=od;break;case"wheel":V=_d;break;case"copy":case"cut":case"paste":V=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Wo}var H=(t&4)!==0,Re=!H&&e==="scroll",p=H?_!==null?_+"Capture":null:_;H=[];for(var d=v,g;d!==null;){g=d;var R=g.stateNode;if(g.tag===5&&R!==null&&(g=R,p!==null&&(R=Fn(d,p),R!=null&&H.push(lr(d,R,g)))),Re)break;d=d.return}0<H.length&&(_=new V(_,U,null,n,I),z.push({event:_,listeners:H}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",_&&n!==Xs&&(U=n.relatedTarget||n.fromElement)&&(Jt(U)||U[jt]))break e;if((V||_)&&(_=I.window===I?I:(_=I.ownerDocument)?_.defaultView||_.parentWindow:window,V?(U=n.relatedTarget||n.toElement,V=v,U=U?Jt(U):null,U!==null&&(Re=Xt(U),U!==Re||U.tag!==5&&U.tag!==6)&&(U=null)):(V=null,U=v),V!==U)){if(H=Fo,R="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(H=Wo,R="onPointerLeave",p="onPointerEnter",d="pointer"),Re=V==null?_:kn(V),g=U==null?_:kn(U),_=new H(R,d+"leave",V,n,I),_.target=Re,_.relatedTarget=g,R=null,Jt(I)===v&&(H=new H(p,d+"enter",U,n,I),H.target=g,H.relatedTarget=Re,R=H),Re=R,V&&U)t:{for(H=V,p=U,d=0,g=H;g;g=bn(g))d++;for(g=0,R=p;R;R=bn(R))g++;for(;0<d-g;)H=bn(H),d--;for(;0<g-d;)p=bn(p),g--;for(;d--;){if(H===p||p!==null&&H===p.alternate)break t;H=bn(H),p=bn(p)}H=null}else H=null;V!==null&&mi(z,_,V,H,!1),U!==null&&Re!==null&&mi(z,Re,U,H,!0)}}e:{if(_=v?kn(v):window,V=_.nodeName&&_.nodeName.toLowerCase(),V==="select"||V==="input"&&_.type==="file")var $=Ld;else if(Zo(_))if(Ko)$=Vd;else{$=Dd;var K=Ad}else(V=_.nodeName)&&V.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&($=Od);if($&&($=$(e,v))){Qo(z,$,n,I);break e}K&&K(e,_,v),e==="focusout"&&(K=_._wrapperState)&&K.controlled&&_.type==="number"&&Ys(_,"number",_.value)}switch(K=v?kn(v):window,e){case"focusin":(Zo(K)||K.contentEditable==="true")&&(yn=K,kl=v,nr=null);break;case"focusout":nr=kl=yn=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,si(z,n,I);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":si(z,n,I)}var q;if(yl)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else xn?Go(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(Bo&&n.locale!=="ko"&&(xn||J!=="onCompositionStart"?J==="onCompositionEnd"&&xn&&(q=Oo()):(At=I,hl="value"in At?At.value:At.textContent,xn=!0)),K=qr(v,J),0<K.length&&(J=new Uo(J,e,null,n,I),z.push({event:J,listeners:K}),q?J.data=q:(q=Yo(n),q!==null&&(J.data=q)))),(q=Td?zd(e,n):Rd(e,n))&&(v=qr(v,"onBeforeInput"),0<v.length&&(I=new Uo("onBeforeInput","beforeinput",null,n,I),z.push({event:I,listeners:v}),I.data=q))}fi(z,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Fn(e,n),a!=null&&r.unshift(lr(e,a,l)),a=Fn(e,t),a!=null&&r.push(lr(e,a,l))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mi(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var i=n,c=i.alternate,v=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&v!==null&&(i=v,l?(c=Fn(n,a),c!=null&&o.unshift(lr(n,c,i))):l||(c=Fn(n,a),c!=null&&o.push(lr(n,c,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function gi(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Yd,"")}function Xr(e,t,n){if(t=gi(t),gi(e)!==t&&n)throw Error(u(425))}function Jr(){}var Il=null,Tl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Zd=typeof clearTimeout=="function"?clearTimeout:void 0,xi=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof xi<"u"?function(e){return xi.resolve(null).then(e).catch(Kd)}:Rl;function Kd(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),bt="__reactFiber$"+wn,ar="__reactProps$"+wn,jt="__reactContainer$"+wn,Ml="__reactEvents$"+wn,qd="__reactListeners$"+wn,Xd="__reactHandles$"+wn;function Jt(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yi(e);e!==null;){if(n=e[bt])return n;e=yi(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[bt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function es(e){return e[ar]||null}var Ll=[],Nn=-1;function Vt(e){return{current:e}}function we(e){0>Nn||(e.current=Ll[Nn],Ll[Nn]=null,Nn--)}function ye(e,t){Nn++,Ll[Nn]=e.current,e.current=t}var Ft={},We=Vt(Ft),Ze=Vt(!1),en=Ft;function jn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Qe(e){return e=e.childContextTypes,e!=null}function ts(){we(Ze),we(We)}function vi(e,t,n){if(We.current!==Ft)throw Error(u(168));ye(We,t),ye(Ze,n)}function bi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(u(108,xe(e)||"Unknown",l));return O({},n,r)}function ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,en=We.current,ye(We,e),ye(Ze,Ze.current),!0}function wi(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=bi(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,we(Ze),we(We),ye(We,e)):we(Ze),ye(Ze,n)}var Et=null,rs=!1,Al=!1;function ki(e){Et===null?Et=[e]:Et.push(e)}function Jd(e){rs=!0,ki(e)}function Ut(){if(!Al&&Et!==null){Al=!0;var e=0,t=me;try{var n=Et;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,rs=!1}catch(l){throw Et!==null&&(Et=Et.slice(e+1)),jo(sl,Ut),l}finally{me=t,Al=!1}}return null}var En=[],Sn=0,ss=null,ls=0,lt=[],at=0,tn=null,St=1,Ct="";function nn(e,t){En[Sn++]=ls,En[Sn++]=ss,ss=e,ls=t}function Ni(e,t,n){lt[at++]=St,lt[at++]=Ct,lt[at++]=tn,tn=e;var r=St;e=Ct;var l=32-ht(r)-1;r&=~(1<<l),n+=1;var a=32-ht(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,St=1<<32-ht(t)+l|n<<l|r,Ct=a+e}else St=1<<a|n<<l|r,Ct=e}function Dl(e){e.return!==null&&(nn(e,1),Ni(e,1,0))}function Ol(e){for(;e===ss;)ss=En[--Sn],En[Sn]=null,ls=En[--Sn],En[Sn]=null;for(;e===tn;)tn=lt[--at],lt[at]=null,Ct=lt[--at],lt[at]=null,St=lt[--at],lt[at]=null}var nt=null,rt=null,Ne=!1,pt=null;function ji(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ei(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,rt=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,rt=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(Ne){var t=rt;if(t){var n=t;if(!Ei(e,t)){if(Vl(e))throw Error(u(418));t=Ot(n.nextSibling);var r=nt;t&&Ei(e,t)?ji(r,n):(e.flags=e.flags&-4097|2,Ne=!1,nt=e)}}else{if(Vl(e))throw Error(u(418));e.flags=e.flags&-4097|2,Ne=!1,nt=e}}}function Si(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function as(e){if(e!==nt)return!1;if(!Ne)return Si(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=rt)){if(Vl(e))throw Ci(),Error(u(418));for(;t;)ji(e,t),t=Ot(t.nextSibling)}if(Si(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=nt?Ot(e.stateNode.nextSibling):null;return!0}function Ci(){for(var e=rt;e;)e=Ot(e.nextSibling)}function Cn(){rt=nt=null,Ne=!1}function Ul(e){pt===null?pt=[e]:pt.push(e)}var eh=ee.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var i=l.refs;o===null?delete i[a]:i[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function os(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _i(e){var t=e._init;return t(e._payload)}function Ii(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=Qt(p,d),p.index=0,p.sibling=null,p}function a(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function i(p,d,g,R){return d===null||d.tag!==6?(d=Ra(g,p.mode,R),d.return=p,d):(d=l(d,g),d.return=p,d)}function c(p,d,g,R){var $=g.type;return $===G?I(p,d,g.props.children,R,g.key):d!==null&&(d.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Te&&_i($)===d.type)?(R=l(d,g.props),R.ref=ir(p,d,g),R.return=p,R):(R=zs(g.type,g.key,g.props,null,p.mode,R),R.ref=ir(p,d,g),R.return=p,R)}function v(p,d,g,R){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Pa(g,p.mode,R),d.return=p,d):(d=l(d,g.children||[]),d.return=p,d)}function I(p,d,g,R,$){return d===null||d.tag!==7?(d=dn(g,p.mode,R,$),d.return=p,d):(d=l(d,g),d.return=p,d)}function z(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ra(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case B:return g=zs(d.type,d.key,d.props,null,p.mode,g),g.ref=ir(p,null,d),g.return=p,g;case te:return d=Pa(d,p.mode,g),d.return=p,d;case Te:var R=d._init;return z(p,R(d._payload),g)}if(Dn(d)||Z(d))return d=dn(d,p.mode,g,null),d.return=p,d;os(p,d)}return null}function _(p,d,g,R){var $=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return $!==null?null:i(p,d,""+g,R);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case B:return g.key===$?c(p,d,g,R):null;case te:return g.key===$?v(p,d,g,R):null;case Te:return $=g._init,_(p,d,$(g._payload),R)}if(Dn(g)||Z(g))return $!==null?null:I(p,d,g,R,null);os(p,g)}return null}function V(p,d,g,R,$){if(typeof R=="string"&&R!==""||typeof R=="number")return p=p.get(g)||null,i(d,p,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case B:return p=p.get(R.key===null?g:R.key)||null,c(d,p,R,$);case te:return p=p.get(R.key===null?g:R.key)||null,v(d,p,R,$);case Te:var K=R._init;return V(p,d,g,K(R._payload),$)}if(Dn(R)||Z(R))return p=p.get(g)||null,I(d,p,R,$,null);os(d,R)}return null}function U(p,d,g,R){for(var $=null,K=null,q=d,J=d=0,Ve=null;q!==null&&J<g.length;J++){q.index>J?(Ve=q,q=null):Ve=q.sibling;var ue=_(p,q,g[J],R);if(ue===null){q===null&&(q=Ve);break}e&&q&&ue.alternate===null&&t(p,q),d=a(ue,d,J),K===null?$=ue:K.sibling=ue,K=ue,q=Ve}if(J===g.length)return n(p,q),Ne&&nn(p,J),$;if(q===null){for(;J<g.length;J++)q=z(p,g[J],R),q!==null&&(d=a(q,d,J),K===null?$=q:K.sibling=q,K=q);return Ne&&nn(p,J),$}for(q=r(p,q);J<g.length;J++)Ve=V(q,p,J,g[J],R),Ve!==null&&(e&&Ve.alternate!==null&&q.delete(Ve.key===null?J:Ve.key),d=a(Ve,d,J),K===null?$=Ve:K.sibling=Ve,K=Ve);return e&&q.forEach(function(Kt){return t(p,Kt)}),Ne&&nn(p,J),$}function H(p,d,g,R){var $=Z(g);if(typeof $!="function")throw Error(u(150));if(g=$.call(g),g==null)throw Error(u(151));for(var K=$=null,q=d,J=d=0,Ve=null,ue=g.next();q!==null&&!ue.done;J++,ue=g.next()){q.index>J?(Ve=q,q=null):Ve=q.sibling;var Kt=_(p,q,ue.value,R);if(Kt===null){q===null&&(q=Ve);break}e&&q&&Kt.alternate===null&&t(p,q),d=a(Kt,d,J),K===null?$=Kt:K.sibling=Kt,K=Kt,q=Ve}if(ue.done)return n(p,q),Ne&&nn(p,J),$;if(q===null){for(;!ue.done;J++,ue=g.next())ue=z(p,ue.value,R),ue!==null&&(d=a(ue,d,J),K===null?$=ue:K.sibling=ue,K=ue);return Ne&&nn(p,J),$}for(q=r(p,q);!ue.done;J++,ue=g.next())ue=V(q,p,J,ue.value,R),ue!==null&&(e&&ue.alternate!==null&&q.delete(ue.key===null?J:ue.key),d=a(ue,d,J),K===null?$=ue:K.sibling=ue,K=ue);return e&&q.forEach(function(Ph){return t(p,Ph)}),Ne&&nn(p,J),$}function Re(p,d,g,R){if(typeof g=="object"&&g!==null&&g.type===G&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case B:e:{for(var $=g.key,K=d;K!==null;){if(K.key===$){if($=g.type,$===G){if(K.tag===7){n(p,K.sibling),d=l(K,g.props.children),d.return=p,p=d;break e}}else if(K.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Te&&_i($)===K.type){n(p,K.sibling),d=l(K,g.props),d.ref=ir(p,K,g),d.return=p,p=d;break e}n(p,K);break}else t(p,K);K=K.sibling}g.type===G?(d=dn(g.props.children,p.mode,R,g.key),d.return=p,p=d):(R=zs(g.type,g.key,g.props,null,p.mode,R),R.ref=ir(p,d,g),R.return=p,p=R)}return o(p);case te:e:{for(K=g.key;d!==null;){if(d.key===K)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=l(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Pa(g,p.mode,R),d.return=p,p=d}return o(p);case Te:return K=g._init,Re(p,d,K(g._payload),R)}if(Dn(g))return U(p,d,g,R);if(Z(g))return H(p,d,g,R);os(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,g),d.return=p,p=d):(n(p,d),d=Ra(g,p.mode,R),d.return=p,p=d),o(p)):n(p,d)}return Re}var _n=Ii(!0),Ti=Ii(!1),is=Vt(null),us=null,In=null,Wl=null;function Bl(){Wl=In=us=null}function Hl(e){var t=is.current;we(is),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){us=e,Wl=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(us===null)throw Error(u(308));In=e,us.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var rn=null;function Gl(e){rn===null?rn=[e]:rn.push(e)}function zi(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Gl(t)):(n.next=l.next,l.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ri(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,_t(e,n)}return l=r.interleaved,l===null?(t.next=t,Gl(r)):(t.next=l.next,l.next=t),r.interleaved=t,_t(e,n)}function cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}function Pi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ds(e,t,n,r){var l=e.updateQueue;Wt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var c=i,v=c.next;c.next=null,o===null?a=v:o.next=v,o=c;var I=e.alternate;I!==null&&(I=I.updateQueue,i=I.lastBaseUpdate,i!==o&&(i===null?I.firstBaseUpdate=v:i.next=v,I.lastBaseUpdate=c))}if(a!==null){var z=l.baseState;o=0,I=v=c=null,i=a;do{var _=i.lane,V=i.eventTime;if((r&_)===_){I!==null&&(I=I.next={eventTime:V,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var U=e,H=i;switch(_=t,V=n,H.tag){case 1:if(U=H.payload,typeof U=="function"){z=U.call(V,z,_);break e}z=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=H.payload,_=typeof U=="function"?U.call(V,z,_):U,_==null)break e;z=O({},z,_);break e;case 2:Wt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,_=l.effects,_===null?l.effects=[i]:_.push(i))}else V={eventTime:V,lane:_,tag:i.tag,payload:i.payload,callback:i.callback,next:null},I===null?(v=I=V,c=z):I=I.next=V,o|=_;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;_=i,i=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);if(I===null&&(c=z),l.baseState=c,l.firstBaseUpdate=v,l.lastBaseUpdate=I,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);an|=o,e.lanes=o,e.memoizedState=z}}function Mi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(u(191,l));l.call(r)}}}var ur={},wt=Vt(ur),cr=Vt(ur),dr=Vt(ur);function sn(e){if(e===ur)throw Error(u(174));return e}function Zl(e,t){switch(ye(dr,t),ye(cr,e),ye(wt,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qs(t,e)}we(wt),ye(wt,t)}function zn(){we(wt),we(cr),we(dr)}function Li(e){sn(dr.current);var t=sn(wt.current),n=Qs(t,e.type);t!==n&&(ye(cr,e),ye(wt,n))}function Ql(e){cr.current===e&&(we(wt),we(cr))}var je=Vt(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function ql(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var fs=ee.ReactCurrentDispatcher,Xl=ee.ReactCurrentBatchConfig,ln=0,Ee=null,Le=null,De=null,ps=!1,hr=!1,fr=0,th=0;function Be(){throw Error(u(321))}function Jl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function ea(e,t,n,r,l,a){if(ln=a,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?lh:ah,e=n(r,l),hr){a=0;do{if(hr=!1,fr=0,25<=a)throw Error(u(301));a+=1,De=Le=null,t.updateQueue=null,fs.current=oh,e=n(r,l)}while(hr)}if(fs.current=xs,t=Le!==null&&Le.next!==null,ln=0,De=Le=Ee=null,ps=!1,t)throw Error(u(300));return e}function ta(){var e=fr!==0;return fr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Ee.memoizedState=De=e:De=De.next=e,De}function it(){if(Le===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=De===null?Ee.memoizedState:De.next;if(t!==null)De=t,Le=e;else{if(e===null)throw Error(u(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},De===null?Ee.memoizedState=De=e:De=De.next=e}return De}function pr(e,t){return typeof t=="function"?t(e):t}function na(e){var t=it(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Le,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var i=o=null,c=null,v=a;do{var I=v.lane;if((ln&I)===I)c!==null&&(c=c.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var z={lane:I,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};c===null?(i=c=z,o=r):c=c.next=z,Ee.lanes|=I,an|=I}v=v.next}while(v!==null&&v!==a);c===null?o=r:c.next=i,ft(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,Ee.lanes|=a,an|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ra(e){var t=it(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);ft(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ai(){}function Di(e,t){var n=Ee,r=it(),l=t(),a=!ft(r.memoizedState,l);if(a&&(r.memoizedState=l,Ke=!0),r=r.queue,sa(Fi.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,mr(9,Vi.bind(null,n,r,l,t),void 0,null),Oe===null)throw Error(u(349));(ln&30)!==0||Oi(n,t,l)}return l}function Oi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vi(e,t,n,r){t.value=n,t.getSnapshot=r,Ui(t)&&Wi(e)}function Fi(e,t,n){return n(function(){Ui(t)&&Wi(e)})}function Ui(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Wi(e){var t=_t(e,1);t!==null&&yt(t,e,1,-1)}function Bi(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,Ee,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hi(){return it().memoizedState}function ms(e,t,n,r){var l=kt();Ee.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function gs(e,t,n,r){var l=it();r=r===void 0?null:r;var a=void 0;if(Le!==null){var o=Le.memoizedState;if(a=o.destroy,r!==null&&Jl(r,o.deps)){l.memoizedState=mr(t,n,a,r);return}}Ee.flags|=e,l.memoizedState=mr(1|t,n,a,r)}function $i(e,t){return ms(8390656,8,e,t)}function sa(e,t){return gs(2048,8,e,t)}function Gi(e,t){return gs(4,2,e,t)}function Yi(e,t){return gs(4,4,e,t)}function Zi(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qi(e,t,n){return n=n!=null?n.concat([e]):null,gs(4,4,Zi.bind(null,t,e),n)}function la(){}function Ki(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qi(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xi(e,t,n){return(ln&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n):(ft(n,t)||(n=_o(),Ee.lanes|=n,an|=n,e.baseState=!0),t)}function nh(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{me=n,Xl.transition=r}}function Ji(){return it().memoizedState}function rh(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eu(e))tu(t,n);else if(n=zi(e,t,n,r),n!==null){var l=Ye();yt(n,e,r,l),nu(n,t,r)}}function sh(e,t,n){var r=Yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eu(e))tu(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,i=a(o,n);if(l.hasEagerState=!0,l.eagerState=i,ft(i,o)){var c=t.interleaved;c===null?(l.next=l,Gl(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=zi(e,t,l,r),n!==null&&(l=Ye(),yt(n,e,r,l),nu(n,t,r))}}function eu(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function tu(e,t){hr=ps=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}var xs={readContext:ot,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},lh={readContext:ot,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:$i,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ms(4194308,4,Zi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return ms(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rh.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Bi,useDebugValue:la,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Bi(!1),t=e[0];return e=nh.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,l=kt();if(Ne){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Oe===null)throw Error(u(349));(ln&30)!==0||Oi(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,$i(Fi.bind(null,r,a,e),[e]),r.flags|=2048,mr(9,Vi.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=kt(),t=Oe.identifierPrefix;if(Ne){var n=Ct,r=St;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=th++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ah={readContext:ot,useCallback:Ki,useContext:ot,useEffect:sa,useImperativeHandle:Qi,useInsertionEffect:Gi,useLayoutEffect:Yi,useMemo:qi,useReducer:na,useRef:Hi,useState:function(){return na(pr)},useDebugValue:la,useDeferredValue:function(e){var t=it();return Xi(t,Le.memoizedState,e)},useTransition:function(){var e=na(pr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ai,useSyncExternalStore:Di,useId:Ji,unstable_isNewReconciler:!1},oh={readContext:ot,useCallback:Ki,useContext:ot,useEffect:sa,useImperativeHandle:Qi,useInsertionEffect:Gi,useLayoutEffect:Yi,useMemo:qi,useReducer:ra,useRef:Hi,useState:function(){return ra(pr)},useDebugValue:la,useDeferredValue:function(e){var t=it();return Le===null?t.memoizedState=e:Xi(t,Le.memoizedState,e)},useTransition:function(){var e=ra(pr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ai,useSyncExternalStore:Di,useId:Ji,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),l=Yt(e),a=It(r,l);a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,l),t!==null&&(yt(t,e,l,r),cs(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),l=Yt(e),a=It(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,l),t!==null&&(yt(t,e,l,r),cs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=Yt(e),l=It(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(yt(t,e,r,n),cs(t,e,r))}};function ru(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(l,a):!0}function su(e,t,n){var r=!1,l=Ft,a=t.contextType;return typeof a=="object"&&a!==null?a=ot(a):(l=Qe(t)?en:We.current,r=t.contextTypes,a=(r=r!=null)?jn(e,l):Ft),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function oa(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Yl(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=ot(a):(a=Qe(t)?en:We.current,l.context=jn(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(aa(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ys.enqueueReplaceState(l,l.state,null),ds(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ih=typeof WeakMap=="function"?WeakMap:Map;function au(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Es||(Es=!0,ja=r),ua(e,t)},n}function ou(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ua(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ua(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function iu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ih;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=kh.bind(null,e,t,n),t.then(e,e))}function uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var uh=ee.ReactCurrentOwner,Ke=!1;function Ge(e,t,n,r){t.child=e===null?Ti(t,null,n,r):_n(t,e.child,n,r)}function du(e,t,n,r,l){n=n.render;var a=t.ref;return Tn(t,l),r=ea(e,t,n,r,a,l),n=ta(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(Ne&&n&&Dl(t),t.flags|=1,Ge(e,t,r,l),t.child)}function hu(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!za(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,fu(e,t,a,r,l)):(e=zs(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&l)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(o,r)&&e.ref===t.ref)return Tt(e,t,l)}return t.flags|=1,e=Qt(a,r),e.ref=t.ref,e.return=t,t.child=e}function fu(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(tr(a,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Tt(e,t,l)}return ca(e,t,n,r,l)}function pu(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Mn,st),st|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Mn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ye(Mn,st),st|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ye(Mn,st),st|=r;return Ge(e,t,l,n),t.child}function mu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ca(e,t,n,r,l){var a=Qe(n)?en:We.current;return a=jn(t,a),Tn(t,l),n=ea(e,t,n,r,a,l),r=ta(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(Ne&&r&&Dl(t),t.flags|=1,Ge(e,t,n,l),t.child)}function gu(e,t,n,r,l){if(Qe(n)){var a=!0;ns(t)}else a=!1;if(Tn(t,l),t.stateNode===null)bs(e,t),su(t,n,r),oa(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var c=o.context,v=n.contextType;typeof v=="object"&&v!==null?v=ot(v):(v=Qe(n)?en:We.current,v=jn(t,v));var I=n.getDerivedStateFromProps,z=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function";z||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||c!==v)&&lu(t,o,r,v),Wt=!1;var _=t.memoizedState;o.state=_,ds(t,r,o,l),c=t.memoizedState,i!==r||_!==c||Ze.current||Wt?(typeof I=="function"&&(aa(t,n,I,r),c=t.memoizedState),(i=Wt||ru(t,n,i,r,_,c,v))?(z||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=v,r=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ri(e,t),i=t.memoizedProps,v=t.type===t.elementType?i:mt(t.type,i),o.props=v,z=t.pendingProps,_=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=ot(c):(c=Qe(n)?en:We.current,c=jn(t,c));var V=n.getDerivedStateFromProps;(I=typeof V=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==z||_!==c)&&lu(t,o,r,c),Wt=!1,_=t.memoizedState,o.state=_,ds(t,r,o,l);var U=t.memoizedState;i!==z||_!==U||Ze.current||Wt?(typeof V=="function"&&(aa(t,n,V,r),U=t.memoizedState),(v=Wt||ru(t,n,v,r,_,U,c)||!1)?(I||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,U,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,U,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=U),o.props=r,o.state=U,o.context=c,r=v):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return da(e,t,n,r,a,l)}function da(e,t,n,r,l,a){mu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&wi(t,n,!1),Tt(e,t,a);r=t.stateNode,uh.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=_n(t,e.child,null,a),t.child=_n(t,null,i,a)):Ge(e,t,i,a),t.memoizedState=r.state,l&&wi(t,n,!0),t.child}function xu(e){var t=e.stateNode;t.pendingContext?vi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vi(e,t.context,!1),Zl(e,t.containerInfo)}function yu(e,t,n,r,l){return Cn(),Ul(l),t.flags|=256,Ge(e,t,n,r),t.child}var ha={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function vu(e,t,n){var r=t.pendingProps,l=je.current,a=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ye(je,l&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Rs(o,r,0,null),e=dn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=fa(n),t.memoizedState=ha,e):pa(t,o));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return ch(e,t,o,r,i,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,i=l.sibling;var c={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Qt(l,c),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=Qt(i,a):(a=dn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?fa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ha,r}return a=e.child,e=a.sibling,r=Qt(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pa(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vs(e,t,n,r){return r!==null&&Ul(r),_n(t,e.child,null,n),e=pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ch(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ia(Error(u(422))),vs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=Rs({mode:"visible",children:r.children},l,0,null),a=dn(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&_n(t,e.child,null,o),t.child.memoizedState=fa(o),t.memoizedState=ha,a);if((t.mode&1)===0)return vs(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(u(419)),r=ia(a,r,void 0),vs(e,t,o,r)}if(i=(o&e.childLanes)!==0,Ke||i){if(r=Oe,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,_t(e,l),yt(r,e,l,-1))}return Ta(),r=ia(Error(u(421))),vs(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Nh.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,rt=Ot(l.nextSibling),nt=t,Ne=!0,pt=null,e!==null&&(lt[at++]=St,lt[at++]=Ct,lt[at++]=tn,St=e.id,Ct=e.overflow,tn=t),t=pa(t,r.children),t.flags|=4096,t)}function bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function ma(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function wu(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(Ge(e,t,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,n,t);else if(e.tag===19)bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(je,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&hs(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ma(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&hs(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ma(t,!0,n,null,a);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dh(e,t,n){switch(t.tag){case 3:xu(t),Cn();break;case 5:Li(t);break;case 1:Qe(t.type)&&ns(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ye(is,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye(je,je.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?vu(e,t,n):(ye(je,je.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);ye(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return wu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,pu(e,t,n)}return Tt(e,t,n)}var ku,ga,Nu,ju;ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ga=function(){},Nu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,sn(wt.current);var a=null;switch(n){case"input":l=$s(e,l),r=$s(e,r),a=[];break;case"select":l=O({},l,{value:void 0}),r=O({},r,{value:void 0}),a=[];break;case"textarea":l=Zs(e,l),r=Zs(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Ks(n,r);var o;n=null;for(v in l)if(!r.hasOwnProperty(v)&&l.hasOwnProperty(v)&&l[v]!=null)if(v==="style"){var i=l[v];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(b.hasOwnProperty(v)?a||(a=[]):(a=a||[]).push(v,null));for(v in r){var c=r[v];if(i=l!=null?l[v]:void 0,r.hasOwnProperty(v)&&c!==i&&(c!=null||i!=null))if(v==="style")if(i){for(o in i)!i.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&i[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(v,n)),n=c;else v==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(v,c)):v==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(v,""+c):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(b.hasOwnProperty(v)?(c!=null&&v==="onScroll"&&be("scroll",e),a||i===c||(a=[])):(a=a||[]).push(v,c))}n&&(a=a||[]).push("style",n);var v=a;(t.updateQueue=v)&&(t.flags|=4)}},ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hh(e,t,n){var r=t.pendingProps;switch(Ol(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Qe(t.type)&&ts(),He(t),null;case 3:return r=t.stateNode,zn(),we(Ze),we(We),ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Ca(pt),pt=null))),ga(e,t),He(t),null;case 5:Ql(t);var l=sn(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(e=sn(wt.current),as(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[bt]=t,r[ar]=a,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(l=0;l<rr.length;l++)be(rr[l],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":ro(r,a),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},be("invalid",r);break;case"textarea":ao(r,a),be("invalid",r)}Ks(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Xr(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Xr(r.textContent,i,e),l=["children",""+i]):b.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":Ir(r),lo(r,a,!0);break;case"textarea":Ir(r),io(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Jr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[bt]=t,e[ar]=r,ku(e,t,!1,!1),t.stateNode=e;e:{switch(o=qs(n,r),n){case"dialog":be("cancel",e),be("close",e),l=r;break;case"iframe":case"object":case"embed":be("load",e),l=r;break;case"video":case"audio":for(l=0;l<rr.length;l++)be(rr[l],e);l=r;break;case"source":be("error",e),l=r;break;case"img":case"image":case"link":be("error",e),be("load",e),l=r;break;case"details":be("toggle",e),l=r;break;case"input":ro(e,r),l=$s(e,r),be("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=O({},r,{value:void 0}),be("invalid",e);break;case"textarea":ao(e,r),l=Zs(e,r),be("invalid",e);break;default:l=r}Ks(n,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?fo(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&co(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&On(e,c):typeof c=="number"&&On(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(b.hasOwnProperty(a)?c!=null&&a==="onScroll"&&be("scroll",e):c!=null&&X(e,a,c,o))}switch(n){case"input":Ir(e),lo(e,r,!1);break;case"textarea":Ir(e),io(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pe(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?hn(e,!!r.multiple,a,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=sn(dr.current),sn(wt.current),as(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(a=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return He(t),null;case 13:if(we(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&rt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ci(),Cn(),t.flags|=98560,a=!1;else if(a=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[bt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),a=!1}else pt!==null&&(Ca(pt),pt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(je.current&1)!==0?Ae===0&&(Ae=3):Ta())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return zn(),ga(e,t),e===null&&sr(t.stateNode.containerInfo),He(t),null;case 10:return Hl(t.type._context),He(t),null;case 17:return Qe(t.type)&&ts(),He(t),null;case 19:if(we(je),a=t.memoizedState,a===null)return He(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)gr(a,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=hs(e),o!==null){for(t.flags|=128,gr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(je,je.current&1|2),t.child}e=e.sibling}a.tail!==null&&ze()>Ln&&(t.flags|=128,r=!0,gr(a,!1),t.lanes=4194304)}else{if(!r)if(e=hs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ne)return He(t),null}else 2*ze()-a.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,gr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ze(),t.sibling=null,n=je.current,ye(je,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Ia(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function fh(e,t){switch(Ol(t),t.tag){case 1:return Qe(t.type)&&ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),we(Ze),we(We),ql(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(we(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(je),null;case 4:return zn(),null;case 10:return Hl(t.type._context),null;case 22:case 23:return Ia(),null;case 24:return null;default:return null}}var ws=!1,$e=!1,ph=typeof WeakSet=="function"?WeakSet:Set,F=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function xa(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Eu=!1;function mh(e,t){if(Il=Ur,e=ri(),wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,c=-1,v=0,I=0,z=e,_=null;t:for(;;){for(var V;z!==n||l!==0&&z.nodeType!==3||(i=o+l),z!==a||r!==0&&z.nodeType!==3||(c=o+r),z.nodeType===3&&(o+=z.nodeValue.length),(V=z.firstChild)!==null;)_=z,z=V;for(;;){if(z===e)break t;if(_===n&&++v===l&&(i=o),_===a&&++I===r&&(c=o),(V=z.nextSibling)!==null)break;z=_,_=z.parentNode}z=V}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},Ur=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var U=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var H=U.memoizedProps,Re=U.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?H:mt(t.type,H),Re);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(R){Ce(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return U=Eu,Eu=!1,U}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&xa(t,n,a)}l=l.next}while(l!==r)}}function ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[ar],delete t[Ml],delete t[qd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cu(e){return e.tag===5||e.tag===3||e.tag===4}function _u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}var Fe=null,gt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Iu(e,t,n),n=n.sibling}function Iu(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Lr,n)}catch{}switch(n.tag){case 5:$e||Pn(n,t);case 6:var r=Fe,l=gt;Fe=null,Ht(e,t,n),Fe=r,gt=l,Fe!==null&&(gt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(gt?(e=Fe,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),Qn(e)):Pl(Fe,n.stateNode));break;case 4:r=Fe,l=gt,Fe=n.stateNode.containerInfo,gt=!0,Ht(e,t,n),Fe=r,gt=l;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&xa(n,t,o),l=l.next}while(l!==r)}Ht(e,t,n);break;case 1:if(!$e&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Ce(n,t,i)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Ht(e,t,n),$e=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ph),t.forEach(function(r){var l=jh.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:Fe=i.stateNode,gt=!1;break e;case 3:Fe=i.stateNode.containerInfo,gt=!0;break e;case 4:Fe=i.stateNode.containerInfo,gt=!0;break e}i=i.return}if(Fe===null)throw Error(u(160));Iu(a,o,l),Fe=null,gt=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(v){Ce(l,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zu(t,e),t=t.sibling}function zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Nt(e),r&4){try{xr(3,e,e.return),ks(3,e)}catch(H){Ce(e,e.return,H)}try{xr(5,e,e.return)}catch(H){Ce(e,e.return,H)}}break;case 1:xt(t,e),Nt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(xt(t,e),Nt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(H){Ce(e,e.return,H)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&so(l,a),qs(i,o);var v=qs(i,a);for(o=0;o<c.length;o+=2){var I=c[o],z=c[o+1];I==="style"?fo(l,z):I==="dangerouslySetInnerHTML"?co(l,z):I==="children"?On(l,z):X(l,I,z,v)}switch(i){case"input":Gs(l,a);break;case"textarea":oo(l,a);break;case"select":var _=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var V=a.value;V!=null?hn(l,!!a.multiple,V,!1):_!==!!a.multiple&&(a.defaultValue!=null?hn(l,!!a.multiple,a.defaultValue,!0):hn(l,!!a.multiple,a.multiple?[]:"",!1))}l[ar]=a}catch(H){Ce(e,e.return,H)}}break;case 6:if(xt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(u(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(H){Ce(e,e.return,H)}}break;case 3:if(xt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(H){Ce(e,e.return,H)}break;case 4:xt(t,e),Nt(e);break;case 13:xt(t,e),Nt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Na=ze())),r&4&&Tu(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?($e=(v=$e)||I,xt(t,e),$e=v):xt(t,e),Nt(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!I&&(e.mode&1)!==0)for(F=e,I=e.child;I!==null;){for(z=F=I;F!==null;){switch(_=F,V=_.child,_.tag){case 0:case 11:case 14:case 15:xr(4,_,_.return);break;case 1:Pn(_,_.return);var U=_.stateNode;if(typeof U.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(H){Ce(r,n,H)}}break;case 5:Pn(_,_.return);break;case 22:if(_.memoizedState!==null){Mu(z);continue}}V!==null?(V.return=_,F=V):Mu(z)}I=I.sibling}e:for(I=null,z=e;;){if(z.tag===5){if(I===null){I=z;try{l=z.stateNode,v?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=z.stateNode,c=z.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=ho("display",o))}catch(H){Ce(e,e.return,H)}}}else if(z.tag===6){if(I===null)try{z.stateNode.nodeValue=v?"":z.memoizedProps}catch(H){Ce(e,e.return,H)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;I===z&&(I=null),z=z.return}I===z&&(I=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:xt(t,e),Nt(e),r&4&&Tu(e);break;case 21:break;default:xt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cu(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var a=_u(e);ba(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,i=_u(e);va(e,i,o);break;default:throw Error(u(161))}}catch(c){Ce(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gh(e,t,n){F=e,Ru(e)}function Ru(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var l=F,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||ws;if(!o){var i=l.alternate,c=i!==null&&i.memoizedState!==null||$e;i=ws;var v=$e;if(ws=o,($e=c)&&!v)for(F=l;F!==null;)o=F,c=o.child,o.tag===22&&o.memoizedState!==null?Lu(l):c!==null?(c.return=o,F=c):Lu(l);for(;a!==null;)F=a,Ru(a),a=a.sibling;F=l,ws=i,$e=v}Pu(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,F=a):Pu(e)}}function Pu(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:$e||ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Mi(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mi(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var I=v.memoizedState;if(I!==null){var z=I.dehydrated;z!==null&&Qn(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}$e||t.flags&512&&ya(t)}catch(_){Ce(t,t.return,_)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Mu(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Lu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ks(4,t)}catch(c){Ce(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){Ce(t,l,c)}}var a=t.return;try{ya(t)}catch(c){Ce(t,a,c)}break;case 5:var o=t.return;try{ya(t)}catch(c){Ce(t,o,c)}}}catch(c){Ce(t,t.return,c)}if(t===e){F=null;break}var i=t.sibling;if(i!==null){i.return=t.return,F=i;break}F=t.return}}var xh=Math.ceil,Ns=ee.ReactCurrentDispatcher,wa=ee.ReactCurrentOwner,ut=ee.ReactCurrentBatchConfig,oe=0,Oe=null,Pe=null,Ue=0,st=0,Mn=Vt(0),Ae=0,yr=null,an=0,js=0,ka=0,vr=null,qe=null,Na=0,Ln=1/0,zt=null,Es=!1,ja=null,$t=null,Ss=!1,Gt=null,Cs=0,br=0,Ea=null,_s=-1,Is=0;function Ye(){return(oe&6)!==0?ze():_s!==-1?_s:_s=ze()}function Yt(e){return(e.mode&1)===0?1:(oe&2)!==0&&Ue!==0?Ue&-Ue:eh.transition!==null?(Is===0&&(Is=_o()),Is):(e=me,e!==0||(e=window.event,e=e===void 0?16:Do(e.type)),e)}function yt(e,t,n,r){if(50<br)throw br=0,Ea=null,Error(u(185));Hn(e,n,r),((oe&2)===0||e!==Oe)&&(e===Oe&&((oe&2)===0&&(js|=n),Ae===4&&Zt(e,Ue)),Xe(e,r),n===1&&oe===0&&(t.mode&1)===0&&(Ln=ze()+500,rs&&Ut()))}function Xe(e,t){var n=e.callbackNode;ed(e,t);var r=Or(e,e===Oe?Ue:0);if(r===0)n!==null&&Eo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eo(n),t===1)e.tag===0?Jd(Du.bind(null,e)):ki(Du.bind(null,e)),Qd(function(){(oe&6)===0&&Ut()}),n=null;else{switch(Io(r)){case 1:n=sl;break;case 4:n=So;break;case 16:n=Mr;break;case 536870912:n=Co;break;default:n=Mr}n=$u(n,Au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Au(e,t){if(_s=-1,Is=0,(oe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Or(e,e===Oe?Ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ts(e,r);else{t=r;var l=oe;oe|=2;var a=Vu();(Oe!==e||Ue!==t)&&(zt=null,Ln=ze()+500,un(e,t));do try{bh();break}catch(i){Ou(e,i)}while(!0);Bl(),Ns.current=a,oe=l,Pe!==null?t=0:(Oe=null,Ue=0,t=Ae)}if(t!==0){if(t===2&&(l=ll(e),l!==0&&(r=l,t=Sa(e,l))),t===1)throw n=yr,un(e,0),Zt(e,r),Xe(e,ze()),n;if(t===6)Zt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!yh(l)&&(t=Ts(e,r),t===2&&(a=ll(e),a!==0&&(r=a,t=Sa(e,a))),t===1))throw n=yr,un(e,0),Zt(e,r),Xe(e,ze()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:cn(e,qe,zt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Na+500-ze(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Rl(cn.bind(null,e,qe,zt),t);break}cn(e,qe,zt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-ht(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xh(r/1960))-r,10<r){e.timeoutHandle=Rl(cn.bind(null,e,qe,zt),r);break}cn(e,qe,zt);break;case 5:cn(e,qe,zt);break;default:throw Error(u(329))}}}return Xe(e,ze()),e.callbackNode===n?Au.bind(null,e):null}function Sa(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=qe,qe=n,t!==null&&Ca(t)),e}function Ca(e){qe===null?qe=e:qe.push.apply(qe,e)}function yh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!ft(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~ka,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Du(e){if((oe&6)!==0)throw Error(u(327));An();var t=Or(e,0);if((t&1)===0)return Xe(e,ze()),null;var n=Ts(e,t);if(e.tag!==0&&n===2){var r=ll(e);r!==0&&(t=r,n=Sa(e,r))}if(n===1)throw n=yr,un(e,0),Zt(e,t),Xe(e,ze()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,qe,zt),Xe(e,ze()),null}function _a(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Ln=ze()+500,rs&&Ut())}}function on(e){Gt!==null&&Gt.tag===0&&(oe&6)===0&&An();var t=oe;oe|=1;var n=ut.transition,r=me;try{if(ut.transition=null,me=1,e)return e()}finally{me=r,ut.transition=n,oe=t,(oe&6)===0&&Ut()}}function Ia(){st=Mn.current,we(Mn)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zd(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Ol(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ts();break;case 3:zn(),we(Ze),we(We),ql();break;case 5:Ql(r);break;case 4:zn();break;case 13:we(je);break;case 19:we(je);break;case 10:Hl(r.type._context);break;case 22:case 23:Ia()}n=n.return}if(Oe=e,Pe=e=Qt(e.current,null),Ue=st=t,Ae=0,yr=null,ka=js=an=0,qe=vr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}rn=null}return e}function Ou(e,t){do{var n=Pe;try{if(Bl(),fs.current=xs,ps){for(var r=Ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ps=!1}if(ln=0,De=Le=Ee=null,hr=!1,fr=0,wa.current=null,n===null||n.return===null){Ae=1,yr=t,Pe=null;break}e:{var a=e,o=n.return,i=n,c=t;if(t=Ue,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=c,I=i,z=I.tag;if((I.mode&1)===0&&(z===0||z===11||z===15)){var _=I.alternate;_?(I.updateQueue=_.updateQueue,I.memoizedState=_.memoizedState,I.lanes=_.lanes):(I.updateQueue=null,I.memoizedState=null)}var V=uu(o);if(V!==null){V.flags&=-257,cu(V,o,i,a,t),V.mode&1&&iu(a,v,t),t=V,c=v;var U=t.updateQueue;if(U===null){var H=new Set;H.add(c),t.updateQueue=H}else U.add(c);break e}else{if((t&1)===0){iu(a,v,t),Ta();break e}c=Error(u(426))}}else if(Ne&&i.mode&1){var Re=uu(o);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),cu(Re,o,i,a,t),Ul(Rn(c,i));break e}}a=c=Rn(c,i),Ae!==4&&(Ae=2),vr===null?vr=[a]:vr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=au(a,c,t);Pi(a,p);break e;case 1:i=c;var d=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($t===null||!$t.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var R=ou(a,i,t);Pi(a,R);break e}}a=a.return}while(a!==null)}Uu(n)}catch($){t=$,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Vu(){var e=Ns.current;return Ns.current=xs,e===null?xs:e}function Ta(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Oe===null||(an&268435455)===0&&(js&268435455)===0||Zt(Oe,Ue)}function Ts(e,t){var n=oe;oe|=2;var r=Vu();(Oe!==e||Ue!==t)&&(zt=null,un(e,t));do try{vh();break}catch(l){Ou(e,l)}while(!0);if(Bl(),oe=n,Ns.current=r,Pe!==null)throw Error(u(261));return Oe=null,Ue=0,Ae}function vh(){for(;Pe!==null;)Fu(Pe)}function bh(){for(;Pe!==null&&!$c();)Fu(Pe)}function Fu(e){var t=Hu(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Uu(e):Pe=t,wa.current=null}function Uu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=hh(n,t,st),n!==null){Pe=n;return}}else{if(n=fh(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Ae===0&&(Ae=5)}function cn(e,t,n){var r=me,l=ut.transition;try{ut.transition=null,me=1,wh(e,t,n,r)}finally{ut.transition=l,me=r}return null}function wh(e,t,n,r){do An();while(Gt!==null);if((oe&6)!==0)throw Error(u(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(td(e,a),e===Oe&&(Pe=Oe=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ss||(Ss=!0,$u(Mr,function(){return An(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=ut.transition,ut.transition=null;var o=me;me=1;var i=oe;oe|=4,wa.current=null,mh(e,n),zu(n,e),Ud(Tl),Ur=!!Il,Tl=Il=null,e.current=n,gh(n),Gc(),oe=i,me=o,ut.transition=a}else e.current=n;if(Ss&&(Ss=!1,Gt=e,Cs=l),a=e.pendingLanes,a===0&&($t=null),Qc(n.stateNode),Xe(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Es)throw Es=!1,e=ja,ja=null,e;return(Cs&1)!==0&&e.tag!==0&&An(),a=e.pendingLanes,(a&1)!==0?e===Ea?br++:(br=0,Ea=e):br=0,Ut(),null}function An(){if(Gt!==null){var e=Io(Cs),t=ut.transition,n=me;try{if(ut.transition=null,me=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Cs=0,(oe&6)!==0)throw Error(u(331));var l=oe;for(oe|=4,F=e.current;F!==null;){var a=F,o=a.child;if((F.flags&16)!==0){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var v=i[c];for(F=v;F!==null;){var I=F;switch(I.tag){case 0:case 11:case 15:xr(8,I,a)}var z=I.child;if(z!==null)z.return=I,F=z;else for(;F!==null;){I=F;var _=I.sibling,V=I.return;if(Su(I),I===v){F=null;break}if(_!==null){_.return=V,F=_;break}F=V}}}var U=a.alternate;if(U!==null){var H=U.child;if(H!==null){U.child=null;do{var Re=H.sibling;H.sibling=null,H=Re}while(H!==null)}}F=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,F=o;else e:for(;F!==null;){if(a=F,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:xr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,F=p;break e}F=a.return}}var d=e.current;for(F=d;F!==null;){o=F;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,F=g;else e:for(o=d;F!==null;){if(i=F,(i.flags&2048)!==0)try{switch(i.tag){case 0:case 11:case 15:ks(9,i)}}catch($){Ce(i,i.return,$)}if(i===o){F=null;break e}var R=i.sibling;if(R!==null){R.return=i.return,F=R;break e}F=i.return}}if(oe=l,Ut(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Lr,e)}catch{}r=!0}return r}finally{me=n,ut.transition=t}}return!1}function Wu(e,t,n){t=Rn(n,t),t=au(e,t,1),e=Bt(e,t,1),t=Ye(),e!==null&&(Hn(e,1,t),Xe(e,t))}function Ce(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Rn(n,e),e=ou(t,e,1),t=Bt(t,e,1),e=Ye(),t!==null&&(Hn(t,1,e),Xe(t,e));break}}t=t.return}}function kh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ue&n)===n&&(Ae===4||Ae===3&&(Ue&130023424)===Ue&&500>ze()-Na?un(e,0):ka|=n),Xe(e,t)}function Bu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Dr,Dr<<=1,(Dr&130023424)===0&&(Dr=4194304)));var n=Ye();e=_t(e,t),e!==null&&(Hn(e,t,n),Xe(e,n))}function Nh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bu(e,n)}function jh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Bu(e,n)}var Hu;Hu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ke=!1,dh(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,Ne&&(t.flags&1048576)!==0&&Ni(t,ls,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bs(e,t),e=t.pendingProps;var l=jn(t,We.current);Tn(t,n),l=ea(null,t,r,e,l,n);var a=ta();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(a=!0,ns(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Yl(t),l.updater=ys,t.stateNode=l,l._reactInternals=t,oa(t,r,e,n),t=da(null,t,r,!0,a,n)):(t.tag=0,Ne&&a&&Dl(t),Ge(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Sh(r),e=mt(r,e),l){case 0:t=ca(null,t,r,e,n);break e;case 1:t=gu(null,t,r,e,n);break e;case 11:t=du(null,t,r,e,n);break e;case 14:t=hu(null,t,r,mt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),ca(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),gu(e,t,r,l,n);case 3:e:{if(xu(t),e===null)throw Error(u(387));r=t.pendingProps,a=t.memoizedState,l=a.element,Ri(e,t),ds(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Rn(Error(u(423)),t),t=yu(e,t,r,n,l);break e}else if(r!==l){l=Rn(Error(u(424)),t),t=yu(e,t,r,n,l);break e}else for(rt=Ot(t.stateNode.containerInfo.firstChild),nt=t,Ne=!0,pt=null,n=Ti(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===l){t=Tt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Li(t),e===null&&Fl(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,zl(r,l)?o=null:a!==null&&zl(r,a)&&(t.flags|=32),mu(e,t),Ge(e,t,o,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return vu(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),du(e,t,r,l,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,ye(is,r._currentValue),r._currentValue=o,a!==null)if(ft(a.value,o)){if(a.children===l.children&&!Ze.current){t=Tt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=It(-1,n&-n),c.tag=2;var v=a.updateQueue;if(v!==null){v=v.shared;var I=v.pending;I===null?c.next=c:(c.next=I.next,I.next=c),v.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),$l(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(u(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),$l(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ge(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Tn(t,n),l=ot(l),r=r(l),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,l=mt(r,t.pendingProps),l=mt(r.type,l),hu(e,t,r,l,n);case 15:return fu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),bs(e,t),t.tag=1,Qe(r)?(e=!0,ns(t)):e=!1,Tn(t,n),su(t,r,l),oa(t,r,l,n),da(null,t,r,!0,e,n);case 19:return wu(e,t,n);case 22:return pu(e,t,n)}throw Error(u(156,t.tag))};function $u(e,t){return jo(e,t)}function Eh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new Eh(e,t,n,r)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sh(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Y)return 11;if(e===Se)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zs(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")za(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case G:return dn(n.children,l,a,t);case he:o=8,l|=8;break;case Ie:return e=ct(12,n,t,l|2),e.elementType=Ie,e.lanes=a,e;case ce:return e=ct(13,n,t,l),e.elementType=ce,e.lanes=a,e;case de:return e=ct(19,n,t,l),e.elementType=de,e.lanes=a,e;case fe:return Rs(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:o=10;break e;case Me:o=9;break e;case Y:o=11;break e;case Se:o=14;break e;case Te:o=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=ct(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function dn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Rs(e,t,n,r){return e=ct(22,e,r,t),e.elementType=fe,e.lanes=n,e.stateNode={isHidden:!1},e}function Ra(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Pa(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ch(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ma(e,t,n,r,l,a,o,i,c){return e=new Ch(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ct(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(a),e}function _h(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gu(e){if(!e)return Ft;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Qe(n))return bi(e,n,t)}return t}function Yu(e,t,n,r,l,a,o,i,c){return e=Ma(n,r,!0,e,l,a,o,i,c),e.context=Gu(null),n=e.current,r=Ye(),l=Yt(n),a=It(r,l),a.callback=t??null,Bt(n,a,l),e.current.lanes=l,Hn(e,l,r),Xe(e,r),e}function Ps(e,t,n,r){var l=t.current,a=Ye(),o=Yt(l);return n=Gu(n),t.context===null?t.context=n:t.pendingContext=n,t=It(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,o),e!==null&&(yt(e,l,o,a),cs(e,l,o)),o}function Ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function La(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function Ih(){return null}var Qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Aa(e){this._internalRoot=e}Ls.prototype.render=Aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ps(e,t,null,null)},Ls.prototype.unmount=Aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Ps(null,e,null,null)}),t[jt]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ro();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Lo(e)}};function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ku(){}function Th(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var v=Ms(o);a.call(v)}}var o=Yu(t,r,e,0,null,!1,!1,"",Ku);return e._reactRootContainer=o,e[jt]=o.current,sr(e.nodeType===8?e.parentNode:e),on(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var v=Ms(c);i.call(v)}}var c=Ma(e,0,!1,null,null,!1,!1,"",Ku);return e._reactRootContainer=c,e[jt]=c.current,sr(e.nodeType===8?e.parentNode:e),on(function(){Ps(t,c,n,r)}),c}function Ds(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var i=l;l=function(){var c=Ms(o);i.call(c)}}Ps(t,o,e,l)}else o=Th(n,t,e,l,r);return Ms(o)}To=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(ol(t,n|1),Xe(t,ze()),(oe&6)===0&&(Ln=ze()+500,Ut()))}break;case 13:on(function(){var r=_t(e,1);if(r!==null){var l=Ye();yt(r,e,1,l)}}),La(e,1)}},il=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Ye();yt(t,e,134217728,n)}La(e,134217728)}},zo=function(e){if(e.tag===13){var t=Yt(e),n=_t(e,t);if(n!==null){var r=Ye();yt(n,e,t,r)}La(e,t)}},Ro=function(){return me},Po=function(e,t){var n=me;try{return me=e,t()}finally{me=n}},el=function(e,t,n){switch(t){case"input":if(Gs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=es(r);if(!l)throw Error(u(90));no(r),Gs(r,l)}}}break;case"textarea":oo(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}},xo=_a,yo=on;var zh={usingClientEntryPoint:!1,Events:[or,kn,es,mo,go,_a]},wr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rh={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ko(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Ih,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{Lr=Os.inject(Rh),vt=Os}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zh,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Da(t))throw Error(u(200));return _h(e,t,null,n)},Je.createRoot=function(e,t){if(!Da(e))throw Error(u(299));var n=!1,r="",l=Qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ma(e,1,!1,null,null,n,!1,r,l),e[jt]=t.current,sr(e.nodeType===8?e.parentNode:e),new Aa(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ko(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return on(e)},Je.hydrate=function(e,t,n){if(!As(t))throw Error(u(200));return Ds(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Da(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=Qu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Yu(t,null,e,1,n??null,l,!1,a,o),e[jt]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ls(t)},Je.render=function(e,t,n){if(!As(t))throw Error(u(200));return Ds(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!As(e))throw Error(u(40));return e._reactRootContainer?(on(function(){Ds(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1},Je.unstable_batchedUpdates=_a,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!As(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Ds(e,t,n,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var sc;function Fh(){if(sc)return Fa.exports;sc=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(w){console.error(w)}}return f(),Fa.exports=Vh(),Fa.exports}var lc;function Uh(){if(lc)return Vs;lc=1;var f=Fh();return Vs.createRoot=f.createRoot,Vs.hydrateRoot=f.hydrateRoot,Vs}var Wh=Uh();const Bh=kc(Wh);var Hh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $h=f=>f.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q=(f,w)=>{const u=D.forwardRef(({color:y="currentColor",size:b=24,strokeWidth:N=2,absoluteStrokeWidth:P,children:m,...x},E)=>D.createElement("svg",{ref:E,...Hh,width:b,height:b,stroke:y,strokeWidth:P?Number(N)*24/Number(b):N,className:`lucide lucide-${$h(f)}`,...x},[...w.map(([k,j])=>D.createElement(k,j)),...(Array.isArray(m)?m:[m])||[]]));return u.displayName=`${f}`,u},qt=Q("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),Cr=Q("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ka=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Ba=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Gh=Q("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]),jc=Q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Yh=Q("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]),Zh=Q("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),Ec=Q("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),Qh=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),qa=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Ws=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Xa=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Hs=Q("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),Ja=Q("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Kh=Q("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Bs=Q("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Sc=Q("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),Cc=Q("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),_c=Q("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),Sr=Q("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),qh=Q("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]),Ic=Q("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]),Xh=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Jh=Q("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),eo=Q("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),Tc=Q("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),ef=Q("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),_r=Q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),ac=Q("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]),oc=Q("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]),Ha=Q("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),ic=Q("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),tf=Q("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),nf=Q("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]),rf=Q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),uc=Q("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),sf=Q("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),to=Q("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),lf=Q("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),af=Q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),of=Q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),cc=Q("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),uf=Q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),zc=Q("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),dc=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Rc=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),cf=Q("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]),hc=Q("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]),Pc=Q("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),Mc=Q("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]),df=Q("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]),fc=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Lc=Q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),hf="https://music.163.com/song/media/outer/url?id=1831400969.mp3",Fs={title:"神隠しの真相",composer:"しゃろう"},Us=5;let Nr=null;const pc=()=>(Nr||(Nr=new Audio(hf),Nr.loop=!0,Nr.volume=0),Nr),$a=({isSetupMode:f=!1,isPlaying:w,onToggle:u,volume:y,onVolumeChange:b})=>{const N=D.useRef(y);D.useEffect(()=>{N.current=y},[y]);const P=x=>{const E=N.current;if(!x.duration){x.volume=E;return}const k=x.currentTime,S=x.duration-k;let T=1;k<Us?T=k/Us:S<Us&&(T=S/Us),T=Math.max(0,Math.min(1,T)),x.volume=E*T};D.useEffect(()=>{const x=pc(),E=()=>{P(x)},k=j=>{console.warn("BackgroundMusic: Audio resource failed to load.",j)};if(x.addEventListener("timeupdate",E),x.addEventListener("error",k),w){if(x.paused){const j=x.play();j!==void 0&&j.catch(S=>{console.error("Audio playback failed:",S)})}}else x.paused||x.pause();return P(x),()=>{x.removeEventListener("timeupdate",E),x.removeEventListener("error",k)}},[w]),D.useEffect(()=>{const x=pc();P(x)},[y]);const m=x=>{b(parseFloat(x.target.value))};return f?s.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[s.jsxs("button",{onClick:u,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${w?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(tf,{size:14})," AUDIO_SYSTEM"]}),w?s.jsx(qt,{size:14,className:"animate-pulse"}):s.jsx("span",{children:"OFF"})]}),w&&s.jsxs("div",{className:"flex flex-col gap-2 px-2 py-1 animate-fade-in",children:[s.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-amber-700/80",children:[s.jsxs("span",{className:"truncate max-w-[60%] flex items-center gap-1",children:[s.jsx("span",{className:"w-1 h-1 bg-amber-600 rounded-full animate-pulse"}),Fs.title]}),s.jsx("span",{className:"opacity-70",children:Fs.composer})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(hc,{size:10,className:"text-amber-700/70"}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:y,onChange:m,className:"flex-1 h-1 bg-amber-900/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-amber-600 [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-125 transition-all"}),s.jsxs("span",{className:"text-[9px] font-mono text-amber-700/70 w-6 text-right",children:[Math.round(y*100),"%"]})]})]})]}):s.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[s.jsxs("button",{onClick:u,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
            ${w?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"relative",children:w?s.jsx(Kh,{size:16,className:"animate-spin"}):s.jsx(Pc,{size:16})}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"BGM"})]}),s.jsx("div",{className:"flex items-center gap-2",children:w?s.jsxs("div",{className:"flex gap-0.5 items-end h-3",children:[s.jsx("div",{className:"w-0.5 bg-current animate-[bounce_1s_infinite] h-2"}),s.jsx("div",{className:"w-0.5 bg-current animate-[bounce_1.2s_infinite] h-3"}),s.jsx("div",{className:"w-0.5 bg-current animate-[bounce_0.8s_infinite] h-1"})]}):s.jsx("span",{className:"text-[10px] font-mono font-bold",children:"OFF"})})]}),w&&s.jsxs("div",{className:"flex flex-col gap-2 px-3 py-2 border-l-2 border-ash-light bg-ash-dark/30 animate-fade-in",children:[s.jsxs("div",{className:"flex justify-between items-center text-[9px] font-mono text-ash-gray",children:[s.jsx("span",{className:"truncate max-w-[60%]",children:Fs.title}),s.jsx("span",{className:"opacity-50 truncate max-w-[35%] text-right",children:Fs.composer})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(hc,{size:10,className:"text-ash-gray"}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:y,onChange:m,className:"flex-1 h-1 bg-ash-black border border-ash-gray/30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-ash-light [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ash-black hover:[&::-webkit-slider-thumb]:bg-ash-white transition-all"}),s.jsxs("span",{className:"text-[9px] font-mono text-ash-gray w-6 text-right",children:[Math.round(y*100),"%"]})]})]})]})},Ga=({value:f,onChange:w,isSetupMode:u=!1,language:y})=>{D.useEffect(()=>{f!==void 0&&(f?document.body.classList.add("crt-enabled"):document.body.classList.remove("crt-enabled"))},[f]);const b=()=>{w&&f!==void 0&&w(!f)},N=()=>y?y==="zh-CN"?"(推荐启用)":y==="zh-TW"?"(推薦啟用)":"(RECOMMENDED)":"";return u?s.jsxs("button",{onClick:b,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${f?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(Ha,{size:14}),"CRT_EFFECTS",s.jsx("span",{className:"opacity-60 text-[10px] scale-90 origin-left",children:N()})]}),f?s.jsx(qa,{size:14}):s.jsx("span",{children:"OFF"})]}):s.jsxs("button",{onClick:b,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${f?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(Ha,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"CRT FX"})]}),s.jsx("div",{className:"flex items-center gap-2",children:f?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-[10px] font-mono font-bold",children:"ON"}),s.jsx(Lc,{size:10,className:"fill-current animate-pulse"})]}):s.jsx("span",{className:"text-[10px] font-mono font-bold",children:"OFF"})})]})},Ya=({value:f,onChange:w,isSetupMode:u=!1})=>{D.useEffect(()=>{f!==void 0&&(f?document.body.classList.add("light-theme"):document.body.classList.remove("light-theme"))},[f]);const y=()=>{w&&f!==void 0&&w(!f)};return u?s.jsxs("button",{onClick:y,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${f?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[f?s.jsx(cc,{size:14}):s.jsx(ic,{size:14}),"THEME: ",f?"LIGHT":"DARK"]}),s.jsx(qa,{size:14,className:!f&&!w?"hidden":""})," "]}):s.jsxs("button",{onClick:y,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${f?"bg-ash-black text-ash-light border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[f?s.jsx(cc,{size:16}):s.jsx(ic,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Theme"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:f?"LIGHT":"DARK"})]})},Za=({isSetupMode:f=!1,language:w})=>{const[u,y]=D.useState(!1);D.useEffect(()=>{const P=()=>{y(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",P),()=>document.removeEventListener("fullscreenchange",P)},[]);const b=async()=>{try{document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch(P){console.error("Error toggling fullscreen:",P)}},N=()=>w?w==="zh-CN"?"(推荐)":w==="zh-TW"?"(推薦)":"(REC)":"";return f?s.jsxs("button",{onClick:b,className:`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${u?"border-amber-500 bg-amber-500/20 text-amber-400":"border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600"}`,children:[s.jsxs("span",{className:"flex items-center gap-2",children:[u?s.jsx(oc,{size:14}):s.jsx(ac,{size:14}),"FULLSCREEN",s.jsx("span",{className:"opacity-60 text-[10px] scale-90 origin-left",children:N()})]}),u?s.jsx(qa,{size:14}):s.jsx("span",{children:"OFF"})]}):s.jsxs("button",{onClick:b,className:`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
        ${u?"bg-ash-light text-ash-black border-ash-light":"bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[u?s.jsx(oc,{size:16}):s.jsx(ac,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Display"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:u?"FULL":"WIN"})]})},ff=({activeTab:f,setActiveTab:w,language:u,setLanguage:y,crtEnabled:b,setCrtEnabled:N,isLightTheme:P,setIsLightTheme:m,bgmPlaying:x,setBgmPlaying:E,bgmVolume:k,setBgmVolume:j})=>{const[S,T]=D.useState(!1),L={"zh-CN":{home:"根控制台",characters:"人员档案",database:"数据资料",reader:"阅读终端",sidestories:"支线档案",config:"系统设置",mobileHome:"主页",mobileChars:"人员",mobileData:"数据",mobileRead:"阅读",mobileSide:"支线"},"zh-TW":{home:"根控制台",characters:"人員檔案",database:"數據資料",reader:"閱讀終端",sidestories:"支線檔案",config:"系統設置",mobileHome:"主頁",mobileChars:"人員",mobileData:"數據",mobileRead:"閱讀",mobileSide:"支線"},en:{home:"ROOT_MENU",characters:"PERSONNEL",database:"DATA_BANK",reader:"READ_MODE",sidestories:"FRAGMENTS",config:"SYS_CONFIG",mobileHome:"ROOT",mobileChars:"TEAM",mobileData:"DATA",mobileRead:"READ",mobileSide:"SIDE"}}[u],W=[{id:"home",label:L.home,mobileLabel:L.mobileHome,icon:Jh},{id:"characters",label:L.characters,mobileLabel:L.mobileChars,icon:Rc},{id:"database",label:L.database,mobileLabel:L.mobileData,icon:Ja},{id:"reader",label:L.reader,mobileLabel:L.mobileRead,icon:Yh},{id:"sidestories",label:L.sidestories,mobileLabel:L.mobileSide,icon:_c}],le=()=>{y(u==="zh-CN"?"zh-TW":u==="zh-TW"?"en":"zh-CN")},ge=()=>u==="zh-CN"?"简":u==="zh-TW"?"繁":"EN";return s.jsxs(s.Fragment,{children:[s.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 lg:static lg:w-72 lg:h-full bg-ash-black border-t-2 lg:border-t-0 lg:border-r-2 border-ash-light/20 z-50 flex lg:flex-col justify-between p-2 lg:p-6 shadow-2xl transition-colors duration-300 lg:overflow-y-auto no-scrollbar",children:[s.jsxs("div",{className:"hidden lg:block mb-8 border-b-2 border-ash-light/20 pb-6 shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsxs("div",{className:"relative w-12 h-12 bg-ash-black border border-ash-gray/50 p-1 shadow-hard group",children:[s.jsx("img",{src:"https://free.picui.cn/free/2025/12/08/6936e856897d6.png",alt:"Nova Labs",className:"w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"}),s.jsx("div",{className:"absolute -top-1 -right-1 w-2 h-2 bg-ash-light"}),s.jsx("div",{className:"absolute -bottom-1 -left-1 w-2 h-2 bg-ash-light"})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-ash-light animate-pulse"}),s.jsx("div",{className:"w-2 h-2 bg-ash-gray"})]})]}),s.jsxs("h1",{className:"text-4xl font-black text-ash-light tracking-tighter uppercase mb-1",style:{textShadow:"2px 2px 0 #333"},children:["NOVA",s.jsx("br",{}),"LABS"]}),s.jsx("div",{className:"text-[10px] text-ash-gray font-mono bg-ash-dark p-1 inline-block border border-ash-gray",children:"ARCHIVE_SYS // TL.1.6-V"})]}),s.jsxs("div",{className:"flex lg:flex-col justify-between lg:justify-start w-full gap-1 lg:gap-3 lg:mb-auto shrink-0",children:[W.map((X,ee)=>{const B=X.id==="reader"||X.id==="sidestories",te=ee===3;return s.jsxs(Nc.Fragment,{children:[te&&s.jsx("div",{className:"hidden lg:block h-px bg-ash-gray/30 w-full my-2"}),s.jsxs("button",{onClick:()=>{w(X.id),T(!1)},className:`flex-1 lg:flex-none flex flex-col lg:flex-row items-center justify-center lg:justify-start py-2 lg:px-4 lg:py-4 border-2 transition-all duration-300 group relative overflow-hidden ${f===X.id?"bg-ash-light text-ash-black border-ash-light shadow-hard":B?"bg-ash-dark/40 text-ash-light border-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light shadow-sm":"bg-ash-black text-ash-gray border-ash-gray/30 hover:border-ash-light hover:text-ash-light"}`,children:[f===X.id&&s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),B&&f!==X.id&&s.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-ash-gray/50 group-hover:bg-ash-black transition-colors hidden lg:block"}),s.jsx(X.icon,{size:18,className:`mb-1 lg:mb-0 lg:mr-3 z-10 transition-transform ${B&&f!==X.id?"group-hover:scale-110":""}`,strokeWidth:2.5}),s.jsx("span",{className:`hidden lg:inline text-sm font-bold tracking-widest z-10 whitespace-normal text-left ${B?"text-base uppercase":""}`,children:X.label}),s.jsx("span",{className:"lg:hidden text-[10px] font-bold tracking-widest z-10 whitespace-nowrap",children:X.mobileLabel}),B&&s.jsx("div",{className:"absolute top-1 right-1 lg:top-1/2 lg:-translate-y-1/2 lg:right-2 w-1.5 h-1.5 bg-current opacity-50 rounded-full lg:rounded-none lg:w-1 lg:h-3"})]})]},X.id)}),s.jsxs("button",{onClick:()=>T(!S),className:`flex-1 lg:hidden flex flex-col items-center justify-center py-2 border-2 transition-all duration-300 group relative overflow-hidden ${S?"bg-ash-light text-ash-black border-ash-light shadow-hard":"bg-ash-black text-ash-gray border-ash-gray/30 hover:border-ash-light hover:text-ash-light"}`,children:[S&&s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),s.jsx(uc,{size:18,className:"mb-1 z-10",strokeWidth:2.5}),s.jsx("span",{className:"text-[10px] font-bold tracking-widest z-10",children:"CFG"})]})]}),s.jsxs("div",{className:"hidden lg:flex flex-col gap-2 mt-8 border-t-2 border-dashed border-ash-gray/30 pt-6 shrink-0",children:[s.jsx("div",{className:"text-[10px] text-ash-gray font-mono mb-1 uppercase px-1",children:"[SYSTEM_CONFIG]"}),s.jsxs("button",{onClick:le,className:"flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light group",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(Sr,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Language"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:ge()})]}),s.jsx($a,{isPlaying:x,onToggle:()=>E(!x),volume:k,onVolumeChange:j}),s.jsx(Ga,{value:b,onChange:N,language:u}),s.jsx(Za,{language:u}),s.jsx(Ya,{value:P,onChange:m})]}),s.jsxs("div",{className:"hidden lg:block mt-6 pt-4 border-t-2 border-dashed border-ash-gray/30 text-ash-gray text-[10px] font-mono leading-tight shrink-0",children:[s.jsx("p",{children:"> ENCRYPTION: STATIC"}),s.jsx("div",{className:"w-full bg-ash-dark h-2 border border-ash-gray mb-1",children:s.jsx("div",{className:"bg-ash-light h-full w-[98%] animate-pulse"})}),s.jsx("p",{children:"> PING: 0.04ms"})]})]}),S&&s.jsx("div",{className:"fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-[2px]",onClick:()=>T(!1),children:s.jsxs("div",{className:"absolute bottom-[90px] left-4 right-4 bg-ash-black border-2 border-ash-light p-5 shadow-hard animate-slide-in z-50 max-h-[70vh] overflow-y-auto",onClick:X=>X.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4 border-b-2 border-ash-gray/30 pb-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(uc,{size:16,className:"text-ash-light"}),s.jsx("span",{className:"text-xs font-bold text-ash-light font-mono uppercase tracking-wider",children:L.config})]}),s.jsx("div",{className:"text-[10px] text-ash-gray font-mono",children:"V.3.1"})]}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsxs("button",{onClick:le,className:"flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard bg-ash-black text-ash-gray border-ash-gray/50 active:border-ash-light active:text-ash-light group",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(Sr,{size:16}),s.jsx("span",{className:"text-[10px] font-mono font-bold uppercase",children:"Language"})]}),s.jsx("span",{className:"text-[10px] font-mono font-bold",children:ge()})]}),s.jsx($a,{isPlaying:x,onToggle:()=>E(!x),volume:k,onVolumeChange:j}),s.jsx(Ga,{value:b,onChange:N,language:u}),s.jsx(Za,{language:u}),s.jsx(Ya,{value:P,onChange:m})]}),s.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-ash-gray/30 text-[10px] text-ash-gray font-mono text-center",children:"NOVA_LABS_ARCHIVE // SYSTEM_OVERLAY"})]})})]})},_e=({children:f,className:w="",delay:u=0})=>{const[y,b]=D.useState(!1),N=D.useRef(null);return D.useEffect(()=>{const P=new IntersectionObserver(([m])=>{m.isIntersecting&&(b(!0),P.disconnect())},{threshold:.1,rootMargin:"50px"});return N.current&&P.observe(N.current),()=>P.disconnect()},[]),s.jsx("div",{ref:N,style:{transitionDelay:`${u}ms`},className:`transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) transform ${y?"opacity-100 translate-y-0":"opacity-0 translate-y-8"} ${w}`,children:f})},jr=[{id:"welcome_back",speaker:"PYO",text:{"zh-CN":"啊，很高兴看见您回来！","zh-TW":"啊，很高興看見您回來！",en:"Ah, glad to see you back!"}},{id:"long_time_void",speaker:"PYO",text:{"zh-CN":"void...我真的很久没见过你了","zh-TW":"void...我真的很久沒見過你了",en:"void... I really haven't seen you in a long time."}},{id:"hello",speaker:"PYO",text:{"zh-CN":"你好！！","zh-TW":"你好！！",en:"Hello!!"}},{id:"are_you_there",speaker:"PYO",text:{"zh-CN":"在吗？void？","zh-TW":"在嗎？void？",en:"Are you there? void?"}},{id:"across_screen",speaker:"PYO",text:{"zh-CN":"屏幕对面的...该不会是...","zh-TW":"螢幕對面的...該不會是...",en:"The one across the screen... could it be..."}},{id:"time_sector",speaker:"PYO",text:{"zh-CN":"我们现在是在什么时间区段啊？？","zh-TW":"我們現在是在什麼時間區段啊？？",en:"What time sector are we in right now??"}},{id:"still_alive",speaker:"PYO",text:{"zh-CN":"我们，还活着吗？...","zh-TW":"我們，還活著嗎？...",en:"Are we... still alive?..."}}],pf=({onNavigate:f,language:w,setLanguage:u})=>{const[y,b]=D.useState(""),[N,P]=D.useState(!0),[m,x]=D.useState(()=>Math.floor(Math.random()*jr.length)),E=()=>{x(S=>{let T=Math.floor(Math.random()*jr.length);return T===S&&jr.length>1&&(T=Math.floor(Math.random()*jr.length)),T})},k=D.useMemo(()=>{const S=jr[m],T=S.text[w];return w==="zh-CN"?`> 正在建立加密连接...
> 发送者: ${S.speaker}

“${T}”

> 讯号待机中。`:w==="zh-TW"?`> 正在建立加密連接...
> 發送者: ${S.speaker}

「${T}」

> 訊號待機中。`:`> ESTABLISHING ENCRYPTED CONNECTION...
> SENDER: ${S.speaker}

"${T}"

> SIGNAL STANDBY.`},[w,m]);D.useEffect(()=>{let S=0;const T=30;b("");const A=setInterval(()=>{S<k.length?(b(L=>L+k.charAt(S)),S++):clearInterval(A)},T);return()=>clearInterval(A)},[w,k]),D.useEffect(()=>{const S=setInterval(()=>P(T=>!T),500);return()=>clearInterval(S)},[]);const j={"zh-CN":{main_archive:"主线档案",main_desc:"进入核心故事线，访问已解密的记忆节点。",side_archive:"支线扇区",side_desc:"访问碎片化数据，探索未知的时间分支。",enter:"执行协议",access:"访问扇区",status:"状态：正常"},"zh-TW":{main_archive:"主線檔案",main_desc:"進入核心故事線，訪問已解密的記憶節點。",side_archive:"支線扇區",side_desc:"訪問碎片化數據，探索未知的時間分支。",enter:"執行協議",access:"訪問扇區",status:"狀態：正常"},en:{main_archive:"MAIN_ARCHIVE",main_desc:"Access core storyline. View decrypted memory nodes.",side_archive:"MEMORY_SECTOR",side_desc:"Access fragmented data. Explore unknown time branches.",enter:"EXECUTE",access:"ACCESS",status:"STATUS: OK"}}[w];return s.jsxs("div",{className:"flex flex-col min-h-full bg-halftone text-ash-light font-mono relative",children:[s.jsxs("div",{className:"flex-1 flex flex-col p-4 md:p-8 pb-32 lg:pb-12",children:[s.jsx("div",{className:"w-full max-w-7xl mx-auto mb-6 shrink-0",children:s.jsxs(_e,{className:"w-full bg-ash-black border-2 border-ash-gray p-4 md:p-6 shadow-hard relative min-h-[160px] md:min-h-[180px] flex flex-col",children:[s.jsx("div",{className:"absolute top-2 right-2 flex gap-2",children:s.jsxs("button",{onClick:E,className:"flex items-center gap-1 text-[10px] font-bold bg-ash-gray/20 text-ash-gray border border-ash-gray/50 px-2 hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all group",children:[s.jsx(rf,{size:10,className:"group-hover:animate-spin"}),"REROUTE"]})}),s.jsxs("h2",{className:"text-xs font-bold text-ash-gray mb-4 flex items-center gap-2 uppercase border-b border-dashed border-ash-gray/30 pb-2",children:[s.jsx(zc,{size:14})," ROOT_CONSOLE // V.3.2.1"]}),s.jsxs("div",{className:"flex-1 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-ash-gray",children:[y,N&&s.jsx("span",{className:"inline-block w-2 h-4 bg-ash-light ml-1 align-middle"})]})]})}),s.jsxs("div",{className:"flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8",children:[s.jsx(_e,{delay:200,className:"flex-1",children:s.jsxs("button",{onClick:()=>f("reader"),className:"w-full h-full min-h-[240px] bg-ash-black border-2 border-ash-gray hover:border-ash-light hover:shadow-hard transition-all duration-300 group relative flex flex-col overflow-hidden text-left",children:[s.jsxs("div",{className:"w-full p-4 border-b-2 border-ash-gray bg-ash-dark/30 flex justify-between items-center group-hover:bg-ash-light group-hover:text-ash-black transition-colors",children:[s.jsxs("div",{className:"flex items-center gap-2 font-bold font-mono",children:[s.jsx(jc,{size:18}),s.jsx("span",{children:"ARCHIVE_CORE"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full animate-pulse"}),s.jsx("div",{className:"w-2 h-2 bg-ash-gray/50 rounded-full"})]})]}),s.jsxs("div",{className:"p-6 md:p-10 flex-1 flex flex-col justify-center relative z-10",children:[s.jsx("h3",{className:"text-3xl md:text-5xl font-black uppercase text-ash-light mb-4 group-hover:scale-105 transition-transform origin-left",children:j.main_archive}),s.jsx("p",{className:"text-ash-gray text-xs md:text-sm max-w-sm mb-8 font-mono leading-relaxed",children:j.main_desc}),s.jsxs("div",{className:"mt-auto flex items-center gap-2 text-ash-light font-bold text-sm uppercase group-hover:translate-x-2 transition-transform",children:[j.enter," ",s.jsx(Ba,{size:16})]})]}),s.jsx("div",{className:"absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity",children:s.jsx(_r,{size:180,strokeWidth:.5})}),s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-10 pointer-events-none"})]})}),s.jsx(_e,{delay:300,className:"flex-1",children:s.jsxs("button",{onClick:()=>f("sidestories"),className:"w-full h-full min-h-[240px] bg-slate-950 border-2 border-slate-700 hover:border-cyan-400 hover:shadow-[4px_4px_0_theme(colors.cyan.400)] transition-all duration-300 group relative flex flex-col overflow-hidden text-left",children:[s.jsxs("div",{className:"w-full p-4 border-b-2 border-slate-700 bg-slate-900/50 flex justify-between items-center group-hover:bg-cyan-400 group-hover:text-black transition-colors",children:[s.jsxs("div",{className:"flex items-center gap-2 font-bold font-mono text-cyan-500 group-hover:text-black",children:[s.jsx(_c,{size:18}),s.jsx("span",{children:"MEMORY_FRAGS"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full animate-pulse"}),s.jsx("div",{className:"w-2 h-2 bg-slate-700 rounded-full"})]})]}),s.jsxs("div",{className:"p-6 md:p-10 flex-1 flex flex-col justify-center relative z-10",children:[s.jsx("h3",{className:"text-3xl md:text-5xl font-black uppercase text-cyan-100 mb-4 group-hover:text-cyan-300 group-hover:scale-105 transition-transform origin-left drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]",children:j.side_archive}),s.jsx("p",{className:"text-slate-400 text-xs md:text-sm max-w-sm mb-8 font-mono leading-relaxed group-hover:text-cyan-200/80",children:j.side_desc}),s.jsxs("div",{className:"mt-auto flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase group-hover:text-cyan-300 group-hover:translate-x-2 transition-transform",children:[j.access," ",s.jsx(Ba,{size:16})]})]}),s.jsx("div",{className:"absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity text-cyan-500",children:s.jsx(Ja,{size:200,strokeWidth:.5})}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,transparent_20%,rgba(6,182,212,0.05)_50%,transparent_80%)] bg-[length:100%_4px] animate-scanline pointer-events-none opacity-30"})]})})]})]}),s.jsxs("div",{className:"absolute bottom-20 lg:bottom-0 left-0 right-0 bg-ash-black border-t-2 border-ash-gray p-2 text-[10px] text-ash-gray font-mono flex justify-between items-center select-none z-20",children:[s.jsxs("div",{className:"flex items-center gap-2 md:gap-4 px-2 overflow-hidden shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[s.jsx(Mc,{size:10}),s.jsx("span",{className:"hidden md:inline",children:"CONNECTION:"}),s.jsx("span",{className:"text-ash-light",children:"SECURE"})]}),s.jsx("div",{className:"h-3 w-px bg-ash-gray/30 shrink-0"}),s.jsx("div",{className:"truncate",children:"ID: VOID-XPSDVN"}),s.jsx("div",{className:"h-3 w-px bg-ash-gray/30 hidden md:block shrink-0"}),s.jsx("div",{className:"hidden md:block shrink-0",children:"LOC: SECTOR_0"})]}),s.jsxs("div",{className:"flex items-center gap-2 px-2 shrink-0",children:[s.jsx("span",{className:"uppercase text-ash-gray/50 hidden md:inline",children:"Input_Lang:"}),s.jsx("div",{className:"flex gap-1 font-bold",children:["zh-CN","zh-TW","en"].map(S=>s.jsx("button",{onClick:()=>u(S),className:`px-1.5 py-0.5 border transition-colors ${w===S?"bg-ash-light text-ash-black border-ash-light":"bg-transparent text-ash-gray border-ash-gray/50 hover:text-ash-light"}`,children:S==="en"?"EN":S==="zh-CN"?"CN":"TW"},S))})]})]})]})},mf=[{id:"point",alias:"Z.Point",themeColor:"text-zinc-400",stats:{strength:5,intelligence:8,agility:9,mental:7,resonance:10},translations:{"zh-CN":{name:"零点",role:"前线",tags:["活力","搞事","直觉系"],quote:"只要跑得够快，麻烦就追不上我！……大概？",description:["团队的主心骨，性格活泼外向，具有极高的独立性。","脑袋里经常装着小坏心思，容易吃苦头，但恢复得也快。","和芷漓、泽洛都很亲密，是从小到大一直陪伴着的伙伴。","对公行动较保守，但对重要任务有自己的盘算，且拥有三人中最强的隐形实力。"]},"zh-TW":{name:"零點",role:"前線",tags:["活力","搞事","直覺系"],quote:"只要跑得夠快，麻煩就追不上我！……大概？",description:["團隊的主心骨，性格活潑外向，具有極高的獨立性。","腦袋裡經常裝著小壞心思，容易吃苦頭，但恢復得也快。","和芷漓、澤洛都很親密，是從小到大一直陪伴著的夥伴。","對公行動較保守，但對重要任務有自己的盤算，且擁有三人中原最強的隱形實力。"]},en:{name:"Point",role:"Frontline",tags:["Energetic","Troublemaker","Intuitive"],quote:"As long as I run fast enough, trouble can't catch me! ...Probably?",description:["The backbone of the team with a lively and outgoing personality, possessing high independence.","Often has mischievous ideas in her head and gets into trouble easily, but recovers just as quickly.","Very close with Zeri and Zelo; they have been companions since childhood.","Acts conservatively in public operations but has her own calculations for important missions, possessing the strongest hidden strength among the three."]}}},{id:"zeri",alias:"Z.Zeri / Liz",themeColor:"text-pink-400",stats:{strength:2,intelligence:11,agility:5,mental:2,resonance:5},translations:{"zh-CN":{name:"芷漓",role:"科研",tags:["冷静"],quote:"数据不会说谎，但解读数据的人经常犯蠢。",description:["安静、沉稳、理性，典型的冷系科研型人格。","生活规律、家里整洁，有点小洁癖气质。对工作极度认真，脑子里永远是研究与任务。","表面淡定，实际上偶尔会耍小心机（例如诱骗零点加班）。","嘴硬心软，非常关心队友，尤其是零点。低调害羞，不喜欢别人叫她“小名”，也不喜欢穿可爱的衣服。"]},"zh-TW":{name:"芷漓",role:"科研",tags:["冷靜"],quote:"數據不會說謊，但解讀數據的人經常犯蠢。",description:["安靜、沉穩、理性，典型的冷系科研型人格。","生活規律、家裡整潔，有點小潔癖氣質。對工作極度認真，腦子裡永遠是研究與任務。","表面淡定，實際上偶爾會耍小心機（例如誘騙零點加班）。","嘴硬心軟，非常關心隊友，尤其是零點。低調害羞，不喜歡別人叫她「小名」，也不喜歡穿可愛的衣服。"]},en:{name:"Zeri",role:"Research",tags:["Calm","Rational"],quote:"Data doesn't lie, but the people interpreting it often make stupid mistakes.",description:["Quiet, steady, and rational. A typical cool-headed researcher personality.","Lives a disciplined life with a tidy home, showing signs of mild mysophobia. Extremely serious about work; her mind is always on research and missions.","Appears calm on the surface but occasionally plays little tricks (like tricking Point into working overtime).","Sharp-tongued but soft-hearted, she cares deeply about her teammates, especially Point. Low-key and shy, she dislikes being called by her 'nickname' or wearing cute clothes."]}}},{id:"zelo",alias:"Z.Zelo",themeColor:"text-blue-400",stats:{strength:4,intelligence:5,agility:6,mental:10,resonance:5},translations:{"zh-CN":{name:"泽洛",role:"支援",tags:["元气","乐观主义"],quote:"不管发生什么，我都会全力支持计划哦~",description:["性格外向活泼，对任何事情都充满希望。","有时像小孩般贪玩，对工作不太上心，经常充当实验辅助员。","有自己的需求时并不强迫他人帮助。","对零点和芷漓都很了解，是亲人般的存在。可爱系角色，不管哪方面都透露着少女感。"]},"zh-TW":{name:"澤洛",role:"支援",tags:["元氣","樂觀主義"],quote:"不管發生什麼，我都會全力支持計畫哦~",description:["性格外向活潑，對任何事情都充滿希望。","有時像小孩般貪玩，對工作不太上心，經常充當實驗輔助員。","有自己的需求時並不強迫他人幫助。","對零點和芷漓都很了解，是親人般的存在。可愛系角色，不管哪方面都透露著少女感。"]},en:{name:"Zelo",role:"Support",tags:["Genki","Optimist"],quote:"No matter what happens, I'll support the plan with all I've got~",description:["Outgoing and lively, full of hope for everything.","Sometimes playful like a child and not very focused on work, often acting as an experimental assistant.","Does not force others to help when she has her own needs.","Understands Point and Zeri very well and is like family to them. A cute character who exudes a girlish charm in every aspect."]}}},{id:"void",alias:"Void",themeColor:"text-white",stats:{strength:0,intelligence:10,agility:10,mental:0,resonance:10},translations:{"zh-CN":{name:"零空",role:"？？？",tags:["神秘","高维","BUG"],quote:"干涉。",description:["来自“空界”的高位存在，和三人关系特殊。","拥有无限的生命和特殊的记忆系统。实力非常强，能轻松完成现实上任何难以做到的事情。","看似散漫，但在关键节点非常可靠。","对零点比较宠，会帮忙但也让零点不要经常召唤它（会损害零点）。"]},"zh-TW":{name:"零空",role:"？？？",tags:["神秘","高維","BUG"],quote:"干涉。",description:["來自「空界」的高位存在，和三人關係特殊。","擁有無限的生命和特殊的記憶系統。實力非常強，能輕鬆完成現實上任何難以做到的事情。","看似散漫，但在關鍵節點非常可靠。","對零點比較寵，會幫忙但也讓零點不要經常召喚它（會損害零點）。"]},en:{name:"Void",role:"???",tags:["Mysterious","High-Dim","BUG"],quote:"Interference.",description:["A higher-dimensional existence from the 'Void', sharing a special relationship with the trio.","Possesses infinite life and a special memory system. Extremely powerful, easily accomplishing things impossible in reality.","Appears laid-back but is very reliable at critical moments.","He is protective of Point, helping her but also warning her not to summon him too often (as it damages her)."]}}}],gf=[{id:"universe-structure",category:"World",translations:{"zh-CN":{title:"多层宇宙结构",content:["**主宇 (Main Universe):** 稳定的平行现实，是 Nova Labs 主要工作、探索和控制的目标。某些极其重要的设施如「主宇控制台」（被称为“远时”）存在于其中。主宇需要通过“时空泡”来切入或进入。","**现世 (Current World):** 三人（零点、泽洛、芷漓）和其他人平日生活与工作的世界。科技高度发达，拥有时域装置、穿梭轨、量子属性等技术。在现实层中，相对主宇的“量子生物”是会受伤甚至死亡的。","**空界 (Void):** 一个超越现世、主宇的未知空间层级。只有 Void 在此地，并能与三人保持联系。空界能提供主宇无法获得的“情报”与观测能力。"]},"zh-TW":{title:"多層宇宙結構",content:["**主宇 (Main Universe):** 穩定的平行現實，是 Nova Labs 主要工作、探索和控制的目標。某些極其重要的設施如「主宇控制台」（被稱為「遠時」）存在於其中。主宇需要通過「時空泡」來切入或進入。","**現世 (Current World):** 三人（零點、澤洛、芷漓）和其他人平日生活與工作的世界。科技高度發達，擁有時域裝置、穿梭軌、量子屬性等技術。在現實層中，相對主宇的「量子生物」是會受傷甚至死亡的。","**空界 (Void):** 一個超越現世、主宇的未知空間層級。只有 Void 在此地，並能與三人保持聯繫。空界能提供主宇無法獲得的「情報」與觀測能力。"]},en:{title:"Multiverse Structure",content:["**Main Universe:** A stable parallel reality and the primary target for Nova Labs' work, exploration, and control. Crucial facilities like the 'Main Universe Console' (known as 'Far Time') exist within it. Access requires a 'Time-Space Bubble'.","**Current World:** The world where the trio (Point, Zelo, Zeri) and others live and work. Highly technologically advanced, featuring Time Domain devices, Shuttle Rails, and Quantum Attributes. In this reality layer, 'Quantum Beings' (relative to the Main Universe) can be injured or even killed.","**Void:** An unknown spatial layer transcending both the Current World and the Main Universe. Only Void exists here and maintains contact with the trio. The Void provides 'intelligence' and observational capabilities unattainable in the Main Universe."]}}},{id:"time-sector",category:"World",translations:{"zh-CN":{title:"时域特殊节区",content:["**区域概述:** 类似现实世界的公交站点/市区。","**职能:** 三人的工作地点。","**设施:** 这里有 Nova labs 的全部主分设施。"]},"zh-TW":{title:"時域特殊節區",content:["**區域概述:** 類似現實世界的公車站點/市區。","**職能:** 三人的工作地點。","**設施:** 這裡有 Nova labs 的全部主分設施。"]},en:{title:"Time Domain Special Sector",content:["**Overview:** Similar to a bus station or downtown area in the real world.","**Function:** The workplace of the trio.","**Facilities:** Contains all main branch facilities of Nova Labs."]}}},{id:"nova-labs",category:"Organization",translations:{"zh-CN":{title:"Nova Labs 组织结构",content:["**表层:** 对外是“科技联合研究会”的一部分，处理与公众相关的研究事务。","**核心层:** 隐藏在表层之后，负责“时域移转计划”。核心人员包括 X.泽洛、X.零点、X.芷漓、R.艾安等。","**使命:** 负责与“主宇”进行现实连通，探索并获得主宇的完全控制权。为即将毁灭的世界和文明寻找下一个绿洲（生存后路）。","**特殊地位:** 是唯一能执行此类任务的团队，不受外界任何组织的束缚。但也因权力过大，表层人员在谋划现世领导层的政变。"]},"zh-TW":{title:"Nova Labs 組織結構",content:["**表層:** 對外是「科技聯合研究會」的一部分，處理與公眾相關的研究事務。","**核心層:** 隱藏在表層之後，負責「時域移轉計畫」。核心人員包括 X.澤洛、X.零點、X.芷漓、R.艾安等。","**使命:** 負責與「主宇」進行現實連通，探索並獲得主宇的完全控制權。為即將毀滅的世界和文明尋找下一個綠洲（生存後路）。","**特殊地位:** 是唯一能執行此類任務的團隊，不受外界任何組織的束縛。但也因權力過大，表層人員在謀劃現世領導層的政變。"]},en:{title:"Nova Labs Structure",content:["**Surface Layer:** Publicly part of the 'United Technology Research Association', handling public-facing research affairs.","**Core Layer:** Hidden behind the surface, responsible for the 'Time Domain Transfer Project'. Core members include X.Zelo, X.Point, X.Zeri, R.Ian, etc.","**Mission:** Responsible for connecting reality with the 'Main Universe', exploring, and gaining full control of it. Finding the next oasis (survival route) for the impending destruction of the world and civilization.","**Special Status:** The only team capable of executing such missions, unbound by any external organization. However, due to excessive power, surface personnel are plotting a coup against the Current World leadership."]}}},{id:"nova-labs-logo",category:"Organization",translations:{"zh-CN":{title:"Nova Labs 组织标识",content:["**通常版 (Standard Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**整合版 (Integrated Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]},"zh-TW":{title:"Nova Labs 組織標識",content:["**通常版 (Standard Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**整合版 (Integrated Version):**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]},en:{title:"Nova Labs Logos",content:["**Standard Version:**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::NOVA_LABS_LOGO_STD]]","**Integrated Version:**","[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856642e9.png::NOVA_LABS_LOGO_FULL]]"]}}},{id:"tech-system",category:"Technology",translations:{"zh-CN":{title:"科技与力量体系",content:["**量子系属性:** 三个主角都具备某种量子体质（由“泽洛希”家族血统提供）。在主宇或实验宇宙中不会立即死亡，但仍会受到精神/结构压力。","**穿梭轨系统:** 现世常用的移动方式，由时空力场驱动，能源效率极高。极特殊情况可脱出轨道进行自由行驶。","**时空泡:** 进入主宇的必要折跃装置。停留时间有限，超过会造成“量子反噬”。","**量子反噬:** “量子生物”对自身控制力弱导致的（对主宇不熟悉）现象，会使身体在现实中虚弱，甚至有生命危险。"]},"zh-TW":{title:"科技與力量體系",content:["**量子系屬性:** 三個主角都具備某種量子體質（由「澤洛希」家族血統提供）。在主宇或實驗宇宙中不會立即死亡，但仍會受到精神/結構壓力。","**穿梭軌系統:** 現世常用的移動方式，由時空力場驅動，能源效率極高。極特殊情況可脫出軌道進行自由行駛。","**時空泡:** 進入主宇的必要折躍裝置。停留時間有限，超過會造成「量子反噬」。","**量子反噬:** 「量子生物」對自身控制力弱導致的（對主宇不熟悉）現象，會使身體在現實中虛弱，甚至有生命危險。"]},en:{title:"Tech & Power System",content:["**Quantum Attributes:** The three protagonists all possess a certain quantum constitution (provided by the 'Zeloshi' family bloodline). They will not die immediately in the Main Universe or experimental universes but will still suffer mental/structural stress.","**Shuttle Rail System:** The common mode of transport in the Current World, driven by time-space force fields with extremely high energy efficiency. In very special cases, it can derail for free travel.","**Time-Space Bubble:** A necessary warp device to enter the Main Universe. Stay time is limited; exceeding it causes 'Quantum Backlash'.","**Quantum Backlash:** A phenomenon caused by weak self-control of 'Quantum Beings' (unfamiliarity with the Main Universe), causing physical weakness in reality, or even life-threatening danger."]}}},{id:"conflict",category:"Society",translations:{"zh-CN":{title:"潜在冲突与环境",content:["**破碎边界:** 本世界（现世）处于一种不稳定或受损的宇宙空间，随时可能湮灭。","**社会环境:** 社会科技水平极高，安全与秩序相对稳定，但实际上公众对“破碎边界”的威胁一无所知。科研人员承担着维持世界稳定的巨大压力。","**未来危机:** “破碎边界”状况加剧，可能导致更多紧急任务。主宇控制台的获得意味着时域计划可能加速。核心成员之间会面临更多危险（例如零点的量子反噬）。"]},"zh-TW":{title:"潛在衝突與環境",content:["**破碎邊界:** 本世界（現世）處於一種不穩定或受損的宇宙空間，隨時可能湮滅。","**社會環境:** 社會科技水平極高，安全與秩序相對穩定，但實際上公眾對「破碎邊界」的威脅一無所知。科研人員承擔著維持世界穩定的巨大壓力。","**未來危機:** 「破碎邊界」狀況加劇，可能導致更多緊急任務。主宇控制台的獲得意味著時域計畫可能加速。核心成員之間會面臨更多危險（例如零點的量子反噬）。"]},en:{title:"Conflict & Environment",content:["**Shattered Boundary:** This world (Current World) is in an unstable or damaged cosmic space and may be annihilated at any time.","**Social Environment:** The social technology level is extremely high, and safety and order are relatively stable, but the public knows nothing about the threat of the 'Shattered Boundary'. Researchers bear immense pressure to maintain world stability.","**Future Crisis:** The condition of the 'Shattered Boundary' is worsening, potentially leading to more emergency missions. Obtaining the Main Universe Console means the Time Domain Project may accelerate. Core members will face more dangers (e.g., Point's Quantum Backlash)."]}}}],xf={id:"story-rare-vacation",date:"档案记录: A-001",status:"published",translations:{"zh-CN":{title:"加班是个坏文明",summary:"难得的休假时间，零点想找人玩，却误入了芷漓的“陷阱”。",content:`[[BLUE::本故事时间&世界线为前传现世篇，请勿代入正篇设定]]

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
was exhausted.`}}},yf={id:"story-overtime-bad-civ",date:"档案记录: A-002",status:"published",translations:{"zh-CN":{title:"愿赌服输！",summary:"自上次零点被芷漓进行“诱骗加班”后，零点心里的那口憋屈气一直未能放下。于是，她找到了一个机会，提出了一场关于寻找「远时」的赌约……",content:`[[BLUE::引用：现世世界观]]

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

[[DANGER::Zeri: "(Wants to kill her, but no, she lost the bet...)"]]`}}},vf={id:"locked-chapter-003",date:"档案记录: A-003",status:"locked",translations:{"zh-CN":{title:"空白档案 // 待录入",summary:"该节点内容已被重置，等待操作员手动录入数据。",content:"DATA_CLEARED // AWAITING_INPUT"},"zh-TW":{title:"空白檔案 // 待錄入",summary:"該節點內容已被重置，等待操作員手動錄入數據。",content:"DATA_CLEARED // AWAITING_INPUT"},en:{title:"EMPTY_FILE // PENDING",summary:"Content reset. Waiting for manual operator input.",content:"DATA_CLEARED // AWAITING_INPUT"}}},bf={id:"locked-chapter-004",date:"档案记录: A-004",status:"locked",translations:{"zh-CN":{title:"加密节点 // 拒绝访问",summary:"检测到未知的数据波动，该节点已被系统自动封锁。",content:"ACCESS DENIED"},"zh-TW":{title:"加密節點 // 拒絕訪問",summary:"檢測到未知的數據波動，該節點已被系統自動封鎖。",content:"ACCESS DENIED"},en:{title:"ENCRYPTED_NODE // ACCESS_DENIED",summary:"Unknown data fluctuation detected. Node automatically locked by system.",content:"ACCESS DENIED"}}},wf={id:"locked-chapter-005",date:"档案记录: A-005",status:"locked",translations:{"zh-CN":{title:"信号丢失 // 待重连",summary:"该时间线尚未观测到有效数据。",content:"SIGNAL_LOST"},"zh-TW":{title:"信號丟失 // 待重連",summary:"該時間線尚未觀測到有效數據。",content:"SIGNAL_LOST"},en:{title:"SIGNAL_LOST // RECONNECTING",summary:"No valid data observed in this timeline yet.",content:"SIGNAL_LOST"}}},kf=[xf,yf,vf,bf,wf],dt={characters:mf,lore:gf,chapters:kf},Er=[{id:"dusk-rain",group:"ARCHIVE_01 // ACTIVE",translations:{"zh-CN":{name:"暮雨",enName:"Dusk .Rain",role:"协作者",tags:["畏光","多虑","吉他手","狂热"],quote:"这只是必要的牺牲……大概吧？",description:["**背景设定:** 父母曾是科研者，但从未告诉暮雨。在其父母双亡前，暮雨是一个极其普通的孩子。","**生理特征:** 在接受“零空”的预示后落下心理性创伤，从而畏光，需定时滴消眼药水，并佩戴高科技遮光眼罩（单向透明，从内部能清晰看见外界，但从外部看只是一块普通的黑色布料）。","**外貌习惯:** 无论去哪里，背上永远背着一个黑色的吉他包，吉他本体从不离身。对他来说，这不仅是乐器，更是某种安全感的来源。","**性格侧写:**","• 目的性很强，甚至狂热 (针对于特定事件)。","• 对人温和，善于交际。读得懂气氛，关照他人感受。","• Overthinking，多虑，以至内耗。","• 爱弹琴。以音乐的形式舒缓压力。","• 有自己的想法。","• 喜欢逗弄零点。"]},"zh-TW":{name:"暮雨",enName:"Dusk .Rain",role:"協作者",tags:["畏光","多慮","吉他手","狂熱"],quote:"這只是必要的犧牲……大概吧？",description:["**背景設定:** 父母曾是科研者，但從未告訴暮雨。在其父母雙亡前，暮雨是一個極其普通的孩子。","**生理特徵:** 在接受「零空」的預示後落下心理性創傷，從而畏光，需定時滴消眼藥水，並佩戴高科技遮光眼罩（單向透明，從內部能清晰看見外界，但從外部看只是一塊普通的黑色布料）。","**外貌習慣:** 無論去哪裡，背上永遠背著一個黑色的吉他包，吉他本體從不離身。對他來說，這不僅是樂器，更是某種安全感的來源。","**性格側寫:**","• 目的性很強，甚至狂熱 (針對於特定事件)。","• 對人溫和，善於交際。讀得懂氣氛，關照他人感受。","• Overthinking，多慮，以至內耗。","• 愛彈琴。以音樂的形式舒緩壓力。","• 有自己的想法。","• 喜歡逗弄零點。"]},en:{name:"Dusk Rain",enName:"Dusk .Rain",role:"Collaborator",tags:["Photophobia","Overthinker","Guitarist","Fanatic"],quote:"This is just a necessary sacrifice... probably?",description:["**Background:** His parents were researchers but never told him. Before they passed away, Dusk was an extremely ordinary child.","**Physical Condition:** Suffered psychological trauma after receiving a premonition from 'Void', resulting in photophobia. He needs to apply eye drops regularly and wears a high-tech blackout eye mask (one-way transparent, allowing a clear view from the inside, but appearing as a piece of ordinary black cloth from the outside).","**Habit:** Regardless of where he goes, he always carries a black guitar bag on his back; his guitar never leaves his side. For him, it is not just an instrument, but a source of security.","**Personality:**","• Highly purposeful, even fanatical (regarding specific events).","• Gentle with others, good at socializing. Reads the atmosphere and cares about others' feelings.","• Overthinking, leads to internal exhaustion.","• Loves playing the guitar to relieve stress.","• Has his own ideas.","• Likes to tease Point."]}}},{id:"unknown-entity",group:"ARCHIVE_02 // CLASSIFIED",isLocked:!0,translations:{"zh-CN":{name:"？？？",enName:"UNKNOWN_ENTITY",role:"未知",tags:[],description:["权限不足，无法访问该档案。"],quote:"..."},"zh-TW":{name:"？？？",enName:"UNKNOWN_ENTITY",role:"未知",tags:[],description:["權限不足，無法訪問該檔案。"],quote:"..."},en:{name:"???",enName:"UNKNOWN_ENTITY",role:"UNKNOWN",tags:[],description:["Access denied. Insufficient clearance."],quote:"..."}}},{id:"empty-slot-01",group:"ARCHIVE_03 // RESERVED",isLocked:!0,translations:{"zh-CN":{name:"空闲槽位_01",enName:"EMPTY_SLOT_01",role:"待定",tags:[],description:["该记录槽位为空，等待数据录入..."],quote:""},"zh-TW":{name:"空閒槽位_01",enName:"EMPTY_SLOT_01",role:"待定",tags:[],description:["該記錄槽位為空，等待數據錄入..."],quote:""},en:{name:"EMPTY_SLOT_01",enName:"EMPTY_SLOT_01",role:"TBD",tags:[],description:["Slot empty. Awaiting data entry..."],quote:""}}},{id:"empty-slot-02",group:"ARCHIVE_03 // RESERVED",isLocked:!0,translations:{"zh-CN":{name:"空闲槽位_02",enName:"EMPTY_SLOT_02",role:"待定",tags:[],description:["该记录槽位为空，等待数据录入..."],quote:""},"zh-TW":{name:"空閒槽位_02",enName:"EMPTY_SLOT_02",role:"待定",tags:[],description:["該記錄槽位為空，等待數據錄入..."],quote:""},en:{name:"EMPTY_SLOT_02",enName:"EMPTY_SLOT_02",role:"TBD",tags:[],description:["Slot empty. Awaiting data entry..."],quote:""}}}],Nf={point:["zeri","zelo","void","dusk-rain"],zeri:["point","zelo"],zelo:["point","zeri"],void:["point"]},mc=(f,w)=>{const u=dt.characters.find(b=>b.id===f);if(u){const b=u.translations[w]||u.translations["zh-CN"];return{id:u.id,name:b.name,role:b.role,color:u.themeColor||"text-ash-light",isMain:!0}}const y=Er.find(b=>b.id===f);if(y){const b=y.translations[w]||y.translations["zh-CN"];return{id:y.id,name:b.name,role:b.role,color:"text-ash-gray",isMain:!1}}return null},gc=({centerId:f,language:w,onSelect:u,isLightTheme:y})=>{const b=Nf[f]||[];if(b.length===0)return null;const N=mc(f,w);if(!N)return null;const P=800,m=P/2,x=280;return s.jsxs("div",{className:"w-full h-full relative flex flex-col",children:[s.jsxs("div",{className:"absolute top-4 left-4 z-10 text-xs font-bold uppercase flex items-center gap-2 text-ash-gray/70 bg-ash-black/50 px-2 py-1 border border-ash-gray/30",children:[s.jsx(nf,{size:14}),w==="en"?"Neural_Network":"人际关系拓扑"]}),s.jsxs("div",{className:"flex-1 min-h-0 flex items-center justify-center relative overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"}),s.jsxs("svg",{viewBox:`0 0 ${P} ${P}`,className:"w-full h-full max-w-[90%] max-h-[90%] overflow-visible drop-shadow-2xl",children:[b.map((E,k)=>{const j=k*2*Math.PI/b.length-Math.PI/2,S=m+x*Math.cos(j),T=m+x*Math.sin(j),A=E==="dusk-rain";return s.jsxs("g",{children:[s.jsx("line",{x1:m,y1:m,x2:S,y2:T,stroke:"currentColor",strokeOpacity:A?"0.15":"0.2",strokeWidth:A?"1":"2",strokeDasharray:A?"8,6":"none",className:"text-ash-gray"}),A?s.jsx("text",{x:m+(S-m)*.5,y:m+(T-m)*.5,fill:"currentColor",textAnchor:"middle",dy:"0.3em",className:"text-[10px] text-ash-gray font-mono opacity-50",children:"×"}):s.jsx("circle",{cx:m+(S-m)*.5,cy:m+(T-m)*.5,r:"3",className:"text-ash-gray fill-ash-black stroke-2 stroke-current"})]},`line-${E}`)}),s.jsxs("g",{className:"filter drop-shadow-xl",children:[s.jsx("circle",{cx:m,cy:m,r:"70",className:`${N.color} fill-current opacity-10 animate-pulse`}),s.jsx("circle",{cx:m,cy:m,r:"55",className:"fill-ash-black stroke-[4px] stroke-current text-ash-gray"}),s.jsx("text",{x:m,y:m,dy:"0.35em",textAnchor:"middle",className:`text-[28px] font-mono font-black uppercase ${N.color} fill-current pointer-events-none select-none`,children:N.name.substring(0,1)})]}),b.map((E,k)=>{const j=k*2*Math.PI/b.length-Math.PI/2,S=m+x*Math.cos(j),T=m+x*Math.sin(j),A=mc(E,w),L=E==="dusk-rain";return A?s.jsxs("g",{onClick:W=>{W.stopPropagation(),A.isMain&&u(E)},className:`transition-all duration-300 ${A.isMain?"cursor-pointer hover:scale-110":"cursor-default opacity-90"} ${L?"grayscale":""}`,children:[s.jsx("circle",{cx:S,cy:T,r:"40",className:`${A.color} fill-current ${L?"opacity-[0.03]":"opacity-10"}`}),s.jsx("circle",{cx:S,cy:T,r:"32",className:`fill-ash-black stroke-2 stroke-current ${A.color} ${L?"stroke-dashed opacity-50":""}`,strokeDasharray:L?"4,4":"none"}),L?s.jsxs(s.Fragment,{children:[s.jsx("path",{d:`M${S-10} ${T-10} L${S+10} ${T+10} M${S+10} ${T-10} L${S-10} ${T+10}`,stroke:"currentColor",strokeWidth:"1.5",className:`${A.color} opacity-40`}),s.jsx("text",{x:S,y:T,dy:"0.3em",textAnchor:"middle",className:`text-[8px] font-mono font-bold uppercase ${A.color} fill-current select-none opacity-70`,children:"OFFLINE"}),s.jsx("text",{x:S,y:T+48,dy:"0.3em",textAnchor:"middle",className:`text-[12px] font-mono font-bold uppercase ${A.color} fill-current select-none opacity-50 line-through decoration-current`,children:A.name})]}):s.jsxs(s.Fragment,{children:[s.jsx("text",{x:S,y:T,dy:"-0.6em",textAnchor:"middle",className:`text-[14px] font-mono font-bold uppercase ${A.color} fill-current select-none`,children:A.name}),s.jsx("text",{x:S,y:T,dy:"1.4em",textAnchor:"middle",className:"text-[10px] font-mono uppercase fill-ash-gray select-none tracking-tighter",children:A.role})]})]},E):null})]})]}),s.jsxs("div",{className:"absolute bottom-4 right-4 text-[10px] font-mono text-ash-gray/50 text-right",children:["LINK_STATUS: STABLE",s.jsx("br",{}),"NODES: ",b.length+1]})]})},jf=({stats:f,colorClass:w})=>{const P=(k,j,S)=>{const T=Math.PI*2*j/S-Math.PI/2,A=k/10*40,L=50+A*Math.cos(T),W=50+A*Math.sin(T);return`${L},${W}`},m=[f.strength,f.intelligence,f.mental,f.resonance,f.agility],x=m.map((k,j)=>P(k,j,5)).join(" "),E=[{label:"STR",x:50,y:5},{label:"INT",x:95,y:35},{label:"MEN",x:80,y:95},{label:"RES",x:20,y:95},{label:"AGI",x:5,y:35}];return s.jsx("div",{className:"relative w-full aspect-square max-w-[180px] xl:max-w-[220px] mx-auto",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full overflow-visible",children:[[.2,.4,.6,.8,1].map(k=>s.jsx("polygon",{points:Array(5).fill(10*k).map((j,S)=>P(j,S,5)).join(" "),fill:"none",stroke:"var(--ash-gray)",strokeWidth:"0.5",opacity:"0.3"},k)),E.map((k,j)=>s.jsx("line",{x1:50,y1:50,x2:P(10,j,5).split(",")[0],y2:P(10,j,5).split(",")[1],stroke:"var(--ash-gray)",strokeWidth:"0.5",opacity:"0.3"},j)),s.jsx("polygon",{points:x,fill:"currentColor",fillOpacity:"0.2",stroke:"currentColor",strokeWidth:"2",className:w}),m.map((k,j)=>{const[S,T]=P(k,j,5).split(",");return s.jsx("circle",{cx:S,cy:T,r:"1.5",className:`${w} fill-current`},j)}),E.map((k,j)=>s.jsx("text",{x:k.x,y:k.y,textAnchor:"middle",fontSize:"6",fill:"var(--ash-gray)",className:"font-mono font-bold",children:k.label},j))]})})};function Ef({language:f}){const[w,u]=D.useState(dt.characters[0].id),y=dt.characters.find(m=>m.id===w)||dt.characters[0],b=y.translations[f]||y.translations["zh-CN"],N=m=>{const x=m.toLowerCase();return x.includes("支援")||x.includes("重装")||x.includes("support")||x.includes("heavy")?s.jsx(lf,{className:"w-5 h-5"}):x.includes("科研")||x.includes("前线")||x.includes("research")||x.includes("frontline")?s.jsx(qt,{className:"w-5 h-5"}):x.includes("？？？")||x.includes("???")?s.jsx(af,{className:"w-5 h-5"}):s.jsx(dc,{className:"w-5 h-5"})},P=[{label:"STRENGTH",val:y.stats.strength,icon:Lc},{label:"INTELLIGENCE",val:y.stats.intelligence,icon:Ec},{label:"AGILITY",val:y.stats.agility,icon:df},{label:"MENTAL",val:y.stats.mental,icon:Xh},{label:"RESONANCE",val:y.stats.resonance,icon:Hs}];return s.jsxs("div",{className:"flex flex-col h-full bg-halftone overflow-hidden",children:[s.jsxs("header",{className:"p-4 md:p-6 border-b-2 border-ash-dark bg-ash-black z-20 flex justify-between items-center shrink-0",children:[s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl md:text-2xl font-black text-ash-light mb-1 uppercase tracking-tighter flex items-center gap-3",children:[s.jsx(dc,{size:24,className:"md:w-6 md:h-6"}),f==="en"?"Personnel_File":"人员档案"]}),s.jsxs("div",{className:"text-[10px] font-mono text-ash-gray flex gap-2",children:[s.jsx("span",{className:"bg-ash-dark px-1",children:"CONFIDENTIAL"}),s.jsx("span",{children:"// AUTH_REQ_LEVEL_5"})]})]}),s.jsx("div",{className:"hidden md:block text-right",children:s.jsx("div",{className:"text-xs text-ash-light font-bold font-mono border border-ash-gray px-2 py-1 inline-block",children:"DB_STATUS: ONLINE"})})]}),s.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden relative",children:[s.jsx("aside",{className:"w-full md:w-64 border-b-2 md:border-b-0 md:border-r-2 border-ash-dark bg-ash-black overflow-x-auto md:overflow-y-auto shrink-0 z-10 flex flex-row md:flex-col no-scrollbar",children:s.jsx("div",{className:"flex flex-row md:flex-col p-2 md:p-4 gap-2 md:gap-3 min-w-max md:min-w-0",children:dt.characters.map(m=>{const x=m.translations[f]||m.translations["zh-CN"];return s.jsxs("button",{onClick:()=>u(m.id),className:`w-32 md:w-full text-left p-2 md:p-3 border-2 transition-all relative overflow-hidden group shrink-0 ${w===m.id?"border-ash-light bg-ash-light text-ash-black shadow-hard":"border-ash-gray/30 bg-ash-dark text-ash-gray hover:border-ash-gray hover:text-ash-white"}`,children:[s.jsxs("div",{className:"flex justify-between items-start mb-1 z-10 relative",children:[s.jsx("span",{className:"font-bold uppercase tracking-wider truncate text-xs md:text-sm",children:x.name}),s.jsx("div",{className:"scale-75 origin-top-right",children:N(x.role)})]}),s.jsx("div",{className:"text-[10px] font-mono opacity-70 z-10 relative truncate",children:m.alias}),w===m.id&&s.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none"})]},m.id)})})}),s.jsxs("main",{className:"flex-1 flex flex-col xl:flex-row h-full overflow-hidden bg-ash-black",children:[s.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 space-y-8 relative",children:[s.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-5 pointer-events-none",children:s.jsx(Ic,{size:300,strokeWidth:.5})}),s.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start",children:[s.jsxs("div",{className:"flex-1 space-y-4",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-4xl md:text-6xl font-black uppercase tracking-tighter text-ash-light mb-2 leading-none",children:b.name}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm font-mono text-ash-gray",children:[s.jsx("span",{className:"px-2 py-1 bg-ash-light text-ash-black font-bold uppercase",children:y.alias}),s.jsxs("span",{children:[" // ROLE: ",b.role]}),s.jsxs("span",{children:[" // ID: ",y.id.toUpperCase()]})]})]}),b.quote&&s.jsxs("div",{className:"border-l-4 border-ash-light pl-4 py-2 italic text-ash-light/80 font-serif text-base md:text-lg",children:['"',b.quote,'"']}),s.jsx("div",{className:"flex flex-wrap gap-2",children:b.tags.map(m=>s.jsxs("span",{className:"px-3 py-1 border border-ash-gray rounded-full text-xs font-mono hover:bg-ash-light hover:text-ash-black transition-colors cursor-default",children:["#",m]},m))})]}),s.jsxs("div",{className:"w-full lg:w-[280px] bg-ash-dark p-4 border-2 border-ash-gray shadow-hard",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4 border-b border-ash-gray/20 pb-2",children:[s.jsxs("h3",{className:"text-[10px] font-bold uppercase flex items-center gap-2 text-ash-gray",children:[s.jsx(qt,{size:12})," ",f==="en"?"Combat_Data":"战斗数据"]}),s.jsxs("div",{className:"text-[10px] font-mono text-ash-gray",children:["SYNC: ",y.stats.resonance*10,"%"]})]}),s.jsx(jf,{stats:y.stats,colorClass:y.themeColor||"text-ash-light"}),s.jsx("div",{className:"space-y-2 mt-4",children:P.map(m=>s.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono",children:[s.jsxs("span",{className:"flex items-center gap-2 text-ash-gray font-bold",children:[s.jsx(m.icon,{size:10})," ",m.label]}),s.jsx("div",{className:"flex gap-[1px]",children:Array(10).fill(0).map((x,E)=>{var k;return s.jsx("div",{className:`w-1 h-2 transition-all duration-300 ${E<m.val?((k=y.themeColor)==null?void 0:k.replace("text-","bg-"))||"bg-ash-light":"bg-ash-black border border-ash-dark"}`},E)})})]},m.label))})]})]}),s.jsxs("div",{className:"bg-ash-dark/20 border-2 border-ash-gray/30 p-6",children:[s.jsxs("h3",{className:"text-lg font-bold uppercase border-b border-ash-gray pb-2 flex items-center gap-2 mb-4 text-ash-light",children:[s.jsx(sf,{size:18})," Field Analysis"]}),s.jsx("div",{className:"space-y-4 font-mono text-sm leading-relaxed text-ash-gray/90",children:b.description.map((m,x)=>s.jsxs("div",{className:"flex gap-3",children:[s.jsxs("span",{className:"text-ash-light font-bold shrink-0",children:["[",String(x+1).padStart(2,"0"),"]"]}),s.jsx("p",{children:m})]},x))})]}),s.jsx("div",{className:"xl:hidden h-[400px] bg-ash-dark/30 border-2 border-ash-gray p-4 relative",children:s.jsx(gc,{centerId:y.id,language:f,onSelect:u,isLightTheme:!1})})]}),s.jsx("div",{className:"hidden xl:flex w-[45%] 2xl:w-[40%] bg-ash-dark/10 border-l-2 border-ash-dark relative flex-col shadow-[inset_10px_0_20px_rgba(0,0,0,0.2)]",children:s.jsx("div",{className:"flex-1 w-full h-full p-8 overflow-hidden flex items-center justify-center",children:s.jsx(gc,{centerId:y.id,language:f,onSelect:u,isLightTheme:!1})})})]},y.id)]})]})}const Sf=({language:f})=>{const[w,u]=D.useState("All"),b={"zh-CN":{title:"世界数据库",all:"全部档案",world:"世界构造",org:"组织档案",tech:"技术文档",type:"类型"},"zh-TW":{title:"世界數據庫",all:"全部檔案",world:"世界構造",org:"組織檔案",tech:"技術文檔",type:"類型"},en:{title:"WORLD_DATABASE",all:"ALL_FILES",world:"WORLD",org:"ORG",tech:"TECH",type:"TYPE"}}[f],N=[{id:"All",label:b.all,icon:Zh},{id:"World",label:b.world,icon:Sr},{id:"Organization",label:b.org,icon:Rc},{id:"Technology",label:b.tech,icon:Hs}],P=w==="All"?dt.lore:dt.lore.filter(m=>m.category===w);return s.jsxs("div",{className:"p-4 md:p-12 max-w-6xl mx-auto h-full overflow-y-auto bg-halftone",children:[s.jsx(_e,{children:s.jsxs("header",{className:"mb-6 md:mb-10 border-4 border-ash-light p-4 md:p-6 bg-ash-black shadow-hard",children:[s.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-ash-light mb-2 flex items-center gap-3",children:[s.jsx(Sc,{size:24,className:"md:w-8 md:h-8"}),b.title]}),s.jsxs("div",{className:"h-2 w-full bg-ash-dark border border-ash-gray mt-4 flex",children:[s.jsx("div",{className:"h-full bg-ash-light w-2/3 animate-[scanline_2s_linear_infinite] bg-gradient-to-r from-ash-light via-ash-white to-ash-light",style:{animationDirection:"reverse"}}),s.jsx("div",{className:"h-full bg-ash-gray w-1/3 opacity-20"})]})]})}),s.jsx("div",{className:"flex flex-wrap gap-2 md:gap-0 mb-6 md:mb-8 pl-0 md:pl-4 border-b-0 md:border-b-2 border-ash-light",children:N.map(m=>s.jsxs("button",{onClick:()=>u(m.id),className:`flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 border-2 md:border-b-0 md:mr-[-2px] text-xs md:text-sm font-bold font-mono transition-all relative md:top-[2px] flex-grow md:flex-grow-0 ${w===m.id?"bg-ash-light text-ash-black border-ash-light z-10 shadow-hard md:shadow-none":"bg-ash-dark text-ash-gray border-ash-gray hover:bg-ash-gray hover:text-ash-black"}`,children:[s.jsx(m.icon,{size:14}),s.jsx("span",{children:m.label})]},m.id))}),s.jsx("div",{className:"grid grid-cols-1 gap-4 md:gap-8 pb-8",children:P.map((m,x)=>{const E=m.translations[f]||m.translations["zh-CN"];return s.jsx(_e,{delay:x*100,children:s.jsxs("div",{className:"bg-ash-black border-2 border-ash-gray p-4 md:p-8 hover:border-ash-light transition-colors relative group",children:[s.jsx("div",{className:"absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 border-t-2 border-l-2 border-ash-gray group-hover:border-ash-light"}),s.jsx("div",{className:"absolute top-0 right-0 w-3 md:w-4 h-3 md:h-4 border-t-2 border-r-2 border-ash-gray group-hover:border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-3 md:w-4 h-3 md:h-4 border-b-2 border-l-2 border-ash-gray group-hover:border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-3 md:w-4 h-3 md:h-4 border-b-2 border-r-2 border-ash-gray group-hover:border-ash-light"}),s.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between mb-4 md:mb-6 border-b border-dashed border-ash-gray pb-4 gap-2 md:gap-0",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-ash-light font-mono uppercase leading-tight",children:E.title}),s.jsxs("span",{className:"self-start text-[10px] font-mono text-ash-black bg-ash-gray px-2 py-1 font-bold",children:[b.type,": ",m.category.toUpperCase()]})]}),s.jsx("div",{className:"space-y-4 text-ash-gray font-mono text-xs md:text-sm leading-6 md:leading-7",children:E.content.map((k,j)=>{const S=k.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(S){const[A,L,W]=S;return s.jsx("div",{className:"my-6",children:s.jsxs("div",{className:"relative border-2 border-ash-gray p-2 bg-ash-dark/30 inline-block max-w-full",children:[s.jsx("div",{className:"absolute -top-1 -left-1 w-2 h-2 border-t border-l border-ash-gray"}),s.jsx("div",{className:"absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-ash-gray"}),s.jsx("img",{src:L,alt:W,className:"max-w-full h-auto max-h-64 object-contain mx-auto block grayscale-[20%] hover:grayscale-0 transition-all"}),s.jsx("div",{className:"absolute bottom-0 right-0 translate-y-1/2 translate-x-2 bg-ash-dark border border-ash-gray px-2 py-0.5 z-10",children:s.jsxs("div",{className:"text-[10px] font-mono text-ash-light flex items-center gap-2 uppercase font-bold",children:[s.jsx(eo,{size:10}),W]})})]})},j)}const T=k.split("**");return s.jsx("p",{children:T.map((A,L)=>L%2===1?s.jsx("strong",{className:"text-ash-light bg-ash-dark px-1 border border-ash-gray/50",children:A},L):A)},j)})})]})},m.id)})})]})},Ac=({onComplete:f,language:w,mode:u="full"})=>{const[y,b]=D.useState(0),[N,P]=D.useState([]);D.useEffect(()=>{const x=setInterval(()=>{const E=Math.random().toString(16).substring(2,10).toUpperCase(),k=Math.floor(Math.random()*9999);P(j=>[`> SYNC_FRAME_${E} :: PACKET_${k}`,...j].slice(0,15))},u==="full"?50:20);return()=>clearInterval(x)},[u]),D.useEffect(()=>{const x=u==="full"?{stage1:1200,stage2:2500,stage3:3500,complete:4e3}:{stage1:300,stage2:800,stage3:1500,complete:1800},E=setTimeout(()=>b(1),x.stage1),k=setTimeout(()=>b(2),x.stage2),j=setTimeout(()=>b(3),x.stage3),S=setTimeout(f,x.complete);return()=>{clearTimeout(E),clearTimeout(k),clearTimeout(j),clearTimeout(S)}},[f,u]);const m={"zh-CN":{init:"协议初始化...",lock:"锁定现实锚点",targeting:"目标搜寻",verified:"验证通过",sync:"时空同步率: 0%",dive:"开始读取",warn:"警告：当前时间线无法确认，以只读模式进入.."},"zh-TW":{init:"協議初始化...",lock:"鎖定現實錨點",targeting:"目標搜尋",verified:"驗證通過",sync:"時空同步率: 0%",dive:"開始讀取",warn:"警告：當前時間線無法確認，以唯讀模式進入.."},en:{init:"PROTOCOL_INIT...",lock:"REALITY_ANCHOR_LOCKED",targeting:"TARGET_SEARCH",verified:"VERIFIED",sync:"SYNC_RATE: 0%",dive:"READING_INIT",warn:"WARNING: TIMELINE UNVERIFIED // ENTERING READ-ONLY MODE"}}[w];return s.jsxs("div",{className:"fixed inset-0 z-[99999] bg-ash-black text-ash-light overflow-hidden flex items-center justify-center font-mono cursor-none",children:[s.jsx("button",{onClick:f,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-ash-light/20 px-2 py-1 hover:bg-ash-light hover:text-ash-black transition-colors opacity-50 hover:opacity-100 cursor-pointer",children:"[ABORT_SEQUENCE]"}),s.jsx("div",{className:`absolute inset-0 bg-grid-hard opacity-20 transition-transform duration-[4000ms] ease-in ${y>0?"scale-150":"scale-100"}`}),s.jsx("div",{className:`relative z-10 transition-all duration-500 ${y>=2?"scale-[5] opacity-0 blur-xl":"scale-100 opacity-100"}`,children:s.jsxs("div",{className:"relative flex items-center justify-center",children:[s.jsx("div",{className:"absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-ash-gray/20 rounded-full animate-spin-slow"}),s.jsx("div",{className:"absolute w-[65vw] h-[65vw] md:w-[500px] md:h-[500px] border border-ash-gray/30 rounded-full border-dashed animate-spin-reverse-slow"}),s.jsx("div",{className:`absolute w-[50vw] h-[50vw] md:w-[400px] md:h-[400px] border-2 border-ash-light rounded-full animate-ping opacity-20 ${y===1?"border-red-500":""}`}),s.jsxs("div",{className:"w-48 h-48 md:w-64 md:h-64 border-2 border-ash-light relative flex items-center justify-center animate-zoom-in-fast bg-ash-black/50 backdrop-blur-sm",children:[s.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-ash-light"}),s.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-ash-light"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-ash-light"}),s.jsxs("div",{className:`flex flex-col items-center gap-4 transition-colors duration-300 ${y>0?"text-red-500":"text-ash-light"}`,children:[s.jsx(uf,{size:48,strokeWidth:1,className:`md:w-16 md:h-16 ${y>0?"animate-spin":""}`}),s.jsx("div",{className:"text-xl md:text-2xl font-black tracking-widest uppercase",children:y===0?m.targeting:m.verified}),u==="full"&&s.jsx("div",{className:"text-[10px] bg-ash-light text-ash-black px-2 py-0.5",children:m.lock})]})]})]})}),s.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-64 p-8 flex flex-col justify-center gap-1 opacity-60 pointer-events-none hidden lg:flex",children:N.map((x,E)=>s.jsx("div",{className:"text-[10px] text-green-500/70 font-mono truncate",children:x},E))}),s.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-64 p-8 flex flex-col justify-center gap-1 opacity-60 pointer-events-none text-right hidden lg:flex",children:N.map((x,E)=>s.jsx("div",{className:"text-[10px] text-green-500/70 font-mono truncate",children:x.split("").reverse().join("")},E))}),y>=1&&s.jsxs("div",{className:"absolute inset-0 z-0 flex items-center justify-center pointer-events-none",children:[s.jsx("div",{className:"w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"}),[1,2,3,4,5].map(x=>s.jsx("div",{className:"absolute border border-ash-light/20 rounded-full animate-tunnel",style:{width:`${x*10}%`,height:`${x*10}%`,animationDelay:`${x*.1}s`}},x))]}),s.jsxs("div",{className:"absolute top-12 w-full text-center space-y-2",children:[u==="full"&&s.jsx("div",{className:"text-xs font-bold tracking-[1em] text-ash-gray animate-pulse",children:m.init}),y>=1&&s.jsx("div",{className:"text-4xl md:text-6xl font-black uppercase text-ash-light glitch-text-heavy","data-text":"NOVA_LABS",children:"NOVA_LABS"})]}),s.jsxs("div",{className:"absolute bottom-12 w-full flex justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-mono px-4 flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Sr,{size:14})," SYSTEM: ",s.jsx("span",{className:"text-green-500",children:"ONLINE"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Mc,{size:14})," UPLINK: ",s.jsx("span",{className:"text-green-500",children:"STABLE"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(qt,{size:14})," MEMORY: ",s.jsx("span",{className:"text-green-500",children:"READ_WRITE"})]})]}),y===3&&s.jsx("div",{className:"absolute inset-0 bg-ash-white animate-fade-in z-[100000]"}),y===2&&u==="full"&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-50 bg-red-500/10",children:s.jsx("div",{className:"border-y-4 border-red-500 bg-ash-black text-red-500 text-xl md:text-4xl font-black p-4 w-full text-center animate-pulse",children:m.warn})})]})},xc=({lines:f})=>{const[w,u]=D.useState(!1);return s.jsx(_e,{children:s.jsxs("div",{className:"my-10 border-l-4 border-fuchsia-600 bg-fuchsia-950/10 font-mono text-xs md:text-sm shadow-[0_0_15px_-3px_rgba(192,38,211,0.2)]",children:[s.jsxs("button",{onClick:()=>u(!w),className:"w-full text-left p-3 md:p-4 bg-fuchsia-950/20 hover:bg-fuchsia-900/30 text-fuchsia-300 font-bold flex items-center gap-3 transition-all group border-b border-fuchsia-500/20",children:[s.jsx("div",{className:`transition-transform duration-300 ${w?"rotate-90":""}`,children:s.jsx(Cr,{size:16})}),s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-1 md:gap-3",children:[s.jsx("span",{className:"animate-pulse tracking-widest text-fuchsia-400",children:">>> SYSTEM_INTERCEPT // 0000.2_VOID"}),s.jsx("span",{className:"text-[10px] bg-fuchsia-900/50 px-1 border border-fuchsia-500/30 text-fuchsia-200/70",children:"ENCRYPTION: UNSTABLE"})]}),s.jsx("span",{className:"ml-auto opacity-50 text-[10px] group-hover:opacity-100 transition-opacity",children:"[CLICK_TO_DECODE]"})]}),s.jsx("div",{className:`transition-all duration-500 ease-in-out overflow-hidden ${w?"max-h-[1000px] opacity-100":"max-h-0 opacity-0"}`,children:s.jsxs("div",{className:"p-4 md:p-6 text-fuchsia-100/90 space-y-2 leading-relaxed tracking-wide font-medium bg-black/20 backdrop-blur-sm",children:[f.map((y,b)=>{const N=y.replace(/0000\.2Void>>/,"").replace(/【插入结束】|【插入結束】|\[INSERTION_END\]/,"");return N.trim()?s.jsx("p",{className:"border-l border-fuchsia-500/20 pl-3 hover:border-fuchsia-500 hover:bg-fuchsia-500/5 transition-colors duration-300",children:N},b):s.jsx("br",{},b)}),s.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-fuchsia-500/30 text-[10px] text-fuchsia-500 text-right",children:"// LOG_END // CONNECTION_TERMINATED"})]})})]})})},Cf=({currentIndex:f,onChapterChange:w,language:u,isLightTheme:y})=>{const[b,N]=D.useState("directory"),[P,m]=D.useState(!0),x=D.useRef(null),[E,k]=D.useState(!1),[j,S]=D.useState(0),T=dt.chapters[f],A=T.translations[u]||T.translations["zh-CN"];D.useEffect(()=>{window.innerWidth<768&&m(!1)},[]),D.useEffect(()=>{x.current&&(x.current.scrollTop=0)},[f,b]);const L=ee=>{S(ee),k(!0)},W=()=>{k(!1),w(j),N("reader")},le=()=>{f<dt.chapters.length-1&&w(f+1)},ge=()=>{f>0&&w(f-1)},X=ee=>{const B=Y=>Y.length===0?"":Y.reduce((ce,de,Se)=>{if(Se===0)return de;const Te=Y[Se-1],fe=Te[Te.length-1],M=de[0],Z=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,O=Z.test(fe),h=Z.test(M);return O||h?ce+de:ce+" "+de},""),te=ee.split(`
`),G=[];let he=[],Ie=!1,ve=[];const Me=()=>{if(he.length>0){const Y=B(he);let ce="mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-ash-light transition-colors";Y.startsWith("零点")||Y.startsWith("Point")||Y.startsWith("零點")?ce=y?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]":Y.startsWith("芷漓")||Y.startsWith("Zeri")?ce=y?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-400 drop-shadow-[0_0_2px_rgba(244,114,182,0.4)]":Y.startsWith("泽洛")||Y.startsWith("Zelo")||Y.startsWith("澤洛")?ce=y?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 drop-shadow-[0_0_2px_rgba(96,165,250,0.4)]":(Y.startsWith("???")||Y.startsWith("Void")||Y.includes("void")||Y.includes("Void"))&&(ce=y?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-900 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"),G.push(s.jsx(_e,{children:s.jsx("p",{className:ce,children:Y})},`p-${G.length}`)),he=[]}};for(let Y=0;Y<te.length;Y++){const ce=te[Y],de=ce.trim(),Se=de.includes("0000.2Void>>"),Te=de.includes("【插入结束】")||de.includes("【插入結束】")||de.includes("[INSERTION_END]");if(Se){Me(),Ie=!0,ve=[],ve.push(ce),Te&&(Ie=!1,G.push(s.jsx(xc,{lines:[...ve]},`void-${Y}`)),ve=[]);continue}if(Ie){ve.push(ce),Te&&(Ie=!1,G.push(s.jsx(xc,{lines:[...ve]},`void-${Y}`)),ve=[]);continue}const fe=de.match(/^\[\[BLUE::(.*?)\]\]$/),M=de.match(/^\[\[DANGER::(.*?)\]\]$/),Z=de==="[[DIVIDER]]",O=/\[\[IMAGE::(.*?)::(.*?)\]\]/.test(de);if(fe||M||Z||O||!de){if(Me(),fe){const C=y?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 font-bold";G.push(s.jsx(_e,{children:s.jsx("p",{className:C,children:fe[1]})},`blue-${Y}`))}else if(M){const C=y?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-600 font-black animate-crash origin-left":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-500 font-black animate-crash origin-left";G.push(s.jsx(_e,{children:s.jsx("p",{className:C,children:M[1]})},`danger-${Y}`))}else if(Z)G.push(s.jsx(_e,{children:s.jsxs("div",{className:"my-12 flex items-center justify-center gap-4 opacity-50 select-none",children:[s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(qt,{size:16,className:"text-ash-light animate-pulse"}),s.jsx("div",{className:"text-[10px] font-mono tracking-[0.3em] text-ash-light",children:"DATA_SEGMENT"})]}),s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"})]})},`div-${Y}`));else if(O){const C=de.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(C){const[ne,re,ae]=C;G.push(s.jsx(_e,{className:"my-12 flex flex-col items-center w-full",children:s.jsxs("div",{className:"relative border-4 border-ash-light p-2 bg-ash-dark max-w-full shadow-hard group",children:[s.jsx("div",{className:"absolute -top-1.5 -left-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsx("div",{className:"absolute -top-1.5 -right-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsx("div",{className:"absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsx("div",{className:"absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-ash-black border border-ash-gray z-10 flex items-center justify-center text-[8px] text-ash-gray",children:"+"}),s.jsxs("div",{className:"relative overflow-hidden bg-ash-black",children:[s.jsx("img",{src:re,alt:ae,className:"relative max-h-[600px] w-auto object-cover block grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"}),s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"})]}),s.jsx("div",{className:"absolute bottom-4 right-4 z-20",children:s.jsxs("div",{className:"bg-ash-light text-ash-black px-3 py-1 text-[10px] font-mono font-bold border-2 border-ash-black shadow-hard-sm flex items-center gap-2 uppercase",children:[s.jsx(eo,{size:12,strokeWidth:3}),ae]})})]})},`img-${Y}`))}}continue}he.push(de)}return Me(),G};return b==="directory"?s.jsxs("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:[E&&s.jsx(Ac,{onComplete:W,language:u,mode:"fast"}),s.jsx("div",{className:"absolute top-0 bottom-0 left-1/2 w-px bg-ash-dark -translate-x-1/2 z-0 border-l border-dashed border-ash-gray/30"}),s.jsx("header",{className:"relative z-10 mb-12 text-center bg-ash-black p-6 border border-ash-gray shadow-hard max-w-lg w-full mt-8 md:mt-0",children:s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(jc,{size:32,className:"text-ash-light"}),s.jsx("h1",{className:"text-2xl font-black text-ash-light uppercase tracking-tighter",children:u==="en"?"MAIN_ARCHIVE_DIR":"主线档案目录"}),s.jsx("p",{className:"text-[10px] font-mono text-ash-gray border-t border-dashed border-ash-gray/50 pt-2 w-full text-center",children:"/VAR/LIB/NOVA/MAIN_STORY"})]})}),s.jsx("div",{className:"w-full max-w-5xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20",children:dt.chapters.map((ee,B)=>{var he;const te=ee.translations[u]||ee.translations["zh-CN"],G=ee.status==="locked";return s.jsx(_e,{delay:B*50,className:"h-full",children:s.jsxs("button",{onClick:()=>!G&&L(B),disabled:G,className:`
                                    w-full h-full flex flex-col text-left border-2 transition-all duration-300 relative group overflow-hidden
                                    ${G?"bg-ash-black/50 border-ash-dark text-ash-gray cursor-not-allowed opacity-70":"bg-ash-black border-ash-gray text-ash-light hover:border-ash-light hover:shadow-hard hover:-translate-y-1"}
                                `,children:[s.jsxs("div",{className:`p-3 border-b border-dashed ${G?"border-ash-dark bg-ash-dark/30":"border-ash-gray/30 bg-ash-dark/50"} flex justify-between items-center`,children:[s.jsx("span",{className:"text-[10px] font-mono font-bold",children:((he=ee.id.split("-").pop())==null?void 0:he.toUpperCase())||`CH_${B}`}),G?s.jsx(_r,{size:12}):s.jsx("div",{className:"w-2 h-2 bg-ash-light rounded-full"})]}),s.jsxs("div",{className:"p-4 flex-1 flex flex-col gap-2",children:[s.jsx("h3",{className:"text-lg font-black uppercase tracking-tight leading-tight line-clamp-2",children:te.title}),s.jsxs("div",{className:"mt-auto pt-4 space-y-2",children:[s.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono opacity-70",children:[s.jsx(Bs,{size:10}),ee.date]}),te.summary&&s.jsx("p",{className:"text-xs font-mono text-ash-gray line-clamp-2 border-l-2 border-ash-gray/30 pl-2",children:te.summary})]})]}),!G&&s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"}),G&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:s.jsx("div",{className:"bg-red-950/80 border border-red-800 text-red-500 px-3 py-1 text-xs font-mono font-bold uppercase rotate-12 backdrop-blur-sm",children:"Access Denied"})})]})},ee.id)})})]}):s.jsxs("div",{className:"flex h-full relative overflow-hidden bg-retro-paper text-zinc-950",children:[s.jsxs("aside",{className:`absolute md:relative z-20 h-full bg-ash-black border-r-4 border-ash-dark transition-all duration-300 ease-in-out flex flex-col ${P?"w-72 translate-x-0 shadow-2xl md:shadow-none":"w-0 -translate-x-full md:w-0 md:-translate-x-0 overflow-hidden"}`,children:[s.jsxs("div",{className:"p-4 border-b-2 border-ash-gray bg-ash-black text-ash-light flex justify-between items-center shrink-0",children:[s.jsxs("button",{onClick:()=>N("directory"),className:"flex items-center gap-2 text-xs font-mono font-bold hover:text-ash-gray transition-colors group",children:[s.jsx(Ka,{size:14,className:"group-hover:-translate-x-1 transition-transform"}),u==="en"?"DIRECTORY":"返回目录"]}),s.jsx("button",{onClick:()=>m(!1),className:"md:hidden text-ash-gray hover:text-ash-light",children:s.jsx(Ws,{size:16})})]}),s.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:dt.chapters.map((ee,B)=>{var he;const te=((he=ee.translations[u])==null?void 0:he.title)||ee.translations["zh-CN"].title,G=ee.status==="locked";return s.jsxs("button",{onClick:()=>{G||(w(B),window.innerWidth<768&&m(!1))},disabled:G,className:`w-full text-left p-4 text-xs font-mono border-b border-ash-dark transition-none group relative overflow-hidden ${B===f?"bg-ash-light text-ash-black":G?"bg-ash-dark/10 text-ash-gray cursor-not-allowed":"text-ash-gray hover:bg-ash-dark hover:text-ash-white"}`,children:[s.jsxs("div",{className:"relative z-10",children:[s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("div",{className:"font-bold truncate uppercase mb-1 max-w-[85%]",children:[B===f&&s.jsx("span",{className:"mr-2",children:">"}),te]}),G&&s.jsx("div",{className:"text-[10px] border border-current px-1 opacity-70",children:"LOCK"})]}),s.jsx("div",{className:"opacity-60",children:ee.date})]}),G&&s.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.2)_5px,rgba(0,0,0,0.2)_10px)] pointer-events-none z-0"})]},ee.id)})})]}),!P&&s.jsx("button",{onClick:()=>m(!0),className:"absolute top-4 left-4 z-10 p-2 bg-ash-black text-ash-light border-2 border-ash-light hover:bg-ash-light hover:text-ash-black shadow-hard",children:s.jsx(Tc,{size:20})}),s.jsx("main",{ref:x,className:"flex-1 overflow-y-auto scroll-smooth relative bg-ash-black",children:s.jsx("div",{className:"max-w-4xl mx-auto min-h-full bg-ash-black border-l-0 md:border-l-2 md:border-r-2 border-ash-dark/50 shadow-2xl relative animate-slide-in",children:T.status==="locked"?s.jsx("div",{className:"h-[80vh] flex flex-col items-center justify-center text-ash-gray p-8 text-center",children:s.jsxs("div",{className:"mb-6 p-6 border-4 border-dashed border-red-900/50 rounded-none bg-red-950/10",children:[s.jsx(qt,{size:64,className:"text-red-800 mb-4 mx-auto animate-pulse"}),s.jsx("h2",{className:"text-2xl font-black uppercase text-red-700 tracking-widest mb-2",children:"Access Denied"}),s.jsx("p",{className:"font-mono text-sm text-red-900/70",children:"ENCRYPTED_FILE // AUTH_LEVEL_MISSING"})]})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"px-8 py-12 lg:px-16 md:mt-0 border-b-4 border-double border-ash-gray bg-ash-black text-ash-light mt-12",children:s.jsxs(_e,{children:[s.jsxs("div",{className:"flex justify-between items-start mb-6 font-mono text-[10px] text-ash-gray uppercase tracking-widest",children:[s.jsxs("span",{children:["NOVA_ARCHIVE // ",T.id]}),s.jsxs("span",{children:["PG_INDEX: ",f+1]})]}),s.jsx("h1",{className:"text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight",children:A.title}),s.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-ash-gray bg-ash-dark inline-block px-3 py-1 border border-ash-gray",children:[s.jsx(Bs,{size:12}),s.jsx("span",{children:T.date})]})]})}),s.jsx("article",{className:"px-8 py-12 lg:px-16 max-w-none text-ash-light font-serif leading-loose tracking-wide",children:X(A.content)}),s.jsx("div",{className:"p-8 md:p-16 border-t-4 border-double border-ash-gray bg-ash-dark",children:s.jsxs("div",{className:"flex justify-between items-center gap-4",children:[s.jsxs("button",{onClick:ge,disabled:f===0,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:[s.jsx(Ws,{size:16})," PREV_FILE"]}),s.jsx("div",{className:"hidden md:block font-mono text-xs text-ash-gray",children:"- END OF RECORD -"}),s.jsxs("button",{onClick:le,disabled:f===dt.chapters.length-1,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:["NEXT_FILE ",s.jsx(Xa,{size:16})]})]})})]})},f)})]})},_f={id:"story-frag-rain-1",date:"档案记录: S-001",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (一) // 废墟",summary:"废弃的校区，久违的吉他话题，以及掩盖在日常下的暗流。",content:`[[BLUE::记忆提取中... 场景重构：废弃校区]]

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

Dusk: "...Oh? Finally talking shop? Let's go!"`}}},If={id:"story-frag-rain-2",date:"档案记录: S-002",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (二) // 揭露",summary:"厚重的气密门隔绝了通路，也锁住了那些关于“实验”的秘密。",content:`[[BLUE::记忆提取中... 场景重构：Nova Labs 内部实验室 - B区 (Sector B)]]

[[DIVIDER]]

伴随着液压泵沉重的嘶鸣声，厚重的防爆气密门缓缓向两侧滑开。

冷气扑面而来，夹杂着臭氧的味道。这里不是地下，而是位于世界外的 Nova Labs 核心科研区。裸露在混凝土墙外的通风管道、闪烁着绿光的旧式 CRT 监视器、以及远处大型主机发出的低频嗡鸣声……

这里的一切都充满了近现代(相对现实世界)工业科幻的冷硬质感。

零点：“欢迎来到‘异常材料实验室’——开玩笑的，这里是 B 区。”

零点熟练地在视网膜扫描仪前晃了一下，红光转绿。她今天穿着一身干练的科研工装，与平日的休闲打扮截然不同。

暮雨因为初来乍到，感到了些许不自在。他清瘦的身影在冷色调的灯光下显得有些单薄，随后掏出了怀表，静静的盯着看了几秒，放回原处。

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

暮雨因為初來乍到，感到了些許不自在。他清瘦的身影在冷色調的燈光下顯得有些單薄，隨後掏出了懷表，靜靜的盯著看了幾秒，放回原處。

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

Dusk felt a bit uneasy being a newcomer. His lean figure looked somewhat thin under the cold-toned lights. He took out his pocket watch, stared at it quietly for a few seconds, then put it back.

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

[[IMAGE::https://free.picui.cn/free/2025/12/08/6936e856897d6.png::PHOTO_ARCHIVE_M001]]`}}},Tf={id:"story-frag-rain-3",date:"档案记录: S-003",status:"published",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (三) // 托付",summary:"黄昏的吉他声掩盖了真相，怀表的滴答声倒数着离别。",content:`[[BLUE::记忆提取中... 场景重构：未完工观景台]]

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

零点：“哎？这不是你最宝贝的东西吗？你说过这是……”

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

零点静静地听着，金色的怀表在她手中折射着夕阳的光芒。

音乐声在风中飘荡，仿佛在诉说着那些无法言说的告别。

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

零點：「哎？這不是妳最寶貝的東西嗎？妳說過這是妳父母……」

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

零點靜靜地聽著，金色的懷表在她手中折射著夕陽的光芒。

音樂聲在風中飄盪，彷彿在訴說著那些無法言說的告別。

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

Point: "Eh? Isn't this your most treasured possession? You said this was your parents'..."

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

Point listened quietly, the gold pocket watch in her hand refracting the light of the setting sun.

The music floated in the wind, seemingly telling of those unspeakable farewells.

It was getting late, and the twilight was about to burn out.

[[BLUE::[DATA RECORD INTERRUPTED...]]] `}}},zf={id:"story-frag-rain-4",date:"档案记录: S-004",status:"locked",translations:{"zh-CN":{title:"那场仍未结束的零碎之雨 (四) // 交易",summary:"与虚空的交易，只为了那个必然的结局。",content:`[[BLUE::记忆提取中... 场景重构：深夜办公室]]

[[DIVIDER]]

深夜，办公室。

只有显示屏微弱的蓝光照亮着房间。零点已经趴在旁边的沙发上睡着了，那块金色的怀表依然被她紧紧握在手里。

暮雨坐在椅子上，静静地注视着她，随后转过头，看向房间里那片空无一物的黑暗角落。

暮雨：“出来吧。我知道你在听。”

空气中泛起一阵肉眼可见的涟漪，仿佛空间本身发生了扭曲。一个没有实体、仿佛由数据和阴影构成的存在逐渐显现。

Void：“……你比我想象的要敏锐，人类。”

暮雨：“关于那个‘结局’，我想通了。”

Void：“哦？你打算接受命运的安排吗？看着这个世界崩塌，看着她……随着世界一起湮灭？”

暮雨：“不。正因为不想看到那个结局，所以我才把你叫出来。我可不想看着她消失。”

暮雨站起身，直视着那个不可名状的存在。虽然他的身体在微微颤抖，但眼神却异常坚定，甚至嘴角带上了一丝无畏的笑意。

暮雨：“你一直想要一个‘容器’，对吧？一个能够承载你在这个维度力量，从而干涉现实的容器。”

Void：“零点是最完美的适配者。她的量子适应性是独一无二的。”

暮雨：“但如果她现在就承受你的力量，她会死。她的精神无法负荷那种层级的信息冲击。这种事我绝不允许。”

Void：“这是必要的代价。”

暮雨：“那……如果我来买单呢？”

Void 似乎停顿了一下，周围的涟漪变得剧烈起来。

Void：“你？你只是一个普通的观测者。你的身体会瞬间崩溃。”

暮雨：“不需要我的身体。我指的是……‘引导’。我可以作为你和她之间的缓冲层。我会让你进入她的身体，但我会用我的意识来构筑一道防火墙，过滤掉那些会摧毁她的信息流。”

Void：“你会为此付出什么，你知道吗？你的意识会被撕碎，你会成为她潜意识里的一抹幽灵，永远无法再以‘暮雨’的身份存在。”

暮雨回头看了一眼熟睡的零点。她睡得很安稳，嘴角还挂着一丝浅笑，似乎梦到了什么开心的事情。

暮雨：“这就是我的交易。”

暮雨：“尽管夺舍她吧，Void。用你的力量去拯救这个世界。但是……你必须替我保护好她的意识。这是条件。”

Void 沉默了许久。

Void：“……有趣的提案。凡人的自我牺牲……多么无趣又令人着迷的剧本。”

Void：“成交。”

黑色的阴影瞬间膨胀，吞没了整个房间。

暮雨最后一次看向零点，轻轻闭上了眼睛，脸上露出了往常那种温暖的笑容。

“晚安啦，零点。”

[[DANGER::【系统警告：检测到主要意识源置换……人格覆写中……】]]
[[DANGER::【暮雨 ID 下线】]]
[[BLUE::【Void ID 上线】]]`},"zh-TW":{title:"那場仍未結束的零碎之雨 (四) // 交易",summary:"與虛空的交易，只為了那個必然的結局。",content:`[[BLUE::記憶提取中... 場景重構：深夜辦公室]]

[[DIVIDER]]

深夜，辦公室。

只有顯示屏微弱的藍光照亮著房間。零點已經趴在旁邊的沙發上睡著了，那塊金色的懷表依然被她緊緊握在手裡。

暮雨坐在椅子上，靜靜地注視著她，隨後轉過頭，看向房間里那片空無一物的黑暗角落。

暮雨：「出來吧。我知道你在聽。」

空氣中泛起一陣肉眼可見的漣漪，彷彿空間本身發生了扭曲。一個沒有實體、彷彿由數據和陰影構成的存在逐漸顯現。

Void：「……你比我想像的要敏銳，人類。」

暮雨：「關於那個『結局』，我想通了。」

Void：「哦？你打算接受命運的安排嗎？看著這個世界崩塌，看著她……隨著世界一起湮滅？」

暮雨：「不。正因為不想看到那個結局，所以我才把你叫出來。我可不想看著她消失。」

暮雨站起身，直視著那個不可名狀的存在。雖然他的身體在微微顫抖，但眼神卻異常堅定，甚至嘴角帶上了一絲無畏的笑意。

暮雨：「你一直想要一個『容器』，對吧？一個能夠承載你在這個維度力量，從而干涉現實的容器。」

Void：「零點是最完美的適配者。她的量子適應性是獨一無二的。」

暮雨：「但如果她現在就承受你的力量，她會死。她的精神無法負荷那種層級的信息衝擊。這種事我絕不允許。」

Void：「這是必要的代價。」

暮雨：「那……如果我來買單呢？」

Void 似乎停頓了一下，周圍的漣漪變得劇烈起來。

Void：「你？你只是一個普通的觀測者。你的身體會瞬間崩潰。」

暮雨：「不需要我的身體。我指的是……『引導』。我可以作為你和她之間的緩衝層。我會讓你進入她的身體，但我會用我的意識來構築一道防火牆，過濾掉那些會摧毀她的信息流。」

Void：「你會為此付出什麼，你知道嗎？你的意識會被撕碎，你會成為她潛意識裡的一抹幽靈，永遠無法再以『暮雨』的身分存在。」

暮雨回頭看了一眼熟睡的零點。她睡得很安穩，嘴角還掛著一絲淺笑，似乎夢到了什麼開心的事情。

暮雨：「這就是我的交易。」

暮雨：「儘管奪舍她吧，Void。用你的力量去拯救這個世界。但是……你必須替我保護好她的意識。這是條件。」

Void 沉默了許久。

Void：「……有趣的提案。凡人的自我犧牲……多麼無趣又令人著迷的劇本。」

Void：「成交。」

黑色的陰影瞬間膨脹，吞沒了整個房間。

暮雨最後一次看向零點，輕輕閉上了眼睛，臉上露出了往常那種溫暖的笑容。

「晚安啦，零點。」

[[DANGER::【系統警告：檢測到主要意識源置換……人格覆寫中……】]]
[[DANGER::【暮雨 ID 下線】]]
[[BLUE::【Void ID 上線】]]`},en:{title:"The Fragmented Rain That Never Ended (Part IV) // Transaction",summary:"A deal with the Void, only for that inevitable ending.",content:`[[BLUE::Memory Extraction... Scene Reconstruction: Late Night Office]]

[[DIVIDER]]

Late night, office.

Only the faint blue light of the monitor illuminated the room. Point had fallen asleep on the sofa nearby, the golden pocket watch still tightly clutched in her hand.

Dusk sat in his chair, watching her quietly, then turned his head to look at the empty dark corner of the room.

Dusk: "Come out. I know you're listening."

A visible ripple appeared in the air, as if space itself was distorted. An entity without physical form, seemingly composed of data and shadows, gradually emerged.

Void: "...You are sharper than I imagined, human."

Dusk: "About that 'ending', I've thought it through."

Void: "Oh? Are you planning to accept the arrangement of fate? Watch this world collapse, watch her... annihilate along with the world?"

Dusk: "Nope. Precisely because I don't want to see that ending, that's why I called you. I'm not letting her disappear."

Dusk stood up and looked directly at the indescribable existence. Although his body was trembling slightly, his eyes were exceptionally firm, and there was even a fearless smile on his lips.

Dusk: "You've always wanted a 'vessel', right? A vessel that can carry your power in this dimension and interfere with reality."

Void: "Point is the perfect adapter. Her quantum adaptability is unique."

Dusk: "But if she bears your power now, she will die. Her mind cannot handle that level of information impact. I won't let that happen."

Void: "This is a necessary price."

Dusk: "Then... what if I foot the bill?"

Void seemed to pause, and the surrounding ripples became violent.

Void: "You? You are just an ordinary observer. Your body will collapse instantly."

Dusk: "I don't need my body. I mean... 'guidance'. I can act as a buffer layer between you and her. I will let you enter her body, but I will use my consciousness to build a firewall to filter out the information flow that would destroy her."

Void: "Do you know what you will pay for this? Your consciousness will be torn apart, and you will become a ghost in her subconscious, never able to exist as 'Dusk' again."

Dusk looked back at the sleeping Point. She slept peacefully, a slight smile on her lips, seemingly dreaming of something happy.

Dusk: "That's the deal."

Dusk: "Go ahead and possess her, Void. Use your power to save this world. But... you must protect her consciousness for me. That's the condition."

Void was silent for a long time.

Void: "...Interesting proposal. Mortal self-sacrifice... what a boring yet fascinating script."

Void: "Deal."

The black shadow expanded instantly, swallowing the entire room.

Dusk looked at Point for the last time, gently closed his eyes, and showed his usual warm smile.

"Goodnight, Point."

[[DANGER::[SYSTEM WARNING: PRIMARY CONSCIOUSNESS SOURCE DISPLACEMENT DETECTED... PERSONALITY OVERWRITE IN PROGRESS...]]]
[[DANGER::[DUSK ID OFFLINE]]]
[[BLUE::[VOID ID ONLINE]]]`}}},Rf={id:"story-coffee-crisis",date:"档案记录: S-005",status:"published",translations:{"zh-CN":{title:"咖啡机改造计划",summary:"芷漓觉得实验室的咖啡机效率太低，于是动手进行了“微调”。",content:`[[DIVIDER]]

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

Zeri: "...Is that really necessary?" (Calmly presses the button, causing the entire lab's lights to dim)`}}},Pf={id:"special-legacy-dusk",date:"F-6年34月13日",status:"locked",translations:{"zh-CN":{title:"legacy",summary:"数据流深处的一封未发送信件。发件人：D.雨",content:`[[DANGER::【系统提示：该文件已自动设置为只读状态】]]

       不知这段文字是谁在看，希望是点酱，因为我有话想对你说。很抱歉就这般不辞而别了，还是永别。

       我说谎了。那时对你说要去很远的地方,实际上是要离开人世 。如此说来倒是说得没错了，地狱确实很远啊(笑) 选择死亡的原因嘛.我和零空做了一笔交易,祂告诉我一切的结局，代价就是我去死。不要对零空心存芥蒂啊...这只是我的选择罢了。

       所以这封遗书是我在知晓一切前写下的,介时我大抵会用随身带的刺刀来亲手了却自己罢...说起来这把刀还是因为之前很喜欢那部叫《剃刀党》的电影，特地定制的。

       留给你的东西有两样：一个是我的吉他，你想弹的话可以试试去学,不想弹当个摆件也行。重要的是压力太大了就该好好释放;一个是怀表，当时我还跟个谜语人一样(笑)现在便告诉你:我在做记者时曾采访过一位作家，他叫宁思，我十分敬佩他那般智慧的学者。宁思把他的怀表送给了我，以作纪念。所以,这个怀表现在送给你,代表着宁静地思考。

       真的很高兴能认识到你，零点，多亏了你我才有机会知晓我的父母究竟为何而死，不过很可惜只能在这里和你道谢。很抱歉就这么死在你们的实验室里，我想X_bot应该会清理干净的吧。不管怎么样，点酱可要替我好好活下去，可以想我，但不要来找我（笑）

                                                             F-6年34月13日                                                                  
                                                                          D.雨`},"zh-TW":{title:"legacy",summary:"數據流深處的一封未發送信件。發件人：D.雨",content:`[[DANGER::【系統提示：該檔案為高危殘留數據，已自動隔離】]]

       不知這段文字是誰在看，希望是點醬，因為我有話想對妳說。很抱歉就這般不辭而別了，還是永別。

       我說謊了。那時對妳說要去很遠的地方,實際上是要離開人世 。如此說來倒是說得沒錯了，地獄確實很遠啊(笑) 選擇死亡的原因嘛.我和零空做了一筆交易,祂告訴我一切的結局，代價就是我去死。不要對零空心存芥蒂啊...這只是我的選擇罷了。

       所以這封遺書是我在知曉一切前寫下的,介時我大抵會用隨身帶的刺刀來親手了卻自己罷...說起來這把刀還是因為之前很喜歡那部叫《剃刀黨》的電影，特地定制的。

       留給妳的東西有兩樣：一個是我的吉他，妳想彈的話可以試試去學,不想彈當個擺件也行。重要的是壓力太大了就該好好釋放;一個是懷表，當時我還跟個謎語人一樣(笑)現在便告訴妳:我在做記者時曾採訪過一位作家，他叫寧思，我十分敬佩他那般智慧的學者。寧思把他的懷表送給了我，以作紀念。所以,這個懷表現在送給妳,代表著寧靜地思考。

       真的很高興能認識到妳，零點，多虧了妳我才有機會知曉我的父母究竟為何而死，不過很可惜只能在這裡和妳道謝。很抱歉就這麼死在你們的實驗室裡，我想X_bot應該會清理乾淨的吧。不管怎麼樣，點醬可要替我好好活下去，可以想我，但不要來找我（笑）

                                                             F-6年34月13日                                                                  
                                                                          D.雨`},en:{title:"legacy",summary:"An unsent letter deep in the data stream. Sender: D.Rain",content:`[[DANGER::[SYSTEM ALERT: HIGH-RISK RESIDUAL DATA. AUTOMATICALLY ISOLATED.] ]]

       I don't know who is reading this text, I hope it's Point-chan, because I have something to say to you. I'm sorry to leave without saying goodbye like this... or rather, goodbye forever.

       I lied. Back then I told you I was going to a place far away, but actually, I was leaving this world. In that sense, I wasn't wrong, Hell is indeed very far away (lol). As for the reason for choosing death... I made a deal with Void. He told me the ending of everything, and the price was my death. Don't hold a grudge against Void... this was just my choice.

       So this suicide note was written before I knew everything. By then, I will probably use the bayonet I carry with me to end myself with my own hands... Speaking of which, this knife was custom-made because I really liked that movie called "Peaky Blinders".

       I left you two things: one is my guitar. If you want to play, you can try to learn. If not, it's fine as a decoration. The important thing is that when the pressure is too high, you should release it properly; the other is the pocket watch. I was acting like a riddler back then (lol), so I'll tell you now: When I was a journalist, I interviewed a writer named Ning Si. I greatly admired a scholar of his wisdom. Ning Si gave me his pocket watch as a souvenir. So, I'm giving this pocket watch to you now, representing 'Peaceful Thinking'.

       I'm really glad to have met you, Point. Thanks to you, I had the chance to know why my parents died, but it's a pity I can only thank you here. I'm sorry to die in your lab like this, I guess X_bot will clean it up. Anyway, Point-chan, you must live well for me. You can miss me, but don't come looking for me (lol).

                                                             Year F-6, Month 34, Day 13                                                                  
                                                                          D.Rain`}}},yc=(f,w)=>({id:f,date:w,status:"locked",translations:{"zh-CN":{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"},"zh-TW":{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"},en:{title:"▞▞▞▞▞▞",content:"",summary:"FILE_CORRUPTED"}}}),Mf=[{id:"VOL_MEMORIES",title:"那场仍未结束的零碎之雨",titleEn:"The Fragmented Rain That Never Ended",status:"unlocked",chapters:[_f,If,Tf,zf,Pf]},{id:"VOL_DAILY",title:"时域日常",titleEn:"Time Line Daily",status:"unlocked",chapters:[Rf,yc("ERR_002","档案记录: X-002"),yc("ERR_003","档案记录: X-003")]},{id:"VOL_UNKNOWN",title:"▓▓▓▓▓▓",titleEn:"UNKNOWN_SECTOR",status:"corrupted",chapters:[]}],Lf=({volumes:f,onSelectVolume:w,onOpenCharModal:u,language:y,isLightTheme:b})=>s.jsxs("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:[s.jsxs("div",{className:"fixed top-0 left-0 w-full h-full pointer-events-none opacity-20",children:[s.jsx("div",{className:"absolute top-1/4 left-0 w-full h-px bg-ash-gray/50"}),s.jsx("div",{className:"absolute bottom-1/4 left-0 w-full h-px bg-ash-gray/50"}),s.jsx("div",{className:"absolute top-0 left-1/4 h-full w-px bg-ash-gray/50"}),s.jsx("div",{className:"absolute top-0 right-1/4 h-full w-px bg-ash-gray/50"})]}),s.jsxs("button",{onClick:u,className:"fixed bottom-24 right-4 md:absolute md:top-4 md:right-4 z-50 bg-ash-black border border-ash-gray p-3 text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all shadow-hard group",title:"Personnel Archive",children:[s.jsx(cf,{size:20}),s.jsx("span",{className:"absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-ash-dark text-ash-light text-[10px] font-mono px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-ash-gray hidden md:block",children:"PERSONNEL_DB"})]}),s.jsx("header",{className:"relative z-10 mb-16 text-center w-full max-w-2xl mx-auto mt-8 md:mt-4",children:s.jsxs("div",{className:"flex flex-col items-center gap-3",children:[s.jsx(qh,{size:40,className:"text-ash-light",strokeWidth:1}),s.jsx("h1",{className:"text-3xl md:text-5xl font-black text-ash-light uppercase tracking-tighter glitch-text-heavy","data-text":y==="en"?"SIDE_ARCHIVES":"支线档案库",children:y==="en"?"SIDE_ARCHIVES":"支线档案库"}),s.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono text-ash-gray border border-ash-gray/50 px-2 py-1 bg-ash-black/80",children:[s.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"STATUS: MOUNTED",s.jsx("span",{className:"mx-1",children:"|"}),"/VAR/LIB/MEMORIES/SIDE_STORIES"]})]})}),s.jsx("div",{className:"w-full max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-4 pb-20",children:f.map((N,P)=>{const m=N.status==="locked",x=N.status==="corrupted",E=b?"bg-red-50 border-red-300 text-red-700":"bg-red-950/20 border-red-900 text-red-500",k=b?"bg-zinc-200 border-zinc-300 text-zinc-500":"bg-ash-dark/20 border-ash-dark text-ash-gray",j=b?"bg-white border-zinc-300 text-zinc-800 hover:border-zinc-500 hover:shadow-lg":"bg-ash-black/90 border-ash-gray text-ash-light group-hover:border-ash-light group-hover:bg-ash-dark/80 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]";return s.jsx(_e,{delay:P*150,className:"w-full h-full",children:s.jsxs("button",{onClick:()=>{!m&&!x&&w(N)},disabled:m||x,className:`
                                    w-full h-64 relative group transition-all duration-300 transform hover:-translate-y-2
                                    flex flex-col text-left overflow-hidden
                                    ${x?"opacity-80":m?"opacity-60":"cursor-pointer"}
                                `,children:[s.jsxs("div",{style:{clipPath:"polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)"},className:`
                                        absolute inset-0 border-2
                                        ${x?E:m?k:j}
                                    `,children:[s.jsx("div",{className:`absolute inset-0 bg-transparent bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none ${b?"opacity-5":"opacity-20"}`}),s.jsxs("div",{className:"p-6 h-full flex flex-col relative z-20",children:[s.jsxs("div",{className:"flex justify-between items-start mb-auto",children:[s.jsx(Cc,{size:32,strokeWidth:1,className:x?"animate-pulse":""}),s.jsxs("div",{className:"text-[10px] font-mono border border-current px-1 opacity-70",children:["VOL_0",P+1]})]}),s.jsxs("div",{className:"space-y-1 mt-4",children:[s.jsx("h3",{className:`font-black text-xl md:text-2xl font-mono uppercase tracking-tight leading-none ${x?"blur-[1px]":""}`,children:y==="en"?N.titleEn:N.title}),s.jsx("div",{className:"text-[10px] font-mono opacity-50 uppercase tracking-widest",children:N.titleEn})]}),s.jsxs("div",{className:"mt-6 pt-4 border-t border-dashed border-current/30 flex justify-between items-end text-[10px] font-mono",children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("span",{children:["SIZE: ",N.chapters.length*128,"KB"]}),s.jsxs("span",{className:"flex items-center gap-1",children:["STATUS:",x?"ERR":m?"LCK":"RDY"]})]}),x?s.jsx(Cr,{size:16}):m?s.jsx(_r,{size:16}):s.jsx("div",{className:"w-16 h-2 bg-current opacity-20 relative",children:s.jsx("div",{className:"absolute left-0 top-0 h-full bg-current w-1/2"})})]})]})]}),!m&&!x&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${b?"border-zinc-800":"border-ash-light"}`}),s.jsx("div",{className:`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${b?"border-zinc-800":"border-ash-light"}`})]})]})},N.id)})})]}),Af=({volume:f,onBack:w,onSelectChapter:u,language:y,isLightTheme:b})=>s.jsx("div",{className:"h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center",children:s.jsxs("div",{className:"w-full max-w-3xl relative z-10 animate-fade-in mt-8 md:mt-0",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-8 border-b-2 border-ash-gray pb-4",children:[s.jsx("button",{onClick:w,className:"p-2 border border-ash-gray text-ash-gray hover:text-ash-light hover:border-ash-light hover:bg-ash-dark transition-all",children:s.jsx(Ka,{size:20})}),s.jsxs("div",{children:[s.jsxs("div",{className:"text-[10px] font-mono text-ash-gray",children:["ROOT / ",f.id]}),s.jsx("h2",{className:"text-2xl font-black text-ash-light uppercase tracking-tight",children:y==="en"?f.titleEn:f.title})]}),s.jsx("div",{className:"ml-auto hidden md:block",children:s.jsx(Hs,{size:24,className:"text-ash-dark animate-pulse"})})]}),s.jsx("div",{className:"space-y-3",children:f.chapters.map((N,P)=>{const m=N.status==="locked",x=N.translations[y]||N.translations["zh-CN"],E=N.id==="special-legacy-dusk";let k="";return E?k=b?"bg-red-50 border-red-500 text-red-900 shadow-[0_0_10px_rgba(220,38,38,0.3)]":"bg-red-950/20 border-red-700/50 text-red-500 shadow-[0_0_15px_rgba(185,28,28,0.2)]":m?k=b?"bg-zinc-100 border-zinc-300 text-zinc-400 opacity-60 cursor-not-allowed":"bg-ash-dark/20 border-ash-dark/50 text-ash-gray opacity-60 cursor-not-allowed":k=b?"bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-500 shadow-sm":"bg-ash-black/80 border-ash-dark/50 text-ash-light hover:border-ash-light hover:bg-ash-dark/40 shadow-hard-sm",s.jsx(_e,{delay:P*50,children:s.jsxs("button",{onClick:()=>{m||u(P)},disabled:m,className:`
                                        w-full flex items-center gap-4 p-4 border transition-all duration-200 group relative overflow-hidden
                                        ${k}
                                        ${E?"hover:scale-[1.01] hover:bg-red-900/10 cursor-not-allowed":""}
                                    `,children:[s.jsx("div",{className:`shrink-0 w-8 text-center font-mono text-xs ${E?"text-red-500 font-bold":"opacity-50"}`,children:E?"!!":String(P+1).padStart(2,"0")}),s.jsx("div",{className:`
                                        shrink-0 p-2 border transition-colors
                                        ${E?"bg-red-950 border-red-500 text-red-500 animate-pulse":m?"bg-transparent border-current opacity-50":b?"bg-zinc-100 border-zinc-200 group-hover:bg-zinc-800 group-hover:text-white group-hover:border-zinc-800":"bg-ash-dark/50 border-ash-gray/30 group-hover:border-ash-light group-hover:bg-ash-light group-hover:text-ash-black"}
                                    `,children:E?s.jsx(of,{size:16,fill:"currentColor"}):m?s.jsx(_r,{size:16}):s.jsx(Bs,{size:16})}),s.jsxs("div",{className:"flex-1 text-left relative",children:[s.jsx("div",{className:`font-bold font-mono text-sm md:text-base uppercase truncate ${E?"glitch-text-heavy tracking-widest":""}`,"data-text":x.title,children:x.title}),s.jsxs("div",{className:`text-[10px] font-mono flex items-center gap-2 ${E?"text-red-500/70":"opacity-50"}`,children:[s.jsx("span",{children:N.date}),E&&s.jsx("span",{className:"font-bold border border-red-500/50 px-1 bg-red-950/30",children:"LEGACY // RESTRICTED"}),!m&&!E&&s.jsxs("span",{className:"hidden md:inline",children:["| ",x.content.length*2," BYTES"]})]})]}),!m&&s.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:s.jsx(Xa,{size:16})}),E&&s.jsx("div",{className:"opacity-70",children:s.jsx(Cr,{size:16,className:"text-red-500"})}),!m&&!b&&!E&&s.jsx("div",{className:"absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none skew-x-12"}),E&&s.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(220,38,38,0.05)_10px,rgba(220,38,38,0.05)_20px)]"})]})},N.id)})})]})}),vc=({lines:f})=>{const[w,u]=D.useState(!1);return s.jsx(_e,{children:s.jsxs("div",{className:"my-10 border-l-4 border-fuchsia-600 bg-fuchsia-950/10 font-mono text-xs md:text-sm shadow-[0_0_15px_-3px_rgba(192,38,211,0.2)]",children:[s.jsxs("button",{onClick:()=>u(!w),className:"w-full text-left p-3 md:p-4 bg-fuchsia-950/20 hover:bg-fuchsia-900/30 text-fuchsia-300 font-bold flex items-center gap-3 transition-all group border-b border-fuchsia-500/20",children:[s.jsx("div",{className:`transition-transform duration-300 ${w?"rotate-90":""}`,children:s.jsx(Cr,{size:16})}),s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-1 md:gap-3",children:[s.jsx("span",{className:"animate-pulse tracking-widest text-fuchsia-400",children:">>> SYSTEM_INTERCEPT // VOID_SIDE"}),s.jsx("span",{className:"text-[10px] bg-fuchsia-900/50 px-1 border border-fuchsia-500/30 text-fuchsia-200/70",children:"SOURCE: UNKNOWN"})]})]}),s.jsx("div",{className:`transition-all duration-500 ease-in-out overflow-hidden ${w?"max-h-[1000px] opacity-100":"max-h-0 opacity-0"}`,children:s.jsx("div",{className:"p-4 md:p-6 text-fuchsia-100/90 space-y-2 leading-relaxed tracking-wide font-medium bg-black/20 backdrop-blur-sm",children:f.map((y,b)=>s.jsx("p",{className:"border-l border-fuchsia-500/20 pl-3 hover:border-fuchsia-500 hover:bg-fuchsia-500/5 transition-colors duration-300",children:y.replace(/0000\.2Void>>|【插入结束】|【插入結束】|\[INSERTION_END\]/g,"")},b))})})]})})},Df=({volume:f,initialChapterIndex:w,onBack:u,language:y,isLightTheme:b})=>{const[N,P]=D.useState(w),[m,x]=D.useState(!0),E=D.useRef(null);D.useEffect(()=>{window.innerWidth<768&&x(!1)},[]),D.useEffect(()=>{E.current&&(E.current.scrollTop=0)},[N]);const k=f.chapters[N],j=k.translations[y]||k.translations["zh-CN"],S=T=>{const A=B=>B.length===0?"":B.reduce((te,G,he)=>{if(he===0)return G;const Ie=B[he-1],ve=Ie[Ie.length-1],Me=G[0],Y=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ce=Y.test(ve),de=Y.test(Me);return ce||de?te+G:te+" "+G},""),L=T.split(`
`),W=[];let le=[],ge=!1,X=[];const ee=()=>{if(le.length>0){const B=A(le);let te="mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-ash-light transition-colors";B.startsWith("零点")||B.startsWith("Point")||B.startsWith("零點")?te=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]":B.startsWith("芷漓")||B.startsWith("Zeri")?te=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-pink-400 drop-shadow-[0_0_2px_rgba(244,114,182,0.4)]":B.startsWith("泽洛")||B.startsWith("Zelo")||B.startsWith("澤洛")?te=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 drop-shadow-[0_0_2px_rgba(96,165,250,0.4)]":B.startsWith("???")||B.startsWith("Void")||B.includes("void")||B.includes("Void")?te=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-zinc-900 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]":(B.startsWith("终端")||B.startsWith("TERMINAL")||B.startsWith("終端"))&&(te=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-emerald-700 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-emerald-500 font-bold"),W.push(s.jsx(_e,{children:s.jsx("p",{className:te,children:B})},`p-${W.length}`)),le=[]}};for(let B=0;B<L.length;B++){const te=L[B],G=te.trim(),he=G.includes("0000.2Void>>"),Ie=G.includes("【插入结束】")||G.includes("【插入結束】")||G.includes("[INSERTION_END]");if(he){ee(),ge=!0,X=[],X.push(te),Ie&&(ge=!1,W.push(s.jsx(vc,{lines:[...X]},`void-${B}`)),X=[]);continue}if(ge){X.push(te),Ie&&(ge=!1,W.push(s.jsx(vc,{lines:[...X]},`void-${B}`)),X=[]);continue}const ve=G.match(/^\[\[BLUE::(.*?)\]\]$/),Me=G.match(/^\[\[DANGER::(.*?)\]\]$/),Y=G==="[[DIVIDER]]",ce=/\[\[IMAGE::(.*?)::(.*?)\]\]/.test(G);if(ve||Me||Y||ce||!G){if(ee(),ve){const Se=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-600 font-bold":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-blue-400 font-bold";W.push(s.jsx(_e,{children:s.jsx("p",{className:Se,children:ve[1]})},`blue-${B}`))}else if(Me){const Se=b?"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-600 font-black animate-crash origin-left":"mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-red-500 font-black animate-crash origin-left";W.push(s.jsx(_e,{children:s.jsx("p",{className:Se,children:Me[1]})},`danger-${B}`))}else if(Y)W.push(s.jsx(_e,{children:s.jsxs("div",{className:"my-12 flex items-center justify-center gap-4 opacity-50 select-none",children:[s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"}),s.jsx(qt,{size:16,className:"text-ash-light animate-pulse"}),s.jsx("div",{className:"h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent"})]})},`div-${B}`));else if(ce){const Se=G.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);if(Se){const[Te,fe,M]=Se;W.push(s.jsx(_e,{className:"my-12 flex flex-col items-center w-full",children:s.jsxs("div",{className:"relative border-4 border-ash-light p-2 bg-ash-dark max-w-full shadow-hard",children:[s.jsx("img",{src:fe,alt:M,className:"relative max-h-[600px] w-auto object-cover block grayscale-[20%] hover:grayscale-0 transition-all duration-500"}),s.jsx("div",{className:"absolute inset-0 bg-halftone opacity-20 pointer-events-none"}),s.jsxs("div",{className:"absolute bottom-4 right-4 bg-ash-light text-ash-black px-3 py-1 text-[10px] font-mono font-bold border-2 border-ash-black flex items-center gap-2 uppercase",children:[s.jsx(eo,{size:12})," ",M]})]})},`img-${B}`))}}continue}le.push(G)}return ee(),W};return s.jsxs("div",{className:"flex h-full relative overflow-hidden bg-retro-paper text-zinc-950",children:[m&&s.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-[1px] z-10 md:hidden animate-fade-in",onClick:()=>x(!1)}),s.jsxs("aside",{className:`absolute md:relative z-20 h-full bg-ash-black border-r-4 border-ash-dark transition-all duration-300 ease-in-out flex flex-col shadow-2xl md:shadow-none ${m?"w-72 translate-x-0":"w-0 -translate-x-full md:w-0 md:-translate-x-0 overflow-hidden"}`,children:[s.jsxs("div",{className:"p-4 border-b-2 border-ash-gray bg-ash-black text-ash-light flex justify-between items-center shrink-0",children:[s.jsxs("button",{onClick:u,className:"flex items-center gap-2 text-xs font-mono hover:text-ash-gray transition-colors",children:[s.jsx(Ka,{size:14})," ",y==="en"?"FILE_LIST":"文件列表"]}),s.jsx("div",{className:"text-[10px] font-mono opacity-50 truncate max-w-[100px]",children:y==="en"?f.titleEn:f.title})]}),s.jsx("div",{className:"overflow-y-auto flex-1 p-0",children:f.chapters.map((T,A)=>{var le;const L=((le=T.translations[y])==null?void 0:le.title)||T.translations["zh-CN"].title,W=T.status==="locked";return s.jsxs("button",{onClick:()=>{W||(P(A),window.innerWidth<768&&x(!1))},disabled:W,className:`w-full text-left p-4 text-xs font-mono border-b border-ash-dark transition-none group relative overflow-hidden ${A===N?"bg-ash-light text-ash-black":W?"bg-ash-dark/10 text-ash-gray cursor-not-allowed":"text-ash-gray hover:bg-ash-dark hover:text-ash-white"}`,children:[s.jsx("div",{className:"relative z-10",children:s.jsxs("div",{className:"flex justify-between items-start",children:[s.jsxs("span",{className:"font-bold truncate uppercase max-w-[85%]",children:[A===N&&s.jsx("span",{className:"mr-2",children:">"}),L]}),W&&s.jsx(to,{size:12,className:"opacity-70"})]})}),W&&s.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.2)_5px,rgba(0,0,0,0.2)_10px)] pointer-events-none z-0"})]},T.id)})})]}),!m&&s.jsx("button",{onClick:()=>x(!0),className:"absolute top-4 left-4 z-10 p-2 bg-ash-black text-ash-light border-2 border-ash-light hover:bg-ash-light hover:text-ash-black shadow-hard",children:s.jsx(Tc,{size:20})}),s.jsx("main",{ref:E,className:"flex-1 overflow-y-auto scroll-smooth relative bg-ash-black",children:s.jsx("div",{className:"max-w-4xl mx-auto min-h-full bg-ash-black border-l-0 md:border-l-2 md:border-r-2 border-ash-dark/50 shadow-2xl relative animate-slide-in",children:k.status==="locked"?s.jsx("div",{className:"h-[80vh] flex flex-col items-center justify-center text-ash-gray p-8 text-center",children:s.jsxs("div",{className:"mb-6 p-6 border-4 border-dashed border-red-900/50 rounded-none bg-red-950/10 w-full max-w-md",children:[s.jsx(qt,{size:64,className:"text-red-800 mb-4 mx-auto animate-pulse"}),s.jsx("h2",{className:"text-2xl font-black uppercase text-red-700 tracking-widest mb-2",children:y==="en"?"DATA_CORRUPTED":"数据损坏"}),s.jsx("p",{className:"font-mono text-sm text-red-900/70 mb-6",children:"ERR_READ_SECTOR // UNRECOVERABLE"}),s.jsxs("div",{className:"border-t border-red-900/30 pt-4 w-full",children:[s.jsxs("div",{className:"flex items-center justify-center gap-2 text-red-500 font-mono text-xs animate-pulse",children:[s.jsx(ef,{size:14,className:"animate-spin"}),s.jsx("span",{children:y==="en"?"REPAIRING...":y==="zh-TW"?"正在修復中...":"正在修复中..."})]}),s.jsx("div",{className:"w-full bg-red-950/50 h-1 mt-2 overflow-hidden",children:s.jsx("div",{className:"h-full bg-red-800/60 w-1/3 animate-[pulse_1s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"px-8 py-12 lg:px-16 border-b-4 border-double border-ash-gray bg-ash-black text-ash-light mt-12",children:s.jsxs(_e,{children:[s.jsxs("div",{className:"flex justify-between items-start mb-6 font-mono text-[10px] text-ash-gray uppercase tracking-widest",children:[s.jsxs("span",{children:["SIDE_ARCHIVE // ",k.id]}),s.jsxs("span",{children:["FILE_INDEX: ",N+1]})]}),s.jsx("h1",{className:"text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight",children:j.title}),s.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-ash-gray bg-ash-dark inline-block px-3 py-1 border border-ash-gray",children:[s.jsx(Bs,{size:12}),s.jsx("span",{children:k.date})]})]})}),s.jsx("article",{className:"px-8 py-12 lg:px-16 max-w-none text-ash-light font-serif leading-loose tracking-wide",children:S(j.content)}),s.jsx("div",{className:"p-8 md:p-16 border-t-4 border-double border-ash-gray bg-ash-dark",children:s.jsxs("div",{className:"flex justify-between items-center gap-4",children:[s.jsxs("button",{onClick:()=>P(T=>Math.max(0,T-1)),disabled:N===0,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:[s.jsx(Ws,{size:16})," PREV"]}),s.jsxs("button",{onClick:()=>P(T=>Math.min(f.chapters.length-1,T+1)),disabled:N===f.chapters.length-1,className:"flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono",children:["NEXT ",s.jsx(Xa,{size:16})]})]})})]})},k.id)})]})},Of=({isOpen:f,onClose:w,language:u,isLightTheme:y})=>{const[b,N]=D.useState(Er[0].id);if(!f)return null;const P=Er.reduce((E,k)=>(E[k.group]||(E[k.group]=[]),E[k.group].push(k),E),{}),m=Er.find(E=>E.id===b)||Er[0],x=(m==null?void 0:m.translations[u])||(m==null?void 0:m.translations["zh-CN"]);return m?s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[2px] p-4 animate-fade-in",onClick:w,children:s.jsxs("div",{className:`w-full max-w-3xl border-2 shadow-2xl relative overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh] md:h-auto md:max-h-[85vh] ${y?"bg-white border-zinc-300":"bg-ash-black border-ash-dark"}`,onClick:E=>E.stopPropagation(),children:[s.jsx("button",{onClick:w,className:`absolute top-2 right-2 p-2 md:hidden z-50 ${y?"text-zinc-500 hover:text-black":"text-ash-gray hover:text-ash-light"}`,children:s.jsx(fc,{size:24})}),s.jsxs("div",{className:`w-full md:w-64 border-b-2 md:border-b-0 md:border-r-2 p-4 flex flex-col gap-2 overflow-y-auto shrink-0 no-scrollbar max-h-48 md:max-h-full ${y?"bg-zinc-50 border-zinc-200":"bg-ash-dark border-ash-gray/30"}`,children:[s.jsxs("div",{className:`text-[10px] font-mono uppercase mb-4 pb-2 border-b flex items-center gap-2 sticky top-0 z-10 ${y?"text-zinc-500 border-zinc-200 bg-zinc-50":"text-ash-gray border-ash-gray/30 bg-ash-dark"}`,children:[s.jsx(Sc,{size:12})," ROOT/PERSONNEL_DB"]}),Object.entries(P).map(([E,k])=>s.jsxs("div",{className:"mb-2",children:[s.jsxs("div",{className:`flex items-center gap-2 text-[10px] font-bold mb-1 px-1 ${y?"text-zinc-600":"text-ash-light/70"}`,children:[s.jsx("span",{className:"opacity-50",children:"├─"}),s.jsx(Cc,{size:10,className:"opacity-50"}),E]}),s.jsx("div",{className:`flex flex-col border-l border-dashed ml-3 pl-2 gap-1 py-1 ${y?"border-zinc-300":"border-ash-gray/20"}`,children:k.map(j=>{const S=j.translations[u].name,T=b===j.id;let A="";return y?A=T?"text-black bg-zinc-200 font-bold pl-3":"text-zinc-500 hover:text-black hover:bg-zinc-100 hover:pl-3":A=T?"text-ash-light bg-ash-gray/20 font-bold pl-3":"text-ash-gray hover:text-ash-light hover:bg-ash-gray/10 hover:pl-3",s.jsxs("button",{onClick:()=>N(j.id),className:`text-left text-xs font-mono py-1 px-2 flex items-center gap-2 transition-all duration-200 relative group/item ${A}`,children:[s.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${j.isLocked?"bg-red-500/50":"bg-green-500/50"} ${T?"animate-pulse":""}`}),s.jsx("span",{className:"truncate",children:S}),j.isLocked&&s.jsx(_r,{size:8,className:"ml-auto opacity-50"}),T&&s.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-0.5 ${y?"bg-black":"bg-ash-light"}`})]},j.id)})})]},E))]}),s.jsxs("div",{className:`flex-1 overflow-y-auto p-6 md:p-8 relative ${y?"bg-white":"bg-ash-black"}`,children:[s.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-5 pointer-events-none",children:s.jsx(Ic,{size:200,strokeWidth:1})}),s.jsx("button",{onClick:w,className:`absolute top-2 right-2 p-2 hidden md:block z-20 ${y?"text-zinc-400 hover:text-zinc-900":"text-ash-gray hover:text-ash-light"}`,children:s.jsx(fc,{size:20})}),m.isLocked?s.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center opacity-80 min-h-[200px]",children:[s.jsxs("div",{className:`border p-8 max-w-xs relative ${y?"border-red-200 bg-red-50":"border-red-900/50 bg-red-950/10"}`,children:[s.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-t border-l border-red-800"}),s.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 border-t border-r border-red-800"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-800"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-800"}),s.jsx(to,{size:48,className:"text-red-800 mx-auto mb-4 animate-pulse"}),s.jsx("h2",{className:"text-xl font-black text-red-700 uppercase tracking-widest mb-1",children:"ACCESS DENIED"}),s.jsx("p",{className:"text-[10px] font-mono text-red-900 uppercase",children:"Encrypted File // Auth Missing"})]}),s.jsxs("div",{className:`mt-8 font-mono text-xs ${y?"text-zinc-400":"text-ash-gray/50"}`,children:[">"," ID: ",m.id.toUpperCase(),s.jsx("br",{}),">"," STATUS: LOCKED"]})]}):s.jsxs("div",{className:"relative z-10 space-y-6 animate-fade-in pt-4 md:pt-0",children:[s.jsxs("div",{className:`border-b pb-4 ${y?"border-zinc-200":"border-ash-gray/30"}`,children:[s.jsx("h2",{className:`text-2xl md:text-3xl font-black uppercase tracking-tighter mb-1 ${y?"text-zinc-900":"text-ash-light"}`,children:x.name}),s.jsxs("div",{className:`flex flex-wrap items-center gap-2 text-xs font-mono ${y?"text-zinc-500":"text-ash-gray"}`,children:[s.jsx("span",{className:`px-1 border ${y?"bg-zinc-100 border-zinc-300 text-zinc-700":"text-ash-light bg-ash-dark border-ash-gray/50"}`,children:x.enName}),s.jsxs("span",{children:["// ",x.role]}),s.jsxs("span",{className:"ml-auto opacity-50",children:["ID: ",m.id.toUpperCase()]})]})]}),s.jsx("div",{className:"flex flex-wrap gap-2",children:x.tags.map(E=>s.jsxs("span",{className:`px-2 py-1 border rounded-full text-[10px] font-mono ${y?"border-zinc-300 text-zinc-600":"border-ash-gray/50 text-ash-gray"}`,children:["#",E]},E))}),x.quote&&s.jsxs("div",{className:`border-l-2 pl-3 py-1 text-sm italic font-serif ${y?"border-zinc-400 text-zinc-600":"border-ash-light text-ash-light/80"}`,children:['"',x.quote,'"']}),s.jsx("div",{className:`space-y-4 text-sm font-mono leading-relaxed border-t border-dashed pt-4 pb-8 md:pb-0 ${y?"text-zinc-700 border-zinc-200":"text-ash-gray/90 border-ash-gray/30"}`,children:x.description.map((E,k)=>{const j=E.split("**");return s.jsx("div",{className:E.startsWith("•")||E.startsWith("> ")?"pl-4":"",children:j.map((S,T)=>T%2===1?s.jsx("span",{className:`font-bold px-1 ${y?"bg-zinc-200 text-black":"text-ash-light bg-ash-dark/50"}`,children:S},T):S)},k)})})]})]})]})}):null},Vf=({onComplete:f,language:w})=>{const[u,y]=D.useState(0);D.useEffect(()=>{const N=setTimeout(()=>y(1),500),P=setTimeout(()=>y(2),2e3),m=setTimeout(()=>y(3),3500),x=setTimeout(f,4e3);return()=>{clearTimeout(N),clearTimeout(P),clearTimeout(m),clearTimeout(x)}},[f]);const b={"zh-CN":{accessing:"访问记忆扇区...",decompressing:"解压碎片数据",syncing:"神经同步中",complete:"重构完成"},"zh-TW":{accessing:"訪問記憶扇區...",decompressing:"解壓碎片數據",syncing:"神經同步中",complete:"重構完成"},en:{accessing:"ACCESSING_MEMORY_SECTOR...",decompressing:"DECOMPRESSING_FRAGMENTS",syncing:"NEURAL_SYNC_IN_PROGRESS",complete:"RECONSTRUCTION_COMPLETE"}}[w];return s.jsxs("div",{className:"fixed inset-0 z-[99999] bg-ash-black text-ash-light overflow-hidden flex flex-col items-center justify-center font-mono cursor-none",children:[s.jsx("button",{onClick:f,className:"absolute top-4 right-4 z-[100000] text-[10px] font-mono border border-blue-400/30 text-blue-400 px-2 py-1 hover:bg-blue-400 hover:text-black transition-colors opacity-70 hover:opacity-100 cursor-pointer",children:"[SKIP_DIVE]"}),s.jsx("div",{className:`absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black transition-opacity duration-1000 ${u>0?"opacity-100":"opacity-0"}`}),s.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-30",children:Array.from({length:20}).map((N,P)=>s.jsx("div",{className:"absolute top-[-100%] text-[10px] text-blue-500/50 writing-vertical-rl animate-data-rain",style:{left:`${Math.random()*100}%`,animationDuration:`${1+Math.random()*2}s`,animationDelay:`${Math.random()*1}s`,fontSize:`${10+Math.random()*8}px`},children:Math.random()>.5?"010101":"A9F3C2"},P))}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-8",children:[s.jsxs("div",{className:"relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center",children:[u>=1&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"absolute inset-0 border border-blue-500/30 rounded-full animate-ping",style:{animationDuration:"2s"}}),s.jsx("div",{className:"absolute inset-0 border border-cyan-400/20 rounded-full animate-ping",style:{animationDuration:"2s",animationDelay:"0.5s"}})]}),s.jsxs("div",{className:`transition-all duration-700 ${u===2?"scale-125 text-white":"scale-100 text-blue-400"}`,children:[u===0&&s.jsx(Ja,{size:48,className:"animate-pulse"}),u===1&&s.jsx(Gh,{size:48,className:"animate-bounce"}),u>=2&&s.jsx(Ec,{size:64})]})]}),s.jsxs("div",{className:"text-center space-y-2",children:[s.jsxs("div",{className:"text-xl md:text-3xl font-black uppercase tracking-widest text-blue-200",children:[u===0&&b.accessing,u===1&&b.decompressing,u>=2&&b.syncing]}),s.jsx("div",{className:"w-48 md:w-64 h-1 bg-blue-900/50 mx-auto mt-4 overflow-hidden",children:s.jsx("div",{className:"h-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all duration-300 ease-linear",style:{width:`${u/3*100}%`}})}),s.jsxs("div",{className:"text-[10px] text-blue-500/60 font-mono mt-1",children:["SECTOR_MEM // ",u*33,"%"]})]})]}),s.jsx("div",{className:`absolute inset-0 bg-white pointer-events-none transition-opacity duration-500 ${u===3?"opacity-100":"opacity-0"}`})]})},Ff=({language:f,isLightTheme:w})=>{const[u,y]=D.useState("volumes"),[b,N]=D.useState(null),[P,m]=D.useState(0),[x,E]=D.useState(!1),[k,j]=D.useState(!1),S=L=>{N(L),j(!0)},T=()=>{j(!1),y("chapters")},A=L=>{m(L),y("reader")};return k?s.jsx(Vf,{onComplete:T,language:f}):u==="volumes"?s.jsxs(s.Fragment,{children:[s.jsx(Lf,{volumes:Mf,onSelectVolume:S,onOpenCharModal:()=>E(!0),language:f,isLightTheme:w}),s.jsx(Of,{isOpen:x,onClose:()=>E(!1),language:f,isLightTheme:w})]}):u==="chapters"&&b?s.jsx(Af,{volume:b,onBack:()=>{N(null),y("volumes")},onSelectChapter:A,language:f,isLightTheme:w}):u==="reader"&&b?s.jsx(Df,{volume:b,initialChapterIndex:P,onBack:()=>y("chapters"),language:f,isLightTheme:w}):null},Uf=({onComplete:f,isNormalBoot:w=!1,language:u})=>{const[y,b]=D.useState([]),[N,P]=D.useState("BIOS");return D.useEffect(()=>{const m=u==="zh-CN"?">> 提示：开启暗黑模式阅读体验更佳":u==="zh-TW"?">> 提示：開啟暗黑模式閱讀體驗更佳":">> TIP: DARK MODE RECOMMENDED FOR BEST EXPERIENCE";if(w){const k=["NOVA_BIOS v.3.1.4 (STABLE)","VERIFYING_INTEGRITY... OK","LOADING_USER_PROFILE... FOUND",m,"CONNECTING_TO_ARCHIVE... ESTABLISHED","DECRYPTING_DATA_STREAMS...","WELCOME_BACK_OPERATOR."];let j=0;k.forEach(S=>{j+=150+Math.random()*100,setTimeout(()=>{b(T=>[...T,S])},j)}),setTimeout(f,j+800);return}const x=["NOVA_BIOS v.0.0.1a (LEGACY)","CHECKING_MEM... OK","CHECKING_CPU... OK","LOADING_KERNEL...","MOUNTING_VIRTUAL_DRIVES..."];let E=0;x.forEach((k,j)=>{E+=Math.random()*200,setTimeout(()=>{b(S=>[...S,k])},E)}),setTimeout(()=>{P("ERROR");const k=["CRITICAL_ERROR: SECTOR 0x00F21 CORRUPTED","KERNEL_PANIC: UNEXPECTED_INTERRUPT","REALITY_ANCHOR... LOST","ATTEMPTING_DUMP...","DUMP_FAILED.","SYSTEM_HALTED."];let j=0;k.forEach((S,T)=>{j+=150,setTimeout(()=>{b(A=>[...A,`>> ${S}`])},j)})},E+500),setTimeout(()=>{P("RECOVERY"),b([]);const k=["INITIATING_SAFE_MODE...","BYPASSING_DAMAGED_SECTORS...","LOADING_BACKUP_CONFIG...",m,"RESTORING_USER_INTERFACE...","PLEASE_CONFIGURE_SYSTEM_PARAMETERS."];let j=0;k.forEach(S=>{j+=800,setTimeout(()=>{b(T=>[...T,S])},j)}),setTimeout(f,j+1e3)},E+2500)},[f,w,u]),N==="ERROR"?s.jsxs("div",{className:"h-screen w-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden animate-crash relative z-50",children:[s.jsx("div",{className:"absolute inset-0 bg-red-900/20 z-0"}),s.jsx(Cr,{size:128,className:"text-red-500 mb-8 animate-ping"}),s.jsx("h1",{className:"text-6xl md:text-9xl font-black text-red-500 glitch-text-heavy mb-4","data-text":"FATAL_ERROR",children:"FATAL_ERROR"}),s.jsx("div",{className:"font-mono text-red-400 text-sm md:text-xl text-center max-w-2xl space-y-1",children:y.slice(-6).map((m,x)=>s.jsx("div",{className:"bg-red-950/50 px-2",children:m},x))}),s.jsx("div",{className:"mt-12 w-full max-w-md h-2 bg-red-900 overflow-hidden",children:s.jsx("div",{className:"h-full bg-red-500 w-full animate-[glitch_0.2s_infinite]"})})]}):s.jsxs("div",{className:`h-screen w-screen bg-black text-green-500 p-8 font-mono text-xs md:text-sm overflow-hidden flex flex-col justify-end z-50 ${N==="RECOVERY"?"text-amber-500":""}`,children:[s.jsxs("div",{className:"mb-auto opacity-50 flex items-center gap-4",children:[w?s.jsx(Qh,{className:"text-green-500"}):N==="BIOS"?s.jsx(Hs,{className:"animate-pulse"}):s.jsx(zc,{className:"animate-spin"}),s.jsxs("span",{children:["NOVA_LABS_TERMINAL_ACCESS // ",w?"NORMAL_BOOT":N]})]}),s.jsxs("div",{className:"space-y-1 w-full max-w-4xl mx-auto",children:[y.map((m,x)=>m.includes("开启暗黑模式")||m.includes("開啟暗黑模式")||m.includes("DARK MODE RECOMMENDED")?s.jsx("div",{className:"animate-fade-in my-6 w-full text-center",children:s.jsx("div",{className:"inline-block px-4 py-2 border-y-2 border-dashed border-amber-500 bg-amber-900/20 text-amber-400 text-sm md:text-lg font-bold tracking-widest animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.3)]",children:m.replace(/^>>\s*/,"")})},x):s.jsxs("div",{className:"animate-fade-in break-words",children:[s.jsxs("span",{className:"opacity-50 mr-2",children:["[",new Date().toLocaleTimeString(),"]"]}),m]},x)),s.jsx("div",{className:"h-4 w-3 bg-current animate-pulse inline-block mt-2"})]}),N==="RECOVERY"&&s.jsx("div",{className:"absolute inset-0 pointer-events-none border-[20px] border-amber-900/20 animate-pulse"})]})},Wf=({onComplete:f,language:w,setLanguage:u,crtEnabled:y,setCrtEnabled:b,isLightTheme:N,setIsLightTheme:P,bgmPlaying:m,setBgmPlaying:x,bgmVolume:E,setBgmVolume:k})=>{const[j,S]=D.useState(0),[T,A]=D.useState(!1),[L,W]=D.useState(0),le={"zh-CN":{title:"系统恢复控制台",subtitle:"检测到非核心设置丢失。请重新配置用户偏好。",langSelect:"选择界面语言 // SELECT_LANGUAGE",visuals:"视觉子系统",audio:"音频子系统",theme:"主题模式",continue:"应用设置",reboot:"重新启动系统",safeMode:"安全模式已激活",back:"返回",rebooting:"正在重启系统...",applying:"应用配置..."},"zh-TW":{title:"系統恢復控制台",subtitle:"檢測到非核心設置丟失。請重新配置用戶偏好。",langSelect:"選擇界面語言 // SELECT_LANGUAGE",visuals:"視覺子系統",audio:"音頻子系統",theme:"主題模式",continue:"應用設置",reboot:"重新啟動系統",safeMode:"安全模式已激活",back:"返回",rebooting:"正在重啟系統...",applying:"應用配置..."},en:{title:"SYSTEM_RECOVERY_CONSOLE",subtitle:"NON-CORE SETTINGS CORRUPTION DETECTED. RECONFIGURE PREFERENCES.",langSelect:"SELECT LANGUAGE",visuals:"VISUAL_SUBSYSTEM",audio:"AUDIO_SUBSYSTEM",theme:"THEME_MODE",continue:"APPLY_SETTINGS",reboot:"REBOOT_SYSTEM",safeMode:"SAFE_MODE_ACTIVE",back:"BACK",rebooting:"SYSTEM_REBOOT_INITIATED...",applying:"WRITING_CONFIG..."}}[w],ge=()=>{A(!0);let X=0;const ee=setInterval(()=>{X+=Math.random()*5,X>100&&(X=100,clearInterval(ee),setTimeout(f,500)),W(X)},100)};return s.jsxs("div",{className:"min-h-screen bg-zinc-950 text-amber-500 font-mono p-6 flex flex-col items-center justify-center relative overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"}),s.jsx("div",{className:"absolute top-0 left-0 w-full h-2 bg-amber-500/20 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-full h-2 bg-amber-500/20 animate-pulse"}),s.jsxs("div",{className:"max-w-2xl w-full border-2 border-amber-600/50 bg-black/80 backdrop-blur-sm p-8 shadow-[0_0_20px_rgba(245,158,11,0.2)] relative animate-slide-in",children:[s.jsxs("div",{className:"absolute -top-3 left-4 bg-black px-2 text-amber-500 font-bold border border-amber-600/50 flex items-center gap-2",children:[s.jsx(to,{size:14,className:"animate-pulse"}),le.safeMode]}),s.jsxs("header",{className:"mb-10 text-center border-b border-dashed border-amber-800 pb-6",children:[s.jsx("h1",{className:"text-3xl font-black tracking-tighter mb-2 text-amber-500 glitch-text-heavy","data-text":le.title,children:le.title}),s.jsx("p",{className:"text-amber-700 text-xs md:text-sm uppercase tracking-widest",children:le.subtitle})]}),T?s.jsx("div",{className:"animate-fade-in py-12 flex flex-col items-center justify-center w-full",children:s.jsxs("div",{className:"w-full max-w-md space-y-2 mb-8",children:[s.jsxs("div",{className:"flex justify-between text-xs font-mono uppercase text-amber-500/80",children:[s.jsx("span",{children:le.rebooting}),s.jsxs("span",{children:[Math.floor(L),"%"]})]}),s.jsx("div",{className:"h-4 bg-amber-900/30 border border-amber-800 p-0.5",children:s.jsx("div",{className:"h-full bg-amber-500 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(245,158,11,0.5)]",style:{width:`${L}%`},children:s.jsx("div",{className:"w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_75%,transparent_75%,transparent)] bg-[length:10px_10px]"})})}),s.jsx("div",{className:"text-[10px] text-amber-700 font-mono h-4",children:L<30?"> KILLING_PROCESSES...":L<60?"> FLUSHING_MEMORY_BUFFERS...":L<90?"> WRITING_NEW_CONFIG...":"> STARTING_KERNEL..."})]})}):s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:`transition-opacity duration-500 ${j===0?"opacity-100":"opacity-50 blur-[1px] pointer-events-none"}`,children:[s.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-4 uppercase flex items-center gap-2",children:[s.jsx(Sr,{size:14})," ",le.langSelect]}),s.jsx("div",{className:"grid grid-cols-3 gap-4",children:["zh-CN","zh-TW","en"].map(X=>s.jsx("button",{onClick:()=>{u(X),S(1)},className:`py-4 border-2 font-bold text-lg transition-all ${w===X?"border-amber-500 bg-amber-500/10 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]":"border-amber-900/50 text-amber-800 hover:border-amber-700 hover:text-amber-600"}`,children:X==="en"?"ENGLISH":X==="zh-CN"?"简体中文":"繁體中文"},X))})]}),j>=1&&s.jsxs("div",{className:"animate-fade-in space-y-6",children:[s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-2 uppercase flex items-center gap-2",children:[s.jsx(Ha,{size:14})," ",le.visuals]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(Ga,{value:y,onChange:b,isSetupMode:!0,language:w}),s.jsx(Za,{isSetupMode:!0,language:w}),s.jsx(Ya,{value:N,onChange:P,isSetupMode:!0})]})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-bold text-amber-600 mb-2 uppercase flex items-center gap-2",children:[s.jsx(Pc,{size:14})," ",le.audio]}),s.jsx($a,{isSetupMode:!0,isPlaying:m,onToggle:()=>x(!m),volume:E,onVolumeChange:k}),s.jsxs("p",{className:"text-[10px] text-amber-800 mt-2 leading-tight",children:["* ",w==="en"?"Audio hardware detected. Enable for immersion.":"检测到音频硬件。建议开启以获得沉浸体验。"]})]})]}),s.jsxs("div",{className:"pt-6 mt-6 border-t border-dashed border-amber-800 flex justify-between items-center",children:[s.jsxs("button",{onClick:()=>S(0),className:"group px-4 py-2 text-amber-800 hover:text-amber-500 font-mono font-bold text-xs uppercase flex items-center gap-2 transition-colors",children:[s.jsx(Ws,{size:16,className:"group-hover:-translate-x-1 transition-transform"}),le.back]}),s.jsx("button",{onClick:ge,className:"group relative px-8 py-3 bg-amber-500 text-black font-bold font-mono uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-[4px_4px_0_rgba(70,20,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",children:s.jsxs("span",{className:"flex items-center gap-2",children:[le.reboot," ",s.jsx(Ba,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})})]})]})]}),s.jsx("div",{className:"absolute bottom-2 right-2 text-[10px] text-amber-900 font-mono",children:"ERR_CODE: 0x88492 // RECOVERY_MODE"})]})]})},Bf=()=>{const[f,w]=D.useState({x:0,y:0}),[u,y]=D.useState(!1),[b,N]=D.useState(!1),[P,m]=D.useState(!1);return D.useEffect(()=>{const x=window.matchMedia("(pointer: fine)");if((T=>{T.matches?m(!0):m(!1)})(x),x.matches&&m(!0),!x.matches)return;const k=T=>{w({x:T.clientX,y:T.clientY});let A=T.target;if(A&&A.nodeType===Node.TEXT_NODE&&(A=A.parentElement),!A||A.nodeType!==1){y(!1);return}const L=A;try{const le=window.getComputedStyle(L).cursor==="pointer"||L.tagName==="BUTTON"||L.tagName==="A"||L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.tagName==="SELECT"||L.closest("button")!==null||L.closest("a")!==null;y(le)}catch{y(!1)}},j=()=>N(!0),S=()=>N(!1);return window.addEventListener("mousemove",k),window.addEventListener("mousedown",j),window.addEventListener("mouseup",S),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("mousedown",j),window.removeEventListener("mouseup",S)}},[]),P?s.jsx("div",{className:"fixed top-0 left-0 pointer-events-none z-[99999] text-white mix-blend-difference",style:{transform:`translate3d(${f.x}px, ${f.y}px, 0)`},children:s.jsx("div",{className:`transition-transform duration-100 ease-out ${b?"scale-75":"scale-100"}`,children:u?s.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2",children:s.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:"origin-center animate-[spin_8s_linear_infinite]",children:[s.jsx("path",{d:"M4 4H9M4 4V9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M20 4H15M20 4V9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M4 20H9M4 20V15",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M20 20H15M20 20V15",stroke:"currentColor",strokeWidth:"1.5"})]}),s.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"}),s.jsx("g",{className:"origin-center opacity-50",children:s.jsx("path",{d:"M12 7V9M12 15V17M7 12H9M15 12H17",stroke:"currentColor",strokeWidth:"1"})})]})}):s.jsx("div",{className:"-translate-x-[2px] -translate-y-[2px]",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]",children:s.jsx("path",{d:"M2 2L9 19L12.5 11.5L20 8L2 2Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})})})}):null},bc="nova_labs_config_v2",wc={language:"zh-CN",crtEnabled:!0,isLightTheme:!1,setupCompleted:!1,bgmPlaying:!1,bgmVolume:.06},Hf=()=>{const w=(()=>{try{const Y=localStorage.getItem(bc);if(Y)return{...wc,...JSON.parse(Y)}}catch(Y){console.warn("Failed to load config",Y)}return wc})(),[u,y]=D.useState("BOOT"),[b,N]=D.useState("home"),[P,m]=D.useState(0),[x,E]=D.useState(!1),[k,j]=D.useState(w.language),[S,T]=D.useState(w.crtEnabled),[A,L]=D.useState(w.isLightTheme),[W,le]=D.useState(w.setupCompleted),[ge,X]=D.useState(w.bgmPlaying),[ee,B]=D.useState(w.bgmVolume);D.useEffect(()=>{const Y={language:k,crtEnabled:S,isLightTheme:A,setupCompleted:W,bgmPlaying:ge,bgmVolume:ee};localStorage.setItem(bc,JSON.stringify(Y))},[k,S,A,W,ge,ee]);const te=()=>{y(W?"READY":"SETUP")},G=()=>{le(!0),y("READY")},he=Y=>{N(Y)},Ie=()=>{E(!0)},ve=()=>{N("reader"),E(!1)},Me=Y=>{Y==="reader"?Ie():N(Y)};return s.jsxs(s.Fragment,{children:[s.jsx(Bf,{}),u==="BOOT"&&s.jsx(Uf,{onComplete:te,isNormalBoot:W,language:k}),u==="SETUP"&&s.jsx(Wf,{onComplete:G,language:k,setLanguage:j,crtEnabled:S,setCrtEnabled:T,isLightTheme:A,setIsLightTheme:L,bgmPlaying:ge,setBgmPlaying:X,bgmVolume:ee,setBgmVolume:B}),x&&s.jsx(Ac,{onComplete:ve,language:k}),u==="READY"&&s.jsxs("div",{className:"flex flex-col lg:flex-row h-screen supports-[height:100dvh]:h-[100dvh] bg-ash-black text-ash-light overflow-hidden font-mono selection:bg-ash-light selection:text-ash-black cursor-none",children:[s.jsx("div",{className:"noise-overlay"}),s.jsx("div",{className:"absolute inset-0 z-0 bg-grid-hard pointer-events-none opacity-50"}),s.jsx(ff,{activeTab:b,setActiveTab:he,language:k,setLanguage:j,crtEnabled:S,setCrtEnabled:T,isLightTheme:A,setIsLightTheme:L,bgmPlaying:ge,setBgmPlaying:X,bgmVolume:ee,setBgmVolume:B}),s.jsx("main",{className:"flex-1 h-full overflow-hidden relative z-10 border-l-2 border-ash-dark",children:s.jsxs("div",{className:"h-full overflow-y-auto pb-20 lg:pb-0 bg-ash-black/90 animate-slide-in",children:[b==="home"&&s.jsx(pf,{onNavigate:Me,language:k,setLanguage:j}),b==="characters"&&s.jsx(Ef,{language:k}),b==="database"&&s.jsx(Sf,{language:k}),b==="reader"&&s.jsx(Cf,{currentIndex:P,onChapterChange:m,language:k,isLightTheme:A}),b==="sidestories"&&s.jsx(Ff,{language:k,isLightTheme:A})]},b)})]})]})},Dc=document.getElementById("root");if(!Dc)throw new Error("Could not find root element to mount to");const $f=Bh.createRoot(Dc);$f.render(s.jsx(Nc.StrictMode,{children:s.jsx(Hf,{})}));
