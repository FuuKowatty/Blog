'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About Me',
    path: '/about'
  },
]

export default function Navbar() {

  const currentRoute = usePathname()

  return (
    <nav className='flex justify-between min-h-[80px] items-center px-4 border-b-gray-200 border-[1px] shadow-lg fixed left-0 top-0 w-full z-10 bg-white'>
      <Link href='/'><Image src={'/logo.png'} alt='logo' width={48} height={48}/></Link>
      <ul className='flex text-lg gap-2'>
        {pages.map(page => (
          <li className={`min-w-[80px] text-center
            ${currentRoute === page.path && 'border-b-[#fa8033] border-b-2'}`} key={page.id}><Link href={page.path}>{page.name}</Link></li>
        ))} 
      </ul>  
    </nav>
  )
}
