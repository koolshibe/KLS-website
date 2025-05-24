import * as motion from "motion/react-client"
import styles from '@/globals.module.css';

export function Island({name, order, text}) {

    const variants = {
        rest: {
            opacity:0,
            x: 200,
            transition: {
                duration: 2,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            opacity:1,
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


    return(
        <div className={styles.map}>
            <motion.div initial="rest" whileHover="hover" whileTap="hover" animate="rest" className={`${style[order]} ${styles.cityhover}`}></motion.div>
            <motion.div className={style[order+1]} variants={variants}>{name}</motion.div>
            <motion.img className={style[order+2]} src={`/map/${name}.png`} variants={variants} alt={name}></motion.img>
            <motion.div className={style[order+3]} variants={variants}>{text}</motion.div>
        </div>
    )
}