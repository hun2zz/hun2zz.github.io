import React from "react";
import styles from "./ProjectFooter.module.scss";

const ProjectFooter = ({ projectId }) => {
  const isGwating = projectId === "1";
  return (
    <div className={styles.footer}>
      <div className={styles.footerOne}>
        {isGwating ? "Gwating Github URL" : "Buddies Github URL"}
        <div className={styles.text}>
          {isGwating
            ? "https://github.com/3on3/"
            : "https://github.com/project5jo/buddies"}
        </div>
      </div>
    </div>
  );
};

export default ProjectFooter;
