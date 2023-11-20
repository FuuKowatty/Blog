import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Header } from "@/components/Header";
import { BsMedium } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { ContactItem } from "@/components/ContactItem";
import { BackButton } from "@/components/Buttons/BackButton";
import { ButtonResume } from "@/components/Buttons/ButtonResume";

export function generateMetadata() {
  return {
    title: "MyBlog - About Me",
  };
}

export default function About() {
  return (
    <>
      <Header>
        Hello! ¡Holá! Bonjour! I&apos;m Bartosz, a Polish 🇵🇱 based programming
        enthusiast 👨‍💻 and currently React and Typescript fan 📣.
        <div className="flex gap-2 w-full justify-center md:justify-start mt-4 ">
          <ButtonLink href={"/"}>
            Home <AiFillHome className="inline" />
          </ButtonLink>
          <ButtonLink openInNewTab={true} href="https://medium.com/@FuuKowatty">
            @FuuKowatty <BsMedium className="inline" />
          </ButtonLink>
        </div>
      </Header>
      <section className="bg-lightGray/50 dark:bg-darkBlue mt-24 py-12 px-4">
        <h1>About Me</h1>
        <div className="max-w-[920px] m-auto">
          <div className="mt-6 text-lg leading-8 grid gap-12 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col gap-6 md:border-r-[1px] md:border-lightBlue md:pr-6">
              <p>
                I am a passionate web developer enthusiast who started exploring this world in 2020. 
                Web development has captured my interest because of its ability to create visually effects
                and high performance applications. I particularly
                enjoy designing user interfaces that are both aesthetically
                and user friendly as well as creating super clean backend structures
                due to SOLID rules.
              </p>
              <p>
                As an IT technician, I have a strong foundation in computer science.
                Combining this expertise with my fresh and modern web development skills I aim to create the best possible applications.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:border-l-[1px] md:border-lightBlue md:pl-6">
              <p>
                I am always up to date with the latest technologies because being familiar with it is really important thing for me.
                I always try to describe my project and solve people's problems through my development skills. Java is really fascinating for me because it is really deep coded language with a lot of optimisation of cpp problems.
              </p>
              <p>
                  I am currently expanding my Java knowledge and regularly creating new projects. 
                  In addition, I am committed to writing clean code and ensuring its readability to the best of my ability.
              </p>
            </div>
          </div>
          <span className="mt-6 block">
            <ButtonResume />
          </span>
        </div>
      </section>
      <section className="mt-24 max-w-[920px] m-auto px-4">
        <h1>Contact</h1>
        <span className="text-xl mt-12 mb-6 block">
          You can contact me through my socials:
        </span>
        <ContactItem
          name="e-mail"
          href="mailto:bartoszmech01@gmail.com"
          value="bartoszmech0@gmail.com"
        />
        <ContactItem
          name="medium"
          href="https://medium.com/@FuuKowatty"
          value="@FuuKowatty"
        />
        <ContactItem
          name="github"
          href="https://github.com/FuuKowatty"
          value="@FuuKowatty"
        />
      </section>
      <BackButton />
    </>
  );
}
