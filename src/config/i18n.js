import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { DateTime } from 'luxon';

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        debug:true,
        interpolation: {
            escapeValue:false,
            format: (value, format, lng) => {
                if (value instanceof Date) {
                  return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
                }
                return value;
              }
        }

    })

export default i18n
