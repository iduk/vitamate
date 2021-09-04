<template>
  <div>
    <Header />
    <p>사이드바</p>
    <slot />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'sidebar',
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped></style>
