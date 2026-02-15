/**
 * Returns the public base path for asset URLs so one build works on:
 * - localhost (npm start)
 * - dinardavis.com (root)
 * - GitHub Pages (/dinardavis_operations)
 */
export function getPublicUrl() {
  if (typeof window === 'undefined') return '';
  if (window.location.pathname.startsWith('/dinardavis_operations')) return '/dinardavis_operations';
  return '';
}
