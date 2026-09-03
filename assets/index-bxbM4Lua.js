(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function ag(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},La={},bu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Ly(){if(Hp)return vt;Hp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function _(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(b,G,pe){this.props=b,this.context=G,this.refs=T,this.updater=pe||M}y.prototype.isReactComponent={},y.prototype.setState=function(b,G){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,G,"setState")},y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function x(){}x.prototype=y.prototype;function U(b,G,pe){this.props=b,this.context=G,this.refs=T,this.updater=pe||M}var D=U.prototype=new x;D.constructor=U,E(D,y.prototype),D.isPureReactComponent=!0;var R=Array.isArray,Z=Object.prototype.hasOwnProperty,k={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function H(b,G,pe){var W,$={},ce=null,ae=null;if(G!=null)for(W in G.ref!==void 0&&(ae=G.ref),G.key!==void 0&&(ce=""+G.key),G)Z.call(G,W)&&!z.hasOwnProperty(W)&&($[W]=G[W]);var ge=arguments.length-2;if(ge===1)$.children=pe;else if(1<ge){for(var _e=Array(ge),Ne=0;Ne<ge;Ne++)_e[Ne]=arguments[Ne+2];$.children=_e}if(b&&b.defaultProps)for(W in ge=b.defaultProps,ge)$[W]===void 0&&($[W]=ge[W]);return{$$typeof:s,type:b,key:ce,ref:ae,props:$,_owner:k.current}}function N(b,G){return{$$typeof:s,type:b.type,key:G,ref:b.ref,props:b.props,_owner:b._owner}}function C(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function F(b){var G={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(pe){return G[pe]})}var te=/\/+/g;function X(b,G){return typeof b=="object"&&b!==null&&b.key!=null?F(""+b.key):G.toString(36)}function ne(b,G,pe,W,$){var ce=typeof b;(ce==="undefined"||ce==="boolean")&&(b=null);var ae=!1;if(b===null)ae=!0;else switch(ce){case"string":case"number":ae=!0;break;case"object":switch(b.$$typeof){case s:case e:ae=!0}}if(ae)return ae=b,$=$(ae),b=W===""?"."+X(ae,0):W,R($)?(pe="",b!=null&&(pe=b.replace(te,"$&/")+"/"),ne($,G,pe,"",function(Ne){return Ne})):$!=null&&(C($)&&($=N($,pe+(!$.key||ae&&ae.key===$.key?"":(""+$.key).replace(te,"$&/")+"/")+b)),G.push($)),1;if(ae=0,W=W===""?".":W+":",R(b))for(var ge=0;ge<b.length;ge++){ce=b[ge];var _e=W+X(ce,ge);ae+=ne(ce,G,pe,_e,$)}else if(_e=_(b),typeof _e=="function")for(b=_e.call(b),ge=0;!(ce=b.next()).done;)ce=ce.value,_e=W+X(ce,ge++),ae+=ne(ce,G,pe,_e,$);else if(ce==="object")throw G=String(b),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ae}function ie(b,G,pe){if(b==null)return b;var W=[],$=0;return ne(b,W,"","",function(ce){return G.call(pe,ce,$++)}),W}function se(b){if(b._status===-1){var G=b._result;G=G(),G.then(function(pe){(b._status===0||b._status===-1)&&(b._status=1,b._result=pe)},function(pe){(b._status===0||b._status===-1)&&(b._status=2,b._result=pe)}),b._status===-1&&(b._status=0,b._result=G)}if(b._status===1)return b._result.default;throw b._result}var re={current:null},V={transition:null},he={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ie,forEach:function(b,G,pe){ie(b,function(){G.apply(this,arguments)},pe)},count:function(b){var G=0;return ie(b,function(){G++}),G},toArray:function(b){return ie(b,function(G){return G})||[]},only:function(b){if(!C(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},vt.Component=y,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=U,vt.StrictMode=r,vt.Suspense=p,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,vt.act=L,vt.cloneElement=function(b,G,pe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var W=E({},b.props),$=b.key,ce=b.ref,ae=b._owner;if(G!=null){if(G.ref!==void 0&&(ce=G.ref,ae=k.current),G.key!==void 0&&($=""+G.key),b.type&&b.type.defaultProps)var ge=b.type.defaultProps;for(_e in G)Z.call(G,_e)&&!z.hasOwnProperty(_e)&&(W[_e]=G[_e]===void 0&&ge!==void 0?ge[_e]:G[_e])}var _e=arguments.length-2;if(_e===1)W.children=pe;else if(1<_e){ge=Array(_e);for(var Ne=0;Ne<_e;Ne++)ge[Ne]=arguments[Ne+2];W.children=ge}return{$$typeof:s,type:b.type,key:$,ref:ce,props:W,_owner:ae}},vt.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:c,_context:b},b.Consumer=b},vt.createElement=H,vt.createFactory=function(b){var G=H.bind(null,b);return G.type=b,G},vt.createRef=function(){return{current:null}},vt.forwardRef=function(b){return{$$typeof:f,render:b}},vt.isValidElement=C,vt.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:se}},vt.memo=function(b,G){return{$$typeof:g,type:b,compare:G===void 0?null:G}},vt.startTransition=function(b){var G=V.transition;V.transition={};try{b()}finally{V.transition=G}},vt.unstable_act=L,vt.useCallback=function(b,G){return re.current.useCallback(b,G)},vt.useContext=function(b){return re.current.useContext(b)},vt.useDebugValue=function(){},vt.useDeferredValue=function(b){return re.current.useDeferredValue(b)},vt.useEffect=function(b,G){return re.current.useEffect(b,G)},vt.useId=function(){return re.current.useId()},vt.useImperativeHandle=function(b,G,pe){return re.current.useImperativeHandle(b,G,pe)},vt.useInsertionEffect=function(b,G){return re.current.useInsertionEffect(b,G)},vt.useLayoutEffect=function(b,G){return re.current.useLayoutEffect(b,G)},vt.useMemo=function(b,G){return re.current.useMemo(b,G)},vt.useReducer=function(b,G,pe){return re.current.useReducer(b,G,pe)},vt.useRef=function(b){return re.current.useRef(b)},vt.useState=function(b){return re.current.useState(b)},vt.useSyncExternalStore=function(b,G,pe){return re.current.useSyncExternalStore(b,G,pe)},vt.useTransition=function(){return re.current.useTransition()},vt.version="18.3.1",vt}var Vp;function Jd(){return Vp||(Vp=1,bu.exports=Ly()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Py(){if(Gp)return La;Gp=1;var s=Jd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var v,S={},_=null,M=null;g!==void 0&&(_=""+g),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(S[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)S[v]===void 0&&(S[v]=p[v]);return{$$typeof:e,type:f,key:_,ref:M,props:S,_owner:o.current}}return La.Fragment=n,La.jsx=u,La.jsxs=u,La}var jp;function Dy(){return jp||(jp=1,Mu.exports=Py()),Mu.exports}var h=Dy(),Ke=Jd();const og=ag(Ke);var tl={},wu={exports:{}},Ln={},Tu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Uy(){return Wp||(Wp=1,(function(s){function e(V,he){var L=V.length;V.push(he);e:for(;0<L;){var b=L-1>>>1,G=V[b];if(0<o(G,he))V[b]=he,V[L]=G,L=b;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var he=V[0],L=V.pop();if(L!==he){V[0]=L;e:for(var b=0,G=V.length,pe=G>>>1;b<pe;){var W=2*(b+1)-1,$=V[W],ce=W+1,ae=V[ce];if(0>o($,L))ce<G&&0>o(ae,$)?(V[b]=ae,V[ce]=L,b=ce):(V[b]=$,V[W]=L,b=W);else if(ce<G&&0>o(ae,L))V[b]=ae,V[ce]=L,b=ce;else break e}}return he}function o(V,he){var L=V.sortIndex-he.sortIndex;return L!==0?L:V.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],g=[],v=1,S=null,_=3,M=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(V){for(var he=n(g);he!==null;){if(he.callback===null)r(g);else if(he.startTime<=V)r(g),he.sortIndex=he.expirationTime,e(p,he);else break;he=n(g)}}function R(V){if(T=!1,D(V),!E)if(n(p)!==null)E=!0,se(Z);else{var he=n(g);he!==null&&re(R,he.startTime-V)}}function Z(V,he){E=!1,T&&(T=!1,x(H),H=-1),M=!0;var L=_;try{for(D(he),S=n(p);S!==null&&(!(S.expirationTime>he)||V&&!F());){var b=S.callback;if(typeof b=="function"){S.callback=null,_=S.priorityLevel;var G=b(S.expirationTime<=he);he=s.unstable_now(),typeof G=="function"?S.callback=G:S===n(p)&&r(p),D(he)}else r(p);S=n(p)}if(S!==null)var pe=!0;else{var W=n(g);W!==null&&re(R,W.startTime-he),pe=!1}return pe}finally{S=null,_=L,M=!1}}var k=!1,z=null,H=-1,N=5,C=-1;function F(){return!(s.unstable_now()-C<N)}function te(){if(z!==null){var V=s.unstable_now();C=V;var he=!0;try{he=z(!0,V)}finally{he?X():(k=!1,z=null)}}else k=!1}var X;if(typeof U=="function")X=function(){U(te)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ie=ne.port2;ne.port1.onmessage=te,X=function(){ie.postMessage(null)}}else X=function(){y(te,0)};function se(V){z=V,k||(k=!0,X())}function re(V,he){H=y(function(){V(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,se(Z))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(V){switch(_){case 1:case 2:case 3:var he=3;break;default:he=_}var L=_;_=he;try{return V()}finally{_=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,he){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var L=_;_=V;try{return he()}finally{_=L}},s.unstable_scheduleCallback=function(V,he,L){var b=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?b+L:b):L=b,V){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,V={id:v++,callback:he,priorityLevel:V,startTime:L,expirationTime:G,sortIndex:-1},L>b?(V.sortIndex=L,e(g,V),n(p)===null&&V===n(g)&&(T?(x(H),H=-1):T=!0,re(R,L-b))):(V.sortIndex=G,e(p,V),E||M||(E=!0,se(Z))),V},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(V){var he=_;return function(){var L=_;_=he;try{return V.apply(this,arguments)}finally{_=L}}}})(Au)),Au}var Xp;function Oy(){return Xp||(Xp=1,Tu.exports=Uy()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function zy(){if(Yp)return Ln;Yp=1;var s=Jd(),e=Oy();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function _(t){return p.call(S,t)?!0:p.call(v,t)?!1:g.test(t)?S[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,U);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,U);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,U);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,a,l){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,l)&&(a=null),l||d===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),F=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),V=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var L=Object.assign,b;function G(t){if(b===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+t}var pe=!1;function W(t,i){if(!t||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var l=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){l=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){l=ue}t()}}catch(ue){if(ue&&l&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=l.stack.split(`
`),w=d.length-1,O=m.length-1;1<=w&&0<=O&&d[w]!==m[O];)O--;for(;1<=w&&0<=O;w--,O--)if(d[w]!==m[O]){if(w!==1||O!==1)do if(w--,O--,0>O||d[w]!==m[O]){var j=`
`+d[w].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=w&&0<=O);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?G(t):""}function $(t){switch(t.tag){case 5:return G(t.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return t=W(t.type,!1),t;case 11:return t=W(t.type.render,!1),t;case 1:return t=W(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case k:return"Portal";case N:return"Profiler";case H:return"StrictMode";case X:return"Suspense";case ne:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case te:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}function ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ne(t){var i=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){l=""+w,m.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function He(t){t._valueTracker||(t._valueTracker=Ne(t))}function ze(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=_e(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function _t(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Je(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function et(t,i){Je(t,i);var a=ge(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?it(t,i.type,a):i.hasOwnProperty("defaultValue")&&it(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ae(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function it(t,i,a){(i!=="number"||tt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ie=Array.isArray;function P(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function A(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ie(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ge(a)}}function ve(t,i){var a=ge(i.value),l=ge(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Se(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Le,ke=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function nt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function at(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=nt(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var Ge=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(t,i){if(i){if(Ge[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ut(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var It=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,me=null,ye=null;function Oe(t){if(t=xa(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),Pe(t.stateNode,t.type,i))}}function Ue(t){me?ye?ye.push(t):ye=[t]:me=t}function dt(){if(me){var t=me,i=ye;if(ye=me=null,Oe(t),i)for(t=0;t<i.length;t++)Oe(i[t])}}function kt(t,i){return t(i)}function Kt(){}var Mt=!1;function wn(t,i,a){if(Mt)return t(i,a);Mt=!0;try{return kt(t,i,a)}finally{Mt=!1,(me!==null||ye!==null)&&(Kt(),dt())}}function _n(t,i){var a=t.stateNode;if(a===null)return null;var l=go(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var ts=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){ts=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{ts=!1}function Ai(t,i,a,l,d,m,w,O,j){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(Me){this.onError(Me)}}var Ci=!1,Ar=null,Cr=!1,Zi=null,$a={onError:function(t){Ci=!0,Ar=t}};function ns(t,i,a,l,d,m,w,O,j){Ci=!1,Ar=null,Ai.apply($a,arguments)}function Za(t,i,a,l,d,m,w,O,j){if(ns.apply(this,arguments),Ci){if(Ci){var ue=Ar;Ci=!1,Ar=null}else throw Error(n(198));Cr||(Cr=!0,Zi=ue)}}function gi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ka(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qa(t){if(gi(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=gi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Qa(d),t;if(m===l)return Qa(d),i;m=m.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=m;else{for(var w=!1,O=d.child;O;){if(O===a){w=!0,a=d,l=m;break}if(O===l){w=!0,l=d,a=m;break}O=O.sibling}if(!w){for(O=m.child;O;){if(O===a){w=!0,a=m,l=d;break}if(O===l){w=!0,l=m,a=d;break}O=O.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function I(t){return t=Wl(t),t!==null?K(t):null}function K(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=K(t);if(i!==null)return i;t=t.sibling}return null}var de=e.unstable_scheduleCallback,fe=e.unstable_cancelCallback,Q=e.unstable_shouldYield,Re=e.unstable_requestPaint,Te=e.unstable_now,qe=e.unstable_getCurrentPriorityLevel,Xe=e.unstable_ImmediatePriority,ot=e.unstable_UserBlockingPriority,ct=e.unstable_NormalPriority,$e=e.unstable_LowPriority,Et=e.unstable_IdlePriority,Rt=null,St=null;function fn(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Rt,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:At,Qe=Math.log,ni=Math.LN2;function At(t){return t>>>=0,t===0?32:31-(Qe(t)/ni|0)|0}var hn=64,ii=4194304;function Qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,m=t.pingedLanes,w=a&268435455;if(w!==0){var O=w&~d;O!==0?l=Qt(O):(m&=w,m!==0&&(l=Qt(m)))}else w=a&~d,w!==0?l=Qt(w):m!==0&&(l=Qt(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-ht(i),d=1<<a,l|=t[a],i&=~d;return l}function Ut(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var w=31-ht(m),O=1<<w,j=d[w];j===-1?((O&a)===0||(O&l)!==0)&&(d[w]=Ut(O,i)):j<=i&&(t.expiredLanes|=O),m&=~O}}function Ri(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sn(){var t=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),t}function Wn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ht(i),t[i]=a}function Ja(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-ht(a),m=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~m}}function Xl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-ht(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var Lt=0;function vf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var _f,Yl,Sf,Ef,Mf,ql=!1,eo=[],Ki=null,Qi=null,Ji=null,ta=new Map,na=new Map,er=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(i.pointerId)}}function ia(t,i,a,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=xa(i),i!==null&&Yl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function tx(t,i,a,l,d){switch(i){case"focusin":return Ki=ia(Ki,t,i,a,l,d),!0;case"dragenter":return Qi=ia(Qi,t,i,a,l,d),!0;case"mouseover":return Ji=ia(Ji,t,i,a,l,d),!0;case"pointerover":var m=d.pointerId;return ta.set(m,ia(ta.get(m)||null,t,i,a,l,d)),!0;case"gotpointercapture":return m=d.pointerId,na.set(m,ia(na.get(m)||null,t,i,a,l,d)),!0}return!1}function wf(t){var i=Rr(t.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ka(a),i!==null){t.blockedOn=i,Mf(t.priority,function(){Sf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);It=l,a.target.dispatchEvent(l),It=null}else return i=xa(a),i!==null&&Yl(i),t.blockedOn=a,!1;i.shift()}return!0}function Tf(t,i,a){to(t)&&a.delete(i)}function nx(){ql=!1,Ki!==null&&to(Ki)&&(Ki=null),Qi!==null&&to(Qi)&&(Qi=null),Ji!==null&&to(Ji)&&(Ji=null),ta.forEach(Tf),na.forEach(Tf)}function ra(t,i){t.blockedOn===i&&(t.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nx)))}function sa(t){function i(d){return ra(d,t)}if(0<eo.length){ra(eo[0],t);for(var a=1;a<eo.length;a++){var l=eo[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Ki!==null&&ra(Ki,t),Qi!==null&&ra(Qi,t),Ji!==null&&ra(Ji,t),ta.forEach(i),na.forEach(i),a=0;a<er.length;a++)l=er[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&er.shift()}var is=R.ReactCurrentBatchConfig,no=!0;function ix(t,i,a,l){var d=Lt,m=is.transition;is.transition=null;try{Lt=1,$l(t,i,a,l)}finally{Lt=d,is.transition=m}}function rx(t,i,a,l){var d=Lt,m=is.transition;is.transition=null;try{Lt=4,$l(t,i,a,l)}finally{Lt=d,is.transition=m}}function $l(t,i,a,l){if(no){var d=Zl(t,i,a,l);if(d===null)hc(t,i,l,io,a),bf(t,l);else if(tx(d,t,i,a,l))l.stopPropagation();else if(bf(t,l),i&4&&-1<ex.indexOf(t)){for(;d!==null;){var m=xa(d);if(m!==null&&_f(m),m=Zl(t,i,a,l),m===null&&hc(t,i,l,io,a),m===d)break;d=m}d!==null&&l.stopPropagation()}else hc(t,i,l,null,a)}}var io=null;function Zl(t,i,a,l){if(io=null,t=q(l),t=Rr(t),t!==null)if(i=gi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ka(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return io=t,null}function Af(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qe()){case Xe:return 1;case ot:return 4;case ct:case $e:return 16;case Et:return 536870912;default:return 16}default:return 16}}var tr=null,Kl=null,ro=null;function Cf(){if(ro)return ro;var t,i=Kl,a=i.length,l,d="value"in tr?tr.value:tr.textContent,m=d.length;for(t=0;t<a&&i[t]===d[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===d[m-l];l++);return ro=d.slice(t,1<l?1-l:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function Rf(){return!1}function zn(t){function i(a,l,d,m,w){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ao:Rf,this.isPropagationStopped=Rf,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=zn(rs),aa=L({},rs,{view:0,detail:0}),sx=zn(aa),Jl,ec,oa,oo=L({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Jl=t.screenX-oa.screenX,ec=t.screenY-oa.screenY):ec=Jl=0,oa=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),Nf=zn(oo),ax=L({},oo,{dataTransfer:0}),ox=zn(ax),lx=L({},aa,{relatedTarget:0}),tc=zn(lx),cx=L({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=zn(cx),dx=L({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=zn(dx),hx=L({},rs,{data:0}),If=zn(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=gx[t])?!!i[t]:!1}function nc(){return xx}var yx=L({},aa,{key:function(t){if(t.key){var i=px[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vx=zn(yx),_x=L({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=zn(_x),Sx=L({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),Ex=zn(Sx),Mx=L({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=zn(Mx),wx=L({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=zn(wx),Ax=[9,13,27,32],ic=f&&"CompositionEvent"in window,la=null;f&&"documentMode"in document&&(la=document.documentMode);var Cx=f&&"TextEvent"in window&&!la,Pf=f&&(!ic||la&&8<la&&11>=la),Df=" ",Uf=!1;function Of(t,i){switch(t){case"keyup":return Ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function Rx(t,i){switch(t){case"compositionend":return zf(i);case"keypress":return i.which!==32?null:(Uf=!0,Df);case"textInput":return t=i.data,t===Df&&Uf?null:t;default:return null}}function Nx(t,i){if(ss)return t==="compositionend"||!ic&&Of(t,i)?(t=Cf(),ro=Kl=tr=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pf&&i.locale!=="ko"?null:i.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ix[t.type]:i==="textarea"}function Ff(t,i,a,l){Ue(l),i=ho(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ca=null,ua=null;function Lx(t){ih(t,0)}function lo(t){var i=us(t);if(ze(i))return t}function Px(t,i){if(t==="change")return i}var Bf=!1;if(f){var rc;if(f){var sc="oninput"in document;if(!sc){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),sc=typeof Hf.oninput=="function"}rc=sc}else rc=!1;Bf=rc&&(!document.documentMode||9<document.documentMode)}function Vf(){ca&&(ca.detachEvent("onpropertychange",Gf),ua=ca=null)}function Gf(t){if(t.propertyName==="value"&&lo(ua)){var i=[];Ff(i,ua,t,q(t)),wn(Lx,i)}}function Dx(t,i,a){t==="focusin"?(Vf(),ca=i,ua=a,ca.attachEvent("onpropertychange",Gf)):t==="focusout"&&Vf()}function Ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lo(ua)}function Ox(t,i){if(t==="click")return lo(i)}function zx(t,i){if(t==="input"||t==="change")return lo(i)}function kx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ri=typeof Object.is=="function"?Object.is:kx;function da(t,i){if(ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!p.call(i,d)||!ri(t[d],i[d]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,i){var a=jf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function Xf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Yf(){for(var t=window,i=tt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=tt(t.document)}return i}function ac(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Fx(t){var i=Yf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Xf(a.ownerDocument.documentElement,a)){if(l!==null&&ac(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!t.extend&&m>l&&(d=l,l=m,m=d),d=Wf(a,m);var w=Wf(a,l);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bx=f&&"documentMode"in document&&11>=document.documentMode,as=null,oc=null,fa=null,lc=!1;function qf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lc||as==null||as!==tt(l)||(l=as,"selectionStart"in l&&ac(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&da(fa,l)||(fa=l,l=ho(oc,"onSelect"),0<l.length&&(i=new Ql("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=as)))}function co(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var os={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},cc={},$f={};f&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function uo(t){if(cc[t])return cc[t];if(!os[t])return t;var i=os[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in $f)return cc[t]=i[a];return t}var Zf=uo("animationend"),Kf=uo("animationiteration"),Qf=uo("animationstart"),Jf=uo("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,i){eh.set(t,i),c(i,[t])}for(var uc=0;uc<th.length;uc++){var dc=th[uc],Hx=dc.toLowerCase(),Vx=dc[0].toUpperCase()+dc.slice(1);nr(Hx,"on"+Vx)}nr(Zf,"onAnimationEnd"),nr(Kf,"onAnimationIteration"),nr(Qf,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Jf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function nh(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Za(l,i,void 0,t),t.currentTarget=null}function ih(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var w=l.length-1;0<=w;w--){var O=l[w],j=O.instance,ue=O.currentTarget;if(O=O.listener,j!==m&&d.isPropagationStopped())break e;nh(d,O,ue),m=j}else for(w=0;w<l.length;w++){if(O=l[w],j=O.instance,ue=O.currentTarget,O=O.listener,j!==m&&d.isPropagationStopped())break e;nh(d,O,ue),m=j}}}if(Cr)throw t=Zi,Cr=!1,Zi=null,t}function Ft(t,i){var a=i[vc];a===void 0&&(a=i[vc]=new Set);var l=t+"__bubble";a.has(l)||(rh(i,t,2,!1),a.add(l))}function fc(t,i,a){var l=0;i&&(l|=4),rh(a,t,l,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[fo]){t[fo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||fc(a,!1,t),fc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fo]||(i[fo]=!0,fc("selectionchange",!1,i))}}function rh(t,i,a,l){switch(Af(i)){case 1:var d=ix;break;case 4:d=rx;break;default:d=$l}a=d.bind(null,i,a,t),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function hc(t,i,a,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var O=l.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(w===4)for(w=l.return;w!==null;){var j=w.tag;if((j===3||j===4)&&(j=w.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;w=w.return}for(;O!==null;){if(w=Rr(O),w===null)return;if(j=w.tag,j===5||j===6){l=m=w;continue e}O=O.parentNode}}l=l.return}wn(function(){var ue=m,Me=q(a),we=[];e:{var Ee=eh.get(t);if(Ee!==void 0){var Fe=Ql,je=t;switch(t){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":Fe=vx;break;case"focusin":je="focus",Fe=tc;break;case"focusout":je="blur",Fe=tc;break;case"beforeblur":case"afterblur":Fe=tc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Ex;break;case Zf:case Kf:case Qf:Fe=ux;break;case Jf:Fe=bx;break;case"scroll":Fe=sx;break;case"wheel":Fe=Tx;break;case"copy":case"cut":case"paste":Fe=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Lf}var Ye=(i&4)!==0,Yt=!Ye&&t==="scroll",ee=Ye?Ee!==null?Ee+"Capture":null:Ee;Ye=[];for(var Y=ue,oe;Y!==null;){oe=Y;var Ce=oe.stateNode;if(oe.tag===5&&Ce!==null&&(oe=Ce,ee!==null&&(Ce=_n(Y,ee),Ce!=null&&Ye.push(ma(Y,Ce,oe)))),Yt)break;Y=Y.return}0<Ye.length&&(Ee=new Fe(Ee,je,null,a,Me),we.push({event:Ee,listeners:Ye}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",Ee&&a!==It&&(je=a.relatedTarget||a.fromElement)&&(Rr(je)||je[Ni]))break e;if((Fe||Ee)&&(Ee=Me.window===Me?Me:(Ee=Me.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Fe?(je=a.relatedTarget||a.toElement,Fe=ue,je=je?Rr(je):null,je!==null&&(Yt=gi(je),je!==Yt||je.tag!==5&&je.tag!==6)&&(je=null)):(Fe=null,je=ue),Fe!==je)){if(Ye=Nf,Ce="onMouseLeave",ee="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Lf,Ce="onPointerLeave",ee="onPointerEnter",Y="pointer"),Yt=Fe==null?Ee:us(Fe),oe=je==null?Ee:us(je),Ee=new Ye(Ce,Y+"leave",Fe,a,Me),Ee.target=Yt,Ee.relatedTarget=oe,Ce=null,Rr(Me)===ue&&(Ye=new Ye(ee,Y+"enter",je,a,Me),Ye.target=oe,Ye.relatedTarget=Yt,Ce=Ye),Yt=Ce,Fe&&je)t:{for(Ye=Fe,ee=je,Y=0,oe=Ye;oe;oe=ls(oe))Y++;for(oe=0,Ce=ee;Ce;Ce=ls(Ce))oe++;for(;0<Y-oe;)Ye=ls(Ye),Y--;for(;0<oe-Y;)ee=ls(ee),oe--;for(;Y--;){if(Ye===ee||ee!==null&&Ye===ee.alternate)break t;Ye=ls(Ye),ee=ls(ee)}Ye=null}else Ye=null;Fe!==null&&sh(we,Ee,Fe,Ye,!1),je!==null&&Yt!==null&&sh(we,Yt,je,Ye,!0)}}e:{if(Ee=ue?us(ue):window,Fe=Ee.nodeName&&Ee.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&Ee.type==="file")var Ze=Px;else if(kf(Ee))if(Bf)Ze=zx;else{Ze=Ux;var rt=Dx}else(Fe=Ee.nodeName)&&Fe.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Ze=Ox);if(Ze&&(Ze=Ze(t,ue))){Ff(we,Ze,a,Me);break e}rt&&rt(t,Ee,ue),t==="focusout"&&(rt=Ee._wrapperState)&&rt.controlled&&Ee.type==="number"&&it(Ee,"number",Ee.value)}switch(rt=ue?us(ue):window,t){case"focusin":(kf(rt)||rt.contentEditable==="true")&&(as=rt,oc=ue,fa=null);break;case"focusout":fa=oc=as=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,qf(we,a,Me);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":qf(we,a,Me)}var st;if(ic)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ss?Of(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(Pf&&a.locale!=="ko"&&(ss||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ss&&(st=Cf()):(tr=Me,Kl="value"in tr?tr.value:tr.textContent,ss=!0)),rt=ho(ue,lt),0<rt.length&&(lt=new If(lt,t,null,a,Me),we.push({event:lt,listeners:rt}),st?lt.data=st:(st=zf(a),st!==null&&(lt.data=st)))),(st=Cx?Rx(t,a):Nx(t,a))&&(ue=ho(ue,"onBeforeInput"),0<ue.length&&(Me=new If("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:ue}),Me.data=st))}ih(we,i)})}function ma(t,i,a){return{instance:t,listener:i,currentTarget:a}}function ho(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=_n(t,a),m!=null&&l.unshift(ma(t,m,d)),m=_n(t,i),m!=null&&l.push(ma(t,m,d))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sh(t,i,a,l,d){for(var m=i._reactName,w=[];a!==null&&a!==l;){var O=a,j=O.alternate,ue=O.stateNode;if(j!==null&&j===l)break;O.tag===5&&ue!==null&&(O=ue,d?(j=_n(a,m),j!=null&&w.unshift(ma(a,j,O))):d||(j=_n(a,m),j!=null&&w.push(ma(a,j,O)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var jx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function ah(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Wx,"")}function po(t,i,a){if(i=ah(i),ah(t)!==i&&a)throw Error(n(425))}function mo(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(t){return oh.resolve(null).then(t).catch(qx)}:xc;function qx(t){setTimeout(function(){throw t})}function yc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),sa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);sa(i)}function ir(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function lh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),yi="__reactFiber$"+cs,ga="__reactProps$"+cs,Ni="__reactContainer$"+cs,vc="__reactEvents$"+cs,$x="__reactListeners$"+cs,Zx="__reactHandles$"+cs;function Rr(t){var i=t[yi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ni]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=lh(t);t!==null;){if(a=t[yi])return a;t=lh(t)}return i}t=a,a=t.parentNode}return null}function xa(t){return t=t[yi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[ga]||null}var _c=[],ds=-1;function rr(t){return{current:t}}function Bt(t){0>ds||(t.current=_c[ds],_c[ds]=null,ds--)}function zt(t,i){ds++,_c[ds]=t.current,t.current=i}var sr={},pn=rr(sr),An=rr(!1),Nr=sr;function fs(t,i){var a=t.type.contextTypes;if(!a)return sr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(t){return t=t.childContextTypes,t!=null}function xo(){Bt(An),Bt(pn)}function ch(t,i,a){if(pn.current!==sr)throw Error(n(168));zt(pn,i),zt(An,a)}function uh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ae(t)||"Unknown",d));return L({},a,l)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Nr=pn.current,zt(pn,t),zt(An,An.current),!0}function dh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=uh(t,i,Nr),l.__reactInternalMemoizedMergedChildContext=t,Bt(An),Bt(pn),zt(pn,t)):Bt(An),zt(An,a)}var Ii=null,vo=!1,Sc=!1;function fh(t){Ii===null?Ii=[t]:Ii.push(t)}function Kx(t){vo=!0,fh(t)}function ar(){if(!Sc&&Ii!==null){Sc=!0;var t=0,i=Lt;try{var a=Ii;for(Lt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ii=null,vo=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(t+1)),de(Xe,ar),d}finally{Lt=i,Sc=!1}}return null}var hs=[],ps=0,_o=null,So=0,Xn=[],Yn=0,Ir=null,Li=1,Pi="";function Lr(t,i){hs[ps++]=So,hs[ps++]=_o,_o=t,So=i}function hh(t,i,a){Xn[Yn++]=Li,Xn[Yn++]=Pi,Xn[Yn++]=Ir,Ir=t;var l=Li;t=Pi;var d=32-ht(l)-1;l&=~(1<<d),a+=1;var m=32-ht(i)+d;if(30<m){var w=d-d%5;m=(l&(1<<w)-1).toString(32),l>>=w,d-=w,Li=1<<32-ht(i)+d|a<<d|l,Pi=m+t}else Li=1<<m|a<<d|l,Pi=t}function Ec(t){t.return!==null&&(Lr(t,1),hh(t,1,0))}function Mc(t){for(;t===_o;)_o=hs[--ps],hs[ps]=null,So=hs[--ps],hs[ps]=null;for(;t===Ir;)Ir=Xn[--Yn],Xn[Yn]=null,Pi=Xn[--Yn],Xn[Yn]=null,Li=Xn[--Yn],Xn[Yn]=null}var kn=null,Fn=null,Ht=!1,si=null;function ph(t,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function mh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,Fn=ir(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:Li,overflow:Pi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,Fn=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(Ht){var i=Fn;if(i){var a=i;if(!mh(t,i)){if(bc(t))throw Error(n(418));i=ir(a.nextSibling);var l=kn;i&&mh(t,i)?ph(l,a):(t.flags=t.flags&-4097|2,Ht=!1,kn=t)}}else{if(bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,kn=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Eo(t){if(t!==kn)return!1;if(!Ht)return gh(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=Fn)){if(bc(t))throw xh(),Error(n(418));for(;i;)ph(t,i),i=ir(i.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Fn=ir(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=kn?ir(t.stateNode.nextSibling):null;return!0}function xh(){for(var t=Fn;t;)t=ir(t.nextSibling)}function ms(){Fn=kn=null,Ht=!1}function Tc(t){si===null?si=[t]:si.push(t)}var Qx=R.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var O=d.refs;w===null?delete O[m]:O[m]=w},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function yh(t){var i=t._init;return i(t._payload)}function vh(t){function i(ee,Y){if(t){var oe=ee.deletions;oe===null?(ee.deletions=[Y],ee.flags|=16):oe.push(Y)}}function a(ee,Y){if(!t)return null;for(;Y!==null;)i(ee,Y),Y=Y.sibling;return null}function l(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function d(ee,Y){return ee=pr(ee,Y),ee.index=0,ee.sibling=null,ee}function m(ee,Y,oe){return ee.index=oe,t?(oe=ee.alternate,oe!==null?(oe=oe.index,oe<Y?(ee.flags|=2,Y):oe):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function w(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function O(ee,Y,oe,Ce){return Y===null||Y.tag!==6?(Y=xu(oe,ee.mode,Ce),Y.return=ee,Y):(Y=d(Y,oe),Y.return=ee,Y)}function j(ee,Y,oe,Ce){var Ze=oe.type;return Ze===z?Me(ee,Y,oe.props.children,Ce,oe.key):Y!==null&&(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===se&&yh(Ze)===Y.type)?(Ce=d(Y,oe.props),Ce.ref=ya(ee,Y,oe),Ce.return=ee,Ce):(Ce=Yo(oe.type,oe.key,oe.props,null,ee.mode,Ce),Ce.ref=ya(ee,Y,oe),Ce.return=ee,Ce)}function ue(ee,Y,oe,Ce){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==oe.containerInfo||Y.stateNode.implementation!==oe.implementation?(Y=yu(oe,ee.mode,Ce),Y.return=ee,Y):(Y=d(Y,oe.children||[]),Y.return=ee,Y)}function Me(ee,Y,oe,Ce,Ze){return Y===null||Y.tag!==7?(Y=Br(oe,ee.mode,Ce,Ze),Y.return=ee,Y):(Y=d(Y,oe),Y.return=ee,Y)}function we(ee,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=xu(""+Y,ee.mode,oe),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Z:return oe=Yo(Y.type,Y.key,Y.props,null,ee.mode,oe),oe.ref=ya(ee,null,Y),oe.return=ee,oe;case k:return Y=yu(Y,ee.mode,oe),Y.return=ee,Y;case se:var Ce=Y._init;return we(ee,Ce(Y._payload),oe)}if(Ie(Y)||he(Y))return Y=Br(Y,ee.mode,oe,null),Y.return=ee,Y;Mo(ee,Y)}return null}function Ee(ee,Y,oe,Ce){var Ze=Y!==null?Y.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return Ze!==null?null:O(ee,Y,""+oe,Ce);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case Z:return oe.key===Ze?j(ee,Y,oe,Ce):null;case k:return oe.key===Ze?ue(ee,Y,oe,Ce):null;case se:return Ze=oe._init,Ee(ee,Y,Ze(oe._payload),Ce)}if(Ie(oe)||he(oe))return Ze!==null?null:Me(ee,Y,oe,Ce,null);Mo(ee,oe)}return null}function Fe(ee,Y,oe,Ce,Ze){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ee=ee.get(oe)||null,O(Y,ee,""+Ce,Ze);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case Z:return ee=ee.get(Ce.key===null?oe:Ce.key)||null,j(Y,ee,Ce,Ze);case k:return ee=ee.get(Ce.key===null?oe:Ce.key)||null,ue(Y,ee,Ce,Ze);case se:var rt=Ce._init;return Fe(ee,Y,oe,rt(Ce._payload),Ze)}if(Ie(Ce)||he(Ce))return ee=ee.get(oe)||null,Me(Y,ee,Ce,Ze,null);Mo(Y,Ce)}return null}function je(ee,Y,oe,Ce){for(var Ze=null,rt=null,st=Y,lt=Y=0,on=null;st!==null&&lt<oe.length;lt++){st.index>lt?(on=st,st=null):on=st.sibling;var Ct=Ee(ee,st,oe[lt],Ce);if(Ct===null){st===null&&(st=on);break}t&&st&&Ct.alternate===null&&i(ee,st),Y=m(Ct,Y,lt),rt===null?Ze=Ct:rt.sibling=Ct,rt=Ct,st=on}if(lt===oe.length)return a(ee,st),Ht&&Lr(ee,lt),Ze;if(st===null){for(;lt<oe.length;lt++)st=we(ee,oe[lt],Ce),st!==null&&(Y=m(st,Y,lt),rt===null?Ze=st:rt.sibling=st,rt=st);return Ht&&Lr(ee,lt),Ze}for(st=l(ee,st);lt<oe.length;lt++)on=Fe(st,ee,lt,oe[lt],Ce),on!==null&&(t&&on.alternate!==null&&st.delete(on.key===null?lt:on.key),Y=m(on,Y,lt),rt===null?Ze=on:rt.sibling=on,rt=on);return t&&st.forEach(function(mr){return i(ee,mr)}),Ht&&Lr(ee,lt),Ze}function Ye(ee,Y,oe,Ce){var Ze=he(oe);if(typeof Ze!="function")throw Error(n(150));if(oe=Ze.call(oe),oe==null)throw Error(n(151));for(var rt=Ze=null,st=Y,lt=Y=0,on=null,Ct=oe.next();st!==null&&!Ct.done;lt++,Ct=oe.next()){st.index>lt?(on=st,st=null):on=st.sibling;var mr=Ee(ee,st,Ct.value,Ce);if(mr===null){st===null&&(st=on);break}t&&st&&mr.alternate===null&&i(ee,st),Y=m(mr,Y,lt),rt===null?Ze=mr:rt.sibling=mr,rt=mr,st=on}if(Ct.done)return a(ee,st),Ht&&Lr(ee,lt),Ze;if(st===null){for(;!Ct.done;lt++,Ct=oe.next())Ct=we(ee,Ct.value,Ce),Ct!==null&&(Y=m(Ct,Y,lt),rt===null?Ze=Ct:rt.sibling=Ct,rt=Ct);return Ht&&Lr(ee,lt),Ze}for(st=l(ee,st);!Ct.done;lt++,Ct=oe.next())Ct=Fe(st,ee,lt,Ct.value,Ce),Ct!==null&&(t&&Ct.alternate!==null&&st.delete(Ct.key===null?lt:Ct.key),Y=m(Ct,Y,lt),rt===null?Ze=Ct:rt.sibling=Ct,rt=Ct);return t&&st.forEach(function(Iy){return i(ee,Iy)}),Ht&&Lr(ee,lt),Ze}function Yt(ee,Y,oe,Ce){if(typeof oe=="object"&&oe!==null&&oe.type===z&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case Z:e:{for(var Ze=oe.key,rt=Y;rt!==null;){if(rt.key===Ze){if(Ze=oe.type,Ze===z){if(rt.tag===7){a(ee,rt.sibling),Y=d(rt,oe.props.children),Y.return=ee,ee=Y;break e}}else if(rt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===se&&yh(Ze)===rt.type){a(ee,rt.sibling),Y=d(rt,oe.props),Y.ref=ya(ee,rt,oe),Y.return=ee,ee=Y;break e}a(ee,rt);break}else i(ee,rt);rt=rt.sibling}oe.type===z?(Y=Br(oe.props.children,ee.mode,Ce,oe.key),Y.return=ee,ee=Y):(Ce=Yo(oe.type,oe.key,oe.props,null,ee.mode,Ce),Ce.ref=ya(ee,Y,oe),Ce.return=ee,ee=Ce)}return w(ee);case k:e:{for(rt=oe.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===oe.containerInfo&&Y.stateNode.implementation===oe.implementation){a(ee,Y.sibling),Y=d(Y,oe.children||[]),Y.return=ee,ee=Y;break e}else{a(ee,Y);break}else i(ee,Y);Y=Y.sibling}Y=yu(oe,ee.mode,Ce),Y.return=ee,ee=Y}return w(ee);case se:return rt=oe._init,Yt(ee,Y,rt(oe._payload),Ce)}if(Ie(oe))return je(ee,Y,oe,Ce);if(he(oe))return Ye(ee,Y,oe,Ce);Mo(ee,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Y=d(Y,oe),Y.return=ee,ee=Y):(a(ee,Y),Y=xu(oe,ee.mode,Ce),Y.return=ee,ee=Y),w(ee)):a(ee,Y)}return Yt}var gs=vh(!0),_h=vh(!1),bo=rr(null),wo=null,xs=null,Ac=null;function Cc(){Ac=xs=wo=null}function Rc(t){var i=bo.current;Bt(bo),t._currentValue=i}function Nc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ys(t,i){wo=t,Ac=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(wo===null)throw Error(n(308));xs=t,wo.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Pr=null;function Ic(t){Pr===null?Pr=[t]:Pr.push(t)}function Sh(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Ic(i)):(a.next=d.next,d.next=a),i.interleaved=a,Di(t,l)}function Di(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var or=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Di(t,a)}return d=l.interleaved,d===null?(i.next=i,Ic(l)):(i.next=d.next,d.next=i),l.interleaved=i,Di(t,a)}function To(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Xl(t,a)}}function Mh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ao(t,i,a,l){var d=t.updateQueue;or=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var j=O,ue=j.next;j.next=null,w===null?m=ue:w.next=ue,w=j;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==w&&(O===null?Me.firstBaseUpdate=ue:O.next=ue,Me.lastBaseUpdate=j))}if(m!==null){var we=d.baseState;w=0,Me=ue=j=null,O=m;do{var Ee=O.lane,Fe=O.eventTime;if((l&Ee)===Ee){Me!==null&&(Me=Me.next={eventTime:Fe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var je=t,Ye=O;switch(Ee=i,Fe=a,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){we=je.call(Fe,we,Ee);break e}we=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,Ee=typeof je=="function"?je.call(Fe,we,Ee):je,Ee==null)break e;we=L({},we,Ee);break e;case 2:or=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,Ee=d.effects,Ee===null?d.effects=[O]:Ee.push(O))}else Fe={eventTime:Fe,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(ue=Me=Fe,j=we):Me=Me.next=Fe,w|=Ee;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,d.lastBaseUpdate=Ee,d.shared.pending=null}}while(!0);if(Me===null&&(j=we),d.baseState=j,d.firstBaseUpdate=ue,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Or|=w,t.lanes=w,t.memoizedState=we}}function bh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var va={},vi=rr(va),_a=rr(va),Sa=rr(va);function Dr(t){if(t===va)throw Error(n(174));return t}function Pc(t,i){switch(zt(Sa,i),zt(_a,t),zt(vi,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}Bt(vi),zt(vi,i)}function vs(){Bt(vi),Bt(_a),Bt(Sa)}function wh(t){Dr(Sa.current);var i=Dr(vi.current),a=We(i,t.type);i!==a&&(zt(_a,t),zt(vi,a))}function Dc(t){_a.current===t&&(Bt(vi),Bt(_a))}var Gt=rr(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Oc(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Ro=R.ReactCurrentDispatcher,zc=R.ReactCurrentBatchConfig,Ur=0,jt=null,Jt=null,sn=null,No=!1,Ea=!1,Ma=0,Jx=0;function mn(){throw Error(n(321))}function kc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ri(t[a],i[a]))return!1;return!0}function Fc(t,i,a,l,d,m){if(Ur=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?iy:ry,t=a(l,d),Ea){m=0;do{if(Ea=!1,Ma=0,25<=m)throw Error(n(301));m+=1,sn=Jt=null,i.updateQueue=null,Ro.current=sy,t=a(l,d)}while(Ea)}if(Ro.current=Po,i=Jt!==null&&Jt.next!==null,Ur=0,sn=Jt=jt=null,No=!1,i)throw Error(n(300));return t}function Bc(){var t=Ma!==0;return Ma=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?jt.memoizedState=sn=t:sn=sn.next=t,sn}function $n(){if(Jt===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=sn===null?jt.memoizedState:sn.next;if(i!==null)sn=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?jt.memoizedState=sn=t:sn=sn.next=t}return sn}function ba(t,i){return typeof i=="function"?i(t):i}function Hc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Jt,d=l.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}l.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,l=l.baseState;var O=w=null,j=null,ue=m;do{var Me=ue.lane;if((Ur&Me)===Me)j!==null&&(j=j.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),l=ue.hasEagerState?ue.eagerState:t(l,ue.action);else{var we={lane:Me,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};j===null?(O=j=we,w=l):j=j.next=we,jt.lanes|=Me,Or|=Me}ue=ue.next}while(ue!==null&&ue!==m);j===null?w=l:j.next=O,ri(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=j,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do m=d.lane,jt.lanes|=m,Or|=m,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Vc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=t(m,w.action),w=w.next;while(w!==d);ri(m,i.memoizedState)||(Rn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function Th(){}function Ah(t,i){var a=jt,l=$n(),d=i(),m=!ri(l.memoizedState,d);if(m&&(l.memoizedState=d,Rn=!0),l=l.queue,Gc(Nh.bind(null,a,l,t),[t]),l.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,wa(9,Rh.bind(null,a,l,d,i),void 0,null),an===null)throw Error(n(349));(Ur&30)!==0||Ch(a,i,d)}return d}function Ch(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Rh(t,i,a,l){i.value=a,i.getSnapshot=l,Ih(i)&&Lh(t)}function Nh(t,i,a){return a(function(){Ih(i)&&Lh(t)})}function Ih(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ri(t,a)}catch{return!0}}function Lh(t){var i=Di(t,1);i!==null&&ci(i,t,1,-1)}function Ph(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i.queue=t,t=t.dispatch=ny.bind(null,jt,t),[i.memoizedState,t]}function wa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Dh(){return $n().memoizedState}function Io(t,i,a,l){var d=_i();jt.flags|=t,d.memoizedState=wa(1|i,a,void 0,l===void 0?null:l)}function Lo(t,i,a,l){var d=$n();l=l===void 0?null:l;var m=void 0;if(Jt!==null){var w=Jt.memoizedState;if(m=w.destroy,l!==null&&kc(l,w.deps)){d.memoizedState=wa(i,a,m,l);return}}jt.flags|=t,d.memoizedState=wa(1|i,a,m,l)}function Uh(t,i){return Io(8390656,8,t,i)}function Gc(t,i){return Lo(2048,8,t,i)}function Oh(t,i){return Lo(4,2,t,i)}function zh(t,i){return Lo(4,4,t,i)}function kh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Fh(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4,4,kh.bind(null,i,t),a)}function jc(){}function Bh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Hh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Vh(t,i,a){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=a):(ri(a,i)||(a=Sn(),jt.lanes|=a,Or|=a,t.baseState=!0),i)}function ey(t,i){var a=Lt;Lt=a!==0&&4>a?a:4,t(!0);var l=zc.transition;zc.transition={};try{t(!1),i()}finally{Lt=a,zc.transition=l}}function Gh(){return $n().memoizedState}function ty(t,i,a){var l=fr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},jh(t))Wh(i,a);else if(a=Sh(t,i,a,l),a!==null){var d=Mn();ci(a,t,l,d),Xh(a,i,l)}}function ny(t,i,a){var l=fr(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(jh(t))Wh(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,O=m(w,a);if(d.hasEagerState=!0,d.eagerState=O,ri(O,w)){var j=i.interleaved;j===null?(d.next=d,Ic(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}a=Sh(t,i,d,l),a!==null&&(d=Mn(),ci(a,t,l,d),Xh(a,i,l))}}function jh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Wh(t,i){Ea=No=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Xh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Xl(t,a)}}var Po={readContext:qn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},iy={readContext:qn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Uh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Io(4194308,4,kh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Io(4194308,4,t,i)},useInsertionEffect:function(t,i){return Io(4,2,t,i)},useMemo:function(t,i){var a=_i();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=_i();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=ty.bind(null,jt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Ph,useDebugValue:jc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Ph(!1),i=t[0];return t=ey.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=jt,d=_i();if(Ht){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),an===null)throw Error(n(349));(Ur&30)!==0||Ch(l,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Uh(Nh.bind(null,l,m,t),[t]),l.flags|=2048,wa(9,Rh.bind(null,l,m,a,i),void 0,null),a},useId:function(){var t=_i(),i=an.identifierPrefix;if(Ht){var a=Pi,l=Li;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Jx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},ry={readContext:qn,useCallback:Bh,useContext:qn,useEffect:Gc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Hh,useReducer:Hc,useRef:Dh,useState:function(){return Hc(ba)},useDebugValue:jc,useDeferredValue:function(t){var i=$n();return Vh(i,Jt.memoizedState,t)},useTransition:function(){var t=Hc(ba)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Gh,unstable_isNewReconciler:!1},sy={readContext:qn,useCallback:Bh,useContext:qn,useEffect:Gc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Hh,useReducer:Vc,useRef:Dh,useState:function(){return Vc(ba)},useDebugValue:jc,useDeferredValue:function(t){var i=$n();return Jt===null?i.memoizedState=t:Vh(i,Jt.memoizedState,t)},useTransition:function(){var t=Vc(ba)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Gh,unstable_isNewReconciler:!1};function ai(t,i){if(t&&t.defaultProps){i=L({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Wc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:L({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Do={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Mn(),d=fr(t),m=Ui(l,d);m.payload=i,a!=null&&(m.callback=a),i=lr(t,m,d),i!==null&&(ci(i,t,d,l),To(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Mn(),d=fr(t),m=Ui(l,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=lr(t,m,d),i!==null&&(ci(i,t,d,l),To(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Mn(),l=fr(t),d=Ui(a,l);d.tag=2,i!=null&&(d.callback=i),i=lr(t,d,l),i!==null&&(ci(i,t,l,a),To(i,t,l))}};function Yh(t,i,a,l,d,m,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,w):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(d,m):!0}function qh(t,i,a){var l=!1,d=sr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(d=Cn(i)?Nr:pn.current,l=i.contextTypes,m=(l=l!=null)?fs(t,d):sr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),i}function $h(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function Xc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Lc(t);var m=i.contextType;typeof m=="object"&&m!==null?d.context=qn(m):(m=Cn(i)?Nr:pn.current,d.context=fs(t,m)),d.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Wc(t,i,m,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Do.enqueueReplaceState(d,d.state,null),Ao(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var a="",l=i;do a+=$(l),l=l.return;while(l);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:d,digest:null}}function Yc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function qc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ay=typeof WeakMap=="function"?WeakMap:Map;function Zh(t,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Ho||(Ho=!0,cu=l),qc(t,i)},a}function Kh(t,i,a){a=Ui(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){qc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){qc(t,i),typeof l!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Qh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new ay;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=_y.bind(null,t,i,a),i.then(t,t))}function Jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ep(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,lr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var oy=R.ReactCurrentOwner,Rn=!1;function En(t,i,a,l){i.child=t===null?_h(i,null,a,l):gs(i,t.child,a,l)}function tp(t,i,a,l,d){a=a.render;var m=i.ref;return ys(i,d),l=Fc(t,i,a,l,m,d),a=Bc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Oi(t,i,d)):(Ht&&a&&Ec(i),i.flags|=1,En(t,i,l,d),i.child)}function np(t,i,a,l,d){if(t===null){var m=a.type;return typeof m=="function"&&!gu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,ip(t,i,m,l,d)):(t=Yo(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(w,l)&&t.ref===i.ref)return Oi(t,i,d)}return i.flags|=1,t=pr(m,l),t.ref=i.ref,t.return=i,i.child=t}function ip(t,i,a,l,d){if(t!==null){var m=t.memoizedProps;if(da(m,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=m,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,Oi(t,i,d)}return $c(t,i,a,l,d)}function rp(t,i,a){var l=i.pendingProps,d=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Es,Bn),Bn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,zt(Es,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,zt(Es,Bn),Bn|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,zt(Es,Bn),Bn|=l;return En(t,i,d,a),i.child}function sp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function $c(t,i,a,l,d){var m=Cn(a)?Nr:pn.current;return m=fs(i,m),ys(i,d),a=Fc(t,i,a,l,m,d),l=Bc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Oi(t,i,d)):(Ht&&l&&Ec(i),i.flags|=1,En(t,i,a,d),i.child)}function ap(t,i,a,l,d){if(Cn(a)){var m=!0;yo(i)}else m=!1;if(ys(i,d),i.stateNode===null)Oo(t,i),qh(i,a,l),Xc(i,a,l,d),l=!0;else if(t===null){var w=i.stateNode,O=i.memoizedProps;w.props=O;var j=w.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=qn(ue):(ue=Cn(a)?Nr:pn.current,ue=fs(i,ue));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==l||j!==ue)&&$h(i,w,l,ue),or=!1;var Ee=i.memoizedState;w.state=Ee,Ao(i,l,w,d),j=i.memoizedState,O!==l||Ee!==j||An.current||or?(typeof Me=="function"&&(Wc(i,a,Me,l),j=i.memoizedState),(O=or||Yh(i,a,O,l,Ee,j,ue))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=j),w.props=l,w.state=j,w.context=ue,l=O):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Eh(t,i),O=i.memoizedProps,ue=i.type===i.elementType?O:ai(i.type,O),w.props=ue,we=i.pendingProps,Ee=w.context,j=a.contextType,typeof j=="object"&&j!==null?j=qn(j):(j=Cn(a)?Nr:pn.current,j=fs(i,j));var Fe=a.getDerivedStateFromProps;(Me=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==we||Ee!==j)&&$h(i,w,l,j),or=!1,Ee=i.memoizedState,w.state=Ee,Ao(i,l,w,d);var je=i.memoizedState;O!==we||Ee!==je||An.current||or?(typeof Fe=="function"&&(Wc(i,a,Fe,l),je=i.memoizedState),(ue=or||Yh(i,a,ue,l,Ee,je,j)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,je,j),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,je,j)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=je),w.props=l,w.state=je,w.context=j,l=ue):(typeof w.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return Zc(t,i,a,l,m,d)}function Zc(t,i,a,l,d,m){sp(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return d&&dh(i,a,!1),Oi(t,i,m);l=i.stateNode,oy.current=i;var O=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=gs(i,t.child,null,m),i.child=gs(i,null,O,m)):En(t,i,O,m),i.memoizedState=l.state,d&&dh(i,a,!0),i.child}function op(t){var i=t.stateNode;i.pendingContext?ch(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ch(t,i.context,!1),Pc(t,i.containerInfo)}function lp(t,i,a,l,d){return ms(),Tc(d),i.flags|=256,En(t,i,a,l),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,i,a){var l=i.pendingProps,d=Gt.current,m=!1,w=(i.flags&128)!==0,O;if((O=w)||(O=t!==null&&t.memoizedState===null?!1:(d&2)!==0),O?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),zt(Gt,d&1),t===null)return wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,m?(l=i.mode,m=i.child,w={mode:"hidden",children:w},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=qo(w,l,0,null),t=Br(t,l,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=Qc(a),i.memoizedState=Kc,t):Jc(i,w));if(d=t.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return ly(t,i,w,l,O,d,a);if(m){m=l.fallback,w=i.mode,d=t.child,O=d.sibling;var j={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=j,i.deletions=null):(l=pr(d,j),l.subtreeFlags=d.subtreeFlags&14680064),O!==null?m=pr(O,m):(m=Br(m,w,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,w=t.child.memoizedState,w=w===null?Qc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=t.childLanes&~a,i.memoizedState=Kc,l}return m=t.child,t=m.sibling,l=pr(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Jc(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Uo(t,i,a,l){return l!==null&&Tc(l),gs(i,t.child,null,a),t=Jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ly(t,i,a,l,d,m,w){if(a)return i.flags&256?(i.flags&=-257,l=Yc(Error(n(422))),Uo(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,d=i.mode,l=qo({mode:"visible",children:l.children},d,0,null),m=Br(m,d,w,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,w),i.child.memoizedState=Qc(w),i.memoizedState=Kc,m);if((i.mode&1)===0)return Uo(t,i,w,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var O=l.dgst;return l=O,m=Error(n(419)),l=Yc(m,l,void 0),Uo(t,i,w,l)}if(O=(w&t.childLanes)!==0,Rn||O){if(l=an,l!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Di(t,d),ci(l,t,d,-1))}return mu(),l=Yc(Error(n(421))),Uo(t,i,w,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Sy.bind(null,t),d._reactRetry=i,null):(t=m.treeContext,Fn=ir(d.nextSibling),kn=i,Ht=!0,si=null,t!==null&&(Xn[Yn++]=Li,Xn[Yn++]=Pi,Xn[Yn++]=Ir,Li=t.id,Pi=t.overflow,Ir=i),i=Jc(i,l.children),i.flags|=4096,i)}function up(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Nc(t.return,i,a)}function eu(t,i,a,l,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=d)}function dp(t,i,a){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(En(t,i,l.children,a),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,a,i);else if(t.tag===19)up(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(zt(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),eu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Co(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}eu(i,!0,a,null,m);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Oi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Or|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=pr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=pr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function cy(t,i,a){switch(i.tag){case 3:op(i),ms();break;case 5:wh(i);break;case 1:Cn(i.type)&&yo(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;zt(bo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(zt(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?cp(t,i,a):(zt(Gt,Gt.current&1),t=Oi(t,i,a),t!==null?t.sibling:null);zt(Gt,Gt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return dp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),zt(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,rp(t,i,a)}return Oi(t,i,a)}var fp,tu,hp,pp;fp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},tu=function(){},hp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Dr(vi.current);var m=null;switch(a){case"input":d=B(t,d),l=B(t,l),m=[];break;case"select":d=L({},d,{value:void 0}),l=L({},l,{value:void 0}),m=[];break;case"textarea":d=A(t,d),l=A(t,l),m=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=mo)}yt(a,l);var w;a=null;for(ue in d)if(!l.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var O=d[ue];for(w in O)O.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in l){var j=l[ue];if(O=d?.[ue],l.hasOwnProperty(ue)&&j!==O&&(j!=null||O!=null))if(ue==="style")if(O){for(w in O)!O.hasOwnProperty(w)||j&&j.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in j)j.hasOwnProperty(w)&&O[w]!==j[w]&&(a||(a={}),a[w]=j[w])}else a||(m||(m=[]),m.push(ue,a)),a=j;else ue==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,O=O?O.__html:void 0,j!=null&&O!==j&&(m=m||[]).push(ue,j)):ue==="children"?typeof j!="string"&&typeof j!="number"||(m=m||[]).push(ue,""+j):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(j!=null&&ue==="onScroll"&&Ft("scroll",t),m||O===j||(m=[])):(m=m||[]).push(ue,j))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},pp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ta(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function uy(t,i,a){var l=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Cn(i.type)&&xo(),gn(i),null;case 3:return l=i.stateNode,vs(),Bt(An),Bt(pn),Oc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Eo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(fu(si),si=null))),tu(t,i),gn(i),null;case 5:Dc(i);var d=Dr(Sa.current);if(a=i.type,t!==null&&i.stateNode!=null)hp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Dr(vi.current),Eo(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[yi]=i,l[ga]=m,t=(i.mode&1)!==0,a){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(d=0;d<ha.length;d++)Ft(ha[d],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":_t(l,m),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",l);break;case"textarea":J(l,m),Ft("invalid",l)}yt(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var O=m[w];w==="children"?typeof O=="string"?l.textContent!==O&&(m.suppressHydrationWarning!==!0&&po(l.textContent,O,t),d=["children",O]):typeof O=="number"&&l.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&po(l.textContent,O,t),d=["children",""+O]):o.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Ft("scroll",l)}switch(a){case"input":He(l),Ae(l,m,!0);break;case"textarea":He(l),Se(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=mo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[yi]=i,t[ga]=l,fp(t,i,!1,!1),i.stateNode=t;e:{switch(w=ut(a,l),a){case"dialog":Ft("cancel",t),Ft("close",t),d=l;break;case"iframe":case"object":case"embed":Ft("load",t),d=l;break;case"video":case"audio":for(d=0;d<ha.length;d++)Ft(ha[d],t);d=l;break;case"source":Ft("error",t),d=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),d=l;break;case"details":Ft("toggle",t),d=l;break;case"input":_t(t,l),d=B(t,l),Ft("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=L({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":J(t,l),d=A(t,l),Ft("invalid",t);break;default:d=l}yt(a,d),O=d;for(m in O)if(O.hasOwnProperty(m)){var j=O[m];m==="style"?at(t,j):m==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ke(t,j)):m==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&ft(t,j):typeof j=="number"&&ft(t,""+j):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?j!=null&&m==="onScroll"&&Ft("scroll",t):j!=null&&D(t,m,j,w))}switch(a){case"input":He(t),Ae(t,l,!1);break;case"textarea":He(t),Se(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ge(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?P(t,!!l.multiple,m,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=mo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)pp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Dr(Sa.current),Dr(vi.current),Eo(i)){if(l=i.stateNode,a=i.memoizedProps,l[yi]=i,(m=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:po(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(l.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[yi]=i,i.stateNode=l}return gn(i),null;case 13:if(Bt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)xh(),ms(),i.flags|=98560,m=!1;else if(m=Eo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[yi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else si!==null&&(fu(si),si=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?en===0&&(en=3):mu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return vs(),tu(t,i),t===null&&pa(i.stateNode.containerInfo),gn(i),null;case 10:return Rc(i.type._context),gn(i),null;case 17:return Cn(i.type)&&xo(),gn(i),null;case 19:if(Bt(Gt),m=i.memoizedState,m===null)return gn(i),null;if(l=(i.flags&128)!==0,w=m.rendering,w===null)if(l)Ta(m,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Co(t),w!==null){for(i.flags|=128,Ta(m,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,t=l,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,t=w.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return zt(Gt,Gt.current&1|2),i.child}t=t.sibling}m.tail!==null&&Te()>Ms&&(i.flags|=128,l=!0,Ta(m,!1),i.lanes=4194304)}else{if(!l)if(t=Co(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ht)return gn(i),null}else 2*Te()-m.renderingStartTime>Ms&&a!==1073741824&&(i.flags|=128,l=!0,Ta(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Te(),i.sibling=null,a=Gt.current,zt(Gt,l?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return pu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function dy(t,i){switch(Mc(i),i.tag){case 1:return Cn(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Bt(An),Bt(pn),Oc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Bt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Gt),null;case 4:return vs(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var zo=!1,xn=!1,fy=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ss(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Wt(t,i,l)}else a.current=null}function nu(t,i,a){try{a()}catch(l){Wt(t,i,l)}}var mp=!1;function hy(t,i){if(pc=no,t=Yf(),ac(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,O=-1,j=-1,ue=0,Me=0,we=t,Ee=null;t:for(;;){for(var Fe;we!==a||d!==0&&we.nodeType!==3||(O=w+d),we!==m||l!==0&&we.nodeType!==3||(j=w+l),we.nodeType===3&&(w+=we.nodeValue.length),(Fe=we.firstChild)!==null;)Ee=we,we=Fe;for(;;){if(we===t)break t;if(Ee===a&&++ue===d&&(O=w),Ee===m&&++Me===l&&(j=w),(Fe=we.nextSibling)!==null)break;we=Ee,Ee=we.parentNode}we=Fe}a=O===-1||j===-1?null:{start:O,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(mc={focusedElem:t,selectionRange:a},no=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Yt=je.memoizedState,ee=i.stateNode,Y=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ai(i.type,Ye),Yt);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var oe=i.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){Wt(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return je=mp,mp=!1,je}function Aa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&nu(i,a,m)}d=d.next}while(d!==l)}}function ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function iu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function gp(t){var i=t.alternate;i!==null&&(t.alternate=null,gp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[yi],delete i[ga],delete i[vc],delete i[$x],delete i[Zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xp(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=mo));else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,a),t=t.sibling;t!==null;)ru(t,i,a),t=t.sibling}function su(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(su(t,i,a),t=t.sibling;t!==null;)su(t,i,a),t=t.sibling}var cn=null,oi=!1;function cr(t,i,a){for(a=a.child;a!==null;)vp(t,i,a),a=a.sibling}function vp(t,i,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 5:xn||Ss(a,i);case 6:var l=cn,d=oi;cn=null,cr(t,i,a),cn=l,oi=d,cn!==null&&(oi?(t=cn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(oi?(t=cn,a=a.stateNode,t.nodeType===8?yc(t.parentNode,a):t.nodeType===1&&yc(t,a),sa(t)):yc(cn,a.stateNode));break;case 4:l=cn,d=oi,cn=a.stateNode.containerInfo,oi=!0,cr(t,i,a),cn=l,oi=d;break;case 0:case 11:case 14:case 15:if(!xn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&nu(a,i,w),d=d.next}while(d!==l)}cr(t,i,a);break;case 1:if(!xn&&(Ss(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(O){Wt(a,i,O)}cr(t,i,a);break;case 21:cr(t,i,a);break;case 22:a.mode&1?(xn=(l=xn)||a.memoizedState!==null,cr(t,i,a),xn=l):cr(t,i,a);break;default:cr(t,i,a)}}function _p(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new fy),i.forEach(function(l){var d=Ey.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function li(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var m=t,w=i,O=w;e:for(;O!==null;){switch(O.tag){case 5:cn=O.stateNode,oi=!1;break e;case 3:cn=O.stateNode.containerInfo,oi=!0;break e;case 4:cn=O.stateNode.containerInfo,oi=!0;break e}O=O.return}if(cn===null)throw Error(n(160));vp(m,w,d),cn=null,oi=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(ue){Wt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,t),i=i.sibling}function Sp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(i,t),Si(t),l&4){try{Aa(3,t,t.return),ko(3,t)}catch(Ye){Wt(t,t.return,Ye)}try{Aa(5,t,t.return)}catch(Ye){Wt(t,t.return,Ye)}}break;case 1:li(i,t),Si(t),l&512&&a!==null&&Ss(a,a.return);break;case 5:if(li(i,t),Si(t),l&512&&a!==null&&Ss(a,a.return),t.flags&32){var d=t.stateNode;try{ft(d,"")}catch(Ye){Wt(t,t.return,Ye)}}if(l&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,w=a!==null?a.memoizedProps:m,O=t.type,j=t.updateQueue;if(t.updateQueue=null,j!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&Je(d,m),ut(O,w);var ue=ut(O,m);for(w=0;w<j.length;w+=2){var Me=j[w],we=j[w+1];Me==="style"?at(d,we):Me==="dangerouslySetInnerHTML"?ke(d,we):Me==="children"?ft(d,we):D(d,Me,we,ue)}switch(O){case"input":et(d,m);break;case"textarea":ve(d,m);break;case"select":var Ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?P(d,!!m.multiple,Fe,!1):Ee!==!!m.multiple&&(m.defaultValue!=null?P(d,!!m.multiple,m.defaultValue,!0):P(d,!!m.multiple,m.multiple?[]:"",!1))}d[ga]=m}catch(Ye){Wt(t,t.return,Ye)}}break;case 6:if(li(i,t),Si(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch(Ye){Wt(t,t.return,Ye)}}break;case 3:if(li(i,t),Si(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{sa(i.containerInfo)}catch(Ye){Wt(t,t.return,Ye)}break;case 4:li(i,t),Si(t);break;case 13:li(i,t),Si(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(lu=Te())),l&4&&_p(t);break;case 22:if(Me=a!==null&&a.memoizedState!==null,t.mode&1?(xn=(ue=xn)||Me,li(i,t),xn=ue):li(i,t),Si(t),l&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!Me&&(t.mode&1)!==0)for(Ve=t,Me=t.child;Me!==null;){for(we=Ve=Me;Ve!==null;){switch(Ee=Ve,Fe=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Aa(4,Ee,Ee.return);break;case 1:Ss(Ee,Ee.return);var je=Ee.stateNode;if(typeof je.componentWillUnmount=="function"){l=Ee,a=Ee.return;try{i=l,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ye){Wt(l,a,Ye)}}break;case 5:Ss(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){bp(we);continue}}Fe!==null?(Fe.return=Ee,Ve=Fe):bp(we)}Me=Me.sibling}e:for(Me=null,we=t;;){if(we.tag===5){if(Me===null){Me=we;try{d=we.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=we.stateNode,j=we.memoizedProps.style,w=j!=null&&j.hasOwnProperty("display")?j.display:null,O.style.display=nt("display",w))}catch(Ye){Wt(t,t.return,Ye)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ue?"":we.memoizedProps}catch(Ye){Wt(t,t.return,Ye)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:li(i,t),Si(t),l&4&&_p(t);break;case 21:break;default:li(i,t),Si(t)}}function Si(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(xp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ft(d,""),l.flags&=-33);var m=yp(t);su(t,m,d);break;case 3:case 4:var w=l.stateNode.containerInfo,O=yp(t);ru(t,O,w);break;default:throw Error(n(161))}}catch(j){Wt(t,t.return,j)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function py(t,i,a){Ve=t,Ep(t)}function Ep(t,i,a){for(var l=(t.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&l){var w=d.memoizedState!==null||zo;if(!w){var O=d.alternate,j=O!==null&&O.memoizedState!==null||xn;O=zo;var ue=xn;if(zo=w,(xn=j)&&!ue)for(Ve=d;Ve!==null;)w=Ve,j=w.child,w.tag===22&&w.memoizedState!==null?wp(d):j!==null?(j.return=w,Ve=j):wp(d);for(;m!==null;)Ve=m,Ep(m),m=m.sibling;Ve=d,zo=O,xn=ue}Mp(t)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Mp(t)}}function Mp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||ko(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!xn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ai(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&bh(i,m,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}bh(i,w,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Me=ue.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&sa(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xn||i.flags&512&&iu(i)}catch(Ee){Wt(i,i.return,Ee)}}if(i===t){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function bp(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function wp(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ko(4,i)}catch(j){Wt(i,a,j)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(j){Wt(i,d,j)}}var m=i.return;try{iu(i)}catch(j){Wt(i,m,j)}break;case 5:var w=i.return;try{iu(i)}catch(j){Wt(i,w,j)}}}catch(j){Wt(i,i.return,j)}if(i===t){Ve=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ve=O;break}Ve=i.return}}var my=Math.ceil,Fo=R.ReactCurrentDispatcher,au=R.ReactCurrentOwner,Zn=R.ReactCurrentBatchConfig,bt=0,an=null,qt=null,un=0,Bn=0,Es=rr(0),en=0,Ca=null,Or=0,Bo=0,ou=0,Ra=null,Nn=null,lu=0,Ms=1/0,zi=null,Ho=!1,cu=null,ur=null,Vo=!1,dr=null,Go=0,Na=0,uu=null,jo=-1,Wo=0;function Mn(){return(bt&6)!==0?Te():jo!==-1?jo:jo=Te()}function fr(t){return(t.mode&1)===0?1:(bt&2)!==0&&un!==0?un&-un:Qx.transition!==null?(Wo===0&&(Wo=Sn()),Wo):(t=Lt,t!==0||(t=window.event,t=t===void 0?16:Af(t.type)),t)}function ci(t,i,a,l){if(50<Na)throw Na=0,uu=null,Error(n(185));Tn(t,a,l),((bt&2)===0||t!==an)&&(t===an&&((bt&2)===0&&(Bo|=a),en===4&&hr(t,un)),In(t,l),a===1&&bt===0&&(i.mode&1)===0&&(Ms=Te()+500,vo&&ar()))}function In(t,i){var a=t.callbackNode;jn(t,i);var l=xi(t,t===an?un:0);if(l===0)a!==null&&fe(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&fe(a),i===1)t.tag===0?Kx(Ap.bind(null,t)):fh(Ap.bind(null,t)),Yx(function(){(bt&6)===0&&ar()}),a=null;else{switch(vf(l)){case 1:a=Xe;break;case 4:a=ot;break;case 16:a=ct;break;case 536870912:a=Et;break;default:a=ct}a=Up(a,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Tp(t,i){if(jo=-1,Wo=0,(bt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(bs()&&t.callbackNode!==a)return null;var l=xi(t,t===an?un:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Xo(t,l);else{i=l;var d=bt;bt|=2;var m=Rp();(an!==t||un!==i)&&(zi=null,Ms=Te()+500,kr(t,i));do try{yy();break}catch(O){Cp(t,O)}while(!0);Cc(),Fo.current=m,bt=d,qt!==null?i=0:(an=null,un=0,i=en)}if(i!==0){if(i===2&&(d=Ri(t),d!==0&&(l=d,i=du(t,d))),i===1)throw a=Ca,kr(t,0),hr(t,l),In(t,Te()),a;if(i===6)hr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!gy(d)&&(i=Xo(t,l),i===2&&(m=Ri(t),m!==0&&(l=m,i=du(t,m))),i===1))throw a=Ca,kr(t,0),hr(t,l),In(t,Te()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Nn,zi);break;case 3:if(hr(t,l),(l&130023424)===l&&(i=lu+500-Te(),10<i)){if(xi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=xc(Fr.bind(null,t,Nn,zi),i);break}Fr(t,Nn,zi);break;case 4:if(hr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var w=31-ht(l);m=1<<w,w=i[w],w>d&&(d=w),l&=~m}if(l=d,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*my(l/1960))-l,10<l){t.timeoutHandle=xc(Fr.bind(null,t,Nn,zi),l);break}Fr(t,Nn,zi);break;case 5:Fr(t,Nn,zi);break;default:throw Error(n(329))}}}return In(t,Te()),t.callbackNode===a?Tp.bind(null,t):null}function du(t,i){var a=Ra;return t.current.memoizedState.isDehydrated&&(kr(t,i).flags|=256),t=Xo(t,i),t!==2&&(i=Nn,Nn=a,i!==null&&fu(i)),t}function fu(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function gy(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],m=d.getSnapshot;d=d.value;try{if(!ri(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(t,i){for(i&=~ou,i&=~Bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-ht(i),l=1<<a;t[a]=-1,i&=~l}}function Ap(t){if((bt&6)!==0)throw Error(n(327));bs();var i=xi(t,0);if((i&1)===0)return In(t,Te()),null;var a=Xo(t,i);if(t.tag!==0&&a===2){var l=Ri(t);l!==0&&(i=l,a=du(t,l))}if(a===1)throw a=Ca,kr(t,0),hr(t,i),In(t,Te()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Nn,zi),In(t,Te()),null}function hu(t,i){var a=bt;bt|=1;try{return t(i)}finally{bt=a,bt===0&&(Ms=Te()+500,vo&&ar())}}function zr(t){dr!==null&&dr.tag===0&&(bt&6)===0&&bs();var i=bt;bt|=1;var a=Zn.transition,l=Lt;try{if(Zn.transition=null,Lt=1,t)return t()}finally{Lt=l,Zn.transition=a,bt=i,(bt&6)===0&&ar()}}function pu(){Bn=Es.current,Bt(Es)}function kr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Xx(a)),qt!==null)for(a=qt.return;a!==null;){var l=a;switch(Mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xo();break;case 3:vs(),Bt(An),Bt(pn),Oc();break;case 5:Dc(l);break;case 4:vs();break;case 13:Bt(Gt);break;case 19:Bt(Gt);break;case 10:Rc(l.type._context);break;case 22:case 23:pu()}a=a.return}if(an=t,qt=t=pr(t.current,null),un=Bn=i,en=0,Ca=null,ou=Bo=Or=0,Nn=Ra=null,Pr!==null){for(i=0;i<Pr.length;i++)if(a=Pr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,l.next=w}a.pending=l}Pr=null}return t}function Cp(t,i){do{var a=qt;try{if(Cc(),Ro.current=Po,No){for(var l=jt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}No=!1}if(Ur=0,sn=Jt=jt=null,Ea=!1,Ma=0,au.current=null,a===null||a.return===null){en=1,Ca=i,qt=null;break}e:{var m=t,w=a.return,O=a,j=i;if(i=un,O.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var ue=j,Me=O,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Ee=Me.alternate;Ee?(Me.updateQueue=Ee.updateQueue,Me.memoizedState=Ee.memoizedState,Me.lanes=Ee.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Fe=Jh(w);if(Fe!==null){Fe.flags&=-257,ep(Fe,w,O,m,i),Fe.mode&1&&Qh(m,ue,i),i=Fe,j=ue;var je=i.updateQueue;if(je===null){var Ye=new Set;Ye.add(j),i.updateQueue=Ye}else je.add(j);break e}else{if((i&1)===0){Qh(m,ue,i),mu();break e}j=Error(n(426))}}else if(Ht&&O.mode&1){var Yt=Jh(w);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),ep(Yt,w,O,m,i),Tc(_s(j,O));break e}}m=j=_s(j,O),en!==4&&(en=2),Ra===null?Ra=[m]:Ra.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=Zh(m,j,i);Mh(m,ee);break e;case 1:O=j;var Y=m.type,oe=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(ur===null||!ur.has(oe)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=Kh(m,O,i);Mh(m,Ce);break e}}m=m.return}while(m!==null)}Ip(a)}catch(Ze){i=Ze,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function Rp(){var t=Fo.current;return Fo.current=Po,t===null?Po:t}function mu(){(en===0||en===3||en===2)&&(en=4),an===null||(Or&268435455)===0&&(Bo&268435455)===0||hr(an,un)}function Xo(t,i){var a=bt;bt|=2;var l=Rp();(an!==t||un!==i)&&(zi=null,kr(t,i));do try{xy();break}catch(d){Cp(t,d)}while(!0);if(Cc(),bt=a,Fo.current=l,qt!==null)throw Error(n(261));return an=null,un=0,en}function xy(){for(;qt!==null;)Np(qt)}function yy(){for(;qt!==null&&!Q();)Np(qt)}function Np(t){var i=Dp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Ip(t):qt=i,au.current=null}function Ip(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=uy(a,i,Bn),a!==null){qt=a;return}}else{if(a=dy(a,i),a!==null){a.flags&=32767,qt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);en===0&&(en=5)}function Fr(t,i,a){var l=Lt,d=Zn.transition;try{Zn.transition=null,Lt=1,vy(t,i,a,l)}finally{Zn.transition=d,Lt=l}return null}function vy(t,i,a,l){do bs();while(dr!==null);if((bt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ja(t,m),t===an&&(qt=an=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vo||(Vo=!0,Up(ct,function(){return bs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Zn.transition,Zn.transition=null;var w=Lt;Lt=1;var O=bt;bt|=4,au.current=null,hy(t,a),Sp(a,t),Fx(mc),no=!!pc,mc=pc=null,t.current=a,py(a),Re(),bt=O,Lt=w,Zn.transition=m}else t.current=a;if(Vo&&(Vo=!1,dr=t,Go=d),m=t.pendingLanes,m===0&&(ur=null),fn(a.stateNode),In(t,Te()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ho)throw Ho=!1,t=cu,cu=null,t;return(Go&1)!==0&&t.tag!==0&&bs(),m=t.pendingLanes,(m&1)!==0?t===uu?Na++:(Na=0,uu=t):Na=0,ar(),null}function bs(){if(dr!==null){var t=vf(Go),i=Zn.transition,a=Lt;try{if(Zn.transition=null,Lt=16>t?16:t,dr===null)var l=!1;else{if(t=dr,dr=null,Go=0,(bt&6)!==0)throw Error(n(331));var d=bt;for(bt|=4,Ve=t.current;Ve!==null;){var m=Ve,w=m.child;if((Ve.flags&16)!==0){var O=m.deletions;if(O!==null){for(var j=0;j<O.length;j++){var ue=O[j];for(Ve=ue;Ve!==null;){var Me=Ve;switch(Me.tag){case 0:case 11:case 15:Aa(8,Me,m)}var we=Me.child;if(we!==null)we.return=Me,Ve=we;else for(;Ve!==null;){Me=Ve;var Ee=Me.sibling,Fe=Me.return;if(gp(Me),Me===ue){Ve=null;break}if(Ee!==null){Ee.return=Fe,Ve=Ee;break}Ve=Fe}}}var je=m.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Yt=Ye.sibling;Ye.sibling=null,Ye=Yt}while(Ye!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ve=w;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Aa(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Ve=ee;break e}Ve=m.return}}var Y=t.current;for(Ve=Y;Ve!==null;){w=Ve;var oe=w.child;if((w.subtreeFlags&2064)!==0&&oe!==null)oe.return=w,Ve=oe;else e:for(w=Y;Ve!==null;){if(O=Ve,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ko(9,O)}}catch(Ze){Wt(O,O.return,Ze)}if(O===w){Ve=null;break e}var Ce=O.sibling;if(Ce!==null){Ce.return=O.return,Ve=Ce;break e}Ve=O.return}}if(bt=d,ar(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Rt,t)}catch{}l=!0}return l}finally{Lt=a,Zn.transition=i}}return!1}function Lp(t,i,a){i=_s(a,i),i=Zh(t,i,1),t=lr(t,i,1),i=Mn(),t!==null&&(Tn(t,1,i),In(t,i))}function Wt(t,i,a){if(t.tag===3)Lp(t,t,a);else for(;i!==null;){if(i.tag===3){Lp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ur===null||!ur.has(l))){t=_s(a,t),t=Kh(i,t,1),i=lr(i,t,1),t=Mn(),i!==null&&(Tn(i,1,t),In(i,t));break}}i=i.return}}function _y(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&a,an===t&&(un&a)===a&&(en===4||en===3&&(un&130023424)===un&&500>Te()-lu?kr(t,0):ou|=a),In(t,i)}function Pp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var a=Mn();t=Di(t,i),t!==null&&(Tn(t,i,a),In(t,a))}function Sy(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Pp(t,a)}function Ey(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Pp(t,a)}var Dp;Dp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,cy(t,i,a);Rn=(t.flags&131072)!==0}else Rn=!1,Ht&&(i.flags&1048576)!==0&&hh(i,So,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oo(t,i),t=i.pendingProps;var d=fs(i,pn.current);ys(i,a),d=Fc(null,i,l,t,d,a);var m=Bc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(m=!0,yo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lc(i),d.updater=Do,i.stateNode=d,d._reactInternals=i,Xc(i,l,t,a),i=Zc(null,i,l,!0,m,a)):(i.tag=0,Ht&&m&&Ec(i),En(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Oo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=by(l),t=ai(l,t),d){case 0:i=$c(null,i,l,t,a);break e;case 1:i=ap(null,i,l,t,a);break e;case 11:i=tp(null,i,l,t,a);break e;case 14:i=np(null,i,l,ai(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),$c(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),ap(t,i,l,d,a);case 3:e:{if(op(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,d=m.element,Eh(t,i),Ao(i,l,null,a);var w=i.memoizedState;if(l=w.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=_s(Error(n(423)),i),i=lp(t,i,l,a,d);break e}else if(l!==d){d=_s(Error(n(424)),i),i=lp(t,i,l,a,d);break e}else for(Fn=ir(i.stateNode.containerInfo.firstChild),kn=i,Ht=!0,si=null,a=_h(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),l===d){i=Oi(t,i,a);break e}En(t,i,l,a)}i=i.child}return i;case 5:return wh(i),t===null&&wc(i),l=i.type,d=i.pendingProps,m=t!==null?t.memoizedProps:null,w=d.children,gc(l,d)?w=null:m!==null&&gc(l,m)&&(i.flags|=32),sp(t,i),En(t,i,w,a),i.child;case 6:return t===null&&wc(i),null;case 13:return cp(t,i,a);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,a):En(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),tp(t,i,l,d,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,zt(bo,l._currentValue),l._currentValue=w,m!==null)if(ri(m.value,w)){if(m.children===d.children&&!An.current){i=Oi(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){w=m.child;for(var j=O.firstContext;j!==null;){if(j.context===l){if(m.tag===1){j=Ui(-1,a&-a),j.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var Me=ue.pending;Me===null?j.next=j:(j.next=Me.next,Me.next=j),ue.pending=j}}m.lanes|=a,j=m.alternate,j!==null&&(j.lanes|=a),Nc(m.return,a,i),O.lanes|=a;break}j=j.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(n(341));w.lanes|=a,O=w.alternate,O!==null&&(O.lanes|=a),Nc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}En(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ys(i,a),d=qn(d),l=l(d),i.flags|=1,En(t,i,l,a),i.child;case 14:return l=i.type,d=ai(l,i.pendingProps),d=ai(l.type,d),np(t,i,l,d,a);case 15:return ip(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ai(l,d),Oo(t,i),i.tag=1,Cn(l)?(t=!0,yo(i)):t=!1,ys(i,a),qh(i,l,d),Xc(i,l,d,a),Zc(null,i,l,!0,t,a);case 19:return dp(t,i,a);case 22:return rp(t,i,a)}throw Error(n(156,i.tag))};function Up(t,i){return de(t,i)}function My(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,a,l){return new My(t,i,a,l)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function by(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===te)return 11;if(t===ie)return 14}return 2}function pr(t,i){var a=t.alternate;return a===null?(a=Kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Yo(t,i,a,l,d,m){var w=2;if(l=t,typeof t=="function")gu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case z:return Br(a.children,d,m,i);case H:w=8,d|=8;break;case N:return t=Kn(12,a,i,d|2),t.elementType=N,t.lanes=m,t;case X:return t=Kn(13,a,i,d),t.elementType=X,t.lanes=m,t;case ne:return t=Kn(19,a,i,d),t.elementType=ne,t.lanes=m,t;case re:return qo(a,d,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case F:w=9;break e;case te:w=11;break e;case ie:w=14;break e;case se:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(w,a,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function Br(t,i,a,l){return t=Kn(7,t,l,i),t.lanes=a,t}function qo(t,i,a,l){return t=Kn(22,t,l,i),t.elementType=re,t.lanes=a,t.stateNode={isHidden:!1},t}function xu(t,i,a){return t=Kn(6,t,null,i),t.lanes=a,t}function yu(t,i,a){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function wy(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wn(0),this.expirationTimes=Wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vu(t,i,a,l,d,m,w,O,j){return t=new wy(t,i,a,O,j),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(m),t}function Ty(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Op(t){if(!t)return sr;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Cn(a))return uh(t,a,i)}return i}function zp(t,i,a,l,d,m,w,O,j){return t=vu(a,l,!0,t,d,m,w,O,j),t.context=Op(null),a=t.current,l=Mn(),d=fr(a),m=Ui(l,d),m.callback=i??null,lr(a,m,d),t.current.lanes=d,Tn(t,d,l),In(t,l),t}function $o(t,i,a,l){var d=i.current,m=Mn(),w=fr(d);return a=Op(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(m,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=lr(d,i,w),t!==null&&(ci(t,d,w,m),To(t,d,w)),w}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function _u(t,i){kp(t,i),(t=t.alternate)&&kp(t,i)}function Ay(){return null}var Fp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}Ko.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$o(t,i,null,null)},Ko.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zr(function(){$o(null,t,null,null)}),i[Ni]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ef();t={blockedOn:null,target:t,priority:i};for(var a=0;a<er.length&&i!==0&&i<er[a].priority;a++);er.splice(a,0,t),a===0&&wf(t)}};function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Cy(t,i,a,l,d){if(d){if(typeof l=="function"){var m=l;l=function(){var ue=Zo(w);m.call(ue)}}var w=zp(i,l,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=w,t[Ni]=w.current,pa(t.nodeType===8?t.parentNode:t),zr(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var O=l;l=function(){var ue=Zo(j);O.call(ue)}}var j=vu(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=j,t[Ni]=j.current,pa(t.nodeType===8?t.parentNode:t),zr(function(){$o(i,j,a,l)}),j}function Jo(t,i,a,l,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var O=d;d=function(){var j=Zo(w);O.call(j)}}$o(i,w,t,d)}else w=Cy(a,i,t,d,l);return Zo(w)}_f=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Qt(i.pendingLanes);a!==0&&(Xl(i,a|1),In(i,Te()),(bt&6)===0&&(Ms=Te()+500,ar()))}break;case 13:zr(function(){var l=Di(t,1);if(l!==null){var d=Mn();ci(l,t,1,d)}}),_u(t,1)}},Yl=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var a=Mn();ci(i,t,134217728,a)}_u(t,134217728)}},Sf=function(t){if(t.tag===13){var i=fr(t),a=Di(t,i);if(a!==null){var l=Mn();ci(a,t,i,l)}_u(t,i)}},Ef=function(){return Lt},Mf=function(t,i){var a=Lt;try{return Lt=t,i()}finally{Lt=a}},Pe=function(t,i,a){switch(i){case"input":if(et(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=go(l);if(!d)throw Error(n(90));ze(l),et(l,d)}}}break;case"textarea":ve(t,a);break;case"select":i=a.value,i!=null&&P(t,!!a.multiple,i,!1)}},kt=hu,Kt=zr;var Ry={usingClientEntryPoint:!1,Events:[xa,us,go,Ue,dt,hu]},Ia={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Rt=el.inject(Ny),St=el}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(i))throw Error(n(200));return Ty(t,i,null,a)},Ln.createRoot=function(t,i){if(!Eu(t))throw Error(n(299));var a=!1,l="",d=Fp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=vu(t,1,!1,null,null,a,!1,l,d),t[Ni]=i.current,pa(t.nodeType===8?t.parentNode:t),new Su(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=I(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return zr(t)},Ln.hydrate=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!Eu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,m="",w=Fp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=zp(i,null,t,1,a??null,d,!1,m,w),t[Ni]=i.current,pa(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ko(i)},Ln.render=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(zr(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Ln.unstable_batchedUpdates=hu,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,i,a,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var qp;function ky(){if(qp)return wu.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wu.exports=zy(),wu.exports}var $p;function Fy(){if($p)return tl;$p=1;var s=ky();return tl.createRoot=s.createRoot,tl.hydrateRoot=s.hydrateRoot,tl}var By=Fy();const Hy=ag(By),Cu=[{id:"yzy_mono_dome",code:"YZY-DOME-01",name:"YZY MONO DOME",subtitle:"MONOLITHIC CATENARY EARTH DOME",category:"SINGLE RESIDENCE & DISASTER SHELTER",tagline:"Aerodynamic, self-supporting catenary arch dome immune to hurricane winds and wildfires.",description:"Inspired by ancient subterranean architecture and futuristic planetary habitats. Built with a continuous curved shell using compressed earth blocks, aircrete, or ferrocement over an inflatable compass arm guide. Zero structural wood or steel required.",sqft:350,diameter:"21.0 FT (6.4m)",height:"14.5 FT (4.4m)",occupancy:"2 - 4 Persons",buildTimeDays:7,difficulty:"NOVICE FRIENDLY",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"ferrocement",walls:"aircrete",roof:"aircrete",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:120,estimatedCostMin:3200,estimatedCostMax:7800,modelShape:"dome",windResistance:"220 MPH (Category 5+)",seismicZone:"Zone 4 (Maximum Flex Resilience)",thermalComfort:"Passive Solar & Earth-Bermed (Zero HVAC Needed in 0°F to 110°F)",idealFor:"Disaster relief, extreme climates, off-grid eco-living, homeless rehabilitation communities."},{id:"rammed_earth_villa",code:"YZY-VILLA-02",name:"MONOLITHIC EARTH VILLA",subtitle:"STARK MODERN BRUTALIST SINGLE-FAMILY HOME",category:"PERMANENT FAMILY RESIDENCE",tagline:"Massive 18-inch striated tamped earth walls with expansive floor-to-ceiling daylight portals.",description:"A timeless, ultra-modern brutalist sanctuary. The massive thermal inertia of rammed earth acts as a natural battery, absorbing desert heat by day and radiating warmth through cool nights. Combines minimalist raw earth textures with high-performance mass timber roof spans.",sqft:1200,diameter:"42.0 FT x 28.0 FT",height:"12.0 FT (3.6m)",occupancy:"4 - 6 Persons",buildTimeDays:21,difficulty:"INTERMEDIATE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"rammed_earth",walls:"rammed_earth",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"offgrid_solar_water"},baseLaborHours:480,estimatedCostMin:14500,estimatedCostMax:28e3,modelShape:"cuboid_villa",windResistance:"180 MPH",seismicZone:"Zone 4 Engineered Tie-Rods",thermalComfort:"Internal Thermal Flywheel (Constant 68°F-72°F microclimate)",idealFor:"Permanent rural/suburban family housing, regenerative agrarian retreats, enduring generational sanctuaries."},{id:"modular_eco_apartments",code:"YZY-MOD-03",name:"MODULAR COMMUNE BLOCK",subtitle:"MULTI-FAMILY 8-UNIT SUSTAINABLE APARTMENT SYSTEM",category:"MULTI-FAMILY HOUSING",tagline:"Scalable modular interlocking cube units built around a central shaded communal courtyard.",description:"Designed to rapidly solve urban and suburban housing crises. Standardized 600 sqft interlocking modular apartments constructed from Compressed Earth Blocks (CEBs) and Mass Timber, stacked up to 3 floors with shared acoustic mycelium separation and central rainwater filtration cistern.",sqft:4800,diameter:"65.0 FT x 75.0 FT (3 Stories)",height:"34.0 FT (10.3m)",occupancy:"24 - 32 Persons (8 Units)",buildTimeDays:45,difficulty:"COMMUNITY MASTER CREW",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"ceb_blocks",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:1450,estimatedCostMin:52e3,estimatedCostMax:98e3,modelShape:"modular_block",windResistance:"175 MPH",seismicZone:"Zone 4 Base-Isolated CLT joints",thermalComfort:"Communal central wind-tower draft & cross-ventilation",idealFor:"Affordable urban community housing, transitional refugee housing, university cooperatives."},{id:"donda_resilience_commons",code:"DONDA-CITY-04",name:"DONDA RESILIENCE COMMONS",subtitle:"DECENTRALIZED 24-UNIT AUTONOMOUS MICRO-CITY",category:"DECENTRALIZED ECO-VILLAGE",tagline:"100% self-sufficient closed-loop community ecosystem integrating shelter, food, solar, and water.",description:"A circular micro-city masterplan comprising 24 monolithic dome residences, a central geodesic community hub, open-air amphitheater, vertical permaculture aquaponic greenhouses, and a centralized renewable utility grid. Creates economic and energetic sovereignty for underserved communities.",sqft:18500,diameter:"320.0 FT Circular Perimeter",height:"28.0 FT Central Dome",occupancy:"80 - 120 Persons",buildTimeDays:90,difficulty:"DECENTRALIZED GUILD BUILD",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"bamboo_composite",walls:"rammed_earth",roof:"ferrocement",insulation:"mycelium_panels",utilities:"microgrid_communal"},baseLaborHours:5200,estimatedCostMin:185e3,estimatedCostMax:34e4,modelShape:"village_compound",windResistance:"220 MPH",seismicZone:"Geodesic Interlock (Extreme Resilient)",thermalComfort:"Integrated Earth-Tubes & Passive Aquifer Cooling",idealFor:"Sovereign intentional communities, Native American reservation empowerment, disaster recovery settlements."},{id:"rapid_emergency_pod",code:"YZY-POD-05",name:"RAPID EMERGENCY FLATPACK POD",subtitle:"48-HOUR CRITICAL RELIEF DEPLOYABLE SHELTER",category:"RAPID CRISIS RESPONSE",tagline:"Precision flatpack modular shelter assembled in under 48 hours with zero heavy machinery.",description:"A lightweight, interlocking bio-panel pod designed for immediate deployment to humanitarian crisis and disaster zones. Assembles using dry interlocking keyed pins. Features integrated insulated floor, roof rainwater run-off, and plug-and-play 12V solar LED & USB power kit.",sqft:160,diameter:"12.0 FT x 13.5 FT",height:"9.5 FT (2.9m)",occupancy:"1 - 3 Persons",buildTimeDays:2,difficulty:"ZERO EXPERIENCE NEEDED",defaultMaterials:{foundation:"recycled_poly_bricks",superstructure:"cross_laminated_timber",walls:"recycled_poly_bricks",roof:"ferrocement",insulation:"mycelium_panels",utilities:"essential_eco_pod"},baseLaborHours:24,estimatedCostMin:1400,estimatedCostMax:2900,modelShape:"micro_pod",windResistance:"140 MPH",seismicZone:"Zone 4 Flexible Joint Pod",thermalComfort:"Bio-foam Insulation (R-16 Envelope)",idealFor:"Disaster first-response, homeless transitional shelters, mobile clinic & quarantine stations."},{id:"terrace_earth_apartments",code:"YZY-TERRACE-06",name:"STEPPED EARTH TERRACE COMPLEX",subtitle:"BIOPHILIC STEPPED DUPLEX & APARTMENT TOWER",category:"HIGH-DENSITY MULTI-TIER",tagline:"Tiered stepped brutalist earth terraces with rooftop gardens on every single residential level.",description:"Inspired by ancient Mesopotamian ziggurats and high-density modernist brutalism. Each floor steps backward to provide the unit below with an expansive green garden terrace for food cultivation, solar collection, and natural shade.",sqft:9600,diameter:"90.0 FT x 60.0 FT (4 Tiers)",height:"45.0 FT (13.7m)",occupancy:"48 - 60 Persons (16 Units)",buildTimeDays:70,difficulty:"ENGINEERED COLLECTIVE",defaultMaterials:{foundation:"geopolymer_concrete",superstructure:"cross_laminated_timber",walls:"hempcrete",roof:"cross_laminated_timber",insulation:"hempcrete",utilities:"microgrid_communal"},baseLaborHours:2900,estimatedCostMin:11e4,estimatedCostMax:21e4,modelShape:"terrace_block",windResistance:"185 MPH",seismicZone:"Zone 4 Engineered CLT Intertie",thermalComfort:"Rooftop soil garden thermal blanket & passive air shafts",idealFor:"Dense urban eco-neighborhoods, communal housing cooperatives, humanitarian urban centers."}],nl=[{id:"ceb_blocks",name:"COMPRESSED EARTH BLOCKS (CEB)",shortName:"CEB Blocks",category:"EARTH & SOIL",tagline:"Ultra-low cost subsoil compressed at 2,000 PSI with zero kiln firing.",description:"Formed using local subsoil (clay + sand) mixed with 5-8% lime/cement stabilizer and compressed using a manual or hydraulic press. Interlocking designs require zero mortar, drastically reducing labor and build time.",unitCost:"$0.45 / block ($4.20 / sq ft wall)",costPerSqFt:4.2,carbonImpact:-18.5,carbonRating:"EXEMPLARY (A+)",thermalRValue:2.8,thermalMass:"VERY HIGH",compressiveStrength:"1,200 - 1,800 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (With lime wash / hydrophobic sealer)",localSourcingRate:"90% On-Site Soil Excavation",sourcingMethod:'Excavate subsoil on-site. Sieve through 1/4" wire mesh. Mix with 8% lime. Press with manual Cinva-Ram ($380).',pros:["Extremely low cost ($0.45/block) — 90% of material dug directly from on-site foundation soil","Interlocking dry-stack design requires zero mortar and zero master masonry skills","Immune to termites, rot, mold, and wildfire (Class A 4-hour fireproof rating)","High thermal mass acts as a natural temperature battery stabilizing indoor microclimate"],cons:["Requires manual soil sieving and curing period (14 days with daily water mist)","Heavy physical weight requiring solid gravel trench or geopolymer footing","Needs protective roof overhangs and natural lime wash against direct monsoon rains"],supplier:{name:"AECT Earth Block Technologies",location:"San Antonio, Texas & Global Shipping",contact:"sales@aectearthblock.com | +1 (210) 633-6300",website:"aectearthblock.com",exactPrice:"$0.45 per standard block ($450 per pallet of 1,000 blocks)",minimumOrder:"1 Pallet or DIY on-site for $0.12/block with rented press",leadTime:"3-5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY DIY",lifespan:"100+ YEARS",compatibleLayers:["walls","foundation","superstructure"],colorHex:"#B8865A",textureType:"earth_block",badge:"TOP COST-SAVER"},{id:"rammed_earth",name:"MONOLITHIC RAMMED EARTH",shortName:"Rammed Earth",category:"EARTH & SOIL",tagline:"Stark, monolithic brutalist earthen walls with superior thermal flywheel inertia.",description:"Damp subsoil with gravel and clay tamped pneumatically or manually within slip-form wooden formwork. Produces gorgeous striated raw stone layers, perfect acoustic dampening, and zero off-gassing.",unitCost:"$6.80 / sq ft wall",costPerSqFt:6.8,carbonImpact:-14.2,carbonRating:"EXEMPLARY (A+)",thermalRValue:3.5,thermalMass:"MAXIMUM",compressiveStrength:"1,500 - 2,400 PSI",fireRating:"CLASS A (4-Hour Fireproof)",waterResistance:"HIGH (When capped with deep overhangs and lime stabilization)",localSourcingRate:"95% Local Quarry & Excavation",sourcingMethod:"Sourced directly from local quarry tailings or foundation excavation. Mix 70% aggregate/sand and 30% clay/silt.",pros:["Iconic monolithic brutalist aesthetic with breathtaking natural striated earth strata","Supreme acoustic isolation (kills outside traffic and environmental noise)","Zero off-gassing, zero drywall, zero paint needed — wall is fully structural and finished","Centuries-long lifespan (150+ years) getting stronger over time"],cons:["Requires sturdy reusable wooden slipform formwork setup","Labor-intensive tamping process (beneficial for community guild builds)","Difficult to modify or knock down once fully cured"],supplier:{name:"Sirewall / Earth Structures Group & Local Aggregates",location:"North America, Europe & Australia Hubs",contact:"info@sirewall.com | +1 (250) 537-9355",website:"sirewall.com",exactPrice:"$18.50 per ton delivered quarry road-base aggregate ($6.80/sqft installed DIY)",minimumOrder:"10 Tons (Dump truck delivery)",leadTime:"24-48 Hours from local aggregate yards"},laborDifficulty:"INTERMEDIATE (Formwork setup)",lifespan:"150+ YEARS",compatibleLayers:["walls","superstructure"],colorHex:"#A07855",textureType:"rammed_earth",badge:"ICONIC BRUTALISM"},{id:"hempcrete",name:"BIO-COMPOSITE HEMPCRETE",shortName:"Hempcrete",category:"BIO-MASS",tagline:"Carbon-negative breathable biocomposite wall fill with exceptional R-value.",description:"Cast blend of industrial hemp hurds (woody inner core) and hydraulic lime binder. Continuously absorbs atmospheric CO2 throughout its multi-century lifespan while regulating internal humidity and mold prevention.",unitCost:"$8.50 / sq ft wall",costPerSqFt:8.5,carbonImpact:-110,carbonRating:"NET CARBON SINK (-110kg CO2/m3)",thermalRValue:18,thermalMass:"MEDIUM-HIGH",compressiveStrength:"Non-structural infill (Requires timber or CEB post frame)",fireRating:"CLASS A (Flame retardant char layer)",waterResistance:"VAPOR PERMEABLE / BREATHABLE",localSourcingRate:"70% Agricultural Hemp Regions",sourcingMethod:"Blend 4 parts hemp hurds, 1 part hydrated lime binder, 1.5 parts water in pan mixer.",pros:["Gigantic Net Carbon Sink (-110 kg CO2 per cubic meter sequestered for life)","High thermal insulation (R-18) keeping rooms warm in winter and cool in summer","Vapor-permeable 'breathable' envelope naturally prevents interior humidity, mold, and rot","Lightweight and extremely novice-friendly to mix and cast"],cons:["Non-structural infill — requires structural timber or CEB column frame to carry roof load","Slower drying time (requires 4-8 weeks to fully cure before final breathable lime plaster)","Requires sourcing industrial hemp hurds from agricultural processing mills"],supplier:{name:"Hempitecture Inc. & US Hemp Brokerage",location:"Jerome, Idaho / Louisville, Kentucky",contact:"orders@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com",exactPrice:"$0.42 / lb ($840 per 1-ton super-sack of processed hemp hurd)",minimumOrder:"1 Super-sack (2,000 lbs) or 50 lb trial bags ($28/bag)",leadTime:"3-5 Business Days LTL Freight"},laborDifficulty:"NOVICE / COMMUNITY FRIENDLY",lifespan:"300+ YEARS (Petrifies into limestone over time)",compatibleLayers:["walls","insulation","roof"],colorHex:"#8B9574",textureType:"hemp_composite",badge:"MAX CARBON SINK"},{id:"mycelium_panels",name:"GROWN MYCELIUM STRUCTURAL PANELS",shortName:"Mycelium Bio-Foam",category:"BIO-MASS",tagline:"Self-assembling fungal root bio-foam grown in 7 days from agricultural crop waste.",description:"Mycelium (mushroom vegetative tissue) inoculated into agricultural waste substrates (straw, sawdust, husks) and grown inside modular molds. Baked to inactivate fungi, producing ultra-lightweight, 100% biodegradable thermal & acoustic panels.",unitCost:"$3.90 / sq ft panel",costPerSqFt:3.9,carbonImpact:-45,carbonRating:"NET CARBON SINK (A+)",thermalRValue:16.5,thermalMass:"LOW (Ultra-Lightweight)",compressiveStrength:"300 - 600 PSI (Rigid Foam Core)",fireRating:"CLASS 1 (Natural self-extinguishing char)",waterResistance:"TREATED (Natural wax or bio-resin coating)",localSourcingRate:"100% Farm Crop Residue Inoculation",sourcingMethod:"Grown in dark ambient containers in 7 days from pasteurized agricultural crop chaff and mushroom spawn.",pros:["Can be grown in 7 days in community micro-grow hubs with zero heavy industrial factories","Replaces toxic petroleum polystyrene foam insulation with 100% biodegradable bio-mass","Outstanding acoustic dampening and R-16.5 thermal resistance","Natural Class 1 flame retardance (chars rather than combusts)"],cons:["Must be baked or heat-dried at 180°F to deactivate live mycelium growth","Requires natural moisture barrier (beeswax, bio-resin) for exterior exposed applications","Lightweight core must be paired with protective cladding or plaster"],supplier:{name:"Ecovative Design / MycoWorks Commercial Materials",location:"Green Island, New York & Regional Grow Partners",contact:"grow@ecovative.com | +1 (518) 273-3753",website:"ecovative.com",exactPrice:'$3.90 / sq ft (24"x48" panels at $31.20 each) or $12 for 5-gal GIY Inoculum kit',minimumOrder:"10 Panels or DIY Grow Spawn bags",leadTime:"7 Days (Shipped fresh or grown on-demand)"},laborDifficulty:"NOVICE (Mold-grown process)",lifespan:"60+ YEARS",compatibleLayers:["insulation","roof","finishes"],colorHex:"#C5B9A5",textureType:"bio_foam",badge:"FUTURISTIC BIO-TECH"},{id:"geopolymer_concrete",name:"SLAG/POZZOLAN GEOPOLYMER CONCRETE",shortName:"Geopolymer Concrete",category:"CIRCULAR MINERAL",tagline:"85% lower carbon footprint than Portland cement with 2x chemical and heat resilience.",description:"Synthesized via alkaline activation of industrial aluminosilicate by-products (ground granulated blast furnace slag, fly ash, or calcined metakaolin). Cures with zero calcium oxide calcination emissions.",unitCost:"$5.10 / sq ft slab",costPerSqFt:5.1,carbonImpact:-4,carbonRating:"ULTRA LOW EMISSIONS (A)",thermalRValue:1.5,thermalMass:"HIGH",compressiveStrength:"4,500 - 8,000 PSI",fireRating:"CLASS A (Withstands 1,200°C without spalling)",waterResistance:"IMPERMEABLE",localSourcingRate:"80% Industrial Slag / Fly Ash / Volcanic Ash",sourcingMethod:"Mix slag/fly-ash with sodium silicate activator solution and aggregate.",pros:["85% reduction in embodied carbon compared to traditional Portland cement","Ultra-high compressive strength (up to 8,000 PSI) for indestructible foundation footings","Immune to acid, sulfate corrosion, and extreme heat (withstands 1,200°C without spalling)","Cures rapidly into durable permanent stone foundation"],cons:["Requires handling alkaline activator solution with basic safety gloves & goggles","Needs precise batch mixing ratios for optimal polymerization cure","Slightly less common in standard home-depot retail than Portland cement"],supplier:{name:"Boral Resources / Wagners Earth Friendly Concrete (EFC)",location:"International / Regional Slag Terminals",contact:"efc@wagner.com.au | +1 (800) 843-6652",website:"wagner.com.au/main/earth-friendly-concrete",exactPrice:"$128.00 / cubic yard ready-mix ($5.10 / sq ft 4-inch slab)",minimumOrder:"5 Cubic Yards or $18.50 per 50 lb dry binder bag",leadTime:"24-48 Hours Dispatch"},laborDifficulty:"INTERMEDIATE",lifespan:"200+ YEARS",compatibleLayers:["foundation","superstructure","roof"],colorHex:"#7A7A78",textureType:"raw_concrete",badge:"ULTRA-STRENGTH FOUNDATION"},{id:"cross_laminated_timber",name:"MASS TIMBER / CROSS-LAMINATED TIMBER (CLT)",shortName:"CLT Mass Timber",category:"RENEWABLE WOOD",tagline:"Precision-engineered solid wood slabs locking carbon into structural monolithic grids.",description:"Layers of kiln-dried sustainably managed lumber stacked perpendicularly and bonded with non-toxic polyurethane adhesive. Replaces steel and concrete for rapid modular multi-story assembly.",unitCost:"$11.20 / sq ft panel",costPerSqFt:11.2,carbonImpact:-95,carbonRating:"NET CARBON SINK (A+)",thermalRValue:8.5,thermalMass:"MEDIUM",compressiveStrength:"3,500 PSI (Bending strength 4,200 PSI)",fireRating:"CLASS A (Predictable slow charring protects core)",waterResistance:"MEDIUM (Requires weather barrier membrane)",localSourcingRate:"85% FSC-Certified Forestry & Regional Mills",sourcingMethod:"Procured from regional forestry cooperatives. Precision CNC cut for rapid crane assembly.",pros:["Precision pre-fabricated panels assemble on site in hours like giant lego blocks","Massive carbon storage (-95 kg CO2/sqft locked inside wood matrix)","Incredible biophilic warmth and natural wood interior finish (no drywall needed)","High strength-to-weight ratio allows multi-story cantilevered apartment designs"],cons:["Higher material cost ($11.20/sqft) than raw compressed earth ($4.20/sqft)","Requires crane or multi-person crew to hoist large heavy panels into place","Must be protected from continuous direct rain contact with weatherproofing"],supplier:{name:"SmartLam North America / Mercer Mass Timber",location:"Columbia Falls, Montana / Spokane, Washington",contact:"sales@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:'$11.20 / sq ft (3-ply 4.1" CLT billets at $358 per 8x4 ft panel)',minimumOrder:"1 Flatbed Truckload (4,000 sqft) or custom cut-to-order",leadTime:"2-3 Weeks CNC Fabrication"},laborDifficulty:"CRANE / MODULAR CREW",lifespan:"120+ YEARS",compatibleLayers:["superstructure","roof","walls"],colorHex:"#C9A066",textureType:"cross_timber",badge:"HIGH-RISE MODULAR"},{id:"aircrete",name:"FOAMED CELLULAR AIRCRETE",shortName:"Aircrete Foam Core",category:"FOAMED MINERAL",tagline:"Inexpensive, lightweight aerated mineral mix easily cut with hand saws.",description:"A slurry of stabilized cement/lime with tiny dense air bubbles produced by organic foaming agents. Weighs 1/5th of standard concrete, provides integrated thermal insulation, and allows easy dome casting.",unitCost:"$3.10 / sq ft",costPerSqFt:3.1,carbonImpact:-1.2,carbonRating:"LOW CARBON (B+)",thermalRValue:12,thermalMass:"MEDIUM",compressiveStrength:"400 - 800 PSI",fireRating:"CLASS A (Immune to fire/pest rot)",waterResistance:"HIGH (When coated with elastomeric or lime sealer)",localSourcingRate:"90% Standard Local Supplies + Bio-Foamer",sourcingMethod:"Prepared on-site using continuous bio-foam generator ($120 tool) and paddle mixer.",pros:["Extremely affordable ($3.10/sqft) and expands 4x in volume from foam bubbles","Ultra-lightweight (floats on water!) and can be shaped with standard wood hand saws","Class A fireproof and completely immune to termites, mold, and water rot","Ideal for rapid casting of curved parabolic monolithic domes"],cons:["Lower compressive strength (400-800 PSI) than solid earth — unsuitable for multi-story point loads","Requires continuous bio-foam generator wand tool ($120)","Needs exterior waterproof elastomeric or hot lime plaster coat"],supplier:{name:"Domegaia / AirCrete Global Supplies",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"support@domegaia.com | +1 (808) 575-2000",website:"domegaia.com",exactPrice:"$38.00 per gallon bio-foaming concentrate (makes 2,500 sqft of foam) + local binder",minimumOrder:"1 Gallon jug + $120 Foam Generator wand",leadTime:"3-5 Days Direct Shipping"},laborDifficulty:"NOVICE FRIENDLY",lifespan:"80+ YEARS",compatibleLayers:["walls","roof","insulation"],colorHex:"#E2E2DC",textureType:"aircrete_pumice",badge:"BEST FOR DOMES"},{id:"ferrocement",name:"ULTRA-THIN FERROCEMENT SHELL",shortName:"Ferrocement Shell",category:"COMPOSITE MINERAL",tagline:"High-strength, seismic-proof thin monolithic hyperbolic parabolic shell.",description:"Layers of fine wire mesh and reinforcement steel encapsulated in dense pozzolan-rich mortar plaster. Creates self-supporting curved domes, vaults, and roofs with 1/10th the material volume of regular concrete.",unitCost:"$2.90 / sq ft surface",costPerSqFt:2.9,carbonImpact:-2.5,carbonRating:"RESOURCE EFFICIENT (A-)",thermalRValue:1.2,thermalMass:"MEDIUM",compressiveStrength:"5,000+ PSI",fireRating:"CLASS A (Indestructible to wildfire)",waterResistance:"MAXIMUM (Waterproof tank grade)",localSourcingRate:"95% Hardware Wire Mesh & Local Sand",sourcingMethod:"Constructed with localized manual wire tying and hand plastering. Zero heavy equipment.",pros:["Ultra-thin structural shell (only 1-2 inches thick) saving 90% of material volume","Extreme hurricane and seismic resistance (flexes without brittle cracking)","Completely waterproof and wildfire-proof (used for ocean boat hulls and cisterns)","Requires zero cranes or heavy machinery — tied and plastered by hand"],cons:["Low inherent thermal insulation (R-1.2) — must be paired with mycelium/hemp interior insulation","Requires meticulous tying of wire mesh armature layers","Manual plastering requires steady hand troweling"],supplier:{name:"National Hardware Supply & Local Mesh Distributors",location:"Available in every hardware supply yard globally",contact:"Local steel and masonry supply",website:"mcmaster.com (Expanded metal & hardware cloth)",exactPrice:'$0.32 / sq ft for 1/2" 19-gauge galvanized welded wire mesh + $14 lime sack',minimumOrder:"100 ft rolls ($32.00 / roll)",leadTime:"Same-Day Local Pickup"},laborDifficulty:"NOVICE / ARTISAN DIY",lifespan:"100+ YEARS",compatibleLayers:["roof","superstructure","water_harvesting"],colorHex:"#8E8E89",textureType:"curved_shell",badge:"HURRICANE & SEISMIC PROOF"},{id:"recycled_poly_bricks",name:"CIRCULAR RECYCLED POLYMER INTERLOCKS",shortName:"Recycled Poly-Bricks",category:"CIRCULAR POLYMER",tagline:"100% upcycled ocean & municipal plastic waste molded into indestructible lego blocks.",description:"Sorted and washed HDPE/PP/LDPE plastic waste melted and compression molded into interlocking tongue-and-groove structural blocks. Eliminates mortar entirely and cleans thousands of tons of plastic waste.",unitCost:"$1.80 / block ($3.40 / sq ft wall)",costPerSqFt:3.4,carbonImpact:-62,carbonRating:"PLASTIC DIVERSION (A+)",thermalRValue:6.2,thermalMass:"LOW-MEDIUM",compressiveStrength:"1,800 - 2,500 PSI",fireRating:"CLASS B (Fire retardant mineral additives)",waterResistance:"100% IMPERMEABLE",localSourcingRate:"100% Community Plastic Recycling Streams",sourcingMethod:"Melt shredded municipal plastic bottles/caps into compression block molds.",pros:["Cleans up thousands of lbs of toxic plastic waste from oceans and landfills","Interlocking dry assembly with zero mortar, zero water, and zero drying time","100% waterproof and impervious to underground moisture or termite rot","Lightweight and indestructible to seismic earthquakes"],cons:["Requires fire-retardant mineral coating or natural lime plaster covering","Lower thermal mass inertia than solid rammed earth","Requires community plastic shredder and heated compression mold rig"],supplier:{name:"ByFusion Global Inc. / Precious Plastic Community",location:"Los Angeles, California / Global Open-Source Network",contact:"info@byfusion.com | +1 (310) 906-0300",website:"byfusion.com",exactPrice:'$1.80 per ByBlock (16"x8"x8" interlocking block)',minimumOrder:"1 Pallet of 120 blocks ($216.00) or DIY Precious Plastic mold system",leadTime:"5-7 Days Freight"},laborDifficulty:"ZERO-TOOL DRY ASSEMBLY",lifespan:"500+ YEARS (Non-biodegradable longevity)",compatibleLayers:["walls","foundation","finishes"],colorHex:"#2E4057",textureType:"poly_block",badge:"ZERO-WASTE CIRCULAR"},{id:"bamboo_composite",name:"STRUCTURAL TREATED DENDROCALAMUS BAMBOO",shortName:"Engineered Bamboo",category:"RENEWABLE VEGETATION",tagline:"Tensile strength greater than mild steel with rapid 3-year agricultural regenerative cycle.",description:"Boron-salt treated giant bamboo culms or crushed strand-woven bamboo beams. Provides earthquake flexibility, organic curves, and ultra-fast community construction speed.",unitCost:"$2.20 / linear ft ($4.80 / sq ft frame)",costPerSqFt:4.8,carbonImpact:-88,carbonRating:"RAPID REGENERATIVE SINK (A+)",thermalRValue:2.1,thermalMass:"LOW",compressiveStrength:"4,000 PSI (Tensile: 28,000 PSI)",fireRating:"CLASS B (Boron treated)",waterResistance:"HIGH (When elevated off grade)",localSourcingRate:"100% Tropical/Subtropical Agriculture",sourcingMethod:"Harvest mature 3-4 year poles. Soak in natural borax solution for 14 days.",pros:["Tensile strength (28,000 PSI) rivaling steel with lightweight organic flexibility","Rapidly renewable agricultural crop (reaches full harvest maturity in only 3 years)","Absorbs massive amounts of atmospheric carbon during rapid growth cycle","Creates stunning organic curved roof structures and soaring communal halls"],cons:["Must be treated with natural boric acid/borax to prevent powder-post borer beetles","Requires specialized fish-mouth or pinned joinery techniques",'Must be elevated 12" off wet ground to prevent splashback moisture'],supplier:{name:"BamCore LLC / Guadua Bamboo Global Export",location:"Windsor, California & Ocala, Florida",contact:"sales@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:'$2.20 / linear ft (3-4" diameter structural Guadua culms, $44 per 20ft pole)',minimumOrder:"20 Poles or custom structural bundle",leadTime:"5 Business Days"},laborDifficulty:"NOVICE / COMMUNITY HAND CRAFT",lifespan:"75+ YEARS",compatibleLayers:["superstructure","roof","finishes"],colorHex:"#C49A45",textureType:"bamboo_pole",badge:"TENSILE POWERHOUSE"}],Ru=[{id:"offgrid_solar_water",name:"AUTONOMOUS LIFE-SUPPORT SUITE",description:"5.2kW Photovoltaic Monocrystalline Canopy + 10kWh LFP Battery + 2,000L Rainwater Harvesting & Gravity UV Filtration + Anaerobic Methane Bio-Digester.",cost:4800,carbonImpact:-1200,specs:"Zero municipal grid dependency. 100% daily power & potable water autonomy.",pros:["100% complete energy and potable drinking water sovereignty (zero utility bills forever)","Powers refrigerator, induction cooking, lighting, laptops, and water pumps 24/7","LFP (Lithium Iron Phosphate) battery provides 15+ years cycle life with zero fire risk","Anaerobic digester converts food and organic waste into clean methane cooking gas"],cons:["Requires initial setup investment ($4,800 turnkey complete)","Solar output depends on seasonal daylight (offset by 10kWh battery buffer)"],supplier:{name:"Signature Solar / EcoFlow PowerOcean Hub",location:"Sulphur Springs, Texas",contact:"sales@signaturesolar.com | +1 (903) 441-2090",website:"signaturesolar.com",exactPrice:"$4,800 turnkey complete kit (5kW Hybrid Inverter + 10.24kWh Server Rack Battery + 12x 450W Tier-1 Panels)",leadTime:"2-4 Business Days Freight"}},{id:"essential_eco_pod",name:"ESSENTIAL HYBRID UTILITY POD",description:"2.4kW Solar Array + 5kWh Battery + 1,000L Rain Filtration Cistern + Composting Toilet System.",cost:2400,carbonImpact:-650,specs:"Ideal for rapid single-family and disaster relief deployment.",pros:["Ultra-compact plug-and-play modular power crate ($2,400)","Provides essential daily lighting, phone/device charging, and gravity-fed pure water","Composting toilet system requires zero sewer pipes or municipal hookups"],cons:["Smaller 5kWh battery capacity (not designed for heavy high-draw power tools)","1,000L water cistern requires seasonal rainfall or atmospheric condenser backup"],supplier:{name:"Renogy Off-Grid Systems / Separett Sanitation",location:"Ontario, California",contact:"support@renogy.com | +1 (909) 287-7111",website:"renogy.com",exactPrice:"$2,400 all-in-one plug-and-play modular power and water crate",leadTime:"3-5 Business Days"}},{id:"microgrid_communal",name:"COMMUNAL MICRO-GRID HUB (MULTI-UNIT)",description:"25kW Centralized Solar Pergola + 50kWh Industrial Energy Storage + Central Atmospheric Water Condenser (500L/day) + Greywater Reed Bed Ecosystem.",cost:16500,carbonImpact:-5400,specs:"Powers 8-12 modular units with zero utility bills for community members.",pros:["Powers entire multi-family community or 12-pod village with central energy sovereignty","Atmospheric water generator condenses 500 liters of pure potable water per day out of thin air","Centralized maintenance reduces per-family cost to under $1,375 per residence"],cons:["Requires communal land area for 25kW solar pergola canopy and battery shed","Requires community agreement on power distribution management"],supplier:{name:"Fortress Power / Source Global Atmospheric Water",location:"Southampton, Pennsylvania / Scottsdale, Arizona",contact:"sales@fortresspower.com | +1 (877) 497-6937",website:"fortresspower.com",exactPrice:"$16,500 community district microgrid crate with integrated energy management system",leadTime:"7-10 Business Days"}}],ei={yzy_mono_dome:[{id:"dome_base",name:"SUBGRADE PLINTH & FOUNDATION",category:"FOUNDATION",description:"Load-bearing frost-proof plinth anchoring the catenary dome to bedrock.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","ceb_blocks","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:280,partType:"solid"},{id:"dome_shell",name:"MONOLITHIC DOME SHELL (MAIN ENVELOPE)",category:"ENVELOPE",description:"Parabolic curved earthen shell distributing structural loads into pure compression.",defaultMaterial:"aircrete",allowedMaterials:["aircrete","ceb_blocks","rammed_earth","hempcrete","ferrocement"],surfaceAreaSqft:650,partType:"curved_shell"},{id:"dome_window_oculus",name:"APERTURE: ZENITH SKYLIGHT OCULUS",category:"WINDOWS & APERTURES",description:"Circular central skylight portal bringing natural zenith daylight deep into the interior.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","solid_earthen_cap","timber_louver"],surfaceAreaSqft:25,partType:"aperture"},{id:"dome_portal_tunnel",name:"ENTRANCE TUNNEL & AIRLOCK PORTICO",category:"FACADE & ENTRANCE",description:"Protruding brutalist tunnel entry acting as thermal buffer and windbreak.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","cross_laminated_timber","geopolymer_concrete"],surfaceAreaSqft:90,partType:"portal"},{id:"dome_insulation_liner",name:"INTERIOR BIO-ACOUSTIC LINING",category:"INSULATION",description:"Continuous breathable interior insulation preventing acoustic reverberation.",defaultMaterial:"mycelium_panels",allowedMaterials:["mycelium_panels","hempcrete","aircrete"],surfaceAreaSqft:400,partType:"insulation"},{id:"dome_utilities",name:"OFF-GRID AUTONOMOUS LIFE-SUPPORT",category:"UTILITIES",description:"Closed-loop solar array, battery storage, and rainwater gravity filtration unit.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod","offgrid_solar_water"],surfaceAreaSqft:50,partType:"utility"}],rammed_earth_villa:[{id:"villa_foundation",name:"ENGINEERED SUBGRADE & SLAB",category:"FOUNDATION",description:"High-density monolithic slab with integrated radiant floor tubing.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:1200,partType:"solid"},{id:"villa_south_wall",name:"SOUTH FACADE ENVELOPE",category:"WALLS & APERTURES",description:"Front exterior envelope facing sun azimuth for passive solar heating.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass","cross_laminated_timber"],surfaceAreaSqft:380,partType:"swappable_wall"},{id:"villa_north_wall",name:"NORTH THERMAL SHIELD WALL",category:"WALLS",description:"Thick monolithic earth wall with zero openings to prevent winter heat loss.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","cross_laminated_timber"],surfaceAreaSqft:380,partType:"solid"},{id:"villa_side_walls",name:"EAST & WEST PERIMETER WALLS",category:"WALLS & APERTURES",description:"Flanking striated earth walls with narrow vertical daylight slits.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","hempcrete","triple_glazed_glass"],surfaceAreaSqft:450,partType:"swappable_wall"},{id:"villa_roof_cantilever",name:"CANTILEVERED MASS TIMBER ROOF SLAB",category:"ROOF & CANOPY",description:"Expansive 4-foot overhang roof protecting earthen walls from direct rainfall.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:1450,partType:"roof"},{id:"villa_window_portal",name:"DAYLIGHT RIBBON & PATIO PORTAL",category:"WINDOWS & APERTURES",description:"Floor-to-ceiling high-efficiency insulated low-E glazed glass sliding portal.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:180,partType:"aperture"},{id:"villa_utilities",name:"WHOLE-HOME REGENERATIVE ENERGY SUITE",category:"UTILITIES",description:"5.2kW Solar Pergola + 10kWh Battery + 2,000L Rain Cistern & Methane Digester.",defaultMaterial:"offgrid_solar_water",allowedMaterials:["offgrid_solar_water","essential_eco_pod","microgrid_communal"],surfaceAreaSqft:120,partType:"utility"}],modular_eco_apartments:[{id:"mod_pod_base",name:"PODIUM SUBGRADE & BASE",category:"FOUNDATION",description:"High-compressive engineered base absorbing multi-level residential loads.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:1800,partType:"solid"},{id:"mod_tier1_modules",name:"LEVEL 01 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Lower tier community apartments with direct shaded courtyard access.",defaultMaterial:"ceb_blocks",allowedMaterials:["ceb_blocks","cross_laminated_timber","hempcrete","rammed_earth"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier2_modules",name:"LEVEL 02 LIVING MODULES",category:"RESIDENTIAL MODULES",description:"Mid-level residential units with cantilevered balconies.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_tier3_modules",name:"LEVEL 03 PENTHOUSE MODULES",category:"RESIDENTIAL MODULES",description:"Top floor suites with biophilic light shafts and cross-breeze airflow.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ceb_blocks","hempcrete"],surfaceAreaSqft:1600,partType:"modular_box"},{id:"mod_facade_glazing",name:"COURTYARD WINDOWS & BALCONIES",category:"WINDOWS & APERTURES",description:"High-performance acoustic double/triple glazed window panels.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:420,partType:"aperture"},{id:"mod_roof_canopy",name:"COMMUNAL ROOFTOP CANOPY",category:"ROOF & CANOPY",description:"Mass timber roof pergola supporting communal solar array and food gardens.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","bamboo_composite","ferrocement"],surfaceAreaSqft:2e3,partType:"roof"},{id:"mod_utilities",name:"DISTRICT MICROGRID & WATER SUITE",category:"UTILITIES",description:"25kW Solar Pergola + 50kWh Battery + Central Water Condenser.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal","offgrid_solar_water"],surfaceAreaSqft:300,partType:"utility"}],donda_resilience_commons:[{id:"donda_base_plaza",name:"COMMUNAL PLAZA & AMPHITHEATER BASE",category:"FOUNDATION",description:"Permeable earth and geopolymer plaza naturally recharging local aquifers.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks","rammed_earth"],surfaceAreaSqft:6500,partType:"solid"},{id:"donda_central_dome",name:"CENTRAL COMMUNITY BIODOME",category:"CENTRAL COMMONS",description:"Geodesic gathering hub for communal dining, education, and hydroponic food.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","aircrete","bamboo_composite","triple_glazed_glass"],surfaceAreaSqft:2800,partType:"curved_shell"},{id:"donda_living_pods",name:"SATELLITE RESIDENTIAL DOMES (6 PODS)",category:"RESIDENTIAL CLUSTER",description:"Circular perimeter of monolithic dome homes for community residents.",defaultMaterial:"rammed_earth",allowedMaterials:["rammed_earth","ceb_blocks","aircrete","hempcrete"],surfaceAreaSqft:4800,partType:"modular_box"},{id:"donda_pergola_ring",name:"RAIN HARVESTING RING & SOLAR CANOPY",category:"ROOF & CANOPY",description:"Continuous circular canopy capturing 100% of seasonal rainfall for village use.",defaultMaterial:"bamboo_composite",allowedMaterials:["bamboo_composite","cross_laminated_timber","ferrocement"],surfaceAreaSqft:3200,partType:"roof"},{id:"donda_microgrid",name:"DECENTRALIZED CITY MICRO-GRID",category:"UTILITIES",description:"Zero-dependency power, water generation, and anaerobic waste recycling.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:800,partType:"utility"}],rapid_emergency_pod:[{id:"pod_base_chassis",name:"ELEVATED INTERLOCKING BASE PLINTH",category:"FOUNDATION",description:"Lightweight modular foundation elevating pod 6 inches off wet muddy ground.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","cross_laminated_timber"],surfaceAreaSqft:160,partType:"solid"},{id:"pod_bio_walls",name:"FLATPACK BIO-COMPOSITE ENVELOPE",category:"WALLS",description:"Interlocking tongue-and-groove insulated panels assembled with zero tools.",defaultMaterial:"recycled_poly_bricks",allowedMaterials:["recycled_poly_bricks","mycelium_panels","cross_laminated_timber"],surfaceAreaSqft:280,partType:"swappable_wall"},{id:"pod_origami_roof",name:"ANGLED WATER-DEFLECTING ROOF",category:"ROOF",description:"High-slope origami roof shedding monsoon rains and snow loads.",defaultMaterial:"ferrocement",allowedMaterials:["ferrocement","cross_laminated_timber","aircrete"],surfaceAreaSqft:190,partType:"roof"},{id:"pod_glazing",name:"LIGHT PORTS & EMERGENCY EGRESS",category:"WINDOWS & APERTURES",description:"Polycarbonate insulated light panels for natural interior illumination.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","timber_louver"],surfaceAreaSqft:40,partType:"aperture"},{id:"pod_utility_kit",name:"PLUG-AND-PLAY 12V EMERGENCY SOLAR KIT",category:"UTILITIES",description:"Integrated solar panel on roof powering interior LEDs, phone charging, and water filter.",defaultMaterial:"essential_eco_pod",allowedMaterials:["essential_eco_pod"],surfaceAreaSqft:30,partType:"utility"}],terrace_earth_apartments:[{id:"terrace_foundation",name:"ZIGGURAT BASE & RETAINING PLINTH",category:"FOUNDATION",description:"Stepped bedrock foundation supporting cascading multi-level earth terraces.",defaultMaterial:"geopolymer_concrete",allowedMaterials:["geopolymer_concrete","recycled_poly_bricks"],surfaceAreaSqft:3200,partType:"solid"},{id:"terrace_tier_walls",name:"STEPPED RESIDENTIAL WALL MATRIX",category:"WALLS",description:"Thick brutalist earth walls stepping backward on each residential tier.",defaultMaterial:"hempcrete",allowedMaterials:["hempcrete","rammed_earth","ceb_blocks","cross_laminated_timber"],surfaceAreaSqft:4800,partType:"swappable_wall"},{id:"terrace_garden_roofs",name:"CASCADING GREEN ROOF TERRACES",category:"ROOF & GARDENS",description:"Rooftop edible food gardens and soil thermal blankets for every apartment unit.",defaultMaterial:"cross_laminated_timber",allowedMaterials:["cross_laminated_timber","ferrocement"],surfaceAreaSqft:3800,partType:"roof"},{id:"terrace_panoramic_windows",name:"EXPANSIVE TERRACE GLAZING PORTALS",category:"WINDOWS & APERTURES",description:"Full-width glass sliding walls opening directly onto rooftop gardens.",defaultMaterial:"triple_glazed_glass",allowedMaterials:["triple_glazed_glass","smart_solar_glass","timber_louver"],surfaceAreaSqft:650,partType:"aperture"},{id:"terrace_utilities",name:"CENTRALIZED URBAN ECO-GRID",category:"UTILITIES",description:"Communal solar array + greywater reed-bed filtration recycling 100% of water.",defaultMaterial:"microgrid_communal",allowedMaterials:["microgrid_communal"],surfaceAreaSqft:600,partType:"utility"}]},ef=[{id:"triple_glazed_glass",name:"TRIPLE-PANE PASSIVE SOLAR GLAZING",shortName:"Triple-Pane Glazing",category:"HIGH-EFFICIENCY GLASS",tagline:"Argon gas-filled triple pane glass with low-E coating for massive daylight and zero heat loss.",description:"Converts solid earth walls into expansive panoramic portals. Features warm-edge spacers, non-toxic wood/aluminum frame, and superior sound dampening.",unitCost:"$28.00 / sq ft",costPerSqFt:28,carbonImpact:8.5,thermalRValue:8,pros:["Floods interior with 100% natural mood-elevating daylight","R-8 insulation value prevents winter drafts and heat loss","Superior acoustic insulation isolates external noise","Expands visual space making compact earth homes feel massive"],cons:["Higher upfront cost than solid earthen blocks ($28/sqft vs $4.20/sqft)","Requires careful alignment and flashing during installation","Needs occasional window cleaning"],supplier:{name:"Alpen High Performance Glass / Loewen Windows",location:"Louisville, Colorado",contact:"sales@alpenhpp.com | +1 (303) 833-7000",website:"alpenhpp.com",exactPrice:"$28.00 / sq ft customized to rough opening",leadTime:"2-3 Weeks"},colorHex:"#68A5BA",textureType:"glass_glaze",badge:"MAX DAYLIGHT PORTAL"},{id:"smart_solar_glass",name:"PHOTOVOLTAIC BIPV SMART TINT GLASS",shortName:"Solar Smart Glass",category:"SOLAR GENERATING GLASS",tagline:"Transparent solar window generating daily electricity while electronically tinting.",description:"Building-Integrated Photovoltaics (BIPV) embedded within architectural glass. Generates 50W per square meter of clean electricity while rejecting 98% of solar glare.",unitCost:"$44.00 / sq ft",costPerSqFt:44,carbonImpact:-65,thermalRValue:9.5,pros:["Window actively generates clean off-grid electricity throughout daylight hours","Dynamic electrochromic tinting eliminates need for curtains or blinds","Rejects 99% of damaging UV rays to protect interior furniture"],cons:["Premium investment cost ($44.00/sqft)","Requires low-voltage electrical wire hookup to battery bank"],supplier:{name:"Ubiquitous Energy / Onyx Solar Photovoltaic Glass",location:"Redwood City, California",contact:"info@onyxsolar.com | +1 (917) 563-3993",website:"onyxsolar.com / ubiquitous.energy",exactPrice:"$44.00 / sq ft custom architectural sizing",leadTime:"3-4 Weeks"},colorHex:"#3A7E94",textureType:"solar_glass",badge:"CLEAN ENERGY PORTAL"},{id:"timber_louver",name:"MASS TIMBER OPERABLE BREEZE LOUVERS",shortName:"Timber Breeze Louvers",category:"NATURAL VENTILATION",tagline:"Adjustable cedar/bamboo louvers channeling cooling breezes while blocking direct solar heat.",description:"Hand-crafted operable wooden horizontal fins allowing customizable privacy, shade, and natural cross-ventilation.",unitCost:"$16.50 / sq ft",costPerSqFt:16.5,carbonImpact:-28,thermalRValue:4.2,pros:["Channels natural mountain & desert breezes into home for zero-cost cooling","100% natural organic wood aesthetics matching Yeezy minimal architecture","Carbon-negative natural material"],cons:["Does not seal airtight (designed for temperate or tropical microclimates)","Requires occasional natural oil re-coating every 5 years"],supplier:{name:"BamCore / Local Woodcraft Guilds",location:"North America Regional Co-ops",contact:"craft@bamcore.com",website:"bamcore.com",exactPrice:"$16.50 / sq ft with brass pivot hardware",leadTime:"1 Week"},colorHex:"#A87A46",textureType:"timber_louver",badge:"PASSIVE COOLING"}];/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=Ke.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...f},p)=>Ke.createElement("svg",{ref:p,...Gy,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:lg("lucide",o),...f},[...u.map(([g,v])=>Ke.createElement(g,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(s,e)=>{const n=Ke.forwardRef(({className:r,...o},c)=>Ke.createElement(jy,{ref:c,iconNode:e,className:lg(`lucide-${Vy(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cg=Nt("BookOpen",Wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],ug=Nt("Building2",Xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],qy=Nt("Calculator",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ll=Nt("Check",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],dg=Nt("CircleAlert",Zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Qy=Nt("Compass",Ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],e0=Nt("Copy",Jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],fg=Nt("Cpu",t0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],hg=Nt("DollarSign",n0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],cd=Nt("Download",i0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zp=Nt("Eye",r0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],a0=Nt("FlaskConical",s0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],l0=Nt("Focus",o0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],u0=Nt("Globe",c0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],f0=Nt("Heart",d0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],tf=Nt("Layers",h0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],m0=Nt("Leaf",p0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],x0=Nt("Menu",g0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],v0=Nt("Printer",y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],pg=Nt("RotateCcw",_0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],mg=Nt("Search",S0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],M0=Nt("Shield",E0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ud=Nt("Sparkles",b0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],T0=Nt("Sun",w0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],C0=Nt("TrendingDown",A0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],N0=Nt("TriangleAlert",R0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],L0=Nt("Volume2",I0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],D0=Nt("VolumeX",P0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],O0=Nt("Wind",U0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kl=Nt("X",z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],F0=Nt("Zap",k0);let ws=null,Ha=!0;const gg=()=>{if(!ws&&typeof window<"u"){const s=window.AudioContext||window.webkitAudioContext;s&&(ws=new s)}return ws&&ws.state==="suspended"&&ws.resume(),ws},B0=s=>(Ha=!Ha,Ha),Ot=(s=800,e=.015,n="sine")=>{if(Ha)try{const r=gg();if(!r)return;const o=r.createOscillator(),c=r.createGain();o.type=n,o.frequency.setValueAtTime(s,r.currentTime),o.frequency.exponentialRampToValueAtTime(120,r.currentTime+e),c.gain.setValueAtTime(.04,r.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),o.connect(c),c.connect(r.destination),o.start(),o.stop(r.currentTime+e)}catch{}},Va=()=>{Ot(1200,.025,"triangle")},ja=()=>{if(Ha)try{const s=gg();if(!s)return;const e=s.createOscillator(),n=s.createGain();e.type="sine",e.frequency.setValueAtTime(440,s.currentTime),e.frequency.setValueAtTime(880,s.currentTime+.06),n.gain.setValueAtTime(.05,s.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+.14),e.connect(n),n.connect(s.destination),e.start(),e.stop(s.currentTime+.15)}catch{}};function H0({activeTab:s,setActiveTab:e,totalCost:n,totalCarbon:r,onOpenCostBreakdown:o,onOpenBlueprintExport:c,onOpenVisionModal:u}){const[f,p]=Ke.useState(!0),[g,v]=Ke.useState(!1),S=()=>{const E=B0();p(E),E&&Ot(1e3,.03)},_=[{id:"builder",label:"01 // CONFIGURATOR",icon:ug},{id:"materials",label:"02 // MATERIALS INDEX",icon:tf},{id:"furniture",label:"03 // ECO FURNITURE",icon:fg},{id:"tutorials",label:"04 // NOVICE BUILD GUIDE",icon:cg},{id:"sourcing",label:"05 // SOURCING RADAR",icon:Qy},{id:"benchmarks",label:"06 // COST BENCHMARKS",icon:hg}],M=E=>{Ot(),e(E),v(!1)};return h.jsxs("header",{className:"sticky top-0 z-50 bg-yzy-black/95 backdrop-blur-md border-b border-yzy-slate select-none",children:[h.jsxs("div",{className:"w-full bg-yzy-obsidian border-b border-yzy-slate/60 px-3 sm:px-6 py-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider",children:[h.jsx("div",{className:"flex items-center gap-3",children:h.jsxs("span",{className:"flex items-center gap-1.5 text-yzy-chalk",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"font-bold tracking-widest uppercase",children:"EZY.INFRA"}),h.jsx("span",{className:"hidden sm:inline text-yzy-ash",children:"| OPEN-SOURCE REGENERATIVE SHELTER"})]})}),h.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[h.jsxs("button",{onClick:()=>{Ot(900,.03),u()},className:"flex items-center gap-1.5 text-yzy-chalk hover:text-yzy-bone font-bold tracking-widest uppercase transition-colors",children:[h.jsx(ud,{className:"w-3 h-3 text-yzy-neon"}),h.jsx("span",{className:"underline decoration-yzy-neon/60 underline-offset-2",children:"YE // DONDA MANIFESTO"})]}),h.jsxs("button",{onClick:S,className:"flex items-center gap-1 text-yzy-ash hover:text-yzy-bone transition-colors",title:f?"Mute Haptic Sound":"Enable Haptic Sound",children:[f?h.jsx(L0,{className:"w-3.5 h-3.5 text-yzy-chalk"}):h.jsx(D0,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden sm:inline",children:f?"AUDIO ON":"MUTED"})]})]})]}),h.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between",children:[h.jsxs("div",{onClick:()=>M("builder"),className:"cursor-pointer flex flex-col",children:[h.jsx("div",{className:"flex items-baseline gap-2",children:h.jsxs("span",{className:"font-display font-black text-xl sm:text-2xl tracking-tighter text-yzy-bone",children:["EZY ",h.jsx("span",{className:"font-mono text-sm tracking-widest text-yzy-ash font-normal",children:"EARTH"})]})}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"SUSTAINABLE ARCHITECTURAL SYSTEM"})]}),h.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-yzy-obsidian/80 p-1 border border-yzy-slate",children:_.map(E=>{const T=E.icon,y=s===E.id;return h.jsxs("button",{onClick:()=>M(E.id),className:`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] tracking-wider transition-all ${y?"bg-yzy-bone text-yzy-black font-bold shadow-sm":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/50"}`,children:[h.jsx(T,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:E.label})]},E.id)})}),h.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[h.jsxs("button",{onClick:()=>{Ot(),o()},className:"flex items-center gap-2 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate hover:border-yzy-ash px-2.5 sm:px-3.5 py-1.5 text-left transition-all",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"EST. COST"}),h.jsxs("span",{className:"font-mono font-bold text-xs sm:text-sm text-yzy-bone tracking-tight",children:["$",n.toLocaleString()]})]}),h.jsxs("div",{className:"hidden sm:flex flex-col border-l border-yzy-slate pl-2.5",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase",children:"CARBON NET"}),h.jsx("span",{className:`font-mono font-bold text-xs ${r<=0?"text-yzy-neon":"text-yzy-warning"}`,children:r<=0?`${r} kg`:`+${r} kg`})]})]}),h.jsxs("button",{onClick:()=>{ja(),c()},className:"hidden sm:flex items-center gap-1.5 bg-yzy-bone hover:bg-white text-yzy-black px-3 py-2 font-mono text-xs font-bold tracking-wider transition-all active:scale-95",children:[h.jsx(cd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"EXPORT CAD"})]}),h.jsx("button",{onClick:()=>{Ot(),v(!g)},className:"lg:hidden p-2 text-yzy-bone hover:bg-yzy-slate/50 border border-yzy-slate","aria-label":"Toggle Navigation",children:g?h.jsx(kl,{className:"w-5 h-5"}):h.jsx(x0,{className:"w-5 h-5"})})]})]}),g&&h.jsxs("div",{className:"lg:hidden bg-yzy-obsidian border-b border-yzy-slate px-4 py-4 flex flex-col gap-2",children:[_.map(E=>{const T=E.icon,y=s===E.id;return h.jsxs("button",{onClick:()=>M(E.id),className:`flex items-center justify-between w-full px-3 py-2.5 font-mono text-xs tracking-wider border ${y?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"text-yzy-chalk hover:bg-yzy-slate/40 border-yzy-slate/60"}`,children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx(T,{className:"w-4 h-4"}),h.jsx("span",{children:E.label})]}),y&&h.jsx("span",{className:"text-[10px] uppercase font-mono tracking-widest bg-yzy-black text-yzy-bone px-1.5 py-0.5",children:"ACTIVE"})]},E.id)}),h.jsxs("div",{className:"pt-2 flex flex-col gap-2 border-t border-yzy-slate mt-2",children:[h.jsxs("button",{onClick:()=>{v(!1),c()},className:"flex items-center justify-center gap-2 bg-yzy-bone text-yzy-black py-2.5 font-mono text-xs font-bold tracking-widest",children:[h.jsx(cd,{className:"w-4 h-4"}),h.jsx("span",{children:"EXPORT BLUEPRINT CAD SPEC"})]}),h.jsxs("button",{onClick:()=>{v(!1),u()},className:"flex items-center justify-center gap-2 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk py-2.5 font-mono text-xs font-bold tracking-widest",children:[h.jsx(ud,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("span",{children:"YE // DONDA ARCHITECTURAL VISION"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="170",V0=0,Kp=1,G0=2,xg=1,rf=2,Gi=3,wr=0,Un=1,Mi=2,Mr=0,Vs=1,Qp=2,Jp=3,em=4,j0=5,$r=100,W0=101,X0=102,Y0=103,q0=104,$0=200,Z0=201,K0=202,Q0=203,dd=204,fd=205,J0=206,ev=207,tv=208,nv=209,iv=210,rv=211,sv=212,av=213,ov=214,hd=0,pd=1,md=2,Ws=3,gd=4,xd=5,yd=6,vd=7,yg=0,lv=1,cv=2,br=0,uv=1,dv=2,fv=3,hv=4,pv=5,mv=6,gv=7,vg=300,Xs=301,Ys=302,_d=303,Sd=304,Fl=306,Ed=1e3,Kr=1001,Md=1002,mi=1003,xv=1004,il=1005,bi=1006,Nu=1007,Qr=1008,qi=1009,_g=1010,Sg=1011,Ga=1012,sf=1013,Jr=1014,Wi=1015,Wa=1016,af=1017,of=1018,qs=1020,Eg=35902,Mg=1021,bg=1022,pi=1023,wg=1024,Tg=1025,Gs=1026,$s=1027,Ag=1028,lf=1029,Cg=1030,cf=1031,uf=1033,Tl=33776,Al=33777,Cl=33778,Rl=33779,bd=35840,wd=35841,Td=35842,Ad=35843,Cd=36196,Rd=37492,Nd=37496,Id=37808,Ld=37809,Pd=37810,Dd=37811,Ud=37812,Od=37813,zd=37814,kd=37815,Fd=37816,Bd=37817,Hd=37818,Vd=37819,Gd=37820,jd=37821,Nl=36492,Wd=36494,Xd=36495,Rg=36283,Yd=36284,qd=36285,$d=36286,yv=3200,vv=3201,Ng=0,_v=1,Er="",Jn="srgb",Ks="srgb-linear",Bl="linear",Pt="srgb",Ts=7680,tm=519,Sv=512,Ev=513,Mv=514,Ig=515,bv=516,wv=517,Tv=518,Av=519,nm=35044,im="300 es",Xi=2e3,Pl=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=Math.PI/180,Zd=180/Math.PI;function Xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Dn(s,e,n){return Math.max(e,Math.min(n,s))}function Cv(s,e){return(s%e+e)%e}function Lu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,n,r,o,c,u,f,p,g){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,g)}set(e,n,r,o,c,u,f,p,g){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],g=r[1],v=r[4],S=r[7],_=r[2],M=r[5],E=r[8],T=o[0],y=o[3],x=o[6],U=o[1],D=o[4],R=o[7],Z=o[2],k=o[5],z=o[8];return c[0]=u*T+f*U+p*Z,c[3]=u*y+f*D+p*k,c[6]=u*x+f*R+p*z,c[1]=g*T+v*U+S*Z,c[4]=g*y+v*D+S*k,c[7]=g*x+v*R+S*z,c[2]=_*T+M*U+E*Z,c[5]=_*y+M*D+E*k,c[8]=_*x+M*R+E*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],v=e[8];return n*u*v-n*f*g-r*c*v+r*f*p+o*c*g-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],v=e[8],S=v*u-f*g,_=f*p-v*c,M=g*c-u*p,E=n*S+r*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(o*g-v*r)*T,e[2]=(f*r-o*u)*T,e[3]=_*T,e[4]=(v*n-o*p)*T,e[5]=(o*c-f*n)*T,e[6]=M*T,e[7]=(r*p-g*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const p=Math.cos(c),g=Math.sin(c);return this.set(r*p,r*g,-r*(p*u+g*f)+u+e,-o*g,o*p,-o*(-g*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new mt;function Lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rv(){const s=Dl("canvas");return s.style.display="block",s}const rm={};function Fa(s){s in rm||(rm[s]=!0,console.warn(s))}function Nv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Iv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Pt&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Pt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?Bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sm=[.64,.33,.3,.6,.15,.06],am=[.2126,.7152,.0722],om=[.3127,.329],lm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cm=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[Ks]:{primaries:sm,whitePoint:om,transfer:Bl,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:am,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:sm,whitePoint:om,transfer:Pt,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:am,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}});let As;class Pv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Dl("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Yi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Yi(n[r]/255)*255):n[r]=Yi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dv=0;class Pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Du(o[u].image)):c.push(Du(o[u]))}else c=Du(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uv=0;class On extends Qs{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,r=Kr,o=Kr,c=bi,u=Qr,f=pi,p=qi,g=On.DEFAULT_ANISOTROPY,v=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Xa(),this.name="",this.source=new Pg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=vg;On.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,o=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,g=p[0],v=p[4],S=p[8],_=p[1],M=p[5],E=p[9],T=p[2],y=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(S-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(S+T)<.1&&Math.abs(E+y)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(g+1)/2,R=(M+1)/2,Z=(x+1)/2,k=(v+_)/4,z=(S+T)/4,H=(E+y)/4;return D>R&&D>Z?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=k/r,c=z/r):R>Z?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=k/o,c=H/o):Z<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(Z),r=z/c,o=H/c),this.set(r,o,c,n),this}let U=Math.sqrt((y-E)*(y-E)+(S-T)*(S-T)+(_-v)*(_-v));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(S-T)/U,this.z=(_-v)/U,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ov extends Qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new On(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Pg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Ov{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dg extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zv extends On{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let p=r[o+0],g=r[o+1],v=r[o+2],S=r[o+3];const _=c[u+0],M=c[u+1],E=c[u+2],T=c[u+3];if(f===0){e[n+0]=p,e[n+1]=g,e[n+2]=v,e[n+3]=S;return}if(f===1){e[n+0]=_,e[n+1]=M,e[n+2]=E,e[n+3]=T;return}if(S!==T||p!==_||g!==M||v!==E){let y=1-f;const x=p*_+g*M+v*E+S*T,U=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const Z=Math.sqrt(D),k=Math.atan2(Z,x*U);y=Math.sin(y*k)/Z,f=Math.sin(f*k)/Z}const R=f*U;if(p=p*y+_*R,g=g*y+M*R,v=v*y+E*R,S=S*y+T*R,y===1-f){const Z=1/Math.sqrt(p*p+g*g+v*v+S*S);p*=Z,g*=Z,v*=Z,S*=Z}}e[n]=p,e[n+1]=g,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],p=r[o+1],g=r[o+2],v=r[o+3],S=c[u],_=c[u+1],M=c[u+2],E=c[u+3];return e[n]=f*E+v*S+p*M-g*_,e[n+1]=p*E+v*_+g*S-f*M,e[n+2]=g*E+v*M+f*_-p*S,e[n+3]=v*E-f*S-p*_-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,g=f(r/2),v=f(o/2),S=f(c/2),_=p(r/2),M=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*v*S+g*M*E,this._y=g*M*S-_*v*E,this._z=g*v*E+_*M*S,this._w=g*v*S-_*M*E;break;case"YXZ":this._x=_*v*S+g*M*E,this._y=g*M*S-_*v*E,this._z=g*v*E-_*M*S,this._w=g*v*S+_*M*E;break;case"ZXY":this._x=_*v*S-g*M*E,this._y=g*M*S+_*v*E,this._z=g*v*E+_*M*S,this._w=g*v*S-_*M*E;break;case"ZYX":this._x=_*v*S-g*M*E,this._y=g*M*S+_*v*E,this._z=g*v*E-_*M*S,this._w=g*v*S+_*M*E;break;case"YZX":this._x=_*v*S+g*M*E,this._y=g*M*S+_*v*E,this._z=g*v*E-_*M*S,this._w=g*v*S-_*M*E;break;case"XZY":this._x=_*v*S-g*M*E,this._y=g*M*S-_*v*E,this._z=g*v*E+_*M*S,this._w=g*v*S+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],g=n[2],v=n[6],S=n[10],_=r+f+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-g)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+g)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(c-g)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(c+g)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,p=n._y,g=n._z,v=n._w;return this._x=r*v+u*f+o*g-c*p,this._y=o*v+u*p+c*f-r*g,this._z=c*v+u*g+r*p-o*f,this._w=u*v-r*f-o*p-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,f),S=Math.sin((1-n)*v)/g,_=Math.sin(n*v)/g;return this._w=u*S+this._w*_,this._x=r*S+this._x*_,this._y=o*S+this._y*_,this._z=c*S+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,p=e.w,g=2*(u*o-f*r),v=2*(f*n-c*o),S=2*(c*r-u*n);return this.x=n+p*g+u*S-f*v,this.y=r+p*v+f*g-c*S,this.z=o+p*S+c*v-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new le,um=new Ya;class qa{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ui):ui.fromBufferAttribute(c,u),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),sl.subVectors(this.max,Da),Cs.subVectors(e.a,Da),Rs.subVectors(e.b,Da),Ns.subVectors(e.c,Da),gr.subVectors(Rs,Cs),xr.subVectors(Ns,Rs),Hr.subVectors(Cs,Ns);let n=[0,-gr.z,gr.y,0,-xr.z,xr.y,0,-Hr.z,Hr.y,gr.z,0,-gr.x,xr.z,0,-xr.x,Hr.z,0,-Hr.x,-gr.y,gr.x,0,-xr.y,xr.x,0,-Hr.y,Hr.x,0];return!Ou(n,Cs,Rs,Ns,sl)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,Cs,Rs,Ns,sl))?!1:(al.crossVectors(gr,xr),n=[al.x,al.y,al.z],Ou(n,Cs,Rs,Ns,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new le,new le,new le,new le,new le,new le,new le,new le],ui=new le,rl=new qa,Cs=new le,Rs=new le,Ns=new le,gr=new le,xr=new le,Hr=new le,Da=new le,sl=new le,al=new le,Vr=new le;function Ou(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Vr.fromArray(s,c);const f=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),p=e.dot(Vr),g=n.dot(Vr),v=r.dot(Vr);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>f)return!1}return!0}const kv=new qa,Ua=new le,zu=new le;class Hl{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):kv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(zu)),this.expandByPoint(Ua.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new le,ku=new le,ol=new le,yr=new le,Fu=new le,ll=new le,Bu=new le;class df{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){ku.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(ku);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ol),f=yr.dot(this.direction),p=-yr.dot(ol),g=yr.lengthSq(),v=Math.abs(1-u*u);let S,_,M,E;if(v>0)if(S=u*p-f,_=u*f-p,E=c*v,S>=0)if(_>=-E)if(_<=E){const T=1/v;S*=T,_*=T,M=S*(S+u*_+2*f)+_*(u*S+_+2*p)+g}else _=c,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*p)+g;else _=-c,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*p)+g;else _<=-E?(S=Math.max(0,-(-u*c+f)),_=S>0?-c:Math.min(Math.max(-c,-p),c),M=-S*S+_*(_+2*p)+g):_<=E?(S=0,_=Math.min(Math.max(-c,-p),c),M=_*(_+2*p)+g):(S=Math.max(0,-(u*c+f)),_=S>0?c:Math.min(Math.max(-c,-p),c),M=-S*S+_*(_+2*p)+g);else _=u>0?-c:c,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(ku).addScaledVector(ol,_),M}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,p;const g=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,_=this.origin;return g>=0?(r=(e.min.x-_.x)*g,o=(e.max.x-_.x)*g):(r=(e.max.x-_.x)*g,o=(e.min.x-_.x)*g),v>=0?(c=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-_.z)*S,p=(e.max.z-_.z)*S):(f=(e.max.z-_.z)*S,p=(e.min.z-_.z)*S),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,r,o,c){Fu.subVectors(n,e),ll.subVectors(r,e),Bu.crossVectors(Fu,ll);let u=this.direction.dot(Bu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;yr.subVectors(this.origin,e);const p=f*this.direction.dot(ll.crossVectors(yr,ll));if(p<0)return null;const g=f*this.direction.dot(Fu.cross(yr));if(g<0||p+g>u)return null;const v=-f*yr.dot(Bu);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,o,c,u,f,p,g,v,S,_,M,E,T,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,g,v,S,_,M,E,T,y)}set(e,n,r,o,c,u,f,p,g,v,S,_,M,E,T,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=g,x[6]=v,x[10]=S,x[14]=_,x[3]=M,x[7]=E,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),c=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),g=Math.sin(o),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=u*v,M=u*S,E=f*v,T=f*S;n[0]=p*v,n[4]=-p*S,n[8]=g,n[1]=M+E*g,n[5]=_-T*g,n[9]=-f*p,n[2]=T-_*g,n[6]=E+M*g,n[10]=u*p}else if(e.order==="YXZ"){const _=p*v,M=p*S,E=g*v,T=g*S;n[0]=_+T*f,n[4]=E*f-M,n[8]=u*g,n[1]=u*S,n[5]=u*v,n[9]=-f,n[2]=M*f-E,n[6]=T+_*f,n[10]=u*p}else if(e.order==="ZXY"){const _=p*v,M=p*S,E=g*v,T=g*S;n[0]=_-T*f,n[4]=-u*S,n[8]=E+M*f,n[1]=M+E*f,n[5]=u*v,n[9]=T-_*f,n[2]=-u*g,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const _=u*v,M=u*S,E=f*v,T=f*S;n[0]=p*v,n[4]=E*g-M,n[8]=_*g+T,n[1]=p*S,n[5]=T*g+_,n[9]=M*g-E,n[2]=-g,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,M=u*g,E=f*p,T=f*g;n[0]=p*v,n[4]=T-_*S,n[8]=E*S+M,n[1]=S,n[5]=u*v,n[9]=-f*v,n[2]=-g*v,n[6]=M*S+E,n[10]=_-T*S}else if(e.order==="XZY"){const _=u*p,M=u*g,E=f*p,T=f*g;n[0]=p*v,n[4]=-S,n[8]=g*v,n[1]=_*S+T,n[5]=u*v,n[9]=M*S-E,n[2]=E*S-M,n[6]=f*v,n[10]=T*S+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,Bv)}lookAt(e,n,r){const o=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),vr.crossVectors(r,Hn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),vr.crossVectors(r,Hn)),vr.normalize(),cl.crossVectors(Hn,vr),o[0]=vr.x,o[4]=cl.x,o[8]=Hn.x,o[1]=vr.y,o[5]=cl.y,o[9]=Hn.y,o[2]=vr.z,o[6]=cl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],g=r[12],v=r[1],S=r[5],_=r[9],M=r[13],E=r[2],T=r[6],y=r[10],x=r[14],U=r[3],D=r[7],R=r[11],Z=r[15],k=o[0],z=o[4],H=o[8],N=o[12],C=o[1],F=o[5],te=o[9],X=o[13],ne=o[2],ie=o[6],se=o[10],re=o[14],V=o[3],he=o[7],L=o[11],b=o[15];return c[0]=u*k+f*C+p*ne+g*V,c[4]=u*z+f*F+p*ie+g*he,c[8]=u*H+f*te+p*se+g*L,c[12]=u*N+f*X+p*re+g*b,c[1]=v*k+S*C+_*ne+M*V,c[5]=v*z+S*F+_*ie+M*he,c[9]=v*H+S*te+_*se+M*L,c[13]=v*N+S*X+_*re+M*b,c[2]=E*k+T*C+y*ne+x*V,c[6]=E*z+T*F+y*ie+x*he,c[10]=E*H+T*te+y*se+x*L,c[14]=E*N+T*X+y*re+x*b,c[3]=U*k+D*C+R*ne+Z*V,c[7]=U*z+D*F+R*ie+Z*he,c[11]=U*H+D*te+R*se+Z*L,c[15]=U*N+D*X+R*re+Z*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],p=e[9],g=e[13],v=e[2],S=e[6],_=e[10],M=e[14],E=e[3],T=e[7],y=e[11],x=e[15];return E*(+c*p*S-o*g*S-c*f*_+r*g*_+o*f*M-r*p*M)+T*(+n*p*M-n*g*_+c*u*_-o*u*M+o*g*v-c*p*v)+y*(+n*g*S-n*f*M-c*u*S+r*u*M+c*f*v-r*g*v)+x*(-o*f*v-n*p*S+n*f*_+o*u*S-r*u*_+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],v=e[8],S=e[9],_=e[10],M=e[11],E=e[12],T=e[13],y=e[14],x=e[15],U=S*y*g-T*_*g+T*p*M-f*y*M-S*p*x+f*_*x,D=E*_*g-v*y*g-E*p*M+u*y*M+v*p*x-u*_*x,R=v*T*g-E*S*g+E*f*M-u*T*M-v*f*x+u*S*x,Z=E*S*p-v*T*p-E*f*_+u*T*_+v*f*y-u*S*y,k=n*U+r*D+o*R+c*Z;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=U*z,e[1]=(T*_*c-S*y*c-T*o*M+r*y*M+S*o*x-r*_*x)*z,e[2]=(f*y*c-T*p*c+T*o*g-r*y*g-f*o*x+r*p*x)*z,e[3]=(S*p*c-f*_*c-S*o*g+r*_*g+f*o*M-r*p*M)*z,e[4]=D*z,e[5]=(v*y*c-E*_*c+E*o*M-n*y*M-v*o*x+n*_*x)*z,e[6]=(E*p*c-u*y*c-E*o*g+n*y*g+u*o*x-n*p*x)*z,e[7]=(u*_*c-v*p*c+v*o*g-n*_*g-u*o*M+n*p*M)*z,e[8]=R*z,e[9]=(E*S*c-v*T*c-E*r*M+n*T*M+v*r*x-n*S*x)*z,e[10]=(u*T*c-E*f*c+E*r*g-n*T*g-u*r*x+n*f*x)*z,e[11]=(v*f*c-u*S*c-v*r*g+n*S*g+u*r*M-n*f*M)*z,e[12]=Z*z,e[13]=(v*T*o-E*S*o+E*r*_-n*T*_-v*r*y+n*S*y)*z,e[14]=(E*f*o-u*T*o-E*r*p+n*T*p+u*r*y-n*f*y)*z,e[15]=(u*S*o-v*f*o+v*r*p-n*S*p-u*r*_+n*f*_)*z,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,g=c*u,v=c*f;return this.set(g*u+r,g*f-o*p,g*p+o*f,0,g*f+o*p,v*f+r,v*p-o*u,0,g*p-o*f,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,g=c+c,v=u+u,S=f+f,_=c*g,M=c*v,E=c*S,T=u*v,y=u*S,x=f*S,U=p*g,D=p*v,R=p*S,Z=r.x,k=r.y,z=r.z;return o[0]=(1-(T+x))*Z,o[1]=(M+R)*Z,o[2]=(E-D)*Z,o[3]=0,o[4]=(M-R)*k,o[5]=(1-(_+x))*k,o[6]=(y+U)*k,o[7]=0,o[8]=(E+D)*z,o[9]=(y-U)*z,o[10]=(1-(_+T))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Is.set(o[0],o[1],o[2]).length();const u=Is.set(o[4],o[5],o[6]).length(),f=Is.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],di.copy(this);const g=1/c,v=1/u,S=1/f;return di.elements[0]*=g,di.elements[1]*=g,di.elements[2]*=g,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=S,di.elements[9]*=S,di.elements[10]*=S,n.setFromRotationMatrix(di),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=Xi){const p=this.elements,g=2*c/(n-e),v=2*c/(r-o),S=(n+e)/(n-e),_=(r+o)/(r-o);let M,E;if(f===Xi)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===Pl)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Xi){const p=this.elements,g=1/(n-e),v=1/(r-o),S=1/(u-c),_=(n+e)*g,M=(r+o)*v;let E,T;if(f===Xi)E=(u+c)*S,T=-2*S;else if(f===Pl)E=c*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Is=new le,di=new Vt,Fv=new le(0,0,0),Bv=new le(1,1,1),vr=new le,cl=new le,Hn=new le,dm=new Vt,fm=new Ya;class Ti{constructor(e=0,n=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],p=o[1],g=o[5],v=o[9],S=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Dn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(Dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hv=0;const hm=new le,Ls=new Ya,Bi=new Vt,ul=new le,Oa=new le,Vv=new le,Gv=new Ya,pm=new le(1,0,0),mm=new le(0,1,0),gm=new le(0,0,1),xm={type:"added"},jv={type:"removed"},Ps={type:"childadded",child:null},Hu={type:"childremoved",child:null};class dn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new le,n=new Ti,r=new Ya,o=new le(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Vt},normalMatrix:{value:new mt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,n){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Oa,ul,this.up):Bi.lookAt(ul,Oa,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jv),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,Vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const S=p[g];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,g=this.material.length;p<g;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),g=u(e.textures),v=u(e.images),S=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const p=[];for(const g in f){const v=f[g];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}dn.DEFAULT_UP=new le(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new le,Hi=new le,Vu=new le,Vi=new le,Ds=new le,Us=new le,ym=new le,Gu=new le,ju=new le,Wu=new le,Xu=new Xt,Yu=new Xt,qu=new Xt;class hi{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),fi.subVectors(e,n),o.cross(fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){fi.subVectors(o,n),Hi.subVectors(r,n),Vu.subVectors(e,n);const u=fi.dot(fi),f=fi.dot(Hi),p=fi.dot(Vu),g=Hi.dot(Hi),v=Hi.dot(Vu),S=u*g-f*f;if(S===0)return c.set(0,0,0),null;const _=1/S,M=(g*p-f*v)*_,E=(u*v-f*p)*_;return c.set(1-M-E,E,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,r,o,c,u,f,p){return this.getBarycoord(e,n,r,o,Vi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Vi.x),p.addScaledVector(u,Vi.y),p.addScaledVector(f,Vi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Xu.setScalar(0),Yu.setScalar(0),qu.setScalar(0),Xu.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,r),qu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Xu,c.x),u.addScaledVector(Yu,c.y),u.addScaledVector(qu,c.z),u}static isFrontFacing(e,n,r,o){return fi.subVectors(r,n),Hi.subVectors(e,n),fi.cross(Hi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),fi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Ds.subVectors(o,r),Us.subVectors(c,r),Gu.subVectors(e,r);const p=Ds.dot(Gu),g=Us.dot(Gu);if(p<=0&&g<=0)return n.copy(r);ju.subVectors(e,o);const v=Ds.dot(ju),S=Us.dot(ju);if(v>=0&&S<=v)return n.copy(o);const _=p*S-v*g;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Ds,u);Wu.subVectors(e,c);const M=Ds.dot(Wu),E=Us.dot(Wu);if(E>=0&&M<=E)return n.copy(c);const T=M*g-p*E;if(T<=0&&g>=0&&E<=0)return f=g/(g-E),n.copy(r).addScaledVector(Us,f);const y=v*E-M*S;if(y<=0&&S-v>=0&&M-E>=0)return ym.subVectors(c,o),f=(S-v)/(S-v+(M-E)),n.copy(o).addScaledVector(ym,f);const x=1/(y+T+_);return u=T*x,f=_*x,n.copy(r).addScaledVector(Ds,u).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},dl={h:0,s:0,l:0};function $u(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=Cv(e,1),n=Dn(n,0,1),r=Dn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=$u(u,c,e+1/3),this.g=$u(u,c,e),this.b=$u(u,c,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,n=Jn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const r=Ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return wt.fromWorkingColorSpace(vn.copy(this),e),Math.round(Dn(vn.r*255,0,255))*65536+Math.round(Dn(vn.g*255,0,255))*256+Math.round(Dn(vn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(vn.copy(this),n);const r=vn.r,o=vn.g,c=vn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let p,g;const v=(f+u)/2;if(f===u)p=0,g=0;else{const S=u-f;switch(g=v<=.5?S/(u+f):S/(2-u-f),u){case r:p=(o-c)/S+(o<c?6:0);break;case o:p=(c-r)/S+2;break;case c:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=g,e.l=v,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Jn){wt.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,o=vn.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(dl);const r=Lu(_r.h,dl.h,n),o=Lu(_r.s,dl.s,n),c=Lu(_r.l,dl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new xt;xt.NAMES=Ug;let Wv=0;class Js extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Xa(),this.name="",this.blending=Vs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dd&&(r.blendSrc=this.blendSrc),this.blendDst!==fd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hf extends Js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new le,fl=new Tt;class wi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=nm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class Og extends wi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class zg extends wi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Zt extends wi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Xv=0;const Qn=new Vt,Zu=new dn,Os=new le,Vn=new qa,za=new qa,ln=new le;class ti extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?zg:Og)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,r){return Qn.makeTranslation(e,n,r),this.applyMatrix4(Qn),this}scale(e,n,r){return Qn.makeScale(e,n,r),this.applyMatrix4(Qn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zt(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Vn.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];za.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,za.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,za.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(za.min),Vn.expandByPoint(za.max))}Vn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)ln.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(ln));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let g=0,v=f.count;g<v;g++)ln.fromBufferAttribute(f,g),p&&(Os.fromBufferAttribute(e,g),ln.add(Os)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let H=0;H<r.count;H++)f[H]=new le,p[H]=new le;const g=new le,v=new le,S=new le,_=new Tt,M=new Tt,E=new Tt,T=new le,y=new le;function x(H,N,C){g.fromBufferAttribute(r,H),v.fromBufferAttribute(r,N),S.fromBufferAttribute(r,C),_.fromBufferAttribute(c,H),M.fromBufferAttribute(c,N),E.fromBufferAttribute(c,C),v.sub(g),S.sub(g),M.sub(_),E.sub(_);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(F),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(F),f[H].add(T),f[N].add(T),f[C].add(T),p[H].add(y),p[N].add(y),p[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let H=0,N=U.length;H<N;++H){const C=U[H],F=C.start,te=C.count;for(let X=F,ne=F+te;X<ne;X+=3)x(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const D=new le,R=new le,Z=new le,k=new le;function z(H){Z.fromBufferAttribute(o,H),k.copy(Z);const N=f[H];D.copy(N),D.sub(Z.multiplyScalar(Z.dot(N))).normalize(),R.crossVectors(k,N);const F=R.dot(p[H])<0?-1:1;u.setXYZW(H,D.x,D.y,D.z,F)}for(let H=0,N=U.length;H<N;++H){const C=U[H],F=C.start,te=C.count;for(let X=F,ne=F+te;X<ne;X+=3)z(e.getX(X+0)),z(e.getX(X+1)),z(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new le,c=new le,u=new le,f=new le,p=new le,g=new le,v=new le,S=new le;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),T=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),v.subVectors(u,c),S.subVectors(o,c),v.cross(S),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,y),f.add(v),p.add(v),g.add(v),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,c),S.subVectors(o,c),v.cross(S),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,p){const g=f.array,v=f.itemSize,S=f.normalized,_=new g.constructor(p.length*v);let M=0,E=0;for(let T=0,y=p.length;T<y;T++){f.isInterleavedBufferAttribute?M=p[T]*f.data.stride+f.offset:M=p[T]*v;for(let x=0;x<v;x++)_[E++]=g[M++]}return new wi(_,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],g=e(p,r);n.setAttribute(f,g)}const c=this.morphAttributes;for(const f in c){const p=[],g=c[f];for(let v=0,S=g.length;v<S;v++){const _=g[v],M=e(_,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const g=u[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let S=0,_=g.length;S<_;S++){const M=g[S];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const v=o[g];this.setAttribute(g,v.clone(n))}const c=e.morphAttributes;for(const g in c){const v=[],S=c[g];for(let _=0,M=S.length;_<M;_++)v.push(S[_].clone(n));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,v=u.length;g<v;g++){const S=u[g];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Vt,Gr=new df,hl=new Hl,_m=new le,pl=new le,ml=new le,gl=new le,Ku=new le,xl=new le,Sm=new le,yl=new le;class pt extends dn{constructor(e=new ti,n=new hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){xl.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const v=f[p],S=c[p];v!==0&&(Ku.fromBufferAttribute(S,e),u?xl.addScaledVector(Ku,v):xl.addScaledVector(Ku.sub(n),v))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(c),Gr.copy(e.ray).recast(e.near),!(hl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(hl,_m)===null||Gr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(c).invert(),Gr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,_=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=u[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,Z=D;R<Z;R+=3){const k=f.getX(R),z=f.getX(R+1),H=f.getX(R+2);o=vl(this,x,e,r,g,v,S,k,z,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(f.count,M.start+M.count);for(let y=E,x=T;y<x;y+=3){const U=f.getX(y),D=f.getX(y+1),R=f.getX(y+2);o=vl(this,u,e,r,g,v,S,U,D,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=u[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,Z=D;R<Z;R+=3){const k=R,z=R+1,H=R+2;o=vl(this,x,e,r,g,v,S,k,z,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=E,x=T;y<x;y+=3){const U=y,D=y+1,R=y+2;o=vl(this,u,e,r,g,v,S,U,D,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Yv(s,e,n,r,o,c,u,f){let p;if(e.side===Un?p=r.intersectTriangle(u,c,o,!0,f):p=r.intersectTriangle(o,c,u,e.side===wr,f),p===null)return null;yl.copy(f),yl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(yl);return g<n.near||g>n.far?null:{distance:g,point:yl.clone(),object:s}}function vl(s,e,n,r,o,c,u,f,p,g){s.getVertexPosition(f,pl),s.getVertexPosition(p,ml),s.getVertexPosition(g,gl);const v=Yv(s,e,n,r,pl,ml,gl,Sm);if(v){const S=new le;hi.getBarycoord(Sm,pl,ml,gl,S),o&&(v.uv=hi.getInterpolatedAttribute(o,f,p,g,S,new Tt)),c&&(v.uv1=hi.getInterpolatedAttribute(c,f,p,g,S,new Tt)),u&&(v.normal=hi.getInterpolatedAttribute(u,f,p,g,S,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:p,c:g,normal:new le,materialIndex:0};hi.getNormal(pl,ml,gl,_.normal),v.face=_,v.barycoord=S}return v}class Dt extends ti{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],g=[],v=[],S=[];let _=0,M=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(S,2));function E(T,y,x,U,D,R,Z,k,z,H,N){const C=R/z,F=Z/H,te=R/2,X=Z/2,ne=k/2,ie=z+1,se=H+1;let re=0,V=0;const he=new le;for(let L=0;L<se;L++){const b=L*F-X;for(let G=0;G<ie;G++){const pe=G*C-te;he[T]=pe*U,he[y]=b*D,he[x]=ne,g.push(he.x,he.y,he.z),he[T]=0,he[y]=0,he[x]=k>0?1:-1,v.push(he.x,he.y,he.z),S.push(G/z),S.push(1-L/H),re+=1}}for(let L=0;L<H;L++)for(let b=0;b<z;b++){const G=_+b+ie*L,pe=_+b+ie*(L+1),W=_+(b+1)+ie*(L+1),$=_+(b+1)+ie*L;p.push(G,pe,$),p.push(pe,W,$),V+=6}f.addGroup(M,V,N),M+=V,_+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function bn(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const o in r)e[o]=r[o]}return e}function qv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function kg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const $v={clone:Zs,merge:bn};var Zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zv,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Fg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new le,Em=new Tt,Mm=new Tt;class Gn extends Fg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,n){return this.getViewBounds(e,Em,Mm),n.subVectors(Mm,Em)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Iu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/g,o*=u.width/p,r*=u.height/g}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,ks=1;class Qv extends dn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(zs,ks,e,n);o.layers=this.layers,this.add(o);const c=new Gn(zs,ks,e,n);c.layers=this.layers,this.add(c);const u=new Gn(zs,ks,e,n);u.layers=this.layers,this.add(u);const f=new Gn(zs,ks,e,n);f.layers=this.layers,this.add(f);const p=new Gn(zs,ks,e,n);p.layers=this.layers,this.add(p);const g=new Gn(zs,ks,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,p]=n;for(const g of n)this.remove(g);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,g,v]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(S,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Bg extends On{constructor(e,n,r,o,c,u,f,p,g,v){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,r,o,c,u,f,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Bg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Dt(5,5,5),c=new Tr({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Mr});c.uniforms.tEquirect.value=n;const u=new pt(o,c),f=n.minFilter;return n.minFilter===Qr&&(n.minFilter=bi),new Qv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Qu=new le,e_=new le,t_=new mt;class Yr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Qu.subVectors(r,n).cross(e_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Qu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||t_.getNormalMatrix(e),o=this.coplanarPoint(Qu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Hl,_l=new le;class pf{constructor(e=new Yr,n=new Yr,r=new Yr,o=new Yr,c=new Yr,u=new Yr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Xi){const r=this.planes,o=e.elements,c=o[0],u=o[1],f=o[2],p=o[3],g=o[4],v=o[5],S=o[6],_=o[7],M=o[8],E=o[9],T=o[10],y=o[11],x=o[12],U=o[13],D=o[14],R=o[15];if(r[0].setComponents(p-c,_-g,y-M,R-x).normalize(),r[1].setComponents(p+c,_+g,y+M,R+x).normalize(),r[2].setComponents(p+u,_+v,y+E,R+U).normalize(),r[3].setComponents(p-u,_-v,y-E,R-U).normalize(),r[4].setComponents(p-f,_-S,y-T,R-D).normalize(),n===Xi)r[5].setComponents(p+f,_+S,y+T,R+D).normalize();else if(n===Pl)r[5].setComponents(f,S,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(_l.x=o.normal.x>0?e.max.x:e.min.x,_l.y=o.normal.y>0?e.max.y:e.min.y,_l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function n_(s){const e=new WeakMap;function n(f,p){const g=f.array,v=f.usage,S=g.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,g,v),f.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,g){const v=p.array,S=p.updateRanges;if(s.bindBuffer(g,f),S.length===0)s.bufferSubData(g,0,v);else{S.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<S.length;M++){const E=S[_],T=S[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,S[_]=T)}S.length=_+1;for(let M=0,E=S.length;M<E;M++){const T=S[M];s.bufferSubData(g,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,p),g.version=f.version}}return{get:o,remove:c,update:u}}class Vl extends ti{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(o),g=f+1,v=p+1,S=e/f,_=n/p,M=[],E=[],T=[],y=[];for(let x=0;x<v;x++){const U=x*_-u;for(let D=0;D<g;D++){const R=D*S-c;E.push(R,-U,0),T.push(0,0,1),y.push(D/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<f;U++){const D=U+g*x,R=U+g*(x+1),Z=U+1+g*(x+1),k=U+1+g*x;M.push(D,R,k),M.push(R,Z,k)}this.setIndex(M),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(T,3)),this.setAttribute("uv",new Zt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var i_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
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
#endif`,s_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c_=`#ifdef USE_AOMAP
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
#endif`,u_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
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
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g_=`#ifdef USE_IRIDESCENCE
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
#endif`,x_=`#ifdef USE_BUMPMAP
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,T_=`#define PI 3.141592653589793
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
} // validated`,A_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
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
}`,W_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q_=`uniform bool receiveShadow;
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
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eS=`PhysicalMaterial material;
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
#endif`,tS=`struct PhysicalMaterial {
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
}`,nS=`
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fS=`#if defined( USE_POINTS_UV )
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
#endif`,hS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wS=`#ifdef USE_NORMALMAP
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
#endif`,TS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,US=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HS=`float getShadowMask() {
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
}`,VS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,XS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
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
}`,cE=`#if DEPTH_PACKING == 3200
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
}`,uE=`#define DISTANCE
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
}`,dE=`#define DISTANCE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,xE=`uniform vec3 diffuse;
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
}`,yE=`#define LAMBERT
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
}`,vE=`#define LAMBERT
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
}`,_E=`#define MATCAP
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
}`,SE=`#define MATCAP
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
}`,EE=`#define NORMAL
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
}`,ME=`#define NORMAL
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
}`,bE=`#define PHONG
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
}`,wE=`#define PHONG
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
}`,TE=`#define STANDARD
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
}`,AE=`#define STANDARD
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
}`,CE=`#define TOON
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
}`,RE=`#define TOON
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
}`,NE=`uniform float size;
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
}`,IE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,PE=`uniform vec3 color;
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
}`,DE=`uniform float rotation;
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
}`,UE=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:i_,alphahash_pars_fragment:r_,alphamap_fragment:s_,alphamap_pars_fragment:a_,alphatest_fragment:o_,alphatest_pars_fragment:l_,aomap_fragment:c_,aomap_pars_fragment:u_,batching_pars_vertex:d_,batching_vertex:f_,begin_vertex:h_,beginnormal_vertex:p_,bsdfs:m_,iridescence_fragment:g_,bumpmap_pars_fragment:x_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:v_,clipping_planes_pars_vertex:__,clipping_planes_vertex:S_,color_fragment:E_,color_pars_fragment:M_,color_pars_vertex:b_,color_vertex:w_,common:T_,cube_uv_reflection_fragment:A_,defaultnormal_vertex:C_,displacementmap_pars_vertex:R_,displacementmap_vertex:N_,emissivemap_fragment:I_,emissivemap_pars_fragment:L_,colorspace_fragment:P_,colorspace_pars_fragment:D_,envmap_fragment:U_,envmap_common_pars_fragment:O_,envmap_pars_fragment:z_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:$_,envmap_vertex:F_,fog_vertex:B_,fog_pars_vertex:H_,fog_fragment:V_,fog_pars_fragment:G_,gradientmap_pars_fragment:j_,lightmap_pars_fragment:W_,lights_lambert_fragment:X_,lights_lambert_pars_fragment:Y_,lights_pars_begin:q_,lights_toon_fragment:Z_,lights_toon_pars_fragment:K_,lights_phong_fragment:Q_,lights_phong_pars_fragment:J_,lights_physical_fragment:eS,lights_physical_pars_fragment:tS,lights_fragment_begin:nS,lights_fragment_maps:iS,lights_fragment_end:rS,logdepthbuf_fragment:sS,logdepthbuf_pars_fragment:aS,logdepthbuf_pars_vertex:oS,logdepthbuf_vertex:lS,map_fragment:cS,map_pars_fragment:uS,map_particle_fragment:dS,map_particle_pars_fragment:fS,metalnessmap_fragment:hS,metalnessmap_pars_fragment:pS,morphinstance_vertex:mS,morphcolor_vertex:gS,morphnormal_vertex:xS,morphtarget_pars_vertex:yS,morphtarget_vertex:vS,normal_fragment_begin:_S,normal_fragment_maps:SS,normal_pars_fragment:ES,normal_pars_vertex:MS,normal_vertex:bS,normalmap_pars_fragment:wS,clearcoat_normal_fragment_begin:TS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:CS,iridescence_pars_fragment:RS,opaque_fragment:NS,packing:IS,premultiplied_alpha_fragment:LS,project_vertex:PS,dithering_fragment:DS,dithering_pars_fragment:US,roughnessmap_fragment:OS,roughnessmap_pars_fragment:zS,shadowmap_pars_fragment:kS,shadowmap_pars_vertex:FS,shadowmap_vertex:BS,shadowmask_pars_fragment:HS,skinbase_vertex:VS,skinning_pars_vertex:GS,skinning_vertex:jS,skinnormal_vertex:WS,specularmap_fragment:XS,specularmap_pars_fragment:YS,tonemapping_fragment:qS,tonemapping_pars_fragment:$S,transmission_fragment:ZS,transmission_pars_fragment:KS,uv_pars_fragment:QS,uv_pars_vertex:JS,uv_vertex:eE,worldpos_vertex:tE,background_vert:nE,background_frag:iE,backgroundCube_vert:rE,backgroundCube_frag:sE,cube_vert:aE,cube_frag:oE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:dE,equirect_vert:fE,equirect_frag:hE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:xE,meshlambert_vert:yE,meshlambert_frag:vE,meshmatcap_vert:_E,meshmatcap_frag:SE,meshnormal_vert:EE,meshnormal_frag:ME,meshphong_vert:bE,meshphong_frag:wE,meshphysical_vert:TE,meshphysical_frag:AE,meshtoon_vert:CE,meshtoon_frag:RE,points_vert:NE,points_frag:IE,shadow_vert:LE,shadow_frag:PE,sprite_vert:DE,sprite_frag:UE},De={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ei={basic:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:bn([De.points,De.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:bn([De.common,De.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:bn([De.sprite,De.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:bn([De.common,De.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:bn([De.lights,De.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ei.physical={uniforms:bn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Sl={r:0,b:0,g:0},Wr=new Ti,OE=new Vt;function zE(s,e,n,r,o,c,u){const f=new xt(0);let p=c===!0?0:1,g,v,S=null,_=0,M=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:e).get(D)),D}function T(U){let D=!1;const R=E(U);R===null?x(f,p):R&&R.isColor&&(x(R,1),D=!0);const Z=s.xr.getEnvironmentBlendMode();Z==="additive"?r.buffers.color.setClear(0,0,0,1,u):Z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,D){const R=E(D);R&&(R.isCubeTexture||R.mapping===Fl)?(v===void 0&&(v=new pt(new Dt(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Zs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Z,k,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Wr.copy(D.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(OE.makeRotationFromEuler(Wr)),v.material.toneMapped=wt.getTransfer(R.colorSpace)!==Pt,(S!==R||_!==R.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,S=R,_=R.version,M=s.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(g===void 0&&(g=new pt(new Vl(2,2),new Tr({name:"BackgroundMaterial",uniforms:Zs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=R,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=wt.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),g.material.uniforms.uvTransform.value.copy(R.matrix),(S!==R||_!==R.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,S=R,_=R.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function x(U,D){U.getRGB(Sl,kg(s)),r.buffers.color.setClear(Sl.r,Sl.g,Sl.b,D,u)}return{getClearColor:function(){return f},setClearColor:function(U,D=1){f.set(U),p=D,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(f,p)},render:T,addToRenderList:y}}function kE(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function f(C,F,te,X,ne){let ie=!1;const se=S(X,te,F);c!==se&&(c=se,g(c.object)),ie=M(C,X,te,ne),ie&&E(C,X,te,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,R(C,F,te,X),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function p(){return s.createVertexArray()}function g(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function S(C,F,te){const X=te.wireframe===!0;let ne=r[C.id];ne===void 0&&(ne={},r[C.id]=ne);let ie=ne[F.id];ie===void 0&&(ie={},ne[F.id]=ie);let se=ie[X];return se===void 0&&(se=_(p()),ie[X]=se),se}function _(C){const F=[],te=[],X=[];for(let ne=0;ne<n;ne++)F[ne]=0,te[ne]=0,X[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:te,attributeDivisors:X,object:C,attributes:{},index:null}}function M(C,F,te,X){const ne=c.attributes,ie=F.attributes;let se=0;const re=te.getAttributes();for(const V in re)if(re[V].location>=0){const L=ne[V];let b=ie[V];if(b===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(b=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(b=C.instanceColor)),L===void 0||L.attribute!==b||b&&L.data!==b.data)return!0;se++}return c.attributesNum!==se||c.index!==X}function E(C,F,te,X){const ne={},ie=F.attributes;let se=0;const re=te.getAttributes();for(const V in re)if(re[V].location>=0){let L=ie[V];L===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const b={};b.attribute=L,L&&L.data&&(b.data=L.data),ne[V]=b,se++}c.attributes=ne,c.attributesNum=se,c.index=X}function T(){const C=c.newAttributes;for(let F=0,te=C.length;F<te;F++)C[F]=0}function y(C){x(C,0)}function x(C,F){const te=c.newAttributes,X=c.enabledAttributes,ne=c.attributeDivisors;te[C]=1,X[C]===0&&(s.enableVertexAttribArray(C),X[C]=1),ne[C]!==F&&(s.vertexAttribDivisor(C,F),ne[C]=F)}function U(){const C=c.newAttributes,F=c.enabledAttributes;for(let te=0,X=F.length;te<X;te++)F[te]!==C[te]&&(s.disableVertexAttribArray(te),F[te]=0)}function D(C,F,te,X,ne,ie,se){se===!0?s.vertexAttribIPointer(C,F,te,ne,ie):s.vertexAttribPointer(C,F,te,X,ne,ie)}function R(C,F,te,X){T();const ne=X.attributes,ie=te.getAttributes(),se=F.defaultAttributeValues;for(const re in ie){const V=ie[re];if(V.location>=0){let he=ne[re];if(he===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const L=he.normalized,b=he.itemSize,G=e.get(he);if(G===void 0)continue;const pe=G.buffer,W=G.type,$=G.bytesPerElement,ce=W===s.INT||W===s.UNSIGNED_INT||he.gpuType===sf;if(he.isInterleavedBufferAttribute){const ae=he.data,ge=ae.stride,_e=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)x(V.location+Ne,ae.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)y(V.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Ne=0;Ne<V.locationSize;Ne++)D(V.location+Ne,b/V.locationSize,W,L,ge*$,(_e+b/V.locationSize*Ne)*$,ce)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)x(V.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let ae=0;ae<V.locationSize;ae++)D(V.location+ae,b/V.locationSize,W,L,b*$,b/V.locationSize*ae*$,ce)}}else if(se!==void 0){const L=se[re];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(V.location,L);break;case 3:s.vertexAttrib3fv(V.location,L);break;case 4:s.vertexAttrib4fv(V.location,L);break;default:s.vertexAttrib1fv(V.location,L)}}}}U()}function Z(){H();for(const C in r){const F=r[C];for(const te in F){const X=F[te];for(const ne in X)v(X[ne].object),delete X[ne];delete F[te]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const te in F){const X=F[te];for(const ne in X)v(X[ne].object),delete X[ne];delete F[te]}delete r[C.id]}function z(C){for(const F in r){const te=r[F];if(te[C.id]===void 0)continue;const X=te[C.id];for(const ne in X)v(X[ne].object),delete X[ne];delete te[C.id]}}function H(){N(),u=!0,c!==o&&(c=o,g(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:H,resetDefaultState:N,dispose:Z,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:U}}function FE(s,e,n){let r;function o(g){r=g}function c(g,v){s.drawArrays(r,g,v),n.update(v,r,1)}function u(g,v,S){S!==0&&(s.drawArraysInstanced(r,g,v,S),n.update(v,r,S))}function f(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,S);let M=0;for(let E=0;E<S;E++)M+=v[E];n.update(M,r,1)}function p(g,v,S,_){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<g.length;E++)u(g[E],v[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,v,0,_,0,S);let E=0;for(let T=0;T<S;T++)E+=v[T]*_[T];n.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function BE(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==pi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const H=z===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==qi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Wi&&!H)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const S=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Z=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:S,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:Z,maxSamples:k}}function HE(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Yr,f=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||r!==0||o;return o=_,r=S.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){n=v(S,_,0)},this.setState=function(S,_,M){const E=S.clippingPlanes,T=S.clipIntersection,y=S.clipShadows,x=s.get(S);if(!o||E===null||E.length===0||c&&!y)c?v(null):g();else{const U=c?0:r,D=U*4;let R=x.clippingState||null;p.value=R,R=v(E,_,D,M);for(let Z=0;Z!==D;++Z)R[Z]=n[Z];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,_,M,E){const T=S!==null?S.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const x=M+T*4,U=_.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,R=M;D!==T;++D,R+=4)u.copy(S[D]).applyMatrix4(U,f),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function VE(s){let e=new WeakMap;function n(u,f){return f===_d?u.mapping=Xs:f===Sd&&(u.mapping=Ys),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===_d||f===Sd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const g=new Jv(p.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",o),n(g.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Vg extends Fg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=4,bm=[.125,.215,.35,.446,.526,.582],Zr=20,Ju=new Vg,wm=new xt;let ed=null,td=0,nd=0,id=!1;const qr=(1+Math.sqrt(5))/2,Fs=1/qr,Tm=[new le(-qr,Fs,0),new le(qr,Fs,0),new le(-Fs,0,qr),new le(Fs,0,qr),new le(0,qr,-Fs),new le(0,qr,Fs),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Wa,format:pi,colorSpace:Ks,depthBuffer:!1},o=Cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GE(c)),this._blurMaterial=jE(c,e,n)}return o}_compileMaterial(e){const n=new pt(this._lodPlanes[0],e);this._renderer.compile(n,Ju)}_sceneToCubeUV(e,n,r,o){const f=new Gn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,_=v.toneMapping;v.getClearColor(wm),v.toneMapping=br,v.autoClear=!1;const M=new hf({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new pt(new Dt,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(wm),T=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(f.up.set(0,p[x],0),f.lookAt(g[x],0,0)):U===1?(f.up.set(0,0,p[x]),f.lookAt(0,g[x],0)):(f.up.set(0,p[x],0),f.lookAt(0,0,g[x]));const D=this._cubeSize;El(o,U*D,x>2?D:0,D,D),v.setRenderTarget(o),T&&v.render(E,f),v.render(e,f)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=_,v.autoClear=S,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Xs||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new pt(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;El(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Ju)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Tm[(o-c-1)%Tm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const p=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new pt(this._lodPlanes[o],g),_=g.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),T=c/E,y=isFinite(c)?1+Math.floor(v*T):Zr;y>Zr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const x=[];let U=0;for(let z=0;z<Zr;++z){const H=z/T,N=Math.exp(-H*H/2);x.push(N),z===0?U+=N:z<y&&(U+=2*N)}for(let z=0;z<x.length;z++)x[z]=x[z]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-r;const R=this._sizeLods[o],Z=3*R*(o>D-Bs?o-D+Bs:0),k=4*(this._cubeSize-R);El(n,Z,k,3*R,2*R),p.setRenderTarget(n),p.render(S,Ju)}}function GE(s){const e=[],n=[],r=[];let o=s;const c=s-Bs+1+bm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);n.push(f);let p=1/f;u>s-Bs?p=bm[u-s+Bs-1]:u===0&&(p=0),r.push(p);const g=1/(f-2),v=-g,S=1+g,_=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,E=6,T=3,y=2,x=1,U=new Float32Array(T*E*M),D=new Float32Array(y*E*M),R=new Float32Array(x*E*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,H=k>2?0:-1,N=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];U.set(N,T*E*k),D.set(_,y*E*k);const C=[k,k,k,k,k,k];R.set(C,x*E*k)}const Z=new ti;Z.setAttribute("position",new wi(U,T)),Z.setAttribute("uv",new wi(D,y)),Z.setAttribute("faceIndex",new wi(R,x)),e.push(Z),o>Bs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Cm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=Fl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function jE(s,e,n){const r=new Float32Array(Zr),o=new le(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mf(),fragmentShader:`

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
	`}function WE(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,g=p===_d||p===Sd,v=p===Xs||p===Ys;if(g||v){let S=e.get(f);const _=S!==void 0?S.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Am(s)),S=g?n.fromEquirectangular(f,S):n.fromCubemap(f,S),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),S.texture;if(S!==void 0)return S.texture;{const M=f.image;return g&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new Am(s)),S=g?n.fromEquirectangular(f):n.fromCubemap(f),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),f.addEventListener("dispose",c),S.texture):null}}}return f}function o(f){let p=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function XE(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Fa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function YE(s,e,n,r){const o={},c=new WeakMap;function u(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const T=_.morphAttributes[E];for(let y=0,x=T.length;y<x;y++)e.remove(T[y])}_.removeEventListener("dispose",u),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(S,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(S){const _=S.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const M=S.morphAttributes;for(const E in M){const T=M[E];for(let y=0,x=T.length;y<x;y++)e.update(T[y],s.ARRAY_BUFFER)}}function g(S){const _=[],M=S.index,E=S.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let D=0,R=U.length;D<R;D+=3){const Z=U[D+0],k=U[D+1],z=U[D+2];_.push(Z,k,k,z,z,Z)}}else if(E!==void 0){const U=E.array;T=E.version;for(let D=0,R=U.length/3-1;D<R;D+=3){const Z=D+0,k=D+1,z=D+2;_.push(Z,k,k,z,z,Z)}}else return;const y=new(Lg(_)?zg:Og)(_,1);y.version=T;const x=c.get(S);x&&e.remove(x),c.set(S,y)}function v(S){const _=c.get(S);if(_){const M=S.index;M!==null&&_.version<M.version&&g(S)}else g(S);return c.get(S)}return{get:f,update:p,getWireframeAttribute:v}}function qE(s,e,n){let r;function o(_){r=_}let c,u;function f(_){c=_.type,u=_.bytesPerElement}function p(_,M){s.drawElements(r,M,c,_*u),n.update(M,r,1)}function g(_,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,_*u,E),n.update(M,r,E))}function v(_,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,E);let y=0;for(let x=0;x<E;x++)y+=M[x];n.update(y,r,1)}function S(_,M,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)g(_[x]/u,M[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,T,0,E);let x=0;for(let U=0;U<E;U++)x+=M[U]*T[U];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function $E(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function ZE(s,e,n){const r=new WeakMap,o=new Xt;function c(u,f,p){const g=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let _=r.get(f);if(_===void 0||_.count!==S){let C=function(){H.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var M=C;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let Z=f.attributes.position.count*R,k=1;Z>e.maxTextureSize&&(k=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const z=new Float32Array(Z*k*4*S),H=new Dg(z,Z,k,S);H.type=Wi,H.needsUpdate=!0;const N=R*4;for(let F=0;F<S;F++){const te=x[F],X=U[F],ne=D[F],ie=Z*k*4*F;for(let se=0;se<te.count;se++){const re=se*N;E===!0&&(o.fromBufferAttribute(te,se),z[ie+re+0]=o.x,z[ie+re+1]=o.y,z[ie+re+2]=o.z,z[ie+re+3]=0),T===!0&&(o.fromBufferAttribute(X,se),z[ie+re+4]=o.x,z[ie+re+5]=o.y,z[ie+re+6]=o.z,z[ie+re+7]=0),y===!0&&(o.fromBufferAttribute(ne,se),z[ie+re+8]=o.x,z[ie+re+9]=o.y,z[ie+re+10]=o.z,z[ie+re+11]=ne.itemSize===4?o.w:1)}}_={count:S,texture:H,size:new Tt(Z,k)},r.set(f,_),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<g.length;y++)E+=g[y];const T=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function KE(s,e,n,r){let o=new WeakMap;function c(p){const g=r.render.frame,v=p.geometry,S=e.get(p,v);if(o.get(S)!==g&&(e.update(S),o.set(S,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,g))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==g&&(_.update(),o.set(_,g))}return S}function u(){o=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:u}}class Gg extends On{constructor(e,n,r,o,c,u,f,p,g,v=Gs){if(v!==Gs&&v!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Gs&&(r=Jr),r===void 0&&v===$s&&(r=qs),super(null,o,c,u,f,p,v,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:mi,this.minFilter=p!==void 0?p:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jg=new On,Im=new Gg(1,1),Wg=new Dg,Xg=new zv,Yg=new Bg,Lm=[],Pm=[],Dm=new Float32Array(16),Um=new Float32Array(9),Om=new Float32Array(4);function ea(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Lm[o];if(c===void 0&&(c=new Float32Array(o),Lm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function QE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function JE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Om.set(r),s.uniformMatrix2fv(this.addr,!1,Om),rn(n,r)}}function iM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),rn(n,r)}}function rM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),rn(n,r)}}function sM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function cM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function hM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Im.compareFunction=Ig,c=Im):c=jg,n.setTexture2D(e||c,o)}function pM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Xg,o)}function mM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Yg,o)}function gM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Wg,o)}function xM(s){switch(s){case 5126:return QE;case 35664:return JE;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function yM(s,e){s.uniform1fv(this.addr,e)}function vM(s,e){const n=ea(e,this.size,2);s.uniform2fv(this.addr,n)}function _M(s,e){const n=ea(e,this.size,3);s.uniform3fv(this.addr,n)}function SM(s,e){const n=ea(e,this.size,4);s.uniform4fv(this.addr,n)}function EM(s,e){const n=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function MM(s,e){const n=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function bM(s,e){const n=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function wM(s,e){s.uniform1iv(this.addr,e)}function TM(s,e){s.uniform2iv(this.addr,e)}function AM(s,e){s.uniform3iv(this.addr,e)}function CM(s,e){s.uniform4iv(this.addr,e)}function RM(s,e){s.uniform1uiv(this.addr,e)}function NM(s,e){s.uniform2uiv(this.addr,e)}function IM(s,e){s.uniform3uiv(this.addr,e)}function LM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||jg,c[u])}function DM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Xg,c[u])}function UM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Yg,c[u])}function OM(s,e,n){const r=this.cache,o=e.length,c=Gl(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Wg,c[u])}function zM(s){switch(s){case 5126:return yM;case 35664:return vM;case 35665:return _M;case 35666:return SM;case 35674:return EM;case 35675:return MM;case 35676:return bM;case 5124:case 35670:return wM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return NM;case 36295:return IM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return OM}}class kM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=xM(n.type)}}class FM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zM(n.type)}}class BM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function zm(s,e){s.seq.push(e),s.map[e.id]=e}function HM(s,e,n){const r=s.name,o=r.length;for(rd.lastIndex=0;;){const c=rd.exec(r),u=rd.lastIndex;let f=c[1];const p=c[2]==="]",g=c[3];if(p&&(f=f|0),g===void 0||g==="["&&u+2===o){zm(n,g===void 0?new kM(f,s,e):new FM(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new BM(f),zm(n,S)),n=S}}}class Il{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);HM(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function km(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const VM=37297;let GM=0;function jM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Fm=new mt;function WM(s){wt._getMatrix(Fm,wt.workingColorSpace,s);const e=`mat3( ${Fm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+jM(s.getShaderSource(e),u)}else return o}function XM(s,e){const n=WM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YM(s,e){let n;switch(e){case uv:n="Linear";break;case dv:n="Reinhard";break;case fv:n="Cineon";break;case hv:n="ACESFilmic";break;case mv:n="AgX";break;case gv:n="Neutral";break;case pv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new le;function qM(){wt.getLuminanceCoefficients(Ml);const s=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function ZM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function KM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Ba(s){return s!==""}function Hm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(s){return s.replace(QM,e1)}const JM=new Map;function e1(s,e){let n=gt[e];if(n===void 0){const r=JM.get(e);if(r!==void 0)n=gt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(s){return s.replace(t1,n1)}function n1(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function jm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function i1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function r1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function a1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yg:e="ENVMAP_BLENDING_MULTIPLY";break;case lv:e="ENVMAP_BLENDING_MIX";break;case cv:e="ENVMAP_BLENDING_ADD";break}return e}function o1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function l1(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=i1(n),g=r1(n),v=s1(n),S=a1(n),_=o1(n),M=$M(n),E=ZM(c),T=o.createProgram();let y,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ba).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ba).join(`
`),x.length>0&&(x+=`
`)):(y=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),x=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?gt.tonemapping_pars_fragment:"",n.toneMapping!==br?YM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,XM("linearToOutputTexel",n.outputColorSpace),qM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),u=Kd(u),u=Hm(u,n),u=Vm(u,n),f=Kd(f),f=Hm(f,n),f=Vm(f,n),u=Gm(u),f=Gm(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=U+y+u,R=U+x+f,Z=km(o,o.VERTEX_SHADER,D),k=km(o,o.FRAGMENT_SHADER,R);o.attachShader(T,Z),o.attachShader(T,k),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(F){if(s.debug.checkShaderErrors){const te=o.getProgramInfoLog(T).trim(),X=o.getShaderInfoLog(Z).trim(),ne=o.getShaderInfoLog(k).trim();let ie=!0,se=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,Z,k);else{const re=Bm(o,Z,"vertex"),V=Bm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+te+`
`+re+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(X===""||ne==="")&&(se=!1);se&&(F.diagnostics={runnable:ie,programLog:te,vertexShader:{log:X,prefix:y},fragmentShader:{log:ne,prefix:x}})}o.deleteShader(Z),o.deleteShader(k),H=new Il(o,T),N=KM(o,T)}let H;this.getUniforms=function(){return H===void 0&&z(this),H};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,VM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Z,this.fragmentShader=k,this}let c1=0;class u1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new d1(e),n.set(e,r)),r}}class d1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function f1(s,e,n,r,o,c,u){const f=new ff,p=new u1,g=new Set,v=[],S=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return g.add(N),N===0?"uv":`uv${N}`}function y(N,C,F,te,X){const ne=te.fog,ie=X.geometry,se=N.isMeshStandardMaterial?te.environment:null,re=(N.isMeshStandardMaterial?n:e).get(N.envMap||se),V=re&&re.mapping===Fl?re.image.height:null,he=E[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const L=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,b=L!==void 0?L.length:0;let G=0;ie.morphAttributes.position!==void 0&&(G=1),ie.morphAttributes.normal!==void 0&&(G=2),ie.morphAttributes.color!==void 0&&(G=3);let pe,W,$,ce;if(he){const Mt=Ei[he];pe=Mt.vertexShader,W=Mt.fragmentShader}else pe=N.vertexShader,W=N.fragmentShader,p.update(N),$=p.getVertexShaderID(N),ce=p.getFragmentShaderID(N);const ae=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),_e=X.isInstancedMesh===!0,Ne=X.isBatchedMesh===!0,He=!!N.map,ze=!!N.matcap,tt=!!re,B=!!N.aoMap,_t=!!N.lightMap,Je=!!N.bumpMap,et=!!N.normalMap,Ae=!!N.displacementMap,it=!!N.emissiveMap,Ie=!!N.metalnessMap,P=!!N.roughnessMap,A=N.anisotropy>0,J=N.clearcoat>0,ve=N.dispersion>0,Se=N.iridescence>0,xe=N.sheen>0,We=N.transmission>0,Le=A&&!!N.anisotropyMap,ke=J&&!!N.clearcoatMap,ft=J&&!!N.clearcoatNormalMap,be=J&&!!N.clearcoatRoughnessMap,Be=Se&&!!N.iridescenceMap,nt=Se&&!!N.iridescenceThicknessMap,at=xe&&!!N.sheenColorMap,Ge=xe&&!!N.sheenRoughnessMap,yt=!!N.specularMap,ut=!!N.specularColorMap,It=!!N.specularIntensityMap,q=We&&!!N.transmissionMap,Pe=We&&!!N.thicknessMap,me=!!N.gradientMap,ye=!!N.alphaMap,Oe=N.alphaTest>0,Ue=!!N.alphaHash,dt=!!N.extensions;let kt=br;N.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Kt={shaderID:he,shaderType:N.type,shaderName:N.name,vertexShader:pe,fragmentShader:W,defines:N.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Ne,batchingColor:Ne&&X._colorsTexture!==null,instancing:_e,instancingColor:_e&&X.instanceColor!==null,instancingMorph:_e&&X.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ks,alphaToCoverage:!!N.alphaToCoverage,map:He,matcap:ze,envMap:tt,envMapMode:tt&&re.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:_t,bumpMap:Je,normalMap:et,displacementMap:_&&Ae,emissiveMap:it,normalMapObjectSpace:et&&N.normalMapType===_v,normalMapTangentSpace:et&&N.normalMapType===Ng,metalnessMap:Ie,roughnessMap:P,anisotropy:A,anisotropyMap:Le,clearcoat:J,clearcoatMap:ke,clearcoatNormalMap:ft,clearcoatRoughnessMap:be,dispersion:ve,iridescence:Se,iridescenceMap:Be,iridescenceThicknessMap:nt,sheen:xe,sheenColorMap:at,sheenRoughnessMap:Ge,specularMap:yt,specularColorMap:ut,specularIntensityMap:It,transmission:We,transmissionMap:q,thicknessMap:Pe,gradientMap:me,opaque:N.transparent===!1&&N.blending===Vs&&N.alphaToCoverage===!1,alphaMap:ye,alphaTest:Oe,alphaHash:Ue,combine:N.combine,mapUv:He&&T(N.map.channel),aoMapUv:B&&T(N.aoMap.channel),lightMapUv:_t&&T(N.lightMap.channel),bumpMapUv:Je&&T(N.bumpMap.channel),normalMapUv:et&&T(N.normalMap.channel),displacementMapUv:Ae&&T(N.displacementMap.channel),emissiveMapUv:it&&T(N.emissiveMap.channel),metalnessMapUv:Ie&&T(N.metalnessMap.channel),roughnessMapUv:P&&T(N.roughnessMap.channel),anisotropyMapUv:Le&&T(N.anisotropyMap.channel),clearcoatMapUv:ke&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:at&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(N.sheenRoughnessMap.channel),specularMapUv:yt&&T(N.specularMap.channel),specularColorMapUv:ut&&T(N.specularColorMap.channel),specularIntensityMapUv:It&&T(N.specularIntensityMap.channel),transmissionMapUv:q&&T(N.transmissionMap.channel),thicknessMapUv:Pe&&T(N.thicknessMap.channel),alphaMapUv:ye&&T(N.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(et||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ie.attributes.uv&&(He||ye),fog:!!ne,useFog:N.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:ge,skinning:X.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:G,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:He&&N.map.isVideoTexture===!0&&wt.getTransfer(N.map.colorSpace)===Pt,decodeVideoTextureEmissive:it&&N.emissiveMap.isVideoTexture===!0&&wt.getTransfer(N.emissiveMap.colorSpace)===Pt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Mi,flipSided:N.side===Un,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:dt&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&N.extensions.multiDraw===!0||Ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Kt.vertexUv1s=g.has(1),Kt.vertexUv2s=g.has(2),Kt.vertexUv3s=g.has(3),g.clear(),Kt}function x(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const F in N.defines)C.push(F),C.push(N.defines[F]);return N.isRawShaderMaterial===!1&&(U(C,N),D(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function U(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function D(N,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),N.push(f.mask)}function R(N){const C=E[N.type];let F;if(C){const te=Ei[C];F=$v.clone(te.uniforms)}else F=N.uniforms;return F}function Z(N,C){let F;for(let te=0,X=v.length;te<X;te++){const ne=v[te];if(ne.cacheKey===C){F=ne,++F.usedTimes;break}}return F===void 0&&(F=new l1(s,C,N,c),v.push(F)),F}function k(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function z(N){p.remove(N)}function H(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:Z,releaseProgram:k,releaseShaderCache:z,programs:v,dispose:H}}function h1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function p1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(S,_,M,E,T,y){let x=s[e];return x===void 0?(x={id:S.id,object:S,geometry:_,material:M,groupOrder:E,renderOrder:S.renderOrder,z:T,group:y},s[e]=x):(x.id=S.id,x.object=S,x.geometry=_,x.material=M,x.groupOrder=E,x.renderOrder=S.renderOrder,x.z=T,x.group=y),e++,x}function f(S,_,M,E,T,y){const x=u(S,_,M,E,T,y);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):n.push(x)}function p(S,_,M,E,T,y){const x=u(S,_,M,E,T,y);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):n.unshift(x)}function g(S,_){n.length>1&&n.sort(S||p1),r.length>1&&r.sort(_||Wm),o.length>1&&o.sort(_||Wm)}function v(){for(let S=e,_=s.length;S<_;S++){const M=s[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:v,sort:g}}function m1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Xm,s.set(r,[u])):o>=c.length?(u=new Xm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function g1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new xt};break;case"SpotLight":n={position:new le,direction:new le,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=n,n}}}function x1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let y1=0;function v1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _1(s){const e=new g1,n=x1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new le);const o=new le,c=new Vt,u=new Vt;function f(g){let v=0,S=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,E=0,T=0,y=0,x=0,U=0,D=0,R=0,Z=0,k=0,z=0;g.sort(v1);for(let N=0,C=g.length;N<C;N++){const F=g[N],te=F.color,X=F.intensity,ne=F.distance,ie=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=te.r*X,S+=te.g*X,_+=te.b*X;else if(F.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(F.sh.coefficients[se],X);z++}else if(F.isDirectionalLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const re=F.shadow,V=n.get(F);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,r.directionalShadow[M]=V,r.directionalShadowMap[M]=ie,r.directionalShadowMatrix[M]=F.shadow.matrix,U++}r.directional[M]=se,M++}else if(F.isSpotLight){const se=e.get(F);se.position.setFromMatrixPosition(F.matrixWorld),se.color.copy(te).multiplyScalar(X),se.distance=ne,se.coneCos=Math.cos(F.angle),se.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),se.decay=F.decay,r.spot[T]=se;const re=F.shadow;if(F.map&&(r.spotLightMap[Z]=F.map,Z++,re.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[T]=re.matrix,F.castShadow){const V=n.get(F);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,r.spotShadow[T]=V,r.spotShadowMap[T]=ie,R++}T++}else if(F.isRectAreaLight){const se=e.get(F);se.color.copy(te).multiplyScalar(X),se.halfWidth.set(F.width*.5,0,0),se.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=se,y++}else if(F.isPointLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),se.distance=F.distance,se.decay=F.decay,F.castShadow){const re=F.shadow,V=n.get(F);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,V.shadowCameraNear=re.camera.near,V.shadowCameraFar=re.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=ie,r.pointShadowMatrix[E]=F.shadow.matrix,D++}r.point[E]=se,E++}else if(F.isHemisphereLight){const se=e.get(F);se.skyColor.copy(F.color).multiplyScalar(X),se.groundColor.copy(F.groundColor).multiplyScalar(X),r.hemi[x]=se,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==y||H.hemiLength!==x||H.numDirectionalShadows!==U||H.numPointShadows!==D||H.numSpotShadows!==R||H.numSpotMaps!==Z||H.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+Z-k,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,H.directionalLength=M,H.pointLength=E,H.spotLength=T,H.rectAreaLength=y,H.hemiLength=x,H.numDirectionalShadows=U,H.numPointShadows=D,H.numSpotShadows=R,H.numSpotMaps=Z,H.numLightProbes=z,r.version=y1++)}function p(g,v){let S=0,_=0,M=0,E=0,T=0;const y=v.matrixWorldInverse;for(let x=0,U=g.length;x<U;x++){const D=g[x];if(D.isDirectionalLight){const R=r.directional[S];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(D.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(D.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:p,state:r}}function Ym(s){const e=new _1(s),n=[],r=[];function o(v){g.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function f(){e.setup(n)}function p(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function S1(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new Ym(s),e.set(o,[f])):c>=u.length?(f=new Ym(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class E1 extends Js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M1 extends Js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
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
}`;function T1(s,e,n){let r=new pf;const o=new Tt,c=new Tt,u=new Xt,f=new E1({depthPacking:vv}),p=new M1,g={},v=n.maxTextureSize,S={[wr]:Un,[Un]:wr,[Mi]:Mi},_=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:b1,fragmentShader:w1}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new ti;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new pt(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xg;let x=this.type;this.render=function(k,z,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),te=s.state;te.setBlending(Mr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const X=x!==Gi&&this.type===Gi,ne=x===Gi&&this.type!==Gi;for(let ie=0,se=k.length;ie<se;ie++){const re=k[ie],V=re.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const he=V.getFrameExtents();if(o.multiply(he),c.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/he.x),o.x=c.x*he.x,V.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/he.y),o.y=c.y*he.y,V.mapSize.y=c.y)),V.map===null||X===!0||ne===!0){const b=this.type!==Gi?{minFilter:mi,magFilter:mi}:{};V.map!==null&&V.map.dispose(),V.map=new es(o.x,o.y,b),V.map.texture.name=re.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const L=V.getViewportCount();for(let b=0;b<L;b++){const G=V.getViewport(b);u.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),te.viewport(u),V.updateMatrices(re,b),r=V.getFrustum(),R(z,H,V.camera,re,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&U(V,H),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(N,C,F)};function U(k,z){const H=e.update(T);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new es(o.x,o.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,H,_,T,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,H,M,T,null)}function D(k,z,H,N){let C=null;const F=H.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)C=F;else if(C=H.isPointLight===!0?p:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const te=C.uuid,X=z.uuid;let ne=g[te];ne===void 0&&(ne={},g[te]=ne);let ie=ne[X];ie===void 0&&(ie=C.clone(),ne[X]=ie,z.addEventListener("dispose",Z)),C=ie}if(C.visible=z.visible,C.wireframe=z.wireframe,N===Gi?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:S[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=s.properties.get(C);te.light=H}return C}function R(k,z,H,N,C){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===Gi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,k.matrixWorld);const X=e.update(k),ne=k.material;if(Array.isArray(ne)){const ie=X.groups;for(let se=0,re=ie.length;se<re;se++){const V=ie[se],he=ne[V.materialIndex];if(he&&he.visible){const L=D(k,he,N,C);k.onBeforeShadow(s,k,z,H,X,L,V),s.renderBufferDirect(H,null,X,L,k,V),k.onAfterShadow(s,k,z,H,X,L,V)}}}else if(ne.visible){const ie=D(k,ne,N,C);k.onBeforeShadow(s,k,z,H,X,ie,null),s.renderBufferDirect(H,null,X,ie,k,null),k.onAfterShadow(s,k,z,H,X,ie,null)}}const te=k.children;for(let X=0,ne=te.length;X<ne;X++)R(te[X],z,H,N,C)}function Z(k){k.target.removeEventListener("dispose",Z);for(const H in g){const N=g[H],C=k.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const A1={[hd]:pd,[md]:yd,[gd]:vd,[Ws]:xd,[pd]:hd,[yd]:md,[vd]:gd,[xd]:Ws};function C1(s,e){function n(){let q=!1;const Pe=new Xt;let me=null;const ye=new Xt(0,0,0,0);return{setMask:function(Oe){me!==Oe&&!q&&(s.colorMask(Oe,Oe,Oe,Oe),me=Oe)},setLocked:function(Oe){q=Oe},setClear:function(Oe,Ue,dt,kt,Kt){Kt===!0&&(Oe*=kt,Ue*=kt,dt*=kt),Pe.set(Oe,Ue,dt,kt),ye.equals(Pe)===!1&&(s.clearColor(Oe,Ue,dt,kt),ye.copy(Pe))},reset:function(){q=!1,me=null,ye.set(-1,0,0,0)}}}function r(){let q=!1,Pe=!1,me=null,ye=null,Oe=null;return{setReversed:function(Ue){if(Pe!==Ue){const dt=e.get("EXT_clip_control");Pe?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const kt=Oe;Oe=null,this.setClear(kt)}Pe=Ue},getReversed:function(){return Pe},setTest:function(Ue){Ue?ae(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ue){me!==Ue&&!q&&(s.depthMask(Ue),me=Ue)},setFunc:function(Ue){if(Pe&&(Ue=A1[Ue]),ye!==Ue){switch(Ue){case hd:s.depthFunc(s.NEVER);break;case pd:s.depthFunc(s.ALWAYS);break;case md:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case gd:s.depthFunc(s.EQUAL);break;case xd:s.depthFunc(s.GEQUAL);break;case yd:s.depthFunc(s.GREATER);break;case vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=Ue}},setLocked:function(Ue){q=Ue},setClear:function(Ue){Oe!==Ue&&(Pe&&(Ue=1-Ue),s.clearDepth(Ue),Oe=Ue)},reset:function(){q=!1,me=null,ye=null,Oe=null,Pe=!1}}}function o(){let q=!1,Pe=null,me=null,ye=null,Oe=null,Ue=null,dt=null,kt=null,Kt=null;return{setTest:function(Mt){q||(Mt?ae(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Mt){Pe!==Mt&&!q&&(s.stencilMask(Mt),Pe=Mt)},setFunc:function(Mt,wn,_n){(me!==Mt||ye!==wn||Oe!==_n)&&(s.stencilFunc(Mt,wn,_n),me=Mt,ye=wn,Oe=_n)},setOp:function(Mt,wn,_n){(Ue!==Mt||dt!==wn||kt!==_n)&&(s.stencilOp(Mt,wn,_n),Ue=Mt,dt=wn,kt=_n)},setLocked:function(Mt){q=Mt},setClear:function(Mt){Kt!==Mt&&(s.clearStencil(Mt),Kt=Mt)},reset:function(){q=!1,Pe=null,me=null,ye=null,Oe=null,Ue=null,dt=null,kt=null,Kt=null}}}const c=new n,u=new r,f=new o,p=new WeakMap,g=new WeakMap;let v={},S={},_=new WeakMap,M=[],E=null,T=!1,y=null,x=null,U=null,D=null,R=null,Z=null,k=null,z=new xt(0,0,0),H=0,N=!1,C=null,F=null,te=null,X=null,ne=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,re=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(V)[1]),se=re>=1):V.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),se=re>=2);let he=null,L={};const b=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),pe=new Xt().fromArray(b),W=new Xt().fromArray(G);function $(q,Pe,me,ye){const Oe=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(q,Ue),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<me;dt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Pe+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return Ue}const ce={};ce[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ae(s.DEPTH_TEST),u.setFunc(Ws),Je(!1),et(Kp),ae(s.CULL_FACE),B(Mr);function ae(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function ge(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function _e(q,Pe){return S[q]!==Pe?(s.bindFramebuffer(q,Pe),S[q]=Pe,q===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Pe),q===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ne(q,Pe){let me=M,ye=!1;if(q){me=_.get(Pe),me===void 0&&(me=[],_.set(Pe,me));const Oe=q.textures;if(me.length!==Oe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,dt=Oe.length;Ue<dt;Ue++)me[Ue]=s.COLOR_ATTACHMENT0+Ue;me.length=Oe.length,ye=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,ye=!0);ye&&s.drawBuffers(me)}function He(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const ze={[$r]:s.FUNC_ADD,[W0]:s.FUNC_SUBTRACT,[X0]:s.FUNC_REVERSE_SUBTRACT};ze[Y0]=s.MIN,ze[q0]=s.MAX;const tt={[$0]:s.ZERO,[Z0]:s.ONE,[K0]:s.SRC_COLOR,[dd]:s.SRC_ALPHA,[iv]:s.SRC_ALPHA_SATURATE,[tv]:s.DST_COLOR,[J0]:s.DST_ALPHA,[Q0]:s.ONE_MINUS_SRC_COLOR,[fd]:s.ONE_MINUS_SRC_ALPHA,[nv]:s.ONE_MINUS_DST_COLOR,[ev]:s.ONE_MINUS_DST_ALPHA,[rv]:s.CONSTANT_COLOR,[sv]:s.ONE_MINUS_CONSTANT_COLOR,[av]:s.CONSTANT_ALPHA,[ov]:s.ONE_MINUS_CONSTANT_ALPHA};function B(q,Pe,me,ye,Oe,Ue,dt,kt,Kt,Mt){if(q===Mr){T===!0&&(ge(s.BLEND),T=!1);return}if(T===!1&&(ae(s.BLEND),T=!0),q!==j0){if(q!==y||Mt!==N){if((x!==$r||R!==$r)&&(s.blendEquation(s.FUNC_ADD),x=$r,R=$r),Mt)switch(q){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,D=null,Z=null,k=null,z.set(0,0,0),H=0,y=q,N=Mt}return}Oe=Oe||Pe,Ue=Ue||me,dt=dt||ye,(Pe!==x||Oe!==R)&&(s.blendEquationSeparate(ze[Pe],ze[Oe]),x=Pe,R=Oe),(me!==U||ye!==D||Ue!==Z||dt!==k)&&(s.blendFuncSeparate(tt[me],tt[ye],tt[Ue],tt[dt]),U=me,D=ye,Z=Ue,k=dt),(kt.equals(z)===!1||Kt!==H)&&(s.blendColor(kt.r,kt.g,kt.b,Kt),z.copy(kt),H=Kt),y=q,N=!1}function _t(q,Pe){q.side===Mi?ge(s.CULL_FACE):ae(s.CULL_FACE);let me=q.side===Un;Pe&&(me=!me),Je(me),q.blending===Vs&&q.transparent===!1?B(Mr):B(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const ye=q.stencilWrite;f.setTest(ye),ye&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),it(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(q){C!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),C=q)}function et(q){q!==V0?(ae(s.CULL_FACE),q!==F&&(q===Kp?s.cullFace(s.BACK):q===G0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),F=q}function Ae(q){q!==te&&(se&&s.lineWidth(q),te=q)}function it(q,Pe,me){q?(ae(s.POLYGON_OFFSET_FILL),(X!==Pe||ne!==me)&&(s.polygonOffset(Pe,me),X=Pe,ne=me)):ge(s.POLYGON_OFFSET_FILL)}function Ie(q){q?ae(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function P(q){q===void 0&&(q=s.TEXTURE0+ie-1),he!==q&&(s.activeTexture(q),he=q)}function A(q,Pe,me){me===void 0&&(he===null?me=s.TEXTURE0+ie-1:me=he);let ye=L[me];ye===void 0&&(ye={type:void 0,texture:void 0},L[me]=ye),(ye.type!==q||ye.texture!==Pe)&&(he!==me&&(s.activeTexture(me),he=me),s.bindTexture(q,Pe||ce[q]),ye.type=q,ye.texture=Pe)}function J(){const q=L[he];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(q){pe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),pe.copy(q))}function Ge(q){W.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),W.copy(q))}function yt(q,Pe){let me=g.get(Pe);me===void 0&&(me=new WeakMap,g.set(Pe,me));let ye=me.get(q);ye===void 0&&(ye=s.getUniformBlockIndex(Pe,q.name),me.set(q,ye))}function ut(q,Pe){const ye=g.get(Pe).get(q);p.get(Pe)!==ye&&(s.uniformBlockBinding(Pe,ye,q.__bindingPointIndex),p.set(Pe,ye))}function It(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},he=null,L={},S={},_=new WeakMap,M=[],E=null,T=!1,y=null,x=null,U=null,D=null,R=null,Z=null,k=null,z=new xt(0,0,0),H=0,N=!1,C=null,F=null,te=null,X=null,ne=null,pe.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ae,disable:ge,bindFramebuffer:_e,drawBuffers:Ne,useProgram:He,setBlending:B,setMaterial:_t,setFlipSided:Je,setCullFace:et,setLineWidth:Ae,setPolygonOffset:it,setScissorTest:Ie,activeTexture:P,bindTexture:A,unbindTexture:J,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:Be,texImage3D:nt,updateUBOMapping:yt,uniformBlockBinding:ut,texStorage2D:ft,texStorage3D:be,texSubImage2D:xe,texSubImage3D:We,compressedTexSubImage2D:Le,compressedTexSubImage3D:ke,scissor:at,viewport:Ge,reset:It}}function qm(s,e,n,r){const o=R1(r);switch(n){case Mg:return s*e;case wg:return s*e;case Tg:return s*e*2;case Ag:return s*e/o.components*o.byteLength;case lf:return s*e/o.components*o.byteLength;case Cg:return s*e*2/o.components*o.byteLength;case cf:return s*e*2/o.components*o.byteLength;case bg:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case uf:return s*e*4/o.components*o.byteLength;case Tl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:case Ad:return Math.max(s,16)*Math.max(e,8)/4;case bd:case Td:return Math.max(s,8)*Math.max(e,8)/2;case Cd:case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Wd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rg:case Yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function R1(s){switch(s){case qi:case _g:return{byteLength:1,components:1};case Ga:case Sg:case Wa:return{byteLength:2,components:1};case af:case of:return{byteLength:2,components:4};case Jr:case sf:case Wi:return{byteLength:4,components:1};case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function N1(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Tt,v=new WeakMap;let S;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return M?new OffscreenCanvas(P,A):Dl("canvas")}function T(P,A,J){let ve=1;const Se=Ie(P);if((Se.width>J||Se.height>J)&&(ve=J/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const xe=Math.floor(ve*Se.width),We=Math.floor(ve*Se.height);S===void 0&&(S=E(xe,We));const Le=A?E(xe,We):S;return Le.width=xe,Le.height=We,Le.getContext("2d").drawImage(P,0,0,xe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+xe+"x"+We+")."),Le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),P;return P}function y(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,A,J,ve,Se=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe=A;if(A===s.RED&&(J===s.FLOAT&&(xe=s.R32F),J===s.HALF_FLOAT&&(xe=s.R16F),J===s.UNSIGNED_BYTE&&(xe=s.R8)),A===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.R8UI),J===s.UNSIGNED_SHORT&&(xe=s.R16UI),J===s.UNSIGNED_INT&&(xe=s.R32UI),J===s.BYTE&&(xe=s.R8I),J===s.SHORT&&(xe=s.R16I),J===s.INT&&(xe=s.R32I)),A===s.RG&&(J===s.FLOAT&&(xe=s.RG32F),J===s.HALF_FLOAT&&(xe=s.RG16F),J===s.UNSIGNED_BYTE&&(xe=s.RG8)),A===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RG8UI),J===s.UNSIGNED_SHORT&&(xe=s.RG16UI),J===s.UNSIGNED_INT&&(xe=s.RG32UI),J===s.BYTE&&(xe=s.RG8I),J===s.SHORT&&(xe=s.RG16I),J===s.INT&&(xe=s.RG32I)),A===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),J===s.UNSIGNED_INT&&(xe=s.RGB32UI),J===s.BYTE&&(xe=s.RGB8I),J===s.SHORT&&(xe=s.RGB16I),J===s.INT&&(xe=s.RGB32I)),A===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),J===s.UNSIGNED_INT&&(xe=s.RGBA32UI),J===s.BYTE&&(xe=s.RGBA8I),J===s.SHORT&&(xe=s.RGBA16I),J===s.INT&&(xe=s.RGBA32I)),A===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),A===s.RGBA){const We=Se?Bl:wt.getTransfer(ve);J===s.FLOAT&&(xe=s.RGBA32F),J===s.HALF_FLOAT&&(xe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(xe=We===Pt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function R(P,A){let J;return P?A===null||A===Jr||A===qs?J=s.DEPTH24_STENCIL8:A===Wi?J=s.DEPTH32F_STENCIL8:A===Ga&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Jr||A===qs?J=s.DEPTH_COMPONENT24:A===Wi?J=s.DEPTH_COMPONENT32F:A===Ga&&(J=s.DEPTH_COMPONENT16),J}function Z(P,A){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==mi&&P.minFilter!==bi?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function k(P){const A=P.target;A.removeEventListener("dispose",k),H(A),A.isVideoTexture&&v.delete(A)}function z(P){const A=P.target;A.removeEventListener("dispose",z),C(A)}function H(P){const A=r.get(P);if(A.__webglInit===void 0)return;const J=P.source,ve=_.get(J);if(ve){const Se=ve[A.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&N(P),Object.keys(ve).length===0&&_.delete(J)}r.remove(P)}function N(P){const A=r.get(P);s.deleteTexture(A.__webglTexture);const J=P.source,ve=_.get(J);delete ve[A.__cacheKey],u.memory.textures--}function C(P){const A=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(A.__webglFramebuffer[ve]))for(let Se=0;Se<A.__webglFramebuffer[ve].length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[ve][Se]);else s.deleteFramebuffer(A.__webglFramebuffer[ve]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ve])}else{if(Array.isArray(A.__webglFramebuffer))for(let ve=0;ve<A.__webglFramebuffer.length;ve++)s.deleteFramebuffer(A.__webglFramebuffer[ve]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ve=0;ve<A.__webglColorRenderbuffer.length;ve++)A.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ve]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=P.textures;for(let ve=0,Se=J.length;ve<Se;ve++){const xe=r.get(J[ve]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(J[ve])}r.remove(P)}let F=0;function te(){F=0}function X(){const P=F;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),F+=1,P}function ne(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ie(P,A){const J=r.get(P);if(P.isVideoTexture&&Ae(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const ve=P.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,P,A);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+A)}function se(P,A){const J=r.get(P);if(P.version>0&&J.__version!==P.version){W(J,P,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+A)}function re(P,A){const J=r.get(P);if(P.version>0&&J.__version!==P.version){W(J,P,A);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+A)}function V(P,A){const J=r.get(P);if(P.version>0&&J.__version!==P.version){$(J,P,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+A)}const he={[Ed]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Md]:s.MIRRORED_REPEAT},L={[mi]:s.NEAREST,[xv]:s.NEAREST_MIPMAP_NEAREST,[il]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Nu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},b={[Sv]:s.NEVER,[Av]:s.ALWAYS,[Ev]:s.LESS,[Ig]:s.LEQUAL,[Mv]:s.EQUAL,[Tv]:s.GEQUAL,[bv]:s.GREATER,[wv]:s.NOTEQUAL};function G(P,A){if(A.type===Wi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===bi||A.magFilter===Nu||A.magFilter===il||A.magFilter===Qr||A.minFilter===bi||A.minFilter===Nu||A.minFilter===il||A.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,he[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,he[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,he[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,L[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,L[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,b[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===mi||A.minFilter!==il&&A.minFilter!==Qr||A.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function pe(P,A){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",k));const ve=A.source;let Se=_.get(ve);Se===void 0&&(Se={},_.set(ve,Se));const xe=ne(A);if(xe!==P.__cacheKey){Se[xe]===void 0&&(Se[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Se[xe].usedTimes++;const We=Se[P.__cacheKey];We!==void 0&&(Se[P.__cacheKey].usedTimes--,We.usedTimes===0&&N(A)),P.__cacheKey=xe,P.__webglTexture=Se[xe].texture}return J}function W(P,A,J){let ve=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ve=s.TEXTURE_3D);const Se=pe(P,A),xe=A.source;n.bindTexture(ve,P.__webglTexture,s.TEXTURE0+J);const We=r.get(xe);if(xe.version!==We.__version||Se===!0){n.activeTexture(s.TEXTURE0+J);const Le=wt.getPrimaries(wt.workingColorSpace),ke=A.colorSpace===Er?null:wt.getPrimaries(A.colorSpace),ft=A.colorSpace===Er||Le===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let be=T(A.image,!1,o.maxTextureSize);be=it(A,be);const Be=c.convert(A.format,A.colorSpace),nt=c.convert(A.type);let at=D(A.internalFormat,Be,nt,A.colorSpace,A.isVideoTexture);G(ve,A);let Ge;const yt=A.mipmaps,ut=A.isVideoTexture!==!0,It=We.__version===void 0||Se===!0,q=xe.dataReady,Pe=Z(A,be);if(A.isDepthTexture)at=R(A.format===$s,A.type),It&&(ut?n.texStorage2D(s.TEXTURE_2D,1,at,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,at,be.width,be.height,0,Be,nt,null));else if(A.isDataTexture)if(yt.length>0){ut&&It&&n.texStorage2D(s.TEXTURE_2D,Pe,at,yt[0].width,yt[0].height);for(let me=0,ye=yt.length;me<ye;me++)Ge=yt[me],ut?q&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Ge.width,Ge.height,Be,nt,Ge.data):n.texImage2D(s.TEXTURE_2D,me,at,Ge.width,Ge.height,0,Be,nt,Ge.data);A.generateMipmaps=!1}else ut?(It&&n.texStorage2D(s.TEXTURE_2D,Pe,at,be.width,be.height),q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,Be,nt,be.data)):n.texImage2D(s.TEXTURE_2D,0,at,be.width,be.height,0,Be,nt,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&It&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,at,yt[0].width,yt[0].height,be.depth);for(let me=0,ye=yt.length;me<ye;me++)if(Ge=yt[me],A.format!==pi)if(Be!==null)if(ut){if(q)if(A.layerUpdates.size>0){const Oe=qm(Ge.width,Ge.height,A.format,A.type);for(const Ue of A.layerUpdates){const dt=Ge.data.subarray(Ue*Oe/Ge.data.BYTES_PER_ELEMENT,(Ue+1)*Oe/Ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Ue,Ge.width,Ge.height,1,Be,dt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ge.width,Ge.height,be.depth,Be,Ge.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,at,Ge.width,Ge.height,be.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ge.width,Ge.height,be.depth,Be,nt,Ge.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,at,Ge.width,Ge.height,be.depth,0,Be,nt,Ge.data)}else{ut&&It&&n.texStorage2D(s.TEXTURE_2D,Pe,at,yt[0].width,yt[0].height);for(let me=0,ye=yt.length;me<ye;me++)Ge=yt[me],A.format!==pi?Be!==null?ut?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ge.width,Ge.height,Be,Ge.data):n.compressedTexImage2D(s.TEXTURE_2D,me,at,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?q&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Ge.width,Ge.height,Be,nt,Ge.data):n.texImage2D(s.TEXTURE_2D,me,at,Ge.width,Ge.height,0,Be,nt,Ge.data)}else if(A.isDataArrayTexture)if(ut){if(It&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,at,be.width,be.height,be.depth),q)if(A.layerUpdates.size>0){const me=qm(be.width,be.height,A.format,A.type);for(const ye of A.layerUpdates){const Oe=be.data.subarray(ye*me/be.data.BYTES_PER_ELEMENT,(ye+1)*me/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,be.width,be.height,1,Be,nt,Oe)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Be,nt,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,at,be.width,be.height,be.depth,0,Be,nt,be.data);else if(A.isData3DTexture)ut?(It&&n.texStorage3D(s.TEXTURE_3D,Pe,at,be.width,be.height,be.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Be,nt,be.data)):n.texImage3D(s.TEXTURE_3D,0,at,be.width,be.height,be.depth,0,Be,nt,be.data);else if(A.isFramebufferTexture){if(It)if(ut)n.texStorage2D(s.TEXTURE_2D,Pe,at,be.width,be.height);else{let me=be.width,ye=be.height;for(let Oe=0;Oe<Pe;Oe++)n.texImage2D(s.TEXTURE_2D,Oe,at,me,ye,0,Be,nt,null),me>>=1,ye>>=1}}else if(yt.length>0){if(ut&&It){const me=Ie(yt[0]);n.texStorage2D(s.TEXTURE_2D,Pe,at,me.width,me.height)}for(let me=0,ye=yt.length;me<ye;me++)Ge=yt[me],ut?q&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Be,nt,Ge):n.texImage2D(s.TEXTURE_2D,me,at,Be,nt,Ge);A.generateMipmaps=!1}else if(ut){if(It){const me=Ie(be);n.texStorage2D(s.TEXTURE_2D,Pe,at,me.width,me.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,nt,be)}else n.texImage2D(s.TEXTURE_2D,0,at,Be,nt,be);y(A)&&x(ve),We.__version=xe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function $(P,A,J){if(A.image.length!==6)return;const ve=pe(P,A),Se=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const xe=r.get(Se);if(Se.version!==xe.__version||ve===!0){n.activeTexture(s.TEXTURE0+J);const We=wt.getPrimaries(wt.workingColorSpace),Le=A.colorSpace===Er?null:wt.getPrimaries(A.colorSpace),ke=A.colorSpace===Er||We===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ft=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,Be=[];for(let ye=0;ye<6;ye++)!ft&&!be?Be[ye]=T(A.image[ye],!0,o.maxCubemapSize):Be[ye]=be?A.image[ye].image:A.image[ye],Be[ye]=it(A,Be[ye]);const nt=Be[0],at=c.convert(A.format,A.colorSpace),Ge=c.convert(A.type),yt=D(A.internalFormat,at,Ge,A.colorSpace),ut=A.isVideoTexture!==!0,It=xe.__version===void 0||ve===!0,q=Se.dataReady;let Pe=Z(A,nt);G(s.TEXTURE_CUBE_MAP,A);let me;if(ft){ut&&It&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,yt,nt.width,nt.height);for(let ye=0;ye<6;ye++){me=Be[ye].mipmaps;for(let Oe=0;Oe<me.length;Oe++){const Ue=me[Oe];A.format!==pi?at!==null?ut?q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,0,0,Ue.width,Ue.height,at,Ue.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,yt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,0,0,Ue.width,Ue.height,at,Ge,Ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,yt,Ue.width,Ue.height,0,at,Ge,Ue.data)}}}else{if(me=A.mipmaps,ut&&It){me.length>0&&Pe++;const ye=Ie(Be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,yt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(be){ut?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be[ye].width,Be[ye].height,at,Ge,Be[ye].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,yt,Be[ye].width,Be[ye].height,0,at,Ge,Be[ye].data);for(let Oe=0;Oe<me.length;Oe++){const dt=me[Oe].image[ye].image;ut?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,0,0,dt.width,dt.height,at,Ge,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,yt,dt.width,dt.height,0,at,Ge,dt.data)}}else{ut?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,at,Ge,Be[ye]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,yt,at,Ge,Be[ye]);for(let Oe=0;Oe<me.length;Oe++){const Ue=me[Oe];ut?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,0,0,at,Ge,Ue.image[ye]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,yt,at,Ge,Ue.image[ye])}}}y(A)&&x(s.TEXTURE_CUBE_MAP),xe.__version=Se.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ce(P,A,J,ve,Se,xe){const We=c.convert(J.format,J.colorSpace),Le=c.convert(J.type),ke=D(J.internalFormat,We,Le,J.colorSpace),ft=r.get(A),be=r.get(J);if(be.__renderTarget=A,!ft.__hasExternalTextures){const Be=Math.max(1,A.width>>xe),nt=Math.max(1,A.height>>xe);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?n.texImage3D(Se,xe,ke,Be,nt,A.depth,0,We,Le,null):n.texImage2D(Se,xe,ke,Be,nt,0,We,Le,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),et(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,Se,be.__webglTexture,0,Je(A)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,Se,be.__webglTexture,xe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(P,A,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const ve=A.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,xe=R(A.stencilBuffer,Se),We=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Je(A);et(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,xe,A.width,A.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,xe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,P)}else{const ve=A.textures;for(let Se=0;Se<ve.length;Se++){const xe=ve[Se],We=c.convert(xe.format,xe.colorSpace),Le=c.convert(xe.type),ke=D(xe.internalFormat,We,Le,xe.colorSpace),ft=Je(A);J&&et(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,ke,A.width,A.height):et(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,ke,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ke,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(A.depthTexture);ve.__renderTarget=A,(!ve.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ie(A.depthTexture,0);const Se=ve.__webglTexture,xe=Je(A);if(A.depthTexture.format===Gs)et(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(A.depthTexture.format===$s)et(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function _e(P){const A=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const ve=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ve){const Se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),A.__depthDisposeCallback=Se}A.__boundDepthTexture=ve}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ge(A.__webglFramebuffer,P)}else if(J){A.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ve]),A.__webglDepthbuffer[ve]===void 0)A.__webglDepthbuffer[ve]=s.createRenderbuffer(),ae(A.__webglDepthbuffer[ve],P,!1);else{const Se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,xe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ae(A.__webglDepthbuffer,P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Se)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(P,A,J){const ve=r.get(P);A!==void 0&&ce(ve.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&_e(P)}function He(P){const A=P.texture,J=r.get(P),ve=r.get(A);P.addEventListener("dispose",z);const Se=P.textures,xe=P.isWebGLCubeRenderTarget===!0,We=Se.length>1;if(We||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=A.version,u.memory.textures++),xe){J.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Le]=[];for(let ke=0;ke<A.mipmaps.length;ke++)J.__webglFramebuffer[Le][ke]=s.createFramebuffer()}else J.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Le=0;Le<A.mipmaps.length;Le++)J.__webglFramebuffer[Le]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(We)for(let Le=0,ke=Se.length;Le<ke;Le++){const ft=r.get(Se[Le]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&et(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Le=0;Le<Se.length;Le++){const ke=Se[Le];J.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Le]);const ft=c.convert(ke.format,ke.colorSpace),be=c.convert(ke.type),Be=D(ke.internalFormat,ft,be,ke.colorSpace,P.isXRRenderTarget===!0),nt=Je(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Be,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,J.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(J.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),G(s.TEXTURE_CUBE_MAP,A);for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0)for(let ke=0;ke<A.mipmaps.length;ke++)ce(J.__webglFramebuffer[Le][ke],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,ke);else ce(J.__webglFramebuffer[Le],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(A)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Le=0,ke=Se.length;Le<ke;Le++){const ft=Se[Le],be=r.get(ft);n.bindTexture(s.TEXTURE_2D,be.__webglTexture),G(s.TEXTURE_2D,ft),ce(J.__webglFramebuffer,P,ft,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),y(ft)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Le,ve.__webglTexture),G(Le,A),A.mipmaps&&A.mipmaps.length>0)for(let ke=0;ke<A.mipmaps.length;ke++)ce(J.__webglFramebuffer[ke],P,A,s.COLOR_ATTACHMENT0,Le,ke);else ce(J.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,Le,0);y(A)&&x(Le),n.unbindTexture()}P.depthBuffer&&_e(P)}function ze(P){const A=P.textures;for(let J=0,ve=A.length;J<ve;J++){const Se=A[J];if(y(Se)){const xe=U(P),We=r.get(Se).__webglTexture;n.bindTexture(xe,We),x(xe),n.unbindTexture()}}}const tt=[],B=[];function _t(P){if(P.samples>0){if(et(P)===!1){const A=P.textures,J=P.width,ve=P.height;let Se=s.COLOR_BUFFER_BIT;const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(P),Le=A.length>1;if(Le)for(let ke=0;ke<A.length;ke++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const ft=r.get(A[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,J,ve,0,0,J,ve,Se,s.NEAREST),p===!0&&(tt.length=0,B.length=0,tt.push(s.COLOR_ATTACHMENT0+ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(tt.push(xe),B.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let ke=0;ke<A.length;ke++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const ft=r.get(A[ke]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,ft,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Je(P){return Math.min(o.maxSamples,P.samples)}function et(P){const A=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ae(P){const A=u.render.frame;v.get(P)!==A&&(v.set(P,A),P.update())}function it(P,A){const J=P.colorSpace,ve=P.format,Se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==Ks&&J!==Er&&(wt.getTransfer(J)===Pt?(ve!==pi||Se!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function Ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=X,this.resetTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=se,this.setTexture3D=re,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=et}function I1(s,e){function n(r,o=Er){let c;const u=wt.getTransfer(o);if(r===qi)return s.UNSIGNED_BYTE;if(r===af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_g)return s.BYTE;if(r===Sg)return s.SHORT;if(r===Ga)return s.UNSIGNED_SHORT;if(r===sf)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===Wa)return s.HALF_FLOAT;if(r===Mg)return s.ALPHA;if(r===bg)return s.RGB;if(r===pi)return s.RGBA;if(r===wg)return s.LUMINANCE;if(r===Tg)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===Ag)return s.RED;if(r===lf)return s.RED_INTEGER;if(r===Cg)return s.RG;if(r===cf)return s.RG_INTEGER;if(r===uf)return s.RGBA_INTEGER;if(r===Tl||r===Al||r===Cl||r===Rl)if(u===Pt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Tl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Tl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===wd||r===Td||r===Ad)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cd||r===Rd||r===Nd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Cd||r===Rd)return u===Pt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Nd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Id||r===Ld||r===Pd||r===Dd||r===Ud||r===Od||r===zd||r===kd||r===Fd||r===Bd||r===Hd||r===Vd||r===Gd||r===jd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Id)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Od)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jd)return u===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Wd||r===Xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Nl)return u===Pt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rg||r===Yd||r===qd||r===$d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class L1 extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P1={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),x=this._getHandJoint(g,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=g.joints["index-finger-tip"],S=g.joints["thumb-tip"],_=v.position.distanceTo(S.position),M=.02,E=.005;g.inputState.pinching&&_>M+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=M-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(P1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new tn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
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

}`;class O1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new On,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Tr({vertexShader:D1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pt(new Vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z1 extends Qs{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",p=1,g=null,v=null,S=null,_=null,M=null,E=null;const T=new O1,y=n.getContextAttributes();let x=null,U=null;const D=[],R=[],Z=new Tt;let k=null;const z=new Gn;z.viewport=new Xt;const H=new Gn;H.viewport=new Xt;const N=[z,H],C=new L1;let F=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=D[W];return $===void 0&&($=new sd,D[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=D[W];return $===void 0&&($=new sd,D[W]=$),$.getGripSpace()},this.getHand=function(W){let $=D[W];return $===void 0&&($=new sd,D[W]=$),$.getHandSpace()};function X(W){const $=R.indexOf(W.inputSource);if($===-1)return;const ce=D[$];ce!==void 0&&(ce.update(W.inputSource,W.frame,g||u),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function ne(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",ie);for(let W=0;W<D.length;W++){const $=R[W];$!==null&&(R[W]=null,D[W].disconnect($))}F=null,te=null,T.reset(),e.setRenderTarget(x),M=null,_=null,S=null,o=null,U=null,pe.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){f=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(W){g=W},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(Z),o.renderState.layers===void 0){const $={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,$),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new es(M.framebufferWidth,M.framebufferHeight,{format:pi,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let $=null,ce=null,ae=null;y.depth&&(ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=y.stencil?$s:Gs,ce=y.stencil?qs:Jr);const ge={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:c};S=new XRWebGLBinding(o,n),_=S.createProjectionLayer(ge),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new es(_.textureWidth,_.textureHeight,{format:pi,type:qi,depthTexture:new Gg(_.textureWidth,_.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await o.requestReferenceSpace(f),pe.setContext(o),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ie(W){for(let $=0;$<W.removed.length;$++){const ce=W.removed[$],ae=R.indexOf(ce);ae>=0&&(R[ae]=null,D[ae].disconnect(ce))}for(let $=0;$<W.added.length;$++){const ce=W.added[$];let ae=R.indexOf(ce);if(ae===-1){for(let _e=0;_e<D.length;_e++)if(_e>=R.length){R.push(ce),ae=_e;break}else if(R[_e]===null){R[_e]=ce,ae=_e;break}if(ae===-1)break}const ge=D[ae];ge&&ge.connect(ce)}}const se=new le,re=new le;function V(W,$,ce){se.setFromMatrixPosition($.matrixWorld),re.setFromMatrixPosition(ce.matrixWorld);const ae=se.distanceTo(re),ge=$.projectionMatrix.elements,_e=ce.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),He=ge[14]/(ge[10]+1),ze=(ge[9]+1)/ge[5],tt=(ge[9]-1)/ge[5],B=(ge[8]-1)/ge[0],_t=(_e[8]+1)/_e[0],Je=Ne*B,et=Ne*_t,Ae=ae/(-B+_t),it=Ae*-B;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(it),W.translateZ(Ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ge[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ie=Ne+Ae,P=He+Ae,A=Je-it,J=et+(ae-it),ve=ze*He/P*Ie,Se=tt*He/P*Ie;W.projectionMatrix.makePerspective(A,J,ve,Se,Ie,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function he(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let $=W.near,ce=W.far;T.texture!==null&&(T.depthNear>0&&($=T.depthNear),T.depthFar>0&&(ce=T.depthFar)),C.near=H.near=z.near=$,C.far=H.far=z.far=ce,(F!==C.near||te!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,te=C.far),z.layers.mask=W.layers.mask|2,H.layers.mask=W.layers.mask|4,C.layers.mask=z.layers.mask|H.layers.mask;const ae=W.parent,ge=C.cameras;he(C,ae);for(let _e=0;_e<ge.length;_e++)he(ge[_e],ae);ge.length===2?V(C,z,H):C.projectionMatrix.copy(z.projectionMatrix),L(W,C,ae)};function L(W,$,ce){ce===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(W){p=W,_!==null&&(_.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let b=null;function G(W,$){if(v=$.getViewerPose(g||u),E=$,v!==null){const ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let ae=!1;ce.length!==C.cameras.length&&(C.cameras.length=0,ae=!0);for(let _e=0;_e<ce.length;_e++){const Ne=ce[_e];let He=null;if(M!==null)He=M.getViewport(Ne);else{const tt=S.getViewSubImage(_,Ne);He=tt.viewport,_e===0&&(e.setRenderTargetTextures(U,tt.colorTexture,_.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(U))}let ze=N[_e];ze===void 0&&(ze=new Gn,ze.layers.enable(_e),ze.viewport=new Xt,N[_e]=ze),ze.matrix.fromArray(Ne.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ne.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(He.x,He.y,He.width,He.height),_e===0&&(C.matrix.copy(ze.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ae===!0&&C.cameras.push(ze)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const _e=S.getDepthInformation(ce[0]);_e&&_e.isValid&&_e.texture&&T.init(e,_e,o.renderState)}}for(let ce=0;ce<D.length;ce++){const ae=R[ce],ge=D[ce];ae!==null&&ge!==void 0&&ge.update(ae,$,g||u)}b&&b(W,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),E=null}const pe=new Hg;pe.setAnimationLoop(G),this.setAnimationLoop=function(W){b=W},this.dispose=function(){}}}const Xr=new Ti,k1=new Vt;function F1(s,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,kg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,U,D,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&M(y,x,R)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),T(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,U,D):x.isSpriteMaterial?g(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Un&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Un&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),D=U.envMap,R=U.envMapRotation;D&&(y.envMap.value=D,Xr.copy(R),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Xr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,U,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=D*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function B1(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,D){const R=D.program;r.uniformBlockBinding(U,R)}function g(U,D){let R=o[U.id];R===void 0&&(E(U),R=v(U),o[U.id]=R,U.addEventListener("dispose",y));const Z=D.program;r.updateUBOMapping(U,Z);const k=e.render.frame;c[U.id]!==k&&(_(U),c[U.id]=k)}function v(U){const D=S();U.__bindingPointIndex=D;const R=s.createBuffer(),Z=U.__size,k=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,Z,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function S(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const D=o[U.id],R=U.uniforms,Z=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let k=0,z=R.length;k<z;k++){const H=Array.isArray(R[k])?R[k]:[R[k]];for(let N=0,C=H.length;N<C;N++){const F=H[N];if(M(F,k,N,Z)===!0){const te=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let ie=0;ie<X.length;ie++){const se=X[ie],re=T(se);typeof se=="number"||typeof se=="boolean"?(F.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,te+ne,F.__data)):se.isMatrix3?(F.__data[0]=se.elements[0],F.__data[1]=se.elements[1],F.__data[2]=se.elements[2],F.__data[3]=0,F.__data[4]=se.elements[3],F.__data[5]=se.elements[4],F.__data[6]=se.elements[5],F.__data[7]=0,F.__data[8]=se.elements[6],F.__data[9]=se.elements[7],F.__data[10]=se.elements[8],F.__data[11]=0):(se.toArray(F.__data,ne),ne+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,D,R,Z){const k=U.value,z=D+"_"+R;if(Z[z]===void 0)return typeof k=="number"||typeof k=="boolean"?Z[z]=k:Z[z]=k.clone(),!0;{const H=Z[z];if(typeof k=="number"||typeof k=="boolean"){if(H!==k)return Z[z]=k,!0}else if(H.equals(k)===!1)return H.copy(k),!0}return!1}function E(U){const D=U.uniforms;let R=0;const Z=16;for(let z=0,H=D.length;z<H;z++){const N=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,F=N.length;C<F;C++){const te=N[C],X=Array.isArray(te.value)?te.value:[te.value];for(let ne=0,ie=X.length;ne<ie;ne++){const se=X[ne],re=T(se),V=R%Z,he=V%re.boundary,L=V+he;R+=he,L!==0&&Z-L<re.storage&&(R+=Z-L),te.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=R,R+=re.storage}}}const k=R%Z;return k>0&&(R+=Z-k),U.__size=R,U.__cache={},this}function T(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const R=u.indexOf(D.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function x(){for(const U in o)s.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:p,update:g,dispose:x}}class qg{constructor(e={}){const{canvas:n=Rv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=br,this.toneMappingExposure=1;const R=this;let Z=!1,k=0,z=0,H=null,N=-1,C=null;const F=new Xt,te=new Xt;let X=null;const ne=new xt(0);let ie=0,se=n.width,re=n.height,V=1,he=null,L=null;const b=new Xt(0,0,se,re),G=new Xt(0,0,se,re);let pe=!1;const W=new pf;let $=!1,ce=!1;const ae=new Vt,ge=new Vt,_e=new le,Ne=new Xt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function tt(){return H===null?V:1}let B=r;function _t(I,K){return n.getContext(I,K)}try{const I={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),B===null){const K="webgl2";if(B=_t(K,I),B===null)throw _t(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Je,et,Ae,it,Ie,P,A,J,ve,Se,xe,We,Le,ke,ft,be,Be,nt,at,Ge,yt,ut,It,q;function Pe(){Je=new XE(B),Je.init(),ut=new I1(B,Je),et=new BE(B,Je,e,ut),Ae=new C1(B,Je),et.reverseDepthBuffer&&_&&Ae.buffers.depth.setReversed(!0),it=new $E(B),Ie=new h1,P=new N1(B,Je,Ae,Ie,et,ut,it),A=new VE(R),J=new WE(R),ve=new n_(B),It=new kE(B,ve),Se=new YE(B,ve,it,It),xe=new KE(B,Se,ve,it),at=new ZE(B,et,P),be=new HE(Ie),We=new f1(R,A,J,Je,et,It,be),Le=new F1(R,Ie),ke=new m1,ft=new S1(Je),nt=new zE(R,A,J,Ae,xe,M,p),Be=new T1(R,xe,et),q=new B1(B,it,et,Ae),Ge=new FE(B,Je,it),yt=new qE(B,Je,it),it.programs=We.programs,R.capabilities=et,R.extensions=Je,R.properties=Ie,R.renderLists=ke,R.shadowMap=Be,R.state=Ae,R.info=it}Pe();const me=new z1(R,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=Je.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Je.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(I){I!==void 0&&(V=I,this.setSize(se,re,!1))},this.getSize=function(I){return I.set(se,re)},this.setSize=function(I,K,de=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=I,re=K,n.width=Math.floor(I*V),n.height=Math.floor(K*V),de===!0&&(n.style.width=I+"px",n.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(se*V,re*V).floor()},this.setDrawingBufferSize=function(I,K,de){se=I,re=K,V=de,n.width=Math.floor(I*de),n.height=Math.floor(K*de),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(F)},this.getViewport=function(I){return I.copy(b)},this.setViewport=function(I,K,de,fe){I.isVector4?b.set(I.x,I.y,I.z,I.w):b.set(I,K,de,fe),Ae.viewport(F.copy(b).multiplyScalar(V).round())},this.getScissor=function(I){return I.copy(G)},this.setScissor=function(I,K,de,fe){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,K,de,fe),Ae.scissor(te.copy(G).multiplyScalar(V).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(I){Ae.setScissorTest(pe=I)},this.setOpaqueSort=function(I){he=I},this.setTransparentSort=function(I){L=I},this.getClearColor=function(I){return I.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(I=!0,K=!0,de=!0){let fe=0;if(I){let Q=!1;if(H!==null){const Re=H.texture.format;Q=Re===uf||Re===cf||Re===lf}if(Q){const Re=H.texture.type,Te=Re===qi||Re===Jr||Re===Ga||Re===qs||Re===af||Re===of,qe=nt.getClearColor(),Xe=nt.getClearAlpha(),ot=qe.r,ct=qe.g,$e=qe.b;Te?(E[0]=ot,E[1]=ct,E[2]=$e,E[3]=Xe,B.clearBufferuiv(B.COLOR,0,E)):(T[0]=ot,T[1]=ct,T[2]=$e,T[3]=Xe,B.clearBufferiv(B.COLOR,0,T))}else fe|=B.COLOR_BUFFER_BIT}K&&(fe|=B.DEPTH_BUFFER_BIT),de&&(fe|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),ke.dispose(),ft.dispose(),Ie.dispose(),A.dispose(),J.dispose(),xe.dispose(),It.dispose(),q.dispose(),We.dispose(),me.dispose(),me.removeEventListener("sessionstart",ts),me.removeEventListener("sessionend",$i),Ai.stop()};function ye(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;const I=it.autoReset,K=Be.enabled,de=Be.autoUpdate,fe=Be.needsUpdate,Q=Be.type;Pe(),it.autoReset=I,Be.enabled=K,Be.autoUpdate=de,Be.needsUpdate=fe,Be.type=Q}function Ue(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function dt(I){const K=I.target;K.removeEventListener("dispose",dt),kt(K)}function kt(I){Kt(I),Ie.remove(I)}function Kt(I){const K=Ie.get(I).programs;K!==void 0&&(K.forEach(function(de){We.releaseProgram(de)}),I.isShaderMaterial&&We.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,de,fe,Q,Re){K===null&&(K=He);const Te=Q.isMesh&&Q.matrixWorld.determinant()<0,qe=Ka(I,K,de,fe,Q);Ae.setMaterial(fe,Te);let Xe=de.index,ot=1;if(fe.wireframe===!0){if(Xe=Se.getWireframeAttribute(de),Xe===void 0)return;ot=2}const ct=de.drawRange,$e=de.attributes.position;let Et=ct.start*ot,Rt=(ct.start+ct.count)*ot;Re!==null&&(Et=Math.max(Et,Re.start*ot),Rt=Math.min(Rt,(Re.start+Re.count)*ot)),Xe!==null?(Et=Math.max(Et,0),Rt=Math.min(Rt,Xe.count)):$e!=null&&(Et=Math.max(Et,0),Rt=Math.min(Rt,$e.count));const St=Rt-Et;if(St<0||St===1/0)return;It.setup(Q,fe,qe,de,Xe);let fn,ht=Ge;if(Xe!==null&&(fn=ve.get(Xe),ht=yt,ht.setIndex(fn)),Q.isMesh)fe.wireframe===!0?(Ae.setLineWidth(fe.wireframeLinewidth*tt()),ht.setMode(B.LINES)):ht.setMode(B.TRIANGLES);else if(Q.isLine){let Qe=fe.linewidth;Qe===void 0&&(Qe=1),Ae.setLineWidth(Qe*tt()),Q.isLineSegments?ht.setMode(B.LINES):Q.isLineLoop?ht.setMode(B.LINE_LOOP):ht.setMode(B.LINE_STRIP)}else Q.isPoints?ht.setMode(B.POINTS):Q.isSprite&&ht.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ht.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ht.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,ni=Q._multiDrawCounts,At=Q._multiDrawCount,hn=Xe?ve.get(Xe).bytesPerElement:1,ii=Ie.get(fe).currentProgram.getUniforms();for(let Qt=0;Qt<At;Qt++)ii.setValue(B,"_gl_DrawID",Qt),ht.render(Qe[Qt]/hn,ni[Qt])}else if(Q.isInstancedMesh)ht.renderInstances(Et,St,Q.count);else if(de.isInstancedBufferGeometry){const Qe=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ni=Math.min(de.instanceCount,Qe);ht.renderInstances(Et,St,ni)}else ht.render(Et,St)};function Mt(I,K,de){I.transparent===!0&&I.side===Mi&&I.forceSinglePass===!1?(I.side=Un,I.needsUpdate=!0,ns(I,K,de),I.side=wr,I.needsUpdate=!0,ns(I,K,de),I.side=Mi):ns(I,K,de)}this.compile=function(I,K,de=null){de===null&&(de=I),x=ft.get(de),x.init(K),D.push(x),de.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),I!==de&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const fe=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Te=0;Te<Re.length;Te++){const qe=Re[Te];Mt(qe,de,Q),fe.add(qe)}else Mt(Re,de,Q),fe.add(Re)}),D.pop(),x=null,fe},this.compileAsync=function(I,K,de=null){const fe=this.compile(I,K,de);return new Promise(Q=>{function Re(){if(fe.forEach(function(Te){Ie.get(Te).currentProgram.isReady()&&fe.delete(Te)}),fe.size===0){Q(I);return}setTimeout(Re,10)}Je.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let wn=null;function _n(I){wn&&wn(I)}function ts(){Ai.stop()}function $i(){Ai.start()}const Ai=new Hg;Ai.setAnimationLoop(_n),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(I){wn=I,me.setAnimationLoop(I),I===null?Ai.stop():Ai.start()},me.addEventListener("sessionstart",ts),me.addEventListener("sessionend",$i),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(K),K=me.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,K,H),x=ft.get(I,D.length),x.init(K),D.push(x),ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,$=be.init(this.clippingPlanes,ce),y=ke.get(I,U.length),y.init(),U.push(y),me.enabled===!0&&me.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&Ci(Re,K,-1/0,R.sortObjects)}Ci(I,K,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(he,L),ze=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ze&&nt.addToRenderList(y,I),this.info.render.frame++,$===!0&&be.beginShadows();const de=x.state.shadowsArray;Be.render(de,I,K),$===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=y.opaque,Q=y.transmissive;if(x.setupLights(),K.isArrayCamera){const Re=K.cameras;if(Q.length>0)for(let Te=0,qe=Re.length;Te<qe;Te++){const Xe=Re[Te];Cr(fe,Q,I,Xe)}ze&&nt.render(I);for(let Te=0,qe=Re.length;Te<qe;Te++){const Xe=Re[Te];Ar(y,I,Xe,Xe.viewport)}}else Q.length>0&&Cr(fe,Q,I,K),ze&&nt.render(I),Ar(y,I,K);H!==null&&(P.updateMultisampleRenderTarget(H),P.updateRenderTargetMipmap(H)),I.isScene===!0&&I.onAfterRender(R,I,K),It.resetDefaultState(),N=-1,C=null,D.pop(),D.length>0?(x=D[D.length-1],$===!0&&be.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ci(I,K,de,fe){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)de=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||W.intersectsSprite(I)){fe&&Ne.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ge);const Te=xe.update(I),qe=I.material;qe.visible&&y.push(I,Te,qe,de,Ne.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||W.intersectsObject(I))){const Te=xe.update(I),qe=I.material;if(fe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ne.copy(I.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(I.matrixWorld).applyMatrix4(ge)),Array.isArray(qe)){const Xe=Te.groups;for(let ot=0,ct=Xe.length;ot<ct;ot++){const $e=Xe[ot],Et=qe[$e.materialIndex];Et&&Et.visible&&y.push(I,Te,Et,de,Ne.z,$e)}}else qe.visible&&y.push(I,Te,qe,de,Ne.z,null)}}const Re=I.children;for(let Te=0,qe=Re.length;Te<qe;Te++)Ci(Re[Te],K,de,fe)}function Ar(I,K,de,fe){const Q=I.opaque,Re=I.transmissive,Te=I.transparent;x.setupLightsView(de),$===!0&&be.setGlobalState(R.clippingPlanes,de),fe&&Ae.viewport(F.copy(fe)),Q.length>0&&Zi(Q,K,de),Re.length>0&&Zi(Re,K,de),Te.length>0&&Zi(Te,K,de),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Cr(I,K,de,fe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[fe.id]===void 0&&(x.state.transmissionRenderTarget[fe.id]=new es(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Wa:qi,minFilter:Qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Re=x.state.transmissionRenderTarget[fe.id],Te=fe.viewport||F;Re.setSize(Te.z,Te.w);const qe=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(ne),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),ze&&nt.render(de);const Xe=R.toneMapping;R.toneMapping=br;const ot=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),x.setupLightsView(fe),$===!0&&be.setGlobalState(R.clippingPlanes,fe),Zi(I,de,fe),P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let $e=0,Et=K.length;$e<Et;$e++){const Rt=K[$e],St=Rt.object,fn=Rt.geometry,ht=Rt.material,Qe=Rt.group;if(ht.side===Mi&&St.layers.test(fe.layers)){const ni=ht.side;ht.side=Un,ht.needsUpdate=!0,$a(St,de,fe,fn,ht,Qe),ht.side=ni,ht.needsUpdate=!0,ct=!0}}ct===!0&&(P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re))}R.setRenderTarget(qe),R.setClearColor(ne,ie),ot!==void 0&&(fe.viewport=ot),R.toneMapping=Xe}function Zi(I,K,de){const fe=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Re=I.length;Q<Re;Q++){const Te=I[Q],qe=Te.object,Xe=Te.geometry,ot=fe===null?Te.material:fe,ct=Te.group;qe.layers.test(de.layers)&&$a(qe,K,de,Xe,ot,ct)}}function $a(I,K,de,fe,Q,Re){I.onBeforeRender(R,K,de,fe,Q,Re),I.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(R,K,de,fe,I,Re),Q.transparent===!0&&Q.side===Mi&&Q.forceSinglePass===!1?(Q.side=Un,Q.needsUpdate=!0,R.renderBufferDirect(de,K,fe,Q,I,Re),Q.side=wr,Q.needsUpdate=!0,R.renderBufferDirect(de,K,fe,Q,I,Re),Q.side=Mi):R.renderBufferDirect(de,K,fe,Q,I,Re),I.onAfterRender(R,K,de,fe,Q,Re)}function ns(I,K,de){K.isScene!==!0&&(K=He);const fe=Ie.get(I),Q=x.state.lights,Re=x.state.shadowsArray,Te=Q.state.version,qe=We.getParameters(I,Q.state,Re,K,de),Xe=We.getProgramCacheKey(qe);let ot=fe.programs;fe.environment=I.isMeshStandardMaterial?K.environment:null,fe.fog=K.fog,fe.envMap=(I.isMeshStandardMaterial?J:A).get(I.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,ot===void 0&&(I.addEventListener("dispose",dt),ot=new Map,fe.programs=ot);let ct=ot.get(Xe);if(ct!==void 0){if(fe.currentProgram===ct&&fe.lightsStateVersion===Te)return gi(I,qe),ct}else qe.uniforms=We.getUniforms(I),I.onBeforeCompile(qe,R),ct=We.acquireProgram(qe,Xe),ot.set(Xe,ct),fe.uniforms=qe.uniforms;const $e=fe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&($e.clippingPlanes=be.uniform),gi(I,qe),fe.needsLights=Wl(I),fe.lightsStateVersion=Te,fe.needsLights&&($e.ambientLightColor.value=Q.state.ambient,$e.lightProbe.value=Q.state.probe,$e.directionalLights.value=Q.state.directional,$e.directionalLightShadows.value=Q.state.directionalShadow,$e.spotLights.value=Q.state.spot,$e.spotLightShadows.value=Q.state.spotShadow,$e.rectAreaLights.value=Q.state.rectArea,$e.ltc_1.value=Q.state.rectAreaLTC1,$e.ltc_2.value=Q.state.rectAreaLTC2,$e.pointLights.value=Q.state.point,$e.pointLightShadows.value=Q.state.pointShadow,$e.hemisphereLights.value=Q.state.hemi,$e.directionalShadowMap.value=Q.state.directionalShadowMap,$e.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$e.spotShadowMap.value=Q.state.spotShadowMap,$e.spotLightMatrix.value=Q.state.spotLightMatrix,$e.spotLightMap.value=Q.state.spotLightMap,$e.pointShadowMap.value=Q.state.pointShadowMap,$e.pointShadowMatrix.value=Q.state.pointShadowMatrix),fe.currentProgram=ct,fe.uniformsList=null,ct}function Za(I){if(I.uniformsList===null){const K=I.currentProgram.getUniforms();I.uniformsList=Il.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function gi(I,K){const de=Ie.get(I);de.outputColorSpace=K.outputColorSpace,de.batching=K.batching,de.batchingColor=K.batchingColor,de.instancing=K.instancing,de.instancingColor=K.instancingColor,de.instancingMorph=K.instancingMorph,de.skinning=K.skinning,de.morphTargets=K.morphTargets,de.morphNormals=K.morphNormals,de.morphColors=K.morphColors,de.morphTargetsCount=K.morphTargetsCount,de.numClippingPlanes=K.numClippingPlanes,de.numIntersection=K.numClipIntersection,de.vertexAlphas=K.vertexAlphas,de.vertexTangents=K.vertexTangents,de.toneMapping=K.toneMapping}function Ka(I,K,de,fe,Q){K.isScene!==!0&&(K=He),P.resetTextureUnits();const Re=K.fog,Te=fe.isMeshStandardMaterial?K.environment:null,qe=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ks,Xe=(fe.isMeshStandardMaterial?J:A).get(fe.envMap||Te),ot=fe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ct=!!de.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),$e=!!de.morphAttributes.position,Et=!!de.morphAttributes.normal,Rt=!!de.morphAttributes.color;let St=br;fe.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(St=R.toneMapping);const fn=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ht=fn!==void 0?fn.length:0,Qe=Ie.get(fe),ni=x.state.lights;if($===!0&&(ce===!0||I!==C)){const Sn=I===C&&fe.id===N;be.setState(fe,I,Sn)}let At=!1;fe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ni.state.version||Qe.outputColorSpace!==qe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==Xe||fe.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==be.numPlanes||Qe.numIntersection!==be.numIntersection)||Qe.vertexAlphas!==ot||Qe.vertexTangents!==ct||Qe.morphTargets!==$e||Qe.morphNormals!==Et||Qe.morphColors!==Rt||Qe.toneMapping!==St||Qe.morphTargetsCount!==ht)&&(At=!0):(At=!0,Qe.__version=fe.version);let hn=Qe.currentProgram;At===!0&&(hn=ns(fe,K,Q));let ii=!1,Qt=!1,xi=!1;const Ut=hn.getUniforms(),jn=Qe.uniforms;if(Ae.useProgram(hn.program)&&(ii=!0,Qt=!0,xi=!0),fe.id!==N&&(N=fe.id,Qt=!0),ii||C!==I){Ae.buffers.depth.getReversed()?(ae.copy(I.projectionMatrix),Iv(ae),Lv(ae),Ut.setValue(B,"projectionMatrix",ae)):Ut.setValue(B,"projectionMatrix",I.projectionMatrix),Ut.setValue(B,"viewMatrix",I.matrixWorldInverse);const Wn=Ut.map.cameraPosition;Wn!==void 0&&Wn.setValue(B,_e.setFromMatrixPosition(I.matrixWorld)),et.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,Qt=!0,xi=!0)}if(Q.isSkinnedMesh){Ut.setOptional(B,Q,"bindMatrix"),Ut.setOptional(B,Q,"bindMatrixInverse");const Sn=Q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ut.setValue(B,"boneTexture",Sn.boneTexture,P))}Q.isBatchedMesh&&(Ut.setOptional(B,Q,"batchingTexture"),Ut.setValue(B,"batchingTexture",Q._matricesTexture,P),Ut.setOptional(B,Q,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",Q._indirectTexture,P),Ut.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",Q._colorsTexture,P));const Ri=de.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&at.update(Q,de,hn),(Qt||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,Ut.setValue(B,"receiveShadow",Q.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(jn.envMap.value=Xe,jn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&K.environment!==null&&(jn.envMapIntensity.value=K.environmentIntensity),Qt&&(Ut.setValue(B,"toneMappingExposure",R.toneMappingExposure),Qe.needsLights&&Qa(jn,xi),Re&&fe.fog===!0&&Le.refreshFogUniforms(jn,Re),Le.refreshMaterialUniforms(jn,fe,V,re,x.state.transmissionRenderTarget[I.id]),Il.upload(B,Za(Qe),jn,P)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Il.upload(B,Za(Qe),jn,P),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Ut.setValue(B,"center",Q.center),Ut.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Ut.setValue(B,"normalMatrix",Q.normalMatrix),Ut.setValue(B,"modelMatrix",Q.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Sn=fe.uniformsGroups;for(let Wn=0,Tn=Sn.length;Wn<Tn;Wn++){const Ja=Sn[Wn];q.update(Ja,hn),q.bind(Ja,hn)}}return hn}function Qa(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function Wl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(I,K,de){Ie.get(I.texture).__webglTexture=K,Ie.get(I.depthTexture).__webglTexture=de;const fe=Ie.get(I);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=de===void 0,fe.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,K){const de=Ie.get(I);de.__webglFramebuffer=K,de.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,de=0){H=I,k=K,z=de;let fe=!0,Q=null,Re=!1,Te=!1;if(I){const Xe=Ie.get(I);if(Xe.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(B.FRAMEBUFFER,null),fe=!1;else if(Xe.__webglFramebuffer===void 0)P.setupRenderTarget(I);else if(Xe.__hasExternalTextures)P.rebindTextures(I,Ie.get(I.texture).__webglTexture,Ie.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const $e=I.depthTexture;if(Xe.__boundDepthTexture!==$e){if($e!==null&&Ie.has($e)&&(I.width!==$e.image.width||I.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(I)}}const ot=I.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Te=!0);const ct=Ie.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[K])?Q=ct[K][de]:Q=ct[K],Re=!0):I.samples>0&&P.useMultisampledRTT(I)===!1?Q=Ie.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?Q=ct[de]:Q=ct,F.copy(I.viewport),te.copy(I.scissor),X=I.scissorTest}else F.copy(b).multiplyScalar(V).floor(),te.copy(G).multiplyScalar(V).floor(),X=pe;if(Ae.bindFramebuffer(B.FRAMEBUFFER,Q)&&fe&&Ae.drawBuffers(I,Q),Ae.viewport(F),Ae.scissor(te),Ae.setScissorTest(X),Re){const Xe=Ie.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Xe.__webglTexture,de)}else if(Te){const Xe=Ie.get(I.texture),ot=K||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,de||0,ot)}N=-1},this.readRenderTargetPixels=function(I,K,de,fe,Q,Re,Te){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(qe=qe[Te]),qe){Ae.bindFramebuffer(B.FRAMEBUFFER,qe);try{const Xe=I.texture,ot=Xe.format,ct=Xe.type;if(!et.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-fe&&de>=0&&de<=I.height-Q&&B.readPixels(K,de,fe,Q,ut.convert(ot),ut.convert(ct),Re)}finally{const Xe=H!==null?Ie.get(H).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(I,K,de,fe,Q,Re,Te){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(qe=qe[Te]),qe){const Xe=I.texture,ot=Xe.format,ct=Xe.type;if(!et.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=I.width-fe&&de>=0&&de<=I.height-Q){Ae.bindFramebuffer(B.FRAMEBUFFER,qe);const $e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),B.readPixels(K,de,fe,Q,ut.convert(ot),ut.convert(ct),0);const Et=H!==null?Ie.get(H).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,Et);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Nv(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.deleteBuffer($e),B.deleteSync(Rt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,K=null,de=0){I.isTexture!==!0&&(Fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,I=arguments[1]);const fe=Math.pow(2,-de),Q=Math.floor(I.image.width*fe),Re=Math.floor(I.image.height*fe),Te=K!==null?K.x:0,qe=K!==null?K.y:0;P.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,de,0,0,Te,qe,Q,Re),Ae.unbindTexture()},this.copyTextureToTexture=function(I,K,de=null,fe=null,Q=0){I.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,I=arguments[1],K=arguments[2],Q=arguments[3]||0,de=null);let Re,Te,qe,Xe,ot,ct,$e,Et,Rt;const St=I.isCompressedTexture?I.mipmaps[Q]:I.image;de!==null?(Re=de.max.x-de.min.x,Te=de.max.y-de.min.y,qe=de.isBox3?de.max.z-de.min.z:1,Xe=de.min.x,ot=de.min.y,ct=de.isBox3?de.min.z:0):(Re=St.width,Te=St.height,qe=St.depth||1,Xe=0,ot=0,ct=0),fe!==null?($e=fe.x,Et=fe.y,Rt=fe.z):($e=0,Et=0,Rt=0);const fn=ut.convert(K.format),ht=ut.convert(K.type);let Qe;K.isData3DTexture?(P.setTexture3D(K,0),Qe=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(P.setTexture2DArray(K,0),Qe=B.TEXTURE_2D_ARRAY):(P.setTexture2D(K,0),Qe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const ni=B.getParameter(B.UNPACK_ROW_LENGTH),At=B.getParameter(B.UNPACK_IMAGE_HEIGHT),hn=B.getParameter(B.UNPACK_SKIP_PIXELS),ii=B.getParameter(B.UNPACK_SKIP_ROWS),Qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);const xi=I.isDataArrayTexture||I.isData3DTexture,Ut=K.isDataArrayTexture||K.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const jn=Ie.get(I),Ri=Ie.get(K),Sn=Ie.get(jn.__renderTarget),Wn=Ie.get(Ri.__renderTarget);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Tn=0;Tn<qe;Tn++)xi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.get(I).__webglTexture,Q,ct+Tn),I.isDepthTexture?(Ut&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.get(K).__webglTexture,Q,Rt+Tn),B.blitFramebuffer(Xe,ot,Re,Te,$e,Et,Re,Te,B.DEPTH_BUFFER_BIT,B.NEAREST)):Ut?B.copyTexSubImage3D(Qe,Q,$e,Et,Rt+Tn,Xe,ot,Re,Te):B.copyTexSubImage2D(Qe,Q,$e,Et,Rt+Tn,Xe,ot,Re,Te);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ut?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Qe,Q,$e,Et,Rt,Re,Te,qe,fn,ht,St.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(Qe,Q,$e,Et,Rt,Re,Te,qe,fn,St.data):B.texSubImage3D(Qe,Q,$e,Et,Rt,Re,Te,qe,fn,ht,St):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Q,$e,Et,Re,Te,fn,ht,St.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Q,$e,Et,St.width,St.height,fn,St.data):B.texSubImage2D(B.TEXTURE_2D,Q,$e,Et,Re,Te,fn,ht,St);B.pixelStorei(B.UNPACK_ROW_LENGTH,ni),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),B.pixelStorei(B.UNPACK_SKIP_PIXELS,hn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ii),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt),Q===0&&K.generateMipmaps&&B.generateMipmap(Qe),Ae.unbindTexture()},this.copyTextureToTexture3D=function(I,K,de=null,fe=null,Q=0){return I.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),de=arguments[0]||null,fe=arguments[1]||null,I=arguments[2],K=arguments[3],Q=arguments[4]||0),Fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,K,de,fe,Q)},this.initRenderTarget=function(I){Ie.get(I).__webglFramebuffer===void 0&&P.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?P.setTextureCube(I,0):I.isData3DTexture?P.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?P.setTexture2DArray(I,0):P.setTexture2D(I,0),Ae.unbindTexture()},this.resetState=function(){k=0,z=0,H=null,Ae.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}class jl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=n}clone(){return new jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $g extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Zg extends Js{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new le,Ol=new le,$m=new Vt,ka=new df,bl=new Hl,ad=new le,Zm=new le;class H1 extends dn{constructor(e=new ti,n=new Zg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Ul.fromBufferAttribute(n,o-1),Ol.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Ul.distanceTo(Ol);e.setAttribute("lineDistance",new Zt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(o),bl.radius+=c,e.ray.intersectsSphere(bl)===!1)return;$m.copy(o).invert(),ka.copy(e.ray).applyMatrix4($m);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,g=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=M,y=E-1;T<y;T+=g){const x=v.getX(T),U=v.getX(T+1),D=wl(this,e,ka,p,x,U);D&&n.push(D)}if(this.isLineLoop){const T=v.getX(E-1),y=v.getX(M),x=wl(this,e,ka,p,T,y);x&&n.push(x)}}else{const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let T=M,y=E-1;T<y;T+=g){const x=wl(this,e,ka,p,T,T+1);x&&n.push(x)}if(this.isLineLoop){const T=wl(this,e,ka,p,E-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function wl(s,e,n,r,o,c){const u=s.geometry.attributes.position;if(Ul.fromBufferAttribute(u,o),Ol.fromBufferAttribute(u,c),n.distanceSqToSegment(Ul,Ol,ad,Zm)>r)return;ad.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ad);if(!(p<e.near||p>e.far))return{distance:p,point:Zm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Km=new le,Qm=new le;class V1 extends H1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Km.fromBufferAttribute(n,o),Qm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Km.distanceTo(Qm);e.setAttribute("lineDistance",new Zt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ji extends ti{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:p};const g=this;o=Math.floor(o),c=Math.floor(c);const v=[],S=[],_=[],M=[];let E=0;const T=[],y=r/2;let x=0;U(),u===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new Zt(S,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(M,2));function U(){const R=new le,Z=new le;let k=0;const z=(n-e)/r;for(let H=0;H<=c;H++){const N=[],C=H/c,F=C*(n-e)+e;for(let te=0;te<=o;te++){const X=te/o,ne=X*p+f,ie=Math.sin(ne),se=Math.cos(ne);Z.x=F*ie,Z.y=-C*r+y,Z.z=F*se,S.push(Z.x,Z.y,Z.z),R.set(ie,z,se).normalize(),_.push(R.x,R.y,R.z),M.push(X,1-C),N.push(E++)}T.push(N)}for(let H=0;H<o;H++)for(let N=0;N<c;N++){const C=T[N][H],F=T[N+1][H],te=T[N+1][H+1],X=T[N][H+1];(e>0||N!==0)&&(v.push(C,F,X),k+=3),(n>0||N!==c-1)&&(v.push(F,te,X),k+=3)}g.addGroup(x,k,0),x+=k}function D(R){const Z=E,k=new Tt,z=new le;let H=0;const N=R===!0?e:n,C=R===!0?1:-1;for(let te=1;te<=o;te++)S.push(0,y*C,0),_.push(0,C,0),M.push(.5,.5),E++;const F=E;for(let te=0;te<=o;te++){const ne=te/o*p+f,ie=Math.cos(ne),se=Math.sin(ne);z.x=N*se,z.y=y*C,z.z=N*ie,S.push(z.x,z.y,z.z),_.push(0,C,0),k.x=ie*.5+.5,k.y=se*.5*C+.5,M.push(k.x,k.y),E++}for(let te=0;te<o;te++){const X=Z+te,ne=F+te;R===!0?v.push(ne,ne+1,X):v.push(ne+1,ne,X),H+=3}g.addGroup(x,H,R===!0?1:2),x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gf extends ti{constructor(e=.5,n=1,r=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],p=[],g=[],v=[];let S=e;const _=(n-e)/o,M=new le,E=new Tt;for(let T=0;T<=o;T++){for(let y=0;y<=r;y++){const x=c+y/r*u;M.x=S*Math.cos(x),M.y=S*Math.sin(x),p.push(M.x,M.y,M.z),g.push(0,0,1),E.x=(M.x/n+1)/2,E.y=(M.y/n+1)/2,v.push(E.x,E.y)}S+=_}for(let T=0;T<o;T++){const y=T*(r+1);for(let x=0;x<r;x++){const U=x+y,D=U,R=U+r+1,Z=U+r+2,k=U+1;f.push(D,R,k),f.push(R,Z,k)}}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xf extends ti{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let g=0;const v=[],S=new le,_=new le,M=[],E=[],T=[],y=[];for(let x=0;x<=r;x++){const U=[],D=x/r;let R=0;x===0&&u===0?R=.5/n:x===r&&p===Math.PI&&(R=-.5/n);for(let Z=0;Z<=n;Z++){const k=Z/n;S.x=-e*Math.cos(o+k*c)*Math.sin(u+D*f),S.y=e*Math.cos(u+D*f),S.z=e*Math.sin(o+k*c)*Math.sin(u+D*f),E.push(S.x,S.y,S.z),_.copy(S).normalize(),T.push(_.x,_.y,_.z),y.push(k+R,1-D),U.push(g++)}v.push(U)}for(let x=0;x<r;x++)for(let U=0;U<n;U++){const D=v[x][U+1],R=v[x][U],Z=v[x+1][U],k=v[x+1][U+1];(x!==0||u>0)&&M.push(D,R,k),(x!==r-1||p<Math.PI)&&M.push(R,Z,k)}this.setIndex(M),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(T,3)),this.setAttribute("uv",new Zt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hs extends Js{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ng,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kg extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const od=new Vt,Jm=new le,eg=new le;class G1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pf,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Jm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jm),eg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(eg),n.updateMatrixWorld(),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j1 extends G1{constructor(){super(new Vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends Kg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new j1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qg extends Kg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const tg=new Vt;class W1{constructor(e,n,r=0,o=1/0){this.ray=new df(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tg),this}intersectObject(e,n=!0,r=[]){return Qd(e,this,r,n),r.sort(ng),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Qd(e[o],this,r,n);return r.sort(ng),r}}function ng(s,e){return s.distance-e.distance}function Qd(s,e,n,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let u=0,f=c.length;u<f;u++)Qd(c[u],e,n,!0)}}class Jg extends V1{constructor(e=10,n=10,r=4473924,o=8947848){r=new xt(r),o=new xt(o);const c=n/2,u=e/n,f=e/2,p=[],g=[];for(let _=0,M=0,E=-f;_<=n;_++,E+=u){p.push(-f,0,E,f,0,E),p.push(E,0,-f,E,0,f);const T=_===c?r:o;T.toArray(g,M),M+=3,T.toArray(g,M),M+=3,T.toArray(g,M),M+=3,T.toArray(g,M),M+=3}const v=new ti;v.setAttribute("position",new Zt(p,3)),v.setAttribute("color",new Zt(g,3));const S=new Zg({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);function X1({infrastructure:s,selectedPartMaterials:e,activePartId:n,onSelectPart:r,materialsList:o,isCompact:c=!1}){const u=Ke.useRef(null),f=Ke.useRef(null),p=Ke.useRef(null),g=Ke.useRef(null),v=Ke.useRef(null),S=Ke.useRef({}),[_,M]=Ke.useState(!1),[E,T]=Ke.useState(!1),[y,x]=Ke.useState(!0),[U,D]=Ke.useState(45),[R,Z]=Ke.useState(!1),[k,z]=Ke.useState(null),[H,N]=Ke.useState(!1),C=[...o,...ef];Ke.useEffect(()=>{if(u.current)try{const X=u.current.clientWidth||360,ne=u.current.clientHeight||420,ie=new $g;ie.background=new xt(657930),ie.fog=new jl(657930,.022),f.current=ie;const se=new Gn(38,X/ne,.1,1e3);se.position.set(18,15,22),se.lookAt(0,2.5,0),g.current=se;const re=new qg({antialias:!0,alpha:!0});for(re.setSize(X,ne),re.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),re.shadowMap.enabled=!0,re.shadowMap.type=rf,p.current=re;u.current.firstChild;)u.current.removeChild(u.current.firstChild);u.current.appendChild(re.domElement);const V=new Jg(40,40,3355443,1579032);V.position.y=-.01,ie.add(V);const he=new gf(11.9,12,48),L=new hf({color:2763306,side:Mi}),b=new pt(he,L);b.rotation.x=Math.PI/2,b.position.y=.01,ie.add(b);const G=new Qg(16777215,.85);ie.add(G);const pe=new zl(16775146,2);pe.position.set(16,26,16),pe.castShadow=!0,ie.add(pe);const W=new zl(4487099,.6);W.position.set(-15,12,-15),ie.add(W);const $=new tn;ie.add($),v.current=$,te(s,e,_,$,S);const ce=new W1,ae=new Tt;let ge=!1,_e=0,Ne={x:0,y:0};const He=Ae=>{ge=!0,_e=0;const it=Ae.clientX||Ae.touches&&Ae.touches[0].clientX,Ie=Ae.clientY||Ae.touches&&Ae.touches[0].clientY;Ne={x:it,y:Ie}},ze=Ae=>{const it=Ae.clientX||Ae.touches&&Ae.touches[0].clientX,Ie=Ae.clientY||Ae.touches&&Ae.touches[0].clientY;if(ge){const P=it-Ne.x,A=Ie-Ne.y;_e+=Math.abs(P)+Math.abs(A),$&&($.rotation.y+=P*.008)}if(re&&re.domElement){const P=re.domElement.getBoundingClientRect();ae.x=(it-P.left)/P.width*2-1,ae.y=-((Ie-P.top)/P.height)*2+1,ce.setFromCamera(ae,se);const A=ce.intersectObjects($.children,!0);if(A.length>0){let J=A[0].object;for(;J.parent&&!J.userData?.partId&&J.parent!==$;)J=J.parent;J.userData?.partName&&z(J.userData.partName)}else z(null)}Ne={x:it,y:Ie}},tt=Ae=>{if(_e<8&&re&&re.domElement){const it=Ae.clientX||Ae.changedTouches&&Ae.changedTouches[0]?.clientX,Ie=Ae.clientY||Ae.changedTouches&&Ae.changedTouches[0]?.clientY;if(it!==void 0&&Ie!==void 0){const P=re.domElement.getBoundingClientRect();ae.x=(it-P.left)/P.width*2-1,ae.y=-((Ie-P.top)/P.height)*2+1,ce.setFromCamera(ae,se);const A=ce.intersectObjects($.children,!0);if(A.length>0){let J=A[0].object;for(;J.parent&&!J.userData?.partId&&J.parent!==$;)J=J.parent;J.userData?.partId&&(Va(),r(J.userData.partId))}}}ge=!1},B=re.domElement;B.addEventListener("mousedown",He),B.addEventListener("mousemove",ze),window.addEventListener("mouseup",tt),B.addEventListener("touchstart",He,{passive:!0}),B.addEventListener("touchmove",ze,{passive:!0}),window.addEventListener("touchend",tt);let _t;const Je=()=>{_t=requestAnimationFrame(Je),R&&!ge&&$&&($.rotation.y+=.003),re.render(ie,se)};Je();const et=()=>{if(!u.current||!re||!se)return;const Ae=u.current.clientWidth,it=u.current.clientHeight||420;se.aspect=Ae/it,se.updateProjectionMatrix(),re.setSize(Ae,it)};return window.addEventListener("resize",et),()=>{cancelAnimationFrame(_t),window.removeEventListener("resize",et),window.removeEventListener("mouseup",tt),window.removeEventListener("touchend",tt),B.removeEventListener("mousedown",He),B.removeEventListener("mousemove",ze),B.removeEventListener("touchstart",He),B.removeEventListener("touchmove",ze),re.dispose()}}catch(X){console.error("WebGL initialization error:",X),N(!0)}},[s.id]),Ke.useEffect(()=>{v.current&&te(s,e,_,v.current,S)},[e,_,s]),Ke.useEffect(()=>{const X=S.current;X&&Object.keys(X).forEach(ne=>{const ie=X[ne];if(!ie)return;const se=ne===n;if(E){const re=ie.userData?.explodeOffset||{x:0,y:0,z:0};ie.position.set(re.x*2.2,re.y*2.4,re.z*2.2),ie.scale.set(1,1,1),F(ie)}else if(y&&n)if(se){const re=ie.userData?.pullDirection||{x:0,y:1.2,z:1.5};ie.position.set(re.x*1.8,re.y*1.6,re.z*1.8),ie.scale.set(1.08,1.08,1.08),ie.traverse(V=>{V.isMesh&&V.material&&(V.material.transparent=!1,V.material.opacity=1,V.material.emissive=new xt(3359778),V.material.emissiveIntensity=.5)})}else ie.position.set(0,0,0),ie.scale.set(.98,.98,.98),ie.traverse(re=>{re.isMesh&&re.material&&(re.material.transparent=!0,re.material.opacity=.18,re.material.emissive=new xt(0),re.material.emissiveIntensity=0)});else ie.position.set(0,0,0),ie.scale.set(1,1,1),F(ie)})},[n,E,y]);function F(X){X.traverse(ne=>{if(ne.isMesh&&ne.material){const ie=ne.userData?.isGlass;ne.material.transparent=!!ie,ne.material.opacity=ie?.45:1,ne.material.emissive=new xt(0),ne.material.emissiveIntensity=0}})}function te(X,ne,ie,se,re){for(;se.children.length>0;){const L=se.children[0];se.remove(L),L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material.forEach(b=>b.dispose()):L.material.dispose())}re.current={};const V=(L,b=8947848)=>{const G=ne[L],pe=C.find(ce=>ce.id===G),W=G==="triple_glazed_glass"||G==="smart_solar_glass",$=pe?parseInt(pe.colorHex.replace("#","0x")):b;if(W){const ce=new Hs({color:$,transparent:!0,opacity:G==="smart_solar_glass"?.65:.4,roughness:.1,metalness:.2,wireframe:ie});return ce.userData={isGlass:!0},ce}return new Hs({color:$,roughness:.85,metalness:.1,wireframe:ie,flatShading:!0})},he=(L,b,G,pe={x:0,y:1,z:1},W={x:0,y:0,z:0})=>{G.userData={partId:L,partName:b,pullDirection:pe,explodeOffset:W},G.traverse($=>{$.userData={...$.userData,partId:L,partName:b}}),se.add(G),re.current[L]=G};if(X.id==="yzy_mono_dome"){const L=new tn,b=V("dome_base",7829367),G=new pt(new ji(6.4,6.7,.6,32),b);G.position.y=.3,G.receiveShadow=!0,L.add(G),he("dome_base","SUBGRADE PLINTH",L,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const pe=new tn,W=V("dome_shell",14540224),$=new pt(new xf(5.8,32,24,0,Math.PI*2,0,Math.PI/2),W);$.position.y=.6,$.castShadow=!0,$.receiveShadow=!0,pe.add($),he("dome_shell","DOME ENVELOPE SHELL",pe,{x:0,y:1.8,z:0},{x:0,y:2,z:0});const ce=new tn,ae=V("dome_window_oculus",6858170),ge=new pt(new ji(1.1,1.2,.35,24),ae);ge.position.y=6.35,ce.add(ge),he("dome_window_oculus","SKYLIGHT OCULUS",ce,{x:0,y:3,z:0},{x:0,y:5.5,z:0});const _e=new tn,Ne=V("dome_portal_tunnel",10516565),He=new pt(new Dt(2.4,3.2,3.8),Ne);He.position.set(0,2,5.2),He.castShadow=!0,_e.add(He),he("dome_portal_tunnel","ENTRANCE TUNNEL",_e,{x:0,y:.5,z:3.5},{x:0,y:0,z:4.8});const ze=new tn,tt=new Hs({color:1713022,metalness:.8,roughness:.2}),B=new pt(new Dt(2.6,.1,1.8),tt);B.position.set(-4.8,.65,-3.8),B.rotation.x=.3,ze.add(B),he("dome_utilities","OFF-GRID UTILITY POD",ze,{x:-2.5,y:0,z:-2.5},{x:-4.5,y:0,z:-4.5})}else if(X.id==="rammed_earth_villa"){const L=new tn,b=V("villa_foundation",8026744),G=new pt(new Dt(10.5,.5,7.5),b);G.position.set(0,.25,0),L.add(G),he("villa_foundation","FOUNDATION SLAB",L,{x:0,y:-1.2,z:0},{x:0,y:-2.5,z:0});const pe=new tn,W=V("villa_south_wall",10516565),$=new pt(new Dt(9,3.8,.8),W);$.position.set(0,2.4,3),$.castShadow=!0,pe.add($),he("villa_south_wall","SOUTH WALL ENVELOPE",pe,{x:0,y:.5,z:3.2},{x:0,y:0,z:4.5});const ce=new tn,ae=V("villa_north_wall",10516565),ge=new pt(new Dt(9,3.8,.8),ae);ge.position.set(0,2.4,-3),ge.castShadow=!0,ce.add(ge),he("villa_north_wall","NORTH SHIELD WALL",ce,{x:0,y:.5,z:-3.2},{x:0,y:0,z:-4.5});const _e=new tn,Ne=V("villa_side_walls",10516565),He=new pt(new Dt(.8,3.8,5.2),Ne);He.position.set(4.1,2.4,0);const ze=new pt(new Dt(.8,3.8,5.2),Ne);ze.position.set(-4.1,2.4,0),_e.add(He),_e.add(ze),he("villa_side_walls","EAST & WEST SIDE WALLS",_e,{x:3,y:.5,z:0},{x:4.5,y:0,z:0});const tt=new tn,B=V("villa_roof_cantilever",13213798),_t=new pt(new Dt(11.8,.45,9),B);_t.position.set(0,4.5,0),_t.castShadow=!0,tt.add(_t),he("villa_roof_cantilever","MASS TIMBER ROOF",tt,{x:0,y:2.8,z:0},{x:0,y:4.8,z:0});const Je=new tn,et=V("villa_window_portal",6858170),Ae=new pt(new Dt(4,3.2,.2),et);Ae.position.set(0,2.1,3.45),Je.add(Ae),he("villa_window_portal","PATIO WINDOW PORTAL",Je,{x:0,y:.8,z:3.5},{x:0,y:0,z:5.5});const it=new tn,Ie=new Hs({color:1713022,metalness:.8,roughness:.2}),P=new pt(new Dt(4.2,.1,3.2),Ie);P.position.set(0,4.9,0),P.rotation.x=-.15,it.add(P),he("villa_utilities","SOLAR PERGOLA SUITE",it,{x:0,y:3.2,z:0},{x:0,y:6,z:0})}else(ei[X.id]||ei.yzy_mono_dome).forEach((b,G)=>{const pe=new tn,W=V(b.id,8947848),$=1.2+G*1.6,ce=new pt(new Dt(7-G*.6,1.4,7-G*.6),W);ce.position.y=$,ce.castShadow=!0,pe.add(ce),he(b.id,b.name,pe,{x:0,y:1.2,z:1.5},{x:0,y:G*1.8,z:0})})}return Ke.useEffect(()=>{if(!u.current||!p.current||!g.current)return;const X=u.current.clientWidth,ne=u.current.clientHeight;g.current.aspect=X/ne,g.current.updateProjectionMatrix(),p.current.setSize(X,ne)},[c]),H?h.jsxs("div",{className:"w-full h-72 bg-yzy-obsidian border border-yzy-slate flex flex-col items-center justify-center p-6 text-center font-mono",children:[h.jsx(dg,{className:"w-8 h-8 text-yzy-warning mb-2"}),h.jsx("span",{className:"font-bold text-white text-sm uppercase",children:"2D ARCHITECTURAL MODE ACTIVE"}),h.jsx("span",{className:"text-xs text-yzy-ash max-w-sm mt-1",children:"WebGL acceleration disabled. You can continue customizing components and materials in the matrix below."})]}):h.jsxs("div",{className:`relative w-full transition-all duration-300 ${c?"h-52 sm:h-60 md:h-72 shadow-2xl ring-1 ring-yzy-bone/40":"h-80 sm:h-96 md:h-[480px]"} bg-yzy-obsidian border border-yzy-slate/70 overflow-hidden flex flex-col select-none`,children:[h.jsx("div",{ref:u,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-1.5 border border-yzy-bone/40 shadow-lg",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"font-mono text-[10px] sm:text-xs tracking-widest text-white uppercase font-bold",children:n?`CENTER STAGE: ${n.toUpperCase().replace(/_/g," ")}`:"TAP ANY PART IN 3D TO PULL & INSPECT"})]}),k&&h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash bg-yzy-black/80 px-2 py-0.5 border border-yzy-slate/60 w-fit",children:["HOVER: ",k]})]}),h.jsxs("div",{className:"absolute top-3 right-3 flex items-center gap-2 bg-yzy-black/85 backdrop-blur-md px-2.5 py-1.5 border border-yzy-slate text-[11px] font-mono",children:[h.jsx(T0,{className:"w-3.5 h-3.5 text-yzy-warning"}),h.jsx("span",{className:"hidden sm:inline text-yzy-ash text-[10px]",children:"SUN:"}),h.jsx("input",{type:"range",min:"0",max:"360",value:U,onChange:X=>D(Number(X.target.value)),className:"w-16 sm:w-20 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"}),h.jsxs("span",{className:"text-yzy-chalk w-6 text-right text-[10px]",children:[U,"°"]})]}),h.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-2 border border-yzy-slate shadow-2xl z-10",children:[h.jsxs("button",{onClick:()=>{Ot(),x(!y)},className:`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${y?"bg-yzy-bone text-yzy-black font-bold":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/60"}`,title:"Pull and isolate the selected part in the center of the screen",children:[h.jsx(l0,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:y?"CENTER STAGE":"FULL VIEW"})]}),h.jsxs("button",{onClick:()=>{Ot(),T(!E)},className:`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${E?"bg-yzy-neon text-yzy-black font-bold":"text-yzy-chalk hover:text-white hover:bg-yzy-slate/60"}`,children:[h.jsx(tf,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"EXPLODE"})]}),h.jsx("button",{onClick:()=>{Ot(),M(!_)},className:`px-2 py-1.5 font-mono text-[10px] transition-all ${_?"text-yzy-neon font-bold bg-yzy-slate/60":"text-yzy-ash hover:text-white"}`,children:"CAD"}),h.jsx("button",{onClick:()=>{Ot(),Z(!R)},className:`px-2 py-1.5 font-mono text-[10px] transition-all ${R?"text-white":"text-yzy-ash hover:text-white"}`,children:h.jsx(pg,{className:`w-3.5 h-3.5 ${R?"animate-spin":""}`,style:{animationDuration:"10s"}})})]})]})}function Y1({infrastructures:s,selectedInfra:e,onSelectInfra:n}){return h.jsxs("div",{className:"flex flex-col gap-4",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-1 border-b border-yzy-slate pb-2",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"01 // ARCHETYPE SELECTION"}),h.jsx("h2",{className:"font-display text-lg sm:text-xl font-bold tracking-tight text-yzy-bone",children:"SELECT INFRASTRUCTURE MATRIX"})]}),h.jsxs("span",{className:"font-mono text-[10px] text-yzy-ash",children:[s.length," PRODUCTION SCHEMATICS AVAILABLE"]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:s.map(r=>{const o=e.id===r.id;return h.jsxs("div",{onClick:()=>{Va(),n(r)},className:`group cursor-pointer p-4 border transition-all duration-200 flex flex-col justify-between relative ${o?"bg-yzy-obsidian border-yzy-bone shadow-lg ring-1 ring-yzy-bone/40":"bg-yzy-obsidian/40 border-yzy-slate/70 hover:border-yzy-ash hover:bg-yzy-obsidian/80"}`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest text-yzy-ash uppercase",children:r.code}),o?h.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5 tracking-wider",children:[h.jsx(Ll,{className:"w-3 h-3"})," ACTIVE"]}):h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash border border-yzy-slate px-1.5 py-0.5",children:r.difficulty})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone tracking-tight mb-0.5 group-hover:text-white transition-colors",children:r.name}),h.jsx("p",{className:"font-mono text-[10px] text-yzy-ash tracking-wide uppercase mb-2",children:r.subtitle}),h.jsx("p",{className:"text-xs text-yzy-chalk/80 line-clamp-2 leading-relaxed mb-3",children:r.tagline})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-1.5 bg-yzy-black/60 p-2 border border-yzy-slate/60 text-[10px] font-mono mb-3",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-yzy-ash text-[9px]",children:"AREA"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.sqft," SQFT"]})]}),h.jsxs("div",{className:"flex flex-col border-l border-yzy-slate/40 pl-2",children:[h.jsx("span",{className:"text-yzy-ash text-[9px]",children:"TIMELINE"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.buildTimeDays," DAYS"]})]}),h.jsxs("div",{className:"flex flex-col border-l border-yzy-slate/40 pl-2",children:[h.jsx("span",{className:"text-yzy-ash text-[9px]",children:"OCCUPANCY"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[r.occupancy.split(" ")[0]," PPL"]})]})]}),h.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-yzy-slate/40 text-[10px] font-mono",children:[h.jsxs("div",{className:"flex items-center gap-1 text-yzy-chalk",children:[h.jsx(O0,{className:"w-3 h-3 text-yzy-ash"}),h.jsxs("span",{children:[r.windResistance.split(" ")[0]," MPH"]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"EST. BUDGET"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:["$",r.estimatedCostMin.toLocaleString()," - $",r.estimatedCostMax.toLocaleString()]})]})]})]},r.id)})})]})}function q1({infrastructure:s,selectedPartMaterials:e,onSelectPartMaterial:n,activePartId:r,setActivePartId:o,materialsList:c}){const u=ei[s.id]||ei.yzy_mono_dome,f=u.find(_=>_.id===r)||u[0],p=[...c,...ef],g=e[f.id]||f.defaultMaterial,v=p.find(_=>_.id===g)||c[0],S=p.filter(_=>f.allowedMaterials.includes(_.id));return h.jsxs("div",{className:"flex flex-col gap-5 bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 shadow-2xl",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"02 // INFRASTRUCTURE MATRIX (PICK & PULL CUSTOMIZER)"}),h.jsx("h3",{className:"font-display text-lg sm:text-xl font-bold tracking-tight text-white",children:"CUSTOMIZE INDIVIDUAL ARCHITECTURAL COMPONENTS"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-neon font-bold uppercase bg-yzy-neon/10 px-2.5 py-1 border border-yzy-neon/30",children:"TAP ANY PART IN 3D OR SELECT BELOW"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-yzy-slate/60",children:u.map(_=>{const M=_.id===f.id,E=e[_.id]||_.defaultMaterial,T=p.find(y=>y.id===E);return h.jsxs("button",{onClick:()=>{Va(),o(_.id)},className:`shrink-0 p-2.5 text-left border transition-all flex flex-col justify-between min-w-[140px] sm:min-w-[160px] ${M?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-md":"bg-yzy-black text-yzy-chalk border-yzy-slate/80 hover:border-yzy-ash hover:bg-yzy-charcoal"}`,children:[h.jsx("span",{className:`font-mono text-[9px] font-bold uppercase tracking-wider block mb-0.5 ${M?"text-yzy-black/70":"text-yzy-ash"}`,children:_.category}),h.jsx("span",{className:`font-display text-xs font-bold truncate block ${M?"text-yzy-black":"text-yzy-bone"}`,children:_.name.split("(")[0]}),h.jsx("span",{className:`font-mono text-[10px] truncate block mt-1 font-semibold ${M?"text-yzy-black/90":"text-yzy-neon"}`,children:T?.shortName||"Custom"})]},_.id)})}),h.jsxs("div",{className:"bg-yzy-black p-3.5 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon"}),h.jsx("span",{className:"font-bold text-white uppercase text-sm",children:f.name})]}),h.jsx("span",{className:"text-yzy-ash text-[11px] mt-0.5 block",children:f.description})]}),h.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"SURFACE AREA"}),h.jsxs("span",{className:"font-bold text-yzy-bone",children:[f.surfaceAreaSqft," SQFT"]})]}),h.jsxs("div",{className:"text-right border-l border-yzy-slate pl-3",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"CURRENT SPEC"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:v.shortName})]})]})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx("span",{className:"font-mono text-xs text-yzy-ash uppercase font-bold tracking-wider",children:"SELECT MATERIAL SPECIFICATION FOR THIS PART:"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:S.map(_=>{const M=(e[f.id]||f.defaultMaterial)===_.id,E=Math.round(f.surfaceAreaSqft*_.costPerSqFt);return h.jsxs("div",{onClick:()=>{Va(),n(f.id,_.id)},className:`cursor-pointer p-4 border transition-all flex flex-col justify-between group ${M?"bg-yzy-black border-yzy-bone ring-2 ring-yzy-bone/60 shadow-xl":"bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-black/90"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold px-1.5 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:_.category}),M?h.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5",children:[h.jsx(Ll,{className:"w-3 h-3"})," ACTIVE SPEC"]}):h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash",children:_.badge})]}),h.jsx("h4",{className:"font-display text-sm font-bold text-white mb-1 group-hover:text-yzy-bone",children:_.name}),h.jsx("p",{className:"text-xs text-yzy-chalk/80 leading-relaxed mb-3",children:_.tagline})]}),h.jsxs("div",{className:"pt-2 border-t border-yzy-slate/60 flex items-center justify-between font-mono text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block",children:"PART COST"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:["$",E.toLocaleString()]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block",children:"UNIT RATE"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:_.unitCost})]})]})]},_.id)})})]}),h.jsxs("div",{className:"bg-yzy-black border border-yzy-slate p-4 sm:p-5 flex flex-col gap-4 font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(ud,{className:"w-4 h-4 text-yzy-neon"}),h.jsxs("span",{className:"font-display text-sm font-bold text-white uppercase tracking-tight",children:["ARCHITECTURAL IMPACT ANALYSIS // ",v.name]})]}),h.jsx("span",{className:"text-[10px] text-yzy-ash uppercase hidden sm:inline",children:"ENGINEERING FEEDBACK"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"p-3 bg-yzy-obsidian/90 border border-yzy-neon/30 flex flex-col gap-2",children:[h.jsxs("span",{className:"text-xs font-bold text-yzy-neon flex items-center gap-1.5 uppercase",children:[h.jsx(Ll,{className:"w-3.5 h-3.5"})," ARCHITECTURAL PROS & ADVANTAGES"]}),h.jsx("ul",{className:"flex flex-col gap-1.5 text-xs text-yzy-chalk/90",children:v.pros?.map((_,M)=>h.jsxs("li",{className:"flex items-start gap-1.5",children:[h.jsx("span",{className:"text-yzy-neon font-bold",children:"✓"}),h.jsx("span",{children:_})]},M))})]}),h.jsxs("div",{className:"p-3 bg-yzy-obsidian/90 border border-yzy-warning/30 flex flex-col gap-2",children:[h.jsxs("span",{className:"text-xs font-bold text-yzy-warning flex items-center gap-1.5 uppercase",children:[h.jsx(N0,{className:"w-3.5 h-3.5"})," TRADEOFFS & CONSIDERATIONS"]}),h.jsx("ul",{className:"flex flex-col gap-1.5 text-xs text-yzy-chalk/90",children:v.cons?.map((_,M)=>h.jsxs("li",{className:"flex items-start gap-1.5",children:[h.jsx("span",{className:"text-yzy-warning font-bold",children:"!"}),h.jsx("span",{children:_})]},M))})]})]}),v.supplier&&h.jsxs("div",{className:"bg-yzy-charcoal/80 p-3 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block mb-0.5",children:"DIRECT PROCUREMENT SOURCE FOR THIS PART:"}),h.jsx("span",{className:"font-bold text-white",children:v.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[11px] block",children:v.supplier.contact})]}),h.jsxs("div",{className:"flex items-center gap-4 text-right shrink-0 font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"EXACT PRICE"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:v.supplier.exactPrice.split("(")[0]})]}),h.jsxs("div",{className:"border-l border-yzy-slate pl-3",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"LEAD TIME"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:v.supplier.leadTime})]})]})]})]})]})}function $1({materialsList:s}){const[e,n]=Ke.useState(""),[r,o]=Ke.useState("ALL"),[c,u]=Ke.useState(null),f=["ALL","EARTH & SOIL","BIO-MASS","CIRCULAR MINERAL","RENEWABLE WOOD","FOAMED MINERAL","CIRCULAR POLYMER"],p=s.filter(g=>{const v=g.name.toLowerCase().includes(e.toLowerCase())||g.description.toLowerCase().includes(e.toLowerCase())||g.sourcingMethod.toLowerCase().includes(e.toLowerCase()),S=r==="ALL"||g.category===r;return v&&S});return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"02 // MATERIAL ENCYCLOPEDIA & REPOSITORY"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"SUSTAINABLE & BIO-CIRCULAR MATERIALS"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Transparent scientific, economic, and regional sourcing telemetry for zero-carbon architecture."})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[h.jsxs("div",{className:"relative w-full sm:w-80",children:[h.jsx(mg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),h.jsx("input",{type:"text",placeholder:"Search materials, soil types, binders...",value:e,onChange:g=>n(g.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:f.map(g=>h.jsx("button",{onClick:()=>{Ot(),o(g)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${r===g?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:g},g))})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:p.map(g=>h.jsxs("div",{className:"p-5 bg-yzy-obsidian/60 border border-yzy-slate hover:border-yzy-ash transition-all flex flex-col justify-between group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:g.category}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash",children:g.badge})]}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1 group-hover:text-white transition-colors",children:g.name}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:g.description})]}),h.jsxs("div",{className:"flex flex-col gap-2 pt-3 border-t border-yzy-slate/60 text-[11px] font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"ESTIMATED COST:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.unitCost})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"CARBON OFFSET:"}),h.jsx("span",{className:`font-bold ${g.carbonImpact<=0?"text-yzy-neon":"text-yzy-warning"}`,children:g.carbonImpact<=0?`${g.carbonImpact} kg CO2/m²`:`+${g.carbonImpact} kg CO2/m²`})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"THERMAL R-VALUE:"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:["R-",g.thermalRValue]})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"COMPRESSIVE STRENGTH:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.compressiveStrength})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"FIRE RESISTANCE:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.fireRating})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-yzy-ash",children:"EST. LIFESPAN:"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:g.lifespan})]}),h.jsxs("div",{className:"bg-yzy-black/80 p-2.5 border border-yzy-slate/60 mt-2",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold block mb-1",children:"LOCAL HARVESTING PROTOCOL:"}),h.jsx("p",{className:"text-[10px] text-yzy-chalk leading-normal",children:g.sourcingMethod})]}),g.supplier&&h.jsxs("div",{className:"bg-yzy-charcoal/80 p-2.5 border border-yzy-slate mt-1 text-[10px] font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center mb-1",children:[h.jsx("span",{className:"text-yzy-neon font-bold text-[9px] uppercase tracking-wider",children:"PRIMARY SUPPLIER ORDER SOURCE:"}),h.jsx("span",{className:"text-yzy-ash text-[9px]",children:g.supplier.location.split("/")[0]})]}),h.jsx("span",{className:"font-bold text-yzy-bone text-xs block",children:g.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[10px] block",children:g.supplier.contact}),h.jsxs("div",{className:"flex justify-between items-center text-[9px] pt-1.5 border-t border-yzy-slate/40 mt-1",children:[h.jsxs("span",{className:"text-yzy-chalk font-bold",children:["PRICE: ",g.supplier.exactPrice.split("(")[0]]}),h.jsxs("span",{className:"text-yzy-ash",children:["LEAD: ",g.supplier.leadTime]})]})]})]})]},g.id))})]})}const ig=[{id:"mycelium_lounge_chair",name:"YZY BIO-FOAM MYCELIUM LOUNGE",category:"LIVING & SEATING",tagline:"100% bio-grown sculptural ergonomic chair molded from fungal roots and hemp substrate.",description:"A monolithic single-piece lounge chair grown in 7 days inside a 3D-printed composite mold. Ultra-lightweight (14 lbs) yet structural, with a velvety organic tactile finish sealed with natural beeswax and carnauba.",material:"Grown Ganoderma Mycelium + Industrial Hemp Hurds",carbonImpact:-32,dimensions:'34" W x 32" D x 29" H (Seat Height 14")',weight:"14 lbs (6.3 kg)",aestheticStyle:"Monolithic Organic Brutalism / Yeezy Aesthetic",diyFeasibility:"HIGH (Can be grown using DIY mold & spawn kit)",retailPrice:"$340.00 (Crafted) / $65.00 (DIY Inoculum Kit)",supplier:{name:"Ecovative Bio-Fabrication Lab / Grown.bio",location:"Green Island, NY / Heerewaarden, Netherlands",contact:"furniture@ecovative.com | +1 (518) 273-3753",website:"grown.bio / ecovative.com",exactPrice:"$340.00 fully cured chair or $65.00 for 50L bulk substrate + mold CAD",leadTime:"10 Days Direct Dispatch"},sustainabilityNote:"100% home-compostable at end of life. Zero petroleum, zero volatile organic compounds (VOCs)."},{id:"rammed_earth_desk",name:"MONOLITHIC TAMPED EARTH EXECUTIVE DESK",category:"OFFICE & STUDIO",tagline:"Massive striated earth slab desk with integrated wireless inductive charging stone.",description:"A striking, heavy brutalist workstation cast from compacted local subsoil, volcanic pumice, and hydraulic lime. Features natural horizontal sedimentation bands and a silky smooth diamond-burnished top surface.",material:"Compacted Subsoil + Volcanic Pozzolan + Steel Reinforcement Tie",carbonImpact:-18,dimensions:'72" L x 34" W x 30" H',weight:"480 lbs (Permanent Studio Centerpiece)",aestheticStyle:"Stark Architectural Earth Sculpture",diyFeasibility:"INTERMEDIATE (Slipform wooden casting)",retailPrice:"$850.00 (Precast Slab) / $120.00 (DIY On-Site Casting)",supplier:{name:"Studio Earthen Works / Local Slipform Custom Cast",location:"Austin, Texas / Regional Masonry Studios",contact:"craft@earthfurnish.org",website:"sirewall.com / custom-earth",exactPrice:"$850.00 precast and shipped in 2 sections or $120 for local materials + rebar",leadTime:"14 Days Curing Time"},sustainabilityNote:"Zero formaldehyde glues, zero toxic resins. Emits zero electromagnetic interference."},{id:"clt_studio_workbench",name:"MASS TIMBER (CLT) MODULAR WORKBENCH",category:"OFFICE & STUDIO",tagline:"Solid 5-ply spruce mass timber tabletop resting on brutalist notch-joint legs.",description:"Manufactured from FSC-certified cross-laminated mass timber cut with precision 5-axis CNC routering. Assembles with zero screws or metal hardware using ancient Japanese sliding dovetail joinery.",material:"FSC-Certified Cross-Laminated Timber (CLT)",carbonImpact:-85,dimensions:'84" L x 38" W x 30" H (Thickness 3.5")',weight:"165 lbs",aestheticStyle:"Industrial Raw Minimalist Timber",diyFeasibility:"NOVICE (Zero-hardware toolless slide assembly)",retailPrice:"$490.00",supplier:{name:"SmartLam Custom Timber Furnishings",location:"Columbia Falls, Montana",contact:"studio@smartlam.com | +1 (406) 892-8000",website:"smartlam.com",exactPrice:"$490.00 flatpack crate with interlocking joinery",leadTime:"5-7 Business Days"},sustainabilityNote:"Locks away 85kg of carbon for 100+ years. Finished with organic raw linseed oil."},{id:"hemp_acoustic_screen",name:"HEMP-FIBER ACOUSTIC PRIVACY PARTITION",category:"ACOUSTICS & ACCESSORIES",tagline:"Sound-absorbing freestanding room divider made from needle-punched industrial hemp felt.",description:"Designed for open-plan studios, loft apartments, and communal workspaces. Absorbs 85% of ambient vocal frequencies (NRC 0.85) to create intimate quiet zones while purifying air naturally.",material:"100% Cleaned Industrial Hemp Fiber + Raw Cast Iron Base",carbonImpact:-22,dimensions:'48" W x 18" D x 72" H',weight:"28 lbs",aestheticStyle:"Earthy Textured Minimalist Screen",diyFeasibility:"NOVICE FRIENDLY",retailPrice:"$210.00",supplier:{name:"Hempitecture Acoustic Lines",location:"Jerome, Idaho",contact:"acoustics@hempitecture.com | +1 (208) 720-4107",website:"hempitecture.com/hempwool",exactPrice:"$210.00 per panel with modular ganging brackets",leadTime:"3-5 Business Days"},sustainabilityNote:"Hypoallergenic, breathable, zero fiberglass itch, 100% compostable fiber."},{id:"recycled_poly_stool",name:"CIRCULAR OCEAN POLYMER MONOBLOC STOOL",category:"LIVING & SEATING",tagline:"Indestructible brutalist cylinder stool forged from 45 lbs of upcycled ocean plastic.",description:"Post-consumer plastic milk jugs, bottle caps, and marine debris washed, shredded, and compression-molded into a solid monolithic cylindrical plinth. Can be used as a stool, side table, or outdoor seating.",material:"100% Recycled HDPE / PP Ocean Plastic",carbonImpact:-42,dimensions:'16" Diameter x 18" Height',weight:"24 lbs",aestheticStyle:"Raw Monolithic Terrazzo Texture",diyFeasibility:"COMMUNITY RECYCLER (With Precious Plastic injector)",retailPrice:"$125.00 (Crafted) / $15.00 (Community DIY)",supplier:{name:"ByFusion / Precious Plastic Open Network",location:"Los Angeles, California / Global Micro-Factories",contact:"sales@byfusion.com | +1 (310) 906-0300",website:"byfusion.com / preciousplastic.com",exactPrice:"$125.00 direct or $15 raw shredded plastic flake with local mold",leadTime:"3-5 Days"},sustainabilityNote:"Diverts 2,200 plastic bottles from landfills and oceans per single stool. 100% recyclable indefinitely."},{id:"geopolymer_sink_counter",name:"GEOPOLYMER POZZOLAN MONOLITHIC SINK",category:"KITCHEN & SANITARY",tagline:"Stark industrial mineral basin and integrated countertop with zero Portland cement.",description:"Cast as a single seamless unit with an integrated ramp drain. Highly resistant to stains, thermal shock, and chemicals, with a tactile matte stone texture matching YEEZY interior architecture.",material:"Slag/Fly-Ash Alkali Geopolymer Concrete + Crushed Basalt",carbonImpact:-14,dimensions:'48" L x 22" W x 6" Basin Depth',weight:"140 lbs",aestheticStyle:"Brutalist Seamless Stone Basin",diyFeasibility:"INTERMEDIATE (Silicone/Melamine mold pour)",retailPrice:"$390.00",supplier:{name:"Wagners Earth Friendly Precast / Local Artisan Cast",location:"US & Global Masonry Cooperatives",contact:"custom@wagner.com.au",website:"wagner.com.au",exactPrice:"$390.00 precast or $75.00 in raw geopolymer dry mix + activator",leadTime:"7 Days"},sustainabilityNote:"Emits 85% less CO2 than traditional concrete sinks. Cures naturally with zero heat kiln firing."},{id:"bamboo_daybed",name:"ENGINEERED BAMBOO MINIMALIST DAYBED",category:"LIVING & SEATING",tagline:"Low-slung Japanese-modern platform bed crafted from high-tensile engineered bamboo.",description:"A serene, ground-hugging platform daybed resting 8 inches off the floor. Features woven natural reed tatami inserts and hidden perimeter LED channel for ambient warm indirect lighting.",material:"Cross-Strand Dendrocalamus Bamboo Culms + Coconut Coir Cushioning",carbonImpact:-70,dimensions:'82" L x 64" W x 10" H (Queen Standard Platform)',weight:"95 lbs",aestheticStyle:"Zen Brutalist Low-Slung Sanctuary",diyFeasibility:"NOVICE / COMMUNITY HAND CRAFT",retailPrice:"$580.00",supplier:{name:"BamCore Furniture Studio / Guadua Crafts",location:"Windsor, California",contact:"orders@bamcore.com | +1 (707) 837-8899",website:"bamcore.com",exactPrice:"$580.00 flatpack with natural organic latex/coir mattress",leadTime:"5-7 Days Freight"},sustainabilityNote:"Bamboo regrows to full maturity in only 3 years. Rapidly absorbs more carbon than hardwood forests."},{id:"aircrete_pedestal_table",name:"AIRCRETE SCULPTURAL ACCENT PEDESTAL",category:"LIVING & SEATING",tagline:"Ultra-lightweight aerated mineral plinth table with a smooth chalk-white pumice feel.",description:"Looks like a massive 200 lb solid carved limestone block, but weighs only 22 lbs due to micro-cellular aircrete bubbles. Easily rearranged and suitable for indoor and outdoor terrace spaces.",material:"Aerated Foamed Mineral Matrix + Silicate Polish",carbonImpact:-6,dimensions:'20" Diameter x 20" Height (Cylindrical or Hexagonal)',weight:"22 lbs (Ultra Lightweight)",aestheticStyle:"Raw Pumice / Chalk Sculptural Monolith",diyFeasibility:"NOVICE (Cast in standard bucket with foam wand)",retailPrice:"$140.00 (Crafted) / $18.00 (DIY Single Cast)",supplier:{name:"Domegaia Sculptural Division",location:"Haiku, Hawaii & Global Tooling Hubs",contact:"furniture@domegaia.com",website:"domegaia.com",exactPrice:"$140.00 or $18 DIY mix with 1 cup bio-foam concentrate + lime",leadTime:"3-5 Business Days"},sustainabilityNote:"100% inorganic mineral structure. Completely immune to water rot, termites, and wildfire."},{id:"lime_earth_wall_finish",name:"ROMAN HYDRAULIC LIME & OCHRE FINISH SYSTEM",category:"ACOUSTICS & ACCESSORIES",tagline:"Breathable mineral plaster colored with raw volcanic earth and iron oxide pigments.",description:"Replaces toxic petrochemical paint with ancient lime plaster that petrifies over time by absorbing ambient CO2. Naturally inhibits mold, absorbs cooking and body odors, and regulates humidity.",material:"St. Astier Natural Hydraulic Lime (NHL 2.0) + French Raw Ochre Pigments",carbonImpact:-25,dimensions:"Covers 250 sq ft per 55 lb bag",weight:"55 lbs (Dry Powder Bag)",aestheticStyle:"Soft Velvety Venetian Earth Texture",diyFeasibility:"NOVICE / ARTISAN TROWEL",retailPrice:"$48.00 per 55 lb bag ($0.19 / sq ft)",supplier:{name:"Limestrong Plasters / St. Astier North America",location:"Portland, Oregon / Global Masonry Distribution",contact:"orders@limestrong.com | +1 (541) 505-8888",website:"limestrongart.com / stastier.co.uk",exactPrice:"$48.00 per 55 lb bag + $12 earth pigment pack",leadTime:"2-3 Days Shipping"},sustainabilityNote:"Zero VOC, hypoallergenic, and petrifies into genuine stone over decades."}];function Z1({selectedPiece:s,activeFinish:e,onSelectFinish:n}){const r=Ke.useRef(null),o=Ke.useRef(null),c=Ke.useRef(null),u=Ke.useRef(null),f=Ke.useRef(null),[p,g]=Ke.useState(!0),[v,S]=Ke.useState(!1),[_,M]=Ke.useState(!1),E=[{id:"raw_earth",name:"RAW EARTH",colorHex:"#A07855",roughness:.9,metalness:.05},{id:"bone_chalk",name:"BONE CHALK",colorHex:"#EAEAE6",roughness:.85,metalness:.05},{id:"obsidian_black",name:"OBSIDIAN",colorHex:"#181818",roughness:.6,metalness:.2},{id:"amber_timber",name:"MASS TIMBER",colorHex:"#C9A066",roughness:.7,metalness:.1},{id:"hemp_moss",name:"HEMP MOSS",colorHex:"#8B9574",roughness:.95,metalness:.02},{id:"ocean_poly",name:"OCEAN POLY",colorHex:"#2E4057",roughness:.5,metalness:.3}],T=E.find(x=>x.id===e)||E[0];Ke.useEffect(()=>{if(r.current)try{const x=r.current.clientWidth||340,U=r.current.clientHeight||340,D=new $g;D.background=new xt(657930),D.fog=new jl(657930,.035),o.current=D;const R=new Gn(42,x/U,.1,100);R.position.set(4.5,3.5,5),R.lookAt(0,1,0),u.current=R;const Z=new qg({antialias:!0,alpha:!0});for(Z.setSize(x,U),Z.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Z.shadowMap.enabled=!0,Z.shadowMap.type=rf,c.current=Z;r.current.firstChild;)r.current.removeChild(r.current.firstChild);r.current.appendChild(Z.domElement);const k=new Jg(16,16,3355443,1447446);k.position.y=-.01,D.add(k);const z=new Qg(16777215,.85);D.add(z);const H=new zl(16775146,2.2);H.position.set(5,8,5),H.castShadow=!0,D.add(H);const N=new zl(4482730,.7);N.position.set(-5,4,-4),D.add(N);const C=new tn;D.add(C),f.current=C,y(s.id,T,v,C);let F=!1,te={x:0,y:0};const X=L=>{F=!0;const b=L.clientX||L.touches&&L.touches[0].clientX,G=L.clientY||L.touches&&L.touches[0].clientY;te={x:b,y:G}},ne=L=>{if(!F)return;const b=L.clientX||L.touches&&L.touches[0].clientX,G=L.clientY||L.touches&&L.touches[0].clientY,pe=b-te.x;C&&(C.rotation.y+=pe*.01),te={x:b,y:G}},ie=()=>{F=!1},se=Z.domElement;se.addEventListener("mousedown",X),se.addEventListener("mousemove",ne),window.addEventListener("mouseup",ie),se.addEventListener("touchstart",X,{passive:!0}),se.addEventListener("touchmove",ne,{passive:!0}),window.addEventListener("touchend",ie);let re;const V=()=>{re=requestAnimationFrame(V),p&&!F&&C&&(C.rotation.y+=.005),Z.render(D,R)};V();const he=()=>{if(!r.current||!Z||!R)return;const L=r.current.clientWidth,b=r.current.clientHeight||340;R.aspect=L/b,R.updateProjectionMatrix(),Z.setSize(L,b)};return window.addEventListener("resize",he),()=>{cancelAnimationFrame(re),window.removeEventListener("resize",he),window.removeEventListener("mouseup",ie),window.removeEventListener("touchend",ie),se.removeEventListener("mousedown",X),se.removeEventListener("mousemove",ne),se.removeEventListener("touchstart",X),se.removeEventListener("touchmove",ne),Z.dispose()}}catch(x){console.error("Furniture WebGL error:",x),M(!0)}},[s.id]),Ke.useEffect(()=>{f.current&&y(s.id,T,v,f.current)},[e,v,s]);function y(x,U,D,R){for(;R.children.length>0;){const H=R.children[0];R.remove(H),H.geometry&&H.geometry.dispose(),H.material&&(Array.isArray(H.material)?H.material.forEach(N=>N.dispose()):H.material.dispose())}const Z=parseInt(U.colorHex.replace("#","0x")),k=new Hs({color:Z,roughness:U.roughness,metalness:U.metalness,wireframe:D,flatShading:!0}),z=new Hs({color:1118481,roughness:.5,metalness:.8});if(x==="mycelium_lounge_chair"){const H=new ji(1.2,1.4,.4,24),N=new pt(H,k);N.position.y=.6,N.castShadow=!0,R.add(N);const C=new ji(1.3,1.3,1.2,24,1,!1,0,Math.PI),F=new pt(C,k);F.position.set(0,1.2,-.4),F.rotation.y=Math.PI/2,F.castShadow=!0,R.add(F);const te=new ji(1,1.2,.4,16),X=new pt(te,k);X.position.y=.2,R.add(X)}else if(x==="rammed_earth_desk"){const H=new Dt(3.6,.3,1.8),N=new pt(H,k);N.position.y=1.4,N.castShadow=!0,R.add(N);const C=new Dt(.4,1.3,1.6),F=new pt(C,k);F.position.set(-1.5,.65,0),F.castShadow=!0,R.add(F);const te=new pt(C,k);te.position.set(1.5,.65,0),te.castShadow=!0,R.add(te);const X=new Dt(.8,.05,.8),ne=new pt(X,z);ne.position.set(1,1.56,-.2),R.add(ne)}else if(x==="clt_studio_workbench"){const H=new Dt(4,.25,2),N=new pt(H,k);N.position.y=1.35,N.castShadow=!0,R.add(N);for(let C of[-1.7,1.7])for(let F of[-.8,.8]){const te=new Dt(.25,1.25,.25),X=new pt(te,k);X.position.set(C,.62,F),X.castShadow=!0,R.add(X)}}else if(x==="hemp_acoustic_screen"){const H=new Dt(2.2,3.2,.15),N=new pt(H,k);N.position.y=1.65,N.castShadow=!0,R.add(N);const C=new Dt(2.4,.1,.8),F=new pt(C,z);F.position.y=.05,R.add(F)}else if(x==="recycled_poly_stool"){const H=new ji(.65,.75,1.1,16),N=new pt(H,k);N.position.y=.55,N.castShadow=!0,R.add(N)}else if(x==="geopolymer_sink_counter"){const H=new Dt(2.6,.6,1.4),N=new pt(H,k);N.position.y=1.1,N.castShadow=!0,R.add(N);const C=new Dt(1.4,.25,.9),F=new pt(C,z);F.position.set(0,1.3,0),R.add(F);const te=new Dt(2.4,.8,1.2),X=new pt(te,k);X.position.y=.4,R.add(X)}else if(x==="bamboo_daybed"){const H=new Dt(4,.3,2.8),N=new pt(H,k);N.position.y=.25,N.castShadow=!0,R.add(N);const C=new Dt(3.6,.35,2.4),F=new pt(C,z);F.position.y=.55,R.add(F)}else{const H=new ji(.7,.7,1.2,6),N=new pt(H,k);N.position.y=.6,N.castShadow=!0,R.add(N)}}return _?h.jsxs("div",{className:"w-full h-64 bg-yzy-obsidian border border-yzy-slate flex flex-col items-center justify-center p-6 text-center font-mono",children:[h.jsx(dg,{className:"w-8 h-8 text-yzy-warning mb-2"}),h.jsx("span",{className:"font-bold text-white text-sm uppercase",children:"3D PREVIEW UNAVAILABLE"}),h.jsx("span",{className:"text-xs text-yzy-ash max-w-sm mt-1",children:"Select finishes and review piece specifications below."})]}):h.jsxs("div",{className:"relative w-full h-72 sm:h-80 md:h-96 bg-yzy-obsidian border border-yzy-slate overflow-hidden flex flex-col select-none",children:[h.jsx("div",{ref:r,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-0.5 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-yzy-neon animate-pulse"}),h.jsxs("span",{className:"font-mono text-xs tracking-widest text-white uppercase font-bold",children:["3D STUDIO VIEW // ",s.name]})]}),h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash",children:["DRAG TO ROTATE 360° | FINISH: ",T.name]})]}),h.jsxs("div",{className:"absolute bottom-3 right-3 flex items-center gap-1 bg-yzy-black/90 backdrop-blur-md p-1.5 border border-yzy-slate z-10 overflow-x-auto max-w-[70%]",children:[h.jsx("span",{className:"font-mono text-[8px] text-yzy-ash uppercase tracking-wider hidden sm:inline mr-1",children:"FINISH:"}),E.map(x=>h.jsx("button",{onClick:()=>{Ot(),n(x.id)},style:{backgroundColor:x.colorHex},className:`w-5 h-5 rounded-none border transition-all ${e===x.id?"ring-2 ring-white scale-110 border-white":"border-black/50 opacity-80 hover:opacity-100"}`,title:x.name},x.id))]}),h.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-1.5 bg-yzy-black/90 backdrop-blur-md px-2 py-1 border border-yzy-slate z-10 font-mono text-[10px]",children:[h.jsx("button",{onClick:()=>{Ot(),g(!p)},className:`px-1.5 py-0.5 ${p?"text-white":"text-yzy-ash"}`,children:h.jsx(pg,{className:`w-3.5 h-3.5 ${p?"animate-spin":""}`,style:{animationDuration:"8s"}})}),h.jsx("button",{onClick:()=>{Ot(),S(!v)},className:`px-1.5 py-0.5 ${v?"text-yzy-neon font-bold":"text-yzy-ash"}`,children:"CAD"})]})]})}function K1(){const[s,e]=Ke.useState(ig[0]),[n,r]=Ke.useState("raw_earth"),[o,c]=Ke.useState("ALL"),[u,f]=Ke.useState(""),[p,g]=Ke.useState(null),v=["ALL","LIVING & SEATING","OFFICE & STUDIO","ACOUSTICS & ACCESSORIES","KITCHEN & SANITARY"],S=ig.filter(E=>{const T=o==="ALL"||E.category===o,y=E.name.toLowerCase().includes(u.toLowerCase())||E.description.toLowerCase().includes(u.toLowerCase())||E.material.toLowerCase().includes(u.toLowerCase())||E.supplier.name.toLowerCase().includes(u.toLowerCase());return T&&y}),_=E=>{ja();const T=`PIECE: ${E.name}
MATERIAL: ${E.material}
PRICE: ${E.retailPrice}
SUPPLIER: ${E.supplier.name} (${E.supplier.location})
CONTACT: ${E.supplier.contact}
WEBSITE: ${E.supplier.website}`;navigator.clipboard.writeText(T),g(E.id),setTimeout(()=>g(null),2500)},M=E=>{Va(),e(E),window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"06 // 3D SUSTAINABLE INTERIOR ARCHITECTURE & FURNITURE STUDIO"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"ECO-FRIENDLY BRUTALIST FURNITURE & STUDIO PIECES"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Interactive 3D preview of circular bio-composite furniture matching the YEEZY aesthetic."})]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx(Z1,{selectedPiece:s,activeFinish:n,onSelectFinish:r}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"ACTIVE 3D MODEL"}),h.jsx("span",{className:"font-bold text-white truncate block",children:s.name})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"EST. PRICE"}),h.jsx("span",{className:"font-bold text-yzy-neon",children:s.retailPrice.split("/")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"CARBON OFFSET"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:[s.carbonImpact," kg CO2"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase block",children:"WEIGHT & DIMS"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:s.weight})]})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[h.jsxs("div",{className:"relative w-full sm:w-80",children:[h.jsx(mg,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash"}),h.jsx("input",{type:"text",placeholder:"Search furniture, desks, seating, sinks...",value:u,onChange:E=>f(E.target.value),className:"w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"})]}),h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full pb-1",children:v.map(E=>h.jsx("button",{onClick:()=>{Ot(),c(E)},className:`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${o===E?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone shadow-sm":"bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:E},E))})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:S.map(E=>{const T=s.id===E.id;return h.jsxs("div",{onClick:()=>M(E),className:`cursor-pointer p-5 border transition-all flex flex-col justify-between group relative ${T?"bg-yzy-obsidian border-yzy-bone ring-2 ring-yzy-bone/40 shadow-xl":"bg-yzy-obsidian/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-obsidian/90"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase",children:E.category}),T?h.jsxs("span",{className:"flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5",children:[h.jsx(Zp,{className:"w-3 h-3"})," INSPECTING IN 3D"]}):h.jsxs("span",{className:"font-mono text-[9px] text-yzy-neon font-bold flex items-center gap-1",children:[h.jsx(m0,{className:"w-3 h-3"})," ",E.carbonImpact," kg CO2"]})]}),h.jsx("h3",{className:"font-display text-base font-bold text-white mb-1 group-hover:text-yzy-bone transition-colors",children:E.name}),h.jsx("p",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-wider mb-2",children:E.aestheticStyle}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 mb-3 leading-relaxed",children:E.description}),h.jsxs("div",{className:"grid grid-cols-2 gap-1.5 bg-yzy-black/80 p-2.5 border border-yzy-slate/60 text-[10px] font-mono mb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"MATERIAL"}),h.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:E.material})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIMENSIONS"}),h.jsx("span",{className:"text-yzy-bone font-bold truncate block",children:E.dimensions.split("(")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"EST. PRICE"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.retailPrice.split("/")[0]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] block",children:"DIY FEASIBILITY"}),h.jsx("span",{className:"text-yzy-bone font-bold",children:E.diyFeasibility.split(" ")[0]})]})]})]}),h.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-col gap-2 font-mono",children:[h.jsxs("div",{className:"bg-yzy-black/90 p-3 border border-yzy-slate/60 flex flex-col gap-1 text-[10px]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-yzy-ash font-bold uppercase tracking-wider text-[9px]",children:"EXACT ORDER SOURCE:"}),h.jsx("span",{className:"text-yzy-chalk font-bold",children:E.supplier.location.split("/")[0]})]}),h.jsx("span",{className:"font-bold text-white text-xs",children:E.supplier.name}),h.jsx("span",{className:"text-yzy-ash text-[10px]",children:E.supplier.contact}),h.jsxs("div",{className:"flex justify-between items-center text-[9px] text-yzy-neon pt-1 border-t border-yzy-slate/40 mt-1",children:[h.jsxs("span",{children:["PRICE: ",E.supplier.exactPrice.split("or")[0]]}),h.jsxs("span",{children:["LEAD: ",E.supplier.leadTime]})]})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs("button",{onClick:y=>{y.stopPropagation(),M(E)},className:"flex-1 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs font-mono text-white tracking-wider flex items-center justify-center gap-1.5",children:[h.jsx(Zp,{className:"w-3.5 h-3.5 text-yzy-neon"}),h.jsx("span",{children:"VIEW IN 3D"})]}),h.jsx("button",{onClick:y=>{y.stopPropagation(),_(E)},className:"py-2 px-3 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-xs font-mono text-yzy-bone tracking-wider",title:"Copy Supplier Details",children:p===E.id?h.jsx(Ll,{className:"w-3.5 h-3.5 text-yzy-neon"}):h.jsx(e0,{className:"w-3.5 h-3.5 text-yzy-ash"})})]})]})]},E.id)})})]})}const rg=[{phaseNumber:"01",title:"SITE SELECTION & SOIL DIAGNOSTICS",subtitle:"HOW TO TEST AND HARVEST YOUR ON-SITE SUBSOIL FOR ZERO DOLLARS",duration:"Day 1 - 2",skillLevel:"NOVICE (Anyone can do this)",overview:"Before buying anything, test the earth under your feet. 80% of topsoil sub-layers contain the exact natural sand-clay ratio needed to press indestructible building blocks.",steps:[{stepNum:"1.1",name:"THE 60-SECOND MASON JAR SEDIMENT TEST",instruction:"Fill a clear glass mason jar 1/3 full of your subsoil (dig down 12 inches beneath dark organic topsoil). Add clean water until 3/4 full, plus 1 tsp of salt/detergent to break surface tension. Shake vigorously for 60 seconds and set on a flat table.",timeline:[{time:"1 Minute",note:"Heavy Sand particles settle at the bottom."},{time:"2 Hours",note:"Fine Silt particles settle as a distinct middle layer."},{time:"48 Hours",note:"Pure Clay particles settle as the smooth top layer."}],idealRatio:"Ideal mix for CEB / Rammed Earth: 65-75% Sand/Gravel, 15-25% Clay, 10-15% Silt.",proTip:"If your soil is too sandy, add 10% local clay slurry. If too sticky/clay-heavy, add crushed local quarry sand."},{stepNum:"1.2",name:"THE BALL DROP TEST (FIELD MOISTURE CHECK)",instruction:"Grab a handful of damp soil and squeeze it firmly into a 1.5-inch ball. Drop it from shoulder height (5 ft) onto hard flat ground.",outcomes:[{result:"Shatters into powder",meaning:"Too dry! Add 2% water mist."},{result:"Flattens like a pancake",meaning:"Too wet! Let it air dry before pressing."},{result:"Breaks cleanly into 4-5 uniform chunks",meaning:"PERFECT MOISTURE (8-10%)! Ready to tamp or press."}]}],requiredTools:["Mason Jar","Ruler","Round-point Shovel","1/4 inch Wire Mesh Sieve Screen"]},{phaseNumber:"02",title:"RUBBLE TRENCH & GEOPOLYMER SUBGRADE FOUNDATION",subtitle:"FROST-PROOF, ZERO-SETTLEMENT EARTHEN FOUNDATION",duration:"Day 2 - 4",skillLevel:"NOVICE / COMMUNITY HAND CREW",overview:"Traditional poured Portland concrete foundations cost $12,000+. A Frank Lloyd Wright rubble trench foundation costs under $800, drains water naturally, and is immune to seismic shifting.",steps:[{stepNum:"2.1",name:"EXCAVATE THE PERIMETER TRENCH",instruction:"Dig a 18-inch wide trench around your building perimeter down to the local frost line (18-24 inches). Ensure a 1% slope toward a single daylight drainage exit point.",specs:'18" Width x 24" Depth with perforated 4" French drain pipe at bottom bedded in washed river gravel.'},{stepNum:"2.2",name:"TAMPED GRAVEL & POZZOLAN PLINTH BEAM",instruction:'Fill trench with 3/4" crushed basalt or granite gravel in 6-inch lifts, tamping each lift solid with a manual tamper. Pour an 8-inch geopolymer / lime grade beam on top to elevate walls 12 inches above splash grade.',proTip:"Elevating earth walls 12 inches off the ground ('Good Boots & Good Hat' rule) ensures 200+ year durability against rain splashback."}],requiredTools:["Trenching Spade",'Manual Hand Tamper (10x10")',"Transit Level / Water Hose Level","String Line & Stakes"]},{phaseNumber:"03",title:"WALL PRODUCTION & INTERLOCKING ASSEMBLY",subtitle:"PRESSING CEBs OR CASTING HEMPCRETE / RAMMED SLIPFORMS",duration:"Day 5 - 14",skillLevel:"NOVICE TO INTERMEDIATE",overview:"Depending on your selected material, construct your monolithic walls using zero toxic glues or off-gassing chemicals.",steps:[{stepNum:"3.1",name:"CEB INTERLOCKING BLOCK PRODUCTION (Option A)",instruction:'Sieve soil through 1/4" mesh. Blend 92% sieved soil with 8% hydraulic lime in a wheelbarrow. Feed into manual Cinva-Ram press. Pull lever arm with 150 lbs body weight to compress block at 2,000 PSI. Stack in shade to cure for 14 days with daily water mist.',rate:"A 3-person team can press 350-500 interlocking blocks per day ($0.12/block raw material cost)."},{stepNum:"3.2",name:"MONOLITHIC RAMMED EARTH SLIPFORMING (Option B)",instruction:'Erect 3/4" marine plywood forms braced with 2x4 walers and through-bolts. Fill formwork with 6-inch loose soil mix. Tamp down to 3 inches with pneumatic tamper or heavy steel hand tamper until it sounds like a hard ringing stone. Strip forms immediately and move upward.',rate:"Produces solid 18-inch thick monolithic stone walls capable of supporting multi-story mass timber floors."},{stepNum:"3.3",name:"HEMP-LIME CASTING (Option C)",instruction:"Mix 4 parts hemp hurds, 1 part hydrated lime binder, and 1.5 parts water in a horizontal pan mixer for 3 minutes until fluffy and coated. Lightly tamp around structural timber frames using wooden hand float. Do not over-compress.",rate:"Lightweight, breathable, and creates a monolithic continuous R-25 insulation envelope."}],requiredTools:["Cinva-Ram Manual Press or Slipforms","Wheelbarrows","Pneumatic or Hand Tampers","Rubber Mallet"]},{phaseNumber:"04",title:"ROOF SYSTEMS & RAINWATER VAULTS",subtitle:"CATENARY DOMES, FERROCEMENT VAULTS & MASS TIMBER SPANS",duration:"Day 15 - 20",skillLevel:"INTERMEDIATE",overview:"Cap your structure with a protective umbrella designed to deflect hurricane winds and harvest 100% of seasonal rainfall into potable storage.",steps:[{stepNum:"4.1",name:"CATENARY ARCH / DOME COMPASS ARM GUIDANCE",instruction:"For monolithic domes, anchor a central steel swivel pivot arm in the exact center of the foundation. Use the arm as a radial 3D guide to lay each circular tier of blocks at the exact inward angle without needing interior scaffolding.",proTip:"Catenary arches transfer 100% of roof load into pure compression, allowing stone and earth to span wide open rooms without steel beams."},{stepNum:"4.2",name:"LIME WASH & SILICATE HYDROPHOBIC SEAL",instruction:"Apply 3 coats of hot slaked lime wash with potassium silicate sealer. The wash chemically bonds to the earthen wall, allowing internal water vapor to breathe out while blocking driving rain completely."}],requiredTools:["Center Pivot Compass Arm","Plastering Trowels","Natural Bristle Lime Brushes","Safety Harness"]}],ld=[{id:"ceb_mix",name:"COMPRESSED EARTH BLOCK (CEB) FORMULA",yieldUnit:'100 Standard Blocks (12" x 6" x 4")',ingredients:[{name:"Sieved Subsoil (Clay/Sand mix)",amount:"900 lbs (0.4 cu yards)",cost:"$0.00 (On-site)"},{name:"Hydraulic Lime (NHL 3.5) or Pozzolan",amount:"50 lbs (1 bag)",cost:"$14.00"},{name:"Clean Water",amount:"8 - 10 Gallons (8% moisture)",cost:"$0.00"}],instructions:"Dry mix soil and lime thoroughly until color is uniform. Mist with fine spray nozzle while turning over with shovel. Compress immediately in press. Yields 100 blocks = 33 sq ft of wall."},{id:"hempcrete_mix",name:"HEMP-LIME CASTING FORMULA",yieldUnit:"10 Cubic Feet of Wall Fill (R-20)",ingredients:[{name:"Industrial Hemp Shiv / Hurds",amount:"40 lbs (1 bale)",cost:"$24.00"},{name:"Hydrated Lime / Pozzolan Binder",amount:"55 lbs (1 bag)",cost:"$16.00"},{name:"Water",amount:"6 - 7 Gallons",cost:"$0.00"}],instructions:"Wet hemp hurds in mixer first for 45 seconds. Add lime binder and mix until hurds are evenly white-coated. Add remaining water until mix clumps when squeezed without dripping water."},{id:"aircrete_mix",name:"AERATED AIRCRETE DOME FORMULA",yieldUnit:"5 Cubic Feet Foam Slurry",ingredients:[{name:"Standard or Pozzolan Cement/Slag",amount:"94 lbs (1 bag)",cost:"$12.50"},{name:"Clean Water",amount:"6 Gallons",cost:"$0.00"},{name:"High-Expansion Bio-Foaming Solution",amount:"4 oz concentrate in 2 gal water",cost:"$1.80"}],instructions:"Mix cement slurry until lump-free. Inject dense shaving-cream foam from generator directly into rotating mixer drum for 90 seconds. Pour directly into dome molds. Expands 4x volume."}];function Q1(){const[s,e]=Ke.useState(0),[n,r]=Ke.useState("ceb_mix"),[o,c]=Ke.useState(70),[u,f]=Ke.useState(20),[p,g]=Ke.useState(10),v=rg[s],S=ld.find(E=>E.id===n)||ld[0],M=o>=60&&o<=80&&u>=15&&u<=28?{status:"EXCELLENT FOR CEB & RAMMED EARTH",color:"text-yzy-neon",border:"border-yzy-neon",feedback:"Your soil composition is optimal! High structural compressive strength with minimal shrinkage."}:u>30?{status:"HIGH CLAY CONTENT (EXCESSIVE SHRINKAGE)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 15-20% coarse washed quarry sand to stabilize before pressing blocks or tamping."}:o>80?{status:"TOO SANDY (LOW BINDING CLAY)",color:"text-yzy-warning",border:"border-yzy-warning",feedback:"Add 10-15% natural clay slurry or increase hydraulic lime stabilizer to 10%."}:{status:"ACCEPTABLE WITH 8% LIME STABILIZER",color:"text-yzy-chalk",border:"border-yzy-slate",feedback:"Suitable for stabilized compressed earth blocks with standard curing."};return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"03 // NOVICE-TO-MASTER CONSTRUCTION PROTOCOLS"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"STEP-BY-STEP COMMUNITY BUILD MANUAL"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Zero prior construction experience required. Modular visual instructions for self-reliance."})]}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(a0,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase tracking-tight",children:"INTERACTIVE SOIL TEST SANDBOX (MASON JAR SIMULATOR)"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase",children:"CALCULATE YOUR LOCAL SOIL"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",children:[h.jsxs("div",{className:"lg:col-span-4 flex flex-col items-center justify-center bg-yzy-black p-4 border border-yzy-slate",children:[h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase tracking-widest mb-2",children:"SEDIMENT STRATA TUBE"}),h.jsxs("div",{className:"w-24 h-48 border-2 border-yzy-chalk/60 rounded-b-lg relative overflow-hidden flex flex-col-reverse bg-yzy-obsidian",children:[h.jsxs("div",{style:{height:`${o}%`},className:"w-full bg-[#C2B280] flex items-center justify-center text-[9px] font-mono font-bold text-black border-t border-black/30",children:["SAND (",o,"%)"]}),h.jsxs("div",{style:{height:`${p}%`},className:"w-full bg-[#8E8065] flex items-center justify-center text-[9px] font-mono font-bold text-white border-t border-black/30",children:["SILT (",p,"%)"]}),h.jsxs("div",{style:{height:`${u}%`},className:"w-full bg-[#B85D38] flex items-center justify-center text-[9px] font-mono font-bold text-white",children:["CLAY (",u,"%)"]})]}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash mt-2",children:"WATER & SALT SOLUTION (TOP)"})]}),h.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-4",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#C2B280] font-bold",children:"SAND LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[o,"%"]})]}),h.jsx("input",{type:"range",min:"30",max:"90",value:o,onChange:E=>{const T=Number(E.target.value);c(T);const y=100-T;f(Math.round(y*.65)),g(y-Math.round(y*.65))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#C2B280]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 1 minute"})]}),h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#B85D38] font-bold",children:"CLAY LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[u,"%"]})]}),h.jsx("input",{type:"range",min:"5",max:"60",value:u,onChange:E=>{const T=Number(E.target.value);f(T);const y=100-T;c(Math.round(y*.85)),g(y-Math.round(y*.85))},className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#B85D38]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 48 hours"})]}),h.jsxs("div",{className:"bg-yzy-black/60 p-3 border border-yzy-slate",children:[h.jsxs("div",{className:"flex justify-between font-mono text-xs mb-1",children:[h.jsx("span",{className:"text-[#8E8065] font-bold",children:"SILT LAYER"}),h.jsxs("span",{className:"text-yzy-bone font-bold",children:[p,"%"]})]}),h.jsx("input",{type:"range",min:"0",max:"40",value:p,onChange:E=>g(Number(E.target.value)),className:"w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#8E8065]"}),h.jsx("span",{className:"text-[9px] font-mono text-yzy-ash block mt-1",children:"Settles in 2 hours"})]})]}),h.jsxs("div",{className:`p-3.5 border ${M.border} bg-yzy-black/90 flex flex-col gap-1`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-mono text-[9px] text-yzy-ash tracking-widest uppercase font-bold",children:"DIAGNOSTIC SUITABILITY VERDICT:"}),h.jsx("span",{className:`font-mono text-xs font-bold ${M.color}`,children:M.status})]}),h.jsx("p",{className:"text-xs text-yzy-bone font-mono leading-relaxed",children:M.feedback})]})]})]})]}),h.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:rg.map((E,T)=>{const y=s===T;return h.jsxs("button",{onClick:()=>{Ot(),e(T)},className:`p-3 text-left border transition-all flex flex-col justify-between ${y?"bg-yzy-bone text-yzy-black border-yzy-bone shadow-lg":"bg-yzy-obsidian/60 border-yzy-slate text-yzy-chalk hover:border-yzy-ash"}`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsxs("span",{className:`font-mono text-[9px] font-bold ${y?"text-yzy-black/80":"text-yzy-ash"}`,children:["PHASE ",E.phaseNumber]}),h.jsx("span",{className:`font-mono text-[9px] ${y?"text-yzy-black/80 font-bold":"text-yzy-ash"}`,children:E.duration})]}),h.jsx("span",{className:`font-display text-xs font-bold leading-tight ${y?"text-yzy-black":"text-yzy-bone"}`,children:E.title})]},E.phaseNumber)})}),h.jsxs("div",{className:"bg-yzy-obsidian/80 border border-yzy-slate p-5 sm:p-6 flex flex-col gap-5",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"font-mono text-[9px] text-yzy-ash uppercase tracking-widest block",children:["PHASE ",v.phaseNumber," PROTOCOL"]}),h.jsx("h3",{className:"font-display text-lg font-bold text-yzy-bone",children:v.title}),h.jsx("p",{className:"font-mono text-xs text-yzy-chalk/80 mt-0.5",children:v.subtitle})]}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsxs("span",{className:"font-mono text-[10px] px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-bone font-bold uppercase",children:["SKILL: ",v.skillLevel]})})]}),h.jsx("div",{className:"flex flex-col gap-4",children:v.steps.map(E=>h.jsxs("div",{className:"p-4 bg-yzy-black/70 border border-yzy-slate/70 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"font-mono text-xs font-bold text-yzy-bone bg-yzy-charcoal px-2 py-0.5 border border-yzy-slate",children:E.stepNum}),h.jsx("h4",{className:"font-display text-sm font-bold text-yzy-bone uppercase",children:E.name})]}),h.jsx("p",{className:"text-xs text-yzy-chalk/90 leading-relaxed font-mono",children:E.instruction}),E.timeline&&h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 bg-yzy-obsidian p-2 border border-yzy-slate/40 text-[10px] font-mono",children:E.timeline.map((T,y)=>h.jsxs("div",{className:"flex flex-col",children:[h.jsxs("span",{className:"text-yzy-ash font-bold",children:[T.time,":"]}),h.jsx("span",{className:"text-yzy-bone",children:T.note})]},y))}),E.idealRatio&&h.jsxs("div",{className:"text-[11px] font-mono text-yzy-neon bg-yzy-neon/10 border border-yzy-neon/30 p-2 mt-1",children:[h.jsx("strong",{children:"FORMULA: "}),E.idealRatio]}),E.proTip&&h.jsxs("div",{className:"text-[10px] font-mono text-yzy-ash bg-yzy-charcoal/40 p-2 border-l-2 border-yzy-bone",children:[h.jsx("span",{className:"text-yzy-bone font-bold",children:"PRO-TIP: "}),E.proTip]})]},E.stepNum))}),h.jsxs("div",{className:"pt-3 border-t border-yzy-slate/60 flex flex-wrap items-center gap-2 text-xs font-mono",children:[h.jsx("span",{className:"text-yzy-ash font-bold uppercase text-[10px] mr-2",children:"REQUIRED TOOLS:"}),v.requiredTools.map((E,T)=>h.jsx("span",{className:"px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk text-[10px]",children:E},T))]})]}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(qy,{className:"w-4 h-4 text-yzy-bone"}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone uppercase",children:"BATCH RECIPE CALCULATORS"})]}),h.jsx("div",{className:"flex gap-1",children:ld.map(E=>h.jsx("button",{onClick:()=>{Ot(),r(E.id)},className:`px-2.5 py-1 text-[10px] font-mono tracking-wider border transition-all ${n===E.id?"bg-yzy-bone text-yzy-black font-bold border-yzy-bone":"bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash"}`,children:E.name.split(" ")[0]},E.id))})]}),h.jsxs("div",{className:"flex flex-col gap-3 font-mono",children:[h.jsxs("div",{className:"flex justify-between items-center text-xs",children:[h.jsx("span",{className:"text-yzy-bone font-bold",children:S.name}),h.jsxs("span",{className:"text-yzy-ash",children:["YIELD: ",S.yieldUnit]})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:S.ingredients.map((E,T)=>h.jsxs("div",{className:"bg-yzy-black p-3 border border-yzy-slate flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"text-yzy-ash text-[9px] uppercase block mb-0.5",children:["INGREDIENT ",T+1]}),h.jsx("span",{className:"text-yzy-bone font-bold text-xs",children:E.name})]}),h.jsxs("div",{className:"flex justify-between text-[11px] pt-2 mt-2 border-t border-yzy-slate/40",children:[h.jsx("span",{className:"text-yzy-chalk",children:E.amount}),h.jsx("span",{className:"text-yzy-neon font-bold",children:E.cost})]})]},T))}),h.jsxs("p",{className:"text-xs text-yzy-chalk/90 bg-yzy-black/60 p-3 border border-yzy-slate leading-relaxed",children:[h.jsx("strong",{className:"text-yzy-bone",children:"MIXING PROTOCOL: "}),S.instructions]})]})]})]})}const J1=[{category:"FREE / LOCAL HARVESTING",title:"ON-SITE & REGIONAL HARVESTING",badge:"COST: $0 - $200",description:"Methods for acquiring 70-90% of raw building mass directly from local geography.",channels:[{item:"Subsoil & Clay for CEBs/Rammed Earth",howToSource:"Foundation basement excavation, construction site clean fill, local road cutting excavations, or agricultural pond dredging.",estimatedCost:"$0.00 (Self-dug) or $15/ton delivered from local excavation contractor",availability:"Everywhere worldwide"},{item:"Agricultural Waste (Straw, Husks, Wood Chaff)",howToSource:"Connect with local grain/rice/wheat farmers after harvest season. Substrate for mycelium bio-insulation and cob binders.",estimatedCost:"$3.00 - $5.00 per 50 lb round bale",availability:"Agricultural zones / Rural co-ops"},{item:"Recycled Plastic (HDPE Milk Jugs & Bottle Caps)",howToSource:"Set up community drop-off points at schools/churches. Melted into interlocking zero-cost foundation blocks.",estimatedCost:"$0.00 (Community collection) to $0.20/lb washed flake",availability:"Urban & suburban centers"}]},{category:"LOW-COST EQUIPMENT & TOOLING",title:"OPEN-SOURCE BLOCK PRESSES & CASTING RIGS",badge:"ONE-TIME COMMUNITY TOOL KIT",description:"Inexpensive machinery that a single community can share to build dozens of homes.",channels:[{item:"Manual Interlocking CEB Press (Cinva-Ram / Auram Style)",howToSource:"Purchase from Open Source Ecology, Habitat for Humanity suppliers, or weld locally using open-source CAD plans.",estimatedCost:"$380 - $650 (One-time purchase, builds 50+ homes)",leadTime:"3-7 Days shipping or 2 days local welding"},{item:"Aircrete Continuous Bio-Foam Generator Rig",howToSource:"Domegaia Little Dragon foam unit or DIY 5-gallon pressure tank with aerator wand.",estimatedCost:"$120 - $280",leadTime:"Immediate DIY assembly"},{item:"Slipform Formwork & Steel Walers",howToSource:'Reusable 3/4" high-density overlay (HDO) plywood sheets with quick-release wedge bolts.',estimatedCost:"$450 per 16 linear feet of reusable forms",leadTime:"Local lumber yard"}]},{category:"COMMERCIAL BIO & MINERAL SUPPLIERS",title:"PROCESSED HEMPCRETE, LIME & MASS TIMBER",badge:"DIRECT SUPPLY CHAIN",description:"Direct wholesale bulk contacts for specialized binders and bio-composites.",channels:[{item:"Industrial Hemp Shiv / Hurd (Fibers cleaned & shredded)",howToSource:"HempWood (KY), Sunstrand, US Hemp Brokerage, Hempitecture.",estimatedCost:"$0.38 - $0.55 / lb in 1-ton super-sacks",leadTime:"5-10 Days freight"},{item:"Naturally Hydraulic Lime (NHL 3.5 / NHL 5.0) & Pozzolans",howToSource:"Saint-Astier, Limestrong, Graymont, Boral Fly Ash / Slag recycling.",estimatedCost:"$14.00 - $18.00 per 50 lb sack wholesale",leadTime:"Regional masonry distributors"},{item:"Engineered Bamboo Culms & Strands",howToSource:"Guadua bamboo co-ops, BamCore structural framing panels.",estimatedCost:"$3.50 / linear ft",leadTime:"Regional timber hubs"}]}],eb=[{metric:"Foundation (per sq ft)",conventional:"$18.50 (Standard poured concrete)",ezyInfra:"$3.80 (Rubble trench + Geopolymer plinth)",savings:"79% SAVED"},{metric:"Exterior Wall Envelope (per sq ft)",conventional:"$42.00 (Wood studs + OSB + Fiberglass + Drywall + Siding)",ezyInfra:"$4.20 (Interlocking CEB Earth or Rammed Earth)",savings:"90% SAVED"},{metric:"Insulation & Acoustic (per sq ft)",conventional:"$9.50 (Toxic closed-cell spray foam)",ezyInfra:"$2.90 (Grown Mycelium or Hemp-Lime)",savings:"69% SAVED"},{metric:"Total Turnkey Cost (1,200 sqft Residence)",conventional:"$280,000 - $420,000",ezyInfra:"$14,500 - $28,000",savings:"93% SAVED"},{metric:"Net Embodied Carbon",conventional:"+65,000 kg CO2 (Heavy polluter)",ezyInfra:"-14,200 kg CO2 (Net Carbon Sink)",savings:"122% REDUCTION"}];function sg(){return h.jsxs("div",{className:"flex flex-col gap-6 py-2",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block",children:"04 // SOURCING RADAR & SUPPLY CHAIN"}),h.jsx("h2",{className:"font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone",children:"MATERIAL PROCUREMENT & TOOL DIRECTORY"})]}),h.jsx("p",{className:"font-mono text-xs text-yzy-ash max-w-md",children:"Direct wholesale pathways, open-source equipment plans, and local harvesting guides."})]}),h.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:J1.map((s,e)=>h.jsx("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col justify-between",children:h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk",children:s.category}),h.jsx("span",{className:"font-mono text-[9px] text-yzy-neon font-bold",children:s.badge})]}),h.jsx("h3",{className:"font-display text-base font-bold text-yzy-bone mb-1",children:s.title}),h.jsx("p",{className:"text-xs text-yzy-chalk/80 leading-relaxed mb-4",children:s.description}),h.jsx("div",{className:"flex flex-col gap-3",children:s.channels.map((n,r)=>h.jsxs("div",{className:"bg-yzy-black/80 p-3 border border-yzy-slate/60 text-xs font-mono",children:[h.jsx("span",{className:"font-bold text-yzy-bone block mb-1",children:n.item}),h.jsx("p",{className:"text-[11px] text-yzy-chalk/90 leading-relaxed mb-2",children:n.howToSource}),h.jsxs("div",{className:"flex justify-between items-center text-[10px] pt-2 border-t border-yzy-slate/40",children:[h.jsx("span",{className:"text-yzy-ash",children:"COST:"}),h.jsx("span",{className:"text-yzy-neon font-bold",children:n.estimatedCost})]})]},r))})]})},e))}),h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-slate p-5 sm:p-6 flex flex-col gap-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(C0,{className:"w-5 h-5 text-yzy-neon"}),h.jsx("h3",{className:"font-display text-base sm:text-lg font-bold text-yzy-bone uppercase",children:"TRANSPARENT COST DISRUPTION INDEX (CONVENTIONAL VS EZY INFRA)"})]}),h.jsx("span",{className:"font-mono text-[10px] text-yzy-ash uppercase hidden sm:inline",children:"INDUSTRY BENCHMARKS"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[h.jsx("th",{className:"py-2.5 px-3",children:"ARCHITECTURAL COMPONENT"}),h.jsx("th",{className:"py-2.5 px-3",children:"CONVENTIONAL COMMERCIAL"}),h.jsx("th",{className:"py-2.5 px-3",children:"EZY INFRA SYSTEM"}),h.jsx("th",{className:"py-2.5 px-3 text-right",children:"COST DISRUPTION"})]})}),h.jsx("tbody",{className:"divide-y divide-yzy-slate/40",children:eb.map((s,e)=>h.jsxs("tr",{className:"hover:bg-yzy-charcoal/40 transition-colors",children:[h.jsx("td",{className:"py-3 px-3 font-bold text-yzy-bone",children:s.metric}),h.jsx("td",{className:"py-3 px-3 text-yzy-ash line-through",children:s.conventional}),h.jsx("td",{className:"py-3 px-3 text-yzy-chalk font-bold",children:s.ezyInfra}),h.jsx("td",{className:"py-3 px-3 text-right",children:h.jsx("span",{className:"bg-yzy-neon/10 border border-yzy-neon/30 text-yzy-neon font-bold px-2 py-0.5 text-[10px]",children:s.savings})})]},e))})]})})]})]})}function tb({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:u,totalCarbon:f}){if(!s)return null;const g=(ei[n.id]||ei.yzy_mono_dome).map(y=>{const x=r[y.id]||y.defaultMaterial,U=o.find(R=>R.id===x)||c.find(R=>R.id===x);let D=0;return U?.cost!==void 0?D=U.cost:U?.costPerSqFt!==void 0?D=Math.round(y.surfaceAreaSqft*U.costPerSqFt):D=Math.round(y.surfaceAreaSqft*4.2),{layer:y.name,mat:U,calc:`$${D.toLocaleString()}`,costNum:D}}),v=g.reduce((y,x)=>y+x.costNum,0),S=650,_=Math.round(v*.08),M=v+S+_,E=n.sqft?(M/n.sqft).toFixed(2):"0.00",T=()=>{ja();let y="data:text/csv;charset=utf-8,";y+=`ARCHITECTURAL COMPONENT,SPECIFIED MATERIAL,UNIT METRIC,ESTIMATED COST
`,g.forEach(D=>{y+=`"${D.layer}","${D.mat?.name||D.mat?.shortName||"Custom"}","${D.mat?.unitCost||"Package"}","${D.calc}"
`}),y+=`"TOOLING & EQUIPMENT","Community Press Kit","One-Time Rental","$${S}"
`,y+=`"CONTINGENCY BUFFER","8% Waste Reserve","Contingency","$${_}"
`,y+=`"TOTAL PROJECT BUDGET","${n.name}","Turnkey DIY","$${M}"
`;const x=encodeURI(y),U=document.createElement("a");U.setAttribute("href",x),U.setAttribute("download",`EZY_INFRA_BOM_${n.code}.csv`),document.body.appendChild(U),U.click(),document.body.removeChild(U)};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-obsidian border border-yzy-bone w-full max-w-3xl my-auto p-5 sm:p-7 shadow-2xl flex flex-col gap-5 text-yzy-bone font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase block",children:"TRANSPARENT BILL OF MATERIALS (BOM)"}),h.jsxs("h3",{className:"font-display text-lg sm:text-xl font-bold tracking-tight",children:[n.name," // COST TELEMETRY"]})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 bg-yzy-black p-3 border border-yzy-slate text-center",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"TOTAL DIY BUDGET"}),h.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-neon",children:["$",M.toLocaleString()]})]}),h.jsxs("div",{className:"border-l border-yzy-slate",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COST PER SQ FT"}),h.jsxs("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:["$",E," / sqft"]})]}),h.jsxs("div",{className:"border-l border-yzy-slate",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash block uppercase",children:"COMMERCIAL COST SAVINGS"}),h.jsx("span",{className:"text-base sm:text-lg font-bold text-yzy-bone",children:"88% - 94%"})]})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-yzy-slate text-yzy-ash text-[10px] uppercase",children:[h.jsx("th",{className:"py-2 px-2",children:"COMPONENT"}),h.jsx("th",{className:"py-2 px-2",children:"SPECIFIED MATERIAL"}),h.jsx("th",{className:"py-2 px-2 text-right",children:"COST ESTIMATE"})]})}),h.jsxs("tbody",{className:"divide-y divide-yzy-slate/40",children:[g.map((y,x)=>h.jsxs("tr",{className:"hover:bg-yzy-charcoal/30",children:[h.jsx("td",{className:"py-2.5 px-2 font-bold text-yzy-chalk text-[11px]",children:y.layer}),h.jsx("td",{className:"py-2.5 px-2 text-yzy-ash text-[11px]",children:y.mat?.name||y.mat?.shortName||"Custom Spec"}),h.jsx("td",{className:"py-2.5 px-2 text-right font-bold text-yzy-bone text-[11px]",children:y.calc})]},x)),h.jsxs("tr",{className:"bg-yzy-black/40",children:[h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"TOOLS & EQUIPMENT LEASE"}),h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Cinva-Ram Press & Mixer"}),h.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",S]})]}),h.jsxs("tr",{className:"bg-yzy-black/40",children:[h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"CONTINGENCY & WASTE RESERVE (8%)"}),h.jsx("td",{className:"py-2 px-2 text-yzy-ash text-[11px]",children:"Site Material Buffer"}),h.jsxs("td",{className:"py-2 px-2 text-right font-bold text-yzy-bone text-[11px]",children:["$",_]})]})]})]})}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash",children:"* Estimates based on open-source DIY construction without contractor markup."}),h.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[h.jsxs("button",{onClick:T,className:"flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-yzy-bone hover:bg-white text-yzy-black text-xs font-bold tracking-wider",children:[h.jsx(cd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"DOWNLOAD BOM (.CSV)"})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"px-4 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs text-yzy-chalk",children:"CLOSE"})]})]})]})})}var yf={};(function s(e,n,r,o){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),b=L.getContext("2d");b.fillRect(0,0,1,1);var G=L.transferToImageBitmap();b.createPattern(G,"no-repeat")}catch{return!1}return!0})();function p(){}function g(L){var b=n.exports.Promise,G=b!==void 0?b:e.Promise;return typeof G=="function"?new G(L):(L(p,p),null)}var v=(function(L,b){return{transform:function(G){if(L)return G;if(b.has(G))return b.get(G);var pe=new OffscreenCanvas(G.width,G.height),W=pe.getContext("2d");return W.drawImage(G,0,0),b.set(G,pe),pe},clear:function(){b.clear()}}})(f,new Map),S=(function(){var L=Math.floor(16.666666666666668),b,G,pe={},W=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function($){var ce=Math.random();return pe[ce]=requestAnimationFrame(function ae(ge){W===ge||W+L-1<ge?(W=ge,delete pe[ce],$()):pe[ce]=requestAnimationFrame(ae)}),ce},G=function($){pe[$]&&cancelAnimationFrame(pe[$])}):(b=function($){return setTimeout($,L)},G=function($){return clearTimeout($)}),{frame:b,cancel:G}})(),_=(function(){var L,b,G={};function pe(W){function $(ce,ae){W.postMessage({options:ce||{},callback:ae})}W.init=function(ae){var ge=ae.transferControlToOffscreen();W.postMessage({canvas:ge},[ge])},W.fire=function(ae,ge,_e){if(b)return $(ae,null),b;var Ne=Math.random().toString(36).slice(2);return b=g(function(He){function ze(tt){tt.data.callback===Ne&&(delete G[Ne],W.removeEventListener("message",ze),b=null,v.clear(),_e(),He())}W.addEventListener("message",ze),$(ae,Ne),G[Ne]=ze.bind(null,{data:{callback:Ne}})}),b},W.reset=function(){W.postMessage({reset:!0});for(var ae in G)G[ae](),delete G[ae]}}return function(){if(L)return L;if(!r&&c){var W=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([W])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}pe(L)}return L}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(L,b){return b?b(L):L}function T(L){return L!=null}function y(L,b,G){return E(L&&T(L[b])?L[b]:M[b],G)}function x(L){return L<0?0:Math.floor(L)}function U(L,b){return Math.floor(Math.random()*(b-L))+L}function D(L){return parseInt(L,16)}function R(L){return L.map(Z)}function Z(L){var b=String(L).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:D(b.substring(0,2)),g:D(b.substring(2,4)),b:D(b.substring(4,6))}}function k(L){var b=y(L,"origin",Object);return b.x=y(b,"x",Number),b.y=y(b,"y",Number),b}function z(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function H(L){var b=L.getBoundingClientRect();L.width=b.width,L.height=b.height}function N(L){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=L,b}function C(L,b,G,pe,W,$,ce,ae,ge){L.save(),L.translate(b,G),L.rotate($),L.scale(pe,W),L.arc(0,0,1,ce,ae,ge),L.restore()}function F(L){var b=L.angle*(Math.PI/180),G=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-b+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function te(L,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var G=b.tick++/b.totalTicks,pe=b.x+b.random*b.tiltCos,W=b.y+b.random*b.tiltSin,$=b.wobbleX+b.random*b.tiltCos,ce=b.wobbleY+b.random*b.tiltSin;if(L.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-G)+")",L.beginPath(),u&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))L.fill(re(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs($-pe)*.1,Math.abs(ce-W)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var ae=Math.PI/10*b.wobble,ge=Math.abs($-pe)*.1,_e=Math.abs(ce-W)*.1,Ne=b.shape.bitmap.width*b.scalar,He=b.shape.bitmap.height*b.scalar,ze=new DOMMatrix([Math.cos(ae)*ge,Math.sin(ae)*ge,-Math.sin(ae)*_e,Math.cos(ae)*_e,b.x,b.y]);ze.multiplySelf(new DOMMatrix(b.shape.matrix));var tt=L.createPattern(v.transform(b.shape.bitmap),"no-repeat");tt.setTransform(ze),L.globalAlpha=1-G,L.fillStyle=tt,L.fillRect(b.x-Ne/2,b.y-He/2,Ne,He),L.globalAlpha=1}else if(b.shape==="circle")L.ellipse?L.ellipse(b.x,b.y,Math.abs($-pe)*b.ovalScalar,Math.abs(ce-W)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):C(L,b.x,b.y,Math.abs($-pe)*b.ovalScalar,Math.abs(ce-W)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var B=Math.PI/2*3,_t=4*b.scalar,Je=8*b.scalar,et=b.x,Ae=b.y,it=5,Ie=Math.PI/it;it--;)et=b.x+Math.cos(B)*Je,Ae=b.y+Math.sin(B)*Je,L.lineTo(et,Ae),B+=Ie,et=b.x+Math.cos(B)*_t,Ae=b.y+Math.sin(B)*_t,L.lineTo(et,Ae),B+=Ie;else L.moveTo(Math.floor(b.x),Math.floor(b.y)),L.lineTo(Math.floor(b.wobbleX),Math.floor(W)),L.lineTo(Math.floor($),Math.floor(ce)),L.lineTo(Math.floor(pe),Math.floor(b.wobbleY));return L.closePath(),L.fill(),b.tick<b.totalTicks}function X(L,b,G,pe,W){var $=b.slice(),ce=L.getContext("2d"),ae,ge,_e=g(function(Ne){function He(){ae=ge=null,ce.clearRect(0,0,pe.width,pe.height),v.clear(),W(),Ne()}function ze(){r&&!(pe.width===o.width&&pe.height===o.height)&&(pe.width=L.width=o.width,pe.height=L.height=o.height),!pe.width&&!pe.height&&(G(L),pe.width=L.width,pe.height=L.height),ce.clearRect(0,0,pe.width,pe.height),$=$.filter(function(tt){return te(ce,tt)}),$.length?ae=S.frame(ze):He()}ae=S.frame(ze),ge=He});return{addFettis:function(Ne){return $=$.concat(Ne),_e},canvas:L,promise:_e,reset:function(){ae&&S.cancel(ae),ge&&ge()}}}function ne(L,b){var G=!L,pe=!!y(b||{},"resize"),W=!1,$=y(b,"disableForReducedMotion",Boolean),ce=c&&!!y(b||{},"useWorker"),ae=ce?_():null,ge=G?z:H,_e=L&&ae?!!L.__confetti_initialized:!1,Ne=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,He;function ze(B,_t,Je){for(var et=y(B,"particleCount",x),Ae=y(B,"angle",Number),it=y(B,"spread",Number),Ie=y(B,"startVelocity",Number),P=y(B,"decay",Number),A=y(B,"gravity",Number),J=y(B,"drift",Number),ve=y(B,"colors",R),Se=y(B,"ticks",Number),xe=y(B,"shapes"),We=y(B,"scalar"),Le=!!y(B,"flat"),ke=k(B),ft=et,be=[],Be=L.width*ke.x,nt=L.height*ke.y;ft--;)be.push(F({x:Be,y:nt,angle:Ae,spread:it,startVelocity:Ie,color:ve[ft%ve.length],shape:xe[U(0,xe.length)],ticks:Se,decay:P,gravity:A,drift:J,scalar:We,flat:Le}));return He?He.addFettis(be):(He=X(L,be,ge,_t,Je),He.promise)}function tt(B){var _t=$||y(B,"disableForReducedMotion",Boolean),Je=y(B,"zIndex",Number);if(_t&&Ne)return g(function(Ie){Ie()});G&&He?L=He.canvas:G&&!L&&(L=N(Je),document.body.appendChild(L)),pe&&!_e&&ge(L);var et={width:L.width,height:L.height};ae&&!_e&&ae.init(L),_e=!0,ae&&(L.__confetti_initialized=!0);function Ae(){if(ae){var Ie={getBoundingClientRect:function(){if(!G)return L.getBoundingClientRect()}};ge(Ie),ae.postMessage({resize:{width:Ie.width,height:Ie.height}});return}et.width=et.height=null}function it(){He=null,pe&&(W=!1,e.removeEventListener("resize",Ae)),G&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,_e=!1)}return pe&&!W&&(W=!0,e.addEventListener("resize",Ae,!1)),ae?ae.fire(B,et,it):ze(B,et,it)}return tt.reset=function(){ae&&ae.reset(),He&&He.reset()},tt}var ie;function se(){return ie||(ie=ne(null,{useWorker:!0,resize:!0})),ie}function re(L,b,G,pe,W,$,ce){var ae=new Path2D(L),ge=new Path2D;ge.addPath(ae,new DOMMatrix(b));var _e=new Path2D;return _e.addPath(ge,new DOMMatrix([Math.cos(ce)*W,Math.sin(ce)*W,-Math.sin(ce)*$,Math.cos(ce)*$,G,pe])),_e}function V(L){if(!u)throw new Error("path confetti are not supported in this browser");var b,G;typeof L=="string"?b=L:(b=L.path,G=L.matrix);var pe=new Path2D(b),W=document.createElement("canvas"),$=W.getContext("2d");if(!G){for(var ce=1e3,ae=ce,ge=ce,_e=0,Ne=0,He,ze,tt=0;tt<ce;tt+=2)for(var B=0;B<ce;B+=2)$.isPointInPath(pe,tt,B,"nonzero")&&(ae=Math.min(ae,tt),ge=Math.min(ge,B),_e=Math.max(_e,tt),Ne=Math.max(Ne,B));He=_e-ae,ze=Ne-ge;var _t=10,Je=Math.min(_t/He,_t/ze);G=[Je,0,0,Je,-Math.round(He/2+ae)*Je,-Math.round(ze/2+ge)*Je]}return{type:"path",path:b,matrix:G}}function he(L){var b,G=1,pe="#000000",W='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?b=L:(b=L.text,G="scalar"in L?L.scalar:G,W="fontFamily"in L?L.fontFamily:W,pe="color"in L?L.color:pe);var $=10*G,ce=""+$+"px "+W,ae=new OffscreenCanvas($,$),ge=ae.getContext("2d");ge.font=ce;var _e=ge.measureText(b),Ne=Math.ceil(_e.actualBoundingBoxRight+_e.actualBoundingBoxLeft),He=Math.ceil(_e.actualBoundingBoxAscent+_e.actualBoundingBoxDescent),ze=2,tt=_e.actualBoundingBoxLeft+ze,B=_e.actualBoundingBoxAscent+ze;Ne+=ze+ze,He+=ze+ze,ae=new OffscreenCanvas(Ne,He),ge=ae.getContext("2d"),ge.font=ce,ge.fillStyle=pe,ge.fillText(b,tt,B);var _t=1/G;return{type:"bitmap",bitmap:ae.transferToImageBitmap(),matrix:[_t,0,0,_t,-Ne*_t/2,-He*_t/2]}}n.exports=function(){return se().apply(this,arguments)},n.exports.reset=function(){se().reset()},n.exports.create=ne,n.exports.shapeFromPath=V,n.exports.shapeFromText=he})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),yf,!1);const nb=yf.exports;yf.exports.create;function ib({isOpen:s,onClose:e,infrastructure:n,selectedMaterials:r,materialsList:o,utilityPackages:c,totalCost:u,totalCarbon:f}){if(Ke.useEffect(()=>{if(s)try{nb({particleCount:60,spread:70,origin:{y:.6},colors:["#EAEAE6","#B8865A","#00FF66","#7B8C65"]})}catch{}},[s]),!s)return null;const p=()=>{ja(),window.print()};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-black border-2 border-yzy-bone w-full max-w-4xl my-auto p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[h.jsxs("div",{className:"flex items-center justify-between border-b-2 border-yzy-bone pb-4",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[10px] tracking-widest text-yzy-ash uppercase font-bold",children:"YZY INFRASTRUCTURE ARCHITECTURAL BLUEPRINT // SPECIFICATION CAD-01"}),h.jsxs("h2",{className:"font-display text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5",children:[n.name," — ",n.subtitle]})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"PROJECT CODE"}),h.jsx("span",{className:"font-bold text-white",children:n.code})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"TOTAL FOOTPRINT"}),h.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"DIMENSIONS"}),h.jsx("span",{className:"font-bold text-white",children:n.diameter})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"OCCUPANCY"}),h.jsx("span",{className:"font-bold text-white",children:n.occupancy})]})]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase font-bold border-b border-yzy-slate pb-1",children:"01. MATERIAL & LAYER ARCHITECTURE"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs",children:Object.entries(r).map(([g,v])=>{const S=g==="utilities"?c.find(_=>_.id===v):o.find(_=>_.id===v);return h.jsxs("div",{className:"p-2.5 bg-yzy-obsidian border border-yzy-slate/60 flex flex-col justify-between",children:[h.jsx("span",{className:"text-[9px] text-yzy-ash uppercase font-bold",children:g.toUpperCase()}),h.jsx("span",{className:"font-bold text-yzy-bone text-xs mt-0.5",children:S?.name||S?.shortName}),h.jsx("span",{className:"text-[10px] text-yzy-chalk/80 mt-1 line-clamp-1",children:S?.tagline||S?.description})]},g)})})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 bg-yzy-obsidian p-3 border border-yzy-slate text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"WIND RESISTANCE"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.windResistance})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"SEISMIC ZONE"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.seismicZone})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[9px] uppercase block",children:"THERMAL STRATEGY"}),h.jsx("span",{className:"font-bold text-yzy-bone",children:n.thermalComfort})]})]}),h.jsxs("div",{className:"bg-yzy-bone text-yzy-black p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"AUTHENTICATED PROJECT ESTIMATE"}),h.jsxs("span",{className:"text-2xl font-black",children:["$",u.toLocaleString()," TOTAL TURNKEY DIY"]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[10px] tracking-widest uppercase font-bold block opacity-80",children:"NET EMBODIED CARBON"}),h.jsx("span",{className:"text-lg font-bold",children:f<=0?`${f} kg CO2 (NET SINK)`:`+${f} kg CO2`})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash uppercase tracking-wider",children:"OPEN-SOURCE COMMUNITY ARCHITECTURE LICENSE // FREE TO DISTRIBUTE"}),h.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[h.jsxs("button",{onClick:p,className:"flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-xs hover:bg-yzy-bone transition-all",children:[h.jsx(v0,{className:"w-4 h-4"}),h.jsx("span",{children:"PRINT / SAVE PDF"})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"px-4 py-2.5 bg-yzy-charcoal border border-yzy-slate text-xs text-yzy-chalk",children:"DISMISS"})]})]})]})})}function rb({isOpen:s,onClose:e}){return s?h.jsx("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:h.jsxs("div",{className:"bg-yzy-black border border-yzy-bone/80 w-full max-w-3xl my-auto p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-yzy-slate pb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yzy-neon animate-pulse"}),h.jsx("span",{className:"text-xs font-bold tracking-widest text-yzy-bone uppercase",children:"THE MANIFESTO // YZY + DONDA EARTH INITIATIVE"})]}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal",children:h.jsx(kl,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsxs("h2",{className:"font-display text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight",children:["SHELTER IS A BIRTHRIGHT. ",h.jsx("br",{}),"NOT A 30-YEAR PRISON SENTENCE."]}),h.jsx("p",{className:"text-xs sm:text-sm text-yzy-chalk/90 leading-relaxed font-sans",children:"The modern housing machine is broken. It forces human beings into debt slavery for toxic drywall boxes that rot in 40 years. We are returning to ancient monolithic permanence powered by computational engineering, raw subsoil, mycelium, and solar autonomy."})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(u0,{className:"w-4 h-4 text-yzy-neon"}),h.jsx("span",{children:"01. 90% ON-SITE HARVESTING"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"We build directly with the dirt beneath our feet. Subsoil compressed at 2,000 PSI makes permanent stone blocks for cents per unit. Zero timber destruction. Zero cement emissions."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(F0,{className:"w-4 h-4 text-yzy-electric"}),h.jsx("span",{children:"02. DECENTRALIZED SOVEREIGNTY"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every dome and village features closed-loop solar generation, atmospheric rainwater harvesting, and bio-gas digestion. Zero utility bills for life."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(M0,{className:"w-4 h-4 text-yzy-earth"}),h.jsx("span",{children:"03. 200+ YEAR BRUTALIST LIFE"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Catenary arches and thick monolithic earth walls cannot catch fire, cannot rot, and withstand Category 5 hurricanes and earthquakes. Built for generations."})]}),h.jsxs("div",{className:"p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2 text-yzy-bone font-bold text-xs",children:[h.jsx(f0,{className:"w-4 h-4 text-yzy-clay"}),h.jsx("span",{children:"04. OPEN-SOURCE COMMUNITY POWER"})]}),h.jsx("p",{className:"text-xs text-yzy-ash leading-relaxed",children:"Every blueprint, mix formula, and CAD file is free and open-source. Anyone with a shovel, manual block press, and community willpower can build a sanctuary."})]})]}),h.jsxs("div",{className:"pt-4 border-t border-yzy-slate flex items-center justify-between",children:[h.jsx("span",{className:"text-[10px] text-yzy-ash tracking-widest uppercase",children:"DESIGNED FOR HUMANITY // POWERED BY EZY INFRA"}),h.jsx("button",{onClick:()=>{Ot(),e()},className:"px-5 py-2 bg-yzy-bone text-yzy-black font-bold text-xs hover:bg-white tracking-wider",children:"ENTER THE ECOSYSTEM"})]})]})}):null}function sb(){const[s,e]=Ke.useState("builder"),[n,r]=Ke.useState(Cu[0]),o=ei[Cu[0].id]||ei.yzy_mono_dome,c={};o.forEach(z=>{c[z.id]=z.defaultMaterial});const[u,f]=Ke.useState(c),[p,g]=Ke.useState(o[1]?.id||o[0].id),[v,S]=Ke.useState(!1);useEffect(()=>{const z=()=>{S(window.scrollY>160)};return window.addEventListener("scroll",z,{passive:!0}),()=>window.removeEventListener("scroll",z)},[]);const[_,M]=Ke.useState(!1),[E,T]=Ke.useState(!1),[y,x]=Ke.useState(!1),U=Ke.useMemo(()=>[...nl,...ef],[]),D=z=>{r(z);const H=ei[z.id]||ei.yzy_mono_dome,N={};H.forEach(C=>{N[C.id]=C.defaultMaterial}),f(N),g(H[1]?.id||H[0].id)},R=(z,H)=>{f(N=>({...N,[z]:H}))},{totalCost:Z,totalCarbon:k}=Ke.useMemo(()=>{const z=ei[n.id]||ei.yzy_mono_dome;let H=0,N=0;return z.forEach(C=>{const F=u[C.id]||C.defaultMaterial,te=U.find(ne=>ne.id===F),X=Ru.find(ne=>ne.id===F);if(X)H+=X.cost,N+=X.carbonImpact;else if(te){const ne=C.surfaceAreaSqft*te.costPerSqFt,ie=C.surfaceAreaSqft*.1*te.carbonImpact;H+=ne,N+=ie}}),H+=650,{totalCost:Math.round(H),totalCarbon:Math.round(N)}},[n,u,U]);return h.jsxs("div",{className:"min-h-screen bg-yzy-black text-yzy-bone flex flex-col selection:bg-yzy-bone selection:text-yzy-black",children:[h.jsx(H0,{activeTab:s,setActiveTab:e,totalCost:Z,totalCarbon:k,onOpenCostBreakdown:()=>M(!0),onOpenBlueprintExport:()=>T(!0),onOpenVisionModal:()=>x(!0)}),h.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 pb-24 flex flex-col gap-6",children:[s==="builder"&&h.jsxs("div",{className:"flex flex-col gap-6",children:[h.jsx(Y1,{infrastructures:Cu,selectedInfra:n,onSelectInfra:D}),h.jsxs("div",{className:`transition-all duration-300 ${v?"sticky top-[42px] z-30 shadow-2xl bg-yzy-black/95 backdrop-blur-md pt-1 pb-2 border-b border-yzy-bone/40 -mx-3 px-3 sm:-mx-6 sm:px-6":"relative flex flex-col gap-2"}`,children:[h.jsx(X1,{infrastructure:n,selectedPartMaterials:u,activePartId:p,onSelectPart:z=>g(z),materialsList:nl,isCompact:v}),h.jsxs("div",{className:`bg-yzy-obsidian border border-yzy-slate/60 p-2 sm:p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-[11px] font-mono ${v?"hidden md:grid":"grid"}`,children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"ACTIVE MODEL"}),h.jsx("span",{className:"font-bold text-white truncate block",children:n.name})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"FOOTPRINT"}),h.jsxs("span",{className:"font-bold text-white",children:[n.sqft," SQ FT"]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"LIVE ESTIMATED COST"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:["$",Z.toLocaleString()]})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-yzy-ash text-[8px] sm:text-[9px] uppercase block",children:"NET CARBON IMPACT"}),h.jsxs("span",{className:"font-bold text-yzy-neon",children:[k," kg CO2"]})]})]})]}),h.jsx(q1,{infrastructure:n,selectedPartMaterials:u,onSelectPartMaterial:R,activePartId:p,setActivePartId:g,materialsList:nl})]}),s==="materials"&&h.jsx($1,{materialsList:nl}),s==="furniture"&&h.jsx(K1,{}),s==="tutorials"&&h.jsx(Q1,{}),s==="sourcing"&&h.jsx(sg,{}),s==="benchmarks"&&h.jsx("div",{className:"flex flex-col gap-6 py-2",children:h.jsx(sg,{})})]}),h.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-40 bg-yzy-obsidian/95 backdrop-blur-md border-t border-yzy-slate/80 p-2 sm:hidden flex items-center justify-around font-mono text-[10px]",children:[h.jsxs("button",{onClick:()=>{Ot(),e("builder")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="builder"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(ug,{className:"w-4 h-4"}),h.jsx("span",{children:"MATRIX"})]}),h.jsxs("button",{onClick:()=>{Ot(),e("materials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="materials"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(tf,{className:"w-4 h-4"}),h.jsx("span",{children:"MATERIALS"})]}),h.jsxs("button",{onClick:()=>{Ot(),e("furniture")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="furniture"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(fg,{className:"w-4 h-4"}),h.jsx("span",{children:"FURNITURE"})]}),h.jsxs("button",{onClick:()=>{Ot(),e("tutorials")},className:`flex flex-col items-center gap-1 py-1 px-1.5 ${s==="tutorials"?"text-white font-bold":"text-yzy-ash"}`,children:[h.jsx(cg,{className:"w-4 h-4"}),h.jsx("span",{children:"GUIDES"})]}),h.jsxs("button",{onClick:()=>{ja(),M(!0)},className:"flex flex-col items-center gap-1 py-1 px-1.5 text-yzy-neon font-bold",children:[h.jsx(hg,{className:"w-4 h-4"}),h.jsxs("span",{children:["$",Z.toLocaleString()]})]})]}),h.jsx(tb,{isOpen:_,onClose:()=>M(!1),infrastructure:n,selectedMaterials:u,materialsList:U,utilityPackages:Ru,totalCost:Z,totalCarbon:k}),h.jsx(ib,{isOpen:E,onClose:()=>T(!1),infrastructure:n,selectedMaterials:u,materialsList:U,utilityPackages:Ru,totalCost:Z,totalCarbon:k}),h.jsx(rb,{isOpen:y,onClose:()=>x(!1)})]})}class ab extends og.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("React Error Caught:",e,n)}render(){return this.state.hasError?h.jsxs("div",{style:{backgroundColor:"#0a0a0a",color:"#EAEAE6",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",fontFamily:"monospace",textAlign:"center"},children:[h.jsx("h2",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"12px"},children:"EZY.INFRA // APP RECOVERY"}),h.jsx("p",{style:{color:"#888888",fontSize:"13px",maxWidth:"400px",marginBottom:"24px"},children:"A rendering error occurred on this device. Click below to reload."}),h.jsx("pre",{style:{background:"#181818",padding:"12px",fontSize:"11px",color:"#00FF66",maxWidth:"90%",overflow:"auto",marginBottom:"20px"},children:this.state.error?.toString()}),h.jsx("button",{onClick:()=>window.location.reload(),style:{backgroundColor:"#EAEAE6",color:"#000000",padding:"12px 24px",fontWeight:"bold",border:"none",cursor:"pointer"},children:"RELOAD APPLICATION"})]}):this.props.children}}Hy.createRoot(document.getElementById("root")).render(h.jsx(og.StrictMode,{children:h.jsx(ab,{children:h.jsx(sb,{})})}));
