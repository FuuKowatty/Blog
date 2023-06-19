import { getSortedPostsData } from "@/lib/posts"
import { Post } from "@/components/Post"
import { Button } from "@/components/Button"
import { HiOutlineExternalLink } from 'react-icons/hi'
import { BsMedium } from 'react-icons/bs'
import Image from "next/image"
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
      <header className="m-auto max-w-[880px] text-3xl font-bold mt-[64px]">
        Hi 👋🏻 I&apos;m Bartosz, and this is my blog. <br />
        <span className="text-silver dark:text-lightGray/60">Here, I share through my writing my experience as passionate of frontend and everything I&apos;m learning about on html, css, js or even React.</span>
        <div className="flex gap-2 w-full justify-start mt-4 ">
          <Button>About Me <HiOutlineExternalLink className="inline"/></Button>
          <Button>@FuuK <BsMedium className="inline"/></Button>
        </div>
      </header>
      <main className="mx-auto max-w-2xl 2xl:max-w-[1280px]">
            <NewsLetter />
            <section className="w-full mt-24">
              <h1>Posts</h1>
                <div className="grid 2xl:grid-cols-2 gap-3">
                  {posts.map(post => (
                      <Post key={post.id} post={post} />
                  ))}
                </div>
            </section>
        </main>
    </>
  )
}

