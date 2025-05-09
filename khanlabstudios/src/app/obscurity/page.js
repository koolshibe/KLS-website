'use client'

import { upload } from './upload.js';

export default function Page() {
  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input id="title" name="title" type="text" required />
      <label htmlFor="author">Author: </label>
      <input id="author" name="author" type="text" required />
      <label htmlFor="file">Markdown text: </label>
      <label htmlFor="files">Images: </label>
      <input type="file" id="files" name="files" multiple/>
      <button formAction={upload}>upload</button>
    </form>
  )
}
