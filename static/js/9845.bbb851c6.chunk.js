"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9845],{45652:(e,s,t)=>{t.d(s,{$1:()=>l,H2:()=>f,MT:()=>m,VP:()=>g,WF:()=>u,Wt:()=>a,XQ:()=>h,hK:()=>d,nS:()=>p,uh:()=>i,xY:()=>c});var o=t(50076);const r="upload-assets",n=()=>new Error;class a extends o.A{constructor(){super(`${r}:unsupported`,"Layer does not support asset uploads.",n())}}class i extends o.A{constructor(){super(`${r}:no-glb-support`,"Layer does not support glb.",n())}}class c extends o.A{constructor(){super(`${r}:no-supported-source`,"No supported external source found",n())}}class l extends o.A{constructor(){super(`${r}:not-base-64`,"Expected gltf data in base64 format after conversion.",n())}}class u extends o.A{constructor(){super(`${r}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",n())}}class p extends o.A{constructor(e,s){super(`${r}:bad-response`,`Bad response. Uploaded ${e} items and received ${s} results.`,n())}}class d extends o.A{constructor(e,s){super(`${r}-layer:upload-failed`,`Failed to upload mesh file ${e}. Error code: ${s?.code??"-1"}. Error message: ${s?.messages??"unknown"}`,n())}}class f extends o.A{constructor(e){super(`${r}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${e}, but it does not list it in its supported formats.`,n())}}class m extends o.A{constructor(){super(`${r}:convert3D-failed`,"convert3D failed.")}}class g extends o.A{constructor(){super("invalid-input:no-model","No supported model found")}}class h extends o.A{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}},99845:(e,s,t)=>{t.d(s,{uploadAssets:()=>_});t(35238);var o=t(3825),r=t(81806),n=t(76460),a=t(50346),i=t(91417),c=t(90534),l=t(49723),u=t(57045),p=t(45652);const d={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};var f=t(13096),m=t(54901),g=t(87663);function h(e,s=e=>{},t){return new w(e,s,t)}class w{constructor(e,s=e=>{},t){if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let s=0;s<e;s++){const t=s,o=1/e;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,t]of this._progressMap.entries())e+=t*this._weights[s];if(1===e&&(0,r.A)("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[s,t]of this._timingsMap){const o=Math.round(t.end-t.start)/1e3,r=Math.round(o/e*100);console.log(this.taskName??"Task",{stepKey:s,stepTime:o,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),(0,r.A)("enable-feature:esri-3dofl-upload-timings")){const t=performance.now();this._startTime??=t;const o=(0,g.tE)(this._timingsMap,e,(()=>({start:t,end:0})));1===s&&(o.end=t)}this.emitProgress()}simulate(e,s){return y((s=>this.setProgress(e,s)),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}}function y(e=e=>{},s=x){const t=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-t,r=1-Math.exp(-o/s);e(r)}),v);return(0,m.hA)((()=>{clearInterval(o),e(1)}))}function A(e,s=T){return(0,i.gr)((0,i.Kp)(e*P/s))}const T=10,b=10,P=8e-6,v=(0,i.l5)(50),x=(0,i.l5)(1e3),j=1e6,F=20*j,$=2e9,D=3;async function M({data:e,name:s,description:t},r,n){let i=null;try{const u=(0,c.fj)(r,"uploads"),p=(0,c.fj)(u,"info"),{data:d}=await(0,o.A)(p,{query:{f:"json"},responseType:"json"});(0,a.Te)(n);const m=(0,f.Wo)(r),g=d.maxUploadFileSize*j,w=m?$:g,y=m?Math.min(F,g):F;if(e.size>w)throw new Error("Data too large");const T=(0,c.fj)(u,"register"),{data:b}=await(0,o.A)(T,{query:{f:"json",itemName:(l=s,l.replaceAll("/","_").replaceAll("\\","_")),description:t},responseType:"json",method:"post"});if((0,a.Te)(n),!b.success)throw new Error("Registration failed");const{itemID:P}=b.item;i=(0,c.fj)(u,P);const v=(0,c.fj)(i,"uploadPart"),x=Math.ceil(e.size/y),M=new Array;for(let s=0;s<x;++s)M.push(e.slice(s*y,Math.min((s+1)*y,e.size)));const N=M.slice().reverse(),S=new Array,E=h(x,n?.onProgress,"uploadItem"),k=async()=>{for(;0!==N.length;){const e=M.length-N.length,s=N.pop(),t=new FormData,r=E.simulate(e,A(s.size));try{t.append("f","json"),t.append("file",s),t.append("partId",`${e}`);const{data:r}=await(0,o.A)(v,{timeout:0,body:t,responseType:"json",method:"post"});if((0,a.Te)(n),!r.success)throw new Error("Part upload failed")}finally{r.remove()}}};for(let e=0;e<D&&0!==N.length;++e)S.push(k());await Promise.all(S);const _=(0,c.fj)(i,"commit"),{data:R}=await(0,o.A)(_,{query:{f:"json",parts:M.map(((e,s)=>s)).join(",")},responseType:"json",method:"post"});if((0,a.Te)(n),!R.success)throw new Error("Commit failed");return R.item}catch(u){if(null!=i){const e=(0,c.fj)(i,"delete");await(0,o.A)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw u}var l}var N=t(19463),S=t(66776),E=t(74159),k=t(13312);async function _(e,s,t){const o=e.length;if(!o)return t?.onProgress?.(1),[];const n=h(o,t?.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,{layer:s,ongoingUploads:t},o){const n=t.get(e);if(n)return n;if(!function(e){return!!e.infoFor3D&&!!e.url}(s))throw new p.Wt;if(function(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>(0,u.eN)(e,t)))}(e,s))return o?.onProgress?.(1),e;const f=async function(e,s,t){const{metadata:o}=e,{displaySource:n}=o,f=R(n?.source,s,{checkForConversionRequired:(0,r.A)("enable-feature:georeferenced-uploads")}),m=null!=f?async function(e,s,t){return{source:await C(e,s,t),original:!0,unitConversionDisabled:!0}}(f,s,t):o.externalSources.length>0?async function(e,s,t){const o=q(s),{externalSources:n}=e.metadata,a=function(e,s){for(const t of e){const e=R(t.source,s);if(e)return e}return null}(n,s);if(!a)throw new p.xY;const l=h(d.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),f=await C(a,s,{onProgress:l.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:f,original:!0}]);const m=a.reduce(((e,{asset:s})=>s instanceof File?e+s.size:e),0),g=l.simulate("serviceAssetsToGlb",function(e,s=b){return(0,i.gr)((0,i.Kp)(e*P/s))}(m));try{const{source:n,transform:a,origin:i}=await async function(e,s,t){const o=e.map((({assetName:e,parts:s})=>({assetName:e,assetHash:s[0].partHash})));let n;try{const e=(0,c.fj)(s.parsedUrl.path,"convert3D"),r=s.capabilities?.operations.supportsAsyncConvert3D;n=(await(r?Z:Y)(e,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:t,async:r},responseType:"json",timeout:0})).data}catch(a){throw new p.MT}return function(e,s){const t={source:s.assets.map((s=>{const t=(0,N.R_)(s.contentType,e.infoFor3D.supportedFormats);if(!t)throw new p.H2(t);return new u.Qp(s.assetName,s.contentType,[new u.Bq(s.assetURL,s.assetHash)])})),origin:void 0,transform:void 0};if((0,r.A)("enable-feature:georeferenced-uploads")&&s.transform){if(t.transform=(0,E.f)(s.transform),s.spatialReference){const e=k.A.fromJSON(s.spatialReference);t.origin=(0,E.V)(s.transform,e)}}else t.transform=(0,S.Z)(e.spatialReference);return t}(s,n)}(f,s,o);return e.transform=a,i&&(e.metadata.georeferenced=!0,t?.useAssetOrigin&&(e.vertexSpace.origin=[i.x,i.y,i.z??0],e.spatialReference=i.spatialReference)),{source:n,unitConversionDisabled:!0}}finally{g.remove()}}(e,s,t):async function(e,s,t){const o=h(d.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),r=async function(e,s,t){const o=q(s),r=await e.load(t),n=await r.toBinaryGLTF({origin:r.origin,signal:t?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return(0,a.Te)(t),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${(0,l.yS)()}.glb`,assetType:o}}(e,s,{...t,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await U([r],s,{...t,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}(e,s,t),g=await m;return(0,a.Te)(t),e.addExternalSources([g]),e}(e,s,o);t.set(e,f);try{await f}finally{t.delete(e)}return e}(e,s,{...t,onProgress:n.makeOnProgress(o)}))))}function R(e,{infoFor3D:s},t={}){if(!e)return null;const{supportedFormats:o,editFormats:r}=s,n=(0,u.WN)(e),a=new Array,i=(0,N.ND)(s),c=(0,N.nr)(s);let l=!1;for(const u of n){const e=I(u,o);if(!e)return null;const{assetType:s}=e;if(t.checkForConversionRequired&&(s===i||s===c))return null;r.includes(s)&&(l=!0),a.push(e)}return l?a:null}function I(e,s){const t=(0,u.fH)(e,s);return t?{asset:e,assetType:t}:null}async function C(e,s,t){return U(e.map((e=>async function(e,s){const{asset:t,assetType:o}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const r=await t.toBlob(s);return(0,a.Te)(s),{blob:r,assetName:t.assetName,assetType:o}}(e,t))),s,t)}async function U(e,s,t){const o=h(d.uploadAssetBlobs,t?.onProgress,"uploadAssetBlobs"),r=await function(e,s,t){const o=h(e.length,t?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,r)=>{const i=async function(e,s,t){const{blob:o,assetType:r,assetName:i}=e;let l=null;try{const e=await M({data:o,name:i},s.url,t);(0,a.Te)(t),l={assetType:r,assetUploadId:e.itemID}}catch(x){(0,a.QP)(x),n.A.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!l){const e=await(0,c._0)(o);if((0,a.Te)(t),!e.isBase64)throw new p.$1;l={assetType:r,assetData:e.data}}if(!l)throw new p.WF;return{item:l,assetName:i}}(await e,s,{...t,onProgress:o.makeOnProgress(r)});return(0,a.Te)(t),i})))}(e,s,{...t,onProgress:o.makeOnProgress("prepareAssetItems")});(0,a.Te)(t);const i=r.map((({item:e})=>e)),{uploadResults:l}=await B(i,s,{...t,onProgress:o.makeOnProgress("uploadAssetItems")});return(0,a.Te)(t),e.map(((e,t)=>function(e,s,t){const{success:o}=s;if(!o){const{error:t}=s;throw new p.hK(e.assetName,t)}const{assetHash:r}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,c=(0,N.Fm)(a,i);if(!c)throw new p.H2(a);return new u.Qp(n,c,[new u.Bq(`${t.parsedUrl.path}/assets/${r}`,r)])}(r[t],l[t],s)))}async function B(e,s,t){const r=y(t?.onProgress);try{const r=await(0,o.A)((0,c.fj)(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,a.Te)(t),r.data.uploadResults.length!==e.length)throw new p.nS(e.length,r.data.uploadResults.length);return r.data}finally{r.remove()}}function Y(e,s){return(0,o.A)(e,s)}async function Z(e,s){const t=(await(0,o.A)(e,s)).data.statusUrl;for(;;){const e=(await(0,o.A)(t,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,o.A)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await(0,a.Pl)(O)}}function q({infoFor3D:e}){const s=(0,N.U9)(e);if(!s)throw new p.uh;return s}const O=(0,i.l5)(1e3)},66776:(e,s,t)=>{t.d(s,{Z:()=>n});var o=t(31633),r=t(32186);function n(e){const s=1/(0,o.GA)(e,1);return 1!==s?new r.A({scale:[s,s,s]}):void 0}},74159:(e,s,t)=>{t.d(s,{V:()=>n,f:()=>a});t(35238);var o=t(32186),r=t(19247);function n(e,s,t=i){return new r.A({x:e[t.originX],y:e[t.originY],z:e[t.originZ],spatialReference:s})}function a(e,s=i){return new o.A({translation:[e[s.translationX],-e[s.translationZ],e[s.translationY]],rotationAxis:[e[s.rotationX],-e[s.rotationZ],e[s.rotationY]],rotationAngle:e[s.rotationDeg],scale:[e[s.scaleX],e[s.scaleZ],e[s.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"}}}]);
//# sourceMappingURL=9845.bbb851c6.chunk.js.map