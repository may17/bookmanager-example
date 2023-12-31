<template>
  <SearchField @search-value-changed="handleSearchValueChange" />
  <section class="row">
    <div class="column">
      <table v-if="filteredBooks.length > 0">
        <thead>
          <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Publisher</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book of filteredBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.isbn }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.publisher }}</td>
            <td>
              <BaseButtonLink
                text="Detail"
                :to="{ name: 'book-detail', params: { id: book.id } }"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>No results for your search</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Book } from '@/types'

import SearchField from '@/components/SearchField.vue'
import { useBooksStore } from '@/store/useBooksStore'

type BooksModel = Book[] | []

interface BookListData {
  books: BooksModel
  currentFilter: string
}

export default defineComponent({
  setup() {
    const store = useBooksStore()

    return {
      store
    }
  },
  components: {
    SearchField
  },
  data(): BookListData {
    return { books: [], currentFilter: '' }
  },
  computed: {
    filteredBooks(): BooksModel {
      return this.store.books.filter((book) => {
        const normalizedTitle = book.title.toLowerCase()
        const normalizedFilter = this.currentFilter.toLowerCase()

        return normalizedTitle.includes(normalizedFilter)
      })
    }
  },
  methods: {
    handleSearchValueChange(currentSearchValue: string) {
      this.currentFilter = currentSearchValue
    }
  }
})
</script>
