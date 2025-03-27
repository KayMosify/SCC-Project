import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Programs from "./pages/Programs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join" element={<Join />} />
      <Route path="/programs" element={<Programs />} />
    </Routes>
  );
}

export default App;
