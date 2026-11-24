import { MessageCircle, ScanSearch, Smartphone } from 'lucide-react';

const steps = [
  { icon: ScanSearch, title: 'Encontre com contexto', description: 'Categoria, material, valor inicial e prazo aparecem antes da conversa.' },
  { icon: MessageCircle, title: 'Pergunte pela peça certa', description: 'O WhatsApp abre com o nome do item e o valor já escritos na mensagem.' },
  { icon: Smartphone, title: 'Pensado para o celular', description: 'Sem cadastro e sem carrinho: a venda é fechada na conversa com a loja.' },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-[var(--linha)] bg-[var(--fundo-2)] py-16 md:py-24" id="como-funciona">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">Como funciona</p>
          <h2 className="section-title">Da vitrine à conversa em três passos</h2>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--linha)] bg-[var(--linha)] md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-[var(--fundo-2)] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <step.icon aria-hidden="true" className="size-[18px] text-[var(--texto-2)]" strokeWidth={1.5} />
                <span className="preco text-xs text-[var(--texto-3)]">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-8 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--texto-2)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
