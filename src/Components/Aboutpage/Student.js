import React from 'react'
import Hardik from '../Images/teams/3y/Hardik.jpg'
import Chinmay from '../Images/teams/3y/Chinmay.jpg'
import './Student.css'

function Student() {
    return (
        <>

            <div className="Student-Card-Box">
                <h1>Student Body</h1>
                <div className="Student-Box-row my-5">
                    <div className="row  mx-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {StudentData.map((S) => (
                            <div class="Student-card-Item">
                                <img class="Student-card-img" src={S.Img} alt="Cardcap" />
                                <div class="Student-card-body">
                                    <h5 class="card-title">{S.Name}</h5>
                                    <small className="Student-profile-user-position">{S.position}</small>
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
        Name: "Hardik",
        position: "Chairperson",
        Img: Hardik,
    },
    {
        Name: "Chinmay Nagpal",
        position: "Vice-Chairperson",
        Img: Chinmay,
    }
]

export default Student