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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const startParticles = () => {
      canvas.style.opacity = "1";
      if (!animationFrameId) {
        drawParticles();
      }
    };

    const stopParticles = () => {
      canvas.style.opacity = "0";
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    ScrollTrigger.create({
      trigger: "#introduce",
      start: "top bottom",
      end: "bottom top",
      onEnter: startParticles,
      onLeave: stopParticles,
      onEnterBack: startParticles,
      onLeaveBack: stopParticles,
    });

    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#F2F2F2" },
      {
        backgroundColor: "#0D0D0D",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#introduce",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#0D0D0D" },
      {
        backgroundColor: "#F2F2F2",
        ease: "none",
        scrollTrigger: {
          trigger: "#skill",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={styles.backgroundCanvas} />
      <div className={styles.content}>
        <div id="intro" className={styles.section}>
          <Intro />
          <MarqueeComponent rotateAngle={-5} rotateAngle2={2} />
        </div>
        <div id="introduce" className={styles.section}>
          <Introduce />
        </div>
        <div id="skill" className={styles.section}>
          <Skill />
        </div>
        <div id="project" className={styles.section}>
          <Project />
        </div>
      </div>
    </div>
  );
};

export default MainPages;
