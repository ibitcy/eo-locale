# eo-locale

[![Build Status](https://badgen.net/travis/ibitcy/eo-locale?icon=travis)](https://travis-ci.org/ibitcy/eo-locale)
[![npm version](https://badgen.net/npm/v/eo-locale?icon=npm)](https://www.npmjs.com/package/eo-locale)
[![npm downloads](https://badgen.net/npm/dt/eo-locale?icon=libraries&color=green)](https://www.npmjs.com/package/eo-locale)

* Runs in a browser and Node.js
* Tiny(2kb) calculated by [size-limit](https://github.com/ai/size-limit)
* Based on Intl object and React Hooks
* Supports ICU format
* Required `react^16.8.0` and `react-dom^16.8.0`

# How to install

`npm i eo-locale --save` or `yarn add eo-locale`

# Examples

English language by default

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

```js
import { Translator } from 'eo-locale';

const locales = [
  {
    language: 'en',
    messages: {
      today: 'Today is {weekday}!'
    }
  },
];

const translator = new Translator({
  language: 'en',
  locales,
});
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
      items: '{count, plural, one {One item} other {{count} items}}'
    }
  },
];

<EOLocale.Text id="items" count={3} />
// 3 items
```

### Client polyfill

```js
import { clientPolyfill } from 'eo-locale/dist/polyfill';

clientPolyfill().then(() => {
  // Init your application
});
```

### Server polyfill

```js
import { serverPolyfill } from 'eo-locale/dist/polyfill';

serverPolyfill(['en']);
```
