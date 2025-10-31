
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {GraduationCap, BookOpen, Target, Coffee, Code2, Heart} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const learningStats = [
    { icon: <Code2 size={24} />, label: '코딩 시작한 지', value: '6개월' },
    { icon: <BookOpen size={24} />, label: '완료한 프로젝트', value: '3개' },
    { icon: <Coffee size={24} />, label: '마신 커피', value: '∞잔' },
    { icon: <Target size={24} />, label: '목표', value: '풀스택 개발자' }
  ]

  const interests = [
    {
      icon: <GraduationCap size={24} />,
      title: '학습하는 것',
      description: '새로운 기술을 배우고 실습하는 것을 좋아합니다. 매일 조금씩이라도 성장하려고 노력해요!'
    },
    {
      icon: <Code2 size={24} />,
      title: '코딩하는 것',
      description: '문제를 해결하고 아이디어를 코드로 구현하는 과정이 정말 재미있어요. 아직 많이 부족하지만요!'
    },
    {
      icon: <Heart size={24} />,
      title: '협업하는 것',
      description: '팀 프로젝트와 오픈소스 기여를 통해 다른 개발자들과 함께 성장하고 싶습니다.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              저를 소개합니다 👋
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <GraduationCap size={120} className="text-white" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <BookOpen size={24} className="text-yellow-900" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                컴퓨터공학과 대학생 🎓
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                안녕하세요! 저는 <span className="text-blue-400 font-semibold">컴퓨터공학과 3학년</span> 
                재학생으로, 웹 개발에 관심이 많은 예비 개발자입니다.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-green-400 font-semibold">JavaScript, React, Node.js</span>를 
                공부하고 있으며, 매일 새로운 것을 배우며 성장하고 있어요!
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                아직은 초보지만, <span className="text-blue-400 font-semibold">꾸준함</span>과 
                <span className="text-green-400 font-semibold"> 열정</span>으로 
                좋은 개발자가 되고 싶습니다! 💪
              </p>
            </motion.div>
          </div>

          {/* Learning Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              나의 개발 여정 📊
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {learningStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              제가 좋아하는 것들 ❤️
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600 hover:border-blue-400 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
                    {interest.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {interest.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
