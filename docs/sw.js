/* Same-origin registration stub (service workers are origin-bound);
   the worker LOGIC is the baas-hosted generated sw — one importScripts.
   Configure it in hono-aep-baas-config (site.app.cacheName). */
importScripts(
  "https://bastarter.the-montiapple.workers.dev/v1/projects/saastarter3/site/sw.js",
);
