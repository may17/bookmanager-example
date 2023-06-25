<template>
  <LayoutHeader />
  <main class="container">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutHeader from "@/components/LayoutHeader.vue"

export default defineComponent({
  components: {
    LayoutHeader
  }
})
</script>
