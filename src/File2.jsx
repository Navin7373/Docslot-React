function File2({ Head, para }) {
  return (
    <div
      className="feature-card"
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
      }}
    >
      <h4 style={{ marginBottom: "15px", color: "#0dcaf0" }}>
        {Head}
      </h4>

      <p style={{ color: "#555", fontSize: "15px" }}>
        {para}
      </p>
    </div>
  );
}

export default File2;
