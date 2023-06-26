<template>
  <div v-if="book">
    <h1>
      {{ book.title }}<br />
      <small>{{ book.subtitle }}</small>
    </h1>
    <section class="row">
      <div class="column column-67">
        <h3>Abstract</h3>
        <p>
          {{ book.abstract }}
        </p>

        <h4>Details</h4>
        <ul>
          <li><strong>Author:</strong> {{ book.author }}</li>
          <li><strong>Publisher:</strong> {{ book.publisher }}</li>
          <li><strong>Pages:</strong> {{ book.numPages }}</li>
        </ul>

        <RouterLink class="button button-outline" :to="{ name: 'home' }">Back</RouterLink>
      </div>
      <div class="column column-33">
        <img :src="book.cover" alt="" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Book } from '@/types'

interface BookDetailViewData {
  book: Book | null
}

export default defineComponent({
  data(): BookDetailViewData {
    return {
      book: null
    }
  },
  async created() {
    const response = await fetch('http://localhost:4730/books/' + this.$route.params.id)
    this.book = await response.json()
  }
})
</script>
