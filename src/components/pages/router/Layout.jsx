import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import NavigationBar from "../NavigationBar";
import ContactMe from "../ContactMe";

const Layout = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    setIsNavHidden(isScrollingDown && currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={styles.layoutContainer}>
      <div
        className={`${styles.navContainer} ${isNavHidden ? styles.hidden : ""}`}
      >
        <NavigationBar />
      </div>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <footer>
        <ContactMe />
      </footer>
    </div>
  );
};

export default Layout;
