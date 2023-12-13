import React from 'react';
import ProgressStepper from "./ProgressStepper";

export default function Turnos() {
  return (
    <div className="bg-shedule h-screen w-screen flex-container">
        <div className="md:w-2/5 h-3/5 mb-16 text-webkit-center">
          <ProgressStepper />
        </div>
    </div>
  );
}
