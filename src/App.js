import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Health from "./components/Health";
import Social from "./components/Social";
import MarketPlace from "./components/MarketPlace";

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<LandingPage></LandingPage>} />
      <Route exact path="/faq" element={<Faq></Faq>} />
      <Route exact path="/health" element={<Health></Health>} />
      <Route exact path="/social" element={<Social></Social>} />
      <Route exact path="/marketplace" element={<MarketPlace></MarketPlace>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
