"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9831,3106],{37888:(e,t,r)=>{r.d(t,{v:()=>o});var a=r(24387);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,a.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},24387:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},29831:(e,t,r)=>{r.d(t,{save:()=>w,saveAs:()=>y});var a=r(97924),o=r(79942),s=r(72945),n=r(79880);const i="Media Layer",c="media-layer-save",l="media-layer-save-as",u=["media-layer:unsupported-source"];function p(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function d(e){return(0,o.m)(e,"portal-item",!0)}function f(e){return e.layerJSON}async function m(e,t){t.extent=e.fullExtent?await(0,s.sQ)(e.fullExtent):null}async function h(e,t){t.title||=e.title,await m(e,t),(0,s.OM)(t,s.mm.METADATA)}async function w(e,t){return(0,a.UN)({layer:e,itemType:i,validateLayer:p,createJSONContext:e=>d(e),createItemData:f,errorNamePrefix:c,supplementalUnsupportedErrors:u,setItemProperties:m,saveResources:(t,r)=>(0,n.r)(e.resourceReferences,r)},t)}async function y(e,t,r){return(0,a.Uh)({layer:e,itemType:i,validateLayer:p,createJSONContext:e=>d(e),createItemData:f,errorNamePrefix:l,supplementalUnsupportedErrors:u,newItem:t,setItemProperties:h,saveResources:(t,r)=>(0,n.r)(e.resourceReferences,r)},r)}},97924:(e,t,r)=>{r.d(t,{UN:()=>v,Uh:()=>g});var a=r(50076),o=r(37888),s=r(65308),n=r(70652),i=r(79942),c=r(72945),l=r(24907);async function u(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.A(`${t}:invalid-parameters`,o.errorMessage,{layer:e})}(t,r,o)}function p(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:s}=e;if(function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:s,layer:n}=e,i=[r];if(o&&i.push(o),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new a.A(`${s}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:n})}}(e),s){const e=s(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:o})}}function f(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.A(`${r}:portal-item-not-set`,p(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.A(`${r}:portal-item-not-loaded`,p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:o})}function m(e){const{newItem:t,itemType:r}=e;let a=n.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=s.A.getDefault(),d({...e,item:a}),a}function h(e){return(0,i.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,l.c)(t,{errorName:"layer-write:unsupported"},r),a}function y(e){(0,c.LG)(e,c.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function v(e,t){const{layer:r,createItemData:a,createJSONContext:s,setItemProperties:n,saveResources:i,supplementalUnsupportedErrors:c}=e;await u(e),f(e);const l=r.portalItem,p=s?s(l):h(l),d=await w(r,p,{...t,supplementalUnsupportedErrors:c}),m=await a({layer:r,layerJSON:d},l);return await(n?.(r,l)),y(l),await l.update({data:m}),(0,o.v)(p),await(i?.(l,p)),l}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:s,setItemProperties:n,saveResources:i,supplementalUnsupportedErrors:c}=e;await u(e);const l=m(e),p=s?s(l):h(l),d=await w(r,p,{...t,supplementalUnsupportedErrors:c}),f=await a({layer:r,layerJSON:d},l);return await n(r,l),y(l),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(l,f,t),r.portalItem=l,(0,o.v)(p),await(i?.(l,p)),l}},79942:(e,t,r)=>{r.d(t,{m:()=>n,v:()=>s});var a=r(90534),o=r(65308);function s(e,t){return{...i(e,t),readResourcePaths:[]}}function n(e,t,r){const o=(0,a.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||o.A.getDefault(),portalItem:e}}},33106:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>f,cL:()=>d,fetchResources:()=>n,removeAllResources:()=>l,removeResource:()=>c});var a=r(3825),o=r(50076),s=r(90534);async function n(e,t={},r){await e.load(r);const a=(0,s.fj)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:i="asc",sortField:c="resource"}=t,l={query:{start:o,num:n,sortOrder:i,sortField:c,token:e.apiKey},signal:r?.signal},u=await e.portal.request(a,l);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function i(e,t,r,a){const n=new Map;for(const{resource:s,content:c,compress:l,access:p}of t){if(!s.hasPath())throw new o.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[e,t]=u(s.path),a=`${e}/${l??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:l,access:p,files:[]}),n.get(a).files.push({fileName:t,content:c})}await e.load(a);const i=(0,s.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:o,compress:s,access:c,files:l}of n.values()){const t=25;for(let r=0;r<l.length;r+=t){const n=l.slice(r,r+t),u=new FormData;o&&"."!==o&&u.append("resourcesPrefix",o),s&&u.append("compress","true"),c&&u.append("access",c);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(i,{method:"post",body:u,signal:a?.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new o.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,s.fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function l(e,t){await e.load(t);const r=(0,s.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,s.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,o]=u(t);return[a,o,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,a.A)(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=p(e.path);return e.portalItem.resourceFromPath((0,s.fj)(r,t+a))}},79880:(e,t,r)=>{r.d(t,{S:()=>c,r:()=>i});var a=r(50076),o=r(50346),s=r(49723),n=r(33106);async function i(e,t,r){const a=await l(e,t,r);await u(a,t,r)}async function c(e,t,r,a,o){const s=await l(r,a,o);await e.update({data:t}),await u(s,a,o)}async function l(e,t,i){if(!t?.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,p=[];l.forEach((t=>{c.delete(t),e.paths.push(t)}));const d=[],f=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),l.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:a,finish:o}=r,i=(0,n.bg)(t,(0,s.lk)());e.paths.push(i.path),d.push({resource:i,content:await(0,n.cL)(a),compress:r.compress}),o&&m.push((()=>o(i)))}else{e.paths.push(r.resource.path),f.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(d.length||f.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,33106));await e(t.portalItem,d,"add",i),await e(t.portalItem,f,"update",i)}if(m.forEach((e=>e())),0===p.length)return c;const h=await(0,o.Ol)(p);if((0,o.Te)(i),h.length>0)throw new a.A("save:resources","Failed to save one or more resources",{errors:h});return c}async function u(e,t,r){if(!e||!t.portalItem)return;const a=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);a.push(e.portalItem.removeResource(e,r))}await(0,o.Lx)(a)}},24907:(e,t,r)=>{r.d(t,{c:()=>n,d:()=>o});var a=r(50076);async function o(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const s=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function n(e,t,r){let o=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new a.A(e,t,r)));if(e.blockedRelativeUrls&&(o=o.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(o=o.filter((({name:e})=>!(s.has(e)||t.includes(e))))),a&&(o=o.filter((e=>"web-document-write:property-required"!==e.name)))}if(o.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}}}]);
//# sourceMappingURL=9831.946a464d.chunk.js.map