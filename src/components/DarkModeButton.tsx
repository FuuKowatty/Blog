"use client"

type Props = {
    mode: 'light' | 'dark';
    toggle: () => void;
}


export function DarkModeToggle({mode, toggle} : Props) {

  return (
    <div className='ml-auto w-[42px] h-[24px] border-gray-200 border-[1.5px] rounded-lg flex items-center justify-center p-2 relative cursor-pointer text-sm dark:border-white/10' onClick={toggle}>
      <div>🌙</div>
      <div>🔆</div>
      <div
        className='w-[18px] h-[18px] bg-[#53c28b] rounded-full absolute '
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

