"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si"

const MernSpaceVisualization = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeStack, setActiveStack] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const stackItems = [
    {
      id: "mongodb",
      name: "MongoDB",
      icon: <SiMongodb className="h-full w-full" />,
      color: "text-green-500",
      bgColor: isDark ? "bg-green-950/30" : "bg-green-100",
      description: "NoSQL database for storing application data",
      position: { top: "15%", left: "20%" },
    },
    {
      id: "express",
      name: "Express",
      icon: <SiExpress className="h-full w-full" />,
      color: "text-gray-500",
      bgColor: isDark ? "bg-gray-950/30" : "bg-gray-100",
      description: "Web application framework for Node.js",
      position: { top: "25%", right: "20%" },
    },
    {
      id: "react",
      name: "React",
      icon: <SiReact className="h-full w-full" />,
      color: "text-blue-500",
      bgColor: isDark ? "bg-blue-950/30" : "bg-blue-100",
      description: "JavaScript library for building user interfaces",
      position: { bottom: "25%", left: "20%" },
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: <SiNodedotjs className="h-full w-full" />,
      color: "text-green-600",
      bgColor: isDark ? "bg-green-950/30" : "bg-green-100",
      description: "JavaScript runtime for server-side applications",
      position: { bottom: "15%", right: "20%" },
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] rounded-3xl "
      onMouseLeave={() => setActiveStack(null)}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 pointer-events-none"></div>


      {/* Main container */}
      <div className="relative bg-background/80 backdrop-blur-sm w-full h-full flex items-center justify-center overflow-hidden ">
        {/* Stars background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Center React logo with orbit */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Orbit paths */}
          <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[400px] h-[250px] rounded-full border border-primary/15 animate-[spin_25s_linear_infinite]"></div>
          <div className="absolute w-[250px] h-[400px] rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]"></div>

          {/* Center React logo */}
          <motion.div
            className={`relative z-10 w-32 h-32 ${
              isDark ? "text-blue-400" : "text-blue-500"
            } flex items-center justify-center`}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <SiReact className="w-full h-full" />
          </motion.div>

          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-30"
            style={{
              background: isDark ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.2)",
            }}
          ></div>
        </div>

        {/* MERN stack items */}
        {stackItems.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute w-16 h-16 ${item.color} ${
              item.bgColor
            } rounded-full flex items-center justify-center cursor-pointer z-20 p-3 border ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
            style={item.position}
            whileHover={{ scale: 1.2 }}
            onMouseEnter={() => setActiveStack(item.id)}
            animate={{
              x: item.id === "mongodb" || item.id === "react" ? [-10, 10, -10] : [10, -10, 10],
              y: item.id === "mongodb" || item.id === "nodejs" ? [-10, 10, -10] : [10, -10, 10],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isDark ? "#8b5cf6" : "#a78bfa"} />
              <stop offset="100%" stopColor={isDark ? "#3b82f6" : "#60a5fa"} />
            </linearGradient>
          </defs>
          {stackItems.map((item, index) => {
            const nextItem = stackItems[(index + 1) % stackItems.length]
            const startX =
              Number.parseInt(item.position.left?.toString() || "0") ||
              100 - Number.parseInt(item.position.right?.toString() || "0")
            const startY =
              Number.parseInt(item.position.top?.toString() || "0") ||
              100 - Number.parseInt(item.position.bottom?.toString() || "0")
            const endX =
              Number.parseInt(nextItem.position.left?.toString() || "0") ||
              100 - Number.parseInt(nextItem.position.right?.toString() || "0")
            const endY =
              Number.parseInt(nextItem.position.top?.toString() || "0") ||
              100 - Number.parseInt(nextItem.position.bottom?.toString() || "0")

            return (
              <motion.line
                key={`${item.id}-${nextItem.id}`}
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            )
          })}
        </svg>

        {/* Info tooltip */}
        <AnimatePresence>
          {activeStack && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm p-3 rounded-xl border border-border/50 shadow-lg z-30"
            >
              <div className="text-center">
                <h3 className="font-medium text-lg">{stackItems.find((item) => item.id === activeStack)?.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {stackItems.find((item) => item.id === activeStack)?.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating code snippets */}
        <motion.div
          className="absolute top-6 left-6 bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-border/50 text-xs font-mono"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <span className="text-blue-500">import</span> <span className="text-green-500">{"{ useState }"}</span>{" "}
          <span className="text-blue-500">from</span> <span className="text-orange-500">'react'</span>
        </motion.div>

        <motion.div
          className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-border/50 text-xs font-mono"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <span className="text-purple-500">{"<"}</span>
          <span className="text-red-500">App</span> <span className="text-purple-500">{"/>"}</span>
        </motion.div>

        {/* Mouse follower light effect */}
        <div
          className="absolute w-40 h-40 rounded-full pointer-events-none opacity-20 blur-xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(167, 139, 250, 0.5) 0%, rgba(96, 165, 250, 0.2) 50%, transparent 70%)",
            transform: `translate(${mousePosition.x - 80}px, ${mousePosition.y - 80}px)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>
      </div>

      {/* MERN Stack label */}
      <motion.div
        className="absolute -top-6 -right-1 bg-background/80 backdrop-blur-sm p-3 rounded-xl border border-border/50 shadow-lg"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          MERN Stack Developer
        </div>
      </motion.div>
      <motion.div
        className="absolute top-[400px] left-[50px] bg-background/80 backdrop-blur-sm p-3 rounded-xl border border-border/50 shadow-lg"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Frontend Developer
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[140px] left-[20px] bg-background/80 backdrop-blur-sm p-3 rounded-xl border border-border/50 shadow-lg"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          JAVA Developer
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[230px] right-[20px] bg-background/80 backdrop-blur-sm p-3 rounded-xl border border-border/50 shadow-lg"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Backend Developer
        </div>
      </motion.div>
    </div>
  )
}

export default MernSpaceVisualization
