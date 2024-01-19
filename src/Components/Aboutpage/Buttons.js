
import React from 'react'
import data from './Data'

function Buttons({menuItems ,filterItems, setItems}) {
  return (
    <>
    <div class="buttonBox" style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
      {
        menuItems.map(d => (
          <button type="button" class="btn btn-primary mx-2 my-2" style={{boxShadow:'0px 4px 12px 0px rgba(0, 0, 0, 0.25)', textAlign: 'center',}}
          onClick={()=>filterItems(d)}
          >
            {d}
          </button>
        ))
      }
      <button type="button" class="btn btn-primary mx-2 my-2" style={{ boxShadow:'0px 4px 12px 0px rgba(0, 0, 0, 0.25)',textAlign: 'center',}}
      onClick={()=>setItems(data)}
      >
        All
      </button>
    </div>

  </>
  )
}

export default Buttons