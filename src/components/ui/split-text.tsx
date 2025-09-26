'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type SplitTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
};

export default function SplitText({
  text,
  className,
  wordClassName,
  charClassName,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = text.split(' ');

  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.02,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.h2
      ref={ref}
      className={cn('split-text-container', className)}
      aria-label={text}
      role="heading"
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={cn('split-word', wordClassName)}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              custom={wordIndex * 5 + charIndex}
              variants={variants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={cn('split-char', charClassName)}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </motion.h2>
  );
}
