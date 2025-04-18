
import { useEffect } from 'react';

export const useLovableBadgeRemoval = () => {
  useEffect(() => {
    const badge = document.getElementById('lovable-badge');
    if (badge) {
      badge.remove();
    }
  }, []);
};
