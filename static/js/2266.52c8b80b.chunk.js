/*! For license information please see 2266.52c8b80b.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[2266],{55812:(e,t,i)=>{function n(e,t){return(e+t)%t}i.d(t,{g:()=>n})},15774:(e,t,i)=>{i.d(t,{c:()=>o,d:()=>c});var n=i(85610),l=i(44300);const s=new Set;let r;const a={childList:!0};function o(e){r||(r=(0,l.c)("mutation",u)),r.observe(e.el,a)}function c(e){s.delete(e.el),u(r.takeRecords()),r.disconnect();for(const[t]of s.entries())r.observe(t,a)}function u(e){e.forEach((e=>{let{target:t}=e;(0,n.f)(t)}))}},57969:(e,t,i)=>{i.d(t,{S:()=>r,a:()=>v,b:()=>h,c:()=>m,d:()=>O,f:()=>n,i:()=>y,r:()=>s});var n="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,s=n||l||Function("return this")(),r=s.Symbol,a=Object.prototype,o=a.hasOwnProperty,c=a.toString,u=r?r.toStringTag:void 0;var d=Object.prototype.toString;var f=r?r.toStringTag:void 0;function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":f&&f in Object(e)?function(e){var t=o.call(e,u),i=e[u];try{e[u]=void 0;var n=!0}catch(s){}var l=c.call(e);return n&&(t?e[u]=i:delete e[u]),l}(e):function(e){return d.call(e)}(e)}function m(e){return null!=e&&"object"==typeof e}function v(e){return"symbol"==typeof e||m(e)&&"[object Symbol]"==h(e)}var p=/\s/;var g=/^\s+/;function b(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&p.test(e.charAt(t)););return t}(e)+1).replace(g,""):e}function y(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var E=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,w=/^0o[0-7]+$/i,x=parseInt;function F(e){if("number"==typeof e)return e;if(v(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=b(e);var i=S.test(e);return i||w.test(e)?x(e.slice(2),i?2:8):E.test(e)?NaN:+e}var I=function(){return s.Date.now()},T=Math.max,C=Math.min;function O(e,t,i){var n,l,s,r,a,o,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var i=n,s=l;return n=l=void 0,c=t,r=e.apply(s,i)}function m(e){return c=e,a=setTimeout(p,t),u?h(e):r}function v(e){var i=e-o;return void 0===o||i>=t||i<0||d&&e-c>=s}function p(){var e=I();if(v(e))return g(e);a=setTimeout(p,function(e){var i=t-(e-o);return d?C(i,s-(e-c)):i}(e))}function g(e){return a=void 0,f&&n?h(e):(n=l=void 0,r)}function b(){var e=I(),i=v(e);if(n=arguments,l=this,o=e,i){if(void 0===a)return m(o);if(d)return clearTimeout(a),a=setTimeout(p,t),h(o)}return void 0===a&&(a=setTimeout(p,t)),r}return t=F(t)||0,y(i)&&(u=!!i.leading,s=(d="maxWait"in i)?T(F(i.maxWait)||0,t):s,f="trailing"in i?!!i.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=o=l=a=void 0},b.flush=function(){return void 0===a?r:g(I())},b}},98101:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>a,s:()=>s});const n=new WeakMap,l=new WeakMap;function s(e){l.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}function a(e){return l.get(e)}},95408:(e,t,i)=>{i.d(t,{C:()=>q,I:()=>U,L:()=>N,S:()=>R,a:()=>O,b:()=>L,c:()=>P,d:()=>C,e:()=>b,f:()=>f,g:()=>y,h:()=>k,i:()=>d,j:()=>A,k:()=>g,l:()=>h,m:()=>c,n:()=>p,o:()=>m,p:()=>v,q:()=>T,r:()=>x,s:()=>j,t:()=>I,u:()=>o,v:()=>a,w:()=>W});var n=i(55812),l=i(68884),s=i(57969),r=i(85610);const a={heading:"heading",container:"container",indented:"container--indented"},o={parentItem:"parent-item"};function c(){this.setUpItems(),this.setUpFilter(),this.deselectRemovedItems()}const u=["ArrowUp","ArrowDown"];function d(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=(0,s.d)(w.bind(this),0),this.emitCalciteListFilter=(0,s.d)(S.bind(this),0)}function f(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}function h(){this.mutationObserver?.disconnect()}function m(e){const{selectedValues:t}=this,{item:i,value:n,selected:s,shiftPressed:r}=e.detail;s?(this.multiple&&r&&this.selectSiblings(i),this.multiple||this.deselectSiblingItems(i),t.set(n,i)):(t.delete(n),this.multiple&&r&&this.selectSiblings(i,!0)),this.multiple||(F(i,s),s&&(0,l.f)(i)),this.lastSelectedItem=i,this.emitCalciteListChange()}function v(e){const t=e.detail.oldValue,i=this.selectedValues;if(i.has(t)){const n=i.get(t);i.delete(t),i.set(e.detail.newValue,n)}e.stopPropagation()}function p(e){const{el:t,items:i,multiple:n,selectedValues:l}=this;if(n)return;t.contains(e.relatedTarget)||E(i).forEach((t=>{F(t,0===l.size?t.contains(e.target)||e.target===t:t.selected)}))}function g(e){const{key:t,target:i}=e;if(!function(e){return!!u.find((t=>t===e))}(t))return;const{items:n,multiple:s,selectionFollowsFocus:r}=this,{length:a}=n,o=n.indexOf(i);if(!a||-1===o)return;e.preventDefault();const c=n[b(this,i,"ArrowUp"===t?"up":"down")];n.forEach((e=>F(e,e===c))),!s&&r&&(c.selected=!0),(0,l.f)(c)}function b(e,t,i){const{items:l}=e,{length:s}=l,r=l.indexOf(t),a="up"===i?-1:1;let o=1,c=(0,n.g)(r+a*o++,s);const u=c;for(;l[c].disabled&&(c=(0,n.g)(r+a*o++,s),c!==u););return c}function y(e,t){const{items:i}=e;return i.indexOf(t)}function E(e){return e.filter((e=>!e.disabled))}function S(){this.calciteListFilter.emit()}function w(){this.calciteListChange.emit(this.selectedValues)}function x(e){if(e.defaultPrevented)return;const t=e.target,i=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName&&t.slot===o.parentItem?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((e=>i.delete(e.value)))):(t.remove(),i.delete(t.value)),this.emitCalciteListChange()}function F(e,t){e.disabled||(t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1"))}async function I(e){if(this.filterEnabled&&"filter"===e)return void await(0,l.f)(this.filterEl);const{items:t,multiple:i,selectionFollowsFocus:n}=this;if(0===t.length)return;if(i)return E(t)[0]?.setFocus();const s=E(t),r=s.find((e=>e.selected))||s[0];return n&&r&&(r.selected=!0),r.setFocus()}function T(e){this.items=Array.from(this.el.querySelectorAll(e));let t=!1;const{items:i}=this;i.forEach((e=>{e.icon=this.getIconType(),this.multiple||(e.deselectDisabled=!0,F(e,!1)),e.selected&&(t=!0,F(e,!0),this.selectedValues.set(e.value,e))}));const[n]=i;t||!n||n.disabled||F(n,!0)}function C(){const e=this.selectedValues,t=this.items.map((e=>{let{value:t}=e;return t}));e.forEach((e=>{t.includes(e.value)||this.selectedValues.delete(e.value)}))}function O(e){this.items.forEach((t=>{t.value!==e.value&&(t.toggleSelected(!1),this.selectedValues.has(t.value)&&this.selectedValues.delete(t.value))}))}function j(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.lastSelectedItem)return;const{items:i}=this,n=i.findIndex((e=>e.value===this.lastSelectedItem.value)),l=i.findIndex((t=>t.value===e.value));i.slice(Math.min(n,l),Math.max(n,l)).forEach((e=>{e.toggleSelected(!t),t?this.selectedValues.delete(e.value):this.selectedValues.set(e.value,e)}))}let V;function k(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{filteredData:t,filterText:i}=this,n=t.map((e=>e.value));let s=!1;V||(V=new Set);const r=this.items?.filter((e=>{const t=e.parentElement;t.matches("calcite-pick-list-group")&&V.add(t);const l=!i||n.includes(e.value);return e.hidden=!l,s||(s=l&&e.selected),l}))||[];V.forEach((e=>{const t=r.some((t=>e.contains(t)));if(e.hidden=!t,!t)return;const i=(0,l.g)(e,"parent-item");i&&(i.hidden=!1,r.includes(i)&&Array.from(e.children).forEach((e=>e.hidden=!1)))})),V.clear(),r.length>0&&!s&&!this.multiple&&F(r[0],!0),this.setFilteredItems(r),e&&this.emitCalciteListFilter()}function A(){const e=this.filterEl?.filteredItems;e&&(this.filteredData=e),this.handleFilter()}function L(e){e.stopPropagation();const{filteredItems:t,value:i}=e.currentTarget;this.filterText=i,this.filteredData=t,this.handleFilter(!0)}function P(){return this.items.map((e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value})))}const D="sticky-pos";var U;!function(e){e.circle="circle",e.square="square",e.grip="grip"}(U||(U={}));const M="menu-actions",N=e=>{let{props:{disabled:t,loading:i,filterEnabled:n,dataForFilter:s,handleFilterEvent:a,filterPlaceholder:o,filterText:c,setFilterEl:u,dragEnabled:d,storeAssistiveEl:f},...h}=e;const m=(0,r.h)("slot",null);return(0,r.h)(r.H,{"aria-busy":(0,l.t)(i),role:"menu",...h},(0,r.h)("section",null,d?(0,r.h)("span",{"aria-live":"assertive",class:"assistive-text",ref:f}):null,(0,r.h)("header",{class:{[D]:!0}},n?(0,r.h)("calcite-filter",{"aria-label":o,disabled:i||t,items:s,onCalciteFilterChange:a,placeholder:o,value:c,ref:u}):null,(0,r.h)("slot",{name:M})),i?(0,r.h)("calcite-scrim",{loading:i}):null,m))},q={actions:"actions",actionsEnd:"actions--end",actionsStart:"actions--start",description:"description",handle:"handle",handleActivated:"handle--activated",highlight:"highlight",icon:"icon",iconDot:"icon-dot",label:"label",remove:"remove",title:"title",textContainer:"text-container"},W={checked:"check",remove:"x"},R={actionsEnd:"actions-end",actionsStart:"actions-start"}}}]);
//# sourceMappingURL=2266.52c8b80b.chunk.js.map