# AnyPNG

A browser based HEIC/WEBP/AVIF to PNG converter. Part of tools.antdavis.com

## What it does

Drop in one or more HEIC/HEIF files (the format iPhones save photos in by default), WEBP images, or AVIF images and get back standard PNGs, converted entirely in your browser tab. No files are uploaded to a server.

## Features

- Drag and drop or click to browse
- Batch conversion, handles multiple files at once
- Live status per file (queued, converting, done, error)
- Thumbnail preview once converted
- Download individual PNGs or grab everything at once as a ZIP

## How it works

HEIC/HEIF files are decoded client side using [heic2any](https://github.com/alexcorvi/heic2any). WEBP and AVIF files are decoded natively through an off-screen canvas, since modern browsers can already render both formats, so those convert almost instantly with no extra library. Batch downloads are zipped with [JSZip](https://stuk.github.io/jszip/). heic2any and JSZip load from CDN, so an internet connection is needed on first load, but no image data ever leaves the browser.

## Usage

Open `index.html` in any modern browser, or host it directly via GitHub Pages.

## Notes

Large HEIC batches (20+ files) take a moment to process since HEIC decoding is not instant. WEBP and AVIF files convert almost immediately. AVIF decoding depends on browser support, current Chrome, Edge and Firefox handle it fine, older Safari versions may not. If a file errors out, it is usually already a JPEG or PNG wearing the wrong extension.
