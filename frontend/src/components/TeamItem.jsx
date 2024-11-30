
import React from 'react'

export default function TeamItemMohit(props) {
    return(
        <div className="col-lg-3 col-md-12 text-center mt-3">
        <div className="card contact-cards" style={{ width: "100%",  backgroundColor: "#8CEC8426", borderRadius: "10px"}}>
            <div className="card-body">
            <img
                className="card-img-top mb-5 project-img"
                src={props.source}
                alt={props.name}
                height={200}
                style={{
                maxWidth: "80%",
                minHeight: "100%",
                height: "auto",
                borderRadius: "100%",
                border: "1px solid #054169CC"
                }}
            />
            <h4
                className="card-title project-text text-center"
                style={{ fontSize: "1.8rem", marginBottom: "1.5rem", textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
                {props.name}
            </h4>


            <p className="card-text para-2 text-start" style={{letterSpacing: "0.4px"}}>
                PRN - {props.prn}
                <br />
                Div - A
                <br />
                Roll no. - {props.roll}
                <br />
                Class - Third Year
                <br />
                Branch - Computer
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "2rem" }}>

            <a href={props.teamlinkedin} style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}} target="_blank" rel="noreferrer">
                <img
                src={props.sociallogolinkedin}
                alt="LinkedIn"
                style={{ maxWidth: '100%', width: "3rem" }}
                className='icon'
                />
            </a>

            <a href={props.teammail} style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}} target="_blank" rel="noreferrer">
                <img
                src={props.sociallogogmail}
                alt="Gmail"
                style={{ maxWidth: '100%', width: "3rem" }}
                className='icon'
                />
            </a>

            <a href={props.teamwebsite} style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}} target="_blank" rel="noreferrer">
                <img
                src={props.sociallogowebsite}
                alt="Gmail"
                style={{ maxWidth: '100%', width: "3rem" }}
                className='icon'
                />
            </a>

            </div>

            </div>
        </div>
        </div>
    )
}

export function TeamItem(props) {
    return(
        <div className="col-lg-3 col-md-12 text-center mt-3">
        <div className="card contact-cards" style={{ width: "100%",  backgroundColor: "#8CEC8426", borderRadius: "10px"}}>
            <div className="card-body">
            <img
                className="card-img-top mb-5 project-img"
                src={props.source}
                alt={props.name}
                height={200}
                style={{
                maxWidth: "80%",
                minHeight: "100%",
                height: "auto",
                borderRadius: "100%",
                border: "1px solid #054169CC"
                }}
            />
            <h4
                className="card-title project-text text-center"
                style={{ fontSize: "1.8rem", marginBottom: "1.5rem", textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
                {props.name}
            </h4>


            <p className="card-text para-2 text-start" style={{letterSpacing: "0.4px"}}>
                PRN - {props.prn}
                <br />
                Div - A
                <br />
                Roll no. - {props.roll}
                <br />
                Class - Third Year
                <br />
                Branch - Computer
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "2rem" }}>

            <a href={props.teamlinkedin} style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}} target="_blank" rel="noreferrer">
                <img
                src={props.sociallogolinkedin}
                alt="LinkedIn"
                style={{ maxWidth: '100%', width: "3rem" }}
                className='icon'
                />
            </a>

            <a href={props.teammail} style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}} target="_blank" rel="noreferrer">
                <img
                src={props.sociallogogmail}
                alt="Gmail"
                style={{ maxWidth: '100%', width: "3rem" }}
                className='icon'
                />
            </a>

            </div>

            </div>
        </div>
        </div>
    )
}

export function Guide(props) {
    return(
        <div className="col-lg-4 col-md-12 text-center mt-3">
        <div className="card contact-cards" style={{ width: "100%", backgroundColor: "#8CEC8426", borderRadius: "10px"}}>
            <div className="card-body guide-img">
            <img
                className="card-img-top mb-5 guide-img"
                src={props.source}
                alt={props.name}
                height={200}
                style={{
                maxWidth: "80%",
                minHeight: "100%",
                height: "auto",
                borderRadius: "100%",
                border: "1px solid #054169CC",
                filter: "saturate(1.1)"
                }}
            />
            <h4
                className="card-title project-text text-center"
                style={{ fontSize: "1.8rem", marginBottom: "1.5rem", textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
                {props.name}
            </h4>


            <p className="card-text para-2 text-start" style={{letterSpacing: "0.4px"}}>
                Designation - Assistant Professor
                <br />
                Qualification - M.Tech. (CSE)
                <br />
                Email - <a href="mailto: krunal.pawar@mitaoe.ac.in?Subject=Related to koshish.com - WT Project [TY AY 2023]" target='_main' style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}}> krunal.pawar@mitaoe.ac.in</a>
                <br />
                Experience - 15 Years (Teaching)
                <br />
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "2rem" }}>

            <a href="https://in.linkedin.com/in/krunal-pawar-572593261" style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}} target="_blank" rel="noreferrer">
                <img
                src={props.sociallogolinkedin}
                alt="LinkedIn"
                style={{ maxWidth: '100%', width: "3rem" }}
                className='icon'
                />
            </a>

            <a href="mailto: krunal.pawar@mitaoe.ac.in?Subject=Related to koshish.com - WT Project [TY AY 2023]" style={{textDecoration: "underline", color: "#054169", textUnderlineOffset: "5px"}} target="_blank" rel="noreferrer">
                <img
                src={props.sociallogogmail}
                alt="Gmail"
                style={{ maxWidth: '100%', width: "3rem" }}
                className='icon'
                />
            </a>

            </div>
            </div>
        </div>
        </div>
    )
}