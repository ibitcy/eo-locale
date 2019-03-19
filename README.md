# eo-locale [![npm version](https://img.shields.io/npm/v/eo-locale.svg?style=flat)](https://www.npmjs.com/package/eo-locale) [![Build Status](https://travis-ci.org/ibitcy/eo-locale.svg?branch=master)](https://travis-ci.org/ibitcy/eo-locale)

* Internationalize React apps
* Runs in the browser and Node.js
* Tiny(2kb)
* Based on Intl object

# Examples

English language by default

## Format date

```
<EOLocale.Date value={new Date(2019, 2, 19)} /> // 3/19/2019
<EOLocale.Date value={new Date(2019, 2, 19)} year="numeric" weekday="long" month="long" day="numeric" /> // Tuesday, March 19, 2019
```

## Format number

```
<EOLocale.Number value={1000} /> // 1,000
<EOLocale.Number currency="EUR" maximumFractionDigits={2} minimumFractionDigits={2} style="currency" value={1000} /> // €1,000.00
```

## Format messages

```
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

## Use components as props

```
const locales = [
  {
    language: 'en',
    messages: {
      today: 'Today is {weekday}!'
    }
  },
];

<EOLocale.Text id="today" weekday={<EOLocale.Date value={new Date()} weekday="long" />} />
```