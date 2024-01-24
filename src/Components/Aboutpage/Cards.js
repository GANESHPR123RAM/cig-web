import React, { useState } from 'react'

import './Card.css'
import Buttons from './Buttons'
import data from './Data'

function Card() {

    const [item, setItems] = useState(data)
    const menuItems = [...new Set(data.map((d) => d.category))]
    const filterItems = (cat) => {
        const newItems = data.filter((newval) => newval.category === cat)
        setItems(newItems)
    }
  return (
    <>
      <div className="Vartical-Card-Box">
        <h1>Meet Our Team</h1>
        <div className="Vertical-Box-row my-5">
          <div className="Vertical-BTN-Box my-5">
            <Buttons
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
            />
          </div>
          <div className="row my-2 mx-3"style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            {
              item.map((d) => (
                <div class="Vertical-card-Item" >
                  <img class="Vertical-card-img" src={d.urlImg} alt="Cardcap" />
                  <div class="Vertical-card-body">
                    <h5 class="card-title">{d.title}</h5>
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

export default Card





