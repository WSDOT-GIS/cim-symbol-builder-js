"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4543],{43609:(e,_,E)=>{E.d(_,{a:()=>R,f:()=>n,n:()=>T});var t=E(34275);function T(e,_){R(e.typedBuffer,_.typedBuffer,e.typedBufferStride,_.typedBufferStride)}function R(e,_,E=2,T=E){const R=_.length/2;let n=0,A=0;if((0,t.cy)(_)||(0,t.dk)(_)){for(let t=0;t<R;++t)e[n]=_[A],e[n+1]=_[A+1],n+=E,A+=T;return}const r=(0,t.a3)(_);if((0,t.JI)(_))for(let t=0;t<R;++t)e[n]=Math.max(_[A]/r,-1),e[n+1]=Math.max(_[A+1]/r,-1),n+=E,A+=T;else for(let t=0;t<R;++t)e[n]=_[A]/r,e[n+1]=_[A+1]/r,n+=E,A+=T}function n(e,_,E,t){const T=e.typedBuffer,R=e.typedBufferStride,n=t?.count??e.count;let A=(t?.dstIndex??0)*R;for(let e=0;e<n;++e)T[A]=_,T[A+1]=E,A+=R}Object.freeze(Object.defineProperty({__proto__:null,fill:n,normalizeIntegerBuffer:R,normalizeIntegerBufferView:T},Symbol.toStringTag,{value:"Module"}))},51737:(e,_,E)=>{function t(e,_){T(e.typedBuffer,_.typedBuffer,e.typedBufferStride,_.typedBufferStride)}function T(e,_,E=3,t=E){const T=_.length/t;let R=0,n=0;for(let A=0;A<T;++A)e[R]=_[n],e[R+1]=_[n+1],e[R+2]=_[n+2],R+=E,n+=t}function R(e,_,E,t,T){const R=e.typedBuffer,n=e.typedBufferStride,A=T?.count??e.count;let r=(T?.dstIndex??0)*n;for(let e=0;e<A;++e)R[r]=_,R[r+1]=E,R[r+2]=t,r+=n}E.d(_,{a:()=>t,c:()=>T,f:()=>R}),Object.freeze(Object.defineProperty({__proto__:null,copy:T,copyView:t,fill:R},Symbol.toStringTag,{value:"Module"}))},78358:(e,_,E)=>{function t(e,_){T(e.typedBuffer,_,e.typedBufferStride)}function T(e,_,E=4){const t=_.typedBuffer,T=_.typedBufferStride,R=_.count;let n=0,A=0;for(let _=0;_<R;++_)e[n]=t[A],e[n+1]=t[A+1],e[n+2]=t[A+2],e[n+3]=t[A+3],n+=E,A+=T}function R(e,_,E,t,T,R){const n=e.typedBuffer,A=e.typedBufferStride,r=R?.count??e.count;let o=(R?.dstIndex??0)*A;for(let e=0;e<r;++e)n[o]=_,n[o+1]=E,n[o+2]=t,n[o+3]=T,o+=A}E.d(_,{a:()=>T,c:()=>t,f:()=>R}),Object.freeze(Object.defineProperty({__proto__:null,copy:T,copyView:t,fill:R},Symbol.toStringTag,{value:"Module"}))},90239:(e,_,E)=>{function t(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}E.d(_,{GJ:()=>t})},94543:(e,_,E)=>{E.r(_),E.d(_,{loadGLTFMesh:()=>m});var t=E(68197),T=E(78888),R=E(49186),n=E(91869),A=E(34727),r=E(77690),o=E(29242),N=E(51850),S=E(91829),O=E(16939),C=E(80882),I=E(35063),u=E(51147),a=E(1193),c=E(27615),s=E(13030),i=E(73354),f=E(65686),l=E(90239);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,_,E){const t=e.typedBuffer,T=e.typedBufferStride,R=_.typedBuffer,n=_.typedBufferStride,A=E?E.count:_.count;let r=(E?.dstIndex??0)*T,o=(E?.srcIndex??0)*n;for(let e=0;e<A;++e){for(let e=0;e<9;++e)t[r+e]=R[o+e];r+=T,o+=n}}},Symbol.toStringTag,{value:"Module"})),Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,_,E){const t=e.typedBuffer,T=e.typedBufferStride,R=_.typedBuffer,n=_.typedBufferStride,A=E?E.count:_.count;let r=(E?.dstIndex??0)*T,o=(E?.srcIndex??0)*n;for(let e=0;e<A;++e){for(let e=0;e<16;++e)t[r+e]=R[o+e];r+=T,o+=n}}},Symbol.toStringTag,{value:"Module"})),E(24045);var L=E(43609),M=E(51737),D=E(78358);function G(e,_){return new e(new ArrayBuffer(_*e.ElementCount*(0,l.GJ)(e.ElementType)))}var U=E(72258),P=E(21015),B=E(4399),d=E(84498),F=E(51530),H=E(61765),p=E(63907);async function m(e,_,E){const r=new P.R(function(e){const _=e?.resolveFile;return _?{busy:!1,request:async(e,E,t)=>{const R=_?.(e)??e,n="image"===E?"image":"binary"===E||"image+type"===E?"array-buffer":"json";return(await(0,T.A)(R,{responseType:n,signal:t?.signal,timeout:0})).data}}:null}(E)),o=(await(0,B.loadGLTF)(r,_,E,!0)).model,O=o.lods.shift(),i=new Map,f=new Map;o.textures.forEach(((e,_)=>i.set(_,function(e){return new I.A({data:((0,F.x3)(e.data),e.data),wrap:V(e.parameters.wrap)})}(e)))),o.materials.forEach(((e,_)=>f.set(_,function(e,_){const E=new t.A(function(e,_){return(0,S.fA)(X(e[0]),X(e[1]),X(e[2]),_)}(e.color,e.opacity)),T=e.emissiveFactor?new t.A(function(e){return(0,N.fA)(X(e[0]),X(e[1]),X(e[2]))}(e.emissiveFactor)):null,R=e=>e?new u.A({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,A.KJ)(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new C.A({color:E,colorTexture:_.get(e.textureColor),normalTexture:_.get(e.textureNormal),emissiveColor:T,emissiveTexture:_.get(e.textureEmissive),occlusionTexture:_.get(e.textureOcclusion),alphaMode:b(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:_.get(e.textureMetallicRoughness),colorTextureTransform:R(e.colorTextureTransform),normalTextureTransform:R(e.normalTextureTransform),occlusionTextureTransform:R(e.occlusionTextureTransform),emissiveTextureTransform:R(e.emissiveTextureTransform),metallicRoughnessTextureTransform:R(e.metallicRoughnessTextureTransform)})}(e,i))));const l=function(e){let _=0;const E={color:!1,tangent:!1,normal:!1,texCoord0:!1},t=new Map,T=new Map,R=[];for(const A of e.parts){const{attributes:{position:e,normal:r,color:o,tangent:N,texCoord0:S}}=A,O=`\n      ${y(e,t)}/\n      ${y(r,t)}/\n      ${y(o,t)}/\n      ${y(N,t)}/\n      ${y(S,t)}/\n      ${g(A.transform)}\n    `;let C=!1;const I=(0,n.tE)(T,O,(()=>(C=!0,{start:_,length:e.count})));C&&(_+=e.count),r&&(E.normal=!0),o&&(E.color=!0),N&&(E.tangent=!0),S&&(E.texCoord0=!0),R.push({gltf:A,writeVertices:C,region:I})}return{vertexAttributes:{position:G(s.Xm,_),normal:E.normal?G(s.xs,_):null,tangent:E.tangent?G(s.Eq,_):null,color:E.color?G(s.XP,_):null,texCoord0:E.texCoord0?G(s.gH,_):null},parts:R,components:[]}}(O);for(const e of l.parts)x(l,e,f);const{position:L,normal:M,tangent:D,color:d,texCoord0:H}=l.vertexAttributes,p=(0,c.TE)(e,E),m=e.spatialReference.isGeographic?(0,c.TE)(e):p,h=(0,U.UR)({vertexAttributes:{position:L.typedBuffer,normal:M?.typedBuffer,tangent:D?.typedBuffer},vertexSpace:m,spatialReference:e.spatialReference},p,{allowBufferReuse:!0,sourceUnit:E?.unitConversionDisabled?void 0:"meters"});if(!h)throw new R.A("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${m.type} to ${p.type}`);return{transform:null,vertexSpace:p,components:l.components,spatialReference:e.spatialReference,vertexAttributes:new a.H({...h,color:d?.typedBuffer,uv:H?.typedBuffer})}}function y(e,_){if(null==e)return"-";const E=e.typedBuffer;return`${(0,n.tE)(_,E.buffer,(()=>_.size))}/${E.byteOffset}/${E.byteLength}`}function g(e){return null!=e?e.toString():"-"}function x(e,_,E){_.writeVertices&&function(e,_){const{position:E,normal:t,tangent:T,color:R,texCoord0:n}=e.vertexAttributes,N=_.region.start,{attributes:S,transform:O}=_.gltf,C=S.position.count;if((0,i.d)(E.slice(N,C),S.position,O),null!=S.normal&&null!=t){const e=(0,r.Ge)((0,o.vt)(),O),_=t.slice(N,C);(0,i.c)(_,S.normal,e),(0,A.or)(e)&&(0,i.e)(_,_)}else null!=t&&(0,M.f)(t,0,0,1,{dstIndex:N,count:C});if(null!=S.tangent&&null!=T){const e=(0,r.z0)((0,o.vt)(),O),_=T.slice(N,C);(0,f.a)(_,S.tangent,e),(0,A.or)(e)&&(0,f.n)(_,_)}else null!=T&&(0,D.f)(T,0,0,1,1,{dstIndex:N,count:C});if(null!=S.texCoord0&&null!=n?(0,L.n)(n.slice(N,C),S.texCoord0):null!=n&&(0,L.f)(n,0,0,{dstIndex:N,count:C}),null!=S.color&&null!=R){const e=S.color,_=R.slice(N,C);if(4===e.elementCount)e instanceof s.Eq?(0,f.s)(_,e,255):e instanceof s.XP?(0,D.c)(_,e):e instanceof s.Uz&&(0,f.s)(_,e,1/256);else{(0,D.f)(_,255,255,255,255);const E=s.eI.fromTypedArray(_.typedBuffer,_.typedBufferStride);e instanceof s.xs?(0,i.s)(E,e,255):e instanceof s.eI?(0,M.a)(E,e):e instanceof s.nS&&(0,i.s)(E,e,1/256)}}else null!=R&&(0,D.f)(R.slice(N,C),255,255,255,255)}(e,_);const{indices:t,attributes:T,primitiveType:R,material:n}=_.gltf;let N=(0,d.x)(t||T.position.count,R);const S=_.region.start;if(S){const e=new Uint32Array(N);for(let _=0;_<N.length;_++)e[_]+=S;N=e}e.components.push(new O.A({name:_.gltf.name,faces:N,material:E.get(n),shading:T.normal?"source":"flat",trustSourceNormals:!0}))}function b(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function V(e){return{horizontal:h(e.s),vertical:h(e.t)}}function h(e){switch(e){case p.pF.CLAMP_TO_EDGE:return"clamp";case p.pF.MIRRORED_REPEAT:return"mirror";case p.pF.REPEAT:return"repeat"}}function X(e){return e**(1/H.T)*255}},21015:(e,_,E)=>{E.d(_,{R:()=>r});var t=E(78888),T=E(60999),R=E(49186),n=E(74887),A=E(84952);class r{constructor(e){this._streamDataRequester=e}async loadJSON(e,_){return this._load("json",e,_)}async loadBinary(e,_){return(0,A.DB)(e)?((0,n.Te)(_),(0,A.lJ)(e)):this._load("binary",e,_)}async loadImage(e,_){return this._load("image",e,_)}async _load(e,_,E){if(null==this._streamDataRequester)return(await(0,t.A)(_,{responseType:o[e]})).data;const A=await(0,T.Ke)(this._streamDataRequester.request(_,e,E));if(!0===A.ok)return A.value;throw(0,n.QP)(A.error),new R.A("glt-loader-request-error",`Request for resource failed: ${A.error}`)}}const o={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},84498:(e,_,E)=>{E.d(_,{x:()=>n});var t=E(34275),T=E(97146),R=E(63907);function n(e,_){switch(_){case R.WR.TRIANGLES:return"number"==typeof(E=e)?(0,T.tM)(E):(0,t.mg)(E)?new Uint16Array(E):E;case R.WR.TRIANGLE_STRIP:return function(e){const _="number"==typeof e?e:e.length;if(_<3)return[];const E=_-2,t=(0,T.my)(3*E);if("number"==typeof e){let e=0;for(let _=0;_<E;_+=1)_%2==0?(t[e++]=_,t[e++]=_+1,t[e++]=_+2):(t[e++]=_+1,t[e++]=_,t[e++]=_+2)}else{let _=0;for(let T=0;T<E;T+=1)T%2==0?(t[_++]=e[T],t[_++]=e[T+1],t[_++]=e[T+2]):(t[_++]=e[T+1],t[_++]=e[T],t[_++]=e[T+2])}return t}(e);case R.WR.TRIANGLE_FAN:return function(e){const _="number"==typeof e?e:e.length;if(_<3)return new Uint16Array(0);const E=_-2,t=E<=65536?new Uint16Array(3*E):new Uint32Array(3*E);if("number"==typeof e){let e=0;for(let _=0;_<E;++_)t[e++]=0,t[e++]=_+1,t[e++]=_+2;return t}const T=e[0];let R=e[1],n=0;for(let _=0;_<E;++_){const E=e[_+2];t[n++]=T,t[n++]=R,t[n++]=E,R=E}return t}(e)}var E}},51530:(e,_,E)=>{E.d(_,{KB:()=>A,Xi:()=>R,pn:()=>r,x3:()=>n});var t=E(44208),T=E(89192);class R{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=T.JS.KTX2_ENCODING}}function n(e){return"encoded-mesh-texture"===e?.type}async function A(e){const _=new Blob([e]),E=await _.text();return JSON.parse(E)}async function r(e,_){if(_===T.JS.KTX2_ENCODING)return new R(e);const E=new Blob([e],{type:_}),n=URL.createObjectURL(E),A=new Image;if((0,t.A)("esri-iPhone"))return new Promise(((e,_)=>{const E=()=>{T(),e(A)},t=e=>{T(),_(e)},T=()=>{URL.revokeObjectURL(n),A.removeEventListener("load",E),A.removeEventListener("error",t)};A.addEventListener("load",E),A.addEventListener("error",t),A.src=n}));try{A.src=n,await A.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),A}},89192:(e,_,E)=>{var t,T,R,n,A,r,o,N;E.d(_,{Am:()=>n,C7:()=>R,JS:()=>N,Mg:()=>r,dd:()=>A,it:()=>T,s2:()=>t,sf:()=>o}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(t||(t={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(T||(T={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(R||(R={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(n||(n={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(A||(A={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(r||(r={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(o||(o={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(N||(N={}))},61765:(e,_,E)=>{E.d(_,{T:()=>t});const t=2.1},63907:(e,_,E)=>{var t,T,R,n,A,r,o,N,S,O,C,I,u,a,c,s,i,f,l,L,M,D,G;E.d(_,{Ab:()=>a,Ac:()=>o,Ap:()=>u,CQ:()=>P,Cj:()=>C,Co:()=>l,H0:()=>c,Hr:()=>G,MT:()=>S,NV:()=>t,NZ:()=>A,Nm:()=>D,R:()=>L,Tb:()=>n,WR:()=>T,Y7:()=>r,_U:()=>f,dn:()=>R,eA:()=>O,ld:()=>s,nI:()=>U,pF:()=>I,pe:()=>N,vt:()=>M,yQ:()=>i}),function(e){e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL",e[e.COLOR=16384]="COLOR"}(t||(t={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(e){e[e.ADD=32774]="ADD",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(n||(n={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",e[e.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(A||(A={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(o||(o={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.HALF_FLOAT=5131]="HALF_FLOAT"}(N||(N={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(S||(S={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(O||(O={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(C||(C={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(u||(u={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(a||(a={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(c||(c={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(s||(s={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(i||(i={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(f||(f={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(l||(l={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={})),function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.TransformFeedback=7]="TransformFeedback",e[e.Sync=8]="Sync",e[e.UNCOUNTED=9]="UNCOUNTED",e[e.LinesOfCode=9]="LinesOfCode",e[e.Uniform=10]="Uniform",e[e.COUNT=11]="COUNT"}(M||(M={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(D||(D={})),function(e){e[e.NONE=0]="NONE",e[e.BACK=1029]="BACK"}(G||(G={}));const U=33306;var P,B,d,F,H,p,m;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(P||(P={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(d||(d={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(F||(F={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(H||(H={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(p||(p={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))}}]);