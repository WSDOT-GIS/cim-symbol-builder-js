"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3388],{32698:(e,t,r)=>{r.d(t,{Y:()=>l,h:()=>o});var a=r(35995),n=r(70032);function o(e){return{origin:"portal-item",url:(0,a.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,a.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:(e,t,r)=>{r.r(t),r.d(t,{getFirstLayerOrTableId:()=>b,getNumLayersAndTables:()=>g,getSubtypeGroupLayerIds:()=>I,load:()=>y,preprocessFSItemData:()=>h});var a=r(10064),n=r(30651),o=r(25899),l=r(70032),i=r(98995),s=r(32698),u=r(73117),p=r(21371),c=r(41226);async function y(e,t){const r=e.instance.portalItem;if(r&&r.id)return await r.load(t),function(e){const t=e.instance.portalItem;if(!e.supportedTypes.includes(t.type))throw new a.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const r=e.instance,n=r.portalItem,{url:o,title:l}=n,i=(0,s.h)(n);if("group"===r.type)return r.read({title:l},i),function(e,t){let r;const n=e.portalItem.type,o=t.layerModuleTypeMap,l=(0,u._$)(e.portalItem,"Oriented Imagery Layer")??!1;switch(n){case"Feature Service":r=l?o.OrientedImageryLayer:o.FeatureLayer;break;case"Stream Service":r=o.StreamLayer;break;case"Scene Service":r=o.SceneLayer;break;case"Feature Collection":r=o.FeatureLayer;break;default:throw new a.Z("portal:unsupported-item-type-as-group",`The item type '${n}' is not supported as a 'IGroupLayer'`)}let i;return r().then((e=>(i=e,m(t)))).then((async t=>{let r=()=>i;if("Feature Service"===n){if(I(t=await h(t,e.portalItem.url)).length){const e=o.SubtypeGroupLayer,t=await e();r=e=>"SubtypeGroupLayer"===e.layerType?t:i}return d(e,r,t)}return g(t)>0?d(e,r,t):function(e,t){return e.portalItem.url?(0,c.b)(e.portalItem.url).then((r=>{function a(e){return{id:e.id,name:e.name}}r&&d(e,t,{layers:r.layers?.map(a),tables:r.tables?.map(a)})})):Promise.resolve()}(e,r)}))}(r,e);o&&r.read({url:o},i);const y=await m(e,t);return y&&r.read(y,i),r.resourceReferences={portalItem:n,paths:i.readResourcePaths},"subtype-group"!==r.type&&r.read({title:l},i),(0,p.y)(r,i)}(e,t)}function d(e,t,r){let l=r.layers||[];const s=r.tables||[];if("Feature Collection"===e.portalItem.type&&(l.forEach((e=>{"Table"===e?.layerDefinition?.type&&s.push(e)})),l=l.filter((e=>"Table"!==e?.layerDefinition?.type))),"coverage"in r){const t=function(e){const{coverage:t}=e;if(!t)return null;const r=new URL(t);if(t.toLowerCase().includes("item.html")){const e=r.searchParams.get("id"),t=r.origin;return n.Z.fromPortalItem({portalItem:new i.default({id:e,url:t})})}if((0,o.B5)(t))return n.Z.fromArcGISServerUrl({url:t});throw new a.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(r);e.add(t)}l.reverse().forEach((a=>{const n=f(e,t(a),r,a);e.add(n)})),s.reverse().forEach((a=>{const n=f(e,t(a),r,a);e.tables.add(n)}))}function f(e,t,r,a){const n=new t({portalItem:e.portalItem.clone(),layerId:a.id});if("subtype-group"!==n.type&&(n.sublayerTitleMode="service-name"),"Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};n.read(a,t);const o=r.showLegend;null!=o&&n.read({showLegend:o},t)}return n}function m(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((e=>{if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(r)){let t,a=!0;if(e&&g(e)>0){if(null==r.layerId){const t=I(e);r.layerId="subtype-group"===r.type?t?.[0]:b(e)}t=function(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&function(e,t){return!("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}(a,t)?a:null}(e,r),t&&(1===g(e)&&(a=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))}return a&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function h(e,t){if(null==e?.layers||null==e?.tables){const r=await(0,c.b)(t);(e=e||{}).layers=e.layers||r?.layers,e.tables=e.tables||r?.tables}return e}function b(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function g(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function I(e){const t=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}},73117:(e,t,r)=>{r.d(t,{$o:()=>u,Kz:()=>p,_$:()=>i,ck:()=>s,qj:()=>l});var a=r(52587),n=r(78952),o=r(81753);function l(e,t){if(!i(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function i(e,t){return!!e.typeKeywords?.includes(t)}function s(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}async function u(e){const t=e.clone().normalize();let r;if(t.length>1)for(const a of t)r?a.width>r.width&&(r=a):r=a;else r=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,o.Sx)(e);const r=n.Z.WGS84;return await(0,a.iQ)(t,r),(0,a.iV)(e,r)}(r)}const p={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}},41226:(e,t,r)=>{r.d(t,{b:()=>n});var a=r(76200);async function n(e){const{data:t}=await(0,a.default)(e,{responseType:"json",query:{f:"json"}});return t}}}]);
//# sourceMappingURL=3388.09dca422.chunk.js.map