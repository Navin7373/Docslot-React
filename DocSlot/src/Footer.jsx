import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-info-subtle text-dark mt-5 pt-4 pb-2">
      <Container>

        <Row className="mb-4">  

          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Book-It</h5>
            <p style={{textAlign:"justify"}}>
              A modern doctor appointment booking platform designed 
              to simplify healthcare scheduling for patients and hospitals.
            </p>
          </Col>

          {/* Services Section (Not Navigation) */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Our Services</h5>
            <p className="mb-1">✔ Online Appointment Booking</p>
            <p className="mb-1">✔ Doctor Availability Tracking</p>
            <p className="mb-1">✔ Appointment History Management</p>
            <p className="mb-1">✔ Secure Profile Management</p>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Contact Information</h5>
            <p className="mb-1"><strong>Phone:</strong> +91 9876543210</p>
            <p className="mb-1"><strong>Email:</strong> support@bookit.com</p>
            <p className="mb-1"><strong>Location:</strong> Chennai, Tamil Nadu</p>
            <p className="mb-2"><strong>Working Hours:</strong> 9 AM - 6 PM</p>

            <Link 
              to="/contact" 
              className="fw-bold text-dark text-decoration-none"
            >
              Contact Us →
            </Link>
          </Col>

        </Row>

        <hr />

        <div className="text-center">
          <small>
            ©2026 MediSlot. All rights reserved.
          </small>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;
