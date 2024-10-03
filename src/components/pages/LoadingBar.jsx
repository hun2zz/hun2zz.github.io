import React from 'react';
import styles from './LoadingBar.module.scss';

const LoadingBar = ({ progress }) => {
  return (
    <div className={styles.loadingBarContainer}>
      <div 
        className={styles.loadingBar} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;