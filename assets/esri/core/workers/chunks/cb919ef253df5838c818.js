"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[587],{68197:(t,e,r)=>{r.d(e,{A:()=>y});var o,i,s=r(40876),n=r(34727),l=r(56507);function a(t){return(0,n.qE)((0,l.Vr)(t),0,255)}function h(t,e,r){return t=Number(t),isNaN(t)?r:t<e?e:t>r?r:t}function p(t,e){const r=t.toString(16).padStart(2,"0");return e?r.slice(0,1):r}class u{static blendColors(t,e,r,o=new u){return o.r=Math.round(t.r+(e.r-t.r)*r),o.g=Math.round(t.g+(e.g-t.g)*r),o.b=Math.round(t.b+(e.b-t.b)*r),o.a=t.a+(e.a-t.a)*r,o._sanitize()}static fromRgb(t,e){const r=t.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);if(r){const t=r[2].split(/\s*,\s*/),o=r[1];if("rgb"===o&&3===t.length||"rgba"===o&&4===t.length){const r=t[0];if("%"===r.charAt(r.length-1)){const r=t.map((t=>2.56*parseFloat(t)));return 4===t.length&&(r[3]=parseFloat(t[3])),u.fromArray(r,e)}return u.fromArray(t.map((t=>parseFloat(t))),e)}if("hsl"===o&&3===t.length||"hsla"===o&&4===t.length)return u.fromArray((0,s.z$)(parseFloat(t[0]),parseFloat(t[1])/100,parseFloat(t[2])/100,parseFloat(t[3])),e)}return null}static fromHex(t,e=new u){if("#"!==t[0]||isNaN(Number(`0x${t.slice(1)}`)))return null;switch(t.length){case 4:case 5:{const r=parseInt(t.slice(1,2),16),o=parseInt(t.slice(2,3),16),i=parseInt(t.slice(3,4),16),s=5===t.length?15:parseInt(t.slice(4),16);return u.fromArray([r+16*r,o+16*o,i+16*i,(s+16*s)/255],e)}case 7:case 9:{const r=parseInt(t.slice(1,3),16),o=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16),s=7===t.length?255:parseInt(t.slice(7),16);return u.fromArray([r,o,i,s/255],e)}default:return null}}static fromArray(t,e=new u){return e._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(e.a)&&(e.a=1),e._sanitize()}static fromString(t,e){const r=(0,s.V6)(t)?(0,s.TS)(t):null;return r&&u.fromArray(r,e)||u.fromRgb(t,e)||u.fromHex(t,e)}static fromJSON(t){return null!=t?new u([t[0],t[1],t[2],(t[3]??255)/255]):void 0}static toUnitRGB(t){return null!=t?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return null!=t?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){return"string"==typeof t?u.fromString(t,this):Array.isArray(t)?u.fromArray(t,this):(this._set(t.r??0,t.g??0,t.b??0,t.a??1),t instanceof u||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(t){const e=t?.capitalize??!1,r=t?.digits??6,o=3===r||4===r,i=4===r||8===r,s=`#${p(this.r,o)}${p(this.g,o)}${p(this.b,o)}${i?p(Math.round(255*this.a),o):""}`;return e?s.toUpperCase():s}toCss(t=!1){const e=this.r+", "+this.g+", "+this.b;return t?`rgba(${e}, ${this.a})`:`rgb(${e})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=u.AlphaMode.ALWAYS){const e=a(this.r),r=a(this.g),o=a(this.b);return t===u.AlphaMode.ALWAYS||1!==this.a?[e,r,o,a(255*this.a)]:[e,r,o]}clone(){return new u(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(t){return null!=t&&t.r===this.r&&t.g===this.g&&t.b===this.b&&t.a===this.a}_sanitize(){return this.r=Math.round(h(this.r,0,255)),this.g=Math.round(h(this.g,0,255)),this.b=Math.round(h(this.b,0,255)),this.a=h(this.a,0,1),this}_set(t,e,r,o){this.r=t,this.g=e,this.b=r,this.a=o}}u.prototype.declaredClass="esri.Color",(i=(o=u||(u={})).AlphaMode||(o.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const y=u},36708:(t,e,r)=>{r.d(e,{C_:()=>y,OH:()=>m,Vh:()=>g,on:()=>u,pc:()=>S,wB:()=>a,z7:()=>h}),r(60999),r(5503);var o=r(37955),i=r(36563),s=r(97768),n=r(74887),l=r(14012);function a(t,e,r={}){return p(t,e,r,c)}function h(t,e,r={}){return p(t,e,r,d)}function p(t,e,r={},o){let i=null;const n=r.once?(t,r)=>{o(t)&&((0,s.xt)(i),e(t,r))}:(t,r)=>{o(t)&&e(t,r)};if(i=(0,l.Cn)(t,n,r.sync,r.equals),r.initial){const e=t();n(e,e)}return i}function u(t,e,r,n={}){let l=null,h=null,p=null;function u(){l&&h&&(h.remove(),n.onListenerRemove?.(l),l=null,h=null)}function y(t){n.once&&n.once&&(0,s.xt)(p),r(t)}const c=a(t,((t,r)=>{u(),(0,o.wb)(t)&&(l=t,h=(0,o.on)(t,e,y),n.onListenerAdd?.(t))}),{sync:n.sync,initial:!0});return p=(0,i.hA)((()=>{c.remove(),u()})),p}function y(t,e){return function(t,e,r){if((0,n.G4)(r))return Promise.reject((0,n.NK)());const o=t();if(e?.(o))return Promise.resolve(o);let l=null;function a(){l=(0,s.xt)(l)}return new Promise(((o,s)=>{l=(0,i.vE)([(0,n.u7)(r,(()=>{a(),s((0,n.NK)())})),p(t,(t=>{a(),o(t)}),{sync:!1,once:!0},e??c)])}))}(t,d,e)}function c(t){return!0}function d(t){return!!t}r(80559);const m={sync:!0},g={initial:!0},S={sync:!0,initial:!0}},65851:(t,e,r)=>{r.d(e,{A:()=>h});var o=r(90237),i=r(10107),s=(r(44208),r(53966),r(87811),r(40608)),n=r(31593),l=r(20378);let a=class extends l.A{constructor(t){super(t),this.outline=null,this.type=null}hash(){return`${this.type}.${this.outline?.hash()}`}};(0,o._)([(0,i.MZ)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":n.A}},json:{default:null,write:!0}})],a.prototype,"outline",void 0),(0,o._)([(0,i.MZ)({type:["simple-fill","picture-fill"],readOnly:!0})],a.prototype,"type",void 0),a=(0,o._)([(0,s.$)("esri.symbols.FillSymbol")],a);const h=a},11831:(t,e,r)=>{r.d(e,{A:()=>y});var o,i=r(90237),s=r(25482),n=r(90629),l=r(10107),a=r(79901),h=(r(87811),r(44208),r(40608)),p=r(5760);let u=o=class extends s.oY{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(t){return(0,n.cr)(t)}clone(){return new o({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};(0,i._)([(0,l.MZ)({type:p.h9,json:{default:"none",write:!0}})],u.prototype,"decoration",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],u.prototype,"family",void 0),(0,i._)([(0,l.MZ)({type:Number,json:{write:{overridePolicy:(t,e,r)=>({enabled:!r||!r.textSymbol3D})}}})],u.prototype,"size",void 0),(0,i._)([(0,a.w)("size")],u.prototype,"castSize",null),(0,i._)([(0,l.MZ)({type:p._R,json:{default:"normal",write:!0}})],u.prototype,"style",void 0),(0,i._)([(0,l.MZ)({type:p.NM,json:{default:"normal",write:!0}})],u.prototype,"weight",void 0),u=o=(0,i._)([(0,h.$)("esri.symbols.Font")],u);const y=u},89420:(t,e,r)=>{r.d(e,{A:()=>p});var o=r(90237),i=r(90629),s=r(10107),n=r(56507),l=(r(87811),r(44208),r(40608)),a=r(20378);let h=class extends a.A{constructor(t){super(t),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};(0,o._)([(0,s.MZ)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],h.prototype,"angle",void 0),(0,o._)([(0,s.MZ)({type:["simple-marker","picture-marker"],readOnly:!0})],h.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,cast:i.cr,json:{write:!0}})],h.prototype,"xoffset",void 0),(0,o._)([(0,s.MZ)({type:Number,cast:i.cr,json:{write:!0}})],h.prototype,"yoffset",void 0),(0,o._)([(0,s.MZ)({cast:t=>"auto"===t?t:(0,n.GB)((0,i.cr)(t)),json:{write:!0}})],h.prototype,"size",void 0),h=(0,o._)([(0,l.$)("esri.symbols.MarkerSymbol")],h);const p=h},94985:(t,e,r)=>{r.d(e,{A:()=>m});var o,i=r(90237),s=r(68197),n=r(66552),l=r(4718),a=r(10107),h=(r(44208),r(53966),r(93223)),p=r(40608),u=r(65851),y=r(31593);const c=new n.J({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let d=o=class extends u.A{constructor(...t){super(...t),this.color=new s.A([0,0,0,.25]),this.outline=new y.A,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(t,e,r){if(t&&"string"!=typeof t)return t;const o={};return t&&(o.style=t),e&&(o.outline=e),r&&(o.color=r),o}clone(){return new o({color:(0,l.o8)(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};(0,i._)([(0,a.MZ)()],d.prototype,"color",void 0),(0,i._)([(0,a.MZ)()],d.prototype,"outline",void 0),(0,i._)([(0,h.e)({esriSFS:"simple-fill"},{readOnly:!0})],d.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:c.apiValues,json:{read:c.read,write:c.write}})],d.prototype,"style",void 0),d=o=(0,i._)([(0,p.$)("esri.symbols.SimpleFillSymbol")],d);const m=d},31593:(t,e,r)=>{r.d(e,{A:()=>A});var o=r(90237),i=r(66552),s=r(4718),n=r(90629),l=r(10107),a=(r(44208),r(53966),r(93223)),h=r(40608),p=(r(87811),r(20378));let u=class extends p.A{constructor(t){super(t),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}};(0,o._)([(0,a.e)({esriSLS:"simple-line"},{readOnly:!0})],u.prototype,"type",void 0),(0,o._)([(0,l.MZ)({type:Number,cast:n.cr,json:{write:!0}})],u.prototype,"width",void 0),u=(0,o._)([(0,h.$)("esri.symbols.LineSymbol")],u);const y=u;var c,d=r(68197),m=r(25482),g=r(36005),S=r(43937),b=r(83213);let f=c=class extends m.oY{constructor(t){super(t),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(t,e,r,o){e[r]="web-map"===o?.origin?"arrow":t}set color(t){this._set("color",t)}readColor(t){return null!=t?.[0]?[t[0],t[1],t[2],t[3]/255]:t}writeColor(t,e,r,o){"web-map"===o?.origin||(e[r]=t)}clone(){return new c({color:(0,s.o8)(this.color),placement:this.placement,style:this.style})}hash(){return`${this.placement}.${this.color?.hash()}.${this.style}`}};(0,o._)([(0,l.MZ)({type:["begin","end","begin-end"],json:{write:!0}})],f.prototype,"placement",void 0),(0,o._)([(0,a.e)({"line-marker":"line-marker"},{readOnly:!0}),(0,l.MZ)({json:{origins:{"web-map":{write:!1}}}})],f.prototype,"type",void 0),(0,o._)([(0,l.MZ)({type:b.z})],f.prototype,"style",void 0),(0,o._)([(0,S.K)("style")],f.prototype,"writeStyle",null),(0,o._)([(0,l.MZ)({type:d.A,value:null,json:{write:{allowNull:!0}}})],f.prototype,"color",null),(0,o._)([(0,g.w)("color")],f.prototype,"readColor",null),(0,o._)([(0,S.K)("color")],f.prototype,"writeColor",null),f=c=(0,o._)([(0,h.$)("esri.symbols.LineSymbolMarker")],f);const w=f;var _;const v=new i.J({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let M=_=class extends y{constructor(...t){super(...t),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(t,e,r,o,i,s){if(t&&"string"!=typeof t)return t;const l={};return null!=t&&(l.style=t),null!=e&&(l.color=e),null!=r&&(l.width=(0,n.cr)(r)),null!=o&&(l.cap=o),null!=i&&(l.join=i),null!=s&&(l.miterLimit=(0,n.cr)(s)),l}clone(){return new _({color:(0,s.o8)(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:this.marker?.clone()})}hash(){return`${super.hash()}.${this.color?.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${this.marker?.hash()}`}};(0,o._)([(0,a.e)({esriSLS:"simple-line"},{readOnly:!0})],M.prototype,"type",void 0),(0,o._)([(0,l.MZ)({type:v.apiValues,json:{read:v.read,write:v.write}})],M.prototype,"style",void 0),(0,o._)([(0,l.MZ)({type:["butt","round","square"],json:{write:{overridePolicy:(t,e,r)=>({enabled:"round"!==t&&null==r?.origin})}}})],M.prototype,"cap",void 0),(0,o._)([(0,l.MZ)({type:["miter","round","bevel"],json:{write:{overridePolicy:(t,e,r)=>({enabled:"round"!==t&&null==r?.origin})}}})],M.prototype,"join",void 0),(0,o._)([(0,l.MZ)({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":w}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],M.prototype,"marker",void 0),(0,o._)([(0,l.MZ)({type:Number,json:{read:!1,write:!1}})],M.prototype,"miterLimit",void 0),M=_=(0,o._)([(0,h.$)("esri.symbols.SimpleLineSymbol")],M);const A=M},53930:(t,e,r)=>{r.d(e,{A:()=>S});var o,i=r(90237),s=r(68197),n=r(66552),l=r(4718),a=r(90629),h=r(10107),p=(r(44208),r(53966),r(93223)),u=r(40608),y=r(43937),c=r(89420),d=r(31593);const m=new n.J({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let g=o=class extends c.A{constructor(...t){super(...t),this.color=new s.A([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new d.A}normalizeCtorArgs(t,e,r,o){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.style=t),null!=e&&(i.size=(0,a.cr)(e)),r&&(i.outline=r),o&&(i.color=o),i}writeColor(t,e){t&&"x"!==this.style&&"cross"!==this.style&&(e.color=t.toJSON()),null===t&&(e.color=null)}set path(t){this.style="path",this._set("path",t)}clone(){return new o({angle:this.angle,color:(0,l.o8)(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${this.outline?.hash()}`}};(0,i._)([(0,h.MZ)()],g.prototype,"color",void 0),(0,i._)([(0,y.K)("color")],g.prototype,"writeColor",null),(0,i._)([(0,p.e)({esriSMS:"simple-marker"},{readOnly:!0})],g.prototype,"type",void 0),(0,i._)([(0,h.MZ)()],g.prototype,"size",void 0),(0,i._)([(0,h.MZ)({type:m.apiValues,json:{read:m.read,write:m.write}})],g.prototype,"style",void 0),(0,i._)([(0,h.MZ)({type:String,json:{write:!0}})],g.prototype,"path",null),(0,i._)([(0,h.MZ)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":d.A}},json:{default:null,write:!0}})],g.prototype,"outline",void 0),g=o=(0,i._)([(0,u.$)("esri.symbols.SimpleMarkerSymbol")],g);const S=g},20378:(t,e,r)=>{r.d(e,{A:()=>c});var o=r(90237),i=r(68197),s=r(66552),n=r(25482),l=r(10107),a=(r(44208),r(53966),r(87811),r(36005)),h=r(40608);const p=new s.J({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let u=0,y=class extends n.oY{constructor(t){super(t),this.id="sym"+u++,this.type=null,this.color=new i.A([0,0,0,1])}readColor(t){return null!=t?.[0]?[t[0],t[1],t[2],t[3]/255]:t}async collectRequiredFields(t,e){}hash(){return JSON.stringify(this.toJSON())}clone(){}};(0,o._)([(0,l.MZ)({type:p.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:p.write}}})],y.prototype,"type",void 0),(0,o._)([(0,l.MZ)({type:i.A,json:{write:{allowNull:!0}}})],y.prototype,"color",void 0),(0,o._)([(0,a.w)("color")],y.prototype,"readColor",null),y=(0,o._)([(0,h.$)("esri.symbols.Symbol")],y);const c=y},68249:(t,e,r)=>{r.d(e,{A:()=>S});var o,i=r(90237),s=r(68197),n=r(4718),l=r(90629),a=r(10107),h=r(79901),p=r(93223),u=r(40608),y=r(43937),c=r(11831),d=r(20378),m=r(5760);let g=o=class extends d.A{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new c.A,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment="baseline",this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1}normalizeCtorArgs(t,e,r){if(t&&"string"!=typeof t)return t;const o={};return t&&(o.text=t),e&&(o.font=e),r&&(o.color=r),o}writeLineWidth(t,e,r,o){o&&"string"!=typeof o?o.origin:e[r]=t}castLineWidth(t){return(0,l.cr)(t)}writeLineHeight(t,e,r,o){o&&"string"!=typeof o?o.origin:e[r]=t}clone(){return new o({angle:this.angle,backgroundColor:(0,n.o8)(this.backgroundColor),borderLineColor:(0,n.o8)(this.borderLineColor),borderLineSize:this.borderLineSize,color:(0,n.o8)(this.color),font:this.font&&this.font.clone(),haloColor:(0,n.o8)(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${this.backgroundColor?.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color?.hash()}.${this.font&&this.font.hash()}.${this.haloColor?.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};(0,i._)([(0,a.MZ)({type:s.A,json:{write:!0}})],g.prototype,"backgroundColor",void 0),(0,i._)([(0,a.MZ)({type:s.A,json:{write:!0}})],g.prototype,"borderLineColor",void 0),(0,i._)([(0,a.MZ)({type:Number,json:{write:!0},cast:l.cr})],g.prototype,"borderLineSize",void 0),(0,i._)([(0,a.MZ)({type:c.A,json:{write:!0}})],g.prototype,"font",void 0),(0,i._)([(0,a.MZ)({...m.rM,json:{write:!0}})],g.prototype,"horizontalAlignment",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"kerning",void 0),(0,i._)([(0,a.MZ)({type:s.A,json:{write:!0}})],g.prototype,"haloColor",void 0),(0,i._)([(0,a.MZ)({type:Number,cast:l.cr,json:{write:!0}})],g.prototype,"haloSize",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"rightToLeft",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"rotated",void 0),(0,i._)([(0,a.MZ)({type:String,json:{write:!0}})],g.prototype,"text",void 0),(0,i._)([(0,p.e)({esriTS:"text"},{readOnly:!0})],g.prototype,"type",void 0),(0,i._)([(0,a.MZ)({...m.x0,json:{write:!0}})],g.prototype,"verticalAlignment",void 0),(0,i._)([(0,a.MZ)({type:Number,cast:l.cr,json:{write:!0}})],g.prototype,"xoffset",void 0),(0,i._)([(0,a.MZ)({type:Number,cast:l.cr,json:{write:!0}})],g.prototype,"yoffset",void 0),(0,i._)([(0,a.MZ)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],g.prototype,"angle",void 0),(0,i._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"width",void 0),(0,i._)([(0,a.MZ)({type:Number})],g.prototype,"lineWidth",void 0),(0,i._)([(0,y.K)("lineWidth")],g.prototype,"writeLineWidth",null),(0,i._)([(0,h.w)("lineWidth")],g.prototype,"castLineWidth",null),(0,i._)([(0,a.MZ)(m.Tb)],g.prototype,"lineHeight",void 0),(0,i._)([(0,y.K)("lineHeight")],g.prototype,"writeLineHeight",null),g=o=(0,i._)([(0,u.$)("esri.symbols.TextSymbol")],g);const S=g},83213:(t,e,r)=>{r.d(e,{x:()=>o,z:()=>i});const o=["begin","end","begin-end"],i=["arrow","circle","square","diamond","cross","x"]},5760:(t,e,r)=>{r.d(e,{NM:()=>l,Tb:()=>a,_R:()=>n,h9:()=>s,rM:()=>h,x0:()=>p,y7:()=>u});var o=r(34727),i=r(56507);const s=["none","underline","line-through"],n=["normal","italic","oblique"],l=["normal","lighter","bold","bolder"],a={type:Number,cast:t=>{const e=(0,i.GB)(t);return 0===e?1:(0,o.qE)(e,.1,4)},nonNullable:!0},h={type:["left","right","center"],nonNullable:!0},p={type:["baseline","top","middle","bottom"],nonNullable:!0},u=8}}]);