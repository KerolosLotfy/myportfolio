import { useEffect, useState } from "react";
import { React } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getData } from "../fetchData";

function GetSkills() {
  const [skills, setSkills] = useState(null);
  let isDragging = false,
    PrevX,
    PrevScrollLeft;

  useEffect(() => {
    (async () => await getData())().then((data) =>
      typeof data === "object" ? setSkills(data.skills) : setSkills(data)
    );
  }, []);

  let data = skills
    ? typeof skills !== "string"
      ? skills.map((obj) => {
          return (
            <li key={obj.id} id={obj.id}>
              <div
                className="progress-bar"
                style={{
                  "--val": `${obj.percent}`,
                }}
              >
                <span>{obj.percent}%</span>
              </div>
              <h3>{obj.title}</h3>
            </li>
          );
        })
      : skills
    : "";

  const dragStart = (e) => {
    isDragging = true;
    PrevX = e.pageX || e.touches[0].pageX;
    PrevScrollLeft = document.querySelector(".carousal").scrollLeft;
    document.querySelector(".carousal").classList.add("dragging");
  };

  const dragging = (e) => {
    if (!isDragging) return;
    document.querySelector(".carousal").scrollLeft =
      PrevScrollLeft - (e.pageX || e.touches[0].pageX - PrevX);
    console.log(e.pageX || e.touches[0].pageX - PrevX);
    // show and hide arrow buttons during dragging
    let maxScrollWidth =
      document.querySelector(".carousal").scrollWidth -
      document.querySelector(".carousal").offsetWidth;
    document.querySelector("#right").style.visibility =
      Math.ceil(document.querySelector(".carousal").scrollLeft) >=
      maxScrollWidth
        ? "hidden"
        : "visible";
    document.querySelector("#left").style.visibility =
      Math.ceil(document.querySelector(".carousal").scrollLeft) === 0
        ? "hidden"
        : "visible";
  };

  const dragStop = (e) => {
    isDragging = false;
    document.querySelector(".carousal").classList.remove("dragging");
  };

  const left = (e) => {
    document.querySelector("#left").style.visibility =
      Math.ceil(document.querySelector(".carousal").scrollLeft) === 0
        ? "hidden"
        : "visible";
    document.querySelector("#right").style.visibility = "visible";
    document.querySelector(".carousal").scrollLeft -=
      document.querySelectorAll(".carousal > li")[0].clientWidth;
  };

  const right = (e) => {
    let maxScrollWidth =
      document.querySelector(".carousal").scrollWidth -
      document.querySelector(".carousal").offsetWidth;
    document.querySelector(".carousal").scrollLeft +=
      document.querySelectorAll(".carousal > li")[0].clientWidth;
    document.querySelector("#right").style.visibility =
      Math.ceil(document.querySelector(".carousal").scrollLeft) >=
      maxScrollWidth
        ? "hidden"
        : "visible";
    document.querySelector("#left").style.visibility = "visible";
  };

  return (
    <>
      <div className="num">{data.length}</div>
      <ul
        className="carousal"
        onTouchMove={dragging}
        onMouseMove={dragging}
        onTouchStart={dragStart}
        onMouseDown={dragStart}
        onTouchEnd={dragStop}
        onMouseUp={dragStop}
      >
        {data}
      </ul>
      <div className="arrows">
        <FaArrowLeft id="left" onClick={left} />
        <FaArrowRight id="right" onClick={right} />
      </div>
    </>
  );
}

export default GetSkills;
