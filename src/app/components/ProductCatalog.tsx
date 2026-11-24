import { MessageCircle, SearchX } from 'lucide-react';
import { useState } from 'react';
import { loja } from '../../loja';
import { categoriasDe, filterProducts, formatPrice, generateWhatsAppLink, products } from '../data/catalog';
import { Marcado } from './Marcado';

const categories = categoriasDe(products);
interface ProductCatalogProps { query: string }

export function ProductCatalog({ query }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredProducts = filterProducts(products, query, activeCategory);
  return (
    <section className="py-16 md:py-24" id="catalogo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 border-b border-[var(--linha)] pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-kicker">{loja.negocio}</p>
            <h2 className="section-title">{loja.catalogo.titulo}</h2>
            <p className="mt-3 max-w-2xl text-[var(--texto-2)]">{loja.catalogo.texto}</p>
          </div>
          <p aria-live="polite" className="preco text-sm text-[var(--texto-3)]">{filteredProducts.length} {filteredProducts.length === 1 ? loja.catalogo.singular : loja.catalogo.plural}</p>
        </div>
        <div className="my-8 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar por categoria">
          {categories.map((category) => {
            const selected = activeCategory === category;
            return <button key={category} type="button" aria-pressed={selected} onClick={() => setActiveCategory(category)} className={`filter-pill ${selected ? 'filter-pill-active' : ''}`}>{category}</button>;
          })}
        </div>
        {filteredProducts.length > 0 ? (
          <Marcado rotulo="Seus produtos e preços aqui" className="block">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article key={product.id} className="min-w-0">
                  <div className="overflow-hidden rounded-2xl border border-[var(--linha)] bg-[var(--superficie)]">
                    <img src={product.image} alt={product.name} width="960" height="960" loading="lazy" className="aspect-square w-full object-cover" />
                  </div>
                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-[var(--texto-3)]">{product.category}</p>
                        <h3 className="mt-1 text-lg font-medium text-[var(--texto)]">{product.name}</h3>
                      </div>
                      <p className="shrink-0 text-right text-xs text-[var(--texto-3)]">a partir de<strong className="preco mt-1 block text-base font-medium text-[var(--texto)]">{formatPrice(product.price)}</strong></p>
                    </div>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-[var(--texto-2)]">{product.description}</p>
                    <dl className="mt-4 grid grid-cols-2 gap-4 border-y border-[var(--linha)] py-3 text-sm">
                      <div><dt className="text-xs text-[var(--texto-3)]">{loja.catalogo.rotuloAtributo}</dt><dd className="mt-1 text-[var(--texto-2)]">{product.material}</dd></div>
                      <div><dt className="text-xs text-[var(--texto-3)]">{loja.catalogo.rotuloPrazo}</dt><dd className="mt-1 text-[var(--texto-2)]">{product.leadTime}</dd></div>
                    </dl>
                    <a href={generateWhatsAppLink(product)} target="_blank" rel="noreferrer" className="foco mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[var(--linha-forte)] bg-[var(--elevado)] px-4 text-sm font-medium text-[var(--texto)] transition-colors hover:bg-[#262a31]">
                      <MessageCircle aria-hidden="true" className="size-4 text-[var(--texto-2)]" strokeWidth={1.5} />Consultar esta peça
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Marcado>
        ) : (
          <div className="rounded-2xl border border-dashed border-[var(--linha-forte)] bg-[var(--superficie)] px-6 py-16 text-center">
            <SearchX aria-hidden="true" className="mx-auto size-6 text-[var(--texto-3)]" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg font-medium">Nenhuma peça encontrada</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--texto-2)]">Tente outro termo ou volte para todas as peças.</p>
            <button type="button" onClick={() => setActiveCategory('Todos')} className="foco mt-6 rounded-md text-sm font-medium text-[var(--texto)] underline underline-offset-4">Mostrar todas as peças</button>
          </div>
        )}
      </div>
    </section>
  );
}
