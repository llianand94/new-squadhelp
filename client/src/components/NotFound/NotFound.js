import React from 'react';
import Header from '../Header/Header';
import styles from './NotFound.module.sass';

const NotFound = () => (
  <>
    <Header />
    <div className={styles.container}>
      <span>Page Not Found</span>
    </div>
  </>
);

export default NotFound;
