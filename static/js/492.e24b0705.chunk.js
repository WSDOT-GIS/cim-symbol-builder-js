/*! For license information please see 492.e24b0705.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[492],{70492:(e,t,i)=>{i.r(t),i.d(t,{calcite_input_text:()=>C});var n=i(92078),s=i(27515),a=i(16866),l=i(77903),o=i(90025),r=i(49744),c=i(36860),d=i(19797),h=i(80042),u=i(71710),p=i(90093),b=i(6887),f=i(31114);i(27815);const v="loader",m="clear-button",g="editing-enabled",x="inline-child",k="icon",y="prefix",w="suffix",I="element-wrapper",E="wrapper",z="action-wrapper",V="inputTextValidationMessage",T="action",C=class{constructor(e){(0,n.r)(this,e),this.calciteInternalInputTextFocus=(0,n.c)(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=(0,n.c)(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=(0,n.c)(this,"calciteInputTextInput",7),this.calciteInputTextChange=(0,n.c)(this,"calciteInputTextChange",7),this.previousValueOrigin="initial",this.mutationObserver=(0,d.c)("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&"Escape"===e.key&&(this.clearInputTextValue(e),e.preventDefault()),"Enter"===e.key&&(0,a.s)(this)&&e.preventDefault())},this.clearInputTextValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedValue&&(this.calciteInputTextChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=e.composedPath();t.includes(this.inputWrapperEl)&&!t.includes(this.actionWrapperEl)&&this.setFocus()},this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputTextKeyDownHandler=e=>{this.disabled||this.readOnly||"Enter"===e.key&&this.emitChangeIfUserModified()},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setInputValue=e=>{this.childEl&&(this.childEl.value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=e},this.setPreviousValue=e=>{this.previousValue=e},this.setValue=({committing:e=!1,nativeEvent:t,origin:i,previousValue:n,value:s})=>{if(this.setPreviousValue(n??this.value),this.previousValueOrigin=i,this.userChangedValue="user"===i&&s!==this.value,this.value=s,"direct"===i&&(this.setInputValue(s),this.setPreviousEmittedValue(s)),t){this.calciteInputTextInput.emit().defaultPrevented?this.value=this.previousValue:e&&this.emitChangeIfUserModified()}},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.label=void 0,this.loading=!1,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.autocomplete=void 0,this.pattern=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){(0,n.f)(this)}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(e,t){this.userChangedValue||this.setValue({origin:"direct",previousValue:t,value:e||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=(0,s.h)({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}connectedCallback(){(0,c.c)(this),(0,u.c)(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),(0,o.c)(this),(0,a.c)(this),this.mutationObserver?.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(a.i,this.onHiddenFormInputInput)}disconnectedCallback(){(0,o.d)(this),(0,a.d)(this),(0,c.d)(this),(0,u.d)(this),this.mutationObserver?.disconnect(),this.el.removeEventListener(a.i,this.onHiddenFormInputInput)}async componentWillLoad(){(0,r.s)(this),this.requestedIcon=(0,s.h)({},this.icon,"text"),await(0,u.s)(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value)}componentDidLoad(){(0,r.a)(this)}componentDidRender(){(0,l.u)(this)}async setFocus(){await(0,r.c)(this),this.childEl?.focus()}async selectText(){this.childEl?.select()}onLabelClick(){this.setFocus()}syncHiddenFormInput(e){(0,f.s)("text",this,e)}setDisabledAction(){const e=(0,s.e)(this.el,"action");e&&(this.disabled?(null==e.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}render(){const e=(0,s.g)(this.el),t=(0,n.h)("div",{key:"2ca041a581304297694d2219c52e3567ee39c4d9",class:v},(0,n.h)("calcite-progress",{key:"dfc05d226e43048d229f32e830ce2d1295d5691f",label:this.messages.loading,type:"indeterminate"})),i=(0,n.h)("button",{key:"39f2afe7d3280b4de0b4e8970266886a7119e5ba","aria-label":this.messages.clear,class:m,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{key:"c16107371113f3015fb8d259d7a0b227c4256f8f",icon:"x",scale:(0,p.g)(this.scale)})),r=(0,n.h)("calcite-icon",{key:"f5dc6921fbe712ebda049e863bc8b2372083a4d1",class:k,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:(0,p.g)(this.scale)}),c=(0,n.h)("div",{key:"b295b7306b9d121c47f1129f743429de65166bc3",class:y},this.prefixText),d=(0,n.h)("div",{key:"85c5d7ba85182aecc7bf5471c96ce96507953948",class:w},this.suffixText),u=(0,n.h)("input",{key:"b542aedd945ae0c3ec2a8e6bc2f2f22f5040636c","aria-errormessage":V,"aria-invalid":(0,s.t)("invalid"===this.status),"aria-label":(0,o.g)(this),autocomplete:this.autocomplete,autofocus:!!this.el.autofocus||null,class:{[g]:this.editingEnabled,[x]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),inputMode:this.el.inputMode||this.el.getAttribute("inputmode"),maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:!!this.required||null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value});return(0,n.h)(n.H,{key:"5a32059d58fc667ccef836b97c7dbf9c7d0456ba",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)(l.I,{key:"06f4302d0b97901f9f962f6b96460c517a0e415d",disabled:this.disabled},(0,n.h)("div",{key:"f160e1bebeee50b752d6f38fbc2517952fb92c94",class:{[E]:!0,[h.C.rtl]:"rtl"===e},ref:e=>this.inputWrapperEl=e},this.prefixText?c:null,(0,n.h)("div",{key:"72b7e6c7ffdd700779f0ab266050bf263a5912c5",class:I},u,this.isClearable?i:null,this.requestedIcon?r:null,this.loading?t:null),(0,n.h)("div",{key:"b359ff4cad35756cf2b4fd97087071cfb8cb6363",class:z,ref:e=>this.actionWrapperEl=e},(0,n.h)("slot",{key:"123667cff5ed426e732c9b5ef716147431d10ac5",name:T})),this.suffixText?d:null,(0,n.h)(a.H,{key:"fb9c298c3ad9b1b67f6e9e8cc2fb9e7b96f010dd",component:this})),this.validationMessage&&"invalid"===this.status?(0,n.h)(b.V,{icon:this.validationIcon,id:V,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};C.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"},49744:(e,t,i)=>{i.d(t,{a:()=>r,b:()=>c,c:()=>d,s:()=>o});var n=i(92078),s=i(27815);const a=new WeakMap,l=new WeakMap;function o(e){l.set(e,new Promise((t=>a.set(e,t))))}function r(e){a.get(e)()}function c(e){return l.get(e)}async function d(e){if(await c(e),(0,s.i)())return(0,n.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=492.e24b0705.chunk.js.map