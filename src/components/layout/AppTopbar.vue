<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <span>GWG</span>
    </router-link>
    <button class="p-link layout-menu-button layout-topbar-button border-none bg-transparent"
            id="menuButton"
            @click="menuToggle">
      <i class="pi pi-bars pointer-events-none"></i>
    </button>
    <button
        id="topbarMenuButton"
        class="p-link layout-topbar-menu-button layout-topbar-button border-none bg-transparent"
        @click="topBarMenuButton">
      <i class="pi pi-ellipsis-v pointer-events-none"></i>
    </button>

    <div class="layout-topbar-menu" :class="topbarMenuClasses" v-click-outside="clickOutside">
      <button class="p-link layout-topbar-button border-none bg-transparent">
        <i v-badge.danger class="pi pi-bell p-overlay-badge"/>
        <span class="icon-desc"> {{ $translate.getText('notifications') }} </span>
      </button>
      <button class="p-link layout-topbar-button border-none bg-transparent">
        <i v-badge.success class="pi pi-user"></i>
        <span class="icon-desc">{{ $translate.getText('profile') }}</span>
      </button>
      <button class="p-link layout-topbar-button border-none bg-transparent">
        <i class="pi pi-sign-out"></i>
        <span class="icon-desc">{{ $translate.getText('logout') }}</span>
      </button>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "AppTopbar",
  data() {
    return {
      topbarMenuActive: false
    };
  },
  computed: {
    ...mapGetters({
      contentClassList: 'app/getContentClassList',
      currentLocale: 'app/getCurrentLocale',
    }),
    topbarMenuClasses() {
      return {
        'layout-topbar-menu-mobile-active': this.topbarMenuActive
      };
    }
  },
  methods: {
    ...mapMutations({
      setContentClassList: 'app/setContentClassList',
    }),
    menuToggle() {
      const data = {
        ...this.contentClassList,
      }
      if (this.contentClassList.menuMode === 'overlay') {
        data.overlayMenuActive = !data.overlayMenuActive;
      }

      if (window.innerWidth > 991) {
        data.layoutStaticInactive = !data.layoutStaticInactive;
      } else {
        data.layoutMobileActive = !data.layoutMobileActive;
      }
      this.setContentClassList(data);
    },
    topBarMenuButton() {
      this.topbarMenuActive = !this.topbarMenuActive;
    },
    clickOutside(event) {
      if (this.topbarMenuActive && event.target.id !== 'topbarMenuButton') {
        this.topbarMenuActive = false;
      }
    },
  },
};
</script>