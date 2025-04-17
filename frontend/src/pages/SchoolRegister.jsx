import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Vector4 from "../assets/Vector/4.png";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KoshishLogo from '../assets/Others/koshish - Logo.png'
import {Link} from 'react-router-dom'

export default function SchoolRegister() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 
  const [password, setPassword] = useState(""); 

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const [schoolUser, setSchoolUser] = useState({
    schoolname: "",
    udisecode: "",
    state: "",
    district: "",
    taluka: "",
    city: "",
    pincode: "",
    board: "",
    classfrom: "",
    classto: "",
    yearofestablishment: "",

    fname: "",
    mname: "",
    lname: "",
    email: "",
    isteacher: "",
    gender: "",
    phno: "",
    // profilepic: "",
    password: ""

  })

  const [errorMessage, setErrorMessage] = useState('');

  //VALIDATION SECTION
  const validateUdise = () => {
    // Define your regex pattern for Udise validation (only digits, length 11)
    const regexPattern = /^\d{11}$/;
  
    if (!regexPattern.test(schoolUser.udisecode)) {
      setErrorMessage('Invalid format. Please enter exactly 11 digits.');
    } else {
      setErrorMessage('');
    }
  };
  

  let name, value;

  function handleInputs(e) {
    name = e.target.name;
    value = e.target.value;
    
    if (name === 'password') {
      setPassword(value);
    }
    
    setSchoolUser({ ...schoolUser, [name]: value });
  }
  
  const PostData = async(e) => {
      e.preventDefault();
      // console.log('Form Data:', schoolUser);
      const {schoolname, udisecode, state, district, taluka, city, pincode, board, classfrom, classto, yearofestablishment, fname, mname, lname, email, isteacher, gender, phno, password} = schoolUser

      const res = await fetch("https://studentdropoutanalysis-2.onrender.com/schoolregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          schoolname, udisecode, state, district, taluka, city, pincode, board, classfrom, classto, yearofestablishment, fname, mname, lname, email, isteacher, gender, phno, password
        })
      })

      const data = await res.json();
      if(res.status === 422 || !data)
      {
        window.alert('Failed');
      }

      else
      {
        window.alert('Success')
        navigate('/schoolverify')
      }


  }

  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1 className="au-text">School Registration to <img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem'}} alt="Img"/></h1>

          {/* Row 1 */}
          <img src={Vector4} alt="Vector4" className="Vector4" />
          <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">
              <form style={{ width: "100%" }} method="POST" onSubmit={PostData}>
                <h1
                  className="form-title"

                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                  }}
                >
                  School Details
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="schoolname"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        School Name
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="schoolname"
                          className="form-control"
                          name="schoolname"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.schoolname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="udisecode"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        UDISE Code
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                        <span style={{ paddingLeft: "1rem" }}>(</span>
                        <a
                          href="https://src.udiseplus.gov.in/"
                          style={{
                            fontSize: "1.1rem",
                            color: "#054169",
                            textUnderlineOffset: "0.2rem",
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Don't Know School's UDISE
                        </a>
                        )
                      </label>
                      <div className="col-lg-12">
                        <input
                            type="text"
                            id="udisecode"
                            className="form-control"
                            name="udisecode"
                            required
                            style={{ maxWidth: "100%" }}
                            value={schoolUser.udisecode}
                            onChange={handleInputs}
                            onBlur={validateUdise}
                          />
                          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 mt-3 d-flex align-items-center justify-content-center">
                    
                    <div className="form-group row">
        <label
          htmlFor="state"
          className="col-form-label"
          style={{ position: 'relative', cursor: 'pointer' }}
        >
          School State
          <span
            style={{
              color: 'red',
              fontSize: '15px',
              position: 'absolute',
              top: '5px',
            }}
          >
            *
          </span>
        </label>
        <div className="col-lg-12 dropdown-main select-wrapper">
          <select
            id="state"
            className="form-control dropdown"
            name="state"
            required
            style={{ maxWidth: '100%', height: '50px' }}
            value={schoolUser.state}
            onChange={handleInputs}
          >
                          <option value="Select">Select your State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">
                            Dadar and Nagar Haveli
                          </option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
          </select>
          <div className="arrow-down"></div>
        </div>
      </div>
                  </div>
                </div>

                {/* Row 2 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="district"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        School District
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="district"
                          className="form-control"
                          name="district"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.district}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-12 mt-3 d-flex align-items-center justify-content-center">
                    <div className="form-group row">
                      <label
                        htmlFor="taluka"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        School Taluka
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="taluka"
                          className="form-control"
                          name="taluka"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.taluka}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-12 mt-3 d-flex align-items-center justify-content-center">
                    <div className="form-group row">
                      <label
                        htmlFor="city"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        School City
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="city"
                          className="form-control"
                          name="city"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.city}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center">
                    <div className="form-group row">
                      <label
                        htmlFor="pincode"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        School Pincode
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="pincode"
                          className="form-control"
                          name="pincode"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.pincode}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-4 mt-3 d-flex align-items-center justify-content-center">
                    
                    <div className="form-group row">
        <label
          htmlFor="board"
          className="col-form-label"
          style={{ position: 'relative', cursor: 'pointer' }}
        >
          School Board
          <span
            style={{
              color: 'red',
              fontSize: '15px',
              position: 'absolute',
              top: '5px',
            }}
          >
            *
          </span>
        </label>
        <div className="col-lg-12 dropdown-main select-wrapper">
          <select
            id="board"
            className="form-control dropdown"
            name="board"
            required
            style={{ maxWidth: '100%', height: '50px' }}
            value={schoolUser.board}
            onChange={handleInputs}
          >
                          <option value="Select your Educational Board">
                            Select your Educational Board
                          </option>
                          <option value="Central Board of Secondary Education (CBSE)">
                            Central Board of Secondary Education (CBSE)
                          </option>
                          <option value="Indian Certificate of Secondary Education (ICSE)">
                            Indian Certificate of Secondary Education (ICSE)
                          </option>
                          <option value="Andhra Pradesh Board of Secondary Education">
                            Andhra Pradesh Board of Secondary Education
                          </option>
                          <option value="Telangana State Board of Intermediate Education">
                            Telangana State Board of Intermediate Education
                          </option>
                          <option value="Board of Secondary Education, Rajasthan (RBSE)">
                            Board of Secondary Education, Rajasthan (RBSE)
                          </option>
                          <option value="Gujarat Secondary Education Board (GSEB)">
                            Gujarat Secondary Education Board (GSEB)
                          </option>
                          <option value="Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)">
                            Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)
                          </option>
                          <option value="Kerala State Education Board">
                            Kerala State Education Board
                          </option>
                          <option value="Karnataka Secondary Education Examination Board (KSEEB)">
                            Karnataka Secondary Education Examination Board
                            (KSEEB)
                          </option>
                          <option value="Haryana Board of School Education (HBSE)">
                            Haryana Board of School Education (HBSE)
                          </option>
                          <option value="Punjab School Education Board (PSEB)">
                            Punjab School Education Board (PSEB)
                          </option>
                          <option value="Bihar School Examination Board (BSEB)">
                            Bihar School Examination Board (BSEB)
                          </option>
                          <option value="Tamil Nadu State Board">
                            Tamil Nadu State Board
                          </option>
                          <option value="Maharashtra State Board">
                            Maharashtra State Board
                          </option>
                          <option value="Jharkhand Academic Council (JAC)">
                            Jharkhand Academic Council (JAC)
                          </option>
                          <option value="West Bengal Board of Secondary Education">
                            West Bengal Board of Secondary Education
                          </option>
                          <option value="Assam Higher Secondary Education Council (AHSEC)">
                            Assam Higher Secondary Education Council (AHSEC)
                          </option>
                          <option value="National Institute of Open Schooling (NIOS)">
                            National Institute of Open Schooling (NIOS)
                          </option>
          </select>
          <div className="arrow-down"></div>
        </div>
      </div>
                  </div>

                  <div className="col-lg-2 col-md-12 mt-3 d-flex align-items-center justify-content-center">
                    <div className="form-group row">
                      <label
                        htmlFor="classfrom"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Class From
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="classfrom"
                          className="form-control"
                          name="classfrom"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.classfrom}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-12 mt-3 d-flex align-items-center justify-content-center">
                   <div className="form-group row">
                      <label
                        htmlFor="classto"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Class To
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="classto"
                          className="form-control"
                          name="classto"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.classto}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 mt-3 d-flex align-items-center justify-content-center">
                    
                    <div className="form-group row">
                    <label
                      htmlFor="yearofestablishment"
                      className="col-form-label"
                      style={{ position: 'relative', cursor: 'pointer' }}
                    >
                      Year of Establishment
                      <span
                        style={{
                          color: 'red',
                          fontSize: '15px',
                          position: 'absolute',
                          top: '5px',
                        }}
                      >
                        *
                      </span>{' '}
                      &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <div className="col-lg-12 dropdown-main select-wrapper">
                      <select
                        id="yearofestablishment"
                        className="form-control dropdown"
                        name="yearofestablishment"
                        onChange={handleInputs}
                        required
                        style={{ maxWidth: '100%', height: '50px' }}
                        value={schoolUser.yearofestablishment}
                      >
                        <option value="">Select a Year</option>
                        {Array.from({ length: 2004 - 1900 }, (_, index) => 1900 + index).map(
                          (year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          )
                        )}
                      </select>
                      <div className="arrow-down"></div>
                    </div>
                  </div>
                  </div>
                </div>

                <h1
                 className="form-title"

                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                    marginTop: "3rem",
                  }}
                >
                  Personal Details
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="fname"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        First Name
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="fname"
                          className="form-control"
                          name="fname"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.fname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="mname"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Middle Name
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="mname"
                          className="form-control"
                          name="mname"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.mname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="lname"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Last Name
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="lname"
                          className="form-control"
                          name="lname"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.lname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        E-Mail Address
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          name="email"
                          required
                          style={{ maxWidth: "100%" }}
                          value={schoolUser.email}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 mt-3 d-flex align-items-center justify-content-center">
                  <div className="form-group row">
                  <label
                    htmlFor="isteacher"
                    className="col-form-label"
                    style={{ position: 'relative', cursor: 'pointer' }}
                  >
                    Are you a teacher in the above School?
                  </label>
                  <div className="col-lg-12">
                    <div className="radio-choices" style={{ height: '50px' }}>
                      <div className="radio-choice">
                        <input
                          type="radio"
                          id="isteacher1"
                          name="isteacher"
                          value="yes"
                          onChange={handleInputs}
                          checked={schoolUser.isteacher === 'yes'}
                        />
                        <label htmlFor="isteacher1">Yes</label>
                      </div>
                      <div className="radio-choice">
                        <input
                          type="radio"
                          id="isteacher2"
                          name="isteacher"
                          value="no"
                          onChange={handleInputs}
                          checked={schoolUser.isteacher === 'no'}
                        />
                        <label htmlFor="isteacher2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>

                  <div className="col-lg-4 col-md-4 mt-3 d-flex align-items-center justify-content-center">
                  <div className="form-group row">
        <label
          htmlFor="gender"
          className="col-form-label"
          style={{ position: 'relative', cursor: 'pointer' }}
        >
          Gender
          <span
            style={{
              color: 'red',
              fontSize: '15px',
              position: 'absolute',
              top: '5px',
            }}
          >
            *
          </span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </label>
        <div className="col-lg-12 dropdown-main select-wrapper">
          <select
            id="gender"
            className="form-control dropdown"
            name="gender"
            required
            style={{ maxWidth: '100%', height: '50px' }}
            value={schoolUser.gender}
            onChange={handleInputs}
          >
            <option value="">Select Gender</option>
            <option value="female">Male</option>
            <option value="male">Female</option>
            <option value="other">Other</option>
            <option value="Prefer not to answer">Prefer not to Answer</option>
          </select>
          <div className="arrow-down"></div>
        </div>
      </div>
                  </div>
                </div>

                {/* Row 6 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="phno"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Phone Number
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="phno"
                          className="form-control"
                          name="phno"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={schoolUser.phno}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  

                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                  <div className="form-group row">
  <label
    htmlFor="password"
    className="col-form-label"
    style={{ position: "relative", cursor: "pointer" }}
  >
    Enter Password
    <span
      style={{
        color: "red",
        fontSize: "15px",
        position: "absolute",
        top: "5px",
      }}
    >
      *
    </span>
  </label>
  <div className="col-lg-12" style={{ position: "relative" }}>
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      className="form-control"
      name="password"
      required
      style={{ maxWidth: "100%", height: "50px" }}
      value={password}
      onChange={handleInputs}
    />
    <button
      type="button"
      onClick={togglePasswordVisibility}
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      {showPassword ? (
        <VisibilityOffIcon style={{color: "#054169", marginRight: '10px'}} />
      ) : (
        <VisibilityIcon style={{color: "#054169", marginRight: '10px'}} />
      )}
    </button>
  </div>
</div>

                  </div>
                </div>

                <p
                  style={{
                    marginTop: "3rem",
                    lineHeight: "25px",
                    fontSize: "1.1rem",
                    color: "#054169",
                  }}
                >
                  In order to process your school registration, we ask to
                  provide the following information. Please note that all the
                  fields marked with an asterisk(*) are required.
                </p>

                <Link to="/schoolverify" style={{textDecoration: "none"}}><p className='para-hover' style={{letterSpacing: "0.2px", textDecoration: "underline",textUnderlineOffset: "4px", fontSize: "1.2rem"}}>School already registered ? Login as School here</p>
                </Link>

                <div className="row">
                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="second-btn" type="reset">Reset <ClearIcon /> </button>
                    {/* <Link className="nav-link" aria-current="page" to="/">
                      <Button label="Reset" c="second-btn" type="reset" />
                    </Link> */}
                  </div>

                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="main-btn" type="submit" onClick={PostData}>Submit <DoneIcon /> </button>
                    {/* <Link className="nav-link" aria-current="page" to="/schoolverify">
                      <Button label="Submit" c="main-btn" type="submit" />
                    </Link> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}