'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type CounterProps = {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const Counter = ({ from = 0, to, prefix = '', suffix = '', className }: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(value) {
        node.textContent = prefix + Math.round(value).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, prefix, suffix, isInView]);

  return <span ref={nodeRef} className={className} />;
};

export default Counter;
