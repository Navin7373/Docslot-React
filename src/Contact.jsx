  import { useState } from "react";

  function Contact() {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    };

    return (
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "120px",
          paddingLeft: "20px",
          paddingRight: "20px",
          backgroundColor: "#f8f9fa"
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            Contact Us
          </h2>

          <p style={{ textAlign: "center", marginBottom: "40px" }}>
            Have questions or need assistance? We’re here to help.
          </p>

          {/* Contact Info Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "40px"
            }}
          >
            {[
              { title: "Phone", value: "+91 9876543210" },
              { title: "Email", value: "support@bookit.com" },
              { title: "Address", value: "Chennai, Tamil Nadu" }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "1",
                  minWidth: "250px",
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  textAlign: "center"
                }}
              >
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            {submitted && (
              <p
                style={{
                  backgroundColor: "#d4edda",
                  padding: "10px",
                  borderRadius: "6px",
                  color: "green",
                  marginBottom: "20px"
                }}
              >
                Thank you for contacting us. We will get back to you soon!
              </p>
            )}

            <form onSubmit={handleSubmit}>

              <div style={{ marginBottom: "15px" }}>
                <label>Your Name:</label>
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
                <label>Your Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label>Your Message:</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
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
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    );
  }

  export default Contact;
