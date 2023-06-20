import Link from "next/link"


type ButtonProps = {
  children: React.ReactNode,
  openInNewTab?: boolean,
  href: string,
}

export function ButtonLink({href, openInNewTab, children} : ButtonProps) {

  const linkProps = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} role="button" aria-label="button-header" className="p-3 bg-lightBlue/10 dark:bg-darkBlue rounded-md text-lightBlue text-base min-w-[128px] flex justify-center items-center gap-1 hover:bg-lightBlue hover:text-white dark:hover:bg-lightBlue transition-colors duration-300 ease-in-out" {...linkProps}>
        {children}
    </Link>
  )
}
