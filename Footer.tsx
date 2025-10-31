
import React from 'react'
import { motion } from 'framer-motion'
import {Heart, ArrowUp, BookOpen, Coffee} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white mb-4 flex items-center"
            >
              <BookOpen size={24} className="mr-2 text-blue-400" />
              대학생 개발자
            </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              컴퓨터공학과 재학생으로, 웹 개발을 배우며 성장하고 있습니다. 
              매일 새로운 것을 배우는 재미에 빠져 있어요! 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              빠른 링크
            </h4>
            <ul className="space-y-2">
              {[
                { name: '홈', id: 'hero' },
                { name: '소개', id: 'about' },
                { name: '기술', id: 'skills' },
                { name: '프로젝트', id: 'projects' },
                { name: '연락처', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              학습 현황 📚
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <BookOpen size={16} className="mr-2 text-blue-400" />
                <span>컴퓨터공학과 3학년</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Coffee size={16} className="mr-2 text-green-400" />
                <span>매일 2-3시간 공부</span>
              </div>
              <div className="text-gray-300">
                <p className="text-sm">📧 student@university.ac.kr</p>
                <p className="text-sm">🌍 서울, 대한민국</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="border-t border-slate-800 pt-6 mb-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              현재 학습 목표 🎯
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                React 마스터하기
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                백엔드 API 만들기
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                팀 프로젝트 참여
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                오픈소스 기여
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 text-center md:text-left mb-4 md:mb-0"
            >
              © 2025 대학생 개발자 포트폴리오. 
              <span className="inline-flex items-center mx-2">
                Made with <Heart size={16} className="text-red-400 mx-1" /> and lots of 
                <Coffee size={16} className="text-yellow-400 mx-1" />
              </span>
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



/**
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="https://lumi.new/lumi.ing/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="컴퓨터공학과 대학생의 개발자 포트폴리오 - 웹 개발을 배우며 성장하는 예비 개발자" />
    <meta name="keywords" content="대학생, 개발자, 포트폴리오, 컴퓨터공학과, 웹개발, React, JavaScript, 신입개발자" />
    <meta name="author" content="대학생 개발자" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourusername.github.io/" />
    <meta property="og:title" content="대학생 개발자 포트폴리오" />
    <meta property="og:description" content="컴퓨터공학과 재학생으로 웹 개발을 배우며 성장하는 예비 개발자의 포트폴리오입니다." />
    <meta property="og:image" content="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://yourusername.github.io/" />
    <meta property="twitter:title" content="대학생 개발자 포트폴리오" />
    <meta property="twitter:description" content="컴퓨터공학과 재학생으로 웹 개발을 배우며 성장하는 예비 개발자의 포트폴리오입니다." />
    <meta property="twitter:image" content="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200" />
    
    <title>대학생 개발자 포트폴리오 - 함께 성장해요!</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
*/
