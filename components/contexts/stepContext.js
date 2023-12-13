"use client";

import React, { useState, useContext, createContext } from "react";

export const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevAvtiveStep) => prevAvtiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevAvtiveStep) => prevAvtiveStep + 1);
  };

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep, handleBack, handleNext }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context)
    throw new Error("useStepContext must be used within a StepContextProvider");
  return context;
};
