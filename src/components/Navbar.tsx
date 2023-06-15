import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between min-h-[80px] items-center px-4 border-b-gray-200 border-[1px] shadow-lg'>
      <Link href='/'><Image src={'/logo.png'} alt='logo' width={48} height={48}/></Link>
      <ul className='flex text-lg'>
        <li className='min-w-[80px]'><Link href='/'>Home</Link></li>
        <li className='min-w-[80px]'><Link href='/about'>About Me</Link></li>  
      </ul>  
    </nav>
  )
}
