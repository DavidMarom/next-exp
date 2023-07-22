import './globals.css'
import { Inter } from 'next/font/google'
import { SideBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Bold Developers',
  description: 'Learning next together',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='layout-container'>
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  )
}
