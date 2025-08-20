// import React from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

// const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Sidebar + Main */}
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar />
//         <main className="flex-1 overflow-y-auto p-6 bg-gray-50">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;




// // // src/pages/Layout.jsx
// // import React from "react";
// // import { Outlet } from "react-router-dom"; // ✅ import Outlet
// // import Navbar from "./components/Navbar";
// // import Sidebar from "./components/Sidebar";

// // const Layout = () => {
// //   return (
// //     <div className="flex flex-col h-screen">
// //       {/* Navbar */}
// //       <Navbar />

// //       {/* Sidebar + Main */}
// //       <div className="flex flex-1 overflow-hidden">
// //         <Sidebar />
// //         <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
// //           {/* ✅ This renders the nested page inside the layout */}
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Layout;



// components/AdminDashboard/Layout.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet /> {/* Renders nested route content */}
        </main>
      </div>
    </div>
  );
};

export default Layout;

