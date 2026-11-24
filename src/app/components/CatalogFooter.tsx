import { ExternalLink } from 'lucide-react';
import { loja } from '../../loja';
import { BrandMark } from './BrandMark';
import { SeloAchse } from './SeloAchse';

export function CatalogFooter() {
  return (
    <footer className="bg-[#211e1b] text-white"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end"><div><BrandMark inverse /><p className="mt-4 max-w-md text-sm leading-6 text-white/60">{loja.rodape.texto}</p></div><nav aria-label="Links externos" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">{loja.rodape.links.map((link) => <a key={link.href} className="footer-link" href={link.href} target="_blank" rel="noreferrer">{link.rotulo} <ExternalLink aria-hidden="true" className="size-3.5" /></a>)}<a className="footer-link" href="#inicio">Voltar ao início</a></nav></div>
      <div className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">{loja.selo ? <SeloAchse /> : null}<p className="pr-16 text-xs text-white/60 sm:pr-20">{loja.rodape.direitos}</p></div>
    </div></footer>
  );
}
