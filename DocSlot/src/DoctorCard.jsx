import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {

  const navigate = useNavigate();

  return (
    <div
      className="doctor-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
      }}
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        style={{
          width: "100%",
          maxWidth: "180px",
          aspectRatio: "180 / 230",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />


      {/* Doctor Name */}
      <h4 style={{ marginBottom: "5px" }}>
        {doctor.name}
      </h4>

      {/* Degree */}
      <p
        className="doctor-card-degree"
        style={{
          fontSize: "clamp(14px, 3.5vw, 18px)",
          color: "gray",
          marginTop: "0"
        }}
      >
        {doctor.degree}
      </p>

      {/* Specialization */}
      <p style={{ color: "#0dcaf0", fontWeight: "bold" }}>
        {doctor.specialization}
      </p>

      {/* Experience */}
      <p>{doctor.experience} years experience</p>

      {/* Availability */}
      <p
        style={{
          color: doctor.slots.length > 0 ? "green" : "red",
          fontWeight: "bold"
        }}
      >
        {doctor.slots.length > 0 ? "Available Today" : "Not Available"}
      </p>

      {/* Book Now Button */}
      <button
        onClick={() => navigate(`/book/${doctor.id}`, { state: doctor })}
        style={{
          padding: "8px 15px",
          backgroundColor: "#0dcaf0",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export default DoctorCard;
