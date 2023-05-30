import React from "react";
import Header from "./components/header";
import { Main } from "./components/main section";
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
    </>
  );
}

export default App;
