"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[826,5732],{5732:(e,t,r)=>{r.d(t,{c:()=>s,g:()=>i});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},42033:(e,t,r)=>{async function s(e,t){const{WhereClause:s}=await Promise.all([r.e(8968),r.e(8592)]).then(r.bind(r,8968));return s.create(e,t)}function i(e,t){return null!=e?null!=t?`(${e}) AND (${t})`:e:t}r.d(t,{E:()=>s,_:()=>i})},1542:(e,t,r)=>{r.d(t,{A4:()=>n,L9:()=>o,yV:()=>i});var s=r(17126);class i{}function n(e){return e instanceof s.ld?e===i.instance:"unknown"===e?.toString().toLowerCase()}function o(e){return n(e)?i.instance:e}i.instance=new s.vF("Etc/UTC")},60437:(e,t,r)=>{r.d(t,{G_:()=>v,HH:()=>o,JR:()=>h,TC:()=>l,Tn:()=>d,Ue:()=>i,al:()=>n,bZ:()=>m,cS:()=>y,dp:()=>u,fS:()=>g,is:()=>f,op:()=>p,pp:()=>a,t8:()=>c});var s=r(6570);function i(e=w){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function n(e,t,r,s,n,o,l=i()){return l[0]=e,l[1]=t,l[2]=r,l[3]=s,l[4]=n,l[5]=o,l}function o(e,t){const r=isFinite(e[2])||isFinite(e[5]);return new s.Z(r?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function p(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function d(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function c(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function y(e){return e?c(e,v):i(v)}function h(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function m(e,t,r,s,i){return e[0]=t,e[1]=r,e[2]=Number.NEGATIVE_INFINITY,e[3]=s,e[4]=i,e[5]=Number.POSITIVE_INFINITY,e}function f(e){return 6===e.length}function g(e,t,r){if(null==e||null==t)return e===t;if(!f(e)||!f(t))return!1;if(r){for(let s=0;s<e.length;s++)if(!r(e[s],t[s]))return!1}else for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}r(24470);const v=[1/0,1/0,1/0,-1/0,-1/0,-1/0],w=[0,0,0,0,0,0];i()},5428:(e,t,r)=>{r.d(t,{Z:()=>s});class s{constructor(e=[],t=[],r=!1){this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=r}static fromRect(e){const[t,r,i,n]=e,o=i-t,l=n-r;return new s([5],[t,r,o,0,0,l,-o,0,0,-l])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let s=0;for(const e of r){for(let r=1;r<e;r++)t[2*(s+r)]+=t[2*(s+r)-2],t[2*(s+r)+1]+=t[2*(s+r)-1];s+=e}return e}clone(e){if(0===this.lengths.length)return new s([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new s(this.lengths,e,this.hasIndeterminateRingOrder)):new s(Array.from(this.lengths),Array.from(r),this.hasIndeterminateRingOrder)}}},54295:(e,t,r)=>{r.d(t,{V:()=>o});var s=r(43697),i=r(5600),n=(r(80442),r(92604),r(77734),r(52011));const o=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,n.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>a});var s=r(43697),i=r(92604),n=r(5600),o=(r(80442),r(77734),r(52011)),l=r(66677);const a=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.Nm)(e,i.Z.getLogger(this)))}};return(0,s._)([(0,n.Cb)()],t.prototype,"title",null),(0,s._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,o.j)("esri.layers.mixins.ArcGISService")],t),t}},17017:(e,t,r)=>{r.d(t,{N:()=>o});var s=r(43697),i=r(5600),n=(r(80442),r(92604),r(77734),r(52011));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,s._)([(0,i.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,s._)([(0,n.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>d});var s=r(43697),i=r(2368),n=r(35454),o=r(96674),l=r(5600),a=(r(80442),r(92604),r(77734),r(52011));const u=new n.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let p=class extends((0,i.J)(o.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,s._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"name",void 0),(0,s._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"description",void 0),(0,s._)([(0,l.Cb)({json:{read:u.read,write:u.write}})],p.prototype,"drawingTool",void 0),(0,s._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"prototype",void 0),(0,s._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"thumbnail",void 0),p=(0,s._)([(0,a.j)("esri.layers.support.FeatureTemplate")],p);const d=p},16451:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(43697),i=r(2368),n=r(96674),o=r(5600),l=(r(80442),r(92604),r(77734),r(71715)),a=r(52011),u=r(30556),p=r(72729),d=r(70082);let c=class extends((0,i.J)(n.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,p.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,s._)([(0,o.Cb)({json:{write:!0}})],c.prototype,"id",void 0),(0,s._)([(0,o.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,s._)([(0,o.Cb)({json:{write:!0}})],c.prototype,"domains",void 0),(0,s._)([(0,l.r)("domains")],c.prototype,"readDomains",null),(0,s._)([(0,u.c)("domains")],c.prototype,"writeDomains",null),(0,s._)([(0,o.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,s._)([(0,a.j)("esri.layers.support.FeatureType")],c);const y=c},1231:(e,t,r)=>{r.d(t,{Z:()=>f});var s,i=r(43697),n=r(35454),o=r(96674),l=r(5600),a=r(75215),u=(r(77734),r(80442),r(36030)),p=r(71715),d=r(52011),c=r(72729),y=r(86719);const h=new n.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=s=class extends o.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?.value??null}readValueType(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?h.fromJSON(r.fieldValueType):null}clone(){return new s({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,i._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,i._)([(0,l.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,i._)([(0,l.Cb)()],m.prototype,"description",void 0),(0,i._)([(0,p.r)("description")],m.prototype,"readDescription",null),(0,i._)([(0,l.Cb)({types:c.V5,json:{read:{reader:c.im},write:!0}})],m.prototype,"domain",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,i._)([(0,l.Cb)({type:a.z8,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],m.prototype,"length",void 0),(0,i._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,i._)([(0,u.J)(y.v)],m.prototype,"type",void 0),(0,i._)([(0,l.Cb)()],m.prototype,"valueType",void 0),(0,i._)([(0,p.r)("valueType",["description"])],m.prototype,"readValueType",null),(0,i._)([(0,l.Cb)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=s=(0,i._)([(0,d.j)("esri.layers.support.Field")],m);const f=m},99514:(e,t,r)=>{r.d(t,{Z:()=>c});var s=r(20102),i=r(96674),n=r(92604),o=r(30175),l=r(1542),a=r(73012),u=r(25031),p=r(17126);const d=new Map;class c{static fromJSON(e){return new c(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new c(e.fields??[],f(e))}static fromLayerJSON(e){return new c(e.fields??[],f(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const r=[];for(const e of this.fields){const t=e?.name,s=h(t);if(t&&s){const i=y(t);this._fieldsMap.set(t,e),this._fieldsMap.set(i,e),this._normalizedFieldsMap.set(s,e),r.push(`${i}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),(0,a.y2)(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):(0,a.H7)(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),(0,a.Dl)(e)||(0,a.Se)(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}r.sort(),this.uid=r.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,a.Dl)(e)||(0,a.Se)(e)||e.nullable||void 0!==(0,a.os)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(y(e))??this._normalizedFieldsMap.get(h(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(n.Z.getLogger("esri.layers.support.FieldsIndex").error(new s.Z("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u.pt):m.has(t.type)?u._4:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u._4?l.yV.instance:t===u.pt?p.Qf.utcInstance:(0,o.s1)(d,t,(()=>p.vF.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,a.sX)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,i.AK)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function y(e){return e.trim().toLowerCase()}function h(e){return(0,a.q6)(e)?.toLowerCase()??""}const m=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function f(e){const t=new Map;if(!e.fields)return t;const r=!0===e.datesInUnknownTimezone,{timeInfo:s,editFieldsInfo:i}=e,n=(s?"startField"in s?s.startField:s.startTimeField:"")??"",o=(s?"endField"in s?s.endField:s.endTimeField:"")??"",l=function(e){return"dateFieldsTimeZone"in e}(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,u.Jv)(e.dateFieldsTimeReference):null,a=i?function(e){return"timeZone"in e}(i)?i.timeZone??l:i.dateFieldsTimeReference?(0,u.Jv)(i.dateFieldsTimeReference):l??u.pt:null,p=s?function(e){return"timeZone"in e}(s)?s.timeZone??l:s.timeReference?(0,u.Jv)(s.timeReference):l:null,d=new Map([[y(i?.creationDateField??""),a],[y(i?.editDateField??""),a],[y(n),p],[y(o),p]]);for(const{name:s,type:i}of e.fields)if(m.has(i))t.set(s,u._4);else if("date"!==i&&"esriFieldTypeDate"!==i)t.set(s,null);else if(r)t.set(s,u._4);else{const e=d.get(y(s??""))??l;t.set(s,e)}return t}},56765:(e,t,r)=>{r.d(t,{Z:()=>p});var s,i=r(43697),n=r(46791),o=r(96674),l=r(5600),a=(r(80442),r(92604),r(77734),r(52011));let u=s=class extends o.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new n.Z}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,i._)([(0,l.Cb)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=s=(0,i._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],u);const p=u},72729:(e,t,r)=>{r.d(t,{im:()=>C,V5:()=>b}),r(80442);var s,i=r(43697),n=r(22974),o=r(5600),l=(r(92604),r(36030)),a=r(52011),u=r(96674);r(77734);let p=s=class extends u.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new s({name:this.name,code:this.code})}};(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,i._)([(0,o.Cb)({type:[String,Number],json:{write:!0}})],p.prototype,"code",void 0),p=s=(0,i._)([(0,a.j)("esri.layers.support.CodedValue")],p);const d=new(r(35454).X)({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends u.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,i._)([(0,l.J)(d)],c.prototype,"type",void 0),c=(0,i._)([(0,a.j)("esri.layers.support.Domain")],c);const y=c;var h;let m=h=class extends y{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new h({codedValues:(0,n.d9)(this.codedValues),name:this.name})}};(0,i._)([(0,o.Cb)({type:[p],json:{write:!0}})],m.prototype,"codedValues",void 0),(0,i._)([(0,l.J)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=h=(0,i._)([(0,a.j)("esri.layers.support.CodedValueDomain")],m);const f=m;var g;r(20102);let v=g=class extends y{constructor(e){super(e),this.type="inherited"}clone(){return new g}};(0,i._)([(0,l.J)({inherited:"inherited"})],v.prototype,"type",void 0),v=g=(0,i._)([(0,a.j)("esri.layers.support.InheritedDomain")],v);const w=v;var F;let T=F=class extends y{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new F({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,i._)([(0,o.Cb)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]}}}})],T.prototype,"maxValue",void 0),(0,i._)([(0,o.Cb)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]}}}})],T.prototype,"minValue",void 0),(0,i._)([(0,l.J)({range:"range"})],T.prototype,"type",void 0),T=F=(0,i._)([(0,a.j)("esri.layers.support.RangeDomain")],T);const _=T,b={key:"type",base:y,typeMap:{range:T,"coded-value":f,inherited:w}};function C(e){if(!e?.type)return null;switch(e.type){case"range":return _.fromJSON(e);case"codedValue":return f.fromJSON(e);case"inherited":return w.fromJSON(e)}return null}},86719:(e,t,r)=>{r.d(t,{v:()=>s});const s=new(r(35454).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},54275:(e,t,r)=>{r.d(t,{h:()=>d});var s=r(80442),i=r(66677);function n(e,t,r){return!!l(e,t,r)}function o(e,t,r){return l(e,t,r)}function l(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const a={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function u(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function p(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e,t){return{analytics:c(e),attachment:y(e),data:h(e),metadata:m(e),operations:f(e.capabilities,e,t),query:g(e,t),queryRelated:v(e),queryTopFeatures:w(e),editing:F(e)}}function c(e){return{supportsCacheHint:p(e.advancedQueryCapabilities,"queryAnalytics")}}function y(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:p(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:n(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=a[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:n(e,"isDataVersioned",!1),supportsAttachment:n(e,"hasAttachments",!1),supportsM:n(e,"hasM",!1),supportsZ:n(e,"hasZ",!1)}}function m(e){return{supportsAdvancedFieldProperties:n(e,"supportsFieldDescriptionProperty",!1)}}function f(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],o=r?(0,i.Qc)(r):null,l=s.includes(null!=o&&"MapServer"===o.serverType?"data":"query"),a=s.includes("editing")&&!t.datesInUnknownTimezone;let u=a&&s.includes("create"),p=a&&s.includes("delete"),d=a&&s.includes("update");const c=s.includes("changetracking"),y=t.advancedQueryCapabilities;return a&&!(u||p||d)&&(u=p=d=!0),{supportsCalculate:n(t,"supportsCalculate",!1),supportsTruncate:n(t,"supportsTruncate",!1),supportsValidateSql:n(t,"supportsValidateSql",!1),supportsAdd:u,supportsDelete:p,supportsEditing:a,supportsChangeTracking:c,supportsQuery:l,supportsQueryAnalytics:n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:n(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:n(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:n(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:n(t,"supportsAsyncConvert3D",!1)}}function g(e,t){const r=e.advancedQueryCapabilities,l=e.ownershipBasedAccessControlForFeatures,a=e.archivingInfo,d=e.currentVersion,c=t?.includes("MapServer"),y=!c||d>=(0,s.Z)("mapserver-pbf-version-support"),h=(0,i.M8)(t),m=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:n(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:n(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:n(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:u(r),supportsCentroid:n(r,"supportsReturningGeometryCentroid",!1),supportsDistance:n(r,"supportsQueryWithDistance",!1),supportsDistinct:n(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:n(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:n(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:n(r,"supportsHavingClause",!1),supportsOrderBy:n(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:n(r,"supportsPagination",!1),supportsQuantization:n(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:n(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:n(e,"supportsReturningQueryGeometry",!1),supportsResultType:n(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:n(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:n(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:n(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:n(r,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:n(l,"allowAnonymousToQuery",!0),supportsQueryByOthers:n(l,"allowOthersToQuery",!0),supportsHistoricMoment:n(a,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&m.has("pbf"),supportsDisjointSpatialRelationship:n(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:n(r,"supportsQueryWithCacheHint",!1)||p(r,"query"),supportsDefaultSpatialReference:n(r,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:n(r,"supportsFullTextSearch",!1),maxRecordCountFactor:o(e,"maxRecordCountFactor",void 0),maxRecordCount:o(e,"maxRecordCount",void 0),standardMaxRecordCount:o(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:o(e,"tileMaxRecordCount",void 0)}}function v(e){const t=e.advancedQueryCapabilities,r=n(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:n(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:p(t,"queryRelated")}}function w(e){return{supportsCacheHint:p(e.advancedQueryCapabilities,"queryTopFilter")}}function F(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:n(e,"allowGeometryUpdates",!0),supportsGlobalId:n(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:n(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:n(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:n(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:n(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:n(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:n(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:n(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:n(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:n(r,"supportsAsyncApplyEdits",!1),zDefault:o(e,"zDefault",void 0)}}},28694:(e,t,r)=>{r.d(t,{p:()=>i});var s=r(69285);function i(e,t,r){if(!r?.features||!r.hasZ)return;const i=(0,s.k)(r.geometryType,t,e.outSpatialReference);if(null!=i)for(const e of r.features)i(e.geometry)}},74889:(e,t,r)=>{r.d(t,{Z:()=>w});var s,i=r(43697),n=r(66577),o=r(38171),l=r(35454),a=r(96674),u=r(22974),p=r(5600),d=(r(80442),r(92604),r(71715)),c=r(52011),y=r(30556),h=r(82971),m=r(33955),f=r(1231);const g=new l.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=s=class extends a.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=h.Z.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const i=e[t],n=o.Z.fromJSON(i),l=i.geometry?.spatialReference;null==n.geometry||l||(n.geometry.spatialReference=r);const a=i.aggregateGeometries,u=n.aggregateGeometries;if(a&&null!=u)for(const e in u){const t=u[e],s=a[e],i=s?.spatialReference;null==t||i||(t.spatialReference=r)}s.push(n)}return s}writeGeometryType(e,t,r,s){if(e)return void g.write(e,t,r,s);const{features:i}=this;if(i)for(const e of i)if(null!=e?.geometry)return void g.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,m.im)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=h.Z.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,u.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e?.[r];s.geometry=t?.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,i]}=e,n=this.features,o=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((i-e)/r)));for(let e=0,t=n.length;e<t;e++)o?.(n[e].geometry)||(n.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,i],scale:[n,o]}=r;let l=null,a=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;l=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;a=r=>null==r?r:r*t+e}const u=this._getHydrationFunction(e,(e=>e*n+s),(e=>i-e*o),l,a);for(const{geometry:e}of t)null!=e&&u&&u(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,i;const n=[];for(let o=0,l=e.length;o<l;o++){const l=e[o];if(o>0){const e=t(l[0]),o=r(l[1]);e===s&&o===i||(n.push([e-s,o-i]),s=e,i=o)}else s=t(l[0]),i=r(l[1]),n.push([s,i])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,m.oU)(e)?e.rings:e.paths,i=[];for(let e=0,n=s.length;e<n;e++){const n=s[e],o=this._quantizePoints(n,t,r);o&&i.push(o)}return i.length>0?((0,m.oU)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,s,i){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),s&&(e.z=s(e.z))}:"polyline"===e||"polygon"===e?e=>{const n=(0,m.oU)(e)?e.rings:e.paths;let o,l;for(let e=0,s=n.length;e<s;e++){const s=n[e];for(let e=0,i=s.length;e<i;e++){const i=s[e];e>0?(o+=i[0],l+=i[1]):(o=i[0],l=i[1]),i[0]=t(o),i[1]=r(l)}}if(s&&i)for(let e=0,t=n.length;e<t;e++){const t=n[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=s(r[2]),r[3]=i(r[3])}}else if(s)for(let e=0,t=n.length;e<t;e++){const t=n[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=s(r[2])}}else if(i)for(let e=0,t=n.length;e<t;e++){const t=n[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=i(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),s&&null!=e.zmax&&null!=e.zmin&&(e.zmax=s(e.zmax),e.zmin=s(e.zmin)),i&&null!=e.mmax&&null!=e.mmin&&(e.mmax=i(e.mmax),e.mmin=i(e.mmin))}:"multipoint"===e?e=>{const n=e.points;let o,l;for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(o+=s[0],l+=s[1]):(o=s[0],l=s[1]),s[0]=t(o),s[1]=r(l)}if(s&&i)for(let e=0,t=n.length;e<t;e++){const t=n[e];t[2]=s(t[2]),t[3]=i(t[3])}else if(s)for(let e=0,t=n.length;e<t;e++){const t=n[e];t[2]=s(t[2])}else if(i)for(let e=0,t=n.length;e<t;e++){const t=n[e];t[2]=i(t[2])}}:null}};(0,i._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,p.Cb)({type:[o.Z],json:{write:!0}})],v.prototype,"features",void 0),(0,i._)([(0,d.r)("features")],v.prototype,"readFeatures",null),(0,i._)([(0,p.Cb)({type:[f.Z],json:{write:!0}})],v.prototype,"fields",void 0),(0,i._)([(0,p.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],v.prototype,"geometryType",void 0),(0,i._)([(0,y.c)("geometryType")],v.prototype,"writeGeometryType",null),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,i._)([(0,p.Cb)({types:n.qM,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,i._)([(0,d.r)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,i._)([(0,p.Cb)({type:h.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,i._)([(0,y.c)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,i._)([(0,p.Cb)({json:{write:!0}})],v.prototype,"transform",void 0),v=s=(0,i._)([(0,c.j)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const w=v}}]);