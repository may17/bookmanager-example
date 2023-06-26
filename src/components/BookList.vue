<template>
  <section class="row filter-search">
    <form action="#" class="column">
      <label for="search">Search by Title</label>
      <input type="text" id="search" v-model="currentFilter" />
    </form>
  </section>
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
              <RouterLink class="button" :to="{ name: 'book-detail', params: { id: book.id } }"
                >Detail</RouterLink
              >
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

type BooksModel = Book[] | []

interface BookListData {
  books: BooksModel
  currentFilter: string
}

export default defineComponent({
  data(): BookListData {
    return { books: [], currentFilter: '' }
  },
  computed: {
    filteredBooks(): BooksModel {
      return this.books.filter((book) => {
        const normalizedTitle = book.title.toLowerCase()
        const normalizedFilter = this.currentFilter.toLowerCase()

        return normalizedTitle.includes(normalizedFilter)
      })
    }
  },
  created() {
    fetch('http://localhost:4730/books')
      .then((response) => response.json())
      .then((bookData: BooksModel): void => {
        this.books = bookData
      })
  }
})
</script>
