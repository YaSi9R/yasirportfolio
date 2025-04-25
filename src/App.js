import { useState } from "react"
import { Routes, Route} from "react-router-dom"
// import CircularCube from "./components/CircularCube"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import "./App.css"
function App() {
  const [theme, setTheme] = useState("light")


  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    // localStorage.setItem("theme", newTheme)
    document.documentElement.className = newTheme
  }

  return (
   
      <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />

         
        </Routes>
        <Footer/>


 {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}

      </div>
   
  )
}

export default App
