# Task 08: Requests reduzieren mit Pinia

In diesem Task wirst mit Hilfe von pinia requests an die api reduzieren.

## Todos

- Erstelle im Ordner `src/store` einen neuen store mit dem Namen `useBooksStore.ts`
- Füge diesem store ein state `books` hinzu
- Füge dem store eine action `getBooks` hinzu und lade die Buchdaten von der Bookmonkey Api
  - siehe `BookList.vue`. Dort hast du das bereits gelöst, nur der Ort des fetch requests ändert sich.
- Importiere `useBooksStore` in die `App.vue` und lade in der setup methode den store.
  - Um den store initial zu befüllen führe die getBooks action aus.
- Entferne in der `BookList.vue` im created hook den bisherigen fetch und ebenso das dazugehörige data property.
- Importiere `useBooksStore` in die `BookList.vue` und lade in der setup methode den store.
- Passe das computed property an.
- Öffne die `src/views/BookDetailView.vue` und entferne dort das fetch und den created hook.
  - Importiere `useBooksStore` in die `BookDetailView.vue` und lade in der setup methode den store.
  - Erstelle ein computed property `book` und suche dir aus dem Store das jeweilige Buch mit Hilfe von `this.$route.params.id`
    - Die [Array Methode find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) wird dir helfen 

## Task complete

Schreibe in den Zoom Chat `task-08 done` wenn du alle Tasks abgeschlossen hast. Alles sollte wie zuvor funktionieren.
