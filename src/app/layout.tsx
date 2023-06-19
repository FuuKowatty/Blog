'use client'

import { Navbar } from '@/components/Navbar'
import './globals.css'
import { useState } from 'react'
import { DarkModeToggle } from '@/components/DarkModeButton'

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
    <html lang="en" className={mode === 'light' ? 'dark' : 'light'}>
      <body className={`font-sans pt-[80px] bg-white dark:bg-darkGray dark:text-lightGray text-black px-4` }>
          <Navbar>
            <DarkModeToggle mode={mode} toggle={toggle}/>
          </Navbar>
          {children}
      </body>
    </html>
  )
}
