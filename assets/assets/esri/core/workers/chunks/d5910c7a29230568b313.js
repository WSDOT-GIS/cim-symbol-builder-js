"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9151],{91460:(e,t,n)=>{function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function i(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(t,n);if(Array.isArray(t)){const r=t.slice();for(const t of r)e.addEventListener(t,n);return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function s(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(t,n);const s=i(e,t,(t=>{s.remove(),n.call(e,t)}));return{remove(){s.remove()}}}n.d(t,{vT:()=>r,on:()=>i,IH:()=>s})},95330:(e,t,n)=>{n.d(t,{e4:()=>I,$6:()=>a,Ue:()=>c,zE:()=>u,dD:()=>$,hh:()=>q,vr:()=>U,Ds:()=>P,as:()=>_,WW:()=>x,R8:()=>b,D_:()=>w,Hc:()=>p,tI:()=>A,y8:()=>E,fu:()=>y,$F:()=>v,d1:()=>C,DB:()=>O,r9:()=>m,k_:()=>h,H9:()=>d,gx:()=>T,Hl:()=>g});const r=(i=globalThis,{setTimeout:(e,t)=>{const n=i.setTimeout(e,t);return{remove:()=>i.clearTimeout(n)}}});var i,s=n(20102),l=n(91460),o=(n(92604),n(70586));function a(e){return Promise.all(e)}function c(e){return new Promise(((t,n)=>{try{e(t,n)}catch(e){Promise.resolve().then((()=>n(e)))}}))}function u(e="Aborted"){return new s.Z("AbortError",e)}function h(e,t="Aborted"){if(p(e))throw u(t)}function f(e){return(0,o.pC)(e)?"aborted"in e?e:e.signal:e}function p(e){const t=f(e);return(0,o.pC)(t)&&t.aborted}function m(e){if(w(e))throw e}function d(e){if(!w(e))throw e}function y(e,t){const n=f(e);if(!(0,o.Wi)(n)){if(!n.aborted)return(0,l.IH)(n,"abort",(()=>t()));t()}}function v(e,t){const n=f(e);if(!(0,o.Wi)(n))return h(n),(0,l.IH)(n,"abort",(()=>t(u())))}function g(e,t){const n=f(t);return(0,o.Wi)(n)?e:new Promise(((n,r)=>{let i=y(t,(()=>r(u())));const s=()=>i=(0,o.hw)(i);e.then(s,s),e.then(n,r)}))}function w(e){return e&&"AbortError"===e.name}function b(e){return e.catch((e=>{if(!w(e))throw e}))}function $(){let e=null;const t=new Promise(((t,n)=>{e={promise:void 0,resolve:t,reject:n}}));return e.promise=t,e}function _(e){if(!e)return;if("function"!=typeof e.forEach){const t=Object.keys(e);return _(t.map((t=>e[t]))).then((e=>{const n={};return t.forEach(((t,r)=>n[t]=e[r])),n}))}const t=e;return c((e=>{const n=[];let r=t.length;0===r&&e(n),t.forEach((t=>{const i={promise:t||Promise.resolve(t)};n.push(i),i.promise.then((e=>{i.value=e})).catch((e=>{i.error=e})).then((()=>{--r,0===r&&e(n)}))}))}))}function x(e){return _(e).then((e=>e.filter((e=>!!e.value)).map((e=>e.value))))}function C(e){return Promise.reject(e)}function O(e){return Promise.resolve(e)}function I(e,t,n){const r=new AbortController;return y(n,(()=>r.abort())),new Promise(((n,i)=>{let s=setTimeout((()=>{s=0,n(t)}),e);y(r,(()=>{s&&(clearTimeout(s),i(u()))}))}))}function E(e){return e&&"function"==typeof e.then}function T(e){return A(e)?e:Promise.resolve(e)}function A(e){return e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then}function P(e,t=-1){let n,r,i,s,l=null;const a=(...c)=>{if(n){r=c,s&&s.reject(u()),s=$();const e=(0,o.j0)(s.promise);if(l){const e=l;l=null,e.abort()}return e}if(i=s||$(),s=null,t>0){const r=new AbortController;n=T(e(...c,r.signal));const i=n;I(t).then((()=>{n===i&&(s?r.abort():l=r)}))}else n=1,n=T(e(...c));const h=()=>{const e=r;r=i=n=l=null,null!=e&&a(...e)},f=n,p=i;return f.then(h,h),f.then(p.resolve,p.reject),(0,o.j0)(p.promise)};return a}function q(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r})),i=t=>{e(t)};return i.resolve=t=>e(t),i.reject=e=>t(e),i.timeout=(e,t)=>r.setTimeout((()=>i.reject(t)),e),i.promise=n,i}function U(e,t){let n,r=new AbortController;const i=e(r.signal);let s={promise:i,finished:!1,abort:()=>{r&&(r.abort(),r=null)}};const l=()=>{s&&(s.finished=!0,s=null),(0,o.pC)(n)&&(n.remove(),n=null),r=null};return i.then(l,l),n=y(t,(()=>{(0,o.pC)(s)&&s.abort()})),s}},17452:(e,t,n)=>{n.d(t,{R9:()=>g,qg:()=>E,tD:()=>q,ZN:()=>ce,fl:()=>ue,AX:()=>$,Gd:()=>w,Ie:()=>le,sJ:()=>Q,AH:()=>M,vt:()=>ie,oh:()=>S,P$:()=>J,Ml:()=>he,ed:()=>U,b7:()=>I,D6:()=>D,tm:()=>j,YP:()=>F,jc:()=>B,HK:()=>W,$U:()=>V,oC:()=>G,kl:()=>Z,v_:()=>H,hF:()=>R,_l:()=>Y,PF:()=>z,Fv:()=>N,B7:()=>O,u0:()=>x,Yd:()=>re,Hu:()=>ae,Qj:()=>se,hO:()=>ee,mN:()=>_});var r=n(68773),i=n(20102),s=n(92604),l=n(70586);const o=s.Z.getLogger("esri.core.urlUtils"),a=r.Z.request,c="esri/config: esriConfig.request.proxyUrl is not set.",u=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,h=/^\s*http:/i,f=/^\s*https:/i,p=/^\s*file:/i,m=/:\d+$/,d=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,y=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),v=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class g{constructor(e=""){this.uri=e,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let t=(0,l.j0)(this.uri.match(y));this.scheme=t[2]||(t[1]?"":null),this.authority=t[4]||(t[3]?"":null),this.path=t[5],this.query=t[7]||(t[6]?"":null),this.fragment=t[9]||(t[8]?"":null),null!=this.authority&&(t=(0,l.j0)(this.authority.match(v)),this.user=t[3]||null,this.password=t[4]||null,this.host=t[6]||t[7],this.port=t[9]||null)}toString(){return this.uri}}const w=new g(r.Z.applicationUrl),b={},$=(()=>{const e=(0,l.j0)(w.path),t=e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]));return`${w.scheme}://${w.host}${null!=w.port?`:${w.port}`:""}${t}`})();function _(e){const t={path:null,query:null},n=new g(e),r=e.indexOf("?");return null===n.query?t.path=e:(t.path=e.substring(0,r),t.query=x(n.query)),n.fragment&&(t.hash=n.fragment,null===n.query&&(t.path=t.path.substring(0,t.path.length-(n.fragment.length+1)))),t}function x(e){const t=e.split("&"),n={};for(const e of t){if(!e)continue;const t=e.indexOf("=");let r,i;t<0?(r=decodeURIComponent(e),i=""):(r=decodeURIComponent(e.slice(0,t)),i=decodeURIComponent(e.slice(t+1)));let s=n[r];"string"==typeof s&&(s=n[r]=[s]),Array.isArray(s)?s.push(i):n[r]=i}return n}function C(e){return e&&"object"==typeof e&&"toJSON"in e&&"function"==typeof e.toJSON}function O(e,t){return e?t&&"function"==typeof t?Object.keys(e).map((n=>encodeURIComponent(n)+"="+encodeURIComponent(t(n,e[n])))).join("&"):Object.keys(e).map((n=>{const r=e[n];if(null==r)return"";const i=encodeURIComponent(n)+"=",s=t&&t[n];return s?i+encodeURIComponent(s(r)):Array.isArray(r)?r.map((e=>C(e)?i+encodeURIComponent(JSON.stringify(e)):i+encodeURIComponent(e))).join("&"):C(r)?i+encodeURIComponent(JSON.stringify(r)):i+encodeURIComponent(r)})).filter((e=>e)).join("&"):""}function I(e=!1){let t,n=a.proxyUrl;if("string"==typeof e){t=V(e);const r=U(e);r&&(n=r.proxyUrl)}else t=!!e;if(!n)throw o.warn(c),new i.Z("urlutils:proxy-not-set",c);return t&&te()&&(n=ee(n)),_(n)}function E(e){const t=U(e);let n,r;if(t){const e=A(t.proxyUrl);n=e.path,r=e.query?x(e.query):null}if(n){const t=_(e);e=n+"?"+t.path;const i=O({...r,...t.query});i&&(e=`${e}?${i}`)}return e}const T={path:"",query:""};function A(e){const t=e.indexOf("?");return-1!==t?(T.path=e.slice(0,t),T.query=e.slice(t+1)):(T.path=e,T.query=null),T}function P(e){return(e=ne(e=function(e){return e&&"/"===e[e.length-1]?e:`${e}/`}(e=A(e).path),!0)).toLowerCase()}function q(e){const t={proxyUrl:e.proxyUrl,urlPrefix:P(e.urlPrefix)},n=a.proxyRules,r=t.urlPrefix;let i=n.length;for(let e=0;e<n.length;e++){const t=n[e].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return-1;i=e;break}0===t.indexOf(r)&&(i=e+1)}return n.splice(i,0,t),i}function U(e){const t=a.proxyRules,n=P(e);for(let e=0;e<t.length;e++)if(0===n.indexOf(t[e].urlPrefix))return t[e]}function j(e,t){return e=L(e),t=L(t),ne(e)===ne(t)}function L(e){const t=(e=N(e)).indexOf("/sharing");return t>0?e.substring(0,t):e.replace(/\/+$/,"")}function S(e){const t=t=>null==t||t instanceof RegExp&&t.test(e)||"string"==typeof t&&e.startsWith(t),n=a.interceptors;if(n)for(const e of n)if(Array.isArray(e.urls)){if(e.urls.some(t))return e}else if(t(e.urls))return e;return null}function D(e,t,n=!1){const r=oe(e),i=oe(t);return!(!n&&r.scheme!==i.scheme)&&null!=r.host&&null!=i.host&&r.host.toLowerCase()===i.host.toLowerCase()&&r.port===i.port}function Z(e){if("string"==typeof e){if(!F(e))return!0;e=oe(e)}if(D(e,w))return!0;const t=a.trustedServers||[];for(let n=0;n<t.length;n++){const r=k(t[n]);for(let t=0;t<r.length;t++)if(D(e,r[t]))return!0}return!1}function k(e){return b[e]||(X(e)||G(e)?b[e]=[new g(R(e))]:b[e]=[new g(`http://${e}`),new g(`https://${e}`)]),b[e]}function R(e,t=$,n){return G(e)?n&&n.preserveProtocolRelative?e:"http"===w.scheme&&w.authority===J(e).slice(2)?`http:${e}`:`https:${e}`:X(e)?e:(0,l.j0)(H("/"===e[0]?function(e){const t=e.indexOf("//"),n=e.indexOf("/",t+2);return-1===n?e:e.slice(0,n)}(t):t,e))}function z(e,t=$,n){if(!F(e))return e;const r=N(e),i=r.toLowerCase(),s=N(t).toLowerCase().replace(/\/+$/,""),l=n?N(n).toLowerCase().replace(/\/+$/,""):null;if(l&&0!==s.indexOf(l))return e;const o=(e,t,n)=>-1===(n=e.indexOf(t,n))?e.length:n;let a=o(i,"/",i.indexOf("//")+2),c=-1;for(;i.slice(0,a+1)===s.slice(0,a)+"/"&&(c=a+1,a!==i.length);)a=o(i,"/",a+1);if(-1===c)return e;if(l&&c<l.length)return e;e=r.slice(c);const u=s.slice(c-1).replace(/[^/]+/g,"").length;if(u>0)for(let t=0;t<u;t++)e=`../${e}`;else e=`./${e}`;return e}function N(e){return function(e){const t=a.httpsDomains;if(!function(e){return h.test(e)||"http"===w.scheme&&G(e)}(e))return e;const n=e.indexOf("/",7);let r;if(r=-1===n?e:e.slice(0,n),r=r.toLowerCase().slice(7),m.test(r)){if(!r.endsWith(":80"))return e;r=r.slice(0,-3),e=e.replace(":80","")}return"http"===w.scheme&&r===w.authority&&!d.test(e)||(te()&&r===w.authority||t&&t.some((e=>r===e||r.endsWith(`.${e}`)))||te()&&!U(e))&&(e=ee(e)),e}(e=function(e){return e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}(e=function(e){if(/^https?:\/\//i.test(e)){const t=A(e);e=(e=t.path.replace(/\/{2,}/g,"/")).replace("/","//"),t.query&&(e+=`?${t.query}`)}return e}(e=R(e=e.trim()))))}function H(...e){const t=e.filter(l.pC);if(!t||!t.length)return;const n=[];if(F(t[0])){const e=t[0],r=e.indexOf("//");-1!==r&&(n.push(e.slice(0,r+1)),function(e){return p.test(e)}(t[0])&&(n[0]+="/"),t[0]=e.slice(r+2))}else"/"===t[0][0]&&n.push("");const r=t.reduce(((e,t)=>t?e.concat(t.split("/")):e),[]);for(let e=0;e<r.length;e++){const t=r[e];".."===t&&n.length>0&&".."!==n[n.length-1]?n.pop():(!t&&e===r.length-1||t&&("."!==t||0===n.length))&&n.push(t)}return n.join("/")}function J(e,t=!1){if(B(e)||W(e))return null;let n=e.indexOf("://");if(-1===n&&G(e))n=2;else{if(-1===n)return null;n+=3}const r=e.indexOf("/",n);return-1!==r&&(e=e.slice(0,r)),t&&(e=ne(e,!0)),e}function F(e){return G(e)||X(e)}function B(e){return null!=e&&"blob:"===e.slice(0,5)}function W(e){return"data:"===e.slice(0,5)}function M(e){const t=Q(e);if(!t||!t.isBase64)return null;const n=atob(t.data),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}const K=/^data:(.*?)(;base64)?,(.*)$/;function Q(e){const t=e.match(K);if(!t)return null;const[,n,r,i]=t;return{mediaType:n,isBase64:!!r,data:i}}function Y(e){return e.isBase64?`data:${e.mediaType};base64,${e.data}`:`data:${e.mediaType},${e.data}`}function G(e){return null!=e&&void 0!==e&&"/"===e[0]&&"/"===e[1]}function X(e){return u.test(e)}function V(e){return f.test(e)||"https"===w.scheme&&G(e)}function ee(e){return G(e)?`https:${e}`:e.replace(h,"https:")}function te(){return"https"===w.scheme}function ne(e,t=!1){return G(e)?e.slice(2):(e=e.replace(u,""),t&&e.length>1&&"/"===e[0]&&"/"===e[1]&&(e=e.slice(2)),e)}function re(e){let t=0;if(F(e)){const n=e.indexOf("//");-1!==n&&(t=n+2)}const n=e.lastIndexOf("/");return n<t?e:e.slice(0,n+1)}function ie(e,t){if(!e)return"";const n=_(e).path.replace(/\/+$/,""),r=n.substring(n.lastIndexOf("/")+1);if(null==t||!t.length)return r;const i=new RegExp(`.(${t.join("|")})$`,"ig");return r.replace(i,"")}function se(e){return e.replace(/\/+$/,"")}function le(e,t,n){if(!(t&&n&&e&&F(e)))return e;const r=e.indexOf("//"),i=e.indexOf("/",r+2),s=e.indexOf(":",r+2),l=Math.min(i<0?e.length:i,s<0?e.length:s);return e.slice(r+2,l).toLowerCase()!==t.toLowerCase()?e:`${e.slice(0,r+2)}${n}${e.slice(l)}`}function oe(e){return"string"==typeof e?new g(R(e)):(e.scheme||(e.scheme=w.scheme),e)}function ae(e,t){const n=_(e),r=Object.keys(n.query||{});return r.length>0&&t&&t.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),n.path}function ce(e,t,n){const r=_(e),i=r.query||{};return i[t]=String(n),`${r.path}?${O(i)}`}function ue(e,t){const n=_(e),r=n.query||{};for(const e in t)r[e]=t[e];const i=O(r);return i?`${n.path}?${i}`:n.path}function he(e){if((0,l.Wi)(e))return null;const t=e.match(fe);return t?t[1]:null}const fe=/.*?\.([^\/]*)$/},40330:(e,t,n)=>{n.d(t,{Dp:()=>c,id:()=>o,qh:()=>a,i8:()=>s,Nv:()=>l});var r=n(80442),i=n(17452);const s="4.22",l={async request(e,t){var r;const{default:s}=await n.e(3172).then(n.bind(n,3172)),l=e.options,o=l.responseType;l.signal=null==t?void 0:t.signal,l.responseType="native"===o||"native-request-init"===o?"native-request-init":["blob","json","text"].includes(o)&&null!=(r=(0,i.oh)(e.url))&&r.after?o:"array-buffer";const a=await s(e.url,l),c={data:a.data,ssl:a.ssl};switch(a.requestOptions.responseType){case"native-request-init":return delete c.data.signal,c;case"blob":c.data=await c.data.arrayBuffer();break;case"json":c.data=(new TextEncoder).encode(JSON.stringify(c.data)).buffer;break;case"text":c.data=(new TextEncoder).encode(c.data).buffer}return{result:c,transferList:[c.data]}}};let o;function a(e){o=e}function c(e){const t=o&&o.findCredential(e);return t&&t.token?(0,i.ZN)(e,"token",t.token):e}(0,r.Z)("host-webworker")||((0,r.Z)("edge")||(0,r.Z)("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser")},16859:(e,t,n)=>{n.d(t,{I:()=>b});var r=n(43697),i=n(40330),s=n(3172),l=n(66643),o=n(20102),a=n(92604),c=n(70586),u=n(95330),h=n(17452),f=n(5600),p=(n(67676),n(80442),n(75215),n(71715)),m=n(52011),d=n(30556),y=n(65587),v=n(15235),g=n(86082);const w=a.Z.getLogger("esri.layers.mixins.PortalLayer"),b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,n){if(t.itemId)return new v.default({id:t.itemId,portal:n&&n.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const r=await n.e(8062).then(n.bind(n,18062));return(0,u.k_)(t),await r.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,u.D_)(e)||w.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this.fetchUserHasEditingPrivileges(e).catch((e=>((0,u.r9)(e),!0))))}async fetchUserHasEditingPrivileges(e){const t=this.url?null==i.id?void 0:i.id.findCredential(this.url):null;if(!t)return!0;const n=$.credential===t?$.user:await this.fetchEditingUser(e);return $.credential=t,$.user=n,(0,c.Wi)(n)||null==n.privileges||n.privileges.includes("features:user:edit")}async fetchEditingUser(e){var t,n;const r=null==(t=this.portalItem)||null==(n=t.portal)?void 0:n.user;if(r)return r;const o=i.id.findServerInfo(this.url);if(null==o||!o.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,u=y.Z.getDefault();if(u&&u.loaded&&(0,h.Fv)(u.restUrl)===(0,h.Fv)(a))return u.user;const f=`${a}/community/self`,p=(0,c.pC)(e)?e.signal:null,m=await(0,l.q6)((0,s.default)(f,{authMode:"no-prompt",query:{f:"json"},signal:p}));return m.ok?g.default.fromJSON(m.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const n=t&&t.portal,r=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||y.Z.getDefault());return n&&r&&!(0,h.tm)(r.restUrl,n.restUrl)?(t.messages&&t.messages.push(new o.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,f.Cb)({type:v.default})],t.prototype,"portalItem",null),(0,r._)([(0,p.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,d.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,f.Cb)()],t.prototype,"resourceReferences",void 0),(0,r._)([(0,f.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,r._)([(0,m.j)("esri.layers.mixins.PortalLayer")],t),t},$={credential:null,user:null}},56608:(e,t,n)=>{n.d(t,{y:()=>C});var r,i=n(43697),s=n(3172),l=n(15923),o=n(20102),a=n(3920),c=n(92604),u=n(13867),h=n(44553),f=n(95330),p=n(1654),m=n(17452),d=n(43050),y=n(5600),v=n(67676),g=(n(80442),n(90578)),w=n(52011),b=n(22974);class ${constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const n=(e-this.location.top)*this.location.width+(t-this.location.left),r=n%8,i=n>>3,s=this._tileAvailabilityBitSet;return i<0||i>s.length?"unknown":s[i]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,n=this.location.height;let r=!0,i=!0;const s=Math.ceil(t*n/8),l=new Uint8Array(s);let o=0;for(let t=0;t<e.length;t++){const n=t%8;e[t]?(i=!1,l[o]|=1<<n):r=!1,7===n&&++o}i?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=l,this.byteSize+=l.length)}static fromDefinition(e,t){const n=e.service.request||s.default,{row:r,col:i,width:l,height:a}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,n(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const n=e.service.tileServers;t=`${n&&n.length?n[e.row%n.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const n=e.service.query;return n&&(t=`${t}?${n}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:i,width:l,height:a},valid:!0,data:(0,v.a9)(l*a,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==i||e.location.width!==l||e.location.height!==a))throw new o.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:i,width:l,height:a}});return $.fromJSON(e)}))}static fromJSON(e){$.validateJSON(e);const t=new $;return t.location=Object.freeze((0,b.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new o.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function _(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const x=c.Z.getLogger("esri.layers.support.TilemapCache");let C=r=class extends((0,a.p)(l.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=s.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new u.Z(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),(0,d.S1)(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(x.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,n,r){if(!this._availableLevels[e])return Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const i=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,n,i);if(s)return Promise.resolve(s);const l=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,f.fu)(l,(()=>t((0,f.zE)())));const n=_(i);let s=this._pendingTilemapRequests[n];if(!s){s=$.fromDefinition(i,r).then((e=>(this._tilemapCache.put(n,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[n];this._pendingTilemapRequests[n]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,n){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,n,this._tmpTilemapDefinition);return r?r.getAvailability(t,n):"unknown"}getAvailabilityUpsample(e,t,n,r){r.level=e,r.row=t,r.col=n;const i=this.layer.tileInfo;for(i.updateTileInfo(r);;){const e=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==e)return e;if(!i.upsampleTile(r))return"unavailable"}}fetchAvailability(e,t,n,r){return this._availableLevels[e]?this.fetchTilemap(e,t,n,r).catch((e=>e)).then((r=>{if(r instanceof $){const i=r.getAvailability(t,n);return"unavailable"===i?Promise.reject(new o.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:n})):i}if((0,f.D_)(r))throw r;return"unknown"})):Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,n,r,i){r.level=e,r.row=t,r.col=n;const s=this.layer.tileInfo;s.updateTileInfo(r);const l=this.fetchAvailability(e,t,n,i).catch((e=>{if((0,f.D_)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,n,i,l),l}async _fetchAvailabilityUpsamplePrefetch(e,t,n,i,s,l){if(!this._prefetchingEnabled)return;const o=`prefetch-${e}`;if(this.handles.has(o))return;const a=new AbortController;l.then((()=>a.abort()),(()=>a.abort()));let c=!1;const u={remove(){c||(c=!0,a.abort())}};if(this.handles.add(u,o),await(0,p.MU)(10,a.signal).catch((()=>{})),c||(c=!0,this.handles.remove(o)),(0,f.Hc)(a))return;const h={id:e,level:t,row:n,col:i},m={...s,signal:a.signal},d=this.layer.tileInfo;for(let e=0;r._prefetches.length<r._maxPrefetch&&d.upsampleTile(h);++e){const e=this.fetchAvailability(h.level,h.row,h.col,m);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:n,customParameters:r}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,m.B7)({...t.query,...r,token:null!=n?n:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,n,r){r.level=e,r.row=t-t%this.size,r.col=n-n%this.size;const i=_(r);return this._tilemapCache.get(i)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,n,r)=>!!e._tilemapFromCache(t,n,r,e._tmpTilemapDefinition)}}};C._maxPrefetch=4,C._prefetches=new h.Z({initialSize:r._maxPrefetch}),(0,i._)([(0,y.Cb)({constructOnly:!0,type:Number})],C.prototype,"levels",void 0),(0,i._)([(0,g.p)("levels")],C.prototype,"castLevels",null),(0,i._)([(0,y.Cb)({readOnly:!0,type:Number})],C.prototype,"size",null),(0,i._)([(0,y.Cb)({constructOnly:!0,type:Number})],C.prototype,"cacheByteSize",void 0),(0,i._)([(0,y.Cb)({constructOnly:!0})],C.prototype,"layer",void 0),(0,i._)([(0,y.Cb)({constructOnly:!0})],C.prototype,"request",void 0),C=r=(0,i._)([(0,w.j)("esri.layers.support.TilemapCache")],C)},45322:(e,t,n)=>{n.d(t,{d:()=>s,h:()=>i});var r=n(11145);const i={type:r.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:s}}}}};function s(e,t,n,i){if(!e)return null;const{minScale:s,maxScale:l,minLOD:o,maxLOD:a}=t;if(null!=o&&null!=a)return i&&i.ignoreMinMaxLOD?r.Z.fromJSON(e):r.Z.fromJSON({...e,lods:e.lods.filter((({level:e})=>null!=e&&e>=o&&e<=a))});if(0!==s&&0!==l){const t=e=>Math.round(1e4*e)/1e4,n=s?t(s):1/0,i=l?t(l):-1/0;return r.Z.fromJSON({...e,lods:e.lods.filter((e=>{const r=t(e.scale);return r<=n&&r>=i}))})}return r.Z.fromJSON(e)}},99282:(e,t,n)=>{n.d(t,{a:()=>s});var r=n(67900),i=n(68441);const s={inches:(0,r.En)(1,"meters","inches"),feet:(0,r.En)(1,"meters","feet"),"us-feet":(0,r.En)(1,"meters","us-feet"),yards:(0,r.En)(1,"meters","yards"),miles:(0,r.En)(1,"meters","miles"),"nautical-miles":(0,r.En)(1,"meters","nautical-miles"),millimeters:(0,r.En)(1,"meters","millimeters"),centimeters:(0,r.En)(1,"meters","centimeters"),decimeters:(0,r.En)(1,"meters","decimeters"),meters:(0,r.En)(1,"meters","meters"),kilometers:(0,r.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,r.ty)(1,"meters",i.sv.radius)}}}]);