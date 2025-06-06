'use client'

import { AnimatePresence, motion } from 'motion/react'
import styles from '@/globals.module.css';
import { useState } from 'react';
import { TransitionLink } from './transitionlink';

export function Island({name, order, text}) {

    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)

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
        styles.tl,
        styles.tr,
        styles.br,
        styles.bl   ];


    return(
        <div className={styles.map}>
            <AnimatePresence>
                { hover && (
                <>
                    <motion.div className={`${style[(order+1) % 4]} ${styles.bgcream} anime`} animate={variants['animate']} exit={variants['exit']} initial={variants['initial']}>
                        <div className={styles.title}>
                            {name}
                        </div>
                    </motion.div>
                    <motion.img className={`${style[(order+2) % 4]} anime`} animate={variants['animate']} exit={variants['exit']} initial={variants['initial']} src={`/map/${name}.png`} alt={name}/>
                    <motion.div className={`${style[(order+3) % 4]} ${styles.bgcream} anime`} animate={variants['animate']} exit={variants['exit']} initial={variants['initial']}>
                        <div className={styles.title}>
                            {text}
                        </div>
                    </motion.div>
                </>
                )}
                <motion.div key={`${name}1`} className={`${style[order]} ${styles.cityhover}`} id={`${name}pointer`} onHoverStart={() => {setHover(true)}} onClick={() => {setClick(!click); setHover(!click)}} onHoverEnd={() => {!click ? setHover(false): setHover(true)}} >
                    <TransitionLink href={`/stories?state=${name}`}>Learn more</TransitionLink>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}