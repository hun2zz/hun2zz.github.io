import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import profileImage from "../../assets/images/my.jpg";
import LoadingBar from "./LoadingBar"; // LoadingBar 컴포넌트를 import 해야 합니다

const NavigationBar = ({
  currentSection,
  isYellowBackground,
  scrollInstance,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const navItems = [
    { name: "HOME", to: "HOME" },
    { name: "PROJECT", to: "PROJECT" },
    { name: "ABOUT", to: "ABOUT" },
  ];

  const handleNavigation = (id) => {
    if (id === "ABOUT") {
      setIsLoading(true);
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
              navigate("/about");
            }, 1000);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 10);
    } else if (scrollInstance) {
      scrollInstance.scrollTo(`#${id}`, {
        offset: 0,
        duration: 500,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <nav className={styles.navbar}>
      {isLoading && <LoadingBar progress={loadingProgress} />}
      <div className={styles.logoContainer}>
        <p className={styles.profileImage}>
          <img src={profileImage} alt="프로필" />
        </p>
        <span className={styles.logoText}>SANGHUN</span>
      </div>
      <ul>
        {navItems.map((item) => (
          <li 
            key={item.to} 
            className={styles.navia}
            onClick={() => handleNavigation(item.to)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
