---
layout: kb
title_nl: Grim Reader — instellingen
title_en: Grim Reader — settings
title_de: Grim Reader — Einstellungen
title: Grim Reader — instellingen / settings
description: Every setting in Grim Reader explained, category by category — reading, appearance, files, sources, AI, reading overview, storage, language and privacy.
---

<div lang="nl" markdown="1">

Op de iPhone vind je Instellingen onder het tabblad **Meer**; op de iPad staat het
onderaan de zijbalk. Tik op een categorie om ernaartoe te gaan.

| Categorie | Wat je er regelt |
| --- | --- |
| [Lezen en luisteren](#lezen-nl) | Twee kolommen in liggende vensters |
| [Weergave en sjablonen](#weergave-nl) | Thema, series-overzicht en lees-sjablonen |
| [Bestanden en metadata](#bestanden-nl) | Wat er bij opslaan in een EPUB wordt gerepareerd |
| [Bronnen en accounts](#bronnen-nl) | Grimmory, WebDAV en OPDS-catalogi beheren |
| [AI](#ai-nl) | Zoeken op betekenis, volledig op dit toestel |
| [Leesoverzicht](#leesoverzicht-nl) | Je leestijd, schrijvers en thema's |
| [Opslag](#opslag-nl) | Ruimte op dit toestel bekijken en vrijmaken |
| [Taal, privacy en meer](#taal-nl) | Taal, privacy, beoordelen en Over Grim Reader |

## Lezen en luisteren
{: #lezen-nl}

**Twee kolommen in brede liggende vensters.** Staat deze aan, dan toont de lezer
een EPUB in twee kolommen zodra het venster breder dan hoog is en er genoeg ruimte
is, zoals op een iPad in liggende stand. Heb je de schakelaar nooit aangeraakt, dan
volgt hij de standaard van je toestel.

Lettergrootte, regelafstand, lees-thema en voorleessnelheid pas je aan in het paneel
van een geopend boek, zodat je het effect meteen ziet.

## Weergave en sjablonen
{: #weergave-nl}

**Thema.** Kies **Systeem volgen**, **Licht** of **Donker**. Met Systeem volgen
wisselt de app mee met de licht- of donkerstand van iOS.

**Series-overzicht.** Verberg series met minder dan een bepaald aantal boeken, van 2
tot 10. Zo blijven losse boeken met een serienaam uit het overzicht Series. Stel het
aantal in met de plus- en minknop naast **Vanaf … boeken**.

**Sjablonen.** Een sjabloon bepaalt kleuren, lettertypen en achtergronden van
EPUB-boeken. De app heeft twee ingebouwde sjablonen: **Klassiek** en **Modern**.

- **Lees-sjabloon**: kies welk sjabloon je gebruikt. Deze regel verschijnt zodra er
  meer dan één sjabloon is.
- **Template importeren**: voeg een eigen sjabloon toe als `.grimtemplate`- of
  `.zip`-bestand. Gaat het mis, dan meldt de app de reden in een **Importfout**.

## Bestanden en metadata
{: #bestanden-nl}

**Veelvoorkomende EPUB-fouten automatisch repareren** bepaalt wat de app doet
wanneer je gegevens van een EPUB opslaat, bijvoorbeeld na het aanpassen van titel of
taal.

**Aan:** bij het opslaan repareert Grim Reader ook fouten die het bestand al had:

- ontbrekende omslagverwijzingen
- lege en dubbele identifiers
- ISBN-markeringen
- makersrollen (schrijver, vertaler, illustrator)
- herkenbare datum- en tijdnotaties

**Uit:** de app verandert alleen wat je zelf hebt gekozen. Wijzig je bijvoorbeeld de
taal, dan wordt alleen die taal opgeslagen, als één standaardcode.

## Bronnen en accounts
{: #bronnen-nl}

Hier zie en beheer je alle bronnen waarmee Grim Reader verbonden is. Hoe je een
nieuwe bron toevoegt, staat in [Boeken toevoegen](boeken-toevoegen.html).

Elke bron staat op een eigen regel met naam, adres en (bij WebDAV) het aantal
boeken. Het pictogram rechts toont de status:

| Pictogram | Betekenis |
| --- | --- |
| Groen vinkje | Verbonden |
| Gele driehoek | Niet verbonden: de server antwoordt niet |
| Draaiend wieltje | Verbinding wordt gecontroleerd |
| Stippelcirkel | Status onbekend |
| Potlood | De app mag naast de boeken metadata bewaren (schrijfrechten) |
| Slotje | Alleen-lezen |

- **WebDAV-server**: tik op de regel om de boeken van die server te zien. Veeg naar
  links voor **Bewerk** of **Verwijder**.
- **OPDS-catalogus**: tik op de regel om hem te bewerken. Veeg naar links voor
  **Bewerk** of **Verwijder**.
- **Grimmory**: tik op de regel om je account te zien, met **Server** en
  **Gebruiker**. Met **Uitloggen** verbreek je de verbinding.

Met **Bron toevoegen** onderaan voeg je een nieuwe bron toe. Ben je al met een
Grimmory-server verbonden, dan vraagt de app eerst om uit te loggen.

Bij het bewerken van een WebDAV-server stel je ook een [tweede adres voor
onderweg](boeken-toevoegen.html#onderweg-nl) in. Bij een Grimmory-server kun je
[eigen headers](boeken-toevoegen.html#headers-nl) opgeven voor een proxy.

**Offline demo.** Met **Offline demo bekijken** probeer je de app met een paar
voorbeeldboeken, zonder server. Zolang de demo loopt, staat hier **Demo verlaten**.

## AI
{: #ai-nl}

Met **AI-zoeken** vind je boeken op wat erin gebeurt, niet alleen op titel of
schrijver. Alles gebeurt op je toestel: je zoekvragen, boeken en berekende gegevens
gaan nergens heen.

1. Zet **AI-zoeken** aan.
2. De app downloadt eenmalig een model van ongeveer 66 MB bij Hugging Face. Je ziet
   **Model downloaden** en daarna **Model voorbereiden…**. Bij die download ziet
   Hugging Face je IP-adres, zoals bij elke download; daarna is er geen
   netwerkverkeer meer.
3. Staat er **Het model staat op dit apparaat**, dan bereidt de app je boeken voor.
   Je ziet de voortgang als "Boeken voorbereid: 120 van 800".

Houd de app open tijdens het voorbereiden. In de energiebesparingsmodus pauzeert het
en gaat het verder zodra die uit staat. Het model werkt in het Nederlands, Engels,
Duits, Frans en andere talen in Latijns schrift.

Waar je het terugziet:

- **Zoeken**: kies **Op betekenis**. De resultaten staan op volgorde van best
  passend.
- **Lijkt op dit boek**: op het boekscherm, boeken met een vergelijkbare inhoud.
- **Omdat je … leest**: op Start, suggesties op basis van wat je nu leest.

Zet je de schakelaar uit en bevestig je **Zoekmodel verwijderen?**, dan verdwijnt
het model van je toestel. Je kunt het later opnieuw downloaden.

## Leesoverzicht
{: #leesoverzicht-nl}

Het leesoverzicht laat zien hoeveel, wanneer en wat je leest en luistert. Je
leestijd telt mee vanaf een halve minuut en wordt alleen op dit toestel
bijgehouden. Kies bovenaan **Week**, **Maand**, **Dit jaar** of **Alles**.

| Onderdeel | Wat het toont |
| --- | --- |
| Kerncijfers | **Leestijd**, aantal **Boeken**, **Uitgelezen** en **Dagen op rij** |
| Leestijd per dag / per maand | Een grafiek van je minuten; per maand bij een langere periode |
| Leesmomenten | Een raster van weekdag en dagdeel (nacht, ochtend, middag, avond): hoe donkerder het vak, hoe langer je toen las |
| Schrijvers | De schrijvers die je het meest las |
| Thema's | De onderwerpen van wat je las |
| Formaten | Hoe je tijd verdeeld is over EPUB, PDF, strips en luisterboeken |
| Nu aan het lezen | Je lopende boeken met percentage en **Nog ongeveer …**: een schatting op basis van je eigen leestempo in dat boek |

Met **Leestijd wissen** en daarna **Alle leestijd wissen** begint het overzicht
opnieuw. Je plek in je boeken blijft bewaard.

## Opslag
{: #opslag-nl}

Hier zie je hoeveel ruimte Grim Reader op je toestel gebruikt en maak je ruimte
vrij. Het getal hier is wat de app zelf bewaart; het getal in de iOS-instellingen
telt ook de app zelf mee.

| Soort | Wat erin zit |
| --- | --- |
| Luisterboeken | Gedownloade audiobestanden; meestal het grootst |
| Boeken op dit toestel | Gedownloade en geïmporteerde EPUB's, PDF's en strips |
| Omslagen | Eén afbeelding per boek van een WebDAV-server; opnieuw op te halen |
| Schrijversfoto's | Portretten van Wikipedia, Wikidata en Open Library |

**Omslagen bewaren.** Kies bij **Bewaartermijn** of je **Alle omslagen** houdt of
alleen omslagen die je in de laatste 7, 30, 90 of 365 dagen hebt gezien. Omslagen
daarbuiten ruimt de app op bij de volgende start.

**iCloud-backup.** Met **Buiten de backup houden** gaan omslagen en serverindexen
niet mee in je iCloud-backup. Dat scheelt ruimte in iCloud; de app kan ze altijd
opnieuw ophalen.

**Opruimen.**

- **Omslagen en foto's comprimeren**: verkleint afbeeldingen. Je kunt het scherm
  verlaten; het werk gaat door. Het scherm blijft aan, want in slaapstand ligt het
  stil. Met **Stoppen** breek je af.
- **… omslagen van verdwenen boeken wissen**: ruimt afbeeldingen op van boeken die niet
  meer in je bibliotheek staan.
- **Caches en tijdelijke bestanden wissen**: verwijdert tijdelijke bestanden.
- **Omslagen en foto's wissen**: verwijdert alle afbeeldingen. Ze worden opnieuw
  opgehaald als je ze nodig hebt; bij een grote bibliotheek kost dat verkeer.

## Taal, privacy en meer
{: #taal-nl}

**Taal.** Grim Reader is er in het Nederlands, Engels en Duits. iOS beheert de taal
per app: tik op **Taal in iOS-instellingen** en kies daar de taal. Na het wijzigen
kan iOS Grim Reader opnieuw openen.

**Privacy.** Dit scherm vat samen hoe de app met je gegevens omgaat:

- **Geen advertenties of tracking**: Grim Reader deelt niet wat je leest en verkoopt
  geen gebruiksgegevens.
- **Je leestijd blijft op dit apparaat**: wissen kan in het Leesoverzicht.
- **Jouw bibliotheek blijft van jou**: de app wisselt alleen gegevens uit met servers
  die jij kiest.
- **Online metadata op jouw verzoek**: voor omslagen, schrijvers en boekinformatie
  raadpleegt de app openbare bronnen wanneer dat nodig is of wanneer je een
  verrijkactie start.
- **AI-zoeken op dit apparaat**: alleen het eenmalig downloaden van het model gaat
  via Hugging Face.

Wachtwoorden en tokens staan alleen in de Keychain van je toestel.

**Beoordeel Grim Reader** opent de App Store-pagina om een beoordeling te schrijven.

**Over Grim Reader** toont het versienummer, een link naar polderpijplijn.nl en de
licenties van gebruikte onderdelen: het lettertype OpenDyslexic, de RAR-lezer voor
CBR-strips en het AI-zoekmodel.

<nav class="chapter-nav" aria-label="Hoofdstukken">
  <a href="boeken-toevoegen.html">‹ Boeken toevoegen</a>
  <a href="index.html">Inhoud</a>
  <a href="bibliotheekbeheer.html">Bibliotheekbeheer ›</a>
</nav>

</div>

<div lang="en" markdown="1">

On iPhone, Settings is under the **More** tab; on iPad it is at the bottom of the
sidebar. Tap a category to jump to it.

| Category | What it covers |
| --- | --- |
| [Reading and listening](#lezen-en) | Two columns in landscape windows |
| [Appearance and templates](#weergave-en) | Theme, series overview and reading templates |
| [Files and metadata](#bestanden-en) | What gets repaired when you save an EPUB |
| [Sources and accounts](#bronnen-en) | Managing Grimmory, WebDAV and OPDS catalogs |
| [AI](#ai-en) | Search by meaning, entirely on this device |
| [Reading overview](#leesoverzicht-en) | Your reading time, authors and themes |
| [Storage](#opslag-en) | Viewing and freeing up space on this device |
| [Language, privacy and more](#taal-en) | Language, privacy, rating and About Grim Reader |

## Reading and listening
{: #lezen-en}

**Two columns in wide landscape windows.** When this is on, the reader shows an
EPUB in two columns as soon as the window is wider than it is tall and there is
enough room, such as on an iPad in landscape. If you have never touched the switch,
it follows your device's default.

You set font size, line spacing, reading theme and read-aloud speed in the panel of
an open book, so you see the effect right away.

## Appearance and templates
{: #weergave-en}

**Theme.** Choose **Follow system**, **Light** or **Dark**. With Follow system the
app switches along with the light or dark mode of iOS.

**Series overview.** Hide series with fewer than a set number of books, from 2 to
10. This keeps single books that happen to have a series name out of the Series
overview. Set the number with the plus and minus buttons next to **From … books**.

**Templates.** A template sets the colors, fonts and backgrounds of EPUB books. The
app has two built-in templates: **Classic** and **Modern**.

- **Reading template**: choose which template you use. This row appears as soon as
  there is more than one template.
- **Import template**: add your own template as a `.grimtemplate` or `.zip` file. If
  it goes wrong, the app explains why in an **Import error**.

## Files and metadata
{: #bestanden-en}

**Automatically repair common EPUB errors** decides what the app does when you save
details of an EPUB, for example after changing the title or language.

**On:** when saving, Grim Reader also repairs problems the file already had:

- missing cover references
- empty and duplicate identifiers
- ISBN markings
- creator roles (author, translator, illustrator)
- recognizable date and time notations

**Off:** the app only changes what you chose yourself. If you change the language,
for example, only that language is saved, as one standard code.

## Sources and accounts
{: #bronnen-en}

Here you see and manage every source Grim Reader is connected to. How to add a new
source is described in [Adding books](boeken-toevoegen.html).

Each source has its own row with its name, address and (for WebDAV) the number of
books. The icon on the right shows its status:

| Icon | Meaning |
| --- | --- |
| Green check mark | Connected |
| Yellow triangle | Not connected: the server does not answer |
| Spinning wheel | Checking connection |
| Dotted circle | Status unknown |
| Pencil | The app may store metadata next to the books (write access) |
| Padlock | Read-only |

- **WebDAV server**: tap the row to see the books on that server. Swipe left for
  **Edit** or **Delete**.
- **OPDS catalog**: tap the row to edit it. Swipe left for **Edit** or **Delete**.
- **Grimmory**: tap the row to see your account, with **Server** and **User**. **Log
  out** ends the connection.

**Add source** at the bottom adds a new source. If you are already connected to a
Grimmory server, the app asks you to log out first.

When you edit a WebDAV server you can also set a [second address for when you are
away](boeken-toevoegen.html#onderweg-en). For a Grimmory server you can add [custom
headers](boeken-toevoegen.html#headers-en) for a proxy.

**Offline demo.** **View offline demo** lets you try the app with a few sample books,
without a server. While the demo runs, this shows **Leave demo**.

## AI
{: #ai-en}

With **AI search** you find books by what happens in them, not just by title or
author. Everything happens on your device: your searches, books and the computed
data go nowhere.

1. Turn on **AI search**.
2. The app downloads a model of about 66 MB from Hugging Face, once. You see
   **Downloading model** and then **Preparing model…**. During that download Hugging
   Face sees your IP address, as with any download; after that there is no more
   network traffic.
3. Once it says **The model is on this device**, the app prepares your books. You see
   the progress as "Books prepared: 120 of 800".

Keep the app open while it prepares. In Low Power Mode it pauses and carries on once
that is off. The model works in Dutch, English, German, French and other languages
written in the Latin alphabet.

Where you see it:

- **Search**: choose **By meaning**. Results are sorted by best match.
- **Similar books**: on the book screen, books with similar content.
- **Because you're reading …**: on Start, suggestions based on what you are reading
  now.

If you turn the switch off and confirm **Delete search model?**, the model is removed
from your device. You can download it again later.

## Reading overview
{: #leesoverzicht-en}

The reading overview shows how much, when and what you read and listen to. Your
reading time counts from half a minute and is only tracked on this device. Choose
**Week**, **Month**, **This year** or **All** at the top.

| Part | What it shows |
| --- | --- |
| Key figures | **Reading time**, number of **Books**, **Finished** and **Day streak** |
| Reading time per day / per month | A chart of your minutes; per month for a longer period |
| Reading times | A grid of weekday and part of the day (night, morning, afternoon, evening): the darker the square, the longer you read then |
| Authors | The authors you read most |
| Themes | The subjects of what you read |
| Formats | How your time is split across EPUB, PDF, comics and audiobooks |
| Currently reading | Your current books with a percentage and **About … left**: an estimate based on your own reading pace in that book |

**Clear reading time** followed by **Clear all reading time** starts the overview
afresh. Your place in your books is kept.

## Storage
{: #opslag-en}

Here you see how much space Grim Reader uses on your device and free some up. The
number here is what the app itself stores; the number in iOS Settings also counts
the app itself.

| Kind | What it holds |
| --- | --- |
| Audiobooks | Downloaded audio files; usually the largest |
| Books on this device | Downloaded and imported EPUBs, PDFs and comics |
| Covers | One image per book from a WebDAV server; can be fetched again |
| Author photos | Portraits from Wikipedia, Wikidata and Open Library |

**Keep covers.** Under **How long to keep**, choose whether to keep **All covers**
or only covers you have seen in the last 7, 30, 90 or 365 days. The app clears the
others on its next start.

**iCloud backup.** **Keep out of the backup** leaves covers and server indexes out
of your iCloud backup. That saves iCloud space; the app can always fetch them again.

**Cleaning up.**

- **Compress covers and photos**: makes images smaller. You can leave the screen; the
  work carries on. The screen stays on, because the work stops while the device
  sleeps. **Stop** cancels.
- **Clear … covers of vanished books**: deletes images of books that are no longer in
  your library.
- **Clear caches and temporary files**: removes temporary files.
- **Clear covers and photos**: removes all images. They are fetched again when you
  need them; with a large library that uses data.

## Language, privacy and more
{: #taal-en}

**Language.** Grim Reader is available in Dutch, English and German. iOS manages
the language per app: tap **Language in iOS Settings** and choose the language
there. After changing it, iOS may reopen Grim Reader.

**Privacy.** This screen sums up how the app handles your data:

- **No ads or tracking**: Grim Reader does not share what you read and does not sell
  usage data.
- **Your reading time stays on this device**: you can clear it in the Reading
  overview.
- **Your library remains yours**: the app only exchanges data with servers you
  choose.
- **Online metadata when needed**: for covers, authors and book details the app
  consults public sources when needed or when you start an enrichment task.
- **AI search on this device**: only the one-time model download goes through Hugging
  Face.

Passwords and tokens are only stored in your device's Keychain.

**Rate Grim Reader** opens the App Store page so you can write a review.

**About Grim Reader** shows the version number, a link to polderpijplijn.nl and the
licenses of components used: the OpenDyslexic typeface, the RAR reader for CBR
comics and the AI search model.

<nav class="chapter-nav" aria-label="Chapters">
  <a href="boeken-toevoegen.html">‹ Adding books</a>
  <a href="index.html">Contents</a>
  <a href="bibliotheekbeheer.html">Library management ›</a>
</nav>

</div>

<div lang="de" markdown="1">

Auf dem iPhone findest du die Einstellungen im Tab **Mehr**; auf dem iPad stehen sie
unten in der Seitenleiste. Tippe auf eine Kategorie, um dorthin zu springen.

| Kategorie | Was du dort einstellst |
| --- | --- |
| [Lesen und Hören](#lezen-de) | Zwei Spalten in Querformatfenstern |
| [Darstellung und Vorlagen](#weergave-de) | Design, Reihenübersicht und Lesevorlagen |
| [Dateien und Metadaten](#bestanden-de) | Was beim Speichern eines EPUB repariert wird |
| [Quellen und Accounts](#bronnen-de) | Grimmory, WebDAV und OPDS-Kataloge verwalten |
| [KI](#ai-de) | Suche nach Bedeutung, vollständig auf diesem Gerät |
| [Leseübersicht](#leesoverzicht-de) | Deine Lesezeit, Autoren und Themen |
| [Speicher](#opslag-de) | Speicherplatz auf diesem Gerät ansehen und freigeben |
| [Sprache, Datenschutz und mehr](#taal-de) | Sprache, Datenschutz, Bewertung und Über Grim Reader |

## Lesen und Hören
{: #lezen-de}

**Zwei Spalten in breiten Querformatfenstern.** Ist dies an, zeigt der Reader ein
EPUB in zwei Spalten, sobald das Fenster breiter als hoch ist und genug Platz hat,
etwa auf einem iPad im Querformat. Hast du den Schalter nie berührt, folgt er der
Voreinstellung deines Geräts.

Schriftgröße, Zeilenabstand, Lesedesign und Vorlesetempo stellst du im Bedienfeld
eines geöffneten Buchs ein, damit du die Wirkung sofort siehst.

## Darstellung und Vorlagen
{: #weergave-de}

**Design.** Wähle **Wie System**, **Hell** oder **Dunkel**. Mit Wie System wechselt
die App mit dem hellen oder dunklen Modus von iOS.

**Reihenübersicht.** Blende Reihen mit weniger als einer bestimmten Anzahl Bücher
aus, von 2 bis 10. So bleiben einzelne Bücher mit Reihennamen aus der Übersicht
Reihen heraus. Stelle die Anzahl mit der Plus- und Minustaste neben **Ab …
Büchern** ein.

**Vorlagen.** Eine Vorlage bestimmt Farben, Schriften und Hintergründe von
EPUB-Büchern. Die App hat zwei eingebaute Vorlagen: **Klassisch** und **Modern**.

- **Lesevorlage**: Wähle, welche Vorlage du verwendest. Diese Zeile erscheint, sobald
  es mehr als eine Vorlage gibt.
- **Vorlage importieren**: Füge eine eigene Vorlage als `.grimtemplate`- oder
  `.zip`-Datei hinzu. Klappt es nicht, nennt die App den Grund in einem
  **Importfehler**.

## Dateien und Metadaten
{: #bestanden-de}

**Häufige EPUB-Fehler automatisch reparieren** bestimmt, was die App tut, wenn du
Daten eines EPUB speicherst, etwa nach dem Ändern von Titel oder Sprache.

**An:** Beim Speichern repariert Grim Reader auch Fehler, die die Datei schon hatte:

- fehlende Coververweise
- leere und doppelte Identifier
- ISBN-Kennzeichnungen
- Urheberrollen (Autor, Übersetzer, Illustrator)
- erkennbare Datums- und Zeitangaben

**Aus:** Die App ändert nur, was du selbst gewählt hast. Änderst du zum Beispiel die
Sprache, wird nur diese Sprache gespeichert, als ein einheitlicher Code.

## Quellen und Accounts
{: #bronnen-de}

Hier siehst und verwaltest du alle Quellen, mit denen Grim Reader verbunden ist. Wie
du eine neue Quelle hinzufügst, steht unter [Bücher
hinzufügen](boeken-toevoegen.html).

Jede Quelle hat eine eigene Zeile mit Namen, Adresse und (bei WebDAV) der Anzahl
Bücher. Das Symbol rechts zeigt den Status:

| Symbol | Bedeutung |
| --- | --- |
| Grünes Häkchen | Verbunden |
| Gelbes Dreieck | Nicht verbunden: Der Server antwortet nicht |
| Drehendes Rad | Verbindung wird geprüft |
| Gepunkteter Kreis | Status unbekannt |
| Stift | Die App darf neben den Büchern Metadaten speichern (Schreibzugriff) |
| Schloss | Schreibgeschützt |

- **WebDAV-Server**: Tippe auf die Zeile, um die Bücher dieses Servers zu sehen.
  Wische nach links für **Bearbeiten** oder **Löschen**.
- **OPDS-Katalog**: Tippe auf die Zeile, um ihn zu bearbeiten. Wische nach links für
  **Bearbeiten** oder **Löschen**.
- **Grimmory**: Tippe auf die Zeile, um dein Konto mit **Server** und **Benutzer** zu
  sehen. Mit **Abmelden** trennst du die Verbindung.

Mit **Quelle hinzufügen** unten fügst du eine neue Quelle hinzu. Bist du schon mit
einem Grimmory-Server verbunden, bittet die App dich zuerst, dich abzumelden.

Beim Bearbeiten eines WebDAV-Servers stellst du auch eine [zweite Adresse für
unterwegs](boeken-toevoegen.html#onderweg-de) ein. Bei einem Grimmory-Server kannst
du [eigene Header](boeken-toevoegen.html#headers-de) für einen Proxy angeben.

**Offline-Demo.** Mit **Offline-Demo ansehen** probierst du die App mit ein paar
Beispielbüchern aus, ohne Server. Solange die Demo läuft, steht hier **Demo
beenden**.

## KI
{: #ai-de}

Mit der **KI-Suche** findest du Bücher danach, was in ihnen passiert, nicht nur nach
Titel oder Autor. Alles geschieht auf deinem Gerät: Deine Suchanfragen, Bücher und
berechneten Daten gehen nirgendwohin.

1. Schalte die **KI-Suche** ein.
2. Die App lädt einmalig ein Modell von etwa 66 MB bei Hugging Face. Du siehst
   **Modell wird geladen** und danach **Modell wird vorbereitet …**. Bei diesem
   Download sieht Hugging Face deine IP-Adresse, wie bei jedem Download; danach gibt
   es keinen Netzwerkverkehr mehr.
3. Steht dort **Das Modell ist auf diesem Gerät**, bereitet die App deine Bücher vor.
   Du siehst den Fortschritt als „Bücher vorbereitet: 120 von 800".

Lass die App während der Vorbereitung geöffnet. Im Stromsparmodus pausiert sie und
macht weiter, sobald er aus ist. Das Modell funktioniert auf Niederländisch,
Englisch, Deutsch, Französisch und in anderen Sprachen mit lateinischer Schrift.

Wo du es wiederfindest:

- **Suchen**: Wähle **Nach Bedeutung**. Die Ergebnisse sind nach bester
  Übereinstimmung sortiert.
- **Ähnliche Bücher**: auf dem Buchbildschirm, Bücher mit ähnlichem Inhalt.
- **Weil du … liest**: auf Start, Vorschläge auf Grundlage dessen, was du gerade
  liest.

Schaltest du den Schalter aus und bestätigst **Suchmodell löschen?**, verschwindet
das Modell von deinem Gerät. Du kannst es später erneut laden.

## Leseübersicht
{: #leesoverzicht-de}

Die Leseübersicht zeigt, wie viel, wann und was du liest und hörst. Deine Lesezeit
zählt ab einer halben Minute und wird nur auf diesem Gerät erfasst. Wähle oben
**Woche**, **Monat**, **Dieses Jahr** oder **Alle**.

| Bereich | Was er zeigt |
| --- | --- |
| Kennzahlen | **Lesezeit**, Anzahl **Bücher**, **Ausgelesen** und **Tage in Folge** |
| Lesezeit pro Tag / pro Monat | Ein Diagramm deiner Minuten; pro Monat bei einem längeren Zeitraum |
| Lesezeiten | Ein Raster aus Wochentag und Tageszeit (Nacht, Morgen, Nachmittag, Abend): Je dunkler das Feld, desto länger hast du da gelesen |
| Autoren | Die Autoren, die du am meisten gelesen hast |
| Themen | Die Themen dessen, was du gelesen hast |
| Formate | Wie sich deine Zeit auf EPUB, PDF, Comics und Hörbücher verteilt |
| Gerade am Lesen | Deine laufenden Bücher mit Prozentsatz und **Noch etwa …**: eine Schätzung anhand deines eigenen Lesetempos in diesem Buch |

Mit **Lesezeit löschen** und danach **Gesamte Lesezeit löschen** beginnt die
Übersicht neu. Deine Stelle in den Büchern bleibt erhalten.

## Speicher
{: #opslag-de}

Hier siehst du, wie viel Platz Grim Reader auf deinem Gerät belegt, und gibst Platz
frei. Die Zahl hier ist, was die App selbst speichert; die Zahl in den
iOS-Einstellungen zählt auch die App selbst mit.

| Art | Inhalt |
| --- | --- |
| Hörbücher | Geladene Audiodateien; meist der größte Posten |
| Bücher auf diesem Gerät | Geladene und importierte EPUBs, PDFs und Comics |
| Cover | Ein Bild pro Buch von einem WebDAV-Server; erneut abrufbar |
| Autorenfotos | Porträts von Wikipedia, Wikidata und Open Library |

**Cover behalten.** Wähle unter **Aufbewahrungsdauer**, ob du **Alle Cover**
behältst oder nur Cover, die du in den letzten 7, 30, 90 oder 365 Tagen gesehen
hast. Die übrigen räumt die App beim nächsten Start auf.

**iCloud-Backup.** Mit **Vom Backup ausschließen** gehen Cover und Serverindizes
nicht in dein iCloud-Backup. Das spart Platz in iCloud; die App kann sie jederzeit
neu abrufen.

**Aufräumen.**

- **Cover und Fotos komprimieren**: verkleinert Bilder. Du kannst den Bildschirm
  verlassen; die Arbeit läuft weiter. Der Bildschirm bleibt an, denn im Ruhezustand
  steht die Arbeit still. Mit **Stoppen** brichst du ab.
- **… Cover verschwundener Bücher löschen**: räumt Bilder von Büchern auf, die nicht
  mehr in deiner Bibliothek sind.
- **Caches und temporäre Dateien löschen**: entfernt temporäre Dateien.
- **Cover und Fotos löschen**: entfernt alle Bilder. Sie werden neu abgerufen, wenn
  du sie brauchst; bei einer großen Bibliothek kostet das Datenvolumen.

## Sprache, Datenschutz und mehr
{: #taal-de}

**Sprache.** Grim Reader gibt es auf Niederländisch, Englisch und Deutsch. iOS
verwaltet die Sprache pro App: Tippe auf **Sprache in den iOS-Einstellungen** und
wähle dort die Sprache. Nach der Änderung öffnet iOS Grim Reader eventuell neu.

**Datenschutz.** Dieser Bildschirm fasst zusammen, wie die App mit deinen Daten
umgeht:

- **Keine Werbung, kein Tracking**: Grim Reader teilt nicht, was du liest, und
  verkauft keine Nutzungsdaten.
- **Deine Lesezeit bleibt auf diesem Gerät**: Löschen kannst du sie in der
  Leseübersicht.
- **Deine Bibliothek bleibt deine**: Die App tauscht nur mit Servern Daten aus, die
  du wählst.
- **Online-Metadaten auf deinen Wunsch**: Für Cover, Autoren und Buchinformationen
  fragt die App öffentliche Quellen ab, wenn das nötig ist oder du eine Anreicherung
  startest.
- **KI-Suche auf diesem Gerät**: Nur der einmalige Download des Modells läuft über
  Hugging Face.

Passwörter und Tokens liegen nur im Schlüsselbund deines Geräts.

**Grim Reader bewerten** öffnet die App-Store-Seite, damit du eine Bewertung
schreiben kannst.

**Über Grim Reader** zeigt die Versionsnummer, einen Link zu polderpijplijn.nl und
die Lizenzen verwendeter Bestandteile: die Schrift OpenDyslexic, den RAR-Leser für
CBR-Comics und das KI-Suchmodell.

<nav class="chapter-nav" aria-label="Kapitel">
  <a href="boeken-toevoegen.html">‹ Bücher hinzufügen</a>
  <a href="index.html">Inhalt</a>
  <a href="bibliotheekbeheer.html">Bibliotheksverwaltung ›</a>
</nav>

</div>
