import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userBMR, setUserBMR] = useState(0);

  const saveUserData = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
  };

  const saveUserBMR = (bmr) => {
    setUserBMR(Math.round(bmr));
  };


  return (
    <UserContext.Provider value={{ userData, saveUserData, userBMR, saveUserBMR }}>
      {children}
    </UserContext.Provider>
  );
};
