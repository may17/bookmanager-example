# Task 02: Basis Layout aufbauen

In diesem Task wirst du das Basis Layout Aufbauen. Im Ordner `resources`stehen dir einzelne Bauteile zu Verfügung die du einbauen sollst um das Basis Layout einzurichten.

## Sub Task: CSS einbinden

- [ ] Binde die drei CSS Dateien aus dem `resources` Ordner global in deine Vue App
  - Beachte dabei folgende Reihenfolge
    - `normalize.css` zuerst
    - dann `milligram.css`
    - dann die `main.css`
  - INFO: Milligram ist das CSS Framework welches wir verwenden im Workshop.

## Sub Task: Header Komponente erstellen

- [ ] Erstelle in deinem Projekt Verzeichnis `src/components` eine neue Komponente `LayoutHeader.vue`
  - [ ] Füge den Inhalt aus der Datei [resources/LayoutHeaderTemplate.html](resources/LayoutHeaderTemplate.html) in den Template Block deiner `LayoutHeader.vue` Komponente.
- [ ] Falls noch vorhanden entferne den `nav` Block mit den beiden RouterLinks. 
- [ ] Registriere die Komponente in der `App.vue` und sorge dafür das sie vor der `RouterView` Component angezeigt wird.

## Sub Task: Main Content Area

- [ ] Umgib die `RouterVue` Komponente mit einem Main html tag und einer Klasse Container
  - ```html
    <main class="container">
      <RouterView />
    </main>
    ```
- [ ] Öffne in deinem Projekt die Datei `src/views/HomeView.vue` und füge in den template Block den Html Code aus der Datei [resources/HomeViewTepmlate.html](resources/HomeViewTepmlate.html)

## Task complete

Schreibe in den Zoom Chat `task-02 done` wenn du alle Tasks abgeschlossen hast und due folgende Ansicht im Browser siehst:

![](img/homeview.vue.png)
