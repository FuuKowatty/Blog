"use client"
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import lightTheme from "react-syntax-highlighter/dist/esm/styles/prism/one-light"
import darkTheme from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import {FaRegCopy} from 'react-icons/fa'
import { useTheme } from "next-themes";
import { LoadingCode } from './LoadingCode';

function CodeCopyBtn({ children }: {children: any}) {
  const [isCoping, setIsCoping] = useState(false);
  const handleClick = (e: any) => {
      navigator.clipboard.writeText(children[0].props.children[0]);
      setIsCoping(true);
      setTimeout(() => {
        setIsCoping(false);
      }, 500);
  }
  return (
      <button className="absolute right-[10px] top-[10px] cursor-pointer p-2 bg-darkGray text-white hover:bg-darkBlue flex items-center text-sm rounded-md z-10"
      onClick={handleClick} aria-label='copy-to-clipboard'
      >
        {!isCoping 
          ? <><FaRegCopy/> Copy Code</>
          : <span className='min-w-[94px]'>Copied!</span>}
      </button>
  )
}

export function FormattedArticle({contentHtml} : any) {

  const {theme} = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const Pre = ({ children }: {children: React.ReactNode}) => <pre className="relative border-[1px] border-lightGray dark:border-silver">
  <CodeCopyBtn>{children}</CodeCopyBtn>
  {children}
</pre>
  return (
    <ReactMarkdown
      components={{
        pre: Pre,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return (
            <>
              {!isMounted ? (
                <div className="bg-white dark:bg-[#282c34] h-64 w-full grid place-items-center">
                  <LoadingCode />
                </div>
              ) : match && !inline ? (
                <SyntaxHighlighter
                  language={match[1]}
                  style={theme === 'dark' ? darkTheme : lightTheme}
                  className='text-sm md:text-base'
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )}
            </>
          );
        },
      }}
    >
      {contentHtml}
    </ReactMarkdown>

  )
}