
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {ExternalLink, Github, Eye, Code, Star} from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce 플랫폼',
      description: '현대적인 온라인 쇼핑몰 플랫폼으로, 사용자 친화적인 인터페이스와 강력한 관리 시스템을 제공합니다.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '팀 협업을 위한 직관적인 작업 관리 도구입니다. 실시간 업데이트와 다양한 프로젝트 뷰를 지원합니다.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보와 예보를 제공하는 대시보드입니다. 직관적인 데이터 시각화로 정보를 쉽게 파악할 수 있습니다.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'frontend',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: '개발자를 위한 기술 블로그 플랫폼입니다. 마크다운 에디터와 코드 하이라이팅을 지원합니다.',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    },
    {
      id: 5,
      title: 'API Gateway',
      description: '마이크로서비스 아키텍처를 위한 API 게이트웨이입니다. 인증, 레이트 리미팅, 로깅 기능을 제공합니다.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: '안전하고 직관적인 모바일 뱅킹 애플리케이션입니다. 생체인증과 실시간 알림을 지원합니다.',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    }
  ]

  const filters = [
    { key: 'all', label: '전체' },
    { key: 'featured', label: '주요 프로젝트' },
    { key: 'fullstack', label: '풀스택' },
    { key: 'frontend', label: '프론트엔드' },
    { key: 'backend', label: '백엔드' },
    { key: 'mobile', label: '모바일' }
  ]

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    if (filter === 'featured') return project.featured
    return project.category === filter
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              프로젝트 포트폴리오
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              다양한 분야에서 진행한 프로젝트들입니다. 
              각 프로젝트는 실제 문제를 해결하고 사용자에게 가치를 제공하는 것을 목표로 했습니다.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          {/* Filter buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {filterOption.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -10 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-400 transition-all duration-300"
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star size={14} className="mr-1" />
                        추천
                      </div>
                    </div>
                  )}

                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Eye size={20} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-purple-500 hover:text-white transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          <span className="text-sm">데모</span>
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <Code size={16} className="mr-1" />
                          <span className="text-sm">코드</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                선택한 카테고리에 해당하는 프로젝트가 없습니다.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
