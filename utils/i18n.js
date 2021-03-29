import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import moment from 'moment';
import en from 'locales/en.json'; // English
import ta from 'locales/ta.json'; // Tamil

I18n.fallbacks = true;

I18n.translations = {
  en,
  ta
};

const currentLocale = I18n.currentLocale();
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

ReactNative.I18nManager.allowRTL(isRTL);
moment.locale(currentLocale);
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

export default I18n;