import React, { useEffect, useState } from "react";
import styles from "./LoadingBar.module.scss";

const LoadingBar = ({ progress }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.loadingContainer} ${isVisible ? styles.visible : ''}`}>
      <div
        className={styles.loadingCircle}
        style={{
          clipPath: `circle(${progress}% at 50% 100%)`,
        }}
      >
        <div className={styles.content}>PROJECT</div>
      </div>
    </div>
  );
};

export default LoadingBar;
