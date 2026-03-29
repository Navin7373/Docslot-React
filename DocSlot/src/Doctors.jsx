import DoctorCard from "./DoctorCard";
import doc1 from "./assets/doc1.png";
import doc2 from "./assets/doc2.png";
import doc3 from "./assets/doc3.png"; 
import doc4 from "./assets/doc4.png";
import doc5 from "./assets/doc5.png";
import doc6 from "./assets/doc6.png";
import doc7 from "./assets/doc7.png";
import doc8 from "./assets/doc8.png";
import doc9 from "./assets/doc9.png";
import doc10 from "./assets/doc10.png";
import doc11 from "./assets/doc11.png";
import doc12 from "./assets/doc12.png";

function Doctors() {
  const doctors = [
    // Cardiologists
    {
      id: 1,
      name: "DR.V.SIVABAL ",
      degree:"MBBS, MD (Cardiology)",
      specialization: "Cardiologist",
      experience: 8,
      image: doc1,
      slots: ["10:00 AM", "11:00 AM", "3:00 PM"]
    },
    {
      id: 2,
      name: "DR.SHAKTHIVEL SELVARAJ",
      degree:"MBBS,MD GEN MEDICINE,DM CARDIOLOGY",
      specialization: "Cardiologist",
      experience: 6,
      image: doc2,
      slots: ["9:00 AM", "12:00 PM", "4:00 PM"]
    },
    {
      id: 3,
      name: "DR.GOKHULARAJ",
      degree:"MBBS,MD (INTERNAL MEDICINE) CARDIOLOGY",
      specialization: "Cardiologist",
      experience: 10,
      image: doc3,
      slots: ["11:30 AM", "2:00 PM", "5:00 PM"]
    },
    {
      id: 4,
      name: "DR.P.VIJAY",
      degree:"MD , DNB  ",
      specialization: "Cardiologist",
      experience: 10,
      image: doc4,
      slots: ["11:30 AM", "2:00 PM", "5:00 PM"]
    },

    // Dermatologists
    {
      id: 5,
      name: "DR.R.SUDHA",
      degree:"MBBS,MD (DERMATOLOGY)",
      specialization: "Dermatologist",
      experience: 5,
      image: doc5,
      slots: ["10:30 AM", "1:00 PM", "4:30 PM"]
    },
    {
      id: 6,
      name: "DR.RAJESH RAJAGOPALAN",
      degree:"MD,DNB(SKIN & VD),FNB(DERMATOLOGY)",
      specialization: "Dermatologist",
      experience: 7,
      image: doc6,
      slots: ["9:30 AM", "12:30 PM", "3:30 PM"]
    },
    {
      id: 7,
      name: "DR.S.PAVITHRA ",
      degree:"MBBS,MD (DERMATOLOGY)",
      specialization: "Dermatologist",
      experience: 9,
      image: doc7,
      slots: ["11:00 AM", "2:00 PM", "6:00 PM"]
    },
    {
      id: 8 ,
      name: "DR.JEEVAN KUMAR",
      degree:"MBBS,MD (DERMATOLOGY)",
      specialization: "Dermatologist",
      experience: 9,
      image: doc8,
      slots: ["11:00 AM", "2:00 PM", "6:00 PM"]
    },

    // gynecologists
    {
      id: 9,
      name: "DR.JAYANTHI VEERAPPAN",
      degree:"MD,DGO",
      specialization: "Gynecologist",
      experience: 9,
      image: doc9,
      slots: ["11:00 AM", "2:00 PM", "6:00 PM"]
    },
    {
      id: 10,
      name: "DR.DEVASANA",
      degree:"DGO,DNB",
      specialization: "Gynecologist",
      experience: 9,
      image: doc10,
      slots: ["11:00 AM", "2:00 PM", "6:00 PM"]
    },
    {
      id: 11,
      name: "DR.RENUKADEVI",
      degree:"MD.,(O&G),DNB",
      specialization: "Gynecologist",
      experience: 9,
      image: doc11,
      slots: ["11:00 AM", "2:00 PM", "6:00 PM"]
    },
    {
      id: 12,
      name: "DR.VELAM THENNAVAN",
      degree:"DFFP.,MRCOG(LON)",
      specialization: "Gynecologist",
      experience: 9,
      image: doc12,
      slots: ["11:00 AM", "2:00 PM", "6:00 PM"]
    }
  ];

  const specializations = [...new Set(doctors.map(doc => doc.specialization))];

  return (
    <div className="doctors-page">
      <h2 style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 5vw, 2.5rem)", paddingTop: "clamp(0.5rem, 2vw, 1rem)", color: "#0dcaf0" }}>
        Available Doctors
      </h2>

      {specializations.map((spec, index) => (
        <div key={index} style={{ marginBottom: "50px" }}>
          <h3
            style={{
              marginBottom: "20px",
              color: "#0dcaf0",
              display: "inline-block",
              paddingBottom: "5px",
              width: "100%",
              textAlign: "center"
            }}
          >
            {spec}
          </h3>

          <div className="doctors-grid">
            {doctors
              .filter(doc => doc.specialization === spec)
              .map(doc => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Doctors;
