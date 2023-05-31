// import { useEffect, useState } from "react";
import MySkills from "./MySkills.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function GetSkills() {
  // const [skills, setSkills] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch("http://localhost:5500/")
  //       .then((res) => {
  //         console.log(res);
  //         return res.json;
  //       })
  //       .then((data) => {
  //         setSkills(data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         setSkills(e.message);
  //       });
  //   };
  //   fetchData();
  // }, []);

  let data = MySkills.map((obj) => {
    return (
      <>
        <li id={obj.id} data-percent={obj.percent}>
          <p>{obj.title}</p>
          <svg height="100" width="100" className="progress">
            <circle cx="50%" cy="50%" r="100" />
          </svg>
        </li>
      </>
    );
  });

  return (
    <>
      <ul data-skills={data.length}>
        <div className="arrows">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
        {data}
      </ul>
    </>
  );
}

export default GetSkills;
