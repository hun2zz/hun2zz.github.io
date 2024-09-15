import "./App.css";
import Education from "./components/Education";
import Head from "./components/Head";
import Information from "./components/Information";
import Introduce from "./components/Introduce";
import Project from "./components/Project";
import Skill from "./components/Skill";
function App() {
  return (
    <div className="App">
      <Head></Head>
      <Information h1name={"Introduce."}>
        <Introduce></Introduce>
      </Information>
      <Information h1name={"Skill."}>
        <Skill />
      </Information>
      <Information h1name={"Project."}>
        <Project></Project>
      </Information>
      <Information h1name={"Education."}>
        <Education />
      </Information>
    </div>
  );
}

export default App;
