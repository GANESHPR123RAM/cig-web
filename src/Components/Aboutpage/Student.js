import React from 'react'
import Hardik from '../Images/teams/3y/Hardik.jpg'
import Chinmay from '../Images/teams/3y/Chinmay.jpg'
import './Student.css'

function Student() {
    return (
        <>
            <div className="cardbox">
                <div className="row">
                    {
                        StudentData.map((S) => (
                            <article className="profileB my-3">
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