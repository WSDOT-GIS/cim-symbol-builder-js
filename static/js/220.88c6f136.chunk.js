(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[220],{907:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m}));s(56);var r=s(3),o=s(618),i=s(772),c=s(600),l=s(630),n=s(848),a=s(34);class m{convertVectorFieldData(e){const t=o.a.fromJSON(e.pixelBlock),s=Object(l.a)(t,e.type);return Promise.resolve(Object(r.j)(s)&&s.toJSON())}async decode(e){const t=await Object(i.a)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=o.a.fromJSON(e.pixelBlock),e.extent=e.extent?a.a.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(Object(r.j)(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=n.a.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(o.a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(Object(r.j)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=Object(c.g)(o.a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=Object(c.o)(o.a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((e,s)=>{t.set(s,null==e?void 0:e.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(e=>e?new o.a(e):null),s=Object(c.k)(t,e.srcMosaicSize,null,null,e.alignmentInfo);if(!e.coefs)return s&&s.toJSON();const r=Object(c.a)(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return r&&r.toJSON()}}}}]);
//# sourceMappingURL=220.88c6f136.chunk.js.map