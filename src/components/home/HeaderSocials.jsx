import React from 'react'
import "./home.css"
const HeaderSocials = () => {
  return (
    <div className="home__socials">

        <a href="https://www.linkedin.com/in/abhinav-kumar-singh-27894115a/"   target="_blank" rel="noreferrer" className="home__social-link">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="https://github.com/Abhinav-K-Singh"  target="_blank" rel="noreferrer" className="home__social-link" >
          <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.instagram.com/its_.abhi_.arts/"  target="_blank" rel="noreferrer" className="home__social-link" >
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://twitter.com/Dphoton712"  target="_blank" rel="noreferrer" className="home__social-link" >
          <i class="fa-brands fa-x-twitter"></i>
        </a>

        <a href="https://leetcode.com/abhinav712/" target="_blank" rel="noreferrer" className="home__social-link" >
          <i class="fa-sharp fa-solid fa-code"></i>
        </a>
    </div>
  )
}

export default HeaderSocials
