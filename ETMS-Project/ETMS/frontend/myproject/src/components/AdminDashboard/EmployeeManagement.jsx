// import React, { useState } from "react";
// import Modal from "../AdminDashboard/Modal";
// import Toast from "../AdminDashboard/Toast";

// const initialData = [
//   {
//     name: "John Doe",
//     trainerId: "T101",
//     batches: "Batch A, Batch B",
//     traineeCount: 35,
//     photo: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     name: "Jane Smith",
//     trainerId: "T102",
//     batches: "Batch C",
//     traineeCount: 20,
//     photo: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
// ];

// export default function EmployeeManagement() {
//   const [data, setData] = useState(initialData);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     trainerId: "",
//     role: "",
//     password: ""
//   });
//   const [photoFile, setPhotoFile] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState("");

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhotoFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPhotoPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setPhotoFile(null);
//       setPhotoPreview("");
//     }
//   };

//   const handleAddUser = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.trainerId || !form.role || !form.password) {
//       setToast({ message: "All fields are required!", type: "error" });
//       return;
//     }
//     let photoUrl = "https://randomuser.me/api/portraits/lego/1.jpg";
//     if (photoFile && photoPreview) {
//       photoUrl = photoPreview;
//     }
//     setData((prev) => [...prev, { ...form, photo: photoUrl }]);
//     setToast({ message: `${form.role} added successfully!`, type: "success" });

//     setForm({ name: "", trainerId: "", role: "", password: "" });
//     setPhotoFile(null);
//     setPhotoPreview("");
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6 relative">
//       <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center justify-between">
//         Employee Management
//         <button
//           className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//           onClick={handleOpenModal}
//         >
//           + ADD USER
//         </button>
//       </h2>

//       {/* Employee Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map((emp) => (
//           <div
//             key={emp.trainerId}
//             className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
//           >
//             <img
//               src={emp.photo}
//               alt={emp.name}
//               className="w-20 h-20 rounded-full object-cover border-4 border-green-400 shadow"
//             />
//             <div className="text-lg font-bold text-green-700">{emp.name}</div>
//             <div className="text-sm text-gray-500 mb-2">
//               Emp ID:{" "}
//               <span className="font-semibold text-gray-700">
//                 {emp.trainerId}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         title={form.role ? `ADD ${form.role.toUpperCase()}` : "ADD USER"}
//       >
//         <form onSubmit={handleAddUser} className="flex flex-col gap-4">
//           {/* Role dropdown first */}
//           <select
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
//             required
//           >
//             <option value="" disabled>Select Role</option>
//             <option value="Trainer">Trainer</option>
//             <option value="Trainee">Trainee</option>
//           </select>

//           {/* Show rest of the fields only if role is selected */}
//           {form.role && (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
//                 required
//               />
//               <input
//                 type="text"
//                 name="trainerId"
//                 value={form.trainerId}
//                 onChange={handleChange}
//                 placeholder="Email ID"
//                 className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//                 className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
//                 required
//               />

//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Upload Photo
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handlePhotoChange}
//                   className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200"
//                 />
//                 {photoPreview && (
//                   <img
//                     src={photoPreview}
//                     alt="Preview"
//                     className="mt-2 w-20 h-20 object-cover rounded-full border-2 border-green-400 mx-auto"
//                   />
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
//               >
//                 ADD {form.role.toUpperCase()}
//               </button>
//             </>
//           )}
//         </form>
//       </Modal>

//       {/* Toast */}
//       {toast && (
//         <Toast
//           message={toast.message}
//           type={toast.type}
//           onClose={() => setToast(null)}
//         />
//       )}
//     </div>
//   );
// }



import React, { useState } from "react";
import axios from "axios";
import Modal from "../AdminDashboard/Modal";
import Toast from "../AdminDashboard/Toast";

const initialData = [
  {
    name: "John Doe",
    trainerId: "T101",
    batches: "Batch A, Batch B",
    traineeCount: 35,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    trainerId: "T102",
    batches: "Batch C",
    traineeCount: 20,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function EmployeeManagement() {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({
    name: "",
    trainerId: "", // using this as "email" input
    role: "",
    password: "",
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPhotoFile(null);
      setPhotoPreview("");
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    if (!form.name || !form.trainerId || !form.role || !form.password) {
      setToast({ message: "All fields are required!", type: "error" });
      return;
    }

    const email = form.trainerId.trim().toLowerCase();
    const photoUrl = photoPreview || "https://randomuser.me/api/portraits/lego/1.jpg";
    const token = localStorage.getItem("access"); // set this at admin login

    try {
      await axios.post(
        "http://localhost:8000/api/create-user/",
        {
          role: form.role,
          email,
          password: form.password,
        },
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      );

      // Update UI list
      setData((prev) => [
        ...prev,
        {
          name: form.name,
          trainerId: email, // showing email as ID in your UI
          photo: photoUrl,
        },
      ]);

      setToast({ message: `${form.role} added successfully!`, type: "success" });

      // reset
      setForm({ name: "", trainerId: "", role: "", password: "" });
      setPhotoFile(null);
      setPhotoPreview("");
      setIsModalOpen(false);
    } catch (err) {
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.detail ||
        "Failed to add user";
      setToast({ message: msg, type: "error" });
    }
  };

  return (
    <div className="p-6 relative">
      <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center justify-between">
        Employee Management
        <button
          className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          onClick={handleOpenModal}
        >
          + ADD USER
        </button>
      </h2>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((emp, idx) => (
          <div
            key={`${emp.trainerId}-${idx}`}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={emp.photo}
              alt={emp.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-green-400 shadow"
            />
            <div className="text-lg font-bold text-green-700">{emp.name}</div>
            <div className="text-sm text-gray-500 mb-2">
              Email:{" "}
              <span className="font-semibold text-gray-700">
                {emp.trainerId}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={form.role ? `ADD ${form.role.toUpperCase()}` : "ADD USER"}
      >
        <form onSubmit={handleAddUser} className="flex flex-col gap-4">
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="Trainer">Trainer</option>
            <option value="Trainee">Trainee</option>
          </select>

          {form.role && (
            <>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                required
              />
              <input
                type="email"
                name="trainerId"
                value={form.trainerId}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                required
              />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                required
              />

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Upload Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200"
                />
                {photoPreview && (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="mt-2 w-20 h-20 object-cover rounded-full border-2 border-green-400 mx-auto"
                  />
                )}
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                ADD {form.role.toUpperCase()}
              </button>
            </>
          )}
        </form>
      </Modal>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
