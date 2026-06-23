---
layout: kb
title: Grim Reader — complete setup guide
description: From running a Grimmory server to reading, organising and managing your own self-hosted book library with Grim Reader.
---

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

The simplest and recommended way to run Grimmory is with **Docker**. A typical
setup uses a `docker-compose.yml` that points Grimmory at two folders on your
machine:

- a **data** folder, where Grimmory keeps its database and settings;
- one or more **book** folders, where your actual files live.

You point Grimmory at your book folder, it scans the files, reads the metadata
(title, author, series, cover) and builds your library.

> **Get the exact image and compose file from the source.** Image names and
> configuration change over time, so always follow the official instructions
> rather than copying a command from memory. The install guide, the current
> Docker image and an example `docker-compose.yml` are on the Grimmory website:
> **[grimmory.org](https://grimmory.org)**.

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
  you can set the **reading speed** to a pace that suits you.
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

## Something not working?

If you get stuck at any step, head to **[Help & support](/support/)** to report a
problem, suggest an improvement or ask a question.
