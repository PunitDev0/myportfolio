'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, Layers, MessageCircle, Settings, User, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

export default function SidebarWithVisibleSocial() {
  const [isOpen, setIsOpen] = useState(false)

  const sidebarVariants = {
    open: { width: '300px', transition: { duration: 0.3, ease: 'easeInOut' } },
    closed: { width: '80px', transition: { duration: 0.3, ease: 'easeInOut' } }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Layers, label: 'Projects' },
    { icon: MessageCircle, label: 'Messages' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' }
  ]

  const skills = ['TypeScript', 'React', 'Node.js', 'Express', 'Vue.js', 'Next.js']

  const socialMedia = [
    { icon: Github, label: 'GitHub', url: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com' }
  ]

  return (
    <motion.div
      className="h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white p-4 overflow-hidden flex flex-col backdrop-blur-md bg-opacity-30 rounded-lg left-0 top-0 z-50" // Fixed position
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 transition-transform duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {isOpen ? 'Earth Dev' : 'ED'}
        </motion.h1>
      </div>

      <motion.div
        className="mb-6 flex-shrink-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <img
          src="/placeholder.svg?height=100&width=100"
          alt="Portfolio"
          className="w-20 h-20 rounded-full mx-auto mb-2 border-2 border-purple-500 transition-transform duration-300 transform hover:scale-110"
        />
        {isOpen && (
          <motion.p
            className="text-center text-sm transition-transform duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Tech enthusiast with a passion for development
          </motion.p>
        )}
      </motion.div>

      <nav className="mb-6 flex-grow">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-4 p-2 rounded-lg hover:bg-[#0f3460] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05, x: 10, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-6 h-6 text-blue-400" />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.label}
                </motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-lg font-semibold mb-2 text-purple-400">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-[#0f3460] rounded-full text-xs transition-transform duration-300 transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        className="mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg font-semibold mb-2 text-purple-400 text-center">Connect</h2>
        <div className={`flex ${isOpen ? 'flex-wrap justify-center' : 'flex-col items-center'} gap-4`}>
          {socialMedia.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Visit ${item.label}`}
            >
              <item.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="mt-6 text-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          © 2023 Earth Dev. All rights reserved.
        </motion.div>
      )}
    </motion.div>
  )
}
