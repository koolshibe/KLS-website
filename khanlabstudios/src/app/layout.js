import { Navbar } from "@/app/components/navbar.js";
import Template from './template.js';
import './global.css';
import styles from '@/globals.module.css';
import Head from 'next/head';

export const metadata = {
  title: 'Red String Studios',
  description: 'Red String Studios is a student-run organization at Khan Lab School that focuses on creating and sharing stories.',
  keywords: 'Red String Studios, Khan Lab School, student-run organization, stories, storytelling',
  authors: [{ name: 'Red String Studios' }],
  creator: 'Red String Studios',
  publisher: 'Red String Studios',
  icon: '/icon.ico',
}

export default function rootLayout({ children }) {
  
  return (  
    <html lang="en">
      <Head>
        <title>Red String Studios</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>

      </Head>
      <body suppressHydrationWarning>
          <Navbar />
          <Template>
            {children}
          </Template>
          <div id='exit' className={styles.exit}>
            Loading pag elol
          </div>
      </body>
    </html>
  );
}