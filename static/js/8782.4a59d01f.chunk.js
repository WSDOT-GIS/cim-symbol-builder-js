"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[8782],{25820:(e,t,s)=>{s.d(t,{S:()=>n,X:()=>i});const i=1;function n(e,t){let s=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(s=Math.max(s,t))}return s}},48782:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var i=s(10064),n=s(92026),r=s(77981),a=s(92975),o=s(83406),u=s(25820),l=s(97114),d=s(19995),p=s(14e3),c=s(63543),y=s(68808),f=s(52410),h=s(85249),m=s(80031);const g=a.Zn,b={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.Zn},I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function _(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}class E{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:s}=e,n=this._inferLayerProperties(s,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:!!n.hasM,o=null!=e.hasZ?e.hasZ:!!n.hasZ,y=!e.spatialReference&&!n.spatialReference,F=y?g:e.spatialReference||n.spatialReference,_=y?b:null,E=e.geometryType||n.geometryType,T=!E;let v=e.objectIdField||n.objectIdField,q=e.timeInfo;if(!T&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new i.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!v)throw new i.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&v!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${v}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),v=n.objectIdField),v&&!n.objectIdField){let e=null;r.some((t=>t.name===v&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:v,name:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const u of r){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new i.Z("feature-layer:invalid-field-name","field name is missing",{field:u});if(u.name===v&&(u.type="esriFieldTypeOID"),!h.v.jsonValues.includes(u.type))throw new i.Z("feature-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u})}const x={};for(const i of r)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){const e=(0,m.os)(i);void 0!==e&&(x[i.name]=e)}if(this._fieldsIndex=new f.Z(r),this._createDefaultAttributes=(0,c.Dm)(x,v),q){if(q.startTimeField){const e=this._fieldsIndex.get(q.startTimeField);e?(q.startTimeField=e.name,e.type="esriFieldTypeDate"):q.startTimeField=null}if(q.endTimeField){const e=this._fieldsIndex.get(q.endTimeField);e?(q.endTimeField=e.name,e.type="esriFieldTypeDate"):q.endTimeField=null}if(q.trackIdField){const e=this._fieldsIndex.get(q.trackIdField);e?q.trackIdField=e.name:(q.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:q}}))}q.startTimeField||q.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:q}}),q=null)}const w={warnings:t,featureErrors:[],layerDefinition:{...I,drawingInfo:(0,c.bU)(E),templates:(0,c.Hq)(x),extent:_,geometryType:E,objectIdField:v,fields:r,hasZ:o,hasM:a,timeInfo:q},assignedObjectIds:{}};if(this._queryEngine=new p.q({fields:r,geometryType:E,hasM:a,hasZ:o,objectIdField:v,spatialReference:F,featureStore:new l.Z({geometryType:E,hasM:a,hasZ:o}),timeInfo:q,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=u.X,w;const j=(0,u.S)(v,s);return this._nextObjectId=j+1,await(0,d._W)(s,F),this._loadInitialFeatures(w,s)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,y.b)(t,s),(0,d._W)(e.adds,t),(0,d._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,a=null,o=null,u=null;for(const l of e){const e=l.geometry;if(!(0,n.Wi)(e)&&(a||(a=(0,r.Ji)(e)),o||(o=e.spatialReference),null==s&&(s=F(e)),null==i&&(i=_(e)),a&&o&&null!=s&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(u=e.name)}return{geometryType:a,spatialReference:o,objectIdField:u,hasM:i,hasZ:s}}async _loadInitialFeatures(e,t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:u,spatialReference:l,featureStore:p}=this._queryEngine,c=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&s!==(0,r.Ji)(o.geometry)){e.featureErrors.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,y.O0)(this._fieldsIndex,t,o.attributes,!0,e.warnings);i?e.featureErrors.push(i):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[u]),(0,n.pC)(o.geometry)&&(o.geometry=(0,d.iV)(o.geometry,o.geometry.spatialReference,l)),c.push(o))}p.addMany((0,o.Yn)([],c,s,a,i,u));const{fullExtent:f,timeExtent:h}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=f,h){const{start:t,end:s}=h;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),s&&s.length&&this._applyUpdateEdits(n,s),i&&i.length){for(const e of i)n.deleteResults.push((0,y.d1)(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:a,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:a,hasZ:u,objectIdField:l,spatialReference:p,featureStore:c}=this._queryEngine,f=[];for(const o of t){if(o.geometry&&i!==(0,r.Ji)(o.geometry)){s.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,y.O0)(this._fieldsIndex,t,o.attributes);if(a)s.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[l];e.uidToObjectId[o.uid]=t}if((0,n.pC)(o.geometry)){const e=o.geometry.spatialReference??p;o.geometry=(0,d.iV)((0,y.og)(o.geometry,e),e,p)}f.push(o),s.push((0,y.d1)(o.attributes[l]))}}c.addMany((0,o.Yn)([],f,i,u,a,l))}_applyUpdateEdits(e,t){let{updateResults:s}=e;const{geometryType:i,hasM:a,hasZ:u,objectIdField:l,spatialReference:p,featureStore:c}=this._queryEngine;for(const f of t){const{attributes:e,geometry:t}=f,h=e&&e[l];if(null==h){s.push((0,y.av)(`Identifier field ${l} missing`));continue}if(!c.has(h)){s.push((0,y.av)(`Feature with object id ${h} missing`));continue}const m=(0,o.EI)(c.getFeature(h),i,u,a);if((0,n.pC)(t)){if(i!==(0,r.Ji)(t)){s.push((0,y.av)("Incorrect geometry type."));continue}const e=t.spatialReference??p;m.geometry=(0,d.iV)((0,y.og)(t,e),e,p)}if(e){const t=(0,y.O0)(this._fieldsIndex,m.attributes,e);if(t){s.push(t);continue}}c.add((0,o.XA)(m,i,u,a,l)),s.push((0,y.d1)(h))}}_assignObjectId(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;s&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},63543:(e,t,s)=>{s.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>o});var i=s(93169),n=s(84652),r=s(60480),a=s(76115);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new i}catch(s){return()=>({[t]:null,...e})}}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},68808:(e,t,s)=>{s.d(t,{O0:()=>c,av:()=>u,b:()=>m,d1:()=>d,og:()=>h});var i=s(92026),n=s(92975),r=s(80031);class a{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new l(e)}const p=new Set;function c(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4?arguments[4]:void 0;p.clear();for(const a in s){const o=e.get(a);if(!o)continue;const l=s[a],d=y(o,l);if(d!==l&&n&&n.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:d}}),p.add(o.name),o&&(i||o.editable)){const e=(0,r.Qc)(o,d);if(e)return u((0,r.vP)(e,o,d));t[o.name]=d}}for(const r of e?.requiredFields??[])if(!p.has(r.name))return u(`missing required field "${r.name}"`);return null}function y(e,t){let s=t;return"string"==typeof t&&(0,r.H7)(e)?s=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(s=String(t)),(0,r.Pz)(s)}let f;function h(e,t){if(!e||!(0,n.JY)(t))return e;if("rings"in e||"paths"in e){if((0,i.Wi)(f))throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function m(e,t){!(0,n.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,i.Wi)(f)&&(f=await Promise.all([s.e(9058),s.e(3645)]).then(s.bind(s,50309))),f}()}}}]);
//# sourceMappingURL=8782.4a59d01f.chunk.js.map