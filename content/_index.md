+++
title = "Monochrome"
description = "A minimal, configurable Zola theme for personal sites and blogs."
+++

Monochrome keeps the structure of a blog visible and predictable. It uses a black, gray, and white palette, square edges, a fixed vertical sidebar, and a centered reading area that remains comfortable on wide and narrow screens.

## Features

- No JavaScript by default. Navigation, dropdowns, responsive sidebars, and disclosures use native HTML and CSS.
- Automatic light and dark themes through `prefers-color-scheme`.
- Configurable vertical navigation with nested, collapsible groups.
- Multilingual pages, localized interface text, and per-language Atom and RSS feeds.
- Modular Sass and reusable Zola Components instead of inline styles or legacy template helpers.
- Code highlighting, optional code-copy enhancement, tags, footnotes, alerts, tables, media, and other common content elements.
- Responsive behavior for desktop, tablet, and overlay-style mobile navigation.

See the [component demo](@/demo/index.md) for the content elements included with the theme.

## Installation

Add Monochrome to the `themes` directory of an existing Zola site:

```shell
git submodule add https://github.com/Tobiichi-Origuchi/monochrome.git themes/monochrome
git submodule update --init
```

Enable it near the top of your site's `zola.toml`:

```toml
theme = "monochrome"
```

Use this repository's commented `zola.toml` as the configuration reference. Copy the language, taxonomy, Markdown, and `[extra]` settings you need, then replace the example title, navigation, footer links, and `base_url` with your own values.
