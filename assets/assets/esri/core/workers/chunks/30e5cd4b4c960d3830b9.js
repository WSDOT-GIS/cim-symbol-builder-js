"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1773],{51773:(t,e,o)=>{o.d(e,{Z:()=>$});var i=o(43697),r=o(81049),s=o(10736),n=o(22974),l=o(92604),a=o(95330),p=o(5600),d=o(90578),h=(o(80442),o(71715)),c=o(52525),y=o(30556),u=o(75215),m=o(69165),f=o(84649),v=o(63801),_=o(48074),w=o(9190),b=o(10214),g=o(44951);const C={base:null,key:"type",typeMap:{attachment:f.Z,media:b.Z,text:g.Z,field:w.Z}};var I,x=o(11223),j=o(422);let F=I=class extends s.wq{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new I({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"returnTopmostRaster",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"showNoDataRecords",void 0),F=I=(0,i._)([(0,c.j)("esri.popup.LayerOptions")],F);var Z,T=F,S=o(44729);let A=Z=class extends s.wq{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new Z({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,n.d9)(this.orderByFields):null})}};(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"showRelatedRecords",void 0),(0,i._)([(0,p.Cb)({type:[S.Z],json:{write:!0}})],A.prototype,"orderByFields",void 0),A=Z=(0,i._)([(0,c.j)("esri.popup.RelatedRecordsInfo")],A);var O,N=A,R=o(79742),M=o(18855),E=o(10699);let L=O=class extends((0,E.I)(M.Z)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new O({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};(0,i._)([(0,p.Cb)()],L.prototype,"active",void 0),(0,i._)([(0,p.Cb)()],L.prototype,"className",void 0),(0,i._)([(0,p.Cb)()],L.prototype,"disabled",void 0),(0,i._)([(0,p.Cb)()],L.prototype,"id",void 0),(0,i._)([(0,p.Cb)()],L.prototype,"indicator",void 0),(0,i._)([(0,p.Cb)()],L.prototype,"title",void 0),(0,i._)([(0,p.Cb)()],L.prototype,"type",void 0),(0,i._)([(0,p.Cb)()],L.prototype,"visible",void 0),L=O=(0,i._)([(0,c.j)("esri.support.actions.ActionBase")],L);var D,B=L;let J=D=class extends B{constructor(t){super(t),this.image=null,this.type="button"}clone(){return new D({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};(0,i._)([(0,p.Cb)()],J.prototype,"image",void 0),J=D=(0,i._)([(0,c.j)("esri.support.Action.ActionButton")],J);var q,Y=J;let k=q=class extends B{constructor(t){super(t),this.image=null,this.type="toggle",this.value=!1}clone(){return new q({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};(0,i._)([(0,p.Cb)()],k.prototype,"image",void 0),(0,i._)([(0,p.Cb)()],k.prototype,"value",void 0),k=q=(0,i._)([(0,c.j)("esri.support.Action.ActionToggle")],k);var U,V=k;const P=r.Z.ofType({key:"type",defaultKeyValue:"button",base:B,typeMap:{button:Y,toggle:V}}),z={base:v.Z,key:"type",typeMap:{media:b.Z,custom:_.Z,text:g.Z,attachments:f.Z,fields:w.Z}},G="esri.PopupTemplate",K=l.Z.getLogger(G),H=["attachments","fields","media","text"];let X=U=class extends s.wq{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(t){return Array.isArray(t)?t.map((t=>(0,u.N7)(z,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||(0,a.y8)(t)?t:(K.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,i){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>-1!==H.indexOf(t.type))).map((t=>t&&t.toJSON(i))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e)}))):e.description=t}writeFieldInfos(t,e,o,i){const{content:r}=this,s=Array.isArray(r)?r:null;if(t){const o=s?s.filter((t=>"fields"===t.type)):[],r=o.length&&o.every((t=>{var e;return null==(e=t.fieldInfos)?void 0:e.length}));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(i);return r&&(e.visible=!1),e}))}if(s)for(const t of s)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,o,i){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(i)}writeTitle(t,e){e.title=t||""}clone(){const{actions:t}=this,e=t?(0,n.d9)(t.toArray()):[];return new U({actions:e,content:Array.isArray(this.content)?(0,n.d9)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?(0,n.d9)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?(0,n.d9)(this.fieldInfos):null,layerOptions:this.layerOptions?(0,n.d9)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?(0,n.d9)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?(0,n.d9)(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){await this._collectExpressionInfoFields(t,e,this.expressionInfos),(0,m.gd)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=(0,n.d9)(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t)})):e.fieldInfos=o}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=(0,n.d9)(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const i={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||i.mediaInfos||(o.mediaInfos=e,i.mediaInfos=!0),b.Z.fromJSON(o)):"text"===o.type?(o.text||!t||i.description||(o.text=t,i.description=!0),g.Z.fromJSON(o)):"attachments"===o.type?f.Z.fromJSON(o):"fields"===o.type?w.Z.fromJSON(o):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const i=[];return t?i.push(new g.Z({text:t})):i.push(new w.Z),Array.isArray(e)&&e.length&&i.push(b.Z.fromJSON({mediaInfos:e})),o&&i.push(f.Z.fromJSON({displayType:"list"})),i.length?i:t}_getContentElementFields(t){return t&&"attachments"!==t.type?"custom"===t.type?t.outFields||[]:"fields"===t.type?this._getFieldInfoFields(t.fieldInfos||this.fieldInfos):"media"===t.type?(t.mediaInfos||[]).reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[]):"text"===t.type?this._extractFieldNames(t.text):void 0:[]}_getMediaInfoFields(t){const{caption:e,title:o,value:i}=t,r=i||{},{fields:s=[],normalizeField:n,tooltipField:l,sourceURL:a,linkURL:p}=r,d=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(a),...this._extractFieldNames(p),...s];return n&&d.push(n),l&&d.push(l),d}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>(0,m.io)(t,e,o.expression))))}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>-1===t.indexOf("relationships/")&&-1===t.indexOf("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:i}=t,r="button"===i||"toggle"===i?t.image:"";return[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(r)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[];const e=t.match(/{[^}]*}/g);if(!e)return[];const o=/\{(\w+):.+\}/,i=e.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(o,"{$1}")));return i?i.map((t=>t.slice(1,-1))):[]}};(0,i._)([(0,p.Cb)({type:P})],X.prototype,"actions",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"content",void 0),(0,i._)([(0,d.p)("content")],X.prototype,"castContent",null),(0,i._)([(0,h.r)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],X.prototype,"readContent",null),(0,i._)([(0,y.c)("content",{popupElements:{type:r.Z.ofType(C)},showAttachments:{type:Boolean},mediaInfos:{type:r.Z.ofType(R.V)},description:{type:String}})],X.prototype,"writeContent",null),(0,i._)([(0,p.Cb)({type:[x.Z],json:{write:!0}})],X.prototype,"expressionInfos",void 0),(0,i._)([(0,p.Cb)({type:[j.Z]})],X.prototype,"fieldInfos",void 0),(0,i._)([(0,y.c)("fieldInfos")],X.prototype,"writeFieldInfos",null),(0,i._)([(0,p.Cb)({type:T})],X.prototype,"layerOptions",void 0),(0,i._)([(0,y.c)("layerOptions")],X.prototype,"writeLayerOptions",null),(0,i._)([(0,p.Cb)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],X.prototype,"lastEditInfoEnabled",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"outFields",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"overwriteActions",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"returnGeometry",void 0),(0,i._)([(0,p.Cb)({json:{type:String}})],X.prototype,"title",void 0),(0,i._)([(0,y.c)("title")],X.prototype,"writeTitle",null),(0,i._)([(0,p.Cb)({type:N,json:{write:!0}})],X.prototype,"relatedRecordsInfo",void 0),X=U=(0,i._)([(0,c.j)(G)],X);var $=X},44422:(t,e,o)=>{o.d(e,{B:()=>r});var i=o(5600);function r(t,e){const o=e?{...e,source:t}:t;return(0,i.Cb)({aliasOf:o})}},11223:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(10736),n=o(5600),l=(o(80442),o(75215),o(92604),o(52525));let a=i=class extends s.wq{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new i({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],a.prototype,"name",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],a.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],a.prototype,"expression",void 0),(0,r._)([(0,n.Cb)({type:["string","number"],json:{write:!0}})],a.prototype,"returnType",void 0),a=i=(0,r._)([(0,l.j)("esri.popup.ExpressionInfo")],a);var p=a},422:(t,e,o)=>{o.d(e,{Z:()=>y});var i,r=o(43697),s=o(35454),n=o(10736),l=o(22974),a=o(5600),p=(o(75215),o(80442),o(92604),o(36030)),d=o(52525),h=o(63061);let c=i=class extends n.wq{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new i({fieldName:this.fieldName,format:this.format?(0,l.d9)(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),(0,r._)([(0,a.Cb)({type:h.Z,json:{write:!0}})],c.prototype,"format",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0,default:!1}})],c.prototype,"isEditable",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,r._)([(0,p.J)(new s.Xn({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],c.prototype,"stringFieldOption",void 0),(0,r._)([(0,a.Cb)({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],c.prototype,"statisticType",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"tooltip",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"visible",void 0),c=i=(0,r._)([(0,d.j)("esri.popup.FieldInfo")],c);var y=c},84649:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(63801);let a=i=class extends l.Z{constructor(t){super(t),this.description=null,this.displayType=null,this.title=null,this.type="attachments"}clone(){return new i({description:this.description,displayType:this.displayType,title:this.title})}};(0,r._)([(0,s.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],a.prototype,"description",void 0),(0,r._)([(0,s.Cb)({type:["preview","list"],json:{write:!0}})],a.prototype,"displayType",void 0),(0,r._)([(0,s.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],a.prototype,"title",void 0),(0,r._)([(0,s.Cb)({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=i=(0,r._)([(0,n.j)("esri.popup.content.AttachmentsContent")],a);var p=a},41463:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(50379),a=o(87102);let p=i=class extends l.Z{constructor(t){super(t),this.type="bar-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:a.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.BarChartMediaInfo")],p);var d=p},87131:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(50379),a=o(87102);let p=i=class extends l.Z{constructor(t){super(t),this.type="column-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:a.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.ColumnChartMediaInfo")],p);var d=p},63801:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(43697),r=o(10736),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525));let l=class extends r.wq{constructor(t){super(t),this.type=null}};(0,i._)([(0,s.Cb)({type:["attachments","custom","fields","media","text"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=(0,i._)([(0,n.j)("esri.popup.content.Content")],l);var a=l},48074:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(22974),n=o(5600),l=(o(75215),o(80442),o(92604),o(52525)),a=o(63801);let p=i=class extends a.Z{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new i({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?(0,s.d9)(this.outFields):null})}};(0,r._)([(0,n.Cb)()],p.prototype,"creator",void 0),(0,r._)([(0,n.Cb)()],p.prototype,"destroyer",void 0),(0,r._)([(0,n.Cb)()],p.prototype,"outFields",void 0),(0,r._)([(0,n.Cb)({type:["custom"],readOnly:!0})],p.prototype,"type",void 0),p=i=(0,r._)([(0,l.j)("esri.popup.content.CustomContent")],p);var d=p},9190:(t,e,o)=>{o.d(e,{Z:()=>c});var i,r=o(43697),s=o(22974),n=o(5600),l=(o(75215),o(80442),o(92604),o(52525)),a=o(30556),p=o(422),d=o(63801);let h=i=class extends d.Z{constructor(t){super(t),this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,e){e.fieldInfos=t&&t.map((t=>t.toJSON()))}clone(){return new i({description:this.description,fieldInfos:Array.isArray(this.fieldInfos)?(0,s.d9)(this.fieldInfos):null,title:this.title})}};(0,r._)([(0,n.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],h.prototype,"description",void 0),(0,r._)([(0,n.Cb)({type:[p.Z]})],h.prototype,"fieldInfos",void 0),(0,r._)([(0,a.c)("fieldInfos")],h.prototype,"writeFieldInfos",null),(0,r._)([(0,n.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],h.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=i=(0,r._)([(0,l.j)("esri.popup.content.FieldsContent")],h);var c=h},13151:(t,e,o)=>{o.d(e,{Z:()=>y});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(35320),a=o(10736);let p=i=class extends a.wq{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new i({linkURL:this.linkURL,sourceURL:this.sourceURL})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],p.prototype,"linkURL",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],p.prototype,"sourceURL",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.support.ImageMediaInfoValue")],p);var d,h=p;let c=d=class extends l.Z{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new d({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:Number,json:{write:!0}})],c.prototype,"refreshInterval",void 0),(0,r._)([(0,s.Cb)({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:h,json:{write:!0}})],c.prototype,"value",void 0),c=d=(0,r._)([(0,n.j)("esri.popup.content.ImageMediaInfo")],c);var y=c},55869:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(50379),a=o(87102);let p=i=class extends l.Z{constructor(t){super(t),this.type="line-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:a.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.LineChartMediaInfo")],p);var d=p},10214:(t,e,o)=>{o.d(e,{Z:()=>_});var i,r=o(43697),s=o(22974),n=o(5600),l=(o(75215),o(80442),o(92604),o(71715)),a=o(52525),p=o(30556),d=o(41463),h=o(87131),c=o(63801),y=o(13151),u=o(55869),m=o(13353),f=o(79742);let v=i=class extends c.Z{constructor(t){super(t),this.activeMediaInfoIndex=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map((t=>"image"===t.type?y.Z.fromJSON(t):"barchart"===t.type?d.Z.fromJSON(t):"columnchart"===t.type?h.Z.fromJSON(t):"linechart"===t.type?u.Z.fromJSON(t):"piechart"===t.type?m.Z.fromJSON(t):void 0)).filter(Boolean)}writeMediaInfos(t,e){e.mediaInfos=t&&t.map((t=>t.toJSON()))}clone(){return new i({activeMediaInfoIndex:this.activeMediaInfoIndex,description:this.description,mediaInfos:this.mediaInfos?(0,s.d9)(this.mediaInfos):null,title:this.title})}};(0,r._)([(0,n.Cb)()],v.prototype,"activeMediaInfoIndex",void 0),(0,r._)([(0,n.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],v.prototype,"description",void 0),(0,r._)([(0,n.Cb)({types:[f.V]})],v.prototype,"mediaInfos",void 0),(0,r._)([(0,l.r)("mediaInfos")],v.prototype,"readMediaInfos",null),(0,r._)([(0,p.c)("mediaInfos")],v.prototype,"writeMediaInfos",null),(0,r._)([(0,n.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],v.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=i=(0,r._)([(0,a.j)("esri.popup.content.MediaContent")],v);var _=v},13353:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(50379),a=o(87102);let p=i=class extends l.Z{constructor(t){super(t),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:a.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.PieChartMediaInfo")],p);var d=p},44951:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(63801);let a=i=class extends l.Z{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new i({text:this.text})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],a.prototype,"text",void 0),(0,r._)([(0,s.Cb)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=i=(0,r._)([(0,n.j)("esri.popup.content.TextContent")],a);var p=a},50379:(t,e,o)=>{o.d(e,{Z:()=>_});var i,r=o(43697),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525)),l=o(35320),a=o(10736),p=o(22974),d=o(18855),h=o(44422);let c=i=class extends d.Z{constructor(t){super(t),this.tooltip=null,this.value=null,this.x=null,this.y=null}clone(){return new i({tooltip:this.tooltip,value:this.value})}};(0,r._)([(0,s.Cb)()],c.prototype,"tooltip",void 0),(0,r._)([(0,s.Cb)()],c.prototype,"value",void 0),(0,r._)([(0,h.B)("value")],c.prototype,"x",void 0),(0,r._)([(0,h.B)("tooltip")],c.prototype,"y",void 0),c=i=(0,r._)([(0,n.j)("esri.popup.content.support.ChartMediaInfoValueSeries")],c);var y,u=c;let m=y=class extends a.wq{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new y({fields:(0,p.d9)(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};(0,r._)([(0,s.Cb)({type:[String],json:{write:!0}})],m.prototype,"fields",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"normalizeField",void 0),(0,r._)([(0,s.Cb)({type:[u],json:{read:!1}})],m.prototype,"series",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"tooltipField",void 0),m=y=(0,r._)([(0,n.j)("esri.popup.content.support.ChartMediaInfoValue")],m);var f=m;let v=class extends l.Z{constructor(t){super(t),this.type=null,this.value=null}};(0,r._)([(0,s.Cb)({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],v.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:f,json:{write:!0}})],v.prototype,"value",void 0),v=(0,r._)([(0,n.j)("esri.popup.content.mixins.ChartMediaInfo")],v);var _=v},35320:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(43697),r=o(10736),s=o(5600),n=(o(80442),o(75215),o(92604),o(52525));let l=class extends r.wq{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"altText",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"caption",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,i._)([(0,s.Cb)({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=(0,i._)([(0,n.j)("esri.popup.content.mixins.MediaInfo")],l);var a=l},87102:(t,e,o)=>{o.d(e,{l:()=>i});const i=(0,o(35454).wY)()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"})},79742:(t,e,o)=>{o.d(e,{V:()=>a});var i=o(41463),r=o(87131),s=o(13151),n=o(55869),l=o(13353);const a={base:o(35320).Z,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i.Z,"column-chart":r.Z,"line-chart":n.Z,"pie-chart":l.Z,image:s.Z}}},63061:(t,e,o)=>{o.d(e,{Z:()=>u});var i=o(43697);const r=(0,o(35454).wY)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});r.toJSON.bind(r),r.fromJSON.bind(r);var s,n=o(10736),l=o(5600),a=(o(80442),o(75215)),p=(o(92604),o(36030)),d=o(52525),h=o(90344),c=o(18848);let y=s=class extends n.wq{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new s({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?(0,h.p6)(t,{...(0,h.Ze)(this.dateFormat),...this.dateTimeFormatOptions}):(0,c.uf)(t,(0,c.sh)(this))}};(0,i._)([(0,p.J)(r)],y.prototype,"dateFormat",void 0),(0,i._)([(0,l.Cb)({type:Object,json:{read:!1}})],y.prototype,"dateTimeFormatOptions",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"digitSeparator",void 0),(0,i._)([(0,l.Cb)({type:a.z8,json:{write:!0}})],y.prototype,"places",void 0),y=s=(0,i._)([(0,d.j)("esri.popup.support.FieldInfoFormat")],y);var u=y},44729:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(10736),n=o(5600),l=(o(80442),o(75215),o(92604),o(52525));let a=i=class extends s.wq{constructor(t){super(t),this.field=null,this.order=null}clone(){return new i({field:this.field,order:this.order})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],a.prototype,"field",void 0),(0,r._)([(0,n.Cb)({type:["asc","desc"],json:{write:!0}})],a.prototype,"order",void 0),a=i=(0,r._)([(0,l.j)("esri.popup.support.RelatedRecordsInfoFieldOrder")],a);var p=a}}]);