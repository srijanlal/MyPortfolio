import React from 'react'
import '../Experience/Experience.css'

const Experience = () => {
  return (
    <div className="experience" id='Experience'>
        {/* -------first-achievment-------- */}
        <div className="achievment">
            <div className="circle">8+</div>
            <span>years</span>
            <span>Experience</span>
        </div>

        {/* ---------second-achievment------------- */}
        <div className="achievment">
            <div className="circle">20+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>

        {/* -----------third-achievment------------ */}
        <div className="achievment">
            <div className="circle">5+</div>
            <span>companies</span>
            <span>work</span>
        </div>
    </div>
  )
}

export default Experience