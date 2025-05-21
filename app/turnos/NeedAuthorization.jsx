import React from 'react';

function NeedAuthorization() {
  return (
    <div className="w-full h-full text-white flex-container flex-col text-center">
      <section className="hidden xl:flex h-20 mb-5 w-full bg-transparent px-20 justify-around items-center">
        <div className="h-10 w-10 bg-neutral-800 rounded-full text-effect" />
        <div className="text-effect bg-neutral-800 h-1 w-28" />
        <div className="h-10 w-10 bg-neutral-800 rounded-full text-effect" />
        <div className="text-effect bg-neutral-800 h-1 w-28" />
        <div className="h-10 w-10 bg-neutral-800 rounded-full text-effect" />
      </section>
      <section className="bg-neutral-800/80 hidden xl:block w-full mt-5">
        <div className="h-[420px] w-full flex flex-col items-start justify-center">
          <div className="w-1/4 h-10 rounded-sm ml-5 text-effect bg-neutral-800 mb-5 mt-2" />
          <div className="w-1/5 h-24 rounded-sm ml-5 text-effect bg-neutral-800" />
          <div className="w-full h-full flex-container">
            <div className="h-[250px] w-1/2 rounded text-effect bg-neutral-800" />
          </div>
        </div>
        <footer className="bg-turnos flex justify-between items-center px-6 text-xl mt-5">
          <button className="w-1/5 h-10 rounded-sm py-1 bg-neutral-800 text-effect" />
          <button className="w-1/5 h-10 rounded-sm py-1 bg-neutral-800 text-effect my-3" />
        </footer>
      </section>

      <div className="absolute w-4/5 md:w-1/2 h-3/4 backdrop-blur-sm bg-neutral-800/50 text-white flex-container flex-col text-center mt-5">
        <h1 className="text-2xl underline underline-offset-2 mb-5 text-effect">NECESITAS AUTORIZACIÓN</h1>
        <p>
          Para poder solicitar un truno tenés que pedirle al peluquero que te
          autorice en la página.
        </p>
        <p>Podes contactarlo por Whatsapp o Instagram.</p>
        <p className="mt-3 text-xl">Muchas Gracias!</p>
      </div>

    </div>
  );
}

export default NeedAuthorization;
