import Carousel from 'react-bootstrap/Carousel';
import photo1 from "./assets/img1.png"
import photo2 from "./assets/img2.png"
import photo3 from "./assets/img3.png"

function Slide() {
  return (
    <div className='d-flex justify-content-center mt-5' style={{ paddingTop: "80px" }}>
      <Carousel style={{ width: "75%" }} className="rounded overflow-hidden">
        <Carousel.Item>
          <img
            src={photo1}
            alt="slide"
            style={{ width: "100%", height: "550px", objectFit: "fill" }}
          />
          <Carousel.Caption className='text-dark bg-light bg-opacity-50 rounded px-3 py-2'>
            <h3>Book Appointments Instantly</h3>
            <p>
              Schedule doctor appointments in just a few simple steps.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={photo2}
            alt="slide"
            style={{ width: "100%", height: "550px", objectFit: "fill" }}
          />
          <Carousel.Caption className='text-dark bg-light bg-opacity-50 rounded px-3 py-2'>
            <h3>Choose Date & Time Easily</h3>
            <p>
              Pick your preferred date and time slot with a smooth and simple booking flow.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={photo3}
            alt="slide"
            style={{ width: "100%", height: "550px", objectFit: "fill" }}
          />
          <Carousel.Caption className='text-dark bg-light bg-opacity-50 rounded px-3 py-2'>
            <h3>Manage Your Appointments</h3>
            <p>
              View, track, and manage all your bookings from one convenient place.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;