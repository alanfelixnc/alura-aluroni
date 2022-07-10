import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(cardapio);

  useEffect(() => {
    function testaBusca(title: string) {
      const regEx = new RegExp(busca, 'i');
      return regEx.test(title);
    }

    function testaFiltro(id: number) {
      if (filtro !== null) return filtro === id;
      return true;
    }

    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(novaLista);
  }, [busca, filtro]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
