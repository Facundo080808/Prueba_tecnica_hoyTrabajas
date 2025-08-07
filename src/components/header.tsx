'use client'

import Link from 'next/link'
import ThemeToggle from './UI/themeToggle'

export function Header() {
  

  return (
    <>
      <style>{`
        nav {
          animation: nav-shadow 1s linear both;
          animation-timeline: scroll();
          animation-range: 0 100px;
        }

        @keyframes nav-shadow {
          0% {
            background-color: rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                        0 4px 6px -4px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>

      <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 text-black dark:text-white">
        <nav className="flex px-3 text-sm font-medium rounded-full justify-center items-center gap-4">
          <Link
            href="/"
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/films"
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            Ver Películas
          </Link>

          <Link
            href="/characters"
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            Ver Personajes
          </Link>

          <ThemeToggle/>
        </nav>
      </header>
    </>
  )
}
