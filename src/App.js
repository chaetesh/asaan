import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Health from "./components/Health";

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<LandingPage></LandingPage>} />
      <Route exact path="/faq" element={<Faq></Faq>} />
      <Route exact path="/health" element={<Health></Health>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
