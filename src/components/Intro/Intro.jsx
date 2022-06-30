import React from 'react'
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>I am </span>
                    <span>Srijan Lal</span>
                    <span>
                        Full Stack Developer with entry level experience in web development
                        <br />
                        having good knowledge of Data Structures and Algorithms;
                    </span>
                </div>
                <Link spy={true} to='Contact' scroll={true}
                ><button className='button i-button'>Hire me</button></Link>
                <div className="i-icons">
                    <a href="#"> <img src={Github} alt="Github" /></a>
                    <a href="#"><img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="#"><img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>

            {/* -----------------Right-Side-Of-Intro-------------------- */}

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt="" />
                < motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: "2%", left: "55%" }}
                    className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1="WEB" txt2="DEVELOPER" />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "17.8rem" }}
                    whileInView={{ left: "0.9rem" }}
                    transition={transition}
                    className='floating-div'
                    style={{ left: "9rem", top: "17.8rem" }}>
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </motion.div>
                {/* --------- blur divs ------------- */}
                <div className="blur" style={{ background: 'rgb( 238 210 255)' }}>
                    <div className="blur"
                        style={{
                            background: "#c1f5ff",
                            top: "17rem",
                            width: "21rem",
                            heigth: "11rem",
                            left: "-9rem"
                        }}></div>
                </div>

            </div>
        </div>
    )
}

export default Intro