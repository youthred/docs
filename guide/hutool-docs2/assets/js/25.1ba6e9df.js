(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{352:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[t._v("#")]),t._v(" 由来")]),t._v(" "),s("p",[t._v("资源（Resource）在Hutool中是一个广泛的概念，凡是存储数据的地方都可以归类到资源，那为何要提供一个如此抽象的接口呢？")]),t._v(" "),s("p",[t._v("在实际编码当中，我们需要读取一些数据，比如配置文件、文本内容、图片甚至是任何二进制流，为此我们要加入很多的重载方法，比如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("等等如此，这样会造成整个代码变得非常冗余，查找API也很费劲。其实无论数据来自哪里，最终目的是，我们想从这些地方读到byte[]或者String。那么，我们就可以抽象一个Resource接口，让代码变得简单：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("用户只需传入Resource的实现即可。")]),t._v(" "),s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("常见的，我们需要从资源中获取流（getStream），获取Reader来读取文本（getReader），直接读取文本（readStr），于是定义如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Charset")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readStr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Charset")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("关于Resource的详细定义见："),s("a",{attrs:{href:"https://gitee.com/dromara/hutool/blob/v5-master/hutool-core/src/main/java/cn/hutool/core/io/resource/Resource.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doc.hutool.cn/assets/js/Resource.java"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("定义了Resource，我们就可以预定义一些特别的资源：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("BytesResource")]),t._v("       从byte[]中读取资源")]),t._v(" "),s("li",[s("code",[t._v("InputStreamResource")]),t._v(" 从流中读取资源")]),t._v(" "),s("li",[s("code",[t._v("StringResource")]),t._v("      从String中读取资源")]),t._v(" "),s("li",[s("code",[t._v("UrlResource")]),t._v("         从URL中读取资源")]),t._v(" "),s("li",[s("code",[t._v("FileResource")]),t._v("        从文件中读取资源")]),t._v(" "),s("li",[s("code",[t._v("ClassPathResource")]),t._v("   从classpath（src/resources下）中读取资源")]),t._v(" "),s("li",[s("code",[t._v("WebAppResource")]),t._v("      从web root中读取资源")]),t._v(" "),s("li",[s("code",[t._v("MultiResource")]),t._v("       从多种资源中混合读取资源")]),t._v(" "),s("li",[s("code",[t._v("MultiFileResource")]),t._v("   从多个文件中混合读取资源")])]),t._v(" "),s("p",[t._v("当然，我们还可以根据业务需要自己实现Resource接口，完成自定义的资源读取。")]),t._v(" "),s("blockquote",[s("p",[t._v("为了便于资源的查找，可以使用"),s("code",[t._v("ResourceUtil")]),t._v("快捷工具来获得我们需要的资源。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);