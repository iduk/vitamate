<template>
  <div>
    <div class="text-center">
      <h1 class="text-3xl">로그인</h1>
    </div>
    <section class="w-5/12 mx-auto mt-16">
      <form action="">
        <div class="form-control w-full">
          <label for="login-input-id"> 아이디 </label>
          <input
            class="focus:outline-none focus:bg-white focus:border-gray-500"
            id="login-input-id"
            type="text"
            placeholder="핸드폰 번호를 입력해 주세요"
          />
        </div>

        <div class="form-control w-full">
          <div class="flex justify-between">
            <label for="login-input-id"> 비밀번호 </label>
            <a href="#" class="text-sm underline text-gray-400">비밀번호를 잊어버리셨나요?</a>
          </div>
          <input id="login-input-id" type="text" placeholder="비밀번호를 입력해 주세요" />
        </div>

        <article class="mt-10">
          <button class="btn w-full border border-primary text-primary hover:bg-primary hover:text-white disabled">
            로그인
          </button>
          <button class="btn w-full border border-primary text-primary hover:bg-primary hover:text-white">
            회원가입
          </button>
        </article>
      </form>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.form-control {
  margin-bottom: 1.5em;

  label {
    @apply block uppercase tracking-wide text-gray-800 text-sm font-bold mb-2;
  }
  input {
    @apply appearance-none block w-full text-gray-800 border border-gray-300 rounded py-4 px-4 leading-tight;
  }
}
</style>
