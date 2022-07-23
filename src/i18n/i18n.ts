import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';
import ru from './ru.json';

i18next
    .use(initReactI18next)
    .init({
      resources: {
        en: {translation: en},
        ru: {translation: ru},
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false},
      react: {
        bindI18n: 'languageChanged',
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
        useSuspense: true,
        transEmptyNodeValue: '',
        bindI18nStore: '',
      }});

export default i18next;