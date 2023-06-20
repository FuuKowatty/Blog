

export function Header({children} : {children:React.ReactNode}) {
  return (
    <header className="m-auto max-w-[880px] text-3xl font-bold mt-[64px] px-4" >
        {children}
    </header>
  )
}
