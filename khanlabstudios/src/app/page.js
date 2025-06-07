import styles from '@/globals.module.css';
import { Map } from '@/app/components/map.js';
import { Timeline } from '@/app/components/timeline';
import { TransitionLink } from './components/transitionlink';
import { Suspense } from 'react';

export default function Page() {
    return (
        <div className="text-center mt-5">
            <h1 
                className={styles.title}>
                Welcome to Red String Studios
            </h1>
            <p className={styles.description}>
                Hello, dearest beholder <s>of the masterpiece blessing your unworthy eyes</s>! Our Netflix overlords decided to task us, Khan Lab School’s Class of 2028, with crafting a storytelling company. We split ourselves across four departments—<TransitionLink href='/departments/marcomm'>MarComm</TransitionLink>, <TransitionLink href='/departments/story'>Story</TransitionLink>, <TransitionLink href='/departments/art'>Art & Design</TransitionLink>, and <TransitionLink href='/departments/website'>Website</TransitionLink> -as well as a leadership team, and of course, Nicholas Giuseppe Fera, aged 97, to oversee it all. We’ve been through a lot this term—worldbuilding four city-states from the ground up (that totally aren’t ripped off of the Hunger Games), putting together an Instagram campaign, drawing everything from world maps to cityscapes, and coding this very website before your mortal eyes—not to mention writing individual and/or duo <TransitionLink href='/stories'>short stories</TransitionLink>. Take care as you dive into this world of fantasy and fun (we’re definitely not being held at gunpoint by Netflix), and remember that “in most universes, pineapples don’t talk” - Nick 2024 (RIP).
            </p>
            {/* <Map></Map> */}
            <Suspense>
                <Timeline/>
            </Suspense>
        </div>
    );
}