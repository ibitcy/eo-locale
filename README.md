# React-eo-locale

Internationalize React apps.

# Usage example

App.tsx

```
import * as React from 'react';
import { EOLocale } from 'react-eo-locale';

const locales = {
  en: {
    hello: 'Hello world!',
  },
  ru: {
    hello: 'Привет мир!',
  }
};

export class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <EOLocale.Provider defaultLanguage="en" locales={locales}>
        <main>
          <EOLocale.Text id="hello" />
        </main>
      </EOLocale.Provider>
    );
  }
}
```