# HeckPNG

A browser based HEIC to PNG converter. Part of SCH-Tools.

## What it does

Drop in one or more HEIC/HEIF files (the format iPhones save photos in by default) and get back standard PNGs, converted entirely in your browser tab. No files are uploaded to a server.

## Features

- Drag and drop or click to browse
- Batch conversion, handles multiple files at once
- Live status per file (queued, converting, done, error)
- Thumbnail preview once converted
- Download individual PNGs or grab everything at once as a ZIP

## How it works

Conversion is handled client side using [heic2any](https://github.com/alexcorvi/heic2any). Batch downloads are zipped with [JSZip](https://stuk.github.io/jszip/). Both libraries load from CDN, so an internet connection is needed on first load, but no image data ever leaves the browser.

## Usage

Open `index.html` in any modern browser, or host it directly via GitHub Pages.

## Notes

Large batches (20+ files) take a moment to process since HEIC decoding is not instant. If a file errors out, it is usually already a JPEG or PNG wearing a `.heic` extension.
