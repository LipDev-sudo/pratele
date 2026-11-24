import { loja } from '../../loja';

interface BrandMarkProps { compact?: boolean; inverse?: boolean }

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${inverse ? 'text-white' : 'text-[var(--cor-marca)]'}`} aria-label={loja.negocio}>
      {loja.logo ? (
        <img src={loja.logo} alt="" aria-hidden="true" className="h-8 w-auto shrink-0" />
      ) : (
        <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 32 32" fill="none">
          <path d="M5 8.5h22M7.5 15.75h19M5 23h22" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
          <path d="M8 6v19.5M24 6v19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".62" />
        </svg>
      )}
      {compact ? null : <span className="text-xl font-bold tracking-[-0.03em]">{loja.negocio}</span>}
    </span>
  );
}
