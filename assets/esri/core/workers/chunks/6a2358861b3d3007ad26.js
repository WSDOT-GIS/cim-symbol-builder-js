"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9956,4202,8694,3492],{3920:(e,t,r)=>{r.d(t,{p:()=>p,r:()=>u});var n=r(43697),i=r(15923),o=r(61247),s=r(5600),l=r(52011),a=r(72762);const p=e=>{let t=class extends e{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy())}get handles(){return this._get("handles")||new o.Z}get updatingHandles(){return this._get("updatingHandles")||new a.t}};return(0,n._)([(0,s.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,n._)([(0,s.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,n._)([(0,l.j)("esri.core.HandleOwner")],t),t};let u=class extends(p(i.Z)){};u=(0,n._)([(0,l.j)("esri.core.HandleOwner")],u)},17445:(e,t,r)=>{r.d(t,{N1:()=>c,YP:()=>a,Z_:()=>f,gx:()=>p,nn:()=>m,on:()=>y,tX:()=>g});var n=r(91460),i=r(50758),o=r(70586),s=r(95330),l=r(26258);function a(e,t,r={}){return u(e,t,r,d)}function p(e,t,r={}){return u(e,t,r,h)}function u(e,t,r={},n){let i=null;const s=r.once?(e,r)=>{n(e)&&((0,o.hw)(i),t(e,r))}:(e,r)=>{n(e)&&t(e,r)};if(i=(0,l.aQ)(e,s,r.sync,r.equals),r.initial){const t=e();s(t,t)}return i}function y(e,t,r,s={}){let l=null,p=null,u=null;function y(){l&&p&&(p.remove(),s.onListenerRemove?.(l),l=null,p=null)}function c(e){s.once&&s.once&&(0,o.hw)(u),r(e)}const d=a(e,((e,r)=>{y(),(0,n.vT)(e)&&(l=e,p=(0,n.on)(e,t,c),s.onListenerAdd?.(e))}),{sync:s.sync,initial:!0});return u=(0,i.kB)((()=>{d.remove(),y()})),u}function c(e,t){return function(e,t,r){if((0,s.Hc)(r))return Promise.reject((0,s.zE)());const n=e();if(t?.(n))return Promise.resolve(n);let l=null;function a(){l=(0,o.hw)(l)}return new Promise(((n,o)=>{l=(0,i.AL)([(0,s.fu)(r,(()=>{a(),o((0,s.zE)())})),u(e,(e=>{a(),n(e)}),{sync:!1,once:!0},t??d)])}))}(e,h,t)}function d(e){return!0}function h(e){return!!e}r(87538);const f={sync:!0},m={initial:!0},g={sync:!0,initial:!0}},42033:(e,t,r)=>{r.d(t,{E:()=>i,_:()=>o});var n=r(70586);async function i(e,t){const{WhereClause:n}=await r.e(1534).then(r.bind(r,41534));return n.create(e,t)}function o(e,t){return(0,n.pC)(e)?(0,n.pC)(t)?`(${e}) AND (${t})`:e:t}},72762:(e,t,r)=>{r.d(t,{t:()=>y});var n=r(43697),i=r(15923),o=r(61247),s=r(70586),l=r(17445),a=r(1654),p=r(5600),u=r(52011);let y=class extends i.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new o.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,l.YP)}addWhen(e,t,r={}){return this._installWatch(e,t,r,l.gx)}addOnCollectionChange(e,t,{initial:r=!1,final:n=!1}={}){const i=++this._handleId;return this._handles.add([(0,l.on)(e,"after-changes",this._createSyncUpdatingCallback(),l.Z_),(0,l.on)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:n?e=>t({added:[],removed:e.toArray()}):void 0})],i),{remove:()=>this._handles.remove(i)}}addPromise(e){if((0,s.Wi)(e))return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(c)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const r=()=>this._handles.remove(t);return e.then(r,r),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},n){const i=++this._handleId;r.sync||this._installSyncUpdatingWatch(e,i);const o=n(e,t,r);return this._handles.add(o,i),{remove:()=>this._handles.remove(i)}}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),n=(0,l.YP)(e,r,{sync:!0,equals:()=>!1});return this._handles.add(n,t),n}_createSyncUpdatingCallback(){return()=>{this._handles.remove(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,a.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(c))})),c)}}};(0,n._)([(0,p.Cb)({readOnly:!0})],y.prototype,"updating",void 0),y=(0,n._)([(0,u.j)("esri.core.support.WatchUpdatingTracking")],y);const c=-42},82526:(e,t,r)=>{r.d(t,{aX:()=>T});var n=r(68773),i=r(20102),o=r(92604),s=r(70586),l=r(38913),a=r(58901),p=r(82971),u=r(33955);const y={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new a.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:p.Z.WebMercator}),minus180Line:new a.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:p.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a.Z({paths:[[[180,-180],[180,180]]],spatialReference:p.Z.WGS84}),minus180Line:new a.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:p.Z.WGS84})}};function c(e,t){return Math.ceil((e-t)/(2*t))}function d(e,t){const r=h(e);for(const e of r)for(const r of e)r[0]+=t;return e}function h(e){return(0,u.oU)(e)?e.rings:e.paths}var f=r(8744),m=r(40488),g=(r(66577),r(3172)),w=r(17452);function _(e){return{geometryType:(0,u.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}const S=o.Z.getLogger("esri.geometry.support.normalizeUtils");function b(e){return"polygon"===e[0].type}function v(e){return"polyline"===e[0].type}function C(e,t,r){if(t){const t=function(e,t){if(!(e instanceof a.Z||e instanceof l.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw S.error(e),new i.Z(e)}const r=h(e),n=[];for(const e of r){const r=[];n.push(r),r.push([e[0][0],e[0][1]]);for(let n=0;n<e.length-1;n++){const i=e[n][0],o=e[n][1],s=e[n+1][0],l=e[n+1][1],a=Math.sqrt((s-i)*(s-i)+(l-o)*(l-o)),p=(l-o)/a,u=(s-i)/a,y=a/t;if(y>1){for(let e=1;e<=y-1;e++){const n=e*t,s=u*n+i,l=p*n+o;r.push([s,l])}const e=(a+Math.floor(y-1)*t)/2,n=u*e+i,s=p*e+o;r.push([n,s])}r.push([s,l])}}return function(e){return"polygon"===e.type}(e)?new l.Z({rings:n,spatialReference:e.spatialReference}):new a.Z({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,m.Sx)(t,!0)}return r&&(e=d(e,r)),e}function x(e,t,r){if(Array.isArray(e)){const n=e[0];if(n>t){const r=c(n,t);e[0]=n+r*(-2*t)}else if(n<r){const t=c(n,r);e[0]=n+t*(-2*r)}}else{const n=e.x;if(n>t){const r=c(n,t);e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=c(n,r);e=e.clone().offset(t*(-2*r),0)}}return e}function O(e,t){let r=-1;for(let n=0;n<t.cutIndexes.length;n++){const i=t.cutIndexes[n],o=t.geometries[n],s=h(o);for(let e=0;e<s.length;e++){const t=s[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const n=t[e][0];r=n>r?n:r}r=Number(r.toFixed(9));const n=-360*c(r,180);for(let r=0;r<t.length;r++){const t=o.getPoint(e,r);o.setPoint(e,r,t.clone().offset(n,0))}return!0}}))}if(i===r){if(b(e))for(const t of h(o))e[i]=e[i].addRing(t);else if(v(e))for(const t of h(o))e[i]=e[i].addPath(t)}else r=i,e[i]=o}return e}async function T(e,t,r){if(!Array.isArray(e))return T([e],t);t&&"string"!=typeof t&&S.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const i="string"==typeof t?t:t?.url??n.Z.geometryServiceUrl;let o,p,h,b,v,L,N,Z,I=0;const M=[],J=[];for(const t of e)if((0,s.Wi)(t))J.push(t);else if(o||(o=t.spatialReference,p=(0,f.C5)(o),h=o.isWebMercator,L=h?102100:4326,b=y[L].maxX,v=y[L].minX,N=y[L].plus180Line,Z=y[L].minus180Line),p)if("mesh"===t.type)J.push(t);else if("point"===t.type)J.push(x(t.clone(),b,v));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>x(e,b,v))),J.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,p);J.push(e.rings?new l.Z(e):e)}else if(t.extent){const e=t.extent,r=c(e.xmin,v)*(2*b);let n=0===r?t.clone():d(t.clone(),r);e.offset(r,0),e.intersects(N)&&e.xmax!==b?(I=e.xmax>I?e.xmax:I,n=C(n,h),M.push(n),J.push("cut")):e.intersects(Z)&&e.xmin!==v?(I=e.xmax*(2*b)>I?e.xmax*(2*b):I,n=C(n,h,360),M.push(n),J.push("cut")):J.push(n)}else J.push(t.clone());else J.push(t);let R=c(I,b),j=-90;const F=R,A=new a.Z;for(;R>0;){const e=360*R-180;A.addPath([[e,j],[e,-1*j]]),j*=-1,R--}if(M.length>0&&F>0){const t=O(M,await async function(e,t,r,n){const i="string"==typeof e?(0,w.mN)(e):e,o=t[0].spatialReference,s={...n,query:{...i.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:(0,u.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},l=await(0,g.default)(i.path+"/cut",s),{cutIndexes:a,geometries:p=[]}=l.data;return{cutIndexes:a,geometries:p.map((e=>{const t=(0,u.im)(e);return t.spatialReference=o,t}))}}(i,M,A,r)),n=[],o=[];for(let r=0;r<J.length;r++){const i=J[r];if("cut"!==i)o.push(i);else{const i=t.shift(),l=e[r];(0,s.pC)(l)&&"polygon"===l.type&&l.rings&&l.rings.length>1&&i.rings.length>=l.rings.length?(n.push(i),o.push("simplify")):o.push(h?(0,m.$)(i):i)}}if(!n.length)return o;const l=await async function(e,t,r){const n="string"==typeof e?(0,w.mN)(e):e,i=t[0].spatialReference,o=(0,u.Ji)(t[0]),s={...r,query:{...n.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(_(t))}};return function(e,t,r){const n=(0,u.q9)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}((await(0,g.default)(n.path+"/simplify",s)).data,o,i)}(i,n,r),a=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?a.push(t):a.push(h?(0,m.$)(l.shift()):l.shift())}return a}const P=[];for(let e=0;e<J.length;e++){const t=J[e];if("cut"!==t)P.push(t);else{const e=M.shift();P.push(!0===h?(0,m.$)(e):e)}}return P}},69285:(e,t,r)=>{r.d(t,{k:()=>s});var n=r(70586),i=r(67900),o=r(8744);function s(e,t,r){if((0,n.Wi)(t)||(0,n.Wi)(r)||r.vcsWkid||(0,o.fS)(t,r))return null;const s=(0,i._R)(t)/(0,i._R)(r);if(1===s)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,s);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,s);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,s);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,s);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,s);default:return null}}},62128:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var n=r(43697),i=(r(66577),r(38171)),o=(r(9790),r(46791)),s=r(20102),l=r(22974),a=r(70586),p=r(16453),u=r(78286),y=r(20941),c=r(5600),d=r(75215),h=r(71715),f=r(52011),m=r(30556),g=r(44547),w=r(82526),_=r(8744),S=r(19238),b=(r(67676),r(70921)),v=r(3920);r(80442),r(92604);let C=class extends((0,v.p)(o.Z)){constructor(e){super(e),this.handles.add([this.on("before-add",(e=>{(0,a.Wi)(e.item)&&e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(o.Z.ofType(this.itemType.Type))(e):new o.Z(e)}};(0,n._)([(0,c.Cb)()],C.prototype,"owner",null),C=(0,n._)([(0,f.j)("esri.core.support.OwningCollection")],C);var x=r(87085),O=r(71612),T=r(72965),L=r(52421);let N=class extends C{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};(0,n._)([(0,L.c)({Type:i.Z,ensureType:(0,d.se)(i.Z)})],N.prototype,"itemType",void 0),N=(0,n._)([(0,f.j)("esri.support.GraphicsCollection")],N);var Z=r(86787);let I=class extends((0,O.h)((0,T.M)(x.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new N,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};var M,J;(0,n._)([(0,c.Cb)({type:Z.Z})],I.prototype,"elevationInfo",void 0),(0,n._)([(0,c.Cb)((M=N,J="graphics",{type:M,cast:b.R,set(e){const t=(0,b.Z)(e,this._get(J),M);t.owner=this,this._set(J,t)}}))],I.prototype,"graphics",void 0),(0,n._)([(0,c.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),(0,n._)([(0,c.Cb)()],I.prototype,"screenSizePerspectiveEnabled",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],I.prototype,"type",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],I.prototype,"internal",void 0),I=(0,n._)([(0,f.j)("esri.layers.GraphicsLayer")],I);const R=I;var j=r(92908),F=r(38009),A=r(16859),P=r(1231),E=r(20256),W=r(4095),z=r(77987),k=r(78724),D=r(82971),G=r(6570);function U(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!q(e)))}function q({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return V.find((t=>r===t.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===t.identifyingSymbol.type))}const H=new P.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),X=new P.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let K=class extends R{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};(0,n._)([(0,c.Cb)({readOnly:!0})],K.prototype,"sublayers",null),(0,n._)([(0,c.Cb)()],K.prototype,"layer",void 0),(0,n._)([(0,c.Cb)()],K.prototype,"layerId",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],K.prototype,"visibilityMode",void 0),K=(0,n._)([(0,f.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],K);const V=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new E.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new W.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new z.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new z.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new k.Z).toJSON()}];let $=class extends((0,O.h)((0,T.M)((0,F.q)((0,A.I)((0,p.R)(x.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=D.Z.WGS84,this.sublayers=new o.Z(V.map((e=>new K({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!U(t)&&"portal-item"!==r?.origin}}}readFeatureCollections(e,t,r){if(!U(t))return null;const n=t.layers.map((e=>{const t=new S.default;return t.read(e,r),t}));return new o.Z({items:n})}readLegacyfeatureCollectionJSON(e,t){return U(t)?(0,l.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every((e=>!e.layerDefinition.extent)))return new G.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:D.Z.WGS84});const r=D.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?G.Z.fromJSON(r).union(e):e}),new G.Z({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?D.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):D.Z.WGS84}readSublayers(e,t,r){if(U(t))return null;const n=[];let s=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const e of t.layers){const{layerDefinition:t,featureSet:r}=e,o=t.id??s++,l=q(e);if((0,a.pC)(l)){const e=new K({id:l.id,title:t.name,layerId:o,layer:this,graphics:r.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:n})=>i.Z.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:n})))});n.push(e)}}return new o.Z(n)}writeSublayers(e,t,r,n){const{minScale:i,maxScale:o}=this;if((0,a.Wi)(e))return;const l=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&n?.messages?.push(new s.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const p=[];let y=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if((0,a.pC)(e.geometry)){y=e.geometry.spatialReference.toJSON();break e}for(const t of V){const r=e.find((e=>t.id===e.id));this._writeMapNoteSublayer(p,r,t,i,o,y,n)}(0,u.RB)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,l.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,a.Wi)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const n of r.graphics)if((0,a.pC)(n.geometry)){const r=n.geometry;e?(0,_.fS)(r.spatialReference,e)||((0,g.Up)(r.spatialReference,e)||(0,g.kR)()||await(0,g.zD)(),n.geometry=(0,g.iV)(r,e)):e=r.spatialReference,t.push(n)}const r=await(0,w.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){return(0,a.Wi)(this.sublayers)?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,r,n,i,o,s){const p=[];if(!(0,a.Wi)(t)){for(const e of t.graphics)this._writeMapNote(p,e,r.geometryType,s);this._normalizeObjectIds(p,H),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,l.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:n,maxScale:i,objectIdField:"OBJECTID",fields:[H.toJSON(),X.toJSON()],spatialReference:o},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,n){if((0,a.Wi)(t))return;const{geometry:i,symbol:o,popupTemplate:s}=t;if((0,a.Wi)(i))return;if(i.type!==r)return void n?.messages?.push(new y.Z("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t}));if((0,a.Wi)(o))return void n?.messages?.push(new y.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const l={attributes:{...t.attributes},geometry:i.toJSON(),symbol:o.toJSON()};(0,a.pC)(s)&&(l.popupInfo=s.toJSON()),e.push(l)}_normalizeObjectIds(e,t){const r=t.name;let n=(0,j.S)(r,e)+1;const i=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||i.has(e[r]))&&(e[r]=n++),i.add(e[r])}}};(0,n._)([(0,c.Cb)({readOnly:!0})],$.prototype,"capabilities",void 0),(0,n._)([(0,h.r)(["portal-item","web-map"],"capabilities",["layers"])],$.prototype,"readCapabilities",null),(0,n._)([(0,c.Cb)({readOnly:!0})],$.prototype,"featureCollections",void 0),(0,n._)([(0,h.r)(["web-map","portal-item"],"featureCollections",["layers"])],$.prototype,"readFeatureCollections",null),(0,n._)([(0,c.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],$.prototype,"featureCollectionJSON",void 0),(0,n._)([(0,h.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],$.prototype,"readLegacyfeatureCollectionJSON",null),(0,n._)([(0,c.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],$.prototype,"featureCollectionType",void 0),(0,n._)([(0,c.Cb)({json:{write:!1}})],$.prototype,"fullExtent",void 0),(0,n._)([(0,h.r)(["web-map","portal-item"],"fullExtent",["layers"])],$.prototype,"readFullExtent",null),(0,n._)([(0,c.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],$.prototype,"legendEnabled",void 0),(0,n._)([(0,c.Cb)({type:["show","hide","hide-children"]})],$.prototype,"listMode",void 0),(0,n._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],$.prototype,"minScale",void 0),(0,n._)([(0,h.r)(["web-map","portal-item"],"minScale",["layers"])],$.prototype,"readMinScale",null),(0,n._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],$.prototype,"maxScale",void 0),(0,n._)([(0,h.r)(["web-map","portal-item"],"maxScale",["layers"])],$.prototype,"readMaxScale",null),(0,n._)([(0,c.Cb)({readOnly:!0})],$.prototype,"multipointLayer",null),(0,n._)([(0,c.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],$.prototype,"operationalLayerType",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],$.prototype,"pointLayer",null),(0,n._)([(0,c.Cb)({readOnly:!0})],$.prototype,"polygonLayer",null),(0,n._)([(0,c.Cb)({readOnly:!0})],$.prototype,"polylineLayer",null),(0,n._)([(0,c.Cb)({type:D.Z})],$.prototype,"spatialReference",void 0),(0,n._)([(0,h.r)(["web-map","portal-item"],"spatialReference",["layers"])],$.prototype,"readSpatialReference",null),(0,n._)([(0,c.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],$.prototype,"sublayers",void 0),(0,n._)([(0,h.r)("web-map","sublayers",["layers"])],$.prototype,"readSublayers",null),(0,n._)([(0,m.c)("web-map","sublayers")],$.prototype,"writeSublayers",null),(0,n._)([(0,c.Cb)({readOnly:!0})],$.prototype,"textLayer",null),(0,n._)([(0,c.Cb)()],$.prototype,"title",void 0),(0,n._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=(0,n._)([(0,f.j)("esri.layers.MapNotesLayer")],$);const Y=$},92908:(e,t,r)=>{r.d(t,{S:()=>i,X:()=>n});const n=1;function i(e,t){let r=0;for(const n of t){const t=n.attributes?.[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}},54295:(e,t,r)=>{r.d(t,{V:()=>s});var n=r(43697),i=r(5600),o=(r(67676),r(75215),r(52011));const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,n._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,n._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>p});var n=r(43697),i=r(92604),o=r(70586),s=r(5600),l=(r(67676),r(75215),r(52011)),a=r(66677);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.Qc)(this.url);if((0,o.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Nm)(e,i.Z.getLogger(this.declaredClass)))}};return(0,n._)([(0,s.Cb)()],t.prototype,"title",null),(0,n._)([(0,s.Cb)({type:String})],t.prototype,"url",null),t=(0,n._)([(0,l.j)("esri.layers.mixins.ArcGISService")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(43697),i=r(2368),o=r(35454),s=r(96674),l=r(5600),a=(r(67676),r(75215),r(52011));const p=new o.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,i.J)(s.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,n._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,n._)([(0,l.Cb)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,n._)([(0,a.j)("esri.layers.support.FeatureTemplate")],u);const y=u},16451:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(43697),i=r(2368),o=r(96674),s=r(5600),l=(r(67676),r(75215),r(71715)),a=r(52011),p=r(30556),u=r(72729),y=r(70082);let c=class extends((0,i.J)(o.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,n._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"id",void 0),(0,n._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,n._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"domains",void 0),(0,n._)([(0,l.r)("domains")],c.prototype,"readDomains",null),(0,n._)([(0,p.c)("domains")],c.prototype,"writeDomains",null),(0,n._)([(0,s.Cb)({type:[y.Z],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,n._)([(0,a.j)("esri.layers.support.FeatureType")],c);const d=c},56765:(e,t,r)=>{r.d(t,{Z:()=>u});var n,i=r(43697),o=r(46791),s=r(96674),l=r(5600),a=(r(67676),r(75215),r(52011));let p=n=class extends s.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.Z}clone(){return new n({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,i._)([(0,l.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=n=(0,i._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],p);const u=p},51706:(e,t,r)=>{var n,i;function o(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?n.Expression:e.field&&"string"==typeof e.field?n.Field:n.Unknown}function a(e,t){const r=t||l(e),o=e.valueUnit||"unknown";return r===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}r.d(t,{PS:()=>l,QW:()=>a,RY:()=>n,hL:()=>i,iY:()=>o,qh:()=>s}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(n||(n={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},28694:(e,t,r)=>{r.d(t,{p:()=>o});var n=r(70586),i=r(69285);function o(e,t,r){if(!r||!r.features||!r.hasZ)return;const o=(0,i.k)(r.geometryType,t,e.outSpatialReference);if(!(0,n.Wi)(o))for(const e of r.features)o(e.geometry)}},58333:(e,t,r)=>{r.d(t,{ET:()=>o,I4:()=>i,eG:()=>a,lF:()=>s,lj:()=>u,qP:()=>l,wW:()=>p});const n=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},p={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);