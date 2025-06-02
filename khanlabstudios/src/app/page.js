import styles from '@/globals.module.css';
import { Map } from '@/app/components/map.js';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="text-center mt-5">
            <h1 
                className={styles.title}>
                Welcome to Red String Studios
            </h1>
            <p className={styles.description}>
                Hello, dearest beholder <s>of the masterpiece blessing your unworthy eyes</s>! Our Netflix overlords decided to task us, Khan Lab School’s Class of 2028, with crafting a storytelling company. We split ourselves across four departments—<Link href='/departments/marcomm'>MarComm</Link>, <Link href='/departments/story'>Story</Link>, <Link href='/departments/art'>Art & Design</Link>, and <Link href='/departments/website'>Website</Link> -as well as a leadership team, and of course, Nicholas Giuseppe Fera, aged 97, to oversee it all. We’ve been through a lot this term—worldbuilding four city-states from the ground up (that totally aren’t ripped off of the Hunger Games), putting together an Instagram campaign, drawing everything from world maps to cityscapes, and coding this very website before your mortal eyes—not to mention writing individual and/or duo <Link href='/stories'>short stories</Link>. Take care as you dive into this world of fantasy and fun (we’re definitely not being held at gunpoint by Netflix), and remember that “in most universes, pineapples don’t talk” - Nick 2024 (RIP).
            </p>
            <Map></Map>
        </div>
    );
}