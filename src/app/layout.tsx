import { Navbar } from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { DarkModeToggle } from '@/components/Buttons/DarkModeButton'
import Providers from './providers'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body>
          <Providers>
            <Navbar>
              <DarkModeToggle />
            </Navbar>
            {children}
            <Footer />
          </Providers>
      </body>
    </html>
  )
}