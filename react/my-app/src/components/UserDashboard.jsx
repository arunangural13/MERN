// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const userName = "User "; // Ye tum apne user data se dynamically le sakte ho

//   const handleLogout = () => {
//     // localStorage clear karo, token remove karo
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("userType");
//     navigate("/login");
//   };

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <aside style={{ ...styles.sidebar, width: sidebarOpen ? 250 : 70 }}>
//         <div style={styles.logo}>
//           <h2 style={{ color: "#fff", margin: 0 }}>{sidebarOpen ? "MyApp" : "MA"}</h2>
//         </div>

//         <nav style={styles.nav}>
//           <NavItem icon="🏠" label="Home" open={sidebarOpen} onClick={() => navigate("/user/dashboard")} />
//           <NavItem icon="📦" label="Orders" open={sidebarOpen} onClick={() => alert("Orders clicked")} />
//           <NavItem icon="⚙️" label="Settings" open={sidebarOpen} onClick={() => alert("Settings clicked")} />
//         </nav>

//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           style={styles.toggleSidebarBtn}
//           aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
//         >
//           {sidebarOpen ? "⬅️" : "➡️"}
//         </button>
//       </aside>

//       {/* Main content */}
//       <main style={styles.main}>
//         {/* Topbar */}
//         <header style={styles.topbar}>
//           <h1 style={{ margin: 0, fontWeight: "normal" }}>Welcome {userName}</h1>
//           <button onClick={handleLogout} style={styles.logoutBtn}>
//             Logout
//           </button>
//         </header>

//         {/* Dashboard Content */}
//         <section style={styles.content}>
//           <h2>Dashboard Overview</h2>
//           <div style={styles.cardsContainer}>
//             <InfoCard title="Total Donations" value="₹25,000" />
//             <InfoCard title="Projects Supported" value="12" />
//             <InfoCard title="Messages" value="5" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// const NavItem = ({ icon, label, open, onClick }) => (
//   <div onClick={onClick} style={styles.navItem} title={label}>
//     <span style={styles.navIcon}>{icon}</span>
//     {open && <span>{label}</span>}
//   </div>
// );

// const InfoCard = ({ title, value }) => (
//   <div style={styles.card}>
//     <h3 style={{ marginBottom: 10 }}>{title}</h3>
//     <p style={{ fontSize: 24, fontWeight: "bold", margin: 0 }}>{value}</p>
//   </div>
// );

// const styles = {
//   container: {
//     display: "flex",
//     minHeight: "100vh",
//     width:"1259px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: "#f0f2f5",
//   },
//   sidebar: {
//     backgroundColor: "#003366",
//     color: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     paddingTop: 20,
//     paddingBottom: 20,
//     transition: "width 0.3s ease",
//     position: "relative",
//   },
//   logo: {
//     textAlign: "center",
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 30,
//   },
//   nav: {
//     flexGrow: 1,
//   },
//   navItem: {
//     display: "flex",
//     alignItems: "center",
//     padding: "12px 20px",
//     cursor: "pointer",
//     fontSize: 16,
//     borderRadius: 8,
//     marginBottom: 10,
//     userSelect: "none",
//     transition: "background-color 0.2s",
//   },
//   navIcon: {
//     marginRight: 15,
//     fontSize: 20,
//   },
//   toggleSidebarBtn: {
//     position: "absolute",
//     bottom: 20,
//     left: "50%",
//     transform: "translateX(-50%)",
//     backgroundColor: "#002244",
//     border: "none",
//     color: "#fff",
//     padding: "6px 10px",
//     borderRadius: 20,
//     cursor: "pointer",
//     fontSize: 16,
//   },
//   main: {
//     flexGrow: 1,
//     padding: 30,
//     display: "flex",
//     flexDirection: "column",
//   },
//   topbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 40,
//     paddingBottom: 10,
//     borderBottom: "1px solid #ccc",
//   },
//   logoutBtn: {
//     padding: "8px 16px",
//     backgroundColor: "#e63946",
//     border: "none",
//     borderRadius: 8,
//     color: "#fff",
//     cursor: "pointer",
//     fontWeight: "bold",
//     transition: "background-color 0.3s",
//   },
//   content: {
//     flexGrow: 1,
//   },
//   cardsContainer: {
//     display: "flex",
//     gap: 20,
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 12,
//     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//     flex: 1,
//     minWidth: 0,
//   },
// };

// export default UserDashboard;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDashboard = () => {
  
  const navigate = useNavigate();

 
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <ToastContainer />
      {/* Sidebar */}
      <aside
        className="bg-light p-3 shadow-sm"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100vh",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <h4 className="text-center text-danger fw-bold mb-4">
              Charity System
            </h4>
            <ul className="nav flex-column">
              {[
                { name: "VIEW DONOR", path: "/viewdonor" }
              ].map((item) => (
                <li key={item.name} className="nav-item mb-3">
                  <button
                    onClick={() => navigate(item.path)}
                    className="btn btn-outline-primary w-100 fw-semibold"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="btn btn-danger fw-bold w-100"
            onClick={handleLogout}
          >
            LOG OUT
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="p-5 bg-white"
        style={{
          marginLeft: "250px",
          minHeight: "100vh",
        }}
      >
        <h2 className="fw-bold text-danger text-center">Welcome User </h2>
        <hr />
        <div
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hl3lloooGZE49OdrNFB-FWXrHNRRTxi93Q&s")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "75vh",
            width:"915px",
            borderRadius: "10px",
          }}
        ></div>
      </main>
    </div>
  );
};

export default UserDashboard;