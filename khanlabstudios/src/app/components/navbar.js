'use client';

import React from 'react';
import Link from 'next/link';
import { TransitionLink } from './transitionlink.js';
import styles from '@/globals.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useState } from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);
    const sidebarAnimation = (action) => {
        const sidebar = document.getElementById('collapsibleNavbar');
        const toggleButton = document.getElementById('navbarToggler');
        if (sidebar) {
            if (action === 'open') {
                sidebar.style.display = 'block';
                sidebar.style.transition = 'transform 0.3s ease-in-out';
                sidebar.style.transform = 'translateX(0)';
                toggleButton.style.transform = 'translateX(-' + sidebar.offsetWidth + 'px)';
                toggleButton.style.transition = 'transform 0.3s ease-in-out';
            } else if (action === 'close') {
                sidebar.style.transition = 'transform 0.3s ease-in-out';
                sidebar.style.transform = 'translateX(100%)';
                toggleButton.style.transform = 'translateX(0)';
                toggleButton.style.transition = 'transform 0.3s ease-in-out';
            }
        }
    };

    React.useEffect(() => {
        if (isOpen) {
            sidebarAnimation('open');
        } else {
            sidebarAnimation('close');
        }
    }, [isOpen]);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
                const collapsibleNavbar = document.getElementById('collapsibleNavbar');
                if (collapsibleNavbar) {
                    collapsibleNavbar.classList.remove('show');
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const handleDropdownChange = (event) => {
    //     const selectedValue = event.target.value;
    //     if (selectedValue) {
    //         window.location.href = `/departments/${selectedValue}`;
    //     }
    //     selectedValue.selected = true;
    // };
    const [selectedValue, setSelectedValue] = useState("Departments");

    return (
        <div className="fixed w-full h-24 shadow bg-white z-10">
            <nav className={`navbar navbar-expand-lg navbar-light fixed w-full h-24 shadow z-10 ${styles.navbar}`}>
                <div className={styles.logoContainer}>
                    <TransitionLink href="/" className={styles.navSideLink}>
                        <Image 
                            src="/logo/logo.png" 
                            alt="logo" 
                            width={100}
                            height={100}
                            className={styles.logoImage} 
                        />
                    <h3 className={styles.logoText}>Red String Studios</h3>
                    </TransitionLink>
                </div>
                <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="visibleNavbar">
                    <TransitionLink href="/" className={styles.navLink}>Home</TransitionLink>
                    <TransitionLink href="/team" className={styles.navLink}>About Us</TransitionLink>
                    
                    <div className="dropdown">
                        <select
                            defaultValue="Departments"
                            className={`${styles.navDrop}`} 
                            id="departmentsDropdown" 
                            onChange={(event) => {
                                const selectedValue = event.target.value;
                                if (typeof window !== 'undefined' && selectedValue) {
                                    window.location.href = `/departments/${selectedValue}`;
                                }
                                event.target.value = selectedValue; // Reset the dropdown to default after selection
                            }}
                        >
                            <option disabled>Departments</option>
                            <option value="story">Story</option>
                            <option value="art">Art</option>
                            <option value="marcomm">MarComm</option>
                            <option value="website">Website</option>
                        </select>
                    </div>
                    <TransitionLink href="/stories" className={styles.navLink}>Stories</TransitionLink>
                    <TransitionLink href="/obscurity" className={styles.navLink}>Upload Story</TransitionLink>
                </div>
                <button 
                    className={`navbar-toggler ${styles.toggleButton}`} 
                    onClick={toggleNavbar}
                    id="navbarToggler"
                    style={{ backgroundColor: 'white' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
                <div className={styles.navSidebar} id="collapsibleNavbar">
                    <ul className={styles.navList}>
                        <TransitionLink href="/" className={styles.navSideLink}>
                            <li className={styles.navLinkSide} onClick={toggleNavbar}>Home</li>
                        </TransitionLink>
                        <TransitionLink href="/team" className={styles.navSideLink}>
                            <li className={styles.navLinkSide} onClick={toggleNavbar}>About Us</li>
                        </TransitionLink>
                        <TransitionLink href="/departments" className={styles.navSideLink}>
                            <li className={styles.navLinkSide} onClick={toggleNavbar}>Departments</li>
                        </TransitionLink>
                        <TransitionLink href="/stories" className={styles.navSideLink}>
                            <li className={styles.navLinkSide} onClick={toggleNavbar}>Stories</li>
                        </TransitionLink>
                        <TransitionLink href="/obscurity" className={styles.navSideLink}>
                            <li className={styles.navLinkSide} onClick={toggleNavbar}>Upload Story</li>
                        </TransitionLink>
                    </ul>
                </div>
        </div>
    );
};
