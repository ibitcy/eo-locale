# eo-locale [![npm version](https://img.shields.io/npm/v/eo-locale.svg?style=flat)](https://www.npmjs.com/package/eo-locale) [![Build Status](https://travis-ci.org/ibitcy/eo-locale.svg?branch=master)](https://travis-ci.org/ibitcy/eo-locale)

* Runs in the browser and Node.js
* Tiny(2kb)
* Based on Intl object and React Hooks
* Supports ICU format

# Examples

English language by default

### Format date

```jsx
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

### Format number

```jsx
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

### Format hmtl

```jsx
const locales = [
  {
    language: 'en',
    messages: {
      hello: 'Hello<br/>World!'
    }
  },
];

<EOLocale.Html id="hello" />
// Hello
// World!
```

### Use components as props

```jsx
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

### Plural

```jsx
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
