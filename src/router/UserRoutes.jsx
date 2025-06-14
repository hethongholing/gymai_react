// src/routes/UserRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../component/main";
import Home from "../component/home";
import About from "../component/about";
import Contact from "../component/contact";
import Features from "../component/features";
import Benefit from "../component/benefit";
import Servicepackage from "../component/servicepackage";
import Team from "../component/team";
import Login from "../component/login";
import Register from "../component/register";


export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="features" element={<Features />} />
        <Route path="benefit" element={<Benefit />} />
        <Route path="servicepackage" element={<Servicepackage />} />
        <Route path="team" element={<Team />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
