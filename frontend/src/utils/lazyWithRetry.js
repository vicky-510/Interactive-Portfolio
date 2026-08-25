import { lazy } from 'react';

// After a new deploy, a stale tab still holds old chunk-hash references.
// The dynamic import() 404s, throws, and (with nothing to catch it) leaves
// a blank page. Retry once via a hard reload to pick up the new build,
// but only once per chunk so a genuinely broken import doesn't reload forever.
export default function lazyWithRetry(componentImport, chunkName) {
  return lazy(async () => {
    const storageKey = `chunk-reload-${chunkName}`;

    try {
      const component = await componentImport();
      sessionStorage.removeItem(storageKey);
      return component;
    } catch (error) {
      const alreadyReloaded = sessionStorage.getItem(storageKey);

      if (!alreadyReloaded) {
        sessionStorage.setItem(storageKey, 'true');
        window.location.reload();
        // Keep the lazy boundary pending until the reload takes effect.
        return new Promise(() => {});
      }

      throw error;
    }
  });
}
