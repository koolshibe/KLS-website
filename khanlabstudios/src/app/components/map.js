import Image from 'next/image';
import { Island } from './islandsummary.js';
import styles from '@/globals.module.css';

export function Map() {
    return (
    <div className={styles.mapcontainer}>
        <Image src='/map/map.jpg' fill={true} sizes="100vw" alt='map. Also you suck' className={styles.map}/>
        <Island name='vyapar' order={1} text="Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"/>
        {`<Island name='Nasucia' order={2} text={
                "Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"
            }/>
            <Island name='Clementine' order={3} text={
                "Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"
            }/>
            <Island name='Umber' order={4} text={
                "Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"
        }/>`}
    </div>
    )
}