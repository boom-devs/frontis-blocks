import { useEffect, useState } from '@wordpress/element';

const SC_SECRET = 'st_7U7moiLnqfUT2c5Zks5eFJzq';

/**
 * Returns a single boolean: isProActive
 */
export default function getProActive({
  licenseId = window?.FrontisBlocksData?.sc_license_id || '',
  localKey  = window?.FrontisBlocksData?.sc_license_key || '',
  token     = SC_SECRET,
} = {}) {

  console.log(licenseId, localKey, token);
  const [isProActive, setIsProActive] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    async function run() {
      // no id/key => definitely false
      if (!licenseId || !localKey) {
        setIsProActive(false);
        return;
      }

      try {
        const res = await fetch(
          `https://api.surecart.com/v1/licenses/${encodeURIComponent(licenseId)}`,
          { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }, signal: ac.signal }
        );
        if (!res.ok) { setIsProActive(false); return; }

        const data  = await res.json();
        const apiKey = String(data?.key || '');
        setIsProActive(apiKey === localKey);
      } catch {
        if (!ac.signal.aborted) setIsProActive(false);
      }
    }

    run();
    return () => ac.abort();
  }, [licenseId, localKey, token]);

  return isProActive;
}