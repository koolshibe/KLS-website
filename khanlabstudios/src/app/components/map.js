import Image from 'next/image';
import Island from './islandsummary.js';
import styles from '@/globals.module.css';

export default function Map() {
    <div>
        <img src='/map/map.jpg' className={styles.map}>
            <Island name='vyapar' order={1} text={
                "Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"
            }/>
            {`<Island name='Nasucia' order={2} text={
                "Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"
            }/>
            <Island name='Clementine' order={3} text={
                "Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"
            }/>
            <Island name='Umber' order={4} text={
                "Hi guys. it's me, vyapar. Signaopdsjjkgnkdjagnjksajkghjkdsabadmncbmncxbzjkghgakhdsjhfkjsagj"
            }/>`}
        </img>
    </div>
}