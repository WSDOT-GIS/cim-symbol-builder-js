(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[78,9],{692:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return c})),r.d(t,"contentToBlob",(function(){return b})),r.d(t,"fetchResources",(function(){return n})),r.d(t,"getSiblingOfSameType",(function(){return y})),r.d(t,"getSiblingOfSameTypeI",(function(){return h})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return l})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return d}));var o=r(44),a=r(9),i=r(2),s=r(15);async function n(e,t={},r){await e.load(r);const o=Object(s.z)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="created"}=t,p={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:Object(i.i)(r,"signal")},u=await e.portal._request(o,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map(({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)}))}}async function c(e,t,r,o){if(!e.hasPath())throw new a.a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(o);const c=Object(s.z)(n.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=u(e.path),d=await b(r),y=new FormData;return l&&"."!==l&&y.append("resourcesPrefix",l),y.append("fileName",p),y.append("file",d,p),y.append("f","json"),Object(i.k)(o)&&o.access&&y.append("access",o.access),await n.portal._request(c,{method:"post",body:y,signal:Object(i.i)(o,"signal")}),e}async function l(e,t,r){if(!t.hasPath())throw new a.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=Object(s.z)(e.userItemUrl,"removeResources");await e.portal._request(o,{method:"post",query:{resource:t.path},signal:Object(i.i)(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(s.z)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(i.i)(t,"signal")})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=Object(s.n)(e);return Object(i.j)(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}(e),[o,a]=u(t);return[o,a,r]}async function b(e){return e instanceof Blob?e:(await Object(o.default)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(s.z)(r,t+o))}function h(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(s.z)(r,t+o))}},700:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r(44),a=r(9),i=r(2);async function s(e,t,r,s,n,c){let l=null;if(Object(i.k)(r)){const t=e+"/nodepages/",a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await Object(o.default)(a,{query:{f:"json",token:s},responseType:"json",signal:c})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(d){Object(i.k)(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,d),l=d}}if(!t)return null;const p=e+"/nodes/",u=p+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(o.default)(u,{query:{f:"json",token:s},responseType:"json",signal:c})).data,urlPrefix:p}}catch(d){throw new a.a("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:d,url:u})}}},701:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},703:function(e,t,r){"use strict";r.d(t,"a",(function(){return U}));var o=r(0),a=r(44),i=r(9),s=(r(5),r(12)),n=r(2),c=r(13),l=r(15),p=r(1),u=(r(8),r(4),r(17)),d=r(3),b=r(16),y=r(701);function h(e){e&&e.writtenProperties&&e.writtenProperties.forEach(e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(y.a)(t)&&t.updateOrigin(e.propName,e.newOrigin)})}var f=r(34),O=r(170),j=r(27),m=r(131),v=r(94),g=r(700),w=r(72),S=r(250),x=r(132),I=r(383),T=r(692);async function R(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),s=new Set,n=[];a.forEach(t=>{o.delete(t),e.paths.push(t)});for(const i of t.resources.toUpdate)if(o.delete(i.resource.path),a.has(i.resource.path)||s.has(i.resource.path)){const{resource:t,content:o,finish:a,error:s}=i,c=Object(T.getSiblingOfSameTypeI)(t,Object(I.a)());e.paths.push(c.path),n.push(_({resource:c,content:o,finish:a,error:s},r))}else e.paths.push(i.resource.path),n.push(N(i,r)),s.add(i.resource.path);for(const i of t.resources.toAdd)n.push(_(i,r)),e.paths.push(i.resource.path);if(o.forEach(e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch(()=>{}))}),0===n.length)return;const l=await Object(c.i)(n);Object(c.u)(r);const p=l.filter(e=>"error"in e).map(e=>e.error);if(p.length>0)throw new i.a("save:resources","Failed to save one or more resources",{errors:p})}async function _(e,t){const r=await Object(x.c)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function N(e,t){const r=await Object(x.c)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const P=s.a.getLogger("esri.layers.mixins.SceneService"),U=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(c.h)(async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return j.a.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new j.a(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return f.a.fromJSON(o,r)}const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some(e=>e<k)?null:new f.a({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(m.i)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=Object(m.e)(this.url);Object(n.k)(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(m.a)(o)}set url(e){const t=Object(m.h)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:P});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(m.j)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(l.K)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(g.a)(this.parsedUrl.path,this.rootNode,e,this.apiKey,P,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new i.a("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<k||null==this.fullExtent||this.fullExtent.hasZ)return;const s=a.obb.halfSize,n=a.obb.center[2],c=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=n-c,this.fullExtent.zmax=n+c}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<k)return;const r=t[2],a=t[3];this.fullExtent.zmin=r-a,this.fullExtent.zmax=r+a}}async _fetchService(e){if(null==this.url)throw new i.a("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(a.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(a.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this.read(t.data,{origin:"service",url:this.parsedUrl}),this._fetchVoxelServiceLayer();const o=t.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await Object(a.default)(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t),1===r&&(e.typeKeywords=e.typeKeywords.filter(e=>"Hosted Service"!==e)))}async _saveAs(e,t){const r={...A,...t};let o=S.default.from(e);o||(P.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new i.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||w.a.getDefault();await this._ensureLoadBeforeSave(),o.type=M,o.portal=a;const s={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(n,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await a._signIn(),await a.user.addItem({item:o,folder:r&&r.folder,data:n}),await R(this.resourceReferences,s,null),this.portalItem=o,h(s),s.portalItem=o,o}async _save(e){const t={...A,...e};this.portalItem||(P.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new i.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==M&&(P.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+M),await Promise.reject(new i.a("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${M}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(l.K)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||w.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await R(this.resourceReferences,r,null),h(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter(e=>"error"===e.type).map(e=>new i.a(e.name,e.message,e.details));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter(e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)),o.validationOptions.enabled||F){const t=(await r.e(227).then(r.bind(null,1033))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(P.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map(e=>new i.a("sceneservice:schema-validation",e)).concat(a);throw new i.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new i.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return Object(o.a)([Object(p.b)(v.c)],t.prototype,"id",void 0),Object(o.a)([Object(p.b)({type:j.a})],t.prototype,"spatialReference",void 0),Object(o.a)([Object(u.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o.a)([Object(p.b)({type:f.a})],t.prototype,"fullExtent",void 0),Object(o.a)([Object(u.a)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o.a)([Object(p.b)({readOnly:!0,type:O.a})],t.prototype,"heightModelInfo",void 0),Object(o.a)([Object(p.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o.a)([Object(p.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],t.prototype,"version",void 0),Object(o.a)([Object(u.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(o.a)([Object(p.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o.a)([Object(p.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o.a)([Object(p.b)({type:String})],t.prototype,"title",void 0),Object(o.a)([Object(u.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o.a)([Object(u.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(o.a)([Object(p.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o.a)([Object(p.b)(v.n)],t.prototype,"url",null),Object(o.a)([Object(b.a)("url")],t.prototype,"writeUrl",null),Object(o.a)([Object(p.b)()],t.prototype,"parsedUrl",null),Object(o.a)([Object(p.b)({readOnly:!0})],t.prototype,"store",void 0),Object(o.a)([Object(p.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o.a)([Object(d.a)("esri.layers.mixins.SceneService")],t),t},k=-1e38,F=!1,M="Scene Service",A={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},788:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return b}));var o=r(0),a=r(10),i=r(1),s=(r(8),r(5),r(4),r(22)),n=r(3);let c=class extends a.a{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(o.a)([Object(i.b)({type:Number})],c.prototype,"nodesPerPage",void 0),Object(o.a)([Object(i.b)({type:Number})],c.prototype,"rootIndex",void 0),Object(o.a)([Object(i.b)({type:String})],c.prototype,"lodSelectionMetricType",void 0),c=Object(o.a)([Object(n.a)("esri.layer.support.I3SNodePageDefinition")],c);let l=class extends a.a{constructor(){super(...arguments),this.factor=1}};Object(o.a)([Object(i.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(o.a)([Object(i.b)({type:Number})],l.prototype,"factor",void 0),l=Object(o.a)([Object(n.a)("esri.layer.support.I3SMaterialTexture")],l);let p=class extends a.a{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(o.a)([Object(i.b)({type:[Number]})],p.prototype,"baseColorFactor",void 0),Object(o.a)([Object(i.b)({type:l})],p.prototype,"baseColorTexture",void 0),Object(o.a)([Object(i.b)({type:l})],p.prototype,"metallicRoughnessTexture",void 0),Object(o.a)([Object(i.b)({type:Number})],p.prototype,"metallicFactor",void 0),Object(o.a)([Object(i.b)({type:Number})],p.prototype,"roughnessFactor",void 0),p=Object(o.a)([Object(n.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],p);let u=class extends a.a{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(o.a)([Object(s.a)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),Object(o.a)([Object(i.b)({type:Number})],u.prototype,"alphaCutoff",void 0),Object(o.a)([Object(i.b)({type:Boolean})],u.prototype,"doubleSided",void 0),Object(o.a)([Object(s.a)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),Object(o.a)([Object(i.b)({type:l})],u.prototype,"normalTexture",void 0),Object(o.a)([Object(i.b)({type:l})],u.prototype,"occlusionTexture",void 0),Object(o.a)([Object(i.b)({type:l})],u.prototype,"emissiveTexture",void 0),Object(o.a)([Object(i.b)({type:[Number]})],u.prototype,"emissiveFactor",void 0),Object(o.a)([Object(i.b)({type:p})],u.prototype,"pbrMetallicRoughness",void 0),u=Object(o.a)([Object(n.a)("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends a.a{};Object(o.a)([Object(i.b)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:""+t.index}}})],d.prototype,"name",void 0),Object(o.a)([Object(s.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=Object(o.a)([Object(n.a)("esri.layer.support.I3STextureFormat")],d);let b=class extends a.a{constructor(){super(...arguments),this.atlas=!1}};Object(o.a)([Object(i.b)({type:[d]})],b.prototype,"formats",void 0),Object(o.a)([Object(i.b)({type:Boolean})],b.prototype,"atlas",void 0),b=Object(o.a)([Object(n.a)("esri.layer.support.I3STextureSetDefinition")],b);let y=class extends a.a{};Object(o.a)([Object(s.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),Object(o.a)([Object(i.b)({type:Number})],y.prototype,"component",void 0),y=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryAttribute")],y);let h=class extends a.a{};Object(o.a)([Object(s.a)({draco:"draco"})],h.prototype,"encoding",void 0),Object(o.a)([Object(i.b)({type:[String]})],h.prototype,"attributes",void 0),h=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryCompressedAttributes")],h);let f=class extends a.a{constructor(){super(...arguments),this.offset=0}};Object(o.a)([Object(i.b)({type:Number})],f.prototype,"offset",void 0),Object(o.a)([Object(i.b)({type:y})],f.prototype,"position",void 0),Object(o.a)([Object(i.b)({type:y})],f.prototype,"normal",void 0),Object(o.a)([Object(i.b)({type:y})],f.prototype,"uv0",void 0),Object(o.a)([Object(i.b)({type:y})],f.prototype,"color",void 0),Object(o.a)([Object(i.b)({type:y})],f.prototype,"uvRegion",void 0),Object(o.a)([Object(i.b)({type:y})],f.prototype,"featureId",void 0),Object(o.a)([Object(i.b)({type:y})],f.prototype,"faceRange",void 0),Object(o.a)([Object(i.b)({type:h})],f.prototype,"compressedAttributes",void 0),f=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryBuffer")],f);let O=class extends a.a{};Object(o.a)([Object(s.a)({triangle:"triangle"})],O.prototype,"topology",void 0),Object(o.a)([Object(i.b)()],O.prototype,"geometryBuffers",void 0),O=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryDefinition")],O)},818:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return X}));var o=r(0),a=r(9),i=r(50),s=r(2),n=r(354),c=r(13),l=r(18),p=r(1),u=(r(8),r(5),r(4),r(17)),d=r(3),b=r(701),y=r(15),h=r(383),f=r(109),O=r(84);function j(e){return m[function(e){return e instanceof Blob?e.type:function(e){const t=Object(y.n)(e);return w[t]||v}(e.url)}(e)]||g}const m={},v="text/plain",g=m[v],w={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const Y in w)m[w[Y]]=Y;var S=r(71);function x(e){const t=Object(s.k)(e)&&e.origins?e.origins:[void 0];return(r,o)=>{const a=function(e,t,r){if(Object(s.k)(e)&&"resource"===e.type)return function(e,t,r){const o=Object(f.b)(t,r);return{type:String,read:(e,t,r)=>{const a=Object(S.d)(e,t,r);return o.type===String?a:"function"==typeof o.type?new o.type({url:a}):void 0},write:{writer(t,a,i,n){if(!n||!n.resources)return"string"==typeof t?void(a[i]=Object(S.e)(t,n)):void(a[i]=t.write({},n));const c=(u=t,Object(s.j)(u)?null:"string"==typeof u?u:u.url),l=c?Object(S.e)(c,{...n,verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,p=o.type!==String&&(!Object(b.a)(this)||n&&n.origin&&this.originIdOf(r)>Object(O.d)(n.origin));var u;n&&n.portalItem&&Object(s.k)(l)&&!Object(y.s)(l)?p?function(e,t,r,o,a,i,s,n){const c=s.portalItem.resourceFromPath(o),l=R(r,o,s);j(l)===Object(y.n)(c.path)?(T(e,t,c,l,s.resources.toUpdate),a[i]=o):I(e,t,r,o,a,i,s,n)}(this,r,t,l,a,i,n,e):function(e,t,r,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(e)}),t[r]=e}(l,a,i,n):n&&n.portalItem&&(Object(s.j)(l)||Object(s.k)(Object(S.b)(l))||Object(y.t)(l)||p)?I(this,r,t,l,a,i,n,e):a[i]=l}}}}(e,t,r);switch(Object(s.k)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=S.c;return{read:e,write:t}}}}(e,r,o);for(const e of t){const t=Object(p.c)(r,e,o);for(const e in a)t[e]=a[e]}}}function I(e,t,o,a,i,n,c,l){const p=Object(h.a)(),u=R(o,a,c),d=Object(y.z)(Object(s.i)(l,"prefix"),p),b=`${d}.${j(u)}`,f=c.portalItem.resourceFromPath(b);Object(y.t)(a)&&c.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(null,44))).default,{data:o}=await t(e,{responseType:"blob"});return o}(a).then(e=>{f.path=`${d}.${j(e)}`,i[n]=f.itemRelativeUrl}).catch(()=>{})),T(e,t,f,u,c.resources.toAdd),i[n]=f.itemRelativeUrl}function T(e,t,r,o,a){a.push({resource:r,content:o,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function R(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}var _,N=r(217),P=r(373),U=r(369),k=r(357),F=r(356),M=r(358),A=r(703),K=r(94),L=r(788),E=r(44),z=r(24),q=r(10),J=(r(57),r(6)),D=r(96),C=r(16),B=r(200),V=r(79);let $=_=class extends q.a{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(B.a)(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new D.a("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const a=new V.a;Object(B.k)(e,a,o.layer.spatialReference),t[r]=a.toJSON(o)}else t[r]=e.toJSON(o);delete t[r].spatialReference}clone(){return new _({geometry:Object(J.a)(this.geometry),type:this.type})}};Object(o.a)([Object(p.b)({type:V.a}),x()],$.prototype,"geometry",void 0),Object(o.a)([Object(C.a)(["web-scene","portal-item"],"geometry")],$.prototype,"writeGeometry",null),Object(o.a)([Object(p.b)({type:["clip","mask","replace"],nonNullable:!0}),x()],$.prototype,"type",void 0),$=_=Object(o.a)([Object(d.a)("esri.layers.support.SceneModification")],$);const G=$;var Z;let H=Z=class extends(Object(q.b)(z.a.ofType(G))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(e=>!!e.geometry)}clone(){return new Z({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const r of e)this.add(G.fromJSON(r,t))}static fromJSON(e,t){const r=new Z;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const o={url:Object(y.K)(e),origin:"service"},a=await Object(E.default)(e,{responseType:"json",signal:Object(s.i)(r,"signal")}),i=t.toJSON(),n=[];for(const s of a.data)n.push(G.fromJSON({...s,geometry:{...s.geometry,spatialReference:i}},o));return new Z({url:e,items:n})}};Object(o.a)([Object(p.b)({type:String})],H.prototype,"url",void 0),H=Z=Object(o.a)([Object(d.a)("esri.layers.support.SceneModifications")],H);const Q=H;let W=class extends(Object(A.a)(Object(U.a)(Object(k.a)(Object(F.a)(Object(M.a)(Object(n.a)(Object(P.a)(N.a)))))))){constructor(...e){super(...e),this.handles=new i.a,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(Object(l.b)(this,"modifications","after-changes",()=>this.modifications=this.modifications,null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:Object(S.a)(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=Object(s.i)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){Object(c.t)(r)}if(await this._fetchService(t),Object(s.k)(this._modificationsSource)){const t=await Q.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!Object(s.j)(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new a.a("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new a.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};Object(o.a)([Object(p.b)({type:String,readOnly:!0})],W.prototype,"geometryType",void 0),Object(o.a)([Object(p.b)({type:["show","hide"]})],W.prototype,"listMode",void 0),Object(o.a)([Object(p.b)({type:["IntegratedMeshLayer"]})],W.prototype,"operationalLayerType",void 0),Object(o.a)([Object(p.b)({json:{read:!1},readOnly:!0})],W.prototype,"type",void 0),Object(o.a)([Object(p.b)({type:L.c,readOnly:!0})],W.prototype,"nodePages",void 0),Object(o.a)([Object(p.b)({type:[L.b],readOnly:!0})],W.prototype,"materialDefinitions",void 0),Object(o.a)([Object(p.b)({type:[L.d],readOnly:!0})],W.prototype,"textureSetDefinitions",void 0),Object(o.a)([Object(p.b)({type:[L.a],readOnly:!0})],W.prototype,"geometryDefinitions",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],W.prototype,"serviceUpdateTimeStamp",void 0),Object(o.a)([Object(p.b)({type:Q}),x({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],W.prototype,"modifications",void 0),Object(o.a)([Object(u.a)(["web-scene","portal-item"],"modifications")],W.prototype,"readModifications",null),Object(o.a)([Object(p.b)(K.b)],W.prototype,"elevationInfo",void 0),Object(o.a)([Object(p.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],W.prototype,"path",void 0),W=Object(o.a)([Object(d.a)("esri.layers.IntegratedMeshLayer")],W);const X=W}}]);
//# sourceMappingURL=78.38cca85c.chunk.js.map