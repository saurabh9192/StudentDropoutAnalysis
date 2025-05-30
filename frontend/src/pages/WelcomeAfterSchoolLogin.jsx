
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Vector4 from "../assets/Vector/4.png";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KoshishLogo from '../assets/Others/koshish - Logo.png'
import Button from '../components/Button'
import {Link} from 'react-router-dom'

export default function WelcomeAfterSchoolLogin() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 
  const [password, setPassword] = useState(""); 

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const [studentUser, setStudentUser] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    age: "",
    gender: "",           
    phno: "",
    address: "",
    aadharno: "",
    year: "",
    udisecode: "",
    isresolved: false,    
    reason: "",
    password: "",
    tokens: []            
  });
  

  let name, value;

  function handleInputs(e) {
    name = e.target.name;
    value = e.target.value;
    
    if (name === 'password') {
      setPassword(value);
    }
    
    setStudentUser({ ...studentUser, [name]: value });
  }
  
  const PostData = async (e) => {
  e.preventDefault();
  const {
    fname, mname, lname, email, age, gender,
    phno, address, aadharno, year, udisecode,
    reason, password
  } = studentUser;

  try {
    const res = await fetch("https://studentdropoutanalysis-2.onrender.com/welcomeafterschoollogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, mname, lname, email, age, gender,
        phno, address, aadharno, year, udisecode,
        reason, password
      })
    });

    const data = await res.json();

    // Log the response
    console.log("Response status:", res.status);
    console.log("Response data:", data);

    if (res.status === 201) {
      console.log("Student dropout details registered successfully.");
      window.alert("Success");
      navigate("/welcomeafterschoollogin");
    } else if (res.status === 422 && data.message === "Student already exists") {
      console.log("Student already exists.");
      window.alert("Student already exists.");
    } else if (res.status === 404 && data.message === "School not found") {
      console.log("School not found.");
      window.alert("School not found.");
    } else if (res.status === 401 && data.message.includes("INVALID CREDENTIALS")) {
      console.log("Invalid credentials: Password not matching.");
      window.alert("Invalid credentials: Password not matching.");
    } else if (res.status === 422 && data.message === "Please fill all the details") {
      console.log("Please fill all the details.");
      window.alert("Please fill all the details.");
    } else {
      console.log("Unexpected error:", data);
      window.alert("An unexpected error occurred.");
    }

  } catch (error) {
    console.error("Error in PostData:", error);
    window.alert("Server error occurred. Check console for details.");
  }
};
  
  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1 className="au-text">Welcome School to <img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem'}} alt="Img"/></h1>
          <div>
            <Link className="nav-link" aria-current="page" to="/studenttable">
              <Button 
                label="History" 
                c="main-btn" 
                type="submit" 
                style={{
                  position: 'fixed', // Use fixed to make it stay at the corner when scrolling
                  top: '10px', 
                  right: '10px',
                  zIndex: '1000', // Ensure it stays above other content
                  padding: '10px 20px', // Add padding for a better appearance
                  backgroundColor: '#007bff', // Background color for the button
                  color: '#fff', // Text color
                  border: 'none', // Remove border
                  borderRadius: '5px', // Slight rounding for better appearance
                  cursor: 'pointer', // Show pointer on hover
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                  transition: 'background-color 0.3s', // Smooth transition for hover effect
                }}
              />
            </Link>
          </div>

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
                    marginTop: "0rem",
                  }}
                >
                  Student Details who is taking dropout
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
                          value={studentUser.fname}
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
                          value={studentUser.mname}
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
                          value={studentUser.lname}
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
                          value={studentUser.email}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
   
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="age"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Age
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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="age"
                          className="form-control"
                          name="age"
                          required
                          style={{ maxWidth: "100%" }}
                          value={studentUser.age}
                          onChange={handleInputs}
                        />
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
            value={studentUser.gender}
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

                {/* Row 3 inside form */}
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
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="phno"
                          className="form-control"
                          name="phno"
                          required
                          style={{ maxWidth: "100%" }}
                          value={studentUser.phno}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="address"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Address
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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                          name="address"
                          required
                          style={{ maxWidth: "100%" }}
                          value={studentUser.address}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="aadharno"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Aadhar Number
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
                          id="aadharno"
                          className="form-control"
                          name="aadharno"
                          required
                          style={{ maxWidth: "100%" }}
                          value={studentUser.aadharno}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                </div>


                {/* Row 6 inside form */}

                <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="year"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Year
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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="year"
                          className="form-control"
                          name="year"
                          required
                          style={{ maxWidth: "100%" }}
                          value={studentUser.year}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
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
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="udisecode"
                          className="form-control"
                          name="udisecode"
                          required
                          style={{ maxWidth: "100%" }}
                          value={studentUser.udisecode}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                  
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 col-md-4 mt-3 d-flex align-items-center justify-content-center">
                  <div className="form-group row">
        <label
          htmlFor="reason"
          className="col-form-label"
          style={{ position: 'relative', cursor: 'pointer' }}
        >
          Reason
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
            id="reason"
            className="form-control dropdown"
            name="reason"
            required
            style={{ maxWidth: '100%', height: '50px' }}
            value={studentUser.reason}
            onChange={handleInputs}
          >
            <option value="">Reason for Dropout</option>
            <option value="academic">Academic</option>
            <option value="social">Social</option>
            <option value="financial">Financial</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="others">Others</option>
          </select>
          <div className="arrow-down"></div>
        </div>
      </div>
                  </div>

                  {/* <div className="col-lg-4 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="profilepic"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Profile Picture
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
                          type="file"
                          id="profilepic"
                          className="form-control"
                          name="profilepic"
                          accept="image/*"
                          required
                          style={{ maxWidth: "100%" }}
                          value={studentUser.profilepic}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div> */}

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

                <div className="row">
                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="second-btn" type="reset">Reset <ClearIcon /> </button>
                    {/* <Link className="nav-link" aria-current="page" to="/">
                      <Button label="Reset" c="second-btn" type="reset" />
                    </Link> */}
                  </div>

                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="main-btn" type="submit" onClick={PostData}>Submit <DoneIcon /> </button>
                    {/* <Link className="nav-link" aria-current="page" to="/schoollogin">
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
