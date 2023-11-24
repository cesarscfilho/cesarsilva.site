
import Link from "next/link";

interface ProjectProps {
    title: string;
    description: string;
    links: {
      urlGithub: string;
      url: string;
    }
}

export const Project = ({ title, description, links }: ProjectProps) => {
    return (
        <li
        className="rounded-md border bg-white border-gray-300 list-none"
      >
        <div className="p-6 hover:border-gray-400 rounded-sm ">
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-medium">{title}</h4>
              <p className="line-clamp-2">{description}</p>
            </div>
            <div className="flex-col sm:flex-row gap-2 mt-4 flex items-start sm:items-center justify-center sm:justify-between">
              <div className="flex items-center justify-start gap-4">
                <Link target="_blank" className="text-primary underline-offset-4 hover:underline" href={links.urlGithub}>
                  GitHub
                </Link>
                <Link target="_blank" className="text-primary underline-offset-4 hover:underline" href={links.url}>
                  Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
}