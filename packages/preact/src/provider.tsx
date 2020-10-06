import { Locale, Translator } from '@eo-locale/core';
import { FunctionalComponent, h } from 'preact';
import { EOLocaleContext } from './context';

export interface IEOLocaleProviderProps {
  language: string;
  locales: Locale[];
}

export const EOLocaleProvider: FunctionalComponent<IEOLocaleProviderProps> = ({
  children,
  language,
  locales,
}) => {
  return (
    <EOLocaleContext.Provider
      value={{
        language,
        locales,
        translator: new Translator(language, locales),
      }}
    >
      {children}
    </EOLocaleContext.Provider>
  );
};
