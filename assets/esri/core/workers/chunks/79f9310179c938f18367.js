"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7136],{17136:(e,t,n)=>{n.d(t,{el:()=>S});var s=n(92602),r=n(49186),o=n(53966),i=n(39829),c=n(82799),f=n(80754),u=n(21325),l=n(28735),a=(n(59456),n(78888)),p=n(65864),h=n(2272),g=n(84952),y=n(92300);const m=()=>o.A.getLogger("esri.geometry.support.normalizeUtils");function d(e){return"polygon"===e[0].type}function A(e){return"polyline"===e[0].type}function x(e,t,n){if(t){const t=function(e,t){if(!(e instanceof c.A||e instanceof i.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(e),new r.A(e)}const n=(0,f.r8)(e),s=[];for(const e of n){const n=[];s.push(n),n.push([e[0][0],e[0][1]]);for(let s=0;s<e.length-1;s++){const r=e[s][0],o=e[s][1],i=e[s+1][0],c=e[s+1][1],f=Math.sqrt((i-r)*(i-r)+(c-o)*(c-o)),u=(c-o)/f,l=(i-r)/f,a=f/t;if(a>1){for(let e=1;e<=a-1;e++){const s=e*t,i=l*s+r,c=u*s+o;n.push([i,c])}const e=(f+Math.floor(a-1)*t)/2,s=l*e+r,i=u*e+o;n.push([s,i])}n.push([i,c])}}return function(e){return"polygon"===e.type}(e)?new i.A({rings:s,spatialReference:e.spatialReference}):new c.A({paths:s,spatialReference:e.spatialReference})}(e,1e6);e=(0,l.ci)(t,!0)}return n&&(e=(0,f.kS)(e,n)),e}function w(e,t,n){if(Array.isArray(e)){const s=e[0];if(s>t){const n=(0,f.kd)(s,t);e[0]=s+n*(-2*t)}else if(s<n){const t=(0,f.kd)(s,n);e[0]=s+t*(-2*n)}}else{const s=e.x;if(s>t){const n=(0,f.kd)(s,t);e=e.clone().offset(n*(-2*t),0)}else if(s<n){const t=(0,f.kd)(s,n);e=e.clone().offset(t*(-2*n),0)}}return e}function R(e,t){let n=-1;for(let s=0;s<t.cutIndexes.length;s++){const r=t.cutIndexes[s],o=t.geometries[s],i=(0,f.r8)(o);for(let e=0;e<i.length;e++){const t=i[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const s=t[e][0];n=s>n?s:n}n=Number(n.toFixed(9));const s=-360*(0,f.kd)(n,180);for(let n=0;n<t.length;n++){const t=o.getPoint(e,n);o.setPoint(e,n,t.clone().offset(s,0))}return!0}}))}if(r===n){if(d(e))for(const t of(0,f.r8)(o))e[r]=e[r].addRing(t);else if(A(e))for(const t of(0,f.r8)(o))e[r]=e[r].addPath(t)}else n=r,e[r]=o}return e}async function S(e,t,n){if(!Array.isArray(e))return S([e],t);t&&"string"!=typeof t&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const r="string"==typeof t?t:t?.url??s.A.geometryServiceUrl;let o,d,A,k,N,j,b,X,J=0;const O=[],q=[];for(const t of e)if(null!=t)if(o||(o=t.spatialReference,d=(0,u.Vp)(o),A=o.isWebMercator,j=A?102100:4326,k=f.j7[j].maxX,N=f.j7[j].minX,b=f.j7[j].plus180Line,X=f.j7[j].minus180Line),d)if("mesh"===t.type)q.push(t);else if("point"===t.type)q.push(w(t.clone(),k,N));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>w(e,k,N))),q.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,d);q.push(e.rings?new i.A(e):e)}else if(t.extent){const e=t.extent,n=(0,f.kd)(e.xmin,N)*(2*k);let s=0===n?t.clone():(0,f.kS)(t.clone(),n);e.offset(n,0);let{xmin:r,xmax:o}=e;r=Number(r.toFixed(9)),o=Number(o.toFixed(9)),e.intersects(b)&&o!==k?(J=o>J?o:J,s=x(s,A),O.push(s),q.push("cut")):e.intersects(X)&&r!==N?(J=o*(2*k)>J?o*(2*k):J,s=x(s,A,360),O.push(s),q.push("cut")):q.push(s)}else q.push(t.clone());else q.push(t);else q.push(t);let L=(0,f.kd)(J,k),M=-90;const C=L,v=new c.A;for(;L>0;){const e=360*L-180;v.addPath([[e,M],[e,-1*M]]),M*=-1,L--}if(O.length>0&&C>0){const t=R(O,await async function(e,t,n,s){const r=(0,h.Dl)(e),o=t[0].spatialReference,i={...s,responseType:"json",query:{...r.query,f:"json",sr:(0,u.YX)(o),target:JSON.stringify({geometryType:(0,p.$B)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},c=await(0,a.A)(r.path+"/cut",i),{cutIndexes:f,geometries:l=[]}=c.data;return{cutIndexes:f,geometries:l.map((e=>{const t=(0,p.rS)(e);return t.spatialReference=o,t}))}}(r,O,v,n)),s=[],o=[];for(let n=0;n<q.length;n++){const r=q[n];if("cut"!==r)o.push(r);else{const r=t.shift(),i=e[n];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&r.rings.length>=i.rings.length?(s.push(r),o.push("simplify")):o.push(A?(0,l.Gh)(r):r)}}if(!s.length)return o;const i=await async function(e,t,n){const s="string"==typeof e?(0,g.An)(e):e,r=t[0].spatialReference,o=(0,p.$B)(t[0]),i={...n,query:{...s.query,f:"json",sr:(0,u.YX)(r),geometries:JSON.stringify((0,y.X)(t))}},{data:c}=await(0,a.A)(s.path+"/simplify",i);return(0,y.V)(c.geometries,o,r)}(r,s,n),c=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?c.push(t):c.push(A?(0,l.Gh)(i.shift()):i.shift())}return c}const G=[];for(let e=0;e<q.length;e++){const t=q[e];if("cut"!==t)G.push(t);else{const e=O.shift();G.push(!0===A?(0,l.Gh)(e):e)}}return G}},80754:(e,t,n)=>{n.d(t,{j7:()=>i,kS:()=>f,kd:()=>c,r8:()=>u});var s=n(82799),r=n(16930),o=n(65864);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new s.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator}),minus180Line:new s.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new s.A({paths:[[[180,-180],[180,180]]],spatialReference:r.A.WGS84}),minus180Line:new s.A({paths:[[[-180,-180],[-180,180]]],spatialReference:r.A.WGS84})}};function c(e,t){return Math.ceil((e-t)/(2*t))}function f(e,t){const n=u(e);for(const e of n)for(const n of e)n[0]+=t;return e}function u(e){return(0,o.Bi)(e)?e.rings:e.paths}},92300:(e,t,n)=>{n.d(t,{V:()=>o,X:()=>r});var s=n(65864);function r(e){return{geometryType:(0,s.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function o(e,t,n){const r=(0,s.xD)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=n,t}))}},2272:(e,t,n)=>{n.d(t,{Dl:()=>i,jV:()=>o,lF:()=>c}),n(92602),n(70333);var s=n(4718),r=n(84952);function o(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,r.An)(e):(0,s.o8)(e)}function c(e,t,n){const s={};for(const r in e){if("declaredClass"===r)continue;const o=e[r];if(null!=o&&"function"!=typeof o)if(Array.isArray(o))s[r]=o.map((e=>c(e)));else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(n?.[r]);s[r]=t?e:JSON.stringify(e)}else s[r]=t?o:JSON.stringify(o);else s[r]=o}return s}n(926)}}]);