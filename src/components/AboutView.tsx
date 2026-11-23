import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Copy,
  Download,
  GraduationCap,
  MapPin,
  Wrench
} from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface AboutViewProps {
  onNavigateWork: () => void;
}

export function AboutView({ onNavigateWork }: AboutViewProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  // Generates a clean, ready-to-print/save HTML CV document dynamically from PROFILE data
  const handleDownloadCV = () => {
    const educationHtml = PROFILE.education
      .map(
        (ed) => `
      <div style="margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;font-weight:600;">
          <span>${ed.title} — ${ed.organization}</span>
          <span style="color:#6B6760;font-size:12px;">${ed.period}</span>
        </div>
        <p style="margin:4px 0 0;color:#444;font-size:13px;">${ed.description}</p>
      </div>`
      )
      .join('');

    const experienceHtml = PROFILE.experience
      .map(
        (ex) => `
      <div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;font-weight:600;">
          <span>${ex.title} — ${ex.organization}</span>
          <span style="color:#6B6760;font-size:12px;">${ex.period}</span>
        </div>
        <p style="margin:4px 0;color:#444;font-size:13px;">${ex.description}</p>
        <ul style="margin:4px 0 0 18px;padding:0;color:#333;font-size:12.5px;">
          ${ex.highlights.map((h) => `<li style="margin-bottom:2px;">${h}</li>`).join('')}
        </ul>
      </div>`
      )
      .join('');

    const toolsHtml = PROFILE.toolGroups
      .map(
        (g) => `
      <div style="margin-bottom:10px;">
        <strong style="font-size:13px;">${g.category}:</strong>
        <span style="font-size:13px;color:#444;"> ${g.tools.map((t) => t.name).join(' · ')}</span>
      </div>`
      )
      .join('');

    const cvContent = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>CV — ${PROFILE.fullName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #141414; background: #fff; max-width: 780px; margin: 40px auto; padding: 0 28px; line-height: 1.55; }
    h1 { margin: 0; font-size: 30px; letter-spacing: -0.02em; }
    h2 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.14em; color: #6B6760; border-bottom: 1px solid #ddd; padding-bottom: 6px; margin-top: 28px; }
    .meta { color: #555; font-size: 13.5px; margin-top: 6px; }
  </style>
</head>
<body>
  <h1>${PROFILE.fullName}</h1>
  <div class="meta">${PROFILE.roleTitle} · ${PROFILE.location} · ${PROFILE.email}</div>
  <p style="margin-top:16px;font-size:14px;">${PROFILE.aboutParagraphs[0]} ${PROFILE.aboutParagraphs[1]}</p>
  <h2>Experiencia</h2>
  ${experienceHtml}
  <h2>Formación</h2>
  ${educationHtml}
  <h2>Herramientas & Habilidades</h2>
  ${toolsHtml}
  <h2>Redes</h2>
  <p style="font-size:13px;color:#444;">${PROFILE.socials.map((s) => `${s.name}: ${s.handle}`).join(' · ')}</p>
</body>
</html>`;

    const blob = new Blob([cvContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV-${PROFILE.fullName.replace(/\s+/g, '-')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-dvh w-full bg-[#F5F3EE] pt-28 sm:pt-32 pb-24"
    >
      <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-12">
        {/* Hero Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[26px] border border-[#141414]/12 bg-[#ECE9E1] shadow-[0_24px_60px_-28px_rgba(20,20,20,0.2)]">
              <img
                src={PROFILE.portraitImage}
                alt={`Retrato editorial de ${PROFILE.fullName}`}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between px-1 text-xs text-[#6B6760]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#141414] font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                {PROFILE.availability}
              </span>
            </div>
          </div>

          {/* Bio Copy & Primary Actions */}
          <div className="lg:col-span-7 lg:pt-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              Sobre mí · {PROFILE.roleTitle}
            </p>

            <h1 className="mt-4 text-3xl sm:text-5xl font-medium tracking-[-0.03em] leading-[1.08] text-[#141414]">
              {PROFILE.aboutHeadline}
            </h1>

            <div className="mt-7 space-y-4 text-base sm:text-[17px] leading-[1.75] text-[#35322E]">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-[#141414] pl-5 font-serif italic text-xl sm:text-2xl text-[#141414]">
              “{PROFILE.philosophyQuote}”
            </blockquote>

            {/* Action Buttons: Copy Email + Download CV */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-5 py-3 text-xs sm:text-sm font-medium text-[#F5F3EE] transition-all hover:bg-[#2B2B2B] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    ¡Correo copiado! ({PROFILE.email})
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copiar correo · {PROFILE.email}
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 rounded-full border border-[#141414]/20 bg-[#F5F3EE] px-5 py-3 text-xs sm:text-sm font-medium text-[#141414] transition-all hover:border-[#141414]/50 hover:bg-[#ECE9E1] cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </button>
            </div>
          </div>
        </div>

        {/* Experiencia & Formación Timeline */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-14 border-t border-[#141414]/12 pt-16">
          {/* Experiencia */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              <Briefcase className="h-3.5 w-3.5 text-[#141414]" />
              <span>01 · Experiencia</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-[-0.025em] text-[#141414]">
              Recorrido en marcas y estudios
            </h2>

            <div className="mt-8 space-y-8">
              {PROFILE.experience.map((item) => (
                <div
                  key={`${item.period}-${item.title}`}
                  className="relative border-l border-[#141414]/15 pl-6"
                >
                  <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-[#141414]" />
                  <p className="font-mono text-[11px] text-[#6B6760]">
                    {item.period} · {item.location}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-[#141414]">{item.title}</h3>
                  <p className="font-serif italic text-base text-[#4E4A44]">
                    {item.organization}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#5C5852]">
                    {item.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#2B2926]">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#141414]/50" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formación */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
              <GraduationCap className="h-3.5 w-3.5 text-[#141414]" />
              <span>02 · Formación</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-[-0.025em] text-[#141414]">
              Base académica y especializaciones
            </h2>

            <div className="mt-8 space-y-8">
              {PROFILE.education.map((item) => (
                <div
                  key={`${item.period}-${item.title}`}
                  className="relative border-l border-[#141414]/15 pl-6"
                >
                  <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full border border-[#141414] bg-[#F5F3EE]" />
                  <p className="font-mono text-[11px] text-[#6B6760]">
                    {item.period} · {item.location}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-[#141414]">{item.title}</h3>
                  <p className="font-serif italic text-base text-[#4E4A44]">
                    {item.organization}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#5C5852]">
                    {item.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#2B2926]">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#141414]/50" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Herramientas & Stack Creativo */}
        <section className="mt-24 border-t border-[#141414]/12 pt-16">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
            <Wrench className="h-3.5 w-3.5 text-[#141414]" />
            <span>03 · Herramientas &amp; Stack</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
            Lo que uso para llevar una idea a{' '}
            <span className="font-serif italic font-normal text-[#4E4A44]">producción</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROFILE.toolGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-[#141414]/10 bg-[#ECE9E1]/50 p-6"
              >
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#141414] font-medium">
                  {group.category}
                </h3>
                <ul className="mt-5 space-y-4">
                  {group.tools.map((tool) => (
                    <li key={tool.name} className="border-t border-[#141414]/8 pt-3 first:border-0 first:pt-0">
                      <p className="text-sm font-medium text-[#141414]">{tool.name}</p>
                      <p className="mt-0.5 text-xs text-[#6B6760]">{tool.focus}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Redes Sociales & Contacto Directo */}
        <section className="mt-24 border-t border-[#141414]/12 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6760]">
                04 · Contacto &amp; Redes
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#141414]">
                ¿Conversamos sobre tu próxima campaña?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5C5852]">
                Abierta a prácticas preprofesionales en agencias creativas, marcas en crecimiento o
                colaboraciones puntuales en social media y dirección de arte.
              </p>

              <button
                onClick={onNavigateWork}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#141414] underline underline-offset-4 hover:opacity-70 cursor-pointer"
              >
                Ver los 4 proyectos seleccionados
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#141414]/12 border-y border-[#141414]/12">
              {PROFILE.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-5 transition-colors hover:px-2"
                >
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-[#141414]">{social.name}</p>
                    <p className="font-mono text-xs text-[#6B6760]">{social.handle}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#141414]/15 text-[#141414] transition-all duration-300 group-hover:bg-[#141414] group-hover:text-[#F5F3EE]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              ))}

              <button
                onClick={handleCopyEmail}
                className="group flex w-full items-center justify-between py-5 text-left transition-colors hover:px-2 cursor-pointer"
              >
                <div>
                  <p className="text-lg sm:text-xl font-medium text-[#141414]">Correo directo</p>
                  <p className="font-mono text-xs text-[#6B6760]">
                    {copied ? '¡Copiado al portapapeles!' : PROFILE.email}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#141414]/15 text-[#141414] transition-all duration-300 group-hover:bg-[#141414] group-hover:text-[#F5F3EE]">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
