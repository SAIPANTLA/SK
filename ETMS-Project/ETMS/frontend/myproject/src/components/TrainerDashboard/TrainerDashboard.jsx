import React from "react";

export default function TrainerDashboard({ username }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome Trainer, {username}!
      </h1>
      <p className="text-gray-600 mt-2">Here is your trainer dashboard.</p>
    </div>
  );
}
