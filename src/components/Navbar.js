import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    // false --> true --> false, etc. for clicks on menu bar
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to ="/" className="navbar-logo">
                    MM <i className='fab fa-typo3' />
                </Link>
                {/* Menu bar */}
                <div className='menu-icon' onClick={handleClick}>
                    {/* Unclick = bars, click = ribbon */}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/Messages' className='nav-links' onClick={closeMobileMenu}>
                            Messages
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Photos' className='nav-links' onClick={closeMobileMenu}>
                            Photos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Calendar' className='nav-links' onClick={closeMobileMenu}>
                            Calendar
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ChitChat' className='nav-links' onClick={closeMobileMenu}>
                            ChitChat
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar