"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9184],{51344:(t,e,s)=>{function n(t){return null!=a(t)||null!=o(t)}function i(t){return u.test(t)}function r(t){return a(t)??o(t)}function o(t){const e=new Date(t);return function(t,e){if(Number.isNaN(t.getTime()))return!1;let s=!0;if(d&&/\d+\W*$/.test(e)){const t=e.match(/[a-zA-Z]{2,}/);if(t){let e=!1,n=0;for(;!e&&n<=t.length;)e=!l.test(t[n]),n++;s=!e}}return s}(e,t)?Number.isNaN(e.getTime())?null:e.getTime()-6e4*e.getTimezoneOffset():null}function a(t){const e=u.exec(t);if(!e?.groups)return null;const s=e.groups,n=+s.year,i=+s.month-1,r=+s.day,o=+(s.hours??"0"),a=+(s.minutes??"0"),l=+(s.seconds??"0");if(o>23)return null;if(a>59)return null;if(l>59)return null;const d=s.ms??"0",c=d?+d.padEnd(3,"0").slice(0,3):0;let h;if(s.isUTC||!s.offsetSign)h=Date.UTC(n,i,r,o,a,l,c);else{const t=+s.offsetHours,e=+s.offsetMinutes;h=6e4*("+"===s.offsetSign?-1:1)*(60*t+e)+Date.UTC(n,i,r,o,a,l,c)}return Number.isNaN(h)?null:h}s.d(e,{Br:()=>i,Cq:()=>n,_U:()=>r});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},70373:(t,e,s)=>{s.d(e,{E:()=>w,w:()=>o});var n=s(18690),i=(s(81806),s(30015)),r=s(61196);class o{constructor(t=9,e){this._compareMinX=c,this._compareMinY=h,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),I.prune(),b.prune(),B.prune(),F.prune()}all(t){a(this._data,t)}search(t,e){let s=this._data;const n=this._toBBox;if(_(t,s))for(I.clear();s;){for(let i=0,r=s.children.length;i<r;i++){const r=s.children[i],o=s.leaf?n(r):r;_(t,o)&&(s.leaf?e(r):g(t,o)?a(r,e):I.push(r))}s=I.pop()}}collides(t){let e=this._data;const s=this._toBBox;if(!_(t,e))return!1;for(I.clear();e;){for(let n=0,i=e.children.length;n<i;n++){const i=e.children[n],r=e.leaf?s(i):i;if(_(t,r)){if(e.leaf||g(t,r))return!0;I.push(i)}}e=I.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,s=t.length;e<s;e++)this.insert(t[e]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(t){if(!t)return this;let e,s=this._data,i=null,r=0,o=!1;const a=this._toBBox(t);for(B.clear(),F.clear();s||B.length>0;){if(s||(s=B.pop(),i=B.data[B.length-1],r=F.pop()??0,o=!0),s.leaf&&(e=(0,n.qh)(s.children,t,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),B.push(s),this._condense(B),this;o||s.leaf||!g(s,a)?i?(r++,s=i.children[r],o=!1):s=null:(B.push(s),F.push(r),r=0,i=s,s=s.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,s,n){const i=s-e+1;let r=this._maxEntries;if(i<=r){const n=new E(t.slice(e,s+1));return u(n,this._toBBox),n}n||(n=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(n-1)));const o=new M([]);o.height=n;const a=Math.ceil(i/r),l=a*Math.ceil(Math.sqrt(r));x(t,e,s,l,this._compareMinX);for(let u=e;u<=s;u+=l){const e=Math.min(u+l-1,s);x(t,u,e,a,this._compareMinY);for(let s=u;s<=e;s+=a){const i=Math.min(s+a-1,e);o.children.push(this._build(t,s,i,n-1))}}return u(o,this._toBBox),o}_insert(t,e,s){const n=this._toBBox,i=s?t:n(t);B.clear();const r=function(t,e,s,n){for(;n.push(e),!0!==e.leaf&&n.length-1!==s;){let s,n=1/0,i=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],a=p(o),u=m(t,o)-a;u<i?(i=u,n=a<n?a:n,s=o):u===i&&a<n&&(n=a,s=o)}e=s||e.children[0]}return e}(i,this._data,e,B);for(r.children.push(t),d(r,i);e>=0&&B.data[e].children.length>this._maxEntries;)this._split(B,e),e--;!function(t,e,s){for(let n=s;n>=0;n--)d(e.data[n],t)}(i,B,e)}_split(t,e){const s=t.data[e],n=s.children.length,i=this._minEntries;this._chooseSplitAxis(s,i,n);const r=this._chooseSplitIndex(s,i,n);if(!r)return;const o=s.children.splice(r,s.children.length-r),a=s.leaf?new E(o):new M(o);a.height=s.height,u(s,this._toBBox),u(a,this._toBBox),e?t.data[e-1].children.push(a):this._splitRoot(s,a)}_splitRoot(t,e){this._data=new M([t,e]),this._data.height=t.height+1,u(this._data,this._toBBox)}_chooseSplitIndex(t,e,s){let n,i,r;n=i=1/0;for(let o=e;o<=s-e;o++){const e=l(t,0,o,this._toBBox),a=l(t,o,s,this._toBBox),u=y(e,a),d=p(e)+p(a);u<n?(n=u,r=o,i=d<i?d:i):u===n&&d<i&&(i=d,r=o)}return r}_chooseSplitAxis(t,e,s){const n=t.leaf?this._compareMinX:c,i=t.leaf?this._compareMinY:h;this._allDistMargin(t,e,s,n)<this._allDistMargin(t,e,s,i)&&t.children.sort(n)}_allDistMargin(t,e,s,n){t.children.sort(n);const i=this._toBBox,r=l(t,0,e,i),o=l(t,s-e,s,i);let a=f(r)+f(o);for(let u=e;u<s-e;u++){const e=t.children[u];d(r,t.leaf?i(e):e),a+=f(r)}for(let u=s-e-1;u>=e;u--){const e=t.children[u];d(o,t.leaf?i(e):e),a+=f(o)}return a}_condense(t){for(let e=t.length-1;e>=0;e--){const s=t.data[e];if(0===s.children.length)if(e>0){const i=t.data[e-1],r=i.children;r.splice((0,n.qh)(r,s,r.length,i.indexHint),1)}else this.clear();else u(s,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){let s=t;for(b.clear();s;){if(!0===s.leaf)for(const t of s.children)e(t);else b.pushArray(s.children);s=b.pop()??null}}function u(t,e){l(t,0,t.children.length,e,t)}function l(t,e,s,n,i){i||(i=new E([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=e;o<s;o++)r=t.children[o],d(i,t.leaf?n(r):r);return i}function d(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function h(t,e){return t.minY-e.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function y(t,e){const s=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,i-s)*Math.max(0,r-n)}function g(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function _(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,s,n,i){const o=[e,s];for(;o.length;){const e=o.pop(),s=o.pop();if(e-s<=n)continue;const a=s+Math.ceil((e-s)/n/2)*n;(0,r.q)(t,a,s,e,i),o.push(s,a,a,e)}}const I=new i.A,b=new i.A,B=new i.A,F=new i.A({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class S extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new n.vW}}class E extends S{constructor(t){super(),this.children=t,this.leaf=!0}}class M extends S{constructor(t){super(),this.children=t,this.leaf=!1}}},33328:(t,e,s)=>{s.d(e,{F:()=>u});var n=s(81806),i=s(70373),r=s(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(t,e,s){(function(t){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3]})(e),t.search(o,s)}class u{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.w(9,(0,n.A)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((s,n)=>{t[e++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.Ie)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),a(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(t,e,s)=>{s.d(e,{A:()=>f});var n=s(18690),i=s(50076),r=s(54099),o=s(76460),a=s(42294),u=s(2413),l=s(98618),d=s(33328),c=s(55167),h=s(33376);const p=(0,a.vt)();class f{constructor(t){this.geometryInfo=t,this._boundsStore=new d.F,this._featuresById=new Map,this.events=new r.A,this.featureAdapter=h.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{null!=e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if(null==this.fullBounds)return null;const[e,s,n,i]=this.fullBounds;return{xmin:e,ymin:s,xmax:n,ymax:i,spatialReference:(0,c.ag)(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}upsertMany(t){const e=t.map((t=>this._upsert(t)));return this._emitChanged(),e.filter(n.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e){for(const s of t){const t=this._boundsStore.get(s.objectId);t&&e((0,a.Jt)(p,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:t}));const s=this._featuresById.get(e);let n;if(s?(t.displayId=s.displayId,n=this._boundsStore.get(e),this._boundsStore.delete(e)):null!=this.onFeatureAdd&&this.onFeatureAdd(t),!t.geometry?.coords?.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);n=(0,l.jQ)(null!=n?n:(0,u.vt)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=n&&this._boundsStore.set(e,n),this._featuresById.set(e,t)}_upsert(t){const e=t?.objectId;if(null==e)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:t})),null;const s=this._featuresById.get(e);if(!s)return this._add(t),t;const{geometry:n,attributes:r}=t;for(const i in r)s.attributes[i]=r[i];return n&&(s.geometry=n,this._boundsStore.set(e,(0,l.jQ)((0,u.vt)(),n,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),s}_remove(t){null!=this.onFeatureRemove&&this.onFeatureRemove(t);const e=t.objectId;return this._boundsStore.delete(e),this._featuresById.delete(e),t}}},33376:(t,e,s)=>{s.d(e,{T:()=>o});var n=s(90321),i=s(20176),r=s(1484);const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new i.Om(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(null==t.centroid&&(t.centroid=(0,n.Q)(new r.A,t.geometry,e.hasZ,e.hasM)),t.centroid)}},29184:(t,e,s)=>{s.r(e),s.d(e,{default:()=>B});var n=s(3825),i=s(98773),r=s(50076),o=s(76460),a=s(50346),u=s(19902),l=s(80963),d=s(98618),c=s(72547),h=s(24586),p=s(55301),f=s(10907),m=s(40296),y=s(40098),g=s(1900),_=s(6127),x=s(53430),I=s(67478);const b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class B{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(t,e={}){this._loadOptions={url:t.url,customParameters:t.customParameters};const s=[],[n]=await Promise.all([t.url?this._fetch(e?.signal):null,this._checkProjection(t.spatialReference)]),i=(0,f.BM)(n,{geometryType:t.geometryType}),o=t.fields||i.fields||[],a=null!=t.hasZ?t.hasZ:i.hasZ,u=i.geometryType;let d=t.objectIdField||i.objectIdFieldName||"__OBJECTID";const h=t.spatialReference||l.KK;let y=t.timeInfo;o===i.fields&&i.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const B=new g.A(o);let F=B.get(d);F?("esriFieldTypeString"!==F.type&&(F.type="esriFieldTypeOID"),F.editable=!1,F.nullable=!1,d=F.name):(F={alias:d,name:d,type:"string"===i.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(F));const w={};for(const l of o){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new r.A("geojson-layer:invalid-field-name","field name is missing",{field:l});if(!_.m.jsonValues.includes(l.type))throw new r.A("geojson-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l});if(l.name!==F.name){const t=(0,x.lD)(l);void 0!==t&&(w[l.name]=t)}null==l.length&&(l.length=(0,x._b)(l))}if(y){if(y.startTimeField){const t=B.get(y.startTimeField);t?(y.startTimeField=t.name,t.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const t=B.get(y.endTimeField);t?(y.endTimeField=t.name,t.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const t=B.get(y.trackIdField);t?y.trackIdField=t.name:(y.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const S=u?(0,m.F0)(u):void 0,E=B.dateFields.length?{timeZoneIANA:I.n$}:null,M={warnings:s,featureErrors:[],layerDefinition:{...b,drawingInfo:S??void 0,templates:(0,m.e2)(w),extent:void 0,geometryType:u,objectIdField:d,fields:o,hasZ:!!a,timeInfo:y,dateFieldsTimeReference:E}};this._queryEngine=new p.d({fieldsIndex:g.A.fromLayerJSON({fields:o,timeInfo:y,dateFieldsTimeReference:E}),geometryType:u,hasM:!1,hasZ:a,objectIdField:d,spatialReference:h,timeInfo:y,featureStore:new c.A({geometryType:u,hasM:!1,hasZ:a})});const T=this._queryEngine.fieldsIndex.requiredFields.indexOf(F);T>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(T,1),this._createDefaultAttributes=(0,m.Vx)(w,d);const A=await this._createFeatures(n);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,A);const v=this._normalizeFeatures(A,M.featureErrors);this._queryEngine.featureStore.addMany(v);const{fullExtent:C,timeExtent:j}=await this._queryEngine.fetchRecomputedExtents();if(M.layerDefinition.extent=C,j){const{start:t,end:e}=j;M.layerDefinition.timeInfo.timeExtent=[t,e]}return M}async applyEdits(t){const{spatialReference:e,geometryType:s}=this._queryEngine;return await Promise.all([(0,y.$1)(e,s),(0,h.Nk)(t.adds,e),(0,h.Nk)(t.updates,e)]),await this._waitSnapshotComplete(),this._applyEdits(t)}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){this._loadOptions.customParameters=t,this._snapshotTask?.abort(),this._snapshotTask=(0,i.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,t);const e=this._normalizeFeatures(t);e&&this._queryEngine.featureStore.addMany(e)}),(t=>{this._queryEngine.featureStore.clear(),(0,a.zf)(t)||o.A.getLogger("esri.layers.GeoJSONLayer").error(new r.A("geojson-layer:refresh","An error occurred during refresh",{error:t}))})),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:s}}async _createFeatures(t){if(null==t)return[];const{geometryType:e,hasZ:s,objectIdField:n}=this._queryEngine,i=(0,f.bd)(t,{geometryType:e,hasZ:s,objectIdField:n});if(!(0,l.aI)(this._queryEngine.spatialReference,l.KK))for(const r of i)null!=r.geometry&&(r.geometry=(0,d.Ux)((0,h.Cv)((0,d.zv)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),l.KK,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:s}=this._loadOptions,i=(await(0,n.A)(e??"",{responseType:"json",query:{...s},signal:t})).data;return(0,f.sO)(i),i}_normalizeFeatures(t,e){const{objectIdField:s,fieldsIndex:n}=this._queryEngine,i=[];for(const r of t){const t=this._createDefaultAttributes(),o=(0,y.MB)(n,t,r.attributes,!0);o?e?.push(o):(this._assignObjectId(t,r.attributes,!0),r.attributes=t,r.objectId=t[s],i.push(r))}return i}async _applyEdits(t){const{adds:e,updates:s,deletes:n}=t,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(e?.length&&this._applyAddEdits(i,e),s?.length&&this._applyUpdateEdits(i,s),n?.length){for(const t of n)i.deleteResults.push((0,y.bP)(t));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(t,e){const{addResults:s}=t,{geometryType:n,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:c}=this._queryEngine,p=[];for(const d of e){if(d.geometry&&n!==(0,u.$B)(d.geometry)){s.push((0,y.Yx)("Incorrect geometry type."));continue}const e=this._createDefaultAttributes(),i=(0,y.MB)(c,e,d.attributes);if(i)s.push(i);else{if(this._assignObjectId(e,d.attributes),d.attributes=e,null!=d.uid){const e=d.attributes[o];t.uidToObjectId[d.uid]=e}if(null!=d.geometry){const t=d.geometry.spatialReference??a;d.geometry=(0,h.Cv)((0,y.CR)(d.geometry,t),t,a)}p.push(d),s.push((0,y.bP)(d.attributes[o]))}}l.addMany((0,d.Di)([],p,n,r,i,o))}_applyUpdateEdits({updateResults:t},e){const{geometryType:s,hasM:n,hasZ:i,objectIdField:r,spatialReference:o,featureStore:a,fieldsIndex:l}=this._queryEngine;for(const c of e){const{attributes:e,geometry:p}=c,f=e?.[r];if(null==f){t.push((0,y.Yx)(`Identifier field ${r} missing`));continue}if(!a.has(f)){t.push((0,y.Yx)(`Feature with object id ${f} missing`));continue}const m=(0,d.oN)(a.getFeature(f),s,i,n);if(null!=p){if(s!==(0,u.$B)(p)){t.push((0,y.Yx)("Incorrect geometry type."));continue}const e=p.spatialReference??o;m.geometry=(0,h.Cv)((0,y.CR)(p,e),e,o)}if(e){const s=(0,y.MB)(l,m.attributes,e);if(s){t.push(s);continue}}a.add((0,d.E2)(m,s,i,n,r)),t.push((0,y.bP)(f))}}_createObjectIdGenerator(t,e){const s=t.fieldsIndex.get(t.objectIdField);if("esriFieldTypeString"===s.type)return()=>s.name+"-"+Date.now().toString(16);let n=Number.NEGATIVE_INFINITY;for(const i of e)i.objectId&&(n=Math.max(n,i.objectId));return n=Math.max(0,n)+1,()=>n++}_assignObjectId(t,e,s=!1){const n=this._queryEngine.objectIdField;t[n]=s&&n in e?e[n]:this._objectIdGenerator()}async _checkProjection(t){try{await(0,h.Nk)(l.KK,t)}catch{throw new r.A("geojson-layer","Projection not supported")}}}},10907:(t,e,s)=>{s.d(e,{BM:()=>w,bd:()=>S,sO:()=>F,xD:()=>d});var n=s(51344),i=s(50076),r=s(80963),o=s(20176),a=s(1484),u=s(53430);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function d(t){return l[t]}function*c(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const e of t.features)e&&(yield e)}}function*h(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const e of t.coordinates)yield*e;break;case"MultiPolygon":for(const e of t.coordinates)for(const t of e)yield*t}}function p(t){for(const e of t)if(e.length>2)return!0;return!1}function f(t){let e=0;for(let s=0;s<t.length;s++){const n=t[s],i=t[(s+1)%t.length];e+=n[0]*i[1]-i[0]*n[1]}return e<=0}function m(t){const e=t[0],s=t[t.length-1];return e[0]===s[0]&&e[1]===s[1]&&e[2]===s[2]||t.push(e),t}function y(t,e,s){switch(e.type){case"LineString":case"MultiPoint":return function(t,e,s){return x(t,e.coordinates,s),t}(t,e,s);case"MultiLineString":return function(t,e,s){for(const n of e.coordinates)x(t,n,s);return t}(t,e,s);case"MultiPolygon":return function(t,e,s){for(const n of e.coordinates){g(t,n[0],s);for(let e=1;e<n.length;e++)_(t,n[e],s)}return t}(t,e,s);case"Point":return function(t,e,s){return b(t,e.coordinates,s),t}(t,e,s);case"Polygon":return function(t,e,s){const n=e.coordinates;g(t,n[0],s);for(let i=1;i<n.length;i++)_(t,n[i],s);return t}(t,e,s)}}function g(t,e,s){const n=m(e);!function(t){return!f(t)}(n)?x(t,n,s):I(t,n,s)}function _(t,e,s){const n=m(e);!function(t){return f(t)}(n)?x(t,n,s):I(t,n,s)}function x(t,e,s){for(const n of e)b(t,n,s);t.lengths.push(e.length)}function I(t,e,s){for(let n=e.length-1;n>=0;n--)b(t,e[n],s);t.lengths.push(e.length)}function b(t,e,s){const[n,i,r]=e;t.coords.push(n,i),s.hasZ&&t.coords.push(r||0)}function B(t){switch(typeof t){case"string":return(0,n.Br)(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(t,e=4326){if(!t)throw new i.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new i.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:s}=t;if(!s)return;const n="string"==typeof s?s:"name"===s.type?s.properties.name:"EPSG"===s.type?s.properties.code:null,o=(0,r.oT)({wkid:e})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${e})$`,"i");if(!n||!o.test(n))throw new i.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:s})}function w(t,e={}){const s=[],n=new Set,i=new Set;let r,o=!1,a=null,l=!1,{geometryType:f=null}=e;for(const y of c(t)){const{geometry:t,properties:e,id:c}=y;if((!t||(f||(f=d(t.type)),d(t.type)===f))&&(o||(o=p(h(t))),l||(l=null!=c,l&&(r=typeof c,e&&(a=Object.keys(e).filter((t=>e[t]===c))))),e&&a&&l&&null!=c&&(a.length>1?a=a.filter((t=>e[t]===c)):1===a.length&&(a=e[a[0]]===c?a:[])),e))for(const r in e){if(n.has(r))continue;const t=B(e[r]);if("unknown"===t){i.add(r);continue}i.delete(r),n.add(r);const o=(0,u.rS)(r);o&&s.push({name:o,alias:r,type:t})}}const m=(0,u.rS)(1===a?.length&&a[0]||null)??void 0;if(m)for(const d of s)if(d.name===m&&(0,u.WA)(d)){d.type="esriFieldTypeOID";break}return{fields:s,geometryType:f,hasZ:o,objectIdFieldName:m,objectIdFieldType:r,unknownFields:Array.from(i)}}function S(t,e){return Array.from(function*(t,e={}){const{geometryType:s,objectIdField:n}=e;for(const i of t){const{geometry:t,properties:r,id:u}=i;if(t&&d(t.type)!==s)continue;const l=r||{};let c;n&&(c=l[n],null==u||c||(l[n]=c=u));const h=new o.Om(t?y(new a.A,t,e):null,l,null,c??void 0);yield h}}(c(t),e))}},40296:(t,e,s)=>{s.d(e,{F0:()=>u,Vx:()=>c,e2:()=>p,f:()=>f});var n=s(81806),i=s(53084),r=s(8298),o=s(16981),a=s(44460);function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?a.Cb:"esriGeometryPolyline"===t?a.yM:a.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let d=1;function c(t,e){if((0,n.A)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let s=`this${h(e)} = null;`;for(const e in t)s+=`this${h(e)} = ${JSON.stringify(t[e])};`;const n=new Function(`\n      return class AttributesClass$${d++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new n}catch(s){return()=>({[e]:null,...t})}}function h(t){return l.test(t)?`.${t}`:`["${t}"]`}function p(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(t)}}]}function f(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:o.$,editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(t,e,s)=>{s.d(e,{$1:()=>y,CR:()=>m,MB:()=>h,Yx:()=>u,bP:()=>d});var n=s(51344),i=s(80963),r=s(53430);class o{constructor(){this.code=null,this.description=null}}class a{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function u(t){return new a(t)}class l{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function d(t){return new l(t)}const c=new Set;function h(t,e,s,n=!1){c.clear();for(const i in s){const o=t.get(i);if(!o)continue;const a=p(o,s[i]);if(c.add(o.name),o&&(n||o.editable)){const t=(0,r.CJ)(o,a);if(t)return u((0,r.uo)(t,o,a));e[o.name]=a}}for(const i of t.requiredFields??[])if(!c.has(i.name))return u(`missing required field "${i.name}"`);return null}function p(t,e){let s=e;return(0,r.WA)(t)&&"string"==typeof e?s=parseFloat(e):(0,r.yM)(t)&&null!=e&&"string"!=typeof e?s=String(e):(0,r.vE)(t)&&"string"==typeof e&&(s=(0,n._U)(e)),(0,r.WX)(s)}let f;function m(t,e){if(!t||!(0,i.fn)(e))return t;if("rings"in t||"paths"in t){if(null==f)throw new TypeError("geometry engine not loaded");return f.simplify(e,t)}return t}async function y(t,e){!(0,i.fn)(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await async function(){return null==f&&(f=await Promise.all([s.e(2612),s.e(7983)]).then(s.bind(s,1669))),f}()}},16981:(t,e,s)=>{s.d(e,{$:()=>n,P:()=>i});const n={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},i={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:n,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=9184.8411caa6.chunk.js.map