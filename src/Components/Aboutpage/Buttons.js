
import React from 'react'
import data from './Data'

function Buttons({menuItems ,filterItems, setItems}) {
  return (
    <>
    <div class="d-flex justify-content-center mb-2">
      {
        menuItems.map(d => (
          <button type="button" class="btn btn-outline-primary text-black p-1 px-2 mx-5 btn fw-bold"
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