const state = {
    sidebarActiveMenu: 'dashboard',
    currentLocale: localStorage.getItem('gwg_locale') || 'tr',
    contentClassList: localStorage.getItem('gwg_content_classes') ? JSON.parse(localStorage.getItem('gwg_content_classes')) : {
        menuMode: 'static',
        layoutThemeLight: false,
        layoutThemeDark: false,
        layoutOverlay: false,
        layoutStatic: true,
        layoutStaticInactive: false,
        layoutOverlayActive: false,
        layoutMobileActive: false,
        pInputFilled: false,
        pRippleDisabled: true
    },
}
const getters = {
    getSidebarActiveMenu: (state) => {
        return state.sidebarActiveMenu;
    },
    getCurrentLocale: (state) => {
        return state.currentLocale;
    },
    getContentClassList: (state) => {
        return state.contentClassList;
    },
}
const mutations = {
    setActiveMenu(state, menuName) {
        state.sidebarActiveMenu = menuName;
    },
    setLocale(state, locale) {
        localStorage.setItem('gwg_locale', locale);
        state.currentLocale = locale;
    },
    setContentClassList(state, payload) {
        localStorage.setItem('gwg_content_classes', JSON.stringify(payload));
        state.contentClassList = payload;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}
