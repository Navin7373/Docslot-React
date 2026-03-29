import Carousel from 'react-bootstrap/Carousel';
import photo1 from "./assets/img1.png"
import photo2 from "./assets/img2.png"
import photo3 from "./assets/img3.png"

function Slide() {
  const slideImgStyle = {
    width: "100%",
    height: "clamp(220px, 52vw, 550px)",
    objectFit: "cover",
  };

  return (
    <div className="d-flex justify-content-center px-2 px-sm-3 mt-3 mt-md-4">
      <Carousel
        className="rounded overflow-hidden w-100"
        style={{ maxWidth: "min(100%, 960px)" }}
      >
        <Carousel.Item>
          <img src={photo1} alt="Book appointments" style={slideImgStyle} />
          <Carousel.Caption className="text-dark bg-light bg-opacity-75 rounded px-2 py-1 py-md-2 mb-2 mb-md-3">
            <h3 className="fs-6 fs-md-3 mb-0 mb-md-1">Book Appointments Instantly</h3>
            <p className="small mb-0 d-none d-sm-block">
              Schedule doctor appointments in just a few simple steps.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={photo2} alt="Choose date and time" style={slideImgStyle} />
          <Carousel.Caption className="text-dark bg-light bg-opacity-75 rounded px-2 py-1 py-md-2 mb-2 mb-md-3">
            <h3 className="fs-6 fs-md-3 mb-0 mb-md-1">Choose Date & Time Easily</h3>
            <p className="small mb-0 d-none d-sm-block">
              Pick your preferred date and time slot with a smooth and simple booking flow.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={photo3} alt="Manage appointments" style={slideImgStyle} />
          <Carousel.Caption className="text-dark bg-light bg-opacity-75 rounded px-2 py-1 py-md-2 mb-2 mb-md-3">
            <h3 className="fs-6 fs-md-3 mb-0 mb-md-1">Manage Your Appointments</h3>
            <p className="small mb-0 d-none d-sm-block">
              View, track, and manage all your bookings from one convenient place.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;