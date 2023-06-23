import { useState } from "react";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

export function Nav() {
  const [list, setList] = useState(false);

  const showList = () => {
    setList(!list);
  };

  const handleLinks = (e) => {
    document
      .querySelectorAll("nav> ul> li > a")
      .forEach((link) => link.classList.remove("active"));
    e.target.className = "active";
    setList(false);
  };

  return (
    <nav>
      <div className={"bars " + (list ? "active" : "")} onClick={showList}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={list ? "active" : ""}>
        <li>
          <a href="#home" className="active" onClick={handleLinks}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinks}>
            ٍSkills
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={handleLinks}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinks}>
            Contact
          </a>
        </li>

        <li className="social">
          <a
            href="https://www.linkedin.com/in/kerolos-lotfy-b69300249/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/kerolosLotfy/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt />
          </a>
        </li>
      </ul>
    </nav>
  );
}
