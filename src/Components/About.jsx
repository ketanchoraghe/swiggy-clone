import React from 'react'
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id="about">
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit id nisi laudantium magni! Animi quasi ducimus eligendi itaque expedita, repudiandae voluptatum deserunt debitis nam fugiat. Atque asperiores odio tempora.</p>
            <button>READ MORE</button>
        </div>

    </div>
  )
}

export default About