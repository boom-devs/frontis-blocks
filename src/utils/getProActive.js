import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

// Global cache to prevent multiple API calls
let cachedResult = null;
let cachePromise = null;

/**
 * Check license status from secure WordPress local REST API (with caching)
 * @returns {Promise<boolean>} - isProActive status
 */
async function checkLicense() {
  try {
    const data = await apiFetch({
      path: '/frontis-blocks/v1/verify-surecart',
      method: 'POST'
    });

    return !!data?.status;
  } catch {
    return false;
  }
}

/**
 * Returns a single boolean: isProActive
 * Uses global caching to prevent multiple API calls across blocks
 */
export default function getProActive() {

  const [isProActive, setIsProActive] = useState(
    // Use cached result if available for instant render, otherwise fall back to PHP-cached localization
    cachedResult !== null 
      ? cachedResult 
      : (window?.FrontisBlocksData?.is_license_active !== false)
  );

  useEffect(() => {
    let isMounted = true;

    async function run() {
      // If we already have a cached result, use it immediately
      if (cachedResult !== null) {
        if (isMounted) {
          setIsProActive(cachedResult);
        }
        return;
      }

      // If another component is not already fetching, start the fetch
      if (!cachePromise) {
        cachePromise = checkLicense();
      }

      try {
        const result = await cachePromise;
        cachedResult = result; // Cache the result globally
        if (isMounted) {
          setIsProActive(result);
        }
      } catch {
        cachedResult = false;
        if (isMounted) {
          setIsProActive(false);
        }
        cachePromise = null; // Reset promise so next run can try again
      }
    }

    run();

    return () => {
      isMounted = false;
    };
  }, []);

  return isProActive;
}

/**
 * Clear the cached license result
 * Call this if you need to force a fresh license check
 */
export function clearProActiveCache() {
  cachedResult = null;
  cachePromise = null;
}