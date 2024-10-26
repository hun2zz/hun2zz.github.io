import React, { useState, useEffect } from "react";
import styles from "./Intro.module.scss";
import image1 from "../../assets/images/buddies_project1.png";
import image4 from "../../assets/images/buddies_project4.png";
import image2 from "../../assets/images/buddies_project6.png";
import image5 from "../../assets/images/gwating_project1.png";
import image6 from "../../assets/images/gwating_project2.png";
import image7 from "../../assets/images/gwating_project3.png";
import image8 from "../../assets/images/gwating_project4.png";
import image9 from "../../assets/images/gwating_project5.png";
import image10 from "../../assets/images/gwating_project6.png";
import image11 from "../../assets/images/gwating_project7.png";
import image12 from "../../assets/images/gwating_project8.png";
import image13 from "../../assets/images/gwating_project9.png";
import image14 from "../../assets/images/gwating_project10.png";

const Intro = () => {
  // 이미지 배열 생성
  const images = [
    image1,
    image2,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // 1초마다 이미지 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.hellopage2}>
          <div className={styles.hellopage}>
            <div className={styles.fullstack}>Creative</div>
            <div className={styles.devloper}>Developer.</div>
            <div className={styles.intro}>
              끊임없는 도전을 즐기는 <b>풀스택 개발자 진상훈</b>입니다. <br />
              혁신적인 아이디어를 현실로 만드는 여정에 함께하고 싶습니다
            </div>
          </div>
          <div className={styles.year}>@SANGHUN</div>
          <div className={styles.image}>
            <div
              className={styles.photo}
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            />
          </div>
        </h1>
      </div>
    </>
  );
};

export default Intro;
