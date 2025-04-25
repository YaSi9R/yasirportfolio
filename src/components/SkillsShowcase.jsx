"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Server, Database } from "lucide-react"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si"

const SkillsShowcase = () => {
  const categories = [
    {
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "HTML", level: "Advanced", icon: <SiHtml5 className="h-8 w-8 text-orange-500" /> },
        { name: "CSS", level: "Advanced", icon: <SiCss3 className="h-8 w-8 text-blue-500" /> },
        { name: "JavaScript", level: "Advanced", icon: <SiJavascript className="h-8 w-8 text-yellow-500" /> },
        { name: "React.js", level: "Advanced", icon: <SiReact className="h-8 w-8 text-blue-400" /> },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: "Advanced", icon: <SiNodedotjs className="h-8 w-8 text-green-600" /> },
        { name: "Express.js", level: "Advanced", icon: <SiExpress className="h-8 w-8 text-gray-600" /> },
        { name: "REST API", level: "Advanced", icon: <Code className="h-8 w-8 text-purple-500" /> },
        { name: "GraphQL", level: "Intermediate", icon: <Code className="h-8 w-8 text-pink-500" /> },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: "Advanced", icon: <SiMongodb className="h-8 w-8 text-green-500" /> },
        { name: "Mongoose", level: "Advanced", icon: <Database className="h-8 w-8 text-green-400" /> },
        { name: "SQL", level: "Intermediate", icon: <Database className="h-8 w-8 text-blue-500" /> },
        { name: "Redis", level: "Beginner", icon: <Database className="h-8 w-8 text-red-500" /> },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState(categories[0].name)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-center mb-8 overflow-x-auto pb-2 snap-x">
        <div className="inline-flex p-1 rounded-lg bg-muted">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-md snap-start ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {categories.map(
          (category) =>
            activeCategory === category.name && (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm h-full rounded-lg">
                      <div className="p-4 flex flex-col items-center text-center space-y-3 relative">
                        <div className="p-4 rounded-full bg-primary/10 text-primary relative z-10 group-hover:bg-primary/20 transition-colors">
                          {skill.icon}
                          <div className="absolute inset-0 rounded-full bg-primary/5 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        <h3 className="font-medium text-base">{skill.name}</h3>

                        <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{
                              width:
                                skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "65%" : "40%",
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>

                        <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted absolute top-2 right-2">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </div>
  )
}

export default SkillsShowcase
