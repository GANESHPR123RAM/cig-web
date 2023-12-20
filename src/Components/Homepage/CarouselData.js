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
import bg from '../Images/bgcomp.png'

function CarouselData() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <img src={bg} className='caraouselbg' alt='bg' />
            <div className="box1">
                <h1 className='text-center my-3' style={{ color: 'beige' }}>Featured Works</h1>
                <Slider {...settings}>
                    {
                        data.map((d) => (
                            <div className="cardCarousel">
                                <div className="imgcarousel">
                                    <img src={d.image} className='imgbox' alt='img1' />
                                </div>
                                <div className="containtcarousel">
                                    <p style={{ color: 'red' }}>{d.heading}</p>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                    }
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



