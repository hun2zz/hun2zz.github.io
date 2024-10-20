import React from "react";
import styles from "./ProjectView.module.scss";
import ProjectHead from "./project/ProjectHead";
import ProjectBody1 from "./project/ProjectBody";
import ProjectBody2 from "./project/ProjectBody2";
import ProjectFooter from "./project/ProjectFooter";

const ProjectView = ({ projectId }) => {
  const isGwating = projectId === "1";
  return (
    <div className={styles.projectContainer}>
      <ProjectHead projectId={projectId} />
      {isGwating ? <ProjectBody2 /> : <ProjectBody1 />}
      <ProjectFooter projectId={projectId} />
    </div>
  );
};

export default ProjectView;
