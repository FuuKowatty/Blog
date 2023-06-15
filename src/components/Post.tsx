import getFormattedDate from "@/api/getFormatedDate"
import Link from "next/link"

type Props = {
    post: BlogPost
}

export default function Post({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-2xl">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}