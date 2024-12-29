import{f as a}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const r={a1:"仅限 Android",a2:"当应用不处于使用状态时，通知可以提供简短、即时和相关的信息。",a3:"通知旨在告知用户应用中的事件。这两种类型的通知是最有效的：",a4:"与其他用户的通信",a5:"适时且内容翔实的任务提醒",a6:"通知组件",a7:"头部区域<br />内容区域<br />操作区域",a8:"如何使用户注意到通知",a9:"显示一个状态栏图标",a10:"在锁屏界面显示",a11:"播放声音或震动",a12:"在当前屏幕出现",a13:"闪烁设备的 LED",a14:"剖析通知",a15:"用法",a16:"行为",a17:"通知类型",a18:"设置",a19:"锁屏",a20:"样式",a21:"模版",a22:"概述",a23:"通知旨在使用户更易于扫视，更易于使用通知中最重要的元素：",a24:"主要内容",a25:"内容是通知中最重要的元素。次要信息（如时间）较小，被合并显示在主要内容的上方。",a26:"联系人",a27:"如果通知涉及到一个联系人，那么其头像会出现在通知的右侧，从其他内容中脱颖而出。",a28:"操作",a29:"对于可展开的通知，可以点击箭头图标来展开通知。操作按钮使用文本，显示在单独的背景色或位置上。",a30:"展开状态和折叠状态的通知",a31:"头部区域",a32:"头部区域包括：",a33:"<strong>1. 应用图标：</strong>应用图标是一个小的二维图标，用于识别应用。它在状态栏中以单色显示。如果你的应用可以发送多种类型的通知，则可以使用反映内容类型的符号来代替应用图标。例如，Google Now 使用一个云朵的图标来表示天气通知。",a34:"<strong>2. 应用名称：</strong>应用名称会自动出现在通知中。",a35:"<strong>3. 标题文本（可选）：</strong>只有当一个应用能从多个来源发送通知时，才使用标题文本，例如用户拥有多个账户，则可以使用账户名作为标题文本。",a36:"<strong>4. 时间（可选）：</strong>默认情况下，时间不会出现，但如果时间对通知发送非常重要，则可以添加时间，例如未接电话的时间。",a37:"<strong>5. 展开指示器：</strong>如果通知可以被展开，就会出现该图标。",a38:"标题区域",a39:"内容区域",a40:"内容区域包括：",a41:"<strong>1. 内容标题：</strong>通知的简要标题",a42:"<strong>2. 内容文本：</strong>通知的内容",a43:"<strong>3. 大图标（可选）：</strong>可以添加一张图片，以更有意义的方式来强化通知，例如包含消息发送者头像的消息。",a44:"内容区域",a45:"操作区域",a46:"当通知展开后，最多可以在底部的操作条上显示 3 个操作按钮。",a47:'在 Android N 及之后的版本中，操作不包含图标，以便容纳更多的文本。不过该图标仍然应该提供，因为在早期版本的系统中需要显示图标，<a href="https://www.google.com/design/spec-wear/patterns/notifications.html" target="_blank">Android Wear</a>和<a href="https://www.google.com/design/spec-auto/system-overview/notifications.html#" target="_blank">Android Auto</a>设备也是如此。',a48:"操作区域",a49:"何时不使用通知",a50:"通知不应该是与用户沟通的主要通信渠道，因为太多的干扰可能会让用户恼火。以下案例中不要使用通知：",a51:"<strong>交叉宣传</strong>，或在通知中宣传其他产品，这是 Play Store 严格禁止的",a52:"用户<strong>从未打开过的</strong>应用",a53:"通知鼓励用户返回应用，但不提供<strong>有直接价值的信息</strong>，例如 “有段时间没见到你了”",a54:"让用户<strong>对应用评分</strong>",a55:"无需让用户参与的<strong>操作</strong>，例如同步信息",a56:"不需要用户交互，应用可以自己恢复的<strong>错误状态</strong>",a57:"不要以通知的形式发送节日或生日祝福。",a58:"不要在任务期间打断用户，仅仅为了询问用户是否操作顺利。",a59:"必要的通知",a60:"<strong>前台服务</strong>是在后台运行的应用进程，但用户不直接和应用进行交互。由于这些应用会使用电池和某些数据，因此 Android 需要显示一个不可关闭的通知，来使用户知道系统正在运行的这类服务。",a61:"因为用户不能关闭这类通知，所以你应该为用户提供一项操作，以便在用户不希望运行该服务的情况下停止该服务。",a62:"在下载应用和文件时，Android 的下载管理器会运行一个前台服务，并显示一个通知，使用户知道正在进行下载，并提供一项操作，来取消下载。",a63:"通知到达",a64:"当通知到达时，它会被添加到通知抽屉。根据你设置的参数和设备的当前状态，通知还可能：",a65:"在状态栏中显示一个图标",a66:"发出声音或震动",a67:"显示在当前屏幕上，以获取用户的注意力",a68:"用户可以选择修改你设置的通知方式。",a69:"当通知到达时，通常会在状态栏出现一个图标。这提醒用户在通知抽屉里有新的消息。",a70:"如果通知非常重要，需要在任务期间就抓住用户的注意力，可以在当前屏幕上显示通知。",a71:"通知抽屉",a72:"Android 中的通知抽屉通常按照时间倒序显示通知，可以根据以下因素做出调整：",a73:"应用状态通知的优先级或重要性",a74:"是否最近通过声音或震动提醒过用户",a75:"通知中涉及到的用户，是否是用户的星标联系人",a76:"该通知是否表示正在进行的重要的活动，例如正在打电话或播放音乐",a77:"从 Android O 开始，Android 系统可以通过添加强调或降低重要性来改变通知列表顶部和底部的某些通知的外观，以帮助用户更快扫视内容。",a78:"陈旧的通知",a79:"通知抽屉应该向用户显示当前时刻的相关信息。如果先前发送的通知不再和当前时刻相关，可以自动关闭，使用户不再看到这些通知。",a80:"在此通知抽屉中，刚刚收到的信息显示在顶部。关于天气的较低优先级的通知出现在底部。",a81:"通知交互",a82:"用户可以通过以下方式与通知进行交互：",a83:"1. 导航到目标界面",a84:"用户可以点击通知来进行导航。如果通知出现在锁屏界面，用户需要双击通知，然后输入 PIN 码、图案或密码。",a85:"当用户点击通知后，应用应该跳转到与该通知直接相关的界面，并让它们立刻执行操作。例如，通知用户在多人游戏中轮到用户了，点击通知应该直接进入游戏。",a86:"2. 查看扩展视图",a87:"如果提供了扩展视图，会在通知的头部显示一个扩展指示符。用户可以点击指示符或者向下滑动通知来展开扩展视图。",a88:"扩展的通知",a89:"3. 忽略（如果允许）",a90:"用户可以通过向左或向右滑动来忽略通知。",a91:"如果通知指示了后台有一个正在运行的进程（例如播放音乐），则可能不能通过滑动来忽略。",a92:"被忽略的通知",a93:"4. 控制今后类似的通知如何推送",a94:"可以通过这些方式访问通知控制器：",a95:"触摸并按住某条通知",a96:"向左或向右滑动通知，并点击设置图标",a97:`通知控制器的显示方式取决于 Android 系统版本，以及应用是否具有通知<a class="do-router" href="${a("/patterns/notifications.html#notifications-settings")}">通道</a>（从 Android O 开始）。`,a98:"通知设置",a99:"多个通知",a100:"对于会产生大量相同类型的通知的应用，Android 提供了两种方式来展示它们：汇总和组合。",a101:"汇总",a102:"你可以把所有通知都汇总到一条通知里，而不是推送很多条通知。例如，通讯应用可以显示一个汇总通知：“你有 3 条新消息”。展开后，会显示每个消息的一段内容。",a103:"汇总了多条通知，折叠视图和展开视图",a104:"分组",a105:"应用可以根据父子层次关系显示多个通知：",a106:"父通知显示子通知的摘要信息",a107:"父通知被用户展开之后，会显示所有子通知",a108:"子通知可以在展开后显示完整内容",a109:"子通知不会重复显示相同的头部信息。例如，如果子通知具有和父通知相同的应用图标，则子通知的头部中不包含图标。",a110:"当子通知独立存在时，也应该是使人容易理解的，因为系统可能在通知到达时，把通知显示在分组外面。",a111:"分组后的通知，折叠视图和展开视图",a112:"展开视图",a113:"你可以通过展开视图在通知中显示更多信息，而无需离开通知。",a114:"折叠和展开的通知",a115:"展开时，通知最多可以提供 3 个操作。且不应与点击通知主体的操作重复。",a116:"文本操作不应和点击通知主体的操作重复。",a117:"当 Android 的时钟应用正在运行计时器时，此通知可以让用户在通知中直接暂停或增加一分钟。",a118:"启用在通知中输入",a119:"你可以让用户直接在通知中输入。用户可以输入少量文本，例如回复消息或记录简短的笔记。",a120:"对于长文本的输入，需要将用户导航到你的应用中，在那里他们会有更多空间来浏览和编辑文本。",a121:"如果你在一个通讯应用中使用此功能，在用户发送完回复后，需要继续显示该通知，等待一段时间，直到消息送达后，再自动关闭该通知。",a122:"Android 的短信应用允许用户直接在通知中回复消息，无需离开通知",a123:"通知可以是事务性和非事务性的。",a124:"事务性",a125:"事务性通知提供的内容，用户必须在特定时间内接收，以执行以下之一的操作：",a126:"允许人与人之间的交互",a127:"有助于改善日常生活的功能",a128:"控制或决定设备的临时状态",a129:"非事务性",a130:"如果以上几条都没有描述到你的通知，那它就是非事务性的。",a131:"事务性通知可以帮助用户...",a132:"示例",a133:"允许人与人之间的交互",a134:"接听来电或发送短信",a135:"在多人游戏中，通知用户轮到你了",a136:"有助于改善日常生活的功能",a137:"即将发生的日历事件",a138:"用户设置的提醒或闹钟",a139:"航班延误",a140:"交付订单",a141:"监控、控制或决定设备的临时状态",a142:"播放音乐",a143:"逐向导航",a144:"秒表运行",a145:"屏幕截图",a146:"应用在后台运行",a147:"非事务性可选停用和可选启用",a148:"非事务性通知应该是可选的，因为它们可能不会吸引所有用户。你可以通过下列两者之一的方式将其设置为可选：",a149:"<strong>可选停用：</strong>用户默认会收到可选停用的通知，但是可以通过设置来停止接收。",a150:"<strong>可选启用：</strong>用户只有在应用中设置启用后才能接收到可选启用的通知。",a151:"可选停用",a152:"避免选择可选停用方式，除非你的通知<strong>同时符合</strong>以下两个条件：",a153:"为用户提供具体的价值",a154:"与用户的情境直接相关（例如当前地点、当前日期或时间、过往历史、或用户表达的兴趣）",a155:"通知示例",a156:"避免在此使用可选停用通知的原因",a157:"关于如何使用应用的随机提示",a158:"提供具体的价值，但不符合情境",a159:"提示你对最近使用的内容进行评论",a160:"符合情境，但未给用户带来具体的价值",a161:"来自 YouTube 的此通知使用可选停用的方式。它同时符合情境（用户订阅的 YouTube 频道）和价值（来自该频道的新视频）。“Options” 操作可以将用户导航到设置界面，用户可以在此选择以后不再接收此频道的视频推送。",a162:"可选启用",a163:`可选启用的方式更保守。因为用户明确的选择了接收这些通知，这很可能表明用户很乐意看到这些通知。但是，用户必须访问设置才能了解如何接收这些通知。你可以在应用的其他地方提醒用户启用这些通知，例如<a class="do-router" href="${a("/growth-communications/onboarding.html")}">导览流程</a>或可忽略的<a class="do-router" href="${a("/components/cards.html")}">卡片</a>。`,a164:"该应用使用了可选启用方式。应用顶部的卡片使用户知道他们可以接收突发新闻的通知。如果用户想要接收，它们会选择 “Yes”，否则他们会选择 “No Thanks” 并保持不接收这些通知。这些选项同样也可以在应用的设置中进行设置。",a165:"Android O 中的通道",a166:"当你把应用更新到 Android O 时，你需要为通知定义通道 - 每一个通知类型定义一个通道。",a167:"用户通过通道控制 Android O 中的应用通知。如果用户不想收到应用中的某类通知，他们可以屏蔽该通道，而不用屏蔽该应用的所有通知。",a168:"该应用有三个通道，在 UI 中称为“分类”。",a169:"通道的重要性级别",a170:"你定义的每个通道，都需要为其分配重要性级别。从 Android O 开始，重要性级别控制每个通道的行为（取代优先级）。",a171:"重要性级别有以下限制：",a172:"你分配的重要性级别将是通道的默认值。用户可以在 Android 的设置中修改通道的重要性级别。",a173:"一旦你选择了重要性级别，你修改它的方式就会收到限制：只能降低重要性，且仅在用户没有明确修改它时。",a174:"选择通道的重要性时，需要考虑用户的时间和注意力。当不重要的通知被伪装成紧急通知时，会让用户产生不必要的惊恐。",a175:"重要性",a176:"行为",a177:"用法",a178:"示例",a179:"发出声音，并出现在屏幕上",a180:"用户必须立即知道，或立即采取行动的，对时间要求严格的信息",a181:"短信、闹钟、电话",a182:"发出声音",a183:"在用户方便的时候应该被最先看到的消息，但不会中断他们正在做的事",a184:"流量警报、任务提醒",a185:"没有声音",a186:"不符合其他重要性级别要求的通知通道",a187:"用户订阅的新内容，社交网络的邀请",a188:"没有声音或视觉中断",a189:"可以等待稍后处理、或与用户不是特别相关的非必要信息",a190:"附近的景点、天气、促销内容",a191:"定义通道",a192:"要定义通道，需要先记录所有你需要发送的通知。然后将通知分组为具有以下共同点的集合：",a193:"<strong>主题：</strong>单个主题可以简洁地描述所有这些通知，例如“下载”。",a194:"<strong>期望的重要性级别：</strong>因为一个通道中的通知共用一个重要性级别，因此它们应该在用户的角度上具有相似的重要性级别。",a195:"分组通道",a196:"你可以对通道进行分组，方便用户在 Android 的设置中快速扫视通道列表。",a197:"只在以下情况下创建通道分组：",a198:"有超过 10 个通道",a199:"应用支持多个用户账户（如个人账户和企业账户），允许用户在不同账户间使用相同的通道名称和功能",a200:"将应用的设置和 Android 的通道设置相关联",a201:"使应用中的设置和 Android 的通道设置保持一致。如果应用提供了对不同类型的通知的控制功能，用户可以直接选择适当的 Android 通道设置来进行更改。",a202:"你也可以把通道设置界面链接到应用的设置。",a203:"在该应用中，用户可以设置通信偏好。其中一项偏好是航班更新的通知，链接到了名为 “Flight updates” 的系统通道设置界面。那个界面包含一个返回链接 “Additional settings in the app”。",a204:"通道和前台服务",a205:`在 Android O 中，<a class="do-router" href="${a("/patterns/notifications.html#notifications-usage")}">前台服务</a>通知的通道默认重要性级别必须至少为 IMPORTANCE_LOW，以便能在状态栏中显示一个图标。`,a206:"使用重要性级别较低的 IMPORTANCE_MIN 的通道会触发一个来自 Android 系统的额外的 IMPORTANCE_LOW 级别的通知，表明该应用正在使用电池。",a207:"不含通道的优先级",a208:"对于尚未升级到 Android O 的应用，你需要为每个通知分配优先级，某些优先级提供了播放声音的选项。",a209:"优先级",a210:"要控制通知的推送方式，需要先分配优先级。优先级越高，对用户的中断越多。例如，MAX 和 HIGH 优先级的通知会直接显示在用户的屏幕上，无论用户正在做什么。如果对通知的优先级不确定，请选择较低的优先级。",a211:"通知的声音",a212:"DEFAULT（或更高）优先级的通知可以在推送通知时播放声音（使用你提供的音频文件）。但是，应该仅在以下情况下使用声音：",a213:"它有助于用户保持一个具有时效性的社会期望，例如，来电、或者即将召开的工作会议。",a214:"它在日常生活中帮助到用户，例如通知用户航班延误。",a215:"用户明确要求此通知在到达时需要发出声音（此选项默认为关闭状态）。",a216:"预定义类别",a217:"无论是否使用了通道，都请把每个通知都分配到合适的预定义类别中。Android 可以根据此信息进行排序和过滤。",a218:"类别",a219:"描述",a220:"来电（语音或视频）或类似的同步通信请求",a221:"直接接收的消息（短信、即时消息等）",a222:"异步的大量消息（邮件）",a223:"日历事件",a224:"宣传或广告",a225:"闹钟或计时器",a226:"长时间运行的后台操作的进度",a227:"社交网络或分享更新",a228:"后台操作错误或身份验证状态",a229:"媒体播放控制器",a230:"系统或设备状态更新。保留仅供系统使用。",a231:"运行后台服务的指示",a232:"为单一事件提供的具体的、即时的建议。例如，新闻应用可能会推荐用户想要阅读的新闻报道。",a233:"关于设备或情境状态的行为信息",a234:"用户可以选择在锁屏时显示通知。这些通知可能会隐藏被应用标记为隐私的内容。Android 会评估每个通知的可见性级别，以确定哪些内容可以被安全的显示。",a235:"锁屏界面上的敏感内容",a236:"因为通知可以直接在锁屏界面上浏览，用户隐私就成了一个非常重要的考虑因素。对于你创建的每个通知，都需要把可见级别设置为公共、私有或机密。",a237:"<strong>公共</strong>通知在锁屏界面上完全可见，但<strong>机密</strong>通知则完全隐藏。",a238:"<strong>私有</strong>通知则处于中间：它们只显示通知的基本信息，例如应用的图标和名称。常规内容则将被隐藏 - 你可以自行设置显示不涉及个人信息的文本，例如 “2 条未读消息”",a239:"此用户选择在锁屏界面上显示所有通知。",a240:"此用户选择在锁屏界面上隐藏敏感信息。因为这些应用的通知可见性级别被设定为 “私有”，不会出现内容的标题或其他文本。",a241:"清晰简洁的文本",a242:"Android 会把内容标题截断为一行（即使已展开）。",a243:"内容标题应该：",a244:"不超过 30 个字符",a245:"包含最重要的信息",a246:"避免使用变量 – 除非它们包含数字或短文本，或者前面有文本",a247:"不要包含应用名称，因为已经显示在了头部",a248:"内容标题显示了应用名称，它与头部区域冗余，并且占用了标题中的可用空间。",a249:"内容文本应该：",a250:"避免超过 40 个字符的限制",a251:"不重复标题中的内容",a252:"内容的标题显示了最重要的信息。",a253:"大图标",a254:"在 Android N 中，大图标只针对特殊的情况，即图像可以通过有意义的方式增强内容，包括：",a255:"与另一个人<strong>通信</strong>时，例如用图片表示发送消息的人",a256:"<strong>内容的来源</strong>，如果应用发送通知的来源不同时，例如用户订阅的 YouTube 频道的 Logo",a257:"关于通知的<strong>有意义的符号</strong>，例如表示驾驶方向的箭头符号",a258:"大图标在代表人的时候应该是圆形的，但是其他时候是方形的。",a259:"大图标不适合使用 logo。",a260:"大图标旨在以有意义的方式强化应用的内容，例如消息通知中的联系人照片。",a261:"Google 在其 Android 应用中使用以下通知模版，你可以根据自己的应用进行调整。",a262:"标准模板",a263:"标准模版适用于大多数通知，允许显示简单的文本、大图标（有需要时）、操作。",a264:"折叠和展开的通知的标准模版",a265:"大文本模板",a266:"当你需要显示较长的文本时，使用此模版。它允许用户在展开通知时预览更多文本。",a267:"折叠和展开的通知的大文本模版",a268:"大图片模板",a269:"当通知包含图片时可以使用此模版。大图标提供了图片的缩略图，用户可以通过展开通知来获得更多预览。",a270:"折叠和展开的通知的大图片模版",a271:"进度模板",a272:"此模版用于由用户启动的需要一些时间才能完成的活动，并且可以随时取消。（不可取消的活动不适用。）",a273:"折叠和展开的通知的进度模版",a274:"多媒体模板",a275:"使用此模版让用户控制应用中正在播放的媒体。",a276:"<strong>折叠视图</strong>最多显示 3 个操作，大图标可以显示相关图片，如相册封面。",a277:"<strong>展开视图</strong>最多显示 5 个操作和一个大图片，或者不包含大图片的 6 个操作。来自图片中的颜色自动填充通知的背景色和其他元素。",a278:"折叠和展开的通知的媒体模版",a279:"消息模板",a280:"此模板用于实时通信。你也可以提供直接在通知中进行回复的功能。",a281:"折叠和展开状态的通知模板",a282:"Material Design 中的通知提供简短、即时信息",a283:"Material Design 中的展开与折叠状态通知",a284:"Material Design 通知的标题区域",a285:"Material Design 通知的内容区域",a286:"Material Design 通知的操作区域",a287:"Material Design 的节日或生日祝福不应以通知形式发送",a288:"Material Design 中的用户不应被打断以询问操作状态",a289:"Material Design 中的 Android 下载管理器通知用户下载进度",a290:"Material Design 中的通知抽屉显示信息",a291:"Material Design 中的通知汇总，折叠与展开视图",a292:"Material Design 中的分组通知，支持折叠和展开视图",a293:"Material Design 中的折叠和展开通知",a294:"Material Design 中的文本操作与通知主体操作不应重复",a295:"Material Design 中的计时器通知可直接暂停或增加时间",a296:"Material Design 的 YouTube 频道通知与用户订阅相关",a297:"Material Design 中的通知接收选项示例",a298:"Material Design 中的三个分类通道",a299:"Material Design 中的航班更新通知设置界面",a300:"Material Design 中的锁屏通知设置",a301:"Material Design 中的锁屏隐私设置选项",a302:"Material Design 应用名称冗余，占用标题空间",a303:"Material Design 中的内容标题突出关键信息",a304:"Material Design 中大图标不适合用作 logo",a305:"Material Design 中的联系人照片大图标强化内容",a306:"Material Design 中的折叠与展开通知模板",a307:"Material Design 中的折叠和展开通知文本模板",a308:"Material Design 的折叠和展开通知图片模板",a309:"Material Design 折叠和展开的通知进度模板",a310:"Material Design 中的折叠与展开通知媒体模版",a311:"Material Design 中的折叠和展开状态的通知模板"};export{r as zhCn};
