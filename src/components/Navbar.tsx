import Link from 'next/link'

export function Navbar({children} : {children: React.ReactNode}) {


  return (
    <nav className='flex justify-between min-h-[80px] items-center px-4 lg:px-10 fixed left-[50%] translate-x-[-50%] top-0 w-full z-10 gap-4 max-w-[1280px]  backdrop-blur-lg'>
      <Link href='/'><span className='text-2xl font-bold tracking-wider'>FuuKowatty</span></Link>
      {children}
    </nav>
  )
}
