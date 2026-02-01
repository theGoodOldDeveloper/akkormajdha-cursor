# Akkor majd ha...

Weboldal bölcsességek és gondolatok publikálására vicces, szarkasztikus stílusban.

## Telepítés

```bash
npm install
```

## Futtatás

```bash
npm start
```

A szerver a `http://localhost:4010` címen fut.

## Fejlesztés

```bash
npm run dev
```

## Domain név ajánlások

- **akkormajdha.hu** - Rövid, egyedi, könnyen megjegyezhető
- **majdakkorha.hu** - Közvetlenül a témához kapcsolódik
- **halogatasmuveszete.hu** - Leíró, kreatív
- **majdakkor.com** - Rövid, nemzetközi
- **akkormajdha.com** - Egyedi, könnyen írható

## Háttérkép generálás

A háttérképhez használd ezt a prompt-ot egy képgeneráló eszközzel (pl. DALL-E, Midjourney, Stable Diffusion):

**Prompt:** "Abstract pastel gradient background with soft flowing colors in shades of lavender, pink, peach, and mint green. Dreamy, ethereal atmosphere with subtle light rays and gentle color transitions. Modern, minimalist aesthetic suitable for a philosophical wisdom website. Soft focus, no harsh edges, calming and contemplative mood."

A generált képet mentsd el `public/background.jpg` néven.

## Struktúra

- `server.js` - Express szerver
- `public/index.html` - Főoldal HTML
- `public/styles.css` - Stílusok
- `public/script.js` - JavaScript funkcionalitás
- `.env` - Környezeti változók
