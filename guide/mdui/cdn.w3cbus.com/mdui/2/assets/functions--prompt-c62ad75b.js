const e={docsHtml:`<p>The <code>prompt</code> function is a wrapper for the <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog"><code>&lt;mdui-dialog&gt;</code></a> component and serves as a replacement for the native <code>window.prompt</code> function.</p>
<p>By using this function, you can open a text input dialog without needing to write any HTML code for the component.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { prompt } from &#39;mdui/functions/prompt.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-button class=&quot;example-button&quot;&gt;open&lt;/mdui-button&gt;

&lt;script type=&quot;module&quot;&gt;
  import { prompt } from &quot;mdui/functions/prompt.js&quot;;

  const button = document.querySelector(&quot;.example-button&quot;);

  button.addEventListener(&quot;click&quot;, () =&gt; {
    prompt({
      headline: &quot;Prompt Title&quot;,
      description: &quot;Prompt description&quot;,
      confirmText: &quot;OK&quot;,
      cancelText: &quot;Cancel&quot;,
      onConfirm: (value) =&gt; console.log(&quot;confirmed: &quot; + value),
      onCancel: () =&gt; console.log(&quot;canceled&quot;),
    });
  });
&lt;/script&gt;
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">prompt(options: <a href="#api-options">Options</a>): Promise&lt;string&gt;</code></pre>

<p>The function accepts an <a href="#api-options">Options</a> object as a parameter and returns a Promise. If the dialog is closed by clicking the confirm button, the Promise resolves with the value entered in the text field. If the dialog is closed in any other way, the Promise is rejected.</p>
<h3 id="api-options">
                  <a href="#api-options">Options</a>
                </h3>
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr id="options-headline">
      <td><a href="#options-headline"><code>headline</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The title of the dialog.</td>
    </tr>
    <tr id="options-description">
      <td><a href="#options-description"><code>description</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The description of the dialog.</td>
    </tr>
    <tr id="options-icon">
      <td><a href="#options-icon"><code>icon</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The Material Icons name displayed at the top of the dialog.</td>
    </tr>
    <tr id="options-closeOnEsc">
      <td><a href="#options-closeOnEsc"><code>closeOnEsc</code></a></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether the dialog can be closed by pressing the Esc key. If set to <code>true</code>, the dialog closes when the Esc key is pressed.</td>
    </tr>
    <tr id="options-closeOnOverlayClick">
      <td><a href="#options-closeOnOverlayClick"><code>closeOnOverlayClick</code></a></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether the dialog can be closed by clicking on the overlay.</td>
    </tr>
    <tr id="options-confirmText">
      <td><a href="#options-confirmText"><code>confirmText</code></a></td>
      <td><code>string</code></td>
      <td><code>OK</code></td>
    </tr>
    <tr>
      <td colspan="3">The text for the confirm button.</td>
    </tr>
    <tr id="options-cancelText">
      <td><a href="#options-cancelText"><code>cancelText</code></a></td>
      <td><code>string</code></td>
      <td><code>Cancel</code></td>
    </tr>
    <tr>
      <td colspan="3">The text for the cancel button.</td>
    </tr>
    <tr id="options-stackedActions">
      <td><a href="#options-stackedActions"><code>stackedActions</code></a></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether to stack the bottom action buttons vertically.</td>
    </tr>
    <tr id="options-queue">
      <td><a href="#options-queue"><code>queue</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>The queue name.</p>
        <p>By default, the queue is disabled. If this function is invoked multiple times, multiple dialogs will appear simultaneously.</p>
        <p>If a queue name is provided, dialogs with the same queue name will open sequentially, each one after the previous one closes.</p>
        <p>The <a href="https://cdn.w3cbus.com/en/docs/2/functions/dialog"><code>dialog()</code></a>, <code>alert()</code>, <a href="https://cdn.w3cbus.com/en/docs/2/functions/confirm"><code>confirm()</code></a>, and <a href="https://cdn.w3cbus.com/en/docs/2/functions/prompt"><code>prompt()</code></a> functions share the same queue if their queue names match.</p>
      </td>
    </tr>
    <tr id="options-onConfirm">
      <td><a href="#options-onConfirm"><code>onConfirm</code></a></td>
      <td><code>(value: string, dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void | boolean | Promise&lt;void&gt;</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the confirm button is clicked.</p>
        <p>The function receives the value of the text field and the dialog instance as parameters, and <code>this</code> refers to the dialog instance.</p>
        <p>By default, clicking the confirm button closes the dialog. If the return value is <code>false</code>, the dialog remains open. If the return value is a promise, the dialog closes after the promise resolves.</p>
      </td>
    </tr>
    <tr id="options-onCancel">
      <td><a href="#options-onCancel"><code>onCancel</code></a></td>
      <td><code>(value: string, dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void | boolean | Promise&lt;void&gt;</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the cancel button is clicked.</p>
        <p>The function receives the value of the text field and the dialog instance as parameters, and <code>this</code> refers to the dialog instance.</p>
        <p>By default, clicking the cancel button closes the dialog. If the return value is <code>false</code>, the dialog remains open. If the return value is a promise, the dialog closes after the promise resolves.</p>
      </td>
    </tr>
    <tr id="options-onOpen">
      <td><a href="#options-onOpen"><code>onOpen</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog starts to open.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onOpened">
      <td><a href="#options-onOpened"><code>onOpened</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog's opening animation completes.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onClose">
      <td><a href="#options-onClose"><code>onClose</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog starts to close.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onClosed">
      <td><a href="#options-onClosed"><code>onClosed</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog's closing animation completes.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onOverlayClick">
      <td><a href="#options-onOverlayClick"><code>onOverlayClick</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the overlay is clicked.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-validator">
      <td><a href="#options-validator"><code>validator</code></a></td>
      <td><code>(value: string) => boolean | string | Promise&lt;void&gt;</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A validation function for the text field, takes the text field's value as a parameter. <code>this</code> refers to the TextField instance.</p>
        <p>Validation is executed after the browser's native validation API is successfully passed.</p>
        <p>If it returns a <code>boolean</code> value, <code>false</code> indicates a validation failure, and <code>true</code> indicates a validation success.</p>
        <p>If it returns a string, a non-empty string indicates a validation failure, with the returned string serving as the error message.</p>
        <p>If it returns a Promise, a resolution indicates validation success, while a rejection indicates validation failure. The reason for rejection is used as the error message.</p>
      </td>
    </tr>
    <tr id="options-textFieldOptions">
      <td><a href="#options-textFieldOptions"><code>textFieldOptions</code></a></td>
      <td><code>Partial&lt;<a href="https://cdn.w3cbus.com/en/docs/2/components/text-field#attributes">TextField</a>&gt;</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The internal text field is a <a href="https://cdn.w3cbus.com/en/docs/2/components/text-field"><code>&lt;mdui-text-field&gt;</code></a> component. You can configure the <a href="https://cdn.w3cbus.com/en/docs/2/components/text-field"><code>&lt;mdui-text-field&gt;</code></a> component using this parameter.</td>
    </tr>
  </tbody>
</table>
`,elements:[]};export{e as default};
