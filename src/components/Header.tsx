import { motion } from 'framer-motion';
import { LayoutGrid, Rows3 } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export type ActiveRoute = 'work' | 'project' | 'about';
export type WorkViewMode = 'gallery' | 'index';

interface HeaderProps {
  activeRoute: ActiveRoute;
  workViewMode: WorkViewMode;
  projectCount: number;
  onNavigateWork: () => void;
  onNavigateAbout: () => void;
  onChangeWorkMode: (mode: WorkViewMode) => void;
}

export function Header({
  activeRoute,
  workViewMode,
  projectCount,
  onNavigateWork,
  onNavigateAbout,
  onChangeWorkMode
}: HeaderProps) {
  return (
    <header className="no-print fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 lg:px-12 py-4 sm:py-5">
      <div className="mx-auto flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <button
          onClick={onNavigateWork}
          className="group flex flex-col leading-tight text-left focus:outline-none cursor-pointer"
          aria-label="Ir al inicio del portafolio"
        >
          <span className="text-[14px] sm:text-[15px] font-medium tracking-[-0.02em] text-[#141414] transition-opacity group-hover:opacity-75">
            {PROFILE.fullName}
          </span>
          <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.01em] text-[#6B6760]">
            Publicista &amp; Medios Digitales
          </span>
        </button>

        {/* Center Mode Switch (Only on Home Work View) */}
        {activeRoute === 'work' && (
          <div
            className="hidden md:flex items-center rounded-full border border-[#141414]/10 bg-[#F5F3EE]/80 p-1 backdrop-blur-md shadow-[0_2px_12px_rgba(20,20,20,0.03)]"
            role="tablist"
            aria-label="Modo de visualización de proyectos"
          >
            <button
              role="tab"
              aria-selected={workViewMode === 'gallery'}
              onClick={() => onChangeWorkMode('gallery')}
              className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                workViewMode === 'gallery' ? 'text-[#F5F3EE]' : 'text-[#6B6760] hover:text-[#141414]'
              }`}
            >
              {workViewMode === 'gallery' && (
                <motion.span
                  layoutId="work-mode-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-[#141414]"
                />
              )}
              <Rows3 className="relative z-10 h-3.5 w-3.5 rotate-90" />
              <span className="relative z-10">Galería</span>
            </button>

            <button
              role="tab"
              aria-selected={workViewMode === 'index'}
              onClick={() => onChangeWorkMode('index')}
              className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                workViewMode === 'index' ? 'text-[#F5F3EE]' : 'text-[#6B6760] hover:text-[#141414]'
              }`}
            >
              {workViewMode === 'index' && (
                <motion.span
                  layoutId="work-mode-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-[#141414]"
                />
              )}
              <LayoutGrid className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10">Índice</span>
            </button>
          </div>
        )}

        {/* Right Primary Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2 rounded-full border border-[#141414]/10 bg-[#F5F3EE]/80 px-2 py-1 backdrop-blur-md shadow-[0_2px_12px_rgba(20,20,20,0.03)]">
          <button
            onClick={onNavigateWork}
            className={`relative rounded-full px-3.5 py-1.5 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer ${
              activeRoute !== 'about'
                ? 'text-[#141414]'
                : 'text-[#6B6760] hover:text-[#141414]'
            }`}
          >
            <span>Proyectos</span>
            <sup className="ml-1 font-mono text-[9px] text-[#6B6760]">
              {String(projectCount).padStart(2, '0')}
            </sup>
            {activeRoute !== 'about' && (
              <motion.span
                layoutId="nav-active-dot"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#141414]"
              />
            )}
          </button>

          <button
            onClick={onNavigateAbout}
            className={`relative rounded-full px-3.5 py-1.5 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer ${
              activeRoute === 'about'
                ? 'text-[#141414]'
                : 'text-[#6B6760] hover:text-[#141414]'
            }`}
          >
            <span>Sobre mí</span>
            {activeRoute === 'about' && (
              <motion.span
                layoutId="nav-active-dot"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#141414]"
              />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
