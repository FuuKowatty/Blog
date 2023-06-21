import { CgSoftwareDownload } from "react-icons/cg";

export function ButtonResume() {
  return (
    <a target="_blank" href="/_documents/resume.pdf" role="button" aria-label="button-confirm"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-lightBlue font-bold rounded-md text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out flex gap-1 items-center w-min">
         Resume.pdf <CgSoftwareDownload size="1.25em" />
    </a>
  )
}
