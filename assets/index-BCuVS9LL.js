(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function ig(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Su={exports:{}},Na={},Eu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function Mx(){if(Fp)return vt;Fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=_&&b[_]||b["@@iterator"],typeof b=="function"?b:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function v(b,G,me){this.props=b,this.context=G,this.refs=T,this.updater=me||E}v.prototype.isReactComponent={},v.prototype.setState=function(b,G){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,G,"setState")},v.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function y(){}y.prototype=v.prototype;function z(b,G,me){this.props=b,this.context=G,this.refs=T,this.updater=me||E}var U=z.prototype=new y;U.constructor=z,M(U,v.prototype),U.isPureReactComponent=!0;var I=Array.isArray,Q=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function j(b,G,me){var X,J={},he=null,ie=null;if(G!=null)for(X in G.ref!==void 0&&(ie=G.ref),G.key!==void 0&&(he=""+G.key),G)Q.call(G,X)&&!k.hasOwnProperty(X)&&(J[X]=G[X]);var ge=arguments.length-2;if(ge===1)J.children=me;else if(1<ge){for(var _e=Array(ge),Ne=0;Ne<ge;Ne++)_e[Ne]=arguments[Ne+2];J.children=_e}if(b&&b.defaultProps)for(X in ge=b.defaultProps,ge)J[X]===void 0&&(J[X]=ge[X]);return{$$typeof:s,type:b,key:he,ref:ie,props:J,_owner:F.current}}function N(b,G){return{$$typeof:s,type:b.type,key:G,ref:b.ref,props:b.props,_owner:b._owner}}function C(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function L(b){var G={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(me){return G[me]})}var K=/\/+/g;function W(b,G){return typeof b=="object"&&b!==null&&b.key!=null?L(""+b.key):G.toString(36)}function te(b,G,me,X,J){var he=typeof b;(he==="undefined"||he==="boolean")&&(b=null);var ie=!1;if(b===null)ie=!0;else switch(he){case"string":case"number":ie=!0;break;case"object":switch(b.$$typeof){case s:case e:ie=!0}}if(ie)return ie=b,J=J(ie),b=X===""?"."+W(ie,0):X,I(J)?(me="",b!=null&&(me=b.replace(K,"$&/")+"/"),te(J,G,me,"",function(Ne){return Ne})):J!=null&&(C(J)&&(J=N(J,me+(!J.key||ie&&ie.key===J.key?"":(""+J.key).replace(K,"$&/")+"/")+b)),G.push(J)),1;if(ie=0,X=X===""?".":X+":",I(b))for(var ge=0;ge<b.length;ge++){he=b[ge];var _e=X+W(he,ge);ie+=te(he,G,me,_e,J)}else if(_e=S(b),typeof _e=="function")for(b=_e.call(b),ge=0;!(he=b.next()).done;)he=he.value,_e=X+W(he,ge++),ie+=te(he,G,me,_e,J);else if(he==="object")throw G=String(b),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ie}function de(b,G,me){if(b==null)return b;var X=[],J=0;return te(b,X,"","",function(he){return G.call(me,he,J++)}),X}function ne(b){if(b._status===-1){var G=b._result;G=G(),G.then(function(me){(b._status===0||b._status===-1)&&(b._status=1,b._result=me)},function(me){(b._status===0||b._status===-1)&&(b._status=2,b._result=me)}),b._status===-1&&(b._status=0,b._result=G)}if(b._status===1)return b._result.default;throw b._result}var oe={current:null},H={transition:null},fe={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function P(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:de,forEach:function(b,G,me){de(b,function(){G.apply(this,arguments)},me)},count:function(b){var G=0;return de(b,function(){G++}),G},toArray:function(b){return de(b,function(G){return G})||[]},only:function(b){if(!C(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},vt.Component=v,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=z,vt.StrictMode=r,vt.Suspense=m,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,vt.act=P,vt.cloneElement=function(b,G,me){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var X=M({},b.props),J=b.key,he=b.ref,ie=b._owner;if(G!=null){if(G.ref!==void 0&&(he=G.ref,ie=F.current),G.key!==void 0&&(J=""+G.key),b.type&&b.type.defaultProps)var ge=b.type.defaultProps;for(_e in G)Q.call(G,_e)&&!k.hasOwnProperty(_e)&&(X[_e]=G[_e]===void 0&&ge!==void 0?ge[_e]:G[_e])}var _e=arguments.length-2;if(_e===1)X.children=me;else if(1<_e){ge=Array(_e);for(var Ne=0;Ne<_e;Ne++)ge[Ne]=arguments[Ne+2];X.children=ge}return{$$typeof:s,type:b.type,key:J,ref:he,props:X,_owner:ie}},vt.createContext=function(b){return b={$$typeof:d,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:c,_context:b},b.Consumer=b},vt.createElement=j,vt.createFactory=function(b){var G=j.bind(null,b);return G.type=b,G},vt.createRef=function(){return{current:null}},vt.forwardRef=function(b){return{$$typeof:f,render:b}},vt.isValidElement=C,vt.lazy=function(b){return{$$typeof:x,_payload:{_status:-1,_result:b},_init:ne}},vt.memo=function(b,G){return{$$typeof:h,type:b,compare:G===void 0?null:G}},vt.startTransition=function(b){var G=H.transition;H.transition={};try{b()}finally{H.transition=G}},vt.unstable_act=P,vt.useCallback=function(b,G){return oe.current.useCallback(b,G)},vt.useContext=function(b){return oe.current.useContext(b)},vt.useDebugValue=function(){},vt.useDeferredValue=function(b){return oe.current.useDeferredValue(b)},vt.useEffect=function(b,G){return oe.current.useEffect(b,G)},vt.useId=function(){return oe.current.useId()},vt.useImperativeHandle=function(b,G,me){return oe.current.useImperativeHandle(b,G,me)},vt.useInsertionEffect=function(b,G){return oe.current.useInsertionEffect(b,G)},vt.useLayoutEffect=function(b,G){return oe.current.useLayoutEffect(b,G)},vt.useMemo=function(b,G){return oe.current.useMemo(b,G)},vt.useReducer=function(b,G,me){return oe.current.useReducer(b,G,me)},vt.useRef=function(b){return oe.current.useRef(b)},vt.useState=function(b){return oe.current.useState(b)},vt.useSyncExternalStore=function(b,G,me){return oe.current.useSyncExternalStore(b,G,me)},vt.useTransition=function(){return oe.current.useTransition()},vt.version="18.3.1",vt}var Bp;function Kd(){return Bp||(Bp=1,Eu.exports=Mx()),Eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function bx(){if(Hp)return Na;Hp=1;var s=Kd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,h){var x,_={},S=null,E=null;h!==void 0&&(S=""+h),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(E=m.ref);for(x in m)r.call(m,x)&&!c.hasOwnProperty(x)&&(_[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)_[x]===void 0&&(_[x]=m[x]);return{$$typeof:e,type:f,key:S,ref:E,props:_,_owner:o.current}}return Na.Fragment=n,Na.jsx=d,Na.jsxs=d,Na}var Vp;function wx(){return Vp||(Vp=1,Su.exports=bx()),Su.exports}var p=wx(),ft=Kd();const Tx=ig(ft);var Qo={},Mu={exports:{}},Ln={},bu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Ax(){return Gp||(Gp=1,(function(s){function e(H,fe){var P=H.length;H.push(fe);e:for(;0<P;){var b=P-1>>>1,G=H[b];if(0<o(G,fe))H[b]=fe,H[P]=G,P=b;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var fe=H[0],P=H.pop();if(P!==fe){H[0]=P;e:for(var b=0,G=H.length,me=G>>>1;b<me;){var X=2*(b+1)-1,J=H[X],he=X+1,ie=H[he];if(0>o(J,P))he<G&&0>o(ie,J)?(H[b]=ie,H[he]=P,b=he):(H[b]=J,H[X]=P,b=X);else if(he<G&&0>o(ie,P))H[b]=ie,H[he]=P,b=he;else break e}}return fe}function o(H,fe){var P=H.sortIndex-fe.sortIndex;return P!==0?P:H.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var m=[],h=[],x=1,_=null,S=3,E=!1,M=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(H){for(var fe=n(h);fe!==null;){if(fe.callback===null)r(h);else if(fe.startTime<=H)r(h),fe.sortIndex=fe.expirationTime,e(m,fe);else break;fe=n(h)}}function I(H){if(T=!1,U(H),!M)if(n(m)!==null)M=!0,ne(Q);else{var fe=n(h);fe!==null&&oe(I,fe.startTime-H)}}function Q(H,fe){M=!1,T&&(T=!1,y(j),j=-1),E=!0;var P=S;try{for(U(fe),_=n(m);_!==null&&(!(_.expirationTime>fe)||H&&!L());){var b=_.callback;if(typeof b=="function"){_.callback=null,S=_.priorityLevel;var G=b(_.expirationTime<=fe);fe=s.unstable_now(),typeof G=="function"?_.callback=G:_===n(m)&&r(m),U(fe)}else r(m);_=n(m)}if(_!==null)var me=!0;else{var X=n(h);X!==null&&oe(I,X.startTime-fe),me=!1}return me}finally{_=null,S=P,E=!1}}var F=!1,k=null,j=-1,N=5,C=-1;function L(){return!(s.unstable_now()-C<N)}function K(){if(k!==null){var H=s.unstable_now();C=H;var fe=!0;try{fe=k(!0,H)}finally{fe?W():(F=!1,k=null)}}else F=!1}var W;if(typeof z=="function")W=function(){z(K)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,de=te.port2;te.port1.onmessage=K,W=function(){de.postMessage(null)}}else W=function(){v(K,0)};function ne(H){k=H,F||(F=!0,W())}function oe(H,fe){j=v(function(){H(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||E||(M=!0,ne(Q))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(H){switch(S){case 1:case 2:case 3:var fe=3;break;default:fe=S}var P=S;S=fe;try{return H()}finally{S=P}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,fe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var P=S;S=H;try{return fe()}finally{S=P}},s.unstable_scheduleCallback=function(H,fe,P){var b=s.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?b+P:b):P=b,H){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,H={id:x++,callback:fe,priorityLevel:H,startTime:P,expirationTime:G,sortIndex:-1},P>b?(H.sortIndex=P,e(h,H),n(m)===null&&H===n(h)&&(T?(y(j),j=-1):T=!0,oe(I,P-b))):(H.sortIndex=G,e(m,H),M||E||(M=!0,ne(Q))),H},s.unstable_shouldYield=L,s.unstable_wrapCallback=function(H){var fe=S;return function(){var P=S;S=fe;try{return H.apply(this,arguments)}finally{S=P}}}})(wu)),wu}var jp;function Cx(){return jp||(jp=1,bu.exports=Ax()),bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Rx(){if(Wp)return Ln;Wp=1;var s=Kd(),e=Cx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function S(t){return m.call(_,t)?!0:m.call(x,t)?!1:h.test(t)?_[t]=!0:(x[t]=!0,!1)}function E(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,a,l){if(i===null||typeof i>"u"||E(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,u,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(y,z);v[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(y,z);v[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(y,z);v[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function U(t,i,a,l){var u=v.hasOwnProperty(i)?v[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,u,l)&&(a=null),l||u===null?S(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),L=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),H=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var P=Object.assign,b;function G(t){if(b===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+t}var me=!1;function X(t,i){if(!t||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var l=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){l=le}t.call(i.prototype)}else{try{throw Error()}catch(le){l=le}t()}}catch(le){if(le&&l&&typeof le.stack=="string"){for(var u=le.stack.split(`
`),g=l.stack.split(`
`),w=u.length-1,O=g.length-1;1<=w&&0<=O&&u[w]!==g[O];)O--;for(;1<=w&&0<=O;w--,O--)if(u[w]!==g[O]){if(w!==1||O!==1)do if(w--,O--,0>O||u[w]!==g[O]){var V=`
`+u[w].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=w&&0<=O);break}}}finally{me=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?G(t):""}function J(t){switch(t.tag){case 5:return G(t.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function he(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case N:return"Profiler";case j:return"StrictMode";case W:return"Suspense";case te:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}function ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ne(t){var i=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,g=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,g.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ke(t){t._valueTracker||(t._valueTracker=Ne(t))}function Ve(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=_e(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Oe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var a=i.checked;return P({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function ut(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Je(t,i){i=i.checked,i!=null&&U(t,"checked",i,!1)}function et(t,i){Je(t,i);var a=ge(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?dt(t,i.type,a):i.hasOwnProperty("defaultValue")&&dt(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Fe(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function dt(t,i,a){(i!=="number"||Oe(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Re=Array.isArray;function D(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function A(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return P({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function se(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Re(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ge(a)}}function ve(t,i){var a=ge(i.value),l=ge(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Se(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ye(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ie,ze=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ht(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function tt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function rt(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=tt(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var Ge=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(t,i){if(i){if(Ge[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function lt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function Y(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,pe=null,xe=null;function Ue(t){if(t=ma(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ho(i),Pe(t.stateNode,t.type,i))}}function De(t){pe?xe?xe.push(t):xe=[t]:pe=t}function ct(){if(pe){var t=pe,i=xe;if(xe=pe=null,Ue(t),i)for(t=0;t<i.length;t++)Ue(i[t])}}function Ut(t,i){return t(i)}function Zt(){}var Mt=!1;function Tn(t,i,a){if(Mt)return t(i,a);Mt=!0;try{return Ut(t,i,a)}finally{Mt=!1,(pe!==null||xe!==null)&&(Zt(),ct())}}function _n(t,i){var a=t.stateNode;if(a===null)return null;var l=ho(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var es=!1;if(f)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{es=!1}function Ai(t,i,a,l,u,g,w,O,V){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(Me){this.onError(Me)}}var Ci=!1,Tr=null,Ar=!1,$i=null,Xa={onError:function(t){Ci=!0,Tr=t}};function ts(t,i,a,l,u,g,w,O,V){Ci=!1,Tr=null,Ai.apply(Xa,arguments)}function qa(t,i,a,l,u,g,w,O,V){if(ts.apply(this,arguments),Ci){if(Ci){var le=Tr;Ci=!1,Tr=null}else throw Error(n(198));Ar||(Ar=!0,$i=le)}}function mi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ya(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function $a(t){if(mi(t)!==t)throw Error(n(188))}function Gl(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var g=u.alternate;if(g===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===g.child){for(g=u.child;g;){if(g===a)return $a(u),t;if(g===l)return $a(u),i;g=g.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=g;else{for(var w=!1,O=u.child;O;){if(O===a){w=!0,a=u,l=g;break}if(O===l){w=!0,l=u,a=g;break}O=O.sibling}if(!w){for(O=g.child;O;){if(O===a){w=!0,a=g,l=u;break}if(O===l){w=!0,l=g,a=u;break}O=O.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function R(t){return t=Gl(t),t!==null?$(t):null}function $(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=$(t);if(i!==null)return i;t=t.sibling}return null}var ce=e.unstable_scheduleCallback,ue=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Te=e.unstable_now,Ye=e.unstable_getCurrentPriorityLevel,Xe=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,$e=e.unstable_LowPriority,St=e.unstable_IdlePriority,Ct=null,_t=null;function dn(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ct,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Tt,Qe=Math.log,ti=Math.LN2;function Tt(t){return t>>>=0,t===0?32:31-(Qe(t)/ti|0)|0}var fn=64,ni=4194304;function Kt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,g=t.pingedLanes,w=a&268435455;if(w!==0){var O=w&~u;O!==0?l=Kt(O):(g&=w,g!==0&&(l=Kt(g)))}else w=a&~u,w!==0?l=Kt(w):g!==0&&(l=Kt(g));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,g=i&-i,u>=g||u===16&&(g&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-pt(i),u=1<<a,l|=t[a],i&=~u;return l}function Lt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,g=t.pendingLanes;0<g;){var w=31-pt(g),O=1<<w,V=u[w];V===-1?((O&a)===0||(O&l)!==0)&&(u[w]=Lt(O,i)):V<=i&&(t.expiredLanes|=O),g&=~O}}function Ri(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sn(){var t=fn;return fn<<=1,(fn&4194240)===0&&(fn=64),t}function jn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function An(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-pt(i),t[i]=a}function Za(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-pt(a),g=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~g}}function jl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-pt(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var Nt=0;function yf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var xf,Wl,vf,_f,Sf,Xl=!1,Ka=[],Zi=null,Ki=null,Qi=null,Js=new Map,ea=new Map,Ji=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(t,i){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(i.pointerId)}}function ta(t,i,a,l,u,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:g,targetContainers:[u]},i!==null&&(i=ma(i),i!==null&&Wl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Xg(t,i,a,l,u){switch(i){case"focusin":return Zi=ta(Zi,t,i,a,l,u),!0;case"dragenter":return Ki=ta(Ki,t,i,a,l,u),!0;case"mouseover":return Qi=ta(Qi,t,i,a,l,u),!0;case"pointerover":var g=u.pointerId;return Js.set(g,ta(Js.get(g)||null,t,i,a,l,u)),!0;case"gotpointercapture":return g=u.pointerId,ea.set(g,ta(ea.get(g)||null,t,i,a,l,u)),!0}return!1}function Mf(t){var i=Cr(t.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ya(a),i!==null){t.blockedOn=i,Sf(t.priority,function(){vf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Rt=l,a.target.dispatchEvent(l),Rt=null}else return i=ma(a),i!==null&&Wl(i),t.blockedOn=a,!1;i.shift()}return!0}function bf(t,i,a){Qa(t)&&a.delete(i)}function qg(){Xl=!1,Zi!==null&&Qa(Zi)&&(Zi=null),Ki!==null&&Qa(Ki)&&(Ki=null),Qi!==null&&Qa(Qi)&&(Qi=null),Js.forEach(bf),ea.forEach(bf)}function na(t,i){t.blockedOn===i&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qg)))}function ia(t){function i(u){return na(u,t)}if(0<Ka.length){na(Ka[0],t);for(var a=1;a<Ka.length;a++){var l=Ka[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Zi!==null&&na(Zi,t),Ki!==null&&na(Ki,t),Qi!==null&&na(Qi,t),Js.forEach(i),ea.forEach(i),a=0;a<Ji.length;a++)l=Ji[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ji.length&&(a=Ji[0],a.blockedOn===null);)Mf(a),a.blockedOn===null&&Ji.shift()}var ns=I.ReactCurrentBatchConfig,Ja=!0;function Yg(t,i,a,l){var u=Nt,g=ns.transition;ns.transition=null;try{Nt=1,ql(t,i,a,l)}finally{Nt=u,ns.transition=g}}function $g(t,i,a,l){var u=Nt,g=ns.transition;ns.transition=null;try{Nt=4,ql(t,i,a,l)}finally{Nt=u,ns.transition=g}}function ql(t,i,a,l){if(Ja){var u=Yl(t,i,a,l);if(u===null)dc(t,i,l,eo,a),Ef(t,l);else if(Xg(u,t,i,a,l))l.stopPropagation();else if(Ef(t,l),i&4&&-1<Wg.indexOf(t)){for(;u!==null;){var g=ma(u);if(g!==null&&xf(g),g=Yl(t,i,a,l),g===null&&dc(t,i,l,eo,a),g===u)break;u=g}u!==null&&l.stopPropagation()}else dc(t,i,l,null,a)}}var eo=null;function Yl(t,i,a,l){if(eo=null,t=Y(l),t=Cr(t),t!==null)if(i=mi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ya(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return eo=t,null}function wf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ye()){case Xe:return 1;case st:return 4;case ot:case $e:return 16;case St:return 536870912;default:return 16}default:return 16}}var er=null,$l=null,to=null;function Tf(){if(to)return to;var t,i=$l,a=i.length,l,u="value"in er?er.value:er.textContent,g=u.length;for(t=0;t<a&&i[t]===u[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===u[g-l];l++);return to=u.slice(t,1<l?1-l:void 0)}function no(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function Af(){return!1}function zn(t){function i(a,l,u,g,w){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?io:Af,this.isPropagationStopped=Af,this}return P(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=zn(is),ra=P({},is,{view:0,detail:0}),Zg=zn(ra),Kl,Ql,sa,ro=P({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(Kl=t.screenX-sa.screenX,Ql=t.screenY-sa.screenY):Ql=Kl=0,sa=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Cf=zn(ro),Kg=P({},ro,{dataTransfer:0}),Qg=zn(Kg),Jg=P({},ra,{relatedTarget:0}),Jl=zn(Jg),ey=P({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=zn(ey),ny=P({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iy=zn(ny),ry=P({},is,{data:0}),Rf=zn(ry),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=oy[t])?!!i[t]:!1}function ec(){return ly}var cy=P({},ra,{key:function(t){if(t.key){var i=sy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uy=zn(cy),dy=P({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=zn(dy),fy=P({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),hy=zn(fy),py=P({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=zn(py),gy=P({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=zn(gy),xy=[9,13,27,32],tc=f&&"CompositionEvent"in window,aa=null;f&&"documentMode"in document&&(aa=document.documentMode);var vy=f&&"TextEvent"in window&&!aa,If=f&&(!tc||aa&&8<aa&&11>=aa),Pf=" ",Lf=!1;function Df(t,i){switch(t){case"keyup":return xy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function _y(t,i){switch(t){case"compositionend":return Uf(i);case"keypress":return i.which!==32?null:(Lf=!0,Pf);case"textInput":return t=i.data,t===Pf&&Lf?null:t;default:return null}}function Sy(t,i){if(rs)return t==="compositionend"||!tc&&Df(t,i)?(t=Tf(),to=$l=er=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return If&&i.locale!=="ko"?null:i.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ey[t.type]:i==="textarea"}function zf(t,i,a,l){De(l),i=co(i,"onChange"),0<i.length&&(a=new Zl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var oa=null,la=null;function My(t){th(t,0)}function so(t){var i=cs(t);if(Ve(i))return t}function by(t,i){if(t==="change")return i}var kf=!1;if(f){var nc;if(f){var ic="oninput"in document;if(!ic){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),ic=typeof Ff.oninput=="function"}nc=ic}else nc=!1;kf=nc&&(!document.documentMode||9<document.documentMode)}function Bf(){oa&&(oa.detachEvent("onpropertychange",Hf),la=oa=null)}function Hf(t){if(t.propertyName==="value"&&so(la)){var i=[];zf(i,la,t,Y(t)),Tn(My,i)}}function wy(t,i,a){t==="focusin"?(Bf(),oa=i,la=a,oa.attachEvent("onpropertychange",Hf)):t==="focusout"&&Bf()}function Ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return so(la)}function Ay(t,i){if(t==="click")return so(i)}function Cy(t,i){if(t==="input"||t==="change")return so(i)}function Ry(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:Ry;function ca(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!m.call(i,u)||!ii(t[u],i[u]))return!1}return!0}function Vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gf(t,i){var a=Vf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vf(a)}}function jf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?jf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Wf(){for(var t=window,i=Oe();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Oe(t.document)}return i}function rc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ny(t){var i=Wf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&jf(a.ownerDocument.documentElement,a)){if(l!==null&&rc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,g=Math.min(l.start,u);l=l.end===void 0?g:Math.min(l.end,u),!t.extend&&g>l&&(u=l,l=g,g=u),u=Gf(a,g);var w=Gf(a,l);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),g>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Iy=f&&"documentMode"in document&&11>=document.documentMode,ss=null,sc=null,ua=null,ac=!1;function Xf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||ss==null||ss!==Oe(l)||(l=ss,"selectionStart"in l&&rc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ua&&ca(ua,l)||(ua=l,l=co(sc,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ss)))}function ao(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var as={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},oc={},qf={};f&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function oo(t){if(oc[t])return oc[t];if(!as[t])return t;var i=as[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in qf)return oc[t]=i[a];return t}var Yf=oo("animationend"),$f=oo("animationiteration"),Zf=oo("animationstart"),Kf=oo("transitionend"),Qf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){Qf.set(t,i),c(i,[t])}for(var lc=0;lc<Jf.length;lc++){var cc=Jf[lc],Py=cc.toLowerCase(),Ly=cc[0].toUpperCase()+cc.slice(1);tr(Py,"on"+Ly)}tr(Yf,"onAnimationEnd"),tr($f,"onAnimationIteration"),tr(Zf,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Kf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function eh(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,qa(l,i,void 0,t),t.currentTarget=null}function th(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var g=void 0;if(i)for(var w=l.length-1;0<=w;w--){var O=l[w],V=O.instance,le=O.currentTarget;if(O=O.listener,V!==g&&u.isPropagationStopped())break e;eh(u,O,le),g=V}else for(w=0;w<l.length;w++){if(O=l[w],V=O.instance,le=O.currentTarget,O=O.listener,V!==g&&u.isPropagationStopped())break e;eh(u,O,le),g=V}}}if(Ar)throw t=$i,Ar=!1,$i=null,t}function Ot(t,i){var a=i[yc];a===void 0&&(a=i[yc]=new Set);var l=t+"__bubble";a.has(l)||(nh(i,t,2,!1),a.add(l))}function uc(t,i,a){var l=0;i&&(l|=4),nh(a,t,l,i)}var lo="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[lo]){t[lo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||uc(a,!1,t),uc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[lo]||(i[lo]=!0,uc("selectionchange",!1,i))}}function nh(t,i,a,l){switch(wf(i)){case 1:var u=Yg;break;case 4:u=$g;break;default:u=ql}a=u.bind(null,i,a,t),u=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function dc(t,i,a,l,u){var g=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var O=l.stateNode.containerInfo;if(O===u||O.nodeType===8&&O.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===u||V.nodeType===8&&V.parentNode===u))return;w=w.return}for(;O!==null;){if(w=Cr(O),w===null)return;if(V=w.tag,V===5||V===6){l=g=w;continue e}O=O.parentNode}}l=l.return}Tn(function(){var le=g,Me=Y(a),we=[];e:{var Ee=Qf.get(t);if(Ee!==void 0){var ke=Zl,je=t;switch(t){case"keypress":if(no(a)===0)break e;case"keydown":case"keyup":ke=uy;break;case"focusin":je="focus",ke=Jl;break;case"focusout":je="blur",ke=Jl;break;case"beforeblur":case"afterblur":ke=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=hy;break;case Yf:case $f:case Zf:ke=ty;break;case Kf:ke=my;break;case"scroll":ke=Zg;break;case"wheel":ke=yy;break;case"copy":case"cut":case"paste":ke=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Nf}var qe=(i&4)!==0,Xt=!qe&&t==="scroll",ee=qe?Ee!==null?Ee+"Capture":null:Ee;qe=[];for(var q=le,re;q!==null;){re=q;var Ae=re.stateNode;if(re.tag===5&&Ae!==null&&(re=Ae,ee!==null&&(Ae=_n(q,ee),Ae!=null&&qe.push(ha(q,Ae,re)))),Xt)break;q=q.return}0<qe.length&&(Ee=new ke(Ee,je,null,a,Me),we.push({event:Ee,listeners:qe}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",Ee&&a!==Rt&&(je=a.relatedTarget||a.fromElement)&&(Cr(je)||je[Ni]))break e;if((ke||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,ke?(je=a.relatedTarget||a.toElement,ke=le,je=je?Cr(je):null,je!==null&&(Xt=mi(je),je!==Xt||je.tag!==5&&je.tag!==6)&&(je=null)):(ke=null,je=le),ke!==je)){if(qe=Cf,Ae="onMouseLeave",ee="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Nf,Ae="onPointerLeave",ee="onPointerEnter",q="pointer"),Xt=ke==null?Ee:cs(ke),re=je==null?Ee:cs(je),Ee=new qe(Ae,q+"leave",ke,a,Me),Ee.target=Xt,Ee.relatedTarget=re,Ae=null,Cr(Me)===le&&(qe=new qe(ee,q+"enter",je,a,Me),qe.target=re,qe.relatedTarget=Xt,Ae=qe),Xt=Ae,ke&&je)t:{for(qe=ke,ee=je,q=0,re=qe;re;re=os(re))q++;for(re=0,Ae=ee;Ae;Ae=os(Ae))re++;for(;0<q-re;)qe=os(qe),q--;for(;0<re-q;)ee=os(ee),re--;for(;q--;){if(qe===ee||ee!==null&&qe===ee.alternate)break t;qe=os(qe),ee=os(ee)}qe=null}else qe=null;ke!==null&&ih(we,Ee,ke,qe,!1),je!==null&&Xt!==null&&ih(we,Xt,je,qe,!0)}}e:{if(Ee=le?cs(le):window,ke=Ee.nodeName&&Ee.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Ee.type==="file")var Ze=by;else if(Of(Ee))if(kf)Ze=Cy;else{Ze=Ty;var nt=wy}else(ke=Ee.nodeName)&&ke.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Ze=Ay);if(Ze&&(Ze=Ze(t,le))){zf(we,Ze,a,Me);break e}nt&&nt(t,Ee,le),t==="focusout"&&(nt=Ee._wrapperState)&&nt.controlled&&Ee.type==="number"&&dt(Ee,"number",Ee.value)}switch(nt=le?cs(le):window,t){case"focusin":(Of(nt)||nt.contentEditable==="true")&&(ss=nt,sc=le,ua=null);break;case"focusout":ua=sc=ss=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Xf(we,a,Me);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":Xf(we,a,Me)}var it;if(tc)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else rs?Df(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(If&&a.locale!=="ko"&&(rs||at!=="onCompositionStart"?at==="onCompositionEnd"&&rs&&(it=Tf()):(er=Me,$l="value"in er?er.value:er.textContent,rs=!0)),nt=co(le,at),0<nt.length&&(at=new Rf(at,t,null,a,Me),we.push({event:at,listeners:nt}),it?at.data=it:(it=Uf(a),it!==null&&(at.data=it)))),(it=vy?_y(t,a):Sy(t,a))&&(le=co(le,"onBeforeInput"),0<le.length&&(Me=new Rf("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:le}),Me.data=it))}th(we,i)})}function ha(t,i,a){return{instance:t,listener:i,currentTarget:a}}function co(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,g=u.stateNode;u.tag===5&&g!==null&&(u=g,g=_n(t,a),g!=null&&l.unshift(ha(t,g,u)),g=_n(t,i),g!=null&&l.push(ha(t,g,u))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ih(t,i,a,l,u){for(var g=i._reactName,w=[];a!==null&&a!==l;){var O=a,V=O.alternate,le=O.stateNode;if(V!==null&&V===l)break;O.tag===5&&le!==null&&(O=le,u?(V=_n(a,g),V!=null&&w.unshift(ha(a,V,O))):u||(V=_n(a,g),V!=null&&w.push(ha(a,V,O)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var Uy=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function rh(t){return(typeof t=="string"?t:""+t).replace(Uy,`
`).replace(Oy,"")}function uo(t,i,a){if(i=rh(i),rh(t)!==i&&a)throw Error(n(425))}function fo(){}var fc=null,hc=null;function pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(t){return sh.resolve(null).then(t).catch(Fy)}:mc;function Fy(t){setTimeout(function(){throw t})}function gc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),ia(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);ia(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),yi="__reactFiber$"+ls,pa="__reactProps$"+ls,Ni="__reactContainer$"+ls,yc="__reactEvents$"+ls,By="__reactListeners$"+ls,Hy="__reactHandles$"+ls;function Cr(t){var i=t[yi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ni]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=ah(t);t!==null;){if(a=t[yi])return a;t=ah(t)}return i}t=a,a=t.parentNode}return null}function ma(t){return t=t[yi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ho(t){return t[pa]||null}var xc=[],us=-1;function ir(t){return{current:t}}function zt(t){0>us||(t.current=xc[us],xc[us]=null,us--)}function Dt(t,i){us++,xc[us]=t.current,t.current=i}var rr={},hn=ir(rr),Cn=ir(!1),Rr=rr;function ds(t,i){var a=t.type.contextTypes;if(!a)return rr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},g;for(g in a)u[g]=i[g];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Rn(t){return t=t.childContextTypes,t!=null}function po(){zt(Cn),zt(hn)}function oh(t,i,a){if(hn.current!==rr)throw Error(n(168));Dt(hn,i),Dt(Cn,a)}function lh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,ie(t)||"Unknown",u));return P({},a,l)}function mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Rr=hn.current,Dt(hn,t),Dt(Cn,Cn.current),!0}function ch(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=lh(t,i,Rr),l.__reactInternalMemoizedMergedChildContext=t,zt(Cn),zt(hn),Dt(hn,t)):zt(Cn),Dt(Cn,a)}var Ii=null,go=!1,vc=!1;function uh(t){Ii===null?Ii=[t]:Ii.push(t)}function Vy(t){go=!0,uh(t)}function sr(){if(!vc&&Ii!==null){vc=!0;var t=0,i=Nt;try{var a=Ii;for(Nt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ii=null,go=!1}catch(u){throw Ii!==null&&(Ii=Ii.slice(t+1)),ce(Xe,sr),u}finally{Nt=i,vc=!1}}return null}var fs=[],hs=0,yo=null,xo=0,Wn=[],Xn=0,Nr=null,Pi=1,Li="";function Ir(t,i){fs[hs++]=xo,fs[hs++]=yo,yo=t,xo=i}function dh(t,i,a){Wn[Xn++]=Pi,Wn[Xn++]=Li,Wn[Xn++]=Nr,Nr=t;var l=Pi;t=Li;var u=32-pt(l)-1;l&=~(1<<u),a+=1;var g=32-pt(i)+u;if(30<g){var w=u-u%5;g=(l&(1<<w)-1).toString(32),l>>=w,u-=w,Pi=1<<32-pt(i)+u|a<<u|l,Li=g+t}else Pi=1<<g|a<<u|l,Li=t}function _c(t){t.return!==null&&(Ir(t,1),dh(t,1,0))}function Sc(t){for(;t===yo;)yo=fs[--hs],fs[hs]=null,xo=fs[--hs],fs[hs]=null;for(;t===Nr;)Nr=Wn[--Xn],Wn[Xn]=null,Li=Wn[--Xn],Wn[Xn]=null,Pi=Wn[--Xn],Wn[Xn]=null}var kn=null,Fn=null,kt=!1,ri=null;function fh(t,i){var a=Zn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function hh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,Fn=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Nr!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Zn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,Fn=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(kt){var i=Fn;if(i){var a=i;if(!hh(t,i)){if(Ec(t))throw Error(n(418));i=nr(a.nextSibling);var l=kn;i&&hh(t,i)?fh(l,a):(t.flags=t.flags&-4097|2,kt=!1,kn=t)}}else{if(Ec(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,kn=t}}}function ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function vo(t){if(t!==kn)return!1;if(!kt)return ph(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pc(t.type,t.memoizedProps)),i&&(i=Fn)){if(Ec(t))throw mh(),Error(n(418));for(;i;)fh(t,i),i=nr(i.nextSibling)}if(ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Fn=nr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=kn?nr(t.stateNode.nextSibling):null;return!0}function mh(){for(var t=Fn;t;)t=nr(t.nextSibling)}function ps(){Fn=kn=null,kt=!1}function bc(t){ri===null?ri=[t]:ri.push(t)}var Gy=I.ReactCurrentBatchConfig;function ga(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var O=u.refs;w===null?delete O[g]:O[g]=w},i._stringRef=g,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function _o(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function gh(t){var i=t._init;return i(t._payload)}function yh(t){function i(ee,q){if(t){var re=ee.deletions;re===null?(ee.deletions=[q],ee.flags|=16):re.push(q)}}function a(ee,q){if(!t)return null;for(;q!==null;)i(ee,q),q=q.sibling;return null}function l(ee,q){for(ee=new Map;q!==null;)q.key!==null?ee.set(q.key,q):ee.set(q.index,q),q=q.sibling;return ee}function u(ee,q){return ee=hr(ee,q),ee.index=0,ee.sibling=null,ee}function g(ee,q,re){return ee.index=re,t?(re=ee.alternate,re!==null?(re=re.index,re<q?(ee.flags|=2,q):re):(ee.flags|=2,q)):(ee.flags|=1048576,q)}function w(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function O(ee,q,re,Ae){return q===null||q.tag!==6?(q=mu(re,ee.mode,Ae),q.return=ee,q):(q=u(q,re),q.return=ee,q)}function V(ee,q,re,Ae){var Ze=re.type;return Ze===k?Me(ee,q,re.props.children,Ae,re.key):q!==null&&(q.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&gh(Ze)===q.type)?(Ae=u(q,re.props),Ae.ref=ga(ee,q,re),Ae.return=ee,Ae):(Ae=jo(re.type,re.key,re.props,null,ee.mode,Ae),Ae.ref=ga(ee,q,re),Ae.return=ee,Ae)}function le(ee,q,re,Ae){return q===null||q.tag!==4||q.stateNode.containerInfo!==re.containerInfo||q.stateNode.implementation!==re.implementation?(q=gu(re,ee.mode,Ae),q.return=ee,q):(q=u(q,re.children||[]),q.return=ee,q)}function Me(ee,q,re,Ae,Ze){return q===null||q.tag!==7?(q=Fr(re,ee.mode,Ae,Ze),q.return=ee,q):(q=u(q,re),q.return=ee,q)}function we(ee,q,re){if(typeof q=="string"&&q!==""||typeof q=="number")return q=mu(""+q,ee.mode,re),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Q:return re=jo(q.type,q.key,q.props,null,ee.mode,re),re.ref=ga(ee,null,q),re.return=ee,re;case F:return q=gu(q,ee.mode,re),q.return=ee,q;case ne:var Ae=q._init;return we(ee,Ae(q._payload),re)}if(Re(q)||fe(q))return q=Fr(q,ee.mode,re,null),q.return=ee,q;_o(ee,q)}return null}function Ee(ee,q,re,Ae){var Ze=q!==null?q.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ze!==null?null:O(ee,q,""+re,Ae);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case Q:return re.key===Ze?V(ee,q,re,Ae):null;case F:return re.key===Ze?le(ee,q,re,Ae):null;case ne:return Ze=re._init,Ee(ee,q,Ze(re._payload),Ae)}if(Re(re)||fe(re))return Ze!==null?null:Me(ee,q,re,Ae,null);_o(ee,re)}return null}function ke(ee,q,re,Ae,Ze){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(re)||null,O(q,ee,""+Ae,Ze);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case Q:return ee=ee.get(Ae.key===null?re:Ae.key)||null,V(q,ee,Ae,Ze);case F:return ee=ee.get(Ae.key===null?re:Ae.key)||null,le(q,ee,Ae,Ze);case ne:var nt=Ae._init;return ke(ee,q,re,nt(Ae._payload),Ze)}if(Re(Ae)||fe(Ae))return ee=ee.get(re)||null,Me(q,ee,Ae,Ze,null);_o(q,Ae)}return null}function je(ee,q,re,Ae){for(var Ze=null,nt=null,it=q,at=q=0,sn=null;it!==null&&at<re.length;at++){it.index>at?(sn=it,it=null):sn=it.sibling;var At=Ee(ee,it,re[at],Ae);if(At===null){it===null&&(it=sn);break}t&&it&&At.alternate===null&&i(ee,it),q=g(At,q,at),nt===null?Ze=At:nt.sibling=At,nt=At,it=sn}if(at===re.length)return a(ee,it),kt&&Ir(ee,at),Ze;if(it===null){for(;at<re.length;at++)it=we(ee,re[at],Ae),it!==null&&(q=g(it,q,at),nt===null?Ze=it:nt.sibling=it,nt=it);return kt&&Ir(ee,at),Ze}for(it=l(ee,it);at<re.length;at++)sn=ke(it,ee,at,re[at],Ae),sn!==null&&(t&&sn.alternate!==null&&it.delete(sn.key===null?at:sn.key),q=g(sn,q,at),nt===null?Ze=sn:nt.sibling=sn,nt=sn);return t&&it.forEach(function(pr){return i(ee,pr)}),kt&&Ir(ee,at),Ze}function qe(ee,q,re,Ae){var Ze=fe(re);if(typeof Ze!="function")throw Error(n(150));if(re=Ze.call(re),re==null)throw Error(n(151));for(var nt=Ze=null,it=q,at=q=0,sn=null,At=re.next();it!==null&&!At.done;at++,At=re.next()){it.index>at?(sn=it,it=null):sn=it.sibling;var pr=Ee(ee,it,At.value,Ae);if(pr===null){it===null&&(it=sn);break}t&&it&&pr.alternate===null&&i(ee,it),q=g(pr,q,at),nt===null?Ze=pr:nt.sibling=pr,nt=pr,it=sn}if(At.done)return a(ee,it),kt&&Ir(ee,at),Ze;if(it===null){for(;!At.done;at++,At=re.next())At=we(ee,At.value,Ae),At!==null&&(q=g(At,q,at),nt===null?Ze=At:nt.sibling=At,nt=At);return kt&&Ir(ee,at),Ze}for(it=l(ee,it);!At.done;at++,At=re.next())At=ke(it,ee,at,At.value,Ae),At!==null&&(t&&At.alternate!==null&&it.delete(At.key===null?at:At.key),q=g(At,q,at),nt===null?Ze=At:nt.sibling=At,nt=At);return t&&it.forEach(function(Ex){return i(ee,Ex)}),kt&&Ir(ee,at),Ze}function Xt(ee,q,re,Ae){if(typeof re=="object"&&re!==null&&re.type===k&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case Q:e:{for(var Ze=re.key,nt=q;nt!==null;){if(nt.key===Ze){if(Ze=re.type,Ze===k){if(nt.tag===7){a(ee,nt.sibling),q=u(nt,re.props.children),q.return=ee,ee=q;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&gh(Ze)===nt.type){a(ee,nt.sibling),q=u(nt,re.props),q.ref=ga(ee,nt,re),q.return=ee,ee=q;break e}a(ee,nt);break}else i(ee,nt);nt=nt.sibling}re.type===k?(q=Fr(re.props.children,ee.mode,Ae,re.key),q.return=ee,ee=q):(Ae=jo(re.type,re.key,re.props,null,ee.mode,Ae),Ae.ref=ga(ee,q,re),Ae.return=ee,ee=Ae)}return w(ee);case F:e:{for(nt=re.key;q!==null;){if(q.key===nt)if(q.tag===4&&q.stateNode.containerInfo===re.containerInfo&&q.stateNode.implementation===re.implementation){a(ee,q.sibling),q=u(q,re.children||[]),q.return=ee,ee=q;break e}else{a(ee,q);break}else i(ee,q);q=q.sibling}q=gu(re,ee.mode,Ae),q.return=ee,ee=q}return w(ee);case ne:return nt=re._init,Xt(ee,q,nt(re._payload),Ae)}if(Re(re))return je(ee,q,re,Ae);if(fe(re))return qe(ee,q,re,Ae);_o(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,q!==null&&q.tag===6?(a(ee,q.sibling),q=u(q,re),q.return=ee,ee=q):(a(ee,q),q=mu(re,ee.mode,Ae),q.return=ee,ee=q),w(ee)):a(ee,q)}return Xt}var ms=yh(!0),xh=yh(!1),So=ir(null),Eo=null,gs=null,wc=null;function Tc(){wc=gs=Eo=null}function Ac(t){var i=So.current;zt(So),t._currentValue=i}function Cc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ys(t,i){Eo=t,wc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(Eo===null)throw Error(n(308));gs=t,Eo.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Pr=null;function Rc(t){Pr===null?Pr=[t]:Pr.push(t)}function vh(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,Rc(i)):(a.next=u.next,u.next=a),i.interleaved=a,Di(t,l)}function Di(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ar=!1;function Nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Di(t,a)}return u=l.interleaved,u===null?(i.next=i,Rc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Di(t,a)}function Mo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,jl(t,a)}}function Sh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?u=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?u=g=i:g=g.next=i}else u=g=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:g,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function bo(t,i,a,l){var u=t.updateQueue;ar=!1;var g=u.firstBaseUpdate,w=u.lastBaseUpdate,O=u.shared.pending;if(O!==null){u.shared.pending=null;var V=O,le=V.next;V.next=null,w===null?g=le:w.next=le,w=V;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==w&&(O===null?Me.firstBaseUpdate=le:O.next=le,Me.lastBaseUpdate=V))}if(g!==null){var we=u.baseState;w=0,Me=le=V=null,O=g;do{var Ee=O.lane,ke=O.eventTime;if((l&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var je=t,qe=O;switch(Ee=i,ke=a,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){we=je.call(ke,we,Ee);break e}we=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,Ee=typeof je=="function"?je.call(ke,we,Ee):je,Ee==null)break e;we=P({},we,Ee);break e;case 2:ar=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,Ee=u.effects,Ee===null?u.effects=[O]:Ee.push(O))}else ke={eventTime:ke,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(le=Me=ke,V=we):Me=Me.next=ke,w|=Ee;if(O=O.next,O===null){if(O=u.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,u.lastBaseUpdate=Ee,u.shared.pending=null}}while(!0);if(Me===null&&(V=we),u.baseState=V,u.firstBaseUpdate=le,u.lastBaseUpdate=Me,i=u.shared.interleaved,i!==null){u=i;do w|=u.lane,u=u.next;while(u!==i)}else g===null&&(u.shared.lanes=0);Ur|=w,t.lanes=w,t.memoizedState=we}}function Eh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var ya={},xi=ir(ya),xa=ir(ya),va=ir(ya);function Lr(t){if(t===ya)throw Error(n(174));return t}function Ic(t,i){switch(Dt(va,i),Dt(xa,t),Dt(xi,ya),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}zt(xi),Dt(xi,i)}function xs(){zt(xi),zt(xa),zt(va)}function Mh(t){Lr(va.current);var i=Lr(xi.current),a=We(i,t.type);i!==a&&(Dt(xa,t),Dt(xi,a))}function Pc(t){xa.current===t&&(zt(xi),zt(xa))}var Ht=ir(0);function wo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lc=[];function Dc(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var To=I.ReactCurrentDispatcher,Uc=I.ReactCurrentBatchConfig,Dr=0,Vt=null,Qt=null,nn=null,Ao=!1,_a=!1,Sa=0,jy=0;function pn(){throw Error(n(321))}function Oc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ii(t[a],i[a]))return!1;return!0}function zc(t,i,a,l,u,g){if(Dr=g,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,To.current=t===null||t.memoizedState===null?Yy:$y,t=a(l,u),_a){g=0;do{if(_a=!1,Sa=0,25<=g)throw Error(n(301));g+=1,nn=Qt=null,i.updateQueue=null,To.current=Zy,t=a(l,u)}while(_a)}if(To.current=No,i=Qt!==null&&Qt.next!==null,Dr=0,nn=Qt=Vt=null,Ao=!1,i)throw Error(n(300));return t}function kc(){var t=Sa!==0;return Sa=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Vt.memoizedState=nn=t:nn=nn.next=t,nn}function Yn(){if(Qt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=nn===null?Vt.memoizedState:nn.next;if(i!==null)nn=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},nn===null?Vt.memoizedState=nn=t:nn=nn.next=t}return nn}function Ea(t,i){return typeof i=="function"?i(t):i}function Fc(t){var i=Yn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Qt,u=l.baseQueue,g=a.pending;if(g!==null){if(u!==null){var w=u.next;u.next=g.next,g.next=w}l.baseQueue=u=g,a.pending=null}if(u!==null){g=u.next,l=l.baseState;var O=w=null,V=null,le=g;do{var Me=le.lane;if((Dr&Me)===Me)V!==null&&(V=V.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),l=le.hasEagerState?le.eagerState:t(l,le.action);else{var we={lane:Me,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};V===null?(O=V=we,w=l):V=V.next=we,Vt.lanes|=Me,Ur|=Me}le=le.next}while(le!==null&&le!==g);V===null?w=l:V.next=O,ii(l,i.memoizedState)||(Nn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=V,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do g=u.lane,Vt.lanes|=g,Ur|=g,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Bc(t){var i=Yn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,g=i.memoizedState;if(u!==null){a.pending=null;var w=u=u.next;do g=t(g,w.action),w=w.next;while(w!==u);ii(g,i.memoizedState)||(Nn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,l]}function bh(){}function wh(t,i){var a=Vt,l=Yn(),u=i(),g=!ii(l.memoizedState,u);if(g&&(l.memoizedState=u,Nn=!0),l=l.queue,Hc(Ch.bind(null,a,l,t),[t]),l.getSnapshot!==i||g||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Ma(9,Ah.bind(null,a,l,u,i),void 0,null),rn===null)throw Error(n(349));(Dr&30)!==0||Th(a,i,u)}return u}function Th(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Ah(t,i,a,l){i.value=a,i.getSnapshot=l,Rh(i)&&Nh(t)}function Ch(t,i,a){return a(function(){Rh(i)&&Nh(t)})}function Rh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ii(t,a)}catch{return!0}}function Nh(t){var i=Di(t,1);i!==null&&li(i,t,1,-1)}function Ih(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i.queue=t,t=t.dispatch=qy.bind(null,Vt,t),[i.memoizedState,t]}function Ma(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Ph(){return Yn().memoizedState}function Co(t,i,a,l){var u=vi();Vt.flags|=t,u.memoizedState=Ma(1|i,a,void 0,l===void 0?null:l)}function Ro(t,i,a,l){var u=Yn();l=l===void 0?null:l;var g=void 0;if(Qt!==null){var w=Qt.memoizedState;if(g=w.destroy,l!==null&&Oc(l,w.deps)){u.memoizedState=Ma(i,a,g,l);return}}Vt.flags|=t,u.memoizedState=Ma(1|i,a,g,l)}function Lh(t,i){return Co(8390656,8,t,i)}function Hc(t,i){return Ro(2048,8,t,i)}function Dh(t,i){return Ro(4,2,t,i)}function Uh(t,i){return Ro(4,4,t,i)}function Oh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function zh(t,i,a){return a=a!=null?a.concat([t]):null,Ro(4,4,Oh.bind(null,i,t),a)}function Vc(){}function kh(t,i){var a=Yn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Fh(t,i){var a=Yn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Bh(t,i,a){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=a):(ii(a,i)||(a=Sn(),Vt.lanes|=a,Ur|=a,t.baseState=!0),i)}function Wy(t,i){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var l=Uc.transition;Uc.transition={};try{t(!1),i()}finally{Nt=a,Uc.transition=l}}function Hh(){return Yn().memoizedState}function Xy(t,i,a){var l=dr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Vh(t))Gh(i,a);else if(a=vh(t,i,a,l),a!==null){var u=Mn();li(a,t,l,u),jh(a,i,l)}}function qy(t,i,a){var l=dr(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vh(t))Gh(i,u);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,O=g(w,a);if(u.hasEagerState=!0,u.eagerState=O,ii(O,w)){var V=i.interleaved;V===null?(u.next=u,Rc(i)):(u.next=V.next,V.next=u),i.interleaved=u;return}}catch{}finally{}a=vh(t,i,u,l),a!==null&&(u=Mn(),li(a,t,l,u),jh(a,i,l))}}function Vh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function Gh(t,i){_a=Ao=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function jh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,jl(t,a)}}var No={readContext:qn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Yy={readContext:qn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Lh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Co(4194308,4,Oh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Co(4194308,4,t,i)},useInsertionEffect:function(t,i){return Co(4,2,t,i)},useMemo:function(t,i){var a=vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=vi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Xy.bind(null,Vt,t),[l.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:Ih,useDebugValue:Vc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Ih(!1),i=t[0];return t=Wy.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Vt,u=vi();if(kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),rn===null)throw Error(n(349));(Dr&30)!==0||Th(l,i,a)}u.memoizedState=a;var g={value:a,getSnapshot:i};return u.queue=g,Lh(Ch.bind(null,l,g,t),[t]),l.flags|=2048,Ma(9,Ah.bind(null,l,g,a,i),void 0,null),a},useId:function(){var t=vi(),i=rn.identifierPrefix;if(kt){var a=Li,l=Pi;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Sa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=jy++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},$y={readContext:qn,useCallback:kh,useContext:qn,useEffect:Hc,useImperativeHandle:zh,useInsertionEffect:Dh,useLayoutEffect:Uh,useMemo:Fh,useReducer:Fc,useRef:Ph,useState:function(){return Fc(Ea)},useDebugValue:Vc,useDeferredValue:function(t){var i=Yn();return Bh(i,Qt.memoizedState,t)},useTransition:function(){var t=Fc(Ea)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:wh,useId:Hh,unstable_isNewReconciler:!1},Zy={readContext:qn,useCallback:kh,useContext:qn,useEffect:Hc,useImperativeHandle:zh,useInsertionEffect:Dh,useLayoutEffect:Uh,useMemo:Fh,useReducer:Bc,useRef:Ph,useState:function(){return Bc(Ea)},useDebugValue:Vc,useDeferredValue:function(t){var i=Yn();return Qt===null?i.memoizedState=t:Bh(i,Qt.memoizedState,t)},useTransition:function(){var t=Bc(Ea)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:wh,useId:Hh,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=P({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Gc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:P({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Io={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Mn(),u=dr(t),g=Ui(l,u);g.payload=i,a!=null&&(g.callback=a),i=or(t,g,u),i!==null&&(li(i,t,u,l),Mo(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Mn(),u=dr(t),g=Ui(l,u);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=or(t,g,u),i!==null&&(li(i,t,u,l),Mo(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Mn(),l=dr(t),u=Ui(a,l);u.tag=2,i!=null&&(u.callback=i),i=or(t,u,l),i!==null&&(li(i,t,l,a),Mo(i,t,l))}};function Wh(t,i,a,l,u,g,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,w):i.prototype&&i.prototype.isPureReactComponent?!ca(a,l)||!ca(u,g):!0}function Xh(t,i,a){var l=!1,u=rr,g=i.contextType;return typeof g=="object"&&g!==null?g=qn(g):(u=Rn(i)?Rr:hn.current,l=i.contextTypes,g=(l=l!=null)?ds(t,u):rr),i=new i(a,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Io,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=g),i}function qh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Io.enqueueReplaceState(i,i.state,null)}function jc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Nc(t);var g=i.contextType;typeof g=="object"&&g!==null?u.context=qn(g):(g=Rn(i)?Rr:hn.current,u.context=ds(t,g)),u.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Gc(t,i,g,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Io.enqueueReplaceState(u,u.state,null),bo(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var a="",l=i;do a+=J(l),l=l.return;while(l);var u=a}catch(g){u=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:u,digest:null}}function Wc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Xc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ky=typeof WeakMap=="function"?WeakMap:Map;function Yh(t,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){ko||(ko=!0,ou=l),Xc(t,i)},a}function $h(t,i,a){a=Ui(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){Xc(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Xc(t,i),typeof l!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Zh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ky;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=dx.bind(null,t,i,a),i.then(t,t))}function Kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Qh(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,or(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Qy=I.ReactCurrentOwner,Nn=!1;function En(t,i,a,l){i.child=t===null?xh(i,null,a,l):ms(i,t.child,a,l)}function Jh(t,i,a,l,u){a=a.render;var g=i.ref;return ys(i,u),l=zc(t,i,a,l,g,u),a=kc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Oi(t,i,u)):(kt&&a&&_c(i),i.flags|=1,En(t,i,l,u),i.child)}function ep(t,i,a,l,u){if(t===null){var g=a.type;return typeof g=="function"&&!pu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,tp(t,i,g,l,u)):(t=jo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&u)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ca,a(w,l)&&t.ref===i.ref)return Oi(t,i,u)}return i.flags|=1,t=hr(g,l),t.ref=i.ref,t.return=i,i.child=t}function tp(t,i,a,l,u){if(t!==null){var g=t.memoizedProps;if(ca(g,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=g,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Oi(t,i,u)}return qc(t,i,a,l,u)}function np(t,i,a){var l=i.pendingProps,u=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ss,Bn),Bn|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Ss,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:a,Dt(Ss,Bn),Bn|=l}else g!==null?(l=g.baseLanes|a,i.memoizedState=null):l=a,Dt(Ss,Bn),Bn|=l;return En(t,i,u,a),i.child}function ip(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function qc(t,i,a,l,u){var g=Rn(a)?Rr:hn.current;return g=ds(i,g),ys(i,u),a=zc(t,i,a,l,g,u),l=kc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Oi(t,i,u)):(kt&&l&&_c(i),i.flags|=1,En(t,i,a,u),i.child)}function rp(t,i,a,l,u){if(Rn(a)){var g=!0;mo(i)}else g=!1;if(ys(i,u),i.stateNode===null)Lo(t,i),Xh(i,a,l),jc(i,a,l,u),l=!0;else if(t===null){var w=i.stateNode,O=i.memoizedProps;w.props=O;var V=w.context,le=a.contextType;typeof le=="object"&&le!==null?le=qn(le):(le=Rn(a)?Rr:hn.current,le=ds(i,le));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==l||V!==le)&&qh(i,w,l,le),ar=!1;var Ee=i.memoizedState;w.state=Ee,bo(i,l,w,u),V=i.memoizedState,O!==l||Ee!==V||Cn.current||ar?(typeof Me=="function"&&(Gc(i,a,Me,l),V=i.memoizedState),(O=ar||Wh(i,a,O,l,Ee,V,le))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),w.props=l,w.state=V,w.context=le,l=O):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,_h(t,i),O=i.memoizedProps,le=i.type===i.elementType?O:si(i.type,O),w.props=le,we=i.pendingProps,Ee=w.context,V=a.contextType,typeof V=="object"&&V!==null?V=qn(V):(V=Rn(a)?Rr:hn.current,V=ds(i,V));var ke=a.getDerivedStateFromProps;(Me=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==we||Ee!==V)&&qh(i,w,l,V),ar=!1,Ee=i.memoizedState,w.state=Ee,bo(i,l,w,u);var je=i.memoizedState;O!==we||Ee!==je||Cn.current||ar?(typeof ke=="function"&&(Gc(i,a,ke,l),je=i.memoizedState),(le=ar||Wh(i,a,le,l,Ee,je,V)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,je,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,je,V)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=je),w.props=l,w.state=je,w.context=V,l=le):(typeof w.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return Yc(t,i,a,l,g,u)}function Yc(t,i,a,l,u,g){ip(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return u&&ch(i,a,!1),Oi(t,i,g);l=i.stateNode,Qy.current=i;var O=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=ms(i,t.child,null,g),i.child=ms(i,null,O,g)):En(t,i,O,g),i.memoizedState=l.state,u&&ch(i,a,!0),i.child}function sp(t){var i=t.stateNode;i.pendingContext?oh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(t,i.context,!1),Ic(t,i.containerInfo)}function ap(t,i,a,l,u){return ps(),bc(u),i.flags|=256,En(t,i,a,l),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function op(t,i,a){var l=i.pendingProps,u=Ht.current,g=!1,w=(i.flags&128)!==0,O;if((O=w)||(O=t!==null&&t.memoizedState===null?!1:(u&2)!==0),O?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Dt(Ht,u&1),t===null)return Mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,g?(l=i.mode,g=i.child,w={mode:"hidden",children:w},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Wo(w,l,0,null),t=Fr(t,l,a,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=Zc(a),i.memoizedState=$c,t):Kc(i,w));if(u=t.memoizedState,u!==null&&(O=u.dehydrated,O!==null))return Jy(t,i,w,l,O,u,a);if(g){g=l.fallback,w=i.mode,u=t.child,O=u.sibling;var V={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=V,i.deletions=null):(l=hr(u,V),l.subtreeFlags=u.subtreeFlags&14680064),O!==null?g=hr(O,g):(g=Fr(g,w,a,null),g.flags|=2),g.return=i,l.return=i,l.sibling=g,i.child=l,l=g,g=i.child,w=t.child.memoizedState,w=w===null?Zc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=t.childLanes&~a,i.memoizedState=$c,l}return g=t.child,t=g.sibling,l=hr(g,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Kc(t,i){return i=Wo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Po(t,i,a,l){return l!==null&&bc(l),ms(i,t.child,null,a),t=Kc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Jy(t,i,a,l,u,g,w){if(a)return i.flags&256?(i.flags&=-257,l=Wc(Error(n(422))),Po(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=l.fallback,u=i.mode,l=Wo({mode:"visible",children:l.children},u,0,null),g=Fr(g,u,w,null),g.flags|=2,l.return=i,g.return=i,l.sibling=g,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,w),i.child.memoizedState=Zc(w),i.memoizedState=$c,g);if((i.mode&1)===0)return Po(t,i,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var O=l.dgst;return l=O,g=Error(n(419)),l=Wc(g,l,void 0),Po(t,i,w,l)}if(O=(w&t.childLanes)!==0,Nn||O){if(l=rn,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==g.retryLane&&(g.retryLane=u,Di(t,u),li(l,t,u,-1))}return hu(),l=Wc(Error(n(421))),Po(t,i,w,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=fx.bind(null,t),u._reactRetry=i,null):(t=g.treeContext,Fn=nr(u.nextSibling),kn=i,kt=!0,ri=null,t!==null&&(Wn[Xn++]=Pi,Wn[Xn++]=Li,Wn[Xn++]=Nr,Pi=t.id,Li=t.overflow,Nr=i),i=Kc(i,l.children),i.flags|=4096,i)}function lp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cc(t.return,i,a)}function Qc(t,i,a,l,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=a,g.tailMode=u)}function cp(t,i,a){var l=i.pendingProps,u=l.revealOrder,g=l.tail;if(En(t,i,l.children,a),l=Ht.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,a,i);else if(t.tag===19)lp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Ht,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&wo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Qc(i,!1,u,a,g);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&wo(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Qc(i,!0,a,null,g);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Oi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=hr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=hr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function ex(t,i,a){switch(i.tag){case 3:sp(i),ps();break;case 5:Mh(i);break;case 1:Rn(i.type)&&mo(i);break;case 4:Ic(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Dt(So,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?op(t,i,a):(Dt(Ht,Ht.current&1),t=Oi(t,i,a),t!==null?t.sibling:null);Dt(Ht,Ht.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return cp(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Dt(Ht,Ht.current),l)break;return null;case 22:case 23:return i.lanes=0,np(t,i,a)}return Oi(t,i,a)}var up,Jc,dp,fp;up=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jc=function(){},dp=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Lr(xi.current);var g=null;switch(a){case"input":u=B(t,u),l=B(t,l),g=[];break;case"select":u=P({},u,{value:void 0}),l=P({},l,{value:void 0}),g=[];break;case"textarea":u=A(t,u),l=A(t,l),g=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=fo)}xt(a,l);var w;a=null;for(le in u)if(!l.hasOwnProperty(le)&&u.hasOwnProperty(le)&&u[le]!=null)if(le==="style"){var O=u[le];for(w in O)O.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in l){var V=l[le];if(O=u!=null?u[le]:void 0,l.hasOwnProperty(le)&&V!==O&&(V!=null||O!=null))if(le==="style")if(O){for(w in O)!O.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in V)V.hasOwnProperty(w)&&O[w]!==V[w]&&(a||(a={}),a[w]=V[w])}else a||(g||(g=[]),g.push(le,a)),a=V;else le==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(g=g||[]).push(le,V)):le==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(le,""+V):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(V!=null&&le==="onScroll"&&Ot("scroll",t),g||O===V||(g=[])):(g=g||[]).push(le,V))}a&&(g=g||[]).push("style",a);var le=g;(i.updateQueue=le)&&(i.flags|=4)}},fp=function(t,i,a,l){a!==l&&(i.flags|=4)};function ba(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function tx(t,i,a){var l=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Rn(i.type)&&po(),mn(i),null;case 3:return l=i.stateNode,xs(),zt(Cn),zt(hn),Dc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(vo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(uu(ri),ri=null))),Jc(t,i),mn(i),null;case 5:Pc(i);var u=Lr(va.current);if(a=i.type,t!==null&&i.stateNode!=null)dp(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=Lr(xi.current),vo(i)){l=i.stateNode,a=i.type;var g=i.memoizedProps;switch(l[yi]=i,l[pa]=g,t=(i.mode&1)!==0,a){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(u=0;u<da.length;u++)Ot(da[u],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":ut(l,g),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",l);break;case"textarea":se(l,g),Ot("invalid",l)}xt(a,g),u=null;for(var w in g)if(g.hasOwnProperty(w)){var O=g[w];w==="children"?typeof O=="string"?l.textContent!==O&&(g.suppressHydrationWarning!==!0&&uo(l.textContent,O,t),u=["children",O]):typeof O=="number"&&l.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&uo(l.textContent,O,t),u=["children",""+O]):o.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Ot("scroll",l)}switch(a){case"input":Ke(l),Fe(l,g,!0);break;case"textarea":Ke(l),Se(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=fo)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ye(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[yi]=i,t[pa]=l,up(t,i,!1,!1),i.stateNode=t;e:{switch(w=lt(a,l),a){case"dialog":Ot("cancel",t),Ot("close",t),u=l;break;case"iframe":case"object":case"embed":Ot("load",t),u=l;break;case"video":case"audio":for(u=0;u<da.length;u++)Ot(da[u],t);u=l;break;case"source":Ot("error",t),u=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),u=l;break;case"details":Ot("toggle",t),u=l;break;case"input":ut(t,l),u=B(t,l),Ot("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=P({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":se(t,l),u=A(t,l),Ot("invalid",t);break;default:u=l}xt(a,u),O=u;for(g in O)if(O.hasOwnProperty(g)){var V=O[g];g==="style"?rt(t,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ze(t,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ht(t,V):typeof V=="number"&&ht(t,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Ot("scroll",t):V!=null&&U(t,g,V,w))}switch(a){case"input":Ke(t),Fe(t,l,!1);break;case"textarea":Ke(t),Se(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ge(l.value));break;case"select":t.multiple=!!l.multiple,g=l.value,g!=null?D(t,!!l.multiple,g,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=fo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)fp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Lr(va.current),Lr(xi.current),vo(i)){if(l=i.stateNode,a=i.memoizedProps,l[yi]=i,(g=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:uo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(l.nodeValue,a,(t.mode&1)!==0)}g&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[yi]=i,i.stateNode=l}return mn(i),null;case 13:if(zt(Ht),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mh(),ps(),i.flags|=98560,g=!1;else if(g=vo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[yi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),g=!1}else ri!==null&&(uu(ri),ri=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):hu())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return xs(),Jc(t,i),t===null&&fa(i.stateNode.containerInfo),mn(i),null;case 10:return Ac(i.type._context),mn(i),null;case 17:return Rn(i.type)&&po(),mn(i),null;case 19:if(zt(Ht),g=i.memoizedState,g===null)return mn(i),null;if(l=(i.flags&128)!==0,w=g.rendering,w===null)if(l)ba(g,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=wo(t),w!==null){for(i.flags|=128,ba(g,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)g=a,t=l,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,t=w.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Dt(Ht,Ht.current&1|2),i.child}t=t.sibling}g.tail!==null&&Te()>Es&&(i.flags|=128,l=!0,ba(g,!1),i.lanes=4194304)}else{if(!l)if(t=wo(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ba(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!kt)return mn(i),null}else 2*Te()-g.renderingStartTime>Es&&a!==1073741824&&(i.flags|=128,l=!0,ba(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Te(),i.sibling=null,a=Ht.current,Dt(Ht,l?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return fu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function nx(t,i){switch(Sc(i),i.tag){case 1:return Rn(i.type)&&po(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),zt(Cn),zt(hn),Dc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Pc(i),null;case 13:if(zt(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(Ht),null;case 4:return xs(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Do=!1,gn=!1,ix=typeof WeakSet=="function"?WeakSet:Set,He=null;function _s(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){jt(t,i,l)}else a.current=null}function eu(t,i,a){try{a()}catch(l){jt(t,i,l)}}var hp=!1;function rx(t,i){if(fc=Ja,t=Wf(),rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,O=-1,V=-1,le=0,Me=0,we=t,Ee=null;t:for(;;){for(var ke;we!==a||u!==0&&we.nodeType!==3||(O=w+u),we!==g||l!==0&&we.nodeType!==3||(V=w+l),we.nodeType===3&&(w+=we.nodeValue.length),(ke=we.firstChild)!==null;)Ee=we,we=ke;for(;;){if(we===t)break t;if(Ee===a&&++le===u&&(O=w),Ee===g&&++Me===l&&(V=w),(ke=we.nextSibling)!==null)break;we=Ee,Ee=we.parentNode}we=ke}a=O===-1||V===-1?null:{start:O,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(hc={focusedElem:t,selectionRange:a},Ja=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,Xt=je.memoizedState,ee=i.stateNode,q=ee.getSnapshotBeforeUpdate(i.elementType===i.type?qe:si(i.type,qe),Xt);ee.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){jt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return je=hp,hp=!1,je}function wa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var g=u.destroy;u.destroy=void 0,g!==void 0&&eu(i,a,g)}u=u.next}while(u!==l)}}function Uo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function tu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function pp(t){var i=t.alternate;i!==null&&(t.alternate=null,pp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[yi],delete i[pa],delete i[yc],delete i[By],delete i[Hy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mp(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=fo));else if(l!==4&&(t=t.child,t!==null))for(nu(t,i,a),t=t.sibling;t!==null;)nu(t,i,a),t=t.sibling}function iu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,a),t=t.sibling;t!==null;)iu(t,i,a),t=t.sibling}var ln=null,ai=!1;function lr(t,i,a){for(a=a.child;a!==null;)yp(t,i,a),a=a.sibling}function yp(t,i,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 5:gn||_s(a,i);case 6:var l=ln,u=ai;ln=null,lr(t,i,a),ln=l,ai=u,ln!==null&&(ai?(t=ln,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(ai?(t=ln,a=a.stateNode,t.nodeType===8?gc(t.parentNode,a):t.nodeType===1&&gc(t,a),ia(t)):gc(ln,a.stateNode));break;case 4:l=ln,u=ai,ln=a.stateNode.containerInfo,ai=!0,lr(t,i,a),ln=l,ai=u;break;case 0:case 11:case 14:case 15:if(!gn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var g=u,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&eu(a,i,w),u=u.next}while(u!==l)}lr(t,i,a);break;case 1:if(!gn&&(_s(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(O){jt(a,i,O)}lr(t,i,a);break;case 21:lr(t,i,a);break;case 22:a.mode&1?(gn=(l=gn)||a.memoizedState!==null,lr(t,i,a),gn=l):lr(t,i,a);break;default:lr(t,i,a)}}function xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new ix),i.forEach(function(l){var u=hx.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function oi(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var g=t,w=i,O=w;e:for(;O!==null;){switch(O.tag){case 5:ln=O.stateNode,ai=!1;break e;case 3:ln=O.stateNode.containerInfo,ai=!0;break e;case 4:ln=O.stateNode.containerInfo,ai=!0;break e}O=O.return}if(ln===null)throw Error(n(160));yp(g,w,u),ln=null,ai=!1;var V=u.alternate;V!==null&&(V.return=null),u.return=null}catch(le){jt(u,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vp(i,t),i=i.sibling}function vp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),_i(t),l&4){try{wa(3,t,t.return),Uo(3,t)}catch(qe){jt(t,t.return,qe)}try{wa(5,t,t.return)}catch(qe){jt(t,t.return,qe)}}break;case 1:oi(i,t),_i(t),l&512&&a!==null&&_s(a,a.return);break;case 5:if(oi(i,t),_i(t),l&512&&a!==null&&_s(a,a.return),t.flags&32){var u=t.stateNode;try{ht(u,"")}catch(qe){jt(t,t.return,qe)}}if(l&4&&(u=t.stateNode,u!=null)){var g=t.memoizedProps,w=a!==null?a.memoizedProps:g,O=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&Je(u,g),lt(O,w);var le=lt(O,g);for(w=0;w<V.length;w+=2){var Me=V[w],we=V[w+1];Me==="style"?rt(u,we):Me==="dangerouslySetInnerHTML"?ze(u,we):Me==="children"?ht(u,we):U(u,Me,we,le)}switch(O){case"input":et(u,g);break;case"textarea":ve(u,g);break;case"select":var Ee=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!g.multiple;var ke=g.value;ke!=null?D(u,!!g.multiple,ke,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?D(u,!!g.multiple,g.defaultValue,!0):D(u,!!g.multiple,g.multiple?[]:"",!1))}u[pa]=g}catch(qe){jt(t,t.return,qe)}}break;case 6:if(oi(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,g=t.memoizedProps;try{u.nodeValue=g}catch(qe){jt(t,t.return,qe)}}break;case 3:if(oi(i,t),_i(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ia(i.containerInfo)}catch(qe){jt(t,t.return,qe)}break;case 4:oi(i,t),_i(t);break;case 13:oi(i,t),_i(t),u=t.child,u.flags&8192&&(g=u.memoizedState!==null,u.stateNode.isHidden=g,!g||u.alternate!==null&&u.alternate.memoizedState!==null||(au=Te())),l&4&&xp(t);break;case 22:if(Me=a!==null&&a.memoizedState!==null,t.mode&1?(gn=(le=gn)||Me,oi(i,t),gn=le):oi(i,t),_i(t),l&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!Me&&(t.mode&1)!==0)for(He=t,Me=t.child;Me!==null;){for(we=He=Me;He!==null;){switch(Ee=He,ke=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:wa(4,Ee,Ee.return);break;case 1:_s(Ee,Ee.return);var je=Ee.stateNode;if(typeof je.componentWillUnmount=="function"){l=Ee,a=Ee.return;try{i=l,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(qe){jt(l,a,qe)}}break;case 5:_s(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Ep(we);continue}}ke!==null?(ke.return=Ee,He=ke):Ep(we)}Me=Me.sibling}e:for(Me=null,we=t;;){if(we.tag===5){if(Me===null){Me=we;try{u=we.stateNode,le?(g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=we.stateNode,V=we.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=tt("display",w))}catch(qe){jt(t,t.return,qe)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=le?"":we.memoizedProps}catch(qe){jt(t,t.return,qe)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:oi(i,t),_i(t),l&4&&xp(t);break;case 21:break;default:oi(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(mp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ht(u,""),l.flags&=-33);var g=gp(t);iu(t,g,u);break;case 3:case 4:var w=l.stateNode.containerInfo,O=gp(t);nu(t,O,w);break;default:throw Error(n(161))}}catch(V){jt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function sx(t,i,a){He=t,_p(t)}function _p(t,i,a){for(var l=(t.mode&1)!==0;He!==null;){var u=He,g=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||Do;if(!w){var O=u.alternate,V=O!==null&&O.memoizedState!==null||gn;O=Do;var le=gn;if(Do=w,(gn=V)&&!le)for(He=u;He!==null;)w=He,V=w.child,w.tag===22&&w.memoizedState!==null?Mp(u):V!==null?(V.return=w,He=V):Mp(u);for(;g!==null;)He=g,_p(g),g=g.sibling;He=u,Do=O,gn=le}Sp(t)}else(u.subtreeFlags&8772)!==0&&g!==null?(g.return=u,He=g):Sp(t)}}function Sp(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Uo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!gn)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Eh(i,g,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Eh(i,w,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Me=le.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&ia(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&tu(i)}catch(Ee){jt(i,i.return,Ee)}}if(i===t){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function Ep(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Mp(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Uo(4,i)}catch(V){jt(i,a,V)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(V){jt(i,u,V)}}var g=i.return;try{tu(i)}catch(V){jt(i,g,V)}break;case 5:var w=i.return;try{tu(i)}catch(V){jt(i,w,V)}}}catch(V){jt(i,i.return,V)}if(i===t){He=null;break}var O=i.sibling;if(O!==null){O.return=i.return,He=O;break}He=i.return}}var ax=Math.ceil,Oo=I.ReactCurrentDispatcher,ru=I.ReactCurrentOwner,$n=I.ReactCurrentBatchConfig,bt=0,rn=null,qt=null,cn=0,Bn=0,Ss=ir(0),Jt=0,Ta=null,Ur=0,zo=0,su=0,Aa=null,In=null,au=0,Es=1/0,zi=null,ko=!1,ou=null,cr=null,Fo=!1,ur=null,Bo=0,Ca=0,lu=null,Ho=-1,Vo=0;function Mn(){return(bt&6)!==0?Te():Ho!==-1?Ho:Ho=Te()}function dr(t){return(t.mode&1)===0?1:(bt&2)!==0&&cn!==0?cn&-cn:Gy.transition!==null?(Vo===0&&(Vo=Sn()),Vo):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:wf(t.type)),t)}function li(t,i,a,l){if(50<Ca)throw Ca=0,lu=null,Error(n(185));An(t,a,l),((bt&2)===0||t!==rn)&&(t===rn&&((bt&2)===0&&(zo|=a),Jt===4&&fr(t,cn)),Pn(t,l),a===1&&bt===0&&(i.mode&1)===0&&(Es=Te()+500,go&&sr()))}function Pn(t,i){var a=t.callbackNode;Gn(t,i);var l=gi(t,t===rn?cn:0);if(l===0)a!==null&&ue(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ue(a),i===1)t.tag===0?Vy(wp.bind(null,t)):uh(wp.bind(null,t)),ky(function(){(bt&6)===0&&sr()}),a=null;else{switch(yf(l)){case 1:a=Xe;break;case 4:a=st;break;case 16:a=ot;break;case 536870912:a=St;break;default:a=ot}a=Lp(a,bp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function bp(t,i){if(Ho=-1,Vo=0,(bt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ms()&&t.callbackNode!==a)return null;var l=gi(t,t===rn?cn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Go(t,l);else{i=l;var u=bt;bt|=2;var g=Ap();(rn!==t||cn!==i)&&(zi=null,Es=Te()+500,zr(t,i));do try{cx();break}catch(O){Tp(t,O)}while(!0);Tc(),Oo.current=g,bt=u,qt!==null?i=0:(rn=null,cn=0,i=Jt)}if(i!==0){if(i===2&&(u=Ri(t),u!==0&&(l=u,i=cu(t,u))),i===1)throw a=Ta,zr(t,0),fr(t,l),Pn(t,Te()),a;if(i===6)fr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!ox(u)&&(i=Go(t,l),i===2&&(g=Ri(t),g!==0&&(l=g,i=cu(t,g))),i===1))throw a=Ta,zr(t,0),fr(t,l),Pn(t,Te()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:kr(t,In,zi);break;case 3:if(fr(t,l),(l&130023424)===l&&(i=au+500-Te(),10<i)){if(gi(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=mc(kr.bind(null,t,In,zi),i);break}kr(t,In,zi);break;case 4:if(fr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var w=31-pt(l);g=1<<w,w=i[w],w>u&&(u=w),l&=~g}if(l=u,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*ax(l/1960))-l,10<l){t.timeoutHandle=mc(kr.bind(null,t,In,zi),l);break}kr(t,In,zi);break;case 5:kr(t,In,zi);break;default:throw Error(n(329))}}}return Pn(t,Te()),t.callbackNode===a?bp.bind(null,t):null}function cu(t,i){var a=Aa;return t.current.memoizedState.isDehydrated&&(zr(t,i).flags|=256),t=Go(t,i),t!==2&&(i=In,In=a,i!==null&&uu(i)),t}function uu(t){In===null?In=t:In.push.apply(In,t)}function ox(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],g=u.getSnapshot;u=u.value;try{if(!ii(g(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~su,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-pt(i),l=1<<a;t[a]=-1,i&=~l}}function wp(t){if((bt&6)!==0)throw Error(n(327));Ms();var i=gi(t,0);if((i&1)===0)return Pn(t,Te()),null;var a=Go(t,i);if(t.tag!==0&&a===2){var l=Ri(t);l!==0&&(i=l,a=cu(t,l))}if(a===1)throw a=Ta,zr(t,0),fr(t,i),Pn(t,Te()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,In,zi),Pn(t,Te()),null}function du(t,i){var a=bt;bt|=1;try{return t(i)}finally{bt=a,bt===0&&(Es=Te()+500,go&&sr())}}function Or(t){ur!==null&&ur.tag===0&&(bt&6)===0&&Ms();var i=bt;bt|=1;var a=$n.transition,l=Nt;try{if($n.transition=null,Nt=1,t)return t()}finally{Nt=l,$n.transition=a,bt=i,(bt&6)===0&&sr()}}function fu(){Bn=Ss.current,zt(Ss)}function zr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,zy(a)),qt!==null)for(a=qt.return;a!==null;){var l=a;switch(Sc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&po();break;case 3:xs(),zt(Cn),zt(hn),Dc();break;case 5:Pc(l);break;case 4:xs();break;case 13:zt(Ht);break;case 19:zt(Ht);break;case 10:Ac(l.type._context);break;case 22:case 23:fu()}a=a.return}if(rn=t,qt=t=hr(t.current,null),cn=Bn=i,Jt=0,Ta=null,su=zo=Ur=0,In=Aa=null,Pr!==null){for(i=0;i<Pr.length;i++)if(a=Pr[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,g=a.pending;if(g!==null){var w=g.next;g.next=u,l.next=w}a.pending=l}Pr=null}return t}function Tp(t,i){do{var a=qt;try{if(Tc(),To.current=No,Ao){for(var l=Vt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ao=!1}if(Dr=0,nn=Qt=Vt=null,_a=!1,Sa=0,ru.current=null,a===null||a.return===null){Jt=1,Ta=i,qt=null;break}e:{var g=t,w=a.return,O=a,V=i;if(i=cn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var le=V,Me=O,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ke=Kh(w);if(ke!==null){ke.flags&=-257,Qh(ke,w,O,g,i),ke.mode&1&&Zh(g,le,i),i=ke,V=le;var je=i.updateQueue;if(je===null){var qe=new Set;qe.add(V),i.updateQueue=qe}else je.add(V);break e}else{if((i&1)===0){Zh(g,le,i),hu();break e}V=Error(n(426))}}else if(kt&&O.mode&1){var Xt=Kh(w);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Qh(Xt,w,O,g,i),bc(vs(V,O));break e}}g=V=vs(V,O),Jt!==4&&(Jt=2),Aa===null?Aa=[g]:Aa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=Yh(g,V,i);Sh(g,ee);break e;case 1:O=V;var q=g.type,re=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(cr===null||!cr.has(re)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=$h(g,O,i);Sh(g,Ae);break e}}g=g.return}while(g!==null)}Rp(a)}catch(Ze){i=Ze,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function Ap(){var t=Oo.current;return Oo.current=No,t===null?No:t}function hu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||(Ur&268435455)===0&&(zo&268435455)===0||fr(rn,cn)}function Go(t,i){var a=bt;bt|=2;var l=Ap();(rn!==t||cn!==i)&&(zi=null,zr(t,i));do try{lx();break}catch(u){Tp(t,u)}while(!0);if(Tc(),bt=a,Oo.current=l,qt!==null)throw Error(n(261));return rn=null,cn=0,Jt}function lx(){for(;qt!==null;)Cp(qt)}function cx(){for(;qt!==null&&!Z();)Cp(qt)}function Cp(t){var i=Pp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Rp(t):qt=i,ru.current=null}function Rp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=tx(a,i,Bn),a!==null){qt=a;return}}else{if(a=nx(a,i),a!==null){a.flags&=32767,qt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Jt===0&&(Jt=5)}function kr(t,i,a){var l=Nt,u=$n.transition;try{$n.transition=null,Nt=1,ux(t,i,a,l)}finally{$n.transition=u,Nt=l}return null}function ux(t,i,a,l){do Ms();while(ur!==null);if((bt&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(Za(t,g),t===rn&&(qt=rn=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fo||(Fo=!0,Lp(ot,function(){return Ms(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=$n.transition,$n.transition=null;var w=Nt;Nt=1;var O=bt;bt|=4,ru.current=null,rx(t,a),vp(a,t),Ny(hc),Ja=!!fc,hc=fc=null,t.current=a,sx(a),Ce(),bt=O,Nt=w,$n.transition=g}else t.current=a;if(Fo&&(Fo=!1,ur=t,Bo=u),g=t.pendingLanes,g===0&&(cr=null),dn(a.stateNode),Pn(t,Te()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(ko)throw ko=!1,t=ou,ou=null,t;return(Bo&1)!==0&&t.tag!==0&&Ms(),g=t.pendingLanes,(g&1)!==0?t===lu?Ca++:(Ca=0,lu=t):Ca=0,sr(),null}function Ms(){if(ur!==null){var t=yf(Bo),i=$n.transition,a=Nt;try{if($n.transition=null,Nt=16>t?16:t,ur===null)var l=!1;else{if(t=ur,ur=null,Bo=0,(bt&6)!==0)throw Error(n(331));var u=bt;for(bt|=4,He=t.current;He!==null;){var g=He,w=g.child;if((He.flags&16)!==0){var O=g.deletions;if(O!==null){for(var V=0;V<O.length;V++){var le=O[V];for(He=le;He!==null;){var Me=He;switch(Me.tag){case 0:case 11:case 15:wa(8,Me,g)}var we=Me.child;if(we!==null)we.return=Me,He=we;else for(;He!==null;){Me=He;var Ee=Me.sibling,ke=Me.return;if(pp(Me),Me===le){He=null;break}if(Ee!==null){Ee.return=ke,He=Ee;break}He=ke}}}var je=g.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var Xt=qe.sibling;qe.sibling=null,qe=Xt}while(qe!==null)}}He=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,He=w;else e:for(;He!==null;){if(g=He,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:wa(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,He=ee;break e}He=g.return}}var q=t.current;for(He=q;He!==null;){w=He;var re=w.child;if((w.subtreeFlags&2064)!==0&&re!==null)re.return=w,He=re;else e:for(w=q;He!==null;){if(O=He,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Uo(9,O)}}catch(Ze){jt(O,O.return,Ze)}if(O===w){He=null;break e}var Ae=O.sibling;if(Ae!==null){Ae.return=O.return,He=Ae;break e}He=O.return}}if(bt=u,sr(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ct,t)}catch{}l=!0}return l}finally{Nt=a,$n.transition=i}}return!1}function Np(t,i,a){i=vs(a,i),i=Yh(t,i,1),t=or(t,i,1),i=Mn(),t!==null&&(An(t,1,i),Pn(t,i))}function jt(t,i,a){if(t.tag===3)Np(t,t,a);else for(;i!==null;){if(i.tag===3){Np(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cr===null||!cr.has(l))){t=vs(a,t),t=$h(i,t,1),i=or(i,t,1),t=Mn(),i!==null&&(An(i,1,t),Pn(i,t));break}}i=i.return}}function dx(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&a,rn===t&&(cn&a)===a&&(Jt===4||Jt===3&&(cn&130023424)===cn&&500>Te()-au?zr(t,0):su|=a),Pn(t,i)}function Ip(t,i){i===0&&((t.mode&1)===0?i=1:(i=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var a=Mn();t=Di(t,i),t!==null&&(An(t,i,a),Pn(t,a))}function fx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Ip(t,a)}function hx(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ip(t,a)}var Pp;Pp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Nn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,ex(t,i,a);Nn=(t.flags&131072)!==0}else Nn=!1,kt&&(i.flags&1048576)!==0&&dh(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Lo(t,i),t=i.pendingProps;var u=ds(i,hn.current);ys(i,a),u=zc(null,i,l,t,u,a);var g=kc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(l)?(g=!0,mo(i)):g=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Nc(i),u.updater=Io,i.stateNode=u,u._reactInternals=i,jc(i,l,t,a),i=Yc(null,i,l,!0,g,a)):(i.tag=0,kt&&g&&_c(i),En(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=mx(l),t=si(l,t),u){case 0:i=qc(null,i,l,t,a);break e;case 1:i=rp(null,i,l,t,a);break e;case 11:i=Jh(null,i,l,t,a);break e;case 14:i=ep(null,i,l,si(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),qc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),rp(t,i,l,u,a);case 3:e:{if(sp(i),t===null)throw Error(n(387));l=i.pendingProps,g=i.memoizedState,u=g.element,_h(t,i),bo(i,l,null,a);var w=i.memoizedState;if(l=w.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){u=vs(Error(n(423)),i),i=ap(t,i,l,a,u);break e}else if(l!==u){u=vs(Error(n(424)),i),i=ap(t,i,l,a,u);break e}else for(Fn=nr(i.stateNode.containerInfo.firstChild),kn=i,kt=!0,ri=null,a=xh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),l===u){i=Oi(t,i,a);break e}En(t,i,l,a)}i=i.child}return i;case 5:return Mh(i),t===null&&Mc(i),l=i.type,u=i.pendingProps,g=t!==null?t.memoizedProps:null,w=u.children,pc(l,u)?w=null:g!==null&&pc(l,g)&&(i.flags|=32),ip(t,i),En(t,i,w,a),i.child;case 6:return t===null&&Mc(i),null;case 13:return op(t,i,a);case 4:return Ic(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,a):En(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),Jh(t,i,l,u,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,g=i.memoizedProps,w=u.value,Dt(So,l._currentValue),l._currentValue=w,g!==null)if(ii(g.value,w)){if(g.children===u.children&&!Cn.current){i=Oi(t,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var O=g.dependencies;if(O!==null){w=g.child;for(var V=O.firstContext;V!==null;){if(V.context===l){if(g.tag===1){V=Ui(-1,a&-a),V.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var Me=le.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),le.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),Cc(g.return,a,i),O.lanes|=a;break}V=V.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(n(341));w.lanes|=a,O=w.alternate,O!==null&&(O.lanes|=a),Cc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}En(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ys(i,a),u=qn(u),l=l(u),i.flags|=1,En(t,i,l,a),i.child;case 14:return l=i.type,u=si(l,i.pendingProps),u=si(l.type,u),ep(t,i,l,u,a);case 15:return tp(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:si(l,u),Lo(t,i),i.tag=1,Rn(l)?(t=!0,mo(i)):t=!1,ys(i,a),Xh(i,l,u),jc(i,l,u,a),Yc(null,i,l,!0,t,a);case 19:return cp(t,i,a);case 22:return np(t,i,a)}throw Error(n(156,i.tag))};function Lp(t,i){return ce(t,i)}function px(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,a,l){return new px(t,i,a,l)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mx(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===de)return 14}return 2}function hr(t,i){var a=t.alternate;return a===null?(a=Zn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function jo(t,i,a,l,u,g){var w=2;if(l=t,typeof t=="function")pu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case k:return Fr(a.children,u,g,i);case j:w=8,u|=8;break;case N:return t=Zn(12,a,i,u|2),t.elementType=N,t.lanes=g,t;case W:return t=Zn(13,a,i,u),t.elementType=W,t.lanes=g,t;case te:return t=Zn(19,a,i,u),t.elementType=te,t.lanes=g,t;case oe:return Wo(a,u,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case L:w=9;break e;case K:w=11;break e;case de:w=14;break e;case ne:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Zn(w,a,i,u),i.elementType=t,i.type=l,i.lanes=g,i}function Fr(t,i,a,l){return t=Zn(7,t,l,i),t.lanes=a,t}function Wo(t,i,a,l){return t=Zn(22,t,l,i),t.elementType=oe,t.lanes=a,t.stateNode={isHidden:!1},t}function mu(t,i,a){return t=Zn(6,t,null,i),t.lanes=a,t}function gu(t,i,a){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function gx(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jn(0),this.expirationTimes=jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function yu(t,i,a,l,u,g,w,O,V){return t=new gx(t,i,a,O,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Zn(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(g),t}function yx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Dp(t){if(!t)return rr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Rn(a))return lh(t,a,i)}return i}function Up(t,i,a,l,u,g,w,O,V){return t=yu(a,l,!0,t,u,g,w,O,V),t.context=Dp(null),a=t.current,l=Mn(),u=dr(a),g=Ui(l,u),g.callback=i??null,or(a,g,u),t.current.lanes=u,An(t,u,l),Pn(t,l),t}function Xo(t,i,a,l){var u=i.current,g=Mn(),w=dr(u);return a=Dp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(g,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=or(u,i,w),t!==null&&(li(t,u,w,g),Mo(t,u,w)),w}function qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function xu(t,i){Op(t,i),(t=t.alternate)&&Op(t,i)}function xx(){return null}var zp=typeof reportError=="function"?reportError:function(t){console.error(t)};function vu(t){this._internalRoot=t}Yo.prototype.render=vu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Xo(t,i,null,null)},Yo.prototype.unmount=vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){Xo(null,t,null,null)}),i[Ni]=null}};function Yo(t){this._internalRoot=t}Yo.prototype.unstable_scheduleHydration=function(t){if(t){var i=_f();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ji.length&&i!==0&&i<Ji[a].priority;a++);Ji.splice(a,0,t),a===0&&Mf(t)}};function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function vx(t,i,a,l,u){if(u){if(typeof l=="function"){var g=l;l=function(){var le=qo(w);g.call(le)}}var w=Up(i,l,t,0,null,!1,!1,"",kp);return t._reactRootContainer=w,t[Ni]=w.current,fa(t.nodeType===8?t.parentNode:t),Or(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var O=l;l=function(){var le=qo(V);O.call(le)}}var V=yu(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=V,t[Ni]=V.current,fa(t.nodeType===8?t.parentNode:t),Or(function(){Xo(i,V,a,l)}),V}function Zo(t,i,a,l,u){var g=a._reactRootContainer;if(g){var w=g;if(typeof u=="function"){var O=u;u=function(){var V=qo(w);O.call(V)}}Xo(i,w,t,u)}else w=vx(a,i,t,u,l);return qo(w)}xf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Kt(i.pendingLanes);a!==0&&(jl(i,a|1),Pn(i,Te()),(bt&6)===0&&(Es=Te()+500,sr()))}break;case 13:Or(function(){var l=Di(t,1);if(l!==null){var u=Mn();li(l,t,1,u)}}),xu(t,1)}},Wl=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var a=Mn();li(i,t,134217728,a)}xu(t,134217728)}},vf=function(t){if(t.tag===13){var i=dr(t),a=Di(t,i);if(a!==null){var l=Mn();li(a,t,i,l)}xu(t,i)}},_f=function(){return Nt},Sf=function(t,i){var a=Nt;try{return Nt=t,i()}finally{Nt=a}},Pe=function(t,i,a){switch(i){case"input":if(et(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=ho(l);if(!u)throw Error(n(90));Ve(l),et(l,u)}}}break;case"textarea":ve(t,a);break;case"select":i=a.value,i!=null&&D(t,!!a.multiple,i,!1)}},Ut=du,Zt=Or;var _x={usingClientEntryPoint:!1,Events:[ma,cs,ho,De,ct,du]},Ra={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sx={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Ct=Ko.inject(Sx),_t=Ko}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_x,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(i))throw Error(n(200));return yx(t,i,null,a)},Ln.createRoot=function(t,i){if(!_u(t))throw Error(n(299));var a=!1,l="",u=zp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=yu(t,1,!1,null,null,a,!1,l,u),t[Ni]=i.current,fa(t.nodeType===8?t.parentNode:t),new vu(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Or(t)},Ln.hydrate=function(t,i,a){if(!$o(i))throw Error(n(200));return Zo(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!_u(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,g="",w=zp;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Up(i,null,t,1,a??null,u,!1,g,w),t[Ni]=i.current,fa(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Yo(i)},Ln.render=function(t,i,a){if(!$o(i))throw Error(n(200));return Zo(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!$o(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Ln.unstable_batchedUpdates=du,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!$o(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,i,a,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Xp;function Nx(){if(Xp)return Mu.exports;Xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mu.exports=Rx(),Mu.exports}var qp;function Ix(){if(qp)return Qo;qp=1;var s=Nx();return Qo.createRoot=s.createRoot,Qo.hydrateRoot=s.hydrateRoot,Qo}var Px=Ix();const Lx=ig(Px),Tu=[{id:"yzy_mono_dome",code:"YZY-DOME-01",name:"YZY MONO DOME",subtitle:"MONOLITHIC CATENARY EARTH DOME",category:"SINGLE RESIDENCE & DISASTER SHELTER",tagline:"Aerodynamic, self-supporting catenary arch dome immune to hurricane winds and wildfires.",description:"Inspired by ancient subterranean architecture and futuristic planetary habitats. Built with a continuous curved shell using compressed earth blocks, aircrete, or ferrocement over an inflatable compass arm guide. Zero structural wood or steel required.",sqft:350,diameter:"21.0 FT (6.4m)",height:"14.5 FT (4.4m)",occupancy:"2 - 4 Persons",buildTimeDays:7,difficulty:"NOVICE FRIENDLY",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"ferrocement",walls:"aircrete",roof:"aircrete",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:120,estimatedCostMin:3200,estimatedCostMax:7800,modelShape:"dome",windResistance:"220 MPH (Category 5+)",seismicZone:"Zone 4 (Maximum Flex Resilience)",thermalComfort:"Passive Solar & Earth-Bermed (Zero HVAC Needed in 0°F to 110°F)",idealFor:"Disaster relief, extreme climates, off-grid eco-living, homeless rehabilitation communities."},{id:"rammed_earth_villa",code:"YZY-VILLA-02",name:"MONOLITHIC EARTH VILLA",subtitle:"STARK MODERN BRUTALIST SINGLE-FAMILY HOME",category:"PERMANENT FAMILY RESIDENCE",tagline:"Massive 18-inch striated tamped earth walls with expansive floor-to-ceiling daylight portals.",description:"A timeless, ultra-modern brutalist sanctuary. The massive thermal inertia of rammed earth acts as a natural battery, absorbing desert heat by day and radiating warmth through cool nights. Combines minimalist raw earth textures with high-performance mass timber roof spans.",sqft:1200,diameter:"42.0 FT x 28.0 FT",height:"12.0 FT (3.6m)",occupancy:"4 - 6 Persons",buildTimeDays:21,difficulty:"INTERMEDIATE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"rammed_earth",walls:"rammed_earth",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"offgrid_solar_water"},baseLaborHours:480,estimatedCostMin:14500,estimatedCostMax:28e3,modelShape:"cuboid_villa",windResistance:"180 MPH",seismicZone:"Zone 4 Engineered Tie-Rods",thermalComfort:"Internal Thermal Flywheel (Constant 68°F-72°F microclimate)",idealFor:"Permanent rural/suburban family housing, regenerative agrarian retreats, enduring generational sanctuaries."},{id:"modular_eco_apartments",code:"YZY-MOD-03",name:"MODULAR COMMUNE BLOCK",subtitle:"MULTI-FAMILY 8-UNIT SUSTAINABLE APARTMENT SYSTEM",category:"MULTI-FAMILY HOUSING",tagline:"Scalable modular interlocking cube units built around a central shaded communal courtyard.",description:"Designed to rapidly solve urban and suburban housing crises. Standardized 600 sqft interlocking modular apartments constructed from Compressed Earth Blocks (CEBs) and Mass Timber, stacked up to 3 floors with shared acoustic mycelium separation and central rainwater filtration cistern.",sqft:4800,diameter:"65.0 FT x 75.0 FT (3 Stories)",height:"34.0 FT (10.3m)",occupancy:"24 - 32 Persons (8 Units)",buildTimeDays:45,difficulty:"COMMUNITY MASTER CREW",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"ceb_blocks",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:1450,estimatedCostMin:52e3,estimatedCostMax:98e3,modelShape:"modular_block",windResistance:"175 MPH",seismicZone:"Zone 4 Base-Isolated CLT joints",thermalComfort:"Communal central wind-tower draft & cross-ventilation",idealFor:"Affordable urban community housing, transitional refugee housing, university cooperatives."},{id:"donda_resilience_commons",code:"DONDA-CITY-04",name:"DONDA RESILIENCE COMMONS",subtitle:"DECENTRALIZED 24-UNIT AUTONOMOUS MICRO-CITY",category:"DECENTRALIZED ECO-VILLAGE",tagline:"100% self-sufficient closed-loop community ecosystem integrating shelter, food, solar, and water.",description:"A circular micro-city masterplan comprising 24 monolithic dome residences, a central geodesic community hub, open-air amphitheater, vertical permaculture aquaponic greenhouses, and a centralized renewable utility grid. Creates economic and energetic sovereignty for underserved communities.",sqft:18500,diameter:"320.0 FT Circular Perimeter",height:"28.0 FT Central Dome",occupancy:"80 - 120 Persons",buildTimeDays:90,difficulty:"DECENTRALIZED GUILD BUILD",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"bamboo_composite",walls:"rammed_earth",roof:"ferrocement",insulation:"mycelium_panels",utilities:"microgrid_communal"},baseLaborHours:5200,estimatedCostMin:185e3,estimatedCostMax:34e4,modelShape:"village_compound",windResistance:"220 MPH",seismicZone:"Geodesic Interlock (Extreme Resilient)",thermalComfort:"Integrated Earth-Tubes & Passive Aquifer Cooling",idealFor:"Sovereign intentional communities, Native American reservation empowerment, disaster recovery settlements."},{id:"rapid_emergency_pod",code:"YZY-POD-05",name:"RAPID EMERGENCY FLATPACK POD",subtitle:"48-HOUR CRITICAL RELIEF DEPLOYABLE SHELTER",category:"RAPID CRISIS RESPONSE",tagline:"Precision flatpack modular shelter assembled in under 48 hours with zero heavy machinery.",description:"A lightweight, interlocking bio-panel pod designed for immediate deployment to humanitarian crisis and disaster zones. Assembles using dry interlocking keyed pins. Features integrated insulated floor, roof rainwater run-off, and plug-and-play 12V solar LED & USB power kit.",sqft:160,diameter:"12.0 FT x 13.5 FT",height:"9.5 FT (2.9m)",occupancy:"1 - 3 Persons",buildTimeDays:2,difficulty:"ZERO EXPERIENCE NEEDED",defaultMaterials:{foundation:"recycled_poly_bricks",superstructure:"cross_laminated_timber",walls:"recycled_poly_bricks",roof:"ferrocement",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:24,estimatedCostMin:1400,estimatedCostMax:2900,modelShape:"micro_pod",windResistance:"140 MPH",seismicZone:"Zone 4 Flexible Joint Pod",thermalComfort:"Bio-foam Insulation (R-16 Envelope)",idealFor:"Disaster first-response, homeless transitional shelters, mobile clinic & quarantine stations."},{id:"terrace_earth_apartments",code:"YZY-TERRACE-06",name:"STEPPED EARTH TERRACE COMPLEX",subtitle:"BIOPHILIC STEPPED DUPLEX & APARTMENT TOWER",category:"HIGH-DENSITY MULTI-TIER",tagline:"Tiered stepped brutalist earth terraces with rooftop gardens on every single residential level.",description:"Inspired by ancient Mesopotamian ziggurats and high-density modernist brutalism. Each floor steps backward to provide the unit below with an expansive green garden terrace for food cultivation, solar collection, and natural shade.",sqft:9600,diameter:"90.0 FT x 60.0 FT (4 Tiers)",height:"45.0 FT (13.7m)",occupancy:"48 - 60 Persons (16 Units)",buildTimeDays:70,difficulty:"ENGINEERED COLLECTIVE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"hempcrete",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:2900,estimatedCostMin:11e4,estimatedCostMax:21e4,modelShape:"terrace_block",windResistance:"185 MPH",seismicZone:"Zone 4 Engineered CLT Intertie",thermalComfort:"Rooftop soil garden thermal blanket & passive air shafts",idealFor:"Dense urban eco-neighborhoods, communal housing cooperatives, humanitarian urban centers."}],Jo=[{id:"ceb_blocks",name:"COMPRESSED EARTH BLOCKS (CEB)",shortName:"CEB Blocks",category:"EARTH & SOIL",tagline:"Ultra-low cost subsoil compressed at 2,000 PSI with zero kiln firing.",description:"Formed using local subsoil (clay + sand) mixed with 5-8% lime/cement stabilizer and compressed using a manual or hydraulic press. Interlocking designs require zero mortar, drastically reducing labor and build time.",unitCost:"$0.45 / block ($4.20 / sq ft wall)",costPerSqFt:4.2,carbonImpact:-18.5,carbonRating:"EXEMPLARY (A+)",thermalRValue:2.8,thermalMass:"VERY HIGH",compressiveStrength:"1,200 - 1,800 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (With lime wash / hydrophobic sealer)",localSourcingRate:"90% On-Site Soil Excavation",sourcingMethod:'Excavate subsoil on-site. Sieve through 1/4" wire mesh. Mix with 8% lime. Press with manual Cinva-Ram ($380).',pros:["Extremely low cost ($0.45/block) — 90% of material dug directly from on-site foundation soil","Interlocking dry-stack design requires zero mortar and zero master masonry skills","Immune to termites, rot, mold, and wildfire (Class A 4-hour fireproof rating)","High thermal mass acts as a natural temperature battery stabilizing indoor microclimate"],cons:["Requires manual soil sieving and curing period (14 days with daily water mist)","Heavy physical weight requiring solid gravel trench or geopolymer footing","Needs protective roof overhangs and natural lime wash against direct monsoon rains"],supplier:{name:"AECT Earth Block Technologies",location:"San Antonio, Texas & Global Shipping",contact:"sales@aectearthblock.com | +1 (210) 633-6300",website:"aectearthblock.com",exactPrice:"$0.45 per standard block ($450 per pallet of 1,000 blocks)",minimumOrder:"1 Pallet or DIY on-site for $0.12/block with rented press",leadTime:"3-5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY DIY",lifespan:"100+ YEARS",compatibleLayers:["walls","foundation","superstructure"],colorHex:"#B8865A",textureType:"earth_block",badge:"TOP COST-SAVER"},{id:"rammed_earth",name:"MONOLITHIC RAMMED EARTH",shortName:"Rammed Earth",category:"EARTH & SOIL",tagline:"Stark, monolithic brutalist earthen walls with superior thermal flywheel inertia.",description:"Damp subsoil with gravel and clay tamped pneumatically or manually within slip-form wooden formwork. Produces gorgeous striated raw stone layers, perfect acoustic dampening, and zero off-gassing.",unitCost:"$6.80 / sq ft wall",costPerSqFt:6.8,carbonImpact:-14.2,carbonRating:"EXEMPLARY (A+)",thermalRValue:3.5,thermalMass:"MAXIMUM",compressiveStrength:"1,500 - 2,400 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (When capped with deep overhangs and lime stabilization)",localSourcingRate:"95% Local Quarry & Excavation",sourcingMethod:"Sourced directly from local quarry tailings or foundation excavation. Mix 70% aggregate/sand and 30% clay/silt.",pros:["Iconic monolithic brutalist aesthetic with breathtaking natural striated earth strata","Supreme acoustic isolation (kills outside traffic and environmental noise)","Zero off-gassing, zero drywall, zero paint needed — wall is fully structural and finished","Centuries-long lifespan (150+ years) getting stronger over time"],cons:["Requires sturdy reusable wooden slipform formwork setup","Labor-intensive tamping process (beneficial for community guild builds)","Difficult to modify or knock down once fully cured"],supplier:{name:"Sirewall / Earth Structures Group & Local Aggregates",location:"North America, Europe & Australia Hubs",contact:"info@sirewall.com | +1 (250) 537-9355",website:"sirewall.com",exactPrice:"$18.50 per ton delivered quarry road-base aggregate ($6.80/sqft installed DIY)",minimumOrder:"10 Tons (Dump truck delivery)",leadTime:"24-48 Hours from local aggregate yards"},laborDifficulty:"INTERMEDIATE (Formwork setup)",lifespan:"150+ YEARS",compatibleLayers:["walls","superstructure"],colorHex:"#A07855",textureType:"rammed_earth",badge:"ICONIC BRUTALISM"},{id:"hempcrete",name:"BIO-COMPOSITE HEMPCRETE",shortName:"Hempcrete",category:"BIO-MASS",tagline:"Carbon-negative breathable biocomposite wall fill with exceptional R-value.",description:"Cast blend of industrial hemp hurds (woody inner core) and hydraulic lime binder. Continuously absorbs atmospheric CO2 throughout its multi-century lifespan while regulating internal humidity and mold prevention.",unitCost:"$8.50 / sq ft wall",costPerSqFt:8.5,carbonImpact:-110,carbonRating:"NET CARBON SINK (-110kg CO2/m3)",thermalRValue:18,thermalMass:"MEDIUM-HIGH",compressiveStrength:"Non-structural infill (Requires timber or CEB post frame)",fireRating:"CLASS A (Flame retardant char layer)",waterResistance:"VAPOR PERMEABLE / BREATHABLE",localSourcingRate:"70% Agricultural Hemp Regions",sourcingMethod:"Blend 4 parts hemp hurds, 1 part hydrated lime binder, 1.5 parts water in pan mixer.",pros:["Gigantic Net Carbon Sink (-110 kg CO2 per cubic meter sequestered for life)","High thermal insulation (R-18) keeping rooms warm in winter and cool in summer","Vapor-permeable 'breathable' envelope naturally prevents interior humidity, mold, and rot","Lightweight and extremely novice-friendly to mix and cast"],cons:["Non-structural infill — requires structural timber or CEB column frame to carry roof load","Slower drying time (requires 4-8 weeks to fully cure before final breathable lime plaster)","Requires sourcing industrial hemp hurds from agricultural processing mills"],supplier:{name:"Hempitecture Inc. & US Hemp Brokerage",location:"Jerome, Idaho / Louisville, Kentucky",contact:"orders@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com",exactPrice:"$0.42 / lb ($840 per 1-ton super-sack of processed hemp hurd)",minimumOrder:"1 Super-sack (2,000 lbs) or 50 lb trial bags ($28/bag)",leadTime:"3-5 Business Days LTL Freight"},laborDifficulty:"NOVICE / COMMUNITY FRIENDLY",lifespan:"300+ YEARS (Petrifies into limestone over time)",compatibleLayers:["walls","insulation","roof"],colorHex:"#8B9574",textureType:"hemp_composite",badge:"MAX CARBON SINK"},{id:"mycelium_panels",name:"GROWN MYCELIUM STRUCTURAL PANELS",shortName:"Mycelium Bio-Foam",category:"BIO-MASS",tagline:"Self-assembling fungal root bio-foam grown in 7 days from agricultural crop waste.",description:"Mycelium (mushroom vegetative tissue) inoculated into agricultural waste substrates (straw, sawdust, husks) and grown inside modular molds. Baked to inactivate fungi, producing ultra-lightweight, 100% biodegradable thermal & acoustic panels.",unitCost:"$3.90 / sq ft panel",costPerSqFt:3.9,carbonImpact:-45,carbonRating:"NET CARBON SINK (A+)",thermalRValue:16.5,thermalMass:"LOW (Ultra-Lightweight)",compressiveStrength:"300 - 600 PSI (Rigid Foam Core)",fireRating:"CLASS 1 (Natural self-extinguishing char)",waterResistance:"TREATED (Natural wax or bio-resin coating)",localSourcingRate:"100% Farm Crop Residue Inoculation",sourcingMethod:"Grown in dark ambient containers in 7 days from pasteurized agricultural crop chaff and mushroom spawn.",pros:["Can be grown in 7 days in community micro-grow hubs with zero heavy industrial factories","Replaces toxic petroleum polystyrene foam insulation with 100% biodegradable bio-mass","Outstanding acoustic dampening and R-16.5 thermal resistance","Natural Class 1 flame retardance (chars rather than combusts)"],cons:["Must be baked or heat-dried at 180°F to deactivate live mycelium growth","Requires natural moisture barrier (beeswax, bio-resin) for exterior exposed applications","Lightweight core must be paired with protective cladding or plaster"],supplier:{name:"Ecovative Design / MycoWorks Commercial Materials",location:"Green Island, New York & Regional Grow Partners",contact:"grow@ecovative.com | +1 (518) 273-3753",website:"ecovative.com",exactPrice:'$3.90 / sq ft (24"x48" panels at $31.20 each) or $12 for 5-gal GIY Inoculum kit',minimumOrder:"10 Panels or DIY Grow Spawn bags",leadTime:"7 Days (Shipped fresh or grown on-demand)"},laborDifficulty:"NOVICE (Mold-grown process)",lifespan:"60+ YEARS",compatibleLayers:["insulation","roof","finishes"],colorHex:"#C5B9A5",textureType:"bio_foam",badge:"FUTURISTIC BIO-TECH"},{id:"geopolymer_concrete",name:"SLAG/POZZOLAN GEOPOLYMER CONCRETE",shortName:"Geopolymer Concrete",category:"CIRCULAR MINERAL",tagline:"85% lower carbon footprint than Portland cement with 2x chemical and heat resilience.",description:"Synthesized via alkaline activation of industrial aluminosilicate by-products (ground granulated blast furnace slag, fly ash, or calcined metakaolin). Cures with zero calcium oxide calcination emissions.",unitCost:"$5.10 / sq ft slab",costPerSqFt:5.1,carbonImpact:-4,carbonRating:"ULTRA LOW EMISSIONS (A)",thermalRValue:1.5,thermalMass:"HIGH",compressiveStrength:"4,500 - 8,000 PSI",fireRating:"CLASS A (Withstands 1,200°C without spalling)",waterResistance:"IMPERMEABLE",localSourcingRate:"80% Industrial Slag / Fly Ash / Volcanic Ash",sourcingMethod:"Mix slag/fly-ash with sodium silicate activator solution and aggregate.",pros:["85% reduction in embodied carbon compared to traditional Portland cement","Ultra-high compressive strength (up to 8,000 PSI) for indestructible foundation footings","Immune to acid, sulfate corrosion, and extreme heat (withstands 1,200°C without spalling)","Cures rapidly into durable permanent stone foundation"],cons:["Requires handling alkaline activator solution with basic safety gloves & goggles","Needs precise batch mixing ratios for optimal polymerization cure","Slightly less common in standard home-depot retail than Portland cement"],supplier:{name:"Boral Resources / Wagners Earth Friendly Concrete (EFC)",location:"International / Regional Slag Terminals",contact:"efc@wagner.com.au | +1 (800) 843-6652",website:"wagner.com.au/main/earth-friendly-concrete",exactPrice:"$128.00 / cubic yard ready-mix ($5.10 / sq ft 4-inch slab)",minimumOrder:"5 Cubic Yards or $18.50 per 50 lb dry binder bag",leadTime:"24-48 Hours Dispatch"},laborDifficulty:"INTERMEDIATE",lifespan:"200+ YEARS",compatibleLayers:["foundation","superstructure","roof"],colorHex:"#7A7A78",textureType:"raw_concrete",badge:"ULTRA-STRENGTH FOUNDATION"},{id:"cross_laminated_timber",name:"MASS TIMBER / CROSS-LAMINATED TIMBER (CLT)",shortName:"CLT Mass Timber",category:"RENEWABLE WOOD",tagline:"Precision-engineered solid wood slabs locking carbon into structural monolithic grids.",description:"Layers of kiln-dried sustainably managed lumber stacked perpendicularly and bonded with non-toxic polyurethane adhesive. Replaces steel and concrete for rapid modular multi-story assembly.",unitCost:"$11.20 / sq ft panel",costPerSqFt:11.2,carbonImpact:-95,carbonRating:"NET CARBON SINK (A+)",thermalRValue:8.5,thermalMass:"MEDIUM",compressiveStrength:"3,500 PSI (Bending strength 4,200 PSI)",fireRating:"CLASS A (Predictable slow charring protects core)",waterResistance:"MEDIUM (Requires weather barrier membrane)",localSourcingRate:"85% FSC-Certified Forestry & Regional Mills",sourcingMethod:"Procured from regional forestry cooperatives. Precision CNC cut for rapid crane assembly.",pros:["Precision pre-fabricated panels assemble on site in hours like giant lego blocks","Massive carbon storage (-95 kg CO2/sqft locked inside wood matrix)","Incredible biophilic warmth and natural wood interior finish (no drywall needed)","High strength-to-weight ratio allows multi-story cantilevered apartment designs"],cons:["Higher material cost ($11.20/sqft) than raw compressed earth ($4.20/sqft)","Requires crane or multi-person crew to hoist large heavy panels into place","Must be protected from continuous direct rain contact with weatherproofing"],supplier:{name:"SmartLam North America / Mercer Mass Timber",location:"Columbia Falls, Montana / Spokane, Washington",contact:"sales@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:'$11.20 / sq ft (3-ply 4.1" CLT billets at $358 per 8x4 ft panel)',minimumOrder:"1 Flatbed Truckload (4,000 sqft) or custom cut-to-order",leadTime:"2-3 Weeks CNC Fabrication"},laborDifficulty:"CRANE / MODULAR CREW",lifespan:"120+ YEARS",compatibleLayers:["superstructure","roof","walls"],colorHex:"#C9A066",textureType:"cross_timber",badge:"HIGH-RISE MODULAR"},{id:"aircrete",name:"FOAMED CELLULAR AIRCRETE",shortName:"Aircrete Foam Core",category:"FOAMED MINERAL",tagline:"Inexpensive, lightweight aerated mineral mix easily cut with hand saws.",description:"A slurry of stabilized cement/lime with tiny dense air bubbles produced by organic foaming agents. Weighs 1/5th of standard concrete, provides integrated thermal insulation, and allows easy dome casting.",unitCost:"$3.10 / sq ft",costPerSqFt:3.1,carbonImpact:-1.2,carbonRating:"LOW CARBON (B+)",thermalRValue:12,thermalMass:"MEDIUM",compressiveStrength:"400 - 800 PSI",fireRating:"CLASS A (Immune to fire/pest rot)",waterResistance:"HIGH (When coated with elastomeric or lime sealer)",localSourcingRate:"90% Standard Local Supplies + Bio-Foamer",sourcingMethod:"Prepared on-site using continuous bio-foam generator ($120 tool) and paddle mixer.",pros:["Extremely affordable ($3.10/sqft) and expands 4x in volume from foam bubbles","Ultra-lightweight (floats on water!) and can be shaped with standard wood hand saws","Class A fireproof and completely immune to termites, mold, and water rot","Ideal for rapid casting of curved parabolic monolithic domes"],cons:["Lower compressive strength (400-800 PSI) than solid earth — unsuitable for multi-story point loads","Requires continuous bio-foam generator wand tool ($120)","Needs exterior waterproof elastomeric or hot lime plaster coat"],supplier:{name:"Domegaia / AirCrete Global Supplies",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"support@domegaia.com | +1 (808) 575-2000",website:"domegaia.com",exactPrice:"$38.00 per gallon bio-foaming concentrate (makes 2,500 sqft of foam) + local binder",minimumOrder:"1 Gallon jug + $120 Foam Generator wand",leadTime:"3-5 Days Direct Shipping"},laborDifficulty:"NOVICE FRIENDLY",lifespan:"80+ YEARS",compatibleLayers:["walls","roof","insulation"],colorHex:"#E2E2DC",textureType:"aircrete_pumice",badge:"BEST FOR DOMES"},{id:"ferrocement",name:"ULTRA-THIN FERROCEMENT SHELL",shortName:"Ferrocement Shell",category:"COMPOSITE MINERAL",tagline:"High-strength, seismic-proof thin monolithic hyperbolic parabolic shell.",description:"Layers of fine wire mesh and reinforcement steel encapsulated in dense pozzolan-rich mortar plaster. Creates self-supporting curved domes, vaults, and roofs with 1/10th the material volume of regular concrete.",unitCost:"$2.90 / sq ft surface",costPerSqFt:2.9,carbonImpact:-2.5,carbonRating:"RESOURCE EFFICIENT (A-)",thermalRValue:1.2,thermalMass:"MEDIUM",compressiveStrength:"5,000+ PSI",fireRating:"CLASS A (Indestructible to wildfire)",waterResistance:"MAXIMUM (Waterproof tank grade)",localSourcingRate:"95% Hardware Wire Mesh & Local Sand",sourcingMethod:"Constructed with localized manual wire tying and hand plastering. Zero heavy equipment.",pros:["Ultra-thin structural shell (only 1-2 inches thick) saving 90% of material volume","Extreme hurricane and seismic resistance (flexes without brittle cracking)","Completely waterproof and wildfire-proof (used for ocean boat hulls and cisterns)","Requires zero cranes or heavy machinery — tied and plastered by hand"],cons:["Low inherent thermal insulation (R-1.2) — must be paired with mycelium/hemp interior insulation","Requires meticulous tying of wire mesh armature layers","Manual plastering requires steady hand troweling"],supplier:{name:"National Hardware Supply & Local Mesh Distributors",location:"Available in every hardware supply yard globally",contact:"Local steel and masonry supply",website:"mcmaster.com (Expanded metal & hardware cloth)",exactPrice:'$0.32 / sq ft for 1/2" 19-gauge galvanized welded wire mesh + $14 lime sack',minimumOrder:"100 ft rolls ($32.00 / roll)",leadTime:"Same-Day Local Pickup"},laborDifficulty:"NOVICE / ARTISAN DIY",lifespan:"100+ YEARS",compatibleLayers:["roof","superstructure","water_harvesting"],colorHex:"#8E8E89",textureType:"curved_shell",badge:"HURRICANE & SEISMIC PROOF"},{id:"recycled_poly_bricks",name:"CIRCULAR RECYCLED POLYMER INTERLOCKS",shortName:"Recycled Poly-Bricks",category:"CIRCULAR POLYMER",tagline:"100% upcycled ocean & municipal plastic waste molded into indestructible lego blocks.",description:"Sorted and washed HDPE/PP/LDPE plastic waste melted and compression molded into interlocking tongue-and-groove structural blocks. Eliminates mortar entirely and cleans thousands of tons of plastic waste.",unitCost:"$1.80 / block ($3.40 / sq ft wall)",costPerSqFt:3.4,carbonImpact:-62,carbonRating:"PLASTIC DIVERSION (A+)",thermalRValue:6.2,thermalMass:"LOW-MEDIUM",compressiveStrength:"1,800 - 2,500 PSI",fireRating:"CLASS B (Fire retardant mineral additives)",waterResistance:"100% IMPERMEABLE",localSourcingRate:"100% Community Plastic Recycling Streams",sourcingMethod:"Melt shredded municipal plastic bottles/caps into compression block molds.",pros:["Cleans up thousands of lbs of toxic plastic waste from oceans and landfills","Interlocking dry assembly with zero mortar, zero water, and zero drying time","100% waterproof and impervious to underground moisture or termite rot","Lightweight and indestructible to seismic earthquakes"],cons:["Requires fire-retardant mineral coating or natural lime plaster covering","Lower thermal mass inertia than solid rammed earth","Requires community plastic shredder and heated compression mold rig"],supplier:{name:"ByFusion Global Inc. / Precious Plastic Community",location:"Los Angeles, California / Global Open-Source Network",contact:"info@byfusion.com | +1 (310) 906-0300",website:"byfusion.com",exactPrice:'$1.80 per ByBlock (16"x8"x8" interlocking block)',minimumOrder:"1 Pallet of 120 blocks ($216.00) or DIY Precious Plastic mold system",leadTime:"5-7 Days Freight"},laborDifficulty:"ZERO-TOOL DRY ASSEMBLY",lifespan:"500+ YEARS (Non-biodegradable longevity)",compatibleLayers:["walls","foundation","finishes"],colorHex:"#2E4057",textureType:"poly_block",badge:"ZERO-WASTE CIRCULAR"},{id:"bamboo_composite",name:"STRUCTURAL TREATED DENDROCALAMUS BAMBOO",shortName:"Engineered Bamboo",category:"RENEWABLE VEGETATION",tagline:"Tensile strength greater than mild steel with rapid 3-year agricultural regenerative cycle.",description:"Boron-salt treated giant bamboo culms or crushed strand-woven bamboo beams. Provides earthquake flexibility, organic curves, and ultra-fast community construction speed.",unitCost:"$2.20 / linear ft ($4.80 / sq ft frame)",costPerSqFt:4.8,carbonImpact:-88,carbonRating:"RAPID REGENERATIVE SINK (A+)",thermalRValue:2.1,thermalMass:"LOW",compressiveStrength:"4,000 PSI (Tensile: 28,000 PSI)",fireRating:"CLASS B (Boron treated)",waterResistance:"HIGH (When elevated off grade)",localSourcingRate:"100% Tropical/Subtropical Agriculture",sourcingMethod:"Harvest mature 3-4 year poles. Soak in natural borax solution for 14 days.",pros:["Tensile strength (28,000 PSI) rivaling steel with lightweight organic flexibility","Rapidly renewable agricultural crop (reaches full harvest maturity in only 3 years)","Absorbs massive amounts of atmospheric carbon during rapid growth cycle","Creates stunning organic curved roof structures and soaring communal halls"],cons:["Must be treated with natural boric acid/borax to prevent powder-post borer beetles","Requires specialized fish-mouth or pinned joinery techniques",'Must be elevated 12" off wet ground to prevent splashback moisture'],supplier:{name:"BamCore LLC / Guadua Bamboo Global Export",location:"Windsor, California & Ocala, Florida",contact:"sales@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:'$2.20 / linear ft (3-4" diameter structural Guadua culms, $44 per 20ft pole)',minimumOrder:"20 Poles or custom structural bundle",leadTime:"5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY HAND CRAFT",lifespan:"75+ YEARS",compatibleLayers:["superstructure","roof","finishes"],colorHex:"#C49A45",textureType:"bamboo_pole",badge:"TENSILE POWERHOUSE"}],Au=[{id:"offgrid_solar_water",name:"AUTONOMOUS LIFE-SUPPORT SUITE",description:"5.2kW Photovoltaic Monocrystalline Canopy + 10kWh LFP Battery + 2,000L Rainwater Harvesting & Gravity UV Filtration + Anaerobic Methane Bio-Digester.",cost:4800,carbonImpact:-1200,specs:"Zero municipal grid dependency. 100% daily power & potable water autonomy.",pros:["100% complete energy and potable drinking water sovereignty (zero utility bills forever)","Powers refrigerator, induction cooking, lighting, laptops, and water pumps 24/7","LFP (Lithium Iron Phosphate) battery provides 15+ years cycle life with zero fire risk","Anaerobic digester converts food and organic waste into clean methane cooking gas"],cons:["Requires initial setup investment ($4,800 turnkey complete)","Solar output depends on seasonal daylight (offset by 10kWh battery buffer)"],supplier:{name:"Signature Solar / EcoFlow PowerOcean Hub",location:"Sulphur Springs, Texas",contact:"sales@signaturesolar.com | +1 (903) 441-2090",website:"signaturesolar.com",exactPrice:"$4,800 turnkey complete kit (5kW Hybrid Inverter + 10.24kWh Server Rack Battery + 12x 450W Tier-1 Panels)",leadTime:"2-4 Business Days Freight"}},{id:"essential_eco_pod",name:"ESSENTIAL HYBRID UTILITY POD",description:"2.4kW Solar Array + 5kWh Battery + 1,000L Rain Filtration Cistern + Composting Toilet System.",cost:2400,carbonImpact:-650,specs:"Ideal for rapid single-family and disaster relief deployment.",pros:["Ultra-compact plug-and-play modular power crate ($2,400)","Provides essential daily lighting, phone/device charging, and gravity-fed pure water","Composting toilet system requires zero sewer pipes or municipal hookups"],cons:["Smaller 5kWh battery capacity (not designed for heavy high-draw power tools)","1,000L water cistern requires seasonal rainfall or atmospheric condenser backup"],supplier:{name:"Renogy Off-Grid Systems / Separett Sanitation",location:"Ontario, California",contact:"support@renogy.com | +1 (909) 287-7111",website:"renogy.com",exactPrice:"$2,400 all-in-one plug-and-play modular power and water crate",leadTime:"3-5 Business Days"}},{id:"microgrid_communal",name:"COMMUNAL MICRO-GRID HUB (MULTI-UNIT)",description:"25kW Centralized Solar Pergola + 50kWh Industrial Energy Storage + Central Atmospheric Water Condenser (500L/day) + Greywater Reed Bed Ecosystem.",cost:16500,carbonImpact:-5400,specs:"Powers 8-12 modular units with zero utility bills for community members.",pros:["Powers entire multi-family community or 12-pod village with central energy sovereignty","Atmospheric water generator condenses 500 liters of pure potable water per day out of thin air","Centralized maintenance reduces per-family cost to under $1,375 per residence"],cons:["Requires communal land area for 25kW solar pergola canopy and battery shed","Requires community agreement on power distribution management"],supplier:{name:"Fortress Power / Source Global Atmospheric Water",location:"Southampton, Pennsylvania / Scottsdale, Arizona",contact:"sales@fortresspower.com | +1 (877) 497-6937",website:"fortresspower.com",exactPrice:"$16,500 community district microgrid crate with integrated energy management system",leadTime:"7-10 Business Days"}}],Si={yzy_mono_dome:[{id:"dome_base",name:"SUBGRADE PLINTH & FOUNDATION",category:"FOUNDATION",description:"Load-bearing frost-proof plinth anchoring the catenary dome to bedrock.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","ceb_blocks","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:280,partType:"solid"},{id:"dome_shell",name:"MONOLITHIC DOME SHELL (MAIN ENVELOPE)",category:"ENVELOPE",description:"Parabolic curved earthen shell distributing structural loads into pure compression.",defaultMaterial:"aircrete",allowedMaterials:["aircrete","ceb_blocks","rammed_earth","hempcrete","ferrocement"],surfaceAreaSqft:650,partType:"curved_shell"},{id:"dome_window_oculus",name:"APERTURE: ZENITH SKYLIGHT OCULUS",category:"WINDOWS & APERTURES",description:"Circular central skylight portal bringing natural zenith daylight deep into the interior.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","solid_earthen_cap","timber_louver"],surfaceAreaSqft:25,partType:"aperture"},{id:"dome_portal_tunnel",name:"ENTRANCE TUNNEL & AIRLOCK PORTICO",category:"FACADE & ENTRANCE",description:"Protruding brutalist tunnel entry acting as thermal buffer and windbreak.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","cross_laminated_timber","geopolymer_concrete"],surfaceAreaSqft:90,partType:"portal"},{id:"dome_insulation_liner",name:"INTERIOR BIO-ACOUSTIC LINING",category:"INSULATION",description:"Continuous breathable interior insulation preventing acoustic reverberation.",defaultMaterial:"mycelium_panels",allowedMaterials:["mycelium_panels","hempcrete","aircrete"],surfaceAreaSqft:400,partType:"insulation"},{id:"dome_utilities",name:"OFF-GRID AUTONOMOUS LIFE-SUPPORT",category:"UTILITIES",description:"Closed-loop solar array, battery storage, and rainwater gravity filtration unit.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod","offgrid_solar_water"],surfaceAreaSqft:50,partType:"utility"}],rammed_earth_villa:[{id:"villa_foundation",name:"ENGINEERED SUBGRADE & SLAB",category:"FOUNDATION",description:"High-density monolithic slab with integrated radiant floor tubing.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:1200,partType:"solid"},{id:"villa_south_wall",name:"SOUTH FACADE ENVELOPE",category:"WALLS & APERTURES",description:"Front exterior envelope facing sun azimuth for passive solar heating.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass","cross_laminated_timber"],surfaceAreaSqft:380,partType:"swappable_wall"},{id:"villa_north_wall",name:"NORTH THERMAL SHIELD WALL",category:"WALLS",description:"Thick monolithic earth wall with zero openings to prevent winter heat loss.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","cross_laminated_timber"],surfaceAreaSqft:380,partType:"solid"},{id:"villa_side_walls",name:"EAST & WEST PERIMETER WALLS",category:"WALLS & APERTURES",description:"Flanking striated earth walls with narrow vertical daylight slits.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass"],surfaceAreaSqft:450,partType:"swappable_wall"},{id:"villa_roof_cantilever",name:"CANTILEVERED MASS TIMBER ROOF SLAB",category:"ROOF & CANOPY",description:"Expansive 4-foot overhang roof protecting earthen walls from direct rainfall.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:1450,partType:"roof"},{id:"villa_window_portal",name:"DAYLIGHT RIBBON & PATIO PORTAL",category:"WINDOWS & APERTURES",description:"Floor-to-ceiling high-efficiency insulated low-E glazed glass sliding portal.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:180,partType:"aperture"},{id:"villa_utilities",name:"WHOLE-HOME REGENERATIVE ENERGY SUITE",category:"UTILITIES",description:"5.2kW Solar Pergola + 10kWh Battery + 2,000L Rain Cistern & Methane Digester.",defaultMaterial:"offgrid_solar_water",allowedMaterials:["offgrid_solar_water","essential_eco_pod","microgrid_communal"],surfaceAreaSqft:120,partType:"utility"}],modular_eco_apartments:[{id:"mod_pod_base",name:"PODIUM SUBGRADE & BASE",category:"FOUNDATION",description:"High-compressive engineered base absorbing multi-level residential loads.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:1800,partType:"solid"},{id:"mod_tier1_modules",name:"LEVEL 01 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Lower tier community apartments with direct shaded courtyard access.",defaultMaterial:"ceb_blocks",allowedMaterials:["ceb_blocks","cross_laminated_timber","hempcrete","rammed_earth"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier2_modules",name:"LEVEL 02 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Mid-level residential units with cantilevered balconies.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier3_modules",name:"LEVEL 03 PENTHOUSE MODULES",category:"RESIDENTIAL MODULES",description:"Top floor suites with biophilic light shafts and cross-breeze airflow.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_facade_glazing",name:"COURTYARD WINDOWS & BALCONIES",category:"WINDOWS & APERTURES",description:"High-performance acoustic double/triple glazed window panels.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:420,partType:"aperture"},{id:"mod_roof_canopy",name:"COMMUNAL ROOFTOP CANOPY",category:"ROOF & CANOPY",description:"Mass timber roof pergola supporting communal solar array and food gardens.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:2e3,partType:"roof"},{id:"mod_utilities",name:"DISTRICT MICROGRID & WATER SUITE",category:"UTILITIES",description:"25kW Solar Pergola + 50kWh Battery + Central Water Condenser.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal","offgrid_solar_water"],surfaceAreaSqft:300,partType:"utility"}],donda_resilience_commons:[{id:"donda_base_plaza",name:"COMMUNAL PLAZA & AMPHITHEATER BASE",category:"FOUNDATION",description:"Permeable earth and geopolymer plaza naturally recharging local aquifers.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:6500,partType:"solid"},{id:"donda_central_dome",name:"CENTRAL COMMUNITY BIODOME",category:"CENTRAL COMMONS",description:"Geodesic gathering hub for communal dining, education, and hydroponic food.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","aircrete","bamboo_composite","triple_glazed_glass"],surfaceAreaSqft:2800,partType:"curved_shell"},{id:"donda_living_pods",name:"SATELLITE RESIDENTIAL DOMES (6 PODS)",category:"RESIDENTIAL CLUSTER",description:"Circular perimeter of monolithic dome homes for community residents.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","aircrete","hempcrete"],surfaceAreaSqft:4800,partType:"modular_box"},{id:"donda_pergola_ring",name:"RAIN HARVESTING RING & SOLAR CANOPY",category:"ROOF & CANOPY",description:"Continuous circular canopy capturing 100% of seasonal rainfall for village use.",defaultMaterial:"bamboo_composite",allowedMaterials:["bamboo_composite","cross_laminated_timber","ferrocement"],surfaceAreaSqft:3200,partType:"roof"},{id:"donda_microgrid",name:"DECENTRALIZED CITY MICRO-GRID",category:"UTILITIES",description:"Zero-dependency power, water generation, and anaerobic waste recycling.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:800,partType:"utility"}],rapid_emergency_pod:[{id:"pod_base_chassis",name:"ELEVATED INTERLOCKING BASE PLINTH",category:"FOUNDATION",description:"Lightweight modular foundation elevating pod 6 inches off wet muddy ground.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","cross_laminated_timber"],surfaceAreaSqft:160,partType:"solid"},{id:"pod_bio_walls",name:"FLATPACK BIO-COMPOSITE ENVELOPE",category:"WALLS",description:"Interlocking tongue-and-groove insulated panels assembled with zero tools.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","mycelium_panels","cross_laminated_timber"],surfaceAreaSqft:280,partType:"swappable_wall"},{id:"pod_origami_roof",name:"ANGLED WATER-DEFLECTING ROOF",category:"ROOF",description:"High-slope origami roof shedding monsoon rains and snow loads.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","cross_laminated_timber","aircrete"],surfaceAreaSqft:190,partType:"roof"},{id:"pod_glazing",name:"LIGHT PORTS & EMERGENCY EGRESS",category:"WINDOWS & APERTURES",description:"Polycarbonate insulated light panels for natural interior illumination.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","timber_louver"],surfaceAreaSqft:40,partType:"aperture"},{id:"pod_utility_kit",name:"PLUG-AND-PLAY 12V EMERGENCY SOLAR KIT",category:"UTILITIES",description:"Integrated solar panel on roof powering interior LEDs, phone charging, and water filter.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod"],surfaceAreaSqft:30,partType:"utility"}],terrace_earth_apartments:[{id:"terrace_foundation",name:"ZIGGURAT BASE & RETAINING PLINTH",category:"FOUNDATION",description:"Stepped bedrock foundation supporting cascading multi-level earth terraces.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:3200,partType:"solid"},{id:"terrace_tier_walls",name:"STEPPED RESIDENTIAL WALL MATRIX",category:"WALLS",description:"Thick brutalist earth walls stepping backward on each residential tier.",defaultMaterial:"hempcrete",allowedMaterials:["hempcrete","rammed_earth","ceb_blocks","cross_laminated_timber"],surfaceAreaSqft:4800,partType:"swappable_wall"},{id:"terrace_garden_roofs",name:"CASCADING GREEN ROOF TERRACES",category:"ROOF & GARDENS",description:"Rooftop edible food gardens and soil thermal blankets for every apartment unit.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ferrocement"],surfaceAreaSqft:3800,partType:"roof"},{id:"terrace_panoramic_windows",name:"EXPANSIVE TERRACE GLAZING PORTALS",category:"WINDOWS & APERTURES",description:"Full-width glass sliding walls opening directly onto rooftop gardens.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:650,partType:"aperture"},{id:"terrace_utilities",name:"CENTRALIZED URBAN ECO-GRID",category:"UTILITIES",description:"Communal solar array + greywater reed-bed filtration recycling 100% of water.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:600,partType:"utility"}]},Qd=[{id:"triple_glazed_glass",name:"TRIPLE-PANE PASSIVE SOLAR GLAZING",shortName:"Triple-Pane Glazing",category:"HIGH-EFFICIENCY GLASS",tagline:"Argon gas-filled triple pane glass with low-E coating for massive daylight and zero heat loss.",description:"Converts solid earth walls into expansive panoramic portals. Features warm-edge spacers, non-toxic wood/aluminum frame, and superior sound dampening.",unitCost:"$28.00 / sq ft",costPerSqFt:28,carbonImpact:8.5,thermalRValue:8,pros:["Floods interior with 100% natural mood-elevating daylight","R-8 insulation value prevents winter drafts and heat loss","Superior acoustic insulation isolates external noise","Expands visual space making compact earth homes feel massive"],cons:["Higher upfront cost than solid earthen blocks ($28/sqft vs $4.20/sqft)","Requires careful alignment and flashing during installation","Needs occasional window cleaning"],supplier:{name:"Alpen High Performance Glass / Loewen Windows",location:"Louisville, Colorado",contact:"sales@alpenhpp.com | +1 (303) 833-7000",website:"alpenhpp.com",exactPrice:"$28.00 / sq ft customized to rough opening",leadTime:"2-3 Weeks"},colorHex:"#68A5BA",textureType:"glass_glaze",badge:"MAX DAYLIGHT PORTAL"},{id:"smart_solar_glass",name:"PHOTOVOLTAIC BIPV SMART TINT GLASS",shortName:"Solar Smart Glass",category:"SOLAR GENERATING GLASS",tagline:"Transparent solar window generating daily electricity while electronically tinting.",description:"Building-Integrated Photovoltaics (BIPV) embedded within architectural glass. Generates 50W per square meter of clean electricity while rejecting 98% of solar glare.",unitCost:"$44.00 / sq ft",costPerSqFt:44,carbonImpact:-65,thermalRValue:9.5,pros:["Window actively generates clean off-grid electricity throughout daylight hours","Dynamic electrochromic tinting eliminates need for curtains or blinds","Rejects 99% of damaging UV rays to protect interior furniture"],cons:["Premium investment cost ($44.00/sqft)","Requires low-voltage electrical wire hookup to battery bank"],supplier:{name:"Ubiquitous Energy / Onyx Solar Photovoltaic Glass",location:"Redwood City, California",contact:"info@onyxsolar.com | +1 (917) 563-3993",website:"onyxsolar.com / ubiquitous.energy",exactPrice:"$44.00 / sq ft custom architectural sizing",leadTime:"3-4 Weeks"},colorHex:"#3A7E94",textureType:"solar_glass",badge:"CLEAN ENERGY PORTAL"},{id:"timber_louver",name:"MASS TIMBER OPERABLE BREEZE LOUVERS",shortName:"Timber Breeze Louvers",category:"NATURAL VENTILATION",tagline:"Adjustable cedar/bamboo louvers channeling cooling breezes while blocking direct solar heat.",description:"Hand-crafted operable wooden horizontal fins allowing customizable privacy, shade, and natural cross-ventilation.",unitCost:"$16.50 / sq ft",costPerSqFt:16.5,carbonImpact:-28,thermalRValue:4.2,pros:["Channels natural mountain & desert breezes into home for zero-cost cooling","100% natural organic wood aesthetics matching Yeezy minimal architecture","Carbon-negative natural material"],cons:["Does not seal airtight (designed for temperate or tropical microclimates)","Requires occasional natural oil re-coating every 5 years"],supplier:{name:"BamCore / Local Woodcraft Guilds",location:"North America Regional Co-ops",contact:"craft@bamcore.com",website:"bamcore.com",exactPrice:"$16.50 / sq ft with brass pivot hardware",leadTime:"1 Week"},colorHex:"#A87A46",textureType:"timber_louver",badge:"PASSIVE COOLING"}];/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ux={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ft.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:d,...f},m)=>ft.createElement("svg",{ref:m,...Ux,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:rg("lucide",o),...f},[...d.map(([h,x])=>ft.createElement(h,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(s,e)=>{const n=ft.forwardRef(({className:r,...o},c)=>ft.createElement(Ox,{ref:c,iconNode:e,className:rg(`lucide-${Dx(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],sg=It("BookOpen",zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Fx=It("Box",kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],ag=It("Building2",Bx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Vx=It("Calculator",Hx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nl=It("Check",Gx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wx=It("Compass",jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],qx=It("Copy",Xx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],og=It("Cpu",Yx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],lg=It("DollarSign",$x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],od=It("Download",Zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Qx=It("FlaskConical",Kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],e0=It("Globe",Jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],n0=It("Heart",t0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Jd=It("Layers",i0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],s0=It("Leaf",r0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],o0=It("Menu",a0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],c0=It("Printer",l0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],d0=It("RotateCcw",u0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],cg=It("Search",f0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],p0=It("Shield",h0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ld=It("Sparkles",m0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],y0=It("Sun",g0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],v0=It("TrendingDown",x0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],S0=It("TriangleAlert",_0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],M0=It("Volume2",E0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],w0=It("VolumeX",b0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],A0=It("Wind",T0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zl=It("X",C0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],N0=It("Zap",R0);let bs=null,Fa=!0;const ug=()=>{if(!bs&&typeof window<"u"){const s=window.AudioContext||window.webkitAudioContext;s&&(bs=new s)}return bs&&bs.state==="suspended"&&bs.resume(),bs},I0=s=>(Fa=!Fa,Fa),Gt=(s=800,e=.015,n="sine")=>{if(Fa)try{const r=ug();if(!r)return;const o=r.createOscillator(),c=r.createGain();o.type=n,o.frequency.setValueAtTime(s,r.currentTime),o.frequency.exponentialRampToValueAtTime(120,r.currentTime+e),c.gain.setValueAtTime(.04,r.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),o.connect(c),c.connect(r.destination),o.start(),o.stop(r.currentTime+e)}catch{}},Il=()=>{Gt(1200,.025,"triangle")},Ha=()=>{if(Fa)try{const s=ug();if(!s)return;const e=s.createOscillator(),n=s.createGain();e.type="sine",e.frequency.setValueAtTime(440,s.currentTime),e.frequency.setValueAtTime(880,s.currentTime+.06),n.gain.setValueAtTime(.05,s.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+.14),e.connect(n),n.connect(s.destination),e.start(),e.stop(s.currentTime+.15)}catch{}};function P0({activeTab:s,setActiveTab:e,totalCost:n,totalCarbon:r,onOpenCostBreakdown:o,onOpenBlueprintExport:c,onOpenVisionModal:d}){const[f,m]=ft.useState(!0),[h,x]=ft.useState(!1),_=()=>{const M=I0();m(M),M&&Gt(1e3,.03)},S=[{id:"builder",label:"01 // CONFIGURATOR",icon:ag},{id:"materials",label:"02 // MATERIALS INDEX",icon:Jd},{id:"furniture",label:"03 // ECO FURNITURE",icon:og},{id:"tutorials",label:"04 // NOVICE BUILD GUIDE",icon:sg},{id:"sourcing",label:"05 // SOURCING RADAR",icon:Wx},{id:"benchmarks",label:"06 // COST BENCHMARKS",icon:lg}],E=M=>{Gt(),e(M),x(!1)};return p.jsxs("header",{className:"sticky top-0 z-50 bg-yzy-black/95 backdrop-blur-md border-b border-yzy-slate select-none",children:[p.jsxs("div",{className:"w-full bg-yzy-obsidian border-b border-yzy-slate/60 px-3 sm:px-6 py-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider",children:[p.jsx("div",{className:"flex items-center gap-3",children:p.jsxs("span",{className:"flex items-center gap-1.5 text-yzy-chalk",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-yzy-neon animate-pulse"}),p.jsx("span",{className:"font-bold tracking-widest uppercase",children:"EZY.INFRA"}),p.jsx("span",{className:"hidden sm:inline text-yzy-ash",children:"| OPEN-SOURCE REGENERATIVE SHELTER"})]})}),p.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[p.jsxs("button",{onClick:()=>{Gt(900,.03),d()},className:"flex items-center gap-1.5 text-yzy-chalk hover:text-yzy-bone font-bold tracking-widest uppercase transition-colors",children:[p.jsx(ld,{className:"w-3 h-3 text-yzy-neon"}),p.jsx("span",{className:"underline decoration-yzy-neon/60 underline-offset-2",children:"YE // DONDA MANIFESTO"})]}),p.jsxs("button",{onClick:_,className:"flex items-center gap-1 text-yzy-ash hover:text-yzy-bone transition-colors",title:f?"Mute Haptic Sound":"Enable Haptic Sound",children:[f?p.jsx(M0,{className:"w-3.5 h-3.5 text-yzy-chalk"}):p.jsx(w0,{className:"w-3.5 h-3.5"}),p.jsx("span",{className:"hidden sm:inline",children:f?"AUDIO ON":"MUTED"})]})]})]}),p.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between",children:[p.jsxs("div",{onClick:()=>E("builder"),className:"cursor-pointer flex flex-col",children:[p.jsx("div",{className:"flex items-baseline gap-2",children:p.jsxs("span",{className:"font-display font-black text-xl sm:text-2xl tracking-tighter text-yzy-bone",children:["EZY ",p.jsx("span",{className:"font-mono text-sm tracking-widest text-yzy-ash font-normal",children:"EARTH"})]})}),p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"SUSTAINABLE ARCHITECTURAL SYSTEM"})]}),p.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-yzy-obsidian/80 p-1 border border-yzy-slate",children:S.map(M=>{const T=M.icon,v=s===M.id;return p.jsxs("button",{onClick:()=>E(M.id),className:`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] tracking-wider transition-all ${v?"bg-yzy-bone text-yzy-black font-bold shadow-sm":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/50"}`,children:[p.jsx(T,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:M.label})]},M.id)})}),p.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[p.jsxs("button",{onClick:()=>{Gt(),o()},className:"flex items-center gap-2 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate hover:border-yzy-ash px-2.5 sm:px-3.5 py-1.5 text-left transition-all",children:[p.jsxs("div",{className:"flex flex-col",children:[p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"EST. COST"}),p.jsxs("span",{className:"font-mono font-bold text-xs sm:text-sm text-yzy-bone tracking-tight",children:["$",n.toLocaleString()]})]}),p.jsxs("div",{className:"hidden sm:flex flex-col border-l border-yzy-slate pl-2.5",children:[p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"CARBON NET"}),p.jsx("span",{className:`font-mono font-bold text-xs ${r<=0?"text-yzy-neon":"text-yzy-warning"}`,children:r<=0?`${r} kg`:`+${r} kg`})]})]}),p.jsxs("button",{onClick:()=>{Ha(),c()},className:"hidden sm:flex items-center gap-1.5 bg-yzy-bone hover:bg-white text-yzy-black px-3 py-2 font-mono text-xs font-bold tracking-wider transition-all active:scale-95",children:[p.jsx(od,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"EXPORT CAD"})]}),p.jsx("button",{onClick:()=>{Gt(),x(!h)},className:"lg:hidden p-2 text-yzy-bone hover:bg-yzy-slate/50 border border-yzy-slate","aria-label":"Toggle Navigation",children:h?p.jsx(zl,{className:"w-5 h-5"}):p.jsx(o0,{className:"w-5 h-5"})})]})]}),h&&p.jsxs("div",{className:"lg:hidden bg-yzy-obsidian border-b border-yzy-slate px-4 py-4 flex flex-col gap-2",children:[S.map(M=>{const T=M.icon,v=s===M.id;return p.jsxs("button",{onClick:()=>E(M.id),className:`flex items-center justify-between w-full px-3 py-2.5 font-mono text-xs tracking-wider border ${v?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"text-yzy-chalk hover:bg-yzy-slate/40 border-yzy-slate/60"}`,children:[p.jsxs("div",{className:"flex items-center gap-2.5",children:[p.jsx(T,{className:"w-4 h-4"}),p.jsx("span",{children:M.label})]}),v&&p.jsx("span",{className:"text-[10px] uppercase font-mono tracking-widest bg-yzy-black text-yzy-bone px-1.5 py-0.5",children:"ACTIVE"})]},M.id)}),p.jsxs("div",{className:"pt-2 flex flex-col gap-2 border-t border-yzy-slate mt-2",children:[p.jsxs("button",{onClick:()=>{x(!1),c()},className:"flex items-center justify-center gap-2 bg-yzy-bone text-yzy-black py-2.5 font-mono text-xs font-bold tracking-widest",children:[p.jsx(od,{className:"w-4 h-4"}),p.jsx("span",{children:"EXPORT BLUEPRINT CAD SPEC"})]}),p.jsxs("button",{onClick:()=>{x(!1),d()},className:"flex items-center justify-center gap-2 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk py-2.5 font-mono text-xs font-bold tracking-widest",children:[p.jsx(ld,{className:"w-4 h-4 text-yzy-neon"}),p.jsx("span",{children:"YE // DONDA ARCHITECTURAL VISION"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="170",L0=0,Yp=1,D0=2,dg=1,fg=2,Gi=3,br=0,Un=1,Mi=2,Er=0,Bs=1,$p=2,Zp=3,Kp=4,U0=5,Yr=100,O0=101,z0=102,k0=103,F0=104,B0=200,H0=201,V0=202,G0=203,cd=204,ud=205,j0=206,W0=207,X0=208,q0=209,Y0=210,$0=211,Z0=212,K0=213,Q0=214,dd=0,fd=1,hd=2,Gs=3,pd=4,md=5,gd=6,yd=7,hg=0,J0=1,ev=2,Mr=0,tv=1,nv=2,iv=3,rv=4,sv=5,av=6,ov=7,pg=300,js=301,Ws=302,xd=303,vd=304,kl=306,_d=1e3,Zr=1001,Sd=1002,pi=1003,lv=1004,el=1005,bi=1006,Cu=1007,Kr=1008,qi=1009,mg=1010,gg=1011,Ba=1012,tf=1013,Qr=1014,ji=1015,Va=1016,nf=1017,rf=1018,Xs=1020,yg=35902,xg=1021,vg=1022,hi=1023,_g=1024,Sg=1025,Hs=1026,qs=1027,Eg=1028,sf=1029,Mg=1030,af=1031,of=1033,Ml=33776,bl=33777,wl=33778,Tl=33779,Ed=35840,Md=35841,bd=35842,wd=35843,Td=36196,Ad=37492,Cd=37496,Rd=37808,Nd=37809,Id=37810,Pd=37811,Ld=37812,Dd=37813,Ud=37814,Od=37815,zd=37816,kd=37817,Fd=37818,Bd=37819,Hd=37820,Vd=37821,Al=36492,Gd=36494,jd=36495,bg=36283,Wd=36284,Xd=36285,qd=36286,cv=3200,uv=3201,wg=0,dv=1,Sr="",Qn="srgb",$s="srgb-linear",Fl="linear",Pt="srgb",ws=7680,Qp=519,fv=512,hv=513,pv=514,Tg=515,mv=516,gv=517,yv=518,xv=519,Jp=35044,em="300 es",Wi=2e3,Pl=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,Yd=180/Math.PI;function Ga(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function wn(s,e,n){return Math.max(e,Math.min(n,s))}function vv(s,e){return(s%e+e)%e}function Nu(s,e,n){return(1-n)*s+n*e}function Ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,n,r,o,c,d,f,m,h){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,h)}set(e,n,r,o,c,d,f,m,h){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],m=r[6],h=r[1],x=r[4],_=r[7],S=r[2],E=r[5],M=r[8],T=o[0],v=o[3],y=o[6],z=o[1],U=o[4],I=o[7],Q=o[2],F=o[5],k=o[8];return c[0]=d*T+f*z+m*Q,c[3]=d*v+f*U+m*F,c[6]=d*y+f*I+m*k,c[1]=h*T+x*z+_*Q,c[4]=h*v+x*U+_*F,c[7]=h*y+x*I+_*k,c[2]=S*T+E*z+M*Q,c[5]=S*v+E*U+M*F,c[8]=S*y+E*I+M*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],h=e[7],x=e[8];return n*d*x-n*f*h-r*c*x+r*f*m+o*c*h-o*d*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],h=e[7],x=e[8],_=x*d-f*h,S=f*m-x*c,E=h*c-d*m,M=n*_+r*S+o*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*h-x*r)*T,e[2]=(f*r-o*d)*T,e[3]=S*T,e[4]=(x*n-o*m)*T,e[5]=(o*c-f*n)*T,e[6]=E*T,e[7]=(r*m-h*n)*T,e[8]=(d*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*f)+d+e,-o*h,o*m,-o*(-h*d+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Iu.makeScale(e,n)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new mt;function Ag(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ll(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _v(){const s=Ll("canvas");return s.style.display="block",s}const tm={};function za(s){s in tm||(tm[s]=!0,console.warn(s))}function Sv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Ev(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Pt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Pt&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?Fl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const nm=[.64,.33,.3,.6,.15,.06],im=[.2126,.7152,.0722],rm=[.3127,.329],sm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[$s]:{primaries:nm,whitePoint:rm,transfer:Fl,toXYZ:sm,fromXYZ:am,luminanceCoefficients:im,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:nm,whitePoint:rm,transfer:Pt,toXYZ:sm,fromXYZ:am,luminanceCoefficients:im,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}});let Ts;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Ll("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Xi(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xi(n[r]/255)*255):n[r]=Xi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wv=0;class Cg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(Pu(o[d].image)):c.push(Pu(o[d]))}else c=Pu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tv=0;class On extends Zs{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,r=Zr,o=Zr,c=bi,d=Kr,f=hi,m=qi,h=On.DEFAULT_ANISOTROPY,x=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Ga(),this.name="",this.source=new Cg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=pg;On.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,o=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,h=m[0],x=m[4],_=m[8],S=m[1],E=m[5],M=m[9],T=m[2],v=m[6],y=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-T)<.01&&Math.abs(M-v)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+T)<.1&&Math.abs(M+v)<.1&&Math.abs(h+E+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(h+1)/2,I=(E+1)/2,Q=(y+1)/2,F=(x+S)/4,k=(_+T)/4,j=(M+v)/4;return U>I&&U>Q?U<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(U),o=F/r,c=k/r):I>Q?I<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),r=F/o,c=j/o):Q<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(Q),r=k/c,o=j/c),this.set(r,o,c,n),this}let z=Math.sqrt((v-M)*(v-M)+(_-T)*(_-T)+(S-x)*(S-x));return Math.abs(z)<.001&&(z=1),this.x=(v-M)/z,this.y=(_-T)/z,this.z=(S-x)/z,this.w=Math.acos((h+E+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Av extends Zs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new On(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Av{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Rg extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cv extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let m=r[o+0],h=r[o+1],x=r[o+2],_=r[o+3];const S=c[d+0],E=c[d+1],M=c[d+2],T=c[d+3];if(f===0){e[n+0]=m,e[n+1]=h,e[n+2]=x,e[n+3]=_;return}if(f===1){e[n+0]=S,e[n+1]=E,e[n+2]=M,e[n+3]=T;return}if(_!==T||m!==S||h!==E||x!==M){let v=1-f;const y=m*S+h*E+x*M+_*T,z=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const Q=Math.sqrt(U),F=Math.atan2(Q,y*z);v=Math.sin(v*F)/Q,f=Math.sin(f*F)/Q}const I=f*z;if(m=m*v+S*I,h=h*v+E*I,x=x*v+M*I,_=_*v+T*I,v===1-f){const Q=1/Math.sqrt(m*m+h*h+x*x+_*_);m*=Q,h*=Q,x*=Q,_*=Q}}e[n]=m,e[n+1]=h,e[n+2]=x,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],m=r[o+1],h=r[o+2],x=r[o+3],_=c[d],S=c[d+1],E=c[d+2],M=c[d+3];return e[n]=f*M+x*_+m*E-h*S,e[n+1]=m*M+x*S+h*_-f*E,e[n+2]=h*M+x*E+f*S-m*_,e[n+3]=x*M-f*_-m*S-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,m=Math.sin,h=f(r/2),x=f(o/2),_=f(c/2),S=m(r/2),E=m(o/2),M=m(c/2);switch(d){case"XYZ":this._x=S*x*_+h*E*M,this._y=h*E*_-S*x*M,this._z=h*x*M+S*E*_,this._w=h*x*_-S*E*M;break;case"YXZ":this._x=S*x*_+h*E*M,this._y=h*E*_-S*x*M,this._z=h*x*M-S*E*_,this._w=h*x*_+S*E*M;break;case"ZXY":this._x=S*x*_-h*E*M,this._y=h*E*_+S*x*M,this._z=h*x*M+S*E*_,this._w=h*x*_-S*E*M;break;case"ZYX":this._x=S*x*_-h*E*M,this._y=h*E*_+S*x*M,this._z=h*x*M-S*E*_,this._w=h*x*_+S*E*M;break;case"YZX":this._x=S*x*_+h*E*M,this._y=h*E*_+S*x*M,this._z=h*x*M-S*E*_,this._w=h*x*_-S*E*M;break;case"XZY":this._x=S*x*_-h*E*M,this._y=h*E*_-S*x*M,this._z=h*x*M+S*E*_,this._w=h*x*_+S*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],m=n[9],h=n[2],x=n[6],_=n[10],S=r+f+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-h)*E,this._z=(d-o)*E}else if(r>f&&r>_){const E=2*Math.sqrt(1+r-f-_);this._w=(x-m)/E,this._x=.25*E,this._y=(o+d)/E,this._z=(c+h)/E}else if(f>_){const E=2*Math.sqrt(1+f-r-_);this._w=(c-h)/E,this._x=(o+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+_-r-f);this._w=(d-o)/E,this._x=(c+h)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,m=n._y,h=n._z,x=n._w;return this._x=r*x+d*f+o*h-c*m,this._y=o*x+d*m+c*f-r*h,this._z=c*x+d*h+r*m-o*f,this._w=d*x-r*f-o*m-c*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const m=1-f*f;if(m<=Number.EPSILON){const E=1-n;return this._w=E*d+n*this._w,this._x=E*r+n*this._x,this._y=E*o+n*this._y,this._z=E*c+n*this._z,this.normalize(),this}const h=Math.sqrt(m),x=Math.atan2(h,f),_=Math.sin((1-n)*x)/h,S=Math.sin(n*x)/h;return this._w=d*_+this._w*S,this._x=r*_+this._x*S,this._y=o*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,n=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,m=e.w,h=2*(d*o-f*r),x=2*(f*n-c*o),_=2*(c*r-d*n);return this.x=n+m*h+d*_-f*x,this.y=r+m*x+f*h-c*_,this.z=o+m*_+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,m=n.z;return this.x=o*m-c*f,this.y=c*d-r*m,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new ae,om=new ja;class Wa{constructor(e=new ae(1/0,1/0,1/0),n=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ci):ci.fromBufferAttribute(c,d),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),nl.subVectors(this.max,Pa),As.subVectors(e.a,Pa),Cs.subVectors(e.b,Pa),Rs.subVectors(e.c,Pa),mr.subVectors(Cs,As),gr.subVectors(Rs,Cs),Br.subVectors(As,Rs);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Br.z,Br.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Br.z,0,-Br.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Br.y,Br.x,0];return!Du(n,As,Cs,Rs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,As,Cs,Rs,nl))?!1:(il.crossVectors(mr,gr),n=[il.x,il.y,il.z],Du(n,As,Cs,Rs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],ci=new ae,tl=new Wa,As=new ae,Cs=new ae,Rs=new ae,mr=new ae,gr=new ae,Br=new ae,Pa=new ae,nl=new ae,il=new ae,Hr=new ae;function Du(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Hr.fromArray(s,c);const f=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),m=e.dot(Hr),h=n.dot(Hr),x=r.dot(Hr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>f)return!1}return!0}const Rv=new Wa,La=new ae,Uu=new ae;class Bl{constructor(e=new ae,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Rv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const n=La.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(La,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(Uu)),this.expandByPoint(La.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new ae,Ou=new ae,rl=new ae,yr=new ae,zu=new ae,sl=new ae,ku=new ae;class lf{constructor(e=new ae,n=new ae(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Ou.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(Ou);const c=e.distanceTo(n)*.5,d=-this.direction.dot(rl),f=yr.dot(this.direction),m=-yr.dot(rl),h=yr.lengthSq(),x=Math.abs(1-d*d);let _,S,E,M;if(x>0)if(_=d*m-f,S=d*f-m,M=c*x,_>=0)if(S>=-M)if(S<=M){const T=1/x;_*=T,S*=T,E=_*(_+d*S+2*f)+S*(d*_+S+2*m)+h}else S=c,_=Math.max(0,-(d*S+f)),E=-_*_+S*(S+2*m)+h;else S=-c,_=Math.max(0,-(d*S+f)),E=-_*_+S*(S+2*m)+h;else S<=-M?(_=Math.max(0,-(-d*c+f)),S=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+h):S<=M?(_=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+h):(_=Math.max(0,-(d*c+f)),S=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+h);else S=d>0?-c:c,_=Math.max(0,-(d*S+f)),E=-_*_+S*(S+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ou).addScaledVector(rl,S),E}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,m=r+d;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,m;const h=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return h>=0?(r=(e.min.x-S.x)*h,o=(e.max.x-S.x)*h):(r=(e.max.x-S.x)*h,o=(e.min.x-S.x)*h),x>=0?(c=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(f=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,r,o,c){zu.subVectors(n,e),sl.subVectors(r,e),ku.crossVectors(zu,sl);let d=this.direction.dot(ku),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;yr.subVectors(this.origin,e);const m=f*this.direction.dot(sl.crossVectors(yr,sl));if(m<0)return null;const h=f*this.direction.dot(zu.cross(yr));if(h<0||m+h>d)return null;const x=-f*yr.dot(ku);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,o,c,d,f,m,h,x,_,S,E,M,T,v){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,h,x,_,S,E,M,T,v)}set(e,n,r,o,c,d,f,m,h,x,_,S,E,M,T,v){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=d,y[9]=f,y[13]=m,y[2]=h,y[6]=x,y[10]=_,y[14]=S,y[3]=E,y[7]=M,y[11]=T,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),d=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),m=Math.cos(o),h=Math.sin(o),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=d*x,E=d*_,M=f*x,T=f*_;n[0]=m*x,n[4]=-m*_,n[8]=h,n[1]=E+M*h,n[5]=S-T*h,n[9]=-f*m,n[2]=T-S*h,n[6]=M+E*h,n[10]=d*m}else if(e.order==="YXZ"){const S=m*x,E=m*_,M=h*x,T=h*_;n[0]=S+T*f,n[4]=M*f-E,n[8]=d*h,n[1]=d*_,n[5]=d*x,n[9]=-f,n[2]=E*f-M,n[6]=T+S*f,n[10]=d*m}else if(e.order==="ZXY"){const S=m*x,E=m*_,M=h*x,T=h*_;n[0]=S-T*f,n[4]=-d*_,n[8]=M+E*f,n[1]=E+M*f,n[5]=d*x,n[9]=T-S*f,n[2]=-d*h,n[6]=f,n[10]=d*m}else if(e.order==="ZYX"){const S=d*x,E=d*_,M=f*x,T=f*_;n[0]=m*x,n[4]=M*h-E,n[8]=S*h+T,n[1]=m*_,n[5]=T*h+S,n[9]=E*h-M,n[2]=-h,n[6]=f*m,n[10]=d*m}else if(e.order==="YZX"){const S=d*m,E=d*h,M=f*m,T=f*h;n[0]=m*x,n[4]=T-S*_,n[8]=M*_+E,n[1]=_,n[5]=d*x,n[9]=-f*x,n[2]=-h*x,n[6]=E*_+M,n[10]=S-T*_}else if(e.order==="XZY"){const S=d*m,E=d*h,M=f*m,T=f*h;n[0]=m*x,n[4]=-_,n[8]=h*x,n[1]=S*_+T,n[5]=d*x,n[9]=E*_-M,n[2]=M*_-E,n[6]=f*x,n[10]=T*_+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Iv)}lookAt(e,n,r){const o=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),xr.crossVectors(r,Hn),xr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),xr.crossVectors(r,Hn)),xr.normalize(),al.crossVectors(Hn,xr),o[0]=xr.x,o[4]=al.x,o[8]=Hn.x,o[1]=xr.y,o[5]=al.y,o[9]=Hn.y,o[2]=xr.z,o[6]=al.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],m=r[8],h=r[12],x=r[1],_=r[5],S=r[9],E=r[13],M=r[2],T=r[6],v=r[10],y=r[14],z=r[3],U=r[7],I=r[11],Q=r[15],F=o[0],k=o[4],j=o[8],N=o[12],C=o[1],L=o[5],K=o[9],W=o[13],te=o[2],de=o[6],ne=o[10],oe=o[14],H=o[3],fe=o[7],P=o[11],b=o[15];return c[0]=d*F+f*C+m*te+h*H,c[4]=d*k+f*L+m*de+h*fe,c[8]=d*j+f*K+m*ne+h*P,c[12]=d*N+f*W+m*oe+h*b,c[1]=x*F+_*C+S*te+E*H,c[5]=x*k+_*L+S*de+E*fe,c[9]=x*j+_*K+S*ne+E*P,c[13]=x*N+_*W+S*oe+E*b,c[2]=M*F+T*C+v*te+y*H,c[6]=M*k+T*L+v*de+y*fe,c[10]=M*j+T*K+v*ne+y*P,c[14]=M*N+T*W+v*oe+y*b,c[3]=z*F+U*C+I*te+Q*H,c[7]=z*k+U*L+I*de+Q*fe,c[11]=z*j+U*K+I*ne+Q*P,c[15]=z*N+U*W+I*oe+Q*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],m=e[9],h=e[13],x=e[2],_=e[6],S=e[10],E=e[14],M=e[3],T=e[7],v=e[11],y=e[15];return M*(+c*m*_-o*h*_-c*f*S+r*h*S+o*f*E-r*m*E)+T*(+n*m*E-n*h*S+c*d*S-o*d*E+o*h*x-c*m*x)+v*(+n*h*_-n*f*E-c*d*_+r*d*E+c*f*x-r*h*x)+y*(-o*f*x-n*m*_+n*f*S+o*d*_-r*d*S+r*m*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],h=e[7],x=e[8],_=e[9],S=e[10],E=e[11],M=e[12],T=e[13],v=e[14],y=e[15],z=_*v*h-T*S*h+T*m*E-f*v*E-_*m*y+f*S*y,U=M*S*h-x*v*h-M*m*E+d*v*E+x*m*y-d*S*y,I=x*T*h-M*_*h+M*f*E-d*T*E-x*f*y+d*_*y,Q=M*_*m-x*T*m-M*f*S+d*T*S+x*f*v-d*_*v,F=n*z+r*U+o*I+c*Q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=z*k,e[1]=(T*S*c-_*v*c-T*o*E+r*v*E+_*o*y-r*S*y)*k,e[2]=(f*v*c-T*m*c+T*o*h-r*v*h-f*o*y+r*m*y)*k,e[3]=(_*m*c-f*S*c-_*o*h+r*S*h+f*o*E-r*m*E)*k,e[4]=U*k,e[5]=(x*v*c-M*S*c+M*o*E-n*v*E-x*o*y+n*S*y)*k,e[6]=(M*m*c-d*v*c-M*o*h+n*v*h+d*o*y-n*m*y)*k,e[7]=(d*S*c-x*m*c+x*o*h-n*S*h-d*o*E+n*m*E)*k,e[8]=I*k,e[9]=(M*_*c-x*T*c-M*r*E+n*T*E+x*r*y-n*_*y)*k,e[10]=(d*T*c-M*f*c+M*r*h-n*T*h-d*r*y+n*f*y)*k,e[11]=(x*f*c-d*_*c-x*r*h+n*_*h+d*r*E-n*f*E)*k,e[12]=Q*k,e[13]=(x*T*o-M*_*o+M*r*S-n*T*S-x*r*v+n*_*v)*k,e[14]=(M*f*o-d*T*o-M*r*m+n*T*m+d*r*v-n*f*v)*k,e[15]=(d*_*o-x*f*o+x*r*m-n*_*m-d*r*S+n*f*S)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,m=e.z,h=c*d,x=c*f;return this.set(h*d+r,h*f-o*m,h*m+o*f,0,h*f+o*m,x*f+r,x*m-o*d,0,h*m-o*f,x*m+o*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,m=n._w,h=c+c,x=d+d,_=f+f,S=c*h,E=c*x,M=c*_,T=d*x,v=d*_,y=f*_,z=m*h,U=m*x,I=m*_,Q=r.x,F=r.y,k=r.z;return o[0]=(1-(T+y))*Q,o[1]=(E+I)*Q,o[2]=(M-U)*Q,o[3]=0,o[4]=(E-I)*F,o[5]=(1-(S+y))*F,o[6]=(v+z)*F,o[7]=0,o[8]=(M+U)*k,o[9]=(v-z)*k,o[10]=(1-(S+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Ns.set(o[0],o[1],o[2]).length();const d=Ns.set(o[4],o[5],o[6]).length(),f=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const h=1/c,x=1/d,_=1/f;return ui.elements[0]*=h,ui.elements[1]*=h,ui.elements[2]*=h,ui.elements[4]*=x,ui.elements[5]*=x,ui.elements[6]*=x,ui.elements[8]*=_,ui.elements[9]*=_,ui.elements[10]*=_,n.setFromRotationMatrix(ui),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Wi){const m=this.elements,h=2*c/(n-e),x=2*c/(r-o),_=(n+e)/(n-e),S=(r+o)/(r-o);let E,M;if(f===Wi)E=-(d+c)/(d-c),M=-2*d*c/(d-c);else if(f===Pl)E=-d/(d-c),M=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=h,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=x,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=M,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Wi){const m=this.elements,h=1/(n-e),x=1/(r-o),_=1/(d-c),S=(n+e)*h,E=(r+o)*x;let M,T;if(f===Wi)M=(d+c)*_,T=-2*_;else if(f===Pl)M=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*h,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*x,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=T,m[14]=-M,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new ae,ui=new Bt,Nv=new ae(0,0,0),Iv=new ae(1,1,1),xr=new ae,al=new ae,Hn=new ae,lm=new Bt,cm=new ja;class Ti{constructor(e=0,n=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],m=o[1],h=o[5],x=o[9],_=o[2],S=o[6],E=o[10];switch(n){case"XYZ":this._y=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(wn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(wn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,E));break;case"XZY":this._z=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,h),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pv=0;const um=new ae,Is=new ja,Bi=new Bt,ol=new ae,Da=new ae,Lv=new ae,Dv=new ja,dm=new ae(1,0,0),fm=new ae(0,1,0),hm=new ae(0,0,1),pm={type:"added"},Uv={type:"removed"},Ps={type:"childadded",child:null},Fu={type:"childremoved",child:null};class un extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new ae,n=new Ti,r=new ja,o=new ae(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new mt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Da,ol,this.up):Bi.lookAt(ol,Da,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(Bi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Uv),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,Dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,h=this.material.length;m<h;m++)f.push(c(e.materials,this.material[m]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(c(e.animations,m))}}if(n){const f=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),_=d(e.shapes),S=d(e.skeletons),E=d(e.animations),M=d(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),M.length>0&&(r.nodes=M)}return r.object=o,r;function d(f){const m=[];for(const h in f){const x=f[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}un.DEFAULT_UP=new ae(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new ae,Hi=new ae,Bu=new ae,Vi=new ae,Ls=new ae,Ds=new ae,mm=new ae,Hu=new ae,Vu=new ae,Gu=new ae,ju=new Wt,Wu=new Wt,Xu=new Wt;class fi{constructor(e=new ae,n=new ae,r=new ae){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),di.subVectors(e,n),o.cross(di);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){di.subVectors(o,n),Hi.subVectors(r,n),Bu.subVectors(e,n);const d=di.dot(di),f=di.dot(Hi),m=di.dot(Bu),h=Hi.dot(Hi),x=Hi.dot(Bu),_=d*h-f*f;if(_===0)return c.set(0,0,0),null;const S=1/_,E=(h*m-f*x)*S,M=(d*x-f*m)*S;return c.set(1-E-M,M,E)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,r,o,c,d,f,m){return this.getBarycoord(e,n,r,o,Vi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Vi.x),m.addScaledVector(d,Vi.y),m.addScaledVector(f,Vi.z),m)}static getInterpolatedAttribute(e,n,r,o,c,d){return ju.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),ju.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,r),Xu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(ju,c.x),d.addScaledVector(Wu,c.y),d.addScaledVector(Xu,c.z),d}static isFrontFacing(e,n,r,o){return di.subVectors(r,n),Hi.subVectors(e,n),di.cross(Hi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return fi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Ls.subVectors(o,r),Ds.subVectors(c,r),Hu.subVectors(e,r);const m=Ls.dot(Hu),h=Ds.dot(Hu);if(m<=0&&h<=0)return n.copy(r);Vu.subVectors(e,o);const x=Ls.dot(Vu),_=Ds.dot(Vu);if(x>=0&&_<=x)return n.copy(o);const S=m*_-x*h;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),n.copy(r).addScaledVector(Ls,d);Gu.subVectors(e,c);const E=Ls.dot(Gu),M=Ds.dot(Gu);if(M>=0&&E<=M)return n.copy(c);const T=E*h-m*M;if(T<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(r).addScaledVector(Ds,f);const v=x*M-E*_;if(v<=0&&_-x>=0&&E-M>=0)return mm.subVectors(c,o),f=(_-x)/(_-x+(E-M)),n.copy(o).addScaledVector(mm,f);const y=1/(v+T+S);return d=T*y,f=S*y,n.copy(r).addScaledVector(Ls,d).addScaledVector(Ds,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=vv(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=qu(d,c,e+1/3),this.g=qu(d,c,e),this.b=qu(d,c,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,n=Qn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=Ng[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return wt.fromWorkingColorSpace(xn.copy(this),e),Math.round(wn(xn.r*255,0,255))*65536+Math.round(wn(xn.g*255,0,255))*256+Math.round(wn(xn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(xn.copy(this),n);const r=xn.r,o=xn.g,c=xn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let m,h;const x=(f+d)/2;if(f===d)m=0,h=0;else{const _=d-f;switch(h=x<=.5?_/(d+f):_/(2-d-f),d){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Qn){wt.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,o=xn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(ll);const r=Nu(vr.h,ll.h,n),o=Nu(vr.s,ll.s,n),c=Nu(vr.l,ll.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new gt;gt.NAMES=Ng;let Ov=0;class Ks extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Ga(),this.name="",this.blending=Bs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==cd&&(r.blendSrc=this.blendSrc),this.blendDst!==ud&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uf extends Ks{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new ae,cl=new Et;class wi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Jp,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ia(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),o=Dn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),o=Dn(o,this.array),c=Dn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class Ig extends wi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Pg extends wi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $t extends wi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let zv=0;const Kn=new Bt,Yu=new un,Us=new ae,Vn=new Wa,Ua=new Wa,an=new ae;class ei extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?Pg:Ig)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,r){return Kn.makeTranslation(e,n,r),this.applyMatrix4(Kn),this}scale(e,n,r){return Kn.makeScale(e,n,r),this.applyMatrix4(Kn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new $t(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Vn.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Ua.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Vn.min,Ua.min),Vn.expandByPoint(an),an.addVectors(Vn.max,Ua.max),Vn.expandByPoint(an)):(Vn.expandByPoint(Ua.min),Vn.expandByPoint(Ua.max))}Vn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)an.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(an));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],m=this.morphTargetsRelative;for(let h=0,x=f.count;h<x;h++)an.fromBufferAttribute(f,h),m&&(Us.fromBufferAttribute(e,h),an.add(Us)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],m=[];for(let j=0;j<r.count;j++)f[j]=new ae,m[j]=new ae;const h=new ae,x=new ae,_=new ae,S=new Et,E=new Et,M=new Et,T=new ae,v=new ae;function y(j,N,C){h.fromBufferAttribute(r,j),x.fromBufferAttribute(r,N),_.fromBufferAttribute(r,C),S.fromBufferAttribute(c,j),E.fromBufferAttribute(c,N),M.fromBufferAttribute(c,C),x.sub(h),_.sub(h),E.sub(S),M.sub(S);const L=1/(E.x*M.y-M.x*E.y);isFinite(L)&&(T.copy(x).multiplyScalar(M.y).addScaledVector(_,-E.y).multiplyScalar(L),v.copy(_).multiplyScalar(E.x).addScaledVector(x,-M.x).multiplyScalar(L),f[j].add(T),f[N].add(T),f[C].add(T),m[j].add(v),m[N].add(v),m[C].add(v))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let j=0,N=z.length;j<N;++j){const C=z[j],L=C.start,K=C.count;for(let W=L,te=L+K;W<te;W+=3)y(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const U=new ae,I=new ae,Q=new ae,F=new ae;function k(j){Q.fromBufferAttribute(o,j),F.copy(Q);const N=f[j];U.copy(N),U.sub(Q.multiplyScalar(Q.dot(N))).normalize(),I.crossVectors(F,N);const L=I.dot(m[j])<0?-1:1;d.setXYZW(j,U.x,U.y,U.z,L)}for(let j=0,N=z.length;j<N;++j){const C=z[j],L=C.start,K=C.count;for(let W=L,te=L+K;W<te;W+=3)k(e.getX(W+0)),k(e.getX(W+1)),k(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const o=new ae,c=new ae,d=new ae,f=new ae,m=new ae,h=new ae,x=new ae,_=new ae;if(e)for(let S=0,E=e.count;S<E;S+=3){const M=e.getX(S+0),T=e.getX(S+1),v=e.getX(S+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,v),x.subVectors(d,c),_.subVectors(o,c),x.cross(_),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,T),h.fromBufferAttribute(r,v),f.add(x),m.add(x),h.add(x),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(v,h.x,h.y,h.z)}else for(let S=0,E=n.count;S<E;S+=3)o.fromBufferAttribute(n,S+0),c.fromBufferAttribute(n,S+1),d.fromBufferAttribute(n,S+2),x.subVectors(d,c),_.subVectors(o,c),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(f,m){const h=f.array,x=f.itemSize,_=f.normalized,S=new h.constructor(m.length*x);let E=0,M=0;for(let T=0,v=m.length;T<v;T++){f.isInterleavedBufferAttribute?E=m[T]*f.data.stride+f.offset:E=m[T]*x;for(let y=0;y<x;y++)S[M++]=h[E++]}return new wi(S,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],h=e(m,r);n.setAttribute(f,h)}const c=this.morphAttributes;for(const f in c){const m=[],h=c[f];for(let x=0,_=h.length;x<_;x++){const S=h[x],E=e(S,r);m.push(E)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,m=d.length;f<m;f++){const h=d[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let _=0,S=h.length;_<S;_++){const E=h[_];x.push(E.toJSON(e.data))}x.length>0&&(o[m]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const h in o){const x=o[h];this.setAttribute(h,x.clone(n))}const c=e.morphAttributes;for(const h in c){const x=[],_=c[h];for(let S=0,E=_.length;S<E;S++)x.push(_[S].clone(n));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Bt,Vr=new lf,ul=new Bl,ym=new ae,dl=new ae,fl=new ae,hl=new ae,$u=new ae,pl=new ae,xm=new ae,ml=new ae;class Ft extends un{constructor(e=new ei,n=new uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){pl.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=f[m],_=c[m];x!==0&&($u.fromBufferAttribute(_,e),d?pl.addScaledVector($u,x):pl.addScaledVector($u.sub(n),x))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(c),Vr.copy(e.ray).recast(e.near),!(ul.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(ul,ym)===null||Vr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(gm.copy(c).invert(),Vr.copy(e.ray).applyMatrix4(gm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,S=c.groups,E=c.drawRange;if(f!==null)if(Array.isArray(d))for(let M=0,T=S.length;M<T;M++){const v=S[M],y=d[v.materialIndex],z=Math.max(v.start,E.start),U=Math.min(f.count,Math.min(v.start+v.count,E.start+E.count));for(let I=z,Q=U;I<Q;I+=3){const F=f.getX(I),k=f.getX(I+1),j=f.getX(I+2);o=gl(this,y,e,r,h,x,_,F,k,j),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const M=Math.max(0,E.start),T=Math.min(f.count,E.start+E.count);for(let v=M,y=T;v<y;v+=3){const z=f.getX(v),U=f.getX(v+1),I=f.getX(v+2);o=gl(this,d,e,r,h,x,_,z,U,I),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let M=0,T=S.length;M<T;M++){const v=S[M],y=d[v.materialIndex],z=Math.max(v.start,E.start),U=Math.min(m.count,Math.min(v.start+v.count,E.start+E.count));for(let I=z,Q=U;I<Q;I+=3){const F=I,k=I+1,j=I+2;o=gl(this,y,e,r,h,x,_,F,k,j),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const M=Math.max(0,E.start),T=Math.min(m.count,E.start+E.count);for(let v=M,y=T;v<y;v+=3){const z=v,U=v+1,I=v+2;o=gl(this,d,e,r,h,x,_,z,U,I),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function kv(s,e,n,r,o,c,d,f){let m;if(e.side===Un?m=r.intersectTriangle(d,c,o,!0,f):m=r.intersectTriangle(o,c,d,e.side===br,f),m===null)return null;ml.copy(f),ml.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo(ml);return h<n.near||h>n.far?null:{distance:h,point:ml.clone(),object:s}}function gl(s,e,n,r,o,c,d,f,m,h){s.getVertexPosition(f,dl),s.getVertexPosition(m,fl),s.getVertexPosition(h,hl);const x=kv(s,e,n,r,dl,fl,hl,xm);if(x){const _=new ae;fi.getBarycoord(xm,dl,fl,hl,_),o&&(x.uv=fi.getInterpolatedAttribute(o,f,m,h,_,new Et)),c&&(x.uv1=fi.getInterpolatedAttribute(c,f,m,h,_,new Et)),d&&(x.normal=fi.getInterpolatedAttribute(d,f,m,h,_,new ae),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:f,b:m,c:h,normal:new ae,materialIndex:0};fi.getNormal(dl,fl,hl,S.normal),x.face=S,x.barycoord=_}return x}class vn extends ei{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],_=[];let S=0,E=0;M("z","y","x",-1,-1,r,n,e,d,c,0),M("z","y","x",1,-1,r,n,-e,d,c,1),M("x","z","y",1,1,e,r,n,o,d,2),M("x","z","y",1,-1,e,r,-n,o,d,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(_,2));function M(T,v,y,z,U,I,Q,F,k,j,N){const C=I/k,L=Q/j,K=I/2,W=Q/2,te=F/2,de=k+1,ne=j+1;let oe=0,H=0;const fe=new ae;for(let P=0;P<ne;P++){const b=P*L-W;for(let G=0;G<de;G++){const me=G*C-K;fe[T]=me*z,fe[v]=b*U,fe[y]=te,h.push(fe.x,fe.y,fe.z),fe[T]=0,fe[v]=0,fe[y]=F>0?1:-1,x.push(fe.x,fe.y,fe.z),_.push(G/k),_.push(1-P/j),oe+=1}}for(let P=0;P<j;P++)for(let b=0;b<k;b++){const G=S+b+de*P,me=S+b+de*(P+1),X=S+(b+1)+de*(P+1),J=S+(b+1)+de*P;m.push(G,me,J),m.push(me,X,J),H+=6}f.addGroup(E,H,N),E+=H,S+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const o in r)e[o]=r[o]}return e}function Fv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Lg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Bv={clone:Ys,merge:bn};var Hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Ks{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hv,this.fragmentShader=Vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Dg extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new ae,vm=new Et,_m=new Et;class Jn extends Dg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,vm,_m),n.subVectors(_m,vm)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ru*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*o/m,n-=d.offsetY*r/h,o*=d.width/m,r*=d.height/h}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,zs=1;class Gv extends un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn(Os,zs,e,n);o.layers=this.layers,this.add(o);const c=new Jn(Os,zs,e,n);c.layers=this.layers,this.add(c);const d=new Jn(Os,zs,e,n);d.layers=this.layers,this.add(d);const f=new Jn(Os,zs,e,n);f.layers=this.layers,this.add(f);const m=new Jn(Os,zs,e,n);m.layers=this.layers,this.add(m);const h=new Jn(Os,zs,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,m]=n;for(const h of n)this.remove(h);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,m,h,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(_,S,E),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Ug extends On{constructor(e,n,r,o,c,d,f,m,h,x){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,o,c,d,f,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jv extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ug(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vn(5,5,5),c=new wr({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Er});c.uniforms.tEquirect.value=n;const d=new Ft(o,c),f=n.minFilter;return n.minFilter===Kr&&(n.minFilter=bi),new Gv(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}const Zu=new ae,Wv=new ae,Xv=new mt;class Xr{constructor(e=new ae(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Zu.subVectors(r,n).cross(Wv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Xv.getNormalMatrix(e),o=this.coplanarPoint(Zu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Bl,yl=new ae;class df{constructor(e=new Xr,n=new Xr,r=new Xr,o=new Xr,c=new Xr,d=new Xr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Wi){const r=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],m=o[3],h=o[4],x=o[5],_=o[6],S=o[7],E=o[8],M=o[9],T=o[10],v=o[11],y=o[12],z=o[13],U=o[14],I=o[15];if(r[0].setComponents(m-c,S-h,v-E,I-y).normalize(),r[1].setComponents(m+c,S+h,v+E,I+y).normalize(),r[2].setComponents(m+d,S+x,v+M,I+z).normalize(),r[3].setComponents(m-d,S-x,v-M,I-z).normalize(),r[4].setComponents(m-f,S-_,v-T,I-U).normalize(),n===Wi)r[5].setComponents(m+f,S+_,v+T,I+U).normalize();else if(n===Pl)r[5].setComponents(f,_,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(yl.x=o.normal.x>0?e.max.x:e.min.x,yl.y=o.normal.y>0?e.max.y:e.min.y,yl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Og(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function qv(s){const e=new WeakMap;function n(f,m){const h=f.array,x=f.usage,_=h.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,h,x),f.onUploadCallback();let E;if(h instanceof Float32Array)E=s.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=s.SHORT;else if(h instanceof Uint32Array)E=s.UNSIGNED_INT;else if(h instanceof Int32Array)E=s.INT;else if(h instanceof Int8Array)E=s.BYTE;else if(h instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:S,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,m,h){const x=m.array,_=m.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,x);else{_.sort((E,M)=>E.start-M.start);let S=0;for(let E=1;E<_.length;E++){const M=_[S],T=_[E];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++S,_[S]=T)}_.length=S+1;for(let E=0,M=_.length;E<M;E++){const T=_[E];s.bufferSubData(h,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function d(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,m));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,m),h.version=f.version}}return{get:o,remove:c,update:d}}class Hl extends ei{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),m=Math.floor(o),h=f+1,x=m+1,_=e/f,S=n/m,E=[],M=[],T=[],v=[];for(let y=0;y<x;y++){const z=y*S-d;for(let U=0;U<h;U++){const I=U*_-c;M.push(I,-z,0),T.push(0,0,1),v.push(U/f),v.push(1-y/m)}}for(let y=0;y<m;y++)for(let z=0;z<f;z++){const U=z+h*y,I=z+h*(y+1),Q=z+1+h*(y+1),F=z+1+h*y;E.push(U,I,F),E.push(I,Q,F)}this.setIndex(E),this.setAttribute("position",new $t(M,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$v=`#ifdef USE_ALPHAHASH
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
#endif`,Zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
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
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
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
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o_=`#ifdef USE_IRIDESCENCE
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
#endif`,l_=`#ifdef USE_BUMPMAP
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y_=`#define PI 3.141592653589793
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
} // validated`,x_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",w_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U_=`#ifdef USE_GRADIENTMAP
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
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
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
#endif`,B_=`#ifdef USE_ENVMAP
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
#endif`,H_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W_=`PhysicalMaterial material;
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
#endif`,X_=`struct PhysicalMaterial {
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
}`,q_=`
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
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iS=`#if defined( USE_POINTS_UV )
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
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
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
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
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
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ES=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PS=`float getShadowMask() {
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
}`,LS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`uniform sampler2D t2D;
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
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
}`,eE=`#if DEPTH_PACKING == 3200
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
}`,tE=`#define DISTANCE
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
}`,nE=`#define DISTANCE
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
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
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
}`,aE=`uniform vec3 diffuse;
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
}`,oE=`#include <common>
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
}`,lE=`uniform vec3 diffuse;
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
}`,cE=`#define LAMBERT
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
}`,uE=`#define LAMBERT
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
}`,dE=`#define MATCAP
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
}`,fE=`#define MATCAP
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
}`,hE=`#define NORMAL
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
}`,pE=`#define NORMAL
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
}`,mE=`#define PHONG
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
}`,gE=`#define PHONG
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
}`,yE=`#define STANDARD
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
}`,xE=`#define STANDARD
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
}`,vE=`#define TOON
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
}`,_E=`#define TOON
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
}`,SE=`uniform float size;
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
}`,EE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,bE=`uniform vec3 color;
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
}`,wE=`uniform float rotation;
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
}`,TE=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Yv,alphahash_pars_fragment:$v,alphamap_fragment:Zv,alphamap_pars_fragment:Kv,alphatest_fragment:Qv,alphatest_pars_fragment:Jv,aomap_fragment:e_,aomap_pars_fragment:t_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:r_,beginnormal_vertex:s_,bsdfs:a_,iridescence_fragment:o_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:f_,color_fragment:h_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:g_,common:y_,cube_uv_reflection_fragment:x_,defaultnormal_vertex:v_,displacementmap_pars_vertex:__,displacementmap_vertex:S_,emissivemap_fragment:E_,emissivemap_pars_fragment:M_,colorspace_fragment:b_,colorspace_pars_fragment:w_,envmap_fragment:T_,envmap_common_pars_fragment:A_,envmap_pars_fragment:C_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:B_,envmap_vertex:N_,fog_vertex:I_,fog_pars_vertex:P_,fog_fragment:L_,fog_pars_fragment:D_,gradientmap_pars_fragment:U_,lightmap_pars_fragment:O_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:k_,lights_pars_begin:F_,lights_toon_fragment:H_,lights_toon_pars_fragment:V_,lights_phong_fragment:G_,lights_phong_pars_fragment:j_,lights_physical_fragment:W_,lights_physical_pars_fragment:X_,lights_fragment_begin:q_,lights_fragment_maps:Y_,lights_fragment_end:$_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:K_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:J_,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:aS,morphcolor_vertex:oS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:xS,clearcoat_pars_fragment:vS,iridescence_pars_fragment:_S,opaque_fragment:SS,packing:ES,premultiplied_alpha_fragment:MS,project_vertex:bS,dithering_fragment:wS,dithering_pars_fragment:TS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:NS,shadowmap_vertex:IS,shadowmask_pars_fragment:PS,skinbase_vertex:LS,skinning_pars_vertex:DS,skinning_vertex:US,skinnormal_vertex:OS,specularmap_fragment:zS,specularmap_pars_fragment:kS,tonemapping_fragment:FS,tonemapping_pars_fragment:BS,transmission_fragment:HS,transmission_pars_fragment:VS,uv_pars_fragment:GS,uv_pars_vertex:jS,uv_vertex:WS,worldpos_vertex:XS,background_vert:qS,background_frag:YS,backgroundCube_vert:$S,backgroundCube_frag:ZS,cube_vert:KS,cube_frag:QS,depth_vert:JS,depth_frag:eE,distanceRGBA_vert:tE,distanceRGBA_frag:nE,equirect_vert:iE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:aE,meshbasic_vert:oE,meshbasic_frag:lE,meshlambert_vert:cE,meshlambert_frag:uE,meshmatcap_vert:dE,meshmatcap_frag:fE,meshnormal_vert:hE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:yE,meshphysical_frag:xE,meshtoon_vert:vE,meshtoon_frag:_E,points_vert:SE,points_frag:EE,shadow_vert:ME,shadow_frag:bE,sprite_vert:wE,sprite_frag:TE},Le={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ei={basic:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new gt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:bn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:bn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new gt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:bn([Le.points,Le.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:bn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:bn([Le.common,Le.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:bn([Le.sprite,Le.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:bn([Le.common,Le.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:bn([Le.lights,Le.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ei.physical={uniforms:bn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const xl={r:0,b:0,g:0},jr=new Ti,AE=new Bt;function CE(s,e,n,r,o,c,d){const f=new gt(0);let m=c===!0?0:1,h,x,_=null,S=0,E=null;function M(z){let U=z.isScene===!0?z.background:null;return U&&U.isTexture&&(U=(z.backgroundBlurriness>0?n:e).get(U)),U}function T(z){let U=!1;const I=M(z);I===null?y(f,m):I&&I.isColor&&(y(I,1),U=!0);const Q=s.xr.getEnvironmentBlendMode();Q==="additive"?r.buffers.color.setClear(0,0,0,1,d):Q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(z,U){const I=M(U);I&&(I.isCubeTexture||I.mapping===kl)?(x===void 0&&(x=new Ft(new vn(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Ys(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(Q,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),jr.copy(U.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(jr)),x.material.toneMapped=wt.getTransfer(I.colorSpace)!==Pt,(_!==I||S!==I.version||E!==s.toneMapping)&&(x.material.needsUpdate=!0,_=I,S=I.version,E=s.toneMapping),x.layers.enableAll(),z.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new Ft(new Hl(2,2),new wr({name:"BackgroundMaterial",uniforms:Ys(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.toneMapped=wt.getTransfer(I.colorSpace)!==Pt,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||S!==I.version||E!==s.toneMapping)&&(h.material.needsUpdate=!0,_=I,S=I.version,E=s.toneMapping),h.layers.enableAll(),z.unshift(h,h.geometry,h.material,0,0,null))}function y(z,U){z.getRGB(xl,Lg(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,U,d)}return{getClearColor:function(){return f},setClearColor:function(z,U=1){f.set(z),m=U,y(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,y(f,m)},render:T,addToRenderList:v}}function RE(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let c=o,d=!1;function f(C,L,K,W,te){let de=!1;const ne=_(W,K,L);c!==ne&&(c=ne,h(c.object)),de=E(C,W,K,te),de&&M(C,W,K,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,I(C,L,K,W),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function m(){return s.createVertexArray()}function h(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function _(C,L,K){const W=K.wireframe===!0;let te=r[C.id];te===void 0&&(te={},r[C.id]=te);let de=te[L.id];de===void 0&&(de={},te[L.id]=de);let ne=de[W];return ne===void 0&&(ne=S(m()),de[W]=ne),ne}function S(C){const L=[],K=[],W=[];for(let te=0;te<n;te++)L[te]=0,K[te]=0,W[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:K,attributeDivisors:W,object:C,attributes:{},index:null}}function E(C,L,K,W){const te=c.attributes,de=L.attributes;let ne=0;const oe=K.getAttributes();for(const H in oe)if(oe[H].location>=0){const P=te[H];let b=de[H];if(b===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(b=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(b=C.instanceColor)),P===void 0||P.attribute!==b||b&&P.data!==b.data)return!0;ne++}return c.attributesNum!==ne||c.index!==W}function M(C,L,K,W){const te={},de=L.attributes;let ne=0;const oe=K.getAttributes();for(const H in oe)if(oe[H].location>=0){let P=de[H];P===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const b={};b.attribute=P,P&&P.data&&(b.data=P.data),te[H]=b,ne++}c.attributes=te,c.attributesNum=ne,c.index=W}function T(){const C=c.newAttributes;for(let L=0,K=C.length;L<K;L++)C[L]=0}function v(C){y(C,0)}function y(C,L){const K=c.newAttributes,W=c.enabledAttributes,te=c.attributeDivisors;K[C]=1,W[C]===0&&(s.enableVertexAttribArray(C),W[C]=1),te[C]!==L&&(s.vertexAttribDivisor(C,L),te[C]=L)}function z(){const C=c.newAttributes,L=c.enabledAttributes;for(let K=0,W=L.length;K<W;K++)L[K]!==C[K]&&(s.disableVertexAttribArray(K),L[K]=0)}function U(C,L,K,W,te,de,ne){ne===!0?s.vertexAttribIPointer(C,L,K,te,de):s.vertexAttribPointer(C,L,K,W,te,de)}function I(C,L,K,W){T();const te=W.attributes,de=K.getAttributes(),ne=L.defaultAttributeValues;for(const oe in de){const H=de[oe];if(H.location>=0){let fe=te[oe];if(fe===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const P=fe.normalized,b=fe.itemSize,G=e.get(fe);if(G===void 0)continue;const me=G.buffer,X=G.type,J=G.bytesPerElement,he=X===s.INT||X===s.UNSIGNED_INT||fe.gpuType===tf;if(fe.isInterleavedBufferAttribute){const ie=fe.data,ge=ie.stride,_e=fe.offset;if(ie.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)y(H.location+Ne,ie.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)v(H.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Ne=0;Ne<H.locationSize;Ne++)U(H.location+Ne,b/H.locationSize,X,P,ge*J,(_e+b/H.locationSize*Ne)*J,he)}else{if(fe.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)y(H.location+ie,fe.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ie=0;ie<H.locationSize;ie++)v(H.location+ie);s.bindBuffer(s.ARRAY_BUFFER,me);for(let ie=0;ie<H.locationSize;ie++)U(H.location+ie,b/H.locationSize,X,P,b*J,b/H.locationSize*ie*J,he)}}else if(ne!==void 0){const P=ne[oe];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(H.location,P);break;case 3:s.vertexAttrib3fv(H.location,P);break;case 4:s.vertexAttrib4fv(H.location,P);break;default:s.vertexAttrib1fv(H.location,P)}}}}z()}function Q(){j();for(const C in r){const L=r[C];for(const K in L){const W=L[K];for(const te in W)x(W[te].object),delete W[te];delete L[K]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const L=r[C.id];for(const K in L){const W=L[K];for(const te in W)x(W[te].object),delete W[te];delete L[K]}delete r[C.id]}function k(C){for(const L in r){const K=r[L];if(K[C.id]===void 0)continue;const W=K[C.id];for(const te in W)x(W[te].object),delete W[te];delete K[C.id]}}function j(){N(),d=!0,c!==o&&(c=o,h(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:N,dispose:Q,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:v,disableUnusedAttributes:z}}function NE(s,e,n){let r;function o(h){r=h}function c(h,x){s.drawArrays(r,h,x),n.update(x,r,1)}function d(h,x,_){_!==0&&(s.drawArraysInstanced(r,h,x,_),n.update(x,r,_))}function f(h,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,_);let E=0;for(let M=0;M<_;M++)E+=x[M];n.update(E,r,1)}function m(h,x,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<h.length;M++)d(h[M],x[M],S[M]);else{E.multiDrawArraysInstancedWEBGL(r,h,0,x,0,S,0,_);let M=0;for(let T=0;T<_;T++)M+=x[T]*S[T];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function IE(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(k){return!(k!==hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const j=k===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==qi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ji&&!j)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const x=m(h);x!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const _=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Q=M>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:S,maxTextures:E,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:Q,maxSamples:F}}function PE(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Xr,f=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||r!==0||o;return o=S,r=_.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){n=x(_,S,0)},this.setState=function(_,S,E){const M=_.clippingPlanes,T=_.clipIntersection,v=_.clipShadows,y=s.get(_);if(!o||M===null||M.length===0||c&&!v)c?x(null):h();else{const z=c?0:r,U=z*4;let I=y.clippingState||null;m.value=I,I=x(M,S,U,E);for(let Q=0;Q!==U;++Q)I[Q]=n[Q];y.clippingState=I,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=z}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,E,M){const T=_!==null?_.length:0;let v=null;if(T!==0){if(v=m.value,M!==!0||v===null){const y=E+T*4,z=S.matrixWorldInverse;f.getNormalMatrix(z),(v===null||v.length<y)&&(v=new Float32Array(y));for(let U=0,I=E;U!==T;++U,I+=4)d.copy(_[U]).applyMatrix4(z,f),d.normal.toArray(v,I),v[I+3]=d.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function LE(s){let e=new WeakMap;function n(d,f){return f===xd?d.mapping=js:f===vd&&(d.mapping=Ws),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===xd||f===vd)if(e.has(d)){const m=e.get(d).texture;return n(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const h=new jv(m.height);return h.fromEquirectangularTexture(s,d),e.set(d,h),d.addEventListener("dispose",o),n(h.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class zg extends Dg{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,f-=x*this.view.offsetY,m=f-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,Sm=[.125,.215,.35,.446,.526,.582],$r=20,Ku=new zg,Em=new gt;let Qu=null,Ju=0,ed=0,td=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,Mm=[new ae(-qr,ks,0),new ae(qr,ks,0),new ae(-ks,0,qr),new ae(ks,0,qr),new ae(0,qr,-ks),new ae(0,qr,ks),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,Ju,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Va,format:hi,colorSpace:$s,depthBuffer:!1},o=wm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DE(c)),this._blurMaterial=UE(c,e,n)}return o}_compileMaterial(e){const n=new Ft(this._lodPlanes[0],e);this._renderer.compile(n,Ku)}_sceneToCubeUV(e,n,r,o){const f=new Jn(90,1,n,r),m=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(Em),x.toneMapping=Mr,x.autoClear=!1;const E=new uf({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),M=new Ft(new vn,E);let T=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,T=!0):(E.color.copy(Em),T=!0);for(let y=0;y<6;y++){const z=y%3;z===0?(f.up.set(0,m[y],0),f.lookAt(h[y],0,0)):z===1?(f.up.set(0,0,m[y]),f.lookAt(0,h[y],0)):(f.up.set(0,m[y],0),f.lookAt(0,0,h[y]));const U=this._cubeSize;vl(o,z*U,y>2?U:0,U,U),x.setRenderTarget(o),T&&x.render(M,f),x.render(e,f)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=S,x.autoClear=_,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===js||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new Ft(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const m=this._cubeSize;vl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(d,Ku)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Mm[(o-c-1)%Mm.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new Ft(this._lodPlanes[o],h),S=h.uniforms,E=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*$r-1),T=c/M,v=isFinite(c)?1+Math.floor(x*T):$r;v>$r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${$r}`);const y=[];let z=0;for(let k=0;k<$r;++k){const j=k/T,N=Math.exp(-j*j/2);y.push(N),k===0?z+=N:k<v&&(z+=2*N)}for(let k=0;k<y.length;k++)y[k]=y[k]/z;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=y,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:U}=this;S.dTheta.value=M,S.mipInt.value=U-r;const I=this._sizeLods[o],Q=3*I*(o>U-Fs?o-U+Fs:0),F=4*(this._cubeSize-I);vl(n,Q,F,3*I,2*I),m.setRenderTarget(n),m.render(_,Ku)}}function DE(s){const e=[],n=[],r=[];let o=s;const c=s-Fs+1+Sm.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);n.push(f);let m=1/f;d>s-Fs?m=Sm[d-s+Fs-1]:d===0&&(m=0),r.push(m);const h=1/(f-2),x=-h,_=1+h,S=[x,x,_,x,_,_,x,x,_,_,x,_],E=6,M=6,T=3,v=2,y=1,z=new Float32Array(T*M*E),U=new Float32Array(v*M*E),I=new Float32Array(y*M*E);for(let F=0;F<E;F++){const k=F%3*2/3-1,j=F>2?0:-1,N=[k,j,0,k+2/3,j,0,k+2/3,j+1,0,k,j,0,k+2/3,j+1,0,k,j+1,0];z.set(N,T*M*F),U.set(S,v*M*F);const C=[F,F,F,F,F,F];I.set(C,y*M*F)}const Q=new ei;Q.setAttribute("position",new wi(z,T)),Q.setAttribute("uv",new wi(U,v)),Q.setAttribute("faceIndex",new wi(I,y)),e.push(Q),o>Fs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function wm(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function UE(s,e,n){const r=new Float32Array($r),o=new ae(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Tm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Am(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function ff(){return`

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
	`}function OE(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,h=m===xd||m===vd,x=m===js||m===Ws;if(h||x){let _=e.get(f);const S=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return n===null&&(n=new bm(s)),_=h?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const E=f.image;return h&&E&&E.height>0||x&&E&&o(E)?(n===null&&(n=new bm(s)),_=h?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let m=0;const h=6;for(let x=0;x<h;x++)f[x]!==void 0&&m++;return m===h}function c(f){const m=f.target;m.removeEventListener("dispose",c);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function zE(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&za("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function kE(s,e,n,r){const o={},c=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const M in S.attributes)e.remove(S.attributes[M]);for(const M in S.morphAttributes){const T=S.morphAttributes[M];for(let v=0,y=T.length;v<y;v++)e.remove(T[v])}S.removeEventListener("dispose",d),delete o[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function f(_,S){return o[S.id]===!0||(S.addEventListener("dispose",d),o[S.id]=!0,n.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER);const E=_.morphAttributes;for(const M in E){const T=E[M];for(let v=0,y=T.length;v<y;v++)e.update(T[v],s.ARRAY_BUFFER)}}function h(_){const S=[],E=_.index,M=_.attributes.position;let T=0;if(E!==null){const z=E.array;T=E.version;for(let U=0,I=z.length;U<I;U+=3){const Q=z[U+0],F=z[U+1],k=z[U+2];S.push(Q,F,F,k,k,Q)}}else if(M!==void 0){const z=M.array;T=M.version;for(let U=0,I=z.length/3-1;U<I;U+=3){const Q=U+0,F=U+1,k=U+2;S.push(Q,F,F,k,k,Q)}}else return;const v=new(Ag(S)?Pg:Ig)(S,1);v.version=T;const y=c.get(_);y&&e.remove(y),c.set(_,v)}function x(_){const S=c.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&h(_)}else h(_);return c.get(_)}return{get:f,update:m,getWireframeAttribute:x}}function FE(s,e,n){let r;function o(S){r=S}let c,d;function f(S){c=S.type,d=S.bytesPerElement}function m(S,E){s.drawElements(r,E,c,S*d),n.update(E,r,1)}function h(S,E,M){M!==0&&(s.drawElementsInstanced(r,E,c,S*d,M),n.update(E,r,M))}function x(S,E,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,S,0,M);let v=0;for(let y=0;y<M;y++)v+=E[y];n.update(v,r,1)}function _(S,E,M,T){if(M===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<S.length;y++)h(S[y]/d,E[y],T[y]);else{v.multiDrawElementsInstancedWEBGL(r,E,0,c,S,0,T,0,M);let y=0;for(let z=0;z<M;z++)y+=E[z]*T[z];n.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function BE(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function HE(s,e,n){const r=new WeakMap,o=new Wt;function c(d,f,m){const h=d.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(f);if(S===void 0||S.count!==_){let C=function(){j.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],z=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let I=0;M===!0&&(I=1),T===!0&&(I=2),v===!0&&(I=3);let Q=f.attributes.position.count*I,F=1;Q>e.maxTextureSize&&(F=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const k=new Float32Array(Q*F*4*_),j=new Rg(k,Q,F,_);j.type=ji,j.needsUpdate=!0;const N=I*4;for(let L=0;L<_;L++){const K=y[L],W=z[L],te=U[L],de=Q*F*4*L;for(let ne=0;ne<K.count;ne++){const oe=ne*N;M===!0&&(o.fromBufferAttribute(K,ne),k[de+oe+0]=o.x,k[de+oe+1]=o.y,k[de+oe+2]=o.z,k[de+oe+3]=0),T===!0&&(o.fromBufferAttribute(W,ne),k[de+oe+4]=o.x,k[de+oe+5]=o.y,k[de+oe+6]=o.z,k[de+oe+7]=0),v===!0&&(o.fromBufferAttribute(te,ne),k[de+oe+8]=o.x,k[de+oe+9]=o.y,k[de+oe+10]=o.z,k[de+oe+11]=te.itemSize===4?o.w:1)}}S={count:_,texture:j,size:new Et(Q,F)},r.set(f,S),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let M=0;for(let v=0;v<h.length;v++)M+=h[v];const T=f.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function VE(s,e,n,r){let o=new WeakMap;function c(m){const h=r.render.frame,x=m.geometry,_=e.get(m,x);if(o.get(_)!==h&&(e.update(_),o.set(_,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==h&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,h))),m.isSkinnedMesh){const S=m.skeleton;o.get(S)!==h&&(S.update(),o.set(S,h))}return _}function d(){o=new WeakMap}function f(m){const h=m.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:c,dispose:d}}class kg extends On{constructor(e,n,r,o,c,d,f,m,h,x=Hs){if(x!==Hs&&x!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Hs&&(r=Qr),r===void 0&&x===qs&&(r=Xs),super(null,o,c,d,f,m,x,r,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:pi,this.minFilter=m!==void 0?m:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Fg=new On,Cm=new kg(1,1),Bg=new Rg,Hg=new Cv,Vg=new Ug,Rm=[],Nm=[],Im=new Float32Array(16),Pm=new Float32Array(9),Lm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Rm[o];if(c===void 0&&(c=new Float32Array(o),Rm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Vl(s,e){let n=Nm[e];n===void 0&&(n=new Int32Array(e),Nm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function GE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function jE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function WE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function XE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function qE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Lm.set(r),s.uniformMatrix2fv(this.addr,!1,Lm),tn(n,r)}}function YE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Pm.set(r),s.uniformMatrix3fv(this.addr,!1,Pm),tn(n,r)}}function $E(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Im.set(r),s.uniformMatrix4fv(this.addr,!1,Im),tn(n,r)}}function ZE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function KE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function QE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function JE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function eM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function rM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Cm.compareFunction=Tg,c=Cm):c=Fg,n.setTexture2D(e||c,o)}function sM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Hg,o)}function aM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Vg,o)}function oM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Bg,o)}function lM(s){switch(s){case 5126:return GE;case 35664:return jE;case 35665:return WE;case 35666:return XE;case 35674:return qE;case 35675:return YE;case 35676:return $E;case 5124:case 35670:return ZE;case 35667:case 35671:return KE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}function cM(s,e){s.uniform1fv(this.addr,e)}function uM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function dM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function fM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function hM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function pM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function mM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function gM(s,e){s.uniform1iv(this.addr,e)}function yM(s,e){s.uniform2iv(this.addr,e)}function xM(s,e){s.uniform3iv(this.addr,e)}function vM(s,e){s.uniform4iv(this.addr,e)}function _M(s,e){s.uniform1uiv(this.addr,e)}function SM(s,e){s.uniform2uiv(this.addr,e)}function EM(s,e){s.uniform3uiv(this.addr,e)}function MM(s,e){s.uniform4uiv(this.addr,e)}function bM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||Fg,c[d])}function wM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||Hg,c[d])}function TM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||Vg,c[d])}function AM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Bg,c[d])}function CM(s){switch(s){case 5126:return cM;case 35664:return uM;case 35665:return dM;case 35666:return fM;case 35674:return hM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return yM;case 35668:case 35672:return xM;case 35669:case 35673:return vM;case 5125:return _M;case 36294:return SM;case 36295:return EM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}class RM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=lM(n.type)}}class NM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CM(n.type)}}class IM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Dm(s,e){s.seq.push(e),s.map[e.id]=e}function PM(s,e,n){const r=s.name,o=r.length;for(nd.lastIndex=0;;){const c=nd.exec(r),d=nd.lastIndex;let f=c[1];const m=c[2]==="]",h=c[3];if(m&&(f=f|0),h===void 0||h==="["&&d+2===o){Dm(n,h===void 0?new RM(f,s,e):new NM(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new IM(f),Dm(n,_)),n=_}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);PM(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function Um(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const LM=37297;let DM=0;function UM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const Om=new mt;function OM(s){wt._getMatrix(Om,wt.workingColorSpace,s);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+UM(s.getShaderSource(e),d)}else return o}function zM(s,e){const n=OM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kM(s,e){let n;switch(e){case tv:n="Linear";break;case nv:n="Reinhard";break;case iv:n="Cineon";break;case rv:n="ACESFilmic";break;case av:n="AgX";break;case ov:n="Neutral";break;case sv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new ae;function FM(){wt.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function HM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function VM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function ka(s){return s!==""}function km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(s){return s.replace(GM,WM)}const jM=new Map;function WM(s,e){let n=yt[e];if(n===void 0){const r=jM.get(e);if(r!==void 0)n=yt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $d(n)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(s){return s.replace(XM,qM)}function qM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Hm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function YM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ws:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function KM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hg:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case ev:e="ENVMAP_BLENDING_ADD";break}return e}function QM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function JM(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const m=YM(n),h=$M(n),x=ZM(n),_=KM(n),S=QM(n),E=BM(n),M=HM(c),T=o.createProgram();let v,y,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ka).join(`
`),v.length>0&&(v+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ka).join(`
`),y.length>0&&(y+=`
`)):(v=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),y=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?yt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?kM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,zM("linearToOutputTexel",n.outputColorSpace),FM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),d=$d(d),d=km(d,n),d=Fm(d,n),f=$d(f),f=km(f,n),f=Fm(f,n),d=Bm(d),f=Bm(f),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,v=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=z+v+d,I=z+y+f,Q=Um(o,o.VERTEX_SHADER,U),F=Um(o,o.FRAGMENT_SHADER,I);o.attachShader(T,Q),o.attachShader(T,F),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(L){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(T).trim(),W=o.getShaderInfoLog(Q).trim(),te=o.getShaderInfoLog(F).trim();let de=!0,ne=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,Q,F);else{const oe=zm(o,Q,"vertex"),H=zm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+oe+`
`+H)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||te==="")&&(ne=!1);ne&&(L.diagnostics={runnable:de,programLog:K,vertexShader:{log:W,prefix:v},fragmentShader:{log:te,prefix:y}})}o.deleteShader(Q),o.deleteShader(F),j=new Cl(o,T),N=VM(o,T)}let j;this.getUniforms=function(){return j===void 0&&k(this),j};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,LM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Q,this.fragmentShader=F,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new n1(e),n.set(e,r)),r}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(s,e,n,r,o,c,d){const f=new cf,m=new t1,h=new Set,x=[],_=o.logarithmicDepthBuffer,S=o.vertexTextures;let E=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return h.add(N),N===0?"uv":`uv${N}`}function v(N,C,L,K,W){const te=K.fog,de=W.geometry,ne=N.isMeshStandardMaterial?K.environment:null,oe=(N.isMeshStandardMaterial?n:e).get(N.envMap||ne),H=oe&&oe.mapping===kl?oe.image.height:null,fe=M[N.type];N.precision!==null&&(E=o.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const P=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,b=P!==void 0?P.length:0;let G=0;de.morphAttributes.position!==void 0&&(G=1),de.morphAttributes.normal!==void 0&&(G=2),de.morphAttributes.color!==void 0&&(G=3);let me,X,J,he;if(fe){const Mt=Ei[fe];me=Mt.vertexShader,X=Mt.fragmentShader}else me=N.vertexShader,X=N.fragmentShader,m.update(N),J=m.getVertexShaderID(N),he=m.getFragmentShaderID(N);const ie=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),_e=W.isInstancedMesh===!0,Ne=W.isBatchedMesh===!0,Ke=!!N.map,Ve=!!N.matcap,Oe=!!oe,B=!!N.aoMap,ut=!!N.lightMap,Je=!!N.bumpMap,et=!!N.normalMap,Fe=!!N.displacementMap,dt=!!N.emissiveMap,Re=!!N.metalnessMap,D=!!N.roughnessMap,A=N.anisotropy>0,se=N.clearcoat>0,ve=N.dispersion>0,Se=N.iridescence>0,ye=N.sheen>0,We=N.transmission>0,Ie=A&&!!N.anisotropyMap,ze=se&&!!N.clearcoatMap,ht=se&&!!N.clearcoatNormalMap,be=se&&!!N.clearcoatRoughnessMap,Be=Se&&!!N.iridescenceMap,tt=Se&&!!N.iridescenceThicknessMap,rt=ye&&!!N.sheenColorMap,Ge=ye&&!!N.sheenRoughnessMap,xt=!!N.specularMap,lt=!!N.specularColorMap,Rt=!!N.specularIntensityMap,Y=We&&!!N.transmissionMap,Pe=We&&!!N.thicknessMap,pe=!!N.gradientMap,xe=!!N.alphaMap,Ue=N.alphaTest>0,De=!!N.alphaHash,ct=!!N.extensions;let Ut=Mr;N.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Zt={shaderID:fe,shaderType:N.type,shaderName:N.name,vertexShader:me,fragmentShader:X,defines:N.defines,customVertexShaderID:J,customFragmentShaderID:he,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:Ne,batchingColor:Ne&&W._colorsTexture!==null,instancing:_e,instancingColor:_e&&W.instanceColor!==null,instancingMorph:_e&&W.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$s,alphaToCoverage:!!N.alphaToCoverage,map:Ke,matcap:Ve,envMap:Oe,envMapMode:Oe&&oe.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:ut,bumpMap:Je,normalMap:et,displacementMap:S&&Fe,emissiveMap:dt,normalMapObjectSpace:et&&N.normalMapType===dv,normalMapTangentSpace:et&&N.normalMapType===wg,metalnessMap:Re,roughnessMap:D,anisotropy:A,anisotropyMap:Ie,clearcoat:se,clearcoatMap:ze,clearcoatNormalMap:ht,clearcoatRoughnessMap:be,dispersion:ve,iridescence:Se,iridescenceMap:Be,iridescenceThicknessMap:tt,sheen:ye,sheenColorMap:rt,sheenRoughnessMap:Ge,specularMap:xt,specularColorMap:lt,specularIntensityMap:Rt,transmission:We,transmissionMap:Y,thicknessMap:Pe,gradientMap:pe,opaque:N.transparent===!1&&N.blending===Bs&&N.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ue,alphaHash:De,combine:N.combine,mapUv:Ke&&T(N.map.channel),aoMapUv:B&&T(N.aoMap.channel),lightMapUv:ut&&T(N.lightMap.channel),bumpMapUv:Je&&T(N.bumpMap.channel),normalMapUv:et&&T(N.normalMap.channel),displacementMapUv:Fe&&T(N.displacementMap.channel),emissiveMapUv:dt&&T(N.emissiveMap.channel),metalnessMapUv:Re&&T(N.metalnessMap.channel),roughnessMapUv:D&&T(N.roughnessMap.channel),anisotropyMapUv:Ie&&T(N.anisotropyMap.channel),clearcoatMapUv:ze&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:ht&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(N.sheenRoughnessMap.channel),specularMapUv:xt&&T(N.specularMap.channel),specularColorMapUv:lt&&T(N.specularColorMap.channel),specularIntensityMapUv:Rt&&T(N.specularIntensityMap.channel),transmissionMapUv:Y&&T(N.transmissionMap.channel),thicknessMapUv:Pe&&T(N.thicknessMap.channel),alphaMapUv:xe&&T(N.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(et||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!de.attributes.uv&&(Ke||xe),fog:!!te,useFog:N.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ge,skinning:W.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:G,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ke&&N.map.isVideoTexture===!0&&wt.getTransfer(N.map.colorSpace)===Pt,decodeVideoTextureEmissive:dt&&N.emissiveMap.isVideoTexture===!0&&wt.getTransfer(N.emissiveMap.colorSpace)===Pt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Mi,flipSided:N.side===Un,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ct&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&N.extensions.multiDraw===!0||Ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Zt.vertexUv1s=h.has(1),Zt.vertexUv2s=h.has(2),Zt.vertexUv3s=h.has(3),h.clear(),Zt}function y(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const L in N.defines)C.push(L),C.push(N.defines[L]);return N.isRawShaderMaterial===!1&&(z(C,N),U(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function z(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function U(N,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),N.push(f.mask)}function I(N){const C=M[N.type];let L;if(C){const K=Ei[C];L=Bv.clone(K.uniforms)}else L=N.uniforms;return L}function Q(N,C){let L;for(let K=0,W=x.length;K<W;K++){const te=x[K];if(te.cacheKey===C){L=te,++L.usedTimes;break}}return L===void 0&&(L=new JM(s,C,N,c),x.push(L)),L}function F(N){if(--N.usedTimes===0){const C=x.indexOf(N);x[C]=x[x.length-1],x.pop(),N.destroy()}}function k(N){m.remove(N)}function j(){m.dispose()}return{getParameters:v,getProgramCacheKey:y,getUniforms:I,acquireProgram:Q,releaseProgram:F,releaseShaderCache:k,programs:x,dispose:j}}function r1(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,m){s.get(d)[f]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function s1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(_,S,E,M,T,v){let y=s[e];return y===void 0?(y={id:_.id,object:_,geometry:S,material:E,groupOrder:M,renderOrder:_.renderOrder,z:T,group:v},s[e]=y):(y.id=_.id,y.object=_,y.geometry=S,y.material=E,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=T,y.group=v),e++,y}function f(_,S,E,M,T,v){const y=d(_,S,E,M,T,v);E.transmission>0?r.push(y):E.transparent===!0?o.push(y):n.push(y)}function m(_,S,E,M,T,v){const y=d(_,S,E,M,T,v);E.transmission>0?r.unshift(y):E.transparent===!0?o.unshift(y):n.unshift(y)}function h(_,S){n.length>1&&n.sort(_||s1),r.length>1&&r.sort(S||Vm),o.length>1&&o.sort(S||Vm)}function x(){for(let _=e,S=s.length;_<S;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:m,finish:x,sort:h}}function a1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Gm,s.set(r,[d])):o>=c.length?(d=new Gm,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function o1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ae,color:new gt};break;case"SpotLight":n={position:new ae,direction:new ae,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ae,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ae,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=n,n}}}function l1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let c1=0;function u1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function d1(s){const e=new o1,n=l1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const o=new ae,c=new Bt,d=new Bt;function f(h){let x=0,_=0,S=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,M=0,T=0,v=0,y=0,z=0,U=0,I=0,Q=0,F=0,k=0;h.sort(u1);for(let N=0,C=h.length;N<C;N++){const L=h[N],K=L.color,W=L.intensity,te=L.distance,de=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)x+=K.r*W,_+=K.g*W,S+=K.b*W;else if(L.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(L.sh.coefficients[ne],W);k++}else if(L.isDirectionalLight){const ne=e.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,H=n.get(L);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,r.directionalShadow[E]=H,r.directionalShadowMap[E]=de,r.directionalShadowMatrix[E]=L.shadow.matrix,z++}r.directional[E]=ne,E++}else if(L.isSpotLight){const ne=e.get(L);ne.position.setFromMatrixPosition(L.matrixWorld),ne.color.copy(K).multiplyScalar(W),ne.distance=te,ne.coneCos=Math.cos(L.angle),ne.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ne.decay=L.decay,r.spot[T]=ne;const oe=L.shadow;if(L.map&&(r.spotLightMap[Q]=L.map,Q++,oe.updateMatrices(L),L.castShadow&&F++),r.spotLightMatrix[T]=oe.matrix,L.castShadow){const H=n.get(L);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,r.spotShadow[T]=H,r.spotShadowMap[T]=de,I++}T++}else if(L.isRectAreaLight){const ne=e.get(L);ne.color.copy(K).multiplyScalar(W),ne.halfWidth.set(L.width*.5,0,0),ne.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=ne,v++}else if(L.isPointLight){const ne=e.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity),ne.distance=L.distance,ne.decay=L.decay,L.castShadow){const oe=L.shadow,H=n.get(L);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,H.shadowCameraNear=oe.camera.near,H.shadowCameraFar=oe.camera.far,r.pointShadow[M]=H,r.pointShadowMap[M]=de,r.pointShadowMatrix[M]=L.shadow.matrix,U++}r.point[M]=ne,M++}else if(L.isHemisphereLight){const ne=e.get(L);ne.skyColor.copy(L.color).multiplyScalar(W),ne.groundColor.copy(L.groundColor).multiplyScalar(W),r.hemi[y]=ne,y++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==E||j.pointLength!==M||j.spotLength!==T||j.rectAreaLength!==v||j.hemiLength!==y||j.numDirectionalShadows!==z||j.numPointShadows!==U||j.numSpotShadows!==I||j.numSpotMaps!==Q||j.numLightProbes!==k)&&(r.directional.length=E,r.spot.length=T,r.rectArea.length=v,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=I+Q-F,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,j.directionalLength=E,j.pointLength=M,j.spotLength=T,j.rectAreaLength=v,j.hemiLength=y,j.numDirectionalShadows=z,j.numPointShadows=U,j.numSpotShadows=I,j.numSpotMaps=Q,j.numLightProbes=k,r.version=c1++)}function m(h,x){let _=0,S=0,E=0,M=0,T=0;const v=x.matrixWorldInverse;for(let y=0,z=h.length;y<z;y++){const U=h[y];if(U.isDirectionalLight){const I=r.directional[_];I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),_++}else if(U.isSpotLight){const I=r.spot[E];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(v),E++}else if(U.isRectAreaLight){const I=r.rectArea[M];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(v),d.identity(),c.copy(U.matrixWorld),c.premultiply(v),d.extractRotation(c),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),M++}else if(U.isPointLight){const I=r.point[S];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(v),S++}else if(U.isHemisphereLight){const I=r.hemi[T];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(v),T++}}}return{setup:f,setupView:m,state:r}}function jm(s){const e=new d1(s),n=[],r=[];function o(x){h.camera=x,n.length=0,r.length=0}function c(x){n.push(x)}function d(x){r.push(x)}function f(){e.setup(n)}function m(x){e.setupView(n,x)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:d}}function f1(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new jm(s),e.set(o,[f])):c>=d.length?(f=new jm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class h1 extends Ks{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p1 extends Ks{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`;function y1(s,e,n){let r=new df;const o=new Et,c=new Et,d=new Wt,f=new h1({depthPacking:uv}),m=new p1,h={},x=n.maxTextureSize,_={[br]:Un,[Un]:br,[Mi]:Mi},S=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const M=new ei;M.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ft(M,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dg;let y=this.type;this.render=function(F,k,j){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||F.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Er),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const W=y!==Gi&&this.type===Gi,te=y===Gi&&this.type!==Gi;for(let de=0,ne=F.length;de<ne;de++){const oe=F[de],H=oe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const fe=H.getFrameExtents();if(o.multiply(fe),c.copy(H.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/fe.x),o.x=c.x*fe.x,H.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/fe.y),o.y=c.y*fe.y,H.mapSize.y=c.y)),H.map===null||W===!0||te===!0){const b=this.type!==Gi?{minFilter:pi,magFilter:pi}:{};H.map!==null&&H.map.dispose(),H.map=new Jr(o.x,o.y,b),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const P=H.getViewportCount();for(let b=0;b<P;b++){const G=H.getViewport(b);d.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),K.viewport(d),H.updateMatrices(oe,b),r=H.getFrustum(),I(k,j,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===Gi&&z(H,j),H.needsUpdate=!1}y=this.type,v.needsUpdate=!1,s.setRenderTarget(N,C,L)};function z(F,k){const j=e.update(T);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Jr(o.x,o.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,j,S,T,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,j,E,T,null)}function U(F,k,j,N){let C=null;const L=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(L!==void 0)C=L;else if(C=j.isPointLight===!0?m:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const K=C.uuid,W=k.uuid;let te=h[K];te===void 0&&(te={},h[K]=te);let de=te[W];de===void 0&&(de=C.clone(),te[W]=de,k.addEventListener("dispose",Q)),C=de}if(C.visible=k.visible,C.wireframe=k.wireframe,N===Gi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:_[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=s.properties.get(C);K.light=j}return C}function I(F,k,j,N,C){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Gi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const W=e.update(F),te=F.material;if(Array.isArray(te)){const de=W.groups;for(let ne=0,oe=de.length;ne<oe;ne++){const H=de[ne],fe=te[H.materialIndex];if(fe&&fe.visible){const P=U(F,fe,N,C);F.onBeforeShadow(s,F,k,j,W,P,H),s.renderBufferDirect(j,null,W,P,F,H),F.onAfterShadow(s,F,k,j,W,P,H)}}}else if(te.visible){const de=U(F,te,N,C);F.onBeforeShadow(s,F,k,j,W,de,null),s.renderBufferDirect(j,null,W,de,F,null),F.onAfterShadow(s,F,k,j,W,de,null)}}const K=F.children;for(let W=0,te=K.length;W<te;W++)I(K[W],k,j,N,C)}function Q(F){F.target.removeEventListener("dispose",Q);for(const j in h){const N=h[j],C=F.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const x1={[dd]:fd,[hd]:gd,[pd]:yd,[Gs]:md,[fd]:dd,[gd]:hd,[yd]:pd,[md]:Gs};function v1(s,e){function n(){let Y=!1;const Pe=new Wt;let pe=null;const xe=new Wt(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!Y&&(s.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){Y=Ue},setClear:function(Ue,De,ct,Ut,Zt){Zt===!0&&(Ue*=Ut,De*=Ut,ct*=Ut),Pe.set(Ue,De,ct,Ut),xe.equals(Pe)===!1&&(s.clearColor(Ue,De,ct,Ut),xe.copy(Pe))},reset:function(){Y=!1,pe=null,xe.set(-1,0,0,0)}}}function r(){let Y=!1,Pe=!1,pe=null,xe=null,Ue=null;return{setReversed:function(De){if(Pe!==De){const ct=e.get("EXT_clip_control");Pe?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ue;Ue=null,this.setClear(Ut)}Pe=De},getReversed:function(){return Pe},setTest:function(De){De?ie(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(De){pe!==De&&!Y&&(s.depthMask(De),pe=De)},setFunc:function(De){if(Pe&&(De=x1[De]),xe!==De){switch(De){case dd:s.depthFunc(s.NEVER);break;case fd:s.depthFunc(s.ALWAYS);break;case hd:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case pd:s.depthFunc(s.EQUAL);break;case md:s.depthFunc(s.GEQUAL);break;case gd:s.depthFunc(s.GREATER);break;case yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=De}},setLocked:function(De){Y=De},setClear:function(De){Ue!==De&&(Pe&&(De=1-De),s.clearDepth(De),Ue=De)},reset:function(){Y=!1,pe=null,xe=null,Ue=null,Pe=!1}}}function o(){let Y=!1,Pe=null,pe=null,xe=null,Ue=null,De=null,ct=null,Ut=null,Zt=null;return{setTest:function(Mt){Y||(Mt?ie(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Mt){Pe!==Mt&&!Y&&(s.stencilMask(Mt),Pe=Mt)},setFunc:function(Mt,Tn,_n){(pe!==Mt||xe!==Tn||Ue!==_n)&&(s.stencilFunc(Mt,Tn,_n),pe=Mt,xe=Tn,Ue=_n)},setOp:function(Mt,Tn,_n){(De!==Mt||ct!==Tn||Ut!==_n)&&(s.stencilOp(Mt,Tn,_n),De=Mt,ct=Tn,Ut=_n)},setLocked:function(Mt){Y=Mt},setClear:function(Mt){Zt!==Mt&&(s.clearStencil(Mt),Zt=Mt)},reset:function(){Y=!1,Pe=null,pe=null,xe=null,Ue=null,De=null,ct=null,Ut=null,Zt=null}}}const c=new n,d=new r,f=new o,m=new WeakMap,h=new WeakMap;let x={},_={},S=new WeakMap,E=[],M=null,T=!1,v=null,y=null,z=null,U=null,I=null,Q=null,F=null,k=new gt(0,0,0),j=0,N=!1,C=null,L=null,K=null,W=null,te=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,oe=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(H)[1]),ne=oe>=1):H.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ne=oe>=2);let fe=null,P={};const b=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),me=new Wt().fromArray(b),X=new Wt().fromArray(G);function J(Y,Pe,pe,xe){const Ue=new Uint8Array(4),De=s.createTexture();s.bindTexture(Y,De),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<pe;ct++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Pe+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return De}const he={};he[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),he[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),he[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ie(s.DEPTH_TEST),d.setFunc(Gs),Je(!1),et(Yp),ie(s.CULL_FACE),B(Er);function ie(Y){x[Y]!==!0&&(s.enable(Y),x[Y]=!0)}function ge(Y){x[Y]!==!1&&(s.disable(Y),x[Y]=!1)}function _e(Y,Pe){return _[Y]!==Pe?(s.bindFramebuffer(Y,Pe),_[Y]=Pe,Y===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Pe),Y===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ne(Y,Pe){let pe=E,xe=!1;if(Y){pe=S.get(Pe),pe===void 0&&(pe=[],S.set(Pe,pe));const Ue=Y.textures;if(pe.length!==Ue.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ct=Ue.length;De<ct;De++)pe[De]=s.COLOR_ATTACHMENT0+De;pe.length=Ue.length,xe=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,xe=!0);xe&&s.drawBuffers(pe)}function Ke(Y){return M!==Y?(s.useProgram(Y),M=Y,!0):!1}const Ve={[Yr]:s.FUNC_ADD,[O0]:s.FUNC_SUBTRACT,[z0]:s.FUNC_REVERSE_SUBTRACT};Ve[k0]=s.MIN,Ve[F0]=s.MAX;const Oe={[B0]:s.ZERO,[H0]:s.ONE,[V0]:s.SRC_COLOR,[cd]:s.SRC_ALPHA,[Y0]:s.SRC_ALPHA_SATURATE,[X0]:s.DST_COLOR,[j0]:s.DST_ALPHA,[G0]:s.ONE_MINUS_SRC_COLOR,[ud]:s.ONE_MINUS_SRC_ALPHA,[q0]:s.ONE_MINUS_DST_COLOR,[W0]:s.ONE_MINUS_DST_ALPHA,[$0]:s.CONSTANT_COLOR,[Z0]:s.ONE_MINUS_CONSTANT_COLOR,[K0]:s.CONSTANT_ALPHA,[Q0]:s.ONE_MINUS_CONSTANT_ALPHA};function B(Y,Pe,pe,xe,Ue,De,ct,Ut,Zt,Mt){if(Y===Er){T===!0&&(ge(s.BLEND),T=!1);return}if(T===!1&&(ie(s.BLEND),T=!0),Y!==U0){if(Y!==v||Mt!==N){if((y!==Yr||I!==Yr)&&(s.blendEquation(s.FUNC_ADD),y=Yr,I=Yr),Mt)switch(Y){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $p:s.blendFunc(s.ONE,s.ONE);break;case Zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $p:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}z=null,U=null,Q=null,F=null,k.set(0,0,0),j=0,v=Y,N=Mt}return}Ue=Ue||Pe,De=De||pe,ct=ct||xe,(Pe!==y||Ue!==I)&&(s.blendEquationSeparate(Ve[Pe],Ve[Ue]),y=Pe,I=Ue),(pe!==z||xe!==U||De!==Q||ct!==F)&&(s.blendFuncSeparate(Oe[pe],Oe[xe],Oe[De],Oe[ct]),z=pe,U=xe,Q=De,F=ct),(Ut.equals(k)===!1||Zt!==j)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Zt),k.copy(Ut),j=Zt),v=Y,N=!1}function ut(Y,Pe){Y.side===Mi?ge(s.CULL_FACE):ie(s.CULL_FACE);let pe=Y.side===Un;Pe&&(pe=!pe),Je(pe),Y.blending===Bs&&Y.transparent===!1?B(Er):B(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const xe=Y.stencilWrite;f.setTest(xe),xe&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),dt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(Y){C!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),C=Y)}function et(Y){Y!==L0?(ie(s.CULL_FACE),Y!==L&&(Y===Yp?s.cullFace(s.BACK):Y===D0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),L=Y}function Fe(Y){Y!==K&&(ne&&s.lineWidth(Y),K=Y)}function dt(Y,Pe,pe){Y?(ie(s.POLYGON_OFFSET_FILL),(W!==Pe||te!==pe)&&(s.polygonOffset(Pe,pe),W=Pe,te=pe)):ge(s.POLYGON_OFFSET_FILL)}function Re(Y){Y?ie(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function D(Y){Y===void 0&&(Y=s.TEXTURE0+de-1),fe!==Y&&(s.activeTexture(Y),fe=Y)}function A(Y,Pe,pe){pe===void 0&&(fe===null?pe=s.TEXTURE0+de-1:pe=fe);let xe=P[pe];xe===void 0&&(xe={type:void 0,texture:void 0},P[pe]=xe),(xe.type!==Y||xe.texture!==Pe)&&(fe!==pe&&(s.activeTexture(pe),fe=pe),s.bindTexture(Y,Pe||he[Y]),xe.type=Y,xe.texture=Pe)}function se(){const Y=P[fe];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function rt(Y){me.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),me.copy(Y))}function Ge(Y){X.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),X.copy(Y))}function xt(Y,Pe){let pe=h.get(Pe);pe===void 0&&(pe=new WeakMap,h.set(Pe,pe));let xe=pe.get(Y);xe===void 0&&(xe=s.getUniformBlockIndex(Pe,Y.name),pe.set(Y,xe))}function lt(Y,Pe){const xe=h.get(Pe).get(Y);m.get(Pe)!==xe&&(s.uniformBlockBinding(Pe,xe,Y.__bindingPointIndex),m.set(Pe,xe))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},fe=null,P={},_={},S=new WeakMap,E=[],M=null,T=!1,v=null,y=null,z=null,U=null,I=null,Q=null,F=null,k=new gt(0,0,0),j=0,N=!1,C=null,L=null,K=null,W=null,te=null,me.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:ie,disable:ge,bindFramebuffer:_e,drawBuffers:Ne,useProgram:Ke,setBlending:B,setMaterial:ut,setFlipSided:Je,setCullFace:et,setLineWidth:Fe,setPolygonOffset:dt,setScissorTest:Re,activeTexture:D,bindTexture:A,unbindTexture:se,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:Be,texImage3D:tt,updateUBOMapping:xt,uniformBlockBinding:lt,texStorage2D:ht,texStorage3D:be,texSubImage2D:ye,texSubImage3D:We,compressedTexSubImage2D:Ie,compressedTexSubImage3D:ze,scissor:rt,viewport:Ge,reset:Rt}}function Wm(s,e,n,r){const o=_1(r);switch(n){case xg:return s*e;case _g:return s*e;case Sg:return s*e*2;case Eg:return s*e/o.components*o.byteLength;case sf:return s*e/o.components*o.byteLength;case Mg:return s*e*2/o.components*o.byteLength;case af:return s*e*2/o.components*o.byteLength;case vg:return s*e*3/o.components*o.byteLength;case hi:return s*e*4/o.components*o.byteLength;case of:return s*e*4/o.components*o.byteLength;case Ml:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:case wd:return Math.max(s,16)*Math.max(e,8)/4;case Ed:case bd:return Math.max(s,8)*Math.max(e,8)/2;case Td:case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case Gd:case jd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bg:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xd:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _1(s){switch(s){case qi:case mg:return{byteLength:1,components:1};case Ba:case gg:case Va:return{byteLength:2,components:1};case nf:case rf:return{byteLength:2,components:4};case Qr:case tf:case ji:return{byteLength:4,components:1};case yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function S1(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,x=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,A){return E?new OffscreenCanvas(D,A):Ll("canvas")}function T(D,A,se){let ve=1;const Se=Re(D);if((Se.width>se||Se.height>se)&&(ve=se/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ye=Math.floor(ve*Se.width),We=Math.floor(ve*Se.height);_===void 0&&(_=M(ye,We));const Ie=A?M(ye,We):_;return Ie.width=ye,Ie.height=We,Ie.getContext("2d").drawImage(D,0,0,ye,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ye+"x"+We+")."),Ie}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),D;return D}function v(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(D,A,se,ve,Se=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ye=A;if(A===s.RED&&(se===s.FLOAT&&(ye=s.R32F),se===s.HALF_FLOAT&&(ye=s.R16F),se===s.UNSIGNED_BYTE&&(ye=s.R8)),A===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(ye=s.R8UI),se===s.UNSIGNED_SHORT&&(ye=s.R16UI),se===s.UNSIGNED_INT&&(ye=s.R32UI),se===s.BYTE&&(ye=s.R8I),se===s.SHORT&&(ye=s.R16I),se===s.INT&&(ye=s.R32I)),A===s.RG&&(se===s.FLOAT&&(ye=s.RG32F),se===s.HALF_FLOAT&&(ye=s.RG16F),se===s.UNSIGNED_BYTE&&(ye=s.RG8)),A===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(ye=s.RG8UI),se===s.UNSIGNED_SHORT&&(ye=s.RG16UI),se===s.UNSIGNED_INT&&(ye=s.RG32UI),se===s.BYTE&&(ye=s.RG8I),se===s.SHORT&&(ye=s.RG16I),se===s.INT&&(ye=s.RG32I)),A===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(ye=s.RGB8UI),se===s.UNSIGNED_SHORT&&(ye=s.RGB16UI),se===s.UNSIGNED_INT&&(ye=s.RGB32UI),se===s.BYTE&&(ye=s.RGB8I),se===s.SHORT&&(ye=s.RGB16I),se===s.INT&&(ye=s.RGB32I)),A===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(ye=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(ye=s.RGBA16UI),se===s.UNSIGNED_INT&&(ye=s.RGBA32UI),se===s.BYTE&&(ye=s.RGBA8I),se===s.SHORT&&(ye=s.RGBA16I),se===s.INT&&(ye=s.RGBA32I)),A===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),A===s.RGBA){const We=Se?Fl:wt.getTransfer(ve);se===s.FLOAT&&(ye=s.RGBA32F),se===s.HALF_FLOAT&&(ye=s.RGBA16F),se===s.UNSIGNED_BYTE&&(ye=We===Pt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function I(D,A){let se;return D?A===null||A===Qr||A===Xs?se=s.DEPTH24_STENCIL8:A===ji?se=s.DEPTH32F_STENCIL8:A===Ba&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Qr||A===Xs?se=s.DEPTH_COMPONENT24:A===ji?se=s.DEPTH_COMPONENT32F:A===Ba&&(se=s.DEPTH_COMPONENT16),se}function Q(D,A){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==pi&&D.minFilter!==bi?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function F(D){const A=D.target;A.removeEventListener("dispose",F),j(A),A.isVideoTexture&&x.delete(A)}function k(D){const A=D.target;A.removeEventListener("dispose",k),C(A)}function j(D){const A=r.get(D);if(A.__webglInit===void 0)return;const se=D.source,ve=S.get(se);if(ve){const Se=ve[A.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&N(D),Object.keys(ve).length===0&&S.delete(se)}r.remove(D)}function N(D){const A=r.get(D);s.deleteTexture(A.__webglTexture);const se=D.source,ve=S.get(se);delete ve[A.__cacheKey],d.memory.textures--}function C(D){const A=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(A.__webglFramebuffer[ve]))for(let Se=0;Se<A.__webglFramebuffer[ve].length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[ve][Se]);else s.deleteFramebuffer(A.__webglFramebuffer[ve]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ve])}else{if(Array.isArray(A.__webglFramebuffer))for(let ve=0;ve<A.__webglFramebuffer.length;ve++)s.deleteFramebuffer(A.__webglFramebuffer[ve]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ve=0;ve<A.__webglColorRenderbuffer.length;ve++)A.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ve]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=D.textures;for(let ve=0,Se=se.length;ve<Se;ve++){const ye=r.get(se[ve]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),d.memory.textures--),r.remove(se[ve])}r.remove(D)}let L=0;function K(){L=0}function W(){const D=L;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),L+=1,D}function te(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function de(D,A){const se=r.get(D);if(D.isVideoTexture&&Fe(D),D.isRenderTargetTexture===!1&&D.version>0&&se.__version!==D.version){const ve=D.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(se,D,A);return}}n.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+A)}function ne(D,A){const se=r.get(D);if(D.version>0&&se.__version!==D.version){X(se,D,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+A)}function oe(D,A){const se=r.get(D);if(D.version>0&&se.__version!==D.version){X(se,D,A);return}n.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+A)}function H(D,A){const se=r.get(D);if(D.version>0&&se.__version!==D.version){J(se,D,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+A)}const fe={[_d]:s.REPEAT,[Zr]:s.CLAMP_TO_EDGE,[Sd]:s.MIRRORED_REPEAT},P={[pi]:s.NEAREST,[lv]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Cu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},b={[fv]:s.NEVER,[xv]:s.ALWAYS,[hv]:s.LESS,[Tg]:s.LEQUAL,[pv]:s.EQUAL,[yv]:s.GEQUAL,[mv]:s.GREATER,[gv]:s.NOTEQUAL};function G(D,A){if(A.type===ji&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===bi||A.magFilter===Cu||A.magFilter===el||A.magFilter===Kr||A.minFilter===bi||A.minFilter===Cu||A.minFilter===el||A.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,fe[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,fe[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,fe[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,P[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,P[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,b[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===pi||A.minFilter!==el&&A.minFilter!==Kr||A.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function me(D,A){let se=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",F));const ve=A.source;let Se=S.get(ve);Se===void 0&&(Se={},S.set(ve,Se));const ye=te(A);if(ye!==D.__cacheKey){Se[ye]===void 0&&(Se[ye]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,se=!0),Se[ye].usedTimes++;const We=Se[D.__cacheKey];We!==void 0&&(Se[D.__cacheKey].usedTimes--,We.usedTimes===0&&N(A)),D.__cacheKey=ye,D.__webglTexture=Se[ye].texture}return se}function X(D,A,se){let ve=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ve=s.TEXTURE_3D);const Se=me(D,A),ye=A.source;n.bindTexture(ve,D.__webglTexture,s.TEXTURE0+se);const We=r.get(ye);if(ye.version!==We.__version||Se===!0){n.activeTexture(s.TEXTURE0+se);const Ie=wt.getPrimaries(wt.workingColorSpace),ze=A.colorSpace===Sr?null:wt.getPrimaries(A.colorSpace),ht=A.colorSpace===Sr||Ie===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let be=T(A.image,!1,o.maxTextureSize);be=dt(A,be);const Be=c.convert(A.format,A.colorSpace),tt=c.convert(A.type);let rt=U(A.internalFormat,Be,tt,A.colorSpace,A.isVideoTexture);G(ve,A);let Ge;const xt=A.mipmaps,lt=A.isVideoTexture!==!0,Rt=We.__version===void 0||Se===!0,Y=ye.dataReady,Pe=Q(A,be);if(A.isDepthTexture)rt=I(A.format===qs,A.type),Rt&&(lt?n.texStorage2D(s.TEXTURE_2D,1,rt,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,rt,be.width,be.height,0,Be,tt,null));else if(A.isDataTexture)if(xt.length>0){lt&&Rt&&n.texStorage2D(s.TEXTURE_2D,Pe,rt,xt[0].width,xt[0].height);for(let pe=0,xe=xt.length;pe<xe;pe++)Ge=xt[pe],lt?Y&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ge.width,Ge.height,Be,tt,Ge.data):n.texImage2D(s.TEXTURE_2D,pe,rt,Ge.width,Ge.height,0,Be,tt,Ge.data);A.generateMipmaps=!1}else lt?(Rt&&n.texStorage2D(s.TEXTURE_2D,Pe,rt,be.width,be.height),Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,Be,tt,be.data)):n.texImage2D(s.TEXTURE_2D,0,rt,be.width,be.height,0,Be,tt,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,rt,xt[0].width,xt[0].height,be.depth);for(let pe=0,xe=xt.length;pe<xe;pe++)if(Ge=xt[pe],A.format!==hi)if(Be!==null)if(lt){if(Y)if(A.layerUpdates.size>0){const Ue=Wm(Ge.width,Ge.height,A.format,A.type);for(const De of A.layerUpdates){const ct=Ge.data.subarray(De*Ue/Ge.data.BYTES_PER_ELEMENT,(De+1)*Ue/Ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,De,Ge.width,Ge.height,1,Be,ct)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ge.width,Ge.height,be.depth,Be,Ge.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,rt,Ge.width,Ge.height,be.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Y&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ge.width,Ge.height,be.depth,Be,tt,Ge.data):n.texImage3D(s.TEXTURE_2D_ARRAY,pe,rt,Ge.width,Ge.height,be.depth,0,Be,tt,Ge.data)}else{lt&&Rt&&n.texStorage2D(s.TEXTURE_2D,Pe,rt,xt[0].width,xt[0].height);for(let pe=0,xe=xt.length;pe<xe;pe++)Ge=xt[pe],A.format!==hi?Be!==null?lt?Y&&n.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Ge.width,Ge.height,Be,Ge.data):n.compressedTexImage2D(s.TEXTURE_2D,pe,rt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Y&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ge.width,Ge.height,Be,tt,Ge.data):n.texImage2D(s.TEXTURE_2D,pe,rt,Ge.width,Ge.height,0,Be,tt,Ge.data)}else if(A.isDataArrayTexture)if(lt){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,rt,be.width,be.height,be.depth),Y)if(A.layerUpdates.size>0){const pe=Wm(be.width,be.height,A.format,A.type);for(const xe of A.layerUpdates){const Ue=be.data.subarray(xe*pe/be.data.BYTES_PER_ELEMENT,(xe+1)*pe/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,be.width,be.height,1,Be,tt,Ue)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Be,tt,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,be.width,be.height,be.depth,0,Be,tt,be.data);else if(A.isData3DTexture)lt?(Rt&&n.texStorage3D(s.TEXTURE_3D,Pe,rt,be.width,be.height,be.depth),Y&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Be,tt,be.data)):n.texImage3D(s.TEXTURE_3D,0,rt,be.width,be.height,be.depth,0,Be,tt,be.data);else if(A.isFramebufferTexture){if(Rt)if(lt)n.texStorage2D(s.TEXTURE_2D,Pe,rt,be.width,be.height);else{let pe=be.width,xe=be.height;for(let Ue=0;Ue<Pe;Ue++)n.texImage2D(s.TEXTURE_2D,Ue,rt,pe,xe,0,Be,tt,null),pe>>=1,xe>>=1}}else if(xt.length>0){if(lt&&Rt){const pe=Re(xt[0]);n.texStorage2D(s.TEXTURE_2D,Pe,rt,pe.width,pe.height)}for(let pe=0,xe=xt.length;pe<xe;pe++)Ge=xt[pe],lt?Y&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Be,tt,Ge):n.texImage2D(s.TEXTURE_2D,pe,rt,Be,tt,Ge);A.generateMipmaps=!1}else if(lt){if(Rt){const pe=Re(be);n.texStorage2D(s.TEXTURE_2D,Pe,rt,pe.width,pe.height)}Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,tt,be)}else n.texImage2D(s.TEXTURE_2D,0,rt,Be,tt,be);v(A)&&y(ve),We.__version=ye.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function J(D,A,se){if(A.image.length!==6)return;const ve=me(D,A),Se=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+se);const ye=r.get(Se);if(Se.version!==ye.__version||ve===!0){n.activeTexture(s.TEXTURE0+se);const We=wt.getPrimaries(wt.workingColorSpace),Ie=A.colorSpace===Sr?null:wt.getPrimaries(A.colorSpace),ze=A.colorSpace===Sr||We===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const ht=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,Be=[];for(let xe=0;xe<6;xe++)!ht&&!be?Be[xe]=T(A.image[xe],!0,o.maxCubemapSize):Be[xe]=be?A.image[xe].image:A.image[xe],Be[xe]=dt(A,Be[xe]);const tt=Be[0],rt=c.convert(A.format,A.colorSpace),Ge=c.convert(A.type),xt=U(A.internalFormat,rt,Ge,A.colorSpace),lt=A.isVideoTexture!==!0,Rt=ye.__version===void 0||ve===!0,Y=Se.dataReady;let Pe=Q(A,tt);G(s.TEXTURE_CUBE_MAP,A);let pe;if(ht){lt&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,xt,tt.width,tt.height);for(let xe=0;xe<6;xe++){pe=Be[xe].mipmaps;for(let Ue=0;Ue<pe.length;Ue++){const De=pe[Ue];A.format!==hi?rt!==null?lt?Y&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,De.width,De.height,rt,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,xt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,De.width,De.height,rt,Ge,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,xt,De.width,De.height,0,rt,Ge,De.data)}}}else{if(pe=A.mipmaps,lt&&Rt){pe.length>0&&Pe++;const xe=Re(Be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,xt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){lt?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Be[xe].width,Be[xe].height,rt,Ge,Be[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,xt,Be[xe].width,Be[xe].height,0,rt,Ge,Be[xe].data);for(let Ue=0;Ue<pe.length;Ue++){const ct=pe[Ue].image[xe].image;lt?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,ct.width,ct.height,rt,Ge,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,xt,ct.width,ct.height,0,rt,Ge,ct.data)}}else{lt?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,rt,Ge,Be[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,xt,rt,Ge,Be[xe]);for(let Ue=0;Ue<pe.length;Ue++){const De=pe[Ue];lt?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,rt,Ge,De.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,xt,rt,Ge,De.image[xe])}}}v(A)&&y(s.TEXTURE_CUBE_MAP),ye.__version=Se.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function he(D,A,se,ve,Se,ye){const We=c.convert(se.format,se.colorSpace),Ie=c.convert(se.type),ze=U(se.internalFormat,We,Ie,se.colorSpace),ht=r.get(A),be=r.get(se);if(be.__renderTarget=A,!ht.__hasExternalTextures){const Be=Math.max(1,A.width>>ye),tt=Math.max(1,A.height>>ye);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?n.texImage3D(Se,ye,ze,Be,tt,A.depth,0,We,Ie,null):n.texImage2D(Se,ye,ze,Be,tt,0,We,Ie,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),et(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,Se,be.__webglTexture,0,Je(A)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,Se,be.__webglTexture,ye),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(D,A,se){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const ve=A.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,ye=I(A.stencilBuffer,Se),We=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=Je(A);et(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,ye,A.width,A.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,ye,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ye,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,D)}else{const ve=A.textures;for(let Se=0;Se<ve.length;Se++){const ye=ve[Se],We=c.convert(ye.format,ye.colorSpace),Ie=c.convert(ye.type),ze=U(ye.internalFormat,We,Ie,ye.colorSpace),ht=Je(A);se&&et(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,ze,A.width,A.height):et(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,ze,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ze,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(A.depthTexture);ve.__renderTarget=A,(!ve.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const Se=ve.__webglTexture,ye=Je(A);if(A.depthTexture.format===Hs)et(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(A.depthTexture.format===qs)et(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function _e(D){const A=r.get(D),se=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const ve=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ve){const Se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),A.__depthDisposeCallback=Se}A.__boundDepthTexture=ve}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ge(A.__webglFramebuffer,D)}else if(se){A.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ve]),A.__webglDepthbuffer[ve]===void 0)A.__webglDepthbuffer[ve]=s.createRenderbuffer(),ie(A.__webglDepthbuffer[ve],D,!1);else{const Se=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ye)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ie(A.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Se)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(D,A,se){const ve=r.get(D);A!==void 0&&he(ve.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&_e(D)}function Ke(D){const A=D.texture,se=r.get(D),ve=r.get(A);D.addEventListener("dispose",k);const Se=D.textures,ye=D.isWebGLCubeRenderTarget===!0,We=Se.length>1;if(We||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=A.version,d.memory.textures++),ye){se.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer[Ie]=[];for(let ze=0;ze<A.mipmaps.length;ze++)se.__webglFramebuffer[Ie][ze]=s.createFramebuffer()}else se.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)se.__webglFramebuffer[Ie]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ie=0,ze=Se.length;Ie<ze;Ie++){const ht=r.get(Se[Ie]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&et(D)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Se.length;Ie++){const ze=Se[Ie];se.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Ie]);const ht=c.convert(ze.format,ze.colorSpace),be=c.convert(ze.type),Be=U(ze.internalFormat,ht,be,ze.colorSpace,D.isXRRenderTarget===!0),tt=Je(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Be,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(se.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),G(s.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)he(se.__webglFramebuffer[Ie][ze],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ze);else he(se.__webglFramebuffer[Ie],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);v(A)&&y(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Ie=0,ze=Se.length;Ie<ze;Ie++){const ht=Se[Ie],be=r.get(ht);n.bindTexture(s.TEXTURE_2D,be.__webglTexture),G(s.TEXTURE_2D,ht),he(se.__webglFramebuffer,D,ht,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),v(ht)&&y(s.TEXTURE_2D)}n.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ie,ve.__webglTexture),G(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)he(se.__webglFramebuffer[ze],D,A,s.COLOR_ATTACHMENT0,Ie,ze);else he(se.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,Ie,0);v(A)&&y(Ie),n.unbindTexture()}D.depthBuffer&&_e(D)}function Ve(D){const A=D.textures;for(let se=0,ve=A.length;se<ve;se++){const Se=A[se];if(v(Se)){const ye=z(D),We=r.get(Se).__webglTexture;n.bindTexture(ye,We),y(ye),n.unbindTexture()}}}const Oe=[],B=[];function ut(D){if(D.samples>0){if(et(D)===!1){const A=D.textures,se=D.width,ve=D.height;let Se=s.COLOR_BUFFER_BIT;const ye=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(D),Ie=A.length>1;if(Ie)for(let ze=0;ze<A.length;ze++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ze=0;ze<A.length;ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[ze]);const ht=r.get(A[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,se,ve,0,0,se,ve,Se,s.NEAREST),m===!0&&(Oe.length=0,B.length=0,Oe.push(s.COLOR_ATTACHMENT0+ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Oe.push(ye),B.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let ze=0;ze<A.length;ze++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,We.__webglColorRenderbuffer[ze]);const ht=r.get(A[ze]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,ht,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Je(D){return Math.min(o.maxSamples,D.samples)}function et(D){const A=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Fe(D){const A=d.render.frame;x.get(D)!==A&&(x.set(D,A),D.update())}function dt(D,A){const se=D.colorSpace,ve=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||se!==$s&&se!==Sr&&(wt.getTransfer(se)===Pt?(ve!==hi||Se!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),A}function Re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=K,this.setTexture2D=de,this.setTexture2DArray=ne,this.setTexture3D=oe,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=he,this.useMultisampledRTT=et}function E1(s,e){function n(r,o=Sr){let c;const d=wt.getTransfer(o);if(r===qi)return s.UNSIGNED_BYTE;if(r===nf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===rf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===yg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mg)return s.BYTE;if(r===gg)return s.SHORT;if(r===Ba)return s.UNSIGNED_SHORT;if(r===tf)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===Va)return s.HALF_FLOAT;if(r===xg)return s.ALPHA;if(r===vg)return s.RGB;if(r===hi)return s.RGBA;if(r===_g)return s.LUMINANCE;if(r===Sg)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===Eg)return s.RED;if(r===sf)return s.RED_INTEGER;if(r===Mg)return s.RG;if(r===af)return s.RG_INTEGER;if(r===of)return s.RGBA_INTEGER;if(r===Ml||r===bl||r===wl||r===Tl)if(d===Pt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ml)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ml)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ed||r===Md||r===bd||r===wd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Td||r===Ad||r===Cd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Td||r===Ad)return d===Pt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Cd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rd||r===Nd||r===Id||r===Pd||r===Ld||r===Dd||r===Ud||r===Od||r===zd||r===kd||r===Fd||r===Bd||r===Hd||r===Vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Rd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Id)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ld)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ud)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===Gd||r===jd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Al)return d===Pt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bg||r===Wd||r===Xd||r===qd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Al)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class M1 extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class on extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b1={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,r),y=this._getHandJoint(h,T);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const x=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],S=x.position.distanceTo(_.position),E=.02,M=.005;h.inputState.pinching&&S>E+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&S<=E-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(b1)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new on;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
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

}`;class A1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new On,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:w1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ft(new Hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C1 extends Zs{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",m=1,h=null,x=null,_=null,S=null,E=null,M=null;const T=new A1,v=n.getContextAttributes();let y=null,z=null;const U=[],I=[],Q=new Et;let F=null;const k=new Jn;k.viewport=new Wt;const j=new Jn;j.viewport=new Wt;const N=[k,j],C=new M1;let L=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=U[X];return J===void 0&&(J=new id,U[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=U[X];return J===void 0&&(J=new id,U[X]=J),J.getGripSpace()},this.getHand=function(X){let J=U[X];return J===void 0&&(J=new id,U[X]=J),J.getHandSpace()};function W(X){const J=I.indexOf(X.inputSource);if(J===-1)return;const he=U[J];he!==void 0&&(he.update(X.inputSource,X.frame,h||d),he.dispatchEvent({type:X.type,data:X.inputSource}))}function te(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",de);for(let X=0;X<U.length;X++){const J=I[X];J!==null&&(I[X]=null,U[X].disconnect(J))}L=null,K=null,T.reset(),e.setRenderTarget(y),E=null,S=null,_=null,o=null,z=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(Q.width,Q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",te),o.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Q),o.renderState.layers===void 0){const J={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(o,n,J),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),z=new Jr(E.framebufferWidth,E.framebufferHeight,{format:hi,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,he=null,ie=null;v.depth&&(ie=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=v.stencil?qs:Hs,he=v.stencil?Xs:Qr);const ge={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:c};_=new XRWebGLBinding(o,n),S=_.createProjectionLayer(ge),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),z=new Jr(S.textureWidth,S.textureHeight,{format:hi,type:qi,depthTexture:new kg(S.textureWidth,S.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await o.requestReferenceSpace(f),me.setContext(o),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(X){for(let J=0;J<X.removed.length;J++){const he=X.removed[J],ie=I.indexOf(he);ie>=0&&(I[ie]=null,U[ie].disconnect(he))}for(let J=0;J<X.added.length;J++){const he=X.added[J];let ie=I.indexOf(he);if(ie===-1){for(let _e=0;_e<U.length;_e++)if(_e>=I.length){I.push(he),ie=_e;break}else if(I[_e]===null){I[_e]=he,ie=_e;break}if(ie===-1)break}const ge=U[ie];ge&&ge.connect(he)}}const ne=new ae,oe=new ae;function H(X,J,he){ne.setFromMatrixPosition(J.matrixWorld),oe.setFromMatrixPosition(he.matrixWorld);const ie=ne.distanceTo(oe),ge=J.projectionMatrix.elements,_e=he.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),Ke=ge[14]/(ge[10]+1),Ve=(ge[9]+1)/ge[5],Oe=(ge[9]-1)/ge[5],B=(ge[8]-1)/ge[0],ut=(_e[8]+1)/_e[0],Je=Ne*B,et=Ne*ut,Fe=ie/(-B+ut),dt=Fe*-B;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(dt),X.translateZ(Fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Re=Ne+Fe,D=Ke+Fe,A=Je-dt,se=et+(ie-dt),ve=Ve*Ke/D*Re,Se=Oe*Ke/D*Re;X.projectionMatrix.makePerspective(A,se,ve,Se,Re,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function fe(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let J=X.near,he=X.far;T.texture!==null&&(T.depthNear>0&&(J=T.depthNear),T.depthFar>0&&(he=T.depthFar)),C.near=j.near=k.near=J,C.far=j.far=k.far=he,(L!==C.near||K!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,K=C.far),k.layers.mask=X.layers.mask|2,j.layers.mask=X.layers.mask|4,C.layers.mask=k.layers.mask|j.layers.mask;const ie=X.parent,ge=C.cameras;fe(C,ie);for(let _e=0;_e<ge.length;_e++)fe(ge[_e],ie);ge.length===2?H(C,k,j):C.projectionMatrix.copy(k.projectionMatrix),P(X,C,ie)};function P(X,J,he){he===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(X){m=X,S!==null&&(S.fixedFoveation=X),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=X)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let b=null;function G(X,J){if(x=J.getViewerPose(h||d),M=J,x!==null){const he=x.views;E!==null&&(e.setRenderTargetFramebuffer(z,E.framebuffer),e.setRenderTarget(z));let ie=!1;he.length!==C.cameras.length&&(C.cameras.length=0,ie=!0);for(let _e=0;_e<he.length;_e++){const Ne=he[_e];let Ke=null;if(E!==null)Ke=E.getViewport(Ne);else{const Oe=_.getViewSubImage(S,Ne);Ke=Oe.viewport,_e===0&&(e.setRenderTargetTextures(z,Oe.colorTexture,S.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(z))}let Ve=N[_e];Ve===void 0&&(Ve=new Jn,Ve.layers.enable(_e),Ve.viewport=new Wt,N[_e]=Ve),Ve.matrix.fromArray(Ne.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ne.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),_e===0&&(C.matrix.copy(Ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ie===!0&&C.cameras.push(Ve)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const _e=_.getDepthInformation(he[0]);_e&&_e.isValid&&_e.texture&&T.init(e,_e,o.renderState)}}for(let he=0;he<U.length;he++){const ie=I[he],ge=U[he];ie!==null&&ge!==void 0&&ge.update(ie,J,h||d)}b&&b(X,J),J.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:J}),M=null}const me=new Og;me.setAnimationLoop(G),this.setAnimationLoop=function(X){b=X},this.dispose=function(){}}}const Wr=new Ti,R1=new Bt;function N1(s,e){function n(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function r(v,y){y.color.getRGB(v.fogColor.value,Lg(s)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function o(v,y,z,U,I){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(v,y):y.isMeshToonMaterial?(c(v,y),_(v,y)):y.isMeshPhongMaterial?(c(v,y),x(v,y)):y.isMeshStandardMaterial?(c(v,y),S(v,y),y.isMeshPhysicalMaterial&&E(v,y,I)):y.isMeshMatcapMaterial?(c(v,y),M(v,y)):y.isMeshDepthMaterial?c(v,y):y.isMeshDistanceMaterial?(c(v,y),T(v,y)):y.isMeshNormalMaterial?c(v,y):y.isLineBasicMaterial?(d(v,y),y.isLineDashedMaterial&&f(v,y)):y.isPointsMaterial?m(v,y,z,U):y.isSpriteMaterial?h(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,n(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,n(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,n(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===Un&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,n(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===Un&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,n(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,n(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const z=e.get(y),U=z.envMap,I=z.envMapRotation;U&&(v.envMap.value=U,Wr.copy(I),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),v.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(Wr)),v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap&&(v.lightMap.value=y.lightMap,v.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,v.lightMapTransform)),y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,v.aoMapTransform))}function d(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,n(y.map,v.mapTransform))}function f(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function m(v,y,z,U){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*z,v.scale.value=U*.5,y.map&&(v.map.value=y.map,n(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,n(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function h(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,n(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,n(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function x(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function _(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function S(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,v.roughnessMapTransform)),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function E(v,y,z){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Un&&v.clearcoatNormalScale.value.negate())),y.dispersion>0&&(v.dispersion.value=y.dispersion),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=z.texture,v.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,y){y.matcap&&(v.matcap.value=y.matcap)}function T(v,y){const z=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(z.matrixWorld),v.nearDistance.value=z.shadow.camera.near,v.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function I1(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const I=U.program;r.uniformBlockBinding(z,I)}function h(z,U){let I=o[z.id];I===void 0&&(M(z),I=x(z),o[z.id]=I,z.addEventListener("dispose",v));const Q=U.program;r.updateUBOMapping(z,Q);const F=e.render.frame;c[z.id]!==F&&(S(z),c[z.id]=F)}function x(z){const U=_();z.__bindingPointIndex=U;const I=s.createBuffer(),Q=z.__size,F=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,Q,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,I),I}function _(){for(let z=0;z<f;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const U=o[z.id],I=z.uniforms,Q=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let F=0,k=I.length;F<k;F++){const j=Array.isArray(I[F])?I[F]:[I[F]];for(let N=0,C=j.length;N<C;N++){const L=j[N];if(E(L,F,N,Q)===!0){const K=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let de=0;de<W.length;de++){const ne=W[de],oe=T(ne);typeof ne=="number"||typeof ne=="boolean"?(L.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,K+te,L.__data)):ne.isMatrix3?(L.__data[0]=ne.elements[0],L.__data[1]=ne.elements[1],L.__data[2]=ne.elements[2],L.__data[3]=0,L.__data[4]=ne.elements[3],L.__data[5]=ne.elements[4],L.__data[6]=ne.elements[5],L.__data[7]=0,L.__data[8]=ne.elements[6],L.__data[9]=ne.elements[7],L.__data[10]=ne.elements[8],L.__data[11]=0):(ne.toArray(L.__data,te),te+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(z,U,I,Q){const F=z.value,k=U+"_"+I;if(Q[k]===void 0)return typeof F=="number"||typeof F=="boolean"?Q[k]=F:Q[k]=F.clone(),!0;{const j=Q[k];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return Q[k]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function M(z){const U=z.uniforms;let I=0;const Q=16;for(let k=0,j=U.length;k<j;k++){const N=Array.isArray(U[k])?U[k]:[U[k]];for(let C=0,L=N.length;C<L;C++){const K=N[C],W=Array.isArray(K.value)?K.value:[K.value];for(let te=0,de=W.length;te<de;te++){const ne=W[te],oe=T(ne),H=I%Q,fe=H%oe.boundary,P=H+fe;I+=fe,P!==0&&Q-P<oe.storage&&(I+=Q-P),K.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=I,I+=oe.storage}}}const F=I%Q;return F>0&&(I+=Q-F),z.__size=I,z.__cache={},this}function T(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),U}function v(z){const U=z.target;U.removeEventListener("dispose",v);const I=d.indexOf(U.__bindingPointIndex);d.splice(I,1),s.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function y(){for(const z in o)s.deleteBuffer(o[z]);d=[],o={},c={}}return{bind:m,update:h,dispose:y}}class P1{constructor(e={}){const{canvas:n=_v(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const M=new Uint32Array(4),T=new Int32Array(4);let v=null,y=null;const z=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Mr,this.toneMappingExposure=1;const I=this;let Q=!1,F=0,k=0,j=null,N=-1,C=null;const L=new Wt,K=new Wt;let W=null;const te=new gt(0);let de=0,ne=n.width,oe=n.height,H=1,fe=null,P=null;const b=new Wt(0,0,ne,oe),G=new Wt(0,0,ne,oe);let me=!1;const X=new df;let J=!1,he=!1;const ie=new Bt,ge=new Bt,_e=new ae,Ne=new Wt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Oe(){return j===null?H:1}let B=r;function ut(R,$){return n.getContext(R,$)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ef}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",De,!1),B===null){const $="webgl2";if(B=ut($,R),B===null)throw ut($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Je,et,Fe,dt,Re,D,A,se,ve,Se,ye,We,Ie,ze,ht,be,Be,tt,rt,Ge,xt,lt,Rt,Y;function Pe(){Je=new zE(B),Je.init(),lt=new E1(B,Je),et=new IE(B,Je,e,lt),Fe=new v1(B,Je),et.reverseDepthBuffer&&S&&Fe.buffers.depth.setReversed(!0),dt=new BE(B),Re=new r1,D=new S1(B,Je,Fe,Re,et,lt,dt),A=new LE(I),se=new OE(I),ve=new qv(B),Rt=new RE(B,ve),Se=new kE(B,ve,dt,Rt),ye=new VE(B,Se,ve,dt),rt=new HE(B,et,D),be=new PE(Re),We=new i1(I,A,se,Je,et,Rt,be),Ie=new N1(I,Re),ze=new a1,ht=new f1(Je),tt=new CE(I,A,se,Fe,ye,E,m),Be=new y1(I,ye,et),Y=new I1(B,dt,et,Fe),Ge=new NE(B,Je,dt),xt=new FE(B,Je,dt),dt.programs=We.programs,I.capabilities=et,I.extensions=Je,I.properties=Re,I.renderLists=ze,I.shadowMap=Be,I.state=Fe,I.info=dt}Pe();const pe=new C1(I,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(ne,oe,!1))},this.getSize=function(R){return R.set(ne,oe)},this.setSize=function(R,$,ce=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,oe=$,n.width=Math.floor(R*H),n.height=Math.floor($*H),ce===!0&&(n.style.width=R+"px",n.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(ne*H,oe*H).floor()},this.setDrawingBufferSize=function(R,$,ce){ne=R,oe=$,H=ce,n.width=Math.floor(R*ce),n.height=Math.floor($*ce),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(b)},this.setViewport=function(R,$,ce,ue){R.isVector4?b.set(R.x,R.y,R.z,R.w):b.set(R,$,ce,ue),Fe.viewport(L.copy(b).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,$,ce,ue){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,$,ce,ue),Fe.scissor(K.copy(G).multiplyScalar(H).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(R){Fe.setScissorTest(me=R)},this.setOpaqueSort=function(R){fe=R},this.setTransparentSort=function(R){P=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,$=!0,ce=!0){let ue=0;if(R){let Z=!1;if(j!==null){const Ce=j.texture.format;Z=Ce===of||Ce===af||Ce===sf}if(Z){const Ce=j.texture.type,Te=Ce===qi||Ce===Qr||Ce===Ba||Ce===Xs||Ce===nf||Ce===rf,Ye=tt.getClearColor(),Xe=tt.getClearAlpha(),st=Ye.r,ot=Ye.g,$e=Ye.b;Te?(M[0]=st,M[1]=ot,M[2]=$e,M[3]=Xe,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=st,T[1]=ot,T[2]=$e,T[3]=Xe,B.clearBufferiv(B.COLOR,0,T))}else ue|=B.COLOR_BUFFER_BIT}$&&(ue|=B.DEPTH_BUFFER_BIT),ce&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",De,!1),ze.dispose(),ht.dispose(),Re.dispose(),A.dispose(),se.dispose(),ye.dispose(),Rt.dispose(),Y.dispose(),We.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",es),pe.removeEventListener("sessionend",Yi),Ai.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const R=dt.autoReset,$=Be.enabled,ce=Be.autoUpdate,ue=Be.needsUpdate,Z=Be.type;Pe(),dt.autoReset=R,Be.enabled=$,Be.autoUpdate=ce,Be.needsUpdate=ue,Be.type=Z}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ct(R){const $=R.target;$.removeEventListener("dispose",ct),Ut($)}function Ut(R){Zt(R),Re.remove(R)}function Zt(R){const $=Re.get(R).programs;$!==void 0&&($.forEach(function(ce){We.releaseProgram(ce)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ce,ue,Z,Ce){$===null&&($=Ke);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=Ya(R,$,ce,ue,Z);Fe.setMaterial(ue,Te);let Xe=ce.index,st=1;if(ue.wireframe===!0){if(Xe=Se.getWireframeAttribute(ce),Xe===void 0)return;st=2}const ot=ce.drawRange,$e=ce.attributes.position;let St=ot.start*st,Ct=(ot.start+ot.count)*st;Ce!==null&&(St=Math.max(St,Ce.start*st),Ct=Math.min(Ct,(Ce.start+Ce.count)*st)),Xe!==null?(St=Math.max(St,0),Ct=Math.min(Ct,Xe.count)):$e!=null&&(St=Math.max(St,0),Ct=Math.min(Ct,$e.count));const _t=Ct-St;if(_t<0||_t===1/0)return;Rt.setup(Z,ue,Ye,ce,Xe);let dn,pt=Ge;if(Xe!==null&&(dn=ve.get(Xe),pt=xt,pt.setIndex(dn)),Z.isMesh)ue.wireframe===!0?(Fe.setLineWidth(ue.wireframeLinewidth*Oe()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(Z.isLine){let Qe=ue.linewidth;Qe===void 0&&(Qe=1),Fe.setLineWidth(Qe*Oe()),Z.isLineSegments?pt.setMode(B.LINES):Z.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else Z.isPoints?pt.setMode(B.POINTS):Z.isSprite&&pt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)pt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,ti=Z._multiDrawCounts,Tt=Z._multiDrawCount,fn=Xe?ve.get(Xe).bytesPerElement:1,ni=Re.get(ue).currentProgram.getUniforms();for(let Kt=0;Kt<Tt;Kt++)ni.setValue(B,"_gl_DrawID",Kt),pt.render(Qe[Kt]/fn,ti[Kt])}else if(Z.isInstancedMesh)pt.renderInstances(St,_t,Z.count);else if(ce.isInstancedBufferGeometry){const Qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ti=Math.min(ce.instanceCount,Qe);pt.renderInstances(St,_t,ti)}else pt.render(St,_t)};function Mt(R,$,ce){R.transparent===!0&&R.side===Mi&&R.forceSinglePass===!1?(R.side=Un,R.needsUpdate=!0,ts(R,$,ce),R.side=br,R.needsUpdate=!0,ts(R,$,ce),R.side=Mi):ts(R,$,ce)}this.compile=function(R,$,ce=null){ce===null&&(ce=R),y=ht.get(ce),y.init($),U.push(y),ce.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),R!==ce&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const ue=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let Te=0;Te<Ce.length;Te++){const Ye=Ce[Te];Mt(Ye,ce,Z),ue.add(Ye)}else Mt(Ce,ce,Z),ue.add(Ce)}),U.pop(),y=null,ue},this.compileAsync=function(R,$,ce=null){const ue=this.compile(R,$,ce);return new Promise(Z=>{function Ce(){if(ue.forEach(function(Te){Re.get(Te).currentProgram.isReady()&&ue.delete(Te)}),ue.size===0){Z(R);return}setTimeout(Ce,10)}Je.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Tn=null;function _n(R){Tn&&Tn(R)}function es(){Ai.stop()}function Yi(){Ai.start()}const Ai=new Og;Ai.setAnimationLoop(_n),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Tn=R,pe.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},pe.addEventListener("sessionstart",es),pe.addEventListener("sessionend",Yi),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera($),$=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,$,j),y=ht.get(R,U.length),y.init($),U.push(y),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X.setFromProjectionMatrix(ge),he=this.localClippingEnabled,J=be.init(this.clippingPlanes,he),v=ze.get(R,z.length),v.init(),z.push(v),pe.enabled===!0&&pe.isPresenting===!0){const Ce=I.xr.getDepthSensingMesh();Ce!==null&&Ci(Ce,$,-1/0,I.sortObjects)}Ci(R,$,0,I.sortObjects),v.finish(),I.sortObjects===!0&&v.sort(fe,P),Ve=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Ve&&tt.addToRenderList(v,R),this.info.render.frame++,J===!0&&be.beginShadows();const ce=y.state.shadowsArray;Be.render(ce,R,$),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=v.opaque,Z=v.transmissive;if(y.setupLights(),$.isArrayCamera){const Ce=$.cameras;if(Z.length>0)for(let Te=0,Ye=Ce.length;Te<Ye;Te++){const Xe=Ce[Te];Ar(ue,Z,R,Xe)}Ve&&tt.render(R);for(let Te=0,Ye=Ce.length;Te<Ye;Te++){const Xe=Ce[Te];Tr(v,R,Xe,Xe.viewport)}}else Z.length>0&&Ar(ue,Z,R,$),Ve&&tt.render(R),Tr(v,R,$);j!==null&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(I,R,$),Rt.resetDefaultState(),N=-1,C=null,U.pop(),U.length>0?(y=U[U.length-1],J===!0&&be.setGlobalState(I.clippingPlanes,y.state.camera)):y=null,z.pop(),z.length>0?v=z[z.length-1]:v=null};function Ci(R,$,ce,ue){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){ue&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const Te=ye.update(R),Ye=R.material;Ye.visible&&v.push(R,Te,Ye,ce,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const Te=ye.update(R),Ye=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Ye)){const Xe=Te.groups;for(let st=0,ot=Xe.length;st<ot;st++){const $e=Xe[st],St=Ye[$e.materialIndex];St&&St.visible&&v.push(R,Te,St,ce,Ne.z,$e)}}else Ye.visible&&v.push(R,Te,Ye,ce,Ne.z,null)}}const Ce=R.children;for(let Te=0,Ye=Ce.length;Te<Ye;Te++)Ci(Ce[Te],$,ce,ue)}function Tr(R,$,ce,ue){const Z=R.opaque,Ce=R.transmissive,Te=R.transparent;y.setupLightsView(ce),J===!0&&be.setGlobalState(I.clippingPlanes,ce),ue&&Fe.viewport(L.copy(ue)),Z.length>0&&$i(Z,$,ce),Ce.length>0&&$i(Ce,$,ce),Te.length>0&&$i(Te,$,ce),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Ar(R,$,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ue.id]===void 0&&(y.state.transmissionRenderTarget[ue.id]=new Jr(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Va:qi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ce=y.state.transmissionRenderTarget[ue.id],Te=ue.viewport||L;Ce.setSize(Te.z,Te.w);const Ye=I.getRenderTarget();I.setRenderTarget(Ce),I.getClearColor(te),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),Ve&&tt.render(ce);const Xe=I.toneMapping;I.toneMapping=Mr;const st=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),y.setupLightsView(ue),J===!0&&be.setGlobalState(I.clippingPlanes,ue),$i(R,ce,ue),D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let $e=0,St=$.length;$e<St;$e++){const Ct=$[$e],_t=Ct.object,dn=Ct.geometry,pt=Ct.material,Qe=Ct.group;if(pt.side===Mi&&_t.layers.test(ue.layers)){const ti=pt.side;pt.side=Un,pt.needsUpdate=!0,Xa(_t,ce,ue,dn,pt,Qe),pt.side=ti,pt.needsUpdate=!0,ot=!0}}ot===!0&&(D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce))}I.setRenderTarget(Ye),I.setClearColor(te,de),st!==void 0&&(ue.viewport=st),I.toneMapping=Xe}function $i(R,$,ce){const ue=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Ce=R.length;Z<Ce;Z++){const Te=R[Z],Ye=Te.object,Xe=Te.geometry,st=ue===null?Te.material:ue,ot=Te.group;Ye.layers.test(ce.layers)&&Xa(Ye,$,ce,Xe,st,ot)}}function Xa(R,$,ce,ue,Z,Ce){R.onBeforeRender(I,$,ce,ue,Z,Ce),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(I,$,ce,ue,R,Ce),Z.transparent===!0&&Z.side===Mi&&Z.forceSinglePass===!1?(Z.side=Un,Z.needsUpdate=!0,I.renderBufferDirect(ce,$,ue,Z,R,Ce),Z.side=br,Z.needsUpdate=!0,I.renderBufferDirect(ce,$,ue,Z,R,Ce),Z.side=Mi):I.renderBufferDirect(ce,$,ue,Z,R,Ce),R.onAfterRender(I,$,ce,ue,Z,Ce)}function ts(R,$,ce){$.isScene!==!0&&($=Ke);const ue=Re.get(R),Z=y.state.lights,Ce=y.state.shadowsArray,Te=Z.state.version,Ye=We.getParameters(R,Z.state,Ce,$,ce),Xe=We.getProgramCacheKey(Ye);let st=ue.programs;ue.environment=R.isMeshStandardMaterial?$.environment:null,ue.fog=$.fog,ue.envMap=(R.isMeshStandardMaterial?se:A).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,st===void 0&&(R.addEventListener("dispose",ct),st=new Map,ue.programs=st);let ot=st.get(Xe);if(ot!==void 0){if(ue.currentProgram===ot&&ue.lightsStateVersion===Te)return mi(R,Ye),ot}else Ye.uniforms=We.getUniforms(R),R.onBeforeCompile(Ye,I),ot=We.acquireProgram(Ye,Xe),st.set(Xe,ot),ue.uniforms=Ye.uniforms;const $e=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=be.uniform),mi(R,Ye),ue.needsLights=Gl(R),ue.lightsStateVersion=Te,ue.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMap.value=Z.state.directionalShadowMap,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotShadowMap.value=Z.state.spotShadowMap,$e.spotLightMatrix.value=Z.state.spotLightMatrix,$e.spotLightMap.value=Z.state.spotLightMap,$e.pointShadowMap.value=Z.state.pointShadowMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix),ue.currentProgram=ot,ue.uniformsList=null,ot}function qa(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Cl.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function mi(R,$){const ce=Re.get(R);ce.outputColorSpace=$.outputColorSpace,ce.batching=$.batching,ce.batchingColor=$.batchingColor,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.instancingMorph=$.instancingMorph,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function Ya(R,$,ce,ue,Z){$.isScene!==!0&&($=Ke),D.resetTextureUnits();const Ce=$.fog,Te=ue.isMeshStandardMaterial?$.environment:null,Ye=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$s,Xe=(ue.isMeshStandardMaterial?se:A).get(ue.envMap||Te),st=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ot=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),$e=!!ce.morphAttributes.position,St=!!ce.morphAttributes.normal,Ct=!!ce.morphAttributes.color;let _t=Mr;ue.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(_t=I.toneMapping);const dn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,pt=dn!==void 0?dn.length:0,Qe=Re.get(ue),ti=y.state.lights;if(J===!0&&(he===!0||R!==C)){const Sn=R===C&&ue.id===N;be.setState(ue,R,Sn)}let Tt=!1;ue.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ti.state.version||Qe.outputColorSpace!==Ye||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==Xe||ue.fog===!0&&Qe.fog!==Ce||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==be.numPlanes||Qe.numIntersection!==be.numIntersection)||Qe.vertexAlphas!==st||Qe.vertexTangents!==ot||Qe.morphTargets!==$e||Qe.morphNormals!==St||Qe.morphColors!==Ct||Qe.toneMapping!==_t||Qe.morphTargetsCount!==pt)&&(Tt=!0):(Tt=!0,Qe.__version=ue.version);let fn=Qe.currentProgram;Tt===!0&&(fn=ts(ue,$,Z));let ni=!1,Kt=!1,gi=!1;const Lt=fn.getUniforms(),Gn=Qe.uniforms;if(Fe.useProgram(fn.program)&&(ni=!0,Kt=!0,gi=!0),ue.id!==N&&(N=ue.id,Kt=!0),ni||C!==R){Fe.buffers.depth.getReversed()?(ie.copy(R.projectionMatrix),Ev(ie),Mv(ie),Lt.setValue(B,"projectionMatrix",ie)):Lt.setValue(B,"projectionMatrix",R.projectionMatrix),Lt.setValue(B,"viewMatrix",R.matrixWorldInverse);const jn=Lt.map.cameraPosition;jn!==void 0&&jn.setValue(B,_e.setFromMatrixPosition(R.matrixWorld)),et.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Kt=!0,gi=!0)}if(Z.isSkinnedMesh){Lt.setOptional(B,Z,"bindMatrix"),Lt.setOptional(B,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Lt.setValue(B,"boneTexture",Sn.boneTexture,D))}Z.isBatchedMesh&&(Lt.setOptional(B,Z,"batchingTexture"),Lt.setValue(B,"batchingTexture",Z._matricesTexture,D),Lt.setOptional(B,Z,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",Z._indirectTexture,D),Lt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",Z._colorsTexture,D));const Ri=ce.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&rt.update(Z,ce,fn),(Kt||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Lt.setValue(B,"receiveShadow",Z.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Gn.envMap.value=Xe,Gn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&$.environment!==null&&(Gn.envMapIntensity.value=$.environmentIntensity),Kt&&(Lt.setValue(B,"toneMappingExposure",I.toneMappingExposure),Qe.needsLights&&$a(Gn,gi),Ce&&ue.fog===!0&&Ie.refreshFogUniforms(Gn,Ce),Ie.refreshMaterialUniforms(Gn,ue,H,oe,y.state.transmissionRenderTarget[R.id]),Cl.upload(B,qa(Qe),Gn,D)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Cl.upload(B,qa(Qe),Gn,D),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Lt.setValue(B,"center",Z.center),Lt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Lt.setValue(B,"normalMatrix",Z.normalMatrix),Lt.setValue(B,"modelMatrix",Z.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Sn=ue.uniformsGroups;for(let jn=0,An=Sn.length;jn<An;jn++){const Za=Sn[jn];Y.update(Za,fn),Y.bind(Za,fn)}}return fn}function $a(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Gl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,$,ce){Re.get(R.texture).__webglTexture=$,Re.get(R.depthTexture).__webglTexture=ce;const ue=Re.get(R);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const ce=Re.get(R);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,ce=0){j=R,F=$,k=ce;let ue=!0,Z=null,Ce=!1,Te=!1;if(R){const Xe=Re.get(R);if(Xe.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1;else if(Xe.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Xe.__hasExternalTextures)D.rebindTextures(R,Re.get(R.texture).__webglTexture,Re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Xe.__boundDepthTexture!==$e){if($e!==null&&Re.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const st=R.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Te=!0);const ot=Re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ot[$])?Z=ot[$][ce]:Z=ot[$],Ce=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?Z=Re.get(R).__webglMultisampledFramebuffer:Array.isArray(ot)?Z=ot[ce]:Z=ot,L.copy(R.viewport),K.copy(R.scissor),W=R.scissorTest}else L.copy(b).multiplyScalar(H).floor(),K.copy(G).multiplyScalar(H).floor(),W=me;if(Fe.bindFramebuffer(B.FRAMEBUFFER,Z)&&ue&&Fe.drawBuffers(R,Z),Fe.viewport(L),Fe.scissor(K),Fe.setScissorTest(W),Ce){const Xe=Re.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+$,Xe.__webglTexture,ce)}else if(Te){const Xe=Re.get(R.texture),st=$||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,ce||0,st)}N=-1},this.readRenderTargetPixels=function(R,$,ce,ue,Z,Ce,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ye=Ye[Te]),Ye){Fe.bindFramebuffer(B.FRAMEBUFFER,Ye);try{const Xe=R.texture,st=Xe.format,ot=Xe.type;if(!et.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ue&&ce>=0&&ce<=R.height-Z&&B.readPixels($,ce,ue,Z,lt.convert(st),lt.convert(ot),Ce)}finally{const Xe=j!==null?Re.get(j).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,$,ce,ue,Z,Ce,Te){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ye=Ye[Te]),Ye){const Xe=R.texture,st=Xe.format,ot=Xe.type;if(!et.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-ue&&ce>=0&&ce<=R.height-Z){Fe.bindFramebuffer(B.FRAMEBUFFER,Ye);const $e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.bufferData(B.PIXEL_PACK_BUFFER,Ce.byteLength,B.STREAM_READ),B.readPixels($,ce,ue,Z,lt.convert(st),lt.convert(ot),0);const St=j!==null?Re.get(j).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,St);const Ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Sv(B,Ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ce),B.deleteBuffer($e),B.deleteSync(Ct),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,ce=0){R.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const ue=Math.pow(2,-ce),Z=Math.floor(R.image.width*ue),Ce=Math.floor(R.image.height*ue),Te=$!==null?$.x:0,Ye=$!==null?$.y:0;D.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ce,0,0,Te,Ye,Z,Ce),Fe.unbindTexture()},this.copyTextureToTexture=function(R,$,ce=null,ue=null,Z=0){R.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,R=arguments[1],$=arguments[2],Z=arguments[3]||0,ce=null);let Ce,Te,Ye,Xe,st,ot,$e,St,Ct;const _t=R.isCompressedTexture?R.mipmaps[Z]:R.image;ce!==null?(Ce=ce.max.x-ce.min.x,Te=ce.max.y-ce.min.y,Ye=ce.isBox3?ce.max.z-ce.min.z:1,Xe=ce.min.x,st=ce.min.y,ot=ce.isBox3?ce.min.z:0):(Ce=_t.width,Te=_t.height,Ye=_t.depth||1,Xe=0,st=0,ot=0),ue!==null?($e=ue.x,St=ue.y,Ct=ue.z):($e=0,St=0,Ct=0);const dn=lt.convert($.format),pt=lt.convert($.type);let Qe;$.isData3DTexture?(D.setTexture3D($,0),Qe=B.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(D.setTexture2DArray($,0),Qe=B.TEXTURE_2D_ARRAY):(D.setTexture2D($,0),Qe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);const ti=B.getParameter(B.UNPACK_ROW_LENGTH),Tt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fn=B.getParameter(B.UNPACK_SKIP_PIXELS),ni=B.getParameter(B.UNPACK_SKIP_ROWS),Kt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ot);const gi=R.isDataArrayTexture||R.isData3DTexture,Lt=$.isDataArrayTexture||$.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Gn=Re.get(R),Ri=Re.get($),Sn=Re.get(Gn.__renderTarget),jn=Re.get(Ri.__renderTarget);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let An=0;An<Ye;An++)gi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.get(R).__webglTexture,Z,ot+An),R.isDepthTexture?(Lt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.get($).__webglTexture,Z,Ct+An),B.blitFramebuffer(Xe,st,Ce,Te,$e,St,Ce,Te,B.DEPTH_BUFFER_BIT,B.NEAREST)):Lt?B.copyTexSubImage3D(Qe,Z,$e,St,Ct+An,Xe,st,Ce,Te):B.copyTexSubImage2D(Qe,Z,$e,St,Ct+An,Xe,st,Ce,Te);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Qe,Z,$e,St,Ct,Ce,Te,Ye,dn,pt,_t.data):$.isCompressedArrayTexture?B.compressedTexSubImage3D(Qe,Z,$e,St,Ct,Ce,Te,Ye,dn,_t.data):B.texSubImage3D(Qe,Z,$e,St,Ct,Ce,Te,Ye,dn,pt,_t):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Z,$e,St,Ce,Te,dn,pt,_t.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Z,$e,St,_t.width,_t.height,dn,_t.data):B.texSubImage2D(B.TEXTURE_2D,Z,$e,St,Ce,Te,dn,pt,_t);B.pixelStorei(B.UNPACK_ROW_LENGTH,ti),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ni),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Kt),Z===0&&$.generateMipmaps&&B.generateMipmap(Qe),Fe.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ce=null,ue=null,Z=0){return R.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,R=arguments[2],$=arguments[3],Z=arguments[4]||0),za('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,ce,ue,Z)},this.initRenderTarget=function(R){Re.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Fe.unbindTexture()},this.resetState=function(){F=0,k=0,j=null,Fe.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}class hf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(e),this.density=n}clone(){return new hf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class L1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Gg extends Ks{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new ae,Ul=new ae,Xm=new Bt,Oa=new lf,Sl=new Bl,rd=new ae,qm=new ae;class D1 extends un{constructor(e=new ei,n=new Gg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Dl.fromBufferAttribute(n,o-1),Ul.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Dl.distanceTo(Ul);e.setAttribute("lineDistance",new $t(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(o),Sl.radius+=c,e.ray.intersectsSphere(Sl)===!1)return;Xm.copy(o).invert(),Oa.copy(e.ray).applyMatrix4(Xm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,h=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const E=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let T=E,v=M-1;T<v;T+=h){const y=x.getX(T),z=x.getX(T+1),U=El(this,e,Oa,m,y,z);U&&n.push(U)}if(this.isLineLoop){const T=x.getX(M-1),v=x.getX(E),y=El(this,e,Oa,m,T,v);y&&n.push(y)}}else{const E=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let T=E,v=M-1;T<v;T+=h){const y=El(this,e,Oa,m,T,T+1);y&&n.push(y)}if(this.isLineLoop){const T=El(this,e,Oa,m,M-1,E);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function El(s,e,n,r,o,c){const d=s.geometry.attributes.position;if(Dl.fromBufferAttribute(d,o),Ul.fromBufferAttribute(d,c),n.distanceSqToSegment(Dl,Ul,rd,qm)>r)return;rd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(rd);if(!(m<e.near||m>e.far))return{distance:m,point:qm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Ym=new ae,$m=new ae;class U1 extends D1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Ym.fromBufferAttribute(n,o),$m.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Ym.distanceTo($m);e.setAttribute("lineDistance",new $t(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ol extends ei{constructor(e=1,n=1,r=1,o=32,c=1,d=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:d,thetaStart:f,thetaLength:m};const h=this;o=Math.floor(o),c=Math.floor(c);const x=[],_=[],S=[],E=[];let M=0;const T=[],v=r/2;let y=0;z(),d===!1&&(e>0&&U(!0),n>0&&U(!1)),this.setIndex(x),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(S,3)),this.setAttribute("uv",new $t(E,2));function z(){const I=new ae,Q=new ae;let F=0;const k=(n-e)/r;for(let j=0;j<=c;j++){const N=[],C=j/c,L=C*(n-e)+e;for(let K=0;K<=o;K++){const W=K/o,te=W*m+f,de=Math.sin(te),ne=Math.cos(te);Q.x=L*de,Q.y=-C*r+v,Q.z=L*ne,_.push(Q.x,Q.y,Q.z),I.set(de,k,ne).normalize(),S.push(I.x,I.y,I.z),E.push(W,1-C),N.push(M++)}T.push(N)}for(let j=0;j<o;j++)for(let N=0;N<c;N++){const C=T[N][j],L=T[N+1][j],K=T[N+1][j+1],W=T[N][j+1];(e>0||N!==0)&&(x.push(C,L,W),F+=3),(n>0||N!==c-1)&&(x.push(L,K,W),F+=3)}h.addGroup(y,F,0),y+=F}function U(I){const Q=M,F=new Et,k=new ae;let j=0;const N=I===!0?e:n,C=I===!0?1:-1;for(let K=1;K<=o;K++)_.push(0,v*C,0),S.push(0,C,0),E.push(.5,.5),M++;const L=M;for(let K=0;K<=o;K++){const te=K/o*m+f,de=Math.cos(te),ne=Math.sin(te);k.x=N*ne,k.y=v*C,k.z=N*de,_.push(k.x,k.y,k.z),S.push(0,C,0),F.x=de*.5+.5,F.y=ne*.5*C+.5,E.push(F.x,F.y),M++}for(let K=0;K<o;K++){const W=Q+K,te=L+K;I===!0?x.push(te,te+1,W):x.push(te+1,te,W),j+=3}h.addGroup(y,j,I===!0?1:2),y+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pf extends ei{constructor(e=.5,n=1,r=32,o=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const f=[],m=[],h=[],x=[];let _=e;const S=(n-e)/o,E=new ae,M=new Et;for(let T=0;T<=o;T++){for(let v=0;v<=r;v++){const y=c+v/r*d;E.x=_*Math.cos(y),E.y=_*Math.sin(y),m.push(E.x,E.y,E.z),h.push(0,0,1),M.x=(E.x/n+1)/2,M.y=(E.y/n+1)/2,x.push(M.x,M.y)}_+=S}for(let T=0;T<o;T++){const v=T*(r+1);for(let y=0;y<r;y++){const z=y+v,U=z,I=z+r+1,Q=z+r+2,F=z+1;f.push(U,I,F),f.push(I,Q,F)}}this.setIndex(f),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mf extends ei{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:d,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(d+f,Math.PI);let h=0;const x=[],_=new ae,S=new ae,E=[],M=[],T=[],v=[];for(let y=0;y<=r;y++){const z=[],U=y/r;let I=0;y===0&&d===0?I=.5/n:y===r&&m===Math.PI&&(I=-.5/n);for(let Q=0;Q<=n;Q++){const F=Q/n;_.x=-e*Math.cos(o+F*c)*Math.sin(d+U*f),_.y=e*Math.cos(d+U*f),_.z=e*Math.sin(o+F*c)*Math.sin(d+U*f),M.push(_.x,_.y,_.z),S.copy(_).normalize(),T.push(S.x,S.y,S.z),v.push(F+I,1-U),z.push(h++)}x.push(z)}for(let y=0;y<r;y++)for(let z=0;z<n;z++){const U=x[y][z+1],I=x[y][z],Q=x[y+1][z],F=x[y+1][z+1];(y!==0||d>0)&&E.push(U,I,F),(y!==r-1||m<Math.PI)&&E.push(I,Q,F)}this.setIndex(E),this.setAttribute("position",new $t(M,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rl extends Ks{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wg,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O1 extends Rl{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jg extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const sd=new Bt,Zm=new ae,Km=new ae;class z1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new df,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zm),Km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Km),n.updateMatrixWorld(),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k1 extends z1{constructor(){super(new zg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qm extends jg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new k1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F1 extends jg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Jm=new Bt;class B1{constructor(e,n,r=0,o=1/0){this.ray=new lf(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Jm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jm),this}intersectObject(e,n=!0,r=[]){return Zd(e,this,r,n),r.sort(eg),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Zd(e[o],this,r,n);return r.sort(eg),r}}function eg(s,e){return s.distance-e.distance}function Zd(s,e,n,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let d=0,f=c.length;d<f;d++)Zd(c[d],e,n,!0)}}class H1 extends U1{constructor(e=10,n=10,r=4473924,o=8947848){r=new gt(r),o=new gt(o);const c=n/2,d=e/n,f=e/2,m=[],h=[];for(let S=0,E=0,M=-f;S<=n;S++,M+=d){m.push(-f,0,M,f,0,M),m.push(M,0,-f,M,0,f);const T=S===c?r:o;T.toArray(h,E),E+=3,T.toArray(h,E),E+=3,T.toArray(h,E),E+=3,T.toArray(h,E),E+=3}const x=new ei;x.setAttribute("position",new $t(m,3)),x.setAttribute("color",new $t(h,3));const _=new Gg({vertexColors:!0,toneMapped:!1});super(x,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);function V1({infrastructure:s,selectedPartMaterials:e,activePartId:n,onSelectPart:r,materialsList:o}){const c=ft.useRef(null),d=ft.useRef(null),f=ft.useRef(null),m=ft.useRef(null),h=ft.useRef(null),x=ft.useRef({}),[_,S]=ft.useState(!1),[E,M]=ft.useState(!1),[T,v]=ft.useState(45),[y,z]=ft.useState(!1),[U,I]=ft.useState(null),Q=[...o,...Qd];ft.useEffect(()=>{if(!c.current)return;const k=c.current.clientWidth,j=c.current.clientHeight||450,N=new L1;N.background=new gt(657930),N.fog=new hf(657930,.022),d.current=N;const C=new Jn(40,k/j,.1,1e3);C.position.set(18,15,22),C.lookAt(0,2.5,0),m.current=C;const L=new P1({antialias:!0,alpha:!0,powerPreference:"high-performance"});for(L.setSize(k,j),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.shadowMap.enabled=!0,L.shadowMap.type=fg,f.current=L;c.current.firstChild;)c.current.removeChild(c.current.firstChild);c.current.appendChild(L.domElement);const K=new H1(40,40,3355443,1579032);K.position.y=-.01,N.add(K);const W=new pf(11.9,12,64),te=new uf({color:2763306,side:Mi}),de=new Ft(W,te);de.rotation.x=Math.PI/2,de.position.y=.01,N.add(de);const ne=new F1(16777215,.75);N.add(ne);const oe=new Qm(16775146,1.9);oe.position.set(16,26,16),oe.castShadow=!0,oe.shadow.mapSize.width=1024,oe.shadow.mapSize.height=1024;const H=16;oe.shadow.camera.left=-H,oe.shadow.camera.right=H,oe.shadow.camera.top=H,oe.shadow.camera.bottom=-H,N.add(oe);const fe=new Qm(4487099,.6);fe.position.set(-15,12,-15),N.add(fe);const P=new on;N.add(P),h.current=P,F(s,e,_,P,x);const b=new B1,G=new Et;let me=!1,X=0,J={x:0,y:0};const he=Oe=>{me=!0,X=0;const B=Oe.clientX||Oe.touches&&Oe.touches[0].clientX,ut=Oe.clientY||Oe.touches&&Oe.touches[0].clientY;J={x:B,y:ut}},ie=Oe=>{var Fe,dt;const B=Oe.clientX||Oe.touches&&Oe.touches[0].clientX,ut=Oe.clientY||Oe.touches&&Oe.touches[0].clientY;if(me){const Re=B-J.x,D=ut-J.y;X+=Math.abs(Re)+Math.abs(D),P&&(P.rotation.y+=Re*.008)}const Je=L.domElement.getBoundingClientRect();G.x=(B-Je.left)/Je.width*2-1,G.y=-((ut-Je.top)/Je.height)*2+1,b.setFromCamera(G,C);const et=b.intersectObjects(P.children,!0);if(et.length>0){let Re=et[0].object;for(;Re.parent&&!((Fe=Re.userData)!=null&&Fe.partId)&&Re.parent!==P;)Re=Re.parent;(dt=Re.userData)!=null&&dt.partName&&I(Re.userData.partName)}else I(null);J={x:B,y:ut}},ge=Oe=>{var B,ut,Je,et;if(X<8){const Fe=Oe.clientX||Oe.changedTouches&&((B=Oe.changedTouches[0])==null?void 0:B.clientX),dt=Oe.clientY||Oe.changedTouches&&((ut=Oe.changedTouches[0])==null?void 0:ut.clientY);if(Fe!==void 0&&dt!==void 0){const Re=L.domElement.getBoundingClientRect();G.x=(Fe-Re.left)/Re.width*2-1,G.y=-((dt-Re.top)/Re.height)*2+1,b.setFromCamera(G,C);const D=b.intersectObjects(P.children,!0);if(D.length>0){let A=D[0].object;for(;A.parent&&!((Je=A.userData)!=null&&Je.partId)&&A.parent!==P;)A=A.parent;(et=A.userData)!=null&&et.partId&&(Il(),r(A.userData.partId))}}}me=!1},_e=L.domElement;_e.addEventListener("mousedown",he),_e.addEventListener("mousemove",ie),window.addEventListener("mouseup",ge),_e.addEventListener("touchstart",he,{passive:!0}),_e.addEventListener("touchmove",ie,{passive:!0}),window.addEventListener("touchend",ge);let Ne;const Ke=()=>{Ne=requestAnimationFrame(Ke),y&&!me&&P&&(P.rotation.y+=.0025),L.render(N,C)};Ke();const Ve=()=>{if(!c.current||!L||!C)return;const Oe=c.current.clientWidth,B=c.current.clientHeight||450;C.aspect=Oe/B,C.updateProjectionMatrix(),L.setSize(Oe,B)};return window.addEventListener("resize",Ve),()=>{cancelAnimationFrame(Ne),window.removeEventListener("resize",Ve),window.removeEventListener("mouseup",ge),window.removeEventListener("touchend",ge),_e.removeEventListener("mousedown",he),_e.removeEventListener("mousemove",ie),_e.removeEventListener("touchstart",he),_e.removeEventListener("touchmove",ie),L.dispose()}},[s.id]),ft.useEffect(()=>{h.current&&F(s,e,_,h.current,x)},[e,_,s]),ft.useEffect(()=>{const k=x.current;k&&Object.keys(k).forEach(j=>{var L,K;const N=k[j];if(!N)return;const C=j===n;if(E){const W=((L=N.userData)==null?void 0:L.explodeOffset)||{x:0,y:0,z:0};N.position.set(W.x*2,W.y*2.2,W.z*2)}else if(C){const W=((K=N.userData)==null?void 0:K.pullDirection)||{x:0,y:.8,z:0};N.position.set(W.x*.8,W.y*.8,W.z*.8)}else N.position.set(0,0,0);N.traverse(W=>{W.isMesh&&W.material&&(C?(W.material.emissive=new gt(3359778),W.material.emissiveIntensity=.6):(W.material.emissive=new gt(0),W.material.emissiveIntensity=0))})})},[n,E]);function F(k,j,N,C,L){for(;C.children.length>0;){const te=C.children[0];C.remove(te),te.geometry&&te.geometry.dispose(),te.material&&(Array.isArray(te.material)?te.material.forEach(de=>de.dispose()):te.material.dispose())}L.current={};const K=(te,de=8947848)=>{const ne=j[te],oe=Q.find(P=>P.id===ne),H=ne==="triple_glazed_glass"||ne==="smart_solar_glass",fe=oe?parseInt(oe.colorHex.replace("#","0x")):de;return H?new O1({color:fe,transparent:!0,opacity:ne==="smart_solar_glass"?.65:.4,roughness:.1,metalness:.1,transmission:.85,ior:1.5,wireframe:N}):new Rl({color:fe,roughness:.85,metalness:.1,wireframe:N,flatShading:!0})},W=(te,de,ne,oe={x:0,y:.8,z:0},H={x:0,y:0,z:0})=>{ne.userData={partId:te,partName:de,pullDirection:oe,explodeOffset:H},ne.traverse(fe=>{fe.userData={partId:te,partName:de}}),C.add(ne),L.current[te]=ne};if(k.id==="yzy_mono_dome"){const te=new on,de=K("dome_base",7829367),ne=new Ft(new Ol(6.4,6.7,.6,32),de);ne.position.y=.3,ne.receiveShadow=!0,te.add(ne),W("dome_base","SUBGRADE PLINTH",te,{x:0,y:-.8,z:0},{x:0,y:-2,z:0});const oe=new on,H=K("dome_shell",14540224),fe=new Ft(new mf(5.8,32,24,0,Math.PI*2,0,Math.PI/2),H);fe.position.y=.6,fe.castShadow=!0,fe.receiveShadow=!0,oe.add(fe),W("dome_shell","DOME ENVELOPE SHELL",oe,{x:0,y:1.2,z:0},{x:0,y:1.5,z:0});const P=new on,b=K("dome_window_oculus",6858170),G=new Ft(new Ol(1.1,1.2,.35,24),b);G.position.y=6.35,P.add(G),W("dome_window_oculus","SKYLIGHT OCULUS",P,{x:0,y:2,z:0},{x:0,y:4.5,z:0});const me=new on,X=K("dome_portal_tunnel",10516565),J=new Ft(new vn(2.4,3.2,3.8),X);J.position.set(0,2,5.2),J.castShadow=!0,me.add(J),W("dome_portal_tunnel","ENTRANCE TUNNEL",me,{x:0,y:0,z:2},{x:0,y:0,z:4});const he=new on,ie=new Rl({color:1713022,metalness:.8,roughness:.2}),ge=new Ft(new vn(2.6,.1,1.8),ie);ge.position.set(-4.8,.65,-3.8),ge.rotation.x=.3,he.add(ge),W("dome_utilities","OFF-GRID UTILITY POD",he,{x:-1.5,y:0,z:-1.5},{x:-3.5,y:0,z:-3.5})}else if(k.id==="rammed_earth_villa"){const te=new on,de=K("villa_foundation",8026744),ne=new Ft(new vn(10.5,.5,7.5),de);ne.position.set(0,.25,0),te.add(ne),W("villa_foundation","FOUNDATION SLAB",te,{x:0,y:-.8,z:0},{x:0,y:-2,z:0});const oe=new on,H=K("villa_south_wall",10516565),fe=new Ft(new vn(9,3.8,.8),H);fe.position.set(0,2.4,3),fe.castShadow=!0,oe.add(fe),W("villa_south_wall","SOUTH WALL (SWAPPABLE)",oe,{x:0,y:0,z:1.8},{x:0,y:0,z:3.5});const P=new on,b=K("villa_north_wall",10516565),G=new Ft(new vn(9,3.8,.8),b);G.position.set(0,2.4,-3),G.castShadow=!0,P.add(G),W("villa_north_wall","NORTH SHIELD WALL",P,{x:0,y:0,z:-1.8},{x:0,y:0,z:-3.5});const me=new on,X=K("villa_side_walls",10516565),J=new Ft(new vn(.8,3.8,5.2),X);J.position.set(4.1,2.4,0);const he=new Ft(new vn(.8,3.8,5.2),X);he.position.set(-4.1,2.4,0),me.add(J),me.add(he),W("villa_side_walls","EAST & WEST SIDE WALLS",me,{x:1.5,y:0,z:0},{x:3,y:0,z:0});const ie=new on,ge=K("villa_roof_cantilever",13213798),_e=new Ft(new vn(11.8,.45,9),ge);_e.position.set(0,4.5,0),_e.castShadow=!0,ie.add(_e),W("villa_roof_cantilever","MASS TIMBER ROOF",ie,{x:0,y:1.8,z:0},{x:0,y:3.8,z:0});const Ne=new on,Ke=K("villa_window_portal",6858170),Ve=new Ft(new vn(4,3.2,.2),Ke);Ve.position.set(0,2.1,3.45),Ne.add(Ve),W("villa_window_portal","PATIO WINDOW PORTAL",Ne,{x:0,y:0,z:1.5},{x:0,y:0,z:4.5});const Oe=new on,B=new Rl({color:1713022,metalness:.8,roughness:.2}),ut=new Ft(new vn(4.2,.1,3.2),B);ut.position.set(0,4.9,0),ut.rotation.x=-.15,Oe.add(ut),W("villa_utilities","SOLAR PERGOLA SUITE",Oe,{x:0,y:2.2,z:0},{x:0,y:5.5,z:0})}else(Si[k.id]||Si.yzy_mono_dome).forEach((de,ne)=>{const oe=new on,H=K(de.id,8947848),fe=1.2+ne*1.6,P=new Ft(new vn(7-ne*.6,1.4,7-ne*.6),H);P.position.y=fe,P.castShadow=!0,oe.add(P),W(de.id,de.name,oe,{x:0,y:.8,z:0},{x:0,y:ne*1.5,z:0})})}return p.jsxs("div",{className:"relative w-full h-80 sm:h-96 md:h-[500px] bg-yzy-obsidian border border-yzy-slate/70 overflow-hidden flex flex-col select-none",children:[p.jsx("div",{ref:c,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none"}),p.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1 pointer-events-none",children:[p.jsxs("div",{className:"flex items-center gap-2 bg-yzy-black/85 backdrop-blur-md px-2.5 py-1.5 border border-yzy-bone/40",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon animate-pulse"}),p.jsx("span",{className:"font-mono text-[10px] sm:text-xs tracking-widest text-white uppercase font-bold",children:n?`INSPECTING: ${n.toUpperCase().replace(/_/g," ")}`:"TAP ANY PART IN 3D TO CUSTOMIZE"})]}),U&&p.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash bg-yzy-black/70 px-2 py-0.5 border border-yzy-slate/60 w-fit",children:["HOVER: ",U]})]}),p.jsxs("div",{className:"absolute top-3 right-3 flex items-center gap-2 bg-yzy-black/85 backdrop-blur-md px-2.5 py-1.5 border border-yzy-slate text-[11px] font-mono",children:[p.jsx(y0,{className:"w-3.5 h-3.5 text-yzy-warning"}),p.jsx("span",{className:"hidden sm:inline text-yzy-ash text-[10px]",children:"SUN:"}),p.jsx("input",{type:"range",min:"0",max:"360",value:T,onChange:k=>v(Number(k.target.value)),className:"w-16 sm:w-20 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"}),p.jsxs("span",{className:"text-yzy-chalk w-6 text-right text-[10px]",children:[T,"°"]})]}),p.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-2 border border-yzy-slate shadow-2xl z-10",children:[p.jsxs("button",{onClick:()=>{Gt(),M(!E)},className:`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${E?"bg-yzy-bone text-yzy-black font-bold":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/60"}`,children:[p.jsx(Jd,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:E?"COLLAPSE":"EXPLODE PARTS"})]}),p.jsxs("button",{onClick:()=>{Gt(),S(!_)},className:`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${_?"bg-yzy-neon text-yzy-black font-bold":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/60"}`,children:[p.jsx(Fx,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"WIREFRAME"})]}),p.jsx("button",{onClick:()=>{Gt(),z(!y)},className:`px-2 py-1.5 font-mono text-[10px] transition-all ${y?"text-yzy-bone bg-yzy-slate/60":"text-yzy-ash hover:text-yzy-bone"}`,children:p.jsx(d0,{className:`w-3.5 h-3.5 ${y?"animate-spin":""}`,style:{animationDuration:"10s"}})})]})]})}function G1({infrastructures:s,selectedInfra:e,onSelectInfra:n}){return p.jsxs("div",{className:"flex flex-col gap-4",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-1 border-b border-yzy-slate pb-2",children:[p.jsxs("div",{children:[p.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"01 // ARCHETYPE SELECTION"}),p.jsx("h2",{className:"font-display text-lg sm:text-xl font-bold tracking-tight text-yzy-bone",children:"SELECT INFRASTRUCTURE MATRIX"})]}),p.jsxs("span",{className:"font-mono text-[10px] text-yzy-ash",children:[s.length," PRODUCTION SCHEMATICS AVAILABLE"]})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:s.map(r=>{const o=e.id===r.id;return p.jsxs("div",{onClick:()=>{Il(),n(r)},className:`group cursor-pointer p-4 border transition-all duration-200 flex flex-col justify-between relative ${o?"bg-yzy-obsidian border-yzy-bone shadow-lg ring-1 ring-yzy-bone/40":"bg-yzy-obsidian/40 border-yzy-slate/70 hover:border-yzy-ash hover:bg-yzy-obsidian/80"}`,children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest text-yzy-ash uppercase",children:r.code}),o?p.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5 tracking-wider",children:[p.jsx(Nl,{className:"w-3 h-3"})," ACTIVE"]}):p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash border border-yzy-slate px-1.5 py-0.5",children:r.difficulty})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone tracking-tight mb-0.5 group-hover:text-white transition-colors",children:r.name}),p.jsx("p",{className:"font-mono text-[10px] text-yzy-ash tracking-wide uppercase mb-2",children:r.subtitle}),p.jsx("p",{className:"text-xs text-yzy-chalk/80 line-clamp-2 leading-relaxed mb-3",children:r.tagline})]}),p.jsxs("div",{className:"grid grid-cols-3 gap-1.5 bg-yzy-black/60 p-2 border border-yzy-slate/60 text-[10px] font-mono mb-3",children:[p.jsxs("div",{className:"flex flex-col",children:[p.jsx("span",{className:"text-yzy-ash text-[9px]",children:"AREA"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.sqft," SQFT"]})]}),p.jsxs("div",{className:"flex flex-col border-l border-yzy-slate/40 pl-2",children:[p.jsx("span",{className:"text-yzy-ash text-[9px]",children:"TIMELINE"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.buildTimeDays," DAYS"]})]}),p.jsxs("div",{className:"flex flex-col border-l border-yzy-slate/40 pl-2",children:[p.jsx("span",{className:"text-yzy-ash text-[9px]",children:"OCCUPANCY"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.occupancy.split(" ")[0]," PPL"]})]})]}),p.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-yzy-slate/40 text-[10px] font-mono",children:[p.jsxs("div",{className:"flex items-center gap-1 text-yzy-chalk",children:[p.jsx(A0,{className:"w-3 h-3 text-yzy-ash"}),p.jsxs("span",{children:[r.windResistance.split(" ")[0]," MPH"]})]}),p.jsxs("div",{className:"text-right",children:[p.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"EST. BUDGET"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:["$",r.estimatedCostMin.toLocaleString()," - $",r.estimatedCostMax.toLocaleString()]})]})]})]},r.id)})})]})}function j1({infrastructure:s,selectedPartMaterials:e,onSelectPartMaterial:n,activePartId:r,setActivePartId:o,materialsList:c}){var S,E;const d=Si[s.id]||Si.yzy_mono_dome,f=d.find(M=>M.id===r)||d[0],m=[...c,...Qd],h=e[f.id]||f.defaultMaterial,x=m.find(M=>M.id===h)||c[0],_=m.filter(M=>f.allowedMaterials.includes(M.id));return p.jsxs("div",{className:"flex flex-col gap-5 bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 shadow-2xl",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3",children:[p.jsxs("div",{children:[p.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"02 // INFRASTRUCTURE MATRIX (PICK & PULL CUSTOMIZER)"}),p.jsx("h3",{className:"font-display text-lg sm:text-xl font-bold tracking-tight text-white",children:"CUSTOMIZE INDIVIDUAL ARCHITECTURAL COMPONENTS"})]}),p.jsx("span",{className:"font-mono text-[10px] text-yzy-neon font-bold uppercase bg-yzy-neon/10 px-2.5 py-1 border border-yzy-neon/30",children:"TAP ANY PART IN 3D OR SELECT BELOW"})]}),p.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-yzy-slate/60",children:d.map(M=>{const T=M.id===f.id,v=e[M.id]||M.defaultMaterial,y=m.find(z=>z.id===v);return p.jsxs("button",{onClick:()=>{Il(),o(M.id)},className:`shrink-0 p-2.5 text-left border transition-all flex flex-col justify-between min-w-[140px] sm:min-w-[160px] ${T?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-md":"bg-yzy-black text-yzy-chalk border-yzy-slate/80 hover:border-yzy-ash hover:bg-yzy-charcoal"}`,children:[p.jsx("span",{className:`font-mono text-[9px] font-bold uppercase tracking-wider block mb-0.5 ${T?"text-yzy-black/70":"text-yzy-ash"}`,children:M.category}),p.jsx("span",{className:`font-display text-xs font-bold truncate block ${T?"text-yzy-black":"text-yzy-bone"}`,children:M.name.split("(")[0]}),p.jsx("span",{className:`font-mono text-[10px] truncate block mt-1 font-semibold ${T?"text-yzy-black/90":"text-yzy-neon"}`,children:(y==null?void 0:y.shortName)||"Custom"})]},M.id)})}),p.jsxs("div",{className:"bg-yzy-black p-3.5 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon"}),p.jsx("span",{className:"font-bold text-white uppercase text-sm",children:f.name})]}),p.jsx("span",{className:"text-yzy-ash text-[11px] mt-0.5 block",children:f.description})]}),p.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[p.jsxs("div",{className:"text-right",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"SURFACE AREA"}),p.jsxs("span",{className:"font-bold text-yzy-bone",children:[f.surfaceAreaSqft," SQFT"]})]}),p.jsxs("div",{className:"text-right border-l border-yzy-slate pl-3",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"CURRENT SPEC"}),p.jsx("span",{className:"font-bold text-yzy-neon",children:x.shortName})]})]})]}),p.jsxs("div",{className:"flex flex-col gap-3",children:[p.jsx("span",{className:"font-mono text-xs text-yzy-ash uppercase font-bold tracking-wider",children:"SELECT MATERIAL SPECIFICATION FOR THIS PART:"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:_.map(M=>{const T=(e[f.id]||f.defaultMaterial)===M.id,v=Math.round(f.surfaceAreaSqft*M.costPerSqFt);return p.jsxs("div",{onClick:()=>{Il(),n(f.id,M.id)},className:`cursor-pointer p-4 border transition-all flex flex-col justify-between group ${T?"bg-yzy-black border-yzy-bone ring-2 ring-yzy-bone/60 shadow-xl":"bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-black/90"}`,children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[p.jsx("span",{className:"font-mono text-[9px] font-bold px-1.5 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:M.category}),T?p.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5",children:[p.jsx(Nl,{className:"w-3 h-3"})," ACTIVE SPEC"]}):p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash",children:M.badge})]}),p.jsx("h4",{className:"font-display text-sm font-bold text-white mb-1 group-hover:text-yzy-bone",children:M.name}),p.jsx("p",{className:"text-xs text-yzy-chalk/80 leading-relaxed mb-3",children:M.tagline})]}),p.jsxs("div",{className:"pt-2 border-t border-yzy-slate/60 flex items-center justify-between font-mono text-xs",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block",children:"PART COST"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:["$",v.toLocaleString()]})]}),p.jsxs("div",{className:"text-right",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block",children:"UNIT RATE"}),p.jsx("span",{className:"text-yzy-neon font-bold",children:M.unitCost})]})]})]},M.id)})})]}),p.jsxs("div",{className:"bg-yzy-black border border-yzy-slate p-4 sm:p-5 flex flex-col gap-4 font-mono",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-2",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(ld,{className:"w-4 h-4 text-yzy-neon"}),p.jsxs("span",{className:"font-display text-sm font-bold text-white uppercase tracking-tight",children:["ARCHITECTURAL IMPACT ANALYSIS // ",x.name]})]}),p.jsx("span",{className:"text-[10px] text-yzy-ash uppercase hidden sm:inline",children:"ENGINEERING FEEDBACK"})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[p.jsxs("div",{className:"p-3 bg-yzy-obsidian/90 border border-yzy-neon/30 flex flex-col gap-2",children:[p.jsxs("span",{className:"text-xs font-bold text-yzy-neon flex items-center gap-1.5 uppercase",children:[p.jsx(Nl,{className:"w-3.5 h-3.5"})," ARCHITECTURAL PROS & ADVANTAGES"]}),p.jsx("ul",{className:"flex flex-col gap-1.5 text-xs text-yzy-chalk/90",children:(S=x.pros)==null?void 0:S.map((M,T)=>p.jsxs("li",{className:"flex items-start gap-1.5",children:[p.jsx("span",{className:"text-yzy-neon font-bold",children:"✓"}),p.jsx("span",{children:M})]},T))})]}),p.jsxs("div",{className:"p-3 bg-yzy-obsidian/90 border border-yzy-warning/30 flex flex-col gap-2",children:[p.jsxs("span",{className:"text-xs font-bold text-yzy-warning flex items-center gap-1.5 uppercase",children:[p.jsx(S0,{className:"w-3.5 h-3.5"})," TRADEOFFS & CONSIDERATIONS"]}),p.jsx("ul",{className:"flex flex-col gap-1.5 text-xs text-yzy-chalk/90",children:(E=x.cons)==null?void 0:E.map((M,T)=>p.jsxs("li",{className:"flex items-start gap-1.5",children:[p.jsx("span",{className:"text-yzy-warning font-bold",children:"!"}),p.jsx("span",{children:M})]},T))})]})]}),x.supplier&&p.jsxs("div",{className:"bg-yzy-charcoal/80 p-3 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block mb-0.5",children:"DIRECT PROCUREMENT SOURCE FOR THIS PART:"}),p.jsx("span",{className:"font-bold text-white",children:x.supplier.name}),p.jsx("span",{className:"text-yzy-ash text-[11px] block",children:x.supplier.contact})]}),p.jsxs("div",{className:"flex items-center gap-4 text-right shrink-0 font-mono",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"EXACT PRICE"}),p.jsx("span",{className:"font-bold text-yzy-neon",children:x.supplier.exactPrice.split("(")[0]})]}),p.jsxs("div",{className:"border-l border-yzy-slate pl-3",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"LEAD TIME"}),p.jsx("span",{className:"font-bold text-yzy-bone",children:x.supplier.leadTime})]})]})]})]})]})}function W1({materialsList:s}){const[e,n]=ft.useState(""),[r,o]=ft.useState("ALL"),[c,d]=ft.useState(null),f=["ALL","EARTH & SOIL","BIO-MASS","CIRCULAR MINERAL","RENEWABLE WOOD","FOAMED MINERAL","CIRCULAR POLYMER"],m=s.filter(h=>{const x=h.name.toLowerCase().includes(e.toLowerCase())||h.description.toLowerCase().includes(e.toLowerCase())||h.sourcingMethod.toLowerCase().includes(e.toLowerCase()),_=r==="ALL"||h.category===r;return x&&_});return p.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[p.jsxs("div",{children:[p.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"02 // MATERIAL ENCYCLOPEDIA & REPOSITORY"}),p.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"SUSTAINABLE & BIO-CIRCULAR MATERIALS"})]}),p.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Transparent scientific, economic, and regional sourcing telemetry for zero-carbon architecture."})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[p.jsxs("div",{className:"relative w-full sm:w-80",children:[p.jsx(cg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),p.jsx("input",{type:"text",placeholder:"Search materials, soil types, binders...",value:e,onChange:h=>n(h.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),p.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:f.map(h=>p.jsx("button",{onClick:()=>{Gt(),o(h)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${r===h?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:h},h))})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:m.map(h=>p.jsxs("div",{className:"p-5 bg-yzy-obsidian/60 border border-yzy-slate hover:border-yzy-ash transition-all flex flex-col justify-between group",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:h.category}),p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash",children:h.badge})]}),p.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1 group-hover:text-white transition-colors",children:h.name}),p.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:h.description})]}),p.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-yzy-slate/60 text-[11px] font-mono",children:[p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"text-yzy-ash",children:"ESTIMATED COST:"}),p.jsx("span",{className:"text-yzy-bone font-bold",children:h.unitCost})]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"text-yzy-ash",children:"CARBON OFFSET:"}),p.jsx("span",{className:`font-bold ${h.carbonImpact<=0?"text-yzy-neon":"text-yzy-warning"}`,children:h.carbonImpact<=0?`${h.carbonImpact} kg CO2/m²`:`+${h.carbonImpact} kg CO2/m²`})]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"text-yzy-ash",children:"THERMAL R-VALUE:"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:["R-",h.thermalRValue]})]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"text-yzy-ash",children:"COMPRESSIVE STRENGTH:"}),p.jsx("span",{className:"text-yzy-bone font-bold",children:h.compressiveStrength})]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"text-yzy-ash",children:"FIRE RESISTANCE:"}),p.jsx("span",{className:"text-yzy-bone font-bold",children:h.fireRating})]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"text-yzy-ash",children:"EST. LIFESPAN:"}),p.jsx("span",{className:"text-yzy-bone font-bold",children:h.lifespan})]}),p.jsxs("div",{className:"bg-yzy-black/80 p-2.5 border border-yzy-slate/60 mt-2",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block mb-1",children:"LOCAL HARVESTING PROTOCOL:"}),p.jsx("p",{className:"text-[10px] text-yzy-chalk leading-normal",children:h.sourcingMethod})]}),h.supplier&&p.jsxs("div",{className:"bg-yzy-charcoal/80 p-2.5 border border-yzy-slate mt-1 text-[10px] font-mono",children:[p.jsxs("div",{className:"flex justify-between items-center mb-1",children:[p.jsx("span",{className:"text-yzy-neon font-bold text-[9px] uppercase tracking-wider",children:"PRIMARY SUPPLIER ORDER SOURCE:"}),p.jsx("span",{className:"text-yzy-ash text-[9px]",children:h.supplier.location.split("/")[0]})]}),p.jsx("span",{className:"font-bold text-yzy-bone text-xs block",children:h.supplier.name}),p.jsx("span",{className:"text-yzy-ash text-[10px] block",children:h.supplier.contact}),p.jsxs("div",{className:"flex justify-between items-center text-[9px] pt-1.5 border-t border-yzy-slate/40 mt-1",children:[p.jsxs("span",{className:"text-yzy-chalk font-bold",children:["PRICE: ",h.supplier.exactPrice.split("(")[0]]}),p.jsxs("span",{className:"text-yzy-ash",children:["LEAD: ",h.supplier.leadTime]})]})]})]})]},h.id))})]})}const X1=[{id:"mycelium_lounge_chair",name:"YZY BIO-FOAM MYCELIUM LOUNGE",category:"LIVING & SEATING",tagline:"100% bio-grown sculptural ergonomic chair molded from fungal roots and hemp substrate.",description:"A monolithic single-piece lounge chair grown in 7 days inside a 3D-printed composite mold. Ultra-lightweight (14 lbs) yet structural, with a velvety organic tactile finish sealed with natural beeswax and carnauba.",material:"Grown Ganoderma Mycelium + Industrial Hemp Hurds",carbonImpact:-32,dimensions:'34" W x 32" D x 29" H (Seat Height 14")',weight:"14 lbs (6.3 kg)",aestheticStyle:"Monolithic Organic Brutalism / Yeezy Aesthetic",diyFeasibility:"HIGH (Can be grown using DIY mold & spawn kit)",retailPrice:"$340.00 (Crafted) / $65.00 (DIY Inoculum Kit)",supplier:{name:"Ecovative Bio-Fabrication Lab / Grown.bio",location:"Green Island, NY / Heerewaarden, Netherlands",contact:"furniture@ecovative.com | +1 (518) 273-3753",website:"grown.bio / ecovative.com",exactPrice:"$340.00 fully cured chair or $65.00 for 50L bulk substrate + mold CAD",leadTime:"10 Days Direct Dispatch"},sustainabilityNote:"100% home-compostable at end of life. Zero petroleum, zero volatile organic compounds (VOCs)."},{id:"rammed_earth_desk",name:"MONOLITHIC TAMPED EARTH EXECUTIVE DESK",category:"OFFICE & STUDIO",tagline:"Massive striated earth slab desk with integrated wireless inductive charging stone.",description:"A striking, heavy brutalist workstation cast from compacted local subsoil, volcanic pumice, and hydraulic lime. Features natural horizontal sedimentation bands and a silky smooth diamond-burnished top surface.",material:"Compacted Subsoil + Volcanic Pozzolan + Steel Reinforcement Tie",carbonImpact:-18,dimensions:'72" L x 34" W x 30" H',weight:"480 lbs (Permanent Studio Centerpiece)",aestheticStyle:"Stark Architectural Earth Sculpture",diyFeasibility:"INTERMEDIATE (Slipform wooden casting)",retailPrice:"$850.00 (Precast Slab) / $120.00 (DIY On-Site Casting)",supplier:{name:"Studio Earthen Works / Local Slipform Custom Cast",location:"Austin, Texas / Regional Masonry Studios",contact:"craft@earthfurnish.org",website:"sirewall.com / custom-earth",exactPrice:"$850.00 precast and shipped in 2 sections or $120 for local materials + rebar",leadTime:"14 Days Curing Time"},sustainabilityNote:"Zero formaldehyde glues, zero toxic resins. Emits zero electromagnetic interference."},{id:"clt_studio_workbench",name:"MASS TIMBER (CLT) MODULAR WORKBENCH",category:"OFFICE & STUDIO",tagline:"Solid 5-ply spruce mass timber tabletop resting on brutalist notch-joint legs.",description:"Manufactured from FSC-certified cross-laminated mass timber cut with precision 5-axis CNC routering. Assembles with zero screws or metal hardware using ancient Japanese sliding dovetail joinery.",material:"FSC-Certified Cross-Laminated Timber (CLT)",carbonImpact:-85,dimensions:'84" L x 38" W x 30" H (Thickness 3.5")',weight:"165 lbs",aestheticStyle:"Industrial Raw Minimalist Timber",diyFeasibility:"NOVICE (Zero-hardware toolless slide assembly)",retailPrice:"$490.00",supplier:{name:"SmartLam Custom Timber Furnishings",location:"Columbia Falls, Montana",contact:"studio@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:"$490.00 flatpack crate with interlocking joinery",leadTime:"5-7 Business Days"},sustainabilityNote:"Locks away 85kg of carbon for 100+ years. Finished with organic raw linseed oil."},{id:"hemp_acoustic_screen",name:"HEMP-FIBER ACOUSTIC PRIVACY PARTITION",category:"ACOUSTICS & ACCESSORIES",tagline:"Sound-absorbing freestanding room divider made from needle-punched industrial hemp felt.",description:"Designed for open-plan studios, loft apartments, and communal workspaces. Absorbs 85% of ambient vocal frequencies (NRC 0.85) to create intimate quiet zones while purifying air naturally.",material:"100% Cleaned Industrial Hemp Fiber + Raw Cast Iron Base",carbonImpact:-22,dimensions:'48" W x 18" D x 72" H',weight:"28 lbs",aestheticStyle:"Earthy Textured Minimalist Screen",diyFeasibility:"NOVICE FRIENDLY",retailPrice:"$210.00",supplier:{name:"Hempitecture Acoustic Lines",location:"Jerome, Idaho",contact:"acoustics@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com/hempwool",exactPrice:"$210.00 per panel with modular ganging brackets",leadTime:"3-5 Business Days"},sustainabilityNote:"Hypoallergenic, breathable, zero fiberglass itch, 100% compostable fiber."},{id:"recycled_poly_stool",name:"CIRCULAR OCEAN POLYMER MONOBLOC STOOL",category:"LIVING & SEATING",tagline:"Indestructible brutalist cylinder stool forged from 45 lbs of upcycled ocean plastic.",description:"Post-consumer plastic milk jugs, bottle caps, and marine debris washed, shredded, and compression-molded into a solid monolithic cylindrical plinth. Can be used as a stool, side table, or outdoor seating.",material:"100% Recycled HDPE / PP Ocean Plastic",carbonImpact:-42,dimensions:'16" Diameter x 18" Height',weight:"24 lbs",aestheticStyle:"Raw Monolithic Terrazzo Texture",diyFeasibility:"COMMUNITY RECYCLER (With Precious Plastic injector)",retailPrice:"$125.00 (Crafted) / $15.00 (Community DIY)",supplier:{name:"ByFusion / Precious Plastic Open Network",location:"Los Angeles, California / Global Micro-Factories",contact:"sales@byfusion.com | +1 (310) 906-0300",website:"byfusion.com / preciousplastic.com",exactPrice:"$125.00 direct or $15 raw shredded plastic flake with local mold",leadTime:"3-5 Days"},sustainabilityNote:"Diverts 2,200 plastic bottles from landfills and oceans per single stool. 100% recyclable indefinitely."},{id:"geopolymer_sink_counter",name:"GEOPOLYMER POZZOLAN MONOLITHIC SINK",category:"KITCHEN & SANITARY",tagline:"Stark industrial mineral basin and integrated countertop with zero Portland cement.",description:"Cast as a single seamless unit with an integrated ramp drain. Highly resistant to stains, thermal shock, and chemicals, with a tactile matte stone texture matching YEEZY interior architecture.",material:"Slag/Fly-Ash Alkali Geopolymer Concrete + Crushed Basalt",carbonImpact:-14,dimensions:'48" L x 22" W x 6" Basin Depth',weight:"140 lbs",aestheticStyle:"Brutalist Seamless Stone Basin",diyFeasibility:"INTERMEDIATE (Silicone/Melamine mold pour)",retailPrice:"$390.00",supplier:{name:"Wagners Earth Friendly Precast / Local Artisan Cast",location:"US & Global Masonry Cooperatives",contact:"custom@wagner.com.au",website:"wagner.com.au",exactPrice:"$390.00 precast or $75.00 in raw geopolymer dry mix + activator",leadTime:"7 Days"},sustainabilityNote:"Emits 85% less CO2 than traditional concrete sinks. Cures naturally with zero heat kiln firing."},{id:"bamboo_daybed",name:"ENGINEERED BAMBOO MINIMALIST DAYBED",category:"LIVING & SEATING",tagline:"Low-slung Japanese-modern platform bed crafted from high-tensile engineered bamboo.",description:"A serene, ground-hugging platform daybed resting 8 inches off the floor. Features woven natural reed tatami inserts and hidden perimeter LED channel for ambient warm indirect lighting.",material:"Cross-Strand Dendrocalamus Bamboo Culms + Coconut Coir Cushioning",carbonImpact:-70,dimensions:'82" L x 64" W x 10" H (Queen Standard Platform)',weight:"95 lbs",aestheticStyle:"Zen Brutalist Low-Slung Sanctuary",diyFeasibility:"NOVICE / COMMUNITY HAND CRAFT",retailPrice:"$580.00",supplier:{name:"BamCore Furniture Studio / Guadua Crafts",location:"Windsor, California",contact:"orders@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:"$580.00 flatpack with natural organic latex/coir mattress",leadTime:"5-7 Days Freight"},sustainabilityNote:"Bamboo regrows to full maturity in only 3 years. Rapidly absorbs more carbon than hardwood forests."},{id:"aircrete_pedestal_table",name:"AIRCRETE SCULPTURAL ACCENT PEDESTAL",category:"LIVING & SEATING",tagline:"Ultra-lightweight aerated mineral plinth table with a smooth chalk-white pumice feel.",description:"Looks like a massive 200 lb solid carved limestone block, but weighs only 22 lbs due to micro-cellular aircrete bubbles. Easily rearranged and suitable for indoor and outdoor terrace spaces.",material:"Aerated Foamed Mineral Matrix + Silicate Polish",carbonImpact:-6,dimensions:'20" Diameter x 20" Height (Cylindrical or Hexagonal)',weight:"22 lbs (Ultra Lightweight)",aestheticStyle:"Raw Pumice / Chalk Sculptural Monolith",diyFeasibility:"NOVICE (Cast in standard bucket with foam wand)",retailPrice:"$140.00 (Crafted) / $18.00 (DIY Single Cast)",supplier:{name:"Domegaia Sculptural Division",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"furniture@domegaia.com",website:"domegaia.com",exactPrice:"$140.00 or $18 DIY mix with 1 cup bio-foam concentrate + lime",leadTime:"3-5 Business Days"},sustainabilityNote:"100% inorganic mineral structure. Completely immune to water rot, termites, and wildfire."},{id:"lime_earth_wall_finish",name:"ROMAN HYDRAULIC LIME & OCHRE FINISH SYSTEM",category:"ACOUSTICS & ACCESSORIES",tagline:"Breathable mineral plaster colored with raw volcanic earth and iron oxide pigments.",description:"Replaces toxic petrochemical paint with ancient lime plaster that petrifies over time by absorbing ambient CO2. Naturally inhibits mold, absorbs cooking and body odors, and regulates humidity.",material:"St. Astier Natural Hydraulic Lime (NHL 2.0) + French Raw Ochre Pigments",carbonImpact:-25,dimensions:"Covers 250 sq ft per 55 lb bag",weight:"55 lbs (Dry Powder Bag)",aestheticStyle:"Soft Velvety Venetian Earth Texture",diyFeasibility:"NOVICE / ARTISAN TROWEL",retailPrice:"$48.00 per 55 lb bag ($0.19 / sq ft)",supplier:{name:"Limestrong Plasters / St. Astier North America",location:"Portland, Oregon / Global Masonry Distribution",contact:"orders@limestrong.com | +1 (541) 505-8888",website:"limestrongart.com / stastier.co.uk",exactPrice:"$48.00 per 55 lb bag + $12 earth pigment pack",leadTime:"2-3 Days Shipping"},sustainabilityNote:"Zero VOC, hypoallergenic, and petrifies into genuine stone over decades."}];function q1(){const[s,e]=ft.useState("ALL"),[n,r]=ft.useState(""),[o,c]=ft.useState(null),d=["ALL","LIVING & SEATING","OFFICE & STUDIO","ACOUSTICS & ACCESSORIES","KITCHEN & SANITARY"],f=X1.filter(h=>{const x=s==="ALL"||h.category===s,_=h.name.toLowerCase().includes(n.toLowerCase())||h.description.toLowerCase().includes(n.toLowerCase())||h.material.toLowerCase().includes(n.toLowerCase())||h.supplier.name.toLowerCase().includes(n.toLowerCase());return x&&_}),m=h=>{Ha();const x=`PIECE: ${h.name}
MATERIAL: ${h.material}
PRICE: ${h.retailPrice}
SUPPLIER: ${h.supplier.name} (${h.supplier.location})
CONTACT: ${h.supplier.contact}
WEBSITE: ${h.supplier.website}`;navigator.clipboard.writeText(x),c(h.id),setTimeout(()=>c(null),2500)};return p.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[p.jsxs("div",{children:[p.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"06 // SUSTAINABLE INTERIOR ARCHITECTURE & FURNISHINGS"}),p.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"ECO-FRIENDLY BRUTALIST FURNITURE & STUDIO PIECES"})]}),p.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Zero toxic VOCs, circular bio-composites, and monolithic minimalist pieces matching the YEEZY aesthetic."})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[p.jsxs("div",{className:"relative w-full sm:w-80",children:[p.jsx(cg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),p.jsx("input",{type:"text",placeholder:"Search furniture, desks, seating, sinks...",value:n,onChange:h=>r(h.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),p.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:d.map(h=>p.jsx("button",{onClick:()=>{Gt(),e(h)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${s===h?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone shadow-sm":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:h},h))})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map(h=>p.jsxs("div",{className:"p-5 bg-yzy-obsidian/60 border border-yzy-slate hover:border-yzy-ash transition-all flex flex-col justify-between group relative",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:h.category}),p.jsxs("span",{className:"font-mono text-[9px] text-yzy-neon font-bold flex items-center gap-1",children:[p.jsx(s0,{className:"w-3 h-3"})," ",h.carbonImpact," kg CO2"]})]}),p.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1 group-hover:text-white transition-colors",children:h.name}),p.jsx("p",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-wider mb-2",children:h.aestheticStyle}),p.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:h.description}),p.jsxs("div",{className:"grid grid-cols-2 gap-1.5 bg-yzy-black/80 p-2.5 border border-yzy-slate/60 text-[10px] font-mono mb-3",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"MATERIAL"}),p.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:h.material})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIMENSIONS"}),p.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:h.dimensions.split("(")[0]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"EST. PRICE"}),p.jsx("span",{className:"text-yzy-neon font-bold",children:h.retailPrice.split("/")[0]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIY FEASIBILITY"}),p.jsx("span",{className:"text-yzy-bone font-bold",children:h.diyFeasibility.split(" ")[0]})]})]})]}),p.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-col gap-2 font-mono",children:[p.jsxs("div",{className:"bg-yzy-black/90 p-3 border border-yzy-slate/60 flex flex-col gap-1 text-[10px]",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-yzy-ash font-bold uppercase tracking-wider text-[9px]",children:"EXACT SUPPLIER SOURCE:"}),p.jsx("span",{className:"text-yzy-chalk font-bold",children:h.supplier.location.split("/")[0]})]}),p.jsx("span",{className:"text-yzy-bone font-bold text-xs",children:h.supplier.name}),p.jsx("span",{className:"text-yzy-ash text-[10px]",children:h.supplier.contact}),p.jsxs("div",{className:"flex justify-between items-center text-[9px] text-yzy-neon pt-1 border-t border-yzy-slate/40 mt-1",children:[p.jsxs("span",{children:["EXACT: ",h.supplier.exactPrice.split("or")[0]]}),p.jsxs("span",{children:["LEAD: ",h.supplier.leadTime]})]})]}),p.jsx("button",{onClick:()=>m(h),className:"w-full flex items-center justify-center gap-1.5 py-2 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-xs font-mono text-yzy-bone tracking-wider transition-all",children:o===h.id?p.jsxs(p.Fragment,{children:[p.jsx(Nl,{className:"w-3.5 h-3.5 text-yzy-neon"}),p.jsx("span",{className:"text-yzy-neon font-bold",children:"SUPPLIER SPECS COPIED!"})]}):p.jsxs(p.Fragment,{children:[p.jsx(qx,{className:"w-3.5 h-3.5 text-yzy-ash"}),p.jsx("span",{children:"COPY PROCUREMENT DETAILS"})]})})]})]},h.id))})]})}const tg=[{phaseNumber:"01",title:"SITE SELECTION & SOIL DIAGNOSTICS",subtitle:"HOW TO TEST AND HARVEST YOUR ON-SITE SUBSOIL FOR ZERO DOLLARS",duration:"Day 1 - 2",skillLevel:"NOVICE (Anyone can do this)",overview:"Before buying anything, test the earth under your feet. 80% of topsoil sub-layers contain the exact natural sand-clay ratio needed to press indestructible building blocks.",steps:[{stepNum:"1.1",name:"THE 60-SECOND MASON JAR SEDIMENT TEST",instruction:"Fill a clear glass mason jar 1/3 full of your subsoil (dig down 12 inches beneath dark organic topsoil). Add clean water until 3/4 full, plus 1 tsp of salt/detergent to break surface tension. Shake vigorously for 60 seconds and set on a flat table.",timeline:[{time:"1 Minute",note:"Heavy Sand particles settle at the bottom."},{time:"2 Hours",note:"Fine Silt particles settle as a distinct middle layer."},{time:"48 Hours",note:"Pure Clay particles settle as the smooth top layer."}],idealRatio:"Ideal mix for CEB / Rammed Earth: 65-75% Sand/Gravel, 15-25% Clay, 10-15% Silt.",proTip:"If your soil is too sandy, add 10% local clay slurry. If too sticky/clay-heavy, add crushed local quarry sand."},{stepNum:"1.2",name:"THE BALL DROP TEST (FIELD MOISTURE CHECK)",instruction:"Grab a handful of damp soil and squeeze it firmly into a 1.5-inch ball. Drop it from shoulder height (5 ft) onto hard flat ground.",outcomes:[{result:"Shatters into powder",meaning:"Too dry! Add 2% water mist."},{result:"Flattens like a pancake",meaning:"Too wet! Let it air dry before pressing."},{result:"Breaks cleanly into 4-5 uniform chunks",meaning:"PERFECT MOISTURE (8-10%)! Ready to tamp or press."}]}],requiredTools:["Mason Jar","Ruler","Round-point Shovel","1/4 inch Wire Mesh Sieve Screen"]},{phaseNumber:"02",title:"RUBBLE TRENCH & GEOPOLYMER SUBGRADE FOUNDATION",subtitle:"FROST-PROOF, ZERO-SETTLEMENT EARTHEN FOUNDATION",duration:"Day 2 - 4",skillLevel:"NOVICE / COMMUNITY HAND CREW",overview:"Traditional poured Portland concrete foundations cost $12,000+. A Frank Lloyd Wright rubble trench foundation costs under $800, drains water naturally, and is immune to seismic shifting.",steps:[{stepNum:"2.1",name:"EXCAVATE THE PERIMETER TRENCH",instruction:"Dig a 18-inch wide trench around your building perimeter down to the local frost line (18-24 inches). Ensure a 1% slope toward a single daylight drainage exit point.",specs:'18" Width x 24" Depth with perforated 4" French drain pipe at bottom bedded in washed river gravel.'},{stepNum:"2.2",name:"TAMPED GRAVEL & POZZOLAN PLINTH BEAM",instruction:'Fill trench with 3/4" crushed basalt or granite gravel in 6-inch lifts, tamping each lift solid with a manual tamper. Pour an 8-inch geopolymer / lime grade beam on top to elevate walls 12 inches above splash grade.',proTip:"Elevating earth walls 12 inches off the ground ('Good Boots & Good Hat' rule) ensures 200+ year durability against rain splashback."}],requiredTools:["Trenching Spade",'Manual Hand Tamper (10x10")',"Transit Level / Water Hose Level","String Line & Stakes"]},{phaseNumber:"03",title:"WALL PRODUCTION & INTERLOCKING ASSEMBLY",subtitle:"PRESSING CEBs OR CASTING HEMPCRETE / RAMMED SLIPFORMS",duration:"Day 5 - 14",skillLevel:"NOVICE TO INTERMEDIATE",overview:"Depending on your selected material, construct your monolithic walls using zero toxic glues or off-gassing chemicals.",steps:[{stepNum:"3.1",name:"CEB INTERLOCKING BLOCK PRODUCTION (Option A)",instruction:'Sieve soil through 1/4" mesh. Blend 92% sieved soil with 8% hydraulic lime in a wheelbarrow. Feed into manual Cinva-Ram press. Pull lever arm with 150 lbs body weight to compress block at 2,000 PSI. Stack in shade to cure for 14 days with daily water mist.',rate:"A 3-person team can press 350-500 interlocking blocks per day ($0.12/block raw material cost)."},{stepNum:"3.2",name:"MONOLITHIC RAMMED EARTH SLIPFORMING (Option B)",instruction:'Erect 3/4" marine plywood forms braced with 2x4 walers and through-bolts. Fill formwork with 6-inch loose soil mix. Tamp down to 3 inches with pneumatic tamper or heavy steel hand tamper until it sounds like a hard ringing stone. Strip forms immediately and move upward.',rate:"Produces solid 18-inch thick monolithic stone walls capable of supporting multi-story mass timber floors."},{stepNum:"3.3",name:"HEMP-LIME CASTING (Option C)",instruction:"Mix 4 parts hemp hurds, 1 part hydrated lime binder, and 1.5 parts water in a horizontal pan mixer for 3 minutes until fluffy and coated. Lightly tamp around structural timber frames using wooden hand float. Do not over-compress.",rate:"Lightweight, breathable, and creates a monolithic continuous R-25 insulation envelope."}],requiredTools:["Cinva-Ram Manual Press or Slipforms","Wheelbarrows","Pneumatic or Hand Tampers","Rubber Mallet"]},{phaseNumber:"04",title:"ROOF SYSTEMS & RAINWATER VAULTS",subtitle:"CATENARY DOMES, FERROCEMENT VAULTS & MASS TIMBER SPANS",duration:"Day 15 - 20",skillLevel:"INTERMEDIATE",overview:"Cap your structure with a protective umbrella designed to deflect hurricane winds and harvest 100% of seasonal rainfall into potable storage.",steps:[{stepNum:"4.1",name:"CATENARY ARCH / DOME COMPASS ARM GUIDANCE",instruction:"For monolithic domes, anchor a central steel swivel pivot arm in the exact center of the foundation. Use the arm as a radial 3D guide to lay each circular tier of blocks at the exact inward angle without needing interior scaffolding.",proTip:"Catenary arches transfer 100% of roof load into pure compression, allowing stone and earth to span wide open rooms without steel beams."},{stepNum:"4.2",name:"LIME WASH & SILICATE HYDROPHOBIC SEAL",instruction:"Apply 3 coats of hot slaked lime wash with potassium silicate sealer. The wash chemically bonds to the earthen wall, allowing internal water vapor to breathe out while blocking driving rain completely."}],requiredTools:["Center Pivot Compass Arm","Plastering Trowels","Natural Bristle Lime Brushes","Safety Harness"]}],ad=[{id:"ceb_mix",name:"COMPRESSED EARTH BLOCK (CEB) FORMULA",yieldUnit:'100 Standard Blocks (12" x 6" x 4")',ingredients:[{name:"Sieved Subsoil (Clay/Sand mix)",amount:"900 lbs (0.4 cu yards)",cost:"$0.00 (On-site)"},{name:"Hydraulic Lime (NHL 3.5) or Pozzolan",amount:"50 lbs (1 bag)",cost:"$14.00"},{name:"Clean Water",amount:"8 - 10 Gallons (8% moisture)",cost:"$0.00"}],instructions:"Dry mix soil and lime thoroughly until color is uniform. Mist with fine spray nozzle while turning over with shovel. Compress immediately in press. Yields 100 blocks = 33 sq ft of wall."},{id:"hempcrete_mix",name:"HEMP-LIME CASTING FORMULA",yieldUnit:"10 Cubic Feet of Wall Fill (R-20)",ingredients:[{name:"Industrial Hemp Shiv / Hurds",amount:"40 lbs (1 bale)",cost:"$24.00"},{name:"Hydrated Lime / Pozzolan Binder",amount:"55 lbs (1 bag)",cost:"$16.00"},{name:"Water",amount:"6 - 7 Gallons",cost:"$0.00"}],instructions:"Wet hemp hurds in mixer first for 45 seconds. Add lime binder and mix until hurds are evenly white-coated. Add remaining water until mix clumps when squeezed without dripping water."},{id:"aircrete_mix",name:"AERATED AIRCRETE DOME FORMULA",yieldUnit:"5 Cubic Feet Foam Slurry",ingredients:[{name:"Standard or Pozzolan Cement/Slag",amount:"94 lbs (1 bag)",cost:"$12.50"},{name:"Clean Water",amount:"6 Gallons",cost:"$0.00"},{name:"High-Expansion Bio-Foaming Solution",amount:"4 oz concentrate in 2 gal water",cost:"$1.80"}],instructions:"Mix cement slurry until lump-free. Inject dense shaving-cream foam from generator directly into rotating mixer drum for 90 seconds. Pour directly into dome molds. Expands 4x volume."}];function Y1(){const[s,e]=ft.useState(0),[n,r]=ft.useState("ceb_mix"),[o,c]=ft.useState(70),[d,f]=ft.useState(20),[m,h]=ft.useState(10),x=tg[s],_=ad.find(M=>M.id===n)||ad[0],E=o>=60&&o<=80&&d>=15&&d<=28?{status:"EXCELLENT FOR CEB & RAMMED EARTH",color:"text-yzy-neon",border:"border-yzy-neon",feedback:"Your soil composition is optimal! High structural compressive strength with minimal shrinkage."}:d>30?{status:"HIGH CLAY CONTENT (EXCESSIVE SHRINKAGE)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 15-20% coarse washed quarry sand to stabilize before pressing blocks or tamping."}:o>80?{status:"TOO SANDY (LOW BINDING CLAY)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 10-15% natural clay slurry or increase hydraulic lime stabilizer to 10%."}:{status:"ACCEPTABLE WITH 8% LIME STABILIZER",color:"text-yzy-chalk",border:"border-yzy-slate",feedback:"Suitable for stabilized compressed earth blocks with standard curing."};return p.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[p.jsxs("div",{children:[p.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"03 // NOVICE-TO-MASTER CONSTRUCTION PROTOCOLS"}),p.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"STEP-BY-STEP COMMUNITY BUILD MANUAL"})]}),p.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Zero prior construction experience required. Modular visual instructions for self-reliance."})]}),p.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 flex flex-col gap-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Qx,{className:"w-4 h-4 text-yzy-neon"}),p.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase tracking-tight",children:"INTERACTIVE SOIL TEST SANDBOX (MASON JAR SIMULATOR)"})]}),p.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase",children:"CALCULATE YOUR LOCAL SOIL"})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",children:[p.jsxs("div",{className:"lg:col-span-4 flex flex-col items-center justify-center bg-yzy-black p-4 border border-yzy-slate",children:[p.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-widest mb-2",children:"SEDIMENT STRATA TUBE"}),p.jsxs("div",{className:"w-24 h-48 border-2 border-yzy-chalk/60 rounded-b-lg relative overflow-hidden flex flex-col-reverse bg-yzy-obsidian",children:[p.jsxs("div",{style:{height:`${o}%`},className:"w-full bg-[#C2B280] flex items-center justify-center text-[9px] font-mono font-bold text-black border-t border-black/30",children:["SAND (",o,"%)"]}),p.jsxs("div",{style:{height:`${m}%`},className:"w-full bg-[#8E8065] flex items-center justify-center text-[9px] font-mono font-bold text-white border-t border-black/30",children:["SILT (",m,"%)"]}),p.jsxs("div",{style:{height:`${d}%`},className:"w-full bg-[#B85D38] flex items-center justify-center text-[9px] font-mono font-bold text-white",children:["CLAY (",d,"%)"]})]}),p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash mt-2",children:"WATER & SALT SOLUTION (TOP)"})]}),p.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-4",children:[p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[p.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[p.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[p.jsx("span",{className:"text-[#C2B280] font-bold",children:"SAND LAYER"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:[o,"%"]})]}),p.jsx("input",{type:"range",min:"30",max:"90",value:o,onChange:M=>{const T=Number(M.target.value);c(T);const v=100-T;f(Math.round(v*.65)),h(v-Math.round(v*.65))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#C2B280]"}),p.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 1 minute"})]}),p.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[p.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[p.jsx("span",{className:"text-[#B85D38] font-bold",children:"CLAY LAYER"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:[d,"%"]})]}),p.jsx("input",{type:"range",min:"5",max:"60",value:d,onChange:M=>{const T=Number(M.target.value);f(T);const v=100-T;c(Math.round(v*.85)),h(v-Math.round(v*.85))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#B85D38]"}),p.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 48 hours"})]}),p.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[p.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[p.jsx("span",{className:"text-[#8E8065] font-bold",children:"SILT LAYER"}),p.jsxs("span",{className:"text-yzy-bone font-bold",children:[m,"%"]})]}),p.jsx("input",{type:"range",min:"0",max:"40",value:m,onChange:M=>h(Number(M.target.value)),className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#8E8065]"}),p.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 2 hours"})]})]}),p.jsxs("div",{className:`p-3.5 border ${E.border} bg-yzy-black/90 flex flex-col gap-1`,children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase font-bold",children:"DIAGNOSTIC SUITABILITY VERDICT:"}),p.jsx("span",{className:`font-mono text-xs font-bold ${E.color}`,children:E.status})]}),p.jsx("p",{className:"text-xs text-yzy-bone font-mono leading-relaxed",children:E.feedback})]})]})]})]}),p.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:tg.map((M,T)=>{const v=s===T;return p.jsxs("button",{onClick:()=>{Gt(),e(T)},className:`p-3 text-left border transition-all flex flex-col justify-between ${v?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-lg":"bg-yzy-obsidian/60 border-yzy-slate text-yzy-chalk hover:border-yzy-ash"}`,children:[p.jsxs("div",{className:"flex items-center justify-between mb-1",children:[p.jsxs("span",{className:`font-mono text-[9px] font-bold ${v?"text-yzy-black/80":"text-yzy-ash"}`,children:["PHASE ",M.phaseNumber]}),p.jsx("span",{className:`font-mono text-[9px] ${v?"text-yzy-black/80 font-bold":"text-yzy-ash"}`,children:M.duration})]}),p.jsx("span",{className:`font-display text-xs font-bold leading-tight ${v?"text-yzy-black":"text-yzy-bone"}`,children:M.title})]},M.phaseNumber)})}),p.jsxs("div",{className:"bg-yzy-obsidian/80 border border-yzy-slate p-5 sm:p-6 flex flex-col gap-5",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3",children:[p.jsxs("div",{children:[p.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash uppercase tracking-widest block",children:["PHASE ",x.phaseNumber," PROTOCOL"]}),p.jsx("h3",{className:"font-display text-lg font-bold text-yzy-bone",children:x.title}),p.jsx("p",{className:"font-mono text-xs text-yzy-chalk/80 mt-0.5",children:x.subtitle})]}),p.jsx("div",{className:"flex items-center gap-2",children:p.jsxs("span",{className:"font-mono text-[10px] px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-bone font-bold uppercase",children:["SKILL: ",x.skillLevel]})})]}),p.jsx("div",{className:"flex flex-col gap-4",children:x.steps.map(M=>p.jsxs("div",{className:"p-4 bg-yzy-black/70 border border-yzy-slate/70 flex flex-col gap-2",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"font-mono text-xs font-bold text-yzy-bone bg-yzy-charcoal px-2 py-0.5 border border-yzy-slate",children:M.stepNum}),p.jsx("h4",{className:"font-display text-sm font-bold text-yzy-bone uppercase",children:M.name})]}),p.jsx("p",{className:"text-xs text-yzy-chalk/90 leading-relaxed font-mono",children:M.instruction}),M.timeline&&p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 bg-yzy-obsidian p-2 border border-yzy-slate/40 text-[10px] font-mono",children:M.timeline.map((T,v)=>p.jsxs("div",{className:"flex flex-col",children:[p.jsxs("span",{className:"text-yzy-ash font-bold",children:[T.time,":"]}),p.jsx("span",{className:"text-yzy-bone",children:T.note})]},v))}),M.idealRatio&&p.jsxs("div",{className:"text-[11px] font-mono text-yzy-neon bg-yzy-neon/10 border border-yzy-neon/30 p-2 mt-1",children:[p.jsx("strong",{children:"FORMULA: "}),M.idealRatio]}),M.proTip&&p.jsxs("div",{className:"text-[10px] font-mono text-yzy-ash bg-yzy-charcoal/40 p-2 border-l-2 border-yzy-bone",children:[p.jsx("span",{className:"text-yzy-bone font-bold",children:"PRO-TIP: "}),M.proTip]})]},M.stepNum))}),p.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-wrap items-center gap-2 text-xs font-mono",children:[p.jsx("span",{className:"text-yzy-ash font-bold uppercase text-[10px] mr-2",children:"REQUIRED TOOLS:"}),x.requiredTools.map((M,T)=>p.jsx("span",{className:"px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk text-[10px]",children:M},T))]})]}),p.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col gap-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Vx,{className:"w-4 h-4 text-yzy-bone"}),p.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase",children:"BATCH RECIPE CALCULATORS"})]}),p.jsx("div",{className:"flex gap-1",children:ad.map(M=>p.jsx("button",{onClick:()=>{Gt(),r(M.id)},className:`px-2.5 py-1 text-[10px] font-mono tracking-wider border transition-all ${n===M.id?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:M.name.split(" ")[0]},M.id))})]}),p.jsxs("div",{className:"flex flex-col gap-3 font-mono",children:[p.jsxs("div",{className:"flex justify-between items-center text-xs",children:[p.jsx("span",{className:"text-yzy-bone font-bold",children:_.name}),p.jsxs("span",{className:"text-yzy-ash",children:["YIELD: ",_.yieldUnit]})]}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:_.ingredients.map((M,T)=>p.jsxs("div",{className:"bg-yzy-black p-3 border border-yzy-slate flex flex-col justify-between",children:[p.jsxs("div",{children:[p.jsxs("span",{className:"text-yzy-ash text-[9px] uppercase block mb-0.5",children:["INGREDIENT ",T+1]}),p.jsx("span",{className:"text-yzy-bone font-bold text-xs",children:M.name})]}),p.jsxs("div",{className:"flex justify-between text-[11px] pt-2 mt-2 border-t border-yzy-slate/40",children:[p.jsx("span",{className:"text-yzy-chalk",children:M.amount}),p.jsx("span",{className:"text-yzy-neon font-bold",children:M.cost})]})]},T))}),p.jsxs("p",{className:"text-xs text-yzy-chalk/90 bg-yzy-black/60 p-3 border border-yzy-slate leading-relaxed",children:[p.jsx("strong",{className:"text-yzy-bone",children:"MIXING PROTOCOL: "}),_.instructions]})]})]})]})}const $1=[{category:"FREE / LOCAL HARVESTING",title:"ON-SITE & REGIONAL HARVESTING",badge:"COST: $0 - $200",description:"Methods for acquiring 70-90% of raw building mass directly from local geography.",channels:[{item:"Subsoil & Clay for CEBs/Rammed Earth",howToSource:"Foundation basement excavation, construction site clean fill, local road cutting excavations, or agricultural pond dredging.",estimatedCost:"$0.00 (Self-dug) or $15/ton delivered from local excavation contractor",availability:"Everywhere worldwide"},{item:"Agricultural Waste (Straw, Husks, Wood Chaff)",howToSource:"Connect with local grain/rice/wheat farmers after harvest season. Substrate for mycelium bio-insulation and cob binders.",estimatedCost:"$3.00 - $5.00 per 50 lb round bale",availability:"Agricultural zones / Rural co-ops"},{item:"Recycled Plastic (HDPE Milk Jugs & Bottle Caps)",howToSource:"Set up community drop-off points at schools/churches. Melted into interlocking zero-cost foundation blocks.",estimatedCost:"$0.00 (Community collection) to $0.20/lb washed flake",availability:"Urban & suburban centers"}]},{category:"LOW-COST EQUIPMENT & TOOLING",title:"OPEN-SOURCE BLOCK PRESSES & CASTING RIGS",badge:"ONE-TIME COMMUNITY TOOL KIT",description:"Inexpensive machinery that a single community can share to build dozens of homes.",channels:[{item:"Manual Interlocking CEB Press (Cinva-Ram / Auram Style)",howToSource:"Purchase from Open Source Ecology, Habitat for Humanity suppliers, or weld locally using open-source CAD plans.",estimatedCost:"$380 - $650 (One-time purchase, builds 50+ homes)",leadTime:"3-7 Days shipping or 2 days local welding"},{item:"Aircrete Continuous Bio-Foam Generator Rig",howToSource:"Domegaia Little Dragon foam unit or DIY 5-gallon pressure tank with aerator wand.",estimatedCost:"$120 - $280",leadTime:"Immediate DIY assembly"},{item:"Slipform Formwork & Steel Walers",howToSource:'Reusable 3/4" high-density overlay (HDO) plywood sheets with quick-release wedge bolts.',estimatedCost:"$450 per 16 linear feet of reusable forms",leadTime:"Local lumber yard"}]},{category:"COMMERCIAL BIO & MINERAL SUPPLIERS",title:"PROCESSED HEMPCRETE, LIME & MASS TIMBER",badge:"DIRECT SUPPLY CHAIN",description:"Direct wholesale bulk contacts for specialized binders and bio-composites.",channels:[{item:"Industrial Hemp Shiv / Hurd (Fibers cleaned & shredded)",howToSource:"HempWood (KY), Sunstrand, US Hemp Brokerage, Hempitecture.",estimatedCost:"$0.38 - $0.55 / lb in 1-ton super-sacks",leadTime:"5-10 Days freight"},{item:"Naturally Hydraulic Lime (NHL 3.5 / NHL 5.0) & Pozzolans",howToSource:"Saint-Astier, Limestrong, Graymont, Boral Fly Ash / Slag recycling.",estimatedCost:"$14.00 - $18.00 per 50 lb sack wholesale",leadTime:"Regional masonry distributors"},{item:"Engineered Bamboo Culms & Strands",howToSource:"Guadua bamboo co-ops, BamCore structural framing panels.",estimatedCost:"$3.50 / linear ft",leadTime:"Regional timber hubs"}]}],Z1=[{metric:"Foundation (per sq ft)",conventional:"$18.50 (Standard poured concrete)",ezyInfra:"$3.80 (Rubble trench + Geopolymer plinth)",savings:"79% SAVED"},{metric:"Exterior Wall Envelope (per sq ft)",conventional:"$42.00 (Wood studs + OSB + Fiberglass + Drywall + Siding)",ezyInfra:"$4.20 (Interlocking CEB Earth or Rammed Earth)",savings:"90% SAVED"},{metric:"Insulation & Acoustic (per sq ft)",conventional:"$9.50 (Toxic closed-cell spray foam)",ezyInfra:"$2.90 (Grown Mycelium or Hemp-Lime)",savings:"69% SAVED"},{metric:"Total Turnkey Cost (1,200 sqft Residence)",conventional:"$280,000 - $420,000",ezyInfra:"$14,500 - $28,000",savings:"93% SAVED"},{metric:"Net Embodied Carbon",conventional:"+65,000 kg CO2 (Heavy polluter)",ezyInfra:"-14,200 kg CO2 (Net Carbon Sink)",savings:"122% REDUCTION"}];function ng(){return p.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[p.jsxs("div",{children:[p.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"04 // SOURCING RADAR & SUPPLY CHAIN"}),p.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"MATERIAL PROCUREMENT & TOOL DIRECTORY"})]}),p.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Direct wholesale pathways, open-source equipment plans, and local harvesting guides."})]}),p.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:$1.map((s,e)=>p.jsx("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col justify-between",children:p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk",children:s.category}),p.jsx("span",{className:"font-mono text-[9px] text-yzy-neon font-bold",children:s.badge})]}),p.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1",children:s.title}),p.jsx("p",{className:"text-xs text-yzy-chalk/80 leading-relaxed mb-4",children:s.description}),p.jsx("div",{className:"flex flex-col gap-3",children:s.channels.map((n,r)=>p.jsxs("div",{className:"bg-yzy-black/80 p-3 border border-yzy-slate/60 text-xs font-mono",children:[p.jsx("span",{className:"font-bold text-yzy-bone block mb-1",children:n.item}),p.jsx("p",{className:"text-[11px] text-yzy-chalk/90 leading-relaxed mb-2",children:n.howToSource}),p.jsxs("div",{className:"flex justify-between items-center text-[10px] pt-2 border-t border-yzy-slate/40",children:[p.jsx("span",{className:"text-yzy-ash",children:"COST:"}),p.jsx("span",{className:"text-yzy-neon font-bold",children:n.estimatedCost})]})]},r))})]})},e))}),p.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 sm:p-6 flex flex-col gap-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(v0,{className:"w-5 h-5 text-yzy-neon"}),p.jsx("h3",{className:"font-display text-base sm:text-lg font-bold text-yzy-bone uppercase",children:"TRANSPARENT COST DISRUPTION INDEX (CONVENTIONAL VS EZY INFRA)"})]}),p.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase hidden sm:inline",children:"INDUSTRY BENCHMARKS"})]}),p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[p.jsx("thead",{children:p.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[p.jsx("th",{className:"py-2.5 px-3",children:"ARCHITECTURAL COMPONENT"}),p.jsx("th",{className:"py-2.5 px-3",children:"CONVENTIONAL COMMERCIAL"}),p.jsx("th",{className:"py-2.5 px-3",children:"EZY INFRA SYSTEM"}),p.jsx("th",{className:"py-2.5 px-3 text-right",children:"COST DISRUPTION"})]})}),p.jsx("tbody",{className:"divide-y divide-yzy-slate/40",children:Z1.map((s,e)=>p.jsxs("tr",{className:"hover:bg-yzy-charcoal/40 transition-colors",children:[p.jsx("td",{className:"py-3 px-3 font-bold text-yzy-bone",children:s.metric}),p.jsx("td",{className:"py-3 px-3 text-yzy-ash line-through",children:s.conventional}),p.jsx("td",{className:"py-3 px-3 text-yzy-chalk font-bold",children:s.ezyInfra}),p.jsx("td",{className:"py-3 px-3 text-right",children:p.jsx("span",{className:"bg-yzy-neon/10 border border-yzy-neon/30 text-yzy-neon font-bold px-2 py-0.5 text-[10px]",children:s.savings})})]},e))})]})})]})]})}function K1({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:d,totalCarbon:f}){var T,v,y,z,U,I,Q,F,k,j,N,C;if(!s)return null;const m=[{layer:"01. FOUNDATION & SUBGRADE",mat:o.find(L=>L.id===r.foundation),calc:`$${(n.sqft*.8*(((T=o.find(L=>L.id===r.foundation))==null?void 0:T.costPerSqFt)||3.5)).toFixed(0)}`,costNum:Math.round(n.sqft*.8*(((v=o.find(L=>L.id===r.foundation))==null?void 0:v.costPerSqFt)||3.5))},{layer:"02. CORE SUPERSTRUCTURE",mat:o.find(L=>L.id===r.superstructure),calc:`$${(n.sqft*.6*(((y=o.find(L=>L.id===r.superstructure))==null?void 0:y.costPerSqFt)||4.5)).toFixed(0)}`,costNum:Math.round(n.sqft*.6*(((z=o.find(L=>L.id===r.superstructure))==null?void 0:z.costPerSqFt)||4.5))},{layer:"03. THERMAL ENVELOPE / WALLS",mat:o.find(L=>L.id===r.walls),calc:`$${(n.sqft*1.4*(((U=o.find(L=>L.id===r.walls))==null?void 0:U.costPerSqFt)||4.2)).toFixed(0)}`,costNum:Math.round(n.sqft*1.4*(((I=o.find(L=>L.id===r.walls))==null?void 0:I.costPerSqFt)||4.2))},{layer:"04. ROOF & CANOPY VAULT",mat:o.find(L=>L.id===r.roof),calc:`$${(n.sqft*1.1*(((Q=o.find(L=>L.id===r.roof))==null?void 0:Q.costPerSqFt)||3.8)).toFixed(0)}`,costNum:Math.round(n.sqft*1.1*(((F=o.find(L=>L.id===r.roof))==null?void 0:F.costPerSqFt)||3.8))},{layer:"05. BIO-ACOUSTIC INSULATION",mat:o.find(L=>L.id===r.insulation),calc:`$${(n.sqft*1*(((k=o.find(L=>L.id===r.insulation))==null?void 0:k.costPerSqFt)||2.9)).toFixed(0)}`,costNum:Math.round(n.sqft*1*(((j=o.find(L=>L.id===r.insulation))==null?void 0:j.costPerSqFt)||2.9))},{layer:"06. OFF-GRID UTILITY SUITE",mat:c.find(L=>L.id===r.utilities),calc:`$${(((N=c.find(L=>L.id===r.utilities))==null?void 0:N.cost)||2400).toLocaleString()}`,costNum:((C=c.find(L=>L.id===r.utilities))==null?void 0:C.cost)||2400}],h=m.reduce((L,K)=>L+K.costNum,0),x=650,_=Math.round(h*.08),S=h+x+_,E=(S/n.sqft).toFixed(2),M=()=>{Ha();let L="data:text/csv;charset=utf-8,";L+=`ARCHITECTURAL COMPONENT,SPECIFIED MATERIAL,UNIT METRIC,ESTIMATED COST
`,m.forEach(te=>{var de,ne,oe;L+=`"${te.layer}","${((de=te.mat)==null?void 0:de.name)||((ne=te.mat)==null?void 0:ne.shortName)}","${((oe=te.mat)==null?void 0:oe.unitCost)||"Package"}","${te.calc}"
`}),L+=`"TOOLING & EQUIPMENT","Community Press Kit","One-Time Rental","$${x}"
`,L+=`"CONTINGENCY BUFFER","8% Waste Reserve","Contingency","$${_}"
`,L+=`"TOTAL PROJECT BUDGET","${n.name}","Turnkey DIY","$${S}"
`;const K=encodeURI(L),W=document.createElement("a");W.setAttribute("href",K),W.setAttribute("download",`EZY_INFRA_BOM_${n.code}.csv`),document.body.appendChild(W),W.click(),document.body.removeChild(W)};return p.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:p.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone w-full max-w-3xl my-auto p-5 sm:p-7 shadow-2xl flex flex-col gap-5 text-yzy-bone font-mono",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase block",children:"TRANSPARENT BILL OF MATERIALS (BOM)"}),p.jsxs("h3",{className:"font-display text-lg sm:text-xl font-bold tracking-tight",children:[n.name," // COST TELEMETRY"]})]}),p.jsx("button",{onClick:()=>{Gt(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:p.jsx(zl,{className:"w-5 h-5"})})]}),p.jsxs("div",{className:"grid grid-cols-3 gap-2 bg-yzy-black p-3 border border-yzy-slate text-center",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"TOTAL DIY BUDGET"}),p.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-neon",children:["$",S.toLocaleString()]})]}),p.jsxs("div",{className:"border-l border-yzy-slate",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COST PER SQ FT"}),p.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:["$",E," / sqft"]})]}),p.jsxs("div",{className:"border-l border-yzy-slate",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COMMERCIAL COST SAVINGS"}),p.jsx("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:"88% - 94%"})]})]}),p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[p.jsx("thead",{children:p.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[p.jsx("th",{className:"py-2 px-2",children:"COMPONENT"}),p.jsx("th",{className:"py-2 px-2",children:"SPECIFIED MATERIAL"}),p.jsx("th",{className:"py-2 px-2 text-right",children:"COST ESTIMATE"})]})}),p.jsxs("tbody",{className:"divide-y divide-yzy-slate/40",children:[m.map((L,K)=>{var W,te;return p.jsxs("tr",{className:"hover:bg-yzy-charcoal/30",children:[p.jsx("td",{className:"py-2.5 px-2 font-bold text-yzy-chalk text-[11px]",children:L.layer}),p.jsx("td",{className:"py-2.5 px-2 text-yzy-ash text-[11px]",children:((W=L.mat)==null?void 0:W.name)||((te=L.mat)==null?void 0:te.shortName)}),p.jsx("td",{className:"py-2.5 px-2 text-right font-bold text-yzy-bone text-[11px]",children:L.calc})]},K)}),p.jsxs("tr",{className:"bg-yzy-black/40",children:[p.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"TOOLS & EQUIPMENT LEASE"}),p.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Cinva-Ram Press & Mixer"}),p.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",x]})]}),p.jsxs("tr",{className:"bg-yzy-black/40",children:[p.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"CONTINGENCY & WASTE RESERVE (8%)"}),p.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Site Material Buffer"}),p.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",_]})]})]})]})}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[p.jsx("span",{className:"text-[10px] text-yzy-ash",children:"* Estimates based on open-source DIY construction without contractor markup."}),p.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[p.jsxs("button",{onClick:M,className:"flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-yzy-bone hover:bg-white text-yzy-black text-xs font-bold tracking-wider",children:[p.jsx(od,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"DOWNLOAD BOM (.CSV)"})]}),p.jsx("button",{onClick:()=>{Gt(),e()},className:"px-4 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs text-yzy-chalk",children:"CLOSE"})]})]})]})})}var gf={};(function s(e,n,r,o){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),b=P.getContext("2d");b.fillRect(0,0,1,1);var G=P.transferToImageBitmap();b.createPattern(G,"no-repeat")}catch{return!1}return!0})();function m(){}function h(P){var b=n.exports.Promise,G=b!==void 0?b:e.Promise;return typeof G=="function"?new G(P):(P(m,m),null)}var x=(function(P,b){return{transform:function(G){if(P)return G;if(b.has(G))return b.get(G);var me=new OffscreenCanvas(G.width,G.height),X=me.getContext("2d");return X.drawImage(G,0,0),b.set(G,me),me},clear:function(){b.clear()}}})(f,new Map),_=(function(){var P=Math.floor(16.666666666666668),b,G,me={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(J){var he=Math.random();return me[he]=requestAnimationFrame(function ie(ge){X===ge||X+P-1<ge?(X=ge,delete me[he],J()):me[he]=requestAnimationFrame(ie)}),he},G=function(J){me[J]&&cancelAnimationFrame(me[J])}):(b=function(J){return setTimeout(J,P)},G=function(J){return clearTimeout(J)}),{frame:b,cancel:G}})(),S=(function(){var P,b,G={};function me(X){function J(he,ie){X.postMessage({options:he||{},callback:ie})}X.init=function(ie){var ge=ie.transferControlToOffscreen();X.postMessage({canvas:ge},[ge])},X.fire=function(ie,ge,_e){if(b)return J(ie,null),b;var Ne=Math.random().toString(36).slice(2);return b=h(function(Ke){function Ve(Oe){Oe.data.callback===Ne&&(delete G[Ne],X.removeEventListener("message",Ve),b=null,x.clear(),_e(),Ke())}X.addEventListener("message",Ve),J(ie,Ne),G[Ne]=Ve.bind(null,{data:{callback:Ne}})}),b},X.reset=function(){X.postMessage({reset:!0});for(var ie in G)G[ie](),delete G[ie]}}return function(){if(P)return P;if(!r&&c){var X=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([X])))}catch(J){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",J),null}me(P)}return P}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(P,b){return b?b(P):P}function T(P){return P!=null}function v(P,b,G){return M(P&&T(P[b])?P[b]:E[b],G)}function y(P){return P<0?0:Math.floor(P)}function z(P,b){return Math.floor(Math.random()*(b-P))+P}function U(P){return parseInt(P,16)}function I(P){return P.map(Q)}function Q(P){var b=String(P).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:U(b.substring(0,2)),g:U(b.substring(2,4)),b:U(b.substring(4,6))}}function F(P){var b=v(P,"origin",Object);return b.x=v(b,"x",Number),b.y=v(b,"y",Number),b}function k(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function j(P){var b=P.getBoundingClientRect();P.width=b.width,P.height=b.height}function N(P){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=P,b}function C(P,b,G,me,X,J,he,ie,ge){P.save(),P.translate(b,G),P.rotate(J),P.scale(me,X),P.arc(0,0,1,he,ie,ge),P.restore()}function L(P){var b=P.angle*(Math.PI/180),G=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-b+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function K(P,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var G=b.tick++/b.totalTicks,me=b.x+b.random*b.tiltCos,X=b.y+b.random*b.tiltSin,J=b.wobbleX+b.random*b.tiltCos,he=b.wobbleY+b.random*b.tiltSin;if(P.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-G)+")",P.beginPath(),d&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))P.fill(oe(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(J-me)*.1,Math.abs(he-X)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var ie=Math.PI/10*b.wobble,ge=Math.abs(J-me)*.1,_e=Math.abs(he-X)*.1,Ne=b.shape.bitmap.width*b.scalar,Ke=b.shape.bitmap.height*b.scalar,Ve=new DOMMatrix([Math.cos(ie)*ge,Math.sin(ie)*ge,-Math.sin(ie)*_e,Math.cos(ie)*_e,b.x,b.y]);Ve.multiplySelf(new DOMMatrix(b.shape.matrix));var Oe=P.createPattern(x.transform(b.shape.bitmap),"no-repeat");Oe.setTransform(Ve),P.globalAlpha=1-G,P.fillStyle=Oe,P.fillRect(b.x-Ne/2,b.y-Ke/2,Ne,Ke),P.globalAlpha=1}else if(b.shape==="circle")P.ellipse?P.ellipse(b.x,b.y,Math.abs(J-me)*b.ovalScalar,Math.abs(he-X)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):C(P,b.x,b.y,Math.abs(J-me)*b.ovalScalar,Math.abs(he-X)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var B=Math.PI/2*3,ut=4*b.scalar,Je=8*b.scalar,et=b.x,Fe=b.y,dt=5,Re=Math.PI/dt;dt--;)et=b.x+Math.cos(B)*Je,Fe=b.y+Math.sin(B)*Je,P.lineTo(et,Fe),B+=Re,et=b.x+Math.cos(B)*ut,Fe=b.y+Math.sin(B)*ut,P.lineTo(et,Fe),B+=Re;else P.moveTo(Math.floor(b.x),Math.floor(b.y)),P.lineTo(Math.floor(b.wobbleX),Math.floor(X)),P.lineTo(Math.floor(J),Math.floor(he)),P.lineTo(Math.floor(me),Math.floor(b.wobbleY));return P.closePath(),P.fill(),b.tick<b.totalTicks}function W(P,b,G,me,X){var J=b.slice(),he=P.getContext("2d"),ie,ge,_e=h(function(Ne){function Ke(){ie=ge=null,he.clearRect(0,0,me.width,me.height),x.clear(),X(),Ne()}function Ve(){r&&!(me.width===o.width&&me.height===o.height)&&(me.width=P.width=o.width,me.height=P.height=o.height),!me.width&&!me.height&&(G(P),me.width=P.width,me.height=P.height),he.clearRect(0,0,me.width,me.height),J=J.filter(function(Oe){return K(he,Oe)}),J.length?ie=_.frame(Ve):Ke()}ie=_.frame(Ve),ge=Ke});return{addFettis:function(Ne){return J=J.concat(Ne),_e},canvas:P,promise:_e,reset:function(){ie&&_.cancel(ie),ge&&ge()}}}function te(P,b){var G=!P,me=!!v(b||{},"resize"),X=!1,J=v(b,"disableForReducedMotion",Boolean),he=c&&!!v(b||{},"useWorker"),ie=he?S():null,ge=G?k:j,_e=P&&ie?!!P.__confetti_initialized:!1,Ne=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ke;function Ve(B,ut,Je){for(var et=v(B,"particleCount",y),Fe=v(B,"angle",Number),dt=v(B,"spread",Number),Re=v(B,"startVelocity",Number),D=v(B,"decay",Number),A=v(B,"gravity",Number),se=v(B,"drift",Number),ve=v(B,"colors",I),Se=v(B,"ticks",Number),ye=v(B,"shapes"),We=v(B,"scalar"),Ie=!!v(B,"flat"),ze=F(B),ht=et,be=[],Be=P.width*ze.x,tt=P.height*ze.y;ht--;)be.push(L({x:Be,y:tt,angle:Fe,spread:dt,startVelocity:Re,color:ve[ht%ve.length],shape:ye[z(0,ye.length)],ticks:Se,decay:D,gravity:A,drift:se,scalar:We,flat:Ie}));return Ke?Ke.addFettis(be):(Ke=W(P,be,ge,ut,Je),Ke.promise)}function Oe(B){var ut=J||v(B,"disableForReducedMotion",Boolean),Je=v(B,"zIndex",Number);if(ut&&Ne)return h(function(Re){Re()});G&&Ke?P=Ke.canvas:G&&!P&&(P=N(Je),document.body.appendChild(P)),me&&!_e&&ge(P);var et={width:P.width,height:P.height};ie&&!_e&&ie.init(P),_e=!0,ie&&(P.__confetti_initialized=!0);function Fe(){if(ie){var Re={getBoundingClientRect:function(){if(!G)return P.getBoundingClientRect()}};ge(Re),ie.postMessage({resize:{width:Re.width,height:Re.height}});return}et.width=et.height=null}function dt(){Ke=null,me&&(X=!1,e.removeEventListener("resize",Fe)),G&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,_e=!1)}return me&&!X&&(X=!0,e.addEventListener("resize",Fe,!1)),ie?ie.fire(B,et,dt):Ve(B,et,dt)}return Oe.reset=function(){ie&&ie.reset(),Ke&&Ke.reset()},Oe}var de;function ne(){return de||(de=te(null,{useWorker:!0,resize:!0})),de}function oe(P,b,G,me,X,J,he){var ie=new Path2D(P),ge=new Path2D;ge.addPath(ie,new DOMMatrix(b));var _e=new Path2D;return _e.addPath(ge,new DOMMatrix([Math.cos(he)*X,Math.sin(he)*X,-Math.sin(he)*J,Math.cos(he)*J,G,me])),_e}function H(P){if(!d)throw new Error("path confetti are not supported in this browser");var b,G;typeof P=="string"?b=P:(b=P.path,G=P.matrix);var me=new Path2D(b),X=document.createElement("canvas"),J=X.getContext("2d");if(!G){for(var he=1e3,ie=he,ge=he,_e=0,Ne=0,Ke,Ve,Oe=0;Oe<he;Oe+=2)for(var B=0;B<he;B+=2)J.isPointInPath(me,Oe,B,"nonzero")&&(ie=Math.min(ie,Oe),ge=Math.min(ge,B),_e=Math.max(_e,Oe),Ne=Math.max(Ne,B));Ke=_e-ie,Ve=Ne-ge;var ut=10,Je=Math.min(ut/Ke,ut/Ve);G=[Je,0,0,Je,-Math.round(Ke/2+ie)*Je,-Math.round(Ve/2+ge)*Je]}return{type:"path",path:b,matrix:G}}function fe(P){var b,G=1,me="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?b=P:(b=P.text,G="scalar"in P?P.scalar:G,X="fontFamily"in P?P.fontFamily:X,me="color"in P?P.color:me);var J=10*G,he=""+J+"px "+X,ie=new OffscreenCanvas(J,J),ge=ie.getContext("2d");ge.font=he;var _e=ge.measureText(b),Ne=Math.ceil(_e.actualBoundingBoxRight+_e.actualBoundingBoxLeft),Ke=Math.ceil(_e.actualBoundingBoxAscent+_e.actualBoundingBoxDescent),Ve=2,Oe=_e.actualBoundingBoxLeft+Ve,B=_e.actualBoundingBoxAscent+Ve;Ne+=Ve+Ve,Ke+=Ve+Ve,ie=new OffscreenCanvas(Ne,Ke),ge=ie.getContext("2d"),ge.font=he,ge.fillStyle=me,ge.fillText(b,Oe,B);var ut=1/G;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[ut,0,0,ut,-Ne*ut/2,-Ke*ut/2]}}n.exports=function(){return ne().apply(this,arguments)},n.exports.reset=function(){ne().reset()},n.exports.create=te,n.exports.shapeFromPath=H,n.exports.shapeFromText=fe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),gf,!1);const Q1=gf.exports;gf.exports.create;function J1({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:d,totalCarbon:f}){if(ft.useEffect(()=>{if(s)try{Q1({particleCount:60,spread:70,origin:{y:.6},colors:["#EAEAE6","#B8865A","#00FF66","#7B8C65"]})}catch{}},[s]),!s)return null;const m=()=>{Ha(),window.print()};return p.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:p.jsxs("div",{className:"bg-yzy-black border-2 border-yzy-bone w-full max-w-4xl my-auto p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[p.jsxs("div",{className:"flex items-center justify-between border-b-2 border-yzy-bone pb-4",children:[p.jsxs("div",{className:"flex flex-col",children:[p.jsx("span",{className:"text-[10px] tracking-widest text-yzy-ash uppercase font-bold",children:"YZY INFRASTRUCTURE ARCHITECTURAL BLUEPRINT // SPECIFICATION CAD-01"}),p.jsxs("h2",{className:"font-display text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5",children:[n.name," — ",n.subtitle]})]}),p.jsx("button",{onClick:()=>{Gt(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:p.jsx(zl,{className:"w-5 h-5"})})]}),p.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"PROJECT CODE"}),p.jsx("span",{className:"font-bold text-white",children:n.code})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"TOTAL FOOTPRINT"}),p.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"DIMENSIONS"}),p.jsx("span",{className:"font-bold text-white",children:n.diameter})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"OCCUPANCY"}),p.jsx("span",{className:"font-bold text-white",children:n.occupancy})]})]}),p.jsxs("div",{className:"flex flex-col gap-2",children:[p.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase font-bold border-b border-yzy-slate pb-1",children:"01. MATERIAL & LAYER ARCHITECTURE"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs",children:Object.entries(r).map(([h,x])=>{const _=h==="utilities"?c.find(S=>S.id===x):o.find(S=>S.id===x);return p.jsxs("div",{className:"p-2.5 bg-yzy-obsidian border border-yzy-slate/60 flex flex-col justify-between",children:[p.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold",children:h.toUpperCase()}),p.jsx("span",{className:"font-bold text-yzy-bone text-xs mt-0.5",children:(_==null?void 0:_.name)||(_==null?void 0:_.shortName)}),p.jsx("span",{className:"text-[10px] text-yzy-chalk/80 mt-1 line-clamp-1",children:(_==null?void 0:_.tagline)||(_==null?void 0:_.description)})]},h)})})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"WIND RESISTANCE"}),p.jsx("span",{className:"font-bold text-yzy-bone",children:n.windResistance})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"SEISMIC ZONE"}),p.jsx("span",{className:"font-bold text-yzy-bone",children:n.seismicZone})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"THERMAL STRATEGY"}),p.jsx("span",{className:"font-bold text-yzy-bone",children:n.thermalComfort})]})]}),p.jsxs("div",{className:"bg-yzy-bone text-yzy-black p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"AUTHENTICATED PROJECT ESTIMATE"}),p.jsxs("span",{className:"text-2xl font-black",children:["$",d.toLocaleString()," TOTAL TURNKEY DIY"]})]}),p.jsxs("div",{className:"text-right",children:[p.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"NET EMBODIED CARBON"}),p.jsx("span",{className:"text-lg font-bold",children:f<=0?`${f} kg CO2 (NET SINK)`:`+${f} kg CO2`})]})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[p.jsx("span",{className:"text-[10px] text-yzy-ash uppercase tracking-wider",children:"OPEN-SOURCE COMMUNITY ARCHITECTURE LICENSE // FREE TO DISTRIBUTE"}),p.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[p.jsxs("button",{onClick:m,className:"flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-xs hover:bg-yzy-bone transition-all",children:[p.jsx(c0,{className:"w-4 h-4"}),p.jsx("span",{children:"PRINT / SAVE PDF"})]}),p.jsx("button",{onClick:()=>{Gt(),e()},className:"px-4 py-2.5 bg-yzy-charcoal border border-yzy-slate text-xs text-yzy-chalk",children:"DISMISS"})]})]})]})})}function eb({isOpen:s,onClose:e}){return s?p.jsx("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:p.jsxs("div",{className:"bg-yzy-black border border-yzy-bone/80 w-full max-w-3xl my-auto p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yzy-neon animate-pulse"}),p.jsx("span",{className:"text-xs font-bold tracking-widest text-yzy-bone uppercase",children:"THE MANIFESTO // YZY + DONDA EARTH INITIATIVE"})]}),p.jsx("button",{onClick:()=>{Gt(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:p.jsx(zl,{className:"w-5 h-5"})})]}),p.jsxs("div",{className:"flex flex-col gap-3",children:[p.jsxs("h2",{className:"font-display text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight",children:["SHELTER IS A BIRTHRIGHT. ",p.jsx("br",{}),"NOT A 30-YEAR PRISON SENTENCE."]}),p.jsx("p",{className:"text-xs sm:text-sm text-yzy-chalk/90 leading-relaxed font-sans",children:"The modern housing machine is broken. It forces human beings into debt slavery for toxic drywall boxes that rot in 40 years. We are returning to ancient monolithic permanence powered by computational engineering, raw subsoil, mycelium, and solar autonomy."})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[p.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[p.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[p.jsx(e0,{className:"w-4 h-4 text-yzy-neon"}),p.jsx("span",{children:"01. 90% ON-SITE HARVESTING"})]}),p.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"We build directly with the dirt beneath our feet. Subsoil compressed at 2,000 PSI makes permanent stone blocks for cents per unit. Zero timber destruction. Zero cement emissions."})]}),p.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[p.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[p.jsx(N0,{className:"w-4 h-4 text-yzy-electric"}),p.jsx("span",{children:"02. DECENTRALIZED SOVEREIGNTY"})]}),p.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every dome and village features closed-loop solar generation, atmospheric rainwater harvesting, and bio-gas digestion. Zero utility bills for life."})]}),p.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[p.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[p.jsx(p0,{className:"w-4 h-4 text-yzy-earth"}),p.jsx("span",{children:"03. 200+ YEAR BRUTALIST LIFE"})]}),p.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Catenary arches and thick monolithic earth walls cannot catch fire, cannot rot, and withstand Category 5 hurricanes and earthquakes. Built for generations."})]}),p.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[p.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[p.jsx(n0,{className:"w-4 h-4 text-yzy-clay"}),p.jsx("span",{children:"04. OPEN-SOURCE COMMUNITY POWER"})]}),p.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every blueprint, mix formula, and CAD file is free and open-source. Anyone with a shovel, manual block press, and community willpower can build a sanctuary."})]})]}),p.jsxs("div",{className:"pt-4 border-t border-yzy-slate flex items-center justify-between",children:[p.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase",children:"DESIGNED FOR HUMANITY // POWERED BY EZY INFRA"}),p.jsx("button",{onClick:()=>{Gt(),e()},className:"px-5 py-2 bg-yzy-bone text-yzy-black font-bold text-xs hover:bg-white tracking-wider",children:"ENTER THE ECOSYSTEM"})]})]})}):null}function tb(){var Q;const[s,e]=ft.useState("builder"),[n,r]=ft.useState(Tu[0]),o=Si[Tu[0].id]||Si.yzy_mono_dome,c={};o.forEach(F=>{c[F.id]=F.defaultMaterial});const[d,f]=ft.useState(c),[m,h]=ft.useState(((Q=o[1])==null?void 0:Q.id)||o[0].id),[x,_]=ft.useState(!1),[S,E]=ft.useState(!1),[M,T]=ft.useState(!1),v=ft.useMemo(()=>[...Jo,...Qd],[]),y=F=>{var N;r(F);const k=Si[F.id]||Si.yzy_mono_dome,j={};k.forEach(C=>{j[C.id]=C.defaultMaterial}),f(j),h(((N=k[1])==null?void 0:N.id)||k[0].id)},z=(F,k)=>{f(j=>({...j,[F]:k}))},{totalCost:U,totalCarbon:I}=ft.useMemo(()=>{const F=Si[n.id]||Si.yzy_mono_dome;let k=0,j=0;return F.forEach(N=>{const C=d[N.id]||N.defaultMaterial,L=v.find(W=>W.id===C),K=Au.find(W=>W.id===C);if(K)k+=K.cost,j+=K.carbonImpact;else if(L){const W=N.surfaceAreaSqft*L.costPerSqFt,te=N.surfaceAreaSqft*.1*L.carbonImpact;k+=W,j+=te}}),k+=650,{totalCost:Math.round(k),totalCarbon:Math.round(j)}},[n,d,v]);return p.jsxs("div",{className:"min-h-screen bg-yzy-black text-yzy-bone flex flex-col selection:bg-yzy-bone selection:text-yzy-black",children:[p.jsx(P0,{activeTab:s,setActiveTab:e,totalCost:U,totalCarbon:I,onOpenCostBreakdown:()=>_(!0),onOpenBlueprintExport:()=>E(!0),onOpenVisionModal:()=>T(!0)}),p.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 pb-24 flex flex-col gap-6",children:[s==="builder"&&p.jsxs("div",{className:"flex flex-col gap-6",children:[p.jsx(G1,{infrastructures:Tu,selectedInfra:n,onSelectInfra:y}),p.jsxs("div",{className:"flex flex-col gap-2",children:[p.jsx(V1,{infrastructure:n,selectedPartMaterials:d,activePartId:m,onSelectPart:F=>h(F),materialsList:Jo}),p.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate/60 p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"ACTIVE MODEL"}),p.jsx("span",{className:"font-bold text-white",children:n.name})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"FOOTPRINT"}),p.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"LIVE ESTIMATED COST"}),p.jsxs("span",{className:"font-bold text-yzy-neon",children:["$",U.toLocaleString()]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"NET CARBON IMPACT"}),p.jsxs("span",{className:"font-bold text-yzy-neon",children:[I," kg CO2"]})]})]})]}),p.jsx(j1,{infrastructure:n,selectedPartMaterials:d,onSelectPartMaterial:z,activePartId:m,setActivePartId:h,materialsList:Jo})]}),s==="materials"&&p.jsx(W1,{materialsList:Jo}),s==="furniture"&&p.jsx(q1,{}),s==="tutorials"&&p.jsx(Y1,{}),s==="sourcing"&&p.jsx(ng,{}),s==="benchmarks"&&p.jsx("div",{className:"flex flex-col gap-6 py-2",children:p.jsx(ng,{})})]}),p.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-40 bg-yzy-obsidian/95 backdrop-blur-md border-t border-yzy-slate/80 p-2 sm:hidden flex items-center justify-around font-mono text-[10px]",children:[p.jsxs("button",{onClick:()=>{Gt(),e("builder")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="builder"?"text-white font-bold":"text-yzy-ash"}`,children:[p.jsx(ag,{className:"w-4 h-4"}),p.jsx("span",{children:"MATRIX"})]}),p.jsxs("button",{onClick:()=>{Gt(),e("materials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="materials"?"text-white font-bold":"text-yzy-ash"}`,children:[p.jsx(Jd,{className:"w-4 h-4"}),p.jsx("span",{children:"MATERIALS"})]}),p.jsxs("button",{onClick:()=>{Gt(),e("furniture")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="furniture"?"text-white font-bold":"text-yzy-ash"}`,children:[p.jsx(og,{className:"w-4 h-4"}),p.jsx("span",{children:"FURNITURE"})]}),p.jsxs("button",{onClick:()=>{Gt(),e("tutorials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="tutorials"?"text-white font-bold":"text-yzy-ash"}`,children:[p.jsx(sg,{className:"w-4 h-4"}),p.jsx("span",{children:"GUIDES"})]}),p.jsxs("button",{onClick:()=>{Ha(),_(!0)},className:"flex flex-col items-center gap-1 py-1 px-1.5 text-yzy-neon font-bold",children:[p.jsx(lg,{className:"w-4 h-4"}),p.jsxs("span",{children:["$",U.toLocaleString()]})]})]}),p.jsx(K1,{isOpen:x,onClose:()=>_(!1),infrastructure:n,selectedMaterials:d,materialsList:v,utilityPackages:Au,totalCost:U,totalCarbon:I}),p.jsx(J1,{isOpen:S,onClose:()=>E(!1),infrastructure:n,selectedMaterials:d,materialsList:v,utilityPackages:Au,totalCost:U,totalCarbon:I}),p.jsx(eb,{isOpen:M,onClose:()=>T(!1)})]})}Lx.createRoot(document.getElementById("root")).render(p.jsx(Tx.StrictMode,{children:p.jsx(tb,{})}));
