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
  countryCode?: string;
  isp?: string;
  as?: string;
}

export function useIPTracker() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IPData | null>(null);

  const trackIP = async (ip: string) => {
    setLoading(true);
    
    try {
      const url = ip === 'current' 
        ? 'https://ip-api.com/json/'
        : `https://ip-api.com/json/${ip}`;
      
      const response = await axios.get(url);
      
      if (response.data.status === 'fail') {
        throw new Error(response.data.message || 'Invalid IP address');
      }

      const ipData: IPData = {
        ip: response.data.query,
        city: response.data.city || 'Unknown',
        region: response.data.regionName || response.data.region || 'Unknown',
        country: response.data.country || 'Unknown',
        postal: response.data.zip || '',
        latitude: response.data.lat || 0,
        longitude: response.data.lon || 0,
        org: response.data.org || response.data.isp || 'Unknown ISP',
        timezone: response.data.timezone || 'Unknown',
        currency: '', // ip-api.com doesn't provide currency info
        countryCode: response.data.countryCode || '',
        isp: response.data.isp || 'Unknown ISP',
        as: response.data.as || ''
      };

      setData(ipData);
      
      toast({
        title: "IP Tracked Successfully! 🎯",
        description: `Found location: ${ipData.city}, ${ipData.country}`,
      });

    } catch (error: any) {
      console.error('IP tracking error:', error);
      
      const errorMessage = error.response?.data?.message || 
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