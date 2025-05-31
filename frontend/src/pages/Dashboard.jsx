import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const Dashboard = () => {
  const [genderData, setGenderData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get('https://studentdropoutanalysis-2.onrender.com/genderCount')
      .then((response) => {
        const genderData = [
          { name: 'Male', value: response.data.male },
          { name: 'Female', value: response.data.female },
        ];
        setGenderData(genderData);
      })
      .catch((error) => console.error('Error fetching gender data:', error));

    axios
      .get('https://studentdropoutanalysis-2.onrender.com/categoryCount')
      .then((response) => {
        const categoryData = [
          { name: 'Financial', value: response.data.financial },
          { name: 'Personal', value: response.data.personal },
          { name: 'Social', value: response.data.social },
          { name: 'Work', value: response.data.work },
          { name: 'Academic', value: response.data.academic },
          { name: 'Others', value: response.data.others },
        ];
        setCategoryData(categoryData);
      })
      .catch((error) => console.error('Error fetching category data:', error));
  }, []);

  const COLORS_GENDER = ['#0088FE', '#FF69B4'];
  const COLORS_CATEGORY = [
    '#FFBB28',
    '#00C49F',
    '#FF8042',
    '#FF00FF',
    '#00BFFF',
    '#8A2BE2',
  ];

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={14}
      >
        {`${name} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '50px',
        padding: '0 20px',
      }}
    >
      {/* Gender Distribution Pie Chart */}
      <div style={{ flex: '0 0 35%', textAlign: 'center' }}>
        <h2>Gender Distribution</h2>
        <PieChart width={300} height={300}>
          <Pie
            data={genderData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomLabel}
            labelLine={false}
          >
            {genderData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS_GENDER[index % COLORS_GENDER.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </div>

      {/* Category Distribution Pie Chart */}
      <div style={{ flex: '0 0 65%', textAlign: 'center' }}>
        <h2>Category Distribution</h2>
        <PieChart width={500} height={400}>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            outerRadius={140}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomLabel}
            labelLine={false}
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS_CATEGORY[index % COLORS_CATEGORY.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
