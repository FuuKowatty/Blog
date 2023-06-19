

export function Button({children} : {children: React.ReactNode}) {
  return (
    <button className="p-3 bg-lightBlue/10 dark:bg-darkBlue rounded-md text-lightBlue text-base min-w-[128px] flex justify-center items-center gap-1">
      {children}
    </button>
  )
}
