'use client'

import { Navbar } from '@/components/Navbar'
import './globals.css'
import { useState } from 'react'
import { DarkModeToggle } from '@/components/DarkModeButton'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <html lang="en" className={`${mode === 'light' ? 'dark' : 'light'} overflow-x-hidden mr-[calc(-1*(100vw-100%))]` }> {/*dont move scroll after open modal */}
      <body className={`font-sans pt-[80px] bg-white dark:bg-darkGray dark:text-lightGray text-black transition-colors duration-300` }
      suppressHydrationWarning={true}
      >
          <Navbar>
            <DarkModeToggle mode={mode} toggle={toggle}/>
          </Navbar>
          {children}
          <Footer />
      </body>
    </html>
  )
}
