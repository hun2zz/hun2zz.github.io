import React from "react";
import styles from "./Education.module.scss";

const Education = () => {
  const educations = [
    {
      institution: "목포공업고등학교",
      period: "2018 ~ 2021",
      details: [
        "공업계 고등학교에서 기초 교육 이수",
        "현장 실습 기반으로 사회생활의 기초를 학습",
      ],
    },
    {
      institution: "한국기술화학",
      period: "2021.05 ~ 2022.06",
      details: [
        "다른 전공이지만 비교적 빠른 회사생활을 통해서 책임감과 시간관리 능력을 개발함",
        "다양한 프로젝트를 통해 키운 협업 능력은 개발 팀에서 효과적으로 의사소통하는데에 큰 도움을 줄 수 있음",
      ],
    },
    {
      institution: "중앙정보처리학원",
      period: "2024.02 ~ 2024.08",
      details: [
        "지금까지 학습한 내용을 전부 깃헙 레파지토리에 저장",
        "크고 작은 프로젝트를 통해서 타인과 협업 능력을 키움",
      ],
    },

    {
      institution: "학점은행제",
      period: "2024.02 ~ 현재 진행 중",
      details: ["고등학교 졸업 후 지속적인 자기 개발과 학습 진행 중"],
    },
  ];

  return (
    <div className={styles.container}>
      {educations.map((edu, index) => (
        <div key={index} className={styles.educationItem}>
          <div className={styles.leftColumn}>
            <h3 className={styles.institution}>{edu.institution}</h3>
            <p className={styles.period}>{edu.period}</p>
          </div>
          <div className={styles.rightColumn}>
            <ul className={styles.details}>
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
