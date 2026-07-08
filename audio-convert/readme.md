# Audio Convert

Part of SCH-Tools. A browser based audio converter, no uploads, no server, no accounts.

## What it does

Converts audio files to MP3 or WAV entirely on your own machine. Drop a file in, pick a format, download the result. Nothing gets sent anywhere.

## Supported input

Anything your browser can decode, including:

- m4a / aac
- wav
- ogg
- flac
- mp3

## Supported output

- MP3 (128, 192, or 320 kbps)
- WAV

## How it works

The tool decodes audio using the Web Audio API, then encodes to MP3 using [lamejs](https://github.com/zhuker/lamejs) or writes a WAV container directly. All processing happens client side in JavaScript. Files are never uploaded, so there is no privacy or bandwidth cost to converting.

## Known limitation

MP3 encoding needs a standard sample rate. 44.1kHz and 48kHz cover the vast majority of files and work fine. A file with an unusual sample rate may fail to encode as MP3, use the WAV output instead in that case.

## Usage

Open `audio-convert.html` in a browser, or visit the hosted version on GitHub Pages. Drop one or more files, choose your output format, hit convert, download.
