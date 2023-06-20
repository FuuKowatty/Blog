"use client"
import { useRouter } from "next/navigation";
import {IoIosArrowBack} from 'react-icons/io'

export function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}><span className="fixed top-[100px] left-2 border-lightGray dark:border-silver border-[1px] rounded-md py-1 px-2 bg-white dark:bg-gray-900  transition-colors duration-300 ease-in-out flex items-center opacity-75 hover:opacity-100"><IoIosArrowBack size={'0.9em'}/> Back to home</span></button>
  )
}
