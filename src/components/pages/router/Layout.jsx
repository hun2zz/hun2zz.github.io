import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import NavigationBar from "../NavigationBar";
import ContactMe from "../ContactMe";

const Layout = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.navContainer} ${isNavHidden ? styles.hidden : ""}`}
      >
        <NavigationBar />
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <ContactMe />
      </footer>
    </>
  );
};

export default Layout;
