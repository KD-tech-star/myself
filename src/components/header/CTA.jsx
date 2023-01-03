import React from 'react'
import { Link } from 'react-router-dom'
import CV from "../../assets/cv.pdf"
function CTA() {
    return (
        <div>
            <div className="cta">
                <Link to={CV} download className='btn'>Download CV</Link>
                <Link to="/contact" className='btn btn-primary'> Let's Talk</Link>
            </div>
        </div>
    )
}

export default CTA
