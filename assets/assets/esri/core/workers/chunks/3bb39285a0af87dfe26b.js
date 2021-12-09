"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5660],{38581:(e,t,s)=>{s.d(t,{aX:()=>R});var r=s(68773),n=s(20102),o=s(92604),i=s(70586),a=s(17332),u=s(58901),l=s(73913),c=s(8744),d=s(40488),h=(s(66577),s(3172)),p=s(17452),f=s(33955);const y=o.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function m(e){return"polyline"===e[0].type}function b(e,t,s){if(t){const t=function(e,t){if(!(e instanceof u.Z||e instanceof a.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw y.error(e),new n.Z(e)}const s=(0,l.x3)(e),r=[];for(const e of s){const s=[];r.push(s),s.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const n=e[r][0],o=e[r][1],i=e[r+1][0],a=e[r+1][1],u=Math.sqrt((i-n)*(i-n)+(a-o)*(a-o)),l=(a-o)/u,c=(i-n)/u,d=u/t;if(d>1){for(let e=1;e<=d-1;e++){const r=e*t,i=c*r+n,a=l*r+o;s.push([i,a])}const e=(u+Math.floor(d-1)*t)/2,r=c*e+n,i=l*e+o;s.push([r,i])}s.push([i,a])}}return function(e){return"polygon"===e.type}(e)?new a.Z({rings:r,spatialReference:e.spatialReference}):new u.Z({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,d.Sx)(t,!0)}return s&&(e=(0,l.Sy)(e,s)),e}function I(e,t,s){if(Array.isArray(e)){const r=e[0];if(r>t){const s=(0,l.XZ)(r,t);e[0]=r+s*(-2*t)}else if(r<s){const t=(0,l.XZ)(r,s);e[0]=r+t*(-2*s)}}else{const r=e.x;if(r>t){const s=(0,l.XZ)(r,t);e=e.clone().offset(s*(-2*t),0)}else if(r<s){const t=(0,l.XZ)(r,s);e=e.clone().offset(t*(-2*s),0)}}return e}function F(e,t){let s=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],o=t.geometries[r],i=(0,l.x3)(o);for(let e=0;e<i.length;e++){const t=i[e];t.some((s=>{if(s[0]<180)return!0;{let s=0;for(let e=0;e<t.length;e++){const r=t[e][0];s=r>s?r:s}s=Number(s.toFixed(9));const r=-360*(0,l.XZ)(s,180);for(let s=0;s<t.length;s++){const t=o.getPoint(e,s);o.setPoint(e,s,t.clone().offset(r,0))}return!0}}))}if(n===s){if(g(e))for(const t of(0,l.x3)(o))e[n]=e[n].addRing(t);else if(m(e))for(const t of(0,l.x3)(o))e[n]=e[n].addPath(t)}else s=n,e[n]=o}return e}async function R(e,t,s){var n;if(!Array.isArray(e))return R([e],t);const o=null!=(n=null==t?void 0:t.url)?n:r.Z.geometryServiceUrl;let y,g,m,w,q,Z,x,S,_=0;const O=[],T=[];for(const t of e)if((0,i.Wi)(t))T.push(t);else if(y||(y=t.spatialReference,g=(0,c.C5)(y),m=y.isWebMercator,Z=m?102100:4326,w=l.UZ[Z].maxX,q=l.UZ[Z].minX,x=l.UZ[Z].plus180Line,S=l.UZ[Z].minus180Line),g)if("mesh"===t.type)T.push(t);else if("point"===t.type)T.push(I(t.clone(),w,q));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>I(e,w,q))),T.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,g);T.push(e.rings?new a.Z(e):e)}else if(t.extent){const e=t.extent,s=(0,l.XZ)(e.xmin,q)*(2*w);let r=0===s?t.clone():(0,l.Sy)(t.clone(),s);e.offset(s,0),e.intersects(x)&&e.xmax!==w?(_=e.xmax>_?e.xmax:_,r=b(r,m),O.push(r),T.push("cut")):e.intersects(S)&&e.xmin!==q?(_=e.xmax*(2*w)>_?e.xmax*(2*w):_,r=b(r,m,360),O.push(r),T.push("cut")):T.push(r)}else T.push(t.clone());else T.push(t);let v=(0,l.XZ)(_,w),N=-90;const E=v,M=new u.Z;for(;v>0;){const e=360*v-180;M.addPath([[e,N],[e,-1*N]]),N*=-1,v--}if(O.length>0&&E>0){const t=F(O,await async function(e,t,s,r){const n="string"==typeof e?(0,p.mN)(e):e,o=t[0].spatialReference,i={...r,query:{...n.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:(0,f.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(s)}},a=await(0,h.default)(n.path+"/cut",i),{cutIndexes:u,geometries:l=[]}=a.data;return{cutIndexes:u,geometries:l.map((e=>{const t=(0,f.im)(e);return t.spatialReference=o,t}))}}(o,O,M,s)),r=[],n=[];for(let s=0;s<T.length;s++){const o=T[s];if("cut"!==o)n.push(o);else{const o=t.shift(),a=e[s];(0,i.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&o.rings.length>=a.rings.length?(r.push(o),n.push("simplify")):n.push(m?(0,d.$)(o):o)}}if(!r.length)return n;const a=await async function(e,t,s){const r="string"==typeof e?(0,p.mN)(e):e,n=t[0].spatialReference,o=(0,f.Ji)(t[0]),i={...s,query:{...r.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify((a=t,{geometryType:(0,f.Ji)(a[0]),geometries:a.map((e=>e.toJSON()))}))}};var a;return function(e,t,s){const r=(0,f.q9)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=s,t}))}((await(0,h.default)(r.path+"/simplify",i)).data,o,n)}(o,r,s),u=[];for(let e=0;e<n.length;e++){const t=n[e];"simplify"!==t?u.push(t):u.push(m?(0,d.$)(a.shift()):a.shift())}return u}const G=[];for(let e=0;e<T.length;e++){const t=T[e];if("cut"!==t)G.push(t);else{const e=O.shift();G.push(!0===m?(0,d.$)(e):e)}}return Promise.resolve(G)}},73913:(e,t,s)=>{s.d(t,{UZ:()=>i,x3:()=>l,XZ:()=>a,Sy:()=>u});var r=s(58901),n=s(82971),o=s(33955);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new r.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new r.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function a(e,t){return Math.ceil((e-t)/(2*t))}function u(e,t){const s=l(e);for(const e of s)for(const s of e)s[0]+=t;return e}function l(e){return(0,o.oU)(e)?e.rings:e.paths}},70272:(e,t,s)=>{s.d(t,{nd:()=>i,ZP:()=>n,S6:()=>o});var r=s(70586);class n{constructor(e=null,t={},s,r){this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function o(e){return!((0,r.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class i extends n{}},44876:(e,t,s)=>{s.d(t,{Z:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},5428:(e,t,s)=>{s.d(t,{Z:()=>r});class r{constructor(e=[],t=[],s=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=s}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const r=this.lengths[s];for(let s=0;s<r;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=r}}clone(e){return e?(e.set(this.coords),new r(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},61159:(e,t,s)=>{s.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},98732:(e,t,s)=>{s.d(t,{XA:()=>j,h_:()=>W,Yn:()=>J,GH:()=>Q,Uy:()=>C,EI:()=>L,cn:()=>X,di:()=>z,Iv:()=>E,fQ:()=>w,eG:()=>A,J6:()=>G,oB:()=>oe,zj:()=>Y,$:()=>ee,lz:()=>ne,RZ:()=>V,Nh:()=>B,Jd:()=>b,IN:()=>I,hY:()=>se,lM:()=>$,$g:()=>te});var r=s(20102),n=s(92604),o=s(70586),i=s(33955),a=s(70272),u=s(44876),l=s(5428);function c(e,t){return e?t?4:3:t?3:2}const d=n.Z.getLogger("esri.tasks.support.optimizedFeatureSet"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},p=(e,t,s,r,n,o)=>{e[s]=n,e[s+1]=o},f=(e,t,s,r,n,o)=>{e[s]=n,e[s+1]=o,e[s+2]=t[r+2]},y=(e,t,s,r,n,o)=>{e[s]=n,e[s+1]=o,e[s+2]=t[r+3]},g=(e,t,s,r,n,o)=>{e[s]=n,e[s+1]=o,e[s+2]=t[r+2],e[s+3]=t[r+3]};function m(e,t,s,r){if(e){if(s)return t&&r?g:f;if(t&&r)return y}else if(t&&r)return f;return p}function b({scale:e,translate:t},s){return Math.round((s-t[0])/e[0])}function I({scale:e,translate:t},s){return Math.round((t[1]-s)/e[1])}function F({scale:e,translate:t},s){return s*e[0]+t[0]}function R({scale:e,translate:t},s){return t[1]-s*e[1]}function w(e,t,s){return e?t?s?T(e):x(e):s?_(e):q(e):null}function q(e){const t=e.coords;return{x:t[0],y:t[1]}}function Z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function x(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function S(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function _(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function O(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function T(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function v(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function N(e,t){return e&&t?v:e?S:t?O:Z}function E(e,t,s){if((0,o.Wi)(e))return null;const r=c(t,s),n=[];for(let t=0;t<e.coords.length;t+=r){const s=[];for(let n=0;n<r;n++)s.push(e.coords[t+n]);n.push(s)}return t?s?{points:n,hasZ:t,hasM:s}:{points:n,hasZ:t}:s?{points:n,hasM:s}:{points:n}}function M(e,t,s=c(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const r=e.coords;let n=0;for(const e of t.points)for(let t=0;t<s;t++)r[n++]=e[t];return e}function G(e,t,s){if(!e)return null;const r=c(t,s),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let s=0;s<e;s++){const e=[];for(let t=0;t<r;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?s?{paths:i,hasZ:t,hasM:s}:{paths:i,hasZ:t}:s?{paths:i,hasM:s}:{paths:i}}function P(e,t,s=c(t.hasZ,t.hasM)){const{lengths:r,coords:n}=e;let o=0;for(const e of t.paths){for(const t of e)for(let e=0;e<s;e++)n[o++]=t[e];r.push(e.length)}return e}function A(e,t,s){if(!e)return null;const r=c(t,s),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let s=0;s<e;s++){const e=[];for(let t=0;t<r;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?s?{rings:i,hasZ:t,hasM:s}:{rings:i,hasZ:t}:s?{rings:i,hasM:s}:{rings:i}}function C(e,t,s=t.hasZ,r=t.hasM){return function(e,t,s,r){const n=c(s,r),{lengths:o,coords:i}=e;let a=0;o.length=i.length=0;for(const e of t){for(const t of e)for(let e=0;e<n;e++)i[a++]=t[e];o.push(e.length)}}(e,t.rings,s,r),e}const k=[],U=[];function j(e,t,s,r,n){k[0]=e;const[o]=J(U,k,t,s,r,n);return k.length=U.length=0,o}function J(e,t,s,n,i,u){if(e.length=0,!s){for(const s of t){const t=s.attributes[u];e.push(new a.ZP(null,s.attributes,null,t))}return e}switch(s){case"esriGeometryPoint":return function(e,t,s,r,n){const o=N(s,r);for(const s of t){const{geometry:t,attributes:r}=s;let i;t&&(i=o(new l.Z,t)),e.push(new a.ZP(i,r,null,r[n]))}return e}(e,t,n,i,u);case"esriGeometryMultipoint":return function(e,t,s,r,n){const o=c(s,r);for(const s of t){const t=s.geometry,r=s.attributes;let i;t&&(i=M(new l.Z,t,o)),e.push(new a.ZP(i,r,null,r[n]))}return e}(e,t,n,i,u);case"esriGeometryPolyline":return function(e,t,s,r,n){const o=c(s,r);for(const s of t){const t=s.geometry,r=s.attributes;let i;t&&(i=P(new l.Z,t,o)),e.push(new a.ZP(i,r,null,r[n]))}return e}(e,t,n,i,u);case"esriGeometryPolygon":return function(e,t,s,r,n){for(const i of t){const t=i.geometry,u=i.centroid,c=i.attributes;let d;t&&(d=C(new l.Z,t,s,r)),(0,o.pC)(u)?e.push(new a.ZP(d,c,Z(new l.Z,u),c[n])):e.push(new a.ZP(d,c,null,c[n]))}return e}(e,t,n,i,u);default:d.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${s}'`)),e.length=0}return e}function L(e,t,s,r){U[0]=e,D(k,U,t,s,r);const n=k[0];return k.length=U.length=0,n}function Q(e,t,s){if((0,o.Wi)(e))return null;const n=new l.Z;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==s&&(s=e.hasM),(0,i.wp)(e)?N(null!=t?t:null!=e.z,null!=s?s:null!=e.m)(n,e):(0,i.oU)(e)?C(n,e,t,s):(0,i.l9)(e)?P(n,e,c(t,s)):(0,i.aW)(e)?M(n,e,c(t,s)):void d.error("convertFromGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${e}'`))}function z(e,t,s,n){const i=e&&("coords"in e?e:e.geometry);if((0,o.Wi)(i))return null;switch(t){case"esriGeometryPoint":{let e=q;return s&&n?e=T:s?e=x:n&&(e=_),e(i)}case"esriGeometryMultipoint":return E(i,s,n);case"esriGeometryPolyline":return G(i,s,n);case"esriGeometryPolygon":return A(i,s,n);default:return void d.error("convertToGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${t}'`))}}function D(e,t,s,n,i){if(e.length=0,(0,o.Wi)(s))return function(e,t){for(const s of t)e.push({attributes:s.attributes});return e}(e,t);switch(s){case"esriGeometryPoint":return function(e,t,s,r){let n=q;s&&r?n=T:s?n=x:r&&(n=_);for(const s of t){const{geometry:t,attributes:r}=s,i=(0,o.pC)(t)?n(t):null;e.push({attributes:r,geometry:i})}return e}(e,t,n,i);case"esriGeometryMultipoint":return function(e,t,s,r){for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=E(t,s,r)),e.push({attributes:o,geometry:i})}return e}(e,t,n,i);case"esriGeometryPolyline":return function(e,t,s,r){for(const n of t){const{geometry:t,attributes:i}=n;let a;(0,o.pC)(t)&&(a=G(t,s,r)),e.push({attributes:i,geometry:a})}return e}(e,t,n,i);case"esriGeometryPolygon":return function(e,t,s,r){for(const n of t){const{geometry:t,attributes:i,centroid:a}=n;let u;if((0,o.pC)(t)&&(u=A(t,s,r)),a){const t=q(a);e.push({attributes:i,centroid:t,geometry:u})}else e.push({attributes:i,geometry:u})}return e}(e,t,n,i);default:d.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${s}'`))}return e}function X(e){const{objectIdFieldName:t,spatialReference:s,transform:r,fields:n,hasM:o,hasZ:i,features:a,geometryType:u,exceededTransferLimit:l,uniqueIdField:c,queryGeometry:d,queryGeometryType:h}=e,p={features:D([],a,u,i,o),fields:n,geometryType:u,objectIdFieldName:t,spatialReference:s,uniqueIdField:c,queryGeometry:z(d,h,!1,!1)};return r&&(p.transform=r),l&&(p.exceededTransferLimit=l),o&&(p.hasM=o),i&&(p.hasZ=i),p}function W(e,t){const s=new u.Z,{hasM:n,hasZ:o,features:i,objectIdFieldName:a,spatialReference:l,geometryType:c,exceededTransferLimit:h,transform:p,fields:f}=e;return f&&(s.fields=f),s.geometryType=c,s.objectIdFieldName=a||t,s.spatialReference=l,s.objectIdFieldName?(i&&J(s.features,i,c,o,n,s.objectIdFieldName),h&&(s.exceededTransferLimit=h),n&&(s.hasM=n),o&&(s.hasZ=o),p&&(s.transform=p),s):(d.error(new r.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),s)}function $(e){const{transform:t,features:s,hasM:r,hasZ:n}=e;if(!t)return e;for(const e of s)(0,o.pC)(e.geometry)&&te(e.geometry,e.geometry,r,n,t),e.centroid&&te(e.centroid,e.centroid,r,n,t);return e.transform=null,e}function V(e,t){const{geometryType:s,features:r,hasM:n,hasZ:o}=t;if(!e)return t;for(let t=0;t<r.length;t++){const i=r[t],a=i.weakClone();a.geometry=new l.Z,B(a.geometry,i.geometry,n,o,s,e),i.centroid&&(a.centroid=new l.Z,B(a.centroid,i.centroid,n,o,"esriGeometryPoint",e)),r[t]=a}return t.transform=e,t}function B(e,t,s,r,n,i,a=s,u=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),(0,o.Wi)(t)||!t.coords.length)return null;const l=h[n],{coords:d,lengths:p}=t,f=c(s,r),y=c(s&&a,r&&u),g=m(s,r,a,u);if(!p.length)return g(e.coords,d,0,0,b(i,d[0]),I(i,d[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;let F,R,w,q,Z=0,x=0,S=x;for(const t of p){if(t<l)continue;let s=0;x=S,w=F=b(i,d[Z]),q=R=I(i,d[Z+1]),g(e.coords,d,x,Z,w,q),s++,Z+=f,x+=y;for(let r=1;r<t;r++,Z+=f)w=b(i,d[Z]),q=I(i,d[Z+1]),w===F&&q===R||(g(e.coords,d,x,Z,w-F,q-R),x+=y,s++,F=w,R=q);s>=l&&(e.lengths.push(s),S=x)}return e.coords.length=S,e.coords.length?e:null}function Y(e,t,s,r,n,o,i=s,a=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const u=h[n],{coords:l,lengths:d}=t,p=c(s,r),f=c(s&&i,r&&a),y=m(s,r,i,a);if(!d.length)return y(e.coords,l,0,0,l[0],l[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=p,e;let g=0;const b=o*o;for(const t of d){if(t<u){g+=t*p;continue}const s=e.coords.length/f,r=g,n=g+(t-1)*p;y(e.coords,l,e.coords.length,r,l[r],l[r+1]),K(e.coords,l,p,b,y,r,n),y(e.coords,l,e.coords.length,n,l[n],l[n+1]);const o=e.coords.length/f-s;o>=u?e.lengths.push(o):e.coords.length=s*f,g+=t*p}return e.coords.length?e:null}function H(e,t,s,r){const n=e[t],o=e[t+1],i=e[s],a=e[s+1],u=e[r],l=e[r+1];let c=i,d=a,h=u-c,p=l-d;if(0!==h||0!==p){const e=((n-c)*h+(o-d)*p)/(h*h+p*p);e>1?(c=u,d=l):e>0&&(c+=h*e,d+=p*e)}return h=n-c,p=o-d,h*h+p*p}function K(e,t,s,r,n,o,i){let a,u=r,l=0;for(let e=o+s;e<i;e+=s)a=H(t,e,o,i),a>u&&(l=e,u=a);u>r&&(l-o>s&&K(e,t,s,r,n,o,l),n(e,t,e.length,l,t[l],t[l+1]),i-l>s&&K(e,t,s,r,n,l,i))}function ee(e,t,s,r){if((0,o.Wi)(t)||!t.coords||!t.coords.length)return null;const n=c(s,r);let i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=n){const s=e[t],r=e[t+1];i=Math.min(i,s),u=Math.max(u,s),a=Math.min(a,r),l=Math.max(l,r)}}return e[0]=i,e[1]=a,e[2]=u,e[3]=l,e}function te(e,t,s,r,n){const{coords:o,lengths:i}=t,a=s?r?g:f:r?f:p,u=c(s,r);if(!o.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return a(e.coords,o,0,0,F(n,o[0]),R(n,o[1])),e!==t&&(e.lengths.length=0,e.coords.length=u),e;const[l,d]=n.scale;let h=0;for(let t=0;t<i.length;t++){const s=i[t];e.lengths[t]=s;let r=F(n,o[h]),c=R(n,o[h+1]);a(e.coords,o,h,h,r,c),h+=u;for(let t=1;t<s;t++,h+=u)r+=o[h]*l,c-=o[h+1]*d,a(e.coords,o,h,h,r,c)}return e!==t&&(e.lengths.length=i.length,e.coords.length=o.length),e}function se(e,t,s,r,n,o){const i=c(s,r),a=m(s,r,n,o),u=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<u.length;t+=i)a(e.coords,u,e.coords.length,t,u[t],u[t+1]);return e}function re(e,t,s,r){let n=0,o=e[r*t],i=e[r*(t+1)];for(let a=1;a<s;a++){const s=o+e[r*(t+a)],u=i+e[r*(t+a)+1],l=(s-o)*(u+i);o=s,i=u,n+=l}return.5*n}function ne(e,t){const{coords:s,lengths:r}=e;let n=0,o=0;for(let e=0;e<r.length;e++)o+=re(s,n,r[e],t),n+=e;return Math.abs(o)}function oe(e,t){if((0,o.Wi)(e))return null;const s=e.clone(),r=e.coords,n=e.lengths;let i=0;for(let e=0;e<n.length;e++){const o=n[e];let a=r[t*i],u=r[t*i+1];for(let e=1;e<o;e++){const n=a+r[t*(i+e)],o=u+r[t*(i+e)+1];s.coords[t*(i+e)]=n,s.coords[t*(i+e)+1]=o,a=n,u=o}i+=o}return s}},6502:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var r=s(43697),n=(s(66577),s(38171)),o=s(3172),i=s(92835),a=s(20102),u=s(80442),l=s(35454),c=s(83379),d=s(70586),h=s(78286),p=s(95330),f=s(17452),y=s(5600),g=(s(67676),s(75215),s(52011)),m=s(6570),b=s(33955),I=s(25278),F=s(30540),R=s(50459),w=s(27091),q=s(82971);const Z=new l.Xn({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),x=new Set(["Feature Layer","Table"]);let S=class extends c.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,p.Ds)((async()=>{var e,t;await this.load();const s=null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate;if(null==s)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const r=s!==(null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate);return{dataChanged:r,updates:r?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(e){const t=(0,d.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:s,infoFor3D:r,gdbVersion:n,spatialReference:o,fieldsIndex:i}=this.layer,a=(0,u.Z)("featurelayer-pbf")&&e&&(0,d.Wi)(r)?"pbf":"json";return new w.Z({url:t.path,format:a,fieldsIndex:i,infoFor3D:r,dynamicDataSource:s,gdbVersion:n,sourceSpatialReference:o})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,n.query);try{const e=await(0,o.default)(r,{body:i});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async updateAttachment(e,t,s){await this.load();const r=e.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),a=this._getFormDataForAttachment(s,i.query);try{const e=await(0,o.default)(n,{body:a});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async applyEdits(e,t){await this.load();const s=e.addFeatures.map(this._serializeFeature,this),r=e.updateFeatures.map(this._serializeFeature,this),n=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);(0,R.P)(s,r,this.layer.spatialReference);const i=[],a=[],u=[...e.deleteAttachments];for(const t of e.addAttachments)i.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)a.push(await this._serializeAttachment(t));const l=i.length||a.length||u.length?{adds:i,updates:a,deletes:u}:null,c={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(c.edits=JSON.stringify([{id:this.layer.layerId,adds:s,updates:r,deletes:n,attachments:l}]),c.returnServiceEditsOption=Z.toJSON(null==t?void 0:t.returnServiceEditsOption),c.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(c.adds=s.length?JSON.stringify(s):null,c.updates=r.length?JSON.stringify(r):null,c.deletes=n.length?null!=t&&t.globalIdUsed?JSON.stringify(n):n.join(","):null,c.attachments=l&&JSON.stringify(l));const d=this._getLayerRequestOptions({method:"post",query:c}),h=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=await(0,o.default)(h+"/applyEdits",d);return this._createEditsResult(p)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await(0,o.default)(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:n}=await(0,o.default)(`${r}/${s}`,t),{id:a,extent:u,fullExtent:l,timeExtent:c}=n,d=u||l;return{id:a,fullExtent:d&&m.Z.fromJSON(d),timeExtent:c&&i.Z.fromJSON({start:c[0],end:c[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:s}=this.layer,r=s.path;await this.load();const n=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,s=[];for(const e of t){const t=r+"/"+e+"/attachments";s.push((0,o.default)(t,n))}return Promise.all(s).then((e=>t.map(((t,s)=>({parentObjectId:t,attachmentInfos:e[s].data.attachmentInfos}))))).then((e=>(0,F.O)(e,r)))}return this.queryTask.executeAttachmentQuery(e,n)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await(0,o.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,u.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!x.has(s))throw new a.Z("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,I.bU)(e.geometryType).renderer;(0,h.RB)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t,attributes:s}=e;return(0,d.Wi)(t)?{attributes:s}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:s}}async _serializeAttachment(e){const{feature:t,attachment:s}=e,{globalId:r,name:n,contentType:o,data:i,uploadId:a}=s,u={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),a)u.uploadId=a;else if(i){const e=await async function(e){return"string"==typeof e?(0,f.sJ)(e)||{data:e}:new Promise(((t,s)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t((0,f.sJ)(r.result)),r.onerror=e=>s(e)}))}(i);u.contentType=e.mediaType,u.data=e.data,i instanceof File&&(u.name=i.name)}return n&&(u.name=n),o&&(u.contentType=o),u}_getFeatureIds(e,t){const s=e[0];return s?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){var t;const s=e.data,{layerId:r}=this.layer,n=[];let o=null;if(Array.isArray(s))for(const e of s)n.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===r&&(o={addResults:e.addResults,updateResults:e.updateResults,deleteResults:e.deleteResults,attachments:e.attachments,editMoment:e.editMoment});else o=s;const i=null==(t=o)?void 0:t.attachments,a={addFeatureResults:o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(o.editMoment&&(a.editMoment=o.editMoment),n.length>0){a.editedFeatureResults=[];for(const e of n){const{adds:t,updates:s,deletes:r,spatialReference:n}=e.editedFeatures,o=n?new q.Z(n):null;a.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map((e=>this._createEditedFeature(e,o))))||[],updates:(null==s?void 0:s.map((e=>({original:this._createEditedFeature(e[0],o),current:this._createEditedFeature(e[1],o)}))))||[],deletes:(null==r?void 0:r.map((e=>this._createEditedFeature(e,o))))||[],spatialReference:o}})}}return a}_createEditedFeature(e,t){return new n.Z({attributes:e.attributes,geometry:(0,b.im)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new a.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const s=t.details.messages&&t.details.messages[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new a.Z("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const e in t){const r=t[e];null!=r&&(s.set?s.set(e,r):s.append(e,r))}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:r}=this.layer;return{...e,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};(0,r._)([(0,y.Cb)()],S.prototype,"type",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],S.prototype,"layer",void 0),(0,r._)([(0,y.Cb)({readOnly:!0})],S.prototype,"queryTask",null),S=(0,r._)([(0,g.j)("esri.layers.graphics.sources.FeatureLayerSource")],S);const _=S},25278:(e,t,s)=>{s.d(t,{MS:()=>c,Dm:()=>u,Hq:()=>l,bU:()=>a});var r=s(80442),n=s(22974),o=s(61159),i=s(58333);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.I4:"esriGeometryPolyline"===e?i.ET:i.lF}}}function u(e,t){if((0,r.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${t.includes(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const r=new Function(s);return()=>new r}catch(s){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function c(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);