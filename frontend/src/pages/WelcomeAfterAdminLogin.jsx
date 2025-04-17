import React from "react";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

export default function WelcomeAfterAdminLogin() {
  
  const handleTableFormatClick = () => {
    console.log("Table format button clicked");
  };

  const handleDashboardFormatClick = () => {
    console.log("Dashboard format button clicked");
  };

  return (
    <section id="about" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="row d-flex align-items-center justify-content-center" >
        <h1 className="au-text" style={{ textAlign: 'center', marginBottom: '20px' }}>All Students Details</h1>
        <div className="col-lg-12 col-md-12 aboutus-main-card" style={{
          backgroundColor: '#E9FFFA',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' ,paddingLeft:'550px'}}>
            <Link to="/studenttable">
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#66E45A',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={handleTableFormatClick}
            >
              Table Format
            </button>
            </Link>

            <Link to="/dashboard">
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#3D7E9A',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={handleDashboardFormatClick}
            >
              Dashboard Format
            </button>
            
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
