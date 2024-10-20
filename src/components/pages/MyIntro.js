import React from "react";
import styles from "./MyIntro.module.scss";
import profileImage from "../../assets/images/my.jpg"; // 프로필 이미지 경로

const MyIntro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.imageContainer}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          프론트, 백엔드, 배포를 전부 통합하여 <br></br>
          <span className={styles.highlight}>풀스택 개발자가</span> 되고
          싶습니다.
        </h1>
        <p className={styles.description}>
          고등학교에서는 다른 전공을 공부했지만, 진로를 고민하는 과정에서 코딩에
          깊은 관심을 가지게 되었습니다. 코딩을 배우면서 여러 사람들과 토론하고
          협업하는 과정이 매우 흥미롭게 다가왔습니다. 이 과정에서 다른 사람들과
          아이디어를 교환하고 함께 문제를 해결해 나가는 경험이 특히
          매력적이었습니다. 이런 경험들을 통해 저는 노력의 결과가 직접 눈에
          보이는 이 분야의 매력에 깊이 빠져들었습니다.
        </p>
      </div>
    </div>
  );
};

export default MyIntro;
