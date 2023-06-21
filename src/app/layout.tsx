"use client"

import { Navbar } from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
import { DarkModeToggle } from '@/components/Buttons/DarkModeButton'
import { CSSProperties, useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  useEffect(() => {
    // Apply styles to the body element
    document.body.classList.add('transition-colors', 'duration-300');

    // Clean up by removing the styles when the component unmounts
    return () => {
      document.body.classList.remove('transition-colors', 'duration-300');
    };
  }, []);

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