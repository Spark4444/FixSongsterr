# FixSongsterr
A super lightweight extension that injects styles to fix the mobile-like layout on Songsterr.
[Chrome Web Store Link](https://chromewebstore.google.com/detail/fixsongsterr/ofdgegoedmopebnchgmgcdkhhjgoaflc)

## Features
FixSongsterr injects CSS and JavaScript utilities into Songsterr to restore a more desktop-friendly layout and improve user experience.

## Ad Blocking

This feature wasn't intended to be actaully implemented into this extension, but i added it just to troll the Songsterr team. 
Of course i have a premium on songsterr and i basically pay them money to not see ads, perhaps you will find it useful.

The ad blocking itself is quite basic, i block some basic ads with electors and automatically click the continue when it appears when playing the tab with original video.

## Installation

1. Press the blue button `<> Code`.
2. Hover over the `Download Zip` button and click it to download the ZIP version of this repository.

### &nbsp;&nbsp;&nbsp;Or

Use the `git clone` command to copy it onto your computer:
```bash
git clone https://github.com/Spark4444/FixSongsterr
```
3. Go to the extensions tab in your browser.
4. Enable developer mode in the top-right corner.
5. Press the "Load unpacked" button and select the `FixSongsterr` folder from the downloaded files (the one inside the first `FixSongsterr` folder). That's it!

## Sync Chrome JS to Firefox folder

To sync up the version, content scripts and js folders run:

```bash
npm run sync
```