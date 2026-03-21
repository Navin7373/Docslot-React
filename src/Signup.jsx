import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.age < 1) {
            alert("Please enter a valid age");
            return;
        }

        alert("Account Created Successfully!");
        navigate("/login");
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
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "30px",paddingTop:"70px" }}>
                    Create Account
                </h2>

                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div style={{ marginBottom: "20px" }}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>

                    {/* Email */}
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

                    {/* Age */}
                    <div style={{ marginBottom: "20px" }}>
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            required
                            min="1"
                            max="120"
                            value={formData.age}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>
                    {/* Phone Number */}
                    <div style={{ marginBottom: "20px" }}>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            placeholder="Enter 10-digit mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "1px solid #ccc"
                            }}
                        />
                    </div>


                    {/* Password */}
                    <div style={{ marginBottom: "25px" }}>
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
                        Sign Up
                    </button>

                </form>

                <p style={{ marginTop: "20px", textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#0dcaf0", fontWeight: "bold" }}>
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Signup;
