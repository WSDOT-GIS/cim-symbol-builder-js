/*! For license information please see 3769.a45e651c.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3769],{73769:(e,t,n)=>{n.r(t),n.d(t,{calcite_rating:()=>v});var i=n(92078),a=n(16866),s=n(63095),o=n(77903),l=n(90025),r=n(49744),c=n(36860),d=n(71710),u=n(27515);n(27815),n(19797),n(80042);const h=({full:e,scale:t,partial:n})=>(0,i.h)("calcite-icon",{class:n?void 0:"icon",icon:e?"star-f":"star",scale:t}),v=class{constructor(e){(0,i.r)(this,e),this.calciteRatingChange=(0,i.c)(this,"calciteRatingChange",6),this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=!1},this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=!0,this.hoverValue=null},this.handleHostKeyDown=()=>{this.isKeyboardInteraction=!0},this.handleLabelKeyDown=e=>{const t=this.getValueFromLabelEvent(e),n=e.key,i=" "==n?void 0:Number(n);if(this.emit=!0,isNaN(i))switch(n){case"Enter":case" ":this.value=this.required||this.value!==t?t:0;break;case"ArrowLeft":this.value=this.getPreviousRatingValue(t),this.updateFocus(),e.preventDefault();break;case"ArrowRight":this.value=this.getNextRatingValue(t),this.updateFocus(),e.preventDefault();break;case"Tab":this.hoverValue=null}else(!this.required&&i>=0&&i<=this.max||this.required&&i>0&&i<=this.max)&&(this.value=i),this.updateFocus()},this.handleInputChange=e=>{if(!0===this.isKeyboardInteraction){const t=Number(e.target.value);this.hoverValue=t,this.value=t}},this.handleLabelPointerOver=e=>{this.hoverValue=this.getValueFromLabelEvent(e)},this.handleLabelPointerDown=e=>{const t=e.currentTarget,n=this.getValueFromLabelEvent(e);this.hoverValue=n,this.emit=!0,this.value=this.required||this.value!==n?n:0,t.focus()},this.handleLabelClick=e=>{e.preventDefault()},this.handleLabelFocus=e=>{const t=this.getValueFromLabelEvent(e);this.hoverValue=t},this.setLabelEl=e=>{this.labelElements.push(e)},this.emit=!1,this.guid=`calcite-ratings-${(0,s.g)()}`,this.isKeyboardInteraction=!0,this.labelElements=[],this.max=5,this.average=void 0,this.count=void 0,this.disabled=!1,this.form=void 0,this.messages=void 0,this.messageOverrides=void 0,this.name=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.showChip=!1,this.value=0,this.effectiveLocale="",this.defaultMessages=void 0,this.hoverValue=void 0}onMessagesChange(){}handleValueUpdate(e){this.hoverValue=e,this.emit&&this.calciteRatingChange.emit(),this.emit=!1}effectiveLocaleChange(){(0,d.u)(this,this.effectiveLocale)}connectedCallback(){(0,c.c)(this),(0,d.c)(this),(0,l.c)(this),(0,a.c)(this)}async componentWillLoad(){await(0,d.s)(this),(0,r.s)(this)}componentWillRender(){this.starsMap=Array.from({length:this.max},((e,t)=>{const n=t+1,i=!this.hoverValue&&this.average&&!this.value&&n<=this.average,a=n===this.value,s=this.average&&this.average+1-n,o=n<=this.hoverValue;return{average:i,checked:a,fraction:s,hovered:o,id:`${this.guid}-${n}`,partial:!this.hoverValue&&!this.value&&!o&&s>0&&s<1,selected:this.value>=n,value:n,tabIndex:this.getTabIndex(n)}}))}componentDidLoad(){(0,r.a)(this)}disconnectedCallback(){(0,c.d)(this),(0,d.d)(this),(0,l.d)(this),(0,a.d)(this)}componentDidRender(){(0,o.u)(this)}render(){return(0,i.h)(i.H,{key:"0e3159f00247860bc8c33e0913f9dd1e9248d887",onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},(0,i.h)(o.I,{key:"04013c4189a6c47e8c4ca61ee51b4b8491108964",disabled:this.disabled},(0,i.h)("span",{key:"0fca81bc548e56b36cbf1695076517ba8204bef1",class:"wrapper"},(0,i.h)("fieldset",{key:"30578fd314ff0e26c7963d5a9ad5bf787c4a6af0",class:"fieldset",disabled:this.disabled},(0,i.h)("legend",{key:"18147ef049b4602781c7b7a2c102af81be7149d7",class:"visually-hidden"},this.messages.rating),this.starsMap.map((({average:e,checked:t,fraction:n,hovered:a,id:s,partial:o,selected:l,value:r,tabIndex:c})=>(0,i.h)("label",{class:{star:!0,selected:l,hovered:a,average:e,partial:o},"data-value":r,htmlFor:s,onClick:this.handleLabelClick,onFocus:this.handleLabelFocus,onKeyDown:this.handleLabelKeyDown,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver,ref:this.setLabelEl,tabIndex:c},(0,i.h)("input",{checked:t,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:s,name:this.guid,onChange:this.handleInputChange,tabIndex:-1,type:"radio",value:r}),(0,i.h)(h,{full:l||e,scale:this.scale}),o&&(0,i.h)("div",{class:"fraction",style:{width:100*n+"%"}},(0,i.h)(h,{full:!0,partial:!0,scale:this.scale})),(0,i.h)("span",{class:"visually-hidden"},this.messages.stars.replace("{num}",`${r}`))))),(this.count||this.average)&&this.showChip?(0,i.h)("calcite-chip",{scale:this.scale,value:this.count?.toString()},!!this.average&&(0,i.h)("span",{class:"number--average"},this.average.toString()),!!this.count&&(0,i.h)("span",{class:"number--count"},"(",this.count?.toString(),")")):null),(0,i.h)(a.H,{key:"2aabd4db649ddc70a0b70d9f406f34e632676796",component:this}))))}onLabelClick(){this.setFocus()}updateFocus(){this.hoverValue=this.value,this.labelElements[this.value-1].focus()}getTabIndex(e){return this.readOnly||this.value!==e&&(this.value||1!==e)?-1:0}getValueFromLabelEvent(e){const t=e.currentTarget;return Number(t.getAttribute("data-value"))}getNextRatingValue(e){return 5===e?1:e+1}getPreviousRatingValue(e){return 1===e?5:e-1}async setFocus(){await(0,r.c)(this),(0,u.f)(this.el)}static get assetsDirs(){return["assets"]}get el(){return(0,i.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};v.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-color-border-input)}.star:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.average,.fraction{color:var(--calcite-color-status-warning)}.hovered,.selected{color:var(--calcite-color-brand)}.fraction{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-color-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"},90093:(e,t,n)=>{function i(e){return"l"===e?"m":"s"}async function a(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>a,g:()=>i})},16866:(e,t,n)=>{n.d(t,{H:()=>C,a:()=>y,c:()=>m,d:()=>g,f:()=>b,i:()=>E,r:()=>f,s:()=>v});var i=n(92078),a=n(27515);const s=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];const o="hidden-form-input";function l(e){return"checked"in e}const r=new WeakMap,c=new WeakSet;function d(e){return"CALCITE-RADIO-BUTTON"===e.nodeName?(0,a.a)(e,"calcite-radio-button-group"):e}const u=new CustomEvent("calciteInvalid",{bubbles:!0,composed:!0});function h(e){const t=e?.target,n=t?.validationMessage,i=d(t?.parentElement);if(!i)return;const a=i?.nodeName?.toLowerCase(),o=a?.split("-");if(o.length<2||"calcite"!==o[0])return;e?.preventDefault(),"validity"in i&&(i.validity=t?.validity),i.dispatchEvent(u),function(e,{status:t,message:n,icon:i}){"status"in e&&(e.status=t),"validationIcon"in e&&"string"!==typeof e.validationIcon&&(e.validationIcon=i),"validationMessage"in e&&!e.validationMessage&&(e.validationMessage=n)}(i,{message:n,icon:!0,status:"invalid"});const l=function(e){return`${e.split("-").map(((e,t)=>0===t?e:`${e[0].toUpperCase()}${e.slice(1)}`)).join("")}${s.includes(e)?"Input":"Change"}`}(a);i.addEventListener(l,(()=>{"status"in i&&(i.status="idle"),"validationIcon"in i&&!i.validationIcon&&(i.validationIcon=!1),"validationMessage"in i&&i.validationMessage===n&&(i.validationMessage=""),"validity"in i&&(i.validity=t?.validity)}),{once:!0})}function v(e){const{formEl:t}=e;return!!t&&(t.addEventListener("invalid",h,!0),t.requestSubmit(),t.removeEventListener("invalid",h,!0),requestAnimationFrame((()=>{const e=t.querySelectorAll("[status=invalid]");for(const t of e)if(t?.validationMessage){t?.setFocus();break}})),!0)}function f(e){e.formEl?.reset()}function m(e){const{el:t,value:n}=e,i=b(e);if(!i||function(e,t){if((0,a.a)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let i=!1;return e.addEventListener(n,(e=>{i=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}(i,t))return;e.formEl=i,e.defaultValue=n,l(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||p).bind(e);i.addEventListener("reset",s),r.set(e.el,s),c.add(t)}function b(e){const{el:t,form:n}=e;return n?(0,a.q)(t,{id:n}):(0,a.a)(t,"form")}function p(){"status"in this&&(this.status="idle"),"validationIcon"in this&&(this.validationIcon=!1),"validationMessage"in this&&(this.validationMessage=""),l(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function g(e){const{el:t,formEl:n}=e;if(!n)return;const i=r.get(t);n.removeEventListener("reset",i),r.delete(t),e.formEl=null,c.delete(t)}function y(e,t){e.defaultValue=t}const E="calciteInternalHiddenInputInput",k=e=>{e.target.dispatchEvent(new CustomEvent(E,{bubbles:!0}))},w=e=>e.removeEventListener("input",k);function L(e,t,n){const{defaultValue:i,disabled:a,form:s,name:o,required:r}=e;t.defaultValue=i,t.disabled=a,t.name=o,t.required=r,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),l(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t);const c=d(e.el);if(c&&"validity"in c)for(const l in{...t?.validity})c.validity[l]=t.validity[l]}const C=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:a}=e,{ownerDocument:s}=t,l=t.querySelectorAll(`input[slot="${o}"]`);if(!n||!i)return void l.forEach((e=>{w(e),e.remove()}));const r=Array.isArray(a)?a:[a],c=[],d=new Set;let u;l.forEach((t=>{const n=r.find((e=>e==t.value));null!=n?(d.add(n),L(e,t,n)):c.push(t)})),r.forEach((t=>{if(d.has(t))return;let n=c.pop();n||(n=s.createElement("input"),n.slot=o),u||(u=s.createDocumentFragment()),u.append(n),n.addEventListener("input",k),L(e,n,t)})),u&&t.append(u),c.forEach((e=>{w(e),e.remove()}))}(e),(0,i.h)("slot",{name:o}))},77903:(e,t,n)=>{n.d(t,{I:()=>u,u:()=>c});var i=n(92078);function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function s(e){e.target.disabled&&e.preventDefault()}const o=["mousedown","mouseup","click"];function l(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const r={capture:!0};function c(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=a,t=e.el,t.addEventListener("pointerdown",s,r),o.forEach((e=>t.addEventListener(e,l,r)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",s,r),o.forEach((e=>t.removeEventListener(e,l,r)));var t}(e),e.el.removeAttribute("aria-disabled")}const d="interaction-container",u=({disabled:e},t)=>(0,i.h)("div",{class:d,inert:e},...t)},90025:(e,t,n)=>{n.d(t,{a:()=>w,b:()=>l,c:()=>m,d:()=>b,g:()=>g,l:()=>o});var i=n(27515),a=n(90093);const s="calciteInternalLabelClick",o="calciteInternalLabelConnected",l="calciteInternalLabelDisconnected",r="calcite-label",c=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakMap,v=new Set,f=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${r}[for="${t}"]`});if(n)return n;const a=(0,i.a)(e,r);return!a||function(e,t){let n;const i="custom-element-ancestor-check",a=i=>{i.stopImmediatePropagation();const a=i.composedPath();n=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(i,a,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,a);const s=n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-")));return s.length>0}(a,e)?null:a};function m(e){if(!e)return;const t=f(e.el);if(d.has(t)&&t===e.labelEl||!t&&v.has(e))return;const n=k.bind(e);if(t){e.labelEl=t;const i=c.get(t)||[];i.push(e),c.set(t,i.sort(p)),d.has(e.labelEl)||(d.set(e.labelEl,y),e.labelEl.addEventListener(s,y)),v.delete(e),document.removeEventListener(o,u.get(e)),h.set(e,n),document.addEventListener(l,n)}else v.has(e)||(n(),document.removeEventListener(l,h.get(e)))}function b(e){if(!e)return;if(v.delete(e),document.removeEventListener(o,u.get(e)),document.removeEventListener(l,h.get(e)),u.delete(e),h.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,d.get(e.labelEl)),d.delete(e.labelEl)),c.set(e.labelEl,t.filter((t=>t!==e)).sort(p)),e.labelEl=null}function p(e,t){return(0,i.j)(e.el,t.el)?-1:1}function g(e){return e.label||e.labelEl?.textContent?.trim()||""}function y(e){const t=e.detail.sourceEvent.target,n=c.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const a=n[0];a.disabled||a.onLabelClick(e)}function E(){v.has(this)&&m(this)}function k(){v.add(this);const e=u.get(this)||E.bind(this);u.set(this,e),document.addEventListener(o,e)}async function w(e){await(0,a.c)(e);if(c.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of v)if(e.el===t){m(e);break}}))}},49744:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>c,c:()=>d,s:()=>l});var i=n(92078),a=n(27815);const s=new WeakMap,o=new WeakMap;function l(e){o.set(e,new Promise((t=>s.set(e,t))))}function r(e){s.get(e)()}function c(e){return o.get(e)}async function d(e){if(await c(e),(0,a.i)())return(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},71710:(e,t,n)=>{n.d(t,{c:()=>v,d:()=>f,s:()=>d,u:()=>h});var i=n(92078),a=n(36860),s=n(27815);const o={};function l(){throw new Error("could not fetch component message bundle")}function r(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function c(){}async function d(e){e.defaultMessages=await u(e,e.effectiveLocale),r(e)}async function u(e,t){if(!(0,s.i)())return{};const{el:n}=e,r=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return o[n]||(o[n]=fetch((0,i.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),o[n]}((0,a.g)(t,"t9n"),r)}async function h(e,t){e.defaultMessages=await u(e,t),r(e)}function v(e){e.onMessagesChange=m}function f(e){e.onMessagesChange=c}function m(){r(this)}}}]);
//# sourceMappingURL=3769.a45e651c.chunk.js.map