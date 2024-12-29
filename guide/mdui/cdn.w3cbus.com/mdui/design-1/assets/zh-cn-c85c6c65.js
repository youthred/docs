const a={a1:"浮动操作按钮代表着应用中最重要的操作。",a2:"浮动操作按钮是为了使用户更便于操作。",a3:"就像一个圆形的图标漂浮在界面上，它会在聚焦时改变颜色，在选中时改变海拔高度。按下时，它可能会包含更多相关的操作。",a4:"用法",a5:"一个屏幕上建议只使用一个浮动操作按钮，它应该只代表最常见的操作。",a6:"行为",a7:"默认情况下，它作为一个扩展的按钮悬浮在屏幕上。",a8:"尺寸",a9:"默认：",a10:"迷你：",a11:"浮动操作按钮",a12:"行为",a13:"过渡",a14:"大屏幕",a15:"浮动操作按钮",a16:"浮动操作按钮是为了使用户更便于操作。它是漂浮在 UI 上的一个圆形图标，具有一些动态效果，包括变形、弹出、位移等。",a17:"浮动操作按钮具有两种尺寸：",a18:"默认尺寸：适用于大多数情况",a19:"迷你尺寸：仅用于创建与屏幕上的其他元素在视觉上的连续性",a20:"当屏幕宽度小于 460dp 时，浮动操作按钮的尺寸应该从默认尺寸（56dp）变成迷你尺寸（40dp）。",a21:"浮动操作按钮",a22:"迷你型浮动操作按钮",a23:"在手机端，浮动操作按钮应该被放置在距离屏幕边框至少 16dp 的地方；在平板和桌面端应该距离屏幕边框至少 24dp。",a24:"浮动操作按钮",a25:"内部图标：",a26:"浮动操作按钮外圈：",a27:"迷你型浮动操作按钮",a28:"浮动操作按钮在聚焦时会改变颜色，在选中时会增加海拔高度。",a29:"浮动操作按钮获得焦点",a30:"浮动操作按钮被选中",a31:"不是每个屏幕都需要浮动操作按钮。浮动操作按钮代表了这个 App 中的主要操作。",a32:"主要操作是在相册中触摸图片，所以不需要任何按钮。",a33:"主要操作是添加文件。",a34:"一个屏幕上建议只使用一个浮动操作按钮，它应该只代表最常见的操作。",a35:"特性",a36:"浮动操作按钮应该做肯定的操作，如创建、收藏、分享、浏览和发现。",a37:"避免使用浮动操作按钮进行下面这些具有轻微破坏性的操作：",a38:"存档或删除",a39:"不明确的操作",a40:"警告或错误",a41:"限制性的任务如剪切文本",a42:"控制器应该放在工具栏中，如音量控制或改变字体颜色",a43:"浮动操作按钮不包含 App 图标或状态栏通知。不要把徽章或其他元素层叠在浮动操作按钮上。",a44:"浮动操作按钮强制使用圆形样式。",a45:"不要给浮动操作按钮添加额外的维度。",a46:"默认情况下，浮动操作按钮就像一块物体浮动在屏幕上。它里面的图标可能是活动的。",a47:"因为浮动操作按钮相对重要，它可能会以与其他元素不同的方式出现和移动。",a48:"浮动操作按钮动画效果",a49:"横向切换屏幕",a50:"在横向切换屏幕后（如标签页切换），如果浮动操作按钮对应的操作变化了，它应该先短暂消失，然后重新出现。",a51:"如果屏幕切换后，浮动操作按钮对应的操作不变，那么在切换屏幕时按钮应该保留在屏幕上（如果需要，可以移动到新的位置）。",a52:"列表",a53:"在浮动操作按钮下面的列表应该有足够的内边距，这样它们的内容才不会被按钮遮住。",a54:"带标签的屏幕",a55:"对于带有标签的屏幕，浮动操作按钮不应朝着屏幕退出时的同一方向退出屏幕。否则会导致：",a56:"屏幕上出现一个失灵的浮动操作按钮",a57:"错误地表明了浮动操作按钮和内容在相同的海拔高度上。",a58:"过渡",a59:"浮动操作按钮在 App 中，是一个有重要用途的独特的例子。利用它的可见性可以为一个重要的 UI 元素提供令人愉悦的过渡效果。",a60:"常用的过渡包括触发器、工具栏、快速拨号和形变。当然远不止这些。浮动操作按钮被设计的很灵活。你可以实验出最适合你的应用和屏幕的过渡效果。",a61:"触发器",a62:"浮动操作按钮可以只是简单地触发一个操作或是某处的导航。触摸涟漪动画会作为导致 UI 变化的力向外展开。",a63:"浮动操作按钮可以简单的触发一个操作",a64:"浮动操作按钮让地图视图回到中心位置。",a65:"App 通常使用单个浮动操作按钮。然而，本例使用了两个浮动操作按钮，因为它们执行的是同等重要但独特的操作。",a66:"工具栏",a67:"浮动操作按钮可以在按下时或从滚动工具栏转换为工具栏。工具栏可以包含相关的操作、文本和搜索框，或任何手边有用的部件。",a68:"浮动操作按钮转换为工具栏",a69:"浮动操作按钮转换为工具栏",a70:"屏幕滚动时隐藏工具栏，在需要的时候浮动操作按钮可以快速展开为工具栏，这是一个非常有用的特性。用户在浏览内容时，通过全屏观看获得沉浸式的浏览体验，而当他们看到有趣的内容想要触发交互时，又能快速调出工具栏进行操作。",a71:"工具栏在滚动时变成一个浮动操作按钮",a72:"工具栏在滚动时变成一个浮动操作按钮",a73:"如果一个浮动操作按钮转换成了工具栏，那么这个工具栏应包含相关的操作功能。",a74:"在这个例子中，用户可以通过按钮来选择媒体类型进行添加。",a75:"不要包含无关的或混乱不清的操作",a76:"快速拨号",a77:"浮动操作按钮可在按下时浮出相关操作。在菜单被调用后，按钮应保留在屏幕上。点击同一点，应激活最常用的操作，或关闭已打开的菜单。",a78:"浮动操作按钮可以浮出相关操作",a79:"浮动操作按钮可以浮出相关操作",a80:"浮动操作按钮可以转换为包含所有操作的单张卡片。",a81:"一个浮动按钮转换为一张卡片",a82:"作为通用规则，按下按钮时可以拥有至少 3 个，至多 6 个选项，包括原来的浮动操作按钮。如果只有两个选项 - 即，你的浮动操作按钮只弹出了另外一个选项 - 选择最重要的那一个。如果选项超过六个，用户可能在选择上会有困难。",a83:"通过给用户最好、最独特和最少的选项来减少选择疲劳。",a84:"浮动操作按钮应该至少弹出三个选项。",a85:"浮动操作按钮应该弹出不超过六个选项。",a86:"不要在浮动操作按钮的选项中放置外链按钮。从初始屏幕到目标页面应该最多只需要两次点击。",a87:"选项应该指明目标页面",a88:"选项不应该包含外链菜单",a89:"将外链操作放置在工具栏的外链菜单中，而不是浮动操作按钮中。",a90:"外链菜单在工具栏中。",a91:"浮动操作按钮不能弹出菜单。",a92:"如果应用的功能是添加文件，浮动操作按钮可以在首次点击后转换为相关的操作。如果出现的操作是与按钮不相关的，应该把操作放到弹出菜单中。",a93:"浮动操作按钮可以转换成相关的操作。",a94:"浮动操作按钮不能转换成不相关的操作。",a95:"浮动操作按钮可以包含一个联系人列表。这个列表不应该包含不相关的操作。",a96:"浮动操作按钮可以转换为联系人列表。",a97:"浮动操作按钮不能转换为不相关的操作。",a98:"变形",a99:"浮动操作按钮可以转变为薄片元素，并成为应用结构的一部分。这个神奇的转变强调了按钮的操作。",a100:"当浮动操作按钮变形时，在开始和结束位置之间需要以合理的方式转换。例如，不要穿过其他的薄片元素。",a101:"变形动画应该是可逆的，可以将新的薄片元素变回浮动操作按钮。",a102:"浮动操作按钮可以转变为薄片元素，并成为应用结构的一部分。",a103:"浮动操作按钮可以转变为薄片元素，并成为应用结构的一部分。",a104:"满屏",a105:"浮动操作按钮可以转变为占满整个屏幕的薄片元素。",a106:"这种类型的转变通常用来创建新的内容。其结果是，一般没法撤销转变，或进行可逆操作。",a107:"浮动操作按钮可以转变成占满整个屏幕的薄片元素。",a108:"大屏幕",a109:"浮动操作按钮可以附属到一个扩展的应用栏上。",a110:"浮动操作按钮可以附属到工具栏上，或者结构化的元素上（只要没有妨碍到其他元素）。",a111:"浮动操作按钮可以被附属到一个薄片元素的边缘。",a112:"在一个屏幕上最多只能有一个浮动操作按钮。",a113:"不要将浮动操作按钮与屏幕上的每个元素都联系起来。",a114:"Material Design 中的浮动操作按钮",a115:"Material Design 中的浮动操作按钮",a116:"Material Design 中的迷你浮动操作按钮",a117:"Material Design 中的浮动操作按钮",a118:"Material Design 中的迷你型浮动按钮",a119:"Material Design 中的相册触摸操作，无需按钮",a120:"Material Design 中的添加文件操作",a121:"Material Design 建议只用一个浮动操作按钮",a122:"Material Design 建议只用一个浮动操作按钮",a123:"Material Design 中的浮动操作按钮用于创建和分享",a124:"Material Design 中避免使用浮动操作按钮进行破坏性操作",a125:"Material Design 中的浮动操作按钮为圆形样式",a126:"Material Design 中的浮动操作按钮为圆形样式",a127:"Material Design 中的浮动操作按钮应避免额外维度",a128:"Material Design 中的浮动操作按钮应避免额外维度",a129:"Material Design 中的媒体类型选择按钮",a130:"Material Design 中不要包含无关的或混乱不清的操作",a131:"Material Design 中的浮动操作按钮需弹出至少三个选项",a132:"Material Design 中的浮动操作按钮应最多显示六个选项",a133:"Material Design 中的选项指明目标页面",a134:"Material Design 中的选项不应包含外链菜单",a135:"Material Design 中的外链菜单在工具栏中",a136:"Material Design 中的外链菜单在工具栏中",a137:"Material Design 浮动操作按钮不弹出菜单",a138:"Material Design 浮动操作按钮不弹出菜单",a139:"浮动操作按钮在 Material Design 中可转换为相关操作",a140:"Material Design 中的浮动操作按钮不能转换成不相关的操作",a141:"Material Design 中的浮动操作按钮转换为联系人列表",a142:"Material Design 中的浮动操作按钮不能转换为不相关的操作",a143:"Material Design 中的浮动操作按钮与扩展应用栏结合使用",a144:"浮动操作按钮在 Material Design 中可附加于工具栏或结构化元素",a145:"Material Design 中的浮动操作按钮附属于薄片边缘",a146:"Material Design 中只能有一个浮动操作按钮",a147:"Material Design 中，不要将浮动操作按钮与屏幕上的每个元素都联系起来"};export{a as zhCn};
