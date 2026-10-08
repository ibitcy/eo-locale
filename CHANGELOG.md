# Changelog

## 1.8.0

All packages: `@eo-locale/core`, `@eo-locale/react`, `@eo-locale/preact`, `@eo-locale/react-native`.

### Features

- Plural options support ICU exact matches (`=0`, `=1`, …). They take priority over plural categories. ([#140](https://github.com/ibitcy/eo-locale/pull/140))
- Plural options support `offset:N`. ([#69](https://github.com/ibitcy/eo-locale/issues/69))
- `#` inside a plural option is replaced with the formatted plural value, also inside a select nested in a plural.
- React 19 is allowed in the peer dependencies of `@eo-locale/react` and `@eo-locale/react-native`.

### Bug fixes

- Nested and multi-line plural/select messages no longer fail with `Unexpected character "}"`. ([#126](https://github.com/ibitcy/eo-locale/issues/126))
- `useTranslator(language)` with a language other than the provider's now uses the provider's `locales` and `onError`. Before, it returned message ids instead of translations.
- `defaultMessage` is applied on every call for a missing message id. Before, the first fallback was cached for the id. `onError` is still called once per id.
- `TranslationsProvider` keeps the same translator and context value between renders, so consumers no longer re-render on every provider render.

### Behavior changes

- `#` inside plural options was printed literally and is now replaced with the number. Messages that need a literal `#` inside a plural option must move it outside the plural.
- `tagName` of the React `Text` component is typed as `string` instead of `keyof React.ReactHTML`, which was removed in `@types/react` 19. Runtime behavior is unchanged.

### Other

- CI moved from Travis to GitHub Actions (Node 20, 22, 24).
- Development dependencies updated (rollup, nanoid, cross-spawn, and website dependencies).
