import cardapio from 'data/cardapio.json';

export type Cardapio = typeof cardapio;

export type Prato = typeof cardapio[0];

export type Filtro = number | null;

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';
