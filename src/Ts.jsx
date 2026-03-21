import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TrustSection() {
  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Trusted by Users</h2>
        <p className="text-muted">
          A simple and reliable platform designed to make appointment booking easy.
        </p>
      </div>

      <Row className="text-center g-4 mt-5">
        <Col md={4}>
          <h5>Secure Booking</h5>
          <p>
            Your appointments are handled securely with reliable booking flow.
          </p>
        </Col>

        <Col md={4}>
          <h5>User Friendly</h5>
          <p>
            Clean and intuitive design for a smooth booking experience.
          </p>
        </Col>

        <Col md={4}>
          <h5>Always Available</h5>
          <p>
            Check available slots in real time without any delays.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default TrustSection;
