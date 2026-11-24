import { ArrowDown } from 'lucide-react';
import { loja } from '../../loja';
import { generalWhatsAppLink } from '../data/catalog';
import { Marcado } from './Marcado';

const [principal, secundaria] = loja.hero.imagens;

export function HeroSection() {
  return (
    <section id="inicio" className="border-b border-[var(--linha)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="section-kicker">{loja.hero.chamada}</p>
          <Marcado rotulo="Sua frase aqui" className="marcado-respiro mt-4">
            <h1 className="text-balance text-[40px] font-medium leading-[1.05] tracking-[-.03em] text-[var(--texto)] sm:text-[56px] lg:text-[64px]">{loja.hero.titulo}</h1>
          </Marcado>
          <p className="mt-6 max-w-[36rem] text-lg leading-[1.6] text-[var(--texto-2)]">{loja.hero.texto}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#catalogo" className="primary-action">Ver as peças <ArrowDown aria-hidden="true" className="size-4" strokeWidth={1.5} /></a>
            <a href={generalWhatsAppLink} target="_blank" rel="noreferrer" className="secondary-action">Conversar pelo WhatsApp</a>
          </div>
        </div>
        <Marcado rotulo="Suas fotos aqui" posicao="dentro" className="block w-full">
          <div className="grid grid-cols-[1.15fr_.85fr] gap-3 sm:gap-4" aria-label={`Seleção do catálogo de ${loja.negocio}`}>
            <img src={principal.src} alt={principal.alt} className="aspect-[4/5] w-full rounded-2xl object-cover" width="960" height="960" />
            <div className="grid content-end gap-3 sm:gap-4">
              <img src={secundaria.src} alt={secundaria.alt} className="aspect-square w-full rounded-2xl object-cover" width="960" height="960" />
              <div className="rounded-2xl border border-[var(--linha)] bg-[var(--superficie)] p-5">
                <p className="flex items-center gap-2 text-sm text-[var(--texto-2)]"><span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--cor-marca)]" />{loja.hero.destaque.titulo}</p>
                <p className="mt-2 text-lg font-medium leading-snug text-[var(--texto)]">{loja.hero.destaque.texto}</p>
              </div>
            </div>
          </div>
        </Marcado>
      </div>
    </section>
  );
}
