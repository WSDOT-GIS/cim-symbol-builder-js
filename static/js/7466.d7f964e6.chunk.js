/*! For license information please see 7466.d7f964e6.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7466],{7466:(e,t,n)=>{n.r(t),n.d(t,{calcite_menu:()=>l,calcite_menu_item:()=>C});var i=n(92078),o=n(27515),s=n(49744),a=n(36860),r=n(71710),c=n(80042);n(27815),n(19797);const l=class{constructor(e){(0,i.r)(this,e),this.menuItems=[],this.handleMenuSlotChange=e=>{this.menuItems=(0,o.s)(e),this.setMenuItemLayout(this.menuItems,this.layout)},this.label=void 0,this.layout="horizontal",this.messageOverrides=void 0,this.messages=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleGlobalAttributesChanged(){(0,i.f)(this),this.setMenuItemLayout(this.menuItems,this.layout)}handleLayoutChange(e){this.setMenuItemLayout(this.menuItems,e)}onMessagesChange(){}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,a.c)(this),(0,r.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,r.s)(this)}componentDidLoad(){(0,s.a)(this)}disconnectedCallback(){(0,a.d)(this),(0,r.d)(this)}async setFocus(){await(0,s.c)(this),this.el.focus()}calciteInternalNavMenuItemKeyEvent(e){const t=e.target,n=e.detail.children,i=e.detail.event.key;e.stopPropagation(),"ArrowDown"===i?"vertical"===t.layout?(0,o.k)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&n[0].setFocus():"ArrowUp"===i?"vertical"===this.layout?(0,o.k)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&n[n.length-1].setFocus():"ArrowRight"===i?"horizontal"===this.layout?(0,o.k)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&n[0].setFocus():"ArrowLeft"===i?"horizontal"===this.layout?(0,o.k)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&this.focusParentElement(e.target):"Escape"===i&&this.focusParentElement(e.target),e.preventDefault()}focusParentElement(e){const t=e.parentElement;t&&((0,o.d)(t),t.open=!1)}setMenuItemLayout(e,t){e.forEach((e=>{e.layout=t,"menubar"===this.getEffectiveRole()&&(e.isTopLevelItem=!0,e.topLevelMenuLayout=this.layout)}))}getEffectiveRole(){return this.el.role||"menubar"}render(){return(0,i.h)(i.H,{key:"75308ac4419f7116f73975ad9ff88d25817d0522"},(0,i.h)("ul",{key:"ed22f7ab681c6e583b0b5aa720823898759687cb","aria-label":this.label,role:this.getEffectiveRole()},(0,i.h)("slot",{key:"4296d48a1a8921802458776d02e119feeaf12b3e",onSlotchange:this.handleMenuSlotChange})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,i.g)(this)}static get watchers(){return{role:["handleGlobalAttributesChanged"],layout:["handleLayoutChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};l.style=":host{display:flex}ul{margin:0px;display:inline-flex;block-size:100%;align-items:center;padding:0px}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}";const h="container",d="content",u="dropdown--vertical",m="dropdown-menu-items",p="dropdown-action",v="layout--vertical",f="hover-href-icon",b="icon",g="icon--breadcrumb",y="icon--dropdown",w="icon--end",k="icon--start",I="parent--vertical",x="item-content",L="open",M="nested",E="text-container",C=class{constructor(e){(0,i.r)(this,e),this.calciteInternalMenuItemKeyEvent=(0,i.c)(this,"calciteInternalMenuItemKeyEvent",7),this.calciteMenuItemSelect=(0,i.c)(this,"calciteMenuItemSelect",7),this.clickHandler=e=>{(this.href&&e.target===this.dropdownActionEl||!this.href&&this.hasSubmenu)&&(this.open=!this.open),this.selectMenuItem(e)},this.handleMenuItemSlotChange=e=>{this.submenuItems=(0,o.s)(e),this.submenuItems.forEach((e=>{e.topLevelMenuLayout||(e.topLevelMenuLayout=this.topLevelMenuLayout)})),this.hasSubmenu=this.submenuItems.length>0},this.keyDownHandler=async e=>{const{hasSubmenu:t,href:n,layout:i,open:o,submenuItems:s}=this,a=e.key,r=e.target===this.dropdownActionEl;if(!e.defaultPrevented)if(" "===a||"Enter"===a)t&&(!n||n&&r)&&(this.open=!o),n&&r||"Enter"===a||this.selectMenuItem(e),(" "===a||n&&r)&&e.preventDefault();else if("Escape"===a){if(o)return void(this.open=!1);this.calciteInternalMenuItemKeyEvent.emit({event:e}),e.preventDefault()}else if("ArrowDown"===a||"ArrowUp"===a){if(e.preventDefault(),(r||!n)&&t&&!o&&"horizontal"===i)return void(this.open=!0);this.calciteInternalMenuItemKeyEvent.emit({event:e,children:s,isSubmenuOpen:o&&t})}else if("ArrowLeft"===a)e.preventDefault(),this.calciteInternalMenuItemKeyEvent.emit({event:e,children:s,isSubmenuOpen:!0});else if("ArrowRight"===a){if(e.preventDefault(),(r||!n)&&t&&!o&&"vertical"===i)return void(this.open=!0);this.calciteInternalMenuItemKeyEvent.emit({event:e,children:s,isSubmenuOpen:o&&t})}},this.active=void 0,this.breadcrumb=void 0,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.isTopLevelItem=!1,this.label=void 0,this.layout=void 0,this.messageOverrides=void 0,this.messages=void 0,this.open=!1,this.rel=void 0,this.target=void 0,this.text=void 0,this.topLevelMenuLayout=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasSubmenu=!1,this.submenuItems=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),this.anchorEl.focus()}handleClickOut(e){"vertical"!==this.topLevelMenuLayout&&this.hasSubmenu&&this.open&&!e.composedPath().includes(this.el)&&(this.open=!1)}handleFocusOut(e){"vertical"===this.topLevelMenuLayout||this.el.contains(e.relatedTarget)||(this.open=!1)}connectedCallback(){(0,a.c)(this),(0,r.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,r.s)(this)}componentDidLoad(){(0,s.a)(this)}disconnectedCallback(){(0,a.d)(this),(0,r.d)(this)}blurHandler(){this.isFocused=!1}focusHandler(e){const t=e.target;this.isFocused=!0,t.open&&!this.open&&(t.open=!1)}selectMenuItem(e){e.target!==this.dropdownActionEl&&this.calciteMenuItemSelect.emit()}renderIconStart(){return(0,i.h)("calcite-icon",{class:`${b} ${k}`,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,key:k,scale:"s"})}renderIconEnd(){return(0,i.h)("calcite-icon",{class:`${b} ${w}`,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,key:w,scale:"s"})}renderBreadcrumbIcon(e){return(0,i.h)("calcite-icon",{class:`${b} ${g}`,icon:"rtl"===e?"chevron-left":"chevron-right",key:g,scale:"s"})}renderDropdownIcon(e){const t="rtl"===e?"chevron-left":"chevron-right";return(0,i.h)("calcite-icon",{class:`${b} ${y}`,icon:"vertical"===this.topLevelMenuLayout||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:y,scale:"s"})}renderDropdownAction(e){const t="rtl"===e?"chevron-left":"chevron-right";return(0,i.h)("calcite-action",{class:p,icon:"vertical"===this.topLevelMenuLayout||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:p,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,ref:e=>this.dropdownActionEl=e,text:this.messages.open})}renderSubmenuItems(e){return(0,i.h)("calcite-menu",{class:{[m]:!0,[L]:this.open,[M]:!this.isTopLevelItem,[c.C.rtl]:"rtl"===e,[u]:"vertical"===this.topLevelMenuLayout},label:this.messages.submenu,layout:"vertical",role:"menu"},(0,i.h)("slot",{name:"submenu-item",onSlotchange:this.handleMenuItemSlotChange}))}renderHrefIcon(e){return(0,i.h)("calcite-icon",{class:f,icon:"rtl"===e?"arrow-left":"arrow-right",key:f,scale:"s"})}renderItemContent(e){const t=this.href&&("vertical"===this.topLevelMenuLayout||!this.isTopLevelItem);return(0,i.h)(i.F,null,this.iconStart&&this.renderIconStart(),(0,i.h)("div",{class:E},(0,i.h)("span",null,this.text)),t&&this.renderHrefIcon(e),this.iconEnd&&this.renderIconEnd(),this.breadcrumb?this.renderBreadcrumbIcon(e):null,!this.href&&this.hasSubmenu?this.renderDropdownIcon(e):null)}render(){const e=(0,o.g)(this.el);return(0,i.h)(i.H,{key:"e57c6579d3287593d663a8586cfd25c90246b1a4",onBlur:this.blurHandler,onFocus:this.focusHandler},(0,i.h)("li",{key:"954549390e447ec43ccf681949095d1393d9068a",class:{[h]:!0,[I]:"vertical"===this.topLevelMenuLayout},role:"none"},(0,i.h)("div",{key:"6130156128f303bb225007e337fae78385614cf5",class:x},(0,i.h)("a",{key:"9103ba8f3683feb1eb2301f05412b434c39ec3d3","aria-current":!!this.isFocused&&"page","aria-expanded":(0,o.t)(this.open),"aria-haspopup":(0,o.t)(this.hasSubmenu),"aria-label":this.label,class:{[v]:"vertical"===this.layout,[d]:!0},href:this.href,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,ref:e=>this.anchorEl=e,rel:this.rel,role:"menuitem",tabIndex:this.isTopLevelItem?0:-1,target:this.target},this.renderItemContent(e)),this.href&&this.hasSubmenu?this.renderDropdownAction(e):null),this.renderSubmenuItems(e)))}static get assetsDirs(){return["assets"]}get el(){return(0,i.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};C.style=':host{position:relative;box-sizing:border-box;display:flex;align-items:center;flex-shrink:0}:host .container,:host .item-content,:host .content{min-block-size:3rem}:host([layout=vertical]){inline-size:100%}:host(:not([layout=vertical])){block-size:100%}.container,.item-content{display:flex;block-size:100%;inline-size:100%;flex-direction:row;align-items:stretch}.content{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);padding-inline:1rem;font-size:var(--calcite-font-size-0);color:var(--calcite-color-text-2);outline:2px solid transparent;outline-offset:2px;text-decoration:none;border-block-end:0.125rem solid transparent;padding-block-start:0.125rem}.content:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-2)}.content:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-2);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content:active{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}.content span{display:inline-flex}.content.layout--vertical{display:flex;inline-size:100%;justify-content:flex-start;padding-block:1rem;border-block-end:0;border-inline-end:0.25rem solid transparent}:host([active]) .content{color:var(--calcite-color-text-1);border-color:var(--calcite-color-brand)}:host([active]) .content .icon{--calcite-icon-color:var(--calcite-color-brand)}:host([layout=vertical]) .content{padding-inline:0.75rem}.icon--start{margin-inline-end:0.75rem}.icon--end{margin-inline-start:0.75rem}:host([layout=vertical]) .icon--end{margin-inline-start:auto;padding-inline-start:0.75rem}.icon--dropdown{position:relative;margin-inline-start:auto;margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-icon-color:var(--calcite-color-text-3)}:host([layout=vertical]) .icon--end~.icon--dropdown{margin-inline-start:0.75rem}:host([layout=vertical]) .hover-href-icon{padding-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--end{margin-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--breadcrumb{margin-inline-start:0.75rem}.icon--breadcrumb{margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-icon-color:var(--calcite-color-text-3)}:host([layout=vertical]) .icon--breadcrumb{margin-inline-start:auto}:host([layout=vertical]) .icon--breadcrumb~.icon--dropdown{margin-inline-start:0.5rem}:host([layout=vertical]) .icon--end~.icon--breadcrumb{margin-inline-start:0.5rem}:host([breadcrumb]) .content{padding-inline-end:0.75rem}calcite-action{position:relative;block-size:auto;border-inline-start:1px solid var(--calcite-color-foreground-1)}calcite-action::after{position:absolute;inset-inline-start:-1px;display:block;inline-size:1px;content:"";inset-block:0.75rem;background-color:var(--calcite-color-border-3)}calcite-action:hover::after{block-size:100%;inset-block:0}.content:focus~calcite-action,.content:hover~calcite-action{color:var(--calcite-color-text-1);border-inline-start:1px solid var(--calcite-color-border-3)}.container:hover .dropdown-action{background-color:var(--calcite-color-foreground-2)}.dropdown-menu-items{position:absolute;display:none;block-size:auto;min-inline-size:100%;flex-direction:column;overflow:visible;border:1px solid var(--calcite-color-border-3);background:var(--calcite-color-foreground-1);inset-block-start:100%;z-index:var(--calcite-z-index-dropdown)}.dropdown-menu-items.open{display:block}.dropdown-menu-items.nested{position:absolute;inset-block-start:-1px;transform:translateX(calc(100% - 2px))}.parent--vertical{flex-direction:column}.dropdown--vertical.dropdown-menu-items{position:relative;border-radius:0px;box-shadow:none;inset-block-start:0;transform:none}.dropdown--vertical.dropdown-menu-items:last-of-type{border-inline:0}:host([layout=vertical]:last-of-type) .dropdown-menu-items{border-block-end:0}:host([slot=submenu-item]) .parent--vertical{padding-inline-start:1.5rem}.dropdown-menu-items.nested.calcite--rtl{transform:translateX(calc(-100% + 2px))}.dropdown--vertical.dropdown-menu-items.nested.calcite--rtl{transform:none}.hover-href-icon{position:relative;inset-inline-end:0.25rem;margin-inline-start:auto;opacity:0;transition:all var(--calcite-internal-animation-timing-medium) ease-in-out}.content:focus .hover-href-icon,.content:hover .hover-href-icon{inset-inline-end:-0.25rem;opacity:1}:host([hidden]){display:none}[hidden]{display:none}'},49744:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>l,c:()=>h,s:()=>r});var i=n(92078),o=n(27815);const s=new WeakMap,a=new WeakMap;function r(e){a.set(e,new Promise((t=>s.set(e,t))))}function c(e){s.get(e)()}function l(e){return a.get(e)}async function h(e){if(await l(e),(0,o.i)())return(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},71710:(e,t,n)=>{n.d(t,{c:()=>m,d:()=>p,s:()=>h,u:()=>u});var i=n(92078),o=n(36860),s=n(27815);const a={};function r(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function l(){}async function h(e){e.defaultMessages=await d(e,e.effectiveLocale),c(e)}async function d(e,t){if(!(0,s.i)())return{};const{el:n}=e,c=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return a[n]||(a[n]=fetch((0,i.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||r(),e.json()))).catch((()=>r()))),a[n]}((0,o.g)(t,"t9n"),c)}async function u(e,t){e.defaultMessages=await d(e,t),c(e)}function m(e){e.onMessagesChange=v}function p(e){e.onMessagesChange=l}function v(){c(this)}}}]);
//# sourceMappingURL=7466.d7f964e6.chunk.js.map