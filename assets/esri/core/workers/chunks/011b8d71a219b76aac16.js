"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8275],{92835:(e,t,r)=>{r.d(t,{Z:()=>m});var i,o=r(43697),s=r(96674),n=r(70586),a=r(35463),l=r(5600),u=(r(75215),r(67676),r(80442),r(71715)),p=r(52011),d=r(30556);let c=i=class extends s.wq{static get allTime(){return y}static get empty(){return h}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=null!=this.start?this.start.getTime():this.start,r=null!=this.end?this.end.getTime():this.end,i=null!=e.start?e.start.getTime():e.start,o=null!=e.end?e.end.getTime():e.end;return t===i&&r===o}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,n.yw)(this.start,(t=>(0,a.JE)(t,e))),r=(0,n.yw)(this.end,(t=>{const r=(0,a.JE)(t,e);return t.getTime()===r.getTime()?r:(0,a.Nm)(r,1,e)}));return new i({start:t,end:r})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,o=e.start?.getTime()??-1/0,s=e.end?.getTime()??1/0;let n,a;if(o>=t&&o<=r?n=o:t>=o&&t<=s&&(n=t),r>=o&&r<=s?a=r:s>=t&&s<=r&&(a=s),null!=n&&null!=a&&!isNaN(n)&&!isNaN(a)){const e=new i;return e.start=n===-1/0?null:new Date(n),e.end=a===1/0?null:new Date(a),e}return i.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new i,{start:o,end:s}=this;return null!=o&&(r.start=(0,a.Nm)(o,e,t)),null!=s&&(r.end=(0,a.Nm)(s,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,o._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,o._)([(0,u.r)("end")],c.prototype,"readEnd",null),(0,o._)([(0,d.c)("end")],c.prototype,"writeEnd",null),(0,o._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,o._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,o._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,o._)([(0,u.r)("start")],c.prototype,"readStart",null),(0,o._)([(0,d.c)("start")],c.prototype,"writeStart",null),c=i=(0,o._)([(0,p.j)("esri.TimeExtent")],c);const y=new c,h=new c({start:void 0,end:void 0}),m=c},25929:(e,t,r)=>{r.d(t,{M:()=>h,a:()=>g,e:()=>c,f:()=>o,i:()=>p,p:()=>d,r:()=>n,t:()=>s,w:()=>a});var i=r(81271);function o(e,t){const r=t&&t.url&&t.url.path;if(e&&r&&(e=(0,i.hF)(e,r,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const r=(0,i.PF)(e,t.portalItem.itemUrl);null!=r&&u.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return y(e,t&&t.portal)}function s(e,t,r=h.YES){if(null==e)return e;!(0,i.YP)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let o=(0,i.hF)(e);if(t){const r=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(r){const s=y(r,t.portal),n=y(o,t.portal);o=(0,i.PF)(n,s,s),null!=o&&o!==n&&o!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(o)}}return o=c(o,t?.portal),(0,i.YP)(o)&&(o=(0,i.Fv)(o)),t?.resources&&t?.portalItem&&!(0,i.YP)(o)&&!(0,i.HK)(o)&&r===h.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),o}function n(e,t,r){return o(e,r)}function a(e,t,r,i){const o=s(e,i);void 0!==o&&(t[r]=o)}const l=/\/items\/([^\/]+)\/resources\/(.*)/,u=/^\.\/resources\//;function p(e){const t=e?.match(l)??null;return t?.[1]??null}function d(e){const t=e?.match(l)??null;if(null==t)return null;const r=t[2],o=r.lastIndexOf("/");if(-1===o){const{path:e,extension:t}=(0,i.fZ)(r);return{prefix:null,filename:e,extension:t}}const{path:s,extension:n}=(0,i.fZ)(r.slice(o+1));return{prefix:r.slice(0,o),filename:s,extension:n}}function c(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,i.Ie)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function y(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const r=`${t.urlKey}.${t.customBaseUrl}`,o=(0,i.TI)();return(0,i.D6)(o,`${o.scheme}://${r}`)?(0,i.Ie)(e,t.portalHostname,r):(0,i.Ie)(e,r,t.portalHostname)}var h,m;(m=h||(h={}))[m.YES=0]="YES",m[m.NO=1]="NO";const g=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return h},ensureMainOnlineDomain:c,fromJSON:o,itemIdFromResourceUrl:p,prefixAndFilenameFromResourceUrl:d,read:n,toJSON:s,write:a},Symbol.toStringTag,{value:"Module"}))},2368:(e,t,r)=>{r.d(t,{J:()=>p,j:()=>d});var i=r(43697),o=r(92036),s=(r(80442),r(22974)),n=(r(92604),r(70586)),a=r(31263),l=r(1153),u=r(52011);const p=e=>{let t=class extends e{clone(){const e=(0,n.s3)((0,l.vw)(this),"unable to clone instance of non-accessor class"),t=e.metadatas,r=e.store,i={},o=new Map;for(const e in t){const n=t[e],l=r?.originOf(e),u=n.clonable;if(n.readOnly||!1===u||l!==a.s3.USER&&l!==a.s3.DEFAULTS&&l!==a.s3.WEB_MAP&&l!==a.s3.WEB_SCENE)continue;const p=this[e];let d=null;d="function"==typeof u?u(p):"reference"===u?p:(0,s.Vo)(p),null!=p&&null==d||(l===a.s3.DEFAULTS?o.set(e,d):i[e]=d)}const u=new(0,Object.getPrototypeOf(this).constructor)(i);if(o.size){const e=(0,l.vw)(u)?.store;if(e)for(const[t,r]of o)e.set(t,r,a.s3.DEFAULTS)}return u}};return t=(0,i._)([(0,u.j)("esri.core.Clonable")],t),t};let d=class extends(p(o.Z)){};d=(0,i._)([(0,u.j)("esri.core.Clonable")],d)},3920:(e,t,r)=>{r.d(t,{p:()=>u,r:()=>p});var i=r(43697),o=r(92036),s=r(61247),n=r(5600),a=r(52011),l=r(72762);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._handles=new s.Z,this._updatingHandles=new l.t}destroy(){this.destroyed||(this._handles.destroy(),this._updatingHandles.destroy())}get handles(){return this._handles}get updatingHandles(){return this._updatingHandles}};return(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,i._)([(0,a.j)("esri.core.HandleOwner")],t),t};let p=class extends(u(o.Z)){};p=(0,i._)([(0,a.j)("esri.core.HandleOwner")],p)},72762:(e,t,r)=>{r.d(t,{t:()=>d});var i=r(43697),o=r(92036),s=r(61247),n=r(50758),a=r(17445),l=r(1654),u=r(5600),p=r(52011);let d=class extends o.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new s.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,a.YP)}addWhen(e,t,r={}){return this._installWatch(e,t,r,a.gx)}addOnCollectionChange(e,t,{initial:r=!1,final:i=!1}={}){const o=++this._handleId;return this._handles.add([(0,a.on)(e,"after-changes",this._createSyncUpdatingCallback(),a.Z_),(0,a.on)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:i?e=>t({added:[],removed:e.toArray()}):void 0})],o),(0,n.kB)((()=>this._handles.remove(o)))}addPromise(e){if(null==e)return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(c)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const r=()=>this._handles.remove(t);return e.then(r,r),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},i){const o=++this._handleId;r.sync||this._installSyncUpdatingWatch(e,o);const s=i(e,t,r);return this._handles.add(s,o),(0,n.kB)((()=>this._handles.remove(o)))}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),i=(0,a.YP)(e,r,{sync:!0,equals:()=>!1});return this._handles.add(i,t),i}_createSyncUpdatingCallback(){return()=>{this._handles.remove(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,l.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(c))})),c)}}};(0,i._)([(0,u.Cb)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,i._)([(0,p.j)("esri.core.support.WatchUpdatingTracking")],d);const c=-42},35463:(e,t,r)=>{r.d(t,{JE:()=>n,Nm:()=>s,rJ:()=>a}),r(80442);const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},o={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function s(e,t,r){const i=new Date(e.getTime());if(t&&r){const e=o[r],{getter:s,setter:n,multiplier:a}=e;if("months"===r){const e=function(e,t){const r=new Date(e,t+1,1);return r.setDate(0),r.getDate()}(i.getFullYear(),i.getMonth()+t);i.getDate()>e&&i.setDate(e)}i[n](i[s]()+t*a)}return i}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function a(e,t,r){return 0===e?0:e*i[t]/i[r]}},1231:(e,t,r)=>{r.d(t,{Z:()=>g});var i,o=r(43697),s=r(35454),n=r(96674),a=r(5600),l=r(75215),u=(r(67676),r(80442),r(36030)),p=r(71715),d=r(52011),c=r(72729),y=r(86719);const h=new s.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=i=class extends n.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?.value??null}readValueType(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?h.fromJSON(r.fieldValueType):null}clone(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,a.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,a.Cb)()],m.prototype,"description",void 0),(0,o._)([(0,p.r)("description")],m.prototype,"readDescription",null),(0,o._)([(0,a.Cb)({types:c.V5,json:{read:{reader:c.im},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,a.Cb)({type:l.z8,json:{write:!0}})],m.prototype,"length",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,u.J)(y.v)],m.prototype,"type",void 0),(0,o._)([(0,a.Cb)()],m.prototype,"valueType",void 0),(0,o._)([(0,p.r)("valueType",["description"])],m.prototype,"readValueType",null),(0,o._)([(0,a.Cb)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=i=(0,o._)([(0,d.j)("esri.layers.support.Field")],m);const g=m},72729:(e,t,r)=>{r.d(t,{im:()=>T,V5:()=>C}),r(80442);var i,o=r(43697),s=r(22974),n=r(5600),a=(r(75215),r(36030)),l=r(52011),u=r(96674);r(67676);let p=i=class extends u.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new i({name:this.name,code:this.code})}};(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,o._)([(0,n.Cb)({type:[String,Number],json:{write:!0}})],p.prototype,"code",void 0),p=i=(0,o._)([(0,l.j)("esri.layers.support.CodedValue")],p);const d=new(r(35454).X)({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends u.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,o._)([(0,a.J)(d)],c.prototype,"type",void 0),c=(0,o._)([(0,l.j)("esri.layers.support.Domain")],c);const y=c;var h;let m=h=class extends y{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new h({codedValues:(0,s.d9)(this.codedValues),name:this.name})}};(0,o._)([(0,n.Cb)({type:[p],json:{write:!0}})],m.prototype,"codedValues",void 0),(0,o._)([(0,a.J)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=h=(0,o._)([(0,l.j)("esri.layers.support.CodedValueDomain")],m);const g=m;var b;r(92604),r(20102);let v=b=class extends y{constructor(e){super(e),this.type="inherited"}clone(){return new b}};(0,o._)([(0,a.J)({inherited:"inherited"})],v.prototype,"type",void 0),v=b=(0,o._)([(0,l.j)("esri.layers.support.InheritedDomain")],v);const w=v;var _;let f=_=class extends y{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new _({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,o._)([(0,n.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]}}}})],f.prototype,"maxValue",void 0),(0,o._)([(0,n.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]}}}})],f.prototype,"minValue",void 0),(0,o._)([(0,a.J)({range:"range"})],f.prototype,"type",void 0),f=_=(0,o._)([(0,l.j)("esri.layers.support.RangeDomain")],f);const S=f,C={key:"type",base:y,typeMap:{range:f,"coded-value":g,inherited:w}};function T(e){if(!e||!e.type)return null;switch(e.type){case"range":return S.fromJSON(e);case"codedValue":return g.fromJSON(e);case"inherited":return w.fromJSON(e)}return null}},86719:(e,t,r)=>{r.d(t,{v:()=>i});const i=new(r(35454).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},10158:(e,t,r)=>{r.d(t,{n:()=>V});var i,o=r(43697),s=r(35454),n=r(96674),a=r(5600),l=r(90578),u=r(36030),p=r(71715),d=r(52011),c=r(75215),y=r(63213),h=r(1231),m=r(42843),g=(r(66577),r(67676),r(80442),r(82971)),b=r(86973);let v=i=class extends n.wq{constructor(e){super(e),this.type="query-table"}clone(){const{workspaceId:e,query:t,oidFields:r,spatialReference:o,geometryType:s}=this,n={workspaceId:e,query:t,oidFields:r,spatialReference:o?.clone()??void 0,geometryType:s};return new i(n)}};var w;(0,o._)([(0,u.J)({queryTable:"query-table"})],v.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"query",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"oidFields",void 0),(0,o._)([(0,a.Cb)({type:g.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,o._)([(0,u.J)(b.M)],v.prototype,"geometryType",void 0),v=i=(0,o._)([(0,d.j)("esri.layers.support.source.QueryTableDataSource")],v);let _=w=class extends n.wq{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this;return new w({workspaceId:e,dataSourceName:t})}};var f;(0,o._)([(0,u.J)({raster:"raster"})],_.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],_.prototype,"dataSourceName",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],_.prototype,"workspaceId",void 0),_=w=(0,o._)([(0,d.j)("esri.layers.support.source.RasterDataSource")],_);let S=f=class extends n.wq{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:r}=this;return new f({workspaceId:e,gdbVersion:t,dataSourceName:r})}};var C,T;(0,o._)([(0,u.J)({table:"table"})],S.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"gdbVersion",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"dataSourceName",void 0),S=f=(0,o._)([(0,d.j)("esri.layers.support.source.TableDataSource")],S);const j=(0,s.w)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let x=C=class extends n.wq{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,r){return R()(e,t,r)}castLeftTableSource(e){return(0,c.N7)(P(),e)}readRightTableSource(e,t,r){return R()(e,t,r)}castRightTableSource(e){return(0,c.N7)(P(),e)}clone(){const{leftTableKey:e,rightTableKey:t,leftTableSource:r,rightTableSource:i,joinType:o}=this,s={leftTableKey:e,rightTableKey:t,leftTableSource:r?.clone()??void 0,rightTableSource:i?.clone()??void 0,joinType:o};return new C(s)}};(0,o._)([(0,u.J)({joinTable:"join-table"})],x.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"leftTableKey",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"rightTableKey",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"leftTableSource",void 0),(0,o._)([(0,p.r)("leftTableSource")],x.prototype,"readLeftTableSource",null),(0,o._)([(0,l.p)("leftTableSource")],x.prototype,"castLeftTableSource",null),(0,o._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"rightTableSource",void 0),(0,o._)([(0,p.r)("rightTableSource")],x.prototype,"readRightTableSource",null),(0,o._)([(0,l.p)("rightTableSource")],x.prototype,"castRightTableSource",null),(0,o._)([(0,u.J)(j)],x.prototype,"joinType",void 0),x=C=(0,o._)([(0,d.j)("esri.layers.support.source.JoinTableDataSource")],x);let F=null;function R(){return F||(F=(0,y.d)({types:P()})),F}let D=null;function P(){return D||(D={key:"type",base:null,typeMap:{"data-layer":V,"map-layer":m.R}}),D}const O={key:"type",base:null,typeMap:{"join-table":x,"query-table":v,raster:_,table:S}};let V=T=class extends n.wq{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this;return new T({fields:e,dataSource:t})}};(0,o._)([(0,u.J)({dataLayer:"data-layer"})],V.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:[h.Z],json:{write:!0}})],V.prototype,"fields",void 0),(0,o._)([(0,a.Cb)({types:O,json:{write:!0}})],V.prototype,"dataSource",void 0),V=T=(0,o._)([(0,d.j)("esri.layers.support.source.DataLayerSource")],V),V.from=(0,c.se)(V)},42843:(e,t,r)=>{r.d(t,{R:()=>p});var i,o=r(43697),s=r(96674),n=r(5600),a=r(75215),l=(r(67676),r(80442),r(36030)),u=r(52011);let p=i=class extends s.wq{constructor(e){super(e),this.type="map-layer"}clone(){const{mapLayerId:e,gdbVersion:t}=this;return new i({mapLayerId:e,gdbVersion:t})}};(0,o._)([(0,l.J)({mapLayer:"map-layer"})],p.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:a.z8,json:{write:!0}})],p.prototype,"mapLayerId",void 0),(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"gdbVersion",void 0),p=i=(0,o._)([(0,u.j)("esri.layers.support.source.MapLayerSource")],p)},6388:(e,t,r)=>{r.d(t,{Z:()=>y});var i,o=r(43697),s=(r(66577),r(35454)),n=r(96674),a=r(22974),l=r(5600),u=(r(75215),r(52011)),p=r(6570);const d=new s.X({upperLeft:"upper-left",lowerLeft:"lower-left"});let c=i=class extends n.wq{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new i((0,a.d9)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};(0,o._)([(0,l.Cb)({type:p.Z,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],c.prototype,"extent",void 0),(0,o._)([(0,l.Cb)({type:["view","edit"],json:{write:!0}})],c.prototype,"mode",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:d.read,write:d.write}})],c.prototype,"originPosition",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],c.prototype,"tolerance",void 0),c=i=(0,o._)([(0,u.j)("esri.rest.support.QuantizationParameters")],c);const y=c},14165:(e,t,r)=>{r.d(t,{Z:()=>R});var i=r(43697),o=r(66577),s=r(92835),n=r(35454),a=r(96674),l=r(22974),u=r(5600),p=r(90578),d=r(36030),c=r(52011),y=r(30556),h=r(75215),m=r(33955),g=r(10158),b=r(2368);r(67676),r(80442);let v=class extends((0,b.J)(a.wq)){constructor(e){super(e),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};(0,i._)([(0,u.Cb)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.onFields&&this.onFields.length>0}}}}})],v.prototype,"onFields",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],v.prototype,"operator",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],v.prototype,"searchTerm",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],v.prototype,"searchType",void 0),v=(0,i._)([(0,c.j)("esri.rest.support.FullTextSearch")],v);const w=v;var _,f=r(6388),S=r(58539),C=r(82971),T=r(94139);const j=new n.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),x=new n.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let F=_=class extends a.wq{static from(e){return(0,h.TJ)(_,e)}constructor(e){super(e),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(e){return"number"==typeof e||"object"==typeof e?e:null}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeParameterValues(e,t){if(e){const r={};for(const t in e){const i=e[t];Array.isArray(i)?r[t]=i.map((e=>e instanceof Date?e.getTime():e)):i instanceof Date?r[t]=i.getTime():r[t]=i}t.parameterValues=r}}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}writeWhere(e,t){t.where=e||"1=1"}clone(){return new _((0,l.d9)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:null!=this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};F.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,i._)([(0,u.Cb)({json:{write:!0}})],F.prototype,"aggregateIds",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"cacheHint",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"compactGeometryEnabled",void 0),(0,i._)([(0,u.Cb)({json:{write:!0}})],F.prototype,"datumTransformation",void 0),(0,i._)([(0,p.p)("datumTransformation")],F.prototype,"castDatumTransformation",null),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"defaultSpatialReferenceEnabled",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],F.prototype,"distance",void 0),(0,i._)([(0,u.Cb)({type:g.n,json:{write:!0}})],F.prototype,"dynamicDataSource",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],F.prototype,"formatOf3DObjects",void 0),(0,i._)([(0,u.Cb)({type:[w],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.fullText&&this.fullText.length>0}}}}})],F.prototype,"fullText",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],F.prototype,"gdbVersion",void 0),(0,i._)([(0,u.Cb)({types:o.qM,json:{read:m.im,write:!0}})],F.prototype,"geometry",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{write:!0}})],F.prototype,"geometryPrecision",void 0),(0,i._)([(0,u.Cb)({type:[String],json:{write:!0}})],F.prototype,"groupByFieldsForStatistics",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],F.prototype,"having",void 0),(0,i._)([(0,u.Cb)({type:Date})],F.prototype,"historicMoment",void 0),(0,i._)([(0,y.c)("historicMoment")],F.prototype,"writeHistoricMoment",null),(0,i._)([(0,u.Cb)({type:Number,json:{write:!0}})],F.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,u.Cb)({type:Number,cast:e=>e<1?1:e>_.MAX_MAX_RECORD_COUNT_FACTOR?_.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],F.prototype,"maxRecordCountFactor",void 0),(0,i._)([(0,u.Cb)({type:["xyFootprint"],json:{write:!0}})],F.prototype,"multipatchOption",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],F.prototype,"num",void 0),(0,i._)([(0,u.Cb)({json:{write:!0}})],F.prototype,"objectIds",void 0),(0,i._)([(0,u.Cb)({type:[String],json:{write:!0}})],F.prototype,"orderByFields",void 0),(0,i._)([(0,u.Cb)({type:[String],json:{write:!0}})],F.prototype,"outFields",void 0),(0,i._)([(0,u.Cb)({type:C.Z,json:{name:"outSR",write:!0}})],F.prototype,"outSpatialReference",void 0),(0,i._)([(0,u.Cb)({type:[S.Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],F.prototype,"outStatistics",void 0),(0,i._)([(0,u.Cb)({json:{write:!0}})],F.prototype,"parameterValues",void 0),(0,i._)([(0,y.c)("parameterValues")],F.prototype,"writeParameterValues",null),(0,i._)([(0,u.Cb)({type:T.Z,json:{write:!0}})],F.prototype,"pixelSize",void 0),(0,i._)([(0,u.Cb)({type:f.Z,json:{write:!0}})],F.prototype,"quantizationParameters",void 0),(0,i._)([(0,u.Cb)({type:[Object],json:{write:!0}})],F.prototype,"rangeValues",void 0),(0,i._)([(0,u.Cb)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],F.prototype,"relationParameter",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],F.prototype,"resultType",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"returnCentroid",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"returnDistinctValues",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!0,write:!0}})],F.prototype,"returnExceededLimitFeatures",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"returnGeometry",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"returnQueryGeometry",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"returnM",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],F.prototype,"returnZ",void 0),(0,i._)([(0,u.Cb)({type:C.Z,json:{write:!0}})],F.prototype,"sourceSpatialReference",void 0),(0,i._)([(0,d.J)(j,{ignoreUnknown:!1,name:"spatialRel"})],F.prototype,"spatialRelationship",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],F.prototype,"start",void 0),(0,i._)([(0,y.c)("start"),(0,y.c)("num")],F.prototype,"writeStart",null),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],F.prototype,"sqlFormat",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],F.prototype,"text",void 0),(0,i._)([(0,u.Cb)({type:s.Z,json:{write:!0}})],F.prototype,"timeExtent",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"timeReferenceUnknownClient",void 0),(0,i._)([(0,d.J)(x,{ignoreUnknown:!1}),(0,u.Cb)({json:{write:{overridePolicy(e){return{enabled:!!e&&null!=this.distance&&this.distance>0}}}}})],F.prototype,"units",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||null!=this.start&&this.start>0}}}}})],F.prototype,"where",void 0),(0,i._)([(0,y.c)("where")],F.prototype,"writeWhere",null),F=_=(0,i._)([(0,c.j)("esri.rest.support.Query")],F);const R=F},58539:(e,t,r)=>{r.d(t,{Z:()=>y});var i,o=r(43697),s=r(35454),n=r(96674),a=r(22974),l=r(5600),u=(r(75215),r(52011)),p=r(30556);const d=new s.X({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let c=i=class extends n.wq{constructor(e){super(e),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=(0,a.d9)(e))}clone(){return new i({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,a.d9)(this.statisticParameters)})}};(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxPointCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxRecordCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxVertexCount",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"outStatisticFieldName",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:{source:"statisticType",reader:d.read},write:{target:"statisticType",writer:d.write}}})],c.prototype,"statisticType",void 0),(0,o._)([(0,l.Cb)({type:Object})],c.prototype,"statisticParameters",void 0),(0,o._)([(0,p.c)("statisticParameters")],c.prototype,"writeStatisticParameters",null),c=i=(0,o._)([(0,u.j)("esri.rest.support.StatisticDefinition")],c);const y=c}}]);