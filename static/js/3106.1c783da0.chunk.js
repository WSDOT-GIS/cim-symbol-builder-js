"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3106],{33106:(e,t,s)=>{s.d(t,{addOrUpdateResources:()=>c,bg:()=>f,cL:()=>d,fetchResources:()=>n,removeAllResources:()=>u,removeResource:()=>l});var r=s(3825),o=s(50076),a=s(90534);async function n(e,t={},s){await e.load(s);const r=(0,a.fj)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:c="asc",sortField:l="resource"}=t,u={query:{start:o,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:s?.signal},i=await e.portal.request(r,u);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((({created:t,size:s,resource:r})=>({created:new Date(t),size:s,resource:e.resourceFromPath(r)})))}}async function c(e,t,s,r){const n=new Map;for(const{resource:a,content:l,compress:u,access:p}of t){if(!a.hasPath())throw new o.A(`portal-item-resource-${s}:invalid-path`,"Resource does not have a valid path");const[e,t]=i(a.path),r=`${e}/${u??""}/${p??""}`;n.has(r)||n.set(r,{prefix:e,compress:u,access:p,files:[]}),n.get(r).files.push({fileName:t,content:l})}await e.load(r);const c=(0,a.fj)(e.userItemUrl,"add"===s?"addResources":"updateResources");for(const{prefix:o,compress:a,access:l,files:u}of n.values()){const t=25;for(let s=0;s<u.length;s+=t){const n=u.slice(s,s+t),i=new FormData;o&&"."!==o&&i.append("resourcesPrefix",o),a&&i.append("compress","true"),l&&i.append("access",l);let p=0;for(const{fileName:e,content:t}of n)i.append("file"+ ++p,t,e);i.append("f","json"),await e.portal.request(c,{method:"post",body:i,signal:r?.signal})}}}async function l(e,t,s){if(!t.hasPath())throw new o.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(s);const r=(0,a.fj)(e.userItemUrl,"removeResources");await e.portal.request(r,{method:"post",query:{resource:t.path},signal:s?.signal}),t.portalItem=null}async function u(e,t){await e.load(t);const s=(0,a.fj)(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function i(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,s]=function(e){const t=(0,a.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[r,o]=i(t);return[r,o,s]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,r.A)(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[s,,r]=p(e.path);return e.portalItem.resourceFromPath((0,a.fj)(s,t+r))}}}]);
//# sourceMappingURL=3106.1c783da0.chunk.js.map