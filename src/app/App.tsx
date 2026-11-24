import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { loja } from '../loja';
import { CatalogFooter } from './components/CatalogFooter';
import { CatalogHeader } from './components/CatalogHeader';
import { FeaturesSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection';
import { MarcadoresContext } from './components/Marcado';
import { ProductCatalog } from './components/ProductCatalog';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  const [query, setQuery] = useState('');
  const [marcadores, setMarcadores] = useState(loja.demonstracao);
  return (
    <MarcadoresContext.Provider value={marcadores}>
      <div className="min-h-screen bg-[var(--fundo)] text-[var(--texto)]">
        <a className="skip-link" href="#catalogo">Ir para o catálogo</a>
        <CatalogHeader query={query} onQueryChange={setQuery} />
        <main>
          <HeroSection />
          <ProductCatalog query={query} />
          <FeaturesSection />
        </main>
        <CatalogFooter />
        <WhatsAppFloating />
        {loja.demonstracao ? (
          <button
            type="button"
            onClick={() => setMarcadores((v) => !v)}
            aria-pressed={marcadores}
            className="foco fixed bottom-4 left-4 z-40 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--linha-forte)] bg-[var(--elevado)] px-4 text-sm font-medium text-[var(--texto)] shadow-[0_8px_24px_rgba(0,0,0,.35)] transition-colors hover:bg-[#262a31] sm:bottom-6 sm:left-6"
          >
            {marcadores ? <EyeOff aria-hidden="true" className="size-4" strokeWidth={1.5} /> : <Eye aria-hidden="true" className="size-4" strokeWidth={1.5} />}
            <span className="hidden sm:inline">{marcadores ? 'Ocultar marcações' : 'Ver onde entra sua marca'}</span>
            <span className="sm:hidden">Marcações</span>
          </button>
        ) : null}
      </div>
    </MarcadoresContext.Provider>
  );
}
