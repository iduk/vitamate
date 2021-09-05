<template>
  <div id="wrapper">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const layout_name = 'default'

export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta.layout || 'layout-' + layout_name
    },
  },
}
</script>
