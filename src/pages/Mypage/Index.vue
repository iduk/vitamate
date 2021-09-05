<template>
  <div>
    {{ $route.params.id }}
    <h4>마이페이지</h4>
    <h5>{{ mypage[$route.params.id].title }}</h5>
    <p>{{ mypage[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    mypage: Array,
  },
}
</script>
