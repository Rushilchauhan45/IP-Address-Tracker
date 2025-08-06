import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20 py-8"
    >
      <div className="glass rounded-2xl p-6 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Creator info */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="font-semibold gradient-text">Rushil Chauhan</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://linkedin.com/in/rushilchauhan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-lg hover:glass-intense transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors" />
            </motion.a>
            
            <motion.a
              href="https://github.com/rushilchauhan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-lg hover:glass-intense transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors" />
            </motion.a>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-4 pt-4 border-t border-glass-border text-center">
          <p className="text-sm text-muted-foreground">
            Powered by{' '}
            <a 
              href="https://ipapi.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors"
            >
              ipapi.co
            </a>
            {' '}• Built with React, Three.js & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}