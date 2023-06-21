"use client"

import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from "next-themes";
export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const handleChangeMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <span className='min-w-[44px] min-h-[44px] flex items-center'  
      onClick={handleChangeMode}>
    <button className='bg-white dark:bg-darkGray  ml-auto w-[42px] h-[24px] border-gray-200 border-[1.5px] rounded-lg flex items-center justify-center p-2 relative cursor-pointer text-sm dark:border-white/10'>
      <div><BsFillSunFill /></div>
      <div><BsFillMoonFill /></div>
      <div
        className={`w-[18px] h-[18px] border-[3px] border-blue-300 bg-lightBlue rounded-full absolute left-[2px] dark:left-auto right-auto dark:right-[2px] animate-open`}
      />
    </button>
    </span>
  );
};

