import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Rows3 } from 'lucide-react';
import { type Project, type ProjectCategory } from '../data/portfolio';

interface IndexViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onSwitchToGallery: () => void;
}

const CATEGORIES: ('Todos' | ProjectCategory)[] = [
  'Todos',
  'Social Media',
  'Activación BTL',
  'Branding & Campaña',
  'Campaña 360°',
  'Web & Digital'
];

export function IndexView({
  projects,
  onSelectProject,
  onSwitchToGallery
}: IndexViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | ProjectCategory>('Todos');

  const filtered =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-dvh w-full pt-28 pb-20 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#141414]/10 pb-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              Índice de Proyectos · 2025 — 2026
            </p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[#141414]">
              Archivo creativo{' '}
              <span className="font-serif italic font-normal text-[#4E4A44]">seleccionado</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? 'bg-[#141414] text-[#F5F3EE]'
                      : 'border border-[#141414]/15 text-[#4E4A44] hover:border-[#141414]/40 hover:text-[#141414]'
                  }`}
                >
                  {category}
                </button>
              );
            })}

            <button
              onClick={onSwitchToGallery}
              className="inline-flex md:hidden items-center gap-1.5 rounded-full border border-[#141414]/20 px-3.5 py-1.5 text-xs font-medium text-[#141414]"
            >
              <Rows3 className="h-3.5 w-3.5 rotate-90" />
              Galería
            </button>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                onSelectProject(project);
              }}
              data-cursor-label="Abrir caso ↗"
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px] border border-[#141414]/10 bg-[#ECE9E1]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3EE]/92 px-3 py-1 text-[11px] font-medium text-[#141414] backdrop-blur-md">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F3EE] text-[#141414] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-md">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  {project.isAcademic && (
                    <p className="mb-1 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B6760]">
                      <GraduationCap className="h-3 w-3 text-[#141414]/70" />
                      <span>{project.academicLabel ?? 'Proyecto Universitario · ISIL'}</span>
                    </p>
                  )}
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-[#6B6760]">{project.index}</span>
                    <h2 className="text-2xl font-medium tracking-[-0.02em] text-[#141414] group-hover:opacity-75 transition-opacity">
                      {project.title}
                    </h2>
                  </div>
                  <p className="mt-1 font-serif italic text-lg text-[#4E4A44]">
                    {project.subtitle}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#6B6760] pt-1">{project.year}</span>
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-[#5C5852] line-clamp-2">
                {project.shortSummary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
