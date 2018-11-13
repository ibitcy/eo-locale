# Eo-locale

Internationalize React apps.

# TODO

1. Подумать над тем, как вынести isEditable
2. Поисследовать размер бандла и библиотеки полифила
3. Поисследовать, что клиентский полифил работает верно
4. Поисследовать автоподстановку локалей
5. Расширить документацию

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

export class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <EOLocale.Provider language="en" locales={locales}>
        <main>
          <EOLocale.Text id="hello" name="UserName" />
        </main>
      </EOLocale.Provider>
    );
  }
}
```

# Inline usage format message

```
import { EOLocale } from 'eo-locale';

const locales = {
	en: {
		a: 'Hello {name}!',
	},
	ru: {
		a: 'Привет {name}!',
	}
}

const formatMessageEn = EOLocale.createMessageFormatter('en', EOLocale.convertObjectToMap(locales.en));
const formatMessageRu = EOLocale.createMessageFormatter('ru', EOLocale.convertObjectToMap(locales.ru));

formatMessageEn('a', {
  name: 'World',
}) // Hello World!
formatMessageRu('a', {
  name: 'Мир'
}) // Привет Мир!
```