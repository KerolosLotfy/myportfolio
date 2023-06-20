export const E404 = () => {
  return (
    <h2
      style={{
        color: "var(--active-color)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          fontSize: "5rem",
          color: "transparent",
          WebkitTextStroke: "2px var(--active-color)  ",
        }}
      >
        404
      </span>
      <span
        style={{
          color: "transparent",
          WebkitTextStroke: ".4px var(--active-color)",
        }}
      >
        This Page Not Found
      </span>
    </h2>
  );
};
