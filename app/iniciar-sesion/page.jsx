import React from 'react';
import LoginForm from "@/app/iniciar-sesion/LoginForm";

export default function IniciarSesion() {
  return (
    <div
      className="flex-container bg-second-section h-screen w-screen text-3xl bg-black"
    >
      <div className="flex justify-around flex-col rounded-md shadow-lg shadow-neutral-500 mx-5 md:px-0 md:h-2/3 xl:w-1/3 bg-neutral-900/80">
        <LoginForm />
      </div>
    </div>
  );
}
