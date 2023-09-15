<template>
  <div class="layout-wrapper" :class="containerClass">
    <AppTopbar/>
    <div class="layout-sidebar" v-click-outside="clickOutside">
      <AppSidebar></AppSidebar>
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="layout-mask"></div>
  </div>
</template>
<script>

import AppTopbar from "@/components/layout/AppTopbar.vue";
import AppSidebar from "@/components/layout/AppSidebar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'AppLayout',
  components: {
    AppTopbar,
    AppSidebar,
    AppFooter,
  },
  methods: {
    ...mapMutations({
      setContentClassList: 'app/setContentClassList',
    }),
    clickOutside(event) {
      if (this.contentClassList.layoutMobileActive && event.target.id !== 'menuButton') {
        this.setContentClassList({
          ...this.contentClassList,
          layoutMobileActive: false,
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      contentClassList: 'app/getContentClassList'
    }),
    containerClass() {
      return {
        'layout-theme-light': this.contentClassList.layoutThemeLight,
        'layout-theme-dark': this.contentClassList.layoutThemeDark,
        'layout-overlay': this.contentClassList.layoutOverlay,
        'layout-static': this.contentClassList.layoutStatic,
        'layout-static-inactive': this.contentClassList.layoutStaticInactive,
        'layout-overlay-active': this.contentClassList.layoutOverlayActive,
        'layout-mobile-active': this.contentClassList.layoutMobileActive,
        'p-input-filled': this.contentClassList.pInputFilled,
        'p-ripple-disabled': this.contentClassList.pRippleDisabled
      };
    }
  },
}
</script>