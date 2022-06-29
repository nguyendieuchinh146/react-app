import i18n from "i18next";
//import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import lang_en from "./languages/en.json";
import lang_jp from "./languages/jp.json";
i18n
    //.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: lang_en
            },
            jp: {
                translations: lang_jp
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
