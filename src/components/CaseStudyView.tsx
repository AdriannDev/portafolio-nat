import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  Film,
  Globe,
  Heart,
  Images,
  Instagram,
  Play,
  Sparkles
} from 'lucide-react';
import { type Project } from '../data/portfolio';

interface CaseStudyViewProps {
  project: Project;
  nextProject: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
  onCursorLabel: (label: string | null) => void;
}

export function CaseStudyView({
  project,
  nextProject,
  onBack,
  onSelectProject,
  onCursorLabel
}: CaseStudyViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth inertial vertical scroll with Lenis + reading progress hairline
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / total)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [project.id]);

  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-dvh w-full bg-[#F5F3EE] pt-24 sm:pt-28 pb-16"
    >
      {/* Top reading progress hairline in the campaign accent color */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-transparent">
        <div
          className="h-full transition-[width] duration-75"
          style={{
            width: `${scrollProgress * 100}%`,
            backgroundColor: project.accentColor
          }}
        />
      </div>

      <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-12">
        {/* Back button + Breadcrumb */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-[#141414]/15 bg-[#F5F3EE] px-4 py-2 text-xs font-medium text-[#141414] transition-all hover:border-[#141414]/40 hover:bg-[#ECE9E1] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Volver a proyectos
          </button>

          <div className="flex items-center gap-2 font-mono text-xs text-[#6B6760]">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span>Caso {project.index}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Editorial Hero Header */}
        <header className="mt-10 sm:mt-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#141414]/12 px-3.5 py-1 text-xs font-medium text-[#4E4A44]">
            {project.category}
          </span>

          <h1 className="mt-5 text-4xl sm:text-6xl lg:text-[72px] font-medium tracking-[-0.035em] leading-[1.02] text-[#141414]">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl font-serif italic text-2xl sm:text-3xl leading-[1.25] text-[#4E4A44]">
            {project.subtitle}
          </p>

          {/* Optional direct live links (Instagram, TikTok, Live Web) */}
          {project.externalLinks && project.externalLinks.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {project.externalLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#141414]/15 bg-[#ECE9E1]/65 px-4 py-2 text-xs font-medium text-[#141414] transition-all hover:border-[#141414]/40 hover:bg-[#141414] hover:text-[#F5F3EE]"
                >
                  {link.platform === 'instagram' ? (
                    <Instagram className="h-3.5 w-3.5" />
                  ) : link.platform === 'tiktok' ? (
                    <Play className="h-3.5 w-3.5 fill-current" />
                  ) : (
                    <Globe className="h-3.5 w-3.5" />
                  )}
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Hero Full-Bleed Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-[24px] sm:rounded-[30px] border border-[#141414]/10 bg-[#ECE9E1] shadow-[0_24px_70px_-28px_rgba(20,20,20,0.18)]"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>

        {/* Ficha Técnica (4-column advertising metadata) */}
        <section className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 border-y border-[#141414]/12 py-7">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B6760]">
              Cliente / Marca
            </p>
            <p className="mt-2 text-sm font-medium text-[#141414]">{project.client}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B6760]">
              Mi Rol
            </p>
            <p className="mt-2 text-sm font-medium text-[#141414]">{project.role}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B6760]">
              Contexto / Duración
            </p>
            <p className="mt-2 text-sm font-medium text-[#141414]">{project.duration}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B6760]">
              Entregables
            </p>
            <ul className="mt-2 space-y-1 text-sm text-[#141414]">
              {project.deliverables.map((item) => (
                <li key={item} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 1: El Reto / Brief + Insight */}
        <section className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              01 · El Reto &amp; Brief
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#141414]">
              Entender el problema antes de diseñar.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-base sm:text-lg leading-[1.75] text-[#2B2926]">
              {project.brief}
            </p>

            <div
              className="rounded-2xl border border-[#141414]/10 p-6 sm:p-8"
              style={{ backgroundColor: project.accentSoft }}
            >
              <p
                className="font-mono text-[10px] uppercase tracking-[0.18em] font-medium"
                style={{ color: project.accentColor }}
              >
                Insight del Consumidor
              </p>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#141414]">
                {project.insight}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: La Gran Idea (Editorial Pull-Quote) */}
        <section className="mt-20 sm:mt-24 rounded-[28px] border border-[#141414]/12 bg-[#ECE9E1]/65 p-8 sm:p-12 lg:p-16">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
            <Sparkles className="h-3.5 w-3.5" style={{ color: project.accentColor }} />
            <span>02 · La Gran Idea</span>
          </div>

          <blockquote className="mt-5 font-serif italic text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-[-0.01em] text-[#141414]">
            {project.bigIdeaTitle}
          </blockquote>

          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-[1.75] text-[#35322E]">
            {project.bigIdeaCopy}
          </p>
        </section>

        {/* Section 3: Estrategia en 3 Pilares */}
        <section className="mt-20 sm:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
                03 · Estrategia &amp; Ejecución
              </p>
              <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
                Cómo bajamos el concepto a medios reales
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl border border-[#141414]/10 bg-[#F5F3EE] p-6 sm:p-7 transition-colors hover:border-[#141414]/25"
              >
                <span
                  className="font-mono text-xs font-medium"
                  style={{ color: project.accentColor }}
                >
                  {pillar.number}
                </span>
                <h3 className="mt-3 text-lg font-medium tracking-[-0.015em] text-[#141414]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5C5852]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Full-Width Campaign Visual */}
        <figure className="mt-14 sm:mt-16">
          <div className="overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#141414]/10 bg-[#ECE9E1]">
            <img
              src={project.secondaryImage}
              alt={project.galleryCaption}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          <figcaption className="mt-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#6B6760]">
            <span
              className="h-px w-6 shrink-0"
              style={{ backgroundColor: project.accentColor }}
            />
            {project.galleryCaption}
          </figcaption>
        </figure>

        {/* Real Vertical Video Reels Showcase (for Social Media video projects like Kushi Illari) */}
        {project.videoReels && project.videoReels.length > 0 && (
          <section className="mt-20 sm:mt-24">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              <Film className="h-3.5 w-3.5" style={{ color: project.accentColor }} />
              <span>Piezas Audiovisuales Reales · Reels &amp; TikTok</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
              Videos producidos para la marca
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#5C5852]">
              Reproduce las piezas originales creadas para Instagram Reels y TikTok: dirección
              creativa, grabación en tienda, edición dinámica y storytelling de producto.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.videoReels.map((reel) => (
                <div
                  key={reel.title}
                  className="flex flex-col rounded-[26px] border border-[#141414]/12 bg-[#ECE9E1]/55 p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-2 pb-4">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#F5F3EE]"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      <Play className="h-3 w-3 fill-current" />
                      {reel.tag}
                    </span>
                    <span className="font-mono text-[11px] text-[#6B6760]">{reel.format}</span>
                  </div>

                  <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[22px] border border-[#141414]/15 bg-[#141414] shadow-[0_18px_50px_-24px_rgba(20,20,20,0.45)]">
                    <video
                      src={reel.src}
                      poster={reel.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-[9/16] w-full object-cover"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-medium tracking-[-0.015em] text-[#141414]">
                      {reel.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5C5852]">
                      {reel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Specialized Interactive Content Section: Social Media Mockups */}
        {project.socialShowcase && (
          <section className="mt-20 sm:mt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              04 · Parrilla de Contenido &amp; Formatos Clave
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
              Formatos nativos de TikTok e Instagram
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#5C5852]">
              Desglose de pilares de contenido gestionados para la cuenta: gancho inicial (hook),
              intención comercial y conexión orgánica con la audiencia.
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {project.socialShowcase.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col justify-between rounded-[24px] border border-[#141414]/12 bg-[#ECE9E1]/55 p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Platform top bar */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#141414]/10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#141414] px-3 py-1 text-[11px] font-medium text-[#F5F3EE]">
                        {post.platform === 'Instagram' ? (
                          <Instagram className="h-3 w-3" />
                        ) : (
                          <Play className="h-3 w-3 fill-current" />
                        )}
                        {post.platform}
                      </span>
                      <span className="font-mono text-[11px] text-[#6B6760]">{post.format}</span>
                    </div>

                    {/* Content metadata */}
                    <span
                      className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: project.accentColor }}
                    >
                      {post.tag}
                    </span>
                    <h3 className="mt-1.5 text-lg font-medium tracking-[-0.015em] text-[#141414]">
                      {post.title}
                    </h3>

                    {/* Hook callout */}
                    <div className="mt-4 rounded-xl bg-[#F5F3EE] p-3.5 border border-[#141414]/8">
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#6B6760]">
                        Hook / Gancho inicial
                      </p>
                      <p className="mt-1 font-serif italic text-base text-[#141414]">
                        {post.hook}
                      </p>
                    </div>

                    <p className="mt-3.5 text-sm leading-relaxed text-[#5C5852]">
                      {post.caption}
                    </p>
                  </div>

                  {/* Mockup Metrics Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#141414]/10 pt-4 text-xs">
                    <span className="font-mono font-medium text-[#141414]">{post.views}</span>
                    <span className="inline-flex items-center gap-2 text-[#6B6760]">
                      <Heart className="h-3.5 w-3.5" />
                      <Bookmark className="h-3.5 w-3.5" />
                      <span>{post.engagement}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Specialized Interactive Content Section: Campaign & Branding Board */}
        {project.campaignBoard && (
          <section className="mt-20 sm:mt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              04 · {project.campaignBoard.sectionLabel}
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
              {project.campaignBoard.sectionTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#5C5852]">
              {project.campaignBoard.description}
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.campaignBoard.items.map((item) => (
                <div
                  key={item.tag}
                  className="flex flex-col justify-between rounded-[24px] border border-[#141414]/12 bg-[#ECE9E1]/55 p-6 sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#F5F3EE]"
                        style={{ backgroundColor: project.accentColor }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <p className="mt-6 font-serif italic text-2xl leading-[1.22] text-[#141414]">
                      {item.headline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#5C5852]">{item.subcopy}</p>
                  </div>

                  <div className="mt-6 border-t border-[#141414]/10 pt-3.5 font-mono text-[11px] text-[#6B6760]">
                    Formato: <span className="text-[#141414]">{item.format}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Multi-Piece Visual Gallery from Project Deck */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="mt-20 sm:mt-24">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              <Images className="h-3.5 w-3.5" style={{ color: project.accentColor }} />
              <span>Piezas &amp; Aplicaciones del Proyecto</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
              Desarrollo visual y bajadas creativas
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {project.galleryImages.map((item) => (
                <figure
                  key={item.src}
                  className="group overflow-hidden rounded-[22px] border border-[#141414]/10 bg-[#ECE9E1]/50"
                >
                  <div className="overflow-hidden border-b border-[#141414]/8 bg-[#ECE9E1]">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="p-4 sm:p-5">
                    <p className="text-sm font-medium text-[#141414]">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#5C5852]">{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Resultados e Impacto */}
        <section className="mt-20 sm:mt-24 border-t border-[#141414]/12 pt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
            05 · Alcance &amp; Claves del Proyecto
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
            Indicadores clave del proyecto
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-[#141414]/10 bg-[#ECE9E1]/45 p-6"
              >
                <p
                  className="font-mono text-3xl sm:text-4xl font-medium tracking-tight"
                  style={{ color: project.accentColor }}
                >
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#141414]">{metric.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#5C5852]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Seamless Band */}
        <section className="mt-24 sm:mt-28 border-t border-[#141414]/15 pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
            Siguiente proyecto
          </p>

          <button
            onClick={() => {
              onCursorLabel(null);
              onSelectProject(nextProject);
            }}
            onMouseEnter={() => onCursorLabel('Siguiente caso ↗')}
            onMouseLeave={() => onCursorLabel(null)}
            className="group mt-5 flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-[26px] border border-[#141414]/12 bg-[#ECE9E1]/50 p-5 sm:p-7 text-left transition-all duration-300 hover:border-[#141414]/30 hover:bg-[#ECE9E1] cursor-pointer"
          >
            <div className="flex items-center gap-5 sm:gap-7">
              <div className="h-20 w-28 sm:h-24 sm:w-36 shrink-0 overflow-hidden rounded-2xl border border-[#141414]/10">
                <img
                  src={nextProject.heroImage}
                  alt={nextProject.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="font-mono text-xs text-[#6B6760]">
                  {nextProject.index} · {nextProject.category}
                </span>
                <h3 className="mt-1 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
                  {nextProject.title}
                </h3>
                <p className="mt-1 font-serif italic text-base sm:text-lg text-[#4E4A44]">
                  {nextProject.subtitle}
                </p>
              </div>
            </div>

            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#141414] text-[#F5F3EE] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </button>
        </section>
      </div>
    </motion.article>
  );
}
