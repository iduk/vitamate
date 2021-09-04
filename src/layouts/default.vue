<template>
  <div>
    <Header />
    <h1>디폴트 레이아웃</h1>
    <slot />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'default',
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped></style>
