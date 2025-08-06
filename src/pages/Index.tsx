import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import IPInput from '@/components/IPInput';
import IPDetailsCard from '@/components/IPDetailsCard';
import InfoCard from '@/components/InfoCard';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { useIPTracker } from '@/hooks/useIPTracker';

const Index = () => {
  const { loading, data, trackIP } = useIPTracker();

  // Auto-detect user's IP on page load
  useEffect(() => {
    trackIP('current');
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Simple 3D background */}
      <ThreeBackground />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Logo at the top */}
          <motion.div 
            className="flex justify-center pt-8 pb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Logo />
          </motion.div>

          {/* Hero section with IP input */}
          <section className="min-h-[calc(100vh-200px)] flex items-center justify-center">
            <IPInput onSearch={trackIP} loading={loading} />
          </section>

          {/* Results section */}
          {data && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <IPDetailsCard data={data} />
            </motion.section>
          )}

          {/* Info section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InfoCard />
          </motion.section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
