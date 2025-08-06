import { motion } from 'framer-motion';
import { Target, Cog, Shield, Zap } from 'lucide-react';

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
      className="glass rounded-xl p-6 group hover:glass-intense transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
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
        className="glass-intense rounded-2xl p-8 mb-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            🎯 What is an IP Tracker?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            This tool lets you trace any IP address and shows the region, ISP, and network information — 
            useful for analytics, debugging, and security. Get instant insights into the geographical 
            location and network details of any IP address worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </motion.div>

      {/* How it works */}
      <motion.div 
        variants={itemVariants}
        className="glass rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold gradient-text mb-4 text-center">
          ⚙️ How It Works
        </h3>
        <p className="text-muted-foreground text-center leading-relaxed">
          When you enter an IP address, our tool calls a public geolocation API 
          (<span className="font-mono text-primary">ipapi.co</span>) and fetches real-time data, 
          which is then displayed in a beautiful, interactive interface. The entire process 
          is secure, fast, and provides comprehensive network intelligence.
        </p>
      </motion.div>
    </motion.div>
  );
}