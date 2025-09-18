'use client';

import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type MotionWrapperProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionWrapper({
  children,
  className,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.1 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
