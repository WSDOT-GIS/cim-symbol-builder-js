(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[34],{1020:function(t,e,n){"use strict";n.r(e),n.d(e,"loadGLTFMesh",(function(){return M}));var r=n(25),o=n(44),c=n(152),a=n(2),s=n(199),i=n(644),u=n(67),l=n(728),b=n(859),f=n(861),O=n(860),j=n(786),p=n(660),m=n(694),d=n(928),g=n(938),x=n(720),h=n(929),w=n(937),y=n(930),k=n(891),v=n(931),C=n(722),B=n(803),A=n(802);async function M(t,e,n){const s=new h.a(function(t){return null!=t&&t.resolveFile?{busy:!1,request:async(e,n,r)=>{const c=t.resolveFile(e),s="image"===n?"image":"binary"===n?"array-buffer":"json";return(await Object(o.default)(c,{responseType:s,signal:Object(a.k)(r)?r.signal:null})).data}}:null}(n)),i=(await Object(w.a)(s,e,n,!0)).model,b=i.lods.shift(),m=new Map,d=new Map;i.textures.forEach((t,e)=>m.set(e,function(t){return new O.a({data:t.data,wrap:E(t.parameters.wrap)})}(t))),i.materials.forEach((t,e)=>d.set(e,function(t,e){const n=new r.a(function(t,e){return Object(l.c)(R(t[0]),R(t[1]),R(t[2]),e)}(t.color,t.opacity)),o=t.emissiveFactor?new r.a(function(t){return Object(u.g)(R(t[0]),R(t[1]),R(t[2]))}(t.emissiveFactor)):null;return new f.a({color:n,colorTexture:Object(a.r)(Object(a.c)(t.textureColor,t=>e.get(t))),normalTexture:Object(a.r)(Object(a.c)(t.textureNormal,t=>e.get(t))),emissiveColor:o,emissiveTexture:Object(a.r)(Object(a.c)(t.textureEmissive,t=>e.get(t))),occlusionTexture:Object(a.r)(Object(a.c)(t.textureOcclusion,t=>e.get(t))),alphaMode:S(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:Object(a.r)(Object(a.c)(t.textureMetallicRoughness,t=>e.get(t)))})}(t,m)));const y=function(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},r=new Map,o=new Map,a=[];for(const s of t.parts){const{attributes:{position:t,normal:i,color:u,tangent:l,texCoord0:b}}=s,f=`\n      ${T(t,r)}/\n      ${T(i,r)}/\n      ${T(u,r)}/\n      ${T(l,r)}/\n      ${T(b,r)}/\n      ${$(s.transform)}\n    `;let O=!1;const j=Object(c.a)(o,f,()=>(O=!0,{start:e,length:t.count}));O&&(e+=t.count),i&&(n.normal=!0),u&&(n.color=!0),l&&(n.tangent=!0),b&&(n.texCoord0=!0),a.push({gltf:s,writeVertices:O,region:j})}return{vertexAttributes:{position:Object(g.a)(p.v,e),normal:n.normal?Object(g.a)(p.u,e):null,tangent:n.tangent?Object(g.a)(p.C,e):null,color:n.color?Object(g.a)(p.J,e):null,texCoord0:n.texCoord0?Object(g.a)(p.m,e):null},parts:a,components:[]}}(b);for(const r of y.parts)F(y,r,d);const{position:k,normal:v,tangent:C,color:B,texCoord0:A}=y.vertexAttributes,M={position:k.typedBuffer,normal:Object(a.k)(v)?v.typedBuffer:null,tangent:Object(a.k)(C)?C.typedBuffer:null,uv:Object(a.k)(A)?A.typedBuffer:null,color:Object(a.k)(B)?B.typedBuffer:null},J=Object(x.c)(M,t,n);return{transform:J.transform,components:y.components,spatialReference:t.spatialReference,vertexAttributes:new j.c({position:J.vertexAttributes.position,normal:J.vertexAttributes.normal,tangent:J.vertexAttributes.tangent,color:M.color,uv:M.uv})}}function T(t,e){if(Object(a.j)(t))return"-";const n=t.typedBuffer;return`${Object(c.a)(e,n.buffer,()=>e.size)}/${n.byteOffset}/${n.byteLength}`}function $(t){return Object(a.k)(t)?t.toString():"-"}function F(t,e,n){e.writeVertices&&function(t,e){const{position:n,normal:r,tangent:o,color:c,texCoord0:u}=t.vertexAttributes,l=e.region.start,{attributes:b,transform:f}=e.gltf,O=b.position.count;if(Object(m.e)(n.slice(l,O),b.position,f),Object(a.k)(b.normal)&&Object(a.k)(r)){const t=Object(s.a)(Object(i.b)(),f);Object(m.a)(r.slice(l,O),b.normal,t)}else Object(a.k)(r)&&Object(C.b)(r,0,0,1,{dstIndex:l,count:O});if(Object(a.k)(b.tangent)&&Object(a.k)(o)){const t=Object(s.a)(Object(i.b)(),f);Object(d.c)(o.slice(l,O),b.tangent,t)}else Object(a.k)(o)&&Object(B.b)(o,0,0,1,1,{dstIndex:l,count:O});if(Object(a.k)(b.texCoord0)&&Object(a.k)(u)?Object(A.b)(u.slice(l,O),b.texCoord0):Object(a.k)(u)&&Object(A.a)(u,0,0,{dstIndex:l,count:O}),Object(a.k)(b.color)&&Object(a.k)(c)){const t=b.color,e=c.slice(l,O);if(4===t.elementCount)t instanceof p.C?Object(d.b)(e,t,255):t instanceof p.J?Object(B.a)(e,t):t instanceof p.H&&Object(d.a)(e,t,8);else{Object(B.b)(e,255,255,255,255);const n=p.B.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof p.u?Object(m.d)(n,t,255):t instanceof p.B?Object(C.a)(n,t):t instanceof p.z&&Object(m.b)(n,t,8)}}else Object(a.k)(c)&&Object(B.b)(c.slice(l,O),255,255,255,255)}(t,e);const r=e.gltf,o=function(t,e){switch(e){case 4:return Object(y.c)(t,k.d);case 5:return Object(y.b)(t);case 6:return Object(y.a)(t)}}(r.indices||r.attributes.position.count,r.primitiveType),c=e.region.start;if(c)for(let a=0;a<o.length;a++)o[a]+=c;t.components.push(new b.a({faces:o,material:n.get(r.material),trustSourceNormals:!0}))}function S(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function E(t){return{horizontal:J(t.s),vertical:J(t.t)}}function J(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function R(t){return t**(1/v.a)*255}}}]);
//# sourceMappingURL=34.291d6bae.chunk.js.map