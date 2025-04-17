import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 mt-16">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/RukshanPokharel?tab=repositories"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/rukshan-pokharel-574676132"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaLinkedin className="text-xl" />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Rukshan Pokharel. All rights reserved.
      </p>
    </footer>
  );
}
