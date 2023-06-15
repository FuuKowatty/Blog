import {getFormattedDate} from "@/api/getFormatedDate"
import { getPostData, getSortedPostsData } from "@/api/posts"
import { notFound } from 'next/navigation'
import Link from "next/link"
import Author from "@/components/Author"

type Props = {
    params: {
        postId: string,
    }
}

export default async function PostPage({params : {postId}}: Props) {

    const posts = getSortedPostsData()


    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="max-w-[680px] m-auto">
            <article>
                <h1 className="">{title}</h1>
                <Author pubDate={pubDate}/>
                <section className="text-lg" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
            <div className="my-4">
                <Link href="/"><span className="border-gray-200 border-[1px] rounded-md py-1 px-2 bg-secondary">← Back to home</span></Link>
            </div>
        </main>
    )
}


