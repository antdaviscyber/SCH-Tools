# FRAMEGRAB

A browser-based tool for pulling still frames out of a video. Load a file, scrub to the moment you want, snap a photo, export the lot as a zip. Runs entirely client-side, no server or backend needed.

## Features

- Drag and drop a local video file, or paste a direct URL to one
- Frame-accurate scrubbing: step by frame, second, or minute in either direction
- Snap a single photo at any point, or auto-snap across the whole video at a percentage or fixed time interval
- Works with any aspect ratio: 16:9, 9:16, 1:1
- Click a captured thumbnail to jump the player straight back to that timestamp
- Export any single frame, or all of them at once as a zip

## Using it

Open `index.html` in any modern browser. That's it, no install, no build step.

## Hosting on GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html` to the root of the repo (drag and drop works fine on the GitHub web UI, via **Add file → Upload files**).
3. Go to **Settings → Pages**.
4. Under **Source**, choose the branch (usually `main`) and folder `/root`.
5. Save. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

It can take a minute or two to go live the first time.

## Notes

- Video URLs only work if the host allows cross-origin access. If a URL loads but capture fails silently, download the file and use the File tab instead.
- Uses [JSZip](https://stuk.github.io/jszip/) (via CDN) for the "Save all" export, and loads the Barber Chop display font from `antdaviscyber/assets` for the title.
