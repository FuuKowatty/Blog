"use client"

import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from "next-themes";
export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const handleChangeMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className='bg-white dark:bg-darkGray  ml-auto w-[42px] h-[24px] border-gray-200 border-[1.5px] rounded-lg flex items-center justify-center p-2 relative cursor-pointer text-sm dark:border-white/10' onClick={handleChangeMode} aria-label="change-theme">
      <div><BsFillSunFill /></div>
      <div><BsFillMoonFill /></div>
      <div
        className={`w-[18px] h-[18px] border-[3px] border-blue-300 bg-lightBlue rounded-full absolute`}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

