"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4599],{45091:(e,t,s)=>{s.d(t,{Z:()=>u});var r=s(80442),n=s(71143);const i=4294967296,o=(0,r.Z)("esri-text-decoder")?new TextDecoder("utf-8"):null,a=(0,r.Z)("safari")||(0,r.Z)("ios")?6:(0,r.Z)("ff")?12:32;class u{constructor(e,t,s=0,r=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,s,r)}init(e,t,s,r){this._data=e,this._dataView=t,this._pos=s,this._end=r}clone(){return new u(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getUint32(t+4,!0)*i;return this._skip(8),s}getSFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getInt32(t+4,!0)*i;return this._skip(8),s}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,s=this._toString(this._data,t,t+e);return this._skip(e),s}getBytes(){const e=this._getLength(),t=this._pos,s=this._toBytes(this._data,t,t+e);return this._skip(e),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,s,r){const n=this.getMessage(),i=e(n,t,s,r);return n.release(),i}processMessage(e){const t=this.getMessage(),s=e(t);return t.release(),s}getMessage(){const e=this._getLength(),t=u.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){u.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,s=this._pos,r=0;if(this._end-s>=10)do{if(t=e[s++],r|=127&t,0==(128&t))break;if(t=e[s++],r|=(127&t)<<7,0==(128&t))break;if(t=e[s++],r|=(127&t)<<14,0==(128&t))break;if(t=e[s++],r|=(127&t)<<21,0==(128&t))break;if(t=e[s++],r+=268435456*(127&t),0==(128&t))break;if(t=e[s++],r+=34359738368*(127&t),0==(128&t))break;if(t=e[s++],r+=4398046511104*(127&t),0==(128&t))break;if(t=e[s++],r+=562949953421312*(127&t),0==(128&t))break;if(t=e[s++],r+=72057594037927940*(127&t),0==(128&t))break;if(t=e[s++],r+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;s!==this._end&&(t=e[s],0!=(128&t));)++s,r+=(127&t)*n,n*=128;if(s===this._end)throw new Error("Varint overrun!");++s,r+=t*n}return this._pos=s,r}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,s){if((s=Math.min(this._end,s))-t>a&&o){const r=e.subarray(t,s);return o.decode(r)}let r="",n="";for(let i=t;i<s;++i){const t=e[i];128&t?n+="%"+t.toString(16):(r+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(r+=decodeURIComponent(n)),r}_toBytes(e,t,s){return s=Math.min(this._end,s),new Uint8Array(e.buffer,t,s-t)}}u.pool=new n.Z(u,null,(e=>{e._data=null,e._dataView=null}))},38581:(e,t,s)=>{s.d(t,{aX:()=>x});var r=s(68773),n=s(20102),i=s(92604),o=s(70586),a=s(17332),u=s(58901),l=s(73913),c=s(8744),h=s(40488),p=(s(66577),s(3172)),f=s(17452),d=s(33955);const g=i.Z.getLogger("esri.geometry.support.normalizeUtils");function y(e){return"polygon"===e[0].type}function m(e){return"polyline"===e[0].type}function _(e,t,s){if(t){const t=function(e,t){if(!(e instanceof u.Z||e instanceof a.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(e),new n.Z(e)}const s=(0,l.x3)(e),r=[];for(const e of s){const s=[];r.push(s),s.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const n=e[r][0],i=e[r][1],o=e[r+1][0],a=e[r+1][1],u=Math.sqrt((o-n)*(o-n)+(a-i)*(a-i)),l=(a-i)/u,c=(o-n)/u,h=u/t;if(h>1){for(let e=1;e<=h-1;e++){const r=e*t,o=c*r+n,a=l*r+i;s.push([o,a])}const e=(u+Math.floor(h-1)*t)/2,r=c*e+n,o=l*e+i;s.push([r,o])}s.push([o,a])}}return function(e){return"polygon"===e.type}(e)?new a.Z({rings:r,spatialReference:e.spatialReference}):new u.Z({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,h.Sx)(t,!0)}return s&&(e=(0,l.Sy)(e,s)),e}function k(e,t,s){if(Array.isArray(e)){const r=e[0];if(r>t){const s=(0,l.XZ)(r,t);e[0]=r+s*(-2*t)}else if(r<s){const t=(0,l.XZ)(r,s);e[0]=r+t*(-2*s)}}else{const r=e.x;if(r>t){const s=(0,l.XZ)(r,t);e=e.clone().offset(s*(-2*t),0)}else if(r<s){const t=(0,l.XZ)(r,s);e=e.clone().offset(t*(-2*s),0)}}return e}function b(e,t){let s=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],i=t.geometries[r],o=(0,l.x3)(i);for(let e=0;e<o.length;e++){const t=o[e];t.some((s=>{if(s[0]<180)return!0;{let s=0;for(let e=0;e<t.length;e++){const r=t[e][0];s=r>s?r:s}s=Number(s.toFixed(9));const r=-360*(0,l.XZ)(s,180);for(let s=0;s<t.length;s++){const t=i.getPoint(e,s);i.setPoint(e,s,t.clone().offset(r,0))}return!0}}))}if(n===s){if(y(e))for(const t of(0,l.x3)(i))e[n]=e[n].addRing(t);else if(m(e))for(const t of(0,l.x3)(i))e[n]=e[n].addPath(t)}else s=n,e[n]=i}return e}async function x(e,t,s){var n;if(!Array.isArray(e))return x([e],t);const i=null!=(n=null==t?void 0:t.url)?n:r.Z.geometryServiceUrl;let g,y,m,w,S,T,F,I,q=0;const R=[],Z=[];for(const t of e)if((0,o.Wi)(t))Z.push(t);else if(g||(g=t.spatialReference,y=(0,c.C5)(g),m=g.isWebMercator,T=m?102100:4326,w=l.UZ[T].maxX,S=l.UZ[T].minX,F=l.UZ[T].plus180Line,I=l.UZ[T].minus180Line),y)if("mesh"===t.type)Z.push(t);else if("point"===t.type)Z.push(k(t.clone(),w,S));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>k(e,w,S))),Z.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);Z.push(e.rings?new a.Z(e):e)}else if(t.extent){const e=t.extent,s=(0,l.XZ)(e.xmin,S)*(2*w);let r=0===s?t.clone():(0,l.Sy)(t.clone(),s);e.offset(s,0),e.intersects(F)&&e.xmax!==w?(q=e.xmax>q?e.xmax:q,r=_(r,m),R.push(r),Z.push("cut")):e.intersects(I)&&e.xmin!==S?(q=e.xmax*(2*w)>q?e.xmax*(2*w):q,r=_(r,m,360),R.push(r),Z.push("cut")):Z.push(r)}else Z.push(t.clone());else Z.push(t);let G=(0,l.XZ)(q,w),N=-90;const P=G,V=new u.Z;for(;G>0;){const e=360*G-180;V.addPath([[e,N],[e,-1*N]]),N*=-1,G--}if(R.length>0&&P>0){const t=b(R,await async function(e,t,s,r){const n="string"==typeof e?(0,f.mN)(e):e,i=t[0].spatialReference,o={...r,query:{...n.query,f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:(0,d.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(s)}},a=await(0,p.default)(n.path+"/cut",o),{cutIndexes:u,geometries:l=[]}=a.data;return{cutIndexes:u,geometries:l.map((e=>{const t=(0,d.im)(e);return t.spatialReference=i,t}))}}(i,R,V,s)),r=[],n=[];for(let s=0;s<Z.length;s++){const i=Z[s];if("cut"!==i)n.push(i);else{const i=t.shift(),a=e[s];(0,o.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&i.rings.length>=a.rings.length?(r.push(i),n.push("simplify")):n.push(m?(0,h.$)(i):i)}}if(!r.length)return n;const a=await async function(e,t,s){const r="string"==typeof e?(0,f.mN)(e):e,n=t[0].spatialReference,i=(0,d.Ji)(t[0]),o={...s,query:{...r.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify((a=t,{geometryType:(0,d.Ji)(a[0]),geometries:a.map((e=>e.toJSON()))}))}};var a;return function(e,t,s){const r=(0,d.q9)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=s,t}))}((await(0,p.default)(r.path+"/simplify",o)).data,i,n)}(i,r,s),u=[];for(let e=0;e<n.length;e++){const t=n[e];"simplify"!==t?u.push(t):u.push(m?(0,h.$)(a.shift()):a.shift())}return u}const M=[];for(let e=0;e<Z.length;e++){const t=Z[e];if("cut"!==t)M.push(t);else{const e=R.shift();M.push(!0===m?(0,h.$)(e):e)}}return Promise.resolve(M)}},73913:(e,t,s)=>{s.d(t,{UZ:()=>o,x3:()=>l,XZ:()=>a,Sy:()=>u});var r=s(58901),n=s(82971),i=s(33955);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new r.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new r.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function a(e,t){return Math.ceil((e-t)/(2*t))}function u(e,t){const s=l(e);for(const e of s)for(const s of e)s[0]+=t;return e}function l(e){return(0,i.oU)(e)?e.rings:e.paths}},69285:(e,t,s)=>{s.d(t,{k:()=>o});var r=s(70586),n=s(67900),i=s(8744);function o(e,t,s){if((0,r.Wi)(t)||(0,r.Wi)(s)||s.vcsWkid||(0,i.fS)(t,s))return null;const o=(0,n._R)(t)/(0,n._R)(s);if(1===o)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,o);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const s of e.paths)for(const e of s)e.length>2&&(e[2]*=t)}(e,o);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const s of e.rings)for(const e of s)e.length>2&&(e[2]*=t)}(e,o);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const s of e.points)s.length>2&&(s[2]*=t)}(e,o);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,o);default:return null}}},70272:(e,t,s)=>{s.d(t,{nd:()=>o,ZP:()=>n,S6:()=>i});var r=s(70586);class n{constructor(e=null,t={},s,r){this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function i(e){return!((0,r.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class o extends n{}},44876:(e,t,s)=>{s.d(t,{Z:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},5428:(e,t,s)=>{s.d(t,{Z:()=>r});class r{constructor(e=[],t=[],s=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=s}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const r=this.lengths[s];for(let s=0;s<r;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=r}}clone(e){return e?(e.set(this.coords),new r(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},77863:(e,t,s)=>{s.d(t,{K9:()=>Z,O7:()=>h,G$:()=>T});var r=s(20102),n=s(70586),i=s(45091),o=s(5428),a=s(78760);const u=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],l=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],c=["upperLeft","lowerLeft"];function h(e){return e>=u.length?null:u[e]}function p(e){return e>=l.length?null:l[e]}function f(e){return e>=c.length?null:c[e]}function d(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function g(e,t,s){const r=t.createPointGeometry(s);for(;e.next();)switch(e.tag()){case 3:{const s=e.getUInt32(),n=e.pos()+s;let i=0;for(;e.pos()<n;)t.addCoordinatePoint(r,e.getSInt64(),i++);break}default:e.skip()}return r}function y(e,t,s){const r=t.createGeometry(s),n=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const s=e.getUInt32(),n=e.pos()+s;let i=0;for(;e.pos()<n;)t.addLength(r,e.getUInt32(),i++);break}case 3:{const s=e.getUInt32(),i=e.pos()+s;let o=0;for(t.allocateCoordinates(r);e.pos()<i;)t.addCoordinate(r,e.getSInt64(),o),o++,o===n&&(o=0);break}default:e.skip()}return r}function m(e){const t=new o.Z;let s="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const s=e.getUInt32(),r=e.pos()+s;for(;e.pos()<r;)t.lengths.push(e.getUInt32());break}case 3:{const s=e.getUInt32(),r=e.pos()+s;for(;e.pos()<r;)t.coords.push(e.getSInt64());break}case 1:s=a.A[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:s}}function _(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function k(e){const t={type:h(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=h(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=p(e.getEnum());break;default:e.skip();break;case 6:t.defaultValue=e.getString()}return t}function b(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function x(e,t,s,r){const n=t.createFeature(s);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=r[i++].name;n.attributes[t]=e.processMessage(_);break}case 2:n.geometry=e.processMessageWithArgs(y,t,s);break;case 4:n.centroid=e.processMessageWithArgs(g,t,s);break;default:e.skip()}return n}function w(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function S(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function T(e){const t={originPosition:f(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=f(e.getEnum());break;case 2:t.scale=e.processMessage(w);break;case 3:t.translate=e.processMessage(S);break;default:e.skip()}return t}function F(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function I(e,t){const s=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:s.wkid=e.getUInt32();break;case 5:s.wkt=e.getString();break;case 2:s.latestWkid=e.getUInt32();break;case 3:s.vcsWkid=e.getUInt32();break;case 4:s.latestVcsWkid=e.getUInt32();break;default:e.skip()}return s}function q(e,t){const s=t.createFeatureResult();s.geometryType=d(t,0);let r=!1;for(;e.next();)switch(e.tag()){case 1:s.objectIdFieldName=e.getString();break;case 3:s.globalIdFieldName=e.getString();break;case 4:s.geohashFieldName=e.getString();break;case 5:s.geometryProperties=e.processMessage(F);break;case 7:s.geometryType=d(t,e.getEnum());break;case 8:s.spatialReference=e.processMessageWithArgs(I,t);break;case 10:s.hasZ=e.getBool();break;case 11:s.hasM=e.getBool();break;case 12:s.transform=e.processMessage(T);break;case 9:{const t=e.getBool();s.exceededTransferLimit=t;break}case 13:t.addField(s,e.processMessage(k));break;case 15:r||(t.prepareFeatures(s),r=!0),t.addFeature(s,e.processMessageWithArgs(x,t,s,s.fields));break;case 2:s.uniqueIdField=e.processMessage(b);break;default:e.skip()}return t.finishFeatureResult(s),s}function R(e,t){const s={};let r=null;for(;e.next();)switch(e.tag()){case 4:r=e.processMessageWithArgs(m);break;case 1:s.featureResult=e.processMessageWithArgs(q,t);break;default:e.skip()}return(0,n.pC)(r)&&s.featureResult&&t.addQueryGeometry(s,r),s}function Z(e,t){try{const s=2,r=new i.Z(new Uint8Array(e),new DataView(e)),n={};for(;r.next();)r.tag()===s?n.queryResult=r.processMessageWithArgs(R,t):r.skip();return n}catch(e){throw new r.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},78760:(e,t,s)=>{s.d(t,{A:()=>u,J:()=>l});var r=s(67900),n=s(8744),i=s(70272),o=s(44876),a=s(5428);const u=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class l{constructor(e){this.options=e,this.geometryTypes=u,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new o.Z}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,n.fS)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,r._R)(this.options.sourceSpatialReference)/(0,r._R)(e.spatialReference);if(1!==t)for(const s of e.features){if(!(0,i.S6)(s))continue;const e=s.geometry.coords;for(let s=2;s<e.length;s+=3)e[s]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.ZP}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.Z}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.Z}}},45178:(e,t,s)=>{s.d(t,{C:()=>n});var r=s(77863);function n(e,t){const s=(0,r.K9)(e,t),n=s.queryResult.featureResult,i=s.queryResult.queryGeometry,o=s.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=o),n}},34599:(e,t,s)=>{s.r(t),s.d(t,{executeQuery:()=>f,executeQueryForCount:()=>m,executeQueryForExtent:()=>_,executeQueryForIds:()=>y,executeQueryPBF:()=>d,executeQueryPBFBuffer:()=>g,queryToQueryStringParameters:()=>p,runQuery:()=>k});var r=s(3172),n=s(70586),i=s(17452),o=s(33955),a=s(38581),u=s(45178),l=s(28694),c=s(99306);const h="Layer does not support extent calculation.";function p(e,t){const s=e.geometry,r=e.toJSON(),i=r;if((0,n.pC)(s)&&(i.geometry=JSON.stringify(s),i.geometryType=(0,o.Ji)(s),i.inSR=s.spatialReference.wkid||JSON.stringify(s.spatialReference)),r.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(i.objectIds=r.objectIds.join(",")),r.orderByFields&&(i.orderByFields=r.orderByFields.join(",")),!r.outFields||!r.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete i.outFields:-1!==r.outFields.indexOf("*")?i.outFields="*":i.outFields=r.outFields.join(","),r.outSR?i.outSR=r.outSR.wkid||JSON.stringify(r.outSR):s&&(r.returnGeometry||r.returnCentroid)&&(i.outSR=i.inSR),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(i.outStatistics=JSON.stringify(r.outStatistics)),r.pixelSize&&(i.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(i.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.parameterValues&&(i.parameterValues=JSON.stringify(r.parameterValues)),r.rangeValues&&(i.rangeValues=JSON.stringify(r.rangeValues)),r.dynamicDataSource&&(i.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r.timeExtent){const e=r.timeExtent,{start:t,end:s}=e;null==t&&null==s||(i.time=t===s?t:`${null==t?"null":t},${null==s?"null":s}`),delete r.timeExtent}return i}async function f(e,t,s,r){const i=(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await k(e,t,"json",r);return(0,l.p)(t,s,i.data),i}async function d(e,t,s,r){if((0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty)return Promise.resolve({data:s.createFeatureResult()});const i=await g(e,t,r),o=i;return o.data=(0,u.C)(i.data,s),o}function g(e,t,s){return k(e,t,"pbf",s)}function y(e,t,s){return(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):k(e,t,"json",s,{returnIdsOnly:!0})}function m(e,t,s){return(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):k(e,t,"json",s,{returnIdsOnly:!0,returnCountOnly:!0})}function _(e,t,s){return(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):k(e,t,"json",s,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(h);if(t.hasOwnProperty("count"))throw new Error(h);return e}))}function k(e,t,s,o={},u={}){const l="string"==typeof e?(0,i.mN)(e):e,h=t.geometry?[t.geometry]:[];return o.responseType="pbf"===s?"array-buffer":"json",(0,a.aX)(h,null,o).then((e=>{const a=e&&e[0];(0,n.pC)(a)&&((t=t.clone()).geometry=a);const h=(0,c.A)({...l.query,f:s,...u,...p(t,u)});return(0,r.default)((0,i.v_)(l.path,"query"),{...o,query:{...h,...o.query}})}))}},28694:(e,t,s)=>{s.d(t,{p:()=>i});var r=s(70586),n=s(69285);function i(e,t,s){if(!s||!s.features||!s.hasZ)return;const i=(0,n.k)(s.geometryType,t,e.outSpatialReference);if(!(0,r.Wi)(i))for(const e of s.features)i(e.geometry)}},99306:(e,t,s)=>{function r(e){const t={};for(const s in e){if("declaredClass"===s)continue;const n=e[s];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[s]=[];for(let e=0;e<n.length;e++)t[s][e]=r(n[e])}else"object"==typeof n?n.toJSON&&(t[s]=JSON.stringify(n)):t[s]=n}return t}s.d(t,{A:()=>r})}}]);