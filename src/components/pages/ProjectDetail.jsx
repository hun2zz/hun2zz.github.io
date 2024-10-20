import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectDetail.module.scss";
import ProjectView from "./ProjectView";
import myAssImage from "../../assets/images/buddies_project1.png";
import gwatingImage from "../../assets/images/gwating.png";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    window.scrollTo(0, 0);
    document.body.style.overflow = "";

    const fetchedProject = {
      id: id,
      title: `프로젝트 ${id}`,
      description: `프로젝트 ${id}에 대한 상세 설명입니다.`,
    };
    setProject(fetchedProject);
  }, [id]);

  if (!project) {
    return <div>로딩 중...</div>;
  }

  const isGwating = id === "1";
  const backgroundImage = isGwating ? gwatingImage : myAssImage;
  const projectName = isGwating ? "Gwating" : "Buddies";

  return (
    <>
      <div className={styles.projectDetailContainer}>
        <div className={styles.projectContainer}>
          <div
            className={styles.projectBox}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div
              className={`${styles.textOverlayBox} ${
                isGwating ? styles.darkText : styles.lightText
              }`}
            >
              <div className={styles.textOverlay}>PROJECT.</div>
              <div
                className={`${styles.textOverlayTwo} ${
                  isGwating ? styles.dark : ""
                }`}
              >
                {projectName}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectView projectId={id} />
    </>
  );
};

export default ProjectDetail;
