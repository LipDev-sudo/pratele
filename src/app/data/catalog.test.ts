import { describe, expect, it } from 'vitest';
import { categoriasDe, filterProducts, generateWhatsAppLink, linkWhatsApp, products } from './catalog';

describe('filterProducts', () => {
  it('matches names and descriptions without requiring accents', () => {
    expect(filterProducts(products, 'xicara', 'Todos').map((product) => product.id)).toEqual(['xicara-serra']);
  });

  it('filters the demonstrative catalog by category', () => {
    expect(filterProducts(products, '', 'Decoração').every((product) => product.category === 'Decoração')).toBe(true);
  });

  it('combines category and search filters', () => {
    expect(filterProducts(products, 'terracota', 'Mesa').map((product) => product.id)).toEqual(['prato-horizonte']);
  });
});

describe('categoriasDe', () => {
  it('derives the filter list from the configured products, in order and without repetition', () => {
    expect(categoriasDe(products)).toEqual(['Todos', 'Café', 'Mesa', 'Decoração']);
  });
});

describe('generateWhatsAppLink', () => {
  it('creates a contextual demonstrative inquiry', () => {
    const link = generateWhatsAppLink(products[0]);
    const url = new URL(link);
    const message = url.searchParams.get('text');

    expect(url.hostname).toBe('wa.me');
    expect(message).toContain(products[0].name);
    expect(message).toContain('demonstração');
  });
});

describe('linkWhatsApp', () => {
  it('opens the chat without a number when none is configured', () => {
    expect(new URL(linkWhatsApp('', 'Oi')).pathname).toBe('/');
  });

  it('sends the message to the store number, keeping only digits', () => {
    const url = new URL(linkWhatsApp('+55 (81) 99999-0000', 'Oi'));
    expect(url.pathname).toBe('/5581999990000');
    expect(url.searchParams.get('text')).toBe('Oi');
  });
});
