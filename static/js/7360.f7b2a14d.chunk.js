/*! For license information please see 7360.f7b2a14d.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7360],{67360:(t,e,i)=>{i.r(e),i.d(e,{calcite_flow:()=>l});var s=i(92078),a=i(19797),r=i(49744);i(27815);const n="frame",o="frame--advancing",c="frame--retreating",l=class{constructor(t){(0,s.r)(this,t),this.itemMutationObserver=(0,a.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:i}=this,s=Array.from(e.querySelectorAll("calcite-flow-item"+(t?`,${t}`:""))).filter((t=>t.closest("calcite-flow")===e)),a=i.length,r=s.length,n=s[r-1],o=s[r-2];if(r&&n&&s.forEach((t=>{t.showBackButton=t===n&&r>1,t.hidden=t!==n})),o&&(o.menuOpen=!1),this.items=s,a!==r){const t=this.getFlowDirection(a,r);this.itemCount=r,this.flowDirection=t}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await i.call(e)}catch(s){return}return e.remove(),e}async setFocus(){await(0,r.c)(this);const{items:t}=this,e=t[t.length-1];return e?.setFocus()}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){(0,r.s)(this)}componentDidLoad(){(0,r.a)(this)}disconnectedCallback(){this.itemMutationObserver?.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[n]:!0,[o]:"advancing"===t,[c]:"retreating"===t};return(0,s.h)("div",{key:"01fbee965d48cb54fa5bd1b53a3435538df84332",class:e},(0,s.h)("slot",{key:"495880eceeb04387dd1352aa00337f037ab0636c"}))}get el(){return(0,s.g)(this)}};l.style=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"},49744:(t,e,i)=>{i.d(e,{a:()=>c,b:()=>l,c:()=>h,s:()=>o});var s=i(92078),a=i(27815);const r=new WeakMap,n=new WeakMap;function o(t){n.set(t,new Promise((e=>r.set(t,e))))}function c(t){r.get(t)()}function l(t){return n.get(t)}async function h(t){if(await l(t),(0,a.i)())return(0,s.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},19797:(t,e,i)=>{i.d(e,{c:()=>a});var s=i(27815);function a(t,e,i){if(!(0,s.i)())return;const a=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new a(e,i)}}}]);
//# sourceMappingURL=7360.f7b2a14d.chunk.js.map