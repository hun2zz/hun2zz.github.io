import React from "react";
import styles from "./Information.module.scss";

const Information = ({ h1name, children }) => {
  return (
    <div
      className={styles.informationContainer}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <h1 className={styles.information}>{h1name}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Information;
