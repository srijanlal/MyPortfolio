import React from 'react'
import '../Portfolio/Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import ShreeAahar from '../../img/shree-aahar.png'
import BoxShadowGenerator from '../../img/box-shadow-generator.png'
import PortfolioImg from '../../img/portfolio.png'

const Portfolio = () => {
    return (
        <div className="portfolio" id='Portfolio'>

            {/* ------heading-------- */}
            <span>Recent Projects</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                <img src={PortfolioImg} alt="Portfolio-Image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ShreeAahar} alt="ShreeAahar" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={BoxShadowGenerator} alt="Box-Shadow-Generator" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={ShreeAahar} alt="Ecommerce" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio