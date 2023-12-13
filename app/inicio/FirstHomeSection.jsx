import React from 'react';
import Image from "next/image";
import logo from "../../components/assets/logo-peluqueria-blanco.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";

export default function FirstHomeSection() {
  return (
    <section
      className="bg-first-section h-screen relative flex-container flex-col sm:flex-row text-darkerWhite children-scroll pb-8 md:pb-0"
    >
      <div className="w-1/2 flex-container flex-col text-center">
        <Image unoptimized src={logo} height={280} width={280} alt="BarberLogo" />
        <p className="sm:w-1/2 text-3xl md:text-6xl mt-5 mb-2">MEN{"'"}S HOUSE BARBER</p>
        <p
          className="sm:w-1/2 text-xl sm:text-2xl italic font-light mb-3 sm:mb-0"
        >
          Estilo único
        </p>
      </div>
      <div className="w-1/2 relative flex-col flex-container text-center text-xl mr-2 sm:mr-16 lg:mr-0">
        <h1 className="mb-5 text-5xl hidden sm:block">AGENDA ABIERTA</h1>
        <div className="flex-container gap-2">
          <Link
            href="/turnos"
            className="border border-gray-400 bg-gray-200 font-bold text-black text-xl sm:text-3xl text-effect ronded-sm py-1 px-5"
          >
            RESERVA TU TURNO
          </Link>
          <p className="text-3xl arrow-animation text-effect hidden lg:block">
            <BsArrowRight />
          </p>
        </div>
      </div>
      <i className="text-4xl pb-10 md:pb-0 absolute md:hidden bottom-10"><SlArrowDown /></i>
    </section>
  );
}
