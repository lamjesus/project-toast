import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({data}) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast type={data.variant}>{data.text}</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast type="error">Example error toast</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
