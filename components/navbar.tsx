"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },  
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const [nav, setnav] = useState(false)
 useEffect(() => {
  window.onscroll = () => {
    if (window.scrollY > 237) {
      setnav(false)
    } else {
      setnav(true)

    }

    console.log(window.scrollY);
  }
 }, [])



  const neumorphicStyle = ""

  return (
    <nav className={`fixed left-0 backdrop-blur-lg border w-full rounded-lg transition-transform ${nav ? "translate-y-0" : "-translate-y-16"
    } z-50 ${neumorphicStyle} rounded-b-xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 font-bold text-2xl "
          >
            Portfolio
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <motion.div
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === item.path
                        ? "text-blue-600 "
                        : " hover:text-blue-600 hover:bg-blue-50"
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 ${neumorphicStyle} hover:text-blue-600 focus:outline-none`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${neumorphicStyle} rounded-b-xl`}>
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <motion.div
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.path
                        ? "text-blue-600 "
                        : "text-gray-700 hover:text-blue-600 "
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}