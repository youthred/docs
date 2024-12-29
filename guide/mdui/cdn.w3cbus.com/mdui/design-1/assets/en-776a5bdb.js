import{f as e}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const a={a1:"Accessible design allows users of all abilities to navigate, understand, and use your UI successfully.",a2:"Principles",a3:"Color and contrast",a4:"Sound and motion",a5:"Style",a6:"Hierarchy and focus",a7:"Implementation",a8:"Writing",a9:"A well-designed product is accessible to users of all abilities, including those with low vision, blindness, hearing impairments, cognitive impairments, or motor impairments. Improving your product’s accessibility enhances the usability for all users. It’s also the right thing to do.",a10:'Material design’s built-in accessibility considerations will help you accommodate all of your users. This section primarily applies to mobile UI design. For more information on designing and developing fully accessible products, visit the <a href="https://www.google.com/accessibility/" target="_blank">Google accessibility site</a>.',a11:"Clear",a12:"Help users navigate your app by designing clear layouts with distinct calls to action. Every added button, image, and line of text make the screen more complicated. Simplify your app’s UI with:",a13:"Clearly visible elements",a14:"Sufficient contrast and size",a15:"A clear hierarchy of importance",a16:"Key information discernable at a glance",a17:"Robust",a18:"Design your app to accommodate a variety of users. A user may have a short attention span, be new to your product, or use a text-only <strong>screen reader</strong> (a program that uses a speech synthesizer to read text aloud or kinesthetically using a braille display). Your app should make it easy for each user to:",a19:"<strong>Navigate:</strong> Give users confidence in knowing where they are in your app and what is important",a20:"<strong>Understand important tasks:</strong> Reinforce important information through multiple visual and textual cues. Use color, shape, text, and motion to communicate what is happening.",a21:"<strong>Access your app:</strong> Include appropriate content labelling to accommodate users who experience a text-only version of your app",a22:"Specific",a23:'Support assistive technologies specific to your platform, just as you support the input methods of touch, keyboard, and mouse. For example, ensure your Android app works with Google’s screen reader, <a href="https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932" target="_blank">TalkBack</a>.',a24:"<strong>Assistive technology</strong> helps increase, maintain, or improve the functional capabilities of individuals with disabilities, through devices like screen readers, magnification devices, wheelchairs, hearing aids, or memory aids.",a25:"Use color and contrast to help users see and interpret your app’s content, interact with the right elements, and understand actions.",a26:"Accessible color palette",a27:"Choose primary, secondary, and accent colors for your app that support usability. Ensure sufficient color contrast between elements so that users with low vision can see and use your app.",a28:"Contrast ratios",a29:'The contrast ratio between a color and its background ranges from 1-21 based on its luminance, or intensity of light emitted, according to the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank">World Wide Web Consortium (W3C)</a>.',a30:"Contrast ratios represent how different a color is from another color, commonly written as 1:1 or 21:1. The higher the difference between the two numbers in the ratio, the greater the difference in relative luminance between the colors.",a31:"The W3C recommends the following contrast ratios for body text and image text:",a32:"Small text should have a contrast ratio of at least 4.5:1 against its background",a33:"Large text (at 14 pt bold/18 pt regular and up) should have a contrast ratio of at least 3:1 against its background",a34:"These lines of text follow the color contrast ratio recommendations and are legible against their background colors.",a35:"These lines of text do not meet the color contrast ratio recommendations and are difficult to read against their background colors.",a36:"Icons or other critical elements should also use the above recommended contrast ratios.",a37:"These icons follow the color contrast ratio recommendations and are legible against their backgrounds.",a38:"These icons do not follow the color contrast ratio recommendations and are difficult to discern against their backgrounds.",a39:"Logos and decorative elements",a40:"While decorative elements (such as logos or illustrations) don’t have to meet contrast ratios, they should be distinguishable if they possess important functionality.",a41:"Decorative logos that are distinguishable don’t have to meet contrast ratios.",a42:"It is not necessary to distort your logo to meet contrast ratios.",a43:"Other visual cues",a44:"For users who are colorblind, or cannot see differences in color, include design elements in addition to color that ensure they receive the same amount of information.",a45:"Colorblindness takes different forms (including red-green, blue-yellow, and monochromatic). Use multiple visual cues to communicate important states. Use elements such as strokes, indicators, patterns, texture, or text to describe actions and content.",a46:"The text field error state is communicated through multiple cues: title color, text field stroke, and an error message below the field.",a47:"The text field error state is only communicated with a colored stroke, which would be missed by a user who cannot perceive color.",a48:"Sound",a49:"Give visual alternatives to sound, and vice versa. Provide closed captions, a transcript, or another visual alternatives to critical audio elements and sound alerts.",a50:'Allow users to navigate your app using sound by adding descriptive labels to UI elements. When using a screen reader such as TalkBack and navigating by <a href="https://support.google.com/accessibility/android/answer/6006598?hl=en" target="_blank">touch exploration</a>, labels are spoken aloud when users touch UI elements with their fingertips.',a51:"The following sounds should be avoided:",a52:"Unnecessary sounds that play over a screen reader, such as background music that autoplays when entering a web page. If there is background sound, ensure users can safely pause or stop it.",a53:"Extra sounds added to native elements (screen readers will be able to interpret native elements correctly)",a54:"Labeling User Interface Elements",a55:"Add audible descriptions to input controls and other elements",a56:"Motion",a57:"Material design uses motion to guide focus between views, which helps reduce user distraction. Surfaces transform into focal points for the user to follow, and unimportant elements are removed.",a58:`To allow users with motion and vision sensitivities to use interfaces comfortably, adhere to the <a class="do-router" href="${e("/motion/material-motion.html")}">material design motion spec</a>, which supports the following motion guidelines from the W3C:`,a59:"Enable content that moves, scrolls, or blinks automatically to be paused, stopped, or hidden if it lasts more than than five seconds",a60:'Limit flashing content to three times in a one-second period to meet <a href="http://www.w3.org/TR/WCAG20/#general-thresholddef" target="_blank">flash and red flash thresholds</a>',a61:'Avoid <a href="https://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G176" target="_blank">flashing large central regions of the screen</a>',a62:"Timed controls",a63:"Controls in an app may be set to disappear after a certain amount of time. For example, five seconds after starting a video, playback controls may fade from the screen.",a64:"<strong>High-priority controls</strong><br />Avoid using timers on controls that perform a high-priority functions, as users may not notice these controls if they fade away too quickly. For example, TalkBack reads controls out loud if they are focused on, and placing them on timers may prevent the controls from completing their task.",a65:'For controls that enable other important functions, make sure that the user can turn on the controls again or perform the same function in other ways. Learn more in <a href="#accessibility-hierarchy-focus">hierarchy and focus</a>.',a66:"Vocalizing text automatically",a67:"Read about placing text in a live region.",a68:"Layout",a69:"Material design’s touch target guidelines enable users who aren’t able to see the screen, or who have motor-dexterity problems, to tap elements in your app.",a70:"Touch targets",a71:"Touch targets are the parts of the screen that respond to user input. They extend beyond the visual bounds of an element. For example, an icon may appear to be 24 x 24 dp, but the padding surrounding it comprises the full 48 x 48 dp touch target.",a72:"Touch targets should be at least 48 x 48 dp. A touch target of this size results in a physical size of about 9mm, regardless of screen size. The recommended target size for touchscreen elements is 7-10mm. It may be appropriate to use larger touch targets to accommodate a larger spectrum of users, such as children with developing motor skills.",a73:"Touch target spacing",a74:"In most cases, touch targets should be separated by 8dp of space or more to ensure balanced information density and usability.",a75:"Avatar: 40dp<br />Icon: 24dp<br />Touch target on both: 48dp",a76:"Examples of touch targets",a77:"Touch target height: 48dp<br />Button height: 36dp",a78:"Examples of touch targets and buttons",a79:"Grouping items",a80:"Keeping related items in proximity to one another is helpful for those who have low vision or may have trouble focusing on the screen.",a81:"The slider value is in close proximity with the slider control.",a82:"The slider value is placed too far away from the control. A user of screen magnification may not be able to view both the slider and the value without panning back and forth.",a83:"Fonts",a84:`To improve readability, users might increase font size. Mobile devices and browsers include features to allow users to adjust font size system-wide. To enable system font size in an Android app, mark text and their associated containers to be measured in <a class="do-router" href="${e("/layout/units-measurements.html#units-measurements-scaleable-pixels-sp")}">scaleable pixels (sp)</a>.`,a85:`Make sure to allot enough space for large and foreign language fonts. See <a class="do-router" href="${e("/style/typography.html#typography-line-height")}">Line Height</a> for information on the recommended sizes of foreign language fonts.`,a86:"Apps should give users feedback and a sense of where they are in the app. Navigation controls should be easy to locate and clearly written. Visual feedback (such as labels, colors, and icons) and touch feedback show users what is available in the UI.",a87:"Navigation should have clear task flows with minimal steps. Focus control, or the ability to control keyboard and reading focus, should be implemented for frequently used tasks.",a88:"Enabling Focus Navigation",a89:"Use focus controls for navigation",a90:"Screen readers",a91:"Screen readers give users multiple ways to navigate a screen, including:",a92:'Touch interface screen readers allow users to <strong>run their finger over the screen</strong> to hear what is directly underneath. This provides the user a quick sense of an entire interface. Or the user can quickly move to a UI element from muscle memory. In TalkBack, this feature is called “<a href="https://support.google.com/accessibility/android/answer/6006598?hl=en" target="_blank">explore by touch</a>.” To select an item, the user must double tap.',a93:"Users may also <strong>move focus by swiping</strong> backwards or forwards on screen to read pages linearly, from top to bottom. This allows users to hone in on certain elements. In TalkBack, this is called <strong>linear navigation</strong>.",a94:"Users may switch between both “explore by touch” and “linear navigation” modes. Some assistive technologies allow users to navigate between page landmarks, such as headings, when these landmarks use the appropriate semantic markup.",a95:"Hardware or software directional controllers (such as a D-pad, trackball, or keyboard) allow users to jump from selection to selection in a linear fashion.",a96:"Hierarchy",a97:"Place items on the screen according to their relative level of importance.",a98:"<strong>Important actions:</strong> Place important actions at the top or bottom of the screen (reachable with shortcuts)",a99:"<strong>Related items:</strong> Place related items of a similar hierarchy next to each other",a100:"By placing important actions at the top of the screen, they are given more importance in the hierarchy.",a101:"When important actions are embedded within other content, it’s unclear what the most important elements are on the page.",a102:"Focus order",a103:"Input focus should follow the order of the visual layout, from the top to the bottom of the screen. It should traverse from the most important to the least important item. Determine the following focus points and movements:",a104:"The order in which elements receive focus",a105:"The way in which elements are grouped",a106:"Where focus moves when the element in focus disappears",a107:"Clarify where the focus exists through a combination of visual indicators and accessibility text.",a108:"Grouping",a109:"Group similar items under headings that communicate what the groupings are. These groups organize content spatially.",a110:"Transitions",a111:"Focus traversal between screens and tasks should be as continuous as possible.",a112:"If a task is interrupted and then resumed, place focus on the element that was previously focused.",a113:"The green circles indicate the order in which onscreen elements should receive focus.",a114:"By using standard platform controls, your app will automatically contain the markup and code needed to work well with a platform’s assistive technology. Adapt your app to meet each platform's accessibility standards and assistive technology (including shortcuts and structure) to give users an efficient experience.",a115:"This screen is using the standard platform dialog.",a116:"This screen is using a non-standard platform dialog to perform a standard dialog task. This implementation would require extra coding and testing to make this non-standard control work well with assistive technology.",a117:"Test your design with the platform accessibility settings turned on (both during and after implementation).",a118:"Other design considerations:",a119:"<strong>Use scalable text and a spacious layout</strong> to accommodate users who may have large text, color correction, magnification, or other assistive settings turned on",a120:"<strong>Keyboard/mouse interfaces</strong> should have every task and all hover information accessible by keyboard-only",a121:"<strong>Touch interfaces</strong> should allow screen readers and other assistive technology devices to read all parts of your interface. The text read aloud should be both meaningful and helpful.",a122:"This UI has scaled well with magnification and large text.",a123:"This UI has not scaled well with magnification and large text. Portions of content are overlapping or cut off.",a124:"Label visual UI elements",a125:"Screen-reader users need to know which UI elements are tappable on-screen. To enable screen readers to read the names of components out loud, add the <strong>contentDescription</strong> attribute to components such as buttons, icons, and tabs containing icons that have no visible text.",a126:"Labeling UI Elements",a127:"1. Label the Search icon<br />2. Label the Microphone icon",a128:"1. Label the Edit icon<br />2. Label the Chat icon",a129:"Help documentation",a130:'Any features with special accessibility considerations should be included in help documentation. Make help documentation relevant, accessible, and discoverable. As an example, review this guide on how to use a screen reader with <a href="https://support.google.com/drive/answer/6034939?hl=en" target="_blank">Google Drive</a>.',a131:"Testing and research",a132:"Following these accessibility guidelines will help improve the accessibility of your app, but does not guarantee a fully accessible experience. It is recommended that you also:",a133:"Test your app for full task completion, beginning to end, with various assistive technologies turned on. For example, turn on Explore by Touch in TalkBack and change the speed at which text is spoken out loud.",a134:"Have users with impairments test your app",a135:"Consider how individual elements should be accessible while also fitting together in a coherent user flow",a136:"Make sure the major tasks you want your users to complete are possible for everyone",a137:"Talk to your users, particularly those who use assistive technology, to learn about their needs, what they want out of your app, which tools they use, and how they use them. Become familiar with these tools so you can give them the best experience.",a138:"People use assistive technology in different ways.",a139:"Clear and helpful <strong>accessibility text</strong> is one of the primary ways to make UIs more accessible. Users with limited or no eyesight benefit from explicit verbal descriptions. Accessibility text refers to text that is used by screen reader accessibility software, such as TalkBack on Android, VoiceOver on iOS, and JAWS on desktop. Screen readers read all text on screen aloud, including both visible and nonvisible alternative text.",a140:"Accessibility text includes both visible text (including labels for UI elements, text on buttons, links, and forms) and nonvisible descriptions that don’t appear onscreen (such as alternative text for buttons without text labels). Sometimes, an onscreen label may be overridden with accessibility text to provide more information for the user.",a141:"Both visible and nonvisible text should be helpfully descriptive and independently meaningful, as some users navigate by using all the headings or links on a page. Test your app with a screen reader to identify areas that are missing or need better accessibility text.",a142:"Be succinct",a143:"Keep content and accessibility text short and to the point. Screen reader users hear every UI element read aloud. The shorter the text, the faster the screen reader users can navigate it.",a144:"https://cdn.w3cbus.com/mdui/design-1/assets/Switch to heyfromjonathan@gmail.com",a145:"Write clear and short accessibility text.",a146:"https://cdn.w3cbus.com/mdui/design-1/assets/Account switcher. Switch to account heyfromjonathan@gmail.com",a147:"Don’t write long accessibility text.",a148:"Avoid including control type or state in text",a149:"Screen readers may automatically announce a control’s type or state through a sound or by speaking the control name before or after the accessibility text.",a150:"Search",a151:"Use short descriptions.",a152:"Search field",a153:"Don’t write the control type.",a154:'<strong>Developer note:</strong> If the control type or state is not being read correctly, the control’s accessibility role may be improperly set or be a custom control. Every element should have an associated accessibility role on a website or be coded to be announced properly. This means a button should be set as a button, and a checkbox as a checkbox, so that the control’s type or state is communicated correctly to the user. If you extend or inherit from a native UI element, you will get the correct role. If not, you can override this information for accessibility on each platform (<a href="https://www.w3.org/WAI/intro/aria" target="_blank">ARIA</a> for web, <a href="http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html" target="_blank">AccessibilityNodeInfo for Android</a>).',a155:'On Android, set the class name field of the control’s AccessibilityNodeInfo to "android.widget.Button".',a156:"Building Accessible Custom Views",a157:"Download over Wi-Fi only",a158:"Use short descriptions.",a159:"Download over Wi-Fi is selected",a160:"Don’t write out the state.",a161:"Indicate what an element does",a162:"Use action verbs to indicate what an element or link does, not what an element looks like, so a visually impaired person can understand. Link text should:",a163:"Specify the task that tapping the link will perform",a164:"Avoid vague descriptions, such as “click here”",a165:"Ensure an element has the same description everywhere it’s used.",a166:"The description read aloud indicates the action represented by the icon.",a167:"Describing what the icon looks like doesn’t make it clear what the action does.",a168:"Accessible text for a navigation menu could be “Show/hide navigation menu” (preferred) or “Show/Hide main menu” (acceptable).",a169:"When read aloud, the text “side drawer” doesn’t indicate what action will occur.",a170:"Elements with state changes",a171:"For icons that toggle between values or states, announce the icon according to how it is presented to the user.",a172:"If the icon is a <strong>property</strong> of an item, make it a checkbox so that screen readers verbalize the current state, such as “on” or “off”",a173:"If the icon is an <strong>action</strong>, write the text label to specify the action that occurs if the icon is selected, such as “Add to wishlist”",a174:"How elements should be used affects how they are displayed. For example, if a star icon represents the action of adding something to a wishlist, the app should verbalize “Add to wishlist” or “Remove from wishlist.”",a175:"Don’t mention the exact gesture or interaction",a176:"Don’t tell users how to physically interact with a control, as they may be navigating with a keyboard or other device, not with their fingers or a mouse. Accessibility software will describe the correct interaction for the user.",a177:"The command “voice search” describes the user task (search) paired with the input method (voice).",a178:"The command “Tap” is inaccurate as it is not the only way to activate this control (it could be selected via a keyboard press, switch device, or braille display). As the main user task in this example is to search, that action should be mentioned instead of “speak”.",a179:"Confirm actions",a180:"Use dialogs, toasts, or snackbars (Android) to confirm or acknowledge user actions that are destructive (like “Delete” or “Remove”) or difficult to undo.",a181:"For actions that are confirmed through visual means, such as a grid rearranging itself when an item is deleted, a toast is not necessary. In these cases, add accessibility text to provide acknowledgement.",a182:"Provide hint speech",a183:"Hint speech provides extra information for actions that aren't clear. For example, Android's “double-tap to select” feature prompts the user to tap twice when landing on an item without taking action. Android TalkBack will also announce any custom actions associated with an element. Use hint speech sparingly and only for complex UI.",a184:"Android Custom Actions",a185:"Material Design: Clear layouts with visible, distinct elements",a186:"Material Design: Accommodate diverse users with easy navigation",a187:"Material Design: Support assistive technologies like TalkBack",a188:"Material Design text with good color contrast and legibility",a189:"Low color contrast violates Material Design guidelines",a190:"Material Design icons with recommended color contrast",a191:"Material Design icons lack color contrast for visibility",a192:"Distinctive decorative logos in Material Design",a193:"Material Design: Keep logo distortion-free for contrast",a194:"Material Design text field error cues: title color, stroke, message",a195:"Text field error in Material Design is only shown by color",a196:"Material Design Android Logo",a197:"Material Design Logo",a198:"Material Design touch targets should be at least 48 x 48 dp",a199:"Material Design touch target examples",a200:"Material Design touch target height",a201:"Touch targets and buttons in Material Design",a202:"Slider value near the control in Material Design",a203:"Slider value too far from control in Material Design",a204:"Material Design Android Logo",a205:"Material Design: Prioritize actions at the top of the screen",a206:"Material Design: Clarifying important actions in content",a207:"Green circles show focus order in Material Design",a208:"Standard platform dialog in Material Design",a209:"Non-standard dialog for standard task in Material Design",a210:"Material Design UI scales well with magnification and large text",a211:"Material Design UI has scaling issues with large text",a212:"Material Design Android Logo",a213:"Search and Microphone icons in Material Design accessibility",a214:"Edit and Chat icons in Material Design accessibility",a215:"Assistive technology in Material Design for diverse users",a216:"Material Design Android Logo",a217:"Material Design action icon description",a218:"Material Design icon, action unclear from appearance",a219:"Show/hide navigation menu in Material Design",a220:"Side drawer action unclear in Material Design",a221:"Voice search task with voice input in Material Design",a222:"Material Design search control activation methods",a223:"Material Design Android Logo"};export{a as en};