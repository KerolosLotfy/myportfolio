import React from "react";

import { FaTimesCircle, FaTrash, FaEdit } from "react-icons/fa";

export const Button = ({ type, click, custom = {} }) => {
  switch (type) {
    case "close":
      return (
        <button
          id={custom.id || "close"}
          className={custom.class || "close"}
          style={
            custom.style || {
              color: "#f00",
              borderColor: "#0f0",
              cursor: "pointer",
              fontSize: "1.1rem",
              border: "none",
              outline: "none",
              background: "transparent",
            }
          }
          onClick={click}
        >
          {custom.value || <FaTimesCircle />}
        </button>
      );

    case "delete":
      return (
        <button
          id={custom.id || "delete"}
          className={custom.class || "delete"}
          style={
            custom.style || {
              color: "#f00",
              borderColor: "#0f0",
              cursor: "pointer",
              fontSize: "1.1rem",
            }
          }
          onClick={click}
        >
          {custom.value || <FaTrash />}
        </button>
      );

    case "update":
      return (
        <button
          id={custom.id || "update"}
          className={custom.class || "update"}
          style={
            custom.style || {
              color: "#0f0",
              borderColor: "#0f0",
              cursor: "pointer",
              fontSize: "1.1rem",
            }
          }
          onClick={click}
        >
          {custom.value || <FaEdit />}
        </button>
      );

    default:
      return (
        <button
          id={custom.id || ""}
          className={custom.class || ""}
          style={
            custom.style || {
              color: "var(--white)",
              borderColor: "var(--active-color)",
              cursor: "pointer",
              fontSize: "1.1rem",
            }
          }
          onClick={click}
        >
          {custom.value || ""}
        </button>
      );
  }
};
