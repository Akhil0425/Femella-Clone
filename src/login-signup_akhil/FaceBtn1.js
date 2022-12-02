import React from 'react'
import FacebookLogo from "./images/facebook.png"
import './FaceBtn.css'

const FaceBtn1 = () => {
    return (
        <div className='container'>
            <div className='f-btn'>
                <div className='content-wrapper'>
                    <div className='logo-wrapper'>
                        <img src={FacebookLogo} />
                    </div>
                    <span className='text-container'>
                        <span >Facebook Signup</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default FaceBtn1