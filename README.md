# eo-locale

[![build status](https://badgen.net/travis/ibitcy/eo-locale?icon=travis)](https://travis-ci.org/ibitcy/eo-locale)
[![npm downloads](https://badgen.net/npm/dt/eo-locale?icon=npm&color=green)](https://www.npmjs.com/package/eo-locale)
[![bundle size](https://badgen.net/bundlephobia/minzip/eo-locale@latest?icon=awesome)](https://bundlephobia.com/result?p=eo-locale@latest)

* 💪Runs in all browsers and Node.js
* 📦Tiny(1.7kB). Calculated by [size-limit](https://github.com/ai/size-limit) and [bundlephopia](https://bundlephobia.com/result?p=eo-locale@latest).
* 📚Supports ICU format
* 🎓Based on Internationalization API and React Hooks
* 👫Familiar react-intl API & patterns
* ⚙️Both TS and Flow types included
* 🎄Optimized for [tree shaking](https://webpack.js.org/guides/tree-shaking/)

# Motivation

Internationalization is the process of adapting an application to work with different languages and regions. That can bring some benefits. Your target group can be broader than the one with the default language of the app. So by internationalizing an app, you may reach a bigger audience.

> Internationalization it's not only about translation text. Users expect localized Dates, Number separators, Currencies.

# Compare with most popular libraries

| react-intl | react-i18next | eo-locale |
| ---------- | ------------- | --------- |
| 13.5kB | 5.3kB | **1.7kB** |

eo-locale inspired by react-intl. react-intl is really cool library with convenient api, but weight is too much. You can check actual information about weights on [bundlephobia](https://bundlephobia.com/).

# How to install

`npm i eo-locale --save` or `yarn add eo-locale`

# Preact version

`npm i @eo-locale/preact --save` or `yarn add @eo-locale/preact`

# Examples

### Format number

```jsx
import { EOLocale } from 'eo-locale';

<EOLocale.Number value={1000} />
// 1,000

<EOLocale.Number
  value={1000}
  currency="EUR"
  maximumFractionDigits={2}
  minimumFractionDigits={2}
  style="currency"
/>
// €1,000.00
```

### Format messages

Add provider in root of your application

```jsx
import { EOLocale } from 'eo-locale';

const locales = [
  {
    language: 'en',
    messages: {
      hello: 'Hello {name}!'
    }
  },
];

<EOLocale.Provider language="en" locales={locales}>
  <span>
    <EOLocale.Text id="hello" name="World" /> // Helo World!
  </span>
</EOLocale.Provider>
```

### Format html

Just set `html` prop to `true`

```jsx
import { EOLocale } from 'eo-locale';

const locales = [
  {
    language: 'en',
    messages: {
      hello: 'Hello<br/>World!'
    }
  },
];

<EOLocale.Text html id="hello" />
// Hello
// World!
```

### Format date

```jsx
import { EOLocale } from 'eo-locale';

<EOLocale.Date value={new Date(2019, 2, 19)} />
// 3/19/2019

<EOLocale.Date
  value={new Date(2019, 2, 19)}
  day="numeric"
  month="long"
  year="numeric"
  weekday="long"
 />
 // Tuesday, March 19, 2019
```

### Use without react

Install core package for projects without React.
`npm i @eo-locale/core --save` or `yarn add @eo-locale/core`.
You can import `Translator` from `eo-locale` or `@eo-locale/core`.

```js
import { Translator } from '@eo-locale/core';

const locales = [
  {
    language: 'en',
    messages: {
      today: 'Today is {weekday}!'
    }
  },
];

const translator = new Translator('en', locales);
// translator.formatDate
// translator.formatNumber
// translator.translate
```

### Use components as props

```jsx
import { EOLocale } from 'eo-locale';

const locales = [
  {
    language: 'en',
    messages: {
      today: 'Today is {weekday}!'
    }
  },
];

<EOLocale.Text
  id="today"
  weekday={<EOLocale.Date value={new Date(2019, 2, 19)} weekday="long" />}
/>
// Today is Tuesday!
```

### Hook useTranslator

```jsx
import { useTranslator } from 'eo-locale';

function SomeComponent() {
  const translator = useTranslator();

  return <div>{translator.formatNumber(1000)}</div>;
}
```

### Plural

Based on Intl.PluralRules. Works fine for any language.

```jsx
import { EOLocale } from 'eo-locale';

const locales = [
  {
    language: 'en',
    messages: {
      items: '{count, plural, one {You have one item} other {You have {count} items}}'
    }
  },
];

<EOLocale.Text id="items" count={3} />
// You have 3 items
```

### Client polyfill

`npm i @eo-locale/polyfills --save` or `yarn add @eo-locale/polyfills`

```js
import { clientPolyfill } from '@eo-locale/polyfills';

clientPolyfill().then(() => {
  // Init your application
});
```

### Server polyfill

```js
import { serverPolyfill } from '@eo-locale/polyfills';

serverPolyfill(['en']);
```
