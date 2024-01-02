
import React from 'react'
import data from './Data'

function Buttons({menuItems ,filterItems, setItems}) {
  return (
    <>
    <div class="buttonBox" style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
      {
        menuItems.map(d => (
          <button type="button" class="btn btn-outline-primary text-black p-1 px-2 mx-2 my-2 btn fw-bold"
          onClick={()=>filterItems(d)}
          >
            {d}
          </button>
        ))
      }
      <button type="button" class="btn btn-outline-primary text-black p-1 px-2 mx-5 btn fw-bold"
      onClick={()=>setItems(data)}
      >
        All
      </button>
    </div>

  </>
  )
}

export default Buttons