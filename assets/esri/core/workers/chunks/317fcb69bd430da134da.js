"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7656],{83960:(e,t,r)=>{r.d(t,{X_:()=>o,zx:()=>n});var i=r(34727),s=r(83047);const a=96;function o(e,t){const r=t||e.extent,i=e.width,o=(0,s.GA)(r?.spatialReference);return r&&i?r.width/i*o*s.dy*a:0}function n(e,t,r){return function(e,t){return 0===t||(0,i.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,i.Sp)(e,t)||e>t}(e,r)}},7656:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var i=r(90237),s=r(78888),a=r(49186),o=r(81583),n=r(92071),l=r(74887),d=r(10107),u=r(56507),p=(r(87811),r(44208),r(36005)),y=r(40608),m=r(43937),c=r(35666),h=r(5443),f=r(83960),v=r(21325),g=r(4146),b=r(52136),_=r(98534),x=r(18768),w=r(63074),S=r(69208),I=r(16131),M=r(8303),T=r(54310),Z=r(25036),O=r(91921),E=r(82935),A=r(10873),L=r(69622),F=r(39516);function N(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?function(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}(e,t.floorInfo.floorField):null}r(53966);var P=r(63389);const U={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let j=class extends L.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=N(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,P.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(U[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=N(this.floors,t),i=(0,F.m)(r,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,i=t=>{t.visible&&(0===r||(0,f.zx)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(i):e.unshift(t))};t&&t.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,d.MZ)({readOnly:!0})],j.prototype,"dynamicLayers",null),(0,i._)([(0,d.MZ)()],j.prototype,"floors",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],j.prototype,"hasDynamicLayers",null),(0,i._)([(0,d.MZ)()],j.prototype,"layer",null),(0,i._)([(0,d.MZ)({readOnly:!0})],j.prototype,"layers",null),(0,i._)([(0,d.MZ)({readOnly:!0})],j.prototype,"layerDefs",null),(0,i._)([(0,d.MZ)({type:Number})],j.prototype,"scale",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],j.prototype,"version",null),(0,i._)([(0,d.MZ)({readOnly:!0})],j.prototype,"visibleSublayers",null),j=(0,i._)([(0,y.$)("esri.layers.support.ExportImageParameters")],j);var D=r(33446),J=r(60410),R=r(91908),k=r(79677),V=r(56400);let $=class extends((0,w.dM)((0,E.e)((0,Z.j)((0,O.I)((0,_.V)((0,x.b)((0,I.q)((0,M.A)((0,n.P)((0,T.J)((0,b.p)((0,S.d)(g.A))))))))))))){constructor(...e){super(...e),this._exportImageParameters=new j({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(l.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;const o=(0,c.aB)(i.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers)if(o===c.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,P.Zx)(s,e,c.Gr.SERVICE)}else if(o>c.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,P.Zx)(s,e.sublayers,(0,c.aB)(e.origin))}const n=[],l={writeSublayerStructure:a,...i};let d=a||this.hasVisibleLayersForOrigin(o);s.forEach((e=>{const t=e.write({},l);n.push(t),d=d||"user"===e.originOf("visible")})),n.some((e=>Object.keys(e).length>1))&&(t.layers=n),d&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=i?.floors??null,this._exportImageParameters.scale=(0,f.X_)({extent:e,width:t})*s;const a=this._exportImageParameters.toJSON(),o=!i?.rotation||this.version<10.3?{}:{rotation:-i.rotation},n=e?.spatialReference,l=(0,v.YX)(n);a.dpi*=s;const d={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();d.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(d.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:l,imageSR:l,size:t+","+r,...a,...o,...d}}async fetchImage(e,t,r,i){const{data:s}=await this._fetchImage("image",e,t,r,i);return s}async fetchImageBitmap(e,t,r,i){const{data:s,url:a}=await this._fetchImage("blob",e,t,r,i);return(0,D.m)(s,a,i?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.A)(this.url,t),{extent:i,fullExtent:a,timeExtent:o}=r,n=i||a;return{fullExtent:n&&h.A.fromJSON(n),timeExtent:o&&k.A.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,o.g)(this,(e=>{e(this.allSublayers),e(this.subtables)}))}serviceSupportsSpatialReference(e){return(0,R.D)(this,e)}async _fetchImage(e,t,r,i,o){const n={responseType:e,signal:o?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},d=this.parsedUrl.path+"/export";if(null!=n.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new a.A("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,s.A)(d,n);return{data:e,url:d}}catch(e){if((0,l.zf)(e))throw e;throw new a.A("mapimagelayer:image-fetch-error",`Unable to load image: ${d}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(null==e||!this.sublayersSourceJSON[e]?.visibleLayers)}};(0,i._)([(0,d.MZ)((0,V.P6)("dateFieldsTimeReference"))],$.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,d.MZ)({type:Boolean})],$.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,d.MZ)()],$.prototype,"dpi",void 0),(0,i._)([(0,d.MZ)()],$.prototype,"gdbVersion",void 0),(0,i._)([(0,d.MZ)()],$.prototype,"imageFormat",void 0),(0,i._)([(0,p.w)("imageFormat",["supportedImageFormatTypes"])],$.prototype,"readImageFormat",null),(0,i._)([(0,d.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],$.prototype,"imageMaxHeight",void 0),(0,i._)([(0,d.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],$.prototype,"imageMaxWidth",void 0),(0,i._)([(0,d.MZ)()],$.prototype,"imageTransparency",void 0),(0,i._)([(0,d.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],$.prototype,"isReference",void 0),(0,i._)([(0,d.MZ)({json:{read:!1,write:!1}})],$.prototype,"labelsVisible",void 0),(0,i._)([(0,d.MZ)({type:["ArcGISMapServiceLayer"]})],$.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.MZ)({json:{read:!1,write:!1}})],$.prototype,"popupEnabled",void 0),(0,i._)([(0,d.MZ)((0,V.P6)("preferredTimeReference"))],$.prototype,"preferredTimeZone",void 0),(0,i._)([(0,d.MZ)()],$.prototype,"sourceJSON",void 0),(0,i._)([(0,d.MZ)({json:{write:{ignoreOrigin:!0}}})],$.prototype,"sublayers",void 0),(0,i._)([(0,m.K)("sublayers",{layers:{type:[J.A]},visibleLayers:{type:[u.jz]}})],$.prototype,"writeSublayers",null),(0,i._)([(0,d.MZ)({type:["show","hide","hide-children"]})],$.prototype,"listMode",void 0),(0,i._)([(0,d.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],$.prototype,"type",void 0),(0,i._)([(0,d.MZ)(A.OZ)],$.prototype,"url",void 0),$=(0,i._)([(0,y.$)("esri.layers.MapImageLayer")],$);const C=$},82935:(e,t,r)=>{r.d(t,{B:()=>m,e:()=>c});var i=r(90237),s=r(10107),a=(r(44208),r(53966),r(87811),r(36005)),o=r(40608),n=r(89317),l=r(30524),d=r(96184),u=r(73133),p=r(79677),y=r(10184);const m={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:n.K}}},c=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const i=r.timeOffset,s=u.j.fromJSON(r.timeOffsetUnits);return i&&s?new y.A({value:i,unit:s}):null}set timeInfo(e){(0,l.sv)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,i._)([(0,s.MZ)({type:p.A,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,i._)([(0,s.MZ)({type:y.A})],t.prototype,"timeOffset",void 0),(0,i._)([(0,a.w)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,i._)([(0,s.MZ)({value:null,type:d.A,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,i._)([(0,s.MZ)(m)],t.prototype,"useViewTime",void 0),t=(0,i._)([(0,o.$)("esri.layers.mixins.TemporalLayer")],t),t}},96184:(e,t,r)=>{r.d(t,{A:()=>h});var i=r(90237),s=r(69540),a=r(25482),o=r(10107),n=(r(44208),r(53966),r(87811),r(36005)),l=r(40608),d=r(43937),u=r(79677),p=r(10184),y=r(56400);function m(e,t){return p.A.fromJSON({value:e,unit:t})}let c=class extends((0,s.O)(a.oY)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(e,t){return t.timeExtent&&Array.isArray(t.timeExtent)&&2===t.timeExtent.length?u.A.fromArray(t.timeExtent):null}writeFullTimeExtent(e,t){null!=e?.start&&null!=e.end?t.timeExtent=e.toArray():t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?m(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?m(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,i._)([(0,o.MZ)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],c.prototype,"cumulative",void 0),(0,i._)([(0,o.MZ)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],c.prototype,"endField",void 0),(0,i._)([(0,o.MZ)({type:u.A,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"fullTimeExtent",void 0),(0,i._)([(0,n.w)("fullTimeExtent",["timeExtent"])],c.prototype,"readFullTimeExtent",null),(0,i._)([(0,d.K)("fullTimeExtent")],c.prototype,"writeFullTimeExtent",null),(0,i._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],c.prototype,"hasLiveData",void 0),(0,i._)([(0,o.MZ)({type:p.A,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"interval",void 0),(0,i._)([(0,n.w)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],c.prototype,"readInterval",null),(0,i._)([(0,d.K)("interval")],c.prototype,"writeInterval",null),(0,i._)([(0,o.MZ)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],c.prototype,"startField",void 0),(0,i._)([(0,o.MZ)((0,y.P6)("timeReference",!0))],c.prototype,"timeZone",void 0),(0,i._)([(0,o.MZ)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"trackIdField",void 0),(0,i._)([(0,o.MZ)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],c.prototype,"useTime",void 0),(0,i._)([(0,o.MZ)({type:[Date],json:{read:!1}})],c.prototype,"stops",void 0),c=(0,i._)([(0,l.$)("esri.layers.support.TimeInfo")],c);const h=c},91908:(e,t,r)=>{r.d(t,{D:()=>a});var i=r(60694);const s=[];function a(e,t){if((0,i.Wo)(e.url??""))return!0;const{wkid:r}=t;for(const t of s){if((e.version??0)>=t[0])return!0;if("function"==typeof t[1]&&(t[1]=t[1]()),t[1].has(r))return!1}return!0}s.push([10.91,()=>{const e=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)e.add(t);for(let t=9748;t<=9749;t++)e.add(t);for(let t=20904;t<=20932;t++)e.add(t);for(let t=21004;t<=21032;t++)e.add(t);for(let t=21207;t<=21264;t++)e.add(t);for(let t=21307;t<=21364;t++)e.add(t);for(let t=23301;t<=23333;t++)e.add(t);for(let t=102759;t<=102760;t++)e.add(t);for(let t=102934;t<=102955;t++)e.add(t);return e}]),s.push([10.9,()=>{const e=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)e.add(t);for(let t=9404;t<=9407;t++)e.add(t);for(let t=9476;t<=9482;t++)e.add(t);for(let t=9487;t<=9494;t++)e.add(t);for(let t=9697;t<=9699;t++)e.add(t);return e}]),s.push([10.81,()=>{const e=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)e.add(t);for(let t=9271;t<=9273;t++)e.add(t);for(let t=9284;t<=9285;t++)e.add(t);for(let t=21453;t<=21463;t++)e.add(t);return e}]),s.push([10.8,()=>{const e=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)e.add(t);for(let t=8455;t<=8456;t++)e.add(t);for(let t=8518;t<=8529;t++)e.add(t);for(let t=8533;t<=8536;t++)e.add(t);for(let t=8538;t<=8540;t++)e.add(t);for(let t=8677;t<=8679;t++)e.add(t);for(let t=8902;t<=8903;t++)e.add(t);for(let t=8907;t<=8910;t++)e.add(t);for(let t=8949;t<=8951;t++)e.add(t);for(let t=8972;t<=8987;t++)e.add(t);for(let t=9039;t<=9040;t++)e.add(t);for(let t=9068;t<=9069;t++)e.add(t);for(let t=9140;t<=9141;t++)e.add(t);for(let t=9148;t<=9150;t++)e.add(t);for(let t=9153;t<=9159;t++)e.add(t);for(let t=9205;t<=9218;t++)e.add(t);for(let t=9221;t<=9222;t++)e.add(t);for(let t=54098;t<=54101;t++)e.add(t);return e}]),s.push([10.71,()=>{const e=new Set([6316]);for(let t=8351;t<=8353;t++)e.add(t);for(let t=9294;t<=9297;t++)e.add(t);for(let t=22619;t<=22621;t++)e.add(t);for(let t=103586;t<=103594;t++)e.add(t);return e}])},73133:(e,t,r)=>{r.d(t,{j:()=>i});const i=(0,r(66552).O)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})},10184:(e,t,r)=>{r.d(t,{A:()=>y});var i=r(90237),s=r(69540),a=r(25482),o=r(88930),n=r(10107),l=(r(44208),r(53966),r(87811),r(93223)),d=r(40608),u=r(73133);let p=class extends((0,s.O)(a.oY)){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return(0,o.t)(this.value,this.unit,"milliseconds")}};(0,i._)([(0,l.e)(u.j,{nonNullable:!0})],p.prototype,"unit",void 0),(0,i._)([(0,n.MZ)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),p=(0,i._)([(0,d.$)("esri.time.TimeInterval")],p);const y=p}}]);