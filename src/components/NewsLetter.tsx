import Image from "next/image";
import { AiOutlineArrowRight } from 'react-icons/ai';

export function NewsLetter() {
  return (
    <section className="max-w-[880px] m-auto p-12 border-[1px] border-lightGray mt-24">
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
          Exclusive previews of upcoming articles on frontend development,
          React, Shaders, React Three Fiber and more.
        </li>
        <li>
          Some of my favorite resources and tips on frontend development or
          anything I&apos;m currently interested in to further expand your
          skillset as a developer
        </li>
      </ul>
      <form className="mt-8 flex gap-2">
        <input type="email" aria-label='email'  className="dark:bg-darkGray border-[1px] border-silver rounded-md p-2 w-full" placeholder="example@gmail.com"/>
        <button className="px-4 py-2 bg-lightBlue font-bold rounded-md text-white">Subscribe!</button>
      </form>
    </section>
  );
}
