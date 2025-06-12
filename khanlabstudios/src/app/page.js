import styles from '@/globals.module.css';
import { Map } from '@/app/components/map.js';
import { Timeline } from '@/app/components/timeline';
import { TransitionLink } from './components/transitionlink';
import { Suspense } from 'react';

import React from 'react';
export default function Page() {
    // const [isMapVisible, setIsMapVisible] = React.useState(false);

    return (
        <div className="text-center mt-5">
            <h1
                className={styles.title}>
                Welcome to Red String Studios
            </h1>
            <p className={styles.description}></p>
            <div>
            <details className={styles.mapContainer2} key={'mapdetails'} open={true}>
                <summary className={styles.mapdetails} style={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                }}>
                   {'Map'}
                </summary>
                            
                <Map />
                </details>
            </div>
            <Suspense>
                <Timeline/>
            </Suspense>
        </div>
    );
}