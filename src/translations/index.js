import en from "./en";
import ar from "./ar";

var y = "";
export const setLang = (x) => {
  y = x;
  return x;
};

export function getY() {
  return y;
}
const translations = {
  en,
  ar,
};

const getTranslatedText = (key, locale = y) => {
  const currTranslation = translations[locale] ? translations[locale] : en;
  const newLocal = en[key]
    ? en[key]
    : key;
  return currTranslation[key]
    ? currTranslation[key]
    : newLocal;
};

export default getTranslatedText;
