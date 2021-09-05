<template>
  <div>
    <Header class="flex-shrink-0" />
    <main class="container flex flex-initial">
      <aside id="sidebar" class="flex-shrink-0 w-52 p-4 py-16 my-0 text-center">
        <nav v-if="$route.path.includes('/mypage')">
          <h3 class="text-xl font-bold">{{ pageTitle }}</h3>
          <ul class="mt-6">
            <li class="py-3" :key="nav.id" v-for="nav in s_mypage">
              <router-link class="hover:text-primary" :to="nav.path">{{ nav.title }}</router-link>
            </li>
          </ul>
        </nav>
        <nav v-else>
          <h3 class="text-xl font-bold">페이지 없음</h3>
          <ul class="mt-6">
            <li class="py-3">
              <router-link>하위 항목도 없음</router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <div class="w-full px-16 py-16">
        <slot />
      </div>
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
  data() {
    return {
      pageTitle: '페이지 타이틀',
      s_mypage: [
        { path: '', title: '회원정보' },
        { path: '', title: '섭취다이어리' },
        { path: '', title: '구독관리' },
        { path: '', title: '결제관리' },
        { path: '', title: '포인트샵' },
        { path: '', title: '배송조회' },
        { path: '', title: '할인/쿠폰' },
        { path: '', title: 'Q&A' },
        { path: '', title: '이용약관' },
      ],
      s_news: [
        { path: '', title: '비타뉴스' },
        { path: '', title: '비타백서' },
      ],
      s_support: [
        { path: '', title: 'FAQ' },
        { path: '', title: '1:1문의' },
      ],
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
#sidebar {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: calc(100vh - 110px);
    @apply bg-gray-200;
  }
}
</style>
