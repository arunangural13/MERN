import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonorAppoinment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    DonorAppoinmentfor: "",
    reasonforDonorAppoinment: "",
    DonorAppoinmentdate: "",
    DonorAppoinmenttime: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:2000/api/addappointment", formData);
      console.log(res)
    
      toast.success("DonorAppoinment requested successfully!");
      setFormData({
        DonorAppoinmentfor: "",
        reasonforDonorAppoinment: "",
        DonorAppoinmentdate: "",
        DonorAppoinmenttime: "",
      });
    } catch (err) {
      // console.error("Error adding DonorAppoinment:", err);
      toast.error("Failed to request DonorAppoinment.");
    }
  };

  return (
    <div>
      {/* Fixed Sidebar */}
      <ToastContainer/>
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
              Charity system
            </h4>
            <ul className="nav flex-column">
              {[
                { name: "DONOR FUND RAISER", path: "/donorfundraiser" },
                { name: "DONOR APPOINTMENT", path: "/donorappointment" },
                {name:"VIEW APPOINTMENT",path:"/viewdonorappointment"}
                
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
          marginLeft: "200px",
          minHeight: "100vh",
          width:"1060px"
        }}
      >
        <h2 className="fw-bold text-danger text-center">Request Donor Appoinment</h2>
        <hr />
        <form
          onSubmit={handleSubmit}
          className="bg-light p-4 rounded shadow-sm"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <div className="mb-3">
            <label className="form-label fw-semibold">Donor Appoinment For</label>
            <input
              type="text"
              className="form-control"
              name="DonorAppoinmentfor"
              value={formData.DonorAppoinmentfor}
              onChange={handleChange}
              required
              placeholder="e.g. Blood Donation"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Reason For Donor Appoinment</label>
            <textarea
              className="form-control"
              name="reasonforDonorAppoinment"
              rows="3"
              value={formData.reasonforDonorAppoinment}
              onChange={handleChange}
              required
              placeholder="Describe your reason"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Donor Appoinment Date</label>
            <input
              type="date"
              className="form-control"
              name="DonorAppoinmentdate"
              value={formData.DonorAppoinmentdate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Donor Appoinment Time</label>
            <input
              type="time"
              className="form-control"
              name="DonorAppoinmenttime"
              value={formData.DonorAppoinmenttime}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Request Donor Appoinment
          </button>
        </form>
      </main>
    </div>
  );
};

export default DonorAppoinment;