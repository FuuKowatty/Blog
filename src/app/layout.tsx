"use client"

import { Navbar } from '@/components/Navbar'
import './globals.css'
import { DarkModeToggle } from '@/components/DarkModeButton'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en"> 
      <body>
        <ThemeProvider attribute='class' >
          <Navbar>
            <DarkModeToggle />
          </Navbar>
          {children}
        </ThemeProvider>
          <Footer />
      </body>
    </html>
  )
}