import React, { useState } from 'react';
import { ToggleContext } from './ToggleContext';

export function ToggleProvider({ children }) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <ToggleContext.Provider value={{ isOn, toggleSwitch }}>
      {children}
    </ToggleContext.Provider>
  );
}
