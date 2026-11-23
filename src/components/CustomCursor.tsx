import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CustomCursorProps {
  label: string | null;
}

export function CustomCursor({ label }: CustomCursorProps) {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 38, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 38, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      initial={false}
      animate={{
        opacity: label ? 1 : 0,
        scale: label ? 1 : 0.75
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="no-print pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex items-center gap-1.5 rounded-full bg-[#141414] px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-[#F5F3EE] shadow-[0_10px_30px_rgba(20,20,20,0.22)]">
        <span>{label}</span>
      </div>
    </motion.div>
  );
}
