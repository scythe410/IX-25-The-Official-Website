
'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';

export default function PageClientEffects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Increased to match new preloader animation duration
    return () => clearTimeout(timer);
  }, []);

  return <>{loading && <Preloader />}</>;
}
