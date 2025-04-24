import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Link } from "react-router-dom"
import { Download, MessageSquare, Github, Linkedin, Instagram, ChevronDown } from "lucide-react"
import MernSpaceVisualization from "../components/MernSpaceVisualization"
import RotatingCube from "../components/RotatingCube"
import TechStack from "../components/TechStack"
import SkillsShowcase from "../components/SkillsShowcase"
import ProjectsShowcase from "../components/ProjectsShowcase"

const Home = ({ theme, toggleTheme }) => {
    const userData = {
        name: 'Mohd Yasir',
        title: 'Full Stack Developer',
        // add other fields you need
    };

    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll()
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -300])
    // const skills = userData.skills;
    // Only show first 3 projects on home page
    // const featuredProjects = projects.slice(0, 3)
    // Only show first 4 skills on home page
    // const featuredSkills = skills.slice(0, 4)

    return (

        <div ref={containerRef}>
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
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
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </div>
                <motion.div style={{ y: parallaxY }} className="container px-4 md:px-6 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                            className="space-y-4"
                        >
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-sm rounded-full bg-background/80 backdrop-blur-sm border border-purple-500/20">
                                        <span className="text-primary">Full Stack Developer</span>
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-background/80 backdrop-blur-sm border border-red-500/20">
                                        <span className="text-red-500">JAVA Developer</span>
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                                    Hi! I'm{" "}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                                        {userData?.name || "Developer"}
                                    </span>
                                </h1>
                                <div className="text-xl md:text-2xl font-medium text-muted-foreground h-8">
                                    <TypeAnimation
                                        sequence={[
                                            "I am a MERN Stack Developer",
                                            2000,
                                            "I am a JAVA Developer",
                                            2000,
                                            "I build web applications",
                                            2000,
                                            "I create user experiences",
                                            2000,
                                            "I solve problems with code",
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Number.POSITIVE_INFINITY}
                                    />
                                </div>
                                <p className="text-muted-foreground max-w-[600px]">
                                    {userData?.bio ||
                                        "I'm a software developer specializing in building exceptional digital experiences with the MERN stack."}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button className="relative overflow-hidden group px-4 py-2 bg-primary text-white rounded-md">
                                    <span className="relative z-10">Download CV</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <Download className="ml-2 h-4 w-4 relative z-10 inline" />
                                </button>
                                <button className="px-4 py-2 border border-border rounded-md group">
                                    Let's Talk
                                    <MessageSquare className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12 inline" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <motion.a
                                    href={userData?.social?.github || "https://github.com"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-background p-2 rounded-full border border-border hover:border-primary transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                </motion.a>
                                <motion.a
                                    href={userData?.social?.instagram || "https://instagram.com"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-background p-2 rounded-full border border-border hover:border-primary transition-colors"
                                >
                                    <Instagram className="h-5 w-5" />
                                </motion.a>
                                <motion.a
                                    href={userData?.social?.linkedin || "https://linkedin.com"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-background p-2 rounded-full border border-border hover:border-primary transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </motion.a>

                                <div className="absolute bottom-10 left-[400px] buttom-[10px]  hidden md:block">
                                    <RotatingCube />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Part */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                            className="relative  lg:block"
                        >
                            <div className="relative">
                                <MernSpaceVisualization />


                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
                        <ChevronDown className="h-6 w-6 animate-bounce" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Tech Stack Section */}
            <section id="tech-stack" className="py-24 relative bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-2 mb-8">
                        <h2 className="text-3xl font-bold tracking-tighter">My Tech Stack</h2>
                        <p className="text-muted-foreground max-w-[600px] mx-auto">Built with MERN and more</p>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
                    </div>

                    <div className="mt-12">
                        <TechStack />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-24 relative">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-2 mb-8">
                        <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
                        <p className="text-muted-foreground max-w-[600px] mx-auto">Technologies I work with</p>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
                    </div>

                    <div className="mt-12">
                        <SkillsShowcase />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 relative bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-2 mb-8">
                        <h2 className="text-3xl font-bold tracking-tighter">My Projects</h2>
                        <p className="text-muted-foreground max-w-[600px] mx-auto">Recent work I've done</p>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
                    </div>

                    <div className="mt-12">
                        <ProjectsShowcase projects={userData?.featuredProjects || []} />
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link to="/projects" className="px-4 py-2 border border-border rounded-md group inline-flex items-center">
                            View All Projects
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Home
