(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function og(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},La={},wu={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Ox(){if(Gp)return Et;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function _(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(w,V,ce){this.props=w,this.context=V,this.refs=b,this.updater=ce||M}y.prototype.isReactComponent={},y.prototype.setState=function(w,V){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,V,"setState")},y.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function x(){}x.prototype=y.prototype;function U(w,V,ce){this.props=w,this.context=V,this.refs=b,this.updater=ce||M}var P=U.prototype=new x;P.constructor=U,E(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,$=Object.prototype.hasOwnProperty,B={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function G(w,V,ce){var j,ee={},ue=null,te=null;if(V!=null)for(j in V.ref!==void 0&&(te=V.ref),V.key!==void 0&&(ue=""+V.key),V)$.call(V,j)&&!k.hasOwnProperty(j)&&(ee[j]=V[j]);var me=arguments.length-2;if(me===1)ee.children=ce;else if(1<me){for(var ye=Array(me),we=0;we<me;we++)ye[we]=arguments[we+2];ee.children=ye}if(w&&w.defaultProps)for(j in me=w.defaultProps,me)ee[j]===void 0&&(ee[j]=me[j]);return{$$typeof:s,type:w,key:ue,ref:te,props:ee,_owner:B.current}}function N(w,V){return{$$typeof:s,type:w.type,key:V,ref:w.ref,props:w.props,_owner:w._owner}}function A(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function O(w){var V={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ce){return V[ce]})}var K=/\/+/g;function W(w,V){return typeof w=="object"&&w!==null&&w.key!=null?O(""+w.key):V.toString(36)}function se(w,V,ce,j,ee){var ue=typeof w;(ue==="undefined"||ue==="boolean")&&(w=null);var te=!1;if(w===null)te=!0;else switch(ue){case"string":case"number":te=!0;break;case"object":switch(w.$$typeof){case s:case e:te=!0}}if(te)return te=w,ee=ee(te),w=j===""?"."+W(te,0):j,R(ee)?(ce="",w!=null&&(ce=w.replace(K,"$&/")+"/"),se(ee,V,ce,"",function(we){return we})):ee!=null&&(A(ee)&&(ee=N(ee,ce+(!ee.key||te&&te.key===ee.key?"":(""+ee.key).replace(K,"$&/")+"/")+w)),V.push(ee)),1;if(te=0,j=j===""?".":j+":",R(w))for(var me=0;me<w.length;me++){ue=w[me];var ye=j+W(ue,me);te+=se(ue,V,ce,ye,ee)}else if(ye=_(w),typeof ye=="function")for(w=ye.call(w),me=0;!(ue=w.next()).done;)ue=ue.value,ye=j+W(ue,me++),te+=se(ue,V,ce,ye,ee);else if(ue==="object")throw V=String(w),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return te}function re(w,V,ce){if(w==null)return w;var j=[],ee=0;return se(w,j,"","",function(ue){return V.call(ce,ue,ee++)}),j}function Z(w){if(w._status===-1){var V=w._result;V=V(),V.then(function(ce){(w._status===0||w._status===-1)&&(w._status=1,w._result=ce)},function(ce){(w._status===0||w._status===-1)&&(w._status=2,w._result=ce)}),w._status===-1&&(w._status=0,w._result=V)}if(w._status===1)return w._result.default;throw w._result}var ie={current:null},F={transition:null},de={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:F,ReactCurrentOwner:B};function L(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:re,forEach:function(w,V,ce){re(w,function(){V.apply(this,arguments)},ce)},count:function(w){var V=0;return re(w,function(){V++}),V},toArray:function(w){return re(w,function(V){return V})||[]},only:function(w){if(!A(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Et.Component=y,Et.Fragment=n,Et.Profiler=o,Et.PureComponent=U,Et.StrictMode=r,Et.Suspense=p,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Et.act=L,Et.cloneElement=function(w,V,ce){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var j=E({},w.props),ee=w.key,ue=w.ref,te=w._owner;if(V!=null){if(V.ref!==void 0&&(ue=V.ref,te=B.current),V.key!==void 0&&(ee=""+V.key),w.type&&w.type.defaultProps)var me=w.type.defaultProps;for(ye in V)$.call(V,ye)&&!k.hasOwnProperty(ye)&&(j[ye]=V[ye]===void 0&&me!==void 0?me[ye]:V[ye])}var ye=arguments.length-2;if(ye===1)j.children=ce;else if(1<ye){me=Array(ye);for(var we=0;we<ye;we++)me[we]=arguments[we+2];j.children=me}return{$$typeof:s,type:w.type,key:ee,ref:ue,props:j,_owner:te}},Et.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:c,_context:w},w.Consumer=w},Et.createElement=G,Et.createFactory=function(w){var V=G.bind(null,w);return V.type=w,V},Et.createRef=function(){return{current:null}},Et.forwardRef=function(w){return{$$typeof:f,render:w}},Et.isValidElement=A,Et.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:Z}},Et.memo=function(w,V){return{$$typeof:m,type:w,compare:V===void 0?null:V}},Et.startTransition=function(w){var V=F.transition;F.transition={};try{w()}finally{F.transition=V}},Et.unstable_act=L,Et.useCallback=function(w,V){return ie.current.useCallback(w,V)},Et.useContext=function(w){return ie.current.useContext(w)},Et.useDebugValue=function(){},Et.useDeferredValue=function(w){return ie.current.useDeferredValue(w)},Et.useEffect=function(w,V){return ie.current.useEffect(w,V)},Et.useId=function(){return ie.current.useId()},Et.useImperativeHandle=function(w,V,ce){return ie.current.useImperativeHandle(w,V,ce)},Et.useInsertionEffect=function(w,V){return ie.current.useInsertionEffect(w,V)},Et.useLayoutEffect=function(w,V){return ie.current.useLayoutEffect(w,V)},Et.useMemo=function(w,V){return ie.current.useMemo(w,V)},Et.useReducer=function(w,V,ce){return ie.current.useReducer(w,V,ce)},Et.useRef=function(w){return ie.current.useRef(w)},Et.useState=function(w){return ie.current.useState(w)},Et.useSyncExternalStore=function(w,V,ce){return ie.current.useSyncExternalStore(w,V,ce)},Et.useTransition=function(){return ie.current.useTransition()},Et.version="18.3.1",Et}var Vp;function Jd(){return Vp||(Vp=1,wu.exports=Ox()),wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function zx(){if(jp)return La;jp=1;var s=Jd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var v,S={},_=null,M=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(S[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)S[v]===void 0&&(S[v]=p[v]);return{$$typeof:e,type:f,key:_,ref:M,props:S,_owner:o.current}}return La.Fragment=n,La.jsx=u,La.jsxs=u,La}var Wp;function kx(){return Wp||(Wp=1,Mu.exports=zx()),Mu.exports}var h=kx(),Ke=Jd();const lg=og(Ke);var nl={},bu={exports:{}},Ln={},Tu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Fx(){return Xp||(Xp=1,(function(s){function e(F,de){var L=F.length;F.push(de);e:for(;0<L;){var w=L-1>>>1,V=F[w];if(0<o(V,de))F[w]=de,F[L]=V,L=w;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var de=F[0],L=F.pop();if(L!==de){F[0]=L;e:for(var w=0,V=F.length,ce=V>>>1;w<ce;){var j=2*(w+1)-1,ee=F[j],ue=j+1,te=F[ue];if(0>o(ee,L))ue<V&&0>o(te,ee)?(F[w]=te,F[ue]=L,w=ue):(F[w]=ee,F[j]=L,w=j);else if(ue<V&&0>o(te,L))F[w]=te,F[ue]=L,w=ue;else break e}}return de}function o(F,de){var L=F.sortIndex-de.sortIndex;return L!==0?L:F.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],m=[],v=1,S=null,_=3,M=!1,E=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(F){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=F)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function R(F){if(b=!1,P(F),!E)if(n(p)!==null)E=!0,Z($);else{var de=n(m);de!==null&&ie(R,de.startTime-F)}}function $(F,de){E=!1,b&&(b=!1,x(G),G=-1),M=!0;var L=_;try{for(P(de),S=n(p);S!==null&&(!(S.expirationTime>de)||F&&!O());){var w=S.callback;if(typeof w=="function"){S.callback=null,_=S.priorityLevel;var V=w(S.expirationTime<=de);de=s.unstable_now(),typeof V=="function"?S.callback=V:S===n(p)&&r(p),P(de)}else r(p);S=n(p)}if(S!==null)var ce=!0;else{var j=n(m);j!==null&&ie(R,j.startTime-de),ce=!1}return ce}finally{S=null,_=L,M=!1}}var B=!1,k=null,G=-1,N=5,A=-1;function O(){return!(s.unstable_now()-A<N)}function K(){if(k!==null){var F=s.unstable_now();A=F;var de=!0;try{de=k(!0,F)}finally{de?W():(B=!1,k=null)}}else B=!1}var W;if(typeof U=="function")W=function(){U(K)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,re=se.port2;se.port1.onmessage=K,W=function(){re.postMessage(null)}}else W=function(){y(K,0)};function Z(F){k=F,B||(B=!0,W())}function ie(F,de){G=y(function(){F(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,Z($))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var de=3;break;default:de=_}var L=_;_=de;try{return F()}finally{_=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,de){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var L=_;_=F;try{return de()}finally{_=L}},s.unstable_scheduleCallback=function(F,de,L){var w=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?w+L:w):L=w,F){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,F={id:v++,callback:de,priorityLevel:F,startTime:L,expirationTime:V,sortIndex:-1},L>w?(F.sortIndex=L,e(m,F),n(p)===null&&F===n(m)&&(b?(x(G),G=-1):b=!0,ie(R,L-w))):(F.sortIndex=V,e(p,F),E||M||(E=!0,Z($))),F},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(F){var de=_;return function(){var L=_;_=de;try{return F.apply(this,arguments)}finally{_=L}}}})(Au)),Au}var Yp;function Bx(){return Yp||(Yp=1,Tu.exports=Fx()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Hx(){if(qp)return Ln;qp=1;var s=Jd(),e=Bx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function _(t){return p.call(S,t)?!0:p.call(v,t)?!1:m.test(t)?S[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,a,l,d,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,U);y[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,U);y[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,U);y[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,a,l){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,l)&&(a=null),l||d===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),O=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),F=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var L=Object.assign,w;function V(t){if(w===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+t}var ce=!1;function j(t,i){if(!t||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var l=fe}Reflect.construct(t,[],i)}else{try{i.call()}catch(fe){l=fe}t.call(i.prototype)}else{try{throw Error()}catch(fe){l=fe}t()}}catch(fe){if(fe&&l&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),g=l.stack.split(`
`),T=d.length-1,z=g.length-1;1<=T&&0<=z&&d[T]!==g[z];)z--;for(;1<=T&&0<=z;T--,z--)if(d[T]!==g[z]){if(T!==1||z!==1)do if(T--,z--,0>z||d[T]!==g[z]){var X=`
`+d[T].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=T&&0<=z);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?V(t):""}function ee(t){switch(t.tag){case 5:return V(t.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return t=j(t.type,!1),t;case 11:return t=j(t.type.render,!1),t;case 1:return t=j(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case B:return"Portal";case N:return"Profiler";case G:return"StrictMode";case W:return"Suspense";case se:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case re:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case Z:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}function te(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ye(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function we(t){var i=ye(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){l=""+T,g.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function De(t){t._valueTracker||(t._valueTracker=we(t))}function Re(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ye(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function H(t,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function gt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ie(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Be(t,i){Ie(t,i);var a=me(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?rt(t,i.type,a):i.hasOwnProperty("defaultValue")&&rt(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Oe(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function rt(t,i,a){(i!=="number"||Qe(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var ke=Array.isArray;function D(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function C(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oe(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(ke(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:me(a)}}function _e(t,i){var a=me(i.value),l=me(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Se(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Le,He=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function pt(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){je.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function it(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function ot(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=it(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var Xe=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function St(t,i){if(i){if(Xe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ft(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ge=null,ve=null;function Fe(t){if(t=xa(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=xo(i),Pe(t.stateNode,t.type,i))}}function ze(t){ge?ve?ve.push(t):ve=[t]:ge=t}function ht(){if(ge){var t=ge,i=ve;if(ve=ge=null,Fe(t),i)for(t=0;t<i.length;t++)Fe(i[t])}}function Ft(t,i){return t(i)}function Qt(){}var bt=!1;function bn(t,i,a){if(bt)return t(i,a);bt=!0;try{return Ft(t,i,a)}finally{bt=!1,(ge!==null||ve!==null)&&(Qt(),ht())}}function _n(t,i){var a=t.stateNode;if(a===null)return null;var l=xo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var ns=!1;if(f)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{ns=!1}function Ri(t,i,a,l,d,g,T,z,X){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(Me){this.onError(Me)}}var Ni=!1,Cr=null,Rr=!1,Ki=null,Za={onError:function(t){Ni=!0,Cr=t}};function is(t,i,a,l,d,g,T,z,X){Ni=!1,Cr=null,Ri.apply(Za,arguments)}function Ka(t,i,a,l,d,g,T,z,X){if(is.apply(this,arguments),Ni){if(Ni){var fe=Cr;Ni=!1,Cr=null}else throw Error(n(198));Rr||(Rr=!0,Ki=fe)}}function gi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Qa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ja(t){if(gi(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=gi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Ja(d),t;if(g===l)return Ja(d),i;g=g.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=g;else{for(var T=!1,z=d.child;z;){if(z===a){T=!0,a=d,l=g;break}if(z===l){T=!0,l=d,a=g;break}z=z.sibling}if(!T){for(z=g.child;z;){if(z===a){T=!0,a=g,l=d;break}if(z===l){T=!0,l=g,a=d;break}z=z.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function I(t){return t=Wl(t),t!==null?Q(t):null}function Q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Q(t);if(i!==null)return i;t=t.sibling}return null}var he=e.unstable_scheduleCallback,pe=e.unstable_cancelCallback,J=e.unstable_shouldYield,Ne=e.unstable_requestPaint,Ae=e.unstable_now,Je=e.unstable_getCurrentPriorityLevel,$e=e.unstable_ImmediatePriority,ct=e.unstable_UserBlockingPriority,dt=e.unstable_NormalPriority,et=e.unstable_LowPriority,wt=e.unstable_IdlePriority,Lt=null,Mt=null;function fn(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Lt,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Rt,nt=Math.log,ni=Math.LN2;function Rt(t){return t>>>=0,t===0?32:31-(nt(t)/ni|0)|0}var hn=64,ii=4194304;function Jt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,g=t.pingedLanes,T=a&268435455;if(T!==0){var z=T&~d;z!==0?l=Jt(z):(g&=T,g!==0&&(l=Jt(g)))}else T=a&~d,T!==0?l=Jt(T):g!==0&&(l=Jt(g));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-mt(i),d=1<<a,l|=t[a],i&=~d;return l}function zt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,g=t.pendingLanes;0<g;){var T=31-mt(g),z=1<<T,X=d[T];X===-1?((z&a)===0||(z&l)!==0)&&(d[T]=zt(z,i)):X<=i&&(t.expiredLanes|=z),g&=~z}}function Ii(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sn(){var t=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),t}function Xn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-mt(i),t[i]=a}function eo(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-mt(a),g=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~g}}function Xl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-mt(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var Dt=0;function _f(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Sf,Yl,Ef,Mf,wf,ql=!1,to=[],Qi=null,Ji=null,er=null,ta=new Map,na=new Map,tr=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(t,i){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(i.pointerId)}}function ia(t,i,a,l,d,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:g,targetContainers:[d]},i!==null&&(i=xa(i),i!==null&&Yl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function s0(t,i,a,l,d){switch(i){case"focusin":return Qi=ia(Qi,t,i,a,l,d),!0;case"dragenter":return Ji=ia(Ji,t,i,a,l,d),!0;case"mouseover":return er=ia(er,t,i,a,l,d),!0;case"pointerover":var g=d.pointerId;return ta.set(g,ia(ta.get(g)||null,t,i,a,l,d)),!0;case"gotpointercapture":return g=d.pointerId,na.set(g,ia(na.get(g)||null,t,i,a,l,d)),!0}return!1}function Tf(t){var i=Nr(t.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=Qa(a),i!==null){t.blockedOn=i,wf(t.priority,function(){Ef(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Pt=l,a.target.dispatchEvent(l),Pt=null}else return i=xa(a),i!==null&&Yl(i),t.blockedOn=a,!1;i.shift()}return!0}function Af(t,i,a){no(t)&&a.delete(i)}function a0(){ql=!1,Qi!==null&&no(Qi)&&(Qi=null),Ji!==null&&no(Ji)&&(Ji=null),er!==null&&no(er)&&(er=null),ta.forEach(Af),na.forEach(Af)}function ra(t,i){t.blockedOn===i&&(t.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,a0)))}function sa(t){function i(d){return ra(d,t)}if(0<to.length){ra(to[0],t);for(var a=1;a<to.length;a++){var l=to[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Qi!==null&&ra(Qi,t),Ji!==null&&ra(Ji,t),er!==null&&ra(er,t),ta.forEach(i),na.forEach(i),a=0;a<tr.length;a++)l=tr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)Tf(a),a.blockedOn===null&&tr.shift()}var rs=R.ReactCurrentBatchConfig,io=!0;function o0(t,i,a,l){var d=Dt,g=rs.transition;rs.transition=null;try{Dt=1,$l(t,i,a,l)}finally{Dt=d,rs.transition=g}}function l0(t,i,a,l){var d=Dt,g=rs.transition;rs.transition=null;try{Dt=4,$l(t,i,a,l)}finally{Dt=d,rs.transition=g}}function $l(t,i,a,l){if(io){var d=Zl(t,i,a,l);if(d===null)hc(t,i,l,ro,a),bf(t,l);else if(s0(d,t,i,a,l))l.stopPropagation();else if(bf(t,l),i&4&&-1<r0.indexOf(t)){for(;d!==null;){var g=xa(d);if(g!==null&&Sf(g),g=Zl(t,i,a,l),g===null&&hc(t,i,l,ro,a),g===d)break;d=g}d!==null&&l.stopPropagation()}else hc(t,i,l,null,a)}}var ro=null;function Zl(t,i,a,l){if(ro=null,t=q(l),t=Nr(t),t!==null)if(i=gi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Qa(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ro=t,null}function Cf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case $e:return 1;case ct:return 4;case dt:case et:return 16;case wt:return 536870912;default:return 16}default:return 16}}var nr=null,Kl=null,so=null;function Rf(){if(so)return so;var t,i=Kl,a=i.length,l,d="value"in nr?nr.value:nr.textContent,g=d.length;for(t=0;t<a&&i[t]===d[t];t++);var T=a-t;for(l=1;l<=T&&i[a-l]===d[g-l];l++);return so=d.slice(t,1<l?1-l:void 0)}function ao(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Nf(){return!1}function zn(t){function i(a,l,d,g,T){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var z in t)t.hasOwnProperty(z)&&(a=t[z],this[z]=a?a(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?oo:Nf,this.isPropagationStopped=Nf,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=zn(ss),aa=L({},ss,{view:0,detail:0}),c0=zn(aa),Jl,ec,oa,lo=L({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Jl=t.screenX-oa.screenX,ec=t.screenY-oa.screenY):ec=Jl=0,oa=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),If=zn(lo),u0=L({},lo,{dataTransfer:0}),d0=zn(u0),f0=L({},aa,{relatedTarget:0}),tc=zn(f0),h0=L({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=zn(h0),m0=L({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g0=zn(m0),x0=L({},ss,{data:0}),Lf=zn(x0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_0[t])?!!i[t]:!1}function nc(){return S0}var E0=L({},aa,{key:function(t){if(t.key){var i=y0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M0=zn(E0),w0=L({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=zn(w0),b0=L({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),T0=zn(b0),A0=L({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),C0=zn(A0),R0=L({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=zn(R0),I0=[9,13,27,32],ic=f&&"CompositionEvent"in window,la=null;f&&"documentMode"in document&&(la=document.documentMode);var L0=f&&"TextEvent"in window&&!la,Df=f&&(!ic||la&&8<la&&11>=la),Uf=" ",Of=!1;function zf(t,i){switch(t){case"keyup":return I0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function P0(t,i){switch(t){case"compositionend":return kf(i);case"keypress":return i.which!==32?null:(Of=!0,Uf);case"textInput":return t=i.data,t===Uf&&Of?null:t;default:return null}}function D0(t,i){if(as)return t==="compositionend"||!ic&&zf(t,i)?(t=Rf(),so=Kl=nr=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Df&&i.locale!=="ko"?null:i.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!U0[t.type]:i==="textarea"}function Bf(t,i,a,l){ze(l),i=po(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ca=null,ua=null;function O0(t){rh(t,0)}function co(t){var i=ds(t);if(Re(i))return t}function z0(t,i){if(t==="change")return i}var Hf=!1;if(f){var rc;if(f){var sc="oninput"in document;if(!sc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),sc=typeof Gf.oninput=="function"}rc=sc}else rc=!1;Hf=rc&&(!document.documentMode||9<document.documentMode)}function Vf(){ca&&(ca.detachEvent("onpropertychange",jf),ua=ca=null)}function jf(t){if(t.propertyName==="value"&&co(ua)){var i=[];Bf(i,ua,t,q(t)),bn(O0,i)}}function k0(t,i,a){t==="focusin"?(Vf(),ca=i,ua=a,ca.attachEvent("onpropertychange",jf)):t==="focusout"&&Vf()}function F0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(ua)}function B0(t,i){if(t==="click")return co(i)}function H0(t,i){if(t==="input"||t==="change")return co(i)}function G0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ri=typeof Object.is=="function"?Object.is:G0;function da(t,i){if(ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!p.call(i,d)||!ri(t[d],i[d]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,i){var a=Wf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wf(a)}}function Yf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Yf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qf(){for(var t=window,i=Qe();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Qe(t.document)}return i}function ac(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function V0(t){var i=qf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Yf(a.ownerDocument.documentElement,a)){if(l!==null&&ac(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,g=Math.min(l.start,d);l=l.end===void 0?g:Math.min(l.end,d),!t.extend&&g>l&&(d=l,l=g,g=d),d=Xf(a,g);var T=Xf(a,l);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),g>l?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j0=f&&"documentMode"in document&&11>=document.documentMode,os=null,oc=null,fa=null,lc=!1;function $f(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lc||os==null||os!==Qe(l)||(l=os,"selectionStart"in l&&ac(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&da(fa,l)||(fa=l,l=po(oc,"onSelect"),0<l.length&&(i=new Ql("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=os)))}function uo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ls={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},cc={},Zf={};f&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function fo(t){if(cc[t])return cc[t];if(!ls[t])return t;var i=ls[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Zf)return cc[t]=i[a];return t}var Kf=fo("animationend"),Qf=fo("animationiteration"),Jf=fo("animationstart"),eh=fo("transitionend"),th=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,i){th.set(t,i),c(i,[t])}for(var uc=0;uc<nh.length;uc++){var dc=nh[uc],W0=dc.toLowerCase(),X0=dc[0].toUpperCase()+dc.slice(1);ir(W0,"on"+X0)}ir(Kf,"onAnimationEnd"),ir(Qf,"onAnimationIteration"),ir(Jf,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(eh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function ih(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Ka(l,i,void 0,t),t.currentTarget=null}function rh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var g=void 0;if(i)for(var T=l.length-1;0<=T;T--){var z=l[T],X=z.instance,fe=z.currentTarget;if(z=z.listener,X!==g&&d.isPropagationStopped())break e;ih(d,z,fe),g=X}else for(T=0;T<l.length;T++){if(z=l[T],X=z.instance,fe=z.currentTarget,z=z.listener,X!==g&&d.isPropagationStopped())break e;ih(d,z,fe),g=X}}}if(Rr)throw t=Ki,Rr=!1,Ki=null,t}function Bt(t,i){var a=i[vc];a===void 0&&(a=i[vc]=new Set);var l=t+"__bubble";a.has(l)||(sh(i,t,2,!1),a.add(l))}function fc(t,i,a){var l=0;i&&(l|=4),sh(a,t,l,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[ho]){t[ho]=!0,r.forEach(function(a){a!=="selectionchange"&&(Y0.has(a)||fc(a,!1,t),fc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,fc("selectionchange",!1,i))}}function sh(t,i,a,l){switch(Cf(i)){case 1:var d=o0;break;case 4:d=l0;break;default:d=$l}a=d.bind(null,i,a,t),d=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function hc(t,i,a,l,d){var g=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var z=l.stateNode.containerInfo;if(z===d||z.nodeType===8&&z.parentNode===d)break;if(T===4)for(T=l.return;T!==null;){var X=T.tag;if((X===3||X===4)&&(X=T.stateNode.containerInfo,X===d||X.nodeType===8&&X.parentNode===d))return;T=T.return}for(;z!==null;){if(T=Nr(z),T===null)return;if(X=T.tag,X===5||X===6){l=g=T;continue e}z=z.parentNode}}l=l.return}bn(function(){var fe=g,Me=q(a),Te=[];e:{var Ee=th.get(t);if(Ee!==void 0){var Ge=Ql,Ye=t;switch(t){case"keypress":if(ao(a)===0)break e;case"keydown":case"keyup":Ge=M0;break;case"focusin":Ye="focus",Ge=tc;break;case"focusout":Ye="blur",Ge=tc;break;case"beforeblur":case"afterblur":Ge=tc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=T0;break;case Kf:case Qf:case Jf:Ge=p0;break;case eh:Ge=C0;break;case"scroll":Ge=c0;break;case"wheel":Ge=N0;break;case"copy":case"cut":case"paste":Ge=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Pf}var Ze=(i&4)!==0,$t=!Ze&&t==="scroll",ne=Ze?Ee!==null?Ee+"Capture":null:Ee;Ze=[];for(var Y=fe,ae;Y!==null;){ae=Y;var Ce=ae.stateNode;if(ae.tag===5&&Ce!==null&&(ae=Ce,ne!==null&&(Ce=_n(Y,ne),Ce!=null&&Ze.push(ma(Y,Ce,ae)))),$t)break;Y=Y.return}0<Ze.length&&(Ee=new Ge(Ee,Ye,null,a,Me),Te.push({event:Ee,listeners:Ze}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",Ge=t==="mouseout"||t==="pointerout",Ee&&a!==Pt&&(Ye=a.relatedTarget||a.fromElement)&&(Nr(Ye)||Ye[Li]))break e;if((Ge||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ge?(Ye=a.relatedTarget||a.toElement,Ge=fe,Ye=Ye?Nr(Ye):null,Ye!==null&&($t=gi(Ye),Ye!==$t||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Ge=null,Ye=fe),Ge!==Ye)){if(Ze=If,Ce="onMouseLeave",ne="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Pf,Ce="onPointerLeave",ne="onPointerEnter",Y="pointer"),$t=Ge==null?Ee:ds(Ge),ae=Ye==null?Ee:ds(Ye),Ee=new Ze(Ce,Y+"leave",Ge,a,Me),Ee.target=$t,Ee.relatedTarget=ae,Ce=null,Nr(Me)===fe&&(Ze=new Ze(ne,Y+"enter",Ye,a,Me),Ze.target=ae,Ze.relatedTarget=$t,Ce=Ze),$t=Ce,Ge&&Ye)t:{for(Ze=Ge,ne=Ye,Y=0,ae=Ze;ae;ae=cs(ae))Y++;for(ae=0,Ce=ne;Ce;Ce=cs(Ce))ae++;for(;0<Y-ae;)Ze=cs(Ze),Y--;for(;0<ae-Y;)ne=cs(ne),ae--;for(;Y--;){if(Ze===ne||ne!==null&&Ze===ne.alternate)break t;Ze=cs(Ze),ne=cs(ne)}Ze=null}else Ze=null;Ge!==null&&ah(Te,Ee,Ge,Ze,!1),Ye!==null&&$t!==null&&ah(Te,$t,Ye,Ze,!0)}}e:{if(Ee=fe?ds(fe):window,Ge=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Ee.type==="file")var tt=z0;else if(Ff(Ee))if(Hf)tt=H0;else{tt=F0;var st=k0}else(Ge=Ee.nodeName)&&Ge.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(tt=B0);if(tt&&(tt=tt(t,fe))){Bf(Te,tt,a,Me);break e}st&&st(t,Ee,fe),t==="focusout"&&(st=Ee._wrapperState)&&st.controlled&&Ee.type==="number"&&rt(Ee,"number",Ee.value)}switch(st=fe?ds(fe):window,t){case"focusin":(Ff(st)||st.contentEditable==="true")&&(os=st,oc=fe,fa=null);break;case"focusout":fa=oc=os=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,$f(Te,a,Me);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":$f(Te,a,Me)}var at;if(ic)e:{switch(t){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else as?zf(t,a)&&(ut="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Df&&a.locale!=="ko"&&(as||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&as&&(at=Rf()):(nr=Me,Kl="value"in nr?nr.value:nr.textContent,as=!0)),st=po(fe,ut),0<st.length&&(ut=new Lf(ut,t,null,a,Me),Te.push({event:ut,listeners:st}),at?ut.data=at:(at=kf(a),at!==null&&(ut.data=at)))),(at=L0?P0(t,a):D0(t,a))&&(fe=po(fe,"onBeforeInput"),0<fe.length&&(Me=new Lf("onBeforeInput","beforeinput",null,a,Me),Te.push({event:Me,listeners:fe}),Me.data=at))}rh(Te,i)})}function ma(t,i,a){return{instance:t,listener:i,currentTarget:a}}function po(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=_n(t,a),g!=null&&l.unshift(ma(t,g,d)),g=_n(t,i),g!=null&&l.push(ma(t,g,d))),t=t.return}return l}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,i,a,l,d){for(var g=i._reactName,T=[];a!==null&&a!==l;){var z=a,X=z.alternate,fe=z.stateNode;if(X!==null&&X===l)break;z.tag===5&&fe!==null&&(z=fe,d?(X=_n(a,g),X!=null&&T.unshift(ma(a,X,z))):d||(X=_n(a,g),X!=null&&T.push(ma(a,X,z)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var q0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function oh(t){return(typeof t=="string"?t:""+t).replace(q0,`
`).replace($0,"")}function mo(t,i,a){if(i=oh(i),oh(t)!==i&&a)throw Error(n(425))}function go(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(Q0)}:xc;function Q0(t){setTimeout(function(){throw t})}function yc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),sa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);sa(i)}function rr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ch(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),yi="__reactFiber$"+us,ga="__reactProps$"+us,Li="__reactContainer$"+us,vc="__reactEvents$"+us,J0="__reactListeners$"+us,ex="__reactHandles$"+us;function Nr(t){var i=t[yi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Li]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=ch(t);t!==null;){if(a=t[yi])return a;t=ch(t)}return i}t=a,a=t.parentNode}return null}function xa(t){return t=t[yi]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xo(t){return t[ga]||null}var _c=[],fs=-1;function sr(t){return{current:t}}function Ht(t){0>fs||(t.current=_c[fs],_c[fs]=null,fs--)}function kt(t,i){fs++,_c[fs]=t.current,t.current=i}var ar={},pn=sr(ar),An=sr(!1),Ir=ar;function hs(t,i){var a=t.type.contextTypes;if(!a)return ar;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(t){return t=t.childContextTypes,t!=null}function yo(){Ht(An),Ht(pn)}function uh(t,i,a){if(pn.current!==ar)throw Error(n(168));kt(pn,i),kt(An,a)}function dh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,te(t)||"Unknown",d));return L({},a,l)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Ir=pn.current,kt(pn,t),kt(An,An.current),!0}function fh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=dh(t,i,Ir),l.__reactInternalMemoizedMergedChildContext=t,Ht(An),Ht(pn),kt(pn,t)):Ht(An),kt(An,a)}var Pi=null,_o=!1,Sc=!1;function hh(t){Pi===null?Pi=[t]:Pi.push(t)}function tx(t){_o=!0,hh(t)}function or(){if(!Sc&&Pi!==null){Sc=!0;var t=0,i=Dt;try{var a=Pi;for(Dt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Pi=null,_o=!1}catch(d){throw Pi!==null&&(Pi=Pi.slice(t+1)),he($e,or),d}finally{Dt=i,Sc=!1}}return null}var ps=[],ms=0,So=null,Eo=0,Yn=[],qn=0,Lr=null,Di=1,Ui="";function Pr(t,i){ps[ms++]=Eo,ps[ms++]=So,So=t,Eo=i}function ph(t,i,a){Yn[qn++]=Di,Yn[qn++]=Ui,Yn[qn++]=Lr,Lr=t;var l=Di;t=Ui;var d=32-mt(l)-1;l&=~(1<<d),a+=1;var g=32-mt(i)+d;if(30<g){var T=d-d%5;g=(l&(1<<T)-1).toString(32),l>>=T,d-=T,Di=1<<32-mt(i)+d|a<<d|l,Ui=g+t}else Di=1<<g|a<<d|l,Ui=t}function Ec(t){t.return!==null&&(Pr(t,1),ph(t,1,0))}function Mc(t){for(;t===So;)So=ps[--ms],ps[ms]=null,Eo=ps[--ms],ps[ms]=null;for(;t===Lr;)Lr=Yn[--qn],Yn[qn]=null,Ui=Yn[--qn],Yn[qn]=null,Di=Yn[--qn],Yn[qn]=null}var kn=null,Fn=null,Gt=!1,si=null;function mh(t,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function gh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,Fn=rr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Lr!==null?{id:Di,overflow:Ui}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,Fn=null,!0):!1;default:return!1}}function wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bc(t){if(Gt){var i=Fn;if(i){var a=i;if(!gh(t,i)){if(wc(t))throw Error(n(418));i=rr(a.nextSibling);var l=kn;i&&gh(t,i)?mh(l,a):(t.flags=t.flags&-4097|2,Gt=!1,kn=t)}}else{if(wc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Gt=!1,kn=t}}}function xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Mo(t){if(t!==kn)return!1;if(!Gt)return xh(t),Gt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=Fn)){if(wc(t))throw yh(),Error(n(418));for(;i;)mh(t,i),i=rr(i.nextSibling)}if(xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Fn=rr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=kn?rr(t.stateNode.nextSibling):null;return!0}function yh(){for(var t=Fn;t;)t=rr(t.nextSibling)}function gs(){Fn=kn=null,Gt=!1}function Tc(t){si===null?si=[t]:si.push(t)}var nx=R.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var z=d.refs;T===null?delete z[g]:z[g]=T},i._stringRef=g,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function vh(t){var i=t._init;return i(t._payload)}function _h(t){function i(ne,Y){if(t){var ae=ne.deletions;ae===null?(ne.deletions=[Y],ne.flags|=16):ae.push(Y)}}function a(ne,Y){if(!t)return null;for(;Y!==null;)i(ne,Y),Y=Y.sibling;return null}function l(ne,Y){for(ne=new Map;Y!==null;)Y.key!==null?ne.set(Y.key,Y):ne.set(Y.index,Y),Y=Y.sibling;return ne}function d(ne,Y){return ne=mr(ne,Y),ne.index=0,ne.sibling=null,ne}function g(ne,Y,ae){return ne.index=ae,t?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<Y?(ne.flags|=2,Y):ae):(ne.flags|=2,Y)):(ne.flags|=1048576,Y)}function T(ne){return t&&ne.alternate===null&&(ne.flags|=2),ne}function z(ne,Y,ae,Ce){return Y===null||Y.tag!==6?(Y=xu(ae,ne.mode,Ce),Y.return=ne,Y):(Y=d(Y,ae),Y.return=ne,Y)}function X(ne,Y,ae,Ce){var tt=ae.type;return tt===k?Me(ne,Y,ae.props.children,Ce,ae.key):Y!==null&&(Y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Z&&vh(tt)===Y.type)?(Ce=d(Y,ae.props),Ce.ref=ya(ne,Y,ae),Ce.return=ne,Ce):(Ce=qo(ae.type,ae.key,ae.props,null,ne.mode,Ce),Ce.ref=ya(ne,Y,ae),Ce.return=ne,Ce)}function fe(ne,Y,ae,Ce){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ae.containerInfo||Y.stateNode.implementation!==ae.implementation?(Y=yu(ae,ne.mode,Ce),Y.return=ne,Y):(Y=d(Y,ae.children||[]),Y.return=ne,Y)}function Me(ne,Y,ae,Ce,tt){return Y===null||Y.tag!==7?(Y=Hr(ae,ne.mode,Ce,tt),Y.return=ne,Y):(Y=d(Y,ae),Y.return=ne,Y)}function Te(ne,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=xu(""+Y,ne.mode,ae),Y.return=ne,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case $:return ae=qo(Y.type,Y.key,Y.props,null,ne.mode,ae),ae.ref=ya(ne,null,Y),ae.return=ne,ae;case B:return Y=yu(Y,ne.mode,ae),Y.return=ne,Y;case Z:var Ce=Y._init;return Te(ne,Ce(Y._payload),ae)}if(ke(Y)||de(Y))return Y=Hr(Y,ne.mode,ae,null),Y.return=ne,Y;wo(ne,Y)}return null}function Ee(ne,Y,ae,Ce){var tt=Y!==null?Y.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return tt!==null?null:z(ne,Y,""+ae,Ce);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case $:return ae.key===tt?X(ne,Y,ae,Ce):null;case B:return ae.key===tt?fe(ne,Y,ae,Ce):null;case Z:return tt=ae._init,Ee(ne,Y,tt(ae._payload),Ce)}if(ke(ae)||de(ae))return tt!==null?null:Me(ne,Y,ae,Ce,null);wo(ne,ae)}return null}function Ge(ne,Y,ae,Ce,tt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ne=ne.get(ae)||null,z(Y,ne,""+Ce,tt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case $:return ne=ne.get(Ce.key===null?ae:Ce.key)||null,X(Y,ne,Ce,tt);case B:return ne=ne.get(Ce.key===null?ae:Ce.key)||null,fe(Y,ne,Ce,tt);case Z:var st=Ce._init;return Ge(ne,Y,ae,st(Ce._payload),tt)}if(ke(Ce)||de(Ce))return ne=ne.get(ae)||null,Me(Y,ne,Ce,tt,null);wo(Y,Ce)}return null}function Ye(ne,Y,ae,Ce){for(var tt=null,st=null,at=Y,ut=Y=0,on=null;at!==null&&ut<ae.length;ut++){at.index>ut?(on=at,at=null):on=at.sibling;var Nt=Ee(ne,at,ae[ut],Ce);if(Nt===null){at===null&&(at=on);break}t&&at&&Nt.alternate===null&&i(ne,at),Y=g(Nt,Y,ut),st===null?tt=Nt:st.sibling=Nt,st=Nt,at=on}if(ut===ae.length)return a(ne,at),Gt&&Pr(ne,ut),tt;if(at===null){for(;ut<ae.length;ut++)at=Te(ne,ae[ut],Ce),at!==null&&(Y=g(at,Y,ut),st===null?tt=at:st.sibling=at,st=at);return Gt&&Pr(ne,ut),tt}for(at=l(ne,at);ut<ae.length;ut++)on=Ge(at,ne,ut,ae[ut],Ce),on!==null&&(t&&on.alternate!==null&&at.delete(on.key===null?ut:on.key),Y=g(on,Y,ut),st===null?tt=on:st.sibling=on,st=on);return t&&at.forEach(function(gr){return i(ne,gr)}),Gt&&Pr(ne,ut),tt}function Ze(ne,Y,ae,Ce){var tt=de(ae);if(typeof tt!="function")throw Error(n(150));if(ae=tt.call(ae),ae==null)throw Error(n(151));for(var st=tt=null,at=Y,ut=Y=0,on=null,Nt=ae.next();at!==null&&!Nt.done;ut++,Nt=ae.next()){at.index>ut?(on=at,at=null):on=at.sibling;var gr=Ee(ne,at,Nt.value,Ce);if(gr===null){at===null&&(at=on);break}t&&at&&gr.alternate===null&&i(ne,at),Y=g(gr,Y,ut),st===null?tt=gr:st.sibling=gr,st=gr,at=on}if(Nt.done)return a(ne,at),Gt&&Pr(ne,ut),tt;if(at===null){for(;!Nt.done;ut++,Nt=ae.next())Nt=Te(ne,Nt.value,Ce),Nt!==null&&(Y=g(Nt,Y,ut),st===null?tt=Nt:st.sibling=Nt,st=Nt);return Gt&&Pr(ne,ut),tt}for(at=l(ne,at);!Nt.done;ut++,Nt=ae.next())Nt=Ge(at,ne,ut,Nt.value,Ce),Nt!==null&&(t&&Nt.alternate!==null&&at.delete(Nt.key===null?ut:Nt.key),Y=g(Nt,Y,ut),st===null?tt=Nt:st.sibling=Nt,st=Nt);return t&&at.forEach(function(Ux){return i(ne,Ux)}),Gt&&Pr(ne,ut),tt}function $t(ne,Y,ae,Ce){if(typeof ae=="object"&&ae!==null&&ae.type===k&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case $:e:{for(var tt=ae.key,st=Y;st!==null;){if(st.key===tt){if(tt=ae.type,tt===k){if(st.tag===7){a(ne,st.sibling),Y=d(st,ae.props.children),Y.return=ne,ne=Y;break e}}else if(st.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Z&&vh(tt)===st.type){a(ne,st.sibling),Y=d(st,ae.props),Y.ref=ya(ne,st,ae),Y.return=ne,ne=Y;break e}a(ne,st);break}else i(ne,st);st=st.sibling}ae.type===k?(Y=Hr(ae.props.children,ne.mode,Ce,ae.key),Y.return=ne,ne=Y):(Ce=qo(ae.type,ae.key,ae.props,null,ne.mode,Ce),Ce.ref=ya(ne,Y,ae),Ce.return=ne,ne=Ce)}return T(ne);case B:e:{for(st=ae.key;Y!==null;){if(Y.key===st)if(Y.tag===4&&Y.stateNode.containerInfo===ae.containerInfo&&Y.stateNode.implementation===ae.implementation){a(ne,Y.sibling),Y=d(Y,ae.children||[]),Y.return=ne,ne=Y;break e}else{a(ne,Y);break}else i(ne,Y);Y=Y.sibling}Y=yu(ae,ne.mode,Ce),Y.return=ne,ne=Y}return T(ne);case Z:return st=ae._init,$t(ne,Y,st(ae._payload),Ce)}if(ke(ae))return Ye(ne,Y,ae,Ce);if(de(ae))return Ze(ne,Y,ae,Ce);wo(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,Y!==null&&Y.tag===6?(a(ne,Y.sibling),Y=d(Y,ae),Y.return=ne,ne=Y):(a(ne,Y),Y=xu(ae,ne.mode,Ce),Y.return=ne,ne=Y),T(ne)):a(ne,Y)}return $t}var xs=_h(!0),Sh=_h(!1),bo=sr(null),To=null,ys=null,Ac=null;function Cc(){Ac=ys=To=null}function Rc(t){var i=bo.current;Ht(bo),t._currentValue=i}function Nc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function vs(t,i){To=t,Ac=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function $n(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},ys===null){if(To===null)throw Error(n(308));ys=t,To.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return i}var Dr=null;function Ic(t){Dr===null?Dr=[t]:Dr.push(t)}function Eh(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Ic(i)):(a.next=d.next,d.next=a),i.interleaved=a,Oi(t,l)}function Oi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var lr=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Tt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Oi(t,a)}return d=l.interleaved,d===null?(i.next=i,Ic(l)):(i.next=d.next,d.next=i),l.interleaved=i,Oi(t,a)}function Ao(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Xl(t,a)}}function wh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Co(t,i,a,l){var d=t.updateQueue;lr=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,z=d.shared.pending;if(z!==null){d.shared.pending=null;var X=z,fe=X.next;X.next=null,T===null?g=fe:T.next=fe,T=X;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,z=Me.lastBaseUpdate,z!==T&&(z===null?Me.firstBaseUpdate=fe:z.next=fe,Me.lastBaseUpdate=X))}if(g!==null){var Te=d.baseState;T=0,Me=fe=X=null,z=g;do{var Ee=z.lane,Ge=z.eventTime;if((l&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:Ge,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ye=t,Ze=z;switch(Ee=i,Ge=a,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Te=Ye.call(Ge,Te,Ee);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,Ee=typeof Ye=="function"?Ye.call(Ge,Te,Ee):Ye,Ee==null)break e;Te=L({},Te,Ee);break e;case 2:lr=!0}}z.callback!==null&&z.lane!==0&&(t.flags|=64,Ee=d.effects,Ee===null?d.effects=[z]:Ee.push(z))}else Ge={eventTime:Ge,lane:Ee,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Me===null?(fe=Me=Ge,X=Te):Me=Me.next=Ge,T|=Ee;if(z=z.next,z===null){if(z=d.shared.pending,z===null)break;Ee=z,z=Ee.next,Ee.next=null,d.lastBaseUpdate=Ee,d.shared.pending=null}}while(!0);if(Me===null&&(X=Te),d.baseState=X,d.firstBaseUpdate=fe,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);zr|=T,t.lanes=T,t.memoizedState=Te}}function bh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var va={},vi=sr(va),_a=sr(va),Sa=sr(va);function Ur(t){if(t===va)throw Error(n(174));return t}function Pc(t,i){switch(kt(Sa,i),kt(_a,t),kt(vi,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=qe(i,t)}Ht(vi),kt(vi,i)}function _s(){Ht(vi),Ht(_a),Ht(Sa)}function Th(t){Ur(Sa.current);var i=Ur(vi.current),a=qe(i,t.type);i!==a&&(kt(_a,t),kt(vi,a))}function Dc(t){_a.current===t&&(Ht(vi),Ht(_a))}var jt=sr(0);function Ro(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Oc(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var No=R.ReactCurrentDispatcher,zc=R.ReactCurrentBatchConfig,Or=0,Wt=null,en=null,sn=null,Io=!1,Ea=!1,Ma=0,ix=0;function mn(){throw Error(n(321))}function kc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ri(t[a],i[a]))return!1;return!0}function Fc(t,i,a,l,d,g){if(Or=g,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,No.current=t===null||t.memoizedState===null?ox:lx,t=a(l,d),Ea){g=0;do{if(Ea=!1,Ma=0,25<=g)throw Error(n(301));g+=1,sn=en=null,i.updateQueue=null,No.current=cx,t=a(l,d)}while(Ea)}if(No.current=Do,i=en!==null&&en.next!==null,Or=0,sn=en=Wt=null,Io=!1,i)throw Error(n(300));return t}function Bc(){var t=Ma!==0;return Ma=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Wt.memoizedState=sn=t:sn=sn.next=t,sn}function Zn(){if(en===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=sn===null?Wt.memoizedState:sn.next;if(i!==null)sn=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?Wt.memoizedState=sn=t:sn=sn.next=t}return sn}function wa(t,i){return typeof i=="function"?i(t):i}function Hc(t){var i=Zn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=en,d=l.baseQueue,g=a.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}l.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,l=l.baseState;var z=T=null,X=null,fe=g;do{var Me=fe.lane;if((Or&Me)===Me)X!==null&&(X=X.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),l=fe.hasEagerState?fe.eagerState:t(l,fe.action);else{var Te={lane:Me,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};X===null?(z=X=Te,T=l):X=X.next=Te,Wt.lanes|=Me,zr|=Me}fe=fe.next}while(fe!==null&&fe!==g);X===null?T=l:X.next=z,ri(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=T,i.baseQueue=X,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do g=d.lane,Wt.lanes|=g,zr|=g,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Gc(t){var i=Zn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do g=t(g,T.action),T=T.next;while(T!==d);ri(g,i.memoizedState)||(Rn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,l]}function Ah(){}function Ch(t,i){var a=Wt,l=Zn(),d=i(),g=!ri(l.memoizedState,d);if(g&&(l.memoizedState=d,Rn=!0),l=l.queue,Vc(Ih.bind(null,a,l,t),[t]),l.getSnapshot!==i||g||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,ba(9,Nh.bind(null,a,l,d,i),void 0,null),an===null)throw Error(n(349));(Or&30)!==0||Rh(a,i,d)}return d}function Rh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Nh(t,i,a,l){i.value=a,i.getSnapshot=l,Lh(i)&&Ph(t)}function Ih(t,i,a){return a(function(){Lh(i)&&Ph(t)})}function Lh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ri(t,a)}catch{return!0}}function Ph(t){var i=Oi(t,1);i!==null&&ci(i,t,1,-1)}function Dh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i.queue=t,t=t.dispatch=ax.bind(null,Wt,t),[i.memoizedState,t]}function ba(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Uh(){return Zn().memoizedState}function Lo(t,i,a,l){var d=_i();Wt.flags|=t,d.memoizedState=ba(1|i,a,void 0,l===void 0?null:l)}function Po(t,i,a,l){var d=Zn();l=l===void 0?null:l;var g=void 0;if(en!==null){var T=en.memoizedState;if(g=T.destroy,l!==null&&kc(l,T.deps)){d.memoizedState=ba(i,a,g,l);return}}Wt.flags|=t,d.memoizedState=ba(1|i,a,g,l)}function Oh(t,i){return Lo(8390656,8,t,i)}function Vc(t,i){return Po(2048,8,t,i)}function zh(t,i){return Po(4,2,t,i)}function kh(t,i){return Po(4,4,t,i)}function Fh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Bh(t,i,a){return a=a!=null?a.concat([t]):null,Po(4,4,Fh.bind(null,i,t),a)}function jc(){}function Hh(t,i){var a=Zn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Gh(t,i){var a=Zn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Vh(t,i,a){return(Or&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=a):(ri(a,i)||(a=Sn(),Wt.lanes|=a,zr|=a,t.baseState=!0),i)}function rx(t,i){var a=Dt;Dt=a!==0&&4>a?a:4,t(!0);var l=zc.transition;zc.transition={};try{t(!1),i()}finally{Dt=a,zc.transition=l}}function jh(){return Zn().memoizedState}function sx(t,i,a){var l=hr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Wh(t))Xh(i,a);else if(a=Eh(t,i,a,l),a!==null){var d=Mn();ci(a,t,l,d),Yh(a,i,l)}}function ax(t,i,a){var l=hr(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wh(t))Xh(i,d);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,z=g(T,a);if(d.hasEagerState=!0,d.eagerState=z,ri(z,T)){var X=i.interleaved;X===null?(d.next=d,Ic(i)):(d.next=X.next,X.next=d),i.interleaved=d;return}}catch{}finally{}a=Eh(t,i,d,l),a!==null&&(d=Mn(),ci(a,t,l,d),Yh(a,i,l))}}function Wh(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Xh(t,i){Ea=Io=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Yh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Xl(t,a)}}var Do={readContext:$n,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},ox={readContext:$n,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:Oh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4194308,4,Fh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Lo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Lo(4,2,t,i)},useMemo:function(t,i){var a=_i();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=_i();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=sx.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Dh,useDebugValue:jc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Dh(!1),i=t[0];return t=rx.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Wt,d=_i();if(Gt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),an===null)throw Error(n(349));(Or&30)!==0||Rh(l,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,Oh(Ih.bind(null,l,g,t),[t]),l.flags|=2048,ba(9,Nh.bind(null,l,g,a,i),void 0,null),a},useId:function(){var t=_i(),i=an.identifierPrefix;if(Gt){var a=Ui,l=Di;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=ix++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},lx={readContext:$n,useCallback:Hh,useContext:$n,useEffect:Vc,useImperativeHandle:Bh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Gh,useReducer:Hc,useRef:Uh,useState:function(){return Hc(wa)},useDebugValue:jc,useDeferredValue:function(t){var i=Zn();return Vh(i,en.memoizedState,t)},useTransition:function(){var t=Hc(wa)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:jh,unstable_isNewReconciler:!1},cx={readContext:$n,useCallback:Hh,useContext:$n,useEffect:Vc,useImperativeHandle:Bh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Gh,useReducer:Gc,useRef:Uh,useState:function(){return Gc(wa)},useDebugValue:jc,useDeferredValue:function(t){var i=Zn();return en===null?i.memoizedState=t:Vh(i,en.memoizedState,t)},useTransition:function(){var t=Gc(wa)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:jh,unstable_isNewReconciler:!1};function ai(t,i){if(t&&t.defaultProps){i=L({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Wc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:L({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uo={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Mn(),d=hr(t),g=zi(l,d);g.payload=i,a!=null&&(g.callback=a),i=cr(t,g,d),i!==null&&(ci(i,t,d,l),Ao(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Mn(),d=hr(t),g=zi(l,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=cr(t,g,d),i!==null&&(ci(i,t,d,l),Ao(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Mn(),l=hr(t),d=zi(a,l);d.tag=2,i!=null&&(d.callback=i),i=cr(t,d,l),i!==null&&(ci(i,t,l,a),Ao(i,t,l))}};function qh(t,i,a,l,d,g,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,T):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(d,g):!0}function $h(t,i,a){var l=!1,d=ar,g=i.contextType;return typeof g=="object"&&g!==null?g=$n(g):(d=Cn(i)?Ir:pn.current,l=i.contextTypes,g=(l=l!=null)?hs(t,d):ar),i=new i(a,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Uo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=g),i}function Zh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Uo.enqueueReplaceState(i,i.state,null)}function Xc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Lc(t);var g=i.contextType;typeof g=="object"&&g!==null?d.context=$n(g):(g=Cn(i)?Ir:pn.current,d.context=hs(t,g)),d.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Wc(t,i,g,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Uo.enqueueReplaceState(d,d.state,null),Co(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,i){try{var a="",l=i;do a+=ee(l),l=l.return;while(l);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:d,digest:null}}function Yc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function qc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function Kh(t,i,a){a=zi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Go||(Go=!0,cu=l),qc(t,i)},a}function Qh(t,i,a){a=zi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){qc(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){qc(t,i),typeof l!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Jh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new ux;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=wx.bind(null,t,i,a),i.then(t,t))}function ep(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function tp(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=zi(-1,1),i.tag=2,cr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var dx=R.ReactCurrentOwner,Rn=!1;function En(t,i,a,l){i.child=t===null?Sh(i,null,a,l):xs(i,t.child,a,l)}function np(t,i,a,l,d){a=a.render;var g=i.ref;return vs(i,d),l=Fc(t,i,a,l,g,d),a=Bc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ki(t,i,d)):(Gt&&a&&Ec(i),i.flags|=1,En(t,i,l,d),i.child)}function ip(t,i,a,l,d){if(t===null){var g=a.type;return typeof g=="function"&&!gu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,rp(t,i,g,l,d)):(t=qo(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&d)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(T,l)&&t.ref===i.ref)return ki(t,i,d)}return i.flags|=1,t=mr(g,l),t.ref=i.ref,t.return=i,i.child=t}function rp(t,i,a,l,d){if(t!==null){var g=t.memoizedProps;if(da(g,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=g,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,ki(t,i,d)}return $c(t,i,a,l,d)}function sp(t,i,a){var l=i.pendingProps,d=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ms,Bn),Bn|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(Ms,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:a,kt(Ms,Bn),Bn|=l}else g!==null?(l=g.baseLanes|a,i.memoizedState=null):l=a,kt(Ms,Bn),Bn|=l;return En(t,i,d,a),i.child}function ap(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function $c(t,i,a,l,d){var g=Cn(a)?Ir:pn.current;return g=hs(i,g),vs(i,d),a=Fc(t,i,a,l,g,d),l=Bc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ki(t,i,d)):(Gt&&l&&Ec(i),i.flags|=1,En(t,i,a,d),i.child)}function op(t,i,a,l,d){if(Cn(a)){var g=!0;vo(i)}else g=!1;if(vs(i,d),i.stateNode===null)zo(t,i),$h(i,a,l),Xc(i,a,l,d),l=!0;else if(t===null){var T=i.stateNode,z=i.memoizedProps;T.props=z;var X=T.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=$n(fe):(fe=Cn(a)?Ir:pn.current,fe=hs(i,fe));var Me=a.getDerivedStateFromProps,Te=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";Te||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==l||X!==fe)&&Zh(i,T,l,fe),lr=!1;var Ee=i.memoizedState;T.state=Ee,Co(i,l,T,d),X=i.memoizedState,z!==l||Ee!==X||An.current||lr?(typeof Me=="function"&&(Wc(i,a,Me,l),X=i.memoizedState),(z=lr||qh(i,a,z,l,Ee,X,fe))?(Te||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=X),T.props=l,T.state=X,T.context=fe,l=z):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{T=i.stateNode,Mh(t,i),z=i.memoizedProps,fe=i.type===i.elementType?z:ai(i.type,z),T.props=fe,Te=i.pendingProps,Ee=T.context,X=a.contextType,typeof X=="object"&&X!==null?X=$n(X):(X=Cn(a)?Ir:pn.current,X=hs(i,X));var Ge=a.getDerivedStateFromProps;(Me=typeof Ge=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Te||Ee!==X)&&Zh(i,T,l,X),lr=!1,Ee=i.memoizedState,T.state=Ee,Co(i,l,T,d);var Ye=i.memoizedState;z!==Te||Ee!==Ye||An.current||lr?(typeof Ge=="function"&&(Wc(i,a,Ge,l),Ye=i.memoizedState),(fe=lr||qh(i,a,fe,l,Ee,Ye,X)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,Ye,X),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,Ye,X)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ye),T.props=l,T.state=Ye,T.context=X,l=fe):(typeof T.componentDidUpdate!="function"||z===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return Zc(t,i,a,l,g,d)}function Zc(t,i,a,l,d,g){ap(t,i);var T=(i.flags&128)!==0;if(!l&&!T)return d&&fh(i,a,!1),ki(t,i,g);l=i.stateNode,dx.current=i;var z=T&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&T?(i.child=xs(i,t.child,null,g),i.child=xs(i,null,z,g)):En(t,i,z,g),i.memoizedState=l.state,d&&fh(i,a,!0),i.child}function lp(t){var i=t.stateNode;i.pendingContext?uh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&uh(t,i.context,!1),Pc(t,i.containerInfo)}function cp(t,i,a,l,d){return gs(),Tc(d),i.flags|=256,En(t,i,a,l),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function up(t,i,a){var l=i.pendingProps,d=jt.current,g=!1,T=(i.flags&128)!==0,z;if((z=T)||(z=t!==null&&t.memoizedState===null?!1:(d&2)!==0),z?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),kt(jt,d&1),t===null)return bc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=l.children,t=l.fallback,g?(l=i.mode,g=i.child,T={mode:"hidden",children:T},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=$o(T,l,0,null),t=Hr(t,l,a,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=Qc(a),i.memoizedState=Kc,t):Jc(i,T));if(d=t.memoizedState,d!==null&&(z=d.dehydrated,z!==null))return fx(t,i,T,l,z,d,a);if(g){g=l.fallback,T=i.mode,d=t.child,z=d.sibling;var X={mode:"hidden",children:l.children};return(T&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=X,i.deletions=null):(l=mr(d,X),l.subtreeFlags=d.subtreeFlags&14680064),z!==null?g=mr(z,g):(g=Hr(g,T,a,null),g.flags|=2),g.return=i,l.return=i,l.sibling=g,i.child=l,l=g,g=i.child,T=t.child.memoizedState,T=T===null?Qc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=t.childLanes&~a,i.memoizedState=Kc,l}return g=t.child,t=g.sibling,l=mr(g,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Jc(t,i){return i=$o({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,a,l){return l!==null&&Tc(l),xs(i,t.child,null,a),t=Jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function fx(t,i,a,l,d,g,T){if(a)return i.flags&256?(i.flags&=-257,l=Yc(Error(n(422))),Oo(t,i,T,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=l.fallback,d=i.mode,l=$o({mode:"visible",children:l.children},d,0,null),g=Hr(g,d,T,null),g.flags|=2,l.return=i,g.return=i,l.sibling=g,i.child=l,(i.mode&1)!==0&&xs(i,t.child,null,T),i.child.memoizedState=Qc(T),i.memoizedState=Kc,g);if((i.mode&1)===0)return Oo(t,i,T,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var z=l.dgst;return l=z,g=Error(n(419)),l=Yc(g,l,void 0),Oo(t,i,T,l)}if(z=(T&t.childLanes)!==0,Rn||z){if(l=an,l!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|T))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Oi(t,d),ci(l,t,d,-1))}return mu(),l=Yc(Error(n(421))),Oo(t,i,T,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=bx.bind(null,t),d._reactRetry=i,null):(t=g.treeContext,Fn=rr(d.nextSibling),kn=i,Gt=!0,si=null,t!==null&&(Yn[qn++]=Di,Yn[qn++]=Ui,Yn[qn++]=Lr,Di=t.id,Ui=t.overflow,Lr=i),i=Jc(i,l.children),i.flags|=4096,i)}function dp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Nc(t.return,i,a)}function eu(t,i,a,l,d){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=a,g.tailMode=d)}function fp(t,i,a){var l=i.pendingProps,d=l.revealOrder,g=l.tail;if(En(t,i,l.children,a),l=jt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dp(t,a,i);else if(t.tag===19)dp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(kt(jt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Ro(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),eu(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ro(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}eu(i,!0,a,null,g);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ki(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function hx(t,i,a){switch(i.tag){case 3:lp(i),gs();break;case 5:Th(i);break;case 1:Cn(i.type)&&vo(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;kt(bo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(kt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?up(t,i,a):(kt(jt,jt.current&1),t=ki(t,i,a),t!==null?t.sibling:null);kt(jt,jt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return fp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(jt,jt.current),l)break;return null;case 22:case 23:return i.lanes=0,sp(t,i,a)}return ki(t,i,a)}var hp,tu,pp,mp;hp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},tu=function(){},pp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Ur(vi.current);var g=null;switch(a){case"input":d=H(t,d),l=H(t,l),g=[];break;case"select":d=L({},d,{value:void 0}),l=L({},l,{value:void 0}),g=[];break;case"textarea":d=C(t,d),l=C(t,l),g=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=go)}St(a,l);var T;a=null;for(fe in d)if(!l.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var z=d[fe];for(T in z)z.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in l){var X=l[fe];if(z=d?.[fe],l.hasOwnProperty(fe)&&X!==z&&(X!=null||z!=null))if(fe==="style")if(z){for(T in z)!z.hasOwnProperty(T)||X&&X.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in X)X.hasOwnProperty(T)&&z[T]!==X[T]&&(a||(a={}),a[T]=X[T])}else a||(g||(g=[]),g.push(fe,a)),a=X;else fe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,z=z?z.__html:void 0,X!=null&&z!==X&&(g=g||[]).push(fe,X)):fe==="children"?typeof X!="string"&&typeof X!="number"||(g=g||[]).push(fe,""+X):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(X!=null&&fe==="onScroll"&&Bt("scroll",t),g||z===X||(g=[])):(g=g||[]).push(fe,X))}a&&(g=g||[]).push("style",a);var fe=g;(i.updateQueue=fe)&&(i.flags|=4)}},mp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ta(t,i){if(!Gt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function px(t,i,a){var l=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Cn(i.type)&&yo(),gn(i),null;case 3:return l=i.stateNode,_s(),Ht(An),Ht(pn),Oc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Mo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(fu(si),si=null))),tu(t,i),gn(i),null;case 5:Dc(i);var d=Ur(Sa.current);if(a=i.type,t!==null&&i.stateNode!=null)pp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Ur(vi.current),Mo(i)){l=i.stateNode,a=i.type;var g=i.memoizedProps;switch(l[yi]=i,l[ga]=g,t=(i.mode&1)!==0,a){case"dialog":Bt("cancel",l),Bt("close",l);break;case"iframe":case"object":case"embed":Bt("load",l);break;case"video":case"audio":for(d=0;d<ha.length;d++)Bt(ha[d],l);break;case"source":Bt("error",l);break;case"img":case"image":case"link":Bt("error",l),Bt("load",l);break;case"details":Bt("toggle",l);break;case"input":gt(l,g),Bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Bt("invalid",l);break;case"textarea":oe(l,g),Bt("invalid",l)}St(a,g),d=null;for(var T in g)if(g.hasOwnProperty(T)){var z=g[T];T==="children"?typeof z=="string"?l.textContent!==z&&(g.suppressHydrationWarning!==!0&&mo(l.textContent,z,t),d=["children",z]):typeof z=="number"&&l.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&mo(l.textContent,z,t),d=["children",""+z]):o.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&Bt("scroll",l)}switch(a){case"input":De(l),Oe(l,g,!0);break;case"textarea":De(l),Se(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=go)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=T.createElement(a,{is:l.is}):(t=T.createElement(a),a==="select"&&(T=t,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):t=T.createElementNS(t,a),t[yi]=i,t[ga]=l,hp(t,i,!1,!1),i.stateNode=t;e:{switch(T=ft(a,l),a){case"dialog":Bt("cancel",t),Bt("close",t),d=l;break;case"iframe":case"object":case"embed":Bt("load",t),d=l;break;case"video":case"audio":for(d=0;d<ha.length;d++)Bt(ha[d],t);d=l;break;case"source":Bt("error",t),d=l;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),d=l;break;case"details":Bt("toggle",t),d=l;break;case"input":gt(t,l),d=H(t,l),Bt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=L({},l,{value:void 0}),Bt("invalid",t);break;case"textarea":oe(t,l),d=C(t,l),Bt("invalid",t);break;default:d=l}St(a,d),z=d;for(g in z)if(z.hasOwnProperty(g)){var X=z[g];g==="style"?ot(t,X):g==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&He(t,X)):g==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&pt(t,X):typeof X=="number"&&pt(t,""+X):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?X!=null&&g==="onScroll"&&Bt("scroll",t):X!=null&&P(t,g,X,T))}switch(a){case"input":De(t),Oe(t,l,!1);break;case"textarea":De(t),Se(t);break;case"option":l.value!=null&&t.setAttribute("value",""+me(l.value));break;case"select":t.multiple=!!l.multiple,g=l.value,g!=null?D(t,!!l.multiple,g,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=go)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)mp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Ur(Sa.current),Ur(vi.current),Mo(i)){if(l=i.stateNode,a=i.memoizedProps,l[yi]=i,(g=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:mo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(l.nodeValue,a,(t.mode&1)!==0)}g&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[yi]=i,i.stateNode=l}return gn(i),null;case 13:if(Ht(jt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)yh(),gs(),i.flags|=98560,g=!1;else if(g=Mo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[yi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),g=!1}else si!==null&&(fu(si),si=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(jt.current&1)!==0?tn===0&&(tn=3):mu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return _s(),tu(t,i),t===null&&pa(i.stateNode.containerInfo),gn(i),null;case 10:return Rc(i.type._context),gn(i),null;case 17:return Cn(i.type)&&yo(),gn(i),null;case 19:if(Ht(jt),g=i.memoizedState,g===null)return gn(i),null;if(l=(i.flags&128)!==0,T=g.rendering,T===null)if(l)Ta(g,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Ro(t),T!==null){for(i.flags|=128,Ta(g,!1),l=T.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)g=a,t=l,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,t=T.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return kt(jt,jt.current&1|2),i.child}t=t.sibling}g.tail!==null&&Ae()>ws&&(i.flags|=128,l=!0,Ta(g,!1),i.lanes=4194304)}else{if(!l)if(t=Ro(T),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!Gt)return gn(i),null}else 2*Ae()-g.renderingStartTime>ws&&a!==1073741824&&(i.flags|=128,l=!0,Ta(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ae(),i.sibling=null,a=jt.current,kt(jt,l?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return pu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function mx(t,i){switch(Mc(i),i.tag){case 1:return Cn(i.type)&&yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Ht(An),Ht(pn),Oc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Ht(jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(jt),null;case 4:return _s(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var ko=!1,xn=!1,gx=typeof WeakSet=="function"?WeakSet:Set,We=null;function Es(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Yt(t,i,l)}else a.current=null}function nu(t,i,a){try{a()}catch(l){Yt(t,i,l)}}var gp=!1;function xx(t,i){if(pc=io,t=qf(),ac(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,z=-1,X=-1,fe=0,Me=0,Te=t,Ee=null;t:for(;;){for(var Ge;Te!==a||d!==0&&Te.nodeType!==3||(z=T+d),Te!==g||l!==0&&Te.nodeType!==3||(X=T+l),Te.nodeType===3&&(T+=Te.nodeValue.length),(Ge=Te.firstChild)!==null;)Ee=Te,Te=Ge;for(;;){if(Te===t)break t;if(Ee===a&&++fe===d&&(z=T),Ee===g&&++Me===l&&(X=T),(Ge=Te.nextSibling)!==null)break;Te=Ee,Ee=Te.parentNode}Te=Ge}a=z===-1||X===-1?null:{start:z,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(mc={focusedElem:t,selectionRange:a},io=!1,We=i;We!==null;)if(i=We,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,We=t;else for(;We!==null;){i=We;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,$t=Ye.memoizedState,ne=i.stateNode,Y=ne.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:ai(i.type,Ze),$t);ne.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){Yt(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,We=t;break}We=i.return}return Ye=gp,gp=!1,Ye}function Aa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var g=d.destroy;d.destroy=void 0,g!==void 0&&nu(i,a,g)}d=d.next}while(d!==l)}}function Fo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function iu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function xp(t){var i=t.alternate;i!==null&&(t.alternate=null,xp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[yi],delete i[ga],delete i[vc],delete i[J0],delete i[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yp(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=go));else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,a),t=t.sibling;t!==null;)ru(t,i,a),t=t.sibling}function su(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(su(t,i,a),t=t.sibling;t!==null;)su(t,i,a),t=t.sibling}var cn=null,oi=!1;function ur(t,i,a){for(a=a.child;a!==null;)_p(t,i,a),a=a.sibling}function _p(t,i,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Lt,a)}catch{}switch(a.tag){case 5:xn||Es(a,i);case 6:var l=cn,d=oi;cn=null,ur(t,i,a),cn=l,oi=d,cn!==null&&(oi?(t=cn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(oi?(t=cn,a=a.stateNode,t.nodeType===8?yc(t.parentNode,a):t.nodeType===1&&yc(t,a),sa(t)):yc(cn,a.stateNode));break;case 4:l=cn,d=oi,cn=a.stateNode.containerInfo,oi=!0,ur(t,i,a),cn=l,oi=d;break;case 0:case 11:case 14:case 15:if(!xn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var g=d,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&nu(a,i,T),d=d.next}while(d!==l)}ur(t,i,a);break;case 1:if(!xn&&(Es(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(z){Yt(a,i,z)}ur(t,i,a);break;case 21:ur(t,i,a);break;case 22:a.mode&1?(xn=(l=xn)||a.memoizedState!==null,ur(t,i,a),xn=l):ur(t,i,a);break;default:ur(t,i,a)}}function Sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new gx),i.forEach(function(l){var d=Tx.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function li(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var g=t,T=i,z=T;e:for(;z!==null;){switch(z.tag){case 5:cn=z.stateNode,oi=!1;break e;case 3:cn=z.stateNode.containerInfo,oi=!0;break e;case 4:cn=z.stateNode.containerInfo,oi=!0;break e}z=z.return}if(cn===null)throw Error(n(160));_p(g,T,d),cn=null,oi=!1;var X=d.alternate;X!==null&&(X.return=null),d.return=null}catch(fe){Yt(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,t),i=i.sibling}function Ep(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(i,t),Si(t),l&4){try{Aa(3,t,t.return),Fo(3,t)}catch(Ze){Yt(t,t.return,Ze)}try{Aa(5,t,t.return)}catch(Ze){Yt(t,t.return,Ze)}}break;case 1:li(i,t),Si(t),l&512&&a!==null&&Es(a,a.return);break;case 5:if(li(i,t),Si(t),l&512&&a!==null&&Es(a,a.return),t.flags&32){var d=t.stateNode;try{pt(d,"")}catch(Ze){Yt(t,t.return,Ze)}}if(l&4&&(d=t.stateNode,d!=null)){var g=t.memoizedProps,T=a!==null?a.memoizedProps:g,z=t.type,X=t.updateQueue;if(t.updateQueue=null,X!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&Ie(d,g),ft(z,T);var fe=ft(z,g);for(T=0;T<X.length;T+=2){var Me=X[T],Te=X[T+1];Me==="style"?ot(d,Te):Me==="dangerouslySetInnerHTML"?He(d,Te):Me==="children"?pt(d,Te):P(d,Me,Te,fe)}switch(z){case"input":Be(d,g);break;case"textarea":_e(d,g);break;case"select":var Ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ge=g.value;Ge!=null?D(d,!!g.multiple,Ge,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?D(d,!!g.multiple,g.defaultValue,!0):D(d,!!g.multiple,g.multiple?[]:"",!1))}d[ga]=g}catch(Ze){Yt(t,t.return,Ze)}}break;case 6:if(li(i,t),Si(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,g=t.memoizedProps;try{d.nodeValue=g}catch(Ze){Yt(t,t.return,Ze)}}break;case 3:if(li(i,t),Si(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{sa(i.containerInfo)}catch(Ze){Yt(t,t.return,Ze)}break;case 4:li(i,t),Si(t);break;case 13:li(i,t),Si(t),d=t.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(lu=Ae())),l&4&&Sp(t);break;case 22:if(Me=a!==null&&a.memoizedState!==null,t.mode&1?(xn=(fe=xn)||Me,li(i,t),xn=fe):li(i,t),Si(t),l&8192){if(fe=t.memoizedState!==null,(t.stateNode.isHidden=fe)&&!Me&&(t.mode&1)!==0)for(We=t,Me=t.child;Me!==null;){for(Te=We=Me;We!==null;){switch(Ee=We,Ge=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Aa(4,Ee,Ee.return);break;case 1:Es(Ee,Ee.return);var Ye=Ee.stateNode;if(typeof Ye.componentWillUnmount=="function"){l=Ee,a=Ee.return;try{i=l,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ze){Yt(l,a,Ze)}}break;case 5:Es(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){bp(Te);continue}}Ge!==null?(Ge.return=Ee,We=Ge):bp(Te)}Me=Me.sibling}e:for(Me=null,Te=t;;){if(Te.tag===5){if(Me===null){Me=Te;try{d=Te.stateNode,fe?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=Te.stateNode,X=Te.memoizedProps.style,T=X!=null&&X.hasOwnProperty("display")?X.display:null,z.style.display=it("display",T))}catch(Ze){Yt(t,t.return,Ze)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=fe?"":Te.memoizedProps}catch(Ze){Yt(t,t.return,Ze)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:li(i,t),Si(t),l&4&&Sp(t);break;case 21:break;default:li(i,t),Si(t)}}function Si(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(yp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(pt(d,""),l.flags&=-33);var g=vp(t);su(t,g,d);break;case 3:case 4:var T=l.stateNode.containerInfo,z=vp(t);ru(t,z,T);break;default:throw Error(n(161))}}catch(X){Yt(t,t.return,X)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function yx(t,i,a){We=t,Mp(t)}function Mp(t,i,a){for(var l=(t.mode&1)!==0;We!==null;){var d=We,g=d.child;if(d.tag===22&&l){var T=d.memoizedState!==null||ko;if(!T){var z=d.alternate,X=z!==null&&z.memoizedState!==null||xn;z=ko;var fe=xn;if(ko=T,(xn=X)&&!fe)for(We=d;We!==null;)T=We,X=T.child,T.tag===22&&T.memoizedState!==null?Tp(d):X!==null?(X.return=T,We=X):Tp(d);for(;g!==null;)We=g,Mp(g),g=g.sibling;We=d,ko=z,xn=fe}wp(t)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,We=g):wp(t)}}function wp(t){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Fo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!xn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ai(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&bh(i,g,l);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}bh(i,T,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Me=fe.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&sa(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xn||i.flags&512&&iu(i)}catch(Ee){Yt(i,i.return,Ee)}}if(i===t){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function bp(t){for(;We!==null;){var i=We;if(i===t){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Tp(t){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Fo(4,i)}catch(X){Yt(i,a,X)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(X){Yt(i,d,X)}}var g=i.return;try{iu(i)}catch(X){Yt(i,g,X)}break;case 5:var T=i.return;try{iu(i)}catch(X){Yt(i,T,X)}}}catch(X){Yt(i,i.return,X)}if(i===t){We=null;break}var z=i.sibling;if(z!==null){z.return=i.return,We=z;break}We=i.return}}var vx=Math.ceil,Bo=R.ReactCurrentDispatcher,au=R.ReactCurrentOwner,Kn=R.ReactCurrentBatchConfig,Tt=0,an=null,Zt=null,un=0,Bn=0,Ms=sr(0),tn=0,Ca=null,zr=0,Ho=0,ou=0,Ra=null,Nn=null,lu=0,ws=1/0,Fi=null,Go=!1,cu=null,dr=null,Vo=!1,fr=null,jo=0,Na=0,uu=null,Wo=-1,Xo=0;function Mn(){return(Tt&6)!==0?Ae():Wo!==-1?Wo:Wo=Ae()}function hr(t){return(t.mode&1)===0?1:(Tt&2)!==0&&un!==0?un&-un:nx.transition!==null?(Xo===0&&(Xo=Sn()),Xo):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:Cf(t.type)),t)}function ci(t,i,a,l){if(50<Na)throw Na=0,uu=null,Error(n(185));Tn(t,a,l),((Tt&2)===0||t!==an)&&(t===an&&((Tt&2)===0&&(Ho|=a),tn===4&&pr(t,un)),In(t,l),a===1&&Tt===0&&(i.mode&1)===0&&(ws=Ae()+500,_o&&or()))}function In(t,i){var a=t.callbackNode;Wn(t,i);var l=xi(t,t===an?un:0);if(l===0)a!==null&&pe(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&pe(a),i===1)t.tag===0?tx(Cp.bind(null,t)):hh(Cp.bind(null,t)),K0(function(){(Tt&6)===0&&or()}),a=null;else{switch(_f(l)){case 1:a=$e;break;case 4:a=ct;break;case 16:a=dt;break;case 536870912:a=wt;break;default:a=dt}a=Op(a,Ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Ap(t,i){if(Wo=-1,Xo=0,(Tt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(bs()&&t.callbackNode!==a)return null;var l=xi(t,t===an?un:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Yo(t,l);else{i=l;var d=Tt;Tt|=2;var g=Np();(an!==t||un!==i)&&(Fi=null,ws=Ae()+500,Fr(t,i));do try{Ex();break}catch(z){Rp(t,z)}while(!0);Cc(),Bo.current=g,Tt=d,Zt!==null?i=0:(an=null,un=0,i=tn)}if(i!==0){if(i===2&&(d=Ii(t),d!==0&&(l=d,i=du(t,d))),i===1)throw a=Ca,Fr(t,0),pr(t,l),In(t,Ae()),a;if(i===6)pr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!_x(d)&&(i=Yo(t,l),i===2&&(g=Ii(t),g!==0&&(l=g,i=du(t,g))),i===1))throw a=Ca,Fr(t,0),pr(t,l),In(t,Ae()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Br(t,Nn,Fi);break;case 3:if(pr(t,l),(l&130023424)===l&&(i=lu+500-Ae(),10<i)){if(xi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=xc(Br.bind(null,t,Nn,Fi),i);break}Br(t,Nn,Fi);break;case 4:if(pr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var T=31-mt(l);g=1<<T,T=i[T],T>d&&(d=T),l&=~g}if(l=d,l=Ae()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*vx(l/1960))-l,10<l){t.timeoutHandle=xc(Br.bind(null,t,Nn,Fi),l);break}Br(t,Nn,Fi);break;case 5:Br(t,Nn,Fi);break;default:throw Error(n(329))}}}return In(t,Ae()),t.callbackNode===a?Ap.bind(null,t):null}function du(t,i){var a=Ra;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Yo(t,i),t!==2&&(i=Nn,Nn=a,i!==null&&fu(i)),t}function fu(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function _x(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],g=d.getSnapshot;d=d.value;try{if(!ri(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(t,i){for(i&=~ou,i&=~Ho,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-mt(i),l=1<<a;t[a]=-1,i&=~l}}function Cp(t){if((Tt&6)!==0)throw Error(n(327));bs();var i=xi(t,0);if((i&1)===0)return In(t,Ae()),null;var a=Yo(t,i);if(t.tag!==0&&a===2){var l=Ii(t);l!==0&&(i=l,a=du(t,l))}if(a===1)throw a=Ca,Fr(t,0),pr(t,i),In(t,Ae()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Br(t,Nn,Fi),In(t,Ae()),null}function hu(t,i){var a=Tt;Tt|=1;try{return t(i)}finally{Tt=a,Tt===0&&(ws=Ae()+500,_o&&or())}}function kr(t){fr!==null&&fr.tag===0&&(Tt&6)===0&&bs();var i=Tt;Tt|=1;var a=Kn.transition,l=Dt;try{if(Kn.transition=null,Dt=1,t)return t()}finally{Dt=l,Kn.transition=a,Tt=i,(Tt&6)===0&&or()}}function pu(){Bn=Ms.current,Ht(Ms)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Z0(a)),Zt!==null)for(a=Zt.return;a!==null;){var l=a;switch(Mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&yo();break;case 3:_s(),Ht(An),Ht(pn),Oc();break;case 5:Dc(l);break;case 4:_s();break;case 13:Ht(jt);break;case 19:Ht(jt);break;case 10:Rc(l.type._context);break;case 22:case 23:pu()}a=a.return}if(an=t,Zt=t=mr(t.current,null),un=Bn=i,tn=0,Ca=null,ou=Ho=zr=0,Nn=Ra=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,g=a.pending;if(g!==null){var T=g.next;g.next=d,l.next=T}a.pending=l}Dr=null}return t}function Rp(t,i){do{var a=Zt;try{if(Cc(),No.current=Do,Io){for(var l=Wt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Io=!1}if(Or=0,sn=en=Wt=null,Ea=!1,Ma=0,au.current=null,a===null||a.return===null){tn=1,Ca=i,Zt=null;break}e:{var g=t,T=a.return,z=a,X=i;if(i=un,z.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var fe=X,Me=z,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ge=ep(T);if(Ge!==null){Ge.flags&=-257,tp(Ge,T,z,g,i),Ge.mode&1&&Jh(g,fe,i),i=Ge,X=fe;var Ye=i.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(X),i.updateQueue=Ze}else Ye.add(X);break e}else{if((i&1)===0){Jh(g,fe,i),mu();break e}X=Error(n(426))}}else if(Gt&&z.mode&1){var $t=ep(T);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),tp($t,T,z,g,i),Tc(Ss(X,z));break e}}g=X=Ss(X,z),tn!==4&&(tn=2),Ra===null?Ra=[g]:Ra.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ne=Kh(g,X,i);wh(g,ne);break e;case 1:z=X;var Y=g.type,ae=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(dr===null||!dr.has(ae)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=Qh(g,z,i);wh(g,Ce);break e}}g=g.return}while(g!==null)}Lp(a)}catch(tt){i=tt,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Np(){var t=Bo.current;return Bo.current=Do,t===null?Do:t}function mu(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(zr&268435455)===0&&(Ho&268435455)===0||pr(an,un)}function Yo(t,i){var a=Tt;Tt|=2;var l=Np();(an!==t||un!==i)&&(Fi=null,Fr(t,i));do try{Sx();break}catch(d){Rp(t,d)}while(!0);if(Cc(),Tt=a,Bo.current=l,Zt!==null)throw Error(n(261));return an=null,un=0,tn}function Sx(){for(;Zt!==null;)Ip(Zt)}function Ex(){for(;Zt!==null&&!J();)Ip(Zt)}function Ip(t){var i=Up(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Lp(t):Zt=i,au.current=null}function Lp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=px(a,i,Bn),a!==null){Zt=a;return}}else{if(a=mx(a,i),a!==null){a.flags&=32767,Zt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Br(t,i,a){var l=Dt,d=Kn.transition;try{Kn.transition=null,Dt=1,Mx(t,i,a,l)}finally{Kn.transition=d,Dt=l}return null}function Mx(t,i,a,l){do bs();while(fr!==null);if((Tt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(eo(t,g),t===an&&(Zt=an=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vo||(Vo=!0,Op(dt,function(){return bs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Kn.transition,Kn.transition=null;var T=Dt;Dt=1;var z=Tt;Tt|=4,au.current=null,xx(t,a),Ep(a,t),V0(mc),io=!!pc,mc=pc=null,t.current=a,yx(a),Ne(),Tt=z,Dt=T,Kn.transition=g}else t.current=a;if(Vo&&(Vo=!1,fr=t,jo=d),g=t.pendingLanes,g===0&&(dr=null),fn(a.stateNode),In(t,Ae()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Go)throw Go=!1,t=cu,cu=null,t;return(jo&1)!==0&&t.tag!==0&&bs(),g=t.pendingLanes,(g&1)!==0?t===uu?Na++:(Na=0,uu=t):Na=0,or(),null}function bs(){if(fr!==null){var t=_f(jo),i=Kn.transition,a=Dt;try{if(Kn.transition=null,Dt=16>t?16:t,fr===null)var l=!1;else{if(t=fr,fr=null,jo=0,(Tt&6)!==0)throw Error(n(331));var d=Tt;for(Tt|=4,We=t.current;We!==null;){var g=We,T=g.child;if((We.flags&16)!==0){var z=g.deletions;if(z!==null){for(var X=0;X<z.length;X++){var fe=z[X];for(We=fe;We!==null;){var Me=We;switch(Me.tag){case 0:case 11:case 15:Aa(8,Me,g)}var Te=Me.child;if(Te!==null)Te.return=Me,We=Te;else for(;We!==null;){Me=We;var Ee=Me.sibling,Ge=Me.return;if(xp(Me),Me===fe){We=null;break}if(Ee!==null){Ee.return=Ge,We=Ee;break}We=Ge}}}var Ye=g.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var $t=Ze.sibling;Ze.sibling=null,Ze=$t}while(Ze!==null)}}We=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,We=T;else e:for(;We!==null;){if(g=We,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Aa(9,g,g.return)}var ne=g.sibling;if(ne!==null){ne.return=g.return,We=ne;break e}We=g.return}}var Y=t.current;for(We=Y;We!==null;){T=We;var ae=T.child;if((T.subtreeFlags&2064)!==0&&ae!==null)ae.return=T,We=ae;else e:for(T=Y;We!==null;){if(z=We,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Fo(9,z)}}catch(tt){Yt(z,z.return,tt)}if(z===T){We=null;break e}var Ce=z.sibling;if(Ce!==null){Ce.return=z.return,We=Ce;break e}We=z.return}}if(Tt=d,or(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Lt,t)}catch{}l=!0}return l}finally{Dt=a,Kn.transition=i}}return!1}function Pp(t,i,a){i=Ss(a,i),i=Kh(t,i,1),t=cr(t,i,1),i=Mn(),t!==null&&(Tn(t,1,i),In(t,i))}function Yt(t,i,a){if(t.tag===3)Pp(t,t,a);else for(;i!==null;){if(i.tag===3){Pp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dr===null||!dr.has(l))){t=Ss(a,t),t=Qh(i,t,1),i=cr(i,t,1),t=Mn(),i!==null&&(Tn(i,1,t),In(i,t));break}}i=i.return}}function wx(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&a,an===t&&(un&a)===a&&(tn===4||tn===3&&(un&130023424)===un&&500>Ae()-lu?Fr(t,0):ou|=a),In(t,i)}function Dp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var a=Mn();t=Oi(t,i),t!==null&&(Tn(t,i,a),In(t,a))}function bx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Dp(t,a)}function Tx(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Dp(t,a)}var Up;Up=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,hx(t,i,a);Rn=(t.flags&131072)!==0}else Rn=!1,Gt&&(i.flags&1048576)!==0&&ph(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;zo(t,i),t=i.pendingProps;var d=hs(i,pn.current);vs(i,a),d=Fc(null,i,l,t,d,a);var g=Bc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(g=!0,vo(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lc(i),d.updater=Uo,i.stateNode=d,d._reactInternals=i,Xc(i,l,t,a),i=Zc(null,i,l,!0,g,a)):(i.tag=0,Gt&&g&&Ec(i),En(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(zo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Cx(l),t=ai(l,t),d){case 0:i=$c(null,i,l,t,a);break e;case 1:i=op(null,i,l,t,a);break e;case 11:i=np(null,i,l,t,a);break e;case 14:i=ip(null,i,l,ai(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),$c(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),op(t,i,l,d,a);case 3:e:{if(lp(i),t===null)throw Error(n(387));l=i.pendingProps,g=i.memoizedState,d=g.element,Mh(t,i),Co(i,l,null,a);var T=i.memoizedState;if(l=T.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Ss(Error(n(423)),i),i=cp(t,i,l,a,d);break e}else if(l!==d){d=Ss(Error(n(424)),i),i=cp(t,i,l,a,d);break e}else for(Fn=rr(i.stateNode.containerInfo.firstChild),kn=i,Gt=!0,si=null,a=Sh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),l===d){i=ki(t,i,a);break e}En(t,i,l,a)}i=i.child}return i;case 5:return Th(i),t===null&&bc(i),l=i.type,d=i.pendingProps,g=t!==null?t.memoizedProps:null,T=d.children,gc(l,d)?T=null:g!==null&&gc(l,g)&&(i.flags|=32),ap(t,i),En(t,i,T,a),i.child;case 6:return t===null&&bc(i),null;case 13:return up(t,i,a);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=xs(i,null,l,a):En(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),np(t,i,l,d,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,g=i.memoizedProps,T=d.value,kt(bo,l._currentValue),l._currentValue=T,g!==null)if(ri(g.value,T)){if(g.children===d.children&&!An.current){i=ki(t,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){T=g.child;for(var X=z.firstContext;X!==null;){if(X.context===l){if(g.tag===1){X=zi(-1,a&-a),X.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var Me=fe.pending;Me===null?X.next=X:(X.next=Me.next,Me.next=X),fe.pending=X}}g.lanes|=a,X=g.alternate,X!==null&&(X.lanes|=a),Nc(g.return,a,i),z.lanes|=a;break}X=X.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(n(341));T.lanes|=a,z=T.alternate,z!==null&&(z.lanes|=a),Nc(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}En(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,vs(i,a),d=$n(d),l=l(d),i.flags|=1,En(t,i,l,a),i.child;case 14:return l=i.type,d=ai(l,i.pendingProps),d=ai(l.type,d),ip(t,i,l,d,a);case 15:return rp(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),zo(t,i),i.tag=1,Cn(l)?(t=!0,vo(i)):t=!1,vs(i,a),$h(i,l,d),Xc(i,l,d,a),Zc(null,i,l,!0,t,a);case 19:return fp(t,i,a);case 22:return sp(t,i,a)}throw Error(n(156,i.tag))};function Op(t,i){return he(t,i)}function Ax(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,a,l){return new Ax(t,i,a,l)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===re)return 14}return 2}function mr(t,i){var a=t.alternate;return a===null?(a=Qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function qo(t,i,a,l,d,g){var T=2;if(l=t,typeof t=="function")gu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case k:return Hr(a.children,d,g,i);case G:T=8,d|=8;break;case N:return t=Qn(12,a,i,d|2),t.elementType=N,t.lanes=g,t;case W:return t=Qn(13,a,i,d),t.elementType=W,t.lanes=g,t;case se:return t=Qn(19,a,i,d),t.elementType=se,t.lanes=g,t;case ie:return $o(a,d,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:T=10;break e;case O:T=9;break e;case K:T=11;break e;case re:T=14;break e;case Z:T=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(T,a,i,d),i.elementType=t,i.type=l,i.lanes=g,i}function Hr(t,i,a,l){return t=Qn(7,t,l,i),t.lanes=a,t}function $o(t,i,a,l){return t=Qn(22,t,l,i),t.elementType=ie,t.lanes=a,t.stateNode={isHidden:!1},t}function xu(t,i,a){return t=Qn(6,t,null,i),t.lanes=a,t}function yu(t,i,a){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Rx(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xn(0),this.expirationTimes=Xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vu(t,i,a,l,d,g,T,z,X){return t=new Rx(t,i,a,z,X),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Qn(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(g),t}function Nx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function zp(t){if(!t)return ar;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Cn(a))return dh(t,a,i)}return i}function kp(t,i,a,l,d,g,T,z,X){return t=vu(a,l,!0,t,d,g,T,z,X),t.context=zp(null),a=t.current,l=Mn(),d=hr(a),g=zi(l,d),g.callback=i??null,cr(a,g,d),t.current.lanes=d,Tn(t,d,l),In(t,l),t}function Zo(t,i,a,l){var d=i.current,g=Mn(),T=hr(d);return a=zp(a),i.context===null?i.context=a:i.pendingContext=a,i=zi(g,T),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=cr(d,i,T),t!==null&&(ci(t,d,T,g),Ao(t,d,T)),T}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function _u(t,i){Fp(t,i),(t=t.alternate)&&Fp(t,i)}function Ix(){return null}var Bp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}Qo.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Zo(t,i,null,null)},Qo.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;kr(function(){Zo(null,t,null,null)}),i[Li]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Mf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,t),a===0&&Tf(t)}};function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function Lx(t,i,a,l,d){if(d){if(typeof l=="function"){var g=l;l=function(){var fe=Ko(T);g.call(fe)}}var T=kp(i,l,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=T,t[Li]=T.current,pa(t.nodeType===8?t.parentNode:t),kr(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var z=l;l=function(){var fe=Ko(X);z.call(fe)}}var X=vu(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=X,t[Li]=X.current,pa(t.nodeType===8?t.parentNode:t),kr(function(){Zo(i,X,a,l)}),X}function el(t,i,a,l,d){var g=a._reactRootContainer;if(g){var T=g;if(typeof d=="function"){var z=d;d=function(){var X=Ko(T);z.call(X)}}Zo(i,T,t,d)}else T=Lx(a,i,t,d,l);return Ko(T)}Sf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Jt(i.pendingLanes);a!==0&&(Xl(i,a|1),In(i,Ae()),(Tt&6)===0&&(ws=Ae()+500,or()))}break;case 13:kr(function(){var l=Oi(t,1);if(l!==null){var d=Mn();ci(l,t,1,d)}}),_u(t,1)}},Yl=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var a=Mn();ci(i,t,134217728,a)}_u(t,134217728)}},Ef=function(t){if(t.tag===13){var i=hr(t),a=Oi(t,i);if(a!==null){var l=Mn();ci(a,t,i,l)}_u(t,i)}},Mf=function(){return Dt},wf=function(t,i){var a=Dt;try{return Dt=t,i()}finally{Dt=a}},Pe=function(t,i,a){switch(i){case"input":if(Be(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=xo(l);if(!d)throw Error(n(90));Re(l),Be(l,d)}}}break;case"textarea":_e(t,a);break;case"select":i=a.value,i!=null&&D(t,!!a.multiple,i,!1)}},Ft=hu,Qt=kr;var Px={usingClientEntryPoint:!1,Events:[xa,ds,xo,ze,ht,hu]},Ia={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dx={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Lt=tl.inject(Dx),Mt=tl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(i))throw Error(n(200));return Nx(t,i,null,a)},Ln.createRoot=function(t,i){if(!Eu(t))throw Error(n(299));var a=!1,l="",d=Bp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=vu(t,1,!1,null,null,a,!1,l,d),t[Li]=i.current,pa(t.nodeType===8?t.parentNode:t),new Su(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=I(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return kr(t)},Ln.hydrate=function(t,i,a){if(!Jo(i))throw Error(n(200));return el(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!Eu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,g="",T=Bp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=kp(i,null,t,1,a??null,d,!1,g,T),t[Li]=i.current,pa(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Qo(i)},Ln.render=function(t,i,a){if(!Jo(i))throw Error(n(200));return el(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(kr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1},Ln.unstable_batchedUpdates=hu,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Jo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,a,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var $p;function Gx(){if($p)return bu.exports;$p=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bu.exports=Hx(),bu.exports}var Zp;function Vx(){if(Zp)return nl;Zp=1;var s=Gx();return nl.createRoot=s.createRoot,nl.hydrateRoot=s.hydrateRoot,nl}var jx=Vx();const Wx=og(jx),Cu=[{id:"yzy_mono_dome",code:"YZY-DOME-01",name:"YZY MONO DOME",subtitle:"MONOLITHIC CATENARY EARTH DOME",category:"SINGLE RESIDENCE & DISASTER SHELTER",tagline:"Aerodynamic, self-supporting catenary arch dome immune to hurricane winds and wildfires.",description:"Inspired by ancient subterranean architecture and futuristic planetary habitats. Built with a continuous curved shell using compressed earth blocks, aircrete, or ferrocement over an inflatable compass arm guide. Zero structural wood or steel required.",sqft:350,diameter:"21.0 FT (6.4m)",height:"14.5 FT (4.4m)",occupancy:"2 - 4 Persons",buildTimeDays:7,difficulty:"NOVICE FRIENDLY",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"ferrocement",walls:"aircrete",roof:"aircrete",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:120,estimatedCostMin:3200,estimatedCostMax:7800,modelShape:"dome",windResistance:"220 MPH (Category 5+)",seismicZone:"Zone 4 (Maximum Flex Resilience)",thermalComfort:"Passive Solar & Earth-Bermed (Zero HVAC Needed in 0°F to 110°F)",idealFor:"Disaster relief, extreme climates, off-grid eco-living, homeless rehabilitation communities."},{id:"rammed_earth_villa",code:"YZY-VILLA-02",name:"MONOLITHIC EARTH VILLA",subtitle:"STARK MODERN BRUTALIST SINGLE-FAMILY HOME",category:"PERMANENT FAMILY RESIDENCE",tagline:"Massive 18-inch striated tamped earth walls with expansive floor-to-ceiling daylight portals.",description:"A timeless, ultra-modern brutalist sanctuary. The massive thermal inertia of rammed earth acts as a natural battery, absorbing desert heat by day and radiating warmth through cool nights. Combines minimalist raw earth textures with high-performance mass timber roof spans.",sqft:1200,diameter:"42.0 FT x 28.0 FT",height:"12.0 FT (3.6m)",occupancy:"4 - 6 Persons",buildTimeDays:21,difficulty:"INTERMEDIATE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"rammed_earth",walls:"rammed_earth",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"offgrid_solar_water"},baseLaborHours:480,estimatedCostMin:14500,estimatedCostMax:28e3,modelShape:"cuboid_villa",windResistance:"180 MPH",seismicZone:"Zone 4 Engineered Tie-Rods",thermalComfort:"Internal Thermal Flywheel (Constant 68°F-72°F microclimate)",idealFor:"Permanent rural/suburban family housing, regenerative agrarian retreats, enduring generational sanctuaries."},{id:"modular_eco_apartments",code:"YZY-MOD-03",name:"MODULAR COMMUNE BLOCK",subtitle:"MULTI-FAMILY 8-UNIT SUSTAINABLE APARTMENT SYSTEM",category:"MULTI-FAMILY HOUSING",tagline:"Scalable modular interlocking cube units built around a central shaded communal courtyard.",description:"Designed to rapidly solve urban and suburban housing crises. Standardized 600 sqft interlocking modular apartments constructed from Compressed Earth Blocks (CEBs) and Mass Timber, stacked up to 3 floors with shared acoustic mycelium separation and central rainwater filtration cistern.",sqft:4800,diameter:"65.0 FT x 75.0 FT (3 Stories)",height:"34.0 FT (10.3m)",occupancy:"24 - 32 Persons (8 Units)",buildTimeDays:45,difficulty:"COMMUNITY MASTER CREW",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"ceb_blocks",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:1450,estimatedCostMin:52e3,estimatedCostMax:98e3,modelShape:"modular_block",windResistance:"175 MPH",seismicZone:"Zone 4 Base-Isolated CLT joints",thermalComfort:"Communal central wind-tower draft & cross-ventilation",idealFor:"Affordable urban community housing, transitional refugee housing, university cooperatives."},{id:"donda_resilience_commons",code:"DONDA-CITY-04",name:"DONDA RESILIENCE COMMONS",subtitle:"DECENTRALIZED 24-UNIT AUTONOMOUS MICRO-CITY",category:"DECENTRALIZED ECO-VILLAGE",tagline:"100% self-sufficient closed-loop community ecosystem integrating shelter, food, solar, and water.",description:"A circular micro-city masterplan comprising 24 monolithic dome residences, a central geodesic community hub, open-air amphitheater, vertical permaculture aquaponic greenhouses, and a centralized renewable utility grid. Creates economic and energetic sovereignty for underserved communities.",sqft:18500,diameter:"320.0 FT Circular Perimeter",height:"28.0 FT Central Dome",occupancy:"80 - 120 Persons",buildTimeDays:90,difficulty:"DECENTRALIZED GUILD BUILD",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"bamboo_composite",walls:"rammed_earth",roof:"ferrocement",insulation:"mycelium_panels",utilities:"microgrid_communal"},baseLaborHours:5200,estimatedCostMin:185e3,estimatedCostMax:34e4,modelShape:"village_compound",windResistance:"220 MPH",seismicZone:"Geodesic Interlock (Extreme Resilient)",thermalComfort:"Integrated Earth-Tubes & Passive Aquifer Cooling",idealFor:"Sovereign intentional communities, Native American reservation empowerment, disaster recovery settlements."},{id:"rapid_emergency_pod",code:"YZY-POD-05",name:"RAPID EMERGENCY FLATPACK POD",subtitle:"48-HOUR CRITICAL RELIEF DEPLOYABLE SHELTER",category:"RAPID CRISIS RESPONSE",tagline:"Precision flatpack modular shelter assembled in under 48 hours with zero heavy machinery.",description:"A lightweight, interlocking bio-panel pod designed for immediate deployment to humanitarian crisis and disaster zones. Assembles using dry interlocking keyed pins. Features integrated insulated floor, roof rainwater run-off, and plug-and-play 12V solar LED & USB power kit.",sqft:160,diameter:"12.0 FT x 13.5 FT",height:"9.5 FT (2.9m)",occupancy:"1 - 3 Persons",buildTimeDays:2,difficulty:"ZERO EXPERIENCE NEEDED",defaultMaterials:{foundation:"recycled_poly_bricks",superstructure:"cross_laminated_timber",walls:"recycled_poly_bricks",roof:"ferrocement",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:24,estimatedCostMin:1400,estimatedCostMax:2900,modelShape:"micro_pod",windResistance:"140 MPH",seismicZone:"Zone 4 Flexible Joint Pod",thermalComfort:"Bio-foam Insulation (R-16 Envelope)",idealFor:"Disaster first-response, homeless transitional shelters, mobile clinic & quarantine stations."},{id:"terrace_earth_apartments",code:"YZY-TERRACE-06",name:"STEPPED EARTH TERRACE COMPLEX",subtitle:"BIOPHILIC STEPPED DUPLEX & APARTMENT TOWER",category:"HIGH-DENSITY MULTI-TIER",tagline:"Tiered stepped brutalist earth terraces with rooftop gardens on every single residential level.",description:"Inspired by ancient Mesopotamian ziggurats and high-density modernist brutalism. Each floor steps backward to provide the unit below with an expansive green garden terrace for food cultivation, solar collection, and natural shade.",sqft:9600,diameter:"90.0 FT x 60.0 FT (4 Tiers)",height:"45.0 FT (13.7m)",occupancy:"48 - 60 Persons (16 Units)",buildTimeDays:70,difficulty:"ENGINEERED COLLECTIVE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"hempcrete",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:2900,estimatedCostMin:11e4,estimatedCostMax:21e4,modelShape:"terrace_block",windResistance:"185 MPH",seismicZone:"Zone 4 Engineered CLT Intertie",thermalComfort:"Rooftop soil garden thermal blanket & passive air shafts",idealFor:"Dense urban eco-neighborhoods, communal housing cooperatives, humanitarian urban centers."}],il=[{id:"ceb_blocks",name:"COMPRESSED EARTH BLOCKS (CEB)",shortName:"CEB Blocks",category:"EARTH & SOIL",tagline:"Ultra-low cost subsoil compressed at 2,000 PSI with zero kiln firing.",description:"Formed using local subsoil (clay + sand) mixed with 5-8% lime/cement stabilizer and compressed using a manual or hydraulic press. Interlocking designs require zero mortar, drastically reducing labor and build time.",unitCost:"$0.45 / block ($4.20 / sq ft wall)",costPerSqFt:4.2,carbonImpact:-18.5,carbonRating:"EXEMPLARY (A+)",thermalRValue:2.8,thermalMass:"VERY HIGH",compressiveStrength:"1,200 - 1,800 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (With lime wash / hydrophobic sealer)",localSourcingRate:"90% On-Site Soil Excavation",sourcingMethod:'Excavate subsoil on-site. Sieve through 1/4" wire mesh. Mix with 8% lime. Press with manual Cinva-Ram ($380).',pros:["Extremely low cost ($0.45/block) — 90% of material dug directly from on-site foundation soil","Interlocking dry-stack design requires zero mortar and zero master masonry skills","Immune to termites, rot, mold, and wildfire (Class A 4-hour fireproof rating)","High thermal mass acts as a natural temperature battery stabilizing indoor microclimate"],cons:["Requires manual soil sieving and curing period (14 days with daily water mist)","Heavy physical weight requiring solid gravel trench or geopolymer footing","Needs protective roof overhangs and natural lime wash against direct monsoon rains"],supplier:{name:"AECT Earth Block Technologies",location:"San Antonio, Texas & Global Shipping",contact:"sales@aectearthblock.com | +1 (210) 633-6300",website:"aectearthblock.com",exactPrice:"$0.45 per standard block ($450 per pallet of 1,000 blocks)",minimumOrder:"1 Pallet or DIY on-site for $0.12/block with rented press",leadTime:"3-5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY DIY",lifespan:"100+ YEARS",compatibleLayers:["walls","foundation","superstructure"],colorHex:"#B8865A",textureType:"earth_block",badge:"TOP COST-SAVER"},{id:"rammed_earth",name:"MONOLITHIC RAMMED EARTH",shortName:"Rammed Earth",category:"EARTH & SOIL",tagline:"Stark, monolithic brutalist earthen walls with superior thermal flywheel inertia.",description:"Damp subsoil with gravel and clay tamped pneumatically or manually within slip-form wooden formwork. Produces gorgeous striated raw stone layers, perfect acoustic dampening, and zero off-gassing.",unitCost:"$6.80 / sq ft wall",costPerSqFt:6.8,carbonImpact:-14.2,carbonRating:"EXEMPLARY (A+)",thermalRValue:3.5,thermalMass:"MAXIMUM",compressiveStrength:"1,500 - 2,400 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (When capped with deep overhangs and lime stabilization)",localSourcingRate:"95% Local Quarry & Excavation",sourcingMethod:"Sourced directly from local quarry tailings or foundation excavation. Mix 70% aggregate/sand and 30% clay/silt.",pros:["Iconic monolithic brutalist aesthetic with breathtaking natural striated earth strata","Supreme acoustic isolation (kills outside traffic and environmental noise)","Zero off-gassing, zero drywall, zero paint needed — wall is fully structural and finished","Centuries-long lifespan (150+ years) getting stronger over time"],cons:["Requires sturdy reusable wooden slipform formwork setup","Labor-intensive tamping process (beneficial for community guild builds)","Difficult to modify or knock down once fully cured"],supplier:{name:"Sirewall / Earth Structures Group & Local Aggregates",location:"North America, Europe & Australia Hubs",contact:"info@sirewall.com | +1 (250) 537-9355",website:"sirewall.com",exactPrice:"$18.50 per ton delivered quarry road-base aggregate ($6.80/sqft installed DIY)",minimumOrder:"10 Tons (Dump truck delivery)",leadTime:"24-48 Hours from local aggregate yards"},laborDifficulty:"INTERMEDIATE (Formwork setup)",lifespan:"150+ YEARS",compatibleLayers:["walls","superstructure"],colorHex:"#A07855",textureType:"rammed_earth",badge:"ICONIC BRUTALISM"},{id:"hempcrete",name:"BIO-COMPOSITE HEMPCRETE",shortName:"Hempcrete",category:"BIO-MASS",tagline:"Carbon-negative breathable biocomposite wall fill with exceptional R-value.",description:"Cast blend of industrial hemp hurds (woody inner core) and hydraulic lime binder. Continuously absorbs atmospheric CO2 throughout its multi-century lifespan while regulating internal humidity and mold prevention.",unitCost:"$8.50 / sq ft wall",costPerSqFt:8.5,carbonImpact:-110,carbonRating:"NET CARBON SINK (-110kg CO2/m3)",thermalRValue:18,thermalMass:"MEDIUM-HIGH",compressiveStrength:"Non-structural infill (Requires timber or CEB post frame)",fireRating:"CLASS A (Flame retardant char layer)",waterResistance:"VAPOR PERMEABLE / BREATHABLE",localSourcingRate:"70% Agricultural Hemp Regions",sourcingMethod:"Blend 4 parts hemp hurds, 1 part hydrated lime binder, 1.5 parts water in pan mixer.",pros:["Gigantic Net Carbon Sink (-110 kg CO2 per cubic meter sequestered for life)","High thermal insulation (R-18) keeping rooms warm in winter and cool in summer","Vapor-permeable 'breathable' envelope naturally prevents interior humidity, mold, and rot","Lightweight and extremely novice-friendly to mix and cast"],cons:["Non-structural infill — requires structural timber or CEB column frame to carry roof load","Slower drying time (requires 4-8 weeks to fully cure before final breathable lime plaster)","Requires sourcing industrial hemp hurds from agricultural processing mills"],supplier:{name:"Hempitecture Inc. & US Hemp Brokerage",location:"Jerome, Idaho / Louisville, Kentucky",contact:"orders@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com",exactPrice:"$0.42 / lb ($840 per 1-ton super-sack of processed hemp hurd)",minimumOrder:"1 Super-sack (2,000 lbs) or 50 lb trial bags ($28/bag)",leadTime:"3-5 Business Days LTL Freight"},laborDifficulty:"NOVICE / COMMUNITY FRIENDLY",lifespan:"300+ YEARS (Petrifies into limestone over time)",compatibleLayers:["walls","insulation","roof"],colorHex:"#8B9574",textureType:"hemp_composite",badge:"MAX CARBON SINK"},{id:"mycelium_panels",name:"GROWN MYCELIUM STRUCTURAL PANELS",shortName:"Mycelium Bio-Foam",category:"BIO-MASS",tagline:"Self-assembling fungal root bio-foam grown in 7 days from agricultural crop waste.",description:"Mycelium (mushroom vegetative tissue) inoculated into agricultural waste substrates (straw, sawdust, husks) and grown inside modular molds. Baked to inactivate fungi, producing ultra-lightweight, 100% biodegradable thermal & acoustic panels.",unitCost:"$3.90 / sq ft panel",costPerSqFt:3.9,carbonImpact:-45,carbonRating:"NET CARBON SINK (A+)",thermalRValue:16.5,thermalMass:"LOW (Ultra-Lightweight)",compressiveStrength:"300 - 600 PSI (Rigid Foam Core)",fireRating:"CLASS 1 (Natural self-extinguishing char)",waterResistance:"TREATED (Natural wax or bio-resin coating)",localSourcingRate:"100% Farm Crop Residue Inoculation",sourcingMethod:"Grown in dark ambient containers in 7 days from pasteurized agricultural crop chaff and mushroom spawn.",pros:["Can be grown in 7 days in community micro-grow hubs with zero heavy industrial factories","Replaces toxic petroleum polystyrene foam insulation with 100% biodegradable bio-mass","Outstanding acoustic dampening and R-16.5 thermal resistance","Natural Class 1 flame retardance (chars rather than combusts)"],cons:["Must be baked or heat-dried at 180°F to deactivate live mycelium growth","Requires natural moisture barrier (beeswax, bio-resin) for exterior exposed applications","Lightweight core must be paired with protective cladding or plaster"],supplier:{name:"Ecovative Design / MycoWorks Commercial Materials",location:"Green Island, New York & Regional Grow Partners",contact:"grow@ecovative.com | +1 (518) 273-3753",website:"ecovative.com",exactPrice:'$3.90 / sq ft (24"x48" panels at $31.20 each) or $12 for 5-gal GIY Inoculum kit',minimumOrder:"10 Panels or DIY Grow Spawn bags",leadTime:"7 Days (Shipped fresh or grown on-demand)"},laborDifficulty:"NOVICE (Mold-grown process)",lifespan:"60+ YEARS",compatibleLayers:["insulation","roof","finishes"],colorHex:"#C5B9A5",textureType:"bio_foam",badge:"FUTURISTIC BIO-TECH"},{id:"geopolymer_concrete",name:"SLAG/POZZOLAN GEOPOLYMER CONCRETE",shortName:"Geopolymer Concrete",category:"CIRCULAR MINERAL",tagline:"85% lower carbon footprint than Portland cement with 2x chemical and heat resilience.",description:"Synthesized via alkaline activation of industrial aluminosilicate by-products (ground granulated blast furnace slag, fly ash, or calcined metakaolin). Cures with zero calcium oxide calcination emissions.",unitCost:"$5.10 / sq ft slab",costPerSqFt:5.1,carbonImpact:-4,carbonRating:"ULTRA LOW EMISSIONS (A)",thermalRValue:1.5,thermalMass:"HIGH",compressiveStrength:"4,500 - 8,000 PSI",fireRating:"CLASS A (Withstands 1,200°C without spalling)",waterResistance:"IMPERMEABLE",localSourcingRate:"80% Industrial Slag / Fly Ash / Volcanic Ash",sourcingMethod:"Mix slag/fly-ash with sodium silicate activator solution and aggregate.",pros:["85% reduction in embodied carbon compared to traditional Portland cement","Ultra-high compressive strength (up to 8,000 PSI) for indestructible foundation footings","Immune to acid, sulfate corrosion, and extreme heat (withstands 1,200°C without spalling)","Cures rapidly into durable permanent stone foundation"],cons:["Requires handling alkaline activator solution with basic safety gloves & goggles","Needs precise batch mixing ratios for optimal polymerization cure","Slightly less common in standard home-depot retail than Portland cement"],supplier:{name:"Boral Resources / Wagners Earth Friendly Concrete (EFC)",location:"International / Regional Slag Terminals",contact:"efc@wagner.com.au | +1 (800) 843-6652",website:"wagner.com.au/main/earth-friendly-concrete",exactPrice:"$128.00 / cubic yard ready-mix ($5.10 / sq ft 4-inch slab)",minimumOrder:"5 Cubic Yards or $18.50 per 50 lb dry binder bag",leadTime:"24-48 Hours Dispatch"},laborDifficulty:"INTERMEDIATE",lifespan:"200+ YEARS",compatibleLayers:["foundation","superstructure","roof"],colorHex:"#7A7A78",textureType:"raw_concrete",badge:"ULTRA-STRENGTH FOUNDATION"},{id:"cross_laminated_timber",name:"MASS TIMBER / CROSS-LAMINATED TIMBER (CLT)",shortName:"CLT Mass Timber",category:"RENEWABLE WOOD",tagline:"Precision-engineered solid wood slabs locking carbon into structural monolithic grids.",description:"Layers of kiln-dried sustainably managed lumber stacked perpendicularly and bonded with non-toxic polyurethane adhesive. Replaces steel and concrete for rapid modular multi-story assembly.",unitCost:"$11.20 / sq ft panel",costPerSqFt:11.2,carbonImpact:-95,carbonRating:"NET CARBON SINK (A+)",thermalRValue:8.5,thermalMass:"MEDIUM",compressiveStrength:"3,500 PSI (Bending strength 4,200 PSI)",fireRating:"CLASS A (Predictable slow charring protects core)",waterResistance:"MEDIUM (Requires weather barrier membrane)",localSourcingRate:"85% FSC-Certified Forestry & Regional Mills",sourcingMethod:"Procured from regional forestry cooperatives. Precision CNC cut for rapid crane assembly.",pros:["Precision pre-fabricated panels assemble on site in hours like giant lego blocks","Massive carbon storage (-95 kg CO2/sqft locked inside wood matrix)","Incredible biophilic warmth and natural wood interior finish (no drywall needed)","High strength-to-weight ratio allows multi-story cantilevered apartment designs"],cons:["Higher material cost ($11.20/sqft) than raw compressed earth ($4.20/sqft)","Requires crane or multi-person crew to hoist large heavy panels into place","Must be protected from continuous direct rain contact with weatherproofing"],supplier:{name:"SmartLam North America / Mercer Mass Timber",location:"Columbia Falls, Montana / Spokane, Washington",contact:"sales@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:'$11.20 / sq ft (3-ply 4.1" CLT billets at $358 per 8x4 ft panel)',minimumOrder:"1 Flatbed Truckload (4,000 sqft) or custom cut-to-order",leadTime:"2-3 Weeks CNC Fabrication"},laborDifficulty:"CRANE / MODULAR CREW",lifespan:"120+ YEARS",compatibleLayers:["superstructure","roof","walls"],colorHex:"#C9A066",textureType:"cross_timber",badge:"HIGH-RISE MODULAR"},{id:"aircrete",name:"FOAMED CELLULAR AIRCRETE",shortName:"Aircrete Foam Core",category:"FOAMED MINERAL",tagline:"Inexpensive, lightweight aerated mineral mix easily cut with hand saws.",description:"A slurry of stabilized cement/lime with tiny dense air bubbles produced by organic foaming agents. Weighs 1/5th of standard concrete, provides integrated thermal insulation, and allows easy dome casting.",unitCost:"$3.10 / sq ft",costPerSqFt:3.1,carbonImpact:-1.2,carbonRating:"LOW CARBON (B+)",thermalRValue:12,thermalMass:"MEDIUM",compressiveStrength:"400 - 800 PSI",fireRating:"CLASS A (Immune to fire/pest rot)",waterResistance:"HIGH (When coated with elastomeric or lime sealer)",localSourcingRate:"90% Standard Local Supplies + Bio-Foamer",sourcingMethod:"Prepared on-site using continuous bio-foam generator ($120 tool) and paddle mixer.",pros:["Extremely affordable ($3.10/sqft) and expands 4x in volume from foam bubbles","Ultra-lightweight (floats on water!) and can be shaped with standard wood hand saws","Class A fireproof and completely immune to termites, mold, and water rot","Ideal for rapid casting of curved parabolic monolithic domes"],cons:["Lower compressive strength (400-800 PSI) than solid earth — unsuitable for multi-story point loads","Requires continuous bio-foam generator wand tool ($120)","Needs exterior waterproof elastomeric or hot lime plaster coat"],supplier:{name:"Domegaia / AirCrete Global Supplies",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"support@domegaia.com | +1 (808) 575-2000",website:"domegaia.com",exactPrice:"$38.00 per gallon bio-foaming concentrate (makes 2,500 sqft of foam) + local binder",minimumOrder:"1 Gallon jug + $120 Foam Generator wand",leadTime:"3-5 Days Direct Shipping"},laborDifficulty:"NOVICE FRIENDLY",lifespan:"80+ YEARS",compatibleLayers:["walls","roof","insulation"],colorHex:"#E2E2DC",textureType:"aircrete_pumice",badge:"BEST FOR DOMES"},{id:"ferrocement",name:"ULTRA-THIN FERROCEMENT SHELL",shortName:"Ferrocement Shell",category:"COMPOSITE MINERAL",tagline:"High-strength, seismic-proof thin monolithic hyperbolic parabolic shell.",description:"Layers of fine wire mesh and reinforcement steel encapsulated in dense pozzolan-rich mortar plaster. Creates self-supporting curved domes, vaults, and roofs with 1/10th the material volume of regular concrete.",unitCost:"$2.90 / sq ft surface",costPerSqFt:2.9,carbonImpact:-2.5,carbonRating:"RESOURCE EFFICIENT (A-)",thermalRValue:1.2,thermalMass:"MEDIUM",compressiveStrength:"5,000+ PSI",fireRating:"CLASS A (Indestructible to wildfire)",waterResistance:"MAXIMUM (Waterproof tank grade)",localSourcingRate:"95% Hardware Wire Mesh & Local Sand",sourcingMethod:"Constructed with localized manual wire tying and hand plastering. Zero heavy equipment.",pros:["Ultra-thin structural shell (only 1-2 inches thick) saving 90% of material volume","Extreme hurricane and seismic resistance (flexes without brittle cracking)","Completely waterproof and wildfire-proof (used for ocean boat hulls and cisterns)","Requires zero cranes or heavy machinery — tied and plastered by hand"],cons:["Low inherent thermal insulation (R-1.2) — must be paired with mycelium/hemp interior insulation","Requires meticulous tying of wire mesh armature layers","Manual plastering requires steady hand troweling"],supplier:{name:"National Hardware Supply & Local Mesh Distributors",location:"Available in every hardware supply yard globally",contact:"Local steel and masonry supply",website:"mcmaster.com (Expanded metal & hardware cloth)",exactPrice:'$0.32 / sq ft for 1/2" 19-gauge galvanized welded wire mesh + $14 lime sack',minimumOrder:"100 ft rolls ($32.00 / roll)",leadTime:"Same-Day Local Pickup"},laborDifficulty:"NOVICE / ARTISAN DIY",lifespan:"100+ YEARS",compatibleLayers:["roof","superstructure","water_harvesting"],colorHex:"#8E8E89",textureType:"curved_shell",badge:"HURRICANE & SEISMIC PROOF"},{id:"recycled_poly_bricks",name:"CIRCULAR RECYCLED POLYMER INTERLOCKS",shortName:"Recycled Poly-Bricks",category:"CIRCULAR POLYMER",tagline:"100% upcycled ocean & municipal plastic waste molded into indestructible lego blocks.",description:"Sorted and washed HDPE/PP/LDPE plastic waste melted and compression molded into interlocking tongue-and-groove structural blocks. Eliminates mortar entirely and cleans thousands of tons of plastic waste.",unitCost:"$1.80 / block ($3.40 / sq ft wall)",costPerSqFt:3.4,carbonImpact:-62,carbonRating:"PLASTIC DIVERSION (A+)",thermalRValue:6.2,thermalMass:"LOW-MEDIUM",compressiveStrength:"1,800 - 2,500 PSI",fireRating:"CLASS B (Fire retardant mineral additives)",waterResistance:"100% IMPERMEABLE",localSourcingRate:"100% Community Plastic Recycling Streams",sourcingMethod:"Melt shredded municipal plastic bottles/caps into compression block molds.",pros:["Cleans up thousands of lbs of toxic plastic waste from oceans and landfills","Interlocking dry assembly with zero mortar, zero water, and zero drying time","100% waterproof and impervious to underground moisture or termite rot","Lightweight and indestructible to seismic earthquakes"],cons:["Requires fire-retardant mineral coating or natural lime plaster covering","Lower thermal mass inertia than solid rammed earth","Requires community plastic shredder and heated compression mold rig"],supplier:{name:"ByFusion Global Inc. / Precious Plastic Community",location:"Los Angeles, California / Global Open-Source Network",contact:"info@byfusion.com | +1 (310) 906-0300",website:"byfusion.com",exactPrice:'$1.80 per ByBlock (16"x8"x8" interlocking block)',minimumOrder:"1 Pallet of 120 blocks ($216.00) or DIY Precious Plastic mold system",leadTime:"5-7 Days Freight"},laborDifficulty:"ZERO-TOOL DRY ASSEMBLY",lifespan:"500+ YEARS (Non-biodegradable longevity)",compatibleLayers:["walls","foundation","finishes"],colorHex:"#2E4057",textureType:"poly_block",badge:"ZERO-WASTE CIRCULAR"},{id:"bamboo_composite",name:"STRUCTURAL TREATED DENDROCALAMUS BAMBOO",shortName:"Engineered Bamboo",category:"RENEWABLE VEGETATION",tagline:"Tensile strength greater than mild steel with rapid 3-year agricultural regenerative cycle.",description:"Boron-salt treated giant bamboo culms or crushed strand-woven bamboo beams. Provides earthquake flexibility, organic curves, and ultra-fast community construction speed.",unitCost:"$2.20 / linear ft ($4.80 / sq ft frame)",costPerSqFt:4.8,carbonImpact:-88,carbonRating:"RAPID REGENERATIVE SINK (A+)",thermalRValue:2.1,thermalMass:"LOW",compressiveStrength:"4,000 PSI (Tensile: 28,000 PSI)",fireRating:"CLASS B (Boron treated)",waterResistance:"HIGH (When elevated off grade)",localSourcingRate:"100% Tropical/Subtropical Agriculture",sourcingMethod:"Harvest mature 3-4 year poles. Soak in natural borax solution for 14 days.",pros:["Tensile strength (28,000 PSI) rivaling steel with lightweight organic flexibility","Rapidly renewable agricultural crop (reaches full harvest maturity in only 3 years)","Absorbs massive amounts of atmospheric carbon during rapid growth cycle","Creates stunning organic curved roof structures and soaring communal halls"],cons:["Must be treated with natural boric acid/borax to prevent powder-post borer beetles","Requires specialized fish-mouth or pinned joinery techniques",'Must be elevated 12" off wet ground to prevent splashback moisture'],supplier:{name:"BamCore LLC / Guadua Bamboo Global Export",location:"Windsor, California & Ocala, Florida",contact:"sales@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:'$2.20 / linear ft (3-4" diameter structural Guadua culms, $44 per 20ft pole)',minimumOrder:"20 Poles or custom structural bundle",leadTime:"5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY HAND CRAFT",lifespan:"75+ YEARS",compatibleLayers:["superstructure","roof","finishes"],colorHex:"#C49A45",textureType:"bamboo_pole",badge:"TENSILE POWERHOUSE"}],Ru=[{id:"offgrid_solar_water",name:"AUTONOMOUS LIFE-SUPPORT SUITE",description:"5.2kW Photovoltaic Monocrystalline Canopy + 10kWh LFP Battery + 2,000L Rainwater Harvesting & Gravity UV Filtration + Anaerobic Methane Bio-Digester.",cost:4800,carbonImpact:-1200,specs:"Zero municipal grid dependency. 100% daily power & potable water autonomy.",pros:["100% complete energy and potable drinking water sovereignty (zero utility bills forever)","Powers refrigerator, induction cooking, lighting, laptops, and water pumps 24/7","LFP (Lithium Iron Phosphate) battery provides 15+ years cycle life with zero fire risk","Anaerobic digester converts food and organic waste into clean methane cooking gas"],cons:["Requires initial setup investment ($4,800 turnkey complete)","Solar output depends on seasonal daylight (offset by 10kWh battery buffer)"],supplier:{name:"Signature Solar / EcoFlow PowerOcean Hub",location:"Sulphur Springs, Texas",contact:"sales@signaturesolar.com | +1 (903) 441-2090",website:"signaturesolar.com",exactPrice:"$4,800 turnkey complete kit (5kW Hybrid Inverter + 10.24kWh Server Rack Battery + 12x 450W Tier-1 Panels)",leadTime:"2-4 Business Days Freight"}},{id:"essential_eco_pod",name:"ESSENTIAL HYBRID UTILITY POD",description:"2.4kW Solar Array + 5kWh Battery + 1,000L Rain Filtration Cistern + Composting Toilet System.",cost:2400,carbonImpact:-650,specs:"Ideal for rapid single-family and disaster relief deployment.",pros:["Ultra-compact plug-and-play modular power crate ($2,400)","Provides essential daily lighting, phone/device charging, and gravity-fed pure water","Composting toilet system requires zero sewer pipes or municipal hookups"],cons:["Smaller 5kWh battery capacity (not designed for heavy high-draw power tools)","1,000L water cistern requires seasonal rainfall or atmospheric condenser backup"],supplier:{name:"Renogy Off-Grid Systems / Separett Sanitation",location:"Ontario, California",contact:"support@renogy.com | +1 (909) 287-7111",website:"renogy.com",exactPrice:"$2,400 all-in-one plug-and-play modular power and water crate",leadTime:"3-5 Business Days"}},{id:"microgrid_communal",name:"COMMUNAL MICRO-GRID HUB (MULTI-UNIT)",description:"25kW Centralized Solar Pergola + 50kWh Industrial Energy Storage + Central Atmospheric Water Condenser (500L/day) + Greywater Reed Bed Ecosystem.",cost:16500,carbonImpact:-5400,specs:"Powers 8-12 modular units with zero utility bills for community members.",pros:["Powers entire multi-family community or 12-pod village with central energy sovereignty","Atmospheric water generator condenses 500 liters of pure potable water per day out of thin air","Centralized maintenance reduces per-family cost to under $1,375 per residence"],cons:["Requires communal land area for 25kW solar pergola canopy and battery shed","Requires community agreement on power distribution management"],supplier:{name:"Fortress Power / Source Global Atmospheric Water",location:"Southampton, Pennsylvania / Scottsdale, Arizona",contact:"sales@fortresspower.com | +1 (877) 497-6937",website:"fortresspower.com",exactPrice:"$16,500 community district microgrid crate with integrated energy management system",leadTime:"7-10 Business Days"}}],Mi={yzy_mono_dome:[{id:"dome_base",name:"SUBGRADE PLINTH & FOUNDATION",category:"FOUNDATION",description:"Load-bearing frost-proof plinth anchoring the catenary dome to bedrock.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","ceb_blocks","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:280,partType:"solid"},{id:"dome_shell",name:"MONOLITHIC DOME SHELL (MAIN ENVELOPE)",category:"ENVELOPE",description:"Parabolic curved earthen shell distributing structural loads into pure compression.",defaultMaterial:"aircrete",allowedMaterials:["aircrete","ceb_blocks","rammed_earth","hempcrete","ferrocement"],surfaceAreaSqft:650,partType:"curved_shell"},{id:"dome_window_oculus",name:"APERTURE: ZENITH SKYLIGHT OCULUS",category:"WINDOWS & APERTURES",description:"Circular central skylight portal bringing natural zenith daylight deep into the interior.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","solid_earthen_cap","timber_louver"],surfaceAreaSqft:25,partType:"aperture"},{id:"dome_portal_tunnel",name:"ENTRANCE TUNNEL & AIRLOCK PORTICO",category:"FACADE & ENTRANCE",description:"Protruding brutalist tunnel entry acting as thermal buffer and windbreak.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","cross_laminated_timber","geopolymer_concrete"],surfaceAreaSqft:90,partType:"portal"},{id:"dome_insulation_liner",name:"INTERIOR BIO-ACOUSTIC LINING",category:"INSULATION",description:"Continuous breathable interior insulation preventing acoustic reverberation.",defaultMaterial:"mycelium_panels",allowedMaterials:["mycelium_panels","hempcrete","aircrete"],surfaceAreaSqft:400,partType:"insulation"},{id:"dome_utilities",name:"OFF-GRID AUTONOMOUS LIFE-SUPPORT",category:"UTILITIES",description:"Closed-loop solar array, battery storage, and rainwater gravity filtration unit.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod","offgrid_solar_water"],surfaceAreaSqft:50,partType:"utility"}],rammed_earth_villa:[{id:"villa_foundation",name:"ENGINEERED SUBGRADE & SLAB",category:"FOUNDATION",description:"High-density monolithic slab with integrated radiant floor tubing.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:1200,partType:"solid"},{id:"villa_south_wall",name:"SOUTH FACADE ENVELOPE",category:"WALLS & APERTURES",description:"Front exterior envelope facing sun azimuth for passive solar heating.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass","cross_laminated_timber"],surfaceAreaSqft:380,partType:"swappable_wall"},{id:"villa_north_wall",name:"NORTH THERMAL SHIELD WALL",category:"WALLS",description:"Thick monolithic earth wall with zero openings to prevent winter heat loss.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","cross_laminated_timber"],surfaceAreaSqft:380,partType:"solid"},{id:"villa_side_walls",name:"EAST & WEST PERIMETER WALLS",category:"WALLS & APERTURES",description:"Flanking striated earth walls with narrow vertical daylight slits.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass"],surfaceAreaSqft:450,partType:"swappable_wall"},{id:"villa_roof_cantilever",name:"CANTILEVERED MASS TIMBER ROOF SLAB",category:"ROOF & CANOPY",description:"Expansive 4-foot overhang roof protecting earthen walls from direct rainfall.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:1450,partType:"roof"},{id:"villa_window_portal",name:"DAYLIGHT RIBBON & PATIO PORTAL",category:"WINDOWS & APERTURES",description:"Floor-to-ceiling high-efficiency insulated low-E glazed glass sliding portal.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:180,partType:"aperture"},{id:"villa_utilities",name:"WHOLE-HOME REGENERATIVE ENERGY SUITE",category:"UTILITIES",description:"5.2kW Solar Pergola + 10kWh Battery + 2,000L Rain Cistern & Methane Digester.",defaultMaterial:"offgrid_solar_water",allowedMaterials:["offgrid_solar_water","essential_eco_pod","microgrid_communal"],surfaceAreaSqft:120,partType:"utility"}],modular_eco_apartments:[{id:"mod_pod_base",name:"PODIUM SUBGRADE & BASE",category:"FOUNDATION",description:"High-compressive engineered base absorbing multi-level residential loads.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:1800,partType:"solid"},{id:"mod_tier1_modules",name:"LEVEL 01 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Lower tier community apartments with direct shaded courtyard access.",defaultMaterial:"ceb_blocks",allowedMaterials:["ceb_blocks","cross_laminated_timber","hempcrete","rammed_earth"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier2_modules",name:"LEVEL 02 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Mid-level residential units with cantilevered balconies.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier3_modules",name:"LEVEL 03 PENTHOUSE MODULES",category:"RESIDENTIAL MODULES",description:"Top floor suites with biophilic light shafts and cross-breeze airflow.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_facade_glazing",name:"COURTYARD WINDOWS & BALCONIES",category:"WINDOWS & APERTURES",description:"High-performance acoustic double/triple glazed window panels.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:420,partType:"aperture"},{id:"mod_roof_canopy",name:"COMMUNAL ROOFTOP CANOPY",category:"ROOF & CANOPY",description:"Mass timber roof pergola supporting communal solar array and food gardens.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:2e3,partType:"roof"},{id:"mod_utilities",name:"DISTRICT MICROGRID & WATER SUITE",category:"UTILITIES",description:"25kW Solar Pergola + 50kWh Battery + Central Water Condenser.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal","offgrid_solar_water"],surfaceAreaSqft:300,partType:"utility"}],donda_resilience_commons:[{id:"donda_base_plaza",name:"COMMUNAL PLAZA & AMPHITHEATER BASE",category:"FOUNDATION",description:"Permeable earth and geopolymer plaza naturally recharging local aquifers.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:6500,partType:"solid"},{id:"donda_central_dome",name:"CENTRAL COMMUNITY BIODOME",category:"CENTRAL COMMONS",description:"Geodesic gathering hub for communal dining, education, and hydroponic food.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","aircrete","bamboo_composite","triple_glazed_glass"],surfaceAreaSqft:2800,partType:"curved_shell"},{id:"donda_living_pods",name:"SATELLITE RESIDENTIAL DOMES (6 PODS)",category:"RESIDENTIAL CLUSTER",description:"Circular perimeter of monolithic dome homes for community residents.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","aircrete","hempcrete"],surfaceAreaSqft:4800,partType:"modular_box"},{id:"donda_pergola_ring",name:"RAIN HARVESTING RING & SOLAR CANOPY",category:"ROOF & CANOPY",description:"Continuous circular canopy capturing 100% of seasonal rainfall for village use.",defaultMaterial:"bamboo_composite",allowedMaterials:["bamboo_composite","cross_laminated_timber","ferrocement"],surfaceAreaSqft:3200,partType:"roof"},{id:"donda_microgrid",name:"DECENTRALIZED CITY MICRO-GRID",category:"UTILITIES",description:"Zero-dependency power, water generation, and anaerobic waste recycling.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:800,partType:"utility"}],rapid_emergency_pod:[{id:"pod_base_chassis",name:"ELEVATED INTERLOCKING BASE PLINTH",category:"FOUNDATION",description:"Lightweight modular foundation elevating pod 6 inches off wet muddy ground.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","cross_laminated_timber"],surfaceAreaSqft:160,partType:"solid"},{id:"pod_bio_walls",name:"FLATPACK BIO-COMPOSITE ENVELOPE",category:"WALLS",description:"Interlocking tongue-and-groove insulated panels assembled with zero tools.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","mycelium_panels","cross_laminated_timber"],surfaceAreaSqft:280,partType:"swappable_wall"},{id:"pod_origami_roof",name:"ANGLED WATER-DEFLECTING ROOF",category:"ROOF",description:"High-slope origami roof shedding monsoon rains and snow loads.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","cross_laminated_timber","aircrete"],surfaceAreaSqft:190,partType:"roof"},{id:"pod_glazing",name:"LIGHT PORTS & EMERGENCY EGRESS",category:"WINDOWS & APERTURES",description:"Polycarbonate insulated light panels for natural interior illumination.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","timber_louver"],surfaceAreaSqft:40,partType:"aperture"},{id:"pod_utility_kit",name:"PLUG-AND-PLAY 12V EMERGENCY SOLAR KIT",category:"UTILITIES",description:"Integrated solar panel on roof powering interior LEDs, phone charging, and water filter.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod"],surfaceAreaSqft:30,partType:"utility"}],terrace_earth_apartments:[{id:"terrace_foundation",name:"ZIGGURAT BASE & RETAINING PLINTH",category:"FOUNDATION",description:"Stepped bedrock foundation supporting cascading multi-level earth terraces.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:3200,partType:"solid"},{id:"terrace_tier_walls",name:"STEPPED RESIDENTIAL WALL MATRIX",category:"WALLS",description:"Thick brutalist earth walls stepping backward on each residential tier.",defaultMaterial:"hempcrete",allowedMaterials:["hempcrete","rammed_earth","ceb_blocks","cross_laminated_timber"],surfaceAreaSqft:4800,partType:"swappable_wall"},{id:"terrace_garden_roofs",name:"CASCADING GREEN ROOF TERRACES",category:"ROOF & GARDENS",description:"Rooftop edible food gardens and soil thermal blankets for every apartment unit.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ferrocement"],surfaceAreaSqft:3800,partType:"roof"},{id:"terrace_panoramic_windows",name:"EXPANSIVE TERRACE GLAZING PORTALS",category:"WINDOWS & APERTURES",description:"Full-width glass sliding walls opening directly onto rooftop gardens.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:650,partType:"aperture"},{id:"terrace_utilities",name:"CENTRALIZED URBAN ECO-GRID",category:"UTILITIES",description:"Communal solar array + greywater reed-bed filtration recycling 100% of water.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:600,partType:"utility"}]},ef=[{id:"triple_glazed_glass",name:"TRIPLE-PANE PASSIVE SOLAR GLAZING",shortName:"Triple-Pane Glazing",category:"HIGH-EFFICIENCY GLASS",tagline:"Argon gas-filled triple pane glass with low-E coating for massive daylight and zero heat loss.",description:"Converts solid earth walls into expansive panoramic portals. Features warm-edge spacers, non-toxic wood/aluminum frame, and superior sound dampening.",unitCost:"$28.00 / sq ft",costPerSqFt:28,carbonImpact:8.5,thermalRValue:8,pros:["Floods interior with 100% natural mood-elevating daylight","R-8 insulation value prevents winter drafts and heat loss","Superior acoustic insulation isolates external noise","Expands visual space making compact earth homes feel massive"],cons:["Higher upfront cost than solid earthen blocks ($28/sqft vs $4.20/sqft)","Requires careful alignment and flashing during installation","Needs occasional window cleaning"],supplier:{name:"Alpen High Performance Glass / Loewen Windows",location:"Louisville, Colorado",contact:"sales@alpenhpp.com | +1 (303) 833-7000",website:"alpenhpp.com",exactPrice:"$28.00 / sq ft customized to rough opening",leadTime:"2-3 Weeks"},colorHex:"#68A5BA",textureType:"glass_glaze",badge:"MAX DAYLIGHT PORTAL"},{id:"smart_solar_glass",name:"PHOTOVOLTAIC BIPV SMART TINT GLASS",shortName:"Solar Smart Glass",category:"SOLAR GENERATING GLASS",tagline:"Transparent solar window generating daily electricity while electronically tinting.",description:"Building-Integrated Photovoltaics (BIPV) embedded within architectural glass. Generates 50W per square meter of clean electricity while rejecting 98% of solar glare.",unitCost:"$44.00 / sq ft",costPerSqFt:44,carbonImpact:-65,thermalRValue:9.5,pros:["Window actively generates clean off-grid electricity throughout daylight hours","Dynamic electrochromic tinting eliminates need for curtains or blinds","Rejects 99% of damaging UV rays to protect interior furniture"],cons:["Premium investment cost ($44.00/sqft)","Requires low-voltage electrical wire hookup to battery bank"],supplier:{name:"Ubiquitous Energy / Onyx Solar Photovoltaic Glass",location:"Redwood City, California",contact:"info@onyxsolar.com | +1 (917) 563-3993",website:"onyxsolar.com / ubiquitous.energy",exactPrice:"$44.00 / sq ft custom architectural sizing",leadTime:"3-4 Weeks"},colorHex:"#3A7E94",textureType:"solar_glass",badge:"CLEAN ENERGY PORTAL"},{id:"timber_louver",name:"MASS TIMBER OPERABLE BREEZE LOUVERS",shortName:"Timber Breeze Louvers",category:"NATURAL VENTILATION",tagline:"Adjustable cedar/bamboo louvers channeling cooling breezes while blocking direct solar heat.",description:"Hand-crafted operable wooden horizontal fins allowing customizable privacy, shade, and natural cross-ventilation.",unitCost:"$16.50 / sq ft",costPerSqFt:16.5,carbonImpact:-28,thermalRValue:4.2,pros:["Channels natural mountain & desert breezes into home for zero-cost cooling","100% natural organic wood aesthetics matching Yeezy minimal architecture","Carbon-negative natural material"],cons:["Does not seal airtight (designed for temperate or tropical microclimates)","Requires occasional natural oil re-coating every 5 years"],supplier:{name:"BamCore / Local Woodcraft Guilds",location:"North America Regional Co-ops",contact:"craft@bamcore.com",website:"bamcore.com",exactPrice:"$16.50 / sq ft with brass pivot hardware",leadTime:"1 Week"},colorHex:"#A87A46",textureType:"timber_louver",badge:"PASSIVE COOLING"}];/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Ke.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...f},p)=>Ke.createElement("svg",{ref:p,...Yx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:cg("lucide",o),...f},[...u.map(([m,v])=>Ke.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(s,e)=>{const n=Ke.forwardRef(({className:r,...o},c)=>Ke.createElement(qx,{ref:c,iconNode:e,className:cg(`lucide-${Xx(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ug=It("BookOpen",$x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],dg=It("Building2",Zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Qx=It("Calculator",Kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fg=It("Check",Jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],hg=It("ChevronDown",ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],pg=It("ChevronUp",ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],mg=It("CircleAlert",ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ry=It("Compass",iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ay=It("Copy",sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],gg=It("Cpu",oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],xg=It("DollarSign",ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],cd=It("Download",cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Kp=It("Eye",uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],fy=It("FlaskConical",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],py=It("Focus",hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],gy=It("Globe",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],yy=It("Heart",xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],tf=It("Layers",vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Sy=It("Leaf",_y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],My=It("Menu",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],by=It("Printer",wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],yg=It("RotateCcw",Ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],vg=It("Search",Ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ry=It("Shield",Cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ud=It("Sparkles",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Ly=It("Sun",Iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],Dy=It("TrendingDown",Py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Oy=It("TriangleAlert",Uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ky=It("Volume2",zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],By=It("VolumeX",Fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kl=It("X",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Vy=It("Zap",Gy);let Ts=null,Ha=!0;const _g=()=>{if(!Ts&&typeof window<"u"){const s=window.AudioContext||window.webkitAudioContext;s&&(Ts=new s)}return Ts&&Ts.state==="suspended"&&Ts.resume(),Ts},jy=s=>(Ha=!Ha,Ha),Ut=(s=800,e=.015,n="sine")=>{if(Ha)try{const r=_g();if(!r)return;const o=r.createOscillator(),c=r.createGain();o.type=n,o.frequency.setValueAtTime(s,r.currentTime),o.frequency.exponentialRampToValueAtTime(120,r.currentTime+e),c.gain.setValueAtTime(.04,r.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),o.connect(c),c.connect(r.destination),o.start(),o.stop(r.currentTime+e)}catch{}},Va=()=>{Ut(1200,.025,"triangle")},Wa=()=>{if(Ha)try{const s=_g();if(!s)return;const e=s.createOscillator(),n=s.createGain();e.type="sine",e.frequency.setValueAtTime(440,s.currentTime),e.frequency.setValueAtTime(880,s.currentTime+.06),n.gain.setValueAtTime(.05,s.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+.14),e.connect(n),n.connect(s.destination),e.start(),e.stop(s.currentTime+.15)}catch{}};function Wy({activeTab:s,setActiveTab:e,totalCost:n,totalCarbon:r,onOpenCostBreakdown:o,onOpenBlueprintExport:c,onOpenVisionModal:u}){const[f,p]=Ke.useState(!0),[m,v]=Ke.useState(!1),S=()=>{const E=jy();p(E),E&&Ut(1e3,.03)},_=[{id:"builder",label:"01 // CONFIGURATOR",icon:dg},{id:"materials",label:"02 // MATERIALS INDEX",icon:tf},{id:"furniture",label:"03 // ECO FURNITURE",icon:gg},{id:"tutorials",label:"04 // NOVICE BUILD GUIDE",icon:ug},{id:"sourcing",label:"05 // SOURCING RADAR",icon:ry},{id:"benchmarks",label:"06 // COST BENCHMARKS",icon:xg}],M=E=>{Ut(),e(E),v(!1)};return h.jsxs("header",{className:"sticky top-0 z-50 bg-yzy-black/95 backdrop-blur-md border-b border-yzy-slate select-none",children:[h.jsxs("div",{className:"w-full bg-yzy-obsidian border-b border-yzy-slate/60 px-3 sm:px-6 py-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider",children:[h.jsx("div",{className:"flex items-center gap-3",children:h.jsxs("span",{className:"flex items-center gap-1.5 text-yzy-chalk",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"font-bold tracking-widest uppercase",children:"EZY.INFRA"}),h.jsx("span",{className:"hidden sm:inline text-yzy-ash",children:"| OPEN-SOURCE REGENERATIVE SHELTER"})]})}),h.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[h.jsxs("button",{onClick:()=>{Ut(900,.03),u()},className:"flex items-center gap-1.5 text-yzy-chalk hover:text-yzy-bone font-bold tracking-widest uppercase transition-colors",children:[h.jsx(ud,{className:"w-3 h-3 text-yzy-neon"}),h.jsx("span",{className:"underline decoration-yzy-neon/60 underline-offset-2",children:"YE // DONDA MANIFESTO"})]}),h.jsxs("button",{onClick:S,className:"flex items-center gap-1 text-yzy-ash hover:text-yzy-bone transition-colors",title:f?"Mute Haptic Sound":"Enable Haptic Sound",children:[f?h.jsx(ky,{className:"w-3.5 h-3.5 text-yzy-chalk"}):h.jsx(By,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden sm:inline",children:f?"AUDIO ON":"MUTED"})]})]})]}),h.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between",children:[h.jsxs("div",{onClick:()=>M("builder"),className:"cursor-pointer flex flex-col",children:[h.jsx("div",{className:"flex items-baseline gap-2",children:h.jsxs("span",{className:"font-display font-black text-xl sm:text-2xl tracking-tighter text-yzy-bone",children:["EZY ",h.jsx("span",{className:"font-mono text-sm tracking-widest text-yzy-ash font-normal",children:"EARTH"})]})}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"SUSTAINABLE ARCHITECTURAL SYSTEM"})]}),h.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-yzy-obsidian/80 p-1 border border-yzy-slate",children:_.map(E=>{const b=E.icon,y=s===E.id;return h.jsxs("button",{onClick:()=>M(E.id),className:`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] tracking-wider transition-all ${y?"bg-yzy-bone text-yzy-black font-bold shadow-sm":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/50"}`,children:[h.jsx(b,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:E.label})]},E.id)})}),h.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[h.jsxs("button",{onClick:()=>{Ut(),o()},className:"flex items-center gap-2 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate hover:border-yzy-ash px-2.5 sm:px-3.5 py-1.5 text-left transition-all",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"EST. COST"}),h.jsxs("span",{className:"font-mono font-bold text-xs sm:text-sm text-yzy-bone tracking-tight",children:["$",n.toLocaleString()]})]}),h.jsxs("div",{className:"hidden sm:flex flex-col border-l border-yzy-slate pl-2.5",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"CARBON NET"}),h.jsx("span",{className:`font-mono font-bold text-xs ${r<=0?"text-yzy-neon":"text-yzy-warning"}`,children:r<=0?`${r} kg`:`+${r} kg`})]})]}),h.jsxs("button",{onClick:()=>{Wa(),c()},className:"hidden sm:flex items-center gap-1.5 bg-yzy-bone hover:bg-white text-yzy-black px-3 py-2 font-mono text-xs font-bold tracking-wider transition-all active:scale-95",children:[h.jsx(cd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"EXPORT CAD"})]}),h.jsx("button",{onClick:()=>{Ut(),v(!m)},className:"lg:hidden p-2 text-yzy-bone hover:bg-yzy-slate/50 border border-yzy-slate","aria-label":"Toggle Navigation",children:m?h.jsx(kl,{className:"w-5 h-5"}):h.jsx(My,{className:"w-5 h-5"})})]})]}),m&&h.jsxs("div",{className:"lg:hidden bg-yzy-obsidian border-b border-yzy-slate px-4 py-4 flex flex-col gap-2",children:[_.map(E=>{const b=E.icon,y=s===E.id;return h.jsxs("button",{onClick:()=>M(E.id),className:`flex items-center justify-between w-full px-3 py-2.5 font-mono text-xs tracking-wider border ${y?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"text-yzy-chalk hover:bg-yzy-slate/40 border-yzy-slate/60"}`,children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(b,{className:"w-4 h-4"}),h.jsx("span",{children:E.label})]}),y&&h.jsx("span",{className:"text-[10px] uppercase font-mono tracking-widest bg-yzy-black text-yzy-bone px-1.5 py-0.5",children:"ACTIVE"})]},E.id)}),h.jsxs("div",{className:"pt-2 flex flex-col gap-2 border-t border-yzy-slate mt-2",children:[h.jsxs("button",{onClick:()=>{v(!1),c()},className:"flex items-center justify-center gap-2 bg-yzy-bone text-yzy-black py-2.5 font-mono text-xs font-bold tracking-widest",children:[h.jsx(cd,{className:"w-4 h-4"}),h.jsx("span",{children:"EXPORT BLUEPRINT CAD SPEC"})]}),h.jsxs("button",{onClick:()=>{v(!1),u()},className:"flex items-center justify-center gap-2 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk py-2.5 font-mono text-xs font-bold tracking-widest",children:[h.jsx(ud,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("span",{children:"YE // DONDA ARCHITECTURAL VISION"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="170",Xy=0,Qp=1,Yy=2,Sg=1,rf=2,Wi=3,Tr=0,Un=1,bi=2,wr=0,Gs=1,Jp=2,em=3,tm=4,qy=5,Zr=100,$y=101,Zy=102,Ky=103,Qy=104,Jy=200,ev=201,tv=202,nv=203,dd=204,fd=205,iv=206,rv=207,sv=208,av=209,ov=210,lv=211,cv=212,uv=213,dv=214,hd=0,pd=1,md=2,Ws=3,gd=4,xd=5,yd=6,vd=7,Eg=0,fv=1,hv=2,br=0,pv=1,mv=2,gv=3,xv=4,yv=5,vv=6,_v=7,Mg=300,Xs=301,Ys=302,_d=303,Sd=304,Fl=306,Ed=1e3,Qr=1001,Md=1002,mi=1003,Sv=1004,rl=1005,Ti=1006,Nu=1007,Jr=1008,$i=1009,wg=1010,bg=1011,ja=1012,sf=1013,es=1014,Xi=1015,Xa=1016,af=1017,of=1018,qs=1020,Tg=35902,Ag=1021,Cg=1022,pi=1023,Rg=1024,Ng=1025,Vs=1026,$s=1027,Ig=1028,lf=1029,Lg=1030,cf=1031,uf=1033,Al=33776,Cl=33777,Rl=33778,Nl=33779,wd=35840,bd=35841,Td=35842,Ad=35843,Cd=36196,Rd=37492,Nd=37496,Id=37808,Ld=37809,Pd=37810,Dd=37811,Ud=37812,Od=37813,zd=37814,kd=37815,Fd=37816,Bd=37817,Hd=37818,Gd=37819,Vd=37820,jd=37821,Il=36492,Wd=36494,Xd=36495,Pg=36283,Yd=36284,qd=36285,$d=36286,Ev=3200,Mv=3201,Dg=0,wv=1,Mr="",ei="srgb",Ks="srgb-linear",Bl="linear",Ot="srgb",As=7680,nm=519,bv=512,Tv=513,Av=514,Ug=515,Cv=516,Rv=517,Nv=518,Iv=519,im=35044,rm="300 es",Yi=2e3,Pl=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=Math.PI/180,Zd=180/Math.PI;function Ya(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Dn(s,e,n){return Math.max(e,Math.min(n,s))}function Lv(s,e){return(s%e+e)%e}function Lu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,n,r,o,c,u,f,p,m){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,m)}set(e,n,r,o,c,u,f,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],v=r[4],S=r[7],_=r[2],M=r[5],E=r[8],b=o[0],y=o[3],x=o[6],U=o[1],P=o[4],R=o[7],$=o[2],B=o[5],k=o[8];return c[0]=u*b+f*U+p*$,c[3]=u*y+f*P+p*B,c[6]=u*x+f*R+p*k,c[1]=m*b+v*U+S*$,c[4]=m*y+v*P+S*B,c[7]=m*x+v*R+S*k,c[2]=_*b+M*U+E*$,c[5]=_*y+M*P+E*B,c[8]=_*x+M*R+E*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*f*m-r*c*v+r*f*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8],S=v*u-f*m,_=f*p-v*c,M=m*c-u*p,E=n*S+r*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=S*b,e[1]=(o*m-v*r)*b,e[2]=(f*r-o*u)*b,e[3]=_*b,e[4]=(v*n-o*p)*b,e[5]=(o*c-f*n)*b,e[6]=M*b,e[7]=(r*p-m*n)*b,e[8]=(u*n-r*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*f)+u+e,-o*m,o*p,-o*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new xt;function Og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pv(){const s=Dl("canvas");return s.style.display="block",s}const sm={};function Fa(s){s in sm||(sm[s]=!0,console.warn(s))}function Dv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Uv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ov(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const At={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ot&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ot&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mr?Bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const am=[.64,.33,.3,.6,.15,.06],om=[.2126,.7152,.0722],lm=[.3127,.329],cm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),um=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);At.define({[Ks]:{primaries:am,whitePoint:lm,transfer:Bl,toXYZ:cm,fromXYZ:um,luminanceCoefficients:om,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:am,whitePoint:lm,transfer:Ot,toXYZ:cm,fromXYZ:um,luminanceCoefficients:om,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}});let Cs;class zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=Dl("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=qi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(qi(n[r]/255)*255):n[r]=qi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kv=0;class zg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Du(o[u].image)):c.push(Du(o[u]))}else c=Du(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fv=0;class On extends Qs{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,r=Qr,o=Qr,c=Ti,u=Jr,f=pi,p=$i,m=On.DEFAULT_ANISOTROPY,v=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Ya(),this.name="",this.source=new zg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Mg;On.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],v=p[4],S=p[8],_=p[1],M=p[5],E=p[9],b=p[2],y=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(S-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(S+b)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,R=(M+1)/2,$=(x+1)/2,B=(v+_)/4,k=(S+b)/4,G=(E+y)/4;return P>R&&P>$?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=B/r,c=k/r):R>$?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=B/o,c=G/o):$<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt($),r=k/c,o=G/c),this.set(r,o,c,n),this}let U=Math.sqrt((y-E)*(y-E)+(S-b)*(S-b)+(_-v)*(_-v));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(S-b)/U,this.z=(_-v)/U,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bv extends Qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new On(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Bv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class kg extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hv extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let p=r[o+0],m=r[o+1],v=r[o+2],S=r[o+3];const _=c[u+0],M=c[u+1],E=c[u+2],b=c[u+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(f===1){e[n+0]=_,e[n+1]=M,e[n+2]=E,e[n+3]=b;return}if(S!==b||p!==_||m!==M||v!==E){let y=1-f;const x=p*_+m*M+v*E+S*b,U=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const $=Math.sqrt(P),B=Math.atan2($,x*U);y=Math.sin(y*B)/$,f=Math.sin(f*B)/$}const R=f*U;if(p=p*y+_*R,m=m*y+M*R,v=v*y+E*R,S=S*y+b*R,y===1-f){const $=1/Math.sqrt(p*p+m*m+v*v+S*S);p*=$,m*=$,v*=$,S*=$}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],p=r[o+1],m=r[o+2],v=r[o+3],S=c[u],_=c[u+1],M=c[u+2],E=c[u+3];return e[n]=f*E+v*S+p*M-m*_,e[n+1]=p*E+v*_+m*S-f*M,e[n+2]=m*E+v*M+f*_-p*S,e[n+3]=v*E-f*S-p*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(o/2),S=f(c/2),_=p(r/2),M=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*v*S+m*M*E,this._y=m*M*S-_*v*E,this._z=m*v*E+_*M*S,this._w=m*v*S-_*M*E;break;case"YXZ":this._x=_*v*S+m*M*E,this._y=m*M*S-_*v*E,this._z=m*v*E-_*M*S,this._w=m*v*S+_*M*E;break;case"ZXY":this._x=_*v*S-m*M*E,this._y=m*M*S+_*v*E,this._z=m*v*E+_*M*S,this._w=m*v*S-_*M*E;break;case"ZYX":this._x=_*v*S-m*M*E,this._y=m*M*S+_*v*E,this._z=m*v*E-_*M*S,this._w=m*v*S+_*M*E;break;case"YZX":this._x=_*v*S+m*M*E,this._y=m*M*S+_*v*E,this._z=m*v*E-_*M*S,this._w=m*v*S-_*M*E;break;case"XZY":this._x=_*v*S-m*M*E,this._y=m*M*S-_*v*E,this._z=m*v*E+_*M*S,this._w=m*v*S+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],m=n[2],v=n[6],S=n[10],_=r+f+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-m)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+m)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(c-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(c+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*f+o*m-c*p,this._y=o*v+u*p+c*f-r*m,this._z=c*v+u*m+r*p-o*f,this._w=u*v-r*f-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,f),S=Math.sin((1-n)*v)/m,_=Math.sin(n*v)/m;return this._w=u*S+this._w*_,this._x=r*S+this._x*_,this._y=o*S+this._y*_,this._z=c*S+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*o-f*r),v=2*(f*n-c*o),S=2*(c*r-u*n);return this.x=n+p*m+u*S-f*v,this.y=r+p*v+f*m-c*S,this.z=o+p*S+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new le,dm=new qa;class $a{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ui):ui.fromBufferAttribute(c,u),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),al.subVectors(this.max,Da),Rs.subVectors(e.a,Da),Ns.subVectors(e.b,Da),Is.subVectors(e.c,Da),xr.subVectors(Ns,Rs),yr.subVectors(Is,Ns),Gr.subVectors(Rs,Is);let n=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Gr.z,Gr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Gr.z,0,-Gr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Gr.y,Gr.x,0];return!Ou(n,Rs,Ns,Is,al)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,Rs,Ns,Is,al))?!1:(ol.crossVectors(xr,yr),n=[ol.x,ol.y,ol.z],Ou(n,Rs,Ns,Is,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new le,new le,new le,new le,new le,new le,new le,new le],ui=new le,sl=new $a,Rs=new le,Ns=new le,Is=new le,xr=new le,yr=new le,Gr=new le,Da=new le,al=new le,ol=new le,Vr=new le;function Ou(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Vr.fromArray(s,c);const f=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),p=e.dot(Vr),m=n.dot(Vr),v=r.dot(Vr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const Gv=new $a,Ua=new le,zu=new le;class Hl{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Gv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(zu)),this.expandByPoint(Ua.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new le,ku=new le,ll=new le,vr=new le,Fu=new le,cl=new le,Bu=new le;class df{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){ku.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(ku);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ll),f=vr.dot(this.direction),p=-vr.dot(ll),m=vr.lengthSq(),v=Math.abs(1-u*u);let S,_,M,E;if(v>0)if(S=u*p-f,_=u*f-p,E=c*v,S>=0)if(_>=-E)if(_<=E){const b=1/v;S*=b,_*=b,M=S*(S+u*_+2*f)+_*(u*S+_+2*p)+m}else _=c,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*p)+m;else _=-c,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*p)+m;else _<=-E?(S=Math.max(0,-(-u*c+f)),_=S>0?-c:Math.min(Math.max(-c,-p),c),M=-S*S+_*(_+2*p)+m):_<=E?(S=0,_=Math.min(Math.max(-c,-p),c),M=_*(_+2*p)+m):(S=Math.max(0,-(u*c+f)),_=S>0?c:Math.min(Math.max(-c,-p),c),M=-S*S+_*(_+2*p)+m);else _=u>0?-c:c,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(ku).addScaledVector(ll,_),M}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),o=Hi.dot(Hi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,p;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(c=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-_.z)*S,p=(e.max.z-_.z)*S):(f=(e.max.z-_.z)*S,p=(e.min.z-_.z)*S),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,r,o,c){Fu.subVectors(n,e),cl.subVectors(r,e),Bu.crossVectors(Fu,cl);let u=this.direction.dot(Bu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;vr.subVectors(this.origin,e);const p=f*this.direction.dot(cl.crossVectors(vr,cl));if(p<0)return null;const m=f*this.direction.dot(Fu.cross(vr));if(m<0||p+m>u)return null;const v=-f*vr.dot(Bu);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,o,c,u,f,p,m,v,S,_,M,E,b,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,m,v,S,_,M,E,b,y)}set(e,n,r,o,c,u,f,p,m,v,S,_,M,E,b,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=m,x[6]=v,x[10]=S,x[14]=_,x[3]=M,x[7]=E,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),c=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=u*v,M=u*S,E=f*v,b=f*S;n[0]=p*v,n[4]=-p*S,n[8]=m,n[1]=M+E*m,n[5]=_-b*m,n[9]=-f*p,n[2]=b-_*m,n[6]=E+M*m,n[10]=u*p}else if(e.order==="YXZ"){const _=p*v,M=p*S,E=m*v,b=m*S;n[0]=_+b*f,n[4]=E*f-M,n[8]=u*m,n[1]=u*S,n[5]=u*v,n[9]=-f,n[2]=M*f-E,n[6]=b+_*f,n[10]=u*p}else if(e.order==="ZXY"){const _=p*v,M=p*S,E=m*v,b=m*S;n[0]=_-b*f,n[4]=-u*S,n[8]=E+M*f,n[1]=M+E*f,n[5]=u*v,n[9]=b-_*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const _=u*v,M=u*S,E=f*v,b=f*S;n[0]=p*v,n[4]=E*m-M,n[8]=_*m+b,n[1]=p*S,n[5]=b*m+_,n[9]=M*m-E,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,M=u*m,E=f*p,b=f*m;n[0]=p*v,n[4]=b-_*S,n[8]=E*S+M,n[1]=S,n[5]=u*v,n[9]=-f*v,n[2]=-m*v,n[6]=M*S+E,n[10]=_-b*S}else if(e.order==="XZY"){const _=u*p,M=u*m,E=f*p,b=f*m;n[0]=p*v,n[4]=-S,n[8]=m*v,n[1]=_*S+b,n[5]=u*v,n[9]=M*S-E,n[2]=E*S-M,n[6]=f*v,n[10]=b*S+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vv,e,jv)}lookAt(e,n,r){const o=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),_r.crossVectors(r,Hn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),_r.crossVectors(r,Hn)),_r.normalize(),ul.crossVectors(Hn,_r),o[0]=_r.x,o[4]=ul.x,o[8]=Hn.x,o[1]=_r.y,o[5]=ul.y,o[9]=Hn.y,o[2]=_r.z,o[6]=ul.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],v=r[1],S=r[5],_=r[9],M=r[13],E=r[2],b=r[6],y=r[10],x=r[14],U=r[3],P=r[7],R=r[11],$=r[15],B=o[0],k=o[4],G=o[8],N=o[12],A=o[1],O=o[5],K=o[9],W=o[13],se=o[2],re=o[6],Z=o[10],ie=o[14],F=o[3],de=o[7],L=o[11],w=o[15];return c[0]=u*B+f*A+p*se+m*F,c[4]=u*k+f*O+p*re+m*de,c[8]=u*G+f*K+p*Z+m*L,c[12]=u*N+f*W+p*ie+m*w,c[1]=v*B+S*A+_*se+M*F,c[5]=v*k+S*O+_*re+M*de,c[9]=v*G+S*K+_*Z+M*L,c[13]=v*N+S*W+_*ie+M*w,c[2]=E*B+b*A+y*se+x*F,c[6]=E*k+b*O+y*re+x*de,c[10]=E*G+b*K+y*Z+x*L,c[14]=E*N+b*W+y*ie+x*w,c[3]=U*B+P*A+R*se+$*F,c[7]=U*k+P*O+R*re+$*de,c[11]=U*G+P*K+R*Z+$*L,c[15]=U*N+P*W+R*ie+$*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],p=e[9],m=e[13],v=e[2],S=e[6],_=e[10],M=e[14],E=e[3],b=e[7],y=e[11],x=e[15];return E*(+c*p*S-o*m*S-c*f*_+r*m*_+o*f*M-r*p*M)+b*(+n*p*M-n*m*_+c*u*_-o*u*M+o*m*v-c*p*v)+y*(+n*m*S-n*f*M-c*u*S+r*u*M+c*f*v-r*m*v)+x*(-o*f*v-n*p*S+n*f*_+o*u*S-r*u*_+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8],S=e[9],_=e[10],M=e[11],E=e[12],b=e[13],y=e[14],x=e[15],U=S*y*m-b*_*m+b*p*M-f*y*M-S*p*x+f*_*x,P=E*_*m-v*y*m-E*p*M+u*y*M+v*p*x-u*_*x,R=v*b*m-E*S*m+E*f*M-u*b*M-v*f*x+u*S*x,$=E*S*p-v*b*p-E*f*_+u*b*_+v*f*y-u*S*y,B=n*U+r*P+o*R+c*$;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/B;return e[0]=U*k,e[1]=(b*_*c-S*y*c-b*o*M+r*y*M+S*o*x-r*_*x)*k,e[2]=(f*y*c-b*p*c+b*o*m-r*y*m-f*o*x+r*p*x)*k,e[3]=(S*p*c-f*_*c-S*o*m+r*_*m+f*o*M-r*p*M)*k,e[4]=P*k,e[5]=(v*y*c-E*_*c+E*o*M-n*y*M-v*o*x+n*_*x)*k,e[6]=(E*p*c-u*y*c-E*o*m+n*y*m+u*o*x-n*p*x)*k,e[7]=(u*_*c-v*p*c+v*o*m-n*_*m-u*o*M+n*p*M)*k,e[8]=R*k,e[9]=(E*S*c-v*b*c-E*r*M+n*b*M+v*r*x-n*S*x)*k,e[10]=(u*b*c-E*f*c+E*r*m-n*b*m-u*r*x+n*f*x)*k,e[11]=(v*f*c-u*S*c-v*r*m+n*S*m+u*r*M-n*f*M)*k,e[12]=$*k,e[13]=(v*b*o-E*S*o+E*r*_-n*b*_-v*r*y+n*S*y)*k,e[14]=(E*f*o-u*b*o-E*r*p+n*b*p+u*r*y-n*f*y)*k,e[15]=(u*S*o-v*f*o+v*r*p-n*S*p-u*r*_+n*f*_)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,m=c*u,v=c*f;return this.set(m*u+r,m*f-o*p,m*p+o*f,0,m*f+o*p,v*f+r,v*p-o*u,0,m*p-o*f,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,m=c+c,v=u+u,S=f+f,_=c*m,M=c*v,E=c*S,b=u*v,y=u*S,x=f*S,U=p*m,P=p*v,R=p*S,$=r.x,B=r.y,k=r.z;return o[0]=(1-(b+x))*$,o[1]=(M+R)*$,o[2]=(E-P)*$,o[3]=0,o[4]=(M-R)*B,o[5]=(1-(_+x))*B,o[6]=(y+U)*B,o[7]=0,o[8]=(E+P)*k,o[9]=(y-U)*k,o[10]=(1-(_+b))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),f=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],di.copy(this);const m=1/c,v=1/u,S=1/f;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=S,di.elements[9]*=S,di.elements[10]*=S,n.setFromRotationMatrix(di),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=Yi){const p=this.elements,m=2*c/(n-e),v=2*c/(r-o),S=(n+e)/(n-e),_=(r+o)/(r-o);let M,E;if(f===Yi)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===Pl)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Yi){const p=this.elements,m=1/(n-e),v=1/(r-o),S=1/(u-c),_=(n+e)*m,M=(r+o)*v;let E,b;if(f===Yi)E=(u+c)*S,b=-2*S;else if(f===Pl)E=c*S,b=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new le,di=new Vt,Vv=new le(0,0,0),jv=new le(1,1,1),_r=new le,ul=new le,Hn=new le,fm=new Vt,hm=new qa;class Ci{constructor(e=0,n=0,r=0,o=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],p=o[1],m=o[5],v=o[9],S=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Dn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wv=0;const pm=new le,Ps=new qa,Gi=new Vt,dl=new le,Oa=new le,Xv=new le,Yv=new qa,mm=new le(1,0,0),gm=new le(0,1,0),xm=new le(0,0,1),ym={type:"added"},qv={type:"removed"},Ds={type:"childadded",child:null},Hu={type:"childremoved",child:null};class dn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new le,n=new Ci,r=new qa,o=new le(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Vt},normalMatrix:{value:new xt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(gm,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(gm,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Oa,dl,this.up):Gi.lookAt(dl,Oa,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qv),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,Xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Yv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const S=p[m];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),S=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}dn.DEFAULT_UP=new le(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new le,Vi=new le,Gu=new le,ji=new le,Us=new le,Os=new le,vm=new le,Vu=new le,ju=new le,Wu=new le,Xu=new qt,Yu=new qt,qu=new qt;class hi{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),fi.subVectors(e,n),o.cross(fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){fi.subVectors(o,n),Vi.subVectors(r,n),Gu.subVectors(e,n);const u=fi.dot(fi),f=fi.dot(Vi),p=fi.dot(Gu),m=Vi.dot(Vi),v=Vi.dot(Gu),S=u*m-f*f;if(S===0)return c.set(0,0,0),null;const _=1/S,M=(m*p-f*v)*_,E=(u*v-f*p)*_;return c.set(1-M-E,E,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,n,r,o,c,u,f,p){return this.getBarycoord(e,n,r,o,ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ji.x),p.addScaledVector(u,ji.y),p.addScaledVector(f,ji.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Xu.setScalar(0),Yu.setScalar(0),qu.setScalar(0),Xu.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,r),qu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Xu,c.x),u.addScaledVector(Yu,c.y),u.addScaledVector(qu,c.z),u}static isFrontFacing(e,n,r,o){return fi.subVectors(r,n),Vi.subVectors(e,n),fi.cross(Vi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),fi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Us.subVectors(o,r),Os.subVectors(c,r),Vu.subVectors(e,r);const p=Us.dot(Vu),m=Os.dot(Vu);if(p<=0&&m<=0)return n.copy(r);ju.subVectors(e,o);const v=Us.dot(ju),S=Os.dot(ju);if(v>=0&&S<=v)return n.copy(o);const _=p*S-v*m;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Us,u);Wu.subVectors(e,c);const M=Us.dot(Wu),E=Os.dot(Wu);if(E>=0&&M<=E)return n.copy(c);const b=M*m-p*E;if(b<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Os,f);const y=v*E-M*S;if(y<=0&&S-v>=0&&M-E>=0)return vm.subVectors(c,o),f=(S-v)/(S-v+(M-E)),n.copy(o).addScaledVector(vm,f);const x=1/(y+b+_);return u=b*x,f=_*x,n.copy(r).addScaledVector(Us,u).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function $u(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class _t{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=At.workingColorSpace){if(e=Lv(e,1),n=Dn(n,0,1),r=Dn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=$u(u,c,e+1/3),this.g=$u(u,c,e),this.b=$u(u,c,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,n=ei){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=Fg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return At.fromWorkingColorSpace(vn.copy(this),e),Math.round(Dn(vn.r*255,0,255))*65536+Math.round(Dn(vn.g*255,0,255))*256+Math.round(Dn(vn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(vn.copy(this),n);const r=vn.r,o=vn.g,c=vn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let p,m;const v=(f+u)/2;if(f===u)p=0,m=0;else{const S=u-f;switch(m=v<=.5?S/(u+f):S/(2-u-f),u){case r:p=(o-c)/S+(o<c?6:0);break;case o:p=(c-r)/S+2;break;case c:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ei){At.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,o=vn.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(fl);const r=Lu(Sr.h,fl.h,n),o=Lu(Sr.s,fl.s,n),c=Lu(Sr.l,fl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new _t;_t.NAMES=Fg;let $v=0;class Js extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Ya(),this.name="",this.blending=Gs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dd&&(r.blendSrc=this.blendSrc),this.blendDst!==fd&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hf extends Js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new le,hl=new Ct;class Ai{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=im,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}}class Bg extends Ai{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Hg extends Ai{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xt extends Ai{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Zv=0;const Jn=new Vt,Zu=new dn,zs=new le,Gn=new $a,za=new $a,ln=new le;class jn extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?Hg:Bg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xt(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Gn.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];za.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Gn.min,za.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,za.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(za.min),Gn.expandByPoint(za.max))}Gn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)ln.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(ln));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)ln.fromBufferAttribute(f,m),p&&(zs.fromBufferAttribute(e,m),ln.add(zs)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<r.count;G++)f[G]=new le,p[G]=new le;const m=new le,v=new le,S=new le,_=new Ct,M=new Ct,E=new Ct,b=new le,y=new le;function x(G,N,A){m.fromBufferAttribute(r,G),v.fromBufferAttribute(r,N),S.fromBufferAttribute(r,A),_.fromBufferAttribute(c,G),M.fromBufferAttribute(c,N),E.fromBufferAttribute(c,A),v.sub(m),S.sub(m),M.sub(_),E.sub(_);const O=1/(M.x*E.y-E.x*M.y);isFinite(O)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(O),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(O),f[G].add(b),f[N].add(b),f[A].add(b),p[G].add(y),p[N].add(y),p[A].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,N=U.length;G<N;++G){const A=U[G],O=A.start,K=A.count;for(let W=O,se=O+K;W<se;W+=3)x(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const P=new le,R=new le,$=new le,B=new le;function k(G){$.fromBufferAttribute(o,G),B.copy($);const N=f[G];P.copy(N),P.sub($.multiplyScalar($.dot(N))).normalize(),R.crossVectors(B,N);const O=R.dot(p[G])<0?-1:1;u.setXYZW(G,P.x,P.y,P.z,O)}for(let G=0,N=U.length;G<N;++G){const A=U[G],O=A.start,K=A.count;for(let W=O,se=O+K;W<se;W+=3)k(e.getX(W+0)),k(e.getX(W+1)),k(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new le,c=new le,u=new le,f=new le,p=new le,m=new le,v=new le,S=new le;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),v.subVectors(u,c),S.subVectors(o,c),v.cross(S),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,y),f.add(v),p.add(v),m.add(v),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,c),S.subVectors(o,c),v.cross(S),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,S=f.normalized,_=new m.constructor(p.length*v);let M=0,E=0;for(let b=0,y=p.length;b<y;b++){f.isInterleavedBufferAttribute?M=p[b]*f.data.stride+f.offset:M=p[b]*v;for(let x=0;x<v;x++)_[E++]=m[M++]}return new Ai(_,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let v=0,S=m.length;v<S;v++){const _=m[v],M=e(_,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let S=0,_=m.length;S<_;S++){const M=m[S];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],S=c[m];for(let _=0,M=S.length;_<M;_++)v.push(S[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Vt,jr=new df,pl=new Hl,Sm=new le,ml=new le,gl=new le,xl=new le,Ku=new le,yl=new le,Em=new le,vl=new le;class Ve extends dn{constructor(e=new jn,n=new hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){yl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=f[p],S=c[p];v!==0&&(Ku.fromBufferAttribute(S,e),u?yl.addScaledVector(Ku,v):yl.addScaledVector(Ku.sub(n),v))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(c),jr.copy(e.ray).recast(e.near),!(pl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(pl,Sm)===null||jr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(_m.copy(c).invert(),jr.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,_=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const y=_[E],x=u[y.materialIndex],U=Math.max(y.start,M.start),P=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,$=P;R<$;R+=3){const B=f.getX(R),k=f.getX(R+1),G=f.getX(R+2);o=_l(this,x,e,r,m,v,S,B,k,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let y=E,x=b;y<x;y+=3){const U=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);o=_l(this,u,e,r,m,v,S,U,P,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const y=_[E],x=u[y.materialIndex],U=Math.max(y.start,M.start),P=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,$=P;R<$;R+=3){const B=R,k=R+1,G=R+2;o=_l(this,x,e,r,m,v,S,B,k,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let y=E,x=b;y<x;y+=3){const U=y,P=y+1,R=y+2;o=_l(this,u,e,r,m,v,S,U,P,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Kv(s,e,n,r,o,c,u,f){let p;if(e.side===Un?p=r.intersectTriangle(u,c,o,!0,f):p=r.intersectTriangle(o,c,u,e.side===Tr,f),p===null)return null;vl.copy(f),vl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(vl);return m<n.near||m>n.far?null:{distance:m,point:vl.clone(),object:s}}function _l(s,e,n,r,o,c,u,f,p,m){s.getVertexPosition(f,ml),s.getVertexPosition(p,gl),s.getVertexPosition(m,xl);const v=Kv(s,e,n,r,ml,gl,xl,Em);if(v){const S=new le;hi.getBarycoord(Em,ml,gl,xl,S),o&&(v.uv=hi.getInterpolatedAttribute(o,f,p,m,S,new Ct)),c&&(v.uv1=hi.getInterpolatedAttribute(c,f,p,m,S,new Ct)),u&&(v.normal=hi.getInterpolatedAttribute(u,f,p,m,S,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:p,c:m,normal:new le,materialIndex:0};hi.getNormal(ml,gl,xl,_.normal),v.face=_,v.barycoord=S}return v}class lt extends jn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],S=[];let _=0,M=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(S,2));function E(b,y,x,U,P,R,$,B,k,G,N){const A=R/k,O=$/G,K=R/2,W=$/2,se=B/2,re=k+1,Z=G+1;let ie=0,F=0;const de=new le;for(let L=0;L<Z;L++){const w=L*O-W;for(let V=0;V<re;V++){const ce=V*A-K;de[b]=ce*U,de[y]=w*P,de[x]=se,m.push(de.x,de.y,de.z),de[b]=0,de[y]=0,de[x]=B>0?1:-1,v.push(de.x,de.y,de.z),S.push(V/k),S.push(1-L/G),ie+=1}}for(let L=0;L<G;L++)for(let w=0;w<k;w++){const V=_+w+re*L,ce=_+w+re*(L+1),j=_+(w+1)+re*(L+1),ee=_+(w+1)+re*L;p.push(V,ce,ee),p.push(ce,j,ee),F+=6}f.addGroup(M,F,N),M+=F,_+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function wn(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const o in r)e[o]=r[o]}return e}function Qv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Gg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Jv={clone:Zs,merge:wn};var e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Vg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new le,Mm=new Ct,wm=new Ct;class Vn extends Vg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,n){return this.getViewBounds(e,Mm,wm),n.subVectors(wm,Mm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Iu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Fs=1;class n_ extends dn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vn(ks,Fs,e,n);o.layers=this.layers,this.add(o);const c=new Vn(ks,Fs,e,n);c.layers=this.layers,this.add(c);const u=new Vn(ks,Fs,e,n);u.layers=this.layers,this.add(u);const f=new Vn(ks,Fs,e,n);f.layers=this.layers,this.add(f);const p=new Vn(ks,Fs,e,n);p.layers=this.layers,this.add(p);const m=new Vn(ks,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,p]=n;for(const m of n)this.remove(m);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,m,v]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(S,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class jg extends On{constructor(e,n,r,o,c,u,f,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,r,o,c,u,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i_ extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new jg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new lt(5,5,5),c=new Ar({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:wr});c.uniforms.tEquirect.value=n;const u=new Ve(o,c),f=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Ti),new n_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Qu=new le,r_=new le,s_=new xt;class qr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Qu.subVectors(r,n).cross(r_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Qu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||s_.getNormalMatrix(e),o=this.coplanarPoint(Qu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Hl,Sl=new le;class pf{constructor(e=new qr,n=new qr,r=new qr,o=new qr,c=new qr,u=new qr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Yi){const r=this.planes,o=e.elements,c=o[0],u=o[1],f=o[2],p=o[3],m=o[4],v=o[5],S=o[6],_=o[7],M=o[8],E=o[9],b=o[10],y=o[11],x=o[12],U=o[13],P=o[14],R=o[15];if(r[0].setComponents(p-c,_-m,y-M,R-x).normalize(),r[1].setComponents(p+c,_+m,y+M,R+x).normalize(),r[2].setComponents(p+u,_+v,y+E,R+U).normalize(),r[3].setComponents(p-u,_-v,y-E,R-U).normalize(),r[4].setComponents(p-f,_-S,y-b,R-P).normalize(),n===Yi)r[5].setComponents(p+f,_+S,y+b,R+P).normalize();else if(n===Pl)r[5].setComponents(f,S,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Sl.x=o.normal.x>0?e.max.x:e.min.x,Sl.y=o.normal.y>0?e.max.y:e.min.y,Sl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function a_(s){const e=new WeakMap;function n(f,p){const m=f.array,v=f.usage,S=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,m){const v=p.array,S=p.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,v);else{S.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<S.length;M++){const E=S[_],b=S[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,S[_]=b)}S.length=_+1;for(let M=0,E=S.length;M<E;M++){const b=S[M];s.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:c,update:u}}class Gl extends jn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(o),m=f+1,v=p+1,S=e/f,_=n/p,M=[],E=[],b=[],y=[];for(let x=0;x<v;x++){const U=x*_-u;for(let P=0;P<m;P++){const R=P*S-c;E.push(R,-U,0),b.push(0,0,1),y.push(P/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<f;U++){const P=U+m*x,R=U+m*(x+1),$=U+1+m*(x+1),B=U+1+m*x;M.push(P,R,B),M.push(R,$,B)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(b,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,__=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",k_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,J_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ES=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,US=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$S=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:o_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:u_,alphatest_fragment:d_,alphatest_pars_fragment:f_,aomap_fragment:h_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:g_,begin_vertex:x_,beginnormal_vertex:y_,bsdfs:v_,iridescence_fragment:__,bumpmap_pars_fragment:S_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:b_,color_fragment:T_,color_pars_fragment:A_,color_pars_vertex:C_,color_vertex:R_,common:N_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:L_,displacementmap_pars_vertex:P_,displacementmap_vertex:D_,emissivemap_fragment:U_,emissivemap_pars_fragment:O_,colorspace_fragment:z_,colorspace_pars_fragment:k_,envmap_fragment:F_,envmap_common_pars_fragment:B_,envmap_pars_fragment:H_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:J_,envmap_vertex:V_,fog_vertex:j_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:Y_,gradientmap_pars_fragment:q_,lightmap_pars_fragment:$_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:K_,lights_pars_begin:Q_,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:rS,lights_physical_pars_fragment:sS,lights_fragment_begin:aS,lights_fragment_maps:oS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:fS,map_fragment:hS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:xS,metalnessmap_pars_fragment:yS,morphinstance_vertex:vS,morphcolor_vertex:_S,morphnormal_vertex:SS,morphtarget_pars_vertex:ES,morphtarget_vertex:MS,normal_fragment_begin:wS,normal_fragment_maps:bS,normal_pars_fragment:TS,normal_pars_vertex:AS,normal_vertex:CS,normalmap_pars_fragment:RS,clearcoat_normal_fragment_begin:NS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:LS,iridescence_pars_fragment:PS,opaque_fragment:DS,packing:US,premultiplied_alpha_fragment:OS,project_vertex:zS,dithering_fragment:kS,dithering_pars_fragment:FS,roughnessmap_fragment:BS,roughnessmap_pars_fragment:HS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:VS,shadowmap_vertex:jS,shadowmask_pars_fragment:WS,skinbase_vertex:XS,skinning_pars_vertex:YS,skinning_vertex:qS,skinnormal_vertex:$S,specularmap_fragment:ZS,specularmap_pars_fragment:KS,tonemapping_fragment:QS,tonemapping_pars_fragment:JS,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:aE,background_frag:oE,backgroundCube_vert:lE,backgroundCube_frag:cE,cube_vert:uE,cube_frag:dE,depth_vert:fE,depth_frag:hE,distanceRGBA_vert:pE,distanceRGBA_frag:mE,equirect_vert:gE,equirect_frag:xE,linedashed_vert:yE,linedashed_frag:vE,meshbasic_vert:_E,meshbasic_frag:SE,meshlambert_vert:EE,meshlambert_frag:ME,meshmatcap_vert:wE,meshmatcap_frag:bE,meshnormal_vert:TE,meshnormal_frag:AE,meshphong_vert:CE,meshphong_frag:RE,meshphysical_vert:NE,meshphysical_frag:IE,meshtoon_vert:LE,meshtoon_frag:PE,points_vert:DE,points_frag:UE,shadow_vert:OE,shadow_frag:zE,sprite_vert:kE,sprite_frag:FE},Ue={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},wi={basic:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:wn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:wn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:wn([Ue.points,Ue.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:wn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:wn([Ue.common,Ue.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:wn([Ue.sprite,Ue.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:wn([Ue.common,Ue.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:wn([Ue.lights,Ue.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};wi.physical={uniforms:wn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const El={r:0,b:0,g:0},Xr=new Ci,BE=new Vt;function HE(s,e,n,r,o,c,u){const f=new _t(0);let p=c===!0?0:1,m,v,S=null,_=0,M=null;function E(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?n:e).get(P)),P}function b(U){let P=!1;const R=E(U);R===null?x(f,p):R&&R.isColor&&(x(R,1),P=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,P){const R=E(P);R&&(R.isCubeTexture||R.mapping===Fl)?(v===void 0&&(v=new Ve(new lt(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:Zs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function($,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Xr.copy(P.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(Xr)),v.material.toneMapped=At.getTransfer(R.colorSpace)!==Ot,(S!==R||_!==R.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,S=R,_=R.version,M=s.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Ve(new Gl(2,2),new Ar({name:"BackgroundMaterial",uniforms:Zs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=At.getTransfer(R.colorSpace)!==Ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(S!==R||_!==R.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,S=R,_=R.version,M=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,P){U.getRGB(El,Gg(s)),r.buffers.color.setClear(El.r,El.g,El.b,P,u)}return{getClearColor:function(){return f},setClearColor:function(U,P=1){f.set(U),p=P,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(f,p)},render:b,addToRenderList:y}}function GE(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function f(A,O,K,W,se){let re=!1;const Z=S(W,K,O);c!==Z&&(c=Z,m(c.object)),re=M(A,W,K,se),re&&E(A,W,K,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,R(A,O,K,W),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function S(A,O,K){const W=K.wireframe===!0;let se=r[A.id];se===void 0&&(se={},r[A.id]=se);let re=se[O.id];re===void 0&&(re={},se[O.id]=re);let Z=re[W];return Z===void 0&&(Z=_(p()),re[W]=Z),Z}function _(A){const O=[],K=[],W=[];for(let se=0;se<n;se++)O[se]=0,K[se]=0,W[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:W,object:A,attributes:{},index:null}}function M(A,O,K,W){const se=c.attributes,re=O.attributes;let Z=0;const ie=K.getAttributes();for(const F in ie)if(ie[F].location>=0){const L=se[F];let w=re[F];if(w===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(w=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(w=A.instanceColor)),L===void 0||L.attribute!==w||w&&L.data!==w.data)return!0;Z++}return c.attributesNum!==Z||c.index!==W}function E(A,O,K,W){const se={},re=O.attributes;let Z=0;const ie=K.getAttributes();for(const F in ie)if(ie[F].location>=0){let L=re[F];L===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const w={};w.attribute=L,L&&L.data&&(w.data=L.data),se[F]=w,Z++}c.attributes=se,c.attributesNum=Z,c.index=W}function b(){const A=c.newAttributes;for(let O=0,K=A.length;O<K;O++)A[O]=0}function y(A){x(A,0)}function x(A,O){const K=c.newAttributes,W=c.enabledAttributes,se=c.attributeDivisors;K[A]=1,W[A]===0&&(s.enableVertexAttribArray(A),W[A]=1),se[A]!==O&&(s.vertexAttribDivisor(A,O),se[A]=O)}function U(){const A=c.newAttributes,O=c.enabledAttributes;for(let K=0,W=O.length;K<W;K++)O[K]!==A[K]&&(s.disableVertexAttribArray(K),O[K]=0)}function P(A,O,K,W,se,re,Z){Z===!0?s.vertexAttribIPointer(A,O,K,se,re):s.vertexAttribPointer(A,O,K,W,se,re)}function R(A,O,K,W){b();const se=W.attributes,re=K.getAttributes(),Z=O.defaultAttributeValues;for(const ie in re){const F=re[ie];if(F.location>=0){let de=se[ie];if(de===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const L=de.normalized,w=de.itemSize,V=e.get(de);if(V===void 0)continue;const ce=V.buffer,j=V.type,ee=V.bytesPerElement,ue=j===s.INT||j===s.UNSIGNED_INT||de.gpuType===sf;if(de.isInterleavedBufferAttribute){const te=de.data,me=te.stride,ye=de.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<F.locationSize;we++)x(F.location+we,te.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<F.locationSize;we++)y(F.location+we);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let we=0;we<F.locationSize;we++)P(F.location+we,w/F.locationSize,j,L,me*ee,(ye+w/F.locationSize*we)*ee,ue)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<F.locationSize;te++)x(F.location+te,de.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<F.locationSize;te++)y(F.location+te);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let te=0;te<F.locationSize;te++)P(F.location+te,w/F.locationSize,j,L,w*ee,w/F.locationSize*te*ee,ue)}}else if(Z!==void 0){const L=Z[ie];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(F.location,L);break;case 3:s.vertexAttrib3fv(F.location,L);break;case 4:s.vertexAttrib4fv(F.location,L);break;default:s.vertexAttrib1fv(F.location,L)}}}}U()}function $(){G();for(const A in r){const O=r[A];for(const K in O){const W=O[K];for(const se in W)v(W[se].object),delete W[se];delete O[K]}delete r[A]}}function B(A){if(r[A.id]===void 0)return;const O=r[A.id];for(const K in O){const W=O[K];for(const se in W)v(W[se].object),delete W[se];delete O[K]}delete r[A.id]}function k(A){for(const O in r){const K=r[O];if(K[A.id]===void 0)continue;const W=K[A.id];for(const se in W)v(W[se].object),delete W[se];delete K[A.id]}}function G(){N(),u=!0,c!==o&&(c=o,m(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:N,dispose:$,releaseStatesOfGeometry:B,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:y,disableUnusedAttributes:U}}function VE(s,e,n){let r;function o(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,S){S!==0&&(s.drawArraysInstanced(r,m,v,S),n.update(v,r,S))}function f(m,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,S);let M=0;for(let E=0;E<S;E++)M+=v[E];n.update(M,r,1)}function p(m,v,S,_){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)u(m[E],v[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,_,0,S);let E=0;for(let b=0;b<S;b++)E+=v[b]*_[b];n.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function jE(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==pi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const G=k===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==$i&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Xi&&!G)}function p(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:$,maxSamples:B}}function WE(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new qr,f=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||r!==0||o;return o=_,r=S.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){n=v(S,_,0)},this.setState=function(S,_,M){const E=S.clippingPlanes,b=S.clipIntersection,y=S.clipShadows,x=s.get(S);if(!o||E===null||E.length===0||c&&!y)c?v(null):m();else{const U=c?0:r,P=U*4;let R=x.clippingState||null;p.value=R,R=v(E,_,P,M);for(let $=0;$!==P;++$)R[$]=n[$];x.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,_,M,E){const b=S!==null?S.length:0;let y=null;if(b!==0){if(y=p.value,E!==!0||y===null){const x=M+b*4,U=_.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,R=M;P!==b;++P,R+=4)u.copy(S[P]).applyMatrix4(U,f),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function XE(s){let e=new WeakMap;function n(u,f){return f===_d?u.mapping=Xs:f===Sd&&(u.mapping=Ys),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===_d||f===Sd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new i_(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Xg extends Vg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=4,bm=[.125,.215,.35,.446,.526,.582],Kr=20,Ju=new Xg,Tm=new _t;let ed=null,td=0,nd=0,id=!1;const $r=(1+Math.sqrt(5))/2,Bs=1/$r,Am=[new le(-$r,Bs,0),new le($r,Bs,0),new le(-Bs,0,$r),new le(Bs,0,$r),new le(0,$r,-Bs),new le(0,$r,Bs),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class Cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Xa,format:pi,colorSpace:Ks,depthBuffer:!1},o=Rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(c)),this._blurMaterial=qE(c,e,n)}return o}_compileMaterial(e){const n=new Ve(this._lodPlanes[0],e);this._renderer.compile(n,Ju)}_sceneToCubeUV(e,n,r,o){const f=new Vn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,_=v.toneMapping;v.getClearColor(Tm),v.toneMapping=br,v.autoClear=!1;const M=new hf({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new Ve(new lt,M);let b=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,b=!0):(M.color.copy(Tm),b=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(f.up.set(0,p[x],0),f.lookAt(m[x],0,0)):U===1?(f.up.set(0,0,p[x]),f.lookAt(0,m[x],0)):(f.up.set(0,p[x],0),f.lookAt(0,0,m[x]));const P=this._cubeSize;Ml(o,U*P,x>2?P:0,P,P),v.setRenderTarget(o),b&&v.render(E,f),v.render(e,f)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=_,v.autoClear=S,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Xs||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Ve(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Ml(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Ju)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Am[(o-c-1)%Am.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new Ve(this._lodPlanes[o],m),_=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Kr-1),b=c/E,y=isFinite(c)?1+Math.floor(v*b):Kr;y>Kr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const x=[];let U=0;for(let k=0;k<Kr;++k){const G=k/b,N=Math.exp(-G*G/2);x.push(N),k===0?U+=N:k<y&&(U+=2*N)}for(let k=0;k<x.length;k++)x[k]=x[k]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-r;const R=this._sizeLods[o],$=3*R*(o>P-Hs?o-P+Hs:0),B=4*(this._cubeSize-R);Ml(n,$,B,3*R,2*R),p.setRenderTarget(n),p.render(S,Ju)}}function YE(s){const e=[],n=[],r=[];let o=s;const c=s-Hs+1+bm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);n.push(f);let p=1/f;u>s-Hs?p=bm[u-s+Hs-1]:u===0&&(p=0),r.push(p);const m=1/(f-2),v=-m,S=1+m,_=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,E=6,b=3,y=2,x=1,U=new Float32Array(b*E*M),P=new Float32Array(y*E*M),R=new Float32Array(x*E*M);for(let B=0;B<M;B++){const k=B%3*2/3-1,G=B>2?0:-1,N=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];U.set(N,b*E*B),P.set(_,y*E*B);const A=[B,B,B,B,B,B];R.set(A,x*E*B)}const $=new jn;$.setAttribute("position",new Ai(U,b)),$.setAttribute("uv",new Ai(P,y)),$.setAttribute("faceIndex",new Ai(R,x)),e.push($),o>Hs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Rm(s,e,n){const r=new ts(s,e,n);return r.texture.mapping=Fl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ml(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function qE(s,e,n){const r=new Float32Array(Kr),o=new le(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Nm(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Im(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function mf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $E(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===_d||p===Sd,v=p===Xs||p===Ys;if(m||v){let S=e.get(f);const _=S!==void 0?S.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Cm(s)),S=m?n.fromEquirectangular(f,S):n.fromCubemap(f,S),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),S.texture;if(S!==void 0)return S.texture;{const M=f.image;return m&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new Cm(s)),S=m?n.fromEquirectangular(f):n.fromCubemap(f),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),f.addEventListener("dispose",c),S.texture):null}}}return f}function o(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function ZE(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Fa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function KE(s,e,n,r){const o={},c=new WeakMap;function u(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const b=_.morphAttributes[E];for(let y=0,x=b.length;y<x;y++)e.remove(b[y])}_.removeEventListener("dispose",u),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(S,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(S){const _=S.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const M=S.morphAttributes;for(const E in M){const b=M[E];for(let y=0,x=b.length;y<x;y++)e.update(b[y],s.ARRAY_BUFFER)}}function m(S){const _=[],M=S.index,E=S.attributes.position;let b=0;if(M!==null){const U=M.array;b=M.version;for(let P=0,R=U.length;P<R;P+=3){const $=U[P+0],B=U[P+1],k=U[P+2];_.push($,B,B,k,k,$)}}else if(E!==void 0){const U=E.array;b=E.version;for(let P=0,R=U.length/3-1;P<R;P+=3){const $=P+0,B=P+1,k=P+2;_.push($,B,B,k,k,$)}}else return;const y=new(Og(_)?Hg:Bg)(_,1);y.version=b;const x=c.get(S);x&&e.remove(x),c.set(S,y)}function v(S){const _=c.get(S);if(_){const M=S.index;M!==null&&_.version<M.version&&m(S)}else m(S);return c.get(S)}return{get:f,update:p,getWireframeAttribute:v}}function QE(s,e,n){let r;function o(_){r=_}let c,u;function f(_){c=_.type,u=_.bytesPerElement}function p(_,M){s.drawElements(r,M,c,_*u),n.update(M,r,1)}function m(_,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,_*u,E),n.update(M,r,E))}function v(_,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,E);let y=0;for(let x=0;x<E;x++)y+=M[x];n.update(y,r,1)}function S(_,M,E,b){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)m(_[x]/u,M[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,b,0,E);let x=0;for(let U=0;U<E;U++)x+=M[U]*b[U];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function JE(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function eM(s,e,n){const r=new WeakMap,o=new qt;function c(u,f,p){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let _=r.get(f);if(_===void 0||_.count!==S){let A=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var M=A;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),y===!0&&(R=3);let $=f.attributes.position.count*R,B=1;$>e.maxTextureSize&&(B=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const k=new Float32Array($*B*4*S),G=new kg(k,$,B,S);G.type=Xi,G.needsUpdate=!0;const N=R*4;for(let O=0;O<S;O++){const K=x[O],W=U[O],se=P[O],re=$*B*4*O;for(let Z=0;Z<K.count;Z++){const ie=Z*N;E===!0&&(o.fromBufferAttribute(K,Z),k[re+ie+0]=o.x,k[re+ie+1]=o.y,k[re+ie+2]=o.z,k[re+ie+3]=0),b===!0&&(o.fromBufferAttribute(W,Z),k[re+ie+4]=o.x,k[re+ie+5]=o.y,k[re+ie+6]=o.z,k[re+ie+7]=0),y===!0&&(o.fromBufferAttribute(se,Z),k[re+ie+8]=o.x,k[re+ie+9]=o.y,k[re+ie+10]=o.z,k[re+ie+11]=se.itemSize===4?o.w:1)}}_={count:S,texture:G,size:new Ct($,B)},r.set(f,_),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const b=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function tM(s,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,S=e.get(p,v);if(o.get(S)!==m&&(e.update(S),o.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return S}function u(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Yg extends On{constructor(e,n,r,o,c,u,f,p,m,v=Vs){if(v!==Vs&&v!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Vs&&(r=es),r===void 0&&v===$s&&(r=qs),super(null,o,c,u,f,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:mi,this.minFilter=p!==void 0?p:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qg=new On,Lm=new Yg(1,1),$g=new kg,Zg=new Hv,Kg=new jg,Pm=[],Dm=[],Um=new Float32Array(16),Om=new Float32Array(9),zm=new Float32Array(4);function ea(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Pm[o];if(c===void 0&&(c=new Float32Array(o),Pm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Vl(s,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function nM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function aM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;zm.set(r),s.uniformMatrix2fv(this.addr,!1,zm),rn(n,r)}}function oM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Om.set(r),s.uniformMatrix3fv(this.addr,!1,Om),rn(n,r)}}function lM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Um.set(r),s.uniformMatrix4fv(this.addr,!1,Um),rn(n,r)}}function cM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function hM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function xM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Lm.compareFunction=Ug,c=Lm):c=qg,n.setTexture2D(e||c,o)}function yM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Zg,o)}function vM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Kg,o)}function _M(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||$g,o)}function SM(s){switch(s){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return aM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return dM;case 35669:case 35673:return fM;case 5125:return hM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}function EM(s,e){s.uniform1fv(this.addr,e)}function MM(s,e){const n=ea(e,this.size,2);s.uniform2fv(this.addr,n)}function wM(s,e){const n=ea(e,this.size,3);s.uniform3fv(this.addr,n)}function bM(s,e){const n=ea(e,this.size,4);s.uniform4fv(this.addr,n)}function TM(s,e){const n=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function AM(s,e){const n=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function CM(s,e){const n=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function RM(s,e){s.uniform1iv(this.addr,e)}function NM(s,e){s.uniform2iv(this.addr,e)}function IM(s,e){s.uniform3iv(this.addr,e)}function LM(s,e){s.uniform4iv(this.addr,e)}function PM(s,e){s.uniform1uiv(this.addr,e)}function DM(s,e){s.uniform2uiv(this.addr,e)}function UM(s,e){s.uniform3uiv(this.addr,e)}function OM(s,e){s.uniform4uiv(this.addr,e)}function zM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||qg,c[u])}function kM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Zg,c[u])}function FM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Kg,c[u])}function BM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||$g,c[u])}function HM(s){switch(s){case 5126:return EM;case 35664:return MM;case 35665:return wM;case 35666:return bM;case 35674:return TM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return NM;case 35668:case 35672:return IM;case 35669:case 35673:return LM;case 5125:return PM;case 36294:return DM;case 36295:return UM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return BM}}class GM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=SM(n.type)}}class VM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HM(n.type)}}class jM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function km(s,e){s.seq.push(e),s.map[e.id]=e}function WM(s,e,n){const r=s.name,o=r.length;for(rd.lastIndex=0;;){const c=rd.exec(r),u=rd.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===o){km(n,m===void 0?new GM(f,s,e):new VM(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new jM(f),km(n,S)),n=S}}}class Ll{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);WM(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Fm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const XM=37297;let YM=0;function qM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Bm=new xt;function $M(s){At._getMatrix(Bm,At.workingColorSpace,s);const e=`mat3( ${Bm.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+qM(s.getShaderSource(e),u)}else return o}function ZM(s,e){const n=$M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function KM(s,e){let n;switch(e){case pv:n="Linear";break;case mv:n="Reinhard";break;case gv:n="Cineon";break;case xv:n="ACESFilmic";break;case vv:n="AgX";break;case _v:n="Neutral";break;case yv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new le;function QM(){At.getLuminanceCoefficients(wl);const s=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function e1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function t1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Ba(s){return s!==""}function Gm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(s){return s.replace(n1,r1)}const i1=new Map;function r1(s,e){let n=vt[e];if(n===void 0){const r=i1.get(e);if(r!==void 0)n=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(s){return s.replace(s1,a1)}function a1(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Wm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function l1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function u1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Eg:e="ENVMAP_BLENDING_MULTIPLY";break;case fv:e="ENVMAP_BLENDING_MIX";break;case hv:e="ENVMAP_BLENDING_ADD";break}return e}function d1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function f1(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=o1(n),m=l1(n),v=c1(n),S=u1(n),_=d1(n),M=JM(n),E=e1(c),b=o.createProgram();let y,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ba).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ba).join(`
`),x.length>0&&(x+=`
`)):(y=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),x=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?vt.tonemapping_pars_fragment:"",n.toneMapping!==br?KM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,ZM("linearToOutputTexel",n.outputColorSpace),QM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),u=Kd(u),u=Gm(u,n),u=Vm(u,n),f=Kd(f),f=Gm(f,n),f=Vm(f,n),u=jm(u),f=jm(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=U+y+u,R=U+x+f,$=Fm(o,o.VERTEX_SHADER,P),B=Fm(o,o.FRAGMENT_SHADER,R);o.attachShader(b,$),o.attachShader(b,B),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function k(O){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(b).trim(),W=o.getShaderInfoLog($).trim(),se=o.getShaderInfoLog(B).trim();let re=!0,Z=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,$,B);else{const ie=Hm(o,$,"vertex"),F=Hm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+K+`
`+ie+`
`+F)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||se==="")&&(Z=!1);Z&&(O.diagnostics={runnable:re,programLog:K,vertexShader:{log:W,prefix:y},fragmentShader:{log:se,prefix:x}})}o.deleteShader($),o.deleteShader(B),G=new Ll(o,b),N=t1(o,b)}let G;this.getUniforms=function(){return G===void 0&&k(this),G};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(b,XM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=$,this.fragmentShader=B,this}let h1=0;class p1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new m1(e),n.set(e,r)),r}}class m1{constructor(e){this.id=h1++,this.code=e,this.usedTimes=0}}function g1(s,e,n,r,o,c,u){const f=new ff,p=new p1,m=new Set,v=[],S=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(N){return m.add(N),N===0?"uv":`uv${N}`}function y(N,A,O,K,W){const se=K.fog,re=W.geometry,Z=N.isMeshStandardMaterial?K.environment:null,ie=(N.isMeshStandardMaterial?n:e).get(N.envMap||Z),F=ie&&ie.mapping===Fl?ie.image.height:null,de=E[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const L=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,w=L!==void 0?L.length:0;let V=0;re.morphAttributes.position!==void 0&&(V=1),re.morphAttributes.normal!==void 0&&(V=2),re.morphAttributes.color!==void 0&&(V=3);let ce,j,ee,ue;if(de){const bt=wi[de];ce=bt.vertexShader,j=bt.fragmentShader}else ce=N.vertexShader,j=N.fragmentShader,p.update(N),ee=p.getVertexShaderID(N),ue=p.getFragmentShaderID(N);const te=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),ye=W.isInstancedMesh===!0,we=W.isBatchedMesh===!0,De=!!N.map,Re=!!N.matcap,Qe=!!ie,H=!!N.aoMap,gt=!!N.lightMap,Ie=!!N.bumpMap,Be=!!N.normalMap,Oe=!!N.displacementMap,rt=!!N.emissiveMap,ke=!!N.metalnessMap,D=!!N.roughnessMap,C=N.anisotropy>0,oe=N.clearcoat>0,_e=N.dispersion>0,Se=N.iridescence>0,xe=N.sheen>0,qe=N.transmission>0,Le=C&&!!N.anisotropyMap,He=oe&&!!N.clearcoatMap,pt=oe&&!!N.clearcoatNormalMap,be=oe&&!!N.clearcoatRoughnessMap,je=Se&&!!N.iridescenceMap,it=Se&&!!N.iridescenceThicknessMap,ot=xe&&!!N.sheenColorMap,Xe=xe&&!!N.sheenRoughnessMap,St=!!N.specularMap,ft=!!N.specularColorMap,Pt=!!N.specularIntensityMap,q=qe&&!!N.transmissionMap,Pe=qe&&!!N.thicknessMap,ge=!!N.gradientMap,ve=!!N.alphaMap,Fe=N.alphaTest>0,ze=!!N.alphaHash,ht=!!N.extensions;let Ft=br;N.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Qt={shaderID:de,shaderType:N.type,shaderName:N.name,vertexShader:ce,fragmentShader:j,defines:N.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:we,batchingColor:we&&W._colorsTexture!==null,instancing:ye,instancingColor:ye&&W.instanceColor!==null,instancingMorph:ye&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ks,alphaToCoverage:!!N.alphaToCoverage,map:De,matcap:Re,envMap:Qe,envMapMode:Qe&&ie.mapping,envMapCubeUVHeight:F,aoMap:H,lightMap:gt,bumpMap:Ie,normalMap:Be,displacementMap:_&&Oe,emissiveMap:rt,normalMapObjectSpace:Be&&N.normalMapType===wv,normalMapTangentSpace:Be&&N.normalMapType===Dg,metalnessMap:ke,roughnessMap:D,anisotropy:C,anisotropyMap:Le,clearcoat:oe,clearcoatMap:He,clearcoatNormalMap:pt,clearcoatRoughnessMap:be,dispersion:_e,iridescence:Se,iridescenceMap:je,iridescenceThicknessMap:it,sheen:xe,sheenColorMap:ot,sheenRoughnessMap:Xe,specularMap:St,specularColorMap:ft,specularIntensityMap:Pt,transmission:qe,transmissionMap:q,thicknessMap:Pe,gradientMap:ge,opaque:N.transparent===!1&&N.blending===Gs&&N.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:ze,combine:N.combine,mapUv:De&&b(N.map.channel),aoMapUv:H&&b(N.aoMap.channel),lightMapUv:gt&&b(N.lightMap.channel),bumpMapUv:Ie&&b(N.bumpMap.channel),normalMapUv:Be&&b(N.normalMap.channel),displacementMapUv:Oe&&b(N.displacementMap.channel),emissiveMapUv:rt&&b(N.emissiveMap.channel),metalnessMapUv:ke&&b(N.metalnessMap.channel),roughnessMapUv:D&&b(N.roughnessMap.channel),anisotropyMapUv:Le&&b(N.anisotropyMap.channel),clearcoatMapUv:He&&b(N.clearcoatMap.channel),clearcoatNormalMapUv:pt&&b(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&b(N.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&b(N.iridescenceMap.channel),iridescenceThicknessMapUv:it&&b(N.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&b(N.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&b(N.sheenRoughnessMap.channel),specularMapUv:St&&b(N.specularMap.channel),specularColorMapUv:ft&&b(N.specularColorMap.channel),specularIntensityMapUv:Pt&&b(N.specularIntensityMap.channel),transmissionMapUv:q&&b(N.transmissionMap.channel),thicknessMapUv:Pe&&b(N.thicknessMap.channel),alphaMapUv:ve&&b(N.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Be||C),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!re.attributes.uv&&(De||ve),fog:!!se,useFog:N.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:V,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:De&&N.map.isVideoTexture===!0&&At.getTransfer(N.map.colorSpace)===Ot,decodeVideoTextureEmissive:rt&&N.emissiveMap.isVideoTexture===!0&&At.getTransfer(N.emissiveMap.colorSpace)===Ot,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===bi,flipSided:N.side===Un,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ht&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&N.extensions.multiDraw===!0||we)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Qt.vertexUv1s=m.has(1),Qt.vertexUv2s=m.has(2),Qt.vertexUv3s=m.has(3),m.clear(),Qt}function x(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const O in N.defines)A.push(O),A.push(N.defines[O]);return N.isRawShaderMaterial===!1&&(U(A,N),P(A,N),A.push(s.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function U(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function P(N,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),N.push(f.mask)}function R(N){const A=E[N.type];let O;if(A){const K=wi[A];O=Jv.clone(K.uniforms)}else O=N.uniforms;return O}function $(N,A){let O;for(let K=0,W=v.length;K<W;K++){const se=v[K];if(se.cacheKey===A){O=se,++O.usedTimes;break}}return O===void 0&&(O=new f1(s,A,N,c),v.push(O)),O}function B(N){if(--N.usedTimes===0){const A=v.indexOf(N);v[A]=v[v.length-1],v.pop(),N.destroy()}}function k(N){p.remove(N)}function G(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:$,releaseProgram:B,releaseShaderCache:k,programs:v,dispose:G}}function x1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function y1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ym(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(S,_,M,E,b,y){let x=s[e];return x===void 0?(x={id:S.id,object:S,geometry:_,material:M,groupOrder:E,renderOrder:S.renderOrder,z:b,group:y},s[e]=x):(x.id=S.id,x.object=S,x.geometry=_,x.material=M,x.groupOrder=E,x.renderOrder=S.renderOrder,x.z=b,x.group=y),e++,x}function f(S,_,M,E,b,y){const x=u(S,_,M,E,b,y);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):n.push(x)}function p(S,_,M,E,b,y){const x=u(S,_,M,E,b,y);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):n.unshift(x)}function m(S,_){n.length>1&&n.sort(S||y1),r.length>1&&r.sort(_||Xm),o.length>1&&o.sort(_||Xm)}function v(){for(let S=e,_=s.length;S<_;S++){const M=s[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:v,sort:m}}function v1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Ym,s.set(r,[u])):o>=c.length?(u=new Ym,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function _1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new _t};break;case"SpotLight":n={position:new le,direction:new le,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=n,n}}}function S1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let E1=0;function M1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function w1(s){const e=new _1,n=S1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new le);const o=new le,c=new Vt,u=new Vt;function f(m){let v=0,S=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,E=0,b=0,y=0,x=0,U=0,P=0,R=0,$=0,B=0,k=0;m.sort(M1);for(let N=0,A=m.length;N<A;N++){const O=m[N],K=O.color,W=O.intensity,se=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)v+=K.r*W,S+=K.g*W,_+=K.b*W;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(O.sh.coefficients[Z],W);k++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ie=O.shadow,F=n.get(O);F.shadowIntensity=ie.intensity,F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,r.directionalShadow[M]=F,r.directionalShadowMap[M]=re,r.directionalShadowMatrix[M]=O.shadow.matrix,U++}r.directional[M]=Z,M++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(K).multiplyScalar(W),Z.distance=se,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,r.spot[b]=Z;const ie=O.shadow;if(O.map&&(r.spotLightMap[$]=O.map,$++,ie.updateMatrices(O),O.castShadow&&B++),r.spotLightMatrix[b]=ie.matrix,O.castShadow){const F=n.get(O);F.shadowIntensity=ie.intensity,F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,r.spotShadow[b]=F,r.spotShadowMap[b]=re,R++}b++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(K).multiplyScalar(W),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=Z,y++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const ie=O.shadow,F=n.get(O);F.shadowIntensity=ie.intensity,F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,F.shadowCameraNear=ie.camera.near,F.shadowCameraFar=ie.camera.far,r.pointShadow[E]=F,r.pointShadowMap[E]=re,r.pointShadowMatrix[E]=O.shadow.matrix,P++}r.point[E]=Z,E++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(W),Z.groundColor.copy(O.groundColor).multiplyScalar(W),r.hemi[x]=Z,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=_;const G=r.hash;(G.directionalLength!==M||G.pointLength!==E||G.spotLength!==b||G.rectAreaLength!==y||G.hemiLength!==x||G.numDirectionalShadows!==U||G.numPointShadows!==P||G.numSpotShadows!==R||G.numSpotMaps!==$||G.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+$-B,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=k,G.directionalLength=M,G.pointLength=E,G.spotLength=b,G.rectAreaLength=y,G.hemiLength=x,G.numDirectionalShadows=U,G.numPointShadows=P,G.numSpotShadows=R,G.numSpotMaps=$,G.numLightProbes=k,r.version=E1++)}function p(m,v){let S=0,_=0,M=0,E=0,b=0;const y=v.matrixWorldInverse;for(let x=0,U=m.length;x<U;x++){const P=m[x];if(P.isDirectionalLight){const R=r.directional[S];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(P.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(P.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const R=r.hemi[b];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),b++}}}return{setup:f,setupView:p,state:r}}function qm(s){const e=new w1(s),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function f(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function b1(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new qm(s),e.set(o,[f])):c>=u.length?(f=new qm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class T1 extends Js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A1 extends Js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N1(s,e,n){let r=new pf;const o=new Ct,c=new Ct,u=new qt,f=new T1({depthPacking:Mv}),p=new A1,m={},v=n.maxTextureSize,S={[Tr]:Un,[Un]:Tr,[bi]:bi},_=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:C1,fragmentShader:R1}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new jn;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ve(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sg;let x=this.type;this.render=function(B,k,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const N=s.getRenderTarget(),A=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),K=s.state;K.setBlending(wr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=x!==Wi&&this.type===Wi,se=x===Wi&&this.type!==Wi;for(let re=0,Z=B.length;re<Z;re++){const ie=B[re],F=ie.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const de=F.getFrameExtents();if(o.multiply(de),c.copy(F.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/de.x),o.x=c.x*de.x,F.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/de.y),o.y=c.y*de.y,F.mapSize.y=c.y)),F.map===null||W===!0||se===!0){const w=this.type!==Wi?{minFilter:mi,magFilter:mi}:{};F.map!==null&&F.map.dispose(),F.map=new ts(o.x,o.y,w),F.map.texture.name=ie.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const L=F.getViewportCount();for(let w=0;w<L;w++){const V=F.getViewport(w);u.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),K.viewport(u),F.updateMatrices(ie,w),r=F.getFrustum(),R(k,G,F.camera,ie,this.type)}F.isPointLightShadow!==!0&&this.type===Wi&&U(F,G),F.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(N,A,O)};function U(B,k){const G=e.update(b);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ts(o.x,o.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(k,null,G,_,b,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(k,null,G,M,b,null)}function P(B,k,G,N){let A=null;const O=G.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(O!==void 0)A=O;else if(A=G.isPointLight===!0?p:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const K=A.uuid,W=k.uuid;let se=m[K];se===void 0&&(se={},m[K]=se);let re=se[W];re===void 0&&(re=A.clone(),se[W]=re,k.addEventListener("dispose",$)),A=re}if(A.visible=k.visible,A.wireframe=k.wireframe,N===Wi?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:S[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const K=s.properties.get(A);K.light=G}return A}function R(B,k,G,N,A){if(B.visible===!1)return;if(B.layers.test(k.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&A===Wi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld);const W=e.update(B),se=B.material;if(Array.isArray(se)){const re=W.groups;for(let Z=0,ie=re.length;Z<ie;Z++){const F=re[Z],de=se[F.materialIndex];if(de&&de.visible){const L=P(B,de,N,A);B.onBeforeShadow(s,B,k,G,W,L,F),s.renderBufferDirect(G,null,W,L,B,F),B.onAfterShadow(s,B,k,G,W,L,F)}}}else if(se.visible){const re=P(B,se,N,A);B.onBeforeShadow(s,B,k,G,W,re,null),s.renderBufferDirect(G,null,W,re,B,null),B.onAfterShadow(s,B,k,G,W,re,null)}}const K=B.children;for(let W=0,se=K.length;W<se;W++)R(K[W],k,G,N,A)}function $(B){B.target.removeEventListener("dispose",$);for(const G in m){const N=m[G],A=B.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}const I1={[hd]:pd,[md]:yd,[gd]:vd,[Ws]:xd,[pd]:hd,[yd]:md,[vd]:gd,[xd]:Ws};function L1(s,e){function n(){let q=!1;const Pe=new qt;let ge=null;const ve=new qt(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!q&&(s.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){q=Fe},setClear:function(Fe,ze,ht,Ft,Qt){Qt===!0&&(Fe*=Ft,ze*=Ft,ht*=Ft),Pe.set(Fe,ze,ht,Ft),ve.equals(Pe)===!1&&(s.clearColor(Fe,ze,ht,Ft),ve.copy(Pe))},reset:function(){q=!1,ge=null,ve.set(-1,0,0,0)}}}function r(){let q=!1,Pe=!1,ge=null,ve=null,Fe=null;return{setReversed:function(ze){if(Pe!==ze){const ht=e.get("EXT_clip_control");Pe?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Fe;Fe=null,this.setClear(Ft)}Pe=ze},getReversed:function(){return Pe},setTest:function(ze){ze?te(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(ze){ge!==ze&&!q&&(s.depthMask(ze),ge=ze)},setFunc:function(ze){if(Pe&&(ze=I1[ze]),ve!==ze){switch(ze){case hd:s.depthFunc(s.NEVER);break;case pd:s.depthFunc(s.ALWAYS);break;case md:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case gd:s.depthFunc(s.EQUAL);break;case xd:s.depthFunc(s.GEQUAL);break;case yd:s.depthFunc(s.GREATER);break;case vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=ze}},setLocked:function(ze){q=ze},setClear:function(ze){Fe!==ze&&(Pe&&(ze=1-ze),s.clearDepth(ze),Fe=ze)},reset:function(){q=!1,ge=null,ve=null,Fe=null,Pe=!1}}}function o(){let q=!1,Pe=null,ge=null,ve=null,Fe=null,ze=null,ht=null,Ft=null,Qt=null;return{setTest:function(bt){q||(bt?te(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(bt){Pe!==bt&&!q&&(s.stencilMask(bt),Pe=bt)},setFunc:function(bt,bn,_n){(ge!==bt||ve!==bn||Fe!==_n)&&(s.stencilFunc(bt,bn,_n),ge=bt,ve=bn,Fe=_n)},setOp:function(bt,bn,_n){(ze!==bt||ht!==bn||Ft!==_n)&&(s.stencilOp(bt,bn,_n),ze=bt,ht=bn,Ft=_n)},setLocked:function(bt){q=bt},setClear:function(bt){Qt!==bt&&(s.clearStencil(bt),Qt=bt)},reset:function(){q=!1,Pe=null,ge=null,ve=null,Fe=null,ze=null,ht=null,Ft=null,Qt=null}}}const c=new n,u=new r,f=new o,p=new WeakMap,m=new WeakMap;let v={},S={},_=new WeakMap,M=[],E=null,b=!1,y=null,x=null,U=null,P=null,R=null,$=null,B=null,k=new _t(0,0,0),G=0,N=!1,A=null,O=null,K=null,W=null,se=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ie=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=ie>=1):F.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=ie>=2);let de=null,L={};const w=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),ce=new qt().fromArray(w),j=new qt().fromArray(V);function ee(q,Pe,ge,ve){const Fe=new Uint8Array(4),ze=s.createTexture();s.bindTexture(q,ze),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<ge;ht++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Pe+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return ze}const ue={};ue[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),te(s.DEPTH_TEST),u.setFunc(Ws),Ie(!1),Be(Qp),te(s.CULL_FACE),H(wr);function te(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function me(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function ye(q,Pe){return S[q]!==Pe?(s.bindFramebuffer(q,Pe),S[q]=Pe,q===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Pe),q===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function we(q,Pe){let ge=M,ve=!1;if(q){ge=_.get(Pe),ge===void 0&&(ge=[],_.set(Pe,ge));const Fe=q.textures;if(ge.length!==Fe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,ht=Fe.length;ze<ht;ze++)ge[ze]=s.COLOR_ATTACHMENT0+ze;ge.length=Fe.length,ve=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ge)}function De(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const Re={[Zr]:s.FUNC_ADD,[$y]:s.FUNC_SUBTRACT,[Zy]:s.FUNC_REVERSE_SUBTRACT};Re[Ky]=s.MIN,Re[Qy]=s.MAX;const Qe={[Jy]:s.ZERO,[ev]:s.ONE,[tv]:s.SRC_COLOR,[dd]:s.SRC_ALPHA,[ov]:s.SRC_ALPHA_SATURATE,[sv]:s.DST_COLOR,[iv]:s.DST_ALPHA,[nv]:s.ONE_MINUS_SRC_COLOR,[fd]:s.ONE_MINUS_SRC_ALPHA,[av]:s.ONE_MINUS_DST_COLOR,[rv]:s.ONE_MINUS_DST_ALPHA,[lv]:s.CONSTANT_COLOR,[cv]:s.ONE_MINUS_CONSTANT_COLOR,[uv]:s.CONSTANT_ALPHA,[dv]:s.ONE_MINUS_CONSTANT_ALPHA};function H(q,Pe,ge,ve,Fe,ze,ht,Ft,Qt,bt){if(q===wr){b===!0&&(me(s.BLEND),b=!1);return}if(b===!1&&(te(s.BLEND),b=!0),q!==qy){if(q!==y||bt!==N){if((x!==Zr||R!==Zr)&&(s.blendEquation(s.FUNC_ADD),x=Zr,R=Zr),bt)switch(q){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.ONE,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,P=null,$=null,B=null,k.set(0,0,0),G=0,y=q,N=bt}return}Fe=Fe||Pe,ze=ze||ge,ht=ht||ve,(Pe!==x||Fe!==R)&&(s.blendEquationSeparate(Re[Pe],Re[Fe]),x=Pe,R=Fe),(ge!==U||ve!==P||ze!==$||ht!==B)&&(s.blendFuncSeparate(Qe[ge],Qe[ve],Qe[ze],Qe[ht]),U=ge,P=ve,$=ze,B=ht),(Ft.equals(k)===!1||Qt!==G)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Qt),k.copy(Ft),G=Qt),y=q,N=!1}function gt(q,Pe){q.side===bi?me(s.CULL_FACE):te(s.CULL_FACE);let ge=q.side===Un;Pe&&(ge=!ge),Ie(ge),q.blending===Gs&&q.transparent===!1?H(wr):H(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const ve=q.stencilWrite;f.setTest(ve),ve&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),rt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(q){A!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),A=q)}function Be(q){q!==Xy?(te(s.CULL_FACE),q!==O&&(q===Qp?s.cullFace(s.BACK):q===Yy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),O=q}function Oe(q){q!==K&&(Z&&s.lineWidth(q),K=q)}function rt(q,Pe,ge){q?(te(s.POLYGON_OFFSET_FILL),(W!==Pe||se!==ge)&&(s.polygonOffset(Pe,ge),W=Pe,se=ge)):me(s.POLYGON_OFFSET_FILL)}function ke(q){q?te(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function D(q){q===void 0&&(q=s.TEXTURE0+re-1),de!==q&&(s.activeTexture(q),de=q)}function C(q,Pe,ge){ge===void 0&&(de===null?ge=s.TEXTURE0+re-1:ge=de);let ve=L[ge];ve===void 0&&(ve={type:void 0,texture:void 0},L[ge]=ve),(ve.type!==q||ve.texture!==Pe)&&(de!==ge&&(s.activeTexture(ge),de=ge),s.bindTexture(q,Pe||ue[q]),ve.type=q,ve.texture=Pe)}function oe(){const q=L[de];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function He(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(q){ce.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ce.copy(q))}function Xe(q){j.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),j.copy(q))}function St(q,Pe){let ge=m.get(Pe);ge===void 0&&(ge=new WeakMap,m.set(Pe,ge));let ve=ge.get(q);ve===void 0&&(ve=s.getUniformBlockIndex(Pe,q.name),ge.set(q,ve))}function ft(q,Pe){const ve=m.get(Pe).get(q);p.get(Pe)!==ve&&(s.uniformBlockBinding(Pe,ve,q.__bindingPointIndex),p.set(Pe,ve))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},de=null,L={},S={},_=new WeakMap,M=[],E=null,b=!1,y=null,x=null,U=null,P=null,R=null,$=null,B=null,k=new _t(0,0,0),G=0,N=!1,A=null,O=null,K=null,W=null,se=null,ce.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:te,disable:me,bindFramebuffer:ye,drawBuffers:we,useProgram:De,setBlending:H,setMaterial:gt,setFlipSided:Ie,setCullFace:Be,setLineWidth:Oe,setPolygonOffset:rt,setScissorTest:ke,activeTexture:D,bindTexture:C,unbindTexture:oe,compressedTexImage2D:_e,compressedTexImage3D:Se,texImage2D:je,texImage3D:it,updateUBOMapping:St,uniformBlockBinding:ft,texStorage2D:pt,texStorage3D:be,texSubImage2D:xe,texSubImage3D:qe,compressedTexSubImage2D:Le,compressedTexSubImage3D:He,scissor:ot,viewport:Xe,reset:Pt}}function $m(s,e,n,r){const o=P1(r);switch(n){case Ag:return s*e;case Rg:return s*e;case Ng:return s*e*2;case Ig:return s*e/o.components*o.byteLength;case lf:return s*e/o.components*o.byteLength;case Lg:return s*e*2/o.components*o.byteLength;case cf:return s*e*2/o.components*o.byteLength;case Cg:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case uf:return s*e*4/o.components*o.byteLength;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ad:return Math.max(s,16)*Math.max(e,8)/4;case wd:case Td:return Math.max(s,8)*Math.max(e,8)/2;case Cd:case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case Wd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pg:case Yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P1(s){switch(s){case $i:case wg:return{byteLength:1,components:1};case ja:case bg:case Xa:return{byteLength:2,components:1};case af:case of:return{byteLength:2,components:4};case es:case sf:case Xi:return{byteLength:4,components:1};case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function D1(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,v=new WeakMap;let S;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,C){return M?new OffscreenCanvas(D,C):Dl("canvas")}function b(D,C,oe){let _e=1;const Se=ke(D);if((Se.width>oe||Se.height>oe)&&(_e=oe/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const xe=Math.floor(_e*Se.width),qe=Math.floor(_e*Se.height);S===void 0&&(S=E(xe,qe));const Le=C?E(xe,qe):S;return Le.width=xe,Le.height=qe,Le.getContext("2d").drawImage(D,0,0,xe,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+xe+"x"+qe+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){s.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,C,oe,_e,Se=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let xe=C;if(C===s.RED&&(oe===s.FLOAT&&(xe=s.R32F),oe===s.HALF_FLOAT&&(xe=s.R16F),oe===s.UNSIGNED_BYTE&&(xe=s.R8)),C===s.RED_INTEGER&&(oe===s.UNSIGNED_BYTE&&(xe=s.R8UI),oe===s.UNSIGNED_SHORT&&(xe=s.R16UI),oe===s.UNSIGNED_INT&&(xe=s.R32UI),oe===s.BYTE&&(xe=s.R8I),oe===s.SHORT&&(xe=s.R16I),oe===s.INT&&(xe=s.R32I)),C===s.RG&&(oe===s.FLOAT&&(xe=s.RG32F),oe===s.HALF_FLOAT&&(xe=s.RG16F),oe===s.UNSIGNED_BYTE&&(xe=s.RG8)),C===s.RG_INTEGER&&(oe===s.UNSIGNED_BYTE&&(xe=s.RG8UI),oe===s.UNSIGNED_SHORT&&(xe=s.RG16UI),oe===s.UNSIGNED_INT&&(xe=s.RG32UI),oe===s.BYTE&&(xe=s.RG8I),oe===s.SHORT&&(xe=s.RG16I),oe===s.INT&&(xe=s.RG32I)),C===s.RGB_INTEGER&&(oe===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),oe===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),oe===s.UNSIGNED_INT&&(xe=s.RGB32UI),oe===s.BYTE&&(xe=s.RGB8I),oe===s.SHORT&&(xe=s.RGB16I),oe===s.INT&&(xe=s.RGB32I)),C===s.RGBA_INTEGER&&(oe===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),oe===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),oe===s.UNSIGNED_INT&&(xe=s.RGBA32UI),oe===s.BYTE&&(xe=s.RGBA8I),oe===s.SHORT&&(xe=s.RGBA16I),oe===s.INT&&(xe=s.RGBA32I)),C===s.RGB&&oe===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),C===s.RGBA){const qe=Se?Bl:At.getTransfer(_e);oe===s.FLOAT&&(xe=s.RGBA32F),oe===s.HALF_FLOAT&&(xe=s.RGBA16F),oe===s.UNSIGNED_BYTE&&(xe=qe===Ot?s.SRGB8_ALPHA8:s.RGBA8),oe===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),oe===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function R(D,C){let oe;return D?C===null||C===es||C===qs?oe=s.DEPTH24_STENCIL8:C===Xi?oe=s.DEPTH32F_STENCIL8:C===ja&&(oe=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===es||C===qs?oe=s.DEPTH_COMPONENT24:C===Xi?oe=s.DEPTH_COMPONENT32F:C===ja&&(oe=s.DEPTH_COMPONENT16),oe}function $(D,C){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==mi&&D.minFilter!==Ti?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function B(D){const C=D.target;C.removeEventListener("dispose",B),G(C),C.isVideoTexture&&v.delete(C)}function k(D){const C=D.target;C.removeEventListener("dispose",k),A(C)}function G(D){const C=r.get(D);if(C.__webglInit===void 0)return;const oe=D.source,_e=_.get(oe);if(_e){const Se=_e[C.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&N(D),Object.keys(_e).length===0&&_.delete(oe)}r.remove(D)}function N(D){const C=r.get(D);s.deleteTexture(C.__webglTexture);const oe=D.source,_e=_.get(oe);delete _e[C.__cacheKey],u.memory.textures--}function A(D){const C=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(C.__webglFramebuffer[_e]))for(let Se=0;Se<C.__webglFramebuffer[_e].length;Se++)s.deleteFramebuffer(C.__webglFramebuffer[_e][Se]);else s.deleteFramebuffer(C.__webglFramebuffer[_e]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[_e])}else{if(Array.isArray(C.__webglFramebuffer))for(let _e=0;_e<C.__webglFramebuffer.length;_e++)s.deleteFramebuffer(C.__webglFramebuffer[_e]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let _e=0;_e<C.__webglColorRenderbuffer.length;_e++)C.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[_e]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const oe=D.textures;for(let _e=0,Se=oe.length;_e<Se;_e++){const xe=r.get(oe[_e]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(oe[_e])}r.remove(D)}let O=0;function K(){O=0}function W(){const D=O;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),O+=1,D}function se(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function re(D,C){const oe=r.get(D);if(D.isVideoTexture&&Oe(D),D.isRenderTargetTexture===!1&&D.version>0&&oe.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(oe,D,C);return}}n.bindTexture(s.TEXTURE_2D,oe.__webglTexture,s.TEXTURE0+C)}function Z(D,C){const oe=r.get(D);if(D.version>0&&oe.__version!==D.version){j(oe,D,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,oe.__webglTexture,s.TEXTURE0+C)}function ie(D,C){const oe=r.get(D);if(D.version>0&&oe.__version!==D.version){j(oe,D,C);return}n.bindTexture(s.TEXTURE_3D,oe.__webglTexture,s.TEXTURE0+C)}function F(D,C){const oe=r.get(D);if(D.version>0&&oe.__version!==D.version){ee(oe,D,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture,s.TEXTURE0+C)}const de={[Ed]:s.REPEAT,[Qr]:s.CLAMP_TO_EDGE,[Md]:s.MIRRORED_REPEAT},L={[mi]:s.NEAREST,[Sv]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[Nu]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},w={[bv]:s.NEVER,[Iv]:s.ALWAYS,[Tv]:s.LESS,[Ug]:s.LEQUAL,[Av]:s.EQUAL,[Nv]:s.GEQUAL,[Cv]:s.GREATER,[Rv]:s.NOTEQUAL};function V(D,C){if(C.type===Xi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ti||C.magFilter===Nu||C.magFilter===rl||C.magFilter===Jr||C.minFilter===Ti||C.minFilter===Nu||C.minFilter===rl||C.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,de[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,de[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,de[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,L[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,L[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,w[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===mi||C.minFilter!==rl&&C.minFilter!==Jr||C.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function ce(D,C){let oe=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",B));const _e=C.source;let Se=_.get(_e);Se===void 0&&(Se={},_.set(_e,Se));const xe=se(C);if(xe!==D.__cacheKey){Se[xe]===void 0&&(Se[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),Se[xe].usedTimes++;const qe=Se[D.__cacheKey];qe!==void 0&&(Se[D.__cacheKey].usedTimes--,qe.usedTimes===0&&N(C)),D.__cacheKey=xe,D.__webglTexture=Se[xe].texture}return oe}function j(D,C,oe){let _e=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(_e=s.TEXTURE_3D);const Se=ce(D,C),xe=C.source;n.bindTexture(_e,D.__webglTexture,s.TEXTURE0+oe);const qe=r.get(xe);if(xe.version!==qe.__version||Se===!0){n.activeTexture(s.TEXTURE0+oe);const Le=At.getPrimaries(At.workingColorSpace),He=C.colorSpace===Mr?null:At.getPrimaries(C.colorSpace),pt=C.colorSpace===Mr||Le===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let be=b(C.image,!1,o.maxTextureSize);be=rt(C,be);const je=c.convert(C.format,C.colorSpace),it=c.convert(C.type);let ot=P(C.internalFormat,je,it,C.colorSpace,C.isVideoTexture);V(_e,C);let Xe;const St=C.mipmaps,ft=C.isVideoTexture!==!0,Pt=qe.__version===void 0||Se===!0,q=xe.dataReady,Pe=$(C,be);if(C.isDepthTexture)ot=R(C.format===$s,C.type),Pt&&(ft?n.texStorage2D(s.TEXTURE_2D,1,ot,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,ot,be.width,be.height,0,je,it,null));else if(C.isDataTexture)if(St.length>0){ft&&Pt&&n.texStorage2D(s.TEXTURE_2D,Pe,ot,St[0].width,St[0].height);for(let ge=0,ve=St.length;ge<ve;ge++)Xe=St[ge],ft?q&&n.texSubImage2D(s.TEXTURE_2D,ge,0,0,Xe.width,Xe.height,je,it,Xe.data):n.texImage2D(s.TEXTURE_2D,ge,ot,Xe.width,Xe.height,0,je,it,Xe.data);C.generateMipmaps=!1}else ft?(Pt&&n.texStorage2D(s.TEXTURE_2D,Pe,ot,be.width,be.height),q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,je,it,be.data)):n.texImage2D(s.TEXTURE_2D,0,ot,be.width,be.height,0,je,it,be.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Pt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ot,St[0].width,St[0].height,be.depth);for(let ge=0,ve=St.length;ge<ve;ge++)if(Xe=St[ge],C.format!==pi)if(je!==null)if(ft){if(q)if(C.layerUpdates.size>0){const Fe=$m(Xe.width,Xe.height,C.format,C.type);for(const ze of C.layerUpdates){const ht=Xe.data.subarray(ze*Fe/Xe.data.BYTES_PER_ELEMENT,(ze+1)*Fe/Xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,ze,Xe.width,Xe.height,1,je,ht)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Xe.width,Xe.height,be.depth,je,Xe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,ot,Xe.width,Xe.height,be.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Xe.width,Xe.height,be.depth,je,it,Xe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ge,ot,Xe.width,Xe.height,be.depth,0,je,it,Xe.data)}else{ft&&Pt&&n.texStorage2D(s.TEXTURE_2D,Pe,ot,St[0].width,St[0].height);for(let ge=0,ve=St.length;ge<ve;ge++)Xe=St[ge],C.format!==pi?je!==null?ft?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Xe.width,Xe.height,je,Xe.data):n.compressedTexImage2D(s.TEXTURE_2D,ge,ot,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?q&&n.texSubImage2D(s.TEXTURE_2D,ge,0,0,Xe.width,Xe.height,je,it,Xe.data):n.texImage2D(s.TEXTURE_2D,ge,ot,Xe.width,Xe.height,0,je,it,Xe.data)}else if(C.isDataArrayTexture)if(ft){if(Pt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ot,be.width,be.height,be.depth),q)if(C.layerUpdates.size>0){const ge=$m(be.width,be.height,C.format,C.type);for(const ve of C.layerUpdates){const Fe=be.data.subarray(ve*ge/be.data.BYTES_PER_ELEMENT,(ve+1)*ge/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,je,it,Fe)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,je,it,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,ot,be.width,be.height,be.depth,0,je,it,be.data);else if(C.isData3DTexture)ft?(Pt&&n.texStorage3D(s.TEXTURE_3D,Pe,ot,be.width,be.height,be.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,je,it,be.data)):n.texImage3D(s.TEXTURE_3D,0,ot,be.width,be.height,be.depth,0,je,it,be.data);else if(C.isFramebufferTexture){if(Pt)if(ft)n.texStorage2D(s.TEXTURE_2D,Pe,ot,be.width,be.height);else{let ge=be.width,ve=be.height;for(let Fe=0;Fe<Pe;Fe++)n.texImage2D(s.TEXTURE_2D,Fe,ot,ge,ve,0,je,it,null),ge>>=1,ve>>=1}}else if(St.length>0){if(ft&&Pt){const ge=ke(St[0]);n.texStorage2D(s.TEXTURE_2D,Pe,ot,ge.width,ge.height)}for(let ge=0,ve=St.length;ge<ve;ge++)Xe=St[ge],ft?q&&n.texSubImage2D(s.TEXTURE_2D,ge,0,0,je,it,Xe):n.texImage2D(s.TEXTURE_2D,ge,ot,je,it,Xe);C.generateMipmaps=!1}else if(ft){if(Pt){const ge=ke(be);n.texStorage2D(s.TEXTURE_2D,Pe,ot,ge.width,ge.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,je,it,be)}else n.texImage2D(s.TEXTURE_2D,0,ot,je,it,be);y(C)&&x(_e),qe.__version=xe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ee(D,C,oe){if(C.image.length!==6)return;const _e=ce(D,C),Se=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+oe);const xe=r.get(Se);if(Se.version!==xe.__version||_e===!0){n.activeTexture(s.TEXTURE0+oe);const qe=At.getPrimaries(At.workingColorSpace),Le=C.colorSpace===Mr?null:At.getPrimaries(C.colorSpace),He=C.colorSpace===Mr||qe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const pt=C.isCompressedTexture||C.image[0].isCompressedTexture,be=C.image[0]&&C.image[0].isDataTexture,je=[];for(let ve=0;ve<6;ve++)!pt&&!be?je[ve]=b(C.image[ve],!0,o.maxCubemapSize):je[ve]=be?C.image[ve].image:C.image[ve],je[ve]=rt(C,je[ve]);const it=je[0],ot=c.convert(C.format,C.colorSpace),Xe=c.convert(C.type),St=P(C.internalFormat,ot,Xe,C.colorSpace),ft=C.isVideoTexture!==!0,Pt=xe.__version===void 0||_e===!0,q=Se.dataReady;let Pe=$(C,it);V(s.TEXTURE_CUBE_MAP,C);let ge;if(pt){ft&&Pt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,St,it.width,it.height);for(let ve=0;ve<6;ve++){ge=je[ve].mipmaps;for(let Fe=0;Fe<ge.length;Fe++){const ze=ge[Fe];C.format!==pi?ot!==null?ft?q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,ze.width,ze.height,ot,ze.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,St,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,ze.width,ze.height,ot,Xe,ze.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,St,ze.width,ze.height,0,ot,Xe,ze.data)}}}else{if(ge=C.mipmaps,ft&&Pt){ge.length>0&&Pe++;const ve=ke(je[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,St,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){ft?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,je[ve].width,je[ve].height,ot,Xe,je[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,St,je[ve].width,je[ve].height,0,ot,Xe,je[ve].data);for(let Fe=0;Fe<ge.length;Fe++){const ht=ge[Fe].image[ve].image;ft?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,ht.width,ht.height,ot,Xe,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,St,ht.width,ht.height,0,ot,Xe,ht.data)}}else{ft?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ot,Xe,je[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,St,ot,Xe,je[ve]);for(let Fe=0;Fe<ge.length;Fe++){const ze=ge[Fe];ft?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,ot,Xe,ze.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,St,ot,Xe,ze.image[ve])}}}y(C)&&x(s.TEXTURE_CUBE_MAP),xe.__version=Se.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ue(D,C,oe,_e,Se,xe){const qe=c.convert(oe.format,oe.colorSpace),Le=c.convert(oe.type),He=P(oe.internalFormat,qe,Le,oe.colorSpace),pt=r.get(C),be=r.get(oe);if(be.__renderTarget=C,!pt.__hasExternalTextures){const je=Math.max(1,C.width>>xe),it=Math.max(1,C.height>>xe);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?n.texImage3D(Se,xe,He,je,it,C.depth,0,qe,Le,null):n.texImage2D(Se,xe,He,je,it,0,qe,Le,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),Be(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Se,be.__webglTexture,0,Ie(C)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Se,be.__webglTexture,xe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function te(D,C,oe){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const _e=C.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,xe=R(C.stencilBuffer,Se),qe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Ie(C);Be(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,xe,C.width,C.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,xe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,xe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,D)}else{const _e=C.textures;for(let Se=0;Se<_e.length;Se++){const xe=_e[Se],qe=c.convert(xe.format,xe.colorSpace),Le=c.convert(xe.type),He=P(xe.internalFormat,qe,Le,xe.colorSpace),pt=Ie(C);oe&&Be(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,He,C.width,C.height):Be(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,He,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,He,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(C.depthTexture);_e.__renderTarget=C,(!_e.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),re(C.depthTexture,0);const Se=_e.__webglTexture,xe=Ie(C);if(C.depthTexture.format===Vs)Be(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(C.depthTexture.format===$s)Be(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function ye(D){const C=r.get(D),oe=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const _e=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),_e){const Se=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),C.__depthDisposeCallback=Se}C.__boundDepthTexture=_e}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");me(C.__webglFramebuffer,D)}else if(oe){C.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[_e]),C.__webglDepthbuffer[_e]===void 0)C.__webglDepthbuffer[_e]=s.createRenderbuffer(),te(C.__webglDepthbuffer[_e],D,!1);else{const Se=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=C.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,xe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),te(C.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Se)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function we(D,C,oe){const _e=r.get(D);C!==void 0&&ue(_e.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),oe!==void 0&&ye(D)}function De(D){const C=D.texture,oe=r.get(D),_e=r.get(C);D.addEventListener("dispose",k);const Se=D.textures,xe=D.isWebGLCubeRenderTarget===!0,qe=Se.length>1;if(qe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=C.version,u.memory.textures++),xe){oe.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0){oe.__webglFramebuffer[Le]=[];for(let He=0;He<C.mipmaps.length;He++)oe.__webglFramebuffer[Le][He]=s.createFramebuffer()}else oe.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Le=0;Le<C.mipmaps.length;Le++)oe.__webglFramebuffer[Le]=s.createFramebuffer()}else oe.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Le=0,He=Se.length;Le<He;Le++){const pt=r.get(Se[Le]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&Be(D)===!1){oe.__webglMultisampledFramebuffer=s.createFramebuffer(),oe.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Le=0;Le<Se.length;Le++){const He=Se[Le];oe.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,oe.__webglColorRenderbuffer[Le]);const pt=c.convert(He.format,He.colorSpace),be=c.convert(He.type),je=P(He.internalFormat,pt,be,He.colorSpace,D.isXRRenderTarget===!0),it=Ie(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,je,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(oe.__webglDepthRenderbuffer=s.createRenderbuffer(),te(oe.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){n.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),V(s.TEXTURE_CUBE_MAP,C);for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0)for(let He=0;He<C.mipmaps.length;He++)ue(oe.__webglFramebuffer[Le][He],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He);else ue(oe.__webglFramebuffer[Le],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(C)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Le=0,He=Se.length;Le<He;Le++){const pt=Se[Le],be=r.get(pt);n.bindTexture(s.TEXTURE_2D,be.__webglTexture),V(s.TEXTURE_2D,pt),ue(oe.__webglFramebuffer,D,pt,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),y(pt)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Le=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Le,_e.__webglTexture),V(Le,C),C.mipmaps&&C.mipmaps.length>0)for(let He=0;He<C.mipmaps.length;He++)ue(oe.__webglFramebuffer[He],D,C,s.COLOR_ATTACHMENT0,Le,He);else ue(oe.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,Le,0);y(C)&&x(Le),n.unbindTexture()}D.depthBuffer&&ye(D)}function Re(D){const C=D.textures;for(let oe=0,_e=C.length;oe<_e;oe++){const Se=C[oe];if(y(Se)){const xe=U(D),qe=r.get(Se).__webglTexture;n.bindTexture(xe,qe),x(xe),n.unbindTexture()}}}const Qe=[],H=[];function gt(D){if(D.samples>0){if(Be(D)===!1){const C=D.textures,oe=D.width,_e=D.height;let Se=s.COLOR_BUFFER_BIT;const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(D),Le=C.length>1;if(Le)for(let He=0;He<C.length;He++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let He=0;He<C.length;He++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[He]);const pt=r.get(C[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,oe,_e,0,0,oe,_e,Se,s.NEAREST),p===!0&&(Qe.length=0,H.length=0,Qe.push(s.COLOR_ATTACHMENT0+He),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Qe.push(xe),H.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let He=0;He<C.length;He++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,qe.__webglColorRenderbuffer[He]);const pt=r.get(C[He]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ie(D){return Math.min(o.maxSamples,D.samples)}function Be(D){const C=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Oe(D){const C=u.render.frame;v.get(D)!==C&&(v.set(D,C),D.update())}function rt(D,C){const oe=D.colorSpace,_e=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||oe!==Ks&&oe!==Mr&&(At.getTransfer(oe)===Ot?(_e!==pi||Se!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),C}function ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=K,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=ie,this.setTextureCube=F,this.rebindTextures=we,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Be}function U1(s,e){function n(r,o=Mr){let c;const u=At.getTransfer(o);if(r===$i)return s.UNSIGNED_BYTE;if(r===af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===wg)return s.BYTE;if(r===bg)return s.SHORT;if(r===ja)return s.UNSIGNED_SHORT;if(r===sf)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Xa)return s.HALF_FLOAT;if(r===Ag)return s.ALPHA;if(r===Cg)return s.RGB;if(r===pi)return s.RGBA;if(r===Rg)return s.LUMINANCE;if(r===Ng)return s.LUMINANCE_ALPHA;if(r===Vs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===Ig)return s.RED;if(r===lf)return s.RED_INTEGER;if(r===Lg)return s.RG;if(r===cf)return s.RG_INTEGER;if(r===uf)return s.RGBA_INTEGER;if(r===Al||r===Cl||r===Rl||r===Nl)if(u===Ot)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Al)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Al)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===bd||r===Td||r===Ad)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cd||r===Rd||r===Nd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Cd||r===Rd)return u===Ot?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Nd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Id||r===Ld||r===Pd||r===Dd||r===Ud||r===Od||r===zd||r===kd||r===Fd||r===Bd||r===Hd||r===Gd||r===Vd||r===jd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Id)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Od)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jd)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===Wd||r===Xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Il)return u===Ot?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pg||r===Yd||r===qd||r===$d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Il)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class O1 extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z1={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,r),x=this._getHandJoint(m,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],_=v.position.distanceTo(S.position),M=.02,E=.005;m.inputState.pinching&&_>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(z1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new yt;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new On,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ar({vertexShader:k1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ve(new Gl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H1 extends Qs{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",p=1,m=null,v=null,S=null,_=null,M=null,E=null;const b=new B1,y=n.getContextAttributes();let x=null,U=null;const P=[],R=[],$=new Ct;let B=null;const k=new Vn;k.viewport=new qt;const G=new Vn;G.viewport=new qt;const N=[k,G],A=new O1;let O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=P[j];return ee===void 0&&(ee=new sd,P[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=P[j];return ee===void 0&&(ee=new sd,P[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=P[j];return ee===void 0&&(ee=new sd,P[j]=ee),ee.getHandSpace()};function W(j){const ee=R.indexOf(j.inputSource);if(ee===-1)return;const ue=P[ee];ue!==void 0&&(ue.update(j.inputSource,j.frame,m||u),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function se(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",re);for(let j=0;j<P.length;j++){const ee=R[j];ee!==null&&(R[j]=null,P[j].disconnect(ee))}O=null,K=null,b.reset(),e.setRenderTarget(x),M=null,_=null,S=null,o=null,U=null,ce.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",se),o.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize($),o.renderState.layers===void 0){const ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ee),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new ts(M.framebufferWidth,M.framebufferHeight,{format:pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,ue=null,te=null;y.depth&&(te=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=y.stencil?$s:Vs,ue=y.stencil?qs:es);const me={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:c};S=new XRWebGLBinding(o,n),_=S.createProjectionLayer(me),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new ts(_.textureWidth,_.textureHeight,{format:pi,type:$i,depthTexture:new Yg(_.textureWidth,_.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(f),ce.setContext(o),ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function re(j){for(let ee=0;ee<j.removed.length;ee++){const ue=j.removed[ee],te=R.indexOf(ue);te>=0&&(R[te]=null,P[te].disconnect(ue))}for(let ee=0;ee<j.added.length;ee++){const ue=j.added[ee];let te=R.indexOf(ue);if(te===-1){for(let ye=0;ye<P.length;ye++)if(ye>=R.length){R.push(ue),te=ye;break}else if(R[ye]===null){R[ye]=ue,te=ye;break}if(te===-1)break}const me=P[te];me&&me.connect(ue)}}const Z=new le,ie=new le;function F(j,ee,ue){Z.setFromMatrixPosition(ee.matrixWorld),ie.setFromMatrixPosition(ue.matrixWorld);const te=Z.distanceTo(ie),me=ee.projectionMatrix.elements,ye=ue.projectionMatrix.elements,we=me[14]/(me[10]-1),De=me[14]/(me[10]+1),Re=(me[9]+1)/me[5],Qe=(me[9]-1)/me[5],H=(me[8]-1)/me[0],gt=(ye[8]+1)/ye[0],Ie=we*H,Be=we*gt,Oe=te/(-H+gt),rt=Oe*-H;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(rt),j.translateZ(Oe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),me[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ke=we+Oe,D=De+Oe,C=Ie-rt,oe=Be+(te-rt),_e=Re*De/D*ke,Se=Qe*De/D*ke;j.projectionMatrix.makePerspective(C,oe,_e,Se,ke,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let ee=j.near,ue=j.far;b.texture!==null&&(b.depthNear>0&&(ee=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),A.near=G.near=k.near=ee,A.far=G.far=k.far=ue,(O!==A.near||K!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,K=A.far),k.layers.mask=j.layers.mask|2,G.layers.mask=j.layers.mask|4,A.layers.mask=k.layers.mask|G.layers.mask;const te=j.parent,me=A.cameras;de(A,te);for(let ye=0;ye<me.length;ye++)de(me[ye],te);me.length===2?F(A,k,G):A.projectionMatrix.copy(k.projectionMatrix),L(j,A,te)};function L(j,ee,ue){ue===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(j){p=j,_!==null&&(_.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)};let w=null;function V(j,ee){if(v=ee.getViewerPose(m||u),E=ee,v!==null){const ue=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let te=!1;ue.length!==A.cameras.length&&(A.cameras.length=0,te=!0);for(let ye=0;ye<ue.length;ye++){const we=ue[ye];let De=null;if(M!==null)De=M.getViewport(we);else{const Qe=S.getViewSubImage(_,we);De=Qe.viewport,ye===0&&(e.setRenderTargetTextures(U,Qe.colorTexture,_.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(U))}let Re=N[ye];Re===void 0&&(Re=new Vn,Re.layers.enable(ye),Re.viewport=new qt,N[ye]=Re),Re.matrix.fromArray(we.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(we.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(De.x,De.y,De.width,De.height),ye===0&&(A.matrix.copy(Re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),te===!0&&A.cameras.push(Re)}const me=o.enabledFeatures;if(me&&me.includes("depth-sensing")){const ye=S.getDepthInformation(ue[0]);ye&&ye.isValid&&ye.texture&&b.init(e,ye,o.renderState)}}for(let ue=0;ue<P.length;ue++){const te=R[ue],me=P[ue];te!==null&&me!==void 0&&me.update(te,ee,m||u)}w&&w(j,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),E=null}const ce=new Wg;ce.setAnimationLoop(V),this.setAnimationLoop=function(j){w=j},this.dispose=function(){}}}const Yr=new Ci,G1=new Vt;function V1(s,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Gg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,U,P,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&M(y,x,R)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),b(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,U,P):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Un&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Un&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),P=U.envMap,R=U.envMapRotation;P&&(y.envMap.value=P,Yr.copy(R),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Yr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,U,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=P*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function j1(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,P){const R=P.program;r.uniformBlockBinding(U,R)}function m(U,P){let R=o[U.id];R===void 0&&(E(U),R=v(U),o[U.id]=R,U.addEventListener("dispose",y));const $=P.program;r.updateUBOMapping(U,$);const B=e.render.frame;c[U.id]!==B&&(_(U),c[U.id]=B)}function v(U){const P=S();U.__bindingPointIndex=P;const R=s.createBuffer(),$=U.__size,B=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,$,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function S(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const P=o[U.id],R=U.uniforms,$=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let B=0,k=R.length;B<k;B++){const G=Array.isArray(R[B])?R[B]:[R[B]];for(let N=0,A=G.length;N<A;N++){const O=G[N];if(M(O,B,N,$)===!0){const K=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let se=0;for(let re=0;re<W.length;re++){const Z=W[re],ie=b(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,K+se,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,se),se+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,P,R,$){const B=U.value,k=P+"_"+R;if($[k]===void 0)return typeof B=="number"||typeof B=="boolean"?$[k]=B:$[k]=B.clone(),!0;{const G=$[k];if(typeof B=="number"||typeof B=="boolean"){if(G!==B)return $[k]=B,!0}else if(G.equals(B)===!1)return G.copy(B),!0}return!1}function E(U){const P=U.uniforms;let R=0;const $=16;for(let k=0,G=P.length;k<G;k++){const N=Array.isArray(P[k])?P[k]:[P[k]];for(let A=0,O=N.length;A<O;A++){const K=N[A],W=Array.isArray(K.value)?K.value:[K.value];for(let se=0,re=W.length;se<re;se++){const Z=W[se],ie=b(Z),F=R%$,de=F%ie.boundary,L=F+de;R+=de,L!==0&&$-L<ie.storage&&(R+=$-L),K.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=R,R+=ie.storage}}}const B=R%$;return B>0&&(R+=$-B),U.__size=R,U.__cache={},this}function b(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function y(U){const P=U.target;P.removeEventListener("dispose",y);const R=u.indexOf(P.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function x(){for(const U in o)s.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:p,update:m,dispose:x}}class Qg{constructor(e={}){const{canvas:n=Pv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),b=new Int32Array(4);let y=null,x=null;const U=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=br,this.toneMappingExposure=1;const R=this;let $=!1,B=0,k=0,G=null,N=-1,A=null;const O=new qt,K=new qt;let W=null;const se=new _t(0);let re=0,Z=n.width,ie=n.height,F=1,de=null,L=null;const w=new qt(0,0,Z,ie),V=new qt(0,0,Z,ie);let ce=!1;const j=new pf;let ee=!1,ue=!1;const te=new Vt,me=new Vt,ye=new le,we=new qt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Qe(){return G===null?F:1}let H=r;function gt(I,Q){return n.getContext(I,Q)}try{const I={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",ze,!1),H===null){const Q="webgl2";if(H=gt(Q,I),H===null)throw gt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ie,Be,Oe,rt,ke,D,C,oe,_e,Se,xe,qe,Le,He,pt,be,je,it,ot,Xe,St,ft,Pt,q;function Pe(){Ie=new ZE(H),Ie.init(),ft=new U1(H,Ie),Be=new jE(H,Ie,e,ft),Oe=new L1(H,Ie),Be.reverseDepthBuffer&&_&&Oe.buffers.depth.setReversed(!0),rt=new JE(H),ke=new x1,D=new D1(H,Ie,Oe,ke,Be,ft,rt),C=new XE(R),oe=new $E(R),_e=new a_(H),Pt=new GE(H,_e),Se=new KE(H,_e,rt,Pt),xe=new tM(H,Se,_e,rt),ot=new eM(H,Be,D),be=new WE(ke),qe=new g1(R,C,oe,Ie,Be,Pt,be),Le=new V1(R,ke),He=new v1,pt=new b1(Ie),it=new HE(R,C,oe,Oe,xe,M,p),je=new N1(R,xe,Be),q=new j1(H,rt,Be,Oe),Xe=new VE(H,Ie,rt),St=new QE(H,Ie,rt),rt.programs=qe.programs,R.capabilities=Be,R.extensions=Ie,R.properties=ke,R.renderLists=He,R.shadowMap=je,R.state=Oe,R.info=rt}Pe();const ge=new H1(R,H);this.xr=ge,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const I=Ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(I){I!==void 0&&(F=I,this.setSize(Z,ie,!1))},this.getSize=function(I){return I.set(Z,ie)},this.setSize=function(I,Q,he=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=I,ie=Q,n.width=Math.floor(I*F),n.height=Math.floor(Q*F),he===!0&&(n.style.width=I+"px",n.style.height=Q+"px"),this.setViewport(0,0,I,Q)},this.getDrawingBufferSize=function(I){return I.set(Z*F,ie*F).floor()},this.setDrawingBufferSize=function(I,Q,he){Z=I,ie=Q,F=he,n.width=Math.floor(I*he),n.height=Math.floor(Q*he),this.setViewport(0,0,I,Q)},this.getCurrentViewport=function(I){return I.copy(O)},this.getViewport=function(I){return I.copy(w)},this.setViewport=function(I,Q,he,pe){I.isVector4?w.set(I.x,I.y,I.z,I.w):w.set(I,Q,he,pe),Oe.viewport(O.copy(w).multiplyScalar(F).round())},this.getScissor=function(I){return I.copy(V)},this.setScissor=function(I,Q,he,pe){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,Q,he,pe),Oe.scissor(K.copy(V).multiplyScalar(F).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(I){Oe.setScissorTest(ce=I)},this.setOpaqueSort=function(I){de=I},this.setTransparentSort=function(I){L=I},this.getClearColor=function(I){return I.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(I=!0,Q=!0,he=!0){let pe=0;if(I){let J=!1;if(G!==null){const Ne=G.texture.format;J=Ne===uf||Ne===cf||Ne===lf}if(J){const Ne=G.texture.type,Ae=Ne===$i||Ne===es||Ne===ja||Ne===qs||Ne===af||Ne===of,Je=it.getClearColor(),$e=it.getClearAlpha(),ct=Je.r,dt=Je.g,et=Je.b;Ae?(E[0]=ct,E[1]=dt,E[2]=et,E[3]=$e,H.clearBufferuiv(H.COLOR,0,E)):(b[0]=ct,b[1]=dt,b[2]=et,b[3]=$e,H.clearBufferiv(H.COLOR,0,b))}else pe|=H.COLOR_BUFFER_BIT}Q&&(pe|=H.DEPTH_BUFFER_BIT),he&&(pe|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),He.dispose(),pt.dispose(),ke.dispose(),C.dispose(),oe.dispose(),xe.dispose(),Pt.dispose(),q.dispose(),qe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ns),ge.removeEventListener("sessionend",Zi),Ri.stop()};function ve(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const I=rt.autoReset,Q=je.enabled,he=je.autoUpdate,pe=je.needsUpdate,J=je.type;Pe(),rt.autoReset=I,je.enabled=Q,je.autoUpdate=he,je.needsUpdate=pe,je.type=J}function ze(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ht(I){const Q=I.target;Q.removeEventListener("dispose",ht),Ft(Q)}function Ft(I){Qt(I),ke.remove(I)}function Qt(I){const Q=ke.get(I).programs;Q!==void 0&&(Q.forEach(function(he){qe.releaseProgram(he)}),I.isShaderMaterial&&qe.releaseShaderCache(I))}this.renderBufferDirect=function(I,Q,he,pe,J,Ne){Q===null&&(Q=De);const Ae=J.isMesh&&J.matrixWorld.determinant()<0,Je=Qa(I,Q,he,pe,J);Oe.setMaterial(pe,Ae);let $e=he.index,ct=1;if(pe.wireframe===!0){if($e=Se.getWireframeAttribute(he),$e===void 0)return;ct=2}const dt=he.drawRange,et=he.attributes.position;let wt=dt.start*ct,Lt=(dt.start+dt.count)*ct;Ne!==null&&(wt=Math.max(wt,Ne.start*ct),Lt=Math.min(Lt,(Ne.start+Ne.count)*ct)),$e!==null?(wt=Math.max(wt,0),Lt=Math.min(Lt,$e.count)):et!=null&&(wt=Math.max(wt,0),Lt=Math.min(Lt,et.count));const Mt=Lt-wt;if(Mt<0||Mt===1/0)return;Pt.setup(J,pe,Je,he,$e);let fn,mt=Xe;if($e!==null&&(fn=_e.get($e),mt=St,mt.setIndex(fn)),J.isMesh)pe.wireframe===!0?(Oe.setLineWidth(pe.wireframeLinewidth*Qe()),mt.setMode(H.LINES)):mt.setMode(H.TRIANGLES);else if(J.isLine){let nt=pe.linewidth;nt===void 0&&(nt=1),Oe.setLineWidth(nt*Qe()),J.isLineSegments?mt.setMode(H.LINES):J.isLineLoop?mt.setMode(H.LINE_LOOP):mt.setMode(H.LINE_STRIP)}else J.isPoints?mt.setMode(H.POINTS):J.isSprite&&mt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)mt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))mt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const nt=J._multiDrawStarts,ni=J._multiDrawCounts,Rt=J._multiDrawCount,hn=$e?_e.get($e).bytesPerElement:1,ii=ke.get(pe).currentProgram.getUniforms();for(let Jt=0;Jt<Rt;Jt++)ii.setValue(H,"_gl_DrawID",Jt),mt.render(nt[Jt]/hn,ni[Jt])}else if(J.isInstancedMesh)mt.renderInstances(wt,Mt,J.count);else if(he.isInstancedBufferGeometry){const nt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,ni=Math.min(he.instanceCount,nt);mt.renderInstances(wt,Mt,ni)}else mt.render(wt,Mt)};function bt(I,Q,he){I.transparent===!0&&I.side===bi&&I.forceSinglePass===!1?(I.side=Un,I.needsUpdate=!0,is(I,Q,he),I.side=Tr,I.needsUpdate=!0,is(I,Q,he),I.side=bi):is(I,Q,he)}this.compile=function(I,Q,he=null){he===null&&(he=I),x=pt.get(he),x.init(Q),P.push(x),he.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),I!==he&&I.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const pe=new Set;return I.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let Ae=0;Ae<Ne.length;Ae++){const Je=Ne[Ae];bt(Je,he,J),pe.add(Je)}else bt(Ne,he,J),pe.add(Ne)}),P.pop(),x=null,pe},this.compileAsync=function(I,Q,he=null){const pe=this.compile(I,Q,he);return new Promise(J=>{function Ne(){if(pe.forEach(function(Ae){ke.get(Ae).currentProgram.isReady()&&pe.delete(Ae)}),pe.size===0){J(I);return}setTimeout(Ne,10)}Ie.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let bn=null;function _n(I){bn&&bn(I)}function ns(){Ri.stop()}function Zi(){Ri.start()}const Ri=new Wg;Ri.setAnimationLoop(_n),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(I){bn=I,ge.setAnimationLoop(I),I===null?Ri.stop():Ri.start()},ge.addEventListener("sessionstart",ns),ge.addEventListener("sessionend",Zi),this.render=function(I,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(Q),Q=ge.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,Q,G),x=pt.get(I,P.length),x.init(Q),P.push(x),me.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j.setFromProjectionMatrix(me),ue=this.localClippingEnabled,ee=be.init(this.clippingPlanes,ue),y=He.get(I,U.length),y.init(),U.push(y),ge.enabled===!0&&ge.isPresenting===!0){const Ne=R.xr.getDepthSensingMesh();Ne!==null&&Ni(Ne,Q,-1/0,R.sortObjects)}Ni(I,Q,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(de,L),Re=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Re&&it.addToRenderList(y,I),this.info.render.frame++,ee===!0&&be.beginShadows();const he=x.state.shadowsArray;je.render(he,I,Q),ee===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const pe=y.opaque,J=y.transmissive;if(x.setupLights(),Q.isArrayCamera){const Ne=Q.cameras;if(J.length>0)for(let Ae=0,Je=Ne.length;Ae<Je;Ae++){const $e=Ne[Ae];Rr(pe,J,I,$e)}Re&&it.render(I);for(let Ae=0,Je=Ne.length;Ae<Je;Ae++){const $e=Ne[Ae];Cr(y,I,$e,$e.viewport)}}else J.length>0&&Rr(pe,J,I,Q),Re&&it.render(I),Cr(y,I,Q);G!==null&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G)),I.isScene===!0&&I.onAfterRender(R,I,Q),Pt.resetDefaultState(),N=-1,A=null,P.pop(),P.length>0?(x=P[P.length-1],ee===!0&&be.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ni(I,Q,he,pe){if(I.visible===!1)return;if(I.layers.test(Q.layers)){if(I.isGroup)he=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Q);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||j.intersectsSprite(I)){pe&&we.setFromMatrixPosition(I.matrixWorld).applyMatrix4(me);const Ae=xe.update(I),Je=I.material;Je.visible&&y.push(I,Ae,Je,he,we.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||j.intersectsObject(I))){const Ae=xe.update(I),Je=I.material;if(pe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),we.copy(I.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),we.copy(Ae.boundingSphere.center)),we.applyMatrix4(I.matrixWorld).applyMatrix4(me)),Array.isArray(Je)){const $e=Ae.groups;for(let ct=0,dt=$e.length;ct<dt;ct++){const et=$e[ct],wt=Je[et.materialIndex];wt&&wt.visible&&y.push(I,Ae,wt,he,we.z,et)}}else Je.visible&&y.push(I,Ae,Je,he,we.z,null)}}const Ne=I.children;for(let Ae=0,Je=Ne.length;Ae<Je;Ae++)Ni(Ne[Ae],Q,he,pe)}function Cr(I,Q,he,pe){const J=I.opaque,Ne=I.transmissive,Ae=I.transparent;x.setupLightsView(he),ee===!0&&be.setGlobalState(R.clippingPlanes,he),pe&&Oe.viewport(O.copy(pe)),J.length>0&&Ki(J,Q,he),Ne.length>0&&Ki(Ne,Q,he),Ae.length>0&&Ki(Ae,Q,he),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Rr(I,Q,he,pe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[pe.id]===void 0&&(x.state.transmissionRenderTarget[pe.id]=new ts(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Xa:$i,minFilter:Jr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ne=x.state.transmissionRenderTarget[pe.id],Ae=pe.viewport||O;Ne.setSize(Ae.z,Ae.w);const Je=R.getRenderTarget();R.setRenderTarget(Ne),R.getClearColor(se),re=R.getClearAlpha(),re<1&&R.setClearColor(16777215,.5),R.clear(),Re&&it.render(he);const $e=R.toneMapping;R.toneMapping=br;const ct=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),x.setupLightsView(pe),ee===!0&&be.setGlobalState(R.clippingPlanes,pe),Ki(I,he,pe),D.updateMultisampleRenderTarget(Ne),D.updateRenderTargetMipmap(Ne),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let et=0,wt=Q.length;et<wt;et++){const Lt=Q[et],Mt=Lt.object,fn=Lt.geometry,mt=Lt.material,nt=Lt.group;if(mt.side===bi&&Mt.layers.test(pe.layers)){const ni=mt.side;mt.side=Un,mt.needsUpdate=!0,Za(Mt,he,pe,fn,mt,nt),mt.side=ni,mt.needsUpdate=!0,dt=!0}}dt===!0&&(D.updateMultisampleRenderTarget(Ne),D.updateRenderTargetMipmap(Ne))}R.setRenderTarget(Je),R.setClearColor(se,re),ct!==void 0&&(pe.viewport=ct),R.toneMapping=$e}function Ki(I,Q,he){const pe=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Ne=I.length;J<Ne;J++){const Ae=I[J],Je=Ae.object,$e=Ae.geometry,ct=pe===null?Ae.material:pe,dt=Ae.group;Je.layers.test(he.layers)&&Za(Je,Q,he,$e,ct,dt)}}function Za(I,Q,he,pe,J,Ne){I.onBeforeRender(R,Q,he,pe,J,Ne),I.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(R,Q,he,pe,I,Ne),J.transparent===!0&&J.side===bi&&J.forceSinglePass===!1?(J.side=Un,J.needsUpdate=!0,R.renderBufferDirect(he,Q,pe,J,I,Ne),J.side=Tr,J.needsUpdate=!0,R.renderBufferDirect(he,Q,pe,J,I,Ne),J.side=bi):R.renderBufferDirect(he,Q,pe,J,I,Ne),I.onAfterRender(R,Q,he,pe,J,Ne)}function is(I,Q,he){Q.isScene!==!0&&(Q=De);const pe=ke.get(I),J=x.state.lights,Ne=x.state.shadowsArray,Ae=J.state.version,Je=qe.getParameters(I,J.state,Ne,Q,he),$e=qe.getProgramCacheKey(Je);let ct=pe.programs;pe.environment=I.isMeshStandardMaterial?Q.environment:null,pe.fog=Q.fog,pe.envMap=(I.isMeshStandardMaterial?oe:C).get(I.envMap||pe.environment),pe.envMapRotation=pe.environment!==null&&I.envMap===null?Q.environmentRotation:I.envMapRotation,ct===void 0&&(I.addEventListener("dispose",ht),ct=new Map,pe.programs=ct);let dt=ct.get($e);if(dt!==void 0){if(pe.currentProgram===dt&&pe.lightsStateVersion===Ae)return gi(I,Je),dt}else Je.uniforms=qe.getUniforms(I),I.onBeforeCompile(Je,R),dt=qe.acquireProgram(Je,$e),ct.set($e,dt),pe.uniforms=Je.uniforms;const et=pe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(et.clippingPlanes=be.uniform),gi(I,Je),pe.needsLights=Wl(I),pe.lightsStateVersion=Ae,pe.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.directionalShadowMap.value=J.state.directionalShadowMap,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotShadowMap.value=J.state.spotShadowMap,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMap.value=J.state.pointShadowMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),pe.currentProgram=dt,pe.uniformsList=null,dt}function Ka(I){if(I.uniformsList===null){const Q=I.currentProgram.getUniforms();I.uniformsList=Ll.seqWithValue(Q.seq,I.uniforms)}return I.uniformsList}function gi(I,Q){const he=ke.get(I);he.outputColorSpace=Q.outputColorSpace,he.batching=Q.batching,he.batchingColor=Q.batchingColor,he.instancing=Q.instancing,he.instancingColor=Q.instancingColor,he.instancingMorph=Q.instancingMorph,he.skinning=Q.skinning,he.morphTargets=Q.morphTargets,he.morphNormals=Q.morphNormals,he.morphColors=Q.morphColors,he.morphTargetsCount=Q.morphTargetsCount,he.numClippingPlanes=Q.numClippingPlanes,he.numIntersection=Q.numClipIntersection,he.vertexAlphas=Q.vertexAlphas,he.vertexTangents=Q.vertexTangents,he.toneMapping=Q.toneMapping}function Qa(I,Q,he,pe,J){Q.isScene!==!0&&(Q=De),D.resetTextureUnits();const Ne=Q.fog,Ae=pe.isMeshStandardMaterial?Q.environment:null,Je=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ks,$e=(pe.isMeshStandardMaterial?oe:C).get(pe.envMap||Ae),ct=pe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,dt=!!he.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),et=!!he.morphAttributes.position,wt=!!he.morphAttributes.normal,Lt=!!he.morphAttributes.color;let Mt=br;pe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Mt=R.toneMapping);const fn=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,mt=fn!==void 0?fn.length:0,nt=ke.get(pe),ni=x.state.lights;if(ee===!0&&(ue===!0||I!==A)){const Sn=I===A&&pe.id===N;be.setState(pe,I,Sn)}let Rt=!1;pe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==ni.state.version||nt.outputColorSpace!==Je||J.isBatchedMesh&&nt.batching===!1||!J.isBatchedMesh&&nt.batching===!0||J.isBatchedMesh&&nt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&nt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&nt.instancing===!1||!J.isInstancedMesh&&nt.instancing===!0||J.isSkinnedMesh&&nt.skinning===!1||!J.isSkinnedMesh&&nt.skinning===!0||J.isInstancedMesh&&nt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&nt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&nt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&nt.instancingMorph===!1&&J.morphTexture!==null||nt.envMap!==$e||pe.fog===!0&&nt.fog!==Ne||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==be.numPlanes||nt.numIntersection!==be.numIntersection)||nt.vertexAlphas!==ct||nt.vertexTangents!==dt||nt.morphTargets!==et||nt.morphNormals!==wt||nt.morphColors!==Lt||nt.toneMapping!==Mt||nt.morphTargetsCount!==mt)&&(Rt=!0):(Rt=!0,nt.__version=pe.version);let hn=nt.currentProgram;Rt===!0&&(hn=is(pe,Q,J));let ii=!1,Jt=!1,xi=!1;const zt=hn.getUniforms(),Wn=nt.uniforms;if(Oe.useProgram(hn.program)&&(ii=!0,Jt=!0,xi=!0),pe.id!==N&&(N=pe.id,Jt=!0),ii||A!==I){Oe.buffers.depth.getReversed()?(te.copy(I.projectionMatrix),Uv(te),Ov(te),zt.setValue(H,"projectionMatrix",te)):zt.setValue(H,"projectionMatrix",I.projectionMatrix),zt.setValue(H,"viewMatrix",I.matrixWorldInverse);const Xn=zt.map.cameraPosition;Xn!==void 0&&Xn.setValue(H,ye.setFromMatrixPosition(I.matrixWorld)),Be.logarithmicDepthBuffer&&zt.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&zt.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),A!==I&&(A=I,Jt=!0,xi=!0)}if(J.isSkinnedMesh){zt.setOptional(H,J,"bindMatrix"),zt.setOptional(H,J,"bindMatrixInverse");const Sn=J.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),zt.setValue(H,"boneTexture",Sn.boneTexture,D))}J.isBatchedMesh&&(zt.setOptional(H,J,"batchingTexture"),zt.setValue(H,"batchingTexture",J._matricesTexture,D),zt.setOptional(H,J,"batchingIdTexture"),zt.setValue(H,"batchingIdTexture",J._indirectTexture,D),zt.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&zt.setValue(H,"batchingColorTexture",J._colorsTexture,D));const Ii=he.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ot.update(J,he,hn),(Jt||nt.receiveShadow!==J.receiveShadow)&&(nt.receiveShadow=J.receiveShadow,zt.setValue(H,"receiveShadow",J.receiveShadow)),pe.isMeshGouraudMaterial&&pe.envMap!==null&&(Wn.envMap.value=$e,Wn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),pe.isMeshStandardMaterial&&pe.envMap===null&&Q.environment!==null&&(Wn.envMapIntensity.value=Q.environmentIntensity),Jt&&(zt.setValue(H,"toneMappingExposure",R.toneMappingExposure),nt.needsLights&&Ja(Wn,xi),Ne&&pe.fog===!0&&Le.refreshFogUniforms(Wn,Ne),Le.refreshMaterialUniforms(Wn,pe,F,ie,x.state.transmissionRenderTarget[I.id]),Ll.upload(H,Ka(nt),Wn,D)),pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(Ll.upload(H,Ka(nt),Wn,D),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&zt.setValue(H,"center",J.center),zt.setValue(H,"modelViewMatrix",J.modelViewMatrix),zt.setValue(H,"normalMatrix",J.normalMatrix),zt.setValue(H,"modelMatrix",J.matrixWorld),pe.isShaderMaterial||pe.isRawShaderMaterial){const Sn=pe.uniformsGroups;for(let Xn=0,Tn=Sn.length;Xn<Tn;Xn++){const eo=Sn[Xn];q.update(eo,hn),q.bind(eo,hn)}}return hn}function Ja(I,Q){I.ambientLightColor.needsUpdate=Q,I.lightProbe.needsUpdate=Q,I.directionalLights.needsUpdate=Q,I.directionalLightShadows.needsUpdate=Q,I.pointLights.needsUpdate=Q,I.pointLightShadows.needsUpdate=Q,I.spotLights.needsUpdate=Q,I.spotLightShadows.needsUpdate=Q,I.rectAreaLights.needsUpdate=Q,I.hemisphereLights.needsUpdate=Q}function Wl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(I,Q,he){ke.get(I.texture).__webglTexture=Q,ke.get(I.depthTexture).__webglTexture=he;const pe=ke.get(I);pe.__hasExternalTextures=!0,pe.__autoAllocateDepthBuffer=he===void 0,pe.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Q){const he=ke.get(I);he.__webglFramebuffer=Q,he.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(I,Q=0,he=0){G=I,B=Q,k=he;let pe=!0,J=null,Ne=!1,Ae=!1;if(I){const $e=ke.get(I);if($e.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(H.FRAMEBUFFER,null),pe=!1;else if($e.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if($e.__hasExternalTextures)D.rebindTextures(I,ke.get(I.texture).__webglTexture,ke.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const et=I.depthTexture;if($e.__boundDepthTexture!==et){if(et!==null&&ke.has(et)&&(I.width!==et.image.width||I.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}const ct=I.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ae=!0);const dt=ke.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(dt[Q])?J=dt[Q][he]:J=dt[Q],Ne=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?J=ke.get(I).__webglMultisampledFramebuffer:Array.isArray(dt)?J=dt[he]:J=dt,O.copy(I.viewport),K.copy(I.scissor),W=I.scissorTest}else O.copy(w).multiplyScalar(F).floor(),K.copy(V).multiplyScalar(F).floor(),W=ce;if(Oe.bindFramebuffer(H.FRAMEBUFFER,J)&&pe&&Oe.drawBuffers(I,J),Oe.viewport(O),Oe.scissor(K),Oe.setScissorTest(W),Ne){const $e=ke.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,$e.__webglTexture,he)}else if(Ae){const $e=ke.get(I.texture),ct=Q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,he||0,ct)}N=-1},this.readRenderTargetPixels=function(I,Q,he,pe,J,Ne,Ae){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(Je=Je[Ae]),Je){Oe.bindFramebuffer(H.FRAMEBUFFER,Je);try{const $e=I.texture,ct=$e.format,dt=$e.type;if(!Be.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=I.width-pe&&he>=0&&he<=I.height-J&&H.readPixels(Q,he,pe,J,ft.convert(ct),ft.convert(dt),Ne)}finally{const $e=G!==null?ke.get(G).__webglFramebuffer:null;Oe.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(I,Q,he,pe,J,Ne,Ae){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(Je=Je[Ae]),Je){const $e=I.texture,ct=$e.format,dt=$e.type;if(!Be.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=I.width-pe&&he>=0&&he<=I.height-J){Oe.bindFramebuffer(H.FRAMEBUFFER,Je);const et=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,et),H.bufferData(H.PIXEL_PACK_BUFFER,Ne.byteLength,H.STREAM_READ),H.readPixels(Q,he,pe,J,ft.convert(ct),ft.convert(dt),0);const wt=G!==null?ke.get(G).__webglFramebuffer:null;Oe.bindFramebuffer(H.FRAMEBUFFER,wt);const Lt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Dv(H,Lt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,et),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ne),H.deleteBuffer(et),H.deleteSync(Lt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Q=null,he=0){I.isTexture!==!0&&(Fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,I=arguments[1]);const pe=Math.pow(2,-he),J=Math.floor(I.image.width*pe),Ne=Math.floor(I.image.height*pe),Ae=Q!==null?Q.x:0,Je=Q!==null?Q.y:0;D.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,he,0,0,Ae,Je,J,Ne),Oe.unbindTexture()},this.copyTextureToTexture=function(I,Q,he=null,pe=null,J=0){I.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture function signature has changed."),pe=arguments[0]||null,I=arguments[1],Q=arguments[2],J=arguments[3]||0,he=null);let Ne,Ae,Je,$e,ct,dt,et,wt,Lt;const Mt=I.isCompressedTexture?I.mipmaps[J]:I.image;he!==null?(Ne=he.max.x-he.min.x,Ae=he.max.y-he.min.y,Je=he.isBox3?he.max.z-he.min.z:1,$e=he.min.x,ct=he.min.y,dt=he.isBox3?he.min.z:0):(Ne=Mt.width,Ae=Mt.height,Je=Mt.depth||1,$e=0,ct=0,dt=0),pe!==null?(et=pe.x,wt=pe.y,Lt=pe.z):(et=0,wt=0,Lt=0);const fn=ft.convert(Q.format),mt=ft.convert(Q.type);let nt;Q.isData3DTexture?(D.setTexture3D(Q,0),nt=H.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(D.setTexture2DArray(Q,0),nt=H.TEXTURE_2D_ARRAY):(D.setTexture2D(Q,0),nt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment);const ni=H.getParameter(H.UNPACK_ROW_LENGTH),Rt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),hn=H.getParameter(H.UNPACK_SKIP_PIXELS),ii=H.getParameter(H.UNPACK_SKIP_ROWS),Jt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,ct),H.pixelStorei(H.UNPACK_SKIP_IMAGES,dt);const xi=I.isDataArrayTexture||I.isData3DTexture,zt=Q.isDataArrayTexture||Q.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Wn=ke.get(I),Ii=ke.get(Q),Sn=ke.get(Wn.__renderTarget),Xn=ke.get(Ii.__renderTarget);Oe.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Tn=0;Tn<Je;Tn++)xi&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.get(I).__webglTexture,J,dt+Tn),I.isDepthTexture?(zt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.get(Q).__webglTexture,J,Lt+Tn),H.blitFramebuffer($e,ct,Ne,Ae,et,wt,Ne,Ae,H.DEPTH_BUFFER_BIT,H.NEAREST)):zt?H.copyTexSubImage3D(nt,J,et,wt,Lt+Tn,$e,ct,Ne,Ae):H.copyTexSubImage2D(nt,J,et,wt,Lt+Tn,$e,ct,Ne,Ae);Oe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zt?I.isDataTexture||I.isData3DTexture?H.texSubImage3D(nt,J,et,wt,Lt,Ne,Ae,Je,fn,mt,Mt.data):Q.isCompressedArrayTexture?H.compressedTexSubImage3D(nt,J,et,wt,Lt,Ne,Ae,Je,fn,Mt.data):H.texSubImage3D(nt,J,et,wt,Lt,Ne,Ae,Je,fn,mt,Mt):I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,J,et,wt,Ne,Ae,fn,mt,Mt.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,J,et,wt,Mt.width,Mt.height,fn,Mt.data):H.texSubImage2D(H.TEXTURE_2D,J,et,wt,Ne,Ae,fn,mt,Mt);H.pixelStorei(H.UNPACK_ROW_LENGTH,ni),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,hn),H.pixelStorei(H.UNPACK_SKIP_ROWS,ii),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt),J===0&&Q.generateMipmaps&&H.generateMipmap(nt),Oe.unbindTexture()},this.copyTextureToTexture3D=function(I,Q,he=null,pe=null,J=0){return I.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),he=arguments[0]||null,pe=arguments[1]||null,I=arguments[2],Q=arguments[3],J=arguments[4]||0),Fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Q,he,pe,J)},this.initRenderTarget=function(I){ke.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),Oe.unbindTexture()},this.resetState=function(){B=0,k=0,G=null,Oe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}class jl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(e),this.density=n}clone(){return new jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jg extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class e0 extends Js{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new le,Ol=new le,Zm=new Vt,ka=new df,bl=new Hl,ad=new le,Km=new le;class W1 extends dn{constructor(e=new jn,n=new e0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Ul.fromBufferAttribute(n,o-1),Ol.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Ul.distanceTo(Ol);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(o),bl.radius+=c,e.ray.intersectsSphere(bl)===!1)return;Zm.copy(o).invert(),ka.copy(e.ray).applyMatrix4(Zm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let b=M,y=E-1;b<y;b+=m){const x=v.getX(b),U=v.getX(b+1),P=Tl(this,e,ka,p,x,U);P&&n.push(P)}if(this.isLineLoop){const b=v.getX(E-1),y=v.getX(M),x=Tl(this,e,ka,p,b,y);x&&n.push(x)}}else{const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let b=M,y=E-1;b<y;b+=m){const x=Tl(this,e,ka,p,b,b+1);x&&n.push(x)}if(this.isLineLoop){const b=Tl(this,e,ka,p,E-1,M);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Tl(s,e,n,r,o,c){const u=s.geometry.attributes.position;if(Ul.fromBufferAttribute(u,o),Ol.fromBufferAttribute(u,c),n.distanceSqToSegment(Ul,Ol,ad,Km)>r)return;ad.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ad);if(!(p<e.near||p>e.far))return{distance:p,point:Km.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Qm=new le,Jm=new le;class X1 extends W1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Qm.fromBufferAttribute(n,o),Jm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Qm.distanceTo(Jm);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ti extends jn{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],S=[],_=[],M=[];let E=0;const b=[],y=r/2;let x=0;U(),u===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new Xt(S,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(M,2));function U(){const R=new le,$=new le;let B=0;const k=(n-e)/r;for(let G=0;G<=c;G++){const N=[],A=G/c,O=A*(n-e)+e;for(let K=0;K<=o;K++){const W=K/o,se=W*p+f,re=Math.sin(se),Z=Math.cos(se);$.x=O*re,$.y=-A*r+y,$.z=O*Z,S.push($.x,$.y,$.z),R.set(re,k,Z).normalize(),_.push(R.x,R.y,R.z),M.push(W,1-A),N.push(E++)}b.push(N)}for(let G=0;G<o;G++)for(let N=0;N<c;N++){const A=b[N][G],O=b[N+1][G],K=b[N+1][G+1],W=b[N][G+1];(e>0||N!==0)&&(v.push(A,O,W),B+=3),(n>0||N!==c-1)&&(v.push(O,K,W),B+=3)}m.addGroup(x,B,0),x+=B}function P(R){const $=E,B=new Ct,k=new le;let G=0;const N=R===!0?e:n,A=R===!0?1:-1;for(let K=1;K<=o;K++)S.push(0,y*A,0),_.push(0,A,0),M.push(.5,.5),E++;const O=E;for(let K=0;K<=o;K++){const se=K/o*p+f,re=Math.cos(se),Z=Math.sin(se);k.x=N*Z,k.y=y*A,k.z=N*re,S.push(k.x,k.y,k.z),_.push(0,A,0),B.x=re*.5+.5,B.y=Z*.5*A+.5,M.push(B.x,B.y),E++}for(let K=0;K<o;K++){const W=$+K,se=O+K;R===!0?v.push(se,se+1,W):v.push(se+1,se,W),G+=3}m.addGroup(x,G,R===!0?1:2),x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gf extends ti{constructor(e=1,n=1,r=32,o=1,c=!1,u=0,f=Math.PI*2){super(0,e,n,r,o,c,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f}}static fromJSON(e){return new gf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xf extends jn{constructor(e=.5,n=1,r=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],p=[],m=[],v=[];let S=e;const _=(n-e)/o,M=new le,E=new Ct;for(let b=0;b<=o;b++){for(let y=0;y<=r;y++){const x=c+y/r*u;M.x=S*Math.cos(x),M.y=S*Math.sin(x),p.push(M.x,M.y,M.z),m.push(0,0,1),E.x=(M.x/n+1)/2,E.y=(M.y/n+1)/2,v.push(E.x,E.y)}S+=_}for(let b=0;b<o;b++){const y=b*(r+1);for(let x=0;x<r;x++){const U=x+y,P=U,R=U+r+1,$=U+r+2,B=U+1;f.push(P,R,B),f.push(R,$,B)}}this.setIndex(f),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ga extends jn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let m=0;const v=[],S=new le,_=new le,M=[],E=[],b=[],y=[];for(let x=0;x<=r;x++){const U=[],P=x/r;let R=0;x===0&&u===0?R=.5/n:x===r&&p===Math.PI&&(R=-.5/n);for(let $=0;$<=n;$++){const B=$/n;S.x=-e*Math.cos(o+B*c)*Math.sin(u+P*f),S.y=e*Math.cos(u+P*f),S.z=e*Math.sin(o+B*c)*Math.sin(u+P*f),E.push(S.x,S.y,S.z),_.copy(S).normalize(),b.push(_.x,_.y,_.z),y.push(B+R,1-P),U.push(m++)}v.push(U)}for(let x=0;x<r;x++)for(let U=0;U<n;U++){const P=v[x][U+1],R=v[x][U],$=v[x+1][U],B=v[x+1][U+1];(x!==0||u>0)&&M.push(P,R,B),(x!==r-1||p<Math.PI)&&M.push(R,$,B)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(b,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yf extends jn{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],p=[],m=[],v=new le,S=new le,_=new le;for(let M=0;M<=r;M++)for(let E=0;E<=o;E++){const b=E/o*c,y=M/r*Math.PI*2;S.x=(e+n*Math.cos(y))*Math.cos(b),S.y=(e+n*Math.cos(y))*Math.sin(b),S.z=n*Math.sin(y),f.push(S.x,S.y,S.z),v.x=e*Math.cos(b),v.y=e*Math.sin(b),_.subVectors(S,v).normalize(),p.push(_.x,_.y,_.z),m.push(E/o),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=o;E++){const b=(o+1)*M+E-1,y=(o+1)*(M-1)+E-1,x=(o+1)*(M-1)+E,U=(o+1)*M+E;u.push(b,y,U),u.push(y,x,U)}this.setIndex(u),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ei extends Js{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t0 extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const od=new Vt,eg=new le,tg=new le;class Y1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pf,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),n.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tg),n.updateMatrixWorld(),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q1 extends Y1{constructor(){super(new Xg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends t0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new q1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n0 extends t0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ng=new Vt;class $1{constructor(e,n,r=0,o=1/0){this.ray=new df(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ng),this}intersectObject(e,n=!0,r=[]){return Qd(e,this,r,n),r.sort(ig),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Qd(e[o],this,r,n);return r.sort(ig),r}}function ig(s,e){return s.distance-e.distance}function Qd(s,e,n,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let u=0,f=c.length;u<f;u++)Qd(c[u],e,n,!0)}}class i0 extends X1{constructor(e=10,n=10,r=4473924,o=8947848){r=new _t(r),o=new _t(o);const c=n/2,u=e/n,f=e/2,p=[],m=[];for(let _=0,M=0,E=-f;_<=n;_++,E+=u){p.push(-f,0,E,f,0,E),p.push(E,0,-f,E,0,f);const b=_===c?r:o;b.toArray(m,M),M+=3,b.toArray(m,M),M+=3,b.toArray(m,M),M+=3,b.toArray(m,M),M+=3}const v=new jn;v.setAttribute("position",new Xt(p,3)),v.setAttribute("color",new Xt(m,3));const S=new e0({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);function Z1({infrastructure:s,selectedPartMaterials:e,activePartId:n,onSelectPart:r,materialsList:o,isCompact:c=!1}){const u=Ke.useRef(null),f=Ke.useRef(null),p=Ke.useRef(null),m=Ke.useRef(null),v=Ke.useRef(null),S=Ke.useRef({}),[_,M]=Ke.useState(!1),[E,b]=Ke.useState(!1),[y,x]=Ke.useState(!0),[U,P]=Ke.useState(45),[R,$]=Ke.useState(!1),[B,k]=Ke.useState(!1),G=[...o,...ef];Ke.useEffect(()=>{if(u.current)try{const O=u.current.clientWidth||360,K=u.current.clientHeight||420,W=new Jg;W.background=new _t(657930),W.fog=new jl(657930,.022),f.current=W;const se=new Vn(38,O/K,.1,1e3);se.position.set(18,15,22),se.lookAt(0,2.5,0),m.current=se;const re=new Qg({antialias:!0,alpha:!0});for(re.setSize(O,K),re.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),re.shadowMap.enabled=!0,re.shadowMap.type=rf,p.current=re;u.current.firstChild;)u.current.removeChild(u.current.firstChild);u.current.appendChild(re.domElement);const Z=new i0(40,40,3355443,1579032);Z.position.y=-.01,W.add(Z);const ie=new xf(11.9,12,48),F=new hf({color:2763306,side:bi}),de=new Ve(ie,F);de.rotation.x=Math.PI/2,de.position.y=.01,W.add(de);const L=new n0(16777215,.85);W.add(L);const w=new zl(16775146,2);w.position.set(16,26,16),w.castShadow=!0,W.add(w);const V=new zl(4487099,.6);V.position.set(-15,12,-15),W.add(V);const ce=new yt;W.add(ce),v.current=ce,A(s,e,_,ce,S);const j=new $1,ee=new Ct;let ue=!1,te=0,me={x:0,y:0};const ye=Ie=>{ue=!0,te=0;const Be=Ie.clientX||Ie.touches&&Ie.touches[0].clientX,Oe=Ie.clientY||Ie.touches&&Ie.touches[0].clientY;me={x:Be,y:Oe}},we=Ie=>{const Be=Ie.clientX||Ie.touches&&Ie.touches[0].clientX,Oe=Ie.clientY||Ie.touches&&Ie.touches[0].clientY;if(ue){const rt=Be-me.x,ke=Oe-me.y;te+=Math.abs(rt)+Math.abs(ke),ce&&(ce.rotation.y+=rt*.008)}me={x:Be,y:Oe}},De=Ie=>{if(te<8&&re&&re.domElement){const Be=Ie.clientX||Ie.changedTouches&&Ie.changedTouches[0]?.clientX,Oe=Ie.clientY||Ie.changedTouches&&Ie.changedTouches[0]?.clientY;if(Be!==void 0&&Oe!==void 0){const rt=re.domElement.getBoundingClientRect();ee.x=(Be-rt.left)/rt.width*2-1,ee.y=-((Oe-rt.top)/rt.height)*2+1,j.setFromCamera(ee,se);const ke=j.intersectObjects(ce.children,!0);if(ke.length>0){let D=ke[0].object;for(;D.parent&&!D.userData?.partId&&D.parent!==ce;)D=D.parent;D.userData?.partId&&(Va(),r(D.userData.partId))}}}ue=!1},Re=re.domElement;Re.addEventListener("mousedown",ye),Re.addEventListener("mousemove",we),window.addEventListener("mouseup",De),Re.addEventListener("touchstart",ye,{passive:!0}),Re.addEventListener("touchmove",we,{passive:!0}),window.addEventListener("touchend",De);let Qe;const H=()=>{Qe=requestAnimationFrame(H),R&&!ue&&ce&&(ce.rotation.y+=.003),re.render(W,se)};H();const gt=()=>{if(!u.current||!re||!se)return;const Ie=u.current.clientWidth,Be=u.current.clientHeight||420;se.aspect=Ie/Be,se.updateProjectionMatrix(),re.setSize(Ie,Be)};return window.addEventListener("resize",gt),()=>{cancelAnimationFrame(Qe),window.removeEventListener("resize",gt),window.removeEventListener("mouseup",De),window.removeEventListener("touchend",De),Re.removeEventListener("mousedown",ye),Re.removeEventListener("mousemove",we),Re.removeEventListener("touchstart",ye),Re.removeEventListener("touchmove",we),re.dispose()}}catch(O){console.error("WebGL initialization error:",O),k(!0)}},[s.id]),Ke.useEffect(()=>{v.current&&A(s,e,_,v.current,S)},[e,_,s]),Ke.useEffect(()=>{const O=S.current;O&&Object.keys(O).forEach(K=>{const W=O[K];if(!W)return;const se=K===n;if(E){const re=W.userData?.explodeOffset||{x:0,y:0,z:0};W.position.set(re.x*2.2,re.y*2.4,re.z*2.2),W.scale.set(1,1,1),N(W)}else if(y&&n)if(se){const re=W.userData?.pullDirection||{x:0,y:1.2,z:1.5};W.position.set(re.x*1.8,re.y*1.6,re.z*1.8),W.scale.set(1.08,1.08,1.08),W.traverse(Z=>{Z.isMesh&&Z.material&&(Z.material.transparent=!1,Z.material.opacity=1,Z.material.emissive=new _t(3359778),Z.material.emissiveIntensity=.5)})}else W.position.set(0,0,0),W.scale.set(.98,.98,.98),W.traverse(re=>{re.isMesh&&re.material&&(re.material.transparent=!0,re.material.opacity=.18,re.material.emissive=new _t(0),re.material.emissiveIntensity=0)});else W.position.set(0,0,0),W.scale.set(1,1,1),N(W)})},[n,E,y]);function N(O){O.traverse(K=>{if(K.isMesh&&K.material){const W=K.userData?.isGlass;K.material.transparent=!!W,K.material.opacity=W?.45:1,K.material.emissive=new _t(0),K.material.emissiveIntensity=0}})}function A(O,K,W,se,re){for(;se.children.length>0;){const F=se.children[0];se.remove(F),F.geometry&&F.geometry.dispose(),F.material&&(Array.isArray(F.material)?F.material.forEach(de=>de.dispose()):F.material.dispose())}re.current={};const Z=(F,de=8947848)=>{const L=K[F],w=G.find(j=>j.id===L),V=L==="triple_glazed_glass"||L==="smart_solar_glass",ce=w?parseInt(w.colorHex.replace("#","0x")):de;if(V){const j=new Ei({color:ce,transparent:!0,opacity:L==="smart_solar_glass"?.65:.4,roughness:.1,metalness:.2,wireframe:W});return j.userData={isGlass:!0},j}return new Ei({color:ce,roughness:.85,metalness:.1,wireframe:W,flatShading:!0})},ie=(F,de,L,w={x:0,y:1,z:1},V={x:0,y:0,z:0})=>{L.userData={partId:F,partName:de,pullDirection:w,explodeOffset:V},L.traverse(ce=>{ce.userData={...ce.userData,partId:F,partName:de}}),se.add(L),re.current[F]=L};if(O.id==="yzy_mono_dome"){const F=new yt,de=Z("dome_base",7829367),L=new Ve(new ti(6.4,6.7,.6,32),de);L.position.y=.3,L.receiveShadow=!0,F.add(L),ie("dome_base","SUBGRADE PLINTH",F,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const w=new yt,V=Z("dome_shell",14540224),ce=new Ve(new Ga(5.8,32,24,0,Math.PI*2,0,Math.PI/2),V);ce.position.y=.6,ce.castShadow=!0,ce.receiveShadow=!0,w.add(ce),ie("dome_shell","DOME ENVELOPE SHELL",w,{x:0,y:1.8,z:0},{x:0,y:2,z:0});const j=new yt,ee=Z("dome_window_oculus",6858170),ue=new Ve(new ti(1.1,1.2,.35,24),ee);ue.position.y=6.35,j.add(ue),ie("dome_window_oculus","SKYLIGHT OCULUS",j,{x:0,y:3,z:0},{x:0,y:5.5,z:0});const te=new yt,me=Z("dome_portal_tunnel",10516565),ye=new Ve(new lt(2.4,3.2,3.8),me);ye.position.set(0,2,5.2),ye.castShadow=!0,te.add(ye),ie("dome_portal_tunnel","ENTRANCE TUNNEL",te,{x:0,y:.5,z:3.5},{x:0,y:0,z:4.8});const we=new yt,De=new Ei({color:1713022,metalness:.8,roughness:.2}),Re=new Ve(new lt(2.6,.1,1.8),De);Re.position.set(-4.8,.65,-3.8),Re.rotation.x=.3,we.add(Re),ie("dome_utilities","OFF-GRID UTILITY POD",we,{x:-2.5,y:0,z:-2.5},{x:-4.5,y:0,z:-4.5})}else if(O.id==="rammed_earth_villa"){const F=new yt,de=Z("villa_foundation",8026744),L=new Ve(new lt(11,.5,8),de);L.position.set(0,.25,0),F.add(L),ie("villa_foundation","FOUNDATION SLAB",F,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const w=new yt,V=Z("villa_south_wall",10516565),ce=new Ve(new lt(9.4,3.8,.8),V);ce.position.set(0,2.4,3.2),ce.castShadow=!0,w.add(ce),ie("villa_south_wall","SOUTH WALL ENVELOPE",w,{x:0,y:.5,z:3.2},{x:0,y:0,z:4.5});const j=new yt,ee=Z("villa_north_wall",10516565),ue=new Ve(new lt(9.4,3.8,.8),ee);ue.position.set(0,2.4,-3.2),ue.castShadow=!0,j.add(ue),ie("villa_north_wall","NORTH SHIELD WALL",j,{x:0,y:.5,z:-3.2},{x:0,y:0,z:-4.5});const te=new yt,me=Z("villa_side_walls",10516565),ye=new Ve(new lt(.8,3.8,5.6),me);ye.position.set(4.3,2.4,0);const we=new Ve(new lt(.8,3.8,5.6),me);we.position.set(-4.3,2.4,0),te.add(ye),te.add(we),ie("villa_side_walls","EAST & WEST SIDE WALLS",te,{x:3,y:.5,z:0},{x:4.5,y:0,z:0});const De=new yt,Re=Z("villa_roof_cantilever",13213798),Qe=new Ve(new lt(12.4,.45,9.4),Re);Qe.position.set(0,4.5,0),Qe.castShadow=!0,De.add(Qe),ie("villa_roof_cantilever","MASS TIMBER ROOF",De,{x:0,y:2.8,z:0},{x:0,y:4.8,z:0});const H=new yt,gt=Z("villa_window_portal",6858170),Ie=new Ve(new lt(4.5,3.2,.2),gt);Ie.position.set(0,2.1,3.65),H.add(Ie),ie("villa_window_portal","PATIO WINDOW PORTAL",H,{x:0,y:.8,z:3.5},{x:0,y:0,z:5.5});const Be=new yt,Oe=new Ei({color:1713022,metalness:.8,roughness:.2}),rt=new Ve(new lt(4.8,.1,3.4),Oe);rt.position.set(0,4.9,0),rt.rotation.x=-.15,Be.add(rt),ie("villa_utilities","SOLAR PERGOLA SUITE",Be,{x:0,y:3.2,z:0},{x:0,y:6,z:0})}else if(O.id==="modular_eco_apartments"){const F=new yt,de=Z("mod_pod_base",7829367),L=new Ve(new lt(9,.8,9),de);L.position.y=.4,F.add(L),ie("mod_pod_base","PODIUM SUBGRADE",F,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const w=new yt,V=Z("mod_tier1_modules",10516565),ce=new Ve(new lt(3.6,2.2,7.6),V);ce.position.set(-2,1.9,0);const j=new Ve(new lt(3.6,2.2,7.6),V);j.position.set(2,1.9,0),w.add(ce),w.add(j),ie("mod_tier1_modules","LEVEL 01 LIVING MODULES",w,{x:-2,y:.5,z:0},{x:-3.5,y:0,z:0});const ee=new yt,ue=Z("mod_tier2_modules",13213798),te=new Ve(new lt(7.8,2.2,3.8),ue);te.position.set(0,4.1,1.2),ee.add(te),ie("mod_tier2_modules","LEVEL 02 LIVING MODULES",ee,{x:2,y:.5,z:0},{x:3.5,y:0,z:0});const me=new yt,ye=Z("mod_tier3_modules",13213798),we=new Ve(new lt(4.8,2.2,4.8),ye);we.position.set(0,6.3,-.6),me.add(we),ie("mod_tier3_modules","LEVEL 03 PENTHOUSE",me,{x:0,y:1.8,z:-1.5},{x:0,y:3,z:-3});const De=new yt,Re=Z("mod_facade_glazing",6858170),Qe=new Ve(new lt(7.2,1.4,.2),Re);Qe.position.set(0,4.1,3.15),De.add(Qe),ie("mod_facade_glazing","COURTYARD GLAZING",De,{x:0,y:.5,z:3},{x:0,y:0,z:4.8});const H=new yt,gt=Z("mod_roof_canopy",13213798),Ie=new Ve(new lt(5.6,.2,5.6),gt);Ie.position.set(0,7.6,-.6),H.add(Ie),ie("mod_roof_canopy","COMMUNAL ROOFTOP CANOPY",H,{x:0,y:2.5,z:0},{x:0,y:4.5,z:0});const Be=new yt,Oe=new Ei({color:1713022,metalness:.8}),rt=new Ve(new lt(2.4,1.2,2),Oe);rt.position.set(-3.2,.8,-3.2),Be.add(rt),ie("mod_utilities","DISTRICT MICROGRID",Be,{x:-2.5,y:0,z:-2.5},{x:-4,y:0,z:-4})}else if(O.id==="donda_resilience_commons"){const F=new yt,de=Z("donda_base_plaza",7829367),L=new Ve(new ti(9.2,9.6,.4,32),de);L.position.y=.2,F.add(L),ie("donda_base_plaza","COMMUNAL PLAZA BASE",F,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const w=new yt,V=Z("donda_central_dome",14540224),ce=new Ve(new Ga(3.6,24,16,0,Math.PI*2,0,Math.PI/2),V);ce.position.y=.4,w.add(ce),ie("donda_central_dome","CENTRAL BIODOME",w,{x:0,y:2.2,z:0},{x:0,y:3.5,z:0});const j=new yt,ee=Z("donda_living_pods",10516565);for(let Re=0;Re<6;Re++){const Qe=Re*Math.PI/3,H=6.2,gt=Math.cos(Qe)*H,Ie=Math.sin(Qe)*H,Be=new Ve(new Ga(1.5,16,12,0,Math.PI*2,0,Math.PI/2),ee);Be.position.set(gt,.4,Ie),j.add(Be)}ie("donda_living_pods","SATELLITE DOMES (6 PODS)",j,{x:0,y:1,z:2.5},{x:0,y:1.5,z:3.5});const ue=new yt,te=Z("donda_pergola_ring",12884549),me=new Ve(new yf(6.2,.25,8,32),te);me.rotation.x=Math.PI/2,me.position.y=2.4,ue.add(me),ie("donda_pergola_ring","RAIN HARVESTING RING",ue,{x:0,y:2.8,z:0},{x:0,y:4.5,z:0});const ye=new yt,we=new Ei({color:1713022,metalness:.8}),De=new Ve(new ti(.3,.4,5.5,8),we);De.position.set(0,2.75,0),ye.add(De),ie("donda_microgrid","CITY MICRO-GRID",ye,{x:0,y:3.5,z:0},{x:0,y:5.5,z:0})}else if(O.id==="rapid_emergency_pod"){const F=new yt,de=Z("pod_base_chassis",3031127),L=new Ve(new lt(4.8,.5,4.8),de);L.position.y=.25,F.add(L),ie("pod_base_chassis","ELEVATED BASE PLINTH",F,{x:0,y:-1,z:0},{x:0,y:-2,z:0});const w=new yt,V=Z("pod_bio_walls",3031127),ce=new Ve(new lt(4.2,2.8,4.2),V);ce.position.y=1.9,w.add(ce),ie("pod_bio_walls","FLATPACK BIO-WALLS",w,{x:0,y:.8,z:1.8},{x:0,y:0,z:3.5});const j=new yt,ee=Z("pod_origami_roof",9342601),ue=new Ve(new gf(3.6,2,4),ee);ue.position.set(0,4.3,0),ue.rotation.y=Math.PI/4,j.add(ue),ie("pod_origami_roof","ANGLED ORIGAMI ROOF",j,{x:0,y:2.2,z:0},{x:0,y:4,z:0});const te=new yt,me=Z("pod_glazing",6858170),ye=new Ve(new lt(2.4,.8,.2),me);ye.position.set(0,2.2,2.15),te.add(ye),ie("pod_glazing","LIGHT PORTS",te,{x:0,y:.5,z:2.5},{x:0,y:0,z:4.5});const we=new yt,De=new Ei({color:1713022,metalness:.8}),Re=new Ve(new lt(2,.08,1.4),De);Re.position.set(0,4.4,1.5),Re.rotation.x=.5,we.add(Re),ie("pod_utility_kit","12V EMERGENCY SOLAR KIT",we,{x:0,y:2,z:2},{x:0,y:3.5,z:3.5})}else if(O.id==="terrace_earth_apartments"){const F=new yt,de=Z("terrace_foundation",7829367),L=new Ve(new lt(11,.6,10),de);L.position.y=.3,F.add(L),ie("terrace_foundation","ZIGGURAT BASE PLINTH",F,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const w=new yt,V=Z("terrace_tier_walls",9147764),ce=new Ve(new lt(9.6,2.2,8.4),V);ce.position.set(0,1.7,0),w.add(ce);const j=new Ve(new lt(7.4,2,6.4),V);j.position.set(0,3.8,-1),w.add(j);const ee=new Ve(new lt(5,1.8,4.4),V);ee.position.set(0,5.7,-2),w.add(ee),ie("terrace_tier_walls","STEPPED WALL MATRIX",w,{x:0,y:.8,z:2.5},{x:0,y:0,z:4.5});const ue=new yt,te=Z("terrace_garden_roofs",13213798),me=new Ve(new lt(9.8,.25,2.4),te);me.position.set(0,2.85,3),ue.add(me);const ye=new Ve(new lt(7.6,.25,2.2),te);ye.position.set(0,4.85,1.2),ue.add(ye),ie("terrace_garden_roofs","CASCADING GARDEN DECKS",ue,{x:0,y:2.2,z:0},{x:0,y:4,z:0});const we=new yt,De=Z("terrace_panoramic_windows",6858170),Re=new Ve(new lt(8,1.4,.2),De);Re.position.set(0,1.7,4.25),we.add(Re);const Qe=new Ve(new lt(6.2,1.4,.2),De);Qe.position.set(0,3.8,2.25),we.add(Qe),ie("terrace_panoramic_windows","TERRACE GLAZING PORTALS",we,{x:0,y:.5,z:3.5},{x:0,y:0,z:5.5});const H=new yt,gt=new Ei({color:1713022,metalness:.8}),Ie=new Ve(new lt(4.6,.15,3.8),gt);Ie.position.set(0,6.7,-2),H.add(Ie),ie("terrace_utilities","URBAN ECO-GRID",H,{x:0,y:3,z:0},{x:0,y:5,z:0})}}return Ke.useEffect(()=>{if(!u.current||!p.current||!m.current)return;const O=u.current.clientWidth,K=u.current.clientHeight;m.current.aspect=O/K,m.current.updateProjectionMatrix(),p.current.setSize(O,K)},[c]),B?h.jsxs("div",{className:"w-full h-72 bg-yzy-obsidian border border-yzy-slate flex flex-col items-center justify-center p-6 text-center font-mono",children:[h.jsx(mg,{className:"w-8 h-8 text-yzy-warning mb-2"}),h.jsx("span",{className:"font-bold text-white text-sm uppercase",children:"2D ARCHITECTURAL MODE ACTIVE"}),h.jsx("span",{className:"text-xs text-yzy-ash max-w-sm mt-1",children:"Select materials in the matrix below to customize the build."})]}):h.jsxs("div",{className:`relative w-full transition-all duration-300 ${c?"h-52 sm:h-60 md:h-72 shadow-2xl ring-1 ring-yzy-bone/40":"h-80 sm:h-96 md:h-[480px]"} bg-yzy-obsidian border border-yzy-slate/70 overflow-hidden flex flex-col select-none`,children:[h.jsx("div",{ref:u,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none"}),h.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-none z-10",children:h.jsxs("div",{className:"flex items-center gap-1.5 bg-yzy-black/90 backdrop-blur-md px-2.5 py-1 border border-yzy-bone/40 shadow-lg",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"font-mono text-[9px] sm:text-xs tracking-widest text-white uppercase font-bold truncate max-w-[200px] sm:max-w-none",children:n?n.toUpperCase().replace(/_/g," "):"TAP 3D TO SELECT"})]})}),h.jsxs("div",{className:"absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-yzy-black/85 backdrop-blur-md px-2 py-1 border border-yzy-slate text-[10px] font-mono z-10",children:[h.jsx(Ly,{className:"w-3 h-3 text-yzy-warning"}),h.jsx("input",{type:"range",min:"0",max:"360",value:U,onChange:O=>P(Number(O.target.value)),className:"w-14 sm:w-20 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"}),h.jsxs("span",{className:"text-yzy-chalk w-5 text-right text-[9px]",children:[U,"°"]})]}),h.jsxs("div",{className:"absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-yzy-black/90 backdrop-blur-md px-2 py-1.5 border border-yzy-slate shadow-2xl z-10",children:[h.jsxs("button",{onClick:()=>{Ut(),x(!y)},className:`flex items-center gap-1 px-2 py-1 font-mono text-[9px] sm:text-xs tracking-wider transition-all ${y?"bg-yzy-bone text-yzy-black font-bold":"text-yzy-chalk hover:text-white"}`,children:[h.jsx(py,{className:"w-3 h-3"}),h.jsx("span",{children:y?"FOCUS":"FULL"})]}),h.jsxs("button",{onClick:()=>{Ut(),b(!E)},className:`flex items-center gap-1 px-2 py-1 font-mono text-[9px] sm:text-xs tracking-wider transition-all ${E?"bg-yzy-neon text-yzy-black font-bold":"text-yzy-chalk hover:text-white"}`,children:[h.jsx(tf,{className:"w-3 h-3"}),h.jsx("span",{children:"EXPLODE"})]}),h.jsx("button",{onClick:()=>{Ut(),M(!_)},className:`px-2 py-1 font-mono text-[9px] sm:text-xs transition-all ${_?"text-yzy-neon font-bold bg-yzy-slate/60":"text-yzy-ash hover:text-white"}`,children:"CAD"}),h.jsx("button",{onClick:()=>{Ut(),$(!R)},className:`px-1.5 py-1 font-mono text-[9px] transition-all ${R?"text-white":"text-yzy-ash hover:text-white"}`,children:h.jsx(yg,{className:`w-3 h-3 ${R?"animate-spin":""}`,style:{animationDuration:"10s"}})})]})]})}function K1({infrastructures:s,selectedInfra:e,onSelectInfra:n}){const[r,o]=Ke.useState(!1);return h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar",children:s.map(c=>{const u=e.id===c.id;return h.jsxs("button",{onClick:()=>{Va(),n(c)},className:`shrink-0 px-3.5 py-2 border transition-all text-left flex flex-col justify-between min-w-[135px] sm:min-w-[160px] ${u?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-md font-bold":"bg-yzy-obsidian/70 text-yzy-chalk border-yzy-slate hover:border-yzy-ash hover:bg-yzy-charcoal"}`,children:[h.jsxs("div",{className:"flex items-center justify-between w-full mb-0.5",children:[h.jsx("span",{className:`font-mono text-[9px] uppercase tracking-wider ${u?"text-yzy-black/70":"text-yzy-ash"}`,children:c.code}),u&&h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-yzy-black"})]}),h.jsx("span",{className:"font-display text-xs sm:text-sm font-bold truncate block",children:c.name}),h.jsxs("div",{className:"flex items-center justify-between mt-1 font-mono text-[9px]",children:[h.jsxs("span",{className:u?"text-yzy-black/80":"text-yzy-ash",children:[c.sqft," SQFT"]}),h.jsxs("span",{className:`font-bold ${u?"text-yzy-black":"text-yzy-neon"}`,children:["$",(c.estimatedCostMin/1e3).toFixed(0),"k+"]})]})]},c.id)})}),h.jsxs("div",{className:"bg-yzy-obsidian/90 border border-yzy-slate/70 p-2 sm:p-2.5 flex items-center justify-between gap-2 text-xs font-mono",children:[h.jsxs("div",{className:"flex items-center gap-2 truncate",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon shrink-0 animate-pulse"}),h.jsx("span",{className:"font-display font-bold text-white text-xs sm:text-sm uppercase truncate",children:e.name}),h.jsxs("span",{className:"text-yzy-ash text-[10px] hidden sm:inline truncate",children:["// ",e.subtitle]})]}),h.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[h.jsxs("span",{className:"text-yzy-neon font-bold text-xs",children:["$",e.estimatedCostMin.toLocaleString()," - $",e.estimatedCostMax.toLocaleString()]}),h.jsxs("button",{onClick:()=>{Ut(),o(!r)},className:"flex items-center gap-1 text-[10px] text-yzy-ash hover:text-white bg-yzy-black px-2 py-1 border border-yzy-slate transition-colors",children:[h.jsx("span",{children:r?"HIDE":"INTEL"}),r?h.jsx(pg,{className:"w-3 h-3"}):h.jsx(hg,{className:"w-3 h-3"})]})]})]}),r&&h.jsxs("div",{className:"bg-yzy-black border border-yzy-slate p-3 sm:p-4 text-xs font-mono flex flex-col gap-2.5 animate-fadeIn",children:[h.jsx("p",{className:"text-yzy-chalk/90 leading-relaxed text-xs",children:e.description}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-yzy-slate/60 text-[10px]",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash block uppercase",children:"FOOTPRINT"}),h.jsxs("span",{className:"font-bold text-white",children:[e.sqft," SQFT (",e.diameter,")"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash block uppercase",children:"TIMELINE"}),h.jsxs("span",{className:"font-bold text-white",children:[e.buildTimeDays," DAYS"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash block uppercase",children:"OCCUPANCY"}),h.jsx("span",{className:"font-bold text-white",children:e.occupancy})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash block uppercase",children:"WIND / SEISMIC"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:[e.windResistance.split(" ")[0]," MPH / ",e.seismicZone.split(" ")[0]]})]})]})]})]})}function Q1({infrastructure:s,selectedPartMaterials:e,onSelectPartMaterial:n,activePartId:r,setActivePartId:o,materialsList:c}){const[u,f]=Ke.useState(!1),p=Mi[s.id]||Mi.yzy_mono_dome,m=p.find(E=>E.id===r)||p[0],v=[...c,...ef],S=e[m.id]||m.defaultMaterial,_=v.find(E=>E.id===S)||c[0],M=v.filter(E=>m.allowedMaterials.includes(E.id));return h.jsxs("div",{className:"flex flex-col gap-3 bg-yzy-obsidian border border-yzy-bone/40 p-3 sm:p-5 shadow-2xl",children:[h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar",children:p.map(E=>{const b=E.id===m.id,y=e[E.id]||E.defaultMaterial,x=v.find(U=>U.id===y);return h.jsxs("button",{onClick:()=>{Va(),o(E.id)},className:`shrink-0 px-3 py-2 text-left border transition-all flex flex-col justify-between min-w-[125px] sm:min-w-[150px] ${b?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-md font-bold":"bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash hover:bg-yzy-charcoal"}`,children:[h.jsx("span",{className:`font-mono text-[8px] sm:text-[9px] uppercase tracking-wider block ${b?"text-yzy-black/70":"text-yzy-ash"}`,children:E.category}),h.jsx("span",{className:`font-display text-xs font-bold truncate block ${b?"text-yzy-black":"text-yzy-bone"}`,children:E.name.split("(")[0]}),h.jsx("span",{className:`font-mono text-[9px] truncate block mt-0.5 font-semibold ${b?"text-yzy-black/90":"text-yzy-neon"}`,children:x?.shortName||"Custom"})]},E.id)})}),h.jsxs("div",{className:"flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center justify-between font-mono text-[10px] text-yzy-ash uppercase",children:[h.jsxs("span",{children:["SELECT MATERIAL FOR ",m.name.split("(")[0],":"]}),h.jsx("span",{className:"text-yzy-neon font-bold",children:_.shortName})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2",children:M.map(E=>{const b=(e[m.id]||m.defaultMaterial)===E.id,y=Math.round(m.surfaceAreaSqft*E.costPerSqFt);return h.jsxs("div",{onClick:()=>{Va(),n(m.id,E.id)},className:`cursor-pointer p-2.5 sm:p-3 border transition-all flex flex-col justify-between relative group ${b?"bg-yzy-black border-yzy-bone ring-2 ring-yzy-bone/60 shadow-lg":"bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-black/90"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"w-3 h-3 rounded-full border border-black/50 shrink-0",style:{backgroundColor:E.colorHex}}),b&&h.jsx("span",{className:"font-mono text-[8px] font-bold bg-yzy-bone text-yzy-black px-1.5 py-0.2",children:"ACTIVE"})]}),h.jsx("h4",{className:"font-display text-xs sm:text-sm font-bold text-white leading-tight mb-1 group-hover:text-yzy-bone",children:E.shortName||E.name})]}),h.jsxs("div",{className:"pt-1.5 border-t border-yzy-slate/60 flex items-center justify-between font-mono text-[10px]",children:[h.jsxs("span",{className:"text-yzy-ash",children:["$",y.toLocaleString()]}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.unitCost.split("(")[0]})]})]},E.id)})})]}),h.jsxs("div",{className:"pt-1 border-t border-yzy-slate/60 flex flex-col gap-2",children:[h.jsxs("button",{onClick:()=>{Ut(),f(!u)},className:"w-full flex items-center justify-between bg-yzy-black p-2.5 border border-yzy-slate hover:border-yzy-ash text-xs font-mono transition-colors",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(ud,{className:"w-3.5 h-3.5 text-yzy-neon"}),h.jsxs("span",{className:"font-bold text-white uppercase",children:[_.name," // ARCHITECTURAL INTEL"]})]}),h.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-yzy-ash",children:[h.jsx("span",{children:u?"HIDE DETAILS":"VIEW PROS & SOURCING"}),u?h.jsx(pg,{className:"w-3.5 h-3.5"}):h.jsx(hg,{className:"w-3.5 h-3.5"})]})]}),u&&h.jsxs("div",{className:"bg-yzy-black border border-yzy-slate p-3 sm:p-4 flex flex-col gap-3 font-mono text-xs animate-fadeIn",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[h.jsxs("div",{className:"p-2.5 bg-yzy-obsidian border border-yzy-neon/30 flex flex-col gap-1.5",children:[h.jsxs("span",{className:"text-[11px] font-bold text-yzy-neon flex items-center gap-1 uppercase",children:[h.jsx(fg,{className:"w-3.5 h-3.5"})," ADVANTAGES (PROS)"]}),h.jsx("ul",{className:"flex flex-col gap-1 text-[11px] text-yzy-chalk/90",children:_.pros?.map((E,b)=>h.jsxs("li",{className:"flex items-start gap-1",children:[h.jsx("span",{className:"text-yzy-neon font-bold",children:"✓"}),h.jsx("span",{children:E})]},b))})]}),h.jsxs("div",{className:"p-2.5 bg-yzy-obsidian border border-yzy-warning/30 flex flex-col gap-1.5",children:[h.jsxs("span",{className:"text-[11px] font-bold text-yzy-warning flex items-center gap-1 uppercase",children:[h.jsx(Oy,{className:"w-3.5 h-3.5"})," TRADEOFFS & CONSIDERATIONS"]}),h.jsx("ul",{className:"flex flex-col gap-1 text-[11px] text-yzy-chalk/90",children:_.cons?.map((E,b)=>h.jsxs("li",{className:"flex items-start gap-1",children:[h.jsx("span",{className:"text-yzy-warning font-bold",children:"!"}),h.jsx("span",{children:E})]},b))})]})]}),_.supplier&&h.jsxs("div",{className:"bg-yzy-charcoal/80 p-2.5 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block",children:"DIRECT SOURCING ORDER:"}),h.jsxs("span",{className:"font-bold text-white",children:[_.supplier.name," (",_.supplier.location,")"]}),h.jsx("span",{className:"text-yzy-ash text-[10px] block",children:_.supplier.contact})]}),h.jsxs("div",{className:"flex items-center gap-3 text-right shrink-0",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[8px] text-yzy-ash uppercase block",children:"EXACT PRICE"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:_.supplier.exactPrice.split("(")[0]})]}),h.jsxs("div",{className:"border-l border-yzy-slate pl-2.5",children:[h.jsx("span",{className:"text-[8px] text-yzy-ash uppercase block",children:"LEAD TIME"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:_.supplier.leadTime})]})]})]})]})]})]})}function J1({materialsList:s}){const[e,n]=Ke.useState(""),[r,o]=Ke.useState("ALL"),[c,u]=Ke.useState(null),f=["ALL","EARTH & SOIL","BIO-MASS","CIRCULAR MINERAL","RENEWABLE WOOD","FOAMED MINERAL","CIRCULAR POLYMER"],p=s.filter(m=>{const v=m.name.toLowerCase().includes(e.toLowerCase())||m.description.toLowerCase().includes(e.toLowerCase())||m.sourcingMethod.toLowerCase().includes(e.toLowerCase()),S=r==="ALL"||m.category===r;return v&&S});return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"02 // MATERIAL ENCYCLOPEDIA & REPOSITORY"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"SUSTAINABLE & BIO-CIRCULAR MATERIALS"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Transparent scientific, economic, and regional sourcing telemetry for zero-carbon architecture."})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[h.jsxs("div",{className:"relative w-full sm:w-80",children:[h.jsx(vg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),h.jsx("input",{type:"text",placeholder:"Search materials, soil types, binders...",value:e,onChange:m=>n(m.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:f.map(m=>h.jsx("button",{onClick:()=>{Ut(),o(m)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${r===m?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:m},m))})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:p.map(m=>h.jsxs("div",{className:"p-5 bg-yzy-obsidian/60 border border-yzy-slate hover:border-yzy-ash transition-all flex flex-col justify-between group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:m.category}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash",children:m.badge})]}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1 group-hover:text-white transition-colors",children:m.name}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:m.description})]}),h.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-yzy-slate/60 text-[11px] font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"ESTIMATED COST:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:m.unitCost})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"CARBON OFFSET:"}),h.jsx("span",{className:`font-bold ${m.carbonImpact<=0?"text-yzy-neon":"text-yzy-warning"}`,children:m.carbonImpact<=0?`${m.carbonImpact} kg CO2/m²`:`+${m.carbonImpact} kg CO2/m²`})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"THERMAL R-VALUE:"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:["R-",m.thermalRValue]})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"COMPRESSIVE STRENGTH:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:m.compressiveStrength})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"FIRE RESISTANCE:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:m.fireRating})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"EST. LIFESPAN:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:m.lifespan})]}),h.jsxs("div",{className:"bg-yzy-black/80 p-2.5 border border-yzy-slate/60 mt-2",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block mb-1",children:"LOCAL HARVESTING PROTOCOL:"}),h.jsx("p",{className:"text-[10px] text-yzy-chalk leading-normal",children:m.sourcingMethod})]}),m.supplier&&h.jsxs("div",{className:"bg-yzy-charcoal/80 p-2.5 border border-yzy-slate mt-1 text-[10px] font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center mb-1",children:[h.jsx("span",{className:"text-yzy-neon font-bold text-[9px] uppercase tracking-wider",children:"PRIMARY SUPPLIER ORDER SOURCE:"}),h.jsx("span",{className:"text-yzy-ash text-[9px]",children:m.supplier.location.split("/")[0]})]}),h.jsx("span",{className:"font-bold text-yzy-bone text-xs block",children:m.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[10px] block",children:m.supplier.contact}),h.jsxs("div",{className:"flex justify-between items-center text-[9px] pt-1.5 border-t border-yzy-slate/40 mt-1",children:[h.jsxs("span",{className:"text-yzy-chalk font-bold",children:["PRICE: ",m.supplier.exactPrice.split("(")[0]]}),h.jsxs("span",{className:"text-yzy-ash",children:["LEAD: ",m.supplier.leadTime]})]})]})]})]},m.id))})]})}const rg=[{id:"mycelium_lounge_chair",name:"YZY BIO-FOAM MYCELIUM LOUNGE",category:"LIVING & SEATING",tagline:"100% bio-grown sculptural ergonomic chair molded from fungal roots and hemp substrate.",description:"A monolithic single-piece lounge chair grown in 7 days inside a 3D-printed composite mold. Ultra-lightweight (14 lbs) yet structural, with a velvety organic tactile finish sealed with natural beeswax and carnauba.",material:"Grown Ganoderma Mycelium + Industrial Hemp Hurds",carbonImpact:-32,dimensions:'34" W x 32" D x 29" H (Seat Height 14")',weight:"14 lbs (6.3 kg)",aestheticStyle:"Monolithic Organic Brutalism / Yeezy Aesthetic",diyFeasibility:"HIGH (Can be grown using DIY mold & spawn kit)",retailPrice:"$340.00 (Crafted) / $65.00 (DIY Inoculum Kit)",supplier:{name:"Ecovative Bio-Fabrication Lab / Grown.bio",location:"Green Island, NY / Heerewaarden, Netherlands",contact:"furniture@ecovative.com | +1 (518) 273-3753",website:"grown.bio / ecovative.com",exactPrice:"$340.00 fully cured chair or $65.00 for 50L bulk substrate + mold CAD",leadTime:"10 Days Direct Dispatch"},sustainabilityNote:"100% home-compostable at end of life. Zero petroleum, zero volatile organic compounds (VOCs)."},{id:"rammed_earth_desk",name:"MONOLITHIC TAMPED EARTH EXECUTIVE DESK",category:"OFFICE & STUDIO",tagline:"Massive striated earth slab desk with integrated wireless inductive charging stone.",description:"A striking, heavy brutalist workstation cast from compacted local subsoil, volcanic pumice, and hydraulic lime. Features natural horizontal sedimentation bands and a silky smooth diamond-burnished top surface.",material:"Compacted Subsoil + Volcanic Pozzolan + Steel Reinforcement Tie",carbonImpact:-18,dimensions:'72" L x 34" W x 30" H',weight:"480 lbs (Permanent Studio Centerpiece)",aestheticStyle:"Stark Architectural Earth Sculpture",diyFeasibility:"INTERMEDIATE (Slipform wooden casting)",retailPrice:"$850.00 (Precast Slab) / $120.00 (DIY On-Site Casting)",supplier:{name:"Studio Earthen Works / Local Slipform Custom Cast",location:"Austin, Texas / Regional Masonry Studios",contact:"craft@earthfurnish.org",website:"sirewall.com / custom-earth",exactPrice:"$850.00 precast and shipped in 2 sections or $120 for local materials + rebar",leadTime:"14 Days Curing Time"},sustainabilityNote:"Zero formaldehyde glues, zero toxic resins. Emits zero electromagnetic interference."},{id:"clt_studio_workbench",name:"MASS TIMBER (CLT) MODULAR WORKBENCH",category:"OFFICE & STUDIO",tagline:"Solid 5-ply spruce mass timber tabletop resting on brutalist notch-joint legs.",description:"Manufactured from FSC-certified cross-laminated mass timber cut with precision 5-axis CNC routering. Assembles with zero screws or metal hardware using ancient Japanese sliding dovetail joinery.",material:"FSC-Certified Cross-Laminated Timber (CLT)",carbonImpact:-85,dimensions:'84" L x 38" W x 30" H (Thickness 3.5")',weight:"165 lbs",aestheticStyle:"Industrial Raw Minimalist Timber",diyFeasibility:"NOVICE (Zero-hardware toolless slide assembly)",retailPrice:"$490.00",supplier:{name:"SmartLam Custom Timber Furnishings",location:"Columbia Falls, Montana",contact:"studio@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:"$490.00 flatpack crate with interlocking joinery",leadTime:"5-7 Business Days"},sustainabilityNote:"Locks away 85kg of carbon for 100+ years. Finished with organic raw linseed oil."},{id:"hemp_acoustic_screen",name:"HEMP-FIBER ACOUSTIC PRIVACY PARTITION",category:"ACOUSTICS & ACCESSORIES",tagline:"Sound-absorbing freestanding room divider made from needle-punched industrial hemp felt.",description:"Designed for open-plan studios, loft apartments, and communal workspaces. Absorbs 85% of ambient vocal frequencies (NRC 0.85) to create intimate quiet zones while purifying air naturally.",material:"100% Cleaned Industrial Hemp Fiber + Raw Cast Iron Base",carbonImpact:-22,dimensions:'48" W x 18" D x 72" H',weight:"28 lbs",aestheticStyle:"Earthy Textured Minimalist Screen",diyFeasibility:"NOVICE FRIENDLY",retailPrice:"$210.00",supplier:{name:"Hempitecture Acoustic Lines",location:"Jerome, Idaho",contact:"acoustics@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com/hempwool",exactPrice:"$210.00 per panel with modular ganging brackets",leadTime:"3-5 Business Days"},sustainabilityNote:"Hypoallergenic, breathable, zero fiberglass itch, 100% compostable fiber."},{id:"recycled_poly_stool",name:"CIRCULAR OCEAN POLYMER MONOBLOC STOOL",category:"LIVING & SEATING",tagline:"Indestructible brutalist cylinder stool forged from 45 lbs of upcycled ocean plastic.",description:"Post-consumer plastic milk jugs, bottle caps, and marine debris washed, shredded, and compression-molded into a solid monolithic cylindrical plinth. Can be used as a stool, side table, or outdoor seating.",material:"100% Recycled HDPE / PP Ocean Plastic",carbonImpact:-42,dimensions:'16" Diameter x 18" Height',weight:"24 lbs",aestheticStyle:"Raw Monolithic Terrazzo Texture",diyFeasibility:"COMMUNITY RECYCLER (With Precious Plastic injector)",retailPrice:"$125.00 (Crafted) / $15.00 (Community DIY)",supplier:{name:"ByFusion / Precious Plastic Open Network",location:"Los Angeles, California / Global Micro-Factories",contact:"sales@byfusion.com | +1 (310) 906-0300",website:"byfusion.com / preciousplastic.com",exactPrice:"$125.00 direct or $15 raw shredded plastic flake with local mold",leadTime:"3-5 Days"},sustainabilityNote:"Diverts 2,200 plastic bottles from landfills and oceans per single stool. 100% recyclable indefinitely."},{id:"geopolymer_sink_counter",name:"GEOPOLYMER POZZOLAN MONOLITHIC SINK",category:"KITCHEN & SANITARY",tagline:"Stark industrial mineral basin and integrated countertop with zero Portland cement.",description:"Cast as a single seamless unit with an integrated ramp drain. Highly resistant to stains, thermal shock, and chemicals, with a tactile matte stone texture matching YEEZY interior architecture.",material:"Slag/Fly-Ash Alkali Geopolymer Concrete + Crushed Basalt",carbonImpact:-14,dimensions:'48" L x 22" W x 6" Basin Depth',weight:"140 lbs",aestheticStyle:"Brutalist Seamless Stone Basin",diyFeasibility:"INTERMEDIATE (Silicone/Melamine mold pour)",retailPrice:"$390.00",supplier:{name:"Wagners Earth Friendly Precast / Local Artisan Cast",location:"US & Global Masonry Cooperatives",contact:"custom@wagner.com.au",website:"wagner.com.au",exactPrice:"$390.00 precast or $75.00 in raw geopolymer dry mix + activator",leadTime:"7 Days"},sustainabilityNote:"Emits 85% less CO2 than traditional concrete sinks. Cures naturally with zero heat kiln firing."},{id:"bamboo_daybed",name:"ENGINEERED BAMBOO MINIMALIST DAYBED",category:"LIVING & SEATING",tagline:"Low-slung Japanese-modern platform bed crafted from high-tensile engineered bamboo.",description:"A serene, ground-hugging platform daybed resting 8 inches off the floor. Features woven natural reed tatami inserts and hidden perimeter LED channel for ambient warm indirect lighting.",material:"Cross-Strand Dendrocalamus Bamboo Culms + Coconut Coir Cushioning",carbonImpact:-70,dimensions:'82" L x 64" W x 10" H (Queen Standard Platform)',weight:"95 lbs",aestheticStyle:"Zen Brutalist Low-Slung Sanctuary",diyFeasibility:"NOVICE / COMMUNITY HAND CRAFT",retailPrice:"$580.00",supplier:{name:"BamCore Furniture Studio / Guadua Crafts",location:"Windsor, California",contact:"orders@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:"$580.00 flatpack with natural organic latex/coir mattress",leadTime:"5-7 Days Freight"},sustainabilityNote:"Bamboo regrows to full maturity in only 3 years. Rapidly absorbs more carbon than hardwood forests."},{id:"aircrete_pedestal_table",name:"AIRCRETE SCULPTURAL ACCENT PEDESTAL",category:"LIVING & SEATING",tagline:"Ultra-lightweight aerated mineral plinth table with a smooth chalk-white pumice feel.",description:"Looks like a massive 200 lb solid carved limestone block, but weighs only 22 lbs due to micro-cellular aircrete bubbles. Easily rearranged and suitable for indoor and outdoor terrace spaces.",material:"Aerated Foamed Mineral Matrix + Silicate Polish",carbonImpact:-6,dimensions:'20" Diameter x 20" Height (Cylindrical or Hexagonal)',weight:"22 lbs (Ultra Lightweight)",aestheticStyle:"Raw Pumice / Chalk Sculptural Monolith",diyFeasibility:"NOVICE (Cast in standard bucket with foam wand)",retailPrice:"$140.00 (Crafted) / $18.00 (DIY Single Cast)",supplier:{name:"Domegaia Sculptural Division",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"furniture@domegaia.com",website:"domegaia.com",exactPrice:"$140.00 or $18 DIY mix with 1 cup bio-foam concentrate + lime",leadTime:"3-5 Business Days"},sustainabilityNote:"100% inorganic mineral structure. Completely immune to water rot, termites, and wildfire."},{id:"lime_earth_wall_finish",name:"ROMAN HYDRAULIC LIME & OCHRE FINISH SYSTEM",category:"ACOUSTICS & ACCESSORIES",tagline:"Breathable mineral plaster colored with raw volcanic earth and iron oxide pigments.",description:"Replaces toxic petrochemical paint with ancient lime plaster that petrifies over time by absorbing ambient CO2. Naturally inhibits mold, absorbs cooking and body odors, and regulates humidity.",material:"St. Astier Natural Hydraulic Lime (NHL 2.0) + French Raw Ochre Pigments",carbonImpact:-25,dimensions:"Covers 250 sq ft per 55 lb bag",weight:"55 lbs (Dry Powder Bag)",aestheticStyle:"Soft Velvety Venetian Earth Texture",diyFeasibility:"NOVICE / ARTISAN TROWEL",retailPrice:"$48.00 per 55 lb bag ($0.19 / sq ft)",supplier:{name:"Limestrong Plasters / St. Astier North America",location:"Portland, Oregon / Global Masonry Distribution",contact:"orders@limestrong.com | +1 (541) 505-8888",website:"limestrongart.com / stastier.co.uk",exactPrice:"$48.00 per 55 lb bag + $12 earth pigment pack",leadTime:"2-3 Days Shipping"},sustainabilityNote:"Zero VOC, hypoallergenic, and petrifies into genuine stone over decades."}];function ew({selectedPiece:s,activeFinish:e,onSelectFinish:n}){const r=Ke.useRef(null),o=Ke.useRef(null),c=Ke.useRef(null),u=Ke.useRef(null),f=Ke.useRef(null),[p,m]=Ke.useState(!0),[v,S]=Ke.useState(!1),[_,M]=Ke.useState(!1),E=[{id:"raw_earth",name:"RAW EARTH",colorHex:"#A07855",roughness:.9,metalness:.05},{id:"bone_chalk",name:"BONE CHALK",colorHex:"#EAEAE6",roughness:.85,metalness:.05},{id:"obsidian_black",name:"OBSIDIAN",colorHex:"#181818",roughness:.6,metalness:.2},{id:"amber_timber",name:"MASS TIMBER",colorHex:"#C9A066",roughness:.7,metalness:.1},{id:"hemp_moss",name:"HEMP MOSS",colorHex:"#8B9574",roughness:.95,metalness:.02},{id:"ocean_poly",name:"OCEAN POLY",colorHex:"#2E4057",roughness:.5,metalness:.3}],b=E.find(x=>x.id===e)||E[0];Ke.useEffect(()=>{if(r.current)try{const x=r.current.clientWidth||340,U=r.current.clientHeight||340,P=new Jg;P.background=new _t(657930),P.fog=new jl(657930,.035),o.current=P;const R=new Vn(42,x/U,.1,100);R.position.set(4.5,3.5,5),R.lookAt(0,1,0),u.current=R;const $=new Qg({antialias:!0,alpha:!0});for($.setSize(x,U),$.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),$.shadowMap.enabled=!0,$.shadowMap.type=rf,c.current=$;r.current.firstChild;)r.current.removeChild(r.current.firstChild);r.current.appendChild($.domElement);const B=new i0(16,16,3355443,1447446);B.position.y=-.01,P.add(B);const k=new n0(16777215,.85);P.add(k);const G=new zl(16775146,2.2);G.position.set(5,8,5),G.castShadow=!0,P.add(G);const N=new zl(4482730,.7);N.position.set(-5,4,-4),P.add(N);const A=new yt;P.add(A),f.current=A,y(s.id,b,v,A);let O=!1,K={x:0,y:0};const W=L=>{O=!0;const w=L.clientX||L.touches&&L.touches[0].clientX,V=L.clientY||L.touches&&L.touches[0].clientY;K={x:w,y:V}},se=L=>{if(!O)return;const w=L.clientX||L.touches&&L.touches[0].clientX,V=L.clientY||L.touches&&L.touches[0].clientY,ce=w-K.x;A&&(A.rotation.y+=ce*.01),K={x:w,y:V}},re=()=>{O=!1},Z=$.domElement;Z.addEventListener("mousedown",W),Z.addEventListener("mousemove",se),window.addEventListener("mouseup",re),Z.addEventListener("touchstart",W,{passive:!0}),Z.addEventListener("touchmove",se,{passive:!0}),window.addEventListener("touchend",re);let ie;const F=()=>{ie=requestAnimationFrame(F),p&&!O&&A&&(A.rotation.y+=.005),$.render(P,R)};F();const de=()=>{if(!r.current||!$||!R)return;const L=r.current.clientWidth,w=r.current.clientHeight||340;R.aspect=L/w,R.updateProjectionMatrix(),$.setSize(L,w)};return window.addEventListener("resize",de),()=>{cancelAnimationFrame(ie),window.removeEventListener("resize",de),window.removeEventListener("mouseup",re),window.removeEventListener("touchend",re),Z.removeEventListener("mousedown",W),Z.removeEventListener("mousemove",se),Z.removeEventListener("touchstart",W),Z.removeEventListener("touchmove",se),$.dispose()}}catch(x){console.error("Furniture WebGL error:",x),M(!0)}},[s.id]),Ke.useEffect(()=>{f.current&&y(s.id,b,v,f.current)},[e,v,s]);function y(x,U,P,R){for(;R.children.length>0;){const G=R.children[0];R.remove(G),G.geometry&&G.geometry.dispose(),G.material&&(Array.isArray(G.material)?G.material.forEach(N=>N.dispose()):G.material.dispose())}const $=parseInt(U.colorHex.replace("#","0x")),B=new Ei({color:$,roughness:U.roughness,metalness:U.metalness,wireframe:P,flatShading:!0}),k=new Ei({color:1118481,roughness:.5,metalness:.8});if(x==="mycelium_lounge_chair"){const G=new ti(1.2,1.4,.4,24),N=new Ve(G,B);N.position.y=.6,N.castShadow=!0,R.add(N);const A=new ti(1.3,1.3,1.2,24,1,!1,0,Math.PI),O=new Ve(A,B);O.position.set(0,1.2,-.4),O.rotation.y=Math.PI/2,O.castShadow=!0,R.add(O);const K=new ti(1,1.2,.4,16),W=new Ve(K,B);W.position.y=.2,R.add(W)}else if(x==="rammed_earth_desk"){const G=new lt(3.6,.3,1.8),N=new Ve(G,B);N.position.y=1.4,N.castShadow=!0,R.add(N);const A=new lt(.4,1.3,1.6),O=new Ve(A,B);O.position.set(-1.5,.65,0),O.castShadow=!0,R.add(O);const K=new Ve(A,B);K.position.set(1.5,.65,0),K.castShadow=!0,R.add(K);const W=new lt(.8,.05,.8),se=new Ve(W,k);se.position.set(1,1.56,-.2),R.add(se)}else if(x==="clt_studio_workbench"){const G=new lt(4,.25,2),N=new Ve(G,B);N.position.y=1.35,N.castShadow=!0,R.add(N);for(let A of[-1.7,1.7])for(let O of[-.8,.8]){const K=new lt(.25,1.25,.25),W=new Ve(K,B);W.position.set(A,.62,O),W.castShadow=!0,R.add(W)}}else if(x==="hemp_acoustic_screen"){const G=new lt(2.2,3.2,.15),N=new Ve(G,B);N.position.y=1.65,N.castShadow=!0,R.add(N);const A=new lt(2.4,.1,.8),O=new Ve(A,k);O.position.y=.05,R.add(O)}else if(x==="recycled_poly_stool"){const G=new ti(.65,.75,1.1,16),N=new Ve(G,B);N.position.y=.55,N.castShadow=!0,R.add(N)}else if(x==="geopolymer_sink_counter"){const G=new lt(2.6,.6,1.4),N=new Ve(G,B);N.position.y=1.1,N.castShadow=!0,R.add(N);const A=new lt(1.4,.25,.9),O=new Ve(A,k);O.position.set(0,1.3,0),R.add(O);const K=new lt(2.4,.8,1.2),W=new Ve(K,B);W.position.y=.4,R.add(W)}else if(x==="bamboo_daybed"){const G=new lt(4,.3,2.8),N=new Ve(G,B);N.position.y=.25,N.castShadow=!0,R.add(N);const A=new lt(3.6,.35,2.4),O=new Ve(A,k);O.position.y=.55,R.add(O)}else{const G=new ti(.7,.7,1.2,6),N=new Ve(G,B);N.position.y=.6,N.castShadow=!0,R.add(N)}}return _?h.jsxs("div",{className:"w-full h-64 bg-yzy-obsidian border border-yzy-slate flex flex-col items-center justify-center p-6 text-center font-mono",children:[h.jsx(mg,{className:"w-8 h-8 text-yzy-warning mb-2"}),h.jsx("span",{className:"font-bold text-white text-sm uppercase",children:"3D PREVIEW UNAVAILABLE"}),h.jsx("span",{className:"text-xs text-yzy-ash max-w-sm mt-1",children:"Select finishes and review piece specifications below."})]}):h.jsxs("div",{className:"relative w-full h-72 sm:h-80 md:h-96 bg-yzy-obsidian border border-yzy-slate overflow-hidden flex flex-col select-none",children:[h.jsx("div",{ref:r,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-0.5 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon animate-pulse"}),h.jsxs("span",{className:"font-mono text-xs tracking-widest text-white uppercase font-bold",children:["3D STUDIO VIEW // ",s.name]})]}),h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash",children:["DRAG TO ROTATE 360° | FINISH: ",b.name]})]}),h.jsxs("div",{className:"absolute bottom-3 right-3 flex items-center gap-1 bg-yzy-black/90 backdrop-blur-md p-1.5 border border-yzy-slate z-10 overflow-x-auto max-w-[70%]",children:[h.jsx("span",{className:"font-mono text-[8px] text-yzy-ash uppercase tracking-wider hidden sm:inline mr-1",children:"FINISH:"}),E.map(x=>h.jsx("button",{onClick:()=>{Ut(),n(x.id)},style:{backgroundColor:x.colorHex},className:`w-5 h-5 rounded-none border transition-all ${e===x.id?"ring-2 ring-white scale-110 border-white":"border-black/50 opacity-80 hover:opacity-100"}`,title:x.name},x.id))]}),h.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-1.5 bg-yzy-black/90 backdrop-blur-md px-2 py-1 border border-yzy-slate z-10 font-mono text-[10px]",children:[h.jsx("button",{onClick:()=>{Ut(),m(!p)},className:`px-1.5 py-0.5 ${p?"text-white":"text-yzy-ash"}`,children:h.jsx(yg,{className:`w-3.5 h-3.5 ${p?"animate-spin":""}`,style:{animationDuration:"8s"}})}),h.jsx("button",{onClick:()=>{Ut(),S(!v)},className:`px-1.5 py-0.5 ${v?"text-yzy-neon font-bold":"text-yzy-ash"}`,children:"CAD"})]})]})}function tw(){const[s,e]=Ke.useState(rg[0]),[n,r]=Ke.useState("raw_earth"),[o,c]=Ke.useState("ALL"),[u,f]=Ke.useState(""),[p,m]=Ke.useState(null),v=["ALL","LIVING & SEATING","OFFICE & STUDIO","ACOUSTICS & ACCESSORIES","KITCHEN & SANITARY"],S=rg.filter(E=>{const b=o==="ALL"||E.category===o,y=E.name.toLowerCase().includes(u.toLowerCase())||E.description.toLowerCase().includes(u.toLowerCase())||E.material.toLowerCase().includes(u.toLowerCase())||E.supplier.name.toLowerCase().includes(u.toLowerCase());return b&&y}),_=E=>{Wa();const b=`PIECE: ${E.name}
MATERIAL: ${E.material}
PRICE: ${E.retailPrice}
SUPPLIER: ${E.supplier.name} (${E.supplier.location})
CONTACT: ${E.supplier.contact}
WEBSITE: ${E.supplier.website}`;navigator.clipboard.writeText(b),m(E.id),setTimeout(()=>m(null),2500)},M=E=>{Va(),e(E),window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"06 // 3D SUSTAINABLE INTERIOR ARCHITECTURE & FURNITURE STUDIO"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"ECO-FRIENDLY BRUTALIST FURNITURE & STUDIO PIECES"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Interactive 3D preview of circular bio-composite furniture matching the YEEZY aesthetic."})]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx(ew,{selectedPiece:s,activeFinish:n,onSelectFinish:r}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"ACTIVE 3D MODEL"}),h.jsx("span",{className:"font-bold text-white truncate block",children:s.name})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"EST. PRICE"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:s.retailPrice.split("/")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"CARBON OFFSET"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:[s.carbonImpact," kg CO2"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"WEIGHT & DIMS"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:s.weight})]})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[h.jsxs("div",{className:"relative w-full sm:w-80",children:[h.jsx(vg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),h.jsx("input",{type:"text",placeholder:"Search furniture, desks, seating, sinks...",value:u,onChange:E=>f(E.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:v.map(E=>h.jsx("button",{onClick:()=>{Ut(),c(E)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${o===E?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone shadow-sm":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:E},E))})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:S.map(E=>{const b=s.id===E.id;return h.jsxs("div",{onClick:()=>M(E),className:`cursor-pointer p-5 border transition-all flex flex-col justify-between group relative ${b?"bg-yzy-obsidian border-yzy-bone ring-2 ring-yzy-bone/40 shadow-xl":"bg-yzy-obsidian/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-obsidian/90"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:E.category}),b?h.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5",children:[h.jsx(Kp,{className:"w-3 h-3"})," INSPECTING IN 3D"]}):h.jsxs("span",{className:"font-mono text-[9px] text-yzy-neon font-bold flex items-center gap-1",children:[h.jsx(Sy,{className:"w-3 h-3"})," ",E.carbonImpact," kg CO2"]})]}),h.jsx("h3",{className:"font-display text-base font-bold text-white mb-1 group-hover:text-yzy-bone transition-colors",children:E.name}),h.jsx("p",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-wider mb-2",children:E.aestheticStyle}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:E.description}),h.jsxs("div",{className:"grid grid-cols-2 gap-1.5 bg-yzy-black/80 p-2.5 border border-yzy-slate/60 text-[10px] font-mono mb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"MATERIAL"}),h.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:E.material})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIMENSIONS"}),h.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:E.dimensions.split("(")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"EST. PRICE"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.retailPrice.split("/")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIY FEASIBILITY"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:E.diyFeasibility.split(" ")[0]})]})]})]}),h.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-col gap-2 font-mono",children:[h.jsxs("div",{className:"bg-yzy-black/90 p-3 border border-yzy-slate/60 flex flex-col gap-1 text-[10px]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-yzy-ash font-bold uppercase tracking-wider text-[9px]",children:"EXACT ORDER SOURCE:"}),h.jsx("span",{className:"text-yzy-chalk font-bold",children:E.supplier.location.split("/")[0]})]}),h.jsx("span",{className:"font-bold text-white text-xs",children:E.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[10px]",children:E.supplier.contact}),h.jsxs("div",{className:"flex justify-between items-center text-[9px] text-yzy-neon pt-1 border-t border-yzy-slate/40 mt-1",children:[h.jsxs("span",{children:["PRICE: ",E.supplier.exactPrice.split("or")[0]]}),h.jsxs("span",{children:["LEAD: ",E.supplier.leadTime]})]})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs("button",{onClick:y=>{y.stopPropagation(),M(E)},className:"flex-1 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs font-mono text-white tracking-wider flex items-center justify-center gap-1.5",children:[h.jsx(Kp,{className:"w-3.5 h-3.5 text-yzy-neon"}),h.jsx("span",{children:"VIEW IN 3D"})]}),h.jsx("button",{onClick:y=>{y.stopPropagation(),_(E)},className:"py-2 px-3 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-xs font-mono text-yzy-bone tracking-wider",title:"Copy Supplier Details",children:p===E.id?h.jsx(fg,{className:"w-3.5 h-3.5 text-yzy-neon"}):h.jsx(ay,{className:"w-3.5 h-3.5 text-yzy-ash"})})]})]})]},E.id)})})]})}const sg=[{phaseNumber:"01",title:"SITE SELECTION & SOIL DIAGNOSTICS",subtitle:"HOW TO TEST AND HARVEST YOUR ON-SITE SUBSOIL FOR ZERO DOLLARS",duration:"Day 1 - 2",skillLevel:"NOVICE (Anyone can do this)",overview:"Before buying anything, test the earth under your feet. 80% of topsoil sub-layers contain the exact natural sand-clay ratio needed to press indestructible building blocks.",steps:[{stepNum:"1.1",name:"THE 60-SECOND MASON JAR SEDIMENT TEST",instruction:"Fill a clear glass mason jar 1/3 full of your subsoil (dig down 12 inches beneath dark organic topsoil). Add clean water until 3/4 full, plus 1 tsp of salt/detergent to break surface tension. Shake vigorously for 60 seconds and set on a flat table.",timeline:[{time:"1 Minute",note:"Heavy Sand particles settle at the bottom."},{time:"2 Hours",note:"Fine Silt particles settle as a distinct middle layer."},{time:"48 Hours",note:"Pure Clay particles settle as the smooth top layer."}],idealRatio:"Ideal mix for CEB / Rammed Earth: 65-75% Sand/Gravel, 15-25% Clay, 10-15% Silt.",proTip:"If your soil is too sandy, add 10% local clay slurry. If too sticky/clay-heavy, add crushed local quarry sand."},{stepNum:"1.2",name:"THE BALL DROP TEST (FIELD MOISTURE CHECK)",instruction:"Grab a handful of damp soil and squeeze it firmly into a 1.5-inch ball. Drop it from shoulder height (5 ft) onto hard flat ground.",outcomes:[{result:"Shatters into powder",meaning:"Too dry! Add 2% water mist."},{result:"Flattens like a pancake",meaning:"Too wet! Let it air dry before pressing."},{result:"Breaks cleanly into 4-5 uniform chunks",meaning:"PERFECT MOISTURE (8-10%)! Ready to tamp or press."}]}],requiredTools:["Mason Jar","Ruler","Round-point Shovel","1/4 inch Wire Mesh Sieve Screen"]},{phaseNumber:"02",title:"RUBBLE TRENCH & GEOPOLYMER SUBGRADE FOUNDATION",subtitle:"FROST-PROOF, ZERO-SETTLEMENT EARTHEN FOUNDATION",duration:"Day 2 - 4",skillLevel:"NOVICE / COMMUNITY HAND CREW",overview:"Traditional poured Portland concrete foundations cost $12,000+. A Frank Lloyd Wright rubble trench foundation costs under $800, drains water naturally, and is immune to seismic shifting.",steps:[{stepNum:"2.1",name:"EXCAVATE THE PERIMETER TRENCH",instruction:"Dig a 18-inch wide trench around your building perimeter down to the local frost line (18-24 inches). Ensure a 1% slope toward a single daylight drainage exit point.",specs:'18" Width x 24" Depth with perforated 4" French drain pipe at bottom bedded in washed river gravel.'},{stepNum:"2.2",name:"TAMPED GRAVEL & POZZOLAN PLINTH BEAM",instruction:'Fill trench with 3/4" crushed basalt or granite gravel in 6-inch lifts, tamping each lift solid with a manual tamper. Pour an 8-inch geopolymer / lime grade beam on top to elevate walls 12 inches above splash grade.',proTip:"Elevating earth walls 12 inches off the ground ('Good Boots & Good Hat' rule) ensures 200+ year durability against rain splashback."}],requiredTools:["Trenching Spade",'Manual Hand Tamper (10x10")',"Transit Level / Water Hose Level","String Line & Stakes"]},{phaseNumber:"03",title:"WALL PRODUCTION & INTERLOCKING ASSEMBLY",subtitle:"PRESSING CEBs OR CASTING HEMPCRETE / RAMMED SLIPFORMS",duration:"Day 5 - 14",skillLevel:"NOVICE TO INTERMEDIATE",overview:"Depending on your selected material, construct your monolithic walls using zero toxic glues or off-gassing chemicals.",steps:[{stepNum:"3.1",name:"CEB INTERLOCKING BLOCK PRODUCTION (Option A)",instruction:'Sieve soil through 1/4" mesh. Blend 92% sieved soil with 8% hydraulic lime in a wheelbarrow. Feed into manual Cinva-Ram press. Pull lever arm with 150 lbs body weight to compress block at 2,000 PSI. Stack in shade to cure for 14 days with daily water mist.',rate:"A 3-person team can press 350-500 interlocking blocks per day ($0.12/block raw material cost)."},{stepNum:"3.2",name:"MONOLITHIC RAMMED EARTH SLIPFORMING (Option B)",instruction:'Erect 3/4" marine plywood forms braced with 2x4 walers and through-bolts. Fill formwork with 6-inch loose soil mix. Tamp down to 3 inches with pneumatic tamper or heavy steel hand tamper until it sounds like a hard ringing stone. Strip forms immediately and move upward.',rate:"Produces solid 18-inch thick monolithic stone walls capable of supporting multi-story mass timber floors."},{stepNum:"3.3",name:"HEMP-LIME CASTING (Option C)",instruction:"Mix 4 parts hemp hurds, 1 part hydrated lime binder, and 1.5 parts water in a horizontal pan mixer for 3 minutes until fluffy and coated. Lightly tamp around structural timber frames using wooden hand float. Do not over-compress.",rate:"Lightweight, breathable, and creates a monolithic continuous R-25 insulation envelope."}],requiredTools:["Cinva-Ram Manual Press or Slipforms","Wheelbarrows","Pneumatic or Hand Tampers","Rubber Mallet"]},{phaseNumber:"04",title:"ROOF SYSTEMS & RAINWATER VAULTS",subtitle:"CATENARY DOMES, FERROCEMENT VAULTS & MASS TIMBER SPANS",duration:"Day 15 - 20",skillLevel:"INTERMEDIATE",overview:"Cap your structure with a protective umbrella designed to deflect hurricane winds and harvest 100% of seasonal rainfall into potable storage.",steps:[{stepNum:"4.1",name:"CATENARY ARCH / DOME COMPASS ARM GUIDANCE",instruction:"For monolithic domes, anchor a central steel swivel pivot arm in the exact center of the foundation. Use the arm as a radial 3D guide to lay each circular tier of blocks at the exact inward angle without needing interior scaffolding.",proTip:"Catenary arches transfer 100% of roof load into pure compression, allowing stone and earth to span wide open rooms without steel beams."},{stepNum:"4.2",name:"LIME WASH & SILICATE HYDROPHOBIC SEAL",instruction:"Apply 3 coats of hot slaked lime wash with potassium silicate sealer. The wash chemically bonds to the earthen wall, allowing internal water vapor to breathe out while blocking driving rain completely."}],requiredTools:["Center Pivot Compass Arm","Plastering Trowels","Natural Bristle Lime Brushes","Safety Harness"]}],ld=[{id:"ceb_mix",name:"COMPRESSED EARTH BLOCK (CEB) FORMULA",yieldUnit:'100 Standard Blocks (12" x 6" x 4")',ingredients:[{name:"Sieved Subsoil (Clay/Sand mix)",amount:"900 lbs (0.4 cu yards)",cost:"$0.00 (On-site)"},{name:"Hydraulic Lime (NHL 3.5) or Pozzolan",amount:"50 lbs (1 bag)",cost:"$14.00"},{name:"Clean Water",amount:"8 - 10 Gallons (8% moisture)",cost:"$0.00"}],instructions:"Dry mix soil and lime thoroughly until color is uniform. Mist with fine spray nozzle while turning over with shovel. Compress immediately in press. Yields 100 blocks = 33 sq ft of wall."},{id:"hempcrete_mix",name:"HEMP-LIME CASTING FORMULA",yieldUnit:"10 Cubic Feet of Wall Fill (R-20)",ingredients:[{name:"Industrial Hemp Shiv / Hurds",amount:"40 lbs (1 bale)",cost:"$24.00"},{name:"Hydrated Lime / Pozzolan Binder",amount:"55 lbs (1 bag)",cost:"$16.00"},{name:"Water",amount:"6 - 7 Gallons",cost:"$0.00"}],instructions:"Wet hemp hurds in mixer first for 45 seconds. Add lime binder and mix until hurds are evenly white-coated. Add remaining water until mix clumps when squeezed without dripping water."},{id:"aircrete_mix",name:"AERATED AIRCRETE DOME FORMULA",yieldUnit:"5 Cubic Feet Foam Slurry",ingredients:[{name:"Standard or Pozzolan Cement/Slag",amount:"94 lbs (1 bag)",cost:"$12.50"},{name:"Clean Water",amount:"6 Gallons",cost:"$0.00"},{name:"High-Expansion Bio-Foaming Solution",amount:"4 oz concentrate in 2 gal water",cost:"$1.80"}],instructions:"Mix cement slurry until lump-free. Inject dense shaving-cream foam from generator directly into rotating mixer drum for 90 seconds. Pour directly into dome molds. Expands 4x volume."}];function nw(){const[s,e]=Ke.useState(0),[n,r]=Ke.useState("ceb_mix"),[o,c]=Ke.useState(70),[u,f]=Ke.useState(20),[p,m]=Ke.useState(10),v=sg[s],S=ld.find(E=>E.id===n)||ld[0],M=o>=60&&o<=80&&u>=15&&u<=28?{status:"EXCELLENT FOR CEB & RAMMED EARTH",color:"text-yzy-neon",border:"border-yzy-neon",feedback:"Your soil composition is optimal! High structural compressive strength with minimal shrinkage."}:u>30?{status:"HIGH CLAY CONTENT (EXCESSIVE SHRINKAGE)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 15-20% coarse washed quarry sand to stabilize before pressing blocks or tamping."}:o>80?{status:"TOO SANDY (LOW BINDING CLAY)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 10-15% natural clay slurry or increase hydraulic lime stabilizer to 10%."}:{status:"ACCEPTABLE WITH 8% LIME STABILIZER",color:"text-yzy-chalk",border:"border-yzy-slate",feedback:"Suitable for stabilized compressed earth blocks with standard curing."};return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"03 // NOVICE-TO-MASTER CONSTRUCTION PROTOCOLS"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"STEP-BY-STEP COMMUNITY BUILD MANUAL"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Zero prior construction experience required. Modular visual instructions for self-reliance."})]}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(fy,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase tracking-tight",children:"INTERACTIVE SOIL TEST SANDBOX (MASON JAR SIMULATOR)"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase",children:"CALCULATE YOUR LOCAL SOIL"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",children:[h.jsxs("div",{className:"lg:col-span-4 flex flex-col items-center justify-center bg-yzy-black p-4 border border-yzy-slate",children:[h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-widest mb-2",children:"SEDIMENT STRATA TUBE"}),h.jsxs("div",{className:"w-24 h-48 border-2 border-yzy-chalk/60 rounded-b-lg relative overflow-hidden flex flex-col-reverse bg-yzy-obsidian",children:[h.jsxs("div",{style:{height:`${o}%`},className:"w-full bg-[#C2B280] flex items-center justify-center text-[9px] font-mono font-bold text-black border-t border-black/30",children:["SAND (",o,"%)"]}),h.jsxs("div",{style:{height:`${p}%`},className:"w-full bg-[#8E8065] flex items-center justify-center text-[9px] font-mono font-bold text-white border-t border-black/30",children:["SILT (",p,"%)"]}),h.jsxs("div",{style:{height:`${u}%`},className:"w-full bg-[#B85D38] flex items-center justify-center text-[9px] font-mono font-bold text-white",children:["CLAY (",u,"%)"]})]}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash mt-2",children:"WATER & SALT SOLUTION (TOP)"})]}),h.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-4",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#C2B280] font-bold",children:"SAND LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[o,"%"]})]}),h.jsx("input",{type:"range",min:"30",max:"90",value:o,onChange:E=>{const b=Number(E.target.value);c(b);const y=100-b;f(Math.round(y*.65)),m(y-Math.round(y*.65))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#C2B280]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 1 minute"})]}),h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#B85D38] font-bold",children:"CLAY LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[u,"%"]})]}),h.jsx("input",{type:"range",min:"5",max:"60",value:u,onChange:E=>{const b=Number(E.target.value);f(b);const y=100-b;c(Math.round(y*.85)),m(y-Math.round(y*.85))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#B85D38]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 48 hours"})]}),h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#8E8065] font-bold",children:"SILT LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[p,"%"]})]}),h.jsx("input",{type:"range",min:"0",max:"40",value:p,onChange:E=>m(Number(E.target.value)),className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#8E8065]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 2 hours"})]})]}),h.jsxs("div",{className:`p-3.5 border ${M.border} bg-yzy-black/90 flex flex-col gap-1`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase font-bold",children:"DIAGNOSTIC SUITABILITY VERDICT:"}),h.jsx("span",{className:`font-mono text-xs font-bold ${M.color}`,children:M.status})]}),h.jsx("p",{className:"text-xs text-yzy-bone font-mono leading-relaxed",children:M.feedback})]})]})]})]}),h.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:sg.map((E,b)=>{const y=s===b;return h.jsxs("button",{onClick:()=>{Ut(),e(b)},className:`p-3 text-left border transition-all flex flex-col justify-between ${y?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-lg":"bg-yzy-obsidian/60 border-yzy-slate text-yzy-chalk hover:border-yzy-ash"}`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsxs("span",{className:`font-mono text-[9px] font-bold ${y?"text-yzy-black/80":"text-yzy-ash"}`,children:["PHASE ",E.phaseNumber]}),h.jsx("span",{className:`font-mono text-[9px] ${y?"text-yzy-black/80 font-bold":"text-yzy-ash"}`,children:E.duration})]}),h.jsx("span",{className:`font-display text-xs font-bold leading-tight ${y?"text-yzy-black":"text-yzy-bone"}`,children:E.title})]},E.phaseNumber)})}),h.jsxs("div",{className:"bg-yzy-obsidian/80 border border-yzy-slate p-5 sm:p-6 flex flex-col gap-5",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash uppercase tracking-widest block",children:["PHASE ",v.phaseNumber," PROTOCOL"]}),h.jsx("h3",{className:"font-display text-lg font-bold text-yzy-bone",children:v.title}),h.jsx("p",{className:"font-mono text-xs text-yzy-chalk/80 mt-0.5",children:v.subtitle})]}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsxs("span",{className:"font-mono text-[10px] px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-bone font-bold uppercase",children:["SKILL: ",v.skillLevel]})})]}),h.jsx("div",{className:"flex flex-col gap-4",children:v.steps.map(E=>h.jsxs("div",{className:"p-4 bg-yzy-black/70 border border-yzy-slate/70 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"font-mono text-xs font-bold text-yzy-bone bg-yzy-charcoal px-2 py-0.5 border border-yzy-slate",children:E.stepNum}),h.jsx("h4",{className:"font-display text-sm font-bold text-yzy-bone uppercase",children:E.name})]}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 leading-relaxed font-mono",children:E.instruction}),E.timeline&&h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 bg-yzy-obsidian p-2 border border-yzy-slate/40 text-[10px] font-mono",children:E.timeline.map((b,y)=>h.jsxs("div",{className:"flex flex-col",children:[h.jsxs("span",{className:"text-yzy-ash font-bold",children:[b.time,":"]}),h.jsx("span",{className:"text-yzy-bone",children:b.note})]},y))}),E.idealRatio&&h.jsxs("div",{className:"text-[11px] font-mono text-yzy-neon bg-yzy-neon/10 border border-yzy-neon/30 p-2 mt-1",children:[h.jsx("strong",{children:"FORMULA: "}),E.idealRatio]}),E.proTip&&h.jsxs("div",{className:"text-[10px] font-mono text-yzy-ash bg-yzy-charcoal/40 p-2 border-l-2 border-yzy-bone",children:[h.jsx("span",{className:"text-yzy-bone font-bold",children:"PRO-TIP: "}),E.proTip]})]},E.stepNum))}),h.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-wrap items-center gap-2 text-xs font-mono",children:[h.jsx("span",{className:"text-yzy-ash font-bold uppercase text-[10px] mr-2",children:"REQUIRED TOOLS:"}),v.requiredTools.map((E,b)=>h.jsx("span",{className:"px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk text-[10px]",children:E},b))]})]}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Qx,{className:"w-4 h-4 text-yzy-bone"}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase",children:"BATCH RECIPE CALCULATORS"})]}),h.jsx("div",{className:"flex gap-1",children:ld.map(E=>h.jsx("button",{onClick:()=>{Ut(),r(E.id)},className:`px-2.5 py-1 text-[10px] font-mono tracking-wider border transition-all ${n===E.id?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:E.name.split(" ")[0]},E.id))})]}),h.jsxs("div",{className:"flex flex-col gap-3 font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center text-xs",children:[h.jsx("span",{className:"text-yzy-bone font-bold",children:S.name}),h.jsxs("span",{className:"text-yzy-ash",children:["YIELD: ",S.yieldUnit]})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:S.ingredients.map((E,b)=>h.jsxs("div",{className:"bg-yzy-black p-3 border border-yzy-slate flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"text-yzy-ash text-[9px] uppercase block mb-0.5",children:["INGREDIENT ",b+1]}),h.jsx("span",{className:"text-yzy-bone font-bold text-xs",children:E.name})]}),h.jsxs("div",{className:"flex justify-between text-[11px] pt-2 mt-2 border-t border-yzy-slate/40",children:[h.jsx("span",{className:"text-yzy-chalk",children:E.amount}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.cost})]})]},b))}),h.jsxs("p",{className:"text-xs text-yzy-chalk/90 bg-yzy-black/60 p-3 border border-yzy-slate leading-relaxed",children:[h.jsx("strong",{className:"text-yzy-bone",children:"MIXING PROTOCOL: "}),S.instructions]})]})]})]})}const iw=[{category:"FREE / LOCAL HARVESTING",title:"ON-SITE & REGIONAL HARVESTING",badge:"COST: $0 - $200",description:"Methods for acquiring 70-90% of raw building mass directly from local geography.",channels:[{item:"Subsoil & Clay for CEBs/Rammed Earth",howToSource:"Foundation basement excavation, construction site clean fill, local road cutting excavations, or agricultural pond dredging.",estimatedCost:"$0.00 (Self-dug) or $15/ton delivered from local excavation contractor",availability:"Everywhere worldwide"},{item:"Agricultural Waste (Straw, Husks, Wood Chaff)",howToSource:"Connect with local grain/rice/wheat farmers after harvest season. Substrate for mycelium bio-insulation and cob binders.",estimatedCost:"$3.00 - $5.00 per 50 lb round bale",availability:"Agricultural zones / Rural co-ops"},{item:"Recycled Plastic (HDPE Milk Jugs & Bottle Caps)",howToSource:"Set up community drop-off points at schools/churches. Melted into interlocking zero-cost foundation blocks.",estimatedCost:"$0.00 (Community collection) to $0.20/lb washed flake",availability:"Urban & suburban centers"}]},{category:"LOW-COST EQUIPMENT & TOOLING",title:"OPEN-SOURCE BLOCK PRESSES & CASTING RIGS",badge:"ONE-TIME COMMUNITY TOOL KIT",description:"Inexpensive machinery that a single community can share to build dozens of homes.",channels:[{item:"Manual Interlocking CEB Press (Cinva-Ram / Auram Style)",howToSource:"Purchase from Open Source Ecology, Habitat for Humanity suppliers, or weld locally using open-source CAD plans.",estimatedCost:"$380 - $650 (One-time purchase, builds 50+ homes)",leadTime:"3-7 Days shipping or 2 days local welding"},{item:"Aircrete Continuous Bio-Foam Generator Rig",howToSource:"Domegaia Little Dragon foam unit or DIY 5-gallon pressure tank with aerator wand.",estimatedCost:"$120 - $280",leadTime:"Immediate DIY assembly"},{item:"Slipform Formwork & Steel Walers",howToSource:'Reusable 3/4" high-density overlay (HDO) plywood sheets with quick-release wedge bolts.',estimatedCost:"$450 per 16 linear feet of reusable forms",leadTime:"Local lumber yard"}]},{category:"COMMERCIAL BIO & MINERAL SUPPLIERS",title:"PROCESSED HEMPCRETE, LIME & MASS TIMBER",badge:"DIRECT SUPPLY CHAIN",description:"Direct wholesale bulk contacts for specialized binders and bio-composites.",channels:[{item:"Industrial Hemp Shiv / Hurd (Fibers cleaned & shredded)",howToSource:"HempWood (KY), Sunstrand, US Hemp Brokerage, Hempitecture.",estimatedCost:"$0.38 - $0.55 / lb in 1-ton super-sacks",leadTime:"5-10 Days freight"},{item:"Naturally Hydraulic Lime (NHL 3.5 / NHL 5.0) & Pozzolans",howToSource:"Saint-Astier, Limestrong, Graymont, Boral Fly Ash / Slag recycling.",estimatedCost:"$14.00 - $18.00 per 50 lb sack wholesale",leadTime:"Regional masonry distributors"},{item:"Engineered Bamboo Culms & Strands",howToSource:"Guadua bamboo co-ops, BamCore structural framing panels.",estimatedCost:"$3.50 / linear ft",leadTime:"Regional timber hubs"}]}],rw=[{metric:"Foundation (per sq ft)",conventional:"$18.50 (Standard poured concrete)",ezyInfra:"$3.80 (Rubble trench + Geopolymer plinth)",savings:"79% SAVED"},{metric:"Exterior Wall Envelope (per sq ft)",conventional:"$42.00 (Wood studs + OSB + Fiberglass + Drywall + Siding)",ezyInfra:"$4.20 (Interlocking CEB Earth or Rammed Earth)",savings:"90% SAVED"},{metric:"Insulation & Acoustic (per sq ft)",conventional:"$9.50 (Toxic closed-cell spray foam)",ezyInfra:"$2.90 (Grown Mycelium or Hemp-Lime)",savings:"69% SAVED"},{metric:"Total Turnkey Cost (1,200 sqft Residence)",conventional:"$280,000 - $420,000",ezyInfra:"$14,500 - $28,000",savings:"93% SAVED"},{metric:"Net Embodied Carbon",conventional:"+65,000 kg CO2 (Heavy polluter)",ezyInfra:"-14,200 kg CO2 (Net Carbon Sink)",savings:"122% REDUCTION"}];function ag(){return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"04 // SOURCING RADAR & SUPPLY CHAIN"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"MATERIAL PROCUREMENT & TOOL DIRECTORY"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Direct wholesale pathways, open-source equipment plans, and local harvesting guides."})]}),h.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:iw.map((s,e)=>h.jsx("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col justify-between",children:h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk",children:s.category}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-neon font-bold",children:s.badge})]}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1",children:s.title}),h.jsx("p",{className:"text-xs text-yzy-chalk/80 leading-relaxed mb-4",children:s.description}),h.jsx("div",{className:"flex flex-col gap-3",children:s.channels.map((n,r)=>h.jsxs("div",{className:"bg-yzy-black/80 p-3 border border-yzy-slate/60 text-xs font-mono",children:[h.jsx("span",{className:"font-bold text-yzy-bone block mb-1",children:n.item}),h.jsx("p",{className:"text-[11px] text-yzy-chalk/90 leading-relaxed mb-2",children:n.howToSource}),h.jsxs("div",{className:"flex justify-between items-center text-[10px] pt-2 border-t border-yzy-slate/40",children:[h.jsx("span",{className:"text-yzy-ash",children:"COST:"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:n.estimatedCost})]})]},r))})]})},e))}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 sm:p-6 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Dy,{className:"w-5 h-5 text-yzy-neon"}),h.jsx("h3",{className:"font-display text-base sm:text-lg font-bold text-yzy-bone uppercase",children:"TRANSPARENT COST DISRUPTION INDEX (CONVENTIONAL VS EZY INFRA)"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase hidden sm:inline",children:"INDUSTRY BENCHMARKS"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[h.jsx("th",{className:"py-2.5 px-3",children:"ARCHITECTURAL COMPONENT"}),h.jsx("th",{className:"py-2.5 px-3",children:"CONVENTIONAL COMMERCIAL"}),h.jsx("th",{className:"py-2.5 px-3",children:"EZY INFRA SYSTEM"}),h.jsx("th",{className:"py-2.5 px-3 text-right",children:"COST DISRUPTION"})]})}),h.jsx("tbody",{className:"divide-y divide-yzy-slate/40",children:rw.map((s,e)=>h.jsxs("tr",{className:"hover:bg-yzy-charcoal/40 transition-colors",children:[h.jsx("td",{className:"py-3 px-3 font-bold text-yzy-bone",children:s.metric}),h.jsx("td",{className:"py-3 px-3 text-yzy-ash line-through",children:s.conventional}),h.jsx("td",{className:"py-3 px-3 text-yzy-chalk font-bold",children:s.ezyInfra}),h.jsx("td",{className:"py-3 px-3 text-right",children:h.jsx("span",{className:"bg-yzy-neon/10 border border-yzy-neon/30 text-yzy-neon font-bold px-2 py-0.5 text-[10px]",children:s.savings})})]},e))})]})})]})]})}function sw({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:u,totalCarbon:f}){if(!s)return null;const m=(Mi[n.id]||Mi.yzy_mono_dome).map(y=>{const x=r[y.id]||y.defaultMaterial,U=o.find(R=>R.id===x)||c.find(R=>R.id===x);let P=0;return U?.cost!==void 0?P=U.cost:U?.costPerSqFt!==void 0?P=Math.round(y.surfaceAreaSqft*U.costPerSqFt):P=Math.round(y.surfaceAreaSqft*4.2),{layer:y.name,mat:U,calc:`$${P.toLocaleString()}`,costNum:P}}),v=m.reduce((y,x)=>y+x.costNum,0),S=650,_=Math.round(v*.08),M=v+S+_,E=n.sqft?(M/n.sqft).toFixed(2):"0.00",b=()=>{Wa();let y="data:text/csv;charset=utf-8,";y+=`ARCHITECTURAL COMPONENT,SPECIFIED MATERIAL,UNIT METRIC,ESTIMATED COST
`,m.forEach(P=>{y+=`"${P.layer}","${P.mat?.name||P.mat?.shortName||"Custom"}","${P.mat?.unitCost||"Package"}","${P.calc}"
`}),y+=`"TOOLING & EQUIPMENT","Community Press Kit","One-Time Rental","$${S}"
`,y+=`"CONTINGENCY BUFFER","8% Waste Reserve","Contingency","$${_}"
`,y+=`"TOTAL PROJECT BUDGET","${n.name}","Turnkey DIY","$${M}"
`;const x=encodeURI(y),U=document.createElement("a");U.setAttribute("href",x),U.setAttribute("download",`EZY_INFRA_BOM_${n.code}.csv`),document.body.appendChild(U),U.click(),document.body.removeChild(U)};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone w-full max-w-3xl my-auto p-5 sm:p-7 shadow-2xl flex flex-col gap-5 text-yzy-bone font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase block",children:"TRANSPARENT BILL OF MATERIALS (BOM)"}),h.jsxs("h3",{className:"font-display text-lg sm:text-xl font-bold tracking-tight",children:[n.name," // COST TELEMETRY"]})]}),h.jsx("button",{onClick:()=>{Ut(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 bg-yzy-black p-3 border border-yzy-slate text-center",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"TOTAL DIY BUDGET"}),h.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-neon",children:["$",M.toLocaleString()]})]}),h.jsxs("div",{className:"border-l border-yzy-slate",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COST PER SQ FT"}),h.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:["$",E," / sqft"]})]}),h.jsxs("div",{className:"border-l border-yzy-slate",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COMMERCIAL COST SAVINGS"}),h.jsx("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:"88% - 94%"})]})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[h.jsx("th",{className:"py-2 px-2",children:"COMPONENT"}),h.jsx("th",{className:"py-2 px-2",children:"SPECIFIED MATERIAL"}),h.jsx("th",{className:"py-2 px-2 text-right",children:"COST ESTIMATE"})]})}),h.jsxs("tbody",{className:"divide-y divide-yzy-slate/40",children:[m.map((y,x)=>h.jsxs("tr",{className:"hover:bg-yzy-charcoal/30",children:[h.jsx("td",{className:"py-2.5 px-2 font-bold text-yzy-chalk text-[11px]",children:y.layer}),h.jsx("td",{className:"py-2.5 px-2 text-yzy-ash text-[11px]",children:y.mat?.name||y.mat?.shortName||"Custom Spec"}),h.jsx("td",{className:"py-2.5 px-2 text-right font-bold text-yzy-bone text-[11px]",children:y.calc})]},x)),h.jsxs("tr",{className:"bg-yzy-black/40",children:[h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"TOOLS & EQUIPMENT LEASE"}),h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Cinva-Ram Press & Mixer"}),h.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",S]})]}),h.jsxs("tr",{className:"bg-yzy-black/40",children:[h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"CONTINGENCY & WASTE RESERVE (8%)"}),h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Site Material Buffer"}),h.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",_]})]})]})]})}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash",children:"* Estimates based on open-source DIY construction without contractor markup."}),h.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[h.jsxs("button",{onClick:b,className:"flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-yzy-bone hover:bg-white text-yzy-black text-xs font-bold tracking-wider",children:[h.jsx(cd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"DOWNLOAD BOM (.CSV)"})]}),h.jsx("button",{onClick:()=>{Ut(),e()},className:"px-4 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs text-yzy-chalk",children:"CLOSE"})]})]})]})})}var vf={};(function s(e,n,r,o){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),w=L.getContext("2d");w.fillRect(0,0,1,1);var V=L.transferToImageBitmap();w.createPattern(V,"no-repeat")}catch{return!1}return!0})();function p(){}function m(L){var w=n.exports.Promise,V=w!==void 0?w:e.Promise;return typeof V=="function"?new V(L):(L(p,p),null)}var v=(function(L,w){return{transform:function(V){if(L)return V;if(w.has(V))return w.get(V);var ce=new OffscreenCanvas(V.width,V.height),j=ce.getContext("2d");return j.drawImage(V,0,0),w.set(V,ce),ce},clear:function(){w.clear()}}})(f,new Map),S=(function(){var L=Math.floor(16.666666666666668),w,V,ce={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(ee){var ue=Math.random();return ce[ue]=requestAnimationFrame(function te(me){j===me||j+L-1<me?(j=me,delete ce[ue],ee()):ce[ue]=requestAnimationFrame(te)}),ue},V=function(ee){ce[ee]&&cancelAnimationFrame(ce[ee])}):(w=function(ee){return setTimeout(ee,L)},V=function(ee){return clearTimeout(ee)}),{frame:w,cancel:V}})(),_=(function(){var L,w,V={};function ce(j){function ee(ue,te){j.postMessage({options:ue||{},callback:te})}j.init=function(te){var me=te.transferControlToOffscreen();j.postMessage({canvas:me},[me])},j.fire=function(te,me,ye){if(w)return ee(te,null),w;var we=Math.random().toString(36).slice(2);return w=m(function(De){function Re(Qe){Qe.data.callback===we&&(delete V[we],j.removeEventListener("message",Re),w=null,v.clear(),ye(),De())}j.addEventListener("message",Re),ee(te,we),V[we]=Re.bind(null,{data:{callback:we}})}),w},j.reset=function(){j.postMessage({reset:!0});for(var te in V)V[te](),delete V[te]}}return function(){if(L)return L;if(!r&&c){var j=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([j])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}ce(L)}return L}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(L,w){return w?w(L):L}function b(L){return L!=null}function y(L,w,V){return E(L&&b(L[w])?L[w]:M[w],V)}function x(L){return L<0?0:Math.floor(L)}function U(L,w){return Math.floor(Math.random()*(w-L))+L}function P(L){return parseInt(L,16)}function R(L){return L.map($)}function $(L){var w=String(L).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:P(w.substring(0,2)),g:P(w.substring(2,4)),b:P(w.substring(4,6))}}function B(L){var w=y(L,"origin",Object);return w.x=y(w,"x",Number),w.y=y(w,"y",Number),w}function k(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function G(L){var w=L.getBoundingClientRect();L.width=w.width,L.height=w.height}function N(L){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=L,w}function A(L,w,V,ce,j,ee,ue,te,me){L.save(),L.translate(w,V),L.rotate(ee),L.scale(ce,j),L.arc(0,0,1,ue,te,me),L.restore()}function O(L){var w=L.angle*(Math.PI/180),V=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-w+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function K(L,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var V=w.tick++/w.totalTicks,ce=w.x+w.random*w.tiltCos,j=w.y+w.random*w.tiltSin,ee=w.wobbleX+w.random*w.tiltCos,ue=w.wobbleY+w.random*w.tiltSin;if(L.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-V)+")",L.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))L.fill(ie(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(ee-ce)*.1,Math.abs(ue-j)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var te=Math.PI/10*w.wobble,me=Math.abs(ee-ce)*.1,ye=Math.abs(ue-j)*.1,we=w.shape.bitmap.width*w.scalar,De=w.shape.bitmap.height*w.scalar,Re=new DOMMatrix([Math.cos(te)*me,Math.sin(te)*me,-Math.sin(te)*ye,Math.cos(te)*ye,w.x,w.y]);Re.multiplySelf(new DOMMatrix(w.shape.matrix));var Qe=L.createPattern(v.transform(w.shape.bitmap),"no-repeat");Qe.setTransform(Re),L.globalAlpha=1-V,L.fillStyle=Qe,L.fillRect(w.x-we/2,w.y-De/2,we,De),L.globalAlpha=1}else if(w.shape==="circle")L.ellipse?L.ellipse(w.x,w.y,Math.abs(ee-ce)*w.ovalScalar,Math.abs(ue-j)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):A(L,w.x,w.y,Math.abs(ee-ce)*w.ovalScalar,Math.abs(ue-j)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var H=Math.PI/2*3,gt=4*w.scalar,Ie=8*w.scalar,Be=w.x,Oe=w.y,rt=5,ke=Math.PI/rt;rt--;)Be=w.x+Math.cos(H)*Ie,Oe=w.y+Math.sin(H)*Ie,L.lineTo(Be,Oe),H+=ke,Be=w.x+Math.cos(H)*gt,Oe=w.y+Math.sin(H)*gt,L.lineTo(Be,Oe),H+=ke;else L.moveTo(Math.floor(w.x),Math.floor(w.y)),L.lineTo(Math.floor(w.wobbleX),Math.floor(j)),L.lineTo(Math.floor(ee),Math.floor(ue)),L.lineTo(Math.floor(ce),Math.floor(w.wobbleY));return L.closePath(),L.fill(),w.tick<w.totalTicks}function W(L,w,V,ce,j){var ee=w.slice(),ue=L.getContext("2d"),te,me,ye=m(function(we){function De(){te=me=null,ue.clearRect(0,0,ce.width,ce.height),v.clear(),j(),we()}function Re(){r&&!(ce.width===o.width&&ce.height===o.height)&&(ce.width=L.width=o.width,ce.height=L.height=o.height),!ce.width&&!ce.height&&(V(L),ce.width=L.width,ce.height=L.height),ue.clearRect(0,0,ce.width,ce.height),ee=ee.filter(function(Qe){return K(ue,Qe)}),ee.length?te=S.frame(Re):De()}te=S.frame(Re),me=De});return{addFettis:function(we){return ee=ee.concat(we),ye},canvas:L,promise:ye,reset:function(){te&&S.cancel(te),me&&me()}}}function se(L,w){var V=!L,ce=!!y(w||{},"resize"),j=!1,ee=y(w,"disableForReducedMotion",Boolean),ue=c&&!!y(w||{},"useWorker"),te=ue?_():null,me=V?k:G,ye=L&&te?!!L.__confetti_initialized:!1,we=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,De;function Re(H,gt,Ie){for(var Be=y(H,"particleCount",x),Oe=y(H,"angle",Number),rt=y(H,"spread",Number),ke=y(H,"startVelocity",Number),D=y(H,"decay",Number),C=y(H,"gravity",Number),oe=y(H,"drift",Number),_e=y(H,"colors",R),Se=y(H,"ticks",Number),xe=y(H,"shapes"),qe=y(H,"scalar"),Le=!!y(H,"flat"),He=B(H),pt=Be,be=[],je=L.width*He.x,it=L.height*He.y;pt--;)be.push(O({x:je,y:it,angle:Oe,spread:rt,startVelocity:ke,color:_e[pt%_e.length],shape:xe[U(0,xe.length)],ticks:Se,decay:D,gravity:C,drift:oe,scalar:qe,flat:Le}));return De?De.addFettis(be):(De=W(L,be,me,gt,Ie),De.promise)}function Qe(H){var gt=ee||y(H,"disableForReducedMotion",Boolean),Ie=y(H,"zIndex",Number);if(gt&&we)return m(function(ke){ke()});V&&De?L=De.canvas:V&&!L&&(L=N(Ie),document.body.appendChild(L)),ce&&!ye&&me(L);var Be={width:L.width,height:L.height};te&&!ye&&te.init(L),ye=!0,te&&(L.__confetti_initialized=!0);function Oe(){if(te){var ke={getBoundingClientRect:function(){if(!V)return L.getBoundingClientRect()}};me(ke),te.postMessage({resize:{width:ke.width,height:ke.height}});return}Be.width=Be.height=null}function rt(){De=null,ce&&(j=!1,e.removeEventListener("resize",Oe)),V&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,ye=!1)}return ce&&!j&&(j=!0,e.addEventListener("resize",Oe,!1)),te?te.fire(H,Be,rt):Re(H,Be,rt)}return Qe.reset=function(){te&&te.reset(),De&&De.reset()},Qe}var re;function Z(){return re||(re=se(null,{useWorker:!0,resize:!0})),re}function ie(L,w,V,ce,j,ee,ue){var te=new Path2D(L),me=new Path2D;me.addPath(te,new DOMMatrix(w));var ye=new Path2D;return ye.addPath(me,new DOMMatrix([Math.cos(ue)*j,Math.sin(ue)*j,-Math.sin(ue)*ee,Math.cos(ue)*ee,V,ce])),ye}function F(L){if(!u)throw new Error("path confetti are not supported in this browser");var w,V;typeof L=="string"?w=L:(w=L.path,V=L.matrix);var ce=new Path2D(w),j=document.createElement("canvas"),ee=j.getContext("2d");if(!V){for(var ue=1e3,te=ue,me=ue,ye=0,we=0,De,Re,Qe=0;Qe<ue;Qe+=2)for(var H=0;H<ue;H+=2)ee.isPointInPath(ce,Qe,H,"nonzero")&&(te=Math.min(te,Qe),me=Math.min(me,H),ye=Math.max(ye,Qe),we=Math.max(we,H));De=ye-te,Re=we-me;var gt=10,Ie=Math.min(gt/De,gt/Re);V=[Ie,0,0,Ie,-Math.round(De/2+te)*Ie,-Math.round(Re/2+me)*Ie]}return{type:"path",path:w,matrix:V}}function de(L){var w,V=1,ce="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?w=L:(w=L.text,V="scalar"in L?L.scalar:V,j="fontFamily"in L?L.fontFamily:j,ce="color"in L?L.color:ce);var ee=10*V,ue=""+ee+"px "+j,te=new OffscreenCanvas(ee,ee),me=te.getContext("2d");me.font=ue;var ye=me.measureText(w),we=Math.ceil(ye.actualBoundingBoxRight+ye.actualBoundingBoxLeft),De=Math.ceil(ye.actualBoundingBoxAscent+ye.actualBoundingBoxDescent),Re=2,Qe=ye.actualBoundingBoxLeft+Re,H=ye.actualBoundingBoxAscent+Re;we+=Re+Re,De+=Re+Re,te=new OffscreenCanvas(we,De),me=te.getContext("2d"),me.font=ue,me.fillStyle=ce,me.fillText(w,Qe,H);var gt=1/V;return{type:"bitmap",bitmap:te.transferToImageBitmap(),matrix:[gt,0,0,gt,-we*gt/2,-De*gt/2]}}n.exports=function(){return Z().apply(this,arguments)},n.exports.reset=function(){Z().reset()},n.exports.create=se,n.exports.shapeFromPath=F,n.exports.shapeFromText=de})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),vf,!1);const aw=vf.exports;vf.exports.create;function ow({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:u,totalCarbon:f}){if(Ke.useEffect(()=>{if(s)try{aw({particleCount:60,spread:70,origin:{y:.6},colors:["#EAEAE6","#B8865A","#00FF66","#7B8C65"]})}catch{}},[s]),!s)return null;const p=()=>{Wa(),window.print()};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-black border-2 border-yzy-bone w-full max-w-4xl my-auto p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[h.jsxs("div",{className:"flex items-center justify-between border-b-2 border-yzy-bone pb-4",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[10px] tracking-widest text-yzy-ash uppercase font-bold",children:"YZY INFRASTRUCTURE ARCHITECTURAL BLUEPRINT // SPECIFICATION CAD-01"}),h.jsxs("h2",{className:"font-display text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5",children:[n.name," — ",n.subtitle]})]}),h.jsx("button",{onClick:()=>{Ut(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"PROJECT CODE"}),h.jsx("span",{className:"font-bold text-white",children:n.code})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"TOTAL FOOTPRINT"}),h.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"DIMENSIONS"}),h.jsx("span",{className:"font-bold text-white",children:n.diameter})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"OCCUPANCY"}),h.jsx("span",{className:"font-bold text-white",children:n.occupancy})]})]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase font-bold border-b border-yzy-slate pb-1",children:"01. MATERIAL & LAYER ARCHITECTURE"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs",children:Object.entries(r).map(([m,v])=>{const S=m==="utilities"?c.find(_=>_.id===v):o.find(_=>_.id===v);return h.jsxs("div",{className:"p-2.5 bg-yzy-obsidian border border-yzy-slate/60 flex flex-col justify-between",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold",children:m.toUpperCase()}),h.jsx("span",{className:"font-bold text-yzy-bone text-xs mt-0.5",children:S?.name||S?.shortName}),h.jsx("span",{className:"text-[10px] text-yzy-chalk/80 mt-1 line-clamp-1",children:S?.tagline||S?.description})]},m)})})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"WIND RESISTANCE"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.windResistance})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"SEISMIC ZONE"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.seismicZone})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"THERMAL STRATEGY"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.thermalComfort})]})]}),h.jsxs("div",{className:"bg-yzy-bone text-yzy-black p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"AUTHENTICATED PROJECT ESTIMATE"}),h.jsxs("span",{className:"text-2xl font-black",children:["$",u.toLocaleString()," TOTAL TURNKEY DIY"]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"NET EMBODIED CARBON"}),h.jsx("span",{className:"text-lg font-bold",children:f<=0?`${f} kg CO2 (NET SINK)`:`+${f} kg CO2`})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash uppercase tracking-wider",children:"OPEN-SOURCE COMMUNITY ARCHITECTURE LICENSE // FREE TO DISTRIBUTE"}),h.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[h.jsxs("button",{onClick:p,className:"flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-xs hover:bg-yzy-bone transition-all",children:[h.jsx(by,{className:"w-4 h-4"}),h.jsx("span",{children:"PRINT / SAVE PDF"})]}),h.jsx("button",{onClick:()=>{Ut(),e()},className:"px-4 py-2.5 bg-yzy-charcoal border border-yzy-slate text-xs text-yzy-chalk",children:"DISMISS"})]})]})]})})}function lw({isOpen:s,onClose:e}){return s?h.jsx("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-black border border-yzy-bone/80 w-full max-w-3xl my-auto p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"text-xs font-bold tracking-widest text-yzy-bone uppercase",children:"THE MANIFESTO // YZY + DONDA EARTH INITIATIVE"})]}),h.jsx("button",{onClick:()=>{Ut(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsxs("h2",{className:"font-display text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight",children:["SHELTER IS A BIRTHRIGHT. ",h.jsx("br",{}),"NOT A 30-YEAR PRISON SENTENCE."]}),h.jsx("p",{className:"text-xs sm:text-sm text-yzy-chalk/90 leading-relaxed font-sans",children:"The modern housing machine is broken. It forces human beings into debt slavery for toxic drywall boxes that rot in 40 years. We are returning to ancient monolithic permanence powered by computational engineering, raw subsoil, mycelium, and solar autonomy."})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(gy,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("span",{children:"01. 90% ON-SITE HARVESTING"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"We build directly with the dirt beneath our feet. Subsoil compressed at 2,000 PSI makes permanent stone blocks for cents per unit. Zero timber destruction. Zero cement emissions."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(Vy,{className:"w-4 h-4 text-yzy-electric"}),h.jsx("span",{children:"02. DECENTRALIZED SOVEREIGNTY"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every dome and village features closed-loop solar generation, atmospheric rainwater harvesting, and bio-gas digestion. Zero utility bills for life."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(Ry,{className:"w-4 h-4 text-yzy-earth"}),h.jsx("span",{children:"03. 200+ YEAR BRUTALIST LIFE"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Catenary arches and thick monolithic earth walls cannot catch fire, cannot rot, and withstand Category 5 hurricanes and earthquakes. Built for generations."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(yy,{className:"w-4 h-4 text-yzy-clay"}),h.jsx("span",{children:"04. OPEN-SOURCE COMMUNITY POWER"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every blueprint, mix formula, and CAD file is free and open-source. Anyone with a shovel, manual block press, and community willpower can build a sanctuary."})]})]}),h.jsxs("div",{className:"pt-4 border-t border-yzy-slate flex items-center justify-between",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase",children:"DESIGNED FOR HUMANITY // POWERED BY EZY INFRA"}),h.jsx("button",{onClick:()=>{Ut(),e()},className:"px-5 py-2 bg-yzy-bone text-yzy-black font-bold text-xs hover:bg-white tracking-wider",children:"ENTER THE ECOSYSTEM"})]})]})}):null}function cw(){const[s,e]=Ke.useState("builder"),[n,r]=Ke.useState(Cu[0]),o=Mi[Cu[0].id]||Mi.yzy_mono_dome,c={};o.forEach(k=>{c[k.id]=k.defaultMaterial});const[u,f]=Ke.useState(c),[p,m]=Ke.useState(o[1]?.id||o[0].id),[v,S]=Ke.useState(!1);Ke.useEffect(()=>{const k=()=>{S(window.scrollY>160)};return window.addEventListener("scroll",k,{passive:!0}),()=>window.removeEventListener("scroll",k)},[]);const[_,M]=Ke.useState(!1),[E,b]=Ke.useState(!1),[y,x]=Ke.useState(!1),U=Ke.useMemo(()=>[...il,...ef],[]),P=k=>{r(k);const G=Mi[k.id]||Mi.yzy_mono_dome,N={};G.forEach(A=>{N[A.id]=A.defaultMaterial}),f(N),m(G[1]?.id||G[0].id)},R=(k,G)=>{f(N=>({...N,[k]:G}))},{totalCost:$,totalCarbon:B}=Ke.useMemo(()=>{const k=Mi[n.id]||Mi.yzy_mono_dome;let G=0,N=0;return k.forEach(A=>{const O=u[A.id]||A.defaultMaterial,K=U.find(se=>se.id===O),W=Ru.find(se=>se.id===O);if(W)G+=W.cost,N+=W.carbonImpact;else if(K){const se=A.surfaceAreaSqft*K.costPerSqFt,re=A.surfaceAreaSqft*.1*K.carbonImpact;G+=se,N+=re}}),G+=650,{totalCost:Math.round(G),totalCarbon:Math.round(N)}},[n,u,U]);return h.jsxs("div",{className:"min-h-screen bg-yzy-black text-yzy-bone flex flex-col selection:bg-yzy-bone selection:text-yzy-black",children:[h.jsx(Wy,{activeTab:s,setActiveTab:e,totalCost:$,totalCarbon:B,onOpenCostBreakdown:()=>M(!0),onOpenBlueprintExport:()=>b(!0),onOpenVisionModal:()=>x(!0)}),h.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-6 py-2.5 sm:py-5 pb-24 flex flex-col gap-3 sm:gap-5",children:[s==="builder"&&h.jsxs("div",{className:"flex flex-col gap-3 sm:gap-4",children:[h.jsx(K1,{infrastructures:Cu,selectedInfra:n,onSelectInfra:P}),h.jsxs("div",{className:`transition-all duration-300 ${v?"sticky top-[42px] z-30 shadow-2xl bg-yzy-black/95 backdrop-blur-md pt-0.5 pb-1.5 border-b border-yzy-bone/40 -mx-2.5 px-2.5 sm:-mx-6 sm:px-6":"relative flex flex-col gap-1.5"}`,children:[h.jsx(Z1,{infrastructure:n,selectedPartMaterials:u,activePartId:p,onSelectPart:k=>m(k),materialsList:il,isCompact:v}),h.jsxs("div",{className:`bg-yzy-obsidian border border-yzy-slate/60 p-2 sm:p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-[11px] font-mono ${v?"hidden md:grid":"grid"}`,children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"ACTIVE MODEL"}),h.jsx("span",{className:"font-bold text-white truncate block",children:n.name})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"FOOTPRINT"}),h.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"LIVE ESTIMATED COST"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:["$",$.toLocaleString()]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"NET CARBON IMPACT"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:[B," kg CO2"]})]})]})]}),h.jsx(Q1,{infrastructure:n,selectedPartMaterials:u,onSelectPartMaterial:R,activePartId:p,setActivePartId:m,materialsList:il})]}),s==="materials"&&h.jsx(J1,{materialsList:il}),s==="furniture"&&h.jsx(tw,{}),s==="tutorials"&&h.jsx(nw,{}),s==="sourcing"&&h.jsx(ag,{}),s==="benchmarks"&&h.jsx("div",{className:"flex flex-col gap-6 py-2",children:h.jsx(ag,{})})]}),h.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-40 bg-yzy-obsidian/95 backdrop-blur-md border-t border-yzy-slate/80 p-2 sm:hidden flex items-center justify-around font-mono text-[10px]",children:[h.jsxs("button",{onClick:()=>{Ut(),e("builder")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="builder"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(dg,{className:"w-4 h-4"}),h.jsx("span",{children:"MATRIX"})]}),h.jsxs("button",{onClick:()=>{Ut(),e("materials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="materials"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(tf,{className:"w-4 h-4"}),h.jsx("span",{children:"MATERIALS"})]}),h.jsxs("button",{onClick:()=>{Ut(),e("furniture")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="furniture"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(gg,{className:"w-4 h-4"}),h.jsx("span",{children:"FURNITURE"})]}),h.jsxs("button",{onClick:()=>{Ut(),e("tutorials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="tutorials"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(ug,{className:"w-4 h-4"}),h.jsx("span",{children:"GUIDES"})]}),h.jsxs("button",{onClick:()=>{Wa(),M(!0)},className:"flex flex-col items-center gap-1 py-1 px-1.5 text-yzy-neon font-bold",children:[h.jsx(xg,{className:"w-4 h-4"}),h.jsxs("span",{children:["$",$.toLocaleString()]})]})]}),h.jsx(sw,{isOpen:_,onClose:()=>M(!1),infrastructure:n,selectedMaterials:u,materialsList:U,utilityPackages:Ru,totalCost:$,totalCarbon:B}),h.jsx(ow,{isOpen:E,onClose:()=>b(!1),infrastructure:n,selectedMaterials:u,materialsList:U,utilityPackages:Ru,totalCost:$,totalCarbon:B}),h.jsx(lw,{isOpen:y,onClose:()=>x(!1)})]})}class uw extends lg.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("React Error Caught:",e,n)}render(){return this.state.hasError?h.jsxs("div",{style:{backgroundColor:"#0a0a0a",color:"#EAEAE6",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",fontFamily:"monospace",textAlign:"center"},children:[h.jsx("h2",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"12px"},children:"EZY.INFRA // APP RECOVERY"}),h.jsx("p",{style:{color:"#888888",fontSize:"13px",maxWidth:"400px",marginBottom:"24px"},children:"A rendering error occurred on this device. Click below to reload."}),h.jsx("pre",{style:{background:"#181818",padding:"12px",fontSize:"11px",color:"#00FF66",maxWidth:"90%",overflow:"auto",marginBottom:"20px"},children:this.state.error?.toString()}),h.jsx("button",{onClick:()=>window.location.reload(),style:{backgroundColor:"#EAEAE6",color:"#000000",padding:"12px 24px",fontWeight:"bold",border:"none",cursor:"pointer"},children:"RELOAD APPLICATION"})]}):this.props.children}}Wx.createRoot(document.getElementById("root")).render(h.jsx(lg.StrictMode,{children:h.jsx(uw,{children:h.jsx(cw,{})})}));
