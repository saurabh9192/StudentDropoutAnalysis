
import React from 'react'
import Button from '../components/Button'
import Vector1 from '../assets/Vector/1.png'
import Vector2 from '../assets/Vector/2.png'
import Vector3 from '../assets/Vector/3.png'

export default function Home() {
    return(
      <section id="home">
      <img src={Vector1} alt="Vector1" className='Vector1' />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-8 col-md-12">
              <h1 className="primary-text" style={{marginTop: "5.3rem"}}>Koshish:  Your Gateway to Smarter Dropout Analysis and Policy Improvements.</h1>

            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
              <img
                src="https://i.ibb.co/SxqTJLY/MAH-GOV-Logo.png"
                alt="Graphical-1"
                height="250px"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 ">
              <h3 className="para-1 d-flex justify-content-center align-items-center" style={{marginTop: "2rem"}}>
              Welcome to Koshish, a platform which is your key to informed decision-making and effective interventions in the domain of education. Explore dropout trends, drive policy improvements, and unlock a brighter future for students across the nation.
              Our platform is a hub of data-driven insights, research, and innovative solutions aimed at addressing the challenges in the education sector. Whether you're an educator, policymaker, or a concerned citizen, Koshish provides the tools and resources you need to foster positive change.
              </h3>
              <a href="/login">
                <Button 
                  label="Start"
                  c="main-btn"
                  type="start"
                />
              </a>
              <img src={Vector3} alt="Vector3" className='Vector3' />
              <img src={Vector2} alt="Vector2" className='Vector2' />
            </div>
            <div className="col-lg-1 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}