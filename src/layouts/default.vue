<template>
  <div>
    <Header />
    <main class="container">
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
