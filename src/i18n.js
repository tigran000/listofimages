import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'Admin':'Admin',
        'Home':'Home',
        'search Name':'search Name',
        'change Name':'change Name',
        'change Rating':'change Rating',
        'submit':'submit',
        'Name is':'Name is',
        'Rating is':'Rating is'
      }
    },
    ru: {
      translations: {
        'Admin': 'Администратор',
        'Home': 'Главная страница',
        'search Name': 'поиск Имени',
        'change Name': 'cменить Имя',
        'change Rating': 'изменить Pейтинг',
        'submit': 'утверждать',
        'Name is': 'Имя',
        'Rating is': 'Рейтинг'
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;