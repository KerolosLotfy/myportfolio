import React from "react";
import Header from "./components/header";
import { Main } from "./components/main section";
import { Skills } from "./components/skills section";
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

      <Skills />
    </>
  );
}

export default App;
