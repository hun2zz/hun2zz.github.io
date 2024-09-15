import React from "react";
import styles from "./Project.module.scss";

const Project = () => {
  const projects = [
    {
      period: "2024. 07.17 ~ 2024. 08.29",
      title: "대학생들끼리의 과팅을 위한 플랫폼 개발 및 배포",
      company: "팀명 : 3on3",
      teamComposition: "풀스택 개발자 6명",
      projectPurpose:
        "코로나 이후 사람을 만나기 어색해진 사람들을 위한 과팅 플랫폼",
      mainTasks: [
        "RESTful API 설계 및 구현을 통한 미팅 그룹 CRUD 기능 개발",
        "Redis를 활용한 24시간 유효 초대코드 생성 및 관리 시스템 구축",
        "초대 링크 원클릭 가입 프로세스를 위한 백엔드 로직 구현",
        "그룹 호스트 권한 관리 시스템 개발 (참여 승인/거절, 멤버 추방 기능)",
        "Java Mail Sender를 이용한 회원탈퇴 이메일 인증 프로세스 구현",
        "AWS EC2 인스턴스에 Docker 컨테이너화된 애플리케이션 배포 및 도메인 연결",
        "팀 리더로서 GitHub 저장소 관리, merge 충돌 해결 주도",
      ],
      techStack:
        "Java, Spring Boot, MySQL, Redis, AWS(EC2), AWS(S3), AWS(RDS), Docker, JPA, React",
      references: [
        {
          title: "GitHub 저장소",
          url: "https://github.com/3on3",
        },
        {
          title: "프로젝트 시연 영상",
          url: "https://youtu.be/h7dzoAYHPUE?si=C30fryp959qUZ1NQ",
        },
        {
          title: "프로젝트 PPT",
          url: "https://www.canva.com/design/DAGOv7BsxsI/OELVr2tf_w7rOtJAkvajKQ/view?utm_content=DAGOv7BsxsI&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        },
      ],
    },
    {
      period: "2024. 06.21 ~ 2024. 07.09",
      title: "바쁜 현대인들을 위해 쉬어갈 수 있는 페이지",
      company: "팀명 : 편히쉬조",
      teamComposition: "풀스택 개발자 5명",
      projectPurpose:
        "사람들은 누구나 기댈 곳이 필요하고 생각을 비우거나 정리하는 시간이 필요하다고 느껴 여러 사람과 소통하면서 마음을 비울 수 있는 공간",
      mainTasks: [
        "WebSocket 프로토콜을 활용한 실시간 양방향 통신 시스템 구축으로 사용자 간 즉각적 상호작용 구현",
        "동적 로드 밸런싱 로직 개발: 채팅방 최대 인원(50명) 제한 및 자동 분배 시스템 구현으로 서버 부하 관리",
        "어드민 컨트롤 시스템 개발: 실시간 주제 변경 시 전체 사용자 자동 마이그레이션 로직 구현",
        "관리자 대시보드 개발: 실시간 채팅 주제 설정 및 모니터링 기능 구현으로 운영 효율성 증대",
        "팀 리더로서 Git 기반 협업 환경 최적화: merge 전략 수립 및 충돌 해결 주도",
      ],
      techStack: "Java, Spring Boot, MySQL, HTML/CSS, MyBatis, WebSocket",
      references: [
        {
          title: "GitHub 저장소",
          url: "https://github.com/project5jo/maroon5",
        },
      ],
    },
  ];

  return (
    <div className={styles.contai}>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.header}>
              <span className={styles.period}>{project.period}</span>
              <p className={styles.company}>{project.company}</p>

              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
            <div className={styles.content}>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>인력구성</h4>
                <p>{project.teamComposition}</p>
              </div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>프로젝트 목적</h4>
                <p>{project.projectPurpose}</p>
              </div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>주요업무 및 상세역할</h4>
                <ul className={styles.list}>
                  {project.mainTasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>사용 기술</h4>
                <div className={styles.techStack}>
                  {project.techStack.split(", ").map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>참고 자료</h4>
                <ul className={styles.list}>
                  {project.references.map((ref, refIndex) => (
                    <li key={refIndex}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
