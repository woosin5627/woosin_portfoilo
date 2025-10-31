
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {Menu, X, Github, Linkedin, Mail, BookOpen} from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: '홈', id: 'hero' },
    { name: '소개', id: 'about' },
    { name: '기술', id: 'skills' },
    { name: '프로젝트', id: 'projects' },
    { name: '연락처', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold text-white flex items-center"
          >
            <BookOpen size={24} className="mr-2 text-blue-400" />
            대학생 개발자 포트폴리오
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-4 ml-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:student@university.ac.kr"
                className="text-gray-300 hover:text-white transition-colors"
                title="이메일"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="mailto:student@university.ac.kr"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
