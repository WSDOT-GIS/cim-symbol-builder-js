"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4166,3172],{32448:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(43697),o=r(15923),s=r(50758),i=r(52011);class a{constructor(){this._emitter=new a.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this.target=e,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(e,t){const r=this._listenersMap&&this._listenersMap.get(e);if(!r)return!1;const n=this.target||this;return[...r].forEach((e=>{e.call(n,t)})),r.length>0}on(e,t){if(Array.isArray(e)){const r=e.map((e=>this.on(e,t)));return(0,s.AL)(r)}if(e.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);const r=this._listenersMap.get(e)||[];return r.push(t),this._listenersMap.set(e,r),{remove:()=>{const r=this._listenersMap&&this._listenersMap.get(e)||[],n=r.indexOf(t);n>=0&&r.splice(n,1)}}}once(e,t){const r=this.on(e,(e=>{r.remove(),t.call(null,e)}));return r}hasEventListener(e){const t=this._listenersMap&&this._listenersMap.get(e);return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let r=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}};return r=(0,n._)([(0,i.j)("esri.core.Evented")],r),r};let r=class extends o.Z{constructor(){super(...arguments),this._emitter=new a.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}};r=(0,n._)([(0,i.j)("esri.core.Evented")],r),e.EventedAccessor=r}(a||(a={}));const l=a},16453:(e,t,r)=>{r.d(t,{R:()=>v,w:()=>w});var n=r(43697),o=r(15923),s=r(70586),i=r(22974),a=r(31263);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.kk),this._values=new Map}clone(e){const t=new l,r=this._originStores[0];r&&r.forEach(((e,r)=>{t.set(r,(0,i.d9)(e),0)}));for(let r=2;r<a.kk;r++){const n=this._originStores[r];n&&n.forEach(((n,o)=>{e&&e.has(o)||t.set(o,(0,i.d9)(n),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=6){let n=this._originStores[r];if(n||(n=new Map,this._originStores[r]=n),n.set(e,t),!this._values.has(e)||(0,s.j0)(this._propertyOriginMap.get(e))<=r){const n=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),n!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const n=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return n}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],n=r&&r.get(e),o=this._values.get(e);return this._values.set(e,n),this._propertyOriginMap.set(e,t),o!==n}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}var u=r(50549),c=r(1153),h=r(52011);const p=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,s.j0)((0,c.vw)(this)),r=t.metadatas,n=t.store,o=new l;t.store=o,n.keys().forEach((e=>{o.set(e,n.get(e),0)})),Object.keys(r).forEach((e=>{t.internalGet(e)&&o.set(e,t.internalGet(e),0)}))}read(e,t){(0,u.ij)(this,e,t)}getAtOrigin(e,t){const r=d(this),n=(0,a.M9)(t);if("string"==typeof e)return r.get(e,n);const o={};return e.forEach((e=>{o[e]=r.get(e,n)})),o}originOf(e){return(0,a.x3)(this.originIdOf(e))}originIdOf(e){return d(this).originOf(e)}revert(e,t){const r=d(this),n=(0,a.M9)(t),o=(0,c.vw)(this);let s;s="string"==typeof e?"*"===e?r.keys(n):[e]:e,s.forEach((e=>{o.invalidate(e),r.revert(e,n),o.commit(e)}))}};return t=(0,n._)([(0,h.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function d(e){return(0,c.vw)(e).store}let f=class extends(p(o.Z)){};f=(0,n._)([(0,h.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);var m=r(76169);const y=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return g(this).delete(e,(0,a.M9)(t))}write(e={},t){return(0,m.cW)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,c.vw)(this).setAtOrigin(e,t,(0,a.M9)(r))}removeOrigin(e){const t=g(this),r=(0,a.M9)(e),n=t.keys(r);for(const e of n)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=g(this),n=(0,a.M9)(t),o=this.get(e);for(let t=n+1;t<a.kk;++t)r.delete(e,t);r.set(e,o,n)}toJSON(e){return this.write({},e)}};return t=(0,n._)([(0,h.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function g(e){return(0,c.vw)(e).store}const v=e=>{let t=class extends(y(p(e))){constructor(...e){super(...e)}};return t=(0,n._)([(0,h.j)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(v(o.Z)){};w=(0,n._)([(0,h.j)("esri.core.MultiOriginJSONSupport")],w)},91460:(e,t,r)=>{function n(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function o(e,t,r){if(!n(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(t,r);if(Array.isArray(t)){const n=t.slice();for(const t of n)e.addEventListener(t,r);return{remove(){for(const t of n)e.removeEventListener(t,r)}}}return e.addEventListener(t,r),{remove(){e.removeEventListener(t,r)}}}function s(e,t,r){if(!n(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(t,r);const s=o(e,t,(t=>{s.remove(),r.call(e,t)}));return{remove(){s.remove()}}}r.d(t,{vT:()=>n,on:()=>o,IH:()=>s})},95330:(e,t,r)=>{r.d(t,{e4:()=>S,$6:()=>l,Ue:()=>u,zE:()=>c,dD:()=>O,hh:()=>L,vr:()=>T,Ds:()=>P,as:()=>_,WW:()=>x,R8:()=>b,D_:()=>w,Hc:()=>d,tI:()=>I,y8:()=>k,fu:()=>y,$F:()=>g,d1:()=>E,DB:()=>C,r9:()=>f,k_:()=>h,H9:()=>m,gx:()=>q,Hl:()=>v});const n=(o=r(16358).Z,{setTimeout:(e,t)=>{const r=o.setTimeout(e,t);return{remove:()=>o.clearTimeout(r)}}});var o,s=r(20102),i=r(91460),a=(r(92604),r(70586));function l(e){return Promise.all(e)}function u(e){return new Promise(((t,r)=>{try{e(t,r)}catch(e){Promise.resolve().then((()=>r(e)))}}))}function c(e="Aborted"){return new s.Z("AbortError",e)}function h(e,t="Aborted"){if(d(e))throw c(t)}function p(e){return(0,a.pC)(e)?"aborted"in e?e:e.signal:e}function d(e){const t=p(e);return(0,a.pC)(t)&&t.aborted}function f(e){if(w(e))throw e}function m(e){if(!w(e))throw e}function y(e,t){const r=p(e);if(!(0,a.Wi)(r)){if(!r.aborted)return(0,i.IH)(r,"abort",(()=>t()));t()}}function g(e,t){const r=p(e);if(!(0,a.Wi)(r))return h(r),(0,i.IH)(r,"abort",(()=>t(c())))}function v(e,t){const r=p(t);return(0,a.Wi)(r)?e:new Promise(((r,n)=>{let o=y(t,(()=>n(c())));const s=()=>o=(0,a.hw)(o);e.then(s,s),e.then(r,n)}))}function w(e){return e&&"AbortError"===e.name}function b(e){return e.catch((e=>{if(!w(e))throw e}))}function O(){let e=null;const t=new Promise(((t,r)=>{e={promise:void 0,resolve:t,reject:r}}));return e.promise=t,e}function _(e){if(!e)return;if("function"!=typeof e.forEach){const t=Object.keys(e);return _(t.map((t=>e[t]))).then((e=>{const r={};return t.forEach(((t,n)=>r[t]=e[n])),r}))}const t=e;return u((e=>{const r=[];let n=t.length;0===n&&e(r),t.forEach((t=>{const o={promise:t||Promise.resolve(t)};r.push(o),o.promise.then((e=>{o.value=e})).catch((e=>{o.error=e})).then((()=>{--n,0===n&&e(r)}))}))}))}function x(e){return _(e).then((e=>e.filter((e=>!!e.value)).map((e=>e.value))))}function E(e){return Promise.reject(e)}function C(e){return Promise.resolve(e)}function S(e,t,r){const n=new AbortController;return y(r,(()=>n.abort())),new Promise(((r,o)=>{let s=setTimeout((()=>{s=0,r(t)}),e);y(n,(()=>{s&&(clearTimeout(s),o(c()))}))}))}function k(e){return e&&"function"==typeof e.then}function q(e){return I(e)?e:Promise.resolve(e)}function I(e){return e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then}function P(e,t=-1){let r,n,o,s,i=null;const l=(...u)=>{if(r){n=u,s&&s.reject(c()),s=O();const e=(0,a.j0)(s.promise);if(i){const e=i;i=null,e.abort()}return e}if(o=s||O(),s=null,t>0){const n=new AbortController;r=q(e(...u,n.signal));const o=r;S(t).then((()=>{r===o&&(s?n.abort():i=n)}))}else r=1,r=q(e(...u));const h=()=>{const e=n;n=o=r=i=null,null!=e&&l(...e)},p=r,d=o;return p.then(h,h),p.then(d.resolve,d.reject),(0,a.j0)(d.promise)};return l}function L(){let e,t;const r=new Promise(((r,n)=>{e=r,t=n})),o=t=>{e(t)};return o.resolve=t=>e(t),o.reject=e=>t(e),o.timeout=(e,t)=>n.setTimeout((()=>o.reject(t)),e),o.promise=r,o}function T(e){let t=new AbortController;const r=e(t.signal);let n={promise:r,finished:!1,abort:()=>{t&&(t.abort(),t=null)}};const o=()=>{n&&(n.finished=!0,n=null),t=null};return r.then(o,o),n}},17452:(e,t,r)=>{r.d(t,{R9:()=>v,qg:()=>k,tD:()=>L,ZN:()=>ue,fl:()=>ce,AX:()=>O,Gd:()=>w,Ie:()=>ie,sJ:()=>K,AH:()=>B,vt:()=>oe,oh:()=>U,P$:()=>H,Ml:()=>he,ed:()=>T,b7:()=>S,D6:()=>j,tm:()=>$,YP:()=>F,jc:()=>J,HK:()=>W,$U:()=>V,oC:()=>X,kl:()=>M,v_:()=>G,hF:()=>A,_l:()=>Y,PF:()=>D,Fv:()=>N,B7:()=>C,u0:()=>x,Yd:()=>ne,Hu:()=>le,Qj:()=>se,hO:()=>ee,mN:()=>_});var n=r(68773),o=r(20102),s=(r(16358),r(92604)),i=r(70586);const a=s.Z.getLogger("esri.core.urlUtils"),l=n.Z.request,u="esri/config: esriConfig.request.proxyUrl is not set.",c=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,h=/^\s*http:/i,p=/^\s*https:/i,d=/^\s*file:/i,f=/:\d+$/,m=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,y=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),g=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class v{constructor(e=""){this.uri=e,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let t=(0,i.j0)(this.uri.match(y));this.scheme=t[2]||(t[1]?"":null),this.authority=t[4]||(t[3]?"":null),this.path=t[5],this.query=t[7]||(t[6]?"":null),this.fragment=t[9]||(t[8]?"":null),null!=this.authority&&(t=(0,i.j0)(this.authority.match(g)),this.user=t[3]||null,this.password=t[4]||null,this.host=t[6]||t[7],this.port=t[9]||null)}toString(){return this.uri}}const w=new v(n.Z.applicationUrl),b={},O=(()=>{const e=(0,i.j0)(w.path),t=e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]));return`${w.scheme}://${w.host}${null!=w.port?`:${w.port}`:""}${t}`})();function _(e){const t={path:null,query:null},r=new v(e),n=e.indexOf("?");return null===r.query?t.path=e:(t.path=e.substring(0,n),t.query=x(r.query)),r.fragment&&(t.hash=r.fragment,null===r.query&&(t.path=t.path.substring(0,t.path.length-(r.fragment.length+1)))),t}function x(e){const t=e.split("&"),r={};for(const e of t){if(!e)continue;const t=e.indexOf("=");let n,o;t<0?(n=decodeURIComponent(e),o=""):(n=decodeURIComponent(e.slice(0,t)),o=decodeURIComponent(e.slice(t+1)));let s=r[n];"string"==typeof s&&(s=r[n]=[s]),Array.isArray(s)?s.push(o):r[n]=o}return r}function E(e){return e&&"object"==typeof e&&"toJSON"in e&&"function"==typeof e.toJSON}function C(e,t){return e?t&&"function"==typeof t?Object.keys(e).map((r=>encodeURIComponent(r)+"="+encodeURIComponent(t(r,e[r])))).join("&"):Object.keys(e).map((r=>{const n=e[r];if(null==n)return"";const o=encodeURIComponent(r)+"=",s=t&&t[r];return s?o+encodeURIComponent(s(n)):Array.isArray(n)?n.map((e=>E(e)?o+encodeURIComponent(JSON.stringify(e)):o+encodeURIComponent(e))).join("&"):E(n)?o+encodeURIComponent(JSON.stringify(n)):o+encodeURIComponent(n)})).filter((e=>e)).join("&"):""}function S(e=!1){let t,r=l.proxyUrl;if("string"==typeof e){t=V(e);const n=T(e);n&&(r=n.proxyUrl)}else t=!!e;if(!r)throw a.warn(u),new o.Z("urlutils:proxy-not-set",u);return t&&te()&&(r=ee(r)),_(r)}function k(e){const t=T(e);let r,n;if(t){const e=I(t.proxyUrl);r=e.path,n=e.query?x(e.query):null}if(r){const t=_(e);e=r+"?"+t.path;const o=C({...n,...t.query});o&&(e=`${e}?${o}`)}return e}const q={path:"",query:""};function I(e){const t=e.indexOf("?");return-1!==t?(q.path=e.slice(0,t),q.query=e.slice(t+1)):(q.path=e,q.query=null),q}function P(e){return(e=re(e=function(e){return e&&"/"===e[e.length-1]?e:`${e}/`}(e=I(e).path),!0)).toLowerCase()}function L(e){const t={proxyUrl:e.proxyUrl,urlPrefix:P(e.urlPrefix)},r=l.proxyRules,n=t.urlPrefix;let o=r.length;for(let e=0;e<r.length;e++){const t=r[e].urlPrefix;if(0===n.indexOf(t)){if(n.length===t.length)return-1;o=e;break}0===t.indexOf(n)&&(o=e+1)}return r.splice(o,0,t),o}function T(e){const t=l.proxyRules,r=P(e);for(let e=0;e<t.length;e++)if(0===r.indexOf(t[e].urlPrefix))return t[e]}function $(e,t){return e=Z(e),t=Z(t),re(e)===re(t)}function Z(e){const t=(e=N(e)).indexOf("/sharing");return t>0?e.substring(0,t):e.replace(/\/+$/,"")}function U(e){const t=t=>null==t||t instanceof RegExp&&t.test(e)||"string"==typeof t&&e.startsWith(t),r=l.interceptors;if(r)for(const e of r)if(Array.isArray(e.urls)){if(e.urls.some(t))return e}else if(t(e.urls))return e;return null}function j(e,t,r=!1){const n=ae(e),o=ae(t);return!(!r&&n.scheme!==o.scheme)&&null!=n.host&&null!=o.host&&n.host.toLowerCase()===o.host.toLowerCase()&&n.port===o.port}function M(e){if("string"==typeof e){if(!F(e))return!0;e=ae(e)}if(j(e,w))return!0;const t=l.trustedServers||[];for(let r=0;r<t.length;r++){const n=R(t[r]);for(let t=0;t<n.length;t++)if(j(e,n[t]))return!0}return!1}function R(e){return b[e]||(Q(e)||X(e)?b[e]=[new v(A(e))]:b[e]=[new v(`http://${e}`),new v(`https://${e}`)]),b[e]}function A(e,t=O,r){return X(e)?r&&r.preserveProtocolRelative?e:"http"===w.scheme&&w.authority===H(e).slice(2)?`http:${e}`:`https:${e}`:Q(e)?e:(0,i.j0)(G("/"===e[0]?function(e){const t=e.indexOf("//"),r=e.indexOf("/",t+2);return-1===r?e:e.slice(0,r)}(t):t,e))}function D(e,t=O,r){if(!F(e))return e;const n=N(e),o=n.toLowerCase(),s=N(t).toLowerCase().replace(/\/+$/,""),i=r?N(r).toLowerCase().replace(/\/+$/,""):null;if(i&&0!==s.indexOf(i))return e;const a=(e,t,r)=>-1===(r=e.indexOf(t,r))?e.length:r;let l=a(o,"/",o.indexOf("//")+2),u=-1;for(;o.slice(0,l+1)===s.slice(0,l)+"/"&&(u=l+1,l!==o.length);)l=a(o,"/",l+1);if(-1===u)return e;if(i&&u<i.length)return e;e=n.slice(u);const c=s.slice(u-1).replace(/[^/]+/g,"").length;if(c>0)for(let t=0;t<c;t++)e=`../${e}`;else e=`./${e}`;return e}function N(e){return function(e){const t=l.httpsDomains;if(!function(e){return h.test(e)||"http"===w.scheme&&X(e)}(e))return e;const r=e.indexOf("/",7);let n;if(n=-1===r?e:e.slice(0,r),n=n.toLowerCase().slice(7),f.test(n)){if(!n.endsWith(":80"))return e;n=n.slice(0,-3),e=e.replace(":80","")}return"http"===w.scheme&&n===w.authority&&!m.test(e)||(te()&&n===w.authority||t&&t.some((e=>n===e||n.endsWith(`.${e}`)))||te()&&!T(e))&&(e=ee(e)),e}(e=function(e){return e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}(e=function(e){if(/^https?:\/\//i.test(e)){const t=I(e);e=(e=t.path.replace(/\/{2,}/g,"/")).replace("/","//"),t.query&&(e+=`?${t.query}`)}return e}(e=A(e=e.trim()))))}function G(...e){const t=e.filter(i.pC);if(!t||!t.length)return;const r=[];if(F(t[0])){const e=t[0],n=e.indexOf("//");-1!==n&&(r.push(e.slice(0,n+1)),function(e){return d.test(e)}(t[0])&&(r[0]+="/"),t[0]=e.slice(n+2))}else"/"===t[0][0]&&r.push("");const n=t.reduce(((e,t)=>t?e.concat(t.split("/")):e),[]);for(let e=0;e<n.length;e++){const t=n[e];".."===t&&r.length>0&&".."!==r[r.length-1]?r.pop():(!t&&e===n.length-1||t&&("."!==t||0===r.length))&&r.push(t)}return r.join("/")}function H(e,t=!1){if(J(e)||W(e))return null;let r=e.indexOf("://");if(-1===r&&X(e))r=2;else{if(-1===r)return null;r+=3}const n=e.indexOf("/",r);return-1!==n&&(e=e.slice(0,n)),t&&(e=re(e,!0)),e}function F(e){return X(e)||Q(e)}function J(e){return null!=e&&"blob:"===e.slice(0,5)}function W(e){return"data:"===e.slice(0,5)}function B(e){const t=K(e);if(!t||!t.isBase64)return null;const r=atob(t.data),n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n.buffer}const z=/^data:(.*?)(;base64)?,(.*)$/;function K(e){const t=e.match(z);if(!t)return null;const[,r,n,o]=t;return{mediaType:r,isBase64:!!n,data:o}}function Y(e){return e.isBase64?`data:${e.mediaType};base64,${e.data}`:`data:${e.mediaType},${e.data}`}function X(e){return null!=e&&void 0!==e&&"/"===e[0]&&"/"===e[1]}function Q(e){return c.test(e)}function V(e){return p.test(e)||"https"===w.scheme&&X(e)}function ee(e){return X(e)?`https:${e}`:e.replace(h,"https:")}function te(){return"https"===w.scheme}function re(e,t=!1){return X(e)?e.slice(2):(e=e.replace(c,""),t&&e.length>1&&"/"===e[0]&&"/"===e[1]&&(e=e.slice(2)),e)}function ne(e){let t=0;if(F(e)){const r=e.indexOf("//");-1!==r&&(t=r+2)}const r=e.lastIndexOf("/");return r<t?e:e.slice(0,r+1)}function oe(e,t){if(!e)return"";const r=_(e).path.replace(/\/+$/,""),n=r.substring(r.lastIndexOf("/")+1);if(null==t||!t.length)return n;const o=new RegExp(`.(${t.join("|")})$`,"ig");return n.replace(o,"")}function se(e){return e.replace(/\/+$/,"")}function ie(e,t,r){if(!(t&&r&&e&&F(e)))return e;const n=e.indexOf("//"),o=e.indexOf("/",n+2),s=e.indexOf(":",n+2),i=Math.min(o<0?e.length:o,s<0?e.length:s);return e.slice(n+2,i).toLowerCase()!==t.toLowerCase()?e:`${e.slice(0,n+2)}${r}${e.slice(i)}`}function ae(e){return"string"==typeof e?new v(A(e)):(e.scheme||(e.scheme=w.scheme),e)}function le(e,t){const r=_(e),n=Object.keys(r.query||{});return n.length>0&&t&&t.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${n.join(", ")}.`),r.path}function ue(e,t,r){const n=_(e),o=n.query||{};return o[t]=String(r),`${n.path}?${C(o)}`}function ce(e,t){const r=_(e),n=r.query||{};for(const e in t)n[e]=t[e];const o=C(n);return o?`${r.path}?${o}`:r.path}function he(e){if((0,i.Wi)(e))return null;const t=e.match(pe);return t?t[1]:null}const pe=/.*?\.([^\/]*)$/},66577:(e,t,r)=>{r.d(t,{qM:()=>c});var n=r(75215),o=r(6570),s=r(9361),i=r(65091),a=r(13473),l=r(17332),u=r(58901);r(82971),r(86973),r(33955);const c={base:s.Z,key:"type",typeMap:{extent:o.Z,multipoint:i.Z,point:a.Z,polyline:u.Z,polygon:l.Z}};(0,n.N7)(c)},33955:(e,t,r)=>{r.d(t,{im:()=>m,q9:()=>v,Ji:()=>y,YX:()=>c,aW:()=>h,wp:()=>p,oU:()=>f,l9:()=>d});var n=r(70586),o=r(6570),s=r(9361),i=r(65091),a=r(13473),l=r(17332),u=r(58901);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function h(e){return void 0!==e.points}function p(e){return void 0!==e.x&&void 0!==e.y}function d(e){return void 0!==e.paths}function f(e){return void 0!==e.rings}function m(e){return(0,n.Wi)(e)?null:e instanceof s.Z?e:p(e)?a.Z.fromJSON(e):d(e)?u.Z.fromJSON(e):f(e)?l.Z.fromJSON(e):h(e)?i.Z.fromJSON(e):c(e)?o.Z.fromJSON(e):null}function y(e){return e?p(e)?"esriGeometryPoint":d(e)?"esriGeometryPolyline":f(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":h(e)?"esriGeometryMultipoint":null:null}const g={esriGeometryPoint:a.Z,esriGeometryPolyline:u.Z,esriGeometryPolygon:l.Z,esriGeometryEnvelope:o.Z,esriGeometryMultipoint:i.Z};function v(e){return e&&g[e]||null}},86973:(e,t,r)=>{r.d(t,{Mk:()=>o,P$:()=>s});var n=r(35454);const o=(0,n.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=(0,n.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},40330:(e,t,r)=>{r.d(t,{Dp:()=>u,id:()=>a,qh:()=>l,i8:()=>s,Nv:()=>i});var n=r(80442),o=r(17452);const s="4.22",i={async request(e,t){var n;const{default:s}=await r.e(3172).then(r.bind(r,3172)),i=e.options,a=i.responseType;i.signal=null==t?void 0:t.signal,i.responseType="native"===a||"native-request-init"===a?"native-request-init":["blob","json","text"].includes(a)&&null!=(n=(0,o.oh)(e.url))&&n.after?a:"array-buffer";const l=await s(e.url,i),u={data:l.data,ssl:l.ssl};switch(l.requestOptions.responseType){case"native-request-init":return delete u.data.signal,u;case"blob":u.data=await u.data.arrayBuffer();break;case"json":u.data=(new TextEncoder).encode(JSON.stringify(u.data)).buffer;break;case"text":u.data=(new TextEncoder).encode(u.data).buffer}return{result:u,transferList:[u.data]}}};let a;function l(e){a=e}function u(e){const t=a&&a.findCredential(e);return t&&t.token?(0,o.ZN)(e,"token",t.token):e}(0,n.Z)("host-webworker")||((0,n.Z)("edge")||(0,n.Z)("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser")},29600:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(43697),o=r(68773),s=(r(66577),r(3172)),i=r(20102),a=r(32448),l=r(10699),u=r(83379),c=r(92604),h=r(95330),p=r(17452),d=r(5600),f=(r(67676),r(80442),r(75215),r(52011)),m=r(6570),y=r(82971);let g=0;const v=c.Z.getLogger("esri.layers.Layer");let w=class extends(a.Z.EventedMixin((0,l.I)(u.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.Z(-180,-90,180,90,y.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=y.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,n=await r.e(3529).then(r.bind(r,63529));try{return await n.fromUrl(t)}catch(e){throw v.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},n=await r.e(8008).then(r.bind(r,28008));try{return await n.fromItem(t)}catch(e){const r=t&&t.portalItem,n=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||o.Z.portalUrl;throw v.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+n+"')",e),e}}initialize(){this.when().catch((e=>{var t,r;(0,h.D_)(e)||c.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,p.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,s.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new i.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,n._)([(0,d.Cb)({type:String})],w.prototype,"attributionDataUrl",void 0),(0,n._)([(0,d.Cb)({type:m.Z})],w.prototype,"fullExtent",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],w.prototype,"hasAttributionData",null),(0,n._)([(0,d.Cb)({type:String})],w.prototype,"id",void 0),(0,n._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],w.prototype,"legendEnabled",void 0),(0,n._)([(0,d.Cb)({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),(0,n._)([(0,d.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],w.prototype,"opacity",void 0),(0,n._)([(0,d.Cb)()],w.prototype,"parent",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],w.prototype,"parsedUrl",null),(0,n._)([(0,d.Cb)({type:Boolean})],w.prototype,"popupEnabled",void 0),(0,n._)([(0,d.Cb)({type:Boolean})],w.prototype,"attributionVisible",void 0),(0,n._)([(0,d.Cb)({type:y.Z})],w.prototype,"spatialReference",void 0),(0,n._)([(0,d.Cb)({type:String})],w.prototype,"title",void 0),(0,n._)([(0,d.Cb)({type:String,readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),(0,n._)([(0,d.Cb)()],w.prototype,"url",void 0),(0,n._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],w.prototype,"visible",void 0),w=(0,n._)([(0,f.j)("esri.layers.Layer")],w);const b=w},44166:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(43697),o=r(20102),s=r(16453),i=r(90584),a=r(5600),l=(r(67676),r(80442),r(75215),r(52011)),u=r(29600),c=r(16859);let h=class extends((0,c.I)((0,s.R)(u.Z))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((e,t)=>{(0,i.Os)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";e&&(r+=" "+e),t(new o.Z("layer:unknown-layer-type",r,{layerType:e}))}))})))}read(e,t){super.read({resourceInfo:e},t)}write(){return null}};(0,n._)([(0,a.Cb)({readOnly:!0})],h.prototype,"resourceInfo",void 0),(0,n._)([(0,a.Cb)({type:["show","hide"]})],h.prototype,"listMode",void 0),(0,n._)([(0,a.Cb)({json:{read:!1},readOnly:!0,value:"unknown"})],h.prototype,"type",void 0),h=(0,n._)([(0,l.j)("esri.layers.UnknownLayer")],h);const p=h},16859:(e,t,r)=>{r.d(t,{I:()=>b});var n=r(43697),o=r(40330),s=r(3172),i=r(66643),a=r(20102),l=r(92604),u=r(70586),c=r(95330),h=r(17452),p=r(5600),d=(r(67676),r(80442),r(75215),r(71715)),f=r(52011),m=r(30556),y=r(65587),g=r(15235),v=r(86082);const w=l.Z.getLogger("esri.layers.mixins.PortalLayer"),b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const n=await r.e(8062).then(r.bind(r,18062));return(0,c.k_)(t),await n.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,c.D_)(e)||w.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this.fetchUserHasEditingPrivileges(e).catch((e=>((0,c.r9)(e),!0))))}async fetchUserHasEditingPrivileges(e){const t=this.url?null==o.id?void 0:o.id.findCredential(this.url):null;if(!t)return!0;const r=O.credential===t?O.user:await this.fetchEditingUser(e);return O.credential=t,O.user=r,(0,u.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async fetchEditingUser(e){var t,r;const n=null==(t=this.portalItem)||null==(r=t.portal)?void 0:r.user;if(n)return n;const a=o.id.findServerInfo(this.url);if(null==a||!a.owningSystemUrl)return null;const l=`${a.owningSystemUrl}/sharing/rest`,c=y.Z.getDefault();if(c&&c.loaded&&(0,h.Fv)(c.restUrl)===(0,h.Fv)(l))return c.user;const p=`${l}/community/self`,d=(0,u.pC)(e)?e.signal:null,f=await(0,i.q6)((0,s.default)(p,{authMode:"no-prompt",query:{f:"json"},signal:d}));return f.ok?v.default.fromJSON(f.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,n=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||y.Z.getDefault());return r&&n&&!(0,h.tm)(n.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,n._)([(0,p.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,n._)([(0,d.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,n._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,n._)([(0,p.Cb)()],t.prototype,"resourceReferences",void 0),(0,n._)([(0,p.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,n._)([(0,f.j)("esri.layers.mixins.PortalLayer")],t),t},O={credential:null,user:null}},3172:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(68773),o=r(40330),s=r(20102),i=r(16358),a=r(80442),l=r(22974),u=r(70586),c=r(95330),h=r(17452),p=r(71058),d=r(85958);async function f(e,t){var l;const d=(0,h.HK)(e),v=(0,h.jc)(e);v||d||(e=(0,h.Fv)(e));const w={url:e,requestOptions:{...(0,u.Wg)(t)}};let b=(0,h.oh)(e);if(b){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=E("request:interceptor",e,t)}if((n instanceof Error||n instanceof s.Z)&&(r=E("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(b,w);if(null!=e)return{data:e,getHeader:O,requestOptions:w.requestOptions,url:w.url};b.after||b.error||(b=null)}if(e=w.url,"image"===(t=w.requestOptions).responseType){if((0,a.Z)("host-webworker")||(0,a.Z)("host-node"))throw E("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),w)}else if(d)throw E("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),w);if("head"===t.method){if(t.body)throw E("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),w);if(d||v)throw E("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),w)}if(await async function(){(0,a.Z)("host-webworker")?m||(m=await Promise.all([r.e(102),r.e(9884)]).then(r.bind(r,29884))):f._abortableFetch||(f._abortableFetch=i.Z.fetch.bind(i.Z))}(),m)return m.execute(e,t);const _=new AbortController;(0,c.fu)(t,(()=>_.abort()));const x={controller:_,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:b,params:w,redoRequest:!1,useIdentity:y.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},q=await async function(e){var t,r;let s,a;await async function(e){const t=e.params.url,r=e.params.requestOptions,s=e.controller.signal,a=r.body;let l=null,u=null,h=null;if(g&&"HTMLFormElement"in i.Z&&(a instanceof FormData?l=a:a instanceof HTMLFormElement&&(u=a,l=new FormData(u))),"string"==typeof a&&(h=a),e.fetchOptions={cache:r.cacheBust&&!f._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:s},(l||h)&&(e.fetchOptions.body=l||h),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||l&&l.get&&l.get("token")||u&&u.elements.token),!e.hasToken&&n.Z.apiKey&&(0,p.r)(t)&&(r.query||(r.query={}),r.query.token=n.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!S(t)&&!(0,c.Hc)(s)){let n;"immediate"===r.authMode?(await C(),n=await o.id.getCredential(t,{signal:s}),e.credential=n):"no-prompt"===r.authMode?(await C(),n=await o.id.getCredential(t,{prompt:!1,signal:s}).catch((()=>{})),e.credential=n):o.id&&(n=o.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[s,a]=await k(e)}while(!await I(e,s,a))}catch(t){const r=E("request:server",t,e.params,s);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const l=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(l)&&!e.hasToken&&!e.credentialToken&&null!=(t=a)&&null!=(r=t.user)&&r.username&&!(0,h.kl)(l)){const e=(0,h.P$)(l,!0);e&&y.trustedServers.push(e)}const u=e.credential;if(u&&o.id){const e=o.id.findServerInfo(u.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,u.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:a,getHeader:s?e=>s.headers.get(e):O,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(x);return null==(l=b)||null==l.after||l.after(q),q}let m;const y=n.Z.request,g="FormData"in i.Z,v=[499,498,403,401],w=["COM_0056","COM_0057","SB_0008"],b=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],O=()=>null,_=Symbol();function x(e){const t=(0,h.P$)(e);return!t||t.endsWith(".arcgis.com")||f._corsServers.includes(t)||(0,h.kl)(t)}function E(e,t,r,n){let o="Error";const i={url:r.url,requestOptions:r.requestOptions,getHeader:O,ssl:!1};if(t instanceof s.Z)return t.details?(t.details=(0,l.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=i,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(o=s),e&&(i.getHeader=e),i.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,i.subCode=t.subcode,i.messageCode=t.messageCode,"string"==typeof t.details?i.messages=[t.details]:i.messages=t.details,i.raw=_ in t?t[_]:t}return(0,c.D_)(t)?(0,c.zE)():new s.Z(e,o,i)}async function C(){o.id||await Promise.all([r.e(7824),r.e(8778),r.e(102),r.e(9625)]).then(r.bind(r,79339))}function S(e){return b.some((t=>t.test(e)))}async function k(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions,s=(0,h.jc)(t)||(0,h.HK)(t),i=r.responseType||"json",l=s?0:null!=r.timeout?r.timeout:y.timeout;let u=!1;if(!s){e.useSSL&&(t=(0,h.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,h.ZN)(t,"request.preventCache",Date.now()));let s={...r.query};e.credentialToken&&(s.token=e.credentialToken);let i=(0,h.B7)(s);(0,a.Z)("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=t.length+1+i.length;let c;u="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>y.maxUrlLength;const p=r.useProxy||!!(0,h.ed)(t);if(p){const e=(0,h.b7)(t);c=e.path,!u&&c.length+1+l>y.maxUrlLength&&(u=!0),e.query&&(s={...e.query,...s})}if("HEAD"===n.method&&(u||p)){if(u){if(l>y.maxUrlLength)throw E("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw E("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(p)throw E("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(u?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,h.fl)(t,s):(n.body=(0,h.B7)(s),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,h.fl)(t,s),p&&(e.useProxy=!0,t=`${c}?${t}`),s.token&&g&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",s.token):e.append("token",s.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,h.D6)(t,h.Gd))if((0,h.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include")}let p,d,m=0,v=!1;l>0&&(m=setTimeout((()=>{v=!0,e.controller.abort()}),l));try{if("native-request-init"===r.responseType)d=n,d.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||u||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!s&&!e.useProxy&&y.proxyUrl&&!x(t)){if(p=await f._abortableFetch(t,n),e.useProxy||function(e){const t=(0,h.P$)(e);t&&!f._corsServers.includes(t)&&f._corsServers.push(t)}(t),"native"===r.responseType)d=p;else if("HEAD"!==n.method)if(p.ok){switch(i){case"array-buffer":d=await p.arrayBuffer();break;case"blob":case"image":d=await p.blob();break;default:d=await p.text()}if(m&&(clearTimeout(m),m=0),"json"===i||"xml"===i||"document"===i)if(d)switch(i){case"json":d=JSON.parse(d);break;case"xml":d=q(d,"application/xml");break;case"document":d=q(d,"text/html")}else d=null;if(d){if("array-buffer"===i||"blob"===i){const e=p.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&d["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(d).json();e.error&&(d=e)}catch{}}"image"===i&&d instanceof Blob&&(d=await P(URL.createObjectURL(d),e,!0))}}else d=await p.text()}else d=await P(t,e)}catch(n){if("AbortError"===n.name){if(v)throw new Error("Timeout exceeded");throw(0,c.zE)("Request canceled")}if(!(!p&&n instanceof TypeError&&y.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||x(t))throw n;e.redoRequest=!0,(0,h.tD)({proxyUrl:y.proxyUrl,urlPrefix:(0,h.P$)(t)})}finally{m&&clearTimeout(m)}return[p,d]}function q(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function I(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let s,i,a,l;if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[_]=r,s;null!=r&&r.error&&(s=r.error),s&&(i=Number(s.code),a=s.hasOwnProperty("subcode")?Number(s.subcode):null,l=s.messageCode,l=l&&l.toUpperCase());const u=n.authMode;if(403===i&&(4===a||s.message&&s.message.toLowerCase().indexOf("ssl")>-1&&-1===s.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===i)&&-1!==v.indexOf(i)&&!S(e.params.url)&&(403!==i||-1===w.indexOf(l)&&(null==a||2===a&&e.credentialToken))){await C();try{const t=await o.id.getCredential(e.params.url,{error:E("request:server",s,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;s=t}}if(s)throw s;return!0}function P(e,t,r=!1){const n=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,(0,d.f)(o,e,r,n)}f._abortableFetch=null,f._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},71058:(e,t,r)=>{r.d(t,{r:()=>s});var n=r(17452);const o=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function s(e){const t=(0,n.P$)(e,!0);return t&&t.endsWith(".arcgis.com")&&!o.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},85958:(e,t,r)=>{r.d(t,{f:()=>i});var n=r(80442),o=r(70586),s=r(95330);function i(e,t,r=!1,i){return new Promise(((l,u)=>{if((0,s.Hc)(i))return void u(a());let c=()=>{d(),u(new Error(`Unable to load ${t}`))},h=()=>{const t=e;d(),l(t)},p=()=>{if(!e)return;const t=e;d(),t.src="",u(a())};const d=()=>{(0,n.Z)("esri-image-decode")||(e.removeEventListener("error",c),e.removeEventListener("load",h)),c=null,h=null,e=null,(0,o.pC)(i)&&i.removeEventListener("abort",p),p=null,r&&URL.revokeObjectURL(t)};(0,o.pC)(i)&&i.addEventListener("abort",p),(0,n.Z)("esri-image-decode")?e.decode().then(h,c):(e.addEventListener("error",c),e.addEventListener("load",h))}))}function a(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}}}]);