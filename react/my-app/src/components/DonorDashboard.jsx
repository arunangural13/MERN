import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DonorDashboard = () => {
  
  const navigate = useNavigate();

  

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      {/* Fixed Sidebar */}
      <aside
        className="bg-light p-3 shadow-sm"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "90vh",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <h4 className="text-center text-danger fw-bold mb-4">
              charity system
            </h4>
            <ul className="nav flex-column">
              {[
                { name: "DONOR FUND RAISER", path: "/donorfundraiser" },
                { name: "DONOR APPOINTMENT", path: "/donorappointment" },
                {name:"VIEW APPOINTMENT",path:"/viewappointment"}
                
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
        <h2 className="fw-bold text-danger text-center">Welcome to Donor Dashboard </h2>
        <hr />
        <div
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/2171791995/photo/volunteers-embracing-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=D9FbFOw4xa88GN625bL_HYn34alFMtK4RVy-Vg1j6_4=")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "75vh",
            borderRadius: "10px",
            width:"920px"
          }}
        ></div>
      </main>
    </div>
  );
};

export default DonorDashboard