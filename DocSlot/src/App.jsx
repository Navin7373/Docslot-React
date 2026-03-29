import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ScrollToTop from "./ScrollToTop";
import HomeNav from "./HomeNav.jsx";
import Home from "./Home.jsx";
import Doctors from "./Doctors.jsx";
import Footer from "./Footer.jsx";
import Booking from "./Booking";
import MyAppointments from "./MyAppointments";
import Profile from "./Profile";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        <ScrollToTop />
        <HomeNav user={user} setUser={setUser} />

        <main className="app-main">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected Profile Route */}
            <Route
              path="/profile"
              element={
                user ? (
                  <Profile user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />

            <Route
              path="/my-appointments"
              element={
                user ? (
                  <MyAppointments />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />

            <Route
              path="/book/:id"
              element={
                user ? (
                  <Booking />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />

            {/* Auth Pages */}
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
