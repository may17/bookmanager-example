# Task 07: Suchfeld als eigene Komponente

Um die `BookList.vue` übersichtlicher zu machen wirst du das Suchfeld in eine Extra Komponente auslagern. Dadurch wird das Suchfeld zeitgleich wiederverwendbar.

## Todos

- Erstelle eine neue Komponente `src/components/SearchField.vue`
- Schneide, im Template Block der `BookList.vue` das bestehende Form Markup aus und füge es in SearchField.vue ein.
- Verwende `custom events` um Änderungen am Wert des Suchfelds in der `SearchField.vue` einer Parent Component mitzuteilen
  - Du kannst watch und v-model verwenden oder einfach nur eine Method
- Verwende die `SearchField.vue` in der `BookList.vue`
  - Empfange in der `BookList.vue` das custom event und aktualisiere das data property `currentFilter`

## Task complete

Schreibe in den Zoom Chat `task-07 done` wenn du alle Tasks abgeschlossen hast. Alles sollte wie zuvor funktionieren.
