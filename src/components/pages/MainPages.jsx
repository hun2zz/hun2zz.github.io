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
    const ctx = canvas.getContext('2d');

    let TOTAL;
    let rains = [];
    let drops = [];
    let mouse = { x: 0, y: 0, isActive: false };

    // 빗방울 클래스
    class Rain {
      constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.alpha = 2;
      }

      draw() {
        const { x, y, velocity, alpha } = this;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + (velocity.x) * alpha, y + (velocity.y) * alpha);
        ctx.strokeStyle = '#8899a6';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      splash() {
        for (let i = 0; i < 3; i++) {
          drops.push(new Drop(this.x, this.velocity));
        }
      }

      animate() {
        if (this.y > canvas.height) {
          this.splash();
          this.x = -(canvas.width * 0.2) + Math.random() * (canvas.width * 1.4);
          this.y = -20;
        }
        this.velocity.x = mouse.isActive ? -1 + Math.random() * 2 + (-canvas.width / 2 + mouse.x) / 150 : -1 + Math.random() * 2;
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.draw();
      }
    }

    // 스플래시 클래스
    class Drop {
      constructor(x, velocity) {
        this.x = x;
        this.y = canvas.height;
        this.velocity = {
          x: velocity.x + -2 + Math.random() * 4,
          y: -velocity.y + 5 + Math.random() * 5
        };
        this.gravity = 1.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2, false);
        ctx.fillStyle = '#8899a6';
        ctx.fill();
      }

      animate() {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.draw();
      }
    }

    // 초기화 작업
    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      TOTAL = Math.floor(canvas.width * canvas.height / 15000);
      rains = [];
      drops = [];

      for (let i = 0; i < TOTAL; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const velocity = {
          x: -1 + Math.random() * 2,
          y: 13 + Math.random() * 5
        };
        rains.push(new Rain(x, y, velocity));
      }
    }

    // 렌더 함수
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rains.forEach(rain => rain.animate());
      drops.forEach((drop, index) => {
        drop.animate();
        if (drop.y > canvas.height) drops.splice(index, 1);
      });

      requestAnimationFrame(render);
    }

    // 이벤트 리스너
    const handleResize = () => init();
    const handleMouseEnter = () => mouse.isActive = true;
    const handleMouseLeave = () => mouse.isActive = false;
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    // 초기화 및 렌더링 시작
    init();
    render();

    // 클린업 함수
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={`${styles.backgroundCanvas} ${styles.particlesVisible}`} />
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
