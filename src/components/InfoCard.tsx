import { motion } from 'framer-motion';
import { Target, Cog, Shield, Zap, Globe, MapPin, Wifi, Clock } from 'lucide-react';

export default function InfoCard() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <motion.div 
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
      }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/50 shadow-lg hover:shadow-purple-500/30 transition-all duration-500 relative overflow-hidden group"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-3 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="flex items-start gap-4 relative z-10">
        <motion.div 
          whileHover={{ 
            scale: 1.2, 
            rotate: 360,
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
          }}
          transition={{ duration: 0.6, type: "spring" }}
          className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex-shrink-0 shadow-lg"
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
        <div>
          <motion.h3 
            className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-4xl mx-auto mt-16"
    >
      {/* Main info section */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.02, rotateX: 2 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 mb-8 border border-purple-500/60 shadow-2xl relative overflow-hidden"
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm animate-pulse" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎯 What is an IP Tracker?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              This tool lets you trace any IP address and shows the region, ISP, and network information — 
              useful for analytics, debugging, and security. Get instant insights into the geographical 
              location and network details of any IP address worldwide.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <FeatureCard
              icon={Target}
              title="Precise Location Tracking"
              description="Get accurate geographical information including city, region, country, and postal code for any IP address."
            />
            
            <FeatureCard
              icon={Cog}
              title="Network Analysis"
              description="Discover ISP details, organization info, and network infrastructure behind any IP address."
            />
            
            <FeatureCard
              icon={Shield}
              title="Security Research"
              description="Perfect for cybersecurity professionals to analyze suspicious IPs and investigate potential threats."
            />
            
            <FeatureCard
              icon={Zap}
              title="Real-time Data"
              description="Powered by live APIs providing up-to-date information with lightning-fast response times."
            />
          </motion.div>
        </div>
      </motion.div>

      {/* How it works */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/50 shadow-lg relative overflow-hidden group"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 text-center"
            whileHover={{ scale: 1.05 }}
          >
            ⚙️ How It Works
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            When you enter an IP address, our tool calls a public geolocation API 
            (<span className="font-mono text-purple-400 font-semibold">ip-api.com</span>) and fetches real-time data, 
            which is then displayed in a beautiful, interactive interface. The entire process 
            is secure, fast, and provides comprehensive network intelligence.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}