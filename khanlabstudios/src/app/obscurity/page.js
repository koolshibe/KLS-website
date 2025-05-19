'use client'

import { upload } from './upload.js';
import styles from '../../globals.module.css';

export default function Page() {
  return (
    <form className={styles.form}>
      <label htmlFor="title" className={styles.label}>Title: </label>
      <input id="title" name="title" type="text" required className={styles.input} />
      <label htmlFor="author" className={styles.label}>Author: </label>
      <input id="author" name="author" type="text" required className={styles.input} />
      <label htmlFor="files" className={styles.label}>Images: </label>
      <input type="file" id="files" name="files" multiple className={styles.input} />
      <button formAction={upload} className={styles.button}>upload</button>
    </form>
  )
}
