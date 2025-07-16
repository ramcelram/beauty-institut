import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Reservation from "./pages/Reservation";
import WelcomeOverlay from "./components/WelcomeOverlay";

function App() {
  return (
    <>
      <WelcomeOverlay />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
