# Eo-locale

Internationalize React apps.

# Usage example

App.tsx

```
import * as React from 'react';
import { EOLocale } from 'eo-locale';

const locales = [
  {
    language: 'en',
    messages: {
      hello: 'Hello world!'
    }
  },
  {
    language: 'ru',
    messages: {
      hello: 'Привет мир!'
    }
  }
];

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