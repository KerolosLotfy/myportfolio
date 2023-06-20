export const DashMain = () => {
  return (
    <>
      <h2 className="dash-title">Dashboard</h2>
      <div className="container">
        <div id="statics">
          <h3>Statics</h3>
          <div className="stats">
            <div className="box" style={{ border: "5px solid #f00" }}>
              <p style={{ color: "#f00" }}>Visitors</p>
              <span className="num">2</span>
            </div>
            <div className="box" style={{ border: "5px solid #0f0" }}>
              <p style={{ color: "#0f0" }}>Projects</p>
              <span className="num">6</span>
            </div>
            <div className="box" style={{ border: "5px solid #00f" }}>
              <p style={{ color: "#00f" }}>Skills</p>
              <span className="num">3</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
