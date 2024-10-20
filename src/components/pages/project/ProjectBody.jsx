import React from "react";
import styles from "./ProjectBody.module.scss";

const ProjectBody = () => {
  return (
    <div className={styles.projectBodyContainer}>
      <div className={styles.projectBodyInfo}>
        현대인들은 퇴근 후 TV나 컴퓨터 화면을 보며 마음의 안식을 찾습니다. 이는
        모든 사람에게 필요한 휴식과 생각 정리의 시간입니다. 우리 팀은 이런
        현상에서 영감을 받아, 사람들이 익명으로 자유롭게 생각을 표현할 수 있는
        공간을 만들고자 했습니다. 그래서 탄생한 것이 '나의 애착 페이지'입니다.
      </div>
      <h2 className={styles.projectBodyTitle}>
        양방향 통신을 통한 여러 사람들과 대화를 할 수 있는 구조 개발
      </h2>
      <div className={styles.projectBodyText}>
        유저는 로그인 상태에서 메인페이지에서 마우스 휠 버튼을 올려서 실시간
        채팅을 통해서 오늘 하루 있었던 일에 대해서 이야기가 가능합니다.
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/buddies_project1.png")}
          alt="project1"
        />
      </div>
      <h2 className={styles.projectBodyTitle}>
        동적 로드 밸런싱 기능을 개발하여 서버에 과부화를 주지 않는 최적화 기능
        개발
      </h2>
      <div className={styles.projectBodyText}>
        한 번에 수많은 유저가 접속 시 서버에 과부하가 올 수 있으므로 채팅방을
        나눠서 채팅방 하나에 50명 입장 시 자동으로 비어있는 채팅방으로 입장하게
        하였습니다.
        <br></br>
        만약 비어있는 채팅방이 없다면 새로 끝 번호로 채팅방을 생성합니다.
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/buddies_project2.png")}
          alt="project2"
        />
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/buddies_project3.png")}
          alt="project2"
        />
      </div>
      <h2 className={styles.projectBodyTitle}>
        어드민으로 로그인시 유저 컨트롤 대시보드에 입장이 가능합니다.
      </h2>
      <div className={styles.projectBodyText}>
        하나의 주제를 던져주고 주제에 대해서 자유롭게 얘기가 가능하도록 어드민은
        실시간으로 주제를 설정이 가능합니다.
        <br></br>
        주제를 하나 바꿀 때 마다 현재 채팅방에 참석중인 유저들은 실시간으로
        채팅방이 변경되고 주제가 실시간으로 변경됩니다.
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/buddies_project4.png")}
          alt="project2"
        />
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/buddies_project5.png")}
          alt="project2"
        />
      </div>
      <div className={styles.projectBodyText}>
        관리자가 주제를 변경 시 메인페이지에 있는 주제가 변경되고 채팅이 초기화
        됩니다.
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/buddies_project6.png")}
          alt="project2"
        />
      </div>
      <div className={styles.projectBodyImage}>
        <img
          src={require("../../../assets/images/buddies_project7.png")}
          alt="project2"
        />
      </div>
    </div>
  );
};

export default ProjectBody;
