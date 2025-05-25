import css from './Loader.module.css';
import { PuffLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <span className={css.text}>L</span>
      <PuffLoader color="#02fd80" cssOverride={{ display: 'inline-block' }} />
      <span className={css.text}>ADING . . .</span>
    </div>
  );
}