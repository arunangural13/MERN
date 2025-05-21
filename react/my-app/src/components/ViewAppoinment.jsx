import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewAppointment = () => {
  const navigate = useNavigate();

  const [appointments,setAppointments] = useState("")

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.post("http://localhost:2000/api/getallappointment");
        console.log(res.data.data)
        setAppointments(res.data.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        toast.error("Failed to load appointments");
      }
    };

    fetchAppointments();
  }, []);


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
          height: "90vh",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <h4 className="text-center text-danger fw-bold mb-4">charity system</h4>
            <ul className="nav flex-column">
              {[
                { name: "ADD STAFF", path: "/addstaff" },
                { name: "VIEW STAFF", path: "/viewstaff" },
                { name: "ADD MEMBER TYPE", path: "/addmembertype" },
                { name: "VIEW MEMBER TYPE", path: "/viewmembertype" },
                { name: "ADD MEMBER", path: "/addmember" },
                { name: "VIEW MEMBER", path: "/viewmember" },
                { name: "FUND RAISE", path: "/fundraise" },
                { name: "VIEW FUND RAISE", path: "/viewfundraise" },
                { name: "APPOINTMENT", path: "/appointment" },
                { name: "VIEW APPOINTMENT", path: "/viewappointment" },
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
        {/* <h2 className="fw-bold text-danger text-center">Request Appointment</h2> */}
        
        
        <hr className="my-3" />
        <h3 className ="fw-bold text-danger text-center">All Appointments</h3>


        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>S.NO</th>
                <th>For</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No appointments found
                  </td>
                </tr>
              ) : (
                appointments.map((app, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{app.appointmentfor}</td>
                    <td>{app.reasonforappointment}</td>
                    <td>{app.appointmentdate}</td>
                    <td>{app.appointmenttime}</td>
                    

                    <td>
                      <span
                        className={`badge ${
                          app.status === "approved"
                            ? "bg-success"
                            : app.status === "rejected"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ViewAppointment;