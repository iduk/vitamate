<template>
  <div>
    <Header />
    <p>전체화면</p>
    <slot />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'fluid',
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped></style>
