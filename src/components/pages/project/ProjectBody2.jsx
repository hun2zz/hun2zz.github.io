import React from "react";
import styles from "./ProjectBody.module.scss";

const ProjectBody2 = () => {
  return (
    <div className={styles.projectBodyContainer}>
      <div className={styles.projectBodyInfo}>
        '과팅'은 한국 대학생들을 위해 특별히 설계된 혁신적인 소개팅
        플랫폼입니다. 글로벌 데이팅 앱의 장점을 살리면서도, 한국 대학 문화의
        특성을 깊이 반영하여 안전하고 즐거운 만남의 장을 제공합니다. 학교와
        학과를 기반으로 한 네트워크를 통해 공통 관심사를 가진 사용자들을
        연결하며, 단순한 만남을 넘어 의미 있는 관계 형성과 폭넓은 사회적
        네트워크 구축을 지원합니다.
      </div>
      <h2 className={styles.projectBodyTitle}>
        직관적인 미팅 그룹 관리 시스템
      </h2>
      <div className={styles.projectBodyText}>
        사용자 중심의 인터페이스로 미팅 그룹 생성과 관리를 간소화했습니다.
        누구나 쉽게 미팅을 주최하고 참여할 수 있도록 설계하여, 활발한 소셜
        활동을 촉진합니다.
      </div>
      <div className={styles.imageGallery}>
        <div className={styles.galleryItem}>
          <img
            src={require("../../../assets/images/gwating_project1.png")}
            alt="미팅 그룹 관리 1"
          />
        </div>
        <div className={styles.galleryItem}>
          <img
            src={require("../../../assets/images/gwating_project2.png")}
            alt="미팅 그룹 관리 2"
          />
        </div>
      </div>
      <h2 className={styles.projectBodyTitle}>효율적인 호스트 권한 관리</h2>
      <div className={styles.projectBodyText}>
        그룹 호스트에게 참여자 관리, 초대 코드 발급, 그룹 설정 변경 등의
        포괄적인 권한을 부여했습니다. 화면 중앙 상단의 설정 아이콘을 통해 그룹
        상태를 쉽게 수정할 수 있어, 유연한 그룹 운영이 가능합니다.
      </div>
      <div className={styles.projectBodyImage1}>
        <img
          src={require("../../../assets/images/gwating_project3.png")}
          alt="호스트 관리 패널"
        />
      </div>
      <h2 className={styles.projectBodyTitle}>참여자 관리 기능 강화</h2>
      <div className={styles.projectBodyText}>
        호스트는 그룹의 건전한 분위기 유지를 위해 필요시 참여자를 추방할 수
        있습니다. 이 기능을 통해 그룹 내 질서를 유지하고 모든 참여자에게
        안전하고 즐거운 경험을 제공합니다.
      </div>
      <div className={styles.imageGallery}>
        <div className={styles.galleryItem}>
          <img
            src={require("../../../assets/images/gwating_project4.png")}
            alt="참여자 추방 1"
          />
        </div>
        <div className={styles.galleryItem}>
          <img
            src={require("../../../assets/images/gwating_project5.png")}
            alt="참여자 추방 2"
          />
        </div>
      </div>
      <h2 className={styles.projectBodyTitle}>보안성 높은 초대 시스템</h2>
      <div className={styles.projectBodyText}>
        그룹의 호스트는 24시간 동안 유효한 초대 코드를 발급받을 수 있습니다. 이
        시스템을 통해 그룹의 프라이버시를 보호하고, 원하는 참여자만 선별적으로
        초대할 수 있습니다.
      </div>
      <div className={styles.projectBodyImage1}>
        <img
          src={require("../../../assets/images/gwating_project6.png")}
          alt="초대 코드 발급"
        />
      </div>
      <div className={styles.projectBodyText}>
        유저는 호스트에게 받은 초대 코드를 입력하여 간편하게 그룹에 참여할 수
        있습니다.
      </div>
      <div className={styles.projectBodyImage1}>
        <img
          src={require("../../../assets/images/gwating_project7.png")}
          alt="초대 코드 입력"
        />
      </div>
      <div className={styles.projectBodyText}>
        호스트는 초대 요청이 온 유저의 그룹 가입을 수락하거나 거절할 수 있어,
        그룹 구성원을 효과적으로 관리할 수 있습니다.
      </div>
      <div className={styles.projectBodyImage1}>
        <img
          src={require("../../../assets/images/gwating_project8.png")}
          alt="초대 요청 관리"
        />
      </div>
      <h2 className={styles.projectBodyTitle}>그룹 생명주기 관리</h2>
      <div className={styles.projectBodyText}>
        호스트는 필요에 따라 그룹을 삭제할 수 있습니다. 그룹 삭제 시 모든 가입
        회원은 자동으로 탈퇴 처리되어, 불필요한 데이터 관리를 방지합니다.
      </div>
      <div className={styles.imageGallery}>
        <div className={styles.galleryItem}>
          <img
            src={require("../../../assets/images/gwating_project9.png")}
            alt="그룹 삭제 1"
          />
        </div>
        <div className={styles.galleryItem}>
          <img
            src={require("../../../assets/images/gwating_project10.png")}
            alt="그룹 삭제 2"
          />
        </div>
      </div>
      <h2 className={styles.projectBodyTitle}>Redis를 활용한 성능 최적화</h2>
      <div className={styles.projectBodyText}>
        Redis를 사용하여 초대 코드의 24시간 유효 기간을 관리하고 클릭 로직을
        구현했습니다. 이를 통해 성능을 최적화하고 사용자 경험을 향상시켰으며,
        동시에 무분별한 초대 코드 사용을 방지했습니다.
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/gwating_project11.png")}
          alt="Redis 구현"
        />
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/gwating_project12.png")}
          alt="Redis 코드"
        />
      </div>
      <h2 className={styles.projectBodyTitle}>
        AWS 기반의 안정적인 인프라 구축
      </h2>
      <div className={styles.projectBodyText}>
        AWS의 EC2, S3, RDS를 활용하여 안정적이고 확장 가능한 서버 인프라를
        구축했습니다. 이를 통해 데이터의 안전한 저장과 효율적인 처리를
        보장합니다.
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/gwating_projec11.png")}
          alt="AWS 구조"
        />
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/gwating_project14.png")}
          alt="AWS 설정 1"
        />
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/gwating_project15.png")}
          alt="AWS 설정 2"
        />
      </div>
      <div className={styles.projectBodyText}>
        Docker Compose와 Github Action을 활용하여 서버 배포 자동화를
        구현했습니다. 이를 통해 개발 효율성을 높이고 지속적인 서비스 개선이
        가능해졌습니다.
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/gwating_project13.png")}
          alt="배포 자동화"
        />
      </div>
      <div className={styles.projectBodyText}>
        피그마를 통한 설계부터 시작하여, 프론트엔드와 백엔드를 개발하였습니다.
        또한, 프로젝트 관리 및 협업을 위해 Notion을 사용하였습니다.
        <br />
        <br />
        프론트엔드는 React를 사용하여 개발하였고, 백엔드는 Spring Boot를
        사용하여 개발하였습니다.
        <br />
        <br />
        배포는 AWS EC2, S3, RDS를 활용하여 구축하였습니다.
      </div>
    </div>
  );
};

export default ProjectBody2;
