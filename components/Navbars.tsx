// 'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const logoRef = useRef(null)
  const menuItemsRef = useRef([])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    {
      name: 'Services',
      href: '#services',
      subItems: ['Web Development', 'UI/UX Design', 'Mobile Apps']
    },
    { name: 'Blog', href: '#blog' },
  ]

  useEffect(() => {
    gsap.from(logoRef.current, {
      duration: 1,
      x: -50,
      opacity: 0,
      ease: 'power3.out'
    })

    gsap.from(menuItemsRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'power3.out'
    })
  }, [])

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <nav className="fixed left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0" ref={logoRef}>
            <a href="#" className="text-xl z-50 font-bold text-white">
              John Doe
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.a
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown className="inline-block ml-1 w-4 h-4" />
                    )}
                  </motion.a>
                  {item.subItems && (
                    <motion.div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.subItems.map((subItem) => (
                          <motion.a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            whileHover={{ backgroundColor: '#f3f4f6', x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {subItem}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 blur-lg -z-10"
        style={{ filter: 'blur(100px)' }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm -z-10"></div>
    </nav>
  )
}