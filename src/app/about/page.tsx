import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Header } from "@/components/Header";
import { BsMedium } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { CgSoftwareDownload } from "react-icons/cg";
import { ButtonConfirm } from "@/components/Buttons/ButtonConfirm";
import { ContactItem } from "@/components/ContactItem";
import { BackButton } from "@/components/Buttons/BackButton";
import Resume from 'resume.pdf'

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
          <ButtonLink openInNewTab={true} href="https://medium.com/@FuuK">
            @FuuK <BsMedium className="inline" />
          </ButtonLink>
        </div>
      </Header>
      <section className="bg-lightGray/50 dark:bg-darkBlue mt-24 py-12 px-4">
        <h1>About Me</h1>
        <div className="max-w-[920px] m-auto">
          <div className="mt-6 text-lg leading-8 grid gap-12 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col gap-6 md:border-r-[1px] md:border-lightBlue md:pr-6">
              <p>
                I am a passionate frontend enthusiast who started exploring the
                world of web development in 2020. Frontend development has
                captured my interest due to its ability to create visually
                appealing and high-performance applications. I particularly
                enjoy designing user interfaces that are both aesthetically
                pleasing and user-friendly. In addition to my frontend skills, I
                have a background in IT Technician work, which has provided me
                with valuable knowledge in data science.
              </p>
              <p>
                As an IT Technician, I have a strong foundation in data science.
                Combining this expertise with my fresh and modern frontend
                knowledge, I aim to create the best possible applications.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:border-l-[1px] md:border-lightBlue md:pl-6">
              <p>
                In my journey as a frontend developer, I have developed a keen
                interest in emerging technologies such as esports and artificial
                intelligence (AI). These exciting realms have caught my
                attention, and I am constantly seeking opportunities to
                incorporate them into my projects. By staying up to date with
                the latest advancements in frontend development and exploring
                the potential of AI, I aspire to push the boundaries of what is
                possible and create innovative applications that leverage these
                cutting-edge technologies.
              </p>
              <p>
                By staying up to date with the latest advancements in frontend
                development and exploring the potential of AI, I aspire to push
                the boundaries of what is possible and create innovative
                applications.
              </p>
            </div>
          </div>
          <span className="mt-6 block">
            <ButtonConfirm href="/_documents/Resume.pdf">
              Resume.pdf <CgSoftwareDownload size="1.25em" />
            </ButtonConfirm>
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
          href="https://medium.com/@FuuK"
          value="@FuuK"
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
