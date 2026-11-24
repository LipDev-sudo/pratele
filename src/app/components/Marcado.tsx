import { createContext, useContext, type ReactNode } from 'react';
import { loja } from '../../loja';

/** Liga e desliga os marcadores "Sua logo aqui" etc. Só existe na demonstração. */
export const MarcadoresContext = createContext(false);

interface MarcadoProps {
  rotulo: string;
  children: ReactNode;
  /** Onde fica a etiqueta: acima (padrão), abaixo, à direita ou dentro do elemento. */
  posicao?: 'acima' | 'abaixo' | 'direita' | 'dentro';
  className?: string;
}

export function Marcado({ rotulo, children, posicao = 'acima', className = '' }: MarcadoProps) {
  const ativo = useContext(MarcadoresContext) && loja.demonstracao;
  if (!ativo) return <>{children}</>;
  return (
    <span className={`marcado marcado-ativo ${className}`}>
      {children}
      <span className={`marcador ${posicao === 'acima' ? '' : `marcador-${posicao}`}`} aria-hidden="true">{rotulo}</span>
    </span>
  );
}
