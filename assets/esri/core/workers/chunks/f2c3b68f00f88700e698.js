"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9558],{52136:(e,t,r)=>{r.d(t,{p:()=>o});var s=r(90237),i=r(10107),a=(r(44208),r(53966),r(87811),r(40608));const o=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,i.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,a.$)("esri.layers.mixins.APIKeyMixin")],t),t}},18768:(e,t,r)=>{r.d(t,{b:()=>l});var s=r(90237),i=r(53966),a=r(10107),o=(r(44208),r(87811),r(40608)),n=r(60694);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.Jf)(e,i.A.getLogger(this)))}};return(0,s._)([(0,a.MZ)()],t.prototype,"title",null),(0,s._)([(0,a.MZ)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,o.$)("esri.layers.mixins.ArcGISService")],t),t}},69208:(e,t,r)=>{r.d(t,{d:()=>o});var s=r(90237),i=r(10107),a=(r(44208),r(53966),r(87811),r(40608));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,s._)([(0,i.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,s._)([(0,a.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},16131:(e,t,r)=>{r.d(t,{q:()=>S});var s=r(90237),i=r(49186),a=r(84952),o=r(10107),n=r(56507),l=(r(87811),r(44208),r(36005)),p=r(40608),u=r(43937),d=r(89317),c=r(45917),y=r(49422);const h={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},m={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},g={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},v={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":h,"web-map/basemap":m,"web-map/tables":g,"link-chart/operational-layers":{...h,LinkChartLayer:!0},"link-chart/basemap":m,"link-chart/tables":g,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}};var w=r(10873),f=r(79677);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,t,r){return"Group Layer"===r?.portalItem?.type?void 0:e}writeListMode(e,t,r,s){(s&&"ground"===s.layerContainerType||e&&(0,y.R)(this,r,{},s))&&(t[r]=e)}writeOperationalLayerType(e,t,r,s){e&&"tables"!==s?.layerContainerType&&(t.layerType=e)}writeTitle(e,t){t.title=e??"Layer"}readTimeExtent(e){return e?f.A.fromArray(e):null}writeTimeExtent(e,t,r,s){e&&"tables"!==s.layerContainerType&&(e.isEmpty?s?.messages&&s.messages.push(new i.A("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[r]=e.toArray())}read(e,t){t&&(t.layer=this),(0,c.t)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(!this.persistenceEnabled&&!t?.ignorePersistenceEnabled)return null;if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=v[e];let s=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(s=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(s=!1),!s)return t.messages?.push(new i.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),s=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof i.A&&"web-document-write:property-required"===e.name)).length;return(0,a.w8)(r?.url)?(t?.messages?.push(new i.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&s?null:r}beforeSave(){}};return(0,s._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,s._)([(0,l.w)("id",["id"])],t.prototype,"readId",null),(0,s._)([(0,o.MZ)(w.C1)],t.prototype,"listMode",void 0),(0,s._)([(0,u.K)("listMode")],t.prototype,"writeListMode",null),(0,s._)([(0,o.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:d.K}}}}})],t.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.K)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,s._)([(0,o.MZ)(w.ke)],t.prototype,"opacity",void 0),(0,s._)([(0,o.MZ)({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),(0,s._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,s._)([(0,u.K)("title"),(0,u.K)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,s._)([(0,o.MZ)({type:f.A,json:{origins:{"web-scene":{write:{layerContainerTypes:d.K}}}}})],t.prototype,"visibilityTimeExtent",void 0),(0,s._)([(0,l.w)("visibilityTimeExtent")],t.prototype,"readTimeExtent",null),(0,s._)([(0,u.K)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[n.jz,n.Uv]]}})],t.prototype,"writeTimeExtent",null),(0,s._)([(0,o.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:d.K}}},name:"visibility",write:!0}})],t.prototype,"visible",void 0),t=(0,s._)([(0,p.$)("esri.layers.mixins.OperationalLayer")],t),t}},8303:(e,t,r)=>{r.d(t,{A:()=>A});var s=r(90237),i=r(92602),a=r(70333),o=r(78888),n=r(60999),l=r(49186),p=r(53966),u=r(97768),d=r(74887),c=r(84952),y=r(10107),h=(r(44208),r(87811),r(36005)),m=r(40608),g=r(43937),v=r(83531),w=r(20655),f=r(80812),S=r(41318),I=r(10407);const A=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new f.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:s}=await Promise.all([r.e(5356),r.e(1204)]).then(r.bind(r,41204));return(0,d.Te)(t),await s({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,d.zf)(e)||p.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,d.QP)(e),!0))))}async setUserPrivileges(e,t){if(!i.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(e){(0,d.QP)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const s=e===r.id;if(s&&r.portal.user)return(0,I.It)(r);let i,o;if(s)i=r.portal.url;else try{i=await(0,v.wI)(this.url,t)}catch(e){(0,d.QP)(e)}if(!i||!(0,c.b8)(i,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;o=await(a.id?.getCredential(`${i}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,d.QP)(e)}const n=!0,l=!1,p=!1;if(!o)return{features:{edit:n,fullEdit:l},content:{updateItem:p}};try{if(s?await r.reload():(r=new f.default({id:e,portal:{url:i}}),await r.load(t)),r.portal.user)return(0,I.It)(r)}catch(e){(0,d.QP)(e)}return{features:{edit:n,fullEdit:l},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,d.QP)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?a.id?.findCredential(this.url):null;if(!t)return!0;const r=T.credential===t?T.user:await this._fetchEditingUser(e);return T.credential=t,T.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=a.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const s=`${r.owningSystemUrl}/sharing/rest`,i=w.A.getDefault();if(i&&i.loaded&&(0,c.S8)(i.restUrl)===(0,c.S8)(s))return i.user;const l=`${s}/community/self`,p=null!=e?e.signal:null,u=await(0,n.Ke)((0,o.A)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?S.A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,s=this.portalItem?.id&&(this.portalItem.portal||w.A.getDefault());return r&&s&&!(0,c.ut)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,s._)([(0,y.MZ)({type:f.default})],t.prototype,"portalItem",null),(0,s._)([(0,h.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,s._)([(0,g.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,s._)([(0,y.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,s._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,s._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,s._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,s._)([(0,m.$)("esri.layers.mixins.PortalLayer")],t),t},T={credential:null,user:null}},54310:(e,t,r)=>{r.d(t,{J:()=>f});var s=r(90237),i=(r(44208),r(53966)),a=r(74887),o=r(10107),n=r(79901),l=(r(87811),r(40608)),p=r(89317),u=r(5503),d=(r(60999),r(49186),r(14012),r(80559));const c=new u.A,y=new WeakMap;function h(e){(function(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e})(e)&&c.push(new WeakRef(e))}function m(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:m(t,e%t):0}let g=0,v=0;function w(){const e=Date.now();let t=!1;for(const r of c){const s=r.deref();s?s.refreshInterval&&e-(y.get(s)??0)+5>=6e4*s.refreshInterval&&(y.set(s,e),s.refresh(e)):t=!0}if(t)for(let e=c.length-1;e>=0;e--)c.at(e).deref()||c.removeAt(e)}(0,d.fm)((()=>{const e=Date.now();let t=0;for(const r of c){const s=r.deref();s&&(t=m(Math.round(6e4*s.refreshInterval),t),s.refreshInterval?y.get(s)||y.set(s,e):y.delete(s))}if(t!==v){if(v=t,clearInterval(g),0===v)return void(g=0);g=setInterval(w,v)}}));const f=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,a.sg)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||h(this)}),(()=>{}))}destroy(){!function(e){const t=c.find((t=>t.deref()===e));t&&c.remove(t)}(this)}castRefreshInterval(e){return e>=.1?e:e<=0?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,a.QZ)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{i.A.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){}};return(0,s._)([(0,o.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:p.K}}}}})],t.prototype,"refreshInterval",void 0),(0,s._)([(0,n.w)("refreshInterval")],t.prototype,"castRefreshInterval",null),(0,s._)([(0,o.MZ)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],t.prototype,"refreshParameters",null),t=(0,s._)([(0,l.$)("esri.layers.mixins.RefreshableLayer")],t),t}},29005:(e,t,r)=>{r.d(t,{A:()=>d});var s=r(90237),i=r(69540),a=r(66552),o=r(25482),n=r(10107),l=(r(44208),r(53966),r(87811),r(40608));const p=new a.J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,i.O)(o.oY)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,s._)([(0,n.MZ)({json:{write:!0}})],u.prototype,"name",void 0),(0,s._)([(0,n.MZ)({json:{write:!0}})],u.prototype,"description",void 0),(0,s._)([(0,n.MZ)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,s._)([(0,n.MZ)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,s._)([(0,n.MZ)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,s._)([(0,l.$)("esri.layers.support.FeatureTemplate")],u);const d=u},37352:(e,t,r)=>{r.d(t,{A:()=>u});var s,i=r(90237),a=r(5503),o=r(25482),n=r(10107),l=(r(44208),r(53966),r(87811),r(40608));let p=s=class extends o.oY{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new a.A}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,i._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,i._)([(0,n.MZ)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,i._)([(0,n.MZ)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=s=(0,i._)([(0,l.$)("esri.layers.support.LayerFloorInfo")],p);const u=p},45067:(e,t,r)=>{r.d(t,{A:()=>c});var s=r(90237),i=r(69540),a=r(66552),o=r(25482),n=r(10107),l=(r(44208),r(53966),r(87811),r(40608));const p=new a.J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),u=new a.J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let d=class extends((0,i.O)(o.oY)){constructor(e){super(e),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,s._)([(0,n.MZ)({json:{read:p.read,write:p.write}})],d.prototype,"cardinality",void 0),(0,s._)([(0,n.MZ)({json:{read:!0,write:!0}})],d.prototype,"composite",void 0),(0,s._)([(0,n.MZ)({json:{read:!0,write:!0}})],d.prototype,"id",void 0),(0,s._)([(0,n.MZ)({json:{read:!0,write:!0}})],d.prototype,"keyField",void 0),(0,s._)([(0,n.MZ)({json:{read:!0,write:!0}})],d.prototype,"keyFieldInRelationshipTable",void 0),(0,s._)([(0,n.MZ)({json:{read:!0,write:!0}})],d.prototype,"name",void 0),(0,s._)([(0,n.MZ)({json:{read:!0,write:!0}})],d.prototype,"relatedTableId",void 0),(0,s._)([(0,n.MZ)({json:{read:!0,write:!0}})],d.prototype,"relationshipTableId",void 0),(0,s._)([(0,n.MZ)({json:{read:u.read,write:u.write}})],d.prototype,"role",void 0),d=(0,s._)([(0,l.$)("esri.layers.support.Relationship")],d);const c=d},22453:(e,t,r)=>{r.d(t,{S:()=>c,d:()=>T});var s=r(44208),i=r(60694);function a(e,t,r){return!!n(e,t,r)}function o(e,t,r){return n(e,t,r)}function n(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const l={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function p(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e){const t=e?.supportedStatisticTypes?.map((e=>e.toLowerCase()));return{count:!!t?.includes("count"),sum:!!t?.includes("sum"),min:!!t?.includes("min"),max:!!t?.includes("max"),avg:!!t?.includes("avg"),var:!!t?.includes("var"),stddev:!!t?.includes("stddev"),percentileContinuous:!!t?.includes("percentile_continuous"),percentileDiscrete:!!t?.includes("percentile_discrete"),envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function c(e,t){return{analytics:y(e),attachment:h(e),data:m(e),metadata:g(e),operations:v(e.capabilities,e,t),query:w(e,t),queryBins:I(e),queryRelated:f(e),queryTopFeatures:S(e),editing:A(e)}}function y(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function h(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:a(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=l[e.name];t&&(r[t]=!!e.isEnabled)})),r}function m(e){return{isVersioned:a(e,"isDataVersioned",!1),supportsAttachment:a(e,"hasAttachments",!1),supportsM:a(e,"hasM",!1),supportsZ:a(e,"hasZ",!1)}}function g(e){return{supportsAdvancedFieldProperties:a(e,"supportsFieldDescriptionProperty",!1)}}function v(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],o=r?(0,i.qg)(r):null,n=s.includes(null!=o&&"MapServer"===o.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let p=l&&s.includes("create"),u=l&&s.includes("delete"),d=l&&s.includes("update");const c=s.includes("changetracking"),y=t.advancedQueryCapabilities;return l&&!(p||u||d)&&(p=u=d=!0),{supportsCalculate:a(t,"supportsCalculate",!1),supportsTruncate:a(t,"supportsTruncate",!1),supportsValidateSql:a(t,"supportsValidateSql",!1),supportsAdd:p,supportsDelete:u,supportsEditing:l,supportsChangeTracking:c,supportsQuery:n,supportsQueryAnalytics:a(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:a(y,"supportsQueryAttachments",!1),supportsQueryBins:a(y,"supportsQueryBins",!1),supportsQueryTopFeatures:a(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:a(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:a(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:a(t,"supportsAsyncConvert3D",!1)}}function w(e,t){const r=e.advancedQueryCapabilities,n=e.ownershipBasedAccessControlForFeatures,l=e.archivingInfo,d=e.currentVersion,c=t?.includes("MapServer"),y=!c||d>=(0,s.A)("mapserver-pbf-version-support"),h=(0,i.Wo)(t),m=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{maxRecordCount:o(e,"maxRecordCount",void 0),maxRecordCountFactor:o(e,"maxRecordCountFactor",void 0),standardMaxRecordCount:o(e,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:p(r),supportsCacheHint:a(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsCentroid:a(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:h,supportsDefaultSpatialReference:a(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:a(r,"supportsDisjointSpatialRel",!1),supportsDistance:a(r,"supportsQueryWithDistance",!1),supportsDistinct:a(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:a(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:y&&m.has("pbf"),supportsFullTextSearch:a(r,"supportsFullTextSearch",!1),supportsGeometryProperties:a(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:a(r,"supportsHavingClause",!1),supportsHistoricMoment:a(l,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:a(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:a(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:a(r,"supportsPagination",!1),supportsPercentileStatistics:a(r,"supportsPercentileStatistics",!1),supportsQuantization:a(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:a(e,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:a(n,"allowAnonymousToQuery",!0),supportsQueryByOthers:a(n,"allowOthersToQuery",!0),supportsQueryGeometry:a(e,"supportsReturningQueryGeometry",!1),supportsResultType:a(r,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:a(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:a(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:a(e,"useStandardizedQueries",!1),supportsStatistics:a(r,"supportsStatistics",e.supportsStatistics),supportsTopFeaturesQuery:a(r,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:o(e,"tileMaxRecordCount",void 0)}}function f(e){const t=e.advancedQueryCapabilities,r=a(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:a(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function S(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function I(e){const t=e?e.queryBinsCapabilities:void 0;return{supportsDate:a(t,"supportsDateBin",!1),supportsFixedInterval:a(t,"supportsFixedIntervalBin",!1),supportsAutoInterval:a(t,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:a(t,"supportsFixedBoundariesBin",!1),supportedStatistics:d(t)}}function A(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:a(e,"allowGeometryUpdates",!0),supportsGlobalId:a(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:a(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:a(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:a(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:a(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:a(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:a(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:a(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:a(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:a(r,"supportsAsyncApplyEdits",!1),zDefault:o(e,"zDefault",void 0)}}function T(e){return{operations:{supportsAppend:a(e,"supportsAppend",!1),supportsExportClip:a(e,"supportsExportClip",!1),supportsExportFrameset:a(e,"supportsExportFrameset",!1),supportsMensuration:a(e,"supportsMensuration",!1),supportsUpdate:a(e,"supportsUpdate",!1)},query:{supportsCoverageQuery:e?.playbackInfo?.klv["0601"]??!1}}}}}]);