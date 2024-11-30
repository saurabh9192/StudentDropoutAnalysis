
import React from 'react'

export default function AboutItem(props) {
    return(
        <div className='aboutus-item'>
            <h3 style={{fontSize: "1.15rem", fontWeight: "600"}}>Q. {props.q}</h3>
            <h3 style={{fontSize: "1.1rem", fontWeight: "400"}}>A. {props.a}</h3>
        </div>
    )
}

export function AboutContactItem(props) {
    return(
        <div className='aboutus-item'>
            <h3 style={{fontSize: "1.15rem", fontWeight: "600"}}>Q. {props.q}</h3>
            <div style={{ display: 'flex' }}>
            </div>
      
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                src={props.sociallogomail}
                alt="Mail"
                style={{ maxWidth: '100%', width: "3rem" }}
                />
                <p style={{ margin: "0", paddingLeft: "1rem" }}>koshish</p>
            </div>
      
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                src={props.sociallogoinstagram}
                alt="Instagram"
                style={{ maxWidth: '100%', width: "3rem" }}
                />
                <p style={{ margin: "0", paddingLeft: "1rem" }}>koshish</p>
            </div>
        </div>
    )
}