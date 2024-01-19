import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './mobileview.css'
import sds from "../Images/ClubImg/sds.png";
import infosec from "../Images/ClubImg/Infosec.png";
import dsg from "../Images/ClubImg/Dsg.jpg";
import mdg from "../Images/ClubImg/Mdg.png";
import img from "../Images/ClubImg/Img.jpeg";
import iitrms from "../Images/ClubImg/Iitr motorsports.png";
import fin from "../Images/ClubImg/Finance club.png";
import robo from "../Images/ClubImg/Robocon.png";
import aries from "../Images/ClubImg/Aries.png";
import pag from "../Images/ClubImg/Pag.jpg";
import mars from "../Images/ClubImg/Mars.png";
import ds from "../Images/ClubImg/ds.png";
import ecell from "../Images/ClubImg/ecell.jpg";
import igem from "../Images/ClubImg/igem.jpg";
import qcg from "../Images/ClubImg/qcg.png";
import enactus from "../Images/ClubImg/enactus.png";
import arp from "../Images/ClubImg/arp.png";
import knox from "../Images/ClubImg/knox.png";
import vlg from "../Images/ClubImg/vlg.jpg";
import acm from "../Images/ClubImg/acm.png";
import share from "../Images/ClubImg/share.png";
import blockchain from "../Images/ClubImg/blockchain.jpg";

function mobileview() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="groupsDatam">
            <h1 className='text-center mb-5'>Technical Groups</h1>
            <div className="cardBox">
                <Slider {...settings}>
                    {

                        techData.map((T) => (
                            <div className="cardGm invisible-scrollbar" >
                                <img src={T.image} alt="" />
                                <h6>{T.name}</h6>
                                <p className="invisible-scrollbar text-center">{T.description}</p>
                            </div>
                        ))


                    }
                </Slider>
            </div>
        </div>
    )
}

const techData = [
    {
        name: "SDSLABS",
        image: sds,
        description:
            "Members of this group are in charge of winning arbitrary hackathons, organizing the most fun and educational workshops and lectures for the IITR junta, developing awesome applications like Quizio, Rootex and Cerebro.",
    },
    {
        name: "INFOSEC-IITR",
        image: infosec,
        description:
            "This group makes IITR extraordinarily proud as it has been consistently ranked among the top 3 CTF teams in India, InfoSecIITR is a group of information security enthusiasts. They regularly participate in competitive hacking competitions and regularly win too.",
    },
    {
        name: "DSG",
        image: dsg,
        description:
            "Data Science Group was launched with the aim of developing an interest for and making the campus junta aware of the different areas to explore in data science and machine learning. It has done a pretty good job attracting students to these booming fields.",
    },
    {
        name: "MDG",
        image: mdg,
        description:
            "Mobile Development group is a student group of developers and designers focused on creating useful mobile applications for the IITR junta and beyond.",
    },
    {
        name: "IMG",
        image: img,
        description:
            "If you have been to the official site of IIT Roorkee, you are already impressed with their work. IMG(Information Management Group) is the place where you’d wanna be if you are into web development.",
    },
    {
        name: "IITRMS",
        image: iitrms,
        description:
            "Humans (read aliens) with brains where neuron-transmitted electrochemical signals are so mechanical that they manage to fabricate a Formula Style Race car in a span of 365 days (which may appear the same they made last year but still different somehow), grace this group.",
    },
    {
        name: "FINANCE CLUB",
        image: fin,
        description:
            "Founded in 2018, Finance Club aims to instill a strong finance culture on the campus. The club organizes several talks, workshops, competitions and spreads knowledge through blogs and social media posts. The latest endeavor of the club is setting up an Investment Section in the club. Members of the club study and do projects on a plethora of financial topics.",
    },
    {
        name: "TEAM ROBOCON",
        image: robo,
        description:
            "Robocon is the biggest international robotics competition in the Asia- Pacific region. Participation in it requires inputs from all fields of robotics with heavy emphasis on concept design, robot programming, etc. Rest be assured, it’s as cool as what they show in the movies.",
    },
    {
        name: "ARIES",
        image: aries,
        description:
            "With projects ranging from AR models and quadcopters to self-driving cars and an assortment of bots, ArIES(Artificial Intelligence and Electronics Society) is the premier electronics group on campus with a fondness for artificial intelligence.",
    },
    {
        name: "PAG",
        image: pag,
        description:
            "Standing true to its name, PAG(Programming And Algorithms Group) takes care of the programming and algorithmic quotient of the IITR junta. Said to be tough to get into, but if you have a knack for solving logical and mathematical problems, you belong here.",
    },
    {
        name: "MARS",
        image: mars,
        description:
            "MaRS (Models and Robotics Section) is a group for enthusiasts interested in robotics. It provides a platform where one can pursue his/her interest in a variety of projects which can solve existing problems with real life application.",
    },
    {
        name: "Design Studio",
        image: ds,
        description:
            "Design Studio is a group of budding researchers, designers, engineers, and architects working together to combine art, science, and technology to create new products. Their range of activities spans planning through production. Our focus is on Design and Innovation Strategies, Digital-Physical Design, Technology-based Innovation, UI/UX, Game Development, and Product Brand Language.",
    },
    {
        name: "E-cell",
        image: ecell,
        description:
            "It has been established with the objective of creating, fostering and promoting the spirit of entrepreneurship among the youth of the nation. E-Cell has been one of the epitome groups in the campus in terms of its culture. Its precept is to support and grow so as to have fun and learn, for the same we have intra-group hangout sessions, Founder Interactions, Team discussions, webinars and Annual trips.",
    },
    {
        name: "iGEM IIT Roorkee",
        image: igem,
        description:
            "iGEM is a group of passionate biologists who combine biotech and technology and find promising solutions for the problem statement released every year under the iGEM competition by Stanford University for Colleges all around the world. Previously they have also achieved 1st position in the competition.",
    },
    {
        name: "Q.C.G.",
        image: qcg,
        description:
            "Quantum Computing Group is a group of tech enthusiasts who promote the quantum computing culture in IIT Roorkee by holding various group discussions, workshops and participating in hackathons.",
    },
    {
        name: "Enactus",
        image: enactus,
        description:
            "Enactus IIT Roorkee aims to create a culture of social entrepreneurship in IIT Roorkee to try and make the world a better place through technology by working on various projects for the social betterment of the world.",
    },
    {
        name: "A.R.P.",
        image: arp,
        description:
            "Academic Reinforcement Program is a group with a vision to develop the knowledge base of the student, by allowing them to learn and teach. It not only assists students academically but also provides mentors to guide them with important resources and materials.",
    },
    {
        name: "Team KNOX",
        image: knox,
        description:
            "It is the official off-road racing team of IIT Roorkee which participates in various competitions.",
    },
    {
        name: "V.L.G.",
        image: vlg,
        description:
            "The Vision and Language Group, ACM IIT Roorkee Chapter, is a student-run group that aims to foster an on-campus research-centric Deep Learning community.",
    },
    {
        name: "A.C.M.",
        image: acm,
        description:
            "The IIT Roorkee ACM Student Chapter is a group that is concerned with fostering general and scientific interests in students in the area of Computer Science. The chapter organizes a plethora of events that cover most of the fields of the computer science domain. These include open discussions, hackathons, guest lectures, workshops, coding contests, etc.",
    },
    {
        name: "ShARE IITR",
        image: share,
        description:
            "The IIT Roorkee chapter of ShARE offers a platform for young engineers to gain international exposure on social, business, and economic issues. It strives to better understand the complexities of local socio-economic issues through presentations, conferences, and projects. ShARE’s long term mission is to generate, share and use knowledge to contribute to regions’ human, social and economic development.",
    },
    {
        name: "Blockchain Society",
        image: blockchain,
        description:
            "Called as BlocSoc, it is an Open Community to increase interaction among Blockchain enthusiasts and bitcoin-dev enthusiasts and spread the word about 'Web 3.0' among the IITR Junta.",
    },
];
export default mobileview





