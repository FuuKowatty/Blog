
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'MyBlog',
  description: 'This is blog of FuuKowatty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans bg-white text-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
