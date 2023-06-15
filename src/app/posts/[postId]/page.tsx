import {getFormattedDate} from "@/api/getFormatedDate"
import { getPostData, getSortedPostsData } from "@/api/posts"
import { notFound } from 'next/navigation'
import Link from "next/link"
import Author from "@/components/Author"
import { BackButton } from "@/components/BackButton"

type Props = {
    params: {
        postId: string,
    }
}

export function generateMetadata({params : {postId}}: Props) {


    return {
      title: `post/${postId}`
    }
  }

export default async function PostPage({params : {postId}}: Props) {

    const posts = getSortedPostsData()


    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="max-w-[680px] m-auto mt-[60px]">
            <article>
                <h1 className="">{title}</h1>
                <Author pubDate={pubDate}/>
                <section className="text-lg" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
            <BackButton />
        </main>
    )
}

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}
