"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7558],{61247:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(43697),l=i(18855),s=i(81049),n=i(70586),o=i(5600),a=i(52525);let c=class extends l.Z{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0;return this._groups.forEach((t=>{e+=t.length})),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!s.Z.isCollection(e))return this;const i=this._getOrCreateGroup(t);return Array.isArray(e)||s.Z.isCollection(e)?e.forEach((e=>this._isHandle(e)&&i.push(e))):i.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach((t=>t.forEach(e)));else{const i=this._getGroup(e);i&&t&&i.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||s.Z.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;const t=this._getGroup(e);for(let e=0;e<t.length;e++)t[e].remove();return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((e=>{for(let t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return(0,n.j0)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}};(0,r._)([(0,o.Cb)({readOnly:!0})],c.prototype,"size",null),c=(0,r._)([(0,a.j)("esri.core.Handles")],c);var h=c},43050:(e,t,i)=>{i.d(t,{S1:()=>n,on:()=>u,OY:()=>h,cm:()=>a,N1:()=>o,LR:()=>c,tH:()=>p});var r=i(91460),l=(i(22974),i(95330));const s=/\?(\.|$)/g;function n(e,t,i,r){const l=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],n=function(e,t,i,r){return e.watch(t,i,r)}(e,t,i,r);for(const t of l){const r=t.trim().replace(s,"$1"),l=e.get(r);i.call(e,l,l,r,e)}return n}function o(e,t,i,r){return p(e,t,f,i,r)}function a(e,t,i,r){return p(e,t,m,i,r)}function c(e,t,i,r){return p(e,t,v,i,r)}function h(e,t,i,r){return p(e,t,d,i,r)}function u(e,t,i,l,s,o,a){const c={};function h(t){const r=c[t];r&&(o&&o(r.target,t,e,i),r.handle.remove(),delete c[t])}const u=n(e,t,((t,n,o)=>{h(o),(0,r.vT)(t)&&(c[o]={handle:(0,r.on)(t,i,l),target:t},s&&s(t,o,e,i))}),a);return{remove(){u.remove();for(const e in c)h(e)}}}function p(e,t,i,r,s){const n="function"==typeof r?r:null,o="object"==typeof r?r:null;"boolean"==typeof r&&(s=r);let a,c=!1;function h(){a&&(a.remove(),a=null)}const u=(0,l.dD)();(0,l.fu)(o,(()=>{h(),u.reject((0,l.zE)())}));const p={then:u.promise.then.bind(u.promise),catch:u.promise.catch.bind(u.promise),remove:h};return Object.freeze(p),a=function(e,t,i,r,l){const s=e.watch(t,((t,l,s,n)=>{i&&!i(t)||null==r||r.call(e,t,l,s,n)}),l);if(Array.isArray(t))for(const l of t){const s=e.get(l);i&&i(s)&&(null==r||r.call(e,s,s,t,e))}else{const l=e.get(t);i&&i(l)&&(null==r||r.call(e,l,l,t,e))}return s}(e,t,i,((t,i,r,l)=>{c=!0,h(),n&&n.call(e,t,i,r,l),u.resolve({value:t,oldValue:i,propertyName:r,target:l})}),s),c&&h(),p}function f(e){return!!e}function m(e){return!e}function v(e){return!0===e}function d(e){return!1===e}},39450:(e,t,i)=>{i.d(t,{Z:()=>h});var r,l=i(43697),s=i(10736),n=i(5600),o=(i(80442),i(75215)),a=(i(92604),i(52525));let c=r=class extends s.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new r({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,l._)([(0,n.Cb)({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"cols",void 0),(0,l._)([(0,n.Cb)({type:o.z8,json:{write:!0}})],c.prototype,"level",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"rows",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=r=(0,l._)([(0,a.j)("esri.layers.support.LOD")],c);var h=c},11145:(e,t,i)=>{i.d(t,{Z:()=>S});var r,l=i(43697),s=i(35454),n=i(10736),o=i(70586),a=i(67900),c=i(5600),h=(i(80442),i(75215)),u=(i(92604),i(71715)),p=i(52525),f=i(30556),m=i(13473),v=i(82971),d=i(24470),y=i(8744),g=i(40488),_=i(39450);const w=new s.Xn({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let b=r=class extends n.wq{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={}){const{resolutionFactor:t=1,scales:i,size:l=256,spatialReference:s=v.Z.WebMercator,numLODs:n=24}=e;if(!(0,y.JY)(s)){const e=[];if(i)for(let t=0;t<i.length;t++){const r=i[t];e.push({level:t,scale:r,resolution:r})}else{let t=5e-4;for(let i=n-1;i>=0;i--)e.unshift({level:i,scale:t,resolution:t}),t*=2}return new r({dpi:96,lods:e,origin:new m.Z(0,0,s),size:[l,l],spatialReference:s})}const o=(0,y.C5)(s),c=e.origin?new m.Z({x:e.origin.x,y:e.origin.y,spatialReference:s}):new m.Z(o?{x:o.origin[0],y:o.origin[1],spatialReference:s}:{x:0,y:0,spatialReference:s}),h=1/(39.37*(0,a.c9)(s)*96),u=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],r=t*h;u.push({level:e,scale:t,resolution:r})}else{let e=(0,y.sT)(s)?512/l*591657527.5917094:256/l*591657527.591555;const i=Math.ceil(n/t);u.push({level:0,scale:e,resolution:e*h});for(let r=1;r<i;r++){const i=e/2**t,l=i*h;u.push({level:r,scale:i,resolution:l}),e=i}}return new r({dpi:96,lods:u,origin:c,size:[l,l],spatialReference:s})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=(0,y.C5)(e);return e.isWrappable&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return m.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const r=[];this._levelToLOD={},e&&(t=-1/0,i=1/0,e.forEach((e=>{r.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,this._levelToLOD[e.level]=e}))),this._set("scales",r),this._set("minScale",t),this._set("maxScale",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];{const i=Math.floor(e),r=i+1;return t[i]/(t[i]/t[r])**(e-i)}}scaleToZoom(e){const t=this.scales,i=t.length-1;let r=0;for(;r<i;r++){const i=t[r],l=t[r+1];if(i<=e)return r;if(l===e)return r+1;if(i>e&&l<e)return r+Math.log(i/e)/Math.log(i/l)}return r}snapScale(e,t=.95){const i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))}tileAt(e,t,i,r){const l=this.lodAt(e);if(!l)return null;let s,n;if("number"==typeof t)s=t,n=i;else if((0,y.fS)(t.spatialReference,this.spatialReference))s=t.x,n=t.y,r=i;else{const e=(0,g.iV)(t,this.spatialReference);if((0,o.Wi)(e))return null;s=e.x,n=e.y,r=i}const a=l.resolution*this.size[0],c=l.resolution*this.size[1];return r||(r={id:null,level:0,row:0,col:0,extent:(0,d.Ue)()}),r.level=e,r.row=Math.floor((this.origin.y-n)/c+.001),r.col=Math.floor((s-this.origin.x)/a+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=0){let i=this.lodAt(e.level);if(!i&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const r=e.level-i.level,l=i.resolution*this.size[0]/2**r,s=i.resolution*this.size[1]/2**r;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,d.Ue)()),e.extent[0]=this.origin.x+e.col*l,e.extent[1]=this.origin.y-(e.row+1)*s,e.extent[2]=e.extent[0]+l,e.extent[3]=e.extent[1]+s}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:i}=this.lodAt(t.level),r=i*this.size[0],l=i*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*l,e[2]=e[0]+r,e[3]=e[1]+l,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return r.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const r=e[i];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}}};(0,l._)([(0,c.Cb)({type:Number,json:{write:!0}})],b.prototype,"compressionQuality",void 0),(0,l._)([(0,c.Cb)({type:Number,json:{write:!0}})],b.prototype,"dpi",void 0),(0,l._)([(0,c.Cb)({type:String,json:{read:w.read,write:w.write,origins:{"web-scene":{read:!1,write:!1}}}})],b.prototype,"format",void 0),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"isWrappable",null),(0,l._)([(0,c.Cb)({type:m.Z,json:{write:!0}})],b.prototype,"origin",void 0),(0,l._)([(0,u.r)("origin")],b.prototype,"readOrigin",null),(0,l._)([(0,c.Cb)({type:[_.Z],value:null,json:{write:!0}})],b.prototype,"lods",null),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"minScale",void 0),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"maxScale",void 0),(0,l._)([(0,c.Cb)({readOnly:!0})],b.prototype,"scales",void 0),(0,l._)([(0,c.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],b.prototype,"size",void 0),(0,l._)([(0,u.r)("size",["rows","cols"])],b.prototype,"readSize",null),(0,l._)([(0,f.c)("size",{cols:{type:h.z8},rows:{type:h.z8}})],b.prototype,"writeSize",null),(0,l._)([(0,c.Cb)({type:v.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),b=r=(0,l._)([(0,p.j)("esri.layers.support.TileInfo")],b);var S=b},56608:(e,t,i)=>{i.d(t,{y:()=>z});var r,l=i(43697),s=i(3172),n=i(18855),o=i(20102),a=i(61247),c=i(92604),h=i(13867),u=i(44553),p=i(95330),f=i(90584),m=i(17452),v=i(43050),d=i(5600),y=(i(80442),i(90578)),g=i(52525),_=i(67676),w=i(22974);class b{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,l=i>>3,s=this._tileAvailabilityBitSet;return l<0||l>s.length?"unknown":s[l]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,l=!0;const s=Math.ceil(t*i/8),n=new Uint8Array(s);let o=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(l=!1,n[o]|=1<<i):r=!1,7===i&&++o}l?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(e,t){const i=e.service.request||s.default,{row:r,col:l,width:n,height:a}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:n,height:a},valid:!0,data:(0,_.a9)(n*a,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==l||e.location.width!==n||e.location.height!==a))throw new o.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:l,width:n,height:a}});return b.fromJSON(e)}))}static fromJSON(e){b.validateJSON(e);const t=new b;return t.location=Object.freeze((0,w.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new o.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function S(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const C=c.Z.getLogger("esri.layers.support.TilemapCache");let z=r=class extends n.Z{constructor(e){super(e),this._handles=new a.Z,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=s.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new h.Z(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(()=>this._initializeTilemapDefinition())),(0,v.S1)(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(C.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,l);if(s)return Promise.resolve(s);const n=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,p.fu)(n,(()=>t((0,p.zE)())));const i=S(l);let s=this._pendingTilemapRequests[i];if(!s){s=b.fromDefinition(l,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,r){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;for(l.updateTileInfo(r);;){const e=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==e)return e;if(!l.upsampleTile(r))return"unavailable"}}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof b){const l=r.getAvailability(t,i);return"unavailable"===l?Promise.reject(new o.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):l}if((0,p.D_)(r))throw r;return"unknown"})):Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const s=this.layer.tileInfo;s.updateTileInfo(r);const n=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,p.D_)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,s,n){if(!this._prefetchingEnabled)return;const o=`prefetch-${e}`;if(this._handles.has(o))return;const a=(0,p.yi)();n.then((()=>a.abort()),(()=>a.abort()));let c=!1;const h={remove(){c||(c=!0,a.abort())}};if(this._handles.add(h,o),await(0,f.MU)(10,a.signal).catch((()=>{})),c||(c=!0,this._handles.remove(o)),(0,p.Hc)(a))return;const u={id:e,level:t,row:i,col:l},m={...s,signal:a.signal},v=this.layer.tileInfo;for(let e=0;r._prefetches.length<r._maxPrefetch&&v.upsampleTile(u);++e){const e=this.fetchAvailability(u.level,u.row,u.col,m);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?(0,m.B7)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=S(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};z._maxPrefetch=4,z._prefetches=new u.Z({initialSize:r._maxPrefetch}),(0,l._)([(0,d.Cb)({constructOnly:!0,type:Number})],z.prototype,"levels",void 0),(0,l._)([(0,y.p)("levels")],z.prototype,"castLevels",null),(0,l._)([(0,d.Cb)({readOnly:!0,type:Number})],z.prototype,"size",null),(0,l._)([(0,d.Cb)({constructOnly:!0,type:Number})],z.prototype,"cacheByteSize",void 0),(0,l._)([(0,d.Cb)({constructOnly:!0})],z.prototype,"layer",void 0),(0,l._)([(0,d.Cb)({constructOnly:!0})],z.prototype,"request",void 0),z=r=(0,l._)([(0,g.j)("esri.layers.support.TilemapCache")],z)},66677:(e,t,i)=>{i.d(t,{ld:()=>m,B5:()=>u,M8:()=>d,G:()=>w,Qc:()=>p,DR:()=>f,Nm:()=>y,XG:()=>g,a7:()=>v,wH:()=>_});var r=i(70586),l=i(17452),s=i(25929);const n={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},o=Object.values(n),a=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),h=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function u(e){return!!a.test(e)}function p(e){const t=(0,l.mN)(e),i=t.path.match(a)||t.path.match(c);if(!i)return null;const[,r,s,o,h]=i,u=s.indexOf("/");return{title:m(-1!==u?s.slice(u+1):s),serverType:n[o.toLowerCase()],sublayer:null!=h&&""!==h?parseInt(h,10):null,url:{path:r}}}function f(e){const t=(0,l.mN)(e).path.match(h);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function m(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function v(e,t){const i=[];if(e){const t=p(e);(0,r.pC)(t)&&t.title&&i.push(t.title)}if(t){const e=m(t);i.push(e)}if(2===i.length){if(-1!==i[0].toLowerCase().indexOf(i[1].toLowerCase()))return i[0];if(-1!==i[1].toLowerCase().indexOf(i[0].toLowerCase()))return i[1]}return i.join(" - ")}function d(e){if(!e)return!1;const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),i=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&i}function y(e,t){return e?(0,l.Qj)((0,l.Hu)(e,t)):e}function g(e){let{url:t}=e;if(!t)return{url:t};t=(0,l.Hu)(t,e.logger);const i=(0,l.mN)(t),s=p(i.path);let n;if((0,r.pC)(s))null!=s.sublayer&&null==e.layer.layerId&&(n=s.sublayer),t=s.url.path;else if(e.nonStandardUrlAllowed){const e=f(i.path);(0,r.pC)(e)&&(t=e.serviceUrl,n=e.sublayerId)}return{url:(0,l.Qj)(t),layerId:n}}function _(e,t,i,r,n){(0,s.w)(t,r,"url",n),r.url&&null!=e.layerId&&(r.url=(0,l.v_)(r.url,i,e.layerId.toString()))}function w(e){if(!e)return!1;const t=e.toLowerCase(),i=-1!==t.indexOf("/services/"),r=-1!==t.indexOf("/mapserver/wmsserver"),l=-1!==t.indexOf("/imageserver/wmsserver"),s=-1!==t.indexOf("/wmsserver");return i&&(r||l||s)}},45322:(e,t,i)=>{i.d(t,{d:()=>s,h:()=>l});var r=i(11145);const l={type:r.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:s}}}}};function s(e,t,i,l){if(!e)return null;const{minScale:s,maxScale:n,minLOD:o,maxLOD:a}=t;if(null!=o&&null!=a)return l&&l.ignoreMinMaxLOD?r.Z.fromJSON(e):r.Z.fromJSON({...e,lods:e.lods.filter((({level:e})=>null!=e&&e>=o&&e<=a))});if(0!==s&&0!==n){const t=e=>Math.round(1e4*e)/1e4,i=s?t(s):1/0,l=n?t(n):-1/0;return r.Z.fromJSON({...e,lods:e.lods.filter((e=>{const r=t(e.scale);return r<=i&&r>=l}))})}return r.Z.fromJSON(e)}},99282:(e,t,i)=>{i.d(t,{a:()=>s});var r=i(67900),l=i(68441);const s={inches:(0,r.En)(1,"meters","inches"),feet:(0,r.En)(1,"meters","feet"),"us-feet":(0,r.En)(1,"meters","us-feet"),yards:(0,r.En)(1,"meters","yards"),miles:(0,r.En)(1,"meters","miles"),"nautical-miles":(0,r.En)(1,"meters","nautical-miles"),millimeters:(0,r.En)(1,"meters","millimeters"),centimeters:(0,r.En)(1,"meters","centimeters"),decimeters:(0,r.En)(1,"meters","decimeters"),meters:(0,r.En)(1,"meters","meters"),kilometers:(0,r.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,r.ty)(1,"meters",l.sv.radius)}}}]);