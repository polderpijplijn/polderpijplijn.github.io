---
layout: kb
title_nl: Thuis — complete handleiding
title_en: Thuis — complete setup guide
title: Thuis — handleiding / guide
description: What Thuis needs from Home Assistant and PlugChoice and why, how to connect, and what every screen does — including the experimental battery, tariff and heat-pump explorations.
---

<div lang="nl" markdown="1">

Thuis is een persoonlijk energie-dashboard dat gegevens leest uit **je eigen** Home
Assistant en, optioneel, je **PlugChoice**-laadpaal. Er zit geen account en geen
cloud van ons tussen: de app praat alleen met de diensten die je zelf instelt, en
je adres en tokens blijven op je toestel.

Deze gids legt uit wat elke dienst levert en waarom, hoe je verbindt, en wat elk
scherm toont.

## Wat je nodig hebt

- Een draaiende **Home Assistant** met wat energie-sensoren (vereist).
- De **Thuis**-app op je iPhone of iPad.
- Optioneel: een **PlugChoice**-account als je een slimme laadpaal hebt en die wilt
  zien en besturen.

Eerst even rondkijken? Vul **`demo`** in als adres en verbind — de app toont dan
voorbeeldgegevens, zonder dat je iets hoeft in te stellen.

---

## Stap 1 — Home Assistant (vereist)

Home Assistant is het open-source platform voor woningautomatisering. Hieruit haalt
Thuis **al je energiegegevens**. Je host het zelf; Thuis verbindt ermee via het
lokale netwerkadres (of je Nabu Casa-adres) met een token dat je aanmaakt.

### Wat Thuis uit Home Assistant leest, en waarom

| Gegeven | Gebruikt voor | Typische bron |
|---------|---------------|---------------|
| Netvermogen (W) + per fase | De live "net"-tegel: afnemen vs. terugleveren | P1-meter |
| Import-/exporttotalen (kWh) | Dagelijkse/periode-energiebalans en kosten | P1-meter |
| Gastotaal (m³) | Het gasscherm en de warmtepompvergelijking | P1-meter |
| Zonvermogen (W), vandaag en totaal (kWh) | Het zonscherm en de zelfverbruik-berekening | Omvormer-integratie |
| Uurlijkse weersvoorspelling (bewolking %, conditie) | De zelflerende zonvoorspelling en "beste moment"-advies | Weer-integratie (bijv. Met.no) |
| Buitentemperatuur (°C) | Weerscherm en efficiëntie-/warmtepompberekeningen | Weer of een sensor |
| Binnentemperatuur (°C) | Efficiëntiescherm | Thermostaat / climate-entiteit |
| Fossiel aandeel van het net (%) | Groener-moment-advies (optioneel) | Electricity Maps |

### De verbindingsgegevens ophalen

1. Noteer het **adres** van je Home Assistant — lokaal (bijvoorbeeld
   `homeassistant.local:8123` of een lokaal IP) en, optioneel, je **Nabu Casa**-adres
   (`https://….ui.nabu.casa`) zodat de app daarop kan terugvallen als je van huis
   bent.
2. Maak in Home Assistant een **long-lived access token** aan: open je profiel en
   scrol naar onderen (*Long-lived access tokens*). Kopieer het.

### Aanbevolen Home Assistant-integraties

Thuis leest standaard energie-entiteiten. Deze integraties vullen het dashboard:

- Een **P1-meter** — voor net, verbruik, teruglevering en gas. Getest met de
  HomeWizard P1-meter.
- Een **zonnepanelen-integratie** — voor actueel zonvermogen en opbrengst. Thuis
  herkent Enphase, SolarEdge, Fronius, SMA en Huawei SUN2000 automatisch, of je
  wijst de entiteiten met de hand aan.
- Een **weer-integratie** (bijvoorbeeld Met.no of KNMI) — voor de uurlijkse
  bewolkingsvoorspelling en buitentemperatuur.
- Een **thermostaat of warmtepomp** (climate-entiteit) — voor de binnentemperatuur.
- Optioneel: **Electricity Maps** — voor het fossiele aandeel van het net.
- Optioneel: **Forecast.Solar** — een zonvoorspelling (Thuis kan ook zijn eigen
  voorspelling leren van je gemeten productie over tijd).

Wijken je entiteitsnamen af van de standaard, dan pas je ze aan onder
**Instellingen → Verbindingsinstellingen → Entiteiten (geavanceerd)**. Er is een
auto-detectieknop en een "kies uit lijst"-optie zodra je verbonden bent.

---

## Stap 2 — PlugChoice (optioneel, voor je laadpaal)

PlugChoice is het laadplatform achter veel slimme laadpalen. Heb je er een, dan
gebruikt Thuis PlugChoice voor de **live gegevens van je laadpaal** en om het
**laden te besturen**.

### Wat Thuis uit PlugChoice leest, en waarom

- **Laadpaalstatus** (laden, gepauzeerd, beschikbaar, offline) en **live vermogen**
  — voor de laadpaaltegel en het detailscherm.
- **Sessie-, vandaag- en historie-kWh** — voor de laadhistorie en sessiegrafieken.

### Wat Thuis via PlugChoice kan besturen

- Een laadsessie **starten** en **stoppen**.
- De **laadlimiet instellen** met de schuif op het laadscherm. Let op: een
  laadlimiet kan alleen worden gewijzigd *terwijl* de auto daadwerkelijk laadt —
  anders meldt de laadpaal dat die niet in een laadstatus is.

> **De limiet is een plafond, geen belofte.** Het werkelijke laadvermogen is het
> *laagste* van de limiet die je in de app instelt en een eventuele limiet die op
> de laadpaal zelf is ingesteld (bijvoorbeeld in de app van de fabrikant) — die
> lokale instelling is onzichtbaar voor PlugChoice. Daarom toont de schuif het
> **live gemeten vermogen** er direct onder: verhoog de limiet en je ziet meteen
> of de laadpaal echt volgt.

> Start de eerste keer één sessie met je eigen laadpas. Thuis hergebruikt die pas
> om latere sessies vanuit de app te starten, zodat je niets hoeft in te voeren.

### De PlugChoice-token ophalen

Maak in je PlugChoice-account op **app.plugchoice.com** een *personal access token*
aan en plak die in Thuis. Het token blijft op je toestel, en de laadpaalkoppeling
is volledig optioneel.

---

## Stap 3 — Verbinden

1. Open Thuis en ga naar **Instellingen**.
2. Open **Verbindingsinstellingen** en vul in:
   - het **adres** van je Home Assistant (lokaal), en optioneel het **Nabu
     Casa**-adres;
   - je **long-lived access token**;
   - optioneel, je **PlugChoice-token**.
3. Vul optioneel je **prijzen** (gas, normaal/dal-stroom, teruglevering) en
   **contractvorm** in — die bepalen de kostencijfers.
4. Tik op **Verbinden**.

Je tegels vullen zich met live gegevens. De statusregel onderaan Instellingen
toont of je verbonden bent, of de externe verbinding wordt gebruikt, en hoeveel
entiteiten zijn gevonden.

---

## Wat de schermen tonen

Zodra je verbonden bent, heeft de app twee tabbladen: **Thuis** (het live
dashboard) en **Analyses** (de wat-als-schattingen — zie
[Experimentele verkenningen](#experimental-explorations-the-analyses-tab)
hieronder).

Het dashboard heeft tegels die detailschermen openen:

- **Zon** — actuele en historische opbrengst, en de voorspelling (zie
  [De zelflerende zonvoorspelling](#the-self-learning-solar-forecast) hieronder).
- **Net** — live import/export, per fase, en totalen.
- **Verbruik huis** — wat je huis verbruikt.
- **Gas** — gasverbruik en een optionele kostenindicatie.
- **Weer** — buitencondities die de zonvoorspelling gebruikt.
- **Beste moment** — wanneer het het groenst/goedkoopst is om stroom te gebruiken.
- **Laadpaal** — live laadpaalstatus, besturing en historie (PlugChoice).
- **Klimaat** — binnen- en buitentemperatuur en luchtvochtigheid van alle sensoren
  die aan Home Assistant zijn gekoppeld, gegroepeerd per kamer en hernoembaar. Dit
  scherm bevat ook de **ventilatietip**: kies daar een binnen- en een
  buitentemperatuursensor, en het dashboard vertelt wanneer het een goed moment is
  om te luchten (warmer dan 20 °C binnen en merkbaar koeler buiten).
- **Huis Energie Efficiëntie** — hoe je huis presteert, op basis van
  binnentemperatuur, vloeroppervlak en woningtype (stel deze in onder Instellingen).

---

## De zelflerende zonvoorspelling

Het zonscherm toont hoeveel je panelen naar verwachting produceren — zowel het
**verwachte totaal voor vandaag en morgen** als de vorm per uur die het "beste
moment"-advies voedt. In plaats van te leunen op een generieke voorspeldienst,
**leert Thuis zijn eigen voorspelling van je gemeten productie**, zodat het
kalibreert op *jouw* dak: de echte capaciteit, oriëntatie, schaduw en
omvormergedrag.

### Hoe het werkt

De voorspelling combineert twee dingen die de app na verloop van tijd leert:

1. **Een heldere-hemel-omhullende** — voor elk uur van de dag de productie die je
   panelen halen op een bijna heldere dag. Thuis leert dit uit je eigen gemeten
   productie over een voortschrijdend venster van **28 dagen**.
2. **Een wolk-transmissiecurve** — hoeveel de uurlijkse **bewolkingsvoorspelling**
   van je weer-integratie (bijvoorbeeld Met.no) de productie vermindert. Thuis
   leert dit door dag na dag de *voorspelde* bewolking te vergelijken met wat je
   panelen werkelijk produceerden.

Om een dag te voorspellen neemt Thuis de uurlijkse wolkenvoorspelling en
vermenigvuldigt voor elk daglichtuur de heldere-hemelwaarde met de geleerde
transmissie voor dat bewolkingsniveau, en telt de uren op. Omdat het leert tegen de
*voorspelde* bewolking (niet de gemeten bewolking), absorbeert het model ook stil
de systematische afwijking van de weerdienst zelf.

### De verversing rond 3 uur 's nachts

Zodat de voorspelling van vandaag niet afhangt van het moment waarop je toevallig
de app opent, ververst en **bevriest Thuis de voorspelling van vandaag één keer,
vroeg in de ochtend (rond 3 uur)**, via een achtergrondtaak. Vanaf dat moment is
het "verwacht vandaag"-cijfer het cijfer dat 's nachts is vastgelegd — een eerlijke,
vaste voorspelling om de werkelijke productie van de dag mee te vergelijken. Kreeg
de achtergrondtaak geen kans om te draaien (bijvoorbeeld omdat de telefoon uit was),
dan wordt de voorspelling in plaats daarvan bevroren zodra je de app die dag voor
het eerst opent.

### De nauwkeurigheidsgrafiek lezen — doorgetrokken vs. stippellijn

De nauwkeurigheidsgrafiek tekent twee lijnen per dag:

- **Gemeten** — wat je panelen werkelijk produceerden.
- **Voorspeld** — wat het model verwachtte.

Een deel van de voorspellijn is **gestippeld** en een deel **doorgetrokken**, en
het verschil doet ertoe:

- Een **gestippelde** voorspellijn is *gereconstrueerd* — voor dagen voordat de app
  elke ochtend een echte voorspelling begon vast te leggen, schat Thuis achteraf wat
  het *zou* hebben voorspeld. Het is een schatting, geen echte voorspelling.
- Een **doorgetrokken** voorspellijn is een **echte, vooraf vastgezette voorspelling**
  — de waarde die die dag rond 3 uur 's nachts is vastgelegd, voordat de productie
  bekend was.

Het punt waar de lijn van gestippeld naar doorgetrokken gaat, markeert dus **het
moment waarop echte voorspellingen beginnen**. Alleen het doorgetrokken deel is een
echte test van de nauwkeurigheid van de voorspelling.

### Aan de slag en nauwkeurigheid over tijd

Het model heeft gegevens nodig om te leren. In de **eerste week of twee** is de
heldere-hemel-omhullende nog dun, dus valt Thuis terug op een grovere schatting op
basis van de weersconditie uit de voorspelling (zonnig / half bewolkt / bewolkt /
regenachtig) en wordt merkbaar scherper naarmate de productiehistorie groeit. De
nauwkeurigheid zakt ook een tijdje **na een seizoenswisseling**, omdat de
omhullende de nieuwe zonstand opnieuw moet leren. Een langere historie (idealiter
meer dan een jaar, zodat elk seizoen is gedekt) geeft de beste resultaten. Zoals de
app aangeeft: aan de nauwkeurigheid van de voorspelling kunnen geen rechten worden
ontleend.

---

## Prijzen en contractvorm

Onder **Instellingen** kun je invullen:

- **Gasprijs** (€/m³) en **stroomprijzen** (normaal, dal, teruglevering). Het
  daltarief geldt ma–vr 23:00–07:00 en het hele weekend (standaard NL).
- **Contractvorm** voor stroom en gas: *vast* of *dynamisch*. Voor een dynamisch
  contract vraagt de app om je inkoopopslag (excl. btw); btw en energiebelasting
  telt de app er zelf bij op.

Laat een veld leeg om dat cijfer te verbergen.

---

## Experimentele verkenningen (het Analyses-tabblad)

Thuis bevat drie vooruitkijkende tools die **schatten** wat er *zou* kunnen gebeuren
als je je opstelling verandert. Ze staan samen in het aparte **Analyses**-tabblad,
met de disclaimer bovenaan. Ze zijn bewust bij benadering en bedoeld om een gevoel
voor de orde van grootte te geven — niet om een aankoop op te plannen.

> **⚠️ Deze functies zijn experimenteel. Er kunnen geen rechten aan worden ontleend.**
> De cijfers zijn schattingen op basis van je gemeten gegevens en algemene
> aannames. Ze zijn geen advies en vervangen geen goede berekening door een
> gekwalificeerde installateur of energieadviseur.

### Huisbatterij

Schat een aanbevolen capaciteit en de jaarlijkse besparing voor een kleine
plug-in-thuisbatterij, op basis van je dagelijkse zonoverschot en import. Het gaat
uit van een bescheiden plug-in-batterij (ongeveer 800 W, over de dag ladend/ontladend)
en toont de besparing onder zowel een vast als een dynamisch tarief. Op bewolkte of
winterdagen laadt zo'n batterij nauwelijks — de schatting weerspiegelt dat, maar het
blijft een schatting.

### Vast vs. dynamisch tarief

Vergelijkt wat je stroom zou hebben gekost op een vast contract versus een dynamisch
(uurlijks markt-)contract, met je echte verbruik en historische marktprijzen plus
energiebelasting en btw. Prijzen uit het verleden bieden geen garantie voor de
toekomst, dus behandel de uitkomst als een grove indicatie.

### Warmtepomp

Schat de warmtepompcapaciteit die je huis nodig zou hebben (afgeleid van je gemeten
gasverbruik en buitentemperaturen), simuleert het stroom- en resterend gasverbruik
voor een hybride of volledig elektrische opstelling, schat het jaarlijkse
kostenverschil, en stelt passende pompen voor uit een referentielijst. De app zelf
stelt dat het geen goede warmteverliesberekening door een installateur kan
vervangen — er is minstens één volledig stookseizoen aan gegevens nodig voordat het
iets kan schatten.

---

## Privacy

Thuis verzamelt geen gegevens en bevat geen tracking of advertenties. Je adres en
tokens blijven versleuteld op je eigen toestel, en de app praat alleen met de
diensten die je zelf instelt.

---

## Werkt er iets niet?

Ga naar **[Help &amp; support](/support/)** om een probleem te melden, een
verbetering voor te stellen of een vraag te stellen.

</div>

<div lang="en" markdown="1">

Thuis is a personal energy dashboard that reads data from **your own** Home
Assistant and, optionally, your **PlugChoice** charger. There is no account and no
cloud of ours in between: the app talks only to the services you set up yourself,
and your address and tokens stay on your device.

This guide explains what each service provides and why, how to connect, and what
every screen shows.

## What you need

- A running **Home Assistant** with some energy sensors (required).
- The **Thuis** app on your iPhone or iPad.
- Optional: a **PlugChoice** account if you have a smart charger and want to see
  and control it.

Just want to look around first? Enter **`demo`** as the address and connect — the
app then shows example data, with nothing to set up.

---

## Step 1 — Home Assistant (required)

Home Assistant is the open-source home-automation platform. It's where Thuis gets
**all your energy data**. You host it yourself; Thuis connects to it over its
local network address (or your Nabu Casa remote address) using a token you create.

### What Thuis reads from Home Assistant, and why

| Data | Used for | Typical source |
|------|----------|----------------|
| Grid power (W) + per-phase | The live "grid" tile: importing vs. exporting | P1 meter |
| Import / export totals (kWh) | Daily/period energy balance and cost | P1 meter |
| Gas total (m³) | The gas screen and heat-pump comparison | P1 meter |
| Solar power (W), today & lifetime (kWh) | The solar screen and self-use calculation | Inverter integration |
| Hourly weather forecast (cloud %, condition) | The self-learning solar forecast and "best time" advice | Weather integration (e.g. Met.no) |
| Outdoor temperature (°C) | Weather screen and efficiency/heat-pump calculations | Weather or a sensor |
| Indoor temperature (°C) | Efficiency screen | Thermostat / climate entity |
| Fossil share of the grid (%) | Greener-moment advice (optional) | Electricity Maps |

### Getting the connection details

1. Note your Home Assistant **address** — local (for example
   `homeassistant.local:8123` or a local IP) and, optionally, your **Nabu Casa**
   remote address (`https://….ui.nabu.casa`) so the app can fall back to it when
   you're away from home.
2. In Home Assistant, create a **long-lived access token**: open your profile and
   scroll to the bottom (*Long-lived access tokens*). Copy it.

### Recommended Home Assistant integrations

Thuis reads standard energy entities. These integrations populate the dashboard:

- A **P1 meter** — for grid, usage, feed-in and gas. Tested with the HomeWizard
  P1 meter.
- A **solar panel integration** — for current solar power and production. Thuis
  recognises Enphase, SolarEdge, Fronius, SMA and Huawei SUN2000 automatically,
  or you can point it at the entities by hand.
- A **weather integration** (for example Met.no or KNMI) — for the hourly cloud
  forecast and outdoor temperature.
- A **thermostat or heat pump** (climate entity) — for the indoor temperature.
- Optional: **Electricity Maps** — for the fossil share of the grid.
- Optional: **Forecast.Solar** — a solar forecast (Thuis can also learn its own
  forecast from your measured production over time).

If your entity names differ from the defaults, you can change them under
**Settings → Connection settings → Entities (advanced)**. There's an
auto-detect button, and a "pick from list" option once you're connected.

---

## Step 2 — PlugChoice (optional, for your charger)

PlugChoice is the charging platform behind many smart chargers. If you have one,
Thuis uses PlugChoice for the **live data of your charger** and to **control
charging**.

### What Thuis reads from PlugChoice, and why

- **Charger status** (charging, paused, available, offline) and **live power** —
  for the charger tile and detail screen.
- **Session, today and history kWh** — for the charging history and session
  charts.

### What Thuis can control via PlugChoice

- **Start** and **stop** a charging session.
- **Set the charge limit** with the slider on the charging screen. Note: a charge
  limit can only be changed *while* the car is actually charging — otherwise the
  charger reports it's not in a charging state.

> **The limit is a ceiling, not a promise.** The actual charging power is the
> *lowest* of the limit you set in the app and any limit configured on the
> charger itself (for example in the manufacturer's own app) — that local
> setting is invisible to PlugChoice. That's why the slider shows the **live
> measured power** right below it: raise the limit and you can immediately see
> whether the charger actually follows.

> The first time, start a session once with your own charge card. Thuis reuses
> that card to start later sessions from the app, so you don't have to enter
> anything.

### Getting the PlugChoice token

In your PlugChoice account at **app.plugchoice.com**, create a *personal access
token* and paste it into Thuis. The token stays on your device, and the charger
connection is entirely optional.

---

## Step 3 — Connecting

1. Open Thuis and go to **Settings**.
2. Open **Connection settings** and fill in:
   - your Home Assistant **address** (local), and optionally the **Nabu Casa**
     remote address;
   - your **long-lived access token**;
   - optionally, your **PlugChoice token**.
3. Optionally fill in your **prices** (gas, normal/off-peak electricity, feed-in)
   and **contract type** — these drive the cost figures.
4. Tap **Connect**.

Your tiles fill with live data. The status line at the bottom of Settings shows
whether you're connected, whether it's using the remote connection, and how many
entities were found.

---

## What the screens show

Once connected, the app has two tabs: **Thuis** (the live dashboard) and
**Analyses** (the what-if estimates — see
[Experimental explorations](#experimental-explorations-the-analyses-tab) below).

The dashboard has tiles that open detailed screens:

- **Solar (Zon)** — current and historical production, and the forecast (see
  [The self-learning solar forecast](#the-self-learning-solar-forecast) below).
- **Grid (Net)** — live import/export, per phase, and totals.
- **House usage (Verbruik huis)** — what your home is consuming.
- **Gas** — gas usage and an optional cost indication.
- **Weather (Weer)** — outdoor conditions used by the solar forecast.
- **Best time (Beste moment)** — when it's greenest/cheapest to use power.
- **Charger (Laadpaal)** — live charger status, control and history (PlugChoice).
- **Climate (Klimaat)** — indoor and outdoor temperature and humidity from any
  sensors connected to Home Assistant, grouped per room and renameable. This
  screen also holds the **ventilation tip**: pick an indoor and an outdoor
  temperature sensor there, and the dashboard tells you when it's a good moment
  to air the house (warmer than 20 °C inside and noticeably cooler outside).
- **Home efficiency (Huis Energie Efficiëntie)** — how your home performs, based
  on indoor temperature, floor area and house type (set these under Settings).

---

## The self-learning solar forecast

The solar screen shows how much your panels are expected to produce — both the
**expected total for today and tomorrow** and the per-hour shape that feeds the
"best time" advice. Instead of relying on a generic forecast service, Thuis
**learns its own forecast from your measured production**, so it calibrates to
*your* roof: its real capacity, orientation, shading and inverter behaviour.

### How it works

The forecast combines two things the app learns over time:

1. **A clear-sky envelope** — for each hour of the day, the production your panels
   reach on a near-clear day. Thuis learns this from your own measured production
   over a rolling **28-day** window.
2. **A cloud-transmission curve** — how much the hourly **cloud-cover forecast**
   from your weather integration (for example Met.no) reduces production. Thuis
   learns this by comparing, day after day, the *forecast* cloud cover against what
   your panels actually produced.

To predict a day, Thuis takes the hourly cloud forecast and, for each daylight
hour, multiplies the clear-sky value by the learned transmission for that cloud
level, then adds the hours up. Because it learns against the *forecast* cloud (not
the measured cloud), the model also quietly absorbs the systematic bias of the
weather service itself.

### The ~3 AM background refresh

So that today's forecast doesn't depend on the moment you happen to open the app,
Thuis refreshes and **freezes today's forecast once, early in the morning (around
3 AM)**, using a background task. From then on, the "expected today" figure is the
one that was locked in overnight — a fair, fixed prediction to compare the day's
real production against. If the background task didn't get a chance to run (for
example the phone was off), the forecast is frozen instead the first time you open
the app that day.

### Reading the accuracy chart — solid vs. dashed lines

The accuracy chart plots two lines per day:

- **Measured** — what your panels actually produced.
- **Predicted** — what the model expected.

Part of the predicted line is **dashed** and part is **solid**, and the difference
matters:

- A **dashed** predicted line is *reconstructed* — for days before the app started
  freezing a real forecast each morning, Thuis estimates afterwards what it *would*
  have predicted. It's a best-effort estimate, not a real prediction.
- A **solid** predicted line is a **real, pre-frozen forecast** — the value that was
  actually locked in around 3 AM that day, before production was known.

So the point where the line turns from dashed to solid marks **the moment real
predictions begin**. Only the solid part is a genuine test of the forecast's
accuracy.

### Getting started and accuracy over time

The model needs data to learn. In the **first week or two** the clear-sky envelope
is still thin, so Thuis falls back to a coarser estimate based on the forecast's
weather condition (sunny / partly cloudy / cloudy / rainy) and gets noticeably
sharper as production history builds up. Accuracy also dips for a while **after a
season change**, because the envelope has to relearn the new sun height. A longer
history (ideally more than a year, so every season is covered) gives the best
results. As the app notes: no rights can be derived from the accuracy of the
forecast.

---

## Prices and contract type

Under **Settings** you can enter:

- **Gas price** (€/m³) and **electricity prices** (normal, off-peak, feed-in). The
  off-peak rate is applied Mon–Fri 23:00–07:00 and all weekend (standard NL).
- **Contract type** for electricity and gas: *fixed* or *dynamic*. For a dynamic
  contract the app asks for your purchasing surcharge (excl. VAT); it adds VAT and
  energy tax itself.

Leave a field blank to hide that figure.

---

## Experimental explorations (the Analyses tab)

Thuis includes three forward-looking tools that **estimate** what *could* happen
if you changed your setup. They live together in the separate **Analyses** tab,
with the disclaimer shown right at the top. They are deliberately approximate and
meant to give a feel for the order of magnitude — not to plan a purchase on.

> **⚠️ These features are experimental. No rights can be derived from them.**
> The figures are estimates based on your measured data and general assumptions.
> They are not advice, and they do not replace a proper calculation by a
> qualified installer or energy advisor.

### Home battery (Huisbatterij)

Estimates a recommended capacity and the yearly saving for a small plug-in home
battery, based on your daily solar surplus and import. It assumes a modest plug-in
battery (around 800 W, charging/discharging over the day) and shows the saving
under both a fixed and a dynamic tariff. On cloudy or winter days such a battery
barely charges — the estimate reflects that, but it remains an estimate.

### Fixed vs. dynamic tariff (Vast vs. dynamisch)

Compares what your electricity would have cost on a fixed contract versus a
dynamic (hourly market) contract, using your real usage and historical market
prices plus energy tax and VAT. Past prices are no guarantee for the future, so
treat the outcome as a rough indication.

### Heat pump (Warmtepomp)

Estimates the heat-pump capacity your home would need (derived from your measured
gas use and outdoor temperatures), simulates the electricity and remaining-gas use
for a hybrid or all-electric setup, estimates the yearly cost difference, and
suggests matching pumps from a reference list. The app itself states it cannot
replace a proper heat-loss calculation by an installer — at least one full heating
season of data is needed before it can estimate anything.

---

## Privacy

Thuis collects no data and contains no tracking or ads. Your address and tokens
stay encrypted on your own device, and the app only talks to the services you set
up yourself.

---

## Something not working?

Head to **[Help &amp; support](/support/)** to report a problem, suggest an
improvement or ask a question.

</div>
