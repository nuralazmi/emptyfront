import en from '@/locales/en.json';
import tr from '@/locales/tr.json';

const translations = {
    en,
    tr,
};

export default {
    getText(key) {
        const locale = localStorage.getItem('gwg_locale') || 'tr'
        return translations[locale][key] || key;
    },
};
