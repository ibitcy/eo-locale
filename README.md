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
      <EOLocale.Provider language="en" locales={locales}>
        <main>
          <EOLocale.Text id="hello" />
        </main>
      </EOLocale.Provider>
    );
  }
}
```

# Inline usage format message

```
import { convertObjectToMap } from 'eo-utils';
import { EOLocale } from 'eo-locale';

const locales = {
	en: {
		a: 'Hello {name}!',
	},
	ru: {
		a: 'Привет {name}!',
	}
}

const formatMessageEn = EOLocale.createMessageFormatter('en', convertObjectToMap(locales.en));
const formatMessageRu = EOLocale.createMessageFormatter('ru', convertObjectToMap(locales.ru));

formatMessageEn('a', {
  name: 'World',
}) // Hello World!
formatMessageRu('a', {
  name: 'Мир'
}) // Привет Мир!
```