"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1528],{38954:(t,e,r)=>{r.d(e,{A:()=>f,B:()=>d,C:()=>c,D:()=>y,E:()=>h,F:()=>$,G:()=>q,a:()=>D,b:()=>g,c:()=>a,d:()=>u,e:()=>x,f:()=>w,g:()=>l,h:()=>m,i:()=>o,j:()=>v,k:()=>_,l:()=>s,m:()=>I,n:()=>S,o:()=>L,p:()=>U,q:()=>O,s:()=>M,t:()=>E,u:()=>A,v:()=>b,w:()=>P,x:()=>p,y:()=>j,z:()=>F});var i=r(51850),n=r(34304);function s(t){const e=t[0],r=t[1],i=t[2];return Math.sqrt(e*e+r*r+i*i)}function a(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(t,e,r,i){return t[0]=e,t[1]=r,t[2]=i,t}function l(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function u(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function c(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function h(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function p(t,e){return t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t}function d(t,e){return t[0]=Math.sign(e[0]),t[1]=Math.sign(e[1]),t[2]=Math.sign(e[2]),t}function f(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function y(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function m(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function g(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t}function v(t,e){const r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(r*r+i*i+n*n)}function M(t,e){const r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return r*r+i*i+n*n}function _(t){const e=t[0],r=t[1],i=t[2];return e*e+r*r+i*i}function b(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function A(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function S(t,e){const r=e[0],i=e[1],n=e[2];let s=r*r+i*i+n*n;return s>0&&(s=1/Math.sqrt(s),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s),t}function w(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function x(t,e,r){const i=e[0],n=e[1],s=e[2],a=r[0],o=r[1],l=r[2];return t[0]=n*l-s*o,t[1]=s*a-i*l,t[2]=i*o-n*a,t}function I(t,e,r,i){const n=e[0],s=e[1],a=e[2];return t[0]=n+i*(r[0]-n),t[1]=s+i*(r[1]-s),t[2]=a+i*(r[2]-a),t}function E(t,e,r){const i=e[0],n=e[1],s=e[2];return t[0]=r[0]*i+r[4]*n+r[8]*s+r[12],t[1]=r[1]*i+r[5]*n+r[9]*s+r[13],t[2]=r[2]*i+r[6]*n+r[10]*s+r[14],t}function O(t,e,r){const i=e[0],n=e[1],s=e[2];return t[0]=i*r[0]+n*r[3]+s*r[6],t[1]=i*r[1]+n*r[4]+s*r[7],t[2]=i*r[2]+n*r[5]+s*r[8],t}function P(t,e,r){const i=r[0],n=r[1],s=r[2],a=r[3],o=e[0],l=e[1],u=e[2],c=n*u-s*l,h=s*o-i*u,p=i*l-n*o,d=n*p-s*h,f=s*c-i*p,y=i*h-n*c,m=2*a;return t[0]=o+c*m+2*d,t[1]=l+h*m+2*f,t[2]=u+p*m+2*y,t}const T=(0,i.vt)(),Z=(0,i.vt)();function U(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function L(t,e,r){const i=r[0]-e[0],n=r[1]-e[1],s=r[2]-e[2];let a=i*i+n*n+s*s;return a>0?(a=1/Math.sqrt(a),t[0]=i*a,t[1]=n*a,t[2]=s*a,t):(t[0]=0,t[1]=0,t[2]=0,t)}const D=u,N=c,R=h,$=v,j=M,q=s,F=_;Object.freeze(Object.defineProperty({__proto__:null,abs:p,add:l,angle:function(t,e){S(T,t),S(Z,e);const r=w(T,Z);return r>1?0:r<-1?Math.PI:Math.acos(r)},bezier:function(t,e,r,i,n,s){const a=1-s,o=a*a,l=s*s,u=o*a,c=3*s*o,h=3*l*a,p=l*s;return t[0]=e[0]*u+r[0]*c+i[0]*h+n[0]*p,t[1]=e[1]*u+r[1]*c+i[1]*h+n[1]*p,t[2]=e[2]*u+r[2]*c+i[2]*h+n[2]*p,t},ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t},clamp:function(t,e=0,r=1){return t[0]=Math.min(Math.max(t[0],e),r),t[1]=Math.min(Math.max(t[1],e),r),t[2]=Math.min(Math.max(t[2],e),r),t},copy:a,cross:x,crossAndNormalize:function(t,e,r){const i=e[0],n=e[1],s=e[2],a=r[0],o=r[1],l=r[2],u=n*l-s*o,c=s*a-i*l,h=i*o-n*a,p=Math.sqrt(u*u+c*c+h*h);return t[0]=u/p,t[1]=c/p,t[2]=h/p,t},direction:L,dist:$,distance:v,div:R,divide:h,dot:w,equals:function(t,e){if(t===e)return!0;const r=t[0],i=t[1],s=t[2],a=e[0],o=e[1],l=e[2],u=(0,n.FD)();return Math.abs(r-a)<=u*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(i-o)<=u*Math.max(1,Math.abs(i),Math.abs(o))&&Math.abs(s-l)<=u*Math.max(1,Math.abs(s),Math.abs(l))},exactEquals:U,floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t},hermite:function(t,e,r,i,n,s){const a=s*s,o=a*(2*s-3)+1,l=a*(s-2)+s,u=a*(s-1),c=a*(3-2*s);return t[0]=e[0]*o+r[0]*l+i[0]*u+n[0]*c,t[1]=e[1]*o+r[1]*l+i[1]*u+n[1]*c,t[2]=e[2]*o+r[2]*l+i[2]*u+n[2]*c,t},inverse:A,len:q,length:s,lerp:I,max:y,min:f,mul:N,multiply:c,negate:b,normalize:S,random:function(t,e=1){const r=n.Ov,i=2*r()*Math.PI,s=2*r()-1,a=Math.sqrt(1-s*s)*e;return t[0]=Math.cos(i)*a,t[1]=Math.sin(i)*a,t[2]=s*e,t},rotateX:function(t,e,r,i){const n=[],s=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],s[0]=n[0],s[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),s[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t},rotateY:function(t,e,r,i){const n=[],s=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],s[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),s[1]=n[1],s[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t},rotateZ:function(t,e,r,i){const n=[],s=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],s[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),s[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),s[2]=n[2],t[0]=s[0]+r[0],t[1]=s[1]+r[1],t[2]=s[2]+r[2],t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t},scale:m,scaleAndAdd:g,set:o,sign:d,sqrDist:j,sqrLen:F,squaredDistance:M,squaredLength:_,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:D,subtract:u,transformMat3:O,transformMat4:E,transformQuat:P},Symbol.toStringTag,{value:"Module"}))},4902:(t,e,r)=>{r.d(e,{PH:()=>o,sA:()=>a});var i=r(90237),n=r(40608);let s=0;const a=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++})}};return e=(0,i._)([(0,n.$)("esri.core.Identifiable")],e),e},o=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:s++})}};return e=(0,i._)([(0,n.$)("esri.core.Identifiable.NumericIdentifiable")],e),e};let l=class extends(a(class{})){};l=(0,i._)([(0,n.$)("esri.core.Identifiable")],l)},92071:(t,e,r)=>{r.d(e,{P:()=>M,L:()=>_});var i=r(90237),n=r(69622),s=r(76953),a=r(4718),o=r(35666);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(t){const e=new l,r=this._originStores[o.Gr.DEFAULTS];r&&r.forEach(((t,r)=>{e.set(r,(0,a.o8)(t),o.Gr.DEFAULTS)}));for(let r=o.Gr.SERVICE;r<o.AU;r++){const i=this._originStores[r];i&&i.forEach(((i,n)=>{t&&t.has(n)||e.set(n,(0,a.o8)(i),r)}))}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e,r=o.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}return!1}delete(t,e=o.Gr.USER){const r=this._originStores[e];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return i}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],i=r?.get(t),n=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),n!==i}originOf(t){return this._propertyOriginMap.get(t)||o.Gr.DEFAULTS}forEach(t){this._values.forEach(t)}}var u=r(45917),c=r(88620),h=r(40608);const p=t=>{let e=class extends t{constructor(...t){super(...t);const e=(0,c.oY)(this),r=e.store,i=new l;e.store=i,(0,s.k)(e,r,i)}read(t,e){(0,u.L)(this,t,e)}getAtOrigin(t,e){const r=d(this),i=(0,o.aB)(e);if("string"==typeof t)return r.get(t,i);const n={};return t.forEach((t=>{n[t]=r.get(t,i)})),n}originOf(t){return(0,o.OL)(this.originIdOf(t))}originIdOf(t){return d(this).originOf(t)}revert(t,e){const r=d(this),i=(0,o.aB)(e),n=(0,c.oY)(this);let s;s="string"==typeof t?"*"===t?r.keys(i):[t]:t,s.forEach((t=>{n.invalidate(t),r.revert(t,i),n.commit(t)}))}};return e=(0,i._)([(0,h.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function d(t){return(0,c.oY)(t).store}let f=class extends(p(n.A)){};f=(0,i._)([(0,h.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);var y=r(16649),m=r(49422);const g=t=>{let e=class extends t{constructor(...t){super(...t)}clear(t,e="user"){return v(this).delete(t,(0,o.aB)(e))}write(t,e){return(0,m.M)(this,t=t||{},e),t}setAtOrigin(t,e,r){(0,c.oY)(this).setAtOrigin(t,e,(0,o.aB)(r))}removeOrigin(t){const e=v(this),r=(0,o.aB)(t),i=e.keys(r);for(const t of i)e.originOf(t)===r&&e.set(t,e.get(t,r),o.Gr.USER)}updateOrigin(t,e){const r=v(this),i=(0,o.aB)(e),n=(0,y.Jt)(this,t);for(let e=i+1;e<o.AU;++e)r.delete(t,e);r.set(t,n,i)}toJSON(t){return this.write({},t)}};return e=(0,i._)([(0,h.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function v(t){return(0,c.oY)(t).store}const M=t=>{let e=class extends(g(p(t))){constructor(...t){super(...t)}};return e=(0,i._)([(0,h.$)("esri.core.MultiOriginJSONSupport")],e),e};let _=class extends(M(n.A)){};_=(0,i._)([(0,h.$)("esri.core.MultiOriginJSONSupport")],_)},61528:(t,e,r)=>{r.r(e),r.d(e,{default:()=>O});var i=r(90237),n=r(78888),s=r(49186),a=r(53966),o=r(34727),l=r(92071),u=r(74887),c=r(10107),h=(r(44208),r(87811),r(40608)),p=r(38954),d=r(51850),f=r(73941),y=r(5443),m=r(16930),g=r(9762),v=r(4146),M=r(52136),_=r(18768),b=r(69208),A=r(16131),S=r(8303),w=r(25036),x=r(10873),I=r(24212);let E=class extends((0,_.b)((0,A.q)((0,S.A)((0,w.j)((0,l.P)((0,b.d)((0,M.p)(v.A)))))))){constructor(t){super(t),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new m.A({wkid:4326,vcsWkid:115700}),this.fullExtent=new y.A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(t){this._set("elevationInfo",t),this._validateElevationInfo()}_verifyArray(t,e){if(!Array.isArray(t)||t.length<e)return!1;for(const e of t)if("number"!=typeof e)return!1;return!0}_initFullExtent(t){const e=t.root?.boundingVolume;if(!e)return;if(e.box){const t=e?.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const r=t.root?.transform,i=(0,d.vt)();if(e.region&&this._verifyArray(e.region,6)){const t=e.region,r=(0,o.KJ)(t[0]),i=(0,o.KJ)(t[1]),n=t[4],s=(0,o.KJ)(t[2]),a=(0,o.KJ)(t[3]),l=t[5];this.fullExtent=new y.A({xmin:r,ymin:i,zmin:n,xmax:s,ymax:a,zmax:l,spatialReference:this.spatialReference})}else if(e.sphere&&this._verifyArray(e.sphere,4)){const t=e.sphere,n=(0,d.fA)(t[0],t[1],t[2]),s=t[3]/Math.sqrt(3),a=(0,d.vt)();(0,p.d)(a,n,(0,d.fA)(s,s,s));const o=(0,d.vt)();if((0,p.g)(o,n,(0,d.fA)(s,s,s)),r&&this._verifyArray(r,16)){const t=r;(0,p.t)(i,a,t),(0,p.c)(a,i),(0,p.t)(i,o,t),(0,p.c)(o,i)}(0,g.projectBuffer)(a,f.Ro,0,a,m.A.WGS84,0),(0,g.projectBuffer)(o,f.Ro,0,o,m.A.WGS84,0);const l=(0,d.vt)(),u=(0,d.vt)();(0,p.A)(l,a,o),(0,p.D)(u,a,o),this.fullExtent=new y.A({xmin:l[0],ymin:l[1],zmin:l[2],xmax:u[0],ymax:u[1],zmax:u[2],spatialReference:this.spatialReference})}else if(e.box&&this._verifyArray(e.box,12)){const t=e.box,i=(0,d.fA)(t[0],t[1],t[2]),n=(0,d.fA)(t[3],t[4],t[5]),s=(0,d.fA)(t[6],t[7],t[8]),a=(0,d.fA)(t[9],t[10],t[11]),o=[];for(let t=0;t<8;++t)o.push((0,d.vt)());if((0,p.g)(o[0],i,n),(0,p.g)(o[0],o[0],s),(0,p.g)(o[0],o[0],a),(0,p.a)(o[1],i,n),(0,p.g)(o[1],o[1],s),(0,p.g)(o[1],o[1],a),(0,p.g)(o[2],i,n),(0,p.a)(o[2],o[2],s),(0,p.g)(o[2],o[2],a),(0,p.a)(o[3],i,n),(0,p.a)(o[3],o[3],s),(0,p.g)(o[3],o[3],a),(0,p.g)(o[4],i,n),(0,p.g)(o[4],o[4],s),(0,p.a)(o[4],o[4],a),(0,p.a)(o[5],i,n),(0,p.g)(o[5],o[5],s),(0,p.a)(o[5],o[5],a),(0,p.g)(o[6],i,n),(0,p.a)(o[6],o[6],s),(0,p.a)(o[6],o[6],a),(0,p.a)(o[7],i,n),(0,p.a)(o[7],o[7],s),(0,p.a)(o[7],o[7],a),r&&this._verifyArray(r,16)){const t=r;for(let e=0;e<8;++e)(0,p.t)(o[e],o[e],t)}const l=(0,d.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),u=(0,d.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let t=0;t<8;++t)(0,g.projectBuffer)(o[t],f.Ro,0,o[t],m.A.WGS84,0),(0,p.A)(u,u,o[t]),(0,p.D)(l,l,o[t]);this.fullExtent=new y.A({xmin:u[0],ymin:u[1],zmin:u[2],xmax:l[0],ymax:l[1],zmax:l[2],spatialReference:this.spatialReference})}}async load(t){return this.addResolvingPromise(this._doLoad(t)),this}async _doLoad(t){const e=null!=t?t.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:t=>{if(t.typeKeywords?.includes("IntegratedMesh"))return!0;throw new s.A("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},t)}catch(t){(0,u.QP)(t)}if(this.url){const t=(0,n.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((t=>{this._initFullExtent(t.data)}),(t=>{(0,u.QP)(t)}));await t}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const t=this.elevationInfo,e="Integrated mesh 3d tiles layers";(0,I.XF)(a.A.getLogger(this),(0,I.B)(e,"absolute-height",t)),(0,I.XF)(a.A.getLogger(this),(0,I.tW)(e,t))}};(0,i._)([(0,c.MZ)({type:["IntegratedMesh3DTilesLayer"]})],E.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.MZ)({type:m.A})],E.prototype,"spatialReference",void 0),(0,i._)([(0,c.MZ)({type:y.A})],E.prototype,"fullExtent",void 0),(0,i._)([(0,c.MZ)(x.Yj)],E.prototype,"elevationInfo",null),(0,i._)([(0,c.MZ)({type:["show","hide"]})],E.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)(x.OZ)],E.prototype,"url",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],E.prototype,"type",void 0),(0,i._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),(0,i._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],E.prototype,"minScale",void 0),(0,i._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],E.prototype,"maxScale",void 0),E=(0,i._)([(0,h.$)("esri.layers.IntegratedMesh3DTilesLayer")],E);const O=E},4146:(t,e,r)=>{r.d(e,{A:()=>_});var i=r(90237),n=(r(59456),r(78888)),s=r(49186),a=r(65529),o=r(4902),l=r(92474),u=r(53966),c=r(74887),h=r(84952),p=r(10107),d=(r(44208),r(87811),r(40608)),f=r(92602),y=r(79677),m=r(5443),g=r(16930);let v=0,M=class extends(a.A.EventedMixin((0,o.sA)(l.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.A(-180,-90,180,90,g.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=g.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t;return(await r.e(7982).then(r.bind(r,27982))).fromUrl(e)}static fromPortalItem(t){return async function(t){const e="portalItem"in t?t:{portalItem:t},{fromItem:i}=await r.e(5613).then(r.bind(r,45613));try{return await i(e)}catch(t){const r=e?.portalItem,i=r?.id||"unset",n=r?.portal?.url||f.A.portalUrl;throw u.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+i+"')",t),t}}(t)}initialize(){this.when().catch((t=>{(0,c.zf)(t)||u.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})}))}destroy(){const t=this.parent;if(t){const e=this;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"referenceLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e),this._set("parent",null)}}get effectiveVisible(){let t=this.visible;const e=this.parent;return t&&e&&"effectiveVisible"in e&&(t&&=e.effectiveVisible),t}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,h.An)(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await(0,n.A)(t,{query:{f:"json"},responseType:"json"})).data;throw new s.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,p.MZ)({type:String})],M.prototype,"attributionDataUrl",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],M.prototype,"effectiveVisible",null),(0,i._)([(0,p.MZ)({type:m.A})],M.prototype,"fullExtent",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],M.prototype,"hasAttributionData",null),(0,i._)([(0,p.MZ)({type:String,clonable:!1})],M.prototype,"id",void 0),(0,i._)([(0,p.MZ)({type:Boolean,nonNullable:!0})],M.prototype,"legendEnabled",void 0),(0,i._)([(0,p.MZ)({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),(0,i._)([(0,p.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],M.prototype,"opacity",void 0),(0,i._)([(0,p.MZ)({clonable:!1})],M.prototype,"parent",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],M.prototype,"parsedUrl",null),(0,i._)([(0,p.MZ)({type:Boolean,readOnly:!0})],M.prototype,"persistenceEnabled",void 0),(0,i._)([(0,p.MZ)({type:Boolean})],M.prototype,"popupEnabled",void 0),(0,i._)([(0,p.MZ)({type:Boolean})],M.prototype,"attributionVisible",void 0),(0,i._)([(0,p.MZ)({type:g.A})],M.prototype,"spatialReference",void 0),(0,i._)([(0,p.MZ)({type:String})],M.prototype,"title",void 0),(0,i._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),(0,i._)([(0,p.MZ)()],M.prototype,"url",void 0),(0,i._)([(0,p.MZ)({type:y.A})],M.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,p.MZ)({type:Boolean,nonNullable:!0})],M.prototype,"visible",void 0),M=(0,i._)([(0,d.$)("esri.layers.Layer")],M);const _=M},52136:(t,e,r)=>{r.d(e,{p:()=>a});var i=r(90237),n=r(10107),s=(r(44208),r(53966),r(87811),r(40608));const a=t=>{let e=class extends t{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(t){null!=t?this._override("apiKey",t):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,n.MZ)({type:String})],e.prototype,"apiKey",null),e=(0,i._)([(0,s.$)("esri.layers.mixins.APIKeyMixin")],e),e}},18768:(t,e,r)=>{r.d(e,{b:()=>l});var i=r(90237),n=r(53966),s=r(10107),a=(r(44208),r(87811),r(40608)),o=r(60694);const l=t=>{let e=class extends t{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,o.qg)(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,o.Jf)(t,n.A.getLogger(this)))}};return(0,i._)([(0,s.MZ)()],e.prototype,"title",null),(0,i._)([(0,s.MZ)({type:String})],e.prototype,"url",null),e=(0,i._)([(0,a.$)("esri.layers.mixins.ArcGISService")],e),e}},69208:(t,e,r)=>{r.d(e,{d:()=>a});var i=r(90237),n=r(10107),s=(r(44208),r(53966),r(87811),r(40608));const a=t=>{let e=class extends t{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,n.MZ)({type:Object,json:{write:{overridePolicy:t=>({enabled:!!(t&&Object.keys(t).length>0)})}}})],e.prototype,"customParameters",void 0),e=(0,i._)([(0,s.$)("esri.layers.mixins.CustomParametersMixin")],e),e}},8303:(t,e,r)=>{r.d(e,{A:()=>A});var i=r(90237),n=r(92602),s=r(70333),a=r(78888),o=r(60999),l=r(49186),u=r(53966),c=r(97768),h=r(74887),p=r(84952),d=r(10107),f=(r(44208),r(87811),r(36005)),y=r(40608),m=r(43937),g=r(83531),v=r(20655),M=r(80812),_=r(41318),b=r(10407);const A=t=>{let e=class extends t{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new M.default({id:e.itemId,portal:r?.portal})}writePortalItem(t,e){t?.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem?.id)try{const{load:i}=await Promise.all([r.e(5356),r.e(1204)]).then(r.bind(r,41204));return(0,h.Te)(e),await i({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData,layerModuleTypeMap:t.layerModuleTypeMap},e)}catch(t){throw(0,h.zf)(t)||u.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}async finishLoadEditablePortalLayer(t){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(t).catch((t=>((0,h.QP)(t),!0))))}async setUserPrivileges(t,e){if(!n.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(e);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:n}}=await this._fetchUserPrivileges(t,e);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",n)}catch(t){(0,h.QP)(t)}}async _fetchUserPrivileges(t,e){let r=this.portalItem;if(!t||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(e);const i=t===r.id;if(i&&r.portal.user)return(0,b.It)(r);let n,a;if(i)n=r.portal.url;else try{n=await(0,g.wI)(this.url,e)}catch(t){(0,h.QP)(t)}if(!n||!(0,p.b8)(n,r.portal.url))return this._fetchFallbackUserPrivileges(e);try{const t=null!=e?e.signal:null;a=await(s.id?.getCredential(`${n}/sharing`,{prompt:!1,signal:t}))}catch(t){(0,h.QP)(t)}const o=!0,l=!1,u=!1;if(!a)return{features:{edit:o,fullEdit:l},content:{updateItem:u}};try{if(i?await r.reload():(r=new M.default({id:t,portal:{url:n}}),await r.load(e)),r.portal.user)return(0,b.It)(r)}catch(t){(0,h.QP)(t)}return{features:{edit:o,fullEdit:l},content:{updateItem:u}}}async _fetchFallbackUserPrivileges(t){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(t)}catch(t){(0,h.QP)(t)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(t){const e=this.url?s.id?.findCredential(this.url):null;if(!e)return!0;const r=S.credential===e?S.user:await this._fetchEditingUser(t);return S.credential=e,S.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(t){const e=this.portalItem?.portal?.user;if(e)return e;const r=s.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,n=v.A.getDefault();if(n&&n.loaded&&(0,p.S8)(n.restUrl)===(0,p.S8)(i))return n.user;const l=`${i}/community/self`,u=null!=t?t.signal:null,c=await(0,o.Ke)((0,a.A)(l,{authMode:"no-prompt",query:{f:"json"},signal:u}));return c.ok?_.A.fromJSON(c.value.data):null}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.A.getDefault());return r&&i&&!(0,p.ut)(i.restUrl,r.restUrl)?(e.messages&&e.messages.push(new l.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return(0,i._)([(0,d.MZ)({type:M.default})],e.prototype,"portalItem",null),(0,i._)([(0,f.w)("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),(0,i._)([(0,m.K)("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),(0,i._)([(0,d.MZ)({clonable:!1})],e.prototype,"resourceReferences",void 0),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],e.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],e.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],e.prototype,"userHasUpdateItemPrivileges",void 0),e=(0,i._)([(0,y.$)("esri.layers.mixins.PortalLayer")],e),e},S={credential:null,user:null}},25036:(t,e,r)=>{r.d(e,{j:()=>a});var i=r(90237),n=r(10107),s=(r(44208),r(53966),r(87811),r(40608));const a=t=>{let e=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const t={minScale:this.minScale,maxScale:this.maxScale},e=this.parent;e&&"effectiveScaleRange"in e&&function(t,e){t.minScale=t.minScale>0?e.minScale>0?Math.min(t.minScale,e.minScale):t.minScale:e.minScale,t.maxScale=t.maxScale>0?e.maxScale>0?Math.max(t.maxScale,e.maxScale):t.maxScale:e.maxScale}(t,e.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===t.minScale&&r.maxScale===t.maxScale?r:t}};return(0,i._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],e.prototype,"minScale",void 0),(0,i._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],e.prototype,"maxScale",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],e.prototype,"effectiveScaleRange",null),e=(0,i._)([(0,s.$)("esri.layers.mixins.ScaleRangeLayer")],e),e}},24212:(t,e,r)=>{function i(t,e){return function(t,e){return e?.mode?e.mode:function(t){return t?l:u}(t).mode}(null==t||(t.hasZ??!1),e)}function n(t,e,r){return r&&r.mode!==e?`${t} only support ${e} elevation mode`:null}function s(t,e,r){return r?.mode===e?`${t} do not support ${e} elevation mode`:null}function a(t,e){return null!=e?.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression?`${t} do not support featureExpressionInfo`:null}function o(t,e){e&&t.warn(".elevationInfo=",e)}r.d(e,{$7:()=>s,B:()=>n,XF:()=>o,tW:()=>a,w7:()=>i}),r(83047),r(16271);const l={mode:"absolute-height",offset:0},u={mode:"on-the-ground",offset:null}},79677:(t,e,r)=>{r.d(e,{A:()=>d});var i,n=r(90237),s=r(25482),a=r(88930),o=r(10107),l=(r(44208),r(53966),r(87811),r(36005)),u=r(40608),c=r(43937),h=r(56400);let p=i=class extends s.oY{static get allTime(){return f}static get empty(){return y}static fromArray(t){return new i({start:null!=t[0]?new Date(t[0]):t[0],end:null!=t[1]?new Date(t[1]):t[1]})}constructor(t){super(t),this.end=null,this.start=null}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=t.start?.getTime()??t.start,n=t.end?.getTime()??t.end;return e===i&&r===n}expandTo(t,e=h.qU){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,a.lL)(r,t,e));let n=this.end;if(n){const r=(0,a.lL)(n,t,e);n=n.getTime()===r.getTime()?r:(0,a.S1)(r,1,t,e)}return new i({start:r,end:n})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return i.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,n=t.start?.getTime()??-1/0,s=t.end?.getTime()??1/0;let a,o;return n>=e&&n<=r?a=n:e>=n&&e<=s&&(a=e),r>=n&&r<=s?o=r:s>=e&&s<=r&&(o=s),null==a||null==o||isNaN(a)||isNaN(o)?i.empty:new i({start:a===-1/0?null:new Date(a),end:o===1/0?null:new Date(o)})}offset(t,e,r=h.qU){if(this.isEmpty||this.isAllTime)return this.clone();const n=new i,{start:s,end:o}=this;return null!=s&&(n.start=(0,a.S1)(s,t,e,r)),null!=o&&(n.end=(0,a.S1)(o,t,e,r)),n}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return f.clone();const e=null!=this.start&&null!=t.start?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,r=null!=this.end&&null!=t.end?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new i({start:e,end:r})}};(0,n._)([(0,o.MZ)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"end",void 0),(0,n._)([(0,l.w)("end")],p.prototype,"readEnd",null),(0,n._)([(0,c.K)("end")],p.prototype,"writeEnd",null),(0,n._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],p.prototype,"isAllTime",null),(0,n._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],p.prototype,"isEmpty",null),(0,n._)([(0,o.MZ)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"start",void 0),(0,n._)([(0,l.w)("start")],p.prototype,"readStart",null),(0,n._)([(0,c.K)("start")],p.prototype,"writeStart",null),p=i=(0,n._)([(0,u.$)("esri.time.TimeExtent")],p);const d=p,f=new p,y=new p({start:void 0,end:void 0})}}]);