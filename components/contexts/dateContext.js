"use client";

import React, { useState, useContext, createContext } from "react";

export const DateContext = createContext();

const initialValue = {
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
};

export const DateContextProvider = ({ children }) => {
  const [date, setDate] = useState(initialValue);

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context)
    throw new Error("useDateContext must be used within a DateContextProvider");
  return context;
};
