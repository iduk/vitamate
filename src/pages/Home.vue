<template>
  <section class="bg-hero bg-cover bg-no-repeat fixed top-0 left-0 w-full z-0 bg-success-100">
    <div class="container flex flex-wrap justify-end items-center h-full">
      <div class="bg-gray-50 w-7/1 rounded-xl shadow">
        <div class="py-14 px-16">
          <h6 class="text-3xl tracking-tight text-gray-900">
            <span class="text-xl mb-2 block">내 몸의 영양 발란스!</span>
          </h6>
          <h2 class="hero-title font-bold text-5xl block">
            유전자가 읽어주고,<br />
            AI가 말해주는<br />
            My Vital Balance.
          </h2>
          <p class="text-lg mt-8">
            건강 설문 작성하고,<br />
            내 몸에 맞는 영양소를 확인해 보세요!
          </p>
          <div class="mt-8 flex flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  text-indigo-600
                  bg-primary
                  text-white
                "
              >
                회원 가입하기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-hero {
  height: 80vh;
  &::after {
    content: '';
    @apply w-full h-full absolute top-0 left-0;
  }
}
.hero-title {
  line-height: 1.3;
  b {
    font-weight: 900;
  }
}
</style>
