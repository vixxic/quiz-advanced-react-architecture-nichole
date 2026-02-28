function PagesDes({ pages, title, description }) {
  return (
    <div style={{ margin: "5em 0" }}>
      <p style={{ color: "#d4521a" }}>{pages}</p>
      <h1 style={{ fontSize: "4rem", color: "black" }}>{title}</h1>
      <p style={{ color: "gray", fontSize: "0.9rem" }}>{description}</p>
    </div>
  );
}

export default PagesDes;
