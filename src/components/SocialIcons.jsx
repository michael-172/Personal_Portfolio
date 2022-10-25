import React from 'react';
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

const SocialIcons = () => {
    return (
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/michael-micheal-134685163/"><img src={navIcon1} alt="linkedin_icon"/></a>
            <a href="https://www.facebook.com/michael.mecheal.1/"><img src={navIcon2} alt="facebook_icon"/></a>
            <a href="https://github.com/michael-172" className='githubLink'><img src={navIcon3} alt="github_icon" className='github'/></a>
        </div>
    )
}

export default SocialIcons