/*! For license information please see 4677.4bd3a879.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[4677],{54677:(e,t,i)=>{i.r(t),i.d(t,{calcite_tooltip:()=>m,calcite_tooltip_manager:()=>u});var n=i(97164),o=i(1950),r=i(72726),a=i(23241);i(49304),i(40178);const s="container",l="arrow",c="aria-describedby";const d=new class{constructor(){this.registeredElements=new WeakMap,this.hoverTimeouts=new WeakMap,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key){const{activeTooltipEl:e}=this;e&&(this.clearHoverTimeout(e),this.toggleTooltip(e,!1))}},this.mouseEnterShow=e=>{this.hoverEvent(e,!0)},this.mouseLeaveHide=e=>{this.hoverEvent(e,!1)},this.clickHandler=e=>{if(!(0,a.i)(e))return;const t=this.queryTooltip(e.composedPath());this.clickedTooltip=t,(null===t||void 0===t?void 0:t.closeOnClick)&&(this.toggleTooltip(t,!1),this.clearHoverTimeout(t))},this.focusShow=e=>{this.focusEvent(e,!0)},this.blurHide=e=>{this.focusEvent(e,!1)},this.hoverToggle=(e,t)=>{const{hoverTimeouts:i}=this;i.delete(e),t&&this.closeExistingTooltip(),this.toggleTooltip(e,t)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler),document.addEventListener("pointerover",this.mouseEnterShow,{capture:!0}),document.addEventListener("pointerout",this.mouseLeaveHide,{capture:!0}),document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("focusin",this.focusShow,{capture:!0}),document.addEventListener("focusout",this.blurHide,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener("pointerover",this.mouseEnterShow,{capture:!0}),document.removeEventListener("pointerout",this.mouseLeaveHide,{capture:!0}),document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("focusin",this.focusShow,{capture:!0}),document.removeEventListener("focusout",this.blurHide,{capture:!0})}clearHoverTimeout(e){const{hoverTimeouts:t}=this;t.has(e)&&(window.clearTimeout(t.get(e)),t.delete(e))}closeExistingTooltip(){const{activeTooltipEl:e}=this;e&&this.toggleTooltip(e,!1)}focusTooltip(e,t){this.closeExistingTooltip(),t&&this.clearHoverTimeout(e),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,t&&(this.activeTooltipEl=e)}hoverTooltip(e,t){this.clearHoverTimeout(e);const{hoverTimeouts:i}=this,n=window.setTimeout((()=>this.hoverToggle(e,t)),500);i.set(e,n)}activeTooltipHover(e){const{activeTooltipEl:t,hoverTimeouts:i}=this,{type:n}=e;t&&("pointerover"===n&&e.composedPath().includes(t)?this.clearHoverTimeout(t):"pointerout"!==n||i.has(t)||this.hoverTooltip(t,!1))}hoverEvent(e,t){const i=this.queryTooltip(e.composedPath());this.activeTooltipHover(e),i&&this.hoverTooltip(i,t)}focusEvent(e,t){const i=this.queryTooltip(e.composedPath());i&&i!==this.clickedTooltip?this.focusTooltip(i,t):this.clickedTooltip=null}},m=class{constructor(e){var t=this;(0,n.r)(this,e),this.closeOnClick=!1,this.offsetDistance=r.b,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.guid=`calcite-tooltip-${(0,o.g)()}`,this.hasLoaded=!1,this.setUpReferenceElement=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.removeReferences(),t.effectiveReferenceElement=t.getReferenceElement(),(0,r.c)(t,t.effectiveReferenceElement,t.el);const{el:i,referenceElement:n,effectiveReferenceElement:o}=t;e&&n&&!o&&console.warn(`${i.tagName}: reference-element id "${n}" was not found.`,{el:i}),t.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(c,t),d.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(c),d.unregisterElement(e))}}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){e?this.reposition(!0):(0,r.u)(this.el)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,r.a)(this,this.effectiveReferenceElement,this.el)}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{el:t,effectiveReferenceElement:i,placement:n,overlayPositioning:o,offsetDistance:a,offsetSkidding:s,arrowEl:l}=this;return(0,r.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:n,offsetDistance:a,offsetSkidding:s,includeArrow:!0,arrowEl:l,type:"tooltip"},e)}getReferenceElement(){const{referenceElement:e,el:t}=this;return("string"===typeof e?(0,a.q)(t,{id:e}):e)||null}render(){const{effectiveReferenceElement:e,label:t,open:i}=this,o=e&&i,c=!o;return(0,n.h)(n.H,{"aria-hidden":(0,a.t)(c),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":c,id:this.getId(),role:"tooltip"},(0,n.h)("div",{class:{[r.F.animation]:!0,[r.F.animationActive]:o}},(0,n.h)("div",{class:l,ref:e=>this.arrowEl=e}),(0,n.h)("div",{class:s},(0,n.h)("slot",null))))}get el(){return(0,n.g)(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};m.style='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;visibility:visible;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=left]) .arrow{direction:ltr;inset-inline-end:-4px}:host([data-placement^=right]) .arrow{direction:ltr;inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';const u=class{constructor(e){(0,n.r)(this,e),this.selector="[data-calcite-tooltip-reference]"}render(){return(0,n.h)("slot",null)}};u.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:block}"},23241:(e,t,i)=>{i.d(t,{a:()=>l,b:()=>v,c:()=>h,d:()=>s,e:()=>c,f:()=>y,g:()=>w,h:()=>r,i:()=>L,j:()=>g,k:()=>x,l:()=>d,m:()=>k,n:()=>a,q:()=>u,s:()=>T,t:()=>H});var n=i(40178),o=i(1950);function r(e){return e?e.id=e.id||`${e.tagName.toLowerCase()}-${(0,o.g)()}`:""}function a(e){return Array.isArray(e)?e:Array.from(e)}function s(e){const t=h(e,`.${n.C.darkTheme}, .${n.C.lightTheme}`);return(null===t||void 0===t?void 0:t.classList.contains("calcite-theme-dark"))?"dark":"light"}function l(e){const t=h(e,"[dir]");return t?t.getAttribute("dir"):"ltr"}function c(e,t,i){const n=`[${t}]`,o=e.closest(n);return o?o.getAttribute(t):i}function d(e){return e.getRootNode()}function m(e){return e.host||null}function u(e,t){let{selector:i,id:n}=t;return function e(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const o=d(t),r=n?"getElementById"in o?o.getElementById(n):null:i?o.querySelector(i):null,a=m(o);return r||(a?e(a):null)}(e)}function h(e,t){return function e(i){return i?i.closest(t)||e(m(d(i))):null}(e)}function f(e,t){return p(e,t)}function p(e,t){if(!e)return;const i=t(e);if(void 0!==i)return i;const{parentNode:n}=e;return p(n instanceof ShadowRoot?n.host:n,t)}function v(e,t){return!!f(t,(t=>t===e||void 0))}function g(e){return"function"===typeof(null===e||void 0===e?void 0:e.setFocus)}async function y(e){if(e)return g(e)?e.setFocus():e.focus()}const E=":not([slot])";function w(e,t,i){t&&!Array.isArray(t)&&"string"!==typeof t&&(i=t,t=null);const n=t?Array.isArray(t)?t.map((e=>`[slot="${e}"]`)).join(","):`[slot="${t}"]`:E;return(null===i||void 0===i?void 0:i.all)?function(e,t,i){let n=t===E?b(e,E):Array.from(e.querySelectorAll(t));n=i&&!1===i.direct?n:n.filter((t=>t.parentElement===e)),n=(null===i||void 0===i?void 0:i.matches)?n.filter((e=>null===e||void 0===e?void 0:e.matches(i.matches))):n;const o=null===i||void 0===i?void 0:i.selector;return o?n.map((e=>Array.from(e.querySelectorAll(o)))).reduce(((e,t)=>[...e,...t]),[]).filter((e=>!!e)):n}(e,n,i):function(e,t,i){let n=t===E?b(e,E)[0]||null:e.querySelector(t);n=i&&!1===i.direct||(null===n||void 0===n?void 0:n.parentElement)===e?n:null,n=(null===i||void 0===i?void 0:i.matches)?(null===n||void 0===n?void 0:n.matches(i.matches))?n:null:n;const o=null===i||void 0===i?void 0:i.selector;return o?null===n||void 0===n?void 0:n.querySelector(o):n}(e,n,i)}function b(e,t){return e?Array.from(e.children||[]).filter((e=>null===e||void 0===e?void 0:e.matches(t))):[]}function k(e,t){return Array.from(e.children).filter((e=>e.matches(t)))}function T(e,t,i){return"string"===typeof t&&""!==t?t:""===t?e[i]:void 0}function x(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}function H(e){return Boolean(e).toString()}function L(e){return!(!e.isPrimary||0!==e.button)}},1950:(e,t,i)=>{i.d(t,{g:()=>n});const n=()=>[2,1,1,1,3].map((e=>{let t="";for(let i=0;i<e;i++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")}}]);
//# sourceMappingURL=4677.4bd3a879.chunk.js.map