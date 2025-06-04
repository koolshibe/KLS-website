'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

const imageExists = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };
  
  // 👇 Replace (img:filename) with <img> or error <div>
  const parseImages = async (html) => {
    const matches = [...html.matchAll(/\(img:([^)]+)\)/g)];
  
    for (const match of matches) {
      const fullMatch = match[0];       // (img:cat.png)
      const src = match[1].trim();      // cat.png
      const exists = await imageExists(src);
  
      const replacement = exists
        ? `<img src="${src}" alt="" style="max-width: 100%; height: auto;" />`
        : ``;
  
      html = html.replace(fullMatch, replacement);
    }
  
    return html;
  };

export default function TinyEditor({ initialValue, textareaRef, onChange }) {
  const editorRef = useRef(null);
  const handleChange = async () => {
    if (!editorRef.current || !textareaRef.current) return;
    const raw = editorRef.current.getContent();
    const parsed = await parseImages(raw);
    textareaRef.current.value = parsed;
  };
 
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;
  return (
    <Editor
      apiKey='ilrd6x55qngoz2015np6ix5khkd8k4va10f3x9mdq0f1x42i' // Optional for cloud features
      onInit={(evt, editor) => {
        editorRef.current = editor;
        handleChange(); // ✅ on init
    }}
      initialValue={initialValue}
      init={{
        selector: 'textarea',
        height: 500,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
          'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount','powerpaste'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help | fontselect fontsizeselect | forecolor backcolor | paste | print',
          font_family_formats:`Roboto=roboto,helvetica,arial,sans-serif;Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Times New Roman=times new roman,times,serif;"IBM Plex Serif"= 'IBM Plex Serif',serif;
  Spectral=spectral,serif;`,
          powerpaste_word_import: 'merge',
          paste_data_images: true,
          paste_as_text: false,
          paste_enable_default_filters: false,
          paste_webkit_styles: 'all',
          paste_retain_style_properties: 'all',
          valid_elements: '*[*]',
          valid_styles: {
            '*': 'color,font-size,font-family,background,background-color,text-decoration,float,display,margin,padding,border'
          }
      }}
      onEditorChange={handleChange}
    //   onEditorChange={(newValue) => onChange?.(newValue)}
    />
    
  );
}