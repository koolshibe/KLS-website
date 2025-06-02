'use client'

import { use, useState } from 'react';
import { Storycard } from './card.js';
import styles from '@/globals.module.css';
import { animate } from 'motion';
import { useSearchParams } from 'next/navigation'
 
export default function Stories({ stories }) {
  const searchParams = useSearchParams()
  const search = searchParams.get('state')

  const data = use(stories)
  const [query, setQuery] = useState(!search ? '': search);

  console.log(data)
  const filter = (arr) => {
    return arr.filter(
        (el) => el['title'].toLowerCase().includes(query) || el['state'].toLowerCase().includes(query)
    )
  }

  const filtered = filter(data);

  const input = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
        <input className = {styles.input} onChange={input} onClick={(e)=> animate(e.target, {width: '70vw'}, {duration:0.75})} onBlur={(e)=> animate(e.target, {width: '20vw'}, {duration:0.75})} type='text' defaultValue={search} placeholder='Search...'/>
        {filtered.map((x, index) =>
            <div key={`${index}.${index}`} id={`${x['author']}.${x['title']}}`}>
                {<Storycard key={`${index}.${index}.${index}`} summary={x['summary']} title={x['title']} student={x['authors'].map((x)=>`${x['author']}`)} date={x['published']} storyID={x['id']}/>}
                {console.log(x['summary'])}
            </div>
        )}
    </>
  )
}