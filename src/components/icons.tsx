import { cn } from "@/lib/utils";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export const Icons = {
  works: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >

      <path className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" d="M2.75 9.75a3 3 0 013-3h12.5a3 3 0 013 3v8.5a3 3 0 01-3 3H5.75a3 3 0 01-3-3v-8.5z" />
      <path className="stroke-zinc-400 dark:stroke-zinc-500" d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 001.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 012-2h2.5a2 2 0 012 2V6.5" />
    </svg>
  ),
  email: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6 flex-none"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 013-3h12.5a3 3 0 013 3v8.5a3 3 0 01-3 3H5.75a3 3 0 01-3-3v-8.5z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M4 6l6.024 5.479a2.915 2.915 0 003.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  ),
  menuplogo: (props: IconProps) => (
    <svg
      {...props}
      width="191"
      height="191"
      viewBox="0 0 191 191"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-10 w-10 rounded-lg bg-black text-secondary')}
    >
      <g transform="translate(25, 58) scale(1.7)">
        <g fill="#fff" fillRule="nonzero">
          <g>
            <path
              shapeRendering="geometricPrecision"
              d="M72.453 19.468a10.11 10.11 0 00-3.63.68l-.51.21c-.56.25-1 .49-1.42.27a1.31 1.31 0 01-.18-.12 1.24 1.24 0 01-.23-1 3.48 3.48 0 01.95-1.5l.57-.56.51-.5a10 10 0 00-14.06-14.2l-13.73 13.53c-.2.18-.38.34-.55.47a2.46 2.46 0 01-.44.31h-.05a1.52 1.52 0 01-1.42.13 1.39 1.39 0 01-.18-.12 1.24 1.24 0 01-.23-1 5.87 5.87 0 01.6-1.49l.05-.09.1-.18a10 10 0 00-15.91-11.56l-20.24 19.93a10 10 0 0014 14.2l15.16-14.9c.47-.42 1.36-1.09 2-.67.07.041.137.088.2.14a1.3 1.3 0 01.26.4 1 1 0 010 .46 3.09 3.09 0 01-.62 1.18l-.13.16a8.93 8.93 0 00-2.19 5.25 11.21 11.21 0 003.05 7.82c3.866 3.904 10.158 3.958 14.09.12l12.8-12.59c.5-.44 1.33-1 2-.63l.12.08a1 1 0 01.17.19v.07c.153.282.189.612.1.92a3.82 3.82 0 01-.16.43 10.14 10.14 0 109.15-5.84z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  logoempty: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><polyline points="10 2 10 10 13 7 16 10 16 2" /></svg>
  )

}