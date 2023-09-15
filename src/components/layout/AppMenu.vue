<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <AppMenuItem v-if="!item.separator" :item="item" :index="i" :key="item"></AppMenuItem>
    </template>

  </ul>
</template>

<script>
import AppMenuItem from "@/components/layout/AppMenuItem.vue";

export default {
  name: 'AppMenu',
  components: {
    AppMenuItem
  },
  computed: {
  },
  data() {
    return {
      model: [
        {
          label: 'home',
          items: [
            {label: 'dashboard', icon: 'pi pi-fw pi-home', to: 'dashboard'},
          ]
        },
      ]
    }
  }
}
</script>