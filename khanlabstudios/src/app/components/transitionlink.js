'use client';

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { animate } from 'motion';


export function TransitionLink({ children, href, className, ...props }) {
    const router = useRouter();

    return (
            <Link href={href} className={className} onClick={async (e) => {
                e.preventDefault();
                const animation = animate('#exit', {rotateY: 0 }, { duration: .75 });
                await animation;
                animation.then(()=> {
                    router.push(href)
                })
            }}>
                {children}
            </Link>
    )
}