"use client"

import { MouseEvent, useEffect } from 'react'
import { ButtonConfirm } from './Buttons/ButtonConfirm'

type ModalProps = {
  title: string,
  description?: string,
  onClose: (event: MouseEvent<HTMLButtonElement>) => void,
  isClosing: boolean,
}

export function Modal({ title, description, onClose, isClosing }: ModalProps) {
  useEffect(() => {
    document.documentElement.style.overflowY = 'hidden'

    return () => {
      document.documentElement.style.overflowY = 'auto'
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-darkGray/50 flex items-center justify-center z-10 text-center'>
      <div className={`flex flex-col items-center bg-darkBlue p-4 rounded-md relative min-h-[200px] w-full mx-4 border-[1px] border-white sm:w-[500px] sm:p-6 sm:aspect-[2/1] ${isClosing ? 'animate-close' : 'animate-open'}`}>
        <h2 className='mb-2'>{title}</h2>
        <p className='text-silver'>{description && description}</p>
        <span onClick={onClose} className='mt-auto'>
          <ButtonConfirm>
            OK
          </ButtonConfirm>
        </span>
      </div>
    </div>
  )
}