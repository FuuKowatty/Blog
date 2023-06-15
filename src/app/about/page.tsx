import { ContactItem } from "@/components/ContactItem";
import Image from "next/image";


export default function About() {
  return (
    <div className="w-full max-w-[640px] m-auto grid place-items-center px-4 mt-4 xl:mt-[120px] gap-2 xl:grid-cols-2 xl:grid-rows-2 xl:max-w-[1000px]">
      <div className="relative w-[250px] sm:w-[370px] h-[250px] sm:h-[370px] rounded-full border-2 border-gray-200 overflow-hidden col-span-1 row-span-2">
        <Image 
          src='https://st4.depositphotos.com/11634452/21365/v/600/depositphotos_213659488-stock-illustration-picture-profile-icon-human-people.jpg'
          alt="profile picture"
          fill={true}
        />
      </div>
      <div className="xl:self-end">
      <span className="font-bold text-3xl">FuuKowatty</span>
      <p className="text-lg leading-5">
        Hello!
        With one year of frontend learning under my belt, I have a strong 
        passion for both acquiring knowledge and teaching others. I enjoy 
        sharing what I learn through writing articles on Medium, aiming to 
        inspire and support fellow learners in their journey.
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
    </div>
  )
}
