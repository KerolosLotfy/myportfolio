import "./style.css";
import Header from "./section-header";
import GetSkills from "./getSkills";
export function Skills() {
  return (
    <section id="skills">
      <Header title={"My Skills"} />
      <div className="container">
        <GetSkills />    
      </div>
    </section>
  );
}
  