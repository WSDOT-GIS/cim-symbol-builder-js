"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7346],{38954:(t,n,e)=>{e.d(n,{A:()=>M,B:()=>d,C:()=>f,D:()=>N,E:()=>l,F:()=>x,G:()=>B,a:()=>C,b:()=>p,c:()=>a,d:()=>c,e:()=>b,f:()=>S,g:()=>u,h:()=>g,i:()=>s,j:()=>I,k:()=>O,l:()=>i,m:()=>R,n:()=>T,o:()=>U,p:()=>P,q:()=>y,s:()=>m,t:()=>v,u:()=>A,v:()=>E,w:()=>D,x:()=>h,y:()=>V,z:()=>q});var r=e(51850),o=e(34304);function i(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function s(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function u(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function c(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function f(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function l(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function h(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function d(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function M(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t}function N(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t}function g(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function p(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t}function I(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return Math.sqrt(e*e+r*r+o*o)}function m(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return e*e+r*r+o*o}function O(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function E(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function A(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function T(t,n){const e=n[0],r=n[1],o=n[2];let i=e*e+r*r+o*o;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function S(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function b(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],s=e[1],u=e[2];return t[0]=o*u-i*s,t[1]=i*a-r*u,t[2]=r*s-o*a,t}function R(t,n,e,r){const o=n[0],i=n[1],a=n[2];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=a+r*(e[2]-a),t}function v(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12],t[1]=e[1]*r+e[5]*o+e[9]*i+e[13],t[2]=e[2]*r+e[6]*o+e[10]*i+e[14],t}function y(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=r*e[0]+o*e[3]+i*e[6],t[1]=r*e[1]+o*e[4]+i*e[7],t[2]=r*e[2]+o*e[5]+i*e[8],t}function D(t,n,e){const r=e[0],o=e[1],i=e[2],a=e[3],s=n[0],u=n[1],c=n[2],f=o*c-i*u,l=i*s-r*c,h=r*u-o*s,d=o*h-i*l,M=i*f-r*h,N=r*l-o*f,g=2*a;return t[0]=s+f*g+2*d,t[1]=u+l*g+2*M,t[2]=c+h*g+2*N,t}const L=(0,r.vt)(),w=(0,r.vt)();function P(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function U(t,n,e){const r=e[0]-n[0],o=e[1]-n[1],i=e[2]-n[2];let a=r*r+o*o+i*i;return a>0?(a=1/Math.sqrt(a),t[0]=r*a,t[1]=o*a,t[2]=i*a,t):(t[0]=0,t[1]=0,t[2]=0,t)}const C=c,F=f,_=l,x=I,V=m,B=i,q=O;Object.freeze(Object.defineProperty({__proto__:null,abs:h,add:u,angle:function(t,n){T(L,t),T(w,n);const e=S(L,w);return e>1?0:e<-1?Math.PI:Math.acos(e)},bezier:function(t,n,e,r,o,i){const a=1-i,s=a*a,u=i*i,c=s*a,f=3*i*s,l=3*u*a,h=u*i;return t[0]=n[0]*c+e[0]*f+r[0]*l+o[0]*h,t[1]=n[1]*c+e[1]*f+r[1]*l+o[1]*h,t[2]=n[2]*c+e[2]*f+r[2]*l+o[2]*h,t},ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},clamp:function(t,n=0,e=1){return t[0]=Math.min(Math.max(t[0],n),e),t[1]=Math.min(Math.max(t[1],n),e),t[2]=Math.min(Math.max(t[2],n),e),t},copy:a,cross:b,crossAndNormalize:function(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],s=e[1],u=e[2],c=o*u-i*s,f=i*a-r*u,l=r*s-o*a,h=Math.sqrt(c*c+f*f+l*l);return t[0]=c/h,t[1]=f/h,t[2]=l/h,t},direction:U,dist:x,distance:I,div:_,divide:l,dot:S,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],i=t[2],a=n[0],s=n[1],u=n[2],c=(0,o.FD)();return Math.abs(e-a)<=c*Math.max(1,Math.abs(e),Math.abs(a))&&Math.abs(r-s)<=c*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-u)<=c*Math.max(1,Math.abs(i),Math.abs(u))},exactEquals:P,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},hermite:function(t,n,e,r,o,i){const a=i*i,s=a*(2*i-3)+1,u=a*(i-2)+i,c=a*(i-1),f=a*(3-2*i);return t[0]=n[0]*s+e[0]*u+r[0]*c+o[0]*f,t[1]=n[1]*s+e[1]*u+r[1]*c+o[1]*f,t[2]=n[2]*s+e[2]*u+r[2]*c+o[2]*f,t},inverse:A,len:B,length:i,lerp:R,max:N,min:M,mul:F,multiply:f,negate:E,normalize:T,random:function(t,n=1){const e=o.Ov,r=2*e()*Math.PI,i=2*e()-1,a=Math.sqrt(1-i*i)*n;return t[0]=Math.cos(r)*a,t[1]=Math.sin(r)*a,t[2]=i*n,t},rotateX:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0],i[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),i[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),i[1]=o[1],i[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),i[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),i[2]=o[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:g,scaleAndAdd:p,set:s,sign:d,sqrDist:V,sqrLen:q,squaredDistance:m,squaredLength:O,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:C,subtract:c,transformMat3:y,transformMat4:v,transformQuat:D},Symbol.toStringTag,{value:"Module"}))},87317:(t,n,e)=>{e.d(n,{a:()=>m,b:()=>M,c:()=>o,d:()=>f,e:()=>O,f:()=>h,g:()=>a,h:()=>g,j:()=>d,l:()=>p,n:()=>N,s:()=>i,t:()=>I});var r=e(34304);function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n,e,r,o){return t[0]=n,t[1]=e,t[2]=r,t[3]=o,t}function a(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t}function s(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function u(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function c(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function f(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t}function l(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return Math.sqrt(e*e+r*r+o*o+i*i)}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return e*e+r*r+o*o+i*i}function d(t){const n=t[0],e=t[1],r=t[2],o=t[3];return Math.sqrt(n*n+e*e+r*r+o*o)}function M(t){const n=t[0],e=t[1],r=t[2],o=t[3];return n*n+e*e+r*r+o*o}function N(t,n){const e=n[0],r=n[1],o=n[2],i=n[3];let a=e*e+r*r+o*o+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e*a,t[1]=r*a,t[2]=o*a,t[3]=i*a),t}function g(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function p(t,n,e,r){const o=n[0],i=n[1],a=n[2],s=n[3];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=a+r*(e[2]-a),t[3]=s+r*(e[3]-s),t}function I(t,n,e){const r=n[0],o=n[1],i=n[2],a=n[3];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12]*a,t[1]=e[1]*r+e[5]*o+e[9]*i+e[13]*a,t[2]=e[2]*r+e[6]*o+e[10]*i+e[14]*a,t[3]=e[3]*r+e[7]*o+e[11]*i+e[15]*a,t}function m(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function O(t,n){const e=t[0],o=t[1],i=t[2],a=t[3],s=n[0],u=n[1],c=n[2],f=n[3],l=(0,r.FD)();return Math.abs(e-s)<=l*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(o-u)<=l*Math.max(1,Math.abs(o),Math.abs(u))&&Math.abs(i-c)<=l*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(a-f)<=l*Math.max(1,Math.abs(a),Math.abs(f))}const E=s,A=u,T=c,S=l,b=h,R=d,v=M;Object.freeze(Object.defineProperty({__proto__:null,add:a,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},copy:o,copyVec3:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},dist:S,distance:l,div:T,divide:c,dot:g,equals:O,exactEquals:m,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},len:R,length:d,lerp:p,max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},mul:A,multiply:u,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},normalize:N,random:function(t,n=1){const e=r.Ov;let o,i,a,s,u,c;do{o=2*e()-1,i=2*e()-1,u=o*o+i*i}while(u>=1);do{a=2*e()-1,s=2*e()-1,c=a*a+s*s}while(c>=1);const f=Math.sqrt((1-u)/c);return t[0]=n*o,t[1]=n*i,t[2]=n*a*f,t[3]=n*s*f,t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:f,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t},set:i,sqrDist:b,sqrLen:v,squaredDistance:h,squaredLength:M,str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},sub:E,subtract:s,transformMat4:I,transformQuat:function(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],s=e[1],u=e[2],c=e[3],f=c*r+s*i-u*o,l=c*o+u*r-a*i,h=c*i+a*o-s*r,d=-a*r-s*o-u*i;return t[0]=f*c+d*-a+l*-u-h*-s,t[1]=l*c+d*-s+h*-a-f*-u,t[2]=h*c+d*-u+f*-s-l*-a,t[3]=n[3],t}},Symbol.toStringTag,{value:"Module"}))},48163:(t,n,e)=>{function r(){return[0,0]}function o(t,n){return[t,n]}function i(){return o(1,1)}function a(){return o(1,0)}function s(){return o(0,1)}e.d(n,{Un:()=>u,fA:()=>o,vt:()=>r});const u=i(),c=a(),f=s();Object.freeze(Object.defineProperty({__proto__:null,ONES:u,UNIT_X:c,UNIT_Y:f,ZEROS:[0,0],clone:function(t){return[t[0],t[1]]},create:r,createView:function(t,n){return new Float64Array(t,n,2)},fromArray:function(t,n=[0,0]){const e=Math.min(2,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},fromValues:o,ones:i,unitX:a,unitY:s,zeros:function(){return[0,0]}},Symbol.toStringTag,{value:"Module"}))},51850:(t,n,e)=>{function r(){return[0,0,0]}function o(t){return[t[0],t[1],t[2]]}function i(t,n,e){return[t,n,e]}function a(t,n,e){return[t,n,e]}function s(t,n=[0,0,0]){const e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function u(){return i(1,1,1)}function c(){return i(1,0,0)}function f(){return i(0,1,0)}function l(){return i(0,0,1)}e.d(n,{CN:()=>a,Cb:()=>g,Cw:()=>M,JP:()=>N,Un:()=>d,ci:()=>s,fA:()=>i,o8:()=>o,uY:()=>h,vt:()=>r});const h=[0,0,0],d=u(),M=c(),N=f(),g=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:M,UNIT_Y:N,UNIT_Z:g,ZEROS:h,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,3)},freeze:a,fromArray:s,fromValues:i,ones:u,unitX:c,unitY:f,unitZ:l,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},91829:(t,n,e)=>{function r(){return[0,0,0,0]}function o(t,n,e,r){return[t,n,e,r]}function i(t,n,e,r){return[t,n,e,r]}function a(t,n=[0,0,0,0]){const e=Math.min(4,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function s(){return o(1,1,1,1)}function u(){return o(1,0,0,0)}function c(){return o(0,1,0,0)}function f(){return o(0,0,1,0)}function l(){return o(0,0,0,1)}e.d(n,{CN:()=>i,Un:()=>d,ci:()=>a,fA:()=>o,uY:()=>h,vt:()=>r});const h=[0,0,0,0],d=s(),M=u(),N=c(),g=f(),p=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_W:p,UNIT_X:M,UNIT_Y:N,UNIT_Z:g,ZEROS:h,clone:function(t){return[t[0],t[1],t[2],t[3]]},create:r,createView:function(t,n){return new Float64Array(t,n,4)},freeze:i,fromArray:a,fromValues:o,ones:s,unitW:l,unitX:u,unitY:c,unitZ:f,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},34304:(t,n,e)=>{e.d(n,{DF:()=>u,FD:()=>o,Ov:()=>i,ct:()=>c});let r=1e-6;function o(){return r}const i=Math.random,a=Math.PI/180,s=180/Math.PI;function u(t){return t*a}function c(t){return t*s}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:i,equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))},getEpsilon:o,setEpsilon:function(t){r=t},toDegree:c,toRadian:u},Symbol.toStringTag,{value:"Module"}))},34727:(t,n,e)=>{e.d(n,{$8:()=>m,Cc:()=>a,Io:()=>I,KJ:()=>c,Sp:()=>h,XM:()=>f,YN:()=>l,cU:()=>o,hs:()=>s,kU:()=>u,or:()=>E,pF:()=>T,pq:()=>A,qE:()=>i});const r=new Float32Array(1);function o(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function i(t,n,e){return Math.min(Math.max(t,n),e)}function a(t,n,e){return t+(n-t)*e}function s(t,n,e,r,o){return a(r,o,(t-n)/(e-n))}function u(t){return t*Math.PI/180}function c(t){return 180*t/Math.PI}function f(t){return Math.acos(i(t,-1,1))}function l(t){return Math.asin(i(t,-1,1))}function h(t,n,e=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=e}const d=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));function M(t){return d.setFloat64(0,t),d.getBigInt64(0)}const N=BigInt("1000000"),g=p(1);function p(t){const n=M(t=Math.abs(t)),e=function(t){return d.setBigInt64(0,t),d.getFloat64(0)}(n<=N?N:n-N);return Math.abs(t-e)}function I(t,n,e=g){if(t===n)return!0;if(!Number.isFinite(t)||!Number.isFinite(n))return!1;if(null!=e&&p(Math.min(Math.abs(t),Math.abs(n)))<e)return Math.abs(t-n)<=e;const r=M(t),o=M(n);return r<0==o<0&&!((r<o?o-r:r-o)>N)}function m(t){return O(Math.max(-A,Math.min(t,A)))}function O(t){return r[0]=t,r[0]}function E(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(h(n,1)&&h(e,1)&&h(r,1))}const A=O(34028234663852886e22);function T(t,n,e){if(void 0===e||0==+e)return Math[t](n);if(n=+n,e=+e,isNaN(n)||"number"!=typeof e||e%1!=0)return NaN;let r=n.toString().split("e");return r=(n=Math[t](+(r[0]+"e"+(r[1]?+r[1]-e:-e)))).toString().split("e"),+(r[0]+"e"+(r[1]?+r[1]+e:e))}},9318:(t,n,e)=>{e.d(n,{b:()=>i});var r=e(34727),o=e(97146);function i(t,n,e){const i=Array.isArray(t),f=i?t.length/n:t.byteLength/(4*n),l=i?t:new Uint32Array(t,0,f*n),h=e?.minReduction??0,d=e?.originalIndices||null,M=d?d.length:0,N=e?.componentOffsets||null;let g=0;if(N)for(let t=0;t<N.length-1;t++){const n=N[t+1]-N[t];n>g&&(g=n)}else g=f;const p=Math.floor(1.1*g)+1;(null==c||c.length<2*p)&&(c=new Uint32Array((0,r.cU)(2*p)));for(let t=0;t<2*p;t++)c[t]=0;let I=0;const m=!!N&&!!d,O=m?M:f;let E=(0,o.my)(f);const A=new Uint32Array(M),T=1.96;let S=0!==h?Math.ceil(4*T*T/(h*h)*h*(1-h)):O,b=1,R=N?N[1]:O;for(let t=0;t<O;t++){if(t===S){const n=1-I/t;if(n+T*Math.sqrt(n*(1-n)/t)<h)return null;S*=2}if(t===R){for(let t=0;t<2*p;t++)c[t]=0;if(d)for(let t=N[b-1];t<N[b];t++)A[t]=E[d[t]];R=N[++b]}const e=m?d[t]:t,r=e*n,o=u(l,r,n);let i=o%p,s=I;for(;0!==c[2*i+1];){if(c[2*i]===o){const t=c[2*i+1]-1;if(a(l,r,t*n,n)){s=E[t];break}}i++,i>=p&&(i-=p)}s===I&&(c[2*i]=o,c[2*i+1]=e+1,I++),E[e]=s}if(0!==h&&1-I/f<h)return null;if(m){for(let t=N[b-1];t<A.length;t++)A[t]=E[d[t]];E=(0,o.Dg)(A)}const v=i?new Array(I):new Uint32Array(I*n);I=0;for(let t=0;t<O;t++)E[t]===I&&(s(l,(m?d[t]:t)*n,v,I*n,n),I++);if(d&&!m){const t=new Uint32Array(M);for(let n=0;n<t.length;n++)t[n]=E[d[n]];E=(0,o.Dg)(t)}return{buffer:Array.isArray(v)?v:v.buffer,indices:E,uniqueCount:I}}function a(t,n,e,r){for(let o=0;o<r;o++)if(t[n+o]!==t[e+o])return!1;return!0}function s(t,n,e,r,o){for(let i=0;i<o;i++)e[r+i]=t[n+i]}function u(t,n,e){let r=0;for(let o=0;o<e;o++)r=t[n+o]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let c=null},4431:(t,n,e)=>{e.d(n,{U:()=>i});var r=e(63907),o=e(74038);function i(t,n=0){const e=t.stride;return Array.from(t.fields.keys()).map((r=>{const i=t.fields.get(r),s=i.constructor.ElementCount,u=a(i.constructor.ElementType),c=i.offset,f=i.optional?.glNormalized??!1;return new o._(r,s,u,c,e,f,n)}))}function a(t){const n=s[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const s={u8:r.pe.UNSIGNED_BYTE,u16:r.pe.UNSIGNED_SHORT,u32:r.pe.UNSIGNED_INT,i8:r.pe.BYTE,i16:r.pe.SHORT,i32:r.pe.INT,f32:r.pe.FLOAT}},46540:(t,n,e)=>{var r;e.d(n,{r:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.ROTATION="rotation",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.START_UP="startUp",t.END_UP="endUp",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},71936:(t,n,e)=>{e.r(n),e.d(n,{default:()=>u});var r=e(1843);function o(t,n){return n.push(t.buffer),{buffer:t.buffer,layout:new r.l5(t.layout)}}var i=e(3055),a=e(93406),s=e(53099);class u{async extract(t){const n=c(t),e=(0,s.o6)(n),r=[n.data.buffer];return{result:f(e,r),transferList:r}}async extractComponentsEdgeLocations(t){const n=c(t),e=(0,s.hx)(n.data,n.skipDeduplicate,n.indices,n.indicesLength),r=[];return{result:o((0,a.K)(e,h).regular.instancesData,r),transferList:r}}async extractEdgeLocations(t){const n=c(t),e=(0,s.hx)(n.data,n.skipDeduplicate,n.indices,n.indicesLength),r=[];return{result:o((0,a.K)(e,l).regular.instancesData,r),transferList:r}}}function c(t){return{data:i.I$.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indices):"Uint16Array"===t.indicesType?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function f(t,n){return n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:o(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:o(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}const l=new class{allocate(t){return s.Jb.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,e){t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1)}},h=new class{allocate(t){return s.HY.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,e){t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1),t.componentIndex.set(n,e.componentIndex)}}},3055:(t,n,e)=>{e.d(n,{I$:()=>a,In:()=>c,gr:()=>u});var r=e(4431),o=e(1843),i=e(46540);const a=(0,o.BP)().vec3f(i.r.POSITION).u16(i.r.COMPONENTINDEX).freeze(),s=(0,o.BP)().vec2u8(i.r.SIDENESS).freeze(),u=((0,r.U)(s),(0,o.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1).vec2i16(i.r.NORMALCOMPRESSED).u16(i.r.COMPONENTINDEX).u8(i.r.VARIANTOFFSET,{glNormalized:!0}).u8(i.r.VARIANTSTROKE).u8(i.r.VARIANTEXTENSION,{glNormalized:!0}).freeze()),c=(0,o.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1).vec2i16(i.r.NORMALCOMPRESSED).vec2i16(i.r.NORMAL2COMPRESSED).u16(i.r.COMPONENTINDEX).u8(i.r.VARIANTOFFSET,{glNormalized:!0}).u8(i.r.VARIANTSTROKE).u8(i.r.VARIANTEXTENSION,{glNormalized:!0}).freeze();new Map([[i.r.POSITION0,0],[i.r.POSITION1,1],[i.r.COMPONENTINDEX,2],[i.r.VARIANTOFFSET,3],[i.r.VARIANTSTROKE,4],[i.r.VARIANTEXTENSION,5],[i.r.NORMALCOMPRESSED,6],[i.r.NORMAL2COMPRESSED,7],[i.r.SIDENESS,8]])},93406:(t,n,e)=>{e.d(n,{K:()=>u});var r=e(34727),o=e(3694),i=e(38954),a=e(51850);const s=-1;function u(t,n,e){const r=t.vertices.position,o=t.vertices.componentIndex,a=N.position0,u=N.position1,l=N.faceNormal0,d=N.faceNormal1,{edges:M,normals:g}=f(t),p=M.length/4,I=n.allocate(p);let m=0;const O=p,T=e?.allocate(O);let b=0,R=0,v=0;h.length=0;for(let t=0;t<p;++t){const n=4*t;r.getVec(M.data[n],a),r.getVec(M.data[n+1],u);const e=h.pushNew();e.index=4*t,e.length=(0,i.j)(a,u)}h.sort(((t,n)=>n.length-t.length));const y=new Array,D=new Array;h.forAll((({length:t,index:f})=>{const h=M.data[f],p=M.data[f+1],O=M.data[f+2],L=M.data[f+3],w=L===s;if(r.getVec(h,a),r.getVec(p,u),w){const t=3*O;(0,i.i)(l,g.data[t],g.data[t+1],g.data[t+2]),(0,i.c)(d,l),N.componentIndex=o.get(h),N.cosAngle=(0,i.f)(l,d)}else{let t=3*O;if((0,i.i)(l,g.data[t],g.data[t+1],g.data[t+2]),t=3*L,(0,i.i)(d,g.data[t],g.data[t+1],g.data[t+2]),N.componentIndex=o.get(h),N.cosAngle=(0,i.f)(l,d),function(t,n){return t.cosAngle>n}(N,A))return;N.cosAngle<-.9999&&(0,i.c)(d,l)}R+=t,v++,w||function(t,n){return t.cosAngle<n}(N,S)?(n.write(I,m++,N),y.push(t)):c(N,E)&&(T&&e&&e.write(T,b++,N),D.push(t))}));const L=new Float32Array(y.reverse()),w=new Float32Array(D.reverse()),P=T&&e?{instancesData:T.slice(0,b),lodInfo:{lengths:w}}:void 0;return{regular:{instancesData:I.slice(0,m),lodInfo:{lengths:L}},silhouette:P,averageEdgeLength:R/v}}function c(t,n){const e=(0,r.XM)(t.cosAngle);return(0,i.o)(p,t.position1,t.position0),e*((0,i.f)((0,i.e)(g,t.faceNormal0,t.faceNormal1),p)>0?-1:1)>n}function f(t){const n=t.faces.length/3,e=t.faces,r=t.neighbors,o=t.vertices.position;d.length=M.length=0;for(let t=0;t<n;t++){const n=3*t,a=r[n],u=r[n+1],c=r[n+2],f=e[n],l=e[n+1],h=e[n+2];o.getVec(f,I),o.getVec(l,m),o.getVec(h,O),(0,i.d)(m,m,I),(0,i.d)(O,O,I),(0,i.e)(I,m,O),(0,i.n)(I,I),M.pushArray(I),(a===s||f<l)&&(d.push(f),d.push(l),d.push(t),d.push(a)),(u===s||l<h)&&(d.push(l),d.push(h),d.push(t),d.push(u)),(c===s||h<f)&&(d.push(h),d.push(f),d.push(t),d.push(c))}return{edges:d,normals:M}}class l{constructor(){this.index=0,this.length=0}}const h=new o.A({allocator:t=>t||new l,deallocator:null}),d=new o.A({deallocator:null}),M=new o.A({deallocator:null}),N=new class{constructor(){this.position0=(0,a.vt)(),this.position1=(0,a.vt)(),this.faceNormal0=(0,a.vt)(),this.faceNormal1=(0,a.vt)(),this.componentIndex=0,this.cosAngle=0}},g=(0,a.vt)(),p=(0,a.vt)(),I=(0,a.vt)(),m=(0,a.vt)(),O=(0,a.vt)(),E=(0,r.kU)(4),A=Math.cos(E),T=(0,r.kU)(35),S=Math.cos(T)},53099:(t,n,e)=>{e.d(n,{o6:()=>y,HY:()=>C,hx:()=>D,Jb:()=>U});var r=e(9318);function o(t,n,e){const r=n/3,o=new Uint32Array(e+1),i=new Uint32Array(e+1),a=(t,n)=>{t<n?o[t+1]++:i[n+1]++};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];a(e,r),a(r,o),a(o,e)}let s=0,u=0;for(let t=0;t<e;t++){const n=o[t+1],e=i[t+1];o[t+1]=s,i[t+1]=u,s+=n,u+=e}const c=new Uint32Array(6*r),f=o[e],l=(t,n,e)=>{if(t<n){const r=o[t+1]++;c[2*r]=n,c[2*r+1]=e}else{const r=i[n+1]++;c[2*f+2*r]=t,c[2*f+2*r+1]=e}};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];l(e,r,n),l(r,o,n),l(o,e,n)}const h=(t,n)=>{const e=2*t,r=n-t;for(let t=1;t<r;t++){const n=c[e+2*t],r=c[e+2*t+1];let o=t-1;for(;o>=0&&c[e+2*o]>n;o--)c[e+2*o+2]=c[e+2*o],c[e+2*o+3]=c[e+2*o+1];c[e+2*o+2]=n,c[e+2*o+3]=r}};for(let t=0;t<e;t++)h(o[t],o[t+1]),h(f+i[t],f+i[t+1]);const d=new Int32Array(3*r),M=(n,e)=>n===t[3*e]?0:n===t[3*e+1]?1:n===t[3*e+2]?2:-1,N=(t,n)=>{const e=M(t,n);d[3*n+e]=-1},g=(t,n,e,r)=>{const o=M(t,n);d[3*n+o]=r;const i=M(e,r);d[3*r+i]=n};for(let t=0;t<e;t++){let n=o[t];const e=o[t+1];let r=i[t];const a=i[t+1];for(;n<e&&r<a;){const e=c[2*n],o=c[2*f+2*r];e===o?(g(t,c[2*n+1],o,c[2*f+2*r+1]),n++,r++):e<o?(N(t,c[2*n+1]),n++):(N(o,c[2*f+2*r+1]),r++)}for(;n<e;)N(t,c[2*n+1]),n++;for(;r<a;)N(c[2*f+2*r],c[2*f+2*r+1]),r++}return d}var i=e(1843),a=e(46540),s=e(3055),u=e(87811),c=e(38954),f=e(51850),l=e(4431),h=e(34727);function d(t,n,e,r,o,i=2){const a=1/(Math.abs(e)+Math.abs(r)+Math.abs(o)),s=e*a,u=r*a,c=o<=0?(s>=0?1:-1)*(1-Math.abs(u)):s,f=o<=0?(u>=0?1:-1)*(1-Math.abs(s)):u,l=n*i;t[l]=M(c),t[l+1]=M(f)}function M(t){return(0,h.qE)(Math.round(32767*t),-32767,32767)}e(11868);class N{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?O:m}write(t,n,e){R.seed=this._edgeHashFunction(e);const r=R.getIntRange(0,255),o=R.getIntRange(0,this.settings.variants-1),i=R.getFloat(),a=255*(.5*function(t){return Math.abs(t)**1.2*Math.sign(t)}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7))+.5);t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1),t.componentIndex.set(n,e.componentIndex),t.variantOffset.set(n,r),t.variantStroke.set(n,o),t.variantExtension.set(n,a)}}const g=new Float32Array(6),p=new Uint32Array(g.buffer),I=new Uint32Array(1);function m(t){return g[0]=t.position0[0],g[1]=t.position0[1],g[2]=t.position0[2],g[3]=t.position1[0],g[4]=t.position1[1],g[5]=t.position1[2],I[0]=31*(31*(31*(31*(31*(166811+p[0])+p[1])+p[2])+p[3])+p[4])+p[5],I[0]}function O(t){const n=g;n[0]=A(t.position0[0]),n[1]=A(t.position0[1]),n[2]=A(t.position0[2]),n[3]=A(t.position1[0]),n[4]=A(t.position1[1]),n[5]=A(t.position1[2]),I[0]=5381;for(let t=0;t<p.length;t++)I[0]=31*I[0]+p[t];return I[0]}const E=1e4;function A(t){return Math.round(t*E)/E}class T{constructor(){this._commonWriter=new N}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return s.gr.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e),(0,c.g)(b,e.faceNormal0,e.faceNormal1),(0,c.n)(b,b);const{typedBuffer:r,typedBufferStride:o}=t.normalCompressed;d(r,n,b[0],b[1],b[2],o)}}T.Layout=s.gr,T.glLayout=(0,l.U)(s.gr,1);class S{constructor(){this._commonWriter=new N}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return s.In.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e);{const{typedBuffer:r,typedBufferStride:o}=t.normalCompressed;d(r,n,e.faceNormal0[0],e.faceNormal0[1],e.faceNormal0[2],o)}{const{typedBuffer:r,typedBufferStride:o}=t.normal2Compressed;d(r,n,e.faceNormal1[0],e.faceNormal1[1],e.faceNormal1[2],o)}}}S.Layout=s.In,S.glLayout=(0,l.U)(s.In,1);const b=(0,f.vt)(),R=new u.A;var v=e(93406);function y(t){const n=D(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return w.updateSettings(t.writerSettings),P.updateSettings(t.writerSettings),(0,v.K)(n,w,P)}function D(t,n,e,i){if(n){const n=o(e,i,t.count);return new L(e,i,n,t)}const a=(0,r.b)(t.buffer,t.stride/4,{originalIndices:e,originalIndicesLength:i}),u=o(a.indices,i,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:u,vertices:s.I$.createView(a.buffer)}}class L{constructor(t,n,e,r){this.faces=t,this.facesLength=n,this.neighbors=e,this.vertices=r}}const w=new T,P=new S,U=(0,i.BP)().vec3f(a.r.POSITION0).vec3f(a.r.POSITION1),C=(0,i.BP)().vec3f(a.r.POSITION0).vec3f(a.r.POSITION1).u16(a.r.COMPONENTINDEX)},74038:(t,n,e)=>{e.d(n,{_:()=>r});class r{constructor(t,n,e,r,o,i=!1,a=0){this.name=t,this.count=n,this.type=e,this.offset=r,this.stride=o,this.normalized=i,this.divisor=a}}}}]);