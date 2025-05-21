import React from 'react';
import Link from "next/link";
import CloseSessionButton from "../common/CloseSessionButton";
import SliderMenu from "./SliderMenu";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="fixed top-0 left-0 md:pl-20 flex justify-end md:justify-between w-full text-xl font-semibold text-darkerWhite z-50">
          <div className="md:flex hidden flex-row h-20 gap-16 w-full items-center">
            <li>
              <div className="fancytexthover">
                <Link href="/">INICIO</Link>
              </div>
            </li>
            <li>
              <div className="fancytexthover">
                <Link href="/turnos">TURNOS</Link>
              </div>
            </li>
            <li>
              <div className="fancytexthover">
                <Link href="/nosotros">NOSOTROS</Link>
              </div>
            </li>
            <li>
              <div className="fancytexthover">
                <Link href="/galeria">GALERÍA</Link>
              </div>
            </li>
          </div>
          <div className="w-fit md:pr-4 self-center flex-container gap-5">
            <li className="md:flex hidden">
              <div className="fancytexthover text-5xl">
                <CloseSessionButton />
              </div>
            </li>
            <li className="md:hidden inline-flex">
              <SliderMenu />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
