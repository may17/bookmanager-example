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

        <BaseButtonLink variant="outline" text="Back" :to="{ name: 'home' }" />
      </div>
      <div class="column column-33">
        <img :src="book.cover" alt="" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBooksStore } from '@/store/useBooksStore'

export default defineComponent({
  setup() {
    const store = useBooksStore()

    return {
      store
    }
  },
  computed: {
    book() {
      return this.store.books.find((book) => book.id === this.$route.params.id)
    }
  }
})
</script>
