<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="flex w-auto px-4 static justify-start">
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="#"
        >
          vitamate
        </a>
      </div>
      <div class="flex flex-grow items-center">
        <ul class="flex flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2"
                >Share</span
              >
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
