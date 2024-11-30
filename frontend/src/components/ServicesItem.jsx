
import React from 'react'

export default function ServicesItem(props) {
    return(
        <div className='services-item'>
            <h3 style={{fontSize: "1.15rem", fontWeight: "600"}}>{props.q}</h3>
            <h3 style={{fontSize: "1.1rem", fontWeight: "400"}}>{props.a}</h3>
        </div>
    )
}