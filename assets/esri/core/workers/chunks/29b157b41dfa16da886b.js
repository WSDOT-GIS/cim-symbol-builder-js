"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2059],{38954:(t,n,r)=>{r.d(n,{A:()=>h,B:()=>f,C:()=>E,D:()=>M,E:()=>P,F:()=>x,G:()=>j,a:()=>c,b:()=>_,c:()=>u,e:()=>F,f:()=>s,g:()=>i,h:()=>C,i:()=>A,j:()=>T,k:()=>b,l:()=>R,m:()=>a,n:()=>d,o:()=>v,p:()=>O,q:()=>S,r:()=>N,s:()=>m,t:()=>g,u:()=>D,v:()=>l,w:()=>q,x:()=>w,y:()=>I,z:()=>U});var e=r(51850),o=r(34304);function a(t){const n=t[0],r=t[1],e=t[2];return Math.sqrt(n*n+r*r+e*e)}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function c(t,n,r,e){return t[0]=n,t[1]=r,t[2]=e,t}function i(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function s(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function f(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function M(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function l(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function h(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function I(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t}function E(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t}function T(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function N(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t}function O(t,n){const r=n[0]-t[0],e=n[1]-t[1],o=n[2]-t[2];return Math.sqrt(r*r+e*e+o*o)}function m(t,n){const r=n[0]-t[0],e=n[1]-t[1],o=n[2]-t[2];return r*r+e*e+o*o}function S(t){const n=t[0],r=t[1],e=t[2];return n*n+r*r+e*e}function b(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function A(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function d(t,n){const r=n[0],e=n[1],o=n[2];let a=r*r+e*e+o*o;return a>0&&(a=1/Math.sqrt(a),t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a),t}function R(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function _(t,n,r){const e=n[0],o=n[1],a=n[2],u=r[0],c=r[1],i=r[2];return t[0]=o*i-a*c,t[1]=a*u-e*i,t[2]=e*c-o*u,t}function v(t,n,r,e){const o=n[0],a=n[1],u=n[2];return t[0]=o+e*(r[0]-o),t[1]=a+e*(r[1]-a),t[2]=u+e*(r[2]-u),t}function C(t,n,r){const e=n[0],o=n[1],a=n[2];return t[0]=r[0]*e+r[4]*o+r[8]*a+r[12],t[1]=r[1]*e+r[5]*o+r[9]*a+r[13],t[2]=r[2]*e+r[6]*o+r[10]*a+r[14],t}function g(t,n,r){const e=n[0],o=n[1],a=n[2];return t[0]=e*r[0]+o*r[3]+a*r[6],t[1]=e*r[1]+o*r[4]+a*r[7],t[2]=e*r[2]+o*r[5]+a*r[8],t}function D(t,n,r){const e=r[0],o=r[1],a=r[2],u=r[3],c=n[0],i=n[1],s=n[2],f=o*s-a*i,M=a*c-e*s,l=e*i-o*c,h=o*l-a*M,I=a*f-e*l,E=e*M-o*f,T=2*u;return t[0]=c+f*T+2*h,t[1]=i+M*T+2*I,t[2]=s+l*T+2*E,t}const L=(0,e.vt)(),p=(0,e.vt)();function F(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function P(t,n,r){const e=r[0]-n[0],o=r[1]-n[1],a=r[2]-n[2];let u=e*e+o*o+a*a;return u>0?(u=1/Math.sqrt(u),t[0]=e*u,t[1]=o*u,t[2]=a*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const U=s,y=f,V=M,x=O,q=m,j=a,w=S;Object.freeze(Object.defineProperty({__proto__:null,abs:l,add:i,angle:function(t,n){d(L,t),d(p,n);const r=R(L,p);return r>1?0:r<-1?Math.PI:Math.acos(r)},bezier:function(t,n,r,e,o,a){const u=1-a,c=u*u,i=a*a,s=c*u,f=3*a*c,M=3*i*u,l=i*a;return t[0]=n[0]*s+r[0]*f+e[0]*M+o[0]*l,t[1]=n[1]*s+r[1]*f+e[1]*M+o[1]*l,t[2]=n[2]*s+r[2]*f+e[2]*M+o[2]*l,t},ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},clamp:function(t,n=0,r=1){return t[0]=Math.min(Math.max(t[0],n),r),t[1]=Math.min(Math.max(t[1],n),r),t[2]=Math.min(Math.max(t[2],n),r),t},copy:u,cross:_,crossAndNormalize:function(t,n,r){const e=n[0],o=n[1],a=n[2],u=r[0],c=r[1],i=r[2],s=o*i-a*c,f=a*u-e*i,M=e*c-o*u,l=Math.sqrt(s*s+f*f+M*M);return t[0]=s/l,t[1]=f/l,t[2]=M/l,t},direction:P,dist:x,distance:O,div:V,divide:M,dot:R,equals:function(t,n){if(t===n)return!0;const r=t[0],e=t[1],a=t[2],u=n[0],c=n[1],i=n[2],s=(0,o.FD)();return Math.abs(r-u)<=s*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(e-c)<=s*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(a-i)<=s*Math.max(1,Math.abs(a),Math.abs(i))},exactEquals:F,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},hermite:function(t,n,r,e,o,a){const u=a*a,c=u*(2*a-3)+1,i=u*(a-2)+a,s=u*(a-1),f=u*(3-2*a);return t[0]=n[0]*c+r[0]*i+e[0]*s+o[0]*f,t[1]=n[1]*c+r[1]*i+e[1]*s+o[1]*f,t[2]=n[2]*c+r[2]*i+e[2]*s+o[2]*f,t},inverse:A,len:j,length:a,lerp:v,max:E,min:I,mul:y,multiply:f,negate:b,normalize:d,random:function(t,n=1){const r=o.Ov,e=2*r()*Math.PI,a=2*r()-1,u=Math.sqrt(1-a*a)*n;return t[0]=Math.cos(e)*u,t[1]=Math.sin(e)*u,t[2]=a*n,t},rotateX:function(t,n,r,e){const o=[],a=[];return o[0]=n[0]-r[0],o[1]=n[1]-r[1],o[2]=n[2]-r[2],a[0]=o[0],a[1]=o[1]*Math.cos(e)-o[2]*Math.sin(e),a[2]=o[1]*Math.sin(e)+o[2]*Math.cos(e),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},rotateY:function(t,n,r,e){const o=[],a=[];return o[0]=n[0]-r[0],o[1]=n[1]-r[1],o[2]=n[2]-r[2],a[0]=o[2]*Math.sin(e)+o[0]*Math.cos(e),a[1]=o[1],a[2]=o[2]*Math.cos(e)-o[0]*Math.sin(e),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},rotateZ:function(t,n,r,e){const o=[],a=[];return o[0]=n[0]-r[0],o[1]=n[1]-r[1],o[2]=n[2]-r[2],a[0]=o[0]*Math.cos(e)-o[1]*Math.sin(e),a[1]=o[0]*Math.sin(e)+o[1]*Math.cos(e),a[2]=o[2],t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:T,scaleAndAdd:N,set:c,sign:h,sqrDist:q,sqrLen:w,squaredDistance:m,squaredLength:S,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:U,subtract:s,transformMat3:g,transformMat4:C,transformQuat:D},Symbol.toStringTag,{value:"Module"}))},29242:(t,n,r)=>{function e(){return[1,0,0,0,1,0,0,0,1]}function o(t,n,r,e,o,a,u,c,i){return[t,n,r,e,o,a,u,c,i]}r.d(n,{fA:()=>o,vt:()=>e,zK:()=>a});const a=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:e,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},9093:(t,n,r)=>{function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}r.d(n,{o8:()=>o,vt:()=>e,zK:()=>a});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:e,createView:function(t,n){return new Float64Array(t,n,16)},fromValues:function(t,n,r,e,o,a,u,c,i,s,f,M,l,h,I,E){return[t,n,r,e,o,a,u,c,i,s,f,M,l,h,I,E]}},Symbol.toStringTag,{value:"Module"}))},82534:(t,n,r)=>{function e(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}r.d(n,{o8:()=>o,vt:()=>e,zK:()=>a});const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:e,createView:function(t,n){return new Float64Array(t,n,4)},fromValues:function(t,n,r,e){return[t,n,r,e]}},Symbol.toStringTag,{value:"Module"}))},48163:(t,n,r)=>{function e(){return[0,0]}function o(t,n){return[t,n]}function a(){return o(1,1)}function u(){return o(1,0)}function c(){return o(0,1)}r.d(n,{Un:()=>i,fA:()=>o,vt:()=>e});const i=a(),s=u(),f=c();Object.freeze(Object.defineProperty({__proto__:null,ONES:i,UNIT_X:s,UNIT_Y:f,ZEROS:[0,0],clone:function(t){return[t[0],t[1]]},create:e,createView:function(t,n){return new Float64Array(t,n,2)},fromArray:function(t,n=[0,0]){const r=Math.min(2,t.length);for(let e=0;e<r;++e)n[e]=t[e];return n},fromValues:o,ones:a,unitX:u,unitY:c,zeros:function(){return[0,0]}},Symbol.toStringTag,{value:"Module"}))},77690:(t,n,r)=>{r.d(n,{B8:()=>c,Ge:()=>l,I0:()=>M,KC:()=>i,hZ:()=>a,hs:()=>f,lw:()=>s,mg:()=>u,z0:()=>o});var e=r(34304);function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function a(t,n,r,e,o,a,u,c,i,s){return t[0]=n,t[1]=r,t[2]=e,t[3]=o,t[4]=a,t[5]=u,t[6]=c,t[7]=i,t[8]=s,t}function u(t,n){if(t===n){const r=n[1],e=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=e,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function c(t,n){const r=n[0],e=n[1],o=n[2],a=n[3],u=n[4],c=n[5],i=n[6],s=n[7],f=n[8],M=f*u-c*s,l=-f*a+c*i,h=s*a-u*i;let I=r*M+e*l+o*h;return I?(I=1/I,t[0]=M*I,t[1]=(-f*e+o*s)*I,t[2]=(c*e-o*u)*I,t[3]=l*I,t[4]=(f*r-o*i)*I,t[5]=(-c*r+o*a)*I,t[6]=h*I,t[7]=(-s*r+e*i)*I,t[8]=(u*r-e*a)*I,t):null}function i(t,n){const r=n[0],e=n[1],o=n[2],a=n[3],u=n[4],c=n[5],i=n[6],s=n[7],f=n[8];return t[0]=u*f-c*s,t[1]=o*s-e*f,t[2]=e*c-o*u,t[3]=c*i-a*f,t[4]=r*f-o*i,t[5]=o*a-r*c,t[6]=a*s-u*i,t[7]=e*i-r*s,t[8]=r*u-e*a,t}function s(t,n,r){const e=n[0],o=n[1],a=n[2],u=n[3],c=n[4],i=n[5],s=n[6],f=n[7],M=n[8],l=r[0],h=r[1],I=r[2],E=r[3],T=r[4],N=r[5],O=r[6],m=r[7],S=r[8];return t[0]=l*e+h*u+I*s,t[1]=l*o+h*c+I*f,t[2]=l*a+h*i+I*M,t[3]=E*e+T*u+N*s,t[4]=E*o+T*c+N*f,t[5]=E*a+T*i+N*M,t[6]=O*e+m*u+S*s,t[7]=O*o+m*c+S*f,t[8]=O*a+m*i+S*M,t}function f(t,n,r){const e=r[0],o=r[1],a=r[2];return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=a*n[6],t[7]=a*n[7],t[8]=a*n[8],t}function M(t,n){const r=n[0],e=n[1],o=n[2],a=n[3],u=r+r,c=e+e,i=o+o,s=r*u,f=e*u,M=e*c,l=o*u,h=o*c,I=o*i,E=a*u,T=a*c,N=a*i;return t[0]=1-M-I,t[3]=f-N,t[6]=l+T,t[1]=f+N,t[4]=1-s-I,t[7]=h-E,t[2]=l-T,t[5]=h+E,t[8]=1-s-M,t}function l(t,n){const r=n[0],e=n[1],o=n[2],a=n[3],u=n[4],c=n[5],i=n[6],s=n[7],f=n[8],M=n[9],l=n[10],h=n[11],I=n[12],E=n[13],T=n[14],N=n[15],O=r*c-e*u,m=r*i-o*u,S=r*s-a*u,b=e*i-o*c,A=e*s-a*c,d=o*s-a*i,R=f*E-M*I,_=f*T-l*I,v=f*N-h*I,C=M*T-l*E,g=M*N-h*E,D=l*N-h*T;let L=O*D-m*g+S*C+b*v-A*_+d*R;return L?(L=1/L,t[0]=(c*D-i*g+s*C)*L,t[1]=(i*v-u*D-s*_)*L,t[2]=(u*g-c*v+s*R)*L,t[3]=(o*g-e*D-a*C)*L,t[4]=(r*D-o*v+a*_)*L,t[5]=(e*v-r*g-a*R)*L,t[6]=(E*d-T*A+N*b)*L,t[7]=(T*S-I*d-N*m)*L,t[8]=(I*A-E*S+N*O)*L,t):null}function h(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t}const I=s,E=h;Object.freeze(Object.defineProperty({__proto__:null,add:function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t},adjoint:i,copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},determinant:function(t){const n=t[0],r=t[1],e=t[2],o=t[3],a=t[4],u=t[5],c=t[6],i=t[7],s=t[8];return n*(s*a-u*i)+r*(-s*o+u*c)+e*(i*o-a*c)},equals:function(t,n){const r=t[0],o=t[1],a=t[2],u=t[3],c=t[4],i=t[5],s=t[6],f=t[7],M=t[8],l=n[0],h=n[1],I=n[2],E=n[3],T=n[4],N=n[5],O=n[6],m=n[7],S=n[8],b=(0,e.FD)();return Math.abs(r-l)<=b*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(o-h)<=b*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(a-I)<=b*Math.max(1,Math.abs(a),Math.abs(I))&&Math.abs(u-E)<=b*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(c-T)<=b*Math.max(1,Math.abs(c),Math.abs(T))&&Math.abs(i-N)<=b*Math.max(1,Math.abs(i),Math.abs(N))&&Math.abs(s-O)<=b*Math.max(1,Math.abs(s),Math.abs(O))&&Math.abs(f-m)<=b*Math.max(1,Math.abs(f),Math.abs(m))&&Math.abs(M-S)<=b*Math.max(1,Math.abs(M),Math.abs(S))},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)},fromMat2d:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},fromMat4:o,fromQuat:M,fromRotation:function(t,n){const r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=0,t[3]=-r,t[4]=e,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},invert:c,isOrthoNormal:function(t){const n=(0,e.FD)(),r=t[0],o=t[1],a=t[2],u=t[3],c=t[4],i=t[5],s=t[6],f=t[7],M=t[8];return Math.abs(1-(r*r+u*u+s*s))<=n&&Math.abs(1-(o*o+c*c+f*f))<=n&&Math.abs(1-(a*a+i*i+M*M))<=n},mul:I,multiply:s,multiplyScalar:function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t},multiplyScalarAndAdd:function(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t[3]=n[3]+r[3]*e,t[4]=n[4]+r[4]*e,t[5]=n[5]+r[5]*e,t[6]=n[6]+r[6]*e,t[7]=n[7]+r[7]*e,t[8]=n[8]+r[8]*e,t},normalFromMat4:l,normalFromMat4Legacy:function(t,n){const r=n[0],e=n[1],o=n[2],a=n[4],u=n[5],c=n[6],i=n[8],s=n[9],f=n[10],M=f*u-c*s,l=-f*a+c*i,h=s*a-u*i,I=r*M+e*l+o*h;if(!I)return null;const E=1/I;return t[0]=M*E,t[1]=(-f*e+o*s)*E,t[2]=(c*e-o*u)*E,t[3]=l*E,t[4]=(f*r-o*i)*E,t[5]=(-c*r+o*a)*E,t[6]=h*E,t[7]=(-s*r+e*i)*E,t[8]=(u*r-e*a)*E,t},projection:function(t,n,r){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},rotate:function(t,n,r){const e=n[0],o=n[1],a=n[2],u=n[3],c=n[4],i=n[5],s=n[6],f=n[7],M=n[8],l=Math.sin(r),h=Math.cos(r);return t[0]=h*e+l*u,t[1]=h*o+l*c,t[2]=h*a+l*i,t[3]=h*u-l*e,t[4]=h*c-l*o,t[5]=h*i-l*a,t[6]=s,t[7]=f,t[8]=M,t},scale:f,scaleByVec2:function(t,n,r){const e=r[0],o=r[1];return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t},set:a,str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},sub:E,subtract:h,translate:function(t,n,r){const e=n[0],o=n[1],a=n[2],u=n[3],c=n[4],i=n[5],s=n[6],f=n[7],M=n[8],l=r[0],h=r[1];return t[0]=e,t[1]=o,t[2]=a,t[3]=u,t[4]=c,t[5]=i,t[6]=l*e+h*u+s,t[7]=l*o+h*c+f,t[8]=l*a+h*i+M,t},transpose:u},Symbol.toStringTag,{value:"Module"}))},240:(t,n,r)=>{r.d(n,{C:()=>s,vt:()=>c,lU:()=>l,fA:()=>M,mR:()=>S,Qj:()=>f,T7:()=>A,gv:()=>d,Ui:()=>b,Tj:()=>R,_I:()=>_,mP:()=>m,LV:()=>i});var e=r(34727),o=r(38954),a=r(51850),u=(r(87317),r(44280),r(32114));function c(t=p){return[t[0],t[1],t[2],t[3]]}function i(t=p[0],n=p[1],r=p[2],e=p[3]){return M(t,n,r,e,u.Km.get())}function s(t,n){return M(n[0],n[1],n[2],n[3],t)}function f(t){return t}function M(t,n,r,e,o=c()){return o[0]=t,o[1]=n,o[2]=r,o[3]=e,o}function l(t,n,r,e=0,a=Math.floor(r*(1/3)),u=Math.floor(r*(2/3))){if(r<3)return!1;n(I,e);let i=a,s=!1;for(;i<r-1&&!s;)n(E,i),i++,s=!(0,o.e)(I,E);if(!s)return!1;for(i=Math.max(i,u),s=!1;i<r&&!s;)n(T,i),i++,(0,o.f)(N,I,E),(0,o.n)(N,N),(0,o.f)(O,E,T),(0,o.n)(O,O),s=!(0,o.e)(I,T)&&!(0,o.e)(E,T)&&Math.abs((0,o.l)(N,O))<h;return s?(function(t,n,r,e=c()){const o=r[0]-n[0],a=r[1]-n[1],u=r[2]-n[2],i=t[0]-n[0],s=t[1]-n[1],f=t[2]-n[2],M=a*f-u*s,l=u*i-o*f,h=o*s-a*i,I=M*M+l*l+h*h,E=Math.abs(I-1)>1e-5&&I>1e-12?1/Math.sqrt(I):1;e[0]=M*E,e[1]=l*E,e[2]=h*E,e[3]=-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2])}(I,E,T,t),!0):(0!==e||1!==a||2!==u)&&l(t,n,r,0,1,2)}(0,a.vt)(),(0,a.vt)(),(0,a.vt)(),(0,a.vt)(),(0,a.vt)();const h=.99619469809,I=(0,a.vt)(),E=(0,a.vt)(),T=(0,a.vt)(),N=(0,a.vt)(),O=(0,a.vt)();function m(t,n,r){return n!==t&&s(t,n),t[3]=-(0,o.l)(t,r),t}function S(t,n,r,e){return(0,o.b)(T,n,t),function(t,n,r){const e=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],o=Math.abs(e-1)>1e-5&&e>1e-12?1/Math.sqrt(e):1;return r[0]=n[0]*o,r[1]=n[1]*o,r[2]=n[2]*o,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}(r,T,e)}function b(t,n,r){return null!=n&&D(L(t,n.origin,n.direction,P,r))}function A(t,n,r){return D(L(t,n.origin,n.vector,F.NONE,r))}function d(t,n,r){return D(L(t,n.origin,n.vector,F.CLAMP,r))}function R(t,n){return v(t,n)>=0}function _(t,n,r){const e=(0,o.j)(u.rq.get(),t,-t[3]),a=function(t,n,r){const e=(0,o.j)(u.rq.get(),t,(0,o.l)(t,n));return(0,o.f)(r,n,e),r}(t,(0,o.f)(u.rq.get(),n,e),u.rq.get());return(0,o.g)(r,a,e),r}function v(t,n){return(0,o.l)(t,n)+t[3]}var C,g;function D(t){return t===C.INTERSECTS_INSIDE_OUT||t===C.INTERSECTS_OUTSIDE_IN}function L(t,n,r,a,u){const c=(0,o.l)(t,r),i=v(t,n);if(0===c)return i>=0?C.INSIDE:C.OUTSIDE;let s=-i/c;return a&F.CLAMP&&(s=(0,e.qE)(s,0,1)),!(a&F.INFINITE_MIN)&&s<0||!(a&F.INFINITE_MAX)&&s>1?i>=0?C.INSIDE:C.OUTSIDE:((0,o.g)(u,n,(0,o.j)(u,r,s)),i>=0?C.INTERSECTS_INSIDE_OUT:C.INTERSECTS_OUTSIDE_IN)}(g=C||(C={}))[g.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",g[g.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",g[g.INSIDE=2]="INSIDE",g[g.OUTSIDE=3]="OUTSIDE";const p=[0,0,1,0];var F;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(F||(F={})),F.INFINITE_MIN,F.INFINITE_MAX;const P=F.INFINITE_MAX},44280:(t,n,r)=>{r.d(n,{g7:()=>c,gr:()=>u});var e=r(34727),o=r(38954),a=r(51850);function u(t,n){return(0,o.l)(t,n)/(0,o.m)(t)}function c(t,n){const r=(0,o.l)(t,n)/((0,o.m)(t)*(0,o.m)(n));return-(0,e.XM)(r)}(0,a.vt)(),(0,a.vt)()},32114:(t,n,r)=>{r.d(n,{Rc:()=>h,J8:()=>I,rq:()=>M,Km:()=>l}),r(44208);var e=r(26390),o=r(29242),a=r(9093),u=r(82534),c=r(48163),i=r(51850),s=r(91829);class f{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,e.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new f(c.vt)}static createVec3f64(){return new f(i.vt)}static createVec4f64(){return new f(s.vt)}static createMat3f64(){return new f(o.vt)}static createMat4f64(){return new f(a.vt)}static createQuatf64(){return new f(u.vt)}get test(){}}f.createVec2f64();const M=f.createVec3f64(),l=f.createVec4f64(),h=(f.createMat3f64(),f.createMat4f64()),I=f.createQuatf64()},46610:(t,n,r)=>{r.d(n,{K:()=>e,n:()=>o});class e{constructor(t,n,r=n){this.data=t,this.size=n,this.stride=r}}class o extends e{constructor(t,n,r,e=!1,o=r){super(t,r,o),this.indices=n,this.exclusive=e}}},46540:(t,n,r)=>{var e;r.d(n,{r:()=>e}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.ROTATION="rotation",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(e||(e={}))},24151:(t,n,r)=>{var e;r.d(n,{RT:()=>e}),function(t){t[t.Global=1]="Global",t[t.Local=2]="Local"}(e||(e={}))}}]);