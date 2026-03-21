import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "naveenselvaraj416@gmail.com" &&
      formData.password === "naveen7373"
    ) {
      setUser({ email: formData.email });
      setError("");
      navigate("/profile");
    } else {
      setError("Invalid Credentials. Please check your email and password.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.35)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: "20px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          {error && (
            <p style={{ color: "red", marginBottom: "15px" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#0dcaf0",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Login
          </button>

        </form>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#0dcaf0", fontWeight: "bold" }}>
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
