"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1273,7561],{11273:(t,e,r)=>{r.r(e),r.d(e,{executeTopFeaturesQuery:()=>l});var i=r(2272),o=r(24645),s=r(22671),n=r(57561);async function l(t,e,r,l){const u=(0,i.Dl)(t),p={...l},{data:a}=await(0,o.Yb)(u,n.default.from(e),r,p);return s.A.fromJSON(a)}},24645:(t,e,r)=>{r.d(e,{$K:()=>h,KW:()=>c,Yb:()=>y,xs:()=>m});var i=r(78888),o=r(84952),s=r(65864),n=r(17136),l=r(21325),u=r(10536),p=r(58501);const a="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,s.$B)(r),o.inSR=(0,l.YX)(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=(0,l.YX)(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function y(t,e,r,i){const o=await w(t,e,"json",i);return(0,p.q)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,s={},l={}){const p="string"==typeof t?(0,o.An)(t):t,a=e.geometry?[e.geometry]:[];return s.responseType="json",(0,n.el)(a,null,s).then((t=>{const n=t?.[0];null!=n&&((e=e.clone()).geometry=n);const a=(0,u.z)({...p.query,f:r,...l,...d(e,l)});return(0,i.A)((0,o.fj)(p.path,"queryTopFeatures"),{...s,query:{...a,...s.query}})}))}},57561:(t,e,r)=>{r.r(e),r.d(e,{default:()=>R});var i,o=r(90237),s=r(59456),n=r(66552),l=r(25482),u=r(4718),p=r(10107),a=r(56507),d=r(40608),y=r(43937),c=r(65864);r(44208),r(53966),r(87811);let h=i=class extends l.oY{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],h.prototype,"groupByFields",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:!0}})],h.prototype,"topCount",void 0),(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],h.prototype,"orderByFields",void 0),h=i=(0,o._)([(0,d.$)("esri.rest.support.TopFilter")],h);const m=h;var w,F=r(79677),v=r(16930);const S=new n.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),j=new n.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=w=class extends l.oY{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new w((0,u.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,p.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],f.prototype,"distance",void 0),(0,o._)([(0,p.MZ)({types:s.yR,json:{read:c.rS,write:!0}})],f.prototype,"geometry",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,o._)([(0,p.MZ)({json:{write:!0}})],f.prototype,"objectIds",void 0),(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,o._)([(0,p.MZ)({type:v.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,o._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"resultType",void 0),(0,o._)([(0,p.MZ)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,o._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnM",void 0),(0,o._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnZ",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,o._)([(0,y.K)("start"),(0,y.K)("num")],f.prototype,"writeStart",null),(0,o._)([(0,p.MZ)({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],f.prototype,"spatialRelationship",void 0),(0,o._)([(0,p.MZ)({type:F.A,json:{write:!0}})],f.prototype,"timeExtent",void 0),(0,o._)([(0,p.MZ)({type:m,json:{write:!0}})],f.prototype,"topFilter",void 0),(0,o._)([(0,p.MZ)({type:String,json:{read:j.read,write:{writer:j.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],f.prototype,"units",void 0),(0,o._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"where",void 0),f=w=(0,o._)([(0,d.$)("esri.rest.support.TopFeaturesQuery")],f),f.from=(0,a.dp)(f);const R=f}}]);