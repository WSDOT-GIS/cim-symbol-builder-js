"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4273,3069],{3330:(e,t,n)=>{n.d(t,{GB:()=>r,Qo:()=>l,Y4:()=>o});var i=n(96285);class r{}function o(e){return e instanceof i.bo?e===r.instance:"unknown"===e?.toString().toLowerCase()}function l(e){return o(e)?r.instance:e}r.instance=new i.oh("Etc/UTC")},13069:(e,t,n)=>{n.d(t,{lk:()=>r,vD:()=>l,yS:()=>o});const i="randomUUID"in crypto;function r(){if(i)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function o(){return`{${r().toUpperCase()}}`}function l(){return`{${r()}}`}},70328:(e,t,n)=>{n.d(t,{BI:()=>h,Ej:()=>p,Hq:()=>u,Ie:()=>d,Jt:()=>m,Ne:()=>y,RF:()=>s,aI:()=>S,fA:()=>o,hZ:()=>f,iT:()=>a,is:()=>g,qv:()=>b,vI:()=>c,v_:()=>w,vt:()=>r,w1:()=>l});var i=n(5443);function r(e=w){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function o(e,t,n,i,o,l,s=r()){return s[0]=e,s[1]=t,s[2]=n,s[3]=i,s[4]=o,s[5]=l,s}function l(e,t){const n=isFinite(e[2])||isFinite(e[5]);return new i.A(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function s(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,n=0,i=t.length/3){let r=e[0],o=e[1],l=e[2],s=e[3],a=e[4],u=e[5];for(let e=0;e<i;e++)r=Math.min(r,t[n+3*e]),o=Math.min(o,t[n+3*e+1]),l=Math.min(l,t[n+3*e+2]),s=Math.max(s,t[n+3*e]),a=Math.max(a,t[n+3*e+1]),u=Math.max(u,t[n+3*e+2]);e[0]=r,e[1]=o,e[2]=l,e[3]=s,e[4]=a,e[5]=u}function p(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function y(e,t,n=e){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n!==e&&(n[3]=e[3],n[4]=e[4],n[5]=e[5]),n}function c(e,t,n=e){return n[3]=t[0],n[4]=t[1],n[5]=t[2],n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),e}function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function d(e){return e?f(e,b):r(b)}function m(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function h(e,t,n,i,r){return e[0]=t,e[1]=n,e[2]=Number.NEGATIVE_INFINITY,e[3]=i,e[4]=r,e[5]=Number.POSITIVE_INFINITY,e}function g(e){return 6===e.length}function S(e,t,n){if(null==e||null==t)return e===t;if(!g(e)||!g(t))return!1;if(n){for(let i=0;i<e.length;i++)if(!n(e[i],t[i]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}n(19419);const b=[1/0,1/0,1/0,-1/0,-1/0,-1/0],w=[0,0,0,0,0,0];r()},17136:(e,t,n)=>{n.d(t,{el:()=>F});var i=n(92602),r=n(49186),o=n(53966),l=n(39829),s=n(82799),a=n(80754),u=n(21325),p=n(28735),y=(n(59456),n(78888)),c=n(65864),f=n(2272),d=n(84952),m=n(92300);const h=()=>o.A.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function S(e){return"polyline"===e[0].type}function b(e,t,n){if(t){const t=function(e,t){if(!(e instanceof s.A||e instanceof l.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw h().error(e),new r.A(e)}const n=(0,a.r8)(e),i=[];for(const e of n){const n=[];i.push(n),n.push([e[0][0],e[0][1]]);for(let i=0;i<e.length-1;i++){const r=e[i][0],o=e[i][1],l=e[i+1][0],s=e[i+1][1],a=Math.sqrt((l-r)*(l-r)+(s-o)*(s-o)),u=(s-o)/a,p=(l-r)/a,y=a/t;if(y>1){for(let e=1;e<=y-1;e++){const i=e*t,l=p*i+r,s=u*i+o;n.push([l,s])}const e=(a+Math.floor(y-1)*t)/2,i=p*e+r,l=u*e+o;n.push([i,l])}n.push([l,s])}}return function(e){return"polygon"===e.type}(e)?new l.A({rings:i,spatialReference:e.spatialReference}):new s.A({paths:i,spatialReference:e.spatialReference})}(e,1e6);e=(0,p.ci)(t,!0)}return n&&(e=(0,a.kS)(e,n)),e}function w(e,t,n){if(Array.isArray(e)){const i=e[0];if(i>t){const n=(0,a.kd)(i,t);e[0]=i+n*(-2*t)}else if(i<n){const t=(0,a.kd)(i,n);e[0]=i+t*(-2*n)}}else{const i=e.x;if(i>t){const n=(0,a.kd)(i,t);e=e.clone().offset(n*(-2*t),0)}else if(i<n){const t=(0,a.kd)(i,n);e=e.clone().offset(t*(-2*n),0)}}return e}function M(e,t){let n=-1;for(let i=0;i<t.cutIndexes.length;i++){const r=t.cutIndexes[i],o=t.geometries[i],l=(0,a.r8)(o);for(let e=0;e<l.length;e++){const t=l[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const i=t[e][0];n=i>n?i:n}n=Number(n.toFixed(9));const i=-360*(0,a.kd)(n,180);for(let n=0;n<t.length;n++){const t=o.getPoint(e,n);o.setPoint(e,n,t.clone().offset(i,0))}return!0}}))}if(r===n){if(g(e))for(const t of(0,a.r8)(o))e[r]=e[r].addRing(t);else if(S(e))for(const t of(0,a.r8)(o))e[r]=e[r].addPath(t)}else n=r,e[r]=o}return e}async function F(e,t,n){if(!Array.isArray(e))return F([e],t);t&&"string"!=typeof t&&h().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const r="string"==typeof t?t:t?.url??i.A.geometryServiceUrl;let o,g,S,T,N,O,_,x,I=0;const A=[],L=[];for(const t of e)if(null!=t)if(o||(o=t.spatialReference,g=(0,u.Vp)(o),S=o.isWebMercator,O=S?102100:4326,T=a.j7[O].maxX,N=a.j7[O].minX,_=a.j7[O].plus180Line,x=a.j7[O].minus180Line),g)if("mesh"===t.type)L.push(t);else if("point"===t.type)L.push(w(t.clone(),T,N));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>w(e,T,N))),L.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,g);L.push(e.rings?new l.A(e):e)}else if(t.extent){const e=t.extent,n=(0,a.kd)(e.xmin,N)*(2*T);let i=0===n?t.clone():(0,a.kS)(t.clone(),n);e.offset(n,0);let{xmin:r,xmax:o}=e;r=Number(r.toFixed(9)),o=Number(o.toFixed(9)),e.intersects(_)&&o!==T?(I=o>I?o:I,i=b(i,S),A.push(i),L.push("cut")):e.intersects(x)&&r!==N?(I=o*(2*T)>I?o*(2*T):I,i=b(i,S,360),A.push(i),L.push("cut")):L.push(i)}else L.push(t.clone());else L.push(t);else L.push(t);let v=(0,a.kd)(I,T),Z=-90;const J=v,R=new s.A;for(;v>0;){const e=360*v-180;R.addPath([[e,Z],[e,-1*Z]]),Z*=-1,v--}if(A.length>0&&J>0){const t=M(A,await async function(e,t,n,i){const r=(0,f.Dl)(e),o=t[0].spatialReference,l={...i,responseType:"json",query:{...r.query,f:"json",sr:(0,u.YX)(o),target:JSON.stringify({geometryType:(0,c.$B)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},s=await(0,y.A)(r.path+"/cut",l),{cutIndexes:a,geometries:p=[]}=s.data;return{cutIndexes:a,geometries:p.map((e=>{const t=(0,c.rS)(e);return t.spatialReference=o,t}))}}(r,A,R,n)),i=[],o=[];for(let n=0;n<L.length;n++){const r=L[n];if("cut"!==r)o.push(r);else{const r=t.shift(),l=e[n];null!=l&&"polygon"===l.type&&l.rings&&l.rings.length>1&&r.rings.length>=l.rings.length?(i.push(r),o.push("simplify")):o.push(S?(0,p.Gh)(r):r)}}if(!i.length)return o;const l=await async function(e,t,n){const i="string"==typeof e?(0,d.An)(e):e,r=t[0].spatialReference,o=(0,c.$B)(t[0]),l={...n,query:{...i.query,f:"json",sr:(0,u.YX)(r),geometries:JSON.stringify((0,m.X)(t))}},{data:s}=await(0,y.A)(i.path+"/simplify",l);return(0,m.V)(s.geometries,o,r)}(r,i,n),s=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?s.push(t):s.push(S?(0,p.Gh)(l.shift()):l.shift())}return s}const C=[];for(let e=0;e<L.length;e++){const t=L[e];if("cut"!==t)C.push(t);else{const e=A.shift();C.push(!0===S?(0,p.Gh)(e):e)}}return C}},80754:(e,t,n)=>{n.d(t,{j7:()=>l,kS:()=>a,kd:()=>s,r8:()=>u});var i=n(82799),r=n(16930),o=n(65864);const l={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new i.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator}),minus180Line:new i.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new i.A({paths:[[[180,-180],[180,180]]],spatialReference:r.A.WGS84}),minus180Line:new i.A({paths:[[[-180,-180],[-180,180]]],spatialReference:r.A.WGS84})}};function s(e,t){return Math.ceil((e-t)/(2*t))}function a(e,t){const n=u(e);for(const e of n)for(const n of e)n[0]+=t;return e}function u(e){return(0,o.Bi)(e)?e.rings:e.paths}},96953:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var i=n(90237),r=(n(59456),n(52106)),o=(n(61147),n(5503)),l=n(49186),s=n(4718),a=n(92071),u=n(93637),p=n(67076),y=n(10107),c=(n(44208),n(53966),n(36005)),f=n(40608),d=n(43937),m=n(57251),h=n(19419),g=n(17136),S=n(21325),b=n(13600),w=n(94194),M=n(4146),F=n(33032),T=n(63074),N=n(16131),O=n(8303),_=n(25036),x=n(20437),I=n(94985),A=n(31593),L=n(53930),v=n(68249),Z=n(16930),J=n(5443);function R(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!C(e)))}function C({layerDefinition:e,featureSet:t}){const n=e.geometryType??t.geometryType;return k.find((t=>n===t.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===t.identifyingSymbol.type))}function D(){return new J.A({xmin:-180,ymin:-90,xmax:180,ymax:90})}const j=new x.A({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),E=new x.A({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let B=class extends w.A{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?null==t?(0,m.projectOrLoad)(D(),e).geometry:(0,h.w1)(t,e):null}get fullBounds(){const e=this.layer?.spatialReference;if(!e)return null;const t=(0,h.Ie)();return this.graphics.forEach((n=>{const i=null!=n.geometry?(0,m.projectOrLoad)(n.geometry,e).geometry:null;null!=i&&(0,h.fT)(t,"point"===i.type?i:i.extent,t)})),(0,h.aI)(t,h.qv)?null:t}get sublayers(){return this.graphics}};(0,i._)([(0,y.MZ)({readOnly:!0})],B.prototype,"fullExtent",null),(0,i._)([(0,y.MZ)({readOnly:!0})],B.prototype,"fullBounds",null),(0,i._)([(0,y.MZ)({readOnly:!0})],B.prototype,"sublayers",null),(0,i._)([(0,y.MZ)()],B.prototype,"layer",void 0),(0,i._)([(0,y.MZ)()],B.prototype,"layerId",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],B.prototype,"visibilityMode",void 0),B=(0,i._)([(0,f.$)("esri.layers.MapNotesLayer.MapNotesSublayer")],B);const k=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new I.A).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new A.A).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new L.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new L.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new v.A).toJSON()}];let G=class extends((0,T.dM)((0,_.j)((0,N.q)((0,O.A)((0,a.P)(M.A)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=Z.A.WGS84,this.sublayers=new o.A(k.map((e=>new B({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,n){return{operations:{supportsMapNotesEditing:!R(t)&&"portal-item"!==n?.origin}}}readFeatureCollections(e,t,n){if(!R(t))return null;const i=t.layers.map((e=>{const t=new b.default;return t.read(e,n),t}));return new o.A({items:i})}readLegacyfeatureCollectionJSON(e,t){return R(t)?(0,s.o8)(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=(0,h.Ie)();return null!=this.sublayers?this.sublayers.forEach((({fullBounds:e})=>null!=e?(0,h.fT)(t,e,t):t),t):this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((n=>{const i=(0,m.projectOrLoad)(n.layerDefinition.extent,e).geometry;null!=i&&(0,h.fT)(t,i,t)})),(0,h.aI)(t,h.qv)?(0,m.projectOrLoad)(D(),e).geometry:(0,h.w1)(t,e)}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?Z.A.fromJSON(t.layers[0].layerDefinition.spatialReference):Z.A.WGS84}readSublayers(e,t,n){if(R(t))return null;const i=[];let l=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const e of t.layers){const{layerDefinition:t,featureSet:n}=e,o=t.id??l++,s=C(e);if(null!=s){const e=new B({id:s.id,title:t.name,layerId:o,layer:this,graphics:n.features.map((({geometry:e,symbol:t,attributes:n,popupInfo:i})=>r.A.fromJSON({attributes:n,geometry:e,symbol:t,popupTemplate:i})))});i.push(e)}}return new o.A(i)}writeSublayers(e,t,n,i){const{minScale:r,maxScale:o}=this;if(null==e)return;const s=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&i?.messages?.push(new l.A("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const a=[];let p=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(null!=e.geometry){p=e.geometry.spatialReference.toJSON();break e}for(const t of k){const n=e.find((e=>t.id===e.id));this._writeMapNoteSublayer(a,n,t,r,o,p,i)}(0,u.sM)("featureCollection.layers",a,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,s.o8)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const n of this.sublayers)for(const i of n.graphics)if(null!=i.geometry){const n=i.geometry;e?(0,S.aI)(n.spatialReference,e)||((0,m.canProjectWithoutEngine)(n.spatialReference,e)||(0,m.isLoaded)()||await(0,m.load)(),i.geometry=(0,m.project)(n,e)):e=n.spatialReference,t.push(i)}const n=await(0,g.el)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=n[t]))}_findSublayer(e){return null==this.sublayers?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,n,i,r,o,l){const a=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(a,e,n.geometryType,l);this._normalizeObjectIds(a,j),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,s.o8)(n.identifyingSymbol)}},id:t.layerId,geometryType:n.geometryTypeJSON,minScale:i,maxScale:r,objectIdField:"OBJECTID",fields:[j.toJSON(),E.toJSON()],spatialReference:o},featureSet:{features:a,geometryType:n.geometryTypeJSON}})}}_writeMapNote(e,t,n,i){if(null==t)return;const{geometry:r,symbol:o,popupTemplate:l}=t;if(null==r)return;if(r.type!==n)return void i?.messages?.push(new p.A("map-notes-layer:invalid-geometry-type",`Geometry "${r.type}" cannot be saved in "${n}" layer`,{graphic:t}));if(null==o)return void i?.messages?.push(new p.A("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const s={attributes:{...t.attributes},geometry:r.toJSON(),symbol:o.toJSON()};null!=l&&(s.popupInfo=l.toJSON()),e.push(s)}_normalizeObjectIds(e,t){const n=t.name;let i=(0,F.H)(n,e)+1;const r=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[n]||r.has(e[n]))&&(e[n]=i++),r.add(e[n])}}};(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"capabilities",void 0),(0,i._)([(0,c.w)(["portal-item","web-map"],"capabilities",["layers"])],G.prototype,"readCapabilities",null),(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"featureCollections",void 0),(0,i._)([(0,c.w)(["web-map","portal-item"],"featureCollections",["layers"])],G.prototype,"readFeatureCollections",null),(0,i._)([(0,y.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],G.prototype,"featureCollectionJSON",void 0),(0,i._)([(0,c.w)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],G.prototype,"readLegacyfeatureCollectionJSON",null),(0,i._)([(0,y.MZ)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],G.prototype,"featureCollectionType",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"fullExtent",null),(0,i._)([(0,y.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],G.prototype,"legendEnabled",void 0),(0,i._)([(0,y.MZ)({type:["show","hide","hide-children"]})],G.prototype,"listMode",void 0),(0,i._)([(0,y.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],G.prototype,"minScale",void 0),(0,i._)([(0,c.w)(["web-map","portal-item"],"minScale",["layers"])],G.prototype,"readMinScale",null),(0,i._)([(0,y.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],G.prototype,"maxScale",void 0),(0,i._)([(0,c.w)(["web-map","portal-item"],"maxScale",["layers"])],G.prototype,"readMaxScale",null),(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"multipointLayer",null),(0,i._)([(0,y.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],G.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"pointLayer",null),(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"polygonLayer",null),(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"polylineLayer",null),(0,i._)([(0,y.MZ)({type:Z.A})],G.prototype,"spatialReference",void 0),(0,i._)([(0,c.w)(["web-map","portal-item"],"spatialReference",["layers"])],G.prototype,"readSpatialReference",null),(0,i._)([(0,y.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],G.prototype,"sublayers",void 0),(0,i._)([(0,c.w)("web-map","sublayers",["layers"])],G.prototype,"readSublayers",null),(0,i._)([(0,d.K)("web-map","sublayers")],G.prototype,"writeSublayers",null),(0,i._)([(0,y.MZ)({readOnly:!0})],G.prototype,"textLayer",null),(0,i._)([(0,y.MZ)()],G.prototype,"title",void 0),(0,i._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],G.prototype,"type",void 0),G=(0,i._)([(0,f.$)("esri.layers.MapNotesLayer")],G);const q=G},33032:(e,t,n)=>{n.d(t,{H:()=>r,L:()=>i});const i=1;function r(e,t){let n=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(n=Math.max(n,t))}return n}},33143:(e,t,n)=>{n.d(t,{A:()=>f});var i=n(90237),r=n(69540),o=n(25482),l=n(10107),s=(n(44208),n(53966),n(87811),n(36005)),a=n(40608),u=n(43937),p=n(72088),y=n(29005);let c=class extends((0,r.O)(o.oY)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const n of Object.keys(e))t[n]=(0,p.rS)(e[n]);return t}writeDomains(e,t){const n={};for(const t of Object.keys(e))e[t]&&(n[t]=e[t]?.toJSON());t.domains=n}};(0,i._)([(0,l.MZ)({json:{write:!0}})],c.prototype,"id",void 0),(0,i._)([(0,l.MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,i._)([(0,l.MZ)({json:{write:!0}})],c.prototype,"domains",void 0),(0,i._)([(0,s.w)("domains")],c.prototype,"readDomains",null),(0,i._)([(0,u.K)("domains")],c.prototype,"writeDomains",null),(0,i._)([(0,l.MZ)({type:[y.A],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,i._)([(0,a.$)("esri.layers.support.FeatureType")],c);const f=c},95466:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(49186),r=n(25482),o=n(53966),l=n(91869),s=n(3330),a=n(30524),u=n(56400),p=n(96285);const y=new Map;class c{static fromJSON(e){return new c(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new c(e.fields??[],h(e))}static fromLayerJSON(e){return new c(e.fields??[],h(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const n=[];for(const e of this.fields){const t=e?.name,i=d(t);if(t&&i){const r=f(t);this._fieldsMap.set(t,e),this._fieldsMap.set(r,e),this._normalizedFieldsMap.set(i,e),n.push(`${r}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),(0,a.vE)(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):(0,a.WA)(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),(0,a.te)(e)||(0,a.Xz)(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,a.te)(e)||(0,a.Xz)(e)||e.nullable||void 0!==(0,a.lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(f(e))??this._normalizedFieldsMap.get(d(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(o.A.getLogger("esri.layers.support.FieldsIndex").error(new i.A("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u.n$):m.has(t.type)?u.L5:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.L5?s.GB.instance:t===u.n$?p.mQ.utcInstance:(0,l.tE)(y,t,(()=>p.oh.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,a.OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,r.Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function f(e){return e.trim().toLowerCase()}function d(e){return(0,a.rS)(e)?.toLowerCase()??""}const m=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function h(e){const t=new Map;if(!e.fields)return t;const n=!0===e.datesInUnknownTimezone,{timeInfo:i,editFieldsInfo:r}=e,o=(i?"startField"in i?i.startField:i.startTimeField:"")??"",l=(i?"endField"in i?i.endField:i.endTimeField:"")??"",s=function(e){return"dateFieldsTimeZone"in e}(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,u.ZS)(e.dateFieldsTimeReference):null,a=r?function(e){return"timeZone"in e}(r)?r.timeZone??s:r.dateFieldsTimeReference?(0,u.ZS)(r.dateFieldsTimeReference):s??u.n$:null,p=i?function(e){return"timeZone"in e}(i)?i.timeZone??s:i.timeReference?(0,u.ZS)(i.timeReference):s:null,y=new Map([[f(r?.creationDateField??""),a],[f(r?.editDateField??""),a],[f(o),p],[f(l),p]]);for(const{name:i,type:r}of e.fields)if(m.has(r))t.set(i,u.L5);else if("date"!==r&&"esriFieldTypeDate"!==r)t.set(i,null);else if(n)t.set(i,u.L5);else{const e=y.get(f(i??""))??s;t.set(i,e)}return t}},98453:(e,t,n)=>{n.d(t,{m:()=>i});const i=new(n(66552).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},92300:(e,t,n)=>{n.d(t,{V:()=>o,X:()=>r});var i=n(65864);function r(e){return{geometryType:(0,i.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function o(e,t,n){const r=(0,i.xD)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=n,t}))}},58501:(e,t,n)=>{n.d(t,{q:()=>r});var i=n(62815);function r(e,t,n){if(!n?.features||!n.hasZ)return;const r=(0,i.N)(n.geometryType,t,e.outSpatialReference);if(null!=r)for(const e of n.features)r(e.geometry)}},2272:(e,t,n)=>{n.d(t,{Dl:()=>l,jV:()=>o,lF:()=>s}),n(92602),n(70333);var i=n(4718),r=n(84952);function o(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function l(e){return"string"==typeof e?(0,r.An)(e):(0,i.o8)(e)}function s(e,t,n){const i={};for(const r in e){if("declaredClass"===r)continue;const o=e[r];if(null!=o&&"function"!=typeof o)if(Array.isArray(o))i[r]=o.map((e=>s(e)));else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(n?.[r]);i[r]=t?e:JSON.stringify(e)}else i[r]=t?o:JSON.stringify(o);else i[r]=o}return i}n(926)}}]);