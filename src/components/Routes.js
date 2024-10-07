import React from "react";
import Home from "./Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import Links from "./Links/Links";
import Contatos from "./Contatos/Contatos";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/Contatos" element={<Contatos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
