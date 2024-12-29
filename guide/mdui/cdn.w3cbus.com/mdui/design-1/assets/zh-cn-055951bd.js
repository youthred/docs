const a={a1:"从右向左（RTL）阅读的语言，例如阿拉伯语和希伯来语，其 UI 应该被镜像，以确保内容易于理解。",a2:"UI 镜像概述",a3:"RTL 镜像指南",a4:"本地化",a5:"从左到右（LTR）语言和从右到左（RTL）语言的最大区别是内容的显示方向：",a6:"LTR 语言从左到右显示内容",a7:"RTL 语言从右到左显示内容",a8:"RTL 内容还会影响一些图标和图片的显示方向，特别是那些用于描述一系列事件的图标和图片。",a9:"一般来说，对于 LTR 语言，时间流逝方向也是从左到右；对于 RTL 语言，时间流逝方向也是从右向左。",a10:"元素",a11:"文本",a12:"句子从左向右阅读。",a13:"句子从右向左阅读。",a14:"时间线",a15:"事件序列从左向右进行。",a16:"事件序列从右向左进行。",a17:"图像",a18:"从左向右的箭头表示向前运动：→",a19:"从右向左的箭头表示向前运动：←",a20:"对于 LTR 语言，从左到右描述时间的流逝；对于 RTL 语言，从右到左描述时间的流逝。",a21:"当 UI 从 LTR 更改为 RTL 时（反之亦然），通常称为<strong>镜像</strong>。RTL 布局是 LTR 布局的镜像，它会影响布局、文本和图像。",a22:"当 UI 从一个方向更改为另一个方向时，这些项目不会镜像：",a23:"数字",a24:"未翻译的文本（即使它是词组的一部分）",a25:"文本方向应始终和语言方向保持一致。例如，任何 LTR 语句（例如一个 URL）将继续以 LTR 的格式显示，即使 UI 的其余部分是 RTL 的。",a26:"文本和数字将始终和语言的方向保持一致。",a27:"LTR 文本不应以相反的顺序显示。",a28:"当镜像一个 UI 时，这些元素会发生改变：",a29:"<strong>文本框图标</strong>显示在字段的另一侧",a30:"<strong>导航按钮</strong>以相反的顺序显示",a31:"表示方向的<strong>图标</strong>会被镜像，例如箭头",a32:"<strong>文本</strong>（如果它被翻译为 RTL 语言）右对齐",a33:"这些元素不会被镜像：",a34:"不表示方向的图标，例如相机",a35:"数字，例如时钟和电话号码",a36:"图标和图解",a37:"LTR 的英文 UI",a38:"RTL 的阿拉伯语 UI，其中数字仍然以 LTR 显示。",a39:"LTR 模式下的文本编辑菜单",a40:"RTL 下的文本编辑菜单",a41:"1. 与双向性有关的图标被镜像，以反映一行文本的开始和结束位置",a42:"LTR 屏幕",a43:"在 LTR 屏幕中，“Item One” 选项对齐到了左侧，用户向左滑动可以看到更多的选项。",a44:"触摸目标高度：48dp<br />第一个选项前面距离屏幕边缘的间距：72dp<br />选项标签的底部内边距：20dp<br />选项标签的左右内边距：12dp",a45:"RTL 屏幕",a46:"在 RTL 屏幕中，“Item One” 选项对齐到了右侧，用户向右滑动可以看到更多选项。",a47:"触摸目标高度：48dp<br />第一个选项前面距离屏幕边缘的间距：72dp<br />选项标签的底部内边距：20dp<br />选项标签的左右内边距：12dp",a48:"LTR 屏幕",a49:"<strong>RTL 屏幕</strong><br />标题、图标和 UI 元素都从右向左显示",a50:"1. 后退按钮指向右边<br />2. 文本右对齐<br />3. 主按钮和副按钮被镜像，以匹配阅读方向<br />4. 复选框显示在文本右侧<br />5. 不表示方向的图标不发生更改<br />6. 单位的位置可能因语言而异<br />7. 进度条方向和内容的阅读方向相同",a51:"导航、弹出菜单和图标从左向右显示",a52:"图标和屏幕边缘的间距：16dp<br />标题和屏幕边缘的间距：72 dp<br />标题下方内边距：20dp<br />导航栏高度：56dp<br />弹出菜单内边距：16dp",a53:"RTL 布局中的导航、弹出菜单和切换侧边栏的图标",a54:"图标和屏幕边缘的间距：16dp<br />标题和屏幕边缘的间距：72 dp<br />标题下方内边距：20dp<br />导航栏高度：56dp<br />弹出菜单内边距：16dp",a55:"用于 LTR 布局的图标和文本的内边距和外边距。",a56:"列表项高度：72dp<br />图标和屏幕左边缘的间距：16dp<br />列表项和屏幕左边缘的距离：72dp",a57:"当使用镜像布局时，图标和文本的内边距和外边距也会切换，以匹配 RTL 的布局。",a58:"列表项高度：72dp<br />图标和屏幕右边缘的间距：16dp<br />列表项和屏幕右边缘的距离：72dp",a59:"为了支持从右向左（RTL）的 UI，而把文本、布局和图标镜像时，很多和时间相关的东西都应该被描述为从右向左移动。例如，在 RTL 布局中，前进即为向左移动，后退即为向右移动。",a60:"有关 RTL 文本的详细开发指南，详见：",a61:"支持不同的语言和文化",a62:"使用 BidiFormatter 实现 RTL",a63:"有关 RTL 图标的详细开发指南，详见：",a64:"RTL Material Design 图标指南",a65:"查看如何镜像图标",a66:"RTL Sketch 插件",a67:"把现有的设计和资源文件翻转为 RTL 格式",a68:"何时需要镜像",a69:"对于镜像最重要的图标是前进和后退按钮。后退和前进导航按钮会调换顺序。",a70:"LTR 后退按钮",a71:"RTL 后退按钮",a72:"LTR 前进按钮",a73:"RTL 前进按钮",a74:"显示向前移动的图标应该被镜像。",a75:"在 LTR 的 UI 中，面向右侧的自行车通常表示向前移动。",a76:"在 RTL 的 UI 中，一辆面向左侧的自行车同样表示了向前移动。",a77:"在音量图标右侧有一个滑块时，应该被镜像。滑块的进度方向也要改为从右到左，且声波应该要从右边出现。",a78:"带滑块的 LTR 音量",a79:"镜像后，RTL 的带扬声器图标和滑块的音量",a80:"有时，水平和圆形方向的时间会同时隐含在图标中。例如，Google Docs 中的撤销和重做按钮同时具有水平方向和圆形方向。",a81:"在 LTR 中，它们在水平和圆形方向指向相同的时间方向。在 RTL 中，可以选择只显示水平方向，或只显示圆形方向。",a82:"Google Docs 的工具栏中 LTR 的撤销和重做按钮",a83:"图标内含有指代文本的图形时，在镜像时需要格外仔细。",a84:"文本在 RTL 中右对齐。如果在段落开头有缩进，或者在段落末尾有未完结的行，或者段落右端较为粗糙，则图标需要被镜像。",a85:"LTR 聊天图标",a86:"RTL 聊天图标",a87:"何时不需要镜像",a88:"虽然时间的线性流逝方向在 RTL 中需要被镜像，但时间的<strong>圆形</strong>方向不是。在 RTL 语言中，时钟仍然顺时针旋转。时钟图标、或具有顺时针箭头的旋转刷新或进度指示器不应被镜像。",a89:"刷新图标显示时间向前移动；方向是顺时针的，图标未被镜像。",a90:"历史图标表示倒退时间；方向是逆时针的，图标未被镜像。",a91:"有些图标指代的是在 RTL 世界中没有镜像的实体物体。",a92:"例如，全世界的键盘和媒体播放器看起来都是一样的，所以它们不应该被镜像。",a93:"键盘图标",a94:"耳机图标",a95:"有些图标可能看起来具有方向性，但实际上它们表示的是用右手握住该对象。",a96:"例如，搜索图标通常在右下侧会有手柄，因为大部分用户是右撇子，会用右手来握住放大镜。",a97:"在用右手书写的国家中，大部分用户也是右撇子，所以这些图标不应该被镜像。",a98:"搜索图标",a99:"咖啡图标",a100:"大多数 RTL 国家没有反斜杠。在 RTL 语言环境的图像中需要保留反斜杠。",a101:"在 LTR 和 RTL 语言中，从左向右的斜线都表示关闭状态",a102:"RTL 语言中的关闭状态不用 RTL 的斜线。",a103:"时间的流逝",a104:"在大多数情况下，一个随时间进行的动作需要被镜像。",a105:"要显示从右向左移动，走动的人物的图标应该向左。",a106:"“下一页”显示在左侧，“上一页”显示在右侧。",a107:"进度条的 0% 在右侧，100% 在左侧，并从右向左填充进度条。",a108:"日历中的日期从右向左显示。",a109:"不要镜像媒体播放按钮和媒体进度指示器，因为它们指的是播放的方向，而不是时间的方向。",a110:"由于媒体播放按钮和进度指示器反映的是播放的方向，因此它们不会被镜像。",a111:"媒体播放器的控件始终为 LTR。",a112:"不要镜像媒体播放器或进度条。这些元素的方向代表的是磁带的方向，不是时间的方向。",a113:"图形中的文本",a114:"包含文本的图形通常需要本地化。",a115:"数字",a116:"数字、以及包含数字的图标，必须本地化为当地语言所使用的数字。例如，孟加拉语、马拉地语、尼泊尔语、和一些阿拉伯语地区，使用的是不同形式的数字。",a117:"LTR 的 UI 中包含数字的图标。",a118:"阿拉伯语中 RTL 的图标",a119:"镜像",a120:"有时，内容需要被镜像，即使 UI 没有被镜像。例如，当用户在一个 LTR 的文档中编辑一个 RTL 的段落时，那段 RTL 文本的工具栏按钮也应该是 RTL 的。",a121:"此 LTR 文档中的 RTL 段落。缩进和列表的按钮应该是 RTL 的，即使主界面方向仍然是 LTR。",a122:"1. 段落右对齐<br />2. 图标翻转<br />3. 希伯来文的文本方向是 RTL",a123:"Material Design 中的文本和数字方向一致",a124:"Material Design 中的 LTR 文本顺序保持不变",a125:"Material Design 中的 LTR 英文 UI 图示",a126:"Material Design 中的阿拉伯语 RTL UI 布局",a127:"Material Design 文本编辑菜单在 LTR 模式下的展示",a128:"Material Design 的 RTL 文本编辑菜单",a129:"Material Design 中的 LTR 屏幕",a130:"Material Design 中的 RTL 屏幕设计",a131:"Material Design 中的 LTR 屏幕",a132:"Material Design 中的 RTL 屏幕",a133:"Material Design 中的 LTR 屏幕",a134:"Material Design 中的 RTL 屏幕",a135:"Material Design 中的 LTR 屏幕",a136:"Material Design 中的 RTL 屏幕",a137:"Material Design Icon",a138:"Material Design 中的 LTR 后退按钮",a139:"Material Design 中的 RTL 后退按钮",a140:"Material Design 中的 LTR 前进按钮",a141:"Material Design 中的 RTL 前进按钮",a142:"Material Design 中，面向右侧的自行车象征向前移动",a143:"Material Design 中向左骑行的自行车图标表示前进",a144:"Material Design 中的带滑块音量控制",a145:"Material Design 中的 RTL 带扬声器图标和音量滑块",a146:"Material Design 中的 Google Docs 撤销和重做按钮",a147:"Material Design 中的 LTR 聊天图标",a148:"Material Design 中的 RTL 聊天图标",a149:"Material Design 中的顺时针刷新图标",a150:"Material Design 中的历史图标表示逆时针倒退时间",a151:"Material Design 键盘图标",a152:"Material Design 中的耳机图标",a153:"Material Design 中的搜索图标",a154:"Material Design 中的咖啡图标",a155:"Material Design 中的关闭状态由左向右斜线表示",a156:"Material Design 中的关闭状态不使用 RTL 斜线",a157:"Material Design 中的媒体播放按钮和进度指示器不镜像",a158:"Material Design 媒体播放器控件始终为 LTR",a159:"Material Design 中的媒体播放器和进度条方向说明",a160:"Material Design 中的数字图标示例",a161:"Material Design 中的阿拉伯语 RTL 图标",a162:"Material Design 中的 RTL 段落和列表按钮设置"};export{a as zhCn};
