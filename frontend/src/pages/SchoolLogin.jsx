
import React, { useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Vector4 from "../assets/Vector/4.png";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KoshishLogo from '../assets/Others/koshish - Logo.png'
import { useSchool } from '../context/SchoolContext';
import { AuthContext } from '../context/AuthContext';
export default function SchoolLogin() {

  const navigate = useNavigate();
  const { setUdiseCode } = useSchool();
  const [showPassword, setShowPassword] = useState(false); 
  const [password, setPassword] = useState(""); 
  const [udisecode, setLocalUdiseCode] = useState("");
  const { login } = useContext(AuthContext);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [email, setEmail] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('https://studentdropoutanalysis-2.onrender.com/schoollogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          udisecode, email, password
        })
      });
  
      const data = await res.json();
  
      if (res.status === 422 || !data) {
        window.alert("Enter the Data!");
      } 
      
      else if (res.status === 400) {
        window.alert("SCHOOL NOT REGISTERED WITH THIS UDISE CODE");
      } 
      
      else if (res.status === 401) { 
        window.alert("INVALID CREDENTIALS");
      } 
      
      else if (res.status === 200) { 
        window.alert("Success");
        setUdiseCode(udisecode);
        login();
        console.log("Navigating to welcome page");
        navigate('/welcomeafterschoollogin');
      }

    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };
  


  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1 className="au-text">School Login to <img src={KoshishLogo} alt="" width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem'}} /></h1>

          {/* Row 1 */}
          <img src={Vector4} alt="Vector4" className="Vector4" />
          <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card-center">
              <form style={{ width: "100%" }} method="GET">
                <h1
                  className="form-title"

                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                    fontSize: '1.7rem'
                  }}
                >
                  School Login Credentials
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">

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
                        </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="udisecode"
                          className="form-control"
                          name="udisecode"
                          required
                          style={{ maxWidth: "100%" }}
                          onChange={(e) => setLocalUdiseCode(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
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
                        </span> &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          name="email"
                          required
                          style={{ maxWidth: "100%" }}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
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
                      <div
                        className="col-lg-12"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control"
                          name="password"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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

                <div className="row mt-3">
                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="second-btn" type="reset">Reset <ClearIcon /> </button>
                    {/* <Link className="nav-link" aria-current="page" to="/">
                      <Button label="Reset" c="second-btn" type="reset" />
                    </Link> */}
                  </div>

                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="main-btn" type="submit" onClick={submitLogin}>Submit <DoneIcon /> </button>
                    {/* <Link className="nav-link" aria-current="page" to="/">
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
