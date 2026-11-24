import { MessageCircle } from 'lucide-react';
import { generalWhatsAppLink } from '../data/catalog';
import { Marcado } from './Marcado';

export function WhatsAppFloating() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <Marcado rotulo="Seu WhatsApp" posicao="direita">
        <a href={generalWhatsAppLink} target="_blank" rel="noreferrer" aria-label="Conversar sobre uma encomenda pelo WhatsApp" className="foco inline-flex size-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-[0_8px_24px_rgba(0,0,0,.35)] transition-colors hover:bg-[#19663f]">
          <MessageCircle aria-hidden="true" className="size-6" strokeWidth={1.5} />
        </a>
      </Marcado>
    </div>
  );
}
