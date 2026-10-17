import ar from "@/i18n/locales/ar.json";
import en from "@/i18n/locales/en.json";
import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager, Platform } from "react-native";
const locales = getLocales();

const lang = locales[0].languageCode ?? "en";

if (!lang || lang === "en") {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
} else if (lang === "ar" && Platform.OS === "ios") {
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);
}

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: "en",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
