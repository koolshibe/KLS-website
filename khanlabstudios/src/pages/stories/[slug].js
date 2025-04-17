const filesystem = require("fs");

import { promises as fs } from 'fs';
import Image from 'next/image';
 
export default function Page({ title, author, date, content, img }) {

  return (
    <div>
      <h1>{title}</h1>
      <h2>By {author}</h2>
      <h2>Birthed {date}</h2>
      <Image
        src={img}
        height={500}
        width={500}
        alt={"Cover.jpg"}
      />
      {content.map(
        (pg) => <section>{pg}</section>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const path=process.cwd() + `/src/data/${context.params.slug}/data.json`;
  
  if (!filesystem.existsSync(path)) {
    return {
      notFound:true
    }
  }

  const file = await fs.readFile(path, 'utf8');
  const data = JSON.parse(file);

  return {
      props: { 
        title: data.title,
        author: data.author,
        date: data.date,
        content: data.content,
        img: `/${context.params.slug}.jpg`
      },
  };
}