import who1 from "./assets/who1.png";
import who2 from "./assets/who2.png";
import who3 from "./assets/who3.png";
import File1 from "./File.jsx";
function List() {
  const Details = [
    {
      first: who1,
      second: "Clinics & Hospitals",
      third: "Manage patient appointments efficiently and reduce waiting time.",
    },
    {
      first: who2,
      second: "Doctors & Specialists",
      third: "Organize schedules and handle appointments smoothly.",
    },
    {
      first: who3,
      second: "Patients",
      third: "Book doctor appointments easily without long phone calls.",
    },
  ];

  const Data = Details.map((pro) => (
    <File1 image={pro.first} Head={pro.second} para={pro.third} />
  ))

  return (
    <>
      <div className="text-center mb-4 ">
        <h2 className="fw-bold">Who can use MediSlot?</h2>
        <p className="text-muted">
          Designed exclusively for medical appointment scheduling
        </p>
      </div>
      <div className="who-row">
        {Data}
      </div>
    </>
  );
}

export default List;
