"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9592],{44680:(t,n,e)=>{function a(){return[1,0,0,0,1,0,0,0,1]}function r(t,n,e,a,r,s,i,o,h){return[t,n,e,a,r,s,i,o,h]}e.d(n,{fA:()=>r,vt:()=>a,zK:()=>s});const s=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:a,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:r},Symbol.toStringTag,{value:"Module"}))},60008:(t,n,e)=>{e.d(n,{A6:()=>A,B8:()=>d,Xd:()=>u,Xr:()=>_,Yc:()=>j,hZ:()=>m,lw:()=>l,t2:()=>C,x8:()=>c});var a=e(44680),r=e(4336),s=e(9392),i=e(53494),o=e(20664),h=e(43047);function c(t,n,e){e*=.5;const a=Math.sin(e);return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=Math.cos(e),t}function u(t,n){const e=2*Math.acos(n[3]),a=Math.sin(e/2);return a>(0,i.FD)()?(t[0]=n[0]/a,t[1]=n[1]/a,t[2]=n[2]/a):(t[0]=1,t[1]=0,t[2]=0),e}function l(t,n,e){const a=n[0],r=n[1],s=n[2],i=n[3],o=e[0],h=e[1],c=e[2],u=e[3];return t[0]=a*u+i*o+r*c-s*h,t[1]=r*u+i*h+s*o-a*c,t[2]=s*u+i*c+a*h-r*o,t[3]=i*u-a*o-r*h-s*c,t}function f(t,n,e,a){const r=n[0],s=n[1],o=n[2],h=n[3];let c,u,l,f,d,_=e[0],M=e[1],A=e[2],E=e[3];return u=r*_+s*M+o*A+h*E,u<0&&(u=-u,_=-_,M=-M,A=-A,E=-E),1-u>(0,i.FD)()?(c=Math.acos(u),l=Math.sin(c),f=Math.sin((1-a)*c)/l,d=Math.sin(a*c)/l):(f=1-a,d=a),t[0]=f*r+d*_,t[1]=f*s+d*M,t[2]=f*o+d*A,t[3]=f*h+d*E,t}function d(t,n){const e=n[0],a=n[1],r=n[2],s=n[3],i=e*e+a*a+r*r+s*s,o=i?1/i:0;return t[0]=-e*o,t[1]=-a*o,t[2]=-r*o,t[3]=s*o,t}function _(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function M(t,n){const e=n[0]+n[4]+n[8];let a;if(e>0)a=Math.sqrt(e+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const r=(e+1)%3,s=(e+2)%3;a=Math.sqrt(n[3*e+e]-n[3*r+r]-n[3*s+s]+1),t[e]=.5*a,a=.5/a,t[3]=(n[3*r+s]-n[3*s+r])*a,t[r]=(n[3*r+e]+n[3*e+r])*a,t[s]=(n[3*s+e]+n[3*e+s])*a}return t}function A(t,n,e,a){const r=.5*Math.PI/180;n*=r,e*=r,a*=r;const s=Math.sin(n),i=Math.cos(n),o=Math.sin(e),h=Math.cos(e),c=Math.sin(a),u=Math.cos(a);return t[0]=s*h*u-i*o*c,t[1]=i*o*u+s*h*c,t[2]=i*h*c-s*o*u,t[3]=i*h*u+s*o*c,t}const E=h.c,m=h.s,T=h.g,I=l,O=h.d,v=h.h,N=h.l,S=h.j,P=S,g=h.b,b=g,R=h.n,C=h.a,p=h.e;function j(t,n,e){const a=(0,o.f)(n,e);return a<-.999999?((0,o.e)(L,w,n),(0,o.G)(L)<1e-6&&(0,o.e)(L,z,n),(0,o.n)(L,L),c(t,L,Math.PI),t):a>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,o.e)(L,n,e),t[0]=L[0],t[1]=L[1],t[2]=L[2],t[3]=1+a,R(t,t))}const L=(0,s.vt)(),w=(0,s.fA)(1,0,0),z=(0,s.fA)(0,1,0);const x=(0,r.vt)(),F=(0,r.vt)();const D=(0,a.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:T,calculateW:function(t,n){const e=n[0],a=n[1],r=n[2];return t[0]=e,t[1]=a,t[2]=r,t[3]=Math.sqrt(Math.abs(1-e*e-a*a-r*r)),t},conjugate:_,copy:E,dot:v,equals:p,exactEquals:C,fromEuler:A,fromMat3:M,getAxisAngle:u,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:d,len:P,length:S,lerp:N,mul:I,multiply:l,normalize:R,random:function(t){const n=i.Ov,e=n(),a=n(),r=n(),s=Math.sqrt(1-e),o=Math.sqrt(e);return t[0]=s*Math.sin(2*Math.PI*a),t[1]=s*Math.cos(2*Math.PI*a),t[2]=o*Math.sin(2*Math.PI*r),t[3]=o*Math.cos(2*Math.PI*r),t},rotateX:function(t,n,e){e*=.5;const a=n[0],r=n[1],s=n[2],i=n[3],o=Math.sin(e),h=Math.cos(e);return t[0]=a*h+i*o,t[1]=r*h+s*o,t[2]=s*h-r*o,t[3]=i*h-a*o,t},rotateY:function(t,n,e){e*=.5;const a=n[0],r=n[1],s=n[2],i=n[3],o=Math.sin(e),h=Math.cos(e);return t[0]=a*h-s*o,t[1]=r*h+i*o,t[2]=s*h+a*o,t[3]=i*h-r*o,t},rotateZ:function(t,n,e){e*=.5;const a=n[0],r=n[1],s=n[2],i=n[3],o=Math.sin(e),h=Math.cos(e);return t[0]=a*h+r*o,t[1]=r*h-a*o,t[2]=s*h+i*o,t[3]=i*h-s*o,t},rotationTo:j,scale:O,set:m,setAxes:function(t,n,e,a){const r=D;return r[0]=e[0],r[3]=e[1],r[6]=e[2],r[1]=a[0],r[4]=a[1],r[7]=a[2],r[2]=-n[0],r[5]=-n[1],r[8]=-n[2],R(t,M(t,r))},setAxisAngle:c,slerp:f,sqlerp:function(t,n,e,a,r,s){return f(x,n,r,s),f(F,e,a,s),f(t,x,F,2*s*(1-s)),t},sqrLen:b,squaredLength:g,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},90707:(t,n,e)=>{e.d(n,{l:()=>c});var a=e(15941),r=e(34761),s=e(9392);function i(t,n,e){const a=Math.sin(t),r=Math.cos(t),s=Math.sin(n),i=Math.cos(n),o=e;return o[0]=-a,o[4]=-s*r,o[8]=i*r,o[12]=0,o[1]=r,o[5]=-s*a,o[9]=i*a,o[13]=0,o[2]=0,o[6]=i,o[10]=s,o[14]=0,o[3]=0,o[7]=0,o[11]=0,o[15]=1,o}var o=e(482),h=e(80963);function c(t,n,e,a){if(null==t||null==a)return!1;const s=(0,o.Qk)(t,o.Wv),c=(0,o.Qk)(a,o.zp);if(s===c&&!u(c)&&(s!==o.rz.UNKNOWN||(0,h.aI)(t,a)))return(0,r.kN)(e,n),!0;if(u(c)){const t=o.w5[s][o.rz.LON_LAT],a=o.w5[o.rz.LON_LAT][c];return null!=t&&null!=a&&(t(n,0,f,0),a(f,0,d,0),i(l*f[0],l*f[1],e),e[12]=d[0],e[13]=d[1],e[14]=d[2],!0)}const _=u(s);if((c===o.rz.WEB_MERCATOR||c===o.rz.PLATE_CARREE||c===o.rz.WGS84||c===o.rz.CGCS2000)&&(s===o.rz.WGS84||_||s===o.rz.WEB_MERCATOR||s===o.rz.CGCS2000)){const t=o.w5[s][o.rz.LON_LAT],a=o.w5[o.rz.LON_LAT][c];return null!=t&&null!=a&&(t(n,0,f,0),a(f,0,d,0),_?function(t,n,e){i(t,n,e),(0,r.mg)(e,e)}(l*f[0],l*f[1],e):(0,r.D_)(e),e[12]=d[0],e[13]=d[1],e[14]=d[2],!0)}return!1}function u(t){return t===o.rz.SPHERICAL_ECEF||t===o.rz.SPHERICAL_MARS_PCPF||t===o.rz.SPHERICAL_MOON_PCPF||t===o.rz.WGS84_ECEF}const l=(0,a.kU)(1),f=(0,s.vt)(),d=(0,s.vt)()},98510:(t,n,e)=>{e.d(n,{Y0:()=>c,lO:()=>u});var a=e(34111),r=e(13312),s=e(80963);const i=new r.A(a.fv),o=new r.A(a.FY),h=new r.A(a.LJ),c=new r.A(a.Ro);function u(t){const n=l.get(t);if(n)return n;let e=i;if(t)if(t===o)e=o;else if(t===h)e=h;else{const n=t.wkid,a=t.latestWkid;if(null!=n||null!=a)(0,s.tl)(n)||(0,s.tl)(a)?e=o:((0,s.ZL)(n)||(0,s.ZL)(a))&&(e=h);else{const n=t.wkt2??t.wkt;if(n){const t=n.toUpperCase();t===f?e=o:t===d&&(e=h)}}}return l.set(t,e),e}const l=new Map,f=o.wkt.toUpperCase(),d=h.wkt.toUpperCase()},59231:(t,n,e)=>{e.d(n,{ab:()=>It,gm:()=>pt});var a=e(63919),r=e(44680),s=e(13191),i=e(60008),o=e(4336),h=e(20664),c=e(9392),u=e(43047),l=e(55855),f=e(34111),d=e(98510),_=e(90707),M=e(45308),A=e(482),E=e(13927),m=e(80963),T=e(75762),I=e(64465),O=e(72745),v=e(50468);const N=1e-6,S=(0,c.vt)(),P=(0,c.vt)();function g(t,n,e,a,r,s,i,o,h,c){return function(t,n,e){let a=mt(t.maxVert[0],t.minVert[0]),r=0;for(let s=1;s<7;++s){const n=mt(t.maxVert[s],t.minVert[s]);n>a&&(a=n,r=s)}_t(n,t.minVert[r]),_t(e,t.maxVert[r])}(t,a,r),mt(a,r)<N?1:(ft(i,a,r),At(i,i),function(t,n,e,a){const{data:r,size:s}=t;let i=Number.NEGATIVE_INFINITY,o=0;for(let h=0;h<r.length;h+=s){F[0]=r[h]-n[0],F[1]=r[h+1]-n[1],F[2]=r[h+2]-n[2];const t=e[0]*F[0]+e[1]*F[1]+e[2]*F[2],a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=F[0]*F[0]+F[1]*F[1]+F[2]*F[2]-t*t/a;s>i&&(i=s,o=h)}return _t(a,r,o),i}(n,a,i,s)<N?2:(ft(o,r,s),At(o,o),ft(h,s,a),At(h,h),Mt(e,o,i),At(e,e),Y(n,e,i,o,h,c),0))}const b=(0,c.vt)(),R=(0,c.vt)(),C=(0,c.vt)(),p=(0,c.vt)(),j=(0,c.vt)(),L=(0,c.vt)(),w=(0,c.vt)(),z=(0,c.vt)();function x(t,n,e,a,r,s,i,o,h){(function(t,n,e,a,r){!function(t,n,e,a,r){const{data:s,size:i}=t;_t(a,s),_t(r,a),e[0]=Tt(Q,n),e[1]=e[0];for(let o=i;o<s.length;o+=i){const t=s[o]*n[0]+s[o+1]*n[1]+s[o+2]*n[2];t<e[0]&&(e[0]=t,_t(a,s,o)),t>e[1]&&(e[1]=t,_t(r,s,o))}}(t,n,D,r,a);const s=Tt(e,n);D[1]-N<=s&&(a[0]=void 0),D[0]+N>=s&&(r[0]=void 0)})(t,n,e,b,R),void 0!==b[0]&&(ft(C,b,e),At(C,C),ft(p,b,a),At(p,p),ft(j,b,r),At(j,j),Mt(L,p,s),At(L,L),Mt(w,j,i),At(w,w),Mt(z,C,o),At(z,z),Y(t,L,s,p,C,h),Y(t,w,i,j,p,h),Y(t,z,o,C,j,h)),void 0!==R[0]&&(ft(C,R,e),At(C,C),ft(p,R,a),At(p,p),ft(j,R,r),At(j,j),Mt(L,p,s),At(L,L),Mt(w,j,i),At(w,w),Mt(z,C,o),At(z,z),Y(t,L,s,p,C,h),Y(t,w,i,j,p,h),Y(t,z,o,C,j,h))}const F=[0,0,0];const D=(0,O.vt)();const y=(0,c.vt)(),V=(0,c.vt)(),q=(0,c.vt)(),U=(0,c.vt)(),B=(0,c.vt)(),G=(0,c.vt)();function Y(t,n,e,a,r,s){if(Et(n)<N)return;Mt(y,e,n),Mt(V,a,n),Mt(q,r,n),X(t,n,D),B[1]=D[0],U[1]=D[1],G[1]=U[1]-B[1];const i=[e,a,r],o=[y,V,q];for(let h=0;h<3;++h){X(t,i[h],D),B[0]=D[0],U[0]=D[1],X(t,o[h],D),B[2]=D[0],U[2]=D[1],G[0]=U[0]-B[0],G[2]=U[2]-B[2];const e=ut(G);e<s.quality&&(_t(s.b0,i[h]),_t(s.b1,n),_t(s.b2,o[h]),s.quality=e)}}const Q=(0,c.vt)();function X(t,n,e){const{data:a,size:r}=t;e[0]=Number.POSITIVE_INFINITY,e[1]=Number.NEGATIVE_INFINITY;for(let s=0;s<a.length;s+=r){const t=a[s]*n[0]+a[s+1]*n[1]+a[s+2]*n[2];e[0]=Math.min(e[0],t),e[1]=Math.max(e[1],t)}}function k(t,n,e){e.center=t,e.halfSize=(0,h.h)(n,n,.5),e.quaternion=o.zK}const H=(0,c.vt)(),W=(0,c.vt)(),Z=(0,c.vt)(),K=(0,c.vt)(),J=(0,c.vt)(),$=(0,c.vt)();function tt(t,n,e){_t(H,n),Math.abs(n[0])>Math.abs(n[1])&&Math.abs(n[0])>Math.abs(n[2])?H[0]=0:Math.abs(n[1])>Math.abs(n[2])?H[1]=0:H[2]=0,Et(H)<N&&(H[0]=H[1]=H[2]=1),Mt(W,n,H),At(W,W),Mt(Z,n,W),At(Z,Z),nt(t,n,W,Z,K,J),ft($,J,K),ot(n,W,Z,K,J,$,e)}function nt(t,n,e,a,r,s){X(t,n,D),r[0]=D[0],s[0]=D[1],X(t,e,D),r[1]=D[0],s[1]=D[1],X(t,a,D),r[2]=D[0],s[2]=D[1]}const et=(0,c.vt)(),at=(0,c.vt)(),rt=(0,c.vt)(),st=(0,r.fA)(1,0,0,0,1,0,0,0,1),it=(0,o.vt)();function ot(t,n,e,a,r,s,i){st[0]=t[0],st[1]=t[1],st[2]=t[2],st[3]=n[0],st[4]=n[1],st[5]=n[2],st[6]=e[0],st[7]=e[1],st[8]=e[2],i.quaternion=function(t,n){const e=n[0]+n[4]+n[8];if(e>0){let a=Math.sqrt(e+1);t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a}else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const a=(e+1)%3,r=(e+2)%3;let s=Math.sqrt(n[3*e+e]-n[3*a+a]-n[3*r+r]+1);t[e]=.5*s,s=.5/s,t[3]=(n[3*a+r]-n[3*r+a])*s,t[a]=(n[3*a+e]+n[3*e+a])*s,t[r]=(n[3*r+e]+n[3*e+r])*s}return t}(it,st),lt(et,a,r),dt(et,et,.5),dt(at,t,et[0]),dt(rt,n,et[1]),lt(at,at,rt),dt(rt,e,et[2]),i.center=(0,h.g)(at,at,rt),i.halfSize=(0,h.h)(et,s,.5)}class ht{constructor(t){this.minVert=new Array(7),this.maxVert=new Array(7);this.buffer=new ArrayBuffer(448);let n=0;this.minProj=new Float64Array(this.buffer,n,7),n+=56,this.maxProj=new Float64Array(this.buffer,n,7),n+=56;for(let i=0;i<7;++i)this.minVert[i]=new Float64Array(this.buffer,n,3),n+=24;for(let i=0;i<7;++i)this.maxVert[i]=new Float64Array(this.buffer,n,3),n+=24;for(let i=0;i<7;++i)this.minProj[i]=Number.POSITIVE_INFINITY,this.maxProj[i]=Number.NEGATIVE_INFINITY;const e=new Array(7),a=new Array(7),{data:r,size:s}=t;for(let i=0;i<r.length;i+=s){let t=r[i];t<this.minProj[0]&&(this.minProj[0]=t,e[0]=i),t>this.maxProj[0]&&(this.maxProj[0]=t,a[0]=i),t=r[i+1],t<this.minProj[1]&&(this.minProj[1]=t,e[1]=i),t>this.maxProj[1]&&(this.maxProj[1]=t,a[1]=i),t=r[i+2],t<this.minProj[2]&&(this.minProj[2]=t,e[2]=i),t>this.maxProj[2]&&(this.maxProj[2]=t,a[2]=i),t=r[i]+r[i+1]+r[i+2],t<this.minProj[3]&&(this.minProj[3]=t,e[3]=i),t>this.maxProj[3]&&(this.maxProj[3]=t,a[3]=i),t=r[i]+r[i+1]-r[i+2],t<this.minProj[4]&&(this.minProj[4]=t,e[4]=i),t>this.maxProj[4]&&(this.maxProj[4]=t,a[4]=i),t=r[i]-r[i+1]+r[i+2],t<this.minProj[5]&&(this.minProj[5]=t,e[5]=i),t>this.maxProj[5]&&(this.maxProj[5]=t,a[5]=i),t=r[i]-r[i+1]-r[i+2],t<this.minProj[6]&&(this.minProj[6]=t,e[6]=i),t>this.maxProj[6]&&(this.maxProj[6]=t,a[6]=i)}for(let i=0;i<7;++i){let t=e[i];_t(this.minVert[i],r,t),t=a[i],_t(this.maxVert[i],r,t)}}}class ct{constructor(){this.b0=(0,c.fA)(1,0,0),this.b1=(0,c.fA)(0,1,0),this.b2=(0,c.fA)(0,0,1),this.quality=0}}function ut(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function lt(t,n,e){t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2]}function ft(t,n,e){t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2]}function dt(t,n,e){t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e}function _t(t,n,e=0){t[0]=n[e],t[1]=n[e+1],t[2]=n[e+2]}function Mt(t,n,e){const a=n[0],r=n[1],s=n[2],i=e[0],o=e[1],h=e[2];t[0]=r*h-s*o,t[1]=s*i-a*h,t[2]=a*o-r*i}function At(t,n){const e=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(e>0){const a=1/Math.sqrt(e);t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a}}function Et(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function mt(t,n){const e=n[0]-t[0],a=n[1]-t[1],r=n[2]-t[2];return e*e+a*a+r*r}function Tt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}class It{constructor(t=c.uY,n=Yt,e=o.zK){this._data=[t[0],t[1],t[2],n[0],n[1],n[2],e[0],e[1],e[2],e[3]]}clone(){const t=new It;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const n=new It;return n._data=t.slice(),n}static fromJSON(t){return new It(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return(0,h.i)(T.rq.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,n,e){this._data[0]=t,this._data[1]=n,this._data[2]=e}get halfSize(){return(0,h.i)(T.rq.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return(0,i.hZ)(T.J8.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const n=Ot,e=this._data;n[0]=e[6],n[1]=e[7],n[2]=e[8],n[3]=e[9];for(let a=0;a<8;++a){const r=t[a];r[0]=(1&a?-1:1)*e[3],r[1]=(2&a?-1:1)*e[4],r[2]=(4&a?-1:1)*e[5],(0,h.w)(r,r,n),r[0]+=e[0],r[1]+=e[1],r[2]+=e[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],n=this._data[4],e=this._data[5];return Math.sqrt(t*t+n*n+e*e)}intersectSphere(t){St[0]=this._data[0]-t[0],St[1]=this._data[1]-t[1],St[2]=this._data[2]-t[2];const n=this.getQuaternion(vt);return(0,i.Xr)(Ot,n),(0,h.w)(St,St,Ot),(0,h.x)(St,St),Pt[0]=Math.min(St[0],this._data[3]),Pt[1]=Math.min(St[1],this._data[4]),Pt[2]=Math.min(St[2],this._data[5]),(0,h.y)(Pt,St)<t[3]*t[3]}intersectSphereWithMBS(t,n=this.radius){const e=this._data;St[0]=e[0]-t[0],St[1]=e[1]-t[1],St[2]=e[2]-t[2];const a=t[3],r=a+n;return!((0,h.z)(St)>r*r)&&(Ot[0]=-e[6],Ot[1]=-e[7],Ot[2]=-e[8],Ot[3]=e[9],(0,h.w)(St,St,Ot),(0,h.x)(St,St),Pt[0]=Math.min(St[0],e[3]),Pt[1]=Math.min(St[1],e[4]),Pt[2]=Math.min(St[2],e[5]),(0,h.y)(Pt,St)<a*a)}intersectPlane(t){const n=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],e=this.projectedRadius((0,E.Qj)(t));return n>e?1:n<-e?-1:0}intersectRay(t,n,e=0){const a=this._data,r=Ot;r[0]=-a[6],r[1]=-a[7],r[2]=-a[8],r[3]=a[9],St[0]=t[0]-a[0],St[1]=t[1]-a[1],St[2]=t[2]-a[2];const s=(0,h.w)(St,St,Ot),i=(0,h.w)(Pt,n,Ot);let o=-1/0,c=1/0;const u=this.getHalfSize(Dt);for(let h=0;h<3;h++){const t=s[h],n=i[h],a=u[h]+e;if(Math.abs(n)>1e-6){const e=(a-t)/n,r=(-a-t)/n;o=Math.max(o,Math.min(e,r)),c=Math.min(c,Math.max(e,r))}else if(t>a||t<-a)return!1}return o<=c}projectedArea(t,n,e,r){const s=this.getQuaternion(vt);(0,i.Xr)(Ot,s),St[0]=t[0]-this._data[0],St[1]=t[1]-this._data[1],St[2]=t[2]-this._data[2],(0,h.w)(St,St,Ot);const o=this.getHalfSize(Dt),c=St[0]<-o[0]?-1:St[0]>o[0]?1:0,l=St[1]<-o[1]?-1:St[1]>o[1]?1:0,f=St[2]<-o[2]?-1:St[2]>o[2]?1:0,d=Math.abs(c)+Math.abs(l)+Math.abs(f);if(0===d)return 1/0;const _=1===d?4:6,M=6*(c+3*l+9*f+13);(0,a.I0)(yt,s),(0,a.hs)(yt,yt,o);const A=this.getCenter(xt);for(let a=0;a<_;a++){const t=Ct[M+a];(0,h.i)(St,((1&t)<<1)-1,(2&t)-1,((4&t)>>1)-1),(0,h.q)(St,St,yt),(0,h.g)(gt,A,St),gt[3]=1,(0,u.t)(gt,gt,n);const e=1/Math.max(1e-6,gt[3]);Rt[2*a]=gt[0]*e,Rt[2*a+1]=gt[1]*e}const E=2*_-2;let m=Rt[0]*(Rt[3]-Rt[E+1])+Rt[E]*(Rt[1]-Rt[E-1]);for(let a=2;a<E;a+=2)m+=Rt[a]*(Rt[a+3]-Rt[a-1]);return Math.abs(m)*e*r*.125}projectedRadius(t){const n=this.getQuaternion(vt);return(0,i.Xr)(Ot,n),(0,h.w)(St,t,Ot),Math.abs(St[0]*this._data[3])+Math.abs(St[1]*this._data[4])+Math.abs(St[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius((0,E.Qj)(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius((0,E.Qj)(t))}toAaBoundingBox(t){const n=this.getQuaternion(vt),e=(0,a.I0)(yt,n),r=this._data[3]*Math.abs(e[0])+this._data[4]*Math.abs(e[3])+this._data[5]*Math.abs(e[6]),s=this._data[3]*Math.abs(e[1])+this._data[4]*Math.abs(e[4])+this._data[5]*Math.abs(e[7]),i=this._data[3]*Math.abs(e[2])+this._data[4]*Math.abs(e[5])+this._data[5]*Math.abs(e[8]);t[0]=this._data[0]-r,t[1]=this._data[1]-s,t[2]=this._data[2]-i,t[3]=this._data[0]+r,t[4]=this._data[1]+s,t[5]=this._data[2]+i}transform(t,n,e,a=0,r=(0,d.lO)(e),s=(0,d.lO)(n),o=(0,A.jd)(n,s)){if(e===r)n.isGeographic?function(t,n,e,a,r=(0,d.lO)(e)){const s=(0,f.tO)(e),o=1+Math.max(0,a)/(s.radius+t.centerZ);t.getCenter(zt),zt[2]+=a,(0,M.projectBuffer)(zt,e,0,zt,r,0),n.center=zt;const c=t.getQuaternion(vt);n.quaternion=c,(0,i.Xr)(Ot,c),(0,h.i)(Ut,0,0,1),(0,h.w)(Ut,Ut,Ot);const u=t.getHalfSize(Dt);(0,h.i)(Ut,u[0]*Math.abs(Ut[0]),u[1]*Math.abs(Ut[1]),u[2]*Math.abs(Ut[2])),(0,h.h)(Ut,Ut,s.inverseFlattening),(0,h.g)(Ut,u,Ut),n.halfSize=(0,h.h)(Ut,Ut,o)}(this,t,n,a,s):function(t,n,e,a,r=(0,d.lO)(e),s=(0,A.jd)(e,r)){t.getCorners(qt),t.getCenter(zt),zt[2]+=a,(0,_.l)(e,zt,Vt,r),n.setCenter(Vt[12],Vt[13],Vt[14]);const o=2*Math.sqrt(1+Vt[0]+Vt[5]+Vt[10]);Ot[0]=(Vt[6]-Vt[9])/o,Ot[1]=(Vt[8]-Vt[2])/o,Ot[2]=(Vt[1]-Vt[4])/o,Ot[3]=.25*o;const c=t.getQuaternion(vt);n.quaternion=(0,i.lw)(Ot,Ot,c),(0,i.Xr)(Ot,Ot),(0,h.i)(Bt,0,0,0);const u=n.getCenter(Ft);for(const i of qt)i[2]+=a,s(i,0,i,0),(0,h.a)(Ut,i,u),(0,h.w)(Ut,Ut,Ot),(0,h.x)(Ut,Ut),(0,h.D)(Bt,Bt,Ut);n.halfSize=Bt}(this,t,n,a,s,o);else if(n.isWGS84&&(e.isWebMercator||(0,m.r1)(e)))!function(t,n,e,a,r){n.getCenter(xt),xt[2]+=r;const s=(0,d.lO)(e);(0,M.projectBuffer)(xt,t,0,xt,s,0),jt(s,n,xt,e,a)}(n,this,e,t,a);else if(n.isWebMercator&&(0,m.r1)(e))!function(t,n,e,a,r){n.getCenter(xt),xt[2]+=r,jt(t,n,xt,e,a)}(n,this,e,t,a);else{const r=this.getCenter(xt);r[2]+=a,(0,M.projectBuffer)(r,n,0,r,e,0),t.center=r,this!==t&&(t.quaternion=this.getQuaternion(vt),t.halfSize=this.getHalfSize(Dt))}}}const Ot=(0,o.vt)(),vt=(0,o.vt)(),Nt=(0,o.vt)(),St=(0,c.vt)(),Pt=(0,c.vt)(),gt=(0,l.vt)();function bt(t,n=new It){return function(t,n){const{data:e,size:a}=t,r=e.length/a;if(r<=0)return;const s=new ht(t);lt(S,s.minProj,s.maxProj),dt(S,S,.5),ft(P,s.maxProj,s.minProj);const i=ut(P),o=new ct;o.quality=i,r<14&&(t=new v.K(new Float64Array(s.buffer,112,42),3));const h=(0,c.vt)(),u=(0,c.vt)(),l=(0,c.vt)(),f=(0,c.vt)(),d=(0,c.vt)(),_=(0,c.vt)(),M=(0,c.vt)();switch(g(s,t,M,h,u,l,f,d,_,o)){case 1:return void k(S,P,n);case 2:return void tt(t,f,n)}x(t,M,h,u,l,f,d,_,o),nt(t,o.b0,o.b1,o.b2,K,J);const A=(0,c.vt)();ft(A,J,K),o.quality=ut(A),o.quality<i?ot(o.b0,o.b1,o.b2,K,J,A,n):k(S,P,n)}(t,n),n}const Rt=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Ct=(()=>{const t=new Int8Array(162);let n=0;const e=e=>{for(let a=0;a<e.length;a++)t[n+a]=e[a];n+=6};return e([6,2,3,1,5,4]),e([0,2,3,1,5,4]),e([0,2,3,7,5,4]),e([0,1,3,2,6,4]),e([0,1,3,2,0,0]),e([0,1,5,7,3,2]),e([0,1,3,7,6,4]),e([0,1,3,7,6,2]),e([0,1,5,7,6,2]),e([0,1,5,4,6,2]),e([0,1,5,4,0,0]),e([0,1,3,7,5,4]),e([0,2,6,4,0,0]),e([0,0,0,0,0,0]),e([1,3,7,5,0,0]),e([2,3,7,6,4,0]),e([2,3,7,6,0,0]),e([2,3,1,5,7,6]),e([0,1,5,7,6,2]),e([0,1,5,7,6,4]),e([0,1,3,7,6,4]),e([4,5,7,6,2,0]),e([4,5,7,6,0,0]),e([4,5,1,3,7,6]),e([0,2,3,7,5,4]),e([6,2,3,7,5,4]),e([6,2,3,1,5,4]),t})();function pt(t,n,e,a,r){const s=t.getQuaternion(vt);r.quaternion=s,(0,i.Xr)(Ot,s);const o=t.getCenter(xt),u=t.getHalfSize(Dt);if(a===I.RT.Global){(0,h.w)(Ut,o,Ot),(0,h.x)(Bt,Ut),(0,h.A)(Gt,Bt,u),(0,h.a)(Gt,Bt,Gt);const a=(0,h.l)(Gt);(0,h.g)(Gt,Bt,u);const s=(0,h.l)(Gt);if(a<e)r.center=o,(0,h.i)(Ut,e,e,e),r.halfSize=(0,h.g)(Ut,u,Ut);else{const i=s>0?1+n/s:1,o=a>0?1+e/a:1,c=(o+i)/2,l=(o-i)/2;(0,h.h)(Gt,Bt,l),r.halfSize=(0,h.b)(Gt,Gt,u,c),(0,h.h)(Gt,Bt,c),(0,h.b)(Gt,Gt,u,l),(0,h.B)(Ut,Ut),(0,h.C)(Ut,Gt,Ut);const f=t.getQuaternion(Nt);r.center=(0,h.w)(Ut,Ut,f)}}else{r.center=(0,h.b)(Ut,o,c.Cb,(e+n)/2);const t=(0,h.w)(Ut,c.Cb,Ot);(0,h.x)(t,t),r.halfSize=(0,h.b)(Bt,u,t,(e-n)/2)}return r}function jt(t,n,e,r,s){const i=n.getQuaternion(vt),o=(0,a.I0)(yt,i),h=n.getHalfSize(Dt);for(let a=0;a<8;++a){for(let t=0;t<3;++t)zt[t]=h[t]*(a&1<<t?-1:1);for(let t=0;t<3;++t){let n=e[t];for(let e=0;e<3;++e)n+=zt[e]*o[3*e+t];Lt[3*a+t]=n}}(0,M.projectBuffer)(Lt,t,0,Lt,r,0,8),bt(wt,s)}const Lt=new Array(24),wt=new v.K(Lt,3),zt=(0,c.vt)(),xt=(0,c.vt)(),Ft=(0,c.vt)(),Dt=(0,c.vt)(),yt=(0,r.vt)(),Vt=(0,s.vt)(),qt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Ut=(0,c.vt)(),Bt=(0,c.vt)(),Gt=(0,c.vt)(),Yt=(0,c.CN)(-1,-1,-1)},50468:(t,n,e)=>{e.d(n,{K:()=>a,n:()=>r});class a{constructor(t,n,e=n){this.data=t,this.size=n,this.stride=e}}class r extends a{constructor(t,n,e,a=!1,r=e){super(t,e,r),this.indices=n,this.exclusive=a}}},66470:(t,n,e)=>{var a;e.d(n,{r:()=>a}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.ROTATION="rotation",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.START_UP="startUp",t.END_UP="endUp",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(a||(a={}))}}]);
//# sourceMappingURL=9592.d9f97217.chunk.js.map