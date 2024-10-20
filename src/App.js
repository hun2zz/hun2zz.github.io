import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import MainPages from "./components/pages/MainPages";
import Layout from "./components/pages/router/Layout";
import ProjectDetail from "./components/pages/ProjectDetail";
import About from './components/pages/About';

function App() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <Router>
      <AnimatedCursor
        innerSize={4}
        outerSize={30}
        color={cursorVariant === "project" ? "#732F20" : "#732F20"}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: `1.5px solid ${
            cursorVariant === "project" ? "#732F20" : "#732F20"
          }`,
        }}
        innerStyle={{
          backgroundColor: cursorVariant === "project" ? "#732F20" : "#732F20",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        textColor={cursorVariant === "project" ? "#000000" : "#ffffff"}
        text={cursorText}
        showSystemCursor={false}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPages />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
