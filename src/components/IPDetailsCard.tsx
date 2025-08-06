import { motion } from 'framer-motion';
import { 
  MapPin, 
  Globe, 
  Wifi, 
  Clock, 
  DollarSign, 
  Mail,
  Navigation,
  Building
} from 'lucide-react';

interface IPData {
  ip: string;
  city: string;
  region: string;
  country: string;
  postal: string;
  latitude: number;
  longitude: number;
  org: string;
  timezone: string;
  currency: string;
}

interface IPDetailsCardProps {
  data: IPData;
}

export default function IPDetailsCard({ data }: IPDetailsCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const DetailItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <motion.div 
      variants={itemVariants}
      className="flex items-center gap-4 p-4 rounded-xl glass hover:glass-intense transition-all duration-300 group"
    >
      <div className="p-3 rounded-lg bg-gradient-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-lg font-semibold text-foreground truncate">{value}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div 
        variants={itemVariants}
        className="glass-intense rounded-2xl p-6 mb-6"
      >
        <h2 className="text-3xl font-bold gradient-text text-center mb-2">
          IP Address Details
        </h2>
        <p className="text-center text-muted-foreground">
          Location and network information for <span className="font-mono text-primary">{data.ip}</span>
        </p>
      </motion.div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DetailItem
          icon={Globe}
          label="IP Address"
          value={data.ip}
        />
        
        <DetailItem
          icon={MapPin}
          label="Location"
          value={`${data.city}, ${data.region}, ${data.country}`}
        />
        
        <DetailItem
          icon={Mail}
          label="Postal Code"
          value={data.postal || 'Not available'}
        />
        
        <DetailItem
          icon={Navigation}
          label="Coordinates"
          value={`${data.latitude}, ${data.longitude}`}
        />
        
        <DetailItem
          icon={Wifi}
          label="ISP / Organization"
          value={data.org}
        />
        
        <DetailItem
          icon={Clock}
          label="Timezone"
          value={data.timezone}
        />
        
        <DetailItem
          icon={DollarSign}
          label="Currency"
          value={data.currency || 'Not available'}
        />
        
        <DetailItem
          icon={Building}
          label="Country Code"
          value={data.country}
        />
      </div>

      {/* Footer with map suggestion */}
      <motion.div 
        variants={itemVariants}
        className="glass rounded-xl p-4 mt-6 text-center"
      >
        <p className="text-sm text-muted-foreground">
          📍 View location at: 
          <a 
            href={`https://www.google.com/maps?q=${data.latitude},${data.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-primary hover:text-primary-glow transition-colors underline"
          >
            Google Maps
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}