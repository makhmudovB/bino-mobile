import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { localization } from "./localization";

i18n.use(initReactI18next).init({
  resources: localization,
  lng: "cyr",
  async: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
