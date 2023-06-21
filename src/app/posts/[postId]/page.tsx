import { getFormattedDate } from '@/lib/getFormatedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Author } from '@/components/Author';
import { BackButton } from '@/components/Buttons/BackButton';
import { FormattedArticle } from '@/components/FormattedArticle';


type Props = {
  params: {
    postId: string;
  };
};

export function generateMetadata({ params: { postId } }: Props) {
  return {
    title: `post/${postId}`,
  };
}


export default async function PostPage({ params: { postId } }: Props) {
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="max-w-[680px] m-auto mt-[60px] px-4">
      <article className='text-lg'>
        <h1 className="text-left">{title}</h1>
        <Author pubDate={pubDate} />
        {contentHtml && (
            <FormattedArticle contentHtml={contentHtml}/>
        )}

      </article>
      <BackButton />
    </main>
  ) as JSX.Element;
  
}

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}