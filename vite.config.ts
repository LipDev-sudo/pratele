import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { loja } from './src/loja';

const html = (texto: string) => texto.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Preenche título, descrição, cor e imagem de compartilhamento do index.html a partir de src/loja.ts. */
function dadosDaLoja(): Plugin {
  const valores: Record<string, string> = {
    SEO_TITULO: html(loja.seo.titulo),
    SEO_DESCRICAO: html(loja.seo.descricao),
    MARCA: html(loja.negocio),
    COR: html(loja.cor),
    URL: html(loja.url),
    OG_IMAGEM: loja.seo.imagem
      ? `    <meta property="og:image" content="${html(loja.seo.imagem)}" />\n    <meta name="twitter:image" content="${html(loja.seo.imagem)}" />`
      : '',
  };
  return {
    name: 'dados-da-loja',
    transformIndexHtml: (texto) => texto.replace(/%([A-Z_]+)%/g, (trecho, chave: string) => valores[chave] ?? trecho),
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), dadosDaLoja()],
});
