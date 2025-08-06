import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2 } from 'lucide-react';

interface IPInputProps {
  onSearch: (ip: string) => void;
  loading: boolean;
}

export default function IPInput({ onSearch, loading }: IPInputProps) {
  const [ipValue, setIpValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ipValue.trim()) {
      onSearch(ipValue.trim());
    }
  };

  const handleCurrentIP = () => {
    onSearch('current');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto space-y-6"
    >
      {/* Main title */}
      <div className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold gradient-text-glow"
        >
          IP Tracker
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          Discover the world behind any IP address
        </motion.p>
      </div>

      {/* Search form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        onSubmit={handleSubmit}
        className="glass-intense rounded-2xl p-6 space-y-4"
      >
        <div className="relative">
          <input
            type="text"
            value={ipValue}
            onChange={(e) => setIpValue(e.target.value)}
            placeholder="Enter any IP Address (e.g., 103.240.86.32)"
            className="input-futuristic w-full text-lg pr-16"
            disabled={loading}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
        </div>
        
        <div className="flex gap-4 flex-col sm:flex-row">
          <button
            type="submit"
            disabled={loading || !ipValue.trim()}
            className="btn-futuristic flex-1 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Tracking...
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                Track Now
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleCurrentIP}
            disabled={loading}
            className="btn-futuristic flex-1 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Track My IP
          </button>
        </div>
      </motion.form>

      {/* Sample IP suggestion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center"
      >
        <p className="text-sm text-muted-foreground">
          Try sample IP: 
          <button
            onClick={() => setIpValue('103.240.86.32')}
            className="ml-2 text-primary hover:text-primary-glow transition-colors font-mono"
          >
            103.240.86.32
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
}