import { useEffect, useState } from '@wordpress/element';

const SC_SECRET = 'st_7U7moiLnqfUT2c5Zks5eFJzq';

// Global cache to prevent multiple API calls
let cachedResult = null;
let cachePromise = null;

/**
 * Check license status from SureCart API (with caching)
 * @returns {Promise<boolean>} - isProActive status
 */
async function checkLicense(licenseId, localKey, token, signal) {
  // No id/key => definitely false
  if (!licenseId || !localKey) {
    return false;
  }

  try {
    const res = await fetch(
      `https://api.surecart.com/v1/licenses/${encodeURIComponent(licenseId)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        },
        signal
      }
    );

    if (!res.ok) {
      return false;
    }

    const data = await res.json();
    const apiKey = String(data?.key || '');
    return apiKey === localKey;
  } catch {
    if (!signal?.aborted) {
      return false;
    }
    throw new Error('Aborted');
  }
}

/**
 * Returns a single boolean: isProActive
 * Uses global caching to prevent multiple API calls across blocks
 */
export default function getProActive({
  licenseId = window?.FrontisBlocksData?.sc_license_id || '',
  localKey = window?.FrontisBlocksData?.sc_license_key || '',
  token = SC_SECRET,
} = {}) {

  const [isProActive, setIsProActive] = useState(
    // Use cached result if available for instant render
    cachedResult !== null ? cachedResult : true
  );

  useEffect(() => {
    const ac = new AbortController();

    async function run() {
      // If we already have a cached result, use it immediately
      if (cachedResult !== null) {
        setIsProActive(cachedResult);
        return;
      }

      // If another component is already fetching, wait for that result
      if (cachePromise) {
        try {
          const result = await cachePromise;
          setIsProActive(result);
        } catch {
          // Ignore aborted requests
        }
        return;
      }

      // First component to request - make the API call
      cachePromise = checkLicense(licenseId, localKey, token, ac.signal);

      try {
        const result = await cachePromise;
        cachedResult = result; // Cache the result globally
        setIsProActive(result);
      } catch {
        // Request was aborted, reset promise so next component can try
        if (ac.signal.aborted) {
          cachePromise = null;
        } else {
          cachedResult = false;
          setIsProActive(false);
        }
      }
    }

    run();

    return () => ac.abort();
  }, [licenseId, localKey, token]);

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