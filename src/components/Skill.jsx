import React from "react";
import styles from "./Skill.module.scss";

const Skill = () => {
  const skills = [
    {
      category: "Backend",
      technologies: [
        "Java",
        "Groovy",
        "NodeJS",
        "Spring Web",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Querydsl",
        "MyBatis",
        "Redis",
        "JWT(JSON Web Token)",
        "WebSocket",
        "Hibernate",
        "Junit4/5",
        "Gradle",
        "Maven",
      ],
    },
    {
      category: "DevOps",
      technologies: [
        "MySQL",
        "MariaDB",
        "GithubAction",
        "AWS RDS",
        "AWS S3",
        "AWS EC2",
        "Docker",
      ],
    },
    {
      category: "Frontend",
      technologies: ["JavaScript", "HTML/CSS", "React.js", "SCSS"],
    },
  ];

  return (
    <div className={styles.skillContainer}>
      <h2 className={styles.title}>
        프로젝트에서 사용했거나, 공부한 기술들입니다.
      </h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{skillCategory.category}</h3>
          <div className={styles.skillList}>
            {skillCategory.technologies.map((tech, techIndex) => (
              <span key={techIndex} className={styles.skillItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
