# Task 06: Button Komponente wiederverwendbar machen

In diesem Task wirst du eine Button Komponente erstellen um die Buttons in der Listing und Detail Ansicht zu vereinheitlich. Getreu dem Motto DRY (Don't repeat yourself).

## Todos

- Erstelle eine neue Komponente `src/components/BaseButtonLink.vue`
- Nutze die bestehenden Buttons aus der `src/components/BookList.vue` und `src/views/BookDetailView.vue` als Basis für den template block
- Mach den button mit Hilfe von props konfigurierbar.
  - prop `text`
    - Wird verwendet um dem Button einen, für den Nutzer, lesbaren Namen zu geben.
    - Ist Pflicht
  - prop `variant`
    - Sorge dafür das der button einen [dieser Stile](https://milligram.io/#buttons) bekommt
    - Erlaubt ist nur der Value `default`, `outline` oder `clear`
    - Das Prop ist Optional und sollte als default Wert "default" als variant verwenden
  - prop `to`
    - Wird verwendet um das `to` prop des RouterLinks zu steuern
    - Ist Pflicht
    - Erwartet eine Route Object wie `{ name: 'home' }`
    - Das Interface kannst du dir über `import type { RouteLocationNamedRaw } from 'vue-router'` laden
- Registriere die Komponente Global und nutze sie in der `src/components/BookList.vue` und der `src/views/BookDetailView.vue` anstelle der bereits vorhandenen RouterLinks
- Tipp: Du brauchst keine Custom Events für die Umsetzung

## Task complete

Schreibe in den Zoom Chat `task-06 done` wenn du alle Tasks abgeschlossen hast.
