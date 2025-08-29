import React from 'react'
import ContactOptions from '../Component/ContactOptions'
import HomeDetails from '../Component/HomeDetails'
import ProfileImage from '../Component/ProfileImage'
import '../Styles/home.css'

function Home() {
    return (
        <div className='dp'>
            <div className='top-home-cont'>
                <div className='mob-profile'>
                    <ProfileImage />
                </div>
                <HomeDetails />
            </div>
            <div className='dfc'>    
            </div>
            <div className='bottom-home-cont'>
                <ContactOptions />
            </div>
        </div>
    )
}

export default Home;