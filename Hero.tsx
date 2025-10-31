
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {ChevronDown, BookOpen, Sparkles, Github} from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = '안녕하세요! 개발을 배우는 대학생입니다 🎓'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6 shadow-2xl"
          >
            <BookOpen size={40} className="text-white" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-blue-400"
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          컴퓨터공학과 재학생으로, 웹 개발과 프로그래밍을 배우고 있습니다. 
          매일 새로운 것을 배우며 성장하고 있어요! 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="flex items-center">
              <Sparkles size={20} className="mr-2" />
              저에 대해 알아보기
            </span>
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            <span className="flex items-center">
              <Github size={20} className="mr-2" />
              프로젝트 보기
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
            <span className="text-sm text-gray-300">현재 배우는 중:</span>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">JavaScript</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Node.js</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
