'use client'
import styles from '@/globals.module.css';
import { TransitionLink } from './transitionlink';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
export default function DepartmentLayout({
    department_name,
    carouselImages = [],
    draftBoxes = [],
    members = [],
    blurb = ""
}) {
    const [bios, setBios] = useState({});
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    useEffect(() => {
        async function fetchBios() {
            const { data, error } = await supabase
                .from('team')
                .select('name, bio')
                .in('name', members);

            if (error) {
                console.error('Error fetching bios:', error);
                return;
            }

            const biosMap = data.reduce((acc, member) => {
                acc[member.name] = member.bio;
                return acc;
            }, {});
            setBios(biosMap);
        }

        fetchBios();
    }, [members]);

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
                    <div style={{ flex: 1, width: 'auto' }}>
                        <div style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            color: '#4a4e69'
                        }}>
                            <h4 style={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                marginBottom: '12px'
                            }}>Department Statement</h4>
                            {blurb.split('\n').map((line, index) => (
                                <p key={index} style={{ marginBottom: '1rem' }}>
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Carousel */}
                    <div style={{
                        flex: 1,
                        minWidth: '150px',
                        maxWidth: '400px',
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
                                    maxHeight: '16rem',
                                    maxWidth: '16rem',
                                    // background: '#f0f0f0',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    scrollSnapAlign: 'start',
                                    padding: '8px',
                                    color: '#888'
                                }}>
                                    <img
                                        alt={img}
                                        style={{
                                            // borderRadius: '8px',
                                            marginBottom: '8px',
                                            marginTop: '8px',
                                            width: '100%',
                                            height: 'auto',
                                        }} src={img} />
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
                                }}>
                                    <img
                                        alt={member || 'Member'}
                                        style={{
                                            borderRadius: '8px',
                                            marginBottom: '8px',
                                            width: '100%',
                                            height: 'auto',
                                        }} src={'/students/' + member?.toUpperCase() + '.jpg'} />
                                </div>

                                <div style={{ fontWeight: 500 }} className={styles.adjustPhone}>{member}</div>
                            </div>
                        ) : null
                    ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <h4 style={{ marginBottom: '1rem' }}>Bios</h4>
                    {members.map((member, i) => (
                        member ? (
                            <details key={i} style={{ marginBottom: '1rem' }}>
                                <summary style={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '1.4rem',
                                    color: styles.getColor,
                                    cursor: 'pointer',
                                    marginBottom: '0.5rem'
                                }}>
                                    {member}
                                </summary>
                                <span style={{ lineHeight: 1.6, color: '#4a4e69' }}>
                                    {bios[member] || "No bio available"}
                                </span>
                            </details>
                        ) : null
                    ))}
                </div>
            </section>
        </div>
    );
}