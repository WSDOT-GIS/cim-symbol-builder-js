"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2938,2515],{35270:(e,t,r)=>{r.d(t,{h$:()=>a,VL:()=>o,rW:()=>l,B7:()=>n});const i={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function a(e){var t;return null!=(t=i[e.toLowerCase()])?t:null}function o(e){const t=a(e);return t?[...t]:t}function s(e,t,r){r<0&&++r,r>1&&--r;const i=6*r;return i<1?e+(t-e)*i:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function n(e,t,r,i=1){const a=(e%360+360)%360/360,o=r<=.5?r*(t+1):r+t-r*t,n=2*r-o;return[Math.round(255*s(n,o,a+1/3)),Math.round(255*s(n,o,a)),Math.round(255*s(n,o,a-1/3)),i]}function l(e){const t=e.length>5,r=t?8:4,i=(1<<r)-1,a=t?1:17,o=t?9===e.length:5===e.length;let s=Number("0x"+e.substr(1));if(isNaN(s))return null;const n=[0,0,0,1];let l;return o&&(l=s&i,s>>=r,n[3]=a*l/255),l=s&i,s>>=r,n[2]=a*l,l=s&i,s>>=r,n[1]=a*l,l=s&i,s>>=r,n[0]=a*l,n}},66643:(e,t,r)=>{r.d(t,{Ed:()=>o,UI:()=>s,q6:()=>n,mt:()=>l});var i=r(70586),a=r(95330);function o(e,t,r){return(0,a.as)(e.map(((e,i)=>t.apply(r,[e,i]))))}function s(e,t,r){return(0,a.as)(e.map(((e,i)=>t.apply(r,[e,i])))).then((e=>e.map((e=>e.value))))}function n(e){return(0,i.Wi)(e)?(0,a.DB)():e.then((e=>({ok:!0,value:e}))).catch((e=>({ok:!1,error:e})))}function l(e){return e.then((e=>({ok:!0,value:e}))).catch((e=>((0,a.r9)(e),{ok:!1,error:e})))}},68668:(e,t,r)=>{r.d(t,{GZ:()=>n,wF:()=>l});var i=r(66643),a=r(81049),o=r(83379),s=r(70586);async function n(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],n=(...e)=>{for(const t of e)(0,s.Wi)(t)||(Array.isArray(t)?n(...t):a.Z.isCollection(t)?t.forEach((e=>n(e))):o.Z.isLoadable(t)&&r.push(t))};t(n);let l=null;if(await(0,i.UI)(r,(async e=>{!1!==(await(0,i.q6)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())).ok||l||(l=e)})),l)throw l.loadError;return e}},75823:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var i=r(43697),a=r(3172),o=r(92835),s=r(20102),n=r(3920),l=r(68668),p=r(70586),c=r(16453),u=r(95330),d=r(5600),h=(r(67676),r(80442),r(75215)),y=r(71715),m=r(52011),g=r(30556),b=r(31263),f=r(6570),v=r(91040),w=r(29600),k=r(54295),x=r(7944),C=r(17287),S=r(41522),_=r(17017),O=r(38009),I=r(16859),P=r(34760),q=r(72965),L=r(10343),N=r(28294),U=r(21506),R=r(15923),T=r(32073),j=r(410);const F={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let D=class extends((0,n.p)(R.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,j.ff)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,T.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(F[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null==(e=this.floors)||!e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,t)=>{const r=(0,j.ff)(this.floors,t),i=(0,p.pC)(r)?(0,j.Hp)(r,t):t.definitionExpression;return e[t.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const i=this.scale,a=0===i,o=0===t.minScale||i<=t.minScale,s=0===t.maxScale||i>=t.maxScale;t.visible&&(a||o&&s)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,d.Cb)({readOnly:!0})],D.prototype,"dynamicLayers",null),(0,i._)([(0,d.Cb)()],D.prototype,"floors",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],D.prototype,"hasDynamicLayers",null),(0,i._)([(0,d.Cb)()],D.prototype,"layer",null),(0,i._)([(0,d.Cb)({readOnly:!0})],D.prototype,"layers",null),(0,i._)([(0,d.Cb)({readOnly:!0})],D.prototype,"layerDefs",null),(0,i._)([(0,d.Cb)({type:Number})],D.prototype,"scale",void 0),(0,i._)([(0,d.Cb)(U.qG)],D.prototype,"timeExtent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],D.prototype,"version",null),(0,i._)([(0,d.Cb)({readOnly:!0})],D.prototype,"visibleSublayers",null),D=(0,i._)([(0,m.j)("esri.layers.mixins.ExportImageParameters")],D);var J=r(49867);let E=class extends((0,S.h)((0,N.n)((0,q.M)((0,L.x)((0,x.O)((0,C.Y)((0,O.q)((0,I.I)((0,c.R)((0,P.Q)((0,k.V)((0,_.N)((0,n.p)(w.Z)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,p.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,b.M9)(i.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;o=(0,T.QV)(a,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");o=(0,T.QV)(a,e.sublayers,(0,b.M9)(e.origin))}}const s=[],n={writeSublayerStructure:o,...i};let l=o;a.forEach((e=>{const t=e.write({},n);s.push(t),l=l||"user"===e.originOf("visible")})),s.some((e=>Object.keys(e).length>1))&&(t.layers=s),l&&(t.visibleLayers=a.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const a=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const o=new D({layer:this,floors:null==i?void 0:i.floors,scale:(0,v.yZ)({extent:e,width:t})*a}),s=o.toJSON();o.destroy();const n=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,p=l.wkid||JSON.stringify(l.toJSON());s.dpi*=a;const c={};if(null!=i&&i.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();c.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...s,...n,...c}}async fetchImage(e,t,r,i){var o;const n={responseType:"image",signal:null!=(o=null==i?void 0:i.signal)?o:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";return null==n.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(0,a.default)(l,n).then((e=>e.data)).catch((e=>{if((0,u.D_)(e))throw e;throw new s.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})})):Promise.reject(new s.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,a.default)(this.url,t),{extent:i,fullExtent:s,timeExtent:n}=r,l=i||s;return{fullExtent:l&&f.Z.fromJSON(l),timeExtent:n&&o.Z.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,l.GZ)(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,a.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,d.Cb)({type:Boolean})],E.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"dpi",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"gdbVersion",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"imageFormat",void 0),(0,i._)([(0,y.r)("imageFormat",["supportedImageFormatTypes"])],E.prototype,"readImageFormat",null),(0,i._)([(0,d.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],E.prototype,"imageMaxHeight",void 0),(0,i._)([(0,d.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],E.prototype,"imageMaxWidth",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"imageTransparency",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],E.prototype,"isReference",void 0),(0,i._)([(0,d.Cb)({json:{read:!1,write:!1}})],E.prototype,"labelsVisible",void 0),(0,i._)([(0,d.Cb)({type:["ArcGISMapServiceLayer"]})],E.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.Cb)({json:{read:!1,write:!1}})],E.prototype,"popupEnabled",void 0),(0,i._)([(0,d.Cb)()],E.prototype,"sourceJSON",void 0),(0,i._)([(0,d.Cb)({json:{write:{ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),(0,i._)([(0,g.c)("sublayers",{layers:{type:[J.Z]},visibleLayers:{type:[h.z8]}})],E.prototype,"writeSublayers",null),(0,i._)([(0,d.Cb)({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],E.prototype,"type",void 0),(0,i._)([(0,d.Cb)(U.HQ)],E.prototype,"url",void 0),E=(0,i._)([(0,m.j)("esri.layers.MapImageLayer")],E);const M=E},15235:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var i=r(43697),a=r(99880),o=r(20102),s=r(10736),n=r(22974),l=r(83379),p=r(70586),c=r(17452),u=r(5600),d=r(75215),h=r(71715),y=r(52011),m=r(6570),g=r(65587),b=r(15923),f=r(92604),v=(r(67676),r(80442),r(90578));const w=f.Z.getLogger("esri.portal.PortalItemResource");let k=class extends b.Z{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this.normalizePath(e.path,e.portalItem)}:e}set path(e){(0,p.pC)(e)&&(0,c.YP)(e)?w.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this.normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const r=this.url;if((0,p.Wi)(r))throw new o.Z("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(r,{responseType:e,query:{token:this.portalItem.apiKey},signal:(0,p.U2)(t,"signal")})}async update(e,t){return(await r.e(7873).then(r.bind(r,97873))).addOrUpdateResource(this,"update",e,t)}hasPath(){return(0,p.pC)(this.path)}normalizePath(e,t){return(0,p.Wi)(e)?e:(e=e.replace(/^\/+/,""),(0,p.pC)(t)&&(0,c.YP)(e)&&(e=(0,c.PF)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};(0,i._)([(0,u.Cb)()],k.prototype,"portalItem",void 0),(0,i._)([(0,u.Cb)({type:String,value:null})],k.prototype,"path",null),(0,i._)([(0,v.p)("path")],k.prototype,"_castPath",null),(0,i._)([(0,u.Cb)({type:String,readOnly:!0})],k.prototype,"url",null),(0,i._)([(0,u.Cb)({type:String,readOnly:!0})],k.prototype,"itemRelativeUrl",null),k=(0,i._)([(0,y.j)("esri.portal.PortalItemResource")],k);const x=k;let C=class extends b.Z{constructor(e){super(e),this.created=null,this.rating=null}};(0,i._)([(0,u.Cb)()],C.prototype,"created",void 0),(0,i._)([(0,u.Cb)()],C.prototype,"rating",void 0),C=(0,i._)([(0,y.j)("esri.portal.PortalRating")],C);const S=C;var _;let O=_=class extends((0,s.eC)(l.Z)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return(0,d.TJ)(_,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let r=e;return"Feature Service"===e||"Feature Collection"===e?r=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?r=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e?r="Tile Package (tpkx)":"OGCFeatureServer"===e&&(r="OGC Feature Layer"),r}readExtent(e){return e&&e.length?new m.Z(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[];let r,i=!1,o=!1,s=!1,n=!1,l=!1,p=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(i=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(o=t.indexOf("Table")>-1,s=t.indexOf("Route Layer")>-1,n=t.indexOf("Markup")>-1,l=-1!==t.indexOf("Spatiotemporal"),p=-1!==t.indexOf("UtilityNetwork"),r=l&&o?"spatiotemporaltable":o?"table":s?"routelayer":n?"markup":l?"spatiotemporal":i?"featureshosted":p?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?i||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":t.indexOf("Voxel")>-1?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"maps",r?(0,a.V)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=g.Z.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:(0,p.pC)(e)?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}};return e instanceof S&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new S({rating:e,created:new Date})))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:(0,n.d9)(this.applicationProxies),avgRating:this.avgRating,categories:(0,n.d9)(this.categories),created:(0,n.d9)(this.created),culture:this.culture,description:this.description,extent:(0,n.d9)(this.extent),groupCategories:(0,n.d9)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:(0,n.d9)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:(0,n.d9)(this.screenshots),size:this.size,snippet:this.snippet,tags:(0,n.d9)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,n.d9)(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new _({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then((e=>null!=e.rating?(e.created=new Date(e.created),new S(e)):null))}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},_)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,r={method:"post"};r.query=this.createPostQuery();for(const e in r.query)null===r.query[e]&&(r.query[e]="");return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,r).then((()=>this.reload()))})):Promise.reject(new o.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,r=e.filename,i={method:"post"};if("string"==typeof t)(0,c.HK)(t)?i.query={data:t}:i.query={url:(0,c.hF)(t)},(0,p.pC)(r)&&(i.query.filename=r);else{const e=new FormData;(0,p.pC)(r)?e.append("file",t,r):e.append("file",t),i.body=e}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,i).then((()=>this.reload()))})):Promise.reject(new o.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await r.e(7873).then(r.bind(r,97873))).fetchResources(this,e,t)}async addResource(e,t,i){const a=await r.e(7873).then(r.bind(r,97873));return e.portalItem=this,a.addOrUpdateResource(e,"add",t,i)}async removeResource(e,t){const i=await r.e(7873).then(r.bind(r,97873));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new o.Z("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return i.removeResource(this,e,t)}async removeAllResources(e){return(await r.e(7873).then(r.bind(r,97873))).removeAllResources(this,e)}resourceFromPath(e){return new x({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return(0,n.yd)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new _({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};(0,i._)([(0,u.Cb)({type:["private","shared","org","public"]})],O.prototype,"access",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"accessInformation",void 0),(0,i._)([(0,u.Cb)({type:String})],O.prototype,"apiKey",void 0),(0,i._)([(0,u.Cb)({json:{read:{source:"appProxies"}}})],O.prototype,"applicationProxies",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"avgRating",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"categories",void 0),(0,i._)([(0,u.Cb)({type:Date})],O.prototype,"created",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"culture",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"description",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],O.prototype,"displayName",null),(0,i._)([(0,u.Cb)({type:m.Z})],O.prototype,"extent",void 0),(0,i._)([(0,h.r)("extent")],O.prototype,"readExtent",null),(0,i._)([(0,u.Cb)()],O.prototype,"groupCategories",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],O.prototype,"iconUrl",null),(0,i._)([(0,u.Cb)()],O.prototype,"id",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],O.prototype,"isLayer",null),(0,i._)([(0,u.Cb)()],O.prototype,"itemControl",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],O.prototype,"itemUrl",null),(0,i._)([(0,u.Cb)()],O.prototype,"licenseInfo",void 0),(0,i._)([(0,u.Cb)({type:Date})],O.prototype,"modified",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"name",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"numComments",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"numRatings",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"numViews",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"owner",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"ownerFolder",void 0),(0,i._)([(0,u.Cb)({type:g.Z})],O.prototype,"portal",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"screenshots",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"size",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"snippet",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"sourceJSON",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"tags",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"thumbnail",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],O.prototype,"thumbnailUrl",null),(0,i._)([(0,u.Cb)()],O.prototype,"title",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"type",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"typeKeywords",void 0),(0,i._)([(0,u.Cb)()],O.prototype,"url",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],O.prototype,"userItemUrl",null),O=_=(0,i._)([(0,y.j)("esri.portal.PortalItem")],O);const I=O}}]);