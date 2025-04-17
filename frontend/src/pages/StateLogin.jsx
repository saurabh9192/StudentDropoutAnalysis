
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Vector4 from "../assets/Vector/4.png";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KoshishLogo from '../assets/Others/koshish - Logo.png'

export default function StateLogin() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    try {

      // Validate email and password before making the API call
      if (!email || !password) {
        window.alert("Enter the data!");
        return;
      }

      const res = await fetch('https://studentdropoutanalysis-2.onrender.com/statelogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Enter the Data!");
      } else if (res.status === 400) {
        window.alert("NO STATE AUTHORIY WITH THESE CREDENTIALS");
      } else if (res.status === 401) {
        window.alert("INVALID CREDENTIALS");
      } 
      else {
        window.alert("Success");
        navigate('/analyticaldashboard');
      }

    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1 className="au-text">State Authority Login to <img src={KoshishLogo} alt="" width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem'}} /></h1>

          {/* Row 1 */}
          <img src={Vector4} alt="Vector4" className="Vector4" />
          <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card-center">
              <form style={{ width: "100%" }}>
                <h1
                  className="form-title"

                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                    fontSize: '1.7rem'
                  }}
                >
                State Login Credentials
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">

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
