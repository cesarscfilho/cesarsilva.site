import { IconProps } from "@radix-ui/react-icons/dist/types"

export const Icons = {
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
  circle: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
}
