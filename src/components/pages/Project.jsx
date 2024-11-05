import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingBar from "./LoadingBar"; // LoadingBar 컴포넌트를 import 해야 합니다
import styles from "./Project.module.scss";
import gwating from "../../assets/images/gwating1.png";
import ox from "../../assets/images/myAss.png";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const projects = [
    {
      id: "1",
      title: "Gwating.",
      description:
        "대학생들의 소개팅을 위한 플랫폼. 사용자 친화적인 인터페이스와 매칭 알고리즘을 통해 대학생들의 만남을 주선합니다.",
      skills: [
        "Java",
        "Spring Boot",
        "MySQL",
        "Redis",
        "AWS(EC2)",
        "AWS(S3)",
        "AWS(RDS)",
        "Docker",
        "JPA",
        "React",
      ],
      image: `${gwating}`,
    },
    {
      id: "2",
      title: "Buddies.",
      description:
        "마음의 안식처와 소통의 공간. 생각을 정리하고 타인과 교류하며 내면의 평화를 찾는 곳입니다.",
      skills: [
        "Java",
        "Spring Boot",
        "MySQL",
        "HTML/CSS",
        "MyBatis",
        "WebSocket",
      ],
      image: `${ox}`,
    },

    // 다른 프로젝트들 추가...
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectRefs.current.forEach((project, index) => {
        ScrollTrigger.create({
          trigger: project,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(project, {
              opacity: self.progress > 0.5 ? 1 - (self.progress - 0.5) * 2 : 1,
              scale: 1 + self.progress * -0.09,
              y: -100 * self.progress,
              z: 500,
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  const handleViewProject = (projectId) => {
    console.log("Button clicked:", projectId); // 디버깅용 로그 추가
    setCurrentProjectId(projectId);
    setIsLoading(true);
    setLoadingProgress(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 1;
          setLoadingProgress(progress);
          if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              handleAnimationComplete(projectId);
            }, 1000); // 0.5초 대기 후 페이지 전환
          }
        }, 10);
      });
    });
  };

  const handleAnimationComplete = (projectId) => {
    // ScrollTrigger 인스턴스 제거
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    setIsLoading(false);
    setLoadingProgress(0);
    navigate(`/project/${projectId}`);
  };

  return (
    <div ref={containerRef} className={styles.projectContainer}>
      <h2 className={styles.bTitle}>featured projects,</h2>
      {isLoading && <LoadingBar progress={loadingProgress} />}
      <div className={styles.projectTitleContainer}></div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className={styles.projectSection}
        >
          <div className={styles.projectImage}>
            <img src={project.image} alt={project.title} />
          </div>
          <div className={styles.projectContent}>
            <div>
              {/* <div className={styles.projectTitle}>PROJECT01 */}
              {/* <span className={styles.star}>
                <img
                  src="https://framerusercontent.com/images/iPTydRIhKgOD4qBPAkwwMMT5Aak.png"
                  alt=""
                />
              </span>*/}
              {/* </div>  */}

              <h2>{project.title}</h2>

              <p>{project.description}</p>
              <div className={styles.skills}>
                {project.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("버튼 클릭됨:", project.id); // 디버깅 로그
                handleViewProject(project.id);
              }}
              className={styles.exploreButton}
            >
              View Details <b>→</b>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
