"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7560],{95776:(e,t,s)=>{s.d(t,{A:()=>n,J:()=>r});var i=s(88685);function r(e,t){let s;if("string"==typeof e)s=(0,i.Wm)(e+`-seed(${t})`);else{let i=12;s=e^t;do{s=107*(s>>8^s)+i|0}while(0!=--i)}return(1+s/(1<<31))/2}function n(e){return Math.floor(r(e,a)*o)}const a=53290320,o=10},17560:(e,t,s)=>{s.d(t,{o:()=>Se});var i=s(32743),r=s(76931),n=s(5095),a=s(28736),o=s(43282),c=s(12258);class l extends c.r{}function h(e){const{sprite:t,isMapAligned:s,colorLocked:i,scaleSymbolsProportionally:r,isStroke:n}=e;let c=0;return s&&(c|=(0,a.mR)(o.c.bitset.isMapAligned)),i&&(c|=(0,a.mR)(o.c.bitset.colorLocked)),t.sdf&&(c|=(0,a.mR)(o.c.bitset.isSDF)),r&&(c|=(0,a.mR)(o.c.bitset.scaleSymbolsProportionally)),n&&(c|=(0,a.mR)(o.c.bitset.isStroke)),c}var u=s(90113),d=s(93345);class f extends l{get vertexSpec(){return{createComputedParams:e=>{let{pixelDimensions:t,texelDimensions:s,baseSize:i,referenceSize:n,strokeWidth:a,sizeRatio:o}=e;t||(t=e.sprite.sdf?[0,0]:[e.sprite.width,e.sprite.height]),s||(s=e.sprite.sdf?[0,0]:t),i=(0,r.Lz)(i),n=(0,r.Lz)(n),a=(0,r.Lz)(a);const c=(e.sprite.sdfDecodeCoeff??1)*o;return{...e,pixelDimensions:t,texelDimensions:s,baseSize:i,referenceSize:n,strokeWidth:a,sdfDecodeCoeff:c}},optionalAttributes:{zoomRange:{type:d.pe.SHORT,count:2,packPrecisionFactor:n.fq,pack:({scaleInfo:e},{tileInfo:t})=>(0,a.My)(e,t)}},attributes:{id:{type:d.pe.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:d.pe.UNSIGNED_BYTE,count:1,pack:h},pos:{type:d.pe.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:d.pe.FLOAT,count:2,packAlternating:{count:4,pack:e=>{const t=e.texelDimensions;return[[-.5*t[0],-.5*t[1]],[.5*t[0],-.5*t[1]],[-.5*t[0],.5*t[1]],[.5*t[0],.5*t[1]]]}}},uv:{type:d.pe.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:e,texXmin:t,texYmax:s,texYmin:i})=>[[t,i],[e,i],[t,s],[e,s]]}},animationPointerAndBaseSizeAndReferenceSize:{type:d.pe.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:e,baseSize:t,referenceSize:s})=>[e.dataColumn,e.dataRow,t,s]},sizing:{type:d.pe.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:e,pixelDimensions:t,baseSize:s,sprite:i,sizeRatio:r})=>{const n=Math.max(s*i.width/i.height,s),a=i.sdfDecodeCoeff*n*r;return[t[0],t[1],e,a]}},angle:{type:d.pe.BYTE,count:1,packTessellation:({angle:e})=>e}}}}_write(e,t){const s=this.evaluatedMeshParams.sprite,{textureBinding:i}=s;e.recordStart(this.instanceId,this.attributeLayout,i);const r=t.getDisplayId();if("esriGeometryPolygon"===t.geometryType){const s=t.readCentroidForDisplay();if(!s)return;const[i,n]=s.coords;this._writeQuad(e,r,i,n)}else if("esriGeometryPoint"===t.geometryType){const s=t.readXForDisplay(),i=t.readYForDisplay();this._writeQuad(e,r,s,i)}else{const s=t.readGeometryForDisplay();if(s){const{angleToLine:t}=this.evaluatedMeshParams;if(t){let t=!0,i=null,n=null;s.forEachVertex(((s,a)=>{if(null!=i&&null!=n){const o=Math.atan2(a-n,s-i)/u.rp;t&&(this._writeQuad(e,r,i,n,o),t=!1),this._writeQuad(e,r,s,a,o)}i=s,n=a}))}else s.forEachVertex(((t,s)=>{this._writeQuad(e,r,t,s)}))}}e.recordEnd()}_writeQuad(e,t,s,i,r=0){const n=this.evaluatedMeshParams.sprite,{rect:a}=n,o=a.x+2,c=a.y+2,l=a.x+a.width-2,h=a.y+a.height-2,u=e.vertexCount();e.recordBounds(s,i,64,64);const d={texXmin:o,texYmin:c,texXmax:l,texYmax:h,angle:r};for(let f=0;f<4;f++)this._writeVertex(e,t,s,i,d);e.indexEnsureSize(6),e.indexWrite(u),e.indexWrite(u+1),e.indexWrite(u+2),e.indexWrite(u+1),e.indexWrite(u+3),e.indexWrite(u+2)}}var p=s(81320),m=s(13308),_=s(33346),g=s(13720),y=s(38550),x=s(9410),v=s(57156),M=s(98112),P=s(87663),b=s(94967),w=s(98006),S=s(19555),A=s(59422),I=s(72745),k=s(98618),z=s(1484),L=s(71447),E=s(23758),D=s(19385),R=s(77555);function T(e,t,s){return e[0]=t[0]-s[0],e[1]=t[1]-s[1],e}function B(e,t){return Math.sqrt(e*e+t*t)}function G(e){const t=B(e[0],e[1]);e[0]/=t,e[1]/=t}function F(e,t){return B(e[0]-t[0],e[1]-t[1])}function N(e){return e.length-1}function C(e){let t=0;for(let s=0;s<N(e);s++)t+=O(e,s);return t}function O(e,t,s=1){let[i,r]=function(e,t){return e[t+1]}(e,t);return[i,r]=[Math.round(i),Math.round(r)],Math.sqrt(i*i+r*r)*s}class W{constructor(e,t,s,i,r){this._segments=e,this._index=t,this._distance=s,this._xStart=i,this._yStart=r,this._done=!1}static create(e){return new W(e,0,0,e[0][0],e[0][1])}clone(){return new W(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(0===this._distance||1===e._distance)||e._index===this._index+1&&(1===this._distance||0===e._distance)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length);let s=Math.acos(t);return e>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this;return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<N(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const s=this.backwardLength;if(e<=s)return this._distance=(s-e)/this.length,this;let i=this.backwardLength;for(;this.prev();){if(i+this.length>e)return this._seekBackwards(e-i);i+=this.length}return this._distance=0,t?this:null}seek(e,t=!1){if(e<0)return this._seekBackwards(Math.abs(e),t);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>e)return this.seek(e-s,t);s+=this.length}return this._distance=1,t?this:null}}function Z(e,t,s,i=!0){const r=C(e),n=W.create(e),a=r/2;if(!i)return n.seek(a),void(Math.abs(n.x)<R.$u&&Math.abs(n.y)<R.$u&&s(n.clone(),0,a+0*t,r));const o=Math.max((r-t)/2,0),c=Math.floor(o/t),l=a-c*t;n.seek(l);for(let h=-c;h<=c;h++)Math.abs(n.x)<R.$u&&Math.abs(n.y)<R.$u&&s(n.clone(),h,a+h*t,r),n.seek(t)}function V(e,t){const s=t;for(let i=0;i<e.length;i++){let t=e[i];j(t,s);const r=[];r.push(t[0]);for(let e=1;e<t.length;e++){const[s,i]=t[e-1],[n,a]=t[e],o=n-s,c=a-i;r.push([o,c])}e[i]=r,t=r}return e}function j(e,t){const s=1e-6;if(t<=0)return;const i=e.length;if(i<3)return;const r=[];let n=0;r.push(0);for(let u=1;u<i;u++)n+=F(e[u],e[u-1]),r.push(n);t=Math.min(t,.2*n);const a=[];a.push(e[0][0]),a.push(e[0][1]);const o=e[i-1][0],c=e[i-1][1],l=T([0,0],e[0],e[1]);G(l),e[0][0]+=t*l[0],e[0][1]+=t*l[1],T(l,e[i-1],e[i-2]),G(l),e[i-1][0]+=t*l[0],e[i-1][1]+=t*l[1];for(let u=1;u<i;u++)r[u]+=t;r[i-1]+=t;const h=.5*t;for(let u=1;u<i-1;u++){let n=0,o=0,c=0;for(let i=u-1;i>=0&&!(r[i+1]<r[u]-h);i--){const a=h+r[i+1]-r[u],l=r[i+1]-r[i],d=r[u]-r[i]<h?1:a/l;if(Math.abs(d)<s)break;const f=d*d,p=d*a-.5*f*l,m=d*l/t,_=e[i+1],g=e[i][0]-_[0],y=e[i][1]-_[1];n+=m/p*(_[0]*d*a+.5*f*(a*g-l*_[0])-f*d*l*g/3),o+=m/p*(_[1]*d*a+.5*f*(a*y-l*_[1])-f*d*l*y/3),c+=m}for(let a=u+1;a<i&&!(r[a-1]>r[u]+h);a++){const i=h-r[a-1]+r[u],l=r[a]-r[a-1],d=r[a]-r[u]<h?1:i/l;if(Math.abs(d)<s)break;const f=d*d,p=d*i-.5*f*l,m=d*l/t,_=e[a-1],g=e[a][0]-_[0],y=e[a][1]-_[1];n+=m/p*(_[0]*d*i+.5*f*(i*g-l*_[0])-f*d*l*g/3),o+=m/p*(_[1]*d*i+.5*f*(i*y-l*_[1])-f*d*l*y/3),c+=m}a.push(n/c),a.push(o/c)}a.push(o),a.push(c);for(let u=0,d=0;u<i;u++)e[u][0]=a[d++],e[u][1]=a[d++]}var q=s(81615);const Y=(0,P.Bj)((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t}));class Q extends q.G8{constructor(){super(...arguments),this._zoomLevel=0}_write(e,t,s,i){if(this._zoomLevel=i||0,null!=s)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(t.geometryType){case"esriGeometryPoint":{const s=t.readXForDisplay(),i=t.readYForDisplay();this._writePoint(e,s,i,t);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const s=t.readCentroidForDisplay();if(!s)return;const[i,r]=s.coords;this._writePoint(e,i,r,t);break}case"esriGeometryPolyline":this._writeLines(e,t)}}_createLineLabelMetric(e,t,s,i){const r=(0,E.Q4)(e),n="right"===this.evaluatedMeshParams.horizontalAlignment?-1:1,a="bottom"===this.evaluatedMeshParams.verticalAlignment?-1:1,o=this.evaluatedMeshParams.scaleInfo?.maxScale??0,c=this.evaluatedMeshParams.scaleInfo?.minScale??0;return new D.f(r,t,s,n,a,o,c,i??null)}_writePoint(e,t,s,i){const r=this._getShaping();if(!r)return;const n=i.getDisplayId(),a=(0,L.xy)(this.evaluatedMeshParams.horizontalAlignment),o=(0,L.UD)(this.evaluatedMeshParams.verticalAlignment),c=this.evaluatedMeshParams.scaleInfo?.maxScale??0,l=this.evaluatedMeshParams.scaleInfo?.minScale??0,h=(0,E.Q4)(i.getDisplayId()),u=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new D.f(h,t,s,a,o,c,l,u)),this._writeGlyphs(e,n,t,s,r,0,u),e.metricBoxWrite(r.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const t=e.getBoundsInfo();if(t)return t}return null}_writeLines(e,t){const{scaleInfo:s,verticalAlignment:i}=this.evaluatedMeshParams,r=this.evaluatedMeshParams.repeatLabelDistance||128,n=this._getShaping("middle");if(!n)return;const o=(e,t,s,i)=>this._placeSubdivGlyphs(e,t,s,i),c=(n.bounds.width+r)/2;this._current={out:e,id:t.getDisplayId(),shaping:n,zoomRange:(0,a.My)(s,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement="bottom"===i?"above":"top"===i?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(t,o,c):this._writeCenterAlong(t,o,c)}_writeAboveAndBelowAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:r}=this._current,n=r.bounds.halfHeight,a=e.readGeometryForDisplay();if(!a)return;const o=new z.A;(0,k.kz)(o,a,!1,!1,"esriGeometryPolyline",1);const c=$(new z.A,o,n),l=$(new z.A,o,-n),h=(0,k.zv)(l,"esriGeometryPolyline",!1,!1),u=V((0,k.zv)(c,"esriGeometryPolyline",!1,!1).paths,r.bounds.width),d=V(h.paths,r.bounds.width);this._current.offsetDirection="above";for(const f of u)Z(f,s,t,!!i);this._current.offsetDirection="below";for(const f of d)Z(f,s,t,!!i)}_writeCenterAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:r}=this._current,n=V(e.readLegacyGeometryForDisplay().paths,r.bounds.width);for(const a of n)Z(a,s,t,!!i)}_placeSubdivGlyphs(e,t,s,i){const{allowOverrun:r,labelPosition:n,repeatLabelDistance:a}=this.evaluatedMeshParams,o=this._current.zoomRange[0],c=Y(t),l=this._current.shaping.bounds.width/2,h=Math.sqrt(a||128)/2,u=Math.min(s,i-s),d=this._current.shaping.isMultiline?q.GJ:Math.log2(u/(h+l/2)),f=0===t?d:Math.min(c,d),p=Math.max(o,this._zoomLevel+1-f),m=this._zoomLevel-p,_=this._current.shaping.bounds.width/2*2**m;this._current.shaping.isMultiline?0===t&&this._placeStraight(e,p):r&&m<0?this._placeStraightAlong(e,o):"parallel"===n?this._placeStraightAlong(e,p):"curved"===n&&this._placeCurved(e,p,_)}_placeStraight(e,t){const{out:s,id:i,shaping:r,referenceBounds:n}=this._current,{x:a,y:o}=e;s.metricStart(this._createLineLabelMetric(i,a,o)),s.metricBoxWrite(r.boundsT);const c=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(s,i,a,o,r,0,n,{clipAngle:c,mapAligned:!0,isLineLabel:!0,minZoom:t}),this._writeGlyphs(s,i,a,o,r,0,n,{clipAngle:l,mapAligned:!0,isLineLabel:!0,minZoom:t}),s.metricEnd()}_placeCurved(e,t,s){const{out:i,id:r}=this._current;i.metricStart(this._createLineLabelMetric(r,e.x,e.y));const n=e.clone(),a=e.angle*(180/Math.PI)%360,o=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(n,t,1,a),this._placeBack(e,n,t,s,1,a),this._placeForward(e,n,t,s,1,a)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(n,t,0,o),this._placeBack(e,n,t,s,0,o),this._placeForward(e,n,t,s,0,o)),i.metricEnd()}_placeStraightAlong(e,t){const{out:s,id:i,shaping:n,zoomRange:a,referenceBounds:o}=this._current,{boxBorderLineColor:c,boxBackgroundColor:l}=this.evaluatedMeshParams,h=e.clone(),u=e.angle*(180/Math.PI)%360,d=(e.angle*(180/Math.PI)+180)%360,f=n.glyphs.length>0&&!(!c&&!l);if(s.metricStart(this._createLineLabelMetric(i,e.x,e.y)),f){const c=Math.max(t,a[0],0),l=Math.min(q.GJ,a[1]),h=(0,b.$0)((0,w.vt)(),-e.angle),f={minZoom:c,maxZoom:l,clipAngle:u,mapAligned:!0,isLineLabel:!0},p=(0,r.Lz)(this.evaluatedMeshParams.offsetX),m=(0,r.Lz)(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const t=(0,A.fA)(p,-1*m),[r,a]=n.shapeBackground((0,b.Tl)((0,w.vt)(),h,t));s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const c=2*Math.max(r.width,r.height);s.recordBounds(e.x+r.x,e.y+r.y,c,c),this._writeTextBox(s,i,e.x,e.y,a,o,f),s.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const t=(0,A.fA)(p,m),[r,a]=n.shapeBackground((0,b.Tl)((0,w.vt)(),h,t));f.clipAngle=d,s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const c=2*Math.max(r.width,r.height);s.recordBounds(e.x+r.x,e.y+r.y,c,c),this._writeTextBox(s,i,e.x,e.y,a,o,f),s.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(h,t,1,u,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(h,t,0,d,!0),s.metricEnd()}_placeBack(e,t,s,i,r,n){const a=e.clone();let o=e.backwardLength+0;for(;a.prev()&&!(o>=i);)this._placeOnSegment(a,t,o,s,-1,r,n),o+=a.length+0}_placeForward(e,t,s,i,r,n){const a=e.clone();let o=e.remainingLength+0;for(;a.next()&&!(o>=i);)this._placeOnSegment(a,t,o,s,1,r,n),o+=a.length+0}_placeFirst(e,t,s,i,r=!1){const{out:n,id:a,shaping:o,zoomRange:c,referenceBounds:l}=this._current,h=o.glyphs;for(const u of h){const h=u.x>o.bounds.x?s:1-s,d=h*e.remainingLength+(1-h)*e.backwardLength,f=Math.abs(u.x+u.width/2-o.bounds.x),p=Math.max(0,this._zoomLevel+Math.log2(f/(d+0))),m=Math.max(t,r?0:p);u.maxZoom=Math.min(c[1],q.GJ),u.angle=e.angle+(1-s)*Math.PI,u.minZoom=Math.max(c[0],m),this._writeLineGlyph(n,a,e.x,e.y,o.bounds,u,i,l,!0),(s||this._current.offsetDirection)&&this._isVisible(u.minZoom,u.maxZoom)&&n.metricBoxWrite(u.bounds)}}_placeOnSegment(e,t,s,i,r,n,a){const{out:o,id:c,shaping:l,referenceBounds:h}=this._current,u=l.glyphs,d=e.dx/e.length,f=e.dy/e.length,p={x:e.x+s*-r*d,y:e.y+s*-r*f};for(const m of u){const t=m.x>l.bounds.x?n:1-n;if(!(t&&1===r||!t&&-1===r))continue;const u=Math.abs(m.x+m.width/2-l.bounds.x),d=Math.max(0,this._zoomLevel+Math.log2(u/s)-.1),f=Math.max(i,this._zoomLevel+Math.log2(u/(s+e.length+0)));0!==d&&(m.angle=e.angle+(1-n)*Math.PI,m.minZoom=f,m.maxZoom=d,this._writeLineGlyph(o,c,p.x,p.y,l.bounds,m,a,h,!0),(n||this._current.offsetDirection)&&this._isVisible(m.minZoom,m.maxZoom)&&o.metricBoxWrite(m.bounds))}}_writeLineGlyph(e,t,s,i,r,n,o,c,l){const h=s+r.x,u=i+r.y,d=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),f=Math.max(r.width,r.height)*d;e.recordStart(this.instanceId,this.attributeLayout,n.textureBinding),e.recordBounds(h,u,f,f);const{texcoords:p,offsets:m}=n,{fontSize:_,haloSize:g,outlineSize:y}=this._textMeshTransformProps;this._writeQuad(e,t,s,i,{texcoords:p,offsets:m,fontSize:_,haloSize:g,outlineSize:y,color:(0,a.Jb)(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],n.minZoom),maxZoom:Math.min(this._current.zoomRange[1],n.maxZoom),clipAngle:o,mapAligned:l,isLineLabel:!0}),e.recordEnd()}_isVisible(e,t){const s=Math.floor(this._zoomLevel*n.fq)/n.fq;return e<=s&&s<=t}}function $(e,t,s){const{coords:i,lengths:r}=t,n=(0,I.vt)(),a=(0,I.vt)(),o=(0,I.vt)(),c=(0,I.vt)(),l=(0,I.vt)(),h=(0,I.vt)();let u=0;for(let d=0;d<r.length;d++){const t=r[d];for(let r=0;r<t;r++){const d=2*(r+u-1),f=2*(r+u),p=2*(r+u+1);r>0?(0,S.hZ)(n,i[d],i[d+1]):(0,S.hZ)(n,0,0),(0,S.hZ)(a,i[f],i[f+1]),r<t-1?(0,S.hZ)(o,i[p],i[p+1]):(0,S.hZ)(o,0,0),0===r?(0,S.hZ)(c,0,0):((0,S.jb)(c,a,n),(0,S.S8)(c,c),(0,S.hZ)(c,c[1],-c[0])),r===t-1?(0,S.hZ)(l,0,0):((0,S.jb)(l,o,a),(0,S.S8)(l,l),(0,S.hZ)(l,l[1],-l[0])),(0,S.WQ)(h,c,l),(0,S.S8)(h,h);const m=h[0]*l[0]+h[1]*l[1];0!==m&&(0,S.hs)(h,h,m),(0,S.hs)(h,h,s),e.coords.push(a[0]+h[0],a[1]+h[1])}e.lengths.push(t),u+=t}return e}var X=s(64346),H=s(26455),J=s(4480),U=s(18690),K=s(50076),ee=s(53084),te=s(76460),se=s(95776),ie=s(62484);function re(e){return e instanceof ne?e:"object"==typeof e&&"type"in e?le[e.type].hydrate(e):new ae(e)}class ne{constructor(e){this.inputs=e}encode(){const e=[];for(const t of this.inputs)e.push(...t.encode());return e.push(...this.instructions),e}}class ae extends ne{constructor(e){super([]),this.value=e}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[e,t,s,i]=this.value;return null!=i?ie.GA.vector4.encode([e,t||0,s||0,i]):ie.GA.vector3.encode([e,t||0,s||0])}return ie.GA.scalar.encode(this.value)}}class oe extends ne{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new oe(e,re(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof ae))return this;const[t,s,i,r]=e.value,n=this._config.translation.from[0],a=this._config.translation.from[1],o=this._config.rotation.from,c=this._config.scale.from;if(n===this._config.translation.to[0]&&a===this._config.translation.to[1]&&o===this._config.rotation.to&&c===this._config.scale.to){const e=i+o,l=r*c,h=Math.sin(i),u=Math.cos(i);return new ae([u*r*n-h*r*a+t,h*r*n+u*r*a+s,e,l])}return new oe(this._config,e)}get instructions(){return ie.GA.animatedTransform.encode(this._config)}}class ce extends ne{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new ce(e,re(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof ae))return this;const[t,s,i,r]=e.value,n=this._config.color.from[0],a=this._config.color.from[1],o=this._config.color.from[2];let c=this._config.color.from[3];const l=this._config.opacity.from;return n===this._config.color.to[0]&&a===this._config.color.to[1]&&o===this._config.color.to[2]&&c===this._config.color.to[3]&&l===this._config.opacity.to?(c*=l,new ae([t*n,s*a,i*o,r*c])):new ce(this._config,e)}get instructions(){return ie.GA.animatedColor.encode(this._config)}}const le={AnimatedTransform:oe,AnimatedColor:ce};var he=s(69539);function ue(e){return fe(e.map((e=>me(e))).map((e=>re(e).simplify())))}function de(e){const t=[];return t.push(e.transform),t.push(e.fromColor),t.push(e.toColor),t.push(e.colorMix),t.push(e.toOpacity),t.push(e.opacityMix),t}function fe(e){const t=[],s=[];let i=0;for(const r of e){const n=[...r.encode(),...ie.GA.ret.encode()];t.push([i+e.length,0,0,0]),s.push(...n),i+=n.length}return[...t,...s]}async function pe(e,t){const s=e;let i;if("number"==typeof s||"string"==typeof s||"boolean"==typeof s)i=s;else if(Array.isArray(s))i=await Promise.all(s.map((e=>pe(e,t))));else if("object"==typeof s)if("valueExpressionInfo"in s){const{valueExpressionInfo:e}=s,{expression:r}=e;i={...s,computed:await t.createComputedField({expression:r})}}else{i={};for(const e in s)i[e]=await pe(s[e],t)}return i}function me(e,t,s){const i=e;let r;if("number"==typeof i||"string"==typeof i||"boolean"==typeof i)r=i;else if(Array.isArray(i))r=i.map((e=>me(e,t,s)));else if("object"==typeof i)if("type"in i&&null!=i.type&&"Process"===i.type)switch(i.op){case"ArcadeColor":{const e=me(i.value,t,s);_e(Array.isArray(e)&&4===e.length),r=[e[0]/255,e[1]/255,e[2]/255,e[3]]}break;case"Transparency":{const e=me(i.value,t,s);_e("number"==typeof e),r=1-e/100}break;case"Divide":{const e=me(i.left,t,s);_e("number"==typeof e);const n=me(i.right,t,s);_e("number"==typeof n),r=e/n}break;case"Random":{const e=me(i.seed,t,s),n=me(i.min,t,s),a=me(i.max,t,s),o=t.getObjectId(),c=(0,se.A)(o||0);r=n+(0,se.J)(c,e)*(a-n)}}else if("computed"in i)r=function(e){if(!("computed"in e))return e;let i=e.computed.readWithDefault(t,s,[255*e.defaultValue[0],255*e.defaultValue[1],255*e.defaultValue[2],e.defaultValue[3]]);if("string"==typeof i){const e=he.A.fromString(i);e&&(i=[e.r,e.g,e.b,e.a])}return i}(i);else{r={};for(const e in i)r[e]=me(i[e],t,s)}return r}function _e(e){if(!e)throw new Error("Assertion failed.")}var ge=s(27534),ye=s(74014);async function xe(e,t,s=!1){const{defaultValue:i,valueExpressionInfo:r,value:n}=t;if(r){const{expression:n}=r,a=await e.createComputedField({expression:n},s);return a?{...t,computed:a,defaultValue:i}:null}return{...t,computed:new ye.G(n),defaultValue:i}}async function ve(e,t){const{valueExpressionInfo:s}=t,{expression:i}=s,r=await e.createComputedField({expression:i});return r?{...t,computed:r}:null}function Me(e){return"object"==typeof e&&null!=e&&(!(!("valueExpressionInfo"in e)||!e.valueExpressionInfo)||"type"in e&&"Process"===e.type&&"op"in e&&"Random"===e.op)}function Pe(e){if(Array.isArray(e))for(const t of e)if(Pe(t))return!0;if("object"==typeof e){if(Me(e))return!0;for(const t in e)if(Pe(e[t]))return!0}return!1}class be{static async create(e,t,s){const i={},r=new Map,n=new Map,a=new Map,o=new Map,c=new Map,l=new Map;for(const h in s){const u=s[h];if(null!=u&&"object"==typeof u)if(Array.isArray(u)){if("object"==typeof u[0])throw new Error(`InternalError: Cannot handle ${h}. Nested array params are not supported`);i[h]=u}else if("valueExpressionInfo"in u){if(u.value){i[h]=u.value;continue}const t=await ve(e,u);if(!t){i[h]=u.defaultValue;continue}r.set(h,t),i[h]=null}else switch(u.type){case"cim-effect-infos":if(u.effectInfos.some((e=>e.overrides.length))){n.set(h,{effects:await Promise.all(u.effectInfos.map((async t=>{const s=t.overrides.map((t=>xe(e,t)));return{effect:t.effect,compiledOverrides:(await Promise.all(s)).filter(U.Ru)}})))});break}i[h]=u.effectInfos.map((e=>e.effect));break;case"cim-marker-placement-param":u.overrides.length&&a.set(h,{placementInfo:u,compiledOverrides:(await Promise.all(u.overrides.map((t=>xe(e,t))))).filter(U.Ru)}),i[h]=u.placement;break;case"text-rasterization-param":{if(u.overrides.length){const t=u.overrides.map((t=>xe(e,t,u.useLegacyLabelEvaluationRules)));o.set(h,{compiledOverrides:(await Promise.all(t)).filter(U.Ru),rasterizationParam:u,objectIdToResourceId:new Map});continue}const s={type:"cim-rasterization-info",resource:u.resource};i[h]=await t.fetchResourceImmediate(s)??null;break}case"sprite-rasterization-param":{if(u.overrides.length){const t=u.overrides.map((t=>xe(e,t)));o.set(h,{compiledOverrides:(await Promise.all(t)).filter(U.Ru),rasterizationParam:u,objectIdToResourceId:new Map});continue}if("animated"===u.resource.type){o.set(h,{compiledOverrides:[],rasterizationParam:u,objectIdToResourceId:new Map});continue}const s={type:"cim-rasterization-info",resource:u.resource};i[h]=await t.fetchResourceImmediate(s)??null;break}case"cim-marker-transform-param":{const{params:t}=u;if(Pe(t)){const s={compiledMarkerInfos:[]};await Promise.all(t.map((async t=>{const i={props:{}};for(const s in t)if(Me(t[s])){const r=await ve(e,t[s]);i.compiledExpressionMap||(i.compiledExpressionMap=new Map);const n=i.compiledExpressionMap;r&&n.set(s,r)}else i.props[s]=t[s];s.compiledMarkerInfos.push(i)}))),c.set(h,s)}else i[h]={type:"cim-marker-transform-info",infos:t};break}case"animation-params":{const{params:s}=u,r=de(s);if(Pe(r)){const t=await Promise.all(r.map((t=>pe(t,e))));l.set(h,{params:t,propertyIdToResourceId:new Map,key:h})}else{const e=ue(r),s=await t.fetchResourceImmediate({type:"animation-info",resource:e});null!=s&&"sprite"===s.type&&(i[h]={dataRow:s.rect.y,dataColumn:s.rect.x})}break}default:i[h]=u}else i[h]=u}return new be(s,i,r,n,a,o,c,l)}constructor(e,t,s,i,r,n,a,o){this.inputMeshParams=e,this._resolvedMeshParams=t,this._dynamicProperties=s,this._dynamicEffectProperties=i,this._dynamicPlacementProperties=r,this._dynamicAsyncProperties=n,this._dynamicTransformProperties=a,this._dynamicAsyncAnimations=o,this.evaluator=e=>e}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,t,s){for(const i of this._dynamicAsyncProperties.values()){const r=(0,ee.o8)(i.rasterizationParam.resource);"animated"===i.rasterizationParam.resource.type&&i.rasterizationParam.resource.randomizeStartTime&&(r.primitiveName="__RESERVED__PRIMITIVE__NAME__",r.startGroup=(0,se.A)(t.getObjectId()||0));for(const{primitiveName:e,propertyName:a,computed:o,defaultValue:c,valueExpressionInfo:l}of i.compiledOverrides)try{const n="animated"===i.rasterizationParam.resource.type?r.primitiveName:e;(0,ge.Ph)(r,n,a,o,t,s,c)}catch(B){te.A.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator").errorOnce(new K.A("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${l?.expression}' (primitive: '${e}', property: '${a}')`,B))}const n=e.enqueueRequest({type:"cim-rasterization-info",resource:r});i.objectIdToResourceId.set(t.getObjectId(),n)}for(const i of this._dynamicAsyncAnimations.values()){const r=i.params.map((e=>me(e,t,s))).map(re).map((e=>e.simplify())),n=fe(r),a=e.enqueueRequest({type:"animation-info",resource:n});i.propertyIdToResourceId.set(t.getObjectId()+"."+i.key,a)}}evaluateMeshParams(e,t,s){for(const[i,r]of this._dynamicProperties.entries())this._resolvedMeshParams[i]=r.computed.readWithDefault(t,s,r.defaultValue);for(const[i,r]of this._dynamicPlacementProperties.entries())for(const{computed:e,defaultValue:n,propertyName:a}of r.compiledOverrides){const o=e.readWithDefault(t,s,n);r.placementInfo.placement[a]=o,this._resolvedMeshParams[i]=r.placementInfo.placement}for(const[i,r]of this._dynamicEffectProperties.entries())for(const e of r.effects){for(const{computed:i,defaultValue:r,propertyName:n}of e.compiledOverrides){const a=i.readWithDefault(t,s,r);e.effect[n]=a}this._resolvedMeshParams[i]=r.effects.map((e=>e.effect))}for(const[i,r]of this._dynamicTransformProperties.entries()){const e={type:"cim-marker-transform-info",infos:[]};for(const i of r.compiledMarkerInfos){const r={...i.props};if(i.compiledExpressionMap)for(const[e,n]of i.compiledExpressionMap){const i=n.computed.readWithDefault(t,s,n.defaultValue);r[e]="number"==typeof i||"boolean"==typeof i?i:n.defaultValue}e.infos.push(r)}this._resolvedMeshParams[i]=e}for(const[i,r]of this._dynamicAsyncProperties.entries()){const s=r.objectIdToResourceId.get(t.getObjectId());if(null==s)continue;const n=e.getResource(s);this._resolvedMeshParams[i]=n}for(const[i,r]of this._dynamicAsyncAnimations.entries()){const s=r.propertyIdToResourceId.get(t.getObjectId()+"."+i);if(null==s)continue;const n=e.getResource(s);this._resolvedMeshParams[i]={dataRow:n.rect.y,dataColumn:n.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}}var we=s(41406);class Se{async createMeshWriter(e,t,s,i){const r=this._getMeshWriter(i.techniqueType),n=await be.create(e,t,i.inputParams),a=new r(i.id,n,i.optionalAttributes,s);return await a.loadDependencies(),a}_getMeshWriter(e){switch(e){case i.N.Fill:return g.Y;case i.N.DotDensity:return p.k;case i.N.ComplexFill:return m.KE;case i.N.PatternFill:return x.m;case i.N.OutlineFill:return y.w0;case i.N.PatternOutlineFill:return v.Q;case i.N.ComplexOutlineFill:return _.O;case i.N.Marker:return J.H;case i.N.PieChart:return we.v;case i.N.Text:return q.G8;case i.N.Line:return X.Bw;case i.N.TexturedLine:return H.K;case i.N.Heatmap:return M.h;case i.N.Label:return Q;case i.N.AnimatedMarker:return f;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}},74014:(e,t,s)=>{s.d(t,{G:()=>r});var i=s(33219);class r extends i.L{constructor(e){super(),this._value=e}resize(e){}read(e,t){return this._value}readWithDefault(e,t,s){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}}}}]);
//# sourceMappingURL=7560.7addf455.chunk.js.map