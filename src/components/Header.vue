<template>
  <header
    id="header"
    class="relative z-10 flex flex-wrap items-center justify-between border-b border-opacity-10 border-black"
  >
    <div class="container mx-auto">
      <ul class="topnav flex flex-wrap items-center justify-end h-full">
        <li><router-link class="block p-2 text-sm" to="/login" active-class="active">로그인</router-link></li>
        <li><span class="block text-sm">・</span></li>
        <li><router-link class="block p-2 text-sm" to="/signup" active-class="active">회원가입</router-link></li>
        <li><span class="block text-sm">・</span></li>
        <li><router-link class="block p-2 text-sm" to="/cart" active-class="active">장바구니</router-link></li>
      </ul>

      <nav class="navbar flex flex-wrap items-center justify-between">
        <div class="flex w-auto static justify-start items-center">
          <router-link class="leading-relaxed inline-block pb-2" to="/">
            <img src="@/assets/images/logo.svg" alt="비타메이트 로고" />
          </router-link>
        </div>
        <div class="flex flex-grow items-center">
          <ul class="flex flex-row list-none ml-auto">
            <li :key="nav.id" v-for="nav in navItems" class="nav-item">
              <router-link :to="nav.path" active-class="active" class="font-bold px-4 py-5 flex items-center">
                {{ nav.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      navItems: [
        {
          path: '/dtc',
          title: '유전자검사',
        },
        {
          path: '/survey',
          title: '건강설문',
        },
        {
          path: '/products',
          title: '제품보기',
        },
        {
          path: '/mypage',
          title: 'MY비타',
        },
        {
          path: '/news',
          title: '비타소식',
        },
        {
          path: '/support',
          title: '고객센터',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$header-size: 110px;
$topnav-size: 44px;

#header {
  height: $header-size;
}
.topnav {
  height: $topnav-size;
  li > a {
    @apply hover:text-primary;
    &.active {
      @apply text-primary;
    }
  }
}
.nav-item a {
  position: relative;
  font-size: 17px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 1%;
    transition: 0.2s ease-in-out;
  }
  &.active {
    &::before {
      content: '';
      width: 100%;
      @apply bg-primary;
    }
  }
}
</style>
