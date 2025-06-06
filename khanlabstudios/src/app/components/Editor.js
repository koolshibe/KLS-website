'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';


export default function TinyEditor({ initialValue, textareaRef, onChange }) {
  const editorRef = useRef(null);
  const extractPlainTextContent = (html) => {
    // Remove all tags and convert $img{} or (img:) blocks to plain
    let text = html;

    // Replace custom image syntax with plain text
    text = text.replace(/<p>\$img{([^}]+)}<\/p>/g, (_, src) => `$img{${src.trim()}}`);
    text = text.replace(/<p>\(img:([^)]+)\)<\/p>/g, (_, src) => `$img{${src.trim()}}`);
    // text = text.replace(/\(img:([^)]+)\)/g, (_, src) => `$img{${src.trim()}}`);
    // text = text.replace(/\$img{([^}]+)}/g, (_, src) => `$img{${src.trim()}}`);
    // text = text.replace(/\(img:([^)]+)\)/g, (_, src) => `$img{${src.trim()}}`);

    // Optional: strip out HTML tags if needed
    // text = text.replace(/<[^>]+>/g, '');

    return text;
  };

  const handleEditorChange = () => {
    if (!editorRef.current || !textareaRef.current) return;
    const html = editorRef.current.getContent();
    // const plain = extractPlainTextContent(html);
    textareaRef.current.value = html;
  };
 
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;
  return (
    <Editor
      apiKey='ilrd6x55qngoz2015np6ix5khkd8k4va10f3x9mdq0f1x42i' // Optional for cloud features
      onInit={(evt, editor) => {
        editorRef.current = editor;
        handleEditorChange();
        // if (textareaRef.current) {
        //   textareaRef.current.value = editor.getContent();
        // }
    }}
      initialValue={initialValue}
      init={{
        selector: 'textarea',
        height: 500,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
          'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help | fontselect fontsizeselect | forecolor backcolor | paste | print',
          font_family_formats: `
            Roboto=roboto,helvetica,arial,sans-serif;
            Arial=arial,helvetica,sans-serif;
            Courier New=courier new,courier,monospace;
            Times New Roman=times new roman,times,serif;
            "IBM Plex Serif"='IBM Plex Serif',serif;
            Spectral=spectral,serif;
            Edu SA Hand='Edu SA Hand',cursive;
            Quicksand=quicksand,sans-serif;
          `,
          powerpaste_word_import: 'merge',
          paste_data_images: true,
          paste_as_text: false,
          paste_webkit_styles: 'all',
        //   paste_retain_style_properties: 'all',
          valid_elements: '*[*]',
          valid_styles: {
            '*': 'color,font-size,font-family,background,background-color,text-decoration,float,display,margin,padding,border'
          }
      }}
    //   onEditorChange={(content) => {
    //     if (textareaRef.current) {
    //       textareaRef.current.value = content;
    //     }
    //   }}
    onEditorChange={handleEditorChange}
    //   onEditorChange={(newValue) => onChange?.(newValue)}
    />
    
  );
}