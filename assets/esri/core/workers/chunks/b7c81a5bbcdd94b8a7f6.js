"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1444],{16306:(e,t,r)=>{r.d(t,{aX:()=>A});var n=r(68773),a=r(20102),s=r(92604),i=r(38913),o=r(58901),l=r(73913),u=r(8744),d=r(40488),p=(r(66577),r(3172)),c=r(33955),f=r(11282),h=r(17452);async function y(e,t,r){const n="string"==typeof e?(0,h.mN)(e):e,a=t[0].spatialReference,s=(0,c.Ji)(t[0]),i={...r,query:{...n.query,f:"json",sr:(0,u.B9)(a),geometries:JSON.stringify((l=t,{geometryType:(0,c.Ji)(l[0]),geometries:l.map((e=>e.toJSON()))}))}},{data:o}=await(0,p.Z)(n.path+"/simplify",i);var l;return function(e,t,r){const n=(0,c.q9)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}(o.geometries,s,a)}const m=s.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function b(e){return"polyline"===e[0].type}function w(e,t,r){if(t){const t=function(e,t){if(!(e instanceof o.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m.error(e),new a.Z(e)}const r=(0,l.x3)(e),n=[];for(const e of r){const r=[];n.push(r),r.push([e[0][0],e[0][1]]);for(let n=0;n<e.length-1;n++){const a=e[n][0],s=e[n][1],i=e[n+1][0],o=e[n+1][1],l=Math.sqrt((i-a)*(i-a)+(o-s)*(o-s)),u=(o-s)/l,d=(i-a)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const n=e*t,i=d*n+a,o=u*n+s;r.push([i,o])}const e=(l+Math.floor(p-1)*t)/2,n=d*e+a,i=u*e+s;r.push([n,i])}r.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:n,spatialReference:e.spatialReference}):new o.Z({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,d.Sx)(t,!0)}return r&&(e=(0,l.Sy)(e,r)),e}function F(e,t,r){if(Array.isArray(e)){const n=e[0];if(n>t){const r=(0,l.XZ)(n,t);e[0]=n+r*(-2*t)}else if(n<r){const t=(0,l.XZ)(n,r);e[0]=n+t*(-2*r)}}else{const n=e.x;if(n>t){const r=(0,l.XZ)(n,t);e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=(0,l.XZ)(n,r);e=e.clone().offset(t*(-2*r),0)}}return e}function Z(e,t){let r=-1;for(let n=0;n<t.cutIndexes.length;n++){const a=t.cutIndexes[n],s=t.geometries[n],i=(0,l.x3)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const n=t[e][0];r=n>r?n:r}r=Number(r.toFixed(9));const n=-360*(0,l.XZ)(r,180);for(let r=0;r<t.length;r++){const t=s.getPoint(e,r);s.setPoint(e,r,t.clone().offset(n,0))}return!0}}))}if(a===r){if(g(e))for(const t of(0,l.x3)(s))e[a]=e[a].addRing(t);else if(b(e))for(const t of(0,l.x3)(s))e[a]=e[a].addPath(t)}else r=a,e[a]=s}return e}async function A(e,t,r){if(!Array.isArray(e))return A([e],t);t&&"string"!=typeof t&&m.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const a="string"==typeof t?t:t?.url??n.default.geometryServiceUrl;let s,h,g,b,v,S,I,R,$=0;const E=[],x=[];for(const t of e)if(null!=t)if(s||(s=t.spatialReference,h=(0,u.C5)(s),g=s.isWebMercator,S=g?102100:4326,b=l.UZ[S].maxX,v=l.UZ[S].minX,I=l.UZ[S].plus180Line,R=l.UZ[S].minus180Line),h)if("mesh"===t.type)x.push(t);else if("point"===t.type)x.push(F(t.clone(),b,v));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>F(e,b,v))),x.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,h);x.push(e.rings?new i.Z(e):e)}else if(t.extent){const e=t.extent,r=(0,l.XZ)(e.xmin,v)*(2*b);let n=0===r?t.clone():(0,l.Sy)(t.clone(),r);e.offset(r,0),e.intersects(I)&&e.xmax!==b?($=e.xmax>$?e.xmax:$,n=w(n,g),E.push(n),x.push("cut")):e.intersects(R)&&e.xmin!==v?($=e.xmax*(2*b)>$?e.xmax*(2*b):$,n=w(n,g,360),E.push(n),x.push("cut")):x.push(n)}else x.push(t.clone());else x.push(t);else x.push(t);let O=(0,l.XZ)($,b),L=-90;const U=O,k=new o.Z;for(;O>0;){const e=360*O-180;k.addPath([[e,L],[e,-1*L]]),L*=-1,O--}if(E.length>0&&U>0){const t=Z(E,await async function(e,t,r,n){const a=(0,f.en)(e),s=t[0].spatialReference,i={...n,responseType:"json",query:{...a.query,f:"json",sr:(0,u.B9)(s),target:JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},o=await(0,p.Z)(a.path+"/cut",i),{cutIndexes:l,geometries:d=[]}=o.data;return{cutIndexes:l,geometries:d.map((e=>{const t=(0,c.im)(e);return t.spatialReference=s,t}))}}(a,E,k,r)),n=[],s=[];for(let r=0;r<x.length;r++){const a=x[r];if("cut"!==a)s.push(a);else{const a=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&a.rings.length>=i.rings.length?(n.push(a),s.push("simplify")):s.push(g?(0,d.$)(a):a)}}if(!n.length)return s;const i=await y(a,n,r),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(g?(0,d.$)(i.shift()):i.shift())}return o}const X=[];for(let e=0;e<x.length;e++){const t=x[e];if("cut"!==t)X.push(t);else{const e=E.shift();X.push(!0===g?(0,d.$)(e):e)}}return X}},73913:(e,t,r)=>{r.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>o,x3:()=>u});var n=r(58901),a=r(82971),s=r(33955);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator}),minus180Line:new n.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.Z({paths:[[[180,-180],[180,180]]],spatialReference:a.Z.WGS84}),minus180Line:new n.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:a.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=u(e);for(const e of r)for(const r of e)r[0]+=t;return e}function u(e){return(0,s.oU)(e)?e.rings:e.paths}},14720:(e,t,r)=>{r.d(t,{Ey:()=>F,applyEdits:()=>Z,aw:()=>b,uploadAssets:()=>E});var n=r(38171),a=r(46791),s=r(20102),i=r(22974),o=r(92604),l=r(95330),u=r(17452),d=r(41123),p=r(16306),c=r(66361),f=r(35671),h=r(2981),y=r(84230);function m(e){return null!=e?.applyEdits}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(g)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function Z(e,t,r,n={}){let u;const p="gdbVersion"in e?e.gdbVersion:null,f=n.gdbVersion??p;if((0,c.lQ)(e)&&e.url)u=(0,c.jF)(e.url,e.layerId,f,"original-and-current-features"===n.returnServiceEditsOption);else{u=(0,l.hh)(),u.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:u.promise};e.emit("apply-edits",t)}try{const{results:l,edits:p}=await async function(e,t,r,n){if(await e.load(),!m(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,y.ln)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,r){const n=(0,y.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(function(e,t,r,n,a,i){if(!e||!n&&!a)throw new s.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new s.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&a)throw new s.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&a)throw new s.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,n,r,!!i,!!l,`${e.type}-layer`),!n.data.isVersioned&&r?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!n.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...r};if(null!=p.rollbackOnFailureEnabled||n.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),p.rollbackOnFailureEnabled=!0),!n.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,r){const n=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&a.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(n.addFeatures?.length&&!t.operations.supportsAdd)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support adding features.");if(n.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support updating features.");if(n.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support deleting features.");return n.addFeatures=n.addFeatures.map(R),n.updateFeatures=n.updateFeatures.map(R),n.addAssetFeatures=[],n}(t,n,`${e.type}-layer`),f=r?.globalIdUsed||u,m=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(f){const{globalIdField:t}=e;if(null==t)throw new s.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:r}=e;null==r[t]&&(r[t]=(0,d.z)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,r,n){A(e,t,r,n),v(e,t)}(t,e,f,m))),c.updateFeatures.forEach((t=>function(e,t,r,n){A(e,t,r,n),v(e,t);const a=(0,y.S1)(t);if("geometry"in e&&null!=e.geometry&&!a?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,f,m))),c.deleteFeatures.forEach((t=>function(e,t,r,n){A(e,t,r,n)}(t,e,f,m))),c.addAttachments.forEach((t=>S(t,e))),c.updateAttachments.forEach((t=>S(t,e))),u&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,n=(0,h.S0)("model/gltf-binary",r.supportedFormats)??(0,h.Ow)("glb",r.supportedFormats);if(!n||!r.editFormats.includes(n))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:a}=e;for(const t of e.addFeatures??[])$(t)&&a.push(t);for(const t of e.updateFeatures??[])$(t)&&a.push(t)}(c,e),{edits:await I(c),options:p}}(e,r,n);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,n),c=e=>e.filter((e=>!e.error)).map(i.d9),f={edits:p,addedFeatures:c(l.addFeatureResults),updatedFeatures:c(l.updateFeatureResults),deletedFeatures:c(l.deleteFeatureResults),addedAttachments:c(l.addAttachmentResults),updatedAttachments:c(l.updateAttachmentResults),deletedAttachments:c(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:n.globalIdToObjectId};return l.editedFeatureResults?.length&&(f.editedFeatures=l.editedFeatureResults),u.resolve(f),l}catch(e){throw u.reject(e),e}}function A(e,t,r,n){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(n.length&&"attributes"in e)for(const r of n){const n=e.attributes[r.name];if(void 0!==n&&!(0,f.d2)(r,n))throw new s.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${r.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function v(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new s.Z(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function S(e,t){const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name||n.name))throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&n.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){const e=(0,u.sJ)(n.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function I(e){const t=e.addFeatures??[],r=e.updateFeatures??[],n=t.concat(r).map((e=>e.geometry)),a=await(0,p.aX)(n),s=t.length,i=r.length;return a.slice(0,s).forEach(((e,r)=>t[r].geometry=e)),a.slice(s,s+i).forEach(((e,t)=>r[t].geometry=e)),e}function R(e){const t=new n.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function $(e){return"mesh"===e?.geometry?.type}function E(e,t,r,n){if(!m(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,n)}},2981:(e,t,r)=>{r.d(t,{$6:()=>h,$z:()=>s,F7:()=>a,Ow:()=>o,S0:()=>i,d1:()=>l,dm:()=>u});const n=[["binary","application/octet-stream","bin",""]];function a(e,t){return null!=p(t.name,e?.supportedFormats??[])}function s(e,t){if(!e)return!1;const r=u(t,e.supportedFormats??[]);return null!=r&&e.editFormats.includes(r)}function i(e,t){return c(function(e,t){const r=e.toLowerCase();return d(t).find((e=>f(e)===r))}(e,t))}function o(e,t){return c(p(e,t))}function l(e,t){return f(function(e,t){return d(t).find((t=>c(t)===e))}(e,t))}function u(e,t){return o(e.name,t)??i(e.type,t)}function d(e){return[...n,...e]}function p(e,t){const r=e.toLowerCase();return d(t).find((e=>function(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}(e).some((e=>r.endsWith(e)))))}function c(e){return e?.[0]}function f(e){return e?.[1].toLowerCase()}function h(e){return e.tables?.find((e=>"assetMaps"===e.role))}},11282:(e,t,r)=>{r.d(t,{cv:()=>o,en:()=>i,lA:()=>s}),r(68773),r(40330);var n=r(22974),a=r(17452);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,a.mN)(e):(0,n.d9)(e)}function o(e,t,r){const n={};for(const a in e){if("declaredClass"===a)continue;const s=e[a];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[a]=[];for(let e=0;e<s.length;e++)n[a][e]=o(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r?.[a]);n[a]=t?e:JSON.stringify(e)}else n[a]=t?s:JSON.stringify(s);else n[a]=s}return n}r(71058)}}]);