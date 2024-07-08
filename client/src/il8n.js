
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    lng: "en", 
    fallbackLng: "en",
    returnObjects: true,
    debug:true,
    resources: {
      en: {
        translation: {
         moon: "Welcome to React and react-i18next",
         lo:{
            lo1:"fdsaf",
            lo2:"fdsaf"
         }

        }
      },
      ar: {
        translation: {
          moon: "مرحبًا بك في React وreact-i18next",
          lo:{
            lo1:"fdsagfcvfbff",
            lo2:"fdscfbcffaf"
         }
        }
      }
    },
   

    interpolation: {
      escapeValue: false 
    }
  });

