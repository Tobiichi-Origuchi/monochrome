+++
title = "Component Demo"
description = "A reference page for the theme's common content elements."
+++

This page exercises native Markdown elements, semantic HTML, and reusable Zola components.

## Typography

Regular text can contain **bold**, _italic_, ~~strikethrough~~, _**bold italic**_, **~~bold strikethrough~~**, _~~italic strikethrough~~_, and _**~~all four styles together~~**_. It can also include `inline code`, H<sub>2</sub>O, x<sup>2</sup>, <abbr title="HyperText Markup Language">HTML</abbr>, <del>deleted text</del>, <ins>inserted text</ins>, <small>small print</small>, an inline <q>quotation</q>, and an emoji alias :sparkles:.

Use {{<content.mark text="highlighted text" />}}, {{<content.badge label="Badge" />}}, an inline annotation {{<content.annotation label="Contextual note" />}}, and keyboard input {{<content.kbd keys="Ctrl + K" />}}.

## Links and buttons

This is an [internal link](@/about.md), an [external link](https://www.getzola.org/), an email link <hello@example.com>, and a direct download link to the [audio sample](demo-tone.wav).

{{<content.button label="Primary action" href="#tables" />}}
{{<content.button label="Secondary action" href="#media" variant="secondary" />}}

## Headings

### Third-level heading

#### Fourth-level heading

##### Fifth-level heading

###### Sixth-level heading

## Lists

- First unordered item
- Second unordered item
  - Nested item
  - Another nested item
- Final unordered item

1. First ordered item
2. Second ordered item
   1. Nested ordered item
   2. Another nested item
3. Final ordered item

- {{<content.task label="Completed task" checked={true} />}}
- {{<content.task label="Open task" />}}

Term one
: A definition for the first term.

Term two
: A definition can contain **formatted text**.

## Quote

> Good structure makes a small interface easier to extend.
>
> — Theme demonstration

## Alerts

> [!NOTE]
> A note contains useful context that readers should consider.

> [!TIP]
> A tip offers a practical improvement.

> [!IMPORTANT]
> Important information affects successful use.

> [!WARNING]
> A warning calls attention to a possible problem.

> [!CAUTION]
> A caution describes a potentially harmful consequence.

{% <content.notice kind="note" title="Component notice"> %}
This notice is rendered by a reusable Zola component.
{% </content.notice> %}

## Code

Inline code looks like `cargo build`.

```toml
title = "Monochrome"
compile_sass = true
```

{% <content.code_block language="rust"> %}
fn main() {
    println!("Hello from Zola");
}
{% </content.code_block> %}

{% <content.code_block language="shell"> %}
zola build
zola check
{% </content.code_block> %}

## Tables

| Element    | Purpose            | Native |
| ---------- | ------------------ | ------ |
| Markdown   | Structured writing | Yes    |
| Component  | Reusable interface | Yes    |
| JavaScript | Optional code copy | Off by default |

## Disclosure

{% <content.disclosure summary="Show additional details"> %}
This region uses the native `details` and `summary` elements. It works without JavaScript.
{% </content.disclosure> %}

## Media

![A monochrome geometric demonstration image](demo-image.svg "Demo image")

{{<content.figure src="demo-image.svg" alt="A monochrome geometric demonstration image" caption="A reusable figure component with a caption." width={960} height={540} />}}

{{<content.audio src="demo-tone.wav" title="Audio sample" mime="audio/wav" />}}

{{<content.video src="demo-video.mp4" title="Video sample" poster="demo-image.svg" />}}

## Embedded and form controls

<fieldset>
  <legend>Example controls</legend>
  <label for="demo-text">Text input</label>
  <input id="demo-text" name="demo-text" type="text" placeholder="Editable example">
  <label><input type="checkbox" checked> Checkbox</label>
  <label><input type="radio" name="demo-choice" checked> First choice</label>
  <label><input type="radio" name="demo-choice"> Second choice</label>
  <label for="demo-select">Select</label>
  <select id="demo-select" name="demo-select"><option>First option</option><option>Second option</option></select>
  <label for="demo-message">Textarea</label>
  <textarea id="demo-message" name="demo-message" rows="3">A short message.</textarea>
  <button type="button">Native button</button>
</fieldset>

{{<content.progress label="Reading progress" value={72} />}}

<p class="meter-example"><label for="storage-meter">Storage</label> <meter id="storage-meter" min="0" max="100" value="64">64%</meter></p>

The current time can be represented as <time datetime="2026-08-12">August 12, 2026</time>, while a variable value can use <var>n</var>, sample output can use <samp>Build complete</samp>, and a citation can use <cite>The Zola Documentation</cite>.

---

## Footnotes

This sentence contains a footnote.[^first] A second reference can point to a longer note.[^second]

[^first]: Footnotes are collected at the end of the article and include a return link.

[^second]: Notes can include formatting such as **bold text**, links, and `inline code`.
