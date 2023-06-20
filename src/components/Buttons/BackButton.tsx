import Link from "next/link";

export function BackButton() {
  return (
    <div className="fixed top-[100px] left-2">
    <Link href="/"><span className="border-gray-200 border-[1px] rounded-md py-1 px-2 bg-white dark:bg-gray-900 hover:bg-secondary dark:hover:bg-white/5 transition-colors duration-300 ease-in-out">← Back to home</span></Link>
</div>
  )
}
