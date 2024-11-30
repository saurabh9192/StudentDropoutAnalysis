
import React from 'react'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import Vector4 from '../assets/Vector/4.png'
import KoshishLogo from '../assets/Others/koshish - Logo.png'

export default function Login() {
    return(
        <section id="about">    
            <div className="container-fluid px-0">

            <div className="container mb-md-0 mt-5">
            <h1 className="heading-text au-text mt-5" ><img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem', marginRight: '-0.3rem'}} /> School Authority</h1>

            {/* Row 1 */}
            <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">
                    
            <img src={Vector4} alt="Vector4" className='Vector4' />
                    <h3>If you are a registered school then,</h3>
                    <Link className="nav-link" aria-current="page" to="/schoollogin">                    
                        <Button 
                            label="Login as School Authority"
                            c="big-btn"
                        />
                    </Link>
                    <Link to="/schoolregister" style={{textDecoration: "none"}}><p className='para-hover' style={{letterSpacing: "0.2px", textDecoration: "underline",textUnderlineOffset: "4px", fontSize: "1.2rem"}}>School not registered ? Register Now</p>
                    </Link>

                </div>
            </div>

            <h1 className="heading-text au-text mt-5" ><img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem', marginRight: '-0.3rem'}} /> State Authority</h1>

                {/* Row 1 */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">
                        
                <img src={Vector4} alt="Vector4" className='Vector4' />
                <h3>Only for state authority of <strong style={{textDecoration: "underline", textUnderlineOffset: "5px"}}>koshish.com</strong></h3>
                    <Link className="nav-link" aria-current="page" to="/statelogin">                    
                        <Button 
                            label="Login as State Authority"
                            c="big-btn"
                        />
                    </Link>

                        


                </div>
                </div>

            <h1 className="heading-text au-text mt-5" ><img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem', marginRight: '-0.3rem'}} /> Admin</h1>

                {/* Row 1 */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">
                        
                <img src={Vector4} alt="Vector4" className='Vector4' />
                        <h3>Only for authorised admins of <strong style={{textDecoration: "underline", textUnderlineOffset: "5px"}}>koshish.com</strong></h3>
                        <Link className="nav-link" aria-current="page" to="/adminlogin">                    
                            <Button 
                                label="Admin Login Here"
                                c="big-btn"
                            />
                        </Link>
                        


                </div>
                </div>
            </div>

        </div>
        </section>
    )
}
