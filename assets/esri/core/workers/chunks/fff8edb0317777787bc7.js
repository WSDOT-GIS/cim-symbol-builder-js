"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4157],{38954:(t,n,e)=>{e.d(n,{A:()=>N,B:()=>f,C:()=>M,D:()=>l,E:()=>D,F:()=>V,G:()=>x,a:()=>A,b:()=>R,c:()=>a,e:()=>w,f:()=>u,g:()=>c,h:()=>v,i:()=>m,j:()=>O,k:()=>g,l:()=>i,m:()=>S,n:()=>p,o:()=>b,p:()=>I,q:()=>T,r:()=>E,s:()=>s,t:()=>y,u:()=>P,v:()=>h,w:()=>B,x:()=>z,y:()=>d,z:()=>U});var r=e(51850),o=e(34304);function i(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function s(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function c(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function u(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function f(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function l(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function h(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function N(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function d(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t}function M(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t}function O(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function E(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t}function I(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return Math.sqrt(e*e+r*r+o*o)}function A(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return e*e+r*r+o*o}function T(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function g(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function m(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function p(t,n){const e=n[0],r=n[1],o=n[2];let i=e*e+r*r+o*o;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function S(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function R(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],s=e[1],c=e[2];return t[0]=o*c-i*s,t[1]=i*a-r*c,t[2]=r*s-o*a,t}function b(t,n,e,r){const o=n[0],i=n[1],a=n[2];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=a+r*(e[2]-a),t}function v(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12],t[1]=e[1]*r+e[5]*o+e[9]*i+e[13],t[2]=e[2]*r+e[6]*o+e[10]*i+e[14],t}function y(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=r*e[0]+o*e[3]+i*e[6],t[1]=r*e[1]+o*e[4]+i*e[7],t[2]=r*e[2]+o*e[5]+i*e[8],t}function P(t,n,e){const r=e[0],o=e[1],i=e[2],a=e[3],s=n[0],c=n[1],u=n[2],f=o*u-i*c,l=i*s-r*u,h=r*c-o*s,N=o*h-i*l,d=i*f-r*h,M=r*l-o*f,O=2*a;return t[0]=s+f*O+2*N,t[1]=c+l*O+2*d,t[2]=u+h*O+2*M,t}const C=(0,r.vt)(),L=(0,r.vt)();function w(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function D(t,n,e){const r=e[0]-n[0],o=e[1]-n[1],i=e[2]-n[2];let a=r*r+o*o+i*i;return a>0?(a=1/Math.sqrt(a),t[0]=r*a,t[1]=o*a,t[2]=i*a,t):(t[0]=0,t[1]=0,t[2]=0,t)}const U=u,F=f,_=l,V=I,B=A,x=i,z=T;Object.freeze(Object.defineProperty({__proto__:null,abs:h,add:c,angle:function(t,n){p(C,t),p(L,n);const e=S(C,L);return e>1?0:e<-1?Math.PI:Math.acos(e)},bezier:function(t,n,e,r,o,i){const a=1-i,s=a*a,c=i*i,u=s*a,f=3*i*s,l=3*c*a,h=c*i;return t[0]=n[0]*u+e[0]*f+r[0]*l+o[0]*h,t[1]=n[1]*u+e[1]*f+r[1]*l+o[1]*h,t[2]=n[2]*u+e[2]*f+r[2]*l+o[2]*h,t},ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},copy:a,cross:R,crossAndNormalize:function(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],s=e[1],c=e[2],u=o*c-i*s,f=i*a-r*c,l=r*s-o*a,h=Math.sqrt(u*u+f*f+l*l);return t[0]=u/h,t[1]=f/h,t[2]=l/h,t},direction:D,dist:V,distance:I,div:_,divide:l,dot:S,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],i=t[2],a=n[0],s=n[1],c=n[2],u=(0,o.FD)();return Math.abs(e-a)<=u*Math.max(1,Math.abs(e),Math.abs(a))&&Math.abs(r-s)<=u*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-c)<=u*Math.max(1,Math.abs(i),Math.abs(c))},exactEquals:w,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},hermite:function(t,n,e,r,o,i){const a=i*i,s=a*(2*i-3)+1,c=a*(i-2)+i,u=a*(i-1),f=a*(3-2*i);return t[0]=n[0]*s+e[0]*c+r[0]*u+o[0]*f,t[1]=n[1]*s+e[1]*c+r[1]*u+o[1]*f,t[2]=n[2]*s+e[2]*c+r[2]*u+o[2]*f,t},inverse:m,len:x,length:i,lerp:b,max:M,min:d,mul:F,multiply:f,negate:g,normalize:p,random:function(t,n=1){const e=o.Ov,r=2*e()*Math.PI,i=2*e()-1,a=Math.sqrt(1-i*i)*n;return t[0]=Math.cos(r)*a,t[1]=Math.sin(r)*a,t[2]=i*n,t},rotateX:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0],i[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),i[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),i[1]=o[1],i[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),i[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),i[2]=o[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:O,scaleAndAdd:E,set:s,sign:N,sqrDist:B,sqrLen:z,squaredDistance:A,squaredLength:T,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:U,subtract:u,transformMat3:y,transformMat4:v,transformQuat:P},Symbol.toStringTag,{value:"Module"}))},48163:(t,n,e)=>{function r(){return[0,0]}function o(t,n){return[t,n]}function i(){return o(1,1)}function a(){return o(1,0)}function s(){return o(0,1)}e.d(n,{Un:()=>c,fA:()=>o,vt:()=>r});const c=i(),u=a(),f=s();Object.freeze(Object.defineProperty({__proto__:null,ONES:c,UNIT_X:u,UNIT_Y:f,ZEROS:[0,0],clone:function(t){return[t[0],t[1]]},create:r,createView:function(t,n){return new Float64Array(t,n,2)},fromArray:function(t,n=[0,0]){const e=Math.min(2,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},fromValues:o,ones:i,unitX:a,unitY:s,zeros:function(){return[0,0]}},Symbol.toStringTag,{value:"Module"}))},51850:(t,n,e)=>{function r(){return[0,0,0]}function o(t){return[t[0],t[1],t[2]]}function i(t,n,e){return[t,n,e]}function a(t,n=[0,0,0]){const e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function s(){return i(1,1,1)}function c(){return i(1,0,0)}function u(){return i(0,1,0)}function f(){return i(0,0,1)}e.d(n,{Cb:()=>M,Cw:()=>N,JP:()=>d,Un:()=>h,ci:()=>a,fA:()=>i,o8:()=>o,uY:()=>l,vt:()=>r});const l=[0,0,0],h=s(),N=c(),d=u(),M=f();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_X:N,UNIT_Y:d,UNIT_Z:M,ZEROS:l,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,3)},fromArray:a,fromValues:i,ones:s,unitX:c,unitY:u,unitZ:f,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},91829:(t,n,e)=>{function r(){return[0,0,0,0]}function o(t,n,e,r){return[t,n,e,r]}function i(){return o(1,1,1,1)}function a(){return o(1,0,0,0)}function s(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function u(){return o(0,0,0,1)}e.d(n,{fA:()=>o,vt:()=>r});const f=i(),l=a(),h=s(),N=c(),d=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_W:d,UNIT_X:l,UNIT_Y:h,UNIT_Z:N,ZEROS:[0,0,0,0],clone:function(t){return[t[0],t[1],t[2],t[3]]},create:r,createView:function(t,n){return new Float64Array(t,n,4)},fromArray:function(t,n=[0,0,0,0]){const e=Math.min(4,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},fromValues:o,ones:i,unitW:u,unitX:a,unitY:s,unitZ:c,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},34304:(t,n,e)=>{e.d(n,{DF:()=>c,FD:()=>o,Ov:()=>i,ct:()=>u});let r=1e-6;function o(){return r}const i=Math.random,a=Math.PI/180,s=180/Math.PI;function c(t){return t*a}function u(t){return t*s}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:i,equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))},getEpsilon:o,setEpsilon:function(t){r=t},toDegree:u,toRadian:c},Symbol.toStringTag,{value:"Module"}))},34727:(t,n,e)=>{e.d(n,{$8:()=>T,Cc:()=>s,Io:()=>A,KJ:()=>f,Sp:()=>N,XM:()=>l,YN:()=>h,cU:()=>i,hs:()=>c,jU:()=>m,kU:()=>u,or:()=>p,pq:()=>S,qE:()=>a});var r=e(38954);const o=new Float32Array(1);function i(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function a(t,n,e){return Math.min(Math.max(t,n),e)}function s(t,n,e){return t+(n-t)*e}function c(t,n,e,r,o){return s(r,o,(t-n)/(e-n))}function u(t){return t*Math.PI/180}function f(t){return 180*t/Math.PI}function l(t){return Math.acos(a(t,-1,1))}function h(t){return Math.asin(a(t,-1,1))}function N(t,n,e=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=e}const d=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));function M(t){return d.setFloat64(0,t),d.getBigInt64(0)}const O=BigInt("1000000"),E=I(1);function I(t){const n=M(t=Math.abs(t)),e=function(t){return d.setBigInt64(0,t),d.getFloat64(0)}(n<=O?O:n-O);return Math.abs(t-e)}function A(t,n,e=E){if(t===n)return!0;if(!Number.isFinite(t)||!Number.isFinite(n))return!1;if(null!=e&&I(Math.min(Math.abs(t),Math.abs(n)))<e)return Math.abs(t-n)<=e;const r=M(t),o=M(n);return r<0==o<0&&!((r<o?o-r:r-o)>O)}function T(t){return g(Math.max(-S,Math.min(t,S)))}function g(t){return o[0]=t,o[0]}function m(t,n){const e=(0,r.l)(t),o=h(t[2]/e),i=Math.atan2(t[1]/e,t[0]/e);return(0,r.s)(n,e,o,i),n}function p(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(N(n,1)&&N(e,1)&&N(r,1))}const S=g(34028234663852886e22)},9318:(t,n,e)=>{e.d(n,{b:()=>i});var r=e(34727),o=e(97146);function i(t,n,e){const i=Array.isArray(t),f=i?t.length/n:t.byteLength/(4*n),l=i?t:new Uint32Array(t,0,f*n),h=e?.minReduction??0,N=e?.originalIndices||null,d=N?N.length:0,M=e?.componentOffsets||null;let O=0;if(M)for(let t=0;t<M.length-1;t++){const n=M[t+1]-M[t];n>O&&(O=n)}else O=f;const E=Math.floor(1.1*O)+1;(null==u||u.length<2*E)&&(u=new Uint32Array((0,r.cU)(2*E)));for(let t=0;t<2*E;t++)u[t]=0;let I=0;const A=!!M&&!!N,T=A?d:f;let g=(0,o.my)(f);const m=new Uint32Array(d),p=1.96;let S=0!==h?Math.ceil(4*p*p/(h*h)*h*(1-h)):T,R=1,b=M?M[1]:T;for(let t=0;t<T;t++){if(t===S){const n=1-I/t;if(n+p*Math.sqrt(n*(1-n)/t)<h)return null;S*=2}if(t===b){for(let t=0;t<2*E;t++)u[t]=0;if(N)for(let t=M[R-1];t<M[R];t++)m[t]=g[N[t]];b=M[++R]}const e=A?N[t]:t,r=e*n,o=c(l,r,n);let i=o%E,s=I;for(;0!==u[2*i+1];){if(u[2*i]===o){const t=u[2*i+1]-1;if(a(l,r,t*n,n)){s=g[t];break}}i++,i>=E&&(i-=E)}s===I&&(u[2*i]=o,u[2*i+1]=e+1,I++),g[e]=s}if(0!==h&&1-I/f<h)return null;if(A){for(let t=M[R-1];t<m.length;t++)m[t]=g[N[t]];g=(0,o.Dg)(m)}const v=i?new Array(I):new Uint32Array(I*n);I=0;for(let t=0;t<T;t++)g[t]===I&&(s(l,(A?N[t]:t)*n,v,I*n,n),I++);if(N&&!A){const t=new Uint32Array(d);for(let n=0;n<t.length;n++)t[n]=g[N[n]];g=(0,o.Dg)(t)}return{buffer:Array.isArray(v)?v:v.buffer,indices:g,uniqueCount:I}}function a(t,n,e,r){for(let o=0;o<r;o++)if(t[n+o]!==t[e+o])return!1;return!0}function s(t,n,e,r,o){for(let i=0;i<o;i++)e[r+i]=t[n+i]}function c(t,n,e){let r=0;for(let o=0;o<e;o++)r=t[n+o]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let u=null},4431:(t,n,e)=>{e.d(n,{U:()=>i});var r=e(63907),o=e(74038);function i(t,n=0){const e=t.stride;return Array.from(t.fields.keys()).map((r=>{const i=t.fields.get(r),s=i.constructor.ElementCount,c=a(i.constructor.ElementType),u=i.offset,f=i.optional?.glNormalized??!1;return new o._(r,s,c,u,e,f,n)}))}function a(t){const n=s[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const s={u8:r.pe.UNSIGNED_BYTE,u16:r.pe.UNSIGNED_SHORT,u32:r.pe.UNSIGNED_INT,i8:r.pe.BYTE,i16:r.pe.SHORT,i32:r.pe.INT,f32:r.pe.FLOAT}},46540:(t,n,e)=>{var r;e.d(n,{r:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},3055:(t,n,e)=>{e.d(n,{I$:()=>a,In:()=>u,gr:()=>c});var r=e(4431),o=e(1843),i=e(46540);const a=(0,o.BP)().vec3f(i.r.POSITION).u16(i.r.COMPONENTINDEX).freeze(),s=(0,o.BP)().vec2u8(i.r.SIDENESS).freeze(),c=((0,r.U)(s),(0,o.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1).vec2i16(i.r.NORMALCOMPRESSED).u16(i.r.COMPONENTINDEX).u8(i.r.VARIANTOFFSET,{glNormalized:!0}).u8(i.r.VARIANTSTROKE).u8(i.r.VARIANTEXTENSION,{glNormalized:!0}).freeze()),u=(0,o.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1).vec2i16(i.r.NORMALCOMPRESSED).vec2i16(i.r.NORMAL2COMPRESSED).u16(i.r.COMPONENTINDEX).u8(i.r.VARIANTOFFSET,{glNormalized:!0}).u8(i.r.VARIANTSTROKE).u8(i.r.VARIANTEXTENSION,{glNormalized:!0}).freeze();new Map([[i.r.POSITION0,0],[i.r.POSITION1,1],[i.r.COMPONENTINDEX,2],[i.r.VARIANTOFFSET,3],[i.r.VARIANTSTROKE,4],[i.r.VARIANTEXTENSION,5],[i.r.NORMALCOMPRESSED,6],[i.r.NORMAL2COMPRESSED,7],[i.r.SIDENESS,8]])},93406:(t,n,e)=>{e.d(n,{K:()=>c});var r=e(34727),o=e(3694),i=e(38954),a=e(51850);const s=-1;function c(t,n,e){const r=t.vertices.position,o=t.vertices.componentIndex,a=M.position0,c=M.position1,l=M.faceNormal0,N=M.faceNormal1,{edges:d,normals:O}=f(t),E=d.length/4,I=n.allocate(E);let A=0;const T=E,p=e?.allocate(T);let R=0,b=0,v=0;h.length=0;for(let t=0;t<E;++t){const n=4*t;r.getVec(d.data[n],a),r.getVec(d.data[n+1],c);const e=h.pushNew();e.index=4*t,e.length=(0,i.p)(a,c)}h.sort(((t,n)=>n.length-t.length));const y=new Array,P=new Array;h.forAll((({length:t,index:f})=>{const h=d.data[f],E=d.data[f+1],T=d.data[f+2],C=d.data[f+3],L=C===s;if(r.getVec(h,a),r.getVec(E,c),L){const t=3*T;(0,i.s)(l,O.data[t],O.data[t+1],O.data[t+2]),(0,i.c)(N,l),M.componentIndex=o.get(h),M.cosAngle=(0,i.m)(l,N)}else{let t=3*T;if((0,i.s)(l,O.data[t],O.data[t+1],O.data[t+2]),t=3*C,(0,i.s)(N,O.data[t],O.data[t+1],O.data[t+2]),M.componentIndex=o.get(h),M.cosAngle=(0,i.m)(l,N),function(t,n){return t.cosAngle>n}(M,m))return;M.cosAngle<-.9999&&(0,i.c)(N,l)}b+=t,v++,L||function(t,n){return t.cosAngle<n}(M,S)?(n.write(I,A++,M),y.push(t)):u(M,g)&&(p&&e&&e.write(p,R++,M),P.push(t))}));const C=new Float32Array(y.reverse()),L=new Float32Array(P.reverse()),w=p&&e?{instancesData:p.slice(0,R),lodInfo:{lengths:L}}:void 0;return{regular:{instancesData:I.slice(0,A),lodInfo:{lengths:C}},silhouette:w,averageEdgeLength:b/v}}function u(t,n){const e=(0,r.XM)(t.cosAngle);return(0,i.E)(E,t.position1,t.position0),e*((0,i.m)((0,i.b)(O,t.faceNormal0,t.faceNormal1),E)>0?-1:1)>n}function f(t){const n=t.faces.length/3,e=t.faces,r=t.neighbors,o=t.vertices.position;N.length=d.length=0;for(let t=0;t<n;t++){const n=3*t,a=r[n],c=r[n+1],u=r[n+2],f=e[n],l=e[n+1],h=e[n+2];o.getVec(f,I),o.getVec(l,A),o.getVec(h,T),(0,i.f)(A,A,I),(0,i.f)(T,T,I),(0,i.b)(I,A,T),(0,i.n)(I,I),d.pushArray(I),(a===s||f<l)&&(N.push(f),N.push(l),N.push(t),N.push(a)),(c===s||l<h)&&(N.push(l),N.push(h),N.push(t),N.push(c)),(u===s||h<f)&&(N.push(h),N.push(f),N.push(t),N.push(u))}return{edges:N,normals:d}}class l{constructor(){this.index=0,this.length=0}}const h=new o.A({allocator:t=>t||new l,deallocator:null}),N=new o.A({deallocator:null}),d=new o.A({deallocator:null}),M=new class{constructor(){this.position0=(0,a.vt)(),this.position1=(0,a.vt)(),this.faceNormal0=(0,a.vt)(),this.faceNormal1=(0,a.vt)(),this.componentIndex=0,this.cosAngle=0}},O=(0,a.vt)(),E=(0,a.vt)(),I=(0,a.vt)(),A=(0,a.vt)(),T=(0,a.vt)(),g=(0,r.kU)(4),m=Math.cos(g),p=(0,r.kU)(35),S=Math.cos(p)},53099:(t,n,e)=>{e.d(n,{o6:()=>y,HY:()=>U,hx:()=>P,Jb:()=>D});var r=e(9318);function o(t,n,e){const r=n/3,o=new Uint32Array(e+1),i=new Uint32Array(e+1),a=(t,n)=>{t<n?o[t+1]++:i[n+1]++};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];a(e,r),a(r,o),a(o,e)}let s=0,c=0;for(let t=0;t<e;t++){const n=o[t+1],e=i[t+1];o[t+1]=s,i[t+1]=c,s+=n,c+=e}const u=new Uint32Array(6*r),f=o[e],l=(t,n,e)=>{if(t<n){const r=o[t+1]++;u[2*r]=n,u[2*r+1]=e}else{const r=i[n+1]++;u[2*f+2*r]=t,u[2*f+2*r+1]=e}};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];l(e,r,n),l(r,o,n),l(o,e,n)}const h=(t,n)=>{const e=2*t,r=n-t;for(let t=1;t<r;t++){const n=u[e+2*t],r=u[e+2*t+1];let o=t-1;for(;o>=0&&u[e+2*o]>n;o--)u[e+2*o+2]=u[e+2*o],u[e+2*o+3]=u[e+2*o+1];u[e+2*o+2]=n,u[e+2*o+3]=r}};for(let t=0;t<e;t++)h(o[t],o[t+1]),h(f+i[t],f+i[t+1]);const N=new Int32Array(3*r),d=(n,e)=>n===t[3*e]?0:n===t[3*e+1]?1:n===t[3*e+2]?2:-1,M=(t,n)=>{const e=d(t,n);N[3*n+e]=-1},O=(t,n,e,r)=>{const o=d(t,n);N[3*n+o]=r;const i=d(e,r);N[3*r+i]=n};for(let t=0;t<e;t++){let n=o[t];const e=o[t+1];let r=i[t];const a=i[t+1];for(;n<e&&r<a;){const e=u[2*n],o=u[2*f+2*r];e===o?(O(t,u[2*n+1],o,u[2*f+2*r+1]),n++,r++):e<o?(M(t,u[2*n+1]),n++):(M(o,u[2*f+2*r+1]),r++)}for(;n<e;)M(t,u[2*n+1]),n++;for(;r<a;)M(u[2*f+2*r],u[2*f+2*r+1]),r++}return N}var i=e(1843),a=e(46540),s=e(3055),c=e(87811),u=e(38954),f=e(51850),l=e(4431),h=e(34727);function N(t,n,e,r,o,i=2){const a=1/(Math.abs(e)+Math.abs(r)+Math.abs(o)),s=e*a,c=r*a,u=o<=0?(s>=0?1:-1)*(1-Math.abs(c)):s,f=o<=0?(c>=0?1:-1)*(1-Math.abs(s)):c,l=n*i;t[l]=d(u),t[l+1]=d(f)}function d(t){return(0,h.qE)(Math.round(32767*t),-32767,32767)}e(11868);class M{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?T:A}write(t,n,e){b.seed=this._edgeHashFunction(e);const r=b.getIntRange(0,255),o=b.getIntRange(0,this.settings.variants-1),i=b.getFloat(),a=255*(.5*function(t){return Math.abs(t)**1.2*Math.sign(t)}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7))+.5);t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1),t.componentIndex.set(n,e.componentIndex),t.variantOffset.set(n,r),t.variantStroke.set(n,o),t.variantExtension.set(n,a)}}const O=new Float32Array(6),E=new Uint32Array(O.buffer),I=new Uint32Array(1);function A(t){return O[0]=t.position0[0],O[1]=t.position0[1],O[2]=t.position0[2],O[3]=t.position1[0],O[4]=t.position1[1],O[5]=t.position1[2],I[0]=31*(31*(31*(31*(31*(166811+E[0])+E[1])+E[2])+E[3])+E[4])+E[5],I[0]}function T(t){const n=O;n[0]=m(t.position0[0]),n[1]=m(t.position0[1]),n[2]=m(t.position0[2]),n[3]=m(t.position1[0]),n[4]=m(t.position1[1]),n[5]=m(t.position1[2]),I[0]=5381;for(let t=0;t<E.length;t++)I[0]=31*I[0]+E[t];return I[0]}const g=1e4;function m(t){return Math.round(t*g)/g}class p{constructor(){this._commonWriter=new M}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return s.gr.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e),(0,u.g)(R,e.faceNormal0,e.faceNormal1),(0,u.n)(R,R);const{typedBuffer:r,typedBufferStride:o}=t.normalCompressed;N(r,n,R[0],R[1],R[2],o)}}p.Layout=s.gr,p.glLayout=(0,l.U)(s.gr,1);class S{constructor(){this._commonWriter=new M}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return s.In.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e);{const{typedBuffer:r,typedBufferStride:o}=t.normalCompressed;N(r,n,e.faceNormal0[0],e.faceNormal0[1],e.faceNormal0[2],o)}{const{typedBuffer:r,typedBufferStride:o}=t.normal2Compressed;N(r,n,e.faceNormal1[0],e.faceNormal1[1],e.faceNormal1[2],o)}}}S.Layout=s.In,S.glLayout=(0,l.U)(s.In,1);const R=(0,f.vt)(),b=new c.A;var v=e(93406);function y(t){const n=P(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return L.updateSettings(t.writerSettings),w.updateSettings(t.writerSettings),(0,v.K)(n,L,w)}function P(t,n,e,i){if(n){const n=o(e,i,t.count);return new C(e,i,n,t)}const a=(0,r.b)(t.buffer,t.stride/4,{originalIndices:e,originalIndicesLength:i}),c=o(a.indices,i,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:c,vertices:s.I$.createView(a.buffer)}}class C{constructor(t,n,e,r){this.faces=t,this.facesLength=n,this.neighbors=e,this.vertices=r}}const L=new p,w=new S,D=(0,i.BP)().vec3f(a.r.POSITION0).vec3f(a.r.POSITION1),U=(0,i.BP)().vec3f(a.r.POSITION0).vec3f(a.r.POSITION1).u16(a.r.COMPONENTINDEX)},74038:(t,n,e)=>{e.d(n,{_:()=>r});class r{constructor(t,n,e,r,o,i=!1,a=0){this.name=t,this.count=n,this.type=e,this.offset=r,this.stride=o,this.normalized=i,this.divisor=a}}}}]);