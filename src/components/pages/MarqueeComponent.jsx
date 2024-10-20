import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "./MarqueeComponent.module.scss";

const MarqueeComponent = ({ rotateAngle = -3, rotateAngle2 = -3 }) => {
  return (
    <>
      <div className={styles.box}>
        <Marquee
          className={styles.wrap}
          gradient={false}
          speed={50}
          direction="right"
          style={{ transform: `translateY(50px) rotate(${rotateAngle}deg)` }}
        >
          <div className={styles.textBox}>
            <span className={styles.text2}>SANGHUN</span>
          </div>

          <div className={styles.textBox}>
            <span className={styles.text}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text2}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text2}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text}>SANGHUN</span>
          </div>
        </Marquee>
      </div>
      <div className={styles.box}>
        <Marquee
          className={styles.wrap2}
          gradient={false}
          speed={50}
          style={{ transform: `rotate(${rotateAngle2}deg)` }}
        >
          <div className={styles.textBox}>
            <span className={styles.text3}>SANGHUN</span>
          </div>

          <div className={styles.textBox}>
            <span className={styles.text4}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text3}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text4}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text3}>SANGHUN</span>
          </div>
          <div className={styles.textBox}>
            <span className={styles.text4}>SANGHUN</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeComponent;
