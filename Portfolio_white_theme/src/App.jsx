import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Styles/mobile.css'
import './App.css'
import MobNavBar from './Component/MobNavBar'
import NavBar from './Component/NavBar'
// import CustomCursor from './Component/CustomCursor'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Education from './Pages/Education'
// import Experience from './Pages/Experience'
import Skills from './Pages/TeachSkills'
import Certificates from './Pages/Certificates'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import ProjectDetail from './Pages/ProjectDetail'
import Loader from './Loader/LandingPage'

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='app-wrapper'>
            {/* <CustomCursor /> */}
            {loading && <Loader />}
            <BrowserRouter>
                <div className='pc-navbaar'>
                    <NavBar />
                </div>
                <div className='mob-navbaar'>
                    <MobNavBar />
                </div>
                <div className='home-right'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:projectId' element={<ProjectDetail />} />
                    {/* <Route path='/experience' element={<Experience />} /> */}
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/certificates' element={<Certificates/>}/>
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/education' element={<Education />} />
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;