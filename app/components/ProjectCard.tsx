import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-blue-100 dark:bg-blue-800/20 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
