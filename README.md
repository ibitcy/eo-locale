<div align="center">
  <a href="https://eo-locale.netlify.app/">
    <img src="assets/hello.png" width="400" />
  </a>
</div>

<div align="center">
  <a href="https://eo-locale.netlify.app/">
    <h1>eo-locale</h1>
  </a>
</div>

[![build status](https://badgen.net/travis/ibitcy/eo-locale?icon=travis)](https://travis-ci.org/ibitcy/eo-locale)
[![types included](https://badgen.net/npm/types/@eo-locale/core?icon=typescript)](https://www.npmjs.com/package/@eo-locale/core)

* 💪Runs in all browsers and Node.js
* ☎Can be used not only in React.Component but also in Vanilla JS
* 📦Really tiny size. Calculated by [size-limit](https://github.com/ai/size-limit) and [bundlephopia](https://bundlephobia.com/result?p=eo-locale@latest).
* 📚Message format is strictly implemented by [ICU standards](http://userguide.icu-project.org/formatparse/messages)
* 🎓Support for 150+ languages
* 🎉Support HTML in message. Support React Elements as variables
* 🎢Locale data in [nested JSON format](https://github.com/ibitcy/eo-locale/releases/tag/7.4.0) are supported 
* 👫Simple. Only four components and one hook
* ⚙️TtypeScript and Flow types out of the box. Library has written on TypeScript
* 🎄Optimized for [tree shaking](https://webpack.js.org/guides/tree-shaking/)

# [Official website](https://eo-locale.netlify.app/)

# Motivation

Internationalization is the process of adapting an application to work with different languages and regions. That can bring some benefits. Your target group can be broader than the one with the default language of the app. So by internationalizing an app, you may reach a bigger audience.

> Internationalization it's not only about translation text. Users expect localized Dates, Number separators, Currencies.

# Compare with most popular libraries

Today each dependency drags more dependencies and increases your project’s bundle size uncontrollably. But size is very important for everything that intends to work in a browser.

**eo-locale** is a simple library for those who care about their bundle size and client-side performance. It is fast and lightweight because:

- built with hooks and functional components only (no classes and polyfills for them);
- ships only a minimal amount of manually optimized algorithms;

To show you the problem that **eo-locale** is trying to solve, we have performed a simple benchmark (using [bundlephobia.com](https://bundlephobia.com)) against popular React localization libraries:

| Name | Bundle size | Bundle size (gzip)|
| ---- | ----------- | ----------------- |
| **eo-locale** | [![](https://badgen.net/bundlephobia/min/@eo-locale/react@latest?color=6ead0a&label=)](https://bundlephobia.com/result?p=@eo-locale/react@latest) | [![](https://badgen.net/bundlephobia/minzip/@eo-locale/react@latest?color=6ead0a&label=)](https://bundlephobia.com/result?p=@eo-locale/react@latest) |
| react-intl | [![](https://badgen.net/bundlephobia/min/react-intl?color=red&label=)](https://bundlephobia.com/result?p=react-intl) | [![](https://badgen.net/bundlephobia/minzip/react-intl?color=red&label=)](https://bundlephobia.com/result?p=react-intl) |
| react-i18next | [![](https://badgen.net/bundlephobia/min/react-i18next?color=red&label=)](https://bundlephobia.com/result?p=react-i18next) | [![](https://badgen.net/bundlephobia/minzip/react-i18next?color=red&label=)](https://bundlephobia.com/result?p=react-i18next) |
| react-intl-universal | [![](https://badgen.net/bundlephobia/min/react-intl-universal?color=red&label=)](https://bundlephobia.com/result?p=react-intl-universal) | [![](https://badgen.net/bundlephobia/minzip/react-intl-universal?color=red&label=)](https://bundlephobia.com/result?p=react-intl-universal) |
| @lingui/react | [![](https://badgen.net/bundlephobia/min/@lingui/react?color=red&label=)](https://bundlephobia.com/result?p=@lingui/react) | [![](https://badgen.net/bundlephobia/minzip/@lingui/react?color=red&label=)](https://bundlephobia.com/result?p=@lingui/react) |


# Projects using eo-locale

- [gambit.gg](https://gambit.gg/) — Gambit Esports website by [lessmess](https://lessmess.agency/)
