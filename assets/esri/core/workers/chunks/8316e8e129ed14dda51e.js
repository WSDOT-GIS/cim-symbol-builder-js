"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6470,3069],{39516:(e,t,n)=>{async function i(e,t){const{WhereClause:i}=await Promise.all([n.e(835),n.e(4800)]).then(n.bind(n,50835));return i.create(e,t)}function r(e,t){return"1=1"===e?t??e:"1=1"===t?e??t:null!=e&&""!==e?null!=t&&""!==t?`(${e}) AND (${t})`:e:t}n.d(t,{G:()=>i,m:()=>r})},3330:(e,t,n)=>{n.d(t,{GB:()=>r,Qo:()=>o,Y4:()=>s});var i=n(96285);class r{}function s(e){return e instanceof i.bo?e===r.instance:"unknown"===e?.toString().toLowerCase()}function o(e){return s(e)?r.instance:e}r.instance=new i.oh("Etc/UTC")},13069:(e,t,n)=>{n.d(t,{lk:()=>r,vD:()=>o,yS:()=>s});const i="randomUUID"in crypto;function r(){if(i)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function s(){return`{${r().toUpperCase()}}`}function o(){return`{${r()}}`}},70328:(e,t,n)=>{n.d(t,{BI:()=>h,Ej:()=>p,Hq:()=>u,Ie:()=>m,Jt:()=>y,Ne:()=>c,RF:()=>l,aI:()=>x,fA:()=>s,hZ:()=>f,iT:()=>a,is:()=>g,qv:()=>w,vI:()=>d,v_:()=>_,vt:()=>r,w1:()=>o});var i=n(5443);function r(e=_){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function s(e,t,n,i,s,o,l=r()){return l[0]=e,l[1]=t,l[2]=n,l[3]=i,l[4]=s,l[5]=o,l}function o(e,t){const n=isFinite(e[2])||isFinite(e[5]);return new i.A(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,n=0,i=t.length/3){let r=e[0],s=e[1],o=e[2],l=e[3],a=e[4],u=e[5];for(let e=0;e<i;e++)r=Math.min(r,t[n+3*e]),s=Math.min(s,t[n+3*e+1]),o=Math.min(o,t[n+3*e+2]),l=Math.max(l,t[n+3*e]),a=Math.max(a,t[n+3*e+1]),u=Math.max(u,t[n+3*e+2]);e[0]=r,e[1]=s,e[2]=o,e[3]=l,e[4]=a,e[5]=u}function p(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function c(e,t,n=e){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n!==e&&(n[3]=e[3],n[4]=e[4],n[5]=e[5]),n}function d(e,t,n=e){return n[3]=t[0],n[4]=t[1],n[5]=t[2],n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),e}function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function m(e){return e?f(e,w):r(w)}function y(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function h(e,t,n,i,r){return e[0]=t,e[1]=n,e[2]=Number.NEGATIVE_INFINITY,e[3]=i,e[4]=r,e[5]=Number.POSITIVE_INFINITY,e}function g(e){return 6===e.length}function x(e,t,n){if(null==e||null==t)return e===t;if(!g(e)||!g(t))return!1;if(n){for(let i=0;i<e.length;i++)if(!n(e[i],t[i]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}n(19419);const w=[1/0,1/0,1/0,-1/0,-1/0,-1/0],_=[0,0,0,0,0,0];r()},17136:(e,t,n)=>{n.d(t,{el:()=>v});var i=n(92602),r=n(49186),s=n(53966),o=n(39829),l=n(82799),a=n(80754),u=n(21325),p=n(28735),c=(n(59456),n(78888)),d=n(65864),f=n(2272),m=n(84952),y=n(92300);const h=()=>s.A.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function x(e){return"polyline"===e[0].type}function w(e,t,n){if(t){const t=function(e,t){if(!(e instanceof l.A||e instanceof o.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw h().error(e),new r.A(e)}const n=(0,a.r8)(e),i=[];for(const e of n){const n=[];i.push(n),n.push([e[0][0],e[0][1]]);for(let i=0;i<e.length-1;i++){const r=e[i][0],s=e[i][1],o=e[i+1][0],l=e[i+1][1],a=Math.sqrt((o-r)*(o-r)+(l-s)*(l-s)),u=(l-s)/a,p=(o-r)/a,c=a/t;if(c>1){for(let e=1;e<=c-1;e++){const i=e*t,o=p*i+r,l=u*i+s;n.push([o,l])}const e=(a+Math.floor(c-1)*t)/2,i=p*e+r,o=u*e+s;n.push([i,o])}n.push([o,l])}}return function(e){return"polygon"===e.type}(e)?new o.A({rings:i,spatialReference:e.spatialReference}):new l.A({paths:i,spatialReference:e.spatialReference})}(e,1e6);e=(0,p.ci)(t,!0)}return n&&(e=(0,a.kS)(e,n)),e}function _(e,t,n){if(Array.isArray(e)){const i=e[0];if(i>t){const n=(0,a.kd)(i,t);e[0]=i+n*(-2*t)}else if(i<n){const t=(0,a.kd)(i,n);e[0]=i+t*(-2*n)}}else{const i=e.x;if(i>t){const n=(0,a.kd)(i,t);e=e.clone().offset(n*(-2*t),0)}else if(i<n){const t=(0,a.kd)(i,n);e=e.clone().offset(t*(-2*n),0)}}return e}function F(e,t){let n=-1;for(let i=0;i<t.cutIndexes.length;i++){const r=t.cutIndexes[i],s=t.geometries[i],o=(0,a.r8)(s);for(let e=0;e<o.length;e++){const t=o[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const i=t[e][0];n=i>n?i:n}n=Number(n.toFixed(9));const i=-360*(0,a.kd)(n,180);for(let n=0;n<t.length;n++){const t=s.getPoint(e,n);s.setPoint(e,n,t.clone().offset(i,0))}return!0}}))}if(r===n){if(g(e))for(const t of(0,a.r8)(s))e[r]=e[r].addRing(t);else if(x(e))for(const t of(0,a.r8)(s))e[r]=e[r].addPath(t)}else n=r,e[r]=s}return e}async function v(e,t,n){if(!Array.isArray(e))return v([e],t);t&&"string"!=typeof t&&h().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const r="string"==typeof t?t:t?.url??i.A.geometryServiceUrl;let s,g,x,T,M,S,N,b,R=0;const A=[],Z=[];for(const t of e)if(null!=t)if(s||(s=t.spatialReference,g=(0,u.Vp)(s),x=s.isWebMercator,S=x?102100:4326,T=a.j7[S].maxX,M=a.j7[S].minX,N=a.j7[S].plus180Line,b=a.j7[S].minus180Line),g)if("mesh"===t.type)Z.push(t);else if("point"===t.type)Z.push(_(t.clone(),T,M));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>_(e,T,M))),Z.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,g);Z.push(e.rings?new o.A(e):e)}else if(t.extent){const e=t.extent,n=(0,a.kd)(e.xmin,M)*(2*T);let i=0===n?t.clone():(0,a.kS)(t.clone(),n);e.offset(n,0);let{xmin:r,xmax:s}=e;r=Number(r.toFixed(9)),s=Number(s.toFixed(9)),e.intersects(N)&&s!==T?(R=s>R?s:R,i=w(i,x),A.push(i),Z.push("cut")):e.intersects(b)&&r!==M?(R=s*(2*T)>R?s*(2*T):R,i=w(i,x,360),A.push(i),Z.push("cut")):Z.push(i)}else Z.push(t.clone());else Z.push(t);else Z.push(t);let O=(0,a.kd)(R,T),I=-90;const j=O,V=new l.A;for(;O>0;){const e=360*O-180;V.addPath([[e,I],[e,-1*I]]),I*=-1,O--}if(A.length>0&&j>0){const t=F(A,await async function(e,t,n,i){const r=(0,f.Dl)(e),s=t[0].spatialReference,o={...i,responseType:"json",query:{...r.query,f:"json",sr:(0,u.YX)(s),target:JSON.stringify({geometryType:(0,d.$B)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},l=await(0,c.A)(r.path+"/cut",o),{cutIndexes:a,geometries:p=[]}=l.data;return{cutIndexes:a,geometries:p.map((e=>{const t=(0,d.rS)(e);return t.spatialReference=s,t}))}}(r,A,V,n)),i=[],s=[];for(let n=0;n<Z.length;n++){const r=Z[n];if("cut"!==r)s.push(r);else{const r=t.shift(),o=e[n];null!=o&&"polygon"===o.type&&o.rings&&o.rings.length>1&&r.rings.length>=o.rings.length?(i.push(r),s.push("simplify")):s.push(x?(0,p.Gh)(r):r)}}if(!i.length)return s;const o=await async function(e,t,n){const i="string"==typeof e?(0,m.An)(e):e,r=t[0].spatialReference,s=(0,d.$B)(t[0]),o={...n,query:{...i.query,f:"json",sr:(0,u.YX)(r),geometries:JSON.stringify((0,y.X)(t))}},{data:l}=await(0,c.A)(i.path+"/simplify",o);return(0,y.V)(l.geometries,s,r)}(r,i,n),l=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?l.push(t):l.push(x?(0,p.Gh)(o.shift()):o.shift())}return l}const D=[];for(let e=0;e<Z.length;e++){const t=Z[e];if("cut"!==t)D.push(t);else{const e=A.shift();D.push(!0===x?(0,p.Gh)(e):e)}}return D}},80754:(e,t,n)=>{n.d(t,{j7:()=>o,kS:()=>a,kd:()=>l,r8:()=>u});var i=n(82799),r=n(16930),s=n(65864);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new i.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator}),minus180Line:new i.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new i.A({paths:[[[180,-180],[180,180]]],spatialReference:r.A.WGS84}),minus180Line:new i.A({paths:[[[-180,-180],[-180,180]]],spatialReference:r.A.WGS84})}};function l(e,t){return Math.ceil((e-t)/(2*t))}function a(e,t){const n=u(e);for(const e of n)for(const n of e)n[0]+=t;return e}function u(e){return(0,s.Bi)(e)?e.rings:e.paths}},33143:(e,t,n)=>{n.d(t,{A:()=>f});var i=n(90237),r=n(69540),s=n(25482),o=n(10107),l=(n(44208),n(53966),n(87811),n(36005)),a=n(40608),u=n(43937),p=n(72088),c=n(29005);let d=class extends((0,r.O)(s.oY)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const n of Object.keys(e))t[n]=(0,p.rS)(e[n]);return t}writeDomains(e,t){const n={};for(const t of Object.keys(e))e[t]&&(n[t]=e[t]?.toJSON());t.domains=n}};(0,i._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"id",void 0),(0,i._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"name",void 0),(0,i._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"domains",void 0),(0,i._)([(0,l.w)("domains")],d.prototype,"readDomains",null),(0,i._)([(0,u.K)("domains")],d.prototype,"writeDomains",null),(0,i._)([(0,o.MZ)({type:[c.A],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,i._)([(0,a.$)("esri.layers.support.FeatureType")],d);const f=d},20437:(e,t,n)=>{n.d(t,{A:()=>h});var i,r=n(90237),s=n(66552),o=n(25482),l=n(10107),a=n(56507),u=(n(87811),n(44208),n(93223)),p=n(36005),c=n(40608),d=n(72088),f=n(98453);const m=new s.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let y=i=class extends o.oY{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?.value??null}readValueType(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?m.fromJSON(n.fieldValueType):null}clone(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,r._)([(0,l.MZ)({type:String,json:{write:!0}})],y.prototype,"alias",void 0),(0,r._)([(0,l.MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],y.prototype,"defaultValue",void 0),(0,r._)([(0,l.MZ)()],y.prototype,"description",void 0),(0,r._)([(0,p.w)("description")],y.prototype,"readDescription",null),(0,r._)([(0,l.MZ)({types:d.gK,json:{read:{reader:d.rS},write:!0}})],y.prototype,"domain",void 0),(0,r._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"editable",void 0),(0,r._)([(0,l.MZ)({type:a.jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],y.prototype,"length",void 0),(0,r._)([(0,l.MZ)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,r._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"nullable",void 0),(0,r._)([(0,u.e)(f.m)],y.prototype,"type",void 0),(0,r._)([(0,l.MZ)()],y.prototype,"valueType",void 0),(0,r._)([(0,p.w)("valueType",["description"])],y.prototype,"readValueType",null),(0,r._)([(0,l.MZ)({type:Boolean,json:{read:!1}})],y.prototype,"visible",void 0),y=i=(0,r._)([(0,c.$)("esri.layers.support.Field")],y);const h=y},95466:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(49186),r=n(25482),s=n(53966),o=n(91869),l=n(3330),a=n(30524),u=n(56400),p=n(96285);const c=new Map;class d{static fromJSON(e){return new d(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new d(e.fields??[],h(e))}static fromLayerJSON(e){return new d(e.fields??[],h(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const n=[];for(const e of this.fields){const t=e?.name,i=m(t);if(t&&i){const r=f(t);this._fieldsMap.set(t,e),this._fieldsMap.set(r,e),this._normalizedFieldsMap.set(i,e),n.push(`${r}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),(0,a.vE)(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):(0,a.WA)(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),(0,a.te)(e)||(0,a.Xz)(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,a.te)(e)||(0,a.Xz)(e)||e.nullable||void 0!==(0,a.lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(f(e))??this._normalizedFieldsMap.get(m(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(s.A.getLogger("esri.layers.support.FieldsIndex").error(new i.A("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u.n$):y.has(t.type)?u.L5:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.L5?l.GB.instance:t===u.n$?p.mQ.utcInstance:(0,o.tE)(c,t,(()=>p.oh.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,a.OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,r.Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function f(e){return e.trim().toLowerCase()}function m(e){return(0,a.rS)(e)?.toLowerCase()??""}const y=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function h(e){const t=new Map;if(!e.fields)return t;const n=!0===e.datesInUnknownTimezone,{timeInfo:i,editFieldsInfo:r}=e,s=(i?"startField"in i?i.startField:i.startTimeField:"")??"",o=(i?"endField"in i?i.endField:i.endTimeField:"")??"",l=function(e){return"dateFieldsTimeZone"in e}(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,u.ZS)(e.dateFieldsTimeReference):null,a=r?function(e){return"timeZone"in e}(r)?r.timeZone??l:r.dateFieldsTimeReference?(0,u.ZS)(r.dateFieldsTimeReference):l??u.n$:null,p=i?function(e){return"timeZone"in e}(i)?i.timeZone??l:i.timeReference?(0,u.ZS)(i.timeReference):l:null,c=new Map([[f(r?.creationDateField??""),a],[f(r?.editDateField??""),a],[f(s),p],[f(o),p]]);for(const{name:i,type:r}of e.fields)if(y.has(r))t.set(i,u.L5);else if("date"!==r&&"esriFieldTypeDate"!==r)t.set(i,null);else if(n)t.set(i,u.L5);else{const e=c.get(f(i??""))??l;t.set(i,e)}return t}},72088:(e,t,n)=>{n.d(t,{rS:()=>M,gK:()=>T}),n(44208);var i,r=n(90237),s=n(4718),o=n(10107),l=(n(53966),n(93223)),a=n(40608),u=n(25482);n(87811);let p=i=class extends u.oY{constructor(e){super(e),this.name=null,this.code=null}clone(){return new i({name:this.name,code:this.code})}};(0,r._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,r._)([(0,o.MZ)({type:[String,Number],json:{write:!0}})],p.prototype,"code",void 0),p=i=(0,r._)([(0,a.$)("esri.layers.support.CodedValue")],p);const c=new(n(66552).J)({inherited:"inherited",codedValue:"coded-value",range:"range"});let d=class extends u.oY{constructor(e){super(e),this.name=null,this.type=null}};(0,r._)([(0,o.MZ)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,r._)([(0,l.e)(c)],d.prototype,"type",void 0),d=(0,r._)([(0,a.$)("esri.layers.support.Domain")],d);const f=d;var m;let y=m=class extends f{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new m({codedValues:(0,s.o8)(this.codedValues),name:this.name})}};(0,r._)([(0,o.MZ)({type:[p],json:{write:!0}})],y.prototype,"codedValues",void 0),(0,r._)([(0,l.e)({codedValue:"coded-value"})],y.prototype,"type",void 0),y=m=(0,r._)([(0,a.$)("esri.layers.support.CodedValueDomain")],y);const h=y;var g;n(49186);let x=g=class extends f{constructor(e){super(e),this.type="inherited"}clone(){return new g}};(0,r._)([(0,l.e)({inherited:"inherited"})],x.prototype,"type",void 0),x=g=(0,r._)([(0,a.$)("esri.layers.support.InheritedDomain")],x);const w=x;var _;let F=_=class extends f{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new _({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,r._)([(0,o.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],F.prototype,"maxValue",void 0),(0,r._)([(0,o.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],F.prototype,"minValue",void 0),(0,r._)([(0,l.e)({range:"range"})],F.prototype,"type",void 0),F=_=(0,r._)([(0,a.$)("esri.layers.support.RangeDomain")],F);const v=F,T={key:"type",base:f,typeMap:{range:F,"coded-value":h,inherited:w}};function M(e){if(!e?.type)return null;switch(e.type){case"range":return v.fromJSON(e);case"codedValue":return h.fromJSON(e);case"inherited":return w.fromJSON(e)}return null}},98453:(e,t,n)=>{n.d(t,{m:()=>i});const i=new(n(66552).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},32730:(e,t,n)=>{n.d(t,{BI:()=>h,D3:()=>m,XJ:()=>y,lc:()=>f,mX:()=>x,rU:()=>g,tH:()=>T});var i=n(799);const r="__begin__",s="__end__",o=new RegExp(r,"ig"),l=new RegExp(s,"ig"),a=new RegExp("^"+r,"i"),u=new RegExp(s+"$","i"),p='"',c=p+" + ",d=" + "+p;function f(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function m(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function y(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=f(e.labelExpression),t.type="conventional"),t}function h(e){const t=y(e);if(!t)return null;switch(t.type){case"conventional":return x(t.expression);case"arcade":return t.expression}return null}function g(e){const t=y(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e?.match(w);return t?.[1].trim()||null}(t.expression);case"arcade":return T(t.expression)}return null}function x(e){let t;return e?(t=(0,i.HC)(e,(e=>r+'$feature["'+e+'"]'+s)),t=a.test(t)?t.replace(a,""):p+t,t=u.test(t)?t.replace(u,""):t+p,t=t.replaceAll(o,c).replaceAll(l,d)):t='""',t}const w=/^\s*\{([^}]+)\}\s*$/i,_=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,F=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,v=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function T(e){if(!e)return null;let t=_.exec(e)||F.exec(e);return t?t[1]||t[3]:(t=v.exec(e),t?t[2]:null)}},92300:(e,t,n)=>{n.d(t,{V:()=>s,X:()=>r});var i=n(65864);function r(e){return{geometryType:(0,i.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function s(e,t,n){const r=(0,i.xD)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=n,t}))}},58501:(e,t,n)=>{n.d(t,{q:()=>r});var i=n(62815);function r(e,t,n){if(!n?.features||!n.hasZ)return;const r=(0,i.N)(n.geometryType,t,e.outSpatialReference);if(null!=r)for(const e of n.features)r(e.geometry)}},22671:(e,t,n)=>{n.d(t,{A:()=>w});var i,r=n(90237),s=n(59456),o=n(52106),l=n(66552),a=n(25482),u=n(4718),p=n(10107),c=(n(44208),n(53966),n(36005)),d=n(40608),f=n(43937),m=n(16930),y=n(65864),h=n(20437);const g=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let x=i=class extends a.oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const n=m.A.fromJSON(t.spatialReference),i=[];for(let t=0;t<e.length;t++){const r=e[t],s=o.A.fromJSON(r),l=r.geometry?.spatialReference;null==s.geometry||l||(s.geometry.spatialReference=n);const a=r.aggregateGeometries,u=s.aggregateGeometries;if(a&&null!=u)for(const e in u){const t=u[e],i=a[e],r=i?.spatialReference;null==t||r||(t.spatialReference=n)}i.push(s)}return i}writeGeometryType(e,t,n,i){if(e)return void g.write(e,t,n,i);const{features:r}=this;if(r)for(const e of r)if(null!=e?.geometry)return void g.write(e.geometry.type,t,n,i)}readQueryGeometry(e,t){if(!e)return null;const n=!!e.spatialReference,i=(0,y.rS)(e);return i&&!n&&t.spatialReference&&(i.spatialReference=m.A.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:n}=this;if(n)for(const e of n)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new i(this.cloneProperties())}cloneProperties(){return(0,u.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let n=0;n<t.features.length;n++){const i=t.features[n];if(i.geometry){const t=e?.[n];i.geometry=t?.toJSON()||i.geometry}}return t}quantize(e){const{scale:[t,n],translate:[i,r]}=e,s=this.features,o=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-i)/t)),(e=>Math.round((r-e)/n)));for(let e=0,t=s.length;e<t;e++)o?.(s[e].geometry)||(s.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:n}=this;if(!n)return this;const{translate:[i,r],scale:[s,o]}=n;let l=null,a=null;if(this.hasZ&&null!=n?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=n;l=n=>n*t+e}if(this.hasM&&null!=n?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=n;a=n=>null==n?n:n*t+e}const u=this._getHydrationFunction(e,(e=>e*s+i),(e=>r-e*o),l,a);for(const{geometry:e}of t)null!=e&&u&&u(e);return this.transform=null,this}_quantizePoints(e,t,n){let i,r;const s=[];for(let o=0,l=e.length;o<l;o++){const l=e[o];if(o>0){const e=t(l[0]),o=n(l[1]);e===i&&o===r||(s.push([e-i,o-r]),i=e,r=o)}else i=t(l[0]),r=n(l[1]),s.push([i,r])}return s.length>0?s:null}_getQuantizationFunction(e,t,n){return"point"===e?e=>(e.x=t(e.x),e.y=n(e.y),e):"polyline"===e||"polygon"===e?e=>{const i=(0,y.Bi)(e)?e.rings:e.paths,r=[];for(let e=0,s=i.length;e<s;e++){const s=i[e],o=this._quantizePoints(s,t,n);o&&r.push(o)}return r.length>0?((0,y.Bi)(e)?e.rings=r:e.paths=r,e):null}:"multipoint"===e?e=>{const i=this._quantizePoints(e.points,t,n);return i&&i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,n,i,r){return"point"===e?e=>{e.x=t(e.x),e.y=n(e.y),i&&(e.z=i(e.z))}:"polyline"===e||"polygon"===e?e=>{const s=(0,y.Bi)(e)?e.rings:e.paths;let o,l;for(let e=0,i=s.length;e<i;e++){const i=s[e];for(let e=0,r=i.length;e<r;e++){const r=i[e];e>0?(o+=r[0],l+=r[1]):(o=r[0],l=r[1]),r[0]=t(o),r[1]=n(l)}}if(i&&r)for(let e=0,t=s.length;e<t;e++){const t=s[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=i(n[2]),n[3]=r(n[3])}}else if(i)for(let e=0,t=s.length;e<t;e++){const t=s[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=i(n[2])}}else if(r)for(let e=0,t=s.length;e<t;e++){const t=s[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=r(n[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax),i&&null!=e.zmax&&null!=e.zmin&&(e.zmax=i(e.zmax),e.zmin=i(e.zmin)),r&&null!=e.mmax&&null!=e.mmin&&(e.mmax=r(e.mmax),e.mmin=r(e.mmin))}:"multipoint"===e?e=>{const s=e.points;let o,l;for(let e=0,i=s.length;e<i;e++){const i=s[e];e>0?(o+=i[0],l+=i[1]):(o=i[0],l=i[1]),i[0]=t(o),i[1]=n(l)}if(i&&r)for(let e=0,t=s.length;e<t;e++){const t=s[e];t[2]=i(t[2]),t[3]=r(t[3])}else if(i)for(let e=0,t=s.length;e<t;e++){const t=s[e];t[2]=i(t[2])}else if(r)for(let e=0,t=s.length;e<t;e++){const t=s[e];t[2]=r(t[2])}}:null}};(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],x.prototype,"displayFieldName",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,p.MZ)({type:[o.A],json:{write:!0}})],x.prototype,"features",void 0),(0,r._)([(0,c.w)("features")],x.prototype,"readFeatures",null),(0,r._)([(0,p.MZ)({type:[h.A],json:{write:!0}})],x.prototype,"fields",void 0),(0,r._)([(0,p.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],x.prototype,"geometryType",void 0),(0,r._)([(0,f.K)("geometryType")],x.prototype,"writeGeometryType",null),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"hasM",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"hasZ",void 0),(0,r._)([(0,p.MZ)({types:s.yR,json:{write:!0}})],x.prototype,"queryGeometry",void 0),(0,r._)([(0,c.w)("queryGeometry")],x.prototype,"readQueryGeometry",null),(0,r._)([(0,p.MZ)({type:m.A,json:{write:!0}})],x.prototype,"spatialReference",void 0),(0,r._)([(0,f.K)("spatialReference")],x.prototype,"writeSpatialReference",null),(0,r._)([(0,p.MZ)({json:{write:!0}})],x.prototype,"transform",void 0),x=i=(0,r._)([(0,d.$)("esri.rest.support.FeatureSet")],x),x.prototype.toJSON.isDefaultToJSON=!0;const w=x},2272:(e,t,n)=>{n.d(t,{Dl:()=>o,jV:()=>s,lF:()=>l}),n(92602),n(70333);var i=n(4718),r=n(84952);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function o(e){return"string"==typeof e?(0,r.An)(e):(0,i.o8)(e)}function l(e,t,n){const i={};for(const r in e){if("declaredClass"===r)continue;const s=e[r];if(null!=s&&"function"!=typeof s)if(Array.isArray(s))i[r]=s.map((e=>l(e)));else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(n?.[r]);i[r]=t?e:JSON.stringify(e)}else i[r]=t?s:JSON.stringify(s);else i[r]=s}return i}n(926)}}]);