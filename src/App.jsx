import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-bg text-text min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
