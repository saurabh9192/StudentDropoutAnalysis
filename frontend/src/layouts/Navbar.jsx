
  import React from 'react'
  import {Link, useLocation } from 'react-router-dom'
  import Button from '../components/Button'
  import KoshishLogo from '../assets/Others/koshish - Logo.png'

  export default function Navbar() {
    const location = useLocation();
      return(
        <header id="navbar">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><img src={KoshishLogo} width="130" className="logo" /></a>
              <button className="navbar-toggler ml-auto custom-toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/schoolregister">Register School</Link>
                        </li>	
                        
                        <li className="nav-item">
                {location.pathname === '/welcomeafterschoollogin' || location.pathname === '/welcomeafterstatelogin' || location.pathname === '/welcomeafteradminlogin' || location.pathname === '/analyticaldashboard'? (
                  <Link className="nav-link" to="/">
                  <div style={{marginTop: '0.5rem', paddingLeft: '0.8rem', paddingRight: '2rem'}}>
                    <Button label="Logout" c="login-btn" type="login" />
                  </div>
                  </Link>
                ) : (
                  <Link className="nav-link" to="/login">
                    <Button label="Login" c="login-btn" type="login" />
                  </Link>
                )}
              </li>
                      </ul>		  
                    </div>
                  </div>
                </nav>
          </header>
      )
  }
