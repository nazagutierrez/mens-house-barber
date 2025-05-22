import React from 'react';
import Image from "next/image";
import Logo from "../../components/assets/logo-peluqueria-blanco.webp";
import Link from "next/link";
import { BsScissors } from "react-icons/bs";

export default function Nosotros() {
  return (
    <div className="bg-[#1a1a1a] relative h-screen w-screen px-3 text-center py-20 md:pt-20 xl:pt-36 text-darkerWhite">
      <div className="absolute bg-white/10 blur-3xl top-[40%] left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="flex h-full items-center justify-around md:justify-between gap-5 flex-col lg:text-xl">
        <p className="text-2xl lg:text-3xl italic">
          SOMOS MEN{"'"}S HOUSE BARBER SHOP
        </p>
        <Image
          unoptimized
          priority
          src={Logo}
          alt="BarberLogo"
          className="h-[200px] md:h-[300px] object-contain"
        />
        <p className="lg:text-xl md:w-2/3 text-center">
          Men{"'"}s house barber es una barbería/peluquería tradicional ubicada en Junín
          Buenos Aires Argentina, solo para hombres y niños. Los cortes
          clásicos y la afeitada tradicional con toalla caliente, son nuestra
          especialidad. Men{"'"}s House barber se encuentra en una estado de
          expansión constante para brindar la mejor atención, atendida por
          Ignacio Pérez Larini, fundador, peluquero, barbero y estilista, con
          una experiencia de más de 15 años en el servicio de peluquería.
        </p>
        <p>
          Podes ver algunos ejemplos de nuestros clientes en la sección{" "}
          <Link
            href="/galeria"
            className="text-effect underline underline-offset-2 decoration-1 decoration-yellow-500/70"
          >
            Galería.
          </Link>
        </p>
        <div className="flex-container gap-2 text-xl md:text-3xl">
          <i>
            {" "}
            <BsScissors />{" "}
          </i>
          <p>Te esperamos!</p>
          <i>
            {" "}
            <BsScissors />{" "}
          </i>
        </div>
      </div>
    </div>
  );
}
