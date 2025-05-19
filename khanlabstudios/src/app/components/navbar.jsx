import React from "react";
import Link from 'next/link';
import styles from '../../globals.module.css';
import Image from 'next/image';
const Navbar = () => {  
    return (
        <div className={styles.navContainer}>
            <nav className={styles.navbar}>
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
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/team" className={styles.navLink}>Team</Link>
                        <Link href="/departments" className={styles.navLink}>Department</Link>
                        <Link href="/stories" className={styles.navLink}>Stories</Link>
                        <Link href="/account" className={styles.navLink}>Account</Link>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;