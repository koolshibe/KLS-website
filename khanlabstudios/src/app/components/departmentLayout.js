import styles from '@/globals.module.css';
import { createClient } from '@/utils/supabase/server';

async function fetchBios(department_name) {

    const supabase = await createClient();
    const { data, error } = await supabase
        .from('team')
        .select('name, bio, department')
        .eq('department', department_name);

    if (error) {
        console.error('Error fetching bios:', error);
        return;
    }

    return data;
}

export default async function DepartmentLayout({
    department_name,
    carouselImages = [],
    blurb = ""
}) {

    const members = await fetchBios(department_name);

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
                                        alt={member['name'] || 'Member'}
                                        style={{
                                            borderRadius: '8px',
                                            marginBottom: '8px',
                                            width: '100%',
                                            height: 'auto',
                                        }} src={'/students/' + member['name'].toUpperCase() + '.jpg'} />
                                </div>

                                <div style={{ fontWeight: 500 }} className={styles.adjustPhone}>{member['name']}</div>
                                <span style={{ lineHeight: 1.6, color: '#4a4e69' }}>
                                    {member['bio'] || "No bio available"}
                                </span>
                            </div>
                        ) : null
                    ))}
                </div>
            </section>
        </div>
    );
}