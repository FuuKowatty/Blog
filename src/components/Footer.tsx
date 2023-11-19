import React from 'react'

export default function Footer() {
  return (
    <footer className='min-h-[100px] grid items-end justify-center border-t-lightGray dark:border-t-silver border-t-[1px] mt-12 px-4 text-center'>
        <span className='mb-6'>
            © 2023 & all rights reserved. Created with ❤️ by {' '}
            <a href="https://github.com/FuuKowatty" className='underline text-lightBlue font-bold' target='_blank'>FuuKowatty</a>
            
        </span>
    </footer>
  )
}
