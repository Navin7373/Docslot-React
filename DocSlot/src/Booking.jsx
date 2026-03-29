import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {

  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state;
  const today = new Date();
  const localDate = new Date().toLocaleDateString("en-CA");



  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    date: "",
    slot: "",
    agree: false
  });

  if (!doctor) {
    return <h2 className="text-center py-4">No Doctor Selected</h2>;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      doctorName: doctor.name,
      specialization: doctor.specialization,
      date: formData.date,
      slot: formData.slot,
      patientName: formData.name
    };

    // Get existing appointments
    const existing = JSON.parse(localStorage.getItem("appointments")) || [];

    // Add new one
    existing.push(newAppointment);

    // Save back
    localStorage.setItem("appointments", JSON.stringify(existing));

    alert("Appointment Booked Successfully!");

    navigate("/my-appointments");
  };


  return (
    <div className="booking-page">
      <div
        className="booking-card"
        style={{
          backgroundColor: "#fff",
          padding: "clamp(1rem, 4vw, 1.875rem)",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Book Appointment
        </h2>

        {/* Doctor Summary */}
        <div style={{
          textAlign: "center",
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f1f9ff"
        }}>
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px"
            }}
          />
          <h4>{doctor.name}</h4>
          <p>{doctor.specialization}</p>
          <p style={{ fontWeight: "bold", color: "#0dcaf0" }}>
            Consultation Fee: ₹500
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: "15px" }}>
            <label>Patient Name:</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Select Date:</label>
            <input
              type="date"
              name="date"
              required
              min={localDate}
              value={formData.date}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />

          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Select Slot:</label>
            <select
              name="slot"
              required
              value={formData.slot}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="">Select Slot</option>
              {doctor.slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>
              <input
                type="checkbox"
                name="agree"
                required
                checked={formData.agree}
                onChange={handleChange}
              />{" "}
              I confirm that the above details are correct
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0dcaf0",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Confirm Booking
          </button>

        </form>

      </div>
    </div>
  );
}

export default Booking;
