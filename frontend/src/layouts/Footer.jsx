
import React from 'react'

export default function Footer() {
    return(
        <footer id="footer">
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <a href="/" className="text-decoration-none">
            <small
                className="para-2"
                style={{ letterSpacing: "0.5px", wordSpacing: "0.2rem" }}
            >
                © 2023 Koshish
            </small>
            </a>
        </div>
        </footer>
    )
}
