(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function ag(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},La={},bu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Nx(){if(Hp)return vt;Hp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=_&&b[_]||b["@@iterator"],typeof b=="function"?b:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function v(b,G,he){this.props=b,this.context=G,this.refs=w,this.updater=he||M}v.prototype.isReactComponent={},v.prototype.setState=function(b,G){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,G,"setState")},v.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function y(){}y.prototype=v.prototype;function U(b,G,he){this.props=b,this.context=G,this.refs=w,this.updater=he||M}var D=U.prototype=new y;D.constructor=U,E(D,v.prototype),D.isPureReactComponent=!0;var N=Array.isArray,K=Object.prototype.hasOwnProperty,k={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function H(b,G,he){var W,te={},pe=null,oe=null;if(G!=null)for(W in G.ref!==void 0&&(oe=G.ref),G.key!==void 0&&(pe=""+G.key),G)K.call(G,W)&&!z.hasOwnProperty(W)&&(te[W]=G[W]);var ge=arguments.length-2;if(ge===1)te.children=he;else if(1<ge){for(var Se=Array(ge),Re=0;Re<ge;Re++)Se[Re]=arguments[Re+2];te.children=Se}if(b&&b.defaultProps)for(W in ge=b.defaultProps,ge)te[W]===void 0&&(te[W]=ge[W]);return{$$typeof:s,type:b,key:pe,ref:oe,props:te,_owner:k.current}}function R(b,G){return{$$typeof:s,type:b.type,key:G,ref:b.ref,props:b.props,_owner:b._owner}}function A(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function P(b){var G={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(he){return G[he]})}var q=/\/+/g;function X(b,G){return typeof b=="object"&&b!==null&&b.key!=null?P(""+b.key):G.toString(36)}function ne(b,G,he,W,te){var pe=typeof b;(pe==="undefined"||pe==="boolean")&&(b=null);var oe=!1;if(b===null)oe=!0;else switch(pe){case"string":case"number":oe=!0;break;case"object":switch(b.$$typeof){case s:case e:oe=!0}}if(oe)return oe=b,te=te(oe),b=W===""?"."+X(oe,0):W,N(te)?(he="",b!=null&&(he=b.replace(q,"$&/")+"/"),ne(te,G,he,"",function(Re){return Re})):te!=null&&(A(te)&&(te=R(te,he+(!te.key||oe&&oe.key===te.key?"":(""+te.key).replace(q,"$&/")+"/")+b)),G.push(te)),1;if(oe=0,W=W===""?".":W+":",N(b))for(var ge=0;ge<b.length;ge++){pe=b[ge];var Se=W+X(pe,ge);oe+=ne(pe,G,he,Se,te)}else if(Se=S(b),typeof Se=="function")for(b=Se.call(b),ge=0;!(pe=b.next()).done;)pe=pe.value,Se=W+X(pe,ge++),oe+=ne(pe,G,he,Se,te);else if(pe==="object")throw G=String(b),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return oe}function de(b,G,he){if(b==null)return b;var W=[],te=0;return ne(b,W,"","",function(pe){return G.call(he,pe,te++)}),W}function ee(b){if(b._status===-1){var G=b._result;G=G(),G.then(function(he){(b._status===0||b._status===-1)&&(b._status=1,b._result=he)},function(he){(b._status===0||b._status===-1)&&(b._status=2,b._result=he)}),b._status===-1&&(b._status=0,b._result=G)}if(b._status===1)return b._result.default;throw b._result}var re={current:null},B={transition:null},ae={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:de,forEach:function(b,G,he){de(b,function(){G.apply(this,arguments)},he)},count:function(b){var G=0;return de(b,function(){G++}),G},toArray:function(b){return de(b,function(G){return G})||[]},only:function(b){if(!A(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},vt.Component=v,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=U,vt.StrictMode=r,vt.Suspense=p,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,vt.act=L,vt.cloneElement=function(b,G,he){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var W=E({},b.props),te=b.key,pe=b.ref,oe=b._owner;if(G!=null){if(G.ref!==void 0&&(pe=G.ref,oe=k.current),G.key!==void 0&&(te=""+G.key),b.type&&b.type.defaultProps)var ge=b.type.defaultProps;for(Se in G)K.call(G,Se)&&!z.hasOwnProperty(Se)&&(W[Se]=G[Se]===void 0&&ge!==void 0?ge[Se]:G[Se])}var Se=arguments.length-2;if(Se===1)W.children=he;else if(1<Se){ge=Array(Se);for(var Re=0;Re<Se;Re++)ge[Re]=arguments[Re+2];W.children=ge}return{$$typeof:s,type:b.type,key:te,ref:pe,props:W,_owner:oe}},vt.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:c,_context:b},b.Consumer=b},vt.createElement=H,vt.createFactory=function(b){var G=H.bind(null,b);return G.type=b,G},vt.createRef=function(){return{current:null}},vt.forwardRef=function(b){return{$$typeof:f,render:b}},vt.isValidElement=A,vt.lazy=function(b){return{$$typeof:x,_payload:{_status:-1,_result:b},_init:ee}},vt.memo=function(b,G){return{$$typeof:g,type:b,compare:G===void 0?null:G}},vt.startTransition=function(b){var G=B.transition;B.transition={};try{b()}finally{B.transition=G}},vt.unstable_act=L,vt.useCallback=function(b,G){return re.current.useCallback(b,G)},vt.useContext=function(b){return re.current.useContext(b)},vt.useDebugValue=function(){},vt.useDeferredValue=function(b){return re.current.useDeferredValue(b)},vt.useEffect=function(b,G){return re.current.useEffect(b,G)},vt.useId=function(){return re.current.useId()},vt.useImperativeHandle=function(b,G,he){return re.current.useImperativeHandle(b,G,he)},vt.useInsertionEffect=function(b,G){return re.current.useInsertionEffect(b,G)},vt.useLayoutEffect=function(b,G){return re.current.useLayoutEffect(b,G)},vt.useMemo=function(b,G){return re.current.useMemo(b,G)},vt.useReducer=function(b,G,he){return re.current.useReducer(b,G,he)},vt.useRef=function(b){return re.current.useRef(b)},vt.useState=function(b){return re.current.useState(b)},vt.useSyncExternalStore=function(b,G,he){return re.current.useSyncExternalStore(b,G,he)},vt.useTransition=function(){return re.current.useTransition()},vt.version="18.3.1",vt}var Vp;function Jd(){return Vp||(Vp=1,bu.exports=Nx()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Ix(){if(Gp)return La;Gp=1;var s=Jd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var x,_={},S=null,M=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!c.hasOwnProperty(x)&&(_[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)_[x]===void 0&&(_[x]=p[x]);return{$$typeof:e,type:f,key:S,ref:M,props:_,_owner:o.current}}return La.Fragment=n,La.jsx=u,La.jsxs=u,La}var jp;function Lx(){return jp||(jp=1,Mu.exports=Ix()),Mu.exports}var h=Lx(),et=Jd();const Px=ag(et);var tl={},wu={exports:{}},Pn={},Tu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Dx(){return Wp||(Wp=1,(function(s){function e(B,ae){var L=B.length;B.push(ae);e:for(;0<L;){var b=L-1>>>1,G=B[b];if(0<o(G,ae))B[b]=ae,B[L]=G,L=b;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],L=B.pop();if(L!==ae){B[0]=L;e:for(var b=0,G=B.length,he=G>>>1;b<he;){var W=2*(b+1)-1,te=B[W],pe=W+1,oe=B[pe];if(0>o(te,L))pe<G&&0>o(oe,te)?(B[b]=oe,B[pe]=L,b=pe):(B[b]=te,B[W]=L,b=W);else if(pe<G&&0>o(oe,L))B[b]=oe,B[pe]=L,b=pe;else break e}}return ae}function o(B,ae){var L=B.sortIndex-ae.sortIndex;return L!==0?L:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],g=[],x=1,_=null,S=3,M=!1,E=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ae=n(g);ae!==null;){if(ae.callback===null)r(g);else if(ae.startTime<=B)r(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(g)}}function N(B){if(w=!1,D(B),!E)if(n(p)!==null)E=!0,ee(K);else{var ae=n(g);ae!==null&&re(N,ae.startTime-B)}}function K(B,ae){E=!1,w&&(w=!1,y(H),H=-1),M=!0;var L=S;try{for(D(ae),_=n(p);_!==null&&(!(_.expirationTime>ae)||B&&!P());){var b=_.callback;if(typeof b=="function"){_.callback=null,S=_.priorityLevel;var G=b(_.expirationTime<=ae);ae=s.unstable_now(),typeof G=="function"?_.callback=G:_===n(p)&&r(p),D(ae)}else r(p);_=n(p)}if(_!==null)var he=!0;else{var W=n(g);W!==null&&re(N,W.startTime-ae),he=!1}return he}finally{_=null,S=L,M=!1}}var k=!1,z=null,H=-1,R=5,A=-1;function P(){return!(s.unstable_now()-A<R)}function q(){if(z!==null){var B=s.unstable_now();A=B;var ae=!0;try{ae=z(!0,B)}finally{ae?X():(k=!1,z=null)}}else k=!1}var X;if(typeof U=="function")X=function(){U(q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,de=ne.port2;ne.port1.onmessage=q,X=function(){de.postMessage(null)}}else X=function(){v(q,0)};function ee(B){z=B,k||(k=!0,X())}function re(B,ae){H=v(function(){B(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ee(K))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var L=S;S=ae;try{return B()}finally{S=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var L=S;S=B;try{return ae()}finally{S=L}},s.unstable_scheduleCallback=function(B,ae,L){var b=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?b+L:b):L=b,B){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,B={id:x++,callback:ae,priorityLevel:B,startTime:L,expirationTime:G,sortIndex:-1},L>b?(B.sortIndex=L,e(g,B),n(p)===null&&B===n(g)&&(w?(y(H),H=-1):w=!0,re(N,L-b))):(B.sortIndex=G,e(p,B),E||M||(E=!0,ee(K))),B},s.unstable_shouldYield=P,s.unstable_wrapCallback=function(B){var ae=S;return function(){var L=S;S=ae;try{return B.apply(this,arguments)}finally{S=L}}}})(Au)),Au}var Xp;function Ux(){return Xp||(Xp=1,Tu.exports=Dx()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Ox(){if(qp)return Pn;qp=1;var s=Jd(),e=Ux();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function S(t){return p.call(_,t)?!0:p.call(x,t)?!1:g.test(t)?_[t]=!0:(x[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,a,l,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(y,U);v[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(y,U);v[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(y,U);v[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,a,l){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,l)&&(a=null),l||d===null?S(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),P=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var L=Object.assign,b;function G(t){if(b===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+t}var he=!1;function W(t,i){if(!t||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var l=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){l=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){l=ce}t()}}catch(ce){if(ce&&l&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),m=l.stack.split(`
`),T=d.length-1,F=m.length-1;1<=T&&0<=F&&d[T]!==m[F];)F--;for(;1<=T&&0<=F;T--,F--)if(d[T]!==m[F]){if(T!==1||F!==1)do if(T--,F--,0>F||d[T]!==m[F]){var j=`
`+d[T].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=T&&0<=F);break}}}finally{he=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?G(t):""}function te(t){switch(t.tag){case 5:return G(t.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return t=W(t.type,!1),t;case 11:return t=W(t.type.render,!1),t;case 1:return t=W(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case k:return"Portal";case R:return"Profiler";case H:return"StrictMode";case X:return"Suspense";case ne:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}function oe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(t){var i=Se(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){l=""+T,m.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ge(t){t._valueTracker||(t._valueTracker=Re(t))}function ze(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Se(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function rt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function V(t,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function _t(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ie(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function We(t,i){Ie(t,i);var a=ge(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ct(t,i.type,a):i.hasOwnProperty("defaultValue")&&ct(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Pe(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function ct(t,i,a){(i!=="number"||rt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ue=Array.isArray;function O(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function C(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ue(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ge(a)}}function xe(t,i){var a=ge(i.value),l=ge(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ye(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,Fe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ht(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){He.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function tt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function st(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=tt(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var je=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(t,i){if(i){if(je[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ut(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function $(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,me=null,ve=null;function ke(t){if(t=ya(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),Le(t.stateNode,t.type,i))}}function Oe(t){me?ve?ve.push(t):ve=[t]:me=t}function dt(){if(me){var t=me,i=ve;if(ve=me=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function kt(t,i){return t(i)}function Kt(){}var bt=!1;function Tn(t,i,a){if(bt)return t(i,a);bt=!0;try{return kt(t,i,a)}finally{bt=!1,(me!==null||ve!==null)&&(Kt(),dt())}}function _n(t,i){var a=t.stateNode;if(a===null)return null;var l=go(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var ts=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){ts=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{ts=!1}function Ai(t,i,a,l,d,m,T,F,j){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(Me){this.onError(Me)}}var Ci=!1,Ar=null,Cr=!1,Zi=null,$a={onError:function(t){Ci=!0,Ar=t}};function ns(t,i,a,l,d,m,T,F,j){Ci=!1,Ar=null,Ai.apply($a,arguments)}function Za(t,i,a,l,d,m,T,F,j){if(ns.apply(this,arguments),Ci){if(Ci){var ce=Ar;Ci=!1,Ar=null}else throw Error(n(198));Cr||(Cr=!0,Zi=ce)}}function mi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ka(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qa(t){if(mi(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Qa(d),t;if(m===l)return Qa(d),i;m=m.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=m;else{for(var T=!1,F=d.child;F;){if(F===a){T=!0,a=d,l=m;break}if(F===l){T=!0,l=d,a=m;break}F=F.sibling}if(!T){for(F=m.child;F;){if(F===a){T=!0,a=m,l=d;break}if(F===l){T=!0,l=m,a=d;break}F=F.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function I(t){return t=Wl(t),t!==null?Z(t):null}function Z(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Z(t);if(i!==null)return i;t=t.sibling}return null}var ue=e.unstable_scheduleCallback,fe=e.unstable_cancelCallback,Q=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Te=e.unstable_now,Ze=e.unstable_getCurrentPriorityLevel,Ye=e.unstable_ImmediatePriority,at=e.unstable_UserBlockingPriority,lt=e.unstable_NormalPriority,Ke=e.unstable_LowPriority,Et=e.unstable_IdlePriority,Rt=null,St=null;function fn(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Rt,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:At,Je=Math.log,ti=Math.LN2;function At(t){return t>>>=0,t===0?32:31-(Je(t)/ti|0)|0}var hn=64,ni=4194304;function Qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,m=t.pingedLanes,T=a&268435455;if(T!==0){var F=T&~d;F!==0?l=Qt(F):(m&=T,m!==0&&(l=Qt(m)))}else T=a&~d,T!==0?l=Qt(T):m!==0&&(l=Qt(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-pt(i),d=1<<a,l|=t[a],i&=~d;return l}function Ut(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var T=31-pt(m),F=1<<T,j=d[T];j===-1?((F&a)===0||(F&l)!==0)&&(d[T]=Ut(F,i)):j<=i&&(t.expiredLanes|=F),m&=~F}}function Ri(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sn(){var t=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),t}function Wn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function An(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-pt(i),t[i]=a}function Ja(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-pt(a),m=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~m}}function Xl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-pt(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var Lt=0;function vf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var _f,ql,Sf,Ef,Mf,Yl=!1,eo=[],Ki=null,Qi=null,Ji=null,ta=new Map,na=new Map,er=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(i.pointerId)}}function ia(t,i,a,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Jg(t,i,a,l,d){switch(i){case"focusin":return Ki=ia(Ki,t,i,a,l,d),!0;case"dragenter":return Qi=ia(Qi,t,i,a,l,d),!0;case"mouseover":return Ji=ia(Ji,t,i,a,l,d),!0;case"pointerover":var m=d.pointerId;return ta.set(m,ia(ta.get(m)||null,t,i,a,l,d)),!0;case"gotpointercapture":return m=d.pointerId,na.set(m,ia(na.get(m)||null,t,i,a,l,d)),!0}return!1}function wf(t){var i=Rr(t.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ka(a),i!==null){t.blockedOn=i,Mf(t.priority,function(){Sf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Nt=l,a.target.dispatchEvent(l),Nt=null}else return i=ya(a),i!==null&&ql(i),t.blockedOn=a,!1;i.shift()}return!0}function Tf(t,i,a){to(t)&&a.delete(i)}function ey(){Yl=!1,Ki!==null&&to(Ki)&&(Ki=null),Qi!==null&&to(Qi)&&(Qi=null),Ji!==null&&to(Ji)&&(Ji=null),ta.forEach(Tf),na.forEach(Tf)}function ra(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ey)))}function sa(t){function i(d){return ra(d,t)}if(0<eo.length){ra(eo[0],t);for(var a=1;a<eo.length;a++){var l=eo[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Ki!==null&&ra(Ki,t),Qi!==null&&ra(Qi,t),Ji!==null&&ra(Ji,t),ta.forEach(i),na.forEach(i),a=0;a<er.length;a++)l=er[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&er.shift()}var is=N.ReactCurrentBatchConfig,no=!0;function ty(t,i,a,l){var d=Lt,m=is.transition;is.transition=null;try{Lt=1,$l(t,i,a,l)}finally{Lt=d,is.transition=m}}function ny(t,i,a,l){var d=Lt,m=is.transition;is.transition=null;try{Lt=4,$l(t,i,a,l)}finally{Lt=d,is.transition=m}}function $l(t,i,a,l){if(no){var d=Zl(t,i,a,l);if(d===null)hc(t,i,l,io,a),bf(t,l);else if(Jg(d,t,i,a,l))l.stopPropagation();else if(bf(t,l),i&4&&-1<Qg.indexOf(t)){for(;d!==null;){var m=ya(d);if(m!==null&&_f(m),m=Zl(t,i,a,l),m===null&&hc(t,i,l,io,a),m===d)break;d=m}d!==null&&l.stopPropagation()}else hc(t,i,l,null,a)}}var io=null;function Zl(t,i,a,l){if(io=null,t=$(l),t=Rr(t),t!==null)if(i=mi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ka(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return io=t,null}function Af(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Ye:return 1;case at:return 4;case lt:case Ke:return 16;case Et:return 536870912;default:return 16}default:return 16}}var tr=null,Kl=null,ro=null;function Cf(){if(ro)return ro;var t,i=Kl,a=i.length,l,d="value"in tr?tr.value:tr.textContent,m=d.length;for(t=0;t<a&&i[t]===d[t];t++);var T=a-t;for(l=1;l<=T&&i[a-l]===d[m-l];l++);return ro=d.slice(t,1<l?1-l:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function Rf(){return!1}function zn(t){function i(a,l,d,m,T){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(a=t[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ao:Rf,this.isPropagationStopped=Rf,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=zn(rs),aa=L({},rs,{view:0,detail:0}),iy=zn(aa),Jl,ec,oa,oo=L({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Jl=t.screenX-oa.screenX,ec=t.screenY-oa.screenY):ec=Jl=0,oa=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),Nf=zn(oo),ry=L({},oo,{dataTransfer:0}),sy=zn(ry),ay=L({},aa,{relatedTarget:0}),tc=zn(ay),oy=L({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=zn(oy),cy=L({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uy=zn(cy),dy=L({},rs,{data:0}),If=zn(dy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=py[t])?!!i[t]:!1}function nc(){return my}var gy=L({},aa,{key:function(t){if(t.key){var i=fy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yy=zn(gy),xy=L({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=zn(xy),vy=L({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),_y=zn(vy),Sy=L({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=zn(Sy),My=L({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),by=zn(My),wy=[9,13,27,32],ic=f&&"CompositionEvent"in window,la=null;f&&"documentMode"in document&&(la=document.documentMode);var Ty=f&&"TextEvent"in window&&!la,Pf=f&&(!ic||la&&8<la&&11>=la),Df=" ",Uf=!1;function Of(t,i){switch(t){case"keyup":return wy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function Ay(t,i){switch(t){case"compositionend":return zf(i);case"keypress":return i.which!==32?null:(Uf=!0,Df);case"textInput":return t=i.data,t===Df&&Uf?null:t;default:return null}}function Cy(t,i){if(ss)return t==="compositionend"||!ic&&Of(t,i)?(t=Cf(),ro=Kl=tr=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pf&&i.locale!=="ko"?null:i.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ry[t.type]:i==="textarea"}function Ff(t,i,a,l){Oe(l),i=ho(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ca=null,ua=null;function Ny(t){ih(t,0)}function lo(t){var i=us(t);if(ze(i))return t}function Iy(t,i){if(t==="change")return i}var Bf=!1;if(f){var rc;if(f){var sc="oninput"in document;if(!sc){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),sc=typeof Hf.oninput=="function"}rc=sc}else rc=!1;Bf=rc&&(!document.documentMode||9<document.documentMode)}function Vf(){ca&&(ca.detachEvent("onpropertychange",Gf),ua=ca=null)}function Gf(t){if(t.propertyName==="value"&&lo(ua)){var i=[];Ff(i,ua,t,$(t)),Tn(Ny,i)}}function Ly(t,i,a){t==="focusin"?(Vf(),ca=i,ua=a,ca.attachEvent("onpropertychange",Gf)):t==="focusout"&&Vf()}function Py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lo(ua)}function Dy(t,i){if(t==="click")return lo(i)}function Uy(t,i){if(t==="input"||t==="change")return lo(i)}function Oy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:Oy;function da(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!p.call(i,d)||!ii(t[d],i[d]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,i){var a=jf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function Xf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qf(){for(var t=window,i=rt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=rt(t.document)}return i}function ac(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function zy(t){var i=qf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Xf(a.ownerDocument.documentElement,a)){if(l!==null&&ac(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!t.extend&&m>l&&(d=l,l=m,m=d),d=Wf(a,m);var T=Wf(a,l);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ky=f&&"documentMode"in document&&11>=document.documentMode,as=null,oc=null,fa=null,lc=!1;function Yf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lc||as==null||as!==rt(l)||(l=as,"selectionStart"in l&&ac(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&da(fa,l)||(fa=l,l=ho(oc,"onSelect"),0<l.length&&(i=new Ql("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=as)))}function co(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var os={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},cc={},$f={};f&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function uo(t){if(cc[t])return cc[t];if(!os[t])return t;var i=os[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in $f)return cc[t]=i[a];return t}var Zf=uo("animationend"),Kf=uo("animationiteration"),Qf=uo("animationstart"),Jf=uo("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,i){eh.set(t,i),c(i,[t])}for(var uc=0;uc<th.length;uc++){var dc=th[uc],Fy=dc.toLowerCase(),By=dc[0].toUpperCase()+dc.slice(1);nr(Fy,"on"+By)}nr(Zf,"onAnimationEnd"),nr(Kf,"onAnimationIteration"),nr(Qf,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Jf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function nh(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Za(l,i,void 0,t),t.currentTarget=null}function ih(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var T=l.length-1;0<=T;T--){var F=l[T],j=F.instance,ce=F.currentTarget;if(F=F.listener,j!==m&&d.isPropagationStopped())break e;nh(d,F,ce),m=j}else for(T=0;T<l.length;T++){if(F=l[T],j=F.instance,ce=F.currentTarget,F=F.listener,j!==m&&d.isPropagationStopped())break e;nh(d,F,ce),m=j}}}if(Cr)throw t=Zi,Cr=!1,Zi=null,t}function Ft(t,i){var a=i[vc];a===void 0&&(a=i[vc]=new Set);var l=t+"__bubble";a.has(l)||(rh(i,t,2,!1),a.add(l))}function fc(t,i,a){var l=0;i&&(l|=4),rh(a,t,l,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[fo]){t[fo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Hy.has(a)||fc(a,!1,t),fc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fo]||(i[fo]=!0,fc("selectionchange",!1,i))}}function rh(t,i,a,l){switch(Af(i)){case 1:var d=ty;break;case 4:d=ny;break;default:d=$l}a=d.bind(null,i,a,t),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function hc(t,i,a,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var F=l.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(T===4)for(T=l.return;T!==null;){var j=T.tag;if((j===3||j===4)&&(j=T.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;T=T.return}for(;F!==null;){if(T=Rr(F),T===null)return;if(j=T.tag,j===5||j===6){l=m=T;continue e}F=F.parentNode}}l=l.return}Tn(function(){var ce=m,Me=$(a),we=[];e:{var Ee=eh.get(t);if(Ee!==void 0){var Be=Ql,Xe=t;switch(t){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":Be=yy;break;case"focusin":Xe="focus",Be=tc;break;case"focusout":Xe="blur",Be=tc;break;case"beforeblur":case"afterblur":Be=tc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=_y;break;case Zf:case Kf:case Qf:Be=ly;break;case Jf:Be=Ey;break;case"scroll":Be=iy;break;case"wheel":Be=by;break;case"copy":case"cut":case"paste":Be=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Lf}var $e=(i&4)!==0,qt=!$e&&t==="scroll",ie=$e?Ee!==null?Ee+"Capture":null:Ee;$e=[];for(var Y=ce,se;Y!==null;){se=Y;var Ae=se.stateNode;if(se.tag===5&&Ae!==null&&(se=Ae,ie!==null&&(Ae=_n(Y,ie),Ae!=null&&$e.push(ma(Y,Ae,se)))),qt)break;Y=Y.return}0<$e.length&&(Ee=new Be(Ee,Xe,null,a,Me),we.push({event:Ee,listeners:$e}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",Ee&&a!==Nt&&(Xe=a.relatedTarget||a.fromElement)&&(Rr(Xe)||Xe[Ni]))break e;if((Be||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Be?(Xe=a.relatedTarget||a.toElement,Be=ce,Xe=Xe?Rr(Xe):null,Xe!==null&&(qt=mi(Xe),Xe!==qt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Be=null,Xe=ce),Be!==Xe)){if($e=Nf,Ae="onMouseLeave",ie="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&($e=Lf,Ae="onPointerLeave",ie="onPointerEnter",Y="pointer"),qt=Be==null?Ee:us(Be),se=Xe==null?Ee:us(Xe),Ee=new $e(Ae,Y+"leave",Be,a,Me),Ee.target=qt,Ee.relatedTarget=se,Ae=null,Rr(Me)===ce&&($e=new $e(ie,Y+"enter",Xe,a,Me),$e.target=se,$e.relatedTarget=qt,Ae=$e),qt=Ae,Be&&Xe)t:{for($e=Be,ie=Xe,Y=0,se=$e;se;se=ls(se))Y++;for(se=0,Ae=ie;Ae;Ae=ls(Ae))se++;for(;0<Y-se;)$e=ls($e),Y--;for(;0<se-Y;)ie=ls(ie),se--;for(;Y--;){if($e===ie||ie!==null&&$e===ie.alternate)break t;$e=ls($e),ie=ls(ie)}$e=null}else $e=null;Be!==null&&sh(we,Ee,Be,$e,!1),Xe!==null&&qt!==null&&sh(we,qt,Xe,$e,!0)}}e:{if(Ee=ce?us(ce):window,Be=Ee.nodeName&&Ee.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Ee.type==="file")var Qe=Iy;else if(kf(Ee))if(Bf)Qe=Uy;else{Qe=Py;var nt=Ly}else(Be=Ee.nodeName)&&Be.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Qe=Dy);if(Qe&&(Qe=Qe(t,ce))){Ff(we,Qe,a,Me);break e}nt&&nt(t,Ee,ce),t==="focusout"&&(nt=Ee._wrapperState)&&nt.controlled&&Ee.type==="number"&&ct(Ee,"number",Ee.value)}switch(nt=ce?us(ce):window,t){case"focusin":(kf(nt)||nt.contentEditable==="true")&&(as=nt,oc=ce,fa=null);break;case"focusout":fa=oc=as=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,Yf(we,a,Me);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":Yf(we,a,Me)}var it;if(ic)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ss?Of(t,a)&&(ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Pf&&a.locale!=="ko"&&(ss||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ss&&(it=Cf()):(tr=Me,Kl="value"in tr?tr.value:tr.textContent,ss=!0)),nt=ho(ce,ot),0<nt.length&&(ot=new If(ot,t,null,a,Me),we.push({event:ot,listeners:nt}),it?ot.data=it:(it=zf(a),it!==null&&(ot.data=it)))),(it=Ty?Ay(t,a):Cy(t,a))&&(ce=ho(ce,"onBeforeInput"),0<ce.length&&(Me=new If("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:ce}),Me.data=it))}ih(we,i)})}function ma(t,i,a){return{instance:t,listener:i,currentTarget:a}}function ho(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=_n(t,a),m!=null&&l.unshift(ma(t,m,d)),m=_n(t,i),m!=null&&l.push(ma(t,m,d))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sh(t,i,a,l,d){for(var m=i._reactName,T=[];a!==null&&a!==l;){var F=a,j=F.alternate,ce=F.stateNode;if(j!==null&&j===l)break;F.tag===5&&ce!==null&&(F=ce,d?(j=_n(a,m),j!=null&&T.unshift(ma(a,j,F))):d||(j=_n(a,m),j!=null&&T.push(ma(a,j,F)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var Vy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function ah(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(Gy,"")}function po(t,i,a){if(i=ah(i),ah(t)!==i&&a)throw Error(n(425))}function mo(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(t){return oh.resolve(null).then(t).catch(Xy)}:yc;function Xy(t){setTimeout(function(){throw t})}function xc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),sa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);sa(i)}function ir(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function lh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),yi="__reactFiber$"+cs,ga="__reactProps$"+cs,Ni="__reactContainer$"+cs,vc="__reactEvents$"+cs,qy="__reactListeners$"+cs,Yy="__reactHandles$"+cs;function Rr(t){var i=t[yi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ni]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=lh(t);t!==null;){if(a=t[yi])return a;t=lh(t)}return i}t=a,a=t.parentNode}return null}function ya(t){return t=t[yi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[ga]||null}var _c=[],ds=-1;function rr(t){return{current:t}}function Bt(t){0>ds||(t.current=_c[ds],_c[ds]=null,ds--)}function zt(t,i){ds++,_c[ds]=t.current,t.current=i}var sr={},pn=rr(sr),Cn=rr(!1),Nr=sr;function fs(t,i){var a=t.type.contextTypes;if(!a)return sr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(t){return t=t.childContextTypes,t!=null}function yo(){Bt(Cn),Bt(pn)}function ch(t,i,a){if(pn.current!==sr)throw Error(n(168));zt(pn,i),zt(Cn,a)}function uh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,oe(t)||"Unknown",d));return L({},a,l)}function xo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Nr=pn.current,zt(pn,t),zt(Cn,Cn.current),!0}function dh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=uh(t,i,Nr),l.__reactInternalMemoizedMergedChildContext=t,Bt(Cn),Bt(pn),zt(pn,t)):Bt(Cn),zt(Cn,a)}var Ii=null,vo=!1,Sc=!1;function fh(t){Ii===null?Ii=[t]:Ii.push(t)}function $y(t){vo=!0,fh(t)}function ar(){if(!Sc&&Ii!==null){Sc=!0;var t=0,i=Lt;try{var a=Ii;for(Lt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ii=null,vo=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(t+1)),ue(Ye,ar),d}finally{Lt=i,Sc=!1}}return null}var hs=[],ps=0,_o=null,So=0,Xn=[],qn=0,Ir=null,Li=1,Pi="";function Lr(t,i){hs[ps++]=So,hs[ps++]=_o,_o=t,So=i}function hh(t,i,a){Xn[qn++]=Li,Xn[qn++]=Pi,Xn[qn++]=Ir,Ir=t;var l=Li;t=Pi;var d=32-pt(l)-1;l&=~(1<<d),a+=1;var m=32-pt(i)+d;if(30<m){var T=d-d%5;m=(l&(1<<T)-1).toString(32),l>>=T,d-=T,Li=1<<32-pt(i)+d|a<<d|l,Pi=m+t}else Li=1<<m|a<<d|l,Pi=t}function Ec(t){t.return!==null&&(Lr(t,1),hh(t,1,0))}function Mc(t){for(;t===_o;)_o=hs[--ps],hs[ps]=null,So=hs[--ps],hs[ps]=null;for(;t===Ir;)Ir=Xn[--qn],Xn[qn]=null,Pi=Xn[--qn],Xn[qn]=null,Li=Xn[--qn],Xn[qn]=null}var kn=null,Fn=null,Ht=!1,ri=null;function ph(t,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function mh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,Fn=ir(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:Li,overflow:Pi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,Fn=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(Ht){var i=Fn;if(i){var a=i;if(!mh(t,i)){if(bc(t))throw Error(n(418));i=ir(a.nextSibling);var l=kn;i&&mh(t,i)?ph(l,a):(t.flags=t.flags&-4097|2,Ht=!1,kn=t)}}else{if(bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,kn=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Eo(t){if(t!==kn)return!1;if(!Ht)return gh(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=Fn)){if(bc(t))throw yh(),Error(n(418));for(;i;)ph(t,i),i=ir(i.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Fn=ir(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=kn?ir(t.stateNode.nextSibling):null;return!0}function yh(){for(var t=Fn;t;)t=ir(t.nextSibling)}function ms(){Fn=kn=null,Ht=!1}function Tc(t){ri===null?ri=[t]:ri.push(t)}var Zy=N.ReactCurrentBatchConfig;function xa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var F=d.refs;T===null?delete F[m]:F[m]=T},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function xh(t){var i=t._init;return i(t._payload)}function vh(t){function i(ie,Y){if(t){var se=ie.deletions;se===null?(ie.deletions=[Y],ie.flags|=16):se.push(Y)}}function a(ie,Y){if(!t)return null;for(;Y!==null;)i(ie,Y),Y=Y.sibling;return null}function l(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function d(ie,Y){return ie=pr(ie,Y),ie.index=0,ie.sibling=null,ie}function m(ie,Y,se){return ie.index=se,t?(se=ie.alternate,se!==null?(se=se.index,se<Y?(ie.flags|=2,Y):se):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function T(ie){return t&&ie.alternate===null&&(ie.flags|=2),ie}function F(ie,Y,se,Ae){return Y===null||Y.tag!==6?(Y=yu(se,ie.mode,Ae),Y.return=ie,Y):(Y=d(Y,se),Y.return=ie,Y)}function j(ie,Y,se,Ae){var Qe=se.type;return Qe===z?Me(ie,Y,se.props.children,Ae,se.key):Y!==null&&(Y.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ee&&xh(Qe)===Y.type)?(Ae=d(Y,se.props),Ae.ref=xa(ie,Y,se),Ae.return=ie,Ae):(Ae=qo(se.type,se.key,se.props,null,ie.mode,Ae),Ae.ref=xa(ie,Y,se),Ae.return=ie,Ae)}function ce(ie,Y,se,Ae){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=xu(se,ie.mode,Ae),Y.return=ie,Y):(Y=d(Y,se.children||[]),Y.return=ie,Y)}function Me(ie,Y,se,Ae,Qe){return Y===null||Y.tag!==7?(Y=Br(se,ie.mode,Ae,Qe),Y.return=ie,Y):(Y=d(Y,se),Y.return=ie,Y)}function we(ie,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=yu(""+Y,ie.mode,se),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case K:return se=qo(Y.type,Y.key,Y.props,null,ie.mode,se),se.ref=xa(ie,null,Y),se.return=ie,se;case k:return Y=xu(Y,ie.mode,se),Y.return=ie,Y;case ee:var Ae=Y._init;return we(ie,Ae(Y._payload),se)}if(Ue(Y)||ae(Y))return Y=Br(Y,ie.mode,se,null),Y.return=ie,Y;Mo(ie,Y)}return null}function Ee(ie,Y,se,Ae){var Qe=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Qe!==null?null:F(ie,Y,""+se,Ae);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case K:return se.key===Qe?j(ie,Y,se,Ae):null;case k:return se.key===Qe?ce(ie,Y,se,Ae):null;case ee:return Qe=se._init,Ee(ie,Y,Qe(se._payload),Ae)}if(Ue(se)||ae(se))return Qe!==null?null:Me(ie,Y,se,Ae,null);Mo(ie,se)}return null}function Be(ie,Y,se,Ae,Qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ie=ie.get(se)||null,F(Y,ie,""+Ae,Qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case K:return ie=ie.get(Ae.key===null?se:Ae.key)||null,j(Y,ie,Ae,Qe);case k:return ie=ie.get(Ae.key===null?se:Ae.key)||null,ce(Y,ie,Ae,Qe);case ee:var nt=Ae._init;return Be(ie,Y,se,nt(Ae._payload),Qe)}if(Ue(Ae)||ae(Ae))return ie=ie.get(se)||null,Me(Y,ie,Ae,Qe,null);Mo(Y,Ae)}return null}function Xe(ie,Y,se,Ae){for(var Qe=null,nt=null,it=Y,ot=Y=0,on=null;it!==null&&ot<se.length;ot++){it.index>ot?(on=it,it=null):on=it.sibling;var Ct=Ee(ie,it,se[ot],Ae);if(Ct===null){it===null&&(it=on);break}t&&it&&Ct.alternate===null&&i(ie,it),Y=m(Ct,Y,ot),nt===null?Qe=Ct:nt.sibling=Ct,nt=Ct,it=on}if(ot===se.length)return a(ie,it),Ht&&Lr(ie,ot),Qe;if(it===null){for(;ot<se.length;ot++)it=we(ie,se[ot],Ae),it!==null&&(Y=m(it,Y,ot),nt===null?Qe=it:nt.sibling=it,nt=it);return Ht&&Lr(ie,ot),Qe}for(it=l(ie,it);ot<se.length;ot++)on=Be(it,ie,ot,se[ot],Ae),on!==null&&(t&&on.alternate!==null&&it.delete(on.key===null?ot:on.key),Y=m(on,Y,ot),nt===null?Qe=on:nt.sibling=on,nt=on);return t&&it.forEach(function(mr){return i(ie,mr)}),Ht&&Lr(ie,ot),Qe}function $e(ie,Y,se,Ae){var Qe=ae(se);if(typeof Qe!="function")throw Error(n(150));if(se=Qe.call(se),se==null)throw Error(n(151));for(var nt=Qe=null,it=Y,ot=Y=0,on=null,Ct=se.next();it!==null&&!Ct.done;ot++,Ct=se.next()){it.index>ot?(on=it,it=null):on=it.sibling;var mr=Ee(ie,it,Ct.value,Ae);if(mr===null){it===null&&(it=on);break}t&&it&&mr.alternate===null&&i(ie,it),Y=m(mr,Y,ot),nt===null?Qe=mr:nt.sibling=mr,nt=mr,it=on}if(Ct.done)return a(ie,it),Ht&&Lr(ie,ot),Qe;if(it===null){for(;!Ct.done;ot++,Ct=se.next())Ct=we(ie,Ct.value,Ae),Ct!==null&&(Y=m(Ct,Y,ot),nt===null?Qe=Ct:nt.sibling=Ct,nt=Ct);return Ht&&Lr(ie,ot),Qe}for(it=l(ie,it);!Ct.done;ot++,Ct=se.next())Ct=Be(it,ie,ot,Ct.value,Ae),Ct!==null&&(t&&Ct.alternate!==null&&it.delete(Ct.key===null?ot:Ct.key),Y=m(Ct,Y,ot),nt===null?Qe=Ct:nt.sibling=Ct,nt=Ct);return t&&it.forEach(function(Rx){return i(ie,Rx)}),Ht&&Lr(ie,ot),Qe}function qt(ie,Y,se,Ae){if(typeof se=="object"&&se!==null&&se.type===z&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case K:e:{for(var Qe=se.key,nt=Y;nt!==null;){if(nt.key===Qe){if(Qe=se.type,Qe===z){if(nt.tag===7){a(ie,nt.sibling),Y=d(nt,se.props.children),Y.return=ie,ie=Y;break e}}else if(nt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ee&&xh(Qe)===nt.type){a(ie,nt.sibling),Y=d(nt,se.props),Y.ref=xa(ie,nt,se),Y.return=ie,ie=Y;break e}a(ie,nt);break}else i(ie,nt);nt=nt.sibling}se.type===z?(Y=Br(se.props.children,ie.mode,Ae,se.key),Y.return=ie,ie=Y):(Ae=qo(se.type,se.key,se.props,null,ie.mode,Ae),Ae.ref=xa(ie,Y,se),Ae.return=ie,ie=Ae)}return T(ie);case k:e:{for(nt=se.key;Y!==null;){if(Y.key===nt)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){a(ie,Y.sibling),Y=d(Y,se.children||[]),Y.return=ie,ie=Y;break e}else{a(ie,Y);break}else i(ie,Y);Y=Y.sibling}Y=xu(se,ie.mode,Ae),Y.return=ie,ie=Y}return T(ie);case ee:return nt=se._init,qt(ie,Y,nt(se._payload),Ae)}if(Ue(se))return Xe(ie,Y,se,Ae);if(ae(se))return $e(ie,Y,se,Ae);Mo(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Y!==null&&Y.tag===6?(a(ie,Y.sibling),Y=d(Y,se),Y.return=ie,ie=Y):(a(ie,Y),Y=yu(se,ie.mode,Ae),Y.return=ie,ie=Y),T(ie)):a(ie,Y)}return qt}var gs=vh(!0),_h=vh(!1),bo=rr(null),wo=null,ys=null,Ac=null;function Cc(){Ac=ys=wo=null}function Rc(t){var i=bo.current;Bt(bo),t._currentValue=i}function Nc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function xs(t,i){wo=t,Ac=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},ys===null){if(wo===null)throw Error(n(308));ys=t,wo.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return i}var Pr=null;function Ic(t){Pr===null?Pr=[t]:Pr.push(t)}function Sh(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Ic(i)):(a.next=d.next,d.next=a),i.interleaved=a,Di(t,l)}function Di(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var or=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(wt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Di(t,a)}return d=l.interleaved,d===null?(i.next=i,Ic(l)):(i.next=d.next,d.next=i),l.interleaved=i,Di(t,a)}function To(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Xl(t,a)}}function Mh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ao(t,i,a,l){var d=t.updateQueue;or=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var j=F,ce=j.next;j.next=null,T===null?m=ce:T.next=ce,T=j;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==T&&(F===null?Me.firstBaseUpdate=ce:F.next=ce,Me.lastBaseUpdate=j))}if(m!==null){var we=d.baseState;T=0,Me=ce=j=null,F=m;do{var Ee=F.lane,Be=F.eventTime;if((l&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:Be,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=t,$e=F;switch(Ee=i,Be=a,$e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){we=Xe.call(Be,we,Ee);break e}we=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,Ee=typeof Xe=="function"?Xe.call(Be,we,Ee):Xe,Ee==null)break e;we=L({},we,Ee);break e;case 2:or=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,Ee=d.effects,Ee===null?d.effects=[F]:Ee.push(F))}else Be={eventTime:Be,lane:Ee,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(ce=Me=Be,j=we):Me=Me.next=Be,T|=Ee;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;Ee=F,F=Ee.next,Ee.next=null,d.lastBaseUpdate=Ee,d.shared.pending=null}}while(!0);if(Me===null&&(j=we),d.baseState=j,d.firstBaseUpdate=ce,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Or|=T,t.lanes=T,t.memoizedState=we}}function bh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var va={},xi=rr(va),_a=rr(va),Sa=rr(va);function Dr(t){if(t===va)throw Error(n(174));return t}function Pc(t,i){switch(zt(Sa,i),zt(_a,t),zt(xi,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=qe(i,t)}Bt(xi),zt(xi,i)}function vs(){Bt(xi),Bt(_a),Bt(Sa)}function wh(t){Dr(Sa.current);var i=Dr(xi.current),a=qe(i,t.type);i!==a&&(zt(_a,t),zt(xi,a))}function Dc(t){_a.current===t&&(Bt(xi),Bt(_a))}var Gt=rr(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Oc(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Ro=N.ReactCurrentDispatcher,zc=N.ReactCurrentBatchConfig,Ur=0,jt=null,Jt=null,sn=null,No=!1,Ea=!1,Ma=0,Ky=0;function mn(){throw Error(n(321))}function kc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ii(t[a],i[a]))return!1;return!0}function Fc(t,i,a,l,d,m){if(Ur=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?tx:nx,t=a(l,d),Ea){m=0;do{if(Ea=!1,Ma=0,25<=m)throw Error(n(301));m+=1,sn=Jt=null,i.updateQueue=null,Ro.current=ix,t=a(l,d)}while(Ea)}if(Ro.current=Po,i=Jt!==null&&Jt.next!==null,Ur=0,sn=Jt=jt=null,No=!1,i)throw Error(n(300));return t}function Bc(){var t=Ma!==0;return Ma=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?jt.memoizedState=sn=t:sn=sn.next=t,sn}function $n(){if(Jt===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=sn===null?jt.memoizedState:sn.next;if(i!==null)sn=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?jt.memoizedState=sn=t:sn=sn.next=t}return sn}function ba(t,i){return typeof i=="function"?i(t):i}function Hc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Jt,d=l.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}l.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,l=l.baseState;var F=T=null,j=null,ce=m;do{var Me=ce.lane;if((Ur&Me)===Me)j!==null&&(j=j.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),l=ce.hasEagerState?ce.eagerState:t(l,ce.action);else{var we={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};j===null?(F=j=we,T=l):j=j.next=we,jt.lanes|=Me,Or|=Me}ce=ce.next}while(ce!==null&&ce!==m);j===null?T=l:j.next=F,ii(l,i.memoizedState)||(Nn=!0),i.memoizedState=l,i.baseState=T,i.baseQueue=j,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do m=d.lane,jt.lanes|=m,Or|=m,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Vc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=t(m,T.action),T=T.next;while(T!==d);ii(m,i.memoizedState)||(Nn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function Th(){}function Ah(t,i){var a=jt,l=$n(),d=i(),m=!ii(l.memoizedState,d);if(m&&(l.memoizedState=d,Nn=!0),l=l.queue,Gc(Nh.bind(null,a,l,t),[t]),l.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,wa(9,Rh.bind(null,a,l,d,i),void 0,null),an===null)throw Error(n(349));(Ur&30)!==0||Ch(a,i,d)}return d}function Ch(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Rh(t,i,a,l){i.value=a,i.getSnapshot=l,Ih(i)&&Lh(t)}function Nh(t,i,a){return a(function(){Ih(i)&&Lh(t)})}function Ih(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ii(t,a)}catch{return!0}}function Lh(t){var i=Di(t,1);i!==null&&li(i,t,1,-1)}function Ph(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i.queue=t,t=t.dispatch=ex.bind(null,jt,t),[i.memoizedState,t]}function wa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Dh(){return $n().memoizedState}function Io(t,i,a,l){var d=vi();jt.flags|=t,d.memoizedState=wa(1|i,a,void 0,l===void 0?null:l)}function Lo(t,i,a,l){var d=$n();l=l===void 0?null:l;var m=void 0;if(Jt!==null){var T=Jt.memoizedState;if(m=T.destroy,l!==null&&kc(l,T.deps)){d.memoizedState=wa(i,a,m,l);return}}jt.flags|=t,d.memoizedState=wa(1|i,a,m,l)}function Uh(t,i){return Io(8390656,8,t,i)}function Gc(t,i){return Lo(2048,8,t,i)}function Oh(t,i){return Lo(4,2,t,i)}function zh(t,i){return Lo(4,4,t,i)}function kh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Fh(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4,4,kh.bind(null,i,t),a)}function jc(){}function Bh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Hh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Vh(t,i,a){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=a):(ii(a,i)||(a=Sn(),jt.lanes|=a,Or|=a,t.baseState=!0),i)}function Qy(t,i){var a=Lt;Lt=a!==0&&4>a?a:4,t(!0);var l=zc.transition;zc.transition={};try{t(!1),i()}finally{Lt=a,zc.transition=l}}function Gh(){return $n().memoizedState}function Jy(t,i,a){var l=fr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},jh(t))Wh(i,a);else if(a=Sh(t,i,a,l),a!==null){var d=Mn();li(a,t,l,d),Xh(a,i,l)}}function ex(t,i,a){var l=fr(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(jh(t))Wh(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,F=m(T,a);if(d.hasEagerState=!0,d.eagerState=F,ii(F,T)){var j=i.interleaved;j===null?(d.next=d,Ic(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}a=Sh(t,i,d,l),a!==null&&(d=Mn(),li(a,t,l,d),Xh(a,i,l))}}function jh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Wh(t,i){Ea=No=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Xh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Xl(t,a)}}var Po={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},tx={readContext:Yn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:Uh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Io(4194308,4,kh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Io(4194308,4,t,i)},useInsertionEffect:function(t,i){return Io(4,2,t,i)},useMemo:function(t,i){var a=vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=vi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Jy.bind(null,jt,t),[l.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:Ph,useDebugValue:jc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Ph(!1),i=t[0];return t=Qy.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=jt,d=vi();if(Ht){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),an===null)throw Error(n(349));(Ur&30)!==0||Ch(l,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Uh(Nh.bind(null,l,m,t),[t]),l.flags|=2048,wa(9,Rh.bind(null,l,m,a,i),void 0,null),a},useId:function(){var t=vi(),i=an.identifierPrefix;if(Ht){var a=Pi,l=Li;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ky++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},nx={readContext:Yn,useCallback:Bh,useContext:Yn,useEffect:Gc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Hh,useReducer:Hc,useRef:Dh,useState:function(){return Hc(ba)},useDebugValue:jc,useDeferredValue:function(t){var i=$n();return Vh(i,Jt.memoizedState,t)},useTransition:function(){var t=Hc(ba)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Gh,unstable_isNewReconciler:!1},ix={readContext:Yn,useCallback:Bh,useContext:Yn,useEffect:Gc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Hh,useReducer:Vc,useRef:Dh,useState:function(){return Vc(ba)},useDebugValue:jc,useDeferredValue:function(t){var i=$n();return Jt===null?i.memoizedState=t:Vh(i,Jt.memoizedState,t)},useTransition:function(){var t=Vc(ba)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Gh,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=L({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Wc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:L({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Do={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Mn(),d=fr(t),m=Ui(l,d);m.payload=i,a!=null&&(m.callback=a),i=lr(t,m,d),i!==null&&(li(i,t,d,l),To(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Mn(),d=fr(t),m=Ui(l,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=lr(t,m,d),i!==null&&(li(i,t,d,l),To(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Mn(),l=fr(t),d=Ui(a,l);d.tag=2,i!=null&&(d.callback=i),i=lr(t,d,l),i!==null&&(li(i,t,l,a),To(i,t,l))}};function qh(t,i,a,l,d,m,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,T):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(d,m):!0}function Yh(t,i,a){var l=!1,d=sr,m=i.contextType;return typeof m=="object"&&m!==null?m=Yn(m):(d=Rn(i)?Nr:pn.current,l=i.contextTypes,m=(l=l!=null)?fs(t,d):sr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),i}function $h(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function Xc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Lc(t);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Yn(m):(m=Rn(i)?Nr:pn.current,d.context=fs(t,m)),d.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Wc(t,i,m,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Do.enqueueReplaceState(d,d.state,null),Ao(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var a="",l=i;do a+=te(l),l=l.return;while(l);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:d,digest:null}}function qc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Yc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var rx=typeof WeakMap=="function"?WeakMap:Map;function Zh(t,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Ho||(Ho=!0,cu=l),Yc(t,i)},a}function Kh(t,i,a){a=Ui(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){Yc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Yc(t,i),typeof l!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Qh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new rx;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=xx.bind(null,t,i,a),i.then(t,t))}function Jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ep(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,lr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var sx=N.ReactCurrentOwner,Nn=!1;function En(t,i,a,l){i.child=t===null?_h(i,null,a,l):gs(i,t.child,a,l)}function tp(t,i,a,l,d){a=a.render;var m=i.ref;return xs(i,d),l=Fc(t,i,a,l,m,d),a=Bc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Oi(t,i,d)):(Ht&&a&&Ec(i),i.flags|=1,En(t,i,l,d),i.child)}function np(t,i,a,l,d){if(t===null){var m=a.type;return typeof m=="function"&&!gu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,ip(t,i,m,l,d)):(t=qo(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(T,l)&&t.ref===i.ref)return Oi(t,i,d)}return i.flags|=1,t=pr(m,l),t.ref=i.ref,t.return=i,i.child=t}function ip(t,i,a,l,d){if(t!==null){var m=t.memoizedProps;if(da(m,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=m,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Oi(t,i,d)}return $c(t,i,a,l,d)}function rp(t,i,a){var l=i.pendingProps,d=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Es,Bn),Bn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,zt(Es,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,zt(Es,Bn),Bn|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,zt(Es,Bn),Bn|=l;return En(t,i,d,a),i.child}function sp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function $c(t,i,a,l,d){var m=Rn(a)?Nr:pn.current;return m=fs(i,m),xs(i,d),a=Fc(t,i,a,l,m,d),l=Bc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Oi(t,i,d)):(Ht&&l&&Ec(i),i.flags|=1,En(t,i,a,d),i.child)}function ap(t,i,a,l,d){if(Rn(a)){var m=!0;xo(i)}else m=!1;if(xs(i,d),i.stateNode===null)Oo(t,i),Yh(i,a,l),Xc(i,a,l,d),l=!0;else if(t===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var j=T.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=Yn(ce):(ce=Rn(a)?Nr:pn.current,ce=fs(i,ce));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";we||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==l||j!==ce)&&$h(i,T,l,ce),or=!1;var Ee=i.memoizedState;T.state=Ee,Ao(i,l,T,d),j=i.memoizedState,F!==l||Ee!==j||Cn.current||or?(typeof Me=="function"&&(Wc(i,a,Me,l),j=i.memoizedState),(F=or||qh(i,a,F,l,Ee,j,ce))?(we||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=j),T.props=l,T.state=j,T.context=ce,l=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{T=i.stateNode,Eh(t,i),F=i.memoizedProps,ce=i.type===i.elementType?F:si(i.type,F),T.props=ce,we=i.pendingProps,Ee=T.context,j=a.contextType,typeof j=="object"&&j!==null?j=Yn(j):(j=Rn(a)?Nr:pn.current,j=fs(i,j));var Be=a.getDerivedStateFromProps;(Me=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==we||Ee!==j)&&$h(i,T,l,j),or=!1,Ee=i.memoizedState,T.state=Ee,Ao(i,l,T,d);var Xe=i.memoizedState;F!==we||Ee!==Xe||Cn.current||or?(typeof Be=="function"&&(Wc(i,a,Be,l),Xe=i.memoizedState),(ce=or||qh(i,a,ce,l,Ee,Xe,j)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,Xe,j),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,Xe,j)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Xe),T.props=l,T.state=Xe,T.context=j,l=ce):(typeof T.componentDidUpdate!="function"||F===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return Zc(t,i,a,l,m,d)}function Zc(t,i,a,l,d,m){sp(t,i);var T=(i.flags&128)!==0;if(!l&&!T)return d&&dh(i,a,!1),Oi(t,i,m);l=i.stateNode,sx.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&T?(i.child=gs(i,t.child,null,m),i.child=gs(i,null,F,m)):En(t,i,F,m),i.memoizedState=l.state,d&&dh(i,a,!0),i.child}function op(t){var i=t.stateNode;i.pendingContext?ch(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ch(t,i.context,!1),Pc(t,i.containerInfo)}function lp(t,i,a,l,d){return ms(),Tc(d),i.flags|=256,En(t,i,a,l),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,i,a){var l=i.pendingProps,d=Gt.current,m=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=t!==null&&t.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),zt(Gt,d&1),t===null)return wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=l.children,t=l.fallback,m?(l=i.mode,m=i.child,T={mode:"hidden",children:T},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=Yo(T,l,0,null),t=Br(t,l,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=Qc(a),i.memoizedState=Kc,t):Jc(i,T));if(d=t.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return ax(t,i,T,l,F,d,a);if(m){m=l.fallback,T=i.mode,d=t.child,F=d.sibling;var j={mode:"hidden",children:l.children};return(T&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=j,i.deletions=null):(l=pr(d,j),l.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=pr(F,m):(m=Br(m,T,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,T=t.child.memoizedState,T=T===null?Qc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=t.childLanes&~a,i.memoizedState=Kc,l}return m=t.child,t=m.sibling,l=pr(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Jc(t,i){return i=Yo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Uo(t,i,a,l){return l!==null&&Tc(l),gs(i,t.child,null,a),t=Jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ax(t,i,a,l,d,m,T){if(a)return i.flags&256?(i.flags&=-257,l=qc(Error(n(422))),Uo(t,i,T,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,d=i.mode,l=Yo({mode:"visible",children:l.children},d,0,null),m=Br(m,d,T,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,T),i.child.memoizedState=Qc(T),i.memoizedState=Kc,m);if((i.mode&1)===0)return Uo(t,i,T,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var F=l.dgst;return l=F,m=Error(n(419)),l=qc(m,l,void 0),Uo(t,i,T,l)}if(F=(T&t.childLanes)!==0,Nn||F){if(l=an,l!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Di(t,d),li(l,t,d,-1))}return mu(),l=qc(Error(n(421))),Uo(t,i,T,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=vx.bind(null,t),d._reactRetry=i,null):(t=m.treeContext,Fn=ir(d.nextSibling),kn=i,Ht=!0,ri=null,t!==null&&(Xn[qn++]=Li,Xn[qn++]=Pi,Xn[qn++]=Ir,Li=t.id,Pi=t.overflow,Ir=i),i=Jc(i,l.children),i.flags|=4096,i)}function up(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Nc(t.return,i,a)}function eu(t,i,a,l,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=d)}function dp(t,i,a){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(En(t,i,l.children,a),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,a,i);else if(t.tag===19)up(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(zt(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),eu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Co(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}eu(i,!0,a,null,m);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Oi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Or|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=pr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=pr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function ox(t,i,a){switch(i.tag){case 3:op(i),ms();break;case 5:wh(i);break;case 1:Rn(i.type)&&xo(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;zt(bo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(zt(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?cp(t,i,a):(zt(Gt,Gt.current&1),t=Oi(t,i,a),t!==null?t.sibling:null);zt(Gt,Gt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return dp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),zt(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,rp(t,i,a)}return Oi(t,i,a)}var fp,tu,hp,pp;fp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},tu=function(){},hp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Dr(xi.current);var m=null;switch(a){case"input":d=V(t,d),l=V(t,l),m=[];break;case"select":d=L({},d,{value:void 0}),l=L({},l,{value:void 0}),m=[];break;case"textarea":d=C(t,d),l=C(t,l),m=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=mo)}xt(a,l);var T;a=null;for(ce in d)if(!l.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var F=d[ce];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in l){var j=l[ce];if(F=d!=null?d[ce]:void 0,l.hasOwnProperty(ce)&&j!==F&&(j!=null||F!=null))if(ce==="style")if(F){for(T in F)!F.hasOwnProperty(T)||j&&j.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in j)j.hasOwnProperty(T)&&F[T]!==j[T]&&(a||(a={}),a[T]=j[T])}else a||(m||(m=[]),m.push(ce,a)),a=j;else ce==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,F=F?F.__html:void 0,j!=null&&F!==j&&(m=m||[]).push(ce,j)):ce==="children"?typeof j!="string"&&typeof j!="number"||(m=m||[]).push(ce,""+j):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(j!=null&&ce==="onScroll"&&Ft("scroll",t),m||F===j||(m=[])):(m=m||[]).push(ce,j))}a&&(m=m||[]).push("style",a);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},pp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ta(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function lx(t,i,a){var l=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&yo(),gn(i),null;case 3:return l=i.stateNode,vs(),Bt(Cn),Bt(pn),Oc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Eo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(fu(ri),ri=null))),tu(t,i),gn(i),null;case 5:Dc(i);var d=Dr(Sa.current);if(a=i.type,t!==null&&i.stateNode!=null)hp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Dr(xi.current),Eo(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[yi]=i,l[ga]=m,t=(i.mode&1)!==0,a){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(d=0;d<ha.length;d++)Ft(ha[d],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":_t(l,m),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",l);break;case"textarea":J(l,m),Ft("invalid",l)}xt(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var F=m[T];T==="children"?typeof F=="string"?l.textContent!==F&&(m.suppressHydrationWarning!==!0&&po(l.textContent,F,t),d=["children",F]):typeof F=="number"&&l.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&po(l.textContent,F,t),d=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Ft("scroll",l)}switch(a){case"input":Ge(l),Pe(l,m,!0);break;case"textarea":Ge(l),_e(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=mo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ye(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=T.createElement(a,{is:l.is}):(t=T.createElement(a),a==="select"&&(T=t,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):t=T.createElementNS(t,a),t[yi]=i,t[ga]=l,fp(t,i,!1,!1),i.stateNode=t;e:{switch(T=ut(a,l),a){case"dialog":Ft("cancel",t),Ft("close",t),d=l;break;case"iframe":case"object":case"embed":Ft("load",t),d=l;break;case"video":case"audio":for(d=0;d<ha.length;d++)Ft(ha[d],t);d=l;break;case"source":Ft("error",t),d=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),d=l;break;case"details":Ft("toggle",t),d=l;break;case"input":_t(t,l),d=V(t,l),Ft("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=L({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":J(t,l),d=C(t,l),Ft("invalid",t);break;default:d=l}xt(a,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var j=F[m];m==="style"?st(t,j):m==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Fe(t,j)):m==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&ht(t,j):typeof j=="number"&&ht(t,""+j):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?j!=null&&m==="onScroll"&&Ft("scroll",t):j!=null&&D(t,m,j,T))}switch(a){case"input":Ge(t),Pe(t,l,!1);break;case"textarea":Ge(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ge(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?O(t,!!l.multiple,m,!1):l.defaultValue!=null&&O(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=mo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)pp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Dr(Sa.current),Dr(xi.current),Eo(i)){if(l=i.stateNode,a=i.memoizedProps,l[yi]=i,(m=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:po(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(l.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[yi]=i,i.stateNode=l}return gn(i),null;case 13:if(Bt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)yh(),ms(),i.flags|=98560,m=!1;else if(m=Eo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[yi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else ri!==null&&(fu(ri),ri=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?en===0&&(en=3):mu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return vs(),tu(t,i),t===null&&pa(i.stateNode.containerInfo),gn(i),null;case 10:return Rc(i.type._context),gn(i),null;case 17:return Rn(i.type)&&yo(),gn(i),null;case 19:if(Bt(Gt),m=i.memoizedState,m===null)return gn(i),null;if(l=(i.flags&128)!==0,T=m.rendering,T===null)if(l)Ta(m,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Co(t),T!==null){for(i.flags|=128,Ta(m,!1),l=T.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,t=l,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,t=T.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return zt(Gt,Gt.current&1|2),i.child}t=t.sibling}m.tail!==null&&Te()>Ms&&(i.flags|=128,l=!0,Ta(m,!1),i.lanes=4194304)}else{if(!l)if(t=Co(T),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Ht)return gn(i),null}else 2*Te()-m.renderingStartTime>Ms&&a!==1073741824&&(i.flags|=128,l=!0,Ta(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Te(),i.sibling=null,a=Gt.current,zt(Gt,l?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return pu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function cx(t,i){switch(Mc(i),i.tag){case 1:return Rn(i.type)&&yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Bt(Cn),Bt(pn),Oc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Bt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Gt),null;case 4:return vs(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var zo=!1,yn=!1,ux=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ss(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Wt(t,i,l)}else a.current=null}function nu(t,i,a){try{a()}catch(l){Wt(t,i,l)}}var mp=!1;function dx(t,i){if(pc=no,t=qf(),ac(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,F=-1,j=-1,ce=0,Me=0,we=t,Ee=null;t:for(;;){for(var Be;we!==a||d!==0&&we.nodeType!==3||(F=T+d),we!==m||l!==0&&we.nodeType!==3||(j=T+l),we.nodeType===3&&(T+=we.nodeValue.length),(Be=we.firstChild)!==null;)Ee=we,we=Be;for(;;){if(we===t)break t;if(Ee===a&&++ce===d&&(F=T),Ee===m&&++Me===l&&(j=T),(Be=we.nextSibling)!==null)break;we=Ee,Ee=we.parentNode}we=Be}a=F===-1||j===-1?null:{start:F,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(mc={focusedElem:t,selectionRange:a},no=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var $e=Xe.memoizedProps,qt=Xe.memoizedState,ie=i.stateNode,Y=ie.getSnapshotBeforeUpdate(i.elementType===i.type?$e:si(i.type,$e),qt);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Wt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return Xe=mp,mp=!1,Xe}function Aa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&nu(i,a,m)}d=d.next}while(d!==l)}}function ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function iu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function gp(t){var i=t.alternate;i!==null&&(t.alternate=null,gp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[yi],delete i[ga],delete i[vc],delete i[qy],delete i[Yy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yp(t){return t.tag===5||t.tag===3||t.tag===4}function xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=mo));else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,a),t=t.sibling;t!==null;)ru(t,i,a),t=t.sibling}function su(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(su(t,i,a),t=t.sibling;t!==null;)su(t,i,a),t=t.sibling}var cn=null,ai=!1;function cr(t,i,a){for(a=a.child;a!==null;)vp(t,i,a),a=a.sibling}function vp(t,i,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 5:yn||Ss(a,i);case 6:var l=cn,d=ai;cn=null,cr(t,i,a),cn=l,ai=d,cn!==null&&(ai?(t=cn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ai?(t=cn,a=a.stateNode,t.nodeType===8?xc(t.parentNode,a):t.nodeType===1&&xc(t,a),sa(t)):xc(cn,a.stateNode));break;case 4:l=cn,d=ai,cn=a.stateNode.containerInfo,ai=!0,cr(t,i,a),cn=l,ai=d;break;case 0:case 11:case 14:case 15:if(!yn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&nu(a,i,T),d=d.next}while(d!==l)}cr(t,i,a);break;case 1:if(!yn&&(Ss(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(F){Wt(a,i,F)}cr(t,i,a);break;case 21:cr(t,i,a);break;case 22:a.mode&1?(yn=(l=yn)||a.memoizedState!==null,cr(t,i,a),yn=l):cr(t,i,a);break;default:cr(t,i,a)}}function _p(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new ux),i.forEach(function(l){var d=_x.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function oi(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var m=t,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:cn=F.stateNode,ai=!1;break e;case 3:cn=F.stateNode.containerInfo,ai=!0;break e;case 4:cn=F.stateNode.containerInfo,ai=!0;break e}F=F.return}if(cn===null)throw Error(n(160));vp(m,T,d),cn=null,ai=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(ce){Wt(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,t),i=i.sibling}function Sp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),_i(t),l&4){try{Aa(3,t,t.return),ko(3,t)}catch($e){Wt(t,t.return,$e)}try{Aa(5,t,t.return)}catch($e){Wt(t,t.return,$e)}}break;case 1:oi(i,t),_i(t),l&512&&a!==null&&Ss(a,a.return);break;case 5:if(oi(i,t),_i(t),l&512&&a!==null&&Ss(a,a.return),t.flags&32){var d=t.stateNode;try{ht(d,"")}catch($e){Wt(t,t.return,$e)}}if(l&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,T=a!==null?a.memoizedProps:m,F=t.type,j=t.updateQueue;if(t.updateQueue=null,j!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&Ie(d,m),ut(F,T);var ce=ut(F,m);for(T=0;T<j.length;T+=2){var Me=j[T],we=j[T+1];Me==="style"?st(d,we):Me==="dangerouslySetInnerHTML"?Fe(d,we):Me==="children"?ht(d,we):D(d,Me,we,ce)}switch(F){case"input":We(d,m);break;case"textarea":xe(d,m);break;case"select":var Ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?O(d,!!m.multiple,Be,!1):Ee!==!!m.multiple&&(m.defaultValue!=null?O(d,!!m.multiple,m.defaultValue,!0):O(d,!!m.multiple,m.multiple?[]:"",!1))}d[ga]=m}catch($e){Wt(t,t.return,$e)}}break;case 6:if(oi(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch($e){Wt(t,t.return,$e)}}break;case 3:if(oi(i,t),_i(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{sa(i.containerInfo)}catch($e){Wt(t,t.return,$e)}break;case 4:oi(i,t),_i(t);break;case 13:oi(i,t),_i(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(lu=Te())),l&4&&_p(t);break;case 22:if(Me=a!==null&&a.memoizedState!==null,t.mode&1?(yn=(ce=yn)||Me,oi(i,t),yn=ce):oi(i,t),_i(t),l&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!Me&&(t.mode&1)!==0)for(Ve=t,Me=t.child;Me!==null;){for(we=Ve=Me;Ve!==null;){switch(Ee=Ve,Be=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Aa(4,Ee,Ee.return);break;case 1:Ss(Ee,Ee.return);var Xe=Ee.stateNode;if(typeof Xe.componentWillUnmount=="function"){l=Ee,a=Ee.return;try{i=l,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch($e){Wt(l,a,$e)}}break;case 5:Ss(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){bp(we);continue}}Be!==null?(Be.return=Ee,Ve=Be):bp(we)}Me=Me.sibling}e:for(Me=null,we=t;;){if(we.tag===5){if(Me===null){Me=we;try{d=we.stateNode,ce?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=we.stateNode,j=we.memoizedProps.style,T=j!=null&&j.hasOwnProperty("display")?j.display:null,F.style.display=tt("display",T))}catch($e){Wt(t,t.return,$e)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ce?"":we.memoizedProps}catch($e){Wt(t,t.return,$e)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:oi(i,t),_i(t),l&4&&_p(t);break;case 21:break;default:oi(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(yp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ht(d,""),l.flags&=-33);var m=xp(t);su(t,m,d);break;case 3:case 4:var T=l.stateNode.containerInfo,F=xp(t);ru(t,F,T);break;default:throw Error(n(161))}}catch(j){Wt(t,t.return,j)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function fx(t,i,a){Ve=t,Ep(t)}function Ep(t,i,a){for(var l=(t.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&l){var T=d.memoizedState!==null||zo;if(!T){var F=d.alternate,j=F!==null&&F.memoizedState!==null||yn;F=zo;var ce=yn;if(zo=T,(yn=j)&&!ce)for(Ve=d;Ve!==null;)T=Ve,j=T.child,T.tag===22&&T.memoizedState!==null?wp(d):j!==null?(j.return=T,Ve=j):wp(d);for(;m!==null;)Ve=m,Ep(m),m=m.sibling;Ve=d,zo=F,yn=ce}Mp(t)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Mp(t)}}function Mp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||ko(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!yn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&bh(i,m,l);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}bh(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&sa(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&iu(i)}catch(Ee){Wt(i,i.return,Ee)}}if(i===t){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function bp(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function wp(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ko(4,i)}catch(j){Wt(i,a,j)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(j){Wt(i,d,j)}}var m=i.return;try{iu(i)}catch(j){Wt(i,m,j)}break;case 5:var T=i.return;try{iu(i)}catch(j){Wt(i,T,j)}}}catch(j){Wt(i,i.return,j)}if(i===t){Ve=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Ve=F;break}Ve=i.return}}var hx=Math.ceil,Fo=N.ReactCurrentDispatcher,au=N.ReactCurrentOwner,Zn=N.ReactCurrentBatchConfig,wt=0,an=null,Yt=null,un=0,Bn=0,Es=rr(0),en=0,Ca=null,Or=0,Bo=0,ou=0,Ra=null,In=null,lu=0,Ms=1/0,zi=null,Ho=!1,cu=null,ur=null,Vo=!1,dr=null,Go=0,Na=0,uu=null,jo=-1,Wo=0;function Mn(){return(wt&6)!==0?Te():jo!==-1?jo:jo=Te()}function fr(t){return(t.mode&1)===0?1:(wt&2)!==0&&un!==0?un&-un:Zy.transition!==null?(Wo===0&&(Wo=Sn()),Wo):(t=Lt,t!==0||(t=window.event,t=t===void 0?16:Af(t.type)),t)}function li(t,i,a,l){if(50<Na)throw Na=0,uu=null,Error(n(185));An(t,a,l),((wt&2)===0||t!==an)&&(t===an&&((wt&2)===0&&(Bo|=a),en===4&&hr(t,un)),Ln(t,l),a===1&&wt===0&&(i.mode&1)===0&&(Ms=Te()+500,vo&&ar()))}function Ln(t,i){var a=t.callbackNode;jn(t,i);var l=gi(t,t===an?un:0);if(l===0)a!==null&&fe(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&fe(a),i===1)t.tag===0?$y(Ap.bind(null,t)):fh(Ap.bind(null,t)),Wy(function(){(wt&6)===0&&ar()}),a=null;else{switch(vf(l)){case 1:a=Ye;break;case 4:a=at;break;case 16:a=lt;break;case 536870912:a=Et;break;default:a=lt}a=Up(a,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Tp(t,i){if(jo=-1,Wo=0,(wt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(bs()&&t.callbackNode!==a)return null;var l=gi(t,t===an?un:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Xo(t,l);else{i=l;var d=wt;wt|=2;var m=Rp();(an!==t||un!==i)&&(zi=null,Ms=Te()+500,kr(t,i));do try{gx();break}catch(F){Cp(t,F)}while(!0);Cc(),Fo.current=m,wt=d,Yt!==null?i=0:(an=null,un=0,i=en)}if(i!==0){if(i===2&&(d=Ri(t),d!==0&&(l=d,i=du(t,d))),i===1)throw a=Ca,kr(t,0),hr(t,l),Ln(t,Te()),a;if(i===6)hr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!px(d)&&(i=Xo(t,l),i===2&&(m=Ri(t),m!==0&&(l=m,i=du(t,m))),i===1))throw a=Ca,kr(t,0),hr(t,l),Ln(t,Te()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,In,zi);break;case 3:if(hr(t,l),(l&130023424)===l&&(i=lu+500-Te(),10<i)){if(gi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=yc(Fr.bind(null,t,In,zi),i);break}Fr(t,In,zi);break;case 4:if(hr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var T=31-pt(l);m=1<<T,T=i[T],T>d&&(d=T),l&=~m}if(l=d,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*hx(l/1960))-l,10<l){t.timeoutHandle=yc(Fr.bind(null,t,In,zi),l);break}Fr(t,In,zi);break;case 5:Fr(t,In,zi);break;default:throw Error(n(329))}}}return Ln(t,Te()),t.callbackNode===a?Tp.bind(null,t):null}function du(t,i){var a=Ra;return t.current.memoizedState.isDehydrated&&(kr(t,i).flags|=256),t=Xo(t,i),t!==2&&(i=In,In=a,i!==null&&fu(i)),t}function fu(t){In===null?In=t:In.push.apply(In,t)}function px(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],m=d.getSnapshot;d=d.value;try{if(!ii(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(t,i){for(i&=~ou,i&=~Bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-pt(i),l=1<<a;t[a]=-1,i&=~l}}function Ap(t){if((wt&6)!==0)throw Error(n(327));bs();var i=gi(t,0);if((i&1)===0)return Ln(t,Te()),null;var a=Xo(t,i);if(t.tag!==0&&a===2){var l=Ri(t);l!==0&&(i=l,a=du(t,l))}if(a===1)throw a=Ca,kr(t,0),hr(t,i),Ln(t,Te()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,In,zi),Ln(t,Te()),null}function hu(t,i){var a=wt;wt|=1;try{return t(i)}finally{wt=a,wt===0&&(Ms=Te()+500,vo&&ar())}}function zr(t){dr!==null&&dr.tag===0&&(wt&6)===0&&bs();var i=wt;wt|=1;var a=Zn.transition,l=Lt;try{if(Zn.transition=null,Lt=1,t)return t()}finally{Lt=l,Zn.transition=a,wt=i,(wt&6)===0&&ar()}}function pu(){Bn=Es.current,Bt(Es)}function kr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,jy(a)),Yt!==null)for(a=Yt.return;a!==null;){var l=a;switch(Mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&yo();break;case 3:vs(),Bt(Cn),Bt(pn),Oc();break;case 5:Dc(l);break;case 4:vs();break;case 13:Bt(Gt);break;case 19:Bt(Gt);break;case 10:Rc(l.type._context);break;case 22:case 23:pu()}a=a.return}if(an=t,Yt=t=pr(t.current,null),un=Bn=i,en=0,Ca=null,ou=Bo=Or=0,In=Ra=null,Pr!==null){for(i=0;i<Pr.length;i++)if(a=Pr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,l.next=T}a.pending=l}Pr=null}return t}function Cp(t,i){do{var a=Yt;try{if(Cc(),Ro.current=Po,No){for(var l=jt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}No=!1}if(Ur=0,sn=Jt=jt=null,Ea=!1,Ma=0,au.current=null,a===null||a.return===null){en=1,Ca=i,Yt=null;break}e:{var m=t,T=a.return,F=a,j=i;if(i=un,F.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var ce=j,Me=F,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Be=Jh(T);if(Be!==null){Be.flags&=-257,ep(Be,T,F,m,i),Be.mode&1&&Qh(m,ce,i),i=Be,j=ce;var Xe=i.updateQueue;if(Xe===null){var $e=new Set;$e.add(j),i.updateQueue=$e}else Xe.add(j);break e}else{if((i&1)===0){Qh(m,ce,i),mu();break e}j=Error(n(426))}}else if(Ht&&F.mode&1){var qt=Jh(T);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),ep(qt,T,F,m,i),Tc(_s(j,F));break e}}m=j=_s(j,F),en!==4&&(en=2),Ra===null?Ra=[m]:Ra.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ie=Zh(m,j,i);Mh(m,ie);break e;case 1:F=j;var Y=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(ur===null||!ur.has(se)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ae=Kh(m,F,i);Mh(m,Ae);break e}}m=m.return}while(m!==null)}Ip(a)}catch(Qe){i=Qe,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Rp(){var t=Fo.current;return Fo.current=Po,t===null?Po:t}function mu(){(en===0||en===3||en===2)&&(en=4),an===null||(Or&268435455)===0&&(Bo&268435455)===0||hr(an,un)}function Xo(t,i){var a=wt;wt|=2;var l=Rp();(an!==t||un!==i)&&(zi=null,kr(t,i));do try{mx();break}catch(d){Cp(t,d)}while(!0);if(Cc(),wt=a,Fo.current=l,Yt!==null)throw Error(n(261));return an=null,un=0,en}function mx(){for(;Yt!==null;)Np(Yt)}function gx(){for(;Yt!==null&&!Q();)Np(Yt)}function Np(t){var i=Dp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Ip(t):Yt=i,au.current=null}function Ip(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=lx(a,i,Bn),a!==null){Yt=a;return}}else{if(a=cx(a,i),a!==null){a.flags&=32767,Yt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);en===0&&(en=5)}function Fr(t,i,a){var l=Lt,d=Zn.transition;try{Zn.transition=null,Lt=1,yx(t,i,a,l)}finally{Zn.transition=d,Lt=l}return null}function yx(t,i,a,l){do bs();while(dr!==null);if((wt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ja(t,m),t===an&&(Yt=an=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vo||(Vo=!0,Up(lt,function(){return bs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Zn.transition,Zn.transition=null;var T=Lt;Lt=1;var F=wt;wt|=4,au.current=null,dx(t,a),Sp(a,t),zy(mc),no=!!pc,mc=pc=null,t.current=a,fx(a),Ce(),wt=F,Lt=T,Zn.transition=m}else t.current=a;if(Vo&&(Vo=!1,dr=t,Go=d),m=t.pendingLanes,m===0&&(ur=null),fn(a.stateNode),Ln(t,Te()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ho)throw Ho=!1,t=cu,cu=null,t;return(Go&1)!==0&&t.tag!==0&&bs(),m=t.pendingLanes,(m&1)!==0?t===uu?Na++:(Na=0,uu=t):Na=0,ar(),null}function bs(){if(dr!==null){var t=vf(Go),i=Zn.transition,a=Lt;try{if(Zn.transition=null,Lt=16>t?16:t,dr===null)var l=!1;else{if(t=dr,dr=null,Go=0,(wt&6)!==0)throw Error(n(331));var d=wt;for(wt|=4,Ve=t.current;Ve!==null;){var m=Ve,T=m.child;if((Ve.flags&16)!==0){var F=m.deletions;if(F!==null){for(var j=0;j<F.length;j++){var ce=F[j];for(Ve=ce;Ve!==null;){var Me=Ve;switch(Me.tag){case 0:case 11:case 15:Aa(8,Me,m)}var we=Me.child;if(we!==null)we.return=Me,Ve=we;else for(;Ve!==null;){Me=Ve;var Ee=Me.sibling,Be=Me.return;if(gp(Me),Me===ce){Ve=null;break}if(Ee!==null){Ee.return=Be,Ve=Ee;break}Ve=Be}}}var Xe=m.alternate;if(Xe!==null){var $e=Xe.child;if($e!==null){Xe.child=null;do{var qt=$e.sibling;$e.sibling=null,$e=qt}while($e!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ve=T;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Aa(9,m,m.return)}var ie=m.sibling;if(ie!==null){ie.return=m.return,Ve=ie;break e}Ve=m.return}}var Y=t.current;for(Ve=Y;Ve!==null;){T=Ve;var se=T.child;if((T.subtreeFlags&2064)!==0&&se!==null)se.return=T,Ve=se;else e:for(T=Y;Ve!==null;){if(F=Ve,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ko(9,F)}}catch(Qe){Wt(F,F.return,Qe)}if(F===T){Ve=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,Ve=Ae;break e}Ve=F.return}}if(wt=d,ar(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Rt,t)}catch{}l=!0}return l}finally{Lt=a,Zn.transition=i}}return!1}function Lp(t,i,a){i=_s(a,i),i=Zh(t,i,1),t=lr(t,i,1),i=Mn(),t!==null&&(An(t,1,i),Ln(t,i))}function Wt(t,i,a){if(t.tag===3)Lp(t,t,a);else for(;i!==null;){if(i.tag===3){Lp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ur===null||!ur.has(l))){t=_s(a,t),t=Kh(i,t,1),i=lr(i,t,1),t=Mn(),i!==null&&(An(i,1,t),Ln(i,t));break}}i=i.return}}function xx(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&a,an===t&&(un&a)===a&&(en===4||en===3&&(un&130023424)===un&&500>Te()-lu?kr(t,0):ou|=a),Ln(t,i)}function Pp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var a=Mn();t=Di(t,i),t!==null&&(An(t,i,a),Ln(t,a))}function vx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Pp(t,a)}function _x(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Pp(t,a)}var Dp;Dp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Nn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,ox(t,i,a);Nn=(t.flags&131072)!==0}else Nn=!1,Ht&&(i.flags&1048576)!==0&&hh(i,So,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oo(t,i),t=i.pendingProps;var d=fs(i,pn.current);xs(i,a),d=Fc(null,i,l,t,d,a);var m=Bc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(l)?(m=!0,xo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lc(i),d.updater=Do,i.stateNode=d,d._reactInternals=i,Xc(i,l,t,a),i=Zc(null,i,l,!0,m,a)):(i.tag=0,Ht&&m&&Ec(i),En(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Oo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Ex(l),t=si(l,t),d){case 0:i=$c(null,i,l,t,a);break e;case 1:i=ap(null,i,l,t,a);break e;case 11:i=tp(null,i,l,t,a);break e;case 14:i=np(null,i,l,si(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),$c(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),ap(t,i,l,d,a);case 3:e:{if(op(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,d=m.element,Eh(t,i),Ao(i,l,null,a);var T=i.memoizedState;if(l=T.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=_s(Error(n(423)),i),i=lp(t,i,l,a,d);break e}else if(l!==d){d=_s(Error(n(424)),i),i=lp(t,i,l,a,d);break e}else for(Fn=ir(i.stateNode.containerInfo.firstChild),kn=i,Ht=!0,ri=null,a=_h(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),l===d){i=Oi(t,i,a);break e}En(t,i,l,a)}i=i.child}return i;case 5:return wh(i),t===null&&wc(i),l=i.type,d=i.pendingProps,m=t!==null?t.memoizedProps:null,T=d.children,gc(l,d)?T=null:m!==null&&gc(l,m)&&(i.flags|=32),sp(t,i),En(t,i,T,a),i.child;case 6:return t===null&&wc(i),null;case 13:return cp(t,i,a);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,a):En(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),tp(t,i,l,d,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,zt(bo,l._currentValue),l._currentValue=T,m!==null)if(ii(m.value,T)){if(m.children===d.children&&!Cn.current){i=Oi(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){T=m.child;for(var j=F.firstContext;j!==null;){if(j.context===l){if(m.tag===1){j=Ui(-1,a&-a),j.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?j.next=j:(j.next=Me.next,Me.next=j),ce.pending=j}}m.lanes|=a,j=m.alternate,j!==null&&(j.lanes|=a),Nc(m.return,a,i),F.lanes|=a;break}j=j.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(n(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),Nc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}En(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,xs(i,a),d=Yn(d),l=l(d),i.flags|=1,En(t,i,l,a),i.child;case 14:return l=i.type,d=si(l,i.pendingProps),d=si(l.type,d),np(t,i,l,d,a);case 15:return ip(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),Oo(t,i),i.tag=1,Rn(l)?(t=!0,xo(i)):t=!1,xs(i,a),Yh(i,l,d),Xc(i,l,d,a),Zc(null,i,l,!0,t,a);case 19:return dp(t,i,a);case 22:return rp(t,i,a)}throw Error(n(156,i.tag))};function Up(t,i){return ue(t,i)}function Sx(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,a,l){return new Sx(t,i,a,l)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ex(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===de)return 14}return 2}function pr(t,i){var a=t.alternate;return a===null?(a=Kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function qo(t,i,a,l,d,m){var T=2;if(l=t,typeof t=="function")gu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case z:return Br(a.children,d,m,i);case H:T=8,d|=8;break;case R:return t=Kn(12,a,i,d|2),t.elementType=R,t.lanes=m,t;case X:return t=Kn(13,a,i,d),t.elementType=X,t.lanes=m,t;case ne:return t=Kn(19,a,i,d),t.elementType=ne,t.lanes=m,t;case re:return Yo(a,d,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:T=10;break e;case P:T=9;break e;case q:T=11;break e;case de:T=14;break e;case ee:T=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(T,a,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function Br(t,i,a,l){return t=Kn(7,t,l,i),t.lanes=a,t}function Yo(t,i,a,l){return t=Kn(22,t,l,i),t.elementType=re,t.lanes=a,t.stateNode={isHidden:!1},t}function yu(t,i,a){return t=Kn(6,t,null,i),t.lanes=a,t}function xu(t,i,a){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Mx(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wn(0),this.expirationTimes=Wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vu(t,i,a,l,d,m,T,F,j){return t=new Mx(t,i,a,F,j),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(m),t}function bx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Op(t){if(!t)return sr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Rn(a))return uh(t,a,i)}return i}function zp(t,i,a,l,d,m,T,F,j){return t=vu(a,l,!0,t,d,m,T,F,j),t.context=Op(null),a=t.current,l=Mn(),d=fr(a),m=Ui(l,d),m.callback=i??null,lr(a,m,d),t.current.lanes=d,An(t,d,l),Ln(t,l),t}function $o(t,i,a,l){var d=i.current,m=Mn(),T=fr(d);return a=Op(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(m,T),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=lr(d,i,T),t!==null&&(li(t,d,T,m),To(t,d,T)),T}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function _u(t,i){kp(t,i),(t=t.alternate)&&kp(t,i)}function wx(){return null}var Fp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}Ko.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$o(t,i,null,null)},Ko.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zr(function(){$o(null,t,null,null)}),i[Ni]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ef();t={blockedOn:null,target:t,priority:i};for(var a=0;a<er.length&&i!==0&&i<er[a].priority;a++);er.splice(a,0,t),a===0&&wf(t)}};function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Tx(t,i,a,l,d){if(d){if(typeof l=="function"){var m=l;l=function(){var ce=Zo(T);m.call(ce)}}var T=zp(i,l,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=T,t[Ni]=T.current,pa(t.nodeType===8?t.parentNode:t),zr(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var F=l;l=function(){var ce=Zo(j);F.call(ce)}}var j=vu(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=j,t[Ni]=j.current,pa(t.nodeType===8?t.parentNode:t),zr(function(){$o(i,j,a,l)}),j}function Jo(t,i,a,l,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var F=d;d=function(){var j=Zo(T);F.call(j)}}$o(i,T,t,d)}else T=Tx(a,i,t,d,l);return Zo(T)}_f=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Qt(i.pendingLanes);a!==0&&(Xl(i,a|1),Ln(i,Te()),(wt&6)===0&&(Ms=Te()+500,ar()))}break;case 13:zr(function(){var l=Di(t,1);if(l!==null){var d=Mn();li(l,t,1,d)}}),_u(t,1)}},ql=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var a=Mn();li(i,t,134217728,a)}_u(t,134217728)}},Sf=function(t){if(t.tag===13){var i=fr(t),a=Di(t,i);if(a!==null){var l=Mn();li(a,t,i,l)}_u(t,i)}},Ef=function(){return Lt},Mf=function(t,i){var a=Lt;try{return Lt=t,i()}finally{Lt=a}},Le=function(t,i,a){switch(i){case"input":if(We(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=go(l);if(!d)throw Error(n(90));ze(l),We(l,d)}}}break;case"textarea":xe(t,a);break;case"select":i=a.value,i!=null&&O(t,!!a.multiple,i,!1)}},kt=hu,Kt=zr;var Ax={usingClientEntryPoint:!1,Events:[ya,us,go,Oe,dt,hu]},Ia={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cx={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Rt=el.inject(Cx),St=el}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax,Pn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(i))throw Error(n(200));return bx(t,i,null,a)},Pn.createRoot=function(t,i){if(!Eu(t))throw Error(n(299));var a=!1,l="",d=Fp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=vu(t,1,!1,null,null,a,!1,l,d),t[Ni]=i.current,pa(t.nodeType===8?t.parentNode:t),new Su(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=I(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return zr(t)},Pn.hydrate=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!0,a)},Pn.hydrateRoot=function(t,i,a){if(!Eu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,m="",T=Fp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=zp(i,null,t,1,a??null,d,!1,m,T),t[Ni]=i.current,pa(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ko(i)},Pn.render=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!1,a)},Pn.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(zr(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Pn.unstable_batchedUpdates=hu,Pn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,i,a,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Yp;function zx(){if(Yp)return wu.exports;Yp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wu.exports=Ox(),wu.exports}var $p;function kx(){if($p)return tl;$p=1;var s=zx();return tl.createRoot=s.createRoot,tl.hydrateRoot=s.hydrateRoot,tl}var Fx=kx();const Bx=ag(Fx),Cu=[{id:"yzy_mono_dome",code:"YZY-DOME-01",name:"YZY MONO DOME",subtitle:"MONOLITHIC CATENARY EARTH DOME",category:"SINGLE RESIDENCE & DISASTER SHELTER",tagline:"Aerodynamic, self-supporting catenary arch dome immune to hurricane winds and wildfires.",description:"Inspired by ancient subterranean architecture and futuristic planetary habitats. Built with a continuous curved shell using compressed earth blocks, aircrete, or ferrocement over an inflatable compass arm guide. Zero structural wood or steel required.",sqft:350,diameter:"21.0 FT (6.4m)",height:"14.5 FT (4.4m)",occupancy:"2 - 4 Persons",buildTimeDays:7,difficulty:"NOVICE FRIENDLY",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"ferrocement",walls:"aircrete",roof:"aircrete",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:120,estimatedCostMin:3200,estimatedCostMax:7800,modelShape:"dome",windResistance:"220 MPH (Category 5+)",seismicZone:"Zone 4 (Maximum Flex Resilience)",thermalComfort:"Passive Solar & Earth-Bermed (Zero HVAC Needed in 0°F to 110°F)",idealFor:"Disaster relief, extreme climates, off-grid eco-living, homeless rehabilitation communities."},{id:"rammed_earth_villa",code:"YZY-VILLA-02",name:"MONOLITHIC EARTH VILLA",subtitle:"STARK MODERN BRUTALIST SINGLE-FAMILY HOME",category:"PERMANENT FAMILY RESIDENCE",tagline:"Massive 18-inch striated tamped earth walls with expansive floor-to-ceiling daylight portals.",description:"A timeless, ultra-modern brutalist sanctuary. The massive thermal inertia of rammed earth acts as a natural battery, absorbing desert heat by day and radiating warmth through cool nights. Combines minimalist raw earth textures with high-performance mass timber roof spans.",sqft:1200,diameter:"42.0 FT x 28.0 FT",height:"12.0 FT (3.6m)",occupancy:"4 - 6 Persons",buildTimeDays:21,difficulty:"INTERMEDIATE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"rammed_earth",walls:"rammed_earth",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"offgrid_solar_water"},baseLaborHours:480,estimatedCostMin:14500,estimatedCostMax:28e3,modelShape:"cuboid_villa",windResistance:"180 MPH",seismicZone:"Zone 4 Engineered Tie-Rods",thermalComfort:"Internal Thermal Flywheel (Constant 68°F-72°F microclimate)",idealFor:"Permanent rural/suburban family housing, regenerative agrarian retreats, enduring generational sanctuaries."},{id:"modular_eco_apartments",code:"YZY-MOD-03",name:"MODULAR COMMUNE BLOCK",subtitle:"MULTI-FAMILY 8-UNIT SUSTAINABLE APARTMENT SYSTEM",category:"MULTI-FAMILY HOUSING",tagline:"Scalable modular interlocking cube units built around a central shaded communal courtyard.",description:"Designed to rapidly solve urban and suburban housing crises. Standardized 600 sqft interlocking modular apartments constructed from Compressed Earth Blocks (CEBs) and Mass Timber, stacked up to 3 floors with shared acoustic mycelium separation and central rainwater filtration cistern.",sqft:4800,diameter:"65.0 FT x 75.0 FT (3 Stories)",height:"34.0 FT (10.3m)",occupancy:"24 - 32 Persons (8 Units)",buildTimeDays:45,difficulty:"COMMUNITY MASTER CREW",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"ceb_blocks",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:1450,estimatedCostMin:52e3,estimatedCostMax:98e3,modelShape:"modular_block",windResistance:"175 MPH",seismicZone:"Zone 4 Base-Isolated CLT joints",thermalComfort:"Communal central wind-tower draft & cross-ventilation",idealFor:"Affordable urban community housing, transitional refugee housing, university cooperatives."},{id:"donda_resilience_commons",code:"DONDA-CITY-04",name:"DONDA RESILIENCE COMMONS",subtitle:"DECENTRALIZED 24-UNIT AUTONOMOUS MICRO-CITY",category:"DECENTRALIZED ECO-VILLAGE",tagline:"100% self-sufficient closed-loop community ecosystem integrating shelter, food, solar, and water.",description:"A circular micro-city masterplan comprising 24 monolithic dome residences, a central geodesic community hub, open-air amphitheater, vertical permaculture aquaponic greenhouses, and a centralized renewable utility grid. Creates economic and energetic sovereignty for underserved communities.",sqft:18500,diameter:"320.0 FT Circular Perimeter",height:"28.0 FT Central Dome",occupancy:"80 - 120 Persons",buildTimeDays:90,difficulty:"DECENTRALIZED GUILD BUILD",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"bamboo_composite",walls:"rammed_earth",roof:"ferrocement",insulation:"mycelium_panels",utilities:"microgrid_communal"},baseLaborHours:5200,estimatedCostMin:185e3,estimatedCostMax:34e4,modelShape:"village_compound",windResistance:"220 MPH",seismicZone:"Geodesic Interlock (Extreme Resilient)",thermalComfort:"Integrated Earth-Tubes & Passive Aquifer Cooling",idealFor:"Sovereign intentional communities, Native American reservation empowerment, disaster recovery settlements."},{id:"rapid_emergency_pod",code:"YZY-POD-05",name:"RAPID EMERGENCY FLATPACK POD",subtitle:"48-HOUR CRITICAL RELIEF DEPLOYABLE SHELTER",category:"RAPID CRISIS RESPONSE",tagline:"Precision flatpack modular shelter assembled in under 48 hours with zero heavy machinery.",description:"A lightweight, interlocking bio-panel pod designed for immediate deployment to humanitarian crisis and disaster zones. Assembles using dry interlocking keyed pins. Features integrated insulated floor, roof rainwater run-off, and plug-and-play 12V solar LED & USB power kit.",sqft:160,diameter:"12.0 FT x 13.5 FT",height:"9.5 FT (2.9m)",occupancy:"1 - 3 Persons",buildTimeDays:2,difficulty:"ZERO EXPERIENCE NEEDED",defaultMaterials:{foundation:"recycled_poly_bricks",superstructure:"cross_laminated_timber",walls:"recycled_poly_bricks",roof:"ferrocement",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:24,estimatedCostMin:1400,estimatedCostMax:2900,modelShape:"micro_pod",windResistance:"140 MPH",seismicZone:"Zone 4 Flexible Joint Pod",thermalComfort:"Bio-foam Insulation (R-16 Envelope)",idealFor:"Disaster first-response, homeless transitional shelters, mobile clinic & quarantine stations."},{id:"terrace_earth_apartments",code:"YZY-TERRACE-06",name:"STEPPED EARTH TERRACE COMPLEX",subtitle:"BIOPHILIC STEPPED DUPLEX & APARTMENT TOWER",category:"HIGH-DENSITY MULTI-TIER",tagline:"Tiered stepped brutalist earth terraces with rooftop gardens on every single residential level.",description:"Inspired by ancient Mesopotamian ziggurats and high-density modernist brutalism. Each floor steps backward to provide the unit below with an expansive green garden terrace for food cultivation, solar collection, and natural shade.",sqft:9600,diameter:"90.0 FT x 60.0 FT (4 Tiers)",height:"45.0 FT (13.7m)",occupancy:"48 - 60 Persons (16 Units)",buildTimeDays:70,difficulty:"ENGINEERED COLLECTIVE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"hempcrete",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:2900,estimatedCostMin:11e4,estimatedCostMax:21e4,modelShape:"terrace_block",windResistance:"185 MPH",seismicZone:"Zone 4 Engineered CLT Intertie",thermalComfort:"Rooftop soil garden thermal blanket & passive air shafts",idealFor:"Dense urban eco-neighborhoods, communal housing cooperatives, humanitarian urban centers."}],nl=[{id:"ceb_blocks",name:"COMPRESSED EARTH BLOCKS (CEB)",shortName:"CEB Blocks",category:"EARTH & SOIL",tagline:"Ultra-low cost subsoil compressed at 2,000 PSI with zero kiln firing.",description:"Formed using local subsoil (clay + sand) mixed with 5-8% lime/cement stabilizer and compressed using a manual or hydraulic press. Interlocking designs require zero mortar, drastically reducing labor and build time.",unitCost:"$0.45 / block ($4.20 / sq ft wall)",costPerSqFt:4.2,carbonImpact:-18.5,carbonRating:"EXEMPLARY (A+)",thermalRValue:2.8,thermalMass:"VERY HIGH",compressiveStrength:"1,200 - 1,800 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (With lime wash / hydrophobic sealer)",localSourcingRate:"90% On-Site Soil Excavation",sourcingMethod:'Excavate subsoil on-site. Sieve through 1/4" wire mesh. Mix with 8% lime. Press with manual Cinva-Ram ($380).',pros:["Extremely low cost ($0.45/block) — 90% of material dug directly from on-site foundation soil","Interlocking dry-stack design requires zero mortar and zero master masonry skills","Immune to termites, rot, mold, and wildfire (Class A 4-hour fireproof rating)","High thermal mass acts as a natural temperature battery stabilizing indoor microclimate"],cons:["Requires manual soil sieving and curing period (14 days with daily water mist)","Heavy physical weight requiring solid gravel trench or geopolymer footing","Needs protective roof overhangs and natural lime wash against direct monsoon rains"],supplier:{name:"AECT Earth Block Technologies",location:"San Antonio, Texas & Global Shipping",contact:"sales@aectearthblock.com | +1 (210) 633-6300",website:"aectearthblock.com",exactPrice:"$0.45 per standard block ($450 per pallet of 1,000 blocks)",minimumOrder:"1 Pallet or DIY on-site for $0.12/block with rented press",leadTime:"3-5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY DIY",lifespan:"100+ YEARS",compatibleLayers:["walls","foundation","superstructure"],colorHex:"#B8865A",textureType:"earth_block",badge:"TOP COST-SAVER"},{id:"rammed_earth",name:"MONOLITHIC RAMMED EARTH",shortName:"Rammed Earth",category:"EARTH & SOIL",tagline:"Stark, monolithic brutalist earthen walls with superior thermal flywheel inertia.",description:"Damp subsoil with gravel and clay tamped pneumatically or manually within slip-form wooden formwork. Produces gorgeous striated raw stone layers, perfect acoustic dampening, and zero off-gassing.",unitCost:"$6.80 / sq ft wall",costPerSqFt:6.8,carbonImpact:-14.2,carbonRating:"EXEMPLARY (A+)",thermalRValue:3.5,thermalMass:"MAXIMUM",compressiveStrength:"1,500 - 2,400 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (When capped with deep overhangs and lime stabilization)",localSourcingRate:"95% Local Quarry & Excavation",sourcingMethod:"Sourced directly from local quarry tailings or foundation excavation. Mix 70% aggregate/sand and 30% clay/silt.",pros:["Iconic monolithic brutalist aesthetic with breathtaking natural striated earth strata","Supreme acoustic isolation (kills outside traffic and environmental noise)","Zero off-gassing, zero drywall, zero paint needed — wall is fully structural and finished","Centuries-long lifespan (150+ years) getting stronger over time"],cons:["Requires sturdy reusable wooden slipform formwork setup","Labor-intensive tamping process (beneficial for community guild builds)","Difficult to modify or knock down once fully cured"],supplier:{name:"Sirewall / Earth Structures Group & Local Aggregates",location:"North America, Europe & Australia Hubs",contact:"info@sirewall.com | +1 (250) 537-9355",website:"sirewall.com",exactPrice:"$18.50 per ton delivered quarry road-base aggregate ($6.80/sqft installed DIY)",minimumOrder:"10 Tons (Dump truck delivery)",leadTime:"24-48 Hours from local aggregate yards"},laborDifficulty:"INTERMEDIATE (Formwork setup)",lifespan:"150+ YEARS",compatibleLayers:["walls","superstructure"],colorHex:"#A07855",textureType:"rammed_earth",badge:"ICONIC BRUTALISM"},{id:"hempcrete",name:"BIO-COMPOSITE HEMPCRETE",shortName:"Hempcrete",category:"BIO-MASS",tagline:"Carbon-negative breathable biocomposite wall fill with exceptional R-value.",description:"Cast blend of industrial hemp hurds (woody inner core) and hydraulic lime binder. Continuously absorbs atmospheric CO2 throughout its multi-century lifespan while regulating internal humidity and mold prevention.",unitCost:"$8.50 / sq ft wall",costPerSqFt:8.5,carbonImpact:-110,carbonRating:"NET CARBON SINK (-110kg CO2/m3)",thermalRValue:18,thermalMass:"MEDIUM-HIGH",compressiveStrength:"Non-structural infill (Requires timber or CEB post frame)",fireRating:"CLASS A (Flame retardant char layer)",waterResistance:"VAPOR PERMEABLE / BREATHABLE",localSourcingRate:"70% Agricultural Hemp Regions",sourcingMethod:"Blend 4 parts hemp hurds, 1 part hydrated lime binder, 1.5 parts water in pan mixer.",pros:["Gigantic Net Carbon Sink (-110 kg CO2 per cubic meter sequestered for life)","High thermal insulation (R-18) keeping rooms warm in winter and cool in summer","Vapor-permeable 'breathable' envelope naturally prevents interior humidity, mold, and rot","Lightweight and extremely novice-friendly to mix and cast"],cons:["Non-structural infill — requires structural timber or CEB column frame to carry roof load","Slower drying time (requires 4-8 weeks to fully cure before final breathable lime plaster)","Requires sourcing industrial hemp hurds from agricultural processing mills"],supplier:{name:"Hempitecture Inc. & US Hemp Brokerage",location:"Jerome, Idaho / Louisville, Kentucky",contact:"orders@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com",exactPrice:"$0.42 / lb ($840 per 1-ton super-sack of processed hemp hurd)",minimumOrder:"1 Super-sack (2,000 lbs) or 50 lb trial bags ($28/bag)",leadTime:"3-5 Business Days LTL Freight"},laborDifficulty:"NOVICE / COMMUNITY FRIENDLY",lifespan:"300+ YEARS (Petrifies into limestone over time)",compatibleLayers:["walls","insulation","roof"],colorHex:"#8B9574",textureType:"hemp_composite",badge:"MAX CARBON SINK"},{id:"mycelium_panels",name:"GROWN MYCELIUM STRUCTURAL PANELS",shortName:"Mycelium Bio-Foam",category:"BIO-MASS",tagline:"Self-assembling fungal root bio-foam grown in 7 days from agricultural crop waste.",description:"Mycelium (mushroom vegetative tissue) inoculated into agricultural waste substrates (straw, sawdust, husks) and grown inside modular molds. Baked to inactivate fungi, producing ultra-lightweight, 100% biodegradable thermal & acoustic panels.",unitCost:"$3.90 / sq ft panel",costPerSqFt:3.9,carbonImpact:-45,carbonRating:"NET CARBON SINK (A+)",thermalRValue:16.5,thermalMass:"LOW (Ultra-Lightweight)",compressiveStrength:"300 - 600 PSI (Rigid Foam Core)",fireRating:"CLASS 1 (Natural self-extinguishing char)",waterResistance:"TREATED (Natural wax or bio-resin coating)",localSourcingRate:"100% Farm Crop Residue Inoculation",sourcingMethod:"Grown in dark ambient containers in 7 days from pasteurized agricultural crop chaff and mushroom spawn.",pros:["Can be grown in 7 days in community micro-grow hubs with zero heavy industrial factories","Replaces toxic petroleum polystyrene foam insulation with 100% biodegradable bio-mass","Outstanding acoustic dampening and R-16.5 thermal resistance","Natural Class 1 flame retardance (chars rather than combusts)"],cons:["Must be baked or heat-dried at 180°F to deactivate live mycelium growth","Requires natural moisture barrier (beeswax, bio-resin) for exterior exposed applications","Lightweight core must be paired with protective cladding or plaster"],supplier:{name:"Ecovative Design / MycoWorks Commercial Materials",location:"Green Island, New York & Regional Grow Partners",contact:"grow@ecovative.com | +1 (518) 273-3753",website:"ecovative.com",exactPrice:'$3.90 / sq ft (24"x48" panels at $31.20 each) or $12 for 5-gal GIY Inoculum kit',minimumOrder:"10 Panels or DIY Grow Spawn bags",leadTime:"7 Days (Shipped fresh or grown on-demand)"},laborDifficulty:"NOVICE (Mold-grown process)",lifespan:"60+ YEARS",compatibleLayers:["insulation","roof","finishes"],colorHex:"#C5B9A5",textureType:"bio_foam",badge:"FUTURISTIC BIO-TECH"},{id:"geopolymer_concrete",name:"SLAG/POZZOLAN GEOPOLYMER CONCRETE",shortName:"Geopolymer Concrete",category:"CIRCULAR MINERAL",tagline:"85% lower carbon footprint than Portland cement with 2x chemical and heat resilience.",description:"Synthesized via alkaline activation of industrial aluminosilicate by-products (ground granulated blast furnace slag, fly ash, or calcined metakaolin). Cures with zero calcium oxide calcination emissions.",unitCost:"$5.10 / sq ft slab",costPerSqFt:5.1,carbonImpact:-4,carbonRating:"ULTRA LOW EMISSIONS (A)",thermalRValue:1.5,thermalMass:"HIGH",compressiveStrength:"4,500 - 8,000 PSI",fireRating:"CLASS A (Withstands 1,200°C without spalling)",waterResistance:"IMPERMEABLE",localSourcingRate:"80% Industrial Slag / Fly Ash / Volcanic Ash",sourcingMethod:"Mix slag/fly-ash with sodium silicate activator solution and aggregate.",pros:["85% reduction in embodied carbon compared to traditional Portland cement","Ultra-high compressive strength (up to 8,000 PSI) for indestructible foundation footings","Immune to acid, sulfate corrosion, and extreme heat (withstands 1,200°C without spalling)","Cures rapidly into durable permanent stone foundation"],cons:["Requires handling alkaline activator solution with basic safety gloves & goggles","Needs precise batch mixing ratios for optimal polymerization cure","Slightly less common in standard home-depot retail than Portland cement"],supplier:{name:"Boral Resources / Wagners Earth Friendly Concrete (EFC)",location:"International / Regional Slag Terminals",contact:"efc@wagner.com.au | +1 (800) 843-6652",website:"wagner.com.au/main/earth-friendly-concrete",exactPrice:"$128.00 / cubic yard ready-mix ($5.10 / sq ft 4-inch slab)",minimumOrder:"5 Cubic Yards or $18.50 per 50 lb dry binder bag",leadTime:"24-48 Hours Dispatch"},laborDifficulty:"INTERMEDIATE",lifespan:"200+ YEARS",compatibleLayers:["foundation","superstructure","roof"],colorHex:"#7A7A78",textureType:"raw_concrete",badge:"ULTRA-STRENGTH FOUNDATION"},{id:"cross_laminated_timber",name:"MASS TIMBER / CROSS-LAMINATED TIMBER (CLT)",shortName:"CLT Mass Timber",category:"RENEWABLE WOOD",tagline:"Precision-engineered solid wood slabs locking carbon into structural monolithic grids.",description:"Layers of kiln-dried sustainably managed lumber stacked perpendicularly and bonded with non-toxic polyurethane adhesive. Replaces steel and concrete for rapid modular multi-story assembly.",unitCost:"$11.20 / sq ft panel",costPerSqFt:11.2,carbonImpact:-95,carbonRating:"NET CARBON SINK (A+)",thermalRValue:8.5,thermalMass:"MEDIUM",compressiveStrength:"3,500 PSI (Bending strength 4,200 PSI)",fireRating:"CLASS A (Predictable slow charring protects core)",waterResistance:"MEDIUM (Requires weather barrier membrane)",localSourcingRate:"85% FSC-Certified Forestry & Regional Mills",sourcingMethod:"Procured from regional forestry cooperatives. Precision CNC cut for rapid crane assembly.",pros:["Precision pre-fabricated panels assemble on site in hours like giant lego blocks","Massive carbon storage (-95 kg CO2/sqft locked inside wood matrix)","Incredible biophilic warmth and natural wood interior finish (no drywall needed)","High strength-to-weight ratio allows multi-story cantilevered apartment designs"],cons:["Higher material cost ($11.20/sqft) than raw compressed earth ($4.20/sqft)","Requires crane or multi-person crew to hoist large heavy panels into place","Must be protected from continuous direct rain contact with weatherproofing"],supplier:{name:"SmartLam North America / Mercer Mass Timber",location:"Columbia Falls, Montana / Spokane, Washington",contact:"sales@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:'$11.20 / sq ft (3-ply 4.1" CLT billets at $358 per 8x4 ft panel)',minimumOrder:"1 Flatbed Truckload (4,000 sqft) or custom cut-to-order",leadTime:"2-3 Weeks CNC Fabrication"},laborDifficulty:"CRANE / MODULAR CREW",lifespan:"120+ YEARS",compatibleLayers:["superstructure","roof","walls"],colorHex:"#C9A066",textureType:"cross_timber",badge:"HIGH-RISE MODULAR"},{id:"aircrete",name:"FOAMED CELLULAR AIRCRETE",shortName:"Aircrete Foam Core",category:"FOAMED MINERAL",tagline:"Inexpensive, lightweight aerated mineral mix easily cut with hand saws.",description:"A slurry of stabilized cement/lime with tiny dense air bubbles produced by organic foaming agents. Weighs 1/5th of standard concrete, provides integrated thermal insulation, and allows easy dome casting.",unitCost:"$3.10 / sq ft",costPerSqFt:3.1,carbonImpact:-1.2,carbonRating:"LOW CARBON (B+)",thermalRValue:12,thermalMass:"MEDIUM",compressiveStrength:"400 - 800 PSI",fireRating:"CLASS A (Immune to fire/pest rot)",waterResistance:"HIGH (When coated with elastomeric or lime sealer)",localSourcingRate:"90% Standard Local Supplies + Bio-Foamer",sourcingMethod:"Prepared on-site using continuous bio-foam generator ($120 tool) and paddle mixer.",pros:["Extremely affordable ($3.10/sqft) and expands 4x in volume from foam bubbles","Ultra-lightweight (floats on water!) and can be shaped with standard wood hand saws","Class A fireproof and completely immune to termites, mold, and water rot","Ideal for rapid casting of curved parabolic monolithic domes"],cons:["Lower compressive strength (400-800 PSI) than solid earth — unsuitable for multi-story point loads","Requires continuous bio-foam generator wand tool ($120)","Needs exterior waterproof elastomeric or hot lime plaster coat"],supplier:{name:"Domegaia / AirCrete Global Supplies",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"support@domegaia.com | +1 (808) 575-2000",website:"domegaia.com",exactPrice:"$38.00 per gallon bio-foaming concentrate (makes 2,500 sqft of foam) + local binder",minimumOrder:"1 Gallon jug + $120 Foam Generator wand",leadTime:"3-5 Days Direct Shipping"},laborDifficulty:"NOVICE FRIENDLY",lifespan:"80+ YEARS",compatibleLayers:["walls","roof","insulation"],colorHex:"#E2E2DC",textureType:"aircrete_pumice",badge:"BEST FOR DOMES"},{id:"ferrocement",name:"ULTRA-THIN FERROCEMENT SHELL",shortName:"Ferrocement Shell",category:"COMPOSITE MINERAL",tagline:"High-strength, seismic-proof thin monolithic hyperbolic parabolic shell.",description:"Layers of fine wire mesh and reinforcement steel encapsulated in dense pozzolan-rich mortar plaster. Creates self-supporting curved domes, vaults, and roofs with 1/10th the material volume of regular concrete.",unitCost:"$2.90 / sq ft surface",costPerSqFt:2.9,carbonImpact:-2.5,carbonRating:"RESOURCE EFFICIENT (A-)",thermalRValue:1.2,thermalMass:"MEDIUM",compressiveStrength:"5,000+ PSI",fireRating:"CLASS A (Indestructible to wildfire)",waterResistance:"MAXIMUM (Waterproof tank grade)",localSourcingRate:"95% Hardware Wire Mesh & Local Sand",sourcingMethod:"Constructed with localized manual wire tying and hand plastering. Zero heavy equipment.",pros:["Ultra-thin structural shell (only 1-2 inches thick) saving 90% of material volume","Extreme hurricane and seismic resistance (flexes without brittle cracking)","Completely waterproof and wildfire-proof (used for ocean boat hulls and cisterns)","Requires zero cranes or heavy machinery — tied and plastered by hand"],cons:["Low inherent thermal insulation (R-1.2) — must be paired with mycelium/hemp interior insulation","Requires meticulous tying of wire mesh armature layers","Manual plastering requires steady hand troweling"],supplier:{name:"National Hardware Supply & Local Mesh Distributors",location:"Available in every hardware supply yard globally",contact:"Local steel and masonry supply",website:"mcmaster.com (Expanded metal & hardware cloth)",exactPrice:'$0.32 / sq ft for 1/2" 19-gauge galvanized welded wire mesh + $14 lime sack',minimumOrder:"100 ft rolls ($32.00 / roll)",leadTime:"Same-Day Local Pickup"},laborDifficulty:"NOVICE / ARTISAN DIY",lifespan:"100+ YEARS",compatibleLayers:["roof","superstructure","water_harvesting"],colorHex:"#8E8E89",textureType:"curved_shell",badge:"HURRICANE & SEISMIC PROOF"},{id:"recycled_poly_bricks",name:"CIRCULAR RECYCLED POLYMER INTERLOCKS",shortName:"Recycled Poly-Bricks",category:"CIRCULAR POLYMER",tagline:"100% upcycled ocean & municipal plastic waste molded into indestructible lego blocks.",description:"Sorted and washed HDPE/PP/LDPE plastic waste melted and compression molded into interlocking tongue-and-groove structural blocks. Eliminates mortar entirely and cleans thousands of tons of plastic waste.",unitCost:"$1.80 / block ($3.40 / sq ft wall)",costPerSqFt:3.4,carbonImpact:-62,carbonRating:"PLASTIC DIVERSION (A+)",thermalRValue:6.2,thermalMass:"LOW-MEDIUM",compressiveStrength:"1,800 - 2,500 PSI",fireRating:"CLASS B (Fire retardant mineral additives)",waterResistance:"100% IMPERMEABLE",localSourcingRate:"100% Community Plastic Recycling Streams",sourcingMethod:"Melt shredded municipal plastic bottles/caps into compression block molds.",pros:["Cleans up thousands of lbs of toxic plastic waste from oceans and landfills","Interlocking dry assembly with zero mortar, zero water, and zero drying time","100% waterproof and impervious to underground moisture or termite rot","Lightweight and indestructible to seismic earthquakes"],cons:["Requires fire-retardant mineral coating or natural lime plaster covering","Lower thermal mass inertia than solid rammed earth","Requires community plastic shredder and heated compression mold rig"],supplier:{name:"ByFusion Global Inc. / Precious Plastic Community",location:"Los Angeles, California / Global Open-Source Network",contact:"info@byfusion.com | +1 (310) 906-0300",website:"byfusion.com",exactPrice:'$1.80 per ByBlock (16"x8"x8" interlocking block)',minimumOrder:"1 Pallet of 120 blocks ($216.00) or DIY Precious Plastic mold system",leadTime:"5-7 Days Freight"},laborDifficulty:"ZERO-TOOL DRY ASSEMBLY",lifespan:"500+ YEARS (Non-biodegradable longevity)",compatibleLayers:["walls","foundation","finishes"],colorHex:"#2E4057",textureType:"poly_block",badge:"ZERO-WASTE CIRCULAR"},{id:"bamboo_composite",name:"STRUCTURAL TREATED DENDROCALAMUS BAMBOO",shortName:"Engineered Bamboo",category:"RENEWABLE VEGETATION",tagline:"Tensile strength greater than mild steel with rapid 3-year agricultural regenerative cycle.",description:"Boron-salt treated giant bamboo culms or crushed strand-woven bamboo beams. Provides earthquake flexibility, organic curves, and ultra-fast community construction speed.",unitCost:"$2.20 / linear ft ($4.80 / sq ft frame)",costPerSqFt:4.8,carbonImpact:-88,carbonRating:"RAPID REGENERATIVE SINK (A+)",thermalRValue:2.1,thermalMass:"LOW",compressiveStrength:"4,000 PSI (Tensile: 28,000 PSI)",fireRating:"CLASS B (Boron treated)",waterResistance:"HIGH (When elevated off grade)",localSourcingRate:"100% Tropical/Subtropical Agriculture",sourcingMethod:"Harvest mature 3-4 year poles. Soak in natural borax solution for 14 days.",pros:["Tensile strength (28,000 PSI) rivaling steel with lightweight organic flexibility","Rapidly renewable agricultural crop (reaches full harvest maturity in only 3 years)","Absorbs massive amounts of atmospheric carbon during rapid growth cycle","Creates stunning organic curved roof structures and soaring communal halls"],cons:["Must be treated with natural boric acid/borax to prevent powder-post borer beetles","Requires specialized fish-mouth or pinned joinery techniques",'Must be elevated 12" off wet ground to prevent splashback moisture'],supplier:{name:"BamCore LLC / Guadua Bamboo Global Export",location:"Windsor, California & Ocala, Florida",contact:"sales@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:'$2.20 / linear ft (3-4" diameter structural Guadua culms, $44 per 20ft pole)',minimumOrder:"20 Poles or custom structural bundle",leadTime:"5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY HAND CRAFT",lifespan:"75+ YEARS",compatibleLayers:["superstructure","roof","finishes"],colorHex:"#C49A45",textureType:"bamboo_pole",badge:"TENSILE POWERHOUSE"}],Ru=[{id:"offgrid_solar_water",name:"AUTONOMOUS LIFE-SUPPORT SUITE",description:"5.2kW Photovoltaic Monocrystalline Canopy + 10kWh LFP Battery + 2,000L Rainwater Harvesting & Gravity UV Filtration + Anaerobic Methane Bio-Digester.",cost:4800,carbonImpact:-1200,specs:"Zero municipal grid dependency. 100% daily power & potable water autonomy.",pros:["100% complete energy and potable drinking water sovereignty (zero utility bills forever)","Powers refrigerator, induction cooking, lighting, laptops, and water pumps 24/7","LFP (Lithium Iron Phosphate) battery provides 15+ years cycle life with zero fire risk","Anaerobic digester converts food and organic waste into clean methane cooking gas"],cons:["Requires initial setup investment ($4,800 turnkey complete)","Solar output depends on seasonal daylight (offset by 10kWh battery buffer)"],supplier:{name:"Signature Solar / EcoFlow PowerOcean Hub",location:"Sulphur Springs, Texas",contact:"sales@signaturesolar.com | +1 (903) 441-2090",website:"signaturesolar.com",exactPrice:"$4,800 turnkey complete kit (5kW Hybrid Inverter + 10.24kWh Server Rack Battery + 12x 450W Tier-1 Panels)",leadTime:"2-4 Business Days Freight"}},{id:"essential_eco_pod",name:"ESSENTIAL HYBRID UTILITY POD",description:"2.4kW Solar Array + 5kWh Battery + 1,000L Rain Filtration Cistern + Composting Toilet System.",cost:2400,carbonImpact:-650,specs:"Ideal for rapid single-family and disaster relief deployment.",pros:["Ultra-compact plug-and-play modular power crate ($2,400)","Provides essential daily lighting, phone/device charging, and gravity-fed pure water","Composting toilet system requires zero sewer pipes or municipal hookups"],cons:["Smaller 5kWh battery capacity (not designed for heavy high-draw power tools)","1,000L water cistern requires seasonal rainfall or atmospheric condenser backup"],supplier:{name:"Renogy Off-Grid Systems / Separett Sanitation",location:"Ontario, California",contact:"support@renogy.com | +1 (909) 287-7111",website:"renogy.com",exactPrice:"$2,400 all-in-one plug-and-play modular power and water crate",leadTime:"3-5 Business Days"}},{id:"microgrid_communal",name:"COMMUNAL MICRO-GRID HUB (MULTI-UNIT)",description:"25kW Centralized Solar Pergola + 50kWh Industrial Energy Storage + Central Atmospheric Water Condenser (500L/day) + Greywater Reed Bed Ecosystem.",cost:16500,carbonImpact:-5400,specs:"Powers 8-12 modular units with zero utility bills for community members.",pros:["Powers entire multi-family community or 12-pod village with central energy sovereignty","Atmospheric water generator condenses 500 liters of pure potable water per day out of thin air","Centralized maintenance reduces per-family cost to under $1,375 per residence"],cons:["Requires communal land area for 25kW solar pergola canopy and battery shed","Requires community agreement on power distribution management"],supplier:{name:"Fortress Power / Source Global Atmospheric Water",location:"Southampton, Pennsylvania / Scottsdale, Arizona",contact:"sales@fortresspower.com | +1 (877) 497-6937",website:"fortresspower.com",exactPrice:"$16,500 community district microgrid crate with integrated energy management system",leadTime:"7-10 Business Days"}}],Si={yzy_mono_dome:[{id:"dome_base",name:"SUBGRADE PLINTH & FOUNDATION",category:"FOUNDATION",description:"Load-bearing frost-proof plinth anchoring the catenary dome to bedrock.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","ceb_blocks","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:280,partType:"solid"},{id:"dome_shell",name:"MONOLITHIC DOME SHELL (MAIN ENVELOPE)",category:"ENVELOPE",description:"Parabolic curved earthen shell distributing structural loads into pure compression.",defaultMaterial:"aircrete",allowedMaterials:["aircrete","ceb_blocks","rammed_earth","hempcrete","ferrocement"],surfaceAreaSqft:650,partType:"curved_shell"},{id:"dome_window_oculus",name:"APERTURE: ZENITH SKYLIGHT OCULUS",category:"WINDOWS & APERTURES",description:"Circular central skylight portal bringing natural zenith daylight deep into the interior.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","solid_earthen_cap","timber_louver"],surfaceAreaSqft:25,partType:"aperture"},{id:"dome_portal_tunnel",name:"ENTRANCE TUNNEL & AIRLOCK PORTICO",category:"FACADE & ENTRANCE",description:"Protruding brutalist tunnel entry acting as thermal buffer and windbreak.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","cross_laminated_timber","geopolymer_concrete"],surfaceAreaSqft:90,partType:"portal"},{id:"dome_insulation_liner",name:"INTERIOR BIO-ACOUSTIC LINING",category:"INSULATION",description:"Continuous breathable interior insulation preventing acoustic reverberation.",defaultMaterial:"mycelium_panels",allowedMaterials:["mycelium_panels","hempcrete","aircrete"],surfaceAreaSqft:400,partType:"insulation"},{id:"dome_utilities",name:"OFF-GRID AUTONOMOUS LIFE-SUPPORT",category:"UTILITIES",description:"Closed-loop solar array, battery storage, and rainwater gravity filtration unit.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod","offgrid_solar_water"],surfaceAreaSqft:50,partType:"utility"}],rammed_earth_villa:[{id:"villa_foundation",name:"ENGINEERED SUBGRADE & SLAB",category:"FOUNDATION",description:"High-density monolithic slab with integrated radiant floor tubing.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:1200,partType:"solid"},{id:"villa_south_wall",name:"SOUTH FACADE ENVELOPE",category:"WALLS & APERTURES",description:"Front exterior envelope facing sun azimuth for passive solar heating.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass","cross_laminated_timber"],surfaceAreaSqft:380,partType:"swappable_wall"},{id:"villa_north_wall",name:"NORTH THERMAL SHIELD WALL",category:"WALLS",description:"Thick monolithic earth wall with zero openings to prevent winter heat loss.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","cross_laminated_timber"],surfaceAreaSqft:380,partType:"solid"},{id:"villa_side_walls",name:"EAST & WEST PERIMETER WALLS",category:"WALLS & APERTURES",description:"Flanking striated earth walls with narrow vertical daylight slits.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass"],surfaceAreaSqft:450,partType:"swappable_wall"},{id:"villa_roof_cantilever",name:"CANTILEVERED MASS TIMBER ROOF SLAB",category:"ROOF & CANOPY",description:"Expansive 4-foot overhang roof protecting earthen walls from direct rainfall.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:1450,partType:"roof"},{id:"villa_window_portal",name:"DAYLIGHT RIBBON & PATIO PORTAL",category:"WINDOWS & APERTURES",description:"Floor-to-ceiling high-efficiency insulated low-E glazed glass sliding portal.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:180,partType:"aperture"},{id:"villa_utilities",name:"WHOLE-HOME REGENERATIVE ENERGY SUITE",category:"UTILITIES",description:"5.2kW Solar Pergola + 10kWh Battery + 2,000L Rain Cistern & Methane Digester.",defaultMaterial:"offgrid_solar_water",allowedMaterials:["offgrid_solar_water","essential_eco_pod","microgrid_communal"],surfaceAreaSqft:120,partType:"utility"}],modular_eco_apartments:[{id:"mod_pod_base",name:"PODIUM SUBGRADE & BASE",category:"FOUNDATION",description:"High-compressive engineered base absorbing multi-level residential loads.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:1800,partType:"solid"},{id:"mod_tier1_modules",name:"LEVEL 01 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Lower tier community apartments with direct shaded courtyard access.",defaultMaterial:"ceb_blocks",allowedMaterials:["ceb_blocks","cross_laminated_timber","hempcrete","rammed_earth"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier2_modules",name:"LEVEL 02 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Mid-level residential units with cantilevered balconies.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier3_modules",name:"LEVEL 03 PENTHOUSE MODULES",category:"RESIDENTIAL MODULES",description:"Top floor suites with biophilic light shafts and cross-breeze airflow.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_facade_glazing",name:"COURTYARD WINDOWS & BALCONIES",category:"WINDOWS & APERTURES",description:"High-performance acoustic double/triple glazed window panels.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:420,partType:"aperture"},{id:"mod_roof_canopy",name:"COMMUNAL ROOFTOP CANOPY",category:"ROOF & CANOPY",description:"Mass timber roof pergola supporting communal solar array and food gardens.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:2e3,partType:"roof"},{id:"mod_utilities",name:"DISTRICT MICROGRID & WATER SUITE",category:"UTILITIES",description:"25kW Solar Pergola + 50kWh Battery + Central Water Condenser.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal","offgrid_solar_water"],surfaceAreaSqft:300,partType:"utility"}],donda_resilience_commons:[{id:"donda_base_plaza",name:"COMMUNAL PLAZA & AMPHITHEATER BASE",category:"FOUNDATION",description:"Permeable earth and geopolymer plaza naturally recharging local aquifers.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:6500,partType:"solid"},{id:"donda_central_dome",name:"CENTRAL COMMUNITY BIODOME",category:"CENTRAL COMMONS",description:"Geodesic gathering hub for communal dining, education, and hydroponic food.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","aircrete","bamboo_composite","triple_glazed_glass"],surfaceAreaSqft:2800,partType:"curved_shell"},{id:"donda_living_pods",name:"SATELLITE RESIDENTIAL DOMES (6 PODS)",category:"RESIDENTIAL CLUSTER",description:"Circular perimeter of monolithic dome homes for community residents.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","aircrete","hempcrete"],surfaceAreaSqft:4800,partType:"modular_box"},{id:"donda_pergola_ring",name:"RAIN HARVESTING RING & SOLAR CANOPY",category:"ROOF & CANOPY",description:"Continuous circular canopy capturing 100% of seasonal rainfall for village use.",defaultMaterial:"bamboo_composite",allowedMaterials:["bamboo_composite","cross_laminated_timber","ferrocement"],surfaceAreaSqft:3200,partType:"roof"},{id:"donda_microgrid",name:"DECENTRALIZED CITY MICRO-GRID",category:"UTILITIES",description:"Zero-dependency power, water generation, and anaerobic waste recycling.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:800,partType:"utility"}],rapid_emergency_pod:[{id:"pod_base_chassis",name:"ELEVATED INTERLOCKING BASE PLINTH",category:"FOUNDATION",description:"Lightweight modular foundation elevating pod 6 inches off wet muddy ground.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","cross_laminated_timber"],surfaceAreaSqft:160,partType:"solid"},{id:"pod_bio_walls",name:"FLATPACK BIO-COMPOSITE ENVELOPE",category:"WALLS",description:"Interlocking tongue-and-groove insulated panels assembled with zero tools.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","mycelium_panels","cross_laminated_timber"],surfaceAreaSqft:280,partType:"swappable_wall"},{id:"pod_origami_roof",name:"ANGLED WATER-DEFLECTING ROOF",category:"ROOF",description:"High-slope origami roof shedding monsoon rains and snow loads.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","cross_laminated_timber","aircrete"],surfaceAreaSqft:190,partType:"roof"},{id:"pod_glazing",name:"LIGHT PORTS & EMERGENCY EGRESS",category:"WINDOWS & APERTURES",description:"Polycarbonate insulated light panels for natural interior illumination.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","timber_louver"],surfaceAreaSqft:40,partType:"aperture"},{id:"pod_utility_kit",name:"PLUG-AND-PLAY 12V EMERGENCY SOLAR KIT",category:"UTILITIES",description:"Integrated solar panel on roof powering interior LEDs, phone charging, and water filter.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod"],surfaceAreaSqft:30,partType:"utility"}],terrace_earth_apartments:[{id:"terrace_foundation",name:"ZIGGURAT BASE & RETAINING PLINTH",category:"FOUNDATION",description:"Stepped bedrock foundation supporting cascading multi-level earth terraces.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:3200,partType:"solid"},{id:"terrace_tier_walls",name:"STEPPED RESIDENTIAL WALL MATRIX",category:"WALLS",description:"Thick brutalist earth walls stepping backward on each residential tier.",defaultMaterial:"hempcrete",allowedMaterials:["hempcrete","rammed_earth","ceb_blocks","cross_laminated_timber"],surfaceAreaSqft:4800,partType:"swappable_wall"},{id:"terrace_garden_roofs",name:"CASCADING GREEN ROOF TERRACES",category:"ROOF & GARDENS",description:"Rooftop edible food gardens and soil thermal blankets for every apartment unit.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ferrocement"],surfaceAreaSqft:3800,partType:"roof"},{id:"terrace_panoramic_windows",name:"EXPANSIVE TERRACE GLAZING PORTALS",category:"WINDOWS & APERTURES",description:"Full-width glass sliding walls opening directly onto rooftop gardens.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:650,partType:"aperture"},{id:"terrace_utilities",name:"CENTRALIZED URBAN ECO-GRID",category:"UTILITIES",description:"Communal solar array + greywater reed-bed filtration recycling 100% of water.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:600,partType:"utility"}]},ef=[{id:"triple_glazed_glass",name:"TRIPLE-PANE PASSIVE SOLAR GLAZING",shortName:"Triple-Pane Glazing",category:"HIGH-EFFICIENCY GLASS",tagline:"Argon gas-filled triple pane glass with low-E coating for massive daylight and zero heat loss.",description:"Converts solid earth walls into expansive panoramic portals. Features warm-edge spacers, non-toxic wood/aluminum frame, and superior sound dampening.",unitCost:"$28.00 / sq ft",costPerSqFt:28,carbonImpact:8.5,thermalRValue:8,pros:["Floods interior with 100% natural mood-elevating daylight","R-8 insulation value prevents winter drafts and heat loss","Superior acoustic insulation isolates external noise","Expands visual space making compact earth homes feel massive"],cons:["Higher upfront cost than solid earthen blocks ($28/sqft vs $4.20/sqft)","Requires careful alignment and flashing during installation","Needs occasional window cleaning"],supplier:{name:"Alpen High Performance Glass / Loewen Windows",location:"Louisville, Colorado",contact:"sales@alpenhpp.com | +1 (303) 833-7000",website:"alpenhpp.com",exactPrice:"$28.00 / sq ft customized to rough opening",leadTime:"2-3 Weeks"},colorHex:"#68A5BA",textureType:"glass_glaze",badge:"MAX DAYLIGHT PORTAL"},{id:"smart_solar_glass",name:"PHOTOVOLTAIC BIPV SMART TINT GLASS",shortName:"Solar Smart Glass",category:"SOLAR GENERATING GLASS",tagline:"Transparent solar window generating daily electricity while electronically tinting.",description:"Building-Integrated Photovoltaics (BIPV) embedded within architectural glass. Generates 50W per square meter of clean electricity while rejecting 98% of solar glare.",unitCost:"$44.00 / sq ft",costPerSqFt:44,carbonImpact:-65,thermalRValue:9.5,pros:["Window actively generates clean off-grid electricity throughout daylight hours","Dynamic electrochromic tinting eliminates need for curtains or blinds","Rejects 99% of damaging UV rays to protect interior furniture"],cons:["Premium investment cost ($44.00/sqft)","Requires low-voltage electrical wire hookup to battery bank"],supplier:{name:"Ubiquitous Energy / Onyx Solar Photovoltaic Glass",location:"Redwood City, California",contact:"info@onyxsolar.com | +1 (917) 563-3993",website:"onyxsolar.com / ubiquitous.energy",exactPrice:"$44.00 / sq ft custom architectural sizing",leadTime:"3-4 Weeks"},colorHex:"#3A7E94",textureType:"solar_glass",badge:"CLEAN ENERGY PORTAL"},{id:"timber_louver",name:"MASS TIMBER OPERABLE BREEZE LOUVERS",shortName:"Timber Breeze Louvers",category:"NATURAL VENTILATION",tagline:"Adjustable cedar/bamboo louvers channeling cooling breezes while blocking direct solar heat.",description:"Hand-crafted operable wooden horizontal fins allowing customizable privacy, shade, and natural cross-ventilation.",unitCost:"$16.50 / sq ft",costPerSqFt:16.5,carbonImpact:-28,thermalRValue:4.2,pros:["Channels natural mountain & desert breezes into home for zero-cost cooling","100% natural organic wood aesthetics matching Yeezy minimal architecture","Carbon-negative natural material"],cons:["Does not seal airtight (designed for temperate or tropical microclimates)","Requires occasional natural oil re-coating every 5 years"],supplier:{name:"BamCore / Local Woodcraft Guilds",location:"North America Regional Co-ops",contact:"craft@bamcore.com",website:"bamcore.com",exactPrice:"$16.50 / sq ft with brass pivot hardware",leadTime:"1 Week"},colorHex:"#A87A46",textureType:"timber_louver",badge:"PASSIVE COOLING"}];/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),og=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=et.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...f},p)=>et.createElement("svg",{ref:p,...Vx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:og("lucide",o),...f},[...u.map(([g,x])=>et.createElement(g,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(s,e)=>{const n=et.forwardRef(({className:r,...o},c)=>et.createElement(Gx,{ref:c,iconNode:e,className:og(`lucide-${Hx(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lg=It("BookOpen",jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],cg=It("Building2",Wx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],qx=It("Calculator",Xx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ll=It("Check",Yx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Zx=It("Compass",$x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Qx=It("Copy",Kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],ug=It("Cpu",Jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],dg=It("DollarSign",e0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],cd=It("Download",t0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zp=It("Eye",n0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],r0=It("FlaskConical",i0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],a0=It("Focus",s0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],l0=It("Globe",o0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],u0=It("Heart",c0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],tf=It("Layers",d0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],h0=It("Leaf",f0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],m0=It("Menu",p0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],y0=It("Printer",g0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],fg=It("RotateCcw",x0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],hg=It("Search",v0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],S0=It("Shield",_0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ud=It("Sparkles",E0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],b0=It("Sun",M0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],T0=It("TrendingDown",w0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],C0=It("TriangleAlert",A0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],N0=It("Volume2",R0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],L0=It("VolumeX",I0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],D0=It("Wind",P0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kl=It("X",U0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],z0=It("Zap",O0);let ws=null,Ha=!0;const pg=()=>{if(!ws&&typeof window<"u"){const s=window.AudioContext||window.webkitAudioContext;s&&(ws=new s)}return ws&&ws.state==="suspended"&&ws.resume(),ws},k0=s=>(Ha=!Ha,Ha),Ot=(s=800,e=.015,n="sine")=>{if(Ha)try{const r=pg();if(!r)return;const o=r.createOscillator(),c=r.createGain();o.type=n,o.frequency.setValueAtTime(s,r.currentTime),o.frequency.exponentialRampToValueAtTime(120,r.currentTime+e),c.gain.setValueAtTime(.04,r.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),o.connect(c),c.connect(r.destination),o.start(),o.stop(r.currentTime+e)}catch{}},Va=()=>{Ot(1200,.025,"triangle")},ja=()=>{if(Ha)try{const s=pg();if(!s)return;const e=s.createOscillator(),n=s.createGain();e.type="sine",e.frequency.setValueAtTime(440,s.currentTime),e.frequency.setValueAtTime(880,s.currentTime+.06),n.gain.setValueAtTime(.05,s.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+.14),e.connect(n),n.connect(s.destination),e.start(),e.stop(s.currentTime+.15)}catch{}};function F0({activeTab:s,setActiveTab:e,totalCost:n,totalCarbon:r,onOpenCostBreakdown:o,onOpenBlueprintExport:c,onOpenVisionModal:u}){const[f,p]=et.useState(!0),[g,x]=et.useState(!1),_=()=>{const E=k0();p(E),E&&Ot(1e3,.03)},S=[{id:"builder",label:"01 // CONFIGURATOR",icon:cg},{id:"materials",label:"02 // MATERIALS INDEX",icon:tf},{id:"furniture",label:"03 // ECO FURNITURE",icon:ug},{id:"tutorials",label:"04 // NOVICE BUILD GUIDE",icon:lg},{id:"sourcing",label:"05 // SOURCING RADAR",icon:Zx},{id:"benchmarks",label:"06 // COST BENCHMARKS",icon:dg}],M=E=>{Ot(),e(E),x(!1)};return h.jsxs("header",{className:"sticky top-0 z-50 bg-yzy-black/95 backdrop-blur-md border-b border-yzy-slate select-none",children:[h.jsxs("div",{className:"w-full bg-yzy-obsidian border-b border-yzy-slate/60 px-3 sm:px-6 py-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider",children:[h.jsx("div",{className:"flex items-center gap-3",children:h.jsxs("span",{className:"flex items-center gap-1.5 text-yzy-chalk",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"font-bold tracking-widest uppercase",children:"EZY.INFRA"}),h.jsx("span",{className:"hidden sm:inline text-yzy-ash",children:"| OPEN-SOURCE REGENERATIVE SHELTER"})]})}),h.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[h.jsxs("button",{onClick:()=>{Ot(900,.03),u()},className:"flex items-center gap-1.5 text-yzy-chalk hover:text-yzy-bone font-bold tracking-widest uppercase transition-colors",children:[h.jsx(ud,{className:"w-3 h-3 text-yzy-neon"}),h.jsx("span",{className:"underline decoration-yzy-neon/60 underline-offset-2",children:"YE // DONDA MANIFESTO"})]}),h.jsxs("button",{onClick:_,className:"flex items-center gap-1 text-yzy-ash hover:text-yzy-bone transition-colors",title:f?"Mute Haptic Sound":"Enable Haptic Sound",children:[f?h.jsx(N0,{className:"w-3.5 h-3.5 text-yzy-chalk"}):h.jsx(L0,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden sm:inline",children:f?"AUDIO ON":"MUTED"})]})]})]}),h.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between",children:[h.jsxs("div",{onClick:()=>M("builder"),className:"cursor-pointer flex flex-col",children:[h.jsx("div",{className:"flex items-baseline gap-2",children:h.jsxs("span",{className:"font-display font-black text-xl sm:text-2xl tracking-tighter text-yzy-bone",children:["EZY ",h.jsx("span",{className:"font-mono text-sm tracking-widest text-yzy-ash font-normal",children:"EARTH"})]})}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"SUSTAINABLE ARCHITECTURAL SYSTEM"})]}),h.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-yzy-obsidian/80 p-1 border border-yzy-slate",children:S.map(E=>{const w=E.icon,v=s===E.id;return h.jsxs("button",{onClick:()=>M(E.id),className:`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] tracking-wider transition-all ${v?"bg-yzy-bone text-yzy-black font-bold shadow-sm":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/50"}`,children:[h.jsx(w,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:E.label})]},E.id)})}),h.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[h.jsxs("button",{onClick:()=>{Ot(),o()},className:"flex items-center gap-2 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate hover:border-yzy-ash px-2.5 sm:px-3.5 py-1.5 text-left transition-all",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"EST. COST"}),h.jsxs("span",{className:"font-mono font-bold text-xs sm:text-sm text-yzy-bone tracking-tight",children:["$",n.toLocaleString()]})]}),h.jsxs("div",{className:"hidden sm:flex flex-col border-l border-yzy-slate pl-2.5",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"CARBON NET"}),h.jsx("span",{className:`font-mono font-bold text-xs ${r<=0?"text-yzy-neon":"text-yzy-warning"}`,children:r<=0?`${r} kg`:`+${r} kg`})]})]}),h.jsxs("button",{onClick:()=>{ja(),c()},className:"hidden sm:flex items-center gap-1.5 bg-yzy-bone hover:bg-white text-yzy-black px-3 py-2 font-mono text-xs font-bold tracking-wider transition-all active:scale-95",children:[h.jsx(cd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"EXPORT CAD"})]}),h.jsx("button",{onClick:()=>{Ot(),x(!g)},className:"lg:hidden p-2 text-yzy-bone hover:bg-yzy-slate/50 border border-yzy-slate","aria-label":"Toggle Navigation",children:g?h.jsx(kl,{className:"w-5 h-5"}):h.jsx(m0,{className:"w-5 h-5"})})]})]}),g&&h.jsxs("div",{className:"lg:hidden bg-yzy-obsidian border-b border-yzy-slate px-4 py-4 flex flex-col gap-2",children:[S.map(E=>{const w=E.icon,v=s===E.id;return h.jsxs("button",{onClick:()=>M(E.id),className:`flex items-center justify-between w-full px-3 py-2.5 font-mono text-xs tracking-wider border ${v?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"text-yzy-chalk hover:bg-yzy-slate/40 border-yzy-slate/60"}`,children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(w,{className:"w-4 h-4"}),h.jsx("span",{children:E.label})]}),v&&h.jsx("span",{className:"text-[10px] uppercase font-mono tracking-widest bg-yzy-black text-yzy-bone px-1.5 py-0.5",children:"ACTIVE"})]},E.id)}),h.jsxs("div",{className:"pt-2 flex flex-col gap-2 border-t border-yzy-slate mt-2",children:[h.jsxs("button",{onClick:()=>{x(!1),c()},className:"flex items-center justify-center gap-2 bg-yzy-bone text-yzy-black py-2.5 font-mono text-xs font-bold tracking-widest",children:[h.jsx(cd,{className:"w-4 h-4"}),h.jsx("span",{children:"EXPORT BLUEPRINT CAD SPEC"})]}),h.jsxs("button",{onClick:()=>{x(!1),u()},className:"flex items-center justify-center gap-2 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk py-2.5 font-mono text-xs font-bold tracking-widest",children:[h.jsx(ud,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("span",{children:"YE // DONDA ARCHITECTURAL VISION"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="170",B0=0,Kp=1,H0=2,mg=1,rf=2,Gi=3,wr=0,Un=1,Mi=2,Mr=0,Hs=1,Qp=2,Jp=3,em=4,V0=5,$r=100,G0=101,j0=102,W0=103,X0=104,q0=200,Y0=201,$0=202,Z0=203,dd=204,fd=205,K0=206,Q0=207,J0=208,ev=209,tv=210,nv=211,iv=212,rv=213,sv=214,hd=0,pd=1,md=2,Ws=3,gd=4,yd=5,xd=6,vd=7,gg=0,av=1,ov=2,br=0,lv=1,cv=2,uv=3,dv=4,fv=5,hv=6,pv=7,yg=300,Xs=301,qs=302,_d=303,Sd=304,Fl=306,Ed=1e3,Kr=1001,Md=1002,pi=1003,mv=1004,il=1005,bi=1006,Nu=1007,Qr=1008,Yi=1009,xg=1010,vg=1011,Ga=1012,sf=1013,Jr=1014,Wi=1015,Wa=1016,af=1017,of=1018,Ys=1020,_g=35902,Sg=1021,Eg=1022,hi=1023,Mg=1024,bg=1025,Vs=1026,$s=1027,wg=1028,lf=1029,Tg=1030,cf=1031,uf=1033,Tl=33776,Al=33777,Cl=33778,Rl=33779,bd=35840,wd=35841,Td=35842,Ad=35843,Cd=36196,Rd=37492,Nd=37496,Id=37808,Ld=37809,Pd=37810,Dd=37811,Ud=37812,Od=37813,zd=37814,kd=37815,Fd=37816,Bd=37817,Hd=37818,Vd=37819,Gd=37820,jd=37821,Nl=36492,Wd=36494,Xd=36495,Ag=36283,qd=36284,Yd=36285,$d=36286,gv=3200,yv=3201,Cg=0,xv=1,Er="",Jn="srgb",Ks="srgb-linear",Bl="linear",Pt="srgb",Ts=7680,tm=519,vv=512,_v=513,Sv=514,Rg=515,Ev=516,Mv=517,bv=518,wv=519,nm=35044,im="300 es",Xi=2e3,Pl=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=Math.PI/180,Zd=180/Math.PI;function Xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function wn(s,e,n){return Math.max(e,Math.min(n,s))}function Tv(s,e){return(s%e+e)%e}function Lu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,n=0){Mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,n,r,o,c,u,f,p,g){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,g)}set(e,n,r,o,c,u,f,p,g){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=c,x[5]=p,x[6]=r,x[7]=u,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],g=r[1],x=r[4],_=r[7],S=r[2],M=r[5],E=r[8],w=o[0],v=o[3],y=o[6],U=o[1],D=o[4],N=o[7],K=o[2],k=o[5],z=o[8];return c[0]=u*w+f*U+p*K,c[3]=u*v+f*D+p*k,c[6]=u*y+f*N+p*z,c[1]=g*w+x*U+_*K,c[4]=g*v+x*D+_*k,c[7]=g*y+x*N+_*z,c[2]=S*w+M*U+E*K,c[5]=S*v+M*D+E*k,c[8]=S*y+M*N+E*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],x=e[8];return n*u*x-n*f*g-r*c*x+r*f*p+o*c*g-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],x=e[8],_=x*u-f*g,S=f*p-x*c,M=g*c-u*p,E=n*_+r*S+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*g-x*r)*w,e[2]=(f*r-o*u)*w,e[3]=S*w,e[4]=(x*n-o*p)*w,e[5]=(o*c-f*n)*w,e[6]=M*w,e[7]=(r*p-g*n)*w,e[8]=(u*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const p=Math.cos(c),g=Math.sin(c);return this.set(r*p,r*g,-r*(p*u+g*f)+u+e,-o*g,o*p,-o*(-g*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new gt;function Ng(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Av(){const s=Dl("canvas");return s.style.display="block",s}const rm={};function Fa(s){s in rm||(rm[s]=!0,console.warn(s))}function Cv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Rv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tt={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Pt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Pt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?Bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sm=[.64,.33,.3,.6,.15,.06],am=[.2126,.7152,.0722],om=[.3127,.329],lm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Tt.define({[Ks]:{primaries:sm,whitePoint:om,transfer:Bl,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:am,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:sm,whitePoint:om,transfer:Pt,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:am,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}});let As;class Iv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Dl("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=qi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(qi(n[r]/255)*255):n[r]=qi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lv=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Du(o[u].image)):c.push(Du(o[u]))}else c=Du(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Iv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pv=0;class On extends Qs{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,r=Kr,o=Kr,c=bi,u=Qr,f=hi,p=Yi,g=On.DEFAULT_ANISOTROPY,x=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Xa(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=yg;On.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,o=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,g=p[0],x=p[4],_=p[8],S=p[1],M=p[5],E=p[9],w=p[2],v=p[6],y=p[10];if(Math.abs(x-S)<.01&&Math.abs(_-w)<.01&&Math.abs(E-v)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+w)<.1&&Math.abs(E+v)<.1&&Math.abs(g+M+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(g+1)/2,N=(M+1)/2,K=(y+1)/2,k=(x+S)/4,z=(_+w)/4,H=(E+v)/4;return D>N&&D>K?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=k/r,c=z/r):N>K?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=k/o,c=H/o):K<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(K),r=z/c,o=H/c),this.set(r,o,c,n),this}let U=Math.sqrt((v-E)*(v-E)+(_-w)*(_-w)+(S-x)*(S-x));return Math.abs(U)<.001&&(U=1),this.x=(v-E)/U,this.y=(_-w)/U,this.z=(S-x)/U,this.w=Math.acos((g+M+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends Qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new On(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ig(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Dv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Lg extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let p=r[o+0],g=r[o+1],x=r[o+2],_=r[o+3];const S=c[u+0],M=c[u+1],E=c[u+2],w=c[u+3];if(f===0){e[n+0]=p,e[n+1]=g,e[n+2]=x,e[n+3]=_;return}if(f===1){e[n+0]=S,e[n+1]=M,e[n+2]=E,e[n+3]=w;return}if(_!==w||p!==S||g!==M||x!==E){let v=1-f;const y=p*S+g*M+x*E+_*w,U=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const K=Math.sqrt(D),k=Math.atan2(K,y*U);v=Math.sin(v*k)/K,f=Math.sin(f*k)/K}const N=f*U;if(p=p*v+S*N,g=g*v+M*N,x=x*v+E*N,_=_*v+w*N,v===1-f){const K=1/Math.sqrt(p*p+g*g+x*x+_*_);p*=K,g*=K,x*=K,_*=K}}e[n]=p,e[n+1]=g,e[n+2]=x,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],p=r[o+1],g=r[o+2],x=r[o+3],_=c[u],S=c[u+1],M=c[u+2],E=c[u+3];return e[n]=f*E+x*_+p*M-g*S,e[n+1]=p*E+x*S+g*_-f*M,e[n+2]=g*E+x*M+f*S-p*_,e[n+3]=x*E-f*_-p*S-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,g=f(r/2),x=f(o/2),_=f(c/2),S=p(r/2),M=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=S*x*_+g*M*E,this._y=g*M*_-S*x*E,this._z=g*x*E+S*M*_,this._w=g*x*_-S*M*E;break;case"YXZ":this._x=S*x*_+g*M*E,this._y=g*M*_-S*x*E,this._z=g*x*E-S*M*_,this._w=g*x*_+S*M*E;break;case"ZXY":this._x=S*x*_-g*M*E,this._y=g*M*_+S*x*E,this._z=g*x*E+S*M*_,this._w=g*x*_-S*M*E;break;case"ZYX":this._x=S*x*_-g*M*E,this._y=g*M*_+S*x*E,this._z=g*x*E-S*M*_,this._w=g*x*_+S*M*E;break;case"YZX":this._x=S*x*_+g*M*E,this._y=g*M*_+S*x*E,this._z=g*x*E-S*M*_,this._w=g*x*_-S*M*E;break;case"XZY":this._x=S*x*_-g*M*E,this._y=g*M*_-S*x*E,this._z=g*x*E+S*M*_,this._w=g*x*_+S*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],g=n[2],x=n[6],_=n[10],S=r+f+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-p)*M,this._y=(c-g)*M,this._z=(u-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(x-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+g)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(c-g)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(u-o)/M,this._x=(c+g)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,p=n._y,g=n._z,x=n._w;return this._x=r*x+u*f+o*g-c*p,this._y=o*x+u*p+c*f-r*g,this._z=c*x+u*g+r*p-o*f,this._w=u*x-r*f-o*p-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(p),x=Math.atan2(g,f),_=Math.sin((1-n)*x)/g,S=Math.sin(n*x)/g;return this._w=u*_+this._w*S,this._x=r*_+this._x*S,this._y=o*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,p=e.w,g=2*(u*o-f*r),x=2*(f*n-c*o),_=2*(c*r-u*n);return this.x=n+p*g+u*_-f*x,this.y=r+p*x+f*g-c*_,this.z=o+p*_+c*x-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new le,um=new qa;class Ya{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(c,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),sl.subVectors(this.max,Da),Cs.subVectors(e.a,Da),Rs.subVectors(e.b,Da),Ns.subVectors(e.c,Da),gr.subVectors(Rs,Cs),yr.subVectors(Ns,Rs),Hr.subVectors(Cs,Ns);let n=[0,-gr.z,gr.y,0,-yr.z,yr.y,0,-Hr.z,Hr.y,gr.z,0,-gr.x,yr.z,0,-yr.x,Hr.z,0,-Hr.x,-gr.y,gr.x,0,-yr.y,yr.x,0,-Hr.y,Hr.x,0];return!Ou(n,Cs,Rs,Ns,sl)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,Cs,Rs,Ns,sl))?!1:(al.crossVectors(gr,yr),n=[al.x,al.y,al.z],Ou(n,Cs,Rs,Ns,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new le,new le,new le,new le,new le,new le,new le,new le],ci=new le,rl=new Ya,Cs=new le,Rs=new le,Ns=new le,gr=new le,yr=new le,Hr=new le,Da=new le,sl=new le,al=new le,Vr=new le;function Ou(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Vr.fromArray(s,c);const f=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),p=e.dot(Vr),g=n.dot(Vr),x=r.dot(Vr);if(Math.max(-Math.max(p,g,x),Math.min(p,g,x))>f)return!1}return!0}const Ov=new Ya,Ua=new le,zu=new le;class Hl{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ov.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(zu)),this.expandByPoint(Ua.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new le,ku=new le,ol=new le,xr=new le,Fu=new le,ll=new le,Bu=new le;class df{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){ku.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(ku);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ol),f=xr.dot(this.direction),p=-xr.dot(ol),g=xr.lengthSq(),x=Math.abs(1-u*u);let _,S,M,E;if(x>0)if(_=u*p-f,S=u*f-p,E=c*x,_>=0)if(S>=-E)if(S<=E){const w=1/x;_*=w,S*=w,M=_*(_+u*S+2*f)+S*(u*_+S+2*p)+g}else S=c,_=Math.max(0,-(u*S+f)),M=-_*_+S*(S+2*p)+g;else S=-c,_=Math.max(0,-(u*S+f)),M=-_*_+S*(S+2*p)+g;else S<=-E?(_=Math.max(0,-(-u*c+f)),S=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+S*(S+2*p)+g):S<=E?(_=0,S=Math.min(Math.max(-c,-p),c),M=S*(S+2*p)+g):(_=Math.max(0,-(u*c+f)),S=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+S*(S+2*p)+g);else S=u>0?-c:c,_=Math.max(0,-(u*S+f)),M=-_*_+S*(S+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ku).addScaledVector(ol,S),M}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,p;const g=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return g>=0?(r=(e.min.x-S.x)*g,o=(e.max.x-S.x)*g):(r=(e.max.x-S.x)*g,o=(e.min.x-S.x)*g),x>=0?(c=(e.min.y-S.y)*x,u=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,u=(e.min.y-S.y)*x),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-S.z)*_,p=(e.max.z-S.z)*_):(f=(e.max.z-S.z)*_,p=(e.min.z-S.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,r,o,c){Fu.subVectors(n,e),ll.subVectors(r,e),Bu.crossVectors(Fu,ll);let u=this.direction.dot(Bu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;xr.subVectors(this.origin,e);const p=f*this.direction.dot(ll.crossVectors(xr,ll));if(p<0)return null;const g=f*this.direction.dot(Fu.cross(xr));if(g<0||p+g>u)return null;const x=-f*xr.dot(Bu);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,o,c,u,f,p,g,x,_,S,M,E,w,v){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,g,x,_,S,M,E,w,v)}set(e,n,r,o,c,u,f,p,g,x,_,S,M,E,w,v){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=u,y[9]=f,y[13]=p,y[2]=g,y[6]=x,y[10]=_,y[14]=S,y[3]=M,y[7]=E,y[11]=w,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),c=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),g=Math.sin(o),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=u*x,M=u*_,E=f*x,w=f*_;n[0]=p*x,n[4]=-p*_,n[8]=g,n[1]=M+E*g,n[5]=S-w*g,n[9]=-f*p,n[2]=w-S*g,n[6]=E+M*g,n[10]=u*p}else if(e.order==="YXZ"){const S=p*x,M=p*_,E=g*x,w=g*_;n[0]=S+w*f,n[4]=E*f-M,n[8]=u*g,n[1]=u*_,n[5]=u*x,n[9]=-f,n[2]=M*f-E,n[6]=w+S*f,n[10]=u*p}else if(e.order==="ZXY"){const S=p*x,M=p*_,E=g*x,w=g*_;n[0]=S-w*f,n[4]=-u*_,n[8]=E+M*f,n[1]=M+E*f,n[5]=u*x,n[9]=w-S*f,n[2]=-u*g,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const S=u*x,M=u*_,E=f*x,w=f*_;n[0]=p*x,n[4]=E*g-M,n[8]=S*g+w,n[1]=p*_,n[5]=w*g+S,n[9]=M*g-E,n[2]=-g,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const S=u*p,M=u*g,E=f*p,w=f*g;n[0]=p*x,n[4]=w-S*_,n[8]=E*_+M,n[1]=_,n[5]=u*x,n[9]=-f*x,n[2]=-g*x,n[6]=M*_+E,n[10]=S-w*_}else if(e.order==="XZY"){const S=u*p,M=u*g,E=f*p,w=f*g;n[0]=p*x,n[4]=-_,n[8]=g*x,n[1]=S*_+w,n[5]=u*x,n[9]=M*_-E,n[2]=E*_-M,n[6]=f*x,n[10]=w*_+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zv,e,kv)}lookAt(e,n,r){const o=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),vr.crossVectors(r,Hn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),vr.crossVectors(r,Hn)),vr.normalize(),cl.crossVectors(Hn,vr),o[0]=vr.x,o[4]=cl.x,o[8]=Hn.x,o[1]=vr.y,o[5]=cl.y,o[9]=Hn.y,o[2]=vr.z,o[6]=cl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],g=r[12],x=r[1],_=r[5],S=r[9],M=r[13],E=r[2],w=r[6],v=r[10],y=r[14],U=r[3],D=r[7],N=r[11],K=r[15],k=o[0],z=o[4],H=o[8],R=o[12],A=o[1],P=o[5],q=o[9],X=o[13],ne=o[2],de=o[6],ee=o[10],re=o[14],B=o[3],ae=o[7],L=o[11],b=o[15];return c[0]=u*k+f*A+p*ne+g*B,c[4]=u*z+f*P+p*de+g*ae,c[8]=u*H+f*q+p*ee+g*L,c[12]=u*R+f*X+p*re+g*b,c[1]=x*k+_*A+S*ne+M*B,c[5]=x*z+_*P+S*de+M*ae,c[9]=x*H+_*q+S*ee+M*L,c[13]=x*R+_*X+S*re+M*b,c[2]=E*k+w*A+v*ne+y*B,c[6]=E*z+w*P+v*de+y*ae,c[10]=E*H+w*q+v*ee+y*L,c[14]=E*R+w*X+v*re+y*b,c[3]=U*k+D*A+N*ne+K*B,c[7]=U*z+D*P+N*de+K*ae,c[11]=U*H+D*q+N*ee+K*L,c[15]=U*R+D*X+N*re+K*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],p=e[9],g=e[13],x=e[2],_=e[6],S=e[10],M=e[14],E=e[3],w=e[7],v=e[11],y=e[15];return E*(+c*p*_-o*g*_-c*f*S+r*g*S+o*f*M-r*p*M)+w*(+n*p*M-n*g*S+c*u*S-o*u*M+o*g*x-c*p*x)+v*(+n*g*_-n*f*M-c*u*_+r*u*M+c*f*x-r*g*x)+y*(-o*f*x-n*p*_+n*f*S+o*u*_-r*u*S+r*p*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],x=e[8],_=e[9],S=e[10],M=e[11],E=e[12],w=e[13],v=e[14],y=e[15],U=_*v*g-w*S*g+w*p*M-f*v*M-_*p*y+f*S*y,D=E*S*g-x*v*g-E*p*M+u*v*M+x*p*y-u*S*y,N=x*w*g-E*_*g+E*f*M-u*w*M-x*f*y+u*_*y,K=E*_*p-x*w*p-E*f*S+u*w*S+x*f*v-u*_*v,k=n*U+r*D+o*N+c*K;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=U*z,e[1]=(w*S*c-_*v*c-w*o*M+r*v*M+_*o*y-r*S*y)*z,e[2]=(f*v*c-w*p*c+w*o*g-r*v*g-f*o*y+r*p*y)*z,e[3]=(_*p*c-f*S*c-_*o*g+r*S*g+f*o*M-r*p*M)*z,e[4]=D*z,e[5]=(x*v*c-E*S*c+E*o*M-n*v*M-x*o*y+n*S*y)*z,e[6]=(E*p*c-u*v*c-E*o*g+n*v*g+u*o*y-n*p*y)*z,e[7]=(u*S*c-x*p*c+x*o*g-n*S*g-u*o*M+n*p*M)*z,e[8]=N*z,e[9]=(E*_*c-x*w*c-E*r*M+n*w*M+x*r*y-n*_*y)*z,e[10]=(u*w*c-E*f*c+E*r*g-n*w*g-u*r*y+n*f*y)*z,e[11]=(x*f*c-u*_*c-x*r*g+n*_*g+u*r*M-n*f*M)*z,e[12]=K*z,e[13]=(x*w*o-E*_*o+E*r*S-n*w*S-x*r*v+n*_*v)*z,e[14]=(E*f*o-u*w*o-E*r*p+n*w*p+u*r*v-n*f*v)*z,e[15]=(u*_*o-x*f*o+x*r*p-n*_*p-u*r*S+n*f*S)*z,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,g=c*u,x=c*f;return this.set(g*u+r,g*f-o*p,g*p+o*f,0,g*f+o*p,x*f+r,x*p-o*u,0,g*p-o*f,x*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,g=c+c,x=u+u,_=f+f,S=c*g,M=c*x,E=c*_,w=u*x,v=u*_,y=f*_,U=p*g,D=p*x,N=p*_,K=r.x,k=r.y,z=r.z;return o[0]=(1-(w+y))*K,o[1]=(M+N)*K,o[2]=(E-D)*K,o[3]=0,o[4]=(M-N)*k,o[5]=(1-(S+y))*k,o[6]=(v+U)*k,o[7]=0,o[8]=(E+D)*z,o[9]=(v-U)*z,o[10]=(1-(S+w))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Is.set(o[0],o[1],o[2]).length();const u=Is.set(o[4],o[5],o[6]).length(),f=Is.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const g=1/c,x=1/u,_=1/f;return ui.elements[0]*=g,ui.elements[1]*=g,ui.elements[2]*=g,ui.elements[4]*=x,ui.elements[5]*=x,ui.elements[6]*=x,ui.elements[8]*=_,ui.elements[9]*=_,ui.elements[10]*=_,n.setFromRotationMatrix(ui),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=Xi){const p=this.elements,g=2*c/(n-e),x=2*c/(r-o),_=(n+e)/(n-e),S=(r+o)/(r-o);let M,E;if(f===Xi)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===Pl)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Xi){const p=this.elements,g=1/(n-e),x=1/(r-o),_=1/(u-c),S=(n+e)*g,M=(r+o)*x;let E,w;if(f===Xi)E=(u+c)*_,w=-2*_;else if(f===Pl)E=c*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Is=new le,ui=new Vt,zv=new le(0,0,0),kv=new le(1,1,1),vr=new le,cl=new le,Hn=new le,dm=new Vt,fm=new qa;class Ti{constructor(e=0,n=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],p=o[1],g=o[5],x=o[9],_=o[2],S=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(S,g),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(wn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,g),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fv=0;const hm=new le,Ls=new qa,Bi=new Vt,ul=new le,Oa=new le,Bv=new le,Hv=new qa,pm=new le(1,0,0),mm=new le(0,1,0),gm=new le(0,0,1),ym={type:"added"},Vv={type:"removed"},Ps={type:"childadded",child:null},Hu={type:"childremoved",child:null};class dn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new le,n=new Ti,r=new qa,o=new le(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Vt},normalMatrix:{value:new gt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,n){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Oa,ul,this.up):Bi.lookAt(ul,Oa,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Vv),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,Bv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let g=0,x=p.length;g<x;g++){const _=p[g];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,g=this.material.length;p<g;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),g=u(e.textures),x=u(e.images),_=u(e.shapes),S=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const p=[];for(const g in f){const x=f[g];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}dn.DEFAULT_UP=new le(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new le,Hi=new le,Vu=new le,Vi=new le,Ds=new le,Us=new le,xm=new le,Gu=new le,ju=new le,Wu=new le,Xu=new Xt,qu=new Xt,Yu=new Xt;class fi{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),di.subVectors(e,n),o.cross(di);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){di.subVectors(o,n),Hi.subVectors(r,n),Vu.subVectors(e,n);const u=di.dot(di),f=di.dot(Hi),p=di.dot(Vu),g=Hi.dot(Hi),x=Hi.dot(Vu),_=u*g-f*f;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(g*p-f*x)*S,E=(u*x-f*p)*S;return c.set(1-M-E,E,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,r,o,c,u,f,p){return this.getBarycoord(e,n,r,o,Vi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Vi.x),p.addScaledVector(u,Vi.y),p.addScaledVector(f,Vi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Xu.setScalar(0),qu.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,r),Yu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Xu,c.x),u.addScaledVector(qu,c.y),u.addScaledVector(Yu,c.z),u}static isFrontFacing(e,n,r,o){return di.subVectors(r,n),Hi.subVectors(e,n),di.cross(Hi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return fi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Ds.subVectors(o,r),Us.subVectors(c,r),Gu.subVectors(e,r);const p=Ds.dot(Gu),g=Us.dot(Gu);if(p<=0&&g<=0)return n.copy(r);ju.subVectors(e,o);const x=Ds.dot(ju),_=Us.dot(ju);if(x>=0&&_<=x)return n.copy(o);const S=p*_-x*g;if(S<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(Ds,u);Wu.subVectors(e,c);const M=Ds.dot(Wu),E=Us.dot(Wu);if(E>=0&&M<=E)return n.copy(c);const w=M*g-p*E;if(w<=0&&g>=0&&E<=0)return f=g/(g-E),n.copy(r).addScaledVector(Us,f);const v=x*E-M*_;if(v<=0&&_-x>=0&&M-E>=0)return xm.subVectors(c,o),f=(_-x)/(_-x+(M-E)),n.copy(o).addScaledVector(xm,f);const y=1/(v+w+S);return u=w*y,f=S*y,n.copy(r).addScaledVector(Ds,u).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},dl={h:0,s:0,l:0};function $u(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ft{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=Tv(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=$u(u,c,e+1/3),this.g=$u(u,c,e),this.b=$u(u,c,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,n=Jn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const r=Pg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Tt.fromWorkingColorSpace(vn.copy(this),e),Math.round(wn(vn.r*255,0,255))*65536+Math.round(wn(vn.g*255,0,255))*256+Math.round(wn(vn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(vn.copy(this),n);const r=vn.r,o=vn.g,c=vn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let p,g;const x=(f+u)/2;if(f===u)p=0,g=0;else{const _=u-f;switch(g=x<=.5?_/(u+f):_/(2-u-f),u){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=g,e.l=x,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Jn){Tt.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,o=vn.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(dl);const r=Lu(_r.h,dl.h,n),o=Lu(_r.s,dl.s,n),c=Lu(_r.l,dl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ft;ft.NAMES=Pg;let Gv=0;class Js extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Xa(),this.name="",this.blending=Hs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dd&&(r.blendSrc=this.blendSrc),this.blendDst!==fd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hf extends Js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new le,fl=new Mt;class wi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=nm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),o=Dn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),o=Dn(o,this.array),c=Dn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class Dg extends wi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ug extends wi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Zt extends wi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let jv=0;const Qn=new Vt,Zu=new dn,Os=new le,Vn=new Ya,za=new Ya,ln=new le;class ei extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ng(e)?Ug:Dg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,r){return Qn.makeTranslation(e,n,r),this.applyMatrix4(Qn),this}scale(e,n,r){return Qn.makeScale(e,n,r),this.applyMatrix4(Qn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zt(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Vn.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];za.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,za.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,za.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(za.min),Vn.expandByPoint(za.max))}Vn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)ln.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(ln));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let g=0,x=f.count;g<x;g++)ln.fromBufferAttribute(f,g),p&&(Os.fromBufferAttribute(e,g),ln.add(Os)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let H=0;H<r.count;H++)f[H]=new le,p[H]=new le;const g=new le,x=new le,_=new le,S=new Mt,M=new Mt,E=new Mt,w=new le,v=new le;function y(H,R,A){g.fromBufferAttribute(r,H),x.fromBufferAttribute(r,R),_.fromBufferAttribute(r,A),S.fromBufferAttribute(c,H),M.fromBufferAttribute(c,R),E.fromBufferAttribute(c,A),x.sub(g),_.sub(g),M.sub(S),E.sub(S);const P=1/(M.x*E.y-E.x*M.y);isFinite(P)&&(w.copy(x).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(P),v.copy(_).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(P),f[H].add(w),f[R].add(w),f[A].add(w),p[H].add(v),p[R].add(v),p[A].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let H=0,R=U.length;H<R;++H){const A=U[H],P=A.start,q=A.count;for(let X=P,ne=P+q;X<ne;X+=3)y(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const D=new le,N=new le,K=new le,k=new le;function z(H){K.fromBufferAttribute(o,H),k.copy(K);const R=f[H];D.copy(R),D.sub(K.multiplyScalar(K.dot(R))).normalize(),N.crossVectors(k,R);const P=N.dot(p[H])<0?-1:1;u.setXYZW(H,D.x,D.y,D.z,P)}for(let H=0,R=U.length;H<R;++H){const A=U[H],P=A.start,q=A.count;for(let X=P,ne=P+q;X<ne;X+=3)z(e.getX(X+0)),z(e.getX(X+1)),z(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new le,c=new le,u=new le,f=new le,p=new le,g=new le,x=new le,_=new le;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),w=e.getX(S+1),v=e.getX(S+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),x.subVectors(u,c),_.subVectors(o,c),x.cross(_),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),f.add(x),p.add(x),g.add(x),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(v,g.x,g.y,g.z)}else for(let S=0,M=n.count;S<M;S+=3)o.fromBufferAttribute(n,S+0),c.fromBufferAttribute(n,S+1),u.fromBufferAttribute(n,S+2),x.subVectors(u,c),_.subVectors(o,c),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,p){const g=f.array,x=f.itemSize,_=f.normalized,S=new g.constructor(p.length*x);let M=0,E=0;for(let w=0,v=p.length;w<v;w++){f.isInterleavedBufferAttribute?M=p[w]*f.data.stride+f.offset:M=p[w]*x;for(let y=0;y<x;y++)S[E++]=g[M++]}return new wi(S,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],g=e(p,r);n.setAttribute(f,g)}const c=this.morphAttributes;for(const f in c){const p=[],g=c[f];for(let x=0,_=g.length;x<_;x++){const S=g[x],M=e(S,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const g=u[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],x=[];for(let _=0,S=g.length;_<S;_++){const M=g[_];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const x=o[g];this.setAttribute(g,x.clone(n))}const c=e.morphAttributes;for(const g in c){const x=[],_=c[g];for(let S=0,M=_.length;S<M;S++)x.push(_[S].clone(n));this.morphAttributes[g]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,x=u.length;g<x;g++){const _=u[g];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Vt,Gr=new df,hl=new Hl,_m=new le,pl=new le,ml=new le,gl=new le,Ku=new le,yl=new le,Sm=new le,xl=new le;class mt extends dn{constructor(e=new ei,n=new hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){yl.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const x=f[p],_=c[p];x!==0&&(Ku.fromBufferAttribute(_,e),u?yl.addScaledVector(Ku,x):yl.addScaledVector(Ku.sub(n),x))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(c),Gr.copy(e.ray).recast(e.near),!(hl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(hl,_m)===null||Gr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(c).invert(),Gr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,g=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,w=S.length;E<w;E++){const v=S[E],y=u[v.materialIndex],U=Math.max(v.start,M.start),D=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let N=U,K=D;N<K;N+=3){const k=f.getX(N),z=f.getX(N+1),H=f.getX(N+2);o=vl(this,y,e,r,g,x,_,k,z,H),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),w=Math.min(f.count,M.start+M.count);for(let v=E,y=w;v<y;v+=3){const U=f.getX(v),D=f.getX(v+1),N=f.getX(v+2);o=vl(this,u,e,r,g,x,_,U,D,N),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,w=S.length;E<w;E++){const v=S[E],y=u[v.materialIndex],U=Math.max(v.start,M.start),D=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let N=U,K=D;N<K;N+=3){const k=N,z=N+1,H=N+2;o=vl(this,y,e,r,g,x,_,k,z,H),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let v=E,y=w;v<y;v+=3){const U=v,D=v+1,N=v+2;o=vl(this,u,e,r,g,x,_,U,D,N),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function Wv(s,e,n,r,o,c,u,f){let p;if(e.side===Un?p=r.intersectTriangle(u,c,o,!0,f):p=r.intersectTriangle(o,c,u,e.side===wr,f),p===null)return null;xl.copy(f),xl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(xl);return g<n.near||g>n.far?null:{distance:g,point:xl.clone(),object:s}}function vl(s,e,n,r,o,c,u,f,p,g){s.getVertexPosition(f,pl),s.getVertexPosition(p,ml),s.getVertexPosition(g,gl);const x=Wv(s,e,n,r,pl,ml,gl,Sm);if(x){const _=new le;fi.getBarycoord(Sm,pl,ml,gl,_),o&&(x.uv=fi.getInterpolatedAttribute(o,f,p,g,_,new Mt)),c&&(x.uv1=fi.getInterpolatedAttribute(c,f,p,g,_,new Mt)),u&&(x.normal=fi.getInterpolatedAttribute(u,f,p,g,_,new le),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:f,b:p,c:g,normal:new le,materialIndex:0};fi.getNormal(pl,ml,gl,S.normal),x.face=S,x.barycoord=_}return x}class Dt extends ei{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],g=[],x=[],_=[];let S=0,M=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(_,2));function E(w,v,y,U,D,N,K,k,z,H,R){const A=N/z,P=K/H,q=N/2,X=K/2,ne=k/2,de=z+1,ee=H+1;let re=0,B=0;const ae=new le;for(let L=0;L<ee;L++){const b=L*P-X;for(let G=0;G<de;G++){const he=G*A-q;ae[w]=he*U,ae[v]=b*D,ae[y]=ne,g.push(ae.x,ae.y,ae.z),ae[w]=0,ae[v]=0,ae[y]=k>0?1:-1,x.push(ae.x,ae.y,ae.z),_.push(G/z),_.push(1-L/H),re+=1}}for(let L=0;L<H;L++)for(let b=0;b<z;b++){const G=S+b+de*L,he=S+b+de*(L+1),W=S+(b+1)+de*(L+1),te=S+(b+1)+de*L;p.push(G,he,te),p.push(he,W,te),B+=6}f.addGroup(M,B,R),M+=B,S+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const o in r)e[o]=r[o]}return e}function Xv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const qv={clone:Zs,merge:bn};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=$v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class zg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new le,Em=new Mt,Mm=new Mt;class Gn extends zg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,n){return this.getViewBounds(e,Em,Mm),n.subVectors(Mm,Em)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Iu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/g,o*=u.width/p,r*=u.height/g}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,ks=1;class Zv extends dn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(zs,ks,e,n);o.layers=this.layers,this.add(o);const c=new Gn(zs,ks,e,n);c.layers=this.layers,this.add(c);const u=new Gn(zs,ks,e,n);u.layers=this.layers,this.add(u);const f=new Gn(zs,ks,e,n);f.layers=this.layers,this.add(f);const p=new Gn(zs,ks,e,n);p.layers=this.layers,this.add(p);const g=new Gn(zs,ks,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,p]=n;for(const g of n)this.remove(g);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,g,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(_,S,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class kg extends On{constructor(e,n,r,o,c,u,f,p,g,x){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,r,o,c,u,f,p,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kv extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new kg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Dt(5,5,5),c=new Tr({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Mr});c.uniforms.tEquirect.value=n;const u=new mt(o,c),f=n.minFilter;return n.minFilter===Qr&&(n.minFilter=bi),new Zv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Qu=new le,Qv=new le,Jv=new gt;class qr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Qu.subVectors(r,n).cross(Qv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Qu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Jv.getNormalMatrix(e),o=this.coplanarPoint(Qu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Hl,_l=new le;class pf{constructor(e=new qr,n=new qr,r=new qr,o=new qr,c=new qr,u=new qr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Xi){const r=this.planes,o=e.elements,c=o[0],u=o[1],f=o[2],p=o[3],g=o[4],x=o[5],_=o[6],S=o[7],M=o[8],E=o[9],w=o[10],v=o[11],y=o[12],U=o[13],D=o[14],N=o[15];if(r[0].setComponents(p-c,S-g,v-M,N-y).normalize(),r[1].setComponents(p+c,S+g,v+M,N+y).normalize(),r[2].setComponents(p+u,S+x,v+E,N+U).normalize(),r[3].setComponents(p-u,S-x,v-E,N-U).normalize(),r[4].setComponents(p-f,S-_,v-w,N-D).normalize(),n===Xi)r[5].setComponents(p+f,S+_,v+w,N+D).normalize();else if(n===Pl)r[5].setComponents(f,_,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(_l.x=o.normal.x>0?e.max.x:e.min.x,_l.y=o.normal.y>0?e.max.y:e.min.y,_l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function e_(s){const e=new WeakMap;function n(f,p){const g=f.array,x=f.usage,_=g.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,g,x),f.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,g){const x=p.array,_=p.updateRanges;if(s.bindBuffer(g,f),_.length===0)s.bufferSubData(g,0,x);else{_.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<_.length;M++){const E=_[S],w=_[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++S,_[S]=w)}_.length=S+1;for(let M=0,E=_.length;M<E;M++){const w=_[M];s.bufferSubData(g,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,p),g.version=f.version}}return{get:o,remove:c,update:u}}class Vl extends ei{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(o),g=f+1,x=p+1,_=e/f,S=n/p,M=[],E=[],w=[],v=[];for(let y=0;y<x;y++){const U=y*S-u;for(let D=0;D<g;D++){const N=D*_-c;E.push(N,-U,0),w.push(0,0,1),v.push(D/f),v.push(1-y/p)}}for(let y=0;y<p;y++)for(let U=0;U<f;U++){const D=U+g*y,N=U+g*(y+1),K=U+1+g*(y+1),k=U+1+g*y;M.push(D,N,k),M.push(N,K,k)}this.setIndex(M),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(w,3)),this.setAttribute("uv",new Zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var t_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n_=`#ifdef USE_ALPHAHASH
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
#endif`,i_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o_=`#ifdef USE_AOMAP
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
#endif`,l_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c_=`#ifdef USE_BATCHING
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
#endif`,u_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p_=`#ifdef USE_IRIDESCENCE
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
#endif`,m_=`#ifdef USE_BUMPMAP
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
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b_=`#define PI 3.141592653589793
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
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T_=`vec3 transformedNormal = objectNormal;
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
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I_="gl_FragColor = linearToOutputTexel( gl_FragColor );",L_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V_=`#ifdef USE_GRADIENTMAP
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
}`,G_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X_=`uniform bool receiveShadow;
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
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q_=`PhysicalMaterial material;
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
#endif`,J_=`struct PhysicalMaterial {
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
}`,eS=`
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,yS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
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
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FS=`float getShadowMask() {
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
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tE=`uniform sampler2D t2D;
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`#include <common>
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
}`,oE=`#if DEPTH_PACKING == 3200
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
}`,lE=`#define DISTANCE
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
}`,cE=`#define DISTANCE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`uniform float scale;
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
}`,hE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#define LAMBERT
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
}`,yE=`#define LAMBERT
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
}`,xE=`#define MATCAP
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
}`,vE=`#define MATCAP
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
}`,_E=`#define NORMAL
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
}`,SE=`#define NORMAL
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
}`,EE=`#define PHONG
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
}`,ME=`#define PHONG
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
}`,bE=`#define STANDARD
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
}`,wE=`#define STANDARD
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
}`,TE=`#define TOON
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
}`,AE=`#define TOON
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
}`,CE=`uniform float size;
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
}`,RE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,IE=`uniform vec3 color;
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
}`,LE=`uniform float rotation;
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
}`,PE=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:t_,alphahash_pars_fragment:n_,alphamap_fragment:i_,alphamap_pars_fragment:r_,alphatest_fragment:s_,alphatest_pars_fragment:a_,aomap_fragment:o_,aomap_pars_fragment:l_,batching_pars_vertex:c_,batching_vertex:u_,begin_vertex:d_,beginnormal_vertex:f_,bsdfs:h_,iridescence_fragment:p_,bumpmap_pars_fragment:m_,clipping_planes_fragment:g_,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:x_,clipping_planes_vertex:v_,color_fragment:__,color_pars_fragment:S_,color_pars_vertex:E_,color_vertex:M_,common:b_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:T_,displacementmap_pars_vertex:A_,displacementmap_vertex:C_,emissivemap_fragment:R_,emissivemap_pars_fragment:N_,colorspace_fragment:I_,colorspace_pars_fragment:L_,envmap_fragment:P_,envmap_common_pars_fragment:D_,envmap_pars_fragment:U_,envmap_pars_vertex:O_,envmap_physical_pars_fragment:q_,envmap_vertex:z_,fog_vertex:k_,fog_pars_vertex:F_,fog_fragment:B_,fog_pars_fragment:H_,gradientmap_pars_fragment:V_,lightmap_pars_fragment:G_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:W_,lights_pars_begin:X_,lights_toon_fragment:Y_,lights_toon_pars_fragment:$_,lights_phong_fragment:Z_,lights_phong_pars_fragment:K_,lights_physical_fragment:Q_,lights_physical_pars_fragment:J_,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:aS,map_fragment:oS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:yS,normal_fragment_begin:xS,normal_fragment_maps:vS,normal_pars_fragment:_S,normal_pars_vertex:SS,normal_vertex:ES,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:wS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:CS,packing:RS,premultiplied_alpha_fragment:NS,project_vertex:IS,dithering_fragment:LS,dithering_pars_fragment:PS,roughnessmap_fragment:DS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:zS,shadowmap_vertex:kS,shadowmask_pars_fragment:FS,skinbase_vertex:BS,skinning_pars_vertex:HS,skinning_vertex:VS,skinnormal_vertex:GS,specularmap_fragment:jS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:$S,uv_pars_fragment:ZS,uv_pars_vertex:KS,uv_vertex:QS,worldpos_vertex:JS,background_vert:eE,background_frag:tE,backgroundCube_vert:nE,backgroundCube_frag:iE,cube_vert:rE,cube_frag:sE,depth_vert:aE,depth_frag:oE,distanceRGBA_vert:lE,distanceRGBA_frag:cE,equirect_vert:uE,equirect_frag:dE,linedashed_vert:fE,linedashed_frag:hE,meshbasic_vert:pE,meshbasic_frag:mE,meshlambert_vert:gE,meshlambert_frag:yE,meshmatcap_vert:xE,meshmatcap_frag:vE,meshnormal_vert:_E,meshnormal_frag:SE,meshphong_vert:EE,meshphong_frag:ME,meshphysical_vert:bE,meshphysical_frag:wE,meshtoon_vert:TE,meshtoon_frag:AE,points_vert:CE,points_frag:RE,shadow_vert:NE,shadow_frag:IE,sprite_vert:LE,sprite_frag:PE},De={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ei={basic:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ft(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ft(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:bn([De.points,De.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:bn([De.common,De.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:bn([De.sprite,De.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:bn([De.common,De.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:bn([De.lights,De.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ei.physical={uniforms:bn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Sl={r:0,b:0,g:0},Wr=new Ti,DE=new Vt;function UE(s,e,n,r,o,c,u){const f=new ft(0);let p=c===!0?0:1,g,x,_=null,S=0,M=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:e).get(D)),D}function w(U){let D=!1;const N=E(U);N===null?y(f,p):N&&N.isColor&&(y(N,1),D=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,u):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(U,D){const N=E(D);N&&(N.isCubeTexture||N.mapping===Fl)?(x===void 0&&(x=new mt(new Dt(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Zs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(K,k,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Wr.copy(D.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),x.material.uniforms.envMap.value=N,x.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(DE.makeRotationFromEuler(Wr)),x.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Pt,(_!==N||S!==N.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,_=N,S=N.version,M=s.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):N&&N.isTexture&&(g===void 0&&(g=new mt(new Vl(2,2),new Tr({name:"BackgroundMaterial",uniforms:Zs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=N,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Pt,N.matrixAutoUpdate===!0&&N.updateMatrix(),g.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||S!==N.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=N,S=N.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function y(U,D){U.getRGB(Sl,Og(s)),r.buffers.color.setClear(Sl.r,Sl.g,Sl.b,D,u)}return{getClearColor:function(){return f},setClearColor:function(U,D=1){f.set(U),p=D,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(f,p)},render:w,addToRenderList:v}}function OE(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let c=o,u=!1;function f(A,P,q,X,ne){let de=!1;const ee=_(X,q,P);c!==ee&&(c=ee,g(c.object)),de=M(A,X,q,ne),de&&E(A,X,q,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,N(A,P,q,X),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function p(){return s.createVertexArray()}function g(A){return s.bindVertexArray(A)}function x(A){return s.deleteVertexArray(A)}function _(A,P,q){const X=q.wireframe===!0;let ne=r[A.id];ne===void 0&&(ne={},r[A.id]=ne);let de=ne[P.id];de===void 0&&(de={},ne[P.id]=de);let ee=de[X];return ee===void 0&&(ee=S(p()),de[X]=ee),ee}function S(A){const P=[],q=[],X=[];for(let ne=0;ne<n;ne++)P[ne]=0,q[ne]=0,X[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:X,object:A,attributes:{},index:null}}function M(A,P,q,X){const ne=c.attributes,de=P.attributes;let ee=0;const re=q.getAttributes();for(const B in re)if(re[B].location>=0){const L=ne[B];let b=de[B];if(b===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(b=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(b=A.instanceColor)),L===void 0||L.attribute!==b||b&&L.data!==b.data)return!0;ee++}return c.attributesNum!==ee||c.index!==X}function E(A,P,q,X){const ne={},de=P.attributes;let ee=0;const re=q.getAttributes();for(const B in re)if(re[B].location>=0){let L=de[B];L===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const b={};b.attribute=L,L&&L.data&&(b.data=L.data),ne[B]=b,ee++}c.attributes=ne,c.attributesNum=ee,c.index=X}function w(){const A=c.newAttributes;for(let P=0,q=A.length;P<q;P++)A[P]=0}function v(A){y(A,0)}function y(A,P){const q=c.newAttributes,X=c.enabledAttributes,ne=c.attributeDivisors;q[A]=1,X[A]===0&&(s.enableVertexAttribArray(A),X[A]=1),ne[A]!==P&&(s.vertexAttribDivisor(A,P),ne[A]=P)}function U(){const A=c.newAttributes,P=c.enabledAttributes;for(let q=0,X=P.length;q<X;q++)P[q]!==A[q]&&(s.disableVertexAttribArray(q),P[q]=0)}function D(A,P,q,X,ne,de,ee){ee===!0?s.vertexAttribIPointer(A,P,q,ne,de):s.vertexAttribPointer(A,P,q,X,ne,de)}function N(A,P,q,X){w();const ne=X.attributes,de=q.getAttributes(),ee=P.defaultAttributeValues;for(const re in de){const B=de[re];if(B.location>=0){let ae=ne[re];if(ae===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const L=ae.normalized,b=ae.itemSize,G=e.get(ae);if(G===void 0)continue;const he=G.buffer,W=G.type,te=G.bytesPerElement,pe=W===s.INT||W===s.UNSIGNED_INT||ae.gpuType===sf;if(ae.isInterleavedBufferAttribute){const oe=ae.data,ge=oe.stride,Se=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)y(B.location+Re,oe.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<B.locationSize;Re++)v(B.location+Re);s.bindBuffer(s.ARRAY_BUFFER,he);for(let Re=0;Re<B.locationSize;Re++)D(B.location+Re,b/B.locationSize,W,L,ge*te,(Se+b/B.locationSize*Re)*te,pe)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<B.locationSize;oe++)y(B.location+oe,ae.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<B.locationSize;oe++)v(B.location+oe);s.bindBuffer(s.ARRAY_BUFFER,he);for(let oe=0;oe<B.locationSize;oe++)D(B.location+oe,b/B.locationSize,W,L,b*te,b/B.locationSize*oe*te,pe)}}else if(ee!==void 0){const L=ee[re];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(B.location,L);break;case 3:s.vertexAttrib3fv(B.location,L);break;case 4:s.vertexAttrib4fv(B.location,L);break;default:s.vertexAttrib1fv(B.location,L)}}}}U()}function K(){H();for(const A in r){const P=r[A];for(const q in P){const X=P[q];for(const ne in X)x(X[ne].object),delete X[ne];delete P[q]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const P=r[A.id];for(const q in P){const X=P[q];for(const ne in X)x(X[ne].object),delete X[ne];delete P[q]}delete r[A.id]}function z(A){for(const P in r){const q=r[P];if(q[A.id]===void 0)continue;const X=q[A.id];for(const ne in X)x(X[ne].object),delete X[ne];delete q[A.id]}}function H(){R(),u=!0,c!==o&&(c=o,g(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:H,resetDefaultState:R,dispose:K,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:v,disableUnusedAttributes:U}}function zE(s,e,n){let r;function o(g){r=g}function c(g,x){s.drawArrays(r,g,x),n.update(x,r,1)}function u(g,x,_){_!==0&&(s.drawArraysInstanced(r,g,x,_),n.update(x,r,_))}function f(g,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=x[E];n.update(M,r,1)}function p(g,x,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<g.length;E++)u(g[E],x[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,x,0,S,0,_);let E=0;for(let w=0;w<_;w++)E+=x[w]*S[w];n.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function kE(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==hi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const H=z===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Yi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Wi&&!H)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const x=p(g);x!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const _=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:_,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:N,vertexTextures:K,maxSamples:k}}function FE(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new qr,f=new gt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||o;return o=S,r=_.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){n=x(_,S,0)},this.setState=function(_,S,M){const E=_.clippingPlanes,w=_.clipIntersection,v=_.clipShadows,y=s.get(_);if(!o||E===null||E.length===0||c&&!v)c?x(null):g();else{const U=c?0:r,D=U*4;let N=y.clippingState||null;p.value=N,N=x(E,S,D,M);for(let K=0;K!==D;++K)N[K]=n[K];y.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,M,E){const w=_!==null?_.length:0;let v=null;if(w!==0){if(v=p.value,E!==!0||v===null){const y=M+w*4,U=S.matrixWorldInverse;f.getNormalMatrix(U),(v===null||v.length<y)&&(v=new Float32Array(y));for(let D=0,N=M;D!==w;++D,N+=4)u.copy(_[D]).applyMatrix4(U,f),u.normal.toArray(v,N),v[N+3]=u.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function BE(s){let e=new WeakMap;function n(u,f){return f===_d?u.mapping=Xs:f===Sd&&(u.mapping=qs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===_d||f===Sd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const g=new Kv(p.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",o),n(g.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Bg extends zg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=4,bm=[.125,.215,.35,.446,.526,.582],Zr=20,Ju=new Bg,wm=new ft;let ed=null,td=0,nd=0,id=!1;const Yr=(1+Math.sqrt(5))/2,Fs=1/Yr,Tm=[new le(-Yr,Fs,0),new le(Yr,Fs,0),new le(-Fs,0,Yr),new le(Fs,0,Yr),new le(0,Yr,-Fs),new le(0,Yr,Fs),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Wa,format:hi,colorSpace:Ks,depthBuffer:!1},o=Cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HE(c)),this._blurMaterial=VE(c,e,n)}return o}_compileMaterial(e){const n=new mt(this._lodPlanes[0],e);this._renderer.compile(n,Ju)}_sceneToCubeUV(e,n,r,o){const f=new Gn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(wm),x.toneMapping=br,x.autoClear=!1;const M=new hf({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new mt(new Dt,M);let w=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,w=!0):(M.color.copy(wm),w=!0);for(let y=0;y<6;y++){const U=y%3;U===0?(f.up.set(0,p[y],0),f.lookAt(g[y],0,0)):U===1?(f.up.set(0,0,p[y]),f.lookAt(0,g[y],0)):(f.up.set(0,p[y],0),f.lookAt(0,0,g[y]));const D=this._cubeSize;El(o,U*D,y>2?D:0,D,D),x.setRenderTarget(o),w&&x.render(E,f),x.render(e,f)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=S,x.autoClear=_,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Xs||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new mt(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;El(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Ju)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Tm[(o-c-1)%Tm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const p=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new mt(this._lodPlanes[o],g),S=g.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),w=c/E,v=isFinite(c)?1+Math.floor(x*w):Zr;v>Zr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zr}`);const y=[];let U=0;for(let z=0;z<Zr;++z){const H=z/w,R=Math.exp(-H*H/2);y.push(R),z===0?U+=R:z<v&&(U+=2*R)}for(let z=0;z<y.length;z++)y[z]=y[z]/U;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=y,S.latitudinal.value=u==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:D}=this;S.dTheta.value=E,S.mipInt.value=D-r;const N=this._sizeLods[o],K=3*N*(o>D-Bs?o-D+Bs:0),k=4*(this._cubeSize-N);El(n,K,k,3*N,2*N),p.setRenderTarget(n),p.render(_,Ju)}}function HE(s){const e=[],n=[],r=[];let o=s;const c=s-Bs+1+bm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);n.push(f);let p=1/f;u>s-Bs?p=bm[u-s+Bs-1]:u===0&&(p=0),r.push(p);const g=1/(f-2),x=-g,_=1+g,S=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,E=6,w=3,v=2,y=1,U=new Float32Array(w*E*M),D=new Float32Array(v*E*M),N=new Float32Array(y*E*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,H=k>2?0:-1,R=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];U.set(R,w*E*k),D.set(S,v*E*k);const A=[k,k,k,k,k,k];N.set(A,y*E*k)}const K=new ei;K.setAttribute("position",new wi(U,w)),K.setAttribute("uv",new wi(D,v)),K.setAttribute("faceIndex",new wi(N,y)),e.push(K),o>Bs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Cm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=Fl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function VE(s,e,n){const r=new Float32Array(Zr),o=new le(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Rm(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Nm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function mf(){return`

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
	`}function GE(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,g=p===_d||p===Sd,x=p===Xs||p===qs;if(g||x){let _=e.get(f);const S=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return n===null&&(n=new Am(s)),_=g?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return g&&M&&M.height>0||x&&M&&o(M)?(n===null&&(n=new Am(s)),_=g?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let p=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function jE(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Fa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function WE(s,e,n,r){const o={},c=new WeakMap;function u(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);for(const E in S.morphAttributes){const w=S.morphAttributes[E];for(let v=0,y=w.length;v<y;v++)e.remove(w[v])}S.removeEventListener("dispose",u),delete o[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function f(_,S){return o[S.id]===!0||(S.addEventListener("dispose",u),o[S.id]=!0,n.memory.geometries++),S}function p(_){const S=_.attributes;for(const E in S)e.update(S[E],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const w=M[E];for(let v=0,y=w.length;v<y;v++)e.update(w[v],s.ARRAY_BUFFER)}}function g(_){const S=[],M=_.index,E=_.attributes.position;let w=0;if(M!==null){const U=M.array;w=M.version;for(let D=0,N=U.length;D<N;D+=3){const K=U[D+0],k=U[D+1],z=U[D+2];S.push(K,k,k,z,z,K)}}else if(E!==void 0){const U=E.array;w=E.version;for(let D=0,N=U.length/3-1;D<N;D+=3){const K=D+0,k=D+1,z=D+2;S.push(K,k,k,z,z,K)}}else return;const v=new(Ng(S)?Ug:Dg)(S,1);v.version=w;const y=c.get(_);y&&e.remove(y),c.set(_,v)}function x(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&g(_)}else g(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:x}}function XE(s,e,n){let r;function o(S){r=S}let c,u;function f(S){c=S.type,u=S.bytesPerElement}function p(S,M){s.drawElements(r,M,c,S*u),n.update(M,r,1)}function g(S,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,S*u,E),n.update(M,r,E))}function x(S,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,E);let v=0;for(let y=0;y<E;y++)v+=M[y];n.update(v,r,1)}function _(S,M,E,w){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<S.length;y++)g(S[y]/u,M[y],w[y]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,w,0,E);let y=0;for(let U=0;U<E;U++)y+=M[U]*w[U];n.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function qE(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function YE(s,e,n){const r=new WeakMap,o=new Xt;function c(u,f,p){const g=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(f);if(S===void 0||S.count!==_){let A=function(){H.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var M=A;S!==void 0&&S.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let N=0;E===!0&&(N=1),w===!0&&(N=2),v===!0&&(N=3);let K=f.attributes.position.count*N,k=1;K>e.maxTextureSize&&(k=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const z=new Float32Array(K*k*4*_),H=new Lg(z,K,k,_);H.type=Wi,H.needsUpdate=!0;const R=N*4;for(let P=0;P<_;P++){const q=y[P],X=U[P],ne=D[P],de=K*k*4*P;for(let ee=0;ee<q.count;ee++){const re=ee*R;E===!0&&(o.fromBufferAttribute(q,ee),z[de+re+0]=o.x,z[de+re+1]=o.y,z[de+re+2]=o.z,z[de+re+3]=0),w===!0&&(o.fromBufferAttribute(X,ee),z[de+re+4]=o.x,z[de+re+5]=o.y,z[de+re+6]=o.z,z[de+re+7]=0),v===!0&&(o.fromBufferAttribute(ne,ee),z[de+re+8]=o.x,z[de+re+9]=o.y,z[de+re+10]=o.z,z[de+re+11]=ne.itemSize===4?o.w:1)}}S={count:_,texture:H,size:new Mt(K,k)},r.set(f,S),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let v=0;v<g.length;v++)E+=g[v];const w=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function $E(s,e,n,r){let o=new WeakMap;function c(p){const g=r.render.frame,x=p.geometry,_=e.get(p,x);if(o.get(_)!==g&&(e.update(_),o.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,g))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==g&&(S.update(),o.set(S,g))}return _}function u(){o=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:u}}class Hg extends On{constructor(e,n,r,o,c,u,f,p,g,x=Vs){if(x!==Vs&&x!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Vs&&(r=Jr),r===void 0&&x===$s&&(r=Ys),super(null,o,c,u,f,p,x,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:pi,this.minFilter=p!==void 0?p:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Vg=new On,Im=new Hg(1,1),Gg=new Lg,jg=new Uv,Wg=new kg,Lm=[],Pm=[],Dm=new Float32Array(16),Um=new Float32Array(9),Om=new Float32Array(4);function ea(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Lm[o];if(c===void 0&&(c=new Float32Array(o),Lm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function ZE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function KE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function QE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function JE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function eM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Om.set(r),s.uniformMatrix2fv(this.addr,!1,Om),rn(n,r)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),rn(n,r)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),rn(n,r)}}function iM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function oM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function dM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Im.compareFunction=Rg,c=Im):c=Vg,n.setTexture2D(e||c,o)}function fM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||jg,o)}function hM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Wg,o)}function pM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Gg,o)}function mM(s){switch(s){case 5126:return ZE;case 35664:return KE;case 35665:return QE;case 35666:return JE;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return aM;case 5125:return oM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(s,e){s.uniform1fv(this.addr,e)}function yM(s,e){const n=ea(e,this.size,2);s.uniform2fv(this.addr,n)}function xM(s,e){const n=ea(e,this.size,3);s.uniform3fv(this.addr,n)}function vM(s,e){const n=ea(e,this.size,4);s.uniform4fv(this.addr,n)}function _M(s,e){const n=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function SM(s,e){const n=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function EM(s,e){const n=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function MM(s,e){s.uniform1iv(this.addr,e)}function bM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function TM(s,e){s.uniform4iv(this.addr,e)}function AM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function RM(s,e){s.uniform3uiv(this.addr,e)}function NM(s,e){s.uniform4uiv(this.addr,e)}function IM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Vg,c[u])}function LM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||jg,c[u])}function PM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Wg,c[u])}function DM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Gg,c[u])}function UM(s){switch(s){case 5126:return gM;case 35664:return yM;case 35665:return xM;case 35666:return vM;case 35674:return _M;case 35675:return SM;case 35676:return EM;case 5124:case 35670:return MM;case 35667:case 35671:return bM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return DM}}class OM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=mM(n.type)}}class zM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UM(n.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function zm(s,e){s.seq.push(e),s.map[e.id]=e}function FM(s,e,n){const r=s.name,o=r.length;for(rd.lastIndex=0;;){const c=rd.exec(r),u=rd.lastIndex;let f=c[1];const p=c[2]==="]",g=c[3];if(p&&(f=f|0),g===void 0||g==="["&&u+2===o){zm(n,g===void 0?new OM(f,s,e):new zM(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new kM(f),zm(n,_)),n=_}}}class Il{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);FM(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function km(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const BM=37297;let HM=0;function VM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Fm=new gt;function GM(s){Tt._getMatrix(Fm,Tt.workingColorSpace,s);const e=`mat3( ${Fm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+VM(s.getShaderSource(e),u)}else return o}function jM(s,e){const n=GM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function WM(s,e){let n;switch(e){case lv:n="Linear";break;case cv:n="Reinhard";break;case uv:n="Cineon";break;case dv:n="ACESFilmic";break;case hv:n="AgX";break;case pv:n="Neutral";break;case fv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new le;function XM(){Tt.getLuminanceCoefficients(Ml);const s=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function YM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function $M(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Ba(s){return s!==""}function Hm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(s){return s.replace(ZM,QM)}const KM=new Map;function QM(s,e){let n=yt[e];if(n===void 0){const r=KM.get(e);if(r!==void 0)n=yt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(s){return s.replace(JM,e1)}function e1(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function jm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function t1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function n1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function r1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gg:e="ENVMAP_BLENDING_MULTIPLY";break;case av:e="ENVMAP_BLENDING_MIX";break;case ov:e="ENVMAP_BLENDING_ADD";break}return e}function s1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function a1(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=t1(n),g=n1(n),x=i1(n),_=r1(n),S=s1(n),M=qM(n),E=YM(c),w=o.createProgram();let v,y,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ba).join(`
`),v.length>0&&(v+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ba).join(`
`),y.length>0&&(y+=`
`)):(v=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),y=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?yt.tonemapping_pars_fragment:"",n.toneMapping!==br?WM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,jM("linearToOutputTexel",n.outputColorSpace),XM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),u=Kd(u),u=Hm(u,n),u=Vm(u,n),f=Kd(f),f=Hm(f,n),f=Vm(f,n),u=Gm(u),f=Gm(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=U+v+u,N=U+y+f,K=km(o,o.VERTEX_SHADER,D),k=km(o,o.FRAGMENT_SHADER,N);o.attachShader(w,K),o.attachShader(w,k),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function z(P){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(w).trim(),X=o.getShaderInfoLog(K).trim(),ne=o.getShaderInfoLog(k).trim();let de=!0,ee=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,K,k);else{const re=Bm(o,K,"vertex"),B=Bm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+re+`
`+B)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(X===""||ne==="")&&(ee=!1);ee&&(P.diagnostics={runnable:de,programLog:q,vertexShader:{log:X,prefix:v},fragmentShader:{log:ne,prefix:y}})}o.deleteShader(K),o.deleteShader(k),H=new Il(o,w),R=$M(o,w)}let H;this.getUniforms=function(){return H===void 0&&z(this),H};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,BM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=K,this.fragmentShader=k,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new c1(e),n.set(e,r)),r}}class c1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function u1(s,e,n,r,o,c,u){const f=new ff,p=new l1,g=new Set,x=[],_=o.logarithmicDepthBuffer,S=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return g.add(R),R===0?"uv":`uv${R}`}function v(R,A,P,q,X){const ne=q.fog,de=X.geometry,ee=R.isMeshStandardMaterial?q.environment:null,re=(R.isMeshStandardMaterial?n:e).get(R.envMap||ee),B=re&&re.mapping===Fl?re.image.height:null,ae=E[R.type];R.precision!==null&&(M=o.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const L=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,b=L!==void 0?L.length:0;let G=0;de.morphAttributes.position!==void 0&&(G=1),de.morphAttributes.normal!==void 0&&(G=2),de.morphAttributes.color!==void 0&&(G=3);let he,W,te,pe;if(ae){const bt=Ei[ae];he=bt.vertexShader,W=bt.fragmentShader}else he=R.vertexShader,W=R.fragmentShader,p.update(R),te=p.getVertexShaderID(R),pe=p.getFragmentShaderID(R);const oe=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Se=X.isInstancedMesh===!0,Re=X.isBatchedMesh===!0,Ge=!!R.map,ze=!!R.matcap,rt=!!re,V=!!R.aoMap,_t=!!R.lightMap,Ie=!!R.bumpMap,We=!!R.normalMap,Pe=!!R.displacementMap,ct=!!R.emissiveMap,Ue=!!R.metalnessMap,O=!!R.roughnessMap,C=R.anisotropy>0,J=R.clearcoat>0,xe=R.dispersion>0,_e=R.iridescence>0,ye=R.sheen>0,qe=R.transmission>0,Ne=C&&!!R.anisotropyMap,Fe=J&&!!R.clearcoatMap,ht=J&&!!R.clearcoatNormalMap,be=J&&!!R.clearcoatRoughnessMap,He=_e&&!!R.iridescenceMap,tt=_e&&!!R.iridescenceThicknessMap,st=ye&&!!R.sheenColorMap,je=ye&&!!R.sheenRoughnessMap,xt=!!R.specularMap,ut=!!R.specularColorMap,Nt=!!R.specularIntensityMap,$=qe&&!!R.transmissionMap,Le=qe&&!!R.thicknessMap,me=!!R.gradientMap,ve=!!R.alphaMap,ke=R.alphaTest>0,Oe=!!R.alphaHash,dt=!!R.extensions;let kt=br;R.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Kt={shaderID:ae,shaderType:R.type,shaderName:R.name,vertexShader:he,fragmentShader:W,defines:R.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Re,batchingColor:Re&&X._colorsTexture!==null,instancing:Se,instancingColor:Se&&X.instanceColor!==null,instancingMorph:Se&&X.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ks,alphaToCoverage:!!R.alphaToCoverage,map:Ge,matcap:ze,envMap:rt,envMapMode:rt&&re.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:_t,bumpMap:Ie,normalMap:We,displacementMap:S&&Pe,emissiveMap:ct,normalMapObjectSpace:We&&R.normalMapType===xv,normalMapTangentSpace:We&&R.normalMapType===Cg,metalnessMap:Ue,roughnessMap:O,anisotropy:C,anisotropyMap:Ne,clearcoat:J,clearcoatMap:Fe,clearcoatNormalMap:ht,clearcoatRoughnessMap:be,dispersion:xe,iridescence:_e,iridescenceMap:He,iridescenceThicknessMap:tt,sheen:ye,sheenColorMap:st,sheenRoughnessMap:je,specularMap:xt,specularColorMap:ut,specularIntensityMap:Nt,transmission:qe,transmissionMap:$,thicknessMap:Le,gradientMap:me,opaque:R.transparent===!1&&R.blending===Hs&&R.alphaToCoverage===!1,alphaMap:ve,alphaTest:ke,alphaHash:Oe,combine:R.combine,mapUv:Ge&&w(R.map.channel),aoMapUv:V&&w(R.aoMap.channel),lightMapUv:_t&&w(R.lightMap.channel),bumpMapUv:Ie&&w(R.bumpMap.channel),normalMapUv:We&&w(R.normalMap.channel),displacementMapUv:Pe&&w(R.displacementMap.channel),emissiveMapUv:ct&&w(R.emissiveMap.channel),metalnessMapUv:Ue&&w(R.metalnessMap.channel),roughnessMapUv:O&&w(R.roughnessMap.channel),anisotropyMapUv:Ne&&w(R.anisotropyMap.channel),clearcoatMapUv:Fe&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:ht&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:st&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:je&&w(R.sheenRoughnessMap.channel),specularMapUv:xt&&w(R.specularMap.channel),specularColorMapUv:ut&&w(R.specularColorMap.channel),specularIntensityMapUv:Nt&&w(R.specularIntensityMap.channel),transmissionMapUv:$&&w(R.transmissionMap.channel),thicknessMapUv:Le&&w(R.thicknessMap.channel),alphaMapUv:ve&&w(R.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(We||C),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!de.attributes.uv&&(Ge||ve),fog:!!ne,useFog:R.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ge,skinning:X.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ge&&R.map.isVideoTexture===!0&&Tt.getTransfer(R.map.colorSpace)===Pt,decodeVideoTextureEmissive:ct&&R.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(R.emissiveMap.colorSpace)===Pt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Mi,flipSided:R.side===Un,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:dt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&R.extensions.multiDraw===!0||Re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Kt.vertexUv1s=g.has(1),Kt.vertexUv2s=g.has(2),Kt.vertexUv3s=g.has(3),g.clear(),Kt}function y(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const P in R.defines)A.push(P),A.push(R.defines[P]);return R.isRawShaderMaterial===!1&&(U(A,R),D(A,R),A.push(s.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function U(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function D(R,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),R.push(f.mask)}function N(R){const A=E[R.type];let P;if(A){const q=Ei[A];P=qv.clone(q.uniforms)}else P=R.uniforms;return P}function K(R,A){let P;for(let q=0,X=x.length;q<X;q++){const ne=x[q];if(ne.cacheKey===A){P=ne,++P.usedTimes;break}}return P===void 0&&(P=new a1(s,A,R,c),x.push(P)),P}function k(R){if(--R.usedTimes===0){const A=x.indexOf(R);x[A]=x[x.length-1],x.pop(),R.destroy()}}function z(R){p.remove(R)}function H(){p.dispose()}return{getParameters:v,getProgramCacheKey:y,getUniforms:N,acquireProgram:K,releaseProgram:k,releaseShaderCache:z,programs:x,dispose:H}}function d1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function f1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(_,S,M,E,w,v){let y=s[e];return y===void 0?(y={id:_.id,object:_,geometry:S,material:M,groupOrder:E,renderOrder:_.renderOrder,z:w,group:v},s[e]=y):(y.id=_.id,y.object=_,y.geometry=S,y.material=M,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=w,y.group=v),e++,y}function f(_,S,M,E,w,v){const y=u(_,S,M,E,w,v);M.transmission>0?r.push(y):M.transparent===!0?o.push(y):n.push(y)}function p(_,S,M,E,w,v){const y=u(_,S,M,E,w,v);M.transmission>0?r.unshift(y):M.transparent===!0?o.unshift(y):n.unshift(y)}function g(_,S){n.length>1&&n.sort(_||f1),r.length>1&&r.sort(S||Wm),o.length>1&&o.sort(S||Wm)}function x(){for(let _=e,S=s.length;_<S;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:x,sort:g}}function h1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Xm,s.set(r,[u])):o>=c.length?(u=new Xm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function p1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new ft};break;case"SpotLight":n={position:new le,direction:new le,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=n,n}}}function m1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let g1=0;function y1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function x1(s){const e=new p1,n=m1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new le);const o=new le,c=new Vt,u=new Vt;function f(g){let x=0,_=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,E=0,w=0,v=0,y=0,U=0,D=0,N=0,K=0,k=0,z=0;g.sort(y1);for(let R=0,A=g.length;R<A;R++){const P=g[R],q=P.color,X=P.intensity,ne=P.distance,de=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)x+=q.r*X,_+=q.g*X,S+=q.b*X;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(P.sh.coefficients[ee],X);z++}else if(P.isDirectionalLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const re=P.shadow,B=n.get(P);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.directionalShadow[M]=B,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=P.shadow.matrix,U++}r.directional[M]=ee,M++}else if(P.isSpotLight){const ee=e.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(q).multiplyScalar(X),ee.distance=ne,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,r.spot[w]=ee;const re=P.shadow;if(P.map&&(r.spotLightMap[K]=P.map,K++,re.updateMatrices(P),P.castShadow&&k++),r.spotLightMatrix[w]=re.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=de,N++}w++}else if(P.isRectAreaLight){const ee=e.get(P);ee.color.copy(q).multiplyScalar(X),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=ee,v++}else if(P.isPointLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){const re=P.shadow,B=n.get(P);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,B.shadowCameraNear=re.camera.near,B.shadowCameraFar=re.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=P.shadow.matrix,D++}r.point[E]=ee,E++}else if(P.isHemisphereLight){const ee=e.get(P);ee.skyColor.copy(P.color).multiplyScalar(X),ee.groundColor.copy(P.groundColor).multiplyScalar(X),r.hemi[y]=ee,y++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const H=r.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==w||H.rectAreaLength!==v||H.hemiLength!==y||H.numDirectionalShadows!==U||H.numPointShadows!==D||H.numSpotShadows!==N||H.numSpotMaps!==K||H.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=v,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+K-k,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,H.directionalLength=M,H.pointLength=E,H.spotLength=w,H.rectAreaLength=v,H.hemiLength=y,H.numDirectionalShadows=U,H.numPointShadows=D,H.numSpotShadows=N,H.numSpotMaps=K,H.numLightProbes=z,r.version=g1++)}function p(g,x){let _=0,S=0,M=0,E=0,w=0;const v=x.matrixWorldInverse;for(let y=0,U=g.length;y<U;y++){const D=g[y];if(D.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),_++}else if(D.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),M++}else if(D.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(v),u.identity(),c.copy(D.matrixWorld),c.premultiply(v),u.extractRotation(c),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(v),S++}else if(D.isHemisphereLight){const N=r.hemi[w];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(v),w++}}}return{setup:f,setupView:p,state:r}}function qm(s){const e=new x1(s),n=[],r=[];function o(x){g.camera=x,n.length=0,r.length=0}function c(x){n.push(x)}function u(x){r.push(x)}function f(){e.setup(n)}function p(x){e.setupView(n,x)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function v1(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new qm(s),e.set(o,[f])):c>=u.length?(f=new qm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class _1 extends Js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S1 extends Js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`;function b1(s,e,n){let r=new pf;const o=new Mt,c=new Mt,u=new Xt,f=new _1({depthPacking:yv}),p=new S1,g={},x=n.maxTextureSize,_={[wr]:Un,[Un]:wr,[Mi]:Mi},S=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:E1,fragmentShader:M1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new ei;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new mt(E,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mg;let y=this.type;this.render=function(k,z,H){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const R=s.getRenderTarget(),A=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Mr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const X=y!==Gi&&this.type===Gi,ne=y===Gi&&this.type!==Gi;for(let de=0,ee=k.length;de<ee;de++){const re=k[de],B=re.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ae=B.getFrameExtents();if(o.multiply(ae),c.copy(B.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/ae.x),o.x=c.x*ae.x,B.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/ae.y),o.y=c.y*ae.y,B.mapSize.y=c.y)),B.map===null||X===!0||ne===!0){const b=this.type!==Gi?{minFilter:pi,magFilter:pi}:{};B.map!==null&&B.map.dispose(),B.map=new es(o.x,o.y,b),B.map.texture.name=re.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const L=B.getViewportCount();for(let b=0;b<L;b++){const G=B.getViewport(b);u.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),q.viewport(u),B.updateMatrices(re,b),r=B.getFrustum(),N(z,H,B.camera,re,this.type)}B.isPointLightShadow!==!0&&this.type===Gi&&U(B,H),B.needsUpdate=!1}y=this.type,v.needsUpdate=!1,s.setRenderTarget(R,A,P)};function U(k,z){const H=e.update(w);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new es(o.x,o.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,H,S,w,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,H,M,w,null)}function D(k,z,H,R){let A=null;const P=H.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(P!==void 0)A=P;else if(A=H.isPointLight===!0?p:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const q=A.uuid,X=z.uuid;let ne=g[q];ne===void 0&&(ne={},g[q]=ne);let de=ne[X];de===void 0&&(de=A.clone(),ne[X]=de,z.addEventListener("dispose",K)),A=de}if(A.visible=z.visible,A.wireframe=z.wireframe,R===Gi?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:_[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=s.properties.get(A);q.light=H}return A}function N(k,z,H,R,A){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Gi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,k.matrixWorld);const X=e.update(k),ne=k.material;if(Array.isArray(ne)){const de=X.groups;for(let ee=0,re=de.length;ee<re;ee++){const B=de[ee],ae=ne[B.materialIndex];if(ae&&ae.visible){const L=D(k,ae,R,A);k.onBeforeShadow(s,k,z,H,X,L,B),s.renderBufferDirect(H,null,X,L,k,B),k.onAfterShadow(s,k,z,H,X,L,B)}}}else if(ne.visible){const de=D(k,ne,R,A);k.onBeforeShadow(s,k,z,H,X,de,null),s.renderBufferDirect(H,null,X,de,k,null),k.onAfterShadow(s,k,z,H,X,de,null)}}const q=k.children;for(let X=0,ne=q.length;X<ne;X++)N(q[X],z,H,R,A)}function K(k){k.target.removeEventListener("dispose",K);for(const H in g){const R=g[H],A=k.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const w1={[hd]:pd,[md]:xd,[gd]:vd,[Ws]:yd,[pd]:hd,[xd]:md,[vd]:gd,[yd]:Ws};function T1(s,e){function n(){let $=!1;const Le=new Xt;let me=null;const ve=new Xt(0,0,0,0);return{setMask:function(ke){me!==ke&&!$&&(s.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){$=ke},setClear:function(ke,Oe,dt,kt,Kt){Kt===!0&&(ke*=kt,Oe*=kt,dt*=kt),Le.set(ke,Oe,dt,kt),ve.equals(Le)===!1&&(s.clearColor(ke,Oe,dt,kt),ve.copy(Le))},reset:function(){$=!1,me=null,ve.set(-1,0,0,0)}}}function r(){let $=!1,Le=!1,me=null,ve=null,ke=null;return{setReversed:function(Oe){if(Le!==Oe){const dt=e.get("EXT_clip_control");Le?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const kt=ke;ke=null,this.setClear(kt)}Le=Oe},getReversed:function(){return Le},setTest:function(Oe){Oe?oe(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Oe){me!==Oe&&!$&&(s.depthMask(Oe),me=Oe)},setFunc:function(Oe){if(Le&&(Oe=w1[Oe]),ve!==Oe){switch(Oe){case hd:s.depthFunc(s.NEVER);break;case pd:s.depthFunc(s.ALWAYS);break;case md:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case gd:s.depthFunc(s.EQUAL);break;case yd:s.depthFunc(s.GEQUAL);break;case xd:s.depthFunc(s.GREATER);break;case vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Oe}},setLocked:function(Oe){$=Oe},setClear:function(Oe){ke!==Oe&&(Le&&(Oe=1-Oe),s.clearDepth(Oe),ke=Oe)},reset:function(){$=!1,me=null,ve=null,ke=null,Le=!1}}}function o(){let $=!1,Le=null,me=null,ve=null,ke=null,Oe=null,dt=null,kt=null,Kt=null;return{setTest:function(bt){$||(bt?oe(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!$&&(s.stencilMask(bt),Le=bt)},setFunc:function(bt,Tn,_n){(me!==bt||ve!==Tn||ke!==_n)&&(s.stencilFunc(bt,Tn,_n),me=bt,ve=Tn,ke=_n)},setOp:function(bt,Tn,_n){(Oe!==bt||dt!==Tn||kt!==_n)&&(s.stencilOp(bt,Tn,_n),Oe=bt,dt=Tn,kt=_n)},setLocked:function(bt){$=bt},setClear:function(bt){Kt!==bt&&(s.clearStencil(bt),Kt=bt)},reset:function(){$=!1,Le=null,me=null,ve=null,ke=null,Oe=null,dt=null,kt=null,Kt=null}}}const c=new n,u=new r,f=new o,p=new WeakMap,g=new WeakMap;let x={},_={},S=new WeakMap,M=[],E=null,w=!1,v=null,y=null,U=null,D=null,N=null,K=null,k=null,z=new ft(0,0,0),H=0,R=!1,A=null,P=null,q=null,X=null,ne=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,re=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(B)[1]),ee=re>=1):B.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ee=re>=2);let ae=null,L={};const b=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),he=new Xt().fromArray(b),W=new Xt().fromArray(G);function te($,Le,me,ve){const ke=new Uint8Array(4),Oe=s.createTexture();s.bindTexture($,Oe),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<me;dt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Le+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Oe}const pe={};pe[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),oe(s.DEPTH_TEST),u.setFunc(Ws),Ie(!1),We(Kp),oe(s.CULL_FACE),V(Mr);function oe($){x[$]!==!0&&(s.enable($),x[$]=!0)}function ge($){x[$]!==!1&&(s.disable($),x[$]=!1)}function Se($,Le){return _[$]!==Le?(s.bindFramebuffer($,Le),_[$]=Le,$===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),$===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Re($,Le){let me=M,ve=!1;if($){me=S.get(Le),me===void 0&&(me=[],S.set(Le,me));const ke=$.textures;if(me.length!==ke.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,dt=ke.length;Oe<dt;Oe++)me[Oe]=s.COLOR_ATTACHMENT0+Oe;me.length=ke.length,ve=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,ve=!0);ve&&s.drawBuffers(me)}function Ge($){return E!==$?(s.useProgram($),E=$,!0):!1}const ze={[$r]:s.FUNC_ADD,[G0]:s.FUNC_SUBTRACT,[j0]:s.FUNC_REVERSE_SUBTRACT};ze[W0]=s.MIN,ze[X0]=s.MAX;const rt={[q0]:s.ZERO,[Y0]:s.ONE,[$0]:s.SRC_COLOR,[dd]:s.SRC_ALPHA,[tv]:s.SRC_ALPHA_SATURATE,[J0]:s.DST_COLOR,[K0]:s.DST_ALPHA,[Z0]:s.ONE_MINUS_SRC_COLOR,[fd]:s.ONE_MINUS_SRC_ALPHA,[ev]:s.ONE_MINUS_DST_COLOR,[Q0]:s.ONE_MINUS_DST_ALPHA,[nv]:s.CONSTANT_COLOR,[iv]:s.ONE_MINUS_CONSTANT_COLOR,[rv]:s.CONSTANT_ALPHA,[sv]:s.ONE_MINUS_CONSTANT_ALPHA};function V($,Le,me,ve,ke,Oe,dt,kt,Kt,bt){if($===Mr){w===!0&&(ge(s.BLEND),w=!1);return}if(w===!1&&(oe(s.BLEND),w=!0),$!==V0){if($!==v||bt!==R){if((y!==$r||N!==$r)&&(s.blendEquation(s.FUNC_ADD),y=$r,N=$r),bt)switch($){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}U=null,D=null,K=null,k=null,z.set(0,0,0),H=0,v=$,R=bt}return}ke=ke||Le,Oe=Oe||me,dt=dt||ve,(Le!==y||ke!==N)&&(s.blendEquationSeparate(ze[Le],ze[ke]),y=Le,N=ke),(me!==U||ve!==D||Oe!==K||dt!==k)&&(s.blendFuncSeparate(rt[me],rt[ve],rt[Oe],rt[dt]),U=me,D=ve,K=Oe,k=dt),(kt.equals(z)===!1||Kt!==H)&&(s.blendColor(kt.r,kt.g,kt.b,Kt),z.copy(kt),H=Kt),v=$,R=!1}function _t($,Le){$.side===Mi?ge(s.CULL_FACE):oe(s.CULL_FACE);let me=$.side===Un;Le&&(me=!me),Ie(me),$.blending===Hs&&$.transparent===!1?V(Mr):V($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),c.setMask($.colorWrite);const ve=$.stencilWrite;f.setTest(ve),ve&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ct($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie($){A!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),A=$)}function We($){$!==B0?(oe(s.CULL_FACE),$!==P&&($===Kp?s.cullFace(s.BACK):$===H0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),P=$}function Pe($){$!==q&&(ee&&s.lineWidth($),q=$)}function ct($,Le,me){$?(oe(s.POLYGON_OFFSET_FILL),(X!==Le||ne!==me)&&(s.polygonOffset(Le,me),X=Le,ne=me)):ge(s.POLYGON_OFFSET_FILL)}function Ue($){$?oe(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function O($){$===void 0&&($=s.TEXTURE0+de-1),ae!==$&&(s.activeTexture($),ae=$)}function C($,Le,me){me===void 0&&(ae===null?me=s.TEXTURE0+de-1:me=ae);let ve=L[me];ve===void 0&&(ve={type:void 0,texture:void 0},L[me]=ve),(ve.type!==$||ve.texture!==Le)&&(ae!==me&&(s.activeTexture(me),ae=me),s.bindTexture($,Le||pe[$]),ve.type=$,ve.texture=Le)}function J(){const $=L[ae];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function xe(){try{s.compressedTexImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ye(){try{s.texSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function He(){try{s.texImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function st($){he.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),he.copy($))}function je($){W.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),W.copy($))}function xt($,Le){let me=g.get(Le);me===void 0&&(me=new WeakMap,g.set(Le,me));let ve=me.get($);ve===void 0&&(ve=s.getUniformBlockIndex(Le,$.name),me.set($,ve))}function ut($,Le){const ve=g.get(Le).get($);p.get(Le)!==ve&&(s.uniformBlockBinding(Le,ve,$.__bindingPointIndex),p.set(Le,ve))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ae=null,L={},_={},S=new WeakMap,M=[],E=null,w=!1,v=null,y=null,U=null,D=null,N=null,K=null,k=null,z=new ft(0,0,0),H=0,R=!1,A=null,P=null,q=null,X=null,ne=null,he.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:oe,disable:ge,bindFramebuffer:Se,drawBuffers:Re,useProgram:Ge,setBlending:V,setMaterial:_t,setFlipSided:Ie,setCullFace:We,setLineWidth:Pe,setPolygonOffset:ct,setScissorTest:Ue,activeTexture:O,bindTexture:C,unbindTexture:J,compressedTexImage2D:xe,compressedTexImage3D:_e,texImage2D:He,texImage3D:tt,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:ht,texStorage3D:be,texSubImage2D:ye,texSubImage3D:qe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Fe,scissor:st,viewport:je,reset:Nt}}function Ym(s,e,n,r){const o=A1(r);switch(n){case Sg:return s*e;case Mg:return s*e;case bg:return s*e*2;case wg:return s*e/o.components*o.byteLength;case lf:return s*e/o.components*o.byteLength;case Tg:return s*e*2/o.components*o.byteLength;case cf:return s*e*2/o.components*o.byteLength;case Eg:return s*e*3/o.components*o.byteLength;case hi:return s*e*4/o.components*o.byteLength;case uf:return s*e*4/o.components*o.byteLength;case Tl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:case Ad:return Math.max(s,16)*Math.max(e,8)/4;case bd:case Td:return Math.max(s,8)*Math.max(e,8)/2;case Cd:case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Wd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ag:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function A1(s){switch(s){case Yi:case xg:return{byteLength:1,components:1};case Ga:case vg:case Wa:return{byteLength:2,components:1};case af:case of:return{byteLength:2,components:4};case Jr:case sf:case Wi:return{byteLength:4,components:1};case _g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function C1(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Mt,x=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,C){return M?new OffscreenCanvas(O,C):Dl("canvas")}function w(O,C,J){let xe=1;const _e=Ue(O);if((_e.width>J||_e.height>J)&&(xe=J/Math.max(_e.width,_e.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ye=Math.floor(xe*_e.width),qe=Math.floor(xe*_e.height);_===void 0&&(_=E(ye,qe));const Ne=C?E(ye,qe):_;return Ne.width=ye,Ne.height=qe,Ne.getContext("2d").drawImage(O,0,0,ye,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ye+"x"+qe+")."),Ne}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),O;return O}function v(O){return O.generateMipmaps}function y(O){s.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(O,C,J,xe,_e=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ye=C;if(C===s.RED&&(J===s.FLOAT&&(ye=s.R32F),J===s.HALF_FLOAT&&(ye=s.R16F),J===s.UNSIGNED_BYTE&&(ye=s.R8)),C===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ye=s.R8UI),J===s.UNSIGNED_SHORT&&(ye=s.R16UI),J===s.UNSIGNED_INT&&(ye=s.R32UI),J===s.BYTE&&(ye=s.R8I),J===s.SHORT&&(ye=s.R16I),J===s.INT&&(ye=s.R32I)),C===s.RG&&(J===s.FLOAT&&(ye=s.RG32F),J===s.HALF_FLOAT&&(ye=s.RG16F),J===s.UNSIGNED_BYTE&&(ye=s.RG8)),C===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ye=s.RG8UI),J===s.UNSIGNED_SHORT&&(ye=s.RG16UI),J===s.UNSIGNED_INT&&(ye=s.RG32UI),J===s.BYTE&&(ye=s.RG8I),J===s.SHORT&&(ye=s.RG16I),J===s.INT&&(ye=s.RG32I)),C===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ye=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ye=s.RGB16UI),J===s.UNSIGNED_INT&&(ye=s.RGB32UI),J===s.BYTE&&(ye=s.RGB8I),J===s.SHORT&&(ye=s.RGB16I),J===s.INT&&(ye=s.RGB32I)),C===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ye=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ye=s.RGBA16UI),J===s.UNSIGNED_INT&&(ye=s.RGBA32UI),J===s.BYTE&&(ye=s.RGBA8I),J===s.SHORT&&(ye=s.RGBA16I),J===s.INT&&(ye=s.RGBA32I)),C===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),C===s.RGBA){const qe=_e?Bl:Tt.getTransfer(xe);J===s.FLOAT&&(ye=s.RGBA32F),J===s.HALF_FLOAT&&(ye=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ye=qe===Pt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function N(O,C){let J;return O?C===null||C===Jr||C===Ys?J=s.DEPTH24_STENCIL8:C===Wi?J=s.DEPTH32F_STENCIL8:C===Ga&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Jr||C===Ys?J=s.DEPTH_COMPONENT24:C===Wi?J=s.DEPTH_COMPONENT32F:C===Ga&&(J=s.DEPTH_COMPONENT16),J}function K(O,C){return v(O)===!0||O.isFramebufferTexture&&O.minFilter!==pi&&O.minFilter!==bi?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function k(O){const C=O.target;C.removeEventListener("dispose",k),H(C),C.isVideoTexture&&x.delete(C)}function z(O){const C=O.target;C.removeEventListener("dispose",z),A(C)}function H(O){const C=r.get(O);if(C.__webglInit===void 0)return;const J=O.source,xe=S.get(J);if(xe){const _e=xe[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(O),Object.keys(xe).length===0&&S.delete(J)}r.remove(O)}function R(O){const C=r.get(O);s.deleteTexture(C.__webglTexture);const J=O.source,xe=S.get(J);delete xe[C.__cacheKey],u.memory.textures--}function A(O){const C=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(C.__webglFramebuffer[xe]))for(let _e=0;_e<C.__webglFramebuffer[xe].length;_e++)s.deleteFramebuffer(C.__webglFramebuffer[xe][_e]);else s.deleteFramebuffer(C.__webglFramebuffer[xe]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[xe])}else{if(Array.isArray(C.__webglFramebuffer))for(let xe=0;xe<C.__webglFramebuffer.length;xe++)s.deleteFramebuffer(C.__webglFramebuffer[xe]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let xe=0;xe<C.__webglColorRenderbuffer.length;xe++)C.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[xe]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const J=O.textures;for(let xe=0,_e=J.length;xe<_e;xe++){const ye=r.get(J[xe]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),u.memory.textures--),r.remove(J[xe])}r.remove(O)}let P=0;function q(){P=0}function X(){const O=P;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),P+=1,O}function ne(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function de(O,C){const J=r.get(O);if(O.isVideoTexture&&Pe(O),O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){const xe=O.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,O,C);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+C)}function ee(O,C){const J=r.get(O);if(O.version>0&&J.__version!==O.version){W(J,O,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+C)}function re(O,C){const J=r.get(O);if(O.version>0&&J.__version!==O.version){W(J,O,C);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+C)}function B(O,C){const J=r.get(O);if(O.version>0&&J.__version!==O.version){te(J,O,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+C)}const ae={[Ed]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Md]:s.MIRRORED_REPEAT},L={[pi]:s.NEAREST,[mv]:s.NEAREST_MIPMAP_NEAREST,[il]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Nu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},b={[vv]:s.NEVER,[wv]:s.ALWAYS,[_v]:s.LESS,[Rg]:s.LEQUAL,[Sv]:s.EQUAL,[bv]:s.GEQUAL,[Ev]:s.GREATER,[Mv]:s.NOTEQUAL};function G(O,C){if(C.type===Wi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===bi||C.magFilter===Nu||C.magFilter===il||C.magFilter===Qr||C.minFilter===bi||C.minFilter===Nu||C.minFilter===il||C.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ae[C.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ae[C.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ae[C.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,L[C.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,L[C.minFilter]),C.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,b[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===pi||C.minFilter!==il&&C.minFilter!==Qr||C.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function he(O,C){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",k));const xe=C.source;let _e=S.get(xe);_e===void 0&&(_e={},S.set(xe,_e));const ye=ne(C);if(ye!==O.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),_e[ye].usedTimes++;const qe=_e[O.__cacheKey];qe!==void 0&&(_e[O.__cacheKey].usedTimes--,qe.usedTimes===0&&R(C)),O.__cacheKey=ye,O.__webglTexture=_e[ye].texture}return J}function W(O,C,J){let xe=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(xe=s.TEXTURE_3D);const _e=he(O,C),ye=C.source;n.bindTexture(xe,O.__webglTexture,s.TEXTURE0+J);const qe=r.get(ye);if(ye.version!==qe.__version||_e===!0){n.activeTexture(s.TEXTURE0+J);const Ne=Tt.getPrimaries(Tt.workingColorSpace),Fe=C.colorSpace===Er?null:Tt.getPrimaries(C.colorSpace),ht=C.colorSpace===Er||Ne===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let be=w(C.image,!1,o.maxTextureSize);be=ct(C,be);const He=c.convert(C.format,C.colorSpace),tt=c.convert(C.type);let st=D(C.internalFormat,He,tt,C.colorSpace,C.isVideoTexture);G(xe,C);let je;const xt=C.mipmaps,ut=C.isVideoTexture!==!0,Nt=qe.__version===void 0||_e===!0,$=ye.dataReady,Le=K(C,be);if(C.isDepthTexture)st=N(C.format===$s,C.type),Nt&&(ut?n.texStorage2D(s.TEXTURE_2D,1,st,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,st,be.width,be.height,0,He,tt,null));else if(C.isDataTexture)if(xt.length>0){ut&&Nt&&n.texStorage2D(s.TEXTURE_2D,Le,st,xt[0].width,xt[0].height);for(let me=0,ve=xt.length;me<ve;me++)je=xt[me],ut?$&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,je.width,je.height,He,tt,je.data):n.texImage2D(s.TEXTURE_2D,me,st,je.width,je.height,0,He,tt,je.data);C.generateMipmaps=!1}else ut?(Nt&&n.texStorage2D(s.TEXTURE_2D,Le,st,be.width,be.height),$&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,He,tt,be.data)):n.texImage2D(s.TEXTURE_2D,0,st,be.width,be.height,0,He,tt,be.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ut&&Nt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,st,xt[0].width,xt[0].height,be.depth);for(let me=0,ve=xt.length;me<ve;me++)if(je=xt[me],C.format!==hi)if(He!==null)if(ut){if($)if(C.layerUpdates.size>0){const ke=Ym(je.width,je.height,C.format,C.type);for(const Oe of C.layerUpdates){const dt=je.data.subarray(Oe*ke/je.data.BYTES_PER_ELEMENT,(Oe+1)*ke/je.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Oe,je.width,je.height,1,He,dt)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,je.width,je.height,be.depth,He,je.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,st,je.width,je.height,be.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?$&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,je.width,je.height,be.depth,He,tt,je.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,st,je.width,je.height,be.depth,0,He,tt,je.data)}else{ut&&Nt&&n.texStorage2D(s.TEXTURE_2D,Le,st,xt[0].width,xt[0].height);for(let me=0,ve=xt.length;me<ve;me++)je=xt[me],C.format!==hi?He!==null?ut?$&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,je.width,je.height,He,je.data):n.compressedTexImage2D(s.TEXTURE_2D,me,st,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?$&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,je.width,je.height,He,tt,je.data):n.texImage2D(s.TEXTURE_2D,me,st,je.width,je.height,0,He,tt,je.data)}else if(C.isDataArrayTexture)if(ut){if(Nt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,st,be.width,be.height,be.depth),$)if(C.layerUpdates.size>0){const me=Ym(be.width,be.height,C.format,C.type);for(const ve of C.layerUpdates){const ke=be.data.subarray(ve*me/be.data.BYTES_PER_ELEMENT,(ve+1)*me/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,He,tt,ke)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,He,tt,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,st,be.width,be.height,be.depth,0,He,tt,be.data);else if(C.isData3DTexture)ut?(Nt&&n.texStorage3D(s.TEXTURE_3D,Le,st,be.width,be.height,be.depth),$&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,He,tt,be.data)):n.texImage3D(s.TEXTURE_3D,0,st,be.width,be.height,be.depth,0,He,tt,be.data);else if(C.isFramebufferTexture){if(Nt)if(ut)n.texStorage2D(s.TEXTURE_2D,Le,st,be.width,be.height);else{let me=be.width,ve=be.height;for(let ke=0;ke<Le;ke++)n.texImage2D(s.TEXTURE_2D,ke,st,me,ve,0,He,tt,null),me>>=1,ve>>=1}}else if(xt.length>0){if(ut&&Nt){const me=Ue(xt[0]);n.texStorage2D(s.TEXTURE_2D,Le,st,me.width,me.height)}for(let me=0,ve=xt.length;me<ve;me++)je=xt[me],ut?$&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,He,tt,je):n.texImage2D(s.TEXTURE_2D,me,st,He,tt,je);C.generateMipmaps=!1}else if(ut){if(Nt){const me=Ue(be);n.texStorage2D(s.TEXTURE_2D,Le,st,me.width,me.height)}$&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,He,tt,be)}else n.texImage2D(s.TEXTURE_2D,0,st,He,tt,be);v(C)&&y(xe),qe.__version=ye.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function te(O,C,J){if(C.image.length!==6)return;const xe=he(O,C),_e=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+J);const ye=r.get(_e);if(_e.version!==ye.__version||xe===!0){n.activeTexture(s.TEXTURE0+J);const qe=Tt.getPrimaries(Tt.workingColorSpace),Ne=C.colorSpace===Er?null:Tt.getPrimaries(C.colorSpace),Fe=C.colorSpace===Er||qe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ht=C.isCompressedTexture||C.image[0].isCompressedTexture,be=C.image[0]&&C.image[0].isDataTexture,He=[];for(let ve=0;ve<6;ve++)!ht&&!be?He[ve]=w(C.image[ve],!0,o.maxCubemapSize):He[ve]=be?C.image[ve].image:C.image[ve],He[ve]=ct(C,He[ve]);const tt=He[0],st=c.convert(C.format,C.colorSpace),je=c.convert(C.type),xt=D(C.internalFormat,st,je,C.colorSpace),ut=C.isVideoTexture!==!0,Nt=ye.__version===void 0||xe===!0,$=_e.dataReady;let Le=K(C,tt);G(s.TEXTURE_CUBE_MAP,C);let me;if(ht){ut&&Nt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,xt,tt.width,tt.height);for(let ve=0;ve<6;ve++){me=He[ve].mipmaps;for(let ke=0;ke<me.length;ke++){const Oe=me[ke];C.format!==hi?st!==null?ut?$&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,0,0,Oe.width,Oe.height,st,Oe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,xt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,0,0,Oe.width,Oe.height,st,je,Oe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,xt,Oe.width,Oe.height,0,st,je,Oe.data)}}}else{if(me=C.mipmaps,ut&&Nt){me.length>0&&Le++;const ve=Ue(He[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,xt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,He[ve].width,He[ve].height,st,je,He[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,He[ve].width,He[ve].height,0,st,je,He[ve].data);for(let ke=0;ke<me.length;ke++){const dt=me[ke].image[ve].image;ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,0,0,dt.width,dt.height,st,je,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,xt,dt.width,dt.height,0,st,je,dt.data)}}else{ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,st,je,He[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,st,je,He[ve]);for(let ke=0;ke<me.length;ke++){const Oe=me[ke];ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,0,0,st,je,Oe.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,xt,st,je,Oe.image[ve])}}}v(C)&&y(s.TEXTURE_CUBE_MAP),ye.__version=_e.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function pe(O,C,J,xe,_e,ye){const qe=c.convert(J.format,J.colorSpace),Ne=c.convert(J.type),Fe=D(J.internalFormat,qe,Ne,J.colorSpace),ht=r.get(C),be=r.get(J);if(be.__renderTarget=C,!ht.__hasExternalTextures){const He=Math.max(1,C.width>>ye),tt=Math.max(1,C.height>>ye);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,ye,Fe,He,tt,C.depth,0,qe,Ne,null):n.texImage2D(_e,ye,Fe,He,tt,0,qe,Ne,null)}n.bindFramebuffer(s.FRAMEBUFFER,O),We(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,_e,be.__webglTexture,0,Ie(C)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,_e,be.__webglTexture,ye),n.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(O,C,J){if(s.bindRenderbuffer(s.RENDERBUFFER,O),C.depthBuffer){const xe=C.depthTexture,_e=xe&&xe.isDepthTexture?xe.type:null,ye=N(C.stencilBuffer,_e),qe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Ie(C);We(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,ye,C.width,C.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ye,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,ye,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,O)}else{const xe=C.textures;for(let _e=0;_e<xe.length;_e++){const ye=xe[_e],qe=c.convert(ye.format,ye.colorSpace),Ne=c.convert(ye.type),Fe=D(ye.internalFormat,qe,Ne,ye.colorSpace),ht=Ie(C);J&&We(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Fe,C.width,C.height):We(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Fe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(C.depthTexture);xe.__renderTarget=C,(!xe.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),de(C.depthTexture,0);const _e=xe.__webglTexture,ye=Ie(C);if(C.depthTexture.format===Vs)We(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(C.depthTexture.format===$s)We(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Se(O){const C=r.get(O),J=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){const xe=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),xe){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,xe.removeEventListener("dispose",_e)};xe.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=xe}if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ge(C.__webglFramebuffer,O)}else if(J){C.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[xe]),C.__webglDepthbuffer[xe]===void 0)C.__webglDepthbuffer[xe]=s.createRenderbuffer(),oe(C.__webglDepthbuffer[xe],O,!1);else{const _e=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=C.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ye)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),oe(C.__webglDepthbuffer,O,!1);else{const xe=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(O,C,J){const xe=r.get(O);C!==void 0&&pe(xe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Se(O)}function Ge(O){const C=O.texture,J=r.get(O),xe=r.get(C);O.addEventListener("dispose",z);const _e=O.textures,ye=O.isWebGLCubeRenderTarget===!0,qe=_e.length>1;if(qe||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=C.version,u.memory.textures++),ye){J.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer[Ne]=[];for(let Fe=0;Fe<C.mipmaps.length;Fe++)J.__webglFramebuffer[Ne][Fe]=s.createFramebuffer()}else J.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)J.__webglFramebuffer[Ne]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ne=0,Fe=_e.length;Ne<Fe;Ne++){const ht=r.get(_e[Ne]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),u.memory.textures++)}if(O.samples>0&&We(O)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ne=0;Ne<_e.length;Ne++){const Fe=_e[Ne];J.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ne]);const ht=c.convert(Fe.format,Fe.colorSpace),be=c.convert(Fe.type),He=D(Fe.internalFormat,ht,be,Fe.colorSpace,O.isXRRenderTarget===!0),tt=Ie(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,He,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(J.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){n.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),G(s.TEXTURE_CUBE_MAP,C);for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0)for(let Fe=0;Fe<C.mipmaps.length;Fe++)pe(J.__webglFramebuffer[Ne][Fe],O,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Fe);else pe(J.__webglFramebuffer[Ne],O,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);v(C)&&y(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ne=0,Fe=_e.length;Ne<Fe;Ne++){const ht=_e[Ne],be=r.get(ht);n.bindTexture(s.TEXTURE_2D,be.__webglTexture),G(s.TEXTURE_2D,ht),pe(J.__webglFramebuffer,O,ht,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),v(ht)&&y(s.TEXTURE_2D)}n.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ne=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,xe.__webglTexture),G(Ne,C),C.mipmaps&&C.mipmaps.length>0)for(let Fe=0;Fe<C.mipmaps.length;Fe++)pe(J.__webglFramebuffer[Fe],O,C,s.COLOR_ATTACHMENT0,Ne,Fe);else pe(J.__webglFramebuffer,O,C,s.COLOR_ATTACHMENT0,Ne,0);v(C)&&y(Ne),n.unbindTexture()}O.depthBuffer&&Se(O)}function ze(O){const C=O.textures;for(let J=0,xe=C.length;J<xe;J++){const _e=C[J];if(v(_e)){const ye=U(O),qe=r.get(_e).__webglTexture;n.bindTexture(ye,qe),y(ye),n.unbindTexture()}}}const rt=[],V=[];function _t(O){if(O.samples>0){if(We(O)===!1){const C=O.textures,J=O.width,xe=O.height;let _e=s.COLOR_BUFFER_BIT;const ye=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(O),Ne=C.length>1;if(Ne)for(let Fe=0;Fe<C.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Fe=0;Fe<C.length;Fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Fe]);const ht=r.get(C[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,J,xe,0,0,J,xe,_e,s.NEAREST),p===!0&&(rt.length=0,V.length=0,rt.push(s.COLOR_ATTACHMENT0+Fe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(rt.push(ye),V.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Fe=0;Fe<C.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Fe]);const ht=r.get(C[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ht,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const C=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ie(O){return Math.min(o.maxSamples,O.samples)}function We(O){const C=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Pe(O){const C=u.render.frame;x.get(O)!==C&&(x.set(O,C),O.update())}function ct(O,C){const J=O.colorSpace,xe=O.format,_e=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==Ks&&J!==Er&&(Tt.getTransfer(J)===Pt?(xe!==hi||_e!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),C}function Ue(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=de,this.setTexture2DArray=ee,this.setTexture3D=re,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=We}function R1(s,e){function n(r,o=Er){let c;const u=Tt.getTransfer(o);if(r===Yi)return s.UNSIGNED_BYTE;if(r===af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return s.BYTE;if(r===vg)return s.SHORT;if(r===Ga)return s.UNSIGNED_SHORT;if(r===sf)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===Wa)return s.HALF_FLOAT;if(r===Sg)return s.ALPHA;if(r===Eg)return s.RGB;if(r===hi)return s.RGBA;if(r===Mg)return s.LUMINANCE;if(r===bg)return s.LUMINANCE_ALPHA;if(r===Vs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===wg)return s.RED;if(r===lf)return s.RED_INTEGER;if(r===Tg)return s.RG;if(r===cf)return s.RG_INTEGER;if(r===uf)return s.RGBA_INTEGER;if(r===Tl||r===Al||r===Cl||r===Rl)if(u===Pt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Tl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Tl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===wd||r===Td||r===Ad)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cd||r===Rd||r===Nd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Cd||r===Rd)return u===Pt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Nd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Id||r===Ld||r===Pd||r===Dd||r===Ud||r===Od||r===zd||r===kd||r===Fd||r===Bd||r===Hd||r===Vd||r===Gd||r===jd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Id)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Od)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Wd||r===Xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Nl)return u===Pt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ag||r===qd||r===Yd||r===$d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class N1 extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I1={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,r),y=this._getHandJoint(g,w);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const x=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],S=x.position.distanceTo(_.position),M=.02,E=.005;g.inputState.pinching&&S>M+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&S<=M-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new tn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const L1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
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

}`;class D1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new On,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Tr({vertexShader:L1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mt(new Vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U1 extends Qs{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",p=1,g=null,x=null,_=null,S=null,M=null,E=null;const w=new D1,v=n.getContextAttributes();let y=null,U=null;const D=[],N=[],K=new Mt;let k=null;const z=new Gn;z.viewport=new Xt;const H=new Gn;H.viewport=new Xt;const R=[z,H],A=new N1;let P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=D[W];return te===void 0&&(te=new sd,D[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=D[W];return te===void 0&&(te=new sd,D[W]=te),te.getGripSpace()},this.getHand=function(W){let te=D[W];return te===void 0&&(te=new sd,D[W]=te),te.getHandSpace()};function X(W){const te=N.indexOf(W.inputSource);if(te===-1)return;const pe=D[te];pe!==void 0&&(pe.update(W.inputSource,W.frame,g||u),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function ne(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",de);for(let W=0;W<D.length;W++){const te=N[W];te!==null&&(N[W]=null,D[W].disconnect(te))}P=null,q=null,w.reset(),e.setRenderTarget(y),M=null,S=null,_=null,o=null,U=null,he.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){f=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(W){g=W},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(K),o.renderState.layers===void 0){const te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,te),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new es(M.framebufferWidth,M.framebufferHeight,{format:hi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let te=null,pe=null,oe=null;v.depth&&(oe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=v.stencil?$s:Vs,pe=v.stencil?Ys:Jr);const ge={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:c};_=new XRWebGLBinding(o,n),S=_.createProjectionLayer(ge),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new es(S.textureWidth,S.textureHeight,{format:hi,type:Yi,depthTexture:new Hg(S.textureWidth,S.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await o.requestReferenceSpace(f),he.setContext(o),he.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(W){for(let te=0;te<W.removed.length;te++){const pe=W.removed[te],oe=N.indexOf(pe);oe>=0&&(N[oe]=null,D[oe].disconnect(pe))}for(let te=0;te<W.added.length;te++){const pe=W.added[te];let oe=N.indexOf(pe);if(oe===-1){for(let Se=0;Se<D.length;Se++)if(Se>=N.length){N.push(pe),oe=Se;break}else if(N[Se]===null){N[Se]=pe,oe=Se;break}if(oe===-1)break}const ge=D[oe];ge&&ge.connect(pe)}}const ee=new le,re=new le;function B(W,te,pe){ee.setFromMatrixPosition(te.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const oe=ee.distanceTo(re),ge=te.projectionMatrix.elements,Se=pe.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),Ge=ge[14]/(ge[10]+1),ze=(ge[9]+1)/ge[5],rt=(ge[9]-1)/ge[5],V=(ge[8]-1)/ge[0],_t=(Se[8]+1)/Se[0],Ie=Re*V,We=Re*_t,Pe=oe/(-V+_t),ct=Pe*-V;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ct),W.translateZ(Pe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ge[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ue=Re+Pe,O=Ge+Pe,C=Ie-ct,J=We+(oe-ct),xe=ze*Ge/O*Ue,_e=rt*Ge/O*Ue;W.projectionMatrix.makePerspective(C,J,xe,_e,Ue,O),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let te=W.near,pe=W.far;w.texture!==null&&(w.depthNear>0&&(te=w.depthNear),w.depthFar>0&&(pe=w.depthFar)),A.near=H.near=z.near=te,A.far=H.far=z.far=pe,(P!==A.near||q!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,q=A.far),z.layers.mask=W.layers.mask|2,H.layers.mask=W.layers.mask|4,A.layers.mask=z.layers.mask|H.layers.mask;const oe=W.parent,ge=A.cameras;ae(A,oe);for(let Se=0;Se<ge.length;Se++)ae(ge[Se],oe);ge.length===2?B(A,z,H):A.projectionMatrix.copy(z.projectionMatrix),L(W,A,oe)};function L(W,te,pe){pe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(W){p=W,S!==null&&(S.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let b=null;function G(W,te){if(x=te.getViewerPose(g||u),E=te,x!==null){const pe=x.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let oe=!1;pe.length!==A.cameras.length&&(A.cameras.length=0,oe=!0);for(let Se=0;Se<pe.length;Se++){const Re=pe[Se];let Ge=null;if(M!==null)Ge=M.getViewport(Re);else{const rt=_.getViewSubImage(S,Re);Ge=rt.viewport,Se===0&&(e.setRenderTargetTextures(U,rt.colorTexture,S.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(U))}let ze=R[Se];ze===void 0&&(ze=new Gn,ze.layers.enable(Se),ze.viewport=new Xt,R[Se]=ze),ze.matrix.fromArray(Re.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Re.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Se===0&&(A.matrix.copy(ze.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),oe===!0&&A.cameras.push(ze)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Se=_.getDepthInformation(pe[0]);Se&&Se.isValid&&Se.texture&&w.init(e,Se,o.renderState)}}for(let pe=0;pe<D.length;pe++){const oe=N[pe],ge=D[pe];oe!==null&&ge!==void 0&&ge.update(oe,te,g||u)}b&&b(W,te),te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:te}),E=null}const he=new Fg;he.setAnimationLoop(G),this.setAnimationLoop=function(W){b=W},this.dispose=function(){}}}const Xr=new Ti,O1=new Vt;function z1(s,e){function n(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function r(v,y){y.color.getRGB(v.fogColor.value,Og(s)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function o(v,y,U,D,N){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(v,y):y.isMeshToonMaterial?(c(v,y),_(v,y)):y.isMeshPhongMaterial?(c(v,y),x(v,y)):y.isMeshStandardMaterial?(c(v,y),S(v,y),y.isMeshPhysicalMaterial&&M(v,y,N)):y.isMeshMatcapMaterial?(c(v,y),E(v,y)):y.isMeshDepthMaterial?c(v,y):y.isMeshDistanceMaterial?(c(v,y),w(v,y)):y.isMeshNormalMaterial?c(v,y):y.isLineBasicMaterial?(u(v,y),y.isLineDashedMaterial&&f(v,y)):y.isPointsMaterial?p(v,y,U,D):y.isSpriteMaterial?g(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,n(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,n(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,n(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===Un&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,n(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===Un&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,n(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,n(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const U=e.get(y),D=U.envMap,N=U.envMapRotation;D&&(v.envMap.value=D,Xr.copy(N),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),v.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(Xr)),v.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap&&(v.lightMap.value=y.lightMap,v.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,v.lightMapTransform)),y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,v.aoMapTransform))}function u(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,n(y.map,v.mapTransform))}function f(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function p(v,y,U,D){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*U,v.scale.value=D*.5,y.map&&(v.map.value=y.map,n(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,n(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function g(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,n(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,n(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function x(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function _(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function S(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,v.roughnessMapTransform)),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function M(v,y,U){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Un&&v.clearcoatNormalScale.value.negate())),y.dispersion>0&&(v.dispersion.value=y.dispersion),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,y){y.matcap&&(v.matcap.value=y.matcap)}function w(v,y){const U=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function k1(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,D){const N=D.program;r.uniformBlockBinding(U,N)}function g(U,D){let N=o[U.id];N===void 0&&(E(U),N=x(U),o[U.id]=N,U.addEventListener("dispose",v));const K=D.program;r.updateUBOMapping(U,K);const k=e.render.frame;c[U.id]!==k&&(S(U),c[U.id]=k)}function x(U){const D=_();U.__bindingPointIndex=D;const N=s.createBuffer(),K=U.__size,k=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,K,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,N),N}function _(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const D=o[U.id],N=U.uniforms,K=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let k=0,z=N.length;k<z;k++){const H=Array.isArray(N[k])?N[k]:[N[k]];for(let R=0,A=H.length;R<A;R++){const P=H[R];if(M(P,k,R,K)===!0){const q=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let ne=0;for(let de=0;de<X.length;de++){const ee=X[de],re=w(ee);typeof ee=="number"||typeof ee=="boolean"?(P.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,q+ne,P.__data)):ee.isMatrix3?(P.__data[0]=ee.elements[0],P.__data[1]=ee.elements[1],P.__data[2]=ee.elements[2],P.__data[3]=0,P.__data[4]=ee.elements[3],P.__data[5]=ee.elements[4],P.__data[6]=ee.elements[5],P.__data[7]=0,P.__data[8]=ee.elements[6],P.__data[9]=ee.elements[7],P.__data[10]=ee.elements[8],P.__data[11]=0):(ee.toArray(P.__data,ne),ne+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,D,N,K){const k=U.value,z=D+"_"+N;if(K[z]===void 0)return typeof k=="number"||typeof k=="boolean"?K[z]=k:K[z]=k.clone(),!0;{const H=K[z];if(typeof k=="number"||typeof k=="boolean"){if(H!==k)return K[z]=k,!0}else if(H.equals(k)===!1)return H.copy(k),!0}return!1}function E(U){const D=U.uniforms;let N=0;const K=16;for(let z=0,H=D.length;z<H;z++){const R=Array.isArray(D[z])?D[z]:[D[z]];for(let A=0,P=R.length;A<P;A++){const q=R[A],X=Array.isArray(q.value)?q.value:[q.value];for(let ne=0,de=X.length;ne<de;ne++){const ee=X[ne],re=w(ee),B=N%K,ae=B%re.boundary,L=B+ae;N+=ae,L!==0&&K-L<re.storage&&(N+=K-L),q.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=re.storage}}}const k=N%K;return k>0&&(N+=K-k),U.__size=N,U.__cache={},this}function w(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function v(U){const D=U.target;D.removeEventListener("dispose",v);const N=u.indexOf(D.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function y(){for(const U in o)s.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:p,update:g,dispose:y}}class Xg{constructor(e={}){const{canvas:n=Av(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),w=new Int32Array(4);let v=null,y=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=br,this.toneMappingExposure=1;const N=this;let K=!1,k=0,z=0,H=null,R=-1,A=null;const P=new Xt,q=new Xt;let X=null;const ne=new ft(0);let de=0,ee=n.width,re=n.height,B=1,ae=null,L=null;const b=new Xt(0,0,ee,re),G=new Xt(0,0,ee,re);let he=!1;const W=new pf;let te=!1,pe=!1;const oe=new Vt,ge=new Vt,Se=new le,Re=new Xt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function rt(){return H===null?B:1}let V=r;function _t(I,Z){return n.getContext(I,Z)}try{const I={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),V===null){const Z="webgl2";if(V=_t(Z,I),V===null)throw _t(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ie,We,Pe,ct,Ue,O,C,J,xe,_e,ye,qe,Ne,Fe,ht,be,He,tt,st,je,xt,ut,Nt,$;function Le(){Ie=new jE(V),Ie.init(),ut=new R1(V,Ie),We=new kE(V,Ie,e,ut),Pe=new T1(V,Ie),We.reverseDepthBuffer&&S&&Pe.buffers.depth.setReversed(!0),ct=new qE(V),Ue=new d1,O=new C1(V,Ie,Pe,Ue,We,ut,ct),C=new BE(N),J=new GE(N),xe=new e_(V),Nt=new OE(V,xe),_e=new WE(V,xe,ct,Nt),ye=new $E(V,_e,xe,ct),st=new YE(V,We,O),be=new FE(Ue),qe=new u1(N,C,J,Ie,We,Nt,be),Ne=new z1(N,Ue),Fe=new h1,ht=new v1(Ie),tt=new UE(N,C,J,Pe,ye,M,p),He=new b1(N,ye,We),$=new k1(V,ct,We,Pe),je=new zE(V,Ie,ct),xt=new XE(V,Ie,ct),ct.programs=qe.programs,N.capabilities=We,N.extensions=Ie,N.properties=Ue,N.renderLists=Fe,N.shadowMap=He,N.state=Pe,N.info=ct}Le();const me=new U1(N,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const I=Ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(ee,re,!1))},this.getSize=function(I){return I.set(ee,re)},this.setSize=function(I,Z,ue=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=I,re=Z,n.width=Math.floor(I*B),n.height=Math.floor(Z*B),ue===!0&&(n.style.width=I+"px",n.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(ee*B,re*B).floor()},this.setDrawingBufferSize=function(I,Z,ue){ee=I,re=Z,B=ue,n.width=Math.floor(I*ue),n.height=Math.floor(Z*ue),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(P)},this.getViewport=function(I){return I.copy(b)},this.setViewport=function(I,Z,ue,fe){I.isVector4?b.set(I.x,I.y,I.z,I.w):b.set(I,Z,ue,fe),Pe.viewport(P.copy(b).multiplyScalar(B).round())},this.getScissor=function(I){return I.copy(G)},this.setScissor=function(I,Z,ue,fe){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,Z,ue,fe),Pe.scissor(q.copy(G).multiplyScalar(B).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(I){Pe.setScissorTest(he=I)},this.setOpaqueSort=function(I){ae=I},this.setTransparentSort=function(I){L=I},this.getClearColor=function(I){return I.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(I=!0,Z=!0,ue=!0){let fe=0;if(I){let Q=!1;if(H!==null){const Ce=H.texture.format;Q=Ce===uf||Ce===cf||Ce===lf}if(Q){const Ce=H.texture.type,Te=Ce===Yi||Ce===Jr||Ce===Ga||Ce===Ys||Ce===af||Ce===of,Ze=tt.getClearColor(),Ye=tt.getClearAlpha(),at=Ze.r,lt=Ze.g,Ke=Ze.b;Te?(E[0]=at,E[1]=lt,E[2]=Ke,E[3]=Ye,V.clearBufferuiv(V.COLOR,0,E)):(w[0]=at,w[1]=lt,w[2]=Ke,w[3]=Ye,V.clearBufferiv(V.COLOR,0,w))}else fe|=V.COLOR_BUFFER_BIT}Z&&(fe|=V.DEPTH_BUFFER_BIT),ue&&(fe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),Fe.dispose(),ht.dispose(),Ue.dispose(),C.dispose(),J.dispose(),ye.dispose(),Nt.dispose(),$.dispose(),qe.dispose(),me.dispose(),me.removeEventListener("sessionstart",ts),me.removeEventListener("sessionend",$i),Ai.stop()};function ve(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const I=ct.autoReset,Z=He.enabled,ue=He.autoUpdate,fe=He.needsUpdate,Q=He.type;Le(),ct.autoReset=I,He.enabled=Z,He.autoUpdate=ue,He.needsUpdate=fe,He.type=Q}function Oe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function dt(I){const Z=I.target;Z.removeEventListener("dispose",dt),kt(Z)}function kt(I){Kt(I),Ue.remove(I)}function Kt(I){const Z=Ue.get(I).programs;Z!==void 0&&(Z.forEach(function(ue){qe.releaseProgram(ue)}),I.isShaderMaterial&&qe.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,ue,fe,Q,Ce){Z===null&&(Z=Ge);const Te=Q.isMesh&&Q.matrixWorld.determinant()<0,Ze=Ka(I,Z,ue,fe,Q);Pe.setMaterial(fe,Te);let Ye=ue.index,at=1;if(fe.wireframe===!0){if(Ye=_e.getWireframeAttribute(ue),Ye===void 0)return;at=2}const lt=ue.drawRange,Ke=ue.attributes.position;let Et=lt.start*at,Rt=(lt.start+lt.count)*at;Ce!==null&&(Et=Math.max(Et,Ce.start*at),Rt=Math.min(Rt,(Ce.start+Ce.count)*at)),Ye!==null?(Et=Math.max(Et,0),Rt=Math.min(Rt,Ye.count)):Ke!=null&&(Et=Math.max(Et,0),Rt=Math.min(Rt,Ke.count));const St=Rt-Et;if(St<0||St===1/0)return;Nt.setup(Q,fe,Ze,ue,Ye);let fn,pt=je;if(Ye!==null&&(fn=xe.get(Ye),pt=xt,pt.setIndex(fn)),Q.isMesh)fe.wireframe===!0?(Pe.setLineWidth(fe.wireframeLinewidth*rt()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(Q.isLine){let Je=fe.linewidth;Je===void 0&&(Je=1),Pe.setLineWidth(Je*rt()),Q.isLineSegments?pt.setMode(V.LINES):Q.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else Q.isPoints?pt.setMode(V.POINTS):Q.isSprite&&pt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Je=Q._multiDrawStarts,ti=Q._multiDrawCounts,At=Q._multiDrawCount,hn=Ye?xe.get(Ye).bytesPerElement:1,ni=Ue.get(fe).currentProgram.getUniforms();for(let Qt=0;Qt<At;Qt++)ni.setValue(V,"_gl_DrawID",Qt),pt.render(Je[Qt]/hn,ti[Qt])}else if(Q.isInstancedMesh)pt.renderInstances(Et,St,Q.count);else if(ue.isInstancedBufferGeometry){const Je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ti=Math.min(ue.instanceCount,Je);pt.renderInstances(Et,St,ti)}else pt.render(Et,St)};function bt(I,Z,ue){I.transparent===!0&&I.side===Mi&&I.forceSinglePass===!1?(I.side=Un,I.needsUpdate=!0,ns(I,Z,ue),I.side=wr,I.needsUpdate=!0,ns(I,Z,ue),I.side=Mi):ns(I,Z,ue)}this.compile=function(I,Z,ue=null){ue===null&&(ue=I),y=ht.get(ue),y.init(Z),D.push(y),ue.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),I!==ue&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const fe=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Te=0;Te<Ce.length;Te++){const Ze=Ce[Te];bt(Ze,ue,Q),fe.add(Ze)}else bt(Ce,ue,Q),fe.add(Ce)}),D.pop(),y=null,fe},this.compileAsync=function(I,Z,ue=null){const fe=this.compile(I,Z,ue);return new Promise(Q=>{function Ce(){if(fe.forEach(function(Te){Ue.get(Te).currentProgram.isReady()&&fe.delete(Te)}),fe.size===0){Q(I);return}setTimeout(Ce,10)}Ie.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Tn=null;function _n(I){Tn&&Tn(I)}function ts(){Ai.stop()}function $i(){Ai.start()}const Ai=new Fg;Ai.setAnimationLoop(_n),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(I){Tn=I,me.setAnimationLoop(I),I===null?Ai.stop():Ai.start()},me.addEventListener("sessionstart",ts),me.addEventListener("sessionend",$i),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(Z),Z=me.getCamera()),I.isScene===!0&&I.onBeforeRender(N,I,Z,H),y=ht.get(I,D.length),y.init(Z),D.push(y),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(ge),pe=this.localClippingEnabled,te=be.init(this.clippingPlanes,pe),v=Fe.get(I,U.length),v.init(),U.push(v),me.enabled===!0&&me.isPresenting===!0){const Ce=N.xr.getDepthSensingMesh();Ce!==null&&Ci(Ce,Z,-1/0,N.sortObjects)}Ci(I,Z,0,N.sortObjects),v.finish(),N.sortObjects===!0&&v.sort(ae,L),ze=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ze&&tt.addToRenderList(v,I),this.info.render.frame++,te===!0&&be.beginShadows();const ue=y.state.shadowsArray;He.render(ue,I,Z),te===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=v.opaque,Q=v.transmissive;if(y.setupLights(),Z.isArrayCamera){const Ce=Z.cameras;if(Q.length>0)for(let Te=0,Ze=Ce.length;Te<Ze;Te++){const Ye=Ce[Te];Cr(fe,Q,I,Ye)}ze&&tt.render(I);for(let Te=0,Ze=Ce.length;Te<Ze;Te++){const Ye=Ce[Te];Ar(v,I,Ye,Ye.viewport)}}else Q.length>0&&Cr(fe,Q,I,Z),ze&&tt.render(I),Ar(v,I,Z);H!==null&&(O.updateMultisampleRenderTarget(H),O.updateRenderTargetMipmap(H)),I.isScene===!0&&I.onAfterRender(N,I,Z),Nt.resetDefaultState(),R=-1,A=null,D.pop(),D.length>0?(y=D[D.length-1],te===!0&&be.setGlobalState(N.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?v=U[U.length-1]:v=null};function Ci(I,Z,ue,fe){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)ue=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)y.pushLight(I),I.castShadow&&y.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||W.intersectsSprite(I)){fe&&Re.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ge);const Te=ye.update(I),Ze=I.material;Ze.visible&&v.push(I,Te,Ze,ue,Re.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||W.intersectsObject(I))){const Te=ye.update(I),Ze=I.material;if(fe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Re.copy(I.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Re.copy(Te.boundingSphere.center)),Re.applyMatrix4(I.matrixWorld).applyMatrix4(ge)),Array.isArray(Ze)){const Ye=Te.groups;for(let at=0,lt=Ye.length;at<lt;at++){const Ke=Ye[at],Et=Ze[Ke.materialIndex];Et&&Et.visible&&v.push(I,Te,Et,ue,Re.z,Ke)}}else Ze.visible&&v.push(I,Te,Ze,ue,Re.z,null)}}const Ce=I.children;for(let Te=0,Ze=Ce.length;Te<Ze;Te++)Ci(Ce[Te],Z,ue,fe)}function Ar(I,Z,ue,fe){const Q=I.opaque,Ce=I.transmissive,Te=I.transparent;y.setupLightsView(ue),te===!0&&be.setGlobalState(N.clippingPlanes,ue),fe&&Pe.viewport(P.copy(fe)),Q.length>0&&Zi(Q,Z,ue),Ce.length>0&&Zi(Ce,Z,ue),Te.length>0&&Zi(Te,Z,ue),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Cr(I,Z,ue,fe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[fe.id]===void 0&&(y.state.transmissionRenderTarget[fe.id]=new es(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Wa:Yi,minFilter:Qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ce=y.state.transmissionRenderTarget[fe.id],Te=fe.viewport||P;Ce.setSize(Te.z,Te.w);const Ze=N.getRenderTarget();N.setRenderTarget(Ce),N.getClearColor(ne),de=N.getClearAlpha(),de<1&&N.setClearColor(16777215,.5),N.clear(),ze&&tt.render(ue);const Ye=N.toneMapping;N.toneMapping=br;const at=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),y.setupLightsView(fe),te===!0&&be.setGlobalState(N.clippingPlanes,fe),Zi(I,ue,fe),O.updateMultisampleRenderTarget(Ce),O.updateRenderTargetMipmap(Ce),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ke=0,Et=Z.length;Ke<Et;Ke++){const Rt=Z[Ke],St=Rt.object,fn=Rt.geometry,pt=Rt.material,Je=Rt.group;if(pt.side===Mi&&St.layers.test(fe.layers)){const ti=pt.side;pt.side=Un,pt.needsUpdate=!0,$a(St,ue,fe,fn,pt,Je),pt.side=ti,pt.needsUpdate=!0,lt=!0}}lt===!0&&(O.updateMultisampleRenderTarget(Ce),O.updateRenderTargetMipmap(Ce))}N.setRenderTarget(Ze),N.setClearColor(ne,de),at!==void 0&&(fe.viewport=at),N.toneMapping=Ye}function Zi(I,Z,ue){const fe=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ce=I.length;Q<Ce;Q++){const Te=I[Q],Ze=Te.object,Ye=Te.geometry,at=fe===null?Te.material:fe,lt=Te.group;Ze.layers.test(ue.layers)&&$a(Ze,Z,ue,Ye,at,lt)}}function $a(I,Z,ue,fe,Q,Ce){I.onBeforeRender(N,Z,ue,fe,Q,Ce),I.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(N,Z,ue,fe,I,Ce),Q.transparent===!0&&Q.side===Mi&&Q.forceSinglePass===!1?(Q.side=Un,Q.needsUpdate=!0,N.renderBufferDirect(ue,Z,fe,Q,I,Ce),Q.side=wr,Q.needsUpdate=!0,N.renderBufferDirect(ue,Z,fe,Q,I,Ce),Q.side=Mi):N.renderBufferDirect(ue,Z,fe,Q,I,Ce),I.onAfterRender(N,Z,ue,fe,Q,Ce)}function ns(I,Z,ue){Z.isScene!==!0&&(Z=Ge);const fe=Ue.get(I),Q=y.state.lights,Ce=y.state.shadowsArray,Te=Q.state.version,Ze=qe.getParameters(I,Q.state,Ce,Z,ue),Ye=qe.getProgramCacheKey(Ze);let at=fe.programs;fe.environment=I.isMeshStandardMaterial?Z.environment:null,fe.fog=Z.fog,fe.envMap=(I.isMeshStandardMaterial?J:C).get(I.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,at===void 0&&(I.addEventListener("dispose",dt),at=new Map,fe.programs=at);let lt=at.get(Ye);if(lt!==void 0){if(fe.currentProgram===lt&&fe.lightsStateVersion===Te)return mi(I,Ze),lt}else Ze.uniforms=qe.getUniforms(I),I.onBeforeCompile(Ze,N),lt=qe.acquireProgram(Ze,Ye),at.set(Ye,lt),fe.uniforms=Ze.uniforms;const Ke=fe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ke.clippingPlanes=be.uniform),mi(I,Ze),fe.needsLights=Wl(I),fe.lightsStateVersion=Te,fe.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMap.value=Q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotShadowMap.value=Q.state.spotShadowMap,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMap.value=Q.state.pointShadowMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),fe.currentProgram=lt,fe.uniformsList=null,lt}function Za(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=Il.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function mi(I,Z){const ue=Ue.get(I);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function Ka(I,Z,ue,fe,Q){Z.isScene!==!0&&(Z=Ge),O.resetTextureUnits();const Ce=Z.fog,Te=fe.isMeshStandardMaterial?Z.environment:null,Ze=H===null?N.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ks,Ye=(fe.isMeshStandardMaterial?J:C).get(fe.envMap||Te),at=fe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,lt=!!ue.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Ke=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,Rt=!!ue.morphAttributes.color;let St=br;fe.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(St=N.toneMapping);const fn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,pt=fn!==void 0?fn.length:0,Je=Ue.get(fe),ti=y.state.lights;if(te===!0&&(pe===!0||I!==A)){const Sn=I===A&&fe.id===R;be.setState(fe,I,Sn)}let At=!1;fe.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==ti.state.version||Je.outputColorSpace!==Ze||Q.isBatchedMesh&&Je.batching===!1||!Q.isBatchedMesh&&Je.batching===!0||Q.isBatchedMesh&&Je.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Je.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Je.instancing===!1||!Q.isInstancedMesh&&Je.instancing===!0||Q.isSkinnedMesh&&Je.skinning===!1||!Q.isSkinnedMesh&&Je.skinning===!0||Q.isInstancedMesh&&Je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Je.instancingMorph===!1&&Q.morphTexture!==null||Je.envMap!==Ye||fe.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==be.numPlanes||Je.numIntersection!==be.numIntersection)||Je.vertexAlphas!==at||Je.vertexTangents!==lt||Je.morphTargets!==Ke||Je.morphNormals!==Et||Je.morphColors!==Rt||Je.toneMapping!==St||Je.morphTargetsCount!==pt)&&(At=!0):(At=!0,Je.__version=fe.version);let hn=Je.currentProgram;At===!0&&(hn=ns(fe,Z,Q));let ni=!1,Qt=!1,gi=!1;const Ut=hn.getUniforms(),jn=Je.uniforms;if(Pe.useProgram(hn.program)&&(ni=!0,Qt=!0,gi=!0),fe.id!==R&&(R=fe.id,Qt=!0),ni||A!==I){Pe.buffers.depth.getReversed()?(oe.copy(I.projectionMatrix),Rv(oe),Nv(oe),Ut.setValue(V,"projectionMatrix",oe)):Ut.setValue(V,"projectionMatrix",I.projectionMatrix),Ut.setValue(V,"viewMatrix",I.matrixWorldInverse);const Wn=Ut.map.cameraPosition;Wn!==void 0&&Wn.setValue(V,Se.setFromMatrixPosition(I.matrixWorld)),We.logarithmicDepthBuffer&&Ut.setValue(V,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Ut.setValue(V,"isOrthographic",I.isOrthographicCamera===!0),A!==I&&(A=I,Qt=!0,gi=!0)}if(Q.isSkinnedMesh){Ut.setOptional(V,Q,"bindMatrix"),Ut.setOptional(V,Q,"bindMatrixInverse");const Sn=Q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ut.setValue(V,"boneTexture",Sn.boneTexture,O))}Q.isBatchedMesh&&(Ut.setOptional(V,Q,"batchingTexture"),Ut.setValue(V,"batchingTexture",Q._matricesTexture,O),Ut.setOptional(V,Q,"batchingIdTexture"),Ut.setValue(V,"batchingIdTexture",Q._indirectTexture,O),Ut.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ut.setValue(V,"batchingColorTexture",Q._colorsTexture,O));const Ri=ue.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&st.update(Q,ue,hn),(Qt||Je.receiveShadow!==Q.receiveShadow)&&(Je.receiveShadow=Q.receiveShadow,Ut.setValue(V,"receiveShadow",Q.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(jn.envMap.value=Ye,jn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&Z.environment!==null&&(jn.envMapIntensity.value=Z.environmentIntensity),Qt&&(Ut.setValue(V,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&Qa(jn,gi),Ce&&fe.fog===!0&&Ne.refreshFogUniforms(jn,Ce),Ne.refreshMaterialUniforms(jn,fe,B,re,y.state.transmissionRenderTarget[I.id]),Il.upload(V,Za(Je),jn,O)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Il.upload(V,Za(Je),jn,O),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Ut.setValue(V,"center",Q.center),Ut.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ut.setValue(V,"normalMatrix",Q.normalMatrix),Ut.setValue(V,"modelMatrix",Q.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Sn=fe.uniformsGroups;for(let Wn=0,An=Sn.length;Wn<An;Wn++){const Ja=Sn[Wn];$.update(Ja,hn),$.bind(Ja,hn)}}return hn}function Qa(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function Wl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(I,Z,ue){Ue.get(I.texture).__webglTexture=Z,Ue.get(I.depthTexture).__webglTexture=ue;const fe=Ue.get(I);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ue===void 0,fe.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Z){const ue=Ue.get(I);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,ue=0){H=I,k=Z,z=ue;let fe=!0,Q=null,Ce=!1,Te=!1;if(I){const Ye=Ue.get(I);if(Ye.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(V.FRAMEBUFFER,null),fe=!1;else if(Ye.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(Ye.__hasExternalTextures)O.rebindTextures(I,Ue.get(I.texture).__webglTexture,Ue.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ke=I.depthTexture;if(Ye.__boundDepthTexture!==Ke){if(Ke!==null&&Ue.has(Ke)&&(I.width!==Ke.image.width||I.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}const at=I.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Te=!0);const lt=Ue.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(lt[Z])?Q=lt[Z][ue]:Q=lt[Z],Ce=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?Q=Ue.get(I).__webglMultisampledFramebuffer:Array.isArray(lt)?Q=lt[ue]:Q=lt,P.copy(I.viewport),q.copy(I.scissor),X=I.scissorTest}else P.copy(b).multiplyScalar(B).floor(),q.copy(G).multiplyScalar(B).floor(),X=he;if(Pe.bindFramebuffer(V.FRAMEBUFFER,Q)&&fe&&Pe.drawBuffers(I,Q),Pe.viewport(P),Pe.scissor(q),Pe.setScissorTest(X),Ce){const Ye=Ue.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ye.__webglTexture,ue)}else if(Te){const Ye=Ue.get(I.texture),at=Z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ye.__webglTexture,ue||0,at)}R=-1},this.readRenderTargetPixels=function(I,Z,ue,fe,Q,Ce,Te){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Ue.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(Ze=Ze[Te]),Ze){Pe.bindFramebuffer(V.FRAMEBUFFER,Ze);try{const Ye=I.texture,at=Ye.format,lt=Ye.type;if(!We.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-fe&&ue>=0&&ue<=I.height-Q&&V.readPixels(Z,ue,fe,Q,ut.convert(at),ut.convert(lt),Ce)}finally{const Ye=H!==null?Ue.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(I,Z,ue,fe,Q,Ce,Te){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=Ue.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(Ze=Ze[Te]),Ze){const Ye=I.texture,at=Ye.format,lt=Ye.type;if(!We.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=I.width-fe&&ue>=0&&ue<=I.height-Q){Pe.bindFramebuffer(V.FRAMEBUFFER,Ze);const Ke=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(Z,ue,fe,Q,ut.convert(at),ut.convert(lt),0);const Et=H!==null?Ue.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Et);const Rt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Cv(V,Rt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(Ke),V.deleteSync(Rt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Z=null,ue=0){I.isTexture!==!0&&(Fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,I=arguments[1]);const fe=Math.pow(2,-ue),Q=Math.floor(I.image.width*fe),Ce=Math.floor(I.image.height*fe),Te=Z!==null?Z.x:0,Ze=Z!==null?Z.y:0;O.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,Te,Ze,Q,Ce),Pe.unbindTexture()},this.copyTextureToTexture=function(I,Z,ue=null,fe=null,Q=0){I.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,I=arguments[1],Z=arguments[2],Q=arguments[3]||0,ue=null);let Ce,Te,Ze,Ye,at,lt,Ke,Et,Rt;const St=I.isCompressedTexture?I.mipmaps[Q]:I.image;ue!==null?(Ce=ue.max.x-ue.min.x,Te=ue.max.y-ue.min.y,Ze=ue.isBox3?ue.max.z-ue.min.z:1,Ye=ue.min.x,at=ue.min.y,lt=ue.isBox3?ue.min.z:0):(Ce=St.width,Te=St.height,Ze=St.depth||1,Ye=0,at=0,lt=0),fe!==null?(Ke=fe.x,Et=fe.y,Rt=fe.z):(Ke=0,Et=0,Rt=0);const fn=ut.convert(Z.format),pt=ut.convert(Z.type);let Je;Z.isData3DTexture?(O.setTexture3D(Z,0),Je=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(O.setTexture2DArray(Z,0),Je=V.TEXTURE_2D_ARRAY):(O.setTexture2D(Z,0),Je=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const ti=V.getParameter(V.UNPACK_ROW_LENGTH),At=V.getParameter(V.UNPACK_IMAGE_HEIGHT),hn=V.getParameter(V.UNPACK_SKIP_PIXELS),ni=V.getParameter(V.UNPACK_SKIP_ROWS),Qt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,St.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ye),V.pixelStorei(V.UNPACK_SKIP_ROWS,at),V.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);const gi=I.isDataArrayTexture||I.isData3DTexture,Ut=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const jn=Ue.get(I),Ri=Ue.get(Z),Sn=Ue.get(jn.__renderTarget),Wn=Ue.get(Ri.__renderTarget);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let An=0;An<Ze;An++)gi&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ue.get(I).__webglTexture,Q,lt+An),I.isDepthTexture?(Ut&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ue.get(Z).__webglTexture,Q,Rt+An),V.blitFramebuffer(Ye,at,Ce,Te,Ke,Et,Ce,Te,V.DEPTH_BUFFER_BIT,V.NEAREST)):Ut?V.copyTexSubImage3D(Je,Q,Ke,Et,Rt+An,Ye,at,Ce,Te):V.copyTexSubImage2D(Je,Q,Ke,Et,Rt+An,Ye,at,Ce,Te);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ut?I.isDataTexture||I.isData3DTexture?V.texSubImage3D(Je,Q,Ke,Et,Rt,Ce,Te,Ze,fn,pt,St.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Je,Q,Ke,Et,Rt,Ce,Te,Ze,fn,St.data):V.texSubImage3D(Je,Q,Ke,Et,Rt,Ce,Te,Ze,fn,pt,St):I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Q,Ke,Et,Ce,Te,fn,pt,St.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Q,Ke,Et,St.width,St.height,fn,St.data):V.texSubImage2D(V.TEXTURE_2D,Q,Ke,Et,Ce,Te,fn,pt,St);V.pixelStorei(V.UNPACK_ROW_LENGTH,ti),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At),V.pixelStorei(V.UNPACK_SKIP_PIXELS,hn),V.pixelStorei(V.UNPACK_SKIP_ROWS,ni),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt),Q===0&&Z.generateMipmaps&&V.generateMipmap(Je),Pe.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,ue=null,fe=null,Q=0){return I.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,fe=arguments[1]||null,I=arguments[2],Z=arguments[3],Q=arguments[4]||0),Fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Z,ue,fe,Q)},this.initRenderTarget=function(I){Ue.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),Pe.unbindTexture()},this.resetState=function(){k=0,z=0,H=null,Pe.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}class jl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(e),this.density=n}clone(){return new jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qg extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Yg extends Js{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new le,Ol=new le,$m=new Vt,ka=new df,bl=new Hl,ad=new le,Zm=new le;class F1 extends dn{constructor(e=new ei,n=new Yg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Ul.fromBufferAttribute(n,o-1),Ol.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Ul.distanceTo(Ol);e.setAttribute("lineDistance",new Zt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(o),bl.radius+=c,e.ray.intersectsSphere(bl)===!1)return;$m.copy(o).invert(),ka.copy(e.ray).applyMatrix4($m);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,g=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const M=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let w=M,v=E-1;w<v;w+=g){const y=x.getX(w),U=x.getX(w+1),D=wl(this,e,ka,p,y,U);D&&n.push(D)}if(this.isLineLoop){const w=x.getX(E-1),v=x.getX(M),y=wl(this,e,ka,p,w,v);y&&n.push(y)}}else{const M=Math.max(0,u.start),E=Math.min(S.count,u.start+u.count);for(let w=M,v=E-1;w<v;w+=g){const y=wl(this,e,ka,p,w,w+1);y&&n.push(y)}if(this.isLineLoop){const w=wl(this,e,ka,p,E-1,M);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function wl(s,e,n,r,o,c){const u=s.geometry.attributes.position;if(Ul.fromBufferAttribute(u,o),Ol.fromBufferAttribute(u,c),n.distanceSqToSegment(Ul,Ol,ad,Zm)>r)return;ad.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ad);if(!(p<e.near||p>e.far))return{distance:p,point:Zm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Km=new le,Qm=new le;class B1 extends F1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Km.fromBufferAttribute(n,o),Qm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Km.distanceTo(Qm);e.setAttribute("lineDistance",new Zt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ji extends ei{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:p};const g=this;o=Math.floor(o),c=Math.floor(c);const x=[],_=[],S=[],M=[];let E=0;const w=[],v=r/2;let y=0;U(),u===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(S,3)),this.setAttribute("uv",new Zt(M,2));function U(){const N=new le,K=new le;let k=0;const z=(n-e)/r;for(let H=0;H<=c;H++){const R=[],A=H/c,P=A*(n-e)+e;for(let q=0;q<=o;q++){const X=q/o,ne=X*p+f,de=Math.sin(ne),ee=Math.cos(ne);K.x=P*de,K.y=-A*r+v,K.z=P*ee,_.push(K.x,K.y,K.z),N.set(de,z,ee).normalize(),S.push(N.x,N.y,N.z),M.push(X,1-A),R.push(E++)}w.push(R)}for(let H=0;H<o;H++)for(let R=0;R<c;R++){const A=w[R][H],P=w[R+1][H],q=w[R+1][H+1],X=w[R][H+1];(e>0||R!==0)&&(x.push(A,P,X),k+=3),(n>0||R!==c-1)&&(x.push(P,q,X),k+=3)}g.addGroup(y,k,0),y+=k}function D(N){const K=E,k=new Mt,z=new le;let H=0;const R=N===!0?e:n,A=N===!0?1:-1;for(let q=1;q<=o;q++)_.push(0,v*A,0),S.push(0,A,0),M.push(.5,.5),E++;const P=E;for(let q=0;q<=o;q++){const ne=q/o*p+f,de=Math.cos(ne),ee=Math.sin(ne);z.x=R*ee,z.y=v*A,z.z=R*de,_.push(z.x,z.y,z.z),S.push(0,A,0),k.x=de*.5+.5,k.y=ee*.5*A+.5,M.push(k.x,k.y),E++}for(let q=0;q<o;q++){const X=K+q,ne=P+q;N===!0?x.push(ne,ne+1,X):x.push(ne+1,ne,X),H+=3}g.addGroup(y,H,N===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gf extends ei{constructor(e=.5,n=1,r=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],p=[],g=[],x=[];let _=e;const S=(n-e)/o,M=new le,E=new Mt;for(let w=0;w<=o;w++){for(let v=0;v<=r;v++){const y=c+v/r*u;M.x=_*Math.cos(y),M.y=_*Math.sin(y),p.push(M.x,M.y,M.z),g.push(0,0,1),E.x=(M.x/n+1)/2,E.y=(M.y/n+1)/2,x.push(E.x,E.y)}_+=S}for(let w=0;w<o;w++){const v=w*(r+1);for(let y=0;y<r;y++){const U=y+v,D=U,N=U+r+1,K=U+r+2,k=U+1;f.push(D,N,k),f.push(N,K,k)}}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yf extends ei{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let g=0;const x=[],_=new le,S=new le,M=[],E=[],w=[],v=[];for(let y=0;y<=r;y++){const U=[],D=y/r;let N=0;y===0&&u===0?N=.5/n:y===r&&p===Math.PI&&(N=-.5/n);for(let K=0;K<=n;K++){const k=K/n;_.x=-e*Math.cos(o+k*c)*Math.sin(u+D*f),_.y=e*Math.cos(u+D*f),_.z=e*Math.sin(o+k*c)*Math.sin(u+D*f),E.push(_.x,_.y,_.z),S.copy(_).normalize(),w.push(S.x,S.y,S.z),v.push(k+N,1-D),U.push(g++)}x.push(U)}for(let y=0;y<r;y++)for(let U=0;U<n;U++){const D=x[y][U+1],N=x[y][U],K=x[y+1][U],k=x[y+1][U+1];(y!==0||u>0)&&M.push(D,N,k),(y!==r-1||p<Math.PI)&&M.push(N,K,k)}this.setIndex(M),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(w,3)),this.setAttribute("uv",new Zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class js extends Js{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class H1 extends js{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $g extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const od=new Vt,Jm=new le,eg=new le;class V1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pf,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Jm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jm),eg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(eg),n.updateMatrixWorld(),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class G1 extends V1{constructor(){super(new Bg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends $g{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new G1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zg extends $g{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const tg=new Vt;class j1{constructor(e,n,r=0,o=1/0){this.ray=new df(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tg),this}intersectObject(e,n=!0,r=[]){return Qd(e,this,r,n),r.sort(ng),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Qd(e[o],this,r,n);return r.sort(ng),r}}function ng(s,e){return s.distance-e.distance}function Qd(s,e,n,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let u=0,f=c.length;u<f;u++)Qd(c[u],e,n,!0)}}class Kg extends B1{constructor(e=10,n=10,r=4473924,o=8947848){r=new ft(r),o=new ft(o);const c=n/2,u=e/n,f=e/2,p=[],g=[];for(let S=0,M=0,E=-f;S<=n;S++,E+=u){p.push(-f,0,E,f,0,E),p.push(E,0,-f,E,0,f);const w=S===c?r:o;w.toArray(g,M),M+=3,w.toArray(g,M),M+=3,w.toArray(g,M),M+=3,w.toArray(g,M),M+=3}const x=new ei;x.setAttribute("position",new Zt(p,3)),x.setAttribute("color",new Zt(g,3));const _=new Yg({vertexColors:!0,toneMapped:!1});super(x,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);function W1({infrastructure:s,selectedPartMaterials:e,activePartId:n,onSelectPart:r,materialsList:o}){const c=et.useRef(null),u=et.useRef(null),f=et.useRef(null),p=et.useRef(null),g=et.useRef(null),x=et.useRef({}),[_,S]=et.useState(!1),[M,E]=et.useState(!1),[w,v]=et.useState(!0),[y,U]=et.useState(45),[D,N]=et.useState(!1),[K,k]=et.useState(null),z=[...o,...ef];et.useEffect(()=>{if(!c.current)return;const A=c.current.clientWidth,P=c.current.clientHeight||460,q=new qg;q.background=new ft(657930),q.fog=new jl(657930,.022),u.current=q;const X=new Gn(38,A/P,.1,1e3);X.position.set(18,15,22),X.lookAt(0,2.5,0),p.current=X;const ne=new Xg({antialias:!0,alpha:!0,powerPreference:"high-performance"});for(ne.setSize(A,P),ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),ne.shadowMap.enabled=!0,ne.shadowMap.type=rf,f.current=ne;c.current.firstChild;)c.current.removeChild(c.current.firstChild);c.current.appendChild(ne.domElement);const de=new Kg(40,40,3355443,1579032);de.position.y=-.01,q.add(de);const ee=new gf(11.9,12,64),re=new hf({color:2763306,side:Mi}),B=new mt(ee,re);B.rotation.x=Math.PI/2,B.position.y=.01,q.add(B);const ae=new Zg(16777215,.75);q.add(ae);const L=new zl(16775146,2);L.position.set(16,26,16),L.castShadow=!0,L.shadow.mapSize.width=1024,L.shadow.mapSize.height=1024;const b=16;L.shadow.camera.left=-b,L.shadow.camera.right=b,L.shadow.camera.top=b,L.shadow.camera.bottom=-b,q.add(L);const G=new zl(4487099,.6);G.position.set(-15,12,-15),q.add(G);const he=new tn;q.add(he),g.current=he,R(s,e,_,he,x);const W=new j1,te=new Mt;let pe=!1,oe=0,ge={x:0,y:0};const Se=Ie=>{pe=!0,oe=0;const We=Ie.clientX||Ie.touches&&Ie.touches[0].clientX,Pe=Ie.clientY||Ie.touches&&Ie.touches[0].clientY;ge={x:We,y:Pe}},Re=Ie=>{var O,C;const We=Ie.clientX||Ie.touches&&Ie.touches[0].clientX,Pe=Ie.clientY||Ie.touches&&Ie.touches[0].clientY;if(pe){const J=We-ge.x,xe=Pe-ge.y;oe+=Math.abs(J)+Math.abs(xe),he&&(he.rotation.y+=J*.008)}const ct=ne.domElement.getBoundingClientRect();te.x=(We-ct.left)/ct.width*2-1,te.y=-((Pe-ct.top)/ct.height)*2+1,W.setFromCamera(te,X);const Ue=W.intersectObjects(he.children,!0);if(Ue.length>0){let J=Ue[0].object;for(;J.parent&&!((O=J.userData)!=null&&O.partId)&&J.parent!==he;)J=J.parent;(C=J.userData)!=null&&C.partName&&k(J.userData.partName)}else k(null);ge={x:We,y:Pe}},Ge=Ie=>{var We,Pe,ct,Ue;if(oe<8){const O=Ie.clientX||Ie.changedTouches&&((We=Ie.changedTouches[0])==null?void 0:We.clientX),C=Ie.clientY||Ie.changedTouches&&((Pe=Ie.changedTouches[0])==null?void 0:Pe.clientY);if(O!==void 0&&C!==void 0){const J=ne.domElement.getBoundingClientRect();te.x=(O-J.left)/J.width*2-1,te.y=-((C-J.top)/J.height)*2+1,W.setFromCamera(te,X);const xe=W.intersectObjects(he.children,!0);if(xe.length>0){let _e=xe[0].object;for(;_e.parent&&!((ct=_e.userData)!=null&&ct.partId)&&_e.parent!==he;)_e=_e.parent;(Ue=_e.userData)!=null&&Ue.partId&&(Va(),r(_e.userData.partId))}}}pe=!1},ze=ne.domElement;ze.addEventListener("mousedown",Se),ze.addEventListener("mousemove",Re),window.addEventListener("mouseup",Ge),ze.addEventListener("touchstart",Se,{passive:!0}),ze.addEventListener("touchmove",Re,{passive:!0}),window.addEventListener("touchend",Ge);let rt;const V=()=>{rt=requestAnimationFrame(V),D&&!pe&&he&&(he.rotation.y+=.003),ne.render(q,X)};V();const _t=()=>{if(!c.current||!ne||!X)return;const Ie=c.current.clientWidth,We=c.current.clientHeight||460;X.aspect=Ie/We,X.updateProjectionMatrix(),ne.setSize(Ie,We)};return window.addEventListener("resize",_t),()=>{cancelAnimationFrame(rt),window.removeEventListener("resize",_t),window.removeEventListener("mouseup",Ge),window.removeEventListener("touchend",Ge),ze.removeEventListener("mousedown",Se),ze.removeEventListener("mousemove",Re),ze.removeEventListener("touchstart",Se),ze.removeEventListener("touchmove",Re),ne.dispose()}},[s.id]),et.useEffect(()=>{g.current&&R(s,e,_,g.current,x)},[e,_,s]),et.useEffect(()=>{const A=x.current;A&&Object.keys(A).forEach(P=>{var ne,de;const q=A[P];if(!q)return;const X=P===n;if(M){const ee=((ne=q.userData)==null?void 0:ne.explodeOffset)||{x:0,y:0,z:0};q.position.set(ee.x*2.2,ee.y*2.4,ee.z*2.2),q.scale.set(1,1,1),H(q)}else if(w&&n)if(X){const ee=((de=q.userData)==null?void 0:de.pullDirection)||{x:0,y:1.2,z:1.5};q.position.set(ee.x*1.8,ee.y*1.6,ee.z*1.8),q.scale.set(1.08,1.08,1.08),q.traverse(re=>{re.isMesh&&re.material&&(re.material.transparent=!1,re.material.opacity=1,re.material.emissive=new ft(3359778),re.material.emissiveIntensity=.5)})}else q.position.set(0,0,0),q.scale.set(.98,.98,.98),q.traverse(ee=>{ee.isMesh&&ee.material&&(ee.material.transparent=!0,ee.material.opacity=.18,ee.material.emissive=new ft(0),ee.material.emissiveIntensity=0)});else q.position.set(0,0,0),q.scale.set(1,1,1),H(q)})},[n,M,w]);function H(A){A.traverse(P=>{var q;if(P.isMesh&&P.material){const X=(q=P.userData)==null?void 0:q.isGlass;P.material.transparent=!!X,P.material.opacity=X?.45:1,P.material.emissive=new ft(0),P.material.emissiveIntensity=0}})}function R(A,P,q,X,ne){for(;X.children.length>0;){const re=X.children[0];X.remove(re),re.geometry&&re.geometry.dispose(),re.material&&(Array.isArray(re.material)?re.material.forEach(B=>B.dispose()):re.material.dispose())}ne.current={};const de=(re,B=8947848)=>{const ae=P[re],L=z.find(he=>he.id===ae),b=ae==="triple_glazed_glass"||ae==="smart_solar_glass",G=L?parseInt(L.colorHex.replace("#","0x")):B;if(b){const he=new H1({color:G,transparent:!0,opacity:ae==="smart_solar_glass"?.65:.4,roughness:.1,metalness:.1,transmission:.85,ior:1.5,wireframe:q});return he.userData={isGlass:!0},he}return new js({color:G,roughness:.85,metalness:.1,wireframe:q,flatShading:!0})},ee=(re,B,ae,L={x:0,y:1,z:1},b={x:0,y:0,z:0})=>{ae.userData={partId:re,partName:B,pullDirection:L,explodeOffset:b},ae.traverse(G=>{G.userData={...G.userData,partId:re,partName:B}}),X.add(ae),ne.current[re]=ae};if(A.id==="yzy_mono_dome"){const re=new tn,B=de("dome_base",7829367),ae=new mt(new ji(6.4,6.7,.6,32),B);ae.position.y=.3,ae.receiveShadow=!0,re.add(ae),ee("dome_base","SUBGRADE PLINTH",re,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const L=new tn,b=de("dome_shell",14540224),G=new mt(new yf(5.8,32,24,0,Math.PI*2,0,Math.PI/2),b);G.position.y=.6,G.castShadow=!0,G.receiveShadow=!0,L.add(G),ee("dome_shell","DOME ENVELOPE SHELL",L,{x:0,y:1.8,z:0},{x:0,y:2,z:0});const he=new tn,W=de("dome_window_oculus",6858170),te=new mt(new ji(1.1,1.2,.35,24),W);te.position.y=6.35,he.add(te),ee("dome_window_oculus","SKYLIGHT OCULUS",he,{x:0,y:3,z:0},{x:0,y:5.5,z:0});const pe=new tn,oe=de("dome_portal_tunnel",10516565),ge=new mt(new Dt(2.4,3.2,3.8),oe);ge.position.set(0,2,5.2),ge.castShadow=!0,pe.add(ge),ee("dome_portal_tunnel","ENTRANCE TUNNEL",pe,{x:0,y:.5,z:3.5},{x:0,y:0,z:4.8});const Se=new tn,Re=new js({color:1713022,metalness:.8,roughness:.2}),Ge=new mt(new Dt(2.6,.1,1.8),Re);Ge.position.set(-4.8,.65,-3.8),Ge.rotation.x=.3,Se.add(Ge),ee("dome_utilities","OFF-GRID UTILITY POD",Se,{x:-2.5,y:0,z:-2.5},{x:-4.5,y:0,z:-4.5})}else if(A.id==="rammed_earth_villa"){const re=new tn,B=de("villa_foundation",8026744),ae=new mt(new Dt(10.5,.5,7.5),B);ae.position.set(0,.25,0),re.add(ae),ee("villa_foundation","FOUNDATION SLAB",re,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const L=new tn,b=de("villa_south_wall",10516565),G=new mt(new Dt(9,3.8,.8),b);G.position.set(0,2.4,3),G.castShadow=!0,L.add(G),ee("villa_south_wall","SOUTH WALL ENVELOPE",L,{x:0,y:.5,z:3.2},{x:0,y:0,z:4.5});const he=new tn,W=de("villa_north_wall",10516565),te=new mt(new Dt(9,3.8,.8),W);te.position.set(0,2.4,-3),te.castShadow=!0,he.add(te),ee("villa_north_wall","NORTH SHIELD WALL",he,{x:0,y:.5,z:-3.2},{x:0,y:0,z:-4.5});const pe=new tn,oe=de("villa_side_walls",10516565),ge=new mt(new Dt(.8,3.8,5.2),oe);ge.position.set(4.1,2.4,0);const Se=new mt(new Dt(.8,3.8,5.2),oe);Se.position.set(-4.1,2.4,0),pe.add(ge),pe.add(Se),ee("villa_side_walls","EAST & WEST SIDE WALLS",pe,{x:3,y:.5,z:0},{x:4.5,y:0,z:0});const Re=new tn,Ge=de("villa_roof_cantilever",13213798),ze=new mt(new Dt(11.8,.45,9),Ge);ze.position.set(0,4.5,0),ze.castShadow=!0,Re.add(ze),ee("villa_roof_cantilever","MASS TIMBER ROOF",Re,{x:0,y:2.8,z:0},{x:0,y:4.8,z:0});const rt=new tn,V=de("villa_window_portal",6858170),_t=new mt(new Dt(4,3.2,.2),V);_t.position.set(0,2.1,3.45),rt.add(_t),ee("villa_window_portal","PATIO WINDOW PORTAL",rt,{x:0,y:.8,z:3.5},{x:0,y:0,z:5.5});const Ie=new tn,We=new js({color:1713022,metalness:.8,roughness:.2}),Pe=new mt(new Dt(4.2,.1,3.2),We);Pe.position.set(0,4.9,0),Pe.rotation.x=-.15,Ie.add(Pe),ee("villa_utilities","SOLAR PERGOLA SUITE",Ie,{x:0,y:3.2,z:0},{x:0,y:6,z:0})}else(Si[A.id]||Si.yzy_mono_dome).forEach((B,ae)=>{const L=new tn,b=de(B.id,8947848),G=1.2+ae*1.6,he=new mt(new Dt(7-ae*.6,1.4,7-ae*.6),b);he.position.y=G,he.castShadow=!0,L.add(he),ee(B.id,B.name,L,{x:0,y:1.2,z:1.5},{x:0,y:ae*1.8,z:0})})}return h.jsxs("div",{className:"relative w-full h-80 sm:h-96 md:h-[500px] bg-yzy-obsidian border border-yzy-slate/70 overflow-hidden flex flex-col select-none",children:[h.jsx("div",{ref:c,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-1.5 border border-yzy-bone/40 shadow-lg",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"font-mono text-[10px] sm:text-xs tracking-widest text-white uppercase font-bold",children:n?`CENTER STAGE: ${n.toUpperCase().replace(/_/g," ")}`:"TAP ANY PART IN 3D TO PULL & INSPECT"})]}),K&&h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash bg-yzy-black/80 px-2 py-0.5 border border-yzy-slate/60 w-fit",children:["HOVER: ",K]})]}),h.jsxs("div",{className:"absolute top-3 right-3 flex items-center gap-2 bg-yzy-black/85 backdrop-blur-md px-2.5 py-1.5 border border-yzy-slate text-[11px] font-mono",children:[h.jsx(b0,{className:"w-3.5 h-3.5 text-yzy-warning"}),h.jsx("span",{className:"hidden sm:inline text-yzy-ash text-[10px]",children:"SUN:"}),h.jsx("input",{type:"range",min:"0",max:"360",value:y,onChange:A=>U(Number(A.target.value)),className:"w-16 sm:w-20 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"}),h.jsxs("span",{className:"text-yzy-chalk w-6 text-right text-[10px]",children:[y,"°"]})]}),h.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-2 border border-yzy-slate shadow-2xl z-10",children:[h.jsxs("button",{onClick:()=>{Ot(),v(!w)},className:`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${w?"bg-yzy-bone text-yzy-black font-bold":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/60"}`,title:"Pull and isolate the selected part in the center of the screen",children:[h.jsx(a0,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:w?"CENTER STAGE ACTIVE":"FULL BUILDING VIEW"})]}),h.jsxs("button",{onClick:()=>{Ot(),E(!M)},className:`flex items-center gap-1.5 px-2 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${M?"bg-yzy-neon text-yzy-black font-bold":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/60"}`,children:[h.jsx(tf,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"EXPLODE"})]}),h.jsx("button",{onClick:()=>{Ot(),S(!_)},className:`px-2 py-1.5 font-mono text-[10px] transition-all ${_?"text-yzy-neon font-bold bg-yzy-slate/60":"text-yzy-ash hover:text-white"}`,children:"CAD"}),h.jsx("button",{onClick:()=>{Ot(),N(!D)},className:`px-2 py-1.5 font-mono text-[10px] transition-all ${D?"text-white":"text-yzy-ash hover:text-white"}`,children:h.jsx(fg,{className:`w-3.5 h-3.5 ${D?"animate-spin":""}`,style:{animationDuration:"10s"}})})]})]})}function X1({infrastructures:s,selectedInfra:e,onSelectInfra:n}){return h.jsxs("div",{className:"flex flex-col gap-4",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-1 border-b border-yzy-slate pb-2",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"01 // ARCHETYPE SELECTION"}),h.jsx("h2",{className:"font-display text-lg sm:text-xl font-bold tracking-tight text-yzy-bone",children:"SELECT INFRASTRUCTURE MATRIX"})]}),h.jsxs("span",{className:"font-mono text-[10px] text-yzy-ash",children:[s.length," PRODUCTION SCHEMATICS AVAILABLE"]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:s.map(r=>{const o=e.id===r.id;return h.jsxs("div",{onClick:()=>{Va(),n(r)},className:`group cursor-pointer p-4 border transition-all duration-200 flex flex-col justify-between relative ${o?"bg-yzy-obsidian border-yzy-bone shadow-lg ring-1 ring-yzy-bone/40":"bg-yzy-obsidian/40 border-yzy-slate/70 hover:border-yzy-ash hover:bg-yzy-obsidian/80"}`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest text-yzy-ash uppercase",children:r.code}),o?h.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5 tracking-wider",children:[h.jsx(Ll,{className:"w-3 h-3"})," ACTIVE"]}):h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash border border-yzy-slate px-1.5 py-0.5",children:r.difficulty})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone tracking-tight mb-0.5 group-hover:text-white transition-colors",children:r.name}),h.jsx("p",{className:"font-mono text-[10px] text-yzy-ash tracking-wide uppercase mb-2",children:r.subtitle}),h.jsx("p",{className:"text-xs text-yzy-chalk/80 line-clamp-2 leading-relaxed mb-3",children:r.tagline})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-1.5 bg-yzy-black/60 p-2 border border-yzy-slate/60 text-[10px] font-mono mb-3",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-yzy-ash text-[9px]",children:"AREA"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.sqft," SQFT"]})]}),h.jsxs("div",{className:"flex flex-col border-l border-yzy-slate/40 pl-2",children:[h.jsx("span",{className:"text-yzy-ash text-[9px]",children:"TIMELINE"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.buildTimeDays," DAYS"]})]}),h.jsxs("div",{className:"flex flex-col border-l border-yzy-slate/40 pl-2",children:[h.jsx("span",{className:"text-yzy-ash text-[9px]",children:"OCCUPANCY"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.occupancy.split(" ")[0]," PPL"]})]})]}),h.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-yzy-slate/40 text-[10px] font-mono",children:[h.jsxs("div",{className:"flex items-center gap-1 text-yzy-chalk",children:[h.jsx(D0,{className:"w-3 h-3 text-yzy-ash"}),h.jsxs("span",{children:[r.windResistance.split(" ")[0]," MPH"]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"EST. BUDGET"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:["$",r.estimatedCostMin.toLocaleString()," - $",r.estimatedCostMax.toLocaleString()]})]})]})]},r.id)})})]})}function q1({infrastructure:s,selectedPartMaterials:e,onSelectPartMaterial:n,activePartId:r,setActivePartId:o,materialsList:c}){var S,M;const u=Si[s.id]||Si.yzy_mono_dome,f=u.find(E=>E.id===r)||u[0],p=[...c,...ef],g=e[f.id]||f.defaultMaterial,x=p.find(E=>E.id===g)||c[0],_=p.filter(E=>f.allowedMaterials.includes(E.id));return h.jsxs("div",{className:"flex flex-col gap-5 bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 shadow-2xl",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"02 // INFRASTRUCTURE MATRIX (PICK & PULL CUSTOMIZER)"}),h.jsx("h3",{className:"font-display text-lg sm:text-xl font-bold tracking-tight text-white",children:"CUSTOMIZE INDIVIDUAL ARCHITECTURAL COMPONENTS"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-neon font-bold uppercase bg-yzy-neon/10 px-2.5 py-1 border border-yzy-neon/30",children:"TAP ANY PART IN 3D OR SELECT BELOW"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-yzy-slate/60",children:u.map(E=>{const w=E.id===f.id,v=e[E.id]||E.defaultMaterial,y=p.find(U=>U.id===v);return h.jsxs("button",{onClick:()=>{Va(),o(E.id)},className:`shrink-0 p-2.5 text-left border transition-all flex flex-col justify-between min-w-[140px] sm:min-w-[160px] ${w?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-md":"bg-yzy-black text-yzy-chalk border-yzy-slate/80 hover:border-yzy-ash hover:bg-yzy-charcoal"}`,children:[h.jsx("span",{className:`font-mono text-[9px] font-bold uppercase tracking-wider block mb-0.5 ${w?"text-yzy-black/70":"text-yzy-ash"}`,children:E.category}),h.jsx("span",{className:`font-display text-xs font-bold truncate block ${w?"text-yzy-black":"text-yzy-bone"}`,children:E.name.split("(")[0]}),h.jsx("span",{className:`font-mono text-[10px] truncate block mt-1 font-semibold ${w?"text-yzy-black/90":"text-yzy-neon"}`,children:(y==null?void 0:y.shortName)||"Custom"})]},E.id)})}),h.jsxs("div",{className:"bg-yzy-black p-3.5 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon"}),h.jsx("span",{className:"font-bold text-white uppercase text-sm",children:f.name})]}),h.jsx("span",{className:"text-yzy-ash text-[11px] mt-0.5 block",children:f.description})]}),h.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"SURFACE AREA"}),h.jsxs("span",{className:"font-bold text-yzy-bone",children:[f.surfaceAreaSqft," SQFT"]})]}),h.jsxs("div",{className:"text-right border-l border-yzy-slate pl-3",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"CURRENT SPEC"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:x.shortName})]})]})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx("span",{className:"font-mono text-xs text-yzy-ash uppercase font-bold tracking-wider",children:"SELECT MATERIAL SPECIFICATION FOR THIS PART:"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:_.map(E=>{const w=(e[f.id]||f.defaultMaterial)===E.id,v=Math.round(f.surfaceAreaSqft*E.costPerSqFt);return h.jsxs("div",{onClick:()=>{Va(),n(f.id,E.id)},className:`cursor-pointer p-4 border transition-all flex flex-col justify-between group ${w?"bg-yzy-black border-yzy-bone ring-2 ring-yzy-bone/60 shadow-xl":"bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-black/90"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold px-1.5 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:E.category}),w?h.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5",children:[h.jsx(Ll,{className:"w-3 h-3"})," ACTIVE SPEC"]}):h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash",children:E.badge})]}),h.jsx("h4",{className:"font-display text-sm font-bold text-white mb-1 group-hover:text-yzy-bone",children:E.name}),h.jsx("p",{className:"text-xs text-yzy-chalk/80 leading-relaxed mb-3",children:E.tagline})]}),h.jsxs("div",{className:"pt-2 border-t border-yzy-slate/60 flex items-center justify-between font-mono text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block",children:"PART COST"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:["$",v.toLocaleString()]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block",children:"UNIT RATE"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.unitCost})]})]})]},E.id)})})]}),h.jsxs("div",{className:"bg-yzy-black border border-yzy-slate p-4 sm:p-5 flex flex-col gap-4 font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(ud,{className:"w-4 h-4 text-yzy-neon"}),h.jsxs("span",{className:"font-display text-sm font-bold text-white uppercase tracking-tight",children:["ARCHITECTURAL IMPACT ANALYSIS // ",x.name]})]}),h.jsx("span",{className:"text-[10px] text-yzy-ash uppercase hidden sm:inline",children:"ENGINEERING FEEDBACK"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"p-3 bg-yzy-obsidian/90 border border-yzy-neon/30 flex flex-col gap-2",children:[h.jsxs("span",{className:"text-xs font-bold text-yzy-neon flex items-center gap-1.5 uppercase",children:[h.jsx(Ll,{className:"w-3.5 h-3.5"})," ARCHITECTURAL PROS & ADVANTAGES"]}),h.jsx("ul",{className:"flex flex-col gap-1.5 text-xs text-yzy-chalk/90",children:(S=x.pros)==null?void 0:S.map((E,w)=>h.jsxs("li",{className:"flex items-start gap-1.5",children:[h.jsx("span",{className:"text-yzy-neon font-bold",children:"✓"}),h.jsx("span",{children:E})]},w))})]}),h.jsxs("div",{className:"p-3 bg-yzy-obsidian/90 border border-yzy-warning/30 flex flex-col gap-2",children:[h.jsxs("span",{className:"text-xs font-bold text-yzy-warning flex items-center gap-1.5 uppercase",children:[h.jsx(C0,{className:"w-3.5 h-3.5"})," TRADEOFFS & CONSIDERATIONS"]}),h.jsx("ul",{className:"flex flex-col gap-1.5 text-xs text-yzy-chalk/90",children:(M=x.cons)==null?void 0:M.map((E,w)=>h.jsxs("li",{className:"flex items-start gap-1.5",children:[h.jsx("span",{className:"text-yzy-warning font-bold",children:"!"}),h.jsx("span",{children:E})]},w))})]})]}),x.supplier&&h.jsxs("div",{className:"bg-yzy-charcoal/80 p-3 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block mb-0.5",children:"DIRECT PROCUREMENT SOURCE FOR THIS PART:"}),h.jsx("span",{className:"font-bold text-white",children:x.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[11px] block",children:x.supplier.contact})]}),h.jsxs("div",{className:"flex items-center gap-4 text-right shrink-0 font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"EXACT PRICE"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:x.supplier.exactPrice.split("(")[0]})]}),h.jsxs("div",{className:"border-l border-yzy-slate pl-3",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"LEAD TIME"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:x.supplier.leadTime})]})]})]})]})]})}function Y1({materialsList:s}){const[e,n]=et.useState(""),[r,o]=et.useState("ALL"),[c,u]=et.useState(null),f=["ALL","EARTH & SOIL","BIO-MASS","CIRCULAR MINERAL","RENEWABLE WOOD","FOAMED MINERAL","CIRCULAR POLYMER"],p=s.filter(g=>{const x=g.name.toLowerCase().includes(e.toLowerCase())||g.description.toLowerCase().includes(e.toLowerCase())||g.sourcingMethod.toLowerCase().includes(e.toLowerCase()),_=r==="ALL"||g.category===r;return x&&_});return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"02 // MATERIAL ENCYCLOPEDIA & REPOSITORY"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"SUSTAINABLE & BIO-CIRCULAR MATERIALS"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Transparent scientific, economic, and regional sourcing telemetry for zero-carbon architecture."})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[h.jsxs("div",{className:"relative w-full sm:w-80",children:[h.jsx(hg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),h.jsx("input",{type:"text",placeholder:"Search materials, soil types, binders...",value:e,onChange:g=>n(g.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:f.map(g=>h.jsx("button",{onClick:()=>{Ot(),o(g)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${r===g?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:g},g))})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:p.map(g=>h.jsxs("div",{className:"p-5 bg-yzy-obsidian/60 border border-yzy-slate hover:border-yzy-ash transition-all flex flex-col justify-between group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:g.category}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash",children:g.badge})]}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1 group-hover:text-white transition-colors",children:g.name}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:g.description})]}),h.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-yzy-slate/60 text-[11px] font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"ESTIMATED COST:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.unitCost})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"CARBON OFFSET:"}),h.jsx("span",{className:`font-bold ${g.carbonImpact<=0?"text-yzy-neon":"text-yzy-warning"}`,children:g.carbonImpact<=0?`${g.carbonImpact} kg CO2/m²`:`+${g.carbonImpact} kg CO2/m²`})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"THERMAL R-VALUE:"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:["R-",g.thermalRValue]})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"COMPRESSIVE STRENGTH:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.compressiveStrength})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"FIRE RESISTANCE:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.fireRating})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"EST. LIFESPAN:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.lifespan})]}),h.jsxs("div",{className:"bg-yzy-black/80 p-2.5 border border-yzy-slate/60 mt-2",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block mb-1",children:"LOCAL HARVESTING PROTOCOL:"}),h.jsx("p",{className:"text-[10px] text-yzy-chalk leading-normal",children:g.sourcingMethod})]}),g.supplier&&h.jsxs("div",{className:"bg-yzy-charcoal/80 p-2.5 border border-yzy-slate mt-1 text-[10px] font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center mb-1",children:[h.jsx("span",{className:"text-yzy-neon font-bold text-[9px] uppercase tracking-wider",children:"PRIMARY SUPPLIER ORDER SOURCE:"}),h.jsx("span",{className:"text-yzy-ash text-[9px]",children:g.supplier.location.split("/")[0]})]}),h.jsx("span",{className:"font-bold text-yzy-bone text-xs block",children:g.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[10px] block",children:g.supplier.contact}),h.jsxs("div",{className:"flex justify-between items-center text-[9px] pt-1.5 border-t border-yzy-slate/40 mt-1",children:[h.jsxs("span",{className:"text-yzy-chalk font-bold",children:["PRICE: ",g.supplier.exactPrice.split("(")[0]]}),h.jsxs("span",{className:"text-yzy-ash",children:["LEAD: ",g.supplier.leadTime]})]})]})]})]},g.id))})]})}const ig=[{id:"mycelium_lounge_chair",name:"YZY BIO-FOAM MYCELIUM LOUNGE",category:"LIVING & SEATING",tagline:"100% bio-grown sculptural ergonomic chair molded from fungal roots and hemp substrate.",description:"A monolithic single-piece lounge chair grown in 7 days inside a 3D-printed composite mold. Ultra-lightweight (14 lbs) yet structural, with a velvety organic tactile finish sealed with natural beeswax and carnauba.",material:"Grown Ganoderma Mycelium + Industrial Hemp Hurds",carbonImpact:-32,dimensions:'34" W x 32" D x 29" H (Seat Height 14")',weight:"14 lbs (6.3 kg)",aestheticStyle:"Monolithic Organic Brutalism / Yeezy Aesthetic",diyFeasibility:"HIGH (Can be grown using DIY mold & spawn kit)",retailPrice:"$340.00 (Crafted) / $65.00 (DIY Inoculum Kit)",supplier:{name:"Ecovative Bio-Fabrication Lab / Grown.bio",location:"Green Island, NY / Heerewaarden, Netherlands",contact:"furniture@ecovative.com | +1 (518) 273-3753",website:"grown.bio / ecovative.com",exactPrice:"$340.00 fully cured chair or $65.00 for 50L bulk substrate + mold CAD",leadTime:"10 Days Direct Dispatch"},sustainabilityNote:"100% home-compostable at end of life. Zero petroleum, zero volatile organic compounds (VOCs)."},{id:"rammed_earth_desk",name:"MONOLITHIC TAMPED EARTH EXECUTIVE DESK",category:"OFFICE & STUDIO",tagline:"Massive striated earth slab desk with integrated wireless inductive charging stone.",description:"A striking, heavy brutalist workstation cast from compacted local subsoil, volcanic pumice, and hydraulic lime. Features natural horizontal sedimentation bands and a silky smooth diamond-burnished top surface.",material:"Compacted Subsoil + Volcanic Pozzolan + Steel Reinforcement Tie",carbonImpact:-18,dimensions:'72" L x 34" W x 30" H',weight:"480 lbs (Permanent Studio Centerpiece)",aestheticStyle:"Stark Architectural Earth Sculpture",diyFeasibility:"INTERMEDIATE (Slipform wooden casting)",retailPrice:"$850.00 (Precast Slab) / $120.00 (DIY On-Site Casting)",supplier:{name:"Studio Earthen Works / Local Slipform Custom Cast",location:"Austin, Texas / Regional Masonry Studios",contact:"craft@earthfurnish.org",website:"sirewall.com / custom-earth",exactPrice:"$850.00 precast and shipped in 2 sections or $120 for local materials + rebar",leadTime:"14 Days Curing Time"},sustainabilityNote:"Zero formaldehyde glues, zero toxic resins. Emits zero electromagnetic interference."},{id:"clt_studio_workbench",name:"MASS TIMBER (CLT) MODULAR WORKBENCH",category:"OFFICE & STUDIO",tagline:"Solid 5-ply spruce mass timber tabletop resting on brutalist notch-joint legs.",description:"Manufactured from FSC-certified cross-laminated mass timber cut with precision 5-axis CNC routering. Assembles with zero screws or metal hardware using ancient Japanese sliding dovetail joinery.",material:"FSC-Certified Cross-Laminated Timber (CLT)",carbonImpact:-85,dimensions:'84" L x 38" W x 30" H (Thickness 3.5")',weight:"165 lbs",aestheticStyle:"Industrial Raw Minimalist Timber",diyFeasibility:"NOVICE (Zero-hardware toolless slide assembly)",retailPrice:"$490.00",supplier:{name:"SmartLam Custom Timber Furnishings",location:"Columbia Falls, Montana",contact:"studio@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:"$490.00 flatpack crate with interlocking joinery",leadTime:"5-7 Business Days"},sustainabilityNote:"Locks away 85kg of carbon for 100+ years. Finished with organic raw linseed oil."},{id:"hemp_acoustic_screen",name:"HEMP-FIBER ACOUSTIC PRIVACY PARTITION",category:"ACOUSTICS & ACCESSORIES",tagline:"Sound-absorbing freestanding room divider made from needle-punched industrial hemp felt.",description:"Designed for open-plan studios, loft apartments, and communal workspaces. Absorbs 85% of ambient vocal frequencies (NRC 0.85) to create intimate quiet zones while purifying air naturally.",material:"100% Cleaned Industrial Hemp Fiber + Raw Cast Iron Base",carbonImpact:-22,dimensions:'48" W x 18" D x 72" H',weight:"28 lbs",aestheticStyle:"Earthy Textured Minimalist Screen",diyFeasibility:"NOVICE FRIENDLY",retailPrice:"$210.00",supplier:{name:"Hempitecture Acoustic Lines",location:"Jerome, Idaho",contact:"acoustics@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com/hempwool",exactPrice:"$210.00 per panel with modular ganging brackets",leadTime:"3-5 Business Days"},sustainabilityNote:"Hypoallergenic, breathable, zero fiberglass itch, 100% compostable fiber."},{id:"recycled_poly_stool",name:"CIRCULAR OCEAN POLYMER MONOBLOC STOOL",category:"LIVING & SEATING",tagline:"Indestructible brutalist cylinder stool forged from 45 lbs of upcycled ocean plastic.",description:"Post-consumer plastic milk jugs, bottle caps, and marine debris washed, shredded, and compression-molded into a solid monolithic cylindrical plinth. Can be used as a stool, side table, or outdoor seating.",material:"100% Recycled HDPE / PP Ocean Plastic",carbonImpact:-42,dimensions:'16" Diameter x 18" Height',weight:"24 lbs",aestheticStyle:"Raw Monolithic Terrazzo Texture",diyFeasibility:"COMMUNITY RECYCLER (With Precious Plastic injector)",retailPrice:"$125.00 (Crafted) / $15.00 (Community DIY)",supplier:{name:"ByFusion / Precious Plastic Open Network",location:"Los Angeles, California / Global Micro-Factories",contact:"sales@byfusion.com | +1 (310) 906-0300",website:"byfusion.com / preciousplastic.com",exactPrice:"$125.00 direct or $15 raw shredded plastic flake with local mold",leadTime:"3-5 Days"},sustainabilityNote:"Diverts 2,200 plastic bottles from landfills and oceans per single stool. 100% recyclable indefinitely."},{id:"geopolymer_sink_counter",name:"GEOPOLYMER POZZOLAN MONOLITHIC SINK",category:"KITCHEN & SANITARY",tagline:"Stark industrial mineral basin and integrated countertop with zero Portland cement.",description:"Cast as a single seamless unit with an integrated ramp drain. Highly resistant to stains, thermal shock, and chemicals, with a tactile matte stone texture matching YEEZY interior architecture.",material:"Slag/Fly-Ash Alkali Geopolymer Concrete + Crushed Basalt",carbonImpact:-14,dimensions:'48" L x 22" W x 6" Basin Depth',weight:"140 lbs",aestheticStyle:"Brutalist Seamless Stone Basin",diyFeasibility:"INTERMEDIATE (Silicone/Melamine mold pour)",retailPrice:"$390.00",supplier:{name:"Wagners Earth Friendly Precast / Local Artisan Cast",location:"US & Global Masonry Cooperatives",contact:"custom@wagner.com.au",website:"wagner.com.au",exactPrice:"$390.00 precast or $75.00 in raw geopolymer dry mix + activator",leadTime:"7 Days"},sustainabilityNote:"Emits 85% less CO2 than traditional concrete sinks. Cures naturally with zero heat kiln firing."},{id:"bamboo_daybed",name:"ENGINEERED BAMBOO MINIMALIST DAYBED",category:"LIVING & SEATING",tagline:"Low-slung Japanese-modern platform bed crafted from high-tensile engineered bamboo.",description:"A serene, ground-hugging platform daybed resting 8 inches off the floor. Features woven natural reed tatami inserts and hidden perimeter LED channel for ambient warm indirect lighting.",material:"Cross-Strand Dendrocalamus Bamboo Culms + Coconut Coir Cushioning",carbonImpact:-70,dimensions:'82" L x 64" W x 10" H (Queen Standard Platform)',weight:"95 lbs",aestheticStyle:"Zen Brutalist Low-Slung Sanctuary",diyFeasibility:"NOVICE / COMMUNITY HAND CRAFT",retailPrice:"$580.00",supplier:{name:"BamCore Furniture Studio / Guadua Crafts",location:"Windsor, California",contact:"orders@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:"$580.00 flatpack with natural organic latex/coir mattress",leadTime:"5-7 Days Freight"},sustainabilityNote:"Bamboo regrows to full maturity in only 3 years. Rapidly absorbs more carbon than hardwood forests."},{id:"aircrete_pedestal_table",name:"AIRCRETE SCULPTURAL ACCENT PEDESTAL",category:"LIVING & SEATING",tagline:"Ultra-lightweight aerated mineral plinth table with a smooth chalk-white pumice feel.",description:"Looks like a massive 200 lb solid carved limestone block, but weighs only 22 lbs due to micro-cellular aircrete bubbles. Easily rearranged and suitable for indoor and outdoor terrace spaces.",material:"Aerated Foamed Mineral Matrix + Silicate Polish",carbonImpact:-6,dimensions:'20" Diameter x 20" Height (Cylindrical or Hexagonal)',weight:"22 lbs (Ultra Lightweight)",aestheticStyle:"Raw Pumice / Chalk Sculptural Monolith",diyFeasibility:"NOVICE (Cast in standard bucket with foam wand)",retailPrice:"$140.00 (Crafted) / $18.00 (DIY Single Cast)",supplier:{name:"Domegaia Sculptural Division",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"furniture@domegaia.com",website:"domegaia.com",exactPrice:"$140.00 or $18 DIY mix with 1 cup bio-foam concentrate + lime",leadTime:"3-5 Business Days"},sustainabilityNote:"100% inorganic mineral structure. Completely immune to water rot, termites, and wildfire."},{id:"lime_earth_wall_finish",name:"ROMAN HYDRAULIC LIME & OCHRE FINISH SYSTEM",category:"ACOUSTICS & ACCESSORIES",tagline:"Breathable mineral plaster colored with raw volcanic earth and iron oxide pigments.",description:"Replaces toxic petrochemical paint with ancient lime plaster that petrifies over time by absorbing ambient CO2. Naturally inhibits mold, absorbs cooking and body odors, and regulates humidity.",material:"St. Astier Natural Hydraulic Lime (NHL 2.0) + French Raw Ochre Pigments",carbonImpact:-25,dimensions:"Covers 250 sq ft per 55 lb bag",weight:"55 lbs (Dry Powder Bag)",aestheticStyle:"Soft Velvety Venetian Earth Texture",diyFeasibility:"NOVICE / ARTISAN TROWEL",retailPrice:"$48.00 per 55 lb bag ($0.19 / sq ft)",supplier:{name:"Limestrong Plasters / St. Astier North America",location:"Portland, Oregon / Global Masonry Distribution",contact:"orders@limestrong.com | +1 (541) 505-8888",website:"limestrongart.com / stastier.co.uk",exactPrice:"$48.00 per 55 lb bag + $12 earth pigment pack",leadTime:"2-3 Days Shipping"},sustainabilityNote:"Zero VOC, hypoallergenic, and petrifies into genuine stone over decades."}];function $1({selectedPiece:s,activeFinish:e,onSelectFinish:n}){const r=et.useRef(null),o=et.useRef(null),c=et.useRef(null),u=et.useRef(null),f=et.useRef(null),[p,g]=et.useState(!0),[x,_]=et.useState(!1),S=[{id:"raw_earth",name:"RAW EARTH",colorHex:"#A07855",roughness:.9,metalness:.05},{id:"bone_chalk",name:"BONE CHALK",colorHex:"#EAEAE6",roughness:.85,metalness:.05},{id:"obsidian_black",name:"OBSIDIAN",colorHex:"#181818",roughness:.6,metalness:.2},{id:"amber_timber",name:"MASS TIMBER",colorHex:"#C9A066",roughness:.7,metalness:.1},{id:"hemp_moss",name:"HEMP MOSS",colorHex:"#8B9574",roughness:.95,metalness:.02},{id:"ocean_poly",name:"OCEAN POLY",colorHex:"#2E4057",roughness:.5,metalness:.3}],M=S.find(w=>w.id===e)||S[0];et.useEffect(()=>{if(!r.current)return;const w=r.current.clientWidth,v=r.current.clientHeight||360,y=new qg;y.background=new ft(657930),y.fog=new jl(657930,.035),o.current=y;const U=new Gn(42,w/v,.1,100);U.position.set(4.5,3.5,5),U.lookAt(0,1,0),u.current=U;const D=new Xg({antialias:!0,alpha:!0});for(D.setSize(w,v),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.shadowMap.enabled=!0,D.shadowMap.type=rf,c.current=D;r.current.firstChild;)r.current.removeChild(r.current.firstChild);r.current.appendChild(D.domElement);const N=new Kg(16,16,3355443,1447446);N.position.y=-.01,y.add(N);const K=new Zg(16777215,.85);y.add(K);const k=new zl(16775146,2.2);k.position.set(5,8,5),k.castShadow=!0,k.shadow.mapSize.width=1024,k.shadow.mapSize.height=1024,y.add(k);const z=new zl(4482730,.7);z.position.set(-5,4,-4),y.add(z);const H=new tn;y.add(H),f.current=H,E(s.id,M,x,H);let R=!1,A={x:0};const P=B=>{R=!0;const ae=B.clientX||B.touches&&B.touches[0].clientX,L=B.clientY||B.touches&&B.touches[0].clientY;A={x:ae,y:L}},q=B=>{if(!R)return;const ae=B.clientX||B.touches&&B.touches[0].clientX,L=B.clientY||B.touches&&B.touches[0].clientY,b=ae-A.x;H&&(H.rotation.y+=b*.01),A={x:ae,y:L}},X=()=>{R=!1},ne=D.domElement;ne.addEventListener("mousedown",P),ne.addEventListener("mousemove",q),window.addEventListener("mouseup",X),ne.addEventListener("touchstart",P,{passive:!0}),ne.addEventListener("touchmove",q,{passive:!0}),window.addEventListener("touchend",X);let de;const ee=()=>{de=requestAnimationFrame(ee),p&&!R&&H&&(H.rotation.y+=.005),D.render(y,U)};ee();const re=()=>{if(!r.current||!D||!U)return;const B=r.current.clientWidth,ae=r.current.clientHeight||360;U.aspect=B/ae,U.updateProjectionMatrix(),D.setSize(B,ae)};return window.addEventListener("resize",re),()=>{cancelAnimationFrame(de),window.removeEventListener("resize",re),window.removeEventListener("mouseup",X),window.removeEventListener("touchend",X),ne.removeEventListener("mousedown",P),ne.removeEventListener("mousemove",q),ne.removeEventListener("touchstart",P),ne.removeEventListener("touchmove",q),D.dispose()}},[s.id]),et.useEffect(()=>{f.current&&E(s.id,M,x,f.current)},[e,x,s]);function E(w,v,y,U){for(;U.children.length>0;){const k=U.children[0];U.remove(k),k.geometry&&k.geometry.dispose(),k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.dispose()):k.material.dispose())}const D=parseInt(v.colorHex.replace("#","0x")),N=new js({color:D,roughness:v.roughness,metalness:v.metalness,wireframe:y,flatShading:!0}),K=new js({color:1118481,roughness:.5,metalness:.8});if(w==="mycelium_lounge_chair"){const k=new ji(1.2,1.4,.4,24),z=new mt(k,N);z.position.y=.6,z.castShadow=!0,U.add(z);const H=new ji(1.3,1.3,1.2,24,1,!1,0,Math.PI),R=new mt(H,N);R.position.set(0,1.2,-.4),R.rotation.y=Math.PI/2,R.castShadow=!0,U.add(R);const A=new ji(1,1.2,.4,16),P=new mt(A,N);P.position.y=.2,U.add(P)}else if(w==="rammed_earth_desk"){const k=new Dt(3.6,.3,1.8),z=new mt(k,N);z.position.y=1.4,z.castShadow=!0,U.add(z);const H=new Dt(.4,1.3,1.6),R=new mt(H,N);R.position.set(-1.5,.65,0),R.castShadow=!0,U.add(R);const A=new mt(H,N);A.position.set(1.5,.65,0),A.castShadow=!0,U.add(A);const P=new Dt(.8,.05,.8),q=new mt(P,K);q.position.set(1,1.56,-.2),U.add(q)}else if(w==="clt_studio_workbench"){const k=new Dt(4,.25,2),z=new mt(k,N);z.position.y=1.35,z.castShadow=!0,U.add(z);for(let H of[-1.7,1.7])for(let R of[-.8,.8]){const A=new Dt(.25,1.25,.25),P=new mt(A,N);P.position.set(H,.62,R),P.castShadow=!0,U.add(P)}}else if(w==="hemp_acoustic_screen"){const k=new Dt(2.2,3.2,.15),z=new mt(k,N);z.position.y=1.65,z.castShadow=!0,U.add(z);const H=new Dt(2.4,.1,.8),R=new mt(H,K);R.position.y=.05,U.add(R)}else if(w==="recycled_poly_stool"){const k=new ji(.65,.75,1.1,16),z=new mt(k,N);z.position.y=.55,z.castShadow=!0,U.add(z)}else if(w==="geopolymer_sink_counter"){const k=new Dt(2.6,.6,1.4),z=new mt(k,N);z.position.y=1.1,z.castShadow=!0,U.add(z);const H=new Dt(1.4,.25,.9),R=new mt(H,K);R.position.set(0,1.3,0),U.add(R);const A=new Dt(2.4,.8,1.2),P=new mt(A,N);P.position.y=.4,U.add(P)}else if(w==="bamboo_daybed"){const k=new Dt(4,.3,2.8),z=new mt(k,N);z.position.y=.25,z.castShadow=!0,U.add(z);const H=new Dt(3.6,.35,2.4),R=new mt(H,K);R.position.y=.55,U.add(R)}else{const k=new ji(.7,.7,1.2,6),z=new mt(k,N);z.position.y=.6,z.castShadow=!0,U.add(z)}}return h.jsxs("div",{className:"relative w-full h-72 sm:h-80 md:h-96 bg-yzy-obsidian border border-yzy-slate overflow-hidden flex flex-col select-none",children:[h.jsx("div",{ref:r,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-0.5 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon animate-pulse"}),h.jsxs("span",{className:"font-mono text-xs tracking-widest text-white uppercase font-bold",children:["3D STUDIO VIEW // ",s.name]})]}),h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash",children:["DRAG TO ROTATE 360° | FINISH: ",M.name]})]}),h.jsxs("div",{className:"absolute bottom-3 right-3 flex items-center gap-1 bg-yzy-black/90 backdrop-blur-md p-1.5 border border-yzy-slate z-10 overflow-x-auto max-w-[70%]",children:[h.jsx("span",{className:"font-mono text-[8px] text-yzy-ash uppercase tracking-wider hidden sm:inline mr-1",children:"FINISH:"}),S.map(w=>h.jsx("button",{onClick:()=>{Ot(),n(w.id)},style:{backgroundColor:w.colorHex},className:`w-5 h-5 rounded-none border transition-all ${e===w.id?"ring-2 ring-white scale-110 border-white":"border-black/50 opacity-80 hover:opacity-100"}`,title:w.name},w.id))]}),h.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-1.5 bg-yzy-black/90 backdrop-blur-md px-2 py-1 border border-yzy-slate z-10 font-mono text-[10px]",children:[h.jsx("button",{onClick:()=>{Ot(),g(!p)},className:`px-1.5 py-0.5 ${p?"text-white":"text-yzy-ash"}`,children:h.jsx(fg,{className:`w-3.5 h-3.5 ${p?"animate-spin":""}`,style:{animationDuration:"8s"}})}),h.jsx("button",{onClick:()=>{Ot(),_(!x)},className:`px-1.5 py-0.5 ${x?"text-yzy-neon font-bold":"text-yzy-ash"}`,children:"CAD"})]})]})}function Z1(){const[s,e]=et.useState(ig[0]),[n,r]=et.useState("raw_earth"),[o,c]=et.useState("ALL"),[u,f]=et.useState(""),[p,g]=et.useState(null),x=["ALL","LIVING & SEATING","OFFICE & STUDIO","ACOUSTICS & ACCESSORIES","KITCHEN & SANITARY"],_=ig.filter(E=>{const w=o==="ALL"||E.category===o,v=E.name.toLowerCase().includes(u.toLowerCase())||E.description.toLowerCase().includes(u.toLowerCase())||E.material.toLowerCase().includes(u.toLowerCase())||E.supplier.name.toLowerCase().includes(u.toLowerCase());return w&&v}),S=E=>{ja();const w=`PIECE: ${E.name}
MATERIAL: ${E.material}
PRICE: ${E.retailPrice}
SUPPLIER: ${E.supplier.name} (${E.supplier.location})
CONTACT: ${E.supplier.contact}
WEBSITE: ${E.supplier.website}`;navigator.clipboard.writeText(w),g(E.id),setTimeout(()=>g(null),2500)},M=E=>{Va(),e(E),window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"06 // 3D SUSTAINABLE INTERIOR ARCHITECTURE & FURNITURE STUDIO"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"ECO-FRIENDLY BRUTALIST FURNITURE & STUDIO PIECES"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Interactive 3D preview of circular bio-composite furniture matching the YEEZY aesthetic."})]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx($1,{selectedPiece:s,activeFinish:n,onSelectFinish:r}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"ACTIVE 3D MODEL"}),h.jsx("span",{className:"font-bold text-white truncate block",children:s.name})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"EST. PRICE"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:s.retailPrice.split("/")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"CARBON OFFSET"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:[s.carbonImpact," kg CO2"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"WEIGHT & DIMS"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:s.weight})]})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[h.jsxs("div",{className:"relative w-full sm:w-80",children:[h.jsx(hg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),h.jsx("input",{type:"text",placeholder:"Search furniture, desks, seating, sinks...",value:u,onChange:E=>f(E.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:x.map(E=>h.jsx("button",{onClick:()=>{Ot(),c(E)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${o===E?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone shadow-sm":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:E},E))})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:_.map(E=>{const w=s.id===E.id;return h.jsxs("div",{onClick:()=>M(E),className:`cursor-pointer p-5 border transition-all flex flex-col justify-between group relative ${w?"bg-yzy-obsidian border-yzy-bone ring-2 ring-yzy-bone/40 shadow-xl":"bg-yzy-obsidian/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-obsidian/90"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:E.category}),w?h.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5",children:[h.jsx(Zp,{className:"w-3 h-3"})," INSPECTING IN 3D"]}):h.jsxs("span",{className:"font-mono text-[9px] text-yzy-neon font-bold flex items-center gap-1",children:[h.jsx(h0,{className:"w-3 h-3"})," ",E.carbonImpact," kg CO2"]})]}),h.jsx("h3",{className:"font-display text-base font-bold text-white mb-1 group-hover:text-yzy-bone transition-colors",children:E.name}),h.jsx("p",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-wider mb-2",children:E.aestheticStyle}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:E.description}),h.jsxs("div",{className:"grid grid-cols-2 gap-1.5 bg-yzy-black/80 p-2.5 border border-yzy-slate/60 text-[10px] font-mono mb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"MATERIAL"}),h.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:E.material})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIMENSIONS"}),h.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:E.dimensions.split("(")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"EST. PRICE"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.retailPrice.split("/")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIY FEASIBILITY"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:E.diyFeasibility.split(" ")[0]})]})]})]}),h.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-col gap-2 font-mono",children:[h.jsxs("div",{className:"bg-yzy-black/90 p-3 border border-yzy-slate/60 flex flex-col gap-1 text-[10px]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-yzy-ash font-bold uppercase tracking-wider text-[9px]",children:"EXACT ORDER SOURCE:"}),h.jsx("span",{className:"text-yzy-chalk font-bold",children:E.supplier.location.split("/")[0]})]}),h.jsx("span",{className:"font-bold text-white text-xs",children:E.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[10px]",children:E.supplier.contact}),h.jsxs("div",{className:"flex justify-between items-center text-[9px] text-yzy-neon pt-1 border-t border-yzy-slate/40 mt-1",children:[h.jsxs("span",{children:["PRICE: ",E.supplier.exactPrice.split("or")[0]]}),h.jsxs("span",{children:["LEAD: ",E.supplier.leadTime]})]})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs("button",{onClick:v=>{v.stopPropagation(),M(E)},className:"flex-1 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs font-mono text-white tracking-wider flex items-center justify-center gap-1.5",children:[h.jsx(Zp,{className:"w-3.5 h-3.5 text-yzy-neon"}),h.jsx("span",{children:"VIEW IN 3D"})]}),h.jsx("button",{onClick:v=>{v.stopPropagation(),S(E)},className:"py-2 px-3 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-xs font-mono text-yzy-bone tracking-wider",title:"Copy Supplier Details",children:p===E.id?h.jsx(Ll,{className:"w-3.5 h-3.5 text-yzy-neon"}):h.jsx(Qx,{className:"w-3.5 h-3.5 text-yzy-ash"})})]})]})]},E.id)})})]})}const rg=[{phaseNumber:"01",title:"SITE SELECTION & SOIL DIAGNOSTICS",subtitle:"HOW TO TEST AND HARVEST YOUR ON-SITE SUBSOIL FOR ZERO DOLLARS",duration:"Day 1 - 2",skillLevel:"NOVICE (Anyone can do this)",overview:"Before buying anything, test the earth under your feet. 80% of topsoil sub-layers contain the exact natural sand-clay ratio needed to press indestructible building blocks.",steps:[{stepNum:"1.1",name:"THE 60-SECOND MASON JAR SEDIMENT TEST",instruction:"Fill a clear glass mason jar 1/3 full of your subsoil (dig down 12 inches beneath dark organic topsoil). Add clean water until 3/4 full, plus 1 tsp of salt/detergent to break surface tension. Shake vigorously for 60 seconds and set on a flat table.",timeline:[{time:"1 Minute",note:"Heavy Sand particles settle at the bottom."},{time:"2 Hours",note:"Fine Silt particles settle as a distinct middle layer."},{time:"48 Hours",note:"Pure Clay particles settle as the smooth top layer."}],idealRatio:"Ideal mix for CEB / Rammed Earth: 65-75% Sand/Gravel, 15-25% Clay, 10-15% Silt.",proTip:"If your soil is too sandy, add 10% local clay slurry. If too sticky/clay-heavy, add crushed local quarry sand."},{stepNum:"1.2",name:"THE BALL DROP TEST (FIELD MOISTURE CHECK)",instruction:"Grab a handful of damp soil and squeeze it firmly into a 1.5-inch ball. Drop it from shoulder height (5 ft) onto hard flat ground.",outcomes:[{result:"Shatters into powder",meaning:"Too dry! Add 2% water mist."},{result:"Flattens like a pancake",meaning:"Too wet! Let it air dry before pressing."},{result:"Breaks cleanly into 4-5 uniform chunks",meaning:"PERFECT MOISTURE (8-10%)! Ready to tamp or press."}]}],requiredTools:["Mason Jar","Ruler","Round-point Shovel","1/4 inch Wire Mesh Sieve Screen"]},{phaseNumber:"02",title:"RUBBLE TRENCH & GEOPOLYMER SUBGRADE FOUNDATION",subtitle:"FROST-PROOF, ZERO-SETTLEMENT EARTHEN FOUNDATION",duration:"Day 2 - 4",skillLevel:"NOVICE / COMMUNITY HAND CREW",overview:"Traditional poured Portland concrete foundations cost $12,000+. A Frank Lloyd Wright rubble trench foundation costs under $800, drains water naturally, and is immune to seismic shifting.",steps:[{stepNum:"2.1",name:"EXCAVATE THE PERIMETER TRENCH",instruction:"Dig a 18-inch wide trench around your building perimeter down to the local frost line (18-24 inches). Ensure a 1% slope toward a single daylight drainage exit point.",specs:'18" Width x 24" Depth with perforated 4" French drain pipe at bottom bedded in washed river gravel.'},{stepNum:"2.2",name:"TAMPED GRAVEL & POZZOLAN PLINTH BEAM",instruction:'Fill trench with 3/4" crushed basalt or granite gravel in 6-inch lifts, tamping each lift solid with a manual tamper. Pour an 8-inch geopolymer / lime grade beam on top to elevate walls 12 inches above splash grade.',proTip:"Elevating earth walls 12 inches off the ground ('Good Boots & Good Hat' rule) ensures 200+ year durability against rain splashback."}],requiredTools:["Trenching Spade",'Manual Hand Tamper (10x10")',"Transit Level / Water Hose Level","String Line & Stakes"]},{phaseNumber:"03",title:"WALL PRODUCTION & INTERLOCKING ASSEMBLY",subtitle:"PRESSING CEBs OR CASTING HEMPCRETE / RAMMED SLIPFORMS",duration:"Day 5 - 14",skillLevel:"NOVICE TO INTERMEDIATE",overview:"Depending on your selected material, construct your monolithic walls using zero toxic glues or off-gassing chemicals.",steps:[{stepNum:"3.1",name:"CEB INTERLOCKING BLOCK PRODUCTION (Option A)",instruction:'Sieve soil through 1/4" mesh. Blend 92% sieved soil with 8% hydraulic lime in a wheelbarrow. Feed into manual Cinva-Ram press. Pull lever arm with 150 lbs body weight to compress block at 2,000 PSI. Stack in shade to cure for 14 days with daily water mist.',rate:"A 3-person team can press 350-500 interlocking blocks per day ($0.12/block raw material cost)."},{stepNum:"3.2",name:"MONOLITHIC RAMMED EARTH SLIPFORMING (Option B)",instruction:'Erect 3/4" marine plywood forms braced with 2x4 walers and through-bolts. Fill formwork with 6-inch loose soil mix. Tamp down to 3 inches with pneumatic tamper or heavy steel hand tamper until it sounds like a hard ringing stone. Strip forms immediately and move upward.',rate:"Produces solid 18-inch thick monolithic stone walls capable of supporting multi-story mass timber floors."},{stepNum:"3.3",name:"HEMP-LIME CASTING (Option C)",instruction:"Mix 4 parts hemp hurds, 1 part hydrated lime binder, and 1.5 parts water in a horizontal pan mixer for 3 minutes until fluffy and coated. Lightly tamp around structural timber frames using wooden hand float. Do not over-compress.",rate:"Lightweight, breathable, and creates a monolithic continuous R-25 insulation envelope."}],requiredTools:["Cinva-Ram Manual Press or Slipforms","Wheelbarrows","Pneumatic or Hand Tampers","Rubber Mallet"]},{phaseNumber:"04",title:"ROOF SYSTEMS & RAINWATER VAULTS",subtitle:"CATENARY DOMES, FERROCEMENT VAULTS & MASS TIMBER SPANS",duration:"Day 15 - 20",skillLevel:"INTERMEDIATE",overview:"Cap your structure with a protective umbrella designed to deflect hurricane winds and harvest 100% of seasonal rainfall into potable storage.",steps:[{stepNum:"4.1",name:"CATENARY ARCH / DOME COMPASS ARM GUIDANCE",instruction:"For monolithic domes, anchor a central steel swivel pivot arm in the exact center of the foundation. Use the arm as a radial 3D guide to lay each circular tier of blocks at the exact inward angle without needing interior scaffolding.",proTip:"Catenary arches transfer 100% of roof load into pure compression, allowing stone and earth to span wide open rooms without steel beams."},{stepNum:"4.2",name:"LIME WASH & SILICATE HYDROPHOBIC SEAL",instruction:"Apply 3 coats of hot slaked lime wash with potassium silicate sealer. The wash chemically bonds to the earthen wall, allowing internal water vapor to breathe out while blocking driving rain completely."}],requiredTools:["Center Pivot Compass Arm","Plastering Trowels","Natural Bristle Lime Brushes","Safety Harness"]}],ld=[{id:"ceb_mix",name:"COMPRESSED EARTH BLOCK (CEB) FORMULA",yieldUnit:'100 Standard Blocks (12" x 6" x 4")',ingredients:[{name:"Sieved Subsoil (Clay/Sand mix)",amount:"900 lbs (0.4 cu yards)",cost:"$0.00 (On-site)"},{name:"Hydraulic Lime (NHL 3.5) or Pozzolan",amount:"50 lbs (1 bag)",cost:"$14.00"},{name:"Clean Water",amount:"8 - 10 Gallons (8% moisture)",cost:"$0.00"}],instructions:"Dry mix soil and lime thoroughly until color is uniform. Mist with fine spray nozzle while turning over with shovel. Compress immediately in press. Yields 100 blocks = 33 sq ft of wall."},{id:"hempcrete_mix",name:"HEMP-LIME CASTING FORMULA",yieldUnit:"10 Cubic Feet of Wall Fill (R-20)",ingredients:[{name:"Industrial Hemp Shiv / Hurds",amount:"40 lbs (1 bale)",cost:"$24.00"},{name:"Hydrated Lime / Pozzolan Binder",amount:"55 lbs (1 bag)",cost:"$16.00"},{name:"Water",amount:"6 - 7 Gallons",cost:"$0.00"}],instructions:"Wet hemp hurds in mixer first for 45 seconds. Add lime binder and mix until hurds are evenly white-coated. Add remaining water until mix clumps when squeezed without dripping water."},{id:"aircrete_mix",name:"AERATED AIRCRETE DOME FORMULA",yieldUnit:"5 Cubic Feet Foam Slurry",ingredients:[{name:"Standard or Pozzolan Cement/Slag",amount:"94 lbs (1 bag)",cost:"$12.50"},{name:"Clean Water",amount:"6 Gallons",cost:"$0.00"},{name:"High-Expansion Bio-Foaming Solution",amount:"4 oz concentrate in 2 gal water",cost:"$1.80"}],instructions:"Mix cement slurry until lump-free. Inject dense shaving-cream foam from generator directly into rotating mixer drum for 90 seconds. Pour directly into dome molds. Expands 4x volume."}];function K1(){const[s,e]=et.useState(0),[n,r]=et.useState("ceb_mix"),[o,c]=et.useState(70),[u,f]=et.useState(20),[p,g]=et.useState(10),x=rg[s],_=ld.find(E=>E.id===n)||ld[0],M=o>=60&&o<=80&&u>=15&&u<=28?{status:"EXCELLENT FOR CEB & RAMMED EARTH",color:"text-yzy-neon",border:"border-yzy-neon",feedback:"Your soil composition is optimal! High structural compressive strength with minimal shrinkage."}:u>30?{status:"HIGH CLAY CONTENT (EXCESSIVE SHRINKAGE)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 15-20% coarse washed quarry sand to stabilize before pressing blocks or tamping."}:o>80?{status:"TOO SANDY (LOW BINDING CLAY)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 10-15% natural clay slurry or increase hydraulic lime stabilizer to 10%."}:{status:"ACCEPTABLE WITH 8% LIME STABILIZER",color:"text-yzy-chalk",border:"border-yzy-slate",feedback:"Suitable for stabilized compressed earth blocks with standard curing."};return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"03 // NOVICE-TO-MASTER CONSTRUCTION PROTOCOLS"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"STEP-BY-STEP COMMUNITY BUILD MANUAL"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Zero prior construction experience required. Modular visual instructions for self-reliance."})]}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(r0,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase tracking-tight",children:"INTERACTIVE SOIL TEST SANDBOX (MASON JAR SIMULATOR)"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase",children:"CALCULATE YOUR LOCAL SOIL"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",children:[h.jsxs("div",{className:"lg:col-span-4 flex flex-col items-center justify-center bg-yzy-black p-4 border border-yzy-slate",children:[h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-widest mb-2",children:"SEDIMENT STRATA TUBE"}),h.jsxs("div",{className:"w-24 h-48 border-2 border-yzy-chalk/60 rounded-b-lg relative overflow-hidden flex flex-col-reverse bg-yzy-obsidian",children:[h.jsxs("div",{style:{height:`${o}%`},className:"w-full bg-[#C2B280] flex items-center justify-center text-[9px] font-mono font-bold text-black border-t border-black/30",children:["SAND (",o,"%)"]}),h.jsxs("div",{style:{height:`${p}%`},className:"w-full bg-[#8E8065] flex items-center justify-center text-[9px] font-mono font-bold text-white border-t border-black/30",children:["SILT (",p,"%)"]}),h.jsxs("div",{style:{height:`${u}%`},className:"w-full bg-[#B85D38] flex items-center justify-center text-[9px] font-mono font-bold text-white",children:["CLAY (",u,"%)"]})]}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash mt-2",children:"WATER & SALT SOLUTION (TOP)"})]}),h.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-4",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#C2B280] font-bold",children:"SAND LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[o,"%"]})]}),h.jsx("input",{type:"range",min:"30",max:"90",value:o,onChange:E=>{const w=Number(E.target.value);c(w);const v=100-w;f(Math.round(v*.65)),g(v-Math.round(v*.65))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#C2B280]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 1 minute"})]}),h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#B85D38] font-bold",children:"CLAY LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[u,"%"]})]}),h.jsx("input",{type:"range",min:"5",max:"60",value:u,onChange:E=>{const w=Number(E.target.value);f(w);const v=100-w;c(Math.round(v*.85)),g(v-Math.round(v*.85))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#B85D38]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 48 hours"})]}),h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#8E8065] font-bold",children:"SILT LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[p,"%"]})]}),h.jsx("input",{type:"range",min:"0",max:"40",value:p,onChange:E=>g(Number(E.target.value)),className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#8E8065]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 2 hours"})]})]}),h.jsxs("div",{className:`p-3.5 border ${M.border} bg-yzy-black/90 flex flex-col gap-1`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase font-bold",children:"DIAGNOSTIC SUITABILITY VERDICT:"}),h.jsx("span",{className:`font-mono text-xs font-bold ${M.color}`,children:M.status})]}),h.jsx("p",{className:"text-xs text-yzy-bone font-mono leading-relaxed",children:M.feedback})]})]})]})]}),h.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:rg.map((E,w)=>{const v=s===w;return h.jsxs("button",{onClick:()=>{Ot(),e(w)},className:`p-3 text-left border transition-all flex flex-col justify-between ${v?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-lg":"bg-yzy-obsidian/60 border-yzy-slate text-yzy-chalk hover:border-yzy-ash"}`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsxs("span",{className:`font-mono text-[9px] font-bold ${v?"text-yzy-black/80":"text-yzy-ash"}`,children:["PHASE ",E.phaseNumber]}),h.jsx("span",{className:`font-mono text-[9px] ${v?"text-yzy-black/80 font-bold":"text-yzy-ash"}`,children:E.duration})]}),h.jsx("span",{className:`font-display text-xs font-bold leading-tight ${v?"text-yzy-black":"text-yzy-bone"}`,children:E.title})]},E.phaseNumber)})}),h.jsxs("div",{className:"bg-yzy-obsidian/80 border border-yzy-slate p-5 sm:p-6 flex flex-col gap-5",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash uppercase tracking-widest block",children:["PHASE ",x.phaseNumber," PROTOCOL"]}),h.jsx("h3",{className:"font-display text-lg font-bold text-yzy-bone",children:x.title}),h.jsx("p",{className:"font-mono text-xs text-yzy-chalk/80 mt-0.5",children:x.subtitle})]}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsxs("span",{className:"font-mono text-[10px] px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-bone font-bold uppercase",children:["SKILL: ",x.skillLevel]})})]}),h.jsx("div",{className:"flex flex-col gap-4",children:x.steps.map(E=>h.jsxs("div",{className:"p-4 bg-yzy-black/70 border border-yzy-slate/70 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"font-mono text-xs font-bold text-yzy-bone bg-yzy-charcoal px-2 py-0.5 border border-yzy-slate",children:E.stepNum}),h.jsx("h4",{className:"font-display text-sm font-bold text-yzy-bone uppercase",children:E.name})]}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 leading-relaxed font-mono",children:E.instruction}),E.timeline&&h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 bg-yzy-obsidian p-2 border border-yzy-slate/40 text-[10px] font-mono",children:E.timeline.map((w,v)=>h.jsxs("div",{className:"flex flex-col",children:[h.jsxs("span",{className:"text-yzy-ash font-bold",children:[w.time,":"]}),h.jsx("span",{className:"text-yzy-bone",children:w.note})]},v))}),E.idealRatio&&h.jsxs("div",{className:"text-[11px] font-mono text-yzy-neon bg-yzy-neon/10 border border-yzy-neon/30 p-2 mt-1",children:[h.jsx("strong",{children:"FORMULA: "}),E.idealRatio]}),E.proTip&&h.jsxs("div",{className:"text-[10px] font-mono text-yzy-ash bg-yzy-charcoal/40 p-2 border-l-2 border-yzy-bone",children:[h.jsx("span",{className:"text-yzy-bone font-bold",children:"PRO-TIP: "}),E.proTip]})]},E.stepNum))}),h.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-wrap items-center gap-2 text-xs font-mono",children:[h.jsx("span",{className:"text-yzy-ash font-bold uppercase text-[10px] mr-2",children:"REQUIRED TOOLS:"}),x.requiredTools.map((E,w)=>h.jsx("span",{className:"px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk text-[10px]",children:E},w))]})]}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(qx,{className:"w-4 h-4 text-yzy-bone"}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase",children:"BATCH RECIPE CALCULATORS"})]}),h.jsx("div",{className:"flex gap-1",children:ld.map(E=>h.jsx("button",{onClick:()=>{Ot(),r(E.id)},className:`px-2.5 py-1 text-[10px] font-mono tracking-wider border transition-all ${n===E.id?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:E.name.split(" ")[0]},E.id))})]}),h.jsxs("div",{className:"flex flex-col gap-3 font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center text-xs",children:[h.jsx("span",{className:"text-yzy-bone font-bold",children:_.name}),h.jsxs("span",{className:"text-yzy-ash",children:["YIELD: ",_.yieldUnit]})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:_.ingredients.map((E,w)=>h.jsxs("div",{className:"bg-yzy-black p-3 border border-yzy-slate flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"text-yzy-ash text-[9px] uppercase block mb-0.5",children:["INGREDIENT ",w+1]}),h.jsx("span",{className:"text-yzy-bone font-bold text-xs",children:E.name})]}),h.jsxs("div",{className:"flex justify-between text-[11px] pt-2 mt-2 border-t border-yzy-slate/40",children:[h.jsx("span",{className:"text-yzy-chalk",children:E.amount}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.cost})]})]},w))}),h.jsxs("p",{className:"text-xs text-yzy-chalk/90 bg-yzy-black/60 p-3 border border-yzy-slate leading-relaxed",children:[h.jsx("strong",{className:"text-yzy-bone",children:"MIXING PROTOCOL: "}),_.instructions]})]})]})]})}const Q1=[{category:"FREE / LOCAL HARVESTING",title:"ON-SITE & REGIONAL HARVESTING",badge:"COST: $0 - $200",description:"Methods for acquiring 70-90% of raw building mass directly from local geography.",channels:[{item:"Subsoil & Clay for CEBs/Rammed Earth",howToSource:"Foundation basement excavation, construction site clean fill, local road cutting excavations, or agricultural pond dredging.",estimatedCost:"$0.00 (Self-dug) or $15/ton delivered from local excavation contractor",availability:"Everywhere worldwide"},{item:"Agricultural Waste (Straw, Husks, Wood Chaff)",howToSource:"Connect with local grain/rice/wheat farmers after harvest season. Substrate for mycelium bio-insulation and cob binders.",estimatedCost:"$3.00 - $5.00 per 50 lb round bale",availability:"Agricultural zones / Rural co-ops"},{item:"Recycled Plastic (HDPE Milk Jugs & Bottle Caps)",howToSource:"Set up community drop-off points at schools/churches. Melted into interlocking zero-cost foundation blocks.",estimatedCost:"$0.00 (Community collection) to $0.20/lb washed flake",availability:"Urban & suburban centers"}]},{category:"LOW-COST EQUIPMENT & TOOLING",title:"OPEN-SOURCE BLOCK PRESSES & CASTING RIGS",badge:"ONE-TIME COMMUNITY TOOL KIT",description:"Inexpensive machinery that a single community can share to build dozens of homes.",channels:[{item:"Manual Interlocking CEB Press (Cinva-Ram / Auram Style)",howToSource:"Purchase from Open Source Ecology, Habitat for Humanity suppliers, or weld locally using open-source CAD plans.",estimatedCost:"$380 - $650 (One-time purchase, builds 50+ homes)",leadTime:"3-7 Days shipping or 2 days local welding"},{item:"Aircrete Continuous Bio-Foam Generator Rig",howToSource:"Domegaia Little Dragon foam unit or DIY 5-gallon pressure tank with aerator wand.",estimatedCost:"$120 - $280",leadTime:"Immediate DIY assembly"},{item:"Slipform Formwork & Steel Walers",howToSource:'Reusable 3/4" high-density overlay (HDO) plywood sheets with quick-release wedge bolts.',estimatedCost:"$450 per 16 linear feet of reusable forms",leadTime:"Local lumber yard"}]},{category:"COMMERCIAL BIO & MINERAL SUPPLIERS",title:"PROCESSED HEMPCRETE, LIME & MASS TIMBER",badge:"DIRECT SUPPLY CHAIN",description:"Direct wholesale bulk contacts for specialized binders and bio-composites.",channels:[{item:"Industrial Hemp Shiv / Hurd (Fibers cleaned & shredded)",howToSource:"HempWood (KY), Sunstrand, US Hemp Brokerage, Hempitecture.",estimatedCost:"$0.38 - $0.55 / lb in 1-ton super-sacks",leadTime:"5-10 Days freight"},{item:"Naturally Hydraulic Lime (NHL 3.5 / NHL 5.0) & Pozzolans",howToSource:"Saint-Astier, Limestrong, Graymont, Boral Fly Ash / Slag recycling.",estimatedCost:"$14.00 - $18.00 per 50 lb sack wholesale",leadTime:"Regional masonry distributors"},{item:"Engineered Bamboo Culms & Strands",howToSource:"Guadua bamboo co-ops, BamCore structural framing panels.",estimatedCost:"$3.50 / linear ft",leadTime:"Regional timber hubs"}]}],J1=[{metric:"Foundation (per sq ft)",conventional:"$18.50 (Standard poured concrete)",ezyInfra:"$3.80 (Rubble trench + Geopolymer plinth)",savings:"79% SAVED"},{metric:"Exterior Wall Envelope (per sq ft)",conventional:"$42.00 (Wood studs + OSB + Fiberglass + Drywall + Siding)",ezyInfra:"$4.20 (Interlocking CEB Earth or Rammed Earth)",savings:"90% SAVED"},{metric:"Insulation & Acoustic (per sq ft)",conventional:"$9.50 (Toxic closed-cell spray foam)",ezyInfra:"$2.90 (Grown Mycelium or Hemp-Lime)",savings:"69% SAVED"},{metric:"Total Turnkey Cost (1,200 sqft Residence)",conventional:"$280,000 - $420,000",ezyInfra:"$14,500 - $28,000",savings:"93% SAVED"},{metric:"Net Embodied Carbon",conventional:"+65,000 kg CO2 (Heavy polluter)",ezyInfra:"-14,200 kg CO2 (Net Carbon Sink)",savings:"122% REDUCTION"}];function sg(){return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"04 // SOURCING RADAR & SUPPLY CHAIN"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"MATERIAL PROCUREMENT & TOOL DIRECTORY"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Direct wholesale pathways, open-source equipment plans, and local harvesting guides."})]}),h.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:Q1.map((s,e)=>h.jsx("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col justify-between",children:h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk",children:s.category}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-neon font-bold",children:s.badge})]}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1",children:s.title}),h.jsx("p",{className:"text-xs text-yzy-chalk/80 leading-relaxed mb-4",children:s.description}),h.jsx("div",{className:"flex flex-col gap-3",children:s.channels.map((n,r)=>h.jsxs("div",{className:"bg-yzy-black/80 p-3 border border-yzy-slate/60 text-xs font-mono",children:[h.jsx("span",{className:"font-bold text-yzy-bone block mb-1",children:n.item}),h.jsx("p",{className:"text-[11px] text-yzy-chalk/90 leading-relaxed mb-2",children:n.howToSource}),h.jsxs("div",{className:"flex justify-between items-center text-[10px] pt-2 border-t border-yzy-slate/40",children:[h.jsx("span",{className:"text-yzy-ash",children:"COST:"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:n.estimatedCost})]})]},r))})]})},e))}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 sm:p-6 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(T0,{className:"w-5 h-5 text-yzy-neon"}),h.jsx("h3",{className:"font-display text-base sm:text-lg font-bold text-yzy-bone uppercase",children:"TRANSPARENT COST DISRUPTION INDEX (CONVENTIONAL VS EZY INFRA)"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase hidden sm:inline",children:"INDUSTRY BENCHMARKS"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[h.jsx("th",{className:"py-2.5 px-3",children:"ARCHITECTURAL COMPONENT"}),h.jsx("th",{className:"py-2.5 px-3",children:"CONVENTIONAL COMMERCIAL"}),h.jsx("th",{className:"py-2.5 px-3",children:"EZY INFRA SYSTEM"}),h.jsx("th",{className:"py-2.5 px-3 text-right",children:"COST DISRUPTION"})]})}),h.jsx("tbody",{className:"divide-y divide-yzy-slate/40",children:J1.map((s,e)=>h.jsxs("tr",{className:"hover:bg-yzy-charcoal/40 transition-colors",children:[h.jsx("td",{className:"py-3 px-3 font-bold text-yzy-bone",children:s.metric}),h.jsx("td",{className:"py-3 px-3 text-yzy-ash line-through",children:s.conventional}),h.jsx("td",{className:"py-3 px-3 text-yzy-chalk font-bold",children:s.ezyInfra}),h.jsx("td",{className:"py-3 px-3 text-right",children:h.jsx("span",{className:"bg-yzy-neon/10 border border-yzy-neon/30 text-yzy-neon font-bold px-2 py-0.5 text-[10px]",children:s.savings})})]},e))})]})})]})]})}function eb({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:u,totalCarbon:f}){var w,v,y,U,D,N,K,k,z,H,R,A;if(!s)return null;const p=[{layer:"01. FOUNDATION & SUBGRADE",mat:o.find(P=>P.id===r.foundation),calc:`$${(n.sqft*.8*(((w=o.find(P=>P.id===r.foundation))==null?void 0:w.costPerSqFt)||3.5)).toFixed(0)}`,costNum:Math.round(n.sqft*.8*(((v=o.find(P=>P.id===r.foundation))==null?void 0:v.costPerSqFt)||3.5))},{layer:"02. CORE SUPERSTRUCTURE",mat:o.find(P=>P.id===r.superstructure),calc:`$${(n.sqft*.6*(((y=o.find(P=>P.id===r.superstructure))==null?void 0:y.costPerSqFt)||4.5)).toFixed(0)}`,costNum:Math.round(n.sqft*.6*(((U=o.find(P=>P.id===r.superstructure))==null?void 0:U.costPerSqFt)||4.5))},{layer:"03. THERMAL ENVELOPE / WALLS",mat:o.find(P=>P.id===r.walls),calc:`$${(n.sqft*1.4*(((D=o.find(P=>P.id===r.walls))==null?void 0:D.costPerSqFt)||4.2)).toFixed(0)}`,costNum:Math.round(n.sqft*1.4*(((N=o.find(P=>P.id===r.walls))==null?void 0:N.costPerSqFt)||4.2))},{layer:"04. ROOF & CANOPY VAULT",mat:o.find(P=>P.id===r.roof),calc:`$${(n.sqft*1.1*(((K=o.find(P=>P.id===r.roof))==null?void 0:K.costPerSqFt)||3.8)).toFixed(0)}`,costNum:Math.round(n.sqft*1.1*(((k=o.find(P=>P.id===r.roof))==null?void 0:k.costPerSqFt)||3.8))},{layer:"05. BIO-ACOUSTIC INSULATION",mat:o.find(P=>P.id===r.insulation),calc:`$${(n.sqft*1*(((z=o.find(P=>P.id===r.insulation))==null?void 0:z.costPerSqFt)||2.9)).toFixed(0)}`,costNum:Math.round(n.sqft*1*(((H=o.find(P=>P.id===r.insulation))==null?void 0:H.costPerSqFt)||2.9))},{layer:"06. OFF-GRID UTILITY SUITE",mat:c.find(P=>P.id===r.utilities),calc:`$${(((R=c.find(P=>P.id===r.utilities))==null?void 0:R.cost)||2400).toLocaleString()}`,costNum:((A=c.find(P=>P.id===r.utilities))==null?void 0:A.cost)||2400}],g=p.reduce((P,q)=>P+q.costNum,0),x=650,_=Math.round(g*.08),S=g+x+_,M=(S/n.sqft).toFixed(2),E=()=>{ja();let P="data:text/csv;charset=utf-8,";P+=`ARCHITECTURAL COMPONENT,SPECIFIED MATERIAL,UNIT METRIC,ESTIMATED COST
`,p.forEach(ne=>{var de,ee,re;P+=`"${ne.layer}","${((de=ne.mat)==null?void 0:de.name)||((ee=ne.mat)==null?void 0:ee.shortName)}","${((re=ne.mat)==null?void 0:re.unitCost)||"Package"}","${ne.calc}"
`}),P+=`"TOOLING & EQUIPMENT","Community Press Kit","One-Time Rental","$${x}"
`,P+=`"CONTINGENCY BUFFER","8% Waste Reserve","Contingency","$${_}"
`,P+=`"TOTAL PROJECT BUDGET","${n.name}","Turnkey DIY","$${S}"
`;const q=encodeURI(P),X=document.createElement("a");X.setAttribute("href",q),X.setAttribute("download",`EZY_INFRA_BOM_${n.code}.csv`),document.body.appendChild(X),X.click(),document.body.removeChild(X)};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone w-full max-w-3xl my-auto p-5 sm:p-7 shadow-2xl flex flex-col gap-5 text-yzy-bone font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase block",children:"TRANSPARENT BILL OF MATERIALS (BOM)"}),h.jsxs("h3",{className:"font-display text-lg sm:text-xl font-bold tracking-tight",children:[n.name," // COST TELEMETRY"]})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 bg-yzy-black p-3 border border-yzy-slate text-center",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"TOTAL DIY BUDGET"}),h.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-neon",children:["$",S.toLocaleString()]})]}),h.jsxs("div",{className:"border-l border-yzy-slate",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COST PER SQ FT"}),h.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:["$",M," / sqft"]})]}),h.jsxs("div",{className:"border-l border-yzy-slate",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COMMERCIAL COST SAVINGS"}),h.jsx("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:"88% - 94%"})]})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[h.jsx("th",{className:"py-2 px-2",children:"COMPONENT"}),h.jsx("th",{className:"py-2 px-2",children:"SPECIFIED MATERIAL"}),h.jsx("th",{className:"py-2 px-2 text-right",children:"COST ESTIMATE"})]})}),h.jsxs("tbody",{className:"divide-y divide-yzy-slate/40",children:[p.map((P,q)=>{var X,ne;return h.jsxs("tr",{className:"hover:bg-yzy-charcoal/30",children:[h.jsx("td",{className:"py-2.5 px-2 font-bold text-yzy-chalk text-[11px]",children:P.layer}),h.jsx("td",{className:"py-2.5 px-2 text-yzy-ash text-[11px]",children:((X=P.mat)==null?void 0:X.name)||((ne=P.mat)==null?void 0:ne.shortName)}),h.jsx("td",{className:"py-2.5 px-2 text-right font-bold text-yzy-bone text-[11px]",children:P.calc})]},q)}),h.jsxs("tr",{className:"bg-yzy-black/40",children:[h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"TOOLS & EQUIPMENT LEASE"}),h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Cinva-Ram Press & Mixer"}),h.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",x]})]}),h.jsxs("tr",{className:"bg-yzy-black/40",children:[h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"CONTINGENCY & WASTE RESERVE (8%)"}),h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Site Material Buffer"}),h.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",_]})]})]})]})}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash",children:"* Estimates based on open-source DIY construction without contractor markup."}),h.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[h.jsxs("button",{onClick:E,className:"flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-yzy-bone hover:bg-white text-yzy-black text-xs font-bold tracking-wider",children:[h.jsx(cd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"DOWNLOAD BOM (.CSV)"})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"px-4 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs text-yzy-chalk",children:"CLOSE"})]})]})]})})}var xf={};(function s(e,n,r,o){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),b=L.getContext("2d");b.fillRect(0,0,1,1);var G=L.transferToImageBitmap();b.createPattern(G,"no-repeat")}catch{return!1}return!0})();function p(){}function g(L){var b=n.exports.Promise,G=b!==void 0?b:e.Promise;return typeof G=="function"?new G(L):(L(p,p),null)}var x=(function(L,b){return{transform:function(G){if(L)return G;if(b.has(G))return b.get(G);var he=new OffscreenCanvas(G.width,G.height),W=he.getContext("2d");return W.drawImage(G,0,0),b.set(G,he),he},clear:function(){b.clear()}}})(f,new Map),_=(function(){var L=Math.floor(16.666666666666668),b,G,he={},W=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(te){var pe=Math.random();return he[pe]=requestAnimationFrame(function oe(ge){W===ge||W+L-1<ge?(W=ge,delete he[pe],te()):he[pe]=requestAnimationFrame(oe)}),pe},G=function(te){he[te]&&cancelAnimationFrame(he[te])}):(b=function(te){return setTimeout(te,L)},G=function(te){return clearTimeout(te)}),{frame:b,cancel:G}})(),S=(function(){var L,b,G={};function he(W){function te(pe,oe){W.postMessage({options:pe||{},callback:oe})}W.init=function(oe){var ge=oe.transferControlToOffscreen();W.postMessage({canvas:ge},[ge])},W.fire=function(oe,ge,Se){if(b)return te(oe,null),b;var Re=Math.random().toString(36).slice(2);return b=g(function(Ge){function ze(rt){rt.data.callback===Re&&(delete G[Re],W.removeEventListener("message",ze),b=null,x.clear(),Se(),Ge())}W.addEventListener("message",ze),te(oe,Re),G[Re]=ze.bind(null,{data:{callback:Re}})}),b},W.reset=function(){W.postMessage({reset:!0});for(var oe in G)G[oe](),delete G[oe]}}return function(){if(L)return L;if(!r&&c){var W=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([W])))}catch(te){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",te),null}he(L)}return L}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(L,b){return b?b(L):L}function w(L){return L!=null}function v(L,b,G){return E(L&&w(L[b])?L[b]:M[b],G)}function y(L){return L<0?0:Math.floor(L)}function U(L,b){return Math.floor(Math.random()*(b-L))+L}function D(L){return parseInt(L,16)}function N(L){return L.map(K)}function K(L){var b=String(L).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:D(b.substring(0,2)),g:D(b.substring(2,4)),b:D(b.substring(4,6))}}function k(L){var b=v(L,"origin",Object);return b.x=v(b,"x",Number),b.y=v(b,"y",Number),b}function z(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function H(L){var b=L.getBoundingClientRect();L.width=b.width,L.height=b.height}function R(L){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=L,b}function A(L,b,G,he,W,te,pe,oe,ge){L.save(),L.translate(b,G),L.rotate(te),L.scale(he,W),L.arc(0,0,1,pe,oe,ge),L.restore()}function P(L){var b=L.angle*(Math.PI/180),G=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-b+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function q(L,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var G=b.tick++/b.totalTicks,he=b.x+b.random*b.tiltCos,W=b.y+b.random*b.tiltSin,te=b.wobbleX+b.random*b.tiltCos,pe=b.wobbleY+b.random*b.tiltSin;if(L.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-G)+")",L.beginPath(),u&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))L.fill(re(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(te-he)*.1,Math.abs(pe-W)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var oe=Math.PI/10*b.wobble,ge=Math.abs(te-he)*.1,Se=Math.abs(pe-W)*.1,Re=b.shape.bitmap.width*b.scalar,Ge=b.shape.bitmap.height*b.scalar,ze=new DOMMatrix([Math.cos(oe)*ge,Math.sin(oe)*ge,-Math.sin(oe)*Se,Math.cos(oe)*Se,b.x,b.y]);ze.multiplySelf(new DOMMatrix(b.shape.matrix));var rt=L.createPattern(x.transform(b.shape.bitmap),"no-repeat");rt.setTransform(ze),L.globalAlpha=1-G,L.fillStyle=rt,L.fillRect(b.x-Re/2,b.y-Ge/2,Re,Ge),L.globalAlpha=1}else if(b.shape==="circle")L.ellipse?L.ellipse(b.x,b.y,Math.abs(te-he)*b.ovalScalar,Math.abs(pe-W)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):A(L,b.x,b.y,Math.abs(te-he)*b.ovalScalar,Math.abs(pe-W)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var V=Math.PI/2*3,_t=4*b.scalar,Ie=8*b.scalar,We=b.x,Pe=b.y,ct=5,Ue=Math.PI/ct;ct--;)We=b.x+Math.cos(V)*Ie,Pe=b.y+Math.sin(V)*Ie,L.lineTo(We,Pe),V+=Ue,We=b.x+Math.cos(V)*_t,Pe=b.y+Math.sin(V)*_t,L.lineTo(We,Pe),V+=Ue;else L.moveTo(Math.floor(b.x),Math.floor(b.y)),L.lineTo(Math.floor(b.wobbleX),Math.floor(W)),L.lineTo(Math.floor(te),Math.floor(pe)),L.lineTo(Math.floor(he),Math.floor(b.wobbleY));return L.closePath(),L.fill(),b.tick<b.totalTicks}function X(L,b,G,he,W){var te=b.slice(),pe=L.getContext("2d"),oe,ge,Se=g(function(Re){function Ge(){oe=ge=null,pe.clearRect(0,0,he.width,he.height),x.clear(),W(),Re()}function ze(){r&&!(he.width===o.width&&he.height===o.height)&&(he.width=L.width=o.width,he.height=L.height=o.height),!he.width&&!he.height&&(G(L),he.width=L.width,he.height=L.height),pe.clearRect(0,0,he.width,he.height),te=te.filter(function(rt){return q(pe,rt)}),te.length?oe=_.frame(ze):Ge()}oe=_.frame(ze),ge=Ge});return{addFettis:function(Re){return te=te.concat(Re),Se},canvas:L,promise:Se,reset:function(){oe&&_.cancel(oe),ge&&ge()}}}function ne(L,b){var G=!L,he=!!v(b||{},"resize"),W=!1,te=v(b,"disableForReducedMotion",Boolean),pe=c&&!!v(b||{},"useWorker"),oe=pe?S():null,ge=G?z:H,Se=L&&oe?!!L.__confetti_initialized:!1,Re=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ge;function ze(V,_t,Ie){for(var We=v(V,"particleCount",y),Pe=v(V,"angle",Number),ct=v(V,"spread",Number),Ue=v(V,"startVelocity",Number),O=v(V,"decay",Number),C=v(V,"gravity",Number),J=v(V,"drift",Number),xe=v(V,"colors",N),_e=v(V,"ticks",Number),ye=v(V,"shapes"),qe=v(V,"scalar"),Ne=!!v(V,"flat"),Fe=k(V),ht=We,be=[],He=L.width*Fe.x,tt=L.height*Fe.y;ht--;)be.push(P({x:He,y:tt,angle:Pe,spread:ct,startVelocity:Ue,color:xe[ht%xe.length],shape:ye[U(0,ye.length)],ticks:_e,decay:O,gravity:C,drift:J,scalar:qe,flat:Ne}));return Ge?Ge.addFettis(be):(Ge=X(L,be,ge,_t,Ie),Ge.promise)}function rt(V){var _t=te||v(V,"disableForReducedMotion",Boolean),Ie=v(V,"zIndex",Number);if(_t&&Re)return g(function(Ue){Ue()});G&&Ge?L=Ge.canvas:G&&!L&&(L=R(Ie),document.body.appendChild(L)),he&&!Se&&ge(L);var We={width:L.width,height:L.height};oe&&!Se&&oe.init(L),Se=!0,oe&&(L.__confetti_initialized=!0);function Pe(){if(oe){var Ue={getBoundingClientRect:function(){if(!G)return L.getBoundingClientRect()}};ge(Ue),oe.postMessage({resize:{width:Ue.width,height:Ue.height}});return}We.width=We.height=null}function ct(){Ge=null,he&&(W=!1,e.removeEventListener("resize",Pe)),G&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,Se=!1)}return he&&!W&&(W=!0,e.addEventListener("resize",Pe,!1)),oe?oe.fire(V,We,ct):ze(V,We,ct)}return rt.reset=function(){oe&&oe.reset(),Ge&&Ge.reset()},rt}var de;function ee(){return de||(de=ne(null,{useWorker:!0,resize:!0})),de}function re(L,b,G,he,W,te,pe){var oe=new Path2D(L),ge=new Path2D;ge.addPath(oe,new DOMMatrix(b));var Se=new Path2D;return Se.addPath(ge,new DOMMatrix([Math.cos(pe)*W,Math.sin(pe)*W,-Math.sin(pe)*te,Math.cos(pe)*te,G,he])),Se}function B(L){if(!u)throw new Error("path confetti are not supported in this browser");var b,G;typeof L=="string"?b=L:(b=L.path,G=L.matrix);var he=new Path2D(b),W=document.createElement("canvas"),te=W.getContext("2d");if(!G){for(var pe=1e3,oe=pe,ge=pe,Se=0,Re=0,Ge,ze,rt=0;rt<pe;rt+=2)for(var V=0;V<pe;V+=2)te.isPointInPath(he,rt,V,"nonzero")&&(oe=Math.min(oe,rt),ge=Math.min(ge,V),Se=Math.max(Se,rt),Re=Math.max(Re,V));Ge=Se-oe,ze=Re-ge;var _t=10,Ie=Math.min(_t/Ge,_t/ze);G=[Ie,0,0,Ie,-Math.round(Ge/2+oe)*Ie,-Math.round(ze/2+ge)*Ie]}return{type:"path",path:b,matrix:G}}function ae(L){var b,G=1,he="#000000",W='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?b=L:(b=L.text,G="scalar"in L?L.scalar:G,W="fontFamily"in L?L.fontFamily:W,he="color"in L?L.color:he);var te=10*G,pe=""+te+"px "+W,oe=new OffscreenCanvas(te,te),ge=oe.getContext("2d");ge.font=pe;var Se=ge.measureText(b),Re=Math.ceil(Se.actualBoundingBoxRight+Se.actualBoundingBoxLeft),Ge=Math.ceil(Se.actualBoundingBoxAscent+Se.actualBoundingBoxDescent),ze=2,rt=Se.actualBoundingBoxLeft+ze,V=Se.actualBoundingBoxAscent+ze;Re+=ze+ze,Ge+=ze+ze,oe=new OffscreenCanvas(Re,Ge),ge=oe.getContext("2d"),ge.font=pe,ge.fillStyle=he,ge.fillText(b,rt,V);var _t=1/G;return{type:"bitmap",bitmap:oe.transferToImageBitmap(),matrix:[_t,0,0,_t,-Re*_t/2,-Ge*_t/2]}}n.exports=function(){return ee().apply(this,arguments)},n.exports.reset=function(){ee().reset()},n.exports.create=ne,n.exports.shapeFromPath=B,n.exports.shapeFromText=ae})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),xf,!1);const tb=xf.exports;xf.exports.create;function nb({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:u,totalCarbon:f}){if(et.useEffect(()=>{if(s)try{tb({particleCount:60,spread:70,origin:{y:.6},colors:["#EAEAE6","#B8865A","#00FF66","#7B8C65"]})}catch{}},[s]),!s)return null;const p=()=>{ja(),window.print()};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-black border-2 border-yzy-bone w-full max-w-4xl my-auto p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[h.jsxs("div",{className:"flex items-center justify-between border-b-2 border-yzy-bone pb-4",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[10px] tracking-widest text-yzy-ash uppercase font-bold",children:"YZY INFRASTRUCTURE ARCHITECTURAL BLUEPRINT // SPECIFICATION CAD-01"}),h.jsxs("h2",{className:"font-display text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5",children:[n.name," — ",n.subtitle]})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"PROJECT CODE"}),h.jsx("span",{className:"font-bold text-white",children:n.code})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"TOTAL FOOTPRINT"}),h.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"DIMENSIONS"}),h.jsx("span",{className:"font-bold text-white",children:n.diameter})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"OCCUPANCY"}),h.jsx("span",{className:"font-bold text-white",children:n.occupancy})]})]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase font-bold border-b border-yzy-slate pb-1",children:"01. MATERIAL & LAYER ARCHITECTURE"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs",children:Object.entries(r).map(([g,x])=>{const _=g==="utilities"?c.find(S=>S.id===x):o.find(S=>S.id===x);return h.jsxs("div",{className:"p-2.5 bg-yzy-obsidian border border-yzy-slate/60 flex flex-col justify-between",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold",children:g.toUpperCase()}),h.jsx("span",{className:"font-bold text-yzy-bone text-xs mt-0.5",children:(_==null?void 0:_.name)||(_==null?void 0:_.shortName)}),h.jsx("span",{className:"text-[10px] text-yzy-chalk/80 mt-1 line-clamp-1",children:(_==null?void 0:_.tagline)||(_==null?void 0:_.description)})]},g)})})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"WIND RESISTANCE"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.windResistance})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"SEISMIC ZONE"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.seismicZone})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"THERMAL STRATEGY"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.thermalComfort})]})]}),h.jsxs("div",{className:"bg-yzy-bone text-yzy-black p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"AUTHENTICATED PROJECT ESTIMATE"}),h.jsxs("span",{className:"text-2xl font-black",children:["$",u.toLocaleString()," TOTAL TURNKEY DIY"]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"NET EMBODIED CARBON"}),h.jsx("span",{className:"text-lg font-bold",children:f<=0?`${f} kg CO2 (NET SINK)`:`+${f} kg CO2`})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash uppercase tracking-wider",children:"OPEN-SOURCE COMMUNITY ARCHITECTURE LICENSE // FREE TO DISTRIBUTE"}),h.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[h.jsxs("button",{onClick:p,className:"flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-xs hover:bg-yzy-bone transition-all",children:[h.jsx(y0,{className:"w-4 h-4"}),h.jsx("span",{children:"PRINT / SAVE PDF"})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"px-4 py-2.5 bg-yzy-charcoal border border-yzy-slate text-xs text-yzy-chalk",children:"DISMISS"})]})]})]})})}function ib({isOpen:s,onClose:e}){return s?h.jsx("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-black border border-yzy-bone/80 w-full max-w-3xl my-auto p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"text-xs font-bold tracking-widest text-yzy-bone uppercase",children:"THE MANIFESTO // YZY + DONDA EARTH INITIATIVE"})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsxs("h2",{className:"font-display text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight",children:["SHELTER IS A BIRTHRIGHT. ",h.jsx("br",{}),"NOT A 30-YEAR PRISON SENTENCE."]}),h.jsx("p",{className:"text-xs sm:text-sm text-yzy-chalk/90 leading-relaxed font-sans",children:"The modern housing machine is broken. It forces human beings into debt slavery for toxic drywall boxes that rot in 40 years. We are returning to ancient monolithic permanence powered by computational engineering, raw subsoil, mycelium, and solar autonomy."})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(l0,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("span",{children:"01. 90% ON-SITE HARVESTING"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"We build directly with the dirt beneath our feet. Subsoil compressed at 2,000 PSI makes permanent stone blocks for cents per unit. Zero timber destruction. Zero cement emissions."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(z0,{className:"w-4 h-4 text-yzy-electric"}),h.jsx("span",{children:"02. DECENTRALIZED SOVEREIGNTY"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every dome and village features closed-loop solar generation, atmospheric rainwater harvesting, and bio-gas digestion. Zero utility bills for life."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(S0,{className:"w-4 h-4 text-yzy-earth"}),h.jsx("span",{children:"03. 200+ YEAR BRUTALIST LIFE"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Catenary arches and thick monolithic earth walls cannot catch fire, cannot rot, and withstand Category 5 hurricanes and earthquakes. Built for generations."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(u0,{className:"w-4 h-4 text-yzy-clay"}),h.jsx("span",{children:"04. OPEN-SOURCE COMMUNITY POWER"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every blueprint, mix formula, and CAD file is free and open-source. Anyone with a shovel, manual block press, and community willpower can build a sanctuary."})]})]}),h.jsxs("div",{className:"pt-4 border-t border-yzy-slate flex items-center justify-between",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase",children:"DESIGNED FOR HUMANITY // POWERED BY EZY INFRA"}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"px-5 py-2 bg-yzy-bone text-yzy-black font-bold text-xs hover:bg-white tracking-wider",children:"ENTER THE ECOSYSTEM"})]})]})}):null}function rb(){var K;const[s,e]=et.useState("builder"),[n,r]=et.useState(Cu[0]),o=Si[Cu[0].id]||Si.yzy_mono_dome,c={};o.forEach(k=>{c[k.id]=k.defaultMaterial});const[u,f]=et.useState(c),[p,g]=et.useState(((K=o[1])==null?void 0:K.id)||o[0].id),[x,_]=et.useState(!1),[S,M]=et.useState(!1),[E,w]=et.useState(!1),v=et.useMemo(()=>[...nl,...ef],[]),y=k=>{var R;r(k);const z=Si[k.id]||Si.yzy_mono_dome,H={};z.forEach(A=>{H[A.id]=A.defaultMaterial}),f(H),g(((R=z[1])==null?void 0:R.id)||z[0].id)},U=(k,z)=>{f(H=>({...H,[k]:z}))},{totalCost:D,totalCarbon:N}=et.useMemo(()=>{const k=Si[n.id]||Si.yzy_mono_dome;let z=0,H=0;return k.forEach(R=>{const A=u[R.id]||R.defaultMaterial,P=v.find(X=>X.id===A),q=Ru.find(X=>X.id===A);if(q)z+=q.cost,H+=q.carbonImpact;else if(P){const X=R.surfaceAreaSqft*P.costPerSqFt,ne=R.surfaceAreaSqft*.1*P.carbonImpact;z+=X,H+=ne}}),z+=650,{totalCost:Math.round(z),totalCarbon:Math.round(H)}},[n,u,v]);return h.jsxs("div",{className:"min-h-screen bg-yzy-black text-yzy-bone flex flex-col selection:bg-yzy-bone selection:text-yzy-black",children:[h.jsx(F0,{activeTab:s,setActiveTab:e,totalCost:D,totalCarbon:N,onOpenCostBreakdown:()=>_(!0),onOpenBlueprintExport:()=>M(!0),onOpenVisionModal:()=>w(!0)}),h.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 pb-24 flex flex-col gap-6",children:[s==="builder"&&h.jsxs("div",{className:"flex flex-col gap-6",children:[h.jsx(X1,{infrastructures:Cu,selectedInfra:n,onSelectInfra:y}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx(W1,{infrastructure:n,selectedPartMaterials:u,activePartId:p,onSelectPart:k=>g(k),materialsList:nl}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate/60 p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"ACTIVE MODEL"}),h.jsx("span",{className:"font-bold text-white",children:n.name})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"FOOTPRINT"}),h.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"LIVE ESTIMATED COST"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:["$",D.toLocaleString()]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"NET CARBON IMPACT"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:[N," kg CO2"]})]})]})]}),h.jsx(q1,{infrastructure:n,selectedPartMaterials:u,onSelectPartMaterial:U,activePartId:p,setActivePartId:g,materialsList:nl})]}),s==="materials"&&h.jsx(Y1,{materialsList:nl}),s==="furniture"&&h.jsx(Z1,{}),s==="tutorials"&&h.jsx(K1,{}),s==="sourcing"&&h.jsx(sg,{}),s==="benchmarks"&&h.jsx("div",{className:"flex flex-col gap-6 py-2",children:h.jsx(sg,{})})]}),h.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-40 bg-yzy-obsidian/95 backdrop-blur-md border-t border-yzy-slate/80 p-2 sm:hidden flex items-center justify-around font-mono text-[10px]",children:[h.jsxs("button",{onClick:()=>{Ot(),e("builder")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="builder"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(cg,{className:"w-4 h-4"}),h.jsx("span",{children:"MATRIX"})]}),h.jsxs("button",{onClick:()=>{Ot(),e("materials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="materials"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(tf,{className:"w-4 h-4"}),h.jsx("span",{children:"MATERIALS"})]}),h.jsxs("button",{onClick:()=>{Ot(),e("furniture")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="furniture"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(ug,{className:"w-4 h-4"}),h.jsx("span",{children:"FURNITURE"})]}),h.jsxs("button",{onClick:()=>{Ot(),e("tutorials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="tutorials"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(lg,{className:"w-4 h-4"}),h.jsx("span",{children:"GUIDES"})]}),h.jsxs("button",{onClick:()=>{ja(),_(!0)},className:"flex flex-col items-center gap-1 py-1 px-1.5 text-yzy-neon font-bold",children:[h.jsx(dg,{className:"w-4 h-4"}),h.jsxs("span",{children:["$",D.toLocaleString()]})]})]}),h.jsx(eb,{isOpen:x,onClose:()=>_(!1),infrastructure:n,selectedMaterials:u,materialsList:v,utilityPackages:Ru,totalCost:D,totalCarbon:N}),h.jsx(nb,{isOpen:S,onClose:()=>M(!1),infrastructure:n,selectedMaterials:u,materialsList:v,utilityPackages:Ru,totalCost:D,totalCarbon:N}),h.jsx(ib,{isOpen:E,onClose:()=>w(!1)})]})}Bx.createRoot(document.getElementById("root")).render(h.jsx(Px.StrictMode,{children:h.jsx(rb,{})}));
