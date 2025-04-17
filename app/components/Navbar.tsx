"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm px-6 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-xl font-bold text-gray-900 dark:text-white"
      >
        Rukshan Pokharel
      </Link>
      <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-blue-600 transition"
          >
            {link.label}
          </a>
        ))}
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
