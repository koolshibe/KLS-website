'use client'

import { upload } from './upload.js';
import styles from '../../globals.module.css';

export default function Page() {
  return (
    <form className={styles.form} style={{
      maxWidth: '400px',
      margin: '40px auto',
      padding: '32px',
      borderRadius: '12px',
      background: '#f9f9f9',
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      color: '#a41313',
    }}>
      <label htmlFor="title" className={styles.label} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        required
        className={styles.input}
        style={{
          width: '100%',
          padding: '8px 12px',
          marginBottom: '18px',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}
      />
      <label htmlFor="author" className={styles.label} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Author:</label>
      <input
        id="author"
        name="author"
        type="text"
        required
        className={styles.input}
        style={{
          width: '100%',
          padding: '8px 12px',
          marginBottom: '18px',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}
      />
      <label htmlFor="files" className={styles.label} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Images:</label>
      <input
        type="file"
        id="files"
        name="files"
        multiple
        className={styles.input}
        style={{
          marginBottom: '24px',
        }}
      />
      <button
        formAction={upload}
        className={styles.button}
        style={{
          width: '100%',
          padding: '12px 0',
          background: 'linear-gradient(90deg,rgb(243, 0, 0) 0%,rgb(163, 0, 0) 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '17px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,112,243,0.08)',
          letterSpacing: '1px',
          transition: 'background 0.2s, transform 0.1s',
          marginTop: '8px'
        }}
        onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg,rgb(163, 0, 0) 0%,rgb(243, 0, 0) 100%)'}
        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg,rgb(243, 0, 0) 0%,rgb(163, 0, 0) 100%)'}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Upload
      </button>
    </form>
  )
}
