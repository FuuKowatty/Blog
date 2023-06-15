import { getSortedPostsData } from "@/api/posts"
import Post from "@/components/Post"

export function generateMetadata() {
  return {
    title: 'MyBlog - Home',
    description: 'blog page about my passion'
  }
}

export default function Home() {

  const posts = getSortedPostsData()

  return (
    <main>
      <section className="mt-6 mx-auto max-w-2xl 2xl:max-w-[1280px]">
            <h1 className="text-4xl font-bold px-4 text-center my-2">Posts</h1>
            <ul className="w-full grid 2xl:grid-cols-2 gap-3">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </ul>
        </section>
    </main>
  )
}