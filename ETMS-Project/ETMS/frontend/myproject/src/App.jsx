import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Dashboard"; 
import EmployeeManagement from "../src/components/AdminDashboard/EmployeeManagement";
import Layout from "../src/components/AdminDashboard/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard (role based logic inside Dashboard.jsx) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Employee Management (Admin only) */}
        <Route
          path="/employees"
          element={
            <Layout>
              <EmployeeManagement />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
