import React from 'react'
import './Administrative.css'
import Director from '../Images/Director.png'
import Dean from '../Images/Dean.png'
import AssociateDean from '../Images/AssociateDean.png'

function Administrative() {
    return (
        <>
            <div className="Administrative-Card-Box">
                <h1>Administrative Body</h1>
                
                <div className="Administrative-Box-row my-5">
                    <div className="row  mx-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {AdministrativeData.map((A) => (
                            <div class="Administrative-card-Item mx-4 my-4">
                                <img class="Administrative-card-img" src={A.Img} alt="Cardcap" />
                                <div class="Administrative-card-body">
                                    <h5 class="card-title">{A.Name}</h5>
                                    <small className="Administrative-profile-user-position">{A.position}</small>
                                    <div className="Administrative-links">
                                        <div className="Administrative-mail">
                                            <i class="fa fa-envelope-o mx-1" aria-hidden="true"></i>
                                        {A.Email}
                                        </div>
                                        <div className="Administrative-phone">
                                            <i class="fa fa-phone mx-1" aria-hidden="true"></i>
                                            {A.phoneno}
                                        </div>
                                    </div>
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
const AdministrativeData = [
    {
        Name: "Prof. K.K Pant",
        position: "Director",
        Img: Director,
        Email: "kkpant[at]ch.iitr.ac.in",
        phoneno: "01332-285500"


    },
    {
        Name: "Prof.Akshay Dvivedi",
        position: "Dean Sponsored Research & Industrial Consultancy",
        Img: Dean,
        Email: "akshaydvivedi[at]me.iitr.ac.in",
        phoneno: "01332285428"
    },
    {
        Name: "Prof.Sai Ramudu Meka",
        position: "Associate Dean (Corporate Interaction)",
        Img: AssociateDean,
        Email: "s.r.meka[at]mt.iitr.ac.in",
        phoneno: "01332284860"
    },
]

export default Administrative