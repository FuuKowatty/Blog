import { BackButton } from "@/components/Buttons/BackButton";
import { ContactItem } from "@/components/ContactItem";
import Image from "next/image";

export function generateMetadata() {
  return {
    title: 'MyBlog - About Me'
  }
}

export default function About() {
  return (

    <>
    <h1 className="text-center mt-[60px]">About Me</h1>
    <section className="w-full max-w-[640px] m-auto grid place-items-center px-4 mt-4 xl:mt-[120px] gap-2 xl:grid-cols-2 xl:grid-rows-2 xl:max-w-[1000px]">
      <div className="relative w-[250px] sm:w-[370px] h-[250px] sm:h-[370px] rounded-full border-2 border-gray-200 overflow-hidden col-span-1 row-span-2 self-start">
        <Image 
          src='https://st4.depositphotos.com/11634452/21365/v/600/depositphotos_213659488-stock-illustration-picture-profile-icon-human-people.jpg'
          alt="profile picture"
          fill={true}
          sizes="(min-width: 640px) 370px, 250px"
        />
      </div>
      <div className="xl:self-end">
      <span className="font-bold text-3xl">FuuKowatty</span>
      <p className="text-lg leading-5">
        My name is Bartosz Mech, a passionate 20-year-old aspiring Frontend Developer. I have been immersed in the world of frontend development for over a year now, constantly honing my skills and expanding my knowledge.
        As I strive to become a Senior Frontend Developer, I&apos;m fueled by my unwavering passion and enthusiasm. I view each line of code as an opportunity to make a positive impact, to create delightful experiences for users, and to contribute to the ever-growing digital landscape.
      </p>
      </div>
      <div className="w-full xl:self-start">
        <span className="text-2xl font-bold">Contact Me</span>
        <ContactItem 
          name="e-mail"
          href="mailto:bartoszmech01@gmail.com"
          value="bartoszmech0@gmail.com"
        />
        <ContactItem 
          name="medium"
          href="https://medium.com/@FuuK"
          value="@FuuK"
        />
        <ContactItem 
          name="github"
          href="https://github.com/FuuKowatty"
          value="@FuuKowatty"
        />
        
      </div>
      <BackButton />
    </section>
    </>
  )
}
