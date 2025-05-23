import { Navbar } from "@/app/components/navbar.js";
import Template from './template.js';
import styles from '@/globals.module.css';
 
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