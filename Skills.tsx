
    
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const skills = [
    {
      category: "프론트엔드 📱",
      items: [
        { name: "HTML/CSS", level: 70, color: "from-orange-400 to-red-500" },
        { name: "JavaScript", level: 60, color: "from-yellow-400 to-orange-500" },
        { name: "React", level: 50, color: "from-blue-400 to-cyan-500" },
        { name: "TypeScript", level: 40, color: "from-blue-500 to-indigo-500" }
      ]
    },
    {
      category: "백엔드 ⚙️",
      items: [
        { name: "Node.js", level: 45, color: "from-green-400 to-emerald-500" },
        { name: "Express", level: 35, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 30, color: "from-green-500 to-teal-500" },
        { name: "MySQL", level: 40, color: "from-blue-500 to-blue-600" }
      ]
    },
    {
      category: "도구 & 기타 🛠️",
      items: [
        { name: "Git/GitHub", level: 55, color: "from-purple-400 to-pink-500" },
        { name: "VS Code", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Figma", level: 35, color: "from-pink-400 to-red-500" },
        { name: "Photoshop", level: 25, color: "from-blue-500 to-purple-500" }
      ]
    }
  ]

  const learningGoals = [
    { skill: "React 심화", progress: 60, target: "컴포넌트 최적화 마스터" },
    { skill: "백엔드 API", progress: 40, target: "RESTful API 구축" },
    { skill: "데이터베이스", progress: 35, target: "효율적인 쿼리 작성" },
    { skill: "배포 & DevOps", progress: 20, target: "자동화 배포 구축" }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              배우고 있는 기술들 🚀
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              아직 배우는 단계이지만, 꾸준히 성장하고 있어요!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Goals */}
          <motion.div variants={itemVariants} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              현재 학습 목표 🎯
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {learningGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-700/50 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">
                      {goal.skill}
                    </h4>
                    <span className="text-sm text-blue-400 font-medium">
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2 mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${goal.progress}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.2 }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                    />
                  </div>
                  <p className="text-gray-300 text-sm">
                    목표: {goal.target}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Study Plan */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
              <span className="text-lg font-semibold text-white">
                📚 매일 공부 시간:
              </span>
              <span className="text-2xl font-bold text-blue-400">
                2-3시간
              </span>
              <span className="text-lg font-semibold text-white">
                💪 목표: 꾸준한 성장!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {ExternalLink, Github, Calendar, BookOpen, Calculator, ShoppingCart} from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "나의 첫 웹사이트 🌟",
      description: "HTML, CSS, JavaScript로 만든 첫 번째 개인 웹사이트입니다. 기본적인 웹 개발 개념을 배우며 만들었어요!",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <BookOpen size={24} />,
      status: "완료",
      learned: "HTML 구조, CSS 스타일링, DOM 조작의 기초를 배웠습니다.",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "간단한 계산기 🧮",
      description: "JavaScript로 만든 계산기 앱입니다. 함수와 이벤트 처리를 연습하기 위해 만들었어요!",
      image: "https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <Calculator size={24} />,
      status: "완료",
      learned: "함수 작성, 이벤트 리스너, 조건문 활용을 배웠습니다.",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "할 일 관리 앱 📝",
      description: "React로 만든 첫 번째 프로젝트입니다. 컴포넌트와 상태 관리를 배우며 만들었어요!",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "CSS", "Local Storage"],
      icon: <Calendar size={24} />,
      status: "진행 중",
      learned: "React 컴포넌트, useState, useEffect 훅을 배우고 있습니다.",
      github: "#",
      demo: "#"
    }
  ]

  const learningProjects = [
    {
      title: "쇼핑몰 만들기",
      description: "React와 Node.js를 사용한 풀스택 프로젝트",
      progress: 30,
      icon: <ShoppingCart size={20} />,
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "블로그 플랫폼",
      description: "개인 블로그를 만들어서 배운 내용 정리하기",
      progress: 15,
      icon: <BookOpen size={20} />,
      tech: ["Next.js", "Markdown", "CSS"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              나의 프로젝트들 💻
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              아직 초보지만 하나씩 만들어가고 있어요!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </motion.div>

          {/* Completed Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === '완료' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-blue-400 font-semibold mb-2">배운 점:</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {project.learned}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="flex items-center justify-center w-8 h-8 bg-slate-600 hover:bg-slate-500 rounded-full transition-colors"
                      >
                        <Github size={16} className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Projects */}
          <motion.div variants={itemVariants} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              현재 만들고 있는 프로젝트들 🚧
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {learningProjects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-700/50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        진행률: {project.progress}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-slate-600 rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${project.progress}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.3 }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                    />
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex flex-col items-center space-y-4 px-8 py-6 bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-xl border border-blue-500/20">
              <h4 className="text-xl font-bold text-white">
                앞으로의 목표 🎯
              </h4>
              <p className="text-gray-300 max-w-md">
                더 복잡한 프로젝트에 도전하고, 오픈소스에 기여하며, 
                실무에서 사용할 수 있는 실력을 키우고 싶어요!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

    
