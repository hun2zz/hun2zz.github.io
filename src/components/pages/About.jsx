import React from "react";
import styles from "./About.module.scss";
import MyIntro from "./MyIntro";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <h1 className={styles.title}>About JinSanghun</h1>
        <div className={styles.developerContainer}>
          <p className={styles.developer}>DEVELOPER</p>
          <div className={styles.asterisk}>*</div>
        </div>
        <p className={styles.description}>
          안녕하세요. 프론트엔드와 백엔드 기술을 모두 활용하여 혁신적인 웹
          솔루션을 만들어내는 열정적인 풀스택 개발자입니다. <br></br>사용자 경험과 시스템
          효율성을 모두 고려한 통합적인 개발 접근을 지향합니다.
        </p>
      </div>
      <MyIntro />
    </>
  );
};

export default About;
