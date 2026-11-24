import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CustomCursorProps {
  /** Changes on route/view transitions so any active label immediately clears */
  resetKey: string;
  /** Disable entirely on views without project cards (e.g. About) */
  disabled?: boolean;
}

export function CustomCursor({ resetKey, disabled = false }: CustomCursorProps) {
  const [enabled, setEnabled] = useState(false);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 38, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 38, mass: 0.4 });

  // Immediately clear label whenever the view/route changes or cursor is disabled
  useEffect(() => {
    setActiveLabel(null);
  }, [resetKey, disabled]);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);
    if (!isFinePointer || disabled) {
      setActiveLabel(null);
      return;
    }

    const resolveLabelFromTarget = (target: EventTarget | null): string | null => {
      if (!(target instanceof Element)) return null;
      const card = target.closest('[data-cursor-label]');
      return card ? card.getAttribute('data-cursor-label') : null;
    };

    const handleMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setActiveLabel(resolveLabelFromTarget(e.target));
    };

    const handleClear = () => {
      setActiveLabel(null);
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerdown', handleClear, { passive: true });
    window.addEventListener('scroll', handleClear, { passive: true });
    window.addEventListener('blur', handleClear);
    document.addEventListener('mouseleave', handleClear);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleClear);
      window.removeEventListener('scroll', handleClear);
      window.removeEventListener('blur', handleClear);
      document.removeEventListener('mouseleave', handleClear);
    };
  }, [mouseX, mouseY, disabled]);

  if (!enabled || disabled) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      initial={false}
      animate={{
        opacity: activeLabel ? 1 : 0,
        scale: activeLabel ? 1 : 0.75
      }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      className="no-print pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      {activeLabel && (
        <div className="flex items-center gap-1.5 rounded-full bg-[#141414] px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-[#F5F3EE] shadow-[0_10px_30px_rgba(20,20,20,0.22)]">
          <span>{activeLabel}</span>
        </div>
      )}
    </motion.div>
  );
}
