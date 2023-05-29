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
          "I  a Frontend developer",
          "I a FullStack developer",
          "I  a NodeJs developer",
        ]}
      />
    </>
  );
}

export default App;
