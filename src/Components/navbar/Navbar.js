import Logo from "./PERRY-LOGO.png"
import "./Navbar.css"
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const navLinkEls = document.querySelectorAll('.nav__link');

    navLinkEls.forEach(navLinkEl => {
      navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
      })
    })

    return (
        <div className="Navbar">
            <nav className={isSticky ? 'sticky' : ''}>      
                <nav className="">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                        <a href="#portfolio" className="">UDOHGEORGE.</a>
                    </div>
                
                    <div className={isOpen ? 'navbar activenav' : 'navbar'}>
                        <ul>
                            <li><a href="#home" className="nav__link ">Home</a></li>
                            <li><a href="#services" className="nav__link ">Service</a></li>
                            <li><a href="#gallery" className="nav__link ">Portfolio</a></li>
                            <li><a href="#contact" className="nav__link ">Contact</a></li>
                        </ul>
                    </div>

                    <div className="menubar"
                      onClick={toggleMenu}
                    >
                      {isOpen ? <IoClose/> :
                      <TiThMenu/>}
                    </div>
                </nav>
            </nav>
        </div>
    )
}

export default Navbar;