'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DigitalSerenity = dynamic(
  () => import('@/components/ui/digital-serenity-animated-landing-page'),
  { ssr: false }
);

export function PranaIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('prana-intro')) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <DigitalSerenity
      onDone={() => sessionStorage.setItem('prana-intro', '1')}
    />
  );
}
