/*! For license information please see 6447.eebcd03a.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[6447],{36447:(e,t,i)=>{i.r(t),i.d(t,{calcite_graph:()=>f,calcite_slider:()=>W});var a=i(92078),n=i(63095),s=i(19797),l=i(27515),r=i(16866),o=i(77903),h=i(95254),c=i(90025),d=i(49744),u=i(36860),m=i(19418);i(27815),i(80042);function g(e,t,i){const a=t[0]-e[0],n=t[1]-e[1];return a?(3*n/a-i)/2:i}function b(e,t,i,a,n){const[s,l]=e,[r,o]=t,h=(r-s)/3;return`C ${n([s+h,l+h*i]).join(",")} ${n([r-h,o-h*a]).join(",")} ${n([r,o]).join(",")}`}function p({data:e,min:t,max:i,t:a}){if(0===e.length)return"";const[n,s]=a(e[0]),[l,r]=a(t),[o]=a(i);let h,c,d;const u=e.reduce(((t,i,n)=>{if(c=e[n-2],d=e[n-1],n>1){const e=function(e,t,i){const a=t[0]-e[0],n=i[0]-t[0],s=(t[1]-e[1])/(a||n<0&&0),l=(i[1]-t[1])/(n||a<0&&0),r=(s*n+l*a)/(a+n);return(Math.sign(s)+Math.sign(l))*Math.min(Math.abs(s),Math.abs(l),.5*Math.abs(r))||0}(c,d,i),n=void 0===h?g(c,d,e):h,s=b(c,d,n,e,a);return h=e,`${t} ${s}`}return t}),`M ${l},${r} L ${l},${s} L ${n},${s}`),m=e[e.length-1];return`${u} ${b(d,m,h,g(d,m,h),a)} L ${o},${r} Z`}const f=class{constructor(e){(0,a.r)(this,e),this.graphId=`calcite-graph-${(0,n.g)()}`,this.resizeObserver=(0,s.c)("resize",(()=>(0,a.f)(this))),this.data=[],this.colorStops=void 0,this.highlightMin=void 0,this.highlightMax=void 0,this.min=void 0,this.max=void 0}connectedCallback(){this.resizeObserver?.observe(this.el)}disconnectedCallback(){this.resizeObserver?.disconnect()}render(){const{data:e,colorStops:t,el:i,highlightMax:n,highlightMin:s,min:l,max:r}=this,o=this.graphId,{clientHeight:h,clientWidth:c}=i;if(!e||0===e.length)return(0,a.h)("svg",{"aria-hidden":"true",class:"svg",height:h,preserveAspectRatio:"none",viewBox:`0 0 ${c} ${h}`,width:c});const{min:d,max:u}=function(e){const[t,i]=e[0],a=[t,i],n=[t,i];return e.reduce((({min:e,max:t},[i,a])=>({min:[Math.min(e[0],i),Math.min(e[1],a)],max:[Math.max(t[0],i),Math.max(t[1],a)]})),{min:a,max:n})}(e);let m=d,g=u;(l<d[0]||l>d[0])&&(m=[l,0]),(r>u[0]||r<u[0])&&(g=[r,u[1]]);const b=function({width:e,height:t,min:i,max:a}){const n=a[0]-i[0],s=a[1]-i[1];return a=>[(a[0]-i[0])/n*e,t-a[1]/s*t]}({min:m,max:g,width:c,height:h}),[f]=b([s,g[1]]),[v]=b([n,g[1]]),x=p({data:e,min:d,max:u,t:b}),k=t?`url(#linear-gradient-${o})`:void 0;return(0,a.h)("svg",{"aria-hidden":"true",class:"svg",height:h,preserveAspectRatio:"none",viewBox:`0 0 ${c} ${h}`,width:c},t?(0,a.h)("defs",null,(0,a.h)("linearGradient",{id:`linear-gradient-${o}`,x1:"0",x2:"1",y1:"0",y2:"0"},t.map((({offset:e,color:t,opacity:i})=>(0,a.h)("stop",{offset:100*e+"%","stop-color":t,"stop-opacity":i}))))):null,void 0!==s?[(0,a.h)("mask",{height:"100%",id:`${o}1`,width:"100%",x:"0%",y:"0%"},(0,a.h)("path",{d:`\n            M 0,0\n            L ${f-1},0\n            L ${f-1},${h}\n            L 0,${h}\n            Z\n          `,fill:"white"})),(0,a.h)("mask",{height:"100%",id:`${o}2`,width:"100%",x:"0%",y:"0%"},(0,a.h)("path",{d:`\n            M ${f+1},0\n            L ${v-1},0\n            L ${v-1},${h}\n            L ${f+1}, ${h}\n            Z\n          `,fill:"white"})),(0,a.h)("mask",{height:"100%",id:`${o}3`,width:"100%",x:"0%",y:"0%"},(0,a.h)("path",{d:`\n                M ${v+1},0\n                L ${c},0\n                L ${c},${h}\n                L ${v+1}, ${h}\n                Z\n              `,fill:"white"})),(0,a.h)("path",{class:"graph-path",d:x,fill:k,mask:`url(#${o}1)`}),(0,a.h)("path",{class:"graph-path--highlight",d:x,fill:k,mask:`url(#${o}2)`}),(0,a.h)("path",{class:"graph-path",d:x,fill:k,mask:`url(#${o}3)`})]:(0,a.h)("path",{class:"graph-path",d:x,fill:k}))}get el(){return(0,a.g)(this)}};f.style=":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-color-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}";const v="container",x="container--range",k="graph",y="handle",w="handle-extension",V="handle__label",$="handle__label--minValue",M="handle__label--value",_="hyphen",L="hyphen--wrap",E="static",H="thumb",R="thumb--active",C="thumb-container",D="thumb--minValue",S="thumb--precise",T="thumb--value",z="tick",P="tick--active",I="tick__label",F="tick__label--max",O="tick__label--min",A="ticks",B="track",q="track__range",X="transformed";function U(e){return Array.isArray(e)}const W=class{constructor(e){(0,a.r)(this,e),this.calciteSliderInput=(0,a.c)(this,"calciteSliderInput",6),this.calciteSliderChange=(0,a.c)(this,"calciteSliderChange",6),this.handleKeyDown=e=>{const t=this.shouldMirror(),{activeProp:i,max:a,min:n,pageStep:s,step:l}=this,r=this[i],{key:o}=e;if((0,h.i)(o))return void e.preventDefault();let c;if("ArrowUp"===o||"ArrowRight"===o){c=r+l*(t&&"ArrowRight"===o?-1:1)}else if("ArrowDown"===o||"ArrowLeft"===o){c=r-l*(t&&"ArrowLeft"===o?-1:1)}else"PageUp"===o?s&&(c=r+s):"PageDown"===o?s&&(c=r-s):"Home"===o?c=n:"End"===o&&(c=a);if(isNaN(c))return;e.preventDefault();const d=Number(c.toFixed((0,m.d)(l)));this.setValue({[i]:this.clamp(d,i)})},this.activeProp="value",this.guid=`calcite-slider-${(0,n.g)()}`,this.onThumbBlur=()=>{this.activeProp=null},this.onThumbFocus=e=>{const t=e.currentTarget;this.activeProp=t.getAttribute("data-value-prop")},this.onThumbPointerDown=e=>{const t=e.currentTarget;this.pointerDownDragStart(e,t.getAttribute("data-value-prop"))},this.onTrackPointerDown=e=>{this.pointerDownDragStart(e,"minMaxValue")},this.dragUpdate=e=>{if(!this.disabled&&(e.preventDefault(),this.dragProp)){const t=this.mapToRange(e.clientX||e.pageX);if(U(this.value)&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const e=t-this.minValueDragRange,i=t+this.maxValueDragRange;i<=this.max&&e>=this.min&&i-e===this.minMaxValueRange&&this.setValue({minValue:this.clamp(e,"minValue"),maxValue:this.clamp(i,"maxValue")})}else this.minValueDragRange=t-this.minValue,this.maxValueDragRange=this.maxValue-t,this.minMaxValueRange=this.maxValue-this.minValue;else this.setValue({[this.dragProp]:this.clamp(t,this.dragProp)})}},this.pointerUpDragEnd=e=>{!this.disabled&&(0,l.u)(e)&&this.dragEnd(e)},this.dragEnd=e=>{this.disabled||(this.removeDragListeners(),this.focusActiveHandle(e.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.dragProp=null,this.lastDragPropValue=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null)},this.storeTrackRef=e=>{this.trackEl=e},this.storeThumbRef=e=>{if(!e)return;"minValue"===e.getAttribute("data-value-prop")?this.minHandle=e:this.maxHandle=e},this.formatValue=e=>(u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},u.n.localize(e.toString())),this.disabled=!1,this.fillPlacement="start",this.form=void 0,this.groupSeparator=!1,this.hasHistogram=!1,this.histogram=void 0,this.histogramStops=void 0,this.labelHandles=!1,this.labelFormatter=void 0,this.labelTicks=!1,this.max=100,this.maxLabel=void 0,this.maxValue=void 0,this.min=0,this.minLabel=void 0,this.minValue=void 0,this.mirrored=!1,this.name=void 0,this.numberingSystem=void 0,this.pageStep=void 0,this.precise=!1,this.required=!1,this.snap=!1,this.step=1,this.ticks=void 0,this.value=0,this.scale="m",this.effectiveLocale="",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.tickValues=[]}histogramWatcher(e){this.hasHistogram=!!e}ticksWatcher(){this.tickValues=this.generateTickValues()}valueHandler(){this.setMinMaxFromValue()}minMaxValueHandler(){this.setValueFromMinMax()}connectedCallback(){(0,u.c)(this),this.setMinMaxFromValue(),this.setValueFromMinMax(),(0,c.c)(this),(0,r.c)(this)}disconnectedCallback(){(0,c.d)(this),(0,r.d)(this),(0,u.d)(this),this.removeDragListeners()}componentWillLoad(){(0,d.s)(this),U(this.value)||(this.value=this.snap?this.getClosestStep(this.value):this.clamp(this.value)),this.ticksWatcher(),this.histogramWatcher(this.histogram),(0,r.a)(this,this.value)}componentDidLoad(){(0,d.a)(this)}componentDidRender(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),U(this.value)&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels(),(0,o.u)(this)}render(){const e=this.el.id||this.guid,t=U(this.value)?this.maxValue:this.value,i=this.minValue||this.min,n=this.shouldUseMinValue(),s=100*this.getUnitInterval(n?this.minValue:i),l=100*this.getUnitInterval(t),h=this.shouldMirror(),d=U(this.value),u=this.buildThumbType("max"),m=this.renderThumb({type:u,thumbPlacement:u.includes("histogram")?"below":"above",maxInterval:l,minInterval:s,mirror:h}),g=this.buildThumbType("min"),b=d&&this.renderThumb({type:g,thumbPlacement:g.includes("histogram")||g.includes("precise")?"below":"above",maxInterval:l,minInterval:s,mirror:h}),p=d?"start":this.fillPlacement,f="none"===p?{left:"unset",right:"unset"}:"end"===p?{left:`${h?s:l}%`,right:`${h?l:s}%`}:{left:`${h?100-l:s}%`,right:`${h?s:100-l}%`};return(0,a.h)(a.H,{key:"dee9376120224b51dfa12f3e87fbdce4a481a1ed",id:e,onKeyDown:this.handleKeyDown,onTouchStart:this.handleTouchStart},(0,a.h)(o.I,{key:"65bca4d477d57ced846ef97b466917b6d7fc2f21",disabled:this.disabled},(0,a.h)("div",{key:"99dd57b50ded2302ca1d255708d9e4bd90de3ecb","aria-label":(0,c.g)(this),class:{[v]:!0,[x]:d,[`scale--${this.scale}`]:!0}},this.renderGraph(),(0,a.h)("div",{key:"47647c0d347232a0ddb384333b15860a0264aefa",class:B,ref:this.storeTrackRef},(0,a.h)("div",{key:"3dc176871f6245f2dde77a016ddc747ad9571d3d",class:q,onPointerDown:this.onTrackPointerDown,style:f}),(0,a.h)("div",{key:"0c08b977678d6ac7e8b9944157e51948969a5dc5",class:A},this.tickValues.map((e=>{const s=100*this.getUnitInterval(e)+"%";let l=!1;if("start"===p||"end"===p)if(n)l=e>=this.minValue&&e<=this.maxValue;else{const a="start"===p?i:t,n="start"===p?t:this.max;l=e>=a&&e<=n}return(0,a.h)("span",{class:{[z]:!0,[P]:l},style:{left:h?"":s,right:h?s:""}},this.renderTickLabel(e))})))),(0,a.h)("div",{key:"51996cb05142dbeec20093ca12b017adee23f293",class:C},b,m,(0,a.h)(r.H,{key:"6fd5c00374205d47e226a417674264417323a5c3",component:this})))))}renderThumb({type:e,mirror:t,thumbPlacement:i,minInterval:n,maxInterval:s}){const l=e.includes("labeled"),r=e.includes("precise"),o=e.includes("min"),h=U(this.value),c=o?this.minValue:h?this.maxValue:this.value,d=o?"minValue":h?"maxValue":"value",u=o?this.minLabel:h?this.maxLabel:this.minLabel,m=o?this.minValue:c,g="minValue"===d?this.internalLabelFormatter(this.minValue,"min"):"maxValue"===d?this.internalLabelFormatter(this.maxValue,"max"):this.internalLabelFormatter(c,"value"),b=o?{left:`${t?100-n:n}%`}:{right:`${t?s:100-s}%`},p=`${V} ${o?$:M}`,f=[...l?[(0,a.h)("span",{"aria-hidden":"true",class:p},g),(0,a.h)("span",{"aria-hidden":"true",class:`${p} ${E}`},g),(0,a.h)("span",{"aria-hidden":"true",class:`${p} ${X}`},g)]:[],(0,a.h)("div",{class:y}),r&&(0,a.h)("div",{class:w})];return"below"===i&&f.reverse(),(0,a.h)("div",{"aria-label":u,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":m,class:{[H]:!0,[T]:!o,[R]:"minMaxValue"!==this.lastDragProp&&this.dragProp===d,[S]:r,[D]:o},"data-value-prop":d,key:e,onBlur:this.onThumbBlur,onFocus:this.onThumbFocus,onPointerDown:this.onThumbPointerDown,ref:this.storeThumbRef,role:"slider",style:b,tabIndex:0},f)}renderGraph(){return this.histogram?(0,a.h)("calcite-graph",{class:k,colorStops:this.histogramStops,data:this.histogram,highlightMax:U(this.value)?this.maxValue:this.value,highlightMin:U(this.value)?this.minValue:this.min,max:this.max,min:this.min}):null}renderTickLabel(e){const{hasHistogram:t,labelHandles:i,labelTicks:n,max:s,min:l,precise:r,value:o}=this,h=U(o),c=e===l,d=e===s,u=c||d;return n&&(!t&&(u||!r||!h)||t&&(u||!r&&!i))?(0,a.h)("span",{class:{[I]:!0,[O]:c,[F]:d}},this.internalLabelFormatter(e,"tick")):null}pointerDownHandler(e){if(this.disabled||!(0,l.u)(e))return;const t=e.clientX||e.pageX,i=this.mapToRange(t);let a="value";if(U(this.value)){if(i>=this.minValue&&i<=this.maxValue&&"minMaxValue"===this.lastDragProp)a="minMaxValue";else{a=Math.abs(this.maxValue-i)<Math.abs(this.minValue-i)||i>=this.maxValue?"maxValue":"minValue"}}this.lastDragPropValue=this[a],this.dragStart(a);this.el.shadowRoot.querySelector(`.${H}:active`)||this.setValue({[a]:this.clamp(i,a)}),this.focusActiveHandle(t)}handleTouchStart(e){e.preventDefault()}async setFocus(){await(0,d.c)(this);const e=this.minHandle?this.minHandle:this.maxHandle;e?.focus()}buildThumbType(e){const t=[e];return this.labelHandles&&t.push("labeled"),this.precise&&t.push("precise"),this.hasHistogram&&t.push("histogram"),t.join("-")}setValueFromMinMax(){const{minValue:e,maxValue:t}=this;"number"===typeof e&&"number"===typeof t&&(this.value=[e,t])}setMinMaxFromValue(){const{value:e}=this;U(e)&&(this.minValue=e[0],this.maxValue=e[1])}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return!!U(this.value)&&(this.hasHistogram&&0===this.maxValue||!this.hasHistogram&&0===this.minValue)}getTickDensity(){const e=(this.max-this.min)/this.ticks/250;return e<1?1:e}generateTickValues(){const e=this.ticks??0;if(e<=0)return[];const t=[this.min],i=e*this.getTickDensity();let a=this.min;for(;a<this.max;)a+=i,t.push(Math.min(a,this.max));return t.includes(this.max)||t.push(this.max),t}pointerDownDragStart(e,t){(0,l.u)(e)&&this.dragStart(t)}dragStart(e){this.dragProp=e,this.lastDragProp=this.dragProp,this.activeProp=e,window.addEventListener("pointermove",this.dragUpdate),window.addEventListener("pointerup",this.pointerUpDragEnd),window.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(e){"minValue"===this.dragProp?this.minHandle.focus():"maxValue"===this.dragProp||"value"===this.dragProp?this.maxHandle.focus():"minMaxValue"===this.dragProp&&this.getClosestHandle(e).focus()}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){window.removeEventListener("pointermove",this.dragUpdate),window.removeEventListener("pointerup",this.pointerUpDragEnd),window.removeEventListener("pointercancel",this.dragEnd)}setValue(e){let t;if(Object.keys(e).forEach((i=>{const a=e[i];if(!t){const e=this[i];t=e!==a}this[i]=a})),!t)return;this.dragProp||this.emitChange(),this.emitInput()}clamp(e,t){return e=(0,m.c)(e,this.min,this.max),"maxValue"===t&&(e=Math.max(e,this.minValue)),"minValue"===t&&(e=Math.min(e,this.maxValue)),e}mapToRange(e){const t=this.max-this.min,{left:i,width:a}=this.trackEl.getBoundingClientRect(),n=(e-i)/a,s=this.shouldMirror(),l=this.clamp(this.min+t*(s?1-n:n)),r=Number(l.toFixed((0,m.d)(this.step)));return this.snap&&this.step?this.getClosestStep(r):r}getClosestStep(e){const{max:t,min:i,step:a}=this,n=new u.B(`${Math.floor((e-i)/a)}`).multiply(`${a}`).add(`${i}`).toString();let s=this.clamp(Number(n));return s>t&&(s-=a),s}getClosestHandle(e){return this.getDistanceX(this.maxHandle,e)>this.getDistanceX(this.minHandle,e)?this.minHandle:this.maxHandle}getDistanceX(e,t){return Math.abs(e.getBoundingClientRect().left-t)}getFontSizeForElement(e){return Number(window.getComputedStyle(e).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(e){e=this.clamp(e);const t=this.max-this.min;return(e-this.min)/t}adjustHostObscuredHandleLabel(e){const t=this.el.shadowRoot.querySelector(`.handle__label--${e}`),i=this.el.shadowRoot.querySelector(`.handle__label--${e}.static`),a=this.el.shadowRoot.querySelector(`.handle__label--${e}.transformed`),n=i.getBoundingClientRect(),s=this.getHostOffset(n.left,n.right);t.style.transform=`translateX(${s}px)`,a.style.transform=`translateX(${s}px)`}hyphenateCollidingRangeHandleLabels(){const{shadowRoot:e}=this.el,t=this.shouldMirror(),i=t?"value":"minValue",a=t?"minValue":"value",n=e.querySelector(`.handle__label--${i}`),s=e.querySelector(`.handle__label--${i}.static`),l=e.querySelector(`.handle__label--${i}.transformed`),r=this.getHostOffset(s.getBoundingClientRect().left,s.getBoundingClientRect().right),o=e.querySelector(`.handle__label--${a}`),h=e.querySelector(`.handle__label--${a}.static`),c=e.querySelector(`.handle__label--${a}.transformed`),d=this.getHostOffset(h.getBoundingClientRect().left,h.getBoundingClientRect().right),u=this.getFontSizeForElement(n),m=this.getRangeLabelOverlap(l,c),g=n,b=u/2;if(m>0){if(g.classList.add(_,L),0===d&&0===r){let e=m/2-b;e=-1===Math.sign(e)?Math.abs(e):-e;const t=this.getHostOffset(l.getBoundingClientRect().left+e-b,l.getBoundingClientRect().right+e-b);let i=m/2;const a=this.getHostOffset(c.getBoundingClientRect().left+i,c.getBoundingClientRect().right+i);0!==t&&(e+=t,i+=t),0!==a&&(e+=a,i+=a),n.style.transform=`translateX(${e}px)`,l.style.transform=`translateX(${e-b}px)`,o.style.transform=`translateX(${i}px)`,c.style.transform=`translateX(${i}px)`}else if(r>0||d>0)n.style.transform=`translateX(${r+b}px)`,o.style.transform=`translateX(${m+d}px)`,c.style.transform=`translateX(${m+d}px)`;else if(r<0||d<0){let e=Math.abs(r)+m-b;e=-1===Math.sign(e)?Math.abs(e):-e,n.style.transform=`translateX(${e}px)`,l.style.transform=`translateX(${e-b}px)`}}else g.classList.remove(_,L),n.style.transform=`translateX(${r}px)`,l.style.transform=`translateX(${r}px)`,o.style.transform=`translateX(${d}px)`,c.style.transform=`translateX(${d}px)`}hideObscuredBoundingTickLabels(){const e=U(this.value);if(!this.hasHistogram&&!e&&!this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!e&&this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!e&&!this.labelHandles&&this.precise)return;if(!this.hasHistogram&&!e&&this.labelHandles&&this.precise)return;if(!this.hasHistogram&&e&&!this.precise)return;if(this.hasHistogram&&!this.precise&&!this.labelHandles)return;const t=this.el.shadowRoot.querySelector(`.${D}`),i=this.el.shadowRoot.querySelector(`.${T}`),a=this.el.shadowRoot.querySelector(`.${O}`),n=this.el.shadowRoot.querySelector(`.${F}`);!t&&i&&a&&n&&(a.style.opacity=this.isMinTickLabelObscured(a,i)?"0":"1",n.style.opacity=this.isMaxTickLabelObscured(n,i)?"0":"1"),t&&i&&a&&n&&(a.style.opacity=this.isMinTickLabelObscured(a,t)||this.isMinTickLabelObscured(a,i)?"0":"1",n.style.opacity=this.isMaxTickLabelObscured(n,t)||this.isMaxTickLabelObscured(n,i)&&this.hasHistogram?"0":"1")}getHostOffset(e,t){const i=this.el.getBoundingClientRect();return e+7<i.left?i.left-e-7:t-7>i.right?7-(t-i.right):0}getRangeLabelOverlap(e,t){const i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),n=this.getFontSizeForElement(e),s=i.right+n-a.left;return Math.max(s,0)}isMinTickLabelObscured(e,t){const i=e.getBoundingClientRect(),a=t.getBoundingClientRect();return(0,l.v)(i,a)}isMaxTickLabelObscured(e,t){const i=e.getBoundingClientRect(),a=t.getBoundingClientRect();return(0,l.v)(i,a)}internalLabelFormatter(e,t){const i=this.labelFormatter;if(!i)return this.formatValue(e);const a=i(e,t,this.formatValue);return null==a?this.formatValue(e):a}static get delegatesFocus(){return!0}get el(){return(0,a.g)(this)}static get watchers(){return{histogram:["histogramWatcher"],ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}}};W.style='@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none;-webkit-user-select:none;user-select:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-color-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:"\u2014";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-color-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-color-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-color-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-color-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-color-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-color-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise::after,.thumb:focus.thumb--precise::after,.thumb--active.thumb--precise::after{background-color:var(--calcite-color-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-color-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-color-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range::after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-color-border-input);border-color:var(--calcite-color-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-color-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}.graph{color:var(--calcite-color-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'},90093:(e,t,i)=>{function a(e){return"l"===e?"m":"s"}async function n(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}i.d(t,{c:()=>n,g:()=>a})},16866:(e,t,i)=>{i.d(t,{H:()=>$,a:()=>x,c:()=>b,d:()=>v,f:()=>p,i:()=>k,r:()=>g,s:()=>m});var a=i(92078),n=i(27515);const s=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];const l="hidden-form-input";function r(e){return"checked"in e}const o=new WeakMap,h=new WeakSet;function c(e){return"CALCITE-RADIO-BUTTON"===e.nodeName?(0,n.a)(e,"calcite-radio-button-group"):e}const d=new CustomEvent("calciteInvalid",{bubbles:!0,composed:!0});function u(e){const t=e?.target,i=t?.validationMessage,a=c(t?.parentElement);if(!a)return;const n=a?.nodeName?.toLowerCase(),l=n?.split("-");if(l.length<2||"calcite"!==l[0])return;e?.preventDefault(),"validity"in a&&(a.validity=t?.validity),a.dispatchEvent(d),function(e,{status:t,message:i,icon:a}){"status"in e&&(e.status=t),"validationIcon"in e&&"string"!==typeof e.validationIcon&&(e.validationIcon=a),"validationMessage"in e&&!e.validationMessage&&(e.validationMessage=i)}(a,{message:i,icon:!0,status:"invalid"});const r=function(e){return`${e.split("-").map(((e,t)=>0===t?e:`${e[0].toUpperCase()}${e.slice(1)}`)).join("")}${s.includes(e)?"Input":"Change"}`}(n);a.addEventListener(r,(()=>{"status"in a&&(a.status="idle"),"validationIcon"in a&&!a.validationIcon&&(a.validationIcon=!1),"validationMessage"in a&&a.validationMessage===i&&(a.validationMessage=""),"validity"in a&&(a.validity=t?.validity)}),{once:!0})}function m(e){const{formEl:t}=e;return!!t&&(t.addEventListener("invalid",u,!0),t.requestSubmit(),t.removeEventListener("invalid",u,!0),requestAnimationFrame((()=>{const e=t.querySelectorAll("[status=invalid]");for(const t of e)if(t?.validationMessage){t?.setFocus();break}})),!0)}function g(e){e.formEl?.reset()}function b(e){const{el:t,value:i}=e,a=p(e);if(!a||function(e,t){if((0,n.a)(t.parentElement,"[form]"))return!0;const i="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(i,(e=>{a=e.composedPath().some((e=>h.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),a}(a,t))return;e.formEl=a,e.defaultValue=i,r(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||f).bind(e);a.addEventListener("reset",s),o.set(e.el,s),h.add(t)}function p(e){const{el:t,form:i}=e;return i?(0,n.q)(t,{id:i}):(0,n.a)(t,"form")}function f(){"status"in this&&(this.status="idle"),"validationIcon"in this&&(this.validationIcon=!1),"validationMessage"in this&&(this.validationMessage=""),r(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function v(e){const{el:t,formEl:i}=e;if(!i)return;const a=o.get(t);i.removeEventListener("reset",a),o.delete(t),e.formEl=null,h.delete(t)}function x(e,t){e.defaultValue=t}const k="calciteInternalHiddenInputInput",y=e=>{e.target.dispatchEvent(new CustomEvent(k,{bubbles:!0}))},w=e=>e.removeEventListener("input",y);function V(e,t,i){const{defaultValue:a,disabled:n,form:s,name:l,required:o}=e;t.defaultValue=a,t.disabled=n,t.name=l,t.required=o,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),r(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t);const h=c(e.el);if(h&&"validity"in h)for(const r in{...t?.validity})h.validity[r]=t.validity[r]}const $=({component:e})=>(function(e){const{el:t,formEl:i,name:a,value:n}=e,{ownerDocument:s}=t,r=t.querySelectorAll(`input[slot="${l}"]`);if(!i||!a)return void r.forEach((e=>{w(e),e.remove()}));const o=Array.isArray(n)?n:[n],h=[],c=new Set;let d;r.forEach((t=>{const i=o.find((e=>e==t.value));null!=i?(c.add(i),V(e,t,i)):h.push(t)})),o.forEach((t=>{if(c.has(t))return;let i=h.pop();i||(i=s.createElement("input"),i.slot=l),d||(d=s.createDocumentFragment()),d.append(i),i.addEventListener("input",y),V(e,i,t)})),d&&t.append(d),h.forEach((e=>{w(e),e.remove()}))}(e),(0,a.h)("slot",{name:l}))},77903:(e,t,i)=>{i.d(t,{I:()=>d,u:()=>h});var a=i(92078);function n(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function s(e){e.target.disabled&&e.preventDefault()}const l=["mousedown","mouseup","click"];function r(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const o={capture:!0};function h(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=n,t=e.el,t.addEventListener("pointerdown",s,o),l.forEach((e=>t.addEventListener(e,r,o)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",s,o),l.forEach((e=>t.removeEventListener(e,r,o)));var t}(e),e.el.removeAttribute("aria-disabled")}const c="interaction-container",d=({disabled:e},t)=>(0,a.h)("div",{class:c,inert:e},...t)},90025:(e,t,i)=>{i.d(t,{a:()=>w,b:()=>r,c:()=>b,d:()=>p,g:()=>v,l:()=>l});var a=i(27515),n=i(90093);const s="calciteInternalLabelClick",l="calciteInternalLabelConnected",r="calciteInternalLabelDisconnected",o="calcite-label",h=new WeakMap,c=new WeakMap,d=new WeakMap,u=new WeakMap,m=new Set,g=e=>{const{id:t}=e,i=t&&(0,a.q)(e,{selector:`${o}[for="${t}"]`});if(i)return i;const n=(0,a.a)(e,o);return!n||function(e,t){let i;const a="custom-element-ancestor-check",n=a=>{a.stopImmediatePropagation();const n=a.composedPath();i=n.slice(n.indexOf(t),n.indexOf(e))};e.addEventListener(a,n,{once:!0}),t.dispatchEvent(new CustomEvent(a,{composed:!0,bubbles:!0})),e.removeEventListener(a,n);const s=i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-")));return s.length>0}(n,e)?null:n};function b(e){if(!e)return;const t=g(e.el);if(c.has(t)&&t===e.labelEl||!t&&m.has(e))return;const i=y.bind(e);if(t){e.labelEl=t;const a=h.get(t)||[];a.push(e),h.set(t,a.sort(f)),c.has(e.labelEl)||(c.set(e.labelEl,x),e.labelEl.addEventListener(s,x)),m.delete(e),document.removeEventListener(l,d.get(e)),u.set(e,i),document.addEventListener(r,i)}else m.has(e)||(i(),document.removeEventListener(r,u.get(e)))}function p(e){if(!e)return;if(m.delete(e),document.removeEventListener(l,d.get(e)),document.removeEventListener(r,u.get(e)),d.delete(e),u.delete(e),!e.labelEl)return;const t=h.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,c.get(e.labelEl)),c.delete(e.labelEl)),h.set(e.labelEl,t.filter((t=>t!==e)).sort(f)),e.labelEl=null}function f(e,t){return(0,a.j)(e.el,t.el)?-1:1}function v(e){return e.label||e.labelEl?.textContent?.trim()||""}function x(e){const t=e.detail.sourceEvent.target,i=h.get(this),a=i.find((e=>e.el===t));if(i.includes(a))return;const n=i[0];n.disabled||n.onLabelClick(e)}function k(){m.has(this)&&b(this)}function y(){m.add(this);const e=d.get(this)||k.bind(this);d.set(this,e),document.addEventListener(l,e)}async function w(e){await(0,n.c)(e);if(h.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of m)if(e.el===t){b(e);break}}))}},49744:(e,t,i)=>{i.d(t,{a:()=>o,b:()=>h,c:()=>c,s:()=>r});var a=i(92078),n=i(27815);const s=new WeakMap,l=new WeakMap;function r(e){l.set(e,new Promise((t=>s.set(e,t))))}function o(e){s.get(e)()}function h(e){return l.get(e)}async function c(e){if(await h(e),(0,n.i)())return(0,a.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},19418:(e,t,i)=>{i.d(t,{a:()=>o,c:()=>a,d:()=>s,g:()=>l,r:()=>r});const a=(e,t,i)=>Math.max(t,Math.min(e,i)),n=new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),s=e=>{const t=(""+e).match(n);return t&&0!==parseInt(t[1])?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0};function l(e){return s(e)>0&&e>0?parseFloat(`0.${e.toString().split(".")[1]}`):e}function r(e,t,i,a,n){return(e-t)*(n-a)/(i-t)+a}function o(e,t,i){return e<i?-1:e>t-i?1:0}}}]);
//# sourceMappingURL=6447.eebcd03a.chunk.js.map