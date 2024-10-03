import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPages from "./components/pages/MainPages";
import Layout from "./components/pages/router/Layout";
import ProjectDetail from "./components/pages/ProjectDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPages />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
