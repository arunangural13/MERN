

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewAppointment = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.post("http://localhost:2000/api/getallappointment");
      if (response.data && response.data.data) {
        setAppointments(response.data.data);
      } else {
        toast.error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Failed to load appointments");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await axios.post("http://localhost:2000/api/updateappointmentbyid", {
        id,
        status,
      });
  console.log(response.data.success)
      if (response.data.success) {
        toast.success(`Appointment ${status}`);
        fetchAppointments();
      } else {
        toast.error("Failed to update appointment status");
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast.error("Server error while updating status");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="d-flex">
      <ToastContainer />

      {/* Sidebar */}
      <aside
        className="bg-light p-3 shadow"
        style={{
          width: "250px",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          overflowY: "auto",
        }}
      >
        <h4 className="text-center text-danger fw-bold mb-4">Charity System</h4>
        <ul className="nav flex-column mb-auto">
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
                className="btn btn-outline-primary w-100"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn btn-danger fw-bold w-100" onClick={handleLogout}>
          LOG OUT
        </button>
      </aside>

      {/* Main Content */}
      <main
        className="p-4"
        style={{
          marginLeft: "250px",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <h3 className="fw-bold text-danger text-center">All Appointments</h3>
        <hr />
        <div className="table-responsive mt-4">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>S.No</th>
                <th>For</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">
                    No appointments found
                  </td>
                </tr>
              ) : (
                appointments.map((app, index) => (
                  <tr key={app._id}>
                    <td>{index + 1}</td>
                    <td>{app.appointmentfor}</td>
                    <td>{app.reasonforappointment}</td>
                    <td>{app.appointmentdate}</td>
                    <td>{app.appointmenttime}</td>
                    <td>
                      <span
                        className={`badge px-3 py-2 ${
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
                    <td>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => updateStatus(app._id, "approved")}
                        disabled={app.status === "approved"}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => updateStatus(app._id, "rejected")}
                        disabled={app.status === "rejected"}  >
                        Reject
                      </button>
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

