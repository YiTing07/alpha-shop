import styles from './ProgressControl.module.scss'
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg';

export default function ProgressControl () {
    return (
      <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
        <section className={`${styles.buttonGroup} col col-12`}>
          <button className={styles.prev}>
            <LeftArrow />
              上一步
          </button>
          <button className={styles.next}>
              下一步
            <RightArrow />
          </button>
        </section>
      </section>
    );
  }