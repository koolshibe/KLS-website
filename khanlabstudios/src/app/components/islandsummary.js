'use client'

import { AnimatePresence, motion } from 'motion/react'
import styles from '@/globals.module.css';
import { useState, useEffect } from 'react';
import { TransitionLink } from './transitionlink';
// import Image from 'next/image';

export function Island({name, order, text}) {

    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)
    const [activeIsland, setActiveIsland] = useState(null);

    const handleHoverStart = (islandName) => {
        setActiveIsland(islandName);
        setHover(true);
    };

    const handleHoverEnd = () => {
        if (!click) {
            setActiveIsland(null);
            setHover(false);
        }
    };

    const imgMap = 'https://static.thenounproject.com/png/331788-200.png';

    // useEffect(() => {
    //     const islandElement = document.getElementById(`${name}pointer`);
    //     if (islandElement) {
    //         islandElement.style.zIndex = activeIsland === name || activeIsland === null ? 100 : 1;
    //     }
    // }, [activeIsland, name]);

    const variants = {
        'initial': {
            opacity:0,
            x: 200,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        'animate': {
            opacity:1,
            x: 0,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        'exit': {
            opacity:0,
            x: 200,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        'linkhover': {
            opacity:0.5,
            y:-20,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        'linkanimate': {
            opacity:1,
            y:0,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        }
    };

    const style = [
        // styles.cityhover,
        styles.tl,
        styles.tr,
        styles.br,
        styles.bl   ];

    const style2 = [
        // styles.cityhover,
        styles.tl2,
        styles.tr2,
        styles.br2,
        styles.bl2  
    ]
    
    const orderChange = 3;

    return(
        <div className={styles.map}>
            <AnimatePresence>
                { hover && (
                <>
                    <motion.div className={`${style[(order+2+orderChange) % 4]} ${styles.bgcream} anime`} animate={variants['animate']} exit={variants['exit']} initial={variants['initial']}>
                        <div className={`${styles.title} ${styles.mapTitle}`}>
                            {name}
                        </div>
                    </motion.div>
                    <motion.img className={`${style[(order+3+orderChange) % 4]} anime`} animate={variants['animate']} exit={variants['exit']} initial={variants['initial']} src={`/map/${name}.png`} alt={name} id={name} onError={() => document.querySelector(`#${name}`).src=`/map/${name}.jpg`}/>
                    <motion.div className={`${style[(order+4+orderChange) % 4]} ${styles.bgcream} anime`} animate={variants['animate']} exit={variants['exit']} initial={variants['initial']}>
                        <div className={`${styles.title} ${styles.mapText}`}>
                            {text}
                        </div>
                    </motion.div>
                </>
                )}
                <motion.div key={`${name}1`} className={`${styles.cityhover} ${style2[order]}`} id={`${name}pointer`} onHoverStart={() => {handleHoverStart({name})}} onClick={() => {setClick(!click); setHover(!click)}} onHoverEnd={() => {!click ? handleHoverEnd(): setHover(true)}} >
                    <TransitionLink href={`/stories?state=${name}`}>
                        <img src={imgMap} style={
                            {
                                width: '50px',
                                height: 'auto',
                                transition: 'all 0.5s ease-in-out',
                                borderRadius: '50%',
                                padding: '1%',
                                boxShadow: hover ? '0 0 4px rgba(0, 0, 0, 0.5)' : 'none',
                                backgroundColor: hover ? 'rgba(0,0,0,0.3)' : 'transparent',
                                // opacity: hover ? 0.5 : 1,
                                transform: hover ? 'scale(1.2)' : 'scale(1)',
                            }
                        }/>
                    </TransitionLink>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}