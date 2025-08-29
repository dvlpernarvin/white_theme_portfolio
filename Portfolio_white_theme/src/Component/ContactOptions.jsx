import React from 'react'
import { Link } from 'react-router-dom'
import { currentEmail, currentGithubUrl, currentLinkedinUrl, currentMobileNo } from '../Shared/Constant'
import Buttons from './Buttons'
import '../Styles/home.css'

function ContactOptions() {
    return (
        <div className="frame contact-frame">
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = `mailto:${currentEmail}`;
                    e.preventDefault();
                }}>
                <Buttons text={<div className='logos mail'></div>} width='2vw' height='7vh' />
            </Link>
            <a href={currentLinkedinUrl} target="_blank">
                <Buttons text={<div className='logos linkedin'></div>} width='2vw' height='7vh' />
            </a>
            <a href={`tel:${currentMobileNo}`}>
                <Buttons text={<div className='logos call'></div>} width='2vw' height='7vh' />
            </a>
            <a href={`https://wa.me/${currentMobileNo}`} target="_blank">
                <Buttons text={<div className='logos wts'></div>} width='2vw' height='7vh' />
            </a>
            <a href={currentGithubUrl} target="_blank">
                <Buttons text={<div className='logos github'></div>} width='2vw' height='7vh' />
            </a>
        </div>
    )
}

export default ContactOptions;