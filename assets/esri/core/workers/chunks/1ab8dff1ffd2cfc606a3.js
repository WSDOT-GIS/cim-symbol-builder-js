"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6298,5804,3069],{46130:(e,t,r)=>{r.d(t,{v:()=>s});var o=r(76553);function s(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,o.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},76553:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>o})},13069:(e,t,r)=>{r.d(t,{lk:()=>s,vD:()=>i,yS:()=>n});const o="randomUUID"in crypto;function s(){if(o)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function n(){return`{${s().toUpperCase()}}`}function i(){return`{${s()}}`}},58947:(e,t,r)=>{r.d(t,{Xh:()=>L,w6:()=>M});var o=r(90237),s=r(78888),n=r(49186),i=r(53966),a=r(74887),l=r(84952),p=r(10107),u=(r(44208),r(87811),r(36005)),c=r(40608),d=r(43937),y=r(46130),h=r(5443),f=r(54239),m=r(16930),v=r(60694),g=r(10873),w=r(83898);var S=r(20655),I=r(80812),x=r(88788),_=r(91682),b=r(26121);const M=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,a.sg)((async(e,t,r)=>{switch(e){case L.SAVE:return this._save(t);case L.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return Z(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:Z(t)}:e;return h.A.fromJSON(o,r)}const o=t.store,s=Z(t);return null==s||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<A))?null:new h.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:s})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,v.yG)(this.url,t.name):t.name;let o=t.name;if(!o&&this.url){const e=(0,v.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,v.cr)(o)}set url(e){if(null==e)return void this._set("url",e);const t=(0,v.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:i.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,v.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.An)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.F)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,i.A.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new n.A("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<A||null==this.fullExtent||this.fullExtent.hasZ)return;const o=r.obb.halfSize,s=r.obb.center[2],i=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=s-i,this.fullExtent.zmax=s+i}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<A)return;const r=t[2],o=t[3],{fullExtent:s}=this;s&&(s.zmin=r-o,s.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new n.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,s.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,s.A)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const o=t.data;this.read(o,this._getServiceContext()),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await(0,s.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const r={...T,...t};let o=I.default.from(e);if(!o)throw new n.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");o.id&&(o=o.clone(),o.id=null);const s=o.portal||S.A.getDefault();await this._ensureLoadBeforeSave(),o.type=P,o.portal=s;const i=(0,x.m)(o,"portal-item",!0),a={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(a,i,r),this.url&&(o.url=this.url),o.title||(o.title=this.title),R(o,r,U.newItem),await s.signIn(),await s.user.addItem({item:o,folder:r?.folder,data:a}),await(0,_.r)(this.resourceReferences,i),this.portalItem=o,(0,y.v)(i),i.portalItem=o,o}async _save(e){const t={...T,...e};if(!this.portalItem)throw new n.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==P)throw new n.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${P}"`);await this._ensureLoadBeforeSave();const r=(0,x.m)(this.portalItem,"portal-item",!0),o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(o,r,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),R(this.portalItem,t,U.existingItem),await(0,_.S)(this.portalItem,o,this.resourceReferences,r),(0,y.v)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const o=r?.validationOptions;(0,b.c)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:o?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const s=o?.enabled,a=null;if(s&&a){const t=(await a()).validate(e,r.portalItemLayerType);if(!t.length)return;const s=`Layer item did not validate:\n${t.join("\n")}`;if(i.A.getLogger(this).error(`_validateAgainstJSONSchema(): ${s}`),"throw"===o.failPolicy){const e=t.map((e=>new n.A("sceneservice:schema-validation",e)));throw new n.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return(0,o._)([(0,p.MZ)(g.id)],t.prototype,"id",void 0),(0,o._)([(0,p.MZ)({type:m.A})],t.prototype,"spatialReference",void 0),(0,o._)([(0,u.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,p.MZ)({type:h.A})],t.prototype,"fullExtent",void 0),(0,o._)([(0,u.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,p.MZ)({readOnly:!0,type:f.A})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,p.MZ)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,u.w)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,p.MZ)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,p.MZ)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,p.MZ)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,u.w)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,u.w)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,p.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,p.MZ)(g.OZ)],t.prototype,"url",null),(0,o._)([(0,d.K)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,p.MZ)()],t.prototype,"parsedUrl",null),(0,o._)([(0,p.MZ)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,p.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,c.$)("esri.layers.mixins.SceneService")],t),t},A=-1e38;function Z(e){if(null!=e.spatialReference)return m.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.slice(r.lastIndexOf("/")+1),10);return null!=o?new m.A(o):null}function R(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const t of o)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===U.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var U,N;(N=U||(U={}))[N.existingItem=0]="existingItem",N[N.newItem=1]="newItem";const P="Scene Service",T={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var L;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(L||(L={}))},83898:(e,t,r)=>{r.d(t,{F:()=>n});var o=r(78888),s=r(49186);async function n(e,t,r,n,i,a,l){let p=null;if(null!=r){const t=`${e}/nodepages/`,s=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.A)(s,{query:{f:"json",...n,token:i},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",s,e),p=e}}if(!t)return null;const u=t?.split("/").pop(),c=`${e}/nodes/`,d=c+u;try{return{type:"node",rootNode:(await(0,o.A)(d,{query:{f:"json",...n,token:i},responseType:"json",signal:l})).data,urlPrefix:c}}catch(e){throw new s.A("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e,url:d})}}},50805:(e,t,r)=>{r.d(t,{L0:()=>v,Ot:()=>y,W4:()=>l,uV:()=>c});var o=r(90237),s=r(25482),n=r(10107),i=(r(44208),r(53966),r(87811),r(93223)),a=r(40608);let l=class extends s.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,o._)([(0,n.MZ)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,o._)([(0,n.MZ)({type:Number})],l.prototype,"rootIndex",void 0),(0,o._)([(0,n.MZ)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],l);let p=class extends s.oY{constructor(){super(...arguments),this.factor=1}};(0,o._)([(0,n.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,o._)([(0,n.MZ)({type:Number})],p.prototype,"factor",void 0),p=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],p);let u=class extends s.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,o._)([(0,n.MZ)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,o._)([(0,n.MZ)({type:p})],u.prototype,"baseColorTexture",void 0),(0,o._)([(0,n.MZ)({type:p})],u.prototype,"metallicRoughnessTexture",void 0),(0,o._)([(0,n.MZ)({type:Number})],u.prototype,"metallicFactor",void 0),(0,o._)([(0,n.MZ)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],u);let c=class extends s.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,o._)([(0,i.e)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,o._)([(0,n.MZ)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,o._)([(0,n.MZ)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,o._)([(0,i.e)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,o._)([(0,n.MZ)({type:p})],c.prototype,"normalTexture",void 0),(0,o._)([(0,n.MZ)({type:p})],c.prototype,"occlusionTexture",void 0),(0,o._)([(0,n.MZ)({type:p})],c.prototype,"emissiveTexture",void 0),(0,o._)([(0,n.MZ)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,o._)([(0,n.MZ)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],c);let d=class extends s.oY{};(0,o._)([(0,n.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,o._)([(0,i.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],d);let y=class extends s.oY{constructor(){super(...arguments),this.atlas=!1}};(0,o._)([(0,n.MZ)({type:[d]})],y.prototype,"formats",void 0),(0,o._)([(0,n.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],y);let h=class extends s.oY{};(0,o._)([(0,i.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,o._)([(0,n.MZ)({type:Number})],h.prototype,"component",void 0),h=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],h);let f=class extends s.oY{};(0,o._)([(0,i.e)({draco:"draco"})],f.prototype,"encoding",void 0),(0,o._)([(0,n.MZ)({type:[String]})],f.prototype,"attributes",void 0),f=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],f);let m=class extends s.oY{constructor(){super(...arguments),this.offset=0}};(0,o._)([(0,n.MZ)({type:Number})],m.prototype,"offset",void 0),(0,o._)([(0,n.MZ)({type:h})],m.prototype,"position",void 0),(0,o._)([(0,n.MZ)({type:h})],m.prototype,"normal",void 0),(0,o._)([(0,n.MZ)({type:h})],m.prototype,"uv0",void 0),(0,o._)([(0,n.MZ)({type:h})],m.prototype,"color",void 0),(0,o._)([(0,n.MZ)({type:h})],m.prototype,"uvRegion",void 0),(0,o._)([(0,n.MZ)({type:h})],m.prototype,"featureId",void 0),(0,o._)([(0,n.MZ)({type:h})],m.prototype,"faceRange",void 0),(0,o._)([(0,n.MZ)({type:f})],m.prototype,"compressedAttributes",void 0),m=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],m);let v=class extends s.oY{};(0,o._)([(0,i.e)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,o._)([(0,n.MZ)()],v.prototype,"geometryBuffers",void 0),v=(0,o._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],v)},88788:(e,t,r)=>{r.d(t,{m:()=>i,v:()=>n});var o=r(84952),s=r(20655);function n(e,t){return{...a(e,t),readResourcePaths:[]}}function i(e,t,r){const s=(0,o.An)(e.itemUrl);return{...a(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:s?{rootPath:s.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function a(e,t){return{origin:t,url:(0,o.An)(e.itemUrl),portal:e.portal||s.A.getDefault(),portalItem:e}}},15804:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>a,bg:()=>d,cL:()=>c,fetchResources:()=>i,removeAllResources:()=>p,removeResource:()=>l});var o=r(78888),s=r(49186),n=r(84952);async function i(e,t={},r){await e.load(r);const o=(0,n.fj)(e.itemUrl,"resources"),{start:s=1,num:i=10,sortOrder:a="asc",sortField:l="resource"}=t,p={query:{start:s,num:i,sortOrder:a,sortField:l,token:e.apiKey},signal:r?.signal},u=await e.portal.request(o,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function a(e,t,r,o){const i=new Map;for(const{resource:e,content:o,compress:n,access:a}of t){if(!e.hasPath())throw new s.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[t,l]=u(e.path),p=`${t}/${n??""}/${a??""}`;i.has(p)||i.set(p,{prefix:t,compress:n,access:a,files:[]}),i.get(p).files.push({fileName:l,content:o})}await e.load(o);const a=(0,n.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:t,compress:r,access:s,files:n}of i.values()){const i=25;for(let l=0;l<n.length;l+=i){const p=n.slice(l,l+i),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),s&&u.append("access",s);let c=0;for(const{fileName:e,content:t}of p)u.append("file"+ ++c,t,e);u.append("f","json"),await e.portal.request(a,{method:"post",body:u,signal:o?.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new s.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,n.fj)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function p(e,t){await e.load(t);const r=(0,n.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}async function c(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.A)(e.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[r,,o]=function(e){const[t,r]=function(e){const t=(0,n.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,s]=u(t);return[o,s,r]}(e.path);return e.portalItem.resourceFromPath((0,n.fj)(r,t+o))}},24212:(e,t,r)=>{function o(e,t){return function(e,t){return t?.mode?t.mode:function(e){return e?l:p}(e).mode}(null==e||(e.hasZ??!1),t)}function s(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function n(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function i(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function a(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{$7:()=>n,B:()=>s,XF:()=>a,tW:()=>i,w7:()=>o}),r(83047),r(16271);const l={mode:"absolute-height",offset:0},p={mode:"on-the-ground",offset:null}},91682:(e,t,r)=>{r.d(t,{S:()=>l,r:()=>a});var o=r(49186),s=r(74887),n=r(13069),i=r(15804);async function a(e,t,r){const o=await p(e,t,r);await u(o,t,r)}async function l(e,t,r,o,s){const n=await p(r,o,s);await e.update({data:t}),await u(n,o,s)}async function p(e,t,a){if(!t?.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const p=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,c=[];p.forEach((t=>{l.delete(t),e.paths.push(t)}));const d=[],y=[],h=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),p.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:o,finish:s}=r,a=(0,i.bg)(t,(0,n.lk)());e.paths.push(a.path),d.push({resource:a,content:await(0,i.cL)(o),compress:r.compress}),s&&h.push((()=>s(a)))}else{e.paths.push(r.resource.path),y.push({resource:r.resource,content:await(0,i.cL)(r.content),compress:r.compress});const t=r.finish;t&&h.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,i.cL)(r.content),compress:r.compress});const e=r.finish;e&&h.push((()=>e(r.resource)))}if(d.length||y.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,15804));await e(t.portalItem,d,"add",a),await e(t.portalItem,y,"update",a)}if(h.forEach((e=>e())),0===c.length)return l;const f=await(0,s.Ol)(c);if((0,s.Te)(a),f.length>0)throw new o.A("save:resources","Failed to save one or more resources",{errors:f});return l}async function u(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const s of e){const e=t.portalItem.resourceFromPath(s);o.push(e.portalItem.removeResource(e,r))}await(0,s.Lx)(o)}},26121:(e,t,r)=>{r.d(t,{c:()=>i,d:()=>s});var o=r(49186);async function s(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const n=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){let s=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new o.A(e,t,r)));if(e.blockedRelativeUrls&&(s=s.concat(e.blockedRelativeUrls.map((e=>new o.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:o}=r;e&&(s=s.filter((({name:e})=>!(n.has(e)||t.includes(e))))),o&&(s=s.filter((e=>"web-document-write:property-required"!==e.name)))}if(s.length>0)throw new o.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}}}]);