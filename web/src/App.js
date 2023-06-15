import React from "react";
import Header from "./components/header";
import { Main } from "./components/main section";
// import { Skills } from "./components/skills section";
import { Portfolio } from "./components/projects section";
function App() {
  return (
    <>
      <React.StrictMode>
        <Header />
      </React.StrictMode>

      <Main
        texts={[
          "Frontend developer",
          "NodeJs developer",
          "FullStack developer",
        ]}
      />

      {/* <Skills /> */}
      <Portfolio />
    </>
  );
}

export default App;
