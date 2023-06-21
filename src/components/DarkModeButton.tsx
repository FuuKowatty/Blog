"use client"

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";

export function DarkModeToggle() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  // const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const element = document.documentElement;
      theme === 'dark' 
        ? element.classList.add('dark') 
        : element.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='bg-white dark:bg-darkGray  ml-auto w-[42px] h-[24px] border-gray-200 border-[1.5px] rounded-lg flex items-center justify-center p-2 relative cursor-pointer text-sm dark:border-white/10'onClick={()=> toggleTheme()}>
      <div>🌙</div>
      <div>🔆</div>
      <div
        className='w-[18px] h-[18px] bg-lightBlue rounded-full absolute '
        style={theme === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

