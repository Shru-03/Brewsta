import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import FallingBeans from "./components/FallingBean";
import Footer from "./components/Footer";
import MultiStepOrderForm from "./components/OrderForm";

function App() {
  const { pathname } = useLocation();
  const aboutRef = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="overflow-hidden">
      <Navbar aboutRef={aboutRef} />
      <Routes>
        <Route path="/" element={<HomePage aboutRef={aboutRef} />} />
        <Route path="/brew" element={<ShopPage />} />
        <Route path="/order" element={<MultiStepOrderForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
