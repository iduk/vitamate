<template>
  <div class="form-control w-full">
    <label for="login-input-id"> 아이디 </label>
    <input
      class="focus:outline-none focus:bg-white focus:border-gray-500"
      id="login-input-id"
      type="text"
      placeholder="핸드폰 번호를 입력해 주세요"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.form-control {
  margin-bottom: 0.25rem;
  label {
    @apply block uppercase tracking-wide text-gray-800 text-sm font-bold mb-2;
  }
  input {
    @apply appearance-none block w-full text-gray-800 border border-gray-300 rounded py-4 px-4 leading-tight;
  }
}
</style>
