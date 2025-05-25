'use client'

import * as motion from "motion/react-client"
import styles from '@/globals.module.css';
import { useState } from 'react';

export function Island({name, order, text}) {

    const [hover, sethover] = useState(false);
    const [tapped, settapped] = useState(false);

    const variants = {
        rest: {
            opacity:1,
            x: 200,
            transition: {
                duration: 2,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            opacity:0,
            x: 0,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut",
            },
        },
    };

    const style = [
        styles.tl,
        styles.tr,
        styles.bl,
        styles.br
    ];

    console.log(style)


    return(
        <div className={styles.map}>
            <motion.div initial="rest" onHoverStart={(e)=> {sethover(true)}} onHoverEnd={(e) => {if (!tapped) sethover(false) }} onClick={(e)=> {sethover(true); settapped(true)}} onBlur={(e)=> {sethover(false); settapped(false)}} animate="rest" className={`${style[order]} ${styles.cityhover}`}></motion.div>
            <motion.div key={`${hover}.${tapped}.${name}.1`} className={style[(order+1) % 4]} variants={variants}>{name}</motion.div>
            <motion.img key={`${hover}.${tapped}.${name}.2`} className={style[(order+2) % 4]} src={`/map/${name}.png`} variants={variants} alt={name}></motion.img>
            <motion.div key={`${hover}.${tapped}.${name}.3`} className={style[(order+3) % 4]} variants={variants}>{text}</motion.div>
        </div>
    )
}