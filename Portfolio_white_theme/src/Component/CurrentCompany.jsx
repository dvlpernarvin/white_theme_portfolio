import React from 'react'
import { currentCompanyName, currentRole } from '../Shared/Constant'

function CurrentCompany() {
  return (
    <div className='frame f1' style={{ width: '100%', height: '10vh', marginTop: '5vh', padding:'10px' }}>
      Current Company: {currentCompanyName}<br />
      Designation: {currentRole} <br />
      Duration : Febuaray 2023 to Present
    </div>
  )
}

export default CurrentCompany;