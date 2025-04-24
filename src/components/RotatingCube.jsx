import React from 'react'
import {motion} from "framer-motion";
function RotatingCube() {
    return (
        <div className="perspective-500 w-24 h-24 relative">
          <motion.div
            className="w-full h-full relative preserve-3d"
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: "translateZ(3rem)",
                background: "rgba(139, 92, 246, 0.2)",
                backdropFilter: "blur(1px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="text-2xl font-bold text-primary">R</span>
            </div>
    
            {/* Back face */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: "rotateY(180deg) translateZ(3rem)",
                background: "rgba(236, 72, 153, 0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="text-2xl font-bold text-primary">E</span>
            </div>
    
            {/* Left face */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: "rotateY(-90deg) translateZ(3rem)",
                background: "rgba(16, 185, 129, 0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="text-2xl font-bold text-primary">A</span>
            </div>
    
            {/* Right face */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: "rotateY(90deg) translateZ(3rem)",
                background: "rgba(245, 158, 11, 0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="text-2xl font-bold text-primary">C</span>
            </div>
    
            {/* Top face */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: "rotateX(90deg) translateZ(3rem)",
                background: "rgba(239, 68, 68, 0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="text-2xl font-bold text-primary">T</span>
            </div>
    
            {/* Bottom face */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: "rotateX(-90deg) translateZ(3rem)",
                background: "rgba(124, 58, 237, 0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="text-2xl font-bold text-primary">J</span>
            </div>
          </motion.div>
        </div>
      )
}

export default RotatingCube