import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={NotFound} />
      </Routes>
    </>
  );
};

export default App;
