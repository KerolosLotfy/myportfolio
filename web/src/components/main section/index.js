import "./style.css";
import cloudImg from "../../assets/images/cloud.svg";
import manImg from "../../assets/images/man.svg";
import Typing from "./typing";

export function Main({ texts }) {
  return (
    <section id="home">
      <div className="container">
        <div className="text-container">
          <h1>
            Hi, I'am Kerolos
            {Typing({ texts, speed: 120, delay: 1000 })}
          </h1>
          <div className="btns">
            <a href="/about" target="_blank">
              About Me
            </a>
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
