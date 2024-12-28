(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{339:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"日期时间对象-datetime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期时间对象-datetime"}},[t._v("#")]),t._v(" 日期时间对象-DateTime")]),t._v(" "),a("h2",{attrs:{id:"由来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[t._v("#")]),t._v(" 由来")]),t._v(" "),a("p",[t._v("考虑工具类的局限性，在某些情况下使用并不简便，于是"),a("code",[t._v("DateTime")]),t._v("类诞生。"),a("code",[t._v("DateTime")]),t._v("对象充分吸取Joda-Time库的优点，并提供更多的便捷方法，这样我们在开发时不必再单独导入Joda-Time库便可以享受简单快速的日期时间处理过程。")]),t._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("p",[a("strong",[t._v("DateTime")]),t._v("类继承于java.util.Date类，为Date类扩展了众多简便方法，这些方法多是"),a("code",[t._v("DateUtil")]),t._v("静态方法的对象表现形式，使用DateTime对象可以完全替代开发中Date对象的使用。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"新建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建对象"}},[t._v("#")]),t._v(" 新建对象")]),t._v(" "),a("p",[a("code",[t._v("DateTime")]),t._v("对象包含众多的构造方法，构造方法支持的参数有：")]),t._v(" "),a("ul",[a("li",[t._v("Date")]),t._v(" "),a("li",[t._v("Calendar")]),t._v(" "),a("li",[t._v("String(日期字符串，第二个参数是日期格式)")]),t._v(" "),a("li",[t._v("long 毫秒数")])]),t._v(" "),a("p",[t._v("构建对象有两种方式："),a("code",[t._v("DateTime.of()")]),t._v("和"),a("code",[t._v("new DateTime()")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//new方式创建")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//of方式创建")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" dt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用对象"}},[t._v("#")]),t._v(" 使用对象")]),t._v(" "),a("p",[a("code",[t._v("DateTime")]),t._v("的成员方法与"),a("code",[t._v("DateUtil")]),t._v("中的静态方法所对应，因为是成员方法，因此可以使用更少的参数操作日期时间。")]),t._v(" "),a("p",[t._v("示例：获取日期成员（年、月、日等）")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" dateTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-01-05 12:34:23"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatePattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NORM_DATETIME_FORMAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//年，结果：2017")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" year "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("year")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//季度（非季节），结果：Season.SPRING")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Season")]),t._v(" season "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seasonEnum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//月份，结果：Month.JANUARY")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Month")]),t._v(" month "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("monthEnum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//日，结果：5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" day "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dayOfMonth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更多成员方法请参阅API文档。")]),t._v(" "),a("h3",{attrs:{id:"对象的可变性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的可变性"}},[t._v("#")]),t._v(" 对象的可变性")]),t._v(" "),a("p",[t._v("DateTime对象默认是可变对象（调用offset、setField、setTime方法默认变更自身），但是这种可变性有时候会引起很多问题（例如多个地方共用DateTime对象）。我们可以调用"),a("code",[t._v("setMutable(false)")]),t._v("方法使其变为不可变对象。在不可变模式下，"),a("code",[t._v("offset")]),t._v("、"),a("code",[t._v("setField")]),t._v("方法返回一个新对象，"),a("code",[t._v("setTime")]),t._v("方法抛出异常。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" dateTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-01-05 12:34:23"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatePattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NORM_DATETIME_FORMAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认情况下DateTime为可变对象，此时offset == dateTime")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" offset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("offset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置为不可变对象后变动将返回新对象，此时offset != dateTime")]),t._v("\ndateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMutable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noffset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("offset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"格式化为字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化为字符串"}},[t._v("#")]),t._v(" 格式化为字符串")]),t._v(" "),a("p",[t._v("调用"),a("code",[t._v("toString()")]),t._v("方法即可返回格式为"),a("code",[t._v("yyyy-MM-dd HH:mm:ss")]),t._v("的字符串，调用"),a("code",[t._v("toString(String format)")]),t._v("可以返回指定格式的字符串。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" dateTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-01-05 12:34:23"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatePattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NORM_DATETIME_FORMAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：2017-01-05 12:34:23")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" dateStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：2017/01/05")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" dateStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy/MM/dd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);