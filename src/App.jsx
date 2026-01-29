import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./components/MainSection/Background.jsx";
import { useEffect } from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/NotFound.jsx";
import NavBar from "./components/MainSection/NavBar.jsx";
import Footer from "./components/MainSection/Footer.jsx";
import BusinessCenter from "./Pages/BusinessCenter.jsx";
import Residences from "./Pages/Residences.jsx";
import Gallery from "./Pages/Gallery.jsx";
import ScrollToTopButton from "./components/MainSection/ScrollToTopButton.jsx";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "./components/MainSection/WhatsAppButton.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className="relative">
        <Background />
        <ScrollToTop />
        <NavBar />
        <main className="pt-16">
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/business-center" element={<BusinessCenter />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
      <Toaster />
    </>
  );
}
