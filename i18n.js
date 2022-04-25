import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./translations/en.json";
import pl from "./translations/pl.json";

i18n.translations = {
  en: en,
  pl: pl,
};

i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;
