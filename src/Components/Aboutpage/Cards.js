import React from 'react'
import './Card.css'

function Card({ item }) {
  return (
    <>
      <div className="cardbox">
        <div className="row">
          {
            item.map((d) => (
            <article className="profileC my-3">
            <div className="profile-imageC">
                <img src={d.urlImg} />
            </div>
            <h2 className="profile-usernameC">{d.title}</h2>
        </article>
            ))
          }
        </div>

      </div>

    </>
  )
}

export default Card









// import React from 'react'
// import './Card.css'

// function Card({ item }) {
//   return (
//     <>
//       <div className="cardbox">
//         <div className="row">
//           {
//             item.map((d) => (<>
//               <div className="cardContainer">
//                 <div className="cardImg">
//                   <img className="imgdep" style={{ width: "100%" }} src={d.urlImg} alt="Card" />
//                 </div>
//                 <div className="cardContaint">
//                   <h5 className="cardTitle"><strong>{d.title}</strong></h5>
//                 </div>
//               </div>
//             </>
//             ))
//           }
//         </div>

//       </div>

//     </>
//   )
// }

// export default Card