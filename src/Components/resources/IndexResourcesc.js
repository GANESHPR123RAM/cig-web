import React from 'react'
import Resourcescdep from './Resourcescdep'
import ClubCarousel from './ClubCarousel'
import Mobileview from './mobileview'

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
    {/* <Mobileview/> */}
  </>
  )
}

export default IndexResourcesc