"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3782],{22303:(t,e,s)=>{s.d(e,{Z:()=>l});var i=s(35270),r=s(22021),n=s(70586),o=s(75215);function a(t){return(0,r.uZ)((0,o.vU)(t),0,255)}function h(t,e,s){return t=Number(t),isNaN(t)?s:t<e?e:t>s?s:t}class l{constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}static blendColors(t,e,s,i=new l){return i.r=Math.round(t.r+(e.r-t.r)*s),i.g=Math.round(t.g+(e.g-t.g)*s),i.b=Math.round(t.b+(e.b-t.b)*s),i.a=t.a+(e.a-t.a)*s,i._sanitize()}static fromRgb(t,e){const s=t.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(s){const t=s[2].split(/\s*,\s*/),r=s[1];if("rgb"===r&&3===t.length||"rgba"===r&&4===t.length){const s=t[0];if("%"===s.charAt(s.length-1)){const s=t.map((t=>2.56*parseFloat(t)));return 4===t.length&&(s[3]=parseFloat(t[3])),l.fromArray(s,e)}return l.fromArray(t.map((t=>parseFloat(t))),e)}if("hsl"===r&&3===t.length||"hsla"===r&&4===t.length)return l.fromArray((0,i.B7)(parseFloat(t[0]),parseFloat(t[1])/100,parseFloat(t[2])/100,parseFloat(t[3])),e)}return null}static fromHex(t,e=new l){if(4!==t.length&&7!==t.length||"#"!==t[0])return null;const s=4===t.length?4:8,i=(1<<s)-1;let r=Number("0x"+t.substr(1));return isNaN(r)?null:(["b","g","r"].forEach((t=>{const n=r&i;r>>=s,e[t]=4===s?17*n:n})),e.a=1,e)}static fromArray(t,e=new l){return e._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(e.a)&&(e.a=1),e._sanitize()}static fromString(t,e){const s=(0,i.h$)(t);return s&&l.fromArray(s,e)||l.fromRgb(t,e)||l.fromHex(t,e)}static fromJSON(t){return t&&new l([t[0],t[1],t[2],t[3]/255])}static toUnitRGB(t){return(0,n.pC)(t)?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return(0,n.pC)(t)?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){if("string"==typeof t)l.fromString(t,this);else if(Array.isArray(t))l.fromArray(t,this);else{var e,s,i,r;this._set(null!=(e=t.r)?e:0,null!=(s=t.g)?s:0,null!=(i=t.b)?i:0,null!=(r=t.a)?r:1),t instanceof l||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const t=this.r.toString(16),e=this.g.toString(16),s=this.b.toString(16);return`#${t.length<2?"0"+t:t}${e.length<2?"0"+e:e}${s.length<2?"0"+s:s}`}toCss(t=!1){const e=this.r+", "+this.g+", "+this.b;return t?`rgba(${e}, ${this.a})`:`rgb(${e})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=0){const e=a(this.r),s=a(this.g),i=a(this.b);return 0===t||1!==this.a?[e,s,i,a(255*this.a)]:[e,s,i]}clone(){return new l(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}_sanitize(){return this.r=Math.round(h(this.r,0,255)),this.g=Math.round(h(this.g,0,255)),this.b=Math.round(h(this.b,0,255)),this.a=h(this.a,0,1),this}_set(t,e,s,i){this.r=t,this.g=e,this.b=s,this.a=i}}l.prototype.declaredClass="esri.Color"},69801:(t,e,s)=>{s.d(e,{Xq:()=>n,WJ:()=>o});var i=s(70586),r=s(44553);class n{constructor(t,e,s){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(t,e,s,i=0){this._storage.put(this._namespace+t,e,s,i)}get(t){const e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}pop(t){const e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,s){this._storage.updateSize(this._namespace+t,e,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class o{constructor(t=10485760){this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new r.Z,this._users=new r.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}put(t,e,s,i){const r=this._db.get(t);if(r&&(this._size-=r.size,this._db.delete(t),r.entry!==e&&this._notifyRemove(t,r.entry,0)),s>this._maxSize)return void this._notifyRemove(t,e,0);if(void 0===e)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const n=1+Math.max(i,-3)- -3;this._db.set(t,{entry:e,size:s,lifetime:n,lives:n}),this._size+=s,this._checkSizeLimit()}updateSize(t,e,s){const r=this._db.get(t);if(r&&r.entry===e){for(this._size-=r.size;s>this._maxSize;){const r=this._notifyRemove(t,e,1);if(!((0,i.pC)(r)&&r>0))return void this._db.delete(t);s=r}r.size=s,this._size+=s,this._checkSizeLimit()}}pop(t){const e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(t){const e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}getStats(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},s=new Array;this._db.forEach(((t,i)=>{const r=t.lifetime;s[r]=(s[r]||0)+t.size,this._users.forAll((s=>{const r=s.namespace;if(i.startsWith(r)){const s=e[r]||0;e[r]=s+t.size}}))}));const i={};this._users.forAll((t=>{const s=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){const r=e[s]||0;e[s]=r,i[s]=Math.round(100*t.hitRate)+"%"}else i[s]="0%"}));const r=Object.keys(e);r.sort(((t,s)=>e[s]-e[t])),r.forEach((s=>t[s]=Math.round(e[s]/2**20)+"MB / "+i[s]));for(let e=s.length-1;e>=0;--e){const i=s[e];i&&(t["Priority "+(e+-3-1)]=Math.round(i/this.size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){this._db.forEach(((e,s)=>{s.startsWith(t)&&(this._size-=e.size,this._db.delete(s),this._notifyRemove(s,e.entry,0))}))}clearAll(){this._db.forEach(((t,e)=>this._notifyRemove(e,t.entry,0))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,s){let i;return this._removeFuncs.some((r=>{if(t.startsWith(r[0])){const t=r[1](e,s);return"number"==typeof t&&(i=t),!0}return!1})),i}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[t,e]of this._db){if(this._db.delete(t),e.lives<=1){this._size-=e.size;const s=this._notifyRemove(t,e.entry,1);(0,i.pC)(s)&&s>0&&(this._size+=s,e.lives=e.lifetime,e.size=s,this._db.set(t,e))}else--e.lives,this._db.set(t,e);if(this._size<=.9*this.maxSize)return}}}},38581:(t,e,s)=>{s.d(e,{aX:()=>v});var i=s(68773),r=s(20102),n=s(92604),o=s(70586),a=s(17332),h=s(58901),l=s(73913),c=s(8744),u=s(40488),p=(s(66577),s(3172)),m=s(17452),f=s(33955);const g=n.Z.getLogger("esri.geometry.support.normalizeUtils");function _(t){return"polygon"===t[0].type}function y(t){return"polyline"===t[0].type}function d(t,e,s){if(e){const e=function(t,e){if(!(t instanceof h.Z||t instanceof a.Z)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(t),new r.Z(t)}const s=(0,l.x3)(t),i=[];for(const t of s){const s=[];i.push(s),s.push([t[0][0],t[0][1]]);for(let i=0;i<t.length-1;i++){const r=t[i][0],n=t[i][1],o=t[i+1][0],a=t[i+1][1],h=Math.sqrt((o-r)*(o-r)+(a-n)*(a-n)),l=(a-n)/h,c=(o-r)/h,u=h/e;if(u>1){for(let t=1;t<=u-1;t++){const i=t*e,o=c*i+r,a=l*i+n;s.push([o,a])}const t=(h+Math.floor(u-1)*e)/2,i=c*t+r,o=l*t+n;s.push([i,o])}s.push([o,a])}}return function(t){return"polygon"===t.type}(t)?new a.Z({rings:i,spatialReference:t.spatialReference}):new h.Z({paths:i,spatialReference:t.spatialReference})}(t,1e6);t=(0,u.Sx)(e,!0)}return s&&(t=(0,l.Sy)(t,s)),t}function b(t,e,s){if(Array.isArray(t)){const i=t[0];if(i>e){const s=(0,l.XZ)(i,e);t[0]=i+s*(-2*e)}else if(i<s){const e=(0,l.XZ)(i,s);t[0]=i+e*(-2*s)}}else{const i=t.x;if(i>e){const s=(0,l.XZ)(i,e);t=t.clone().offset(s*(-2*e),0)}else if(i<s){const e=(0,l.XZ)(i,s);t=t.clone().offset(e*(-2*s),0)}}return t}function S(t,e){let s=-1;for(let i=0;i<e.cutIndexes.length;i++){const r=e.cutIndexes[i],n=e.geometries[i],o=(0,l.x3)(n);for(let t=0;t<o.length;t++){const e=o[t];e.some((s=>{if(s[0]<180)return!0;{let s=0;for(let t=0;t<e.length;t++){const i=e[t][0];s=i>s?i:s}s=Number(s.toFixed(9));const i=-360*(0,l.XZ)(s,180);for(let s=0;s<e.length;s++){const e=n.getPoint(t,s);n.setPoint(t,s,e.clone().offset(i,0))}return!0}}))}if(r===s){if(_(t))for(const e of(0,l.x3)(n))t[r]=t[r].addRing(e);else if(y(t))for(const e of(0,l.x3)(n))t[r]=t[r].addPath(e)}else s=r,t[r]=n}return t}async function v(t,e,s){var r;if(!Array.isArray(t))return v([t],e);const n=null!=(r=null==e?void 0:e.url)?r:i.Z.geometryServiceUrl;let g,_,y,z,x,R,Z,w,C=0;const N=[],M=[];for(const e of t)if((0,o.Wi)(e))M.push(e);else if(g||(g=e.spatialReference,_=(0,c.C5)(g),y=g.isWebMercator,R=y?102100:4326,z=l.UZ[R].maxX,x=l.UZ[R].minX,Z=l.UZ[R].plus180Line,w=l.UZ[R].minus180Line),_)if("mesh"===e.type)M.push(e);else if("point"===e.type)M.push(b(e.clone(),z,x));else if("multipoint"===e.type){const t=e.clone();t.points=t.points.map((t=>b(t,z,x))),M.push(t)}else if("extent"===e.type){const t=e.clone()._normalize(!1,!1,_);M.push(t.rings?new a.Z(t):t)}else if(e.extent){const t=e.extent,s=(0,l.XZ)(t.xmin,x)*(2*z);let i=0===s?e.clone():(0,l.Sy)(e.clone(),s);t.offset(s,0),t.intersects(Z)&&t.xmax!==z?(C=t.xmax>C?t.xmax:C,i=d(i,y),N.push(i),M.push("cut")):t.intersects(w)&&t.xmin!==x?(C=t.xmax*(2*z)>C?t.xmax*(2*z):C,i=d(i,y,360),N.push(i),M.push("cut")):M.push(i)}else M.push(e.clone());else M.push(e);let A=(0,l.XZ)(C,z),F=-90;const L=A,J=new h.Z;for(;A>0;){const t=360*A-180;J.addPath([[t,F],[t,-1*F]]),F*=-1,A--}if(N.length>0&&L>0){const e=S(N,await async function(t,e,s,i){const r="string"==typeof t?(0,m.mN)(t):t,n=e[0].spatialReference,o={...i,query:{...r.query,f:"json",sr:JSON.stringify(n),target:JSON.stringify({geometryType:(0,f.Ji)(e[0]),geometries:e}),cutter:JSON.stringify(s)}},a=await(0,p.default)(r.path+"/cut",o),{cutIndexes:h,geometries:l=[]}=a.data;return{cutIndexes:h,geometries:l.map((t=>{const e=(0,f.im)(t);return e.spatialReference=n,e}))}}(n,N,J,s)),i=[],r=[];for(let s=0;s<M.length;s++){const n=M[s];if("cut"!==n)r.push(n);else{const n=e.shift(),a=t[s];(0,o.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&n.rings.length>=a.rings.length?(i.push(n),r.push("simplify")):r.push(y?(0,u.$)(n):n)}}if(!i.length)return r;const a=await async function(t,e,s){const i="string"==typeof t?(0,m.mN)(t):t,r=e[0].spatialReference,n=(0,f.Ji)(e[0]),o={...s,query:{...i.query,f:"json",sr:r.wkid?r.wkid:JSON.stringify(r),geometries:JSON.stringify((a=e,{geometryType:(0,f.Ji)(a[0]),geometries:a.map((t=>t.toJSON()))}))}};var a;return function(t,e,s){const i=(0,f.q9)(e);return t.map((t=>{const e=i.fromJSON(t);return e.spatialReference=s,e}))}((await(0,p.default)(i.path+"/simplify",o)).data,n,r)}(n,i,s),h=[];for(let t=0;t<r.length;t++){const e=r[t];"simplify"!==e?h.push(e):h.push(y?(0,u.$)(a.shift()):a.shift())}return h}const O=[];for(let t=0;t<M.length;t++){const e=M[t];if("cut"!==e)O.push(e);else{const t=N.shift();O.push(!0===y?(0,u.$)(t):t)}}return Promise.resolve(O)}},73913:(t,e,s)=>{s.d(e,{UZ:()=>o,x3:()=>l,XZ:()=>a,Sy:()=>h});var i=s(58901),r=s(82971),n=s(33955);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new i.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.Z.WebMercator}),minus180Line:new i.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new i.Z({paths:[[[180,-180],[180,180]]],spatialReference:r.Z.WGS84}),minus180Line:new i.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:r.Z.WGS84})}};function a(t,e){return Math.ceil((t-e)/(2*e))}function h(t,e){const s=l(t);for(const t of s)for(const s of t)s[0]+=e;return t}function l(t){return(0,n.oU)(t)?t.rings:t.paths}},98046:(t,e,s)=>{s.d(e,{Z:()=>m});var i,r=s(43697),n=s(22303),o=s(22974),a=s(5600),h=s(75215),l=s(36030),c=s(52011),u=s(899);let p=i=class extends u.Z{constructor(t){super(t),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new i({fromColor:(0,o.d9)(this.fromColor),toColor:(0,o.d9)(this.toColor),algorithm:this.algorithm})}};(0,r._)([(0,l.J)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],p.prototype,"algorithm",void 0),(0,r._)([(0,a.Cb)({type:n.Z,json:{type:[h.z8],write:!0}})],p.prototype,"fromColor",void 0),(0,r._)([(0,a.Cb)({type:n.Z,json:{type:[h.z8],write:!0}})],p.prototype,"toColor",void 0),(0,r._)([(0,a.Cb)({type:["algorithmic"]})],p.prototype,"type",void 0),p=i=(0,r._)([(0,c.j)("esri.rest.support.AlgorithmicColorRamp")],p);const m=p},899:(t,e,s)=>{s.d(e,{Z:()=>h});var i=s(43697),r=s(10736),n=s(5600),o=(s(67676),s(80442),s(75215),s(52011));let a=class extends r.wq{constructor(t){super(t),this.type=null}};(0,i._)([(0,n.Cb)({readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,i._)([(0,o.j)("esri.rest.support.ColorRamp")],a);const h=a},1515:(t,e,s)=>{s.d(e,{Z:()=>u});var i,r=s(43697),n=s(22974),o=s(5600),a=(s(75215),s(52011)),h=s(98046),l=s(899);let c=i=class extends l.Z{constructor(t){super(t),this.colorRamps=null,this.type="multipart"}clone(){return new i({colorRamps:(0,n.d9)(this.colorRamps)})}};(0,r._)([(0,o.Cb)({type:[h.Z],json:{write:!0}})],c.prototype,"colorRamps",void 0),(0,r._)([(0,o.Cb)({type:["multipart"]})],c.prototype,"type",void 0),c=i=(0,r._)([(0,a.j)("esri.rest.support.MultipartColorRamp")],c);const u=c},94593:(t,e,s)=>{s.d(e,{i:()=>a,V:()=>o});var i=s(98046),r=s(899),n=s(1515);const o={key:"type",base:r.Z,typeMap:{algorithmic:i.Z,multipart:n.Z}};function a(t){return t&&t.type?"algorithmic"===t.type?i.Z.fromJSON(t):"multipart"===t.type?n.Z.fromJSON(t):null:null}},89164:(t,e,s)=>{s.d(e,{Z:()=>m});var i=s(43697),r=s(22303),n=s(35454),o=s(10736),a=s(5600),h=(s(67676),s(80442),s(75215),s(71715)),l=s(52011);const c=new n.Xn({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let u=0,p=class extends o.wq{constructor(t){super(t),this.id="sym"+u++,this.type=null}set color(t){this._set("color",t)}readColor(t){return t&&null!=t[0]?[t[0],t[1],t[2],t[3]/255]:t}async collectRequiredFields(t,e){}hash(){return JSON.stringify(this.toJSON())}clone(){}};(0,i._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:c.write}}})],p.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:r.Z,value:new r.Z([0,0,0,1]),json:{write:{allowNull:!0}}})],p.prototype,"color",null),(0,i._)([(0,h.r)("color")],p.prototype,"readColor",null),p=(0,i._)([(0,l.j)("esri.symbols.Symbol")],p);const m=p}}]);