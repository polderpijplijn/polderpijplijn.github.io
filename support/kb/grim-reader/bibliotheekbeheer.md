---
layout: kb
title_nl: Grim Reader — bibliotheekbeheer
title_en: Grim Reader — library management
title_de: Grim Reader — Bibliotheksverwaltung
title: Grim Reader — bibliotheekbeheer / library management
description: Improve, clean up and maintain your Grim Reader library — missing details, duplicate books, merging authors, publishers and series, language codes, subjects, checking books and backups.
---

<div lang="nl" markdown="1">

Bibliotheekbeheer bundelt de taken waarmee je de gegevens van je bibliotheek
verbetert, opschoont en onderhoudt. Op de iPhone staat het onder **Meer**; op de
iPad onderaan de zijbalk.

Deze taken passen gegevens aan en kunnen bestanden wijzigen of verwijderen. Elke
taak laat eerst zien wat er gaat gebeuren en vraagt om bevestiging.

- [Taken en scans](#taken-nl)
- [Waar een taak wordt uitgevoerd](#waar-nl)
- [Gegevens verbeteren](#verbeteren-nl): ontbrekende gegevens, schrijvers verrijken
- [Opschonen en samenvoegen](#opschonen-nl): dubbele boeken, schrijvers, uitgevers,
  series, lege schrijvers, taalcodes, onderwerpen
- [Onderhoud](#onderhoud-nl): boeken controleren, back-up en herstel

## Taken en scans
{: #taken-nl}

Bovenaan zie je wat er loopt: het doorzoeken van een WebDAV-server (met het aantal
boeken in de index) en een lopende **Boeken controleren**. Een taak blijft hier
zichtbaar als je naar een ander scherm gaat; na afloop blijft het laatste resultaat
staan. Loopt er niets, dan staat er **Geen taken actief**.

## Waar een taak wordt uitgevoerd
{: #waar-nl}

Sommige taken werken op meer dan één plek. Dan vraagt de app eerst **Kies waar de
taak wordt uitgevoerd**:

| Keuze | Wat er verandert |
| --- | --- |
| Op dit apparaat en WebDAV | De catalogus op je toestel. Boekbestanden worden alleen bijgewerkt als je dat in de taak uitdrukkelijk kiest. |
| Grimmory-server | De gegevens op je Grimmory-server. Hiervoor heb je beheerrechten op die server nodig. |
| Alle bibliotheekbronnen | Alle boeken die Grim Reader kent. |

Staat een taak grijs, dan ontbreekt de bron die hij nodig heeft. De app zegt dan wat
je eerst moet doen, bijvoorbeeld een WebDAV-server toevoegen.

| Taak | Op dit apparaat en WebDAV | Grimmory-server |
| --- | --- | --- |
| Ontbrekende gegevens | ja | ja |
| Schrijvers verrijken | ja | ja |
| Dubbele boeken opruimen | ja | ja |
| Schrijvers samenvoegen | ja | ja |
| Uitgevers samenvoegen | ja | – |
| Series samenvoegen | – | ja |
| Auteurs zonder boeken opruimen | – | ja |
| Taalcodes standaardiseren | ja | ja |
| Onderwerpen beheren | ja | – |
| Boeken controleren | alleen met WebDAV | – |
| Back-up en herstel | alleen met WebDAV | – |

## Gegevens verbeteren
{: #verbeteren-nl}

### Ontbrekende gegevens

Zoekt boeken waar iets aan ontbreekt en toont vooraf hoeveel werk er ligt,
bijvoorbeeld "83 zonder omslag".

1. Kies wat je zoekt: **Zonder schrijver**, **Zonder omslag** of **Alles**. De app
   bekijkt je catalogus; met **Stoppen** breek je af.
2. Tik op een boek om het los te bewerken, of tik op **Selecteer** om meerdere boeken
   te kiezen.
3. Met een selectie kies je **Aanvullen**: de app zoekt de gegevens online op. Of
   kies **Bewerken** om velden zelf in één keer in te vullen.

Staat er **Niets gevonden**, dan ontbreekt er bij die keuze niets. Met **Opnieuw**
laat je de app nogmaals kijken.

### Schrijvers verrijken

Vult schrijvers aan met foto, korte biografie en land.

**Op dit apparaat en WebDAV** gaat dat in drie stappen. Bij elke stap zie je eerst
wat er gevonden is; alleen wat je goedkeurt wordt opgeslagen.

1. **Koppelen aan Wikidata**: zoekt schrijvers zonder Wikidata-koppeling op naam op.
   Goedgekeurde schrijvers krijgen een Wikidata-ID en een land.
2. **Gegevens aanvullen**: zoekt biografie, foto en gegevens bij de KB, Open Library,
   Wikidata en Wikipedia.
3. **Landen aanvullen**: geeft schrijvers zonder land er een op basis van hun
   nationaliteit.

**Grimmory-server**: **Auteur-metadata aanvullen** zoekt voor schrijvers zonder foto
een portret en tekst op Wikipedia. Na **Scannen** kies je welke je bijwerkt
(**Alles** of **Niets** als snelkeuze) en tik je op **Bijwerken**. Een bestaande
beschrijving wordt dan vervangen; controleer dus of de juiste persoon gevonden is.

## Opschonen en samenvoegen
{: #opschonen-nl}

### Dubbele boeken opruimen

**Op dit apparaat en WebDAV**: de app zoekt boeken die meer dan één keer voorkomen,
met dezelfde titel én schrijver. Hoofdletters, accenten en leestekens tellen niet
mee.

1. Per groep stelt de app voor welke versie je houdt. Die keuze kijkt naar hoeveel er
   is ingevuld, of er een omslag is en welk formaat het is. Je kunt per groep een
   andere versie kiezen.
2. Kies de groepen die je wilt opruimen, of tik op **Alles selecteren**.
3. Wil je de bestanden ook echt kwijt, zet dan **Ook van de NAS verwijderen** aan.
   Staat die uit, dan verdwijnen de andere versies alleen uit je bibliotheek en
   blijven de bestanden op je server.
4. Tik op **Opruimen** en bevestig. Verwijderen van de NAS kan niet ongedaan worden
   gemaakt.

**Grimmory-server**: kies een bibliotheek en bij **Wat telt als duplicaat** een van
twee manieren. **Titel en auteur** vindt hetzelfde boek, ook in verschillende
formaten; **Bestandsnaam** vindt identieke bestanden. Tik op **Zoek duplicaten**,
selecteer wat weg mag en tik op **Boeken verwijderen**. Dat verwijdert de boeken én
hun bestanden op de server.

### Schrijvers samenvoegen

Voegt verschillende schrijfwijzen van dezelfde schrijver samen, zoals "King,
Stephen" en "Stephen King".

1. De app toont groepen schrijvers die op elkaar lijken. Elke groep staat standaard
   uit; zet het vinkje aan bij de groepen die je wilt samenvoegen.
2. Tik op de naam die moet blijven (**Behouden als hoofdnaam**, aangegeven met een
   kroon).
3. Zet bij **Opties** eventueel **Ook in de boekbestanden bijwerken** aan. Dan past de
   app ook de EPUB-, CBZ- en PDF-bestanden aan; anders alleen de bibliotheekgegevens.
4. Tik op **Samenvoegen**.

Op een Grimmory-server tik je eerst op **Zoek dubbele schrijvers**. Met **Ook
spellingsverschillen** neemt de app ook kleine typefouten mee. Via **Handmatig
samenvoegen** kies je zelf schrijvers en typ je de naam waar ze naartoe moeten.

### Uitgevers samenvoegen

Werkt als Schrijvers samenvoegen. De app geeft de voorkeur aan de uitgever met de
meeste ingevulde gegevens; met de kroon kies je zelf. **Ook in de boekbestanden
bijwerken** past EPUB- en CBZ-bestanden aan; PDF heeft geen veld voor de uitgever.

### Series samenvoegen

Alleen voor een Grimmory-server. De series staan gegroepeerd per uitgever.
Selecteer de series die bij elkaar horen, tik bij de goede naam op **Kies als
doelnaam** en tik op **Series samenvoegen**. De boeken krijgen dan allemaal die
serienaam.

### Auteurs zonder boeken opruimen

Alleen voor een Grimmory-server. De app zoekt eerst schrijvers die aan geen enkel
boek meer gekoppeld zijn en toont het aantal. Het verwijderen bevestig je daarna
apart.

### Taalcodes standaardiseren

Boeken hebben hun taal vaak verschillend opgeslagen, bijvoorbeeld "nl", "dut" en
"Nederlands". Deze taak zet ze om naar één tweeletterige code (ISO 639-1). Je ziet
per taal welke varianten worden samengevoegd en hoeveel boeken het betreft. Tik op
**Omzetten** (op een Grimmory-server: **Standaardiseren**). Staat er **Alle
taalcodes zijn al eenduidig.**, dan is er niets te doen.

### Onderwerpen beheren

Toont alle onderwerpen, genres en trefwoorden uit je boeken, te sorteren op
**Meeste boeken** of **Naam**.

- **Samenvoegen**: tik op onderwerpen die hetzelfde betekenen en voeg ze samen. Onder
  **Mogelijke samenvoegingen** doet de app voorstellen, maar hij voegt nooit zelf
  samen.
- **Verwijderen**: tik op onderwerpen die weg mogen. Onder **Mogelijke
  verwijderingen** wijst de app verdachte onderwerpen aan: ze komen bij één boek
  voor, bestaan alleen uit cijfers, beginnen niet met een letter of cijfer, of hebben
  een ongebruikelijk lange naam. Dat zijn adviezen; jij beslist.
- **Onderwerp hernoemen**: geeft een onderwerp een nieuwe naam.
- Met het sterretje maak je een onderwerp favoriet.

## Onderhoud
{: #onderhoud-nl}

Beide onderhoudstaken zijn er alleen als je een WebDAV-server hebt.

### Boeken controleren

Controleert of de EPUB's in een WebDAV-bibliotheek nog te openen zijn. Per boek
haalt de app maar een paar kilobyte op, niet het hele bestand.

1. Kies de **Bibliotheek**.
2. Zet eventueel **Ook naar nieuwe boeken zoeken** aan. De app doorzoekt dan eerst de
   server en controleert nieuw gevonden boeken voordat ze in je bibliotheek komen.
3. Tik op **Controleren**. Je kunt het scherm verlaten; de voortgang blijft zichtbaar
   onder Taken en scans.

De **Uitslag** deelt de boeken in:

| Uitslag | Betekenis |
| --- | --- |
| In orde | Het boek opent goed; gezonde boeken staan niet in de lijst eronder |
| Staat niet meer op de server | Het bestand is weg |
| Beschadigd | Het bestand is kapot |
| Niet gecontroleerd | De app kon het boek niet nalopen |
| Gevonden maar niet toegevoegd | Een nieuw boek dat niet door de controle kwam |

Kies wat weg mag (**Alles aanvinken** of **Alles afvinken** als snelkeuze) en tik op
**Opruimen**. Beschadigde bestanden worden dan van de server verwijderd; dat kan niet
ongedaan worden gemaakt.

### Back-up en herstel

Grim Reader kan zijn bibliotheekgegevens als back-up op je WebDAV-servers bewaren,
in de bestanden `books.yaml` en `authors.yaml`. Dat gebeurt niet automatisch; je doet
het hier zelf.

- **Schrijver- en boekenindexen naar servers schrijven**: zet de gegevens van dit
  toestel in die bestanden op alle WebDAV-servers. Bestaande bestanden worden
  bijgewerkt.
- **Boekenindex van de servers terugzetten**: leest `books.yaml` en zet boeken terug
  die op je toestel ontbreken. Gebruik dit als er per ongeluk boeken uit je
  bibliotheek zijn verdwenen. Je eigen aanpassingen blijven staan.
- **Schrijversgegevens van de servers terugzetten**: leest `authors.yaml` en zet
  ontbrekende schrijvers terug, met de foto's die je zelf had gekozen. Later gemaakte
  aanpassingen op dit toestel worden niet overschreven.

Elke actie vraagt eerst om bevestiging.

<nav class="chapter-nav" aria-label="Hoofdstukken">
  <a href="instellingen.html">‹ Instellingen</a>
  <a href="index.html">Inhoud</a>
</nav>

</div>

<div lang="en" markdown="1">

Library management brings together the tasks that improve, clean up and maintain
your library's data. On iPhone it is under **More**; on iPad at the bottom of the
sidebar.

These tasks change data and can modify or delete files. Each task first shows what
will happen and asks you to confirm.

- [Tasks and scans](#taken-en)
- [Where a task runs](#waar-en)
- [Improve data](#verbeteren-en): missing details, enriching authors
- [Clean up and merge](#opschonen-en): duplicate books, authors, publishers, series,
  empty authors, language codes, subjects
- [Maintenance](#onderhoud-en): checking books, backup and restore

## Tasks and scans
{: #taken-en}

At the top you see what is running: a scan of a WebDAV server (with the number of
books in the index) and a running **Check books**. A task stays visible here when
you go to another screen; when it finishes, the last result stays. When nothing is
running, it says **No active tasks**.

## Where a task runs
{: #waar-en}

Some tasks work in more than one place. The app then first asks **Choose where to
run the task**:

| Choice | What changes |
| --- | --- |
| On this device and WebDAV | The catalog on your device. Book files are only updated if you explicitly choose that in the task. |
| Grimmory server | The data on your Grimmory server. You need admin rights on that server. |
| All library sources | Every book Grim Reader knows. |

If a task is grayed out, the source it needs is missing. The app then tells you what
to do first, for example add a WebDAV server.

| Task | On this device and WebDAV | Grimmory server |
| --- | --- | --- |
| Missing details | yes | yes |
| Enrich authors | yes | yes |
| Clean up duplicate books | yes | yes |
| Merge authors | yes | yes |
| Merge publishers | yes | – |
| Merge series | – | yes |
| Clean up authors without books | – | yes |
| Standardize language codes | yes | yes |
| Manage subjects | yes | – |
| Check books | only with WebDAV | – |
| Backup and restore | only with WebDAV | – |

## Improve data
{: #verbeteren-en}

### Missing details

Finds books with something missing and shows up front how much work there is, for
example "83 without cover".

1. Choose what to look for: **Without author**, **Without cover** or **All**. The app
   goes through your catalog; **Stop** cancels.
2. Tap a book to edit it on its own, or tap **Select** to pick several books.
3. With a selection, choose **Fill in**: the app looks the details up online. Or
   choose **Edit** to fill in fields yourself, all at once.

If it says **Nothing found**, nothing is missing for that choice. **Retry** makes
the app look again.

### Enrich authors

Adds a photo, short biography and country to authors.

**On this device and WebDAV** this takes three steps. At each step you first see
what was found; only what you approve is saved.

1. **Link to Wikidata**: looks up authors without a Wikidata link by name. Approved
   authors get a Wikidata ID and a country.
2. **Fill in details**: looks up biography, photo and details at the KB (Dutch
   national library), Open Library, Wikidata and Wikipedia.
3. **Add countries**: gives authors without a country one, based on their
   nationality.

**Grimmory server**: **Complete author metadata** looks up a portrait and text on
Wikipedia for authors without a photo. After **Scan** you choose which to update
(**All** or **None** as a shortcut) and tap **Update**. An existing description is
replaced, so check that the right person was found.

## Clean up and merge
{: #opschonen-en}

### Clean up duplicate books

**On this device and WebDAV**: the app finds books that appear more than once, with
the same title and author. Capitals, accents and punctuation do not count.

1. For each group the app suggests which version to keep. That choice looks at how
   much is filled in, whether there is a cover and which format it is. You can pick
   a different version per group.
2. Choose the groups you want to clean up, or tap **Select all**.
3. If you really want the files gone, turn on **Remove from the NAS too**. If it is
   off, the other versions only disappear from your library and the files stay on
   your server.
4. Tap **Clean up** and confirm. Deleting from the NAS cannot be undone.

**Grimmory server**: choose a library and, under **What counts as a duplicate**, one
of two methods. **Title and author** finds the same book, even in different formats;
**Filename** finds identical files. Tap **Find duplicates**, select what can go and
tap **Delete books**. That deletes the books and their files on the server.

### Merge authors

Merges different spellings of the same author, such as "King, Stephen" and "Stephen
King".

1. The app shows groups of authors that look alike. Every group is off by default;
   tick the groups you want to merge.
2. Tap the name that should stay (**Keep as primary name**, marked with a crown).
3. Under **Options**, optionally turn on **Also update the book files**. The app then
   also updates the EPUB, CBZ and PDF files; otherwise only the library data.
4. Tap **Merge**.

On a Grimmory server, first tap **Find duplicate authors**. **Spelling differences
too** also catches small typos. With **Merge manually** you pick authors yourself
and type the name they should become.

### Merge publishers

Works like Merge authors. The app prefers the publisher with the most details filled
in; use the crown to choose yourself. **Also update the book files** updates EPUB
and CBZ files; PDF has no field for the publisher.

### Merge series

Only for a Grimmory server. Series are grouped by publisher. Select the series that
belong together, tap **Use as target name** next to the right name and tap **Merge …
series**. The books then all get that series name.

### Clean up authors without books

Only for a Grimmory server. The app first looks for authors no longer linked to any
book and shows how many there are. You then confirm the deletion separately.

### Standardize language codes

Books often store their language in different ways, such as "nl", "dut" and
"Nederlands". This task converts them to one two-letter code (ISO 639-1). For each
language you see which variants are merged and how many books are affected. Tap
**Convert** (on a Grimmory server: **Standardize**). If it says **All language codes
are already consistent.**, there is nothing to do.

### Manage subjects

Shows all subjects, genres and keywords from your books, sorted by **Most books** or
**Name**.

- **Merge**: tap subjects that mean the same thing and merge them. Under **Possible
  merges** the app makes suggestions, but it never merges on its own.
- **Delete**: tap subjects that can go. Under **Possible removals** the app points
  out suspicious subjects: they appear on one book, consist only of digits, do not
  start with a letter or digit, or have an unusually long name. These are only
  suggestions; you decide.
- **Rename subject**: gives a subject a new name.
- The star makes a subject a favorite.

## Maintenance
{: #onderhoud-en}

Both maintenance tasks are only available if you have a WebDAV server.

### Check books

Checks whether the EPUBs in a WebDAV library can still be opened. For each book the
app only fetches a few kilobytes, not the whole file.

1. Choose the **Library**.
2. Optionally turn on **Also look for new books**. The app then scans the server
   first and checks newly found books before they stay in your library.
3. Tap **Check**. You can leave the screen; the progress stays visible under Tasks
   and scans.

The **Summary** sorts the books into:

| Result | Meaning |
| --- | --- |
| OK | The book opens fine; healthy books are not listed below |
| No longer on the server | The file is gone |
| Damaged | The file is broken |
| Not checked | The app could not check the book |
| Found but not added | A new book that did not pass the check |

Choose what can go (**Select all** or **Deselect all** as a shortcut) and tap
**Clean up**. Damaged files are then deleted from the server; this cannot be undone.

### Backup and restore

Grim Reader can keep a backup of its library data on your WebDAV servers, in the
files `books.yaml` and `authors.yaml`. This does not happen automatically; you do it
here yourself.

- **Write author and book indexes to servers**: puts the data from this device into
  those files on all WebDAV servers. Existing files are updated.
- **Restore book index from the servers**: reads `books.yaml` and restores books
  missing on your device. Use this if books have accidentally disappeared from your
  library. Your own changes stay.
- **Restore author details from the servers**: reads `authors.yaml` and restores
  missing authors, with the photos you picked yourself. Changes you made later on
  this device are not overwritten.

Each action asks you to confirm first.

<nav class="chapter-nav" aria-label="Chapters">
  <a href="instellingen.html">‹ Settings</a>
  <a href="index.html">Contents</a>
</nav>

</div>

<div lang="de" markdown="1">

Die Bibliotheksverwaltung bündelt die Aufgaben, mit denen du die Daten deiner
Bibliothek verbesserst, bereinigst und pflegst. Auf dem iPhone findest du sie unter
**Mehr**, auf dem iPad unten in der Seitenleiste.

Diese Aufgaben ändern Daten und können Dateien ändern oder löschen. Jede Aufgabe
zeigt zuerst, was passieren wird, und bittet um Bestätigung.

- [Aufgaben und Scans](#taken-de)
- [Wo eine Aufgabe ausgeführt wird](#waar-de)
- [Daten verbessern](#verbeteren-de): fehlende Daten, Autoren anreichern
- [Bereinigen und zusammenführen](#opschonen-de): doppelte Bücher, Autoren, Verlage,
  Reihen, leere Autoren, Sprachcodes, Themen
- [Wartung](#onderhoud-de): Bücher prüfen, Backup und Wiederherstellung

## Aufgaben und Scans
{: #taken-de}

Oben siehst du, was gerade läuft: das Durchsuchen eines WebDAV-Servers (mit der
Anzahl Bücher im Index) und ein laufendes **Bücher prüfen**. Eine Aufgabe bleibt
hier sichtbar, wenn du zu einem anderen Bildschirm wechselst; danach bleibt das
letzte Ergebnis stehen. Läuft nichts, steht dort **Keine aktiven Aufgaben**.

## Wo eine Aufgabe ausgeführt wird
{: #waar-de}

Manche Aufgaben funktionieren an mehr als einer Stelle. Dann fragt die App zuerst
**Wähle, wo die Aufgabe ausgeführt wird**:

| Auswahl | Was sich ändert |
| --- | --- |
| Auf dem Gerät und WebDAV | Der Katalog auf deinem Gerät. Buchdateien werden nur aktualisiert, wenn du das in der Aufgabe ausdrücklich wählst. |
| Grimmory-Server | Die Daten auf deinem Grimmory-Server. Dafür brauchst du Administratorrechte auf diesem Server. |
| Alle Bibliotheksquellen | Alle Bücher, die Grim Reader kennt. |

Ist eine Aufgabe ausgegraut, fehlt die Quelle, die sie braucht. Die App sagt dir
dann, was du zuerst tun musst, zum Beispiel einen WebDAV-Server hinzufügen.

| Aufgabe | Auf dem Gerät und WebDAV | Grimmory-Server |
| --- | --- | --- |
| Fehlende Daten | ja | ja |
| Autoren anreichern | ja | ja |
| Doppelte Bücher aufräumen | ja | ja |
| Autoren zusammenführen | ja | ja |
| Verlage zusammenführen | ja | – |
| Reihen zusammenführen | – | ja |
| Autoren ohne Bücher aufräumen | – | ja |
| Sprachcodes vereinheitlichen | ja | ja |
| Themen verwalten | ja | – |
| Bücher prüfen | nur mit WebDAV | – |
| Backup und Wiederherstellung | nur mit WebDAV | – |

## Daten verbessern
{: #verbeteren-de}

### Fehlende Daten

Sucht Bücher, bei denen etwas fehlt, und zeigt vorab, wie viel Arbeit es gibt, zum
Beispiel „83 ohne Cover".

1. Wähle, was du suchst: **Ohne Autor**, **Ohne Cover** oder **Alle**. Die App geht
   deinen Katalog durch; mit **Stoppen** brichst du ab.
2. Tippe auf ein Buch, um es einzeln zu bearbeiten, oder tippe auf **Auswählen**, um
   mehrere Bücher zu wählen.
3. Mit einer Auswahl wählst du **Ergänzen**: Die App sucht die Daten online. Oder
   wähle **Bearbeiten**, um Felder selbst auf einmal auszufüllen.

Steht dort **Nichts gefunden**, fehlt bei dieser Auswahl nichts. Mit **Erneut**
sieht die App noch einmal nach.

### Autoren anreichern

Ergänzt Autoren um Foto, kurze Biografie und Land.

**Auf dem Gerät und WebDAV** geht das in drei Schritten. Bei jedem Schritt siehst du
zuerst, was gefunden wurde; nur was du bestätigst, wird gespeichert.

1. **Mit Wikidata verknüpfen**: sucht Autoren ohne Wikidata-Verknüpfung nach Namen.
   Bestätigte Autoren erhalten eine Wikidata-ID und ein Land.
2. **Daten ergänzen**: sucht Biografie, Foto und Daten bei der KB (niederländische
   Nationalbibliothek), Open Library, Wikidata und Wikipedia.
3. **Länder ergänzen**: gibt Autoren ohne Land eines, anhand ihrer
   Staatsangehörigkeit.

**Grimmory-Server**: **Autor-Metadaten ergänzen** sucht für Autoren ohne Foto ein
Porträt und einen Text auf Wikipedia. Nach **Scannen** wählst du, welche du
aktualisierst (**Alle** oder **Keine** als Schnellauswahl), und tippst auf
**Aktualisieren**. Eine vorhandene Beschreibung wird dabei ersetzt; prüfe also, ob
die richtige Person gefunden wurde.

## Bereinigen und zusammenführen
{: #opschonen-de}

### Doppelte Bücher aufräumen

**Auf dem Gerät und WebDAV**: Die App sucht Bücher, die mehr als einmal vorkommen,
mit demselben Titel und Autor. Groß- und Kleinschreibung, Akzente und Satzzeichen
zählen nicht.

1. Pro Gruppe schlägt die App vor, welche Version du behältst. Dabei zählt, wie viel
   ausgefüllt ist, ob es ein Cover gibt und welches Format es ist. Du kannst pro
   Gruppe eine andere Version wählen.
2. Wähle die Gruppen, die du aufräumen willst, oder tippe auf **Alle auswählen**.
3. Willst du die Dateien wirklich loswerden, schalte **Auch vom NAS löschen** ein.
   Ist das aus, verschwinden die anderen Versionen nur aus deiner Bibliothek, und die
   Dateien bleiben auf deinem Server.
4. Tippe auf **Aufräumen** und bestätige. Das Löschen vom NAS lässt sich nicht
   rückgängig machen.

**Grimmory-Server**: Wähle eine Bibliothek und unter **Was als Duplikat gilt** eine
von zwei Methoden. **Titel und Autor** findet dasselbe Buch, auch in verschiedenen
Formaten; **Dateiname** findet identische Dateien. Tippe auf **Duplikate suchen**,
wähle aus, was weg darf, und tippe auf **Bücher löschen**. Das löscht die Bücher und
ihre Dateien auf dem Server.

### Autoren zusammenführen

Führt verschiedene Schreibweisen desselben Autors zusammen, etwa „King, Stephen"
und „Stephen King".

1. Die App zeigt Gruppen von Autoren, die sich ähneln. Jede Gruppe ist zunächst aus;
   setze das Häkchen bei den Gruppen, die du zusammenführen willst.
2. Tippe auf den Namen, der bleiben soll (**Als Hauptnamen behalten**, mit einer
   Krone markiert).
3. Schalte unter **Optionen** bei Bedarf **Auch in den Buchdateien aktualisieren**
   ein. Dann ändert die App auch die EPUB-, CBZ- und PDF-Dateien; sonst nur die
   Bibliotheksdaten.
4. Tippe auf **Zusammenführen**.

Auf einem Grimmory-Server tippst du zuerst auf **Doppelte Autoren suchen**. Mit
**Auch Schreibvarianten** berücksichtigt die App auch kleine Tippfehler. Über
**Manuell zusammenführen** wählst du selbst Autoren und gibst den Namen ein, zu dem
sie werden sollen.

### Verlage zusammenführen

Funktioniert wie Autoren zusammenführen. Die App bevorzugt den Verlag mit den
meisten ausgefüllten Daten; mit der Krone wählst du selbst. **Auch in den
Buchdateien aktualisieren** ändert EPUB- und CBZ-Dateien; PDF hat kein Feld für den
Verlag.

### Reihen zusammenführen

Nur für einen Grimmory-Server. Die Reihen sind nach Verlag gruppiert. Wähle die
Reihen, die zusammengehören, tippe beim richtigen Namen auf **Als Zielnamen wählen**
und tippe auf **… Reihen zusammenführen**. Alle Bücher erhalten dann diesen
Reihennamen.

### Autoren ohne Bücher aufräumen

Nur für einen Grimmory-Server. Die App sucht zuerst Autoren, die mit keinem Buch
mehr verknüpft sind, und zeigt ihre Anzahl. Das Löschen bestätigst du danach
separat.

### Sprachcodes vereinheitlichen

Bücher speichern ihre Sprache oft unterschiedlich, etwa „nl", „dut" und
„Nederlands". Diese Aufgabe wandelt sie in einen einheitlichen Zwei-Buchstaben-Code
(ISO 639-1) um. Du siehst pro Sprache, welche Varianten zusammengeführt werden und
wie viele Bücher betroffen sind. Tippe auf **Umwandeln** (auf einem Grimmory-Server:
**Vereinheitlichen**). Steht dort **Alle Sprachcodes sind schon eindeutig.**, gibt
es nichts zu tun.

### Themen verwalten

Zeigt alle Themen, Genres und Schlagwörter aus deinen Büchern, sortiert nach
**Meiste Bücher** oder **Name**.

- **Zusammenführen**: Tippe auf Themen, die dasselbe bedeuten, und führe sie
  zusammen. Unter **Mögliche Zusammenführungen** macht die App Vorschläge, führt
  aber nie selbst zusammen.
- **Löschen**: Tippe auf Themen, die weg dürfen. Unter **Mögliche Entfernungen**
  weist die App auf verdächtige Themen hin: Sie kommen nur bei einem Buch vor,
  bestehen nur aus Ziffern, beginnen nicht mit einem Buchstaben oder einer Ziffer
  oder haben einen ungewöhnlich langen Namen. Das sind nur Empfehlungen; du
  entscheidest.
- **Thema umbenennen**: gibt einem Thema einen neuen Namen.
- Mit dem Stern machst du ein Thema zum Favoriten.

## Wartung
{: #onderhoud-de}

Beide Wartungsaufgaben gibt es nur, wenn du einen WebDAV-Server hast.

### Bücher prüfen

Prüft, ob sich die EPUBs in einer WebDAV-Bibliothek noch öffnen lassen. Pro Buch
lädt die App nur ein paar Kilobyte, nicht die ganze Datei.

1. Wähle die **Bibliothek**.
2. Schalte bei Bedarf **Auch nach neuen Büchern suchen** ein. Die App durchsucht dann
   zuerst den Server und prüft neu gefundene Bücher, bevor sie in deiner Bibliothek
   bleiben.
3. Tippe auf **Prüfen**. Du kannst den Bildschirm verlassen; der Fortschritt bleibt
   unter Aufgaben und Scans sichtbar.

Das **Ergebnis** teilt die Bücher ein:

| Ergebnis | Bedeutung |
| --- | --- |
| In Ordnung | Das Buch öffnet sich problemlos; gesunde Bücher stehen nicht in der Liste darunter |
| Nicht mehr auf dem Server | Die Datei ist weg |
| Beschädigt | Die Datei ist kaputt |
| Nicht geprüft | Die App konnte das Buch nicht prüfen |
| Gefunden, aber nicht hinzugefügt | Ein neues Buch, das die Prüfung nicht bestanden hat |

Wähle aus, was weg darf (**Alle auswählen** oder **Alle abwählen** als
Schnellauswahl), und tippe auf **Aufräumen**. Beschädigte Dateien werden dann vom
Server gelöscht; das lässt sich nicht rückgängig machen.

### Backup und Wiederherstellung

Grim Reader kann seine Bibliotheksdaten als Backup auf deinen WebDAV-Servern
speichern, in den Dateien `books.yaml` und `authors.yaml`. Das geschieht nicht
automatisch; du machst es hier selbst.

- **Autoren- und Buchindizes auf die Server schreiben**: schreibt die Daten dieses
  Geräts in diese Dateien auf allen WebDAV-Servern. Vorhandene Dateien werden
  aktualisiert.
- **Buchindex von den Servern wiederherstellen**: liest `books.yaml` und stellt
  Bücher wieder her, die auf deinem Gerät fehlen. Nutze das, wenn Bücher versehentlich
  aus deiner Bibliothek verschwunden sind. Deine eigenen Änderungen bleiben erhalten.
- **Autorendaten von den Servern wiederherstellen**: liest `authors.yaml` und stellt
  fehlende Autoren wieder her, mit den Fotos, die du selbst gewählt hattest. Spätere
  Änderungen auf diesem Gerät werden nicht überschrieben.

Jede Aktion bittet zuerst um Bestätigung.

<nav class="chapter-nav" aria-label="Kapitel">
  <a href="instellingen.html">‹ Einstellungen</a>
  <a href="index.html">Inhalt</a>
</nav>

</div>
