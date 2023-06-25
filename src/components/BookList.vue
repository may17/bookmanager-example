<template>
  <section class="row">
    <div class="column">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book of books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.isbn }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.publisher }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Book } from '@/types'

type BooksModel = Book[] | []

interface BookListData {
  books: BooksModel
}

export default defineComponent({
  data(): BookListData {
    return { books: [] }
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
