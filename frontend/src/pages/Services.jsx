
import React from 'react'
import ServicesItem from '../components/ServicesItem'
import Vector1 from '../assets/Vector/1.png'

export default function Services() {

    return(
        <section id="services">
        <div className="container-fluid px-0">

            <div className="container mb-md-0 mt-5">
            <h1 className="heading-text au-text">Our Services</h1>

            {/* Row 1 */}
            <img src={Vector1} alt="Vector1" className='Vector1' />
            <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 mt-3 services-main-card">
                
                <ServicesItem
                    q = "Dropout Analysis: "
                    a = " Identify at-risk students and improve retention rates."
                />

                <ServicesItem
                    q = "Community Partnerships: "
                    a = " Collaborate with local organizations, businesses, and community leaders to create opportunities and incentives for students taking drop."
                />

                <ServicesItem
                    q = "Career Counseling: "
                    a = "Provide career counseling and guidance to help students understand the relevance of their education in achieving their long-term goals. This can inspire students to stay in school and graduate."
                />

                <ServicesItem
                    q = "Personalized Learning Plans: "
                    a = "Develop personalized learning plans for students, tailoring the curriculum to their individual needs and learning styles."
                />
                
                <ServicesItem
                    q = "Trend Analysis: "
                    a = "Conduct trend analysis to identify patterns and changes in dropout rates over time, helping educational institutions and policymakers make data-informed decisions."
                />

                <ServicesItem
                    q = "Thank You "
                    a = "Thank you for choosing Koshish to make smarter educational decisions."
                />


                </div>
            </div>
            </div>

        </div>
        </section>
    )
}