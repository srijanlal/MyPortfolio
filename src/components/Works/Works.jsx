import React from 'react'
import '../Works/Works.css'
import ReactJS from '../../img/React.png'
import HTML from '../../img/HTML.png'
import JAVA from '../../img/JAVA.png'
import CSS from '../../img/CSS.png'
import MySql from '../../img/mysql.png'
import {motion} from 'framer-motion'

const Works = () => {
  return (
    <div className="works">
         <div className="awesome">
                <span>Works for All these</span>
                <span>Technologies</span>
                <span>
                    5 ⭐ on Hackerrank in Java.
                    <br />
                    <br />
                    Good understanding of Javascript, React, Html, CSS and MySql.
                    <br />
                    Nowadays I am learning Node Js and Express for my MERN project. 
                    <br />
                </span>
                <button className='button s-button'>Hire me</button>
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>

            {/* ----------------Right-Side------------ */}
            <div className="w-right">
                <motion.div
                    initial={{rotate:45}}
                    whileInView={{rotate:0}}
                    viewport={{margin:'-40px'}}
                    transition={{duration: 3.5, type:'spring'}}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={ReactJS} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={MySql} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={JAVA} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={CSS} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={HTML} alt="" />
                    </div>
                </motion.div>

                {/* --------------background-circles------------ */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
    </div>
  )
}

export default Works