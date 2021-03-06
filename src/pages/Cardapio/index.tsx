import styles from './Cardapio.module.scss';
import theme from 'styles/Tema.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import { Filtro, OpcoesOrdenador } from 'types/Cardapio';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<Filtro>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={theme.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
