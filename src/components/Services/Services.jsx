import React from 'react'
import '../Services/Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { motion } from 'framer-motion'

const Services = () => {

    const transition = { duration: 1, type: 'spring' }

    return (
        <div className="services" id='Services'>

            {/* --------left-side--------- */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                    <br />
                    quo quidem commodi eum ipsam nam!</span>
                <br />
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>

            {/* -----------right-side---------- */}
            <div className="cards" >
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Adobe Photoshop , Wondershare FilmoraGo and Canva"}
                    />
                </motion.div>
                {/* second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    />
                </motion.div>
                {/* 3rd */}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Humble}
                        heading={"Java/DSA"}
                        detail={
                            "Solves problem on Hackerrank, Leetcode, GGF using Java"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Services