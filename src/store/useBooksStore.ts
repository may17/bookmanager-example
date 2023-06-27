import { defineStore } from 'pinia'

import type { Book } from '@/types'

type BooksModel = Book[] | []

export interface useBooksStoreState {
  books: BooksModel
}

export const useBooksStore = defineStore('books', {
  state: (): useBooksStoreState => ({ books: [] }),
  actions: {
    getBooks() {
      fetch('http://localhost:4730/books')
        .then((response) => response.json())
        .then((bookData: BooksModel): void => {
          this.books = bookData
        })
    }
  }
})
