<template>
  <div>
    <Header />
    <main class="container mx-auto py-16">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'layout-fluid',
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped></style>
