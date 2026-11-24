import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, LayoutGrid } from 'lucide-react';
import { PROFILE, type Project } from '../data/portfolio';

interface HorizontalGalleryProps {
  projects: Project[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  onSelectProject: (project: Project) => void;
  onSwitchToIndex: () => void;
  onCursorLabel: (label: string | null) => void;
}

export function HorizontalGallery({
  projects,
  activeIndex,
  onActiveIndexChange,
  onSelectProject,
  onSwitchToIndex,
  onCursorLabel
}: HorizontalGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelAccumulator = useRef(0);
  const wheelLockUntil = useRef(0);
  const dragStartX = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const activeProject = projects[activeIndex] ?? projects[0];

  const goToIndex = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(projects.length - 1, next));
      onActiveIndexChange(clamped);
    },
    [projects.length, onActiveIndexChange]
  );

  const goPrev = useCallback(() => {
    goToIndex(activeIndex - 1);
  }, [activeIndex, goToIndex]);

  const goNext = useCallback(() => {
    goToIndex(activeIndex + 1);
  }, [activeIndex, goToIndex]);

  // Keyboard navigation (← / → / Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Enter' && document.activeElement === document.body) {
        onSelectProject(activeProject);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, onSelectProject, activeProject]);

  // Smooth inertial mouse wheel -> horizontal slide navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 4) return;

      e.preventDefault();

      if (now < wheelLockUntil.current) return;

      wheelAccumulator.current += delta;

      if (Math.abs(wheelAccumulator.current) >= 48) {
        if (wheelAccumulator.current > 0) {
          goToIndex(activeIndex + 1);
        } else {
          goToIndex(activeIndex - 1);
        }
        wheelAccumulator.current = 0;
        wheelLockUntil.current = now + 460;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [activeIndex, goToIndex]);

  // Pointer drag / touch swipe mechanics
  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    dragStartX.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    setDragOffset(dx);
  };

  const handlePointerUp = () => {
    if (dragStartX.current === null) return;
    const threshold = 65;
    if (dragOffset < -threshold) {
      goNext();
    } else if (dragOffset > threshold) {
      goPrev();
    }
    dragStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={() => {
        if (isDragging) handlePointerUp();
        onCursorLabel(null);
      }}
      className="relative flex min-h-dvh w-full flex-col justify-between overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-8 select-none editorial-grain"
    >
      {/* Dynamic subtle ambient glow driven by active campaign color */}
      <motion.div
        aria-hidden="true"
        animate={{
          background: `radial-gradient(62% 52% at 50% 46%, ${activeProject.accentSoft} 0%, rgba(245, 243, 238, 0) 74%)`
        }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* Top Editorial Intro Strip */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-end justify-between px-5 sm:px-8 lg:px-12">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
            Portafolio Seleccionado · {PROFILE.location}
          </p>
          <h1 className="mt-1.5 text-lg sm:text-xl lg:text-2xl font-normal tracking-[-0.02em] text-[#141414]/85">
            Campañas, branding y contenido con{' '}
            <span className="font-serif italic text-[1.22em] text-[#141414]">
              enfoque cultural
            </span>
          </h1>
        </div>

        {/* Mobile quick switch to Index + Desktop counter */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSwitchToIndex}
            className="inline-flex md:hidden items-center gap-1.5 rounded-full border border-[#141414]/15 bg-[#F5F3EE]/90 px-3 py-1.5 text-[11px] font-medium text-[#141414]"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            Índice
          </button>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#6B6760]">
            <span className="text-[#141414] font-medium">{activeProject.index}</span>
            <span className="h-px w-6 bg-[#141414]/25" />
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Center Aristide-Inspired Horizontal Kinetic Filmstrip */}
      <div className="relative z-10 my-auto flex w-full flex-col items-center justify-center py-4 sm:py-6">
        <div className="relative flex w-full items-center justify-center h-[44vh] min-h-[290px] max-h-[520px] sm:h-[52vh] lg:h-[56vh]">
          {projects.map((project, idx) => {
            const offset = idx - activeIndex;
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            // Only render nearby frames for silky performance
            if (absOffset > 2) return null;

            return (
              <motion.article
                key={project.id}
                initial={false}
                animate={{
                  x: `calc(${offset * 76}% + ${dragOffset * 0.45}px)`,
                  scale: isActive ? 1 : absOffset === 1 ? 0.84 : 0.72,
                  opacity: isActive ? 1 : absOffset === 1 ? 0.42 : 0.14,
                  rotateY: isActive ? 0 : offset > 0 ? -4 : 4,
                  zIndex: 20 - absOffset
                }}
                transition={{
                  type: 'spring',
                  stiffness: isDragging ? 420 : 210,
                  damping: isDragging ? 42 : 28,
                  mass: 0.9
                }}
                onClick={() => {
                  if (Math.abs(dragOffset) > 12) return;
                  if (isActive) {
                    onCursorLabel(null);
                    onSelectProject(project);
                  } else {
                    goToIndex(idx);
                  }
                }}
                onMouseEnter={() => {
                  onCursorLabel(isActive ? 'Explorar caso ↗' : `Ver ${project.index}`);
                }}
                onMouseLeave={() => onCursorLabel(null)}
                className={`group absolute w-[86vw] sm:w-[70vw] md:w-[60vw] lg:w-[54vw] max-w-[820px] aspect-[16/10] rounded-[20px] sm:rounded-[26px] overflow-hidden border transition-shadow duration-500 ${
                  isActive
                    ? 'cursor-pointer border-[#141414]/12 shadow-[0_30px_80px_-24px_rgba(20,20,20,0.22)]'
                    : 'cursor-pointer border-[#141414]/8 shadow-[0_14px_40px_-20px_rgba(20,20,20,0.12)]'
                }`}
              >
                {/* Parallax image inside clipped editorial frame */}
                <motion.img
                  src={project.heroImage}
                  alt={`${project.title} — ${project.subtitle}`}
                  draggable={false}
                  animate={{
                    scale: isActive ? 1.03 : 1.12,
                    x: offset * -24
                  }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />

                {/* Subtle editorial vignette only at top/bottom edges for clean readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414]/45 via-transparent to-[#141414]/10 opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Top pill tags inside card */}
                <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F3EE]/90 px-3 py-1 text-[11px] font-medium text-[#141414] backdrop-blur-md">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    {project.category}
                  </span>

                  <span className="rounded-full bg-[#141414]/55 px-2.5 py-1 font-mono text-[10px] text-[#F5F3EE] backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Bottom quick cue inside active card */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex items-end justify-between gap-4"
                  >
                    <p className="max-w-md text-xs sm:text-[13px] leading-relaxed text-[#F5F3EE]/92 line-clamp-2">
                      {project.shortSummary}
                    </p>
                    <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#F5F3EE] px-4 py-2 text-xs font-medium text-[#141414] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      Ver caso
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Active Project Kinetic Title + Controls */}
        <div className="mt-5 sm:mt-7 mx-auto flex w-full max-w-[1440px] flex-col sm:flex-row items-start sm:items-end justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <div className="min-h-[74px] sm:min-h-[84px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs text-[#6B6760]">
                    {activeProject.index}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.05] text-[#141414]">
                    {activeProject.title}
                  </h2>
                </div>
                <p className="mt-1.5 font-serif italic text-lg sm:text-xl text-[#4E4A44]">
                  {activeProject.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Direct Action + Prev/Next Buttons */}
          <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-3">
            <button
              onClick={() => onSelectProject(activeProject)}
              className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-5 py-2.5 text-xs sm:text-[13px] font-medium text-[#F5F3EE] transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-md cursor-pointer"
            >
              Abrir caso de estudio
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-label="Proyecto anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#141414]/15 bg-[#F5F3EE] text-[#141414] transition-all hover:border-[#141414]/40 hover:bg-[#ECE9E1] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === projects.length - 1}
                aria-label="Siguiente proyecto"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#141414]/15 bg-[#F5F3EE] text-[#141414] transition-all hover:border-[#141414]/40 hover:bg-[#ECE9E1] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Filmstrip Scrubber / Direct Project Selector */}
      <footer className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="border-t border-[#141414]/10 pt-3.5 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex w-full sm:w-auto items-center gap-2 sm:gap-5 overflow-x-auto pb-1 sm:pb-0">
            {projects.map((project, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => goToIndex(idx)}
                  className={`group relative flex shrink-0 items-center gap-2 py-1 text-left transition-colors cursor-pointer ${
                    isCurrent ? 'text-[#141414]' : 'text-[#6B6760] hover:text-[#141414]'
                  }`}
                >
                  <span className="font-mono text-[10px]">{project.index}</span>
                  <span className="text-xs font-medium tracking-tight">{project.title}</span>
                  {isCurrent && (
                    <motion.span
                      layoutId="scrubber-underline"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                      style={{ backgroundColor: project.accentColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <p className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.14em] text-[#6B6760]">
            Usa scroll, arrastra o flechas ← →
          </p>
        </div>
      </footer>
    </motion.section>
  );
}
