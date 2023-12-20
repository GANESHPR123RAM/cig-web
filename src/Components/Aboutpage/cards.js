import React from 'react'

function cards() {
  return (
    Data1.map((C) => (
    <div className="card container" style={{width: "18rem"}}>
      <img className="card-img-top" src={C.cardimg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{C.cardtitle}</h5>
        <p className="card-text">{C.carddescription}</p>
        <a href="#" className="btn btn-primary">Read-More</a>
      </div>
    </div>
    ))
  )
}
 const Data1=[
  {
    cardimg:"ganesh",
    cardtitle:"Ganesh prajapati",
    carddescription:"he's a cool boy"
  },
  {
    cardimg:"ganesh",
    cardtitle:"Ankit",
    carddescription:"he's a cool boy"
  },
  {
    cardimg:"Abhishek",
    cardtitle:"Abhishek",
    carddescription:"he's a cool boy"
  }
];

export default cards