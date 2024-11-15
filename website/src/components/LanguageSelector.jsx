import React from 'react';

export const LanguageContext = React.createContext('en');

export function useLanguage() {
  const language = React.useContext(LanguageContext);

  return language;
}

export function LanguageSelector({ children }) {
  const [language, setLanguage] = React.useState('en');

  return (
    <LanguageContext.Provider value={language}>
      {children}
      &nbsp;
      <br /> Choose your language:&nbsp;
      <select
        style={{
          minHeight: 30,
        }}
        onChange={e => {
          setLanguage(e.target.value);
        }}
      >
        {LIST.map(language => (
          <option value={language.code} key={language.code}>
            {language.icon}&nbsp;{language.name}
          </option>
        ))}
      </select>
    </LanguageContext.Provider>
  );
}

const LIST = [
  {
    code: 'en',
    icon: '🇬🇧',
    name: 'United Kingdom',
  },
  {
    code: 'ru',
    icon: '🇷🇺',
    name: 'Russian Federation',
  },
  {
    code: 'us',
    icon: '🇺🇸',
    name: 'United States',
  },
  {
    code: 'zh',
    icon: '🇨🇳',
    name: 'China',
  },
  {
    code: 'hi',
    icon: '🇮🇳',
    name: 'India',
  },
  {
    code: 'de',
    icon: '🇩🇪',
    name: 'Germany',
  },
  {
    code: 'fr',
    icon: '🇫🇷',
    name: 'France',
  },
  {
    code: 'cs',
    icon: '🇨🇿',
    name: 'Czech Republic',
  },
  {
    code: 'it',
    icon: '🇮🇹',
    name: 'Italy',
  },
  {
    code: 'el',
    icon: '🇬🇷',
    name: 'Greece',
  },
  {
    code: 'ja',
    icon: '🇯🇵',
    name: 'Japan',
  },
  {
    code: 'fi',
    icon: '🇫🇮',
    name: 'Finland',
  },
];
