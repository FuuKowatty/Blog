"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  // const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();
  
  const handleChangeMode = () => {
    theme == "dark" ? setTheme('light') : setTheme("dark")
  }



  return (
    <div className='bg-white dark:bg-darkGray  ml-auto w-[42px] h-[24px] border-gray-200 border-[1.5px] rounded-lg flex items-center justify-center p-2 relative cursor-pointer text-sm dark:border-white/10' onClick={handleChangeMode} aria-label="change-theme">
      <div>🌙</div>
      <div>🔆</div>
      <div
        className='w-[18px] h-[18px] bg-lightBlue rounded-full absolute '
        style={theme === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

