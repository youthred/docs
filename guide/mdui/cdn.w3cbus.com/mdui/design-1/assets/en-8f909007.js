import{f as e}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const s={a1:"Permission requests should be simple, transparent, and understandable.",a2:"Apps should clarify why each permission request is needed, either through the feature name or an explanation provided.",a3:"<strong>Runtime permissions</strong> are requested at the moment a user needs to perform an action in an app.",a4:"<strong>Denied permissions</strong> should provide feedback and options.",a5:"Types of permissions",a6:"Educate before asking<br />Ask up-front<br />Ask in context<br />Educate in context<br />Provide an immediate benefit<br />Only ask for relevant permissions",a7:"Usage",a8:"Runtime permissions",a9:"Request patterns",a10:"Denied permissions",a11:"Permission groups",a12:"Permissions are divided into nine groups, allowing users to grant all permissions encompassed by a single action. For instance, granting permission to Contacts includes the ability to both view and edit Contacts.",a13:"Permission",a14:"Description",a15:"Calendar",a16:"Managing calendars",a17:"Camera",a18:"Taking photos and recording videos",a19:"Contacts",a20:"Managing contacts",a21:"Location",a22:"Current device location",a23:"Microphone",a24:"Audio recording",a25:"Phone",a26:"Dialing and managing phone calls",a27:"Body Sensors",a28:"Heart rate and similar data",a29:"SMS",a30:"Sending and viewing messages",a31:"Storage",a32:"Accessing photos, media, and files",a33:"Implied permission",a34:"A user may perform an action that demonstrates clear intent, such as:",a35:"Taking a picture",a36:"Selecting a contact",a37:"Starting a call or text message",a38:"In these cases, the user’s action clearly demonstrates their intent, and no permission dialog is needed or authorized.",a39:"Intents and Intent Filters",a40:"Using intents to request actions from apps",a41:"Apps may request permission to access information or use device capabilities at any time after installation. When a user needs to perform an action in an app, such as using the device camera, the app may request permission at that moment.",a42:"Users may also allow or deny the permissions of any app from Android Settings anytime after installation.",a43:"Example of an app requesting permission",a44:"App permissions that users believe are relevant to the app’s function are more likely to be granted. The following request patterns will help you decide when and how to request permissions, based on:",a45:"A permission’s importance to the app’s core function",a46:"The clarity of the permission",a47:"Critical permissions should be requested up-front. Secondary permissions may be requested in-context.",a48:"In both cases, permissions that are less clear should provide education about what the permission involves.",a49:"Educate before asking",a50:`If your app has a “<a class="do-router" href="${e("/growth-communications/onboarding.html")}">warm welcome</a>,” use it to explain what your app does and why unexpected permissions will be requested.`,a51:"Ask up-front",a52:"Only ask for critical and obvious permissions on first launch.Because users expect a messaging app to request SMS permissions, requesting it up-front makes sense.",a53:"Ask in context",a54:"For non-critical permissions, wait until a feature is invoked to request permission. Users are more likely to allow a permission when they want to use the feature it enables.",a55:"Educate in context",a56:"Non-critical permissions that are less intuitive may benefit from being explained in context. Doing so improves users’ comprehension of the permission.",a57:"Provide an immediate benefit",a58:"Provide instant gratification to make accepting a permission feel justified.",a59:"Request only the permissions needed for a feature to work",a60:"When more than one permission is needed for a feature to work, ask for those permissions only and nothing extra.",a61:"Provide feedback whenever a permission is denied. Because denying permissions may prevent a feature from working as intended, whenever a permission is denied it should be explained to the user.",a62:"Permission denials occur in one of two ways:",a63:"A permission request is denied by the user",a64:"A permission is silently denied without warning because a user once selected “Don’t ask again” from a previous permission request",a65:"To ensure that features requiring permission always behave as intended, the app should state that permission is needed and provide a way to allow it.",a66:"A snackbar displays the need for permission in order to use an audio feature.",a67:"Critical permissions",a68:"If the app can no longer run because a critical permission has been denied, explain why that permission must be allowed and offer a button to open Settings so the user can allow it.",a69:"A screen explains that a permission is needed for an app to function, with a link to allow that permission in Settings.",a70:"Material Design: Clear and simple permission requests",a71:"Material Design Android Logo",a72:"Material Design app requesting permission example",a73:"Material Design: Request critical permissions upfront",a74:"Material Design: Provide a warm welcome and explain permissions",a75:"Material Design: Ask critical permissions at first launch",a76:"Request permissions contextually in Material Design",a77:"Material Design: Explain non-critical permissions in context",a78:"Material Design: Instant benefit for permission acceptance",a79:"Material Design snackbar for audio permission request",a80:"Material Design: App needs permission to function"};export{s as en};
