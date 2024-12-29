const e={docsHtml:`<p>mdui 内置了一个轻量级的 JavaScript 工具库，它提供了类似于 jQuery 的 API 和链式调用方式，但其体积只有 jQuery 的六分之一。</p>
<p>你可以按需导入该工具函数：</p>
<pre><code class="language-js">import { $ } from &#39;mdui/jq.js&#39;;
</code></pre>
<h2 id="api-core">
                  <a href="#api-core">核心</a>
                </h2>
<h3 id="dollar">
                  <a href="#dollar"><code>$()</code></a>
                </h3>
<p>该函数有多种用法：</p>
<p>传入 CSS 选择器作为参数，返回包含匹配元素的 JQ 对象。</p>
<pre><code class="language-js">$(&#39;.box&#39;);
</code></pre>
<p>传入 DOM 元素、任意数组、NodeList 或 JQ 对象，返回包含指定元素的 JQ 对象。</p>
<pre><code class="language-js">$(document);
</code></pre>
<p>传入 HTML 字符串，返回包含根据 HTML 创建的 DOM 的 JQ 对象。</p>
<pre><code class="language-js">$(\`&lt;div id=&quot;wrapper&quot;&gt;
  &lt;span id=&quot;inner&quot;&gt;&lt;/span&gt;
&lt;/div&gt;\`);
</code></pre>
<p>传入一个函数，当 DOM 加载完毕后会调用该函数。</p>
<pre><code class="language-js">$(function () { console.log(&#39;DOM Loaded&#39;) });
</code></pre>
<h2 id="api-extend">
                  <a href="#api-extend">扩展</a>
                </h2>
<h3 id="d-extend">
                  <a href="#d-extend"><code>$.extend()</code></a>
                </h3>
<p>如果只传入一个对象，该对象中的属性将合并到 <code>$</code> 对象中，相当于在 <code>$</code> 的命名空间下添加新的功能。</p>
<pre><code class="language-js">$.extend({
  customFunc: function () {}
});

// 然后就可以这样调用自定义方法了
$.customFunc();
</code></pre>
<p>如果传入了两个或更多个对象，所有对象的属性都添加到第一个对象，并返回合并后的对象。不过值为 <code>undefined</code> 的属性不会合并。</p>
<pre><code class="language-js">const object = $.extend(
  { key1: val1 },
  { key2: val2 },
  { key3: val3 }
);

// 此时第一个对象和返回值都是 { key1: val1, key2: val2, key3: val3 }
</code></pre>
<h3 id="fn-extend">
                  <a href="#fn-extend"><code>$.fn.extend()</code></a>
                </h3>
<p>在 <code>$</code> 的原型链上扩展方法。</p>
<pre><code class="language-js">$.fn.extend({
  customFunc: function () {}
});

// 然后就可以这样使用扩展的方法了
$(document).customFunc();
</code></pre>
<h2 id="api-url">
                  <a href="#api-url">URL</a>
                </h2>
<h3 id="d-param">
                  <a href="#d-param"><code>$.param()</code></a>
                </h3>
<p>将数组或对象序列化为 URL 查询字符串。</p>
<pre><code class="language-js">$.param({ width: 1680, height: 1050 });
// width=1680&amp;height=1050

$.param({ foo: { one: 1, two: 2 } });
// foo[one]=1&amp;foo[two]=2

$.param({ ids: [1, 2, 3] });
// ids[]=1&amp;ids[]=2&amp;ids[]=3
</code></pre>
<p>如果传入的参数是数组，那么该数组的格式必须与 <a href="#serializeArray"><code>.serializeArray()</code></a> 返回的格式一致。</p>
<pre><code class="language-js">$.param([
  { &quot;name&quot;: &quot;name&quot;, &quot;value&quot;: &quot;mdui&quot; },
  { &quot;name&quot;: &quot;password&quot;, &quot;value&quot;: &quot;123456&quot; }
]);
// name=mdui&amp;password=123456
</code></pre>
<h2 id="api-array">
                  <a href="#api-array">数组和对象操作</a>
                </h2>
<h3 id="d-each">
                  <a href="#d-each"><code>$.each()</code></a>
                </h3>
<p>遍历数组或对象。它返回的是第一个参数，即被遍历的数组或对象。</p>
<p>回调函数的第一个参数是数组的索引或对象的键，第二个参数是数组或对象对应位置的值。</p>
<p>在回调函数中，<code>this</code> 指向数组或对象对应位置的值。如果回调函数返回 <code>false</code>，则停止遍历。</p>
<pre><code class="language-js">// 遍历数组
$.each([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], function (index, value) {
  console.log(index + &#39;:&#39; + value);
});

// 结果：
// 0:a
// 1:b
// 2:c
</code></pre>
<pre><code class="language-js">// 遍历对象
$.each({&#39;name&#39;: &#39;mdui&#39;, &#39;lang&#39;: &#39;zh&#39;}, function (key, value) {
  console.log(key + &#39;:&#39; + value);
});

// 结果
// name:mdui
// lang:zh
</code></pre>
<h3 id="d-merge">
                  <a href="#d-merge"><code>$.merge()</code></a>
                </h3>
<p>将第二个数组的元素追加到第一个数组中，并返回合并后的数组。</p>
<pre><code class="language-js">const first = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
const second = [&#39;c&#39;, &#39;d&#39;, &#39;e&#39;];
const result = $.merge(first, second);

console.log(first); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]
console.log(result); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]
</code></pre>
<h3 id="d-unique">
                  <a href="#d-unique"><code>$.unique()</code></a>
                </h3>
<p>移除数组中的重复元素。</p>
<pre><code class="language-js">const result = $.unique([1, 2, 12, 3, 2, 1, 2, 1, 1, 1, 1]);
console.log(result); // [1, 2, 12, 3]
</code></pre>
<h3 id="d-map">
                  <a href="#d-map"><code>$.map()</code></a>
                </h3>
<p>遍历数组或对象，返回一个由回调函数的返回值组成的新数组。</p>
<p>回调函数的第一个参数是数组或对象对应位置的值，第二个参数是数组的索引或对象的键。</p>
<p>回调函数可以返回任何值。如果返回的是数组，那么这个数组会被展开。如果返回的是 <code>null</code> 或 <code>undefined</code>，那么这个值会被忽略。在回调函数内部，<code>this</code> 指向 <code>window</code> 对象。</p>
<pre><code class="language-js">// 遍历数组
const result = $.map([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], function (value, index) {
  return index + value;
});
console.log(result); // [&#39;0a&#39;, &#39;1b&#39;, &#39;2c&#39;]
</code></pre>
<pre><code class="language-js">// 当回调函数返回数组时，数组会被展开
const result = $.map([1, 2, 3], function (value, index) {
  return [value, value + 1];
});
console.log(result); // [1, 2, 2, 3, 3, 4]
</code></pre>
<pre><code class="language-js">// 遍历对象
const result = $.map({ name: &#39;mdui&#39;, password: &#39;123456&#39; }, function (value, key) {
  return key + &#39;:&#39; + value;
});
console.log(result); // [&#39;name:mdui&#39;, &#39;password:123456&#39;]
</code></pre>
<h3 id="d-contains">
                  <a href="#d-contains"><code>$.contains()</code></a>
                </h3>
<p>判断一个节点是否包含另一个节点。如果父节点包含子节点，返回 <code>true</code>；否则，返回 <code>false</code>。</p>
<pre><code class="language-js">$.contains(document, document.body); // true
$.contains(document.body, document); // false
</code></pre>
<h2 id="api-type">
                  <a href="#api-type">数据类型判断</a>
                </h2>
<h3 id="is">
                  <a href="#is"><code>.is()</code></a>
                </h3>
<p>判断集合中是否至少有一个元素与参数匹配。如果匹配，返回 <code>true</code>；否则，返回 <code>false</code>。</p>
<p>参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象，或者回调函数。</p>
<p>如果参数是回调函数，那么函数的第一个参数是索引，第二个参数是当前元素。在函数内部，<code>this</code> 指向当前元素。如果函数返回 <code>true</code>，表示当前元素与参数匹配；如果返回 <code>false</code>，表示当前元素与参数不匹配。</p>
<pre><code class="language-js">$(&#39;.box&#39;).is(&#39;.box&#39;); // true
$(&#39;.box&#39;).is(&#39;.boxss&#39;); // false
$(&#39;.box&#39;).is($(&#39;.box&#39;)[0]); // true
</code></pre>
<pre><code class="language-js">// 通过回调函数的返回值做判断
$(document).is(function (index, element) {
  return element === document;
});
// true
</code></pre>
<h2 id="api-object">
                  <a href="#api-object">对象访问</a>
                </h2>
<h3 id="length">
                  <a href="#length"><code>.length</code></a>
                </h3>
<p>返回当前集合中元素的数量。</p>
<pre><code class="language-js">$(&#39;body&#39;).length; // 1
</code></pre>
<h3 id="each">
                  <a href="#each"><code>.each()</code></a>
                </h3>
<p>遍历当前集合，为集合中的每个元素执行一个函数。如果函数返回 <code>false</code>，则停止遍历。</p>
<p>函数的第一个参数是元素的索引位置，第二个参数是当前元素。在函数内部，<code>this</code> 指向当前元素。</p>
<pre><code class="language-js">$(&#39;img&#39;).each(function(index, element) {
  this.src = &#39;test&#39; + index + &#39;.jpg&#39;;
});
</code></pre>
<h3 id="map">
                  <a href="#map"><code>.map()</code></a>
                </h3>
<p>遍历当前集合，为集合中的每个元素执行一个函数，返回由函数返回值组成的新集合。</p>
<p>函数可以返回单个数据或数据数组。如果返回数组，那么会将数组中的元素依次添加到新集合中。如果函数返回 <code>null</code> 或 <code>undefined</code>，那么这个值不会被添加到新集合中。</p>
<p>函数的第一个参数是元素的索引位置，第二个参数是当前元素。在函数内部，<code>this</code> 指向当前元素。</p>
<pre><code class="language-js">const result = $(&#39;input.checked&#39;).map(function (i, element) {
  return element.value;
});

// result 是一个由匹配元素的值组成的 JQ 对象
</code></pre>
<h3 id="eq">
                  <a href="#eq"><code>.eq()</code></a>
                </h3>
<p>返回一个新集合，该集合只包含指定索引位置的元素。</p>
<pre><code class="language-js">$(&#39;div&#39;).eq(0); // 返回仅包含第一个元素的集合
$(&#39;div&#39;).eq(-1); // 返回仅包含最后一个元素的集合
$(&#39;div&#39;).eq(-2); // 返回仅包含倒数第二个元素的集合
</code></pre>
<h3 id="first">
                  <a href="#first"><code>.first()</code></a>
                </h3>
<p>返回一个新集合，该集合只包含当前集合中的第一个元素。</p>
<pre><code class="language-js">$(&#39;div&#39;).first(); // 返回仅包含第一个 div 的集合
</code></pre>
<h3 id="last">
                  <a href="#last"><code>.last()</code></a>
                </h3>
<p>返回一个新集合，该集合只包含当前集合中的最后一个元素。</p>
<pre><code class="language-js">$(&#39;div&#39;).last(); // 返回仅包含最后一个 div 的集合
</code></pre>
<h3 id="get">
                  <a href="#get"><code>.get()</code></a>
                </h3>
<p>返回指定索引位置的元素。如果没有传入参数，它将返回由集合中所有元素组成的数组。</p>
<pre><code class="language-js">$(&#39;div&#39;).get(); // 返回所有 div 元素组成的数组
$(&#39;div&#39;).get(0); // 返回第一个 div 元素
$(&#39;div&#39;).get(-1); // 返回最后一个 div 元素
</code></pre>
<h3 id="index">
                  <a href="#index"><code>.index()</code></a>
                </h3>
<p>如果没有传入参数，它将返回当前集合中第一个元素相对于其同辈元素的索引值。</p>
<p>如果传入一个 CSS 选择器，它将返回当前集合中第一个元素相对于 CSS 选择器匹配元素的索引值。</p>
<p>如果传入一个 DOM 元素，它将返回该元素在当前集合中的索引值。</p>
<p>如果传入一个 JQ 对象，它将返回对象中第一个元素在当前集合中的索引值。</p>
<pre><code class="language-html">&lt;div id=&quot;child&quot;&gt;
  &lt;div id=&quot;child1&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child2&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child3&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child4&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<pre><code class="language-js">$(&#39;#child3&#39;).index(); // 2
$(&#39;#child3&#39;).index(&#39;#child div&#39;); // 2
$(&#39;#child div&#39;).index($(&#39;#child3&#39;).get(0)); // 2
</code></pre>
<h3 id="slice">
                  <a href="#slice"><code>.slice()</code></a>
                </h3>
<p>返回当前集合的子集。</p>
<p>你可以通过传入两个参数来指定子集的起始和结束位置（不包含结束位置的元素）。如果没有传入第二个参数，它将返回从起始位置到集合末尾的所有元素。</p>
<pre><code class="language-js">// 返回集合中第三个（包含第三个）之后的所有元素
$(&#39;div&#39;).slice(3);

// 返回集合中第三个到第五个（包含第三个，不包含第五个）之间的元素
$(&#39;div&#39;).slice(3, 5);
</code></pre>
<h3 id="filter">
                  <a href="#filter"><code>.filter()</code></a>
                </h3>
<p>从当前集合中筛选出与指定表达式匹配的元素。参数可以是 CSS 选择器、DOM 元素、DOM 元素数组或回调函数。</p>
<p>如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是当前元素。在函数内部，<code>this</code> 指向当前元素。如果函数返回 <code>true</code>，当前元素会被保留；如果返回 <code>false</code>，当前元素会被移除。</p>
<pre><code class="language-js">// 筛选出所有含 .box 的 div 元素
$(&#39;div&#39;).filter(&#39;.box&#39;);

// 筛选出所有已选中选项
$(&#39;#select option&#39;).filter(function (index, element) {
  return element.selected;
});
</code></pre>
<h3 id="not">
                  <a href="#not"><code>.not()</code></a>
                </h3>
<p>从当前集合中筛选出与指定表达式不匹配的元素。</p>
<p>参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象，或返回 <code>boolean</code> 值的回调函数。</p>
<p>如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是当前元素。在函数内部，<code>this</code> 指向当前元素。如果函数返回 <code>true</code>，当前元素会被移除；如果返回 <code>false</code>，当前元素会被保留。</p>
<pre><code class="language-js">// 筛选出所有不含 .box 类的 div 元素
$(&#39;div&#39;).not(&#39;.box&#39;);

// 筛选出所有未选中选项
$(&#39;#select option&#39;).not(function (index, element) {
  return element.selected;
});
</code></pre>
<h2 id="api-css">
                  <a href="#api-css">CSS 类</a>
                </h2>
<h3 id="hasClass">
                  <a href="#hasClass"><code>.hasClass()</code></a>
                </h3>
<p>判断集合中的第一个元素是否含有指定的 CSS 类。</p>
<pre><code class="language-js">// 判断第一个 div 元素是否含有 .item
$(&#39;div&#39;).hasClass(&#39;item&#39;);
</code></pre>
<h3 id="addClass">
                  <a href="#addClass"><code>.addClass()</code></a>
                </h3>
<p>为集合中的每个元素添加 CSS 类，多个类名之间可以用空格分隔。</p>
<p>参数可以是字符串，也可以是一个返回 CSS 类名的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是该元素上原有的 CSS 类名。在函数内部，<code>this</code> 指向当前元素。</p>
<pre><code class="language-js">// 为所有 div 元素添加 .item
$(&#39;div&#39;).addClass(&#39;item&#39;);

// 为所有 div 元素添加 .item1 和 .item2
$(&#39;div&#39;).addClass(&#39;item1 item2&#39;);

// 为所有 div 元素添加由回调函数返回的 CSS 类
$(&#39;div&#39;).addClass(function (index, currentClassName) {
  return currentClassName + &#39;-&#39; + index;
});
</code></pre>
<h3 id="removeClass">
                  <a href="#removeClass"><code>.removeClass()</code></a>
                </h3>
<p>移除集合中每个元素上的指定 CSS 类，多个类名之间可以用空格分隔。</p>
<p>参数可以是字符串，也可以是一个返回 CSS 类名的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是该元素上原有的 CSS 类名。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果没有传入参数，该方法将直接移除元素上的 <code>class</code> 属性。</p>
<pre><code class="language-js">// 移除所有 div 元素上的 .item
$(&#39;div&#39;).removeClass(&#39;item&#39;);

// 移除所有 div 元素上的 .item1 和 .item2
$(&#39;div&#39;).removeClass(&#39;item1 item2&#39;);

// 移除所有 div 元素上的由回调函数返回的 CSS 类
$(&#39;div&#39;).removeClass(function (index, currentClassName) {
  return &#39;item&#39;;
});
</code></pre>
<h3 id="toggleClass">
                  <a href="#toggleClass"><code>.toggleClass()</code></a>
                </h3>
<p>如果元素上有指定的 CSS 类，则删除它；如果没有，则添加它。多个类名之间可以用空格分隔。</p>
<p>参数可以是字符串，也可以是一个返回 CSS 类名的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是该元素上原有的 CSS 类名。在函数内部，<code>this</code> 指向当前元素。</p>
<pre><code class="language-js">// 切换所有 div 元素上的 .item 类
$(&#39;div&#39;).toggleClass(&#39;item&#39;);

// 切换所有 div 元素上的 .item1 和 .item2 类
$(&#39;div&#39;).toggleClass(&#39;item1 item2&#39;);

// 切换所有 div 元素上的由回调函数返回的 CSS 类
$(&#39;div&#39;).toggleClass(function (index, currentClassName) {
  return &#39;item&#39;;
});
</code></pre>
<h2 id="api-attr">
                  <a href="#api-attr">节点属性</a>
                </h2>
<h3 id="prop">
                  <a href="#prop"><code>.prop()</code></a>
                </h3>
<p>获取集合中第一个元素的 JavaScript 属性值。</p>
<pre><code class="language-js">// 获取第一个元素 checked 属性值
$(&#39;input&#39;).prop(&#39;checked&#39;);
</code></pre>
<p>如果传入了两个参数，该方法将设置集合中所有元素的指定 JavaScript 属性值。</p>
<p>属性值可以是任意类型的值，或回调函数的返回值。回调函数的第一个参数为元素的索引位置，第二个参数为该元素上原有的属性值，函数内的 <code>this</code> 指向当前元素。
属性值可以是任意类型的值，也可以是一个返回属性值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是该元素上原有的属性值。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果属性值或回调函数的返回值为 <code>undefined</code>，该方法将不会修改元素的原有属性。</p>
<pre><code class="language-js">// 设置所有选中元素的 checked 属性值为 true
$(&#39;input&#39;).prop(&#39;checked&#39;, true);

// 通过回调函数的返回值设置属性值
$(&#39;input&#39;).prop(&#39;checked&#39;, function (index, oldPropValue) {
  return true;
});
</code></pre>
<p>也可以通过传入一个对象来同时设置多个属性。</p>
<pre><code class="language-js">// 同时设置元素的多个属性值
$(&#39;input&#39;).prop({
  checked: false,
  disabled: function (index, oldPropValue) {
    return true;
  }
});
</code></pre>
<h3 id="removeProp">
                  <a href="#removeProp"><code>.removeProp()</code></a>
                </h3>
<p>删除集合中所有元素上指定的 JavaScript 属性值。</p>
<pre><code class="language-js">$(&#39;input&#39;).removeProp(&#39;disabled&#39;);
</code></pre>
<h3 id="attr">
                  <a href="#attr"><code>.attr()</code></a>
                </h3>
<p>获取集合中第一个元素的 HTML 属性值。</p>
<pre><code class="language-js">// 获取第一个元素的属性值
$(&#39;div&#39;).attr(&#39;username&#39;);
</code></pre>
<p>如果传入两个参数，该方法将设置集合中所有元素的指定 HTML 属性值。</p>
<p>属性值可以是字符串或数值，也可以是一个返回属性值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是该元素上原有的属性值。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果属性值或回调函数的返回值为 <code>null</code>，该方法将删除指定属性；如果为 <code>undefined</code>，则不会修改元素的原有属性。</p>
<pre><code class="language-js">// 设置所有选中元素的属性值
$(&#39;div&#39;).attr(&#39;username&#39;, &#39;mdui&#39;);

// 通过回调函数的返回值设置属性值
$(&#39;div&#39;).attr(&#39;username&#39;, function (index, oldAttrValue) {
  return &#39;mdui&#39;;
});
</code></pre>
<p>也可以通过传入一个对象来同时设置多个属性。</p>
<pre><code class="language-js">// 同时设置元素的多个属性值
$(&#39;div&#39;).attr({
  username: &#39;mdui&#39;,
  lastname: function (index, oldAttrValue) {
    return &#39;test&#39;;
  }
});
</code></pre>
<h3 id="removeAttr">
                  <a href="#removeAttr"><code>.removeAttr()</code></a>
                </h3>
<p>删除集合中所有元素上指定的 HTML 属性，多个属性名之间可以用空格分隔。</p>
<pre><code class="language-js">// 删除集合中所有元素上的一个属性
$(&#39;div&#39;).removeAttr(&#39;username&#39;);

// 删除集合中所有元素上的多个属性
$(&#39;div&#39;).removeAttr(&#39;username lastname&#39;);
</code></pre>
<h3 id="val">
                  <a href="#val"><code>.val()</code></a>
                </h3>
<p>返回集合中第一个元素的值。</p>
<p>如果元素是 <code>&lt;select multiple=&quot;multiple&quot;&gt;</code>，则返回一个包含所有选中项的数组。</p>
<pre><code class="language-js">// 获取选中的第一个元素的值
$(&#39;#input&#39;).val();
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的值。</p>
<p>值可以是字符串、数值、字符串数组，或一个返回值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有值。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果元素是 <code>&lt;input type=&quot;checkbox&quot;&gt;</code>、<code>&lt;input type=&quot;radio&quot;&gt;</code>、<code>&lt;option&gt;</code>，则值或回调函数的返回值可以是数组，此时将选中数组中的值，并取消不在数组中的值。</p>
<p>如果值或回调函数的返回值为 <code>undefined</code>，则将元素值设为空。</p>
<pre><code class="language-js">// 设置选中元素的值
$(&#39;#input&#39;).val(&#39;mdui&#39;);

// 通过回调函数的返回值设置元素值
$(&#39;#input&#39;).val(function (index, oldValue) {
  return &#39;mdui&#39;;
});
</code></pre>
<h3 id="text">
                  <a href="#text"><code>.text()</code></a>
                </h3>
<p>返回集合中所有元素（包含它们的后代元素）的文本内容。</p>
<pre><code class="language-js">// 获取所有 .box 元素的文本
$(&#39;.box&#39;).text();
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的文本内容。</p>
<p>值可以是字符串、数值、布尔值，或一个返回文本内容的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有文本内容。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>undefined</code>，则不修改元素的文本内容。</p>
<pre><code class="language-js">// 设置选中元素的文本内容
$(&#39;.box&#39;).text(&#39;text content&#39;);

// 通过回调函数的返回值设置元素的文本内容
$(&#39;.box&#39;).text(function (index, oldTextContent) {
  return &#39;new text content&#39;;
});
</code></pre>
<h3 id="html">
                  <a href="#html"><code>.html()</code></a>
                </h3>
<p>返回集合中第一个元素的 HTML 内容。</p>
<pre><code class="language-js">// 获取第一个 .box 元素的 HTML 内容
$(&#39;.box&#39;).html();
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的 HTML 内容。</p>
<p>值可以是 HTML 字符串、DOM 元素，或一个返回 HTML 字符串或 DOM 元素的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有 HTML 内容。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>undefined</code>，则不修改元素的 HTML 内容。</p>
<pre><code class="language-js">// 设置选中元素的 HTML
$(&#39;.box&#39;).html(&#39;&lt;div&gt;new html content&lt;/div&gt;&#39;);

// 通过回调函数的返回值设置元素的 HTML 内容
$(&#39;.box&#39;).html(function (index, oldHTMLContent) {
  return &#39;&lt;div&gt;new html content&lt;/div&gt;&#39;;
});
</code></pre>
<h2 id="api-data">
                  <a href="#api-data">数据存储</a>
                </h2>
<h3 id="d-data">
                  <a href="#d-data"><code>$.data()</code></a>
                </h3>
<p>在指定元素上读取或存储数据。</p>
<p>存储数据时，如果值为 <code>undefined</code>，则相当于读取元素上对应的数据。即 <code>$.data(element, &#39;key&#39;, undefined)</code> 和 <code>$.data(element, &#39;key&#39;)</code> 等效。</p>
<p>注意：该方法不会检索元素上的 <code>data-*</code> 属性。</p>
<pre><code class="language-js">// 在指定元素上存储数据，返回存储的值
$.data(document.body, &#39;layout&#39;, &#39;dark&#39;); // 返回 dark

// 在指定元素上同时存储多个数据
$.data(document.body, {
  primary: &#39;indigo&#39;,
  accent: &#39;pink&#39;,
}); // 返回 { primary: &#39;indigo&#39;, accent: &#39;pink&#39; }

// 获取在指定元素上存储的数据
$.data(document.body, &#39;layout&#39;); // 返回 dark

// 获取在指定元素上存储的所有数据
$.data(document.body); // 返回 { layout: &#39;dark&#39;, primary: &#39;indigo&#39;, accent: &#39;pink&#39; }
</code></pre>
<h3 id="d-removeData">
                  <a href="#d-removeData"><code>$.removeData()</code></a>
                </h3>
<p>移除指定元素上存储的数据。</p>
<p>可以指定多个键名，用空格分隔，或者用数组表示。如果不指定键名，将移除元素上的所有数据。</p>
<pre><code class="language-js">// 移除元素上键名为 name 的数据
$.removeData(document.body, &#39;name&#39;);

// 移除元素上键名为 name1 和 name2 的数据。下面两种方法等效：
$.removeData(document.body, &#39;name1 name2&#39;);
$.removeData(document.body, [&#39;name1&#39;, &#39;name2&#39;]);

// 移除元素上存储的所有数据
$.removeData(document.body);
</code></pre>
<h3 id="data">
                  <a href="#data"><code>.data()</code></a>
                </h3>
<p>在当前集合的元素上读取或存储数据。</p>
<p>如果存储的值为 <code>undefined</code>，则不进行存储。</p>
<p>注意：该方法检索的数据会包含元素上的 <code>data-*</code> 属性。</p>
<pre><code class="language-js">// 在当前集合中的元素上存储数据
$(&#39;.box&#39;).data(&#39;layout&#39;, &#39;dark&#39;);

// 在当前集合中的元素上同时存储多个数据
$(&#39;.box&#39;).data({
  primary: &#39;indigo&#39;,
  accent: &#39;pink&#39;,
});

// 获取当前集合中第一个元素上存储的指定数据
$(&#39;.box&#39;).data(&#39;layout&#39;); // 返回 dark

// 获取在当前集合中第一个元素上存储的所有数据
$(&#39;.box&#39;).data(); // 返回 { layout: &#39;dark&#39;, primary: &#39;indigo&#39;, accent: &#39;pink&#39; }
</code></pre>
<h3 id="removeData">
                  <a href="#removeData"><code>.removeData()</code></a>
                </h3>
<p>移除当前集合的元素上存储的数据。</p>
<p>可以指定多个键名，用空格分隔，或者用数组表示。如果不指定键名，将移除元素上的所有数据。</p>
<p>注意：该方法只会移除通过 <code>.data()</code> 方法设置的数据，不会移除 <code>data-*</code> 属性上的数据。</p>
<pre><code class="language-js">// 移除键名为 name 的数据
$(&#39;.box&#39;).removeData(&#39;name&#39;);

// 移除键名为 name1 和 name2 的数据。下面两种方法等效：
$(&#39;.box&#39;).removeData(&#39;name1 name2&#39;);
$(&#39;.box&#39;).removeData([&#39;name1&#39;, &#39;name2&#39;]);

// 移除元素上存储的所有数据
$(&#39;.box&#39;).removeData();
</code></pre>
<h2 id="api-style">
                  <a href="#api-style">样式</a>
                </h2>
<h3 id="css">
                  <a href="#css"><code>.css()</code></a>
                </h3>
<p>获取集合中第一个元素的 CSS 属性值。</p>
<pre><code class="language-js">$(&#39;.box&#39;).css(&#39;color&#39;);
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的 CSS 属性值。</p>
<p>属性值可以是字符串、数值，或一个返回字符串或数值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有 CSS 属性值。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>undefined</code>，则不修改元素的 CSS 属性值。如果值为 <code>null</code>，则移除元素的对应 CSS 属性。如果值为数值，将自动添加 <code>px</code> 作为单位，若该属性无法使用 <code>px</code> 作为单位，则会直接把值转为字符串。</p>
<pre><code class="language-js">// 设置集合中所有元素的样式值
$(&#39;.box&#39;).css(&#39;color&#39;, &#39;red&#39;)

// 通过回调函数的返回值设置所有元素的样式值
$(&#39;.box&#39;).css(&#39;color&#39;, function (index, oldCSSValue) {
  return &#39;green&#39;;
});

// 通过传入一个对象同时设置多个样式
$(&#39;.box&#39;).css({
  &#39;background-color&#39;: &#39;white&#39;,
  color: function (index, oldCSSValue) {
    return &#39;blue&#39;;
  },
});
</code></pre>
<h3 id="width">
                  <a href="#width"><code>.width()</code></a>
                </h3>
<p>获取集合中第一个元素的宽度（不包含 <code>padding</code>, <code>border</code>, <code>margin</code>）。</p>
<pre><code class="language-js">$(&#39;.box&#39;).width();
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的宽度。</p>
<p>值可以是带单位的字符串、数值，或一个返回带单位的字符串或数值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有宽度。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>null</code> 或 <code>undefined</code>，则不修改元素的宽度。如果值为数值，将自动添加 <code>px</code> 作为单位。</p>
<pre><code class="language-js">// 设置集合中所有元素的宽度
$(&#39;.box&#39;).width(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).width(10);

// 通过回调函数的返回值设置宽度
$(&#39;.box&#39;).width(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="height">
                  <a href="#height"><code>.height()</code></a>
                </h3>
<p>获取集合中第一个元素的高度（不包含 <code>padding</code>, <code>border</code>, <code>margin</code>）。</p>
<pre><code class="language-js">$(&#39;.box&#39;).height();
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的高度。</p>
<p>值可以是带单位的字符串、数值，或一个返回带单位的字符串或数值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有高度。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>null</code> 或 <code>undefined</code>，则不修改元素的高度。如果值为数值，将自动添加 <code>px</code> 作为单位。</p>
<pre><code class="language-js">// 设置集合中所有元素的高度
$(&#39;.box&#39;).height(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).height(10);

// 通过回调函数的返回值设置高度
$(&#39;.box&#39;).height(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="innerWidth">
                  <a href="#innerWidth"><code>.innerWidth()</code></a>
                </h3>
<p>获取集合中第一个元素的宽度（包含 <code>padding</code>，不包含 <code>border</code>, <code>margin</code>）。</p>
<pre><code class="language-js">$(&#39;.box&#39;).innerWidth();
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的宽度。</p>
<p>值可以是带单位的字符串、数值，或一个返回带单位的字符串或数值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有宽度。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>null</code> 或 <code>undefined</code>，则不修改元素的宽度。如果值为数值，将自动添加 <code>px</code> 作为单位。</p>
<pre><code class="language-js">// 设置集合中所有元素的宽度
$(&#39;.box&#39;).innerWidth(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).innerWidth(10);

// 通过回调函数的返回值设置宽度
$(&#39;.box&#39;).innerWidth(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="innerHeight">
                  <a href="#innerHeight"><code>.innerHeight()</code></a>
                </h3>
<p>获取集合中第一个元素的高度（包含 <code>padding</code>，不包含 <code>border</code>, <code>margin</code>）。</p>
<pre><code class="language-js">$(&#39;.box&#39;).innerHeight();
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素的高度。</p>
<p>值可以是带单位的字符串、数值，或一个返回带单位的字符串或数值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有高度。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>null</code> 或 <code>undefined</code>，则不修改元素的高度。如果值为数值，将自动添加 <code>px</code> 作为单位。</p>
<pre><code class="language-js">// 设置集合中所有元素的高度
$(&#39;.box&#39;).innerHeight(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).innerHeight(10);

// 通过回调函数的返回值设置高度
$(&#39;.box&#39;).innerHeight(function (index, oldHeight) {
  return 10;
});
</code></pre>
<h3 id="outerWidth">
                  <a href="#outerWidth"><code>.outerWidth()</code></a>
                </h3>
<p>获取集合中第一个元素的宽度（包含 <code>padding</code>、<code>border</code>，不包含 <code>margin</code>。可以传入参数 <code>true</code>，使宽度包含 <code>margin</code>）。</p>
<pre><code class="language-js">// 包含 padding、border 的宽度
$(&#39;.box&#39;).outerWidth();

// 包含 padding、border、margin 的宽度
$(&#39;.box&#39;).outerWidth(true);
</code></pre>
<p>也可以使用该方法设置集合中所有元素的宽度（包含 <code>padding</code>、<code>border</code>，不包含 <code>margin</code>。可以在第二个参数中传入 <code>true</code>，使宽度包含 <code>margin</code>）。</p>
<p>第一个参数可以是带单位的字符串、数值、或一个返回带单位的字符串或数值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有宽度。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>null</code> 或 <code>undefined</code>，则不修改元素的宽度。如果值为数值，将自动添加 <code>px</code> 作为单位。</p>
<pre><code class="language-js">// 设置集合中所有元素的宽度
$(&#39;.box&#39;).outerWidth(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).outerWidth(10);

// 第二个参数为 true，则宽度将包含 margin
$(&#39;.box&#39;).outerWidth(10, true);

// 通过回调函数的返回值设置宽度
$(&#39;.box&#39;).outerWidth(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="outerHeight">
                  <a href="#outerHeight"><code>.outerHeight()</code></a>
                </h3>
<p>获取集合中第一个元素的高度（包含 <code>padding</code>、<code>border</code>，不包含 <code>margin</code>。可以传入参数 <code>true</code>，使高度包含 <code>margin</code>）。</p>
<pre><code class="language-js">// 包含 padding、border 的高度
$(&#39;.box&#39;).outerHeight();

// 包含 padding、border、margin 的高度
$(&#39;.box&#39;).outerHeight(true);
</code></pre>
<p>也可以用该方法设置集合中所有元素的高度（包含 <code>padding</code>、<code>border</code>，不包含 <code>margin</code>。可以在第二个参数中传入 <code>true</code>，使高度包含 <code>margin</code>）。</p>
<p>第一个参数可以是带单位的字符串、数值、或一个返回带单位的字符串或数值的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有高度。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果值或回调函数的返回值为 <code>null</code> 或 <code>undefined</code>，则不修改元素的高度。如果值为数值，将自动添加 <code>px</code> 作为单位。</p>
<pre><code class="language-js">// 设置集合中所有元素的高度
$(&#39;.box&#39;).outerHeight(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).outerHeight(10);

// 第二个参数为 true，则高度将包含 margin
$(&#39;.box&#39;).outerHeight(10, true);

// 通过回调函数的返回值设置高度
$(&#39;.box&#39;).outerHeight(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="hide">
                  <a href="#hide"><code>.hide()</code></a>
                </h3>
<p>隐藏集合中的所有元素。</p>
<pre><code class="language-js">$(&#39;.box&#39;).hide();
</code></pre>
<h3 id="show">
                  <a href="#show"><code>.show()</code></a>
                </h3>
<p>显示集合中的所有元素。</p>
<pre><code class="language-js">$(&#39;.box&#39;).show();
</code></pre>
<h3 id="toggle">
                  <a href="#toggle"><code>.toggle()</code></a>
                </h3>
<p>切换集合中所有元素的显示状态。</p>
<pre><code class="language-js">$(&#39;.box&#39;).toggle();
</code></pre>
<h3 id="offset">
                  <a href="#offset"><code>.offset()</code></a>
                </h3>
<p>获取当前集合中第一个元素相对于 <code>document</code> 的坐标。</p>
<pre><code class="language-js">$(&#39;.box&#39;).offset(); // { top: 20, left: 30 }
</code></pre>
<p>如果传入参数，该方法将设置集合中所有元素相对于 <code>document</code> 的坐标。</p>
<p>参数可以是一个包含 <code>top</code> 和 <code>left</code> 属性的对象，或一个返回此格式对象的回调函数。如果参数是回调函数，该函数的第一个参数是元素的索引位置，第二个参数是元素的原有坐标。在函数内部，<code>this</code> 指向当前元素。</p>
<p>如果参数中 <code>top</code> 或 <code>left</code> 的值为 <code>undefined</code>，则不修改对应的值。</p>
<pre><code class="language-js">// 设置集合中所有元素的坐标
$(&#39;.box&#39;).offset({ top: 20, left: 30 });

// 通过回调函数的返回值设置元素的坐标
$(&#39;.box&#39;).offset(function (index, oldOffset) {
  return { top: 20, left: 30 };
});
</code></pre>
<h3 id="offsetParent">
                  <a href="#offsetParent"><code>.offsetParent()</code></a>
                </h3>
<p>获取集合中第一个元素的定位父元素。即父元素中第一个 <code>position</code> 属性为 <code>relative</code> 或 <code>absolute</code> 的元素。</p>
<pre><code class="language-js">$(&#39;.box&#39;).offsetParent();
</code></pre>
<h3 id="position">
                  <a href="#position"><code>.position()</code></a>
                </h3>
<p>获取集合中第一个元素相对于其定位父元素的偏移。</p>
<pre><code class="language-js">$(&#39;.box&#39;).position(); // { top: 20, left: 30 }
</code></pre>
<h2 id="api-selector">
                  <a href="#api-selector">查找节点</a>
                </h2>
<h3 id="find">
                  <a href="#find"><code>.find()</code></a>
                </h3>
<p>在当前集合中，根据 CSS 选择器找到指定的后代节点集合。</p>
<pre><code class="language-js">// 找到 #box 的后代节点中，包含 .box 的节点集合
$(&#39;#box&#39;).find(&#39;.box&#39;)
</code></pre>
<h3 id="children">
                  <a href="#children"><code>.children()</code></a>
                </h3>
<p>在当前集合中，获取直接子元素组成的集合。可以传入一个 CSS 选择器作为参数，对子元素进行过滤。</p>
<pre><code class="language-js">// 找到 #box 的所有直接子元素
$(&#39;#box&#39;).children();

// 找到 #box 的所有直接子元素中，包含 .box 的元素
$(&#39;#box&#39;).children(&#39;.box&#39;);
</code></pre>
<h3 id="has">
                  <a href="#has"><code>.has()</code></a>
                </h3>
<p>在当前集合中，筛选出含有指定子元素的元素。参数可以是 CSS 选择器或 DOM 元素。</p>
<pre><code class="language-js">// 给含有 ul 的 li 加上背景色
$(&#39;li&#39;).has(&#39;ul&#39;).css(&#39;background-color&#39;, &#39;red&#39;);
</code></pre>
<h3 id="parent">
                  <a href="#parent"><code>.parent()</code></a>
                </h3>
<p>获取当前集合中，所有元素的直接父元素的集合。可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的父元素的集合。</p>
<pre><code class="language-js">// 返回 .box 元素的直接父元素
$(&#39;.box&#39;).parent();

// 返回 .box 元素的直接父元素中含有 .parent 类的元素
$(&#39;.box&#39;).parent(&#39;.parent&#39;);
</code></pre>
<h3 id="parents">
                  <a href="#parents"><code>.parents()</code></a>
                </h3>
<p>获取当前集合中，所有元素的祖先元素的集合。可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的祖先元素的集合。</p>
<pre><code class="language-js">// 返回 span 元素的所有祖先元素
$(&#39;span&#39;).parents();

// 返回 span 元素的所有是 p 元素的祖先元素
$(&#39;span&#39;).parents(&#39;p&#39;);
</code></pre>
<h3 id="parentsUntil">
                  <a href="#parentsUntil"><code>.parentsUntil()</code></a>
                </h3>
<p>获取当前集合中，每个元素的所有父辈元素，直到遇到和第一个参数匹配的元素为止（不包含匹配元素）。</p>
<p>第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。</p>
<p>可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。</p>
<p>若没有指定参数，则所有的祖先元素都将被匹配，即和 <code>.parents()</code> 效果一样。</p>
<pre><code class="language-js">// 获取 .item 元素的所有祖先元素
$(&#39;.item&#39;).parentsUntil();

// 查找 .item 元素的所有父辈元素，直到遇到 .parent 元素为止
$(&#39;.item&#39;).parentsUntil(&#39;.parent&#39;);

// 获取 .item 元素的所有是 div 元素的祖先元素，直到遇到 .parent 元素为止
$(&#39;.item&#39;).parentsUntil(&#39;.parent&#39;, &#39;div&#39;);
</code></pre>
<h3 id="prev">
                  <a href="#prev"><code>.prev()</code></a>
                </h3>
<p>获取当前集合中，每个元素的前一个同级元素组成的集合。可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的同级元素的集合。</p>
<pre><code class="language-js">// 获取 .box 元素的前一个同级元素的集合
$(&#39;.box&#39;).prev();

// 获取 .box 元素的前一个是 div 的同级元素的集合
$(&#39;.box&#39;).prev(&#39;div&#39;);
</code></pre>
<h3 id="prevAll">
                  <a href="#prevAll"><code>.prevAll()</code></a>
                </h3>
<p>获取当前集合中，每个元素前面的所有同级元素组成的集合。可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的同级元素的集合。</p>
<pre><code class="language-js">// 获取 .box 元素前面的所有同级元素
$(&#39;.box&#39;).prevAll();

// 获取 .box 元素前面的所有含 .selected 的同级元素
$(&#39;.box&#39;).prevAll(&#39;.selected&#39;);
</code></pre>
<h3 id="prevUntil">
                  <a href="#prevUntil"><code>.prevUntil()</code></a>
                </h3>
<p>获取当前集合中，每个元素前面的所有同级元素，直到遇到与第一个参数匹配的元素为止（不包含匹配元素）。</p>
<p>第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。</p>
<p>若没有指定参数，则返回前面的所有同级元素，即与 <code>.prevAll()</code> 方法的效果相同。</p>
<pre><code class="language-js">// 获取 .box 元素前面的所有同级元素
$(&#39;.box&#39;).prevUntil();

// 获取 .box 元素前面的所有同级元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).prevUntil(&#39;.until&#39;);

// 获取 .box 元素前面的所有是 div 的同级元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).prevUntil(&#39;.until&#39;, &#39;div&#39;);
</code></pre>
<h3 id="next">
                  <a href="#next"><code>.next()</code></a>
                </h3>
<p>获取当前集合中，每个元素的后一个同级元素组成的集合。可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的同级元素的集合。</p>
<pre><code class="language-js">// 获取 .box 元素的后一个同级元素的集合
$(&#39;.box&#39;).next();

// 获取 .box 元素的后一个是 div 的同级元素的集合
$(&#39;.box&#39;).next(&#39;div&#39;);
</code></pre>
<h3 id="nextAll">
                  <a href="#nextAll"><code>.nextAll()</code></a>
                </h3>
<p>获取当前集合中，每个元素后面的所有同级元素组成的集合。可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的同级元素的集合。</p>
<pre><code class="language-js">// 获取 .box 元素后面的所有同级元素
$(&#39;.box&#39;).nextAll();

// 获取 .box 元素后面的所有含 .selected 的同级元素
$(&#39;.box&#39;).nextAll(&#39;.selected&#39;);
</code></pre>
<h3 id="nextUntil">
                  <a href="#nextUntil"><code>.nextUntil()</code></a>
                </h3>
<p>获取当前集合中，每个元素后面的所有同级元素，直到遇到与第一个参数匹配的元素为止（不包含匹配元素）。</p>
<p>第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。可以传入第二个参数，必须是 CSS 选择器，表示仅返回与该参数匹配的元素。</p>
<p>若没有指定参数，则返回后面的所有同级元素，即与 <code>.nextAll()</code> 方法的效果相同。</p>
<pre><code class="language-js">// 获取 .box 元素后面所有的同级元素
$(&#39;.box&#39;).nextUntil();

// 获取 .box 元素后所有的同级元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).nextUntil(&#39;.until&#39;);

// 获取 .box 元素后面同级的 div 元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).nextUntil(&#39;.until&#39;, &#39;div&#39;);
</code></pre>
<h3 id="closest">
                  <a href="#closest"><code>.closest()</code></a>
                </h3>
<p>从当前元素开始向上逐级查找，返回最先匹配到的元素。参数可以是 CSS 选择器、DOM 元素、JQ 对象。</p>
<pre><code class="language-js">// 获取 .box 元素的父元素中最近的 .parent 元素
$(&#39;.box&#39;).closest(&#39;.parent&#39;);
</code></pre>
<h3 id="siblings">
                  <a href="#siblings"><code>.siblings()</code></a>
                </h3>
<p>获取当前集合中，每个元素的所有同级元素。可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的同级元素的集合。</p>
<pre><code class="language-js">// 获取 .box 元素的所有同级元素
$(&#39;.box&#39;).siblings();

// 获取 .box 元素的所有同级元素中含 .selected 的元素
$(&#39;.box&#39;).siblings(&#39;.selected&#39;);
</code></pre>
<h3 id="add">
                  <a href="#add"><code>.add()</code></a>
                </h3>
<p>将元素添加到当前集合中。参数可以是 HTML 字符串、CSS 选择器、JQ 对象、DOM 元素、DOM 元素数组、NodeList。</p>
<pre><code class="language-js">// 把含 .selected 的元素添加到当前集合中
$(&#39;.box&#39;).add(&#39;.selected&#39;);
</code></pre>
<h2 id="api-dom">
                  <a href="#api-dom">节点操作</a>
                </h2>
<h3 id="empty">
                  <a href="#empty"><code>.empty()</code></a>
                </h3>
<p>移除当前元素中所有的子元素。</p>
<pre><code class="language-js">$(&#39;.box&#39;).empty();
</code></pre>
<h3 id="remove">
                  <a href="#remove"><code>.remove()</code></a>
                </h3>
<p>从 DOM 中移除当前集合中的元素。可以传入一个 CSS 选择器作为参数，仅移除与该参数匹配的元素。</p>
<pre><code class="language-js">// 移除所有 p 元素
$(&#39;p&#39;).remove();

// 移除所有含 .box 的 p 元素
$(&#39;p&#39;).remove(&#39;.box&#39;);
</code></pre>
<h3 id="prepend">
                  <a href="#prepend"><code>.prepend()</code></a>
                </h3>
<p>在当前集合中的元素内部的前面插入指定内容。参数可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p>
<p>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数。函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 <code>this</code> 指向当前元素。</p>
<p>该方法返回原始集合。</p>
<pre><code class="language-js">// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).prepend(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;&lt;b&gt;Hello&lt;/b&gt;I would like to say: &lt;/p&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).prepend(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;I would like to say: &lt;/p&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).append(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;p&gt;&lt;b&gt;Hello0&lt;/b&gt;Hello&lt;/p&gt;
</code></pre>
<h3 id="prependTo">
                  <a href="#prependTo"><code>.prependTo()</code></a>
                </h3>
<p>将当前集合中的元素追加到指定元素内部的前面。参数可以是 CSS 选择器、HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。</p>
<p>该方法返回原始集合。</p>
<pre><code class="language-js">$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).prependTo(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;);
// 结果：[ &lt;p&gt;&lt;p&gt;Hello&lt;/p&gt;I would like to say: &lt;/p&gt; ]
</code></pre>
<h3 id="append">
                  <a href="#append"><code>.append()</code></a>
                </h3>
<p>在当前元素内部的后面插入指定内容。参数可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p>
<p>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 <code>this</code> 指向当前元素。</p>
<p>该方法返回原始集合。</p>
<pre><code class="language-js">// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).append(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;b&gt;Hello&lt;/b&gt;&lt;/p&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).append(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;&lt;/p&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).append(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;p&gt;Hello&lt;b&gt;Hello0&lt;/b&gt;&lt;/p&gt;
</code></pre>
<h3 id="appendTo">
                  <a href="#appendTo"><code>.appendTo()</code></a>
                </h3>
<p>将当前集合中的元素追加到指定元素内部的后面。参数可以是 CSS 选择器、HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。</p>
<p>该方法返回原始集合。</p>
<pre><code class="language-js">$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).appendTo(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;)
// 结果：&lt;p&gt;I would like to say: &lt;p&gt;Hello&lt;/p&gt;&lt;/p&gt;
</code></pre>
<h3 id="after">
                  <a href="#after"><code>.after()</code></a>
                </h3>
<p>在当前集合的元素后面插入指定内容，作为其同级元素。参数可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p>
<p>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 <code>this</code> 指向当前元素。</p>
<p>该方法返回原始集合。</p>
<pre><code class="language-js">// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).after(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).after(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).after(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;p&gt;Hello&lt;/p&gt;&lt;b&gt;Hello0&lt;/b&gt;
</code></pre>
<h3 id="insertAfter">
                  <a href="#insertAfter"><code>.insertAfter()</code></a>
                </h3>
<p>将当前集合中的元素插入到目标元素的后面，作为其同级元素。</p>
<p>如果当前集合中的元素是页面中已有的元素，则将移动该元素，而不是复制。如果有多个目标，则将克隆当前集合中的元素，并添加到每个目标元素的后面。</p>
<p>可以传入一个 HTML 字符串、CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象作为参数，来指定目标元素。</p>
<pre><code class="language-js">$(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;).insertAfter(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;
</code></pre>
<h3 id="before">
                  <a href="#before"><code>.before()</code></a>
                </h3>
<p>在当前集合的元素前面插入指定内容，作为其同级元素。参数可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p>
<p>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 <code>this</code> 指向当前元素。</p>
<p>该方法返回原始集合。</p>
<pre><code class="language-js">// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).before(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;b&gt;Hello&lt;/b&gt;&lt;p&gt;I would like to say: &lt;/p&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).before(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// 结果：&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;&lt;p&gt;I would like to say: &lt;/p&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).before(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;b&gt;Hello0&lt;/b&gt;&lt;p&gt;Hello&lt;/p&gt;
</code></pre>
<h3 id="insertBefore">
                  <a href="#insertBefore"><code>.insertBefore()</code></a>
                </h3>
<p>将当前集合中的元素插入到目标元素的前面，作为其同级元素。</p>
<p>如果当前集合中的元素是页面中已有的元素，则将移动该元素，而不是复制。如果有多个目标，则将克隆当前集合中的元素，并添加到每个目标元素的前面。</p>
<p>可以传入一个 HTML 字符串、CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象作为参数，来指定目标元素。</p>
<pre><code class="language-js">$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).insertBefore(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;
</code></pre>
<h3 id="replaceWith">
                  <a href="#replaceWith"><code>.replaceWith()</code></a>
                </h3>
<p>用指定元素来替换当前集合中的元素。</p>
<p>参数可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。</p>
<p>也可以传入一个返回 HTML 字符串、DOM 元素、DOM元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 <code>this</code> 指向当前元素。</p>
<p>该方法返回被替换掉的原始集合。</p>
<pre><code class="language-js">// 用 &lt;p&gt;Hello&lt;/p&gt; 替换所有的 .box 元素
$(&#39;.box&#39;).replaceWith(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;);

// 用回调函数的返回值替换所有 .box 元素
$(&#39;.box&#39;).replaceWith(function (index, oldHTML) {
  return oldHTML + index;
});
</code></pre>
<h3 id="replaceAll">
                  <a href="#replaceAll"><code>.replaceAll()</code></a>
                </h3>
<p>用当前集合中的元素替换指定元素。</p>
<p>参数为被替换的元素，可以是 CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象。</p>
<p>该方法返回原始集合，即用于替换的元素的集合。</p>
<pre><code class="language-js">// 用 .new 元素替换所有 .box 元素
$(&#39;.new&#39;).replaceAll(&#39;.box&#39;);
</code></pre>
<h3 id="clone">
                  <a href="#clone"><code>.clone()</code></a>
                </h3>
<p>通过深度克隆来复制集合中的所有元素。</p>
<p>该方法使用原生 <code>cloneNode</code> 方法进行深度克隆，但不会复制数据和事件处理程序到新的元素。这点和 jQuery 中利用一个参数来确定是否复制数据和事件处理不相同。</p>
<pre><code class="language-js">$(&#39;body&#39;).append($(&quot;#box&quot;).clone())
</code></pre>
<h2 id="api-form">
                  <a href="#api-form">表单</a>
                </h2>
<h3 id="serializeArray">
                  <a href="#serializeArray"><code>.serializeArray()</code></a>
                </h3>
<p>将表单元素的值组合成由 <code>name</code> 和 <code>value</code> 的键值对组成的数组。</p>
<p>该方法可以对单独的表单元素进行操作，也可以对整个 <code>&lt;form&gt;</code> 表单进行操作。</p>
<pre><code class="language-js">$(&#39;form&#39;).serializeArray();
// [
//   { &quot;name&quot;: &quot;golang&quot;, &quot;value&quot;:&quot;456&quot; },
//   { &quot;name&quot;: &quot;name&quot;, &quot;value&quot;: &quot;mdui&quot; },
//   { &quot;name&quot;: &quot;password&quot;, &quot;value&quot;: &quot;&quot; }
// ]
</code></pre>
<h3 id="serializeObject">
                  <a href="#serializeObject"><code>.serializeObject()</code></a>
                </h3>
<p>将表单元素的值转换为对象。</p>
<p>如果存在相同的键名，那么对应的值会被转换为数组。</p>
<p>该方法可以对单独的表单元素进行操作，也可以对整个 <code>&lt;form&gt;</code> 表单进行操作。</p>
<pre><code class="language-js">$(&#39;form&#39;).serializeObject()
// { name: mdui, password: 123456 }
</code></pre>
<h3 id="serialize">
                  <a href="#serialize"><code>.serialize()</code></a>
                </h3>
<p>将表单元素的值编译为 URL 编码的字符串。</p>
<pre><code class="language-js">$(&#39;form&#39;).serialize();
// golang=456&amp;name=mdui&amp;password=
</code></pre>
<h2 id="api-event">
                  <a href="#api-event">事件</a>
                </h2>
<h3 id="on">
                  <a href="#on"><code>.on()</code></a>
                </h3>
<p>为集合中每个元素的特定事件绑定事件处理函数。具体用法见下方示例：</p>
<pre><code class="language-js">// 绑定点击事件
$(&#39;.box&#39;).on(&#39;click&#39;, function (e) {
  console.log(&#39;点击了 .box 元素&#39;);
});

// 绑定多个事件
$(&#39;.box&#39;).on(&#39;click focus&#39;, function (e) {
  console.log(&#39;click 和 focus 事件都会触发该函数&#39;);
});

// 事件委托
$(document).on(&#39;click&#39;, &#39;.box&#39;, function (e) {
  console.log(&#39;点击 .box 时会触发该函数&#39;);
});

// 同时绑定多个事件和事件处理函数
$(&#39;.box&#39;).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
  }
});

// 传入参数
$(&#39;.box&#39;).on(&#39;click&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; }, function (e) {
  console.log(&#39;点击了 .box 元素，并为事件处理函数传入了参数&#39;);
  // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
});

// 同时绑定多个事件和事件处理函数，并传入参数
$(&#39;.box&#39;).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  }
}, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// 通过事件委托绑定事件，并传入参数
$(document).on(&#39;click&#39;, &#39;.box&#39;, { key1: &#39;value1&#39;, keys: &#39;value2&#39; }, function (e) {
  console.log(&#39;点击了 .box 元素，并为事件处理函数传入了参数&#39;);
  // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
});

// 通过事件委托同时绑定多个事件和事件处理函数
$(document).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
  }
}, &#39;.box&#39;);

// 通过事件委托同时绑定多个事件和事件处理函数，并传入参数
$(document).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  }
}, &#39;.box&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// 获取事件参数
$(&#39;.box&#39;).on(&#39;click&#39;, function (e, data) {
  // data 等于 e.detail
});

// 事件名支持使用命名空间
$(&#39;.box&#39;).on(&#39;click.myPlugin&#39;, function () {
  console.log(&#39;点击了 .box 元素&#39;);
});
</code></pre>
<h3 id="one">
                  <a href="#one"><code>.one()</code></a>
                </h3>
<p>为每个匹配元素的特定事件绑定事件处理函数，但事件只会触发一次。</p>
<p>该方法的用法和 <code>.on()</code> 相同，所以不再举例了。</p>
<h3 id="off">
                  <a href="#off"><code>.off()</code></a>
                </h3>
<p>解除集合中的元素绑定的事件。具体用法见下方示例：</p>
<pre><code class="language-js">// 解除所有绑定的事件处理函数
$(&#39;.box&#39;).off();

// 解除绑定的指定事件
$(&#39;.box&#39;).off(&#39;click&#39;);

// 同时解除多个绑定的事件
$(&#39;.box&#39;).off(&#39;click focus&#39;);

// 解除绑定的指定事件处理函数
$(&#39;.box&#39;).off(&#39;click&#39;, callback);

// 解除通过事件委托绑定的事件
$(document).off(&#39;click&#39;, &#39;.box&#39;);

// 解除通过事件委托绑定的指定事件处理函数
$(document).off(&#39;click&#39;, &#39;.box&#39;, callback);

// 同时解绑多个事件处理函数
$(&#39;.box.&#39;).off({
  &#39;click&#39;: callback1,
  &#39;focus&#39;: callback2,
});

// 同时解绑多个通过事件委托绑定的事件处理函数
$(document).off({
  &#39;click&#39;: callback1,
  &#39;focus&#39;: callback2,
}, &#39;.box&#39;);

// 事件名支持使用命名空间，下面的用法将解绑所有以 .myPlugin 结尾的事件
$(document).off(&#39;.myPlugin&#39;);
</code></pre>
<h3 id="trigger">
                  <a href="#trigger"><code>.trigger()</code></a>
                </h3>
<p>触发指定的事件。具体用法见下方示例：</p>
<pre><code class="language-js">// 触发指定的事件
$(&#39;.box&#39;).trigger(&#39;click&#39;);

// 触发事件时传入参数
$(&#39;.box&#39;).trigger(&#39;click&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// 事件名支持命名空间
$(&#39;.box&#39;).trigger(&#39;click.myPlugin&#39;);

// 传入 CustomEvent 的参数
$(&#39;.box&#39;).trigger(&#39;click&#39;, undefined, {
  bubbles: true;
  cancelable: true;
  composed: true
});
</code></pre>
<h2 id="api-ajax">
                  <a href="#api-ajax">ajax</a>
                </h2>
<h3 id="d-ajaxSetup">
                  <a href="#d-ajaxSetup"><code>$.ajaxSetup()</code></a>
                </h3>
<p>设置全局的 AJAX 请求参数。</p>
<pre><code class="language-js">$.ajaxSetup({
  // 默认不触发全局 AJAX 事件
  global: false,

  // 默认使用 POST 方法发送请求
  method: &#39;POST&#39;
});
</code></pre>
<p>详细参数列表参见下方的 <a href="#ajax-options">ajax 参数</a>。</p>
<h3 id="d-ajax">
                  <a href="#d-ajax"><code>$.ajax()</code></a>
                </h3>
<p>发送 AJAX 请求，并返回一个 Promise 对象。</p>
<pre><code class="language-js">const promise = $.ajax({
  method: &#39;POST&#39;,
  url: &#39;./test.php&#39;,
  data: {
    key1: &#39;val1&#39;,
    key2: &#39;val2&#39;
  },
  success: function (response) {
    console.log(response);
  }
});

promise
  .then((response) =&gt; {
    console.log(response);
  })
  .catch((error) =&gt; {
    console.log(error);
  });
</code></pre>
<p>详细参数列表请参见下方的 <a href="#ajax-options">AJAX 参数</a>。</p>
<p>还可以使用 <code>.on()</code> 方法来监听 AJAX 的全局事件。</p>
<pre><code class="language-js">// 当 AJAX 请求开始时，会触发此事件
$(document).on(&#39;ajaxStart&#39;, function (e, { xhr, options }) {
  // xhr: XMLHttpRequest 对象
  // options: $.ajax() 方法的参数
});

// 当 AJAX 请求成功时，会触发此事件
$(document).on(&#39;ajaxSuccess&#39;, function (e, { xhr, options, response }) {
  // xhr: XMLHttpRequest 对象
  // options: $.ajax() 方法的参数
  // response: 请求的响应
});

// 当 AJAX 请求失败时，会触发此事件
$(document).on(&#39;ajaxError&#39;, function (e, { xhr, options }) {
  // xhr: XMLHttpRequest 对象
  // options: $.ajax() 方法的参数
});

// 当 AJAX 请求完成时（无论成功或失败），会触发此事件
$(document).on(&#39;ajaxComplete&#39;, function (e, { xhr, options }) {
  // xhr: XMLHttpRequest 对象
  // options: $.ajax() 方法的参数
});
</code></pre>
<h3 id="ajax-options">
                  <a href="#ajax-options">ajax 参数</a>
                </h3>
<table>
  <thead>
    <tr>
      <th>属性名</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr id="ajax-options-url">
      <td><a href="#ajax-options-url"><code>url</code></a></td>
      <td><code>string</code></td>
      <td>当前页面 URL</td>
    </tr>
    <tr>
      <td colspan="3">请求的 URL 地址。</td>
    </tr>
    <tr id="ajax-options-method">
      <td><a href="#ajax-options-method"><code>method</code></a></td>
      <td><code>string</code></td>
      <td><code>GET</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>请求的 HTTP 方法。</p>
        <p>可选值包括：<code>GET</code>、<code>POST</code>、<code>PUT</code>、<code>PATCH</code>、<code>HEAD</code>、<code>OPTIONS</code>、<code>DELETE</code>。</p>
      </td>
    </tr>
    <tr id="ajax-options-data">
      <td><a href="#ajax-options-data"><code>data</code></a></td>
      <td><code>any</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td colspan="3">发送到服务器的数据。</td>
    </tr>
    <tr id="ajax-options-processData">
      <td><a href="#ajax-options-processData"><code>processData</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">是否将传入的数据转换为查询字符串。</td>
    </tr>
    <tr id="ajax-options-async">
      <td><a href="#ajax-options-async"><code>async</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">是否为异步请求。</td>
    </tr>
    <tr id="ajax-options-cache">
      <td><a href="#ajax-options-cache"><code>cache</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">是否从缓存中读取数据。仅对 <code>GET</code>、<code>HEAD</code> 请求有效。</td>
    </tr>
    <tr id="ajax-options-username">
      <td><a href="#ajax-options-username"><code>username</code></a></td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td colspan="3">用于 HTTP 访问认证的用户名。</td>
    </tr>
    <tr id="ajax-options-password">
      <td><a href="#ajax-options-password"><code>password</code></a></td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td colspan="3">用于 HTTP 访问认证的密码。</td>
    </tr>
    <tr id="ajax-options-headers">
      <td><a href="#ajax-options-headers"><code>headers</code></a></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>添加到 HTTP 请求头的数据。可以在 <code>beforeSend</code> 回调函数中重写该值。</p>
        <p>值为字符串或 <code>null</code> 的字段会被发送，值为 <code>undefined</code> 的字段会被忽略。</p>
      </td>
    </tr>
    <tr id="ajax-options-xhrFields">
      <td><a href="#ajax-options-xhrFields"><code>xhrFields</code></a></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>设置在 <code>XMLHttpRequest</code> 对象上的数据。</p>
<pre><code class="language-js">$.ajax({
  url: '一个跨域 URL',
  xhrFields: {
    withCredentials: true
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-statusCode">
      <td><a href="#ajax-options-statusCode"><code>statusCode</code></a></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>HTTP 状态码与对应处理函数的映射。</p>
<pre><code class="language-js">$.ajax({
  statusCode: {
    404: function (xhr, textStatus) {
      alert('返回状态码为 404 时被调用');
    },
    200: function (data, textStatus, xhr) {
      alert('返回状态码为 200 时被调用');
    }
  }
});</code></pre>
        <p>状态码在 200 - 299 范围内或为 304 时，表示请求成功，函数参数和 <code>success</code> 回调的参数相同；否则表示请求失败，函数参数和 <code>error</code> 回调的参数相同。</p>
      </td>
    </tr>
    <tr id="ajax-options-dataType">
      <td><a href="#ajax-options-dataType"><code>dataType</code></a></td>
      <td><code>string</code></td>
      <td><code>text</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>预期服务器返回的数据类型。</p>
        <p>包括：<code>text</code>、<code>json</code></p>
      </td>
    </tr>
    <tr id="ajax-options-contentType">
      <td><a href="#ajax-options-contentType"><code>contentType</code></a></td>
      <td><code>string</code></td>
      <td><code>application/x-www-form-urlencoded</code></td>
    </tr>
    <tr>
      <td colspan="3">请求内容的 MIME 类型。如果设置为 <code>false</code>，则不设置 <code>Content-Type</code>。</td>
    </tr>
    <tr id="ajax-options-timeout">
      <td><a href="#ajax-options-timeout"><code>timeout</code></a></td>
      <td><code>number</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td colspan="3">请求超时时间（毫秒）。如果设置为 <code>0</code>，表示无超时时间。</td>
    </tr>
    <tr id="ajax-options-global">
      <td><a href="#ajax-options-global"><code>global</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">是否触发全局 AJAX 事件。</td>
    </tr>
    <tr id="ajax-options-beforeSend">
      <td><a href="#ajax-options-beforeSend"><code>beforeSend</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>在发送请求前调用。如果返回 <code>false</code>，则取消 AJAX 请求。</p>
<pre><code class="language-js">$.ajax({
  beforeSend: function (xhr) {
    // xhr 为 XMLHttpRequest 对象
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-success">
      <td><a href="#ajax-options-success"><code>success</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>请求成功之后调用。</p>
<pre><code class="language-js">$.ajax({
  success: function (data, textStatus, xhr) {
    // data 为 AJAX 请求返回的数据
    // textStatus 为包含成功代码的字符串
    // xhr 为 XMLHttpRequest 对象
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-error">
      <td><a href="#ajax-options-error"><code>error</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>请求出错时调用。</p>
<pre><code class="language-js">$.ajax({
  error: function (xhr, textStatus) {
    // xhr 为 XMLHttpRequest 对象
    // textStatus 为包含错误代码的字符串
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-complete">
      <td><a href="#ajax-options-complete"><code>complete</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>无论请求成功或失败，都会在完成时调用。</p>
<pre><code class="language-js">$.ajax({
  complete: function (xhr, textStatus) {
    // xhr 为 XMLHttpRequest 对象
    // textStatus 为一个包含成功或错误代码的字符串
  }
});</code></pre>
      </td>
    </tr>
  </tbody>
</table>
`,elements:[]};export{e as default};
