self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Pas de connexion Internet', {
        headers: { 'Content-Type': 'text/plain' }
      });
    })
  );
});
