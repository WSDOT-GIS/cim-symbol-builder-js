/*! For license information please see 7623.a8caede7.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7623],{55812:(t,e,n)=>{function i(t,e){return(t+e)%e}n.d(e,{g:()=>i})},87623:(t,e,n)=>{n.r(e),n.d(e,{calcite_action_menu:()=>d});var i=n(85610),a=n(55812),o=n(68884),l=n(86308),s=n(12243),c=n(98101),r=n(38410);n(49244);const u=["ArrowUp","ArrowDown","End","Home"],d=class{constructor(t){var e=this;(0,i.r)(this,t),this.calciteActionMenuOpen=(0,i.c)(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${(0,l.g)()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:e,open:n,label:i}=this,a=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==a&&(this.disconnectMenuButtonEl(),this.menuButtonEl=a,this.setTooltipReferenceElement(),a&&(a.active=n,a.setAttribute("aria-controls",e),a.setAttribute("aria-expanded",(0,o.t)(n)),a.setAttribute("aria-haspopup","true"),a.id||(a.id=t),a.label||(a.label=i),a.text||(a.text=i),a.addEventListener("pointerdown",this.menuButtonClick),a.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;t&&(t.removeEventListener("pointerdown",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-action")));this.slottedMenuButtonEl=e[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=t=>{(0,o.i)(t)&&this.toggleOpen()},this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-tooltip")));this.tooltipEl=e[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:n,open:i}=this;t&&(t.referenceElement=e||i?null:n)},this.updateAction=(t,e)=>{const{guid:n,activeMenuItemIndex:i}=this,a=`${n}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=a),t.active=e===i},this.updateActions=t=>{t?.forEach(this.updateAction)},this.handleDefaultSlotChange=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-action")));this.actionElements=e},this.menuButtonKeyDown=t=>{const{key:e}=t,{actionElements:n,activeMenuItemIndex:i,open:a}=this;if(n.length){if((0,s.i)(e)){if(t.preventDefault(),!a)return void this.toggleOpen();const e=n[i];e?e.click():this.toggleOpen(!1)}if("Tab"!==e)return"Escape"===e?(this.toggleOpen(!1),void t.preventDefault()):void this.handleActionNavigation(t,e,n);this.open=!1}},this.handleActionNavigation=(t,e,n)=>{if(!this.isValidKey(e,u))return;if(t.preventDefault(),!this.open)return this.toggleOpen(),"Home"!==e&&"ArrowDown"!==e||(this.activeMenuItemIndex=0),void("End"!==e&&"ArrowUp"!==e||(this.activeMenuItemIndex=n.length-1));"Home"===e&&(this.activeMenuItemIndex=0),"End"===e&&(this.activeMenuItemIndex=n.length-1);const i=this.activeMenuItemIndex;"ArrowUp"===e&&(this.activeMenuItemIndex=(0,a.g)(Math.max(i-1,-1),n.length)),"ArrowDown"===e&&(this.activeMenuItemIndex=(0,a.g)(i+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!e.open;e.el.addEventListener("calcitePopoverOpen",e.toggleOpenEnd),e.open=t},this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}componentWillLoad(){(0,c.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}closeCalciteActionMenuOnClick(t){if(!(0,o.i)(t))return;t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){await(0,c.c)(this),(0,o.f)(this.menuButtonEl)}renderMenuButton(){const{label:t,scale:e,expanded:n}=this;return(0,i.h)("slot",{name:r.S.trigger,onSlotchange:this.setMenuButtonEl},(0,i.h)("calcite-action",{class:r.C.defaultTrigger,icon:r.I.menu,scale:e,text:t,textEnabled:n,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:n,menuId:a,menuButtonEl:o,label:l,placement:s,overlayPositioning:c,flipPlacements:u}=this,d=t[e]?.id||null;return(0,i.h)("calcite-popover",{flipPlacements:u,focusTrapDisabled:!0,label:l,offsetDistance:0,open:n,overlayPositioning:c,placement:s,pointerDisabled:!0,referenceElement:o},(0,i.h)("div",{"aria-activedescendant":d,"aria-labelledby":o?.id,class:r.C.menu,id:a,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return(0,i.h)(i.F,null,this.renderMenuButton(),this.renderMenuItems(),(0,i.h)("slot",{name:r.S.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return(0,i.g)(this)}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}"},12243:(t,e,n)=>{function i(t){return"Enter"===t||" "===t}n.d(e,{i:()=>i,n:()=>a});const a=["0","1","2","3","4","5","6","7","8","9"]},98101:(t,e,n)=>{n.d(e,{a:()=>l,c:()=>s,s:()=>o});const i=new WeakMap,a=new WeakMap;function o(t){a.set(t,new Promise((e=>i.set(t,e))))}function l(t){i.get(t)()}function s(t){return a.get(t)}},38410:(t,e,n)=>{n.d(e,{C:()=>i,I:()=>o,S:()=>a});const i={menu:"menu",defaultTrigger:"default-trigger"},a={tooltip:"tooltip",trigger:"trigger"},o={menu:"ellipsis"}}}]);
//# sourceMappingURL=7623.a8caede7.chunk.js.map