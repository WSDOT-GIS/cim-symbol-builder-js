"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2245,3069],{3330:(e,t,n)=>{n.d(t,{GB:()=>r,Qo:()=>l,Y4:()=>o});var i=n(96285);class r{}function o(e){return e instanceof i.bo?e===r.instance:"unknown"===e?.toString().toLowerCase()}function l(e){return o(e)?r.instance:e}r.instance=new i.oh("Etc/UTC")},13069:(e,t,n)=>{n.d(t,{lk:()=>r,vD:()=>l,yS:()=>o});const i="randomUUID"in crypto;function r(){if(i)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function o(){return`{${r().toUpperCase()}}`}function l(){return`{${r()}}`}},4197:(e,t,n)=>{n.d(t,{jh:()=>r,l5:()=>l,xm:()=>o});var i=n(34275);function r(e,t=!1){return e<=i.y9?t?new Array(e).fill(0):new Array(e):new Float64Array(e)}function o(e){return((0,i.cy)(e)?e.length:e.byteLength/8)<=i.y9?Array.from(e):new Float64Array(e)}function l(e,t,n){return Array.isArray(e)?e.slice(t,t+n):e.subarray(t,t+n)}},70328:(e,t,n)=>{n.d(t,{BI:()=>N,Ej:()=>g,Ie:()=>M,Jt:()=>_,Ne:()=>b,RF:()=>y,_F:()=>f,aI:()=>F,fA:()=>l,gE:()=>s,gX:()=>h,hZ:()=>w,iT:()=>p,is:()=>O,qv:()=>T,vI:()=>S,vY:()=>a,v_:()=>I,vt:()=>o,w1:()=>u});var i=n(5443),r=(n(19419),n(4197));function o(e=I){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function l(e,t,n,i,r,l,a=o()){return a[0]=e,a[1]=t,a[2]=n,a[3]=i,a[4]=r,a[5]=l,a}function a(e,t=o()){return function(e,t,n,i=o()){return w(i,T),function(e,t,n=0,i=t.length/3){let r=e[0],o=e[1],l=e[2],a=e[3],s=e[4],u=e[5];for(let e=0;e<i;e++)r=Math.min(r,t[n+3*e]),o=Math.min(o,t[n+3*e+1]),l=Math.min(l,t[n+3*e+2]),a=Math.max(a,t[n+3*e]),s=Math.max(s,t[n+3*e+1]),u=Math.max(u,t[n+3*e+2]);e[0]=r,e[1]=o,e[2]=l,e[3]=a,e[4]=s,e[5]=u}(i,e,t,n),i}(e,0,e.length/3,t)}function s(e,t=(0,r.jh)(24)){const[n,i,o,l,a,s]=e;return t[0]=n,t[1]=i,t[2]=o,t[3]=n,t[4]=i,t[5]=s,t[6]=n,t[7]=a,t[8]=o,t[9]=n,t[10]=a,t[11]=s,t[12]=l,t[13]=i,t[14]=o,t[15]=l,t[16]=i,t[17]=s,t[18]=l,t[19]=a,t[20]=o,t[21]=l,t[22]=a,t[23]=s,t}function u(e,t){const n=isFinite(e[2])||isFinite(e[5]);return new i.A(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function y(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function p(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function d(e){return e[0]>=e[3]?0:e[3]-e[0]}function c(e){return e[1]>=e[4]?0:e[4]-e[1]}function m(e){return e[2]>=e[5]?0:e[5]-e[2]}function f(e){const t=d(e),n=m(e),i=c(e);return Math.sqrt(t*t+n*n+i*i)}function h(e,t=[0,0,0]){return t[0]=e[0]+d(e)/2,t[1]=e[1]+c(e)/2,t[2]=e[2]+m(e)/2,t}function g(e,t=[0,0,0]){return t[0]=d(e),t[1]=c(e),t[2]=m(e),t}function b(e,t,n=e){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n!==e&&(n[3]=e[3],n[4]=e[4],n[5]=e[5]),n}function S(e,t,n=e){return n[3]=t[0],n[4]=t[1],n[5]=t[2],n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),e}function w(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function M(e){return e?w(e,T):o(T)}function _(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function N(e,t,n,i,r){return e[0]=t,e[1]=n,e[2]=Number.NEGATIVE_INFINITY,e[3]=i,e[4]=r,e[5]=Number.POSITIVE_INFINITY,e}function O(e){return 6===e.length}function F(e,t,n){if(null==e||null==t)return e===t;if(!O(e)||!O(t))return!1;if(n){for(let i=0;i<e.length;i++)if(!n(e[i],t[i]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const T=[1/0,1/0,1/0,-1/0,-1/0,-1/0],I=[0,0,0,0,0,0];o()},96953:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var i=n(90237),r=(n(59456),n(52106)),o=(n(61147),n(5503)),l=n(49186),a=n(4718),s=n(92071),u=n(93637),y=n(67076),p=n(10107),d=(n(44208),n(53966),n(36005)),c=n(40608),m=n(43937),f=n(57251),h=n(19419),g=n(17136),b=n(21325),S=n(13600),w=n(94194),M=n(4146),_=n(33032),N=n(63074),O=n(16131),F=n(8303),T=n(25036),I=n(20437),v=n(94985),Z=n(31593),x=n(53930),L=n(68249),A=n(16930),J=n(5443);function C(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!j(e)))}function j({layerDefinition:e,featureSet:t}){const n=e.geometryType??t.geometryType;return P.find((t=>n===t.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===t.identifyingSymbol.type))}function D(){return new J.A({xmin:-180,ymin:-90,xmax:180,ymax:90})}const R=new I.A({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),E=new I.A({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let B=class extends w.A{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?null==t?(0,f.projectOrLoad)(D(),e).geometry:(0,h.w1)(t,e):null}get fullBounds(){const e=this.layer?.spatialReference;if(!e)return null;const t=(0,h.Ie)();return this.graphics.forEach((n=>{const i=null!=n.geometry?(0,f.projectOrLoad)(n.geometry,e).geometry:null;null!=i&&(0,h.fT)(t,"point"===i.type?i:i.extent,t)})),(0,h.aI)(t,h.qv)?null:t}get sublayers(){return this.graphics}};(0,i._)([(0,p.MZ)({readOnly:!0})],B.prototype,"fullExtent",null),(0,i._)([(0,p.MZ)({readOnly:!0})],B.prototype,"fullBounds",null),(0,i._)([(0,p.MZ)({readOnly:!0})],B.prototype,"sublayers",null),(0,i._)([(0,p.MZ)()],B.prototype,"layer",void 0),(0,i._)([(0,p.MZ)()],B.prototype,"layerId",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],B.prototype,"visibilityMode",void 0),B=(0,i._)([(0,c.$)("esri.layers.MapNotesLayer.MapNotesSublayer")],B);const P=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new v.A).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new Z.A).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new x.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new x.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new L.A).toJSON()}];let z=class extends((0,N.dM)((0,T.j)((0,O.q)((0,F.A)((0,s.P)(M.A)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=A.A.WGS84,this.sublayers=new o.A(P.map((e=>new B({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,n){return{operations:{supportsMapNotesEditing:!C(t)&&"portal-item"!==n?.origin}}}readFeatureCollections(e,t,n){if(!C(t))return null;const i=t.layers.map((e=>{const t=new S.default;return t.read(e,n),t}));return new o.A({items:i})}readLegacyfeatureCollectionJSON(e,t){return C(t)?(0,a.o8)(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=(0,h.Ie)();return null!=this.sublayers?this.sublayers.forEach((({fullBounds:e})=>null!=e?(0,h.fT)(t,e,t):t),t):this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((n=>{const i=(0,f.projectOrLoad)(n.layerDefinition.extent,e).geometry;null!=i&&(0,h.fT)(t,i,t)})),(0,h.aI)(t,h.qv)?(0,f.projectOrLoad)(D(),e).geometry:(0,h.w1)(t,e)}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?A.A.fromJSON(t.layers[0].layerDefinition.spatialReference):A.A.WGS84}readSublayers(e,t,n){if(C(t))return null;const i=[];let l=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const e of t.layers){const{layerDefinition:t,featureSet:n}=e,o=t.id??l++,a=j(e);if(null!=a){const e=new B({id:a.id,title:t.name,layerId:o,layer:this,graphics:n.features.map((({geometry:e,symbol:t,attributes:n,popupInfo:i})=>r.A.fromJSON({attributes:n,geometry:e,symbol:t,popupTemplate:i})))});i.push(e)}}return new o.A(i)}writeSublayers(e,t,n,i){const{minScale:r,maxScale:o}=this;if(null==e)return;const a=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(a&&i?.messages?.push(new l.A("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const s=[];let y=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(null!=e.geometry){y=e.geometry.spatialReference.toJSON();break e}for(const t of P){const n=e.find((e=>t.id===e.id));this._writeMapNoteSublayer(s,n,t,r,o,y,i)}(0,u.sM)("featureCollection.layers",s,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.o8)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const n of this.sublayers)for(const i of n.graphics)if(null!=i.geometry){const n=i.geometry;e?(0,b.aI)(n.spatialReference,e)||((0,f.canProjectWithoutEngine)(n.spatialReference,e)||(0,f.isLoaded)()||await(0,f.load)(),i.geometry=(0,f.project)(n,e)):e=n.spatialReference,t.push(i)}const n=await(0,g.el)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=n[t]))}_findSublayer(e){return null==this.sublayers?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,n,i,r,o,l){const s=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(s,e,n.geometryType,l);this._normalizeObjectIds(s,R),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.o8)(n.identifyingSymbol)}},id:t.layerId,geometryType:n.geometryTypeJSON,minScale:i,maxScale:r,objectIdField:"OBJECTID",fields:[R.toJSON(),E.toJSON()],spatialReference:o},featureSet:{features:s,geometryType:n.geometryTypeJSON}})}}_writeMapNote(e,t,n,i){if(null==t)return;const{geometry:r,symbol:o,popupTemplate:l}=t;if(null==r)return;if(r.type!==n)return void i?.messages?.push(new y.A("map-notes-layer:invalid-geometry-type",`Geometry "${r.type}" cannot be saved in "${n}" layer`,{graphic:t}));if(null==o)return void i?.messages?.push(new y.A("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const a={attributes:{...t.attributes},geometry:r.toJSON(),symbol:o.toJSON()};null!=l&&(a.popupInfo=l.toJSON()),e.push(a)}_normalizeObjectIds(e,t){const n=t.name;let i=(0,_.H)(n,e)+1;const r=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[n]||r.has(e[n]))&&(e[n]=i++),r.add(e[n])}}};(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"capabilities",void 0),(0,i._)([(0,d.w)(["portal-item","web-map"],"capabilities",["layers"])],z.prototype,"readCapabilities",null),(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"featureCollections",void 0),(0,i._)([(0,d.w)(["web-map","portal-item"],"featureCollections",["layers"])],z.prototype,"readFeatureCollections",null),(0,i._)([(0,p.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],z.prototype,"featureCollectionJSON",void 0),(0,i._)([(0,d.w)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],z.prototype,"readLegacyfeatureCollectionJSON",null),(0,i._)([(0,p.MZ)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],z.prototype,"featureCollectionType",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"fullExtent",null),(0,i._)([(0,p.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],z.prototype,"legendEnabled",void 0),(0,i._)([(0,p.MZ)({type:["show","hide","hide-children"]})],z.prototype,"listMode",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"minScale",void 0),(0,i._)([(0,d.w)(["web-map","portal-item"],"minScale",["layers"])],z.prototype,"readMinScale",null),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"maxScale",void 0),(0,i._)([(0,d.w)(["web-map","portal-item"],"maxScale",["layers"])],z.prototype,"readMaxScale",null),(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"multipointLayer",null),(0,i._)([(0,p.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],z.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"pointLayer",null),(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"polygonLayer",null),(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"polylineLayer",null),(0,i._)([(0,p.MZ)({type:A.A})],z.prototype,"spatialReference",void 0),(0,i._)([(0,d.w)(["web-map","portal-item"],"spatialReference",["layers"])],z.prototype,"readSpatialReference",null),(0,i._)([(0,p.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],z.prototype,"sublayers",void 0),(0,i._)([(0,d.w)("web-map","sublayers",["layers"])],z.prototype,"readSublayers",null),(0,i._)([(0,m.K)("web-map","sublayers")],z.prototype,"writeSublayers",null),(0,i._)([(0,p.MZ)({readOnly:!0})],z.prototype,"textLayer",null),(0,i._)([(0,p.MZ)()],z.prototype,"title",void 0),(0,i._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),z=(0,i._)([(0,c.$)("esri.layers.MapNotesLayer")],z);const G=z},33032:(e,t,n)=>{n.d(t,{H:()=>r,L:()=>i});const i=1;function r(e,t){let n=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(n=Math.max(n,t))}return n}},33143:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(90237),r=n(69540),o=n(25482),l=n(10107),a=(n(44208),n(53966),n(87811),n(36005)),s=n(40608),u=n(43937),y=n(80451),p=n(29005);let d=class extends((0,r.O)(o.oY)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const n of Object.keys(e))t[n]=(0,y.rS)(e[n]);return t}writeDomains(e,t){const n={};for(const t of Object.keys(e))e[t]&&(n[t]=e[t]?.toJSON());t.domains=n}};(0,i._)([(0,l.MZ)({json:{write:!0}})],d.prototype,"id",void 0),(0,i._)([(0,l.MZ)({json:{write:!0}})],d.prototype,"name",void 0),(0,i._)([(0,l.MZ)({json:{write:!0}})],d.prototype,"domains",void 0),(0,i._)([(0,a.w)("domains")],d.prototype,"readDomains",null),(0,i._)([(0,u.K)("domains")],d.prototype,"writeDomains",null),(0,i._)([(0,l.MZ)({type:[p.A],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,i._)([(0,s.$)("esri.layers.support.FeatureType")],d);const c=d},95466:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(49186),r=n(25482),o=n(53966),l=n(91869),a=n(3330),s=n(30524),u=n(56400),y=n(96285);const p=new Map;class d{static fromJSON(e){return new d(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new d(e.fields??[],h(e))}static fromLayerJSON(e){return new d(e.fields??[],h(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const n=[];for(const e of this.fields){const t=e?.name,i=m(t);if(t&&i){const r=c(t);this._fieldsMap.set(t,e),this._fieldsMap.set(r,e),this._normalizedFieldsMap.set(i,e),n.push(`${r}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),(0,s.vE)(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):(0,s.WA)(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),(0,s.te)(e)||(0,s.Xz)(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,s.te)(e)||(0,s.Xz)(e)||e.nullable||void 0!==(0,s.lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(c(e))??this._normalizedFieldsMap.get(m(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(o.A.getLogger("esri.layers.support.FieldsIndex").error(new i.A("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u.n$):f.has(t.type)?u.L5:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.L5?a.GB.instance:t===u.n$?y.mQ.utcInstance:(0,l.tE)(p,t,(()=>y.oh.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,s.OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,r.Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function c(e){return e.trim().toLowerCase()}function m(e){return(0,s.rS)(e)?.toLowerCase()??""}const f=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function h(e){const t=new Map;if(!e.fields)return t;const n=!0===e.datesInUnknownTimezone,{timeInfo:i,editFieldsInfo:r}=e,o=(i?"startField"in i?i.startField:i.startTimeField:"")??"",l=(i?"endField"in i?i.endField:i.endTimeField:"")??"",a=function(e){return"dateFieldsTimeZone"in e}(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,u.ZS)(e.dateFieldsTimeReference):null,s=r?function(e){return"timeZone"in e}(r)?r.timeZone??a:r.dateFieldsTimeReference?(0,u.ZS)(r.dateFieldsTimeReference):a??u.n$:null,y=i?function(e){return"timeZone"in e}(i)?i.timeZone??a:i.timeReference?(0,u.ZS)(i.timeReference):a:null,p=new Map([[c(r?.creationDateField??""),s],[c(r?.editDateField??""),s],[c(o),y],[c(l),y]]);for(const{name:i,type:r}of e.fields)if(f.has(r))t.set(i,u.L5);else if("date"!==r&&"esriFieldTypeDate"!==r)t.set(i,null);else if(n)t.set(i,u.L5);else{const e=p.get(c(i??""))??a;t.set(i,e)}return t}},58501:(e,t,n)=>{n.d(t,{q:()=>r});var i=n(62815);function r(e,t,n){if(!n?.features||!n.hasZ)return;const r=(0,i.N)(n.geometryType,t,e.outSpatialReference);if(null!=r)for(const e of n.features)r(e.geometry)}}}]);