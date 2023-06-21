'use client'

import { Navbar } from '@/components/Navbar'
import './globals.css'
import { DarkModeToggle } from '@/components/DarkModeButton'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`overflow-x-hidden mr-[calc(-1*(100vw-100%))]` }> {/*dont move scroll after open modal */}
      <ThemeProvider>
      <body className={`font-sans pt-[80px] bg-white dark:bg-darkGray dark:text-lightGray text-black transition-colors duration-300` }
      suppressHydrationWarning={true}
      >
          <Navbar>
            <DarkModeToggle />
          </Navbar>
          {children}
          <Footer />
      </body>
      </ThemeProvider>
    </html>
  )
}