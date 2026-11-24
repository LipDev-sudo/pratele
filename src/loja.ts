// Configuração da loja. Para implantar para um cliente, edite só este arquivo
// (e as imagens em public/images/products). Veja "Implantação para um cliente" no README.

export interface Produto {
  id: string;
  name: string;
  description: string;
  /** Preço inicial em reais. */
  price: number;
  /** Caminho a partir de public/, por exemplo /images/products/xicara.webp */
  image: string;
  category: string;
  material: string;
  leadTime: string;
}

export interface ConfigLoja {
  /** true mostra os avisos de demonstração; false para a loja de um cliente. */
  demonstracao: boolean;
  /** Logo opcional (caminho a partir de public/). Sem logo, usa o símbolo padrão. */
  logo?: string;
  /** Nome da loja: aparece no cabeçalho, no rodapé, nas seções e no título da página. */
  negocio: string;
  /** WhatsApp só com dígitos, com DDI e DDD, por exemplo 5581999999999. Vazio abre o WhatsApp sem número. */
  whatsapp: string;
  /** Cor principal em hexadecimal. */
  cor: string;
  /** Mostra o selo "Desenvolvido por Achse" no rodapé. */
  selo: boolean;
  /** Endereço público do site (canonical e redes sociais). */
  url: string;
  seo: { titulo: string; descricao: string; imagem?: string };
  hero: {
    chamada: string;
    titulo: string;
    texto: string;
    aviso?: string;
    imagens: [{ src: string; alt: string }, { src: string; alt: string }];
    destaque: { titulo: string; texto: string };
  };
  catalogo: { titulo: string; texto: string; rotuloAtributo: string; rotuloPrazo: string; singular: string; plural: string };
  mensagens: { geral: string; produto: string };
  rodape: { texto: string; direitos: string; links: { rotulo: string; href: string }[] };
  produtos: Produto[];
}

export const loja: ConfigLoja = {
  demonstracao: true,
  negocio: 'Sua Loja',
  whatsapp: '',
  cor: '#A3132A',
  selo: true,
  url: 'https://pratele.vercel.app/',
  seo: {
    titulo: 'Sua Loja | Catálogo com pedido pelo WhatsApp',
    descricao: 'Demonstração Achse de catálogo on-line: o cliente escolhe o produto e conversa com a loja pelo WhatsApp, com a peça já na mensagem.',
  },
  hero: {
    chamada: 'Catálogo on-line com pedido pelo WhatsApp',
    titulo: 'Escolha a peça e fale direto com a loja',
    texto: 'Cerâmicas feitas à mão em pequenos lotes. Veja material, prazo e valor inicial de cada peça e envie a escolha pelo WhatsApp.',
    imagens: [
      { src: '/images/products/vaso-caminho.webp', alt: 'Conjunto de vasos de cerâmica clara sobre pedestal' },
      { src: '/images/products/prato-horizonte.webp', alt: 'Prato artesanal de borda terrosa' },
    ],
    destaque: { titulo: 'Pequenos lotes', texto: 'Feito à mão, confirmado em conversa' },
  },
  catalogo: {
    titulo: 'Peças para mesa e casa',
    texto: 'Valores iniciais. Acabamento e disponibilidade são confirmados na conversa com a loja.',
    rotuloAtributo: 'Material',
    rotuloPrazo: 'Prazo',
    singular: 'peça encontrada',
    plural: 'peças encontradas',
  },
  mensagens: {
    geral: 'Olá! Vi o catálogo e quero conversar sobre uma encomenda.',
    produto: 'Olá! Encontrei esta peça no catálogo (demonstração):',
  },
  rodape: {
    texto: 'Demonstração de catálogo com pedido pelo WhatsApp. Loja, peças, preços e prazos são fictícios.',
    direitos: '© 2026 Sua Loja · demonstração',
    links: [{ rotulo: 'Quero um catálogo assim', href: 'https://achse.onrender.com/contato' }],
  },
  produtos: [
    { id: 'xicara-serra', name: 'Xícara Serra', description: 'Xícara de linhas simples, feita em pequenos lotes para cafés sem pressa.', price: 68, image: '/images/products/xicara-serra.webp', category: 'Café', material: 'Grés esmaltado', leadTime: 'Pronta em até 7 dias' },
    { id: 'prato-horizonte', name: 'Prato Horizonte', description: 'Prato raso com borda terracota e acabamento pontilhado, pensado para a mesa diária.', price: 82, image: '/images/products/prato-horizonte.webp', category: 'Mesa', material: 'Cerâmica de alta temperatura', leadTime: 'Pronto em até 10 dias' },
    { id: 'tigela-vale', name: 'Tigela Vale', description: 'Tigela funda de formato orgânico para servir caldos, frutas ou acompanhamentos.', price: 74, image: '/images/products/tigela-vale.webp', category: 'Mesa', material: 'Porcelana fosca', leadTime: 'Pronta em até 10 dias' },
    { id: 'vaso-caminho', name: 'Vaso Caminho', description: 'Vaso escultórico de superfície natural; cada unidade preserva marcas do trabalho manual.', price: 148, image: '/images/products/vaso-caminho.webp', category: 'Decoração', material: 'Argila clara sem esmalte', leadTime: 'Feito sob encomenda' },
    { id: 'porta-vela-bruma', name: 'Porta-vela Bruma', description: 'Peça compacta com contorno irregular para velas aromáticas e pontos de luz suaves.', price: 58, image: '/images/products/castical-brasa.webp', category: 'Decoração', material: 'Cerâmica esmaltada', leadTime: 'Pronto em até 5 dias' },
    { id: 'copo-noite', name: 'Copo Noite', description: 'Copo sem alça com textura mineral e esmalte escuro, ideal para café ou chá.', price: 62, image: '/images/products/jarra-campo.webp', category: 'Café', material: 'Grés pigmentado', leadTime: 'Pronto em até 7 dias' },
  ],
};
