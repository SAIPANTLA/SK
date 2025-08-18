import React from "react";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import TrainerDashboard from "../components/TrainerDashboard/TrainerDashboard";
import TraineeDashboard from "../components/TraineeDashboard/TraineeDashboard";
import Layout from "../components/AdminDashboard/Layout"; // Layout sirf admin ke liye

export default function Dashboard() {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  const getNameFromEmail = (email) => {
    if (!email) return "";
    return email.split("@")[0];
  };

  if (!role) return <h1>Unauthorized Access</h1>;

  if (role === "admin") {
    // Admin ke liye layout ke andar
    return (
      <Layout>
        <AdminDashboard />
      </Layout>
    );
  }

  if (role === "trainer") {
    // Trainer ke liye bina layout
    return <TrainerDashboard username={getNameFromEmail(email)} />;
  }

  if (role === "trainee") {
    // Trainee ke liye bina layout
    return <TraineeDashboard username={getNameFromEmail(email)} />;
  }

  return <h1>Role not recognized</h1>;
}
