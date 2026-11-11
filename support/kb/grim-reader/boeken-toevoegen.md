---
layout: kb
title_nl: Grim Reader — boeken toevoegen
title_en: Grim Reader — adding books
title_de: Grim Reader — Bücher hinzufügen
title: Grim Reader — boeken toevoegen / adding books
description: How to add books to Grim Reader from a file, a WebDAV server (NAS or Nextcloud), an OPDS catalog or a Grimmory server.
---

<div lang="nl" markdown="1">

Een boek komt via een van vier bronnen in Grim Reader. Tik op een onderdeel om
ernaartoe te gaan.

- [Welke formaten de app leest](#formaten-nl)
- [De bronnen in het kort](#bronnen-nl)
- [Grimmory-server](#grimmory-nl)
- [OPDS-catalogus](#opds-nl)
- [WebDAV-server (NAS of Nextcloud)](#webdav-nl)
- [Bestanden van dit toestel](#bestanden-nl)
- [Problemen oplossen](#problemen-nl)

## Welke formaten de app leest
{: #formaten-nl}

| Soort | Formaten |
| --- | --- |
| Boeken | EPUB, PDF |
| Strips | CBZ, CBR (wordt bij het binnenhalen eenmalig omgezet naar CBZ); CB7 alleen via een Grimmory-server |
| Audioboeken | MP3, M4B, M4A, AAC |

## De bronnen in het kort
{: #bronnen-nl}

Je kunt de bronnen door elkaar gebruiken. Boeken uit alle bronnen staan samen in
Start, Bibliotheek, Schrijvers en Zoeken.

| Bron | Wat je nodig hebt | Geschikt voor |
| --- | --- | --- |
| Bestand van dit toestel | Een boekbestand in de Bestanden-app, iCloud Drive of op een USB-stick | Losse boeken, snel beginnen |
| WebDAV-server (aanbevolen) | Een gedeelde map op je NAS of bij Nextcloud | Je hele verzameling, zonder extra serversoftware |
| OPDS-catalogus | Het adres van je eigen catalogus, bijvoorbeeld Calibre-Web of Komga | Een bestaande catalogusserver |
| Grimmory-server | Een eigen Grimmory-installatie met account | Planken, bibliotheken en serverbeheer |

**Waar je begint.** Heb je nog niets toegevoegd, dan toont de app op Start en in de
bibliotheek het scherm **Nog geen boeken**. Daar staan twee knoppen: **Boeken
toevoegen** voor bestanden en **Server toevoegen** voor de drie serverbronnen. Met
**Eerst de demo bekijken** probeer je de app eerst met voorbeeldboeken.

**Later een bron toevoegen.** Ga naar **Instellingen › Bronnen en accounts** en tik
op **Bron toevoegen**. Op de iPhone staat Instellingen onder het tabblad **Meer**.
In dit scherm zie je ook per bron of hij bereikbaar is; veeg een bron naar links om
hem te bewerken of te verwijderen.

De app levert bewust geen kant-en-klare catalogi of boeken mee. Je verbindt hem met
je eigen verzameling.

## Grimmory-server
{: #grimmory-nl}

Met een Grimmory-account zie je de hele serverbibliotheek in de app, inclusief
bibliotheken, planken en slimme planken. Je kunt met één Grimmory-server tegelijk
verbonden zijn.

### Verbinden

1. Tik op **Server toevoegen** (of **Instellingen › Bronnen en accounts › Bron
   toevoegen**) en kies **Grimmory-server**.
2. Vul bij **Server** het adres in, bijvoorbeeld `192.168.2.10:6060`. Zonder
   `http://` of `https://` kiest de app zelf: `https://`, en `http://` voor een adres
   op je eigen netwerk.
3. Vul onder **Inloggen** je **Gebruikersnaam** en **Wachtwoord** in.
4. Tik op **Inloggen**.

Gebruik je een adres met `http://`, dan waarschuwt de app dat je gegevens
onversleuteld over het netwerk gaan. Thuis is dat meestal geen probleem; op het
wifi van een ander wel.

### Eigen headers: toegang via een proxy
{: #headers-nl}

Staat je Grimmory-server achter een proxy met eigen toegangscontrole, zoals
Cloudflare Zero Trust (Access), Authelia of Authentik? Dan blokkeert die proxy de app
al voordat de server je inlog ziet. Zo'n proxy laat je door op basis van een header
met een sleutel, en die headers vul je hier in. Zonder proxy heb je dit niet nodig.

1. Open het inlogscherm: **Server toevoegen › Grimmory-server**. Onderaan staat
   **Eigen headers**.
2. Tik op **Header toevoegen**.
3. Vul de **Naam** in, bijvoorbeeld `CF-Access-Client-Id`, en de **Waarde**. De
   waarde is verborgen; met het oogje maak je hem zichtbaar.
4. Herhaal dit voor elke header. Een regel verwijder je door hem naar links te vegen.
5. Tik op **Inloggen**. De app bewaart de headers vóór het inloggen, zodat de proxy de
   inlog zelf ook doorlaat.

**Voorbeeld: Cloudflare Access.** Maak in Cloudflare Zero Trust een service token aan
en sta dat token toe in de Access-policy van je server (actie Service Auth). Vul
daarna twee headers in:

| Naam | Waarde |
| --- | --- |
| `CF-Access-Client-Id` | De Client ID van het service token |
| `CF-Access-Client-Secret` | Het Client Secret van het service token |

**Regels.** Een naam mag geen spaties bevatten en een waarde geen regeleinde. De
namen `Authorization`, `Content-Type`, `Content-Length`, `Host`, `Connection` en
`Transfer-Encoding` zet de app zelf; die kun je niet overschrijven. Een regel die
niet aan de regels voldoet, slaat de app over; je ziet dan een oranje waarschuwing
onder de headers.

**Veiligheid.** De headers, ook de waarden, staan in de Keychain van je toestel. Ze
gaan alleen mee naar je Grimmory-server, nooit naar andere diensten zoals Open
Library of een OPDS-catalogus.

**Later wijzigen.** Log uit en open het inlogscherm opnieuw. Je bewaarde headers
staan daar al ingevuld.

### Een boek downloaden

1. Zoek het boek via Start, Bibliotheek of Zoeken en tik erop.
2. Tik op het boekscherm op **Downloaden**. Is de download klaar, dan wordt de knop
   **Lezen** (of **Lees verder** als je al begonnen was).
3. Voor een hele serie of schrijver tik je in die lijst op **Alles downloaden**. Je
   ziet hoeveel boeken klaar zijn en welke niet lukten.

Een gedownload boek blijft offline leesbaar. Je voortgang gaat terug naar de server
zodra die bereikbaar is. Met **Download verwijderen** haal je alleen de kopie van je
toestel; het boek blijft op de server.

### Wisselen van server

Om met een andere Grimmory-server te verbinden, log je eerst uit. Bij het verbinden
met een nieuwe server verwijdert de app de gedownloade boeken van de vorige server,
met hun favorieten en collecties. Zelf geïmporteerde boeken en boeken van WebDAV
blijven staan.

## OPDS-catalogus
{: #opds-nl}

OPDS is een standaard waarmee boekservers hun catalogus delen, zoals Calibre-Web,
Komga of Kavita. Je voegt je eigen catalogus toe, bladert erdoor en downloadt boeken
naar je toestel. De app levert zelf geen catalogi mee.

### Een catalogus toevoegen

1. Tik op **Server toevoegen** (of **Instellingen › Bronnen en accounts › Bron
   toevoegen**) en kies **OPDS-catalogus**.
2. Geef de catalogus een **Naam**.
3. Vul het **Server- of feedadres** in. Het serveradres is genoeg, bijvoorbeeld
   `https://demo.komga.org`; de app zoekt de OPDS-feed dan zelf op. Je ziet
   **Catalogus zoeken…** en daarna welk adres gevonden is.
4. Vraagt de catalogus om in te loggen, vul dan onder **Inloggen (optioneel)** je
   gebruikersnaam en wachtwoord in.
5. Tik op **Bewaar**.

Het veld **Zoeken (optioneel)** laat je meestal leeg: de app vraagt de catalogus zelf
om zijn zoekadres. Werkt zoeken niet, vul dan het zoekadres in met `{searchTerms}`
op de plek van de zoekterm.

### Een boek downloaden

1. Open **Bronnen**: op de iPad in de zijbalk, op de iPhone onder **Meer**. Je
   catalogi staan onder het kopje **OPDS**.
2. Tik op de catalogus en blader door de onderdelen of zoek een titel. Met het
   weergavemenu wissel je tussen **Toon als raster** en **Toon als lijst**.
3. Tik op een boek. Je ziet omslag, beschrijving, onderwerpen en boekinformatie.
4. Tik op **Downloaden**. Een onderbroken download hervat je met **Verder
   downloaden**.

Na het downloaden staat het boek bij je andere boeken en blijft het offline
leesbaar. Biedt een catalogus een boek alleen te koop, te leen of online aan, dan
meldt de app dat downloaden niet kan.

## WebDAV-server (NAS of Nextcloud)
{: #webdav-nl}

WebDAV is de aanbevolen route voor een hele verzameling: je wijst een gedeelde map
aan op je NAS of bij Nextcloud, en de app bouwt zelf een bibliotheek uit wat erin
staat. Serversoftware is niet nodig. Titel, schrijver, serie en omslag haalt de app
uit de bestanden zelf.

### Een server toevoegen

1. Tik op **Server toevoegen** (of **Instellingen › Bronnen en accounts › Bron
   toevoegen**) en kies **WebDAV-server**.
2. Geef de server een **Naam**, bijvoorbeeld "NAS thuis".
3. Vul het **Adres** in, inclusief de map met je boeken, bijvoorbeeld
   `http://192.168.2.17:5000/Ebooks`.
4. Vul je **Gebruikersnaam** en **Wachtwoord** in. Het wachtwoord staat alleen in de
   Keychain op dit toestel.
5. Tik op **Verbinding testen** om te zien of de app de map bereikt.
6. Tik op **Opslaan**.

### Onderweg: een tweede adres
{: #onderweg-nl}

Thuis bereik je je NAS op een lokaal adres, zoals `http://192.168.2.17:5000/Ebooks`.
Buiten de deur werkt dat adres niet. Kun je onderweg via Tailscale of een VPN bij je
NAS, dan heeft hij daar een ander adres. Met een tweede adres vindt de app je boeken
op beide plekken.

1. Open de server: **Instellingen › Bronnen en accounts**, veeg de server naar links
   en tik op **Bewerk**. Bij een nieuwe server vul je het meteen in.
2. Vul onder **Onderweg** bij **Tweede adres (optioneel)** het adres in dat je via de
   VPN gebruikt. Bijvoorbeeld het Tailscale-adres `http://100.64.12.34:5000/Ebooks`,
   of de Tailscale-naam `http://nas.jouw-tailnet.ts.net:5000/Ebooks`.
3. Alleen het IP-adres of de hostnaam mag verschillen (en zo nodig de poort of
   http/https). Het pad erachter, hier `/Ebooks`, moet gelijk zijn. Verschilt het pad,
   of is het hetzelfde adres als hierboven, dan waarschuwt de app.
4. Tik op **Verbinding testen**. Thuis meldt de app vaak **Het tweede adres antwoordt
   nu niet**. Dat is normaal zolang de VPN uit staat. Wil je het echt proberen, zet
   dan wifi uit en de VPN aan, en test opnieuw.
5. Tik op **Opslaan**.

Zo werkt het:

- De app gebruikt altijd eerst het eerste adres. Antwoordt dat niet, dan stapt hij
  over op het tweede.
- Per server onthoudt de app welk adres werkt, ook na een herstart. Zo wacht je
  onderweg niet telkens op een time-out van het thuisadres.
- Antwoordt ook het tweede adres niet, dan ligt het aan je verbinding. Bij de
  volgende poging probeert de app eerst weer het thuisadres.
- Je bibliotheek verandert niet: er wordt niets opnieuw doorzocht, en leesvoortgang
  en favorieten blijven staan. Alleen de weg naar de server verschilt.

Een tweede adres kan alleen bij een WebDAV-server.

### De bibliotheek doorzoeken

Open **Bronnen** (iPad: zijbalk; iPhone: **Meer**) en tik op je server onder
**WebDAV**. Je hebt dan twee mogelijkheden:

- **Doorzoek de bibliotheek**: de app leest alle boeken in. Daarna kun je zoeken en
  vullen Start en Schrijvers zich. Bij een grote verzameling duurt dat even; je kunt
  het met **Pauzeer** onderbreken en later **Hervatten**.
- **Door mappen bladeren**: je loopt meteen door de mappen op de server. Handig als
  je alleen één boek wilt pakken.

Staat er op de server een bestand `.grimreader/books.yaml`, dan is de bibliotheek in
één keer binnen in plaats van map voor map.

### Een boek downloaden

1. Tik op een boek in de lijst of in een map.
2. Tik op **Downloaden** (bij een luisterboek: **Downloaden om offline te
   luisteren**).
3. Daarna tik je op het boek om het te lezen. Met **Download verwijderen** haal je de
   kopie weer van je toestel; het bestand op de server blijft staan.

Voor een hele map, serie of schrijver gebruik je **Alles downloaden**.

## Bestanden van dit toestel
{: #bestanden-nl}

Heb je een boekbestand al op je iPhone of iPad, in iCloud Drive of op een USB-stick,
dan importeer je het rechtstreeks. Het boek staat daarna onder **Op dit apparaat**
en is altijd offline leesbaar.

### Losse bestanden kiezen

1. Ga naar **Op dit apparaat** en tik op **Boeken toevoegen** (het plusje). Heb je
   nog geen boeken, dan staat de knop midden op het scherm.
2. Kies **Bestanden kiezen…**.
3. Selecteer een of meer bestanden in de Bestanden-app en tik op **Open**.

### Een hele map of USB-stick

1. Tik op **Boeken toevoegen** en kies **Map of USB-stick scannen…**.
2. Wijs de map aan. De app zoekt er alle leesbare boeken in, ook in submappen.
3. Je ziet de voortgang ("12 van 40"). Met **Stoppen** breek je af; aan het eind
   meldt de app hoeveel boeken zijn geïmporteerd en welke niet lukten. Tik op
   **Gereed**.

### Vanuit een andere app of AirDrop

Een EPUB, PDF, strip (CBZ of CBR) of luisterboek kun je ook vanuit een andere app
naar Grim Reader sturen. Tik in die app (Mail, Safari, Bestanden) op het deelicoon
en kies **Grim Reader**. Een bestand dat je via AirDrop ontvangt, open je op dezelfde
manier met Grim Reader.

Een CBR-strip zet de app bij het importeren eenmalig om naar CBZ; je ziet dan
**Strip voorbereiden…**. Een CBR met wachtwoord of in meerdere delen kan de app niet
lezen.

## Problemen oplossen
{: #problemen-nl}

De meeste problemen bij het toevoegen zitten in het adres of de inloggegevens.
Begin bij WebDAV altijd met **Verbinding testen**.

| Wat je ziet | Wat je kunt doen |
| --- | --- |
| **Inloggen mislukt. Controleer gebruikersnaam en wachtwoord.** | Typ beide opnieuw; let op hoofdletters en een spatie aan het eind. |
| **Geen verbinding met de server.** | Controleer of je op hetzelfde netwerk zit als de server, of vul een tweede adres in voor onderweg (alleen WebDAV). |
| **De beveiligde verbinding kwam niet tot stand.** | Het certificaat van de server klopt niet of is verlopen. Herstel het op de server, of gebruik thuis een `http://`-adres. |
| De WebDAV-server meldt **alleen-lezen** | Wijs de map met je boeken aan, niet de hoofdmap van de NAS. Die is vaak niet schrijfbaar. |
| **Geen boeken gevonden** na doorzoeken | Klopt de map in het adres? Tik op **Vernieuwen** om opnieuw te zoeken. |
| Een OPDS-catalogus wordt niet gevonden | Vul het volledige feedadres in, bijvoorbeeld het adres dat eindigt op `/opds`. |
| Een boek staat er wel, maar opent niet | Kijk of het formaat bij [Welke formaten de app leest](#formaten-nl) staat. CB7 lukt alleen via een Grimmory-server; een CBR met wachtwoord niet. |
| Serverboeken verdwijnen onderweg uit de lijst | Dat is bewust: is de server onbereikbaar, dan toont de app alleen wat op je toestel staat. Ze komen terug zodra de server antwoordt. |

Kom je er niet uit? Kijk onder **Hulp en info** in de app, of ga naar
**[Help &amp; support](/support/)**.

<nav class="chapter-nav" aria-label="Hoofdstukken">
  <a href="index.html">‹ Inhoud</a>
  <a href="instellingen.html">Instellingen ›</a>
</nav>

</div>

<div lang="en" markdown="1">

Books reach Grim Reader through one of four sources. Tap a topic to jump to it.

- [Which formats the app reads](#formaten-en)
- [The sources at a glance](#bronnen-en)
- [Grimmory server](#grimmory-en)
- [OPDS catalog](#opds-en)
- [WebDAV server (NAS or Nextcloud)](#webdav-en)
- [Files on this device](#bestanden-en)
- [Troubleshooting](#problemen-en)

## Which formats the app reads
{: #formaten-en}

| Kind | Formats |
| --- | --- |
| Books | EPUB, PDF |
| Comics | CBZ, CBR (converted to CBZ once, when it is added); CB7 only through a Grimmory server |
| Audiobooks | MP3, M4B, M4A, AAC |

## The sources at a glance
{: #bronnen-en}

You can mix sources. Books from every source appear together in Start, Library,
Authors and Search.

| Source | What you need | Good for |
| --- | --- | --- |
| A file on this device | A book file in the Files app, iCloud Drive or on a USB drive | Single books, getting started quickly |
| WebDAV server (recommended) | A shared folder on your NAS or in Nextcloud | Your whole collection, without extra server software |
| OPDS catalog | The address of your own catalog, such as Calibre-Web or Komga | An existing catalog server |
| Grimmory server | Your own Grimmory installation with an account | Shelves, libraries and server administration |

**Where to start.** If you have not added anything yet, Start and the library show
the **No books yet** screen. It has two buttons: **Add books** for files and **Add
server** for the three server sources. With **Take a look at the demo first** you
can try the app with sample books.

**Adding a source later.** Go to **Settings › Sources and accounts** and tap **Add
source**. On iPhone, Settings is under the **More** tab. This screen also shows
whether each source can be reached; swipe a source to the left to edit or delete it.

The app deliberately ships without ready-made catalogs or books. You connect it to
your own collection.

## Grimmory server
{: #grimmory-en}

With a Grimmory account you see the whole server library in the app, including
libraries, shelves and smart shelves. You can be connected to one Grimmory server at
a time.

### Connecting

1. Tap **Add server** (or **Settings › Sources and accounts › Add source**) and
   choose **Grimmory server**.
2. Under **Server**, enter the address, for example `192.168.2.10:6060`. Without
   `http://` or `https://` the app chooses for you: `https://`, and `http://` for an
   address on your own network.
3. Under **Log in**, enter your **Username** and **Password**.
4. Tap **Log in**.

If you use an address starting with `http://`, the app warns you that your details
travel unencrypted across the network. At home that is usually fine; on someone
else's Wi-Fi it is not.

### Custom headers: access through a proxy
{: #headers-en}

Is your Grimmory server behind a proxy with its own access control, such as
Cloudflare Zero Trust (Access), Authelia or Authentik? Then that proxy blocks the app
before the server even sees your login. Such a proxy lets you through based on a
header carrying a key, and you enter those headers here. Without a proxy you do not
need this.

1. Open the login screen: **Add server › Grimmory server**. **Custom headers** is at
   the bottom.
2. Tap **Add header**.
3. Enter the **Name**, for example `CF-Access-Client-Id`, and the **Value**. The value
   is hidden; tap the eye to show it.
4. Repeat for each header. Swipe a row to the left to delete it.
5. Tap **Log in**. The app saves the headers before logging in, so the proxy lets the
   login itself through too.

**Example: Cloudflare Access.** Create a service token in Cloudflare Zero Trust and
allow that token in your server's Access policy (action Service Auth). Then add two
headers:

| Name | Value |
| --- | --- |
| `CF-Access-Client-Id` | The service token's Client ID |
| `CF-Access-Client-Secret` | The service token's Client Secret |

**Rules.** A name cannot contain spaces and a value cannot contain a line break. The
app sets `Authorization`, `Content-Type`, `Content-Length`, `Host`, `Connection` and
`Transfer-Encoding` itself; you cannot override those. The app skips a row that breaks
these rules and shows an orange warning below the headers.

**Security.** The headers, values included, are stored in your device's Keychain.
They are only sent to your Grimmory server, never to other services such as Open
Library or an OPDS catalog.

**Changing them later.** Log out and open the login screen again. Your saved headers
are already filled in there.

### Downloading a book

1. Find the book through Start, Library or Search and tap it.
2. On the book screen, tap **Download**. When the download is done, the button
   changes to **Reading** (or **Continue reading** if you had already started).
3. For a whole series or author, tap **Download all** in that list. You see how many
   books are done and which ones failed.

A downloaded book stays readable offline. Your progress is sent back to the server
as soon as it can be reached. **Remove download** only removes the copy on your
device; the book stays on the server.

### Switching servers

To connect to another Grimmory server, log out first. When you connect to a new
server, the app removes the downloaded books from the previous server, together with
their favorites and collections. Books you imported yourself and books from WebDAV
stay.

## OPDS catalog
{: #opds-en}

OPDS is a standard that book servers such as Calibre-Web, Komga and Kavita use to
share their catalog. You add your own catalog, browse it and download books to your
device. The app does not come with any catalogs.

### Adding a catalog

1. Tap **Add server** (or **Settings › Sources and accounts › Add source**) and
   choose **OPDS catalog**.
2. Give the catalog a **Name**.
3. Enter the **Server or feed address**. The server address is enough, for example
   `https://demo.komga.org`; the app then finds the OPDS feed itself. You see
   **Looking for the catalog…** and then the address it found.
4. If the catalog asks you to sign in, enter your username and password under **Sign
   in (optional)**.
5. Tap **Save**.

You can usually leave **Search (optional)** empty: the app asks the catalog for its
search address. If search does not work, enter the search address with
`{searchTerms}` where the search term goes.

### Downloading a book

1. Open **Sources**: on iPad in the sidebar, on iPhone under **More**. Your catalogs
   are under the **OPDS** heading.
2. Tap the catalog and browse its sections or search for a title. Use the view menu
   to switch between **Show as grid** and **Show as list**.
3. Tap a book. You see its cover, description, subjects and book details.
4. Tap **Download**. Resume an interrupted download with **Resume download**.

After downloading, the book sits with your other books and stays readable offline.
If a catalog only offers a book for sale, for loan or to read online, the app tells
you it cannot be downloaded.

## WebDAV server (NAS or Nextcloud)
{: #webdav-en}

WebDAV is the recommended route for a whole collection: you point the app at a
shared folder on your NAS or in Nextcloud, and it builds a library from what is in
there. No server software is needed. The app reads title, author, series and cover
from the files themselves.

### Adding a server

1. Tap **Add server** (or **Settings › Sources and accounts › Add source**) and
   choose **WebDAV server**.
2. Give the server a **Name**, for example "NAS at home".
3. Enter the **Address**, including the folder with your books, for example
   `http://192.168.2.17:5000/Ebooks`.
4. Enter your **Username** and **Password**. The password is only stored in the
   Keychain on this device.
5. Tap **Test connection** to check that the app can reach the folder.
6. Tap **Save**.

### Away from home: a second address
{: #onderweg-en}

At home you reach your NAS at a local address, such as
`http://192.168.2.17:5000/Ebooks`. Outside the house that address does not work. If
you can reach your NAS through Tailscale or a VPN when you are out, it has a
different address there. With a second address the app finds your books in both
places.

1. Open the server: **Settings › Sources and accounts**, swipe the server to the left
   and tap **Edit**. For a new server, fill it in straight away.
2. Under **Away from home**, enter the address you use over the VPN in **Second
   address (optional)**. For example the Tailscale address
   `http://100.64.12.34:5000/Ebooks`, or the Tailscale name
   `http://nas.your-tailnet.ts.net:5000/Ebooks`.
3. Only the IP address or host name may differ (and the port or http/https if
   needed). The path after it, here `/Ebooks`, must be the same. If the path differs,
   or it is the same address as above, the app warns you.
4. Tap **Test connection**. At home the app often reports **The second address does
   not answer right now**. That is normal while the VPN is off. To really try it, turn
   off Wi-Fi, turn on the VPN and test again.
5. Tap **Save**.

How it works:

- The app always tries the first address first. If it does not answer, it switches to
  the second.
- For each server the app remembers which address works, even after a restart. That
  way you do not wait for the home address to time out every time you are out.
- If the second address does not answer either, the problem is your connection. On
  the next attempt the app tries the home address first again.
- Your library does not change: nothing is rescanned, and reading progress and
  favorites stay. Only the route to the server differs.

A second address is only available for a WebDAV server.

### Scanning the library

Open **Sources** (iPad: sidebar; iPhone: **More**) and tap your server under
**WebDAV**. You then have two options:

- **Scan the library**: the app reads in all books. After that you can search, and
  Start and Authors fill up. With a large collection this takes a while; you can
  **Pause** it and **Resume** later.
- **Browse folders**: walk through the folders on the server right away. Handy when
  you only want to grab one book.

If the server has a `.grimreader/books.yaml` file, the whole library comes in at
once instead of folder by folder.

### Downloading a book

1. Tap a book in the list or in a folder.
2. Tap **Download** (for an audiobook: **Download to listen offline**).
3. Then tap the book to read it. **Remove download** removes the copy from your
   device again; the file on the server stays.

For a whole folder, series or author, use **Download all**.

## Files on this device
{: #bestanden-en}

If a book file is already on your iPhone or iPad, in iCloud Drive or on a USB drive,
you import it directly. The book then appears under **On this device** and is always
readable offline.

### Choosing single files

1. Go to **On this device** and tap **Add books** (the plus button). If you have no
   books yet, the button is in the middle of the screen.
2. Choose **Choose files…**.
3. Select one or more files in the Files app and tap **Open**.

### A whole folder or USB drive

1. Tap **Add books** and choose **Scan a folder or USB drive…**.
2. Pick the folder. The app finds every readable book in it, including subfolders.
3. You see the progress ("12 of 40"). **Stop** cancels; at the end the app tells you
   how many books were imported and which ones failed. Tap **Done**.

### From another app or AirDrop

You can also send an EPUB, PDF, comic (CBZ or CBR) or audiobook to Grim Reader from
another app. In that app (Mail, Safari, Files), tap the share icon and choose **Grim
Reader**. A file you receive through AirDrop opens in Grim Reader the same way.

The app converts a CBR comic to CBZ once, when it is imported; you then see
**Preparing comic…**. The app cannot read a CBR with a password or one split into
several parts.

## Troubleshooting
{: #problemen-en}

Most problems when adding a source come down to the address or the login details.
With WebDAV, always start with **Test connection**.

| What you see | What you can do |
| --- | --- |
| **Sign-in failed. Check your username and password.** | Type both again; watch out for capitals and a trailing space. |
| **No connection to the server.** | Check that you are on the same network as the server, or fill in a second address for when you are away (WebDAV only). |
| **The secure connection could not be established.** | The server's certificate is wrong or has expired. Fix it on the server, or use an `http://` address at home. |
| The WebDAV server shows **Read-only** | Point to the folder with your books, not the root of the NAS. The root is often not writable. |
| **No books found** after scanning | Is the folder in the address right? Tap **Refresh** to search again. |
| An OPDS catalog is not found | Enter the full feed address, for example the one ending in `/opds`. |
| A book is listed but does not open | Check that its format is listed under [Which formats the app reads](#formaten-en). CB7 only works through a Grimmory server; a CBR with a password does not work. |
| Server books disappear from the list when you are out | That is on purpose: when the server cannot be reached, the app only shows what is on your device. They come back as soon as the server answers. |

Still stuck? Look under **Help and info** in the app, or go to **[Help &amp;
support](/support/)**.

<nav class="chapter-nav" aria-label="Chapters">
  <a href="index.html">‹ Contents</a>
  <a href="instellingen.html">Settings ›</a>
</nav>

</div>

<div lang="de" markdown="1">

Bücher kommen über eine von vier Quellen in Grim Reader. Tippe auf ein Thema, um
dorthin zu springen.

- [Welche Formate die App liest](#formaten-de)
- [Die Quellen im Überblick](#bronnen-de)
- [Grimmory-Server](#grimmory-de)
- [OPDS-Katalog](#opds-de)
- [WebDAV-Server (NAS oder Nextcloud)](#webdav-de)
- [Dateien auf diesem Gerät](#bestanden-de)
- [Probleme lösen](#problemen-de)

## Welche Formate die App liest
{: #formaten-de}

| Art | Formate |
| --- | --- |
| Bücher | EPUB, PDF |
| Comics | CBZ, CBR (wird beim Hinzufügen einmalig in CBZ umgewandelt); CB7 nur über einen Grimmory-Server |
| Hörbücher | MP3, M4B, M4A, AAC |

## Die Quellen im Überblick
{: #bronnen-de}

Du kannst die Quellen beliebig kombinieren. Bücher aus allen Quellen erscheinen
gemeinsam in Start, Bibliothek, Autoren und Suchen.

| Quelle | Was du brauchst | Geeignet für |
| --- | --- | --- |
| Datei auf diesem Gerät | Eine Buchdatei in der Dateien-App, in iCloud Drive oder auf einem USB-Stick | Einzelne Bücher, schneller Einstieg |
| WebDAV-Server (empfohlen) | Einen freigegebenen Ordner auf deinem NAS oder in Nextcloud | Deine ganze Sammlung, ohne zusätzliche Serversoftware |
| OPDS-Katalog | Die Adresse deines eigenen Katalogs, etwa Calibre-Web oder Komga | Einen vorhandenen Katalogserver |
| Grimmory-Server | Eine eigene Grimmory-Installation mit Konto | Regale, Bibliotheken und Serververwaltung |

**Wo du anfängst.** Hast du noch nichts hinzugefügt, zeigen Start und die
Bibliothek den Bildschirm **Noch keine Bücher**. Dort gibt es zwei Tasten: **Bücher
hinzufügen** für Dateien und **Server hinzufügen** für die drei Serverquellen. Mit
**Erst die Demo ansehen** probierst du die App zuerst mit Beispielbüchern aus.

**Später eine Quelle hinzufügen.** Öffne **Einstellungen › Quellen und Accounts**
und tippe auf **Quelle hinzufügen**. Auf dem iPhone findest du die Einstellungen im
Tab **Mehr**. Hier siehst du auch, ob jede Quelle erreichbar ist; wische eine Quelle
nach links, um sie zu bearbeiten oder zu löschen.

Die App bringt bewusst keine fertigen Kataloge oder Bücher mit. Du verbindest sie
mit deiner eigenen Sammlung.

## Grimmory-Server
{: #grimmory-de}

Mit einem Grimmory-Konto siehst du die ganze Serverbibliothek in der App,
einschließlich Bibliotheken, Regalen und intelligenten Regalen. Du kannst mit einem
Grimmory-Server gleichzeitig verbunden sein.

### Verbinden

1. Tippe auf **Server hinzufügen** (oder **Einstellungen › Quellen und Accounts ›
   Quelle hinzufügen**) und wähle **Grimmory-Server**.
2. Gib unter **Server** die Adresse ein, zum Beispiel `192.168.2.10:6060`. Ohne
   `http://` oder `https://` wählt die App selbst: `https://`, und `http://` für eine
   Adresse in deinem eigenen Netzwerk.
3. Gib unter **Anmelden** deinen **Benutzernamen** und dein **Passwort** ein.
4. Tippe auf **Anmelden**.

Verwendest du eine Adresse mit `http://`, warnt die App, dass deine Daten
unverschlüsselt durchs Netz gehen. Zu Hause ist das meist kein Problem, im WLAN
eines anderen schon.

### Eigene Header: Zugang über einen Proxy
{: #headers-de}

Steht dein Grimmory-Server hinter einem Proxy mit eigener Zugangskontrolle, etwa
Cloudflare Zero Trust (Access), Authelia oder Authentik? Dann blockiert dieser Proxy
die App, bevor der Server deine Anmeldung überhaupt sieht. Ein solcher Proxy lässt
dich anhand eines Headers mit einem Schlüssel durch, und diese Header trägst du hier
ein. Ohne Proxy brauchst du das nicht.

1. Öffne den Anmeldebildschirm: **Server hinzufügen › Grimmory-Server**. Unten steht
   **Eigene Header**.
2. Tippe auf **Header hinzufügen**.
3. Gib den **Namen** ein, zum Beispiel `CF-Access-Client-Id`, und den **Wert**. Der
   Wert ist verborgen; mit dem Auge machst du ihn sichtbar.
4. Wiederhole das für jeden Header. Eine Zeile löschst du, indem du sie nach links
   wischst.
5. Tippe auf **Anmelden**. Die App speichert die Header vor der Anmeldung, damit der
   Proxy auch die Anmeldung selbst durchlässt.

**Beispiel: Cloudflare Access.** Erstelle in Cloudflare Zero Trust ein Service-Token
und erlaube dieses Token in der Access-Richtlinie deines Servers (Aktion Service
Auth). Trage danach zwei Header ein:

| Name | Wert |
| --- | --- |
| `CF-Access-Client-Id` | Die Client-ID des Service-Tokens |
| `CF-Access-Client-Secret` | Das Client-Secret des Service-Tokens |

**Regeln.** Ein Name darf keine Leerzeichen enthalten und ein Wert keinen
Zeilenumbruch. Die Namen `Authorization`, `Content-Type`, `Content-Length`, `Host`,
`Connection` und `Transfer-Encoding` setzt die App selbst; die kannst du nicht
überschreiben. Eine Zeile, die diese Regeln verletzt, überspringt die App; du siehst
dann eine orange Warnung unter den Headern.

**Sicherheit.** Die Header, auch die Werte, liegen im Schlüsselbund deines Geräts.
Sie gehen nur an deinen Grimmory-Server, nie an andere Dienste wie Open Library oder
einen OPDS-Katalog.

**Später ändern.** Melde dich ab und öffne den Anmeldebildschirm erneut. Deine
gespeicherten Header sind dort schon eingetragen.

### Ein Buch laden

1. Suche das Buch über Start, Bibliothek oder Suchen und tippe darauf.
2. Tippe auf dem Buchbildschirm auf **Laden**. Ist der Download fertig, wird daraus
   **Lesen** (oder **Weiterlesen**, wenn du schon angefangen hattest).
3. Für eine ganze Reihe oder einen Autor tippst du in dieser Liste auf **Alle
   laden**. Du siehst, wie viele Bücher fertig sind und welche nicht geklappt haben.

Ein geladenes Buch bleibt offline lesbar. Dein Fortschritt geht an den Server
zurück, sobald er erreichbar ist. **Download entfernen** löscht nur die Kopie auf
deinem Gerät; das Buch bleibt auf dem Server.

### Server wechseln

Um dich mit einem anderen Grimmory-Server zu verbinden, meldest du dich zuerst ab.
Beim Verbinden mit einem neuen Server entfernt die App die geladenen Bücher des
vorigen Servers samt ihren Favoriten und Sammlungen. Selbst importierte Bücher und
Bücher von WebDAV bleiben erhalten.

## OPDS-Katalog
{: #opds-de}

OPDS ist ein Standard, mit dem Buchserver wie Calibre-Web, Komga oder Kavita ihren
Katalog teilen. Du fügst deinen eigenen Katalog hinzu, blätterst darin und lädst
Bücher auf dein Gerät. Die App bringt selbst keine Kataloge mit.

### Einen Katalog hinzufügen

1. Tippe auf **Server hinzufügen** (oder **Einstellungen › Quellen und Accounts ›
   Quelle hinzufügen**) und wähle **OPDS-Katalog**.
2. Gib dem Katalog einen **Namen**.
3. Gib die **Server- oder Feed-Adresse** ein. Die Serveradresse genügt, zum Beispiel
   `https://demo.komga.org`; die App sucht den OPDS-Feed dann selbst. Du siehst
   **Katalog wird gesucht…** und danach die gefundene Adresse.
4. Verlangt der Katalog eine Anmeldung, gib unter **Anmelden (optional)**
   Benutzername und Passwort ein.
5. Tippe auf **Speichern**.

Das Feld **Suche (optional)** lässt du meist leer: Die App fragt den Katalog selbst
nach seiner Suchadresse. Funktioniert die Suche nicht, gib die Suchadresse mit
`{searchTerms}` an der Stelle des Suchbegriffs ein.

### Ein Buch laden

1. Öffne **Quellen**: auf dem iPad in der Seitenleiste, auf dem iPhone unter
   **Mehr**. Deine Kataloge stehen unter der Überschrift **OPDS**.
2. Tippe auf den Katalog und blättere durch die Bereiche oder suche einen Titel. Mit
   dem Ansichtsmenü wechselst du zwischen **Als Raster zeigen** und **Als Liste
   zeigen**.
3. Tippe auf ein Buch. Du siehst Cover, Beschreibung, Themen und Buchinformationen.
4. Tippe auf **Laden**. Einen unterbrochenen Download setzt du mit **Download
   fortsetzen** fort.

Nach dem Laden steht das Buch bei deinen anderen Büchern und bleibt offline lesbar.
Bietet ein Katalog ein Buch nur zum Kauf, zur Ausleihe oder online an, meldet die
App, dass es nicht geladen werden kann.

## WebDAV-Server (NAS oder Nextcloud)
{: #webdav-de}

WebDAV ist der empfohlene Weg für eine ganze Sammlung: Du gibst einen freigegebenen
Ordner auf deinem NAS oder in Nextcloud an, und die App baut daraus selbst eine
Bibliothek. Serversoftware ist nicht nötig. Titel, Autor, Reihe und Cover liest die
App aus den Dateien selbst.

### Einen Server hinzufügen

1. Tippe auf **Server hinzufügen** (oder **Einstellungen › Quellen und Accounts ›
   Quelle hinzufügen**) und wähle **WebDAV-Server**.
2. Gib dem Server einen **Namen**, zum Beispiel „NAS zu Hause".
3. Gib die **Adresse** ein, einschließlich des Ordners mit deinen Büchern, zum
   Beispiel `http://192.168.2.17:5000/Ebooks`.
4. Gib **Benutzername** und **Passwort** ein. Das Passwort wird nur im
   Schlüsselbund dieses Geräts gespeichert.
5. Tippe auf **Verbindung testen**, um zu prüfen, ob die App den Ordner erreicht.
6. Tippe auf **Speichern**.

### Unterwegs: eine zweite Adresse
{: #onderweg-de}

Zu Hause erreichst du dein NAS über eine lokale Adresse, etwa
`http://192.168.2.17:5000/Ebooks`. Außer Haus funktioniert diese Adresse nicht.
Erreichst du dein NAS unterwegs über Tailscale oder ein VPN, hat es dort eine andere
Adresse. Mit einer zweiten Adresse findet die App deine Bücher an beiden Orten.

1. Öffne den Server: **Einstellungen › Quellen und Accounts**, wische den Server nach
   links und tippe auf **Bearbeiten**. Bei einem neuen Server trägst du sie gleich mit
   ein.
2. Trage unter **Unterwegs** bei **Zweite Adresse (optional)** die Adresse ein, die du
   über das VPN verwendest. Zum Beispiel die Tailscale-Adresse
   `http://100.64.12.34:5000/Ebooks` oder den Tailscale-Namen
   `http://nas.dein-tailnet.ts.net:5000/Ebooks`.
3. Nur die IP-Adresse oder der Hostname darf sich unterscheiden (und bei Bedarf der
   Port oder http/https). Der Pfad dahinter, hier `/Ebooks`, muss gleich sein.
   Unterscheidet sich der Pfad oder ist es dieselbe Adresse wie oben, warnt die App.
4. Tippe auf **Verbindung testen**. Zu Hause meldet die App oft **Die zweite Adresse
   antwortet gerade nicht**. Das ist normal, solange das VPN aus ist. Willst du es
   wirklich ausprobieren, schalte WLAN aus und das VPN ein und teste erneut.
5. Tippe auf **Speichern**.

So funktioniert es:

- Die App verwendet immer zuerst die erste Adresse. Antwortet sie nicht, wechselt sie
  zur zweiten.
- Pro Server merkt sich die App, welche Adresse funktioniert, auch nach einem
  Neustart. So wartest du unterwegs nicht jedes Mal auf eine Zeitüberschreitung der
  Heimadresse.
- Antwortet auch die zweite Adresse nicht, liegt es an deiner Verbindung. Beim
  nächsten Versuch probiert die App zuerst wieder die Heimadresse.
- Deine Bibliothek ändert sich nicht: Es wird nichts neu durchsucht, und
  Lesefortschritt und Favoriten bleiben erhalten. Nur der Weg zum Server ist ein
  anderer.

Eine zweite Adresse gibt es nur bei einem WebDAV-Server.

### Die Bibliothek durchsuchen

Öffne **Quellen** (iPad: Seitenleiste; iPhone: **Mehr**) und tippe unter **WebDAV**
auf deinen Server. Du hast dann zwei Möglichkeiten:

- **Bibliothek durchsuchen**: Die App liest alle Bücher ein. Danach kannst du suchen,
  und Start und Autoren füllen sich. Bei einer großen Sammlung dauert das etwas; du
  kannst mit **Pausieren** unterbrechen und später **Fortsetzen**.
- **Ordner durchsuchen**: Du gehst sofort durch die Ordner auf dem Server. Praktisch,
  wenn du nur ein Buch holen willst.

Liegt auf dem Server eine Datei `.grimreader/books.yaml`, ist die Bibliothek auf
einmal da statt Ordner für Ordner.

### Ein Buch laden

1. Tippe auf ein Buch in der Liste oder in einem Ordner.
2. Tippe auf **Laden** (bei einem Hörbuch: **Laden, um offline zu hören**).
3. Danach tippst du auf das Buch, um es zu lesen. **Download entfernen** löscht die
   Kopie wieder von deinem Gerät; die Datei auf dem Server bleibt.

Für einen ganzen Ordner, eine Reihe oder einen Autor verwendest du **Alle laden**.

## Dateien auf diesem Gerät
{: #bestanden-de}

Liegt eine Buchdatei schon auf deinem iPhone oder iPad, in iCloud Drive oder auf
einem USB-Stick, importierst du sie direkt. Das Buch steht danach unter **Auf dem
Gerät** und ist immer offline lesbar.

### Einzelne Dateien auswählen

1. Öffne **Auf dem Gerät** und tippe auf **Bücher hinzufügen** (das Pluszeichen).
   Hast du noch keine Bücher, steht die Taste mitten auf dem Bildschirm.
2. Wähle **Dateien auswählen…**.
3. Wähle in der Dateien-App eine oder mehrere Dateien aus und tippe auf **Öffnen**.

### Einen ganzen Ordner oder USB-Stick

1. Tippe auf **Bücher hinzufügen** und wähle **Ordner oder USB-Stick scannen…**.
2. Wähle den Ordner. Die App findet darin alle lesbaren Bücher, auch in
   Unterordnern.
3. Du siehst den Fortschritt („12 von 40"). Mit **Stoppen** brichst du ab; am Ende
   meldet die App, wie viele Bücher importiert wurden und welche nicht geklappt
   haben. Tippe auf **Fertig**.

### Aus einer anderen App oder per AirDrop

Ein EPUB, PDF, einen Comic (CBZ oder CBR) oder ein Hörbuch kannst du auch aus einer
anderen App an Grim Reader schicken. Tippe in dieser App (Mail, Safari, Dateien) auf
das Teilen-Symbol und wähle **Grim Reader**. Eine per AirDrop empfangene Datei
öffnest du genauso mit Grim Reader.

Einen CBR-Comic wandelt die App beim Importieren einmalig in CBZ um; du siehst dann
**Comic wird vorbereitet…**. Einen CBR mit Passwort oder in mehreren Teilen kann die
App nicht lesen.

## Probleme lösen
{: #problemen-de}

Die meisten Probleme beim Hinzufügen liegen an der Adresse oder an den
Anmeldedaten. Beginne bei WebDAV immer mit **Verbindung testen**.

| Was du siehst | Was du tun kannst |
| --- | --- |
| **Anmeldung fehlgeschlagen. Prüfe Benutzername und Passwort.** | Gib beides erneut ein; achte auf Groß- und Kleinschreibung und ein Leerzeichen am Ende. |
| **Keine Verbindung zum Server.** | Prüfe, ob du im selben Netzwerk wie der Server bist, oder trage eine zweite Adresse für unterwegs ein (nur WebDAV). |
| **Die sichere Verbindung kam nicht zustande.** | Das Zertifikat des Servers stimmt nicht oder ist abgelaufen. Behebe das auf dem Server, oder verwende zu Hause eine `http://`-Adresse. |
| Der WebDAV-Server zeigt **Schreibgeschützt** | Gib den Ordner mit deinen Büchern an, nicht den Hauptordner des NAS. Der ist oft nicht beschreibbar. |
| **Keine Bücher gefunden** nach dem Durchsuchen | Stimmt der Ordner in der Adresse? Tippe auf **Aktualisieren**, um erneut zu suchen. |
| Ein OPDS-Katalog wird nicht gefunden | Gib die vollständige Feed-Adresse ein, zum Beispiel die, die auf `/opds` endet. |
| Ein Buch steht da, öffnet sich aber nicht | Prüfe, ob sein Format unter [Welche Formate die App liest](#formaten-de) steht. CB7 geht nur über einen Grimmory-Server; ein CBR mit Passwort gar nicht. |
| Serverbücher verschwinden unterwegs aus der Liste | Das ist Absicht: Ist der Server nicht erreichbar, zeigt die App nur, was auf deinem Gerät liegt. Sie kommen zurück, sobald der Server antwortet. |

Kommst du nicht weiter? Schau in der App unter **Hilfe und Infos** nach, oder geh zu
**[Hilfe &amp; Support](/support/)**.

<nav class="chapter-nav" aria-label="Kapitel">
  <a href="index.html">‹ Inhalt</a>
  <a href="instellingen.html">Einstellungen ›</a>
</nav>

</div>
