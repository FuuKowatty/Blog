import Image from "next/image";


export default function Author({pubDate} : {pubDate: string}) {
  return (
    <div className="flex gap-2 items-center my-4">
    <Image src='https://miro.medium.com/v2/resize:fill:44:44/1*dmbNkD5D-u45r44go_cf0g.png' alt='profile-picture' width={44} height={44} className="rounded-full border-gray-200 border-[1px]"/>
    <div className="leading-4">
        <span className="font-bold">FuuKowatty</span> 
        <span className="block text-sm">
            {pubDate}
        </span>
    </div>
</div>
  )
}
