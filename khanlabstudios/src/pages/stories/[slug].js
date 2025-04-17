import { promises as fs } from 'fs';
import { GetServerSideProps } from 'next';
 
export default function Page({ title, author, date, content }) {

  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h2>{date}</h2>
      {content.map(
        (pg) => <section>{pg}</section>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const file = await fs.readFile(process.cwd() + `/src/data/${context.params.slug}/data.json`, 'utf8');
  const data = JSON.parse(file);

  return {
      props: { 
        title: data.title,
        author: data.author,
        date: data.date,
        content: data.content
       },
  };
}