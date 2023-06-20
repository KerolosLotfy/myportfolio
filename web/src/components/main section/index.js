import "./style.css";
import cloudImg from "../../assets/images/cloud.svg";
import manImg from "../../assets/images/man.svg";
import Typing from "./typing";
import { Link } from "react-router-dom";
export function Main() {
  const texts = [
    "Frontend developer",
    "NodeJs developer",
    "FullStack developer",
  ];
  return (
    <section id="home">
      <div className="container">
        <div className="text-container">
          <h1>
            Hi, I'am Kerolos
            {Typing({ texts, speed: 120, delay: 1000 })}
          </h1>
          <div className="btns">
            <Link to="/about">About Me</Link>
            <a href="#contact">Hire Me</a>
          </div>
        </div>
        <div className="img-container">
          <img src={manImg} alt="Man" className="man" />
          <img src={cloudImg} alt="CLoud" className="cloud" />
        </div>
      </div>
    </section>
  );
}
