import React from 'react'
import '../Homepage/CarouselData.css'
import hero from "../Images/hero.png";
import samsung from "../Images/Samsung.png";
import Ukum from "../Images/ukum.png";
import isro from "../Images/isro.png";
import cis from "../Images/cls.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CarouselData() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="TestimonialsHome">
            <div className="TestimonialsHomeBox">
                <div className="TestimonialsHomePlate">
                    <div className="TestimonialsHomeHeading1">
                        Featured Works
                    </div>
                </div>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="TestimonialSlider">
                            <div className="TestimonialSliderBox">
                                <div className="testimonialimg">
                                    <img src={d.image} className='testimonialimg1' alt='img1' />
                                </div>
                                <div className="testimonialname">
                                    {d.heading}
                                </div>
                                <div className="testimonialDecription">
                                    {d.text}
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
const data = [
    {
        heading: "INDUSTRIAL VISIT",

        image: hero,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    },
    {
        heading: "UKUM STARTUP EXPO",

        image: Ukum,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    },
    {
        heading: "CORPORATE LEADER SERIES",

        image: cis,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    },

    {
        heading: "SAMSUNG WORKSHOP",

        image: samsung,
        text: "Technology workshop on “Advanced Embedded Technology” presented by the eminent personalities, who are from the largest overseas R&D Centre of Samsung Electronics, Samsung Research Institute, Bangalore (SRI-B). This event is being conducted by the joint efforts of the CSE department and the CIG",
    },

    {
        heading: "WORKSHOP ON SPACE TECHNOLOGY",

        image: isro,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    }
];



export default CarouselData



