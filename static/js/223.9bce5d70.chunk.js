(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[223],{831:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Z}));var i,a=r(0),o=(r(57),r(184)),n=(r(272),r(326),r(328),r(329),r(95),r(249)),s=r(248),l=r(363),p=r(253),c=r(44),b=r(45),d=r(9),y=r(12),u=r(2),j=r(354),O=r(13),h=r(1),m=(r(8),r(5),r(4)),f=r(17),v=r(3),g=r(114),w=r(168),I=r(217),S=r(369),x=r(361),T=r(374),R=r(388),F=r(357),k=r(356),P=r(366),D=r(358),N=r(376),E=r(94),L=r(390),_=r(379),J=r(41),U=r(223),A=r(334),C=r(10);let G=i=class extends C.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};Object(a.a)([Object(h.b)({type:Number,json:{write:!0}})],G.prototype,"age",void 0),Object(a.a)([Object(h.b)({type:Number,json:{write:!0}})],G.prototype,"ageReceived",void 0),Object(a.a)([Object(h.b)({type:Number,json:{write:!0}})],G.prototype,"displayCount",void 0),Object(a.a)([Object(h.b)({type:Number,json:{write:!0}})],G.prototype,"maxObservations",void 0),G=i=Object(a.a)([Object(v.a)("esri.layers.support.PurgeOptions")],G);const V=G;var q=r(382),z=r(68),W=r(371),M=r(394),Q=r(27),B=r(34);const H=y.a.getLogger("esri.layers.StreamLayer"),K=Object(_.a)();let X=class extends(Object(R.a)(Object(x.a)(Object(N.a)(Object(D.a)(Object(P.a)(Object(S.a)(Object(F.a)(Object(k.a)(Object(j.a)(Object(T.a)(I.a))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new V,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=Q.a.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d.a("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=Object(u.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(O.t).then(()=>this._fetchService(t))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){Object(J.k)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=Object(l.b)(i,t,r)||void 0;return e||H.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new s.a({defaultSymbol:Y(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map(e=>({id:e.id,symbol:Y(e.symbol,e,r)}))}):new n.a({symbol:Y(t.defaultSymbol,t,r)})}createPopupTemplate(e){return Object(W.a)(this,e)}createQuery(){const e=new z.a;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some(t=>(t.name===e&&(r=t.domain),!!r)),r}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(null==(r=this.timeInfo)||!r.trackIdField)throw new d.a("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new d.a("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new d.a("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new d.a("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await Object(c.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),Object(J.k)(this.renderer,this.fieldsIndex),Object(J.l)(this.timeInfo,this.fieldsIndex),Object(q.a)(this,{origin:"service"})}};Object(a.a)([Object(h.b)({type:String})],X.prototype,"copyright",void 0),Object(a.a)([Object(h.b)({readOnly:!0})],X.prototype,"defaultPopupTemplate",null),Object(a.a)([Object(h.b)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],X.prototype,"definitionExpression",void 0),Object(a.a)([Object(h.b)({type:String})],X.prototype,"displayField",void 0),Object(a.a)([Object(h.b)({type:M.a})],X.prototype,"elevationInfo",void 0),Object(a.a)([Object(h.b)(L.a)],X.prototype,"featureReduction",void 0),Object(a.a)([Object(h.b)(K.fields)],X.prototype,"fields",void 0),Object(a.a)([Object(h.b)(K.fieldsIndex)],X.prototype,"fieldsIndex",void 0),Object(a.a)([Object(h.b)({type:B.a})],X.prototype,"geometryDefinition",void 0),Object(a.a)([Object(h.b)({type:w.a.apiValues,json:{read:{reader:w.a.read}}})],X.prototype,"geometryType",void 0),Object(a.a)([Object(h.b)(E.d)],X.prototype,"labelsVisible",void 0),Object(a.a)([Object(h.b)({type:[U.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:A.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],X.prototype,"labelingInfo",void 0),Object(a.a)([Object(h.b)(E.e)],X.prototype,"legendEnabled",void 0),Object(a.a)([Object(h.b)({type:["show","hide"]})],X.prototype,"listMode",void 0),Object(a.a)([Object(h.b)({type:m.a})],X.prototype,"maxReconnectionAttempts",void 0),Object(a.a)([Object(h.b)({type:m.a})],X.prototype,"maxReconnectionInterval",void 0),Object(a.a)([Object(h.b)(E.f)],X.prototype,"maxScale",void 0),Object(a.a)([Object(h.b)(E.g)],X.prototype,"minScale",void 0),Object(a.a)([Object(h.b)({type:String})],X.prototype,"objectIdField",void 0),Object(a.a)([Object(h.b)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],X.prototype,"operationalLayerType",void 0),Object(a.a)([Object(h.b)(E.j)],X.prototype,"popupEnabled",void 0),Object(a.a)([Object(h.b)({type:o.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],X.prototype,"popupTemplate",void 0),Object(a.a)([Object(h.b)({type:V})],X.prototype,"purgeOptions",void 0),Object(a.a)([Object(h.b)({types:p.a,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:p.b,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],X.prototype,"renderer",null),Object(a.a)([Object(f.a)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),Object(f.a)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],X.prototype,"readRenderer",null),Object(a.a)([Object(h.b)(E.m)],X.prototype,"screenSizePerspectiveEnabled",void 0),Object(a.a)([Object(h.b)({type:Q.a,json:{origins:{service:{read:{source:"spatialReference"}}}}})],X.prototype,"spatialReference",void 0),Object(a.a)([Object(h.b)({json:{read:!1}})],X.prototype,"type",void 0),Object(a.a)([Object(h.b)(E.n)],X.prototype,"url",void 0),Object(a.a)([Object(h.b)({type:Number})],X.prototype,"updateInterval",void 0),Object(a.a)([Object(h.b)({type:String})],X.prototype,"webSocketUrl",void 0),X=Object(a.a)([Object(v.a)("esri.layers.StreamLayer")],X);const Y=Object(g.b)({types:b.i}),Z=X}}]);
//# sourceMappingURL=223.9bce5d70.chunk.js.map