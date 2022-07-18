import styles from './NotFound.module.scss';
import theme from 'styles/Tema.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';

export default function NotFound() {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [theme.container]: true,
      })}
    >
      <NotFoundImage />
    </div>
  );
}
