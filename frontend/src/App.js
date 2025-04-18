import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Footer from './layouts/Footer';
import Error404 from './pages/Error404';
import SchoolRegister from './pages/SchoolRegister';
import SchoolLogin from './pages/SchoolLogin';
import StateLogin from './pages/StateLogin';
import AnalyticalDashboard from './pages/AnalyticalDashboard';
import AdminLogin from './pages/AdminLogin';
import WelcomeAfterSchoolLogin from './pages/WelcomeAfterSchoolLogin';
import WelcomeAfterAdminLogin from './pages/WelcomeAfterAdminLogin';
import Dashboard from './pages/Dashboard';
import SchoolRegisterVerify from './pages/Schoolregisterverify';
import StudentTable from './pages/StudentTable'
export default function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Render Navbar only if the current route is not /dashboard */}
      {location.pathname !== '/dashboard' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/schoolregister' element={<SchoolRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/schoollogin' element={<SchoolLogin />} />
        <Route path='/statelogin' element={<StateLogin />} />
        <Route path='/analyticaldashboard' element={<AnalyticalDashboard />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/welcomeafterschoollogin/:udisecode' element={<WelcomeAfterSchoolLogin />} />
        <Route path='/welcomeafteradminlogin' element={<WelcomeAfterAdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/schoolverify' element={<SchoolRegisterVerify />} />
        <Route path='/studenttable' element={<StudentTable />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}
