import React, { createContext, useContext, useState } from 'react';

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [udisecode, setUdiseCode] = useState(null);

  return (
    <SchoolContext.Provider value={{ udisecode, setUdiseCode }}>
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => useContext(SchoolContext);
