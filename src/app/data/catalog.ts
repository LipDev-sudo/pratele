import { loja, type Produto } from '../../loja';

export type Product = Produto;

export const products: Product[] = loja.produtos;

const normalize = (value: string) => value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLocaleLowerCase('pt-BR').trim();

export const categoriasDe = (catalog: Product[]) => ['Todos', ...new Set(catalog.map((product) => product.category))];

export const filterProducts = (catalog: Product[], query: string, category: string) => {
  const normalizedQuery = normalize(query);
  return catalog.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category;
    const searchable = normalize([product.name, product.description, product.material, product.category].join(' '));
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });
};

export const formatPrice = (price: number) => `R$ ${price.toFixed(2).replace('.', ',')}`;

/** Link do WhatsApp com mensagem. Sem número, abre o WhatsApp para a pessoa escolher o contato. */
export const linkWhatsApp = (numero: string, mensagem: string) =>
  `https://wa.me/${numero.replace(/\D/g, '')}?text=${encodeURIComponent(mensagem)}`;

export const generateWhatsAppLink = (product: Product): string =>
  linkWhatsApp(
    loja.whatsapp,
    [loja.mensagens.produto, '', `*${product.name}*`, `A partir de ${formatPrice(product.price)}`, '', 'Quero conversar sobre disponibilidade e acabamento.'].join('\n'),
  );

export const generalWhatsAppLink = linkWhatsApp(loja.whatsapp, loja.mensagens.geral);
