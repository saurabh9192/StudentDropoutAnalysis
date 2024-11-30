
import React from 'react'
import TeamItemMohit, { Guide, TeamItem } from '../components/TeamItem'
import Mohit from '../assets/Team/Mohit.png'
import Sir from '../assets/Team/Sir.png'
import Yash from '../assets/Team/Yash.png'
import Saurabh from '../assets/Team/Saurabh.png'
import Aditya from '../assets/Team/Aditya.png'
import LinkedIn from '../assets/Social Logos/LinkedIn.png'
import Gmail from '../assets/Social Logos/Gmail.png'
import Website from '../assets/Social Logos/Website.png'
import Vector1 from '../assets/Vector/1.png'
import KoshishLogo from '../assets/Others/koshish - Logo.png'


export default function Contact() {
    return(
        <section id="ourteam">
        <div className="container-fluid px-0">
            <div className="container mb-md-0 mt-5">

            <img src={Vector1} alt="Vector1" className='Vector1' />
            <h1 className="heading-text p-text">Our Team at <img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem'}} /></h1>
            <div style={{marginTop: "2rem"}}>
                <h4 style={{fontSize: "1.2rem", lineHeight: "26px"}}>
                As proud students of <strong>MIT Academy of Engineering, Alandi</strong>, we're thrilled to unveil our project and share our journey of exploration, learning, and innovation with the world. Our time at ABC College has taught us the value of dreaming big and the importance of making a difference. We look forward to making our college and our community proud as we embark on this exciting endeavor.</h4>
            </div>

            <div className="row mt-lg-2 d-flex align-items-center justify-content-around">
                <TeamItemMohit 
                    source= {Mohit}
                    name= "Mohit Jaiswal"
                    prn= "202101040048"
                    roll= "21"
                    sociallogolinkedin = {LinkedIn}
                    sociallogogmail = {Gmail}
                    sociallogowebsite = {Website}
                    teamlinkedin = "https://www.linkedin.com/in/mohitjaiswal28/"
                    teammail= "mailto: mohitjaiswal.work@gmail.com?Subject=Related to koshish.com - WT Project [TY AY 2023]"
                    teamwebsite= "https://www.mohitjaiswal.com"
                />
                <TeamItem 
                    source= {Saurabh}
                    name= "Saurabh Deshmukh"
                    prn= "0120200569"
                    roll= "1"
                    sociallogolinkedin = {LinkedIn}
                    sociallogogmail = {Gmail}    
                    teamlinkedin = "https://www.linkedin.com/in/saurabh-deshmukh-8806b1257/"            
                    teammail= "mailto: saurabh.deshmukh@mitaoe.ac.in?Subject=Related to koshish.com - WT Project [TY AY 2023]"
                />
                <TeamItem 
                    source= {Aditya}
                    name= "Aditya Dhonde"
                    prn= "202101040032"
                    roll= "10"
                    sociallogolinkedin = {LinkedIn}
                    sociallogogmail = {Gmail}
                    teamlinkedin = "https://in.linkedin.com/in/aditya-dhonde-15a915280"
                    teammail= "mailto: aditya.dhonde@mitaoe.ac.in?Subject=Related to koshish.com - WT Project [TY AY 2023]"
                />
                <TeamItem 
                    source= {Yash}
                    name= "Yash Ghuge"
                    prn= "202101040056"
                    roll= "29"
                    sociallogolinkedin = {LinkedIn}
                    sociallogogmail = {Gmail}
                    teamlinkedin = "https://in.linkedin.com/in/yash-ghuge-13092222b"
                    teammail= "mailto: yash.ghuge@mitaoe.ac.in?Subject=Related to koshish.com - WT Project [TY AY 2023]"
                />
            </div>

            <div className="row mt-lg-5 d-flex align-items-center justify-content-around">
                <h1 className="heading-text p-text">Our Guide at <img src={KoshishLogo} width="180" className="logo" style={{width: "13rem", marginTop: '-0.5rem', marginLeft: '0rem'}} /></h1>

                <div style={{marginTop: "2rem"}}>
                    <h4 style={{fontSize: "1.2rem", lineHeight: "26px"}}>We extend our heartfelt gratitude to our esteemed guide/course instructor, <strong>Mr. Krunal B. Pawar</strong>, for their unwavering support and guidance throughout our project journey.
                    <br />
                    This project was made possible through the course <strong>SDL - Web Technology</strong> offered by <strong>Computer Department</strong>.
                    </h4>
                </div>

                <Guide 
                    source= {Sir}
                    name= "Mr. Krunal B. Pawar"
                    prn= "202101040048"
                    roll= "21"
                    sociallogolinkedin = {LinkedIn}
                    sociallogogmail = {Gmail}
                />

            </div>

            </div>
        </div>
        </section>
    )
}