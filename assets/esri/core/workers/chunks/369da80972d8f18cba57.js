"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9087],{7320:(t,e,n)=>{n.d(e,{g:()=>i});const i={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const i=new r(t.getPointX(e),t.getPointY(e),n),s=t.hasZ(e),o=t.hasM(e);return s&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i},exportPolygon:function(t,e,n){return new s(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new a(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const i=t.hasZ(e),r=t.hasM(e),s=new l(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){const n=t.getZExtent(e);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=t.getMExtent(e);s.mmin=n.vmin,s.mmax=n.vmax}return s}};class r{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class s{constructor(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class l{constructor(t,e,n,i,r){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},31464:(t,e,n)=>{n.d(e,{Cv:()=>f,Nk:()=>h,lK:()=>x});var i=n(4576),r=n(74887),s=n(57251),o=n(7320),a=n(21325),l=n(28735);const u=[0,0];function p(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,u),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,u),[n.xmax,n.ymax]=t(e.xmax,e.ymax,u),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:c(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:c(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:m(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function c(t,e){const n=[];for(const i of t)n.push(m(i,e));return n}function m(t,e){const n=[];for(const i of t){const t=e(i[0],i[1],[0,0]);n.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return n}async function h(t,e){if(!t||!e)return;const n=Array.isArray(t)?t.map((t=>null!=t.geometry?t.geometry.spatialReference:null)).filter(i.Ru):[t];await(0,s.initializeProjection)(n.map((t=>({source:t,dest:e}))))}const d=p.bind(null,l.je),y=p.bind(null,l.tD);function f(t,e,n,i){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,a.fn)(e)||!(0,a.fn)(n)||(0,a.aI)(e,n))return t;if((0,l.y7)(e,n)){const e=(0,a.K8)(n)?d(t):y(t);return e.spatialReference=n,e}return(0,s.projectMany)(o.g,[t],e,n,null,i)[0]}const v=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n,i){if(!t?.length||!e||!n||(0,a.aI)(e,n))return t;const s={geometries:t,inSpatialReference:e,outSpatialReference:n,geographicTransformation:i,resolve:(0,r.Tw)()};return this._jobs.push(s),this._timer??=setTimeout(this._process,10),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:i,resolve:r,geographicTransformation:u}=t;(0,l.y7)(n,i)?(0,a.K8)(i)?r(e.map(d)):r(e.map(y)):r((0,s.projectMany)(o.g,e,n,i,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function x(t,e,n,i){return v.push(t,e,n,i)}},58727:(t,e,n)=>{n.d(e,{GC:()=>h,T2:()=>d,VY:()=>c,v8:()=>m});var i=n(66552),r=n(83047),s=n(57251),o=n(90634),a=n(65864),l=n(17136),u=n(21325),p=n(31464);const c=new i.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),m=Object.freeze({});async function h(t,e,n){const{outFields:i,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:o}=t;if(i)for(let t=0;t<i.length;t++)i[t]=i[t].trim();if(r)for(let t=0;t<r.length;t++)r[t]=r[t].trim();if(s)for(let t=0;t<s.length;t++)s[t]=s[t].trim();if(o)for(let t=0;t<o.length;t++)o[t].onStatisticField&&(o[t].onStatisticField=o[t].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),d(t,e,n)}async function d(t,e,i){if(!t)return null;let{where:s}=t;if(t.where=s=s?.trim(),(!s||/^1 *= *1$/.test(s)||e&&e===s)&&(t.where=null),!t.geometry)return t;let h=await async function(t){const{distance:e,units:i}=t,s=t.geometry;if(null==e||"vertexAttributes"in s)return s;const o=s.spatialReference,a=i?c.fromJSON(i):(0,r.Ij)(o),l=o&&((0,u.EA)(o)||(0,u.K8)(o))?s:await(0,p.Nk)(o,u.KK).then((()=>(0,p.Cv)(s,u.KK)));return(await async function(){return(await Promise.all([n.e(9930),n.e(3656)]).then(n.bind(n,47559))).geodesicBuffer}())(l.spatialReference,l,e,a)}(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;h=(0,o.HA)(h),h.spatialReference=e}if(h){await(0,p.Nk)(h.spatialReference,i),h=function(t,e){const n=t.spatialReference;return y(t,e)&&(0,a.ZC)(t)?{spatialReference:n,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}(h,i);const e=(await(0,l.el)((0,a.rS)(h)))[0];if(null==e)throw m;const n="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,r=n&&y(h,i)?{densificationStep:8*n}:void 0,s=e.toJSON(),o=(0,p.Cv)(s,s.spatialReference,i,r);if(!o)throw m;o.spatialReference=i,t.geometry=o}return t}function y(t,e){if(!t)return!1;const n=t.spatialReference;return((0,a.ZC)(t)||(0,a.Bi)(t)||(0,a.Rg)(t))&&!(0,u.aI)(n,e)&&!(0,s.canProjectWithoutEngine)(n,e)}},9087:(t,e,n)=>{n.r(e),n.d(e,{executeBinsQuery:()=>h});var i=n(2272),r=n(78888),s=n(84952),o=n(65864),a=n(17136),l=n(21325),u=n(10536);function p(t){const e=t.geometry,n=t.toJSON(),i=n;let r,s,a;return null!=e&&(s=e.spatialReference,a=(0,l.YX)(s),i.geometryType=(0,o.$B)(e),i.geometry=JSON.stringify(e),i.inSR=a),n.outSR?(i.outSR=(0,l.YX)(n.outSR),r=t.outSpatialReference):e&&(i.outSR=i.inSR,r=s),i.bin&&=JSON.stringify(i.bin),i.quantizationParameters&&=JSON.stringify(i.quantizationParameters),i.outStatistics&&=JSON.stringify(i.outStatistics),i.outTimeReference&&=JSON.stringify(i.outTimeReference),t.defaultSpatialReference&&(0,l.aI)(s,r)&&(i.defaultSR=i.inSR,delete i.inSR,delete i.outSR),i}var c=n(17044),m=n(22671);async function h(t,e,n){const{data:o}=await async function(t,e,n){return async function(t,e,n={}){const i="string"==typeof t?(0,s.An)(t):t,o=e.geometry?[e.geometry]:[],l=await(0,a.el)(o,null,{signal:n.signal}),c=l?.[0];null!=c&&((e=e.clone()).geometry=c);const m=(0,u.z)({...i.query,f:"json",...p(e)});return(0,r.A)((0,s.fj)(i.path,"queryBins"),{...n,query:{...m,...n.query}})}(t,e,n)}((0,i.Dl)(t),c.A.from(e),n);return m.A.fromJSON(o)}},17044:(t,e,n)=>{n.d(e,{A:()=>k});var i=n(90237),r=n(59456),s=n(69540),o=n(66552),a=n(25482),l=n(10107),u=n(56507),p=(n(87811),n(44208),n(93223)),c=n(40608),m=n(65864),h=n(58727),d=n(15426);n(53966);const y=new o.J({naturalLog:"natural-log",squareRoot:"square-root"});let f=class extends((0,s.O)(a.oY)){constructor(){super(...arguments),this.field=null,this.transformation=null}};(0,i._)([(0,l.MZ)({type:String,json:{name:"onField",write:{isRequired:!0}}})],f.prototype,"field",void 0),(0,i._)([(0,p.e)(y)],f.prototype,"transformation",void 0),f=(0,i._)([(0,c.$)("esri.rest.support.BinParametersBase")],f);const v=f;let x=class extends v{constructor(){super(...arguments),this.bins=null,this.end=null,this.start=null,this.type="auto-interval"}};(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],x.prototype,"bins",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.end",write:!0}})],x.prototype,"end",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.start",write:!0}})],x.prototype,"start",void 0),(0,i._)([(0,p.e)({autoIntervalBin:"auto-interval"},{readOnly:!0})],x.prototype,"type",void 0),x=(0,i._)([(0,c.$)("esri.rest.support.AutoIntervalBinParameters")],x);const g=x;x.from=(0,u.dp)(x);const w=new o.J({day:"days",hour:"hours",minute:"minutes",second:"seconds"});let R=class extends((0,s.O)(a.oY)){constructor(){super(...arguments),this.number=null,this.unit=null}};(0,i._)([(0,l.MZ)({type:Number,json:{write:!0}})],R.prototype,"number",void 0),(0,i._)([(0,p.e)(w)],R.prototype,"unit",void 0),R=(0,i._)([(0,c.$)("esri.rest.support.DateBinOffsetParameters")],R);const _=R;R.from=(0,u.dp)(R);const S=new o.J({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let M=class extends v{constructor(){super(...arguments),this.end=null,this.number=null,this.offset=null,this.start=null,this.type="date",this.unit=null}};(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.end",write:!0}})],M.prototype,"end",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.number",write:!0}})],M.prototype,"number",void 0),(0,i._)([(0,l.MZ)({type:_,json:{name:"parameters.offset",write:!0}})],M.prototype,"offset",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.start",write:!0}})],M.prototype,"start",void 0),(0,i._)([(0,p.e)({dateBin:"date"},{readOnly:!0})],M.prototype,"type",void 0),(0,i._)([(0,p.e)(S,{name:"parameters.unit"})],M.prototype,"unit",void 0),M=(0,i._)([(0,c.$)("esri.rest.support.DateBinParameters")],M);const b=M;M.from=(0,u.dp)(M);let Z=class extends v{constructor(){super(...arguments),this.boundaries=null,this.type="fixed-boundaries"}};(0,i._)([(0,l.MZ)({type:[Number],json:{name:"parameters.boundaries",write:!0}})],Z.prototype,"boundaries",void 0),(0,i._)([(0,p.e)({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],Z.prototype,"type",void 0),Z=(0,i._)([(0,c.$)("esri.rest.support.FixedBoundariesBinParameters")],Z);const j=Z;Z.from=(0,u.dp)(Z);let P=class extends v{constructor(){super(...arguments),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.end",write:!0}})],P.prototype,"end",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.interval",write:!0}})],P.prototype,"interval",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{name:"parameters.start",write:!0}})],P.prototype,"start",void 0),(0,i._)([(0,p.e)({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],P.prototype,"type",void 0),P=(0,i._)([(0,c.$)("esri.rest.support.FixedIntervalBinParameters")],P);const B=P;P.from=(0,u.dp)(P);var N=n(27348),O=n(58174),z=n(7562),A=n(16930);const T=new o.J({asc:"ascending",desc:"descending"}),q={base:v,key:"type",typeMap:{"auto-interval":g,date:b,"fixed-boundaries":j,"fixed-interval":B}};let J=class extends((0,s.O)(a.oY)){constructor(t){super(t),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.geometryType=void 0,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.outTimeReference=null,this.quantizationParameters=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}};(0,i._)([(0,l.MZ)({types:q,json:{name:"bin",write:!0}})],J.prototype,"binParameters",void 0),(0,i._)([(0,p.e)(T)],J.prototype,"binOrder",void 0),(0,i._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],J.prototype,"cacheHint",void 0),(0,i._)([(0,l.MZ)({json:{write:!0}})],J.prototype,"datumTransformation",void 0),(0,i._)([(0,l.MZ)({type:A.A,json:{name:"defaultSR",write:!0}})],J.prototype,"defaultSpatialReference",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],J.prototype,"distance",void 0),(0,i._)([(0,l.MZ)({types:r.yR,json:{read:m.rS,write:!0}})],J.prototype,"geometry",void 0),(0,i._)([(0,p.e)(d.iX)],J.prototype,"geometryType",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],J.prototype,"lowerBoundaryAlias",void 0),(0,i._)([(0,l.MZ)({type:A.A,json:{name:"outSR",write:!0}})],J.prototype,"outSpatialReference",void 0),(0,i._)([(0,l.MZ)({type:[z.A],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],J.prototype,"outStatistics",void 0),(0,i._)([(0,l.MZ)({json:{write:!0}})],J.prototype,"outTimeReference",void 0),(0,i._)([(0,l.MZ)({type:N.A,json:{write:!0}})],J.prototype,"quantizationParameters",void 0),(0,i._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],J.prototype,"returnDistinctValues",void 0),(0,i._)([(0,p.e)(O.x,{name:"spatialRel"})],J.prototype,"spatialRelationship",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],J.prototype,"upperBoundaryAlias",void 0),(0,i._)([(0,l.MZ)({type:String,json:{read:h.VY.read,write:{writer:h.VY.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],J.prototype,"units",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],J.prototype,"where",void 0),J=(0,i._)([(0,c.$)("esri.rest.support.BinsQuery")],J);const k=J;J.from=(0,u.dp)(J)}}]);