import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center justify-center space-x-4 md:space-x-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated IP icon - Made bigger */}
      <motion.div 
        className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 p-3 md:p-4 shadow-lg"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Network nodes animation */}
        <div className="relative w-full h-full">
          {/* Center node - Made bigger */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Corner nodes - Made bigger */}
          {[
            { top: '15%', left: '15%' },
            { top: '15%', right: '15%' },
            { bottom: '15%', left: '15%' },
            { bottom: '15%', right: '15%' }
          ].map((position, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"
              style={position}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
            {[
              { x1: 12, y1: 12, x2: 24, y2: 24 },
              { x1: 36, y1: 12, x2: 24, y2: 24 },
              { x1: 12, y1: 36, x2: 24, y2: 24 },
              { x1: 36, y1: 36, x2: 24, y2: 24 }
            ].map((line, index) => (
              <motion.line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Animated text - Made bigger */}
      <motion.div 
        className="flex flex-col"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1 
          className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          IP Tracker
        </motion.h1>
        
        {/* Animated underline - Made thicker */}
        <motion.div 
          className="h-1 md:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-1"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Floating particles effect - Made bigger */}
      <div className="absolute -inset-4 md:-inset-6 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, -35, -15],
              x: [0, Math.random() * 25 - 12.5, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Logo;
