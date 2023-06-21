"use client"
import { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import lightTheme from "react-syntax-highlighter/dist/esm/styles/prism/coldark-cold"
import darkTheme from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import {FaRegCopy} from 'react-icons/fa'
import { ThemeContext } from '@/context/ThemeContext';

export default function CodeCopyBtn({ children }:any) {
  const [isCoping, setIsCoping] = useState(false);
  const handleClick = (e:any) => {
      navigator.clipboard.writeText(children[0].props.children[0]);
      setIsCoping(true);
      setTimeout(() => {
        setIsCoping(false);
      }, 500);
  }
  return (
      <button className="absolute right-[10px] top-[10px] cursor-pointer p-2 bg-darkGray text-white hover:bg-darkBlue flex items-center text-sm rounded-md"
      onClick={handleClick} aria-label='copy-to-clipboard'
      >
        {!isCoping 
          ? <><FaRegCopy/> Copy Code</>
          : <span className='min-w-[94px]'>Copied!</span>}
      </button>
  )
}

export function FormattedArticle({contentHtml} : any) {

  const {theme} = useContext(ThemeContext)

  const Pre = ({ children }:any) => <pre className="relative">
  <CodeCopyBtn>{children}</CodeCopyBtn>
  {children}
</pre>
  return (
    <ReactMarkdown
    components={{
      pre: Pre,
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <SyntaxHighlighter language={match[1]}
            style={theme === 'light' ? lightTheme : darkTheme}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }}
  >
    {contentHtml}
  </ReactMarkdown>
  )
}