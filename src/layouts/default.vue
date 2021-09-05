<template>
  <div>
    <Header />
    <main class="container">
      <h1>표준 레이아웃</h1>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'layout-default',
  components: {
    Header,
  },
}
</script>
