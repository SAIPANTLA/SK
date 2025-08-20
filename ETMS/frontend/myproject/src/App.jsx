// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard"; 
// import EmployeeManagement from "./components/AdminDashboard/pages/EmployeeManagement";
// import Layout from "./components/AdminDashboard/Layout";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Login page */}
//         <Route path="/" element={<Login />} />

//         {/* Dashboard (role based logic inside Dashboard.jsx) */}
//         <Route path="/dashboard" element={<Dashboard />} />
        
//         {/* Employee Management (Admin only) */}
//         <Route
//           path="/employees"
//           element={
//             <Layout>
//               <EmployeeManagement />
//             </Layout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }



// src/App.jsx
// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminRoutes from "./components/AdminDashboard/AdminRoutes";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Spread admin routes directly inside Routes */}
        {AdminRoutes()}
      </Routes>
    </Router>
  );
}
