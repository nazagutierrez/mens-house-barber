import React from 'react';
import { BsScissors, BsTools } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import Carousel from "./Carousel";
import Link from "next/link";

export default function Galeria() {
  return (
      <div className="bg-gallery w-screen h-screen flex-container flex-wrap text-xl sm:text-2xl md:p-20 text-darkerWhite text-center father-scroll">
        <section className="relative md:w-1/2 h-full w-3/4 flex-container pb-14 md:pb-0 flex-col children-scroll">
          <p className="text-2xl sm:text-3xl mb-10 sm:mb-24">GALERÍA DE FOTOS</p>
          <p className="mb-5 md:mb-10">
            Estos son algunos clientes que pasaron a cortarse con
            nosotros, nos encanto el resultado y a ellos también!
          </p>
          <p>
            ¡Te esperamos para que vengas a hacerte el diseño que vos quieras!
          </p>
          <div className="flex-container w-4/5 sm:w-full mt-10 sm:mt-24 gap-2">
            <i> <BsScissors /> </i>
            <p className="underline underline-offset-4 text-effect">MEN{"'"}S HOUSE BARBER</p>
            <i> <BsScissors /> </i>
          </div>
        <i className="text-4xl absolute md:hidden bottom-20 md:bottom-6"><SlArrowDown /></i>
        </section>
        <section className="md:w-1/2 h-full w-screen bg-gallery md:bg-none flex-container children-scroll">
          <Carousel />
        </section>
      </div>
  );
}
