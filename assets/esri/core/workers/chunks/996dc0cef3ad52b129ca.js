"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6650],{45475:(e,t,r)=>{r.d(t,{A:()=>y});var i=r(90237),n=r(69622),s=r(4576),o=r(69540),a=r(4902),l=r(25482),p=r(10107),u=(r(44208),r(53966),r(40608));let c=0,d=class extends((0,l.Te)((0,o.O)((0,a.sA)(n.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(s.Ru)}};(0,i._)([(0,p.MZ)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,i._)([(0,p.MZ)({type:String})],d.prototype,"title",void 0),(0,i._)([(0,p.MZ)({clonable:!1,value:null})],d.prototype,"parent",null),(0,i._)([(0,p.MZ)({readOnly:!0})],d.prototype,"isEditable",null),d=(0,i._)([(0,u.$)("esri.analysis.Analysis")],d);const y=d},69540:(e,t,r)=>{r.d(t,{O:()=>u,P:()=>c});var i=r(90237),n=r(69622),s=(r(44208),r(4718)),o=(r(53966),r(97768)),a=r(35666),l=r(88620),p=r(40608);const u=e=>{let t=class extends e{clone(){const e=(0,l.oY)(this);(0,o.Lw)(e,"unable to clone instance of non-accessor class");const t=e.metadata,r=e.store,i={},n=new Map;for(const e in t){const o=t[e],l=r?.originOf(e),p=o.clonable;if(o.readOnly||!1===p||l!==a.Gr.USER&&l!==a.Gr.DEFAULTS&&l!==a.Gr.WEB_MAP&&l!==a.Gr.WEB_SCENE)continue;const u=this[e];let c=null;c="function"==typeof p?p(u):"reference"===p?u:(0,s.TU)(u),null!=u&&null==c||(l===a.Gr.DEFAULTS?n.set(e,c):i[e]=c)}const p=new(0,Object.getPrototypeOf(this).constructor)(i);if(n.size){const e=(0,l.oY)(p)?.store;if(e)for(const[t,r]of n)e.set(t,r,a.Gr.DEFAULTS)}return p}};return t=(0,i._)([(0,p.$)("esri.core.Clonable")],t),t};let c=class extends(u(n.A)){};c=(0,i._)([(0,p.$)("esri.core.Clonable")],c)},69052:(e,t,r)=>{r.d(t,{ie:()=>a});var i=r(34727);class n{constructor(e,t){this.min=e,this.max=t,this.range=t-e}normalize(e,t=0,r=!1){return s(this.range,this.min,this.max,e,t,r)}clamp(e,t=0){return(0,i.qE)(e-t,this.min,this.max)+t}monotonic(e,t,r){return e<t?t:t+o(this.range,e-t,r)}minimalMonotonic(e,t,r){return s(this.range,e,e+this.range,t,r)}center(e,t,r){return t=this.monotonic(e,t,r),this.normalize((e+t)/2,r)}diff(e,t,r){return this.monotonic(e,t,r)-e}shortestSignedDiff(e,t){e=this.normalize(e);const r=(t=this.normalize(t))-e,i=t<e?this.minimalMonotonic(e,t)-e:t-this.minimalMonotonic(t,e);return Math.abs(r)<Math.abs(i)?r:i}contains(e,t,r){return t=this.minimalMonotonic(e,t),(r=this.minimalMonotonic(e,r))>e&&r<t}}function s(e,t,r,i,n=0,s=!1){return(i-=n)<t?i+=o(e,t-i):i>r&&(i-=o(e,i-r)),s&&i===r&&(i=t),i+n}function o(e,t,r=0){return Math.ceil((t-r)/e)*e+r}new n(0,2*Math.PI),new n(-Math.PI,Math.PI);const a=new n(0,360)},4902:(e,t,r)=>{r.d(t,{PH:()=>a,sA:()=>o});var i=r(90237),n=r(40608);let s=0;const o=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++})}};return t=(0,i._)([(0,n.$)("esri.core.Identifiable")],t),t},a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:s++})}};return t=(0,i._)([(0,n.$)("esri.core.Identifiable.NumericIdentifiable")],t),t};let l=class extends(o(class{})){};l=(0,i._)([(0,n.$)("esri.core.Identifiable")],l)},92071:(e,t,r)=>{r.d(t,{P:()=>w,L:()=>b});var i=r(90237),n=r(69622),s=r(76953),o=r(4718),a=r(35666);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new l,r=this._originStores[a.Gr.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,o.o8)(e),a.Gr.DEFAULTS)}));for(let r=a.Gr.SERVICE;r<a.AU;r++){const i=this._originStores[r];i&&i.forEach(((i,n)=>{e&&e.has(n)||t.set(n,(0,o.o8)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=a.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=a.Gr.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r?.get(e),n=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),n!==i}originOf(e){return this._propertyOriginMap.get(e)||a.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var p=r(45917),u=r(88620),c=r(40608);const d=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,u.oY)(this),r=t.store,i=new l;t.store=i,(0,s.k)(t,r,i)}read(e,t){(0,p.L)(this,e,t)}getAtOrigin(e,t){const r=y(this),i=(0,a.aB)(t);if("string"==typeof e)return r.get(e,i);const n={};return e.forEach((e=>{n[e]=r.get(e,i)})),n}originOf(e){return(0,a.OL)(this.originIdOf(e))}originIdOf(e){return y(this).originOf(e)}revert(e,t){const r=y(this),i=(0,a.aB)(t),n=(0,u.oY)(this);let s;s="string"==typeof e?"*"===e?r.keys(i):[e]:e,s.forEach((e=>{n.invalidate(e),r.revert(e,i),n.commit(e)}))}};return t=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function y(e){return(0,u.oY)(e).store}let h=class extends(d(n.A)){};h=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],h);var m=r(16649),f=r(49422);const g=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return v(this).delete(e,(0,a.aB)(t))}write(e,t){return(0,f.M)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,u.oY)(this).setAtOrigin(e,t,(0,a.aB)(r))}removeOrigin(e){const t=v(this),r=(0,a.aB)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),a.Gr.USER)}updateOrigin(e,t){const r=v(this),i=(0,a.aB)(t),n=(0,m.Jt)(this,e);for(let t=i+1;t<a.AU;++t)r.delete(e,t);r.set(e,n,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function v(e){return(0,u.oY)(e).store}const w=e=>{let t=class extends(g(d(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],t),t};let b=class extends(w(n.A)){};b=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],b)},89317:(e,t,r)=>{r.d(t,{K:()=>i});const i=["operational-layers","basemap","ground"]},36708:(e,t,r)=>{r.d(t,{C_:()=>d,OH:()=>m,Vh:()=>f,on:()=>c,pc:()=>g,wB:()=>l,z7:()=>p}),r(60999),r(5503);var i=r(37955),n=r(36563),s=r(97768),o=r(74887),a=r(14012);function l(e,t,r={}){return u(e,t,r,y)}function p(e,t,r={}){return u(e,t,r,h)}function u(e,t,r={},i){let n=null;const o=r.once?(e,r)=>{i(e)&&((0,s.xt)(n),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(n=(0,a.Cn)(e,o,r.sync,r.equals),r.initial){const t=e();o(t,t)}return n}function c(e,t,r,o={}){let a=null,p=null,u=null;function c(){a&&p&&(p.remove(),o.onListenerRemove?.(a),a=null,p=null)}function d(e){o.once&&o.once&&(0,s.xt)(u),r(e)}const y=l(e,((e,r)=>{c(),(0,i.wb)(e)&&(a=e,p=(0,i.on)(e,t,d),o.onListenerAdd?.(e))}),{sync:o.sync,initial:!0});return u=(0,n.hA)((()=>{y.remove(),c()})),u}function d(e,t){return function(e,t,r){if((0,o.G4)(r))return Promise.reject((0,o.NK)());const i=e();if(t?.(i))return Promise.resolve(i);let a=null;function l(){a=(0,s.xt)(a)}return new Promise(((i,s)=>{a=(0,n.vE)([(0,o.u7)(r,(()=>{l(),s((0,o.NK)())})),u(e,(e=>{l(),i(e)}),{sync:!1,once:!0},t??y)])}))}(e,h,t)}function y(e){return!0}function h(e){return!!e}r(80559);const m={sync:!0},f={initial:!0},g={sync:!0,initial:!0}},4146:(e,t,r)=>{r.d(t,{A:()=>b});var i=r(90237),n=(r(59456),r(78888)),s=r(49186),o=r(65529),a=r(4902),l=r(92474),p=r(53966),u=r(74887),c=r(84952),d=r(10107),y=(r(44208),r(87811),r(40608)),h=r(92602),m=r(79677),f=r(5443),g=r(16930);let v=0,w=class extends(o.A.EventedMixin((0,a.sA)(l.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new f.A(-180,-90,180,90,g.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=g.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(7982).then(r.bind(r,27982))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await r.e(5613).then(r.bind(r,45613));try{return await i(t)}catch(e){const r=t?.portalItem,i=r?.id||"unset",n=r?.portal?.url||h.A.portalUrl;throw p.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,u.zf)(e)||p.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get effectiveVisible(){let e=this.visible;const t=this.parent;return e&&t&&"effectiveVisible"in t&&(e&&=t.effectiveVisible),e}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,c.An)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.A)(e,{query:{f:"json"},responseType:"json"})).data;throw new s.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,d.MZ)({type:String})],w.prototype,"attributionDataUrl",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],w.prototype,"effectiveVisible",null),(0,i._)([(0,d.MZ)({type:f.A})],w.prototype,"fullExtent",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],w.prototype,"hasAttributionData",null),(0,i._)([(0,d.MZ)({type:String,clonable:!1})],w.prototype,"id",void 0),(0,i._)([(0,d.MZ)({type:Boolean,nonNullable:!0})],w.prototype,"legendEnabled",void 0),(0,i._)([(0,d.MZ)({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),(0,i._)([(0,d.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],w.prototype,"opacity",void 0),(0,i._)([(0,d.MZ)({clonable:!1})],w.prototype,"parent",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],w.prototype,"parsedUrl",null),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],w.prototype,"persistenceEnabled",void 0),(0,i._)([(0,d.MZ)({type:Boolean})],w.prototype,"popupEnabled",void 0),(0,i._)([(0,d.MZ)({type:Boolean})],w.prototype,"attributionVisible",void 0),(0,i._)([(0,d.MZ)({type:g.A})],w.prototype,"spatialReference",void 0),(0,i._)([(0,d.MZ)({type:String})],w.prototype,"title",void 0),(0,i._)([(0,d.MZ)({readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),(0,i._)([(0,d.MZ)()],w.prototype,"url",void 0),(0,i._)([(0,d.MZ)({type:m.A})],w.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,d.MZ)({type:Boolean,nonNullable:!0})],w.prototype,"visible",void 0),w=(0,i._)([(0,y.$)("esri.layers.Layer")],w);const b=w},96650:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var i=r(90237),n=(r(59456),r(45475)),s=r(69622),o=r(69540),a=r(69052),l=r(97768),p=r(10107),u=r(79901),c=(r(87811),r(44208),r(40608)),d=r(56507),y=r(86738);let h=class extends((0,o.O)(s.A)){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45}isValid(){return null!=this.observer&&this.farDistance>0}equals(e){return(0,l.CM)(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView}};(0,i._)([(0,p.MZ)({type:y.A})],h.prototype,"observer",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,range:{min:0}})],h.prototype,"farDistance",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0}),(0,u.w)((e=>a.ie.normalize((0,d.GB)(e),void 0,!0)))],h.prototype,"heading",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180}})],h.prototype,"tilt",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360}})],h.prototype,"horizontalFieldOfView",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180}})],h.prototype,"verticalFieldOfView",void 0),(0,i._)([(0,p.MZ)()],h.prototype,"isValid",null),h=(0,i._)([(0,c.$)("esri.analysis.Viewshed")],h);const m=h;var f=r(5503),g=r(62885),v=r(34727),w=r(36708),b=(r(53966),r(57251)),S=r(5443);const M=f.A.ofType(m);let _=class extends n.A{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles((0,w.wB)((()=>this._computeExtent()),(e=>{null==e.pending&&(this._extent=e.extent)}),w.pc))}get viewsheds(){return this._get("viewsheds")||new M}set viewsheds(e){this._set("viewsheds",(0,g.V)(e,this.viewsheds,M))}get spatialReference(){for(const e of this.viewsheds)if(null!=e.observer)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map((({observer:e})=>e))}async waitComputeExtent(){const e=this._computeExtent();null!=e.pending&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(null==e)return{pending:null,extent:null};const t=[];for(const e of this.viewsheds){const r=this._computeViewshedExtent(e);null!=r&&t.push(r)}const r=(0,b.projectOrLoadMany)(t,e);if(null!=r.pending)return{pending:r.pending,extent:null};let i=null;const{geometries:n}=r;return null!=n&&(i=n.reduce(((e,t)=>function(e,t){return null==e?t:null==t?e:e.union(t)}(e,t)))),{pending:null,extent:i}}_computeViewshedExtent(e){const{observer:t,farDistance:r,heading:i,tilt:n,horizontalFieldOfView:s,verticalFieldOfView:o}=e;if(null==t)return null;const l=s/2,p=o/2,u=r/t.spatialReference.metersPerUnit,c=[a.ie.normalize(i-l),i,a.ie.normalize(i+l)],d=S.A.fromPoint(t),y=e=>{const t=c.map((t=>a.ie.normalize(t-e)));if(t[0]>t[2]||360===s)return u;const r=t.map((e=>Math.abs(e>180?360-e:e))).reduce(((e,t)=>e>t?t:e));return r>90?0:u*Math.cos((0,v.kU)(r))};d.xmax+=y(90),d.xmin-=y(-90),d.ymax+=y(0),d.ymin-=y(180);const h=t.z;if(null!=h){let e=h,t=h;const i=n-90,s=(0,v.qE)(i+p,-90,90),o=(0,v.qE)(i-p,-90,90);e+=r*A(s),t+=r*A(o);const a=L(p)*r,u=A(i)*a*(1-L(l));n<90&&(e-=u),n>90&&(t-=u),d.zmax=Math.max(e,h),d.zmin=Math.min(t,h)}return d}clear(){this.viewsheds.removeAll()}};function L(e){return Math.cos((0,v.kU)(e))}function A(e){return Math.sin((0,v.kU)(e))}(0,i._)([(0,p.MZ)({type:["viewshed"]})],_.prototype,"type",void 0),(0,i._)([(0,p.MZ)({cast:g.H,type:M,nonNullable:!0})],_.prototype,"viewsheds",null),(0,i._)([(0,p.MZ)({readOnly:!0})],_.prototype,"spatialReference",null),(0,i._)([(0,p.MZ)()],_.prototype,"_extent",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],_.prototype,"extent",null),(0,i._)([(0,p.MZ)({readOnly:!0})],_.prototype,"requiredPropertiesForEditing",null),_=(0,i._)([(0,c.$)("esri.analysis.ViewshedAnalysis")],_);const x=_;var E=r(92071),T=r(4146),I=r(16131);let O=class extends((0,I.q)((0,E.P)(T.A))){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new x,this.opacity=1}initialize(){this.addHandles((0,w.wB)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),w.pc))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new x)}get analysis(){return this.source}set analysis(e){this.source=e}};(0,i._)([(0,p.MZ)({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),(0,i._)([(0,p.MZ)({type:["ViewshedLayer"]})],O.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.MZ)({nonNullable:!0})],O.prototype,"source",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],O.prototype,"spatialReference",null),(0,i._)([(0,p.MZ)({readOnly:!0})],O.prototype,"fullExtent",null),(0,i._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],O.prototype,"opacity",void 0),(0,i._)([(0,p.MZ)({type:["show","hide"]})],O.prototype,"listMode",void 0),O=(0,i._)([(0,c.$)("esri.layers.ViewshedLayer")],O);const G=O},16131:(e,t,r)=>{r.d(t,{q:()=>b});var i=r(90237),n=r(49186),s=r(84952),o=r(10107),a=r(56507),l=(r(87811),r(44208),r(36005)),p=r(40608),u=r(43937),c=r(89317),d=r(45917),y=r(49422);const h={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},m={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},f={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},g={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":h,"web-map/basemap":m,"web-map/tables":f,"link-chart/operational-layers":{...h,LinkChartLayer:!0},"link-chart/basemap":m,"link-chart/tables":f,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}};var v=r(10873),w=r(79677);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,t,r){return"Group Layer"===r?.portalItem?.type?void 0:e}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,y.R)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){e&&"tables"!==i?.layerContainerType&&(t.layerType=e)}writeTitle(e,t){t.title=e??"Layer"}readTimeExtent(e){return e?w.A.fromArray(e):null}writeTimeExtent(e,t,r,i){e&&"tables"!==i.layerContainerType&&(e.isEmpty?i?.messages&&i.messages.push(new n.A("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[r]=e.toArray())}read(e,t){t&&(t.layer=this),(0,d.t)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(!this.persistenceEnabled&&!t?.ignorePersistenceEnabled)return null;if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=g[e];let i=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new n.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof n.A&&"web-document-write:property-required"===e.name)).length;return(0,s.w8)(r?.url)?(t?.messages?.push(new n.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,l.w)("id",["id"])],t.prototype,"readId",null),(0,i._)([(0,o.MZ)(v.C1)],t.prototype,"listMode",void 0),(0,i._)([(0,u.K)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,o.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:c.K}}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.K)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,o.MZ)(v.ke)],t.prototype,"opacity",void 0),(0,i._)([(0,o.MZ)({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),(0,i._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,u.K)("title"),(0,u.K)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,o.MZ)({type:w.A,json:{origins:{"web-scene":{write:{layerContainerTypes:c.K}}}}})],t.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,l.w)("visibilityTimeExtent")],t.prototype,"readTimeExtent",null),(0,i._)([(0,u.K)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[a.jz,a.Uv]]}})],t.prototype,"writeTimeExtent",null),(0,i._)([(0,o.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:c.K}}},name:"visibility",write:!0}})],t.prototype,"visible",void 0),t=(0,i._)([(0,p.$)("esri.layers.mixins.OperationalLayer")],t),t}},10873:(e,t,r)=>{r.d(t,{C1:()=>_,Fm:()=>w,Ih:()=>v,M6:()=>u,OZ:()=>d,PY:()=>p,Qo:()=>m,Yj:()=>h,fV:()=>y,hG:()=>M,hn:()=>S,id:()=>b,kF:()=>c,ke:()=>g});var i=r(89317),n=r(5443),s=r(16930),o=r(97159),a=r(88625),l=r(78553);const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:i.K}}},u={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},c={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:i.K}}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.w}}},y={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:i.K}}},h={value:null,type:a.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:i.K}}};function m(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const f={write:{enabled:!0,layerContainerTypes:i.K},read:!0},g={type:Number,json:{origins:{"web-document":f,"portal-item":{write:!0}}}},v={...g,json:{...g.json,origins:{"web-document":{...f,write:{enabled:!0,layerContainerTypes:i.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition?.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,l.D)(t.layerDefinition.drawingInfo.transparency):void 0:(0,l.D)(t.drawingInfo.transparency)}}},w={type:n.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=n.A.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=s.A.fromJSON(t.spatialReference)),r}}}},read:!1}},b={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:i.K}}},name:"layerDefinition.minScale",write:!0}},M={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:i.K}}},name:"layerDefinition.maxScale",write:!0}},_={json:{write:{ignoreOrigin:!0,layerContainerTypes:i.K},origins:{"web-map":{read:!1,write:!1}}}}},31756:(e,t,r)=>{r.d(t,{j:()=>s});var i=r(83047),n=r(79258);const s={unknown:1,inches:(0,i.oU)(1,"meters","inches"),feet:(0,i.oU)(1,"meters","feet"),"us-feet":(0,i.oU)(1,"meters","us-feet"),yards:(0,i.oU)(1,"meters","yards"),miles:(0,i.oU)(1,"meters","miles"),"nautical-miles":(0,i.oU)(1,"meters","nautical-miles"),millimeters:(0,i.oU)(1,"meters","millimeters"),centimeters:(0,i.oU)(1,"meters","centimeters"),decimeters:(0,i.oU)(1,"meters","decimeters"),meters:(0,i.oU)(1,"meters","meters"),kilometers:(0,i.oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.vl)(1,"meters",n.$O.radius)}},88625:(e,t,r)=>{r.d(t,{A:()=>b});var i,n=r(90237),s=r(66552),o=r(25482),a=r(97768),l=r(10107),p=(r(44208),r(53966),r(87811),r(36005)),u=r(40608),c=r(43937),d=r(30524);let y=i=class extends o.oY{constructor(e){super(e)}async collectRequiredFields(e,t){return(0,d.Dx)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],y.prototype,"expression",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=i=(0,n._)([(0,u.$)("esri.symbols.support.FeatureExpressionInfo")],y);const h=y;var m,f=r(16271);const g=(0,s.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),v=new s.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let w=m=class extends o.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write({},i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new m({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,a.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,n._)([(0,l.MZ)({type:h,json:{write:!0}})],w.prototype,"featureExpressionInfo",void 0),(0,n._)([(0,p.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],w.prototype,"readFeatureExpressionInfo",null),(0,n._)([(0,c.K)("featureExpressionInfo",{featureExpressionInfo:{type:h},"featureExpression.value":{type:[0]}})],w.prototype,"writeFeatureExpressionInfo",null),(0,n._)([(0,l.MZ)({type:g.apiValues,nonNullable:!0,json:{type:g.jsonValues,read:g.read,write:{writer:g.write,isRequired:!0}}})],w.prototype,"mode",null),(0,n._)([(0,l.MZ)({type:Number,json:{write:!0}})],w.prototype,"offset",void 0),(0,n._)([(0,l.MZ)({type:f.KQ,json:{type:String,read:v.read,write:v.write}})],w.prototype,"unit",null),w=m=(0,n._)([(0,u.$)("esri.symbols.support.ElevationInfo")],w);const b=w},16271:(e,t,r)=>{r.d(t,{Ao:()=>n,KQ:()=>s});var i=r(31756);function n(e){return 1/(i.j[e]||1)}const s=function(){const e=Object.keys(i.j);return e.sort(),e}()},79677:(e,t,r)=>{r.d(t,{A:()=>y});var i,n=r(90237),s=r(25482),o=r(88930),a=r(10107),l=(r(44208),r(53966),r(87811),r(36005)),p=r(40608),u=r(43937),c=r(56400);let d=i=class extends s.oY{static get allTime(){return h}static get empty(){return m}static fromArray(e){return new i({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,n=e.end?.getTime()??e.end;return t===i&&r===n}expandTo(e,t=c.qU){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,o.lL)(r,e,t));let n=this.end;if(n){const r=(0,o.lL)(n,e,t);n=n.getTime()===r.getTime()?r:(0,o.S1)(r,1,e,t)}return new i({start:r,end:n})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,n=e.start?.getTime()??-1/0,s=e.end?.getTime()??1/0;let o,a;return n>=t&&n<=r?o=n:t>=n&&t<=s&&(o=t),r>=n&&r<=s?a=r:s>=t&&s<=r&&(a=s),null==o||null==a||isNaN(o)||isNaN(a)?i.empty:new i({start:o===-1/0?null:new Date(o),end:a===1/0?null:new Date(a)})}offset(e,t,r=c.qU){if(this.isEmpty||this.isAllTime)return this.clone();const n=new i,{start:s,end:a}=this;return null!=s&&(n.start=(0,o.S1)(s,e,t,r)),null!=a&&(n.end=(0,o.S1)(a,e,t,r)),n}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return h.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,n._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,n._)([(0,l.w)("end")],d.prototype,"readEnd",null),(0,n._)([(0,u.K)("end")],d.prototype,"writeEnd",null),(0,n._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,n._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,n._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,n._)([(0,l.w)("start")],d.prototype,"readStart",null),(0,n._)([(0,u.K)("start")],d.prototype,"writeStart",null),d=i=(0,n._)([(0,p.$)("esri.time.TimeExtent")],d);const y=d,h=new d,m=new d({start:void 0,end:void 0})},78553:(e,t,r)=>{r.d(t,{D:()=>s,p:()=>n});var i=r(56507);function n(e){const t=(0,i.Vr)(100*(1-e));return Math.max(0,Math.min(t,100))}function s(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}}}]);