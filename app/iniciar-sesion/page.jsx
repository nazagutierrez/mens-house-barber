import React from 'react';
import LoginForm from "@/app/iniciar-sesion/LoginForm";

export default function IniciarSesion() {
  return (
    <div
      className="flex-container bg-second-section h-screen w-screen text-3xl bg-[#1a1a1a]"
    >
      <div className="flex justify-around flex-col rounded-md shadow-2xl shadow-neutral-800 mx-5 md:px-0 md:h-2/3 xl:w-1/3 bg-neutral-900 z-30">
        <LoginForm />
      </div>
    </div>
  );
}
