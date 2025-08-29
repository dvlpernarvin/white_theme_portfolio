import React, { useState } from 'react'
import Buttons from './Buttons'
import NavBar from './NavBar'
import '../Styles/MobNavBar.css'

function MobNavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const hideMenuItems = ()=>{
        setShowMenu(false);
    }
    return (
        <>
            {!showMenu && <div className='menu-mob' onClick={() => setShowMenu(true)}>
                <Buttons text={<div className='menu-icon-mob'></div>} width='7vw' height='7vw' />
            </div>}
            {showMenu && <NavBar toggleMenu={hideMenuItems}/>}
        </>
    )
}

export default MobNavBar;