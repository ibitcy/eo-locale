# Eo-locale

Internationalize React apps. Based on new React Context. Includes types.

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
        </main>
      </EOLocale.Provider>
    );
  }
}
```
