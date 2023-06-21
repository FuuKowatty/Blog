

type ButtonProps = {
  children: React.ReactNode,
  href?: any,
  download?: boolean,
}

export function ButtonConfirm({children, href} : ButtonProps) {
  return (
    <a target="_blank" href={href} role="button" aria-label="button-confirm"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-lightBlue font-bold rounded-md text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out flex gap-1 items-center w-min">{children}</a>
  )
}
