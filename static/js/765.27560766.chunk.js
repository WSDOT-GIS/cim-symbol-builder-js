"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[765,3146],{37888:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(24387);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:a,newOrigin:t})=>{(0,r.H)(e)&&t&&e.originOf(a)!==t&&e.updateOrigin(a,t)}))}},24387:(e,a,t)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}t.d(a,{H:()=>r})},10765:(e,a,t)=>{t.d(a,{save:()=>A,saveAs:()=>N});var r=t(18690),n=(t(50076),t(97924)),i=t(13096),s=t(11668),o=t(31933),l=t(62487),u=t(72945);const c="Feature Service",d="feature-layer-utils",y=`${d}-save`,f=`${d}-save-as`;function p(e){return{isValid:(0,o.W_)(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const a=[],t=[];for(const{layer:r,layerJSON:n}of e)r.isTable?t.push(n):a.push(n);return{layers:a,tables:t}}function w(e){return m([e])}async function h(e,a){return/\/\d+\/?$/.test(e.url)?w(a[0]):b(a,e)}async function b(e,a){if(e.reverse(),!a)return m(e);const t=await async function(e,a){let t=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(t))return t;t||={},function(e){e.layers||=[],e.tables||=[]}(t);const{layer:{url:r,customParameters:n,apiKey:i}}=a[0];return await async function(e,a,t){const{url:r,customParameters:n,apiKey:i}=a,{serviceJSON:o,layersJSON:u}=await(0,s.Q)(r,{customParameters:n,apiKey:i}),c=P(e.layers,o.layers,t),d=P(e.tables,o.tables,t);e.layers=c.itemResources,e.tables=d.itemResources;const y=[...c.added,...d.added],f=u?[...u.layers,...u.tables]:[];await async function(e,a,t,r){const n=await async function(e){const a=[];e.forEach((({type:e})=>{const t=(0,s.K)(e),r=l.S[t];a.push(r())}));const t=await Promise.all(a),r=new Map;return e.forEach((({type:e},a)=>{r.set(e,t[a])})),r}(a),i=a.map((({id:e,type:a})=>new(n.get(a))({url:t,layerId:e,sourceJSON:r.find((({id:a})=>a===e))})));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;if(!r||null==n)return;const i={id:t,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(i.layerType=a.operationalLayerType),S(a,i,e)}))}(e,y,r,f)}(t,{url:r??"",customParameters:n,apiKey:i},a.map((e=>e.layer.layerId))),t}(a,e);for(const r of e)S(r.layer,r.layerJSON,t);return function(e,a){const t=[],r=[];for(const{layer:n}of a){const{isTable:e,layerId:a}=n;e?r.push(a):t.push(a)}L(e.layers,t),L(e.tables,r)}(t,e),t}function L(e,a){if(e.length<2)return;const t=[];for(const{id:r}of e)t.push(r);(0,r.aI)(t.sort(v),a.slice().sort(v))&&e.sort(((e,t)=>{const r=a.indexOf(e.id),n=a.indexOf(t.id);return r<n?-1:r>n?1:0}))}function v(e,a){return e<a?-1:e>a?1:0}function P(e,a,t){const n=(0,r.iv)(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const i=n.added;return i.forEach((({id:a})=>{e.push({id:a})})),{itemResources:e,added:i.filter((({id:e})=>!t.includes(e)))}}function S(e,a,t){e.isTable?g(t.tables,a):g(t.layers,a)}function g(e,a){const t=e.findIndex((({id:e})=>e===a.id));-1===t?e.push(a):e[t]=a}function I(e,a){const t=e.some((e=>"oriented-imagery"===e.type));(0,u.Sm)(a,u.mm.ORIENTED_IMAGERY_LAYER,t)}async function O(e,a){I([e],a)}async function T(e,a){const{url:t,layerId:r,title:n,fullExtent:s,isTable:o}=e,l=(0,i.qg)(t);a.url=("FeatureServer"===l?.serverType?t:`${t}/${r}`)??null,a.title||=n,a.extent=null,o||null==s||(a.extent=await(0,u.sQ)(s)),(0,u.OM)(a,u.mm.METADATA),(0,u.OM)(a,u.mm.MULTI_LAYER),(0,u.LG)(a,u.mm.SINGLE_LAYER),(0,u.Sm)(a,u.mm.TABLE,o),I([e],a)}async function A(e,a){return(0,n.UN)({layer:e,itemType:c,validateLayer:p,createItemData:(e,a)=>h(a,[e]),errorNamePrefix:y,setItemProperties:O},a)}async function N(e,a,t){return(0,n.Uh)({layer:e,itemType:c,validateLayer:p,createItemData:(e,a)=>Promise.resolve(w(e)),errorNamePrefix:f,newItem:a,setItemProperties:T},t)}},97924:(e,a,t)=>{t.d(a,{UN:()=>b,Uh:()=>L});var r=t(50076),n=t(37888),i=t(65308),s=t(70652),o=t(79942),l=t(72945),u=t(24907);async function c(e){const{layer:a,errorNamePrefix:t,validateLayer:n}=e;await a.load(),function(e,a,t){const n=t(e);if(!n.isValid)throw new r.A(`${a}:invalid-parameters`,n.errorMessage,{layer:e})}(a,t,n)}function d(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function y(e){const{item:a,errorNamePrefix:t,layer:n,validateItem:i}=e;if(function(e){const{item:a,itemType:t,additionalItemType:n,errorNamePrefix:i,layer:s}=e,o=[t];if(n&&o.push(n),!o.includes(a.type)){const e=o.map((e=>`'${e}'`)).join(", ");throw new r.A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:a,layer:s})}}(e),i){const e=i(a);if(!e.isValid)throw new r.A(`${t}:invalid-parameters`,e.errorMessage,{layer:n})}}function f(e){const{layer:a,errorNamePrefix:t}=e,{portalItem:n}=a;if(!n)throw new r.A(`${t}:portal-item-not-set`,d(a,"requires the portalItem property to be set"));if(!n.loaded)throw new r.A(`${t}:portal-item-not-loaded`,d(a,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...e,item:n})}function p(e){const{newItem:a,itemType:t}=e;let r=s.default.from(a);return r.id&&(r=r.clone(),r.id=null),r.type??=t,r.portal??=i.A.getDefault(),y({...e,item:r}),r}function m(e){return(0,o.m)(e,"portal-item")}async function w(e,a,t){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},a);return await Promise.all(a.resources?.pendingOperations??[]),(0,u.c)(a,{errorName:"layer-write:unsupported"},t),r}function h(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,a,t)=>t.indexOf(e)===a)))}async function b(e,a){const{layer:t,createItemData:r,createJSONContext:i,setItemProperties:s,saveResources:o,supplementalUnsupportedErrors:l}=e;await c(e),f(e);const u=t.portalItem,d=i?i(u):m(u),y=await w(t,d,{...a,supplementalUnsupportedErrors:l}),p=await r({layer:t,layerJSON:y},u);return await(s?.(t,u)),h(u),await u.update({data:p}),(0,n.v)(d),await(o?.(u,d)),u}async function L(e,a){const{layer:t,createItemData:r,createJSONContext:i,setItemProperties:s,saveResources:o,supplementalUnsupportedErrors:l}=e;await c(e);const u=p(e),d=i?i(u):m(u),y=await w(t,d,{...a,supplementalUnsupportedErrors:l}),f=await r({layer:t,layerJSON:y},u);return await s(t,u),h(u),await async function(e,a,t){const r=e.portal;await r.signIn(),await r.user.addItem({item:e,data:a,folder:t?.folder})}(u,f,a),t.portalItem=u,(0,n.v)(d),await(o?.(u,d)),u}},11668:(e,a,t)=>{t.d(a,{K:()=>y,Q:()=>i});var r=t(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:t,...n}=a||{},i=t?await t.fetchServiceMetadata(e,n):await(0,r.V)(e,n);d(i),l(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const o=`${e}/layers`,u=t?await t.fetchServiceMetadata(o,n):await(0,r.V)(o,n);return d(u),l(u),s.layersJSON={layers:u.layers,tables:u.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function o(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(o)}function u(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function d(e){e.layers?.forEach(u),e.tables?.forEach(c)}function y(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},62487:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await t.e(3993).then(t.bind(t,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(1729),t.e(9592),t.e(260),t.e(2427),t.e(188)]).then(t.bind(t,30188))).default,CSVLayer:async()=>(await t.e(1365).then(t.bind(t,1365))).default,CatalogLayer:async()=>(await Promise.all([t.e(8618),t.e(4384),t.e(6643),t.e(5227),t.e(9078),t.e(4397)]).then(t.bind(t,84397))).default,DimensionLayer:async()=>(await t.e(2798).then(t.bind(t,72798))).default,ElevationLayer:async()=>(await t.e(3875).then(t.bind(t,43875))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,38451))).default,GeoJSONLayer:async()=>(await t.e(709).then(t.bind(t,50709))).default,GeoRSSLayer:async()=>(await t.e(2551).then(t.bind(t,52551))).default,GroupLayer:async()=>(await t.e(6095).then(t.bind(t,16095))).default,ImageryLayer:async()=>(await Promise.all([t.e(6643),t.e(3092),t.e(6964),t.e(3685),t.e(7333)]).then(t.bind(t,59051))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(3092),t.e(9844),t.e(6964),t.e(372),t.e(3685),t.e(8678)]).then(t.bind(t,48678))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(6790).then(t.bind(t,76790))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(260),t.e(3196)]).then(t.bind(t,3196))).default,KMLLayer:async()=>(await t.e(1324).then(t.bind(t,41324))).default,KnowledgeGraphLayer:async()=>(await Promise.all([t.e(8618),t.e(3620),t.e(7425),t.e(8683),t.e(4384),t.e(5301),t.e(8739),t.e(3379),t.e(6570)]).then(t.bind(t,26570))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(1729),t.e(8716),t.e(4928)]).then(t.bind(t,24928))).default,LinkChartLayer:async()=>(await Promise.all([t.e(8618),t.e(3620),t.e(7425),t.e(8683),t.e(4384),t.e(5301),t.e(8739),t.e(3379),t.e(7079)]).then(t.bind(t,17079))).default,MapImageLayer:async()=>(await Promise.all([t.e(8618),t.e(6643),t.e(5227),t.e(5721),t.e(2951)]).then(t.bind(t,82951))).default,MapNotesLayer:async()=>(await t.e(3311).then(t.bind(t,43311))).default,MediaLayer:async()=>(await t.e(9522).then(t.bind(t,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(8618),t.e(6799),t.e(5526)]).then(t.bind(t,1741))).default,OpenStreetMapLayer:async()=>(await t.e(803).then(t.bind(t,50803))).default,OrientedImageryLayer:async()=>(await t.e(3832).then(t.bind(t,3832))).default,PointCloudLayer:async()=>(await Promise.all([t.e(260),t.e(1830)]).then(t.bind(t,11830))).default,RouteLayer:async()=>(await Promise.all([t.e(1297),t.e(1301)]).then(t.bind(t,91301))).default,SceneLayer:async()=>(await Promise.all([t.e(1729),t.e(8105),t.e(9592),t.e(260),t.e(2427),t.e(9174),t.e(6293),t.e(8320)]).then(t.bind(t,48320))).default,StreamLayer:async()=>(await t.e(4369).then(t.bind(t,84369))).default,SubtypeGroupLayer:async()=>(await t.e(6061).then(t.bind(t,86061))).default,TileLayer:async()=>(await Promise.all([t.e(8618),t.e(6643),t.e(5227),t.e(5721),t.e(1174)]).then(t.bind(t,71174))).default,UnknownLayer:async()=>(await t.e(8896).then(t.bind(t,8896))).default,UnsupportedLayer:async()=>(await t.e(2043).then(t.bind(t,72043))).default,VectorTileLayer:async()=>(await Promise.all([t.e(5995),t.e(2741)]).then(t.bind(t,53451))).default,VideoLayer:async()=>(await t.e(9029).then(t.bind(t,79029))).default,ViewshedLayer:async()=>(await Promise.all([t.e(1729),t.e(8716),t.e(8532)]).then(t.bind(t,78532))).default,VoxelLayer:async()=>(await Promise.all([t.e(260),t.e(8560)]).then(t.bind(t,88560))).default,WFSLayer:async()=>(await Promise.all([t.e(1316),t.e(6087)]).then(t.bind(t,26964))).default,WMSLayer:async()=>(await t.e(2015).then(t.bind(t,52015))).default,WMTSLayer:async()=>(await t.e(1845).then(t.bind(t,1845))).default,WebTileLayer:async()=>(await t.e(4552).then(t.bind(t,24552))).default}},79942:(e,a,t)=>{t.d(a,{m:()=>s,v:()=>i});var r=t(90534),n=t(65308);function i(e,a){return{...o(e,a),readResourcePaths:[]}}function s(e,a,t){const n=(0,r.An)(e.itemUrl);return{...o(e,a),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:t?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function o(e,a){return{origin:a,url:(0,r.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},67061:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(3825);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}},24907:(e,a,t)=>{t.d(a,{c:()=>s,d:()=>n});var r=t(50076);async function n(e){const a=[];for(const t of e.allLayers)if("beforeSave"in t&&"function"==typeof t.beforeSave){const e=t.beforeSave();e&&a.push(e)}await Promise.allSettled(a)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(e,a,t){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:a,details:t})=>new r.A(e,a,t)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new r.A("url:unsupported",`Relative url '${e}' is not supported`))))),t){const{ignoreUnsupported:e,supplementalUnsupportedErrors:a=[],requiredPropertyChecksDisabled:r}=t;e&&(n=n.filter((({name:e})=>!(i.has(e)||a.includes(e))))),r&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new r.A(a.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);
//# sourceMappingURL=765.27560766.chunk.js.map