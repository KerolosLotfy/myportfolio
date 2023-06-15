import "./style.css";
import Header from "./section-header";
import GetProjects from "./getProjects";
export function Portfolio() {
  const handleClick = (e) => {
    const filter = e.target.parentElement.children;
    for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
    }
    e.target.classList.add("active");
    // setFilter(e.target.innerHTML)
    document.querySelectorAll("#portfolio .container ul li").forEach((li) => {
      if (e.target.innerHTML.toLowerCase() !== "all") {
        if (
          li.getAttribute("data-cat").toLowerCase() ===
          e.target.innerHTML.toLowerCase()
        ) {
          li.style.display = "flex";
        } else {
          li.style.display = "none";
        }
      } else {
        li.style.display = "flex";
      }
    });
  };

  return (
    <section id="portfolio">
      <Header title={"My portfolio"} />
      <div className="filter">
        <span className="active" onClick={(e) => handleClick(e)}>
          All
        </span>
        <span onClick={(e) => handleClick(e)}>Web</span>
        <span onClick={(e) => handleClick(e)}>App</span>
        <span onClick={(e) => handleClick(e)}>Game</span>
      </div>
      <div className="container">
        <GetProjects  />
      </div>
    </section>
  );
}
