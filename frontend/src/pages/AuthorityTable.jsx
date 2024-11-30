
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Vector4 from "../assets/Vector/4.png";
import KoshishLogo from '../assets/Others/koshish - Logo.png';

export default function AdminTable() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('https://studentdropoutanalysis-2.onrender.com/getAuthority')
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const tableStyle = {
   // width: '100%', // Adjust the width as needed
    margin: '30px auto', // Center the table
    borderCollapse: 'collapse',
    border: '1px solid #dee2e6'
  };

  const thTdStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #dee2e6',
    borderRight: '1px solid #dee2e6', 
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
    overflow: 'hidden',
    textOverflow: 'ellipsis', // Show an ellipsis (...) when text overflows
    width: '8.33%'
  };

  const thStyle = {
    backgroundColor: '#66E45A',
    color: '#fff',
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #dee2e6',
    borderRight: '1px solid #dee2e6', 
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
    overflow: 'hidden',
    textOverflow: 'ellipsis', // Show an ellipsis (...) when text overflows
    width: '8.33%'
  };

  const trHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  return (
    <section id="about">
      <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
        <h1 className="au-text mt-5" style={{textAlign: 'center'}}>All Authority Details</h1>
        <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card" style={{
          backgroundColor: '#E9FFFA',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
        }}>
          {users.length > 0 && (
            <table style={tableStyle}>
              <thead>
                <tr>
                 <th style={thStyle}>Index</th>
                  <th style={thStyle}>Name </th>
                  <th style={thStyle}>School</th>
                  <th style={thStyle}>Udise Code</th>
                  <th style={thStyle}>State</th>
                  <th style={thStyle}>District</th>
                  <th style={thStyle}>Taluka</th>
                  <th style={thStyle}>City</th>
                  <th style={thStyle}>Pincode</th>
                  <th style={thStyle}>Board</th>
                  <th style={thStyle}>Class</th>
                  <th style={thStyle}>Phone No</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Gender</th>
                  <th style={thStyle}>Reason</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user,index) => (
                  <tr key={user._id} style={trHoverStyle}>
                    <td style={thTdStyle}>{index + 1}</td>
                    <td style={thTdStyle}>{user.name}</td>
                    <td style={thTdStyle}>{user.school_name}</td>
                    <td style={thTdStyle}>{user.udise_code}</td>
                    <td style={thTdStyle}>{user.state}</td>
                    <td style={thTdStyle}>{user.district}</td>
                    <td style={thTdStyle}>{user.taluka}</td>
                    <td style={thTdStyle}>{user.city}</td>
                    <td style={thTdStyle}>{user.pincode}</td>
                    <td style={thTdStyle}>{user.board}</td>
                    <td style={thTdStyle}>{user.class}</td>
                    <td style={thTdStyle}>{user.phone_number}</td>
                    <td style={thTdStyle}>{user.email}</td>
                    <td style={thTdStyle}>{user.gender}</td>
                    <td style={thTdStyle}>{user.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}