(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[234],{1005:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return o}));var i=t(0),r=t(2),a=t(18),l=(t(12),t(4),t(8),t(5),t(112),t(3)),n=t(392),y=t(887);let u=class extends y.default{initialize(){this.handles.add([Object(a.a)(this.view,"viewpoint",()=>this._update())])}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,i=this.layer.sublayers.filter(e=>function(e,s){return!e.visible||0!==e.minScale&&s>e.minScale||0!==e.maxScale&&s<e.maxScale}(e,t)).map(e=>e.subtypeCode);if(!i.length)return s;s=Object(r.k)(s)?s:(new n.a).toJSON();const a=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return s.where=s.where?`(${s.where}) AND (${a})`:a,s}_setLayersForFeature(e){const s=this.layer.fieldsIndex.get(this.layer.subtypeField),t=e.attributes[s.name],i=this.layer.sublayers.find(e=>e.subtypeCode===t);e.layer=i,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null}))},s=this.layer.sublayers.map(e=>e.subtypeCode).join(","),t=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${s})`:"1=2";let i=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return i+=t,{...super._createSchemaConfig(),...e,definitionExpression:i}}};u=Object(i.a)([Object(l.a)("esri.views.2d.layers.SubtypeGroupLayerView2D")],u);const o=u}}]);
//# sourceMappingURL=234.593e956a.chunk.js.map