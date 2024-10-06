import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./Intro";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import styles from "./MainPages.module.scss";
import MarqueeComponent from "./MarqueeComponent";
import MarqueeCh from "./MarqueeCh";

gsap.registerPlugin(ScrollTrigger);

const MainPages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger 초기화
    ScrollTrigger.refresh();

    // 첫 번째 애니메이션: Introduce 섹션에 들어갈 때 배경색 변경
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#001F3F" },
      {
        backgroundColor: "#eeff04",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#introduce",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    // 두 번째 애니메이션: Skill 섹션으로 이동할 때 배경색 원래 색으로 변경
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#eeff04" },
      {
        backgroundColor: "#001f3f",
        ease: "none",
        scrollTrigger: {
          trigger: "#skill",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    // ScrollTrigger 새로고침하여 설정 반영
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div id="intro" className={styles.section}>
        <Intro />
        <MarqueeComponent rotateAngle={-5} rotateAngle2={2} />
      </div>
      <div id="introduce" className={styles.section}>
        <Introduce />
      </div>
      <div id="skill" className={styles.section}>
        <Skill />
        <MarqueeCh
          direction="left"
          texts={["BACKEND", "&", "FRONTEND", "HUN"]}
          rotateAngle={-3}
        />
      </div>
      <div id="project" className={styles.section}>
        <Project />
      </div>
    </div>
  );
};

export default MainPages;
