import {
  CalendarDays,
  Clapperboard,
  Compass,
  Feather,
  Layers,
  Lightbulb,
  Megaphone,
  Smartphone
} from 'lucide-react';

export type ToolIconKey =
  | 'photoshop'
  | 'illustrator'
  | 'canva'
  | 'wix'
  | 'capcut'
  | 'mobile-production'
  | 'storyboard'
  | 'lightroom'
  | 'instagram-tiktok'
  | 'editorial-calendar'
  | 'meta'
  | 'tiktok'
  | 'insights'
  | 'btl'
  | 'cobranding'
  | 'copywriting';

interface ToolLogoProps {
  iconKey?: ToolIconKey;
  name: string;
}

export function ToolLogo({ iconKey, name }: ToolLogoProps) {
  switch (iconKey) {
    case 'photoshop':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#001E36] text-[#31A8FF] shadow-xs ring-1 ring-[#31A8FF]/30"
          title={name}
        >
          <svg viewBox="0 0 36 36" className="h-6 w-6">
            <text
              x="50%"
              y="56%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#31A8FF"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontWeight="700"
              fontSize="16"
              letterSpacing="-0.5"
            >
              Ps
            </text>
          </svg>
        </span>
      );

    case 'illustrator':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#330000] text-[#FF9A00] shadow-xs ring-1 ring-[#FF9A00]/30"
          title={name}
        >
          <svg viewBox="0 0 36 36" className="h-6 w-6">
            <text
              x="50%"
              y="56%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FF9A00"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontWeight="700"
              fontSize="16"
              letterSpacing="-0.5"
            >
              Ai
            </text>
          </svg>
        </span>
      );

    case 'lightroom':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#001E36] text-[#31A8FF] shadow-xs ring-1 ring-[#31A8FF]/30"
          title={name}
        >
          <svg viewBox="0 0 36 36" className="h-6 w-6">
            <text
              x="50%"
              y="56%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#31A8FF"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontWeight="700"
              fontSize="16"
              letterSpacing="-0.5"
            >
              Lr
            </text>
          </svg>
        </span>
      );

    case 'canva':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-xs ring-1 ring-black/8"
          style={{
            background: 'linear-gradient(135deg, #00C4CC 0%, #5B5EF4 55%, #7D2AE8 100%)'
          }}
          title={name}
        >
          <svg viewBox="0 0 36 36" className="h-5 w-5" fill="none">
            <path
              d="M24.2 21.8c-1.3 2.4-3.7 4-6.5 4-4.2 0-7.2-3.2-7.2-7.8 0-4.7 3.3-8.2 7.5-8.2 2.4 0 4.3 1.1 5.3 2.9.4.7.1 1.6-.6 2-.8.4-1.7.1-2.1-.7-.5-.9-1.4-1.4-2.6-1.4-2.4 0-4.3 2.3-4.3 5.4 0 3.1 1.7 5.1 4.2 5.1 1.6 0 3-.9 3.8-2.4.4-.7 1.3-1 2-.6.8.4 1 1.2.5 1.7z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case 'wix':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#141414] text-white shadow-xs ring-1 ring-black/15"
          title={name}
        >
          <svg viewBox="0 0 40 24" className="h-5 w-7" fill="none">
            <text
              x="50%"
              y="58%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontWeight="800"
              fontSize="13.5"
              letterSpacing="0.4"
            >
              WiX
            </text>
          </svg>
        </span>
      );

    case 'capcut':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white shadow-xs ring-1 ring-black/15"
          title={name}
        >
          <svg viewBox="0 0 28 28" className="h-5 w-5" fill="none">
            <path
              d="M6.5 9.2L21.5 18.8M21.5 9.2L6.5 18.8"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M6.5 9.2C6.5 7.7 7.6 6.8 9.2 6.8H16.5M6.5 18.8C6.5 20.3 7.6 21.2 9.2 21.2H16.5"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      );

    case 'instagram-tiktok':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-xs ring-1 ring-black/8"
          style={{
            background:
              'radial-gradient(circle at 28% 105%, #FDF497 0%, #FD5949 45%, #D6249F 72%, #285AEB 100%)'
          }}
          title={name}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.4" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="16.5" cy="7.5" r="1.1" fill="#FFFFFF" />
          </svg>
        </span>
      );

    case 'meta':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0081FB] text-white shadow-xs ring-1 ring-[#0081FB]/30"
          title={name}
        >
          <svg viewBox="0 0 32 20" className="h-4.5 w-6" fill="none">
            <path
              d="M9.6 15.8C6.5 15.8 4.2 13.4 4.2 10.1C4.2 6.8 6.4 4.2 9.4 4.2C12 4.2 13.9 6.1 16 9.5C18.1 6.1 20 4.2 22.6 4.2C25.6 4.2 27.8 6.8 27.8 10.1C27.8 13.4 25.5 15.8 22.4 15.8C19.8 15.8 18 13.9 16 10.7C14 13.9 12.2 15.8 9.6 15.8Z"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );

    case 'tiktok':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#111111] shadow-xs ring-1 ring-black/15"
          title={name}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M15.8 5.2c.9 1.1 2.1 1.8 3.5 2v2.7c-1.4-.1-2.6-.5-3.6-1.2v5.8a4.8 4.8 0 1 1-4.8-4.8c.4 0 .8 0 1.2.1v2.7a2.2 2.2 0 1 0 1.1 1.9V4.5h2.6v.7z"
              fill="#25F4EE"
              transform="translate(-0.8 -0.5)"
            />
            <path
              d="M15.8 5.2c.9 1.1 2.1 1.8 3.5 2v2.7c-1.4-.1-2.6-.5-3.6-1.2v5.8a4.8 4.8 0 1 1-4.8-4.8c.4 0 .8 0 1.2.1v2.7a2.2 2.2 0 1 0 1.1 1.9V4.5h2.6v.7z"
              fill="#FE2C55"
              transform="translate(0.7 0.5)"
            />
            <path
              d="M15.8 5.2c.9 1.1 2.1 1.8 3.5 2v2.7c-1.4-.1-2.6-.5-3.6-1.2v5.8a4.8 4.8 0 1 1-4.8-4.8c.4 0 .8 0 1.2.1v2.7a2.2 2.2 0 1 0 1.1 1.9V4.5h2.6v.7z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case 'mobile-production':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <Smartphone className="h-4 w-4" />
        </span>
      );

    case 'storyboard':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <Clapperboard className="h-4 w-4" />
        </span>
      );

    case 'editorial-calendar':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <CalendarDays className="h-4 w-4" />
        </span>
      );

    case 'insights':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <Lightbulb className="h-4 w-4" />
        </span>
      );

    case 'btl':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <Megaphone className="h-4 w-4" />
        </span>
      );

    case 'cobranding':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <Layers className="h-4 w-4" />
        </span>
      );

    case 'copywriting':
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <Feather className="h-4 w-4" />
        </span>
      );

    default:
      return (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#141414]/12 bg-[#F5F3EE] text-[#141414]"
          title={name}
        >
          <Compass className="h-4 w-4" />
        </span>
      );
  }
}
