<template>
  <LayoutHeader />
  <main class="container">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { useBooksStore } from '@/store/useBooksStore'

export default defineComponent({
  setup() {
    const store = useBooksStore()
    ;(async () => {
      store.getBooks()
    })()
  },
  components: {
    LayoutHeader
  }
})
</script>
