import type { ReactNode } from 'react';
import { loja } from '../../loja';
import { Marcado } from './Marcado';

interface BrandMarkProps { compact?: boolean; marcar?: boolean }

/** Logo e nome da loja. Sem logo configurada, a demonstração mostra o espaço reservado. */
export function BrandMark({ compact = false, marcar = false }: BrandMarkProps) {
  const conteudo: ReactNode = (
    <span className="inline-flex min-w-0 items-center gap-3" aria-label={loja.negocio}>
      {loja.logo ? (
        <img src={loja.logo} alt="" aria-hidden="true" className="h-9 w-auto shrink-0" />
      ) : (
        <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-dashed border-[var(--linha-forte)] text-[11px] font-medium text-[var(--texto-3)]">
          logo
        </span>
      )}
      {compact ? null : <span className="block truncate text-[17px] font-medium tracking-[-.01em] text-[var(--texto)]">{loja.negocio}</span>}
    </span>
  );
  return marcar ? <Marcado rotulo="Sua logo e seu nome aqui" posicao="abaixo">{conteudo}</Marcado> : conteudo;
}
