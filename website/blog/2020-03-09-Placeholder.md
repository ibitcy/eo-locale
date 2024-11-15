---
id: placeholder
title: How to translate input placeholder
author: Maksim Sharipov
author_title: Maintainer of eo-locale
author_url: https://github.com/pret-a-porter
author_image_url: https://avatars0.githubusercontent.com/u/8514156?s=400&v=4
tags: [useTranslator]
---

Translate input placeholder is quite common task.
Let's consider how we can do it with eo-locale.

```jsx
import { TranslationsProvider, useTranslator } from '@eo-locale/react';

const LOCALES = [
  {
    language: 'en',
    messages: {
      hello: 'Hello World!',
    },
  },
];

function App() {
  return (
    <TranslationsProvider language='en' locales={LOCALES}>
      <SomeComponent />
    </TranslationsProvider>
  );
}

function SomeComponent() {
  const translator = useTranslator();

  return <input placeholder={translator.translate('hello')} />;
}
```
