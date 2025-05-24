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
        if (sidebar) {
            if (action === 'open') {
                sidebar.style.display = 'block';
                sidebar.style.transition = 'transform 0.3s ease-in-out';
                sidebar.style.transform = 'translateX(0)';
            } else if (action === 'close') {
                sidebar.style.transition = 'transform 0.3s ease-in-out';
                sidebar.style.transform = 'translateX(100%)';
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
    return (
        <div className="fixed w-full h-24 shadow bg-white z-10">
            <nav className={`navbar navbar-expand-lg navbar-light fixed w-full h-24 shadow bg-#fffbf7 z-10 ${styles.navbar}`}>
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
                    <TransitionLink href="/departments" className={styles.navLink}>Departments</TransitionLink>
                    <TransitionLink href="/stories" className={styles.navLink}>Stories</TransitionLink>
                    <TransitionLink href="/obscurity" className={styles.navLink}>Upload Story</TransitionLink>
                </div>
                <button 
                    className={`navbar-toggler ${styles.toggleButton}`} 
                    onClick={toggleNavbar}
                >
                    <span className="navbar-dark navbar-toggler-icon"></span>
                </button>
            </nav>
            {/* { isOpen && ( */}
                <div className={styles.navSidebar} id="collapsibleNavbar">
                    <ul className={styles.navList}>
                        <TransitionLink href="/" className={styles.navSideLink} onClick={toggleNavbar}>
                            <li className={styles.navLinkSide}>Home</li>
                        </TransitionLink>
                        <TransitionLink href="/team" className={styles.navSideLink} onClick={toggleNavbar}>
                            <li className={styles.navLinkSide}>About Us</li>
                        </TransitionLink>
                        <TransitionLink href="/departments" className={styles.navSideLink} onClick={toggleNavbar}>
                            <li className={styles.navLinkSide}>Departments</li>
                        </TransitionLink>
                        <TransitionLink href="/stories" className={styles.navSideLink} onClick={toggleNavbar}>
                            <li className={styles.navLinkSide}>Stories</li>
                        </TransitionLink>
                        <TransitionLink href="/obscurity" className={styles.navSideLink} onClick={toggleNavbar}>
                            <li className={styles.navLinkSide}>Upload Story</li>
                        </TransitionLink>
                    </ul>
                </div>
            {/* )} */}

        </div>
    );
};
