(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{388:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("提供ClassLoader相关的工具类，例如类加载（Class.forName包装）等")]),a._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[a._v("#")]),a._v(" 方法")]),a._v(" "),s("h3",{attrs:{id:"获取classloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取classloader"}},[a._v("#")]),a._v(" 获取ClassLoader")]),a._v(" "),s("h4",{attrs:{id:"getcontextclassloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcontextclassloader"}},[a._v("#")]),a._v(" "),s("code",[a._v("getContextClassLoader")])]),a._v(" "),s("p",[a._v("获取当前线程的ClassLoader，本质上调用"),s("code",[a._v("Thread.currentThread().getContextClassLoader()")])]),a._v(" "),s("h4",{attrs:{id:"getclassloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getclassloader"}},[a._v("#")]),a._v(" "),s("code",[a._v("getClassLoader")])]),a._v(" "),s("p",[a._v("按照以下顺序规则查找获取ClassLoader：")]),a._v(" "),s("ol",[s("li",[a._v("获取当前线程的ContextClassLoader")]),a._v(" "),s("li",[a._v("获取ClassLoaderUtil类对应的ClassLoader")]),a._v(" "),s("li",[a._v("获取系统ClassLoader（ClassLoader.getSystemClassLoader()）")])]),a._v(" "),s("h3",{attrs:{id:"加载class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载class"}},[a._v("#")]),a._v(" 加载Class")]),a._v(" "),s("h4",{attrs:{id:"loadclass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loadclass"}},[a._v("#")]),a._v(" "),s("code",[a._v("loadClass")])]),a._v(" "),s("p",[a._v("加载类，通过传入类的字符串，返回其对应的类名，使用默认ClassLoader并初始化类（调用static模块内容和可选的初始化static属性）")]),a._v(" "),s("p",[a._v("扩展"),s("code",[a._v("Class.forName")]),a._v("方法，支持以下几类类名的加载：")]),a._v(" "),s("ol",[s("li",[a._v("原始类型，例如：int")]),a._v(" "),s("li",[a._v("数组类型，例如：int[]、Long[]、String[]")]),a._v(" "),s("li",[a._v("内部类，例如：java.lang.Thread.State会被转为java.lang.Thread$State加载")])]),a._v(" "),s("p",[a._v("同时提供"),s("code",[a._v("loadPrimitiveClass")]),a._v("方法用于快速加载原始类型的类。包括原始类型、原始类型数组和void")]),a._v(" "),s("h4",{attrs:{id:"ispresent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ispresent"}},[a._v("#")]),a._v(" "),s("code",[a._v("isPresent")])]),a._v(" "),s("p",[a._v("指定类是否被提供，通过调用"),s("code",[a._v("loadClass")]),a._v("方法尝试加载指定类名的类，如果加载失败返回false。")]),a._v(" "),s("p",[a._v("加载失败的原因可能是此类不存在或其关联引用类不存在。")])])}),[],!1,null,null,null);s.default=r.exports}}]);