<template>
  <li class="layout-root-menuitem">
    <div v-if="item.visible !== false" class="layout-menuitem-root-text">{{
        $translate.getText(item.label)
      }}</div>
    <ul class="layout-submenu">
      <li v-for="child in item.items">
        <router-link @click="setActiveMenu(child.to)" :class="{'active-route' : isActiveMenu(child.to)}"
                     :to="{name:child.to}">
          <i :class="child.icon" class="layout-menuitem-icon"></i>
          <span class="layout-menuitem-text">{{
              $translate.getText(child.label)
            }}</span>
        </router-link>
      </li>
    </ul>

  </li>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "AppMenuItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
  },
  methods: {
    ...mapMutations('app', ['setActiveMenu']),
    isActiveMenu(menu) {
      return menu === this.$route.name;
    }
  },
  computed: {
    ...mapGetters('app', ['getSidebarActiveMenu','getCurrentLocale']),
  }
}
</script>

<style scoped>

</style>