import React, { useEffect, useState } from 'react';
import KoshishLogo from '../assets/Others/koshish - Logo.png'

const AnalyticalDashboard = () => {
  const [barChartImage, setBarChartImage] = useState('');
  const [pieChartImage, setPieChartImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    // Make a request to the Flask API endpoint
    fetch('https://studentdropoutanalysis-2.onrender.com/generate_plot')
      .then(response => {
        if (!response.ok) {
          throw new Error('Server Not Connected');
        }
        return response.json();
      })
      .then(data => {
        setBarChartImage(data.bar_chart);
        setPieChartImage(data.pie_chart);
        setMaleCount(data.male_count);
        setFemaleCount(data.female_count);
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Server Not Connected');
      });
  }, []);

  const chartImageStyle = {
    backgroundColor: '#DBFCE9',
    maxWidth: '100%', // Adjust the maximum width as needed
    margin: '60px',   // Adjust the margin as needed
    border: '1px solid #ddd', // Add border if desired
    borderRadius: '8px', // Add border-radius if desired
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box-shadow if desired
    transition: 'transform 0.5s ease-in-out',
  };

  const hoverEffect = {
    transform: 'scale(1.1)', // Adjust the scale for the hover effect
  };

  return (
    <section id='about'>
          <h1 className="au-text mt-5">Welcome State to <img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem'}} alt="Img"/></h1>
                {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          {barChartImage && (
            <img
              src={`data:image/png;base64,${barChartImage}`}
              alt="Bar Chart"
              style={{ ...chartImageStyle, ...hoverEffect }}
              onMouseEnter={() => console.log('Mouse Enter')}
            />
          )}
          {pieChartImage && (
            <img
              src={`data:image/png;base64,${pieChartImage}`}
              alt="Pie Chart"
              style={{ ...chartImageStyle, ...hoverEffect }}
            />
          )}
          <div style={{ border: '1px solid #ddd', padding: '50px', marginTop: '20px',textAlign: 'center' }}>
            <p>Number of Male Students: {maleCount}</p>
            <p>Number of Female Students: {femaleCount}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default AnalyticalDashboard;
