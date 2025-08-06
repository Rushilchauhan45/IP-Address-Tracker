import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import IPInput from '@/components/IPInput';
import IPDetailsCard from '@/components/IPDetailsCard';
import InfoCard from '@/components/InfoCard';
import Footer from '@/components/Footer';
import { useIPTracker } from '@/hooks/useIPTracker';

const Index = () => {
  const { loading, data, trackIP } = useIPTracker();

  // Auto-detect user's IP on page load
  useEffect(() => {
    trackIP('current');
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Three.js animated background */}
      <ThreeBackground />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Hero section with IP input */}
          <section className="min-h-screen flex items-center justify-center">
            <IPInput onSearch={trackIP} loading={loading} />
          </section>

          {/* Results section */}
          {data && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <IPDetailsCard data={data} />
            </motion.section>
          )}

          {/* Info section */}
          <section>
            <InfoCard />
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
