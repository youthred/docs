import{D as s}from"Demo-5062ffc5.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/Demo-5062ffc5.js*/;import{T as m,_ as p}from"MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js*/;import{d as u,c,a as d,b as a,e as l,w as i,g as r,t,F as n,f as b,o as h}from"index-15cb1481.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/index-15cb1481.js*/;const v={class:"intro mdui-typo"},f={class:"intro-module"},x={class:"chapter"},g={class:"mdui-typo"},q=u({__name:"tab",setup(w){return(y,e)=>{const o=b("router-link");return h(),c(n,null,[d(m),e[39]||(e[39]=a("h1",{class:"title mdui-text-color-theme"},"Tab 选项卡",-1)),a("div",v,[a("div",f,[e[4]||(e[4]=a("h3",null,"调用方式",-1)),a("ol",null,[a("li",null,[e[1]||(e[1]=l("通过自定义属性调用（若组件是动态生成的，则需要调用 ")),d(o,{to:"/docs/global#mutation"},{default:i(()=>e[0]||(e[0]=[a("code",null,"mdui.mutation()",-1)])),_:1}),e[2]||(e[2]=l(" 进行初始化）"))]),e[3]||(e[3]=a("li",null,"通过 JavaScript 调用",-1))])]),e[5]||(e[5]=a("div",{class:"intro-module"},[a("h3",null,"相关阅读"),a("p",null,[a("a",{href:"https://www.mdui.org/zh-cn/design/1/components/tabs.html",target:"_blank"},"Material Design 设计指南：组件 - Tab 选项卡")])],-1))]),d(p,{class:"first-screen"}),e[40]||(e[40]=r('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#basic">基础样式</a></li><li><a href="#scrollable">可滚动</a></li><li><a href="#centered">居中对齐</a></li><li><a href="#full-width">100% 宽度</a></li><li><a href="#icon">含图标</a></li><li><a href="#icon-text">含图标和文本</a></li><li><a href="#color">含背景色</a></li><li><a href="#active">默认激活的选项</a></li><li><a href="#disabled">禁用的选项</a></li></ul></li><li><a href="#call">调用方式</a><ul><li><a href="#attr">通过自定义属性调用</a></li><li><a href="#js">通过 JavaScript 调用</a></li><li><a href="#option">参数</a></li><li><a href="#method">方法</a></li><li><a href="#event">事件</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),a("div",x,[e[29]||(e[29]=r('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme">样式 <a class="anchor" id="style"></a></h2><h4 class="article-title">基础样式 <a class="anchor" id="basic"></a></h4><p>下面是一个标准选项卡。在手机上时会占据 100% 的宽度，每一个选项宽度都相等；在平板/PC 上会左对齐。</p></div>',1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo1"},{demo:i(()=>e[6]||(e[6]=[a("div",{class:"mdui-tab","mdui-tab":""},[a("a",{href:"#example1-tab1",class:"mdui-ripple"},"web"),a("a",{href:"#example1-tab2",class:"mdui-ripple"},"shopping"),a("a",{href:"#example1-tab3",class:"mdui-ripple"},"images")],-1),a("div",{id:"example1-tab1",class:"mdui-p-a-2"},"web content",-1),a("div",{id:"example1-tab2",class:"mdui-p-a-2"},"shopping content",-1),a("div",{id:"example1-tab3",class:"mdui-p-a-2"},"images content",-1)])),code:i(()=>e[7]||(e[7]=[l(t(`<div class="mdui-tab" mdui-tab>
  <a href="#example1-tab1" class="mdui-ripple">web</a>
  <a href="#example1-tab2" class="mdui-ripple">shopping</a>
  <a href="#example1-tab3" class="mdui-ripple">images</a>
</div>
<div id="example1-tab1" class="mdui-p-a-2">web content</div>
<div id="example1-tab2" class="mdui-p-a-2">shopping content</div>
<div id="example1-tab3" class="mdui-p-a-2">images content</div>`))])),_:1}),e[30]||(e[30]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("可滚动 "),a("a",{class:"anchor",id:"scrollable"})]),a("p",null,[l("在 "),a("code",null,t('<div class="mdui-tab">')),l(" 上添加类 "),a("code",null,".mdui-tab-scrollable"),l(" 使选项卡可以横向滚动，常用于移动端选项较多的场景。")])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo2"},{demo:i(()=>e[8]||(e[8]=[a("div",{class:"mdui-tab mdui-tab-scrollable","mdui-tab":""},[a("a",{href:"#example2-tab1",class:"mdui-ripple"},"web"),a("a",{href:"#example2-tab2",class:"mdui-ripple"},"shopping"),a("a",{href:"#example2-tab3",class:"mdui-ripple"},"videos"),a("a",{href:"#example2-tab4",class:"mdui-ripple"},"images"),a("a",{href:"#example2-tab5",class:"mdui-ripple"},"news"),a("a",{href:"#example2-tab6",class:"mdui-ripple"},"maps"),a("a",{href:"#example2-tab7",class:"mdui-ripple"},"books"),a("a",{href:"#example2-tab8",class:"mdui-ripple"},"flights"),a("a",{href:"#example2-tab9",class:"mdui-ripple"},"apps"),a("a",{href:"#example2-tab10",class:"mdui-ripple"},"dictionary")],-1)])),code:i(()=>e[9]||(e[9]=[l(t(`<div class="mdui-tab mdui-tab-scrollable" mdui-tab>
  <a href="#example2-tab1" class="mdui-ripple">web</a>
  <a href="#example2-tab2" class="mdui-ripple">shopping</a>
  <a href="#example2-tab3" class="mdui-ripple">videos</a>
  <a href="#example2-tab4" class="mdui-ripple">images</a>
  <a href="#example2-tab5" class="mdui-ripple">news</a>
  <a href="#example2-tab6" class="mdui-ripple">maps</a>
  <a href="#example2-tab7" class="mdui-ripple">books</a>
  <a href="#example2-tab8" class="mdui-ripple">flights</a>
  <a href="#example2-tab9" class="mdui-ripple">apps</a>
  <a href="#example2-tab10" class="mdui-ripple">dictionary</a>
</div>`))])),_:1}),e[31]||(e[31]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("居中对齐 "),a("a",{class:"anchor",id:"centered"})]),a("p",null,[l("在 "),a("code",null,t('<div class="mdui-tab"></div>')),l(" 元素上添加类 "),a("code",null,".mdui-tab-centered"),l(" 可使选项卡在平板/PC 上居中对齐。")])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo3"},{demo:i(()=>e[10]||(e[10]=[a("div",{class:"mdui-tab mdui-tab-centered","mdui-tab":""},[a("a",{href:"#example3-tab1",class:"mdui-ripple"},"web"),a("a",{href:"#example3-tab2",class:"mdui-ripple"},"shopping"),a("a",{href:"#example3-tab3",class:"mdui-ripple"},"videos")],-1)])),code:i(()=>e[11]||(e[11]=[l(t(`<div class="mdui-tab mdui-tab-centered" mdui-tab>
  <a href="#example3-tab1" class="mdui-ripple">web</a>
  <a href="#example3-tab2" class="mdui-ripple">shopping</a>
  <a href="#example3-tab3" class="mdui-ripple">videos</a>
</div>`))])),_:1}),e[32]||(e[32]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("100% 宽度 "),a("a",{class:"anchor",id:"full-width"})]),a("p",null,[l("在 "),a("code",null,t('<div class="mdui-tab"></div>')),l(" 元素上添加类 "),a("code",null,".mdui-tab-full-width"),l(" 可以使选项卡始终占据 100% 的宽度，且每个选项卡宽度相等。")])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo4"},{demo:i(()=>e[12]||(e[12]=[a("div",{class:"mdui-tab mdui-tab-full-width","mdui-tab":""},[a("a",{href:"#example4-tab1",class:"mdui-ripple"},"web"),a("a",{href:"#example4-tab2",class:"mdui-ripple"},"shopping"),a("a",{href:"#example4-tab3",class:"mdui-ripple"},"videos")],-1)])),code:i(()=>e[13]||(e[13]=[l(t(`<div class="mdui-tab mdui-tab-full-width" mdui-tab>
  <a href="#example4-tab1" class="mdui-ripple">web</a>
  <a href="#example4-tab2" class="mdui-ripple">shopping</a>
  <a href="#example4-tab3" class="mdui-ripple">videos</a>
</div>`))])),_:1}),e[33]||(e[33]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("含图标 "),a("a",{class:"anchor",id:"icon"})])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo5"},{demo:i(()=>e[14]||(e[14]=[a("div",{class:"mdui-tab","mdui-tab":""},[a("a",{href:"#example5-tab1",class:"mdui-ripple"},[a("i",{class:"mdui-icon material-icons"},"phone")]),a("a",{href:"#example5-tab2",class:"mdui-ripple"},[a("i",{class:"mdui-icon material-icons"},"favorite")]),a("a",{href:"#example5-tab3",class:"mdui-ripple"},[a("i",{class:"mdui-icon material-icons"},"perm_contact_calendar")])],-1)])),code:i(()=>e[15]||(e[15]=[l(t(`<div class="mdui-tab" mdui-tab>
  <a href="#example5-tab1" class="mdui-ripple">
    <i class="mdui-icon material-icons">phone</i>
  </a>
  <a href="#example5-tab2" class="mdui-ripple">
    <i class="mdui-icon material-icons">favorite</i>
  </a>
  <a href="#example5-tab3" class="mdui-ripple">
    <i class="mdui-icon material-icons">perm_contact_calendar</i>
  </a>
</div>`))])),_:1}),e[34]||(e[34]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("含图标和文本 "),a("a",{class:"anchor",id:"icon-text"})])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo6"},{demo:i(()=>e[16]||(e[16]=[a("div",{class:"mdui-tab","mdui-tab":""},[a("a",{href:"#example6-tab1",class:"mdui-ripple"},[a("i",{class:"mdui-icon material-icons"},"phone"),a("label",null,"recents")]),a("a",{href:"#example6-tab2",class:"mdui-ripple"},[a("i",{class:"mdui-icon material-icons"},"favorite"),a("label",null,"favorites")]),a("a",{href:"#example6-tab3",class:"mdui-ripple"},[a("i",{class:"mdui-icon material-icons"},"perm_contact_calendar"),a("label",null,"nearby")])],-1)])),code:i(()=>e[17]||(e[17]=[l(t(`<div class="mdui-tab" mdui-tab>
  <a href="#example6-tab1" class="mdui-ripple">
    <i class="mdui-icon material-icons">phone</i>
    <label>recents</label>
  </a>
  <a href="#example6-tab2" class="mdui-ripple">
    <i class="mdui-icon material-icons">favorite</i>
    <label>favorites</label>
  </a>
  <a href="#example6-tab3" class="mdui-ripple">
    <i class="mdui-icon material-icons">perm_contact_calendar</i>
    <label>nearby</label>
  </a>
</div>`))])),_:1}),e[35]||(e[35]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("含背景色 "),a("a",{class:"anchor",id:"color"})]),a("p",null,[l("在 "),a("code",null,t('<div class="mdui-tab"></div>')),l(" 的元素上添加类 "),a("code",null,[l(".mdui-color-["),a("span",{"mdui-tooltip":"{content: '颜色名'}"},"color"),l("]")]),l(" 即可为选项卡赋予背景色。")])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo7"},{demo:i(()=>e[18]||(e[18]=[a("div",{class:"mdui-tab mdui-color-theme","mdui-tab":""},[a("a",{href:"#example7-tab1",class:"mdui-ripple mdui-ripple-white"},[a("i",{class:"mdui-icon material-icons"},"phone"),a("label",null,"recents")]),a("a",{href:"#example7-tab2",class:"mdui-ripple mdui-ripple-white"},[a("i",{class:"mdui-icon material-icons"},"favorite"),a("label",null,"favorites")]),a("a",{href:"#example7-tab3",class:"mdui-ripple mdui-ripple-white"},[a("i",{class:"mdui-icon material-icons"},"perm_contact_calendar"),a("label",null,"nearby")])],-1)])),code:i(()=>e[19]||(e[19]=[l(t(`<div class="mdui-tab mdui-color-theme" mdui-tab>
  <a href="#example7-tab1" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">phone</i>
    <label>recents</label>
  </a>
  <a href="#example7-tab2" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">favorite</i>
    <label>favorites</label>
  </a>
  <a href="#example7-tab3" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">perm_contact_calendar</i>
    <label>nearby</label>
  </a>
</div>`))])),_:1}),e[36]||(e[36]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("默认激活的选项 "),a("a",{class:"anchor",id:"active"})]),a("p",null,[l("在 "),a("code",null,t("<a>")),l(" 元素上添加类 "),a("code",null,".mdui-tab-active"),l(" 可以使该选项处于默认激活状态。")])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo8"},{demo:i(()=>e[20]||(e[20]=[a("div",{class:"mdui-tab","mdui-tab":""},[a("a",{href:"#example8-tab1",class:"mdui-ripple"},"web"),a("a",{href:"#example8-tab2",class:"mdui-tab-active mdui-ripple"},"shopping"),a("a",{href:"#example8-tab3",class:"mdui-ripple"},"images")],-1)])),code:i(()=>e[21]||(e[21]=[l(t(`<div class="mdui-tab" mdui-tab>
  <a href="#example8-tab1" class="mdui-ripple">web</a>
  <a href="#example8-tab2" class="mdui-tab-active mdui-ripple">shopping</a>
  <a href="#example8-tab3" class="mdui-ripple">images</a>
</div>`))])),_:1}),e[37]||(e[37]=a("div",{class:"mdui-typo"},[a("h4",{class:"article-title"},[l("禁用状态的选项 "),a("a",{class:"anchor",id:"disabled"})]),a("p",null,[l("在 "),a("code",null,t("<a>")),l(" 元素上添加 "),a("code",null,"disabled"),l(" 属性可以禁用该选项。")])],-1)),d(s,{"view-source":"",language:"xml","online-url":"./tab/demo9"},{demo:i(()=>e[22]||(e[22]=[a("div",{class:"mdui-tab","mdui-tab":""},[a("a",{href:"#example9-tab1",class:"mdui-ripple"},"web"),a("a",{href:"#example9-tab2",class:"mdui-ripple",disabled:""},"shopping"),a("a",{href:"#example9-tab3",class:"mdui-ripple"},"images")],-1)])),code:i(()=>e[23]||(e[23]=[l(t(`<div class="mdui-tab" mdui-tab>
  <a href="#example9-tab1" class="mdui-ripple">web</a>
  <a href="#example9-tab2" class="mdui-ripple" disabled>shopping</a>
  <a href="#example9-tab3" class="mdui-ripple">images</a>
</div>`))])),_:1}),a("div",g,[e[27]||(e[27]=r('<h2 class="chapter-title chapter-title-first mdui-text-color-theme">调用方式 <a class="anchor" id="call"></a></h2><h4 class="article-title">通过自定义属性调用 <a class="anchor" id="attr"></a></h4><p>使用该方式无需编写 JavaScript 代码，只需在元素 <code>&lt;div class=&quot;mdui-tab&quot;&gt;&lt;/div&gt;</code> 上添加 <code>mdui-tab=&quot;<a href="#option">options</a>&quot;</code> 属性即可激活该组件。</p>',3)),a("p",null,[e[25]||(e[25]=l("若组件是动态生成的，则需要调用 ")),d(o,{to:"/docs/global#mutation"},{default:i(()=>e[24]||(e[24]=[a("code",null,"mdui.mutation()",-1)])),_:1}),e[26]||(e[26]=l(" 进行初始化。"))]),e[28]||(e[28]=a("pre",null,[a("code",{class:"language-html"},t(`<div class="mdui-tab" mdui-tab>
...
</div>`))],-1))]),e[38]||(e[38]=r(`<div class="mdui-typo"><h4 class="article-title">通过 JavaScript 调用 <a class="anchor" id="js"></a></h4><p>实例化组件：</p><pre><code class="language-js">// selector 为 .mdui-tab 元素的 CSS 选择器或 DOM 元素
// options 为插件的参数，见下面的参数列表
var inst = new mdui.Tab(selector, options);</code></pre></div><a href="https://cdn.w3cbus.com/mdui/docs-1/assets/tab/demo10" target="_blank" class="mdui-btn mdui-color-theme-accent">运行</a><div class="mdui-typo"><h4 class="article-title">参数 <a class="anchor" id="option"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>trigger</code></td><td><code>string</code></td><td><code>click</code></td><td>切换选项卡的触发方式。 <ul><li><code>click</code>: 点击切换</li><li><code>hover</code>: 鼠标悬浮切换</li></ul></td></tr><tr><td><code>loop</code></td><td><code>boolean</code></td><td><code>false</code></td><td>是否启用循环切换，若为 <code>true</code>，则最后一个选项激活时调用 next 方法将回到第一个选项，第一个选项激活时调用 prev 方法将回到最后一个选项。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">方法 <a class="anchor" id="method"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>prev()</code></td><td>切换到上一个选项</td></tr><tr><td><code>next()</code></td><td>切换到下一个选项</td></tr><tr><td><code>show(index)</code></td><td>显示指定的选项。 <ul><li><code>index</code>：选项的索引号或 id</li></ul></td></tr><tr><td><code>handleUpdate()</code></td><td><p>当父元素的宽度发生变化时，需要调用该方法重新设置指示器位置。</p><p>当在选项卡中动态添加了新的选项时，也需要调用该方法使新的选项生效。</p></td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">事件 <a class="anchor" id="event"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件名</th><th>描述</th><th>目标</th><th>参数</th></tr></thead><tbody><tr><td><code>change.mdui.tab</code></td><td>切换选项时，事件将被触发。</td><td><code>&lt;div class=&quot;mdui-tab&quot;&gt;</code></td><td><ul><li><code>event._detail.inst</code>：实例</li><li><code>event._detail.index</code>：激活的选项的索引号</li><li><code>event._detail.id</code>：激活的选项的选项卡内容的id</li></ul></td></tr><tr><td><code>show.mdui.tab</code></td><td>切换到指定选项时，事件将被触发。</td><td><code>&lt;a&gt;</code></td><td><code>event._detail.inst</code>：实例 </td></tr></tbody></table></div></div><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme">CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-tab</code></td><td>定义一个选项卡组件。</td></tr><tr><td><code>.mdui-tab-scrollable</code></td><td>可滚动选项卡组件。</td></tr><tr><td><code>.mdui-tab-centered</code></td><td>居中对齐的选项卡组件。</td></tr><tr><td><code>.mdui-tab-full-width</code></td><td>100% 宽度的选项卡组件。</td></tr><tr><td><code>.mdui-tab-active</code></td><td>激活状态的选项。</td></tr></tbody></table></div></div>`,6))])],64)}}});export{q as default};
