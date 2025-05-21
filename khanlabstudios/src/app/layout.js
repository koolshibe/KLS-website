import Navbar from "./components/navbar"
import BootstrapClient from "./components/BootstrapClient"
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Red String Studios',
  description: 'Red String Studios is a student-run organization at Khan Lab School that focuses on creating and sharing stories.',
  keywords: 'Red String Studios, Khan Lab School, student-run organization, stories, storytelling',
  authors: [{ name: 'Red String Studios' }],
  creator: 'Red String Studios',
  publisher: 'Red String Studios',
  icon: '/favicon.ico'
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body><Navbar/>{children}</body>
    </html>
  )
}

