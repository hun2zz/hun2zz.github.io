import React from "react";
import styles from "./ProjectHead.module.scss";

const ProjectHead = ({ projectId }) => {
  const isGwating = projectId === "1";

  const skillsGwating = [
    "Java",
    "Spring Boot",
    "MySQL",
    "HTML/CSS",
    "Redis",
    "AWS(EC2)",
    "AWS(S3)",
    "AWS(RDS)",
    "Docker",
    "JPA",
    "React",
  ];
  const skillsBuddies = [
    "Java",
    "Spring Boot",
    "MySQL",
    "HTML/CSS",
    "MyBatis",
    "WebSocket",
  ];

  return (
    <div className={styles.worksDetailContent}>
      <div className={styles.worksDetailContentInner}>
        <div className={styles.worksDetailHead}>
          <div className={styles.worksDetailName}>
            <h2 className={styles.worksDetailNameMain}>
              {isGwating ? "Gwating" : "My Buddies Site"}
            </h2>
            <p className={styles.worksDetailNameSub}>
              {isGwating
                ? "과팅 매칭 서비스. 대학생들의 소통과 만남을 위한 플랫폼"
                : "마음의 안식처와 소통의 공간. 생각을 정리하고 타인과 교류하며 내면의 평화를 찾는 곳"}
            </p>
          </div>
        </div>
        <div className={styles.workDetailColumn}>
          <div className={styles.leftColumn}>
            <p>CLIENT</p>
            <p>SCOPE</p>
            <p>RELEASE</p>
            <p>WEBSITE</p>
            <p>SKILL</p>
          </div>
          <div className={styles.middleColumn}>
            <p>-</p>
            <p>신규 WEB 사이트</p>
            <p>{isGwating ? "2024.08.29" : "2024.07.09"}</p>
            <p className={styles.website}>
              <a
                href={
                  isGwating
                    ? "https://github.com/3on3"
                    : "https://github.com/project5jo/maroon5"
                }
              >
                {isGwating
                  ? "https://github.com/3on3"
                  : "https://github.com/project5jo/maroon5"}
              </a>
            </p>
            <div className={styles.skillList}>
              {(isGwating ? skillsGwating : skillsBuddies).map(
                (skill, index) => (
                  <span key={index} className={styles.skillItem}>
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
          <div className={styles.rightColumn}>
            <p>CREDIT</p>
            <div className={styles.creditContent}>
              <div>
                <p>Project Manager</p>
                <p>Designer</p>
                <p>Backend Engineer</p>
                <p>Frontend Engineer</p>
              </div>
              <div>
                <p>{isGwating ? "Jin Sanghun" : "Jin Sanghun"}</p>
                <p>All Member</p>
                <p>All Member</p>
                <p>All Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHead;
