"use client"

import Image from "next/image";
import { Modal } from "./Modal";
import { ButtonConfirm } from "./Buttons/ButtonConfirm";
import { useModal } from "@/hooks/useModal";
import { MouseEvent, useRef } from "react";

export function NewsLetter() {
  const formElement = useRef<HTMLFormElement>(null)
  const { isModalOpen, isClosing, openModal, closeModal } = useModal()
  const handleCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    formElement?.current?.reset()
    closeModal();
  }


  return (
    <section className="max-w-[880px] m-auto md:border-[1px] md:border-lightGray md:dark:border-silver mt-24 md:p-12">
      <h1>Newsletter</h1>
      <Image
        src="https://svgshare.com/i/uRE.svg"
        alt="newsletter-logo"
        width={150}
        height={50}
        className="dark:invert-[100%] my-8 m-auto"
      />
      <p className="text-2xl leading-10 font-[600]">
        Get a behind the scenes look at what I&apos;m currently learning,
        exploring, and creating.
      </p>
      <p className="text-xl text-silver mt-8 leading-8">
        Subscribe to my newsletter to receive a monthly digest containing:
      </p>
      <ul className="mt-4 text-xl text-silver leading-8 list-image-[url('/right-arrow.svg')] ml-[20px] grid gap-2">
        <li>
          Deep dives into some of my ideas and secret projects that will inspire
          you
        </li>
        <li>
          Exclusive previews of upcoming articles on web development,
          React, Java and more.
        </li>
        <li>
          Some of my favorite resources and tips on web development or
          anything I&apos;m currently interested in to further expand your
          skillset as a developer
        </li>
      </ul>
      <form className="mt-8 flex gap-2" onSubmit={openModal} ref={formElement}>
          <input type="email" aria-label='email'  className="dark:bg-darkGray border-[1px] border-silver rounded-md p-2 w-full" placeholder="example@gmail.com" required/>
          <ButtonConfirm>Subscribe!</ButtonConfirm>
      </form>
      {isModalOpen && 
        <Modal 
          title='Subscribed!'
          description='Congratulations! You have subscribed my newsletter'
          onClose={handleCloseModal} 
          isClosing={isClosing}
        />}
    </section>
  );
}
