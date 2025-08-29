import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProfileImage from './ProfileImage';
import Buttons from './Buttons';
import '../Styles/NavBar.css'

function TypewriterText({ lines, typingSpeed = 150, pauseDuration = 2000 }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = lines[currentLine];

    if (!isDeleting && displayedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, lines, currentLine, typingSpeed, pauseDuration]);

  return <div className="typewriter">{displayedText}&nbsp;</div>;
}

function NavBar(props) {

  const hideMenu = () => {
    if (props.toggleMenu) {
      props.toggleMenu();
    }
  };

  const lines = [
    'Full Stack Develope!',
    'Open Source Enthusiast!',
    'Tech Blogger!',
    'UI/UX Designer!',
    'Lifelong Learner!',
    'Problem Solver!'
  ];

  return (
    <div className='nav'>
      <div className='menu-close' onClick={hideMenu}>
        <Buttons text={<div className='menu-close-icon-mob'></div>} width='7vw' height='7vw' />
      </div>
      <ProfileImage />
      <div className="nav-name">
        <div className='f3 text-shadow'>Narvin Sachaniya</div>
        <TypewriterText lines={lines} typingSpeed={100} pauseDuration={2000} />
      </div>
      <div className='nav-options-cont'>
        <div className='div-option' onClick={hideMenu}>
          <Link to='/'>Home</Link>
        </div>
        <div className='div-option' onClick={hideMenu}>
          <Link to='/education'>Education</Link>
        </div>
        <div className='div-option' onClick={hideMenu}>
          <Link to='/skills'>TeachSkills</Link>
        </div>
        <div className='div-option' onClick={hideMenu}>
          <Link to='/certificates'>Certificates</Link>
        </div>
        <div className='div-option' onClick={hideMenu}>
          <Link to='/projects'>Projects</Link>
        </div>
        <div className='div-option' onClick={hideMenu}>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;