(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[231],{991:function(e,t,s){"use strict";s.r(t),s.d(t,"Blur",(function(){return o}));s(545);var r=s(546),i=(s(5),s(544),s(543),s(549),s(548),s(542),s(547),s(654));const a=[1,0],n=[0,1];class o{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,s){const{context:r}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new i.a(r,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,t,n):this._radialBlur(e,t),o.unbind()}_gaussianBlur(e,t,s){const{context:r,state:i,painter:o,pixelRatio:u}=e,{size:l}=i,{materialManager:d}=o,p=this._programDesc,c=this._quad,h=[Math.round(u*l[0]),Math.round(u*l[1])],b=this._blurFBO,_=d.getProgram(e,p.gaussianBlur,[{name:"radius",value:Math.ceil(s)}]);r.useProgram(_),r.setBlendingEnabled(!1),r.bindFramebuffer(b),r.bindTexture(t.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",h),_.setUniform2fv("u_direction",a),_.setUniform1f("u_sigma",s),c.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(b.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",n),c.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:s,painter:r}=e,{materialManager:i}=r,a=this._programDesc,n=this._quad,o=this._blurFBO;s.bindFramebuffer(o);const u=i.getProgram(e,a.radialBlur);s.useProgram(u),s.setBlendingEnabled(!1),s.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),s.bindFramebuffer(t),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setBlendingEnabled(!0);const l=i.getProgram(e,a.blit);s.useProgram(l),s.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),s.setBlendFunction(1,771),n.draw()}_createOrResizeResources(e){const{context:t,state:s,pixelRatio:i}=e,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new r.a(t,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}}}]);
//# sourceMappingURL=231.b6fbe76f.chunk.js.map