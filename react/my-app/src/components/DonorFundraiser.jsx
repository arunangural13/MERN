import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const DonorFundraiser = () => {
  const token = localStorage.getItem('token');
  console.log(token)
  const userId = localStorage.getItem("userId")
  console.log(userId)
 
  const [funds, setFunds] = useState([]);
  const [donations, setDonations] = useState({});
  const navigate = useNavigate();

  // Fetch all fundraisers
  const fetchFunds = async () => {
    try {
      const res = await axios.post('http://localhost:2000/api/getallfund');
      setFunds(res.data.data);
    } catch (err) {
      toast.error('Failed to fetch fundraisers');
    }
  };

  // Handle input change for donations
  const handleDonationChange = (id, value) => {
    setDonations({ ...donations, [id]: value });
  };

  // Handle donate button click
  const handleDonate = async (fundId) => {
    const donationAmount = donations[fundId];
    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
      toast.error('Please enter a valid donation amount');
      return;
    }
      
    try {
      const res = await axios.post('http://localhost:2000/api/updatefundbyid', {
        id: fundId,
        donationAmount: Number(donationAmount),
        userId: userId
      });

      if (res.data.success) {
        toast.success('Thank you for your donation!');
        setDonations({ ...donations, [fundId]: '' }); // Clear input
        fetchFunds(); // Refresh updated fund data
      } else {
        toast.error(res.data.message || 'Donation failed');
      }
    } catch (err) {
      toast.error('Donation failed');
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      {/* Sidebar */}
      <aside className="bg-light p-3 shadow-sm" style={{ position: 'fixed', top: 0, left: 0, width: '250px', height: '90vh', zIndex: 1000, overflowY: 'auto' }}>
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <h4 className="text-center text-danger fw-bold mb-4">Charity System</h4>
            <ul className="nav flex-column">
              {[{ name: ' DONOR FUND RAISER', path: '/donorfundraiser' }, { name: ' DONOR APPOINTMENT', path: '/donorappointment' }, { name: 'VIEW APPOINTMENT', path: '/viewdonorappointment' }].map((item) => (
                <li key={item.name} className="nav-item mb-3">
                  <button onClick={() => navigate(item.path)} className="btn btn-outline-primary w-100 fw-semibold">{item.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-danger fw-bold w-100" onClick={handleLogout}>
            LOG OUT
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-5 bg-white" style={{ marginLeft: '250px', minHeight: '100vh' }}>
        <div className="container mt-5">
          <ToastContainer />
          <h2 className="text-center text-success">Available Fundraisers</h2>
          <div className="row">
            {funds.map((fund) => (
              <div className="col-md-4 mb-4" key={fund._id}>
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{fund.tittle}</h5>
                    <p className="card-text">{fund.description}</p>
                    <p><strong>Goal Amount:</strong> ₹{fund.amount}</p>
                    <p><strong>Collected:</strong> ₹{fund.collectedAmount || 0}</p>
                    <p><strong>Start:</strong> {new Date(fund.startDate).toLocaleDateString()}</p>
                    <p><strong>End:</strong> {new Date(fund.endDate).toLocaleDateString()}</p>

                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={donations[fund._id] || ''}
                      onChange={(e) => handleDonationChange(fund._id, e.target.value)}
                      className="form-control"
                    />
                    <button
                      onClick={() => handleDonate(fund._id)}
                      className="btn btn-primary w-100 mt-3"
                    >
                      Donate
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {funds.length === 0 && <p className="text-center mt-5">No fundraisers available.</p>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonorFundraiser;