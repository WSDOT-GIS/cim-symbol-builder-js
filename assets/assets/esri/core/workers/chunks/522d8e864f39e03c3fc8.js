"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3027],{32321:(t,n,e)=>{e.d(n,{d:()=>l});var r=e(22021),a={};a.defaultNoDataValue=(0,r.oK)(-1/0),a.decode=function(t,n){var e=(n=n||{}).encodedMaskData||null===n.encodedMaskData,c=s(t,n.inputOffset||0,e),l=null!=n.noDataValue?(0,r.oK)(n.noDataValue):a.defaultNoDataValue,f=i(c,n.pixelType||Float32Array,n.encodedMaskData,l,n.returnMask),h={width:c.width,height:c.height,pixelData:f.resultPixels,minValue:c.pixels.minValue,maxValue:c.pixels.maxValue,noDataValue:l};return f.resultMask&&(h.maskData=f.resultMask),n.returnEncodedMask&&c.mask&&(h.encodedMaskData=c.mask.bitset?c.mask.bitset:null),n.returnFileInfo&&(h.fileInfo=o(c,l),n.computeUsedBitDepths&&(h.fileInfo.bitDepths=u(c))),h};var i=function(t,n,e,r,a){var i,o,u=0,s=t.pixels.numBlocksX,l=t.pixels.numBlocksY,f=Math.floor(t.width/s),h=Math.floor(t.height/l),m=2*t.maxZError;e=e||(t.mask?t.mask.bitset:null),i=new n(t.width*t.height),a&&e&&(o=new Uint8Array(t.width*t.height));for(var d,M,g=new Float32Array(f*h),x=0;x<=l;x++){var k=x!==l?h:t.height%l;if(0!==k)for(var p=0;p<=s;p++){var b=p!==s?f:t.width%s;if(0!==b){var w,v,y,V,B=x*t.width*h+p*f,D=t.width-b,U=t.pixels.blocks[u];if(U.encoding<2?(0===U.encoding?w=U.rawData:(c(U.stuffedData,U.bitsPerPixel,U.numValidPixels,U.offset,m,g,t.pixels.maxValue),w=g),v=0):y=2===U.encoding?0:U.offset,e)for(M=0;M<k;M++){for(7&B&&(V=e[B>>3],V<<=7&B),d=0;d<b;d++)7&B||(V=e[B>>3]),128&V?(o&&(o[B]=1),i[B++]=U.encoding<2?w[v++]:y):(o&&(o[B]=0),i[B++]=r),V<<=1;B+=D}else if(U.encoding<2)for(M=0;M<k;M++){for(d=0;d<b;d++)i[B++]=w[v++];B+=D}else for(M=0;M<k;M++)if(i.fill)i.fill(y,B,B+b),B+=b+D;else{for(d=0;d<b;d++)i[B++]=y;B+=D}if(1===U.encoding&&v!==U.numValidPixels)throw"Block and Mask do not match";u++}}}return{resultPixels:i,resultMask:o}},o=function(t,n){return{fileIdentifierString:t.fileIdentifierString,fileVersion:t.fileVersion,imageType:t.imageType,height:t.height,width:t.width,maxZError:t.maxZError,eofOffset:t.eofOffset,mask:t.mask?{numBlocksX:t.mask.numBlocksX,numBlocksY:t.mask.numBlocksY,numBytes:t.mask.numBytes,maxValue:t.mask.maxValue}:null,pixels:{numBlocksX:t.pixels.numBlocksX,numBlocksY:t.pixels.numBlocksY,numBytes:t.pixels.numBytes,maxValue:t.pixels.maxValue,minValue:t.pixels.minValue,noDataValue:n}}},u=function(t){for(var n=t.pixels.numBlocksX*t.pixels.numBlocksY,e={},r=0;r<n;r++){var a=t.pixels.blocks[r];0===a.encoding?e.float32=!0:1===a.encoding?e[a.bitsPerPixel]=!0:e[0]=!0}return Object.keys(e)},s=function(t,n,e){var r={},a=new Uint8Array(t,n,10);if(r.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=r.fileIdentifierString.trim())throw"Unexpected file identifier string: "+r.fileIdentifierString;n+=10;var i=new DataView(t,n,24);if(r.fileVersion=i.getInt32(0,!0),r.imageType=i.getInt32(4,!0),r.height=i.getUint32(8,!0),r.width=i.getUint32(12,!0),r.maxZError=i.getFloat64(16,!0),n+=24,!e)if(i=new DataView(t,n,16),r.mask={},r.mask.numBlocksY=i.getUint32(0,!0),r.mask.numBlocksX=i.getUint32(4,!0),r.mask.numBytes=i.getUint32(8,!0),r.mask.maxValue=i.getFloat32(12,!0),n+=16,r.mask.numBytes>0){var o=new Uint8Array(Math.ceil(r.width*r.height/8)),u=(i=new DataView(t,n,r.mask.numBytes)).getInt16(0,!0),s=2,c=0;do{if(u>0)for(;u--;)o[c++]=i.getUint8(s++);else{var l=i.getUint8(s++);for(u=-u;u--;)o[c++]=l}u=i.getInt16(s,!0),s+=2}while(s<r.mask.numBytes);if(-32768!==u||c<o.length)throw"Unexpected end of mask RLE encoding";r.mask.bitset=o,n+=r.mask.numBytes}else 0==(r.mask.numBytes|r.mask.numBlocksY|r.mask.maxValue)&&(o=new Uint8Array(Math.ceil(r.width*r.height/8)),r.mask.bitset=o);i=new DataView(t,n,16),r.pixels={},r.pixels.numBlocksY=i.getUint32(0,!0),r.pixels.numBlocksX=i.getUint32(4,!0),r.pixels.numBytes=i.getUint32(8,!0),r.pixels.maxValue=i.getFloat32(12,!0),n+=16;var f=r.pixels.numBlocksX,h=r.pixels.numBlocksY,m=f+(r.width%f>0?1:0),d=h+(r.height%h>0?1:0);r.pixels.blocks=new Array(m*d);for(var M=1e9,g=0,x=0;x<d;x++)for(var k=0;k<m;k++){var p=0,b=t.byteLength-n;i=new DataView(t,n,Math.min(10,b));var w={};r.pixels.blocks[g++]=w;var v=i.getUint8(0);if(p++,w.encoding=63&v,w.encoding>3)throw"Invalid block encoding ("+w.encoding+")";if(2!==w.encoding){if(0!==v&&2!==v){if(v>>=6,w.offsetType=v,2===v)w.offset=i.getInt8(1),p++;else if(1===v)w.offset=i.getInt16(1,!0),p+=2;else{if(0!==v)throw"Invalid block offset type";w.offset=i.getFloat32(1,!0),p+=4}if(M=Math.min(w.offset,M),1===w.encoding)if(v=i.getUint8(p),p++,w.bitsPerPixel=63&v,v>>=6,w.numValidPixelsType=v,2===v)w.numValidPixels=i.getUint8(p),p++;else if(1===v)w.numValidPixels=i.getUint16(p,!0),p+=2;else{if(0!==v)throw"Invalid valid pixel count type";w.numValidPixels=i.getUint32(p,!0),p+=4}}var y;if(n+=p,3!=w.encoding)if(0===w.encoding){var V=(r.pixels.numBytes-1)/4;if(V!==Math.floor(V))throw"uncompressed block has invalid length";y=new ArrayBuffer(4*V),new Uint8Array(y).set(new Uint8Array(t,n,4*V));for(var B=new Float32Array(y),D=0;D<B.length;D++)M=Math.min(M,B[D]);w.rawData=B,n+=4*V}else if(1===w.encoding){var U=Math.ceil(w.numValidPixels*w.bitsPerPixel/8),I=Math.ceil(U/4);y=new ArrayBuffer(4*I),new Uint8Array(y).set(new Uint8Array(t,n,U)),w.stuffedData=new Uint32Array(y),n+=U}}else n++,M=Math.min(M,0)}return r.pixels.minValue=M,r.eofOffset=n,r},c=function(t,n,e,r,a,i,o){var u,s,c,l=(1<<n)-1,f=0,h=0,m=Math.ceil((o-r)/a),d=4*t.length-Math.ceil(n*e/8);for(t[t.length-1]<<=8*d,u=0;u<e;u++){if(0===h&&(c=t[f++],h=32),h>=n)s=c>>>h-n&l,h-=n;else{var M=n-h;s=(c&l)<<M&l,s+=(c=t[f++])>>>(h=32-M)}i[u]=s<m?r+s*a:o}return i};const l=a.decode},46851:(t,n,e)=>{e.d(n,{E:()=>r,R:()=>a});const r=1e-6,a=Math.random,i=Math.PI/180,o=180/Math.PI;Object.freeze({__proto__:null,EPSILON:r,RANDOM:a,toRadian:function(t){return t*i},toDegree:function(t){return t*o},equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))}})},17896:(t,n,e)=>{e.d(n,{E:()=>f,a:()=>h,b:()=>s,c:()=>k,d:()=>x,e:()=>p,f:()=>c,g:()=>o,h:()=>d,i:()=>m,k:()=>B,l:()=>i,m:()=>b,n:()=>g,p:()=>M,q:()=>v,r:()=>D,s:()=>u,t:()=>w,u:()=>E,w:()=>U});var r=e(65617),a=e(46851);function i(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function u(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function s(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function c(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function l(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function f(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function h(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function m(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2];return Math.sqrt(e*e+r*r+a*a)}function d(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2];return e*e+r*r+a*a}function M(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function g(t,n){const e=n[0],r=n[1],a=n[2];let i=e*e+r*r+a*a;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function x(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function k(t,n,e){const r=n[0],a=n[1],i=n[2],o=e[0],u=e[1],s=e[2];return t[0]=a*s-i*u,t[1]=i*o-r*s,t[2]=r*u-a*o,t}function p(t,n,e,r){const a=n[0],i=n[1],o=n[2];return t[0]=a+r*(e[0]-a),t[1]=i+r*(e[1]-i),t[2]=o+r*(e[2]-o),t}function b(t,n,e){const r=n[0],a=n[1],i=n[2];return t[0]=e[0]*r+e[4]*a+e[8]*i+e[12],t[1]=e[1]*r+e[5]*a+e[9]*i+e[13],t[2]=e[2]*r+e[6]*a+e[10]*i+e[14],t}function w(t,n,e){const r=n[0],a=n[1],i=n[2];return t[0]=r*e[0]+a*e[3]+i*e[6],t[1]=r*e[1]+a*e[4]+i*e[7],t[2]=r*e[2]+a*e[5]+i*e[8],t}function v(t,n,e){const r=e[0],a=e[1],i=e[2],o=e[3],u=n[0],s=n[1],c=n[2];let l=a*c-i*s,f=i*u-r*c,h=r*s-a*u,m=a*h-i*f,d=i*l-r*h,M=r*f-a*l;const g=2*o;return l*=g,f*=g,h*=g,m*=2,d*=2,M*=2,t[0]=u+l+m,t[1]=s+f+d,t[2]=c+h+M,t}const y=(0,r.c)(),V=(0,r.c)();function B(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function D(t,n,e){const r=e[0]-n[0],a=e[1]-n[1],i=e[2]-n[2];let o=r*r+a*a+i*i;return o>0?(o=1/Math.sqrt(o),t[0]=r*o,t[1]=a*o,t[2]=i*o,t):(t[0]=0,t[1]=0,t[2]=0,t)}const U=c,I=l,P=f,q=m,A=d,E=i,_=M;Object.freeze({__proto__:null,length:i,copy:o,set:u,add:s,subtract:c,multiply:l,divide:f,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:h,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t},distance:m,squaredDistance:d,squaredLength:M,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:g,dot:x,cross:k,lerp:p,hermite:function(t,n,e,r,a,i){const o=i*i,u=o*(2*i-3)+1,s=o*(i-2)+i,c=o*(i-1),l=o*(3-2*i);return t[0]=n[0]*u+e[0]*s+r[0]*c+a[0]*l,t[1]=n[1]*u+e[1]*s+r[1]*c+a[1]*l,t[2]=n[2]*u+e[2]*s+r[2]*c+a[2]*l,t},bezier:function(t,n,e,r,a,i){const o=1-i,u=o*o,s=i*i,c=u*o,l=3*i*u,f=3*s*o,h=s*i;return t[0]=n[0]*c+e[0]*l+r[0]*f+a[0]*h,t[1]=n[1]*c+e[1]*l+r[1]*f+a[1]*h,t[2]=n[2]*c+e[2]*l+r[2]*f+a[2]*h,t},random:function(t,n){n=n||1;const e=2*(0,a.R)()*Math.PI,r=2*(0,a.R)()-1,i=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(e)*i,t[1]=Math.sin(e)*i,t[2]=r*n,t},transformMat4:b,transformMat3:w,transformQuat:v,rotateX:function(t,n,e,r){const a=[],i=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],i[0]=a[0],i[1]=a[1]*Math.cos(r)-a[2]*Math.sin(r),i[2]=a[1]*Math.sin(r)+a[2]*Math.cos(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,r){const a=[],i=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],i[0]=a[2]*Math.sin(r)+a[0]*Math.cos(r),i[1]=a[1],i[2]=a[2]*Math.cos(r)-a[0]*Math.sin(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,r){const a=[],i=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],i[0]=a[0]*Math.cos(r)-a[1]*Math.sin(r),i[1]=a[0]*Math.sin(r)+a[1]*Math.cos(r),i[2]=a[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},angle:function(t,n){o(y,t),o(V,n),g(y,y),g(V,V);const e=x(y,V);return e>1?0:e<-1?Math.PI:Math.acos(e)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:B,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],i=t[2],o=n[0],u=n[1],s=n[2];return Math.abs(e-o)<=a.E*Math.max(1,Math.abs(e),Math.abs(o))&&Math.abs(r-u)<=a.E*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-s)<=a.E*Math.max(1,Math.abs(i),Math.abs(s))},direction:D,sub:U,mul:I,div:P,dist:q,sqrDist:A,len:E,sqrLen:_})},65617:(t,n,e)=>{function r(){return[0,0,0]}function a(t){return[t[0],t[1],t[2]]}function i(t,n,e){return[t,n,e]}function o(t){const n=[0,0,0],e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function u(t,n){return new Float64Array(t,n,3)}function s(){return i(1,1,1)}function c(){return i(1,0,0)}function l(){return i(0,1,0)}function f(){return i(0,0,1)}e.d(n,{O:()=>m,Z:()=>h,a:()=>a,b:()=>u,c:()=>r,d:()=>o,f:()=>i});const h=[0,0,0],m=s(),d=c(),M=l(),g=f();Object.freeze({__proto__:null,create:r,clone:a,fromValues:i,fromArray:o,createView:u,zeros:function(){return[0,0,0]},ones:s,unitX:c,unitY:l,unitZ:f,ZEROS:h,ONES:m,UNIT_X:d,UNIT_Y:M,UNIT_Z:g})},98766:(t,n,e)=>{e.d(n,{a:()=>o,b:()=>l,c:()=>a,d:()=>g,e:()=>m,f:()=>d,g:()=>p,h:()=>b,l:()=>x,n:()=>M,s:()=>i,t:()=>k});var r=e(46851);function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n,e,r,a){return t[0]=n,t[1]=e,t[2]=r,t[3]=a,t}function o(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t}function u(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function s(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function c(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function l(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t}function f(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2],i=n[3]-t[3];return Math.sqrt(e*e+r*r+a*a+i*i)}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2],i=n[3]-t[3];return e*e+r*r+a*a+i*i}function m(t){const n=t[0],e=t[1],r=t[2],a=t[3];return Math.sqrt(n*n+e*e+r*r+a*a)}function d(t){const n=t[0],e=t[1],r=t[2],a=t[3];return n*n+e*e+r*r+a*a}function M(t,n){const e=n[0],r=n[1],a=n[2],i=n[3];let o=e*e+r*r+a*a+i*i;return o>0&&(o=1/Math.sqrt(o),t[0]=e*o,t[1]=r*o,t[2]=a*o,t[3]=i*o),t}function g(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function x(t,n,e,r){const a=n[0],i=n[1],o=n[2],u=n[3];return t[0]=a+r*(e[0]-a),t[1]=i+r*(e[1]-i),t[2]=o+r*(e[2]-o),t[3]=u+r*(e[3]-u),t}function k(t,n,e){const r=n[0],a=n[1],i=n[2],o=n[3];return t[0]=e[0]*r+e[4]*a+e[8]*i+e[12]*o,t[1]=e[1]*r+e[5]*a+e[9]*i+e[13]*o,t[2]=e[2]*r+e[6]*a+e[10]*i+e[14]*o,t[3]=e[3]*r+e[7]*a+e[11]*i+e[15]*o,t}function p(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function b(t,n){const e=t[0],a=t[1],i=t[2],o=t[3],u=n[0],s=n[1],c=n[2],l=n[3];return Math.abs(e-u)<=r.E*Math.max(1,Math.abs(e),Math.abs(u))&&Math.abs(a-s)<=r.E*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(i-c)<=r.E*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-l)<=r.E*Math.max(1,Math.abs(o),Math.abs(l))}const w=u,v=s,y=c,V=f,B=h,D=m,U=d;Object.freeze({__proto__:null,copy:a,set:i,add:o,subtract:u,multiply:s,divide:c,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:l,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t},distance:f,squaredDistance:h,length:m,squaredLength:d,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:M,dot:g,lerp:x,random:function(t,n){let e,a,i,o,u,s;n=n||1;do{e=2*(0,r.R)()-1,a=2*(0,r.R)()-1,u=e*e+a*a}while(u>=1);do{i=2*(0,r.R)()-1,o=2*(0,r.R)()-1,s=i*i+o*o}while(s>=1);const c=Math.sqrt((1-u)/s);return t[0]=n*e,t[1]=n*a,t[2]=n*i*c,t[3]=n*o*c,t},transformMat4:k,transformQuat:function(t,n,e){const r=n[0],a=n[1],i=n[2],o=e[0],u=e[1],s=e[2],c=e[3],l=c*r+u*i-s*a,f=c*a+s*r-o*i,h=c*i+o*a-u*r,m=-o*r-u*a-s*i;return t[0]=l*c+m*-o+f*-s-h*-u,t[1]=f*c+m*-u+h*-o-l*-s,t[2]=h*c+m*-s+l*-u-f*-o,t[3]=n[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:p,equals:b,sub:w,mul:v,div:y,dist:V,sqrDist:B,len:D,sqrLen:U})},22021:(t,n,e)=>{e.d(n,{ZF:()=>h,Kt:()=>m,jE:()=>g,uZ:()=>o,oK:()=>d,Vl:()=>l,wt:()=>u,t7:()=>c,Sf:()=>i,fp:()=>s,BV:()=>f});var r=e(17896);e(98766);const a=new Float32Array(1);function i(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function o(t,n,e){return Math.min(Math.max(t,n),e)}function u(t){return 0==(t&t-1)}function s(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}function c(t,n,e){return t+(n-t)*e}function l(t){return t*Math.PI/180}function f(t){return 180*t/Math.PI}function h(t){return Math.acos(o(t,-1,1))}function m(t){return Math.asin(o(t,-1,1))}function d(t){return M(Math.max(-x,Math.min(t,x)))}function M(t){return a[0]=t,a[0]}function g(t,n){const e=(0,r.l)(t),a=m(t[2]/e),i=Math.atan2(t[1]/e,t[0]/e);return(0,r.s)(n,e,a,i),n}const x=M(34028234663852886e22)},23027:(t,n,e)=>{e.r(n),e.d(n,{default:()=>i});var r=e(32321);class a{_decode(t){const n=(0,r.d)(t.buffer,t.options);return Promise.resolve({result:n,transferList:[n.pixelData.buffer]})}}function i(){return new a}}}]);