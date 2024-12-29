import{f as e}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const a={a1:"Android only",a2:"Notifications provide short, timely, and relevant information about your app when it’s not in use.",a3:"Notifications are intended to inform users about events in your app. These two types of notifications are the most effective:",a4:"Communication from other users",a5:"Well-timed and informative task reminders",a6:"Notification components",a7:"Header area<br />Content area<br />Action area",a8:"How notifications may be noticed",a9:"Showing a status bar icon",a10:"Appearing on the lock screen",a11:"Playing a sound or vibrating",a12:"Peeking onto the current screen",a13:"Blinking the device's LED",a14:"Anatomy of a notification",a15:"Usage",a16:"Behavior",a17:"Types of notifications",a18:"Settings",a19:"Lock screen",a20:"Style",a21:"Templates",a22:"Overview",a23:"Notifications have been designed to make it easy to scan and use a notification’s most important elements:",a24:"Primary content",a25:"Content is the most prominent element of a notification. Secondary information, such as a timestamp, is smaller and consolidated above the primary content.",a26:"People",a27:"If the notification involves a person, an avatar appears on the right where it stands out from the rest of the content.",a28:"Actions",a29:"Expandable notifications are revealed by tapping an indicator icon. Actions are displayed with text labels on a separate background color and location.",a30:"Collapsed and expanded views of a notification",a31:"Header area",a32:"The header area is comprised of:",a33:"<strong>1. The app icon:</strong> The app icon is a small two-dimensional representation of your app's identity. It appears in monochrome in the status bar. If your app sends a wide variety of notifications, you may replace your app's identity icon with a symbol that reflects the content type. For example, Google Now uses a cloud icon for weather notifications.",a34:"<strong>2.The app name:</strong> The name of the app automatically appears in the notification.",a35:"<strong>3.Header text (optional):</strong> Header text is usually only needed if an app sends notifications from multiple sources, such as the account name for users with multiple accounts.",a36:"<strong>4. Timestamp (optional):</strong> By default, a timestamp does not appear, but it may be added if it's important to display when a notification was sent, such as the time of a missed call.",a37:"<strong>5. Expand indicator:</strong> This appears if the notification can be expanded.",a38:"The header area",a39:"Content area",a40:"The content area is comprised of:",a41:"<strong>1. A content title:</strong> A brief headline for the notification",a42:"<strong>2. Content text:</strong> Supporting information",a43:"<strong>3. Large icon (optional):</strong> An image may be added to reinforce the notification in a meaningful way, such as a message that includes an avatar of the sender",a44:"The content area",a45:"Action area",a46:"When expanded, a notification may display up to three actions on at the bottom.",a47:'In Android N and later, actions are shown without icons to accommodate more text. An icon should still be provided because devices with earlier versions of the OS rely on it, as will <a href="https://www.google.com/design/spec-wear/patterns/notifications.html" target="_blank">Android Wear</a> and <a href="https://www.google.com/design/spec-auto/system-overview/notifications.html#" target="_blank">Android Auto</a> devices.',a48:"The action area",a49:"When not to use a notification",a50:"Notifications should not be the primary communication channel with your users, as frequent interruptions may cause irritation. The following cases do not warrant notification:",a51:"<strong>Cross-promotion</strong>, or advertising another product within a notification, which is strictly prohibited by the Play Store",a52:"An app that a user has <strong>never opened</strong>",a53:`Messages that encourage the user to return to an app, but provide <strong>no direct value</strong>, such as "Haven't seen you in a while"`,a54:"Requests to <strong>rate an app</strong>",a55:"<strong>Operations</strong> that don't require user involvement, like syncing information",a56:"<strong>Error states</strong> from which the app may recover without user interaction",a57:"Don’t send holiday or birthday greetings in the form of notifications.",a58:"Don’t interrupt the user in the middle of a task for the sole purpose of asking if you're doing a good job.",a59:"Required notifications",a60:"<strong>Foreground services</strong> are app processes that run in the background while the user is not directly interacting with your app. Because these apps use battery and possibly data, Android requires that users are made aware of these types of services by showing a non-dismissible notification.",a61:"Because the user can't dismiss the notification, you should provide an action for the user to stop the service if they don't want it running.",a62:"While downloading apps and files, Android's Download Manager runs a foreground service and shows a notification that lets the user know downloading is in progress, with an option to cancel.",a63:"Notification arrival",a64:"When a notification arrives, it gets added to the notification drawer. Depending on the parameters you set and the current state of the device, the notification may also:",a65:"Be indicated in the status bar with an icon",a66:"Make a sound or vibrate",a67:"Peek onto the current screen to grab the user's attention",a68:"Users may choose to alter the notification behaviors you set.",a69:"When a notification arrives, an icon usually appears in the status bar. This signals to the user that there's something to see in the notification drawer.",a70:"If it's important to grab a user's attention in the middle of a task, an app can have the notification peek onto the current screen.",a71:"Notification drawer",a72:"The notification drawer in Android typically shows notifications in reverse-chronological order, with adjustments influenced by:",a73:"The app's stated notification priority or importance",a74:"Whether the notification recently alerted the user with a sound or vibration",a75:"Any people attached to the notification and whether they are starred contacts",a76:"Whether the notification represents an important ongoing activity, such as a phone call in progress or music playing",a77:"Starting in Android O, the Android system may alter the appearance of some notifications at the top and bottom of the list by adding emphasis or deemphasis, to help the user scan content.",a78:"Stale notifications",a79:"The notification drawer should show users relevant information for the current moment in time. If a notification sent earlier is no longer relevant, you can automatically dismiss it so the user doesn’t see it.",a80:"In this notification drawer, a text that just arrived appears at the top. A lower priority notification about the weather appears at the bottom.",a81:"Notification interactions",a82:"Users may interact with a notification in the following ways:",a83:"1. To navigate to a destination",a84:"To navigate, a user may tap a notification. If the notification appears on a locked screen, the user will need to double-tap it and then enter their PIN, pattern, or password.",a85:"When the user taps a notification, they should be taken to a screen in your app that relates directly to that notification and lets them take immediate action. For example, if the notification says it's their turn in a two-player game, tapping the notification should take them directly to that game.",a86:"2. To see an expanded view",a87:"If offered, an expand indicator appears in the header. A user may tap the indicator or swipe down the notification body to expand it.",a88:"An expanded notification",a89:"3. To dismiss it (if permitted)",a90:"A user may dismiss a notification by swiping it left or right.",a91:"Ongoing notifications that indicate a continuing process in the background, such as music playing, may not be dismissed with a swipe.",a92:"A notification being dismissed",a93:"4. To control similar notifications in the future",a94:"Notification controls can be accessed by:",a95:"Touching and holding an individual notification",a96:"Swiping the notification left or right, and then tapping the settings icon",a97:`The controls displayed vary depending on the Android version and whether the app has <a class="do-router" href="${e("/patterns/notifications.html#notifications-settings")}">channels</a> for its notifications (starting in Android O).`,a98:"Notification settings",a99:"Multiple notifications",a100:"For apps that generate multiple notifications of the same type, Android offers two different approaches to represent them: summarizing and bundling.",a101:"Summarizing",a102:'Instead of displaying multiple notifications, you can create one notification that summarizes them all. For example, a messaging app might have a summary notification that says "3 new messages.” Upon expansion, it could show a snippet for each message.',a103:"Multiple notifications summarized, shown in both collapsed view and expanded view.",a104:"Grouping",a105:"Your app can present multiple notifications according to hierarchy:",a106:"A parent notification displays a summary of its child notifications",a107:"If the parent notification is expanded by the user, all child notifications are revealed",a108:"A child notification may be expanded to reveal its entire content",a109:"Child notifications are presented without duplicate header information. For example, if a child notification has the same app icon as its parent, then the child’s header doesn’t include an icon.",a110:"Child notifications should be understandable if they appear solo, as the system may show them outside of the group when they arrive.",a111:"Grouped notifications, shown in both collapsed and expanded views",a112:"Expanded views",a113:"You may display more information in a notification through an expanded view, without navigating away from the notification.",a114:"Collapsed and expanded notifications",a115:"A notification may offer up to three actions when expanded. It should not duplicate the action taken from tapping on the notification body.",a116:"Don’t include text actions that duplicate the behavior of tapping on the notification body.",a117:"When Android's Clock app has a timer running, this notification lets the user pause or add a minute directly from the notification.",a118:"Enable typing into notifications",a119:"You may enable the user to type directly into a notification. Users may type small amounts of text, such replying to a text message or jotting a brief note.",a120:"For long-form typing, navigate users to your app, where they benefit from more space to view and edit text.",a121:"If you're using this functionality for a messaging app, keep the notification around after the user has sent the reply, and wait until the conversation has reached a lull before automatically dismissing it.",a122:"Users of Android's Messages app can reply directly to any message without leaving the notification",a123:"Notifications are considered either transactional or non-transactional.",a124:"Transactional",a125:"Transactional notifications provide content that a user must receive at a specific time in order to do one of the following:",a126:"Enable human-to-human interaction",a127:"Function better in daily life",a128:"Control or resolve transient device states",a129:"Non-transactional",a130:"If none of the above situations describe your notification, then it is non-transactional.",a131:"Transactional notifications can help users...",a132:"Examples",a133:"Enable human-to-human interaction",a134:"Incoming phone calls or text messages",a135:"Notification of a user's turn in a two-player game",a136:"Function better in daily life",a137:"Calendar event about to take place",a138:"A reminder or alarm set up by the user",a139:"Delayed flight",a140:"Delivered order",a141:"Monitor, control, or resolve temporary device states",a142:"Music playing",a143:"Turn-by-turn navigation",a144:"Stopwatch running",a145:"Screenshot taken",a146:"App running in the background",a147:"Non-transactional opt-out and opt-in",a148:"Non-transactional notifications should be optional, as they may not appeal to all users. You can make them optional in one of two ways:",a149:"<strong>Opt-out:</strong> Users receive opt-out notifications by default, but they may stop receiving them by turning off a setting.",a150:"<strong>Opt-in:</strong> Users only receive opt-in notifications by turning on a setting in your app.",a151:"Opt-out",a152:"Avoid the opt-out approach unless your notifications meet <strong>both</strong> of the following criteria:",a153:"They provide concrete value to the user",a154:"They clearly relate to the user's context (such as current location, current date or time, past history, or expressed interests)",a155:"Example notification",a156:"Reason to avoid using opt-out notifications here",a157:"A random tip on how to use an app",a158:"Provides concrete user value but isn't contextual",a159:"A prompt to rate content recently used in the app",a160:"Contextual, but doesn't provide concrete user value",a161:'This notification from YouTube takes the opt-out approach. It offers both context (a YouTube channel the user has subscribed to) and value (a new video from that channel). The "Options" action navigates the user to where they can opt out of future notifications for this channel.',a162:"Opt-in",a163:`The opt-in approach is more conservative. Because users explicitly choose to receive these notifications, it's more likely they'll be glad to see them. However, they must visit settings to find out how to receive them. You may inform users about these notifications from other places in your app, such as an <a class="do-router" href="${e("/growth-communications/onboarding.html")}">onboarding flow</a> or a dismissible <a class="do-router" href="${e("/components/cards.html")}">card</a>.`,a164:"This app takes the opt-in approach. A card at the top of the app lets users know that they can receive notifications for breaking news stories. If the user wants to opt in, they choose “Yes.” Otherwise, they choose “No Thanks” and remain opted out. This choice is also available in the app's settings.",a165:"Channels in Android O",a166:"When you upgrade your app to Android O, you'll be required to define channels for your notifications – one for each type of notification you want to send.",a167:"Users control app notifications in Android O with channels. If a user doesn't want a certain notification from your app, they can block that channel rather than all notifications.",a168:'This app has three channels, which may be referred to as "categories" in the UI.',a169:"Channel importance levels",a170:"For each channel you define, you'll assign it an importance level. Starting in Android O, importance levels control the behavior of each channel (taking the place of priority levels).",a171:"Importance levels have the following restrictions:",a172:"The importance level you assign will be the channel’s default. Users can change a channel’s importance level in Android Settings.",a173:"Once you choose an importance level, you're limited in how you can change it: you may only lower the importance, and only if the user hasn't explicitly changed it.",a174:"Channel importance should be chosen with consideration for the user's time and attention. When an unimportant notification is disguised as urgent, it can produce unnecessary alarm.",a175:"Importance",a176:"Behavior",a177:"Usage",a178:"Examples",a179:"Makes a sound and appears on screen",a180:"Time-critical information that the user must know, or act on, immediately",a181:"Text messages, alarms, phone calls",a182:"Makes a sound",a183:"Information that should be seen at the user’s earliest convenience, but not interrupt what they're doing",a184:"Traffic alerts, task reminders",a185:"No sound",a186:"Notification channels that don't meet the requirements of other importance levels",a187:"New content the user has subscribed to, social network invitations",a188:"No sound or visual interruption",a189:"Non-essential information that can wait or isn’t specifically relevant to the user",a190:"Nearby places of interest, weather, promotional content",a191:"Defining channels",a192:"To define your channels, take inventory of all the notifications you want to send. Group these notifications into sets that have the following things in common:",a193:'<strong>Subject matter.</strong> A single topic can succinctly describe all of these notifications, such as "Downloads."',a194:"<strong>Desired importance level.</strong> Because notifications in a channel share one importance level, they should carry a similar level of importance to one another from the user’s perspective.",a195:"Grouping channels",a196:"You can group your channels to make it easier for users to scan your list of channels in Android Settings.",a197:"Only create channel groupings if:",a198:"You have more than 10 channels",a199:"Your app supports multiple user accounts (such as personal and business accounts) allowing users to have the same channel names and functions across accounts",a200:"Link your app's settings to Android channel settings",a201:"Keep the settings in your app consistent with those in Android channels. If your app offers controls for different types of notifications, direct users to the settings of the appropriate Android channel settings to make changes.",a202:"You can also link your channel settings screen to your app's settings.",a203:'In this app, a user can specify communication preferences. One of the preferences is notifications for flight updates, which links to a system settings screen for a channel called "Flight updates". That screen includes a link back via "Additional settings in the app".',a204:"Channels and foreground services",a205:`In Android O, a channel’s default importance level for <a class="do-router" href="${e("/patterns/notifications.html#notifications-usage")}">foreground service</a> notifications must be at least IMPORTANCE_LOW so that it shows an icon in the status bar.`,a206:"Channels using the less-prominent IMPORTANCE_MIN level will trigger an extra notification from Android at IMPORTANCE_LOW, stating that the app is using battery.",a207:"Priority levels without channels",a208:"For apps not yet upgraded to Android O, you'll need to assign a priority level for each individual notification. Some priority levels offer the option to play sound.",a209:"Priority levels",a210:"To affect how each notification is delivered to users, assign it a priority level. The higher the priority, the more interruptive it will be. For example, MAX and HIGH priority notifications will peek onto the user's current screen, regardless of what they are doing. When in doubt, choose a lower priority.",a211:"Notification sounds",a212:"Notifications assigned a priority of DEFAULT (or higher) have the option to play a sound (using a sound file you provide) when the notification is delivered. However, a notification should only use sound if:",a213:"It helps the user uphold a time-sensitive social expectation, such as an incoming phone call or imminent work meeting.",a214:"It helps the user in daily life, such as letting them know that a flight is delayed.",a215:"The user has explicitly requested that this notification make a sound upon arrival (this option is off by default).",a216:"Pre-defined categories",a217:"Whether you're using channels or not, assign each individual notification to the most suitable predefined category. Android may use this information to make ranking and filtering decisions.",a218:"Category",a219:"Description",a220:"Incoming call (voice or video) or similar synchronous communication request",a221:"Incoming direct message (SMS, instant message, etc.)",a222:"Asynchronous bulk message (email)",a223:"Calendar event",a224:"Promotion or advertisement",a225:"Alarm or timer",a226:"Progress of a long-running background operation",a227:"Social network or sharing update",a228:"Error in background operation or authentication status",a229:"Media transport control for playback",a230:"System or device status update. Reserved for system use.",a231:"Indication of running background service",a232:"A specific, timely recommendation for a single thing. For example, a news app might recommend a news story the user might want to read next.",a233:"Ongoing information about device or contextual status",a234:"A user may choose to show notifications when their screen is locked. These notifications may conceal any content that an app marks as sensitive. Android evaluates each notification's visibility level to figure out what can safely be shown.",a235:"Sensitive content on lock screens",a236:"Because notifications are visible on the lock screen, user privacy is an important consideration. For each notification you create, a visibility level is set to either public, private, or secret.",a237:"<strong>Public</strong> notifications are fully visible on secure lock screens, while <strong>secret</strong> notifications are hidden.",a238:`<strong>Private</strong> notifications fall in the middle: they show only basic information, including the name of the app that posted it and its icon. In place of the regular content – which will be hidden – you have the option to show text that doesn't reveal personal information, such as "2 new messages".`,a239:"This user has chosen to show all notification content on the lock screen.",a240:'This user has chosen to hide sensitive content from the lock screen. Because these apps gave their notifications a visibility level of "private,” no content title or text appears.',a241:"Clear and concise text",a242:"Android truncates content titles to a single line (even when expanded).",a243:"Content titles should:",a244:"Be under under 30 characters long",a245:"Contain the most important information",a246:"Avoid variables – unless they contain a number or short text string, or are preceded by text",a247:"Exclude the app's name, which already appears in the header",a248:"The content title shows the app name, which is redundant with the header area and uses up available characters.",a249:"Content text should:",a250:"Avoid exceeding the 40-character limit",a251:"Not repeat what's in the content title",a252:"The content title shows the most important information.",a253:"The large icon",a254:"In Android N, the large icon is only meant for specific situations in which imagery meaningfully reinforces the notification's content, including:",a255:"<strong>Communication</strong> from another person, such as the image of someone sending a message",a256:"The <strong>source of content</strong> if it's different than the app sending the notification, such as the logo from a YouTube channel to which the user is subscribed",a257:"<strong>Meaningful symbols</strong> about the notification, such as an arrow symbol for driving directions",a258:"Large icons should be circular when showing a person, but square in all other cases.",a259:"The large icon is not intended for branding.",a260:"The large icon is meant to reinforce the content of the notification in a meaningful way, such as a person's photo attached to a message notification.",a261:"Google uses the following notification templates in its Android apps, which you can adapt for your app.",a262:"Standard template",a263:"The standard template is suitable for most notifications, allowing succinct text, a large icon (when applicable), and actions.",a264:"Standard template for collapsed and expanded notifications",a265:"Big text template",a266:"This template should be used when long text is displayed. It lets the user preview more text when the notification is expanded.",a267:"Big text template for collapsed and expanded notifications",a268:"Big picture template",a269:"This template should be used when a notification contains a picture. The large icon offers a thumbnail of the picture, and the user can get a bigger preview by expanding the notification.",a270:"Big picture template for collapsed and expanded notifications",a271:"Progress template",a272:"This template should be used for user-initiated activities that take time to complete and can be canceled at any time. (Non-cancelable activities don't warrant notifications.)",a273:"Progress template for collapsed and expanded notifications",a274:"Media template",a275:"This template lets the user control media currently playing from an app.",a276:"The <strong>collapsed view</strong> displays up to three actions, and the large icon can show a related image, such as an album cover.",a277:"The <strong>expanded view</strong> displays up to five actions with a larger image, or six actions if no image is displayed. Colors from provided images automatically color the notification's background and other elements.",a278:"Media template for collapsed and expanded notifications",a279:"Messaging template",a280:"This template is for real-time communication. Optionally, you can offer users the ability to type replies directly into the notification.",a281:"Messaging template for collapsed and expanded notifications",a282:"Material Design notifications offer timely app updates",a283:"Material Design notification views: collapsed and expanded",a284:"The header area of Material Design notifications",a285:"The content area of Material Design notifications",a286:"The action area of Material Design notifications",a287:"Material Design: Avoid sending holiday notifications",a288:"Material Design: Avoid interrupting users during tasks",a289:"Material Design: Android Download Manager shows progress notification",a290:"Material Design notification drawer with messages",a291:"Material Design: Collapsed and expanded notification views",a292:"Material Design grouped notifications, collapsed and expanded",a293:"Material Design: Collapsed and expanded notifications",a294:"Avoid duplicate actions in Material Design notifications",a295:"Material Design timer notification to pause or add time",a296:"YouTube notification showcasing Material Design opt-out options",a297:"Opt-in notifications for breaking news in Material Design",a298:"Three channels in Material Design categories UI",a299:"Material Design: Flight update notifications settings",a300:"User displays all notification content on lock screen - Material Design",a301:"User hides sensitive content; Material Design notifications private",a302:"Material Design app name is redundant in header area",a303:"Material Design: Key information in content title",a304:"Large icon for non-branding in Material Design",a305:"Large icon supports notification content in Material Design",a306:"Material Design standard template for notifications",a307:"Material Design big text template for notifications",a308:"Material Design big picture template for notifications",a309:"Material Design progress template for notifications",a310:"Material Design media template for notifications",a311:"Material Design messaging template for notifications"};export{a as en};
