import { Navbar } from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { DarkModeToggle } from '@/components/Buttons/DarkModeButton'
import Providers from './providers'
import { TransitonAnimationHandler } from '@/components/TransitonAnimationHandler'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning> 
      <body>
          <TransitonAnimationHandler />
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