(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[82],{634:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return a}));var r=n(5),o=n(6),i=n(647),s=n(183);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.a:"esriGeometryPolyline"===e?s.c:s.b}}}function u(e,t){if(Object(r.a)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.includes(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const r=new Function(n);return()=>new r}catch(n){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(o.a)(e)}}]}function l(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},647:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},695:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return w}));var r=n(9),o=n(149),i=n(103),s=n(41);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return a[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*l(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function p(e){for(const t of e)if(t.length>2)return!0;return!1}function d(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function f(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function y(e,t,n){switch(t.type){case"LineString":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)g(e,r,n);return e}(e,t,n);case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){b(e,r[0],n);for(let t=1;t<r.length;t++)m(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return j(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;b(e,r[0],n);for(let o=1;o<r.length;o++)m(e,r[o],n);return e}(e,t,n)}}function b(e,t,n){const r=f(t);!function(e){return!d(e)}(r)?g(e,r,n):h(e,r,n)}function m(e,t,n){const r=f(t);!function(e){return d(e)}(r)?g(e,r,n):h(e,r,n)}function g(e,t,n){for(const r of t)j(e,r,n);e.lengths.push(t.length)}function h(e,t,n){for(let r=t.length-1;r>=0;r--)j(e,t[r],n);e.lengths.push(t.length)}function j(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function O(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function w(e){if(!e)throw new r.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!o.test(n))throw new r.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function v(e,t={}){const n=[],r=new Set,o=new Set;let i,a=!1,d=null,f=!1,{geometryType:y=null}=t,b=!1;for(const s of c(e)){const{geometry:e,properties:t,id:c}=s;if((!e||(y||(y=u(e.type)),u(e.type)===y))&&(a||(a=p(l(e))),f||(f=null!=c,f&&(i=typeof c,d=Object.keys(t).filter(e=>t[e]===c))),f&&null!=c&&(d.length>1?d=d.filter(e=>t[e]===c):1===d.length&&(d=t[d[0]]===c?d:[])),!b&&t)){let e=!0;for(const i in t){if(r.has(i))continue;const s=t[i];if(null==s){e=!1,o.add(i);continue}const a=O(s);"unknown"!==a?(o.delete(i),r.add(i),n.push({name:i,alias:i,type:a})):o.add(i)}b=e}}const m=d&&1===d.length&&d[0]||null;if(m)for(const u of n)if(u.name===m&&Object(s.p)(u)){u.type="esriFieldTypeOID";break}return{fields:n,geometryType:y,hasZ:a,objectIdFieldName:m,objectIdFieldType:i,unknownFields:Array.from(o)}}function S(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const a of e){var s;const{geometry:e,properties:c,id:l}=a;if(e&&u(e.type)!==n)continue;const p=c||{};let d=null!=(s=p[r])?s:null;r&&null!=l&&!p[r]&&(p[r]=d=l);const f=new o.b(e?y(new i.a,e,t):null,p,null,d);yield f}}(c(e),t))}},735:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=s()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function u(e){var t="function"===typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,o(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)})(e)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function l(e,t){l=function(e,t){return new s(e,void 0,t)};var n=u(RegExp),o=RegExp.prototype,i=new WeakMap;function s(e,t,r){var o=n.call(this,e,t);return i.set(o,r||i.get(e)),o}function a(e,t){var n=i.get(t);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return c(s,n),s.prototype.exec=function(e){var t=o.exec.call(this,e);return t&&(t.groups=a(t,this)),t},s.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var n=i.get(this);return o[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"===typeof t){var s=this;return o[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==r(e[e.length-1])&&e.push(a(e,s)),t.apply(this,e)}))}return o[Symbol.replace].call(this,e,t)},l.apply(this,arguments)}n.d(t,"a",(function(){return l}))},829:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var r=n(0),o=(n(57),n(184)),i=(n(272),n(326),n(328),n(329),n(95),n(249),n(248),n(363),n(253)),s=n(354),a=n(1),u=(n(8),n(5),n(4),n(3)),c=n(168),l=n(217),p=n(9),d=n(92),f=n(2),y=n(853),b=n(104),m=n(27);let g=class extends d.a{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:n,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:s}}=this;return{capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:s},spatialReference:n,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(e=>b.default.fromJSON(e))}queryFeaturesJSON(e,t={}){const n=this.getFeatureDefinition();return this.load(t).then(()=>Object(y.i)(n,e,t))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const r=new RegExp(`^${t}$`,"i");return null!=(n=e.conformsTo.some(e=>r.test(e)))&&n}_getCapabilities(e,t){var n,r,o,i,s,a,u;const c=Object(f.k)(t)?null==(n=t.components)?void 0:n.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(r=null!=(o=null==c||null==(i=c.limit)||null==(s=i.schema)?void 0:s.maximum)?o:null==c||null==(a=c.limitFeatures)||null==(u=a.schema)?void 0:u.maximum)?r:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const n=null==(t=e.extent)?void 0:t.spatial;if(!n)return null;const r=n.bbox[0],o=4===r.length,i=r[0],s=r[1],a=o?void 0:r[2];return{xmin:i,ymin:s,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:a,zmax:o?void 0:r[5],spatialReference:m.a.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const n=null!=(t=e.storageCrs)?t:y.a,r=Object(y.h)(n);return Object(f.j)(r)?m.a.WGS84:new m.a({wkid:r})}_getSupportedSpatialReferences(e,t){var n;const r="#/crs",o=null!=(n=e.crs)?n:[y.a],i=o.includes(r)?o.filter(e=>e!==r).concat(t.crs):o,s=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter(e=>!s.test(e))}async _loadOGCServices(e,t){const n=Object(f.k)(t)?t.signal:null,{apiKey:r,collectionId:o,customParameters:i,fields:s,geometryType:a,hasZ:u,objectIdField:l,timeInfo:d,url:b}=e,m={fields:null==s?void 0:s.map(e=>e.toJSON()),geometryType:c.c.toJSON(a),hasZ:u,objectIdField:l,timeInfo:null==d?void 0:d.toJSON()},g={apiKey:r,customParameters:i,signal:n},h=await Object(y.f)(b,g),[j,O]=await Promise.all([Object(y.e)(h,g),Object(y.d)(h,g)]);if(!this._conformsToType(j,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new p.a("ogc-feature-layer:no-geojson-support","Server does not support geojson");const w=O.collections.find(e=>e.id===o);if(!w)throw new p.a("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const v=this._conformsToType(j,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Object(y.g)(h,g):null,S=await Object(y.c)(w,m,g),F=this._getCapabilities(S.hasZ,v),I=this._getExtent(w),T=this._getStorageSpatialReference(w).toJSON(),x=this._getSupportedSpatialReferences(w,O),P=new RegExp("^"+y.b,"i"),R={};for(const c of x){const e=Object(y.h)(c);Object(f.k)(e)&&(R[e]||(R[e]=c.replace(P,"")))}S.extent=I,this.featureDefinition={capabilities:F,collection:w,layerDefinition:S,queryParameters:{},spatialReference:T,supportedCrs:R}}};Object(r.a)([Object(a.b)()],g.prototype,"featureDefinition",void 0),Object(r.a)([Object(a.b)({constructOnly:!0})],g.prototype,"layer",void 0),Object(r.a)([Object(a.b)()],g.prototype,"type",void 0),g=Object(r.a)([Object(u.a)("esri.layers.graphics.sources.OGCFeatureSource")],g);const h=g;var j=n(373),O=n(361),w=n(374),v=n(388),S=n(357),F=n(395),I=n(356),T=n(366),x=n(358),P=n(376),R=n(94),k=n(390),C=n(336),D=n(218),M=n(379),G=n(41),E=n(223),q=n(334),_=n(68),N=n(371),L=n(34);const $=Object(M.a)();let A=class extends(Object(j.a)(Object(w.a)(Object(v.a)(Object(O.a)(Object(F.a)(Object(P.a)(Object(x.a)(Object(S.a)(Object(I.a)(Object(T.a)(Object(s.a)(l.a)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new h({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){Object(G.k)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Object(N.a)(this,e)}createQuery(){return new _.a}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var n;let r,o=!1;const i=null==t||null==(n=t.feature)?void 0:n.attributes,s=this.typeIdField&&(null==i?void 0:i[this.typeIdField]);return null!=s&&this.types&&(o=this.types.some(t=>{var n,o;return t.id==s&&(r=null==(n=t.domains)?void 0:n[e],"inherited"===(null==(o=r)?void 0:o.type)&&(r=this._getLayerDomain(e)),!0)})),o||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(_.a.from(e)||this.createQuery(),t)).then(e=>{var t;return null==e||null==(t=e.features)||t.forEach(e=>{e.layer=e.sourceLayer=this}),e})}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),Object(G.k)(this.renderer,this.fieldsIndex),Object(G.l)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};Object(r.a)([Object(a.b)({readOnly:!0,json:{origins:{service:{read:!0}}}})],A.prototype,"capabilities",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],A.prototype,"collectionId",void 0),Object(r.a)([Object(a.b)({type:String})],A.prototype,"copyright",void 0),Object(r.a)([Object(a.b)({readOnly:!0})],A.prototype,"defaultPopupTemplate",null),Object(r.a)([Object(a.b)({type:String})],A.prototype,"definitionExpression",void 0),Object(r.a)([Object(a.b)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],A.prototype,"description",void 0),Object(r.a)([Object(a.b)({type:String})],A.prototype,"displayField",void 0),Object(r.a)([Object(a.b)(R.b)],A.prototype,"elevationInfo",void 0),Object(r.a)([Object(a.b)(k.a)],A.prototype,"featureReduction",void 0),Object(r.a)([Object(a.b)({type:[D.a],json:{origins:{service:{name:"layerDefinition.fields"}}}})],A.prototype,"fields",void 0),Object(r.a)([Object(a.b)($.fieldsIndex)],A.prototype,"fieldsIndex",void 0),Object(r.a)([Object(a.b)({readOnly:!0,type:L.a,json:{origins:{service:{name:"layerDefinition.extent"}}}})],A.prototype,"fullExtent",void 0),Object(r.a)([Object(a.b)({type:c.a.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:c.a.read}}}}})],A.prototype,"geometryType",void 0),Object(r.a)([Object(a.b)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],A.prototype,"hasZ",void 0),Object(r.a)([Object(a.b)({type:Boolean,readOnly:!0})],A.prototype,"isTable",null),Object(r.a)([Object(a.b)({type:[E.a],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:q.a},write:!0}}}})],A.prototype,"labelingInfo",void 0),Object(r.a)([Object(a.b)(R.d)],A.prototype,"labelsVisible",void 0),Object(r.a)([Object(a.b)(R.e)],A.prototype,"legendEnabled",void 0),Object(r.a)([Object(a.b)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],A.prototype,"objectIdField",void 0),Object(r.a)([Object(a.b)({type:["OGCFeatureLayer"]})],A.prototype,"operationalLayerType",void 0),Object(r.a)([Object(a.b)(R.j)],A.prototype,"popupEnabled",void 0),Object(r.a)([Object(a.b)({type:o.a,json:{name:"popupInfo",write:!0}})],A.prototype,"popupTemplate",void 0),Object(r.a)([Object(a.b)({types:i.a,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:i.b,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],A.prototype,"renderer",null),Object(r.a)([Object(a.b)(R.m)],A.prototype,"screenSizePerspectiveEnabled",void 0),Object(r.a)([Object(a.b)({readOnly:!0})],A.prototype,"source",void 0),Object(r.a)([Object(a.b)({readOnly:!0,type:m.a,json:{origins:{service:{read:!0}}}})],A.prototype,"spatialReference",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],A.prototype,"title",void 0),Object(r.a)([Object(a.b)({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),Object(r.a)([Object(a.b)({type:String,readOnly:!0})],A.prototype,"typeIdField",void 0),Object(r.a)([Object(a.b)({type:[C.a]})],A.prototype,"types",void 0),Object(r.a)([Object(a.b)(R.n)],A.prototype,"url",void 0),A=Object(r.a)([Object(u.a)("esri.layers.OGCFeatureLayer")],A);const B=A},853:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return F})),n.d(t,"h",(function(){return I})),n.d(t,"i",(function(){return T})),n.d(t,"j",(function(){return x}));var r=n(735),o=(n(57),n(44)),i=n(9),s=n(12),a=n(2),u=n(26),c=n(40),l=n(324),p=n(286),d=n(695),f=n(634),y=n(359),b=n(387),m=n(27);const g=s.a.getLogger("esri.layers.graphics.sources.ogcfeature"),h="http://www.opengis.net/def/crs/",j=h+"OGC/1.3/CRS84";async function O(e,t,n={},r=5){const{links:s}=e,u=C(s,"items","application/geo+json")||C(s,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(Object(a.j)(u))throw new i.a("ogc-feature-layer:missing-items-page","Missing items url");const{data:c}=await Object(o.default)(u.href,{signal:n.signal,query:{limit:r,...n.customParameters,token:n.apiKey},headers:{accept:"application/geo+json"}});await Object(d.d)(c);const l=Object(d.c)(c,{geometryType:t.geometryType}),p=t.fields||l.fields||[],m=null!=t.hasZ?t.hasZ:l.hasZ,h=l.geometryType,j=t.objectIdField||l.objectIdFieldName||"OBJECTID";let O=t.timeInfo;const w=p.find(e=>e.name===j);if(w)w.type="esriFieldTypeOID",w.editable=!1,w.nullable=!1;else{if(!l.objectIdFieldType)throw new i.a("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");p.unshift({name:j,alias:j,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(j!==l.objectIdFieldName){const e=p.find(e=>e.name===l.objectIdFieldName);e&&(e.type="esriFieldTypeInteger")}p===l.fields&&l.unknownFields.length>0&&g.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:l.unknownFields}});for(const o of p){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),"esriFieldTypeOID"!==o.type&&"esriFieldTypeGlobalID"!==o.type&&(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable),!o.name)throw new i.a("ogc-feature-layer:invalid-field-name","field name is missing",{field:o});if(-1===b.a.jsonValues.indexOf(o.type))throw new i.a("ogc-feature-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o})}if(O){const e=new y.a(p);if(O.startTimeField){const t=e.get(O.startTimeField);t?(O.startTimeField=t.name,t.type="esriFieldTypeDate"):O.startTimeField=null}if(O.endTimeField){const t=e.get(O.endTimeField);t?(O.endTimeField=t.name,t.type="esriFieldTypeDate"):O.endTimeField=null}if(O.trackIdField){const t=e.get(O.trackIdField);t?O.trackIdField=t.name:(O.trackIdField=null,g.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:O}}))}O.startTimeField||O.endTimeField||(g.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:O}}),O=null)}return{drawingInfo:h?Object(f.d)(h):null,geometryType:h,fields:p,hasZ:!!m,objectIdField:j,timeInfo:O}}async function w(e,t={}){const{links:n}=e,r=C(n,"data","application/json")||C(n,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(Object(a.j)(r))throw new i.a("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:s,customParameters:u,signal:c}=t,{data:l}=await Object(o.default)(r.href,{signal:c,headers:{accept:"application/json"},query:{...u,token:s}});return l}async function v(e,t={}){const{links:n}=e,r=C(n,"conformance","application/json")||C(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(Object(a.j)(r))throw new i.a("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:s,customParameters:u,signal:c}=t,{data:l}=await Object(o.default)(r.href,{signal:c,headers:{accept:"application/json"},query:{...u,token:s}});return l}async function S(e,t={}){const{apiKey:n,customParameters:r,signal:i}=t,{data:s}=await Object(o.default)(e,{signal:i,headers:{accept:"application/json"},query:{...r,token:n}});return s}async function F(e,t={}){const n="application/vnd.oai.openapi+json;version=3.0",r=C(e.links,"service-desc",n);if(Object(a.j)(r))return g.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:i,customParameters:s,signal:u}=t,{data:c}=await Object(o.default)(r.href,{signal:u,headers:{accept:n},query:{...s,token:i}});return c}function I(e){const t=Object(r.a)(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(e),n=null==t?void 0:t.groups;if(!n)return null;const{authority:o,code:i}=n;switch(o.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return m.a.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return m.a.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(i,10);return Number.isNaN(e)?null:e}default:return null}}async function T(e,t,n){const r=await x(e,t,n);return Object(l.j)(r)}async function x(e,t,n){const{capabilities:{query:{maxRecordCount:r}},collection:s,layerDefinition:f,queryParameters:{apiKey:y,customParameters:b},spatialReference:g,supportedCrs:h}=e,{links:j}=s,O=C(j,"items","application/geo+json")||C(j,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(Object(a.j)(O))throw new i.a("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:w,num:v,start:S,timeExtent:F,where:I}=t;if(t.objectIds)throw new i.a("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const T=m.a.fromJSON(g),x=Object(a.s)(t.outSpatialReference,T),R=x.isWGS84?null:P(x,h),D=k(w,h),M=function(e){if(Object(a.j)(e))return null;const{start:t,end:n}=e;return`${Object(a.k)(t)?t.toISOString():".."}/${Object(a.k)(n)?n.toISOString():".."}`}(F),G=(_=I,Object(a.j)(_)||!_||"1=1"===_?null:_),E=null!=v?v:null!=S&&void 0!==S?10:r,{data:q}=await Object(o.default)(O.href,{...n,query:{...b,...D,crs:R,datetime:M,query:G,limit:E,startindex:S,token:y},headers:{accept:"application/geo+json"}});var _;let N=!1;if(q.links){N=!!q.links.find(e=>"next"===e.rel)}!N&&Number.isInteger(q.numberMatched)&&Number.isInteger(q.numberReturned)&&(N=q.numberReturned<q.numberMatched);const{fields:L,globalIdField:$,hasM:A,hasZ:B,objectIdField:Q}=f,W=f.geometryType,J=Object(d.a)(q,{geometryType:W,hasZ:B,objectIdField:Q});if(!R&&x.isWebMercator)for(const o of J)if(Object(a.k)(o.geometry)){const e=Object(l.k)(o.geometry,W,B,!1);e.spatialReference=m.a.WGS84,o.geometry=Object(l.d)(Object(c.d)(e,x))}for(const o of J)o.objectId=o.attributes[Q];const Z=R||!R&&x.isWebMercator?x.toJSON():u.b,z=new p.a;return z.exceededTransferLimit=N,z.features=J,z.fields=L,z.geometryType=W,z.globalIdFieldName=$,z.hasM=A,z.hasZ=B,z.objectIdFieldName=Q,z.spatialReference=Z,z}function P(e,t){var n,r,o;const{isWebMercator:i,wkid:s}=e;if(!s)return null;const a=i?null!=(n=null!=(r=null!=(o=t[3857])?o:t[102100])?r:t[102113])?n:t[900913]:t[e.wkid];return a?`${h}${a}`:null}function R(e){if(Object(a.j)(e))return"";const{xmin:t,ymin:n,xmax:r,ymax:o}=e;return`${t},${n},${r},${o}`}function k(e,t){if(!function(e){return Object(a.k)(e)&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:R(e)};const r=P(n,t);return Object(a.k)(r)?{bbox:R(e),"bbox-crs":r}:n.isWebMercator?{bbox:R(Object(c.d)(e,m.a.WGS84))}:null}function C(e,t,n){return e.find(e=>e.rel===t&&e.type===n)||e.find(e=>e.rel===t&&!e.type)}}}]);
//# sourceMappingURL=82.55c2aa89.chunk.js.map