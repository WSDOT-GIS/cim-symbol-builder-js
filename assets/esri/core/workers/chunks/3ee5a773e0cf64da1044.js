"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9759],{97937:(e,t,r)=>{r.d(t,{a:()=>M,c:()=>g,e:()=>b,f:()=>T,g:()=>w,k:()=>_,o:()=>q,s:()=>F,w:()=>x}),r(44208),r(53966);var n=r(34727),o=r(58083),s=r(38954),i=r(51850),a=r(87317),c=r(91829),u=r(34304),l=r(88582),f=r(71351);function d(e,t){const r=(0,s.l)(e),o=(0,n.YN)(e[2]/r),i=Math.atan2(e[1]/r,e[0]/r);return(0,s.i)(t,r,o,i),t}var m=r(44280),h=r(32114);const p=g();function g(){return(0,c.vt)()}const y=a.e,v=a.e;function b(e,t){return(0,a.c)(t,e)}function x(e){return e}function w(e){return e[3]}function M(e){return e}function T(e,t,r,n){return(0,c.fA)(e,t,r,n)}function S(e,t,r){if(null==t)return!1;if(!A(e,t,B))return!1;let{t0:n,t1:o}=B;if((n<0||o<n&&o>0)&&(n=o),n<0)return!1;if(r){const{origin:e,direction:o}=t;r[0]=e[0]+o[0]*n,r[1]=e[1]+o[1]*n,r[2]=e[2]+o[2]*n}return!0}const B={t0:0,t1:0};function A(e,t,r){const{origin:n,direction:o}=t,s=R;s[0]=n[0]-e[0],s[1]=n[1]-e[1],s[2]=n[2]-e[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===i)return!1;const a=2*(o[0]*s[0]+o[1]*s[1]+o[2]*s[2]),c=a*a-4*i*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-e[3]*e[3]);if(c<0)return!1;const u=Math.sqrt(c);return r.t0=(-a-u)/(2*i),r.t1=(-a+u)/(2*i),!0}const R=(0,i.vt)();function _(e,t){return S(e,t,null)}function O(e,t,r){const n=h.rq.get(),i=h.Rc.get();(0,s.e)(n,t.origin,t.direction);const a=w(e);(0,s.e)(r,n,t.origin),(0,s.h)(r,r,1/(0,s.l)(r)*a);const c=C(e,t.origin),u=(0,m.g7)(t.origin,r);return(0,o.$0)(i,u+c,n),(0,s.t)(r,r,i),r}function P(e,t,r){const n=(0,s.d)(h.rq.get(),t,e),o=(0,s.h)(h.rq.get(),n,e[3]/(0,s.l)(n));return(0,s.g)(r,o,e)}function C(e,t){const r=(0,s.d)(h.rq.get(),t,e),o=(0,s.l)(r),i=w(e),a=i+Math.abs(i-o);return(0,n.XM)(i/a)}const E=(0,i.vt)();function I(e,t,r,n){const o=(0,s.d)(E,t,e);switch(r){case l._.X:{const e=d(o,E)[2];return(0,s.i)(n,-Math.sin(e),Math.cos(e),0)}case l._.Y:{const e=d(o,E),t=e[1],r=e[2],i=Math.sin(t);return(0,s.i)(n,-i*Math.cos(r),-i*Math.sin(r),Math.cos(t))}case l._.Z:return(0,s.n)(n,o);default:return}}function U(e,t){const r=(0,s.d)(N,t,e);return(0,s.l)(r)-e[3]}function q(e,t){const r=(0,s.s)(e,t),n=w(e);return r<=n*n}const N=(0,i.vt)(),j=g(),F=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:p,altitudeAt:U,angleToSilhouette:C,axisAt:I,cameraFrustumCoverage:function(e,t,r,n){const o=w(e),s=o*o,i=t+.5*Math.PI,a=r*r+s-2*Math.cos(i)*r*o,c=Math.sqrt(a),u=a-s;if(u<=0)return.5;const l=Math.sqrt(u),f=Math.acos(l/c)-Math.asin(o/(c/Math.sin(i)));return Math.min(1,(f+.5*n)/n)},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return S(e,t,r)?r:((0,f.oC)(t,e,r),P(e,r,r))},closestPointOnSilhouette:O,containsPoint:q,copy:b,create:g,distanceToSilhouette:function(e,t){const r=(0,s.d)(h.rq.get(),t,e),n=(0,s.k)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(n-o))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:v,exactEquals:y,fromCenterAndRadius:function(e,t){return(0,c.fA)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:T,getCenter:M,getExtent:function(e,t){return t},getRadius:w,intersectLine:function(e,t,r){const n=(0,f.Cr)(t,r);if(!A(e,n,B))return[];const{origin:o,direction:a}=n,{t0:c,t1:l}=B,d=t=>{const r=(0,i.vt)();return(0,s.b)(r,o,a,t),P(e,r,r)};return Math.abs(c-l)<(0,u.FD)()?[d(c)]:[d(c),d(l)]},intersectRay:S,intersectRayClosestSilhouette:function(e,t,r){if(S(e,t,r))return r;const n=O(e,t,h.rq.get());return(0,s.g)(r,t.origin,(0,s.h)(h.rq.get(),t.direction,(0,s.j)(t.origin,n)/(0,s.l)(t.direction))),r},intersectsRay:_,projectPoint:P,setAltitudeAt:function(e,t,r,n){const o=U(e,t),i=I(e,t,l._.Z,N),a=(0,s.h)(N,i,r-o);return(0,s.g)(n,t,a)},setExtent:function(e,t,r){return e!==r&&b(e,r),r},tmpSphere:j,union:function(e,t,r=(0,c.vt)()){const n=(0,s.j)(e,t),o=e[3],i=t[3];return n+i<o?((0,a.c)(r,e),r):n+o<i?((0,a.c)(r,t),r):((0,s.m)(r,e,t,(n+i-o)/(2*n)),r[3]=(n+o+i)/2,r)},wrap:x},Symbol.toStringTag,{value:"Module"}))},43609:(e,t,r)=>{r.d(t,{a:()=>s,f:()=>i,n:()=>o});var n=r(34275);function o(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r=2,o=r){const s=t.length/2;let i=0,a=0;if((0,n.cy)(t)||(0,n.dk)(t)){for(let n=0;n<s;++n)e[i]=t[a],e[i+1]=t[a+1],i+=r,a+=o;return}const c=(0,n.a3)(t);if((0,n.JI)(t))for(let n=0;n<s;++n)e[i]=Math.max(t[a]/c,-1),e[i+1]=Math.max(t[a+1]/c,-1),i+=r,a+=o;else for(let n=0;n<s;++n)e[i]=t[a]/c,e[i+1]=t[a+1]/c,i+=r,a+=o}function i(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,i=n?.count??e.count;let a=(n?.dstIndex??0)*s;for(let e=0;e<i;++e)o[a]=t,o[a+1]=r,a+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:i,normalizeIntegerBuffer:s,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}))},73354:(e,t,r)=>{function n(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,n=3,o=n){if(e.length/n!==Math.ceil(t.length/o))return e;const s=e.length/n,i=r[0],a=r[1],c=r[2],u=r[4],l=r[5],f=r[6],d=r[8],m=r[9],h=r[10],p=r[12],g=r[13],y=r[14];let v=0,b=0;for(let r=0;r<s;r++){const r=t[v],s=t[v+1],x=t[v+2];e[b]=i*r+u*s+d*x+p,e[b+1]=a*r+l*s+m*x+g,e[b+2]=c*r+f*s+h*x+y,v+=o,b+=n}return e}function s(e,t,r){i(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r,n=3,o=n){if(e.length/n!==Math.ceil(t.length/o))return;const s=e.length/n,i=r[0],a=r[1],c=r[2],u=r[3],l=r[4],f=r[5],d=r[6],m=r[7],h=r[8];let p=0,g=0;for(let r=0;r<s;r++){const r=t[p],s=t[p+1],y=t[p+2];e[g]=i*r+u*s+d*y,e[g+1]=a*r+l*s+m*y,e[g+2]=c*r+f*s+h*y,p+=o,g+=n}}function a(e,t,r){c(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function c(e,t,r,n=3,o=n){const s=Math.min(e.length/n,t.length/o);let i=0,a=0;for(let c=0;c<s;c++)e[a]=r*t[i],e[a+1]=r*t[i+1],e[a+2]=r*t[i+2],i+=o,a+=n;return e}function u(e,t,r,n=3,o=n){const s=e.length/n;if(s!==Math.ceil(t.length/o))return e;let i=0,a=0;for(let c=0;c<s;c++)e[a]=t[i]+r[0],e[a+1]=t[i+1]+r[1],e[a+2]=t[i+2]+r[2],i+=o,a+=n;return e}function l(e,t){f(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function f(e,t,r=3,n=r){const o=Math.min(e.length/r,t.length/n);let s=0,i=0;for(let a=0;a<o;a++){const o=t[s],a=t[s+1],c=t[s+2],u=o*o+a*a+c*c;if(u>0){const t=1/Math.sqrt(u);e[i]=t*o,e[i+1]=t*a,e[i+2]=t*c}s+=n,i+=r}}r.d(t,{a:()=>u,b:()=>i,c:()=>s,d:()=>n,e:()=>l,f:()=>c,n:()=>f,s:()=>a,t:()=>o}),r(44208),r(53966),Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:l,scale:c,scaleView:a,shiftRight:function(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;let c=0,u=0;for(let e=0;e<n;e++)o[u]=i[c]>>r,o[u+1]=i[c+1]>>r,o[u+2]=i[c+2]>>r,c+=a,u+=s},transformMat3:i,transformMat3View:s,transformMat4:o,transformMat4View:n,translate:u},Symbol.toStringTag,{value:"Module"}))},51737:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r=3,n=r){const o=t.length/n;let s=0,i=0;for(let a=0;a<o;++a)e[s]=t[i],e[s+1]=t[i+1],e[s+2]=t[i+2],s+=r,i+=n}function s(e,t,r,n,o){const s=e.typedBuffer,i=e.typedBufferStride,a=o?.count??e.count;let c=(o?.dstIndex??0)*i;for(let e=0;e<a;++e)s[c]=t,s[c+1]=r,s[c+2]=n,c+=i}r.d(t,{a:()=>n,c:()=>o,f:()=>s}),Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},65686:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>c,n:()=>i,s:()=>a,t:()=>s}),r(44208);var n=r(53966);function o(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,n=4,o=n){if(e.length/n!=t.length/o)return;const s=e.length/n,i=r[0],a=r[1],c=r[2],u=r[3],l=r[4],f=r[5],d=r[6],m=r[7],h=r[8];let p=0,g=0;for(let r=0;r<s;r++){const r=t[p],s=t[p+1],y=t[p+2],v=t[p+3];e[g]=i*r+u*s+d*y,e[g+1]=a*r+l*s+m*y,e[g+2]=c*r+f*s+h*y,e[g+3]=v,p+=o,g+=n}}function i(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*o,r=e*i,a=s[r],c=s[r+1],u=s[r+2],l=a*a+c*c+u*u;if(l>0){const e=1/Math.sqrt(l);n[t]=e*a,n[t+1]=e*c,n[t+2]=e*u}}}function a(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r,n=4){const o=Math.min(e.length/n,t.count),s=t.typedBuffer,i=t.typedBufferStride;let a=0,c=0;for(let t=0;t<o;t++)e[c]=r*s[a],e[c+1]=r*s[a+1],e[c+2]=r*s[a+2],e[c+3]=r*s[a+3],a+=i,c+=n}Object.freeze(Object.defineProperty({__proto__:null,normalize:i,scale:c,scaleView:a,transformMat3:s,transformMat3View:o,transformMat4:function(e,t,r,o=4,s=o){if(e.length/o!=t.length/s)return void n.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const i=e.length/o,a=r[0],c=r[1],u=r[2],l=r[3],f=r[4],d=r[5],m=r[6],h=r[7],p=r[8],g=r[9],y=r[10],v=r[11],b=r[12],x=r[13],w=r[14],M=r[15];let T=0,S=0;for(let r=0;r<i;r++){const r=t[T],n=t[T+1],i=t[T+2],B=t[T+3];e[S]=a*r+f*n+p*i+b*B,e[S+1]=c*r+d*n+g*i+x*B,e[S+2]=u*r+m*n+y*i+w*B,e[S+3]=l*r+h*n+v*i+M*B,T+=s,S+=o}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const n=e.count,o=r[0],s=r[1],i=r[2],a=r[3],c=r[4],u=r[5],l=r[6],f=r[7],d=r[8],m=r[9],h=r[10],p=r[11],g=r[12],y=r[13],v=r[14],b=r[15],x=e.typedBuffer,w=e.typedBufferStride,M=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*w,r=e*T,n=M[r],S=M[r+1],B=M[r+2],A=M[r+3];x[t]=o*n+c*S+d*B+g*A,x[t+1]=s*n+u*S+m*B+y*A,x[t+2]=i*n+l*S+h*B+v*A,x[t+3]=a*n+f*S+p*B+b*A}}},Symbol.toStringTag,{value:"Module"}))},78358:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t,e.typedBufferStride)}function o(e,t,r=4){const n=t.typedBuffer,o=t.typedBufferStride,s=t.count;let i=0,a=0;for(let t=0;t<s;++t)e[i]=n[a],e[i+1]=n[a+1],e[i+2]=n[a+2],e[i+3]=n[a+3],i+=r,a+=o}function s(e,t,r,n,o,s){const i=e.typedBuffer,a=e.typedBufferStride,c=s?.count??e.count;let u=(s?.dstIndex??0)*a;for(let e=0;e<c;++e)i[u]=t,i[u+1]=r,i[u+2]=n,i[u+3]=o,u+=a}r.d(t,{a:()=>o,c:()=>n,f:()=>s}),Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},4341:(e,t,r)=>{r.d(t,{I:()=>o});var n=r(26390);class o{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,n.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*s);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,s));e++)this._items.push(this._allocator())}}const s=1024},46140:(e,t,r)=>{r.d(t,{R:()=>o});var n=r(49186);let o=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}greaterEqual(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.A(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){const[o,s]=t.split("."),i=/^\s*\d+\s*$/;if(!o?.match||!i.test(o))throw new n.A((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!s?.match||!i.test(s))throw new n.A((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const a=parseInt(o,10),c=parseInt(s,10);return new e(a,c,r)}}},61473:(e,t,r)=>{function n(e){return e=e||globalThis.location.hostname,u.some((t=>null!=e?.match(t)))}function o(e,t){return e?(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(a)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(c)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e:null}r.d(t,{EM:()=>o,b5:()=>n});const s=/^devext\.arcgis\.com$/,i=/^qaext\.arcgis\.com$/,a=/^[\w-]*\.mapsdevext\.arcgis\.com$/,c=/^[\w-]*\.mapsqa\.arcgis\.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,s,i,/^jsapps\.esri\.com$/,a,c]},88340:(e,t,r)=>{function n(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function s(){return n()}function i(){return o(1,1)}function a(){return o(1,0)}function c(){return o(0,1)}r.d(t,{Un:()=>l,fA:()=>o,uY:()=>u,vt:()=>n});const u=s(),l=i(),f=a(),d=c();Object.freeze(Object.defineProperty({__proto__:null,ONES:l,UNIT_X:f,UNIT_Y:d,ZEROS:u,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},create:n,createView:function(e,t){return new Float32Array(e,t,2)},fromValues:o,ones:i,unitX:a,unitY:c,zeros:s},Symbol.toStringTag,{value:"Module"}))},71351:(e,t,r)=>{r.d(t,{C:()=>f,Cr:()=>d,LV:()=>l,kb:()=>m,oC:()=>h,vt:()=>c}),r(4576);var n=r(4341),o=(r(77690),r(29242)),s=r(38954),i=r(51850),a=r(32114);function c(e){return e?u((0,i.o8)(e.origin),(0,i.o8)(e.direction)):u((0,i.vt)(),(0,i.vt)())}function u(e,t){return{origin:e,direction:t}}function l(e,t){const r=p.get();return r.origin=e,r.direction=t,r}function f(e,t=c()){return function(e,t,r=c()){return(0,s.c)(r.origin,e),(0,s.c)(r.direction,t),r}(e.origin,e.direction,t)}function d(e,t,r=c()){return(0,s.c)(r.origin,e),(0,s.d)(r.direction,t,e),r}function m(e,t){const r=(0,s.e)(a.rq.get(),(0,s.n)(a.rq.get(),e.direction),(0,s.d)(a.rq.get(),t,e.origin));return(0,s.f)(r,r)}function h(e,t,r){const n=(0,s.f)(e.direction,(0,s.d)(r,t,e.origin));return(0,s.g)(r,e.origin,(0,s.h)(r,e.direction,n)),r}const p=new n.I((()=>c()));(0,i.vt)(),(0,i.vt)(),(0,i.vt)(),(0,o.vt)()},21015:(e,t,r)=>{r.d(t,{R:()=>c});var n=r(78888),o=r(60999),s=r(49186),i=r(74887),a=r(84952);class c{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,a.DB)(e)?((0,i.Te)(t),(0,a.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await(0,n.A)(t,{responseType:u[e]})).data;const a=await(0,o.Ke)(this._streamDataRequester.request(t,e,r));if(!0===a.ok)return a.value;throw(0,i.QP)(a.error),new s.A("glt-loader-request-error",`Request for resource failed: ${a.error}`)}}const u={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},84498:(e,t,r)=>{r.d(t,{x:()=>i});var n=r(34275),o=r(97146),s=r(63907);function i(e,t){switch(t){case s.WR.TRIANGLES:return"number"==typeof(r=e)?(0,o.tM)(r):(0,n.mg)(r)?new Uint16Array(r):r;case s.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.my)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1],n[t++]=e[o+2]):(n[t++]=e[o+1],n[t++]=e[o],n[t++]=e[o+2])}return n}(e);case s.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}const o=e[0];let s=e[1],i=0;for(let t=0;t<r;++t){const r=e[t+2];n[i++]=o,n[i++]=s,n[i++]=r,s=r}return n}(e)}var r}},51530:(e,t,r)=>{r.d(t,{KB:()=>a,Xi:()=>s,pn:()=>c,x3:()=>i});var n=r(44208),o=r(89192);class s{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.JS.KTX2_ENCODING}}function i(e){return"encoded-mesh-texture"===e?.type}async function a(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function c(e,t){if(t===o.JS.KTX2_ENCODING)return new s(e);const r=new Blob([e],{type:t}),i=URL.createObjectURL(r),a=new Image;if((0,n.A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(a)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(i),a.removeEventListener("load",r),a.removeEventListener("error",n)};a.addEventListener("load",r),a.addEventListener("error",n),a.src=i}));try{a.src=i,await a.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(i),a}},62909:(e,t,r)=>{r.d(t,{fetch:()=>ee});var n=r(61473),o=r(34727),s=r(77690),i=r(29242),a=r(58083),c=r(9093),u=r(48163),l=r(38954),f=r(51850),d=r(70328),m=r(11868),h=r(13030),p=r(73354),g=r(65686),y=r(43609),v=r(51737),b=r(78358),x=r(21015),w=r(84498),M=r(51530),T=r(88340);function S(e){if(null==e)return null;const t=null!=e.offset?e.offset:T.uY,r=null!=e.rotation?e.rotation:0,n=null!=e.scale?e.scale:T.Un,o=(0,i.fA)(1,0,0,0,1,0,t[0],t[1],1),a=(0,i.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),c=(0,i.fA)(n[0],0,0,0,n[1],0,0,0,1),u=(0,i.vt)();return(0,s.lw)(u,a,c),(0,s.lw)(u,o,u),u}class B{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class A{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new B,this.numberOfVertices=0}}var R=r(78888),_=r(60999),O=r(86805),P=r(49186),C=r(53966),E=r(81139),I=r(74887),U=r(46140),q=r(97146),N=r(99677),j=r(46610),F=r(89192),L=r(87170),k=r(76844),D=r(46540),V=r(11787),$=r(63907);const z=()=>C.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function H(e){throw new P.A("",`Request for object resource failed: ${e}`)}function G(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(z().warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(z().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(z().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(z().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else z().warn("Indexed geometries must specify faces"),n=!1;break}default:z().warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(z().warn("Geometry requires material"),n=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(z().warn("Geometries with externally defined attributes are not yet supported"),n=!1);return n}function X(e){const t=(0,d.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.iT)(t,r.bbMin),(0,d.iT)(t,r.bbMax))})),t}function W(e){switch(e){case"mask":return F.sf.Mask;case"maskAndTransparency":return F.sf.MaskBlend;case"none":return F.sf.Opaque;default:return F.sf.Blend}}function Y(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const J=new U.R(1,2,"wosr");var K=r(96336),Q=r(61765),Z=r(74810);async function ee(e,t){const i=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,n.EM)(e));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const n=await(0,_.Ke)(t.request(e,"json",r));if(!0===n.ok)return n.value;(0,I.QP)(n.error),H(n.error.details.url)}(e,r,t);const n=await(0,_.Ke)((0,R.A)(e,t));if(!0===n.ok)return n.value.data;(0,I.QP)(n.error),H(n.error)}(e,t),n=await async function(e,t){const r=new Array;for(const n in e){const o=e[n],s=o.images[0].data;if(!s){z().warn("Externally referenced texture data is not yet supported");continue}const i=o.encoding+";base64,"+s,a="/textureDefinitions/"+n,c="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:$.pF.REPEAT,t:$.pF.REPEAT},preMultiplyAlpha:W(c)!==F.sf.Opaque},l=t?.disableTextures?Promise.resolve(null):(0,N.D)(i,t);r.push(l.then((e=>({refId:a,image:e,parameters:u,alphaChannelUsage:c}))))}const n=await Promise.all(r),o={};for(const e of n)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in n)if(n.hasOwnProperty(e)){const t=n[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:n,size:o+(0,O.iL)(r)}}(i.url,t)),{engineResources:r,referenceBoundingBox:n}=function(e,t){const r=new Array,n=new Array,o=new Array,s=new E.O,i=e.resource,a=U.R.parse(i.version||"1.0","wosr");J.validate(a);const c=i.model.name,u=i.model.geometries,l=i.materialDefinitions??{},d=e.textures;let m=0;const h=new Map;for(let e=0;e<u.length;e++){const i=u[e];if(!G(i))continue;const a=Y(i),c=i.params.vertexAttributes,p=[],g=e=>{if("PerAttributeArray"===i.params.topology)return null;const t=i.params.faces;for(const r in t)if(r===e)return t[r].values;return null},y=c[D.r.POSITION],v=y.values.length/y.valuesPerElement;for(const e in c){const t=c[e],r=t.values,n=g(e)??(0,q.tM)(v);p.push([e,new j.n(r,n,t.valuesPerElement,!0)])}const b=a.texture,x=d&&d[b];if(x&&!h.has(b)){const{image:e,parameters:t}=x,r=new k.g(e,t);n.push(r),h.set(b,r)}const w=h.get(b),M=w?w.id:void 0,T=a.material;let S=s.get(T,b);if(null==S){const e=l[T.slice(T.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=x?W(x.alphaChannelUsage):void 0,i={ambient:(0,f.ci)(e.diffuse),diffuse:(0,f.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:M,initTextureTransparent:!0,doubleSided:!0,cullFace:F.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:x?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(i,t.materialParameters),S=new V.$U(i,t),s.set(T,b,S)}o.push(S);const B=new L.V(S,p);m+=p.find((e=>e[0]===D.r.POSITION))?.[1]?.indices.length??0,r.push(B)}return{engineResources:[{name:c,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:i.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:X(r)}}(e,t);return{lods:r,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}let T;if(t.cache)T=await t.cache.loadGLTF(i.url,t,!!t.usePBR);else{const{loadGLTF:e}=await r.e(4399).then(r.bind(r,4399));T=await e(new x.R(t.streamDataRequester),i.url,t,t.usePBR)}const B=T.model.meta?.ESRI_proxyEllipsoid,P=T.meta.isEsriSymbolResource&&null!=B&&"EsriRealisticTreesStyle"===T.meta.ESRI_webstyle;P&&!T.customMeta.esriTreeRendering&&(T.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const n=e.model.lods[r];for(const o of n.parts){const n=o.attributes.normal;if(null==n)return;const s=o.attributes.position,i=s.count,u=(0,f.vt)(),d=(0,f.vt)(),m=(0,f.vt)(),p=new Uint8Array(4*i),g=new Float64Array(3*i),y=(0,a.B8)((0,c.vt)(),o.transform);let v=0,b=0;for(let a=0;a<i;a++){s.getVec(a,d),n.getVec(a,u),(0,l.t)(d,d,o.transform),(0,l.d)(m,d,t.center),(0,l.E)(m,m,t.radius);const i=m[2],c=(0,l.l)(m),f=Math.min(.45+.55*c*c,1);(0,l.E)(m,m,t.radius),null!==y&&(0,l.t)(m,m,y),(0,l.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.m)(m,m,u,i>-1?.2:Math.min(-4*i-3.8,1)),g[v]=m[0],g[v+1]=m[1],g[v+2]=m[2],v+=3,p[b]=255*f,p[b+1]=255*f,p[b+2]=255*f,p[b+3]=255,b+=4}o.attributes.normal=new h.xs(g),o.attributes.color=new h.XP(p)}}}(T,B));const C=!!t.usePBR,ee=T.meta.isEsriSymbolResource?{usePBR:C,isSchematic:!1,treeRendering:P,mrrFactors:Z.SY}:{usePBR:C,isSchematic:!1,treeRendering:!1,mrrFactors:Z.mb},re={...t.materialParameters,treeRendering:P},{engineResources:ne,referenceBoundingBox:oe}=function(e,t,r,n,i){const a=e.model,c=new Array,l=new Map,f=new Map,x=a.lods.length,T=(0,d.Ie)();return a.lods.forEach(((e,B)=>{const R=!0===n.skipHighLods&&(x>1&&0===B||x>3&&1===B)||!1===n.skipHighLods&&null!=i&&B!==i;if(R&&0!==B)return;const _=new A(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=R?new V.$U({},n):function(e,t,r,n,o,s,i,a){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),f=null!=t.attributes.texCoord0,d=null!=t.attributes.normal;if(null==l)return null;const m=function(e){switch(e){case"BLEND":return F.sf.Blend;case"MASK":return F.sf.Mask;case"OPAQUE":case null:case void 0:return F.sf.Opaque}}(l.alphaMode);if(!s.has(c)){if(f){const t=(t,r=!1)=>{if(null!=t&&!i.has(t)){const n=e.textures.get(t);if(null!=n){const e=n.data;i.set(t,new k.g((0,M.x3)(e)?e.data:e,{...n.parameters,preMultiplyAlpha:!(0,M.x3)(e)&&r,encoding:(0,M.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,m!==F.sf.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/Q.T),h=l.color[1]**(1/Q.T),p=l.color[2]**(1/Q.T),g=l.emissiveFactor[0]**(1/Q.T),y=l.emissiveFactor[1]**(1/Q.T),v=l.emissiveFactor[2]**(1/Q.T),b=null!=l.textureColor&&f?i.get(l.textureColor):null,x=(0,Z.Jr)({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),w=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:u.Un;s.set(c,new V.$U({...n,transparent:m===F.sf.Blend,customDepthTest:F.it.Lequal,textureAlphaMode:m,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,h,p],ambient:[r,h,p],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?F.s2.None:F.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?K.W.Attribute:K.W.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=b?b.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&f?i.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=b&&!!b.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&f?i.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&f?i.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&f?i.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[g,y,v],mrrFactors:x?Z.Bt:[l.metallicFactor,l.roughnessFactor,n.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:S(l.colorTextureTransform),normalTextureTransformMatrix:S(l.normalTextureTransform),scale:[w[0],w[1]],occlusionTextureTransformMatrix:S(l.occlusionTextureTransform),emissiveTextureTransformMatrix:S(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(l.metallicRoughnessTextureTransform),...o},a))}const h=s.get(c);if(r.stageResources.materials.push(h),f){const e=e=>{null!=e&&r.stageResources.textures.push(i.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return h}(a,e,_,t,r,l,f,n),{geometry:c,vertexCount:x}=function(e,t){const r=e.attributes.position.count,n=(0,w.x)(e.indices||r,e.primitiveType),i=(0,m.oe)(3*r),{typedBuffer:a,typedBufferStride:c}=e.attributes.position;(0,p.t)(i,a,e.transform,3,c);const u=[[D.r.POSITION,new j.n(i,n,3,!0)]];if(null!=e.attributes.normal){const t=(0,m.oe)(3*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.normal;(0,s.Ge)(te,e.transform),(0,p.b)(t,i,te,3,a),(0,o.or)(te)&&(0,p.n)(t,t),u.push([D.r.NORMAL,new j.n(t,n,3,!0)])}if(null!=e.attributes.tangent){const t=(0,m.oe)(4*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.tangent;(0,s.z0)(te,e.transform),(0,g.t)(t,i,te,4,a),(0,o.or)(te)&&(0,p.n)(t,t,4),u.push([D.r.TANGENT,new j.n(t,n,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,m.oe)(2*r),{typedBuffer:o,typedBufferStride:s}=e.attributes.texCoord0;(0,y.a)(t,o,2,s),u.push([D.r.UV0,new j.n(t,n,2,!0)])}const l=e.attributes.color;if(null!=l){const t=new Uint8Array(4*r);4===l.elementCount?l instanceof h.Eq?(0,g.b)(t,l,255):l instanceof h.XP?(0,b.a)(t,l):l instanceof h.Uz&&(0,g.b)(t,l,1/256):(t.fill(255),l instanceof h.xs?(0,p.f)(t,l.typedBuffer,255,4,l.typedBufferStride):e.attributes.color instanceof h.eI?(0,v.c)(t,l.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof h.nS&&(0,p.f)(t,l.typedBuffer,1/256,4,l.typedBufferStride)),u.push([D.r.COLOR,new j.n(t,n,4,!0)])}return{geometry:new L.V(t,u),vertexCount:r}}(e,i??new V.$U({},n)),A=c.boundingInfo;null!=A&&0===B&&((0,d.iT)(T,A.bbMin),(0,d.iT)(T,A.bbMax)),null!=i&&(_.stageResources.geometries.push(c),_.numberOfVertices+=x)})),R||c.push(_)})),{engineResources:c,referenceBoundingBox:T}}(T,ee,re,t,i.specifiedLodIndex);return{lods:ne,referenceBoundingBox:oe,isEsriSymbolResource:T.meta.isEsriSymbolResource,isWosr:!1}}const te=(0,i.vt)()},66104:(e,t,r)=>{var n,o;r.d(t,{k5:()=>n}),r(34727),(o=n||(n={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},42583:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(66104),o=r(2597);function s(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(n.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(n.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(n.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(n.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},49255:(e,t,r)=>{var n;function o(e){return e===n.Shadow||e===n.ShadowHighlight||e===n.ShadowExcludeHighlight||e===n.ViewshedShadow}function s(e){return function(e){return l(e)||f(e)}(e)||e===n.Normal}function i(e){return function(e){return function(e){return u(e)||a(e)}(e)||f(e)}(e)||e===n.Normal}function a(e){return e===n.Highlight||e===n.ObjectAndLayerIdColor}function c(e){return e===n.Color}function u(e){return c(e)||d(e)}function l(e){return c(e)||a(e)}function f(e){return e===n.Depth}function d(e){return e===n.ColorEmission}r.d(t,{LG:()=>d,PJ:()=>o,RN:()=>u,V:()=>n,XY:()=>s,dX:()=>l,iq:()=>i}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(n||(n={}))},96336:(e,t,r)=>{r.d(t,{W:()=>n,Y:()=>c});var n,o,s=r(21818),i=r(2597),a=r(46540);function c(e,t){switch(t.normalType){case n.Compressed:e.attributes.add(a.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(a.r.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,s.Xb)(t.normalType);case n.COUNT:}}(o=n||(n={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.ScreenDerivative=2]="ScreenDerivative",o[o.COUNT=3]="COUNT"},26425:(e,t,r)=>{r.d(t,{u:()=>o});var n=r(2597);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},40710:(e,t,r)=>{r.d(t,{W:()=>s});var n=r(39589),o=r(46263);class s extends n.n{constructor(e,t){super(e,"vec3",o.c.Draw,((r,n,o,s)=>r.setUniform3fv(e,t(n,o,s))))}}},33079:(e,t,r)=>{r.d(t,{t:()=>s});var n=r(39589),o=r(46263);class s extends n.n{constructor(e,t){super(e,"vec3",o.c.Pass,((r,n,o)=>r.setUniform3fv(e,t(n,o))))}}},20304:(e,t,r)=>{r.d(t,{m:()=>s});var n=r(39589),o=r(46263);class s extends n.n{constructor(e,t){super(e,"float",o.c.Pass,((r,n,o)=>r.setUniform1f(e,t(n,o))))}}},98353:(e,t,r)=>{r.d(t,{h:()=>s});var n=r(39589),o=r(46263);class s extends n.n{constructor(e,t){super(e,"mat3",o.c.Draw,((r,n,o)=>r.setUniformMatrix3fv(e,t(n,o))))}}},35644:(e,t,r)=>{r.d(t,{k:()=>s});var n=r(39589),o=r(46263);class s extends n.n{constructor(e,t){super(e,"mat3",o.c.Pass,((r,n,o)=>r.setUniformMatrix3fv(e,t(n,o))))}}},40095:(e,t,r)=>{r.d(t,{X:()=>s});var n=r(39589),o=r(46263);class s extends n.n{constructor(e,t){super(e,"mat4",o.c.Pass,((r,n,o)=>r.setUniformMatrix4fv(e,t(n,o))))}}},15976:(e,t,r)=>{r.d(t,{o:()=>s});var n=r(39589),o=r(46263);class s extends n.n{constructor(e,t){super(e,"sampler2D",o.c.Draw,((r,n,o)=>r.bindTexture(e,t(n,o))))}}},39589:(e,t,r)=>{r.d(t,{n:()=>o});var n=r(46263);class o{constructor(e,t,r,o,s=null){if(this.name=e,this.type=t,this.arraySize=s,this.bind={[n.c.Pass]:null,[n.c.Draw]:null},o)switch(r){case n.c.Pass:this.bind[n.c.Pass]=o;break;case n.c.Draw:this.bind[n.c.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},2597:(e,t,r)=>{r.d(t,{H:()=>o,If:()=>s,Y:()=>n});const n=class{};function o(e,...t){let r="";for(let n=0;n<t.length;n++)r+=e[n]+t[n];return r+=e[e.length-1],r}function s(e,t,r=""){return e?t:r}var i;(i=o||(o={})).int=function(e){return Math.round(e).toString()},i.float=function(e){return e.toPrecision(8)}},46263:(e,t,r)=>{var n;r.d(t,{c:()=>n}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(n||(n={}))},16943:(e,t,r)=>{r.d(t,{E:()=>o});var n=r(44208);function o(){return!!(0,n.A)("enable-feature:objectAndLayerId-rendering")}},61765:(e,t,r)=>{r.d(t,{T:()=>n});const n=2.1}}]);