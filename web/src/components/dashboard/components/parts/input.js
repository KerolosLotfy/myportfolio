import React from "react";

export const Input = ({ type, id, label, name, value, img = false }) => {
  const Style = {
    div: {
      display: "flex",
      position: "relative",
    },
    label: {
      color: "var(--white)",
      position: "absolute",
      top: "-20px",
      left: "10px",
      backgroundColor: "var(--dark-color)",
      fontSize: "1.1rem",
    },

    input: {
      width: "100%",
      padding: 10,
      outline: "none",
      border: "2px solid var(--active-color)",
      backgroundColor: "transparent",
      color: "var(--active-color)",
    },
  };

  switch (type) {
    case "radio" || "checkbox":
      return (
        <div className="ip" style={{ ...Style.div, margin: 10 }}>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            style={{ width: 20 }}
          />
          <label
            for={id}
            style={{
              ...Style.label,
              position: "relative",
              left: 0,
              top: 0,
              margin: "5px",
            }}
          >
            {label}
          </label>
        </div>
      );
    default:
      return (
        <div className="ip" style={Style.div}>
          <input
            type={type}
            id={id}
            name={name}
            style={Style.input}
            accept={img ? "image/*" : ""}
          />
          <label for={id} style={Style.label}>
            {label}
          </label>
        </div>
      );
  }
};
