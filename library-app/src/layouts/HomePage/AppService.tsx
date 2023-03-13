import React from 'react';
import styles from './AppService.module.css';

const AppService = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.hline}>
          <hr />
        </div>
        <div className={styles.innerbox}>
          <div className={styles.author}>
            <p className={styles.authorName}>Ajay Negi</p>
          </div>
          <div className={styles.title}>
            <p>
              hjkk
            </p>
          </div>
          <div className={styles.time}>
            <p>11: AM - 11:30 AM EDT</p>
          </div>
          <div className={styles.details}>
            <p>
              lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppService;
