'use client'

import Navbar from '@/components/Navbar'
import './globals.css'
import { useState } from 'react'
import { DarkModeToggle } from '@/components/DarkModeButton'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <html lang="en" className={mode === 'light' ? 'dark' : 'light'}>
      <body className={`font-sans pt-[80px] bg-gray-100 dark:bg-gray-900 dark:text-gray-100` }>
          <Navbar>
            <DarkModeToggle mode={mode} toggle={toggle}/>
          </Navbar>
          {children}
      </body>
    </html>
  )
}
