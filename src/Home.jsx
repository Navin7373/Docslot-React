import File2 from "./File2.jsx";
import Slide from "./Slide.jsx";
import List from "./List.jsx";
import Ts from "./Ts.jsx";

function Home() {
  const Details = [
    {
      second: "Quick Booking",
      third: "Book appointments instantly with a simple and clean interface.",
    },
    {
      second: "Flexible Time Slots",
      third: "Choose time slots that fit your schedule without any hassle.",
    },
    {
      second: "Appointment Tracking",
      third: "Keep track of all your upcoming and past appointments easily.",
    },
  ];

  const Datas = Details.map((pro, index) => (
    <File2 key={index}  Head={pro.second} para={pro.third} />
  ));

  return (
    <>
      <Slide />
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "50px", marginBottom: "50px" }}>
        {Datas}
      </div>
      <List />
      <Ts />
    </>
  );
}

export default Home;
