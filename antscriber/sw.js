// Antscriber service worker
// Injects COOP + COEP headers so ffmpeg.wasm can use SharedArrayBuffer
// Only affects requests from tools.antdavis.com — no data is read or modified

const CACHE_NAME = 'antscriber-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).then(response => {
      // Only add headers to same-origin responses
      if (!response.url.startsWith(self.location.origin) &&
          !response.url.includes('cdn.jsdelivr.net') &&
          !response.url.includes('unpkg.com')) {
        return response;
      }

      const headers = new Headers(response.headers);
      headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
      headers.set('Cross-Origin-Opener-Policy', 'same-origin');
      headers.set('Cross-Origin-Resource-Policy', 'cross-origin');

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    })
  );
});
