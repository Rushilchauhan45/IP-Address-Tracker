import { useState } from 'react';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';

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

export function useIPTracker() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IPData | null>(null);

  const trackIP = async (ip: string) => {
    setLoading(true);
    
    try {
      const url = ip === 'current' 
        ? 'https://ipapi.co/json/'
        : `https://ipapi.co/${ip}/json/`;
      
      const response = await axios.get(url);
      
      if (response.data.error) {
        throw new Error(response.data.reason || 'Invalid IP address');
      }

      const ipData: IPData = {
        ip: response.data.ip,
        city: response.data.city || 'Unknown',
        region: response.data.region || 'Unknown',
        country: response.data.country_name || response.data.country || 'Unknown',
        postal: response.data.postal || '',
        latitude: response.data.latitude || 0,
        longitude: response.data.longitude || 0,
        org: response.data.org || 'Unknown ISP',
        timezone: response.data.timezone || 'Unknown',
        currency: response.data.currency || ''
      };

      setData(ipData);
      
      toast({
        title: "IP Tracked Successfully! 🎯",
        description: `Found location: ${ipData.city}, ${ipData.country}`,
      });

    } catch (error: any) {
      console.error('IP tracking error:', error);
      
      const errorMessage = error.response?.data?.reason || 
                          error.message || 
                          'Failed to track IP address';
      
      toast({
        title: "Tracking Failed ❌",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    trackIP
  };
}