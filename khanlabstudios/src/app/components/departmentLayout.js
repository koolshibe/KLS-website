// 'use client'
import styles from '@/globals.module.css';
import { TransitionLink } from './transitionlink';
import Image from 'next/image';
export default function DepartmentLayout({
    department_name,
    depStatements = [],
    carouselImages = [],
    draftBoxes = [],
    members = [],
    blurb = ""
}) {
    return (
        <div style={{
            maxWidth: '1000px',
            margin: '48px auto',
            padding: '32px',
            background: '#fff',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(34,34,59,0.1)',
            border: '1px solid #e0e0e0',
            fontFamily: 'Roboto, sans-serif'
        }}>
            {/* Example Section */}
            <section style={{ marginBottom: '32px' }}>
                <h1 style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    marginBottom: '16px'
                }} className={styles.getColor}>{department_name}</h1>

                {/* Blurb + Carousel */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    {/* Blurb */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <div style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            color: '#4a4e69'
                        }}>
                          {blurb}  
                        </div>
                    </div>

                    {/* Carousel */}
                    <div style={{
                        flex: 1,
                        minWidth: '300px',
                        overflowX: 'auto',
                        display: 'flex',
                        gap: '16px',
                        scrollSnapType: 'x mandatory',
                        paddingBottom: '8px'
                    }}>
                        {carouselImages.map((img, i) => (
                            img ? (
                            <div key={i} style={{
                                flex: '0 0 auto',
                                maxWidth: '25%',
                                maxHeight:'10rem',
                                // height: 'auto',
                                background: '#f0f0f0',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                scrollSnapAlign: 'start',
                                color: '#888'
                            }}>
                                <img 
                            alt={img}
                            style={{
                                borderRadius: '8px',
                                marginBottom: '8px',
                                width: '100%',
                                height: 'auto',
                            }} src={img}/>
                            </div>
                            ) : null    
                    ))}
                    </div>
                </div>
                            </section>

                            {/* Members Section */}
            <section style={{ textAlign: 'center' }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: '16px'
                }}>MEMBERS</h3>
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {members.map((member, i) => (
                        member ? (
                        <div key={i} style={{
                            width: '20%',
                            background: '#f9f9f9',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '12px',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: '100%',
                                // height: '100%',
                                
                            }}><img 
                            alt={members[i] || 'Member'}
                            style={{
                                borderRadius: '8px',
                                marginBottom: '8px',
                                width: '100%',
                                height: 'auto',
                            }} src={'/students/' + members[i]?.toUpperCase() + '.jpg'}/></div>
                            
                            <div style={{ fontWeight: 500 }} className={styles.adjustPhone}>{members[i]}</div>
                        </div>
                        ) : null
                    ))}
                </div>
                <div style={{marginTop: '2rem   '}}> 
                    <h4 style={{marginBottom: '1rem'
                                        }}>Department Statements</h4>
                {depStatements.map((statement, i) => (
                                statement ? (
                                    <details key={i} style={{ marginBottom: '1rem' }}>
                                        <summary style={{
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '1.4rem',
                                            color: styles.getColor,
                                            cursor: 'pointer',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {members[i]}
                                        </summary>
                                        <span style={{ lineHeight: 1.6, color: '#4a4e69' }}>{statement}</span>
                                    </details>
                                ) : null
                            ))}
                </div>
            </section>
        </div>
    );
}