"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[4572],{41978:(t,e,i)=>{i.d(e,{AM:()=>f});var s=i(27366),r=i(85015),n=i(93169),a=i(84652),o=i(32718),l=i(49861),h=(i(25243),i(69912)),c=i(85411),u=i(32551);const d=-1;let f=class extends r.Z{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,n.Z)("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(p(t))}catch(e){this._transitionTo([]),o.Z.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&g(this._current,p(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&g(this._current,t,this.scale)?(this._final=t,this._to=(0,a.d9)(t),function(t,e,i){const s=t.length>e.length?t:e,r=t.length>e.length?e:t,n=r[r.length-1],a=n?.scale??i,o=n?.effects??[];for(let l=r.length;l<s.length;l++)r.push({scale:a,effects:[...o]});for(let l=0;l<s.length;l++)r[l].scale=r[l].scale===d?i:r[l].scale,s[l].scale=s[l].scale===d?i:s[l].scale,(0,u.uF)(r[l].effects,s[l].effects)}(this._current,this._to,this.scale),this._from=(0,a.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const t=this._current[i],s=this._from[i],r=this._to[i];t.scale=_(s.scale,r.scale,e);for(let i=0;i<t.effects.length;i++){const n=t.effects[i],a=s.effects[i],o=r.effects[i];n.interpolate(a,o,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,i=this._current.length-1;let s,r,n=1;if(1===e.length||t>=e[0].scale)r=s=e[0].effects;else if(t<=e[i].scale)r=s=e[i].effects;else for(let a=0;a<i;a++){const i=e[a],o=e[a+1];if(i.scale>=t&&o.scale<=t){n=(t-i.scale)/(o.scale-i.scale),s=i.effects,r=o.effects;break}}for(let a=0;a<this.effects.length;a++)this.effects[a].interpolate(s[a],r[a],n)}};function p(t){const e=(0,c.Q)(t)||[];return function(t){const e=t[0];return!!e&&"type"in e}(e)?[{scale:d,effects:e}]:e}function g(t,e,i){return!t[0]?.effects||!e[0]?.effects||!((t[0]?.scale===d||e[0]?.scale===d)&&(t.length>1||e.length>1)&&i<=0)&&(0,u.AS)(t[0].effects,e[0].effects)}function _(t,e,i){return t+(e-t)*i}(0,s._)([(0,l.Cb)()],f.prototype,"_to",void 0),(0,s._)([(0,l.Cb)()],f.prototype,"duration",void 0),(0,s._)([(0,l.Cb)({value:""})],f.prototype,"effect",null),(0,s._)([(0,l.Cb)({readOnly:!0})],f.prototype,"effects",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],f.prototype,"hasEffects",null),(0,s._)([(0,l.Cb)({value:0})],f.prototype,"scale",null),(0,s._)([(0,l.Cb)({readOnly:!0})],f.prototype,"transitioning",null),f=(0,s._)([(0,h.j)("esri.layers.effects.EffectView")],f)},33624:(t,e,i)=>{i.d(e,{W:()=>o});var s=i(23588),r=i(41978),n=i(87422),a=i(3453);class o extends n.s{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new r.AM),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new a.Z),this._highlightGradient.setHighlightOptions(t),this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:(0,s.c)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}},87422:(t,e,i)=>{i.d(e,{s:()=>l});var s=i(91505),r=i(93169),n=i(92026),a=i(66978);const o=1/(0,r.Z)("mapview-transitions-duration");class l extends s.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return(0,n.Wi)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,a.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,a.hh)(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const s=t*o;this.computedOpacity=i>e?Math.max(e,i-s):Math.min(e,i+s),this.computedVisible=this.computedOpacity>0;const r=e===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},84319:(t,e,i)=>{i.d(e,{$K:()=>x,$_:()=>A,C$:()=>U,DQ:()=>st,Gg:()=>ot,Gr:()=>et,HX:()=>tt,Jq:()=>ut,Ll:()=>at,Mk:()=>Z,TB:()=>lt,UK:()=>q,Ub:()=>ct,Y8:()=>D,Yw:()=>Y,Z_:()=>j,cM:()=>Q,e2:()=>F,hj:()=>z,iw:()=>nt,js:()=>ht,mR:()=>G,nU:()=>P,sG:()=>J,wO:()=>H,ws:()=>B,xV:()=>W,yP:()=>ft});var s=i(10064),r=i(32718),n=i(48202),a=i(80613),o=i(8548),l=i(61109);const h=r.Z.getLogger("esri.views.2d.engine.webgl.Utils"),c="geometry",u=[{name:c,strideInBytes:12}],d=[{name:c,strideInBytes:36}],f=[{name:c,strideInBytes:24}],p=[{name:c,strideInBytes:12}],g=[{name:c,strideInBytes:40}],_=[{name:c,strideInBytes:36}],v=[{name:c,strideInBytes:36}];function S(t){const e={};for(const i of t)e[i.name]=i.strideInBytes;return e}const m=S([{name:c,strideInBytes:36}]),y=S(u),T=S(d),E=S(f),L=S(p),I=S(g),O=S(_),R=S(v);function A(t,e){switch(t){case a.LW.MARKER:return e===a.mD.HEATMAP?y:m;case a.LW.FILL:switch(e){case a.mD.DOT_DENSITY:return L;case a.mD.SIMPLE:case a.mD.OUTLINE_FILL_SIMPLE:return E;default:return T}case a.LW.LINE:return I;case a.LW.TEXT:return O;case a.LW.LABEL:return R}}const V=[c],C=[c],b=[c],M=[c],w=[c];function N(t){switch(t){case a.LW.MARKER:return V;case a.LW.FILL:return C;case a.LW.LINE:return b;case a.LW.TEXT:return M;case a.LW.LABEL:return w}}function D(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function U(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function F(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function x(t){return null!=t}function z(t){return"number"==typeof t}function B(t){switch(t){case"butt":return n.RL.BUTT;case"round":return n.RL.ROUND;case"square":return n.RL.SQUARE;default:return h.error(new s.Z("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),n.RL.ROUND}}function W(t){switch(t){case"miter":return n.AH.MITER;case"bevel":return n.AH.BEVEL;case"round":return n.AH.ROUND;default:return h.error(new s.Z("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),n.AH.ROUND}}function P(t){switch(t){case"opacity":return a.pc.OPACITY;case"color":return a.pc.COLOR;case"rotation":return a.pc.ROTATION;case"size":return a.pc.SIZE;default:return h.error(`Cannot interpret unknown vv: ${t}`),null}}function H(t,e,i,s,r,n,a){for(const o in n){const e=n[o].stride,s=D(e),a=n[o].data,l=i[o].data;if(null==a||null==l)continue;const h=e*r.vertexCount/s,c=e*t/s,u=e*r.vertexFrom/s;for(let t=0;t<h;++t)l[t+c]=a[t+u]}if(null!=a&&null!=s){const i=r.indexCount;for(let n=0;n<i;++n)s[n+e]=a[n+r.indexFrom]-r.vertexFrom+t}}const G={[c]:o.l1.STATIC_DRAW};function Z(t,e){const i=[];for(let s=0;s<5;++s){const r=N(s),n={};for(const t of r)n[t]={data:e(s,t)};i.push({data:t(s),buffers:n})}return i}function X(t){switch(t){case o.g.BYTE:case o.g.UNSIGNED_BYTE:return 1;case o.g.SHORT:case o.g.UNSIGNED_SHORT:return 2;case o.g.FLOAT:case o.g.INT:case o.g.UNSIGNED_INT:return 4}}function Y(t){switch(t){case o.Br.UNSIGNED_BYTE:return 1;case o.Br.UNSIGNED_SHORT_4_4_4_4:return 2;case o.Br.FLOAT:return 4;default:return void h.error(new s.Z("webgl-utils",`Unable to handle type ${t}`))}}function q(t){switch(t){case o.Br.UNSIGNED_BYTE:return Uint8Array;case o.Br.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case o.Br.FLOAT:return Float32Array;default:return void h.error(new s.Z("webgl-utils",`Unable to handle type ${t}`))}}const k=t=>{const e=new Map;for(const i in t)for(const s of t[i])e.set(s.name,s.location);return e},$=t=>{const e={};for(const i in t){const s=t[i];e[i]=s?.length?s[0].stride:0}return e},K=new Map,Q=(t,e)=>{if(!K.has(t)){const i=function(t){const e={};for(const i in t){const s=t[i];let r=0;e[i]=s.map((t=>{const e=new l.G(t.name,t.count,t.type,r,0,t.normalized||!1);return r+=t.count*X(t.type),e})),e[i]?.forEach((t=>t.stride=r))}return e}(e),s={strides:$(i),bufferLayouts:i,attributes:k(e)};K.set(t,s)}return K.get(t)};function j(t){t(a.LW.FILL),t(a.LW.LINE),t(a.LW.MARKER),t(a.LW.TEXT),t(a.LW.LABEL)}const J=t=>"path"in t&&dt(t.path),tt=t=>"url"in t&&t.url||"imageData"in t&&t.imageData,et=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,it=t=>null!=t&&t.startsWith("data:image/gif"),st=t=>"url"in t&&t.url&&(t.url.includes(".gif")||it(t.url))||"contentType"in t&&"image/gif"===t.contentType||"imageData"in t&&it(t.imageData),rt=t=>null!=t&&t.startsWith("data:image/png"),nt=t=>"url"in t&&t.url&&(t.url.includes(".png")||rt(t.url))||"contentType"in t&&"image/png"===t.contentType||"imageData"in t&&rt(t.imageData),at=t=>t.type&&t.type.toLowerCase().includes("3d");function ot(t){switch(t.type){case"line":{const e=t;return"CIMSolidStroke"===e.cim.type&&!e.dashTemplate}case"fill":return"CIMSolidFill"===t.cim.type;case"esriSFS":return"esriSFSSolid"===t.style||"esriSFSNull"===t.style;case"esriSLS":return"esriSLSSolid"===t.style||"esriSLSNull"===t.style;default:return!1}}const lt=t=>t.includes("data:image/svg+xml");function ht(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return!1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return ft(t);default:return!0}}function ct(t){const e="maxVVSize"in t&&t.maxVVSize,i="width"in t&&t.width||"size"in t&&t.size||0;return e||i}function ut(t){const e=[];for(let i=0;i<t.length;i++)e.push(t.charCodeAt(i));return e}const dt=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4)),ft=t=>"fill"===t.type&&"CIMMarkerPlacementInsidePolygon"===t?.cim?.markerPlacement?.type},65800:(t,e,i)=>{i.d(e,{Vs:()=>l,aH:()=>o,pr:()=>n,t2:()=>a});var s=i(92026),r=i(73271);function n(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=t[e+3];return t[e+0]*=s,t[e+1]*=s,t[e+2]*=s,i||(t[e+3]*=255),t}function a(t){if(!t)return 0;const{r:e,g:i,b:s,a:n}=t;return(0,r.Jz)(e*n,i*n,s*n,255*n)}function o(t){if(!t)return 0;const[e,i,s,n]=t;return(0,r.Jz)(e*(n/255),i*(n/255),s*(n/255),n)}function l(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,s.Wi)(e))return t[i+0]=0,t[i+1]=0,t[i+2]=0,void(t[i+3]=0);const{r:r,g:n,b:a,a:o}=e;t[i+0]=r*o/255,t[i+1]=n*o/255,t[i+2]=a*o/255,t[i+3]=o}},3453:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(32718),r=i(94109),n=i(17615),a=i(8548),o=i(371);const l=s.Z.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");const h=[0,0,0,0];class c{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:n.OQ.outlinePosition,outlineWidth:n.OQ.outlineWidth,innerHaloWidth:n.OQ.innerHaloWidth,outerHaloWidth:n.OQ.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*n.Ft),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;!function(t,e){e.fillColor[0]=t.color.r/255,e.fillColor[1]=t.color.g/255,e.fillColor[2]=t.color.b/255,e.fillColor[3]=t.color.a,t.haloColor?(e.outlineColor[0]=t.haloColor.r/255,e.outlineColor[1]=t.haloColor.g/255,e.outlineColor[2]=t.haloColor.b/255,e.outlineColor[3]=t.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=t.fillOpacity,e.outlineColor[3]*=t.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=n.OQ.outlineWidth,e.outerHaloWidth=n.OQ.outerHaloWidth,e.innerHaloWidth=n.OQ.innerHaloWidth,e.outlinePosition=n.OQ.outlinePosition}(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,s=e.outlinePosition-e.outlineWidth/2,r=e.outlinePosition+e.outlineWidth/2,a=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,o=Math.sqrt(Math.PI/2)*n.tM,c=Math.abs(i)>o?Math.round(10*(Math.abs(i)-o))/10:0,u=Math.abs(a)>o?Math.round(10*(Math.abs(a)-o))/10:0;let d;c&&!u?l.error("The outer rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!c&&u?l.error("The inner rim of the highlight is "+u+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):c&&u&&l.error("The highlight is "+Math.max(c,u)+"px away from the edge of the feature; consider reducing some width values.");const f=[void 0,void 0,void 0,void 0];function p(t,e,i){f[0]=(1-i)*t[0]+i*e[0],f[1]=(1-i)*t[1]+i*e[1],f[2]=(1-i)*t[2]+i*e[2],f[3]=(1-i)*t[3]+i*e[3]}const{_texelData:g}=this;for(let l=0;l<n.Ft;++l)d=i+l/(n.Ft-1)*(a-i),d<i?(f[4*l+0]=0,f[4*l+1]=0,f[4*l+2]=0,f[4*l+3]=0):d<s?p(h,e.outlineColor,(d-i)/(s-i)):d<r?[f[0],f[1],f[2],f[3]]=e.outlineColor:d<a?p(e.outlineColor,e.fillColor,(d-r)/(a-r)):[f[4*l+0],f[4*l+1],f[4*l+2],f[4*l+3]]=e.fillColor,g[4*l+0]=255*f[0],g[4*l+1]=255*f[1],g[4*l+2]=255*f[2],g[4*l+3]=255*f[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=a,this._shadeTexChanged=!0}applyHighlightOptions(t,e){this._shadeTex||(this._shadeTex=new o.x(t,{target:a.No.TEXTURE_2D,pixelFormat:a.VI.RGBA,dataType:a.Br.UNSIGNED_BYTE,wrapMode:a.e8.CLAMP_TO_EDGE,width:n.Ft,height:1,samplingMode:a.cw.LINEAR})),this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,n.Ft,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,r.Jw),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}}},17615:(t,e,i)=>{i.d(e,{Ft:()=>a,OQ:()=>o,QU:()=>n,n5:()=>r,tM:()=>s});const s=1,r=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a=256,o={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0}},80613:(t,e,i)=>{var s,r,n,a,o,l,h;i.d(e,{LW:()=>s,Un:()=>l,X:()=>a,jx:()=>r,mD:()=>h,mf:()=>o,pc:()=>n}),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"}(s||(s={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(r||(r={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(n||(n={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(a||(a={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(o||(o={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(l||(l={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(h||(h={}))},54815:(t,e,i)=>{i.d(e,{CA:()=>h,Gq:()=>T,Xp:()=>l,a:()=>m,dk:()=>v,hF:()=>u,jj:()=>c,jy:()=>o,m2:()=>d,mE:()=>S,qr:()=>y});var s=i(10064),r=i(38999),n=i(80613);const a=Object.keys(n.mD).filter((t=>"number"==typeof n.mD[t])).reduce(((t,e)=>({...t,[e]:n.mD[e]})),{});function o(t){return t===n.mD.OUTLINE_FILL||t===n.mD.OUTLINE_FILL_SIMPLE}function l(t){return function(t){return t===n.mD.SIMPLE||t===n.mD.OUTLINE_FILL_SIMPLE}(t.symbologyType)}function h(t){return o(t.symbologyType)}function c(t,e){switch(t){case n.LW.FILL:return v.from(e);case n.LW.LINE:return m.from(e);case n.LW.MARKER:return S.from(e);case n.LW.TEXT:return y.from(e);case n.LW.LABEL:return T.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function u(t){switch(d.load(t).geometryType){case n.LW.MARKER:return new S(t);case n.LW.FILL:return new v(t);case n.LW.LINE:return new m(t);case n.LW.TEXT:return new y(t);case n.LW.LABEL:return new T(t)}}class d{static load(t){const e=this.shared;return e.data=t,e}constructor(t){this._data=0,this._data=t}set data(t){this._data=t??0}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t??!1)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get symbologyType(){return this.bits(21,26)}set symbologyType(t){this.setBits(t,21,26)}get geometryTypeString(){switch(this.geometryType){case n.LW.FILL:return"fill";case n.LW.MARKER:return"marker";case n.LW.LINE:return"line";case n.LW.TEXT:return"text";case n.LW.LABEL:return"label";default:throw new s.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,r=0;s<i;s++,r++)this.setBit(s,0!=(t&1<<r))}bits(t,e){let i=0;for(let s=t,r=0;s<e;s++,r++)i|=this.bit(s)<<r;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:n.mD[this.symbologyType],options:a,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(7&this.textureBinding)}}d.shared=new d(0);const f=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const i=function(t,e,i){const s=n.X.SIZE_FIELD_STOPS|n.X.SIZE_MINMAX_VALUE|n.X.SIZE_SCALE_STOPS|n.X.SIZE_UNIT_VALUE,r=(e&(n.mf.FIELD_TARGETS_OUTLINE|n.mf.MINMAX_TARGETS_OUTLINE|n.mf.SCALE_TARGETS_OUTLINE|n.mf.UNIT_TARGETS_OUTLINE))>>>4;return t===n.LW.LINE&&i.isOutline||t===n.LW.FILL&&o(i.symbologyType)?s&r:s&~r}(this.geometryType,t,e)&t;this.vvSizeMinMaxValue=!!(i&n.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(i&n.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(i&n.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(i&n.X.SIZE_SCALE_STOPS)}},p=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&n.X.ROTATION)}},g=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&n.X.COLOR)}},_=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&n.X.OPACITY)}};class v extends(g(_(f(d)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:i}=t,s=this.load(0);return s.geometryType=n.LW.FILL,s.symbologyType=e,e!==n.mD.DOT_DENSITY&&s.setVV(i,t),s.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}v.shared=new v(0);class S extends(g(_(p(f(d))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:i}=t,s=this.load(0);return s.geometryType=n.LW.MARKER,s.symbologyType=e,e!==n.mD.HEATMAP&&s.setVV(i,t),s.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}S.shared=new S(0);class m extends(g(_(f(d)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.LINE,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0);class y extends(g(_(p(f(d))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.TEXT,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0);class T extends(f(d)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=n.LW.LABEL,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.mapAligned=(0,r.NS)(t.placement),e.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}T.shared=new T(0)},10435:(t,e,i)=>{i.d(e,{v:()=>r});var s=i(92026);class r{static getStorageSpec(t){return null}static createOrUpdateRendererSchema(t,e){return(0,s.pC)(t)&&"default"===t.type?t:{type:"default"}}static getVariation(t){return{}}static getVariationHash(t){return 0}}r.type="default",r.programSpec=null},30575:(t,e,i)=>{i.d(e,{T:()=>l});var s=i(92026),r=i(65800),n=i(94109),a=i(10435),o=i(8548);class l extends a.v{static getStorageSpec(t){let{attributes:e}=t;return{visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(t,e){const{attributes:i,dotValue:a,referenceScale:o,dotSize:l,dotBlendingEnabled:h,seed:c,backgroundColor:u}=e,d=(0,s.pC)(t)&&"dot-density"===t.type?t:this._createRendererSchema();d.dotValue=a,d.dotSize=l,d.dotScale=o,d.dotBlending=h,d.seed=c;const{colors:f,activeDots:p,backgroundColor:g}=d;for(let s=0;s<n.$0;s++){const t=s>=i.length?null:i[s].color;(0,r.Vs)(f,t,4*s)}for(let s=0;s<8;s++)p[s]=s<e.attributes.length?1:0;return(0,r.Vs)(g,u),d}static getVariation(t){return{ddDotBlending:t.dotBlending}}static getVariationHash(t){return t.dotBlending?1:0}}l.type="dot-density",l.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:o.g.SHORT},{location:1,name:"a_id",count:3,type:o.g.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:o.g.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:o.g.FLOAT}]}}},41768:(t,e,i)=>{i.d(e,{h:()=>l});var s=i(92026),r=i(17842),n=i(27811),a=i(10435),o=i(8548);class l extends a.v{static getStorageSpec(t){let{field:e,valueExpression:i}=t;return{visualVariables:!1,attributes:e||i?[{field:e,valueExpression:i}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(t,e){const{radius:i,minDensity:a,maxDensity:o,referenceScale:l,field:h,valueExpression:c,colorStops:u}=e,d=o-a,f=h||c?1:0,p=u.map((t=>{let{color:e,ratio:i}=t;return`${i}:${e.toString()}`})).join();let g,_=!0;return(0,s.pC)(t)&&"heatmap"===t.type?(g=t,_=p!==t.gradientHash):g=this._createRendererSchema(),g.radius=(0,r.F2)(i),g.minDensity=a,g.densityRange=d,g.referenceScale=l,g.isFieldActive=f,_&&(g.gradient=(0,n.uI)(u),g.gradientHash=p),g}}l.type="heatmap",l.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:o.g.SHORT},{location:1,name:"a_vertexOffset",count:2,type:o.g.SHORT},{location:4,name:"a_id",count:4,type:o.g.UNSIGNED_BYTE}]}}},78020:(t,e,i)=>{i.d(e,{c:()=>c});var s=i(51995),r=i(92026),n=i(17842),a=i(65800),o=i(94109),l=i(10435),h=i(8548);class c extends l.v{static getStorageSpec(t){let{attributes:e}=t;return{visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*o.eV),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(t,e){const{attributes:i,defaultColor:l,holePercentage:h,othersCategory:c,outline:u}=e,d=(0,r.pC)(t)&&"pie-chart"===t.type?t:this._createRendererSchema();for(let r=0;r<o.eV;r++){const t=r>=i.length?new s.Z([0,0,0,0]):i[r].color;(0,a.Vs)(d.colors,t,4*r)}return(0,a.Vs)(d.defaultColor,l),(0,a.Vs)(d.othersColor,c?.color),(0,a.Vs)(d.outlineColor,u?.color),d.outlineWidth=(0,n.F2)(u?.width||0),d.holePercentage=h,d.sectorThreshold=c?.threshold||0,d.numberOfFields=i.length,d}static getVariation(t){return{numberOfFields:t.numberOfFields}}static getVariationHash(t){return t.numberOfFields}}c.type="pie-chart",c.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:h.g.SHORT},{location:1,name:"a_vertexOffset",count:2,type:h.g.SHORT},{location:2,name:"a_texCoords",count:2,type:h.g.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:h.g.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:h.g.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:h.g.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:h.g.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:h.g.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:h.g.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]}},98029:(t,e,i)=>{i.d(e,{EJ:()=>u,a1:()=>d,t4:()=>c});var s=i(10064),r=i(80613),n=i(54815),a=i(10435),o=i(30575),l=i(41768),h=i(78020);function c(t,e){if(t.type!==e)throw new s.Z("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${t.type}"`)}function u(t){switch(t?.type){case"dot-density":return o.T;case"heatmap":return l.h;case"pie-chart":return h.c;default:return a.v}}function d(t){const{geometryType:e,symbologyType:i}=n.m2.load(t);switch(e){case r.LW.FILL:if(i===r.mD.DOT_DENSITY)return o.T;break;case r.LW.MARKER:switch(i){case r.mD.HEATMAP:return l.h;case r.mD.PIE_CHART:return h.c}}return a.v}},61109:(t,e,i)=>{i.d(e,{G:()=>s});class s{constructor(t,e,i,s,r){let n=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=i,this.offset=s,this.stride=r,this.normalized=n,this.divisor=a}}}}]);
//# sourceMappingURL=4572.60234d65.chunk.js.map