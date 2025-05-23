'use client';

import Link from 'next/link';
import { TransitionLink } from './transitionlink.js';
import styles from '@/globals.module.css';
import Image from 'next/image';

export function Navbar() {  
    return (
        <div className="fixed w-full h-24 shadow bg-white z-10">
            <nav className={`navbar navbar-expand-lg navbar-light fixed w-full h-24 shadow bg-black z-10" ${styles.navbar}`}>
                <div className={styles.logoContainer}>
                        <Image 
                            src="/logo/logo.png" 
                            alt="logo" 
                            width={100}
                            height={100}
                            className={styles.logoImage} 
                        />
                    <h3 className={styles.logoText}>Red String Studios</h3>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={styles.navbarCollapse}>
                        <TransitionLink href="/" className={styles.navLink}>Home</TransitionLink>
                        <TransitionLink href="/team" className={styles.navLink}>Team</TransitionLink>
                        <TransitionLink href="/departments" className={styles.navLink}>Department</TransitionLink>
                        <TransitionLink href="/stories" className={styles.navLink}>Stories</TransitionLink>
                        <TransitionLink href="/obscurity" className={styles.navLink}>Account</TransitionLink>
                </div>
            </nav>
        </div>
    );
};