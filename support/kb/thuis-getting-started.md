---
layout: kb
title: Thuis — complete setup guide
description: What Thuis needs from Home Assistant and PlugChoice and why, how to connect, and what every screen does — including the experimental battery, tariff and heat-pump explorations.
---

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

Head to **[Help & support](/support/)** to report a problem, suggest an
improvement or ask a question.
