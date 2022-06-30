import React from 'react'
import '../Testimonials/Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {

    const clients = [
        {
            img: profilePic1,
            review: "Srijan Lal is a web developer and problem solving enthusiast. He has also a youtube channel named as SrijanIsLive. "
        },
        {
            img: profilePic2,
            review: "His CSS works are really amazing and his knowledge of node modules are also well"
        },
        {
            img: profilePic3,
            review: "He has good sense of colors, he use to decorate his websites and applications with such a wonderful color combination. Really Amazing !!!"
        },
        {
            img: profilePic4,
            review: "Srijan has created a Instragram page for that he also use to click photographs, and his phtography skills are really great."
        }
    ]


    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>From me...</span>

                {/* ------blurs-------- */}
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/* ------slider------ */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Testimonials