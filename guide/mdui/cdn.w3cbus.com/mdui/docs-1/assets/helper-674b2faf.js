import{D as s}from"Demo-5062ffc5.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/Demo-5062ffc5.js*/;import{T as v,_ as o}from"MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js*/;import{d as m,c as n,a as c,b as d,g as e,w as t,e as i,F as u,o as h,t as l,_ as r}from"index-15cb1481.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/index-15cb1481.js*/;const p={class:"chapter"},x=m({__name:"helper",setup(g){return(b,a)=>(h(),n(u,null,[c(v),a[22]||(a[22]=d("h1",{class:"title mdui-text-color-theme"},"辅助类",-1)),c(o,{class:"first-screen"}),a[23]||(a[23]=e('<nav class="toc mdui-text-color-theme" data-v-25ac237d><ul data-v-25ac237d><li data-v-25ac237d><a href="#spacing" data-v-25ac237d>边距</a></li><li data-v-25ac237d><a href="#float" data-v-25ac237d>快速浮动</a></li><li data-v-25ac237d><a href="#center" data-v-25ac237d>水平居中</a></li><li data-v-25ac237d><a href="#valign" data-v-25ac237d>垂直居中</a></li><li data-v-25ac237d><a href="#text-align" data-v-25ac237d>水平对齐方式</a></li><li data-v-25ac237d><a href="#text-transform" data-v-25ac237d>文本大小写转换</a></li><li data-v-25ac237d><a href="#text-truncate" data-v-25ac237d>文本自动截断</a></li><li data-v-25ac237d><a href="#clearfix" data-v-25ac237d>清除浮动</a></li><li data-v-25ac237d><a href="#visible" data-v-25ac237d>隐藏内容</a></li><li data-v-25ac237d><a href="#responsive-utilities" data-v-25ac237d>响应式工具</a></li></ul></nav>',1)),d("div",p,[a[14]||(a[14]=e(`<div class="mdui-typo" data-v-25ac237d><h2 class="chapter-title chapter-title-first mdui-text-color-theme" data-v-25ac237d> 边距 <a class="anchor" id="spacing" data-v-25ac237d></a></h2></div><div class="mdui-typo" data-v-25ac237d><p data-v-25ac237d> 这一系列工具类可以为元素添加 <code data-v-25ac237d>margin</code> 和 <code data-v-25ac237d>padding</code>，默认值都是 8px 的倍数。 </p><p data-v-25ac237d>类名格式为：<code data-v-25ac237d>.mdui-{属性}-{方向}-{大小}</code></p><p data-v-25ac237d>属性：</p><ul data-v-25ac237d><li data-v-25ac237d><code data-v-25ac237d>m</code> - 设置 <code data-v-25ac237d>margin</code></li><li data-v-25ac237d><code data-v-25ac237d>p</code> - 设置 <code data-v-25ac237d>padding</code></li></ul><p data-v-25ac237d>方向：</p><ul data-v-25ac237d><li data-v-25ac237d><code data-v-25ac237d>t</code> - 设置 <code data-v-25ac237d>margin-top</code> 或 <code data-v-25ac237d>padding-top</code></li><li data-v-25ac237d><code data-v-25ac237d>b</code> - 设置 <code data-v-25ac237d>margin-bottom</code> 或 <code data-v-25ac237d>padding-bottom</code></li><li data-v-25ac237d><code data-v-25ac237d>l</code> - 设置 <code data-v-25ac237d>margin-left</code> 或 <code data-v-25ac237d>padding-left</code></li><li data-v-25ac237d><code data-v-25ac237d>r</code> - 设置 <code data-v-25ac237d>margin-right</code> 或 <code data-v-25ac237d>padding-right</code></li><li data-v-25ac237d><code data-v-25ac237d>x</code> - 设置 <code data-v-25ac237d>margin-left</code><code data-v-25ac237d>margin-right</code> 或 <code data-v-25ac237d>padding-left</code><code data-v-25ac237d>padding-right</code></li><li data-v-25ac237d><code data-v-25ac237d>y</code> - 设置 <code data-v-25ac237d>margin-top</code><code data-v-25ac237d>margin-bottom</code> 或 <code data-v-25ac237d>padding-top</code><code data-v-25ac237d>padding-bottom</code></li><li data-v-25ac237d><code data-v-25ac237d>a</code> - 设置 <code data-v-25ac237d>margin</code> 或 <code data-v-25ac237d>padding</code></li></ul><p data-v-25ac237d>大小：</p><ul data-v-25ac237d><li data-v-25ac237d><code data-v-25ac237d>0</code> - 0px</li><li data-v-25ac237d><code data-v-25ac237d>1</code> - 8px</li><li data-v-25ac237d><code data-v-25ac237d>2</code> - 16px</li><li data-v-25ac237d><code data-v-25ac237d>3</code> - 24px</li><li data-v-25ac237d><code data-v-25ac237d>4</code> - 32px</li><li data-v-25ac237d><code data-v-25ac237d>5</code> - 40px</li></ul><pre data-v-25ac237d><code class="language-css" data-v-25ac237d>.mdui-m-t-0 {
  margin-top: 0 !important;
}

.mdui-m-l-1 {
  margin-left: 8px !important;
}

.mdui-p-x-2 {
  padding-left: 16px !important;
  padding-right: 16px !important;
}

.mdui-p-a-5 {
  padding: 40px !important;
}</code></pre></div><div class="mdui-typo" data-v-25ac237d><h2 class="chapter-title mdui-text-color-theme" data-v-25ac237d> 快速浮动 <a class="anchor" id="float" data-v-25ac237d></a></h2><ul data-v-25ac237d><li data-v-25ac237d><code data-v-25ac237d>.mdui-float-left</code> 使元素向左浮动</li><li data-v-25ac237d><code data-v-25ac237d>.mdui-float-right</code> 使元素向右浮动</li></ul></div>`,3)),c(s,{"view-source":"",language:"xml"},{demo:t(()=>a[0]||(a[0]=[d("div",{class:"mdui-clearfix"},[d("div",{class:"mdui-float-left bg box-padding mdui-m-b-0"}," float left "),d("div",{class:"mdui-float-right bg box-padding mdui-m-b-0"}," float right ")],-1)])),code:t(()=>a[1]||(a[1]=[i(l(`<div class="mdui-float-left">float left</div>
<div class="mdui-float-right">float right</div>`))])),_:1}),a[15]||(a[15]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[i(" 水平居中 "),d("a",{class:"anchor",id:"center"})]),d("p",null,[i("为任意元素添加类 "),d("code",null,".mdui-center"),i(" 即可使其水平居中。")])],-1)),c(s,{"view-source":"",language:"xml"},{demo:t(()=>a[2]||(a[2]=[d("div",{class:"mdui-center bg box-padding mdui-m-b-0",style:{width:"200px"}}," mdui-center ",-1)])),code:t(()=>a[3]||(a[3]=[i(l('<div class="mdui-center" style="width: 200px">mdui-center</div>'))])),_:1}),a[16]||(a[16]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[i(" 垂直居中 "),d("a",{class:"anchor",id:"valign"})]),d("p",null,[i(" 为任意元素添加类 "),d("code",null,".mdui-valign"),i("，即可使该元素中的子元素垂直居中。 ")])],-1)),c(s,{"view-source":"",language:"xml"},{demo:t(()=>a[4]||(a[4]=[d("div",{class:"mdui-valign bg",style:{height:"200px"}},[d("p",{class:"mdui-center"},"This should be vertically aligned")],-1)])),code:t(()=>a[5]||(a[5]=[i(l(`<div class="mdui-valign">
  <p class="mdui-center">This should be vertically aligned</p>
</div>`))])),_:1}),a[17]||(a[17]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[i(" 水平对齐方式 "),d("a",{class:"anchor",id:"text-align"})]),d("ul",null,[d("li",null,[d("code",null,".mdui-text-left"),i(" 使文本左对齐。")]),d("li",null,[d("code",null,".mdui-text-center"),i(" 使文本居中对齐。")]),d("li",null,[d("code",null,".mdui-text-right"),i(" 使文本右对齐。")])])],-1)),c(s,{"view-source":"",language:"xml"},{demo:t(()=>a[6]||(a[6]=[d("div",{class:"mdui-text-left bg box-padding",style:{"margin-bottom":"10px"}}," This should be left aligned ",-1),d("div",{class:"mdui-text-center bg box-padding",style:{"margin-bottom":"10px"}}," This should be center aligned ",-1),d("div",{class:"mdui-text-right bg box-padding mdui-m-b-0"}," This should be right aligned ",-1)])),code:t(()=>a[7]||(a[7]=[i(l(`<div class="mdui-text-left">This should be left aligned</div>
<div class="mdui-text-center">This should be center aligned</div>
<div class="mdui-text-right">This should be right aligned</div>`))])),_:1}),a[18]||(a[18]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[i(" 文本大小写转换 "),d("a",{class:"anchor",id:"text-transform"})]),d("ul",null,[d("li",null,[d("code",null,".mdui-text-lowercase"),i(" 把文本转为小写。")]),d("li",null,[d("code",null,".mdui-text-uppercase"),i(" 把文本转为大写。")]),d("li",null,[d("code",null,".mdui-text-capitalize"),i(" 把文本转为单词的首字母大写。")])])],-1)),c(s,{"view-source":"",language:"xml"},{demo:t(()=>a[8]||(a[8]=[d("p",{class:"mdui-text-lowercase"},"Lowercased text.",-1),d("p",{class:"mdui-text-uppercase"},"Uppercased text.",-1),d("p",{class:"mdui-text-capitalize"},"Capitalized text.",-1)])),code:t(()=>a[9]||(a[9]=[i(l(`<p class="mdui-text-lowercase">Lowercased text.</p>
<p class="mdui-text-uppercase">Uppercased text.</p>
<p class="mdui-text-capitalize">Capitalized text.</p>`))])),_:1}),a[19]||(a[19]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[i(" 文本自动截断 "),d("a",{class:"anchor",id:"text-truncate"})]),d("p",null,[d("code",null,".mdui-text-truncate"),i(" 可以在文本长度超出限制时，自动截断，并用省略号代替。 ")])],-1)),c(s,{"view-source":"",language:"xml"},{demo:t(()=>a[10]||(a[10]=[d("p",{class:"mdui-text-truncate",style:{"max-width":"200px"}}," 这是一段非常非常非常非常非常非常非常非常非常非常非常非常长的文字。 ",-1)])),code:t(()=>a[11]||(a[11]=[i(l('<p class="mdui-text-truncate" style="max-width: 200px;">这是一段非常非常非常非常非常非常非常非常非常非常非常非常长的文字。</p>'))])),_:1}),a[20]||(a[20]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[i(" 清除浮动 "),d("a",{class:"anchor",id:"clearfix"})]),d("p",null,[i("为父元素添加 "),d("code",null,".mdui-clearfix"),i(" 类可以清除浮动")])],-1)),c(s,{"view-source":"",language:"xml"},{demo:t(()=>a[12]||(a[12]=[d("div",{class:"mdui-clearfix bg box-padding mdui-m-b-0"},[d("div",{class:"mdui-float-left bg box-padding mdui-m-b-0"}," mdui-float-left "),d("div",{class:"mdui-float-right bg box-padding mdui-m-b-0"}," mdui-float-right ")],-1)])),code:t(()=>a[13]||(a[13]=[i(l(`<div class="mdui-clearfix">
  <div class="mdui-float-left">mdui-float-left</div>
  <div class="mdui-float-right">mdui-float-right</div>
</div>`))])),_:1}),a[21]||(a[21]=e('<div class="mdui-typo" data-v-25ac237d><h2 class="chapter-title mdui-text-color-theme" data-v-25ac237d> 隐藏内容 <a class="anchor" id="visible" data-v-25ac237d></a></h2><ul data-v-25ac237d><li data-v-25ac237d><code data-v-25ac237d>.mdui-hidden</code> 类用于隐藏元素，相当于添加样式 <code data-v-25ac237d>display: none;</code>，隐藏后的元素不占据页面空间。 </li><li data-v-25ac237d><code data-v-25ac237d>.mdui-invisible</code> 类用于使元素不可见，但依然会占据页面上的空间，相当于添加样式 <code data-v-25ac237d>visibility: hidden;</code>。 </li></ul></div><div class="mdui-typo" data-v-25ac237d><h2 class="chapter-title mdui-text-color-theme" data-v-25ac237d> 响应式工具 <a class="anchor" id="responsive-utilities" data-v-25ac237d></a></h2><p data-v-25ac237d>这些工具类通过媒体查询实现针对不同设备隐藏内容。这些工具类包括：</p><ul data-v-25ac237d><li data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-*</code>：在指定宽度的设备上隐藏。</li><li data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-*-up</code>：在指定宽度及以上的设备上隐藏。</li><li data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-*-down</code>：在指定宽度及以下的设备上隐藏。 </li></ul><div class="mdui-table-fluid" data-v-25ac237d><table class="mdui-table" data-v-25ac237d><thead data-v-25ac237d><tr data-v-25ac237d><th data-v-25ac237d></th><th data-v-25ac237d>超小屏幕<br data-v-25ac237d>&lt;600px</th><th data-v-25ac237d>小屏幕<br data-v-25ac237d>&gt;=600px - &lt;1024px</th><th data-v-25ac237d>中等屏幕<br data-v-25ac237d>&gt;=1024px - &lt;1440px</th><th data-v-25ac237d>大屏幕<br data-v-25ac237d>&gt;=1440px - &lt;1920px</th><th data-v-25ac237d>超大屏幕<br data-v-25ac237d>&gt;=1920px</th></tr></thead><tbody data-v-25ac237d><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-xs</code></td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-sm</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-md</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-lg</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-xl</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-xs-down</code></td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-sm-down</code></td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-md-down</code></td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-lg-down</code></td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-visible" data-v-25ac237d>可见</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-xl-down</code></td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-xs-up</code></td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-sm-up</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-md-up</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-lg-up</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td><td class="is-hidden" data-v-25ac237d>隐藏</td></tr><tr data-v-25ac237d><td data-v-25ac237d><code data-v-25ac237d>.mdui-hidden-xl-up</code></td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-visible" data-v-25ac237d>可见</td><td class="is-hidden" data-v-25ac237d>隐藏</td></tr></tbody></table></div><div class="space-height-sm" data-v-25ac237d></div><p data-v-25ac237d> 调整浏览器窗口、或在不同设备上查看下面的实例。深色部分表示在当前浏览器窗口中是可见的。 </p></div><div class="example" data-v-25ac237d><div class="example-demo" data-v-25ac237d><div class="mdui-container-fluid" data-v-25ac237d><div class="mdui-row" data-v-25ac237d><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-xs is-visible" data-v-25ac237d> ✔ .mdui-hidden-xs </div><div class="mdui-hidden-sm-up is-hidden" data-v-25ac237d>.mdui-hidden-xs</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-sm is-visible" data-v-25ac237d> ✔ .mdui-hidden-sm </div><div class="mdui-hidden-md-up mdui-hidden-xs-down is-hidden" data-v-25ac237d> .mdui-hidden-sm </div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-md is-visible" data-v-25ac237d> ✔ .mdui-hidden-md </div><div class="mdui-hidden-lg-up mdui-hidden-sm-down is-hidden" data-v-25ac237d> .mdui-hidden-md </div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-lg is-visible" data-v-25ac237d> ✔ .mdui-hidden-lg </div><div class="mdui-hidden-xl-up mdui-hidden-md-down is-hidden" data-v-25ac237d> .mdui-hidden-lg </div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-xl is-visible" data-v-25ac237d> ✔ .mdui-hidden-xl </div><div class="mdui-hidden-lg-down is-hidden" data-v-25ac237d>.mdui-hidden-xl</div></div></div><div class="mdui-row" data-v-25ac237d><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-xs-down is-visible" data-v-25ac237d> ✔ mdui-hidden-xs-down </div><div class="mdui-hidden-sm-up is-hidden" data-v-25ac237d>mdui-hidden-xs-down</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-sm-down is-visible" data-v-25ac237d> ✔ mdui-hidden-sm-down </div><div class="mdui-hidden-md-up is-hidden" data-v-25ac237d>mdui-hidden-sm-down</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-md-down is-visible" data-v-25ac237d> ✔ mdui-hidden-md-down </div><div class="mdui-hidden-lg-up is-hidden" data-v-25ac237d>mdui-hidden-md-down</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-lg-down is-visible" data-v-25ac237d> ✔ mdui-hidden-lg-down </div><div class="mdui-hidden-xl-up is-hidden" data-v-25ac237d>mdui-hidden-lg-down</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-xl-down is-visible" data-v-25ac237d> ✔ mdui-hidden-xl-down </div><div class="is-hidden" data-v-25ac237d>mdui-hidden-xl-down</div></div></div><div class="mdui-row" data-v-25ac237d><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-xs-up is-visible" data-v-25ac237d> ✔ mdui-hidden-xs-up </div><div class="is-hidden" data-v-25ac237d>mdui-hidden-xs-up</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-sm-up is-visible" data-v-25ac237d> ✔ mdui-hidden-sm-up </div><div class="mdui-hidden-xs-down is-hidden" data-v-25ac237d>mdui-hidden-sm-up</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-md-up is-visible" data-v-25ac237d> ✔ mdui-hidden-md-up </div><div class="mdui-hidden-sm-down is-hidden" data-v-25ac237d>mdui-hidden-md-up</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-lg-up is-visible" data-v-25ac237d> ✔ mdui-hidden-lg-up </div><div class="mdui-hidden-md-down is-hidden" data-v-25ac237d>mdui-hidden-lg-up</div></div><div class="mdui-col-sm-6 mdui-col-md-4" data-v-25ac237d><div class="mdui-hidden-xl-up is-visible" data-v-25ac237d> ✔ mdui-hidden-xl-up </div><div class="mdui-hidden-lg-down is-hidden" data-v-25ac237d>mdui-hidden-xl-up</div></div></div></div></div></div>',3))])],64))}});const T=r(x,[["__scopeId","data-v-25ac237d"]]);export{T as default};
