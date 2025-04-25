"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink } from "lucide-react"

const ProjectsShowcase = ({ projects = [] }) => {
  // If no projects are provided, use these defaults
  const defaultProjects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with payment integration",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x300",
      links: {
        github: "https://github.com/yourusername/ecommerce",
        live: "https://ecommerce-demo.vercel.app",
      },
    },
    {
      title: "Social Media App",
      description: "A social networking platform with real-time chat",
      tags: ["React", "Socket.io", "MongoDB", "Tailwind"],
      image: "https://via.placeholder.com/400x300",
      links: {
        github: "https://github.com/yourusername/social-media",
        live: "https://social-media-demo.vercel.app",
      },
    },
    {
      title: "DSA Visualizer",
      description: "A web application to visualize data structures and algorithms",
      tags: ["JavaScript", "Data Structures", "Algorithms", "Canvas API"],
      image: "https://via.placeholder.com/400x300",
      links: {
        github: "https://github.com/yourusername/dsa-visualizer",
        live: "https://dsa-visualizer-demo.vercel.app",
      },
    },
  ]

  const displayProjects = projects.length > 0 ? projects : defaultProjects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProjects.map((project, index) => (
        <ProjectCard key={project._id || index} project={project} index={index} />
      ))}
    </div>
  )
}

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <div className="overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm h-full flex flex-col rounded-lg">
        <div className="relative overflow-hidden group">
          <img
            src={project.image || "https://via.placeholder.com/400x300"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-2">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm flex items-center gap-1 hover:bg-background/90 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              )}

              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm flex items-center gap-1 hover:bg-background/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              )}
            </div>
          </div>

          {/* Animated overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>

        <div className="p-4 pt-0 flex flex-wrap gap-2">
          {project.tags &&
            project.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="px-2 py-1 text-xs rounded-full border border-border/50 bg-primary/5">{tag}</span>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsShowcase
