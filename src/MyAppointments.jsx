import { useEffect, useState } from "react";

function MyAppointments() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  const handleCancel = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);

    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

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
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        My Appointments
      </h2>

      {appointments.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No Appointments Booked Yet.
        </p>
      ) : (
        appointments.map((app, index) => (
          <div
            key={index}
            style={{
              maxWidth: "600px",
              margin: "0 auto 20px auto",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h4>{app.doctorName}</h4>
            <p><strong>Specialization:</strong> {app.specialization}</p>
            <p><strong>Patient:</strong> {app.patientName}</p>
            <p><strong>Date:</strong> {app.date}</p>
            <p><strong>Slot:</strong> {app.slot}</p>

            <button
              onClick={() => handleCancel(index)}
              style={{
                padding: "6px 12px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Cancel Appointment
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyAppointments;
