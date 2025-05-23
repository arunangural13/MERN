import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMemberType = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    memberType: "",
    description: "",
    status: "Active",
  });

  const [memberTypes, setMemberTypes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchMemberTypes = async () => {
    try {
      const res = await axios.post("http://localhost:2000/api/getallmembertype");
      console.log(res.data.data)
      setMemberTypes(res.data.data);
    } catch (err) {
      console.error("Error fetching member types", err);
      toast.error("falied to fetch member type")
    }
  };

  useEffect(() => {
    fetchMemberTypes();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        // Update
        await axios.post("http://localhost:2000/api/updatemembertypebyid",{
            id:editingId,
            ...formData
        });
        setEditingId(null);
        toast.success("Member type updated!")
      } else {
        // Add
        await axios.post("http://localhost:2000/api/addmembertype", formData);
        toast.success("Member type added")
      }

      setFormData({ memberType: "", description: "", status: "Active" });
      fetchMemberTypes();
    } catch (err) {
      console.error("Error submitting form", err);
      toast.error("Error submitting form");
    }
  };

  const handleEdit = (type) => {
    setFormData({
      memberType: type.memberType,
      description: type.description,
      status: type.status,
    });
    setEditingId(type._id);
  };

  const handleDelete = async (id) => {
    
      try {
        await axios.post("http://localhost:2000/api/deletemembertypebyid",{id});
        toast.success("Member Type deleted")
        fetchMemberTypes();
      } catch (err) {
        console.error("Error deleting member type", err);
        toast.error("Error deleting member type");
      }
    
  };


  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
    <ToastContainer/>
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
                 { name: "ADD STAFF", path: "/addstaff" },
                 { name: "VIEW STAFF", path: "/viewstaff" },
                 { name: "ADD MEMBER TYPE", path: "/addmembertype" },
                 { name: "VIEW MEMBER TYPE", path: "/viewmembertype" },
                 { name: "ADD MEMBER", path: "/addmember" },
                 { name: "VIEW MEMBER", path: "/viewmember" },
                 { name: "FUND RAISE", path: "/fundraise" },
                 { name: "VIEW FUND RAISE", path: "/viewfundraise" },
                 { name: "APPOINTMENT", path: "/appointment" },
                //  { name: "VIEW FUND BY DONOR", path: "/viewfundbydonor" }
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
      width:"1000px",
      minHeight: "100vh",
    }}
  >

<div className="container  p-4 shadow rounded" style={{ Width: "100px" }}>

      <h3 className="text-center text-danger fw-bold mb-4">
        {editingId ? "Update Member Type" : "Add Member Type"}
      </h3>

      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light mb-5">
        <div className="mb-3">
          <label className="form-label fw-semibold">Member Type</label>
          <input
            type="text"
            className="form-control"
            name="memberType"
            value={formData.memberType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Status</label>
          <select
            className="form-select"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary fw-bold">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <h4 className="text-center text-secondary mb-3">All Member Types</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-danger">
            <tr>
              <th>Member Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {memberTypes.length === 0 ? (
              <tr>
                <td colSpan="4">No member types found.</td>
              </tr>
            ) : (
              memberTypes.map((type) => (
                <tr key={type._id}>
                  <td>{type.memberType}</td>
                  <td>{type.description}</td>
                  <td>{type.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(type)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(type._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        
      </div>
      
    </div>
    </main>
    </div>
  );
};

export default AddMemberType;