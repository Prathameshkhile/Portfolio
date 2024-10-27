import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

import React, { useState, useEffect } from "react";
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div
        className="cursorBlur"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: "absolute",
          width: "25vw",
          height: "25vw",
          minWidth: "350px",
          borderRadius: "764px",
          backgroundColor: "rgba(34, 66, 126, 0.9)",
          filter: "blur(100px)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
    </div>
  );
}

export default App;
