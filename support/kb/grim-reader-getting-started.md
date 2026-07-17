---
layout: kb
title_nl: Grim Reader — complete handleiding
title_en: Grim Reader — complete setup guide
title: Grim Reader — handleiding / guide
description: From running a Grimmory server to reading, organising and managing your own self-hosted book library with Grim Reader.
---

<div lang="nl" markdown="1">

Grim Reader is een lees-app voor **Grimmory**, een zelf-gehoste server voor je
eigen digitale boekencollectie. De app praat alleen met je eigen server — er zit
geen account of cloud van ons tussen. Deze handleiding neemt je stap voor stap mee
van niets naar een werkende bibliotheek.

## Wat je nodig hebt

- Een **Grimmory-server** die ergens draait waar jij de baas bent (een NAS, een
  thuisserver, een kleine VPS).
- De **Grim Reader**-app op je iPhone of iPad.
- Je boeken, in EPUB-, PDF-, strip- (CBZ/CBR) of audioboek-formaat.

---

## Stap 1 — Een Grimmory-server draaien

Grim Reader bewaart je boeken niet; het leest ze van een Grimmory-server die je
zelf host. Heb je die nog niet, zet die dan eerst op.

De eenvoudigste en aanbevolen manier om Grimmory te draaien is met **Docker**. De
officiële image is **`grimmory/grimmory:latest`** op Docker Hub, en je draait 'm
met een `docker-compose.yml` die Grimmory op twee dingen op je machine wijst:

- een **data**-map, waar Grimmory zijn instellingen bewaart;
- een of meer **boeken**-mappen, waar je eigen bestanden staan.

Je wijst Grimmory naar je boekenmap, het scant de bestanden, leest de metadata
(titel, auteur, serie, omslag) en bouwt je bibliotheek.

> **Volg het officiële compose-bestand.** Grimmory heeft ook een database-container
> nodig, en exacte poorten, volumes en omgevingsvariabelen veranderen na verloop
> van tijd — zet het dus op met de actuele `docker-compose.yml` van de bron, in
> plaats van een commando uit je hoofd te kopiëren. De installatiegids en een
> actueel voorbeeld staan op de Grimmory-website:
> **[grimmory.org](https://grimmory.org)**. De image zelf is
> [`grimmory/grimmory`](https://hub.docker.com/r/grimmory/grimmory) op Docker Hub.

Zodra Grimmory draait, open je het in een webbrowser (het luistert meestal op een
poort als `6060`), maak je je **eerste gebruiker** aan, en voeg je minstens één
bibliotheekmap toe zodat er boeken te zien zijn. Noteer:

- het **adres** van de server — lokaal (bijvoorbeeld `192.168.1.10:6060`) of je
  eigen externe adres;
- je **gebruikersnaam** en **wachtwoord**.

Deze heb je in de volgende stap nodig.

---

## Stap 2 — Eerste keer inloggen

1. Open Grim Reader.
2. Vul het **adres** van je Grimmory-server in. Zowel een lokaal adres
   (`192.168.1.10:6060`) als een extern adres (`https://books.example.com`) werkt.
3. Vul je **gebruikersnaam** en **wachtwoord** in — dezelfde inloggegevens die je
   op de server hebt aangemaakt.
4. Tik op **Inloggen**.

Je bibliotheken verschijnen automatisch. Tik op een boek voor de details en kies
**Download** om het op je toestel te bewaren en offline te lezen.

### Eerst even rondkijken?

Er is een **Offline demo**-knop op het inlogscherm. Die opent een kleine
voorbeeldbibliotheek zonder server — handig om een gevoel voor de app te krijgen
voordat je iets instelt.

### Op meerdere toestellen

Je serveradres en login worden veilig bewaard in je **iCloud-sleutelhanger**,
zodat je andere Apple-toestellen je bibliotheek automatisch oppikken zodra je één
keer bent ingelogd. Je inloggegevens blijven versleuteld op je eigen toestellen.

---

## Stap 3 — Hoe Grim Reader met Grimmory samenwerkt

Alles wat je in de app ziet, is georganiseerd op de **Grimmory-server**. Grim
Reader is een venster op die structuur, dus de manier waarop je dingen op de
server ordent, is precies wat je in de app krijgt.

### Bibliotheken

Een **bibliotheek** is een map met boeken die Grimmory in de gaten houdt. Je kunt
één bibliotheek voor romans hebben en een andere voor strips, of ze splitsen per
taal — dat bepaal je zelf. Elke bibliotheek die je op de server maakt, verschijnt
als een eigen item in de zijbalk (op iPad) of bladerlijst (op iPhone) van Grim
Reader.

### Series en auteurs

Grimmory leest serie- en auteursinformatie uit de metadata van je boeken, zodat
Grim Reader een serie kan groeperen en je op auteur kunt bladeren zonder extra
werk. Belandt een boek in de verkeerde serie of onder de verkeerde auteur, pas het
dan aan op de server (of gebruik de beheertools — zie stap 6) en het wordt overal
bijgewerkt.

> **Tip:** onder **Instellingen → Series** kun je series verbergen die maar een
> paar boeken bevatten, zodat losse titels je serie-overzicht niet vervuilen. Stel
> het minimum aantal boeken in dat een serie nodig heeft voordat die getoond
> wordt.

### Planken en slimme planken

- Een **plank** is een met de hand samengestelde collectie die je op de server
  bouwt — zoals een leeslijst of een "favorieten"-groep.
- Een **slimme plank** (met een fonkel-icoon) vult zichzelf automatisch op basis
  van regels die je in Grimmory instelt — bijvoorbeeld "alle ongelezen sciencefiction"
  of "alles wat deze maand is toegevoegd". Je voegt niet met de hand boeken toe aan
  een slimme plank; Grimmory houdt 'm actueel en Grim Reader toont simpelweg het
  resultaat.

Zowel gewone als slimme planken verschijnen in hun eigen secties, zodat je er
direct naartoe kunt springen.

---

## Stap 4 — Toegankelijkheid

Grim Reader is gebouwd om door zo veel mogelijk mensen te gebruiken. De
leeservaring is sterk instelbaar onder **Instellingen**.

- **Dynamic Type** — zet *Tekstgrootte volgt iOS* aan zodat de lezer de
  tekstgrootte gebruikt die je systeembreed in iOS hebt ingesteld (Instellingen →
  Beeldscherm en helderheid → Tekstgrootte, of Toegankelijkheid → Grotere tekst).
  Liever per app instellen? Zet dat uit en gebruik de tekstgrootte-regelaar in de
  app zelf.
- **OpenDyslexic-lettertype** — bij de leeslettertypes kun je OpenDyslexic kiezen,
  een lettertype dat is ontworpen om makkelijker leesbaar te zijn voor mensen met
  dyslexie. Andere keuzes zijn klassieke boek-schreefletters (Georgia, Palatino,
  Iowan, Charter) en een gewoon schreefloos systeemlettertype.
- **Leesthema's** — kies Systeem, Licht, Sepia, Donker of **Hoog contrast** (puur
  zwart op wit), passend bij je ogen en je verlichting.
- **Regelafstand** — vergroot de ruimte tussen regels als dichte tekst lastig te
  volgen is.
- **Voorlezen** — Grim Reader kan boeken aan je voorlezen met de iOS-stemmen, en
  je kunt de **leessnelheid** instellen op een tempo dat je bevalt. Voorlezen gaat
  door met het **scherm vergrendeld**, met afspeelknoppen, de boektitel en de
  omslag op het vergrendelscherm. Op iPhone blijft het ook doorgaan als je naar het
  beginscherm of een andere app gaat; houd op iPad de app op de voorgrond of
  vergrendel het scherm. (Audioboeken spelen overal op beide.)
- **VoiceOver** — de app werkt met VoiceOver, Apples ingebouwde schermlezer.

Deze instellingen worden onthouden, dus zodra je de lezer naar wens hebt afgesteld,
blijft het zo.

---

## Stap 5 — Taal

Grim Reader is beschikbaar in het **Engels** en **Nederlands**.

- **App-taal** — de app volgt je iOS-taalinstellingen. Om alleen deze app te
  wijzigen, open je **Instellingen → Taal** in Grim Reader en tik je door naar de
  iOS-instellingen voor de app, waar je Engels of Nederlands kunt kiezen.
- **Snel taalfilter** — tijdens het bladeren laat een kleine taalbalk je je
  bibliotheek filteren op de taal van de boeken zelf, handig als je boeken in meer
  dan één taal bewaart.

---

## Stap 6 — Beheeropties (op eigen risico)

Als je inlogt als **Grimmory-beheerder**, toont Grim Reader een extra sectie
**Onderhoud** in Instellingen met tools die rechtstreeks op de bibliotheek van je
server ingrijpen. Dit zijn krachtige opruimtools.

> **⚠️ Op eigen risico.** Deze acties wijzigen of verwijderen gegevens op je
> Grimmory-server en sommige zijn niet ongedaan te maken. Zorg dat je een back-up
> van je Grimmory-datamap hebt voordat je ze gebruikt, en begin met een kleine,
> omkeerbare wijziging zodat je weet wat je kunt verwachten.

De onderhoudstools omvatten:

- **Dubbele boeken opruimen** — dubbele boeken vinden en verwijderen.
- **Auteurs samenvoegen** — items samenvoegen die naar dezelfde auteur verwijzen
  (bijvoorbeeld "J.R.R. Tolkien" en "Tolkien, J.R.R.").
- **Series samenvoegen** — series samenvoegen die onder net iets andere namen zijn
  geïmporteerd.
- **Taalcodes standaardiseren** — inconsistente taallabels in je bibliotheek
  opschonen.
- **Auteur-metadata verrijken** — ontbrekende auteursinformatie invullen via
  Wikipedia.
- **Ontbrekende auteurs / omslagen invullen** — ontbrekende auteurs of omslagen
  opzoeken en toevoegen voor boeken die ze missen.
- **Auteurs zonder boeken verwijderen** — auteur-items opruimen die geen boeken
  meer hebben. Deze vraagt eerst om bevestiging.

Omdat deze tools je hele bibliotheek in één keer raken, doe het rustig aan: back-up
maken, één tool draaien, resultaat controleren, dan verder.

---

## Je eigen boeken — geen server nodig

Grim Reader werkt ook volledig zonder server. Boeken die je zelf toevoegt,
verschijnen onder **Mijn boeken**, en de Start- en Auteurs-schermen vullen zich
automatisch met je eigen collectie.

Er zijn twee manieren om een boek toe te voegen:

- **Vanuit de Bestanden-app** — tik op de **+**-knop in *Mijn boeken* en kies een
  EPUB of PDF ergens in de Bestanden-app (iCloud Drive, Op mijn iPhone/iPad, een
  USB-stick, …).
- **"Open met…"** — deel een EPUB of PDF vanuit een andere app (Mail, Safari, een
  chat-app) en kies **Grim Reader**.

Het boek wordt in de app gekopieerd, de omslag en details worden uit het bestand
zelf gelezen, en het blijft offline beschikbaar.

---

## Internetboeken — gratis catalogi

Onder **Internetboeken** kun je openbare boekencatalogi doorbladeren en
rechtstreeks in *Mijn boeken* downloaden:

- **Project Gutenberg** zit ingebouwd — tienduizenden gratis, publiek-domein
  klassiekers.
- Voeg je **eigen OPDS-catalogi** toe onder **Instellingen → Mijn catalogi** —
  bijvoorbeeld een Calibre-Web-server of een andere OPDS-feed. Een catalogus kan
  een optionele login hebben; het wachtwoord gaat in de sleutelhanger.

---

## Boeken lezen van een WebDAV-server

Naast je Grimmory-server kan Grim Reader ook EPUB- en PDF-boeken rechtstreeks van
een **WebDAV**-server lezen — bijvoorbeeld een NAS (Synology, QNAP) of een
Nextcloud-share. Dit werkt los van Grimmory, dus je kunt het gebruiken met of
zonder een ingelogde Grimmory-server.

### Eén plek voor al je servers

Open **Instellingen → Servers**. Je **Grimmory**-bibliotheek en eventuele
**WebDAV**-servers staan nu samen in deze ene sectie. Naast elke server toont een
klein icoon de status, gecontroleerd elke keer dat je Instellingen opent:

- een groen **vinkje** — de server is bereikbaar en je login werkt;
- een oranje **waarschuwing** — de app kan er niet bij (server offline, verkeerd
  adres of wachtwoord);
- een draaitolletje — de verbinding wordt gecontroleerd.

Voor een WebDAV-server zie je mogelijk ook een groen **potlood**. Dat betekent dat
de app schrijftoegang heeft en een eigen kleine privémap op de server kan bijhouden
voor boek- en auteursgegevens. Een **slotje** betekent juist dat de share
alleen-lezen is — boeken werken nog, de app kan er alleen geen extra metadata
opslaan.

### Een server toevoegen

1. Open **Instellingen → Servers**.
2. Tik op **Server toevoegen** en kies **WebDAV-server**. (Kies je *Grimmory-server*,
   dan wijst dat gewoon naar je enkele Grimmory-login — zie de opmerking hieronder.)
3. Vul in:
   - **Naam** — wat je wilt, gewoon een label.
   - **Adres** — het WebDAV-adres van de map die je boeken bevat (zie de tip
     hieronder).
   - **Gebruikersnaam** en **wachtwoord** — je login voor die server.
4. Tik op **Verbinding testen** om het adres en de login te controleren, en dan
   **Bewaar**.

Je wachtwoord wordt veilig bewaard in de **sleutelhanger**, niet in de
instellingen van de app. Om een server later te bewerken of te verwijderen, veeg
je 'm naar links in de serverlijst.

> **Eén Grimmory-verbinding.** Grim Reader logt in op één Grimmory-server tegelijk.
> Om naar een andere Grimmory-server te wisselen, kies je *Server toevoegen →
> Grimmory-server*, log je uit, en log je opnieuw in met het nieuwe adres.
> WebDAV-servers kun je daarentegen zo veel toevoegen als je wilt.

> **Belangrijk — wijs het adres naar de map, niet naar de root.** Veel servers
> (QNAP in het bijzonder) tonen hun shares niet als je de WebDAV-*root* opent,
> waardoor de app een lege lijst zou tonen. Vul het adres **inclusief de share of
> map** in die je boeken bevat — bijvoorbeeld
> `https://my-nas.example.com:5006/Ebooks` in plaats van alleen
> `https://my-nas.example.com:5006`. Zorg op een QNAP dat de **WebDAV**-dienst aan
> staat en noteer de poort die het gebruikt.

### Al je boeken in één keer zien

Tik op een WebDAV-server in de **Servers**-lijst om één overzicht te openen van
**elk boek erop**, verzameld uit al zijn mappen en getoond als een raster met
omslagen, titels en auteurs. De app leest elk boek één keer om de omslag en details
uit het bestand te halen — de omslag in een EPUB, of de eerste pagina van een PDF.

Dit overzicht wordt **op je toestel onthouden**, zodat het niet elke keer de hele
server hoeft te scannen:

- **Vernieuwen** (de ronde pijl) scant de server opnieuw op nieuwe of verwijderde
  boeken.
- **Per map bladeren** (het map-icoon) opent de klassieke map-voor-map-weergave als
  je liever zelf door de structuur navigeert.

### Downloaden en lezen

Open een boek voor de details en **Download** het. Gedownloade WebDAV-boeken
verschijnen onder **Mijn boeken** en blijven offline beschikbaar, precies als
boeken die je van een Grimmory-server of een catalogus downloadt.

---

## Werkt er iets niet?

Loop je ergens vast, ga dan naar **[Help &amp; support](/support/)** om een
probleem te melden, een verbetering voor te stellen of een vraag te stellen.

</div>

<div lang="en" markdown="1">

Grim Reader is a reading client for **Grimmory**, a self-hosted server for your
own digital book collection. The app talks only to your own server — there is no
account or cloud of ours in between. This guide takes you from nothing to a
working library, step by step.

## What you need

- A **Grimmory server** running somewhere you control (a NAS, a home server, a
  small VPS).
- The **Grim Reader** app on your iPhone or iPad.
- Your books, in EPUB, PDF, comic (CBZ/CBR) or audiobook format.

---

## Step 1 — Run a Grimmory server

Grim Reader does not store your books; it reads them from a Grimmory server that
you host yourself. If you don't have one yet, set that up first.

The simplest and recommended way to run Grimmory is with **Docker**. The official
image is **`grimmory/grimmory:latest`** on Docker Hub, and you run it with a
`docker-compose.yml` that points Grimmory at two things on your machine:

- a **data** folder, where Grimmory keeps its settings;
- one or more **book** folders, where your actual files live.

You point Grimmory at your book folder, it scans the files, reads the metadata
(title, author, series, cover) and builds your library.

> **Follow the official compose file.** Grimmory also needs a database container,
> and exact ports, volumes and environment variables change over time — so set it
> up with the current `docker-compose.yml` from the source rather than copying a
> command from memory. The install guide and an up-to-date example are on the
> Grimmory website: **[grimmory.org](https://grimmory.org)**. The image itself is
> [`grimmory/grimmory`](https://hub.docker.com/r/grimmory/grimmory) on Docker Hub.

Once Grimmory is running, open it in a web browser (it usually listens on a port
like `6060`), create your **first user**, and add at least one library folder so
there are some books to see. Make a note of:

- the **address** of the server — local (for example `192.168.1.10:6060`) or your
  own remote address;
- your **username** and **password**.

You'll need these in the next step.

---

## Step 2 — First sign-in

1. Open Grim Reader.
2. Enter the **address** of your Grimmory server. Both a local address
   (`192.168.1.10:6060`) and a remote address (`https://books.example.com`) work.
3. Enter your **username** and **password** — the same credentials you created on
   the server.
4. Tap **Log in**.

Your libraries appear automatically. Tap any book to see its details, then choose
**Download** to keep it on your device and read it offline.

### Just want to look around first?

There's an **Offline demo** button on the login screen. It opens a small sample
library with no server required — handy to get a feel for the app before you set
anything up.

### On more than one device

Your server address and login are stored securely in your **iCloud Keychain**, so
your other Apple devices pick up your library automatically once you've signed in
once. Your credentials stay encrypted on your own devices.

---

## Step 3 — How Grim Reader works with Grimmory

Everything you see in the app is organised on the **Grimmory server**. Grim
Reader is a window onto that structure, so the way you organise things on the
server is exactly what you get in the app.

### Libraries

A **library** is a folder of books that Grimmory watches. You might have one
library for novels and another for comics, or split them by language — it's up to
you. Each library you create on the server shows up as its own entry in Grim
Reader's sidebar (on iPad) or browse list (on iPhone).

### Series and authors

Grimmory reads series and author information from your books' metadata, so Grim
Reader can group a series together and let you browse by author without any extra
work. If a book lands in the wrong series or under the wrong author, fix it on the
server (or use the admin tools — see Step 6) and it updates everywhere.

> **Tip:** under **Settings → Series** you can hide series that contain only a
> few books, so one-off titles don't clutter your series view. Set the minimum
> number of books a series needs before it's shown.

### Shelves and smart shelves

- A **shelf** is a hand-picked collection you build on the server — like a
  reading list or a "favourites" grouping.
- A **smart shelf** (shown with a sparkle icon) fills itself automatically based
  on rules you set in Grimmory — for example "all unread science fiction" or "everything
  added this month". You don't add books to a smart shelf by hand; Grimmory keeps
  it up to date and Grim Reader simply shows the result.

Both regular and smart shelves appear in their own sections so you can jump
straight to them.

---

## Step 4 — Accessibility

Grim Reader is built to be usable by as many people as possible. The reading
experience is highly adjustable under **Settings**.

- **Dynamic Type** — turn on *Text size follows iOS* so the reader uses the text
  size you've set system-wide in iOS (Settings → Display & Brightness → Text
  Size, or Accessibility → Larger Text). Prefer to set it per-app? Turn that off
  and use the in-app text-size control instead.
- **OpenDyslexic font** — among the reading fonts you can pick OpenDyslexic, a
  typeface designed to be easier to read for people with dyslexia. Other choices
  include classic book serifs (Georgia, Palatino, Iowan, Charter) and a plain
  sans-serif system font.
- **Reading themes** — choose System, Light, Sepia, Dark or **High contrast**
  (pure black on white) to suit your eyes and your lighting.
- **Line spacing** — increase the space between lines if dense text is hard to
  track.
- **Read aloud** — Grim Reader can read books to you using the iOS voices, and
  you can set the **reading speed** to a pace that suits you. Reading aloud
  keeps going with the **screen locked**, with playback controls, the book title
  and the cover on the Lock Screen. On iPhone it also keeps going when you
  switch to the Home Screen or another app; on iPad, keep the app in the
  foreground or lock the screen. (Audiobooks play everywhere on both.)
- **VoiceOver** — the app works with VoiceOver, Apple's built-in screen reader.

These settings are remembered, so once you've tuned the reader to your liking it
stays that way.

---

## Step 5 — Language

Grim Reader is available in **English** and **Dutch**.

- **App language** — the app follows your iOS language settings. To change just
  this app, open **Settings → Language** in Grim Reader and tap through to the iOS
  settings for the app, where you can pick English or Dutch.
- **Quick language filter** — when you're browsing, a small language bar lets you
  filter your library by the language of the books themselves, which is handy if
  you keep books in more than one language.

---

## Step 6 — Admin options (use at your own risk)

If you sign in as a **Grimmory administrator**, Grim Reader shows an extra
**Maintenance** section in Settings with tools that act directly on your server's
library. These are powerful housekeeping tools.

> **⚠️ Use at your own risk.** These actions change or remove data on your
> Grimmory server and some of them cannot be undone. Make sure you have a backup
> of your Grimmory data folder before using them, and start with a small,
> reversible change so you know what to expect.

The maintenance tools include:

- **Clean up duplicates** — find and remove duplicate books.
- **Merge authors** — combine entries that refer to the same author (for example
  "J.R.R. Tolkien" and "Tolkien, J.R.R.").
- **Merge series** — combine series that were imported under slightly different
  names.
- **Standardise language codes** — tidy up inconsistent language tags across your
  library.
- **Enrich author metadata** — fill in missing author information using Wikipedia.
- **Fill in missing authors / covers** — look up and add missing authors or cover
  images for books that lack them.
- **Remove authors without books** — clean up author entries that no longer have
  any books attached. This one asks for confirmation first.

Because these tools touch your whole library at once, take them slowly: back up,
run one tool, check the result, then continue.

---

## Your own books — no server needed

Grim Reader also works entirely without a server. Books you add yourself appear
under **My books**, and the Start and Authors screens fill up with your own
collection automatically.

There are two ways to add a book:

- **From the Files app** — tap the **+** button in *My books* and pick an EPUB or
  PDF from anywhere in the Files app (iCloud Drive, On My iPhone/iPad, a USB
  stick, …).
- **"Open with…"** — share an EPUB or PDF from any other app (Mail, Safari, a
  messaging app) and choose **Grim Reader**.

The book is copied into the app, its cover and details are read from the file
itself, and it stays available offline.

---

## Internet books — free catalogues

Under **Internet books** you can browse public book catalogues and download
straight into *My books*:

- **Project Gutenberg** is built in — tens of thousands of free, public-domain
  classics.
- Add your **own OPDS catalogues** under **Settings → My catalogues** — for
  example a Calibre-Web server or any other OPDS feed. A catalogue can have an
  optional login; the password goes into the Keychain.

---

## Reading books from a WebDAV server

Besides your Grimmory server, Grim Reader can also read EPUB and PDF books
straight from a **WebDAV** server — for example a NAS (Synology, QNAP) or a
Nextcloud share. This works independently of Grimmory, so you can use it with or
without a Grimmory server signed in.

### One place for all your servers

Open **Settings → Servers**. Your **Grimmory** library and any **WebDAV**
servers now live together in this single section. Next to each server a small
icon shows its status, checked every time you open Settings:

- a green **check** — the server is reachable and your login works;
- an orange **warning** — the app can't reach it (server offline, wrong address
  or password);
- a spinner — the connection is being checked.

For a WebDAV server you may also see a green **pencil**. That means the app has
write access and may keep a small private folder of its own on the server for
book and author details. A **lock** instead means the share is read-only — books
still work, the app just can't store extra metadata there.

### Add a server

1. Open **Settings → Servers**.
2. Tap **Add server** and choose **WebDAV server**. (Choosing *Grimmory server*
   just points you at your single Grimmory login — see the note below.)
3. Fill in:
   - **Name** — anything you like, just a label.
   - **Address** — the WebDAV address of the folder that contains your books
     (see the tip below).
   - **Username** and **password** — your login for that server.
4. Tap **Test connection** to check the address and login, then **Save**.

Your password is stored securely in the **Keychain**, not in the app's settings.
To edit or remove a server later, swipe left on it in the Servers list.

> **One Grimmory connection.** Grim Reader signs in to a single Grimmory server
> at a time. To switch to a different Grimmory server, choose *Add server →
> Grimmory server* and log out, then sign in again with the new address. WebDAV
> servers, on the other hand, can be added as many as you like.

> **Important — point the address at the folder, not the root.** Many servers
> (QNAP in particular) don't list their shares when you open the WebDAV *root*,
> so the app would show an empty list. Enter the address **including the share or
> folder** that holds your books — for example
> `https://my-nas.example.com:5006/Ebooks` rather than just
> `https://my-nas.example.com:5006`. On a QNAP, make sure the **WebDAV** service
> is enabled and note the port it uses.

### See all your books at once

Tap a WebDAV server in the **Servers** list to open a single overview of **every
book on it**, gathered from across all its folders and shown as a grid with
covers, titles and authors. The app reads each book once to pull its cover and
details out of the file — the cover image inside an EPUB, or the first page of a
PDF.

This overview is **remembered on your device**, so it doesn't have to scan the
whole server every time:

- **Refresh** (the circular arrow) rescans the server for new or removed books.
- **Browse by folder** (the folder icon) opens the classic folder-by-folder view
  if you'd rather navigate the structure yourself.

### Download and read

Open any book to see its details, then **Download** it. Downloaded WebDAV books
appear under **My books** and stay available offline, exactly like books you
download from a Grimmory server or a catalogue.

---

## Something not working?

If you get stuck at any step, head to **[Help &amp; support](/support/)** to report a
problem, suggest an improvement or ask a question.

</div>
