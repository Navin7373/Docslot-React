import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import photo from "./assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function HomeNav() {

  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-info-subtle  py-3 fixed-top">
      <Container>
        <Nav.Link as={Link} to="/" className="py-0">
          <img src={photo} width={150} height={50} className="navbar-brand-img" alt="Book-It logo" />
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold fs-6 fs-lg-5 text-center text-lg-start">

            {/* Hide Home if already on Home */}
            {location.pathname !== "/" && (
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            )}

            {/* Hide Doctors if already on Doctors OR Booking page */}
            {!location.pathname.startsWith("/doctors") &&
              !location.pathname.startsWith("/book") && (
                <Nav.Link as={Link} to="/doctors">
                  Book Appointment
                </Nav.Link>
              )}

            {/* Hide My Appointments if already there */}
            {location.pathname !== "/my-appointments" && (
              <Nav.Link as={Link} to="/my-appointments">
                My Appointments
              </Nav.Link>
            )}

            {/* Hide Profile if already there */}
            {location.pathname !== "/profile" && (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            )}

            {location.pathname !== "/login" && (
              <Nav.Link as={Link} to="/login">
                login
              </Nav.Link>
            )}



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav; 