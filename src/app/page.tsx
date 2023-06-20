import { getSortedPostsData } from "@/lib/posts"
import { Post } from "@/components/Post"
import { ButtonLink } from "@/components/Buttons/ButtonLink"
import { HiOutlineExternalLink } from 'react-icons/hi'
import { BsMedium } from 'react-icons/bs'
import { NewsLetter } from "@/components/NewsLetter"



export function generateMetadata() {
  return {
    title: 'MyBlog - Home',
    description: 'blog page about my passion'
  }
}

export default function Home() {
  const posts = getSortedPostsData()
  
  return (
    <>
      <header className="m-auto max-w-[880px] text-3xl font-bold mt-[64px] px-4">
        Hi 👋🏻 I&apos;m Bartosz, and this is my blog. <br />
        <span className="text-silver dark:text-lightGray/60">Here, I share through my writing my experience as passionate of frontend and everything I&apos;m learning about on html, css, js or even React.</span>
        <div className="flex gap-2 w-full justify-center md:justify-start mt-4 ">
          <ButtonLink href={'/about'}>About Me <HiOutlineExternalLink className="inline"/></ButtonLink>
          <ButtonLink openInNewTab={true} href='https://medium.com/@FuuK'>@FuuK <BsMedium className="inline"/></ButtonLink>
        </div>
      </header>
      <main className="m-auto 2xl:max-w-[1280px] px-4">
            <NewsLetter />
            <section className="w-full mt-24">
              <h1>Posts</h1>
                <div className="mt-8 grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
                  {posts.map(post => (
                      <Post key={post.id} post={post} />
                  ))}
                </div>
            </section>
        </main>
    </>
  )
}

