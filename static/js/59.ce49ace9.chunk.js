(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[59],{629:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var s=r(3);class i{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if(Object(s.j)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;Object(s.j)(t);)e&&e(t),t=this.dequeue()}}},641:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var s=r(9),i=r(4),n=r(3),a=r(67),o=r(117),u=r(845),d=r(725),c=r(671),l=r(65),h=r(805);const p=i.a.getLogger("esri.views.2d.layers.features.support.whereUtils"),f={getAttribute:(e,t)=>e.field(t)};const _=i.a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");class g{constructor(e){this._geometryBounds=Object(a.g)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],r=[],s=new Set(e);return this._idToVisibility.forEach((e,i)=>{const n=!!(1&this._idToVisibility.get(i)),a=s.has(i);!n&&a?t.push(i):n&&!a&&r.push(i),this._idToVisibility.set(i,a?3:0)}),{show:t,hide:r}}createQuery(){const{geometry:e,spatialRel:t,where:r,timeExtent:s,objectIds:i}=this;return l.a.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:s,objectIds:i})}async update(e,t){this._hash=JSON.stringify(e);const r=await Object(c.e)(e,null,t);await Promise.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await async function(e,t){const i=await r.e(4).then(r.bind(null,448));try{const r=i.WhereClause.create(e,t);if(!r.isStandardized){const e=new s.a("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);p.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,f)}}catch(n){return p.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",s=await Object(u.c)(r,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(o.a)(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=r}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(d.b)(this._serviceInfo.timeInfo,e.timeExtent,h.b);else{const t=new s.a("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);_.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!Object(n.j)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,r)=>{1&t||(this._idToVisibility.set(r,1),e.push(r))}),e}}},671:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return I}));var s=r(21),i=r(3),n=r(39),a=r(254),o=r(17),u=r(248),d=r(24),c=(r(558),r(297)),l=r(102),h=r(555);const p=new s.a({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),f=Object.freeze({}),_=new l.a,g=new l.a,y=new l.a,m={esriGeometryPoint:c.m,esriGeometryPolyline:c.o,esriGeometryPolygon:c.n,esriGeometryMultipoint:c.l};function I(e,t,r,s=e.hasZ,n=e.hasM){if(Object(i.i)(t))return null;const a=e.hasZ&&s,o=e.hasM&&n;if(r){const i=Object(c.u)(y,t,e.hasZ,e.hasM,"esriGeometryPoint",r,s,n);return Object(c.m)(i,a,o)}return Object(c.m)(t,a,o)}function b(e,t,r,s,n,a,o=t,u=r){const d=t&&o,l=r&&u,h=Object(i.j)(s)?"coords"in s?s:s.geometry:null;if(Object(i.i)(h))return null;if(n){let s=Object(c.q)(g,h,t,r,e,n,o,u);return a&&(s=Object(c.u)(y,s,d,l,e,a)),m[e](s,d,l)}if(a){const s=Object(c.u)(y,h,t,r,e,a,o,u);return m[e](s,d,l)}return Object(c.x)(_,h,t,r,o,u),m[e](_,d,l)}async function x(e,t,r){const{outFields:s,orderByFields:i,groupByFieldsForStatistics:n,outStatistics:a}=e;if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),S(e,t,r)}async function S(e,t,s){if(!e)return null;let{where:c}=e;if(e.where=c=c&&c.trim(),(!c||/^1 *= *1$/.test(c)||t&&t===c)&&(e.where=null),!e.geometry)return e;let l=await async function(e){const{geometry:t,distance:s,units:i}=e;if(null==s||"vertexAttributes"in t)return t;const a=t.spatialReference,o=i?p.fromJSON(i):Object(n.f)(a),u=a&&(Object(d.h)(a)||Object(d.p)(a))?t:await Object(h.a)(a,d.b).then(()=>Object(h.b)(t,d.b));return(await async function(){return(await Promise.all([r.e(6),r.e(17)]).then(r.bind(null,708))).geodesicBuffer}())(u.spatialReference,u,s,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;l=Object(a.a)(l),l.spatialReference=t}e.geometry=l,await Object(h.a)(l.spatialReference,s);const _=(await Object(u.a)(Object(o.a)(l)))[0];if(Object(i.i)(_))throw f;const g=_.toJSON(),y=await Object(h.b)(g,g.spatialReference,s);if(!y)throw f;return y.spatialReference=s,e.geometry=y,e}function j(e){return e&&O in e?JSON.parse(JSON.stringify(e,w)):e}const O="_geVersion",w=(e,t)=>e!==O?t:void 0},725:function(e,t,r){"use strict";function s(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:s,endTimeField:i}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(s&&i)t.forEach(e=>{const t=r.getAttribute(e,s),o=r.getAttribute(e,i);null==t||isNaN(t)||(n=Math.min(n,t)),null==o||isNaN(o)||(a=Math.max(a,o))});else{const e=s||i;t.forEach(t=>{const s=r.getAttribute(t,e);null==s||isNaN(s)||(n=Math.min(n,s),a=Math.max(a,s))})}return{start:n,end:a}}function i(e,t,r){if(!t||!e)return null;const{startTimeField:s,endTimeField:i}=e;if(!s&&!i)return null;const{start:n,end:a}=t;return null===n&&null===a?null:void 0===n&&void 0===a?()=>!1:s&&i?function(e,t,r,s,i){return null!=s&&null!=i?n=>{const a=e.getAttribute(n,t),o=e.getAttribute(n,r);return(null==a||a<=i)&&(null==o||o>=s)}:null!=s?t=>{const i=e.getAttribute(t,r);return null==i||i>=s}:null!=i?r=>{const s=e.getAttribute(r,t);return null==s||s<=i}:void 0}(r,s,i,n,a):function(e,t,r,s){return null!=r&&null!=s&&r===s?s=>e.getAttribute(s,t)===r:null!=r&&null!=s?i=>{const n=e.getAttribute(i,t);return n>=r&&n<=s}:null!=r?s=>e.getAttribute(s,t)>=r:null!=s?r=>e.getAttribute(r,t)<=s:void 0}(r,s||i,n,a)}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))},727:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var s=r(545);class i extends s.a{constructor(e,t){super(s.a.createInstance()),this._currentIndex=-1,this._reader=e,this._indices=t}static from(e,t){return new i(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new i(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,s){const i=this.copy();return i._reader=this._reader.transform(e,t,r,s),i}readAttribute(e,t=!1){return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}},786:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s=r(5),i=r(3),n=r(336),a=r(71),o=r(4);const u=r.e(221).then(r.bind(null,978));class d{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const r=Object(n.a)(this._schema,t);if(this._schema=t,!t||Object(i.i)(r)||!Object(n.b)(r,"attributes"))return;Object(s.a)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",r),this._bitsets.computed.clear(),e.targets[t.name]=!0;const a=t.attributes,o=[],u=[];for(const s in a){const e=a[s];switch(e.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(e));break;case"label-expression":o.push(this._createLabelArcadeComputedField(e));break;case"statistic":u.push(e)}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some(e=>"expression"===e.type&&e.expression.referencesScale()),this._statisticFields=u}setComputedAttributes(e,t,r,s){const i=this._bitsets.computed;if(!this._canCacheExpressionValue||!i.has(r)){i.set(r);for(const i of this._computedFields){const n=this._evaluateField(t,i,s);switch(i.resultType){case"numeric":e.setComputedNumericAtIndex(r,i.fieldIndex,n);break;case"string":e.setComputedStringAtIndex(r,i.fieldIndex,n)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await Object(a.d)(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex,{createLabelFunction:s}=await u,i=await s(e.label,r,t);return{...e,builder:i}}_evaluateField(e,t,r){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r)||""}case"expression":{const{expression:s}=t;return function(e,t,r){e.referencesGeometry();const s=t.readArcadeFeature();try{return e.evaluate({...r,$feature:s})}catch(i){return o.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",i),null}}(s,e,{$view:{scale:r}})}}}}},805:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var s=r(629),i=r(81),n=(r(5),r(3)),a=r(340),o=r(253),u=r(786),d=r(727);function c(e,t){return e<<16|t}function l(e){return(4294901760&e)>>>16}function h(e){return 65535&e}const p={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class f extends u.a{constructor(e,t,r){super(e,t),this.featureAdapter=p,this.events=new i.a,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new s.a(50),this._index=Object(a.a)(9,e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)})),this._storage=t,this.mode=r}get storage(){return this._storage}get storeStatistics(){let e=0,t=0,r=0;return this.forEach(s=>{const i=s.readGeometry();i&&(t+=i.isPoint?1:i.lengths.reduce((e,t)=>e+t,0),r+=i.isPoint?1:i.lengths.length,e+=1)}),{featureCount:e,vertexCount:t,ringCount:r}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t){if(Object(n.i)(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const r=t.addOrUpdate.getCursor();for(;r.next();){const t=r.getDisplayId();this.setComputedAttributes(this._storage,r,t,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const r=t.addOrUpdate.getCursor();for(;r.next();)this._insertFeature(r,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find(e=>e.tileId===t);if(Object(n.j)(r))return r.readers;const s=new Map,i=this._searchIndex(e.bounds),a=[];for(const n of i){const e=this._storage.getInstanceId(n),t=l(e),r=h(e);s.has(t)||s.set(t,[]),s.get(t).push(r)}return s.forEach((e,t)=>{const r=this._featureSetsByInstance.get(t);a.push(d.a.from(r,e))}),this._indexSearchCache.enqueue({tileId:t,readers:a}),a}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){var s;const e=c(t.instance,t.getIndex()),i=t.getObjectId(),n=null!=(s=this._objectIdToDisplayId.get(i))?s:this._storage.createDisplayId();t.setDisplayId(n),r.setInstanceId(n,e),this._objectIdToDisplayId.set(i,n)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),s=h(r),i=l(r),n=this._featureSetsByInstance.get(i);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),n.removeAtIndex(s),n.isEmpty&&this._featureSetsByInstance.delete(i),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t),s=this._lookupFeature(r);e(s)})}forEachUnsafe(e){this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t),s=l(r),i=h(r),n=this._getFeatureSet(s);n.setIndex(i),e(n)})}forEachInBounds(e,t){const r=this._searchIndex(e);for(const s of r){const e=this.lookupFeatureByDisplayId(s,this._storage);t(Object(n.q)(e))}}forEachBounds(e,t,r){this._rebuildIndex();const s=[0,0,0,0];for(const i of e){if(!i.readGeometry())continue;const e=i.getDisplayId();s[0]=this._storage.getXMin(e),s[1]=this._storage.getYMin(e),s[2]=this._storage.getXMax(e),s[3]=this._storage.getYMax(e),t(Object(o.h)(r,s))}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((s,i)=>{e.has(s)||(t.releaseDisplayId(s),r&&r.unsetAttributeData(s),this._objectIdToDisplayId.delete(i))}),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)})}lookupObjectId(e,t){const r=this.lookupFeatureByDisplayId(e,t);return Object(n.i)(r)?null:r.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=l(t),s=h(t),i=this._getFeatureSet(r);return i?(i.setIndex(s),i):null}_insertFeature(e,t){const r=this._storage,s=e.getObjectId(),i=c(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());let n=this._objectIdToDisplayId.get(s);n||(n=r.createDisplayId(),this._objectIdToDisplayId.set(s,n),this._spatialIndexInvalid=!0),e.setDisplayId(n),r.setInstanceId(n,i),this.setComputedAttributes(r,e,n,t)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach(t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}}):this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)}),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=l(e),r=h(e),s=this._getFeatureSet(t);if(!s)return null;const i=s.getCursor();return i.setIndex(r),i}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}},845:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return I}));var s=r(9),i=r(77),n=r(247);var a=r(17),o=r(24);function u(e,t){return e?t?4:3:t?3:2}function d(e,t,r,s,i){if(!e)return!1;const n=u(t,r),{coords:a,lengths:o}=e;let d=!1,l=0;for(const u of o)d=c(d,a,n,l,u,s,i),l+=u*n;return d}function c(e,t,r,s,i,n,a){let o=e,u=s;for(let d=s,c=s+i*r;d<c;d+=r){u=d+r,u===c&&(u=s);const e=t[d],i=t[d+1],l=t[u],h=t[u+1];(i<a&&h>=a||h<a&&i>=a)&&e+(a-i)/(h-i)*(l-e)<n&&(o=!o)}return o}var l=r(297),h=r(102),p=r(555),f=r(671);const _={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},y={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},m={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function I(e,t,s,o,c){if(Object(a.g)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(l.g)(new h.a,t,!1,!1);return Promise.resolve(t=>function(e,t,r,s){return d(e,t,r,s.coords[0],s.coords[1])}(e,!1,!1,t))}if(Object(a.g)(t)&&"esriGeometryMultipoint"===s){const r=Object(l.g)(new h.a,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve(e=>function(e,t,r,s,i,n){const a=u(i,n),{coords:o,lengths:c}=s;if(!c)return!1;for(let u=0,l=0;u<c.length;u++,l+=a)if(!d(e,t,r,o[l],o[l+1]))return!1;return!0}(r,!1,!1,e,o,c))}if(Object(a.d)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve(e=>Object(i.e)(t,Object(f.c)(s,o,c,e)));if(Object(a.d)(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return Promise.resolve(e=>Object(i.d)(t,Object(f.c)(s,o,c,e)));if(Object(a.d)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?n.a:Object(n.c)(e)}(s);return Promise.resolve(r=>e(t,Object(f.c)(s,o,c,r)))}return Promise.all([r.e(6),r.e(17)]).then(r.bind(null,708)).then(r=>{const i=r[_[e]].bind(null,t.spatialReference,t);return e=>i(Object(f.c)(s,o,c,e))})}async function b(e,t,r){const{spatialRel:i,geometry:n}=e;if(n){if(!0!==g[i])throw new s.a("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(Object(o.l)(n.spatialReference)&&Object(o.l)(r)){if(!function(e){return!0===y[Object(a.c)(e)]}(n))throw new s.a("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===m[e]}(t))throw new s.a("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});if(e.outSR)return Object(p.a)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function x(e){if(Object(a.d)(e))return!0;if(Object(a.g)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}}}]);
//# sourceMappingURL=59.ce49ace9.chunk.js.map