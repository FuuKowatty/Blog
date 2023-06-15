import {getFormattedDate} from "@/api/getFormatedDate"
import Image from "next/image"
import Link from "next/link"

type Props = {
    post: BlogPost
}

export default function Post({ post }: Props) {
    const { id, title, date, image } = post
    const formattedDate = getFormattedDate(date)
    return (
        <li>
            <div className="mt-4 w-full m-auto text-2xl flex flex-col items-center px-4">
                <div className="relative w-full h-[280px] bg-gray-200 dark:bg-white/5">
                    <Image src={image} alt={title + ' image'} fill={true} className="object-contain" />
                </div>
                <p className="text-sm mt-1 text-left w-full">{formattedDate}</p>
                <Link className="underline hover:text-black/70 dark:hover:text-white/70" href={`/posts/${id}`}>{title}</Link>
            </div>
        </li>
    )
}