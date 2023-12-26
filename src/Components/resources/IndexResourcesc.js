import React from 'react'
import Resourcescdep from './Resourcescdep'
import ClubCarousel from './ClubCarousel'

function IndexResourcesc() {
  return (<>
    <div className="container-fluid box ">
      <div className="row">
        <h2 className='text-center'><strong>Department</strong></h2>
        <div className="Cardbox">
          <Resourcescdep />
        </div>
      </div>
    </div>

    <ClubCarousel />
  </>
  )
}

export default IndexResourcesc