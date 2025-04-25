"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si"

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stackItems = [
    {
      letter: "M",
      name: "MongoDB",
      description: "NoSQL database for storing application data",
      icon: <SiMongodb className="h-12 w-12 text-green-500" />,
      color: "from-green-500 to-green-600",
    },
    {
      letter: "E",
      name: "Express.js",
      description: "Backend web application framework for Node.js",
      icon: <SiExpress className="h-12 w-12 text-gray-500" />,
      color: "from-gray-500 to-gray-600",
    },
    {
      letter: "R",
      name: "React.js",
      description: "Frontend JavaScript library for building user interfaces",
      icon: <SiReact className="h-12 w-12 text-blue-500" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      letter: "N",
      name: "Node.js",
      description: "JavaScript runtime environment for server-side applications",
      icon: <SiNodedotjs className="h-12 w-12 text-green-600" />,
      color: "from-green-600 to-green-700",
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-center items-center mb-8">
        <div className="relative">
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {stackItems.map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
                  {item.letter}
                </div>
                {index < stackItems.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 h-0.5 w-4 bg-primary/30 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
          ></motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stackItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <div className="overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm h-full rounded-lg">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative p-4 rounded-full">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-10`}></div>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-8 max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground">
          I specialize in building full-stack web applications using the MERN stack. This powerful combination allows me
          to create seamless, efficient, and scalable applications from front to back.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default TechStack
