'use client';

import Link from 'next/link';
import styles from '@/globals.module.css';
import { useRouter, usePathname } from "next/navigation";
import { animate } from 'motion';


export function TransitionLink({ children, href, className, ...props }) {
    const router = useRouter();
    const pathname = usePathname();

    return (
            <Link href={href} className={`${className} ${styles.transitionLink}`} onClick={async (e) => {
                e.preventDefault();
                if (pathname == href) {
                    router.push(href)
                } else {
                    const animation = animate('#exit', {rotateY: 0 }, { duration: .75 });
                    await animation;
                    animation.then(()=> {
                        router.push(href)
                    })
                }
            }}>
                {children}
            </Link>
    )
}