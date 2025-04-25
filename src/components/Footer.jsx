import { Link } from "react-router-dom"
import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Portfolio
            </h3>
            <p className="text-sm text-muted-foreground">
              A showcase of my projects and skills as a MERN stack developer.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">MongoDB</li>
              <li className="text-sm text-muted-foreground">Express.js</li>
              <li className="text-sm text-muted-foreground">React.js</li>
              <li className="text-sm text-muted-foreground">Node.js</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">contact@example.com</li>
              <li className="text-sm text-muted-foreground">+1 (123) 456-7890</li>
              <li className="text-sm text-muted-foreground">New York, USA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
