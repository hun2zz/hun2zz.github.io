import React from "react";
import styles from "./ProjectFooter.module.scss";

const ProjectFooter = ({ projectId }) => {
  const isGwating = projectId === "1";
  const githubUrl = isGwating
    ? "https://github.com/3on3/"
    : "https://github.com/project5jo/maroon5";

  return (
    <div className={styles.footer}>
      <div className={styles.footerOne}>
        {isGwating ? "Gwating Github URL" : "Buddies Github URL"}
        <div className={styles.text}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            {githubUrl}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectFooter;
