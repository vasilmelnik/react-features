import React, { useState, useEffect } from 'react';

export const useBattery = () => {
  const [battery, setBattery] = useState({ level: 0, charging: false });
  const handleChange = ({ target: { level, charging } }) => setBattery({ level, charging });

  useEffect(() => {
    let battery;
    navigator.getBattery().then(bat => {
      battery = bat;
      battery.addEventListener('levelchange', handleChange);
      battery.addEventListener('changingchange', handleChange);
      handleChange({ target: battery });
    });

    return () => {
      battery.removeEventListener('levelchange', handleChange);
      battery.removeEventListener('changingchange', handleChange);
    }
  }, []);

  return battery;
}; 
