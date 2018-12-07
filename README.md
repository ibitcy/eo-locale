# Eo-locale [![npm version](https://img.shields.io/npm/v/eo-locale.svg?style=flat)](https://www.npmjs.com/package/eo-locale)

* Internationalize React apps
* Runs in the browser and Node.js
* Based on new React Context, Typescript and https://www.npmjs.com/package/intl

# Usage example

App.tsx

```
import * as React from 'react';
import { EOLocale } from 'eo-locale';

const locales = [
  {
    language: 'en',
    messages: {
      hello: 'Hello {name}!'
    }
  },
  {
    language: 'ru',
    messages: {
      hello: 'Привет {name}!'
    }
  }
];

const user = {
  name: 'Alex',
};

export class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <EOLocale.Provider language="en" locales={locales}>
        <main>
          <EOLocale.Text id="hello" name={user.name} />
          <EOLocale.Text id="hello" name={<UserName user={user} />} />
          <EOLocale.Date value={new Date()} />
          <EOLocale.Number
            currency="EUR"
            maximumFractionDigits={2}
            minimumFractionDigits={0}
            style="currency"
            value={1000}
          />
        </main>
      </EOLocale.Provider>
    );
  }
}
```
