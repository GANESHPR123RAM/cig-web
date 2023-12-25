import React from 'react'
import './Headof.css'
import Prachi2 from '../Images/teams/3y/Prachi2.jpg'
import Neeti from '../Images/teams/3y/Neeti.jpg'
import YasAwasthi from '../Images/teams/3y/Yas Awasthi.jpg'
import KumarPratiyush from '../Images/teams/3y/Kumar Pratiyush.jpg'
import SrishtiAnand from '../Images/teams/3y/Srishti Anand.jpg'
import AkankshaKushwaha from '../Images/teams/3y/Akanksha Kushwaha.jpg'

function HeadOf() {
  return (
    <>
    <div className="cardbox">
        <div className="row">
            {
                StudentData.map((S) => (
                    <article className="profileB my-3 mx-3">
                        <div className="profile-imageB">
                            <img src={S.Img} alt='' />
                        </div>
                        <h2 className="profile-usernameB">{S.Name}</h2>
                        <small className="profile-user-handleB">{S.position}</small>
                    </article>
                ))
            }
        </div>

    </div>

</>
  )
}
const StudentData = [
    {
        Name: "Prachi shing",
        position: "Head of Web devlopment",
        Img: Prachi2,
    },
    {
        Name: "Neeti",
        position: "Head of New Connections",
        Img: Neeti,
    },
    {
        Name: "Yas Awasthi",
        position: "Head of Content",
        Img: YasAwasthi,
    },
    {
        Name: "Kumar Pratiyush",
        position: "Head of Events",
        Img: KumarPratiyush,
    },
    {
        Name: "Srishti Anand",
        position: "Head of Media",
        Img: SrishtiAnand,
    },
    {
        Name: "Akanksha Kushwaha",
        position: "Senior Executive",
        Img: AkankshaKushwaha,
    }
]


export default HeadOf