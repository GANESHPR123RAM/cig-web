import React from 'react'
import AmanVishwakarma from '../Images/Aman Vishwakarma.png'
import OmprakashKuldeep from '../Images/Omprakash Kuldeep.png'
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
                                    <img src={S.Img} />
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
        Name: "Aman Vishwakarma",
        position: "Chairperson",
        Img: AmanVishwakarma,
    },
    {
        Name: "Omprakash Kuldeep",
        position: "Vice-Chairperson",
        Img: OmprakashKuldeep,
    }
]

export default Student