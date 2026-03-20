import { useState, useEffect } from "react";
import pat1 from "./assets/pat1.png";

function Profile() {

    const [editMode, setEditMode] = useState(false);

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        age: ""
    });

    const [appointments, setAppointments] = useState([]); 

    // Load profile from localStorage
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("profile"));
        if (storedProfile) {
            setProfile(storedProfile);
        }
    }, []);

    // Load appointments from localStorage
    useEffect(() => {
        const storedAppointments =
            JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(storedAppointments);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        localStorage.setItem("profile", JSON.stringify(profile));
        setEditMode(false);
        alert("Profile Updated Successfully!");
    };
    const today = new Date().toISOString().split("T")[0];

    const pastAppointments = appointments.filter(
        app => app.date < today
    );


    return (
        <div
            style={{
                minHeight: "100vh",
                paddingTop: "120px",
                paddingLeft: "20px",
                paddingRight: "20px",
                backgroundColor: "#f8f9fa"
            }}
        >
            <div
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    backgroundColor: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    My Profile
                </h2>

                {/* Profile Image */}
                <div style={{ textAlign: "center" }}>
                    <img
                        src={pat1}
                        alt="Profile"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "20px"
                        }}
                    />
                </div>

                {/* Profile Fields */}
                {["name", "email", "phone", "age"].map((field) => (
                    <div key={field} style={{ marginBottom: "15px" }}>
                        <label style={{ textTransform: "capitalize" }}>{field}:</label>
                        <input
                            type={field === "age" ? "number" : "text"}
                            name={field}
                            value={profile[field]}
                            onChange={handleChange}
                            disabled={!editMode}
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                ))}

                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    {!editMode ? (
                        <button
                            onClick={() => setEditMode(true)}
                            style={{
                                padding: "8px 20px",
                                backgroundColor: "#0dcaf0",
                                border: "none",
                                borderRadius: "6px"
                            }}
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <button
                            onClick={handleSave}
                            style={{
                                padding: "8px 20px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "6px"
                            }}
                        >
                            Save Profile
                        </button>
                    )}
                </div>

                <h3 style={{ marginBottom: "20px", borderBottom: "2px solid #0dcaf0" }}>
                    Past Appointments
                </h3>

                {pastAppointments.length === 0 ? (
                    <p>No Past Appointments.</p>
                ) : (
                    pastAppointments.map((app, index) => (
                        <div
                            key={index}
                            style={{
                                padding: "15px",
                                marginBottom: "15px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9"
                            }}
                        >
                            <p><strong>Doctor:</strong> {app.doctorName}</p>
                            <p><strong>Date:</strong> {app.date}</p>
                            <p><strong>Slot:</strong> {app.slot}</p>
                        </div>
                    ))
                )}


            </div>
        </div>
    );
}

export default Profile;
