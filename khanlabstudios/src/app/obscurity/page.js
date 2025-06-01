'use client'

import { upload } from './upload.js';
import styles from '../../globals.module.css';

export default function Page() {
  return (
    <form className={styles.form} style={{
      maxWidth: '70vw',
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
      <label htmlFor="story" className={styles.label} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Short Story:</label>
      <textarea
        id="story"
        name="story"
        rows="10"
        required
        className={styles.textarea}
        htmlFor="story"
        style={{
          width: '100%',
          padding: '8px 12px',
          marginBottom: '18px',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}
        placeholder="Write your story here..."
      ></textarea>
      <label htmlFor="summary" className={styles.label} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Blurb (Under 320 Characters):</label>
      <textarea
        id="summary"
        name="summary"
        rows="10"
        required
        className={styles.textarea}
        htmlFor="summary"
        maxLength="320"
        style={{
          width: '100%',
          padding: '8px 12px',
          marginBottom: '18px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          maxHeight: '20vh',
        }}
        placeholder="Write your blurb here..."
      ></textarea>
      <label htmlFor="state" className={styles.label} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>City-state</label>
      <input type="radio" name="state" value="Vyapar"/>Vyapar
      <input type="radio" name="state" value="Myrellis"/>Myrellis
      <input type="radio" name="state" value="Umbra"/>Umbra
      <input type="radio" name="state" value="Umbra"/>Croyokova
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
