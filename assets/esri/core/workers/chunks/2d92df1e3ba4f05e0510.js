"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9379],{13598:(e,t,r)=>{function a(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>i,a:()=>a,b:()=>s,c:()=>n});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:s,create:a,createView:n,fromValues:function(e,t,r,a,s,n,i,o,u,l,d,p,c,h,y,f){return[e,t,r,a,s,n,i,o,u,l,d,p,c,h,y,f]}},Symbol.toStringTag,{value:"Module"}))},20773:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>i,c:()=>s,d:()=>d,e:()=>u,n:()=>p,s:()=>l,t:()=>n});var a=r(72220);function s(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,s=3,n=s){if(e.length/s!==Math.ceil(t.length/n))return a.c.error("source and destination buffers need to have the same number of elements"),e;const i=e.length/s,o=r[0],u=r[1],l=r[2],d=r[4],p=r[5],c=r[6],h=r[8],y=r[9],f=r[10],m=r[12],g=r[13],b=r[14];let w=0,F=0;for(let r=0;r<i;r++){const r=t[w],a=t[w+1],i=t[w+2];e[F]=o*r+d*a+h*i+m,e[F+1]=u*r+p*a+y*i+g,e[F+2]=l*r+c*a+f*i+b,w+=n,F+=s}return e}function i(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,s=3,n=s){if(e.length/s!==Math.ceil(t.length/n))return void a.c.error("source and destination buffers need to have the same number of elements");const i=e.length/s,o=r[0],u=r[1],l=r[2],d=r[3],p=r[4],c=r[5],h=r[6],y=r[7],f=r[8];let m=0,g=0;for(let r=0;r<i;r++){const r=t[m],a=t[m+1],i=t[m+2];e[g]=o*r+d*a+h*i,e[g+1]=u*r+p*a+y*i,e[g+2]=l*r+c*a+f*i,m+=n,g+=s}}function u(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r,a=3){const s=Math.min(e.length/a,t.count),n=t.typedBuffer,i=t.typedBufferStride;let o=0,u=0;for(let t=0;t<s;t++)e[u]=r*n[o],e[u+1]=r*n[o+1],e[u+2]=r*n[o+2],o+=i,u+=a}function d(e,t){p(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function p(e,t,r=3,a=r){const s=Math.min(e.length/r,t.length/a);let n=0,i=0;for(let o=0;o<s;o++){const s=t[n],o=t[n+1],u=t[n+2],l=s*s+o*o+u*u;if(l>0){const t=1/Math.sqrt(l);e[i]=t*s,e[i+1]=t*o,e[i+2]=t*u}n+=a,i+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:p,normalizeView:d,scale:l,scaleView:u,shiftRight:function(e,t,r){const a=Math.min(e.count,t.count),s=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,o=t.typedBufferStride;let u=0,l=0;for(let e=0;e<a;e++)s[l]=i[u]>>r,s[l+1]=i[u+1]>>r,s[l+2]=i[u+2]>>r,u+=o,l+=n},transformMat3:o,transformMat3View:i,transformMat4:n,transformMat4View:s},Symbol.toStringTag,{value:"Module"}))},85872:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(43697),s=r(2368),n=r(96674),i=r(5600),o=(r(75215),r(67676),r(80442),r(36030)),u=r(52011),l=r(65617),d=r(94139);let p=class extends((0,s.J)(n.wq)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,l.c)()}getOriginPoint(e){const[t,r,a]=this.origin;return new d.Z({x:t,y:r,z:a,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:r}){this.origin=(0,l.f)(e,t,r??0)}};(0,a._)([(0,o.J)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],p.prototype,"type",void 0),(0,a._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),p=(0,a._)([(0,u.j)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],p);const c=p},72220:(e,t,r)=>{r.d(t,{c:()=>a});const a=r(92604).Z.getLogger("esri.views.3d.support.buffer.math")},84470:(e,t,r)=>{r.d(t,{CP:()=>o,JG:()=>y,LL:()=>u,NZ:()=>l,fV:()=>f,vj:()=>g,yT:()=>w,zE:()=>b});var a=r(3172),s=r(67676),n=r(95330),i=r(2981);class o{constructor(e,t,r){this.assetName=e,this.assetMimeType=t,this.parts=r}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,s.fS)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const r=await Promise.all(t.map((t=>t.toBlob(e))));return(0,n.k_)(e),new Blob(r)}}class u{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith(`${e.path}/assets/`)}async toBlob(e){const{data:t}=await(0,a.Z)(this.partUrl,{responseType:"blob"});return(0,n.k_)(e),t}}function l(e){return function(e){return!!e&&(Array.isArray(e)?e.some(h):h(e))}(e?.source)}function d(e){return!!Array.isArray(e)&&e.every((e=>e instanceof o))}const p=/^(model\/gltf\+json)|(model\/gltf-binary)$/,c=/\.(gltf|glb)/i;function h(e){if(e instanceof File){const{type:t,name:r}=e;return p.test(t)||c.test(r)}return p.test(e.assetMimeType)||c.test(e.assetName)}function y(e,t){if(!e)return!1;const{source:r}=e;return function(e,t){if(Array.isArray(e)){const r=e;return r.length>0&&r.every((e=>m(e,t)))}return m(e,t)}(r,t)}function f(e,t){if(e===t)return!0;const{source:r}=e,{source:a}=t;if(r===a)return!0;if(d(r)&&d(a)){if(r.length!==a.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...r].sort(e),s=[...a].sort(e);for(let e=0;e<t.length;++e)if(!t[e].equals(s[e]))return!1;return!0}return!1}function m(e,t){return e instanceof o&&e.isOnService(t)}function g(e,t){return e instanceof File?(0,i.dm)(e,t):(0,i.S0)(e.assetMimeType,t)??(0,i.Ow)(e.assetName,t)}function b(e){return Array.isArray(e)?e:[e]}function w(e){return!!e.original}},61159:(e,t,r)=>{r.d(t,{g:()=>a});const a={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},14720:(e,t,r)=>{r.d(t,{Ey:()=>F,applyEdits:()=>S,aw:()=>b,uploadAssets:()=>q});var a=r(38171),s=r(46791),n=r(20102),i=r(22974),o=r(92604),u=r(95330),l=r(17452),d=r(41123),p=r(16306),c=r(66361),h=r(35671),y=r(2981),f=r(84230);function m(e){return null!=e?.applyEdits}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(g)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function S(e,t,r,a={}){let l;const p="gdbVersion"in e?e.gdbVersion:null,h=a.gdbVersion??p;if((0,c.lQ)(e)&&e.url)l=(0,c.jF)(e.url,e.layerId,h,"original-and-current-features"===a.returnServiceEditsOption);else{l=(0,u.hh)(),l.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:l.promise};e.emit("apply-edits",t)}try{const{results:u,edits:p}=await async function(e,t,r,a){if(await e.load(),!m(t))throw new n.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,f.ln)(e))throw new n.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:u}=await async function(e,t,r){const a=(0,f.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),u=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(function(e,t,r,a,s,i){if(!e||!a&&!s)throw new n.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new n.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&s)throw new n.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,a,r,!!i,!!u,`${e.type}-layer`),!a.data.isVersioned&&r?.gdbVersion)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...r};if(null!=p.rollbackOnFailureEnabled||a.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),p.rollbackOnFailureEnabled=!0),!a.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,r){const a=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&s.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(a.addFeatures?.length&&!t.operations.supportsAdd)throw new n.Z(`${r}:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures?.length&&!t.operations.supportsUpdate)throw new n.Z(`${r}:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures?.length&&!t.operations.supportsDelete)throw new n.Z(`${r}:unsupported-operation`,"Layer does not support deleting features.");return a.addFeatures=a.addFeatures.map(E),a.updateFeatures=a.updateFeatures.map(E),a.addAssetFeatures=[],a}(t,a,`${e.type}-layer`),h=r?.globalIdUsed||l,m=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new n.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:r}=e;null==r[t]&&(r[t]=(0,d.z)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,r,a){A(e,t,r,a),v(e,t)}(t,e,h,m))),c.updateFeatures.forEach((t=>function(e,t,r,a){A(e,t,r,a),v(e,t);const s=(0,f.S1)(t);if("geometry"in e&&null!=e.geometry&&!s?.editing.supportsGeometryUpdate)throw new n.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h,m))),c.deleteFeatures.forEach((t=>function(e,t,r,a){A(e,t,r,a)}(t,e,h,m))),c.addAttachments.forEach((t=>R(t,e))),c.updateAttachments.forEach((t=>R(t,e))),l&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,a=(0,y.S0)("model/gltf-binary",r.supportedFormats)??(0,y.Ow)("glb",r.supportedFormats);if(!a||!r.editFormats.includes(a))throw new n.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const t of e.addFeatures??[])O(t)&&s.push(t);for(const t of e.updateFeatures??[])O(t)&&s.push(t)}(c,e),{edits:await I(c),options:p}}(e,r,a);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,u)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,a),c=e=>e.filter((e=>!e.error)).map(i.d9),h={edits:p,addedFeatures:c(u.addFeatureResults),updatedFeatures:c(u.updateFeatureResults),deletedFeatures:c(u.deleteFeatureResults),addedAttachments:c(u.addAttachmentResults),updatedAttachments:c(u.updateAttachmentResults),deletedAttachments:c(u.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:u.editMoment?new Date(u.editMoment):null,globalIdToObjectId:a.globalIdToObjectId};return u.editedFeatureResults?.length&&(h.editedFeatures=u.editedFeatureResults),l.resolve(h),u}catch(e){throw l.reject(e),e}}function A(e,t,r,a){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(a.length&&"attributes"in e)for(const r of a){const a=e.attributes[r.name];if(void 0!==a&&!(0,h.d2)(r,a))throw new n.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${r.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new n.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new n.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function v(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new n.Z(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function R(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name||a.name))throw new n.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof a.data){const e=(0,l.sJ)(a.data);if(e&&!e.isBase64)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function I(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map((e=>e.geometry)),s=await(0,p.aX)(a),n=t.length,i=r.length;return s.slice(0,n).forEach(((e,r)=>t[r].geometry=e)),s.slice(n,n+i).forEach(((e,t)=>r[t].geometry=e)),e}function E(e){const t=new a.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function O(e){return"mesh"===e?.geometry?.type}function q(e,t,r,a){if(!m(t))throw new n.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}},49379:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var a=r(43697),s=(r(66577),r(40330)),n=r(3172),i=r(92835),o=r(67676),u=r(20102),l=r(80442),d=r(35454),p=r(83379),c=r(92604),h=r(78286),y=r(95330),f=r(17452),m=r(41123),g=r(5600),b=(r(75215),r(52011)),w=r(6570),F=r(52138),S=r(13598),A=r(85872),v=r(20773);function R(e){const{vertexSpace:t}=e;if(t.isRelative)return e.clone();const{anchor:r}=e,a=r.clone(),s=(0,F.d)(I,[-a.x,-a.y,-a.z]),n=new A.Z({origin:[a.x,a.y,a.z]}),i=e.cloneWithVertexSpace(n),{position:o}=i.vertexAttributes;return i.vertexAttributes.position=(0,v.t)(new Float64Array(o.length),o,s),i.vertexAttributesChanged(),i}const I=(0,S.a)();var E=r(84470),O=r(38171),q=r(67900),Z=r(73615),_=r(33955),x=r(14720);async function T(e,t,r){const{geometry:a}=t,s={...t.attributes};if(null!=r&&"mesh"===a?.type){const{transformFieldRoles:t}=r,{origin:n,spatialReference:i,transform:o}=a,u=e.spatialReference;await(0,Z.initializeProjection)(i,u);const l=(0,Z.project)(n,u);if(s[t.originX]=l.x,s[t.originY]=l.y,s[t.originZ]=l.z??0,null!=o){const{translation:e,scale:r,rotation:n}=o,{vertexSpace:l}=a,d=l.isGeoreferenced?1:(0,q.r6)(i)/(0,q.r6)(u);s[t.translationX]=e[0]*d,s[t.translationY]=e[2]*d,s[t.translationZ]=-e[1]*d,s[t.scaleX]=r[0],s[t.scaleY]=r[2],s[t.scaleZ]=r[1],s[t.rotationX]=n[0],s[t.rotationY]=n[2],s[t.rotationZ]=-n[1],s[t.rotationDeg]=n[3]}return{attributes:s}}return null==a?{attributes:s}:"mesh"===a.type||"extent"===a.type?null:{geometry:a.toJSON(),attributes:s}}async function M(e,t){const r=await Promise.all((t.addAttachments??[]).map((t=>$(e,t)))),a=await Promise.all((t.updateAttachments??[]).map((t=>$(e,t)))),s=t.deleteAttachments??[];return r.length||a.length||s.length?{adds:r,updates:a,deletes:[...s]}:null}async function $(e,t){const{feature:r,attachment:a}=t,{globalId:s,name:n,contentType:i,data:o,uploadId:u}=a,l={globalId:s};if(r&&("attributes"in r?l.parentGlobalId=r.attributes?.[e.globalIdField]:r.globalId&&(l.parentGlobalId=r.globalId)),u)l.uploadId=u;else if(o){const e=await(0,f.IR)(o);e&&(l.contentType=e.mediaType,l.data=e.data),o instanceof File&&(l.name=o.name)}return n&&(l.name=n),i&&(l.contentType=i),l}function C(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function U(e,t){return new O.Z({attributes:e.attributes,geometry:(0,_.im)({...e.geometry,spatialReference:t})})}function N(e,t){return{adds:e?.adds?.map((e=>U(e,t)))||[],updates:e?.updates?.map((e=>({original:U(e[0],t),current:U(e[1],t)})))||[],deletes:e?.deletes?.map((e=>U(e,t)))||[],spatialReference:t}}var B=r(25278),k=r(49735),j=r(66677),D=r(45574),L=r(2981),P=r(4967),J=r(59431),Q=r(14165),G=r(18596),V=r(82971);const z=new d.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),H=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),W=new d.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let X=class extends p.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,y.Ds)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,r=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:r,infoFor3D:a,gdbVersion:s,spatialReference:n,fieldsIndex:i}=this.layer,o=(0,l.Z)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&null==a,u=e?.operations?.supportsQueryAttachments??!1;return new k.Z({url:t.path,pbfSupported:o,fieldsIndex:i,infoFor3D:a,dynamicDataSource:r,gdbVersion:s,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:r}=this;await(0,D.nU)(r,"editing");const a=e.attributes[r.objectIdField],s=r.parsedUrl.path+"/"+a+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,i.query);try{return C((await(0,n.Z)(s,{body:o})).data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async updateAttachment(e,t,r){await this.load();const{layer:a}=this;await(0,D.nU)(a,"editing");const s=e.attributes[a.objectIdField],i=a.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(r,o.query);try{return C((await(0,n.Z)(i,{body:u})).data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const{layer:r}=this;await(0,D.nU)(r,"editing");const a=r.infoFor3D,i=null!=a,u=i||(t?.globalIdUsed??!1),l=i?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,d=e.addFeatures?.map((e=>T(this.layer,e,a)))??[],p=(await Promise.all(d)).filter(o.pC),c=e.updateFeatures?.map((e=>T(this.layer,e,a)))??[],h=(await Promise.all(c)).filter(o.pC),y=function(e,t,r){if(!t||0===t.length)return[];if(r&&(0,x.Ey)(t))return t.map((e=>e.globalId));if((0,x.aw)(t))return t.map((e=>e.objectId));const a=r?e.globalIdField:e.objectIdField;return a?t.map((e=>e.getAttribute(a))):[]}(this.layer,e.deleteFeatures,u);(0,J.P)(p,h,r.spatialReference);const f=await M(this.layer,e),m=r.capabilities.editing.supportsAsyncApplyEdits&&i,g=t?.gdbVersion||r.gdbVersion,b={gdbVersion:g,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:u,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,async:m};await(0,G.Px)(this.layer.url,g,!0);const w=(0,G.JV)(this.layer.url,g||null);t?.returnServiceEditsOption?(b.edits=JSON.stringify([{id:r.layerId,adds:p,updates:h,deletes:y,attachments:f,assetMaps:l}]),b.returnServiceEditsOption=z.toJSON(t?.returnServiceEditsOption),b.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(b.adds=p.length?JSON.stringify(p):null,b.updates=h.length?JSON.stringify(h):null,b.deletes=y.length?u?JSON.stringify(y):y.join(","):null,b.attachments=f&&JSON.stringify(f),b.assetMaps=null!=l?JSON.stringify(l):void 0);const F=this._getLayerRequestOptions({method:"post",query:b});w&&(F.authMode="immediate",F.query.returnEditMoment=!0,F.query.sessionId=G.U8);const S=t?.returnServiceEditsOption?r.url:r.parsedUrl.path;let A;try{A=m?await this._asyncApplyEdits(S+"/applyEdits",F):await(0,n.Z)(S+"/applyEdits",F)}catch(e){if(!function(e){const t=e.details.raw,r=+t.code,a=+t.extendedCode;return 500===r&&(-2147217144===a||-2147467261===a)}(e))throw e;F.authMode="immediate",A=m?await this._asyncApplyEdits(S+"/applyEdits",F):await(0,n.Z)(S+"/applyEdits",F)}if(!r.capabilities.operations?.supportsEditing&&r.effectiveCapabilities?.operations?.supportsEditing){const e=s.id?.findCredential(r.url);await(e?.refreshToken())}return this._createEditsResult(A)}async deleteAttachments(e,t){await this.load();const{layer:r}=this;await(0,D.nU)(r,"editing");const a=e.attributes[r.objectIdField],s=r.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await(0,n.Z)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(C)}catch(e){throw this._createAttachmentErrorResult(a,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:s}=await(0,n.Z)(`${a}/${r}`,t),{id:o,extent:u,fullExtent:l,timeExtent:d}=s,p=u||l;return{id:o,fullExtent:p&&w.Z.fromJSON(p),timeExtent:d&&i.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){await this.load();const r=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){await this.load();const r=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return e.outStatistics?.length&&r.features.length&&r.features.forEach((t=>{const r=t.attributes;e.outStatistics?.forEach((({outStatisticFieldName:e})=>{if(e){const t=e.toLowerCase();t&&t in r&&e!==t&&(r[e]=r[t],delete r[t])}}))})),r}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,j.M8)(this.layer.url))return"unavailable";const e=(0,f.v_)(this.layer.url,"status"),t=await(0,n.Z)(e,{query:{f:"json"}});return W.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:a}=await r.e(2046).then(r.bind(r,2046));return a(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const r=(await(0,n.Z)(e,t)).data.statusUrl;for(;;){const e=(await(0,n.Z)(r,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,n.Z)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new u.Z("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new u.Z("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await(0,y.e4)(Y)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const r={};(0,l.Z)("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),t?.cacheBust&&(r._ts=Date.now());const{data:a}=await(0,n.Z)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:t?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const r=e.type;if(!H.has(r))throw new u.Z("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(e,t){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,B.bU)(e.geometryType).renderer;(0,h.RB)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:r}=await(0,n.Z)(this.layer.url,this._getLayerRequestOptions({signal:t}));r.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(e){(0,y.r9)(e)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length)return null;const r=await this._filterRedundantAssetMaps(t);if(!t?.length)return null;const a=new Array,s=new Map;for(const e of r){const{geometry:t}=e,{vertexSpace:r}=t;if(r.isRelative)a.push(t);else{const r=R(t);s.set(r,t),e.geometry=r,a.push(r)}}await this.uploadAssets(a);for(const[e,t]of s)t.addExternalSources(e.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(r),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,r=this.layer.globalIdField,a=this.layer.parsedUrl;for(const s of e){const e=s.geometry,{metadata:n}=e,i=n.getExternalSourcesOnService(a),o=s.getAttribute(r);if(0===i.length){c.Z.getLogger(this).error(`Skipping feature ${o}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:u}=i.find(E.yT)??i[0],{vertexSpace:l}=e,d=l.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const e of u)1===e.parts.length?t.push({globalId:(0,m.z)(),parentGlobalId:o,assetName:e.assetName,assetHash:e.parts[0].partHash,flags:d}):c.Z.getLogger(this).error(`Skipping asset ${e.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,a=[];let s=null;if(Array.isArray(t))for(const e of t)a.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===r&&(s={addResults:e.addResults??[],updateResults:e.updateResults??[],deleteResults:e.deleteResults??[],attachments:e.attachments,editMoment:e.editMoment});else s=t;const n=function(e){const t=e?.assetMaps;if(t){for(const e of t.addResults)e.success||c.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`);for(const e of t.updateResults)e.success||c.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`)}const r=e?.attachments,a={addFeatureResults:e?.addResults?.map(C)??[],updateFeatureResults:e?.updateResults?.map(C)??[],deleteFeatureResults:e?.deleteResults?.map(C)??[],addAttachmentResults:r?.addResults?r.addResults.map(C):[],updateAttachmentResults:r?.updateResults?r.updateResults.map(C):[],deleteAttachmentResults:r?.deleteResults?r.deleteResults.map(C):[]};return e?.editMoment&&(a.editMoment=e.editMoment),a}(s);if(a.length>0){n.editedFeatureResults=[];for(const e of a){const{editedFeatures:t}=e,r=t?.spatialReference?new V.Z(t.spatialReference):null;n.editedFeatureResults.push({layerId:e.id,editedFeatures:N(t,r)})}}return n}_createAttachmentErrorResult(e,t){const r=t.details.messages?.[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new u.Z("feature-layer-source:attachment-failure",r,{code:a})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const e in t){const a=t[e];null!=a&&(r.set?r.set(e,a):r.append(e,a))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:a}=this.layer;return{...e,query:{gdbVersion:r,layer:a?JSON.stringify({source:a}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:r,infoFor3D:a,parsedUrl:s}=t;if(null==a||null==r)return e;const n=(0,L.$6)(a);if(null==n)return e;const i=(0,f.v_)(s.path,`../${n.id}`),u=new Array,l=new Array;for(const t of e)t.geometry.metadata.getExternalSourcesOnService(s).length>0?l.push(t):u.push(t);const d=l.map((e=>e.getAttribute(r))).filter(o.pC);if(0===d.length)return e;const{assetMapFieldRoles:{parentGlobalId:p,assetHash:c}}=a,h=new Q.Z;h.where=`${p} IN (${d.map((e=>`'${e}'`))})`,h.outFields=[c,p],h.returnGeometry=!1;const y=await(0,P.e)(i,h),{features:m}=y;return 0===m.length?e:[...u,...l.filter((e=>{const t=e.getAttribute(r);if(!t)return!0;const{metadata:a}=e.geometry,n=m.filter((e=>e.getAttribute(p)===t));if(0===n.length)return!0;const i=n.map((e=>e.getAttribute(c)));return a.getExternalSourcesOnService(s).flatMap((({source:e})=>e.flatMap((e=>e.parts.map((e=>e.partHash)))))).some((e=>i.every((t=>e!==t))))}))]}};(0,a._)([(0,g.Cb)()],X.prototype,"type",void 0),(0,a._)([(0,g.Cb)({constructOnly:!0})],X.prototype,"layer",void 0),(0,a._)([(0,g.Cb)({readOnly:!0})],X.prototype,"queryTask",null),X=(0,a._)([(0,b.j)("esri.layers.graphics.sources.FeatureLayerSource")],X);const Y=1e3,K=X},25278:(e,t,r)=>{r.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>o});var a=r(80442),s=r(22974),n=r(61159),i=r(58333);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.I4:"esriGeometryPolyline"===e?i.ET:i.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,a.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const a=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new a}catch(r){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:n.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);