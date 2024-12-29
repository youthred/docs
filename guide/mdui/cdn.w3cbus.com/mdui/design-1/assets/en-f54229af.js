const e={a1:"UIs for languages that are read from right-to-left (RTL), such as Arabic and Hebrew, should be mirrored to ensure content is easy to understand.",a2:"UI mirroring overview",a3:"RTL mirroring guidelines",a4:"Localization",a5:"The main difference between left-to-right (LTR) and right-to-left (RTL) language scripts is the direction in which content is displayed:",a6:"LTR languages display content from left to right",a7:"RTL languages display content from right to left",a8:"RTL content also affects the direction in which some icons and images are displayed, particularly those depicting a sequence of events.",a9:"In general, the passage of time is depicted as left to right for LTR languages, and right to left for RTL languages.",a10:"Element",a11:"Text",a12:"Sentences are read from left to right.",a13:"Sentences are read from right to left.",a14:"Timeline",a15:"An illustrated sequence of events progresses left to right.",a16:"An illustrated sequence of events progresses right to left.",a17:"Imagery",a18:"An arrow pointing left to right indicates forward motion: →",a19:"An arrow pointing right to left indicates forward motion: ←",a20:"The passage of time is depicted from left to right for LTR languages, and from right to left for RTL languages.",a21:"When a UI is changed from LTR to RTL (or vice-versa), it’s often called <strong>mirroring</strong>. An RTL layout is the mirror image of an LTR layout, and it affects layout, text, and graphics.",a22:"When a UI changes from one direction to another, these items are not mirrored:",a23:"Numbers",a24:"Untranslated text (even if it’s part of a phrase)",a25:"Text should always be in the correct direction for the language it’s in. For example, any LTR words, such as a URL, will continue to be shown in an LTR format, even if the rest of the UI is in RTL.",a26:"Text and numbers should always be in the correct direction for the language.",a27:"LTR text shouldn’t be displayed in reverse order.",a28:"When a UI is mirrored, these changes occur:",a29:"<strong>Text fields icons</strong> are displayed on the opposite side of a field",a30:"<strong>Navigation buttons</strong> are displayed in reverse order",a31:"<strong>Icons</strong> that communicate direction, like arrows, are mirrored",a32:"<strong>Text</strong> (if it is translated to an RTL language) is aligned to the right",a33:"These items are not mirrored:",a34:"Icons that do not communicate direction, such as a camera",a35:"Numbers, such as the clock and phone numbers",a36:"Charts and graphs",a37:"An English UI in LTR",a38:"An Arabic UI in RTL, with numbers presented in LTR",a39:"Text editing menu in LTR",a40:"Text editing menu in RTL",a41:"1. Icons related to bidirectionality are mirrored to reflect the start and end of a line of text",a42:"LTR screen",a43:"On an LTR screen, the tab for “Item One” is aligned to the left, and users swipe to the left to see more tabs.",a44:"Touch target height: 48dp<br />Screen edge margin before first tab: 72dp<br />Tab labels bottom padding: 20dp<br />Tab labels right and left padding: 12dp",a45:"RTL screen",a46:"On an RTL screen, the tab for “Item One” is aligned to the right, and users swipe to the right to see more tabs.",a47:"Touch target height: 48dp<br />Screen edge margin before first tab: 72dp<br />Tab labels bottom padding: 20dp<br />Tab labels right and left padding: 12dp",a48:"LTR screen",a49:"<strong>RTL screen</strong><br />Title, icons, and UI elements are displayed flowing from right to left",a50:"1. Back button points to the right<br />2. Text is right-aligned<br />3. Primary and secondary buttons are mirrored to match reading direction<br />4. Checkbox appears to the right of text<br />5. Icons that do not communicate direction are not changed<br />6. Placement of units may vary across languages<br />7. Progress bars fill in the same direction as content is read",a51:"Navigation, overflow menu, and icons displayed left-to-right",a52:"Icon padding from screen edge: 16dp<br />Title distance from screen edge: 72dp<br />Padding below title: 20dp<br />Navigation bar height: 56dp<br />Overflow menu padding: 16dp",a53:"Navigation, overflow menu, and icons switch sides in the RTL layout",a54:"Icon padding from screen edge: 16dp<br />Title distance from screen edge: 72dp<br />Padding below title: 20dp<br />Navigation bar height: 56dp<br />Overflow menu padding: 16dp",a55:"Padding and margin around icons and text for LTR",a56:"List item height: 72dp<br />Icon margin from left screen edge: 16dp<br />List item distance from left screen edge: 72dp",a57:"When mirroring the layout, padding and margin around icons and text also switch placement to match RTL layouts.",a58:"List item height: 72dp<br />Icon margin from right screen edge: 16dp<br />List item distance from right screen edge: 72dp",a59:"When text, layout, and iconography are mirrored to support right-to-left (RTL) UIs, most things that relate to time should be depicted as moving from right to left. For example, in a RTL layout, forward points to the left, and backwards points to the right.",a60:"For detailed developer guidance on RTL text, check out:",a61:"Supporting Different Languages and Cultures",a62:"Implement RTL using BidiFormatter",a63:"For detailed developer guidance on RTL icons, check out:",a64:"RTL Material Design icons guide",a65:"See how to mirror icons",a66:"RTL Sketch plug-in",a67:"Flip existing designs and assets into an RTL format",a68:"When to mirror",a69:"The most important icons for mirroring are back and forward buttons. Back and forward navigation buttons are reversed.",a70:"LTR back button",a71:"RTL back button",a72:"LTR forward button",a73:"RTL forward button",a74:"An icon that shows forward movement should be mirrored.",a75:"In a LTR UI, a bicycle facing the right typically communicates a sense of moving forward.",a76:"In a RTL UI, a bicycle pointing to the left similarly communicates a sense of moving forward.",a77:"A volume icon with a slider at its right side should be mirrored. The slider should progress RTL, and the sound waves should emerge from the right.",a78:"LTR volume with slider",a79:"RTL volume with speaker icon and slider mirrored",a80:"Sometimes, both the horizontal and circular direction of time are implied in an icon. For example, the redo and undo buttons in Google Docs have both a horizontal direction and a circular direction.",a81:"In LTR, these point to the same direction in both circular and horizontal representations of time. In RTL, choose whether to show circular or horizontal direction.",a82:"LTR redo and undo button from the toolbar in Google Docs",a83:"Icons that contain representations of text need careful mirroring.",a84:"Text is right-aligned in RTL. If there is a paragraph indent at the beginning of a paragraph, an unfinished line at the end of the paragraph, or a ragged right side, the icons need to be mirrored.",a85:"LTR chat icon",a86:"RTL chat icon",a87:"When not to mirror",a88:"While the linear representation of time is mirrored in RTL, the <strong>circular</strong> direction of time is not. Clocks still turn clockwise for RTL languages. A clock icon or a circular refresh or progress indicator with an arrow pointing clockwise should not be mirrored.",a89:"The refresh icon shows time moving forward; the direction is clockwise. The icon is not mirrored.",a90:"The history icon points backwards in time; the direction is counterclockwise. The icon is not mirrored.",a91:"Some icons refer to physical objects that are not mirrored in the right-to-left world.",a92:"For example, physical keyboards and media players look the same everywhere in the world, so they should not be mirrored.",a93:"Keyboard icon",a94:"Headset icon",a95:"Certain icons might seem directional but they actually represent holding an object with one’s right hand.",a96:"For example, the search icon typically has its handle at the bottom right side, because the majority of users are right-handed.",a97:"The majority of users in RTL-writing countries are also right-handed, so such icons should not be mirrored.",a98:"Search icon",a99:"Local cafe icon",a100:"Most RTL countries do not mirror slashes. Leave images with slashes as-is for RTL locales.",a101:"The LTR slash can indicate an off state for both LTR and RTL languages.",a102:"An RTL off state doesn’t need an RTL slash.",a103:"The passage of time",a104:"In most cases, an action that happens over time should be mirrored.",a105:"To show movement from right to left, an icon of a person walking forward should be facing left.",a106:'Display the "next page" on the left and the "previous page" on the right.',a107:"A progress bar shows 0% on the right, and 100% on the left, and gets filled in from right to left.",a108:"Days in a calendar appear from right to left.",a109:"Do not mirror media playback buttons and the media progress indicator as they refer to the direction of the media being played, not the direction of time.",a110:"Since media playback buttons and the progress indicator reflect the direction of the media, they are not mirrored.",a111:"Media controls for playback are always LTR.",a112:"Do not mirror media playback or progress bars. The direction of these elements represents the direction of the tape, not the direction of time.",a113:"Text in graphics",a114:"Graphics that include text usually require localization.",a115:"Numbers",a116:"Numbers, including icons containing numbers, must be localized for languages that use different numerals. For example, Bengali, Marathi, Nepali, and some Arabic-speaking locales use different forms of numbers.",a117:"An icon in LTR containing a number",a118:"A RTL icon in Arabic",a119:"Mirroring",a120:"Sometimes content may need to be mirrored, even if the UI is not mirrored. For example, when a user edits an RTL paragraph inside a LTR document, the toolbar buttons for the RTL text should be in RTL.",a121:"In this RTL paragraph inside a LTR document, the buttons for indenting and lists should be RTL even though the primary UI direction is LTR.",a122:"1. Paragraph aligned right<br />2. Icons flipped<br />3. Hebrew text direction is RTL",a123:"Material Design: Text and numbers in correct direction",a124:"Material Design: LTR text should not be reversed",a125:"Material Design English UI in LTR",a126:"Arabic UI in RTL, numbers in LTR, Material Design",a127:"Text editing menu in Material Design (LTR)",a128:"RTL text editing menu - Material Design",a129:"LTR screen in Material Design",a130:"RTL screen in Material Design",a131:"LTR screen in Material Design",a132:"RTL screen in Material Design",a133:"LTR screen in Material Design",a134:"RTL screen in Material Design",a135:"LTR screen in Material Design",a136:"RTL screen in Material Design",a137:"Material Design Icon",a138:"Material Design LTR back button",a139:"RTL back button in Material Design",a140:"Material Design LTR forward button",a141:"RTL forward button in Material Design",a142:"Material Design: Bicycle facing right symbolizes progress",a143:"RTL UI with a bicycle pointing left in Material Design",a144:"LTR volume slider in Material Design",a145:"Material Design: Mirrored RTL volume slider with speaker icon",a146:"Material Design LTR redo and undo buttons in Google Docs",a147:"Material Design LTR chat icon",a148:"Material Design RTL chat icon",a149:"Refresh icon in Material Design, clockwise movement",a150:"Counterclockwise history icon in Material Design",a151:"Material Design keyboard icon",a152:"Material Design headset icon",a153:"Material Design search icon",a154:"Material Design local cafe icon",a155:"LTR slash indicating off state in Material Design",a156:"Material Design: RTL off state needs no RTL slash",a157:"Media controls in Material Design are not mirrored",a158:"Material Design media controls for playback are LTR",a159:"Material Design: Do not mirror media playback elements",a160:"Material Design icon with a number in LTR",a161:"RTL icon in Arabic - Material Design",a162:"Material Design: RTL buttons in LTR UI context"};export{e as en};