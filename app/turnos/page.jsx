import React from 'react';
import ProgressStepper from "./ProgressStepper";

export default function Turnos() {
  return (
    <div className="bg-[#1a1a1a] relative h-screen w-screen flex-container">
        <div className="absolute bg-white/10 blur-3xl top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />
        <div className="md:w-2/5 h-3/5 mb-16 text-webkit-center z-30">
          <ProgressStepper />
        </div>
    </div>
  );
}
