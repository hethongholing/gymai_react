// src/routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../admin/main"; 
import Dashboard from "../admin/dashboard";
import Membership from "../admin/membership";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Dashboard />} /> 
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="membership" element={<Membership />} />
      </Route>
    </Routes>
  );
}
