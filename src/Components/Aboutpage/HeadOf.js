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
            <div className="HeadOf-Card-Box">
                <div className="HeadOf-Box-row">
                    <div className="row my-2 mx-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {StudentData.map((S) => (
                            <div class="HeadOf-card-Item">
                                <img class="HeadOf-card-img" src={S.Img} alt="Card image cap" />
                                <div class="HeadOf-card-body">
                                    <h5 class="card-title">{S.Name}</h5>
                                    <small className="HeadOf-profile-user-position">{S.position}</small>
                                </div>
                            </div>
                        ))
                        }
                    </div>
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