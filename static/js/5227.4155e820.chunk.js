"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[5227],{75227:(t,e,r)=>{r.d(e,{A:()=>T});var n=r(35143),o=r(91967),s=r(50076),i=r(81806),a=r(50346),u=r(90534),c=r(46053),l=(r(76460),r(47249),r(85842)),h=r(80963),d=r(19463),f=r(89551),p=r(54994),m=r(37713),y=(r(35238),r(36643)),_=r(97015),b=r(76797);var g=r(53104),S=r(14009),F=r(30726),x=r(86729),D=r(98618);function C(t,e){return e}function w(t,e,r,n){switch(r){case 0:return A(t,e+n,0);case 1:return"lowerLeft"===t.originPosition?A(t,e+n,1):function({translate:t,scale:e},r,n){return t[n]-r*e[n]}(t,e+n,1)}}function P(t,e,r,n){return 2===r?A(t,e,2):w(t,e,r,n)}function R(t,e,r,n){return 2===r?0===e?0:A(t,e,3):w(t,e,r,n)}function v(t,e,r,n){return 3===r?0===e?0:A(t,e,3):P(t,e,r,n)}function A({translate:t,scale:e},r,n){return t[n]+r*e[n]}class O{constructor(t){this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=C,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,x.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return{}}addField(t,e){const r=t.fields;(0,F.Lw)(r),r.push(e);const n=r.map((t=>t.name));this._attributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._mValueOffset=null,this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),t.geometryType){case"esriGeometryPoint":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"esriGeometryPolygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"esriGeometryPolyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"esriGeometryMultipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,e,r){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:n}=e,o=(0,D.Ch)(r.clone(),r,!1,!1,this._transform),s=(0,D.zv)(o,n,!1,!1);t.queryGeometryType=n,t.queryGeometry={...s}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const n=this._transform;switch(e=this._applyTransform(n,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t);const n=this._transform;return null!==this._mValueOffset&&0===t&&e>0&&!(e%this._mValueOffset)?0:this._applyTransform(n,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const n=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(n)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const n=this._transformPathLikeValue(e,r),o=t[t.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=n}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?v:e?P:r?R:w}}var q=r(77725);async function G(t,e,r){const n=(0,p.Dl)(t),o={...r},s=_.A.from(e),i=!s.quantizationParameters,{data:a}=await(0,y.IJ)(n,s,new O({sourceSpatialReference:s.sourceSpatialReference,applyTransform:i}),o);return a}let M=class extends o.A{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,u.An)(this.url)}async execute(t,e){const r=await this.executeJSON(t,e);return this.featureSetFromJSON(t,r,e)}async executeJSON(t,e){const r=this._normalizeQuery(t),n=null!=t.outStatistics?.[0],o=(0,i.A)("featurelayer-pbf-statistics"),s=!n||o;let a;if(this.pbfSupported&&s)try{a=await G(this.url,r,e)}catch(u){if("query:parsing-pbf"!==u.name)throw u;this.pbfSupported=!1}return this.pbfSupported&&s||(a=await(0,S.e)(this.url,r,e)),this._normalizeFields(a.fields),a}async featureSetFromJSON(t,e,n){if(!this._queryIs3DObjectFormat(t)||null==this.infoFor3D||!e.features)return q.A.fromJSON(e);const{meshFeatureSetFromJSON:o}=await(0,a.qr)(Promise.all([r.e(8105),r.e(9174),r.e(6293),r.e(6773)]).then(r.bind(r,10156)),n);return o(t,this.infoFor3D,e)}executeForCount(t,e){return(0,m.I)(this.url,this._normalizeQuery(t),e)}executeForExtent(t,e){return async function(t,e,r){const n=(0,p.Dl)(t),o=await(0,y.Jf)(n,_.A.from(e),{...r}),s=o.data.extent;return!s||isNaN(s.xmin)||isNaN(s.ymin)||isNaN(s.xmax)||isNaN(s.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:b.A.fromJSON(s)}}(this.url,this._normalizeQuery(t),e)}executeForIds(t,e){return(0,g.V)(this.url,this._normalizeQuery(t),e)}async executeRelationshipQuery(t,e){const[{default:n},{executeRelationshipQuery:o}]=await(0,a.qr)(Promise.all([Promise.resolve().then(r.bind(r,58289)),r.e(9437).then(r.bind(r,69437))]),e);return t=n.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),o(this.url,t,e)}async executeRelationshipQueryForCount(t,e){const[{default:n},{executeRelationshipQueryForCount:o}]=await(0,a.qr)(Promise.all([Promise.resolve().then(r.bind(r,58289)),r.e(9437).then(r.bind(r,69437))]),e);return t=n.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),o(this.url,t,e)}async executeAttachmentQuery(t,e){const{executeAttachmentQuery:n,fetchAttachments:o,processAttachmentQueryResult:s}=await(0,a.qr)(r.e(5297).then(r.bind(r,55297)),e),i=(0,p.Dl)(this.url);return s(i,await(this.queryAttachmentsSupported?n(i,t,e):o(i,t,e)))}async executeBinsQuery(t,e){const{executeBinsQuery:n}=await(0,a.qr)(r.e(4530).then(r.bind(r,84530)),e);return n(this.parsedUrl,t,e)}async executeTopFeaturesQuery(t,e){const{executeTopFeaturesQuery:n}=await(0,a.qr)(r.e(3863).then(r.bind(r,63863)),e);return n(this.parsedUrl,t,this.sourceSpatialReference,e)}async executeForTopIds(t,e){const{executeForTopIds:n}=await(0,a.qr)(r.e(9119).then(r.bind(r,69119)),e);return n(this.parsedUrl,t,e)}async executeForTopExtents(t,e){const{executeForTopExtents:n}=await(0,a.qr)(r.e(2520).then(r.bind(r,12520)),e);return n(this.parsedUrl,t,e)}async executeForTopCount(t,e){const{executeForTopCount:n}=await(0,a.qr)(r.e(6406).then(r.bind(r,36406)),e);return n(this.parsedUrl,t,e)}_normalizeQuery(t){let e=_.A.from(t);e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?f.L.from(t.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(null!=r&&this._queryIs3DObjectFormat(t)){e=e===t?e.clone():e,e.formatOf3DObjects=null;const n=(0,d.U9)(r),o=(0,d.CW)(r);for(const t of r.queryFormats){if(t===n){e.formatOf3DObjects=t;break}t!==o||e.formatOf3DObjects||(e.formatOf3DObjects=t)}if(!e.formatOf3DObjects)throw new s.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(e.outSpatialReference&&!(0,h.aI)(e.outSpatialReference,this.sourceSpatialReference))throw new s.A("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(null==e.outFields||!e.outFields.includes("*")){e=e===t?e.clone():e,null==e.outFields&&(e.outFields=[]);const{originX:n,originY:o,originZ:s,translationX:i,translationY:a,translationZ:u,scaleX:c,scaleY:l,scaleZ:h,rotationX:d,rotationY:f,rotationZ:p,rotationDeg:m}=r.transformFieldRoles;e.outFields.push(n,o,s,i,a,u,c,l,h,d,f,p,m)}}return e}_normalizeFields(t){if(null!=this.fieldsIndex&&null!=t)for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON())}}_queryIs3DObjectFormat(t){return null!=this.infoFor3D&&!0===t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};(0,n._)([(0,c.MZ)({type:f.L})],M.prototype,"dynamicDataSource",void 0),(0,n._)([(0,c.MZ)()],M.prototype,"fieldsIndex",void 0),(0,n._)([(0,c.MZ)()],M.prototype,"gdbVersion",void 0),(0,n._)([(0,c.MZ)()],M.prototype,"infoFor3D",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],M.prototype,"parsedUrl",null),(0,n._)([(0,c.MZ)()],M.prototype,"pbfSupported",void 0),(0,n._)([(0,c.MZ)()],M.prototype,"queryAttachmentsSupported",void 0),(0,n._)([(0,c.MZ)()],M.prototype,"sourceSpatialReference",void 0),(0,n._)([(0,c.MZ)({type:String})],M.prototype,"url",void 0),M=(0,n._)([(0,l.$)("esri.layers.graphics.sources.support.QueryTask")],M);const T=M},19463:(t,e,r)=>{r.d(e,{CW:()=>f,Fm:()=>u,JQ:()=>d,JZ:()=>F,ND:()=>m,R_:()=>i,U9:()=>h,fu:()=>o,nr:()=>p,oF:()=>s,rq:()=>c,z$:()=>l});const n=[["binary","application/octet-stream","bin",""]];function o(t,e){return null!=_(e.name,t?.supportedFormats??[])}function s(t,e){if(!t)return!1;const r=c(e,t.supportedFormats??[]);return null!=r&&t.editFormats.includes(r)}function i(t,e){return b(function(t,e){const r=t.toLowerCase();return y(e).find((t=>g(t)===r))}(t,e))}function a(t,e){return b(_(t,e))}function u(t,e){return g(function(t,e){return y(e).find((e=>b(e)===t))}(t,e))}function c(t,e){return a(t.name,e)??i(t.type,e)}function l(t,e,r){return i(t,r)??a(e,r)}function h({supportedFormats:t}){return l("model/gltf-binary","glb",t)}function d(t){const e=h(t);return null!=e&&t.editFormats.includes(e)}function f({supportedFormats:t}){return l("model/gltf+json","gltf",t)}function p({supportedFormats:t}){return l("application/esri3do-SR_world","wld",t)}function m({supportedFormats:t}){return l("application/esri3do-SR_prj","prj",t)}function y(t){return[...n,...t]}function _(t,e){const r=t.toLowerCase();return y(e).find((t=>S(t).some((t=>r.endsWith(t)))))}function b(t){return t?.[0]}function g(t){return t?.[1].toLowerCase()}function S(t){return t?.[2].split(",").map((t=>t.toLowerCase()))??[]}function F(t){return t.tables?.find((t=>"assetMaps"===t.role))}},37713:(t,e,r)=>{r.d(e,{I:()=>i});var n=r(54994),o=r(36643),s=r(97015);async function i(t,e,r){const i=(0,n.Dl)(t),{data:a}=await(0,o.gW)(i,s.A.from(e),r);return a.count}},53104:(t,e,r)=>{r.d(e,{V:()=>i});var n=r(54994),o=r(36643),s=r(97015);async function i(t,e,r){const i=(0,n.Dl)(t),{data:a}=await(0,o.Pk)(i,s.A.from(e),r);return a.objectIds}},14009:(t,e,r)=>{r.d(e,{e:()=>u,s:()=>a});var n=r(54994),o=r(36643),s=r(77725),i=r(97015);async function a(t,e,r){const n=await u(t,e,r);return s.A.fromJSON(n)}async function u(t,e,r){const s=(0,n.Dl)(t),a={...r},u=i.A.from(e),{data:c}=await(0,o.eW)(s,u,u.sourceSpatialReference,a);return c}}}]);
//# sourceMappingURL=5227.4155e820.chunk.js.map