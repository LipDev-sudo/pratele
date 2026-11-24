import { MessageCircle, Search } from 'lucide-react';
import { generalWhatsAppLink } from '../data/catalog';
import { BrandMark } from './BrandMark';

interface CatalogHeaderProps { query: string; onQueryChange: (value: string) => void }

const campo = 'h-10 w-full rounded-lg border border-[var(--linha-forte)] bg-[var(--superficie)] pl-10 pr-4 text-[var(--texto)] placeholder:text-[var(--texto-3)] outline-none transition-colors focus:border-[var(--texto-2)]';

export function CatalogHeader({ query, onQueryChange }: CatalogHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--linha)] bg-[var(--fundo)]/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="foco inline-flex min-h-11 shrink-0 items-center rounded-md"><BrandMark marcar /></a>
        <label className="relative ml-auto hidden w-full max-w-xs md:block">
          <span className="sr-only">Buscar no catálogo</span>
          <Search aria-hidden="true" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--texto-3)]" strokeWidth={1.5} />
          <input type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar" className={`${campo} text-sm`} />
        </label>
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          <a href="#catalogo" className="nav-link">Peças</a>
          <a href="#como-funciona" className="nav-link">Como funciona</a>
        </nav>
        <a href={generalWhatsAppLink} target="_blank" rel="noreferrer" className="foco ml-auto inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg bg-[var(--texto)] px-4 text-sm font-medium text-[var(--fundo)] transition-colors hover:bg-white md:ml-0">
          <MessageCircle aria-hidden="true" className="size-4" strokeWidth={1.5} />
          <span className="hidden sm:inline">Conversar</span>
          <span className="sr-only sm:hidden">Conversar pelo WhatsApp</span>
        </a>
      </div>
      <div className="border-t border-[var(--linha)] px-4 py-3 md:hidden">
        <label className="relative mx-auto block max-w-7xl">
          <span className="sr-only">Buscar no catálogo</span>
          <Search aria-hidden="true" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--texto-3)]" strokeWidth={1.5} />
          <input type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar" className={`${campo} h-11 text-base`} />
        </label>
      </div>
    </header>
  );
}
