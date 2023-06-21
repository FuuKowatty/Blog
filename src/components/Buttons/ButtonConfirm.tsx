

type ButtonProps = {
  children: React.ReactNode,
  href?: any,
  download?: boolean,
}

export function ButtonConfirm({children, href} : ButtonProps) {
  return (
    <button aria-label="button-confirm"
    className="px-4 py-2 bg-lightBlue font-bold rounded-md text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out flex gap-1 items-center w-min">{children}</button>
  )
}
