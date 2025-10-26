import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header/>
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        {/* <Footer className="sticky"/> */}
      </div>
    </>
  );
}

export default App;
