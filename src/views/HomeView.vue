<template>
  <h1>Booklist</h1>
  <section class="row">
    <div class="column">
      <BookList />
      <p>Derzeit liegen keine Bücher vor</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BookList from '@/components/BookList.vue'

export default defineComponent({
  components: {
    BookList
  },
  data() {
    return {}
  }
})
</script>
