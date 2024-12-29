import{T as i,_ as r}from"MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js*/;import{d as c,c as s,a as e,b as d,g as o,e as l,w as u,F as n,f as m,o as h}from"index-15cb1481.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/index-15cb1481.js*/;const p={class:"intro mdui-typo"},b={class:"intro-module"},y=c({__name:"drawer",setup(g){return(v,t)=>{const a=m("router-link");return h(),s(n,null,[e(i),t[8]||(t[8]=d("h1",{class:"title mdui-text-color-theme"},"抽屉式导航",-1)),d("div",p,[t[5]||(t[5]=d("p",null," MDUI 中的抽屉式导航栏（后面简称抽屉栏）可以从页面左侧或右侧滑出，一个页面可以拥有多个抽屉栏。 ",-1)),e(r,{class:"first-screen"}),t[6]||(t[6]=o('<p style="margin-top:40px;"> 抽屉栏在手机、平板、桌面设备上的表现有些不同，你可以通过改变浏览器宽度来观察本页面左侧的抽屉栏的变化： </p><ol><li> 高度 <ul><li>在手机和平板上，抽屉栏的高度始终为 100%。</li><li> 在桌面设备上，抽屉栏默认不覆盖应用栏，距离页面顶部有一个应用栏的高度。添加类 <code>.mdui-drawer-full-height</code> 可以使抽屉栏高度为 100%，这时抽屉栏可能会覆盖在应用栏上方，可以在应用栏上添加类 <code>.mdui-appbar-inset</code> 使应用栏不被抽屉栏覆盖。 </li></ul></li><li> 背景色和阴影 <ul><li>在手机和平板上，抽屉栏默认为白色背景，有阴影。</li><li> 在桌面设备上，抽屉栏默认为透明背景，没有阴影。添加类 <code>.mdui-color-[color]</code> 可以设置抽屉栏的背景色，并添加阴影。 </li></ul></li><li> 显示状态 <ul><li>在手机和平板上，抽屉栏默认隐藏。</li><li>在桌面设备上，抽屉栏默认显示。</li><li> 添加类 <code>.mdui-drawer-open</code> 可以使抽屉栏在所有设备上都默认显示；添加类 <code>.mdui-drawer-close</code> 可以使抽屉栏在所有设备上都默认隐藏。 </li></ul></li><li> 遮罩 <ul><li>在手机和平板上，打开抽屉栏时，始终会显示遮罩层。</li><li> 在桌面设备上，打开抽屉栏时，默认不显示遮罩层。设置 <code>overlay</code> 参数为 <code>true</code>，可以在打开抽屉栏时显示遮罩层。如果设置为显示遮罩层，那么应该添加 <code>.mdui-drawer-close</code> 类使抽屉栏默认处于隐藏状态。 </li></ul></li></ol>',2)),d("div",b,[t[4]||(t[4]=d("h3",null,"调用方式",-1)),d("ol",null,[d("li",null,[t[1]||(t[1]=l(" 通过自定义属性调用（若组件是动态生成的，则需要调用 ")),e(a,{to:"/docs/global#mutation"},{default:u(()=>t[0]||(t[0]=[d("code",null,"mdui.mutation()",-1)])),_:1}),t[2]||(t[2]=l(" 进行初始化） "))]),t[3]||(t[3]=d("li",null,"通过 JavaScript 调用",-1))])]),t[7]||(t[7]=d("div",{class:"intro-module"},[d("h3",null,"相关阅读"),d("p",null,[d("a",{href:"https://www.mdui.org/zh-cn/design/1/patterns/navigation-drawer.html",target:"_blank"},"Material Design 设计指南：模式 - 抽屉式导航")])],-1))]),t[9]||(t[9]=o(`<nav class="toc mdui-text-color-theme"><ul><li><a href="#call">调用方式</a><ul><li><a href="#html">HTML 结构</a></li><li><a href="#attr">通过自定义属性调用</a></li><li><a href="#js">用过 JavaScript 调用</a></li><li><a href="#option">参数</a></li><li><a href="#method">方法</a></li><li><a href="#event">事件</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav><div class="chapter"><div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> 调用方式 <a class="anchor" id="call"></a></h2><h4 class="article-title">HTML 结构 <a class="anchor" id="html"></a></h4><pre><code class="language-html">&lt;!-- mdui-drawer-body-left 类为 body 添加 padding-left，只要左侧有默认打开的抽屉栏，就要添加这个类。 --&gt;
&lt;!-- mdui-drawer-body-right 类为 body 添加 padding-right，只要右侧有默认打开的抽屉栏，就要添加这个类。 --&gt;
&lt;body class=&quot;mdui-drawer-body-left mdui-drawer-body-right&quot;&gt;

  &lt;!-- 默认抽屉栏在左侧 --&gt;
  &lt;div class=&quot;mdui-drawer&quot;&gt;
    ... drawer content ...
  &lt;/div&gt;

  &lt;!-- 如果要使抽屉栏在右侧，需要添加类 mdui-drawer-right --&gt;
  &lt;div class=&quot;mdui-drawer mdui-drawer-right&quot;&gt;
    ... drawer content ...
  &lt;/div&gt;

&lt;/body&gt;</code></pre></div><div class="mdui-typo"><h4 class="article-title"> 通过自定义属性调用 <a class="anchor" id="attr"></a></h4><p> 使用该方式无需编写 JavaScript 代码。只需在一个起控制作用的元素<small>（例如：按钮）</small>上添加 <code>mdui-drawer=&quot;<a href="#option">options</a>&quot;</code> 属性即可。通过自定义属性调用时，需要额外添加一个 <code>target</code> 参数，用于指定被控制的抽屉栏，它的值为被控制的抽屉栏的 CSS 选择器。 </p><pre><code class="language-html">&lt;body class=&quot;mdui-drawer-body-right&quot;&gt;

  &lt;button class=&quot;mdui-btn&quot; mdui-drawer=&quot;{target: &#39;#left-drawer&#39;}&quot;&gt;open left drawer&lt;/button&gt;

  &lt;div class=&quot;mdui-drawer&quot; id=&quot;left-drawer&quot;&gt;
    ... left drawer content ...
    &lt;button class=&quot;mdui-btn&quot; mdui-drawer-close&gt;close&lt;/button&gt;
  &lt;/div&gt;

&lt;/body&gt;</code></pre><p> 在抽屉栏内的元素上可以添加一些属性来绑定事件，这些属性在使用 JavaScript 调用方式时也可以使用。 </p><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>mdui-drawer-close</code></td><td> 点击该元素会触发 <code>close.mdui.drawer</code> 事件，并关闭抽屉栏。 </td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title"> 通过 JavaScript 调用 <a class="anchor" id="js"></a></h4><pre><code class="language-js">// selector 为抽屉栏的 CSS 选择器或 DOM 元素
// options 为配置参数，见下面的参数列表
var inst = new mdui.Drawer(selector, options);</code></pre></div><a href="https://cdn.w3cbus.com/mdui/docs-1/assets/drawer/demo1" target="_blank" class="mdui-btn mdui-color-theme-accent">运行</a><div class="mdui-typo"><h4 class="article-title">参数 <a class="anchor" id="option"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>overlay</code></td><td><code>boolean</code></td><td><code>false</code></td><td> 打开抽屉栏时是否显示遮罩层。该参数只对中等屏幕及以上的设备有效，在超小屏和小屏设备上始终会显示遮罩层。 </td></tr><tr><td><code>swipe</code></td><td><code>boolean</code></td><td><code>false</code></td><td>是否启用滑动手势。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">方法 <a class="anchor" id="method"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>open</code></td><td>显示抽屉栏。</td></tr><tr><td><code>close</code></td><td>隐藏抽屉栏。</td></tr><tr><td><code>toggle</code></td><td>切换抽屉栏的显示状态。</td></tr><tr><td><code>getState</code></td><td> 返回当前抽屉栏的状态。共包含四种状态（<code>opening</code>、<code>opened</code>、<code>closing</code>、<code>closed</code>）。 </td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">事件 <a class="anchor" id="event"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件</th><th>描述</th><th>目标</th><th>参数</th></tr></thead><tbody><tr><td><code>open.mdui.drawer</code></td><td>抽屉栏开始打开动画时，事件将被触发。</td><td rowspan="4"><code>&lt;div class=&quot;mdui-drawer&quot;&gt;&lt;/div&gt;</code></td><td rowspan="4"><code>event._detail.inst</code>：实例</td></tr><tr><td><code>opened.mdui.drawer</code></td><td>抽屉栏完成打开动画时，事件将被触发。</td></tr><tr><td><code>close.mdui.drawer</code></td><td>抽屉栏开始关闭动画时，事件将被触发。</td></tr><tr><td><code>closed.mdui.drawer</code></td><td>抽屉栏完成关闭动画时，事件将被触发。</td></tr></tbody></table></div></div><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme"> CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-drawer</code></td><td>定义一个抽屉栏。</td></tr><tr><td><code>.mdui-drawer-right</code></td><td>在页面右侧的抽屉栏。</td></tr><tr><td><code>.mdui-drawer-full-height</code></td><td>使抽屉栏占据 100% 高度。</td></tr><tr><td><code>.mdui-drawer-open</code></td><td>使抽屉栏默认处于显示状态。</td></tr><tr><td><code>.mdui-drawer-close</code></td><td>使抽屉栏默认处于隐藏状态。</td></tr><tr><td><code>.mdui-drawer-body-left</code></td><td>为 <code>body</code> 添加 <code>padding-left</code></td></tr><tr><td><code>.mdui-drawer-body-right</code></td><td>为 <code>body</code> 添加 <code>padding-right</code></td></tr></tbody></table></div></div></div>`,2))],64)}}});export{y as default};
