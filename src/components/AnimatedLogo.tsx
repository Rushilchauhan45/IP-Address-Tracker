import { motion } from 'framer-motion';
import { MapPin, Wifi, Globe } from 'lucide-react';

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-center"
    >
      {/* Central Globe with pulsing effect */}
      <motion.div
        className="relative"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 360]
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 w-20 h-20 border-2 border-primary/30 rounded-full"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle ring */}
        <motion.div
          className="absolute inset-2 w-16 h-16 border-2 border-secondary/40 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner core with gradient */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center shadow-2xl"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(139, 92, 246, 0.5)",
              "0 0 40px rgba(6, 182, 212, 0.8)",
              "0 0 20px rgba(139, 92, 246, 0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0'
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
            }}
            initial={{
              x: Math.cos((i * 60) * Math.PI / 180) * 40,
              y: Math.sin((i * 60) * Math.PI / 180) * 40
            }}
          />
        ))}
      </motion.div>
      
      {/* Side elements */}
      <motion.div
        className="absolute left-0"
        animate={{ 
          x: [-10, 10, -10],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <MapPin className="w-6 h-6 text-secondary" />
      </motion.div>
      
      <motion.div
        className="absolute right-0"
        animate={{ 
          x: [10, -10, 10],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Wifi className="w-6 h-6 text-accent" />
      </motion.div>
      
      {/* Pulse waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0 w-20 h-20 border border-primary/20 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1
          }}
        />
      ))}
    </motion.div>
  );
}
