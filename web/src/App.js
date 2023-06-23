import React from "react";
import Header from "./components/header";
import { Main } from "./components/main section";
import { Skills } from "./components/skills section";
import { Portfolio } from "./components/projects section";
import { Footer } from "./components/footer";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { Project } from "./components/projectDetails";
// import { About } from "./components/about";
import { Dashboard } from "./components/dashboard";
import { E404 } from "./components/error 404";
import { DashProjects } from "./components/dashboard/components/projects";
import { DashSkills } from "./components/dashboard/components/skills";
import { DashMain } from "./components/dashboard/components/main";
import { Settings } from "./components/dashboard/components/settings";
import { NewProject } from "./components/dashboard/components/projects/newProjects";
import { NewSkill } from "./components/dashboard/components/skills/new";

function App() {
  return (
    <Browser>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Skills />
              <Portfolio />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              {/* <About /> */}
            </>
          }
        />
        <Route path="/dash" element={<Dashboard />} exact>
          <Route path="" element={<DashMain />} exact />
          <Route path="projects" element={<DashProjects />}>
            <Route path="new" element={<NewProject />} />
          </Route>
          <Route path="skills" element={<DashSkills />}>
            <Route path="new" element={<NewSkill />} />
          </Route>
          <Route path="settings" element={<Settings />} exact />
        </Route>
        <Route path="/pro">
          <Route
            path=":id"
            element={
              <>
                <Header />
                <Project />
              </>
            }
          />
        </Route>
        <Route path="*" element={<E404 />} />
      </Routes>
    </Browser>
  );
}

export default App;
